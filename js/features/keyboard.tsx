// Vymova — js/features/keyboard.tsx
// ════════ KEYBOARD OVERLAY ════════
import { useState, useEffect, type ReactElement } from 'react';

export function KeysOverlay(): ReactElement {
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
          <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)' }} data-i18n="keys.title">⌨️ Клавіатурні скорочення</div>
          <button id="keys-close" style={{ background: 'none', border: 'none', fontSize: '1.3rem', cursor: 'pointer', color: 'var(--text3)' }} onClick={() => setOpen(false)}>✕</button>
        </div>
        <div className="keys-section">
          <div className="keys-section-title" data-i18n="keys.mainScreen">Головний екран</div>
          <div className="keys-row"><span data-i18n="keys.nextCard">Наступна картка</span><div className="keys-kbds"><kbd data-i18n="keys.space">Пробіл</kbd><kbd>→</kbd></div></div>
          <div className="keys-row"><span data-i18n="keys.markKnown">Позначити "Знаю"</span><div className="keys-kbds"><kbd>Enter</kbd></div></div>
          <div className="keys-row"><span data-i18n="keys.navigation">Навігація</span><div className="keys-kbds"><kbd>←</kbd><kbd>→</kbd></div></div>
          <div className="keys-row"><span data-i18n="keys.showTranslation">Показати переклад</span><div className="keys-kbds"><kbd>F</kbd></div></div>
          <div className="keys-row"><span data-i18n="keys.search">Пошук</span><div className="keys-kbds"><kbd>Ctrl</kbd><kbd>K</kbd></div></div>
          <div className="keys-row"><span data-i18n="keys.theseHints">Ці підказки</span><div className="keys-kbds"><kbd>?</kbd></div></div>
        </div>
        <div className="keys-section">
          <div className="keys-section-title" data-i18n="keys.quizTempo">Тест / Темп-режим</div>
          <div className="keys-row"><span data-i18n="keys.selectOption">Вибір варіанту</span><div className="keys-kbds"><kbd>1</kbd><kbd>2</kbd><kbd>3</kbd><kbd>4</kbd></div></div>
          <div className="keys-row"><span data-i18n="keys.nextAfterAnswer">Далі (після відповіді)</span><div className="keys-kbds"><kbd>→</kbd><kbd data-i18n="keys.space">Пробіл</kbd></div></div>
          <div className="keys-row"><span data-i18n="keys.repeatSound">Повторити звук (Темп)</span><div className="keys-kbds"><kbd data-i18n="keys.space">Пробіл</kbd></div></div>
          <div className="keys-row"><span data-i18n="keys.close">Закрити</span><div className="keys-kbds"><kbd>Esc</kbd></div></div>
        </div>
        <div className="keys-section">
          <div className="keys-section-title" data-i18n="keys.writeFib">Письмо / Пропуск</div>
          <div className="keys-row"><span data-i18n="keys.checkAnswer">Перевірити відповідь</span><div className="keys-kbds"><kbd>Enter</kbd></div></div>
          <div className="keys-row"><span data-i18n="keys.nextAfterCheck">Далі (після перевірки)</span><div className="keys-kbds"><kbd>Enter</kbd><kbd>→</kbd></div></div>
          <div className="keys-row"><span data-i18n="keys.hint">Підказка</span><div className="keys-kbds"><kbd data-i18n="keys.hintBtnKbd">💡 кнопка</kbd></div></div>
          <div className="keys-row"><span data-i18n="keys.autocomplete">Автодоповнення (Письмо)</span><div className="keys-kbds"><kbd>↑</kbd><kbd>↓</kbd></div></div>
          <div className="keys-row"><span data-i18n="keys.close">Закрити</span><div className="keys-kbds"><kbd>Esc</kbd></div></div>
        </div>
        <div className="keys-section">
          <div className="keys-section-title" data-i18n="keys.listening">Слухання</div>
          <div className="keys-row"><span data-i18n="keys.repeatWord">Повторити слово</span><div className="keys-kbds"><kbd data-i18n="keys.space">Пробіл</kbd></div></div>
          <div className="keys-row"><span data-i18n="keys.selectOption">Вибір варіанту</span><div className="keys-kbds"><kbd>1</kbd><kbd>2</kbd><kbd>3</kbd><kbd>4</kbd></div></div>
        </div>
        <div className="keys-section">
          <div className="keys-section-title" data-i18n="keys.global">Глобальні</div>
          <div className="keys-row"><span data-i18n="keys.closeAnyModal">Закрити будь-який модал</span><div className="keys-kbds"><kbd>Esc</kbd></div></div>
          <div className="keys-row"><span data-i18n="keys.searchInList">Пошук у списку (стрілки)</span><div className="keys-kbds"><kbd>↑</kbd><kbd>↓</kbd><kbd>Enter</kbd></div></div>
        </div>
      </div>
    </div>
  );
}
