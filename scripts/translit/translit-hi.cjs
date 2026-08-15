// Hindi (Devanagari) -> Latin, ISO 15919/IAST-style romanization.
//
// Structurally similar to the Bengali transliterator (both are Brahmic
// abugidas: consonants carry an inherent vowel unless followed by a
// matra or virama) — but unlike Bengali, Hindi's inherent vowel really
// is /ə/ ("a"), so ISO 15919's script-mapping convention is already
// phonetically accurate here; no "o vs a" conflict to resolve.
//
// Known simplifications (documented, not fixed):
// - Word-final (and other) schwa deletion is NOT modeled: Hindi famously
//   drops the inherent vowel in many positions (कमल is spoken "kamal",
//   not "kamala"). Which syllables delete it depends on syllable weight
//   and position (Ohala's rule) — not implemented; this always renders
//   the inherent vowel, i.e. the spelling-based/citation-form reading.
// - Anusvara (ं) and chandrabindu (ँ) nasalization both approximated by
//   appending "n" rather than a proper nasal-vowel mark.
// - Nukta consonants for Perso-Arabic loan sounds (क़/ख़/ग़/ज़/फ़/ड़/ढ़) are
//   mapped to their nearest plain-Hindi consonant sound, not kept distinct.

const CONSONANTS = {
  क: 'k', ख: 'kh', ग: 'g', घ: 'gh', ङ: 'ng',
  च: 'ch', छ: 'chh', ज: 'j', झ: 'jh', ञ: 'n',
  ट: 't', ठ: 'th', ड: 'd', ढ: 'dh', ण: 'n',
  त: 't', थ: 'th', द: 'd', ध: 'dh', न: 'n',
  प: 'p', फ: 'ph', ब: 'b', भ: 'bh', म: 'm',
  य: 'y', र: 'r', ल: 'l', व: 'v', श: 'sh', ष: 'sh',
  स: 's', ह: 'h',
};

// Nukta (combining U+093C) consonants — always base+nukta, two codepoints.
const NUKTA_CONSONANTS = {
  क: 'q', ख: 'kh', ग: 'gh', ज: 'z', फ: 'f', ड: 'r', ढ: 'rh',
};

const VOWELS = {
  अ: 'a', आ: 'aa', इ: 'i', ई: 'ii', उ: 'u', ऊ: 'uu',
  ऋ: 'ri', ए: 'e', ऐ: 'ai', ओ: 'o', औ: 'au', ऑ: 'o',
};

const MATRAS = {
  'ा': 'aa',
  'ि': 'i',
  'ी': 'ii',
  'ु': 'u',
  'ू': 'uu',
  'ृ': 'ri',
  'े': 'e',
  'ै': 'ai',
  'ो': 'o',
  'ौ': 'au',
  'ॉ': 'o',
};

const VIRAMA = '्';
const CHANDRABINDU = 'ँ';
const ANUSVARA = 'ं';
const VISARGA = 'ः';
const NUKTA = '़';

function translitHi(word) {
  const chars = Array.from(word);
  let out = '';
  let i = 0;
  while (i < chars.length) {
    const ch = chars[i];

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
      out += consSound + 'a';
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
      out += 'n';
      i += 1;
      continue;
    }
    if (ch === VISARGA) {
      out += 'h';
      i += 1;
      continue;
    }
    if (ch === NUKTA) {
      i += 1;
      continue;
    }
    out += ch;
    i += 1;
  }
  return out;
}

module.exports = { translitHi };

if (require.main === module) {
  const tests = [
    ['नमस्ते', 'namaste'],
    ['धन्यवाद', 'dhanyavaad'],
    ['पानी', 'paanii'],
    ['किताब', 'kitaab'],
    ['भारत', 'bhaarata'],
    ['स्कूल', 'skuula'],
    ['हिन्दी', 'hindii'],
    ['बड़ा', 'bara'],
  ];
  for (const [t, ref] of tests) {
    const got = translitHi(t);
    console.log(t, '->', got, got === ref ? 'OK' : `REF ${ref}`);
  }
}
