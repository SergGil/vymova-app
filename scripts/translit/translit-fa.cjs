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
// followed by a harakat or shadda (meaning it's acting as a consonant
// carrying that vowel), or followed by ا/آ after a vowel (بَیان -> bayan,
// تاوان -> tavan, دیوار -> divar). و before ا is a consonant even after a
// bare consonant (اَموال -> amval, خواب -> khvab); ی there stays a vowel
// (دنیا -> donia), since ziyad/donya can't be told apart without harakat.
// Word-initial bare ای/او are the long vowels i/u (این -> in, او -> u).
// This is a simplification of the real rules (which also depend on
// syllable structure) but covers the large majority of cases.
//
// ا carrying its own harakat (اَ/اِ/اُ, word-initial vowel seat) is silent —
// the harakat alone is the vowel (اَز -> az, not "aaz"); likewise the ا that
// carries tanwin (اَصلاً -> aslan). Hamza on a seat (أ/ؤ/ئ) is a glottal stop
// like bare ء -> apostrophe (تَأثیر -> ta'sir).
//
// Word-final ه (before a space, ZWNJ, punctuation or the end) after a bare
// consonant is the silent-h vowel -> "eh" (خانه -> khaneh); after a harakat,
// sukun or long vowel it is a real h (بِه -> beh, پَناه -> panah, کوه -> kuh).
//
// Shadda doubles the consonant before the vowel, whichever order the two
// marks are typed in (Unicode canonical order puts damma/kasra/fatha before
// shadda: تَکَبُّر -> takabbor, not "takabobr").
//
// ی after a bare consonant that carries shadda or a word-final ezafe kasra
// is long i + y (مُدیریَّت -> modiriyyat, کِشاوَرزیِ -> keshavarziye).
// An unmarked خو reads kha before ا (خواب -> khab, the و is silent) and
// kho before د/ش/ر (خود -> khod, خوش -> khosh, خوردَن -> khordan).
//
// Known simplifications: bare ا always -> "a" (long/short distinction not
// modeled); ع (ayn) -> apostrophe.

const CONSONANTS = {
  ب: 'b', پ: 'p', ت: 't', ث: 's', ج: 'j', چ: 'ch', ح: 'h', خ: 'kh',
  د: 'd', ذ: 'z', ر: 'r', ز: 'z', ژ: 'zh', س: 's', ش: 'sh', ص: 's',
  ض: 'z', ط: 't', ظ: 'z', ع: "'", غ: 'gh', ف: 'f', ق: 'q', ک: 'k',
  گ: 'g', ل: 'l', م: 'm', ن: 'n', ه: 'h', ء: "'",
  أ: "'", ؤ: "'", ئ: "'",
};

// Arabic-script punctuation -> its Latin counterpart.
const PUNCTUATION = { '،': ',', '؛': ';', '؟': '?' };

const HARAKAT = {
  'َ': 'a', // fatha
  'ِ': 'e', // kasra
  'ُ': 'o', // damma
  'ً': 'an', // tanwin fath
};
const SHADDA = 'ّ';
const SUKUN = 'ْ';
const ZWNJ = '‌';
const TANWIN = 'ً';
const LETTER = /[ء-غف-يٱ-ۓ]/;

function translitFa(phrase) {
  const chars = Array.from(phrase);
  // Move shadda in front of a vowel mark typed (or normalized) before it.
  for (let i = 0; i + 1 < chars.length; i++) {
    if (chars[i + 1] === SHADDA && (HARAKAT[chars[i]] !== undefined || chars[i] === SUKUN)) {
      chars[i + 1] = chars[i];
      chars[i] = SHADDA;
    }
  }
  const isMark = (c) => HARAKAT[c] !== undefined || c === SHADDA || c === SUKUN;
  const isFinalHeh = (j) =>
    chars[j] === 'ه' && !isMark(chars[j + 1]) && !(chars[j + 1] && LETTER.test(chars[j + 1]));
  let out = '';
  let lastConsonant = '';
  let atWordStart = true;
  let afterVowel = false; // the previous sound written was a vowel
  let afterLongIU = false; // ...and it was a long ی/و vowel
  let lettersInWord = 0;
  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i];
    const next = chars[i + 1];
    if (LETTER.test(ch)) lettersInWord++;
    const prevLongIU = afterLongIU;
    afterLongIU = false;
    if (/\s/.test(ch) || ch === ZWNJ) {
      out += ch === ZWNJ ? ' ' : ch;
      atWordStart = true;
      lastConsonant = '';
      afterVowel = false;
      lettersInWord = 0;
      continue;
    }
    if (HARAKAT[ch] !== undefined) {
      out += HARAKAT[ch];
      atWordStart = false;
      afterVowel = ch !== TANWIN;
      continue;
    }
    if (ch === SHADDA) {
      out += lastConsonant;
      atWordStart = false;
      continue;
    }
    if (ch === SUKUN) {
      atWordStart = false;
      afterVowel = false;
      continue;
    }
    if (PUNCTUATION[ch] !== undefined) {
      out += PUNCTUATION[ch];
      afterVowel = false;
      continue;
    }
    if (ch === 'ا' && (isMark(next) || chars[i - 1] === TANWIN)) {
      lastConsonant = '';
      atWordStart = false;
      continue;
    }
    if (ch === 'إ') {
      out += 'e';
      lastConsonant = '';
      atWordStart = false;
      afterVowel = true;
      continue;
    }
    if (ch === 'ا' && atWordStart && (next === 'ی' || next === 'و') && !isMark(chars[i + 2])) {
      out += next === 'ی' ? 'i' : 'u';
      i++;
      lastConsonant = '';
      atWordStart = false;
      afterVowel = true;
      continue;
    }
    if (ch === 'ا' || ch === 'آ') {
      out += 'a';
      lastConsonant = '';
      atWordStart = false;
      afterVowel = true;
      continue;
    }
    // Unmarked خو: silent و before ا (خواب -> khab, دَرخواست -> darkhast),
    // short o before د/ش/ر (خود, خوش, خوردَن, بَرخورد) except خوشه (khusheh).
    // The standalone numeral دو is "do" (two), not "du".
    if (ch === 'د' && atWordStart && next === 'و' && !(chars[i + 2] && (LETTER.test(chars[i + 2]) || isMark(chars[i + 2])))) {
      out += 'do';
      lastConsonant = '';
      afterVowel = true;
      atWordStart = false;
      i++;
      continue;
    }
    const silentVav = chars[i + 2] === 'ا' || (chars[i + 2] === 'ی' && chars[i + 3] === 'ش'); // خواب, خویش
    if (ch === 'خ' && next === 'و' && chars[i + 2] && !isMark(chars[i + 2]) &&
        (silentVav || ('دشر'.includes(chars[i + 2]) && chars[i + 3] !== 'ه'))) {
      const silent = silentVav;
      out += silent ? 'kh' : 'kho';
      lastConsonant = silent ? 'kh' : '';
      afterVowel = !silent;
      atWordStart = false;
      lettersInWord++;
      i++;
      continue;
    }
    // The linking "-o-" of ZWNJ compounds: کَسب‌وکار -> kasb o kar.
    if (ch === 'و' && chars[i - 1] === ZWNJ && next && LETTER.test(next) && !'اوی'.includes(next)) {
      out += 'o ';
      lastConsonant = '';
      lettersInWord = 0;
      continue;
    }
    // ی straight after a bare (or doubled) consonant that carries shadda or
    // a word-final ezafe kasra is long i + y: مُدیریَّت -> modiriyyat,
    // اَقَلّیَّت -> aqalliyyat, کِشاوَرزیِ -> keshavarziye (not "ryy"/"zye").
    const prevCh = chars[i - 1];
    const afterBareConsonant = prevCh === SHADDA || (prevCh && LETTER.test(prevCh) && lastConsonant !== '');
    const ezafeKasra = next === 'ِ' && !(chars[i + 2] && (LETTER.test(chars[i + 2]) || isMark(chars[i + 2])));
    if (ch === 'ی' && !atWordStart && afterBareConsonant && (next === SHADDA || next === 'َ' || ezafeKasra)) {
      out += 'iy';
      lastConsonant = 'y';
      atWordStart = false;
      afterVowel = false;
      continue;
    }
    if (ch === 'و' || ch === 'ی') {
      const beforeAlef = next === 'ا' || next === 'آ';
      // و before ا after a bare consonant: a consonant (اَموال, خواب), but
      // not straight after a word's first consonant, where Persian allows
      // no cluster (an unvocalized توانا stays "tuana", not "tvana").
      const vBeforeAlef = ch === 'و' && beforeAlef && (lettersInWord > 2 || lastConsonant === 'kh');
      // و before a word-final ه is -ve far more often than -uh (جِلوه,
      // عِلاوه, میوه); type the -uh words with sukun on ه (کوهْ, گُروهْ).
      const vBeforeHeh = ch === 'و' && !atWordStart && isFinalHeh(i + 1);
      // و between a short vowel or ا and a long ی (نِویسَنده, دَوید, آویز).
      const vBeforeYeh = ch === 'و' && next === 'ی' && afterVowel && !prevLongIU;
      // Word-final و after ا (گاو -> gav); و/ی after a sukun opens a
      // syllable, so it is a consonant (تَصْویر -> tasvir).
      const vAfterAlefFinal = ch === 'و' && chars[i - 1] === 'ا' && !(next && (LETTER.test(next) || isMark(next)));
      const afterSukun = chars[i - 1] === SUKUN;
      // Doubled وو is v + long u (طاووس -> tavus, داوود -> davud).
      const vBeforeVav = ch === 'و' && next === 'و';
      // ی after a bare ا/آ is the y of a diphthong, never an a-i hiatus
      // (پایین -> payin, آشنایی -> ashnayi, چای -> chay).
      const yAfterAlef = ch === 'ی' && (chars[i - 1] === 'ا' || chars[i - 1] === 'آ');
      // ...and ی between a long vowel and another ی is y too (دَستشویی -> dastshuyi).
      const yBeforeYeh = ch === 'ی' && next === 'ی' && afterVowel;
      if (
        atWordStart || isMark(next) || (beforeAlef && afterVowel) ||
        vBeforeAlef || vBeforeHeh || vBeforeYeh || vAfterAlefFinal || afterSukun || vBeforeVav || yAfterAlef || yBeforeYeh
      ) {
        const consonant = ch === 'و' ? 'v' : 'y';
        out += consonant;
        lastConsonant = consonant;
        afterVowel = false;
      } else {
        out += ch === 'و' ? 'u' : 'i';
        lastConsonant = '';
        afterVowel = true;
        afterLongIU = true;
      }
      atWordStart = false;
      continue;
    }
    if (!atWordStart && isFinalHeh(i)) {
      // Word-final: silent-h vowel after a bare consonant or a long ی
      // (توصیه -> tusieh), a real h after a short vowel, sukun or ا.
      const prev = chars[i - 1];
      out += (afterVowel && !prevLongIU) || prev === SUKUN ? 'h' : 'eh';
      lastConsonant = 'h';
      atWordStart = false;
      afterVowel = false;
      continue;
    }
    if (CONSONANTS[ch] !== undefined) {
      out += CONSONANTS[ch];
      lastConsonant = CONSONANTS[ch];
      atWordStart = false;
      afterVowel = false;
      continue;
    }
    // Anything else (brackets, dashes, digits...) passes through; a letter
    // after it starts a new word: (یاد) -> (yad).
    out += ch;
    atWordStart = !LETTER.test(ch);
    lastConsonant = '';
    afterVowel = false;
    lettersInWord = 0;
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
    ['اَز', 'az'],
    ['اِمتِناع', "emtena'"],
    ['تَأثیر', "ta'sir"],
    ['تَبرِئه', "tabre'eh"],
    ['بِه', 'beh'],
    ['مَجموعه، رَدیف', "majmu'eh, radif"],
    ['رَسیدَن بِه (نَتیجه)', 'rasidan beh (natijeh)'],
    ['تَکَبُّر', 'takabbor'],
    ['مُحَوَّل', 'mohavval'],
    ['اِدِّعا', "edde'a"],
    ['این', 'in'],
    ['او', 'u'],
    ['بَیان', 'bayan'],
    ['سَوار', 'savar'],
    ['اَموال', 'amval'],
    ['تاوان', 'tavan'],
    ['دیوار', 'divar'],
    ['پَناه', 'panah'],
    ['پَناه‌جو', 'panah ju'],
    ['کوهْ', 'kuh'],
    ['گُروهْ', 'goruh'],
    ['جِلوه', 'jelveh'],
    ['بِه عِلاوه', "beh 'elaveh"],
    ['توصیه', 'tusieh'],
    ['توانا', 'tuana'],
    ['خواب', 'khab'],
    ['دَرخواست', 'darkhast'],
    ['خود', 'khod'],
    ['خوشحال', 'khoshhal'],
    ['خوردَن', 'khordan'],
    ['خوشه', 'khusheh'],
    ['خوب', 'khub'],
    ['کِشاوَرزیِ اُرگانیک', 'keshavarziye organik'],
    ['اَقَلّیَّت', 'aqalliyyat'],
    ['هُویَّت', 'hoviyyat'],
    ['طاووس', 'tavus'],
    ['تَقْویَت', 'taqviyat'],
    ['خویشاوَند', 'khishavand'],
    ['دَستشویی', 'dastshuyi'],
    ['هَر دو', 'har do'],
    ['دوست', 'dust'],
    ['پایین', 'payin'],
    ['آشنایی', 'ashnayi'],
    ['چای', 'chay'],
    ['آیا', 'aya'],
    ['هَسته‌ای', 'hasteh i'],
    ['پایِ', 'paye'],
    ['رویِ', 'ruye'],
    ['نِویسَنده', 'nevisandeh'],
    ['آویز', 'aviz'],
    ['گوشتِ گاو', 'gushte gav'],
    ['تَصْویر', 'tasvir'],
    ['کَسب‌وکار', 'kasb o kar'],
    ['رَفت‌وآمَد', 'raft o amad'],
    ['گُفت‌وگو', 'goft o gu'],
    ['بی‌وَفا', 'bi vafa'],
    ['گِرامی داشتَن (یاد)', 'gerami dashtan (yad)'],
    ['وَجْه', 'vajh'],
    ['اَصلاً', 'aslan'],
    ['مَزیَّت', 'maziyyat'],
    ['مُدیریَّت', 'modiriyyat'],
    ['بَقیّه', 'baqiyyeh'],
    ['جُزئیّات', "joz'iyyat"],
    ['سَیّاره', 'sayyareh'],
    ['سَرمایِه', 'sarmayeh'],
  ];
  for (const [t, ref] of tests) {
    const got = translitFa(t);
    console.log(t, '->', got, got === ref ? 'OK' : `REF ${ref}`);
  }
}
