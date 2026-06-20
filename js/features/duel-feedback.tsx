// Vymova — js/features/duel-feedback.tsx
// Текст фідбеку + швидкість відповіді під питанням дуелі (item 32, Фаза 5).
// Чисте відображення `_getFeedbackData()`; duel.ts викликає
// refreshDuelFeedback() при кожній зміні (правильно/невірно/таймаут/
// заморозка/очікування суперника).
import type { ReactElement } from 'react';
import { _getFeedbackData } from './duel.ts';
import { notifyStateChange, useStateVersion } from '../../src/store.ts';

export function DuelFeedback(): ReactElement {
  useStateVersion();
  const d = _getFeedbackData();
  return (
    <>
      <div style={{ textAlign: 'center', fontSize: '.9rem', fontWeight: 600, minHeight: 24 }} dangerouslySetInnerHTML={{ __html: d.html }} />
      <div style={{ textAlign: 'center', fontSize: '.72rem', color: 'var(--text3)', minHeight: 16, marginTop: 2 }}>{d.speed}</div>
    </>
  );
}

export function refreshDuelFeedback(): void { notifyStateChange(); }
