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
    <div
      ref={ref}
      id="duel-chat-log"
      className="duel-chat-log mb-2 flex max-h-[140px] flex-col gap-1.5 overflow-y-auto min-[1400px]:max-h-none min-[1400px]:flex-1"
    >
      {msgs.map((m, i) => (
        <div
          key={i}
          className={`duel-chat-msg${m.isMe ? ' me' : ''} max-w-[80%] rounded-xl px-2.5 py-1.5 text-[1.1rem] leading-[1.2] ${m.isMe ? 'self-end bg-[var(--accent)]' : 'self-start bg-[var(--bg)]'}`}
        >
          {m.text}
        </div>
      ))}
    </div>
  );
}
