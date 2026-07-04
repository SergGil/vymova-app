# Language Expansion Progress

Tracks the word-count status of every language dictionary in Vymova (`data/words_<code>.js`), against the canonical English source list in `data/words.js` (currently **10403** headwords).

Last updated: 2026-07-04 (v1.101.0)

## Rule: every dictionary entry must include transcription

Every `data/words_<code>.js` entry must be a **3-element** tuple — `["translation", "example", "transcription"]` — not just 2. This applies both when translating a new batch of words and when adding a brand-new language. Never ship translation-only batches without transcription going forward.

- **Latin-script languages** (az, bs, cs, da, fi, hr, hu, id, ms, no, pcm, ro, sk, sv, sw): transcription is optional/skippable since the word itself is already readable — strip language-specific diacritics only if needed (e.g. for URLs), otherwise leave as-is.
- **Cyrillic-script languages** (bg, kk, sr): transliterate via the official Latin-transliteration standard for each — bg: 2009 Streamlined System (official law), kk: 2021 Kazakhstan Latin standard, sr: Gaj's Latin alphabet.
- **Other scripts** (bn, fa, hi, hy, ka, ko, th): transliterate via the recognized romanization standard — bn: ISO 15919, fa: UN/DMG, hi: ISO 15919/IAST, hy: ISO 9985, ka: 2002 national system, ko: Revised Romanization of Korean, th: RTGS.
- Prefer a deterministic transliterator script (character-mapping table, or algorithmic like Hangul-block decomposition for Korean) over hand-typing transcriptions per word — these standards are rule-based, so scripting is faster and more consistent than manual entry.
- Wiring: a working transcription also needs `LOCAL_ENTRY_LOOKUP` in [card-front-text.tsx](js/features/card-front-text.tsx) to point at the language's `xxEntry` function (already defined in `mode-utils.ts` for all languages), plus a `TRANSCRIPTION_LEGEND` entry in [transcription-legend.ts](js/features/transcription-legend.ts) explaining any non-obvious symbols.
- **Retrofit status:** ko, bg, bn — done (transliterator scripts written, all 2110 words backfilled, wired into `LOCAL_ENTRY_LOOKUP` + `TRANSCRIPTION_LEGEND`). az still needs it. vi has transcription only for its original 100 legacy words — the ~1950 words added since are still missing it.
  - `bg`: `translit-bg.js` — official 2009 Streamlined System, plain character table (no context-sensitive rules needed).
  - `ko`: `translit-ko.js` — Revised Romanization via Hangul-block Unicode decomposition, with nasalization/lateralization/simple-batchim liaison applied within each word.
  - `bn`: `translit-bn.js` — phonetic-leaning romanization (inherent vowel rendered "o", not ISO 15919's "a" — confirmed with project owner since "a" would mislead pronunciation of the most frequent Bengali vowel). Handles virama clusters, nukta letters (ড়/ঢ়/য়), and the অ্যা loanword digraph. Documented simplifications: word-final vowel elision not modeled, a few irregular conjuncts (জ্ঞ, ন্য) rendered by the generic rule instead of their lexical exception, স always "s".
  - All three transliterator scripts are committed under [scripts/translit/](scripts/translit/) (`translit-bg.js`, `translit-ko.js`, `translit-bn.js`) — reuse them for any future batch added to these languages, rather than re-deriving the rules.

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

## Pending — still at the starter set (10 words), next up in the current expansion effort

bs (Bosnian), cs (Czech), da (Danish), fa (Persian), fi (Finnish), hi (Hindi), hr (Croatian), hu (Hungarian), hy (Armenian), id (Indonesian), ka (Georgian), kk (Kazakh), ms (Malay), no (Norwegian), pcm (Nigerian Pidgin), ro (Romanian), sk (Slovak), sr (Serbian), sv (Swedish), sw (Swahili), th (Thai)

**20 languages remaining** to bring from 10 → 2000+ words, following the same batch-by-batch process used for az/ko/vi/bg/bn (translate ~150-word slices of `words.js` at a time, verify, commit each batch, push only once the language crosses 2000+).
