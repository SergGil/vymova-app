import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import {
  _lzSave,
  _lzLoad,
  saveKnown,
  loadKnown,
  saveKnownEs,
  loadKnownEs,
  saveSRS,
  loadSRS,
} from '../../js/core/storage.ts';

// ── localStorage mock ─────────────────────────────────────────
const _store: Record<string, string> = {};
const lsMock = {
  getItem: (k: string) => _store[k] ?? null,
  setItem: (k: string, v: string) => {
    _store[k] = v;
  },
  removeItem: (k: string) => {
    delete _store[k];
  },
  clear: () => {
    Object.keys(_store).forEach((k) => delete _store[k]);
  },
  get length() {
    return Object.keys(_store).length;
  },
  key: (i: number) => Object.keys(_store)[i] ?? null,
};

beforeEach(() => {
  lsMock.clear();
  vi.stubGlobal('localStorage', lsMock);
});
afterEach(() => {
  vi.unstubAllGlobals();
});

// ── _lzSave / _lzLoad round-trip ─────────────────────────────
describe('_lzSave() + _lzLoad() round-trip', () => {
  it('saves and loads an array', () => {
    _lzSave('test_arr', ['a', 'b', 'c']);
    const result = _lzLoad<string[]>('test_arr', []);
    expect(result).toEqual(['a', 'b', 'c']);
  });

  it('saves and loads an object', () => {
    const obj = { foo: 'bar', count: 42 };
    _lzSave('test_obj', obj);
    const result = _lzLoad('test_obj', {});
    expect(result).toEqual(obj);
  });

  it('sets the _lz marker flag', () => {
    _lzSave('mykey', [1, 2, 3]);
    expect(lsMock.getItem('mykey_lz')).toBe('1');
  });

  it('returns fallback for missing key', () => {
    const result = _lzLoad('nonexistent', ['default']);
    expect(result).toEqual(['default']);
  });

  it('returns fallback for null/undefined value', () => {
    _lzSave('nullkey', null);
    const result = _lzLoad('nullkey', 'fallback');
    expect(result).toBe('fallback');
  });

  it('handles empty array', () => {
    _lzSave('empty', []);
    const result = _lzLoad<string[]>('empty', ['x']);
    expect(result).toEqual([]);
  });

  it('handles empty object', () => {
    _lzSave('emptyobj', {});
    const result = _lzLoad('emptyobj', { x: 1 });
    expect(result).toEqual({});
  });

  it('falls back gracefully on corrupted data (non-lz raw JSON)', () => {
    // Store raw JSON without compression flag
    lsMock.setItem('raw_key', JSON.stringify([1, 2, 3]));
    // no _lz flag → reads as raw JSON
    const result = _lzLoad<number[]>('raw_key', [99]);
    expect(result).toEqual([1, 2, 3]);
  });

  it('returns fallback on type mismatch (array vs object)', () => {
    _lzSave('mismatch', { a: 1 }); // saves object
    const result = _lzLoad<string[]>('mismatch', []); // expects array fallback
    expect(Array.isArray(result)).toBe(true); // returns fallback []
  });
});

// ── saveKnown / loadKnown ─────────────────────────────────────
describe('saveKnown() + loadKnown()', () => {
  it('round-trips a populated Set', () => {
    const known = new Set(['apple', 'banana', 'cat']);
    saveKnown(known);
    const loaded = loadKnown();
    expect(loaded.size).toBe(3);
    expect(loaded.has('apple')).toBe(true);
    expect(loaded.has('banana')).toBe(true);
    expect(loaded.has('cat')).toBe(true);
  });

  it('round-trips an empty Set', () => {
    saveKnown(new Set());
    const loaded = loadKnown();
    expect(loaded.size).toBe(0);
  });

  it('returns empty Set when nothing is stored', () => {
    const loaded = loadKnown();
    expect(loaded).toBeInstanceOf(Set);
    expect(loaded.size).toBe(0);
  });

  it('preserves all words exactly', () => {
    const words = ['hello', 'world', 'foo', 'bar', 'baz'];
    saveKnown(new Set(words));
    const loaded = loadKnown();
    for (const w of words) expect(loaded.has(w)).toBe(true);
  });
});

// ── saveKnownEs / loadKnownEs ─────────────────────────────────
describe('saveKnownEs() + loadKnownEs()', () => {
  it('round-trips a populated Set', () => {
    const known = new Set(['hablar', 'correr', 'vivir']);
    saveKnownEs(known);
    const loaded = loadKnownEs();
    expect(loaded.size).toBe(3);
    expect(loaded.has('hablar')).toBe(true);
    expect(loaded.has('correr')).toBe(true);
    expect(loaded.has('vivir')).toBe(true);
  });

  it('round-trips an empty Set', () => {
    saveKnownEs(new Set());
    const loaded = loadKnownEs();
    expect(loaded.size).toBe(0);
  });

  it('returns empty Set when nothing is stored', () => {
    const loaded = loadKnownEs();
    expect(loaded).toBeInstanceOf(Set);
    expect(loaded.size).toBe(0);
  });

  it('is stored independently from ew_known', () => {
    saveKnown(new Set(['apple', 'banana']));
    saveKnownEs(new Set(['manzana', 'plátano']));

    const en = loadKnown();
    const es = loadKnownEs();

    expect(en.has('apple')).toBe(true);
    expect(en.has('manzana')).toBe(false);
    expect(es.has('manzana')).toBe(true);
    expect(es.has('apple')).toBe(false);
  });

  it('clearing ew_known does not affect ew_known_es', () => {
    saveKnown(new Set(['apple']));
    saveKnownEs(new Set(['manzana']));

    saveKnown(new Set()); // clear EN known
    expect(loadKnown().size).toBe(0);
    expect(loadKnownEs().has('manzana')).toBe(true); // ES untouched
  });
});

// ── saveSRS / loadSRS ─────────────────────────────────────────
describe('saveSRS() + loadSRS()', () => {
  it('round-trips SRS data', () => {
    const srs = {
      apple: { ef: 2.5, reps: 2, interval: 6, due: '2024-06-10' },
      banana: { ef: 1.8, reps: 0, interval: 1, due: '2024-06-02' },
    };
    saveSRS(srs);
    const loaded = loadSRS();
    expect(loaded['apple']?.ef).toBe(2.5);
    expect(loaded['apple']?.reps).toBe(2);
    expect(loaded['banana']?.due).toBe('2024-06-02');
  });

  it('returns empty object when nothing stored', () => {
    const loaded = loadSRS();
    expect(loaded).toEqual({});
  });

  it('round-trips empty SRS object', () => {
    saveSRS({});
    const loaded = loadSRS();
    expect(loaded).toEqual({});
  });
});
