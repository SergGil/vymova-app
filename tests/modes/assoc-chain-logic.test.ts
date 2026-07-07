import { describe, it, expect, beforeEach } from 'vitest';
import {
  buildSymmetricDict,
  wordPoolFor,
  buildStep,
  getBest,
  setBest,
  type SynDict,
} from '../../js/modes/assoc-chain.tsx';

describe('assoc-chain-logic', () => {
  describe('buildSymmetricDict()', () => {
    it('adds a reverse edge for every forward edge, so the chain can continue past the first pick', () => {
      // SYNONYMS is stored as directed edges (headword -> its synonyms) —
      // most synonym words never appear as a dict key themselves. This is
      // the exact regression this test guards: without the reverse edges,
      // picking "big" from "large"'s options dead-ends immediately because
      // "big" has no entry of its own.
      const raw: SynDict = { large: [{ word: 'big' }, { word: 'huge' }] };
      const sym = buildSymmetricDict(raw);
      expect(sym.large.map((e) => e.word)).toEqual(expect.arrayContaining(['big', 'huge']));
      expect(sym.big.map((e) => e.word)).toContain('large');
      expect(sym.huge.map((e) => e.word)).toContain('large');
    });

    it('is idempotent for words that are already keys on both sides', () => {
      const raw: SynDict = {
        happy: [{ word: 'glad' }],
        glad: [{ word: 'happy' }],
      };
      const sym = buildSymmetricDict(raw);
      expect(sym.happy.map((e) => e.word)).toEqual(['glad']);
      expect(sym.glad.map((e) => e.word)).toEqual(['happy']);
    });

    it('lower-cases keys and de-duplicates reverse edges from multiple sources', () => {
      const raw: SynDict = {
        Fast: [{ word: 'quick' }],
        speedy: [{ word: 'quick' }],
      };
      const sym = buildSymmetricDict(raw);
      const quickEdges = sym.quick.map((e) => e.word.toLowerCase());
      expect(quickEdges).toEqual(expect.arrayContaining(['fast', 'speedy']));
      expect(new Set(quickEdges).size).toBe(quickEdges.length);
    });

    it('never adds a self-referencing edge', () => {
      const raw: SynDict = { odd: [{ word: 'odd' }, { word: 'strange' }] };
      const sym = buildSymmetricDict(raw);
      expect(sym.odd.map((e) => e.word.toLowerCase())).not.toContain('odd');
    });
  });

  describe('wordPoolFor()', () => {
    it('collects every key and every member word into one flat pool', () => {
      const dict: SynDict = {
        big: [{ word: 'large' }, { word: 'huge' }],
        happy: [{ word: 'glad' }],
      };
      const pool = wordPoolFor(dict);
      expect(pool).toEqual(expect.arrayContaining(['big', 'large', 'huge', 'happy', 'glad']));
      expect(pool.length).toBe(5);
    });
  });

  describe('buildStep()', () => {
    const dict: SynDict = {
      big: [{ word: 'large' }, { word: 'huge' }],
      large: [{ word: 'big' }],
      huge: [{ word: 'big' }],
      happy: [{ word: 'glad' }],
      glad: [{ word: 'happy' }],
    };
    const pool = wordPoolFor(dict);

    it('returns null when the current word has no synonyms in the dict', () => {
      expect(buildStep(dict, pool, 'nonexistent', new Set())).toBeNull();
    });

    it('picks a correct answer that is an actual synonym of the current word', () => {
      const step = buildStep(dict, pool, 'big', new Set(['big']));
      expect(step).not.toBeNull();
      expect(['large', 'huge']).toContain(step!.correct);
      expect(step!.options).toContain(step!.correct);
    });

    it('prefers unvisited synonyms over ones already used in this chain', () => {
      // "big" has two synonyms; once "large" is visited, the only unvisited
      // option left is "huge" — the step must not loop back to "large".
      const step = buildStep(dict, pool, 'big', new Set(['big', 'large']));
      expect(step!.correct).toBe('huge');
    });

    it('returns null (dead end) once every synonym has already been visited, rather than looping back', () => {
      // Regression guard: an earlier version fell back to reusing a visited
      // synonym here, which let short chains (e.g. big <-> large/huge) cycle
      // the same 2-3 words indefinitely instead of ending as documented.
      const step = buildStep(dict, pool, 'big', new Set(['big', 'large', 'huge']));
      expect(step).toBeNull();
    });

    it('never includes the current word itself among the wrong options', () => {
      const step = buildStep(dict, pool, 'happy', new Set(['happy']));
      expect(step!.options).not.toContain('happy');
    });
  });

  describe('getBest() / setBest()', () => {
    beforeEach(() => {
      localStorage.clear();
    });

    it('returns 0 when nothing stored for that language', () => {
      expect(getBest('es')).toBe(0);
    });

    it('stores and returns the best chain length', () => {
      setBest('es', 7);
      expect(getBest('es')).toBe(7);
    });

    it('only overwrites when the new chain is longer, and reports whether it was a new best', () => {
      expect(setBest('es', 7)).toBe(true);
      expect(setBest('es', 3)).toBe(false);
      expect(getBest('es')).toBe(7);
      expect(setBest('es', 10)).toBe(true);
      expect(getBest('es')).toBe(10);
    });

    it('keeps separate records per language', () => {
      setBest('es', 5);
      setBest('fr', 12);
      expect(getBest('es')).toBe(5);
      expect(getBest('fr')).toBe(12);
    });
  });
});
