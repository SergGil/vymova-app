import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import {
  getMistakes,
  recordMistake,
  clearMistake,
  getHardWords,
  getModeAccuracy,
  recordModeAnswer,
  getSrsNewDailyCap,
  setSrsNewDailyCap,
  SRS_NEW_DAILY_CAP,
  recordDailyWord,
  saveDailyStats,
  registerDailyStatsChanged,
} from '../../js/features/game.ts';

// ── localStorage mock ─────────────────────────────────────────
const _store: Record<string, string> = {};
const localStorageMock = {
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

beforeEach(() => {
  localStorageMock.clear();
  vi.stubGlobal('localStorage', localStorageMock);
});
afterEach(() => {
  vi.unstubAllGlobals();
});

// ── Mistakes ──────────────────────────────────────────────────
describe('recordMistake / getMistakes', () => {
  it('records a mistake for a word', () => {
    recordMistake('apple');
    const m = getMistakes();
    expect(m['apple']).toBe(1);
  });

  it('increments count on repeated mistakes', () => {
    recordMistake('apple');
    recordMistake('apple');
    recordMistake('apple');
    expect(getMistakes()['apple']).toBe(3);
  });

  it('tracks multiple words independently', () => {
    recordMistake('apple');
    recordMistake('banana');
    recordMistake('apple');
    const m = getMistakes();
    expect(m['apple']).toBe(2);
    expect(m['banana']).toBe(1);
  });

  it('clearMistake removes the word', () => {
    recordMistake('apple');
    clearMistake('apple');
    expect(getMistakes()['apple']).toBeUndefined();
  });

  it('clearMistake on non-existent word does not throw', () => {
    expect(() => clearMistake('nonexistent')).not.toThrow();
  });

  it('a mode mistake also registers as an SRS lapse for that word', async () => {
    const { getSrsDataSnapshot } = await import('../../src/srs-store.ts');
    // Unique word (not touched by the other tests in this file) so leftover
    // unawaited recordMistake() calls elsewhere can't pollute the count.
    await recordMistake('srs-lapse-test-word');
    const entry = getSrsDataSnapshot()['srs-lapse-test-word'];
    expect(entry).toBeDefined();
    expect(entry.lapses).toBe(1);
    expect(entry.reps).toBe(0);
  });
});

describe('getHardWords()', () => {
  it('returns words sorted by mistake count descending', () => {
    recordMistake('cat');
    recordMistake('cat');
    recordMistake('cat');
    recordMistake('dog');
    recordMistake('dog');
    recordMistake('bird');
    const hard = getHardWords(10);
    expect(hard[0]).toBe('cat');
    expect(hard[1]).toBe('dog');
    expect(hard[2]).toBe('bird');
  });

  it('respects limit parameter', () => {
    for (let i = 0; i < 20; i++) recordMistake(`word${i}`);
    const hard = getHardWords(5);
    expect(hard.length).toBe(5);
  });

  it('returns empty array when no mistakes', () => {
    expect(getHardWords(10)).toEqual([]);
  });
});

// ── Mode accuracy ─────────────────────────────────────────────
describe('recordModeAnswer / getModeAccuracy', () => {
  it('records correct answer', () => {
    recordModeAnswer('quiz', true);
    const acc = getModeAccuracy();
    expect(acc['quiz']?.ok).toBe(1);
    expect(acc['quiz']?.err).toBe(0);
  });

  it('records wrong answer', () => {
    recordModeAnswer('quiz', false);
    const acc = getModeAccuracy();
    expect(acc['quiz']?.ok).toBe(0);
    expect(acc['quiz']?.err).toBe(1);
  });

  it('accumulates correctly across multiple answers', () => {
    recordModeAnswer('write', true);
    recordModeAnswer('write', true);
    recordModeAnswer('write', false);
    const acc = getModeAccuracy();
    expect(acc['write']?.ok).toBe(2);
    expect(acc['write']?.err).toBe(1);
  });

  it('tracks different modes independently', () => {
    recordModeAnswer('quiz', true);
    recordModeAnswer('tempo', false);
    const acc = getModeAccuracy();
    expect(acc['quiz']?.ok).toBe(1);
    expect(acc['tempo']?.err).toBe(1);
  });
});

// ── SRS new-cards/day cap ────────────────────────────────────────
describe('getSrsNewDailyCap / setSrsNewDailyCap', () => {
  it('defaults to SRS_NEW_DAILY_CAP when unset', () => {
    expect(getSrsNewDailyCap()).toBe(SRS_NEW_DAILY_CAP);
  });

  it('persists and returns a set value', () => {
    setSrsNewDailyCap(25);
    expect(getSrsNewDailyCap()).toBe(25);
  });

  it('clamps below the minimum (5)', () => {
    setSrsNewDailyCap(1);
    expect(getSrsNewDailyCap()).toBe(5);
  });

  it('clamps above the maximum (50)', () => {
    setSrsNewDailyCap(999);
    expect(getSrsNewDailyCap()).toBe(50);
  });

  it('falls back to the default on corrupt localStorage data', () => {
    localStorage.setItem('ew_srs_new_cap', 'not-a-number');
    expect(getSrsNewDailyCap()).toBe(SRS_NEW_DAILY_CAP);
  });
});

// ── registerDailyStatsChanged() ──────────────────────────────────
// Regression coverage: notifications.tsx's IndexedDB snapshot (read by
// public/sw.js's periodicsync handler when the app itself isn't open) used
// to only refresh on settings changes or a fired notification — never when
// actual study progress happened — so a user who hit their daily goal and
// closed the tab could still get a spurious "come study" background
// reminder. Fixed by having saveDailyStats() (the single write-point behind
// recordDailyWord()) call a registered hook every time daily stats change.
describe('registerDailyStatsChanged()', () => {
  afterEach(() => {
    registerDailyStatsChanged(null);
  });

  it('fires whenever recordDailyWord() saves new daily stats', () => {
    const spy = vi.fn();
    registerDailyStatsChanged(spy);
    recordDailyWord();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('fires on any saveDailyStats() call, not just recordDailyWord()', () => {
    const spy = vi.fn();
    registerDailyStatsChanged(spy);
    saveDailyStats({ '2026-01-01': 5 });
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('does not throw when no hook is registered', () => {
    registerDailyStatsChanged(null);
    expect(() => recordDailyWord()).not.toThrow();
  });

  it('a throwing hook does not break saveDailyStats itself', () => {
    registerDailyStatsChanged(() => {
      throw new Error('boom');
    });
    expect(() => recordDailyWord()).not.toThrow();
  });

  it('unregistering (passing null) stops further calls', () => {
    const spy = vi.fn();
    registerDailyStatsChanged(spy);
    registerDailyStatsChanged(null);
    recordDailyWord();
    expect(spy).not.toHaveBeenCalled();
  });
});
