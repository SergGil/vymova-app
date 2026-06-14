import { describe, it, expect, vi } from 'vitest';

const refreshGameBarLevel = vi.fn();
const refreshGameBarStreak = vi.fn();
const refreshGameBarGoal = vi.fn();

vi.mock('../../js/features/game-bar-level.tsx', () => ({ refreshGameBarLevel: (...a: unknown[]) => refreshGameBarLevel(...a) }));
vi.mock('../../js/features/game-bar-streak.tsx', () => ({
  refreshGameBarStreak: (...a: unknown[]) => refreshGameBarStreak(...a),
  refreshGameBarGoal: (...a: unknown[]) => refreshGameBarGoal(...a),
}));

import { renderGameBar } from '../../js/features/render-game-bar.ts';

describe('renderGameBar', () => {
  it('calls all three refresh functions', () => {
    renderGameBar();
    expect(refreshGameBarStreak).toHaveBeenCalled();
    expect(refreshGameBarGoal).toHaveBeenCalled();
    expect(refreshGameBarLevel).toHaveBeenCalled();
  });

  it('continues calling the remaining refreshers if one throws', () => {
    refreshGameBarStreak.mockImplementationOnce(() => { throw new Error('boom'); });
    refreshGameBarGoal.mockImplementationOnce(() => { throw new Error('boom'); });
    expect(() => renderGameBar()).not.toThrow();
    expect(refreshGameBarLevel).toHaveBeenCalled();
  });
});
