import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { renderCardState, setDeckState } from '../../src/deck-store.ts';
import { setKnownWords, markKnown, unmarkKnown } from '../../src/known-words-store.ts';
import type { WordEntry } from '../../src/types.ts';
import { CardKnownVisuals } from '../../js/features/card-known-visuals.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const word1: WordEntry = ['hello', 'привіт', '', '', '', ''] as unknown as WordEntry;
const word2: WordEntry = ['world', 'світ', '', '', '', ''] as unknown as WordEntry;

let _roots: Root[] = [];

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => {
    root.render(<CardKnownVisuals />);
  });
  _roots.push(root);
  return { container, root };
}

afterEach(() => {
  for (const root of _roots)
    act(() => {
      root.unmount();
    });
  _roots = [];
});

describe('CardKnownVisuals', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="card"></div>
      <button id="btn-dontknow"></button>
      <select id="sel-range"><option value="srs" selected>srs</option><option value="all">all</option></select>
    `;
    setKnownWords('en', new Set());
    act(() => {
      setDeckState([word1, word2]);
      renderCardState(word1, 'en');
    });
  });

  it('marks the card as known when the word is in the active known set', () => {
    markKnown('en', word1[0]);
    mount();
    expect(document.getElementById('card')!.classList.contains('is-known')).toBe(true);
  });

  it('does not mark the card as known otherwise', () => {
    mount();
    expect(document.getElementById('card')!.classList.contains('is-known')).toBe(false);
  });

  it('re-derives is-known when the known-words store changes without cw changing', () => {
    mount();
    expect(document.getElementById('card')!.classList.contains('is-known')).toBe(false);

    act(() => {
      markKnown('en', word1[0]);
    });
    expect(document.getElementById('card')!.classList.contains('is-known')).toBe(true);

    act(() => {
      unmarkKnown('en', word1[0]);
    });
    expect(document.getElementById('card')!.classList.contains('is-known')).toBe(false);
  });

  it("toggles the don't-know button based on sel-range value", () => {
    (document.getElementById('sel-range') as HTMLSelectElement).value = 'srs';
    mount();
    expect(document.getElementById('btn-dontknow')!.style.display).toBe('');
  });

  it("hides the don't-know button when sel-range isn't srs", () => {
    (document.getElementById('sel-range') as HTMLSelectElement).value = 'all';
    mount();
    expect(document.getElementById('btn-dontknow')!.style.display).toBe('none');
  });
});
