// Persian (Farsi) -> Latin, loosely UN/DMG-style romanization.
//
// IMPORTANT PRECONDITION: ordinary Persian text omits short vowels
// entirely (only consonants + long vowels ا/و/ی are written) — a plain
// character-mapping transliterator cannot recover pronunciation from
// undiacritized text (unlike every other script handled in this project).
// This script REQUIRES the input to carry Arabic short-vowel diacritics
// (harakat: fatha َ, kasra ِ, damma ُ, shadda ّ, sukun ْ) on every syllable,
// same as Quranic/children's-book Persian. Confirmed with the project
// owner: fa translations must be typed WITH these diacritics so this
// transliterator can work — see LANGUAGE_PROGRESS.md.
//
// و and ی are context-dependent (consonant v/y vs. long vowel u/i):
// word-initial -> consonant; elsewhere -> long vowel, UNLESS immediately
// followed by a harakat (meaning it's acting as a consonant carrying that
// vowel). This is a simplification of the real rules (which also depend
// on syllable structure) but covers the large majority of cases.
//
// Known simplifications: ا always -> "a" (long/short distinction and
// hamza-seat variants أ/إ/ؤ/ئ not modeled); ع (ayn) -> apostrophe.

const CONSONANTS = {
  ب: 'b', پ: 'p', ت: 't', ث: 's', ج: 'j', چ: 'ch', ح: 'h', خ: 'kh',
  د: 'd', ذ: 'z', ر: 'r', ز: 'z', ژ: 'zh', س: 's', ش: 'sh', ص: 's',
  ض: 'z', ط: 't', ظ: 'z', ع: "'", غ: 'gh', ف: 'f', ق: 'q', ک: 'k',
  گ: 'g', ل: 'l', م: 'm', ن: 'n', ه: 'h', ء: "'",
};

const HARAKAT = {
  'َ': 'a', // fatha
  'ِ': 'e', // kasra
  'ُ': 'o', // damma
  'ً': 'an', // tanwin fath
};
const SHADDA = 'ّ';
const SUKUN = 'ْ';
const ZWNJ = '‌';

function translitFa(phrase) {
  const chars = Array.from(phrase);
  let out = '';
  let lastConsonant = '';
  let atWordStart = true;
  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i];
    if (/\s/.test(ch) || ch === ZWNJ) {
      out += ch === ZWNJ ? ' ' : ch;
      atWordStart = true;
      lastConsonant = '';
      continue;
    }
    if (HARAKAT[ch] !== undefined) {
      out += HARAKAT[ch];
      atWordStart = false;
      continue;
    }
    if (ch === SHADDA) {
      out += lastConsonant;
      atWordStart = false;
      continue;
    }
    if (ch === SUKUN) {
      atWordStart = false;
      continue;
    }
    if (ch === 'ا' || ch === 'آ') {
      out += 'a';
      lastConsonant = '';
      atWordStart = false;
      continue;
    }
    if (ch === 'و' || ch === 'ی') {
      const nextIsHarakat = HARAKAT[chars[i + 1]] !== undefined;
      if (atWordStart || nextIsHarakat) {
        const consonant = ch === 'و' ? 'v' : 'y';
        out += consonant;
        lastConsonant = consonant;
      } else {
        out += ch === 'و' ? 'u' : 'i';
        lastConsonant = '';
      }
      atWordStart = false;
      continue;
    }
    if (ch === 'ه') {
      const next = chars[i + 1];
      const isWordFinal = next === undefined || /\s/.test(next) || next === ZWNJ;
      if (isWordFinal) {
        out += 'eh';
        lastConsonant = 'h';
        atWordStart = false;
        continue;
      }
    }
    if (CONSONANTS[ch] !== undefined) {
      out += CONSONANTS[ch];
      lastConsonant = CONSONANTS[ch];
      atWordStart = false;
      continue;
    }
    out += ch;
    atWordStart = false;
  }
  return out;
}

module.exports = { translitFa };

if (require.main === module) {
  const tests = [
    ['سَلام', 'salam'],
    ['مَمنون', 'mamnun'],
    ['خانه', 'khaneh'],
    ['کِتاب', 'ketab'],
    ['وَقت', 'vaqt'],
    ['یِک', 'yek'],
    ['دوست', 'dust'],
    ['بَله', 'baleh'],
  ];
  for (const [t, ref] of tests) {
    const got = translitFa(t);
    console.log(t, '->', got, got === ref ? 'OK' : `REF ${ref}`);
  }
}
