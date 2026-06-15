import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { _shuf } from '../../js/core/srs.ts';
import { W } from '../../data/words.js';
import { decodeIpa } from '../../js/core/ui-helpers.ts';
import { t } from '../../js/features/i18n.ts';
import type { WordEntry } from '../../src/types.js';

// ── Re-declared pure helpers from js/modes/tempo.tsx ──
function getBest(sec: number): number {
  return parseInt(localStorage.getItem(`tempo_best_${sec}`) ?? '0');
}
function setBest(sec: number, val: number): void {
  if (val > getBest(sec)) localStorage.setItem(`tempo_best_${sec}`, String(val));
}

type Question = {
  dir: string;
  word: string;
  ipa: string;
  isEnToUa: boolean;
  options: string[];
  answer: string;
  base: string;
  selected: string | null;
};

function buildQuestion(deck: WordEntry[], idx: number): Question {
  const w = deck[idx];
  const isEnToUa = Math.random() < 0.5;
  const question = isEnToUa ? w[0] : w[1];
  const answer   = isEnToUa ? w[1] : w[0];

  const pool = _shuf(W.slice() as unknown as WordEntry[]);
  const wrongs: string[] = [];
  const used = new Set([w[0].toLowerCase()]);
  for (const pw of pool) {
    if (wrongs.length >= 3) break;
    if (used.has(pw[0].toLowerCase())) continue;
    used.add(pw[0].toLowerCase());
    const opt = isEnToUa ? pw[1] : pw[0];
    if (opt === answer) continue;
    wrongs.push(opt);
  }
  return {
    dir: isEnToUa ? t('quiz.enToUa') : t('quiz.uaToEn'),
    word: question,
    ipa: isEnToUa ? decodeIpa(w[2] ?? '') : '',
    isEnToUa,
    options: _shuf([answer, ...wrongs]),
    answer,
    base: w[0],
    selected: null,
  };
}

describe('tempo-logic', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('getBest() / setBest()', () => {
    it('returns 0 when nothing stored', () => {
      expect(getBest(30)).toBe(0);
    });

    it('stores the first score', () => {
      setBest(30, 12);
      expect(getBest(30)).toBe(12);
    });

    it('only overwrites when the new value is higher', () => {
      setBest(30, 12);
      setBest(30, 5);
      expect(getBest(30)).toBe(12);

      setBest(30, 20);
      expect(getBest(30)).toBe(20);
    });

    it('keeps separate records per duration', () => {
      setBest(30, 10);
      setBest(60, 25);
      expect(getBest(30)).toBe(10);
      expect(getBest(60)).toBe(25);
    });
  });

  describe('buildQuestion()', () => {
    const deck = W.slice(0, 5) as unknown as WordEntry[];

    afterEach(() => {
      vi.restoreAllMocks();
    });

    it('produces 4 unique options including the answer', () => {
      const q = buildQuestion(deck, 0);
      expect(q.options.length).toBe(4);
      expect(q.options).toContain(q.answer);
      expect(new Set(q.options).size).toBe(4);
    });

    it('uses word[0]/word[1] as question/answer depending on direction', () => {
      vi.spyOn(Math, 'random').mockReturnValue(0); // < 0.5 -> EN to UA
      const q = buildQuestion(deck, 0);
      expect(q.isEnToUa).toBe(true);
      expect(q.word).toBe(deck[0][0]);
      expect(q.answer).toBe(deck[0][1]);
      expect(q.base).toBe(deck[0][0]);
    });

    it('shows the UA word as the question when going UA to EN', () => {
      vi.spyOn(Math, 'random').mockReturnValue(0.9); // >= 0.5 -> UA to EN
      const q = buildQuestion(deck, 0);
      expect(q.isEnToUa).toBe(false);
      expect(q.word).toBe(deck[0][1]);
      expect(q.answer).toBe(deck[0][0]);
      expect(q.ipa).toBe('');
    });

    it('starts with selected = null', () => {
      const q = buildQuestion(deck, 0);
      expect(q.selected).toBeNull();
    });
  });
});
