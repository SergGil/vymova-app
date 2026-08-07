import { test, expect } from '@playwright/test';
import { captureErrors, openApp } from './helpers.ts';

// Breadth-first coverage for the sidebar destinations that had ZERO e2e
// coverage before this file — everything except cards-home (cards-home.spec.ts),
// the 27 solo modes (modes-*.spec.ts), and duel (duel-*.spec.ts). Every page
// here is a full-screen overlay toggled by page-overlay-visibility.tsx's
// classList.toggle('open', ...) (see js/features/page-overlay-visibility.tsx) —
// not a route swap — so the pattern is: click the sidebar link, wait for the
// overlay, close it, assert no errors.
//
// Deliberately excluded:
// - translate / ai-tutor / voice-roleplay: gated behind AI_TUTOR_ENABLED
//   (js/config.ts), which is false unless VITE_AI_PROXY_URL is set — the nav
//   items themselves don't render in a default build, so there's nothing to
//   click.
// - duel: already covered by tests-e2e/duel-*.spec.ts.

// contentSelector: only needed for pages whose close button is wired by a
// bindOverlayDismiss(overlayId, closeBtnId) call at the bottom of the page's
// own lazily-imported module (grammar/idioms/lang-history/youtube/video) —
// the button itself renders eagerly (portaled from app-root.tsx), but its
// click listener only attaches once that dynamic import resolves. Clicking
// close immediately after the overlay's 'open' class appears can race that
// import and silently no-op. Pages using PageHeader's own built-in
// onClick={closePage} (achievements/learning-path/profile/settings) or
// sidebar.tsx's eagerly-wired #stats-close don't have this gap, so they
// don't need a content wait first.
const SIMPLE_PAGES = [
  { id: 'stats', navId: 'sb-stats', overlayId: 'stats-overlay', closeSelector: '#stats-close' },
  {
    id: 'achievements',
    navId: 'sb-achievements',
    overlayId: 'ach-overlay',
    closeSelector: '.page-close-btn',
  },
  {
    id: 'learning-path',
    navId: 'sb-learning-path',
    overlayId: 'lp-overlay',
    closeSelector: '.page-close-btn',
  },
  {
    id: 'grammar',
    navId: 'sb-grammar',
    overlayId: 'grammar-overlay',
    closeSelector: '#grammar-close',
    contentSelector: '.gr-nav-btn',
  },
  {
    id: 'idioms',
    navId: 'sb-idioms',
    overlayId: 'idioms-overlay',
    closeSelector: '#idioms-close',
    contentSelector: '.idioms-tab',
  },
  {
    id: 'lang-history',
    navId: 'sb-lang-history',
    overlayId: 'lang-history-overlay',
    closeSelector: '#lang-history-close',
    contentSelector: '.langhist-panel',
  },
  {
    id: 'profile',
    navId: 'sb-profile',
    overlayId: 'profile-overlay',
    closeSelector: '.page-close-btn',
  },
  {
    id: 'settings',
    navId: 'sb-settings',
    overlayId: 'settings-overlay',
    closeSelector: '.page-close-btn',
  },
];

test.describe('Sidebar pages smoke test', () => {
  for (const { id, navId, overlayId, closeSelector, contentSelector } of SIMPLE_PAGES) {
    test(`${id} opens and closes without errors`, async ({ page }) => {
      const errors = captureErrors(page);
      await openApp(page);

      await page.click(`#${navId}`);
      const overlay = page.locator(`#${overlayId}`);
      await expect(overlay).toBeVisible();
      if (contentSelector) {
        await expect(overlay.locator(contentSelector).first()).toBeVisible();
      }

      await overlay.locator(closeSelector).first().click();
      await expect(overlay).toBeHidden();

      expect(errors).toEqual([]);
    });
  }
});

// sb-youtube-player/sb-video-player sit behind the "🎬 Відео навчання"
// hover-flyout group (sidebar-nav-flyout.tsx) — its trigger must be clicked
// open before the link inside it is reachable.
const VIDEO_GROUP_PAGES = [
  {
    id: 'youtube-player',
    navId: 'sb-youtube-player',
    overlayId: 'youtube-player-overlay',
    closeSelector: '#youtube-player-close',
  },
  {
    id: 'video-player',
    navId: 'sb-video-player',
    overlayId: 'video-player-overlay',
    closeSelector: '#video-player-close',
  },
];

test.describe('Video-group pages smoke test', () => {
  for (const { id, navId, overlayId, closeSelector } of VIDEO_GROUP_PAGES) {
    test(`${id} opens and closes without errors`, async ({ page }) => {
      const errors = captureErrors(page);
      await openApp(page);

      // hover (not click) opens the flyout — sidebar-nav-flyout.tsx's
      // onTriggerClick toggles 'open' off if hover already turned it on
      // (Playwright's click() moves the mouse there first, firing
      // mouseenter's openFlyout(), so a follow-up click would immediately
      // close what hover just opened).
      await page.hover('#sb-group-video-trigger');
      await page.click(`#${navId}`);
      const overlay = page.locator(`#${overlayId}`);
      await expect(overlay).toBeVisible();
      // Same lazy-module close-button race as grammar/idioms/lang-history
      // above — wait for the page's own content mount to render before
      // trusting the close button is wired up. Scoped to `#<id>-content`
      // (not the whole overlay) so this doesn't match the eagerly-rendered
      // page-header's own close button instead.
      await expect(overlay.locator(`#${id}-content *`).first()).toBeVisible();

      await overlay.locator(closeSelector).click();
      await expect(overlay).toBeHidden();

      expect(errors).toEqual([]);
    });
  }
});

test.describe('Sidebar pages — one step deeper', () => {
  test('stats: switching the chart period changes the active button', async ({ page }) => {
    const errors = captureErrors(page);
    await openApp(page);
    await page.click('#sb-stats');
    const overlay = page.locator('#stats-overlay');
    await expect(overlay).toBeVisible();

    const btn30 = overlay.locator('[data-days="30"]');
    await btn30.click();
    await expect(btn30).toHaveClass(/active/);

    expect(errors).toEqual([]);
  });

  test('achievements: the "unlocked" filter shows nothing on a fresh profile', async ({
    page,
  }) => {
    const errors = captureErrors(page);
    await openApp(page);
    await page.click('#sb-achievements');
    const overlay = page.locator('#ach-overlay');
    await expect(overlay).toBeVisible();

    // achievements-page.tsx is lazy-loaded — .count() doesn't auto-wait like
    // toBeVisible() does, so it can race the async render and see 0. Wait
    // for the first card before trusting the count.
    await expect(overlay.locator('.ach-card').first()).toBeVisible();
    const allCount = await overlay.locator('.ach-card').count();
    expect(allCount).toBeGreaterThan(0);

    // Fresh test profile has 0 unlocked achievements — the "unlocked" tab
    // (2nd of 3: all/unlocked/locked) should filter every card out.
    await overlay.locator('.ach-filter-tab').nth(1).click();
    await expect(overlay.locator('.ach-filter-tab').nth(1)).toHaveClass(/active/);
    await expect(overlay.locator('.ach-card')).toHaveCount(0);

    expect(errors).toEqual([]);
  });

  test('grammar: selecting a topic updates the content pane', async ({ page }) => {
    const errors = captureErrors(page);
    await openApp(page);
    await page.click('#sb-grammar');
    const overlay = page.locator('#grammar-overlay');
    await expect(overlay).toBeVisible();

    const content = overlay.locator('#grammar-content');
    const before = await content.innerText();
    const secondTopic = overlay.locator('.gr-nav-btn').nth(1);
    await secondTopic.click();

    await expect(secondTopic).toHaveClass(/gr-nav-active/);
    await expect(content).not.toHaveText(before);

    expect(errors).toEqual([]);
  });

  test('idioms: search narrows the list to nothing for a nonsense query', async ({ page }) => {
    const errors = captureErrors(page);
    await openApp(page);
    await page.click('#sb-idioms');
    const overlay = page.locator('#idioms-overlay');
    await expect(overlay).toBeVisible();

    // idioms-page.tsx is lazy-loaded too — same race as achievements above.
    await expect(overlay.locator('.idiom-card').first()).toBeVisible();
    const initialCount = await overlay.locator('.idiom-card').count();
    expect(initialCount).toBeGreaterThan(0);

    await overlay.locator('.idioms-search').fill('zzznotarealidiom');
    await expect(overlay.locator('.idiom-card')).toHaveCount(0);

    expect(errors).toEqual([]);
  });

  test('profile: cycling an avatar picker enables Save', async ({ page }) => {
    const errors = captureErrors(page);
    await openApp(page);
    await page.click('#sb-profile');
    const overlay = page.locator('#profile-overlay');
    await expect(overlay).toBeVisible();

    await overlay.locator('.profile-customize-toggle').click();
    const saveBtn = overlay.locator('#profile-save-btn');
    await expect(saveBtn).toBeDisabled();

    await overlay.locator('.profile-picker-arrow').first().click();
    await expect(saveBtn).toBeEnabled();

    expect(errors).toEqual([]);
  });

  test('settings: toggling dark mode flips body.dark', async ({ page }) => {
    const errors = captureErrors(page);
    await openApp(page);
    await page.click('#sb-settings');
    const overlay = page.locator('#settings-overlay');
    await expect(overlay).toBeVisible();

    const body = page.locator('body');
    const wasDark = await body.evaluate((el) => el.classList.contains('dark'));

    // #set-theme is the row wrapper — the actual interactive control is the
    // shadcn Switch inside it (its own id lands on a visually-hidden mirror
    // <input>, not the visible role="switch" element).
    await overlay.locator('#set-theme [role="switch"]').click();

    if (wasDark) {
      await expect(body).not.toHaveClass(/dark/);
    } else {
      await expect(body).toHaveClass(/dark/);
    }

    expect(errors).toEqual([]);
  });
});
