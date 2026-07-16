import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import vm from 'node:vm';

// Regression test for public/sw.js's periodicsync handler comparing a UTC
// date string (`now.toISOString().slice(0, 10)`) against snap.daily/
// snap.lastShown, which are written with *local*-date keys elsewhere
// (notifications.tsx). For any timezone east of UTC, the first 2-3 hours
// after local midnight used to compare against the wrong calendar day,
// silently suppressing or double-firing the daily study reminder. Fixed by
// duplicating js/core/today.ts's localDateStr() directly in sw.js (a
// service worker can't import app modules).
//
// This loads the *actual* public/sw.js source into a sandboxed vm context
// (self.addEventListener stubbed to a no-op recorder so the file's
// top-level event registrations don't throw) and pulls localDateStr back
// out, so the test exercises the real shipped file, not a reimplementation.

function loadLocalDateStr(): (d: Date) => string {
  const swPath = resolve(process.cwd(), 'public/sw.js');
  const source = readFileSync(swPath, 'utf8');
  const sandbox: { self: unknown; localDateStr?: (d: Date) => string } = {
    self: { addEventListener: () => {} },
  };
  vm.createContext(sandbox);
  vm.runInContext(`${source}\nthis.localDateStr = localDateStr;`, sandbox);
  if (typeof sandbox.localDateStr !== 'function') {
    throw new Error('sw.js no longer defines a top-level localDateStr function');
  }
  return sandbox.localDateStr;
}

describe('public/sw.js — localDateStr()', () => {
  it('reflects the LOCAL calendar day of the given Date, not the UTC day', () => {
    const localDateStr = loadLocalDateStr();
    // Local-component constructor form — this Date is 2026-03-01 00:30 in
    // whatever timezone the test runner itself is in, so this pins the
    // function's own local-day math without depending on a specific UTC
    // offset (mirrors tests/core/today.test.ts's identical check on the
    // app-side localDateStr()).
    const d = new Date(2026, 2, 1, 0, 30);
    expect(localDateStr(d)).toBe('2026-03-01');
  });

  it('matches the Date object\'s own local year/month/day components for a range of times', () => {
    const localDateStr = loadLocalDateStr();
    const samples = [
      new Date(2026, 0, 1, 0, 0, 0),
      new Date(2026, 0, 1, 23, 59, 59),
      new Date(2026, 5, 15, 12, 0, 0),
      new Date(2026, 11, 31, 0, 1, 0),
    ];
    for (const d of samples) {
      const expected = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
      expect(localDateStr(d)).toBe(expected);
    }
  });

  it('does NOT just slice toISOString() — the exact bug being regression-tested', () => {
    const localDateStr = loadLocalDateStr();
    const d = new Date(2026, 2, 1, 0, 30); // local 2026-03-01 00:30
    const utcSlice = d.toISOString().slice(0, 10);
    // Only meaningful in a timezone with a non-zero offset (most CI/dev
    // machines aren't UTC) — where it applies, the naive UTC slice would
    // disagree with the correct local day for this near-midnight instant.
    if (d.getTimezoneOffset() !== 0) {
      expect(localDateStr(d)).not.toBe(utcSlice);
    }
    expect(localDateStr(d)).toBe('2026-03-01');
  });
});
