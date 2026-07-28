// Vymova — js/core/ui-helpers.ts
// Shared UI utilities used across modes
import { t } from '../features/i18n.ts';
import { speak, _speakWithLang } from '../features/voice/speech.ts';

export function speakBtn(text: string, lang = 'en-US'): HTMLButtonElement {
  const btn = document.createElement('button');
  btn.className =
    'mode-speak ml-2 inline-flex h-[30px] w-[30px] shrink-0 cursor-pointer items-center justify-center rounded-md border-none bg-white/7 align-middle text-[.9rem] text-[var(--text3)] transition-all duration-150 hover:bg-white/15 hover:text-[var(--accent)] [&.on]:!bg-[rgba(78,204,163,0.15)] [&.on]:text-[var(--accent)] max-[480px]:p-[5px_8px] max-[480px]:text-[16px] max-[480px]:min-h-[36px]';
  btn.title = t('common.listen');
  btn.textContent = '🔊';
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
  const s = raw.replace(/\\u([0-9a-fA-F]{4})/g, (_, code) =>
    String.fromCharCode(parseInt(code, 16)),
  );
  if (!s) return '';
  return s[0] === '[' || s[0] === '/' ? s : '[' + s + ']';
}
