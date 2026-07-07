// Vymova — js/modes/dictation.tsx
// 🎧 Dictation: listen to the example sentence via TTS, type what you heard,
// and get scored on word-overlap accuracy — shadowing.tsx's spoken-repeat
// exercise, but typed instead of spoken (no mic/STT permission needed).
import { useEffect, useRef, useState, type ReactElement } from 'react';
import { orderDeckPool } from '../core/srs.ts';
import { getDeckSnapshot } from '../../src/deck-store.ts';
import { W } from '../../data/words.js';
import { addCombo, breakCombo, awardXP } from '../features/combo.ts';
import { recordModeComplete, recordModeAnswer, recordMistake } from '../features/game.ts';
import { speak } from '../features/voice/speech.ts';
import { t } from '../features/i18n.ts';
import type { WordEntry } from '../../src/types.js';
import { entryFor } from '../features/mode-utils.ts';
import { getKnowLang, getLearnLang } from '../features/lang-pair-select.tsx';
import { ModeFinalScreen } from '../features/mode-final-screen.tsx';
import { normalizeWords, sentenceSimilarity } from './shadowing.tsx';

const ROUNDS = 8;

type Round = { w: WordEntry; target: string; translation: string };

function buildRound(w: WordEntry): Round | null {
  const target = entryFor(getLearnLang(), w).ex;
  const translation = entryFor(getKnowLang(), w).ex;
  if (!target || !translation) return null;
  const tokenCount = target.trim().split(/\s+/).filter(Boolean).length;
  if (tokenCount < 3 || tokenCount > 12) return null;
  return { w, target, translation };
}

function buildDeck(): Round[] {
  const base = (getDeckSnapshot().length
    ? getDeckSnapshot().slice()
    : W.slice()) as unknown as WordEntry[];
  const pool = orderDeckPool(base);
  const rounds: Round[] = [];
  for (const w of pool) {
    if (rounds.length >= ROUNDS) break;
    const r = buildRound(w);
    if (r) rounds.push(r);
  }
  return rounds;
}

type Phase = 'listening' | 'result';

let _open: (() => void) | null = null;
let _close: (() => void) | null = null;

export function openDictation(): void {
  _open?.();
}
function closeDictation(): void {
  _close?.();
}

export function DictationPage(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const [deck, setDeck] = useState<Round[]>([]);
  const [idx, setIdx] = useState(0);
  const [ok, setOk] = useState(0);
  const [fail, setFail] = useState(0);
  const [phase, setPhase] = useState<Phase>('listening');
  const [input, setInput] = useState('');
  const [score, setScore] = useState<number | null>(null);
  const [completed, setCompleted] = useState(false);

  const speakBtnRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const round: Round | null = deck[idx] ?? null;
  const showFinal = isOpen && deck.length > 0 && idx >= deck.length;

  const startGame = (): void => {
    setDeck(buildDeck());
    setIdx(0);
    setOk(0);
    setFail(0);
    setPhase('listening');
    setInput('');
    setScore(null);
    setCompleted(false);
  };

  useEffect(() => {
    _open = () => {
      setIsOpen(true);
      startGame();
      const overlay = document.getElementById('dict-overlay');
      if (overlay) overlay.style.display = 'flex';
    };
    _close = () => {
      setIsOpen(false);
      const overlay = document.getElementById('dict-overlay');
      if (overlay) overlay.style.display = 'none';
    };
    return () => {
      _open = null;
      _close = null;
    };
  }, []);

  useEffect(() => {
    if (showFinal && !completed) {
      recordModeComplete('dictation');
      setCompleted(true);
    }
  }, [showFinal, completed]);

  useEffect(() => {
    function onKeydown(e: KeyboardEvent): void {
      const overlay = document.getElementById('dict-overlay');
      if (overlay?.style.display !== 'flex') return;
      if (e.key === 'Escape') closeDictation();
    }
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  }, []);

  // Auto-play the sentence as soon as a round is ready, mirroring
  // shadowing.tsx — the user shouldn't have to tap the speaker just to
  // hear it once.
  useEffect(() => {
    if (!round || phase !== 'listening') return;
    const id = setTimeout(() => {
      try {
        speak(round.target, speakBtnRef.current);
      } catch (e) {}
      inputRef.current?.focus();
    }, 300);
    return () => clearTimeout(id);
  }, [round, phase]);

  const finishRound = (): void => {
    if (!round) return;
    const sim = sentenceSimilarity(round.target, input);
    const passed = sim >= 0.5;
    try {
      if (sim >= 0.8) {
        addCombo();
        awardXP(8);
      } else if (sim >= 0.5) {
        awardXP(4);
      } else {
        breakCombo();
      }
    } catch (e) {}
    if (!passed) recordMistake(round.w[0]);
    if (passed) setOk((o) => o + 1);
    else setFail((f) => f + 1);
    recordModeAnswer('dictation', passed);
    setScore(sim);
    setPhase('result');
  };

  const next = (): void => {
    setIdx((i) => i + 1);
    setPhase('listening');
    setInput('');
    setScore(null);
  };

  if (!isOpen) return <></>;

  const scoreColor =
    score === null
      ? 'var(--text2)'
      : score >= 0.8
        ? 'var(--success)'
        : score >= 0.5
          ? 'var(--accent2)'
          : 'var(--danger)';
  const scoreLabel =
    score === null
      ? ''
      : score >= 0.8
        ? t('shadow.scoreGreat')
        : score >= 0.5
          ? t('shadow.scoreOk')
          : t('shadow.scorePoor');

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
            {t('dict.title')}
          </div>
          <div style={{ fontSize: '.75rem', color: 'var(--text3)', marginTop: 2 }}>
            {!showFinal && deck.length
              ? `${t('shadow.round')} ${idx + 1} ${t('common.of')} ${deck.length}`
              : showFinal
                ? t('write.completed')
                : ''}
          </div>
        </div>
        <button
          onClick={closeDictation}
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
          {t('shadow.noWords')}
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
              padding: '18px 16px',
              textAlign: 'center',
              marginBottom: 14,
            }}
          >
            <div
              style={{
                fontSize: '.72rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '.08em',
                color: 'var(--text3)',
                marginBottom: 10,
              }}
            >
              {phase === 'result' ? t('dict.youTyped') : t('dict.prompt')}
            </div>

            <button
              ref={speakBtnRef}
              onClick={() => {
                try {
                  speak(round.target, speakBtnRef.current);
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
              }}
              title={t('common.listen')}
            >
              🔊
            </button>

            {phase === 'result' && (
              <>
                <div style={{ fontSize: '.95rem', color: 'var(--text)', marginTop: 4 }}>
                  "{input || '—'}"
                </div>
                <div
                  style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text)', marginTop: 10 }}
                >
                  {round.target}
                </div>
                <div style={{ fontSize: '.85rem', color: 'var(--text2)', marginTop: 4 }}>
                  {round.translation}
                </div>
                {score !== null && (
                  <div
                    data-testid="dict-score"
                    style={{ fontSize: '.9rem', fontWeight: 700, color: scoreColor, marginTop: 8 }}
                  >
                    {scoreLabel} ({Math.round(score * 100)}%)
                  </div>
                )}
              </>
            )}
          </div>

          {phase === 'listening' && (
            <>
              <input
                ref={inputRef}
                data-testid="dict-input"
                type="text"
                autoComplete="off"
                autoCapitalize="off"
                spellCheck={false}
                placeholder={t('dict.placeholder')}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') finishRound();
                }}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '2px solid var(--border)',
                  borderRadius: 12,
                  fontSize: '1rem',
                  fontFamily: "'DM Sans',sans-serif",
                  background: 'var(--bg)',
                  color: 'var(--text)',
                  outline: 'none',
                  boxSizing: 'border-box',
                  marginBottom: 10,
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button
                  onClick={finishRound}
                  disabled={!normalizeWords(input).length}
                  style={{
                    padding: '10px 24px',
                    borderRadius: 10,
                    border: 'none',
                    background: 'var(--accent)',
                    color: '#fff',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    fontSize: '.88rem',
                    opacity: normalizeWords(input).length ? 1 : 0.5,
                  }}
                >
                  {t('dict.checkBtn')}
                </button>
              </div>
            </>
          )}

          {phase === 'result' && (
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
        <ModeFinalScreen
          ok={ok}
          total={deck.length}
          keepGoingKey="tempo.practiceTitle"
          onRetry={startGame}
          onClose={closeDictation}
        />
      )}
    </>
  );
}

import { bindOverlayOpenClose } from '../features/overlay-utils.ts';
bindOverlayOpenClose('btn-dictation', 'dict-overlay', openDictation, closeDictation);
