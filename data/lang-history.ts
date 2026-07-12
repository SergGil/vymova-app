// Vymova — data/lang-history.ts
// "Історія мови" page content: short origin story + interesting facts per
// language. Hand-written for a first batch of well-known languages; any
// language not listed here falls back to a "coming soon" placeholder in
// js/features/lang-history-page.tsx. Primary text is Ukrainian (`intro`/
// `facts`); `introEn`/`factsEn` are an optional English override, same
// bilingual pattern as data/grammar.ts's `titleEn` fields — other UI
// locales fall back to the Ukrainian text, same as grammar/idioms content.
export interface LangHistoryEntry {
  intro: string;
  introEn?: string;
  facts: string[];
  factsEn?: string[];
}

export const LANG_HISTORY: Partial<Record<string, LangHistoryEntry>> = {
  en: {
    intro:
      'Англійська мова походить від західногерманських діалектів, які принесли на Британські острови англи, сакси та юти у V столітті. Норманське завоювання 1066 року докорінно змінило її лексику, додавши тисячі французьких і латинських слів, а сьогодні англійська — найпоширеніша друга мова у світі.',
    introEn:
      "English descends from West Germanic dialects brought to Britain by the Angles, Saxons, and Jutes in the 5th century. The 1066 Norman Conquest reshaped its vocabulary with thousands of French and Latin words, and today it's the world's most widely used second language.",
    facts: [
      'Належить до західногерманської групи індоєвропейських мов.',
      'Давньоанглійська сформувалася після приходу англів, саксів і ютів на Британські острови у V столітті.',
      'Норманське завоювання 1066 року принесло тисячі французьких і латинських запозичень.',
      'Велике зрушення голосних (XIV–XVII ст.) кардинально змінило вимову англійської мови.',
      'На відміну від французької чи іспанської, англійська не має офіційної академії, що регулює мову.',
      'Це найпоширеніша друга мова у світі — людей, які вивчили її як іноземну, більше, ніж носіїв від народження.',
    ],
    factsEn: [
      'Belongs to the West Germanic branch of the Indo-European family.',
      'Old English took shape after the Angles, Saxons, and Jutes arrived in Britain in the 5th century.',
      'The 1066 Norman Conquest introduced thousands of French and Latin loanwords.',
      'The Great Vowel Shift (14th–17th centuries) dramatically changed English pronunciation.',
      'Unlike French or Spanish, English has no official academy regulating the language.',
      "It's the most widely spoken second language in the world — more people speak it as a foreign language than as a native one.",
    ],
  },
  ua: {
    intro:
      'Українська мова — східнослов\'янська мова, що походить від давньоруської мови часів Київської Русі. Її сучасна літературна форма сформувалася у XVIII–XIX століттях і пережила періоди активних заборон за часів Російської імперії та СРСР.',
    introEn:
      "Ukrainian is an East Slavic language descended from Old East Slavic, the language of Kyivan Rus'. Its modern literary form took shape in the 18th–19th centuries and survived periods of active suppression under imperial Russian and Soviet rule.",
    facts: [
      'Належить до східнослов\'янської групи мов, разом із білоруською.',
      'Походить від давньоруської мови часів Київської Русі.',
      'Сучасну літературну мову сформували "Енеїда" Івана Котляревського (1798) та пізніше творчість Тараса Шевченка.',
      'Використовує кириличну абетку з унікальними літерами ї, є, і, ґ, яких немає в російській.',
      'Царська Росія неодноразово обмежувала друк українською мовою — зокрема, Емським указом 1876 року.',
      'На відміну від російської, українська й досі активно використовує кличний відмінок у повсякденному мовленні.',
    ],
    factsEn: [
      'Belongs to the East Slavic branch, alongside Belarusian.',
      "Descends from Old East Slavic, the language of Kyivan Rus'.",
      "The modern literary language was shaped by Ivan Kotliarevsky's Eneida (1798) and later by Taras Shevchenko's poetry.",
      'Uses distinctive Cyrillic letters — ї, є, і, ґ — not found in Russian.',
      'Imperial Russia repeatedly restricted Ukrainian in print, notably the 1876 Ems Ukaz.',
      'Unlike Russian, Ukrainian still actively uses the vocative case in everyday speech.',
    ],
  },
  es: {
    intro:
      'Іспанська (кастильська) мова розвинулася з народної латини на Піренейському півострові. Майже 800 років мавританського панування (711–1492) збагатили її сотнями арабських запозичень, а після 1492 року вона поширилася по всій Латинській Америці.',
    introEn:
      'Spanish (Castilian) evolved from Vulgar Latin spoken on the Iberian Peninsula. Nearly 800 years of Moorish rule (711–1492) enriched it with hundreds of Arabic loanwords, and after 1492 it spread across Latin America.',
    facts: [
      'Розвинулася з народної латини, якою розмовляли на Піренейському півострові.',
      'Ввібрала сотні арабських запозичень за майже 800 років мавританського панування (711–1492).',
      'Перша граматика сучасної європейської мови — "Граматика" Антоніо де Небрихи — була видана для іспанської 1492 року.',
      'Поширилася Америкою внаслідок колонізації, що почалася наприкінці XV століття.',
      'Сьогодні це друга мова світу за кількістю носіїв від народження — після китайської.',
    ],
    factsEn: [
      'Evolved from Vulgar Latin spoken on the Iberian Peninsula.',
      'Absorbed hundreds of Arabic loanwords during nearly 800 years of Moorish rule (711–1492).',
      "The first grammar of a modern European language, Antonio de Nebrija's Gramática, was published for Spanish in 1492.",
      'Spread across the Americas through colonization starting in the late 15th century.',
      "Today it's the second most-spoken native language in the world after Mandarin Chinese.",
    ],
  },
  fr: {
    intro:
      'Французька мова постала з народної латини, змішаної з галльськими та франкськими (германськими) впливами. Найдавніший письмовий зразок старофранцузької — Страсбурзькі клятви 842 року.',
    introEn:
      'French developed from Vulgar Latin mixed with Gaulish and Frankish (Germanic) influences. The earliest written Old French text is the Oaths of Strasbourg from 842 CE.',
    facts: [
      'Постала з народної латини, змішаної з галльськими та франкськими (германськими) впливами.',
      'Страсбурзькі клятви 842 року — найдавніший письмовий зразок старофранцузької мови.',
      'Ордонанс Віллер-Котре (1539) зробив французьку офіційною мовою права й адміністрації замість латини.',
      'Французька академія, заснована 1635 року, і досі офіційно ухвалює рішення щодо лексики й граматики.',
      'Століттями французька була мовою міжнародної дипломатії, поки в XX столітті її не потіснила англійська.',
    ],
    factsEn: [
      'Developed from Vulgar Latin mixed with Gaulish and Frankish (Germanic) influences.',
      'The Oaths of Strasbourg (842 CE) contain the earliest written example of Old French.',
      'The Ordinance of Villers-Cotterêts (1539) made French the official language of law and administration, replacing Latin.',
      'The Académie française, founded in 1635, still issues official rulings on French vocabulary and grammar.',
      'French was the international language of diplomacy for centuries, before English took over in the 20th century.',
    ],
  },
  de: {
    intro:
      'Німецька мова розвинулася з давньоверхньонімецької після другого пересуву приголосних, що відокремив її від інших західногерманських діалектів. Переклад Біблії Мартіном Лютером 1522 року значно допоміг стандартизувати писемну німецьку.',
    introEn:
      'German evolved from Old High German after the High German consonant shift separated it from other West Germanic dialects. Martin Luther\'s 1522 Bible translation greatly helped standardize written German.',
    facts: [
      'Розвинулася з давньоверхньонімецької після другого пересуву приголосних.',
      'Переклад Біблії Мартіном Лютером 1522 року значно допоміг стандартизувати писемну німецьку.',
      'Сучасна літературна німецька (Hochdeutsch) базується на суміші регіональних канцелярських діалектів, а не на якомусь одному розмовному.',
      'Німецькі іменники завжди пишуться з великої літери — унікальна риса серед великих світових мов.',
      'Німецька відома складними словами — на кшталт "Donaudampfschifffahrtsgesellschaftskapitän".',
    ],
    factsEn: [
      'Evolved from Old High German after the High German consonant shift separated it from other West Germanic dialects.',
      "Martin Luther's 1522 Bible translation greatly helped standardize written German.",
      'Modern Standard German (Hochdeutsch) is based on a blend of regional chancery dialects rather than any single spoken dialect.',
      'German nouns are always capitalized — a convention unique among major world languages.',
      'German is known for long compound words, such as "Donaudampfschifffahrtsgesellschaftskapitän".',
    ],
  },
  it: {
    intro:
      'Італійська мова походить безпосередньо з народної латини, зберігши більше латинської лексики, ніж більшість романських мов. В основі літературної італійської — флорентійський діалект XIV століття, яким писали Данте, Петрарка й Боккаччо.',
    introEn:
      "Italian descends directly from Vulgar Latin, retaining more Latin vocabulary than most Romance languages. Standard Italian is based largely on the 14th-century Florentine dialect used by Dante, Petrarch, and Boccaccio.",
    facts: [
      'Походить безпосередньо з народної латини, зберігши більше латинської лексики, ніж більшість романських мов.',
      'В основі — флорентійський діалект XIV століття, яким писали Данте, Петрарка й Боккаччо.',
      'До об\'єднання Італії 1861 року більшість італійців розмовляли регіональними діалектами, а не стандартною мовою.',
      '"Божественна комедія" Данте Аліг\'єрі допомогла утвердити тосканський діалект як літературний стандарт.',
      'Італійська зберігає сім латинських голосних звуків точніше, ніж французька чи португальська.',
    ],
    factsEn: [
      'Descends directly from Vulgar Latin, retaining more Latin vocabulary than most Romance languages.',
      "It's based largely on the 14th-century Florentine dialect used by Dante, Petrarch, and Boccaccio.",
      'Until Italian unification in 1861, most Italians spoke regional dialects rather than standard Italian.',
      "Dante Alighieri's Divine Comedy helped establish the Tuscan dialect as the literary standard.",
      "Italian preserves Latin's seven vowel sounds more closely than French or Portuguese.",
    ],
  },
  pt: {
    intro:
      'Португальська мова розвинулася з галісійсько-португальської, романської мови північного заходу Піренейського півострова. Вона стала окремою писемною мовою після здобуття Португалією незалежності 1143 року, а в епоху Великих географічних відкриттів поширилася по всьому світу.',
    introEn:
      "Portuguese developed from Galician-Portuguese, a Romance language spoken in the northwest Iberian Peninsula. It became a separate written language after Portugal's independence in 1143, and spread worldwide during the Age of Exploration.",
    facts: [
      'Розвинулася з галісійсько-португальської, романської мови північного заходу Піренейського півострова.',
      'Стала окремою писемною мовою після здобуття Португалією незалежності 1143 року.',
      'Поширилася світом в епоху Великих географічних відкриттів XV–XVI століть.',
      'Бразильська та європейська португальська помітно різняться вимовою і частиною лексики.',
      'Це єдина романська мова з офіційним статусом у кількох країнах Африки — Анголі, Мозамбіку та інших.',
    ],
    factsEn: [
      'Developed from Galician-Portuguese, a Romance language spoken in the northwest Iberian Peninsula.',
      "It became a separate written language after Portugal's independence in 1143.",
      'Portuguese spread globally during the Age of Exploration in the 15th–16th centuries.',
      'Brazilian and European Portuguese differ noticeably in pronunciation and some vocabulary.',
      'Portuguese is the only Romance language with official status in several African countries, including Angola and Mozambique.',
    ],
  },
  ja: {
    intro:
      'Походження японської мови досі є предметом дискусій — її часто вважають мовою-ізолятом або частиною невеликої японської мовної родини. Ієрогліфи кандзі прийшли з Китаю приблизно з V століття н.е.',
    introEn:
      "Japanese's origins are still debated among linguists — it's often classified as a language isolate or part of the small Japonic family. Kanji characters arrived from China around the 5th century CE.",
    facts: [
      'Її генетичний зв\'язок з іншими мовними родинами досі є предметом наукових дискусій.',
      'Ієрогліфи кандзі прийшли з Китаю приблизно з V століття н.е. завдяки культурним контактам із Китаєм і Кореєю.',
      'До IX–X століть на основі спрощених кандзі виникли дві складові абетки — хірагана й катакана.',
      'Давньояпонська мова мала складнішу систему з восьми голосних, згодом спрощену до п\'яти.',
      'Сучасна стандартна японська базується на токійському діалекті, закріпленому після Реставрації Мейдзі 1868 року.',
    ],
    factsEn: [
      "Japanese's genetic relationship to other language families is still debated among linguists.",
      'Kanji characters arrived from China around the 5th century CE through cultural contact with China and Korea.',
      'Two syllabic scripts, hiragana and katakana, developed from simplified kanji by the 9th–10th centuries.',
      'Old Japanese had a more complex vowel system with eight vowels, later simplified to five.',
      'Modern standard Japanese is based on the Tokyo dialect, established after the Meiji Restoration of 1868.',
    ],
  },
  zh: {
    intro:
      'Китайська мова належить до китайсько-тибетської мовної родини й має найдовшу безперервну літературну традицію серед усіх мов світу. Її писемність — ієрогліфи — сягає понад 3000 років, до написів на гадальних кістках.',
    introEn:
      'Chinese belongs to the Sino-Tibetan language family and has one of the longest continuous literary traditions of any language. Its writing system dates back over 3,000 years to oracle bone inscriptions.',
    facts: [
      'Належить до китайсько-тибетської мовної родини.',
      'Писемність сягає понад 3000 років — до написів на гадальних кістках.',
      'Стандартна путунхуа базується на пекінському діалекті й стала офіційною мовою Китаю у XX столітті.',
      'Спрощені ієрогліфи запровадили в материковому Китаї у 1950–60-х для підвищення грамотності; Тайвань і Гонконг досі використовують традиційні.',
      'Попри величезну регіональну різноманітність розмовних діалектів, спільна писемність століттями об\'єднувала китайську грамотну культуру.',
    ],
    factsEn: [
      'Belongs to the Sino-Tibetan language family.',
      'Its writing system dates back over 3,000 years to oracle bone inscriptions.',
      "Standard Mandarin is based on the Beijing dialect and became China's official language in the 20th century.",
      'Simplified characters were introduced in mainland China in the 1950s–60s to boost literacy; Taiwan and Hong Kong still use traditional characters.',
      "Despite huge regional variation in spoken dialects, the shared writing system has long unified China's literate culture.",
    ],
  },
  ar: {
    intro:
      'Арабська мова належить до семітської мовної родини, споріднена з івритом та арамейською. Класична арабська була стандартизована мовою Корану у VII столітті й швидко поширилася під час ранніх ісламських завоювань.',
    introEn:
      'Arabic belongs to the Semitic language family, related to Hebrew and Aramaic. Classical Arabic was standardized by the language of the Quran in the 7th century CE and spread rapidly during the early Islamic conquests.',
    facts: [
      'Належить до семітської мовної родини, споріднена з івритом та арамейською.',
      'Класична арабська була стандартизована мовою Корану у VII столітті.',
      'Швидко поширилася Близьким Сходом і Північною Африкою під час ранніх ісламських завоювань.',
      'Сучасна стандартна арабська, що використовується в медіа й письмі, суттєво відрізняється від розмовних діалектів різних країн.',
      'Арабська подарувала європейським мовам чимало слів через іспанську й торгівлю — наприклад, "алгебра", "алкоголь", "цукор".',
    ],
    factsEn: [
      'Belongs to the Semitic language family, related to Hebrew and Aramaic.',
      'Classical Arabic was standardized by the language of the Quran in the 7th century CE.',
      'Arabic spread rapidly across the Middle East and North Africa during the early Islamic conquests.',
      'Modern Standard Arabic, used in media and writing, differs significantly from everyday spoken dialects across the Arab world.',
      'Arabic gave many words to European languages via Spanish and trade, including "algebra," "alcohol," and "sugar."',
    ],
  },
  he: {
    intro:
      'Іврит — семітська мова, тисячоліттями літургійна мова юдаїзму. Приблизно з 200 року н.е. вона майже перестала бути розмовною, зберігшись переважно в релігійному та літературному вжитку — аж до відродження наприкінці XIX століття.',
    introEn:
      "Hebrew is a Semitic language and the liturgical language of Judaism for millennia. It largely ceased to be a spoken vernacular by around 200 CE, surviving mainly in religious and literary use until its revival in the late 19th century.",
    facts: [
      'Семітська мова, тисячоліттями літургійна мова юдаїзму.',
      'Приблизно з 200 року н.е. майже перестала бути розмовною мовою.',
      'Елізер Бен-Єгуда наприкінці XIX століття очолив відродження івриту як сучасної розмовної мови.',
      'Сучасний іврит став офіційною мовою Ізраїлю з моменту його заснування 1948 року.',
      'Пишеться справа наліво абеткою, яка початково не мала позначень голосних.',
    ],
    factsEn: [
      'A Semitic language and the liturgical language of Judaism for millennia.',
      'It largely ceased to be a spoken vernacular by around 200 CE.',
      'Eliezer Ben-Yehuda led the late-19th-century revival of Hebrew as a modern spoken language.',
      "Modern Hebrew became the official language of Israel upon its founding in 1948.",
      'Hebrew is written right-to-left using an alphabet that originally had no vowel marks.',
    ],
  },
  la: {
    intro:
      'Латина зародилася в Лації, регіоні навколо Рима, і стала мовою Римської республіки та імперії. Народна латина, якою говорили прості люди, поступово перетворилася на романські мови — іспанську, французьку, італійську, португальську, румунську та інші.',
    introEn:
      "Latin originated in Latium, the region around Rome, and became the language of the Roman Republic and Empire. Vulgar Latin, spoken by ordinary people, gradually evolved into the Romance languages — Spanish, French, Italian, Portuguese, Romanian, and more.",
    facts: [
      'Зародилася в Лації, регіоні навколо Рима.',
      'Класична латина була літературним стандартом, яким писали Ціцерон і Вергілій.',
      'Народна латина простих людей поступово перетворилася на романські мови.',
      'Після падіння Риму латина ще понад тисячу років лишалася мовою науки, освіти та Католицької церкви.',
      'Латину й досі використовують для наукових назв у біології та девізів на гербах.',
    ],
    factsEn: [
      'Originated in Latium, the region around Rome.',
      'Classical Latin was the literary standard used by writers like Cicero and Virgil.',
      'Vulgar Latin, spoken by ordinary people, gradually evolved into the Romance languages.',
      "Latin remained the language of scholarship, the Catholic Church, and science in Europe for over a thousand years after Rome's fall.",
      'Latin is still used today for taxonomic naming in biology and mottos on many coats of arms.',
    ],
  },
  eo: {
    intro:
      'Есперанто створив 1887 року Людвік Заменгоф, польсько-єврейський офтальмолог, як міжнародну допоміжну мову. Її лексика переважно запозичена з романських і германських мов, а граматика будується лише на 16 базових правилах без винятків.',
    introEn:
      'Esperanto was created in 1887 by L. L. Zamenhof, a Polish-Jewish ophthalmologist, as an international auxiliary language. Its vocabulary draws mainly from Romance and Germanic languages, with a highly regular grammar of just 16 core rules.',
    facts: [
      'Створив 1887 року Людвік Заменгоф, польсько-єврейський офтальмолог.',
      'Лексика переважно запозичена з романських і германських мов.',
      'Граматика складається лише з 16 базових правил без винятків і неправильних дієслів.',
      'Це найпоширеніша штучна мова у світі — за оцінками, нею володіють від сотень тисяч до кількох мільйонів людей.',
      'Заменгоф видав перший підручник під псевдонімом "Doktoro Esperanto" ("Доктор Сподіваний") — звідси й назва мови.',
    ],
    factsEn: [
      'Created in 1887 by L. L. Zamenhof, a Polish-Jewish ophthalmologist.',
      'Its vocabulary draws mainly from Romance and Germanic languages.',
      'The grammar consists of just 16 core rules with no irregular verbs or exceptions.',
      "It's the most widely spoken constructed language in the world, with an estimated hundreds of thousands to a couple million speakers.",
      'Zamenhof published the first textbook under the pseudonym "Doktoro Esperanto" ("Doctor Hopeful"), which gave the language its name.',
    ],
  },
  ko: {
    intro:
      'Корейську мову часто вважають мовою-ізолятом, хоча деякі лінгвісти відносять її до гіпотетичної алтайської родини. Унікальну абетку хангиль створили 1443 року за наказом короля Седжона Великого спеціально для підвищення грамотності.',
    introEn:
      'Korean is often considered a language isolate, though some linguists group it with the hypothetical Altaic family. Its unique alphabet, Hangul, was created in 1443 under King Sejong the Great specifically to improve literacy.',
    facts: [
      'Часто вважається мовою-ізолятом; частина лінгвістів відносить її до гіпотетичної алтайської родини.',
      'Абетку хангиль створили 1443 року за наказом короля Седжона Великого спеціально для підвищення грамотності.',
      'До появи хангиля корейську записували китайськими ієрогліфами (ханча), які були доступні лише освіченій еліті.',
      'Лінгвісти високо цінують науковий підхід до дизайну хангиля — форми літер відображають положення рота під час вимови звуку.',
      'Сучасна стандартна корейська базується на сеульському діалекті.',
    ],
    factsEn: [
      'Often considered a language isolate; some linguists group it with the hypothetical Altaic family.',
      'Its alphabet, Hangul, was created in 1443 under King Sejong the Great specifically to improve literacy.',
      'Before Hangul, Korean was written using Chinese characters (Hanja), accessible only to the educated elite.',
      "Linguists praise Hangul's scientific design — letter shapes reflect the position of the mouth when pronouncing each sound.",
      'Modern standard Korean is based on the Seoul dialect.',
    ],
  },
  pl: {
    intro:
      'Польська мова належить до західнослов\'янської групи, тісно споріднена з чеською та словацькою. Вона використовує латинську абетку з особливими діакритичними знаками (ą, ę, ł, ż), пристосованими до слов\'янських звуків.',
    introEn:
      "Polish belongs to the West Slavic branch, closely related to Czech and Slovak. It uses the Latin alphabet with special diacritics (ą, ę, ł, ż) adapted to Slavic sounds.",
    facts: [
      'Належить до західнослов\'янської групи, тісно споріднена з чеською та словацькою.',
      'Використовує латинську абетку з особливими діакритичними знаками — ą, ę, ł, ż та іншими.',
      'Зберегла кілька архаїчних слов\'янських рис, утрачених іншими слов\'янськими мовами, зокрема носові голосні.',
      '"Богуродиця" — один із найдавніших відомих польських текстів, що датується щонайменше XV століттям.',
      'Наголос у польській майже завжди падає на передостанній склад.',
    ],
    factsEn: [
      'Belongs to the West Slavic branch, closely related to Czech and Slovak.',
      'Uses the Latin alphabet with special diacritics — ą, ę, ł, ż and others.',
      'Preserved several archaic Slavic features lost in other Slavic languages, including nasal vowels.',
      'The Bogurodzica, one of the oldest known Polish texts, dates back to at least the 15th century.',
      'Polish has a fixed stress pattern, almost always on the second-to-last syllable.',
    ],
  },
};
