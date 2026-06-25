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
