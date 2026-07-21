// Vymova — tests/core/app-check.test.ts
import { describe, it, expect } from 'vitest';
import { getAppCheckHeaders } from '../../js/core/app-check.ts';

describe('getAppCheckHeaders', () => {
  it('resolves to {} when App Check env vars are unset (default, unconfigured state)', async () => {
    // VITE_FIREBASE_APPCHECK_SITE_KEY/VITE_FIREBASE_CONFIG are unset in the
    // test env (same as an app build without App Check configured) — this
    // is the guarantee every duel-firebase.ts/cloud-sync.tsx/leaderboard.tsx
    // call site relies on: merging this into request headers must be a true
    // no-op, never blocking a real request or throwing.
    await expect(getAppCheckHeaders()).resolves.toEqual({});
  });

  it('is idempotent across repeated calls with no side effects', async () => {
    const [a, b] = await Promise.all([getAppCheckHeaders(), getAppCheckHeaders()]);
    expect(a).toEqual({});
    expect(b).toEqual({});
  });
});
