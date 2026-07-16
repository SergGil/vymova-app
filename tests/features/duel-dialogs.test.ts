import { describe, it, expect, beforeEach } from 'vitest';
import { _askCode } from '../../js/features/duel/duel-dialogs.ts';

function mountCodeInputDom(): void {
  document.body.innerHTML = `
    <div id="code-input-overlay" style="display:none">
      <span id="code-input-title"></span>
      <span id="code-input-desc"></span>
      <input id="code-input-field" />
      <button id="code-input-ok"></button>
      <button id="code-input-cancel"></button>
    </div>`;
}

function clickOk(): void {
  document.getElementById('code-input-ok')!.dispatchEvent(new MouseEvent('click', { bubbles: true }));
}
function clickCancel(): void {
  document
    .getElementById('code-input-cancel')!
    .dispatchEvent(new MouseEvent('click', { bubbles: true }));
}

describe('_askCode()', () => {
  beforeEach(() => {
    mountCodeInputDom();
  });

  it('resolves null when cancel is clicked', async () => {
    const p = _askCode('title', 'desc');
    clickCancel();
    expect(await p).toBeNull();
  });

  it('resolves the entered code, normalized (dashes stripped, uppercased) when OK is clicked', async () => {
    const p = _askCode('title', 'desc');
    (document.getElementById('code-input-field') as HTMLInputElement).value = 'abc-123';
    clickOk();
    expect(await p).toBe('ABC123');
  });

  // Regression: the dialog reuses one shared set of DOM elements
  // (#code-input-*). A second _askCode() call fired while the first was
  // still open (three different call sites can trigger it: replying to an
  // async challenge, joining a tournament, joining as spectator) used to
  // stack a second set of OK/Cancel/keydown listeners on top of the first's
  // instead of replacing them — one click on OK then fired both closures,
  // resolving the FIRST caller's promise too even though its dialog's
  // title/desc was never actually shown (the second call's overwrote them).
  // Fixed by having a new call cancel any still-open previous one first.
  it('a second call made while one is still open cancels the first instead of leaving stacked listeners', async () => {
    const first = _askCode('first-title', 'first-desc');
    const second = _askCode('second-title', 'second-desc');

    // The shared dialog now reflects only the second call.
    expect(document.getElementById('code-input-title')!.textContent).toBe('second-title');

    (document.getElementById('code-input-field') as HTMLInputElement).value = 'xyz-789';
    clickOk();

    // The first call was cancelled (not left dangling, not also resolved to
    // the second's answer) and the second resolved normally to its own value.
    expect(await first).toBeNull();
    expect(await second).toBe('XYZ789');
  });

  it('after an overlapping call resolves, a single OK click fires exactly one resolution (no duplicate listeners survive)', async () => {
    const first = _askCode('first', 'd');
    const second = _askCode('second', 'd');
    let resolutions = 0;
    void first.then(() => resolutions++);
    void second.then(() => resolutions++);

    (document.getElementById('code-input-field') as HTMLInputElement).value = 'aaa-111';
    clickOk();
    await Promise.all([first, second]);
    expect(resolutions).toBe(2); // first from the cancel-on-reentry, second from the click

    // A further click must not re-fire anything — the listeners from both
    // calls should have been fully torn down.
    resolutions = 0;
    clickOk();
    await Promise.resolve();
    expect(resolutions).toBe(0);
  });
});
