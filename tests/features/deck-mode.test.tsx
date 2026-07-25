import { describe, it, expect, vi, beforeEach } from 'vitest';
import { act } from 'react';
import { createRoot } from 'react-dom/client';
import { getDeckSnapshot, setDeckState, setIdxState } from '../../src/deck-store.ts';
import { setActiveTagSet } from '../../src/deck-filter-store.ts';
import { setMode, getModeStateSnapshot } from '../../src/mode-store.ts';
import { W } from '../../data/words-data/words.js';
import type { WordEntry } from '../../src/types.ts';
import { ensureLangTableLoaded } from '../../js/features/mode/mode-utils.ts';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const { render, setDeck, setIdx, stopAuto } = vi.hoisted(() => ({
  render: vi.fn(),
  setDeck: vi.fn(),
  setIdx: vi.fn(),
  stopAuto: vi.fn(),
}));
vi.mock('../../js/core/card-engine.ts', () => ({ render, setDeck, setIdx, stopAuto }));

const esWord = (W as unknown as WordEntry[])[0][0];
vi.mock('../../data/words-data/words_es.js', () => ({ W_ES: { [esWord]: ['x'] } }));
vi.mock('../../data/words-data/words_fr.js', () => ({ W_FR: {} }));
vi.mock('../../data/words-data/words_it.js', () => ({ W_IT: {} }));
vi.mock('../../data/words-data/words_pt.js', () => ({ W_PT: {} }));
vi.mock('../../data/words-data/words_de.js', () => ({ W_DE: {} }));

function changeMode(value: string): void {
  act(() => {
    setMode(value);
  });
}

describe('deck-mode.tsx DeckModeInit', () => {
  beforeEach(async () => {
    // Preload word tables from mocked modules so getWordsForMode works synchronously.
    await Promise.all(['es', 'fr', 'it', 'pt', 'de'].map(ensureLangTableLoaded));

    document.body.innerHTML = `
      <select id="sel-range"><option value="0">All</option></select>
      <select id="sel-tag"><option value="">All tags</option></select>
      <div id="milestone-toast"></div>
    `;
    setMode('en');
    setActiveTagSet(null);
    setDeckState((W as unknown as WordEntry[]).slice(0, 5));
    setIdxState(0);
    render.mockClear();
    setDeck.mockClear();
    setIdx.mockClear();
    stopAuto.mockClear();
  });

  it('reports special modes via _isSpecialMode', async () => {
    const { _isSpecialMode } = await import('../../js/features/deck/deck-mode.tsx');
    expect(_isSpecialMode('en')).toBe(false);
    expect(_isSpecialMode('es-en')).toBe(true);
    expect(_isSpecialMode('fr-en')).toBe(true);
  });

  it('switches to the ES-filtered deck when es-en is selected', async () => {
    const { DeckModeInit } = await import('../../js/features/deck/deck-mode.tsx');
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);
    act(() => {
      root.render(<DeckModeInit />);
    });

    changeMode('es-en');

    expect(setDeck).toHaveBeenCalled();
    const deck = setDeck.mock.calls.at(-1)![0] as WordEntry[];
    expect(deck.length).toBe(1);
    expect(deck[0][0]).toBe(esWord);
    expect(setIdx).toHaveBeenCalledWith(0);
    expect((document.getElementById('sel-range') as HTMLSelectElement).disabled).toBe(false);
    expect(stopAuto).toHaveBeenCalled();
    expect(render).toHaveBeenCalled();
  });

  it('restores the previous deck when switching back to a non-special mode', async () => {
    const { DeckModeInit } = await import('../../js/features/deck/deck-mode.tsx');
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);
    act(() => {
      root.render(<DeckModeInit />);
    });

    const originalDeck = getDeckSnapshot();
    changeMode('es-en');
    changeMode('en');

    expect(setDeck).toHaveBeenLastCalledWith(originalDeck);
    expect((document.getElementById('sel-range') as HTMLSelectElement).disabled).toBe(false);
    expect((document.getElementById('sel-tag') as HTMLSelectElement).disabled).toBe(false);
  });

  it('shows a toast and resets to "en" when the special deck has no translations', async () => {
    const { DeckModeInit } = await import('../../js/features/deck/deck-mode.tsx');
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);
    act(() => {
      root.render(<DeckModeInit />);
    });

    changeMode('fr-en');

    expect(getModeStateSnapshot().mode).toBe('en');
    const toast = document.getElementById('milestone-toast') as HTMLElement;
    expect(toast.textContent).toContain('Французьких перекладів');
    expect(toast.className).toContain('show');
  });

  it('filters the special deck by the active tag set when present', async () => {
    const { DeckModeInit } = await import('../../js/features/deck/deck-mode.tsx');
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);
    act(() => {
      root.render(<DeckModeInit />);
    });

    setActiveTagSet(new Set([esWord]));
    changeMode('es-en');

    const deck = setDeck.mock.calls.at(-1)![0] as WordEntry[];
    expect(deck.map((w) => w[0])).toEqual([esWord]);
  });
});
