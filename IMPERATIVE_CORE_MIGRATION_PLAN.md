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
- **[x] Перший прохід виконано**: `renderGameBar`/`refreshGameBarLevel`
  (== `notifyStateChange()`-обгортки з item 34) переведені з `window.*` на
  прямі імпорти в листових файлах, де циклічного імпорту з `i18n.ts` немає:
  `card-actions.ts`, `catpairs.tsx`, `daily-challenge.ts`, `goal-modal.tsx`,
  `progress-io.ts`, `settings.ts`. `sidebar.ts` тепер імпортує
  `refreshAchievementsPage` напряму (прибрано дублюючий
  `window.renderAchievements`/`window.renderLevelsRoadmap` подвійний
  виклик → один прямий). 529/529 тестів, tsc чистий.
- **[x] Другий прохід — `applyI18n()` в `i18n.ts`**: ~10 окремих
  `window._refreshXxx`/`window.renderXxx` викликів (`_refreshLangPairSelect`,
  `_refreshWordOfDay`, `_refreshSearchInline`, `_refreshSearchOverlay`,
  `_refreshTagOptions`, `renderLevelBadge`, `renderGameBar`,
  `renderLevelsRoadmap`) виявились усі тонкими `notifyStateChange()`-
  обгортками (item 34). `src/store.ts` не має циклічних залежностей з
  `i18n.ts`, тож замінено на один прямий `import { notifyStateChange }
  from '../../src/store.ts'` + один викоик. Видалено стали
  `window.renderGameBar`/`renderLevelBadge`/`renderLevelProgress`/
  `renderLevelsRoadmap` з `render-game-bar.ts` і
  `window._refreshTagOptions`/`refreshTagFilterSelect` з
  `tag-filter-select.tsx` (нічого більше їх не читало). Залишились
  `window._refreshRangeOptions` (deck-filter.ts, справжній DOM-рендер) і
  `window.render`/умовні `classList.contains('open')`-перевірки для
  `renderLearningPath`/`renderDuel`/`openGrammarContent`/`_refreshIdiomsUI`/
  settings-overlay/stats-overlay рефрешів — усі це або імперативний
  DOM-рендер, або `_bumpTick`-локальний стан (item 36 territory). 529/529
  тестів, tsc чистий.

### Фаза 7.2 — daily-challenge.ts + sidebar.ts
- `js/modes/daily-challenge.ts` (122 рядки) і `js/features/sidebar.ts`
  (193 рядки) — відносно невеликі, але `sidebar.ts` керує навігацією
  (`openPage`/`closePage`), яку викликають майже всі React-компоненти
  через `window.openPage`/`window.closePage`. Переписування сайдбару на
  React-роутинг (стан "активна сторінка" в `src/store.ts`) усуває
  найпоширеніший `window.*`-виклик одразу в десятках файлів.
- **[x] Перший прохід — `openPage('duel'|'grammar'|'idioms')`**: 3
  `window.*`-виклики (`renderDuel`, `openGrammarContent`,
  `openIdiomsContent`) замінено на прямі імпорти — жодного циклу немає
  (`duel.ts`/`grammar-page.tsx`/`idioms-page.tsx` не імпортують
  `sidebar.ts`). Видалено мертвий `window.openIdiomsContent` (нічим не
  читався після переходу). `window.openGrammarContent` і `window.renderDuel`
  залишені — потрібні `i18n.ts`/`profile-switcher.tsx`, які імпортують
  `duel.ts`/`grammar-page.tsx` ⇒ цикл з `sidebar.ts` неможливий, але цикл з
  `i18n.ts` (бо `duel.ts`/`grammar-page.tsx` самі імпортують `i18n.ts` для
  `t()`) — лишається.
- **[x] Другий прохід — `state.activePage`**: додано поле `activePage:
  string | null` у `AppState`/`src/state.ts` — єдине джерело істини для
  "яка сторінка відкрита", синхронізоване з `openPage()`/`closePage()` у
  `sidebar.ts` через `notifyStateChange()`. Локальна `_activePage`-змінна
  (write-only дублікат) видалена. Це не змінює існуючу DOM-логіку
  (`classList`/`style.display`/`MODE_OVERLAY_IDS`/localStorage-restore
  залишились як були — їх ризиковано чіпати без браузерного тестування), але
  дає React-компонентам реактивний доступ до поточної сторінки через
  `useStateVersion()` для майбутніх `useEffect`-рефрешів.
- **[x] Третій прохід — `window.closePage` у листових файлах**:
  `word-of-day.tsx` (немає циклу з `sidebar.ts`) і `learning-path.ts` (вже
  імпортував `openPage`, додано `closePage` до того ж імпорту) переведені
  на прямий імпорт.
- **[x] Четвертий прохід — `window.openPage`/`window.closePage` усунено
  повністю**: `duel.ts`, `grammar-page.tsx`, `idioms-page.tsx` та
  `overlay-utils.ts` (`bindOverlayDismiss`) переведені на **динамічний
  імпорт** `import('./sidebar.ts').then(m => m.openPage(...)/closePage())`
  замість `window.*`. Динамічний імпорт вирішує статичний цикл
  (`sidebar.ts` → `duel.ts`/`grammar-page.tsx`/`idioms-page.tsx` з проходу
  1) — модуль `sidebar.ts` довантажується лише в момент кліку, а не при
  ініціалізації цих файлів. Це водночас усуває й проблему DOM-side-effects
  на рівні модуля в `sidebar.ts` (querySelector сайдбару тощо), яка при
  спробі статичного імпорту ламала `duel-logic.test.ts` (немає потрібних
  DOM-елементів у jsdom). `window.openPage =`/`window.closePage =` у
  `sidebar.ts` видалені — `window.*`-інтерфейс для роутингу сторінок
  повністю закритий. 529/529 тестів, tsc чистий.

### Фаза 7.3 — card-actions / swipe / keyboard (ядро картки)
- `js/features/card-actions.ts` (324 рядки), `swipe.ts` (20), `keyboard.ts`
  (26) — основний цикл "показати картку → дія користувача → наступна
  картка". Тісно зчеплені з `app.ts` (`window.setIdx`/`setCw`/`setFlipped`/
  `animCard`/`render`). Переписування вимагає перенесення `deck`/`idx`/
  `flipped`/`cw` зі змінних модуля `app.ts` у `src/state.ts` як єдине
  джерело істини з реактивними підписниками.
- **[x] `keyboard.ts`** — найменша безпечна частина зроблена: відкриття
  оверлею клавіатурних скорочень переведено на `bindOverlayOpenClose`
  (item 35 helper) замість ручного `addEventListener`. `swipe.ts` вже
  ізольований і не використовує `window.*` — без змін.
- **[x] card-actions.ts — читання `cw`/`deck`/`idx`/`flipped`/`TODAY`**:
  `app.ts` вже синхронізує ці значення у `state` на кожній мутації
  (`_setDeck`/`_setIdx`/`_setCw`, `window.flipped`-сеттер, `render()`),
  тож усі ~14 read-сайтів `win.cw`/`win.deck`/`win.idx`/`win.flipped`/
  `win.TODAY` у `card-actions.ts` замінено на прямі читання `state.cw`/
  `state.deck`/`state.idx`/`state.flipped`/`state.TODAY` — без жодної
  зміни поведінки (значення завжди ідентичні). Запис прапорця flip
  (`win.flipped = true`) переведено на існуючий сеттер `win.setFlipped()`
  (вже був у `app.ts`, просто не використовувався). Тип `win` звужено до
  лише setter/action-функцій (`setIdx`/`setDeck`/`setFlipped`/`setSrsData`/
  `render`/`animCard`/`stopAuto`/`startAuto`/`isAutoRunning`/
  `onWordLearned`/`updateRing`/`knownEs`/`knownFr`). Тест
  `card-actions.test.ts` оновлено: мокає `state.cw`/`state.deck`/
  `state.idx`/`state.flipped` замість `win.*`. 529/529 тестів, tsc чистий.
- **Залишок (card-actions.ts) — не зроблено**: записи через `win.setIdx`/
  `win.setDeck`/`win.setFlipped`/`win.setSrsData`/`win.render`/
  `win.animCard`/`win.stopAuto`/`win.startAuto`/`win.isAutoRunning`/
  `win.onWordLearned`/`win.updateRing`/`win.knownEs`/`win.knownFr` —
  справжнє "ядро картки" (мутації `deck`/`idx`/`flipped`/`cw`,
  auto-play timer, рендер-цикл). Перенесення володіння цим станом у
  `src/state.ts` (замість дзеркалювання з `app.ts`) зачіпає одночасно
  `app.ts` і всі читачі/писачі — окремий **великий і ризикований**
  під-проєкт, що вимагає власного детального плану. Не виконувався в межах
  цього проходу.

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

- [x] Фаза 7.1 — i18n / learning-path refresh-checks
- [x] Фаза 7.2 — daily-challenge.ts + sidebar.ts (роутинг сторінок)
- [ ] Фаза 7.3 — card-actions / swipe / keyboard (ядро картки + стан деку)
- [ ] Фаза 7.4 — duel.ts
- [ ] Фаза 7.5 — app.ts: прибрати `window.*`
