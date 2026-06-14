import { describe, it, expect, beforeEach, vi } from 'vitest';

vi.mock('../../js/core/card-engine.ts', () => ({ render: vi.fn() }));

describe('bookmarks.ts', () => {
  beforeEach(async () => {
    // Flush any pending dynamic imports (e.g. i18n.ts's async deck-filter
    // _refreshRangeOptions() call) triggered by the previous test, so they
    // don't mutate #sel-range mid-test.
    await vi.dynamicImportSettled();
    await new Promise(resolve => setTimeout(resolve, 0));
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

  it('inserts a "bookmarks" option after "srs" in #sel-range', async () => {
    document.body.innerHTML = `
      <select id="sel-range">
        <option value="all">All</option>
        <option value="srs">SRS</option>
        <option value="known">Known</option>
      </select>
    `;
    await import('../../js/features/bookmarks.ts');
    await vi.dynamicImportSettled();
    // Let the .then() chains of those dynamic imports (e.g. i18n.ts's
    // deck-filter._refreshRangeOptions() call) finish running too.
    await new Promise(resolve => setTimeout(resolve, 0));
    const sel = document.getElementById('sel-range') as HTMLSelectElement;
    const opt = sel.querySelector('option[value="bookmarks"]') as HTMLOptionElement;
    expect(opt).not.toBeNull();
    const values = Array.from(sel.options).map(o => o.value);
    expect(values.indexOf('bookmarks')).toBe(values.indexOf('srs') + 1);
  });

  it('appends the "bookmarks" option when #sel-range has no "srs" option', async () => {
    document.body.innerHTML = `<select id="sel-range"><option value="all">All</option></select>`;
    await import('../../js/features/bookmarks.ts');
    const sel = document.getElementById('sel-range') as HTMLSelectElement;
    const values = Array.from(sel.options).map(o => o.value);
    // i18n.ts may asynchronously trigger deck-filter's _refreshRangeOptions(),
    // which appends its own numeric range options later — only assert on the
    // "all"/"bookmarks" pair that bookmarks.ts itself is responsible for.
    expect(values.slice(0, 2)).toEqual(['all', 'bookmarks']);
  });

  it('does not insert a duplicate "bookmarks" option', async () => {
    document.body.innerHTML = `
      <select id="sel-range">
        <option value="srs">SRS</option>
        <option value="bookmarks">Bookmarks</option>
      </select>
    `;
    await import('../../js/features/bookmarks.ts');
    const sel = document.getElementById('sel-range') as HTMLSelectElement;
    const matches = sel.querySelectorAll('option[value="bookmarks"]');
    expect(matches.length).toBe(1);
  });

  it('does nothing when #sel-range is absent', async () => {
    await expect(import('../../js/features/bookmarks.ts')).resolves.toBeDefined();
  });
});
