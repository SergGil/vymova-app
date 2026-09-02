// One-off script to populate the titleEn field on GrammarRule objects.
// Usage: node scripts/translit/add-titleen-batch.cjs <lang> <mapping.json>
// mapping.json shape: { "rule-id": "English Title — A1", ... }
// Appends " — <LEVEL>" automatically if the mapping value has no level and
// the existing title does; otherwise uses the mapping value verbatim.
const fs = require('fs');
const path = require('path');

const lang = process.argv[2];
const mapPath = process.argv[3];
if (!lang || !mapPath) {
  console.error('Usage: node add-titleen-batch.cjs <lang> <mapping.json>');
  process.exit(1);
}

const filePath = path.join(__dirname, '..', '..', 'data', 'grammar-data', `grammar_${lang}.ts`);
const src = fs.readFileSync(filePath, 'utf8');
const eq = src.indexOf('= [');
const before = src.slice(0, eq + 2);
const jsonStr = src.slice(eq + 2, src.lastIndexOf(']') + 1);
const after = src.slice(src.lastIndexOf(']') + 1);

const data = JSON.parse(jsonStr);
const mapping = JSON.parse(fs.readFileSync(mapPath, 'utf8'));

let applied = 0;
const seenIds = new Set();
for (const cat of data) {
  for (const rule of cat.rules) {
    seenIds.add(rule.id);
    if (mapping[rule.id]) {
      let en = mapping[rule.id];
      if (!/ — /.test(en)) {
        const m = rule.title.match(/ — ([^—]+)$/);
        if (m) en = `${en} — ${m[1]}`;
      }
      rule.titleEn = en;
      applied++;
    }
  }
}

const missingFromMapping = [];
for (const cat of data) {
  for (const rule of cat.rules) {
    if (!rule.titleEn) missingFromMapping.push(rule.id);
  }
}
const unknownKeys = Object.keys(mapping).filter((k) => !seenIds.has(k));

const newJsonStr = JSON.stringify(data, null, 2);
fs.writeFileSync(filePath, before + newJsonStr + after);

console.log(`[${lang}] Applied ${applied} titleEn entries.`);
if (missingFromMapping.length) console.log(`[${lang}] Still missing titleEn (${missingFromMapping.length}): ${missingFromMapping.join(', ')}`);
if (unknownKeys.length) console.log(`[${lang}] WARNING unknown ids in mapping: ${unknownKeys.join(', ')}`);
