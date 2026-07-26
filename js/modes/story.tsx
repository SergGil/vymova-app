// Vymova — js/modes/story.tsx
// 📖 "Історії" (was "Читання+"): read short stories with vocabulary
// highlighted. Three offline builtin stories (English, always available)
// plus on-demand AI-generated stories in whichever language is currently
// being learned, via the same Gemini-backed Cloudflare Worker proxy used by
// the AI tutor / voice roleplay features. Self-hides the AI half when the
// worker isn't configured (AI_TUTOR_ENABLED === false), leaving the builtin
// stories usable offline.
import { useRef, useState, type ReactElement } from 'react';
import { W } from '../../data/words-data/words.js';
import { recordModeComplete } from '../features/game/game.ts';
import { speakForCode } from '../features/voice/speak-lang.ts';
import { t } from '../features/i18n.ts';
import { AI_PROXY_URL, AI_TUTOR_ENABLED } from '../config.ts';
import { getWorkerClientId } from '../core/worker-client-id.ts';
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
} from '../features/mode/mode-utils.ts';
import { getKnowLang, getLearnLang } from '../features/lang-pair-select.tsx';
import { useModeSession } from '../features/mode/use-mode-session.ts';

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

export interface AiStoryCacheEntry {
  id: string;
  title: string;
  text: string;
  level: CefrLevel;
  learnLang: string;
  knowLang: string;
  createdAt: number;
}
// v2 stores every generated story (capped, oldest evicted first), not just
// the most recent one — a fresh AI story used to silently overwrite the
// previous one's cache entry, so it stopped being reachable offline (or
// with AI_TUTOR_ENABLED off) the moment the user generated a new one.
export const AI_STORY_CACHE_KEY = 'ew_ai_story_cache_v2';
// v1's single-entry format — migrated into the v2 list transparently on
// first read so an existing cached story isn't silently lost, then removed.
export const AI_STORY_CACHE_KEY_V1 = 'ew_ai_story_cache';
export const MAX_CACHED_STORIES = 30;

export function loadAiStoryCacheList(): AiStoryCacheEntry[] {
  try {
    const raw = localStorage.getItem(AI_STORY_CACHE_KEY);
    if (raw) return JSON.parse(raw) as AiStoryCacheEntry[];
  } catch {
    /* corrupt JSON — fall through to the empty-list default below */
  }
  try {
    const oldRaw = localStorage.getItem(AI_STORY_CACHE_KEY_V1);
    if (oldRaw) {
      const old = JSON.parse(oldRaw) as Omit<AiStoryCacheEntry, 'id' | 'createdAt'>;
      const migrated: AiStoryCacheEntry[] = [
        { ...old, id: `${Date.now()}`, createdAt: Date.now() },
      ];
      saveAiStoryCacheList(migrated);
      localStorage.removeItem(AI_STORY_CACHE_KEY_V1);
      return migrated;
    }
  } catch {
    /* ignore — no usable legacy cache to migrate */
  }
  return [];
}

function saveAiStoryCacheList(list: AiStoryCacheEntry[]): void {
  try {
    localStorage.setItem(AI_STORY_CACHE_KEY, JSON.stringify(list));
  } catch {
    /* localStorage unavailable (private mode / quota) — cache is best-effort */
  }
}

/** Prepends a freshly generated story to the cache list (newest first),
 * evicting the oldest entries once MAX_CACHED_STORIES is exceeded. */
export function addAiStoryToCache(
  entry: Omit<AiStoryCacheEntry, 'id' | 'createdAt'>,
): AiStoryCacheEntry[] {
  const newEntry: AiStoryCacheEntry = {
    ...entry,
    id: `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    createdAt: Date.now(),
  };
  const updated = [newEntry, ...loadAiStoryCacheList()].slice(0, MAX_CACHED_STORIES);
  saveAiStoryCacheList(updated);
  return updated;
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
    headers: { 'Content-Type': 'application/json', 'X-Client-Id': getWorkerClientId() },
    body: JSON.stringify({ mode: 'story', lang: { know: knowLang, learn: learnLang }, level }),
  });
  if (!res.ok) throw new Error(`AI proxy responded ${res.status}`);
  const data = (await res.json()) as { text?: string; title?: string };
  if (!data.text) throw new Error('AI proxy returned no text');
  return { text: data.text, title: data.title };
}

function _smWordClass(isKnown: boolean): string {
  return (
    'sm-word cursor-pointer rounded-[3px] border-b-[1.5px] border-dashed px-[1px] transition-colors duration-100 ' +
    (isKnown
      ? 'sm-known border-[var(--accent)] text-inherit hover:bg-[rgba(45,90,61,.12)]'
      : 'border-[var(--accent2)] text-[var(--accent2)] hover:bg-[rgba(196,98,45,.15)]')
  );
}

function _esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
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
    const cls = _smWordClass(isKnown);
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
      return `<span class="${_smWordClass(isKnown)}" data-word="${_esc(headword)}">${safe}</span>`;
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
  const [story, setStory] = useState<Story | null>(null);
  const [popup, setPopup] = useState<Popup | null>(null);
  const [completed, setCompleted] = useState(false);
  const [level, setLevel] = useState<CefrLevel>('A2');
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cachedList, setCachedList] = useState<AiStoryCacheEntry[]>([]);
  const [, setTick] = useState(0);

  const textRef = useRef<HTMLDivElement>(null);
  // Bumped at the start of every generate() call — a late-resolving AI
  // response (Worker latency, or the user closing/reopening the modal
  // mid-request) checks this before applying its result, so a stale
  // response can no longer clobber state from a newer/different request.
  const genRef = useRef(0);

  const markCompleted = (): void => {
    if (story && !completed) {
      setCompleted(true);
      recordModeComplete('story');
    }
  };

  const session = useModeSession({
    overlayId: 'story-mode-overlay',
    modeId: 'story',
    // Completion isn't a single "reached the end" render condition here —
    // markCompleted() can fire multiple times per open session (once per
    // story read, via goBack() or the close itself), so it's called
    // manually from onClose/goBack rather than driven by isFinal.
    isFinal: false,
    showOverlay: (el) => el.classList.add('open'),
    hideOverlay: (el) => el.classList.remove('open'),
    onOpen: () => {
      setStory(null);
      setPopup(null);
      setError(null);
      setCompleted(false);
      const learnLang = getLearnLang();
      const knowLang = getKnowLang();
      setCachedList(
        loadAiStoryCacheList().filter((e) => e.learnLang === learnLang && e.knowLang === knowLang),
      );
    },
    onClose: markCompleted,
    bindExternal: (open, close) => {
      _open = open;
      _close = close;
      return () => {
        _open = null;
        _close = null;
      };
    },
  });
  const { isOpen } = session;

  const goBack = (): void => {
    markCompleted();
    setStory(null);
    setPopup(null);
  };

  const generate = async (): Promise<void> => {
    const myGen = ++genRef.current;
    setError(null);
    setPending(true);
    try {
      const learnLang = getLearnLang();
      const knowLang = getKnowLang();
      const { text, title } = await sendStoryRequest(learnLang, knowLang, level);
      if (genRef.current !== myGen) return; // a newer request superseded this one
      const updated = addAiStoryToCache({
        title: title || t('story.untitled'),
        text,
        level,
        learnLang,
        knowLang,
      });
      setCachedList(updated.filter((e) => e.learnLang === learnLang && e.knowLang === knowLang));
      setStory({ id: 'ai', title: updated[0].title, level: updated[0].level, text: updated[0].text, source: 'ai' });
      setPopup(null);
    } catch {
      if (genRef.current === myGen) setError(t('story.error'));
    } finally {
      if (genRef.current === myGen) setPending(false);
    }
  };

  const openCachedStory = (entry: AiStoryCacheEntry): void => {
    setStory({ id: 'ai', title: entry.title, level: entry.level, text: entry.text, source: 'ai' });
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
      <div className="page-header border-b-[var(--page-header-border)]">
        <div>
          <div className="page-title text-[var(--page-title-color)] [font-family:var(--page-title-font)] [letter-spacing:var(--page-title-tracking)]">
            {story ? story.title : t('modesPg.storyName')}
          </div>
          {story && (
            <div className="mt-0.5 text-[.72rem] text-[var(--accent)]">
              {t('story.levelLabel', { lvl: story.level })}
            </div>
          )}
        </div>
        <div className="flex gap-2">
          {story && (
            <button
              className="cursor-pointer rounded-[9px] border-[1.5px] border-[var(--border)] bg-transparent px-3 py-1.5 font-[inherit] text-[.8rem] text-[var(--text2)]"
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
        <div className="px-5 py-3.5">
          <div className="mb-3 text-[.82rem] text-[var(--text2)]" data-i18n="story.pickerDesc">
            {t('story.pickerDesc')}
          </div>

          {/* Previously-generated AI stories stay reachable even when
              AI_TUTOR_ENABLED is off or the worker is unreachable right
              now — they're already-fetched text, not a live request. */}
          {cachedList.length > 0 && (
            <div className="mb-3.5">
              <div className="mb-2 text-[.85rem] font-bold text-[var(--text)]">
                {t('story.savedLabel')}
              </div>
              {cachedList.map((entry) => (
                <button
                  key={entry.id}
                  onClick={() => openCachedStory(entry)}
                  className="mb-1.5 block w-full cursor-pointer rounded-[10px] border-[1.5px] border-[var(--border)] bg-[var(--bg)] px-3 py-2.5 text-left font-[inherit]"
                >
                  <div className="text-[.85rem] font-bold text-[var(--text)]">{entry.title}</div>
                  <div className="mt-0.5 text-[.75rem] text-[var(--text3)]">
                    {t('story.levelLabel', { lvl: entry.level })}
                  </div>
                </button>
              ))}
            </div>
          )}

          {AI_TUTOR_ENABLED ? (
            <div className="mb-3.5 rounded-xl border-[1.5px] border-[var(--border)] px-3.5 py-3">
              <div className="mb-2 text-[.85rem] font-bold text-[var(--text)]">
                {t('story.aiLabel')}
              </div>
              <div className="mb-2.5 flex flex-wrap gap-1.5">
                {LEVELS.map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setLevel(lvl)}
                    className={`cursor-pointer rounded-lg border-[1.5px] px-3 py-[5px] font-[inherit] text-[.8rem] font-semibold ${
                      level === lvl
                        ? 'border-[var(--accent)] bg-[var(--accent)] text-white'
                        : 'border-[var(--border)] bg-transparent text-[var(--text2)]'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
              <button
                onClick={generate}
                disabled={pending}
                className="rounded-[10px] border-none bg-[var(--accent)] px-4 py-[9px] font-[inherit] text-[.85rem] font-semibold text-white"
                style={{ cursor: pending ? 'default' : 'pointer', opacity: pending ? 0.7 : 1 }}
              >
                {pending ? t('story.generating') : t('story.generateBtn')}
              </button>
              {error && <div className="mt-2 text-[.78rem] text-[var(--danger)]">{error}</div>}
            </div>
          ) : (
            <div className="mb-3.5 rounded-[10px] bg-white/4 px-3 py-2 text-[.78rem] text-[var(--text3)]">
              {t('story.aiDisabled')}
            </div>
          )}

          <div className="mb-2 text-[.85rem] font-bold text-[var(--text)]">
            {t('story.builtinLabel')}
          </div>
          <div>
            {STORIES.map((s) => (
              <button
                key={s.id}
                onClick={() => setStory({ ...s, source: 'builtin' })}
                className="mb-2 block w-full cursor-pointer rounded-xl border-[1.5px] border-[var(--border)] bg-[var(--bg)] px-3.5 py-3 text-left font-[inherit] transition-[border-color] duration-150"
              >
                <div className="text-[.9rem] font-bold text-[var(--text)]">{s.title}</div>
                <div className="mt-0.5 text-[.75rem] text-[var(--text3)]">
                  {t('story.levelLabel', { lvl: s.level })}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {story && highlighted && (
        <div className="relative px-5 py-3.5">
          <div className="mb-3 text-[.75rem] text-[var(--text3)]">
            {t('story.statsLine', { n: highlighted.total, pct })}
          </div>
          <div
            ref={textRef}
            className="text-[.9rem] leading-[1.8] text-[var(--text)]"
            onClick={onTextClick}
            dangerouslySetInnerHTML={{ __html: highlighted.html }}
          />
          {popup && (
            <div
              className="absolute z-10 flex min-w-[170px] flex-col gap-1 rounded-xl border-[1.5px] border-[var(--border)] bg-[var(--card)] px-3.5 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,.25)]"
              style={{ top: popup.top, left: popup.left }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2">
                <span className="text-[.95rem] font-bold text-[var(--text)]">
                  {popup.learnWord}
                </span>
                <button
                  id="sm-popup-speak"
                  className="cursor-pointer border-none bg-transparent p-0.5 text-base"
                  onClick={speakPopup}
                >
                  🔊
                </button>
              </div>
              {popup.transcription && (
                <div className="text-[.75rem] text-[var(--accent2)]">{popup.transcription}</div>
              )}
              <div className="text-[.82rem] font-semibold text-[var(--text2)]">{popup.trans}</div>
              <button
                className="backup-btn primary mt-1 px-2.5 py-[5px] text-[.78rem]"
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
