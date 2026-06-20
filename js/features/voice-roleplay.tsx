// Vymova — js/features/voice-roleplay.tsx
// Голосовий ШІ-ролеплей: browser-native speech recognition (free, no API key)
// + the same Cloudflare Worker proxy as ai-tutor.tsx, in "roleplay" mode —
// the AI plays a scenario character and returns an in-character reply plus
// a grammar-feedback note on the user's last turn.
import { createPortal } from 'react-dom';
import { useRef, useState, type ReactElement } from 'react';
import { AI_PROXY_URL, AI_TUTOR_ENABLED } from '../config.ts';
import { getKnowLang, getLearnLang } from './lang-pair-select.tsx';
import { _speakWithLang } from './speech.ts';
import { t } from './i18n.ts';
import { bindOverlayDismiss } from './overlay-utils.ts';

export type ScenarioId = 'job-interview' | 'ordering-coffee';

export const SCENARIOS: { id: ScenarioId; emoji: string; labelKey: string }[] = [
  { id: 'job-interview', emoji: '💼', labelKey: 'roleplay.scenarioInterview' },
  { id: 'ordering-coffee', emoji: '☕', labelKey: 'roleplay.scenarioCoffee' },
];

const SPEECH_LANG: Record<string, string> = {
  ua: 'uk-UA', en: 'en-US', es: 'es-ES', fr: 'fr-FR', it: 'it-IT', pt: 'pt-PT', de: 'de-DE',
  he: 'he-IL', ar: 'ar-SA', pl: 'pl-PL', zh: 'zh-CN', el: 'el-GR', ja: 'ja-JP', tr: 'tr-TR', nl: 'nl-NL',
};

export interface RoleplayTurn { role: 'user' | 'assistant'; text: string; feedback?: string; }

interface SpeechRecognitionLike extends EventTarget {
  lang: string;
  interimResults: boolean;
  continuous: boolean;
  start(): void;
  stop(): void;
  onresult: ((e: { results: { 0: { transcript: string } }[] }) => void) | null;
  onerror: (() => void) | null;
  onend: (() => void) | null;
}

function getSpeechRecognition(): (new () => SpeechRecognitionLike) | null {
  const w = window as unknown as { SpeechRecognition?: new () => SpeechRecognitionLike; webkitSpeechRecognition?: new () => SpeechRecognitionLike };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

export function speechRecognitionSupported(): boolean {
  return getSpeechRecognition() !== null;
}

// Parses the worker's "<reply>\nFEEDBACK: <note>" convention into parts.
export function splitFeedback(raw: string): { reply: string; feedback: string | null } {
  const idx = raw.indexOf('FEEDBACK:');
  if (idx === -1) return { reply: raw.trim(), feedback: null };
  return { reply: raw.slice(0, idx).trim(), feedback: raw.slice(idx + 'FEEDBACK:'.length).trim() };
}

export async function sendRoleplayMessage(scenario: ScenarioId, turns: RoleplayTurn[]): Promise<{ reply: string; feedback: string | null }> {
  const res = await fetch(`${AI_PROXY_URL}/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      mode: 'roleplay',
      scenario,
      lang: { know: getKnowLang(), learn: getLearnLang() },
      messages: turns.map(m => ({ role: m.role, text: m.text })),
    }),
  });
  if (!res.ok) throw new Error(`AI proxy responded ${res.status}`);
  const data = await res.json() as { text?: string };
  if (!data.text) throw new Error('AI proxy returned no text');
  return splitFeedback(data.text);
}

export function VoiceRoleplayPage(): ReactElement | null {
  const target = document.getElementById('voice-roleplay-content');
  const [scenario, setScenario] = useState<ScenarioId | null>(null);
  const [turns, setTurns] = useState<RoleplayTurn[]>([]);
  const [listening, setListening] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);
  const supported = speechRecognitionSupported();

  if (!target) return null;
  if (!AI_TUTOR_ENABLED) {
    return createPortal(
      <div style={{ padding: '24px 16px', textAlign: 'center', color: 'var(--text3)' }}>{t('aiTutor.disabled')}</div>,
      target,
    );
  }

  const speakReply = (text: string): void => {
    const lang = SPEECH_LANG[getLearnLang()] ?? 'en-US';
    _speakWithLang(text, lang, null);
  };

  const send = async (text: string): Promise<void> => {
    const clean = text.trim();
    if (!clean || pending || !scenario) return;
    setError(null);
    const next = [...turns, { role: 'user' as const, text: clean }];
    setTurns(next);
    setTextInput('');
    setPending(true);
    try {
      const { reply, feedback } = await sendRoleplayMessage(scenario, next);
      setTurns(t2 => {
        const updated = t2.map((turn, i) => (i === t2.length - 1 ? { ...turn, feedback: feedback ?? undefined } : turn));
        return [...updated, { role: 'assistant', text: reply }];
      });
      speakReply(reply);
    } catch {
      setError(t('aiTutor.error'));
    } finally {
      setPending(false);
    }
  };

  const startListening = (): void => {
    const Ctor = getSpeechRecognition();
    if (!Ctor || !scenario) return;
    const rec = new Ctor();
    rec.lang = SPEECH_LANG[getLearnLang()] ?? 'en-US';
    rec.interimResults = false;
    rec.continuous = false;
    rec.onresult = (e) => {
      const transcript = e.results[0]?.[0]?.transcript ?? '';
      if (transcript) void send(transcript);
    };
    rec.onerror = () => setListening(false);
    rec.onend = () => setListening(false);
    recognitionRef.current = rec;
    setListening(true);
    rec.start();
  };

  const stopListening = (): void => {
    recognitionRef.current?.stop();
    setListening(false);
  };

  const pickScenario = (id: ScenarioId): void => {
    setScenario(id);
    setTurns([]);
    setError(null);
  };

  return createPortal(
    <div className="roleplay-panel">
      {!scenario ? (
        <div className="roleplay-scenarios">
          <div className="ai-tutor-hint">{t('roleplay.pickScenario')}</div>
          <div className="roleplay-scenario-grid">
            {SCENARIOS.map(s => (
              <button key={s.id} className="roleplay-scenario-card" onClick={() => pickScenario(s.id)}>
                <span style={{ fontSize: '1.6rem' }}>{s.emoji}</span>
                <span>{t(s.labelKey as any)}</span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className="roleplay-header">
            <span>{SCENARIOS.find(s => s.id === scenario)?.emoji} {t(SCENARIOS.find(s => s.id === scenario)!.labelKey as any)}</span>
            <button className="roleplay-change-btn" onClick={() => setScenario(null)}>{t('roleplay.changeScenario')}</button>
          </div>

          <div className="ai-tutor-messages roleplay-messages">
            {turns.length === 0 && <div className="ai-tutor-hint">{t('roleplay.startHint')}</div>}
            {turns.map((turn, i) => (
              <div key={i}>
                <div className={`ai-tutor-msg ai-tutor-msg-${turn.role}`}>{turn.text}</div>
                {turn.feedback && <div className="roleplay-feedback">📝 {turn.feedback}</div>}
              </div>
            ))}
            {pending && <div className="ai-tutor-msg ai-tutor-msg-assistant ai-tutor-typing">{t('aiTutor.typing')}</div>}
            {error && <div className="ai-tutor-error">{error}</div>}
          </div>

          <div className="roleplay-controls">
            {supported ? (
              <button
                className={`roleplay-mic-btn${listening ? ' listening' : ''}`}
                onClick={listening ? stopListening : startListening}
                disabled={pending}
              >{listening ? `⏹ ${t('roleplay.stop')}` : `🎤 ${t('roleplay.speak')}`}</button>
            ) : (
              <form
                className="ai-tutor-form"
                onSubmit={(e) => { e.preventDefault(); void send(textInput); }}
              >
                <input
                  className="ai-tutor-input"
                  value={textInput}
                  onChange={e => setTextInput(e.target.value)}
                  placeholder={t('roleplay.noMicPlaceholder')}
                  disabled={pending}
                />
                <button type="submit" className="ai-tutor-send" disabled={pending || !textInput.trim()}>{t('aiTutor.send')}</button>
              </form>
            )}
          </div>
        </>
      )}
    </div>,
    target,
  );
}

bindOverlayDismiss('voice-roleplay-overlay', 'voice-roleplay-close');
