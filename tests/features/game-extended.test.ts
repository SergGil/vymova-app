import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import {
  getLevel,
  getNextLevel,
  LEVELS,
  updateStreak,
  getDailyStats,
  saveDailyStats,
  recordDailyWord,
  getModeStats,
  saveModeStats,
  recordModeComplete,
  invalidateModeStatsCache,
  getGameData,
  saveGameData,
  loadUnlocked,
  saveUnlocked,
  invalidateGameCaches,
} from '../../js/features/game.ts';
import type { GameData } from '../../src/types.js';

// ── localStorage + date mock ──────────────────────────────────
const _store: Record<string, string> = {};
const lsMock = {
  getItem: (k: string) => _store[k] ?? null,
  setItem: (k: string, v: string) => {
    _store[k] = v;
  },
  removeItem: (k: string) => {
    delete _store[k];
  },
  clear: () => {
    Object.keys(_store).forEach((k) => delete _store[k]);
  },
  get length() {
    return Object.keys(_store).length;
  },
  key: (i: number) => Object.keys(_store)[i] ?? null,
};

/** Set fake "today" for new Date() (today() in js/core/today.ts reads it live) */
function setFakeDate(isoDate: string): void {
  vi.setSystemTime(new Date(isoDate + 'T12:00:00.000Z'));
}

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

beforeEach(() => {
  lsMock.clear();
  invalidateGameCaches(); // reset cache so recordDailyWord starts fresh
  invalidateGameCaches(); // reset so getGameData re-reads from localStorage
  invalidateModeStatsCache(); // reset mode stats cache so getModeStats re-reads from localStorage
  vi.useFakeTimers();
  vi.stubGlobal('localStorage', lsMock);
  setFakeDate('2024-06-15');
});
afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

// ── getLevel() ────────────────────────────────────────────────
describe('getLevel()', () => {
  it('returns Цивільний at 0 words', () => {
    expect(getLevel(0).name).toContain('Цивільний');
  });

  it('returns Падаван at 100 words', () => {
    expect(getLevel(100).name).toContain('Падаван');
  });

  it('returns correct level at each threshold', () => {
    for (const lvl of LEVELS) {
      expect(getLevel(lvl.min).name).toBe(lvl.name);
    }
  });

  it('returns last level beyond max words', () => {
    const last = LEVELS[LEVELS.length - 1];
    expect(getLevel(99999).name).toBe(last.name);
  });

  it('level boundary: 29 = Цивільний, 30 = Чутливий', () => {
    expect(getLevel(29).name).toContain('Цивільний');
    expect(getLevel(30).name).toContain('Чутливий');
  });

  it('level boundary: 99 = Чутливий, 100 = Падаван', () => {
    expect(getLevel(99).name).toContain('Чутливий');
    expect(getLevel(100).name).toContain('Падаван');
  });
});

// ── getNextLevel() ────────────────────────────────────────────
describe('getNextLevel()', () => {
  it('returns next threshold from 0', () => {
    expect(getNextLevel(0)?.min).toBe(30);
  });

  it('returns null at max level', () => {
    const topMin = LEVELS[LEVELS.length - 1].min;
    expect(getNextLevel(topMin)).toBeNull();
    expect(getNextLevel(99999)).toBeNull();
  });

  it('correct next at each known boundary', () => {
    expect(getNextLevel(29)?.min).toBe(30);
    expect(getNextLevel(30)?.min).toBe(100);
    expect(getNextLevel(100)?.min).toBe(250);
    expect(getNextLevel(499)?.min).toBe(500);
  });
});

// ── updateStreak() ────────────────────────────────────────────
describe('updateStreak()', () => {
  it('starts streak at 1 for new user (no streakDate)', () => {
    const d = makeGame({ streak: 0, streakDate: null });
    updateStreak(d);
    expect(d.streak).toBe(1);
    expect(d.streakDate).toBe('2024-06-15');
  });

  it('does not double-count if called twice same day', () => {
    const d = makeGame({ streak: 3, streakDate: '2024-06-15' });
    updateStreak(d);
    expect(d.streak).toBe(3);
  });

  it('increments streak on consecutive days', () => {
    // Today = 2024-06-15, yesterday = 2024-06-14
    const d = makeGame({ streak: 4, streakDate: '2024-06-14' });
    updateStreak(d);
    expect(d.streak).toBe(5);
    expect(d.streakDate).toBe('2024-06-15');
  });

  it('resets streak when gap > 1 day and no shields', () => {
    const d = makeGame({ streak: 10, streakDate: '2024-06-12', shields: 0 });
    updateStreak(d);
    expect(d.streak).toBe(1);
  });

  it('uses a shield when gap > 1 day and shields available', () => {
    // streakDate is 2 days ago → shield saves it
    const d = makeGame({ streak: 7, streakDate: '2024-06-13', shields: 1 });
    updateStreak(d);
    expect(d.streak).toBe(8);
    expect(d.shields).toBe(0);
  });

  it('awards a shield at the 7-day milestone', () => {
    // streak 6 + yesterday → becomes 7 → shield awarded
    const d = makeGame({ streak: 6, streakDate: '2024-06-14', shields: 0 });
    updateStreak(d);
    expect(d.streak).toBe(7);
    expect(d.shields).toBe(1);
  });

  it('caps shields at 3', () => {
    // Already at 3 shields — milestone should not exceed 3
    const d = makeGame({ streak: 6, streakDate: '2024-06-14', shields: 3 });
    updateStreak(d);
    expect(d.shields).toBe(3);
  });
});

// ── getDailyStats / saveDailyStats ────────────────────────────
describe('getDailyStats() + saveDailyStats()', () => {
  it('returns empty object when nothing stored', () => {
    expect(getDailyStats()).toEqual({});
  });

  it('saves and loads correctly', () => {
    saveDailyStats({ '2024-06-15': 5, '2024-06-14': 3 });
    invalidateGameCaches();
    const loaded = getDailyStats();
    expect(loaded['2024-06-15']).toBe(5);
    expect(loaded['2024-06-14']).toBe(3);
  });

  it('returns a copy (not the same reference)', () => {
    saveDailyStats({ '2024-06-15': 10 });
    invalidateGameCaches();
    const a = getDailyStats();
    const b = getDailyStats();
    expect(a).not.toBe(b);
    expect(a).toEqual(b);
  });
});

// ── recordDailyWord() ─────────────────────────────────────────
describe('recordDailyWord()', () => {
  it("increments today's counter", () => {
    recordDailyWord();
    invalidateGameCaches();
    expect(getDailyStats()['2024-06-15']).toBe(1);
  });

  it('accumulates multiple calls', () => {
    recordDailyWord();
    recordDailyWord();
    recordDailyWord();
    invalidateGameCaches();
    expect(getDailyStats()['2024-06-15']).toBe(3);
  });

  it('tracks hourly bucket (some h{0-23} key is set)', () => {
    recordDailyWord();
    invalidateGameCaches();
    const stats = getDailyStats();
    // recordDailyWord uses TODAY + '_h' + getHours() format to prevent cross-day bleed
    const hourKeys = Object.keys(stats).filter((k) => /^\d{4}-\d{2}-\d{2}_h\d+$/.test(k));
    expect(hourKeys.length).toBeGreaterThanOrEqual(1);
    expect(stats[hourKeys[0]]).toBeGreaterThanOrEqual(1);
  });
});

// ── getModeStats / saveModeStats ──────────────────────────────
describe('getModeStats() + saveModeStats()', () => {
  it('returns empty object initially', () => {
    expect(getModeStats()).toEqual({});
  });

  it('round-trips mode stats', () => {
    saveModeStats({ quiz: 5, write: 2 });
    expect(getModeStats().quiz).toBe(5);
    expect(getModeStats().write).toBe(2);
  });
});

describe('recordModeComplete()', () => {
  it('increments session count', () => {
    recordModeComplete('quiz');
    expect(getModeStats().quiz).toBe(1);
  });

  it('accumulates across calls', () => {
    recordModeComplete('tempo');
    recordModeComplete('tempo');
    recordModeComplete('tempo');
    expect(getModeStats().tempo).toBe(3);
  });

  it('tracks modes independently', () => {
    recordModeComplete('quiz');
    recordModeComplete('write');
    recordModeComplete('quiz');
    expect(getModeStats().quiz).toBe(2);
    expect(getModeStats().write).toBe(1);
  });
});

// ── getGameData / saveGameData ────────────────────────────────
describe('getGameData() + saveGameData()', () => {
  it('returns goalMax=20 default when nothing stored', () => {
    const d = getGameData();
    expect(d.goalMax).toBe(20);
  });

  it('round-trips xp, maxCombo, goalDays, sessionWords', () => {
    // Use streakDate = yesterday so getGameData() does not reset streak to 0
    const data = makeGame({
      streak: 5,
      xp: 300,
      maxCombo: 12,
      goalDays: 8,
      sessionWords: 42,
      streakDate: '2024-06-14',
    });
    saveGameData(data);
    invalidateGameCaches(); // force re-read from localStorage
    const loaded = getGameData();
    expect(loaded.xp).toBe(300);
    expect(loaded.maxCombo).toBe(12);
    expect(loaded.goalDays).toBe(8);
    expect(loaded.sessionWords).toBe(42);
  });

  it('streak is preserved when streakDate is set', () => {
    saveGameData(makeGame({ streak: 7, streakDate: '2024-06-14' }));
    invalidateGameCaches();
    expect(getGameData().streak).toBe(7);
  });

  it('overwrites previous save (xp)', () => {
    saveGameData(makeGame({ xp: 100 }));
    invalidateGameCaches();
    saveGameData(makeGame({ xp: 999 }));
    invalidateGameCaches();
    expect(getGameData().xp).toBe(999);
  });

  it('missing fields fall back to defaults (maxCombo=0, goalMax=20)', () => {
    lsMock.setItem('ew_game', JSON.stringify({ xp: 50 }));
    const d = getGameData();
    expect(d.xp).toBe(50);
    expect(d.maxCombo ?? 0).toBe(0);
    expect(d.goalMax).toBe(20);
  });

  it('returns empty-equivalent on corrupt JSON', () => {
    lsMock.setItem('ew_game', 'not-json!!!');
    const d = getGameData();
    expect(d.goalMax).toBe(20); // default applied after corrupt read
  });
});

// ── loadUnlocked / saveUnlocked ───────────────────────────────
describe('loadUnlocked() + saveUnlocked()', () => {
  it('returns empty array when nothing stored', () => {
    expect(loadUnlocked()).toEqual([]);
  });

  it('round-trips unlocked achievement IDs', () => {
    saveUnlocked(['first1', 'words10', 'streak3']);
    const loaded = loadUnlocked();
    expect(loaded).toContain('first1');
    expect(loaded).toContain('words10');
    expect(loaded).toContain('streak3');
    expect(loaded.length).toBe(3);
  });

  it('round-trips empty array', () => {
    saveUnlocked([]);
    expect(loadUnlocked()).toEqual([]);
  });

  it('overwrites previous unlocked list', () => {
    saveUnlocked(['first1']);
    saveUnlocked(['words10', 'streak7']);
    const loaded = loadUnlocked();
    expect(loaded).not.toContain('first1');
    expect(loaded).toContain('words10');
    expect(loaded).toContain('streak7');
  });

  it('returns empty array on corrupted JSON', () => {
    lsMock.setItem('ew_ach', 'not-valid-json!!!');
    expect(loadUnlocked()).toEqual([]);
  });
});
