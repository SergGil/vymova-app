import { describe, it, expect, beforeEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { setModeState, setDeckState, setIdxState } from '../../src/deck-store.ts';
import { setKnownWords } from '../../src/known-words-store.ts';
import { W } from '../../data/words.js';
import type { WordEntry } from '../../src/types.ts';
import { CardIdx, CardKnownCount, ProgressBar } from '../../js/features/card-progress.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

function mount(Component: () => JSX.Element): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => { root.render(<Component />); });
  return { container, root };
}

describe('card-progress.tsx', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    setModeState('en');
    setKnownWords('es', new Set());
    setKnownWords('fr', new Set());
    setKnownWords('it', new Set());
    setKnownWords('pt', new Set());
    setKnownWords('de', new Set());
  });

  describe('CardIdx', () => {
    it('shows "0/0" for an empty deck', () => {
      setDeckState([]);
      const { container } = mount(CardIdx);
      expect(container.querySelector('#cidx')!.textContent).toBe('0/0');
    });

    it('shows the 1-based position within the deck', () => {
      setDeckState([['a'], ['b'], ['c']] as unknown as WordEntry[]);
      setIdxState(1);
      const { container } = mount(CardIdx);
      expect(container.querySelector('#cidx')!.textContent).toBe('2/3');
    });
  });

  describe('CardKnownCount', () => {
    it('shows the size of the active "known" set for the current mode', () => {
      setKnownWords('en', new Set(['a', 'b', 'c']));
      const { container } = mount(CardKnownCount);
      expect(container.querySelector('#cknown')!.textContent).toBe('3');
    });
  });

  describe('ProgressBar', () => {
    it('renders a width percentage based on known/total words', () => {
      setKnownWords('en', new Set());
      const { container } = mount(ProgressBar);
      const bar = container.querySelector('#pbar') as HTMLElement;
      expect(bar.style.width).toBe('0%');

      act(() => {
        setKnownWords('en', new Set((W as unknown as WordEntry[]).map(w => w[0])));
      });
      const bar2 = container.querySelector('#pbar') as HTMLElement;
      expect(bar2.style.width).toBe('100%');
    });
  });
});
