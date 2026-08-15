// Vietnamese Quốc Ngữ -> IPA with tone-contour numbers, matching the
// convention already used by the original 100 legacy words_vi.js entries
// (e.g. "tɯ˨˩ ɓɔ˧˩" for "từ bỏ"). Vietnamese orthography already encodes
// tone via diacritics, so this is a deterministic script-to-IPA mapping,
// not a translation task.
//
// Approach: NFD-normalize each syllable to separate combining TONE marks
// (grave/acute/hook/tilde/dot-below) from combining QUALITY marks
// (circumflex/breve/horn, which change the vowel itself: a->â/ă, o->ô/ơ,
// u->ư etc.) — tone marks are stripped and recorded, quality marks stay
// attached to their base letter. What's left is parsed as
// [initial consonant][vowel nucleus][final consonant] via longest-match
// tables, each mapped to IPA, then the tone suffix is appended.
//
// Known simplifications (documented, not fixed):
// - Northern (Hanoi) dialect mergers are assumed throughout: d/gi/r all
//   -> z, s/x both -> s, ch/tr both -> tɕ. Southern dialect keeps these
//   distinct; out of scope here.
// - ă and a share the IPA symbol "a" (duration difference not marked);
//   ao/au share "aw" (documented rather than adding "ɐw" for au).
// - Final ch is rendered the same as final c (k̚), not the more precise
//   palatalized stop some descriptions use.
// - Rare vowel nuclei not in NUCLEI fall back to naive per-letter mapping
//   via VOWEL_LETTER, which may be phonetically approximate.

const TONE_MARKS = {
  '̀': '˨˩', // huyền, grave
  '́': '˧˥', // sắc, acute
  '̉': '˧˩', // hỏi, hook above
  '̃': '˧ˀ˥', // ngã, tilde
  '̣': '˨˨', // nặng, dot below
};
const TONE_NGANG = '˧˧'; // no mark

const INITIALS = [
  ['ngh', 'ŋ'], ['ng', 'ŋ'], ['nh', 'ɲ'], ['ph', 'f'], ['th', 'tʰ'],
  ['tr', 'tɕ'], ['ch', 'tɕ'], ['kh', 'x'], ['gi', 'z'], ['gh', 'ɣ'],
  ['qu', 'kw'],
  ['b', 'ɓ'], ['c', 'k'], ['d', 'z'], ['đ', 'ɗ'], ['g', 'ɣ'], ['h', 'h'],
  ['k', 'k'], ['l', 'l'], ['m', 'm'], ['n', 'n'], ['p', 'p'], ['r', 'z'],
  ['s', 's'], ['t', 't'], ['v', 'v'], ['x', 's'],
].sort((a, b) => b[0].length - a[0].length);

const FINALS = [
  ['ch', 'k̚'], ['ng', 'ŋ'], ['nh', 'ɲ'],
  ['c', 'k̚'], ['m', 'm'], ['n', 'n'], ['p', 'p̚'], ['t', 't̚'],
].sort((a, b) => b[0].length - a[0].length);

const NUCLEI = [
  ['iê', 'iə'], ['yê', 'iə'], ['ia', 'iə'], ['ya', 'iə'],
  ['uô', 'uə'], ['ua', 'uə'],
  ['ươ', 'ɯə'], ['ưa', 'ɯə'],
  ['oai', 'waj'], ['oay', 'wăj'],
  ['oa', 'wa'], ['oă', 'wa'], ['oe', 'we'], ['oo', 'ɔ'],
  ['uy', 'wi'], ['uê', 'we'], ['uơ', 'wə'], ['uy', 'wi'],
  ['ai', 'aj'], ['ay', 'ăj'], ['ao', 'aw'], ['au', 'aw'],
  ['ây', 'əj'], ['âu', 'əw'],
  ['eo', 'ɛw'], ['êu', 'ew'],
  ['oi', 'ɔj'], ['ôi', 'oj'], ['ơi', 'əj'],
  ['ưi', 'ɯj'], ['ưu', 'ɯw'], ['iu', 'iw'], ['ui', 'uj'],
  ['a', 'a'], ['ă', 'a'], ['â', 'ə̆'], ['e', 'ɛ'], ['ê', 'e'],
  ['i', 'i'], ['y', 'i'], ['o', 'ɔ'], ['ô', 'o'], ['ơ', 'ə'],
  ['u', 'u'], ['ư', 'ɯ'],
].sort((a, b) => b[0].length - a[0].length);

const VOWEL_LETTER = Object.fromEntries(
  [
    ['a', 'a'], ['ă', 'a'], ['â', 'ə̆'], ['e', 'ɛ'], ['ê', 'e'],
    ['i', 'i'], ['y', 'i'], ['o', 'ɔ'], ['ô', 'o'], ['ơ', 'ə'],
    ['u', 'u'], ['ư', 'ɯ'],
  ],
);

function matchPrefix(str, table) {
  for (const [k, v] of table) {
    if (str.startsWith(k)) return { matched: k, ipa: v };
  }
  return null;
}

function stripTone(syllable) {
  const nfd = syllable.normalize('NFD');
  let tone = null;
  let clean = '';
  for (const ch of nfd) {
    if (TONE_MARKS[ch] !== undefined) {
      tone = TONE_MARKS[ch];
      continue;
    }
    clean += ch;
  }
  return { clean: clean.normalize('NFC'), tone: tone ?? TONE_NGANG };
}

function isVietnameseSyllable(s) {
  const base = s.normalize('NFD').replace(/[̀-ͯ]/g, '');
  return /^[a-zA-ZđĐ]+$/.test(base);
}

function transSyllable(raw) {
  const { clean, tone } = stripTone(raw);
  let s = clean.toLowerCase();
  let out = '';

  const initial = matchPrefix(s, INITIALS);
  if (initial) {
    out += initial.ipa;
    s = s.slice(initial.matched.length);
  }

  // "gi" alone (no vowel left) still carries its own /i/ nucleus, e.g. "gì" -> zi
  if (initial && initial.matched === 'gi' && s.length === 0) {
    return out + 'i' + tone;
  }
  // "qu" already consumed the glide; if nothing else follows, default nucleus "a"
  if (initial && initial.matched === 'qu' && s.length === 0) {
    return out + 'a' + tone;
  }

  let final = null;
  for (const [k, v] of FINALS) {
    if (s.endsWith(k) && s.length > k.length) {
      final = { matched: k, ipa: v };
      break;
    }
  }
  const core = final ? s.slice(0, s.length - final.matched.length) : s;

  const nucleusMatch = matchPrefix(core, NUCLEI);
  if (nucleusMatch && nucleusMatch.matched.length === core.length) {
    out += nucleusMatch.ipa;
  } else if (core.length) {
    // fall back to per-letter vowel mapping (documented simplification)
    out += Array.from(core)
      .map((c) => VOWEL_LETTER[c] ?? c)
      .join('');
  }

  if (final) out += final.ipa;
  return out + tone;
}

function translitVi(phrase) {
  return phrase.replace(/[A-Za-zÀ-ÿḀ-ỿĀ-ſơƠưƯ]+/g, (word) =>
    isVietnameseSyllable(word) ? transSyllable(word) : word,
  );
}

module.exports = { translitVi };

if (require.main === module) {
  const tests = [
    ['từ bỏ', 'tɯ˨˩ ɓɔ˧˩'],
    ['bị bỏ hoang', 'ɓi˨˨ ɓɔ˧˩ hwaŋ˧˧'],
    ['giảm bớt', 'zam˧˩ ɓət̚˧˥'],
    ['thoái vị', 'tʰwaj˧˥ vi˨˨'],
    ['bụng', 'ɓuŋ˨˨'],
    ['bắt cóc', 'ɓat̚˧˥ kɔk̚˧˥'],
    ['ghê tởm', 'ɣe˧˧ təm˧˩'],
    ['ở nước ngoài', 'ə˧˩ nɯək̚˧˥ ŋwaj˨˩'],
    ['đột ngột', 'ɗot̚˨˨ ŋot̚˨˨'],
    ['bãi bỏ', 'ɓaj˧ˀ˥ ɓɔ˧˩'],
    ['hoàn toàn', 'hwan˨˩ twan˨˩'],
    ['hủy bỏ', 'hwi˧˩ ɓɔ˧˩'],
    ['xúi giục', 'suj˧˥ zuk̚˨˨'],
    ['khoảng', 'xwaŋ˧˩'],
  ];
  for (const [t, ref] of tests) {
    const got = translitVi(t);
    console.log(t, '->', got, got === ref ? 'OK' : `REF ${ref}`);
  }
}
