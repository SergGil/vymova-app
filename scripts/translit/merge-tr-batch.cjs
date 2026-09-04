// One-off batch merge/verify script for the Turkish (tr) word-list expansion.
// Loads a batch JSON of [english, turkish_translation, turkish_example, ipa]
// tuples, validates against the base word list, merges into words_tr.js in
// canonical base-list key order, and rewrites the file (minified, single line).
/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');
/* eslint-enable @typescript-eslint/no-require-imports */

const batchPath = process.argv[2];
if (!batchPath) {
  console.error('Usage: node merge-tr-batch.cjs <batch.json>');
  process.exit(1);
}

const basePath = path.join(__dirname, '../../data/words-data/words.js');
const trPath = path.join(__dirname, '../../data/words-data/words_tr.js');

function loadArr(filePath, varName) {
  const src = fs.readFileSync(filePath, 'utf8').replace(/^\uFEFF/, '');
  const declIdx = src.indexOf('const ' + varName);
  const eqIdx = src.indexOf('=', declIdx);
  const rest = src.slice(eqIdx + 1);
  return eval('(' + rest.replace(/;\s*$/, '') + ')');
}

const W = loadArr(basePath, 'W');
const baseWords = W.map((e) => e[0]);
const baseSet = new Set(baseWords);

const W_TR = loadArr(trPath, 'W_TR');

const batchRaw = fs.readFileSync(batchPath, 'utf8');
let batch;
try {
  batch = JSON.parse(batchRaw);
} catch (err) {
  console.error('JSON parse error in batch file:', err.message);
  process.exit(1);
}

let added = 0;
for (const item of batch) {
  const [word, translation, example, ipa] = item;
  if (!baseSet.has(word)) {
    console.error('Word not in base list, skipping:', word);
    continue;
  }
  if (Object.prototype.hasOwnProperty.call(W_TR, word)) {
    console.error('Duplicate word, already exists, skipping:', word);
    continue;
  }
  if (!translation || !translation.trim()) {
    console.error('Empty translation for:', word);
    continue;
  }
  if (!example || !example.trim()) {
    console.error('Empty example for:', word);
    continue;
  }
  if (!ipa || !ipa.trim()) {
    console.error('Empty IPA for:', word);
    continue;
  }
  W_TR[word] = [translation, example, ipa];
  added++;
}

// Rebuild in canonical base-list order.
const ordered = {};
for (const w of baseWords) {
  if (Object.prototype.hasOwnProperty.call(W_TR, w)) {
    ordered[w] = W_TR[w];
  }
}

const header = `// Vymova — Turkish translations (subset)
// Format: "english_word": ["turkish_translation","turkish_example_sentence"]
// @ts-check
/** @type {Record<string, readonly [string, string, string?]>} */
export const W_TR = `;

const out = header + JSON.stringify(ordered) + ';\n';
fs.writeFileSync(trPath, out, 'utf8');

console.log(`Added ${added} entries. Total now: ${Object.keys(ordered).length}`);
