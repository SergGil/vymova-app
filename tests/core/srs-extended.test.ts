import { describe, it, expect, beforeEach, beforeAll, afterEach, vi } from 'vitest';
import { shuffle, _shuf, buildSRSDeck, buildUnlearnedDeck, updateSrsUI, sm2Update } from '../../js/core/srs.ts';
import { getSrsNewRemaining, SRS_NEW_DAILY_CAP, invalidateGameCaches } from '../../js/features/game.ts';
import { clearSrsData, getSrsDataSnapshot, setSrsEntry, loadSrsData, markSrsStatsClean } from '../../src/srs-store.ts';
import { setActiveTagSet } from '../../src/deck-filter-store.ts';
import { setKnownWords } from '../../src/known-words-store.ts';
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
  clearSrsData();
  setKnownWords('en', new Set());
  setActiveTagSet(null);
  vi.useFakeTimers();
  vi.setSystemTime(new Date('2024-06-01T12:00:00.000Z'));
});

afterEach(() => {
  vi.useRealTimers();
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
    setKnownWords('en', new Set(['apple', 'banana']));
    const deck = buildUnlearnedDeck(W);
    expect(deck.length).toBe(W.length - 2);
    expect(deck.some(w => w[0] === 'apple')).toBe(false);
    expect(deck.some(w => w[0] === 'banana')).toBe(false);
  });

  it('returns all words (as fallback) when everything is known', () => {
    setKnownWords('en', new Set(W.map(w => w[0])));
    const deck = buildUnlearnedDeck(W);
    expect(deck.length).toBe(W.length);
  });

  it('applies tag filter when activeTagSet is set', () => {
    setActiveTagSet(new Set(['apple', 'banana']));
    const deck = buildUnlearnedDeck(W);
    expect(deck.length).toBe(2);
    expect(deck.every(w => ['apple', 'banana'].includes(w[0]))).toBe(true);
  });
});

// ── buildSRSDeck() ────────────────────────────────────────────
describe('buildSRSDeck()', () => {
  it('returns due SRS cards', () => {
    setSrsEntry('apple', { ef: 2.5, reps: 1, interval: 1, due: '2024-05-31' }); // overdue
    setSrsEntry('banana', { ef: 2.5, reps: 1, interval: 1, due: '2024-07-01' }); // not yet
    const deck = buildSRSDeck(W);
    expect(deck.some(w => w[0] === 'apple')).toBe(true);
  });

  it('excludes cards not yet due', () => {
    setSrsEntry('apple', { ef: 2.5, reps: 1, interval: 5, due: '2024-07-01' }); // future
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
    setKnownWords('en', new Set(['cat', 'dog', 'fish', 'book', 'house']));
    const deck = buildSRSDeck(W);
    // new cards: apple, banana, car (3 total)
    const newWords = deck.filter(w => !getSrsDataSnapshot()[w[0]]?.due);
    expect(newWords.length).toBeLessThanOrEqual(10);
  });

  it('falls back to unlearned when no SRS cards', () => {
    // No srsData, no known → all words are "new"
    const deck = buildSRSDeck(W);
    expect(deck.length).toBeGreaterThan(0);
  });

  it('falls back to all words when everything is known and no SRS', () => {
    setKnownWords('en', new Set(W.map(w => w[0])));
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
    setSrsEntry('apple', { ef: 2.5, reps: 1, interval: 1, due: '2024-05-31' }); // overdue
    updateSrsUI(W);
    expect(document.getElementById('srs-stat-due')!.textContent).toBe('1');
  });

  it('serves cached counts when not marked dirty (cache-hit path)', () => {
    setSrsEntry('apple', { ef: 2.5, reps: 1, interval: 1, due: '2024-05-31' });
    updateSrsUI(W); // recomputes due=1, then marks clean
    expect(document.getElementById('srs-stat-due')!.textContent).toBe('1');

    // Add a second overdue card but force dirty back to false — the cache
    // unit itself must skip recomputing and keep serving the old count.
    setSrsEntry('banana', { ef: 2.5, reps: 1, interval: 1, due: '2024-05-31' });
    markSrsStatsClean();
    updateSrsUI(W);
    expect(document.getElementById('srs-stat-due')!.textContent).toBe('1');
  });

  it('automatically reflects new data without a manual dirty flag (the old footgun this store eliminates)', () => {
    setSrsEntry('apple', { ef: 2.5, reps: 1, interval: 1, due: '2024-05-31' });
    updateSrsUI(W);
    expect(document.getElementById('srs-stats')!.style.display).not.toBe('none');

    // Loading fresh data — the store marks dirty automatically, so this no
    // longer requires the caller to remember a separate manual flag.
    loadSrsData({ car: { ef: 2.5, reps: 1, interval: 1, due: '2024-05-31' } });
    updateSrsUI(W);
    expect(document.getElementById('srs-stat-due')!.textContent).toBe('1');
  });
});

// ── SRS daily new-card quota ────────────────────────────────────
// Regression coverage: "10 нових" must reflect a real per-day budget that
// decreases as new cards are studied and resets the next day — not a flat
// per-deck-snapshot cap that looks frozen within a session.
describe('SRS daily new-card quota', () => {
  beforeEach(() => {
    localStorage.clear();
    invalidateGameCaches();
  });

  it('starts each day with the full quota available', () => {
    expect(getSrsNewRemaining()).toBe(SRS_NEW_DAILY_CAP);
  });

  it('sm2Update on a brand-new word consumes one slot of the quota', () => {
    sm2Update('apple', 4);
    expect(getSrsNewRemaining()).toBe(SRS_NEW_DAILY_CAP - 1);
  });

  it('reviewing an already-seen word does not consume the quota again', () => {
    sm2Update('apple', 4);
    sm2Update('apple', 4); // same word, already has an SRS entry
    expect(getSrsNewRemaining()).toBe(SRS_NEW_DAILY_CAP - 1);
  });

  it('buildSRSDeck never hands out more new cards than the remaining quota', () => {
    setKnownWords('en', new Set());
    for (let i = 0; i < SRS_NEW_DAILY_CAP - 1; i++) sm2Update(`seen${i}`, 4);
    expect(getSrsNewRemaining()).toBe(1);
    const deck = buildSRSDeck(W);
    const newInDeck = deck.filter(w => !getSrsDataSnapshot()[w[0]]?.due);
    expect(newInDeck.length).toBeLessThanOrEqual(1);
  });

  it('resets to the full quota on a new day', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2024-06-01T10:00:00Z'));
    sm2Update('apple', 4);
    expect(getSrsNewRemaining()).toBe(SRS_NEW_DAILY_CAP - 1);

    vi.setSystemTime(new Date('2024-06-02T10:00:00Z'));
    expect(getSrsNewRemaining()).toBe(SRS_NEW_DAILY_CAP);
  });
});
