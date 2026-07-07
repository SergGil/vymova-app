import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { entryFor, ensureLangTableLoaded } from '../js/features/mode-utils.ts';
import type { WordEntry } from '../src/types.js';

// Regression test for a real, confirmed gap found while documenting
// docs/adding-a-language.md: Vietnamese ('vi') was registered in the
// central mode-utils.ts registry, but 13 of the 15 per-mode files that keep
// their own separate `switch (lang) { case 'es': ... }` translation lookup
// never got a `case 'vi':` added — so picking Vietnamese as the learn/know
// language silently fell through to `default: return w[0]` (the English
// word) in Quiz, Pairs, Listening, Context, Fill-in-blank, Scramble,
// Spelling Bee, Story, Tempo, Write, Category Pairs, Daily Challenge, and
// Adaptive Quiz. Separately, js/app.ts never called
// setKnownWords('vi', loadKnownVi()) at startup, so "known" Vietnamese
// words didn't survive a page reload even though they were saved correctly.
//
// These are plain source-text checks (not behavioral) on purpose: the bug
// class is "a raw string switch/case that isn't covered by TypeScript's
// Record<TargetLang, ...> safety net" (see docs/adding-a-language.md,
// sections 1 and 7) — reading the source is the same verification method
// used to find the gaps, so it directly guards against the same class of
// regression reappearing for 'vi' or being copy-pasted into a future
// per-mode file for the next new language.

const root = join(__dirname, '..');
const read = (rel: string): string => readFileSync(join(root, rel), 'utf8');

describe('Vietnamese is wired into every per-mode translation switch', () => {
  // spelling-bee.tsx and write.tsx still keep their own per-mode switch, but
  // only for the example-sentence lookup (getLangSentence) — their word
  // lookup switch (getWordInLang) was deleted in favor of entryFor(), same
  // as the other 9 files below.
  const modeFilesWithOneSwitch = [
    'js/modes/spelling-bee.tsx',
    'js/modes/write.tsx',
    'js/features/duel-deck.ts',
    'js/features/learning-path.ts',
  ];

  it.each(modeFilesWithOneSwitch)('%s has a case %s: branch alongside case %s:', (file) => {
    const src = read(file);
    expect(src).toContain("case 'nl':");
    expect(src).toContain("case 'vi':");
  });

  it('fib.tsx has case vi: in both getLangWord and getLangSentence', () => {
    const src = read('js/modes/fib.tsx');
    const viCount = (src.match(/case 'vi':/g) ?? []).length;
    expect(viCount).toBe(2);
  });

  // reading.tsx and story.tsx never had their own per-mode switch. quiz.tsx,
  // tempo.tsx, adaptive-quiz.tsx, catpairs.tsx, context.tsx,
  // daily-challenge.tsx, lesson.tsx, listening.tsx, pairs.tsx, and
  // scramble.tsx had the same 86-line `getWordInLang` switch duplicated 12
  // times across the codebase — all 12 were deleted in favor of calling
  // mode-utils.ts's shared, type-safe `entryFor` (Record<TargetLang, ...>
  // -backed), which can't silently omit a language the way a copy-pasted
  // `switch` could.
  it('previously-duplicated word-lookup switches now import entryFor from mode-utils.ts', () => {
    for (const file of [
      'js/modes/reading.tsx',
      'js/modes/story.tsx',
      'js/modes/quiz.tsx',
      'js/modes/write.tsx',
      'js/modes/context.tsx',
      'js/modes/lesson.tsx',
      'js/modes/tempo.tsx',
      'js/modes/scramble.tsx',
      'js/modes/catpairs.tsx',
      'js/modes/spelling-bee.tsx',
      'js/modes/listening.tsx',
      'js/modes/pairs.tsx',
      'js/modes/adaptive-quiz.tsx',
      'js/modes/daily-challenge.tsx',
    ]) {
      expect(read(file), file).toMatch(/entryFor/);
      expect(read(file), file).not.toContain('function getWordInLang');
    }
  });

  it('quiz.tsx / tempo.tsx / adaptive-quiz.tsx still generate VI wrong-answer options directly (separate from entryFor)', () => {
    for (const file of ['js/modes/quiz.tsx', 'js/modes/tempo.tsx', 'js/modes/adaptive-quiz.tsx']) {
      expect(read(file), file).toContain("'VI'");
    }
  });

  it("entryFor resolves Vietnamese without falling through to the English word", async () => {
    await ensureLangTableLoaded('vi');
    const abandon: WordEntry = [
      'abandon',
      'покинути',
      'They had to abandon the ship.',
      'Вони мусили покинути корабель.',
    ];
    const { word } = entryFor('vi', abandon);
    expect(word).not.toBe('abandon');
  });
});

describe("app.ts hydrates Vietnamese known-words at startup", () => {
  it("imports loadKnownVi and calls setKnownWords('vi', loadKnownVi())", () => {
    const src = read('js/app.ts');
    expect(src).toContain('loadKnownVi');
    expect(src).toContain("setKnownWords('vi', loadKnownVi())");
  });
});
