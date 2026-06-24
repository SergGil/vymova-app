import { describe, it, expect, beforeEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { state } from '../../src/state.ts';
import { notifyStateChange } from '../../src/store.ts';
import { LevelRing } from '../../js/features/ring.tsx';
import { getMaxWordsForLearnLang } from '../../js/features/mode-utils.ts';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => { root.render(<LevelRing />); });
  return { container, root };
}

describe('ring.tsx LevelRing', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('shows 0% progress and the level-1 emoji when nothing is known', () => {
    state.known = new Set();
    const { container } = mount();
    expect(container.querySelector('#ring-center')!.textContent).toContain('0%');
    expect(container.querySelector('#ring-center')!.textContent).toContain('🌌');
    expect(container.querySelector('#ring-fill')!.className.baseVal ?? container.querySelector('#ring-fill')!.getAttribute('class')).not.toContain('done');
  });

  it('shows progress toward the next level', () => {
    // Level 1 starts at 30, level 2 at 100 → 65 known = 50% toward level 2
    state.known = new Set(Array.from({ length: 65 }, (_, i) => `w${i}`));
    const { container } = mount();
    expect(container.querySelector('#ring-center')!.textContent).toContain('50%');
  });

  it('shows 100% and the "done" class for the final level', () => {
    state.known = new Set(Array.from({ length: getMaxWordsForLearnLang() }, (_, i) => `w${i}`));
    const { container } = mount();
    expect(container.querySelector('#ring-center')!.textContent).toContain('100%');
    expect(container.querySelector('#ring-fill')!.getAttribute('class')).toContain('done');
  });

  it('re-renders when notifyStateChange fires', () => {
    state.known = new Set();
    const { container } = mount();
    expect(container.querySelector('#ring-center')!.textContent).toContain('0%');

    act(() => {
      state.known = new Set(Array.from({ length: 65 }, (_, i) => `w${i}`));
      notifyStateChange();
    });
    expect(container.querySelector('#ring-center')!.textContent).toContain('50%');
  });
});
