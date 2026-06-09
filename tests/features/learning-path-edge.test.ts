import { describe, it, expect } from 'vitest';
import {
  computeCefrStats,
  findCurrentLevel,
  filterDailyWords,
  computePersonalPace,
  estimateDays,
  updateCompletionDates,
  type PaceSnapshot,
} from '../../js/features/learning-path-logic.ts';
import type { WordEntry } from '../../src/types.js';
import type { CefrLevel } from '../../data/cefr.ts';

// A1 words from CEFR_MAP: cat, dog, go, big, run; B1: achieve, improve, debate
const W: WordEntry[] = [
  ['cat',     'кіт',         'The cat is here.', '', ''],
  ['dog',     'пес',         'The dog runs.',    '', ''],
  ['go',      'йти',         'Let\'s go.',       '', ''],
  ['big',     'великий',     'A big house.',     '', ''],
  ['run',     'бігти',       'I run daily.',     '', ''],
  ['achieve', 'досягати',    'We achieve goals.','', ''],
  ['improve', 'покращувати', 'Let\'s improve.',  '', ''],
  ['debate',  'дебатувати',  'They debate.',     '', ''],
];

function makeStats(pcts: Partial<Record<CefrLevel, number>>): ReturnType<typeof computeCefrStats> {
  const base = { A1:0, A2:0, B1:0, B2:0, C1:0, C2:0 };
  const merged = { ...base, ...pcts };
  const stats = {} as ReturnType<typeof computeCefrStats>;
  (Object.keys(merged) as CefrLevel[]).forEach(l => {
    stats[l] = { total: 100, known: merged[l]!, pct: merged[l]! };
  });
  return stats;
}

// ── computeCefrStats — edge cases ─────────────────────────────
describe('computeCefrStats() — edge cases', () => {
  it('empty words list → all zeros', () => {
    const stats = computeCefrStats(new Set(['cat']), []);
    (['A1','A2','B1','B2','C1','C2'] as CefrLevel[]).forEach(l => {
      expect(stats[l].total).toBe(0);
      expect(stats[l].known).toBe(0);
      expect(stats[l].pct).toBe(0);
    });
  });

  it('empty known set → known=0, pct=0 for all levels', () => {
    const stats = computeCefrStats(new Set(), W);
    (['A1','B1'] as CefrLevel[]).forEach(l => {
      expect(stats[l].known).toBe(0);
      expect(stats[l].pct).toBe(0);
    });
  });

  it('known words not in word list do not affect totals', () => {
    const stats = computeCefrStats(new Set(['banana','orange','xyz']), W);
    expect(stats['A1'].known).toBe(0);
  });

  it('knowing all words in a level gives 100%', () => {
    const stats = computeCefrStats(new Set(['cat','dog','go','big','run']), W);
    expect(stats['A1'].pct).toBe(100);
  });

  it('case-sensitive: "Cat" ≠ "cat"', () => {
    const stats = computeCefrStats(new Set(['Cat', 'DOG']), W);
    expect(stats['A1'].known).toBe(0);
  });

  it('total counts are correct when all words belong to one level', () => {
    const single: WordEntry[] = [
      ['cat', 'кіт', '', '', ''],
      ['dog', 'пес', '', '', ''],
    ];
    const stats = computeCefrStats(new Set(), single);
    expect(stats['A1'].total).toBe(2);
  });
});

// ── findCurrentLevel — edge cases ────────────────────────────
describe('findCurrentLevel() — edge cases', () => {
  it('69% is not enough — level returned as current', () => {
    expect(findCurrentLevel(makeStats({ A1: 69 }))).toBe('A1');
  });

  it('70% means level is done — moves to next', () => {
    expect(findCurrentLevel(makeStats({ A1: 70, A2: 0 }))).toBe('A2');
  });

  it('returns A1 when stats object has all zeros', () => {
    expect(findCurrentLevel(makeStats({}))).toBe('A1');
  });

  it('all levels >= 70 → returns C2', () => {
    expect(findCurrentLevel(makeStats({ A1:100, A2:100, B1:100, B2:100, C1:100, C2:100 }))).toBe('C2');
  });

  it('skips completed levels correctly: A1=90, A2=90, B1=50 → B1', () => {
    expect(findCurrentLevel(makeStats({ A1:90, A2:90, B1:50 }))).toBe('B1');
  });
});

// ── filterDailyWords — edge cases ────────────────────────────
describe('filterDailyWords() — edge cases', () => {
  it('limit=0 returns empty array', () => {
    expect(filterDailyWords('A1', new Set(), W, 0)).toEqual([]);
  });

  it('default limit=20 returns all matching words when pool is small', () => {
    const result = filterDailyWords('A1', new Set(), W);
    expect(result.length).toBe(5); // only 5 A1 words in mock
  });

  it('known words are excluded regardless of limit', () => {
    const known = new Set(['cat', 'dog', 'go']);
    const result = filterDailyWords('A1', known, W, 10);
    expect(result.map(w => w[0])).not.toContain('cat');
    expect(result.map(w => w[0])).not.toContain('dog');
    expect(result.map(w => w[0])).not.toContain('go');
    expect(result.length).toBe(2);
  });

  it('limit=1 returns at most 1 word', () => {
    const result = filterDailyWords('A1', new Set(), W, 1);
    expect(result.length).toBe(1);
  });

  it('non-existent level returns empty array', () => {
    expect(filterDailyWords('C2', new Set(), W)).toEqual([]);
  });
});

// ── computePersonalPace — edge cases ─────────────────────────
describe('computePersonalPace() — edge cases', () => {
  it('3+ snapshots: uses oldest and newest, ignores middle', () => {
    const snaps: PaceSnapshot[] = [
      { date: '2026-01-01', count: 0 },
      { date: '2026-01-05', count: 999 }, // middle — ignored
      { date: '2026-01-11', count: 100 }, // newest: 100 words / 10 days = 10/day
    ];
    expect(computePersonalPace(snaps)).toBe(10);
  });

  it('negative progress (count decreased) returns 0, not negative', () => {
    const snaps: PaceSnapshot[] = [
      { date: '2026-01-01', count: 200 },
      { date: '2026-01-05', count: 100 }, // count went down
    ];
    expect(computePersonalPace(snaps)).toBe(0);
  });

  it('large word counts are handled correctly', () => {
    const snaps: PaceSnapshot[] = [
      { date: '2025-01-01', count: 0 },
      { date: '2026-01-01', count: 3650 }, // 365 days = 10/day
    ];
    expect(computePersonalPace(snaps)).toBe(10);
  });

  it('fractional pace rounds correctly', () => {
    // 7 words in 3 days = 2.333… → rounds to 2
    const snaps: PaceSnapshot[] = [
      { date: '2026-06-01', count: 0 },
      { date: '2026-06-04', count: 7 },
    ];
    expect(computePersonalPace(snaps)).toBe(2);
  });
});

// ── estimateDays — edge cases ─────────────────────────────────
describe('estimateDays() — edge cases', () => {
  it('remaining=0 returns 1 (minimum)', () => {
    expect(estimateDays(0, 10)).toBe(1);
    expect(estimateDays(0, null)).toBe(1);
  });

  it('negative pace falls back to 20 words/day', () => {
    expect(estimateDays(40, -5)).toBe(2); // -5 treated as ≤0 → uses 20
  });

  it('very large remaining with high pace', () => {
    expect(estimateDays(1000, 100)).toBe(10);
  });

  it('remaining exactly divisible by pace → no rounding', () => {
    expect(estimateDays(60, 20)).toBe(3);
  });

  it('remaining=1 with any pace → 1 day', () => {
    expect(estimateDays(1, 1000)).toBe(1);
    expect(estimateDays(1, 1)).toBe(1);
  });
});

// ── updateCompletionDates — edge cases ────────────────────────
describe('updateCompletionDates() — edge cases', () => {
  it('empty stats (all 0%) → no dates added', () => {
    const result = updateCompletionDates(makeStats({}), {}, '2026-06-10');
    expect(Object.keys(result)).toHaveLength(0);
  });

  it('89% does NOT trigger completion', () => {
    const result = updateCompletionDates(makeStats({ A1: 89 }), {}, '2026-06-10');
    expect(result['A1']).toBeUndefined();
  });

  it('90% triggers completion', () => {
    const result = updateCompletionDates(makeStats({ A1: 90 }), {}, '2026-06-10');
    expect(result['A1']).toBe('2026-06-10');
  });

  it('pre-existing dates are preserved when level drops below 90%', () => {
    // Even if stats somehow show < 90%, existing date is never removed
    const stored = { A1: '2026-01-01' };
    const result = updateCompletionDates(makeStats({ A1: 50 }), stored, '2026-06-10');
    expect(result['A1']).toBe('2026-01-01');
  });

  it('all levels at 100% → all get dates', () => {
    const pcts: Partial<Record<CefrLevel, number>> = { A1:100, A2:100, B1:100, B2:100, C1:100, C2:100 };
    const result = updateCompletionDates(makeStats(pcts), {}, '2026-06-10');
    (['A1','A2','B1','B2','C1','C2'] as CefrLevel[]).forEach(l => {
      expect(result[l]).toBe('2026-06-10');
    });
  });

  it('returned object is a new reference (immutable)', () => {
    const stored = { A1: '2026-01-01' };
    const result = updateCompletionDates(makeStats({ A1:100 }), stored, '2026-06-10');
    expect(result).not.toBe(stored);
  });
});
