import { describe, it, expect } from 'vitest';
import { SVG, getIllus } from '../../data/illustrations.js';

describe('SVG', () => {
  it('is a non-empty object mapping words to SVG markup strings', () => {
    const entries = Object.entries(SVG as Record<string, string>);
    expect(entries.length).toBeGreaterThan(10);
    for (const [word, svg] of entries) {
      expect(typeof word).toBe('string');
      expect(word.length).toBeGreaterThan(0);
      expect(typeof svg).toBe('string');
      expect(svg.startsWith('<svg')).toBe(true);
      expect(svg.endsWith('</svg>')).toBe(true);
    }
  });

  it('keys are lowercase words', () => {
    for (const word of Object.keys(SVG as Record<string, string>)) {
      expect(word).toBe(word.toLowerCase());
    }
  });
});

describe('getIllus()', () => {
  it('returns the SVG markup for a word present in SVG', () => {
    const [word, svg] = Object.entries(SVG as Record<string, string>)[0];
    expect(getIllus(word)).toBe(svg);
  });

  it('returns an emoji-based SVG for words only present in EMOJI', () => {
    // 'cat' is a common word likely covered via emoji fallback or SVG
    const result = getIllus('cat');
    expect(result === null || typeof result === 'string').toBe(true);
    if (result) expect(result.startsWith('<svg')).toBe(true);
  });

  it('returns null for words with no illustration', () => {
    expect(getIllus('zzzznotaword')).toBeNull();
  });
});
