// Vymova — js/features/overlay-utils.ts
// Спільні хелпери для відкриття/закриття оверлеїв режимів та сторінок.
// Item 35: централізує повторюваний DOM-listener boilerplate, який
// раніше дублювався в кожному модулі окремо.

/** Кнопка-тригер відкриття + клік по фону оверлею закриває його. */
export function bindOverlayOpenClose(
  btnId: string,
  overlayId: string,
  open: () => void,
  close: () => void,
): void {
  document.getElementById(btnId)?.addEventListener('click', open);
  const overlay = document.getElementById(overlayId);
  overlay?.addEventListener('click', (e: MouseEvent) => {
    if (e.target === overlay) close();
  });
}

/** Кнопка закриття + клік по фону + Escape (коли оверлей відкритий) викликають довільний close(). */
export function bindModalDismiss(
  overlayId: string,
  closeBtnId: string | undefined,
  close: () => void,
): void {
  const overlay = document.getElementById(overlayId) as HTMLElement | null;
  if (!overlay) return;
  if (closeBtnId) document.getElementById(closeBtnId)?.addEventListener('click', close);
  overlay.addEventListener('click', (e: MouseEvent) => {
    if (e.target === overlay) close();
  });
  document.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) close();
  });
}

/** Кнопка закриття + клік по фону + Escape (коли оверлей відкритий) викликають closePage(). */
export function bindOverlayDismiss(overlayId: string, closeBtnId?: string): void {
  const overlay = document.getElementById(overlayId) as HTMLElement | null;
  if (!overlay) return;
  // Динамічний імпорт: sidebar.tsx має DOM-side-effects на рівні модуля
  // (querySelector сайдбару тощо), тож статичний імпорт сюди тягнув би їх
  // у кожен файл, що використовує bindOverlayDismiss (включно з тестами).
  const close = (): void => {
    import('./sidebar.tsx').then((m) => m.closePage());
  };
  if (closeBtnId) document.getElementById(closeBtnId)?.addEventListener('click', close);
  overlay.addEventListener('click', (e: MouseEvent) => {
    if (e.target === overlay) close();
  });
  document.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) close();
  });
}
