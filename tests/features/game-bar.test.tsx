// game-bar.tsx consolidates the 3-block game bar's shell (wrapper divs, the
// daily-goal label, and the 2 tooltip attributes) plus the 5 already-React
// widgets it hosts (GameBarStreak/ComboBox/GameBarGoal/WordOfDay/GameBarLevel)
// into one owning component — same treatment as settings-page.tsx and
// achievements-page.tsx. This guards the composition and the ids other
// modules reach into by getElementById (goal-modal.tsx's #goal-set-btn).
import { describe, it, expect, beforeEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { GameBar } from '../../js/features/game-bar.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

let root: Root;

function mount(): HTMLElement {
  const container = document.createElement('div');
  document.body.appendChild(container);
  root = createRoot(container);
  act(() => {
    root.render(<GameBar />);
  });
  return container;
}

describe('<GameBar/>', () => {
  beforeEach(() => {
    document.body.innerHTML =
      '<select id="sel-mode"><option value="en" selected>en</option></select>';
  });

  it('renders the daily-goal label and preserves the ids external modules reach into', () => {
    const container = mount();
    expect(container.querySelector('.gb-label')!.textContent).toBe('Ціль на сьогодні');
    expect(container.querySelector('#goal-set-btn')).toBeTruthy();
    expect(container.querySelector('#level-box')).toBeTruthy();
  });

  it('renders all 4 blocks under #game-bar', () => {
    const container = mount();
    const bar = container.querySelector('#game-bar')!;
    expect(bar.querySelector('.gb-streak-block')).toBeTruthy();
    expect(bar.querySelector('.gb-goal-block')).toBeTruthy();
    expect(bar.querySelector('.gb-wotd-block')).toBeTruthy();
    expect(bar.querySelector('.gb-level-block')).toBeTruthy();
  });

  it('translates the goal-edit and level-progress tooltips via data-i18n-title', () => {
    const container = mount();
    const goalBtn = container.querySelector('#goal-set-btn')!;
    const levelBox = container.querySelector('#level-box')!;
    expect(goalBtn.getAttribute('data-i18n-title')).toBe('cards.dailyGoalEditTitle');
    expect(goalBtn.getAttribute('title')).toBe('Змінити ціль');
    expect(levelBox.getAttribute('data-i18n-title')).toBe('cards.levelProgressTitle');
    expect(levelBox.getAttribute('title')).toBe('Прогрес рівня');
  });
});
