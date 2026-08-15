// Serbian Cyrillic -> Latin, Gaj's Latin alphabet (the official parallel
// script for Serbian — unlike Bulgarian/Russian transliteration, this is a
// clean bijective 1:1 correspondence per the language's own orthography,
// not an invented romanization, so it keeps the standard's own diacritics
// (č, ć, đ, š, ž) rather than an ASCII-only approximation.

const MAP = {
  а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', ђ: 'đ', е: 'e', ж: 'ž', з: 'z',
  и: 'i', ј: 'j', к: 'k', л: 'l', љ: 'lj', м: 'm', н: 'n', њ: 'nj', о: 'o',
  п: 'p', р: 'r', с: 's', т: 't', ћ: 'ć', у: 'u', ф: 'f', х: 'h', ц: 'c',
  ч: 'č', џ: 'dž', ш: 'š',
};

function translitSr(word) {
  let out = '';
  for (const ch of word) {
    const lower = ch.toLowerCase();
    const mapped = MAP[lower];
    if (mapped === undefined) {
      out += ch;
      continue;
    }
    out += ch === lower ? mapped : mapped[0].toUpperCase() + mapped.slice(1);
  }
  return out;
}

module.exports = { translitSr };

if (require.main === module) {
  const tests = [
    ['добар дан', 'dobar dan'],
    ['хвала', 'hvala'],
    ['љубав', 'ljubav'],
    ['њива', 'njiva'],
    ['џак', 'džak'],
    ['ћирилица', 'ćirilica'],
    ['ђак', 'đak'],
    ['чоколада', 'čokolada'],
    ['шума', 'šuma'],
  ];
  for (const [t, ref] of tests) {
    const got = translitSr(t);
    console.log(t, '->', got, got === ref ? 'OK' : `REF ${ref}`);
  }
}
