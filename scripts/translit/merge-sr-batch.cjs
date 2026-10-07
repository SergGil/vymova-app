// One-off batch merge/verify script for the Serbian (sr) word-list expansion.
// Loads a batch JSON of [english, sr_translation, sr_example]
// tuples, validates against the base word list, auto-generates the
// Gaj-Latin transliteration of the translation via translit-sr.cjs,
// merges into words_sr.js in canonical base-list key order, and rewrites the
// file (minified, single line).
/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');
const { translitSr } = require('./translit-sr.cjs');
/* eslint-enable @typescript-eslint/no-require-imports */

const batchPath = process.argv[2];
const overwrite = process.argv.includes('--overwrite');
if (!batchPath) {
  console.error('Usage: node merge-sr-batch.cjs <batch.json>');
  process.exit(1);
}

const basePath = path.join(__dirname, '../../data/words-data/words.js');
const srPath = path.join(__dirname, '../../data/words-data/words_sr.js');

function loadArr(filePath, varName) {
  let src = fs.readFileSync(filePath, 'utf8');
  if (src.charCodeAt(0) === 0xfeff) src = src.slice(1);
  const declIdx = src.indexOf('const ' + varName);
  const eqIdx = src.indexOf('=', declIdx);
  const rest = src.slice(eqIdx + 1);
  return eval('(' + rest.replace(/;\s*$/, '') + ')');
}

const W = loadArr(basePath, 'W');
const baseWords = W.map((e) => e[0]);
const baseSet = new Set(baseWords);

const W_SR = loadArr(srPath, 'W_SR');

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
  const [word, translation, example] = item;
  if (!baseSet.has(word)) {
    console.error('Word not in base list, skipping:', word);
    continue;
  }
  if (!overwrite && Object.prototype.hasOwnProperty.call(W_SR, word)) {
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
  const translit = translitSr(translation);
  W_SR[word] = [translation, example, translit];
  added++;
}

// Rebuild in canonical base-list order.
const ordered = {};
for (const w of baseWords) {
  if (Object.prototype.hasOwnProperty.call(W_SR, w)) {
    ordered[w] = W_SR[w];
  }
}

const header = `// Vymova — Serbian translations (subset)
// Format: "english_word": ["sr_translation","sr_example_sentence"]
// @ts-check
/** @type {Record<string, readonly [string, string, string?]>} */
export const W_SR = `;

const out = header + JSON.stringify(ordered) + ';\n';
fs.writeFileSync(srPath, out, 'utf8');

console.log(`Added ${added} entries. Total now: ${Object.keys(ordered).length}`);
