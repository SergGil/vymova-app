import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// In GitHub Actions the base is the repo subpath; locally assets load from root.
const base = process.env.GITHUB_ACTIONS ? '/vymova-app/' : '/';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  base,
  plugins: [
    react(),
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
  ],
  build: {
    outDir: 'dist',
    target: 'esnext',
    rollupOptions: {
      output: {
        // data/words.js (~2.5MB, the base EN/UA dictionary) is statically
        // imported from ~45 files across js/modes and js/features, so it
        // can't be made a lazy import() the way data/words_<lang>.js is
        // (see mode-utils.ts's LANG_LOADERS) — the very first card the app
        // renders needs it, so there's no "later" to defer it to. Left
        // alone, Rollup bundles it into whichever chunk first reaches it,
        // which means every app-code-only deploy reshuffles that chunk's
        // hash and forces users to re-download the dictionary even though
        // its content didn't change. Force it into its own chunk instead,
        // so its content hash — and the browser/service-worker cache entry
        // for it — stays stable across deploys that don't touch word data.
        manualChunks(id) {
          if (id.includes('/data/words.js')) return 'words-base';
        },
      },
    },
  },
  server: {
    port: 5173,
  },
  test: {
    environment: 'happy-dom',
    globals: true,
    pool: 'forks',
    include: ['tests/**/*.test.ts', 'tests/**/*.test.tsx'],
    setupFiles: ['./tests/setup.ts'],
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
      include: ['js/core/**', 'js/features/**', 'data/**'],
    },
  },
});
