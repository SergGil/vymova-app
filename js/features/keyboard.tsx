// Vymova — js/features/keyboard.tsx
// ════════ KEYBOARD OVERLAY ════════
import { useState, useEffect, type ReactElement } from 'react';
import { t } from './i18n.ts';
import { useStateVersion } from '../../src/store.ts';

export function KeysOverlay(): ReactElement {
  useStateVersion();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const overlay = document.getElementById('keys-overlay');
    const btnKeys = document.getElementById('btn-keys');

    function openKeys(): void { setOpen(true); }
    function closeKeys(): void { setOpen(false); }
    function onOverlayClick(e: MouseEvent): void { if (e.target === overlay) closeKeys(); }
    function onKeydown(e: KeyboardEvent): void {
      const tag = (document.activeElement as HTMLElement).tagName;
      if (e.key === '?' && !e.ctrlKey && !e.metaKey && tag !== 'INPUT' && tag !== 'TEXTAREA') {
        e.preventDefault(); openKeys();
      }
      if (e.key === 'Escape') closeKeys();
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        (document.getElementById('search-input') as HTMLInputElement | null)?.focus();
      }
    }

    btnKeys?.addEventListener('click', openKeys);
    overlay?.addEventListener('click', onOverlayClick);
    document.addEventListener('keydown', onKeydown);
    return () => {
      btnKeys?.removeEventListener('click', openKeys);
      overlay?.removeEventListener('click', onOverlayClick);
      document.removeEventListener('keydown', onKeydown);
    };
  }, []);

  return (
    <div id="keys-overlay" className={open ? 'open' : ''}>
      <div className="keys-panel">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
          <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)' }}>{t('keys.title')}</div>
          <button id="keys-close" style={{ background: 'none', border: 'none', fontSize: '1.3rem', cursor: 'pointer', color: 'var(--text3)' }} onClick={() => setOpen(false)}>✕</button>
        </div>
        <div className="keys-section">
          <div className="keys-section-title">{t('keys.mainScreen')}</div>
          <div className="keys-row"><span>{t('keys.nextCard')}</span><div className="keys-kbds"><kbd>{t('keys.space')}</kbd><kbd>→</kbd></div></div>
          <div className="keys-row"><span>{t('keys.markKnown')}</span><div className="keys-kbds"><kbd>Enter</kbd></div></div>
          <div className="keys-row"><span>{t('keys.navigation')}</span><div className="keys-kbds"><kbd>←</kbd><kbd>→</kbd></div></div>
          <div className="keys-row"><span>{t('keys.showTranslation')}</span><div className="keys-kbds"><kbd>F</kbd></div></div>
          <div className="keys-row"><span>{t('keys.search')}</span><div className="keys-kbds"><kbd>Ctrl</kbd><kbd>K</kbd></div></div>
          <div className="keys-row"><span>{t('keys.theseHints')}</span><div className="keys-kbds"><kbd>?</kbd></div></div>
        </div>
        <div className="keys-section">
          <div className="keys-section-title">{t('keys.quizTempo')}</div>
          <div className="keys-row"><span>{t('keys.selectOption')}</span><div className="keys-kbds"><kbd>1</kbd><kbd>2</kbd><kbd>3</kbd><kbd>4</kbd></div></div>
          <div className="keys-row"><span>{t('keys.nextAfterAnswer')}</span><div className="keys-kbds"><kbd>→</kbd><kbd>{t('keys.space')}</kbd></div></div>
          <div className="keys-row"><span>{t('keys.repeatSound')}</span><div className="keys-kbds"><kbd>{t('keys.space')}</kbd></div></div>
          <div className="keys-row"><span>{t('keys.close')}</span><div className="keys-kbds"><kbd>Esc</kbd></div></div>
        </div>
        <div className="keys-section">
          <div className="keys-section-title">{t('keys.writeFib')}</div>
          <div className="keys-row"><span>{t('keys.checkAnswer')}</span><div className="keys-kbds"><kbd>Enter</kbd></div></div>
          <div className="keys-row"><span>{t('keys.nextAfterCheck')}</span><div className="keys-kbds"><kbd>Enter</kbd><kbd>→</kbd></div></div>
          <div className="keys-row"><span>{t('keys.hint')}</span><div className="keys-kbds"><kbd>{t('keys.hintBtnKbd')}</kbd></div></div>
          <div className="keys-row"><span>{t('keys.autocomplete')}</span><div className="keys-kbds"><kbd>↑</kbd><kbd>↓</kbd></div></div>
          <div className="keys-row"><span>{t('keys.close')}</span><div className="keys-kbds"><kbd>Esc</kbd></div></div>
        </div>
        <div className="keys-section">
          <div className="keys-section-title">{t('keys.listening')}</div>
          <div className="keys-row"><span>{t('keys.repeatWord')}</span><div className="keys-kbds"><kbd>{t('keys.space')}</kbd></div></div>
          <div className="keys-row"><span>{t('keys.selectOption')}</span><div className="keys-kbds"><kbd>1</kbd><kbd>2</kbd><kbd>3</kbd><kbd>4</kbd></div></div>
        </div>
        <div className="keys-section">
          <div className="keys-section-title">{t('keys.global')}</div>
          <div className="keys-row"><span>{t('keys.closeAnyModal')}</span><div className="keys-kbds"><kbd>Esc</kbd></div></div>
          <div className="keys-row"><span>{t('keys.searchInList')}</span><div className="keys-kbds"><kbd>↑</kbd><kbd>↓</kbd><kbd>Enter</kbd></div></div>
        </div>
      </div>
    </div>
  );
}
