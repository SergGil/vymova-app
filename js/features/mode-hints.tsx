// Vymova — js/features/mode-hints.tsx
// Per-mode first-launch hint banner (shows once per mode)
import { useEffect } from 'react';
import { t } from './i18n.ts';

const SEEN_KEY = 'ew_mode_hints_seen';

const HINTS: Record<string, { key: string; panel: string }> = {
  'quiz-overlay': { key: 'hints.quiz', panel: '.quiz-panel' },
  'write-overlay': { key: 'hints.write', panel: '.quiz-panel' },
  'listen-overlay': { key: 'hints.listen', panel: '.quiz-panel' },
  'fib-overlay': { key: 'hints.fib', panel: '.quiz-panel' },
  'tempo-overlay': { key: 'hints.tempo', panel: '#tempo-panel' },
  'lesson-overlay': { key: 'hints.lesson', panel: '.quiz-panel' },
  'dc-overlay': { key: 'hints.daily', panel: '.page-inner' },
  'reading-overlay': { key: 'hints.reading', panel: '.page-inner' },
};

function _getSeen(): Set<string> {
  try {
    return new Set(JSON.parse(localStorage.getItem(SEEN_KEY) ?? '[]') as string[]);
  } catch (e) {
    return new Set();
  }
}
function _markSeen(id: string): void {
  const s = _getSeen();
  s.add(id);
  try {
    localStorage.setItem(SEEN_KEY, JSON.stringify([...s]));
  } catch (e) {}
}

function _showHint(panelEl: HTMLElement, text: string): void {
  if (panelEl.querySelector('.mode-hint-banner')) return;
  const banner = document.createElement('div');
  banner.className = 'mode-hint-banner';
  banner.style.cssText = [
    'background:var(--accent)',
    'color:#fff',
    'font-size:.78rem',
    'line-height:1.45',
    'padding:8px 14px 8px 14px',
    'border-radius:0 0 10px 10px',
    'margin:-4px -4px 14px',
    'text-align:center',
    'opacity:1',
    'transition:opacity .4s ease',
    'flex-shrink:0',
  ].join(';');
  banner.textContent = text;
  panelEl.insertBefore(banner, panelEl.firstChild);
  setTimeout(() => {
    banner.style.opacity = '0';
    setTimeout(() => {
      try {
        banner.remove();
      } catch (e) {}
    }, 450);
  }, 4500);
}

function _tryShow(overlayId: string): void {
  const seen = _getSeen();
  if (seen.has(overlayId)) return;
  const cfg = HINTS[overlayId];
  if (!cfg) return;
  const overlay = document.getElementById(overlayId);
  if (!overlay) return;

  // Check visibility: .page-overlay uses .open class; others use style.display
  const isVisible = overlay.classList.contains('open') || overlay.style.display === 'flex';
  if (!isVisible) return;

  const panel = overlay.querySelector<HTMLElement>(cfg.panel);
  if (!panel) return;
  _markSeen(overlayId);
  setTimeout(() => _showHint(panel, t(cfg.key)), 250);
}

function _watch(overlayId: string): MutationObserver | null {
  const overlay = document.getElementById(overlayId);
  if (!overlay) return null;
  const observer = new MutationObserver(() => _tryShow(overlayId));
  observer.observe(overlay, { attributes: true, attributeFilter: ['style', 'class'] });
  return observer;
}

export function ModeHints(): null {
  useEffect(() => {
    const observers = Object.keys(HINTS)
      .map(_watch)
      .filter((o): o is MutationObserver => !!o);
    return () => observers.forEach((o) => o.disconnect());
  }, []);
  return null;
}
