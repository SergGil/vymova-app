import { describe, it, expect, vi, beforeEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { setCwState, setFlippedState } from '../../src/deck-store.ts';
import { setKnownWords, getKnownSnapshot } from '../../src/known-words-store.ts';
import { W } from '../../data/words.js';
import type { WordEntry } from '../../src/types.ts';
import { CollocationsSection, WordFamiliesChips, SynonymsChips, EtymologyNote, UsageNoteBox } from '../../js/features/word-context.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const { openWordDetail } = vi.hoisted(() => ({ openWordDetail: vi.fn() }));
vi.mock('../../js/features/word-detail.tsx', () => ({ openWordDetail }));

const makeEntry: WordEntry = ['make', 'робити', '', '', '', 'v'];
const sustainEntry: WordEntry = ['sustain', 'підтримувати', '', '', '', 'v'];
const happyEntry: WordEntry = ['happy', 'щасливий', '', '', '', 'adj'];
const gladEntry: WordEntry = ['glad', 'радий', '', '', '', 'adj'];
const dataEntry: WordEntry = ['data', 'дані', '', '', '', 'n'];
const salaryEntry: WordEntry = ['salary', 'зарплата', '', '', '', 'n'];

function mount(Component: () => JSX.Element | null): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => { root.render(<Component />); });
  return { container, root };
}

describe('word-context.tsx', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    setFlippedState(true);
    setKnownWords('en', new Set());
    openWordDetail.mockClear();
  });

  describe('CollocationsSection', () => {
    it('renders nothing when the card is not flipped', () => {
      setFlippedState(false);
      setCwState(makeEntry);
      const { container } = mount(CollocationsSection);
      expect(container.innerHTML).toBe('');
    });

    it('renders nothing when there are no collocations for the word', () => {
      setCwState(['xyznoword', '', '', '', '', ''] as unknown as WordEntry);
      const { container } = mount(CollocationsSection);
      expect(container.innerHTML).toBe('');
    });

    it('renders collocation pills with the keyword bolded', () => {
      setCwState(makeEntry);
      const { container } = mount(CollocationsSection);
      const list = container.querySelector('#cb-collocation-list')!;
      expect(list.children.length).toBeGreaterThan(0);
      expect(list.querySelector('.colloc-pill')!.textContent).toContain('make');
      expect(list.querySelector('.colloc-pill b')!.textContent?.toLowerCase()).toBe('make');
    });
  });

  describe('WordFamiliesChips', () => {
    it('renders nothing when the card is not flipped', () => {
      setFlippedState(false);
      setCwState(sustainEntry);
      const { container } = mount(WordFamiliesChips);
      expect(container.innerHTML).toBe('');
    });

    it('renders nothing when the word has no family members', () => {
      setCwState(makeEntry);
      const { container } = mount(WordFamiliesChips);
      expect(container.innerHTML).toBe('');
    });

    it('renders family chips with translations for a word with a family', () => {
      setCwState(sustainEntry);
      const { container } = mount(WordFamiliesChips);
      const chips = container.querySelectorAll('.family-chip');
      expect(chips.length).toBeGreaterThan(0);
      const words = Array.from(chips).map(c => c.querySelector('.sc-word')!.textContent);
      expect(words).toContain('sustainable');
      const sustainableChip = Array.from(chips).find(c => c.querySelector('.sc-word')!.textContent === 'sustainable')!;
      expect(sustainableChip.querySelector('.sc-transl')!.textContent).toBe('сталий, збалансований');
    });

    it('marks a chip as known when its word is in state.known', () => {
      setCwState(sustainEntry);
      setKnownWords('en', new Set(['sustainable']));
      const { container } = mount(WordFamiliesChips);
      const chip = Array.from(container.querySelectorAll('.family-chip'))
        .find(c => c.querySelector('.sc-word')!.textContent === 'sustainable')!;
      expect(chip.className).toContain('known-chip');
    });

    it('opens the word detail when a chip is clicked', () => {
      setCwState(sustainEntry);
      const { container } = mount(WordFamiliesChips);
      const chip = Array.from(container.querySelectorAll('.family-chip'))
        .find(c => c.querySelector('.sc-word')!.textContent === 'sustainable')! as HTMLElement;
      act(() => { chip.click(); });
      expect(openWordDetail).toHaveBeenCalled();
      const arg = openWordDetail.mock.calls[0][0] as WordEntry;
      expect(arg[0]).toBe('sustainable');
    });
  });

  describe('SynonymsChips', () => {
    it('renders nothing when the card is not flipped', () => {
      setFlippedState(false);
      setCwState(happyEntry);
      const { container } = mount(SynonymsChips);
      expect(container.innerHTML).toBe('');
    });

    it('renders nothing when the word has no synonym group', () => {
      setCwState(sustainEntry);
      const { container } = mount(SynonymsChips);
      expect(container.innerHTML).toBe('');
    });

    it('renders the headword + other members when the current word is a synonym (not the headword)', () => {
      setCwState(gladEntry);
      const { container } = mount(SynonymsChips);
      const chips = container.querySelectorAll('.syn-chip');
      const words = Array.from(chips).map(c => c.querySelector('.sc-word')!.textContent);
      expect(words).toContain('happy');
      expect(words).not.toContain('glad');
      expect(words).toContain('joyful');
    });

    it('shows the nuance note instead of the translation for a synonym entry', () => {
      setCwState(happyEntry);
      const { container } = mount(SynonymsChips);
      const chip = Array.from(container.querySelectorAll('.syn-chip'))
        .find(c => c.querySelector('.sc-word')!.textContent === 'joyful')!;
      expect(chip.querySelector('.sc-transl')!.textContent).toBe('сильніша радість');
    });

    it('opens the word detail when a chip is clicked', () => {
      setCwState(happyEntry);
      const { container } = mount(SynonymsChips);
      const chip = Array.from(container.querySelectorAll('.syn-chip'))
        .find(c => c.querySelector('.sc-word')!.textContent === 'glad')! as HTMLElement;
      act(() => { chip.click(); });
      expect(openWordDetail).toHaveBeenCalled();
      const arg = openWordDetail.mock.calls[0][0] as WordEntry;
      expect(arg[0]).toBe('glad');
    });
  });

  describe('EtymologyNote', () => {
    it('renders nothing when the card is not flipped', () => {
      setFlippedState(false);
      setCwState(salaryEntry);
      const { container } = mount(EtymologyNote);
      expect(container.innerHTML).toBe('');
    });

    it('renders nothing when the word has no etymology fact', () => {
      setCwState(makeEntry);
      const { container } = mount(EtymologyNote);
      expect(container.innerHTML).toBe('');
    });

    it('renders the origin fact when flipped and present', () => {
      setCwState(salaryEntry);
      const { container } = mount(EtymologyNote);
      const el = container.querySelector('#cb-etymology')!;
      expect(el.textContent).toContain('salarium');
    });
  });

  describe('UsageNoteBox', () => {
    it('renders nothing when there is no current word', () => {
      setCwState(null);
      const { container } = mount(UsageNoteBox);
      expect(container.innerHTML).toBe('');
    });

    it('renders nothing when the word has no usage note', () => {
      setCwState(makeEntry);
      const { container } = mount(UsageNoteBox);
      expect(container.innerHTML).toBe('');
    });

    it('renders the warning even when the card is not flipped', () => {
      setFlippedState(false);
      setCwState(dataEntry);
      const { container } = mount(UsageNoteBox);
      const el = container.querySelector('#cb-usage-note')!;
      expect(el.textContent).toContain('дата');
    });
  });
});
