// Vymova — js/modes/scramble.tsx
// 🔀 Scramble: rearrange shuffled letter tiles to build the word
import { useEffect, useRef, useState, type ReactElement } from 'react';
import { _shuf, orderDeckPool } from '../core/srs.ts';
import { getDeckSnapshot } from '../../src/deck-store.ts';
import { W } from '../../data/words.js';
import { addCombo, breakCombo, awardXP } from '../features/combo.ts';
import { recordModeAnswer, recordMistake } from '../features/game.ts';
import { decodeIpa } from '../core/ui-helpers.ts';
import { speak } from '../features/voice/speech.ts';
import { t } from '../features/i18n.ts';
import type { WordEntry } from '../../src/types.js';
import { entryFor } from '../features/mode-utils.ts';
import { getKnowLang, getLearnLang } from '../features/lang-pair-select.tsx';
import { ModeFinalScreen } from '../features/mode-final-screen.tsx';
import { useModeSession } from '../features/use-mode-session.ts';

const SIZE = 10;
const HINTS = 3;

interface Tile {
  ch: string;
  used: boolean;
}

function build(): WordEntry[] {
  const learnLang = getLearnLang();
  const base = (getDeckSnapshot().length
    ? getDeckSnapshot().slice()
    : W.slice()) as unknown as WordEntry[];
  const pool = orderDeckPool(base);
  if (learnLang === 'en') {
    const filtered = pool.filter(
      (w) => /^[A-Za-z]+$/.test(w[0]) && w[0].length >= 4 && w[0].length <= 9,
    );
    const fallback = pool.filter((w) => /^[A-Za-z]+$/.test(w[0]));
    return (filtered.length >= SIZE ? filtered : fallback.length >= SIZE ? fallback : pool).slice(
      0,
      SIZE,
    );
  }
  const filtered = pool.filter((w) => {
    const lw = entryFor(learnLang, w).word;
    return lw.length >= 3 && lw.length <= 12;
  });
  return (filtered.length >= SIZE ? filtered : pool).slice(0, SIZE);
}

function shuffleWord(word: string): string[] {
  const chars = word.toLowerCase().split('');
  if (chars.length <= 1) return chars;
  let shuffled = _shuf(chars);
  let tries = 0;
  while (shuffled.join('') === chars.join('') && tries < 10) {
    shuffled = _shuf(chars);
    tries++;
  }
  return shuffled;
}

let _open: (() => void) | null = null;
let _close: (() => void) | null = null;

export function openScramble(): void {
  _open?.();
}
function closeScramble(): void {
  _close?.();
}

export function ScramblePage(): ReactElement {
  const [deck, setDeck] = useState<WordEntry[]>([]);
  const [idx, setIdx] = useState(0);
  const [ok, setOk] = useState(0);
  const [fail, setFail] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [hintsLeft, setHintsLeft] = useState(HINTS);
  const [failedThis, setFailedThis] = useState(false);
  const [letters, setLetters] = useState<Tile[]>([]);
  const [answer, setAnswer] = useState<number[]>([]);
  const [tileOrder, setTileOrder] = useState<number[]>([]);
  const [result, setResult] = useState<{ text: string; ok: boolean } | null>(null);

  const speakBtnRef = useRef<HTMLButtonElement>(null);

  const w: WordEntry | null = deck[idx] ?? null;
  const showFinal = deck.length > 0 && idx >= deck.length;

  const setupQuestion = (d: WordEntry[], i: number): void => {
    const word = d[i];
    const learnWord = entryFor(getLearnLang(), word).word || word[0];
    const chars = shuffleWord(learnWord);
    const lett = chars.map((ch) => ({ ch, used: false }));
    setLetters(lett);
    setAnswer([]);
    setTileOrder(lett.map((_, j) => j));
    setAnswered(false);
    setHintsLeft(HINTS);
    setFailedThis(false);
    setResult(null);
  };

  const startGame = (): void => {
    const d = build();
    setDeck(d);
    setIdx(0);
    setOk(0);
    setFail(0);
    setupQuestion(d, 0);
  };

  const session = useModeSession({
    overlayId: 'scr-overlay',
    modeId: 'scramble',
    isFinal: showFinal,
    onOpen: startGame,
  });
  const { isOpen } = session;

  useEffect(() => {
    _open = session.open;
    _close = session.close;
    return () => {
      _open = null;
      _close = null;
    };
  }, [session.open, session.close]);

  const check = (lett: Tile[], ans: number[]): void => {
    if (!w) return;
    const a = ans.map((i) => lett[i].ch).join('');
    const target = (entryFor(getLearnLang(), w).word || w[0]).toLowerCase();
    if (a === target) {
      setAnswered(true);
      if (failedThis) {
        setFail((f) => f + 1);
        setResult({ text: t('quiz.correctMsg'), ok: false });
      } else {
        setOk((o) => o + 1);
        setResult({ text: t('quiz.correctMsg'), ok: true });
        try {
          addCombo();
          awardXP(5);
        } catch (e) {}
      }
      if (failedThis) {
        try {
          breakCombo();
        } catch (e) {}
        recordMistake(w[0]);
      }
      recordModeAnswer('scramble', !failedThis);
    } else {
      setFailedThis(true);
      setResult({ text: t('scramble.wrongMsg'), ok: false });
      setTimeout(() => {
        setResult(null);
        setLetters((ls) => {
          const reset = ls.map((t2) => ({ ...t2, used: false }));
          return reset;
        });
        setAnswer([]);
      }, 700);
    }
  };

  const selectLetter = (li: number): void => {
    if (answered || letters[li].used) return;
    const newLetters = letters.map((tl, i) => (i === li ? { ...tl, used: true } : tl));
    const newAnswer = [...answer, li];
    setLetters(newLetters);
    setAnswer(newAnswer);
    if (newAnswer.length === newLetters.length) check(newLetters, newAnswer);
  };

  const deselectAt = (pos: number): void => {
    if (answered) return;
    const li = answer[pos];
    const newLetters = letters.map((tl, i) => (i === li ? { ...tl, used: false } : tl));
    const newAnswer = answer.slice();
    newAnswer.splice(pos, 1);
    setLetters(newLetters);
    setAnswer(newAnswer);
  };

  const removeLastLetter = (): void => {
    if (answered || !answer.length) return;
    deselectAt(answer.length - 1);
  };

  const shuffleTiles = (): void => {
    if (answered) return;
    setTileOrder((o) => _shuf(o));
  };

  const useHint = (): void => {
    if (answered || hintsLeft <= 0 || !w) return;
    const target = (entryFor(getLearnLang(), w).word || w[0]).toLowerCase();
    const nextCh = target[answer.length];
    const li = letters.findIndex((tile) => !tile.used && tile.ch === nextCh);
    if (li === -1) return;
    setHintsLeft((h) => h - 1);
    selectLetter(li);
  };

  const advance = (): void => {
    const newIdx = idx + 1;
    setIdx(newIdx);
    if (newIdx < deck.length) setupQuestion(deck, newIdx);
  };

  if (!isOpen) return <></>;

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
            🔀 <span data-i18n="mode.scramble">{t('mode.scramble')}</span>
          </div>
          <div style={{ fontSize: '.75rem', color: 'var(--text3)', marginTop: 2 }}>
            {!showFinal
              ? `${t('scramble.word')} ${idx + 1} ${t('common.of')} ${SIZE}`
              : t('write.completed')}
          </div>
        </div>
        <button
          onClick={closeScramble}
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
            width: showFinal ? '100%' : `${(idx / SIZE) * 100}%`,
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
              data-i18n="scramble.prompt"
            >
              {t('scramble.prompt')}
            </div>
            <button
              ref={speakBtnRef}
              onClick={() => {
                try {
                  speak(entryFor(getLearnLang(), w).word || w[0], speakBtnRef.current);
                } catch (e) {}
              }}
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
              title={t('bee.speakTitle')}
              data-i18n-title="bee.speakTitle"
            >
              🔊
            </button>
            <div
              style={{ fontSize: '.95rem', fontWeight: 600, color: 'var(--text)', marginBottom: 4 }}
            >
              {entryFor(getKnowLang(), w).word || w[1]}
            </div>
            {getLearnLang() === 'en' && (
              <div style={{ fontSize: '.8rem', color: 'var(--accent2)' }}>
                {decodeIpa(w[4] ?? '')}
              </div>
            )}
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 6,
              justifyContent: 'center',
              minHeight: 48,
              marginBottom: 14,
              borderBottom: '2px dashed var(--border)',
              paddingBottom: 14,
            }}
          >
            {answer.map((li, pos) => (
              <button
                key={'a' + pos}
                className="scr-tile scr-tile-placed"
                disabled={answered}
                onClick={() => deselectAt(pos)}
              >
                {letters[li].ch.toUpperCase()}
              </button>
            ))}
            {Array.from({ length: letters.length - answer.length }).map((_, i) => (
              <span key={'e' + i} className="scr-tile scr-tile-empty" />
            ))}
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 6,
              justifyContent: 'center',
              marginBottom: 8,
            }}
          >
            {tileOrder
              .filter((li) => !letters[li].used)
              .map((li) => (
                <button
                  key={'t' + li}
                  className="scr-tile"
                  disabled={answered}
                  onClick={() => selectLetter(li)}
                >
                  {letters[li].ch.toUpperCase()}
                </button>
              ))}
          </div>

          <div
            style={{
              textAlign: 'center',
              fontSize: '.9rem',
              fontWeight: 600,
              minHeight: 24,
              marginBottom: 8,
            }}
          >
            {result && (
              <span style={{ color: result.ok ? 'var(--success)' : 'var(--danger)' }}>
                {result.text}
              </span>
            )}
          </div>

          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={useHint}
              disabled={answered || hintsLeft <= 0}
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
              {hintsLeft > 0 ? t('scramble.hintBtn', { n: hintsLeft }) : t('scramble.hintNone')}
            </button>
            <button
              onClick={shuffleTiles}
              disabled={answered}
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
              data-i18n="scramble.shuffleBtn"
            >
              {t('scramble.shuffleBtn')}
            </button>
            <button
              onClick={removeLastLetter}
              disabled={answered}
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
              data-i18n="scramble.clearBtn"
            >
              {t('scramble.clearBtn')}
            </button>
            {answered && (
              <button
                onClick={advance}
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
                data-i18n="write.next"
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
          onRetry={startGame}
          onClose={closeScramble}
        />
      )}
    </>
  );
}

import { bindOverlayOpenClose } from '../features/overlay-utils.ts';
bindOverlayOpenClose('btn-scramble', 'scr-overlay', openScramble, closeScramble);
