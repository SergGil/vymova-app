import { describe, it, expect, vi, afterEach } from 'vitest';
import { localDateStr, today, yesterday, msUntilNextLocalMidnight } from '../../js/core/today.ts';

describe('localDateStr()', () => {
  it('reflects the LOCAL calendar day of the given Date, not the UTC day', () => {
    // Constructed via the (year, month, day, hour, minute) form, this Date is
    // 2026-03-01 00:30 in whatever timezone the test runner itself is in —
    // so this is a deterministic check of the function's own local-day math,
    // not a check tied to a specific UTC offset.
    const d = new Date(2026, 2, 1, 0, 30);
    expect(localDateStr(d)).toBe('2026-03-01');
  });
});

describe('today()', () => {
  it("returns today's date in YYYY-MM-DD form", () => {
    expect(today()).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(today()).toBe(localDateStr(new Date()));
  });
});

describe('yesterday()', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("returns the day before today's date", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2026, 2, 15, 13, 45));
    expect(yesterday()).toBe('2026-03-14');
  });

  // Regression: yesterday() used to be computed as
  // `localDateStr(new Date(Date.now() - 86_400_000))` — subtracting a flat
  // 24h in real elapsed time. On a DST spring-forward day the clock skips an
  // hour, so 24h of real time before "just after local midnight" lands two
  // calendar days back instead of one. Fixed by subtracting 1 from the
  // calendar date component directly (same approach as
  // msUntilNextLocalMidnight below), which the Date constructor resolves
  // correctly across DST transitions.
  it('lands on the correct calendar day across a DST spring-forward boundary', () => {
    const origTZ = process.env.TZ;
    process.env.TZ = 'America/New_York'; // observes DST; 2026 spring-forward is 2026-03-08
    try {
      vi.useFakeTimers();
      // Just after local midnight on the day after the clocks jumped forward.
      vi.setSystemTime(new Date(2026, 2, 9, 0, 30));
      expect(yesterday()).toBe('2026-03-08');
    } finally {
      if (origTZ === undefined) delete process.env.TZ;
      else process.env.TZ = origTZ;
    }
  });
});

describe('msUntilNextLocalMidnight()', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it('returns a positive value no greater than 24 hours', () => {
    const ms = msUntilNextLocalMidnight();
    expect(ms).toBeGreaterThan(0);
    expect(ms).toBeLessThanOrEqual(24 * 60 * 60 * 1000);
  });

  it('lands exactly on the next local midnight', () => {
    // Pinned via fake timers so the test's `now` and the function's internal
    // `new Date()` read the identical instant — without this, two separate
    // real-clock reads could straddle an actual local-midnight rollover
    // (a ~1ms daily window) and throw the assertion off by a full day.
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2026, 2, 15, 13, 45, 30, 250));
    const now = new Date();
    const ms = msUntilNextLocalMidnight();
    const next = new Date(now.getTime() + ms);
    expect(next.getHours()).toBe(0);
    expect(next.getMinutes()).toBe(0);
    expect(next.getSeconds()).toBe(0);
    expect(next.getDate()).not.toBe(now.getDate());
  });
});
