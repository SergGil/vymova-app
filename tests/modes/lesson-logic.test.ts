import { describe, it, expect } from 'vitest';
import { _shuf } from '../../js/core/srs.ts';
import { W } from '../../data/words.js';
import type { WordEntry } from '../../src/types.js';

// ── Re-declared pure helpers from js/modes/lesson.tsx ──
function buildQuizOptions(w: WordEntry): string[] {
  const correct = w[0];
  const pool = _shuf(W.slice() as unknown as WordEntry[]);
  const wrongs: string[] = [];
  const used: Record<string, boolean> = { [w[0].toLowerCase()]: true };
  for (const pw of pool) {
    if (wrongs.length >= 3) break;
    const k = pw[0].toLowerCase();
    if (used[k]) continue;
    used[k] = true;
    wrongs.push(pw[0]);
  }
  return _shuf([correct, ...wrongs]);
}

function buildEnExHtml(w: WordEntry): string {
  const enExSrc = w[2] ?? '';
  if (enExSrc.includes('<b>')) return enExSrc;
  const ew = w[0].replace(/\s*\([^)]*\)/g, '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const parts = ew
    .split(/\s+/)
    .filter(Boolean)
    .map((p) => p + '\\w*');
  return enExSrc.replace(new RegExp('(' + parts.join('\\s+') + ')', 'i'), '<b>$1</b>');
}

function w(word: string, transl: string, example = ''): WordEntry {
  return [word, transl, example, '', '', ''] as unknown as WordEntry;
}

describe('lesson-logic', () => {
  describe('buildQuizOptions()', () => {
    it('returns 4 unique EN options including the correct word', () => {
      const word = (W as unknown as WordEntry[])[0];
      const options = buildQuizOptions(word);
      expect(options.length).toBe(4);
      expect(options).toContain(word[0]);
      expect(new Set(options).size).toBe(4);
    });
  });

  describe('buildEnExHtml()', () => {
    it('returns the example unchanged if already pre-tagged with <b>', () => {
      const word = w('cat', 'кіт', 'The <b>cat</b> sleeps.');
      expect(buildEnExHtml(word)).toBe('The <b>cat</b> sleeps.');
    });

    it('wraps the first occurrence of the word (or its inflection) in <b>', () => {
      const word = w('jump', 'стрибати', 'She likes to jump rope.');
      expect(buildEnExHtml(word)).toBe('She likes to <b>jump</b> rope.');
    });

    it('matches case-insensitively and inflected forms', () => {
      const word = w('jump', 'стрибати', 'He Jumped over the fence.');
      expect(buildEnExHtml(word)).toBe('He <b>Jumped</b> over the fence.');
    });

    it('strips parenthetical annotations from the word before matching', () => {
      const word = w('run (away)', 'втікати', 'They run away from danger.');
      expect(buildEnExHtml(word)).toBe('They <b>run</b> away from danger.');
    });

    it('handles multi-word phrases', () => {
      const word = w('look forward', 'з нетерпінням чекати', 'I look forward to the trip.');
      expect(buildEnExHtml(word)).toBe('I <b>look forward</b> to the trip.');
    });

    it('returns the example unchanged when there is no example', () => {
      const word = w('cat', 'кіт');
      expect(buildEnExHtml(word)).toBe('');
    });
  });
});
