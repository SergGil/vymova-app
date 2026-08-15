// Vymova — scripts/extract-theme-css.js
// One-off extraction tool for the CSS-modernization roadmap (item 2, see
// docs/legacy-modernization-roadmap.md). Pulls every CSS rule scoped purely
// to `body.<theme>` out of css/styles.css into its own css/themes/<theme>.css
// file, leaving mixed-selector rules (e.g. `body.dark .x, body.sw .x {...}`)
// untouched in the base sheet. NOT wired into npm test/build — run by hand,
// once per theme, when migrating the next one off this roadmap.
// Usage: node scripts/extract-theme-css.js <themeKey>
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import postcss from 'postcss';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const theme = process.argv[2];
if (!theme) {
  console.error('Usage: node scripts/extract-theme-css.js <themeKey>');
  process.exit(1);
}

const stylesPath = path.join(__dirname, '..', 'css', 'styles.css');
const outDir = path.join(__dirname, '..', 'css', 'themes');
const outPath = path.join(outDir, `${theme}.css`);

const css = fs.readFileSync(stylesPath, 'utf8');
const root = postcss.parse(css);

const selRe = new RegExp(`^body\\.${theme}(\\W|$)`);
const extracted = [];
let mixedCount = 0;

root.walkRules(new RegExp(`body\\.${theme}\\b`), (rule) => {
  const sels = rule.selectors;
  const allMatch = sels.every((s) => selRe.test(s.trim()));
  if (!allMatch) {
    mixedCount++;
    return; // leave mixed-selector rules in place
  }
  extracted.push(rule);
});

console.log(`Found ${extracted.length} pure body.${theme} rules, ${mixedCount} mixed (left in place).`);

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const themeRoot = postcss.root();
for (const rule of extracted) {
  themeRoot.append(rule.clone());
}
const themeCss =
  `/* Vymova — css/themes/${theme}.css\n` +
  `   Extracted from styles.css (legacy-modernization-roadmap.md, item 2) —\n` +
  `   every rule scoped purely to body.${theme}. Loaded on demand (see\n` +
  `   js/features/settings.tsx's theme toggle) instead of shipped to every\n` +
  `   visitor regardless of which theme (if any) they use. */\n\n` +
  themeRoot.toString() +
  '\n';
fs.writeFileSync(outPath, themeCss);

for (const rule of extracted) {
  rule.remove();
}
fs.writeFileSync(stylesPath, root.toString());

console.log(`Wrote ${outPath}`);
console.log(`Updated ${stylesPath}`);
