/**
 * DEEP STRESS: refresh-token rotation propagation + removal invariants.
 *
 * Generalizes the per-fix regression tests with random populations:
 *  - random groups of sibling accounts that share a refresh token,
 *  - random rotation sequences,
 * asserting every sibling that held the pre-rotation token converges to the new
 * token (fix #4), and that workspace-scoped removal never drops siblings (fix #3).
 */
import { describe, it, expect } from "vitest";
import * as fc from "fast-check";
import { AccountManager } from "../../lib/accounts.js";
import type { OAuthAuthDetails } from "../../lib/types.js";

interface Seed {
  // groupOf[i] = which shared-refresh-token group account i belongs to.
  groupOf: number[];
}

const arbSeed: fc.Arbitrary<Seed> = fc
  .integer({ min: 2, max: 10 })
  .chain((n) =>
    fc.record({
      groupOf: fc.array(fc.integer({ min: 0, max: 3 }), {
        minLength: n,
        maxLength: n,
      }),
    }),
  );

function buildManager(seed: Seed): AccountManager {
  const now = Date.now();
  const stored = {
    version: 3 as const,
    activeIndex: 0,
    accounts: seed.groupOf.map((group, i) => ({
      refreshToken: `R-group-${group}`,
      organizationId: `org-${i}`,
      accountId: `acct-${i}`,
      email: `user${i}@example.com`,
      accessToken: `access-${i}`,
      expiresAt: now + 3_600_000,
      addedAt: now,
      lastUsed: now,
      rateLimitResetTimes: {},
    })),
  };
  return new AccountManager(undefined, stored as never);
}

describe("DEEP STRESS: refresh-token rotation propagation", () => {
  it("rotating one account's token converges all siblings sharing the old token", () => {
    fc.assert(
      fc.property(arbSeed, fc.integer({ min: 0 }), (seed, pickRaw) => {
        const manager = buildManager(seed);
        const snapshot = manager.getAccountsSnapshot();
        const n = snapshot.length;
        const pick = pickRaw % n;
        // getAccountsSnapshot returns clones; operate on the LIVE reference so
        // updateFromAuth's in-place mutation + sibling propagation are observed.
        const target = manager.setActiveIndex(pick)!;
        const oldToken = target.refreshToken;
        const newToken = `${oldToken}-rotated`;

        const auth: OAuthAuthDetails = {
          type: "oauth",
          access: `access-${pick}-new`,
          refresh: newToken,
          expires: Date.now() + 3_600_000,
        };
        manager.updateFromAuth(target, auth);

        const after = manager.getAccountsSnapshot();
        for (const acc of after) {
          // No account may still hold the old (now-rotated) token.
          expect(acc.refreshToken).not.toBe(oldToken);
        }
        // Every account that originally shared oldToken now holds newToken.
        const originallyShared = snapshot.filter((a) => a.refreshToken === oldToken);
        for (const orig of originallyShared) {
          const current = after.find((a) => a.accountId === orig.accountId);
          expect(current?.refreshToken).toBe(newToken);
        }
        // Accounts in OTHER groups keep their own token untouched.
        const otherGroups = snapshot.filter((a) => a.refreshToken !== oldToken);
        for (const orig of otherGroups) {
          const current = after.find((a) => a.accountId === orig.accountId);
          expect(current?.refreshToken).toBe(orig.refreshToken);
        }
        return true;
      }),
      { numRuns: 300 },
    );
  });

  it("workspace-scoped removal drops only the target, never refresh-token siblings", () => {
    fc.assert(
      fc.property(arbSeed, fc.integer({ min: 0 }), (seed, pickRaw) => {
        const manager = buildManager(seed);
        const before = manager.getAccountsSnapshot();
        const n = before.length;
        const pick = pickRaw % n;
        const target = manager.setActiveIndex(pick)!;
        const targetAccountId = target.accountId;
        const sharedSiblings = before.filter(
          (a) =>
            a.refreshToken === target.refreshToken &&
            a.accountId !== targetAccountId,
        );

        manager.removeAccountsByWorkspaceIdentity(target);
        const after = manager.getAccountsSnapshot();

        // The target workspace is gone.
        expect(after.find((a) => a.accountId === targetAccountId)).toBeUndefined();
        // Every refresh-token sibling (distinct workspace) survives.
        for (const sib of sharedSiblings) {
          expect(after.find((a) => a.accountId === sib.accountId)).toBeDefined();
        }
        // index === array position invariant holds after removal.
        after.forEach((acc, i) => {
          expect(acc.index).toBe(i);
        });
        return true;
      }),
      { numRuns: 300 },
    );
  });
});
