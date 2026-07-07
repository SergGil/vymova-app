// Vymova — js/modes/shadowing.tsx
// 🎙️ Shadowing: listen to the example sentence via TTS, repeat it aloud,
// and get scored on how many of the words you actually said.
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
import { ModeFinalScreen } from '../features/mode-final-screen.tsx';
import { speechLangFor } from '../features/speech-lang.ts';

const ROUNDS = 8;

interface SpeechRecognitionLike extends EventTarget {
  lang: string;
  interimResults: boolean;
  continuous: boolean;
  maxAlternatives: number;
  start(): void;
  abort(): void;
  onresult: ((e: { results: { 0: { transcript: string } }[] }) => void) | null;
  onerror: (() => void) | null;
  onend: (() => void) | null;
}

export function getSpeechRecognitionCtor(): (new () => SpeechRecognitionLike) | null {
  const w = window as unknown as {
    SpeechRecognition?: new () => SpeechRecognitionLike;
    webkitSpeechRecognition?: new () => SpeechRecognitionLike;
  };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

export function speechRecognitionSupported(): boolean {
  return getSpeechRecognitionCtor() !== null;
}

export function normalizeWords(s: string): string[] {
  return s
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, '')
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}

export function sentenceSimilarity(target: string, spoken: string): number {
  const targetWords = normalizeWords(target);
  const spokenWords = new Set(normalizeWords(spoken));
  if (!targetWords.length) return 0;
  const matched = targetWords.filter((w) => spokenWords.has(w)).length;
  return matched / targetWords.length;
}

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

type Phase = 'ready' | 'listening' | 'result';

let _open: (() => void) | null = null;
let _close: (() => void) | null = null;

export function openShadowing(): void {
  _open?.();
}
function closeShadowing(): void {
  _close?.();
}

export function ShadowingPage(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const [deck, setDeck] = useState<Round[]>([]);
  const [idx, setIdx] = useState(0);
  const [ok, setOk] = useState(0);
  const [fail, setFail] = useState(0);
  const [phase, setPhase] = useState<Phase>('ready');
  const [transcript, setTranscript] = useState<string | null>(null);
  const [score, setScore] = useState<number | null>(null);
  const [completed, setCompleted] = useState(false);

  const speakBtnRef = useRef<HTMLButtonElement>(null);
  const recRef = useRef<SpeechRecognitionLike | null>(null);

  const round: Round | null = deck[idx] ?? null;
  const showFinal = isOpen && deck.length > 0 && idx >= deck.length;
  const supported = speechRecognitionSupported();

  const startGame = (): void => {
    setDeck(buildDeck());
    setIdx(0);
    setOk(0);
    setFail(0);
    setPhase('ready');
    setTranscript(null);
    setScore(null);
    setCompleted(false);
  };

  useEffect(() => {
    _open = () => {
      setIsOpen(true);
      startGame();
      const overlay = document.getElementById('shadow-overlay');
      if (overlay) overlay.style.display = 'flex';
    };
    _close = () => {
      try {
        recRef.current?.abort();
      } catch (e) {}
      recRef.current = null;
      setIsOpen(false);
      const overlay = document.getElementById('shadow-overlay');
      if (overlay) overlay.style.display = 'none';
    };
    return () => {
      _open = null;
      _close = null;
    };
  }, []);

  useEffect(() => {
    if (showFinal && !completed) {
      recordModeComplete('shadow');
      setCompleted(true);
    }
  }, [showFinal, completed]);

  useEffect(() => {
    function onKeydown(e: KeyboardEvent): void {
      const overlay = document.getElementById('shadow-overlay');
      if (overlay?.style.display !== 'flex') return;
      if (e.key === 'Escape') closeShadowing();
    }
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  }, []);

  // Auto-play the sentence as soon as a round is ready, so the user doesn't
  // have to tap the speaker button just to hear it once.
  useEffect(() => {
    if (!round || phase !== 'ready') return;
    const id = setTimeout(() => {
      try {
        speak(round.target, speakBtnRef.current);
      } catch (e) {}
    }, 300);
    return () => clearTimeout(id);
  }, [round, phase]);

  const finishRound = (spoken: string | null): void => {
    if (!round) return;
    const sim = spoken === null ? 1 : sentenceSimilarity(round.target, spoken);
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
    recordModeAnswer('shadow', passed);
    setTranscript(spoken);
    setScore(sim);
    setPhase('result');
  };

  const startListening = (): void => {
    const Ctor = getSpeechRecognitionCtor();
    if (!Ctor || !round) return;
    const rec = new Ctor();
    rec.lang = speechLangFor(getLearnLang());
    rec.interimResults = false;
    rec.continuous = false;
    rec.maxAlternatives = 1;
    let gotResult = false;
    rec.onresult = (e) => {
      gotResult = true;
      finishRound(e.results[0]?.[0]?.transcript ?? '');
    };
    rec.onerror = () => {
      gotResult = true;
      setPhase('ready');
    };
    rec.onend = () => {
      if (!gotResult) setPhase('ready');
      recRef.current = null;
    };
    recRef.current = rec;
    setPhase('listening');
    try {
      rec.start();
    } catch (e) {
      setPhase('ready');
    }
  };

  const stopListening = (): void => {
    try {
      recRef.current?.abort();
    } catch (e) {}
    recRef.current = null;
    setPhase('ready');
  };

  const next = (): void => {
    setIdx((i) => i + 1);
    setPhase('ready');
    setTranscript(null);
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
            🎙️ {t('shadow.title')}
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
          onClick={closeShadowing}
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
              {phase === 'result' ? t('shadow.revealedLabel') : t('shadow.prompt')}
            </div>

            {phase !== 'result' && (
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
                title={t('bee.speakTitle')}
              >
                🔊
              </button>
            )}

            {phase === 'result' && (
              <>
                <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text)' }}>
                  {round.target}
                </div>
                <div style={{ fontSize: '.85rem', color: 'var(--text2)', marginTop: 4 }}>
                  {round.translation}
                </div>
                {transcript !== null && (
                  <div style={{ fontSize: '.78rem', color: 'var(--text3)', marginTop: 8 }}>
                    {t('shadow.youSaid')}: "{transcript || '—'}"
                  </div>
                )}
                {score !== null && (
                  <div
                    style={{ fontSize: '.9rem', fontWeight: 700, color: scoreColor, marginTop: 8 }}
                  >
                    {scoreLabel} ({Math.round(score * 100)}%)
                  </div>
                )}
              </>
            )}
          </div>

          {phase === 'ready' && (
            <div style={{ display: 'flex', justifyContent: 'center', gap: 8 }}>
              {supported ? (
                <button
                  onClick={startListening}
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
                  }}
                >
                  🎤 {t('shadow.recordBtn')}
                </button>
              ) : (
                <button
                  onClick={() => finishRound(null)}
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
                  }}
                >
                  {t('shadow.saidItBtn')}
                </button>
              )}
            </div>
          )}

          {phase === 'listening' && (
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontSize: '.9rem',
                  color: 'var(--danger)',
                  fontWeight: 600,
                  marginBottom: 8,
                }}
              >
                🔴 {t('shadow.listeningLabel')}
              </div>
              <button
                onClick={stopListening}
                style={{
                  padding: '8px 18px',
                  borderRadius: 10,
                  border: '1.5px solid var(--border)',
                  background: 'none',
                  color: 'var(--text2)',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  fontSize: '.82rem',
                }}
              >
                {t('common.close')}
              </button>
            </div>
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
          onClose={closeShadowing}
        />
      )}
    </>
  );
}

import { bindOverlayOpenClose } from '../features/overlay-utils.ts';
bindOverlayOpenClose('btn-shadow', 'shadow-overlay', openShadowing, closeShadowing);
