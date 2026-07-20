// Vymova — js/modes/reading.tsx
// 📖 Reading mode: texts assembled from the dictionary's own example
// sentences (see reading-passages.ts), highlighted by known/unknown status
// for whichever language is currently being learned — or, if the user
// imports an .epub, that book's chapters instead (English-only highlighting
// there, via the legacy stemming matcher below).
import { useState, useEffect, type ReactElement } from 'react';
import { W } from '../../data/words.js';
import { loadEpub } from '../features/reading/epub.ts';
import { decodeIpa } from '../core/ui-helpers.ts';
import { closePage, openPage } from '../features/sidebar.tsx';
import { t, pluralLabel } from '../features/i18n.ts';
import { onWordLearned } from '../core/card-engine.ts';
import { checkMilestones } from '../features/milestones.ts';
import { speakForCode } from '../features/voice/speak-lang.ts';
import type { WordEntry } from '../../src/types.js';
import {
  entryFor,
  getWordsForPair,
  getActiveKnownByLang,
  getKnownSetForLang,
  markKnownForLang,
  isTargetLang,
  langConfig,
  type Code,
  type TargetLang,
} from '../features/mode-utils.ts';
import { getKnowLang, getLearnLang } from '../features/lang-pair-select.tsx';
import {
  buildReadingPassages,
  type ReadingPassage,
  type PassageRun,
} from '../features/reading/reading-passages.ts';
import { lookupEnglishWord, invalidateReadingIndex } from './reading-lookup.ts';

export { lookupEnglishWord, invalidateReadingIndex };

type TextEntry = { title: string; text: string; level: string };
type EpubBook = { title: string; chapters: TextEntry[] };

const _lookupWord = lookupEnglishWord;

function _esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Legacy free-text highlighter — epub chapters only (see module comment).
 * Epub text is always English regardless of the current learn language, so
 * known/unknown status is checked against the plain English known-bucket. */
function _renderTextHtml(entry: TextEntry): { html: string; known: number; unknown: number } {
  const chunks = entry.text.split(/(\s+|[,.!?;:'"()\-—]+)/);
  const known = getKnownSetForLang('en');
  let knownCount = 0,
    unknownCount = 0;
  const html = chunks
    .map((chunk) => {
      const safe = _esc(chunk);
      if (/^\s+$/.test(chunk) || /^[,.!?;:'"()\-—]+$/.test(chunk)) return safe;
      const w = _lookupWord(chunk);
      if (!w) return safe;
      const isKnown = known.has(w[0]);
      if (isKnown) {
        knownCount++;
        return `<span class="rd-word rd-known cursor-pointer rounded-[3px] px-px transition-[background] duration-150 hover:opacity-75" data-word="${_esc(w[0])}">${safe}</span>`;
      }
      unknownCount++;
      return `<span class="rd-word rd-unknown cursor-pointer rounded-[3px] px-px transition-[background] duration-150 hover:opacity-75" data-word="${_esc(w[0])}">${safe}</span>`;
    })
    .join('');
  return { html, known: knownCount, unknown: unknownCount };
}

function getTranscription(cw: WordEntry, learnLang: Code): string {
  if (learnLang === 'en') return decodeIpa(cw[4] ?? '');
  if (isTargetLang(learnLang)) return langConfig(learnLang).entry(cw[0])?.[2] ?? '';
  return '';
}

let _open: (() => void) | null = null;
let _close: (() => void) | null = null;

export function openReading(): void {
  _open?.();
}
function closeReading(): void {
  _close?.();
}

type PopupWord = {
  cw: WordEntry;
  learnWord: string;
  trans: string;
  transcription: string;
  known: boolean;
  /** Which known-word bucket this popup's know/learn toggle writes to — the
   * current learn language for generated passages, or always 'en' for
   * epub-sourced words (epub text is English regardless of learn language). */
  knownLang: 'en' | TargetLang;
};
type ViewMode = 'picker' | 'reader';

export function ReadingPage(): ReactElement {
  const [passages, setPassages] = useState<ReadingPassage[]>([]);
  const [epubBook, setEpubBook] = useState<EpubBook | null>(null);
  const [view, setView] = useState<ViewMode>('picker');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [search, setSearch] = useState('');
  const [popup, setPopup] = useState<PopupWord | null>(null);
  const [epubProgress, setEpubProgress] = useState<string | null>(null);
  const [, setTick] = useState(0);

  useEffect(() => {
    _open = () => {
      closePage();
      // classList.remove alone is enough — .modes-overlay's base CSS rule is
      // already display:none, .open is what adds display:flex. Also setting
      // style.display='none' here used to leave a stale inline override that
      // permanently beat any later classList.add('open') (inline style always
      // wins over a non-!important class rule), which meant the Modes overlay
      // could never be reopened again after visiting this mode once.
      document.getElementById('modes-overlay')?.classList.remove('as-page', 'open');
      setEpubBook(null);
      setPassages(
        buildReadingPassages(getWordsForPair(W as unknown as WordEntry[]), getLearnLang()),
      );
      setView('picker');
      setSearch('');
      setPopup(null);
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

  // `displayWord`/`knownLangOverride` are set by the epub path, where the
  // clicked word is always the literal English text on the page (not
  // whatever the current learn language would translate it to), and its
  // known/unknown status always lives in the English bucket.
  const showPopup = (cw: WordEntry, displayWord?: string, knownLangOverride?: 'en'): void => {
    const learnLang = getLearnLang();
    const knownLang: 'en' | TargetLang =
      knownLangOverride ?? (isTargetLang(learnLang) ? learnLang : 'en');
    const learnWord = displayWord ?? (entryFor(learnLang, cw).word || cw[0]);
    const trans = entryFor(getKnowLang(), cw).word || cw[1];
    setPopup({
      cw,
      learnWord,
      trans,
      transcription: getTranscription(cw, learnLang),
      known: getKnownSetForLang(knownLang).has(cw[0]),
      knownLang,
    });
  };

  const onEpubTextClick = (e: {
    target: EventTarget | null;
    stopPropagation: () => void;
  }): void => {
    const target = (e.target as HTMLElement).closest<HTMLElement>('.rd-word');
    if (!target) return;
    e.stopPropagation();
    const w = _lookupWord(target.dataset.word ?? '');
    if (w) showPopup(w, w[0], 'en');
  };

  const markKnown = (): void => {
    if (!popup) return;
    if (!popup.known) {
      markKnownForLang(popup.knownLang, popup.cw[0]);
      onWordLearned();
      checkMilestones();
    }
    setPopup(null);
    setTick((x) => x + 1);
  };

  const speakPopup = (): void => {
    if (!popup) return;
    speakForCode(popup.knownLang, popup.learnWord, popup.cw[0], null);
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
        setCurrentIdx(0);
        setView('picker');
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

  const openItem = (idx: number): void => {
    setCurrentIdx(idx);
    setView('reader');
    setPopup(null);
  };

  const itemCount = epubBook ? epubBook.chapters.length : passages.length;

  type PickerItem = { idx: number; title: string; subtitle: string };
  const pickerItems: PickerItem[] = epubBook
    ? epubBook.chapters.map((c, i) => ({
        idx: i,
        title: `${epubBook.title} — ${t('reading.chapterLabel', { n: i + 1 })}`,
        subtitle: c.text.length > 90 ? c.text.slice(0, 90) + '…' : c.text,
      }))
    : passages.map((p, i) => ({
        idx: i,
        title: t('reading.rangeLabel', { from: p.from, to: p.to }),
        subtitle: p.preview.length > 90 ? p.preview.slice(0, 90) + '…' : p.preview,
      }));
  const filteredItems = search.trim()
    ? pickerItems.filter((it) => {
        const q = search.trim().toLowerCase();
        return it.title.toLowerCase().includes(q) || it.subtitle.toLowerCase().includes(q);
      })
    : pickerItems;

  const renderPassageRuns = (runs: PassageRun[], known: Set<string>): ReactElement => (
    <>
      {runs.map((run, i) =>
        run.kind === 'text' ? (
          <span key={i}>{run.text}</span>
        ) : (
          <span
            key={i}
            className={`rd-word cursor-pointer rounded-[3px] px-px transition-[background] duration-150 hover:opacity-75 ${known.has(run.cw[0]) ? 'rd-known' : 'rd-unknown'}`}
            onClick={(e) => {
              e.stopPropagation();
              showPopup(run.cw);
            }}
          >
            {run.text}
          </span>
        ),
      )}
    </>
  );

  let readerTitle = '';
  let readerBody: ReactElement | null = null;
  let statsKnown = 0;
  let statsUnknown = 0;

  if (view === 'reader') {
    if (epubBook) {
      const entry = epubBook.chapters[currentIdx];
      if (entry) {
        const { html, known, unknown } = _renderTextHtml(entry);
        statsKnown = known;
        statsUnknown = unknown;
        readerTitle = `${epubBook.title} — ${t('reading.chapterLabel', { n: currentIdx + 1 })}`;
        readerBody = (
          <div
            className="rd-text mb-5 text-[.95rem] leading-[1.9] text-[var(--text)]"
            onClick={onEpubTextClick}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      }
    } else {
      const passage = passages[currentIdx];
      if (passage) {
        const known = getActiveKnownByLang();
        statsKnown = passage.runs.filter((r) => r.kind === 'word' && known.has(r.cw[0])).length;
        statsUnknown = passage.runs.filter((r) => r.kind === 'word' && !known.has(r.cw[0])).length;
        readerTitle = t('reading.rangeLabel', { from: passage.from, to: passage.to });
        readerBody = (
          <div
            className="rd-text mb-5 text-[.95rem] leading-[1.9] text-[var(--text)]"
            onClick={(e) => e.stopPropagation()}
          >
            {renderPassageRuns(passage.runs, known)}
          </div>
        );
      }
    }
  }

  return (
    <>
      <div className="page-header">
        <div>
          <div className="page-title" data-i18n="reading.title">
            {t('reading.title')}
          </div>
          {view === 'reader' && (
            <div className="mt-0.5 text-[.72rem] text-[var(--text3)]">
              {t('reading.statsLine', { k: statsKnown, u: statsUnknown })}
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          {view === 'reader' && (
            <>
              <button
                className="backup-btn px-3 py-[5px]"
                disabled={currentIdx === 0}
                onClick={() => openItem(currentIdx - 1)}
                data-i18n="reading.prevBtn"
              >
                {t('reading.prevBtn')}
              </button>
              <button
                className="backup-btn px-3 py-[5px]"
                disabled={currentIdx === itemCount - 1}
                onClick={() => openItem(currentIdx + 1)}
                data-i18n="reading.nextBtn"
              >
                {t('reading.nextBtn')}
              </button>
              <button
                className="backup-btn px-3 py-[5px]"
                onClick={() => setView('picker')}
                data-i18n="cards.back"
              >
                {t('cards.back')}
              </button>
            </>
          )}
          <button className="page-close-btn" onClick={closeReading} aria-label={t('common.close')}>
            ✕
          </button>
        </div>
      </div>

      {view === 'picker' && (
        <div className="px-5 py-3.5">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t('reading.searchPlaceholder')}
              className="min-w-[160px] flex-1 rounded-[10px] border-[1.5px] border-[var(--border)] bg-[var(--bg)] px-3 py-2 font-[inherit] text-[.85rem] text-[var(--text)]"
            />
            <button
              className="backup-btn primary shrink-0 px-3.5 py-1.5 text-[.78rem]"
              onClick={() => document.getElementById('rd-epub-input')?.click()}
              data-i18n="reading.epubBtn"
            >
              {t('reading.epubBtn')}
            </button>
            <input
              id="rd-epub-input"
              type="file"
              accept=".epub"
              className="hidden"
              onChange={handleEpubChange}
            />
          </div>
          {epubProgress && (
            <div className="mb-2 rounded-lg bg-[rgba(0,200,255,.07)] px-2.5 py-1.5 text-[.75rem] text-[var(--accent)]">
              {epubProgress}
            </div>
          )}
          <div>
            {filteredItems.map((it) => (
              <button
                key={it.idx}
                onClick={() => openItem(it.idx)}
                className="mb-2 block w-full cursor-pointer rounded-xl border-[1.5px] border-[var(--border)] bg-[var(--bg)] px-3.5 py-3 text-left font-[inherit] transition-[border-color] duration-150"
              >
                <div className="text-[.85rem] font-bold text-[var(--accent)]">{it.title}</div>
                <div className="mt-0.5 text-[.78rem] text-[var(--text3)]">{it.subtitle}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {view === 'reader' && readerBody && (
        <div className="relative px-5 py-3.5">
          <h2 className="mt-0 mb-3 text-base font-bold text-[var(--text)]">{readerTitle}</h2>
          {readerBody}
          {popup && (
            <div
              className="rd-word-popup sticky bottom-4 mt-5 block rounded-[14px] border-[1.5px] border-[var(--border)] bg-[var(--card)] px-4 py-3.5 shadow-[0_8px_32px_rgba(0,0,0,.2)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="rd-popup-word text-[1.1rem] font-extrabold">
                {popup.learnWord}
              </div>
              {popup.transcription && (
                <div className="rd-popup-ipa mt-px text-[.8rem] text-[var(--text3)]">
                  {popup.transcription}
                </div>
              )}
              <div className="rd-popup-trans mt-1 text-[.9rem] text-[var(--text)]">
                {popup.trans}
              </div>
              <div className="mt-2.5 flex gap-1.5">
                <button className="backup-btn px-3 py-[5px]" onClick={speakPopup}>
                  🔊
                </button>
                <button
                  className="backup-btn primary flex-1 p-[5px]"
                  onClick={markKnown}
                >
                  {popup.known ? t('reading.popupKnow') : t('reading.popupLearn')}
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

import { bindOverlayOpenClose } from '../features/overlay-utils.ts';
bindOverlayOpenClose('btn-reading', 'reading-overlay', openReading, closeReading);
