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
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: ['js/core/**', 'js/features/**', 'data/**'],
    },
  },
});
