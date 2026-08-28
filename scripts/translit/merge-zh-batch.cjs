const fs = require('fs');
const path = require('path');

const BASE_PATH = path.join(__dirname, '../../data/words-data/words.js');
const ZH_PATH = path.join(__dirname, '../../data/words-data/words_zh.js');

const batchPath = process.argv[2];
if (!batchPath) {
  console.error('Usage: node merge-zh-batch.cjs <batch.json>');
  process.exit(1);
}

const baseSrc = fs.readFileSync(BASE_PATH, 'utf8').replace(/^﻿/, '');
const baseMatch = baseSrc.match(/export const W\s*=\s*(\[[\s\S]*\]);/);
const W = eval(baseMatch[1]);
const baseWords = W.map((e) => e[0]);
const baseSet = new Set(baseWords);

const zhSrc = fs.readFileSync(ZH_PATH, 'utf8').replace(/^﻿/, '');
const zhMatch = zhSrc.match(/export const W_ZH\s*=\s*(\{[\s\S]*\});/);
const W_ZH = eval('(' + zhMatch[1] + ')');

const batch = JSON.parse(fs.readFileSync(batchPath, 'utf8'));

for (const [word, translation, example, pinyin] of batch) {
  if (!baseSet.has(word)) {
    throw new Error(`Word not in base list: ${word}`);
  }
  if (Object.prototype.hasOwnProperty.call(W_ZH, word)) {
    throw new Error(`Duplicate word already present: ${word}`);
  }
  if (!translation || !example) {
    throw new Error(`Empty translation/example for: ${word}`);
  }
  W_ZH[word] = [translation, example, pinyin || ''];
}

// Rebuild in canonical base-list order
const rebuilt = {};
for (const word of baseWords) {
  if (Object.prototype.hasOwnProperty.call(W_ZH, word)) {
    rebuilt[word] = W_ZH[word];
  }
}

const header = `// Vymova — Mandarin Chinese translations (subset)
// Format: "english_word": ["chinese_translation","chinese_example_sentence"]
// @ts-check
/** @type {Record<string, readonly [string, string, string?]>} */
export const W_ZH = `;

const json = JSON.stringify(rebuilt);
fs.writeFileSync(ZH_PATH, header + json + ';\n', 'utf8');

console.log(`Added ${batch.length} entries. Total now: ${Object.keys(rebuilt).length}`);
