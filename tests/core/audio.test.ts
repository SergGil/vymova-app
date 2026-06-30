import { describe, it, expect, vi, beforeEach } from 'vitest';
import { playSound } from '../../js/core/audio.ts';

class MockGainNode {
  gain = {
    setValueAtTime: vi.fn(),
    exponentialRampToValueAtTime: vi.fn(),
  };
  connect = vi.fn();
}

class MockOscillatorNode {
  frequency = { setValueAtTime: vi.fn(), value: 0 };
  type = '';
  connect = vi.fn();
  start = vi.fn();
  stop = vi.fn();
}

class MockAudioContext {
  currentTime = 0;
  destination = {};
  createOscillator(): MockOscillatorNode {
    return new MockOscillatorNode();
  }
  createGain(): MockGainNode {
    return new MockGainNode();
  }
}

describe('audio.ts playSound()', () => {
  beforeEach(() => {
    (window as any).AudioContext = undefined;
    (window as any).webkitAudioContext = undefined;
  });

  it('does nothing when AudioContext is unavailable', () => {
    expect(() => playSound('know')).not.toThrow();
  });

  it('plays the "know" sound when AudioContext is available', () => {
    (window as any).AudioContext = MockAudioContext;
    expect(() => playSound('know')).not.toThrow();
  });

  it('plays the "next" sound', () => {
    (window as any).AudioContext = MockAudioContext;
    expect(() => playSound('next')).not.toThrow();
  });

  it('plays the "combo" sound (multiple oscillators)', () => {
    (window as any).AudioContext = MockAudioContext;
    expect(() => playSound('combo')).not.toThrow();
  });

  it('plays the "goal" sound (multiple oscillators)', () => {
    (window as any).AudioContext = MockAudioContext;
    expect(() => playSound('goal')).not.toThrow();
  });

  it('ignores unknown sound types', () => {
    (window as any).AudioContext = MockAudioContext;
    expect(() => playSound('unknown-type')).not.toThrow();
  });

  it('falls back to webkitAudioContext when AudioContext is missing', () => {
    (window as any).webkitAudioContext = MockAudioContext;
    expect(() => playSound('know')).not.toThrow();
  });

  it('swallows errors thrown while creating nodes', () => {
    class ThrowingContext {
      createOscillator() {
        throw new Error('boom');
      }
      createGain() {
        return new MockGainNode();
      }
    }
    (window as any).AudioContext = ThrowingContext;
    expect(() => playSound('know')).not.toThrow();
  });
});
