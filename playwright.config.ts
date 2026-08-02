import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests-e2e',
  timeout: 30_000,
  fullyParallel: true,
  reporter: 'list',
  use: {
    baseURL: 'http://localhost:5183',
  },
  projects: [
    // Default: everything runs on Chromium, same as before `projects` was
    // introduced here — e2e.yml's `--workers=1` full run stays on this one.
    { name: 'chromium', use: { browserName: 'chromium' } },
    // A thin cross-browser smoke check, WebKit-only, scoped to the one spec
    // that already covers breadth (every sidebar page) rather than depth —
    // run on a schedule (.github/workflows/e2e-webkit-smoke.yml), not on
    // every push, since it's a compatibility spot-check, not a merge gate.
    {
      name: 'webkit-smoke',
      use: { browserName: 'webkit' },
      testMatch: /pages-smoke\.spec\.ts/,
    },
  ],
  webServer: [
    {
      command: 'npx vite --port 5183 --strictPort',
      url: 'http://localhost:5183/index.html',
      reuseExistingServer: !process.env.CI,
      // All 3 webServer entries here start concurrently, and CI runners are
      // slower/more contended than a dev machine — 30s was too tight there.
      timeout: 60_000,
    },
    // tests-e2e/duel-realtime.spec.ts drives two real tabs through an actual
    // duel over Firebase — the RTDB emulator gives it a real read/write/rules
    // round-trip without writing throwaway rooms into the prod project every
    // other spec here talks to (see duel-room.spec.ts, which does hit prod).
    // "demo-" project id = offline mode, no GCP credentials needed, works in CI.
    {
      command: 'npx firebase-tools emulators:start --only database --project demo-vymova-e2e',
      url: 'http://127.0.0.1:9000/.json?ns=demo-vymova-e2e',
      reuseExistingServer: !process.env.CI,
      timeout: 90_000,
    },
    // Separate port/instance from the 5183 server above (which stays pointed
    // at prod), so a dev running `npm run test:e2e` never has to toggle a
    // flag depending on which spec they're running — each spec's helper just
    // points at the port it needs.
    {
      command: 'npx vite --port 5184 --strictPort',
      url: 'http://localhost:5184/index.html',
      reuseExistingServer: !process.env.CI,
      timeout: 60_000,
      env: {
        VITE_FIREBASE_DB_URL: '/emu-db',
      },
    },
  ],
});
