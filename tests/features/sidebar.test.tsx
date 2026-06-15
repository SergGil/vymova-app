import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { state } from '../../src/state.ts';
import { SidebarInit, openPage, closePage, showImgClearConfirm } from '../../js/features/sidebar.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const { refreshAchievementsPage, renderDuel, openGrammarContent, openIdiomsContent, renderVoices, updateNotifUI, refreshCloudSyncUI } = vi.hoisted(() => ({
  refreshAchievementsPage: vi.fn(),
  renderDuel: vi.fn(),
  openGrammarContent: vi.fn(),
  openIdiomsContent: vi.fn(),
  renderVoices: vi.fn(),
  updateNotifUI: vi.fn(),
  refreshCloudSyncUI: vi.fn(),
}));
vi.mock('../../js/features/achievements-page.tsx', () => ({ refreshAchievementsPage }));
vi.mock('../../js/features/duel.ts', () => ({ renderDuel }));
vi.mock('../../js/features/grammar-page.tsx', () => ({ openGrammarContent }));
vi.mock('../../js/features/idioms-page.tsx', () => ({ openIdiomsContent }));
vi.mock('../../js/features/voice.tsx', () => ({ _renderVoices: renderVoices }));
vi.mock('../../js/features/notifications.tsx', () => ({ _updateUI: updateNotifUI }));
vi.mock('../../js/features/cloud-sync.tsx', () => ({ _refreshCloudSyncUI: refreshCloudSyncUI }));

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => { root.render(<SidebarInit />); });
  return { container, root };
}

async function wait(ms: number): Promise<void> {
  await act(async () => { await new Promise(r => setTimeout(r, ms)); });
}

describe('sidebar.tsx', () => {
  let roots: Root[] = [];

  beforeEach(() => {
    document.body.innerHTML = `
      <button id="hamburger"></button>
      <div id="sidebar"></div>
      <div id="sidebar-overlay"></div>
      <button id="sb-cards"></button>
      <button id="sb-home"></button>
      <button id="sb-stats" class="sb-active"></button>
      <button id="sb-achievements"></button>
      <button id="sb-modes"></button>
      <button id="sb-settings"></button>
      <button id="sb-duel"></button>
      <button id="sb-grammar"></button>
      <button id="sb-idioms"></button>
      <button id="sb-learning-path"></button>
      <div id="stats-overlay"></div>
      <div id="ach-overlay"></div>
      <div id="modes-overlay"></div>
      <div id="settings-overlay"></div>
      <div id="duel-overlay"></div>
      <div id="grammar-overlay"></div>
      <div id="idioms-overlay"></div>
      <div id="lp-overlay"></div>
      <button id="btn-stats"></button>
      <button id="stats-close"></button>
      <button id="modes-close"></button>
      <button id="set-theme"></button>
      <button id="set-sw"></button>
      <button id="title-sw-toggle"></button>
      <button id="btn-theme"></button>
      <button id="btn-sw"></button>
      <span id="set-theme-pill"></span>
      <span id="set-sw-pill"></span>
      <div id="img-clear-overlay"></div>
      <button id="img-clear-cancel"></button>
      <button id="img-clear-confirm"></button>
    `;
    document.body.classList.remove('dark', 'sw');
    state.activePage = null;
    localStorage.clear();
    roots = [];
    refreshAchievementsPage.mockClear();
    renderDuel.mockClear();
    openGrammarContent.mockClear();
    openIdiomsContent.mockClear();
    renderVoices.mockClear();
    updateNotifUI.mockClear();
    refreshCloudSyncUI.mockClear();
  });

  afterEach(() => {
    roots.forEach(r => { act(() => { r.unmount(); }); });
    closePage();
  });

  it('renders nothing', () => {
    const { container, root } = mount();
    roots.push(root);
    expect(container.innerHTML).toBe('');
  });

  it('toggles the sidebar open/closed via the hamburger button', () => {
    const { root } = mount();
    roots.push(root);
    const sidebar = document.getElementById('sidebar')!;
    const overlay = document.getElementById('sidebar-overlay')!;

    act(() => { document.getElementById('hamburger')!.dispatchEvent(new MouseEvent('click', { bubbles: true })); });
    expect(sidebar.classList.contains('open')).toBe(true);
    expect(overlay.classList.contains('open')).toBe(true);

    act(() => { overlay.dispatchEvent(new MouseEvent('click', { bubbles: true })); });
    expect(sidebar.classList.contains('open')).toBe(false);
    expect(overlay.classList.contains('open')).toBe(false);
  });

  it('openPage("stats") activates the stats overlay and sidebar item', () => {
    const { root } = mount();
    roots.push(root);
    let statsClicked = false;
    document.getElementById('btn-stats')!.addEventListener('click', () => { statsClicked = true; });

    act(() => { openPage('stats'); });

    expect(state.activePage).toBe('stats');
    expect(document.getElementById('sb-stats')!.classList.contains('sb-active')).toBe(true);
    expect(document.body.style.overflow).toBe('hidden');
    expect(document.getElementById('stats-overlay')!.classList.contains('as-page')).toBe(true);
    expect(statsClicked).toBe(true);
    expect(localStorage.getItem('ew_active_page')).toBe('stats');
  });

  it('openPage("ach") opens the achievements overlay and refreshes the page', () => {
    const { root } = mount();
    roots.push(root);
    act(() => { openPage('ach'); });

    expect(document.getElementById('ach-overlay')!.classList.contains('open')).toBe(true);
    expect(refreshAchievementsPage).toHaveBeenCalled();
  });

  it('openPage("settings") opens settings and refreshes related UIs', () => {
    const { root } = mount();
    roots.push(root);
    act(() => { openPage('settings'); });

    expect(document.getElementById('settings-overlay')!.classList.contains('open')).toBe(true);
    expect(renderVoices).toHaveBeenCalled();
    expect(updateNotifUI).toHaveBeenCalled();
    expect(refreshCloudSyncUI).toHaveBeenCalled();
  });

  it('openPage("duel"/"grammar"/"idioms") opens overlays and renders content', () => {
    const { root } = mount();
    roots.push(root);

    act(() => { openPage('duel'); });
    expect(document.getElementById('duel-overlay')!.classList.contains('open')).toBe(true);
    expect(renderDuel).toHaveBeenCalled();

    act(() => { openPage('grammar'); });
    expect(document.getElementById('grammar-overlay')!.classList.contains('open')).toBe(true);
    expect(openGrammarContent).toHaveBeenCalled();

    act(() => { openPage('idioms'); });
    expect(document.getElementById('idioms-overlay')!.classList.contains('open')).toBe(true);
    expect(openIdiomsContent).toHaveBeenCalled();
  });

  it('closePage clears active page state and closes overlays', () => {
    const { root } = mount();
    roots.push(root);
    act(() => { openPage('ach'); });
    expect(state.activePage).toBe('ach');

    act(() => { closePage(); });
    expect(state.activePage).toBeNull();
    expect(document.getElementById('ach-overlay')!.classList.contains('open')).toBe(false);
    expect(document.body.style.overflow).toBe('');
    expect(localStorage.getItem('ew_active_page')).toBeNull();
  });

  it('sidebar nav buttons open the corresponding page', () => {
    const { root } = mount();
    roots.push(root);
    act(() => { document.getElementById('sb-achievements')!.dispatchEvent(new MouseEvent('click', { bubbles: true })); });
    expect(state.activePage).toBe('ach');

    act(() => { document.getElementById('sb-cards')!.dispatchEvent(new MouseEvent('click', { bubbles: true })); });
    expect(state.activePage).toBeNull();
  });

  it('shows and resolves the image-clear confirm dialog', () => {
    const { root } = mount();
    roots.push(root);
    const cb = vi.fn();
    showImgClearConfirm(cb);
    const overlay = document.getElementById('img-clear-overlay')!;
    expect(overlay.classList.contains('open')).toBe(true);

    act(() => { document.getElementById('img-clear-confirm')!.dispatchEvent(new MouseEvent('click', { bubbles: true })); });
    expect(cb).toHaveBeenCalled();
    expect(overlay.classList.contains('open')).toBe(false);
  });

  it('cancelling the image-clear confirm does not call the callback', () => {
    const { root } = mount();
    roots.push(root);
    const cb = vi.fn();
    showImgClearConfirm(cb);

    act(() => { document.getElementById('img-clear-cancel')!.dispatchEvent(new MouseEvent('click', { bubbles: true })); });
    expect(cb).not.toHaveBeenCalled();
    expect(document.getElementById('img-clear-overlay')!.classList.contains('open')).toBe(false);
  });

  it('toggles the theme pill when the theme toggle is clicked', async () => {
    const { root } = mount();
    roots.push(root);
    let themeClicked = false;
    document.getElementById('btn-theme')!.addEventListener('click', () => {
      themeClicked = true;
      localStorage.setItem('ew_theme', 'dark');
    });

    act(() => { document.getElementById('set-theme')!.dispatchEvent(new MouseEvent('click', { bubbles: true })); });
    expect(themeClicked).toBe(true);

    await wait(60);
    expect(document.getElementById('set-theme-pill')!.classList.contains('on')).toBe(true);
  });

  it('restores the last open page from localStorage on mount', async () => {
    localStorage.setItem('ew_active_page', 'idioms');
    const { root } = mount();
    roots.push(root);

    await wait(10);
    expect(document.getElementById('idioms-overlay')!.classList.contains('open')).toBe(true);
    expect(openIdiomsContent).toHaveBeenCalled();
  });

  it('removes listeners on unmount', () => {
    const { root } = mount();
    act(() => { root.unmount(); });

    refreshAchievementsPage.mockClear();
    act(() => { document.getElementById('sb-achievements')!.dispatchEvent(new MouseEvent('click', { bubbles: true })); });
    expect(refreshAchievementsPage).not.toHaveBeenCalled();
  });
});
