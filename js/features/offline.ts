// English Words App — js/features/offline.ts
// Online/offline detection + beautiful status banner + graceful degradation
import { t } from './i18n.ts';

let _online = navigator.onLine;
let _banner: HTMLElement | null = null;
let _hideTimer: ReturnType<typeof setTimeout> | null = null;

function _getOrCreateBanner(): HTMLElement {
  if (_banner) return _banner;
  const el = document.createElement('div');
  el.id = 'offline-banner';
  el.style.cssText = [
    'position:fixed', 'top:0', 'left:0', 'right:0', 'z-index:99998',
    'padding:8px 16px', 'text-align:center', 'font-size:.82rem',
    'font-weight:600', 'transition:transform .3s ease, opacity .3s ease',
    'transform:translateY(-100%)', 'opacity:0',
    'display:flex', 'align-items:center', 'justify-content:center', 'gap:8px',
  ].join(';');
  document.body.appendChild(el);
  _banner = el;
  return el;
}

function _showOffline(): void {
  const b = _getOrCreateBanner();
  b.style.background = '#c0392b';
  b.style.color = '#fff';
  b.innerHTML = t('offline.banner');
  requestAnimationFrame(() => {
    b.style.transform = 'translateY(0)';
    b.style.opacity = '1';
  });
}

function _showOnline(): void {
  const b = _getOrCreateBanner();
  b.style.background = '#27ae60';
  b.style.color = '#fff';
  b.innerHTML = t('offline.restored');
  requestAnimationFrame(() => {
    b.style.transform = 'translateY(0)';
    b.style.opacity = '1';
  });
  if (_hideTimer) clearTimeout(_hideTimer);
  _hideTimer = setTimeout(() => {
    b.style.transform = 'translateY(-100%)';
    b.style.opacity = '0';
  }, 2500);
}

window.addEventListener('online', () => {
  if (_online) return; // ignore spurious repeats — avoids retriggering/extending the banner forever
  _online = true;
  _showOnline();
});

window.addEventListener('offline', () => {
  if (!_online) return;
  _online = false;
  _showOffline();
});

// Show on initial load if already offline
if (!_online) {
  setTimeout(_showOffline, 1000);
}

// ── Exports ───────────────────────────────────────────────────
window._isOnlineCheck = (): boolean => _online;

window._offlineSvg = (_word: string): string =>
  `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="10" fill="#1a2a3a"/>
    <text x="50" y="38" text-anchor="middle" font-size="30" fill="#3a5a7a">📡</text>
    <text x="50" y="58" text-anchor="middle" font-size="9" fill="#5a7a9a" font-family="sans-serif">${t('offline.image.label')}</text>
    <text x="50" y="72" text-anchor="middle" font-size="8" fill="#4a6a8a" font-family="sans-serif">${t('offline.image.unavailable')}</text>
  </svg>`;
