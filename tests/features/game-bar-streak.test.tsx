import { describe, it, expect, vi, beforeEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { saveGameData, getGameData } from '../../js/features/game.ts';
import { GameBarStreak, ComboBox, GameBarGoal } from '../../js/features/game-bar-streak.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const { _getSessionCombo, getComboMult } = vi.hoisted(() => ({
  _getSessionCombo: vi.fn(() => 0),
  getComboMult: vi.fn(() => 1),
}));
vi.mock('../../js/features/combo.ts', () => ({ _getSessionCombo, getComboMult }));

function mount(Component: () => JSX.Element): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => { root.render(<Component />); });
  return { container, root };
}

describe('game-bar-streak.tsx', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    localStorage.clear();
    _getSessionCombo.mockReturnValue(0);
    getComboMult.mockReturnValue(1);
  });

  describe('GameBarStreak', () => {
    it('shows the current streak count', () => {
      const today = new Date().toISOString().slice(0, 10);
      saveGameData({ ...getGameData(), streak: 7, shields: 0, streakDate: today });
      const { container } = mount(GameBarStreak);
      expect(container.querySelector('#streak-num')!.textContent).toBe('7');
      expect(container.querySelector('.gb-streak-label')!.textContent).toBe('днів підряд');
    });

    it('shows nothing in the shields row when there are no shields', () => {
      saveGameData({ ...getGameData(), streak: 0, shields: 0 });
      const { container } = mount(GameBarStreak);
      const row = container.querySelector('#shields-row') as HTMLElement;
      expect(row.textContent).toBe('');
      expect(row.title).toBe('Щитів немає. Отримай за 7 днів поспіль.');
    });

    it('shows shield emojis when shields are present', () => {
      saveGameData({ ...getGameData(), streak: 3, shields: 2 });
      const { container } = mount(GameBarStreak);
      const row = container.querySelector('#shields-row') as HTMLElement;
      expect(row.textContent).toContain('🛡️🛡️');
      expect(row.textContent).toContain('щити');
    });
  });

  describe('ComboBox', () => {
    it('is hidden when the combo is below 2', () => {
      _getSessionCombo.mockReturnValue(1);
      const { container } = mount(ComboBox);
      const box = container.querySelector('#combo-box') as HTMLElement;
      expect(box.style.display).toBe('none');
    });

    it('shows the combo count and multiplier when combo is 10+', () => {
      _getSessionCombo.mockReturnValue(10);
      getComboMult.mockReturnValue(3);
      const { container } = mount(ComboBox);
      const box = container.querySelector('#combo-box') as HTMLElement;
      expect(box.style.display).toBe('flex');
      expect(container.querySelector('#combo-num')!.textContent).toBe('10');
      expect(container.querySelector('#combo-x')!.textContent).toBe(' ×3');
    });
  });

  describe('GameBarGoal', () => {
    it('shows progress toward the goal', () => {
      saveGameData({ ...getGameData(), goalCur: 5, goalMax: 20 });
      const { container } = mount(GameBarGoal);
      expect(container.querySelector('#goal-cur')!.textContent).toBe('5');
      expect(container.querySelector('#goal-max')!.textContent).toBe('20');
      const fill = container.querySelector('.goal-fill') as HTMLElement;
      expect(fill.style.width).toBe('25%');
      expect(fill.className).toBe('goal-fill');
      expect((container.querySelector('#goal-done') as HTMLElement).style.display).toBe('none');
    });

    it('shows the "done" badge when the goal is reached', () => {
      saveGameData({ ...getGameData(), goalCur: 20, goalMax: 20 });
      const { container } = mount(GameBarGoal);
      const fill = container.querySelector('.goal-fill') as HTMLElement;
      expect(fill.className).toBe('goal-fill done');
      expect((container.querySelector('#goal-done') as HTMLElement).style.display).toBe('inline');
      expect(container.querySelector('#goal-done')!.textContent).toBe('🎉 Ціль досягнута!');
    });
  });
});
