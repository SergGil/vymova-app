// Vymova — js/features/subtitle-parser.ts
// Pure .srt/.vtt → cue-list parser. No DOM access — safe to unit-test and
// safe to call before the video element even exists.
export interface Cue {
  start: number;
  end: number;
  text: string;
}

// "00:01:23,456" (SRT) or "00:01:23.456" (VTT) or "01:23.456" (VTT, no hours) → seconds.
function parseTimestamp(raw: string): number | null {
  const m = raw.trim().match(/^(?:(\d+):)?(\d{2}):(\d{2})[.,](\d{1,3})$/);
  if (!m) return null;
  const [, h, min, sec, ms] = m;
  const millis = ms.padEnd(3, '0');
  return (
    parseInt(h ?? '0', 10) * 3600 +
    parseInt(min, 10) * 60 +
    parseInt(sec, 10) +
    parseInt(millis, 10) / 1000
  );
}

// Strips basic subtitle markup: HTML-ish tags (<i>, <b>, <font ...>), ASS
// override blocks ({\an8} etc.), and bracketed sound-effect labels ([MUSIC]).
function cleanCueText(raw: string): string {
  return raw
    .replace(/<[^>]+>/g, '')
    .replace(/\{[^}]*\}/g, '')
    .replace(/^\s*\[[^\]]*\]\s*$/gm, '')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .join(' ')
    .trim();
}

const TIMESTAMP_LINE = /^\s*(\S+)\s*-->\s*(\S+)/;

export function parseSubtitles(raw: string): Cue[] {
  const lines = raw.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n');
  const cues: Cue[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const tsMatch = line.match(TIMESTAMP_LINE);
    if (!tsMatch) {
      i++;
      continue;
    }
    const start = parseTimestamp(tsMatch[1]);
    const end = parseTimestamp(tsMatch[2]);
    i++;
    const textLines: string[] = [];
    while (i < lines.length && lines[i].trim() !== '' && !TIMESTAMP_LINE.test(lines[i])) {
      textLines.push(lines[i]);
      i++;
    }
    if (start === null || end === null) continue;
    const text = cleanCueText(textLines.join('\n'));
    if (text) cues.push({ start, end, text });
  }
  return cues.sort((a, b) => a.start - b.start);
}

export function findActiveCue(cues: Cue[], timeSec: number): Cue | null {
  for (const cue of cues) {
    if (timeSec >= cue.start && timeSec <= cue.end) return cue;
  }
  return null;
}
