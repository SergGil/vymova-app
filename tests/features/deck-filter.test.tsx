import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { setActiveTagSet } from '../../src/deck-filter-store.ts';
import { clearSrsData, setSrsEntry } from '../../src/srs-store.ts';
import { setKnownWords } from '../../src/known-words-store.ts';
import { W } from '../../data/words.js';
import type { WordEntry } from '../../src/types.ts';
import { DeckFilterInit } from '../../js/features/deck-filter.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const {
  render,
  setDeck,
  setIdx,
  stopAuto,
  shuffle,
  _shuf,
  buildSRSDeck,
  buildUnlearnedDeck,
  getHardWords,
  getBookmarks,
} = vi.hoisted(() => ({
  render: vi.fn(),
  setDeck: vi.fn(),
  setIdx: vi.fn(),
  stopAuto: vi.fn(),
  shuffle: vi.fn((a: unknown[]) => a),
  _shuf: vi.fn((a: unknown[]) => a),
  buildSRSDeck: vi.fn(() => []),
  buildUnlearnedDeck: vi.fn((words: unknown[]) => words),
  getHardWords: vi.fn(() => [] as string[]),
  getBookmarks: vi.fn(() => new Set<string>()),
}));
vi.mock('../../js/core/card-engine.ts', () => ({ render, setDeck, setIdx, stopAuto }));
vi.mock('../../js/core/srs.ts', () => ({ shuffle, _shuf, buildSRSDeck, buildUnlearnedDeck }));
vi.mock('../../js/features/game.ts', () => ({ getHardWords }));
vi.mock('../../js/features/bookmarks.ts', () => ({ getBookmarks }));

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => {
    root.render(<DeckFilterInit />);
  });
  return { container, root };
}

function change(value: string): void {
  const sel = document.getElementById('sel-range') as HTMLSelectElement;
  sel.value = value;
  act(() => {
    sel.dispatchEvent(new Event('change'));
  });
}

describe('deck-filter.tsx DeckFilterInit', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <select id="sel-range">
        <option value="0">All (0)</option>
        <option value="srs">SRS</option>
        <option value="unlearned">Unlearned</option>
        <option value="weak">Weak</option>
        <option value="hard">Hard</option>
        <option value="leech">Leech</option>
        <option value="bookmarks">Bookmarks</option>
        <option value="cefr-A1">A1</option>
        <option value="pos-n">Nouns</option>
        <option value="pos-other">Other POS</option>
        <option value="stale7">Stale</option>
      </select>
      <select id="sel-tag"><option value="">All tags</option></select>
      <div id="milestone-toast"></div>
    `;
    setActiveTagSet(null);
    clearSrsData();
    setKnownWords('en', new Set());
    render.mockClear();
    setDeck.mockClear();
    setIdx.mockClear();
    stopAuto.mockClear();
    shuffle.mockClear();
    buildSRSDeck.mockClear().mockReturnValue([]);
    buildUnlearnedDeck.mockClear().mockImplementation((words: unknown[]) => words);
    getHardWords.mockClear().mockReturnValue([]);
    getBookmarks.mockClear().mockReturnValue(new Set());
  });

  it('builds the SRS deck on "srs" selection', () => {
    mount();
    change('srs');
    expect(buildSRSDeck).toHaveBeenCalled();
    expect(setDeck).toHaveBeenCalled();
    expect(setIdx).toHaveBeenCalledWith(0);
    expect(render).toHaveBeenCalled();
    expect(stopAuto).toHaveBeenCalled();
  });

  it('builds the unlearned deck on "unlearned" selection', () => {
    mount();
    change('unlearned');
    expect(buildUnlearnedDeck).toHaveBeenCalled();
    expect(setDeck).toHaveBeenCalled();
  });

  it('filters to bookmarked words on "bookmarks" selection', () => {
    const target = (W as unknown as WordEntry[])[0][0];
    getBookmarks.mockReturnValue(new Set([target]));
    mount();
    change('bookmarks');
    const deck = setDeck.mock.calls.at(-1)![0] as WordEntry[];
    expect(deck.every((w) => w[0] === target)).toBe(true);
    expect(deck.length).toBe(1);
  });

  it('falls back to a shuffled full deck when no bookmarks exist', () => {
    const sel = document.getElementById('sel-range') as HTMLSelectElement;
    sel.value = 'bookmarks';
    mount();
    act(() => {
      sel.dispatchEvent(new Event('change'));
    });
    expect(sel.value).toBe('0');
    const deck = setDeck.mock.calls.at(-1)![0] as WordEntry[];
    expect(deck.length).toBe(W.length);
  });

  it('filters to hard words on "hard" selection', () => {
    const targets = (W as unknown as WordEntry[]).slice(0, 2).map((w) => w[0]);
    getHardWords.mockReturnValue(targets);
    mount();
    change('hard');
    const deck = setDeck.mock.calls.at(-1)![0] as WordEntry[];
    expect(deck.map((w) => w[0]).sort()).toEqual(targets.slice().sort());
  });

  it('falls back to unlearned deck when no hard words exist', () => {
    mount();
    change('hard');
    expect(buildUnlearnedDeck).toHaveBeenCalled();
  });

  it('filters to leech words (SRS lapses >= 4) on "leech" selection', () => {
    const [leechWord, freshWord] = (W as unknown as WordEntry[]).slice(0, 2).map((w) => w[0]);
    setSrsEntry(leechWord, { ef: 2.5, reps: 0, interval: 1, due: '2099-01-01', lapses: 4 });
    setSrsEntry(freshWord, { ef: 2.5, reps: 3, interval: 6, due: '2099-01-01', lapses: 1 });
    mount();
    change('leech');
    const deck = setDeck.mock.calls.at(-1)![0] as WordEntry[];
    expect(deck.map((w) => w[0])).toEqual([leechWord]);
  });

  it('falls back to unlearned deck when no leech words exist', () => {
    mount();
    change('leech');
    expect(buildUnlearnedDeck).toHaveBeenCalled();
  });

  it('builds a CEFR-filtered deck on "cefr-A1" selection', () => {
    mount();
    change('cefr-A1');
    expect(setDeck).toHaveBeenCalled();
    expect(setIdx).toHaveBeenCalledWith(0);
    expect(render).toHaveBeenCalled();
  });

  it('builds a part-of-speech deck on "pos-n" selection', () => {
    mount();
    change('pos-n');
    const deck = setDeck.mock.calls.at(-1)![0] as WordEntry[];
    expect(deck.length).toBeGreaterThan(0);
    expect(deck.every((w) => (w[5] ?? '').split('/').includes('n'))).toBe(true);
  });

  it('"pos-other" matches the low-frequency tags (prep/conj/det/num/interj)', () => {
    mount();
    change('pos-other');
    const deck = setDeck.mock.calls.at(-1)![0] as WordEntry[];
    const about = (W as unknown as WordEntry[]).find((w) => w[0] === 'about')!;
    expect(deck.some((w) => w[0] === about[0])).toBe(true);
    expect(deck.every((w) => ['prep', 'conj', 'det', 'num', 'interj'].includes(w[5] ?? ''))).toBe(
      true,
    );
  });

  it('falls back to a shuffled full deck when no words match the POS filter', () => {
    const sel = document.getElementById('sel-range') as HTMLSelectElement;
    const opt = document.createElement('option');
    opt.value = 'pos-zzz';
    sel.appendChild(opt);
    mount();
    sel.value = 'pos-zzz';
    act(() => {
      sel.dispatchEvent(new Event('change'));
    });
    const deck = setDeck.mock.calls.at(-1)![0] as WordEntry[];
    expect(deck.length).toBe(W.length);
  });

  it('builds a stale-words deck on "stale7" selection', () => {
    mount();
    change('stale7');
    expect(setDeck).toHaveBeenCalled();
    expect(setIdx).toHaveBeenCalledWith(0);
  });

  it('builds a known-words deck on "weak" selection when no SRS-weak words exist', () => {
    setKnownWords('en', new Set([(W as unknown as WordEntry[])[0][0]]));
    mount();
    change('weak');
    const deck = setDeck.mock.calls.at(-1)![0] as WordEntry[];
    expect(deck.length).toBeGreaterThan(0);
  });

  describe('"weak" fallback — active target language, not just base English', () => {
    afterEach(() => {
      localStorage.removeItem('ew_learn_lang');
      setKnownWords('es', new Set());
    });

    // Regression: the "not enough SRS-weak words" fallback used to read
    // getKnownSnapshot('en') unconditionally — for anyone learning a target
    // language (not en/ua), their real known-words progress lives in a
    // separate per-language bucket that check never saw, so this branch
    // always looked empty and silently fell through to the plain
    // unlearned-words fallback below it instead.
    it("uses the active target language's known set, not the base English one", async () => {
      const { ensureLangTableLoaded, entryFor } = await import('../../js/features/mode-utils.ts');
      await ensureLangTableLoaded('es');
      const all = W as unknown as WordEntry[];
      const esWord = all.find((w) => entryFor('es', w).word)!;

      localStorage.setItem('ew_learn_lang', 'es');
      setKnownWords('en', new Set()); // no English progress at all
      setKnownWords('es', new Set([esWord[0]]));

      mount();
      change('weak');

      const deck = setDeck.mock.calls.at(-1)![0] as WordEntry[];
      expect(deck).toContainEqual(esWord);
    });
  });

  it('builds a full shuffled deck for the "all words" selection', () => {
    mount();
    change('0');
    expect(setDeck).toHaveBeenCalled();
    const deck = setDeck.mock.calls.at(-1)![0] as WordEntry[];
    expect(deck.length).toBe(W.length);
  });

  it('cleans up the change listener on unmount', () => {
    const { root } = mount();
    act(() => {
      root.unmount();
    });
    const sel = document.getElementById('sel-range') as HTMLSelectElement;
    sel.value = 'srs';
    act(() => {
      sel.dispatchEvent(new Event('change'));
    });
    expect(buildSRSDeck).not.toHaveBeenCalled();
  });
});
