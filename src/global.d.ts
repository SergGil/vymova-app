/// <reference types="vite/client" />
// Global Window augmentation — allows window.anyProperty without TS errors
// for legacy @ts-nocheck migration period
declare global {
  interface Window {
    [key: string]: unknown;
    SpeechRecognition?: new () => SpeechRecognition;
    webkitSpeechRecognition?: new () => SpeechRecognition;
  }

  // SpeechRecognition API (not in all TS DOM versions)
  interface SpeechRecognition extends EventTarget {
    lang: string;
    interimResults: boolean;
    maxAlternatives: number;
    onresult: ((e: SpeechRecognitionEvent) => void) | null;
    onerror: ((e: Event) => void) | null;
    onend: (() => void) | null;
    start(): void;
    abort(): void;
  }
  interface SpeechRecognitionEvent extends Event {
    results: SpeechRecognitionResultList;
  }
}

export {};
