// Vymova — js/modes/word-hint.tsx
// 💡 Word Hint: guess the word from a translated sentence before all its
// letters get progressively revealed — faster guesses earn more XP.
import { useEffect, useState, type ReactElement } from 'react';
import { _shuf } from '../core/srs.ts';
import { getDeckSnapshot } from '../../src/deck-store.ts';
import { W } from '../../data/words.js';
import { lev } from '../core/distance.ts';
import { addCombo, breakCombo, awardXP } from '../features/combo.ts';
import { recordModeComplete, recordModeAnswer, recordMistake } from '../features/game.ts';
import { t } from '../features/i18n.ts';
import type { WordEntry } from '../../src/types.js';
import { entryFor } from '../features/mode-utils.ts';
import { getKnowLang, getLearnLang } from '../features/lang-pair-select.tsx';

const ROUNDS = 8;
const REVEAL_INTERVAL_MS = 3500;

function countLetters(s: string): number {
  return (s.match(/\p{L}/gu) ?? []).length;
}

type Round = { w: WordEntry; target: string; clue: string; totalLetters: number };

function buildRound(w: WordEntry): Round | null {
  const target = entryFor(getLearnLang(), w).word;
  const clue = entryFor(getKnowLang(), w).ex;
  if (!target || !clue) return null;
  const totalLetters = countLetters(target);
  if (totalLetters < 3 || totalLetters > 14) return null;
  return { w, target, clue, totalLetters };
}

function buildDeck(): Round[] {
  const pool = _shuf(
    (getDeckSnapshot().length ? getDeckSnapshot().slice() : W.slice()) as unknown as WordEntry[],
  );
  const rounds: Round[] = [];
  for (const w of pool) {
    if (rounds.length >= ROUNDS) break;
    const r = buildRound(w);
    if (r) rounds.push(r);
  }
  return rounds;
}

function isAnswerCorrect(input: string, target: string): boolean {
  const a = input.trim().toLowerCase();
  const b = target.trim().toLowerCase();
  if (!a) return false;
  return a === b || (b.length > 3 && lev(a, b) <= 1);
}

let _open: (() => void) | null = null;
let _close: (() => void) | null = null;

function openWordHint(): void {
  _open?.();
}
function closeWordHint(): void {
  _close?.();
}

export function WordHintPage(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const [deck, setDeck] = useState<Round[]>([]);
  const [idx, setIdx] = useState(0);
  const [ok, setOk] = useState(0);
  const [fail, setFail] = useState(0);
  const [revealed, setRevealed] = useState(1);
  const [input, setInput] = useState('');
  const [answered, setAnswered] = useState(false);
  const [result, setResult] = useState<{ text: string; ok: boolean } | null>(null);
  const [completed, setCompleted] = useState(false);

  const round: Round | null = deck[idx] ?? null;
  const showFinal = isOpen && deck.length > 0 && idx >= deck.length;

  const startGame = (): void => {
    setDeck(buildDeck());
    setIdx(0);
    setOk(0);
    setFail(0);
    setRevealed(1);
    setInput('');
    setAnswered(false);
    setResult(null);
    setCompleted(false);
  };

  useEffect(() => {
    _open = () => {
      setIsOpen(true);
      startGame();
      const overlay = document.getElementById('hint-overlay');
      if (overlay) overlay.style.display = 'flex';
    };
    _close = () => {
      setIsOpen(false);
      const overlay = document.getElementById('hint-overlay');
      if (overlay) overlay.style.display = 'none';
    };
    return () => {
      _open = null;
      _close = null;
    };
  }, []);

  useEffect(() => {
    if (showFinal && !completed) {
      recordModeComplete('wordhint');
      setCompleted(true);
    }
  }, [showFinal, completed]);

  useEffect(() => {
    function onKeydown(e: KeyboardEvent): void {
      const overlay = document.getElementById('hint-overlay');
      if (overlay?.style.display !== 'flex') return;
      if (e.key === 'Escape') closeWordHint();
    }
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  }, []);

  // Progressively reveal one more letter every REVEAL_INTERVAL_MS while the
  // round is still open.
  useEffect(() => {
    if (!round || answered || revealed >= round.totalLetters) return;
    const id = setTimeout(() => setRevealed((r) => r + 1), REVEAL_INTERVAL_MS);
    return () => clearTimeout(id);
  }, [round, answered, revealed]);

  // Auto-fail once every letter is revealed and the round is still unanswered.
  useEffect(() => {
    if (round && !answered && revealed >= round.totalLetters) {
      finishRound(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [round, answered, revealed]);

  const finishRound = (success: boolean): void => {
    if (!round || answered) return;
    setAnswered(true);
    if (success) {
      setOk((o) => o + 1);
      const bonus = Math.max(2, Math.round(5 + 10 * (1 - revealed / round.totalLetters)));
      try {
        addCombo();
        awardXP(bonus);
      } catch (e) {}
      setResult({ text: t('quiz.correctMsg'), ok: true });
    } else {
      setFail((f) => f + 1);
      recordMistake(round.w[0]);
      try {
        breakCombo();
      } catch (e) {}
      setResult({ text: t('wordhint.revealMsg', { word: round.target }), ok: false });
    }
    recordModeAnswer('wordhint', success);
  };

  const submit = (): void => {
    if (!round || answered) return;
    finishRound(isAnswerCorrect(input, round.target));
  };

  const giveUp = (): void => {
    finishRound(false);
  };

  const next = (): void => {
    const newIdx = idx + 1;
    setIdx(newIdx);
    setRevealed(1);
    setInput('');
    setAnswered(false);
    setResult(null);
  };

  const pct = deck.length ? Math.round((ok / deck.length) * 100) : 0;
  const finalEmoji = pct === 100 ? '🏆' : pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '💪';
  const finalTitle =
    pct === 100
      ? t('quiz.perfectTitle')
      : pct >= 80
        ? t('quiz.greatTitle')
        : pct >= 60
          ? t('quiz.goodTitle')
          : t('tempo.practiceTitle');

  if (!isOpen) return <></>;

  let letterIdx = 0;

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
            💡 {t('wordhint.title')}
          </div>
          <div style={{ fontSize: '.75rem', color: 'var(--text3)', marginTop: 2 }}>
            {!showFinal && deck.length
              ? `${t('wordhint.round')} ${idx + 1} ${t('common.of')} ${deck.length}`
              : showFinal
                ? t('write.completed')
                : ''}
          </div>
        </div>
        <button
          onClick={closeWordHint}
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
          marginBottom: 14,
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

      {!showFinal && deck.length === 0 && (
        <div style={{ textAlign: 'center', color: 'var(--text3)', padding: 16 }}>
          {t('wordhint.noWords')}
        </div>
      )}

      {!showFinal && round && (
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
              padding: 16,
              marginBottom: 12,
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontStyle: 'italic',
                fontSize: '.92rem',
                color: 'var(--text)',
                lineHeight: 1.6,
                marginBottom: 12,
              }}
            >
              "{round.clue}"
            </div>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 4,
                justifyContent: 'center',
                fontFamily: 'monospace',
                fontSize: '1.3rem',
                fontWeight: 700,
                letterSpacing: '.05em',
                color: 'var(--accent)',
              }}
            >
              {Array.from(round.target).map((ch, i) => {
                const isLetter = /\p{L}/u.test(ch);
                let display = ch;
                if (isLetter) {
                  letterIdx++;
                  display = letterIdx <= revealed || answered ? ch : '_';
                }
                return <span key={i}>{display}</span>;
              })}
            </div>
            {answered && (
              <div style={{ fontSize: '.85rem', color: 'var(--text2)', marginTop: 8 }}>
                {entryFor(getKnowLang(), round.w).word}
              </div>
            )}
          </div>

          {!answered && (
            <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') submit();
                }}
                placeholder={t('wordhint.placeholder')}
                autoFocus
                style={{
                  flex: 1,
                  padding: '10px 12px',
                  borderRadius: 10,
                  border: '1.5px solid var(--border)',
                  background: 'var(--bg)',
                  color: 'var(--text)',
                  fontFamily: 'inherit',
                  fontSize: '.9rem',
                }}
              />
              <button
                onClick={submit}
                style={{
                  padding: '10px 18px',
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
                {t('wordhint.submitBtn')}
              </button>
            </div>
          )}

          {!answered && (
            <div style={{ textAlign: 'center', marginBottom: 8 }}>
              <button
                onClick={giveUp}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text3)',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  fontSize: '.78rem',
                  textDecoration: 'underline',
                }}
              >
                {t('wordhint.giveUpBtn')}
              </button>
            </div>
          )}

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

          {answered && (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button
                onClick={next}
                style={{
                  padding: '10px 28px',
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
            </div>
          )}
        </>
      )}

      {showFinal && (
        <div style={{ textAlign: 'center', padding: '10px 0 4px' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: 8 }}>{finalEmoji}</div>
          <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>
            {finalTitle}
          </div>
          <div style={{ fontSize: '.9rem', color: 'var(--text2)', marginBottom: 16 }}>
            {ok} {t('common.of')} {deck.length} ({pct}%)
          </div>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
            <button
              onClick={startGame}
              style={{
                padding: '9px 20px',
                borderRadius: 10,
                border: '1.5px solid var(--accent)',
                background: 'none',
                color: 'var(--accent)',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontSize: '.85rem',
              }}
            >
              {t('common.tryAgain')}
            </button>
            <button
              onClick={closeWordHint}
              style={{
                padding: '9px 20px',
                borderRadius: 10,
                border: '1.5px solid var(--border)',
                background: 'none',
                color: 'var(--text2)',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontSize: '.85rem',
              }}
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
bindOverlayOpenClose('btn-wordhint', 'hint-overlay', openWordHint, closeWordHint);
