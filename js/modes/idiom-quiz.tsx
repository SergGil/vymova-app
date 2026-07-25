// Vymova — js/modes/idiom-quiz.tsx
// 💬 Idiom Quiz: turns the idioms reference page's data (previously browse-only,
// no review loop) into a 4-option "guess the meaning" quiz.
import { useEffect, useState, type ReactElement } from 'react';
import { ensureIdiomsLoaded, getIdiomsForLang } from '../features/word-data/idioms-loader.ts';
import type { Idiom } from '../../data/idioms.ts';
import { addCombo, breakCombo, awardXP } from '../features/game/combo.ts';
import { recordModeAnswer } from '../features/game/game.ts';
import { t } from '../features/i18n.ts';
import { getKnowLang, getLearnLang } from '../features/lang-pair-select.tsx';
import { speakForCode } from '../features/voice/speak-lang.ts';
import type { Code } from '../features/mode/mode-utils.ts';
import { ModeFinalScreen } from '../features/mode/mode-final-screen.tsx';
import { useModeSession } from '../features/mode/use-mode-session.ts';
import { _shuf } from '../core/srs.ts';

const SIZE = 8,
  NUM_OPTS = 4;
const RTL_LANGS = new Set(['he', 'ar', 'fa']);

// Prefers the language being learned (that's the point of the exercise);
// falls back to the known language, then to English — every one of the 40
// target languages has at least 5 idioms (see LANGUAGE_PROGRESS.md-adjacent
// content notes), enough for a 4-option question. Exported (unlike most
// per-mode build helpers in this codebase) so this fallback chain has a
// direct unit test instead of a re-declared copy. Stays synchronous —
// reads whatever's already in idioms-loader.ts's cache; callers must
// ensureIdiomsLoaded() the learn/know/'en' candidates first (see
// startGame() below).
export function pickPool(): { lang: string; idioms: Idiom[] } {
  const learn = getLearnLang();
  const know = getKnowLang();
  const learnPool = getIdiomsForLang(learn);
  if (learnPool && learnPool.length >= NUM_OPTS) return { lang: learn, idioms: learnPool };
  const knowPool = getIdiomsForLang(know);
  if (knowPool && knowPool.length >= NUM_OPTS) return { lang: know, idioms: knowPool };
  return { lang: 'en', idioms: getIdiomsForLang('en') ?? [] };
}

export type Question = { idiom: Idiom; options: string[]; correct: string };

export function buildQuestion(idiom: Idiom, pool: Idiom[]): Question {
  const correct = idiom.meaning;
  const wrongs: string[] = [];
  const used = new Set([correct]);
  for (const other of _shuf(pool)) {
    if (wrongs.length >= NUM_OPTS - 1) break;
    if (used.has(other.meaning)) continue;
    used.add(other.meaning);
    wrongs.push(other.meaning);
  }
  return { idiom, options: _shuf([correct, ...wrongs]), correct };
}

function buildDeck(): { lang: string; deck: Idiom[] } {
  const { lang, idioms } = pickPool();
  return { lang, deck: _shuf(idioms).slice(0, Math.min(SIZE, idioms.length)) };
}

let _open: (() => void) | null = null;
let _close: (() => void) | null = null;

export function openIdiomQuiz(): void {
  _open?.();
}
function closeIdiomQuiz(): void {
  _close?.();
}

export function IdiomQuizPage(): ReactElement {
  const [lang, setLang] = useState('en');
  const [deck, setDeck] = useState<Idiom[]>([]);
  const [idx, setIdx] = useState(0);
  const [ok, setOk] = useState(0);
  const [fail, setFail] = useState(0);
  const [question, setQuestion] = useState<Question | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [showHint, setShowHint] = useState(false);

  const showFinal = deck.length > 0 && idx >= deck.length;
  const rtl = RTL_LANGS.has(lang);

  const startGame = (): void => {
    // Idiom data loads lazily per language (js/features/idioms-loader.ts).
    // pickPool()/buildDeck() stay synchronous (reading whatever's already
    // cached) — preload every candidate pickPool() might land on (learn,
    // know, its 'en' fallback) before calling them.
    const learn = getLearnLang();
    const know = getKnowLang();
    setDeck([]);
    setQuestion(null);
    Promise.all([
      ensureIdiomsLoaded(learn),
      ensureIdiomsLoaded(know),
      ensureIdiomsLoaded('en'),
    ]).then(() => {
      const { lang: l, deck: d } = buildDeck();
      setLang(l);
      setDeck(d);
      setIdx(0);
      setOk(0);
      setFail(0);
      setSelected(null);
      setShowHint(false);
      setQuestion(d.length ? buildQuestion(d[0], d) : null);
    });
  };

  const session = useModeSession({
    overlayId: 'idq-overlay',
    modeId: 'idiom-quiz',
    isFinal: showFinal,
    onOpen: startGame,
    closeOnEscape: false,
    bindExternal: (open, close) => {
      _open = open;
      _close = close;
      return () => {
        _open = null;
        _close = null;
      };
    },
  });

  const checkAnswer = (opt: string): void => {
    if (!question || selected) return;
    setSelected(opt);
    const isOk = opt === question.correct;
    if (isOk) setOk((o) => o + 1);
    else setFail((f) => f + 1);
    try {
      if (isOk) {
        addCombo();
        awardXP(5);
      } else {
        breakCombo();
      }
    } catch (e) {}
    // Not recordMistake() here — idiom phrases aren't dictionary headwords,
    // so feeding them into the cross-mode mistake/SRS system (keyed by
    // headword) would pollute "weak words" and the SRS due-count with
    // entries the rest of the app can't look up.
    recordModeAnswer('idiom-quiz', isOk);
  };

  const next = (): void => {
    const ni = idx + 1;
    setIdx(ni);
    setSelected(null);
    setShowHint(false);
    setQuestion(ni < deck.length ? buildQuestion(deck[ni], deck) : null);
  };

  useEffect(() => {
    function onKeydown(e: KeyboardEvent): void {
      const overlay = document.getElementById('idq-overlay');
      if (overlay?.style.display !== 'flex') return;
      if (e.key === 'Escape') {
        closeIdiomQuiz();
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
            {t('idq.title')}
          </div>
          <div style={{ fontSize: '.75rem', color: 'var(--text3)', marginTop: 2 }}>
            {!showFinal && deck.length
              ? `${idx + 1} ${t('common.of')} ${deck.length}`
              : showFinal
                ? t('write.completed')
                : ''}
          </div>
        </div>
        <button
          onClick={closeIdiomQuiz}
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
          {t('idq.noWords')}
        </div>
      )}

      {!showFinal && question && (
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
              marginBottom: 10,
              minHeight: 70,
              display: 'flex',
              alignItems: 'flex-start',
              gap: 10,
            }}
            dir={rtl ? 'rtl' : undefined}
          >
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  color: 'var(--text)',
                  marginBottom: 4,
                }}
              >
                {question.idiom.emoji ? `${question.idiom.emoji} ` : ''}
                {question.idiom.phrase}
              </div>
              <div style={{ fontSize: '.8rem', color: 'var(--text3)' }}>{t('idq.question')}</div>
            </div>
            <button
              className="mode-speak ml-2 inline-flex h-[30px] w-[30px] shrink-0 cursor-pointer items-center justify-center rounded-md border-none bg-white/7 align-middle text-[.9rem] text-[var(--text3)] transition-all duration-150"
              title={t('common.listen')}
              onClick={(e) => {
                try {
                  speakForCode(lang as Code, question.idiom.phrase, question.idiom.phrase, e.currentTarget);
                } catch (err) {}
              }}
            >
              🔊
            </button>
          </div>

          {showHint && !selected && (
            <div
              style={{
                fontSize: '.78rem',
                color: 'var(--accent)',
                marginBottom: 8,
                textAlign: 'center',
                fontStyle: 'italic',
              }}
              dir={rtl ? 'rtl' : undefined}
            >
              {t('idq.exampleLabel')}: "{question.idiom.exampleSrc}"
            </div>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
            {question.options.map((opt, i) => {
              let cls =
                "quiz-option relative w-full cursor-pointer rounded-[11px] border-[1.5px] border-[var(--border)] bg-[var(--card)] px-3.5 py-2.5 text-left font-['DM_Sans',sans-serif] text-[.88rem] leading-[1.3] text-[var(--text)] transition-[border-color,background,transform] duration-150 disabled:cursor-default";
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
                  <span className="opt-num inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[5px] bg-[var(--border)] mr-1.5 align-middle text-[.68rem] font-bold text-[var(--text2)]">{i + 1}</span> {opt}
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
          onClose={closeIdiomQuiz}
        />
      )}
    </>
  );
}

import { bindOverlayOpenClose } from '../features/overlay-utils.ts';
bindOverlayOpenClose('btn-idiom-quiz', 'idq-overlay', openIdiomQuiz, closeIdiomQuiz);
