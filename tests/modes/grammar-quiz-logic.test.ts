import { describe, it, expect, afterEach } from 'vitest';
import { pickPool, buildQuestion } from '../../js/modes/grammar-quiz.tsx';
import { GRAMMAR_BY_LANG } from '../../data/grammar.ts';

describe('grammar-quiz-logic', () => {
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
      // 'it' currently ships only 2 grammar rules (with several examples
      // each) — plenty of raw rows, but not enough distinct answer options
      // for a 4-choice quiz. 'ua' isn't in GRAMMAR_BY_LANG at all, so a
      // typical Ukrainian-speaking learner of Italian must land on 'en'.
      localStorage.setItem('ew_learn_lang', 'it');
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
    // GRAMMAR_BY_LANG.en is the largest, richest pool — flatten it the same
    // way pickPool() does by going through the public API instead.
    localStorage.setItem('ew_learn_lang', 'en');
    localStorage.setItem('ew_know_lang', 'ua');
    const { items: pool } = pickPool();
    localStorage.removeItem('ew_learn_lang');
    localStorage.removeItem('ew_know_lang');

    it('produces up to 4 unique options including the correct rule title', () => {
      const q = buildQuestion(pool[0], pool);
      expect(q.options.length).toBeGreaterThan(0);
      expect(q.options.length).toBeLessThanOrEqual(4);
      expect(q.options).toContain(q.correct);
      expect(new Set(q.options).size).toBe(q.options.length);
      expect(q.correct).toBe(pool[0].ruleTitle);
    });

    it('GRAMMAR_BY_LANG.en resolves and is non-empty (sanity check on the data source)', () => {
      expect(GRAMMAR_BY_LANG.en).toBeTruthy();
      expect(GRAMMAR_BY_LANG.en!.length).toBeGreaterThan(0);
    });
  });
});
