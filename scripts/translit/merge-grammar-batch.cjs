// One-off batch merge/verify script for expanding data/grammar-data/grammar_<lang>.ts.
// Usage: node scripts/translit/merge-grammar-batch.cjs <lang> <batch.json>
// batch.json shape: { "categoryId": "tenses", "categoryTitle": "...", "categoryTitleEn": "...",
//   "categoryEmoji": "🕐", "rules": [ GrammarRule, ... ] }
const fs = require('fs');
const path = require('path');

const lang = process.argv[2];
const batchPath = process.argv[3];
if (!lang || !batchPath) {
  console.error('Usage: node merge-grammar-batch.cjs <lang> <batch.json>');
  process.exit(1);
}

const filePath = path.join(__dirname, '..', '..', 'data', 'grammar-data', `grammar_${lang}.ts`);
const src = fs.readFileSync(filePath, 'utf8');
const eq = src.indexOf('= [');
const before = src.slice(0, eq + 2);
const jsonStr = src.slice(eq + 2, src.lastIndexOf(']') + 1);
const after = src.slice(src.lastIndexOf(']') + 1);

const data = JSON.parse(jsonStr);
const batch = JSON.parse(fs.readFileSync(batchPath, 'utf8'));

let cat = data.find((c) => c.id === batch.categoryId);
if (!cat) {
  cat = {
    id: batch.categoryId,
    title: batch.categoryTitle,
    titleEn: batch.categoryTitleEn,
    emoji: batch.categoryEmoji,
    rules: [],
  };
  data.push(cat);
}

const existingIds = new Set();
for (const c of data) for (const r of c.rules) existingIds.add(r.id);

for (const rule of batch.rules) {
  if (existingIds.has(rule.id)) {
    console.error(`Duplicate rule id: ${rule.id}`);
    process.exit(1);
  }
  existingIds.add(rule.id);
  cat.rules.push(rule);
}

const newJsonStr = JSON.stringify(data, null, 2);
fs.writeFileSync(filePath, before + newJsonStr + after);

let totalRules = 0;
for (const c of data) totalRules += c.rules.length;
console.log(`[${lang}] Added ${batch.rules.length} rules to category "${batch.categoryId}". Total rules now: ${totalRules} across ${data.length} categories.`);
