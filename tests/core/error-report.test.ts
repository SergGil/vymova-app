// Vymova — tests/core/error-report.test.ts
import { describe, it, expect, vi } from 'vitest';
import { initErrorReporting } from '../../js/core/error-report.ts';

describe('initErrorReporting', () => {
  it('does not attach error listeners when AI_PROXY_URL is unset (default, unconfigured state)', () => {
    // AI_PROXY_URL (js/config.ts) is empty in the test env, same as an app
    // build with no Worker deployed — /error lives on that same Worker, so
    // this must stay a true no-op rather than silently wiring up listeners
    // that would then fail every fetch to an empty base URL.
    const spy = vi.spyOn(window, 'addEventListener');
    initErrorReporting();
    const registeredEvents = spy.mock.calls.map((c) => c[0]);
    expect(registeredEvents).not.toContain('error');
    expect(registeredEvents).not.toContain('unhandledrejection');
    spy.mockRestore();
  });

  it('does not throw when called', () => {
    expect(() => initErrorReporting()).not.toThrow();
  });
});
