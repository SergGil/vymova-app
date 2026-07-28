import { describe, it, expect, vi } from 'vitest';
import { act } from 'react';
import { render } from '@testing-library/react';
import { ModeCardGrid } from '../../js/features/mode/mode-card-grid.tsx';
import { LazyMode } from '../../src/lazy-mode.tsx';
import { expectStructuralParity } from '../support/structural-parity.ts';

// The exact static markup #modes-grid-mount replaced in index.html
// (Ukrainian is this app's default/fallback language).
const ORIGINAL_GRID_HTML = `
  <div class="text-[0.68rem] font-bold uppercase tracking-[0.07em] text-[var(--text3)] pt-3.5 px-0.5 pb-[7px]" data-i18n="modesPg.groupCards">Картки</div>
  <div class="modes-section-grid">
    <button class="mode-card mc-quiz" id="btn-quiz">
      <span class="mode-icon">🧠</span><span class="mode-name" data-i18n="modesPg.quizName">Тест</span>
      <span class="text-[0.66rem] text-[var(--text3)] leading-[1.2]" data-i18n="modesPg.quizDesc">4 варіанти</span>
    </button>
    <button class="mode-card mc-write" id="btn-write">
      <span class="mode-icon">✍️</span><span class="mode-name" data-i18n="modesPg.writeName">Письмо</span>
      <span class="text-[0.66rem] text-[var(--text3)] leading-[1.2]" id="write-mode-desc" data-i18n="modesPg.writeDesc">UA → EN</span>
    </button>
    <button class="mode-card mc-listen" id="btn-listen">
      <span class="mode-icon">🔊</span><span class="mode-name" data-i18n="modesPg.listenName">Слухай</span>
      <span class="text-[0.66rem] text-[var(--text3)] leading-[1.2]" data-i18n="modesPg.listenDesc">Аудіо</span>
    </button>
    <button class="mode-card mc-fib" id="btn-fib">
      <span class="mode-icon">✏️</span><span class="mode-name" data-i18n="modesPg.fibName">Пропуск</span>
      <span class="text-[0.66rem] text-[var(--text3)] leading-[1.2]" data-i18n="modesPg.fibDesc">Вставте слово</span>
    </button>
    <button class="mode-card mc-tempo" id="btn-tempo">
      <span class="mode-icon">⚡</span><span class="mode-name" data-i18n="modesPg.tempoName">Темп</span>
      <span class="text-[0.66rem] text-[var(--text3)] leading-[1.2]" data-i18n="modesPg.tempoDesc">На час</span>
    </button>
  </div>
  <div class="text-[0.68rem] font-bold uppercase tracking-[0.07em] text-[var(--text3)] pt-3.5 px-0.5 pb-[7px]" data-i18n="modesPg.groupGames">Ігри</div>
  <div class="modes-section-grid">
    <button class="mode-card mc-pairs" id="btn-pairs">
      <span class="mode-icon">🔗</span><span class="mode-name" data-i18n="modesPg.pairsName">Пари</span>
      <span class="text-[0.66rem] text-[var(--text3)] leading-[1.2]" data-i18n="modesPg.pairsDesc">6 пар</span>
    </button>
    <button class="mode-card mc-cat" id="btn-catpairs">
      <span class="mode-icon">📦</span><span class="mode-name" data-i18n="modesPg.catName">Теми</span>
      <span class="text-[0.66rem] text-[var(--text3)] leading-[1.2]" data-i18n="modesPg.catDesc">По темі</span>
    </button>
    <button class="mode-card mc-scramble" id="btn-scramble">
      <span class="mode-icon">🔀</span><span class="mode-name" data-i18n="modesPg.scrambleName">Анаграма</span><span class="text-[0.66rem] text-[var(--text3)] leading-[1.2]" data-i18n="modesPg.scrambleDesc">Збери слово</span>
    </button>
    <button class="mode-card mc-letters" id="btn-letters">
      <span class="mode-icon">🔤</span><span class="mode-name" data-i18n="modesPg.lettersName">Букви</span>
      <span class="text-[0.66rem] text-[var(--text3)] leading-[1.2]" data-i18n="modesPg.lettersDesc">Знайди слова</span>
    </button>
    <button class="mode-card mc-spelling" id="btn-spelling-bee">
      <span class="mode-icon">🐝</span><span class="mode-name" data-i18n="modesPg.beeName">Конкурс з правопису</span><span class="text-[0.66rem] text-[var(--text3)] leading-[1.2]" data-i18n="modesPg.beeDesc">Почуй і напиши</span>
    </button>
  </div>
  <div class="text-[0.68rem] font-bold uppercase tracking-[0.07em] text-[var(--text3)] pt-3.5 px-0.5 pb-[7px]" data-i18n="modesPg.groupPractice">Практика</div>
  <div class="modes-section-grid">
    <button class="mode-card mc-lesson" id="btn-lesson">
      <span class="mode-icon">📚</span><span class="mode-name" data-i18n="modesPg.lessonName">Урок</span>
      <span class="text-[0.66rem] text-[var(--text3)] leading-[1.2]" data-i18n="modesPg.lessonDesc">5×3 вправи</span>
    </button>
    <button class="mode-card mc-reading" id="btn-reading">
      <span class="mode-icon">📖</span><span class="mode-name" data-i18n="modesPg.readingName">Читання</span>
      <span class="text-[0.66rem] text-[var(--text3)] leading-[1.2]" data-i18n="modesPg.readingDesc">Текст зі словами</span>
    </button>
    <button class="mode-card mc-story" id="btn-story">
      <span class="mode-icon">✨</span><span class="mode-name" data-i18n="modesPg.storyName">Історії</span>
      <span class="text-[0.66rem] text-[var(--text3)] leading-[1.2]" data-i18n="modesPg.storyDesc">ШІ-історії та тексти</span>
    </button>
    <button class="mode-card mc-context" id="btn-context">
      <span class="mode-icon">🔍</span><span class="mode-name" data-i18n="modesPg.contextName">Контекст</span>
      <span class="text-[0.66rem] text-[var(--text3)] leading-[1.2]" data-i18n="modesPg.contextDesc">Вгадай з речення</span>
    </button>
    <button class="mode-card mc-daily" id="btn-daily-challenge">
      <span class="mode-icon">🎯</span><span class="mode-name" data-i18n="modesPg.dailyName">Місія дня</span>
      <span class="text-[0.66rem] text-[var(--text3)] leading-[1.2]" data-i18n="modesPg.dailyDesc">10 слів + таймер</span>
    </button>
    <button class="mode-card mc-adaptive" id="btn-adaptive-quiz">
      <span class="mode-icon">🧩</span><span class="mode-name" data-i18n="modesPg.adaptiveName">Адаптивний тест</span>
      <span class="text-[0.66rem] text-[var(--text3)] leading-[1.2]" data-i18n="modesPg.adaptiveDesc">Складність підлаштовується</span>
    </button>
  </div>
  <div class="text-[0.68rem] font-bold uppercase tracking-[0.07em] text-[var(--text3)] pt-3.5 px-0.5 pb-[7px]" data-i18n="modesPg.groupNew">Нові режими</div>
  <div class="modes-section-grid">
    <button class="mode-card mc-oddone" id="btn-oddone">
      <span class="mode-icon">🧐</span><span class="mode-name" data-i18n="modesPg.oddoneName">Зайве слово</span><span class="text-[0.66rem] text-[var(--text3)] leading-[1.2]" data-i18n="modesPg.oddoneDesc">Знайди зайве</span>
    </button>
    <button class="mode-card mc-sentbuild" id="btn-sentbuild">
      <span class="mode-icon">🧱</span><span class="mode-name" data-i18n="modesPg.sentbuildName">Речення</span><span class="text-[0.66rem] text-[var(--text3)] leading-[1.2]" data-i18n="modesPg.sentbuildDesc">Склади з тайлів</span>
    </button>
    <button class="mode-card mc-errorhunt" id="btn-error-hunt">
      <span class="mode-icon">🕵️</span><span class="mode-name" data-i18n="modesPg.errorhuntName">Мисливець</span><span class="text-[0.66rem] text-[var(--text3)] leading-[1.2]" data-i18n="modesPg.errorhuntDesc">Знайди помилку</span>
    </button>
    <button class="mode-card mc-assoc" id="btn-assoc">
      <span class="mode-icon">🔗🧠</span><span class="mode-name" data-i18n="modesPg.assocName">Асоціації</span><span class="text-[0.66rem] text-[var(--text3)] leading-[1.2]" data-i18n="modesPg.assocDesc">Ланцюжок синонімів</span>
    </button>
    <button class="mode-card mc-wordhint" id="btn-wordhint">
      <span class="mode-icon">💡</span><span class="mode-name" data-i18n="modesPg.wordhintName">Підказки</span><span class="text-[0.66rem] text-[var(--text3)] leading-[1.2]" data-i18n="modesPg.wordhintDesc">Вгадай слово</span>
    </button>
    <button class="mode-card mc-shadow" id="btn-shadow">
      <span class="mode-icon">🎙️</span><span class="mode-name" data-i18n="modesPg.shadowName">Диктант</span><span class="text-[0.66rem] text-[var(--text3)] leading-[1.2]" data-i18n="modesPg.shadowDesc">Почуй і повтори</span>
    </button>
    <button class="mode-card mc-ghost" id="btn-ghost">
      <span class="mode-icon">👻</span><span class="mode-name" data-i18n="modesPg.ghostName">Гонка</span><span class="text-[0.66rem] text-[var(--text3)] leading-[1.2]" data-i18n="modesPg.ghostDesc">Обжени привида</span>
    </button>
    <button class="mode-card mc-dictation" id="btn-dictation">
      <span class="mode-icon">🎧</span><span class="mode-name" data-i18n="modesPg.dictName">Слухай і пиши</span><span class="text-[0.66rem] text-[var(--text3)] leading-[1.2]" data-i18n="modesPg.dictDesc">Надрукуй почуте речення</span>
    </button>
    <button class="mode-card mc-idiomquiz" id="btn-idiom-quiz">
      <span class="mode-icon">💬</span><span class="mode-name" data-i18n="modesPg.idqName">Вікторина з ідіом</span><span class="text-[0.66rem] text-[var(--text3)] leading-[1.2]" data-i18n="modesPg.idqDesc">Вгадай значення</span>
    </button>
    <button class="mode-card mc-grammarquiz" id="btn-grammar-quiz">
      <span class="mode-icon">📐</span><span class="mode-name" data-i18n="modesPg.grqName">Граматична вікторина</span><span class="text-[0.66rem] text-[var(--text3)] leading-[1.2]" data-i18n="modesPg.grqDesc">Вгадай правило</span>
    </button>
    <button class="mode-card mc-compare" id="btn-compare">
      <span class="mode-icon">🌍</span><span class="mode-name" data-i18n="modesPg.compareName">Порівняння</span><span class="text-[0.66rem] text-[var(--text3)] leading-[1.2]" data-i18n="modesPg.compareDesc">Слово різними мовами</span>
    </button>
  </div>
`;

describe('<ModeCardGrid/>', () => {
  it('renders 27 mode-card buttons, structurally identical to the original static markup', () => {
    const { container } = render(<ModeCardGrid />);
    expect(container.querySelectorAll('.mode-card')).toHaveLength(27);
    // docs/component-tailwind-conversion-roadmap.md Batch 2 added theme-
    // driven Tailwind classes to every .mode-card button (bg-[var(--mode-
    // card-bg)] etc.) — a deliberate, later change unrelated to the
    // original static-markup-to-JSX port this test guards. Stripped before
    // comparing so the test keeps checking what it was built for (ids/
    // data-i18n/text/nesting/the original mc-*/mode-card classes), not
    // fighting a legitimate subsequent addition. docs/full-css-tailwind-
    // migration-roadmap.md Tier 2b/2c added .mode-card/.mode-icon/
    // .mode-name/.modes-section-grid's own (non-theme-driven) layout/
    // typography classes the same way — literal, identical on all 27
    // cards, stripped the same way via plain string split/join (safer
    // than a regex here: the class list itself contains brackets/commas/
    // colons that would need escaping).
    const actualHtml = container.innerHTML
      .replace(
        / (?:bg|border|hover:bg|hover:border|hover:shadow)-\[var\(--mode-card[a-z-]*\)\]/g,
        '',
      )
      .split(
        " border-[1.5px] rounded-[14px] pt-[14px] px-[6px] pb-[12px] cursor-pointer text-center flex flex-col items-center gap-[5px] font-['DM_Sans',sans-serif] [transition:border-color_0.16s,background_0.16s,box-shadow_0.16s,transform_0.12s] hover:-translate-y-0.5 active:translate-none active:scale-[0.96] [@media(max-width:480px)]:pt-[14px] [@media(max-width:480px)]:px-[8px] [@media(max-width:480px)]:pb-[12px]",
      )
      .join('')
      .split(
        ' w-[46px] h-[46px] rounded-full flex items-center justify-center text-2xl leading-none shrink-0 bg-[color-mix(in_srgb,var(--mi,var(--accent))_13%,transparent)]',
      )
      .join('')
      .split(' text-[0.78rem] font-bold text-[var(--text)] leading-[1.2] [@media(max-width:480px)]:text-[0.76rem]')
      .join('')
      .split(' grid grid-cols-3 gap-2 [@media(max-width:480px)]:grid-cols-2')
      .join('');
    expectStructuralParity(actualHtml, ORIGINAL_GRID_HTML);
  });

  it('keeps "write-mode-desc" id on the write card\'s desc span (updateModesPageDesc() target)', () => {
    render(<ModeCardGrid />);
    const el = document.getElementById('write-mode-desc')!;
    expect(el).not.toBeNull();
    expect(el.closest('.mode-card')!.id).toBe('btn-write');
  });

  it('every button has a unique id matching "btn-<key>" and a "mc-*" class', () => {
    // 7 of the 27 buttons have a shorter/different original CSS class
    // suffix than their id (e.g. id="btn-catpairs" but class="mc-cat") —
    // preserved exactly via ModeCard's `cls` field, see the structural
    // parity test above for the exact expected pairing per button.
    const { container } = render(<ModeCardGrid />);
    const ids = new Set<string>();
    container.querySelectorAll<HTMLButtonElement>('.mode-card').forEach((btn) => {
      expect(btn.id).toMatch(/^btn-/);
      expect(Array.from(btn.classList).some((c) => c.startsWith('mc-'))).toBe(true);
      expect(ids.has(btn.id)).toBe(false);
      ids.add(btn.id);
    });
    expect(ids.size).toBe(27);
  });

  // Regression test for the timing reasoning in full-react-migration-
  // roadmap.md Phase 5a: <ModeCardGrid/> and <LazyMode/> are siblings in the
  // same React tree (both direct children of AppRoot) — React commits both
  // to the real DOM in one pass before either's useEffect runs, so a real
  // user click on a ModeCardGrid-rendered button (not a manually-created
  // test fixture element) reaches LazyMode's click listener correctly, even
  // though the button no longer exists in static HTML before React mounts.
  it('a button ModeCardGrid renders is clickable by a sibling <LazyMode/> once both commit', async () => {
    document.body.innerHTML = '<div id="tempo-page-mount"></div>';
    const open = vi.fn();
    const loader = vi.fn().mockResolvedValue({ Page: () => null, open });

    render(
      <>
        <ModeCardGrid />
        <LazyMode btnId="btn-tempo" mountId="tempo-page-mount" loader={loader} />
      </>,
    );

    expect(loader).not.toHaveBeenCalled();
    act(() => {
      document.getElementById('btn-tempo')!.click();
    });
    await act(async () => {
      await new Promise((r) => setTimeout(r, 0));
    });

    expect(loader).toHaveBeenCalledTimes(1);
    expect(open).toHaveBeenCalledTimes(1);
  });
});
