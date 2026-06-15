import { describe, it, expect, vi, beforeEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { state } from '../../src/state.ts';
import { W } from '../../data/words.js';
import type { WordEntry } from '../../src/types.ts';
import { CollocationsSection, WordFamiliesChips } from '../../js/features/word-context.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const { openWordDetail } = vi.hoisted(() => ({ openWordDetail: vi.fn() }));
vi.mock('../../js/features/word-detail.tsx', () => ({ openWordDetail }));

const makeEntry: WordEntry = ['make', 'робити', '', '', '', 'v'];
const sustainEntry: WordEntry = ['sustain', 'підтримувати', '', '', '', 'v'];

function mount(Component: () => JSX.Element | null): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => { root.render(<Component />); });
  return { container, root };
}

function buildWordIdx(): Map<string, number> {
  const idx = new Map<string, number>();
  (W as unknown as WordEntry[]).forEach((w, i) => idx.set(w[0].toLowerCase(), i));
  return idx;
}

describe('word-context.tsx', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    state.flipped = true;
    state.known = new Set();
    state._wordIdx = buildWordIdx();
    openWordDetail.mockClear();
  });

  describe('CollocationsSection', () => {
    it('renders nothing when the card is not flipped', () => {
      state.flipped = false;
      state.cw = makeEntry;
      const { container } = mount(CollocationsSection);
      expect(container.innerHTML).toBe('');
    });

    it('renders nothing when there are no collocations for the word', () => {
      state.cw = ['xyznoword', '', '', '', '', ''] as unknown as WordEntry;
      const { container } = mount(CollocationsSection);
      expect(container.innerHTML).toBe('');
    });

    it('renders collocation pills with the keyword bolded', () => {
      state.cw = makeEntry;
      const { container } = mount(CollocationsSection);
      const list = container.querySelector('#cb-collocation-list')!;
      expect(list.children.length).toBeGreaterThan(0);
      expect(list.querySelector('.colloc-pill')!.textContent).toContain('make');
      expect(list.querySelector('.colloc-pill b')!.textContent?.toLowerCase()).toBe('make');
    });
  });

  describe('WordFamiliesChips', () => {
    it('renders nothing when the card is not flipped', () => {
      state.flipped = false;
      state.cw = sustainEntry;
      const { container } = mount(WordFamiliesChips);
      expect(container.innerHTML).toBe('');
    });

    it('renders nothing when the word has no family members', () => {
      state.cw = makeEntry;
      const { container } = mount(WordFamiliesChips);
      expect(container.innerHTML).toBe('');
    });

    it('renders family chips with translations for a word with a family', () => {
      state.cw = sustainEntry;
      const { container } = mount(WordFamiliesChips);
      const chips = container.querySelectorAll('.family-chip');
      expect(chips.length).toBeGreaterThan(0);
      const words = Array.from(chips).map(c => c.querySelector('.sc-word')!.textContent);
      expect(words).toContain('sustainable');
      const sustainableChip = Array.from(chips).find(c => c.querySelector('.sc-word')!.textContent === 'sustainable')!;
      expect(sustainableChip.querySelector('.sc-transl')!.textContent).toBe('сталий, збалансований');
    });

    it('marks a chip as known when its word is in state.known', () => {
      state.cw = sustainEntry;
      state.known = new Set(['sustainable']);
      const { container } = mount(WordFamiliesChips);
      const chip = Array.from(container.querySelectorAll('.family-chip'))
        .find(c => c.querySelector('.sc-word')!.textContent === 'sustainable')!;
      expect(chip.className).toContain('known-chip');
    });

    it('opens the word detail when a chip is clicked', () => {
      state.cw = sustainEntry;
      const { container } = mount(WordFamiliesChips);
      const chip = Array.from(container.querySelectorAll('.family-chip'))
        .find(c => c.querySelector('.sc-word')!.textContent === 'sustainable')! as HTMLElement;
      act(() => { chip.click(); });
      expect(openWordDetail).toHaveBeenCalled();
      const arg = openWordDetail.mock.calls[0][0] as WordEntry;
      expect(arg[0]).toBe('sustainable');
    });
  });
});
