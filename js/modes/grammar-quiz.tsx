// Vymova — js/modes/grammar-quiz.tsx
// 📐 Grammar Quiz: turns the grammar reference page's example sentences
// (previously browse-only, no review loop) into a 4-option "which rule is
// this?" quiz. Structural mirror of idiom-quiz.tsx.
import { useEffect, useState, type ReactElement } from 'react';
import { ensureGrammarLoaded, getGrammarForLang } from '../features/word-data/grammar-loader.ts';
import type { GrammarCategory } from '../../data/grammar.ts';
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

export type GrammarQItem = {
  ruleId: string;
  ruleTitle: string;
  ruleEmoji: string;
  sentence: string;
  translation: string;
  ruleExplanation?: string;
};

// Every 'examples' section's rows are [target-language sentence, translation]
// pairs — flatten every rule's examples across every category into one pool
// so the quiz can ask "which rule does this sentence demonstrate?". Each
// rule's 'intro' section (same field GrammarPage itself renders as the
// reference-page explanation) is attached to every example row from that
// rule, so the quiz can show *why* the correct rule applies after answering.
function flattenExamples(categories: GrammarCategory[]): GrammarQItem[] {
  const out: GrammarQItem[] = [];
  for (const cat of categories) {
    for (const rule of cat.rules) {
      const ruleExplanation = rule.sections.find((s) => s.type === 'intro' && s.text)?.text;
      for (const sec of rule.sections) {
        if (sec.type !== 'examples' || !sec.rows) continue;
        for (const row of sec.rows) {
          const sentence = row[0];
          const translation = row[1];
          if (sentence && translation) {
            out.push({
              ruleId: rule.id,
              ruleTitle: rule.title,
              ruleEmoji: rule.emoji,
              sentence,
              translation,
              ruleExplanation,
            });
          }
        }
      }
    }
  }
  return out;
}

// A quiz option is a rule *title*, not an example sentence — a language
// can have plenty of example rows while still only covering 2-3 grammar
// rules (e.g. it/pt currently ship just 2 rules with several examples
// each), which isn't enough to build a 4-option question. So the
// fallback threshold below counts distinct rule titles, not raw items.
function distinctTitleCount(items: GrammarQItem[]): number {
  return new Set(items.map((i) => i.ruleTitle)).size;
}

// Prefers the language being learned (that's the point of the exercise);
// falls back to the known language, then to English. Not every one of the
// 40 target languages has a full grammar reference yet, hence the chain
// (mirrors idiom-quiz.tsx's pickPool, which has the same shape for the
// same reason). Exported for a direct unit test — callers must
// ensureGrammarLoaded() the learn/know/'en' candidates first (see
// startGame() below); this stays synchronous and just reads whatever's
// already in the loader's cache (js/features/grammar-loader.ts), same
// pattern as mode-utils.ts's getTable().
export function pickPool(): { lang: string; items: GrammarQItem[] } {
  const learn = getLearnLang();
  const know = getKnowLang();
  const learnCats = getGrammarForLang(learn);
  const learnItems = learnCats ? flattenExamples(learnCats) : [];
  if (distinctTitleCount(learnItems) >= NUM_OPTS) return { lang: learn, items: learnItems };
  const knowCats = getGrammarForLang(know);
  const knowItems = knowCats ? flattenExamples(knowCats) : [];
  if (distinctTitleCount(knowItems) >= NUM_OPTS) return { lang: know, items: knowItems };
  const enCats = getGrammarForLang('en');
  return { lang: 'en', items: enCats ? flattenExamples(enCats) : [] };
}

export type Question = { item: GrammarQItem; options: string[]; correct: string };

export function buildQuestion(item: GrammarQItem, pool: GrammarQItem[]): Question {
  const correct = item.ruleTitle;
  const wrongs: string[] = [];
  const used = new Set([correct]);
  for (const other of _shuf(pool)) {
    if (wrongs.length >= NUM_OPTS - 1) break;
    if (used.has(other.ruleTitle)) continue;
    used.add(other.ruleTitle);
    wrongs.push(other.ruleTitle);
  }
  return { item, options: _shuf([correct, ...wrongs]), correct };
}

function buildDeck(): { lang: string; deck: GrammarQItem[] } {
  const { lang, items } = pickPool();
  return { lang, deck: _shuf(items).slice(0, Math.min(SIZE, items.length)) };
}

let _open: (() => void) | null = null;
let _close: (() => void) | null = null;

export function openGrammarQuiz(): void {
  _open?.();
}
function closeGrammarQuiz(): void {
  _close?.();
}

export function GrammarQuizPage(): ReactElement {
  const [lang, setLang] = useState('en');
  const [deck, setDeck] = useState<GrammarQItem[]>([]);
  const [idx, setIdx] = useState(0);
  const [ok, setOk] = useState(0);
  const [fail, setFail] = useState(0);
  const [question, setQuestion] = useState<Question | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [showHint, setShowHint] = useState(false);

  const showFinal = deck.length > 0 && idx >= deck.length;
  const rtl = RTL_LANGS.has(lang);

  const startGame = (): void => {
    // Grammar data loads lazily per language (js/features/grammar-loader.ts).
    // pickPool()/buildDeck() stay synchronous (reading whatever's already
    // cached) — preload every candidate pickPool() might land on (learn,
    // know, its 'en' fallback) before calling them. Clears the deck first so
    // a stale previous session's cards can't flash before the new one loads.
    const learn = getLearnLang();
    const know = getKnowLang();
    setDeck([]);
    setQuestion(null);
    Promise.all([
      ensureGrammarLoaded(learn),
      ensureGrammarLoaded(know),
      ensureGrammarLoaded('en'),
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
    overlayId: 'grq-overlay',
    modeId: 'grammar-quiz',
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
    // Not recordMistake() here — grammar example sentences aren't dictionary
    // headwords, so feeding them into the cross-mode mistake/SRS system
    // (keyed by headword) would pollute "weak words" and the SRS due-count
    // with entries the rest of the app can't look up.
    recordModeAnswer('grammar-quiz', isOk);
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
      const overlay = document.getElementById('grq-overlay');
      if (overlay?.style.display !== 'flex') return;
      if (e.key === 'Escape') {
        closeGrammarQuiz();
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
            {t('grq.title')}
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
          onClick={closeGrammarQuiz}
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
          {t('grq.noWords')}
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
                {question.item.sentence}
              </div>
              <div style={{ fontSize: '.8rem', color: 'var(--text3)' }}>{t('grq.question')}</div>
            </div>
            <button
              className="mode-speak ml-2 inline-flex h-[30px] w-[30px] shrink-0 cursor-pointer items-center justify-center rounded-md border-none bg-white/7 align-middle text-[.9rem] text-[var(--text3)] transition-all duration-150"
              title={t('common.listen')}
              onClick={(e) => {
                try {
                  speakForCode(lang as Code, question.item.sentence, question.item.sentence, e.currentTarget);
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
            >
              {question.item.translation}
            </div>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
            {question.options.map((opt, i) => {
              let cls =
                "quiz-option group relative w-full cursor-pointer rounded-[11px] border-[1.5px] border-[var(--border)] bg-[var(--card)] px-3.5 py-2.5 text-left font-['DM_Sans',sans-serif] text-[.88rem] leading-[1.3] text-[var(--text)] transition-[border-color,background,transform] duration-150 not-disabled:hover:border-[var(--quiz-option-hover-border)] not-disabled:hover:bg-[var(--quiz-option-hover-bg)] disabled:cursor-default";
              if (selected) {
                if (opt === selected) cls += opt === question.correct ? ' correct !border-[var(--quiz-correct-border)] !bg-[var(--quiz-correct-bg)] !text-[var(--quiz-correct-color)] font-semibold' : ' wrong !border-[var(--quiz-wrong-border)] !bg-[var(--quiz-wrong-bg)] !text-[var(--quiz-wrong-color)]';
                else if (opt === question.correct) cls += ' reveal !border-[var(--quiz-reveal-border)] !bg-[var(--quiz-reveal-bg)] !text-[var(--quiz-reveal-color)] opacity-70';
              }
              return (
                <button
                  key={opt}
                  className={cls}
                  disabled={!!selected}
                  onClick={() => checkAnswer(opt)}
                >
                  <span className="opt-num inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[5px] bg-[var(--border)] mr-1.5 align-middle text-[.68rem] font-bold text-[var(--text2)] group-[.correct]:hidden group-[.wrong]:hidden group-[.reveal]:hidden">{i + 1}</span> {opt}
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

          {selected && (
            // Both fields are always authored in Ukrainian in data/grammar.ts
            // (same as GrammarPage's own reference rendering), regardless of
            // whether the quizzed sentence itself is in an RTL language —
            // no dir="rtl" here, unlike the sentence box above.
            <div style={{ textAlign: 'center', marginTop: 4 }}>
              <div
                data-testid="grq-post-translation"
                style={{
                  fontSize: '.8rem',
                  color: 'var(--text3)',
                  fontStyle: 'italic',
                }}
              >
                {question.item.translation}
              </div>
              {question.item.ruleExplanation && (
                <div
                  data-testid="grq-post-explanation"
                  style={{
                    fontSize: '.78rem',
                    color: 'var(--text2)',
                    marginTop: 6,
                  }}
                >
                  💡 {question.item.ruleExplanation}
                </div>
              )}
            </div>
          )}

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
          onClose={closeGrammarQuiz}
        />
      )}
    </>
  );
}

import { bindOverlayOpenClose } from '../features/overlay-utils.ts';
bindOverlayOpenClose('btn-grammar-quiz', 'grq-overlay', openGrammarQuiz, closeGrammarQuiz);
