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

// ── Mock word list ────────────────────────────────────────────
// A1 words from CEFR_MAP: 'cat', 'dog', 'go', 'big', 'run'
// B1 word: 'achieve', 'improve', 'develop'
const MOCK_WORDS: WordEntry[] = [
  ['cat',     'кіт',         'The cat is on the mat.',    'Кіт на килимку.',    '/kæt/'],
  ['dog',     'пес',         'I have a dog.',             'У мене є пес.',      '/dɒɡ/'],
  ['go',      'йти',         'Let\'s go to school.',      'Ходімо до школи.',   '/ɡəʊ/'],
  ['big',     'великий',     'It is a big house.',        'Це великий будинок.','/bɪɡ/'],
  ['run',     'бігти',       'I run every day.',          'Я бігаю щодня.',     '/rʌn/'],
  ['achieve', 'досягати',    'We can achieve our goals.', 'Ми можемо досягти наших цілей.', '/əˈtʃiːv/'],
  ['improve', 'покращувати', 'Practice will improve it.', 'Практика покращить це.', '/ɪmˈpruːv/'],
  ['develop', 'розвивати',   'We will develop a plan.',   'Ми розробимо план.', '/dɪˈveləp/'],
];
// cat, dog, go, big, run → A1 (all in CEFR_MAP)
// achieve, improve, develop → B1 (in CEFR_MAP)

// ── computeCefrStats ─────────────────────────────────────────
describe('computeCefrStats', () => {
  it('counts total words per level correctly', () => {
    const known = new Set<string>();
    const stats = computeCefrStats(known, MOCK_WORDS);
    expect(stats['A1'].total).toBe(5);
    expect(stats['B1'].total).toBe(3);
    expect(stats['A2'].total).toBe(0);
  });

  it('counts known words correctly', () => {
    const known = new Set(['cat', 'dog', 'achieve']);
    const stats = computeCefrStats(known, MOCK_WORDS);
    expect(stats['A1'].known).toBe(2);
    expect(stats['B1'].known).toBe(1);
  });

  it('calculates percentage correctly', () => {
    const known = new Set(['cat', 'dog', 'go', 'big', 'run']); // all 5 A1
    const stats = computeCefrStats(known, MOCK_WORDS);
    expect(stats['A1'].pct).toBe(100);
    expect(stats['B1'].pct).toBe(0);
  });

  it('rounds percentage to integer', () => {
    const known = new Set(['cat', 'dog']); // 2/5 A1 = 40%
    const stats = computeCefrStats(known, MOCK_WORDS);
    expect(stats['A1'].pct).toBe(40);
  });

  it('returns 0% for levels with no words', () => {
    const known = new Set<string>();
    const stats = computeCefrStats(known, MOCK_WORDS);
    expect(stats['C2'].pct).toBe(0);
    expect(stats['C2'].total).toBe(0);
  });

  it('all levels present in result', () => {
    const stats = computeCefrStats(new Set(), MOCK_WORDS);
    (['A1','A2','B1','B2','C1','C2'] as CefrLevel[]).forEach(l => {
      expect(stats[l]).toBeDefined();
    });
  });
});

// ── findCurrentLevel ──────────────────────────────────────────
describe('findCurrentLevel', () => {
  function makeStats(pcts: Partial<Record<CefrLevel, number>>) {
    const base = { A1:0, A2:0, B1:0, B2:0, C1:0, C2:0 };
    const merged = { ...base, ...pcts };
    const stats = {} as ReturnType<typeof computeCefrStats>;
    (Object.keys(merged) as CefrLevel[]).forEach(l => {
      stats[l] = { total: 100, known: merged[l]!, pct: merged[l]! };
    });
    return stats;
  }

  it('returns A1 when all levels are 0%', () => {
    expect(findCurrentLevel(makeStats({}))).toBe('A1');
  });

  it('returns the first level below 70%', () => {
    expect(findCurrentLevel(makeStats({ A1: 80, A2: 75, B1: 50 }))).toBe('B1');
  });

  it('returns C2 when all levels are at or above 70%', () => {
    expect(findCurrentLevel(makeStats({ A1:100, A2:90, B1:80, B2:75, C1:70, C2:70 }))).toBe('C2');
  });

  it('treats exactly 70% as complete (not current)', () => {
    expect(findCurrentLevel(makeStats({ A1: 70, A2: 69 }))).toBe('A2');
  });
});

// ── filterDailyWords ─────────────────────────────────────────
describe('filterDailyWords', () => {
  it('returns only words from the given CEFR level', () => {
    const result = filterDailyWords('A1', new Set(), MOCK_WORDS);
    result.forEach(w => expect(['cat','dog','go','big','run']).toContain(w[0]));
  });

  it('excludes already-known words', () => {
    const known = new Set(['cat', 'dog']);
    const result = filterDailyWords('A1', known, MOCK_WORDS);
    expect(result.map(w => w[0])).not.toContain('cat');
    expect(result.map(w => w[0])).not.toContain('dog');
    expect(result.length).toBe(3);
  });

  it('respects limit parameter', () => {
    const result = filterDailyWords('A1', new Set(), MOCK_WORDS, 3);
    expect(result.length).toBe(3);
  });

  it('returns empty array if all words known', () => {
    const known = new Set(['cat', 'dog', 'go', 'big', 'run']);
    const result = filterDailyWords('A1', known, MOCK_WORDS);
    expect(result.length).toBe(0);
  });

  it('returns empty array for level with no words in list', () => {
    const result = filterDailyWords('C2', new Set(), MOCK_WORDS);
    expect(result.length).toBe(0);
  });
});

// ── computePersonalPace ───────────────────────────────────────
describe('computePersonalPace', () => {
  it('returns null for empty snapshots', () => {
    expect(computePersonalPace([])).toBeNull();
  });

  it('returns null for single snapshot', () => {
    expect(computePersonalPace([{ date: '2026-01-01', count: 100 }])).toBeNull();
  });

  it('returns null if all snapshots same date', () => {
    const snaps: PaceSnapshot[] = [
      { date: '2026-01-01', count: 50 },
      { date: '2026-01-01', count: 80 },
    ];
    expect(computePersonalPace(snaps)).toBeNull();
  });

  it('calculates correct pace over 7 days', () => {
    const snaps: PaceSnapshot[] = [
      { date: '2026-01-01', count: 0 },
      { date: '2026-01-08', count: 140 }, // 140 words / 7 days = 20/day
    ];
    expect(computePersonalPace(snaps)).toBe(20);
  });

  it('calculates correct pace over 1 day', () => {
    const snaps: PaceSnapshot[] = [
      { date: '2026-06-01', count: 200 },
      { date: '2026-06-02', count: 215 }, // 15 words in 1 day
    ];
    expect(computePersonalPace(snaps)).toBe(15);
  });

  it('returns 0 if no new words learned', () => {
    const snaps: PaceSnapshot[] = [
      { date: '2026-06-01', count: 100 },
      { date: '2026-06-05', count: 100 },
    ];
    expect(computePersonalPace(snaps)).toBe(0);
  });

  it('uses oldest and newest snapshot regardless of order', () => {
    const snaps: PaceSnapshot[] = [
      { date: '2026-06-05', count: 110 },
      { date: '2026-06-01', count: 100 }, // reversed order
    ];
    // 10 words / 4 days = 2.5 → rounds to 3
    expect(computePersonalPace(snaps)).toBe(3);
  });
});

// ── estimateDays ─────────────────────────────────────────────
describe('estimateDays', () => {
  it('uses 20 words/day when pace is null', () => {
    expect(estimateDays(100, null)).toBe(5);
  });

  it('uses 20 words/day when pace is 0', () => {
    expect(estimateDays(100, 0)).toBe(5);
  });

  it('uses actual pace when positive', () => {
    expect(estimateDays(100, 10)).toBe(10);
  });

  it('rounds up fractional days', () => {
    expect(estimateDays(101, 10)).toBe(11);
  });

  it('returns at least 1 day', () => {
    expect(estimateDays(0, 100)).toBe(1);
    expect(estimateDays(1, 100)).toBe(1);
  });
});

// ── updateCompletionDates ─────────────────────────────────────
describe('updateCompletionDates', () => {
  function makeStats(pcts: Partial<Record<CefrLevel, number>>) {
    const base = { A1:0, A2:0, B1:0, B2:0, C1:0, C2:0 };
    const merged = { ...base, ...pcts };
    const stats = {} as ReturnType<typeof computeCefrStats>;
    (Object.keys(merged) as CefrLevel[]).forEach(l => {
      stats[l] = { total: 100, known: merged[l]!, pct: merged[l]! };
    });
    return stats;
  }

  it('saves date for newly completed level', () => {
    const stats = makeStats({ A1: 95 });
    const result = updateCompletionDates(stats, {}, '2026-06-06');
    expect(result['A1']).toBe('2026-06-06');
  });

  it('does not overwrite existing completion date', () => {
    const stats = makeStats({ A1: 100 });
    const stored = { A1: '2026-01-01' };
    const result = updateCompletionDates(stats, stored, '2026-06-06');
    expect(result['A1']).toBe('2026-01-01');
  });

  it('does not mark incomplete levels as done', () => {
    const stats = makeStats({ A1: 89 }); // below 90%
    const result = updateCompletionDates(stats, {}, '2026-06-06');
    expect(result['A1']).toBeUndefined();
  });

  it('marks exactly 90% as complete', () => {
    const stats = makeStats({ B1: 90 });
    const result = updateCompletionDates(stats, {}, '2026-06-06');
    expect(result['B1']).toBe('2026-06-06');
  });

  it('handles multiple newly completed levels', () => {
    const stats = makeStats({ A1: 100, A2: 95, B1: 30 });
    const result = updateCompletionDates(stats, {}, '2026-06-06');
    expect(result['A1']).toBe('2026-06-06');
    expect(result['A2']).toBe('2026-06-06');
    expect(result['B1']).toBeUndefined();
  });

  it('does not mutate the stored object', () => {
    const stored = { A1: '2026-01-01' };
    const stats = makeStats({ A1: 100, A2: 100 });
    updateCompletionDates(stats, stored, '2026-06-06');
    expect(Object.keys(stored)).toHaveLength(1);
  });
});
