// Vymova — js/modes/fib.tsx
// ✏️ FILL IN BLANK MODE
import { useEffect, useRef, useState, type ReactElement } from 'react';
import { orderDeckPool } from '../core/srs.ts';
import { lev } from '../core/distance.ts';
import { getDeckSnapshot } from '../../src/deck-store.ts';
import { W } from '../../data/words-data/words.js';
import { addCombo, breakCombo, awardXP } from '../features/game/combo.ts';
import { recordMistake, recordModeAnswer } from '../features/game/game.ts';
import { t } from '../features/i18n.ts';
import { playSound } from '../core/audio.ts';
import { speakForCode } from '../features/voice/speak-lang.ts';
import type { WordEntry } from '../../src/types.js';
import { entryFor, type Code } from '../features/mode/mode-utils.ts';
import { getLearnLang } from '../features/lang-pair-select.tsx';
import { ModeFinalScreen } from '../features/mode/mode-final-screen.tsx';
import { useModeSession } from '../features/mode/use-mode-session.ts';

const SIZE = 10;
type BlankItem = { sentence: string; answer: string; base: string };
type FibEntry = { w: WordEntry; blank: BlankItem };

function getLangWord(w: WordEntry, lang: string): string {
  return entryFor(lang as Code, w).word;
}

function getLangSentence(w: WordEntry, lang: string): string {
  return entryFor(lang as Code, w).ex;
}

function makeBlank(w: WordEntry, learnLang: string = 'en'): BlankItem | null {
  const learnWord = getLangWord(w, learnLang);
  if (!learnWord) return null;
  let sentence = getLangSentence(w, learnLang);
  if (!sentence || sentence.length < 5) {
    // fallback to EN sentence if current lang has no sentence
    if (learnLang !== 'en') sentence = w[2] ?? '';
    if (!sentence || sentence.length < 5) return null;
  }
  if (!sentence.includes('<b>')) {
    const esc = learnWord.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    sentence = sentence.replace(new RegExp('(' + esc + ')', 'i'), '<b>$1</b>');
    // if still no match and learnLang is not EN, also try EN word
    if (!sentence.includes('<b>') && learnLang !== 'en') {
      const escEn = w[0].replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      sentence = sentence.replace(new RegExp('(' + escEn + ')', 'i'), '<b>$1</b>');
    }
  }
  const m = sentence.match(/<b>(.*?)<\/b>/i);
  if (!m) return null;
  return {
    sentence: sentence.replace(/<b>.*?<\/b>/i, '<span class="fib-blank">___</span>'),
    answer: m[1],
    base: w[0],
  };
}

function build(): FibEntry[] {
  const learnLang = getLearnLang();
  const base = (getDeckSnapshot().length
    ? getDeckSnapshot().slice()
    : W.slice()) as unknown as WordEntry[];
  const pool = orderDeckPool(base);
  const deck: FibEntry[] = [];
  for (let i = 0; i < pool.length && deck.length < SIZE; i++) {
    const b = makeBlank(pool[i], learnLang);
    if (b) deck.push({ w: pool[i], blank: b });
  }
  return deck;
}

function renderSentence(item: FibEntry, correct: boolean | null): string {
  if (correct === null) return item.blank.sentence;
  const hlStyle = correct
    ? 'background:color-mix(in srgb, var(--success) 15%, transparent);border-color:var(--success);color:var(--success)'
    : 'background:color-mix(in srgb, var(--danger) 12%, transparent);border-color:var(--danger);color:var(--danger)';
  return item.blank.sentence.replace(
    /<span class="fib-blank">.*?<\/span>/,
    `<span class="fib-blank" style="${hlStyle};border-radius:4px;padding:0 4px;">${item.blank.answer}</span>`,
  );
}

let _open: (() => void) | null = null;
let _close: (() => void) | null = null;

export function openFib(): void {
  _open?.();
}
function closeFib(): void {
  _close?.();
}

export function FibPage(): ReactElement {
  const [deck, setDeck] = useState<FibEntry[]>([]);
  const [idx, setIdx] = useState(0);
  const [ok, setOk] = useState(0);
  const [fail, setFail] = useState(0);
  const [input, setInput] = useState('');
  const [result, setResult] = useState<boolean | null>(null); // null = unanswered, true/false = correct/incorrect
  const [hint, setHint] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);
  const stateRef = useRef({ result, idx, deck });
  stateRef.current = { result, idx, deck };

  const item: FibEntry | null = deck[idx] ?? null;
  const showFinal = deck.length > 0 && idx >= deck.length;
  const noSentences = deck.length === 0;

  const startGame = (): void => {
    const d = build();
    setDeck(d);
    setIdx(0);
    setOk(0);
    setFail(0);
    setInput('');
    setResult(null);
    setHint('');
  };

  const session = useModeSession({
    overlayId: 'fib-overlay',
    modeId: 'fib',
    isFinal: showFinal,
    onOpen: startGame,
    closeOnEscape: false,
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

  // Focus input on new question
  useEffect(() => {
    if (!isOpen || !item) return;
    const tmr = setTimeout(() => {
      try {
        inputRef.current?.focus();
      } catch (e) {}
    }, 60);
    return () => clearTimeout(tmr);
  }, [isOpen, idx, item]);

  const advanceQ = (): void => {
    setIdx((i) => i + 1);
    setInput('');
    setResult(null);
    setHint('');
  };

  const submit = (): void => {
    if (!item || result !== null) return;
    const inp = input.trim().toLowerCase();
    const ans = item.blank.answer.toLowerCase();
    const base = item.blank.base.toLowerCase();
    const okAnswer =
      inp === ans ||
      inp === base ||
      (ans.length > 3 && lev(inp, ans) <= 1) ||
      (base.length > 3 && lev(inp, base) <= 1);
    setResult(okAnswer);
    if (okAnswer) {
      setOk((o) => o + 1);
      try {
        addCombo();
        awardXP(5);
        playSound('know');
      } catch (e) {}
      recordModeAnswer('fib', true);
    } else {
      setFail((f) => f + 1);
      try {
        breakCombo();
        playSound('next');
      } catch (e) {}
      recordMistake(item.blank.base);
      recordModeAnswer('fib', false);
    }
  };

  const showHint = (): void => {
    if (result !== null || !item) return;
    const a = item.blank.answer;
    setHint('💡 ' + a.slice(0, Math.ceil(a.length / 2)) + '...');
  };

  const speakCorrectWord = (): void => {
    if (!item) return;
    const learnLangNow = getLearnLang();
    const entry = entryFor(learnLangNow, item.w);
    const speakWord = learnLangNow === 'en' ? item.blank.answer : entry.word || item.blank.answer;
    try {
      speakForCode(
        learnLangNow,
        speakWord,
        item.blank.answer,
        inputRef.current as unknown as HTMLElement,
        entry.translit,
      );
    } catch (e) {}
  };

  // Keyboard shortcuts
  useEffect(() => {
    function onKeydown(e: KeyboardEvent): void {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        closeFib();
        return;
      }
      const { result: curResult, idx: curIdx, deck: curDeck } = stateRef.current;
      if (
        (e.key === 'ArrowRight' || e.key === ' ') &&
        curResult !== null &&
        document.activeElement !== inputRef.current
      ) {
        if (curIdx < curDeck.length) {
          e.preventDefault();
          advanceQ();
        }
      }
    }
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  }, [isOpen]);

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
            data-i18n="fib.title"
          >
            {t('fib.title')}
          </div>
          <div style={{ fontSize: '.75rem', color: 'var(--text3)', marginTop: 2 }}>
            {!showFinal && !noSentences && item
              ? `${t('fib.sentence')} ${idx + 1} ${t('common.of')} ${deck.length}`
              : showFinal
                ? t('write.completed')
                : ''}
          </div>
        </div>
        <button
          onClick={closeFib}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '1.3rem',
            cursor: 'pointer',
            color: 'var(--text3)',
          }}
          aria-label={t('common.close')}
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
            transition: 'width .4s',
            width: showFinal ? '100%' : `${deck.length ? (idx / deck.length) * 100 : 0}%`,
          }}
        />
      </div>

      {noSentences && (
        <div style={{ color: 'var(--danger)', fontSize: '.9rem' }}>{t('fib.noSentences')}</div>
      )}

      {!noSentences && !showFinal && item && (
        <>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginBottom: 14 }}>
            <span style={{ fontSize: '.82rem', color: 'var(--success)', fontWeight: 600 }}>
              ✓ {ok}
            </span>
            <span style={{ fontSize: '.82rem', color: 'var(--danger)', fontWeight: 600 }}>
              ✗ {fail}
            </span>
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
                marginBottom: 10,
              }}
            >
              Вставте пропущене слово
            </div>
            <div
              className="fib-sentence"
              dangerouslySetInnerHTML={{ __html: renderSentence(item, result) }}
            />
            {hint && (
              <div
                style={{
                  fontSize: '.75rem',
                  color: 'var(--text3)',
                  marginTop: 8,
                  fontStyle: 'italic',
                }}
              >
                {hint}
              </div>
            )}
          </div>

          <input
            ref={inputRef}
            type="text"
            autoComplete="off"
            spellCheck={false}
            placeholder={t('fib.placeholder')}
            data-i18n-placeholder="fib.placeholder"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                if (result === null) submit();
                else advanceQ();
              }
            }}
            style={{
              width: '100%',
              padding: '12px 16px',
              border: `2px solid ${result === null ? 'var(--border)' : result ? 'var(--success)' : 'var(--danger)'}`,
              borderRadius: 12,
              fontSize: '1rem',
              fontFamily: "'DM Sans',sans-serif",
              background: 'var(--bg)',
              color: 'var(--text)',
              outline: 'none',
              boxSizing: 'border-box',
              marginBottom: 10,
              transition: 'border-color .2s',
            }}
          />

          <div
            style={{
              minHeight: 24,
              textAlign: 'center',
              fontSize: '.9rem',
              fontWeight: 600,
              marginBottom: 10,
            }}
          >
            {result === true && (
              <span style={{ color: 'var(--success)' }}>{t('quiz.correctMsg')}</span>
            )}
            {result === false && (
              <>
                <span style={{ color: 'var(--danger)' }}>{t('quiz.incorrectMsg')}</span>
                <button
                  className="mode-speak ml-2 inline-flex h-[30px] w-[30px] shrink-0 cursor-pointer items-center justify-center rounded-md border-none bg-white/7 align-middle text-[.9rem] text-[var(--text3)] transition-all duration-150"
                  title={t('common.listen')}
                  onClick={speakCorrectWord}
                >
                  🔊
                </button>
              </>
            )}
          </div>

          <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
            {result === null && (
              <button
                onClick={submit}
                style={{
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: '.9rem',
                  fontWeight: 600,
                  padding: '11px 28px',
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
            {result !== null && (
              <button
                onClick={advanceQ}
                autoFocus
                style={{
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: '.9rem',
                  fontWeight: 600,
                  padding: '11px 28px',
                  borderRadius: 10,
                  border: 'none',
                  background: 'var(--accent)',
                  color: '#fff',
                  cursor: 'pointer',
                }}
              >
                {idx >= deck.length - 1 ? t('quiz.finish') : t('quiz.next')}
              </button>
            )}
            <button
              onClick={showHint}
              style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: '.82rem',
                padding: '11px 14px',
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
        <ModeFinalScreen
          ok={ok}
          total={deck.length}
          keepGoingKey="listen.keepGoingTitle"
          onRetry={() => session.open()}
          onClose={closeFib}
        />
      )}
    </>
  );
}

import { bindOverlayOpenClose } from '../features/overlay-utils.ts';
bindOverlayOpenClose('btn-fib', 'fib-overlay', openFib, closeFib);
