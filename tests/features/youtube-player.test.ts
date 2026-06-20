import { describe, it, expect } from 'vitest';
import { parseYoutubeId } from '../../js/features/youtube-player.tsx';

describe('parseYoutubeId()', () => {
  it('extracts the id from a watch?v= URL', () => {
    expect(parseYoutubeId('https://www.youtube.com/watch?v=dQw4w9WgXcQ')).toBe('dQw4w9WgXcQ');
  });

  it('extracts the id from a watch?v= URL with extra params', () => {
    expect(parseYoutubeId('https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=30s&list=PL123')).toBe('dQw4w9WgXcQ');
  });

  it('extracts the id from a youtu.be short link', () => {
    expect(parseYoutubeId('https://youtu.be/dQw4w9WgXcQ')).toBe('dQw4w9WgXcQ');
  });

  it('extracts the id from a youtu.be short link with query params', () => {
    expect(parseYoutubeId('https://youtu.be/dQw4w9WgXcQ?t=10')).toBe('dQw4w9WgXcQ');
  });

  it('extracts the id from an /embed/ URL', () => {
    expect(parseYoutubeId('https://www.youtube.com/embed/dQw4w9WgXcQ')).toBe('dQw4w9WgXcQ');
  });

  it('extracts the id from a /shorts/ URL', () => {
    expect(parseYoutubeId('https://www.youtube.com/shorts/dQw4w9WgXcQ')).toBe('dQw4w9WgXcQ');
  });

  it('accepts a bare 11-char video id', () => {
    expect(parseYoutubeId('dQw4w9WgXcQ')).toBe('dQw4w9WgXcQ');
  });

  it('returns null for garbage input', () => {
    expect(parseYoutubeId('not a url at all')).toBeNull();
    expect(parseYoutubeId('https://example.com/video')).toBeNull();
    expect(parseYoutubeId('')).toBeNull();
  });

  it('returns null for a youtube.com URL with no recognizable video id', () => {
    expect(parseYoutubeId('https://www.youtube.com/feed/subscriptions')).toBeNull();
  });
});
