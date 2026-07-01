// Vymova — js/features/youtube-player.tsx
// YouTube player with interactive subtitle cues: paste a video URL, upload a
// .srt/.vtt file, and click any word in the active cue to see translation +
// mark as known — the same experience as video-player.tsx but for YouTube.
import { createPortal } from 'react-dom';
import { useState, useEffect, useRef, type FormEvent, type ReactElement } from 'react';
import { useStateVersion } from '../../src/store.ts';
import { saveKnown } from '../core/storage.ts';
import { getKnownSnapshot, markKnown as _markKnown } from '../../src/known-words-store.ts';
import { decodeIpa } from '../core/ui-helpers.ts';
import { onWordLearned } from '../core/card-engine.ts';
import { checkMilestones } from './milestones.ts';
import { speak } from './speech.ts';
import { t } from './i18n.ts';
import { lookupEnglishWord, getWordTrans } from '../modes/reading.tsx';
import { getKnowLang } from './lang-pair-select.tsx';
import { parseSubtitles, findActiveCue, type Cue } from './subtitle-parser.ts';
import { bindOverlayDismiss } from './overlay-utils.ts';

// ── Minimal YouTube IFrame API types ─────────────────────────
declare global {
  interface Window {
    YT: typeof YT;
    onYouTubeIframeAPIReady: (() => void) | undefined;
  }
}
// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace YT {
  const PlayerState: { PLAYING: 1; PAUSED: 2; ENDED: 0; BUFFERING: 3; CUED: 5 };
  class Player {
    constructor(el: HTMLElement | string, opts: PlayerOptions);
    getCurrentTime(): number;
    loadVideoById(id: string): void;
    destroy(): void;
  }
  interface PlayerOptions {
    videoId?: string;
    width?: string | number;
    height?: string | number;
    playerVars?: Record<string, string | number | boolean>;
    events?: Partial<{
      onReady: (e: { target: Player }) => void;
      onStateChange: (e: { data: number; target: Player }) => void;
    }>;
  }
}

// ── YT API loader (module-level singleton) ────────────────────

let _ytReady = false;
const _ytCbs: (() => void)[] = [];

function ensureYTApi(onReady: () => void): void {
  if (_ytReady) {
    onReady();
    return;
  }
  _ytCbs.push(onReady);
  if (!document.getElementById('yt-iframe-api')) {
    window.onYouTubeIframeAPIReady = () => {
      _ytReady = true;
      _ytCbs.forEach((cb) => cb());
      _ytCbs.length = 0;
    };
    const script = document.createElement('script');
    script.id = 'yt-iframe-api';
    script.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(script);
  }
}

// ── History helpers ───────────────────────────────────────────

const HISTORY_KEY = 'ew_yt_history';
const MAX_HISTORY = 8;

function loadHistory(): string[] {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY) ?? '[]');
  } catch {
    return [];
  }
}

function pushHistory(id: string): string[] {
  const next = [id, ...loadHistory().filter((v) => v !== id)].slice(0, MAX_HISTORY);
  try {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(next));
  } catch {}
  return next;
}

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

// ── Word-click rendering ──────────────────────────────────────

function _esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function renderCueHtml(text: string): string {
  const chunks = text.split(/(\s+|[,.!?;:'"()\-—]+)/);
  return chunks
    .map((chunk) => {
      const safe = _esc(chunk);
      if (/^\s+$/.test(chunk) || /^[,.!?;:'"()\-—]+$/.test(chunk)) return safe;
      const w = lookupEnglishWord(chunk);
      if (!w) return safe;
      const isKnown = getKnownSnapshot('en').has(w[0]);
      return `<span class="rd-word ${isKnown ? 'rd-known' : 'rd-unknown'}" data-word="${_esc(w[0])}">${safe}</span>`;
    })
    .join('');
}

// ── Component ─────────────────────────────────────────────────

type PopupWord = { word: string; trans: string; ipa: string; known: boolean };

export function YoutubePlayerPage(): ReactElement | null {
  useStateVersion();
  const target = document.getElementById('youtube-player-content');

  const [input, setInput] = useState('');
  const [videoId, setVideoId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<string[]>(() => loadHistory());
  const [cues, setCues] = useState<Cue[]>([]);
  const [activeCue, setActiveCue] = useState<Cue | null>(null);
  const [popup, setPopup] = useState<PopupWord | null>(null);

  const playerRef = useRef<YT.Player | null>(null);
  const playerDivRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const cuesRef = useRef<Cue[]>([]);
  cuesRef.current = cues;

  // Dismiss popup on outside click
  useEffect(() => {
    function onDocClick(e: MouseEvent): void {
      const el = e.target as HTMLElement;
      if (!el.closest('.rd-word-popup') && !el.closest('.rd-word')) setPopup(null);
    }
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  // Create / replace the YT player when videoId changes
  useEffect(() => {
    if (!videoId) return;

    const createPlayer = () => {
      if (!playerDivRef.current) return;

      // Destroy previous player if any
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch {}
        playerRef.current = null;
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setActiveCue(null);

      playerRef.current = new window.YT.Player(playerDivRef.current, {
        videoId,
        width: '100%',
        height: '100%',
        playerVars: { rel: 0, modestbranding: 1 },
        events: {
          onStateChange: ({ data }) => {
            if (data === window.YT.PlayerState.PLAYING) {
              if (intervalRef.current) clearInterval(intervalRef.current);
              intervalRef.current = setInterval(() => {
                if (!playerRef.current) return;
                const time = playerRef.current.getCurrentTime();
                setActiveCue(findActiveCue(cuesRef.current, time));
              }, 250);
            } else {
              if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
              }
            }
          },
        },
      });
    };

    ensureYTApi(createPlayer);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [videoId]);

  if (!target) return null;

  const load = (id: string): void => {
    setVideoId(id);
    setError(null);
    setHistory(pushHistory(id));
  };

  const submit = (e: FormEvent): void => {
    e.preventDefault();
    const id = parseYoutubeId(input);
    if (!id) {
      setError(t('ytPlayer.invalidUrl'));
      return;
    }
    load(id);
  };

  const onSubtitleFile = (e: { target: HTMLInputElement }): void => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;
    file
      .text()
      .then((text) => {
        setCues(parseSubtitles(text));
        setActiveCue(null);
      })
      .catch(() => {});
  };

  const onCueClick = (e: { target: EventTarget | null; stopPropagation: () => void }): void => {
    const targetEl = (e.target as HTMLElement).closest<HTMLElement>('.rd-word');
    if (!targetEl) return;
    e.stopPropagation();
    const w = lookupEnglishWord(targetEl.dataset.word ?? '');
    if (!w) return;
    const knowLang = getKnowLang();
    const trans = getWordTrans(w, knowLang) || w[1];
    setPopup({
      word: w[0],
      trans,
      ipa: decodeIpa(w[4] ?? ''),
      known: getKnownSnapshot('en').has(w[0]),
    });
  };

  const markKnown = (): void => {
    if (!popup || popup.known) {
      setPopup(null);
      return;
    }
    _markKnown('en', popup.word);
    saveKnown(getKnownSnapshot('en'));
    onWordLearned();
    checkMilestones();
    setPopup(null);
  };

  const speakPopup = (): void => {
    if (popup) speak(popup.word, null);
  };

  return createPortal(
    <div className="yt-player-panel">
      {/* URL input */}
      <form className="ai-tutor-form" onSubmit={submit}>
        <input
          className="ai-tutor-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t('ytPlayer.placeholder')}
        />
        <button type="submit" className="ai-tutor-send">
          {t('ytPlayer.watch')}
        </button>
      </form>
      {error && <div className="ai-tutor-error">{error}</div>}

      {/* Subtitle upload row */}
      <div className="video-player-uploads">
        <button
          className="backup-btn"
          onClick={() => document.getElementById('yt-sub-input')?.click()}
        >
          {t('videoPlayer.uploadSubs')}
        </button>
        <input
          id="yt-sub-input"
          type="file"
          accept=".srt,.vtt"
          style={{ display: 'none' }}
          onChange={onSubtitleFile}
        />
        {cues.length > 0 && (
          <span className="video-player-cue-count">
            {t('videoPlayer.cueCount', { n: cues.length })}
          </span>
        )}
      </div>

      {/* Main stage: video | subtitle cue */}
      {videoId ? (
        <div className="video-player-stage">
          {/* YouTube player mounts into this div */}
          <div className="video-player-video-col">
            <div className="yt-player-frame-wrap">
              <div ref={playerDivRef} className="yt-player-frame" />
            </div>
          </div>

          {/* Subtitle cue column */}
          <div className="video-player-subs-col">
            {cues.length === 0 ? (
              <div className="ai-tutor-hint">{t('videoPlayer.noSubs')}</div>
            ) : activeCue ? (
              <div
                className="rd-text video-player-cue"
                onClick={onCueClick}
                dangerouslySetInnerHTML={{ __html: renderCueHtml(activeCue.text) }}
              />
            ) : (
              <div className="ai-tutor-hint">{t('videoPlayer.silentHint')}</div>
            )}

            {popup && (
              <div
                className="rd-word-popup"
                style={{ display: 'block' }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="rd-popup-word">{popup.word}</div>
                <div className="rd-popup-ipa">{popup.ipa}</div>
                <div className="rd-popup-trans">{popup.trans}</div>
                <div style={{ display: 'flex', gap: 6, marginTop: 10 }}>
                  <button
                    className="backup-btn"
                    style={{ padding: '5px 12px' }}
                    onClick={speakPopup}
                  >
                    🔊
                  </button>
                  <button
                    className="backup-btn primary"
                    style={{ flex: 1, padding: 5 }}
                    onClick={markKnown}
                  >
                    {popup.known ? t('reading.popupKnow') : t('reading.popupLearn')}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="ai-tutor-hint">{t('ytPlayer.hint')}</div>
      )}

      {/* History thumbnails */}
      {history.length > 0 && (
        <div className="yt-player-history">
          <div className="yt-player-history-title">{t('ytPlayer.recent')}</div>
          <div className="yt-player-history-grid">
            {history.map((id) => (
              <button
                key={id}
                className="yt-player-history-item"
                onClick={() => load(id)}
                title={id}
              >
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
