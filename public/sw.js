// Overwritten at build time by the sw-version Vite plugin (vite.config.js)
// with a hash of that build's output filenames — every deploy gets a
// genuinely new value with nothing to remember to bump. This literal only
// matters for `vite dev`/`vite preview` without a build, where it's never
// rewritten.
var CACHE = 'ew-dev';

self.addEventListener('install', function(e) {
  // Do NOT skipWaiting() unconditionally here. A brand new visitor (no
  // prior controller for this scope) activates this worker immediately
  // regardless, per spec — skipWaiting() only matters for an UPDATE, where
  // it used to silently swap the controller under any already-open tab
  // right after a deploy. That broke a lazy import() for any chunk not yet
  // cached, since it'd request a content-hashed filename the new deploy no
  // longer serves. Now it only skips waiting once the page explicitly asks
  // (js/core/sw-update.tsx, after the user clicks "Reload" on the banner).
});

self.addEventListener('message', function(e) {
  if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(caches.keys().then(function(keys) {
    return Promise.all(keys.filter(function(k){ return k !== CACHE; }).map(function(k){ return caches.delete(k); }));
  }));
  self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  if (e.request.method !== 'GET') return;
  if (!e.request.url.startsWith('http')) return;

  var url = e.request.url;

  // Зовнішні API (Pixabay, Wikipedia тощо) — не кешуємо.
  // firebasedatabase.app — лідерборд: дані міняються постійно, кеш-first тут
  // означає що "Оновити" показує застарілі дані (виправляються лише на 2-й клік,
  // коли фонове оновлення кешу з 1-го кліку вже встигло записатись).
  // (api.fakeyou.com/streamelements.com/elevenlabs.io/vocodes removed — dead
  // entries for a TTS integration that was never actually wired up; nothing
  // in the app ever calls those domains. See speakPreferredEnVoice() in
  // js/features/voice/voice.tsx.)
  var EXTERNAL = ['pixabay.com', 'wikipedia.org', 'wikimedia.org', 'firebasedatabase.app'];
  if (EXTERNAL.some(function(d){ return url.includes(d); })) return;

  // HTML — завжди мережа (свіжий контент), fallback на кеш якщо офлайн.
  // cache: 'no-store' bypasses the browser's own HTTP cache (a layer this
  // Cache-Storage-based SW logic can't see or control) — without it, a
  // Cache-Control header from the host could silently satisfy this "always
  // network" fetch from that HTTP cache instead of actually hitting the
  // server, serving stale HTML (and the old hashed asset URLs it references)
  // with nothing here able to tell the difference.
  if (e.request.mode === 'navigate' || url.includes('.html')) {
    e.respondWith(
      fetch(e.request, { cache: 'no-store' }).then(function(res) {
        if (res && res.status === 200) {
          var clone = res.clone(); // клонуємо ДО повернення
          caches.open(CACHE).then(function(c) { c.put(e.request, clone); });
        }
        return res;
      }).catch(function() {
        // If nothing is cached either (offline on a page never visited
        // before, or the network fetch above was blocked by something
        // other than being offline), resolving respondWith() with
        // `undefined` makes the browser report the whole navigation as an
        // opaque failed request — same as a real server error, with no way
        // to tell the two apart from DevTools. Always resolve to a real
        // Response instead.
        return caches.match(e.request).then(function(cached) {
          return cached || new Response(
            '<!doctype html><meta charset="utf-8"><title>Offline</title>' +
            '<body style="font-family:sans-serif;text-align:center;padding:3rem">' +
            '<p>Немає з\'єднання з мережею, і ця сторінка ще не збережена офлайн.</p>' +
            '<p><a href="/">Спробувати ще раз</a></p></body>',
            { status: 503, headers: { 'Content-Type': 'text/html; charset=utf-8' } }
          );
        });
      })
    );
    return;
  }

  // JS/CSS/Data — cache-first, оновлення у фоні
  e.respondWith(
    caches.match(e.request).then(function(cached) {
      var fresh = fetch(e.request).then(function(res) {
        if (res && res.status === 200 && res.type !== 'opaque') {
          var clone = res.clone(); // клонуємо ДО повернення
          caches.open(CACHE).then(function(c) { c.put(e.request, clone); });
        }
        return res;
      }).catch(function() { return cached; });
      return cached || fresh;
    })
  );
});

// ── Periodic Background Sync — best-effort daily study reminder ──
var NOTIF_DB = 'ew-notif-v1';
var NOTIF_STORE = 'kv';

function notifIdbGet() {
  return new Promise(function(resolve) {
    var req = indexedDB.open(NOTIF_DB, 1);
    req.onupgradeneeded = function() { req.result.createObjectStore(NOTIF_STORE); };
    req.onsuccess = function() {
      var db = req.result;
      try {
        var getReq = db.transaction(NOTIF_STORE, 'readonly').objectStore(NOTIF_STORE).get('snapshot');
        getReq.onsuccess = function() { resolve({ db: db, snap: getReq.result }); };
        getReq.onerror = function() { resolve({ db: db, snap: null }); };
      } catch (e) { resolve({ db: db, snap: null }); }
    };
    req.onerror = function() { resolve({ db: null, snap: null }); };
  });
}

function notifIdbSetLastShown(db, date) {
  if (!db) return;
  try {
    var store = db.transaction(NOTIF_STORE, 'readwrite').objectStore(NOTIF_STORE);
    var getReq = store.get('snapshot');
    getReq.onsuccess = function() {
      var snap = getReq.result || {};
      snap.lastShown = date;
      store.put(snap, 'snapshot');
    };
  } catch (e) {}
}

// Local calendar day, not UTC — mirrors js/core/today.ts's localDateStr(),
// duplicated here since a service worker can't import app modules. Slicing
// toISOString() directly rolls the "day" over at UTC midnight; for any
// timezone east of UTC (e.g. Kyiv, UTC+2/+3) that's 2-3 AM local time, so a
// periodic-sync check run in that window used to compare against yesterday's
// UTC date while snap.daily/snap.lastShown are written with *local*-date
// keys elsewhere (notifications.tsx) — the mismatch could suppress or
// double-fire the daily reminder depending on exactly when the browser
// invoked this handler.
function localDateStr(d) {
  var tzOffsetMs = d.getTimezoneOffset() * 60000;
  return new Date(d.getTime() - tzOffsetMs).toISOString().slice(0, 10);
}

self.addEventListener('periodicsync', function(e) {
  if (e.tag !== 'ew-daily-reminder') return;
  e.waitUntil(notifIdbGet().then(function(res) {
    var snap = res.snap;
    if (!snap || !snap.enabled) return;

    var now = new Date();
    var today = localDateStr(now);
    if (snap.lastShown === today) return;
    if (snap.daily && (snap.daily[today] || 0) > 0) return;

    var parts = (snap.time || '20:00').split(':');
    var hh = parseInt(parts[0], 10), mm = parseInt(parts[1], 10);
    if (now.getHours() < hh || (now.getHours() === hh && now.getMinutes() < mm)) return;

    return self.registration.showNotification(snap.titleDaily || 'Vymova', {
      body: snap.bodyDaily || '',
      icon: snap.icon
    }).then(function() { notifIdbSetLastShown(res.db, today); });
  }));
});
