// Vymova — js/features/reading/reading-passages.ts
// Assembles "Читання" reading passages directly from the dictionary's own
// example sentences (data/words-data/words.js + data/words-data/words_<code>.js), instead of a
// fixed set of hand-written English paragraphs. Scales automatically with
// each language's current translation coverage (see LANGUAGE_PROGRESS.md)
// and works for whichever language the user is currently learning, not
// just English — the caller is expected to pass a pool already filtered to
// the current learn/know pair (see `getWordsForPair` in mode-utils.ts).
import type { WordEntry } from '../../../src/types.js';
import { entryFor, type Code } from '../mode/mode-utils.ts';
import { boldHead } from '../../core/card-helpers.ts';

export type PassageRun = { kind: 'text'; text: string } | { kind: 'word'; text: string; cw: WordEntry };

export interface ReadingPassage {
  /** 1-based index of the first word (within the filtered pool) this passage draws from. */
  from: number;
  /** 1-based index of the last word this passage draws from. */
  to: number;
  /** First usable example sentence, for a picker-list preview. */
  preview: string;
  runs: PassageRun[];
}

const CHUNK_SIZE = 15;
const MIN_TRAILING_WORDS = 5;

/** Splits `boldHead`'s at-most-one-`<b>` output into plain-text/highlighted-word
 * runs. Falls back to a single plain-text run if the word wasn't found (and
 * so wasn't bolded) inside its own example sentence. */
function splitAtBold(bolded: string, cw: WordEntry): PassageRun[] {
  const m = bolded.match(/^([\s\S]*?)<b>([\s\S]*?)<\/b>([\s\S]*)$/);
  if (!m) return bolded ? [{ kind: 'text', text: bolded }] : [];
  const [, before, word, after] = m;
  const runs: PassageRun[] = [];
  if (before) runs.push({ kind: 'text', text: before });
  runs.push({ kind: 'word', text: word, cw });
  if (after) runs.push({ kind: 'text', text: after });
  return runs;
}

function buildPassage(
  chunk: readonly WordEntry[],
  learnLang: Code,
  from: number,
  to: number,
): ReadingPassage | null {
  const runs: PassageRun[] = [];
  let preview = '';
  let wordCount = 0;
  for (const cw of chunk) {
    const { word, ex } = entryFor(learnLang, cw);
    if (!word || !ex) continue;
    if (runs.length) runs.push({ kind: 'text', text: ' ' });
    runs.push(...splitAtBold(boldHead(ex, word), cw));
    if (!preview) preview = ex;
    wordCount++;
  }
  if (!wordCount) return null;
  return { from, to, preview, runs };
}

function mergePassages(a: ReadingPassage, b: ReadingPassage): ReadingPassage {
  return {
    from: a.from,
    to: b.to,
    preview: a.preview,
    runs: [...a.runs, { kind: 'text', text: ' ' }, ...b.runs],
  };
}

function wordRunCount(p: ReadingPassage): number {
  return p.runs.filter((r) => r.kind === 'word').length;
}

/** Builds sequential reading passages from `words` (already filtered to the
 * current learn/know language pair), one sentence per word in the learn
 * language, chunked into groups of `chunkSize`. A too-small trailing chunk
 * (fewer than `MIN_TRAILING_WORDS` usable sentences) is merged into the
 * previous passage instead of being emitted on its own. */
export function buildReadingPassages(
  words: readonly WordEntry[],
  learnLang: Code,
  chunkSize: number = CHUNK_SIZE,
): ReadingPassage[] {
  const passages: ReadingPassage[] = [];
  for (let i = 0; i < words.length; i += chunkSize) {
    const chunk = words.slice(i, i + chunkSize);
    const passage = buildPassage(chunk, learnLang, i + 1, i + chunk.length);
    if (passage) passages.push(passage);
  }
  if (passages.length > 1) {
    const last = passages[passages.length - 1];
    if (wordRunCount(last) < MIN_TRAILING_WORDS) {
      const prevIdx = passages.length - 2;
      passages[prevIdx] = mergePassages(passages[prevIdx], last);
      passages.pop();
    }
  }
  return passages;
}
