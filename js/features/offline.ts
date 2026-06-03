// English Words App — js/features/offline.ts
// Online/offline detection + placeholder SVG

let _online = navigator.onLine;
window.addEventListener('online',  () => { _online = true;  });
window.addEventListener('offline', () => { _online = false; });

window._isOnlineCheck = (): boolean => _online;

window._offlineSvg = (word: string): string =>
  `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="10" fill="#1a2a3a"/>
    <text x="50" y="42" text-anchor="middle" font-size="28" fill="#3a5a7a">📡</text>
    <text x="50" y="68" text-anchor="middle" font-size="9" fill="#4a6a8a" font-family="sans-serif">офлайн</text>
  </svg>`;
export {};
