// Vymova — js/features/translate-page.tsx
// Free-form sentence translator: type text in any language, pick a target
// language, get an AI translation via the same Gemini-backed Cloudflare
// Worker proxy used by the AI tutor / story generator. Self-hides
// (sidebar.tsx) when AI_PROXY_URL is unset.
import { createPortal } from 'react-dom';
import { useState, type ReactElement } from 'react';
import { AI_PROXY_URL, AI_TUTOR_ENABLED } from '../config.ts';
import { getKnowLang } from './lang-pair-select.tsx';
import { t } from './i18n.ts';
import { bindOverlayDismiss } from './overlay-utils.ts';
import { flagUrl } from '../core/flags.ts';
import { LANG_META } from './profile-page.tsx';

const META: Record<string, { name: string; country: string }> = {
  ...LANG_META,
  ua: { name: 'Українська', country: 'ua' },
};
const TARGET_LANGS: string[] = ['ua', ...Object.keys(LANG_META)];

export async function sendTranslateRequest(text: string, targetLang: string): Promise<string> {
  const res = await fetch(`${AI_PROXY_URL}/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      mode: 'translate',
      lang: { know: targetLang, learn: targetLang },
      text,
    }),
  });
  if (!res.ok) throw new Error(`AI proxy responded ${res.status}`);
  const data = (await res.json()) as { text?: string };
  if (!data.text) throw new Error('AI proxy returned no text');
  return data.text;
}

export function TranslatePage(): ReactElement | null {
  const target = document.getElementById('translate-content');
  const [text, setText] = useState('');
  const [targetLang, setTargetLang] = useState<string>(() => getKnowLang() || 'ua');
  const [result, setResult] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!target) return null;
  if (!AI_TUTOR_ENABLED) {
    return createPortal(
      <div
        className="translate-disabled"
        style={{ padding: '24px 16px', textAlign: 'center', color: 'var(--text3)' }}
      >
        {t('translate.disabled')}
      </div>,
      target,
    );
  }

  const submit = async (): Promise<void> => {
    const value = text.trim();
    if (!value || pending) return;
    setError(null);
    setResult(null);
    setPending(true);
    try {
      const translated = await sendTranslateRequest(value, targetLang);
      setResult(translated);
    } catch {
      setError(t('translate.error'));
    } finally {
      setPending(false);
    }
  };

  return createPortal(
    <div className="translate-panel">
      <textarea
        className="translate-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={t('translate.placeholder')}
        rows={4}
      />
      <div className="translate-controls">
        <label className="translate-target-label" htmlFor="translate-target-select">
          {t('translate.targetLabel')}
        </label>
        <select
          id="translate-target-select"
          className="translate-select"
          value={targetLang}
          onChange={(e) => setTargetLang(e.target.value)}
        >
          {TARGET_LANGS.map((code) => (
            <option key={code} value={code}>
              {META[code]?.name ?? code}
            </option>
          ))}
        </select>
        <button
          type="button"
          className="translate-send"
          onClick={submit}
          disabled={pending || !text.trim()}
        >
          {pending ? t('translate.translating') : t('translate.button')}
        </button>
      </div>
      {error && <div className="translate-error">{error}</div>}
      {result && (
        <div className="translate-result">
          {flagUrl(META[targetLang]?.country ?? '') && (
            <img
              className="translate-result-flag"
              src={flagUrl(META[targetLang]?.country ?? '') ?? undefined}
              alt=""
            />
          )}
          <div className="translate-result-text">{result}</div>
        </div>
      )}
    </div>,
    target,
  );
}

bindOverlayDismiss('translate-overlay', 'translate-close');
