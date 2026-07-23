// Vymova — js/features/mistake-review.tsx
// Flipcard overlay for reviewing words the user has made mistakes on.
// Entry: button in stats-page below the weak-words-list.
// "Got it ✓" → clearMistake(word); "Still hard ✗" → leave it.
import { createPortal } from 'react-dom';
import { useState, type ReactElement } from 'react';
import { W } from '../../data/words-data/words.js';
import { getWordIndex } from '../core/word-index.ts';
import { getMistakes, clearMistake } from './game.ts';
import { speak } from './voice/speech.ts';
import { decodeIpa } from '../core/ui-helpers.ts';
import { t } from './i18n.ts';
import type { WordEntry } from '../../src/types.js';

type Card = { word: string; entry: WordEntry; count: number };

// entry[2] (the example sentence) is always static bundled dictionary data
// today — never live user input — but it can legitimately contain a literal
// <b>...</b> highlight around the target word (see lesson.tsx's
// buildEnExHtml). Escape everything else so this stays safe if a future
// custom-word-import/edit feature ever lets a user write to this field,
// without breaking the existing bold highlighting.
function _escKeepBold(s: string): string {
  const escaped = s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
  return escaped.replace(/&lt;(\/?)b&gt;/gi, '<$1b>');
}

function buildCards(): Card[] {
  const mistakes = getMistakes();
  const wordIdx = getWordIndex();
  return Object.entries(mistakes)
    .sort((a, b) => b[1] - a[1])
    .map(([word, count]) => {
      const idx = wordIdx.get(word);
      if (idx === undefined) return null;
      return { word, entry: W[idx] as unknown as WordEntry, count };
    })
    .filter((c): c is Card => c !== null);
}

type Props = { onClose: () => void };

export function MistakeReview({ onClose }: Props): ReactElement | null {
  const [cards] = useState<Card[]>(() => buildCards());
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [cleared, setCleared] = useState(0);

  if (cards.length === 0) {
    return createPortal(
      <div
        className="mistake-review-overlay fixed inset-0 z-[9000] flex items-center justify-center bg-black/55 p-4"
        onClick={onClose}
      >
        <div
          className="mistake-review-panel relative w-full max-w-[400px] rounded-[18px] bg-card px-5 pb-5 pt-6 shadow-[0_8px_32px_rgba(0,0,0,0.25)]"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="mistake-review-close absolute right-[14px] top-3 cursor-pointer border-none bg-transparent text-[1.1rem] leading-none text-text2"
            onClick={onClose}
            aria-label={t('common.close')}
          >
            ✕
          </button>
          <div className="mistake-review-done-title mb-1.5 text-[1.4rem] font-extrabold text-text">
            {t('mistakes.noMistakes')}
          </div>
        </div>
      </div>,
      document.body,
    );
  }

  const done = idx >= cards.length;

  const gotIt = (): void => {
    clearMistake(cards[idx].word);
    setCleared((n) => n + 1);
    setFlipped(false);
    setIdx((i) => i + 1);
  };

  const stillHard = (): void => {
    setFlipped(false);
    setIdx((i) => i + 1);
  };

  const card = done ? null : cards[idx];

  // Shared by both flip faces — matches the original .mistake-review-front,
  // .mistake-review-back CSS selector list.
  const FACE_BASE =
    'rounded-[12px] border-[1.5px] border-border bg-bg px-4 pb-3.5 pt-[18px] text-center transition-[opacity,transform] duration-[250ms] [backface-visibility:hidden]';

  return createPortal(
    <div
      className="mistake-review-overlay fixed inset-0 z-[9000] flex items-center justify-center bg-black/55 p-4"
      onClick={!done ? undefined : onClose}
    >
      <div
        className="mistake-review-panel relative w-full max-w-[400px] rounded-[18px] bg-card px-5 pb-5 pt-6 shadow-[0_8px_32px_rgba(0,0,0,0.25)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="mistake-review-close absolute right-[14px] top-3 cursor-pointer border-none bg-transparent text-[1.1rem] leading-none text-text2"
          onClick={onClose}
          aria-label={t('common.close')}
        >
          ✕
        </button>
        <div className="mistake-review-title mb-2.5 text-center text-[1.05rem] font-bold text-text">
          {t('mistakes.title')}
        </div>

        {done ? (
          <div className="mistake-review-done pb-1 pt-2.5 text-center">
            <div className="mistake-review-done-title mb-1.5 text-[1.4rem] font-extrabold text-text">
              {t('mistakes.doneTitle')}
            </div>
            <div className="mistake-review-done-stats text-[0.88rem] text-text2">
              {t('mistakes.doneStats', { cleared, total: cards.length })}
            </div>
            <button className="backup-btn primary" style={{ marginTop: 16 }} onClick={onClose}>
              OK
            </button>
          </div>
        ) : (
          <>
            <div className="mistake-review-progress mb-2.5 text-center text-[0.8rem] text-text3">
              {idx + 1} / {cards.length}
            </div>

            <div
              className={
                'mistake-review-card relative mb-[14px] min-h-[130px] cursor-pointer [perspective:800px]' +
                (flipped ? ' flipped' : '')
              }
              onClick={() => setFlipped((f) => !f)}
            >
              <div className={'mistake-review-front ' + FACE_BASE + (flipped ? ' hidden' : '')}>
                <div className="mistake-review-word-row mb-1 flex items-center justify-center gap-2">
                  <div className="mistake-review-word text-[1.6rem] font-extrabold text-text">
                    {card!.word}
                  </div>
                  <button
                    className="mistake-review-speak shrink-0 cursor-pointer border-none bg-transparent text-[1.2rem]"
                    onClick={(e) => {
                      e.stopPropagation();
                      speak(card!.word, null);
                    }}
                  >
                    🔊
                  </button>
                </div>
                {card!.entry[4] && (
                  <div className="mistake-review-ipa mb-1.5 text-[0.82rem] text-text3">
                    {decodeIpa(card!.entry[4])}
                  </div>
                )}
                {!flipped && (
                  <button
                    className="mistake-review-btn check mt-1 flex-1 cursor-pointer rounded-[10px] border-none bg-[color-mix(in_srgb,var(--accent)_15%,transparent)] p-2.5 text-[0.9rem] font-bold text-accent transition-opacity duration-150 hover:opacity-85"
                    onClick={(e) => {
                      e.stopPropagation();
                      setFlipped(true);
                    }}
                  >
                    👁 {t('mistakes.checkBtn')}
                  </button>
                )}
              </div>
              <div
                className={
                  'mistake-review-back ' + FACE_BASE + (flipped ? ' block' : ' hidden')
                }
              >
                <div className="mistake-review-trans mb-2 text-[1.3rem] font-bold text-text">
                  {card!.entry[1]}
                </div>
                {card!.entry[2] && (
                  <div className="mistake-review-ex-row flex items-start justify-center gap-1.5">
                    <div
                      className="mistake-review-ex text-[0.82rem] leading-[1.45] text-text2"
                      dangerouslySetInnerHTML={{ __html: _escKeepBold(card!.entry[2]) }}
                    />
                    <button
                      type="button"
                      className="mistake-review-speak mistake-review-speak-ex mb-0 mt-px shrink-0 cursor-pointer border-none bg-transparent text-base"
                      title={t('cards.pronounce')}
                      onClick={(e) => {
                        e.stopPropagation();
                        speak(card!.entry[2], e.currentTarget);
                      }}
                    >
                      🔊
                    </button>
                  </div>
                )}
                {card!.entry[3] && (
                  <div className="mistake-review-ex-tr mt-1 text-[0.78rem] leading-[1.45] text-text3">
                    {card!.entry[3]}
                  </div>
                )}
              </div>
            </div>

            {flipped && (
              <div className="mistake-review-actions flex gap-2.5">
                <button
                  className="mistake-review-btn hard flex-1 cursor-pointer rounded-[10px] border-none bg-[color-mix(in_srgb,var(--danger)_15%,transparent)] p-2.5 text-[0.9rem] font-bold text-danger transition-opacity duration-150 hover:opacity-85"
                  onClick={stillHard}
                >
                  {t('mistakes.stillHard')}
                </button>
                <button
                  className="mistake-review-btn got flex-1 cursor-pointer rounded-[10px] border-none bg-[color-mix(in_srgb,var(--success)_15%,transparent)] p-2.5 text-[0.9rem] font-bold text-success transition-opacity duration-150 hover:opacity-85"
                  onClick={gotIt}
                >
                  {t('mistakes.gotIt')}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>,
    document.body,
  );
}
