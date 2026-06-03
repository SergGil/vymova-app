import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  // GitHub Pages serves from /english-words-app/ — use relative base so
  // assets work both locally and on any subdirectory deployment.
  base: './',
  build: {
    outDir: 'dist',
    // top-level await (main.ts) requires esnext
    target: 'esnext',
    rollupOptions: {
      // Key 'index' → Vite outputs dist/index.html (GitHub Pages default)
      input: { index: 'flashcard_trainer_starwars.html' },
    },
  },
  server: {
    open: '/flashcard_trainer_starwars.html',
    port: 5173,
  },
});
