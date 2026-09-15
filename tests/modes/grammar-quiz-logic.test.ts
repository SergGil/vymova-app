import { describe, it, expect, afterEach, beforeAll, vi } from 'vitest';
import { pickPool, buildQuestion } from '../../js/modes/grammar-quiz.tsx';
import { ensureGrammarLoaded, getGrammarForLang } from '../../js/features/word-data/grammar-loader.ts';

// Every one of the 97 target languages now ships a full 70-rule grammar
// reference (the last one, Zulu, completed 2026-09-16), so there's no real
// language left with "too few distinct rules" to exercise pickPool()'s
// fallback-to-'en' branch against. Truncate 'af's real (large) dataset down
// to a single rule here instead of relying on a stub that no longer exists.
vi.mock('../../js/features/word-data/grammar-loader.ts', async (importOriginal) => {
  const actual =
    await importOriginal<typeof import('../../js/features/word-data/grammar-loader.ts')>();
  return {
    ...actual,
    getGrammarForLang: (lang: string) => {
      const real = actual.getGrammarForLang(lang);
      if (lang === 'af' && real && real.length > 0) {
        return [{ ...real[0], rules: real[0].rules.slice(0, 1) }];
      }
      return real;
    },
  };
});

describe('grammar-quiz-logic', () => {
  // pickPool() itself stays synchronous, reading whatever's already in
  // grammar-loader's cache (js/features/grammar-loader.ts) — every language
  // it might land on across the tests below needs to be preloaded first.
  beforeAll(async () => {
    await Promise.all(['en', 'es', 'ua', 'af'].map((lang) => ensureGrammarLoaded(lang)));
  });

  afterEach(() => {
    localStorage.removeItem('ew_learn_lang');
    localStorage.removeItem('ew_know_lang');
  });

  describe('pickPool()', () => {
    it('prefers the learn language when it has enough grammar examples', () => {
      localStorage.setItem('ew_learn_lang', 'es');
      localStorage.setItem('ew_know_lang', 'ua');
      const { lang, items } = pickPool();
      expect(lang).toBe('es');
      expect(items.length).toBeGreaterThan(0);
    });

    it('falls back to English when neither stored language code is valid', () => {
      localStorage.setItem('ew_learn_lang', 'not-a-real-code');
      localStorage.setItem('ew_know_lang', 'also-not-real');
      const { lang, items } = pickPool();
      // isLangCode() rejects the bogus values, so getLearnLang/getKnowLang
      // themselves already fall back to 'en'/'ua' before pickPool runs.
      expect(['en', 'ua']).toContain(lang);
      expect(items.length).toBeGreaterThan(0);
    });

    it('skips a learn language with too few distinct rules for a 4-option quiz, even if it has many example rows', () => {
      // The module mock above truncates 'af' to a single rule — plenty of
      // raw example rows within that one rule, but not enough distinct
      // answer options for a 4-choice quiz. 'ua' has no grammar data at
      // all, so a typical Ukrainian-speaking learner of Afrikaans must
      // land on 'en'.
      localStorage.setItem('ew_learn_lang', 'af');
      localStorage.setItem('ew_know_lang', 'ua');
      const { lang, items } = pickPool();
      expect(lang).toBe('en');
      expect(new Set(items.map((i) => i.ruleTitle)).size).toBeGreaterThanOrEqual(4);
    });

    it('every returned item has a non-empty sentence and translation', () => {
      localStorage.setItem('ew_learn_lang', 'en');
      localStorage.setItem('ew_know_lang', 'ua');
      const { items } = pickPool();
      for (const item of items) {
        expect(item.sentence.length).toBeGreaterThan(0);
        expect(item.translation.length).toBeGreaterThan(0);
        expect(item.ruleTitle.length).toBeGreaterThan(0);
      }
    });

    it('most items carry a ruleExplanation sourced from the rule\'s own intro section', () => {
      // Not a hard 100% guarantee (a rule could theoretically lack an intro
      // section), but every rule in GRAMMAR (en) has one in practice — this
      // is what powers the post-answer "why this rule" text.
      localStorage.setItem('ew_learn_lang', 'en');
      localStorage.setItem('ew_know_lang', 'ua');
      const { items } = pickPool();
      const withExplanation = items.filter((i) => i.ruleExplanation && i.ruleExplanation.length > 0);
      expect(withExplanation.length).toBe(items.length);
    });
  });

  describe('buildQuestion()', () => {
    // GRAMMAR (en) is the largest, richest pool — flatten it the same
    // way pickPool() does by going through the public API instead. Set up
    // in beforeAll, not directly in the describe body: the outer beforeAll
    // above (which preloads the grammar data pickPool() reads) only runs
    // before the suite's first `it`, i.e. *after* describe bodies finish
    // collecting — calling pickPool() here directly would run too early.
    let pool: ReturnType<typeof pickPool>['items'];
    beforeAll(() => {
      localStorage.setItem('ew_learn_lang', 'en');
      localStorage.setItem('ew_know_lang', 'ua');
      pool = pickPool().items;
      localStorage.removeItem('ew_learn_lang');
      localStorage.removeItem('ew_know_lang');
    });

    it('produces up to 4 unique options including the correct rule title', () => {
      const q = buildQuestion(pool[0], pool);
      expect(q.options.length).toBeGreaterThan(0);
      expect(q.options.length).toBeLessThanOrEqual(4);
      expect(q.options).toContain(q.correct);
      expect(new Set(q.options).size).toBe(q.options.length);
      expect(q.correct).toBe(pool[0].ruleTitle);
    });

    it("grammar-loader resolves 'en' and is non-empty (sanity check on the data source)", () => {
      expect(getGrammarForLang('en')).toBeTruthy();
      expect(getGrammarForLang('en')!.length).toBeGreaterThan(0);
    });
  });
});
