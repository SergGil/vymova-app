import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { entryFor, ensureLangTableLoaded } from '../js/features/mode/mode-utils.ts';
import { ALL_TARGET_LANGS } from '../src/types.js';
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
  const modeFilesWithOneSwitch = ['js/features/duel/duel-deck.ts', 'js/features/learning-path/learning-path.ts'];

  it.each(modeFilesWithOneSwitch)('%s has a case %s: branch alongside case %s:', (file) => {
    const src = read(file);
    expect(src).toContain("case 'nl':");
    expect(src).toContain("case 'vi':");
  });

  // fib.tsx/spelling-bee.tsx/write.tsx's getLangWord/getLangSentence used to
  // each keep their own per-language switch (fib.tsx had both; spelling-bee/
  // write kept one for the example-sentence lookup after their word-lookup
  // switch was already deleted — see the "previously-duplicated" test
  // below). Consolidated onto entryFor() 2026-07-14 alongside the
  // transliteration-fallback TTS work (see LANGUAGE_PROGRESS.md) — same fix
  // as the other 9 files, closing the last of this bug class in these 3.
  it('fib.tsx / spelling-bee.tsx / write.tsx use entryFor() for getLangWord/getLangSentence, with no leftover per-language switch', () => {
    for (const file of ['js/modes/fib.tsx', 'js/modes/spelling-bee.tsx', 'js/modes/write.tsx']) {
      const src = read(file);
      expect(src, file).not.toMatch(/case 'vi':/);
      expect(src, file).toMatch(/entryFor/);
    }
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

  // Was: 'quiz.tsx / tempo.tsx / adaptive-quiz.tsx still generate VI
  // wrong-answer options directly (separate from entryFor)' — these three
  // files' wrong-*answer* generator (as opposed to the correct-answer one,
  // already on entryFor) was its own 86-line if/else chain that stopped at
  // 'VI', the 15th language registered. Every one of the 122 languages
  // registered after that fell through to a bare `w[0]`/`opt = w[0]`
  // default and got the raw English headword as a "wrong answer" — not
  // wrong in the *target* language, just not translated at all. Confirmed
  // (2026-07-14) and replaced with a direct entryFor() call, same as the
  // correct-answer side already used, so this class of gap can't reopen for
  // language #137 either — there's no per-language branch left to forget.
  it('quiz.tsx / tempo.tsx / adaptive-quiz.tsx generate wrong-answer options via entryFor(), with no leftover per-language branch', () => {
    for (const file of ['js/modes/quiz.tsx', 'js/modes/tempo.tsx', 'js/modes/adaptive-quiz.tsx']) {
      const src = read(file);
      // The old chain's tell: a per-language uppercase code compared against
      // backLang, immediately followed by a call to that language's own
      // xxEntry() helper — gone once the whole chain is replaced by a
      // single generic entryFor(backLang, w) call.
      expect(src, file).not.toMatch(/backLang === '[A-Z]{2,3}'/);
      expect(src, file).not.toMatch(/\b[a-z]{2}Entry\(/);
      expect(src, file).toMatch(/entryFor\(backLang/);
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

  // 'ko' (Korean) sits at index 18 of ALL_TARGET_LANGS — well past 'vi'
  // (index 13) and squarely inside the 122-language range the old
  // quiz/tempo/adaptive-quiz wrong-answer chain silently didn't cover. This
  // is the actual bug the fix above closes: not just "does entryFor know
  // about language N" (already covered by the Vietnamese case above), but
  // "do these three modes' *distractor* generators reach entryFor for a
  // language nowhere near the old chain's cutoff."
  it('entryFor resolves a language far past the old VI cutoff (Korean, index 18) without falling through to English', async () => {
    await ensureLangTableLoaded('ko');
    const abandon: WordEntry = [
      'abandon',
      'покинути',
      'They had to abandon the ship.',
      'Вони мусили покинути корабель.',
    ];
    const { word } = entryFor('ko', abandon);
    expect(word).not.toBe('');
    expect(word).not.toBe('abandon');
  });
});

describe('app.ts hydrates every TargetLang (incl. Vietnamese) known-words at startup', () => {
  // Was previously a hand-maintained list of 39 setKnownWords('xx', loadKnownXx())
  // calls in js/app.ts — the exact bug class that made 'vi' silently drop out
  // (loadKnownVi() existed, but nobody added the matching setKnownWords call).
  // Now app.ts loops over ALL_TARGET_LANGS with a single generic
  // loadKnownLang(lang), so a new language only needs registering in
  // src/types.ts (already type-checked elsewhere) to be hydrated correctly —
  // there is no separate per-language call left to forget.
  it('loops over ALL_TARGET_LANGS calling setKnownWords(lang, loadKnownLang(lang))', () => {
    const src = read('js/app.ts');
    expect(src).toContain('for (const lang of ALL_TARGET_LANGS)');
    expect(src).toContain('setKnownWords(lang, loadKnownLang(lang))');
  });

  it("'vi' is registered in ALL_TARGET_LANGS, so the loop above covers it", () => {
    expect(ALL_TARGET_LANGS).toContain('vi');
  });
});
