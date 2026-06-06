/**
 * DEEP STRESS: concurrent storage writes (lost-update race).
 *
 * Drives the REAL on-disk storage path (atomic temp+rename, mutex,
 * withAccountStorageTransaction) against a temp file and hammers it with many
 * concurrent read-modify-write transactions. Asserts the serializability the
 * mutex is supposed to guarantee: every committed increment survives — no lost
 * updates — which is exactly the invariant the runAccountCheck/hydrateEmails
 * fix relies on.
 */

import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { promises as fs } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";

import {
  loadAccounts,
  saveAccounts,
  setStoragePathDirect,
  withAccountStorageTransaction,
  type AccountStorageV3,
} from "../../lib/storage.js";

function makeStorage(n: number): AccountStorageV3 {
  return {
    version: 3,
    activeIndex: 0,
    activeIndexByFamily: {},
    accounts: Array.from({ length: n }, (_, i) => ({
      refreshToken: `rt-${i}`,
      accountId: `acc-${i}`,
      addedAt: 1,
      lastUsed: 1,
      rateLimitResetTimes: {},
      // A per-account counter we will concurrently increment.
      lastUsedCount: 0 as number,
    })) as never,
  };
}

let dir: string;
let storePath: string;

describe("DEEP STRESS: concurrent storage transactions", () => {
  beforeEach(async () => {
    dir = await fs.mkdtemp(join(tmpdir(), "codex-stress-"));
    storePath = join(dir, "accounts.json");
    setStoragePathDirect(storePath);
  });

  afterEach(async () => {
    setStoragePathDirect(null);
    await fs.rm(dir, { recursive: true, force: true });
  });

  it("serializes N concurrent transactions with no lost updates", async () => {
    await saveAccounts(makeStorage(3));

    const N = 60;
    // Each transaction bumps account 0's lastUsed by 1. With a correct mutex,
    // the final value must equal N (no lost updates from interleaving).
    await Promise.all(
      Array.from({ length: N }, () =>
        withAccountStorageTransaction(async (current, persist) => {
          if (!current) return;
          const acc = current.accounts[0];
          if (!acc) return;
          acc.lastUsed = (acc.lastUsed ?? 0) + 1;
          // Yield to maximize interleaving pressure on the lock.
          await new Promise((r) => setTimeout(r, 0));
          await persist(current);
        }),
      ),
    );

    const finalStorage = await loadAccounts();
    // started at 1, +N increments
    expect(finalStorage?.accounts[0]?.lastUsed).toBe(1 + N);
  });

  it("interleaved transactions on distinct accounts all persist", async () => {
    await saveAccounts(makeStorage(5));

    // Concurrently bump each of the 5 accounts 10 times.
    const ops: Promise<void>[] = [];
    for (let acctIdx = 0; acctIdx < 5; acctIdx++) {
      for (let k = 0; k < 10; k++) {
        ops.push(
          withAccountStorageTransaction(async (current, persist) => {
            if (!current) return;
            const acc = current.accounts[acctIdx];
            if (!acc) return;
            acc.lastUsed = (acc.lastUsed ?? 0) + 1;
            await new Promise((r) => setTimeout(r, 0));
            await persist(current);
          }),
        );
      }
    }
    await Promise.all(ops);

    const finalStorage = await loadAccounts();
    for (let i = 0; i < 5; i++) {
      expect(finalStorage?.accounts[i]?.lastUsed).toBe(1 + 10);
    }
  });

  it("a transaction racing a plain saveAccounts does not corrupt the file", async () => {
    await saveAccounts(makeStorage(2));

    // Mix transactional RMW with blunt full-overwrite saves. The file must
    // remain valid JSON and loadable after the storm (no torn writes thanks to
    // atomic temp+rename), with a well-formed account list.
    const ops: Promise<unknown>[] = [];
    for (let i = 0; i < 30; i++) {
      ops.push(
        withAccountStorageTransaction(async (current, persist) => {
          if (!current) return;
          const acc = current.accounts[0];
          if (acc) acc.lastUsed = (acc.lastUsed ?? 0) + 1;
          await persist(current);
        }),
      );
      ops.push(saveAccounts(makeStorage(2)));
    }
    await Promise.all(ops);

    const finalStorage = await loadAccounts();
    expect(finalStorage).not.toBeNull();
    expect(Array.isArray(finalStorage?.accounts)).toBe(true);
    expect(finalStorage?.accounts.length).toBe(2);
    // File on disk must be parseable (no partial/torn JSON).
    const raw = await fs.readFile(storePath, "utf-8");
    expect(() => JSON.parse(raw)).not.toThrow();
  });
});
