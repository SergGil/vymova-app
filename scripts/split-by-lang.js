// Vymova — scripts/split-by-lang.js
// One-off migration: splits a "*_BY_LANG"-style aggregator export (or any
// top-level Record<lang, T> export) into one file per language, mirroring
// how data/grammar.ts / data/senses.ts were split (see
// docs/architecture-assessment.md p.6). Operates on the real transpiled
// runtime object (via esbuild), not text/regex parsing.
import { build } from 'esbuild';
import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

async function loadTsModule(relPath) {
  const abs = path.join(ROOT, relPath);
  const result = await build({
    entryPoints: [abs],
    // bundle: true — antonyms.ts has a real runtime import of
    // buildSynonymReverse from synonyms.ts; loading via a data: URL below
    // has no base path a relative import can resolve against, so it must
    // be inlined at build time instead of left as an external import.
    bundle: true,
    write: false,
    format: 'esm',
    target: 'es2020',
    loader: { '.ts': 'ts' },
  });
  const code = result.outputFiles[0].text;
  const dataUrl = 'data:text/javascript;base64,' + Buffer.from(code, 'utf8').toString('base64');
  return import(dataUrl);
}

function jsLiteral(value) {
  return JSON.stringify(value, null, 2);
}

async function splitByLang({
  sourceFile,
  byLangExportName,
  outDir,
  filePrefix,
  constPrefix,
  valueType,
  typeName,
  typeImportFrom,
}) {
  const mod = await loadTsModule(sourceFile);
  const byLang = mod[byLangExportName];
  if (!byLang) throw new Error(`${byLangExportName} not found in ${sourceFile}`);

  const absOutDir = path.join(ROOT, outDir);
  mkdirSync(absOutDir, { recursive: true });

  const langs = Object.keys(byLang);
  for (const lang of langs) {
    const data = byLang[lang];
    const constName = `${constPrefix}_${lang.toUpperCase()}`;
    const fileName = `${filePrefix}_${lang}.ts`;
    const typeImportLine = typeName ? `import type { ${typeName} } from '${typeImportFrom}';\n\n` : '';
    const src =
      `// Vymova — ${outDir}/${fileName}\n` +
      `// Auto-split from the former ${sourceFile}'s ${byLangExportName} (scripts/split-by-lang.js)\n` +
      `// — one file per language so it can be dynamically imported on demand.\n` +
      typeImportLine +
      `export const ${constName}: ${valueType} = ${jsLiteral(data)};\n`;
    writeFileSync(path.join(absOutDir, fileName), src, 'utf8');
  }
  console.log(`${sourceFile} (${byLangExportName}): wrote ${langs.length} files to ${outDir}`);
  return langs;
}

async function verifySplit({ sourceFile, byLangExportName, outDir, filePrefix, constPrefix }) {
  const orig = (await loadTsModule(sourceFile))[byLangExportName];
  let failed = false;
  for (const lang of Object.keys(orig)) {
    const constName = `${constPrefix}_${lang.toUpperCase()}`;
    const mod = await loadTsModule(`${outDir}/${filePrefix}_${lang}.ts`);
    const a = JSON.stringify(orig[lang]);
    const b = JSON.stringify(mod[constName]);
    if (a !== b) {
      failed = true;
      console.error(`MISMATCH [${outDir}/${filePrefix}_${lang}.ts]`);
    }
  }
  if (failed) {
    console.error(`VERIFICATION FAILED for ${sourceFile}`);
    process.exitCode = 1;
  } else {
    console.log(`${sourceFile}: verified ${Object.keys(orig).length} languages OK`);
  }
}

const jobs = [
  {
    sourceFile: 'data/lang-history.ts',
    byLangExportName: 'LANG_HISTORY',
    outDir: 'data/lang-history-data',
    filePrefix: 'lang-history',
    constPrefix: 'LANG_HISTORY',
    valueType: 'LangHistoryEntry',
    typeName: 'LangHistoryEntry',
    typeImportFrom: '../lang-history.ts',
  },
  {
    sourceFile: 'data/idioms.ts',
    byLangExportName: 'IDIOMS_BY_LANG',
    outDir: 'data/idioms-data',
    filePrefix: 'idioms',
    constPrefix: 'IDIOMS',
    valueType: 'Idiom[]',
    typeName: 'Idiom',
    typeImportFrom: '../idioms.ts',
  },
  {
    sourceFile: 'data/synonyms.ts',
    byLangExportName: 'SYNONYMS_BY_LANG',
    outDir: 'data/synonyms-data',
    filePrefix: 'synonyms',
    constPrefix: 'SYNONYMS',
    valueType: 'Record<string, SynonymEntry[]>',
    typeName: 'SynonymEntry',
    typeImportFrom: '../synonyms.ts',
  },
  {
    sourceFile: 'data/antonyms.ts',
    byLangExportName: 'ANTONYMS_BY_LANG',
    outDir: 'data/antonyms-data',
    filePrefix: 'antonyms',
    constPrefix: 'ANTONYMS',
    valueType: 'Record<string, AntonymEntry[]>',
    typeName: 'AntonymEntry',
    typeImportFrom: '../antonyms.ts',
  },
  {
    sourceFile: 'data/word-families.ts',
    byLangExportName: 'WORD_FAMILIES_BY_LANG',
    outDir: 'data/word-families-data',
    filePrefix: 'word-families',
    constPrefix: 'WORD_FAMILIES',
    valueType: 'Record<string, string[]>',
    typeName: null,
    typeImportFrom: null,
  },
  {
    sourceFile: 'data/usage-notes.ts',
    byLangExportName: 'USAGE_NOTES_BY_LANG',
    outDir: 'data/usage-notes-data',
    filePrefix: 'usage-notes',
    constPrefix: 'USAGE_NOTES',
    valueType: 'Record<string, string>',
    typeName: null,
    typeImportFrom: null,
  },
  {
    // Keyed by the 7-value UI locale (Lang from i18n.ts), NOT the 137-value
    // target language — etymology facts are explained in the reader's
    // interface language, not the word's learn-language.
    sourceFile: 'data/etymology.ts',
    byLangExportName: 'ETYMOLOGY_BY_LANG',
    outDir: 'data/etymology-data',
    filePrefix: 'etymology',
    constPrefix: 'ETYMOLOGY',
    valueType: 'Record<string, string>',
    typeName: null,
    typeImportFrom: null,
  },
];

const manifest = {};
for (const job of jobs) {
  manifest[job.outDir] = await splitByLang(job);
}
for (const job of jobs) {
  await verifySplit(job);
}
writeFileSync(
  path.join(ROOT, 'scripts/.split-by-lang-manifest.json'),
  JSON.stringify(manifest, null, 2),
);
console.log('Wrote scripts/.split-by-lang-manifest.json');
