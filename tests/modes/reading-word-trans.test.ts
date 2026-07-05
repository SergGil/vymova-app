import { describe, it, expect } from 'vitest';
import { entryFor, ensureLangTableLoaded } from '../../js/features/mode-utils.ts';
import type { WordEntry } from '../../src/types.js';

const abandon: WordEntry = [
  'abandon',
  'покидати, залишати',
  'They had to abandon the car when the road flooded.',
  'Їм довелося залишити машину, коли дорога затопилась.',
  '/əˈbændən/',
  'v',
];

describe('entryFor() — used by reading.tsx and story.tsx for per-language word+example lookup', () => {
  it('returns the Ukrainian translation and example for lang="ua"', () => {
    const { word, ex } = entryFor('ua', abandon);
    expect(word).toBe('покидати, залишати');
    expect(ex).toBe('Їм довелося залишити машину, коли дорога затопилась.');
  });

  it('returns the English word and example for lang="en"', () => {
    const { word, ex } = entryFor('en', abandon);
    expect(word).toBe('abandon');
    expect(ex).toBe('They had to abandon the car when the road flooded.');
  });

  it('returns the Vietnamese translation for lang="vi"', async () => {
    await ensureLangTableLoaded('vi');
    const { word } = entryFor('vi', abandon);
    // Vietnamese only covers the first ~100 headwords, so just assert it
    // didn't fall through to the English default (the bug this covers) —
    // it should be the Vietnamese entry or an empty string, never 'abandon'.
    expect(word).not.toBe('abandon');
  });
});
