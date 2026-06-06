import { describe, it, expect } from "vitest";
import * as fc from "fast-check";
import {
  HealthScoreTracker,
  TokenBucketTracker,
  remapIndexedKeys,
} from "../../lib/rotation.js";

/**
 * DEEP STRESS: rotation tracker index-remap invariant.
 *
 * Trackers are keyed by the MUTABLE positional account index. When an account
 * is removed, survivors are reindexed in place and the trackers must be remapped
 * so each surviving account keeps ITS OWN heuristic state rather than inheriting
 * a removed/shifted neighbour's. This suite hammers that invariant with random
 * populations, random per-index state, and random removal sequences, using a
 * stable identity oracle to detect any misattribution.
 */

// A stable "fingerprint" we assign to each logical account independent of its
// shifting positional index, so we can assert state follows the right account.
interface LogicalAccount {
  id: number; // stable identity
  index: number; // current positional index (mutates on removal)
  health: number; // distinct sentinel score we recorded for it
  tokensDrained: number; // distinct drain amount we applied for it
}

const arbPopulation = fc
  .integer({ min: 2, max: 12 })
  .chain((n) =>
    fc.record({
      size: fc.constant(n),
      // A sequence of removals expressed as fractions, resolved to live indices
      // at apply time so they always target a valid surviving slot.
      removals: fc.array(fc.double({ min: 0, max: 0.999, noNaN: true }), {
        minLength: 0,
        maxLength: n - 1,
      }),
    }),
  );

describe("DEEP STRESS: tracker index remap on removal", () => {
  it("health score always follows the right account through random removal sequences", () => {
    fc.assert(
      fc.property(arbPopulation, ({ size, removals }) => {
        const tracker = new HealthScoreTracker();
        // Seed each index with a DISTINCT, recoverable score by recording a
        // distinct number of rate-limit hits (each -10, clamped at 0).
        const accounts: LogicalAccount[] = [];
        for (let i = 0; i < size; i++) {
          const hits = (i % 9) + 1; // 1..9 distinct hit counts
          for (let h = 0; h < hits; h++) tracker.recordRateLimit(i);
          accounts.push({
            id: i,
            index: i,
            health: tracker.getScore(i),
            tokensDrained: 0,
          });
        }

        // Apply the removal sequence, mirroring AccountManagerState.removeAccount:
        // splice + reindex survivors + remapAfterRemoval(removedIndex).
        for (const frac of removals) {
          if (accounts.length <= 1) break;
          const removedPos = Math.min(
            accounts.length - 1,
            Math.floor(frac * accounts.length),
          );
          const removedIndex = accounts[removedPos]!.index;

          accounts.splice(removedPos, 1);
          accounts.forEach((acc, i) => {
            acc.index = i;
          });
          tracker.remapAfterRemoval(removedIndex);
        }

        // INVARIANT: each surviving account reads back the score we recorded for
        // it, at its CURRENT index — no inheritance from a removed/shifted slot.
        // (toBeCloseTo absorbs sub-millisecond passive-recovery drift between
        // recording and reading; the bug this guards against shifts the score by
        // whole tens of points, not floating-point dust.)
        for (const acc of accounts) {
          expect(tracker.getScore(acc.index)).toBeCloseTo(acc.health, 3);
        }
        return true;
      }),
      { numRuns: 400 },
    );
  });

  it("token bucket always follows the right account through random removal sequences", () => {
    fc.assert(
      fc.property(arbPopulation, ({ size, removals }) => {
        const tracker = new TokenBucketTracker();
        const accounts: LogicalAccount[] = [];
        for (let i = 0; i < size; i++) {
          const drain = ((i % 5) + 1) * 3; // distinct drains
          tracker.drain(i, undefined, drain);
          accounts.push({
            id: i,
            index: i,
            health: 0,
            tokensDrained: tracker.getTokens(i),
          });
        }

        for (const frac of removals) {
          if (accounts.length <= 1) break;
          const removedPos = Math.min(
            accounts.length - 1,
            Math.floor(frac * accounts.length),
          );
          const removedIndex = accounts[removedPos]!.index;
          accounts.splice(removedPos, 1);
          accounts.forEach((acc, i) => {
            acc.index = i;
          });
          tracker.remapAfterRemoval(removedIndex);
        }

        for (const acc of accounts) {
          // getTokens refills over time; within a single synchronous test the
          // elapsed time is ~0 so the value is stable to the recorded snapshot.
          expect(tracker.getTokens(acc.index)).toBeCloseTo(acc.tokensDrained, 1);
        }
        return true;
      }),
      { numRuns: 400 },
    );
  });

  it("remapIndexedKeys preserves quotaKey-suffixed keys and drops only the removed index", () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 0, max: 20 }),
        fc.array(
          fc.tuple(
            fc.integer({ min: 0, max: 20 }),
            fc.option(fc.constantFrom("codex", "gpt-5.1", "gpt-5.1-codex-max"), {
              nil: undefined,
            }),
            fc.integer({ min: 1, max: 1000 }),
          ),
          { minLength: 0, maxLength: 30 },
        ),
        (removedIndex, entries) => {
          const source = new Map<string, number>();
          for (const [idx, quota, val] of entries) {
            const key = quota ? `${idx}:${quota}` : `${idx}`;
            source.set(key, val);
          }
          const result = remapIndexedKeys(source, removedIndex);

          // The removed index's OWN entry must be gone. (Its numeric slot may be
          // re-occupied by what was removedIndex+1 shifting down — that is correct,
          // so we check by original entry, not by slot vacancy.)
          const removedKeysHad = [...source.keys()].filter((k) => {
            const idxPart = k.includes(":") ? k.slice(0, k.indexOf(":")) : k;
            return Number(idxPart) === removedIndex;
          });
          // Result size = source size minus the removed-index entries.
          expect(result.size).toBe(source.size - removedKeysHad.length);

          // Every source entry not at the removed index survives with its value,
          // at index-1 if it was above the removed index. (Map keys are unique so
          // the shifted-down mapping is a bijection on survivors — no collisions.)
          for (const [key, val] of source.entries()) {
            const colon = key.indexOf(":");
            const idx = Number(colon === -1 ? key : key.slice(0, colon));
            const suffix = colon === -1 ? "" : key.slice(colon);
            if (idx === removedIndex) continue;
            const newIdx = idx > removedIndex ? idx - 1 : idx;
            expect(result.get(`${newIdx}${suffix}`)).toBe(val);
          }
          return true;
        },
      ),
      { numRuns: 500 },
    );
  });
});
