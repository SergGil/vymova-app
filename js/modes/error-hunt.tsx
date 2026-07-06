// Vymova — js/modes/error-hunt.tsx
// 🕵️ Error Hunt: one word in the example sentence has been swapped for a
// wrong (but same part-of-speech) word — tap the word that doesn't belong.
import { useEffect, useState, type ReactElement } from 'react';
import { _shuf } from '../core/srs.ts';
import { getDeckSnapshot } from '../../src/deck-store.ts';
import { W } from '../../data/words.js';
import { addCombo, breakCombo, awardXP } from '../features/combo.ts';
import { recordModeComplete, recordModeAnswer, recordMistake } from '../features/game.ts';
import { t } from '../features/i18n.ts';
import type { WordEntry } from '../../src/types.js';
import { entryFor } from '../features/mode-utils.ts';
import { getLearnLang, getKnowLang } from '../features/lang-pair-select.tsx';

const ROUNDS = 8;

function stripPunct(s: string): string {
  return s.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, '');
}

function tokenize(s: string): string[] {
  return s.trim().split(/\s+/).filter(Boolean);
}

function findHeadwordIndex(tokens: string[], headword: string): number {
  const target = headword.toLowerCase();
  return tokens.findIndex((tok) => stripPunct(tok).toLowerCase() === target);
}

function matchCase(core: string, replacement: string): string {
  if (core && core[0].toUpperCase() === core[0] && core[0].toLowerCase() !== core[0]) {
    return replacement.charAt(0).toUpperCase() + replacement.slice(1);
  }
  return replacement;
}

function buildToken(originalToken: string, replacementWord: string): string {
  const leading = originalToken.match(/^[^\p{L}\p{N}]*/u)?.[0] ?? '';
  const trailing = originalToken.match(/[^\p{L}\p{N}]*$/u)?.[0] ?? '';
  const core = originalToken.slice(leading.length, originalToken.length - trailing.length);
  return leading + matchCase(core, replacementWord) + trailing;
}

type Round = {
  w: WordEntry;
  tokens: string[];
  swapIndex: number;
  correctWord: string;
  distractorWord: string;
};

function buildRound(w: WordEntry, allWords: WordEntry[]): Round | null {
  const learnLang = getLearnLang();
  const { word: headword, ex } = entryFor(learnLang, w);
  if (!headword || !ex) return null;
  const tokens = tokenize(ex);
  if (tokens.length < 4) return null;
  const swapIndex = findHeadwordIndex(tokens, headword);
  if (swapIndex === -1) return null;

  const pool = _shuf(allWords);
  let distractorWord = '';
  for (const dw of pool) {
    if (dw[0].toLowerCase() === w[0].toLowerCase()) continue;
    if (w[5] && dw[5] && dw[5] !== w[5]) continue;
    const cand = entryFor(learnLang, dw).word;
    if (!cand || cand.toLowerCase() === headword.toLowerCase()) continue;
    distractorWord = cand;
    break;
  }
  if (!distractorWord) return null;

  const newTokens = tokens.slice();
  newTokens[swapIndex] = buildToken(tokens[swapIndex], distractorWord);
  return { w, tokens: newTokens, swapIndex, correctWord: headword, distractorWord };
}

function buildDeck(): Round[] {
  const deckWords = getDeckSnapshot();
  const distractorPool = W.slice() as unknown as WordEntry[];
  const mainPool = _shuf(
    (deckWords.length ? deckWords.slice() : distractorPool.slice()) as unknown as WordEntry[],
  );
  const rounds: Round[] = [];
  for (const w of mainPool) {
    if (rounds.length >= ROUNDS) break;
    const round = buildRound(w, distractorPool);
    if (round) rounds.push(round);
  }
  return rounds;
}

let _open: (() => void) | null = null;
let _close: (() => void) | null = null;

function openErrorHunt(): void {
  _open?.();
}
function closeErrorHunt(): void {
  _close?.();
}

export function ErrorHuntPage(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const [deck, setDeck] = useState<Round[]>([]);
  const [idx, setIdx] = useState(0);
  const [ok, setOk] = useState(0);
  const [fail, setFail] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [completed, setCompleted] = useState(false);

  const round: Round | null = deck[idx] ?? null;
  const showFinal = isOpen && deck.length > 0 && idx >= deck.length;
  const knowEx = round ? entryFor(getKnowLang(), round.w).ex : '';

  const startGame = (): void => {
    setDeck(buildDeck());
    setIdx(0);
    setOk(0);
    setFail(0);
    setSelected(null);
    setCompleted(false);
  };

  useEffect(() => {
    _open = () => {
      setIsOpen(true);
      startGame();
      const overlay = document.getElementById('eh-overlay');
      if (overlay) overlay.style.display = 'flex';
    };
    _close = () => {
      setIsOpen(false);
      const overlay = document.getElementById('eh-overlay');
      if (overlay) overlay.style.display = 'none';
    };
    return () => {
      _open = null;
      _close = null;
    };
  }, []);

  useEffect(() => {
    if (showFinal && !completed) {
      recordModeComplete('errorhunt');
      setCompleted(true);
    }
  }, [showFinal, completed]);

  useEffect(() => {
    function onKeydown(e: KeyboardEvent): void {
      const overlay = document.getElementById('eh-overlay');
      if (overlay?.style.display !== 'flex') return;
      if (e.key === 'Escape') closeErrorHunt();
    }
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  }, []);

  const checkAnswer = (i: number): void => {
    if (!round || selected !== null) return;
    setSelected(i);
    const isOk = i === round.swapIndex;
    if (isOk) setOk((o) => o + 1);
    else {
      setFail((f) => f + 1);
      recordMistake(round.w[0]);
    }
    try {
      if (isOk) {
        addCombo();
        awardXP(5);
      } else {
        breakCombo();
      }
    } catch (e) {}
    recordModeAnswer('errorhunt', isOk);
  };

  const next = (): void => {
    setIdx((i) => i + 1);
    setSelected(null);
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
            🕵️ {t('errorhunt.title')}
          </div>
          <div style={{ fontSize: '.75rem', color: 'var(--text3)', marginTop: 2 }}>
            {!showFinal && deck.length
              ? `${t('errorhunt.round')} ${idx + 1} ${t('common.of')} ${deck.length}`
              : showFinal
                ? t('write.completed')
                : ''}
          </div>
        </div>
        <button
          onClick={closeErrorHunt}
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
          {t('errorhunt.noWords')}
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
              textAlign: 'center',
              fontSize: '.85rem',
              color: 'var(--text2)',
              marginBottom: 10,
            }}
          >
            {t('errorhunt.prompt')}
          </div>

          <div
            style={{
              background: 'var(--bg)',
              borderRadius: 12,
              padding: 16,
              marginBottom: 12,
              display: 'flex',
              flexWrap: 'wrap',
              gap: 6,
              justifyContent: 'center',
              lineHeight: 1.8,
            }}
          >
            {round.tokens.map((tok, i) => {
              let color = 'var(--text)';
              let bg = 'transparent';
              if (selected !== null) {
                if (i === round.swapIndex) {
                  color = '#fff';
                  bg = 'var(--success)';
                } else if (i === selected) {
                  color = '#fff';
                  bg = 'var(--danger)';
                }
              }
              return (
                <button
                  key={i}
                  disabled={selected !== null}
                  onClick={() => checkAnswer(i)}
                  style={{
                    border: 'none',
                    background: bg,
                    color,
                    borderRadius: 6,
                    padding: '3px 5px',
                    fontSize: '.95rem',
                    cursor: selected !== null ? 'default' : 'pointer',
                    fontFamily: 'inherit',
                  }}
                >
                  {tok}
                </button>
              );
            })}
          </div>

          <div
            style={{
              textAlign: 'center',
              fontSize: '.85rem',
              minHeight: 40,
              marginBottom: 8,
            }}
          >
            {selected !== null &&
              (selected === round.swapIndex ? (
                <span style={{ color: 'var(--success)', fontWeight: 600 }}>
                  {t('errorhunt.correctionLabel', {
                    wrong: round.distractorWord,
                    right: round.correctWord,
                  })}
                </span>
              ) : (
                <span style={{ color: 'var(--text2)' }}>
                  {t('errorhunt.wrongLabel', { right: round.correctWord })}
                </span>
              ))}
          </div>

          {selected !== null && knowEx && (
            <div
              style={{
                textAlign: 'center',
                fontSize: '.8rem',
                fontStyle: 'italic',
                color: 'var(--text2)',
                marginBottom: 12,
              }}
            >
              {knowEx}
            </div>
          )}

          {selected !== null && (
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
              onClick={closeErrorHunt}
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
bindOverlayOpenClose('btn-error-hunt', 'eh-overlay', openErrorHunt, closeErrorHunt);
