// One-off helper for the Hindi 4250->10741 gap-backfill push.
// Reads a batch file of [english, hindiTranslation, hindiExample] triples,
// auto-transliterates the translation via translit-hi.cjs, merges into
// data/words-data/words_hi.js (rebuilt in canonical base-list order), and
// writes the result back in the same single-line-minified format the file
// already uses. Verifies count/duplicates/non-empty before writing.
//
// Usage: node scripts/translit/merge-hi-batch.cjs <batchFile.json>
const fs = require('fs');
const path = require('path');
const { translitHi } = require('./translit-hi.cjs');

const ROOT = path.resolve(__dirname, '..', '..');
const HI_PATH = path.join(ROOT, 'data', 'words-data', 'words_hi.js');
const BASE_PATH = path.join(ROOT, 'data', 'words-data', 'words.js');

const batchFile = process.argv[2];
if (!batchFile) {
  console.error('Usage: node merge-hi-batch.cjs <batchFile.json>');
  process.exit(1);
}

async function main() {
  const batch = JSON.parse(fs.readFileSync(batchFile, 'utf8'));

  // Load base list (English source of truth, canonical order).
  const baseSrc = fs.readFileSync(BASE_PATH, 'utf8');
  const baseMod = await import('file://' + BASE_PATH.replace(/\\/g, '/'));
  const W = baseMod.W;
  const baseOrder = W.map((e) => e[0]);
  const baseSet = new Set(baseOrder);

  // Load current hi file.
  const hiSrc = fs.readFileSync(HI_PATH, 'utf8');
  const hiMod = await import('file://' + HI_PATH.replace(/\\/g, '/') + '?t=' + Date.now());
  const existing = hiMod.W_HI;
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
    const translit = translitHi(trans);
    if (merged.has(en)) {
      errors.push(`"${en}" already exists in words_hi.js (duplicate)`);
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

  // Rebuild in canonical base-list order.
  const out = {};
  for (const word of baseOrder) {
    if (merged.has(word)) out[word] = merged.get(word);
  }

  const header = `// Vymova — Hindi translations (subset)
// Format: "english_word": ["hi_translation","hi_example_sentence"]
// @ts-check
/** @type {Record<string, readonly [string, string, string?]>} */
export const W_HI = `;

  const body = JSON.stringify(out) + ';\n';
  fs.writeFileSync(HI_PATH, header + body, 'utf8');

  console.log(`Added ${added} entries. Total now: ${Object.keys(out).length}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
