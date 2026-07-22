import { describe, it, expect, beforeEach, vi } from 'vitest';

vi.mock('../../js/core/card-engine.ts', () => ({ render: vi.fn() }));

describe('bookmarks.ts', () => {
  beforeEach(async () => {
    // Flush any pending dynamic imports (e.g. i18n.ts's async
    // card-engine.ts render() call) triggered by the previous test, so they
    // don't mutate #sel-range mid-test.
    await vi.dynamicImportSettled();
    await new Promise((resolve) => setTimeout(resolve, 0));
    localStorage.clear();
    document.body.innerHTML = '';
    vi.resetModules();
  });

  it('starts empty and reports unbookmarked words', async () => {
    const { isBookmarked, getBookmarks } = await import('../../js/features/bookmarks.ts');
    expect(isBookmarked('abandon')).toBe(false);
    expect(getBookmarks().size).toBe(0);
  });

  it('toggleBookmark adds and removes a word, persisting to localStorage', async () => {
    const { isBookmarked, toggleBookmark } = await import('../../js/features/bookmarks.ts');

    expect(toggleBookmark('abandon')).toBe(true);
    expect(isBookmarked('abandon')).toBe(true);
    expect(JSON.parse(localStorage.getItem('ew_bookmarks')!)).toEqual(['abandon']);

    expect(toggleBookmark('abandon')).toBe(false);
    expect(isBookmarked('abandon')).toBe(false);
    expect(JSON.parse(localStorage.getItem('ew_bookmarks')!)).toEqual([]);
  });

  it('loads existing bookmarks from localStorage on init', async () => {
    localStorage.setItem('ew_bookmarks', JSON.stringify(['cat', 'dog']));
    const { isBookmarked, getBookmarks } = await import('../../js/features/bookmarks.ts');
    expect(isBookmarked('cat')).toBe(true);
    expect(isBookmarked('dog')).toBe(true);
    expect(getBookmarks().size).toBe(2);
  });

  it('starts empty if localStorage contains invalid JSON', async () => {
    localStorage.setItem('ew_bookmarks', 'not json');
    const { getBookmarks } = await import('../../js/features/bookmarks.ts');
    expect(getBookmarks().size).toBe(0);
  });
});
