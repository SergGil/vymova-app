// Vymova — js/features/reading/youtube-player.tsx
// YouTube player with interactive subtitle cues: paste a video URL, upload a
// .srt/.vtt file, and click any word in the active cue to see translation +
// mark as known — the same experience as video-player.tsx but for YouTube.
import { createPortal } from 'react-dom';
import { useState, useEffect, useRef, type FormEvent, type ReactElement } from 'react';
import { useLangVersion } from '../../../src/store.ts';
import { getKnownSnapshot, useKnownWords } from '../../../src/known-words-store.ts';
import { decodeIpa } from '../../core/ui-helpers.ts';
import { onWordLearned } from '../../core/card-engine.ts';
import { checkMilestones } from '../milestones.ts';
import { speak } from '../voice/speech.ts';
import { t } from '../i18n.ts';
import { lookupEnglishWord } from '../../modes/reading-lookup.ts';
import { entryFor, markKnownForLang } from '../mode/mode-utils.ts';
import { getKnowLang } from '../lang-pair-select.tsx';
import { parseSubtitles, findActiveCue, type Cue } from './subtitle-parser.ts';
import { bindOverlayDismiss } from '../overlay-utils.ts';

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

// Returns an unsubscribe function: if the API is still loading when the
// caller no longer wants `onReady` fired (component unmounted, or videoId
// changed and a new effect run superseded this one), the caller can pull its
// closure back out of the queue. Without this, a queued callback that
// outlived its effect would still fire once the API eventually loads —
// harmless if the component unmounted by then (playerDivRef.current is
// null), but if a *newer* effect run for a different videoId is now active,
// the stale closure would create a player for the wrong (old) video.
function ensureYTApi(onReady: () => void): () => void {
  if (_ytReady) {
    onReady();
    return () => {};
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
  return () => {
    const i = _ytCbs.indexOf(onReady);
    if (i !== -1) _ytCbs.splice(i, 1);
  };
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
    // `new URL()` throws on a schemeless string like "youtube.com/watch?v=..."
    // or "www.youtube.com/..." — a common paste pattern — so it would
    // otherwise report a perfectly valid YouTube link as invalid.
    const url = new URL(/^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`);
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
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
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
      const stateCls = isKnown
        ? 'rd-known bg-[var(--rd-known-bg)] border-b-2 border-b-[var(--rd-known-border)]'
        : 'rd-unknown bg-[var(--rd-unknown-bg)] border-b-2 border-b-[var(--rd-unknown-border)]';
      return `<span class="rd-word ${stateCls}" data-word="${_esc(w[0])}">${safe}</span>`;
    })
    .join('');
}

// ── Component ─────────────────────────────────────────────────

type PopupWord = { word: string; trans: string; ipa: string; known: boolean };

export function YoutubePlayerPage(): ReactElement | null {
  // renderCueHtml() below reads getKnownSnapshot('en') during render (to
  // highlight known/unknown words), and t() needs the UI-language channel —
  // narrower than the global bus, which also wakes this on every unrelated
  // card render/combo tick/duel poll elsewhere in the app.
  useKnownWords('en');
  useLangVersion();
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

    const unsubscribeYTApi = ensureYTApi(createPlayer);

    return () => {
      unsubscribeYTApi();
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
    const trans = entryFor(knowLang, w).word || w[1];
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
    markKnownForLang('en', popup.word);
    onWordLearned();
    checkMilestones();
    setPopup(null);
  };

  const speakPopup = (): void => {
    if (popup) speak(popup.word, null);
  };

  return createPortal(
    <div className="yt-player-panel flex flex-col gap-2.5">
      {/* URL input */}
      <form className="ai-tutor-form mt-2.5 flex shrink-0 gap-2" onSubmit={submit}>
        <input
          className="ai-tutor-input flex-1 rounded-[10px] border-[1.5px] border-[var(--border)] bg-[var(--bg)] px-3 py-2.5 font-['DM_Sans',sans-serif] text-[.88rem] text-[var(--text)] disabled:cursor-not-allowed disabled:opacity-60"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t('ytPlayer.placeholder')}
        />
        <button
          type="submit"
          className="ai-tutor-send cursor-pointer rounded-[10px] border-none bg-[var(--accent)] px-[18px] py-2.5 font-['DM_Sans',sans-serif] font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          {t('ytPlayer.watch')}
        </button>
      </form>
      {error && (
        <div className="ai-tutor-error text-center text-[.8rem] text-[#e74c3c]">{error}</div>
      )}

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
          <span className="video-player-cue-count text-[.8rem] text-[var(--text3)]">
            {t('videoPlayer.cueCount', { n: cues.length })}
          </span>
        )}
      </div>

      {/* Main stage: video | subtitle cue */}
      {videoId ? (
        <div className="video-player-stage flex items-start gap-[18px] max-[760px]:flex-col">
          {/* YouTube player mounts into this div */}
          <div className="video-player-video-col min-w-0 flex-[1_1_60%] max-[760px]:w-full max-[760px]:flex-[1_1_auto]">
            <div className="yt-player-frame-wrap relative w-full overflow-hidden rounded-[12px] bg-black pt-[56.25%]">
              <div
                ref={playerDivRef}
                className="yt-player-frame absolute inset-0 border-none size-full"
              />
            </div>
          </div>

          {/* Subtitle cue column */}
          <div className="video-player-subs-col flex min-w-0 flex-[1_1_40%] flex-col max-[760px]:w-full max-[760px]:flex-[1_1_auto]">
            {cues.length === 0 ? (
              <div className="ai-tutor-hint mt-6 text-center text-[.85rem] text-[var(--text3)]">
                {t('videoPlayer.noSubs')}
              </div>
            ) : activeCue ? (
              <div
                className="rd-text video-player-cue mb-5 text-[.95rem] leading-[1.9] text-[var(--text)]"
                onClick={onCueClick}
                dangerouslySetInnerHTML={{ __html: renderCueHtml(activeCue.text) }}
              />
            ) : (
              <div className="ai-tutor-hint mt-6 text-center text-[.85rem] text-[var(--text3)]">
                {t('videoPlayer.silentHint')}
              </div>
            )}

            {popup && (
              <div
                className="rd-word-popup sticky bottom-4 mt-5 rounded-[14px] border-[1.5px] border-[var(--border)] bg-[var(--card)] px-4 py-3.5 shadow-[0_8px_32px_rgba(0,0,0,.2)]"
                style={{ display: 'block' }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="rd-popup-word text-[1.1rem] font-extrabold">{popup.word}</div>
                <div className="rd-popup-ipa mt-px text-[.8rem] text-[var(--text3)]">
                  {popup.ipa}
                </div>
                <div className="rd-popup-trans mt-1 text-[.9rem] text-[var(--text)]">
                  {popup.trans}
                </div>
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
        <div className="ai-tutor-hint mt-6 text-center text-[.85rem] text-[var(--text3)]">
          {t('ytPlayer.hint')}
        </div>
      )}

      {/* History thumbnails */}
      {history.length > 0 && (
        <div className="yt-player-history">
          <div className="yt-player-history-title mb-1.5 text-[.7rem] font-bold tracking-[0.05em] text-[var(--text3)] uppercase">
            {t('ytPlayer.recent')}
          </div>
          <div className="yt-player-history-grid flex flex-wrap gap-2">
            {history.map((id) => (
              <button
                key={id}
                className="yt-player-history-item cursor-pointer overflow-hidden rounded-md border-none bg-transparent p-0 leading-[0]"
                onClick={() => load(id)}
                title={id}
              >
                <img
                  className="block h-[54px] w-24 rounded-md object-cover"
                  src={`https://i.ytimg.com/vi/${id}/mqdefault.jpg`}
                  alt=""
                  loading="lazy"
                />
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
