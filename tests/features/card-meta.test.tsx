import { describe, it, expect, beforeEach, vi } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { renderCardState, setDeckState, setIdxState, setCwState } from '../../src/deck-store.ts';
import { setKnownWords, getKnownSnapshot } from '../../src/known-words-store.ts';
import type { WordEntry } from '../../src/types.ts';

vi.mock('../../js/core/card-engine.ts', () => ({
  render: vi.fn(),
}));

let _mockWordIdx = new Map<string, number>();
vi.mock('../../js/core/word-index.ts', () => ({
  getWordIndex: () => _mockWordIdx,
}));

const { CardMeta } = await import('../../js/features/card-meta.tsx');

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const cw: WordEntry = ['abandon', 'покинути', 'He will <b>abandon</b> it.', 'Він <b>покине</b> його.', 'ˈæ', 'v'];

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => { root.render(<CardMeta />); });
  return { container, root };
}

describe('card-meta.tsx CardMeta', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    setDeckState([cw, cw, cw]);
    setIdxState(0);
    renderCardState(cw, 'en');
    _mockWordIdx = new Map();
  });

  it('renders nothing without a current word', () => {
    setCwState(null);
    const { container } = mount();
    expect(container.innerHTML).toBe('');
  });

  it('shows the word number from _wordIdx when available', () => {
    _mockWordIdx = new Map([['abandon', 4]]);
    const { container } = mount();
    expect(container.querySelector('#wnum')!.textContent).toBe('#5');
  });

  it('falls back to deck position + 1 when the word is not in _wordIdx', () => {
    setIdxState(2);
    const { container } = mount();
    expect(container.querySelector('#wnum')!.textContent).toBe('#3');
  });

  it('shows the CEFR level badge', () => {
    const { container } = mount();
    const badge = container.querySelector('#wcefr') as HTMLElement;
    expect(badge.className).toMatch(/^cefr-badge cefr-/);
    expect(badge.textContent).toBeTruthy();
  });

  it('shows a category badge for known words', () => {
    const { container } = mount();
    const cat = container.querySelector('#wcategory') as HTMLElement;
    expect(cat).not.toBeNull();
    expect(cat.textContent).toBeTruthy();
  });

  it('shows the front-language tag', () => {
    const { container } = mount();
    const tag = container.querySelector('#wlang')!;
    const img = tag.querySelector('img');
    expect(img ? img.alt : tag.textContent).toBe('EN');
  });

  it('the unmark button stops click propagation', () => {
    const { container } = mount();
    let outerClicked = false;
    document.body.addEventListener('click', () => { outerClicked = true; });
    const btn = container.querySelector('#btn-unmark') as HTMLButtonElement;
    act(() => { btn.dispatchEvent(new MouseEvent('click', { bubbles: true })); });
    expect(outerClicked).toBe(false);
  });

  it('the unmark button removes the word from the known set and persists it', () => {
    setKnownWords('en', new Set(['abandon']));
    const { container } = mount();
    const btn = container.querySelector('#btn-unmark') as HTMLButtonElement;
    act(() => { btn.click(); });
    expect(getKnownSnapshot('en').has('abandon')).toBe(false);
  });

  it('the unmark button removes the word from the active language-specific known set', () => {
    document.body.innerHTML = '<select id="sel-mode"><option value="he-ua" selected>x</option></select>';
    (document.getElementById('sel-mode') as HTMLSelectElement).value = 'he-ua';
    setKnownWords('he', new Set(['abandon']));
    const { container } = mount();
    const btn = container.querySelector('#btn-unmark') as HTMLButtonElement;
    act(() => { btn.click(); });
    expect(getKnownSnapshot('he').has('abandon')).toBe(false);
  });
});
