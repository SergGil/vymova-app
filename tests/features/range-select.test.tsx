import { describe, it, expect, vi, beforeEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { notifyLangChange } from '../../src/store.ts';
import { W } from '../../data/words.js';
import { RangeSelect } from '../../js/features/range-select.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const { getWordsForPair } = vi.hoisted(() => ({
  getWordsForPair: vi.fn((words: unknown[]) => words),
}));
vi.mock('../../js/features/mode-utils.ts', () => ({ getWordsForPair }));

function mount(): { selRange: HTMLSelectElement; root: Root } {
  document.body.innerHTML = '<div id="sel-range-mount"></div>';
  const root = createRoot(document.getElementById('sel-range-mount')!);
  act(() => {
    root.render(<RangeSelect />);
  });
  const selRange = document.getElementById('sel-range') as HTMLSelectElement;
  return { selRange, root };
}

describe('range-select.tsx RangeSelect', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    getWordsForPair.mockClear();
    getWordsForPair.mockImplementation((words: unknown[]) => words);
  });

  it('renders every flat option and both optgroups', () => {
    const { selRange } = mount();
    const values = Array.from(selRange.querySelectorAll('option')).map((o) => o.value);
    expect(values).toEqual([
      '0',
      'unlearned',
      'srs',
      'bookmarks',
      'weak',
      'hard',
      'leech',
      'cefr-A1',
      'cefr-A2',
      'cefr-B1',
      'cefr-B2',
      'cefr-C1',
      'cefr-C2',
      'pos-n',
      'pos-v',
      'pos-adj',
      'pos-adv',
      'pos-phrase',
      'pos-other',
      'stale7',
      'stale30',
    ]);
    expect(selRange.querySelectorAll('optgroup').length).toBe(2);
  });

  it('renders a "bookmarks" option right after "srs"', () => {
    const { selRange } = mount();
    const values = Array.from(selRange.querySelectorAll('option')).map((o) => o.value);
    expect(values.indexOf('bookmarks')).toBe(values.indexOf('srs') + 1);
    expect(
      (selRange.querySelector('option[value="bookmarks"]') as HTMLOptionElement).textContent,
    ).toBeTruthy();
  });

  it('labels the "0" option with the total word count', () => {
    const { selRange } = mount();
    const allOpt = selRange.querySelector('option[value="0"]') as HTMLOptionElement;
    expect(allOpt.textContent).toContain(String(W.length));
  });

  it('re-derives the "0" label when the language pair changes', () => {
    const { selRange } = mount();
    getWordsForPair.mockImplementation((words: unknown[]) => words.slice(0, 3));
    act(() => {
      notifyLangChange();
    });
    const allOpt = selRange.querySelector('option[value="0"]') as HTMLOptionElement;
    expect(allOpt.textContent).toContain('3');
  });

  it("keeps the 'srs' option's DOM node identity stable across a re-render", () => {
    const { selRange } = mount();
    const srsOptBefore = selRange.querySelector('option[value="srs"]');
    act(() => {
      notifyLangChange();
    });
    const srsOptAfter = selRange.querySelector('option[value="srs"]');
    expect(srsOptAfter).toBe(srsOptBefore);
  });
});
