import { describe, it, expect } from 'vitest';
import { parseSubtitles, findActiveCue } from '../../js/features/subtitle-parser.ts';

describe('parseSubtitles() — SRT', () => {
  const srt = `1
00:00:01,000 --> 00:00:04,500
Hello there.

2
00:00:05,000 --> 00:00:07,250
How are you today?
`;

  it('parses both cues with correct timing', () => {
    const cues = parseSubtitles(srt);
    expect(cues).toHaveLength(2);
    expect(cues[0]).toEqual({ start: 1, end: 4.5, text: 'Hello there.' });
    expect(cues[1]).toEqual({ start: 5, end: 7.25, text: 'How are you today?' });
  });

  it('joins multi-line cue text with a space', () => {
    const cues = parseSubtitles(`1\n00:00:00,000 --> 00:00:02,000\nLine one\nLine two\n`);
    expect(cues[0].text).toBe('Line one Line two');
  });
});

describe('parseSubtitles() — VTT', () => {
  const vtt = `WEBVTT

1
00:00:01.000 --> 00:00:04.500
Hello there.

00:01:05.000 --> 00:01:07.250
<i>How are you today?</i>
`;

  it('parses cues with dot millisecond separators and an hour-less timestamp', () => {
    const cues = parseSubtitles(vtt);
    expect(cues).toHaveLength(2);
    expect(cues[0]).toEqual({ start: 1, end: 4.5, text: 'Hello there.' });
    expect(cues[1].start).toBe(65);
    expect(cues[1].end).toBe(67.25);
  });

  it('strips HTML-ish tags', () => {
    const cues = parseSubtitles(vtt);
    expect(cues[1].text).toBe('How are you today?');
  });
});

describe('parseSubtitles() — markup and edge cases', () => {
  it('strips ASS-style override blocks', () => {
    const cues = parseSubtitles('00:00:00,000 --> 00:00:02,000\n{\\an8}Top text\n');
    expect(cues[0].text).toBe('Top text');
  });

  it('drops bracketed sound-effect-only lines but keeps mixed lines', () => {
    const cues = parseSubtitles('00:00:00,000 --> 00:00:02,000\n[MUSIC PLAYING]\n');
    expect(cues).toHaveLength(0);
  });

  it('returns an empty array for empty input', () => {
    expect(parseSubtitles('')).toEqual([]);
  });

  it('ignores malformed timestamp lines', () => {
    expect(parseSubtitles('not a timestamp --> also not\nSome text\n')).toEqual([]);
  });

  it('sorts cues by start time even if the file lists them out of order', () => {
    const raw = '00:00:10,000 --> 00:00:12,000\nSecond\n\n00:00:01,000 --> 00:00:03,000\nFirst\n';
    const cues = parseSubtitles(raw);
    expect(cues.map((c) => c.text)).toEqual(['First', 'Second']);
  });
});

describe('findActiveCue()', () => {
  const cues = [
    { start: 0, end: 2, text: 'A' },
    { start: 3, end: 5, text: 'B' },
  ];

  it('finds the cue containing the given time', () => {
    expect(findActiveCue(cues, 1)?.text).toBe('A');
    expect(findActiveCue(cues, 4)?.text).toBe('B');
  });

  it('returns null in a gap between cues', () => {
    expect(findActiveCue(cues, 2.5)).toBeNull();
  });

  it('returns null past the end of the last cue', () => {
    expect(findActiveCue(cues, 10)).toBeNull();
  });
});
