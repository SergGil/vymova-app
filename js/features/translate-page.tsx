// Vymova — js/features/translate-page.tsx
// Free-form sentence translator: type text in any language, pick a target
// language, get an AI translation via the same Gemini-backed Cloudflare
// Worker proxy used by the AI tutor / story generator. Self-hides
// (sidebar.tsx) when AI_PROXY_URL is unset.
import { createPortal } from 'react-dom';
import { useState, type KeyboardEvent, type ReactElement } from 'react';
import { AI_PROXY_URL, AI_TUTOR_ENABLED } from '../config.ts';
import { getWorkerClientId } from '../core/worker-client-id.ts';
import { getKnowLang } from './lang-pair-select.tsx';
import { t } from './i18n.ts';
import { bindOverlayDismiss } from './overlay-utils.ts';
import { flagUrl } from '../core/flags.ts';
import { LANG_META } from './profile/profile-page.tsx';
import { speakForCode } from './voice/speak-lang.ts';
import type { Code } from '../../src/types.js';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../src/components/ui/select.tsx';

const META: Record<string, { name: string; country: string }> = {
  ...LANG_META,
  ua: { name: 'Українська', country: 'ua' },
};
const TARGET_LANGS: string[] = ['ua', ...Object.keys(LANG_META)];

export async function sendTranslateRequest(text: string, targetLang: string): Promise<string> {
  const res = await fetch(`${AI_PROXY_URL}/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Client-Id': getWorkerClientId() },
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

  const submit = async (lang: string = targetLang): Promise<void> => {
    const value = text.trim();
    if (!value || pending) return;
    setError(null);
    setResult(null);
    setPending(true);
    try {
      const translated = await sendTranslateRequest(value, lang);
      setResult(translated);
    } catch {
      setError(t('translate.error'));
    } finally {
      setPending(false);
    }
  };

  const onTargetLangChange = (lang: string): void => {
    setTargetLang(lang);
    if (text.trim()) submit(lang);
  };

  const onInputKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>): void => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  };

  return createPortal(
    <div className="translate-panel flex flex-col gap-3">
      <textarea
        className="translate-input box-border min-h-[90px] w-full resize-y rounded-[10px] border-[1.5px] border-[var(--border)] bg-[var(--bg)] px-3 py-2.5 font-['DM_Sans',sans-serif] text-[.88rem] leading-[1.4] text-[var(--text)]"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={onInputKeyDown}
        placeholder={t('translate.placeholder')}
        rows={4}
      />
      <div className="translate-controls flex flex-wrap items-center gap-2">
        <label
          className="translate-target-label text-[.85rem] text-[var(--text3)]"
          htmlFor="translate-target-select"
        >
          {t('translate.targetLabel')}
        </label>
        <Select value={targetLang} onValueChange={(v) => onTargetLangChange(v as string)}>
          <SelectTrigger
            id="translate-target-select"
            className="translate-select h-auto min-w-[140px] flex-1 rounded-[10px] border-[1.5px] border-[var(--border)] bg-[var(--bg)] px-3 py-2.5 font-[inherit] text-[.85rem] text-[var(--text)]"
          >
            <SelectValue>{(v: string) => META[v]?.name ?? v}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            {TARGET_LANGS.map((code) => (
              <SelectItem key={code} value={code}>
                {META[code]?.name ?? code}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <button
          type="button"
          className="translate-send cursor-pointer rounded-[10px] border-none bg-[var(--accent)] px-[18px] py-2.5 font-['DM_Sans',sans-serif] font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
          onClick={() => submit()}
          disabled={pending || !text.trim()}
        >
          {pending ? t('translate.translating') : t('translate.button')}
        </button>
      </div>
      {error && (
        <div className="translate-error text-center text-[.8rem] text-[#e74c3c]">{error}</div>
      )}
      {result && (
        <div className="translate-result flex items-start gap-2.5 rounded-[12px] border-[1.5px] border-[var(--border)] bg-[var(--bg)] px-3.5 py-3">
          {flagUrl(META[targetLang]?.country ?? '') && (
            <img
              className="translate-result-flag mt-0.5 h-5 w-5 shrink-0 rounded-full"
              src={flagUrl(META[targetLang]?.country ?? '') ?? undefined}
              alt=""
            />
          )}
          <div className="translate-result-text flex-1 text-[.92rem] leading-[1.5] whitespace-pre-wrap text-[var(--text)]">
            {result}
          </div>
          <button
            type="button"
            className="speak-btn translate-result-speak"
            title={t('translate.speak')}
            onClick={(e) => speakForCode(targetLang as Code, result, result, e.currentTarget)}
          >
            🔊
          </button>
        </div>
      )}
    </div>,
    target,
  );
}

bindOverlayDismiss('translate-overlay', 'translate-close');
