// Vymova — js/features/note-modal.tsx
// Personal note / mnemonic editor modal, triggered imperatively from
// card-actions.ts via openNoteModal().
import { useEffect, useState, type ReactElement } from 'react';
import { createPortal } from 'react-dom';
import { t } from './i18n.ts';
import { getNoteForWord, setNoteForWord } from './notes.ts';

type Listener = (word: string) => void;
const listeners = new Set<Listener>();

export function openNoteModal(word: string): void {
  listeners.forEach(l => l(word));
}

function refreshCard(): void {
  import('../core/card-engine.ts').then(({ render }) => render()).catch(() => {});
}

export function NoteModal(): ReactElement | null {
  const [word, setWord] = useState<string | null>(null);
  const [text, setText] = useState('');

  useEffect(() => {
    const listener = (w: string): void => {
      setWord(w);
      setText(getNoteForWord(w));
    };
    listeners.add(listener);
    return () => { listeners.delete(listener); };
  }, []);

  if (word === null) return null;

  function save(): void {
    setNoteForWord(word!, text);
    refreshCard();
  }
  function close(): void {
    save();
    setWord(null);
  }
  function del(): void {
    setNoteForWord(word!, '');
    refreshCard();
    setWord(null);
  }

  return createPortal(
    <div
      id="note-overlay"
      style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.6)', zIndex: 99999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}
      onClick={e => { if (e.target === e.currentTarget) close(); }}
    >
      <div className="note-panel">
        <div className="note-header">
          <div className="note-title" id="note-word-title">{t('note.title')}: {word}</div>
          <button className="page-close-btn" onClick={close}>✕</button>
        </div>
        <div style={{ fontSize: '.75rem', color: 'var(--text3)', marginBottom: 8 }}>📝 {t('note.hint')}</div>
        <textarea
          className="note-textarea"
          value={text}
          placeholder={t('note.placeholder')}
          autoFocus
          onChange={e => setText(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Escape') close();
            if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') close();
          }}
        />
        <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
          <button className="prf-delete-btn prf-delete-btn-cancel" style={{ flex: '0 0 auto' }} onClick={del}>{t('note.delete')}</button>
          <button className="prf-delete-btn prf-delete-btn-confirm" style={{ background: 'var(--accent)' }} onClick={close}>{t('note.save')}</button>
        </div>
      </div>
    </div>,
    document.body
  );
}
