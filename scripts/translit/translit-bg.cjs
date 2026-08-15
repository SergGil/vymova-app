// Bulgarian -> Latin, official Streamlined System (Law on Transliteration, 2009 / UN-approved)
const MAP = {
  а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ж: 'zh', з: 'z', и: 'i',
  й: 'y', к: 'k', л: 'l', м: 'm', н: 'n', о: 'o', п: 'p', р: 'r', с: 's',
  т: 't', у: 'u', ф: 'f', х: 'h', ц: 'ts', ч: 'ch', ш: 'sh', щ: 'sht',
  ъ: 'a', ь: 'y', ю: 'yu', я: 'ya',
};

function translitBg(word) {
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

module.exports = { translitBg };

if (require.main === module) {
  const tests = ['България', 'здравей', 'щастие', 'ябълка', 'мъж', 'ключ', 'дъщеря'];
  for (const t of tests) console.log(t, '->', translitBg(t));
}
