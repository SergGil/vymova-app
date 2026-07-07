# Language Expansion Progress

Tracks the word-count status of every language dictionary in Vymova (`data/words_<code>.js`), against the canonical English source list in `data/words.js` (currently **10403** headwords).

Last updated: 2026-07-07 (v1.158.0)

## Rule: every dictionary entry must include transcription

Every `data/words_<code>.js` entry must be a **3-element** tuple — `["translation", "example", "transcription"]` — not just 2. This applies both when translating a new batch of words and when adding a brand-new language. Never ship translation-only batches without transcription going forward.

- **Latin-script languages** (az, bs, cs, da, fi, hr, hu, id, ms, no, pcm, ro, sk, sv, sw): transcription is optional/skippable since the word itself is already readable — strip language-specific diacritics only if needed (e.g. for URLs), otherwise leave as-is.
- **Cyrillic-script languages** (bg, kk, sr): transliterate via the official Latin-transliteration standard for each — bg: 2009 Streamlined System (official law), kk: 2021 Kazakhstan Latin standard, sr: Gaj's Latin alphabet.
- **Other scripts** (bn, fa, hi, hy, ka, ko, th): transliterate via the recognized romanization standard — bn: ISO 15919, fa: UN/DMG, hi: ISO 15919/IAST, hy: ISO 9985, ka: 2002 national system, ko: Revised Romanization of Korean, th: RTGS.
- Prefer a deterministic transliterator script (character-mapping table, or algorithmic like Hangul-block decomposition for Korean) over hand-typing transcriptions per word — these standards are rule-based, so scripting is faster and more consistent than manual entry.
- Wiring: a working transcription also needs `LOCAL_ENTRY_LOOKUP` in [card-front-text.tsx](js/features/card-front-text.tsx) to point at the language's `xxEntry` function (already defined in `mode-utils.ts` for all languages), plus a `TRANSCRIPTION_LEGEND` entry in [transcription-legend.ts](js/features/transcription-legend.ts) explaining any non-obvious symbols.
- **Retrofit status:** ko, bg, bn, vi — done (transliterator scripts written, all words backfilled, wired into `LOCAL_ENTRY_LOOKUP` + `TRANSCRIPTION_LEGEND`). az does not need it — it's in the "already Latin, skip" bucket, no action required.
  - `bg`: `translit-bg.cjs` — official 2009 Streamlined System, plain character table (no context-sensitive rules needed).
  - `ko`: `translit-ko.cjs` — Revised Romanization via Hangul-block Unicode decomposition, with nasalization/lateralization/simple-batchim liaison applied within each word.
  - `bn`: `translit-bn.cjs` — phonetic-leaning romanization (inherent vowel rendered "o", not ISO 15919's "a" — confirmed with project owner since "a" would mislead pronunciation of the most frequent Bengali vowel). Handles virama clusters, nukta letters (ড়/ঢ়/য়), and the অ্যা loanword digraph. Documented simplifications: word-final vowel elision not modeled, a few irregular conjuncts (জ্ঞ, ন্য) rendered by the generic rule instead of their lexical exception, স always "s".
  - `vi`: `translit-vi.cjs` — Quốc Ngữ -> IPA with tone-contour numbers, matching the convention already used by the original 100 legacy words. NFD-normalizes to separate tone marks from vowel-quality marks, then parses initial/nucleus/final via lookup tables. Assumes Northern (Hanoi) dialect mergers (d/gi/r -> z, s/x -> s, ch/tr -> tɕ).
  - All transliterator scripts are committed under [scripts/translit/](scripts/translit/) — reuse them for any future batch added to these languages, rather than re-deriving the rules.
- **sr, kk, hy, ka, fa, hi, th — done (batch 1, 160 words each, transcription generated and wired from the start, not retrofitted):**
  - `sr` (Serbian, Cyrillic) — `translit-sr.cjs`. Gaj's Latin alphabet: clean 1:1 bijective mapping (č/ć/đ/š/ž kept as the standard's own diacritics).
  - `kk` (Kazakh, Cyrillic) — `translit-kk.cjs`. 2021 Kazakhstan Latin standard. ⚠️ **Confidence flag**: Kazakhstan revised this standard 4+ times (2017-2021); table is a best-effort reconstruction, not verified against the primary decree.
  - `hy` (Armenian) — `translit-hy.cjs`. Simplified learner-facing system: aspirated stops get a trailing apostrophe (tʿ→t'), unaspirated get the plain digraph.
  - `ka` (Georgian) — `translit-ka.cjs`. 2002 national system. ⚠️ **Confidence flag**: aspirate-vs-ejective apostrophe assignment (თ/ფ/ქ plain vs. ტ/პ/კ/ყ/წ/ჭ apostrophe'd) not independently verified.
  - `fa` (Persian, Perso-Arabic) — `translit-fa.cjs`. Translations typed WITH Arabic diacritics (fatha/kasra/damma) per the fundamental precondition confirmed earlier — this actually worked in batch 1, though needed 2 rounds of diacritic-placement fixes on words like کردن (kardan) and a missing آ (alef madda) mapping.
  - `hi` (Hindi, Devanagari) — `translit-hi.cjs`. Same abugida architecture as Bengali; no inherent-vowel conflict since Hindi's "a" is phonetically accurate. Fixed during batch 3 (2026-07-05): candra-O vowel (ऑ/ॉ, used in English loanwords like डॉक्टर, कॉलेज, अपॉइंटमेंट) was missing from both the VOWELS and MATRAS tables, causing raw Devanagari to leak into the transcription untransliterated — added `ऑ`/`ॉ` → `"o"` to both tables.
  - `th` (Thai, RTGS) — `translit-th.cjs`. Hardest of all 11. Batch 1's real 150-word translation surfaced 3 more bugs beyond the original 34-word test suite (เ-ิ vowel pattern, missing ฤ letter, bare-consonant+ะ not in the vowel table) plus added genuine 2-consonant cluster recognition (ปร-, กล- etc., so ประเทศ → "prathet" not "poratheto"). All fixed; residual errors are compound-word/word-boundary and double-duty-consonant cases, already documented as out of scope without a word dictionary.
  - All transliterator scripts are committed under [scripts/translit/](scripts/translit/) — reuse them for any future batch added to these languages.

## Fully expanded to the full source list (10403 words)

| Code | Language   | Words |
|------|------------|-------|
| de   | German     | 10403 |
| es   | Spanish    | 10403 |
| fr   | French     | 10403 |

## Complete — first wave (2000-word target, done in an earlier phase)

| Code | Language   | Words |
|------|------------|-------|
| ar   | Arabic     | 2000  |
| el   | Greek      | 2000  |
| he   | Hebrew     | 2000  |
| hr   | Croatian   | 2000  |
| it   | Italian    | 2000  |
| ja   | Japanese   | 2000  |
| nl   | Dutch      | 2000  |
| pl   | Polish     | 2000  |
| pt   | Portuguese | 2000  |
| tr   | Turkish    | 2000  |
| zh   | Chinese    | 2000  |

## Complete — current expansion effort (2000+ target)

| Code | Language           | Words |
|------|--------------------|-------|
| az   | Azerbaijani        | 2010  |
| ko   | Korean             | 2110  |
| vi   | Vietnamese         | 2050  |
| bg   | Bulgarian          | 2110  |
| bn   | Bengali            | 2110  |
| hi   | Hindi              | 2000  |

## In progress — batch 2 done (310 words), target 500+ (not 2000+)

| Code | Language           | Words |
|------|--------------------|-------|
| bs   | Bosnian            | 310   |
| cs   | Czech              | 310   |
| da   | Danish             | 310   |
| fa   | Persian            | 310   |
| fi   | Finnish            | 310   |
| hu   | Hungarian          | 310   |
| hy   | Armenian           | 310   |
| id   | Indonesian         | 310   |
| ka   | Georgian           | 310   |
| kk   | Kazakh             | 310   |
| ms   | Malay              | 310   |
| no   | Norwegian          | 310   |
| pcm  | Nigerian Pidgin    | 310   |
| ro   | Romanian           | 310   |
| sk   | Slovak             | 310   |
| sr   | Serbian            | 310   |
| sv   | Swedish            | 310   |
| sw   | Swahili            | 310   |
| th   | Thai               | 310   |

**Correction (2026-07-07):** `hr` (Croatian) was previously listed here at 160, but the actual file already has 2000 words (2-element format, no transcription — an earlier-phase expansion that predates this batch-1/2 system and was never logged). Moved to the "first wave" table below; excluded from the 500+ push.

**Started with batch 1 (index 10-159, 160 words), now through batch 2 (index 160-309, 150 more words, 310 total).** `hi` (Hindi) continued further (batches 2-13, index 160-1999) and reached 2000 words — see complete table above. These 19 remain at 310, need one more batch (~190 words, index 310-499) each to cross the 500-word target set for this round (not the earlier 2000+ target used for hi/az/ko/etc).
