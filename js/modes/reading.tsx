// Vymova — js/modes/reading.tsx
// 📖 Reading mode: text with highlighted unknown words
import { useEffect, useState, type ReactElement } from 'react';
import { saveKnown } from '../core/storage.ts';
import { getKnownSnapshot, markKnown as _markKnown } from '../../src/known-words-store.ts';
import { W } from '../../data/words.js';
import { loadEpub } from '../features/epub.ts';
import { decodeIpa } from '../core/ui-helpers.ts';
import { closePage, openPage } from '../features/sidebar.tsx';
import { t, pluralLabel } from '../features/i18n.ts';
import { onWordLearned } from '../core/card-engine.ts';
import { checkMilestones } from '../features/milestones.ts';
import { speak } from '../features/speech.ts';
import type { WordEntry } from '../../src/types.js';
import {
  esEntry,
  frEntry,
  itEntry,
  ptEntry,
  deEntry,
  heEntry,
  arEntry,
  plEntry,
  zhEntry,
  elEntry,
  jaEntry,
  trEntry,
  nlEntry,
} from '../features/mode-utils.ts';
import { getKnowLang } from '../features/lang-pair-select.tsx';

export function getWordTrans(w: WordEntry, lang: string): string {
  switch (lang) {
    case 'ua':
      return w[1];
    case 'es':
      return esEntry(w[0])?.[0] ?? '';
    case 'fr':
      return frEntry(w[0])?.[0] ?? '';
    case 'it':
      return itEntry(w[0])?.[0] ?? '';
    case 'pt':
      return ptEntry(w[0])?.[0] ?? '';
    case 'de':
      return deEntry(w[0])?.[0] ?? '';
    case 'he':
      return heEntry(w[0])?.[0] ?? '';
    case 'ar':
      return arEntry(w[0])?.[0] ?? '';
    case 'pl':
      return plEntry(w[0])?.[0] ?? '';
    case 'zh':
      return zhEntry(w[0])?.[0] ?? '';
    case 'el':
      return elEntry(w[0])?.[0] ?? '';
    case 'ja':
      return jaEntry(w[0])?.[0] ?? '';
    case 'tr':
      return trEntry(w[0])?.[0] ?? '';
    case 'nl':
      return nlEntry(w[0])?.[0] ?? '';
    default:
      return w[0];
  }
}

type TextEntry = { title: string; text: string; level: string };
type EpubBook = { title: string; chapters: TextEntry[] };

const TEXTS: TextEntry[] = [
  {
    title: 'The Storm',
    level: 'B1',
    text: 'The dark clouds began to accumulate on the horizon. Scientists had predicted that the storm would abate by morning, but the wind only grew more fierce. People sought shelter in adjacent buildings, their anxiety visible on every face. The magnitude of the storm was unprecedented — it would inevitably alter the landscape of the region.',
  },
  {
    title: 'The Discovery',
    level: 'B2',
    text: 'The archaeologist had an intuition that something significant lay beneath the ancient ruins. After weeks of meticulous excavation, the team made a remarkable discovery. The artifacts were in pristine condition, their intricate patterns still vivid after centuries. The finding would substantially expand our knowledge of the civilization that had once flourished here.',
  },
  {
    title: 'The Forest',
    level: 'B1',
    text: 'She walked through the dense forest, her footsteps barely audible on the soft moss. The trees formed a natural canopy overhead, filtering the sunlight into scattered beams. A profound tranquility pervaded the air. She felt her tension gradually diminish as she ventured deeper into this serene sanctuary, far from the chaos of urban life.',
  },
  {
    title: 'Innovation',
    level: 'B2',
    text: 'The startup had developed an innovative technology that could potentially transform the industry. Investors were eager to collaborate with the founder, whose vision was both ambitious and pragmatic. The team worked with remarkable diligence to refine their product, anticipating that it would eventually disrupt conventional approaches to the problem.',
  },
  {
    title: 'The Journey',
    level: 'B2',
    text: 'The expedition set out at dawn, their equipment meticulously organized. The terrain proved more challenging than anticipated, forcing them to adapt their strategy. Despite the persistent obstacles, the team remained resilient and continued their ascent. By nightfall, they had reached an altitude that offered a breathtaking panoramic view of the vast, luminous valley below.',
  },
  {
    title: 'The Negotiation',
    level: 'B2',
    text: 'The two factions had been in conflict for decades. A neutral mediator was appointed to facilitate dialogue between the adversaries. The negotiations were tense, yet both sides demonstrated a willingness to compromise. The agreement they reached was considered a significant diplomatic achievement, though some critics remained skeptical about its long-term sustainability.',
  },
  {
    title: 'The Library',
    level: 'B1',
    text: 'The ancient library contained thousands of manuscripts, each one a valuable artifact of human knowledge. Scholars traveled from distant regions to consult these texts, which documented everything from astronomy to philosophy. The librarian took meticulous care to preserve each document, aware that even a single page could contain irreplaceable wisdom accumulated over centuries.',
  },
  {
    title: 'The Invention',
    level: 'B2',
    text: 'The engineer had been working on her invention for three years. The device was designed to convert solar energy into a portable, efficient power source. Her colleagues were initially skeptical, but the prototype demonstrated remarkable results. The invention had the potential to provide electricity to remote communities and substantially reduce dependence on conventional fuel sources.',
  },
  {
    title: 'The City',
    level: 'B1',
    text: 'The city had transformed dramatically over the past decade. Abandoned industrial areas had been converted into vibrant cultural districts. New sustainable architecture replaced outdated structures, and the urban landscape became more diverse and accessible. Residents who had witnessed the gradual transformation expressed profound pride in their community and optimism about its future prosperity.',
  },
  {
    title: 'The Mentor',
    level: 'B1',
    text: 'The young apprentice had much to learn, but her mentor was patient and perceptive. He recognized her innate talent and encouraged her to pursue challenges beyond her comfort zone. His guidance was subtle yet effective, allowing her to develop her abilities organically. Under his tutelage, she gradually became more confident and capable, eventually surpassing expectations.',
  },
];

// ── Dictionary index (module-level cache, invalidated externally) ──
let _dictIndex: Map<string, WordEntry> | null = null;
let _stemCache: Record<string, WordEntry | false> = {};

function _buildIndex(): void {
  if (_dictIndex) return;
  _dictIndex = new Map();
  (W as unknown as WordEntry[]).forEach((entry) => {
    const key = entry[0]
      .toLowerCase()
      .replace(/\s*\([^)]*\)/g, '')
      .trim()
      .replace(/[^a-z]/g, '');
    if (key) _dictIndex!.set(key, entry);
  });
}

export function invalidateReadingIndex(): void {
  _dictIndex = null;
  _stemCache = {};
}

function _stems(w: string): string[] {
  const n = w.length,
    s: string[] = [];
  if (n > 5 && w.endsWith('ing')) {
    s.push(w.slice(0, -3));
    s.push(w.slice(0, -3) + 'e');
    if (n > 6 && w[n - 4] === w[n - 5]) s.push(w.slice(0, -4));
  }
  if (n > 4 && w.endsWith('ed')) {
    s.push(w.slice(0, -1));
    s.push(w.slice(0, -2));
    s.push(w.slice(0, -2) + 'e');
    if (n > 5 && w[n - 3] === w[n - 4]) s.push(w.slice(0, -3));
  }
  if (n > 3 && w.endsWith('ies')) s.push(w.slice(0, -3) + 'y');
  if (n > 4 && w.endsWith('es')) s.push(w.slice(0, -2));
  if (n > 3 && w.endsWith('s') && !w.endsWith('ss')) s.push(w.slice(0, -1));
  if (n > 4 && w.endsWith('er')) {
    s.push(w.slice(0, -2));
    s.push(w.slice(0, -2) + 'e');
  }
  if (n > 5 && w.endsWith('est')) {
    s.push(w.slice(0, -3));
    s.push(w.slice(0, -3) + 'e');
  }
  if (n > 4 && w.endsWith('ly')) {
    s.push(w.slice(0, -2));
    s.push(w.slice(0, -2) + 'le');
  }
  if (n > 6 && w.endsWith('ness')) s.push(w.slice(0, -4));
  if (n > 6 && w.endsWith('less')) s.push(w.slice(0, -4));
  if (n > 5 && w.endsWith('ful')) s.push(w.slice(0, -3));
  if (n > 6 && w.endsWith('ment')) {
    s.push(w.slice(0, -4));
    s.push(w.slice(0, -4) + 'e');
  }
  if (n > 6 && w.endsWith('able')) {
    s.push(w.slice(0, -4));
    s.push(w.slice(0, -4) + 'e');
  }
  if (n > 6 && w.endsWith('ible')) s.push(w.slice(0, -4));
  if (n > 6 && w.endsWith('tion')) s.push(w.slice(0, -4));
  if (n > 6 && w.endsWith('sion')) {
    s.push(w.slice(0, -4));
    s.push(w.slice(0, -4) + 'd');
  }
  if (n > 5 && w.endsWith('ity')) s.push(w.slice(0, -3));
  if (n > 5 && w.endsWith('al')) s.push(w.slice(0, -2));
  return s.filter((x) => x.length >= 3);
}

// English-keyed dictionary lookup with light stemming. Exported for reuse by
// any feature that needs to match arbitrary English text against the app's
// vocab (currently: reading mode itself, and video-player.tsx's subtitles).
export function lookupEnglishWord(raw: string): WordEntry | null {
  const clean = raw.toLowerCase().replace(/[^a-z]/g, '');
  if (!clean || clean.length < 2) return null;
  if (_stemCache[clean] !== undefined) return (_stemCache[clean] as WordEntry | false) || null;
  _buildIndex();
  const hit = _dictIndex!.get(clean);
  if (hit) {
    _stemCache[clean] = hit;
    return hit;
  }
  for (const c of _stems(clean)) {
    const h = _dictIndex!.get(c);
    if (h) {
      _stemCache[clean] = h;
      return h;
    }
  }
  _stemCache[clean] = false;
  return null;
}
const _lookupWord = lookupEnglishWord;

function _esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function _renderTextHtml(
  entry: TextEntry,
  epubBook: EpubBook | null,
): { html: string; known: number; unknown: number } {
  const chunks = entry.text.split(/(\s+|[,.!?;:'"()\-—]+)/);
  let knownCount = 0,
    unknownCount = 0;
  const html = chunks
    .map((chunk) => {
      const safe = _esc(chunk);
      if (/^\s+$/.test(chunk) || /^[,.!?;:'"()\-—]+$/.test(chunk)) return safe;
      const w = _lookupWord(chunk);
      if (!w) return safe;
      const isKnown = getKnownSnapshot('en').has(w[0]);
      if (isKnown) {
        knownCount++;
        return `<span class="rd-word rd-known" data-word="${_esc(w[0])}">${safe}</span>`;
      }
      unknownCount++;
      return `<span class="rd-word rd-unknown" data-word="${_esc(w[0])}">${safe}</span>`;
    })
    .join('');
  void epubBook;
  return { html, known: knownCount, unknown: unknownCount };
}

let _open: (() => void) | null = null;
let _close: (() => void) | null = null;

function openReading(): void {
  _open?.();
}
function closeReading(): void {
  _close?.();
}

type PopupWord = { word: string; trans: string; ipa: string; known: boolean };

export function ReadingPage(): ReactElement {
  const [currentTextIdx, setCurrentTextIdx] = useState(0);
  const [epubBook, setEpubBook] = useState<EpubBook | null>(null);
  const [popup, setPopup] = useState<PopupWord | null>(null);
  const [epubProgress, setEpubProgress] = useState<string | null>(null);
  const [, setTick] = useState(0);

  const texts = epubBook ? epubBook.chapters : TEXTS;
  const entry = texts[currentTextIdx];

  useEffect(() => {
    _open = () => {
      closePage();
      const modesOvl = document.getElementById('modes-overlay') as HTMLElement | null;
      if (modesOvl) {
        modesOvl.classList.remove('as-page', 'open');
        modesOvl.style.display = 'none';
      }
      document.getElementById('reading-overlay')?.classList.add('open');
    };
    _close = () => {
      document.getElementById('reading-overlay')?.classList.remove('open');
      setPopup(null);
      openPage('modes');
    };
    return () => {
      _open = null;
      _close = null;
    };
  }, []);

  // Click outside popup/word closes the popup
  useEffect(() => {
    function onDocClick(e: MouseEvent): void {
      const target = e.target as HTMLElement;
      if (!target.closest('.rd-word-popup') && !target.closest('.rd-word')) setPopup(null);
    }
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  const showPopup = (w: WordEntry): void => {
    const knowLang = getKnowLang();
    const trans = getWordTrans(w, knowLang) || w[1];
    setPopup({
      word: w[0],
      trans,
      ipa: decodeIpa(w[4] ?? ''),
      known: getKnownSnapshot('en').has(w[0]),
    });
  };

  const onTextClick = (e: { target: EventTarget | null; stopPropagation: () => void }): void => {
    const target = (e.target as HTMLElement).closest<HTMLElement>('.rd-word');
    if (!target) return;
    e.stopPropagation();
    const w = _lookupWord(target.dataset.word ?? '');
    if (w) showPopup(w);
  };

  const markKnown = (): void => {
    if (!popup) return;
    if (!popup.known) {
      _markKnown('en', popup.word);
      saveKnown(getKnownSnapshot('en'));
      onWordLearned();
      checkMilestones();
    }
    setPopup(null);
    setTick((x) => x + 1);
  };

  const speakPopup = (): void => {
    if (!popup) return;
    speak(popup.word, null);
  };

  const handleEpubChange = (e: { target: HTMLInputElement }): void => {
    const file = e.target.files?.[0];
    if (!file) return;
    e.target.value = '';
    const bookTitle = file.name.replace(/\.epub$/i, '');
    setEpubProgress(t('reading.epubLoading'));
    loadEpub(
      file,
      (msg: string, pct: number) => {
        setEpubProgress(`${msg} (${pct}%)`);
      },
      (chunks: string[] | null, err: string | null) => {
        if (err || !chunks?.length) {
          setEpubProgress('❌ ' + (err ?? t('reading.epubNoChapters')));
          setTimeout(() => setEpubProgress(null), 4000);
          return;
        }
        setEpubBook({
          title: bookTitle,
          chapters: chunks.map((text) => ({ text, title: bookTitle, level: 'epub' })),
        });
        setCurrentTextIdx(0);
        setEpubProgress(
          t('reading.epubLoaded', {
            n: chunks.length,
            unit: pluralLabel('common_fragment', chunks.length),
          }),
        );
        setTimeout(() => setEpubProgress(null), 2500);
      },
    );
  };

  if (!entry) return <></>;

  const { html, known, unknown } = _renderTextHtml(entry, epubBook);
  const title = epubBook
    ? `${epubBook.title} — ${t('reading.chapterLabel', { n: currentTextIdx + 1 })}`
    : entry.title;
  const level = epubBook ? 'epub' : entry.level;

  return (
    <>
      <div className="page-header">
        <div>
          <div className="page-title" data-i18n="reading.title">
            {t('reading.title')}
          </div>
          <div style={{ fontSize: '.72rem', color: 'var(--text3)', marginTop: 2 }}>
            {t('reading.statsLine', { k: known, u: unknown })}
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button
            className="backup-btn"
            style={{ padding: '5px 12px' }}
            disabled={currentTextIdx === 0}
            onClick={() => setCurrentTextIdx((i) => i - 1)}
            data-i18n="reading.prevBtn"
          >
            {t('reading.prevBtn')}
          </button>
          <span
            style={{
              fontSize: '.7rem',
              padding: '2px 8px',
              borderRadius: 20,
              background: 'var(--accent)',
              color: '#fff',
              fontWeight: 700,
            }}
          >
            {level}
          </span>
          <button
            className="backup-btn"
            style={{ padding: '5px 12px' }}
            disabled={currentTextIdx === texts.length - 1}
            onClick={() => setCurrentTextIdx((i) => i + 1)}
            data-i18n="reading.nextBtn"
          >
            {t('reading.nextBtn')}
          </button>
          <button className="page-close-btn" onClick={closeReading}>
            ✕
          </button>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          marginBottom: 12,
          flexWrap: 'wrap',
        }}
      >
        <h2
          style={{
            fontSize: '1.1rem',
            fontWeight: 700,
            color: 'var(--text)',
            flex: 1,
            minWidth: 0,
            margin: 0,
          }}
        >
          {title}
        </h2>
        <button
          className="backup-btn primary"
          style={{ padding: '6px 14px', fontSize: '.78rem', flexShrink: 0 }}
          onClick={() => document.getElementById('rd-epub-input')?.click()}
          data-i18n="reading.epubBtn"
        >
          {t('reading.epubBtn')}
        </button>
        <input
          id="rd-epub-input"
          type="file"
          accept=".epub"
          style={{ display: 'none' }}
          onChange={handleEpubChange}
        />
      </div>
      {epubProgress && (
        <div
          style={{
            fontSize: '.75rem',
            color: 'var(--accent)',
            marginBottom: 8,
            padding: '6px 10px',
            background: 'rgba(0,200,255,.07)',
            borderRadius: 8,
          }}
        >
          {epubProgress}
        </div>
      )}
      <div className="rd-text" onClick={onTextClick} dangerouslySetInnerHTML={{ __html: html }} />
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
            <button className="backup-btn" style={{ padding: '5px 12px' }} onClick={speakPopup}>
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
    </>
  );
}

import { bindOverlayOpenClose } from '../features/overlay-utils.ts';
bindOverlayOpenClose('btn-reading', 'reading-overlay', openReading, closeReading);
