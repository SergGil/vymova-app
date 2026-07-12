import { describe, it, expect, beforeEach } from 'vitest';
import {
  getDuelChatSnapshot,
  setDuelChat,
  appendDuelChat,
  clearDuelChat,
  getDuelSpecRoomSnapshot,
  setDuelSpecRoom,
  getDuelTournViewSnapshot,
  setDuelTournView,
  getDuelResultSnapshot,
  setDuelResult,
  getDuelResumeSessionsSnapshot,
  setDuelResumeSessions,
} from '../../src/duel-async-store.ts';
import type {
  RoomData,
  DuelResultData,
  ResumeSessionVM,
  TournamentData,
} from '../../js/features/duel/duel-types.ts';

describe('duel-async-store.ts', () => {
  beforeEach(() => {
    clearDuelChat();
    setDuelSpecRoom(null);
    setDuelTournView(null);
    setDuelResult(null);
    setDuelResumeSessions([]);
  });

  describe('chat', () => {
    it('starts empty', () => {
      expect(getDuelChatSnapshot()).toEqual([]);
    });

    it('setDuelChat replaces the whole list', () => {
      setDuelChat([{ text: 'hi', isMe: true }]);
      expect(getDuelChatSnapshot()).toEqual([{ text: 'hi', isMe: true }]);
    });

    it('appendDuelChat adds to the end without dropping earlier messages', () => {
      setDuelChat([{ text: 'hi', isMe: true }]);
      appendDuelChat({ text: 'hey', isMe: false });
      expect(getDuelChatSnapshot()).toEqual([
        { text: 'hi', isMe: true },
        { text: 'hey', isMe: false },
      ]);
    });

    it('clearDuelChat empties the list', () => {
      setDuelChat([{ text: 'hi', isMe: true }]);
      clearDuelChat();
      expect(getDuelChatSnapshot()).toEqual([]);
    });
  });

  describe('spectator room snapshot', () => {
    it('starts null and round-trips a room value', () => {
      expect(getDuelSpecRoomSnapshot()).toBeNull();
      const room = { seed: 1, mode: 'quiz' } as unknown as RoomData;
      setDuelSpecRoom(room);
      expect(getDuelSpecRoomSnapshot()).toBe(room);
      setDuelSpecRoom(null);
      expect(getDuelSpecRoomSnapshot()).toBeNull();
    });
  });

  describe('tournament view', () => {
    it('starts null and round-trips a value', () => {
      expect(getDuelTournViewSnapshot()).toBeNull();
      const view = { phase: 'waiting', code: 'ABCD' } as unknown as TournamentData;
      setDuelTournView(view);
      expect(getDuelTournViewSnapshot()).toBe(view);
    });
  });

  describe('result screen snapshot', () => {
    it('starts null and round-trips a value', () => {
      expect(getDuelResultSnapshot()).toBeNull();
      const result = { kind: 'round', outcome: 'win' } as unknown as DuelResultData;
      setDuelResult(result);
      expect(getDuelResultSnapshot()).toBe(result);
    });
  });

  describe('resume sessions list', () => {
    it('starts empty and round-trips a list', () => {
      expect(getDuelResumeSessionsSnapshot()).toEqual([]);
      const sessions = [{ roomId: 'r1', modeIcon: '🎯', modeLabel: 'Quiz' }] as unknown as ResumeSessionVM[];
      setDuelResumeSessions(sessions);
      expect(getDuelResumeSessionsSnapshot()).toBe(sessions);
    });
  });

  it('each domain is independently addressable (setting one leaves the others untouched)', () => {
    setDuelChat([{ text: 'hi', isMe: true }]);
    setDuelResult({ kind: 'round', outcome: 'win' } as unknown as DuelResultData);
    expect(getDuelSpecRoomSnapshot()).toBeNull();
    expect(getDuelTournViewSnapshot()).toBeNull();
    expect(getDuelResumeSessionsSnapshot()).toEqual([]);
  });
});
