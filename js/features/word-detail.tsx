// Vymova — js/features/word-detail.tsx
// Word Detail bottom-sheet modal: full word profile
import { useEffect, useRef, useState, type ReactElement } from 'react';
import { getDeckSnapshot } from '../../src/deck-store.ts';
import { getSrsDataSnapshot, deleteSrsEntry } from '../../src/srs-store.ts';
import { decodeIpa } from '../core/ui-helpers.ts';
import { speakForCode } from './speak-lang.ts';
import { saveKnown } from '../core/storage.ts';
import { getSimilarWordsFor } from './similar-words.tsx';
import { W } from '../../data/words.js';
import { isBookmarked, toggleBookmark } from './bookmarks.ts';
import {
  isTargetLang,
  langConfig,
  parsePair,
  headwordFor,
  computeCardView,
  getActiveTargetLang,
  getResolvedMode,
  type Code,
} from './mode-utils.ts';
import {
  getKnownSnapshot,
  markKnown,
  unmarkKnown,
  type KnownLang,
} from '../../src/known-words-store.ts';
import { t, pluralLabel } from './i18n.ts';
import { render, setIdx, onWordLearned as _onWordLearned } from '../core/card-engine.ts';
import { checkMilestones } from './milestones.ts';
import type { WordEntry } from '../../src/types.js';

function SpeakBtn({
  text,
  code = 'en',
  fallback,
  style,
}: {
  text: string;
  code?: Code;
  fallback?: string;
  style?: React.CSSProperties;
}): ReactElement {
  return (
    <button
      className="mode-speak"
      title="Прослухати"
      style={style}
      onClick={(e) => {
        e.stopPropagation();
        speakForCode(code, text, fallback ?? text, e.currentTarget);
      }}
    >
      🔊
    </button>
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
  const [srsEntry, setSrsEntry] = useState<
    { due?: string; ef?: number; reps?: number } | undefined
  >(undefined);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    _open = (w: WordEntry) => {
      setCw(w);
      const lang: KnownLang = getActiveTargetLang(getResolvedMode()) ?? 'en';
      setKnown(getKnownSnapshot(lang).has(w[0]));
      setBm(isBookmarked(w[0]));
      setSrsEntry(
        (getSrsDataSnapshot() as Record<string, { due?: string; ef?: number; reps?: number }>)[
          w[0]
        ],
      );
      setOpen(true);
    };
    return () => {
      _open = null;
    };
  }, []);

  useEffect(() => {
    if (open) {
      if (panelRef.current) panelRef.current.scrollTop = 0;
      const overlay = document.getElementById('wd-overlay');
      requestAnimationFrame(() => {
        if (overlay) overlay.style.opacity = '1';
      });
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
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
  const enEx = w[2] ?? '';

  // Resolved (never literally 'mix') pair — mirrors exactly what the card
  // itself shows, instead of hardcoding EN/UA regardless of the active pair.
  const mode = getResolvedMode();
  const { front, back } = parsePair(mode);
  const {
    frontWord,
    exenHtml: frontExHtml,
    exuaHtml: backExHtml,
    frontRtl,
    backRtl,
  } = computeCardView(w, mode);
  const transl = headwordFor(back, w) || w[1];
  // Transcription for whichever language is on the front right now.
  const frontTranscription = isTargetLang(front) ? langConfig(front).entry(w[0])?.[2] : undefined;
  const ipa = frontTranscription
    ? decodeIpa(frontTranscription)
    : front === 'en'
      ? decodeIpa(w[4] ?? '')
      : '';

  const similar = getSimilarWordsFor(front, w[0], transl, 5);
  const frontExPlain = frontExHtml.replace(/<[^>]+>/g, '');

  function onKnow(): void {
    _onWordLearned();
    const lang: KnownLang = getActiveTargetLang(mode) ?? 'en';
    markKnown(lang, w[0]);
    if (isTargetLang(lang)) {
      const cfg = langConfig(lang);
      cfg.saveKnown(cfg.known());
    } else {
      saveKnown(getKnownSnapshot('en'));
    }
    checkMilestones();
    setKnown(true);
  }

  function onForget(): void {
    const lang: KnownLang = getActiveTargetLang(mode) ?? 'en';
    unmarkKnown(lang, w[0]);
    deleteSrsEntry(w[0]);
    try {
      if (isTargetLang(lang)) {
        const cfg = langConfig(lang);
        cfg.saveKnown(cfg.known());
      } else {
        saveKnown(getKnownSnapshot('en'));
      }
      const { saveSRS } = window as Window & { saveSRS?: (d: unknown) => void };
      saveSRS?.(getSrsDataSnapshot());
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
    const di = getDeckSnapshot().findIndex((d) => d[0] === word);
    if (di !== -1) {
      setIdx(di);
      render();
    } else if (sel && sel.value !== '0') {
      sel.value = '0';
      sel.dispatchEvent(new Event('change'));
      setTimeout(() => {
        const di2 = getDeckSnapshot().findIndex((d) => d[0] === word);
        if (di2 !== -1) {
          setIdx(di2);
          render();
        }
      }, 100);
    }
  }

  const chips: ReactElement[] = [];
  if (known)
    chips.push(
      <span key="learned" style={{ color: 'var(--success)', fontWeight: 600 }}>
        {t('wd.learned')}
      </span>,
    );
  if (srsEntry?.due) {
    const daysUntil = Math.ceil((new Date(srsEntry.due).getTime() - Date.now()) / 86_400_000);
    const label =
      daysUntil <= 0
        ? t('wd.reviewNow')
        : daysUntil === 1
          ? t('wd.tomorrow')
          : t('wd.inDays', { n: daysUntil });
    const color = daysUntil <= 0 ? 'var(--danger)' : daysUntil <= 3 ? 'var(--accent2)' : 'var(--text3)';
    chips.push(
      <span key="due" style={{ color }}>
        🔁 {label}
      </span>,
    );
  }
  if (srsEntry?.reps)
    chips.push(
      <span key="reps">
        📝 {t('wd.repsCount', { n: srsEntry.reps, unit: pluralLabel('common_rep', srsEntry.reps) })}
      </span>,
    );

  return (
    <div
      id="wd-overlay"
      style={{
        display: 'flex',
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,.6)',
        zIndex: 20000,
        alignItems: 'flex-end',
        justifyContent: 'center',
        padding: 0,
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div
        ref={panelRef}
        id="wd-panel"
        style={{
          background: 'var(--card)',
          borderRadius: '24px 24px 0 0',
          width: '100%',
          maxWidth: 560,
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '20px 20px 32px',
          boxShadow: '0 -8px 40px rgba(0,0,0,.35)',
          position: 'relative',
        }}
      >
        {/* Drag handle */}
        <div
          style={{
            width: 40,
            height: 4,
            background: 'var(--border)',
            borderRadius: 2,
            margin: '0 auto 18px',
          }}
        />
        {/* Header row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: 4,
          }}
        >
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
              <span
                id="wd-word"
                dir={frontRtl ? 'rtl' : undefined}
                style={{
                  fontFamily: "'DM Serif Display',serif",
                  fontSize: '2rem',
                  color: 'var(--text)',
                  lineHeight: 1.1,
                }}
              >
                {frontWord || w[0]}
              </span>
              <SpeakBtn
                text={frontWord || w[0]}
                code={front}
                fallback={w[0]}
                style={{ fontSize: '1.1rem' }}
              />
            </div>
            <div id="wd-ipa" style={{ fontSize: '.85rem', color: 'var(--accent2)', marginTop: 2 }}>
              {ipa}
            </div>
          </div>
          <button
            id="wd-close"
            onClick={close}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.4rem',
              cursor: 'pointer',
              color: 'var(--text3)',
              padding: '2px 6px',
              flexShrink: 0,
            }}
          >
            ✕
          </button>
        </div>
        {/* Translation */}
        <div
          id="wd-transl"
          dir={backRtl ? 'rtl' : undefined}
          style={{ fontSize: '1.1rem', color: 'var(--text2)', fontWeight: 600, marginBottom: 14 }}
        >
          {transl}
        </div>
        {/* Examples */}
        {(frontExHtml || backExHtml) && (
          <div
            id="wd-examples"
            style={{
              background: 'var(--bg)',
              borderRadius: 12,
              padding: '12px 14px',
              marginBottom: 14,
            }}
          >
            <div
              id="wd-ex-en"
              dir={frontRtl ? 'rtl' : undefined}
              style={{
                fontSize: '.85rem',
                color: 'var(--text2)',
                fontStyle: 'italic',
                lineHeight: 1.5,
                marginBottom: 6,
              }}
            >
              <span dangerouslySetInnerHTML={{ __html: frontExHtml }} />
              {frontExPlain && (
                <SpeakBtn text={frontExPlain} code={front} fallback={enEx} />
              )}
            </div>
            <div
              id="wd-ex-ua"
              dir={backRtl ? 'rtl' : undefined}
              style={{ fontSize: '.8rem', color: 'var(--text3)', lineHeight: 1.4 }}
            >
              <span dangerouslySetInnerHTML={{ __html: backExHtml }} />
            </div>
          </div>
        )}
        {/* SRS status */}
        <div
          id="wd-srs"
          style={{
            fontSize: '.78rem',
            color: 'var(--text3)',
            marginBottom: 14,
            display: 'flex',
            gap: 12,
            flexWrap: 'wrap',
          }}
        >
          {chips}
        </div>
        {/* Similar words */}
        {similar.length > 0 && (
          <div id="wd-similar-wrap" style={{ marginBottom: 16 }}>
            <div
              style={{
                fontSize: '.72rem',
                fontWeight: 700,
                color: 'var(--text3)',
                letterSpacing: '.06em',
                textTransform: 'uppercase',
                marginBottom: 8,
              }}
            >
              {t('cards.similarTitle')}
            </div>
            <div id="wd-similar-chips" style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {similar.map((s) => {
                const sWord = headwordFor(front, s) || s[0];
                const sTransl = headwordFor(back, s) || s[1];
                return (
                  <div
                    key={s[0]}
                    className="wd-chip"
                    style={{
                      cursor: 'pointer',
                      padding: '5px 10px',
                      borderRadius: 20,
                      border: '1.5px solid var(--border)',
                      fontSize: '.78rem',
                      background: 'var(--bg)',
                    }}
                    onClick={() => {
                      const found = (W as unknown as WordEntry[]).find((x) => x[0] === s[0]);
                      if (found) openWordDetail(found);
                    }}
                  >
                    <span style={{ fontWeight: 600, color: 'var(--text)' }}>{sWord}</span>
                    <span style={{ color: 'var(--text3)', marginLeft: 5 }}>{sTransl}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {/* Actions */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {!known && (
            <button
              id="wd-btn-know"
              onClick={onKnow}
              style={{
                flex: 1,
                minWidth: 120,
                padding: 11,
                borderRadius: 12,
                border: 'none',
                background: 'var(--accent)',
                color: '#fff',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontSize: '.88rem',
              }}
            >
              <span>{t('cards.know')}</span>
            </button>
          )}
          {known && (
            <button
              id="wd-btn-forget"
              onClick={onForget}
              style={{
                padding: '11px 16px',
                borderRadius: 12,
                border: '1.5px solid var(--border)',
                background: 'none',
                color: 'var(--text2)',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontSize: '.88rem',
              }}
            >
              <span>{t('cards.forget')}</span>
            </button>
          )}
          <button
            id="wd-btn-bm"
            onClick={onBookmark}
            title={t('cards.bookmarkTitle')}
            style={{
              padding: '11px 14px',
              borderRadius: 12,
              border: '1.5px solid var(--border)',
              background: 'none',
              color: bm ? 'var(--accent2)' : 'var(--text2)',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
          >
            {bm ? '⭐' : '☆'}
          </button>
          <button
            id="wd-btn-goto"
            onClick={onGoto}
            style={{
              padding: '11px 16px',
              borderRadius: 12,
              border: '1.5px solid var(--border)',
              background: 'none',
              color: 'var(--accent)',
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: 'inherit',
              fontSize: '.88rem',
            }}
          >
            <span>{t('cards.gotoCard')}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
