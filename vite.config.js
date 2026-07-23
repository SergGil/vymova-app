import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, resolve } from 'node:path';

// public/sw.js's cache-invalidation strategy hinges entirely on its own
// `CACHE` version string changing between deploys: the SW-update algorithm
// only reacts to sw.js's *bytes* differing from what's already registered,
// and cache-first-with-background-refresh means an already-active SW with a
// stale cache otherwise keeps serving old JS/CSS/data indefinitely (a
// forgotten manual `CACHE` bump = no update ever detected). This plugin
// removes the human "don't forget" step: it hashes every emitted chunk/asset
// filename (which already carry Rollup's own content hashes, including the
// pinned data chunks from build.rollupOptions.output.manualChunks below) and
// writes that as sw.js's CACHE version — so ANY build output change forces a
// genuinely new SW version, deterministically, with no bump to remember.
// Exported (not just used below) so tests/build/sw-version-plugin.test.ts can
// exercise writeBundle() directly against a scratch directory, instead of
// only being provable via a full `vite build` (slow, and the version string
// this plugin computes is otherwise never asserted on anywhere).
export function swVersionPlugin() {
  return {
    name: 'sw-version',
    apply: 'build',
    writeBundle(options, bundle) {
      const outDir = options.dir ?? 'dist';
      const swPath = join(outDir, 'sw.js');
      if (!existsSync(swPath)) return; // publicDir copy didn't happen (e.g. a partial/lib build)
      const fileNames = Object.keys(bundle).sort();
      const hash = createHash('sha256').update(fileNames.join('\n')).digest('hex').slice(0, 12);
      const swSrc = readFileSync(swPath, 'utf8');
      const versioned = swSrc.replace(/var CACHE = '[^']*';/, `var CACHE = 'ew-${hash}';`);
      if (versioned === swSrc) {
        this.error('sw-version plugin: "var CACHE = \'...\';" not found in public/sw.js — update the regex above if that line changed shape.');
      }
      writeFileSync(swPath, versioned);
    },
  };
}

export default defineConfig(({ command }) => ({
  root: '.',
  publicDir: 'public',
  // Only the production build is deployed under the /vymova-app/ GitHub
  // Pages subpath — the dev server (used locally and by the e2e webServers
  // in CI) always serves from root. This must key off Vite's own `command`,
  // not a GITHUB_ACTIONS env check: that var is set for every Actions job,
  // including the e2e job's `vite` dev servers, which made them serve
  // everything under /vymova-app/ and 302 on the `/index.html` health-check
  // Playwright polls — the dev server never looked "ready" in CI.
  base: command === 'build' ? '/vymova-app/' : '/',
  plugins: [
    react(),
    tailwindcss(),
    // SPA fallback for dev server: rewrite unknown paths to the entry HTML so
    // React Router can handle client-side routes (e.g. /grammar) on page reload.
    {
      name: 'spa-fallback',
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          const url = req.url ?? '/';
          if (!url.includes('.') && !url.startsWith('/@') && !url.startsWith('/node_modules')) {
            req.url = '/index.html';
          }
          next();
        });
      },
    },
    swVersionPlugin(),
  ],
  resolve: {
    alias: {
      // process.cwd() rather than import.meta.url-derived __dirname: this
      // config module is also imported directly by
      // tests/build/sw-version-plugin.test.ts (to exercise swVersionPlugin
      // without a full `vite build`), and under that loader import.meta.url
      // isn't a valid file:// URL — cwd is always the project root for both
      // real Vite invocations and vitest, so it's the reliable option here.
      '@': resolve(process.cwd(), 'src'),
    },
  },
  build: {
    outDir: 'dist',
    target: 'esnext',
    rollupOptions: {
      // Fails the build instead of just warning on Rollup's CIRCULAR_CHUNK —
      // exactly the warning code behind the real "Circular chunk:
      // render-game-bar -> voice -> render-game-bar" production crash the
      // onlyExplicitManualChunks comment below describes (a hub module like
      // mode-utils.ts/duel.ts/game.ts gaining a stray import back into it).
      // Deliberately NOT the broader CIRCULAR_DEPENDENCY code: that one
      // fires on ordinary ES-module import cycles (this codebase has
      // several harmless ones, e.g. i18n.ts <-> deck-filter.tsx, that never
      // reach the chunk-graph stage) and would make this tripwire fail on
      // things that have never actually broken anything. CIRCULAR_CHUNK
      // specifically means Rollup couldn't linearize two chunks' module-init
      // order — that's the one that crashes at runtime with "Cannot access
      // 'X' before initialization".
      onwarn(warning, warn) {
        if (warning.code === 'CIRCULAR_CHUNK') {
          throw new Error(`Circular chunk dependency detected — this crashed prod before:\n${warning.message}`);
        }
        warn(warning);
      },
      output: {
        // data/words-data/words.js (~2.5MB, the base EN/UA dictionary) is statically
        // imported from ~45 files across js/modes and js/features, so it
        // can't be made a lazy import() the way data/words-data/words_<lang>.js is
        // (see mode-utils.ts's LANG_LOADERS) — the very first card the app
        // renders needs it, so there's no "later" to defer it to. Left
        // alone, Rollup bundles it into whichever chunk first reaches it,
        // which means every app-code-only deploy reshuffles that chunk's
        // hash and forces users to re-download the dictionary even though
        // its content didn't change. Force it into its own chunk instead,
        // so its content hash — and the browser/service-worker cache entry
        // for it — stays stable across deploys that don't touch word data.
        //
        // Same reasoning applies to these two: data/categories.js (519KB)
        // and data/cefr.ts (182KB) are each eagerly reached from core
        // card-rendering files (card-meta.tsx, tag-filter-select.tsx, ...)
        // that run on the very first card too, so they're just as
        // unavoidably eager as words.js itself.
        //
        // data/senses.ts and data/grammar.ts used to need the same
        // treatment (they held the actual per-language data), but as of
        // docs/architecture-assessment.md p.6's per-language split, both
        // are now type-only (SenseEntry / GSection·GrammarRule·GrammarCategory)
        // — every remaining reference to them is an `import type`, which
        // Vite/esbuild erases entirely, so they no longer produce a chunk to
        // pin at all. The actual per-language data lives in
        // data/senses-data/senses_XX.ts and data/grammar-data/grammar_XX.ts,
        // lazy `import()`-ed via js/features/senses-loader.ts and
        // grammar-loader.ts (mirroring data/words-data/words_XX.js's existing pattern
        // in mode-utils.ts) — Rollup already content-hashes those per-file,
        // same stable-cache benefit as manualChunks gives the four below,
        // without needing to be listed here.
        manualChunks(id) {
          if (id.includes('/data/words-data/words.js')) return 'words-base';
          if (id.includes('/data/categories.js')) return 'categories-data';
          if (id.includes('/data/cefr.ts')) return 'cefr-data';
        },
        // Rollup defaults this to true once a custom manualChunks function is
        // present, which forces every OTHER module (everything this function
        // returns undefined for) through its own automatic splitting pass —
        // that pass produced a genuine circular chunk dependency between an
        // auto-generated "render-game-bar" chunk and the voice/notifications/
        // cloud-sync chunks ("Circular chunk: render-game-bar -> voice ->
        // render-game-bar"), which crashed at runtime with "Cannot access
        // 'X' before initialization" since the two chunks' module-init order
        // couldn't be resolved. false restores Rollup's normal
        // (non-onlyExplicit) automatic chunking for everything not pinned
        // above, which doesn't hit this failure mode.
        onlyExplicitManualChunks: false,
      },
    },
  },
  server: {
    port: 5173,
    proxy: {
      // Lets duel-firebase.ts's DB_URL be set to the relative '/emu-db'
      // (via VITE_FIREBASE_DB_URL) and still work with a plain fetch(): the
      // app builds URLs as `${DB_URL}${path}.json` with no query string, but
      // the RTDB emulator's REST API requires a `?ns=<project>` query param
      // to pick a database — this rewrite appends it, so app code itself
      // never needs to know it's talking to the emulator. Only intercepts
      // requests actually prefixed '/emu-db' (only tests-e2e/duel-realtime.spec.ts
      // sets that env var), so normal dev/build traffic against prod is untouched.
      '/emu-db': {
        target: 'http://127.0.0.1:9000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/emu-db/, '') + '?ns=demo-vymova-e2e',
      },
    },
  },
  test: {
    environment: 'happy-dom',
    globals: true,
    pool: 'forks',
    include: ['tests/**/*.test.ts', 'tests/**/*.test.tsx'],
    setupFiles: ['./tests/setup.ts'],
    // General safety net for ordinary flaky patterns (timing-sensitive
    // assertions, async races) — a genuinely broken test still fails on
    // every retry, so this can't hide a real bug.
    //
    // Note: this does NOT fix the known, currently-unresolved vitest/vite-node
    // module-initialization flakiness (see vitest-dev/vitest#8815, #9249):
    // in a full-suite run with hundreds of files, module load order can very
    // rarely race such that a top-level binding (e.g. a `let` reachable via
    // two different import paths) reads as uninitialized for one file, even
    // though the exact same code passes on a rerun. Once that happens the
    // binding stays broken for the rest of that worker process's life, so
    // retrying the *test* doesn't help — only a fresh `npm test` invocation
    // (a new process) does. Confirmed by re-running unchanged code
    // back-to-back and getting different pass/fail results.
    retry: 1,
    // happy-dom tears a test file's `window` down before some timer React's
    // scheduler queued internally (e.g. a toast's setTimeout/rAF chain) gets
    // to fire; the callback then throws "window is not defined" from deep
    // inside react-dom/scheduler internals, in whichever test happens to be
    // running at that moment. All tests still pass — it's test-env teardown
    // noise, not a real failure — so don't let it flip the run's exit code.
    onUnhandledError(error) {
      const stack = error.stack ?? '';
      if (error.message?.includes('window is not defined') && /react-dom|scheduler/.test(stack)) {
        return false;
      }
    },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: ['js/core/**', 'js/features/**', 'js/modes/**', 'src/**', 'data/**', 'worker/src/**'],
      exclude: ['src/global.d.ts', 'src/main.ts', 'src/types.ts'],
    },
  },
}));
