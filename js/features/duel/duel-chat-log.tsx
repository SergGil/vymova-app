// Vymova — js/features/duel-chat-log.tsx
// Лог чату/реакцій дуелі (item 32, Фаза 5). Чисте відображення
// `_getChatHistory()`, реактивне через duel-async-store.
import type { ReactElement } from 'react';
import { useEffect, useRef } from 'react';
import { _getChatHistory } from './duel.ts';
import { useDuelChat } from '../../../src/duel-async-store.ts';

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
        <div key={i} className={'duel-chat-msg' + (m.isMe ? ' me' : '')}>
          {m.text}
        </div>
      ))}
    </div>
  );
}
