import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  base: './',
  build: {
    outDir: 'dist',
    target: 'esnext',
    rollupOptions: {
      input: { index: 'flashcard_trainer_starwars.html' },
    },
  },
  server: {
    open: '/flashcard_trainer_starwars.html',
    port: 5173,
  },
  test: {
    environment: 'happy-dom',
    globals: true,
    pool: 'vmThreads',
    include: ['tests/**/*.test.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: ['js/core/**', 'js/features/**', 'data/**'],
    },
  },
});
