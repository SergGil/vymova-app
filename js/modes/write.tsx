// Vymova — js/modes/write.tsx
// ✍️ WRITE MODE
import { useEffect, useRef, useState, type ReactElement } from 'react';
import { _shuf } from '../core/srs.ts';
import { lev } from '../core/distance.ts';
import { getDeckSnapshot } from '../../src/deck-store.ts';
import { W } from '../../data/words.js';
import { addCombo, breakCombo, awardXP } from '../features/combo.ts';
import { recordModeComplete, recordMistake, recordModeAnswer } from '../features/game.ts';
import { t } from '../features/i18n.ts';
import { playSound } from '../core/audio.ts';
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
import { getKnowLang, getLearnLang } from '../features/lang-pair-select.tsx';
import type { WordEntry } from '../../src/types.js';

const SIZE = 10;

type SpeechRecognitionCtor = new () => SpeechRecognitionInstance;
interface SpeechRecognitionInstance extends EventTarget {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  start(): void;
  stop(): void;
  abort(): void;
  onresult: ((e: SpeechRecognitionEvent) => void) | null;
  onerror: ((e: Event) => void) | null;
  onend: (() => void) | null;
}
interface SpeechRecognitionEvent extends Event {
  results: { [i: number]: { [i: number]: { transcript: string } }; length: number };
}

const SpeechRec: SpeechRecognitionCtor | undefined =
  (
    window as Window & {
      SpeechRecognition?: SpeechRecognitionCtor;
      webkitSpeechRecognition?: SpeechRecognitionCtor;
    }
  ).SpeechRecognition ??
  (window as Window & { webkitSpeechRecognition?: SpeechRecognitionCtor }).webkitSpeechRecognition;

function getWordInLang(w: WordEntry, lang: string): string {
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

function isCorrect(inp: string, raw: string): boolean {
  const a = inp.trim().toLowerCase();
  if (!a) return false;
  const variants = raw
    .split(/[;,/]/)
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
  return variants.some((v) => a === v || (v.length > 3 && lev(a, v) <= 1));
}

function build(src?: WordEntry[] | null): WordEntry[] {
  const pool = _shuf(
    (src?.length
      ? src
      : getDeckSnapshot().length
        ? getDeckSnapshot().slice()
        : W.slice()) as unknown as WordEntry[],
  );
  return pool.slice(0, Math.min(SIZE, pool.length));
}

let _open: ((src?: WordEntry[] | null) => void) | null = null;
let _close: (() => void) | null = null;

function openWrite(src?: WordEntry[] | null): void {
  _open?.(src);
}
function closeWrite(): void {
  _close?.();
}

export function WritePage(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const [deck, setDeck] = useState<WordEntry[]>([]);
  const [idx, setIdx] = useState(0);
  const [ok, setOk] = useState(0);
  const [fail, setFail] = useState(0);
  const [wrong, setWrong] = useState<WordEntry[]>([]);
  const [input, setInput] = useState('');
  const [answered, setAnswered] = useState(false);
  const [borderColor, setBorderColor] = useState('var(--border)');
  const [result, setResult] = useState<{ text: string; color: string } | null>(null);
  const [hint, setHint] = useState('');
  const [acItems, setAcItems] = useState<WordEntry[]>([]);
  const [acIdx, setAcIdx] = useState(-1);
  const [completed, setCompleted] = useState(false);
  const [micActive, setMicActive] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const acTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const recogRef = useRef<SpeechRecognitionInstance | null>(null);

  const w: WordEntry | null = deck[idx] ?? null;
  const knowLang = getKnowLang();
  const learnLang = getLearnLang();
  const frontWord = w ? getWordInLang(w, knowLang) : '';
  const backWord = w ? getWordInLang(w, learnLang) : '';
  const frontLang = knowLang;
  const backLang = learnLang;
  const showFinal = isOpen && deck.length > 0 && idx >= deck.length;

  const acHide = (): void => {
    setAcItems([]);
    setAcIdx(-1);
  };

  const resetQ = (): void => {
    setInput('');
    setBorderColor('var(--border)');
    setResult(null);
    setHint('');
    setAnswered(false);
    acHide();
  };

  const startGame = (src?: WordEntry[] | null): void => {
    setDeck(build(src));
    setIdx(0);
    setOk(0);
    setFail(0);
    setWrong([]);
    setCompleted(false);
    resetQ();
  };

  useEffect(() => {
    _open = (src) => {
      setIsOpen(true);
      startGame(src);
      const overlay = document.getElementById('write-overlay');
      if (overlay) overlay.style.display = 'flex';
    };
    _close = () => {
      acHide();
      setIsOpen(false);
      const overlay = document.getElementById('write-overlay');
      if (overlay) overlay.style.display = 'none';
    };
    return () => {
      _open = null;
      _close = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Focus input on new question
  useEffect(() => {
    if (!isOpen || !w) return;
    const tmr = setTimeout(() => {
      try {
        inputRef.current?.focus();
      } catch (e) {}
    }, 60);
    return () => clearTimeout(tmr);
  }, [isOpen, idx, w]);

  // Record completion once
  useEffect(() => {
    if (showFinal && !completed) {
      recordModeComplete('write');
      setCompleted(true);
    }
  }, [showFinal, completed]);

  const submit = (): void => {
    if (answered || !w) return;
    acHide();
    const ans = backWord;
    const correct = isCorrect(input, ans);
    setAnswered(true);
    if (correct) {
      setOk((o) => o + 1);
      setBorderColor('var(--success)');
      setResult({ text: t('quiz.correctMsg'), color: 'var(--success)' });
      try {
        playSound('know');
        addCombo();
        awardXP(5);
      } catch (e) {}
      recordModeAnswer('write', true);
    } else {
      setFail((f) => f + 1);
      setWrong((ws) => [...ws, w]);
      setBorderColor('var(--danger)');
      const shown = ans.split(/[;,/]/)[0].trim();
      setResult({ text: `✗ ${t('write.correctAnswerPrefix')} <b>${shown}</b>`, color: 'var(--danger)' });
      try {
        breakCombo();
        playSound('next');
      } catch (e) {}
      recordMistake(ans);
      recordModeAnswer('write', false);
    }
    setTimeout(() => {
      try {
        nextRef.current?.focus();
      } catch (e) {}
    }, 0);
  };

  const advanceQ = (): void => {
    setIdx((i) => i + 1);
    resetQ();
  };

  const onInputChange = (val: string): void => {
    setInput(val);
    if (acTimerRef.current) clearTimeout(acTimerRef.current);
    const q = val.trim().toLowerCase();
    if (!q || q.length < 2 || answered) {
      acHide();
      return;
    }
    acTimerRef.current = setTimeout(() => {
      if (backLang === 'en') {
        setAcItems(
          (W as unknown as WordEntry[])
            .filter((ww) => ww[0].toLowerCase().startsWith(q))
            .slice(0, 6),
        );
      } else {
        setAcItems([]);
      }
      setAcIdx(-1);
    }, 120);
  };

  const pickAc = (i: number): void => {
    if (acItems[i]) {
      setInput(acItems[i][0]);
      acHide();
      try {
        inputRef.current?.focus();
      } catch (e) {}
    }
  };

  const onInputKeydown = (e: KeyboardEvent | { key: string; preventDefault: () => void }): void => {
    const ev = e as KeyboardEvent;
    if (acItems.length && (ev.key === 'ArrowDown' || ev.key === 'ArrowUp')) {
      ev.preventDefault();
      const next =
        ev.key === 'ArrowDown' ? Math.min(acIdx + 1, acItems.length - 1) : Math.max(acIdx - 1, -1);
      setAcIdx(next);
      if (next >= 0) setInput(acItems[next][0]);
    } else if (ev.key === 'Escape') {
      acHide();
    } else if (ev.key === 'Enter') {
      if (acIdx >= 0 && acItems[acIdx]) {
        setInput(acItems[acIdx][0]);
        acHide();
      } else if (!answered) {
        acHide();
        submit();
      } else {
        acHide();
        advanceQ();
      }
    }
  };

  const showHint = (): void => {
    if (answered || !w) return;
    const first = backWord.split(/[;,/]/)[0].trim();
    setHint('💡 ' + first.slice(0, Math.ceil(first.length / 3)) + '...');
  };

  const startMic = (): void => {
    if (!SpeechRec || answered) return;
    if (micActive) {
      recogRef.current?.stop();
      return;
    }
    const recog = new SpeechRec();
    recog.lang = 'en-US';
    recog.continuous = false;
    recog.interimResults = false;
    recogRef.current = recog;
    setMicActive(true);
    recog.onresult = (e: SpeechRecognitionEvent) => {
      const text = e.results[0][0].transcript
        .trim()
        .toLowerCase()
        .replace(/[.,!?]/g, '');
      onInputChange(text);
    };
    recog.onerror = () => setMicActive(false);
    recog.onend = () => {
      setMicActive(false);
      setInput((curr) => {
        if (curr.trim()) setTimeout(submit, 0);
        return curr;
      });
    };
    recog.start();
  };

  // Keyboard shortcuts
  useEffect(() => {
    function onKeydown(e: KeyboardEvent): void {
      const overlay = document.getElementById('write-overlay');
      if (overlay?.style.display !== 'flex') return;
      if (e.key === 'Escape' && acItems.length) {
        acHide();
        return;
      }
      if (e.key === 'Escape') {
        closeWrite();
        return;
      }
      if (
        (e.key === 'ArrowRight' || e.key === ' ') &&
        answered &&
        document.activeElement !== inputRef.current
      ) {
        e.preventDefault();
        advanceQ();
      }
    }
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answered, acItems]);

  if (!isOpen) return <></>;

  const pct = deck.length > 0 ? Math.round((ok / deck.length) * 100) : 0;
  const finalEmoji = pct === 100 ? '🏆' : pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '💪';
  const finalTitle =
    pct === 100
      ? t('quiz.perfectTitle')
      : pct >= 80
        ? t('quiz.greatTitle')
        : pct >= 60
          ? t('quiz.goodTitle')
          : t('quiz.encourageTitle');

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 16,
        }}
      >
        <div>
          <div
            style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)' }}
            data-i18n="write.title"
          >
            {t('write.title')}
          </div>
          <div style={{ fontSize: '.75rem', color: 'var(--text3)', marginTop: 2 }}>
            {!showFinal && w
              ? `${t('quiz.question')} ${idx + 1} ${t('common.of')} ${deck.length}`
              : showFinal
                ? t('write.completed')
                : ''}
          </div>
        </div>
        <button
          onClick={closeWrite}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '1.3rem',
            cursor: 'pointer',
            color: 'var(--text3)',
          }}
        >
          ✕
        </button>
      </div>

      <div
        style={{
          height: 4,
          background: 'var(--border)',
          borderRadius: 4,
          marginBottom: 18,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            background: 'var(--accent)',
            borderRadius: 4,
            width: showFinal ? '100%' : `${deck.length ? (idx / deck.length) * 100 : 0}%`,
            transition: 'width .4s',
          }}
        />
      </div>

      {!showFinal && w && (
        <>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginBottom: 16 }}>
            <span style={{ fontSize: '.82rem', color: 'var(--success)', fontWeight: 600 }}>✓ {ok}</span>
            <span style={{ fontSize: '.82rem', color: 'var(--danger)', fontWeight: 600 }}>✗ {fail}</span>
          </div>

          <div
            style={{
              background: 'var(--bg)',
              borderRadius: 14,
              padding: '20px 16px',
              textAlign: 'center',
              marginBottom: 14,
            }}
          >
            <div
              style={{
                fontSize: '.65rem',
                fontWeight: 700,
                letterSpacing: '.1em',
                textTransform: 'uppercase',
                color: 'var(--text3)',
                marginBottom: 8,
              }}
            >
              {t(`lang.${frontLang}` as any)} → {t(`lang.${backLang}` as any)}
            </div>
            <div
              style={{
                fontFamily: "'DM Serif Display',serif",
                fontSize: '2rem',
                color: 'var(--text)',
                lineHeight: 1.15,
              }}
            >
              {frontWord}
            </div>
            <div style={{ fontSize: '.82rem', color: 'var(--accent2)', marginTop: 4 }}></div>
          </div>

          <div style={{ position: 'relative', marginBottom: 10 }}>
            <input
              ref={inputRef}
              type="text"
              autoComplete="off"
              spellCheck={false}
              placeholder={
                backLang === 'en'
                  ? t('write.placeholder')
                  : t('write.placeholder')
                      .replace(/англійськ\S+/gi, t(`lang.${backLang}` as any))
                      .replace(/english\S*/gi, t(`lang.${backLang}` as any))
              }
              value={input}
              onChange={(e) => onInputChange(e.target.value)}
              onKeyDown={onInputKeydown}
              style={{
                width: '100%',
                padding: '12px 16px',
                border: `2px solid ${borderColor}`,
                borderRadius: 12,
                fontSize: '1rem',
                fontFamily: "'DM Sans',sans-serif",
                background: 'var(--bg)',
                color: 'var(--text)',
                outline: 'none',
                boxSizing: 'border-box',
                transition: 'border-color .2s',
              }}
            />
            {acItems.length > 0 && (
              <div className="write-ac" style={{ display: 'block' }}>
                {acItems.map((aw, i) => (
                  <div
                    key={aw[0]}
                    className={'wac-item' + (i === acIdx ? ' wac-sel' : '')}
                    onClick={() => pickAc(i)}
                  >
                    <span className="wac-word">{aw[0]}</span>
                    <span className="wac-ua">{aw[1]}</span>
                    <span className="wac-n">{i + 1}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div
            style={{
              fontSize: '.72rem',
              color: 'var(--text3)',
              marginBottom: 8,
              textAlign: 'center',
              minHeight: 16,
            }}
          >
            {hint}
          </div>
          <div
            style={{
              minHeight: 28,
              textAlign: 'center',
              fontSize: '.9rem',
              fontWeight: 600,
              marginBottom: 12,
            }}
          >
            {result && (
              <span
                style={{ color: result.color, fontSize: '1.05rem' }}
                dangerouslySetInnerHTML={{ __html: result.text }}
              />
            )}
          </div>

          <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
            {!answered && (
              <button
                onClick={submit}
                style={{
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: '.9rem',
                  fontWeight: 600,
                  padding: '11px 32px',
                  borderRadius: 10,
                  border: 'none',
                  background: 'var(--accent)',
                  color: '#fff',
                  cursor: 'pointer',
                }}
                data-i18n="write.checkBtn"
              >
                {t('write.checkBtn')}
              </button>
            )}
            {answered && (
              <button
                ref={nextRef}
                onClick={advanceQ}
                style={{
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: '.9rem',
                  fontWeight: 600,
                  padding: '11px 32px',
                  borderRadius: 10,
                  border: 'none',
                  background: 'var(--accent)',
                  color: '#fff',
                  cursor: 'pointer',
                }}
                data-i18n="write.next"
              >
                {t('write.next')}
              </button>
            )}
            {SpeechRec && (
              <button
                onClick={startMic}
                title={t('write.micTitle')}
                data-i18n-title="write.micTitle"
                style={{
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: '.9rem',
                  padding: '11px 14px',
                  borderRadius: 10,
                  border: `1.5px solid ${micActive ? 'var(--danger)' : 'var(--border)'}`,
                  background: 'none',
                  color: micActive ? 'var(--danger)' : 'var(--text2)',
                  cursor: 'pointer',
                  transition: 'all .2s',
                }}
              >
                {micActive ? '🔴' : '🎤'}
              </button>
            )}
            <button
              onClick={showHint}
              style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: '.82rem',
                padding: '11px 18px',
                borderRadius: 10,
                border: '1.5px solid var(--border)',
                background: 'none',
                color: 'var(--text3)',
                cursor: 'pointer',
              }}
            >
              💡
            </button>
          </div>
        </>
      )}

      {showFinal && (
        <div style={{ textAlign: 'center', padding: '10px 0 4px' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: 8 }}>{finalEmoji}</div>
          <div
            style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}
          >
            {finalTitle}
          </div>
          <div style={{ fontSize: '.9rem', color: 'var(--text2)', marginBottom: 18 }}>
            {ok} {t('common.of')} {deck.length} ({pct}%)
          </div>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => startGame(null)}
              style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: '.88rem',
                fontWeight: 600,
                padding: '10px 22px',
                borderRadius: 10,
                border: '1.5px solid var(--accent)',
                background: 'none',
                color: 'var(--accent)',
                cursor: 'pointer',
              }}
              data-i18n="common.tryAgain"
            >
              {t('common.tryAgain')}
            </button>
            {wrong.length > 0 && (
              <button
                onClick={() => startGame(wrong)}
                style={{
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: '.88rem',
                  fontWeight: 600,
                  padding: '10px 22px',
                  borderRadius: 10,
                  border: '1.5px solid var(--accent2)',
                  background: 'none',
                  color: 'var(--accent2)',
                  cursor: 'pointer',
                }}
              >
                {t('write.mistakesBtn')} ({wrong.length})
              </button>
            )}
            <button
              onClick={closeWrite}
              style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: '.88rem',
                padding: '10px 22px',
                borderRadius: 10,
                border: '1.5px solid var(--border)',
                background: 'none',
                color: 'var(--text2)',
                cursor: 'pointer',
              }}
              data-i18n="common.close"
            >
              {t('common.close')}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

import { bindOverlayOpenClose } from '../features/overlay-utils.ts';
bindOverlayOpenClose('btn-write', 'write-overlay', () => openWrite(null), closeWrite);
