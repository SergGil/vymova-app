import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { state } from '../../src/state.ts';
import { W } from '../../data/words-data/words.js';
import type { WordEntry } from '../../src/types.js';
import { _todayWords } from '../../js/modes/daily-challenge.tsx';
import { setKnownWords, clearAllKnown } from '../../src/known-words-store.ts';

const DC_SIZE = 10;

// ── Re-declared pure helper from js/modes/daily-challenge.tsx ──
function todayWords(): WordEntry[] {
  const today = new Date().toISOString().slice(0, 10);
  let seed = today.split('').reduce((a, c) => a * 31 + c.charCodeAt(0), 0);
  let pool = (W as unknown as WordEntry[]).filter((w) => !state.known.has(w[0]));
  if (pool.length < DC_SIZE) pool = W.slice(0) as unknown as WordEntry[];
  const arr = pool.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    seed = (seed * 1664525 + 1013904223) & 0xffffffff;
    const j = Math.abs(seed) % (i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, DC_SIZE);
}

describe('daily-challenge-logic', () => {
  beforeEach(() => {
    state.known = new Set();
  });

  describe('todayWords()', () => {
    it('returns DC_SIZE unique words', () => {
      const words = todayWords();
      expect(words.length).toBe(DC_SIZE);
      const texts = words.map((w) => w[0]);
      expect(new Set(texts).size).toBe(DC_SIZE);
    });

    it('is deterministic for the same date and known set', () => {
      const a = todayWords();
      const b = todayWords();
      expect(a.map((w) => w[0])).toEqual(b.map((w) => w[0]));
    });

    it('excludes already-known words when enough unknown words remain', () => {
      const all = W as unknown as WordEntry[];
      // mark all but the first DC_SIZE+5 words as known
      all.slice(DC_SIZE + 5).forEach((w) => state.known.add(w[0]));
      const words = todayWords();
      words.forEach((w) => expect(state.known.has(w[0])).toBe(false));
    });

    it('falls back to the full word list when too few unknown words remain', () => {
      const all = W as unknown as WordEntry[];
      all.forEach((w) => state.known.add(w[0])); // mark everything known
      const words = todayWords();
      expect(words.length).toBe(DC_SIZE);
    });
  });

  // ── Real _todayWords() — language-aware known-set routing ──────
  // Regression: _todayWords() used to filter "already known" against a
  // hardcoded getKnownSnapshot('en'), so the exclusion was blind to progress
  // in every target language — a Spanish learner (say) kept getting
  // challenged on Spanish words they'd already mastered, since their real
  // progress lives in a separate per-language known-words bucket.
  describe('_todayWords() — real implementation', () => {
    afterEach(() => {
      localStorage.removeItem('ew_learn_lang');
      clearAllKnown();
    });

    it('excludes words known in the active target language, not just the base en/ua set', () => {
      localStorage.setItem('ew_learn_lang', 'es');
      const all = W as unknown as WordEntry[];
      const knownEs = new Set(all.slice(DC_SIZE + 5).map((w) => w[0]));
      setKnownWords('es', knownEs);

      const words = _todayWords();
      words.forEach((w) => expect(knownEs.has(w[0])).toBe(false));
    });

    it('does not exclude words only known in an unrelated target language', () => {
      localStorage.setItem('ew_learn_lang', 'es');
      const all = W as unknown as WordEntry[];
      // Mark everything known in French — should have zero effect on a
      // Spanish-learn-language run.
      setKnownWords('fr', new Set(all.map((w) => w[0])));

      const words = _todayWords();
      expect(words.length).toBe(DC_SIZE);
    });

    it('falls back to the base en/ua known set when learn language is unset (or en/ua)', () => {
      localStorage.removeItem('ew_learn_lang');
      const all = W as unknown as WordEntry[];
      const knownEn = new Set(all.slice(DC_SIZE + 5).map((w) => w[0]));
      setKnownWords('en', knownEn);

      const words = _todayWords();
      words.forEach((w) => expect(knownEn.has(w[0])).toBe(false));
    });
  });

  // ── Re-declared once/24h gate from js/modes/daily-challenge.tsx ──
  // (`isDoneToday()` there is `getGameData().dailyMissionDate === localToday()`)
  describe('once-per-24h gate', () => {
    function isDoneToday(dailyMissionDate: string | undefined, todayStr: string): boolean {
      return dailyMissionDate === todayStr;
    }

    it('is not done when dailyMissionDate is unset', () => {
      expect(isDoneToday(undefined, '2026-07-05')).toBe(false);
    });

    it("is not done when dailyMissionDate is a previous day", () => {
      expect(isDoneToday('2026-07-04', '2026-07-05')).toBe(false);
    });

    it('is done once dailyMissionDate matches today', () => {
      expect(isDoneToday('2026-07-05', '2026-07-05')).toBe(true);
    });
  });
});
