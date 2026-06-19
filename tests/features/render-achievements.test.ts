import { describe, it, expect, vi, beforeEach } from 'vitest';
import { state } from '../../src/state.ts';

const { getGameData, getModeStats, registerCheckAchievements, showToast } = vi.hoisted(() => ({
  getGameData: vi.fn(),
  getModeStats: vi.fn(),
  registerCheckAchievements: vi.fn(),
  showToast: vi.fn(),
}));

vi.mock('../../js/features/game.ts', () => ({
  getGameData: (...a: unknown[]) => getGameData(...a),
  getModeStats: (...a: unknown[]) => getModeStats(...a),
  loadUnlocked: () => JSON.parse(localStorage.getItem('ew_ach') ?? '[]'),
  saveUnlocked: (arr: string[]) => localStorage.setItem('ew_ach', JSON.stringify(arr)),
  registerCheckAchievements: (...a: unknown[]) => registerCheckAchievements(...a),
}));

vi.mock('../../js/features/achievement-toast.tsx', () => ({
  showToast: (...a: unknown[]) => showToast(...a),
}));

vi.mock('../../data/achievements.ts', () => ({
  ACHIEVEMENTS: [
    { id: 'first1', icon: '🌱', name: 'First', check: (k: number) => k >= 1 },
    { id: 'ten', icon: '🔥', name: 'Ten', check: (k: number) => k >= 10 },
  ],
}));

import { checkAchievements } from '../../js/features/render-achievements.ts';

describe('checkAchievements', () => {
  beforeEach(() => {
    localStorage.clear();
    getGameData.mockReset().mockReturnValue({});
    getModeStats.mockReset().mockReturnValue({});
    showToast.mockReset();
    vi.useFakeTimers();
    state.known = new Set();
  });

  it('registers itself with game.ts on module load', () => {
    expect(registerCheckAchievements).toHaveBeenCalledWith(checkAchievements);
  });

  it('unlocks a newly satisfied achievement and shows a toast', () => {
    state.known = new Set(['a']);
    checkAchievements();
    expect(showToast).toHaveBeenCalledTimes(1);
    expect(showToast).toHaveBeenCalledWith(expect.objectContaining({ id: 'first1' }));
    expect(JSON.parse(localStorage.getItem('ew_ach')!)).toEqual(['first1']);
  });

  it('does not re-unlock already-unlocked achievements', () => {
    localStorage.setItem('ew_ach', JSON.stringify(['first1']));
    state.known = new Set(['a']);
    checkAchievements();
    expect(showToast).not.toHaveBeenCalled();
  });

  it('does nothing when all achievements are already unlocked', () => {
    localStorage.setItem('ew_ach', JSON.stringify(['first1', 'ten']));
    state.known = new Set(Array.from({ length: 10 }, (_, i) => `w${i}`));
    checkAchievements();
    expect(showToast).not.toHaveBeenCalled();
  });

  it('shows multiple newly unlocked achievements with a delay between each', () => {
    state.known = new Set(Array.from({ length: 10 }, (_, i) => `w${i}`));
    checkAchievements();
    expect(showToast).toHaveBeenCalledTimes(1);

    vi.advanceTimersByTime(4000);
    expect(showToast).toHaveBeenCalledTimes(2);

    expect(JSON.parse(localStorage.getItem('ew_ach')!)).toEqual(['first1', 'ten']);
  });
});
