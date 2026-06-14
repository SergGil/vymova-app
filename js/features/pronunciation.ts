// English Words App — js/features/pronunciation.ts
// Speech-recognition based pronunciation check.
// Result toast lives in pronunciation-toast.tsx (React).

type SpeechRecognitionCtor = new () => SpeechRecognition;
const _w = window as Window & { SpeechRecognition?: SpeechRecognitionCtor; webkitSpeechRecognition?: SpeechRecognitionCtor };
const SR: SpeechRecognitionCtor | null = _w.SpeechRecognition ?? _w.webkitSpeechRecognition ?? null;

let _rec: SpeechRecognition | null = null;
let _isListening = false;

export function isPronuncSupported(): boolean { return !!SR; }

function _levenshtein(a: string, b: string): number {
  const m = a.length, n = b.length;
  const dp: number[] = Array.from({ length: n + 1 }, (_, j) => j);
  for (let i = 1; i <= m; i++) {
    let prev = dp[0];
    dp[0] = i;
    for (let j = 1; j <= n; j++) {
      const tmp = dp[j];
      dp[j] = a[i - 1] === b[j - 1]
        ? prev
        : 1 + Math.min(prev, dp[j], dp[j - 1]);
      prev = tmp;
    }
  }
  return dp[n];
}

function _similarity(a: string, b: string): number {
  a = a.toLowerCase().trim(); b = b.toLowerCase().trim();
  if (a === b) return 1;
  const len = Math.max(a.length, b.length);
  if (!len) return 1;
  return Math.max(0, 1 - _levenshtein(a, b) / len);
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
