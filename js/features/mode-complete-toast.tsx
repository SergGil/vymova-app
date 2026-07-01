// Vymova — js/features/mode-complete-toast.tsx
// Slide-in toast at the bottom of the screen shown after any mode completes.
// Triggered via recordModeComplete() → onModeComplete() listener.
import { useEffect, useState, type ReactElement } from 'react';
import { onModeComplete } from './game.ts';
import { getGameData } from './game.ts';
import { t } from './i18n.ts';

const MODE_ICONS: Record<string, string> = {
  quiz: '🧠',
  write: '✍️',
  listen: '🔊',
  fib: '✏️',
  lesson: '📚',
  tempo: '⚡',
  scramble: '🔀',
  letters: '🔤',
  'adaptive-quiz': '🎯',
  pairs: '🃏',
  catpairs: '🏷️',
  spelling: '🐝',
  context: '📖',
  story: '📜',
  reading: '📰',
  'daily-challenge': '🎖️',
};

type ToastData = { mode: string; icon: string; goalCur: number; goalMax: number; streak: number };

type Listener = (data: ToastData) => void;
const listeners = new Set<Listener>();

export function showModeCompleteToast(mode: string): void {
  const gd = getGameData();
  const data: ToastData = {
    mode,
    icon: MODE_ICONS[mode] ?? '🎮',
    goalCur: gd.goalCur,
    goalMax: gd.goalMax,
    streak: gd.streak,
  };
  listeners.forEach((fn) => fn(data));
}

export function ModeCompleteToast(): ReactElement {
  const [data, setData] = useState<ToastData | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    let raf: number | null = null;

    const listener = (d: ToastData): void => {
      if (timer) clearTimeout(timer);
      if (raf !== null) cancelAnimationFrame(raf);
      setData(d);
      setShow(false);
      raf = requestAnimationFrame(() => {
        raf = null;
        setShow(true);
      });
      timer = setTimeout(() => setShow(false), 2800);
    };

    listeners.add(listener);
    return () => {
      listeners.delete(listener);
      if (timer) clearTimeout(timer);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    return onModeComplete(showModeCompleteToast);
  }, []);

  if (!data) return <div className="mode-complete-toast" />;

  return (
    <div className={`mode-complete-toast${show ? ' show' : ''}`}>
      <span className="mct-icon">{data.icon}</span>
      <span className="mct-today">{t('modeComplete.today', { cur: data.goalCur, max: data.goalMax })}</span>
      {data.streak > 0 && (
        <span className="mct-streak">{t('modeComplete.streak', { n: data.streak })}</span>
      )}
    </div>
  );
}
