import { describe, it, expect, vi, beforeEach } from 'vitest';
import { act } from 'react';
import { createRoot } from 'react-dom/client';
import { state } from '../../src/state.ts';
import { setActiveTagSet } from '../../src/deck-filter-store.ts';
import { W } from '../../data/words.js';
import type { WordEntry } from '../../src/types.ts';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const { render, setDeck, setIdx, stopAuto } = vi.hoisted(() => ({
  render: vi.fn(),
  setDeck: vi.fn(),
  setIdx: vi.fn(),
  stopAuto: vi.fn(),
}));
vi.mock('../../js/core/card-engine.ts', () => ({ render, setDeck, setIdx, stopAuto }));

const esWord = (W as unknown as WordEntry[])[0][0];
vi.mock('../../data/words_es.js', () => ({ W_ES: { [esWord]: ['x'] } }));
vi.mock('../../data/words_fr.js', () => ({ W_FR: {} }));
vi.mock('../../data/words_it.js', () => ({ W_IT: {} }));
vi.mock('../../data/words_pt.js', () => ({ W_PT: {} }));
vi.mock('../../data/words_de.js', () => ({ W_DE: {} }));

function changeMode(value: string): void {
  const sel = document.getElementById('sel-mode') as HTMLSelectElement;
  sel.value = value;
  act(() => { sel.dispatchEvent(new Event('change')); });
}

describe('deck-mode.tsx DeckModeInit', () => {
  beforeEach(async () => {
    document.body.innerHTML = `
      <select id="sel-mode">
        <option value="en" selected>en</option>
        <option value="es-en">es-en</option>
        <option value="fr-en">fr-en</option>
        <option value="es-fr">es-fr</option>
      </select>
      <select id="sel-range"><option value="0">All</option></select>
      <select id="sel-tag"><option value="">All tags</option></select>
      <div id="milestone-toast"></div>
    `;
    setActiveTagSet(null);
    state.deck = (W as unknown as WordEntry[]).slice(0, 5);
    state.idx = 0;
    render.mockClear();
    setDeck.mockClear();
    setIdx.mockClear();
    stopAuto.mockClear();
  });

  it('reports special modes via _isSpecialMode', async () => {
    const { _isSpecialMode } = await import('../../js/features/deck-mode.tsx');
    expect(_isSpecialMode('en')).toBe(false);
    expect(_isSpecialMode('es-en')).toBe(true);
    expect(_isSpecialMode('fr-en')).toBe(true);
  });

  it('switches to the ES-filtered deck when es-en is selected', async () => {
    const { DeckModeInit } = await import('../../js/features/deck-mode.tsx');
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);
    act(() => { root.render(<DeckModeInit />); });

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
    const { DeckModeInit } = await import('../../js/features/deck-mode.tsx');
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);
    act(() => { root.render(<DeckModeInit />); });

    const originalDeck = state.deck;
    changeMode('es-en');
    changeMode('en');

    expect(setDeck).toHaveBeenLastCalledWith(originalDeck);
    expect((document.getElementById('sel-range') as HTMLSelectElement).disabled).toBe(false);
    expect((document.getElementById('sel-tag') as HTMLSelectElement).disabled).toBe(false);
  });

  it('shows a toast and resets to "en" when the special deck has no translations', async () => {
    const { DeckModeInit } = await import('../../js/features/deck-mode.tsx');
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);
    act(() => { root.render(<DeckModeInit />); });

    changeMode('fr-en');

    const sel = document.getElementById('sel-mode') as HTMLSelectElement;
    expect(sel.value).toBe('en');
    const toast = document.getElementById('milestone-toast') as HTMLElement;
    expect(toast.textContent).toContain('Французьких перекладів');
    expect(toast.className).toContain('show');
  });

  it('filters the special deck by the active tag set when present', async () => {
    const { DeckModeInit } = await import('../../js/features/deck-mode.tsx');
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);
    act(() => { root.render(<DeckModeInit />); });

    setActiveTagSet(new Set([esWord]));
    changeMode('es-en');

    const deck = setDeck.mock.calls.at(-1)![0] as WordEntry[];
    expect(deck.map(w => w[0])).toEqual([esWord]);
  });
});
