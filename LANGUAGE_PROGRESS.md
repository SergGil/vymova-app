# Language Expansion Progress

Tracks the word-count status of every language dictionary in Vymova (`data/words_<code>.js`), against the canonical English source list in `data/words.js` (currently **10403** headwords).

Last updated: 2026-07-05 (v1.103.0)

## Rule: every dictionary entry must include transcription

Every `data/words_<code>.js` entry must be a **3-element** tuple — `["translation", "example", "transcription"]` — not just 2. This applies both when translating a new batch of words and when adding a brand-new language. Never ship translation-only batches without transcription going forward.

- **Latin-script languages** (az, bs, cs, da, fi, hr, hu, id, ms, no, pcm, ro, sk, sv, sw): transcription is optional/skippable since the word itself is already readable — strip language-specific diacritics only if needed (e.g. for URLs), otherwise leave as-is.
- **Cyrillic-script languages** (bg, kk, sr): transliterate via the official Latin-transliteration standard for each — bg: 2009 Streamlined System (official law), kk: 2021 Kazakhstan Latin standard, sr: Gaj's Latin alphabet.
- **Other scripts** (bn, fa, hi, hy, ka, ko, th): transliterate via the recognized romanization standard — bn: ISO 15919, fa: UN/DMG, hi: ISO 15919/IAST, hy: ISO 9985, ka: 2002 national system, ko: Revised Romanization of Korean, th: RTGS.
- Prefer a deterministic transliterator script (character-mapping table, or algorithmic like Hangul-block decomposition for Korean) over hand-typing transcriptions per word — these standards are rule-based, so scripting is faster and more consistent than manual entry.
- Wiring: a working transcription also needs `LOCAL_ENTRY_LOOKUP` in [card-front-text.tsx](js/features/card-front-text.tsx) to point at the language's `xxEntry` function (already defined in `mode-utils.ts` for all languages), plus a `TRANSCRIPTION_LEGEND` entry in [transcription-legend.ts](js/features/transcription-legend.ts) explaining any non-obvious symbols.
- **Retrofit status:** ko, bg, bn, vi — done (transliterator scripts written, all words backfilled, wired into `LOCAL_ENTRY_LOOKUP` + `TRANSCRIPTION_LEGEND`). az does not need it — it's in the "already Latin, skip" bucket, no action required.
  - `bg`: `translit-bg.js` — official 2009 Streamlined System, plain character table (no context-sensitive rules needed).
  - `ko`: `translit-ko.js` — Revised Romanization via Hangul-block Unicode decomposition, with nasalization/lateralization/simple-batchim liaison applied within each word.
  - `bn`: `translit-bn.js` — phonetic-leaning romanization (inherent vowel rendered "o", not ISO 15919's "a" — confirmed with project owner since "a" would mislead pronunciation of the most frequent Bengali vowel). Handles virama clusters, nukta letters (ড়/ঢ়/য়), and the অ্যা loanword digraph. Documented simplifications: word-final vowel elision not modeled, a few irregular conjuncts (জ্ঞ, ন্য) rendered by the generic rule instead of their lexical exception, স always "s".
  - `vi`: `translit-vi.js` — Quốc Ngữ -> IPA with tone-contour numbers, matching the convention already used by the original 100 legacy words. NFD-normalizes to separate tone marks from vowel-quality marks, then parses initial/nucleus/final via lookup tables. Assumes Northern (Hanoi) dialect mergers (d/gi/r -> z, s/x -> s, ch/tr -> tɕ).
  - All transliterator scripts are committed under [scripts/translit/](scripts/translit/) — reuse them for any future batch added to these languages, rather than re-deriving the rules.
- **Pending languages (not yet translated) — transliterator already written and tested against sample vocabulary, ready to apply once each language actually gets translated:**
  - `sr` (Serbian, Cyrillic) — `translit-sr.js`. Gaj's Latin alphabet: clean 1:1 bijective mapping (č/ć/đ/š/ž kept as the standard's own diacritics, not ASCII-simplified, since this is the language's actual parallel script, not an invented romanization). 9/9 test words pass.
  - `kk` (Kazakh, Cyrillic) — `translit-kk.js`. 2021 Kazakhstan Latin standard. ⚠️ **Confidence flag**: Kazakhstan revised this standard 4+ times (2017-2021); table is a best-effort reconstruction, not verified against the primary decree — re-check before treating as ground truth.
  - `hy` (Armenian) — `translit-hy.js`. Simplified learner-facing system (ISO 9985-adjacent but without its diacritics): aspirated stops get a trailing apostrophe (tʿ→t'), unaspirated get the plain digraph. Word-initial ե/ո → "ye"/"vo" handled positionally.
  - `ka` (Georgian) — `translit-ka.js`. 2002 national system. ⚠️ **Confidence flag**: reasonably but not fully confident in the aspirate-vs-ejective apostrophe assignment (თ/ფ/ქ plain vs. ტ/პ/კ/ყ/წ/ჭ apostrophe'd) — re-check before treating as ground truth.
  - `fa` (Persian, Perso-Arabic) — `translit-fa.js`. **Fundamental precondition, confirmed with project owner:** ordinary Persian omits short vowels entirely, so fa translations must be typed WITH Arabic diacritics (fatha/kasra/damma: َ ِ ُ) for this transliterator to work at all — unlike every other script here, this can't be retrofitted onto plain undiacritized text. Handles context-dependent و/ی (consonant vs. long vowel) and the word-final ه→"eh" convention. 8/8 test words pass.
  - `hi` (Hindi, Devanagari) — `translit-hi.js`. ISO 15919/IAST-style; structurally the same abugida architecture as `translit-bn.js` (virama, nukta, matras) but unlike Bengali, Hindi's inherent vowel really is "a" phonetically, so no inherent-vowel conflict to resolve. Known gap: word-final schwa deletion not modeled (कमल renders "kamala", spoken "kamal") — same accepted trade-off as Bengali.
  - `th` (Thai, RTGS) — `translit-th.js`. The hardest of all 11: Thai script marks neither syllable boundaries nor (per RTGS itself) tone. Required a real syllabification heuristic (`syllableOpen` flag tracking whether a bare consonant closes the prior syllable as a final vs. starts a new one) plus handling for leading vowels written before the consonant they follow (เมือง→"mueang") and the "ห นำ" silent-leading-ho rule. Validated against 34 common words. Known gaps: genuine multi-consonant clusters (ปร- in ประเทศ), compound-word syllable/word-boundary coincidences (ร้านอาหาร), and Sanskrit/Pali double-duty consonants (มหาวิทยาลัย) are not modeled — these require a dictionary lookup, not a spelling rule.

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
