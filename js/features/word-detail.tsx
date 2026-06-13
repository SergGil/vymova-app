// English Words App — js/features/word-detail.tsx
// Word Detail bottom-sheet modal: full word profile
import { useEffect, useRef, useState, type ReactElement } from 'react';
import { state } from '../../src/state.ts';
import { decodeIpa } from '../core/ui-helpers.ts';
import type { SpeakFn, SpeakLangFn } from '../core/ui-helpers.ts';
import { getSimilarWords, getSimilarWordsEs, getSimilarWordsFr } from './similar-words.tsx';
import { W } from '../../data/words.js';
import { W_ES } from '../../data/words_es.js';
import { W_FR } from '../../data/words_fr.js';
import { isBookmarked, toggleBookmark } from './bookmarks.ts';
import { ES_MODES, FR_MODES, esEntry as _esEntry, frEntry as _frEntry } from './mode-utils.ts';
import { t, pluralLabel } from './i18n.ts';
import type { WordEntry } from '../../src/types.js';

function _isEsMode(): boolean {
  const m = (document.getElementById('sel-mode') as HTMLSelectElement | null)?.value ?? '';
  return ES_MODES.has(m);
}

function _isFrMode(): boolean {
  const m = (document.getElementById('sel-mode') as HTMLSelectElement | null)?.value ?? '';
  return FR_MODES.has(m);
}

function SpeakBtn({ text, lang = 'en-US', style }: { text: string; lang?: string; style?: React.CSSProperties }): ReactElement {
  return (
    <button
      className="mode-speak" title="Прослухати" style={style}
      onClick={(e) => {
        e.stopPropagation();
        const btn = e.currentTarget;
        if (lang.startsWith('uk')) (window as Window & { _speakWithLang?: SpeakLangFn })._speakWithLang?.(text, lang, btn);
        else (window.speak as SpeakFn | undefined)?.(text, btn);
      }}
    >🔊</button>
  );
}

let _open: ((w: WordEntry) => void) | null = null;

export function openWordDetail(w: WordEntry): void {
  _open?.(w);
}

export function WordDetailPage(): ReactElement | null {
  const [cw, setCw] = useState<WordEntry | null>(null);
  const [open, setOpen] = useState(false);
  const [known, setKnown] = useState(false);
  const [bm, setBm] = useState(false);
  const [srsEntry, setSrsEntry] = useState<{ due?: string; ef?: number; reps?: number } | undefined>(undefined);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    _open = (w: WordEntry) => {
      setCw(w);
      setKnown(state.known.has(w[0]));
      setBm(isBookmarked(w[0]));
      setSrsEntry((state.srsData as Record<string, { due?: string; ef?: number; reps?: number }>)[w[0]]);
      setOpen(true);
    };
    return () => { _open = null; };
  }, []);

  useEffect(() => {
    if (open) {
      if (panelRef.current) panelRef.current.scrollTop = 0;
      const overlay = document.getElementById('wd-overlay');
      requestAnimationFrame(() => { if (overlay) overlay.style.opacity = '1'; });
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  function close(): void {
    const overlay = document.getElementById('wd-overlay');
    if (overlay) overlay.style.opacity = '0';
    setOpen(false);
    setCw(null);
  }

  if (!open || !cw) {
    return <div id="wd-overlay" style={{ display: 'none' }} />;
  }

  const w = cw;
  const ipa = decodeIpa(w[4] ?? '');
  const enEx = w[2] ?? '';
  const uaEx = w[3] ?? '';

  const isEs = _isEsMode();
  const isFr = _isFrMode();
  const esEntry = isEs ? _esEntry(w[0]) : null;
  const frEntry = isFr ? _frEntry(w[0]) : null;
  const transl = esEntry ? esEntry[0] : frEntry ? frEntry[0] : w[1];

  const similar = isEs
    ? getSimilarWordsEs(w[0], esEntry?.[0] ?? w[1], 5)
    : isFr
    ? getSimilarWordsFr(w[0], frEntry?.[0] ?? w[1], 5)
    : getSimilarWords(w[0], w[1], 5);
  const esMap = W_ES as unknown as Record<string, [string, string]>;
  const frMap = W_FR as unknown as Record<string, [string, string]>;

  const escWord = w[0].replace(/[.*+?^${}()|\[\]\\]/g, '\\$&');
  const enExHtml = enEx ? enEx.replace(new RegExp(`(${escWord}\\w*)`, 'gi'), '<b>$1</b>') : '';

  function onKnow(): void {
    (window.onWordLearned as ((w: WordEntry) => void) | undefined)?.(w);
    state.known.add(w[0]);
    setKnown(true);
  }

  function onForget(): void {
    state.known.delete(w[0]);
    delete (state.srsData as Record<string, unknown>)[w[0]];
    try {
      const { saveKnown, saveSRS } = window as Window & { saveKnown?: (s: Set<string>) => void; saveSRS?: (d: unknown) => void };
      saveKnown?.(state.known); saveSRS?.(state.srsData);
    } catch (e) {}
    setKnown(false);
    setSrsEntry(undefined);
  }

  function onBookmark(): void {
    toggleBookmark(w[0]);
    setBm(isBookmarked(w[0]));
  }

  function onGoto(): void {
    const word = w[0];
    close();
    const sel = document.getElementById('sel-range') as HTMLSelectElement | null;
    const di = state.deck.findIndex(d => d[0] === word);
    if (di !== -1) {
      (window.setIdx as ((i: number) => void) | undefined)?.(di);
      (window.render as (() => void) | undefined)?.();
    } else if (sel && sel.value !== '0') {
      sel.value = '0';
      sel.dispatchEvent(new Event('change'));
      setTimeout(() => {
        const di2 = state.deck.findIndex(d => d[0] === word);
        if (di2 !== -1) { (window.setIdx as ((i: number) => void) | undefined)?.(di2); (window.render as (() => void) | undefined)?.(); }
      }, 100);
    }
  }

  const chips: ReactElement[] = [];
  if (known) chips.push(<span key="learned" style={{ color: '#27ae60', fontWeight: 600 }}>{t('wd.learned')}</span>);
  if (srsEntry?.due) {
    const daysUntil = Math.ceil((new Date(srsEntry.due).getTime() - Date.now()) / 86_400_000);
    const label = daysUntil <= 0 ? t('wd.reviewNow') : daysUntil === 1 ? t('wd.tomorrow') : t('wd.inDays', { n: daysUntil });
    const color = daysUntil <= 0 ? '#e74c3c' : daysUntil <= 3 ? '#f39c12' : 'var(--text3)';
    chips.push(<span key="due" style={{ color }}>🔁 {label}</span>);
  }
  if (srsEntry?.reps) chips.push(<span key="reps">📝 {t('wd.repsCount', { n: srsEntry.reps, unit: pluralLabel('common_rep', srsEntry.reps) })}</span>);

  return (
    <div
      id="wd-overlay"
      style={{ display: 'flex', position: 'fixed', inset: 0, background: 'rgba(0,0,0,.6)', zIndex: 20000, alignItems: 'flex-end', justifyContent: 'center', padding: 0 }}
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}
    >
      <div ref={panelRef} id="wd-panel" style={{ background: 'var(--card)', borderRadius: '24px 24px 0 0', width: '100%', maxWidth: 560, maxHeight: '90vh', overflowY: 'auto', padding: '20px 20px 32px', boxShadow: '0 -8px 40px rgba(0,0,0,.35)', position: 'relative' }}>
        {/* Drag handle */}
        <div style={{ width: 40, height: 4, background: 'var(--border)', borderRadius: 2, margin: '0 auto 18px' }} />
        {/* Header row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
              <span id="wd-word" style={{ fontFamily: "'DM Serif Display',serif", fontSize: '2rem', color: 'var(--text)', lineHeight: 1.1 }}>{w[0]}</span>
              <SpeakBtn text={w[0]} style={{ fontSize: '1.1rem' }} />
            </div>
            <div id="wd-ipa" style={{ fontSize: '.85rem', color: 'var(--accent2)', marginTop: 2 }}>{ipa}</div>
          </div>
          <button id="wd-close" onClick={close} style={{ background: 'none', border: 'none', fontSize: '1.4rem', cursor: 'pointer', color: 'var(--text3)', padding: '2px 6px', flexShrink: 0 }}>✕</button>
        </div>
        {/* Translation */}
        <div id="wd-transl" style={{ fontSize: '1.1rem', color: 'var(--text2)', fontWeight: 600, marginBottom: 14 }}>{transl}</div>
        {/* Examples */}
        {enEx && (
          <div id="wd-examples" style={{ background: 'var(--bg)', borderRadius: 12, padding: '12px 14px', marginBottom: 14 }}>
            <div id="wd-ex-en" style={{ fontSize: '.85rem', color: 'var(--text2)', fontStyle: 'italic', lineHeight: 1.5, marginBottom: 6 }}>
              <span dangerouslySetInnerHTML={{ __html: enExHtml }} />
              <SpeakBtn text={enEx.replace(/<[^>]*>/g, '')} lang="en-US" />
            </div>
            <div id="wd-ex-ua" style={{ fontSize: '.8rem', color: 'var(--text3)', lineHeight: 1.4 }}>{uaEx}</div>
          </div>
        )}
        {/* SRS status */}
        <div id="wd-srs" style={{ fontSize: '.78rem', color: 'var(--text3)', marginBottom: 14, display: 'flex', gap: 12, flexWrap: 'wrap' }}>{chips}</div>
        {/* Similar words */}
        {similar.length > 0 && (
          <div id="wd-similar-wrap" style={{ marginBottom: 16 }}>
            <div data-i18n="cards.similarTitle" style={{ fontSize: '.72rem', fontWeight: 700, color: 'var(--text3)', letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: 8 }}>Схожі слова</div>
            <div id="wd-similar-chips" style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {similar.map(s => {
                const label = isEs ? (esMap[s[0]]?.[0] ?? s[1]) : isFr ? (frMap[s[0]]?.[0] ?? s[1]) : s[1];
                return (
                  <div key={s[0]} className="wd-chip" style={{ cursor: 'pointer', padding: '5px 10px', borderRadius: 20, border: '1.5px solid var(--border)', fontSize: '.78rem', background: 'var(--bg)' }}
                    onClick={() => {
                      const found = (W as unknown as WordEntry[]).find(x => x[0] === s[0]);
                      if (found) openWordDetail(found);
                    }}
                  >
                    <span style={{ fontWeight: 600, color: 'var(--text)' }}>{s[0]}</span>
                    <span style={{ color: 'var(--text3)', marginLeft: 5 }}>{label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {/* Actions */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {!known && (
            <button id="wd-btn-know" onClick={onKnow} style={{ flex: 1, minWidth: 120, padding: 11, borderRadius: 12, border: 'none', background: 'var(--accent)', color: '#fff', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', fontSize: '.88rem' }}>
              <span data-i18n="cards.know">✓ Знаю</span>
            </button>
          )}
          {known && (
            <button id="wd-btn-forget" onClick={onForget} style={{ padding: '11px 16px', borderRadius: 12, border: '1.5px solid var(--border)', background: 'none', color: 'var(--text2)', cursor: 'pointer', fontFamily: 'inherit', fontSize: '.88rem' }}>
              <span data-i18n="cards.forget">✕ Забути</span>
            </button>
          )}
          <button id="wd-btn-bm" onClick={onBookmark} title="Закладка" data-i18n-title="cards.bookmarkTitle" style={{ padding: '11px 14px', borderRadius: 12, border: '1.5px solid var(--border)', background: 'none', color: bm ? '#f39c12' : 'var(--text2)', cursor: 'pointer', fontSize: '1rem' }}>
            {bm ? '⭐' : '☆'}
          </button>
          <button id="wd-btn-goto" onClick={onGoto} style={{ padding: '11px 16px', borderRadius: 12, border: '1.5px solid var(--border)', background: 'none', color: 'var(--accent)', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', fontSize: '.88rem' }}>
            <span data-i18n="cards.gotoCard">→ На картку</span>
          </button>
        </div>
      </div>
    </div>
  );
}

