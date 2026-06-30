import { describe, it, expect } from 'vitest';
import { _shuf } from '../../js/core/srs.ts';
import { getDeckSnapshot, setDeckState } from '../../src/deck-store.ts';
import { W } from '../../data/words.js';
import { t } from '../../js/features/i18n.ts';
import type { WordEntry } from '../../src/types.js';

const SIZE = 8,
  NUM_OPTS = 4;

// ── Re-declared pure helpers from js/modes/context.tsx ──
function getExample(w: WordEntry): string {
  return w[2] ?? '';
}

function hasGoodExample(w: WordEntry): boolean {
  const ex = getExample(w);
  return ex.length >= 15 && ex.toLowerCase().includes(w[0].toLowerCase().split(' ')[0]);
}

function build(): WordEntry[] {
  const pool = _shuf(
    (getDeckSnapshot().length ? getDeckSnapshot().slice() : W.slice()) as unknown as WordEntry[],
  );
  let deck = pool.filter(hasGoodExample).slice(0, SIZE);
  if (deck.length < 4) {
    deck = _shuf((W as unknown as WordEntry[]).filter((w) => getExample(w).length >= 15)).slice(
      0,
      SIZE,
    );
  }
  return deck;
}

type Question = {
  w: WordEntry;
  hiddenHtml: string;
  hint: string;
  options: string[];
  correct: string;
};

function buildQuestion(w: WordEntry): Question {
  const ex = getExample(w);
  const wordBase = w[0].split(' ')[0].toLowerCase();
  const hiddenHtml = ex.replace(new RegExp(wordBase + '\\w*', 'gi'), '___');

  const ipaRaw = w[4] ?? '';
  const hint = ipaRaw
    ? `${t('ctx.hintColon')} ${ipaRaw}`
    : `${t('ctx.firstLetterColon')} ${w[0][0].toUpperCase()}`;

  const correct = w[1];
  const wrongs: string[] = [];
  const used = new Set([w[0].toLowerCase()]);
  const pool = _shuf(W.slice() as unknown as WordEntry[]);
  for (const pw of pool) {
    if (wrongs.length >= NUM_OPTS - 1) break;
    if (used.has(pw[0].toLowerCase())) continue;
    used.add(pw[0].toLowerCase());
    wrongs.push(pw[1]);
  }
  const options = _shuf([correct, ...wrongs]);
  return { w, hiddenHtml, hint, options, correct };
}

function w(word: string, transl: string, example = '', ipa = ''): WordEntry {
  return [word, transl, example, '', ipa, ''] as unknown as WordEntry;
}

describe('context-logic', () => {
  describe('getExample()', () => {
    it('returns the EN example sentence or empty string', () => {
      expect(getExample(w('cat', 'кіт', 'The cat sleeps.'))).toBe('The cat sleeps.');
      expect(getExample(w('cat', 'кіт'))).toBe('');
    });
  });

  describe('hasGoodExample()', () => {
    it('returns true for examples of length >= 15 that mention the word', () => {
      expect(hasGoodExample(w('garden', 'сад', 'She works in the garden every day.'))).toBe(true);
    });

    it('returns false for short examples', () => {
      expect(hasGoodExample(w('cat', 'кіт', 'A cat.'))).toBe(false);
    });

    it('returns false when the example does not mention the word', () => {
      expect(hasGoodExample(w('garden', 'сад', 'This is a long sentence about nothing.'))).toBe(
        false,
      );
    });

    it('checks only the first word of multi-word entries', () => {
      expect(
        hasGoodExample(
          w('look forward', 'з нетерпінням чекати', 'I look forward to seeing you soon.'),
        ),
      ).toBe(true);
    });
  });

  describe('build()', () => {
    it('returns at most SIZE words, all with good examples when available', () => {
      setDeckState([]);
      const deck = build();
      expect(deck.length).toBeGreaterThan(0);
      expect(deck.length).toBeLessThanOrEqual(SIZE);
      deck.forEach((word) => expect(getExample(word).length).toBeGreaterThanOrEqual(15));
    });
  });

  describe('buildQuestion()', () => {
    it('hides occurrences of the word base in the example with "___"', () => {
      const word = w('garden', 'сад', 'She works in the garden every morning.');
      const q = buildQuestion(word);
      expect(q.hiddenHtml).not.toContain('garden');
      expect(q.hiddenHtml).toContain('___');
    });

    it('produces NUM_OPTS unique options including the correct translation', () => {
      const word = w('garden', 'сад', 'She works in the garden every morning.');
      const q = buildQuestion(word);
      expect(q.options.length).toBe(NUM_OPTS);
      expect(q.options).toContain(q.correct);
      expect(new Set(q.options).size).toBe(NUM_OPTS);
    });

    it('uses the IPA as hint when available, else the first letter', () => {
      const withIpa = buildQuestion(
        w('garden', 'сад', 'She works in the garden every morning.', '/ˈɡɑːrdn/'),
      );
      expect(withIpa.hint).toContain('/ˈɡɑːrdn/');

      const noIpa = buildQuestion(w('garden', 'сад', 'She works in the garden every morning.'));
      expect(noIpa.hint).toContain('G');
    });
  });
});
