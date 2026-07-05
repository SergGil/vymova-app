import { describe, it, expect } from 'vitest';
import { localDateStr, today, msUntilNextLocalMidnight } from '../../js/core/today.ts';

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

describe('msUntilNextLocalMidnight()', () => {
  it('returns a positive value no greater than 24 hours', () => {
    const ms = msUntilNextLocalMidnight();
    expect(ms).toBeGreaterThan(0);
    expect(ms).toBeLessThanOrEqual(24 * 60 * 60 * 1000);
  });

  it('lands exactly on the next local midnight', () => {
    const now = new Date();
    const ms = msUntilNextLocalMidnight();
    const next = new Date(now.getTime() + ms);
    expect(next.getHours()).toBe(0);
    expect(next.getMinutes()).toBe(0);
    expect(next.getSeconds()).toBe(0);
    expect(next.getDate()).not.toBe(now.getDate());
  });
});
