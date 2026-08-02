// Vymova — js/features/notes/note-modal.tsx
// Personal note / mnemonic editor modal, triggered imperatively from
// card-actions.ts via openNoteModal().
import { useEffect, useState, type ReactElement } from 'react';
import { createPortal } from 'react-dom';
import { t } from '../i18n.ts';
import { getNoteForWord, setNoteForWord } from './notes.ts';

type Listener = (word: string) => void;
const listeners = new Set<Listener>();

export function openNoteModal(word: string): void {
  listeners.forEach((l) => l(word));
}

function refreshCard(): void {
  import('../../core/card-engine.ts').then(({ render }) => render()).catch(() => {});
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
    return () => {
      listeners.delete(listener);
    };
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
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,.6)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="note-panel w-full max-w-[460px] rounded-2xl px-5 py-6 shadow-[0_12px_48px_rgba(0,0,0,.3)] bg-[var(--delete-panel-bg)] [border:var(--delete-panel-border)] animate-[slideUpPanel_0.2s_cubic-bezier(0.175,0.885,0.32,1.275)]">
        <div className="note-header mb-2.5 flex items-center justify-between">
          <div className="note-title text-[.95rem] font-bold text-[var(--text)]" id="note-word-title">
            {t('note.title')}: {word}
          </div>
          <button
            className="page-close-btn bg-transparent border-0 text-[1.2rem] cursor-pointer text-[var(--text3)] py-1 px-2 rounded-lg transition-all duration-[120ms] hover:bg-[var(--bg)] hover:text-[var(--text)]"
            onClick={close}
            aria-label={t('common.close')}
          >
            ✕
          </button>
        </div>
        <div style={{ fontSize: '.75rem', color: 'var(--text3)', marginBottom: 8 }}>
          📝 {t('note.hint')}
        </div>
        <textarea
          className="note-textarea box-border w-full min-h-[100px] max-h-[200px] resize-y rounded-[10px] border-[1.5px] border-solid border-[var(--note-textarea-border)] bg-[var(--bg)] px-3 py-2.5 font-[inherit] text-[.85rem] leading-[1.5] text-[var(--text)] outline-none focus:border-[var(--accent)]"
          value={text}
          placeholder={t('note.placeholder')}
          autoFocus
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') close();
            if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') close();
          }}
        />
        <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
          <button
            id="note-delete-btn"
            className="flex-1 p-[11px] rounded-xl [font-family:inherit] text-[0.9rem] font-semibold cursor-pointer transition-all duration-150 border-[1.5px] border-[var(--border)] bg-[var(--bg)] text-[var(--text2)] hover:border-[var(--text2)] hover:text-[var(--text)]"
            style={{ flex: '0 0 auto' }}
            onClick={del}
          >
            {t('note.delete')}
          </button>
          <button
            id="note-save-btn"
            className="flex-1 p-[11px] rounded-xl [font-family:inherit] text-[0.9rem] font-semibold cursor-pointer transition-all duration-150 border-0 text-white hover:bg-[#c0392b]"
            style={{ background: 'var(--accent)' }}
            onClick={close}
          >
            {t('note.save')}
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
