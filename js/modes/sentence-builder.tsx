// Vymova — js/modes/sentence-builder.tsx
// 🧱 Sentence Builder: tap shuffled word-tiles in order to rebuild the example sentence
import { useEffect, useRef, useState, type ReactElement } from 'react';
import { _shuf } from '../core/srs.ts';
import { getDeckSnapshot } from '../../src/deck-store.ts';
import { W } from '../../data/words.js';
import { addCombo, breakCombo, awardXP } from '../features/combo.ts';
import { recordModeComplete, recordModeAnswer, recordMistake } from '../features/game.ts';
import { speak } from '../features/speech.ts';
import { t } from '../features/i18n.ts';
import type { WordEntry } from '../../src/types.js';
import { entryFor } from '../features/mode-utils.ts';
import { getKnowLang, getLearnLang } from '../features/lang-pair-select.tsx';

const SIZE = 8;
const HINTS = 3;

interface Tile {
  text: string;
  used: boolean;
}

function tokenize(s: string): string[] {
  return s.trim().split(/\s+/).filter(Boolean);
}

function getExample(w: WordEntry): string {
  return entryFor(getLearnLang(), w).ex || w[2];
}

function build(): WordEntry[] {
  const pool = _shuf(
    (getDeckSnapshot().length ? getDeckSnapshot().slice() : W.slice()) as unknown as WordEntry[],
  );
  const tokenCount = (w: WordEntry) => tokenize(getExample(w)).length;
  const filtered = pool.filter((w) => tokenCount(w) >= 4 && tokenCount(w) <= 9);
  const fallback = pool.filter((w) => tokenCount(w) >= 3);
  return (filtered.length >= SIZE ? filtered : fallback.length >= SIZE ? fallback : pool).slice(
    0,
    SIZE,
  );
}

function shuffleTokens(tokens: string[]): string[] {
  if (tokens.length <= 1) return tokens.slice();
  let shuffled = _shuf(tokens);
  let tries = 0;
  while (shuffled.join(' ') === tokens.join(' ') && tries < 10) {
    shuffled = _shuf(tokens);
    tries++;
  }
  return shuffled;
}

let _open: (() => void) | null = null;
let _close: (() => void) | null = null;

function openSentenceBuilder(): void {
  _open?.();
}
function closeSentenceBuilder(): void {
  _close?.();
}

export function SentenceBuilderPage(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const [deck, setDeck] = useState<WordEntry[]>([]);
  const [idx, setIdx] = useState(0);
  const [ok, setOk] = useState(0);
  const [fail, setFail] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [hintsLeft, setHintsLeft] = useState(HINTS);
  const [failedThis, setFailedThis] = useState(false);
  const [tiles, setTiles] = useState<Tile[]>([]);
  const [target, setTarget] = useState('');
  const [answer, setAnswer] = useState<number[]>([]);
  const [tileOrder, setTileOrder] = useState<number[]>([]);
  const [result, setResult] = useState<{ text: string; ok: boolean } | null>(null);
  const [completed, setCompleted] = useState(false);

  const speakBtnRef = useRef<HTMLButtonElement>(null);

  const w: WordEntry | null = deck[idx] ?? null;
  const showFinal = isOpen && deck.length > 0 && idx >= deck.length;

  const setupQuestion = (d: WordEntry[], i: number): void => {
    const word = d[i];
    const ex = getExample(word);
    const tokens = tokenize(ex);
    const shuffled = shuffleTokens(tokens);
    const tls = shuffled.map((text) => ({ text, used: false }));
    setTiles(tls);
    setTarget(tokens.join(' '));
    setAnswer([]);
    setTileOrder(tls.map((_, j) => j));
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
    setCompleted(false);
    if (d.length) setupQuestion(d, 0);
  };

  useEffect(() => {
    _open = () => {
      setIsOpen(true);
      startGame();
      const overlay = document.getElementById('sb-overlay');
      if (overlay) overlay.style.display = 'flex';
    };
    _close = () => {
      setIsOpen(false);
      const overlay = document.getElementById('sb-overlay');
      if (overlay) overlay.style.display = 'none';
    };
    return () => {
      _open = null;
      _close = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (showFinal && !completed) {
      recordModeComplete('sentbuild');
      setCompleted(true);
    }
  }, [showFinal, completed]);

  useEffect(() => {
    function onKeydown(e: KeyboardEvent): void {
      const overlay = document.getElementById('sb-overlay');
      if (overlay?.style.display !== 'flex') return;
      if (e.key === 'Escape') closeSentenceBuilder();
    }
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  }, []);

  const check = (tls: Tile[], ans: number[]): void => {
    if (!w) return;
    const assembled = ans.map((i) => tls[i].text).join(' ');
    if (assembled === target) {
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
      recordModeAnswer('sentbuild', !failedThis);
    } else {
      setFailedThis(true);
      setResult({ text: t('sentbuild.wrongMsg'), ok: false });
      setTimeout(() => {
        setResult(null);
        setTiles((ls) => ls.map((tl) => ({ ...tl, used: false })));
        setAnswer([]);
      }, 700);
    }
  };

  const selectTile = (li: number): void => {
    if (answered || tiles[li].used) return;
    const newTiles = tiles.map((tl, i) => (i === li ? { ...tl, used: true } : tl));
    const newAnswer = [...answer, li];
    setTiles(newTiles);
    setAnswer(newAnswer);
    if (newAnswer.length === newTiles.length) check(newTiles, newAnswer);
  };

  const deselectAt = (pos: number): void => {
    if (answered) return;
    const li = answer[pos];
    const newTiles = tiles.map((tl, i) => (i === li ? { ...tl, used: false } : tl));
    const newAnswer = answer.slice();
    newAnswer.splice(pos, 1);
    setTiles(newTiles);
    setAnswer(newAnswer);
  };

  const removeLastTile = (): void => {
    if (answered || !answer.length) return;
    deselectAt(answer.length - 1);
  };

  const shuffleTiles = (): void => {
    if (answered) return;
    setTileOrder((o) => _shuf(o));
  };

  const useHint = (): void => {
    if (answered || hintsLeft <= 0 || !target) return;
    const wantedText = target.split(' ')[answer.length];
    const li = tiles.findIndex((tile) => !tile.used && tile.text === wantedText);
    if (li === -1) return;
    setHintsLeft((h) => h - 1);
    selectTile(li);
  };

  const advance = (): void => {
    const newIdx = idx + 1;
    setIdx(newIdx);
    if (newIdx < deck.length) setupQuestion(deck, newIdx);
  };

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
          : t('tempo.practiceTitle');

  const tileBtnStyle = (extra: Record<string, unknown> = {}): Record<string, unknown> => ({
    padding: '8px 12px',
    borderRadius: 8,
    border: '1.5px solid var(--border)',
    background: 'var(--bg)',
    color: 'var(--text)',
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontSize: '.88rem',
    ...extra,
  });

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
            🧱 {t('sentbuild.title')}
          </div>
          <div style={{ fontSize: '.75rem', color: 'var(--text3)', marginTop: 2 }}>
            {!showFinal
              ? `${t('sentbuild.sentence')} ${idx + 1} ${t('common.of')} ${deck.length}`
              : t('write.completed')}
          </div>
        </div>
        <button
          onClick={closeSentenceBuilder}
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
          marginBottom: 12,
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
              padding: '10px 14px',
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
                marginBottom: 6,
              }}
            >
              {t('sentbuild.prompt')}
            </div>
            <button
              ref={speakBtnRef}
              onClick={() => {
                try {
                  speak(target, speakBtnRef.current);
                } catch (e) {}
              }}
              style={{
                fontSize: '1.5rem',
                background: 'var(--accent)',
                border: 'none',
                borderRadius: '50%',
                width: 44,
                height: 44,
                cursor: 'pointer',
                marginBottom: 8,
              }}
              title={t('bee.speakTitle')}
            >
              🔊
            </button>
            <div style={{ fontSize: '.88rem', fontWeight: 600, color: 'var(--text)' }}>
              {entryFor(getKnowLang(), w).ex || w[3]}
            </div>
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
                disabled={answered}
                onClick={() => deselectAt(pos)}
                style={tileBtnStyle({ background: 'var(--accent)', color: '#fff', border: 'none' })}
              >
                {tiles[li].text}
              </button>
            ))}
            {answer.length === 0 && (
              <span style={{ color: 'var(--text3)', fontSize: '.82rem', padding: '8px 0' }}>
                {t('sentbuild.emptyHint')}
              </span>
            )}
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
              .filter((li) => !tiles[li].used)
              .map((li) => (
                <button key={'t' + li} disabled={answered} onClick={() => selectTile(li)} style={tileBtnStyle()}>
                  {tiles[li].text}
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
            >
              {t('scramble.shuffleBtn')}
            </button>
            <button
              onClick={removeLastTile}
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
              >
                {idx >= deck.length - 1 ? t('quiz.finish') : t('quiz.next')}
              </button>
            )}
          </div>
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
              onClick={closeSentenceBuilder}
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
bindOverlayOpenClose('btn-sentbuild', 'sb-overlay', openSentenceBuilder, closeSentenceBuilder);
