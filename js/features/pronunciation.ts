// English Words App — js/features/pronunciation.ts
type SpeechRecognitionCtor = new () => SpeechRecognition;
const _w = window as Window & { SpeechRecognition?: SpeechRecognitionCtor; webkitSpeechRecognition?: SpeechRecognitionCtor };
const SR: SpeechRecognitionCtor | null = _w.SpeechRecognition ?? _w.webkitSpeechRecognition ?? null;

let _rec: SpeechRecognition | null = null;
let _isListening = false;

export function isPronuncSupported(): boolean { return !!SR; }

function _similarity(a: string, b: string): number {
  a = a.toLowerCase().trim(); b = b.toLowerCase().trim();
  if (a === b) return 1;
  const len = Math.max(a.length, b.length);
  if (!len) return 1;
  let dist = 0;
  for (let i = 0; i < len; i++) { if (a[i] !== b[i]) dist++; }
  return Math.max(0, 1 - dist / len);
}

function _stop(btn: HTMLElement | null): void {
  _isListening = false;
  if (btn) { btn.classList.remove('on'); btn.textContent = '🎤'; }
  if (_rec) { try { _rec.abort(); } catch (e) {} _rec = null; }
}

export function startPronunciationCheck(
  targetWord: string,
  btn: HTMLElement | null,
  onResult: (status: string, score: number, spoken?: string, target?: string) => void
): void {
  if (!SR) { onResult('unsupported', 0); return; }
  if (_isListening) { stopPronunciationCheck(); return; }
  _rec = new SR();
  _rec.lang = 'en-US'; _rec.interimResults = false; _rec.maxAlternatives = 3;
  if (btn) { btn.classList.add('on'); btn.textContent = '🔴'; }
  _isListening = true;
  _rec.onresult = (e: SpeechRecognitionEvent) => {
    const spoken = Array.from(e.results[0]).map(r => r.transcript)[0] ?? '';
    const score  = _similarity(targetWord, spoken);
    const status = score >= 0.85 ? 'perfect' : score >= 0.6 ? 'good' : score >= 0.4 ? 'okay' : 'try_again';
    onResult(status, score, spoken, targetWord);
  };
  _rec.onerror = () => { onResult('error', 0); _stop(btn); };
  _rec.onend   = () => _stop(btn);
  _rec.start();
}

export function stopPronunciationCheck(): void { _stop(null); }

let _pronToast: HTMLElement | null = null;
let _pronTimer: ReturnType<typeof setTimeout> | null = null;

function _getPronToast(): HTMLElement {
  if (!_pronToast) {
    _pronToast = document.createElement('div');
    _pronToast.id = '_pron-toast';
    _pronToast.style.cssText = [
      'position:fixed', 'top:50%', 'left:50%', 'transform:translate(-50%,-50%)',
      'z-index:99998', 'display:none', 'flex-direction:column', 'align-items:center',
      'gap:3px', 'padding:10px 18px', 'border-radius:14px',
      'box-shadow:0 4px 18px rgba(0,0,0,.25)',
      'font-family:var(--font,sans-serif)',
      'pointer-events:none', 'transition:opacity .3s',
      'min-width:160px', 'max-width:280px', 'text-align:center',
    ].join(';');
    document.body.appendChild(_pronToast);
  }
  return _pronToast;
}

export function showPronuncResult(
  status: string, score: number, spoken: string, target: string
): void {
  const msgs: Record<string, [string, string, string, string]> = {
    perfect:     ['🏆', 'Ідеально!',        'Вимова як у носія',            '#27ae60'],
    good:        ['✅', 'Добре!',            'Майже ідеально',               '#2980b9'],
    okay:        ['👍', 'Непогано',          `Ти: "${spoken}"`,              '#e67e22'],
    try_again:   ['🔁', 'Спробуй знову',     `"${spoken ?? '?'}" → "${target}"`, '#e74c3c'],
    unsupported: ['🎤', 'Не підтримується',  'Спробуй Chrome',               '#888'],
    error:       ['⚠️', 'Помилка',           'Перевір мікрофон',             '#e74c3c'],
  };
  const [emoji, title, subtitle, color] = msgs[status] ?? msgs.error;
  const pct = Math.round(score * 100);

  const toast = _getPronToast();
  toast.style.background = color;
  toast.style.color = '#fff';
  toast.innerHTML = `
    <div style="font-size:1.5rem;line-height:1">${emoji}</div>
    <div style="font-size:.88rem;font-weight:700;margin-top:2px">${title}</div>
    <div style="font-size:.72rem;opacity:.88">${subtitle}</div>
    ${score > 0 ? `<div style="margin-top:6px;width:100%;background:rgba(255,255,255,.25);border-radius:4px;height:4px"><div style="width:${pct}%;height:100%;background:#fff;border-radius:4px"></div></div>` : ''}
  `;
  toast.style.display = 'flex';
  toast.style.opacity = '1';

  if (_pronTimer) clearTimeout(_pronTimer);
  _pronTimer = setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => { toast.style.display = 'none'; }, 350);
  }, 3000);
}
