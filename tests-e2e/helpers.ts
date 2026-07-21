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
// RTDB emulator instead of prod — see tests-e2e/duel-realtime.spec.ts and
// duel-forfeit.spec.ts, the only specs that need a real two-client Firebase
// round-trip.
export async function openEmuApp(page: Page): Promise<void> {
  await page.goto('http://localhost:5184/index.html', { waitUntil: 'networkidle' });
  await page.evaluate(() => {
    document.getElementById('ob-overlay')?.remove();
  });
}

// duel-types.ts's ROOM_SIZE (kept as a plain literal here rather than
// imported — these are Playwright specs, not part of the app bundle).
const ROOM_SIZE = 10;

/** Blindly answers every question in a live duel (mode default is multiple-
 * choice — see duel-lobby-store.ts's default sel.mode) — used where the e2e
 * only needs the match to actually finish, not who wins. */
export async function answerAllQuestions(page: Page): Promise<void> {
  for (let i = 0; i < ROOM_SIZE; i++) {
    const option = page.locator('.quiz-option').first();
    await option.waitFor({ state: 'visible', timeout: 15_000 });
    await option.click();
    // Advance timer is 600ms (correct) or 1200ms (wrong) before the next
    // question renders — pad past the slower case.
    await page.waitForTimeout(1400);
  }
}
