import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  base: './',
  plugins: [react()],
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
    pool: 'forks',
    include: ['tests/**/*.test.ts', 'tests/**/*.test.tsx'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: ['js/core/**', 'js/features/**', 'data/**'],
    },
  },
});
