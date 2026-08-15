// Kazakh Cyrillic -> Latin, per the January 2021 Kazakhstan government
// standard (the version that replaced the widely-criticized
// apostrophe-heavy 2018 draft, using ä/ğ/ñ/ö/ū/ü instead).
//
// ⚠️ CONFIDENCE FLAG: Kazakhstan revised this standard at least four times
// (2017/2018/2019/2021) and adoption in practice has reportedly been slow
// and inconsistent even after the "final" 2021 approval. This table is my
// best-effort reconstruction from training data, not verified against the
// primary government decree. Re-check against an authoritative source
// before treating this as ground truth — flagged here rather than silently
// presented as settled, unlike bg/ko/bn/sr/vi where the standard is stable
// and I'm confident in the mapping. Not yet applied to any real data since
// kk translation hasn't started.

const MAP = {
  а: 'a', ә: 'ä', б: 'b', в: 'v', г: 'g', ғ: 'ğ', д: 'd', е: 'e',
  ж: 'j', з: 'z', и: 'ï', й: 'y', к: 'k', қ: 'q', л: 'l', м: 'm',
  н: 'n', ң: 'ñ', о: 'o', ө: 'ö', п: 'p', р: 'r', с: 's', т: 't',
  у: 'w', ұ: 'ū', ү: 'ü', ф: 'f', х: 'h', һ: 'h', ц: 'ts', ч: 'ch',
  ш: 'sh', щ: 'shch', ы: 'y', і: 'i', э: 'e', ю: 'iu', я: 'ia',
  ъ: '', ь: '',
};

function translitKk(word) {
  let out = '';
  for (const ch of word) {
    const lower = ch.toLowerCase();
    const mapped = MAP[lower];
    if (mapped === undefined) {
      out += ch;
      continue;
    }
    out += ch === lower ? mapped : mapped ? mapped[0].toUpperCase() + mapped.slice(1) : '';
  }
  return out;
}

module.exports = { translitKk };

if (require.main === module) {
  const tests = ['қазақ', 'рахмет', 'сәлем', 'үй', 'құрмет', 'жаңа'];
  for (const t of tests) console.log(t, '->', translitKk(t));
}
