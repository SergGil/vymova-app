import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests-e2e',
  timeout: 30_000,
  fullyParallel: true,
  reporter: 'list',
  use: {
    baseURL: 'http://localhost:5183',
  },
  webServer: {
    command: 'npx vite --port 5183 --strictPort',
    url: 'http://localhost:5183/flashcard_trainer_starwars.html',
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
  },
});
