var CACHE = 'ew-v14';
var STATIC = [
  // Data
  './data/words.js',
  './data/illustrations.js',
  // Styles
  './css/styles.css',
  // Libraries
  './lib/lzstring.js',
  './lib/jszip.min.js',
  './js/features/epub.js',
  // Core JS
  './js/config.js',
  './js/core/images.js',
  './js/core/storage.js',
  './js/core/srs.js',
  './js/app.js',
  // Modes
  './js/modes/quiz.js',
  './js/modes/write.js',
  './js/modes/pairs.js',
  './js/modes/fib.js',
  './js/modes/listening.js',
  './js/modes/catpairs.js',
  './js/modes/lesson.js',
  './js/modes/tempo.js',
  // Features
  './js/features/combo.js',
  './js/features/custom.js',
  './js/features/stats.js',
  './js/features/swipe.js',
  './js/features/tag-filter.js',
  './js/features/keyboard.js',
  './js/features/offline.js',
  './js/features/export.js',
  './js/features/voice.js',
  './js/features/notes.js',
  './js/features/bookmarks.js',
  './js/features/notifications.js',
  './js/features/pronunciation.js',
  './js/features/duel.js',
  './js/modes/daily-challenge.js',
  './js/modes/reading.js',
  './js/features/profiles.js',
  './js/features/settings.js',
];

self.addEventListener('install', function(e) {
  e.waitUntil(caches.open(CACHE).then(function(c) { return c.addAll(STATIC); }).catch(function(){}));
  self.skipWaiting();
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

  // Зовнішні API (Pixabay, Wikipedia, ElevenLabs тощо) — не кешуємо
  var EXTERNAL = ['pixabay.com', 'wikipedia.org', 'wikimedia.org', 'api.fakeyou.com',
                  'streamelements.com', 'elevenlabs.io', 'storage.googleapis.com/vocodes'];
  if (EXTERNAL.some(function(d){ return url.includes(d); })) return;

  // HTML — завжди мережа (свіжий контент), fallback на кеш якщо офлайн
  if (e.request.mode === 'navigate' || url.includes('.html')) {
    e.respondWith(
      fetch(e.request).then(function(res) {
        if (res && res.status === 200) {
          var clone = res.clone(); // клонуємо ДО повернення
          caches.open(CACHE).then(function(c) { c.put(e.request, clone); });
        }
        return res;
      }).catch(function() {
        return caches.match(e.request);
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
