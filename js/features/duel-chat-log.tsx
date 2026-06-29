// Vymova — js/features/duel-chat-log.tsx
// Лог чату/реакцій дуелі (item 32, Фаза 5). Чисте відображення
// `_getChatHistory()`; duel.ts викликає refreshDuelChatLog() при
// кожному новому повідомленні/реакції (_appendChatMsg, _showGame,
// відновлення сесії).
import type { ReactElement } from 'react';
import { useEffect, useRef } from 'react';
import { _getChatHistory } from './duel.ts';
import { notifyStateChange } from '../../src/store.ts';
import { useDuelChat } from '../../src/duel-async-store.ts';

export function DuelChatLog(): ReactElement {
  useDuelChat();
  const msgs = _getChatHistory();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) ref.current.scrollTop = ref.current.scrollHeight;
  }, [msgs.length]);
  return (
    <div ref={ref} id="duel-chat-log" className="duel-chat-log">
      {msgs.map((m, i) => (
        <div key={i} className={'duel-chat-msg' + (m.isMe ? ' me' : '')}>{m.text}</div>
      ))}
    </div>
  );
}

export function refreshDuelChatLog(): void { notifyStateChange(); }
