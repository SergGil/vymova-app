// Vymova — js/features/mistake-review.tsx
// Flipcard overlay for reviewing words the user has made mistakes on.
// Entry: button in stats-page below the weak-words-list.
// "Got it ✓" → clearMistake(word); "Still hard ✗" → leave it.
import { createPortal } from 'react-dom';
import { useState, type ReactElement } from 'react';
import { W } from '../../data/words.js';
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
      <div className="mistake-review-overlay" onClick={onClose}>
        <div className="mistake-review-panel" onClick={(e) => e.stopPropagation()}>
          <button className="mistake-review-close" onClick={onClose} aria-label={t('common.close')}>
            ✕
          </button>
          <div className="mistake-review-done-title">{t('mistakes.noMistakes')}</div>
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

  return createPortal(
    <div className="mistake-review-overlay" onClick={!done ? undefined : onClose}>
      <div className="mistake-review-panel" onClick={(e) => e.stopPropagation()}>
        <button className="mistake-review-close" onClick={onClose} aria-label={t('common.close')}>
          ✕
        </button>
        <div className="mistake-review-title">{t('mistakes.title')}</div>

        {done ? (
          <div className="mistake-review-done">
            <div className="mistake-review-done-title">{t('mistakes.doneTitle')}</div>
            <div className="mistake-review-done-stats">
              {t('mistakes.doneStats', { cleared, total: cards.length })}
            </div>
            <button className="backup-btn primary" style={{ marginTop: 16 }} onClick={onClose}>
              OK
            </button>
          </div>
        ) : (
          <>
            <div className="mistake-review-progress">
              {idx + 1} / {cards.length}
            </div>

            <div
              className={`mistake-review-card${flipped ? ' flipped' : ''}`}
              onClick={() => setFlipped((f) => !f)}
            >
              <div className="mistake-review-front">
                <div className="mistake-review-word-row">
                  <div className="mistake-review-word">{card!.word}</div>
                  <button
                    className="mistake-review-speak"
                    onClick={(e) => {
                      e.stopPropagation();
                      speak(card!.word, null);
                    }}
                  >
                    🔊
                  </button>
                </div>
                {card!.entry[4] && (
                  <div className="mistake-review-ipa">{decodeIpa(card!.entry[4])}</div>
                )}
                {!flipped && (
                  <button
                    className="mistake-review-btn check"
                    onClick={(e) => {
                      e.stopPropagation();
                      setFlipped(true);
                    }}
                  >
                    👁 {t('mistakes.checkBtn')}
                  </button>
                )}
              </div>
              <div className="mistake-review-back">
                <div className="mistake-review-trans">{card!.entry[1]}</div>
                {card!.entry[2] && (
                  <div className="mistake-review-ex-row">
                    <div
                      className="mistake-review-ex"
                      dangerouslySetInnerHTML={{ __html: _escKeepBold(card!.entry[2]) }}
                    />
                    <button
                      type="button"
                      className="mistake-review-speak mistake-review-speak-ex"
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
                {card!.entry[3] && <div className="mistake-review-ex-tr">{card!.entry[3]}</div>}
              </div>
            </div>

            {flipped && (
              <div className="mistake-review-actions">
                <button className="mistake-review-btn hard" onClick={stillHard}>
                  {t('mistakes.stillHard')}
                </button>
                <button className="mistake-review-btn got" onClick={gotIt}>
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
