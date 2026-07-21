// Vymova — tests/core/analytics.test.ts
import { describe, it, expect } from 'vitest';
import { initAnalytics } from '../../js/core/analytics.ts';

describe('initAnalytics', () => {
  it('does not throw and stays inert when VITE_FIREBASE_CONFIG is unset (default state)', async () => {
    // Same guarantee as app-check.ts: a build with no Firebase config set —
    // the default for every deployment that hasn't opted in — must never
    // attempt a dynamic import or network call here.
    await expect(initAnalytics()).resolves.toBeUndefined();
  });

  it('is safe to call more than once', async () => {
    await initAnalytics();
    await expect(initAnalytics()).resolves.toBeUndefined();
  });
});
