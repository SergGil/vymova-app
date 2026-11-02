// Merge a batch of new entries into data/words-data/words_<code>.js — the
// reusable successor to the per-language merge-<code>-batch.cjs one-offs.
//
// Usage: node scripts/translit/merge-batch.cjs <code> <batch.json> [--any-order]
//
// batch.json: [[english, translation, example, transcription?], ...]
//
// The whole batch is rejected (file untouched) if any entry is not in the
// base list, already present, duplicated within the batch, or has an empty
// field — and, unless --any-order, if the batch isn't exactly the next
// missing headwords in base-list order (so a dropped or shifted row can't
// slip in silently). Entries are written in canonical base order; existing
// entries keep their exact source text. One-entry-per-line files stay that
// way, minified single-line files stay minified.
/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');
/* eslint-enable @typescript-eslint/no-require-imports */

const [code, batchPath] = process.argv.slice(2);
const anyOrder = process.argv.includes('--any-order');
if (!code || !batchPath) {
  console.error('Usage: node merge-batch.cjs <code> <batch.json> [--any-order]');
  process.exit(1);
}

const dataDir = path.join(__dirname, '../../data/words-data');
const varName = 'W_' + code.toUpperCase();
const targetPath = path.join(dataDir, `words_${code}.js`);

function loadObject(filePath, name) {
  let src = fs.readFileSync(filePath, 'utf8');
  if (src.charCodeAt(0) === 0xfeff) src = src.slice(1);
  const eqIdx = src.indexOf('=', src.indexOf('const ' + name));
  return eval('(' + src.slice(eqIdx + 1).replace(/;\s*$/, '') + ')');
}

const W = loadObject(path.join(dataDir, 'words.js'), 'W');
const baseWords = W.map((e) => e[0]);
const baseSet = new Set(baseWords);
const bank = loadObject(targetPath, varName);
const batch = JSON.parse(fs.readFileSync(batchPath, 'utf8'));

const errors = [];
const seen = new Set();
for (const [n, item] of batch.entries()) {
  const [word, ...fields] = item;
  const where = `#${n} "${word}"`;
  if (!baseSet.has(word)) errors.push(`${where}: not in the base list`);
  if (Object.prototype.hasOwnProperty.call(bank, word)) errors.push(`${where}: already in ${varName}`);
  if (seen.has(word)) errors.push(`${where}: twice in this batch`);
  seen.add(word);
  if (fields.length < 2 || fields.length > 3) errors.push(`${where}: expected 2-3 fields, got ${fields.length}`);
  for (const f of fields) {
    if (typeof f !== 'string' || !f.trim()) errors.push(`${where}: empty or non-string field`);
  }
}
if (!anyOrder) {
  const missing = baseWords.filter((w) => !Object.prototype.hasOwnProperty.call(bank, w));
  batch.forEach(([word], n) => {
    if (missing[n] !== word) errors.push(`#${n} "${word}": expected next missing headword "${missing[n]}"`);
  });
}
if (errors.length) {
  console.error(`Batch rejected, ${varName} untouched:\n` + errors.slice(0, 20).join('\n'));
  process.exit(1);
}

let src = fs.readFileSync(targetPath, 'utf8');
const declIdx = src.indexOf(`export const ${varName} = `);
const header = src.slice(0, declIdx + `export const ${varName} = `.length);
const multiLine = /\{\s*\n\s*"/.test(src.slice(declIdx, declIdx + 200));
const fresh = new Map(batch.map(([word, ...fields]) => [word, fields]));

let body;
if (multiLine) {
  // Keep each existing entry's line verbatim; key -> line text.
  const lines = new Map();
  for (const line of src.slice(declIdx).split('\n')) {
    const m = line.match(/^\s*("(?:[^"\\]|\\.)*")\s*:/);
    if (m) lines.set(JSON.parse(m[1]), line.replace(/,\s*$/, ''));
  }
  const out = [];
  for (const w of baseWords) {
    if (lines.has(w)) out.push(lines.get(w));
    else if (fresh.has(w)) out.push(`  ${JSON.stringify(w)}: [${fresh.get(w).map((f) => JSON.stringify(f)).join(', ')}]`);
  }
  if (out.length !== Object.keys(bank).length + fresh.size) {
    console.error('Line count mismatch while rebuilding — file layout not understood, untouched.');
    process.exit(1);
  }
  body = '{\n' + out.join(',\n') + '\n};\n';
} else {
  const ordered = {};
  for (const w of baseWords) {
    if (Object.prototype.hasOwnProperty.call(bank, w)) ordered[w] = bank[w];
    else if (fresh.has(w)) ordered[w] = fresh.get(w);
  }
  body = JSON.stringify(ordered) + ';\n';
}
fs.writeFileSync(targetPath, header + body, 'utf8');

const merged = loadObject(targetPath, varName);
const total = Object.keys(merged).length;
const next = baseWords.findIndex((w) => !Object.prototype.hasOwnProperty.call(merged, w));
console.log(
  `Added ${fresh.size}. ${varName} now ${total}/${baseWords.length}.` +
    (next === -1 ? ' Complete.' : ` Next missing: #${next} "${baseWords[next]}".`),
);
