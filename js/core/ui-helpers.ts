// English Words App — js/core/ui-helpers.ts
// Shared UI utilities used across modes
export type SpeakFn = (text: string, btn: HTMLElement | null) => void;
export type SpeakLangFn = (text: string, lang: string, btn: HTMLElement | null) => void;

export function speakBtn(text: string, lang = 'en-US'): HTMLButtonElement {
  const btn = document.createElement('button');
  btn.className = 'mode-speak'; btn.title = 'Прослухати'; btn.textContent = '🔊';
  btn.addEventListener('click', (e: MouseEvent) => {
    e.stopPropagation();
    if (lang.startsWith('uk')) {
      (window as Window & { _speakWithLang?: SpeakLangFn })._speakWithLang?.(text, lang, btn);
    } else {
      (window.speak as SpeakFn | undefined)?.(text, btn);
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
