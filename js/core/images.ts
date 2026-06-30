// Vymova — js/core/images.ts
// Image loading with TypeScript types

// ── In-memory cache ───────────────────────────────────────────
export let _imgCache: Record<string, string | null> = {};
try {
  _imgCache = JSON.parse(localStorage.getItem('ew_wiki') ?? '{}');
} catch (e) {
  console.warn('[imgCache] Load failed:', (e as Error).message);
}

const IMG_TTL_MS = 8 * 3600 * 1000;

let _imgCacheTs: Record<string, number> = {};
try {
  _imgCacheTs = JSON.parse(localStorage.getItem('ew_wiki_ts') ?? '{}');
} catch (e) {}

function _saveImgTs(word: string): void {
  _imgCacheTs[word] = Date.now();
  const keys = Object.keys(_imgCacheTs);
  if (keys.length > 1200) {
    keys
      .sort((a, b) => _imgCacheTs[a] - _imgCacheTs[b])
      .slice(0, 200)
      .forEach((k) => delete _imgCacheTs[k]);
  }
  try {
    localStorage.setItem('ew_wiki_ts', JSON.stringify(_imgCacheTs));
  } catch (e) {}
}

function _isImgExpired(word: string): boolean {
  const ts = _imgCacheTs[word];
  if (!ts) return false;
  return Date.now() - ts > IMG_TTL_MS;
}

// ── IndexedDB ─────────────────────────────────────────────────
export let _idb: IDBDatabase | null = null;

(function () {
  if (!window.indexedDB) return;
  const req = indexedDB.open('ew-img-v1', 1);
  req.onupgradeneeded = (e) =>
    (e.target as IDBOpenDBRequest).result.createObjectStore('imgs', { keyPath: 'w' });
  req.onsuccess = (e) => {
    _idb = (e.target as IDBOpenDBRequest).result;
    const cur = _idb.transaction('imgs', 'readonly').objectStore('imgs').openCursor();
    cur.onsuccess = (ev) => {
      const c = (ev.target as IDBRequest<IDBCursorWithValue>).result;
      if (c) {
        if (!Object.prototype.hasOwnProperty.call(_imgCache, c.value.w)) {
          _imgCache[c.value.w] = c.value.u as string;
        }
        c.continue();
      }
    };
  };
  req.onerror = () => {
    _idb = null;
  };
})();

function _idbSet(word: string, url: string | null): void {
  if (!_idb) return;
  try {
    _idb.transaction('imgs', 'readwrite').objectStore('imgs').put({ w: word, u: url });
  } catch (e) {}
}

function _saveImgCache(): void {
  if (_idb) return;
  const keys = Object.keys(_imgCache);
  if (keys.length > 800) keys.slice(0, keys.length - 800).forEach((k) => delete _imgCache[k]);
  try {
    localStorage.setItem('ew_wiki', JSON.stringify(_imgCache));
  } catch (e) {}
}

// ── Public helpers ────────────────────────────────────────────
export function _getPixabayKey(): string {
  return localStorage.getItem('ew_pixabay_key') ?? '';
}

export function resetImgCache(): void {
  Object.keys(_imgCache).forEach((k) => delete _imgCache[k]);
  Object.keys(_imgCacheTs).forEach((k) => delete _imgCacheTs[k]);
  try {
    localStorage.removeItem('ew_wiki_ts');
  } catch (e) {}
  _saveImgCache();
  if (_idb)
    try {
      _idb.transaction('imgs', 'readwrite').objectStore('imgs').clear();
    } catch (e) {}
}

// ── Fetch helpers ─────────────────────────────────────────────
function _fetchPixabay(word: string, cb: (url: string | null) => void): void {
  const key = _getPixabayKey();
  if (!key) {
    cb(null);
    return;
  }
  const xhr = new XMLHttpRequest();
  xhr.open(
    'GET',
    `https://pixabay.com/api/?key=${encodeURIComponent(key)}&q=${encodeURIComponent(word)}&image_type=photo&per_page=3&safesearch=true&lang=en&min_width=100&min_height=100`,
    true,
  );
  xhr.timeout = 5000;
  xhr.onload = () => {
    let url: string | null = null;
    if (xhr.status === 200) {
      try {
        const d = JSON.parse(xhr.responseText) as { hits: Array<{ webformatURL: string }> };
        if (d.hits?.length) url = d.hits[0].webformatURL;
      } catch (e) {}
    }
    cb(url);
  };
  xhr.onerror = xhr.ontimeout = () => cb(null);
  xhr.send();
}

function _fetchWiki(word: string, cb: (url: string | null) => void): void {
  const xhr = new XMLHttpRequest();
  xhr.open(
    'GET',
    `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(word)}&prop=pageimages&format=json&origin=*&pithumbsize=200&gsrlimit=5`,
    true,
  );
  xhr.timeout = 5000;
  xhr.onload = () => {
    let url: string | null = null;
    if (xhr.status === 200) {
      try {
        const pages = (
          JSON.parse(xhr.responseText) as {
            query: { pages: Record<string, { thumbnail?: { source: string } }> };
          }
        ).query.pages;
        for (const id in pages) {
          if (pages[id].thumbnail) {
            url = pages[id].thumbnail!.source;
            break;
          }
        }
      } catch (e) {}
    }
    cb(url);
  };
  xhr.onerror = xhr.ontimeout = () => cb(null);
  xhr.send();
}

// ── Public API ────────────────────────────────────────────────
export function loadWikiImage(
  word: string,
  callback: (word: string, url: string | null) => void,
): void {
  if (Object.prototype.hasOwnProperty.call(_imgCache, word)) {
    if (_isImgExpired(word)) {
      delete _imgCache[word];
      delete _imgCacheTs[word];
      if (_idb)
        try {
          _idb.transaction('imgs', 'readwrite').objectStore('imgs').delete(word);
        } catch (e) {}
    } else {
      callback(word, _imgCache[word]);
      return;
    }
  }
  _fetchPixabay(word, (url) => {
    if (url) {
      _imgCache[word] = url;
      _idbSet(word, url);
      _saveImgCache();
      _saveImgTs(word);
      callback(word, url);
      return;
    }
    _fetchWiki(word, (url2) => {
      _imgCache[word] = url2;
      _idbSet(word, url2);
      _saveImgCache();
      callback(word, url2);
    });
  });
}
