import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { _shuf } from '../../js/core/srs.ts';
import { W } from '../../data/words.js';
import { decodeIpa } from '../../js/core/ui-helpers.ts';
import { t } from '../../js/features/i18n.ts';
import type { WordEntry } from '../../src/types.js';
import { getBest as realGetBest, setBest as realSetBest } from '../../js/modes/tempo.tsx';

// ── Re-declared pure helpers from js/modes/tempo.tsx ──
function getBest(sec: number): number {
  const key = `ew_tempo_best_${sec}`;
  if (localStorage.getItem(key) === null) {
    const legacy = localStorage.getItem(`tempo_best_${sec}`);
    if (legacy !== null) localStorage.setItem(key, legacy);
  }
  return parseInt(localStorage.getItem(key) ?? '0');
}
function setBest(sec: number, val: number): void {
  if (val > getBest(sec)) localStorage.setItem(`ew_tempo_best_${sec}`, String(val));
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
  const answer = isEnToUa ? w[1] : w[0];

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

    it('migrates a legacy unprefixed key (missed by cloud-sync) on first read', () => {
      localStorage.setItem('tempo_best_30', '18');
      expect(getBest(30)).toBe(18);
      expect(localStorage.getItem('ew_tempo_best_30')).toBe('18');
    });
  });

  // Regression: getBest()/setBest() used to read/write a single global
  // 'ew_tempo_best_<sec>' key regardless of learn language — a record set
  // once in an easy/familiar language became the (nearly unbeatable, or
  // trivially beaten) bar for every other language's runs too.
  describe('real getBest()/setBest() — per-learn-language scoping', () => {
    afterEach(() => {
      localStorage.removeItem('ew_learn_lang');
    });

    it('keeps separate records per target learn language', () => {
      localStorage.setItem('ew_learn_lang', 'es');
      realSetBest(30, 12);
      localStorage.setItem('ew_learn_lang', 'fr');
      realSetBest(30, 7);

      localStorage.setItem('ew_learn_lang', 'es');
      expect(realGetBest(30)).toBe(12);
      localStorage.setItem('ew_learn_lang', 'fr');
      expect(realGetBest(30)).toBe(7);
    });

    it('shares one bucket between the base en/ua pair (not a TargetLang)', () => {
      localStorage.removeItem('ew_learn_lang'); // defaults to 'en'
      realSetBest(30, 9);
      localStorage.setItem('ew_learn_lang', 'ua');
      expect(realGetBest(30)).toBe(9);
    });

    it('does not migrate the legacy unprefixed key into a per-language bucket', () => {
      localStorage.setItem('ew_learn_lang', 'es');
      localStorage.setItem('tempo_best_30', '18');
      expect(realGetBest(30)).toBe(0);
      expect(localStorage.getItem('ew_tempo_best_30_es')).toBeNull();
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
