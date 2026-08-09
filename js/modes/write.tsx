// Vymova — js/modes/write.tsx
// ✍️ WRITE MODE
import { useEffect, useRef, useState, type ReactElement } from 'react';
import { _shuf, orderDeckPool } from '../core/srs.ts';
import { lev } from '../core/distance.ts';
import { getDeckSnapshot } from '../../src/deck-store.ts';
import { W } from '../../data/words-data/words.js';
import { addCombo, breakCombo, awardXP } from '../features/game/combo.ts';
import { recordMistake, recordModeAnswer } from '../features/game/game.ts';
import { t } from '../features/i18n.ts';
import { playSound } from '../core/audio.ts';
import { entryFor, type Code } from '../features/mode/mode-utils.ts';
import { getKnowLang, getLearnLang } from '../features/lang-pair-select.tsx';
import { speakForCode } from '../features/voice/speak-lang.ts';
import { ModeFinalScreen } from '../features/mode/mode-final-screen.tsx';
import { useModeSession } from '../features/mode/use-mode-session.ts';
import type { WordEntry } from '../../src/types.js';
import { Progress as ProgressPrimitive } from '@base-ui/react/progress';
import { ProgressTrack, ProgressIndicator } from '../../src/components/ui/progress.tsx';
import { Combobox as ComboboxPrimitive } from '@base-ui/react';
import { ComboboxContent, ComboboxList, ComboboxItem } from '../../src/components/ui/combobox.tsx';

const SIZE = 10;

type SpeechRecognitionCtor = new () => SpeechRecognitionInstance;
interface SpeechRecognitionInstance extends EventTarget {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  start(): void;
  stop(): void;
  abort(): void;
  onresult: ((e: SpeechRecognitionEvent) => void) | null;
  onerror: ((e: Event) => void) | null;
  onend: (() => void) | null;
}
interface SpeechRecognitionEvent extends Event {
  results: { [i: number]: { [i: number]: { transcript: string } }; length: number };
}

const SpeechRec: SpeechRecognitionCtor | undefined =
  (
    window as Window & {
      SpeechRecognition?: SpeechRecognitionCtor;
      webkitSpeechRecognition?: SpeechRecognitionCtor;
    }
  ).SpeechRecognition ??
  (window as Window & { webkitSpeechRecognition?: SpeechRecognitionCtor }).webkitSpeechRecognition;

function getLangSentence(w: WordEntry, lang: string): string {
  return entryFor(lang as Code, w).ex;
}

function isCorrect(inp: string, raw: string): boolean {
  const a = inp.trim().toLowerCase();
  if (!a) return false;
  const variants = raw
    .split(/[;,/]/)
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
  return variants.some((v) => a === v || (v.length > 3 && lev(a, v) <= 1));
}

function build(src?: WordEntry[] | null): WordEntry[] {
  if (src?.length) {
    return _shuf(src.slice() as unknown as WordEntry[]).slice(0, Math.min(SIZE, src.length));
  }
  const base = (getDeckSnapshot().length
    ? getDeckSnapshot().slice()
    : W.slice()) as unknown as WordEntry[];
  const pool = orderDeckPool(base);
  return pool.slice(0, Math.min(SIZE, pool.length));
}

let _open: ((src?: WordEntry[] | null) => void) | null = null;
let _close: (() => void) | null = null;

export function openWrite(src?: WordEntry[] | null): void {
  _open?.(src);
}
function closeWrite(): void {
  _close?.();
}

export function WritePage(): ReactElement {
  const [deck, setDeck] = useState<WordEntry[]>([]);
  const [idx, setIdx] = useState(0);
  const [ok, setOk] = useState(0);
  const [fail, setFail] = useState(0);
  const [wrong, setWrong] = useState<WordEntry[]>([]);
  const [input, setInput] = useState('');
  const [answered, setAnswered] = useState(false);
  const [borderColor, setBorderColor] = useState('var(--border)');
  const [result, setResult] = useState<{ text: string; color: string } | null>(null);
  const [hint, setHint] = useState('');
  const [acItems, setAcItems] = useState<WordEntry[]>([]);
  const [micActive, setMicActive] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const acTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const recogRef = useRef<SpeechRecognitionInstance | null>(null);
  // Tracks whether an autocomplete item is currently keyboard/pointer-
  // highlighted, so the Input's own onKeyDown can tell "Enter confirms the
  // highlighted suggestion" (handled by Combobox's own onValueChange)
  // apart from "Enter submits the answer" (nothing highlighted — this
  // component's own concern, not Combobox's).
  const highlightedRef = useRef<WordEntry | null>(null);

  const w: WordEntry | null = deck[idx] ?? null;
  const knowLang = getKnowLang();
  const learnLang = getLearnLang();
  const frontWord = w ? entryFor(knowLang, w).word : '';
  const backWord = w ? entryFor(learnLang, w).word : '';
  const frontSentence = w ? getLangSentence(w, knowLang) : '';
  const frontLang = knowLang;
  const backLang = learnLang;
  const showFinal = deck.length > 0 && idx >= deck.length;

  const acHide = (): void => {
    setAcItems([]);
    highlightedRef.current = null;
  };

  const resetQ = (): void => {
    setInput('');
    setBorderColor('var(--border)');
    setResult(null);
    setHint('');
    setAnswered(false);
    acHide();
  };

  const startGame = (src?: WordEntry[] | null): void => {
    setDeck(build(src));
    setIdx(0);
    setOk(0);
    setFail(0);
    setWrong([]);
    resetQ();
  };

  const session = useModeSession<WordEntry[] | null | undefined>({
    overlayId: 'write-overlay',
    modeId: 'write',
    isFinal: showFinal,
    onOpen: (src) => startGame(src),
    onClose: acHide,
    closeOnEscape: false,
    bindExternal: (open, close) => {
      _open = open;
      _close = close;
      return () => {
        _open = null;
        _close = null;
      };
    },
  });
  const { isOpen } = session;

  // Focus input on new question
  useEffect(() => {
    if (!isOpen || !w) return;
    const tmr = setTimeout(() => {
      try {
        inputRef.current?.focus();
      } catch (e) {}
    }, 60);
    return () => clearTimeout(tmr);
  }, [isOpen, idx, w]);

  // overrideInput lets startMic()'s recog.onend pass the just-recognized
  // transcript directly instead of relying on the `submit` closure it
  // captured back when startMic() was first called — that closure's own
  // `input` was still the pre-recognition value (typically empty), so every
  // voice answer was silently graded against '' regardless of what the
  // input box displayed.
  const submit = (overrideInput?: string): void => {
    if (answered || !w) return;
    acHide();
    const ans = backWord;
    const correct = isCorrect(overrideInput ?? input, ans);
    setAnswered(true);
    if (correct) {
      setOk((o) => o + 1);
      setBorderColor('var(--success)');
      setResult({ text: t('quiz.correctMsg'), color: 'var(--success)' });
      try {
        playSound('know');
        addCombo();
        awardXP(5);
      } catch (e) {}
      recordModeAnswer('write', true);
    } else {
      setFail((f) => f + 1);
      setWrong((ws) => [...ws, w]);
      setBorderColor('var(--danger)');
      const shown = ans.split(/[;,/]/)[0].trim();
      setResult({
        text: `✗ ${t('write.correctAnswerPrefix')} <b>${shown}</b>`,
        color: 'var(--danger)',
      });
      try {
        breakCombo();
        playSound('next');
      } catch (e) {}
      recordMistake(w[0]);
      recordModeAnswer('write', false);
    }
    setTimeout(() => {
      try {
        nextRef.current?.focus();
      } catch (e) {}
    }, 0);
  };

  const advanceQ = (): void => {
    setIdx((i) => i + 1);
    resetQ();
  };

  const onInputChange = (val: string): void => {
    setInput(val);
    if (acTimerRef.current) clearTimeout(acTimerRef.current);
    const q = val.trim().toLowerCase();
    if (!q || q.length < 2 || answered) {
      acHide();
      return;
    }
    acTimerRef.current = setTimeout(() => {
      if (backLang === 'en') {
        setAcItems(
          (W as unknown as WordEntry[])
            .filter((ww) => ww[0].toLowerCase().startsWith(q))
            .slice(0, 6),
        );
      } else {
        setAcItems([]);
      }
      highlightedRef.current = null;
    }, 120);
  };

  // Fires when a suggestion is confirmed (click or Enter-while-highlighted,
  // both funnel through Combobox's onValueChange) — mirrors the old
  // pickAc(i)'s effect exactly: fill the input, close the list, refocus.
  const pickAc = (item: WordEntry | null): void => {
    if (!item) return;
    setInput(item[0]);
    acHide();
    try {
      inputRef.current?.focus();
    } catch (e) {}
  };

  // Only "Enter with nothing highlighted" is this component's own concern
  // now — Combobox's Input handles ArrowUp/Down navigation, Escape (closing
  // just the list, via `open`/`onOpenChange` below), and Enter-while-
  // highlighted (via onValueChange -> pickAc) internally.
  const onInputKeydown = (e: KeyboardEvent | { key: string; preventDefault: () => void }): void => {
    const ev = e as KeyboardEvent;
    if (ev.key === 'Enter' && !highlightedRef.current) {
      if (!answered) {
        acHide();
        submit();
      } else {
        acHide();
        advanceQ();
      }
    }
  };

  const showHint = (): void => {
    if (answered || !w) return;
    const first = backWord.split(/[;,/]/)[0].trim();
    setHint('💡 ' + first.slice(0, Math.ceil(first.length / 3)) + '...');
  };

  const startMic = (): void => {
    if (!SpeechRec || answered) return;
    if (micActive) {
      recogRef.current?.stop();
      return;
    }
    const recog = new SpeechRec();
    recog.lang = 'en-US';
    recog.continuous = false;
    recog.interimResults = false;
    recogRef.current = recog;
    setMicActive(true);
    recog.onresult = (e: SpeechRecognitionEvent) => {
      const text = e.results[0][0].transcript
        .trim()
        .toLowerCase()
        .replace(/[.,!?]/g, '');
      onInputChange(text);
    };
    recog.onerror = () => setMicActive(false);
    recog.onend = () => {
      setMicActive(false);
      setInput((curr) => {
        if (curr.trim()) setTimeout(() => submit(curr), 0);
        return curr;
      });
    };
    recog.start();
  };

  // Keyboard shortcuts
  useEffect(() => {
    function onKeydown(e: KeyboardEvent): void {
      const overlay = document.getElementById('write-overlay');
      if (overlay?.style.display !== 'flex') return;
      if (e.key === 'Escape' && acItems.length) {
        acHide();
        return;
      }
      if (e.key === 'Escape') {
        closeWrite();
        return;
      }
      if (
        (e.key === 'ArrowRight' || e.key === ' ') &&
        answered &&
        document.activeElement !== inputRef.current
      ) {
        e.preventDefault();
        advanceQ();
      }
    }
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answered, acItems]);

  if (!isOpen) return <></>;

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 16,
        }}
      >
        <div>
          <div
            style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)' }}
            data-i18n="write.title"
          >
            {t('write.title')}
          </div>
          <div style={{ fontSize: '.75rem', color: 'var(--text3)', marginTop: 2 }}>
            {!showFinal && w
              ? `${t('quiz.question')} ${idx + 1} ${t('common.of')} ${deck.length}`
              : showFinal
                ? t('write.completed')
                : ''}
          </div>
        </div>
        <button
          onClick={closeWrite}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '1.3rem',
            cursor: 'pointer',
            color: 'var(--text3)',
          }}
          aria-label={t('common.close')}
        >
          ✕
        </button>
      </div>

      <ProgressPrimitive.Root
        value={showFinal ? 100 : deck.length ? (idx / deck.length) * 100 : 0}
        style={{ marginBottom: 18 }}
      >
        <ProgressTrack style={{ height: 4, background: 'var(--border)', borderRadius: 4 }}>
          <ProgressIndicator
            style={{ background: 'var(--accent)', borderRadius: 4, transition: 'width .4s' }}
          />
        </ProgressTrack>
      </ProgressPrimitive.Root>

      {!showFinal && w && (
        <>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginBottom: 16 }}>
            <span style={{ fontSize: '.82rem', color: 'var(--success)', fontWeight: 600 }}>
              ✓ {ok}
            </span>
            <span style={{ fontSize: '.82rem', color: 'var(--danger)', fontWeight: 600 }}>
              ✗ {fail}
            </span>
          </div>

          <div
            style={{
              background: 'var(--bg)',
              borderRadius: 14,
              padding: '20px 16px',
              textAlign: 'center',
              marginBottom: 14,
            }}
          >
            <div
              style={{
                fontSize: '.65rem',
                fontWeight: 700,
                letterSpacing: '.1em',
                textTransform: 'uppercase',
                color: 'var(--text3)',
                marginBottom: 8,
              }}
            >
              {t(`lang.${frontLang}` as any)} → {t(`lang.${backLang}` as any)}
            </div>
            <div
              style={{
                fontFamily: "'DM Serif Display',serif",
                fontSize: '2rem',
                color: 'var(--text)',
                lineHeight: 1.15,
              }}
            >
              {frontWord}
              <button
                className="mode-speak ml-2 inline-flex h-[30px] w-[30px] shrink-0 cursor-pointer items-center justify-center rounded-md border-none bg-white/7 align-middle text-[.9rem] text-[var(--text3)] transition-all duration-150 hover:bg-white/15 hover:text-[var(--accent)] [&.on]:!bg-[rgba(78,204,163,0.15)] [&.on]:text-[var(--accent)] [@media(max-width:480px)]:p-[5px_8px] [@media(max-width:480px)]:text-[16px] [@media(max-width:480px)]:min-h-[36px]"
                title={t('common.listen')}
                onClick={(e) => {
                  e.stopPropagation();
                  speakForCode(knowLang, frontWord, frontWord, e.currentTarget);
                }}
              >
                🔊
              </button>
            </div>
            {frontSentence && (
              <div
                style={{
                  fontSize: '.82rem',
                  color: 'var(--accent2)',
                  marginTop: 6,
                  fontStyle: 'italic',
                  lineHeight: 1.4,
                }}
              >
                {frontSentence}
                <button
                  className="mode-speak ml-2 inline-flex h-[30px] w-[30px] shrink-0 cursor-pointer items-center justify-center rounded-md border-none bg-white/7 align-middle text-[.9rem] text-[var(--text3)] transition-all duration-150 hover:bg-white/15 hover:text-[var(--accent)] [&.on]:!bg-[rgba(78,204,163,0.15)] [&.on]:text-[var(--accent)] [@media(max-width:480px)]:p-[5px_8px] [@media(max-width:480px)]:text-[16px] [@media(max-width:480px)]:min-h-[36px]"
                  title={t('common.listen')}
                  onClick={(e) => {
                    e.stopPropagation();
                    speakForCode(knowLang, frontSentence, frontSentence, e.currentTarget);
                  }}
                >
                  🔊
                </button>
              </div>
            )}
          </div>

          <div style={{ position: 'relative', marginBottom: 10 }}>
            <ComboboxPrimitive.Root<WordEntry>
              items={acItems}
              filter={null}
              itemToStringLabel={(w) => w[0]}
              inputValue={input}
              onInputValueChange={(val) => onInputChange(val)}
              open={acItems.length > 0}
              onOpenChange={(v) => {
                if (!v) acHide();
              }}
              onItemHighlighted={(item, details) => {
                highlightedRef.current = item ?? null;
                // Only keyboard arrow-navigation previews into the input —
                // mouse hover must not (matches the old acIdx-driven
                // behavior, which only ever ran from onInputKeydown).
                if (item && details.reason === 'keyboard') setInput(item[0]);
              }}
              onValueChange={(item) => pickAc(item)}
            >
              <ComboboxPrimitive.Input
                ref={inputRef}
                type="text"
                autoComplete="off"
                spellCheck={false}
                placeholder={
                  backLang === 'en'
                    ? t('write.placeholder')
                    : t('write.placeholder')
                        .replace(/англійськ\S+/gi, t(`lang.${backLang}` as any))
                        .replace(/english\S*/gi, t(`lang.${backLang}` as any))
                }
                onKeyDown={onInputKeydown}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: `2px solid ${borderColor}`,
                  borderRadius: 12,
                  fontSize: '1rem',
                  fontFamily: "'DM Sans',sans-serif",
                  background: 'var(--bg)',
                  color: 'var(--text)',
                  outline: 'none',
                  boxSizing: 'border-box',
                  transition: 'border-color .2s',
                }}
              />
              <ComboboxContent
                className="write-ac z-[99999] rounded-b-[12px] rounded-t-none border-[1.5px] border-t-0 border-[var(--accent)] bg-[var(--card)] shadow-[0_8px_20px_rgba(0,0,0,.15)]"
              >
                <ComboboxList>
                  {(aw: WordEntry, i: number) => (
                    <ComboboxItem
                      key={aw[0]}
                      value={aw}
                      className="wac-item flex cursor-default items-center justify-between gap-2 rounded-none border-b border-b-[var(--border)] px-4 py-2 text-[.88rem] transition-[background] duration-100 last:border-b-0 hover:bg-[var(--wac-hover-bg)] data-highlighted:bg-[var(--wac-hover-bg)]"
                    >
                      <span className="wac-word font-semibold text-[var(--text)]">{aw[0]}</span>
                      <span className="wac-ua text-[.78rem] text-[var(--text2)]">{aw[1]}</span>
                      <span className="wac-n shrink-0 rounded-[4px] bg-[var(--border)] px-[5px] py-px text-[.65rem] text-[var(--text3)]">
                        {i + 1}
                      </span>
                    </ComboboxItem>
                  )}
                </ComboboxList>
              </ComboboxContent>
            </ComboboxPrimitive.Root>
          </div>

          <div
            style={{
              fontSize: '.72rem',
              color: 'var(--text3)',
              marginBottom: 8,
              textAlign: 'center',
              minHeight: 16,
            }}
          >
            {hint}
          </div>
          <div
            style={{
              minHeight: 28,
              textAlign: 'center',
              fontSize: '.9rem',
              fontWeight: 600,
              marginBottom: 12,
            }}
          >
            {result && (
              <span
                style={{ color: result.color, fontSize: '1.05rem' }}
                dangerouslySetInnerHTML={{ __html: result.text }}
              />
            )}
          </div>

          <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
            {!answered && (
              <button
                onClick={() => submit()}
                style={{
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: '.9rem',
                  fontWeight: 600,
                  padding: '11px 32px',
                  borderRadius: 10,
                  border: 'none',
                  background: 'var(--accent)',
                  color: '#fff',
                  cursor: 'pointer',
                }}
                data-i18n="write.checkBtn"
              >
                {t('write.checkBtn')}
              </button>
            )}
            {answered && (
              <button
                ref={nextRef}
                onClick={advanceQ}
                style={{
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: '.9rem',
                  fontWeight: 600,
                  padding: '11px 32px',
                  borderRadius: 10,
                  border: 'none',
                  background: 'var(--accent)',
                  color: '#fff',
                  cursor: 'pointer',
                }}
                data-i18n="write.next"
              >
                {t('write.next')}
              </button>
            )}
            {SpeechRec && (
              <button
                onClick={startMic}
                title={t('write.micTitle')}
                data-i18n-title="write.micTitle"
                style={{
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: '.9rem',
                  padding: '11px 14px',
                  borderRadius: 10,
                  border: `1.5px solid ${micActive ? 'var(--danger)' : 'var(--border)'}`,
                  background: 'none',
                  color: micActive ? 'var(--danger)' : 'var(--text2)',
                  cursor: 'pointer',
                  transition: 'all .2s',
                }}
              >
                {micActive ? '🔴' : '🎤'}
              </button>
            )}
            <button
              onClick={showHint}
              style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: '.82rem',
                padding: '11px 18px',
                borderRadius: 10,
                border: '1.5px solid var(--border)',
                background: 'none',
                color: 'var(--text3)',
                cursor: 'pointer',
              }}
            >
              💡
            </button>
          </div>
        </>
      )}

      {showFinal && (
        <ModeFinalScreen
          ok={ok}
          total={deck.length}
          keepGoingKey="quiz.encourageTitle"
          onRetry={() => session.open(null)}
          onClose={closeWrite}
          extra={
            wrong.length > 0 ? (
              <button
                onClick={() => session.open(wrong)}
                style={{
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: '.88rem',
                  fontWeight: 600,
                  padding: '10px 22px',
                  borderRadius: 10,
                  border: '1.5px solid var(--accent2)',
                  background: 'none',
                  color: 'var(--accent2)',
                  cursor: 'pointer',
                }}
              >
                {t('write.mistakesBtn')} ({wrong.length})
              </button>
            ) : null
          }
        />
      )}
    </>
  );
}

import { bindOverlayOpenClose } from '../features/overlay-utils.ts';
bindOverlayOpenClose('btn-write', 'write-overlay', () => openWrite(null), closeWrite);
