// One-off batch merge/verify script for the Greek (el) word-list expansion.
// Loads a batch JSON of [english, greek_translation, greek_example, translit]
// tuples, validates against the base word list, merges into words_el.js in
// canonical base-list key order, and rewrites the file (minified, single line).
const fs = require('fs');
const path = require('path');

const batchPath = process.argv[2];
if (!batchPath) {
  console.error('Usage: node merge-el-batch.cjs <batch.json>');
  process.exit(1);
}

const basePath = path.join(__dirname, '../../data/words-data/words.js');
const elPath = path.join(__dirname, '../../data/words-data/words_el.js');

function loadArr(filePath, varName) {
  const src = fs.readFileSync(filePath, 'utf8').replace(/^﻿/, '');
  const declIdx = src.indexOf('const ' + varName);
  const eqIdx = src.indexOf('=', declIdx);
  const rest = src.slice(eqIdx + 1);
  return eval('(' + rest.replace(/;\s*$/, '') + ')');
}

const W = loadArr(basePath, 'W');
const baseWords = W.map((e) => e[0]);
const baseSet = new Set(baseWords);

const W_EL = loadArr(elPath, 'W_EL');

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
  const [word, translation, example, translit] = item;
  if (!baseSet.has(word)) {
    console.error('Word not in base list, skipping:', word);
    continue;
  }
  if (Object.prototype.hasOwnProperty.call(W_EL, word)) {
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
  W_EL[word] = translit ? [translation, example, translit] : [translation, example];
  added++;
}

// Rebuild in canonical base-list order.
const ordered = {};
for (const w of baseWords) {
  if (Object.prototype.hasOwnProperty.call(W_EL, w)) {
    ordered[w] = W_EL[w];
  }
}

const header = `// Vymova — Greek translations (subset)
// Format: "english_word": ["greek_translation","greek_example_sentence"]
// @ts-check
/** @type {Record<string, readonly [string, string, string?]>} */
export const W_EL = `;

const out = header + JSON.stringify(ordered) + ';\n';
fs.writeFileSync(elPath, out, 'utf8');

console.log(`Added ${added} entries. Total now: ${Object.keys(ordered).length}`);
