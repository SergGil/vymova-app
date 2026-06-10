import { describe, it, expect } from 'vitest';
import { ACHIEVEMENTS } from '../../data/achievements.ts';
import type { GameData, ModeStats } from '../../src/types.js';

function g(o: Partial<GameData> = {}): GameData {
  return { streak:0, streakDate:null, shields:0, goalMax:20, goalCur:0, goalDate:'', goalDays:0, confettiShown:null, sessionWords:0, xp:0, maxCombo:0, ...o };
}

// ── Word count milestones — updated for 8327 words ────────────
describe('Achievement word milestones — updated word count', () => {
  it('words5542 achievement now targets 8327 words', () => {
    const a = ACHIEVEMENTS.find(x => x.id === 'words5542')!;
    expect(a).toBeDefined();
    expect(a.progress(8327, g()).max).toBe(8327);
    expect(a.check(8326, g())).toBe(false);
    expect(a.check(8327, g())).toBe(true);
  });

  it('words5542 progress bar caps at 8327', () => {
    const a = ACHIEVEMENTS.find(x => x.id === 'words5542')!;
    expect(a.progress(9000, g()).cur).toBe(8327);
  });

  it('hint text mentions 8327', () => {
    const a = ACHIEVEMENTS.find(x => x.id === 'words5542')!;
    expect(a.hint).toContain('8327');
  });
});

// ── All progress functions return valid ranges ─────────────────
describe('All achievements — progress cur ≤ max', () => {
  it('progress.cur never exceeds progress.max for any input', () => {
    const modeStats = { quiz: 100, tempo: 50, pairs: 30, write: 25, listen: 20, lesson: 15 };
    const gameData = g({ streak: 200, maxCombo: 50, sessionWords: 150, goalCur: 25, goalMax: 20, goalDays: 50 });
    for (const a of ACHIEVEMENTS) {
      const p = a.progress(9999, gameData, modeStats, 99);
      expect(p.cur, `${a.id}: cur(${p.cur}) > max(${p.max})`).toBeLessThanOrEqual(p.max);
      expect(p.cur, `${a.id}: cur negative`).toBeGreaterThanOrEqual(0);
      expect(p.max, `${a.id}: max must be > 0`).toBeGreaterThan(0);
    }
  });
});

// ── Check/progress consistency ────────────────────────────────
describe('Achievement check/progress consistency', () => {
  it('when check() returns true, progress.cur === progress.max', () => {
    const modeStats = { quiz: 100, write: 100, tempo: 100 };
    const cases = [
      { k: 1, g: g(), m: modeStats, c: 0, id: 'first1' },
      { k: 10, g: g(), m: modeStats, c: 0, id: 'words10' },
      { k: 0, g: g({ streak: 7 }), m: modeStats, c: 0, id: 'streak7' },
    ];
    for (const tc of cases) {
      const a = ACHIEVEMENTS.find(x => x.id === tc.id)!;
      if (a.check(tc.k, tc.g, tc.m, tc.c)) {
        const p = a.progress(tc.k, tc.g, tc.m, tc.c);
        expect(p.cur, `${tc.id}: check=true but progress incomplete`).toBe(p.max);
      }
    }
  });
});

// helper to look up an achievement by id (throws if missing)
function ach(id: string) {
  const a = ACHIEVEMENTS.find(x => x.id === id);
  if (!a) throw new Error(`Achievement not found: ${id}`);
  return a;
}
const emptyM: ModeStats = {};

// ── Goal achievements ─────────────────────────────────────────
describe('Achievement logic — goals', () => {
  it('goal1: passes when goalCur >= goalMax', () => {
    expect(ach('goal1').check(0, g({ goalCur: 19, goalMax: 20 }))).toBe(false);
    expect(ach('goal1').check(0, g({ goalCur: 20, goalMax: 20 }))).toBe(true);
  });

  it('goal1: progress reflects goalCur / goalMax', () => {
    const p = ach('goal1').progress(0, g({ goalCur: 10, goalMax: 20 }));
    expect(p.cur).toBe(10);
    expect(p.max).toBe(20);
  });

  it('goal7: passes when goalDays >= 7', () => {
    expect(ach('goal7').check(0, g({ goalDays: 6 }))).toBe(false);
    expect(ach('goal7').check(0, g({ goalDays: 7 }))).toBe(true);
    expect(ach('goal7').check(0, g({ goalDays: 10 }))).toBe(true);
  });

  it('goal30: progress is capped at 30', () => {
    const p = ach('goal30').progress(0, g({ goalDays: 50 }));
    expect(p.cur).toBe(30);
    expect(p.max).toBe(30);
  });

  it('goal30: passes when goalDays >= 30', () => {
    expect(ach('goal30').check(0, g({ goalDays: 29 }))).toBe(false);
    expect(ach('goal30').check(0, g({ goalDays: 30 }))).toBe(true);
  });
});

// ── Speed achievements ────────────────────────────────────────
describe('Achievement logic — speed (sessionWords)', () => {
  it('speed20: passes when sessionWords >= 20', () => {
    expect(ach('speed20').check(0, g({ sessionWords: 19 }))).toBe(false);
    expect(ach('speed20').check(0, g({ sessionWords: 20 }))).toBe(true);
  });

  it('speed50: progress grows with sessionWords', () => {
    expect(ach('speed50').progress(0, g({ sessionWords: 25 })).cur).toBe(25);
    expect(ach('speed50').progress(0, g({ sessionWords: 60 })).cur).toBe(50);
  });

  it('speed100: passes when sessionWords >= 100', () => {
    expect(ach('speed100').check(0, g({ sessionWords: 99 }))).toBe(false);
    expect(ach('speed100').check(0, g({ sessionWords: 100 }))).toBe(true);
  });
});

// ── Level achievements ────────────────────────────────────────
describe('Achievement logic — levels (lvl2–lvl9)', () => {
  const cases: Array<[string, number]> = [
    ['lvl2', 30], ['lvl3', 100], ['lvl4', 250], ['lvl5', 500],
    ['lvl6', 900], ['lvl7', 1500], ['lvl8', 2500], ['lvl9', 4000],
  ];

  it.each(cases)('%s: passes at k=%i, fails at k=%i-1', (id, threshold) => {
    expect(ach(id).check(threshold - 1, g())).toBe(false);
    expect(ach(id).check(threshold, g())).toBe(true);
  });

  it.each(cases)('%s: progress.cur capped at max=%i', (id, threshold) => {
    const p = ach(id).progress(threshold + 500, g());
    expect(p.cur).toBe(p.max);
    expect(p.max).toBe(threshold);
  });
});

// ── Streak milestones ─────────────────────────────────────────
describe('Achievement logic — streak milestones', () => {
  it('streak14: boundary at 13/14', () => {
    expect(ach('streak14').check(0, g({ streak: 13 }))).toBe(false);
    expect(ach('streak14').check(0, g({ streak: 14 }))).toBe(true);
  });

  it('streak30: boundary at 29/30', () => {
    expect(ach('streak30').check(0, g({ streak: 29 }))).toBe(false);
    expect(ach('streak30').check(0, g({ streak: 30 }))).toBe(true);
  });

  it('streak100: progress grows linearly', () => {
    expect(ach('streak100').progress(0, g({ streak: 50 })).cur).toBe(50);
    expect(ach('streak100').progress(0, g({ streak: 100 })).cur).toBe(100);
    expect(ach('streak100').progress(0, g({ streak: 150 })).cur).toBe(100);
  });
});

// ── Combo milestones ──────────────────────────────────────────
describe('Achievement logic — combo', () => {
  it('combo10: boundary at 9/10', () => {
    expect(ach('combo10').check(0, g({ maxCombo: 9 }))).toBe(false);
    expect(ach('combo10').check(0, g({ maxCombo: 10 }))).toBe(true);
  });

  it('combo25: boundary at 24/25', () => {
    expect(ach('combo25').check(0, g({ maxCombo: 24 }))).toBe(false);
    expect(ach('combo25').check(0, g({ maxCombo: 25 }))).toBe(true);
  });
});

// ── Mode achievements (untested modes) ───────────────────────
describe('Achievement logic — remaining mode achievements', () => {
  const modeCases: Array<[string, string, number]> = [
    ['mode_quiz10',    'quiz',    10],
    ['mode_quiz50',    'quiz',    50],
    ['mode_tempo1',    'tempo',   1],
    ['mode_tempo10',   'tempo',   10],
    ['mode_pairs1',    'pairs',   1],
    ['mode_write20',   'write',   20],
    ['mode_listen1',   'listen',  1],
    ['mode_lesson1',   'lesson',  1],
    ['mode_fib1',      'fib',     1],
    ['mode_story1',    'story',   1],
    ['mode_daily1',    'daily',   1],
    ['mode_spelling1', 'spelling',1],
  ];

  it.each(modeCases)('%s: fails below %i, passes at %i', (id, modeKey, threshold) => {
    const below: ModeStats = { [modeKey]: threshold - 1 };
    const atVal: ModeStats = { [modeKey]: threshold };
    expect(ach(id).check(0, g(), below)).toBe(false);
    expect(ach(id).check(0, g(), atVal)).toBe(true);
  });

  it.each(modeCases)('%s: progress.cur capped at max=%i', (id, modeKey, threshold) => {
    const over: ModeStats = { [modeKey]: threshold + 100 };
    const p = ach(id).progress(0, g(), over);
    expect(p.cur).toBe(p.max);
    expect(p.max).toBe(threshold);
  });
});
