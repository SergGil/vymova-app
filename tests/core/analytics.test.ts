// Vymova — tests/core/analytics.test.ts
import { describe, it, expect, beforeEach } from 'vitest';
import {
  hasAnalyticsConfig,
  getConsent,
  setConsent,
  initIfConsented,
} from '../../js/core/analytics.ts';

describe('analytics config/consent (VITE_FIREBASE_CONFIG unset — default state)', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('hasAnalyticsConfig() is false with no measurementId configured', () => {
    expect(hasAnalyticsConfig()).toBe(false);
  });

  it('getConsent() is null before any decision is made', () => {
    expect(getConsent()).toBeNull();
  });

  it('setConsent() persists the decision and does not throw even with no config', () => {
    expect(() => setConsent(true)).not.toThrow();
    expect(getConsent()).toBe(true);

    setConsent(false);
    expect(getConsent()).toBe(false);
  });

  it('initIfConsented() resolves without throwing, and without granted consent stays inert', async () => {
    await expect(initIfConsented()).resolves.toBeUndefined();
  });

  it('initIfConsented() after a prior "granted" decision still resolves cleanly (no config to actually init)', async () => {
    setConsent(true);
    await expect(initIfConsented()).resolves.toBeUndefined();
  });
});
