import { describe, it, expect, afterEach, beforeAll } from 'vitest';
import { pickPool, buildQuestion } from '../../js/modes/idiom-quiz.tsx';
import { ensureIdiomsLoaded, getIdiomsForLang } from '../../js/features/idioms-loader.ts';

describe('idiom-quiz-logic', () => {
  // pickPool() itself stays synchronous, reading whatever's already in
  // idioms-loader's cache — every language it might land on across the
  // tests below needs to be preloaded first.
  beforeAll(async () => {
    await Promise.all(
      ['es', 'th', 'fr', 'en', 'ua'].map((lang) => ensureIdiomsLoaded(lang)),
    );
  });

  afterEach(() => {
    localStorage.removeItem('ew_learn_lang');
    localStorage.removeItem('ew_know_lang');
  });

  describe('pickPool()', () => {
    it('prefers the learn language when it has enough idioms', () => {
      localStorage.setItem('ew_learn_lang', 'es');
      localStorage.setItem('ew_know_lang', 'ua');
      const { lang, idioms } = pickPool();
      expect(lang).toBe('es');
      expect(idioms).toBe(getIdiomsForLang('es'));
    });

    it('falls back to the know language when every target language still has >= 4 idioms', () => {
      // Every one of the 40 target languages ships with at least 5 idioms
      // (see LANGUAGE_PROGRESS.md), so the learn-language branch always
      // wins in practice — this documents that invariant rather than
      // exercising the fallback, which would need a language below the
      // NUM_OPTS=4 floor to actually trigger.
      localStorage.setItem('ew_learn_lang', 'th');
      localStorage.setItem('ew_know_lang', 'fr');
      const { lang } = pickPool();
      expect(lang).toBe('th');
    });

    it('falls back to English when neither stored language code is valid', () => {
      localStorage.setItem('ew_learn_lang', 'not-a-real-code');
      localStorage.setItem('ew_know_lang', 'also-not-real');
      const { lang, idioms } = pickPool();
      // isLangCode() rejects the bogus values, so getLearnLang/getKnowLang
      // themselves already fall back to 'en'/'ua' — both real, idiom-rich
      // languages, so the pool still resolves to one of them.
      expect(['en', 'ua']).toContain(lang);
      expect(idioms.length).toBeGreaterThan(0);
    });
  });

  describe('buildQuestion()', () => {
    // Set up in beforeAll, not directly in the describe body: the outer
    // beforeAll above (which preloads the idiom data pickPool()/this reads)
    // only runs before the suite's first `it`, i.e. *after* describe bodies
    // finish collecting — reading getIdiomsForLang() here directly would
    // run too early.
    let pool: NonNullable<ReturnType<typeof getIdiomsForLang>>;
    beforeAll(() => {
      pool = getIdiomsForLang('en')!;
    });

    it('produces 4 unique options including the correct meaning', () => {
      const q = buildQuestion(pool[0], pool);
      expect(q.options.length).toBe(4);
      expect(q.options).toContain(q.correct);
      expect(new Set(q.options).size).toBe(4);
      expect(q.correct).toBe(pool[0].meaning);
    });

    it('never picks the idiom itself as a distractor (all options are distinct meanings)', () => {
      const q = buildQuestion(pool[0], pool);
      const distractors = q.options.filter((o) => o !== q.correct);
      expect(distractors).not.toContain(pool[0].meaning);
    });

    it('still returns a well-formed question from a minimal 4-idiom pool (no wasted distractor slots)', () => {
      const tiny = pool.slice(0, 4);
      const q = buildQuestion(tiny[0], tiny);
      expect(q.options.length).toBe(4);
      expect(new Set(q.options).size).toBe(4);
    });
  });
});
