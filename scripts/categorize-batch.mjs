// scripts/categorize-batch.mjs
// For a slice [start, start+count) of currently-uncategorized words (sorted as in words.js),
// applies explicit categories from a themed.json (word -> [cats]); everything else in the
// slice gets '📦 Інше'. Then merges all into data/categories.js RAW.
// Usage: node scripts/categorize-batch.mjs <start> <count> <themed.json>
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dir = dirname(fileURLToPath(import.meta.url));
const wordsPath = join(__dir, '../data/words.js');
const catPath = join(__dir, '../data/categories.js');

const start = parseInt(process.argv[2], 10);
const count = parseInt(process.argv[3], 10);
const themedPath = process.argv[4];
const themed = themedPath ? JSON.parse(readFileSync(themedPath, 'utf8')) : {};
const themedKeys = new Map(Object.entries(themed).map(([k, v]) => [k.toLowerCase(), v]));

let src = readFileSync(catPath, 'utf8');
const endMarker = '\n};\n\n// ── Build category';
const endIdx = src.indexOf(endMarker);
if (endIdx === -1) throw new Error('RAW end marker not found');
const rawBody = src.slice(0, endIdx);
const wordRe = /'([^']+)':\s*\[/g;
const categorized = new Set();
let m;
while ((m = wordRe.exec(rawBody))) categorized.add(m[1].toLowerCase());

const mod = await import('file://' + wordsPath.replace(/\\/g, '/'));
const allWords = mod.W.map(w => w[0]);
const uncategorized = allWords.filter(w => !categorized.has(w.toLowerCase()));
const slice = uncategorized.slice(start, start + count);

const lines = [];
let themedCount = 0, otherCount = 0;
for (const word of slice) {
  const key = word.toLowerCase();
  const cats = themedKeys.get(key) || ['📦 Інше'];
  if (themedKeys.has(key)) themedCount++; else otherCount++;
  lines.push(`  '${word.replace(/'/g, "\\'")}':[${cats.map(c => `'${c}'`).join(',')}],`);
}

const insertion = '\n  // ── Auto-batch ─────────────────────────────────────────────\n' + lines.join('\n') + '\n';
src = src.slice(0, endIdx) + insertion + src.slice(endIdx);
writeFileSync(catPath, src, 'utf8');
console.log(`✅ Processed ${slice.length} words (${themedCount} themed, ${otherCount} → Інше). Remaining after this: ${uncategorized.length - (start + slice.length)}`);
