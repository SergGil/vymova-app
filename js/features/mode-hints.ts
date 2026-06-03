// English Words App — js/features/mode-hints.ts
// Per-mode first-launch hint banner (shows once per mode)
export {};

const SEEN_KEY = 'ew_mode_hints_seen';

const HINTS: Record<string, { text: string; panel: string }> = {
  'quiz-overlay':    { text: '🧠 Тест: оберіть правильний переклад з 4 варіантів. Клавіші 1–4 для швидкого вибору.', panel: '.quiz-panel' },
  'write-overlay':   { text: '✍️ Письмо: введіть переклад англійською. 💡 — підказка, 🎤 — голосовий ввід.', panel: '.quiz-panel' },
  'listen-overlay':  { text: '🔊 Аудіо: натисніть ▶ щоб прослухати слово, потім оберіть переклад. Пробіл = повторити.', panel: '.quiz-panel' },
  'fib-overlay':     { text: '✏️ Речення: введіть пропущене слово в речення. Enter — підтвердити, 💡 — підказка.', panel: '.quiz-panel' },
  'tempo-overlay':   { text: '⚡ Темп: відповідайте якнайшвидше до кінця таймера. Клавіші 1–4 для вибору.', panel: '#tempo-panel' },
  'lesson-overlay':  { text: '📚 Урок: 3 фази — флешкарти, тест, письмо. Пройдіть всі 5 слів щоб завершити.', panel: '.quiz-panel' },
  'dc-overlay':      { text: '📅 Місія дня: 10 слів з таймером 2 хв. Бонусні XP за кожну правильну відповідь!', panel: '.page-inner' },
  'reading-overlay': { text: '📖 Читання: кольорові слова — невивчені. Натисніть на слово щоб побачити переклад.', panel: '.page-inner' },
};

function _getSeen(): Set<string> {
  try { return new Set(JSON.parse(localStorage.getItem(SEEN_KEY) ?? '[]') as string[]); }
  catch (e) { return new Set(); }
}
function _markSeen(id: string): void {
  const s = _getSeen(); s.add(id);
  try { localStorage.setItem(SEEN_KEY, JSON.stringify([...s])); } catch (e) {}
}

function _showHint(panelEl: HTMLElement, text: string): void {
  if (panelEl.querySelector('.mode-hint-banner')) return;
  const banner = document.createElement('div');
  banner.className = 'mode-hint-banner';
  banner.style.cssText = [
    'background:var(--accent)',
    'color:#fff',
    'font-size:.78rem',
    'line-height:1.45',
    'padding:8px 14px 8px 14px',
    'border-radius:0 0 10px 10px',
    'margin:-4px -4px 14px',
    'text-align:center',
    'opacity:1',
    'transition:opacity .4s ease',
    'flex-shrink:0',
  ].join(';');
  banner.textContent = text;
  panelEl.insertBefore(banner, panelEl.firstChild);
  setTimeout(() => {
    banner.style.opacity = '0';
    setTimeout(() => { try { banner.remove(); } catch (e) {} }, 450);
  }, 4500);
}

function _tryShow(overlayId: string): void {
  const seen = _getSeen();
  if (seen.has(overlayId)) return;
  const cfg = HINTS[overlayId];
  if (!cfg) return;
  const overlay = document.getElementById(overlayId);
  if (!overlay) return;

  // Check visibility: .page-overlay uses .open class; others use style.display
  const isVisible = overlay.classList.contains('open') || overlay.style.display === 'flex';
  if (!isVisible) return;

  _markSeen(overlayId);
  const panel = overlay.querySelector<HTMLElement>(cfg.panel);
  if (panel) setTimeout(() => _showHint(panel, cfg.text), 250);
}

function _watch(overlayId: string): void {
  const overlay = document.getElementById(overlayId);
  if (!overlay) return;
  new MutationObserver(() => _tryShow(overlayId))
    .observe(overlay, { attributes: true, attributeFilter: ['style', 'class'] });
}

Object.keys(HINTS).forEach(_watch);
