// Vymova — js/features/duel-chat-panel.tsx
// Чат-панель дуелі (Фаза 9/3): input-row + emoji-реакції.
// `#duel-chat-log-mount` лишається окремим сиблінгом (DuelChatLog, Фаза 5).
import type { ReactElement } from 'react';
import { useState } from 'react';
import { t } from './i18n.ts';
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
      <div className="duel-chat-input-row">
        <input
          id="duel-chat-input"
          type="text"
          placeholder={t('duel.chatPlaceholder')}
          autoComplete="off"
          spellCheck={false}
          maxLength={80}
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter') send(); }}
        />
        <button id="duel-chat-send" title={t('duel.send')} onClick={send}>➤</button>
      </div>
      <div className="duel-chat-react-row" id="dm-react-row">
        {CHAT_REACTIONS.map(r => (
          <button key={r.emoji} className="dm-react-btn" title={t(r.titleKey)} onClick={() => _sendChatMsg(r.emoji)}>{r.emoji}</button>
        ))}
      </div>
    </>
  );
}
