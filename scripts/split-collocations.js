// Vymova — scripts/split-collocations.js
// One-off: data/collocations.ts has no *_BY_LANG aggregator (COLLOCATIONS_EN/
// ES/FR are private, accessed only via searchCollocations()) — extracts them
// directly by name instead of split-by-lang.js's generic BY_LANG-export path.
import { build } from 'esbuild';
import { writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';
import os from 'node:os';

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const TMP = path.join(os.tmpdir(), 'vymova-split-collocations');
mkdirSync(TMP, { recursive: true });
let _tmpCounter = 0;

async function loadTsModule(relPath, exportNames = []) {
  // exportNames: for source files where the consts of interest aren't
  // exported (COLLOCATIONS_EN/ES/FR) — appends re-exports to a temporary
  // copy rather than editing the source file. Omit for already-exported
  // modules (e.g. verifying our own freshly-written per-language files) —
  // passing it there would duplicate the `export const` already present.
  const abs = path.join(ROOT, relPath);
  const result = await build({
    entryPoints: [abs],
    bundle: true,
    write: false,
    format: 'esm',
    target: 'es2020',
    loader: { '.ts': 'ts' },
    footer: exportNames.length
      ? { js: exportNames.map((n) => `export { ${n} };`).join('\n') }
      : undefined,
  });
  const code = result.outputFiles[0].text;
  const tmpFile = path.join(TMP, `mod-${_tmpCounter++}.mjs`);
  // Written to a real temp .mjs file (not a data: URL) — large data: URLs
  // choke on Node's URL length handling.
  writeFileSync(tmpFile, code, 'utf8');
  const mod = await import(pathToFileURL(tmpFile).href);
  rmSync(tmpFile, { force: true });
  return mod;
}

const langs = { en: 'COLLOCATIONS_EN', es: 'COLLOCATIONS_ES', fr: 'COLLOCATIONS_FR' };
const mod = await loadTsModule('data/collocations.ts', Object.values(langs));

const outDir = path.join(ROOT, 'data/collocations-data');
mkdirSync(outDir, { recursive: true });

const manifest = [];
for (const [lang, constName] of Object.entries(langs)) {
  const data = mod[constName];
  const outConstName = `COLLOCATIONS_${lang.toUpperCase()}`;
  const fileName = `collocations_${lang}.ts`;
  const src =
    `// Vymova — data/collocations-data/${fileName}\n` +
    `// Auto-split from the former data/collocations.ts (scripts/split-collocations.js)\n` +
    `// — one file per language so it can be dynamically imported on demand.\n` +
    `import type { Collocation } from '../collocations.ts';\n\n` +
    `export const ${outConstName}: Record<string, Collocation[]> = ${JSON.stringify(data, null, 2)};\n`;
  writeFileSync(path.join(outDir, fileName), src, 'utf8');
  manifest.push(lang);

  // Verify round-trip.
  const verifyMod = await loadTsModule(`data/collocations-data/${fileName}`);
  if (JSON.stringify(verifyMod[outConstName]) !== JSON.stringify(data)) {
    console.error(`MISMATCH: ${fileName}`);
    process.exitCode = 1;
  }
}
console.log(`Wrote ${manifest.length} files to data/collocations-data: ${manifest.join(', ')}`);
if (!process.exitCode) console.log('Verified OK');
