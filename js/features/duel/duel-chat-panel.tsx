// Vymova — js/features/duel/duel-chat-panel.tsx
// Чат-панель дуелі (Фаза 9/3): input-row + emoji-реакції.
// `#duel-chat-log-mount` лишається окремим сиблінгом (DuelChatLog, Фаза 5).
import type { ReactElement } from 'react';
import { useState } from 'react';
import { t } from '../i18n.ts';
import { _sendChatMsg } from './duel.ts';

const CHAT_REACTIONS: { emoji: string; titleKey: string }[] = [
  { emoji: '👍', titleKey: 'duel.react.good' },
  { emoji: '😅', titleKey: 'duel.react.oops' },
  { emoji: '🔥', titleKey: 'duel.react.fire' },
  { emoji: '😂', titleKey: 'duel.react.lol' },
  { emoji: '🤯', titleKey: 'duel.react.wow' },
];

export function DuelChatPanel(): ReactElement {
  const [text, setText] = useState('');

  function send(): void {
    const v = text.trim();
    if (!v) return;
    _sendChatMsg(v);
    setText('');
  }

  return (
    <>
      <div className="duel-chat-input-row mb-2 flex gap-1.5">
        <input
          id="duel-chat-input"
          type="text"
          placeholder={t('duel.chatPlaceholder')}
          autoComplete="off"
          spellCheck={false}
          maxLength={80}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') send();
          }}
          className="min-w-0 flex-1 rounded-[10px] border-[1.5px] border-[var(--border)] bg-[var(--bg)] px-2.5 py-[7px] font-[inherit] text-[.85rem] text-[var(--text)] outline-none"
        />
        <button
          id="duel-chat-send"
          title={t('duel.send')}
          onClick={send}
          className="cursor-pointer rounded-[10px] border-none bg-[var(--accent)] px-3 py-[7px] font-[inherit] font-bold text-white"
        >
          ➤
        </button>
      </div>
      <div
        className="duel-chat-react-row flex flex-wrap justify-center gap-1.5"
        id="dm-react-row"
      >
        {CHAT_REACTIONS.map((r) => (
          <button
            key={r.emoji}
            className="dm-react-btn cursor-pointer rounded-[10px] border-[1.5px] border-[var(--border)] bg-[var(--bg)] px-[9px] py-[5px] text-[1.2rem] transition-[transform,border-color] duration-150 hover:scale-110 hover:border-[var(--accent)]"
            title={t(r.titleKey)}
            onClick={() => _sendChatMsg(r.emoji)}
          >
            {r.emoji}
          </button>
        ))}
      </div>
    </>
  );
}
