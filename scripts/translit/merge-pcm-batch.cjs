// One-off batch merge/verify script for the Nigerian Pidgin (pcm) word-list expansion.
// Loads a batch JSON of [english, pcm_translation, pcm_example]
// tuples, validates against the base word list, merges into words_pcm.js in
// canonical base-list key order, and rewrites the file (minified, single line).
/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');
/* eslint-enable @typescript-eslint/no-require-imports */

const batchPath = process.argv[2];
if (!batchPath) {
  console.error('Usage: node merge-pcm-batch.cjs <batch.json>');
  process.exit(1);
}

const basePath = path.join(__dirname, '../../data/words-data/words.js');
const pcmPath = path.join(__dirname, '../../data/words-data/words_pcm.js');

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

const W_PCM = loadArr(pcmPath, 'W_PCM');

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
  if (Object.prototype.hasOwnProperty.call(W_PCM, word)) {
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
  W_PCM[word] = [translation, example];
  added++;
}

// Rebuild in canonical base-list order.
const ordered = {};
for (const w of baseWords) {
  if (Object.prototype.hasOwnProperty.call(W_PCM, w)) {
    ordered[w] = W_PCM[w];
  }
}

const header = `// Vymova — Nigerian Pidgin translations (subset)
// Format: "english_word": ["pcm_translation","pcm_example_sentence"]
// @ts-check
/** @type {Record<string, readonly [string, string, string?]>} */
export const W_PCM = `;

const out = header + JSON.stringify(ordered) + ';\n';
fs.writeFileSync(pcmPath, out, 'utf8');

console.log(`Added ${added} entries. Total now: ${Object.keys(ordered).length}`);
