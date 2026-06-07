// scripts/merge-categories.mjs
// Merges a batch JSON (word -> [categories]) into data/categories.js RAW map.
// Usage: node scripts/merge-categories.mjs <batch.json>
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dir = dirname(fileURLToPath(import.meta.url));
const catPath = join(__dir, '../data/categories.js');
const batchPath = process.argv[2];

const batch = JSON.parse(readFileSync(batchPath, 'utf8'));
let src = readFileSync(catPath, 'utf8');

const endMarker = '\n};\n\n// ── Build category';
const endIdx = src.indexOf(endMarker);
if (endIdx === -1) throw new Error('RAW end marker not found');

const existing = new Set();
const wordRe = /'([^']+)':\s*\[/g;
let m;
const rawBody = src.slice(0, endIdx);
while ((m = wordRe.exec(rawBody))) existing.add(m[1].toLowerCase());

let added = 0, skipped = 0;
const lines = [];
for (const [word, cats] of Object.entries(batch)) {
  const key = word.toLowerCase();
  if (existing.has(key)) { skipped++; continue; }
  existing.add(key);
  lines.push(`  '${word.replace(/'/g, "\\'")}':[${cats.map(c => `'${c}'`).join(',')}],`);
  added++;
}

const insertion = '\n  // ── Auto-batch ─────────────────────────────────────────────\n' + lines.join('\n') + '\n';
src = src.slice(0, endIdx) + insertion + src.slice(endIdx);
writeFileSync(catPath, src, 'utf8');
console.log(`✅ Added ${added} words to categories (skipped ${skipped} duplicates)`);
