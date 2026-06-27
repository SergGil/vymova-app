// Vymova — js/features/pronunciation-toast.tsx
// Pronunciation-check result toast, triggered imperatively from
// card-actions.ts via showPronuncResult().
import { useEffect, useState, type ReactElement } from 'react';
import { t } from './i18n.ts';

interface ToastData {
  emoji: string;
  title: string;
  subtitle: string;
  color: string;
  pct: number;
}

type Listener = (status: string, score: number, spoken: string, target: string) => void;
const listeners = new Set<Listener>();

export function showPronuncResult(status: string, score: number, spoken: string, target: string): void {
  listeners.forEach(l => l(status, score, spoken, target));
}

export function PronunciationToast(): ReactElement {
  const [data, setData] = useState<ToastData | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let hideTimer: ReturnType<typeof setTimeout> | null = null;
    let unmountTimer: ReturnType<typeof setTimeout> | null = null;
    const listener = (status: string, score: number, spoken: string, target: string): void => {
      if (hideTimer) clearTimeout(hideTimer);
      if (unmountTimer) clearTimeout(unmountTimer);

      const msgs: Record<string, [string, string, string, string]> = {
        perfect:     ['🏆', t('pron.perfect.title'),     t('pron.perfect.sub'),         '#27ae60'],
        good:        ['✅', t('pron.good.title'),        t('pron.good.sub'),            '#2980b9'],
        okay:        ['👍', t('pron.okay.title'),        t('pron.okay.sub', { s: spoken }), '#e67e22'],
        try_again:   ['🔁', t('pron.tryAgain.title'),    `"${spoken ?? '?'}" → "${target}"`, '#e74c3c'],
        unsupported: ['🎤', t('pron.unsupported.title'), t('pron.unsupported.sub'),     '#888'],
        no_speech:   ['🔇', t('pron.noSpeech.title'),    t('pron.noSpeech.sub'),         '#888'],
        error:       ['⚠️', t('pron.error.title'),       t('pron.error.sub'),           '#e74c3c'],
      };
      const [emoji, title, subtitle, color] = msgs[status] ?? msgs.error;

      setData({ emoji, title, subtitle, color, pct: Math.round(score * 100) });
      setVisible(true);
      hideTimer = setTimeout(() => {
        setVisible(false);
        unmountTimer = setTimeout(() => setData(null), 350);
      }, 3000);
    };
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
      if (hideTimer) clearTimeout(hideTimer);
      if (unmountTimer) clearTimeout(unmountTimer);
    };
  }, []);

  if (!data) return <></>;

  return (
    <div
      id="_pron-toast"
      style={{
        position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        zIndex: 99998, display: 'flex', flexDirection: 'column', alignItems: 'center',
        gap: 3, padding: '10px 18px', borderRadius: 14,
        boxShadow: '0 4px 18px rgba(0,0,0,.25)',
        fontFamily: 'var(--font,sans-serif)',
        pointerEvents: 'none', transition: 'opacity .3s',
        minWidth: 160, maxWidth: 280, textAlign: 'center',
        background: data.color, color: '#fff',
        opacity: visible ? 1 : 0,
      }}
    >
      <div style={{ fontSize: '1.5rem', lineHeight: 1 }}>{data.emoji}</div>
      <div style={{ fontSize: '.88rem', fontWeight: 700, marginTop: 2 }}>{data.title}</div>
      <div style={{ fontSize: '.72rem', opacity: .88 }}>{data.subtitle}</div>
      {data.pct > 0 && (
        <div style={{ marginTop: 6, width: '100%', background: 'rgba(255,255,255,.25)', borderRadius: 4, height: 4 }}>
          <div style={{ width: `${data.pct}%`, height: '100%', background: '#fff', borderRadius: 4 }} />
        </div>
      )}
    </div>
  );
}
