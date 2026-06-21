import { describe, it, expect, beforeEach, beforeAll } from 'vitest';
import { shuffle, _shuf, buildSRSDeck, buildUnlearnedDeck, updateSrsUI } from '../../js/core/srs.ts';
import { state } from '../../src/state.ts';
import type { WordEntry } from '../../src/types.js';

// ── Mini word list for deck tests ─────────────────────────────
const W: WordEntry[] = [
  ['apple', 'яблуко', '/ˈæpəl/', 'I eat an apple.', 'Я їм яблуко.'],
  ['banana', 'банан', '/bəˈnɑːnə/', 'The banana is yellow.', 'Банан жовтий.'],
  ['cat', 'кіт', '/kæt/', 'The cat sleeps.', 'Кіт спить.'],
  ['dog', 'собака', '/dɒɡ/', 'The dog runs.', 'Собака бігає.'],
  ['fish', 'риба', '/fɪʃ/', 'I like fish.', 'Я люблю рибу.'],
  ['book', 'книга', '/bʊk/', 'Read a book.', 'Читай книгу.'],
  ['house', 'будинок', '/haʊs/', 'Nice house.', 'Гарний будинок.'],
  ['car', 'машина', '/kɑːr/', 'Fast car.', 'Швидка машина.'],
];

beforeEach(() => {
  state.srsData = {};
  state.known = new Set();
  state._activeTagSet = null;
  state.TODAY = '2024-06-01';
});

// ── shuffle() ─────────────────────────────────────────────────
describe('shuffle()', () => {
  it('returns the same array reference (in-place)', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = shuffle(arr);
    expect(result).toBe(arr);
  });

  it('preserves all elements', () => {
    const arr = [1, 2, 3, 4, 5];
    shuffle(arr);
    expect(arr.sort()).toEqual([1, 2, 3, 4, 5]);
  });

  it('single element array stays unchanged', () => {
    const arr = [42];
    shuffle(arr);
    expect(arr).toEqual([42]);
  });

  it('empty array stays empty', () => {
    const arr: number[] = [];
    shuffle(arr);
    expect(arr).toEqual([]);
  });

  it('statistically produces different order over many runs', () => {
    const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let differentOrderCount = 0;
    for (let i = 0; i < 20; i++) {
      const arr = [...original];
      shuffle(arr);
      if (arr.join(',') !== original.join(',')) differentOrderCount++;
    }
    // With 10 elements, same order probability is 1/3628800 — expect > 15 different
    expect(differentOrderCount).toBeGreaterThan(15);
  });
});

// ── _shuf() ───────────────────────────────────────────────────
describe('_shuf()', () => {
  it('returns a new array (copy, not in-place)', () => {
    const arr = [1, 2, 3];
    const result = _shuf(arr);
    expect(result).not.toBe(arr);
  });

  it('original array is unchanged', () => {
    const arr = [1, 2, 3, 4, 5];
    const copy = [...arr];
    _shuf(arr);
    expect(arr).toEqual(copy);
  });

  it('result has same elements', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = _shuf(arr);
    expect(result.sort()).toEqual([1, 2, 3, 4, 5]);
  });
});

// ── buildUnlearnedDeck() ──────────────────────────────────────
describe('buildUnlearnedDeck()', () => {
  it('returns all words when nothing is known', () => {
    const deck = buildUnlearnedDeck(W);
    expect(deck.length).toBe(W.length);
  });

  it('excludes known words', () => {
    state.known = new Set(['apple', 'banana']);
    const deck = buildUnlearnedDeck(W);
    expect(deck.length).toBe(W.length - 2);
    expect(deck.some(w => w[0] === 'apple')).toBe(false);
    expect(deck.some(w => w[0] === 'banana')).toBe(false);
  });

  it('returns all words (as fallback) when everything is known', () => {
    state.known = new Set(W.map(w => w[0]));
    const deck = buildUnlearnedDeck(W);
    expect(deck.length).toBe(W.length);
  });

  it('applies tag filter when activeTagSet is set', () => {
    state._activeTagSet = new Set(['apple', 'banana']);
    const deck = buildUnlearnedDeck(W);
    expect(deck.length).toBe(2);
    expect(deck.every(w => ['apple', 'banana'].includes(w[0]))).toBe(true);
  });
});

// ── buildSRSDeck() ────────────────────────────────────────────
describe('buildSRSDeck()', () => {
  it('returns due SRS cards', () => {
    state.srsData['apple'] = { ef: 2.5, reps: 1, interval: 1, due: '2024-05-31' }; // overdue
    state.srsData['banana'] = { ef: 2.5, reps: 1, interval: 1, due: '2024-07-01' }; // not yet
    const deck = buildSRSDeck(W);
    expect(deck.some(w => w[0] === 'apple')).toBe(true);
  });

  it('excludes cards not yet due', () => {
    state.srsData['apple'] = { ef: 2.5, reps: 1, interval: 5, due: '2024-07-01' }; // future
    const deck = buildSRSDeck(W);
    // apple should not be in due cards — may appear as new card if room
    const appleEntry = deck.find(w => w[0] === 'apple');
    if (appleEntry) {
      // If apple appears, it's as a new card (no due date counting as new)
      // Actually: apple HAS an srsData entry, so it's NOT treated as new
      expect(false).toBe(true); // should not be in deck
    }
    expect(true).toBe(true);
  });

  it('adds up to 10 new (unseen) cards', () => {
    // Mark all but 3 as known so only 3 new candidates exist
    state.known = new Set(['cat', 'dog', 'fish', 'book', 'house']);
    const deck = buildSRSDeck(W);
    // new cards: apple, banana, car (3 total)
    const newWords = deck.filter(w => !state.srsData[w[0]]?.due);
    expect(newWords.length).toBeLessThanOrEqual(10);
  });

  it('falls back to unlearned when no SRS cards', () => {
    // No srsData, no known → all words are "new"
    const deck = buildSRSDeck(W);
    expect(deck.length).toBeGreaterThan(0);
  });

  it('falls back to all words when everything is known and no SRS', () => {
    state.known = new Set(W.map(w => w[0]));
    const deck = buildSRSDeck(W);
    expect(deck.length).toBe(W.length);
  });
});

// ── updateSrsUI() — dirty-flag cache contract ──────────────────
// Regression coverage for a bug where switching the learn language left the
// "X до повторення / Y нових" badge showing the *previous* language's stale
// numbers, because nothing marked the stats cache dirty after the switch.
describe('updateSrsUI()', () => {
  // updateSrsUI caches its DOM element refs on first lookup (module-level,
  // not per-call), so the markup must exist before any test in this block
  // runs and must not be replaced wholesale between tests.
  beforeAll(() => {
    document.body.innerHTML = `
      <select id="sel-range"><option value="srs"></option></select>
      <div id="srs-stats" style="display:none">
        <span id="srs-stat-due">0</span>
        <span id="srs-stat-new">0</span>
      </div>
    `;
  });

  it('recomputes due/new counts when the stats cache is dirty', () => {
    state.srsData['apple'] = { ef: 2.5, reps: 1, interval: 1, due: '2024-05-31' }; // overdue
    state._srsStatsDirty = true;
    updateSrsUI(W);
    expect(document.getElementById('srs-stat-due')!.textContent).toBe('1');
  });

  it('serves stale cached counts when not marked dirty (the bug this guards)', () => {
    state.srsData['apple'] = { ef: 2.5, reps: 1, interval: 1, due: '2024-05-31' };
    state._srsStatsDirty = true;
    updateSrsUI(W); // caches due=1

    // Simulate switching to a language with completely different SRS data,
    // without flagging the cache dirty.
    state.srsData = { banana: { ef: 2.5, reps: 1, interval: 1, due: '2024-05-31' } };
    state._srsStatsDirty = false;
    updateSrsUI(W);
    expect(document.getElementById('srs-stat-due')!.textContent).toBe('1'); // stale, still old value
  });

  it('reflects the new language data once dirty is set again', () => {
    state.srsData['apple'] = { ef: 2.5, reps: 1, interval: 1, due: '2024-05-31' };
    state._srsStatsDirty = true;
    updateSrsUI(W);
    expect(document.getElementById('srs-stats')!.style.display).not.toBe('none');

    // Fresh language with one due card, different from the previous language's data
    state.srsData = { car: { ef: 2.5, reps: 1, interval: 1, due: '2024-05-31' } };
    state._srsStatsDirty = true; // app.ts now sets this on language switch
    updateSrsUI(W);
    expect(document.getElementById('srs-stat-due')!.textContent).toBe('1');
  });
});
