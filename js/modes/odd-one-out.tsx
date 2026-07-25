// Vymova — js/modes/odd-one-out.tsx
// 🧐 Odd One Out: 5 words shown, one doesn't belong to the others' category
import { useState, type ReactElement } from 'react';
import { _shuf } from '../core/srs.ts';
import { getWordIndex } from '../core/word-index.ts';
import { W } from '../../data/words-data/words.js';
import { WORD_CATEGORIES, CATEGORY_LIST, getCategoriesForWord } from '../../data/categories.js';
import type { WordEntry } from '../../src/types.js';
import { entryFor } from '../features/mode/mode-utils.ts';
import { getKnowLang, getLearnLang } from '../features/lang-pair-select.tsx';
import { t, categoryName } from '../features/i18n.ts';
import { addCombo, breakCombo, awardXP } from '../features/game/combo.ts';
import { recordModeAnswer, recordMistake } from '../features/game/game.ts';
import { ModeFinalScreen } from '../features/mode/mode-final-screen.tsx';
import { useModeSession } from '../features/mode/use-mode-session.ts';

const ROUNDS = 8;
const GROUP_SIZE = 4;
const GENERIC_CATEGORY = '🔤 Загальна лексика';

export type Choice = { entry: WordEntry; label: string; translation: string };
export type Round = {
  choices: Choice[];
  oddIndex: number;
  mainCategory: string;
  oddCategory: string;
};

export function wordsForCategory(cat: string): WordEntry[] {
  const idx = getWordIndex();
  if (!idx) return [];
  return (WORD_CATEGORIES[cat] ?? [])
    .filter((w) => idx.has(w))
    .map((w) => (W as unknown as WordEntry[])[idx.get(w)!])
    .filter(Boolean);
}

export function toChoice(w: WordEntry): Choice {
  const learnLang = getLearnLang();
  const knowLang = getKnowLang();
  return {
    entry: w,
    label: entryFor(learnLang, w).word || w[0],
    translation: entryFor(knowLang, w).word || w[1],
  };
}

export function buildRoundForMain(mainCat: string): Round | null {
  const mainWords = _shuf(wordsForCategory(mainCat));
  if (mainWords.length < GROUP_SIZE) return null;
  const group = mainWords.slice(0, GROUP_SIZE);
  const groupHeads = new Set(group.map((w) => w[0].toLowerCase()));

  const otherCats = _shuf(CATEGORY_LIST.filter((c) => c !== mainCat));
  for (const oddCat of otherCats) {
    const candidates = _shuf(wordsForCategory(oddCat)).filter(
      (w) => !groupHeads.has(w[0].toLowerCase()) && !getCategoriesForWord(w[0]).includes(mainCat),
    );
    if (!candidates.length) continue;
    const odd = candidates[0];
    const choices = _shuf([...group, odd].map(toChoice));
    const oddIndex = choices.findIndex((c) => c.entry[0] === odd[0]);
    return { choices, oddIndex, mainCategory: mainCat, oddCategory: oddCat };
  }
  return null;
}

export function buildDeck(): Round[] {
  const rounds: Round[] = [];
  const cats = _shuf(CATEGORY_LIST.filter((c) => c !== GENERIC_CATEGORY));
  for (const mainCat of cats) {
    if (rounds.length >= ROUNDS) break;
    const round = buildRoundForMain(mainCat);
    if (round) rounds.push(round);
  }
  return rounds;
}

let _open: (() => void) | null = null;
let _close: (() => void) | null = null;

export function openOddOneOut(): void {
  _open?.();
}
function closeOddOneOut(): void {
  _close?.();
}

export function OddOneOutPage(): ReactElement {
  const [deck, setDeck] = useState<Round[]>([]);
  const [idx, setIdx] = useState(0);
  const [ok, setOk] = useState(0);
  const [fail, setFail] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);

  const round: Round | null = deck[idx] ?? null;
  const showFinal = deck.length > 0 && idx >= deck.length;

  const startGame = (): void => {
    setDeck(buildDeck());
    setIdx(0);
    setOk(0);
    setFail(0);
    setSelected(null);
  };

  const session = useModeSession({
    overlayId: 'oo-overlay',
    modeId: 'oddone',
    isFinal: showFinal,
    onOpen: startGame,
    bindExternal: (open, close) => {
      _open = open;
      _close = close;
      return () => {
        _open = null;
        _close = null;
      };
    },
  });
  const { isOpen } = session;

  const checkAnswer = (i: number): void => {
    if (!round || selected !== null) return;
    setSelected(i);
    const isOk = i === round.oddIndex;
    if (isOk) setOk((o) => o + 1);
    else {
      setFail((f) => f + 1);
      recordMistake(round.choices[round.oddIndex].entry[0]);
    }
    try {
      if (isOk) {
        addCombo();
        awardXP(5);
      } else {
        breakCombo();
      }
    } catch (e) {}
    recordModeAnswer('oddone', isOk);
  };

  const next = (): void => {
    setIdx((i) => i + 1);
    setSelected(null);
  };

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
            🧐 {t('oddone.title')}
          </div>
          <div style={{ fontSize: '.75rem', color: 'var(--text3)', marginTop: 2 }}>
            {!showFinal && deck.length
              ? `${t('oddone.round')} ${idx + 1} ${t('common.of')} ${deck.length}`
              : showFinal
                ? t('write.completed')
                : ''}
          </div>
        </div>
        <button
          onClick={closeOddOneOut}
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
          {t('oddone.noWords')}
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
              marginBottom: 12,
            }}
          >
            {t('oddone.prompt')}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 8 }}>
            {round.choices.map((c, i) => {
              let cls =
                "quiz-option relative w-full cursor-pointer rounded-[11px] border-[1.5px] border-[var(--border)] bg-[var(--card)] px-3.5 py-2.5 text-left font-['DM_Sans',sans-serif] text-[.88rem] leading-[1.3] text-[var(--text)] transition-[border-color,background,transform] duration-150 disabled:cursor-default";
              if (selected !== null) {
                if (i === selected) cls += i === round.oddIndex ? ' correct' : ' wrong';
                else if (i === round.oddIndex) cls += ' reveal';
              }
              return (
                <button
                  key={c.entry[0]}
                  className={cls}
                  disabled={selected !== null}
                  onClick={() => checkAnswer(i)}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    gap: 10,
                  }}
                >
                  <span>{c.label}</span>
                  {selected !== null && (
                    <span style={{ fontSize: '.8rem', opacity: 0.65, fontWeight: 400 }}>
                      {c.translation}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div
            style={{
              textAlign: 'center',
              fontSize: '.85rem',
              fontWeight: 600,
              minHeight: 22,
              marginBottom: selected !== null ? 8 : 0,
            }}
          >
            {selected !== null &&
              (selected === round.oddIndex ? (
                <span style={{ color: 'var(--success)' }}>{t('quiz.correctMsg')}</span>
              ) : (
                <span style={{ color: 'var(--danger)' }}>{t('oddone.wrongMsg')}</span>
              ))}
          </div>

          {selected !== null && (
            <div
              style={{
                background: 'var(--bg)',
                borderRadius: 10,
                padding: 12,
                marginBottom: 10,
                fontSize: '.82rem',
                color: 'var(--text2)',
                lineHeight: 1.6,
              }}
            >
              <div>
                <span style={{ fontWeight: 700, color: 'var(--text)' }}>
                  {categoryName(round.mainCategory)}:
                </span>{' '}
                {round.choices
                  .filter((_, i) => i !== round.oddIndex)
                  .map((c) => c.label)
                  .join(', ')}
              </div>
              <div style={{ marginTop: 4 }}>
                <span style={{ fontWeight: 700, color: 'var(--danger)' }}>
                  {categoryName(round.oddCategory)} ({t('oddone.oddLabel')}):
                </span>{' '}
                {round.choices[round.oddIndex].label}
              </div>
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
        <ModeFinalScreen
          ok={ok}
          total={deck.length}
          keepGoingKey="tempo.practiceTitle"
          onRetry={() => session.open()}
          onClose={closeOddOneOut}
        />
      )}
    </>
  );
}

import { bindOverlayOpenClose } from '../features/overlay-utils.ts';
bindOverlayOpenClose('btn-oddone', 'oo-overlay', openOddOneOut, closeOddOneOut);
