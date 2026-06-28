// Vymova — js/core/word-index.ts
// Lazy O(1) word→position index over the immutable W word list (replaces
// state._wordIdx, which js/app.ts used to build once at boot). Mirrors the
// private lazy-build pattern already used by js/modes/story.tsx.
import { W } from '../../data/words.js';
import type { WordEntry } from '../../src/types.js';

let _wordIndex: Map<string, number> | null = null;

export function getWordIndex(): Map<string, number> {
  if (!_wordIndex) {
    _wordIndex = new Map();
    (W as unknown as WordEntry[]).forEach((w, i) => _wordIndex!.set(w[0], i));
  }
  return _wordIndex;
}
