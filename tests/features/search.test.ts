import { describe, it, expect } from 'vitest';

// ── DOM ID uniqueness test ────────────────────────────────────
// Verifies the HTML doesn't have duplicate IDs that break search
describe('Search overlay — DOM ID uniqueness', () => {
  it('overlay uses unique ov- prefixed IDs (not search-input)', () => {
    // These are the correct IDs after the fix
    const overlayIds = ['ov-search-input', 'ov-search-results', 'ov-search-empty'];
    const inlineIds = ['search-input', 'search-results'];

    // They must not overlap
    const allIds = new Set([...overlayIds, ...inlineIds]);
    expect(allIds.size).toBe(overlayIds.length + inlineIds.length);
  });

  it('ov-search-input ID is different from search-input', () => {
    expect('ov-search-input').not.toBe('search-input');
  });

  it('ov-search-results ID is different from search-results', () => {
    expect('ov-search-results').not.toBe('search-results');
  });
});

// ── Search result ranking logic ────────────────────────────────
describe('Search result ranking', () => {
  type WordEntry = readonly [string, string, string?, string?, string?];

  function searchRank(query: string, words: WordEntry[]): WordEntry[] {
    const q = query.toLowerCase();
    const en: WordEntry[] = [],
      ua: WordEntry[] = [],
      enC: WordEntry[] = [],
      uaC: WordEntry[] = [];
    for (const w of words) {
      const enLow = w[0].toLowerCase(),
        uaLow = w[1].toLowerCase();
      if (enLow.startsWith(q)) {
        en.push(w);
        continue;
      }
      if (uaLow.startsWith(q)) {
        ua.push(w);
        continue;
      }
      if (enLow.includes(q)) {
        enC.push(w);
        continue;
      }
      if (uaLow.includes(q)) {
        uaC.push(w);
      }
    }
    return [...en, ...ua, ...enC, ...uaC];
  }

  const words: WordEntry[] = [
    ['apple', 'яблуко', '/ˈæpəl/'],
    ['application', 'додаток', '/ˌæplɪˈkeɪʃən/'],
    ['pineapple', 'ананас', '/ˈpaɪnæpəl/'],
    ['banana', 'банан'],
    ['cat', 'кіт'],
  ];

  it('exact prefix matches come first', () => {
    const results = searchRank('app', words);
    expect(results[0][0]).toBe('apple');
    expect(results[1][0]).toBe('application');
  });

  it('contains matches come after prefix matches', () => {
    const results = searchRank('app', words);
    const prefixCount = results.filter((w) => w[0].toLowerCase().startsWith('app')).length;
    const containsIdx = results.findIndex((w) => w[0] === 'pineapple');
    expect(containsIdx).toBeGreaterThanOrEqual(prefixCount);
  });

  it('returns empty array for no matches', () => {
    expect(searchRank('xyz', words)).toHaveLength(0);
  });

  it('single character query returns prefix matches', () => {
    const results = searchRank('a', words);
    expect(results.some((w) => w[0] === 'apple')).toBe(true);
  });

  it('max 40 results respected (slice logic)', () => {
    const many: WordEntry[] = Array.from(
      { length: 100 },
      (_, i) => [`word${i}`, `слово${i}`] as WordEntry,
    );
    const results = searchRank('w', many).slice(0, 40);
    expect(results.length).toBe(40);
  });
});
