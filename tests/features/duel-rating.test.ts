import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('../../js/features/game.ts', () => ({
  runCheckAchievements: vi.fn(),
}));

import { getDuelRating, recordDuelResult } from '../../js/features/duel/duel-rating.ts';
import { runCheckAchievements } from '../../js/features/game.ts';

const RATING_KEY = 'ew_duel_rating';

describe('duel-rating.ts', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('getDuelRating returns all-zero defaults when nothing is stored', () => {
    expect(getDuelRating()).toEqual({
      wins: 0,
      losses: 0,
      ties: 0,
      winStreak: 0,
      maxWinStreak: 0,
    });
  });

  it('getDuelRating recovers gracefully from corrupt JSON', () => {
    localStorage.setItem(RATING_KEY, 'not json');
    expect(getDuelRating()).toEqual({
      wins: 0,
      losses: 0,
      ties: 0,
      winStreak: 0,
      maxWinStreak: 0,
    });
  });

  it('getDuelRating fills in missing fields from a partial stored record', () => {
    localStorage.setItem(RATING_KEY, JSON.stringify({ wins: 3 }));
    expect(getDuelRating()).toEqual({
      wins: 3,
      losses: 0,
      ties: 0,
      winStreak: 0,
      maxWinStreak: 0,
    });
  });

  it('recordDuelResult(true, false) increments wins and the win streak', () => {
    recordDuelResult(true, false);
    recordDuelResult(true, false);
    expect(getDuelRating()).toMatchObject({ wins: 2, losses: 0, ties: 0, winStreak: 2 });
    expect(getDuelRating().maxWinStreak).toBe(2);
  });

  it('recordDuelResult(false, false) increments losses and resets the win streak', () => {
    recordDuelResult(true, false);
    recordDuelResult(true, false);
    recordDuelResult(false, false);
    const r = getDuelRating();
    expect(r.wins).toBe(2);
    expect(r.losses).toBe(1);
    expect(r.winStreak).toBe(0);
    expect(r.maxWinStreak).toBe(2);
  });

  it('recordDuelResult(_, true) increments ties without touching the win streak', () => {
    recordDuelResult(true, false);
    recordDuelResult(false, true);
    const r = getDuelRating();
    expect(r.ties).toBe(1);
    expect(r.winStreak).toBe(1);
  });

  it('maxWinStreak only grows, it never shrinks when the current streak resets', () => {
    recordDuelResult(true, false);
    recordDuelResult(true, false);
    recordDuelResult(true, false);
    recordDuelResult(false, false);
    recordDuelResult(true, false);
    const r = getDuelRating();
    expect(r.winStreak).toBe(1);
    expect(r.maxWinStreak).toBe(3);
  });

  it('persists the updated rating to localStorage', () => {
    recordDuelResult(true, false);
    expect(JSON.parse(localStorage.getItem(RATING_KEY)!)).toMatchObject({ wins: 1 });
  });

  it('calls runCheckAchievements after every recorded result', () => {
    recordDuelResult(true, false);
    expect(runCheckAchievements).toHaveBeenCalledTimes(1);
    recordDuelResult(false, true);
    expect(runCheckAchievements).toHaveBeenCalledTimes(2);
  });
});
