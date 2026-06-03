// English Words App — js/features/keyboard.ts
// ════════ KEYBOARD OVERLAY ════════
const keysOverlay = document.getElementById('keys-overlay');

function _openKeys(): void  { if (keysOverlay) keysOverlay.className = 'open'; }
function _closeKeys(): void { if (keysOverlay) keysOverlay.className = ''; }

document.getElementById('btn-keys')?.addEventListener('click', _openKeys);
document.getElementById('keys-close')?.addEventListener('click', _closeKeys);
keysOverlay?.addEventListener('click', (e: MouseEvent) => {
  if (e.target === keysOverlay) _closeKeys();
});

document.addEventListener('keydown', (e: KeyboardEvent) => {
  const tag = (document.activeElement as HTMLElement).tagName;
  if (e.key === '?' && !e.ctrlKey && !e.metaKey && tag !== 'INPUT' && tag !== 'TEXTAREA') {
    e.preventDefault(); _openKeys();
  }
  if (e.key === 'Escape' && keysOverlay?.className === 'open') _closeKeys();
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    (document.getElementById('search-input') as HTMLInputElement | null)?.focus();
  }
});

export {};
