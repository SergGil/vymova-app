// Vymova — js/modes/ghost-race.tsx
// 👻 Ghost Race: answer 10 quiz questions while racing a "ghost" that moves
// at the pace of your own best previous run.
import { useEffect, useRef, useState, type ReactElement } from 'react';
import { _shuf } from '../core/srs.ts';
import { getDeckSnapshot } from '../../src/deck-store.ts';
import { W } from '../../data/words.js';
import { addCombo, breakCombo, awardXP } from '../features/combo.ts';
import { recordModeComplete, recordModeAnswer, recordMistake } from '../features/game.ts';
import { t } from '../features/i18n.ts';
import type { WordEntry } from '../../src/types.js';
import { entryFor } from '../features/mode-utils.ts';
import { getKnowLang, getLearnLang } from '../features/lang-pair-select.tsx';

const N = 10;
const NUM_OPTS = 4;

type Question = { w: WordEntry; prompt: string; options: string[]; correct: string };
type GhostData = { checkpoints: number[]; total: number; ok: number };

function ghostKey(): string {
  return `ew_ghost_best_${getLearnLang()}_${getKnowLang()}`;
}

function loadGhost(): GhostData | null {
  try {
    const raw = localStorage.getItem(ghostKey());
    if (!raw) return null;
    const parsed = JSON.parse(raw) as GhostData;
    if (Array.isArray(parsed.checkpoints) && typeof parsed.total === 'number')
      return {
        ...parsed,
        ok: typeof parsed.ok === 'number' ? parsed.ok : parsed.checkpoints.length,
      };
  } catch (e) {}
  return null;
}

// A run only beats the saved ghost if it answered at least as many questions
// correctly — otherwise racing to click through wrong answers as fast as
// possible would "win", which defeats the point of a vocabulary quiz. Among
// runs with equal accuracy, the faster one wins.
function saveGhostIfBetter(current: GhostData, prev: GhostData | null): boolean {
  const better =
    !prev || current.ok > prev.ok || (current.ok === prev.ok && current.total < prev.total);
  if (better) localStorage.setItem(ghostKey(), JSON.stringify(current));
  return better;
}

function fmt(ms: number): string {
  return (ms / 1000).toFixed(1) + t('common.secSuffix');
}

/** Fraction (0..1) of the race the ghost has covered by `elapsedMs`, based on
 * its own recorded per-question checkpoint times, linearly interpolated
 * between checkpoints so the ghost bar glides smoothly rather than jumping. */
function ghostFraction(checkpoints: number[], elapsedMs: number): number {
  const n = checkpoints.length;
  if (!n) return 0;
  if (elapsedMs >= checkpoints[n - 1]) return 1;
  for (let i = 0; i < n; i++) {
    const prev = i === 0 ? 0 : checkpoints[i - 1];
    if (elapsedMs < checkpoints[i]) {
      const span = checkpoints[i] - prev;
      const into = span > 0 ? (elapsedMs - prev) / span : 1;
      return (i + into) / n;
    }
  }
  return 1;
}

function buildQuestion(w: WordEntry, distractorPool: WordEntry[]): Question {
  const learnLang = getLearnLang();
  const knowLang = getKnowLang();
  const prompt = entryFor(learnLang, w).word || w[0];
  const correct = entryFor(knowLang, w).word || w[1];
  const used = new Set([correct.toLowerCase()]);
  const wrongs: string[] = [];
  for (const pw of _shuf(distractorPool)) {
    if (wrongs.length >= NUM_OPTS - 1) break;
    const cand = entryFor(knowLang, pw).word;
    if (!cand || used.has(cand.toLowerCase())) continue;
    used.add(cand.toLowerCase());
    wrongs.push(cand);
  }
  return { w, prompt, options: _shuf([correct, ...wrongs]), correct };
}

function buildDeck(): Question[] {
  const distractorPool = W.slice() as unknown as WordEntry[];
  const mainPool = _shuf(
    (getDeckSnapshot().length ? getDeckSnapshot().slice() : distractorPool.slice()) as WordEntry[],
  ).slice(0, N);
  return mainPool.map((w) => buildQuestion(w, distractorPool));
}

let _open: (() => void) | null = null;
let _close: (() => void) | null = null;

function openGhostRace(): void {
  _open?.();
}
function closeGhostRace(): void {
  _close?.();
}

export function GhostRacePage(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const [screen, setScreen] = useState<'ready' | 'playing' | 'result'>('ready');
  const [ghost, setGhost] = useState<GhostData | null>(null);
  const [deck, setDeck] = useState<Question[]>([]);
  const [qIdx, setQIdx] = useState(0);
  const [ok, setOk] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [checkpoints, setCheckpoints] = useState<number[]>([]);
  const [elapsedMs, setElapsedMs] = useState(0);
  const [result, setResult] = useState<{ total: number; isNew: boolean } | null>(null);
  const [completed, setCompleted] = useState(false);

  const startRef = useRef<number | null>(null);
  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopTick = (): void => {
    if (tickRef.current) {
      clearInterval(tickRef.current);
      tickRef.current = null;
    }
  };

  const goToReady = (): void => {
    stopTick();
    setScreen('ready');
    setGhost(loadGhost());
  };

  useEffect(() => {
    _open = () => {
      setIsOpen(true);
      goToReady();
      const overlay = document.getElementById('ghost-overlay');
      if (overlay) overlay.style.display = 'flex';
    };
    _close = () => {
      stopTick();
      setIsOpen(false);
      const overlay = document.getElementById('ghost-overlay');
      if (overlay) overlay.style.display = 'none';
    };
    return () => {
      _open = null;
      _close = null;
      stopTick();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    function onKeydown(e: KeyboardEvent): void {
      const overlay = document.getElementById('ghost-overlay');
      if (overlay?.style.display !== 'flex') return;
      if (e.key === 'Escape') closeGhostRace();
    }
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  }, []);

  const startRace = (): void => {
    setDeck(buildDeck());
    setQIdx(0);
    setOk(0);
    setSelected(null);
    setCheckpoints([]);
    setResult(null);
    setCompleted(false);
    setScreen('playing');
    startRef.current = Date.now();
    setElapsedMs(0);
    stopTick();
    tickRef.current = setInterval(() => {
      setElapsedMs(Date.now() - (startRef.current ?? Date.now()));
    }, 100);
  };

  const finishRace = (finalCheckpoints: number[], finalOk: number): void => {
    stopTick();
    const total = finalCheckpoints[finalCheckpoints.length - 1] ?? 0;
    const isNew = saveGhostIfBetter({ checkpoints: finalCheckpoints, total, ok: finalOk }, ghost);
    setResult({ total, isNew });
    setScreen('result');
    if (!completed) {
      try {
        recordModeComplete('ghost');
      } catch (e) {}
      setCompleted(true);
    }
  };

  const choose = (opt: string): void => {
    const q = deck[qIdx];
    if (!q || selected) return;
    setSelected(opt);
    const isOk = opt === q.correct;
    const newOk = isOk ? ok + 1 : ok;
    if (isOk) setOk(newOk);
    else recordMistake(q.w[0]);
    try {
      if (isOk) {
        addCombo();
        awardXP(5);
      } else {
        breakCombo();
      }
    } catch (e) {}
    recordModeAnswer('ghost', isOk);

    const now = Date.now() - (startRef.current ?? Date.now());
    const newCheckpoints = [...checkpoints, now];
    setCheckpoints(newCheckpoints);

    setTimeout(() => {
      setSelected(null);
      if (qIdx + 1 >= deck.length) {
        finishRace(newCheckpoints, newOk);
      } else {
        setQIdx((i) => i + 1);
      }
    }, 350);
  };

  if (!isOpen) return <></>;

  const q = deck[qIdx];
  const youFraction = deck.length ? checkpoints.length / deck.length : 0;
  const ghostFrac = ghost ? ghostFraction(ghost.checkpoints, elapsedMs) : 0;

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
        <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)' }}>
          👻 {t('ghost.title')}
        </div>
        <button
          onClick={closeGhostRace}
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

      {screen === 'ready' && (
        <div style={{ textAlign: 'center', padding: '10px 0 4px' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: 10 }}>🏁</div>
          <div style={{ fontSize: '.9rem', color: 'var(--text2)', marginBottom: 6 }}>
            {t('ghost.readyPrompt', { n: N })}
          </div>
          <div style={{ fontSize: '.85rem', color: 'var(--text3)', marginBottom: 20 }}>
            {ghost
              ? `${t('ghost.bestLabel')}: ${fmt(ghost.total)} (${ghost.ok}/${N})`
              : t('ghost.noGhostYet')}
          </div>
          <button
            onClick={startRace}
            style={{
              padding: '11px 32px',
              borderRadius: 10,
              border: 'none',
              background: 'var(--accent)',
              color: '#fff',
              fontWeight: 700,
              cursor: 'pointer',
              fontFamily: 'inherit',
              fontSize: '.95rem',
            }}
          >
            {t('ghost.startBtn')}
          </button>
        </div>
      )}

      {screen === 'playing' && q && (
        <>
          <div style={{ marginBottom: 14 }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '.72rem',
                color: 'var(--text3)',
                marginBottom: 2,
              }}
            >
              <span>{t('ghost.youLabel')}</span>
              <span>
                {checkpoints.length}/{deck.length}
              </span>
            </div>
            <div
              style={{
                height: 8,
                background: 'var(--border)',
                borderRadius: 4,
                overflow: 'hidden',
                marginBottom: 8,
              }}
            >
              <div
                style={{
                  height: '100%',
                  background: 'var(--accent)',
                  borderRadius: 4,
                  width: `${youFraction * 100}%`,
                  transition: 'width .3s',
                }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '.72rem',
                color: 'var(--text3)',
                marginBottom: 2,
              }}
            >
              <span>👻 {t('ghost.ghostLabel')}</span>
              <span>{fmt(elapsedMs)}</span>
            </div>
            <div
              style={{
                height: 8,
                background: 'var(--border)',
                borderRadius: 4,
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  height: '100%',
                  background: 'var(--text3)',
                  borderRadius: 4,
                  width: `${ghostFrac * 100}%`,
                  transition: 'width .1s linear',
                }}
              />
            </div>
          </div>

          <div
            style={{
              background: 'var(--bg)',
              borderRadius: 12,
              padding: 16,
              textAlign: 'center',
              marginBottom: 14,
            }}
          >
            <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text)' }}>
              {q.prompt}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
            {q.options.map((opt, i) => {
              let cls = 'quiz-option';
              if (selected) {
                if (opt === selected) cls += opt === q.correct ? ' correct' : ' wrong';
                else if (opt === q.correct) cls += ' reveal';
              }
              return (
                <button key={opt} className={cls} disabled={!!selected} onClick={() => choose(opt)}>
                  <span className="opt-num">{i + 1}</span> {opt}
                </button>
              );
            })}
          </div>
        </>
      )}

      {screen === 'result' && result && (
        <div style={{ textAlign: 'center', padding: '10px 0 4px' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: 8 }}>{result.isNew ? '🏆' : '🏁'}</div>
          <div
            style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}
          >
            {result.isNew ? t('ghost.newBestTitle') : t('ghost.finishedTitle')}
          </div>
          <div style={{ fontSize: '.9rem', color: 'var(--text2)', marginBottom: 4 }}>
            {t('ghost.yourTime')}: {fmt(result.total)}
          </div>
          <div style={{ fontSize: '.82rem', color: 'var(--text3)', marginBottom: 16 }}>
            {ok} {t('common.of')} {deck.length}
          </div>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
            <button
              onClick={startRace}
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
              onClick={closeGhostRace}
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
bindOverlayOpenClose('btn-ghost', 'ghost-overlay', openGhostRace, closeGhostRace);
