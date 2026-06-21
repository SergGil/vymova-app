// Vymova — js/features/ai-tutor.tsx
// Free AI conversation tutor: a thin chat UI calling the user-deployed
// Cloudflare Worker proxy (see worker/) which holds the Gemini API key
// server-side. Self-hides (sidebar.tsx) when AI_PROXY_URL is unset.
import { createPortal } from 'react-dom';
import { useRef, useState, type FormEvent, type ReactElement } from 'react';
import { AI_PROXY_URL, AI_TUTOR_ENABLED } from '../config.ts';
import { getKnowLang, getLearnLang } from './lang-pair-select.tsx';
import { t } from './i18n.ts';
import { useStateVersion } from '../../src/store.ts';
import { bindOverlayDismiss } from './overlay-utils.ts';

export interface ChatMessage { role: 'user' | 'assistant'; text: string; }

export async function sendTutorMessage(messages: ChatMessage[]): Promise<string> {
  const res = await fetch(`${AI_PROXY_URL}/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      mode: 'tutor',
      lang: { know: getKnowLang(), learn: getLearnLang() },
      messages: messages.map(m => ({ role: m.role, text: m.text })),
    }),
  });
  if (!res.ok) throw new Error(`AI proxy responded ${res.status}`);
  const data = await res.json() as { text?: string };
  if (!data.text) throw new Error('AI proxy returned no text');
  return data.text;
}

export function AiTutorPage(): ReactElement | null {
  useStateVersion();
  const target = document.getElementById('ai-tutor-content');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);

  if (!target) return null;
  if (!AI_TUTOR_ENABLED) {
    return createPortal(
      <div className="ai-tutor-disabled" style={{ padding: '24px 16px', textAlign: 'center', color: 'var(--text3)' }}>
        {t('aiTutor.disabled')}
      </div>,
      target,
    );
  }

  const submit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    const text = input.trim();
    if (!text || pending) return;
    setError(null);
    const next = [...messages, { role: 'user' as const, text }];
    setMessages(next);
    setInput('');
    setPending(true);
    try {
      const reply = await sendTutorMessage(next);
      setMessages(m => [...m, { role: 'assistant', text: reply }]);
    } catch {
      setError(t('aiTutor.error'));
    } finally {
      setPending(false);
      requestAnimationFrame(() => { if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight; });
    }
  };

  return createPortal(
    <div className="ai-tutor-panel">
      <div ref={listRef} className="ai-tutor-messages">
        {messages.length === 0 && <div className="ai-tutor-hint">{t('aiTutor.hint')}</div>}
        {messages.map((m, i) => (
          <div key={i} className={`ai-tutor-msg ai-tutor-msg-${m.role}`}>{m.text}</div>
        ))}
        {pending && <div className="ai-tutor-msg ai-tutor-msg-assistant ai-tutor-typing">{t('aiTutor.typing')}</div>}
        {error && <div className="ai-tutor-error">{error}</div>}
      </div>
      <form className="ai-tutor-form" onSubmit={submit}>
        <input
          className="ai-tutor-input"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder={t('aiTutor.placeholder')}
          disabled={pending}
        />
        <button type="submit" className="ai-tutor-send" disabled={pending || !input.trim()}>{t('aiTutor.send')}</button>
      </form>
    </div>,
    target,
  );
}

bindOverlayDismiss('ai-tutor-overlay', 'ai-tutor-close');
