import { describe, it, expect, beforeEach } from 'vitest';
import {
  loadAiStoryCacheList,
  addAiStoryToCache,
  AI_STORY_CACHE_KEY,
  AI_STORY_CACHE_KEY_V1,
  MAX_CACHED_STORIES,
  type AiStoryCacheEntry,
} from '../../js/modes/story.tsx';

describe('AI story cache (list, v2)', () => {
  beforeEach(() => {
    localStorage.removeItem(AI_STORY_CACHE_KEY);
    localStorage.removeItem(AI_STORY_CACHE_KEY_V1);
  });

  it('returns an empty list when nothing is cached yet', () => {
    expect(loadAiStoryCacheList()).toEqual([]);
  });

  it('addAiStoryToCache() prepends the newest story first', () => {
    addAiStoryToCache({ title: 'First', text: 'a', level: 'A2', learnLang: 'es', knowLang: 'en' });
    const updated = addAiStoryToCache({
      title: 'Second',
      text: 'b',
      level: 'B1',
      learnLang: 'es',
      knowLang: 'en',
    });
    expect(updated.map((e) => e.title)).toEqual(['Second', 'First']);
  });

  it('persists across a fresh load', () => {
    addAiStoryToCache({ title: 'Saved', text: 'x', level: 'A1', learnLang: 'de', knowLang: 'en' });
    expect(loadAiStoryCacheList().map((e) => e.title)).toEqual(['Saved']);
  });

  it('a new story no longer silently evicts a previous one for a DIFFERENT language pair (the bug this fixes)', () => {
    addAiStoryToCache({ title: 'Spanish tale', text: 'a', level: 'A2', learnLang: 'es', knowLang: 'en' });
    addAiStoryToCache({ title: 'German tale', text: 'b', level: 'A2', learnLang: 'de', knowLang: 'en' });
    const list = loadAiStoryCacheList();
    expect(list.some((e) => e.title === 'Spanish tale')).toBe(true);
    expect(list.some((e) => e.title === 'German tale')).toBe(true);
  });

  it('evicts the oldest entry once MAX_CACHED_STORIES is exceeded', () => {
    for (let i = 0; i < MAX_CACHED_STORIES + 3; i++) {
      addAiStoryToCache({
        title: `Story ${i}`,
        text: 't',
        level: 'A2',
        learnLang: 'es',
        knowLang: 'en',
      });
    }
    const list = loadAiStoryCacheList();
    expect(list.length).toBe(MAX_CACHED_STORIES);
    // Newest (highest index, added last) survives; oldest 3 (0,1,2) evicted.
    expect(list[0].title).toBe(`Story ${MAX_CACHED_STORIES + 2}`);
    expect(list.some((e) => e.title === 'Story 0')).toBe(false);
    expect(list.some((e) => e.title === 'Story 1')).toBe(false);
    expect(list.some((e) => e.title === 'Story 2')).toBe(false);
  });

  it('assigns each cached entry a unique id', () => {
    addAiStoryToCache({ title: 'A', text: 'a', level: 'A2', learnLang: 'es', knowLang: 'en' });
    addAiStoryToCache({ title: 'B', text: 'b', level: 'A2', learnLang: 'es', knowLang: 'en' });
    const [first, second] = loadAiStoryCacheList();
    expect(first.id).not.toBe(second.id);
  });

  it('migrates a v1 single-entry cache into the v2 list on first read, then removes the old key', () => {
    const v1Entry = { title: 'Legacy story', text: 'old text', level: 'B1', learnLang: 'fr', knowLang: 'ua' };
    localStorage.setItem(AI_STORY_CACHE_KEY_V1, JSON.stringify(v1Entry));

    const list = loadAiStoryCacheList();
    expect(list.length).toBe(1);
    expect(list[0]).toMatchObject(v1Entry);
    expect(list[0].id).toBeTruthy();
    expect(localStorage.getItem(AI_STORY_CACHE_KEY_V1)).toBeNull();

    // The migration itself is persisted, not just returned in-memory.
    expect(loadAiStoryCacheList().length).toBe(1);
  });

  it('does not attempt a v1 migration when a v2 list already exists', () => {
    addAiStoryToCache({ title: 'v2 story', text: 'x', level: 'A2', learnLang: 'es', knowLang: 'en' });
    localStorage.setItem(
      AI_STORY_CACHE_KEY_V1,
      JSON.stringify({ title: 'stale v1', text: 'y', level: 'A2', learnLang: 'es', knowLang: 'en' }),
    );
    const list = loadAiStoryCacheList();
    expect(list.map((e: AiStoryCacheEntry) => e.title)).toEqual(['v2 story']);
  });

  it('returns an empty list (not a throw) when the stored JSON is corrupt', () => {
    localStorage.setItem(AI_STORY_CACHE_KEY, '{not valid json');
    expect(loadAiStoryCacheList()).toEqual([]);
  });
});
