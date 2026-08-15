// Vymova — scripts/theme-screenshot-diff.mjs
// Phase 8 regression check: compare test-results/theme-baseline (pre-
// body[data-theme] conversion) against test-results/theme-after (post-
// conversion) pixel-by-pixel. No pixelmatch/pngjs in node_modules, so this
// uses `sharp` (already a devDependency) to decode both PNGs to raw RGBA
// buffers and diffs them directly — good enough for a same-viewport,
// same-content "did anything move" check, not a full visual-regression tool.
// Usage: node scripts/theme-screenshot-diff.mjs
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const beforeDir = path.join(root, 'test-results', 'theme-baseline');
const afterDir = path.join(root, 'test-results', 'theme-after');

const files = fs
  .readdirSync(beforeDir)
  .filter((f) => f.endsWith('.png') && !f.startsWith('hp-native'));

async function diffPair(name) {
  const [a, b] = await Promise.all([
    sharp(path.join(beforeDir, name)).raw().ensureAlpha().toBuffer({ resolveWithObject: true }),
    sharp(path.join(afterDir, name)).raw().ensureAlpha().toBuffer({ resolveWithObject: true }),
  ]);
  if (a.info.width !== b.info.width || a.info.height !== b.info.height) {
    return { name, error: 'size-mismatch' };
  }
  const ba = a.data;
  const bb = b.data;
  let diffPixels = 0;
  const total = ba.length / 4;
  for (let i = 0; i < ba.length; i += 4) {
    const dr = Math.abs(ba[i] - bb[i]);
    const dg = Math.abs(ba[i + 1] - bb[i + 1]);
    const db = Math.abs(ba[i + 2] - bb[i + 2]);
    // small tolerance for anti-aliasing/font-rendering jitter, not color drift
    if (dr + dg + db > 30) diffPixels += 1;
  }
  return { name, diffPixels, total, pct: (diffPixels / total) * 100 };
}

async function main() {
  const results = [];
  for (const name of files) {
    results.push(await diffPair(name));
  }
  results.sort((a, b) => (b.pct ?? 100) - (a.pct ?? 100));

  let flagged = 0;
  for (const r of results) {
    if (r.error) {
      console.log(`ERROR ${r.name}: ${r.error}`);
      flagged += 1;
      continue;
    }
    // Card/word-of-the-day content differs run to run (random word shown),
    // so a nonzero pct is expected; flag only clearly-structural diffs.
    if (r.pct > 5) {
      console.log(`FLAG  ${r.name}: ${r.pct.toFixed(2)}% pixels differ`);
      flagged += 1;
    }
  }
  console.log(`\n${results.length} pairs compared, ${flagged} flagged (>5% pixel diff).`);
  if (flagged === 0) console.log('No structural regressions detected.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
