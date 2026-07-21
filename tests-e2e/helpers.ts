import type { Page } from '@playwright/test';

/** Open the app and dismiss the first-run onboarding overlay. */
export async function openApp(page: Page): Promise<void> {
  await page.goto('/index.html', { waitUntil: 'networkidle' });
  await page.evaluate(() => {
    document.getElementById('ob-overlay')?.remove();
  });
}

// Separate vite instance (playwright.config.ts's 5184 webServer) built with
// VITE_FIREBASE_DB_URL=/emu-db, so duel-firebase.ts's DB_URL points at the
// RTDB emulator instead of prod — see tests-e2e/duel-realtime.spec.ts, the
// only spec that needs a real two-client Firebase round-trip.
export async function openEmuApp(page: Page): Promise<void> {
  await page.goto('http://localhost:5184/index.html', { waitUntil: 'networkidle' });
  await page.evaluate(() => {
    document.getElementById('ob-overlay')?.remove();
  });
}
