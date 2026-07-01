import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import {
  getWeeklyTotal,
  getDailyStats,
  saveDailyStats,
  updateStreak,
  getGameData,
  saveGameData,
  invalidateGameCaches,
  onModeComplete,
  recordModeComplete,
  invalidateModeStatsCache,
} from '../../js/features/game.ts';
import type { GameData } from '../../src/types.js';

const _store: Record<string, string> = {};
const lsMock = {
  getItem: (k: string) => _store[k] ?? null,
  setItem: (k: string, v: string) => { _store[k] = v; },
  removeItem: (k: string) => { delete _store[k]; },
  clear: () => { Object.keys(_store).forEach((k) => delete _store[k]); },
  get length() { return Object.keys(_store).length; },
  key: (i: number) => Object.keys(_store)[i] ?? null,
};

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
  invalidateGameCaches();
  invalidateModeStatsCache();
  vi.useFakeTimers();
  vi.stubGlobal('localStorage', lsMock);
  setFakeDate('2024-06-15');
});
afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

// ── getWeeklyTotal() ──────────────────────────────────────────
describe('getWeeklyTotal()', () => {
  it('returns 0 when no daily stats exist', () => {
    expect(getWeeklyTotal()).toBe(0);
  });

  it('sums only the last 7 days including today', () => {
    const daily: Record<string, number> = {
      '2024-06-15': 5,
      '2024-06-14': 3,
      '2024-06-13': 2,
      '2024-06-07': 99, // 8 days ago — outside the 7-day window
    };
    saveDailyStats(daily);
    invalidateGameCaches();
    expect(getWeeklyTotal()).toBe(10); // 5+3+2, 99 excluded
  });

  it('includes all 7 days when all have entries', () => {
    const daily: Record<string, number> = {};
    for (let i = 0; i < 7; i++) {
      const dt = new Date('2024-06-15T12:00:00.000Z');
      dt.setDate(dt.getDate() - i);
      daily[dt.toISOString().slice(0, 10)] = 1;
    }
    saveDailyStats(daily);
    invalidateGameCaches();
    expect(getWeeklyTotal()).toBe(7);
  });

  it('ignores hourly sub-keys (containing _h)', () => {
    const daily: Record<string, number> = {
      '2024-06-15': 4,
      '2024-06-15_h10': 2, // should be ignored by getWeeklyTotal since key is not a date
    };
    saveDailyStats(daily);
    invalidateGameCaches();
    // The hourly key '2024-06-15_h10' won't match ISO date strings, so += 0
    expect(getWeeklyTotal()).toBe(4);
  });
});

// ── updateStreak → maxStreak tracking ─────────────────────────
describe('updateStreak() — maxStreak', () => {
  it('sets maxStreak to 1 on first streak', () => {
    const d = makeGame();
    const result = updateStreak(d);
    expect(result.streak).toBe(1);
    expect(result.maxStreak).toBe(1);
  });

  it('updates maxStreak when current streak exceeds it', () => {
    setFakeDate('2024-06-14');
    let d = makeGame({ streak: 4, streakDate: '2024-06-13', maxStreak: 4 });
    d = updateStreak(d);
    expect(d.streak).toBe(5);
    expect(d.maxStreak).toBe(5);
  });

  it('does not reduce maxStreak when streak resets', () => {
    // Streak resets after missing a day (no shield)
    let d = makeGame({ streak: 10, streakDate: '2024-06-10', maxStreak: 10, shields: 0 });
    d = updateStreak(d);
    expect(d.streak).toBe(1);
    expect(d.maxStreak).toBe(10); // preserved
  });

  it('does not change maxStreak when today is already counted', () => {
    const d = makeGame({ streak: 3, streakDate: '2024-06-15', maxStreak: 3 });
    const result = updateStreak(d);
    expect(result.streak).toBe(3);
    expect(result.maxStreak).toBe(3);
  });
});

// ── onModeComplete / recordModeComplete listeners ─────────────
describe('onModeComplete() listener', () => {
  it('calls the listener when recordModeComplete fires', () => {
    const calls: string[] = [];
    const off = onModeComplete((mode) => calls.push(mode));
    recordModeComplete('quiz');
    expect(calls).toEqual(['quiz']);
    off();
  });

  it('returns an unsubscribe function that stops future calls', () => {
    const calls: string[] = [];
    const off = onModeComplete((mode) => calls.push(mode));
    off();
    recordModeComplete('write');
    expect(calls).toHaveLength(0);
  });

  it('supports multiple listeners simultaneously', () => {
    const a: string[] = [];
    const b: string[] = [];
    const off1 = onModeComplete((m) => a.push(m));
    const off2 = onModeComplete((m) => b.push(m));
    recordModeComplete('lesson');
    expect(a).toEqual(['lesson']);
    expect(b).toEqual(['lesson']);
    off1();
    off2();
  });

  it('does not throw if listener throws', () => {
    const off = onModeComplete(() => { throw new Error('boom'); });
    expect(() => recordModeComplete('tempo')).not.toThrow();
    off();
  });
});
