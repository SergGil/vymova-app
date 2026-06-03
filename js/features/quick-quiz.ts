// English Words App — js/features/quick-quiz.ts
// ⚡ Quick Quiz button — launches 5-question quiz from current deck
import { openQuickQuiz } from '../modes/quiz.ts';

document.getElementById('btn-quick-quiz')?.addEventListener('click', openQuickQuiz);
