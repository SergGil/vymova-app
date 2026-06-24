import { describe, it, expect, beforeEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { notifyStateChange } from '../../src/store.ts';
import { setKnownWords } from '../../src/known-words-store.ts';
import { GameBarLevel } from '../../js/features/game-bar-level.tsx';
import { getMaxWordsForLearnLang } from '../../js/features/mode-utils.ts';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => { root.render(<GameBarLevel />); });
  return { container, root };
}

describe('game-bar-level.tsx GameBarLevel', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('shows the first level and progress toward the next when known is empty', () => {
    setKnownWords('en', new Set());
    const { container } = mount();
    expect(container.querySelector('.gb-level-num')!.textContent).toBe('1');
    const fill = container.querySelector('.gb-level-fill') as HTMLElement;
    expect(fill.style.width).toBe('0%');
    expect(container.querySelector('.gb-level-xp')!.textContent).toBe('0 / 30 слів');
  });

  it('shows partial progress toward the next level', () => {
    setKnownWords('en', new Set(Array.from({ length: 65 }, (_, i) => `w${i}`)));
    const { container } = mount();
    const fill = container.querySelector('.gb-level-fill') as HTMLElement;
    expect(fill.style.width).toBe('50%');
    expect(container.querySelector('.gb-level-xp')!.textContent).toBe('35 / 70 слів');
  });

  it('shows the max-reached message at the final level', () => {
    setKnownWords('en', new Set(Array.from({ length: getMaxWordsForLearnLang() }, (_, i) => `w${i}`)));
    const { container } = mount();
    expect(container.querySelector('.gb-level-num')!.textContent).toBe('10');
    const fill = container.querySelector('.gb-level-fill') as HTMLElement;
    expect(fill.style.width).toBe('100%');
    expect(container.querySelector('.gb-level-xp')!.textContent).toBe('🏆 Максимум!');
    expect(container.querySelector('.gb-level-next')!.textContent).toBe('');
  });

  it('re-renders when notifyStateChange fires', () => {
    setKnownWords('en', new Set());
    const { container } = mount();
    expect(container.querySelector('.gb-level-num')!.textContent).toBe('1');

    act(() => {
      setKnownWords('en', new Set(Array.from({ length: 65 }, (_, i) => `w${i}`)));
      notifyStateChange();
    });
    expect((container.querySelector('.gb-level-fill') as HTMLElement).style.width).toBe('50%');
  });
});
