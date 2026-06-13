// English Words App — js/features/duel-question.tsx
// Ядро питання/відповіді/таймера дуелі (item 32, Фаза 5). Чисте
// відображення `_getQuestionData()`; duel.ts викликає
// refreshDuelQuestion() при кожній зміні (нове питання, вибір
// відповіді, підказка, тайм-аут tempo, фінал гравця).
import { createRoot, type Root } from 'react-dom/client';
import type { ReactElement } from 'react';
import { useEffect, useRef } from 'react';
import { t } from './i18n.ts';
import { _getQuestionData, _onOptionClick, _onInputChange, _submitWrite, _useHint, _onNextClick } from './duel.ts';

function DuelQuestion(): ReactElement {
  const d = _getQuestionData();
  const inputRef = useRef<HTMLInputElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (d.showInputRow) {
      const id = setTimeout(() => { try { inputRef.current?.focus(); } catch (e) {} }, 60);
      return () => clearTimeout(id);
    }
  }, [d.quizIdx, d.showInputRow]);

  useEffect(() => {
    if (d.showNextBtn) { try { nextRef.current?.focus(); } catch (e) {} }
  }, [d.showNextBtn]);

  if (d.waiting) {
    return (
      <div style={{ display: 'flex', gap: 24, justifyContent: 'center', alignItems: 'center', background: 'var(--bg)', borderRadius: 14, padding: 18, marginBottom: 12, minHeight: 60 }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#27ae60' }}>{d.myCorrect}</div>
          <div style={{ fontSize: '.78rem', color: 'var(--text3)' }}>{t('duel.correctCount')}</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#e74c3c' }}>{d.myWrong}</div>
          <div style={{ fontSize: '.78rem', color: 'var(--text3)' }}>{t('duel.wrongCount')}</div>
        </div>
      </div>
    );
  }

  const isAnagramOrLetters = d.mode === 'anagram' || d.mode === 'letters';

  return (
    <>
      <div style={{ background: 'var(--bg)', borderRadius: 14, padding: 18, textAlign: 'center', marginBottom: 12, minHeight: 60 }}>
        <div style={isAnagramOrLetters
          ? { fontSize: '1.6rem', fontWeight: 700, letterSpacing: '.3em', color: 'var(--text)', textAlign: 'center' }
          : { fontSize: '1.25rem', fontWeight: 700, color: 'var(--text)', textAlign: 'center' }}>
          {d.qPrimary}
        </div>
        {d.qSecondary && (
          <div style={d.mode === 'anagram'
            ? { fontSize: '.95rem', color: 'var(--text2)', marginTop: 8, textAlign: 'center' }
            : { fontSize: '.78rem', color: 'var(--text3)', marginTop: 4, textAlign: 'center' }}>
            {d.qSecondary}
          </div>
        )}
        {d.qTertiary && (
          <div style={{ fontSize: '.78rem', color: 'var(--text3)', marginTop: 4, textAlign: 'center' }}>{d.qTertiary}</div>
        )}
        {d.hintNote && (
          <div style={{ fontSize: '.78rem', color: 'var(--accent)', marginTop: 6, textAlign: 'center' }}>{d.hintNote}</div>
        )}
      </div>

      {d.showOptions && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 10 }}>
          {d.options.map(opt => (
            <button
              key={opt.text}
              className={opt.cls}
              disabled={d.answered}
              onClick={() => _onOptionClick(opt.text)}
            >
              <span className="opt-num">{opt.num}</span> {opt.text}
            </button>
          ))}
        </div>
      )}

      {d.showInputRow && (
        <div style={{ marginBottom: 10 }}>
          <input
            key={d.quizIdx}
            ref={inputRef}
            type="text"
            placeholder={t('duel.writePrompt')}
            autoComplete="off"
            spellCheck={false}
            disabled={d.answered}
            defaultValue=""
            onChange={e => _onInputChange(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter' && !d.answered) _submitWrite(); }}
            style={{ width: '100%', padding: '11px 14px', border: `2px solid ${d.inputBorderColor || 'var(--border)'}`, borderRadius: 12, fontSize: '1rem', fontFamily: 'inherit', background: 'var(--bg)', color: 'var(--text)', outline: 'none', boxSizing: 'border-box', marginBottom: 8 }}
          />
          <div style={{ display: 'flex', gap: 8 }}>
            <button
              style={{ flex: 1, padding: 10, borderRadius: 10, border: 'none', background: 'var(--accent)', color: '#fff', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}
              onClick={() => { if (!d.answered) _submitWrite(); }}
            >
              {t('duel.check')}
            </button>
            {d.showHintBtn && (
              <button
                disabled={d.hintBtnDisabled}
                style={{ padding: '10px 12px', borderRadius: 10, border: '1.5px solid var(--border)', background: 'none', color: 'var(--text2)', cursor: 'pointer', fontFamily: 'inherit', fontSize: '.82rem' }}
                onClick={_useHint}
              >
                {d.hintBtnText}
              </button>
            )}
            <button
              ref={nextRef}
              style={{ display: d.showNextBtn ? 'inline-block' : 'none', padding: '10px 18px', borderRadius: 10, border: 'none', background: 'var(--accent)', color: '#fff', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}
              onClick={_onNextClick}
            >
              {t('duel.next')}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

let _questionRoot: Root | null = null;

export function mountDuelQuestion(): void {
  const el = document.getElementById('duel-question-mount');
  if (el) { _questionRoot = createRoot(el); _questionRoot.render(<DuelQuestion />); }
}

export function refreshDuelQuestion(): void { _questionRoot?.render(<DuelQuestion />); }
