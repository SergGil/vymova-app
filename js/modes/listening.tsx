// Vymova — js/modes/listening.tsx
// 🔊 LISTENING MODE
import { useEffect, useRef, useState, type ReactElement } from 'react';
import { _shuf, orderDeckPool } from '../core/srs.ts';
import { getDeckSnapshot } from '../../src/deck-store.ts';
import { W } from '../../data/words.js';
import { addCombo, breakCombo, awardXP } from '../features/combo.ts';
import { recordMistake, recordModeAnswer } from '../features/game.ts';
import { t } from '../features/i18n.ts';
import { playSound } from '../core/audio.ts';
import { speakForCode } from '../features/voice/speak-lang.ts';
import type { WordEntry, Code } from '../../src/types.js';
import { entryFor } from '../features/mode-utils.ts';
import { getKnowLang, getLearnLang } from '../features/lang-pair-select.tsx';
import { ModeFinalScreen } from '../features/mode-final-screen.tsx';
import { useModeSession } from '../features/use-mode-session.ts';

const SIZE = 10;

function build(): WordEntry[] {
  const base = (getDeckSnapshot().length ? getDeckSnapshot().slice() : W.slice()) as WordEntry[];
  return orderDeckPool(base).slice(0, SIZE);
}

function buildOptions(word: WordEntry, knowLang: Code): string[] {
  const correct = entryFor(knowLang, word).word;
  const pool = _shuf(W.slice() as unknown as WordEntry[]);
  const wrongs: string[] = [];
  const used: Record<string, boolean> = { [word[0].toLowerCase()]: true };
  for (let i = 0; i < pool.length && wrongs.length < 3; i++) {
    const k = pool[i][0].toLowerCase();
    if (used[k]) continue;
    used[k] = true;
    const opt = entryFor(knowLang, pool[i]).word;
    if (!opt || opt === correct) continue;
    wrongs.push(opt);
  }
  return _shuf([correct, ...wrongs]);
}

type Result = { correct: boolean; chosen: string; correctAnswer: string } | null;

let _open: (() => void) | null = null;
let _close: (() => void) | null = null;

export function openListening(): void {
  _open?.();
}
function closeListening(): void {
  _close?.();
}

export function ListeningPage(): ReactElement {
  const [deck, setDeck] = useState<WordEntry[]>([]);
  const [idx, setIdx] = useState(0);
  const [ok, setOk] = useState(0);
  const [fail, setFail] = useState(0);
  const [options, setOptions] = useState<string[]>([]);
  const [result, setResult] = useState<Result>(null);

  const playBtnRef = useRef<HTMLButtonElement>(null);
  const stateRef = useRef({
    answered: false,
    options: [] as string[],
    deck: [] as WordEntry[],
    idx: 0,
  });
  stateRef.current = { answered: !!result, options, deck, idx };

  const word: WordEntry | null = deck[idx] ?? null;
  const showFinal = idx >= deck.length && deck.length > 0;

  const playWord = (): void => {
    if (!word) return;
    const learnLang = getLearnLang();
    const entry = entryFor(learnLang, word);
    try {
      speakForCode(
        learnLang,
        entry.word || word[0],
        word[0],
        playBtnRef.current as HTMLElement,
        entry.translit,
      );
    } catch (e) {
      playBtnRef.current?.classList.remove('on');
    }
  };

  const startGame = (): void => {
    const d = build();
    setDeck(d);
    setIdx(0);
    setOk(0);
    setFail(0);
    setResult(null);
  };

  const session = useModeSession({
    overlayId: 'listen-overlay',
    modeId: 'listen',
    isFinal: showFinal,
    onOpen: startGame,
    onClose: () => {
      try {
        window.speechSynthesis?.cancel();
      } catch (e) {}
    },
    closeOnEscape: false,
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

  // Regenerate options + speak word when moving to a new question
  useEffect(() => {
    if (!isOpen || !word) return;
    setOptions(buildOptions(word, getKnowLang()));
    setResult(null);
    const tmr = setTimeout(playWord, 400);
    return () => clearTimeout(tmr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, idx, deck]);

  // Keyboard shortcuts
  useEffect(() => {
    function onKeydown(e: KeyboardEvent): void {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        session.close();
        return;
      }
      const { answered, options: opts, idx: curIdx, deck: curDeck } = stateRef.current;
      if (e.key === ' ' && !answered) {
        e.preventDefault();
        playWord();
      }
      if (e.key === 'ArrowRight' && answered) {
        e.preventDefault();
        setIdx(curIdx + 1);
      }
      if (['1', '2', '3', '4'].includes(e.key) && !answered) {
        const i = parseInt(e.key, 10) - 1;
        const opt = opts[i];
        if (opt !== undefined && curIdx < curDeck.length) selectOption(opt);
      }
    }
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const selectOption = (opt: string): void => {
    if (!word || result) return;
    const correct = entryFor(getKnowLang(), word).word;
    if (opt === correct) {
      setOk((o) => o + 1);
      setResult({ correct: true, chosen: opt, correctAnswer: correct });
      try {
        addCombo();
        awardXP(5);
        playSound('know');
      } catch (e) {}
      recordModeAnswer('listen', true);
    } else {
      setFail((f) => f + 1);
      setResult({ correct: false, chosen: opt, correctAnswer: correct });
      try {
        breakCombo();
        playSound('next');
      } catch (e) {}
      recordMistake(word[0]);
      recordModeAnswer('listen', false);
    }
  };

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
            data-i18n="listen.title"
          >
            🔊 {t('listen.title').replace(/^🔊\s*/, '')}
          </div>
          <div style={{ fontSize: '.75rem', color: 'var(--text3)', marginTop: 2 }}>
            {!showFinal && word
              ? `${t('listen.word')} ${idx + 1} ${t('common.of')} ${deck.length}`
              : t('write.completed')}
          </div>
        </div>
        <button
          onClick={closeListening}
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

      {!showFinal && (
        <>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginBottom: 18 }}>
            <span style={{ fontSize: '.82rem', color: 'var(--success)', fontWeight: 600 }}>
              ✓ {ok}
            </span>
            <span style={{ fontSize: '.82rem', color: 'var(--danger)', fontWeight: 600 }}>
              ✗ {fail}
            </span>
          </div>

          <div style={{ textAlign: 'center', marginBottom: 16 }}>
            <button ref={playBtnRef} className="listen-play-btn" onClick={playWord}>
              🔊
            </button>
            <div style={{ fontSize: '.78rem', color: 'var(--text3)' }} data-i18n="listen.playHint">
              {t('listen.playHint')}
            </div>
            <div style={{ fontSize: '.72rem', color: 'var(--text3)', marginTop: 3 }}>
              <kbd
                style={{
                  background: 'var(--border)',
                  borderRadius: 4,
                  padding: '1px 5px',
                  fontSize: '.68rem',
                }}
                data-i18n="kbd.space"
              >
                {t('kbd.space')}
              </kbd>{' '}
              <span data-i18n="listen.repeatHint">{t('listen.repeatHint')}</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
            {options.map((opt, i) => {
              let cls =
                "quiz-option relative w-full cursor-pointer rounded-[11px] border-[1.5px] border-[var(--border)] bg-[var(--card)] px-3.5 py-2.5 text-left font-['DM_Sans',sans-serif] text-[.88rem] leading-[1.3] text-[var(--text)] transition-[border-color,background,transform] duration-150 disabled:cursor-default";
              if (result) {
                if (opt === result.chosen) cls += result.correct ? ' correct' : ' wrong';
                else if (opt === result.correctAnswer && !result.correct) cls += ' reveal';
              }
              return (
                <button
                  key={opt}
                  className={cls}
                  disabled={!!result}
                  onClick={() => selectOption(opt)}
                >
                  <span className="opt-num inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[5px] bg-[var(--border)] mr-1.5 align-middle text-[.68rem] font-bold text-[var(--text2)]">{i + 1}</span> {opt}
                </button>
              );
            })}
          </div>

          <div
            style={{
              minHeight: 24,
              textAlign: 'center',
              fontSize: '.9rem',
              fontWeight: 600,
              marginTop: 10,
            }}
          >
            {result &&
              word &&
              (result.correct ? (
                <span style={{ color: 'var(--success)' }}>
                  {t('quiz.correctMsg')} — <b>{entryFor(getLearnLang(), word).word || word[0]}</b>
                </span>
              ) : (
                <span style={{ color: 'var(--danger)' }}>
                  ✗ {t('listen.wrongPrefix')}{' '}
                  <b>{entryFor(getLearnLang(), word).word || word[0]}</b> — «{result.correctAnswer}»
                </span>
              ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 12 }}>
            <button
              style={{
                display: result ? 'inline-block' : 'none',
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
              onClick={() => setIdx(idx + 1)}
            >
              {idx >= deck.length - 1 ? t('quiz.finish') : t('write.next')}
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
          onClose={closeListening}
        />
      )}
    </>
  );
}

import { bindOverlayOpenClose } from '../features/overlay-utils.ts';
bindOverlayOpenClose('btn-listen', 'listen-overlay', openListening, closeListening);
