// Korean Hangul -> Latin, Revised Romanization of Korean (RR, official ROK
// standard since 2000). Decomposes each precomposed Hangul syllable block
// (U+AC00..U+D7A3) into initial/medial/final jamo via the standard Unicode
// arithmetic, maps each part through the official RR tables, and applies
// the most common pronunciation-driven changes RR requires within a word
// (nasalization, ㄴ/ㄹ lateralization, simple-batchim liaison before a
// vowel-initial syllable).
//
// Known simplifications (documented, not fixed — diminishing returns for a
// learner-facing transcription rather than official signage):
// - Liaison only handles single-jamo finals (ㄱㄴㄷㄹㅁㅂㅅㅆㅈㅊㅋㅌㅍ). Compound
//   finals (ㄳㄵㄶㄺㄻㄼㄽㄾㄿㅀㅄ) and final ㅎ keep their plain coda sound
//   instead of splitting/liaising into the next syllable.
// - No palatalization (굳이 -> "guji", not handled) or tensification.
// - Rules apply only within one whitespace/punctuation-delimited token —
//   never across a space, matching how RR itself treats word boundaries.

const INITIALS = [
  'g', 'kk', 'n', 'd', 'tt', 'r', 'm', 'b', 'pp', 's',
  'ss', '', 'j', 'jj', 'ch', 'k', 't', 'p', 'h',
];
const MEDIALS = [
  'a', 'ae', 'ya', 'yae', 'eo', 'e', 'yeo', 'ye', 'o', 'wa',
  'wae', 'oe', 'yo', 'u', 'wo', 'we', 'wi', 'yu', 'eu', 'ui', 'i',
];
// Collapsed coda (batchim) sound per final-jamo index — this is the sound
// actually pronounced when the syllable is not followed by a vowel.
const FINAL_SOUND = [
  '', 'k', 'k', 'k', 'n', 'n', 'n', 't', 'l', 'k',
  'm', 'l', 'l', 'l', 'p', 'l', 'm', 'p', 'p', 't', 't',
  'ng', 't', 't', 'k', 't', 'p', 't',
];
// Liaison form (how the coda resurfaces as the next syllable's onset when
// followed by a vowel) — only defined for single-jamo finals; compound
// finals and ㅎ (index 27) are left undefined and fall back to FINAL_SOUND.
const FINAL_LIAISON = {
  1: 'g', 2: 'kk', 4: 'n', 7: 'd', 8: 'r', 16: 'm', 17: 'b',
  19: 's', 20: 'ss', 22: 'j', 23: 'ch', 24: 'k', 25: 't', 26: 'p',
};

const SBASE = 0xac00;
const SCOUNT = 11172;
const VCOUNT = 21;
const TCOUNT = 28;

function decompose(ch) {
  const code = ch.codePointAt(0);
  if (code === undefined || code < SBASE || code >= SBASE + SCOUNT) return null;
  const sIndex = code - SBASE;
  const l = Math.floor(sIndex / (VCOUNT * TCOUNT));
  const v = Math.floor((sIndex % (VCOUNT * TCOUNT)) / TCOUNT);
  const t = sIndex % TCOUNT;
  return { l, v, t };
}

// Applies nasalization/lateralization/liaison across one run of contiguous
// Hangul syllables (no separators inside `syls`), then renders to Latin.
function renderRun(syls) {
  const finals = syls.map((s) => s.t);
  const initialLatin = syls.map((s) => INITIALS[s.l]);
  for (let i = 0; i < syls.length - 1; i++) {
    const t = finals[i];
    if (t === 0) continue;
    const nextInitialIdx = syls[i + 1].l;
    const nextIsNasal = nextInitialIdx === 2 || nextInitialIdx === 6; // ㄴ or ㅁ
    const sound = FINAL_SOUND[t];
    if (nextIsNasal && sound === 'k') finals[i] = -1; // marker: render as 'ng'
    else if (nextIsNasal && sound === 't') finals[i] = -2; // render as 'n'
    else if (nextIsNasal && sound === 'p') finals[i] = -3; // render as 'm'
    else if (sound === 'l' && nextInitialIdx === 2) {
      // ㄹ + ㄴ -> ll
      initialLatin[i + 1] = 'l';
    } else if (sound === 'n' && nextInitialIdx === 5) {
      // ㄴ + ㄹ -> ll
      finals[i] = -4; // render as 'l'
      initialLatin[i + 1] = 'l';
    } else if (nextInitialIdx === 11 && FINAL_LIAISON[t] !== undefined) {
      // liaison: coda moves to the next syllable's onset before silent ㅇ
      initialLatin[i + 1] = FINAL_LIAISON[t];
      finals[i] = 0;
    }
  }
  const finalLatin = finals.map((t) => {
    if (t === -1) return 'ng';
    if (t === -2) return 'n';
    if (t === -3) return 'm';
    if (t === -4) return 'l';
    return FINAL_SOUND[t];
  });
  return syls.map((s, i) => initialLatin[i] + MEDIALS[s.v] + finalLatin[i]).join('');
}

function translitKo(word) {
  // Split into runs of contiguous Hangul syllables vs. everything else,
  // so assimilation/liaison never crosses a space or punctuation mark.
  let out = '';
  let run = [];
  const flush = () => {
    if (run.length) out += renderRun(run);
    run = [];
  };
  for (const ch of word) {
    const d = decompose(ch);
    if (d) {
      run.push(d);
    } else {
      flush();
      out += ch;
    }
  }
  flush();
  return out;
}

module.exports = { translitKo };

if (require.main === module) {
  const tests = [
    ['안녕하세요', 'annyeonghaseyo'],
    ['감사합니다', 'gamsahamnida'],
    ['한국어', 'hangugeo'],
    ['사랑', 'sarang'],
    ['학교', 'hakgyo'],
    ['신라', 'silla'],
    ['음식', 'eumsik'],
    ['컴퓨터', 'keompyuteo'],
    ['한국', 'hanguk'],
    ['국민', 'gungmin'],
    ['앞마당', 'ammadang'],
    ['설날', 'seollal'],
    ['옷이', 'osi'],
    ['물어', 'mureo'],
  ];
  for (const [t, expected] of tests) {
    const got = translitKo(t);
    console.log(t, '->', got, got === expected ? 'OK' : `EXPECTED ${expected}`);
  }
}
