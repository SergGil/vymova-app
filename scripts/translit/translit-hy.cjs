// Armenian -> Latin, a simplified learner-facing romanization loosely based
// on ISO 9985 but avoiding its diacritics (underdots, macrons) in favor of
// plain digraphs/apostrophes, matching this app's style elsewhere (bg/ko/bn
// also prefer plain ASCII-ish Latin over academic diacritic-heavy systems).
//
// Armenian has a three-way stop contrast (voiced / voiceless unaspirated /
// voiceless aspirated) that doesn't map cleanly onto two-way Latin b/p
// etc. — aspirated consonants get a trailing apostrophe (tʿ -> t', kʿ ->
// k', pʿ -> p', cʿ -> ts', čʿ -> ch'); unaspirated get the plain digraph.
//
// Special rule: ե and ո are read "ye"/"vo" at the start of a word (e.g.
// երկիր "yerkir"), "e"/"o" elsewhere — handled below via position check.
//
// Known simplifications: է/ը (distinct e-like vowels) both collapse to
// "e"; օ and ո (distinct o-like vowels) both collapse to "o" outside the
// word-initial ո->"vo" rule.

const MAP = {
  ա: 'a', բ: 'b', գ: 'g', դ: 'd', ե: 'e', զ: 'z', է: 'e', ը: 'e',
  թ: "t'", ժ: 'zh', ի: 'i', լ: 'l', խ: 'kh', ծ: 'ts', կ: 'k', հ: 'h',
  ձ: 'dz', ղ: 'gh', ճ: 'ch', մ: 'm', յ: 'y', ն: 'n', շ: 'sh', ո: 'o',
  չ: "ch'", պ: 'p', ջ: 'j', ռ: 'rr', ս: 's', վ: 'v', տ: 't', ր: 'r',
  ց: "ts'", ւ: 'v', փ: "p'", ք: "k'", օ: 'o', ֆ: 'f', և: 'ev',
};

function translitHy(word) {
  let out = '';
  const chars = Array.from(word);
  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i];
    const lower = ch.toLowerCase();
    // "ու" digraph -> "u"
    if (lower === 'ո' && chars[i + 1] && chars[i + 1].toLowerCase() === 'ւ') {
      out += 'u';
      i += 1;
      continue;
    }
    const atWordStart = i === 0 || /[\s.,;:!?()"'-]/.test(chars[i - 1]);
    let mapped = MAP[lower];
    if (mapped !== undefined) {
      if (lower === 'ե' && atWordStart) mapped = 'ye';
      else if (lower === 'ո' && atWordStart) mapped = 'vo';
      out += ch === lower ? mapped : mapped[0].toUpperCase() + mapped.slice(1);
      continue;
    }
    out += ch;
  }
  return out;
}

module.exports = { translitHy };

if (require.main === module) {
  const tests = ['բարև', 'շնորհակալություն', 'երկիր', 'ընկեր', 'ուրախ', 'գիրք'];
  for (const t of tests) console.log(t, '->', translitHy(t));
}
