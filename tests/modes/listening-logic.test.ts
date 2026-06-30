import { describe, it, expect } from 'vitest';
import { _shuf } from '../../js/core/srs.ts';
import { getDeckSnapshot, setDeckState } from '../../src/deck-store.ts';
import { W } from '../../data/words.js';
import type { WordEntry } from '../../src/types.js';

const SIZE = 10;

// ── Re-declared pure helpers from js/modes/listening.tsx ──
function build(): WordEntry[] {
  const pool = _shuf(
    (getDeckSnapshot().length ? getDeckSnapshot().slice() : W.slice()) as unknown as WordEntry[],
  );
  return pool.slice(0, SIZE);
}

function buildOptions(word: WordEntry): string[] {
  const correct = word[1];
  const pool = _shuf(W.slice() as unknown as WordEntry[]);
  const wrongs: string[] = [];
  const used: Record<string, boolean> = { [word[0].toLowerCase()]: true };
  for (let i = 0; i < pool.length && wrongs.length < 3; i++) {
    const k = pool[i][0].toLowerCase();
    if (used[k]) continue;
    used[k] = true;
    wrongs.push(pool[i][1]);
  }
  return _shuf([correct, ...wrongs]);
}

describe('listening-logic', () => {
  describe('build()', () => {
    it('returns SIZE words from W when getDeckSnapshot() is empty', () => {
      setDeckState([]);
      const deck = build();
      expect(deck.length).toBe(SIZE);
    });

    it('uses getDeckSnapshot() when populated', () => {
      const custom: WordEntry[] = W.slice(0, 3) as unknown as WordEntry[];
      setDeckState(custom);
      const deck = build();
      expect(deck.length).toBe(3);
      setDeckState([]);
    });
  });

  describe('buildOptions()', () => {
    it('returns 4 unique options including the correct translation', () => {
      const word = (W as unknown as WordEntry[])[0];
      const options = buildOptions(word);
      expect(options.length).toBe(4);
      expect(options).toContain(word[1]);
      expect(new Set(options).size).toBe(4);
    });

    it('does not include the same word as both correct and wrong', () => {
      const word = (W as unknown as WordEntry[])[0];
      const options = buildOptions(word);
      const occurrences = options.filter((o) => o === word[1]).length;
      expect(occurrences).toBe(1);
    });
  });
});
