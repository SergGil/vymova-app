import { describe, it, expect } from 'vitest';
import { getWordTrans } from '../../js/modes/reading.tsx';
import { ensureLangTableLoaded } from '../../js/features/mode-utils.ts';
import type { WordEntry } from '../../src/types.js';

const abandon: WordEntry = [
  'abandon',
  'покидати, залишати',
  'They had to abandon the car when the road flooded.',
  'Їм довелося залишити машину, коли дорога затопилась.',
  '/əˈbændən/',
  'v',
];

describe('getWordTrans()', () => {
  it('returns the Ukrainian translation for lang="ua"', () => {
    expect(getWordTrans(abandon, 'ua')).toBe('покидати, залишати');
  });

  it('returns the Vietnamese translation for lang="vi"', async () => {
    await ensureLangTableLoaded('vi');
    const trans = getWordTrans(abandon, 'vi');
    // Vietnamese only covers the first ~100 headwords, so just assert it
    // didn't fall through to the English default (the bug this covers) —
    // it should be the Vietnamese entry or an empty string, never 'abandon'.
    expect(trans).not.toBe('abandon');
  });

  it('falls back to the English headword for an unrecognized lang code', () => {
    expect(getWordTrans(abandon, 'xx')).toBe('abandon');
  });
});
