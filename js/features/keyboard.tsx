// Vymova — js/features/keyboard.tsx
// ════════ KEYBOARD OVERLAY ════════
import { useState, useEffect, type ReactElement } from 'react';
import { t } from './i18n.ts';
import { useLangVersion } from '../../src/store.ts';

export function KeysOverlay(): ReactElement {
  // Only t() calls in this whole panel need reactivity — the global bus
  // would also re-render this on every flashcard advance/keystroke
  // elsewhere, for a static shortcuts list that's usually not even open.
  useLangVersion();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const btnKeys = document.getElementById('btn-keys');

    function openKeys(): void {
      setOpen(true);
    }
    function closeKeys(): void {
      setOpen(false);
    }
    function onKeydown(e: KeyboardEvent): void {
      const tag = (document.activeElement as HTMLElement).tagName;
      if (e.key === '?' && !e.ctrlKey && !e.metaKey && tag !== 'INPUT' && tag !== 'TEXTAREA') {
        e.preventDefault();
        openKeys();
      }
      if (e.key === 'Escape') closeKeys();
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        (document.getElementById('search-input') as HTMLInputElement | null)?.focus();
      }
    }

    btnKeys?.addEventListener('click', openKeys);
    document.addEventListener('keydown', onKeydown);
    return () => {
      btnKeys?.removeEventListener('click', openKeys);
      document.removeEventListener('keydown', onKeydown);
    };
  }, []);

  return (
    <div
      id="keys-overlay"
      className={
        'fixed inset-0 z-[9600] items-center justify-center bg-black/60 p-5 ' +
        (open ? 'flex' : 'hidden')
      }
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpen(false);
      }}
    >
      <div className="keys-panel max-h-[80vh] w-full max-w-[560px] overflow-y-auto rounded-[18px] bg-[var(--card)] px-[22px] py-6 shadow-[0_12px_40px_rgba(0,0,0,.3)]">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '18px',
          }}
        >
          <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)' }}>
            {t('keys.title')}
          </div>
          <button
            id="keys-close"
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.3rem',
              cursor: 'pointer',
              color: 'var(--text3)',
            }}
            onClick={() => setOpen(false)}
            aria-label={t('common.close')}
          >
            ✕
          </button>
        </div>
        <div className="keys-section mb-4">
          <div className="keys-section-title mb-2 text-[.68rem] font-bold tracking-[0.09em] text-[var(--text3)] uppercase">
            {t('keys.mainScreen')}
          </div>
          <div className="keys-row flex items-center justify-between border-b border-b-[var(--border)] py-[5px] text-[.85rem] text-[var(--text)] last:border-b-0">
            <span>{t('keys.nextCard')}</span>
            <div className="keys-kbds ml-3 flex shrink-0 gap-1">
              <kbd>{t('keys.space')}</kbd>
              <kbd>→</kbd>
            </div>
          </div>
          <div className="keys-row flex items-center justify-between border-b border-b-[var(--border)] py-[5px] text-[.85rem] text-[var(--text)] last:border-b-0">
            <span>{t('keys.markKnown')}</span>
            <div className="keys-kbds ml-3 flex shrink-0 gap-1">
              <kbd>Enter</kbd>
            </div>
          </div>
          <div className="keys-row flex items-center justify-between border-b border-b-[var(--border)] py-[5px] text-[.85rem] text-[var(--text)] last:border-b-0">
            <span>{t('keys.navigation')}</span>
            <div className="keys-kbds ml-3 flex shrink-0 gap-1">
              <kbd>←</kbd>
              <kbd>→</kbd>
            </div>
          </div>
          <div className="keys-row flex items-center justify-between border-b border-b-[var(--border)] py-[5px] text-[.85rem] text-[var(--text)] last:border-b-0">
            <span>{t('keys.showTranslation')}</span>
            <div className="keys-kbds ml-3 flex shrink-0 gap-1">
              <kbd>F</kbd>
            </div>
          </div>
          <div className="keys-row flex items-center justify-between border-b border-b-[var(--border)] py-[5px] text-[.85rem] text-[var(--text)] last:border-b-0">
            <span>{t('keys.search')}</span>
            <div className="keys-kbds ml-3 flex shrink-0 gap-1">
              <kbd>Ctrl</kbd>
              <kbd>K</kbd>
            </div>
          </div>
          <div className="keys-row flex items-center justify-between border-b border-b-[var(--border)] py-[5px] text-[.85rem] text-[var(--text)] last:border-b-0">
            <span>{t('keys.theseHints')}</span>
            <div className="keys-kbds ml-3 flex shrink-0 gap-1">
              <kbd>?</kbd>
            </div>
          </div>
        </div>
        <div className="keys-section mb-4">
          <div className="keys-section-title mb-2 text-[.68rem] font-bold tracking-[0.09em] text-[var(--text3)] uppercase">
            {t('keys.quizTempo')}
          </div>
          <div className="keys-row flex items-center justify-between border-b border-b-[var(--border)] py-[5px] text-[.85rem] text-[var(--text)] last:border-b-0">
            <span>{t('keys.selectOption')}</span>
            <div className="keys-kbds ml-3 flex shrink-0 gap-1">
              <kbd>1</kbd>
              <kbd>2</kbd>
              <kbd>3</kbd>
              <kbd>4</kbd>
            </div>
          </div>
          <div className="keys-row flex items-center justify-between border-b border-b-[var(--border)] py-[5px] text-[.85rem] text-[var(--text)] last:border-b-0">
            <span>{t('keys.nextAfterAnswer')}</span>
            <div className="keys-kbds ml-3 flex shrink-0 gap-1">
              <kbd>→</kbd>
              <kbd>{t('keys.space')}</kbd>
            </div>
          </div>
          <div className="keys-row flex items-center justify-between border-b border-b-[var(--border)] py-[5px] text-[.85rem] text-[var(--text)] last:border-b-0">
            <span>{t('keys.repeatSound')}</span>
            <div className="keys-kbds ml-3 flex shrink-0 gap-1">
              <kbd>{t('keys.space')}</kbd>
            </div>
          </div>
          <div className="keys-row flex items-center justify-between border-b border-b-[var(--border)] py-[5px] text-[.85rem] text-[var(--text)] last:border-b-0">
            <span>{t('keys.close')}</span>
            <div className="keys-kbds ml-3 flex shrink-0 gap-1">
              <kbd>Esc</kbd>
            </div>
          </div>
        </div>
        <div className="keys-section mb-4">
          <div className="keys-section-title mb-2 text-[.68rem] font-bold tracking-[0.09em] text-[var(--text3)] uppercase">
            {t('keys.writeFib')}
          </div>
          <div className="keys-row flex items-center justify-between border-b border-b-[var(--border)] py-[5px] text-[.85rem] text-[var(--text)] last:border-b-0">
            <span>{t('keys.checkAnswer')}</span>
            <div className="keys-kbds ml-3 flex shrink-0 gap-1">
              <kbd>Enter</kbd>
            </div>
          </div>
          <div className="keys-row flex items-center justify-between border-b border-b-[var(--border)] py-[5px] text-[.85rem] text-[var(--text)] last:border-b-0">
            <span>{t('keys.nextAfterCheck')}</span>
            <div className="keys-kbds ml-3 flex shrink-0 gap-1">
              <kbd>Enter</kbd>
              <kbd>→</kbd>
            </div>
          </div>
          <div className="keys-row flex items-center justify-between border-b border-b-[var(--border)] py-[5px] text-[.85rem] text-[var(--text)] last:border-b-0">
            <span>{t('keys.hint')}</span>
            <div className="keys-kbds ml-3 flex shrink-0 gap-1">
              <kbd>{t('keys.hintBtnKbd')}</kbd>
            </div>
          </div>
          <div className="keys-row flex items-center justify-between border-b border-b-[var(--border)] py-[5px] text-[.85rem] text-[var(--text)] last:border-b-0">
            <span>{t('keys.autocomplete')}</span>
            <div className="keys-kbds ml-3 flex shrink-0 gap-1">
              <kbd>↑</kbd>
              <kbd>↓</kbd>
            </div>
          </div>
          <div className="keys-row flex items-center justify-between border-b border-b-[var(--border)] py-[5px] text-[.85rem] text-[var(--text)] last:border-b-0">
            <span>{t('keys.close')}</span>
            <div className="keys-kbds ml-3 flex shrink-0 gap-1">
              <kbd>Esc</kbd>
            </div>
          </div>
        </div>
        <div className="keys-section mb-4">
          <div className="keys-section-title mb-2 text-[.68rem] font-bold tracking-[0.09em] text-[var(--text3)] uppercase">
            {t('keys.listening')}
          </div>
          <div className="keys-row flex items-center justify-between border-b border-b-[var(--border)] py-[5px] text-[.85rem] text-[var(--text)] last:border-b-0">
            <span>{t('keys.repeatWord')}</span>
            <div className="keys-kbds ml-3 flex shrink-0 gap-1">
              <kbd>{t('keys.space')}</kbd>
            </div>
          </div>
          <div className="keys-row flex items-center justify-between border-b border-b-[var(--border)] py-[5px] text-[.85rem] text-[var(--text)] last:border-b-0">
            <span>{t('keys.selectOption')}</span>
            <div className="keys-kbds ml-3 flex shrink-0 gap-1">
              <kbd>1</kbd>
              <kbd>2</kbd>
              <kbd>3</kbd>
              <kbd>4</kbd>
            </div>
          </div>
        </div>
        <div className="keys-section mb-4">
          <div className="keys-section-title mb-2 text-[.68rem] font-bold tracking-[0.09em] text-[var(--text3)] uppercase">
            {t('keys.global')}
          </div>
          <div className="keys-row flex items-center justify-between border-b border-b-[var(--border)] py-[5px] text-[.85rem] text-[var(--text)] last:border-b-0">
            <span>{t('keys.closeAnyModal')}</span>
            <div className="keys-kbds ml-3 flex shrink-0 gap-1">
              <kbd>Esc</kbd>
            </div>
          </div>
          <div className="keys-row flex items-center justify-between border-b border-b-[var(--border)] py-[5px] text-[.85rem] text-[var(--text)] last:border-b-0">
            <span>{t('keys.searchInList')}</span>
            <div className="keys-kbds ml-3 flex shrink-0 gap-1">
              <kbd>↑</kbd>
              <kbd>↓</kbd>
              <kbd>Enter</kbd>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
