// English Words App — js/core/ui-helpers.ts
// Shared UI utilities used across modes
import { t } from '../features/i18n.ts';
import { speak, _speakWithLang } from '../features/speech.ts';

export function speakBtn(text: string, lang = 'en-US'): HTMLButtonElement {
  const btn = document.createElement('button');
  btn.className = 'mode-speak'; btn.title = t('common.listen'); btn.textContent = '🔊';
  btn.addEventListener('click', (e: MouseEvent) => {
    e.stopPropagation();
    if (lang.startsWith('uk')) {
      _speakWithLang(text, lang, btn);
    } else {
      speak(text, btn);
    }
  });
  return btn;
}

export function decodeIpa(raw: string): string {
  if (!raw) return '';
  const s = raw.replace(/\\u([0-9a-fA-F]{4})/g, (_, code) => String.fromCharCode(parseInt(code, 16)));
  if (!s) return '';
  return (s[0] === '[' || s[0] === '/') ? s : '[' + s + ']';
}
