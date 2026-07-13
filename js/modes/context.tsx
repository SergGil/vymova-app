// Vymova — js/modes/context.tsx
// 🔍 Context Mode: guess word meaning from context sentence
import { useEffect, useState, type ReactElement } from 'react';
import { _shuf, orderDeckPool } from '../core/srs.ts';
import { getDeckSnapshot } from '../../src/deck-store.ts';
import { W } from '../../data/words.js';
import { addCombo, breakCombo, awardXP } from '../features/combo.ts';
import { recordModeAnswer, recordMistake } from '../features/game.ts';
import { t } from '../features/i18n.ts';
import type { WordEntry } from '../../src/types.js';
import { entryFor } from '../features/mode-utils.ts';
import { getKnowLang } from '../features/lang-pair-select.tsx';
import { speak } from '../features/voice/speech.ts';
import { ModeFinalScreen } from '../features/mode-final-screen.tsx';
import { useModeSession } from '../features/use-mode-session.ts';

const SIZE = 8,
  NUM_OPTS = 4;

type Question = {
  w: WordEntry;
  hiddenHtml: string;
  hint: string;
  options: string[];
  correct: string;
};

function getExample(w: WordEntry): string {
  return w[2] ?? '';
}

function hasGoodExample(w: WordEntry): boolean {
  const ex = getExample(w);
  return ex.length >= 15 && ex.toLowerCase().includes(w[0].toLowerCase().split(' ')[0]);
}

function build(): WordEntry[] {
  const base = (getDeckSnapshot().length
    ? getDeckSnapshot().slice()
    : W.slice()) as unknown as WordEntry[];
  const pool = orderDeckPool(base);
  let deck = pool.filter(hasGoodExample).slice(0, SIZE);
  if (deck.length < 4) {
    deck = _shuf((W as unknown as WordEntry[]).filter((w) => getExample(w).length >= 15)).slice(
      0,
      SIZE,
    );
  }
  return deck;
}

function buildQuestion(w: WordEntry): Question {
  const ex = getExample(w);
  const wordBase = w[0].split(' ')[0].toLowerCase();
  const hiddenHtml = ex.replace(new RegExp(wordBase + '\\w*', 'gi'), '___');

  const ipaRaw = w[4] ?? '';
  const hint = ipaRaw
    ? `${t('ctx.hintColon')} ${ipaRaw}`
    : `${t('ctx.firstLetterColon')} ${w[0][0].toUpperCase()}`;

  const knowLang = getKnowLang();
  const correct = entryFor(knowLang, w).word || w[1];
  const wrongs: string[] = [];
  const used = new Set([w[0].toLowerCase()]);
  const pool = _shuf(W.slice() as unknown as WordEntry[]);
  for (const pw of pool) {
    if (wrongs.length >= NUM_OPTS - 1) break;
    if (used.has(pw[0].toLowerCase())) continue;
    used.add(pw[0].toLowerCase());
    const opt = entryFor(knowLang, pw).word;
    if (!opt || opt === correct) continue;
    wrongs.push(opt);
  }
  const options = _shuf([correct, ...wrongs]);
  return { w, hiddenHtml, hint, options, correct };
}

let _open: (() => void) | null = null;
let _close: (() => void) | null = null;

export function openContext(): void {
  _open?.();
}
function closeContext(): void {
  _close?.();
}

export function ContextPage(): ReactElement {
  const [deck, setDeck] = useState<WordEntry[]>([]);
  const [idx, setIdx] = useState(0);
  const [ok, setOk] = useState(0);
  const [fail, setFail] = useState(0);
  const [question, setQuestion] = useState<Question | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const showFinal = deck.length > 0 && idx >= deck.length;

  const startGame = (): void => {
    const d = build();
    setDeck(d);
    setIdx(0);
    setOk(0);
    setFail(0);
    setSelected(null);
    setShowHint(false);
    setRevealed(false);
    setQuestion(d.length ? buildQuestion(d[0]) : null);
  };

  const session = useModeSession({
    overlayId: 'ctx-overlay',
    modeId: 'context',
    isFinal: showFinal,
    onOpen: startGame,
    closeOnEscape: false,
  });

  useEffect(() => {
    _open = session.open;
    _close = session.close;
    return () => {
      _open = null;
      _close = null;
    };
  }, [session.open, session.close]);

  const checkAnswer = (opt: string): void => {
    if (!question || selected) return;
    setSelected(opt);
    setRevealed(true);
    const isOk = opt === question.correct;
    if (isOk) setOk((o) => o + 1);
    else {
      setFail((f) => f + 1);
      recordMistake(question.w[0]);
    }
    try {
      if (isOk) {
        addCombo();
        awardXP(5);
      } else {
        breakCombo();
      }
    } catch (e) {}
    recordModeAnswer('context', isOk);
  };

  const next = (): void => {
    const ni = idx + 1;
    setIdx(ni);
    setSelected(null);
    setShowHint(false);
    setRevealed(false);
    setQuestion(ni < deck.length ? buildQuestion(deck[ni]) : null);
  };

  // Escape / keyboard shortcuts
  useEffect(() => {
    function onKeydown(e: KeyboardEvent): void {
      const overlay = document.getElementById('ctx-overlay');
      if (overlay?.style.display !== 'flex') return;
      if (e.key === 'Escape') {
        closeContext();
        return;
      }
      if (['1', '2', '3', '4'].includes(e.key) && !selected && question) {
        e.preventDefault();
        const opt = question.options[parseInt(e.key, 10) - 1];
        if (opt !== undefined) checkAnswer(opt);
      }
      if ((e.key === 'ArrowRight' || e.key === ' ') && selected) {
        e.preventDefault();
        next();
      }
    }
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [question, selected]);

  const w = question?.w;
  let revealedHtml = '';
  if (revealed && question && w) {
    const ex = getExample(w);
    const wordBase = w[0].split(' ')[0].toLowerCase();
    revealedHtml = ex.replace(
      new RegExp(`(${wordBase}\\w*)`, 'gi'),
      `<b style="color:var(--accent);">$1</b>`,
    );
  }

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
          <div
            style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)' }}
            data-i18n="ctx.title"
          >
            {t('ctx.title')}
          </div>
          <div style={{ fontSize: '.75rem', color: 'var(--text3)', marginTop: 2 }}>
            {!showFinal && deck.length
              ? `${t('ctx.contextWord')} ${idx + 1} ${t('common.of')} ${deck.length}`
              : showFinal
                ? t('write.completed')
                : ''}
          </div>
        </div>
        <button
          onClick={closeContext}
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
          {t('ctx.noWords')}
        </div>
      )}

      {!showFinal && question && w && (
        <>
          <div
            style={{
              display: 'flex',
              gap: 14,
              justifyContent: 'center',
              marginBottom: 12,
              flexShrink: 0,
            }}
          >
            <span style={{ fontSize: '.82rem', color: 'var(--success)', fontWeight: 600 }}>
              ✓ {ok}
            </span>
            <span style={{ fontSize: '.82rem', color: 'var(--danger)', fontWeight: 600 }}>
              ✗ {fail}
            </span>
          </div>

          {!revealed && (
            <div
              style={{
                background: 'var(--bg)',
                borderRadius: 12,
                padding: 16,
                marginBottom: 10,
                minHeight: 70,
                display: 'flex',
                alignItems: 'flex-start',
                gap: 10,
              }}
            >
              <div
                style={{
                  fontStyle: 'italic',
                  fontSize: '.95rem',
                  color: 'var(--text)',
                  lineHeight: 1.6,
                  flex: 1,
                }}
              >
                "{question.hiddenHtml}"
              </div>
              <button
                className="mode-speak"
                title={t('common.listen')}
                onClick={(e) => {
                  try {
                    speak(getExample(w), e.currentTarget);
                  } catch (err) {}
                }}
              >
                🔊
              </button>
            </div>
          )}
          {revealed && (
            <div
              style={{
                background: 'var(--bg)',
                borderRadius: 12,
                padding: 16,
                marginBottom: 10,
                minHeight: 70,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 8 }}>
                <div
                  style={{
                    fontStyle: 'italic',
                    fontSize: '.9rem',
                    color: 'var(--text)',
                    lineHeight: 1.6,
                    flex: 1,
                  }}
                  dangerouslySetInnerHTML={{ __html: `"${revealedHtml}"` }}
                />
                <button
                  className="mode-speak"
                  title={t('common.listen')}
                  onClick={(e) => {
                    try {
                      speak(getExample(w), e.currentTarget);
                    } catch (err) {}
                  }}
                >
                  🔊
                </button>
              </div>
              <div style={{ fontSize: '.8rem', color: 'var(--text3)', marginBottom: 8 }}>
                {entryFor(getKnowLang(), w).ex}
              </div>
              <div style={{ fontSize: '.82rem', fontWeight: 700, color: 'var(--text)' }}>
                {w[0]}
              </div>
              <div style={{ fontSize: '.78rem', color: 'var(--text2)' }}>
                {entryFor(getKnowLang(), w).word || w[1]}
              </div>
            </div>
          )}

          {showHint && !revealed && (
            <div
              style={{
                fontSize: '.78rem',
                color: 'var(--accent)',
                marginBottom: 8,
                textAlign: 'center',
              }}
            >
              {question.hint}
            </div>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
            {question.options.map((opt, i) => {
              let cls = 'quiz-option';
              if (selected) {
                if (opt === selected) cls += opt === question.correct ? ' correct' : ' wrong';
                else if (opt === question.correct) cls += ' reveal';
              }
              return (
                <button
                  key={opt}
                  className={cls}
                  disabled={!!selected}
                  onClick={() => checkAnswer(opt)}
                >
                  <span className="opt-num">{i + 1}</span> {opt}
                </button>
              );
            })}
          </div>

          <div
            style={{
              textAlign: 'center',
              fontSize: '.88rem',
              fontWeight: 600,
              minHeight: 22,
              marginTop: 8,
            }}
          >
            {selected &&
              (selected === question.correct ? (
                <span style={{ color: 'var(--success)' }}>{t('quiz.correctMsg')}</span>
              ) : (
                <span style={{ color: 'var(--danger)' }}>✗ {question.correct}</span>
              ))}
          </div>

          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 10 }}>
            <button
              onClick={() => setShowHint(true)}
              disabled={!!selected}
              style={{
                padding: '8px 14px',
                borderRadius: 10,
                border: '1.5px solid var(--border)',
                background: 'none',
                color: 'var(--text3)',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontSize: '.8rem',
              }}
              data-i18n="ctx.hintBtn"
            >
              {t('ctx.hintBtn')}
            </button>
            {selected && (
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
            )}
          </div>
        </>
      )}

      {showFinal && (
        <ModeFinalScreen
          ok={ok}
          total={deck.length}
          keepGoingKey="listen.keepGoingTitle"
          onRetry={() => session.open()}
          onClose={closeContext}
        />
      )}
    </>
  );
}

import { bindOverlayOpenClose } from '../features/overlay-utils.ts';
bindOverlayOpenClose('btn-context', 'ctx-overlay', openContext, closeContext);
