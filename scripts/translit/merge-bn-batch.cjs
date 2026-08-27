// One-off helper for the Bengali 2910->10741 gap-backfill push.
// Reads a batch file of [english, bengaliTranslation, bengaliExample] triples,
// auto-transliterates the translation via translit-bn.cjs, merges into
// data/words-data/words_bn.js (rebuilt in canonical base-list order), and
// writes the result back in the same single-line-minified format used by
// other fully-expanded language files (ar/de/fr/ja/bg/hi). Verifies
// count/duplicates/non-empty before writing.
//
// Usage: node scripts/translit/merge-bn-batch.cjs <batchFile.json>
const fs = require('fs');
const path = require('path');
const { translitBn } = require('./translit-bn.cjs');

const ROOT = path.resolve(__dirname, '..', '..');
const BN_PATH = path.join(ROOT, 'data', 'words-data', 'words_bn.js');
const BASE_PATH = path.join(ROOT, 'data', 'words-data', 'words.js');

const batchFile = process.argv[2];
if (!batchFile) {
  console.error('Usage: node merge-bn-batch.cjs <batchFile.json>');
  process.exit(1);
}

async function main() {
  const batch = JSON.parse(fs.readFileSync(batchFile, 'utf8'));

  const baseMod = await import('file://' + BASE_PATH.replace(/\\/g, '/'));
  const W = baseMod.W;
  const baseOrder = W.map((e) => e[0]);
  const baseSet = new Set(baseOrder);

  const bnMod = await import('file://' + BN_PATH.replace(/\\/g, '/') + '?t=' + Date.now());
  const existing = bnMod.W_BN;
  const merged = new Map(Object.entries(existing));

  let added = 0;
  const errors = [];
  for (const [en, trans, example] of batch) {
    if (!baseSet.has(en)) {
      errors.push(`"${en}" is not in the base word list`);
      continue;
    }
    if (!trans || !trans.trim() || !example || !example.trim()) {
      errors.push(`"${en}" has an empty translation or example`);
      continue;
    }
    const translit = translitBn(trans);
    if (merged.has(en)) {
      errors.push(`"${en}" already exists in words_bn.js (duplicate)`);
      continue;
    }
    merged.set(en, [trans, example, translit]);
    added++;
  }

  if (errors.length) {
    console.error('ERRORS found, aborting write:');
    for (const e of errors) console.error(' - ' + e);
    process.exit(1);
  }

  const out = {};
  for (const word of baseOrder) {
    if (merged.has(word)) out[word] = merged.get(word);
  }

  const header = `// Vymova — Bengali translations (subset)
// Format: "english_word": ["bn_translation","bn_example_sentence"]
// @ts-check
/** @type {Record<string, readonly [string, string, string?]>} */
export const W_BN = `;

  const body = JSON.stringify(out) + ';\n';
  fs.writeFileSync(BN_PATH, header + body, 'utf8');

  console.log(`Added ${added} entries. Total now: ${Object.keys(out).length}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
