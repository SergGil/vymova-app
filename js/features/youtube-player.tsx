// Vymova — js/features/youtube-player.tsx
// Embedded YouTube player: paste any video URL/ID, watch it inside the app
// with YouTube's own captions enabled (cc_load_policy=1) — no scraping, no
// backend, fully respects YouTube's embed terms.
import { createPortal } from 'react-dom';
import { useState, type FormEvent, type ReactElement } from 'react';
import { t } from './i18n.ts';
import { useStateVersion } from '../../src/store.ts';
import { bindOverlayDismiss } from './overlay-utils.ts';

const HISTORY_KEY = 'ew_yt_history';
const MAX_HISTORY = 8;

// Accepts watch?v=, youtu.be/, embed/, shorts/, or a bare 11-char video id.
export function parseYoutubeId(input: string): string | null {
  const trimmed = input.trim();
  if (/^[\w-]{11}$/.test(trimmed)) return trimmed;
  try {
    const url = new URL(trimmed);
    if (url.hostname === 'youtu.be') {
      const id = url.pathname.slice(1).split('/')[0];
      return /^[\w-]{11}$/.test(id) ? id : null;
    }
    if (url.hostname.endsWith('youtube.com')) {
      const v = url.searchParams.get('v');
      if (v && /^[\w-]{11}$/.test(v)) return v;
      const match = url.pathname.match(/\/(?:embed|shorts)\/([\w-]{11})/);
      if (match) return match[1];
    }
  } catch {
    return null;
  }
  return null;
}

function loadHistory(): string[] {
  try { return JSON.parse(localStorage.getItem(HISTORY_KEY) ?? '[]'); } catch { return []; }
}

function pushHistory(id: string): string[] {
  const next = [id, ...loadHistory().filter(v => v !== id)].slice(0, MAX_HISTORY);
  try { localStorage.setItem(HISTORY_KEY, JSON.stringify(next)); } catch {}
  return next;
}

export function YoutubePlayerPage(): ReactElement | null {
  useStateVersion();
  const target = document.getElementById('youtube-player-content');
  const [input, setInput] = useState('');
  const [videoId, setVideoId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<string[]>(() => loadHistory());

  if (!target) return null;

  const load = (id: string): void => {
    setVideoId(id);
    setError(null);
    setHistory(pushHistory(id));
  };

  const submit = (e: FormEvent): void => {
    e.preventDefault();
    const id = parseYoutubeId(input);
    if (!id) { setError(t('ytPlayer.invalidUrl')); return; }
    load(id);
  };

  return createPortal(
    <div className="yt-player-panel">
      <form className="ai-tutor-form" onSubmit={submit}>
        <input
          className="ai-tutor-input"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder={t('ytPlayer.placeholder')}
        />
        <button type="submit" className="ai-tutor-send">{t('ytPlayer.watch')}</button>
      </form>
      {error && <div className="ai-tutor-error">{error}</div>}

      {videoId ? (
        <div className="yt-player-frame-wrap">
          <iframe
            key={videoId}
            className="yt-player-frame"
            src={`https://www.youtube.com/embed/${videoId}?cc_load_policy=1&rel=0`}
            title="YouTube player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <div className="ai-tutor-hint">{t('ytPlayer.hint')}</div>
      )}

      {history.length > 0 && (
        <div className="yt-player-history">
          <div className="yt-player-history-title">{t('ytPlayer.recent')}</div>
          <div className="yt-player-history-grid">
            {history.map(id => (
              <button key={id} className="yt-player-history-item" onClick={() => load(id)} title={id}>
                <img src={`https://i.ytimg.com/vi/${id}/mqdefault.jpg`} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>,
    target,
  );
}

bindOverlayDismiss('youtube-player-overlay', 'youtube-player-close');
