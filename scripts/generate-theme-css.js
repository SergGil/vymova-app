// Vymova — scripts/generate-theme-css.js
// The 14 css/themes/<key>.css files (extract-theme-css.js's output) turned out to
// be one shared template copy-pasted 14 times — after stripping theme-specific
// tokens, all 14 are structurally identical (~715 lines each, ~223 kB total).
// This script is the single source of truth going forward: it renders
// scripts/theme-template.css + scripts/theme-tokens.json back into the 14
// css/themes/<key>.css files that fandom-theme-store.ts's import.meta.glob
// picks up (it needs real static files, not runtime-computed CSS).
// NOT wired into npm test/build — run by hand after editing the template or
// tokens. Verified against the pre-refactor files: every theme's rendered
// output is selector/declaration-identical to what extract-theme-css.js had
// produced (see legacy-modernization-roadmap.md item 2, follow-up dedup pass).
// Usage: node scripts/generate-theme-css.js [themeKey]   (all 14 if omitted)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const template = fs.readFileSync(path.join(__dirname, 'theme-template.css'), 'utf8');
const tokens = JSON.parse(fs.readFileSync(path.join(__dirname, 'theme-tokens.json'), 'utf8'));

function render(key) {
  const theme = tokens[key];
  if (!theme) throw new Error(`No tokens for theme "${key}" in scripts/theme-tokens.json`);
  const scope = { ...theme, KEY: key };
  let out = template.replace(/\{\{(\w+)\}\}/g, (_match, name) => {
    if (!(name in scope)) throw new Error(`Token {{${name}}} has no value for theme "${key}"`);
    return scope[name];
  });
  if (theme.EXTRA) {
    // per-theme rules with no equivalent in the other 13 themes (currently only
    // hp/sw's .title-<key>-toggle) sit as the first rule, right after the header comment
    const headerEnd = out.indexOf('*/') + 2;
    out = `${out.slice(0, headerEnd)}\n\n${theme.EXTRA}\n${out.slice(headerEnd)}`;
  }
  return out;
}

const requested = process.argv[2];
const keys = requested ? [requested] : Object.keys(tokens);

const outDir = path.join(root, 'css', 'themes');
for (const key of keys) {
  const css = render(key);
  fs.writeFileSync(path.join(outDir, `${key}.css`), css);
  console.log(`wrote css/themes/${key}.css`);
}
