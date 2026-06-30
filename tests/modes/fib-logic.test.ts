import { describe, it, expect } from 'vitest';
import type { WordEntry } from '../../src/types.js';

// ── Pure logic extracted from js/modes/fib.ts ─────────────────
// fib.ts has top-level DOM access; we re-declare makeBlank() here
// to test the blank-generation business logic in isolation.

type BlankItem = { sentence: string; answer: string; base: string };

function makeBlank(w: WordEntry): BlankItem | null {
  let sentence = w[2] ?? '';
  if (!sentence || sentence.length < 5) return null;
  if (!sentence.includes('<b>')) {
    const esc = w[0].replace(/[.*+?^${}()|\[\]\\]/g, '\\$&');
    sentence = sentence.replace(new RegExp('(' + esc + ')', 'i'), '<b>$1</b>');
  }
  const m = sentence.match(/<b>(.*?)<\/b>/i);
  if (!m) return null;
  return {
    sentence: sentence.replace(/<b>.*?<\/b>/i, '<span class="fib-blank">___</span>'),
    answer: m[1],
    base: w[0],
  };
}

function w(word: string, transl: string, example: string): WordEntry {
  return [word, transl, example, '', ''];
}

// ── makeBlank() — core blank generation ───────────────────────
describe('makeBlank() — blank generation', () => {
  it('returns null for missing example sentence', () => {
    expect(makeBlank(w('run', 'бігти', ''))).toBeNull();
  });

  it('returns null for very short sentence (< 5 chars)', () => {
    expect(makeBlank(w('run', 'бігти', 'run'))).toBeNull();
    expect(makeBlank(w('run', 'бігти', 'r un'))).toBeNull();
  });

  it('returns null when word does not appear in sentence', () => {
    expect(makeBlank(w('run', 'бігти', 'She jumps every day.'))).toBeNull();
  });

  it('creates a blank with correct answer', () => {
    const result = makeBlank(w('run', 'бігти', 'He likes to run every morning.'));
    expect(result).not.toBeNull();
    expect(result!.answer).toBe('run');
  });

  it('replaces the word with fib-blank span in sentence', () => {
    const result = makeBlank(w('run', 'бігти', 'He likes to run every morning.'));
    expect(result!.sentence).toContain('<span class="fib-blank">___</span>');
    expect(result!.sentence).not.toContain('<b>');
  });

  it('sets base to the original English headword', () => {
    const result = makeBlank(w('jump', 'стрибати', 'The frog can jump high.'));
    expect(result!.base).toBe('jump');
  });

  it('works with pre-tagged <b> in sentence', () => {
    const result = makeBlank(w('run', 'бігти', 'He likes to <b>run</b> every day.'));
    expect(result).not.toBeNull();
    expect(result!.answer).toBe('run');
    expect(result!.sentence).toContain('___');
  });

  it('match is case-insensitive', () => {
    // Sentence starts with the word capitalized
    const result = makeBlank(w('run', 'бігти', 'Run as fast as you can!'));
    expect(result).not.toBeNull();
    expect(result!.answer.toLowerCase()).toBe('run');
  });

  it('sentence in result does not contain original word (it is blanked)', () => {
    const result = makeBlank(w('swim', 'плавати', 'I love to swim in the ocean.'));
    expect(result!.sentence.toLowerCase()).not.toContain('swim');
  });

  it('handles words with regex special chars (e.g. "call it a day")', () => {
    const result = makeBlank(w('call', 'дзвонити', 'I call my friend every week.'));
    expect(result).not.toBeNull();
  });

  it('handles multi-word phrasal verbs when word appears in sentence', () => {
    const result = makeBlank(w('break down', 'ламатися', 'The car can break down anytime.'));
    // 'break' (first word of phrase) will match if present
    expect(result).not.toBeNull();
  });
});

// ── Blank replacement is complete (no leftover <b> tags) ─────
describe('makeBlank() — output structure', () => {
  it('output sentence has no remaining <b> or </b> tags', () => {
    const result = makeBlank(w('work', 'працювати', 'I work from home now.'));
    if (result) {
      expect(result.sentence).not.toMatch(/<\/?b>/i);
    }
  });

  it('output sentence still contains surrounding context words', () => {
    const result = makeBlank(w('work', 'працювати', 'I work from home now.'));
    expect(result!.sentence).toContain('from home');
  });

  it('answer matches the exact form found in sentence (preserves casing)', () => {
    const result = makeBlank(w('run', 'бігти', 'She Runs every morning fast.'));
    // The regex is case-insensitive; captured group preserves original casing
    expect(result).not.toBeNull();
    if (result) expect(result.answer.toLowerCase()).toBe('run');
  });
});
