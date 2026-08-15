// Vymova — scripts/theme-baseline-screenshots.mjs
// Phase 8 (docs/tailwind-shadcn-migration-roadmap.md) prototype step 1:
// screenshot every fandom theme on a few key screens BEFORE any Tailwind
// theme conversion, so a later conversion (starting with the `hp` theme)
// has something concrete to diff against. Not wired into npm test/build —
// run by hand: `node scripts/theme-baseline-screenshots.mjs [outDir]`.
// Requires the dev server running separately: `npx vite --port 5183 --strictPort`
// (same server playwright.config.ts's webServer block would start for e2e tests).
import { chromium } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

// Mirrors src/fandom-theme-store.ts's FANDOM_THEME_KEYS.
const FANDOM_THEME_KEYS = [
  'sw', 'hp', 'cp', 'lotr', 'mcu', 'witcher', 'mc', 'dc',
  'got', 'dw', 'dune', 'hg', 'avt', 'dt',
];

// null = no fandom skin (base light/dark theme only).
const THEMES = [null, ...FANDOM_THEME_KEYS];
const MODES = ['light', 'dark'];

// Screens: base view already contains card + game-bar + sidebar together
// (index.html layout), settings/stats are separate route overlays with
// heavy theme-touched CSS (.settings-section, .stat-card etc).
const SCREENS = [
  { name: 'base', hash: '' },
  { name: 'settings', hash: '#/settings' },
  { name: 'stats', hash: '#/stats' },
];

const baseURL = 'http://localhost:5183';
const outDir = path.resolve(root, process.argv[2] || 'test-results/theme-baseline');

async function main() {
  fs.mkdirSync(outDir, { recursive: true });
  const browser = await chromium.launch();

  let done = 0;
  const total = THEMES.length * MODES.length * SCREENS.length;

  for (const theme of THEMES) {
    for (const mode of MODES) {
      const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
      const page = await context.newPage();

      await page.addInitScript(
        ([themeKey, modeKey]) => {
          if (themeKey) localStorage.setItem(`ew_${themeKey}`, '1');
          if (modeKey === 'dark') localStorage.setItem('ew_theme', 'dark');
        },
        [theme, mode],
      );

      for (const screen of SCREENS) {
        await page.goto(`${baseURL}/index.html${screen.hash}`, { waitUntil: 'networkidle' });
        // eslint-disable-next-line no-undef -- runs in the browser via page.evaluate, not Node
        await page.evaluate(() => document.getElementById('ob-overlay')?.remove());
        await page.waitForTimeout(150); // let CSS custom-property transitions/animations settle

        const themeLabel = theme ?? 'none';
        const fileName = `${themeLabel}_${mode}_${screen.name}.png`;
        await page.screenshot({ path: path.join(outDir, fileName), fullPage: false });

        done += 1;
        console.log(`[${done}/${total}] ${fileName}`);
      }

      await context.close();
    }
  }

  await browser.close();
  console.log(`\nDone. Screenshots in ${outDir}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
