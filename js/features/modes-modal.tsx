// Vymova — js/features/modes-modal.tsx
// The "choose a game mode" modal's public open trigger.
// full-react-migration-roadmap.md Phase 5b: the actual overlay (markup +
// visibility + close wiring) moved to modes-overlay-shell.tsx's
// <ModesOverlayShell/>, owned by the same <PageOverlayVisibility page="modes"
// .../> mechanism every other page uses — see that file's header comment for
// why the previous DOM-controller version here was redundant with (and
// occasionally clobbered) that reactive owner. openModesModal() keeps its
// existing public signature so any future caller doesn't need to know it's
// just openPage('modes') now.
import { openPage } from './sidebar.tsx';

export function openModesModal(): void {
  openPage('modes');
}
