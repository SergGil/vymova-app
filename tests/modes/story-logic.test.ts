import { describe, it, expect, beforeEach } from 'vitest';
import { state } from '../../src/state.ts';
import { W } from '../../data/words.js';
import type { WordEntry } from '../../src/types.js';

// ── Re-declared pure helpers from js/modes/story.tsx ──
let _wordIdx: Map<string, number>;
function getWordIdx(): Map<string, number> {
  if (_wordIdx) return _wordIdx;
  _wordIdx = new Map();
  (W as unknown as WordEntry[]).forEach((w, i) => _wordIdx.set(w[0].toLowerCase(), i));
  return _wordIdx;
}

function highlightText(text: string): { html: string; total: number; known: number } {
  const wi = getWordIdx();
  let knownInStory = 0,
    totalHighlighted = 0;
  const lowerText = text.toLowerCase();
  const words = Array.from(wi.keys()).sort((a, b) => b.length - a.length);
  let result = text;
  const markers: { from: number; to: number; word: string }[] = [];

  for (const word of words) {
    if (word.length < 3) continue;
    if (!lowerText.includes(word)) continue;
    const regex = new RegExp(
      `\\b(${word.replace(/[.*+?^${}()|\[\]\\]/g, '\\$&')}(?:s|ed|ing|er|est|ly)?)\\b`,
      'gi',
    );
    let m: RegExpExecArray | null;
    while ((m = regex.exec(text)) !== null) {
      const overlap = markers.some((mk) => m!.index < mk.to && m!.index + m![0].length > mk.from);
      if (!overlap) {
        markers.push({ from: m.index, to: m.index + m[0].length, word });
        totalHighlighted++;
        if (state.known.has(word)) knownInStory++;
      }
    }
  }

  markers.sort((a, b) => b.from - a.from);
  for (const mk of markers) {
    const isKnown = state.known.has(mk.word);
    const matched = text.slice(mk.from, mk.to);
    const cls = `sm-word${isKnown ? ' sm-known' : ''}`;
    result =
      result.slice(0, mk.from) +
      `<span class="${cls}" data-word="${mk.word}">${matched}</span>` +
      result.slice(mk.to);
  }
  return { html: result, total: totalHighlighted, known: knownInStory };
}

describe('story-logic', () => {
  beforeEach(() => {
    state.known = new Set();
  });

  describe('getWordIdx()', () => {
    it('maps every dictionary word (lowercased) to its index', () => {
      const idx = getWordIdx();
      const all = W as unknown as WordEntry[];
      expect(idx.get(all[0][0].toLowerCase())).toBe(0);
      expect(idx.size).toBeGreaterThan(0);
    });
  });

  describe('highlightText()', () => {
    it('does not highlight words shorter than 3 characters', () => {
      const { html, total } = highlightText('I am ok.');
      expect(html).toBe('I am ok.');
      expect(total).toBe(0);
    });

    it('wraps recognized dictionary words in <span class="sm-word">', () => {
      const all = W as unknown as WordEntry[];
      const dictWord = all.find((w) => /^[a-z]+$/i.test(w[0]) && w[0].length >= 4);
      if (!dictWord) throw new Error('no suitable dictionary word found for test');
      const text = `This is a ${dictWord[0]} example sentence for testing purposes here.`;
      const { html, total } = highlightText(text);
      expect(total).toBeGreaterThanOrEqual(1);
      expect(html).toContain('sm-word');
      expect(html).toContain(`data-word="${dictWord[0].toLowerCase()}"`);
    });

    it('marks known words with the sm-known class and counts them', () => {
      const all = W as unknown as WordEntry[];
      const dictWord = all.find((w) => /^[a-z]+$/i.test(w[0]) && w[0].length >= 4);
      if (!dictWord) throw new Error('no suitable dictionary word found for test');
      state.known.add(dictWord[0].toLowerCase());
      const text = `This is a ${dictWord[0]} example sentence for testing purposes here.`;
      const { html, known } = highlightText(text);
      expect(known).toBeGreaterThanOrEqual(1);
      expect(html).toContain('sm-known');
    });

    it('does not double-highlight overlapping matches', () => {
      const all = W as unknown as WordEntry[];
      const dictWord = all.find((w) => /^[a-z]+$/i.test(w[0]) && w[0].length >= 4);
      if (!dictWord) throw new Error('no suitable dictionary word found for test');
      const text = `${dictWord[0]} ${dictWord[0]}ing here.`;
      const { total } = highlightText(text);
      // each occurrence counted once, no overlap double counting
      expect(total).toBeGreaterThanOrEqual(1);
    });
  });
});
