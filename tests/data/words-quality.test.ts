// Vymova — tests/data/words-quality.test.ts
// Semantic content-quality checks for data/words.js, distinct from
// words.test.ts's purely structural checks (shape, non-empty fields,
// unique headwords). Added after manually finding and fixing several
// real content bugs by inspection: a word tagged with the wrong part of
// speech (meaning/example were clearly noun usage, tagged as verb), and
// an example sentence that never used its own headword at all. A cheap
// heuristic run over the whole dataset then surfaced ~280 more instances
// of the first bug class (see git history around this test's introduction
// for the fix commit) — this test exists so that class of bug can't creep
// back in unnoticed.
import { describe, it, expect } from 'vitest';
import { W } from '../../data/words.js';
import type { WordEntry } from '../../src/types.js';

const entries = W as unknown as WordEntry[];

// Ukrainian verb infinitives reliably end in -ти/-тися/-тись. Checks
// whether the PRIMARY meaning (before the first "; secondary meaning")
// is entirely made of such infinitives.
function isVerbGloss(translation: string): boolean {
  const primary = translation.split(';')[0]!.trim();
  const parts = primary.split(',').map((p) => p.trim());
  if (!parts.length) return false;
  return parts.every((p) => /ти$|тися$|тись$/.test(p));
}

// Confirmed-correct exceptions: the gloss's primary segment happens to
// end in -ти/-тися/-тись but is genuinely a noun, not a verb infinitive
// (e.g. a plural/genitive noun form like "фрукти"/"кошти", or the
// мати="mother"/"to have" homonym) — spot-checked by hand when this test
// was introduced. Add to this list only after confirming by hand that
// the flagged word really is correctly tagged pos:'n' with a noun gloss.
const KNOWN_NOUN_EXCEPTIONS = new Set([
  'jobseeker', // "шукач роботи" — робот+и is a genitive noun, not a verb
  'godmother', // "хрещена мати" — мати here means "mother", not "to have"
  'mother', // "мати" — homonym for "mother" (noun), not "to have" (verb)
  'dairy', // "молочні продукти" — продукт+и is a plural noun
  'expenditure', // "витрати" — plural noun "expenses", not a verb
  'fruits', // "фрукти" — plural noun
  'godparent', // "хресний батько/мати" — мати homonym again
  'shorts', // "шорти" — plural noun (clothing)
  'spending', // "витрати" — same noun as expenditure
  'debate', // "дебати, обговорювати" — дебати is the plural noun "debates"
  'funds', // "кошти" — plural noun "funds", same pattern as expenditure
]);

describe('W content quality', () => {
  it('no noun-tagged (pos "n") entry has an all-verb-infinitive primary gloss', () => {
    const offenders: string[] = [];
    for (const e of entries) {
      const [word, translation, , , , pos] = e;
      if (pos !== 'n') continue;
      if (KNOWN_NOUN_EXCEPTIONS.has(word)) continue;
      if (isVerbGloss(translation)) {
        offenders.push(`${word} (${translation})`);
      }
    }
    expect(
      offenders,
      `Found ${offenders.length} noun-tagged entries with a verb-only gloss — ` +
        `either the pos should be 'v', the gloss needs a noun meaning, or (if ` +
        `this is a confirmed correct false positive) add it to KNOWN_NOUN_EXCEPTIONS:\n` +
        offenders.join('\n'),
    ).toEqual([]);
  });
});
