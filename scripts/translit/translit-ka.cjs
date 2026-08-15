// Georgian (Mkhedruli) -> Latin, 2002 national romanization system.
//
// ⚠️ CONFIDENCE FLAG: Georgian has a three-way stop contrast (voiced /
// aspirated / ejective) similar in spirit to Armenian's two-way aspirate
// split. This table assumes aspirated stops (თ/ფ/ქ) get the plain letter
// (t/p/k — matching the well-known "Tbilisi" თბილისი spelling) and
// ejective stops (ტ/პ/კ, plus ყ/წ/ჭ) get a trailing apostrophe. I'm
// reasonably but not fully confident in this assignment from training
// data — re-check against an authoritative source before treating as
// ground truth, similar to the kk flag. Not yet applied to any real data
// since ka translation hasn't started.

const MAP = {
  ა: 'a', ბ: 'b', გ: 'g', დ: 'd', ე: 'e', ვ: 'v', ზ: 'z', თ: 't',
  ი: 'i', კ: "k'", ლ: 'l', მ: 'm', ნ: 'n', ო: 'o', პ: "p'", ჟ: 'zh',
  რ: 'r', ს: 's', ტ: "t'", უ: 'u', ფ: 'p', ქ: 'k', ღ: 'gh', ყ: "q'",
  შ: 'sh', ჩ: 'ch', ც: 'ts', ძ: 'dz', წ: "ts'", ჭ: "ch'", ხ: 'kh',
  ჯ: 'j', ჰ: 'h',
};

function translitKa(word) {
  let out = '';
  for (const ch of word) {
    const mapped = MAP[ch];
    out += mapped !== undefined ? mapped : ch;
  }
  return out;
}

module.exports = { translitKa };

if (require.main === module) {
  const tests = ['გამარჯობა', 'მადლობა', 'კარგი', 'დიდი', 'პური', 'წყალი'];
  for (const t of tests) console.log(t, '->', translitKa(t));
}
