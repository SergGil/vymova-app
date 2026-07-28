// Vymova — js/modes/spelling-bee.tsx
// 🐝 Spelling Bee: hear the word via TTS → type its spelling
import { useEffect, useRef, useState, type ReactElement } from 'react';
import { orderDeckPool } from '../core/srs.ts';
import { getDeckSnapshot } from '../../src/deck-store.ts';
import { W } from '../../data/words-data/words.js';
import { lev } from '../core/distance.ts';
import { addCombo, breakCombo, awardXP } from '../features/game/combo.ts';
import { recordModeAnswer, recordMistake } from '../features/game/game.ts';
import { decodeIpa } from '../core/ui-helpers.ts';
import { t } from '../features/i18n.ts';
import type { WordEntry } from '../../src/types.js';
import { entryFor, type Code } from '../features/mode/mode-utils.ts';
import { getKnowLang, getLearnLang } from '../features/lang-pair-select.tsx';
import { speakForCode } from '../features/voice/speak-lang.ts';
import { ModeFinalScreen } from '../features/mode/mode-final-screen.tsx';
import { useModeSession } from '../features/mode/use-mode-session.ts';

const SIZE = 10;
const HINTS = 3;

type Result = 'ok' | 'almost' | 'wrong' | null;

function getLangSentence(w: WordEntry, lang: string): string {
  return entryFor(lang as Code, w).ex;
}

function build(): WordEntry[] {
  const learnLang = getLearnLang();
  const base = (getDeckSnapshot().length
    ? getDeckSnapshot().slice()
    : W.slice()) as unknown as WordEntry[];
  const pool = orderDeckPool(base);
  const filtered =
    learnLang === 'en'
      ? pool.filter((w) => w[0].length >= 4)
      : pool.filter((w) => {
          const lw = entryFor(learnLang, w).word;
          return lw.length >= 3;
        });
  return (filtered.length >= SIZE ? filtered : pool).slice(0, SIZE);
}

let _open: (() => void) | null = null;
let _close: (() => void) | null = null;

export function openSpellingBee(): void {
  _open?.();
}
function closeSpellingBee(): void {
  _close?.();
}

export function SpellingBeePage(): ReactElement {
  const [deck, setDeck] = useState<WordEntry[]>([]);
  const [idx, setIdx] = useState(0);
  const [ok, setOk] = useState(0);
  const [fail, setFail] = useState(0);
  const [input, setInput] = useState('');
  const [result, setResult] = useState<Result>(null);
  const [hintsLeft, setHintsLeft] = useState(HINTS);
  const [hint, setHint] = useState('');
  const [emptyWarn, setEmptyWarn] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const speakBtnRef = useRef<HTMLButtonElement>(null);

  const w: WordEntry | null = deck[idx] ?? null;
  const showFinal = deck.length > 0 && idx >= deck.length;
  const knowLang = getKnowLang();
  const learnLang = getLearnLang();
  const knowSentence = w ? getLangSentence(w, knowLang) : '';
  const learnSentence = w ? getLangSentence(w, learnLang) : '';

  const speak = (word: string, entryW: WordEntry): void => {
    try {
      const learnLangNow = getLearnLang();
      speakForCode(
        learnLangNow,
        word,
        entryW[0],
        speakBtnRef.current,
        entryFor(learnLangNow, entryW).translit,
      );
    } catch (e) {}
  };

  const startGame = (): void => {
    setDeck(build());
    setIdx(0);
    setOk(0);
    setFail(0);
    setInput('');
    setResult(null);
    setHintsLeft(HINTS);
    setHint('');
    setEmptyWarn(false);
  };

  const session = useModeSession({
    overlayId: 'bee-overlay',
    modeId: 'spelling',
    isFinal: showFinal,
    onOpen: startGame,
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

  // Auto-speak + focus on new question
  useEffect(() => {
    if (!isOpen || !w) return;
    const learnWord = entryFor(getLearnLang(), w).word || w[0];
    const t1 = setTimeout(() => speak(learnWord, w), 300);
    const t2 = setTimeout(() => {
      try {
        inputRef.current?.focus();
      } catch (e) {}
    }, 400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [isOpen, idx, w]);

  const advanceQ = (): void => {
    setIdx((i) => i + 1);
    setResult(null);
    setInput('');
    setHintsLeft(HINTS);
    setHint('');
    setEmptyWarn(false);
  };

  const submit = (): void => {
    if (!w || result) return;
    const learnWord = entryFor(getLearnLang(), w).word || w[0];
    const answer = learnWord.toLowerCase().trim();
    const inp = input.toLowerCase().trim();
    if (!inp) {
      setEmptyWarn(true);
      setTimeout(() => setEmptyWarn(false), 1500);
      return;
    }
    const isOk = inp === answer || lev(inp, answer) === 0;
    const isClose = inp.length >= 3 && lev(inp, answer) === 1;

    if (isOk) {
      setOk((o) => o + 1);
      setResult('ok');
      try {
        addCombo();
        awardXP(5);
      } catch (e) {}
    } else if (isClose) {
      setOk((o) => o + 1);
      setResult('almost');
      try {
        addCombo();
        awardXP(5);
      } catch (e) {}
    } else {
      setFail((f) => f + 1);
      setResult('wrong');
      recordMistake(w[0]);
      try {
        breakCombo();
      } catch (e) {}
      setTimeout(() => speak(learnWord, w), 600);
    }
    recordModeAnswer('spelling', isOk || isClose);
  };

  const showHint = (): void => {
    if (result || hintsLeft <= 0 || !w) return;
    const learnWord = entryFor(getLearnLang(), w).word || w[0];
    const left = hintsLeft - 1;
    setHintsLeft(left);
    const revealCount = Math.ceil((learnWord.length * (HINTS - left)) / HINTS);
    const h =
      learnWord.slice(0, revealCount) + '_'.repeat(Math.max(0, learnWord.length - revealCount));
    setHint(`💡 ${h}`);
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 12,
        }}
      >
        <div>
          <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)' }}>
            🐝 <span data-i18n="modesPg.beeName">{t('modesPg.beeName')}</span>
          </div>
          <div style={{ fontSize: '.75rem', color: 'var(--text3)', marginTop: 2 }}>
            {!showFinal && w
              ? `${t('bee.word')} ${idx + 1} ${t('common.of')} ${SIZE}`
              : showFinal
                ? t('write.completed')
                : ''}
          </div>
        </div>
        <button
          onClick={closeSpellingBee}
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
          marginBottom: 12,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            background: 'var(--accent)',
            borderRadius: 4,
            width: showFinal ? '100%' : `${deck.length ? (idx / SIZE) * 100 : 0}%`,
            transition: 'width .4s',
          }}
        />
      </div>

      {!showFinal && w && (
        <>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginBottom: 12 }}>
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
              borderRadius: 12,
              padding: '14px 16px',
              textAlign: 'center',
              marginBottom: 12,
            }}
          >
            <div
              style={{
                fontSize: '.72rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '.08em',
                color: 'var(--text3)',
                marginBottom: 8,
              }}
              data-i18n="bee.listenPrompt"
            >
              {t('bee.listenPrompt')}
            </div>
            <button
              ref={speakBtnRef}
              onClick={() => speak(entryFor(getLearnLang(), w).word || w[0], w)}
              title={t('bee.speakTitle')}
              data-i18n-title="bee.speakTitle"
              style={{
                fontSize: '2rem',
                background: 'var(--accent)',
                border: 'none',
                borderRadius: '50%',
                width: 56,
                height: 56,
                cursor: 'pointer',
                marginBottom: 10,
                transition: 'transform .1s',
                boxShadow: '0 4px 14px rgba(0,200,100,.3)',
              }}
            >
              🔊
            </button>
            <div
              style={{ fontSize: '.95rem', fontWeight: 600, color: 'var(--text)', marginBottom: 4 }}
            >
              {entryFor(getKnowLang(), w).word || w[1]}
            </div>
            {result && getLearnLang() === 'en' && (
              <div style={{ fontSize: '.8rem', color: 'var(--accent2)' }}>
                {decodeIpa(w[4] ?? '')}
              </div>
            )}
            {knowSentence && (
              <div
                style={{
                  fontSize: '.8rem',
                  color: 'var(--text3)',
                  fontStyle: 'italic',
                  marginTop: 6,
                  lineHeight: 1.4,
                }}
              >
                {knowSentence}
                <button
                  className="mode-speak ml-2 inline-flex h-[30px] w-[30px] shrink-0 cursor-pointer items-center justify-center rounded-md border-none bg-white/7 align-middle text-[.9rem] text-[var(--text3)] transition-all duration-150 hover:bg-white/15 hover:text-[var(--accent)] [&.on]:!bg-[rgba(78,204,163,0.15)] [&.on]:text-[var(--accent)] [@media(max-width:480px)]:p-[5px_8px] [@media(max-width:480px)]:text-[16px] [@media(max-width:480px)]:min-h-[36px]"
                  title={t('common.listen')}
                  onClick={(e) => {
                    e.stopPropagation();
                    speakForCode(knowLang, knowSentence, knowSentence, e.currentTarget);
                  }}
                >
                  🔊
                </button>
              </div>
            )}
          </div>

          {hint && (
            <div
              style={{
                textAlign: 'center',
                fontSize: '.85rem',
                color: 'var(--accent)',
                letterSpacing: '.15em',
                fontFamily: 'monospace',
                marginBottom: 8,
                fontWeight: 700,
              }}
            >
              {hint}
            </div>
          )}

          <input
            ref={inputRef}
            type="text"
            placeholder={emptyWarn ? t('bee.emptyInput') : t('bee.inputPlaceholder')}
            data-i18n-placeholder="bee.inputPlaceholder"
            autoComplete="off"
            spellCheck={false}
            value={input}
            disabled={!!result}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                if (!result) submit();
                else advanceQ();
              }
            }}
            style={{
              width: '100%',
              padding: '12px 16px',
              border: `2px solid ${emptyWarn ? 'var(--danger)' : result === 'ok' ? 'var(--success)' : result === 'almost' ? 'var(--accent2)' : result === 'wrong' ? 'var(--danger)' : 'var(--border)'}`,
              borderRadius: 12,
              fontSize: '1rem',
              fontFamily: 'inherit',
              background: 'var(--bg)',
              color: 'var(--text)',
              outline: 'none',
              boxSizing: 'border-box',
              marginBottom: 10,
              textAlign: 'center',
            }}
          />

          <div
            style={{
              textAlign: 'center',
              fontSize: '.9rem',
              fontWeight: 600,
              minHeight: 24,
              marginBottom: 8,
            }}
          >
            {result === 'ok' && (
              <span style={{ color: 'var(--success)' }}>{t('quiz.correctMsg')}</span>
            )}
            {result === 'almost' && (
              <span
                style={{ color: 'var(--accent2)' }}
                dangerouslySetInnerHTML={{
                  __html: t('bee.almostMsg', {
                    w: `<b>${entryFor(getLearnLang(), w).word || w[0]}</b>`,
                  }),
                }}
              />
            )}
            {result === 'wrong' && (
              <span
                style={{ color: 'var(--danger)' }}
                dangerouslySetInnerHTML={{
                  __html: t('bee.wrongMsg', {
                    w: `<b>${entryFor(getLearnLang(), w).word || w[0]}</b>`,
                  }),
                }}
              />
            )}
          </div>

          {result && learnSentence && (
            <div
              style={{
                textAlign: 'center',
                fontSize: '.8rem',
                color: 'var(--text3)',
                fontStyle: 'italic',
                marginBottom: 10,
                lineHeight: 1.4,
              }}
            >
              {learnSentence}
              <button
                className="mode-speak ml-2 inline-flex h-[30px] w-[30px] shrink-0 cursor-pointer items-center justify-center rounded-md border-none bg-white/7 align-middle text-[.9rem] text-[var(--text3)] transition-all duration-150 hover:bg-white/15 hover:text-[var(--accent)] [&.on]:!bg-[rgba(78,204,163,0.15)] [&.on]:text-[var(--accent)] [@media(max-width:480px)]:p-[5px_8px] [@media(max-width:480px)]:text-[16px] [@media(max-width:480px)]:min-h-[36px]"
                title={t('common.listen')}
                onClick={(e) => {
                  e.stopPropagation();
                  speakForCode(learnLang, learnSentence, learnSentence, e.currentTarget);
                }}
              >
                🔊
              </button>
            </div>
          )}

          <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
            <button
              onClick={showHint}
              disabled={!!result || hintsLeft <= 0}
              style={{
                padding: '9px 14px',
                borderRadius: 10,
                border: '1.5px solid var(--border)',
                background: 'none',
                color: 'var(--text2)',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontSize: '.8rem',
              }}
            >
              {hintsLeft > 0 ? t('bee.hintBtn', { n: hintsLeft }) : t('bee.hintNone')}
            </button>
            {!result && (
              <button
                onClick={submit}
                style={{
                  padding: '9px 24px',
                  borderRadius: 10,
                  border: 'none',
                  background: 'var(--accent)',
                  color: '#fff',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  fontSize: '.88rem',
                }}
                data-i18n="bee.checkBtn"
              >
                {t('bee.checkBtn')}
              </button>
            )}
            {result && (
              <button
                onClick={advanceQ}
                style={{
                  padding: '9px 24px',
                  borderRadius: 10,
                  border: 'none',
                  background: 'var(--accent)',
                  color: '#fff',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  fontSize: '.88rem',
                }}
              >
                {idx >= deck.length - 1 ? t('quiz.finish') : t('quiz.next')}
              </button>
            )}
          </div>
        </>
      )}

      {showFinal && (
        <ModeFinalScreen
          ok={ok}
          total={SIZE}
          keepGoingKey="tempo.practiceTitle"
          onRetry={() => session.open()}
          onClose={closeSpellingBee}
        />
      )}
    </>
  );
}

import { bindOverlayOpenClose } from '../features/overlay-utils.ts';
bindOverlayOpenClose('btn-spelling-bee', 'bee-overlay', openSpellingBee, closeSpellingBee);
