import { describe, it, expect } from 'vitest';
import { ACHIEVEMENTS } from '../../data/achievements.ts';
import type { GameData, ModeStats } from '../../src/types.js';

function makeGame(overrides: Partial<GameData> = {}): GameData {
  return {
    streak: 0,
    streakDate: null,
    shields: 0,
    goalMax: 20,
    goalCur: 0,
    goalDate: '',
    goalDays: 0,
    confettiShown: null,
    sessionWords: 0,
    xp: 0,
    maxCombo: 0,
    ...overrides,
  };
}
const emptyModes: ModeStats = {};

describe('ACHIEVEMENTS structure', () => {
  it('is a non-empty array', () => {
    expect(Array.isArray(ACHIEVEMENTS)).toBe(true);
    expect(ACHIEVEMENTS.length).toBeGreaterThan(20);
  });

  it('every achievement has required string fields', () => {
    for (const a of ACHIEVEMENTS) {
      expect(a.id, `missing id`).toBeTruthy();
      expect(a.icon, `${a.id} missing icon`).toBeTruthy();
      expect(a.name, `${a.id} missing name`).toBeTruthy();
      expect(a.cat, `${a.id} missing cat`).toBeTruthy();
      expect(a.hint, `${a.id} missing hint`).toBeTruthy();
    }
  });

  it('every achievement has progress and check functions', () => {
    for (const a of ACHIEVEMENTS) {
      expect(typeof a.progress, `${a.id} progress must be function`).toBe('function');
      expect(typeof a.check, `${a.id} check must be function`).toBe('function');
    }
  });

  it('all IDs are unique', () => {
    const ids = ACHIEVEMENTS.map((a) => a.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('progress() returns { cur, max } with numbers', () => {
    const g = makeGame();
    for (const a of ACHIEVEMENTS) {
      const p = a.progress(0, g, emptyModes);
      expect(typeof p.cur, `${a.id} progress.cur must be number`).toBe('number');
      expect(typeof p.max, `${a.id} progress.max must be number`).toBe('number');
      expect(p.max, `${a.id} progress.max must be > 0`).toBeGreaterThan(0);
    }
  });

  it('check() returns boolean', () => {
    const g = makeGame();
    for (const a of ACHIEVEMENTS) {
      const result = a.check(0, g, emptyModes);
      expect(typeof result, `${a.id} check must return boolean`).toBe('boolean');
    }
  });
});

describe('Achievement logic — word-count milestones', () => {
  it('first1: check passes at k=1', () => {
    const a = ACHIEVEMENTS.find((x) => x.id === 'first1')!;
    expect(a.check(0, makeGame())).toBe(false);
    expect(a.check(1, makeGame())).toBe(true);
  });

  it('words10: check passes at k≥10', () => {
    const a = ACHIEVEMENTS.find((x) => x.id === 'words10')!;
    expect(a.check(9, makeGame())).toBe(false);
    expect(a.check(10, makeGame())).toBe(true);
    expect(a.check(11, makeGame())).toBe(true);
  });

  it('words100: progress increases with k', () => {
    const a = ACHIEVEMENTS.find((x) => x.id === 'words100')!;
    const g = makeGame();
    expect(a.progress(50, g).cur).toBe(50);
    expect(a.progress(100, g).cur).toBe(100);
    expect(a.progress(150, g).cur).toBe(100); // capped at max
  });
});

describe('Achievement logic — streaks', () => {
  it('streak3: passes when streak ≥ 3', () => {
    const a = ACHIEVEMENTS.find((x) => x.id === 'streak3')!;
    expect(a.check(0, makeGame({ streak: 2 }))).toBe(false);
    expect(a.check(0, makeGame({ streak: 3 }))).toBe(true);
  });

  it('streak7: passes at streak = 7', () => {
    const a = ACHIEVEMENTS.find((x) => x.id === 'streak7')!;
    expect(a.check(0, makeGame({ streak: 6 }))).toBe(false);
    expect(a.check(0, makeGame({ streak: 7 }))).toBe(true);
  });
});

describe('Achievement logic — modes', () => {
  it('mode_quiz1: passes when quiz ≥ 1', () => {
    const a = ACHIEVEMENTS.find((x) => x.id === 'mode_quiz1')!;
    expect(a.check(0, makeGame(), { quiz: 0 })).toBe(false);
    expect(a.check(0, makeGame(), { quiz: 1 })).toBe(true);
  });

  it('mode_write1: passes when write ≥ 1', () => {
    const a = ACHIEVEMENTS.find((x) => x.id === 'mode_write1')!;
    expect(a.check(0, makeGame(), { write: 1 })).toBe(true);
  });
});

describe('Achievement logic — combo', () => {
  it('combo5: passes when maxCombo ≥ 5', () => {
    const a = ACHIEVEMENTS.find((x) => x.id === 'combo5')!;
    expect(a.check(0, makeGame({ maxCombo: 4 }))).toBe(false);
    expect(a.check(0, makeGame({ maxCombo: 5 }))).toBe(true);
  });
});
