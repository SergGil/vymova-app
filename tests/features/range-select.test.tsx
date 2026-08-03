import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { notifyLangChange } from '../../src/store.ts';
import { W } from '../../data/words-data/words.js';
import { RangeSelect } from '../../js/features/range-select.tsx';
import { setRange, setSrsLabel } from '../../src/range-store.ts';
import { t } from '../../js/features/i18n.ts';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const { getWordsForPair } = vi.hoisted(() => ({
  getWordsForPair: vi.fn((words: unknown[]) => words),
}));
vi.mock('../../js/features/mode/mode-utils.ts', () => ({ getWordsForPair }));

let roots: Root[] = [];

function mount(): { trigger: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => {
    root.render(<RangeSelect />);
  });
  roots.push(root);
  return { trigger: document.getElementById('sel-range')!, root };
}

async function openTrigger(trigger: HTMLElement): Promise<void> {
  await act(async () => {
    await userEvent.click(trigger);
  });
}

describe('range-select.tsx RangeSelect', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    getWordsForPair.mockClear();
    getWordsForPair.mockImplementation((words: unknown[]) => words);
    setRange('0');
    setSrsLabel(null);
    roots = [];
  });

  afterEach(() => {
    roots.forEach((r) => act(() => r.unmount()));
  });

  it('renders every flat option and both option groups', async () => {
    const { trigger } = mount();
    await openTrigger(trigger);
    const options = screen.getAllByRole('option').map((o) => o.textContent);
    expect(options).toEqual([
      `${t('cards.allWords')} (${W.length})`,
      t('range.unlearned'),
      t('range.srs'),
      t('range.bookmarks'),
      t('range.weak'),
      t('range.hard'),
      t('range.leech'),
      t('range.cefrA1'),
      t('range.cefrA2'),
      t('range.cefrB1'),
      t('range.cefrB2'),
      t('range.cefrC1'),
      t('range.cefrC2'),
      t('range.posNoun'),
      t('range.posVerb'),
      t('range.posAdj'),
      t('range.posAdv'),
      t('range.posPhrase'),
      t('range.posOther'),
      t('range.stale7'),
      t('range.stale30'),
    ]);
    expect(screen.getByText(t('range.cefrGroup'))).toBeInTheDocument();
    expect(screen.getByText(t('range.posGroup'))).toBeInTheDocument();
  });

  it('renders a "bookmarks" option right after "srs"', async () => {
    const { trigger } = mount();
    await openTrigger(trigger);
    const options = screen.getAllByRole('option').map((o) => o.textContent);
    expect(options.indexOf(t('range.bookmarks'))).toBe(options.indexOf(t('range.srs')) + 1);
  });

  it('labels the "0" option with the total word count', () => {
    const { trigger } = mount();
    expect(trigger.textContent).toContain(String(W.length));
  });

  it('re-derives the "0" label when the language pair changes', () => {
    const { trigger } = mount();
    getWordsForPair.mockImplementation((words: unknown[]) => words.slice(0, 3));
    act(() => {
      notifyLangChange();
    });
    expect(trigger.textContent).toContain('3');
  });

  it("reflects the SRS store's dynamic label once the 'srs' range is active", async () => {
    const { trigger } = mount();
    act(() => {
      setRange('srs');
      setSrsLabel(t('srs.optionDue', { n: 5 }));
    });
    expect(trigger.textContent).toContain(t('srs.optionDue', { n: 5 }));
  });
});
