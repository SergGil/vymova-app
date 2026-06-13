# Imperative Core Migration Plan (items 35+36 з REACT_MIGRATION_PLAN.md)

## Контекст

`REACT_MIGRATION_PLAN.md` завершив React-міграцію UI-шару (items 1-34,
529/529 тестів). Залишились два пов'язані пункти, свідомо винесені за межі
того плану через масштаб:

- **Item 35** — решта `$e`/`querySelector`/`addEventListener` boilerplate
  поза React-компонентами.
- **Item 36** — `window.*` глобали як інтерфейс між `js/app.ts` (джерело
  істини стану: `deck`, `idx`, `flipped`, `cw`, `known`, `srsData`, …) і
  десятками ще-imperative модулів.

Обидва пункти не можна закрити окремо: відкриття/закриття оверлеїв (35) і
читання/запис стану (36) переплетені в одних і тих самих файлах. Закриття
вимагає переписування "ядра" — модулів, які або тримають стан, або є
основним циклом взаємодії користувача (картка, дуель, сайдбар).

## Поточний `window.*`-інтерфейс (з `js/app.ts`, 319 рядків)

`app.ts` експортує в `window`: `TODAY`, `W`, `known`, `srsData`, `render`,
`stopAuto`/`startAuto`/`isAutoRunning`, `getGameData`/`saveGameData`,
`onWordLearned`, `ACHIEVEMENTS`, `openWordDetail`, `setIdx`/`setDeck`/
`setBaseWords`/`setFlipped`/`setCw`/`setKnown`/`setSrsData`, `_wordIdx`,
`_customWords`, `invalidateSimilarCache`, `knownEs`/`knownFr`, `animCard`,
`updateRing`, `playSound`, `recordModeComplete`, `recordCustomWordAdded`.

Читачів цього інтерфейсу (`window.xxx as (...)`) — **31 файл** у `js/`
(features + modes), плюс саму `duel.ts` (1763 рядки) і `sidebar.ts`
(193 рядки), які додатково мають власні `window.*`-точки входу.

## Фази (від найменш ризикованих до найбільших)

### Фаза 7.1 — i18n / learning-path refresh-checks
- `js/features/i18n.ts` (187 рядків) і `js/features/learning-path.ts`
  (307 рядків): мають `classList.contains('open')`-перевірки та
  `window.*`-рефреш виклики при зміні мови/прогресу.
- Мета: перевести on/off стан відкритих сторінок на `useStateVersion()`/
  `notifyStateChange()` (вже є механізм з item 34), де це можливо без
  переписування `app.ts`.
- Найменший і найбезпечніший крок — гарний кандидат для старту.

### Фаза 7.2 — daily-challenge.ts + sidebar.ts
- `js/modes/daily-challenge.ts` (122 рядки) і `js/features/sidebar.ts`
  (193 рядки) — відносно невеликі, але `sidebar.ts` керує навігацією
  (`openPage`/`closePage`), яку викликають майже всі React-компоненти
  через `window.openPage`/`window.closePage`. Переписування сайдбару на
  React-роутинг (стан "активна сторінка" в `src/store.ts`) усуває
  найпоширеніший `window.*`-виклик одразу в десятках файлів.

### Фаза 7.3 — card-actions / swipe / keyboard (ядро картки)
- `js/features/card-actions.ts` (324 рядки), `swipe.ts` (20), `keyboard.ts`
  (26) — основний цикл "показати картку → дія користувача → наступна
  картка". Тісно зчеплені з `app.ts` (`window.setIdx`/`setCw`/`setFlipped`/
  `animCard`/`render`). Переписування вимагає перенесення `deck`/`idx`/
  `flipped`/`cw` зі змінних модуля `app.ts` у `src/state.ts` як єдине
  джерело істини з реактивними підписниками.

### Фаза 7.4 — duel.ts (1763 рядки)
- Найбільший файл, Firebase realtime polling + game loop. React-компоненти
  дуелі (items 29-33) вже мігровані й викликають `refreshXxx()` →
  `notifyStateChange()` — сам `duel.ts` залишається imperative
  "контролером". Повне переписування — окремий великий під-проєкт.

### Фаза 7.5 — app.ts: прибрати `window.*`, перенести стан у `src/state.ts`
- Фінальний крок: коли всі читачі (фази 7.1-7.4) переведені на
  `src/store.ts`/`src/state.ts`, видалити `window.*`-присвоєння з `app.ts`
  і сам глобальний інтерфейс. Це закриває item 36 і залишки item 35
  (overlay-listeners, що читали `window.closePage` тощо, вже централізовані
  в `overlay-utils.ts` і автоматично підхоплять новий API).

## Верифікація

Як і в `REACT_MIGRATION_PLAN.md`: після кожної фази —
`npx tsc --noEmit -p .` (чисто) + `npx vitest run` (529/529, потім більше
за потреби), commit + push. Кожна фаза — окремий PR/коміт(и), щоб можна
було відкотити проблемну частину без впливу на інші.

## Статус

- [ ] Фаза 7.1 — i18n / learning-path refresh-checks
- [ ] Фаза 7.2 — daily-challenge.ts + sidebar.ts (роутинг сторінок)
- [ ] Фаза 7.3 — card-actions / swipe / keyboard (ядро картки + стан деку)
- [ ] Фаза 7.4 — duel.ts
- [ ] Фаза 7.5 — app.ts: прибрати `window.*`
