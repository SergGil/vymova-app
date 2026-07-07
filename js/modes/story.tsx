// Vymova — js/modes/story.tsx
// 📖 "Історії" (was "Читання+"): read short stories with vocabulary
// highlighted. Three offline builtin stories (English, always available)
// plus on-demand AI-generated stories in whichever language is currently
// being learned, via the same Gemini-backed Cloudflare Worker proxy used by
// the AI tutor / voice roleplay features. Self-hides the AI half when the
// worker isn't configured (AI_TUTOR_ENABLED === false), leaving the builtin
// stories usable offline.
import { useEffect, useRef, useState, type ReactElement } from 'react';
import { W } from '../../data/words.js';
import { recordModeComplete } from '../features/game.ts';
import { speakForCode } from '../features/speak-lang.ts';
import { t } from '../features/i18n.ts';
import { AI_PROXY_URL, AI_TUTOR_ENABLED } from '../config.ts';
import type { WordEntry } from '../../src/types.js';
import {
  entryFor,
  getKnownSetForLang,
  markKnownForLang,
  isTargetLang,
  langConfig,
  reverseHeadwordFor,
  type Code,
  type TargetLang,
} from '../features/mode-utils.ts';
import { getKnowLang, getLearnLang } from '../features/lang-pair-select.tsx';

type CefrLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1';
const LEVELS: CefrLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1'];

// ── Built-in short stories — English only, always available offline ───
const STORIES = [
  {
    id: 'morning',
    title: 'A Busy Morning',
    level: 'A2' as CefrLevel,
    text: `Sarah woke up early in the morning. She felt tired because she had worked late the previous night. After a quick shower, she prepared a simple breakfast — toast with butter and a cup of coffee. While eating, she checked her phone and noticed several urgent messages from her colleague at work. She decided to leave the house earlier than usual to avoid the heavy traffic in the city. On the way to the office, she stopped at a small café to buy another coffee. The weather was cold and windy, so she walked fast. When she finally arrived at the office, her manager was already waiting with a new project for her to complete by the end of the day. It was going to be a very busy day.`,
  },
  {
    id: 'travel',
    title: 'The Journey',
    level: 'B1' as CefrLevel,
    text: `The expedition began at dawn, when the team gathered their equipment and prepared to depart. Their destination was a remote village located deep in the mountains, accessible only by a narrow path that wound through dense forest. The journey would take approximately three days on foot. Each member of the group carried a heavy backpack containing essential supplies — food, water, medical equipment, and warm clothing. Despite the difficult terrain, everyone maintained a positive attitude. By midday, they had covered considerable distance and decided to rest beside a clear mountain stream. The sound of flowing water and the fresh mountain air provided a welcome relief from the physical effort of the climb. As evening approached, they established camp and discussed their plans for the following day.`,
  },
  {
    id: 'science',
    title: 'A Scientific Discovery',
    level: 'B2' as CefrLevel,
    text: `The research team had been working for several months when they finally made a significant breakthrough. While analysing data from their latest experiment, they noticed an unusual pattern that contradicted their initial hypothesis. Rather than dismissing this anomaly, the lead scientist decided to investigate further. After conducting extensive additional tests, they concluded that the phenomenon they had observed was not only genuine but potentially revolutionary in its implications for the field. The discovery challenged several assumptions that had been accepted as fundamental principles for decades. Publishing their findings required careful documentation and rigorous peer review, a process that demanded considerable patience and attention to detail. When the paper was finally accepted by a prestigious scientific journal, the team felt a profound sense of achievement and anticipation about how their work might influence future research.`,
  },
];

type BuiltinStory = {
  id: string;
  title: string;
  level: CefrLevel;
  text: string;
  source: 'builtin';
};
type AiStory = { id: 'ai'; title: string; level: CefrLevel; text: string; source: 'ai' };
type Story = BuiltinStory | AiStory;

interface AiStoryCacheEntry {
  title: string;
  text: string;
  level: CefrLevel;
  learnLang: string;
  knowLang: string;
}
const AI_STORY_CACHE_KEY = 'ew_ai_story_cache';

function loadAiStoryCache(): AiStoryCacheEntry | null {
  try {
    const raw = localStorage.getItem(AI_STORY_CACHE_KEY);
    return raw ? (JSON.parse(raw) as AiStoryCacheEntry) : null;
  } catch {
    return null;
  }
}
function saveAiStoryCache(entry: AiStoryCacheEntry): void {
  try {
    localStorage.setItem(AI_STORY_CACHE_KEY, JSON.stringify(entry));
  } catch {
    /* localStorage unavailable (private mode / quota) — cache is best-effort */
  }
}

/** Calls the same Cloudflare Worker `/chat` proxy as `sendTutorMessage`
 * (ai-tutor.tsx), with `mode: 'story'` — a one-shot generation request, not
 * a conversation. */
export async function sendStoryRequest(
  learnLang: string,
  knowLang: string,
  level: CefrLevel,
): Promise<{ text: string; title?: string }> {
  const res = await fetch(`${AI_PROXY_URL}/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ mode: 'story', lang: { know: knowLang, learn: learnLang }, level }),
  });
  if (!res.ok) throw new Error(`AI proxy responded ${res.status}`);
  const data = (await res.json()) as { text?: string; title?: string };
  if (!data.text) throw new Error('AI proxy returned no text');
  return { text: data.text, title: data.title };
}

function _esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// ── Word index from W (English headword, lowercase -> index) ──────────
let _wordIdx: Map<string, number>;
function _getWordIdx(): Map<string, number> {
  if (_wordIdx) return _wordIdx;
  _wordIdx = new Map();
  (W as unknown as WordEntry[]).forEach((w, i) => _wordIdx.set(w[0].toLowerCase(), i));
  return _wordIdx;
}

const SPLIT_RE = /(\s+|[,.!?;:'"()\-—«»„""]+)/;
function isPunctOrSpace(chunk: string): boolean {
  return /^\s+$/.test(chunk) || /^[,.!?;:'"()\-—«»„""]+$/.test(chunk);
}

/** Highlighter for the builtin (always-English) stories — longest-dictionary-
 * match-first over English suffix variants, known-status always checked
 * against the plain English bucket regardless of the current learn language
 * (the text itself is English no matter what's being learned right now). */
function highlightBuiltinText(text: string): { html: string; total: number; known: number } {
  const wi = _getWordIdx();
  const known = getKnownSetForLang('en');
  let knownInStory = 0,
    totalHighlighted = 0;
  const lowerText = text.toLowerCase();
  const words = Array.from(wi.keys()).sort((a, b) => b.length - a.length);
  let result = text;
  const markers: { from: number; to: number; word: string }[] = [];

  for (const word of words) {
    if (word.length < 3) continue;
    if (!lowerText.includes(word)) continue;
    const regex = new RegExp(
      `\\b(${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?:s|ed|ing|er|est|ly)?)\\b`,
      'gi',
    );
    let m: RegExpExecArray | null;
    while ((m = regex.exec(text)) !== null) {
      const overlap = markers.some((mk) => m!.index < mk.to && m!.index + m![0].length > mk.from);
      if (!overlap) {
        markers.push({ from: m.index, to: m.index + m[0].length, word });
        totalHighlighted++;
        if (known.has(word)) knownInStory++;
      }
    }
  }

  markers.sort((a, b) => b.from - a.from);
  for (const mk of markers) {
    const isKnown = known.has(mk.word);
    const matched = text.slice(mk.from, mk.to);
    const cls = `sm-word${isKnown ? ' sm-known' : ''}`;
    result =
      result.slice(0, mk.from) +
      `<span class="${cls}" data-word="${mk.word}">${matched}</span>` +
      result.slice(mk.to);
  }
  return { html: result, total: totalHighlighted, known: knownInStory };
}

/** Highlighter for AI-generated stories — genuinely free-form text in
 * whatever language is being learned, so (unlike the builtin/assembled-
 * passage paths) there's no known per-word origin to exploit: each token is
 * looked up via `reverseHeadwordFor` (surface form -> English headword).
 * Words outside that language's current dictionary coverage simply won't
 * highlight — expected for low-coverage languages, not a bug. */
function highlightAiText(
  text: string,
  learnLang: TargetLang | 'en',
): { html: string; total: number; known: number } {
  const known = getKnownSetForLang(learnLang);
  let total = 0,
    knownCount = 0;
  const html = text
    .split(SPLIT_RE)
    .map((chunk) => {
      const safe = _esc(chunk);
      if (isPunctOrSpace(chunk)) return safe;
      const headword =
        learnLang === 'en'
          ? _getWordIdx().has(chunk.toLowerCase())
            ? chunk.toLowerCase()
            : null
          : reverseHeadwordFor(learnLang, chunk);
      if (!headword) return safe;
      total++;
      const isKnown = known.has(headword);
      if (isKnown) knownCount++;
      return `<span class="sm-word${isKnown ? ' sm-known' : ''}" data-word="${_esc(headword)}">${safe}</span>`;
    })
    .join('');
  return { html, total, known: knownCount };
}

function getTranscription(cw: WordEntry, code: Code): string {
  return isTargetLang(code) ? (langConfig(code).entry(cw[0])?.[2] ?? '') : '';
}

let _open: (() => void) | null = null;
let _close: (() => void) | null = null;

export function openStoryMode(): void {
  _open?.();
}
function closeStoryMode(): void {
  _close?.();
}

type Popup = {
  cw: WordEntry;
  learnWord: string;
  trans: string;
  transcription: string;
  known: boolean;
  knownLang: 'en' | TargetLang;
  top: number;
  left: number;
};

export function StoryPage(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const [story, setStory] = useState<Story | null>(null);
  const [popup, setPopup] = useState<Popup | null>(null);
  const [completed, setCompleted] = useState(false);
  const [level, setLevel] = useState<CefrLevel>('A2');
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cachedAi, setCachedAi] = useState<AiStoryCacheEntry | null>(null);
  const [, setTick] = useState(0);

  const textRef = useRef<HTMLDivElement>(null);

  const markCompleted = (): void => {
    if (story && !completed) {
      setCompleted(true);
      recordModeComplete('story');
    }
  };

  useEffect(() => {
    _open = () => {
      setIsOpen(true);
      setStory(null);
      setPopup(null);
      setError(null);
      setCompleted(false);
      const cache = loadAiStoryCache();
      setCachedAi(
        cache && cache.learnLang === getLearnLang() && cache.knowLang === getKnowLang()
          ? cache
          : null,
      );
      const overlay = document.getElementById('story-mode-overlay');
      if (overlay) overlay.style.display = 'flex';
    };
    _close = () => {
      markCompleted();
      setIsOpen(false);
      const overlay = document.getElementById('story-mode-overlay');
      if (overlay) overlay.style.display = 'none';
    };
    return () => {
      _open = null;
      _close = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [story, completed]);

  // Escape to close
  useEffect(() => {
    function onKeydown(e: KeyboardEvent): void {
      const overlay = document.getElementById('story-mode-overlay');
      if (e.key === 'Escape' && overlay?.style.display === 'flex') closeStoryMode();
    }
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  }, []);

  const goBack = (): void => {
    markCompleted();
    setStory(null);
    setPopup(null);
  };

  const generate = async (): Promise<void> => {
    setError(null);
    setPending(true);
    try {
      const learnLang = getLearnLang();
      const knowLang = getKnowLang();
      const { text, title } = await sendStoryRequest(learnLang, knowLang, level);
      const entry: AiStoryCacheEntry = {
        title: title || t('story.untitled'),
        text,
        level,
        learnLang,
        knowLang,
      };
      saveAiStoryCache(entry);
      setCachedAi(entry);
      setStory({
        id: 'ai',
        title: entry.title,
        level: entry.level,
        text: entry.text,
        source: 'ai',
      });
      setPopup(null);
    } catch {
      setError(t('story.error'));
    } finally {
      setPending(false);
    }
  };

  const openCachedAi = (): void => {
    if (!cachedAi) return;
    setStory({
      id: 'ai',
      title: cachedAi.title,
      level: cachedAi.level,
      text: cachedAi.text,
      source: 'ai',
    });
    setPopup(null);
  };

  const onTextClick = (e: { target: EventTarget | null; stopPropagation: () => void }): void => {
    const target = (e.target as HTMLElement).closest<HTMLElement>('.sm-word');
    if (!target) {
      setPopup(null);
      return;
    }
    e.stopPropagation();
    const headword = target.dataset.word ?? '';
    const idx = _getWordIdx().get(headword.toLowerCase());
    if (idx === undefined) return;
    const cw = (W as unknown as WordEntry[])[idx];
    const isAi = story?.source === 'ai';
    const learnLang = getLearnLang();
    const knownLang: 'en' | TargetLang = isAi && isTargetLang(learnLang) ? learnLang : 'en';
    const learnWord = target.textContent ?? cw[0];
    const trans = entryFor(getKnowLang(), cw).word || cw[1];

    const rect = target.getBoundingClientRect();
    const parent = textRef.current?.parentElement;
    const pr = parent?.getBoundingClientRect() ?? { top: 0, left: 0, width: 0 };
    const top = rect.bottom - pr.top + (parent?.scrollTop ?? 0) + 8;
    let left = rect.left - pr.left + (parent?.scrollLeft ?? 0);
    if (left + 200 > pr.width) left = pr.width - 210;
    if (left < 0) left = 0;

    setPopup({
      cw,
      learnWord,
      trans,
      transcription: isAi ? getTranscription(cw, learnLang) : '',
      known: getKnownSetForLang(knownLang).has(cw[0]),
      knownLang,
      top,
      left,
    });
  };

  const markKnown = (): void => {
    if (!popup) return;
    if (!popup.known) {
      markKnownForLang(popup.knownLang, popup.cw[0]);
    }
    setPopup(null);
    setTick((x) => x + 1);
  };

  const speakPopup = (): void => {
    if (!popup) return;
    speakForCode(
      popup.knownLang,
      popup.learnWord,
      popup.cw[0],
      document.getElementById('sm-popup-speak'),
    );
  };

  if (!isOpen) return <></>;

  const currentLearnLang = getLearnLang();
  const aiHighlightLang: 'en' | TargetLang = isTargetLang(currentLearnLang)
    ? currentLearnLang
    : 'en';
  const highlighted = story
    ? story.source === 'builtin'
      ? highlightBuiltinText(story.text)
      : highlightAiText(story.text, aiHighlightLang)
    : null;
  const pct =
    highlighted && highlighted.total > 0
      ? Math.round((highlighted.known / highlighted.total) * 100)
      : 0;

  return (
    <>
      <div className="page-header">
        <div>
          <div className="page-title">{story ? story.title : t('modesPg.storyName')}</div>
          {story && (
            <div style={{ fontSize: '.72rem', color: 'var(--accent)', marginTop: 2 }}>
              {t('story.levelLabel', { lvl: story.level })}
            </div>
          )}
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {story && (
            <button
              style={{
                padding: '6px 12px',
                borderRadius: 9,
                border: '1.5px solid var(--border)',
                background: 'none',
                color: 'var(--text2)',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontSize: '.8rem',
              }}
              onClick={goBack}
              data-i18n="cards.back"
            >
              {t('cards.back')}
            </button>
          )}
          <button
            className="page-close-btn"
            onClick={closeStoryMode}
            aria-label={t('common.close')}
          >
            ✕
          </button>
        </div>
      </div>

      {!story && (
        <div style={{ padding: '14px 20px' }}>
          <div
            style={{ fontSize: '.82rem', color: 'var(--text2)', marginBottom: 12 }}
            data-i18n="story.pickerDesc"
          >
            {t('story.pickerDesc')}
          </div>

          {AI_TUTOR_ENABLED ? (
            <div
              style={{
                border: '1.5px solid var(--border)',
                borderRadius: 12,
                padding: '12px 14px',
                marginBottom: 14,
              }}
            >
              <div
                style={{
                  fontWeight: 700,
                  fontSize: '.85rem',
                  color: 'var(--text)',
                  marginBottom: 8,
                }}
              >
                {t('story.aiLabel')}
              </div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 10 }}>
                {LEVELS.map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setLevel(lvl)}
                    style={{
                      padding: '5px 12px',
                      borderRadius: 8,
                      border: `1.5px solid ${level === lvl ? 'var(--accent)' : 'var(--border)'}`,
                      background: level === lvl ? 'var(--accent)' : 'none',
                      color: level === lvl ? '#fff' : 'var(--text2)',
                      cursor: 'pointer',
                      fontFamily: 'inherit',
                      fontSize: '.8rem',
                      fontWeight: 600,
                    }}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
              {cachedAi && (
                <button
                  onClick={openCachedAi}
                  style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'left',
                    padding: '10px 12px',
                    marginBottom: 8,
                    borderRadius: 10,
                    border: '1.5px solid var(--border)',
                    background: 'var(--bg)',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: '.85rem', color: 'var(--text)' }}>
                    {cachedAi.title}
                  </div>
                  <div style={{ fontSize: '.75rem', color: 'var(--text3)', marginTop: 2 }}>
                    {t('story.levelLabel', { lvl: cachedAi.level })}
                  </div>
                </button>
              )}
              <button
                onClick={generate}
                disabled={pending}
                style={{
                  padding: '9px 16px',
                  borderRadius: 10,
                  border: 'none',
                  background: 'var(--accent)',
                  color: '#fff',
                  fontWeight: 600,
                  cursor: pending ? 'default' : 'pointer',
                  opacity: pending ? 0.7 : 1,
                  fontFamily: 'inherit',
                  fontSize: '.85rem',
                }}
              >
                {pending ? t('story.generating') : t('story.generateBtn')}
              </button>
              {error && (
                <div style={{ fontSize: '.78rem', color: 'var(--danger)', marginTop: 8 }}>
                  {error}
                </div>
              )}
            </div>
          ) : (
            <div
              style={{
                fontSize: '.78rem',
                color: 'var(--text3)',
                marginBottom: 14,
                padding: '8px 12px',
                background: 'rgba(255,255,255,.04)',
                borderRadius: 10,
              }}
            >
              {t('story.aiDisabled')}
            </div>
          )}

          <div
            style={{ fontWeight: 700, fontSize: '.85rem', color: 'var(--text)', marginBottom: 8 }}
          >
            {t('story.builtinLabel')}
          </div>
          <div>
            {STORIES.map((s) => (
              <button
                key={s.id}
                onClick={() => setStory({ ...s, source: 'builtin' })}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  padding: '12px 14px',
                  marginBottom: 8,
                  borderRadius: 12,
                  border: '1.5px solid var(--border)',
                  background: 'var(--bg)',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  transition: 'border-color .15s',
                }}
              >
                <div style={{ fontWeight: 700, fontSize: '.9rem', color: 'var(--text)' }}>
                  {s.title}
                </div>
                <div style={{ fontSize: '.75rem', color: 'var(--text3)', marginTop: 2 }}>
                  {t('story.levelLabel', { lvl: s.level })}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {story && highlighted && (
        <div style={{ padding: '14px 20px', position: 'relative' }}>
          <div style={{ fontSize: '.75rem', color: 'var(--text3)', marginBottom: 12 }}>
            {t('story.statsLine', { n: highlighted.total, pct })}
          </div>
          <div
            ref={textRef}
            style={{ fontSize: '.9rem', lineHeight: 1.8, color: 'var(--text)' }}
            onClick={onTextClick}
            dangerouslySetInnerHTML={{ __html: highlighted.html }}
          />
          {popup && (
            <div
              style={{
                display: 'flex',
                position: 'absolute',
                background: 'var(--card)',
                border: '1.5px solid var(--border)',
                borderRadius: 12,
                padding: '10px 14px',
                boxShadow: '0 8px 24px rgba(0,0,0,.25)',
                zIndex: 10,
                minWidth: 170,
                flexDirection: 'column',
                gap: 4,
                top: popup.top,
                left: popup.left,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontWeight: 700, fontSize: '.95rem', color: 'var(--text)' }}>
                  {popup.learnWord}
                </span>
                <button
                  id="sm-popup-speak"
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    padding: 2,
                  }}
                  onClick={speakPopup}
                >
                  🔊
                </button>
              </div>
              {popup.transcription && (
                <div style={{ fontSize: '.75rem', color: 'var(--accent2)' }}>
                  {popup.transcription}
                </div>
              )}
              <div style={{ fontSize: '.82rem', color: 'var(--text2)', fontWeight: 600 }}>
                {popup.trans}
              </div>
              <button
                className="backup-btn primary"
                style={{ padding: '5px 10px', marginTop: 4, fontSize: '.78rem' }}
                onClick={markKnown}
              >
                {popup.known ? t('reading.popupKnow') : t('reading.popupLearn')}
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}

import { bindOverlayOpenClose } from '../features/overlay-utils.ts';
bindOverlayOpenClose('btn-story', 'story-mode-overlay', openStoryMode, closeStoryMode);
