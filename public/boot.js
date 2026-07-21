// Vymova — public/boot.js
// Pre-React boot logic that used to live as 3 inline <script> blocks plus one
// inline onload= attribute in index.html's <head>. Moved to an external file
// so a Content-Security-Policy script-src of 'self' (no 'unsafe-inline', no
// per-script SHA-256 hash to keep in sync by hand) covers it automatically —
// same origin, same timing (loaded synchronously in <head>, no defer/async),
// same behavior. See index.html's CSP <meta> comment for why.

// ── Swap the Google Fonts preload into an active stylesheet ──────
// (was the font <link rel="preload">'s inline onload="this.onload=null;
// this.rel='stylesheet'")
(function () {
  var link = document.getElementById('font-preload');
  if (!link) return;
  link.addEventListener('load', function () {
    link.onload = null;
    link.rel = 'stylesheet';
  });
})();

// ── Service worker registration + update detection ───────────────
if ('serviceWorker' in navigator)
  window.addEventListener('load', function () {
    navigator.serviceWorker
      .register('./sw.js')
      .then(function (reg) {
        // Signals js/core/sw-update.tsx that a genuine UPDATE (not the
        // very first install — that has no prior controller) finished
        // installing and is waiting to take over. Captured on a global
        // + a custom event, same "fire early, pick up late" pattern as
        // __pwaDeferredPrompt below, since the React tree may not have
        // mounted its listener yet when this fires.
        function notifyIfWaiting() {
          if (reg.waiting && navigator.serviceWorker.controller) {
            window.__swUpdateAvailable = true;
            window.dispatchEvent(new Event('ew-sw-update-available'));
          }
        }
        notifyIfWaiting();
        reg.addEventListener('updatefound', function () {
          var newWorker = reg.installing;
          if (!newWorker) return;
          newWorker.addEventListener('statechange', function () {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              window.__swUpdateAvailable = true;
              window.dispatchEvent(new Event('ew-sw-update-available'));
            }
          });
        });
      })
      .catch(function () {});
  });

// ── Capture beforeinstallprompt as early as possible ──────────────
// Chrome can fire it before the app's JS bundle finishes loading, and if
// nobody calls preventDefault() in time, Chrome shows its own default
// install UI instead and the event is lost to the app.
(function () {
  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    window.__pwaDeferredPrompt = e;
  });
})();

// ── Restore path after GitHub Pages 404.html redirect ─────────────
(function () {
  var r = sessionStorage.getItem('spa-redirect');
  if (r) {
    sessionStorage.removeItem('spa-redirect');
    window.history.replaceState(null, null, r.replace(window.location.origin, ''));
  }
})();
