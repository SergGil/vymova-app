// Bengali script -> Latin, a phonetic-leaning romanization based on ISO
// 15919/NLK conventions but with the inherent vowel rendered as "o" (its
// actual Bengali pronunciation, /ɔ/) instead of ISO 15919's script-mapping
// "a" — the strict standard would systematically mislead pronunciation of
// the single most frequent vowel sound in the language (বল is "bol", not
// "bal"). Confirmed with the project owner before implementing.
//
// Known simplifications (documented, not fixed):
// - Word-final (and mid-word standalone) inherent vowel is always rendered
//   ("o"), matching spelling/citation-form pronunciation. Real colloquial
//   Bengali frequently elides it (মানুষ is spoken "manush", not
//   "manusho") but which words elide it is lexically irregular, not
//   predictable from spelling alone, so this is left as the simpler,
//   consistent, dictionary-citation-style rendering.
// - Consonant clusters (virama-joined) are rendered as the plain
//   concatenation of each consonant's sound. This is correct for most
//   clusters but not for a handful of lexicalized irregular conjuncts
//   (e.g. জ্ঞ is pronounced roughly "g(y)a-", not "jno"; ন্য is often
//   pronounced as a geminated "nn", not "nj").
// - স is always "s", শ/ষ always "sh" — real pronunciation of স varies
//   between /s/ (Sanskrit clusters like স্ক) and /ʃ/ (most native words,
//   e.g. সে "she" is spoken "she" not "se"). No context-sensitive rule
//   is applied; this is a defensible simplification.
// - Chandrabindu (ঁ) nasalization is approximated by inserting a plain
//   "n" rather than a proper nasal-vowel diacritic.
// - অ্যা (vowel অ + virama + য + া) is a special digraph used to write
//   the /æ/ vowel in English loanwords (অ্যাসিড "acid", অ্যালার্ম
//   "alarm") — handled as a fixed unit below, rendered "a".

const CONSONANTS = {
  ক: 'k', খ: 'kh', গ: 'g', ঘ: 'gh', ঙ: 'ng',
  চ: 'ch', ছ: 'chh', জ: 'j', ঝ: 'jh', ঞ: 'n',
  ট: 't', ঠ: 'th', ড: 'd', ঢ: 'dh', ণ: 'n',
  ত: 't', থ: 'th', দ: 'd', ধ: 'dh', ন: 'n',
  প: 'p', ফ: 'ph', ব: 'b', ভ: 'bh', ম: 'm',
  য: 'j', র: 'r', ল: 'l', শ: 'sh', ষ: 'sh',
  স: 's', হ: 'h',
};

// Unicode has no precomposed codepoint for these — they are always the
// base consonant followed by a combining nukta (U+09BC), two codepoints.
const NUKTA_CONSONANTS = {
  ড: 'r', // ড় (d + nukta) — flapped r
  ঢ: 'rh', // ঢ় (dh + nukta)
  য: 'y', // য় (j-base + nukta) — glide y, distinct from plain য "j"
};

const VOWELS = {
  অ: 'o', আ: 'a', ই: 'i', ঈ: 'i', উ: 'u', ঊ: 'u',
  ঋ: 'ri', এ: 'e', ঐ: 'oi', ও: 'o', ঔ: 'ou',
};

const MATRAS = {
  'া': 'a',
  'ি': 'i',
  'ী': 'i',
  'ু': 'u',
  'ূ': 'u',
  'ৃ': 'ri',
  'ে': 'e',
  'ৈ': 'oi',
  'ো': 'o',
  'ৌ': 'ou',
};

const VIRAMA = '্';
const CHANDRABINDU = 'ঁ';
const ANUSVARA = 'ং';
const VISARGA = 'ঃ';
const KHANDA_TA = 'ৎ';
const NUKTA = '়';

function translitBn(word) {
  const chars = Array.from(word);
  let out = '';
  let i = 0;
  while (i < chars.length) {
    const ch = chars[i];
    if (ch === KHANDA_TA) {
      out += 't';
      i += 1;
      continue;
    }
    if (ch === 'অ' && chars[i + 1] === VIRAMA && chars[i + 2] === 'য') {
      out += 'a';
      i += 3;
      if (chars[i] === 'া') i += 1; // absorb the accompanying া matra
      continue;
    }

    let consSound;
    let consumed = 0;
    if (chars[i + 1] === NUKTA && NUKTA_CONSONANTS[ch] !== undefined) {
      consSound = NUKTA_CONSONANTS[ch];
      consumed = 2;
    } else if (CONSONANTS[ch] !== undefined) {
      consSound = CONSONANTS[ch];
      consumed = 1;
    }

    if (consSound !== undefined) {
      const next = chars[i + consumed];
      if (next !== undefined && MATRAS[next] !== undefined) {
        out += consSound + MATRAS[next];
        i += consumed + 1;
        continue;
      }
      if (next === VIRAMA) {
        out += consSound;
        i += consumed + 1;
        continue;
      }
      out += consSound + 'o';
      i += consumed;
      continue;
    }

    if (VOWELS[ch] !== undefined) {
      out += VOWELS[ch];
      i += 1;
      continue;
    }
    if (ch === CHANDRABINDU) {
      out += 'n';
      i += 1;
      continue;
    }
    if (ch === ANUSVARA) {
      out += 'ng';
      i += 1;
      continue;
    }
    if (ch === VISARGA) {
      out += 'h';
      i += 1;
      continue;
    }
    if (ch === NUKTA) {
      // stray nukta with no matching base consonant before it — drop
      i += 1;
      continue;
    }
    out += ch;
    i += 1;
  }
  return out;
}

module.exports = { translitBn };

if (require.main === module) {
  const tests = [
    ['বাংলা', 'bangla'],
    ['বল', 'bolo'],
    ['কলম', 'kolomo'],
    ['মানুষ', 'manusho'],
    ['ভালো', 'bhalo'],
    ['আমি', 'ami'],
    ['তুমি', 'tumi'],
    ['স্কুল', 'skulo'],
    ['যাওয়া', 'jaoya'],
    ['কয়েক', 'kojek'],
    ['বড়', 'boro'],
  ];
  for (const [t, ref] of tests) console.log(t, '->', translitBn(t), '(ref:', ref + ')');
}
