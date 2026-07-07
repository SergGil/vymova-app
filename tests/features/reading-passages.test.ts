import { describe, it, expect } from 'vitest';
import { buildReadingPassages } from '../../js/features/reading/reading-passages.ts';
import type { WordEntry } from '../../src/types.js';

function makeWord(n: number, ex = true): WordEntry {
  return [
    `word${n}`,
    `слово${n}`,
    ex ? `This sentence contains word${n} in it.` : '',
    ex ? `Це речення містить слово${n}.` : '',
    '/wɜːrd/',
    'n',
  ];
}

describe('buildReadingPassages()', () => {
  it('chunks words sequentially into passages of the given size', () => {
    const words = Array.from({ length: 30 }, (_, i) => makeWord(i + 1));
    const passages = buildReadingPassages(words, 'en', 15);
    expect(passages).toHaveLength(2);
    expect(passages[0].from).toBe(1);
    expect(passages[0].to).toBe(15);
    expect(passages[1].from).toBe(16);
    expect(passages[1].to).toBe(30);
  });

  it('highlights the exact headword as a "word" run inside its own sentence', () => {
    const words = [makeWord(1)];
    const [passage] = buildReadingPassages(words, 'en', 15);
    const wordRuns = passage.runs.filter((r) => r.kind === 'word');
    expect(wordRuns).toHaveLength(1);
    expect(wordRuns[0].kind === 'word' && wordRuns[0].text).toBe('word1');
    expect(wordRuns[0].kind === 'word' && wordRuns[0].cw[0]).toBe('word1');
  });

  it('sets the preview to the first usable example sentence', () => {
    const words = [makeWord(1), makeWord(2)];
    const [passage] = buildReadingPassages(words, 'en', 15);
    expect(passage.preview).toBe('This sentence contains word1 in it.');
  });

  it('skips words with an empty example sentence in the learn language', () => {
    const words = [makeWord(1, false), makeWord(2)];
    const [passage] = buildReadingPassages(words, 'en', 15);
    const wordRuns = passage.runs.filter((r) => r.kind === 'word');
    expect(wordRuns).toHaveLength(1);
    expect(wordRuns[0].kind === 'word' && wordRuns[0].cw[0]).toBe('word2');
  });

  it('merges a too-small trailing passage into the previous one instead of emitting it alone', () => {
    // 15 + 2 = 17 words -> a full first chunk plus a 2-word trailing chunk,
    // well below the 5-word merge threshold.
    const words = Array.from({ length: 17 }, (_, i) => makeWord(i + 1));
    const passages = buildReadingPassages(words, 'en', 15);
    expect(passages).toHaveLength(1);
    expect(passages[0].from).toBe(1);
    expect(passages[0].to).toBe(17);
  });

  it('returns an empty array for an empty word pool', () => {
    expect(buildReadingPassages([], 'en', 15)).toEqual([]);
  });

  it('returns no passage for a chunk where every word lacks an example', () => {
    const words = [makeWord(1, false), makeWord(2, false)];
    expect(buildReadingPassages(words, 'en', 15)).toEqual([]);
  });
});
