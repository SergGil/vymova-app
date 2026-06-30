import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { _imgCache, _getPixabayKey, resetImgCache, loadWikiImage } from '../../js/core/images.ts';

class MockXHR {
  static instances: MockXHR[] = [];
  status = 0;
  responseText = '';
  timeout = 0;
  url = '';
  onload: (() => void) | null = null;
  onerror: (() => void) | null = null;
  ontimeout: (() => void) | null = null;
  open(_method: string, url: string): void {
    this.url = url;
    MockXHR.instances.push(this);
  }
  send(): void {}
}

describe('images.ts', () => {
  beforeEach(() => {
    localStorage.clear();
    Object.keys(_imgCache).forEach((k) => delete _imgCache[k]);
    MockXHR.instances = [];
    vi.stubGlobal('XMLHttpRequest', MockXHR);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  describe('_getPixabayKey()', () => {
    it('returns empty string when no key is stored', () => {
      expect(_getPixabayKey()).toBe('');
    });

    it('returns the stored key', () => {
      localStorage.setItem('ew_pixabay_key', 'abc123');
      expect(_getPixabayKey()).toBe('abc123');
    });
  });

  describe('resetImgCache()', () => {
    it('clears the in-memory cache and localStorage', () => {
      _imgCache['hello'] = 'http://example.com/hello.png';
      localStorage.setItem('ew_wiki_ts', JSON.stringify({ hello: Date.now() }));
      resetImgCache();
      expect(Object.keys(_imgCache).length).toBe(0);
      expect(localStorage.getItem('ew_wiki_ts')).toBeNull();
    });
  });

  describe('loadWikiImage()', () => {
    it('returns the cached url immediately without fetching', () => {
      _imgCache['cat'] = 'http://example.com/cat.png';
      const cb = vi.fn();
      loadWikiImage('cat', cb);
      expect(cb).toHaveBeenCalledWith('cat', 'http://example.com/cat.png');
      expect(MockXHR.instances.length).toBe(0);
    });

    it('falls back to wiki when pixabay has no key', () => {
      const cb = vi.fn();
      loadWikiImage('dog', cb);
      // pixabay request short-circuits (no key) so only the wiki XHR is created
      expect(MockXHR.instances.length).toBe(1);
      expect(MockXHR.instances[0].url).toContain('wikipedia.org');

      MockXHR.instances[0].status = 200;
      MockXHR.instances[0].responseText = JSON.stringify({
        query: { pages: { '1': { thumbnail: { source: 'http://example.com/dog.png' } } } },
      });
      MockXHR.instances[0].onload!();

      expect(cb).toHaveBeenCalledWith('dog', 'http://example.com/dog.png');
      expect(_imgCache['dog']).toBe('http://example.com/dog.png');
    });

    it('uses the pixabay result when available', () => {
      localStorage.setItem('ew_pixabay_key', 'mykey');
      const cb = vi.fn();
      loadWikiImage('bird', cb);
      expect(MockXHR.instances.length).toBe(1);
      expect(MockXHR.instances[0].url).toContain('pixabay.com');

      MockXHR.instances[0].status = 200;
      MockXHR.instances[0].responseText = JSON.stringify({
        hits: [{ webformatURL: 'http://example.com/bird.png' }],
      });
      MockXHR.instances[0].onload!();

      expect(cb).toHaveBeenCalledWith('bird', 'http://example.com/bird.png');
      expect(_imgCache['bird']).toBe('http://example.com/bird.png');
    });

    it('falls back to wiki when pixabay returns no hits', () => {
      localStorage.setItem('ew_pixabay_key', 'mykey');
      const cb = vi.fn();
      loadWikiImage('fish', cb);
      expect(MockXHR.instances.length).toBe(1);

      MockXHR.instances[0].status = 200;
      MockXHR.instances[0].responseText = JSON.stringify({ hits: [] });
      MockXHR.instances[0].onload!();

      expect(MockXHR.instances.length).toBe(2);
      expect(MockXHR.instances[1].url).toContain('wikipedia.org');

      MockXHR.instances[1].status = 200;
      MockXHR.instances[1].responseText = JSON.stringify({ query: { pages: {} } });
      MockXHR.instances[1].onload!();

      expect(cb).toHaveBeenCalledWith('fish', null);
      expect(_imgCache['fish']).toBeNull();
    });

    it('passes null on xhr error', () => {
      const cb = vi.fn();
      loadWikiImage('mouse', cb);
      MockXHR.instances[0].onerror!();
      expect(cb).toHaveBeenCalledWith('mouse', null);
    });
  });
});
