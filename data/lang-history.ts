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
  el: {
    intro:
      'Грецька мова має найдовшу задокументовану історію серед індоєвропейських мов — понад 3400 років безперервних писемних пам\'яток, від мікенських табличок лінійного письма Б до сучасної новогрецької.',
    introEn:
      'Greek has the longest continuously documented history of any Indo-European language — over 3,400 years of written records, from Mycenaean Linear B tablets to modern Greek.',
    facts: [
      'Утворює власну окрему гілку індоєвропейської мовної родини.',
      'Найдавніші тексти записані лінійним письмом Б (XV–XII ст. до н.е.) для мікенської грецької.',
      'Класична давньогрецька існувала у формі багатьох діалектів — іонійського, доричного, еолійського, аттичного.',
      'Александрійська койне, що виникла після завоювань Александра Македонського, лягла в основу Нового Завіту.',
      'Аж до 1976 року офіційною мовою Греції була архаїзована катаревуса — паралельно з розмовною димотикою.',
    ],
    factsEn: [
      'Forms its own separate branch of the Indo-European language family.',
      'The earliest texts, in Mycenaean Greek, were written in Linear B (15th–12th centuries BCE).',
      'Classical Ancient Greek existed as several dialects — Ionic, Doric, Aeolic, and Attic.',
      "The Koine Greek that spread after Alexander the Great's conquests became the language of the New Testament.",
      "Until 1976, Greece's official language was the archaic Katharevousa, alongside the spoken Demotic Greek.",
    ],
  },
  tr: {
    intro:
      'Турецька належить до тюркської мовної родини, що бере початок із Центральної Азії. Сучасна турецька сформувалася на основі стамбульського діалекту, а 1928 року Мустафа Кемаль Ататюрк замінив арабське письмо латинським алфавітом.',
    introEn:
      "Turkish belongs to the Turkic language family, which originates in Central Asia. Modern Turkish is based on the Istanbul dialect, and in 1928 Mustafa Kemal Atatürk replaced the Arabic script with a Latin alphabet.",
    facts: [
      'Належить до огузької гілки тюркських мов.',
      'Османська турецька писалася арабським письмом і рясніла перськими та арабськими запозиченнями.',
      '1928 року Ататюрк провів мовну реформу, запровадивши латинський алфавіт замість арабського.',
      'Тюркські мови аглютинативні — до кореня слова додається довгий ланцюжок суфіксів.',
      'Турецька має сувору гармонію голосних: звучання суфіксів змінюється залежно від голосних у корені.',
    ],
    factsEn: [
      'Belongs to the Oghuz branch of the Turkic languages.',
      'Ottoman Turkish was written in the Arabic script and was heavily loaded with Persian and Arabic loanwords.',
      "In 1928, Atatürk's language reform replaced the Arabic script with a Latin alphabet.",
      "Turkic languages are agglutinative, building long chains of suffixes onto a word's root.",
      'Turkish has strict vowel harmony, where suffix vowels shift to match the vowels in the root.',
    ],
  },
  nl: {
    intro:
      'Нідерландська розвинулася з нижньофранкських діалектів прибережної Північної Європи і, на відміну від німецької, майже не зазнала другого пересуву приголосних. Золоте століття Голландії (XVII ст.) поширило її як мову торгівлі й мореплавства далеко за межі Нідерландів.',
    introEn:
      "Dutch evolved from Low Franconian dialects along the North European coast and, unlike German, was barely touched by the High German consonant shift. The Dutch Golden Age of the 17th century spread it as a language of trade and seafaring far beyond the Netherlands.",
    facts: [
      'Належить до західногерманської групи; найближча родичка — африкаанс.',
      'Уникнула другого верхньонімецького пересуву приголосних, який пережила німецька.',
      'Стандартизувалася завдяки перекладу Біблії Statenvertaling 1637 року.',
      'Дала початок африкаанс — мові, що виникла серед нідерландських колоністів Південної Африки з XVII століття.',
      'У Бельгії та частині Франції нідерландську часто називають фламандською, хоча мовно це той самий стандарт.',
    ],
    factsEn: [
      'Belongs to the West Germanic group; its closest relative is Afrikaans.',
      'Dutch was largely unaffected by the High German consonant shift that reshaped German.',
      'It was standardized through the 1637 Statenvertaling Bible translation.',
      'Dutch gave rise to Afrikaans, which developed among Dutch settlers in South Africa from the 17th century onward.',
      "In Belgium and parts of France, Dutch is often called Flemish, though it's linguistically the same standard language.",
    ],
  },
  vi: {
    intro:
      'В\'єтнамська належить до мон-кхмерської родини, хоча тисячоліття китайського панування залишили в ній величезний шар китайської лексики. Латинізоване письмо куокнгу створили європейські місіонери у XVII столітті, а офіційним воно стало лише на початку XX століття, замінивши китайські ієрогліфи тином.',
    introEn:
      "Vietnamese belongs to the Mon-Khmer family, though a millennium of Chinese rule left it with a huge layer of Chinese-derived vocabulary. The Latin-based Quốc Ngữ script was created by European missionaries in the 17th century but only became official in the early 20th century, replacing the Chinese-character-based Chữ Nôm.",
    facts: [
      'Належить до австроазійської мовної родини, мон-кхмерської гілки.',
      'Тисяча років китайського панування (III ст. до н.е. — X ст. н.е.) наповнила її китайськими запозиченнями.',
      'Середньовічну в\'єтнамську записували складним письмом тином на основі китайських ієрогліфів.',
      'Латинізовану абетку куокнгу створив у XVII столітті єзуїтський місіонер Александр де Род.',
      'Це тональна мова із шістьма тонами, які різняться висотою й контуром голосу.',
    ],
    factsEn: [
      'Belongs to the Austroasiatic language family, Mon-Khmer branch.',
      'A thousand years of Chinese rule (3rd century BCE–10th century CE) filled it with Chinese loanwords.',
      'Medieval Vietnamese was written in Chữ Nôm, a complex script based on Chinese characters.',
      'The Latin-based Quốc Ngữ alphabet was devised in the 17th century by Jesuit missionary Alexandre de Rhodes.',
      "It's a tonal language with six tones, distinguished by pitch and contour.",
    ],
  },
  hi: {
    intro:
      'Гінді походить від санскриту через середньоіндійські пракрити і належить до індоарійської гілки індоєвропейської родини. Сучасний літературний стандарт сформувався на основі говірки кхарі-болі довкола Делі й писемно оформився деванагарі у XIX–XX століттях.',
    introEn:
      'Hindi descends from Sanskrit through the Middle Indo-Aryan Prakrits and belongs to the Indo-Aryan branch of the Indo-European family. Its modern literary standard is based on the Khari Boli dialect around Delhi and was formalized in the Devanagari script in the 19th–20th centuries.',
    facts: [
      'Належить до індоарійської гілки індоєвропейської мовної родини.',
      'Походить через середньоіндійські пракрити від давнього санскриту.',
      'Записується абеткою деванагарі, спільною з санскритом і кількома іншими мовами Індії.',
      'Гінді й урду мають майже спільну розмовну граматику, різнячись переважно писемністю та книжною лексикою.',
      'Стала офіційною мовою Індії 1950 року, поряд з англійською та ще 21 регіональною мовою.',
    ],
    factsEn: [
      'Belongs to the Indo-Aryan branch of the Indo-European language family.',
      'Descends from ancient Sanskrit through the Middle Indo-Aryan Prakrits.',
      'Written in the Devanagari script, shared with Sanskrit and several other Indian languages.',
      'Hindi and Urdu share nearly the same spoken grammar, differing mainly in script and literary vocabulary.',
      'Became an official language of India in 1950, alongside English and 21 other scheduled languages.',
    ],
  },
  bn: {
    intro:
      'Бенгальська — індоарійська мова, що розвинулася з магадхі-пракриту приблизно з X століття. Її власна писемність походить від давньої брахмі, а мова стала символом національної гідності під час Мовного руху в Бангладеш 1952 року.',
    introEn:
      "Bengali is an Indo-Aryan language that developed from Magadhi Prakrit around the 10th century. Its own script descends from ancient Brahmi, and the language became a symbol of national identity during the 1952 Language Movement in what is now Bangladesh.",
    facts: [
      'Належить до індоарійської гілки, розвинулася з магадхі-пракриту.',
      'Використовує власну абетку, споріднену з деванагарі — обидві походять від давньої брахмі.',
      'Рабіндранат Тагор, перший неєвропейський лауреат Нобелівської премії з літератури (1913), писав саме бенгальською.',
      'Мовний рух 1952 року, коли студенти загинули, обстоюючи право на бенгальську мову в Пакистані, дав початок Дню рідної мови ЮНЕСКО.',
      'Це шоста мова світу за кількістю носіїв.',
    ],
    factsEn: [
      'Belongs to the Indo-Aryan branch, developed from Magadhi Prakrit.',
      'Uses its own script, related to Devanagari; both descend from ancient Brahmi.',
      'Rabindranath Tagore, the first non-European Nobel laureate in Literature (1913), wrote in Bengali.',
      "The 1952 Language Movement, in which students died defending the right to use Bengali in Pakistan, inspired UNESCO's International Mother Language Day.",
      "It's the sixth most-spoken language in the world.",
    ],
  },
  id: {
    intro:
      'Індонезійська — стандартизований варіант малайської мови, обраний символом єдності під час Клятви молоді 1928 року, задовго до незалежності Індонезії. Вона слугує спільною мовою для сотень етнічних груп архіпелагу з понад 700 місцевими мовами.',
    introEn:
      "Indonesian is a standardized form of Malay, chosen as a symbol of national unity at the 1928 Youth Pledge, well before Indonesia's independence. It serves as the common language for hundreds of ethnic groups across an archipelago with over 700 local languages.",
    facts: [
      'Належить до австронезійської мовної родини, малайської підгрупи.',
      'Формально проголошена об\'єднавчою мовою на Клятві молоді 1928 року, ще за нідерландського колоніального правління.',
      'Ґрунтується на ріауському діалекті малайської, який здавна був мовою торгівлі архіпелагом.',
      'Для більшості індонезійців вона друга мова — рідною лишається одна з понад 700 місцевих мов.',
      'Використовує латинську абетку без діакритики, що спростило впровадження масової грамотності.',
    ],
    factsEn: [
      'Belongs to the Austronesian language family, Malay subgroup.',
      "Formally declared the unifying language at the 1928 Youth Pledge, still under Dutch colonial rule.",
      'Based on the Riau dialect of Malay, long used as a trade language across the archipelago.',
      "For most Indonesians it's a second language — their mother tongue is one of over 700 local languages.",
      'Uses a Latin alphabet with no diacritics, which helped speed mass literacy campaigns.',
    ],
  },
  pcm: {
    intro:
      'Нігерійський піджин виник у XVII–XVIII століттях у прибережних торгових контактах між британцями та місцевими народами й увібрав лексику англійської на граматичний каркас, близький до нігерійських мов. Сьогодні це, ймовірно, найпоширеніша мова повсякденного спілкування в Нігерії.',
    introEn:
      "Nigerian Pidgin arose in the 17th–18th centuries from coastal trade contact between the British and local peoples, layering English vocabulary onto grammar patterns close to Nigerian languages. Today it's arguably the most widely spoken everyday language in Nigeria.",
    facts: [
      'Виник як контактна мова торгівлі на узбережжі Західної Африки у XVII–XVIII століттях.',
      'Лексика переважно англійська, але граматика й ритм мовлення відображають вплив мов йоруба, ігбо та інших.',
      'Довгий час вважався "зіпсованою" англійською, хоча лінгвісти визнають його повноцінною піджин/креольською мовою зі своєю системою правил.',
      'Ним розмовляють десятки мільйонів людей, часто як спільною мовою між носіями різних нігерійських мов.',
      'Дедалі активніше використовується на радіо, у музиці афробіт та соціальних мережах.',
    ],
    factsEn: [
      'Emerged as a contact trade language on the West African coast in the 17th–18th centuries.',
      'Its vocabulary is mostly English, but its grammar and rhythm reflect the influence of Yoruba, Igbo, and other languages.',
      'Long dismissed as "broken" English, though linguists recognize it as a full pidgin/creole with its own rule system.',
      'Spoken by tens of millions, often as a lingua franca among speakers of different Nigerian languages.',
      'Increasingly used in radio, Afrobeats music, and social media.',
    ],
  },
  fa: {
    intro:
      'Перська — іранська мова з майже 2500-річною писемною традицією, від давньоперських клинописних написів Дарія I до сучасної фарсі. Арабське завоювання VII століття принесло арабське письмо й тисячі запозичень, проте перська зберегла власну індоєвропейську граматичну основу.',
    introEn:
      "Persian is an Iranian language with nearly 2,500 years of written tradition, from the Old Persian cuneiform inscriptions of Darius I to modern Farsi. The 7th-century Arab conquest brought the Arabic script and thousands of loanwords, yet Persian retained its own Indo-European grammatical core.",
    facts: [
      'Належить до іранської гілки індоєвропейської мовної родини.',
      'Давньоперську фіксують клинописні написи царів Ахеменідів, зокрема Дарія I у Бехістуні.',
      'Після арабського завоювання VII століття перейняла арабське письмо й численні арабські запозичення.',
      '"Шахнаме" Фірдоусі (бл. 1000 р.) — епічна поема, що свідомо уникала арабізмів заради чистоти перської мови.',
      'Тісно споріднена з дарі (Афганістан) і таджицькою (Таджикистан) — усі три часто вважають діалектним континуумом.',
    ],
    factsEn: [
      'Belongs to the Iranian branch of the Indo-European language family.',
      'Old Persian is preserved in cuneiform inscriptions of Achaemenid kings, notably Darius I at Behistun.',
      'After the 7th-century Arab conquest, it adopted the Arabic script and many Arabic loanwords.',
      "Ferdowsi's Shahnameh (c. 1000 CE), a national epic, deliberately avoided Arabic words to preserve \"pure\" Persian.",
      'Closely related to Dari (Afghanistan) and Tajik (Tajikistan) — the three are often seen as a dialect continuum.',
    ],
  },
  sw: {
    intro:
      'Суахілі — банту мова, що виникла на узбережжі Східної Африки внаслідок віковічної торгівлі з арабським та перським світом, звідки прийшла значна частина її лексики. Сьогодні це офіційна мова Танзанії, Кенії, Уганди й Африканського Союзу.',
    introEn:
      "Swahili is a Bantu language that emerged on the East African coast through centuries of trade with the Arab and Persian worlds, which supplied much of its vocabulary. Today it's an official language of Tanzania, Kenya, Uganda, and the African Union.",
    facts: [
      'Належить до групи банту нігеро-конголезької мовної родини.',
      'Виникла на суахілійському узбережжі внаслідок торгових контактів з арабським і перським світом.',
      'Донедавна записувалася арабським письмом; латинську абетку впровадили за колоніальних часів.',
      'Запозичила приблизно 20% лексики з арабської мови, зокрема слова про торгівлю, релігію й час.',
      'Стала однією з робочих мов Африканського Союзу та символом панафриканської ідентичності.',
    ],
    factsEn: [
      'Belongs to the Bantu group of the Niger-Congo language family.',
      'Developed on the Swahili Coast through trade contact with the Arab and Persian worlds.',
      'Was written in Arabic script until relatively recently; a Latin alphabet was introduced during the colonial era.',
      'Borrowed roughly 20% of its vocabulary from Arabic, especially words about trade, religion, and time.',
      'Became one of the working languages of the African Union and a symbol of pan-African identity.',
    ],
  },
  ms: {
    intro:
      'Малайська — австронезійська мова, багато століть слугувала торговою лінгва франка Малайського архіпелагу, а султанат Малакка XV століття закріпив за нею статус мови двору, ісламу та комерції. Індонезійська мова — по суті, стандартизований варіант тієї самої малайської.',
    introEn:
      "Malay is an Austronesian language that served for centuries as the trade lingua franca of the Malay Archipelago, and the 15th-century Malacca Sultanate cemented its role as the language of the court, Islam, and commerce. Indonesian is essentially a separately standardized form of the same Malay language.",
    facts: [
      'Належить до австронезійської мовної родини, малайсько-полінезійської гілки.',
      'Століттями була торговою лінгва франка Малайського архіпелагу.',
      'Розквіт султанату Малакка у XV столітті зробив її мовою двору, торгівлі та ісламу в регіоні.',
      'Історично записувалася арабським письмом джаві, яке частково використовують і нині поряд з латинкою.',
      'Індонезійська мова — це, по суті, окремо стандартизований варіант тієї самої малайської.',
    ],
    factsEn: [
      'Belongs to the Austronesian language family, Malayo-Polynesian branch.',
      'Served for centuries as the trade lingua franca of the Malay Archipelago.',
      'The 15th-century Malacca Sultanate made it the language of the court, trade, and Islam in the region.',
      'Historically written in the Jawi Arabic-based script, still used alongside the Latin alphabet today.',
      "Indonesian is, in essence, a separately standardized variety of the same Malay language.",
    ],
  },
  th: {
    intro:
      'Тайська належить до кра-дайської мовної родини й, за традицією, її абетку створив 1283 року король Рамкамхенг Великий, натхненний кхмерським письмом. Це тональна мова, у якій та сама послідовність звуків може мати п\'ять різних значень залежно від тону.',
    introEn:
      "Thai belongs to the Kra-Dai language family, and its script was, by tradition, created in 1283 by King Ramkhamhaeng the Great, inspired by Khmer writing. It's a tonal language in which the same sequence of sounds can carry five different meanings depending on tone.",
    facts: [
      'Належить до кра-дайської мовної родини, а не до сусідніх сино-тибетської чи австроазійської.',
      'Абетку, за традицією, створив 1283 року король Рамкамхенг Великий на основі кхмерського письма.',
      'Тональна мова з п\'ятьма тонами, які повністю змінюють значення слова.',
      'Зазнала значного впливу санскриту й палі через буддизм і придворну культуру Кхмерської імперії.',
      'Тайське письмо не має пробілів між словами в реченні — межі слів визначаються з контексту.',
    ],
    factsEn: [
      'Belongs to the Kra-Dai language family, not to the neighboring Sino-Tibetan or Austroasiatic families.',
      "Its script was, by tradition, devised in 1283 by King Ramkhamhaeng the Great, based on Khmer writing.",
      'A tonal language with five tones that completely change a word\'s meaning.',
      'Heavily influenced by Sanskrit and Pali through Buddhism and Khmer courtly culture.',
      "Thai script has no spaces between words within a sentence — word boundaries are inferred from context.",
    ],
  },
  az: {
    intro:
      'Азербайджанська належить до огузької гілки тюркських мов, тісно споріднена з турецькою. Історично її записували арабським письмом, у радянську добу — кирилицею, а з 1991 року офіційним є латинський алфавіт.',
    introEn:
      "Azerbaijani belongs to the Oghuz branch of the Turkic languages, closely related to Turkish. It was historically written in Arabic script, switched to Cyrillic during the Soviet era, and has used a Latin alphabet officially since 1991.",
    facts: [
      'Належить до огузької гілки тюркських мов, найближча родичка — турецька.',
      'До XX століття записувалася арабським письмом.',
      'За часів СРСР перейшла на кирилицю, а з 1991 року використовує латинську абетку.',
      'Класична азербайджанська поезія XVI століття, зокрема творчість Фізулі, вплинула на всю тюркомовну літературу.',
      'В Ірані азербайджанською розмовляє більше людей, ніж у самому Азербайджані.',
    ],
    factsEn: [
      'Belongs to the Oghuz branch of the Turkic languages; its closest relative is Turkish.',
      'Was written in Arabic script until the 20th century.',
      'Switched to Cyrillic under Soviet rule, then to a Latin alphabet after independence in 1991.',
      'Classical 16th-century Azerbaijani poetry, notably by Fuzûlî, influenced Turkic literature broadly.',
      'More people speak Azerbaijani in Iran than in Azerbaijan itself.',
    ],
  },
  ro: {
    intro:
      'Румунська — єдина східнороманська мова, що вижила, зберігшись у Дакії осторонь від решти романського світу після відходу римських легіонів 271 року. Століття сусідства зі слов\'янами наситили її слов\'янською лексикою поряд із латинською основою.',
    introEn:
      "Romanian is the only surviving Eastern Romance language, having developed in Dacia in relative isolation from the rest of the Romance world after Roman legions withdrew in 271 CE. Centuries alongside Slavic neighbors filled it with Slavic vocabulary layered onto its Latin core.",
    facts: [
      'Єдина східнороманська мова, що збереглася донині.',
      'Розвинулася з народної латини мешканців римської провінції Дакія.',
      'Після виведення римських легіонів 271 року розвивалася відносно ізольовано від інших романських мов.',
      'Запозичила значний шар слов\'янської лексики та кириличне письмо, яке використовувала аж до XIX століття.',
      'У XIX столітті свідомо повернулася до латинської абетки й "релатинізувала" частину лексики.',
    ],
    factsEn: [
      'The only Eastern Romance language to survive to the present day.',
      'Developed from the Vulgar Latin spoken in the Roman province of Dacia.',
      'Evolved in relative isolation from other Romance languages after Roman legions withdrew in 271 CE.',
      'Absorbed a significant layer of Slavic vocabulary and used the Cyrillic script until the 19th century.',
      'In the 19th century, it deliberately switched back to the Latin alphabet and "re-Latinized" part of its vocabulary.',
    ],
  },
  hu: {
    intro:
      'Угорська належить до угорської гілки уральської мовної родини й геть не споріднена із сусідніми слов\'янськими, германськими чи романськими мовами. Її принесли в Карпатський басейн мадярські племена наприкінці IX століття.',
    introEn:
      "Hungarian belongs to the Ugric branch of the Uralic language family and is entirely unrelated to the surrounding Slavic, Germanic, or Romance languages. It was brought into the Carpathian Basin by Magyar tribes at the end of the 9th century.",
    facts: [
      'Належить до уральської мовної родини, споріднена з фінською та естонською лише на дуже глибокому рівні.',
      'Мадярські племена принесли її в Карпатський басейн близько 895 року.',
      'Використовує аглютинативну граматику з великою кількістю відмінків — до 18.',
      'Найдавніша пам\'ятка — "Надгробна промова" (бл. 1192–1195) — перший зв\'язний текст угорською.',
      'Не має граматичного роду й навіть не розрізняє "він/вона" в займеннику третьої особи.',
    ],
    factsEn: [
      'Belongs to the Uralic language family, related to Finnish and Estonian only at a very deep level.',
      'Magyar tribes brought it into the Carpathian Basin around 895 CE.',
      'Uses agglutinative grammar with a large number of cases — as many as 18.',
      'Its oldest surviving text, the "Funeral Sermon" (c. 1192–1195), is the first connected text in Hungarian.',
      "Has no grammatical gender and doesn't even distinguish \"he\" from \"she\" in its third-person pronoun.",
    ],
  },
  cs: {
    intro:
      'Чеська належить до західнослов\'янської групи, тісно споріднена зі словацькою. Після Білогірської битви 1620 року й Габсбурзької германізації мова мало не занепала серед освічених верств, аж поки національне відродження XIX століття не повернуло їй статус літературної мови.',
    introEn:
      "Czech belongs to the West Slavic group, closely related to Slovak. After the 1620 Battle of White Mountain and subsequent Habsburg Germanization, the language nearly vanished from educated use, until the 19th-century National Revival restored it as a literary language.",
    facts: [
      'Належить до західнослов\'янської групи, найближча родичка — словацька.',
      'Після 1620 року й Габсбурзької германізації мова майже зникла з писемної та освіченої сфери.',
      'Національне відродження XIX століття, зокрема праці Йозефа Добровського, відновило чеську як літературну мову.',
      'Використовує систему діакритичних знаків (háček, čárka), яку згодом запозичили й інші слов\'янські латинописемні мови.',
      'Празький лінгвістичний гурток 1920–30-х років, заснований на чеському матеріалі, започаткував структуралізм у мовознавстві.',
    ],
    factsEn: [
      'Belongs to the West Slavic group; its closest relative is Slovak.',
      'After 1620 and Habsburg Germanization, the language nearly disappeared from written and educated use.',
      "The 19th-century National Revival, driven partly by Josef Dobrovský's work, restored Czech as a literary language.",
      'Uses a diacritic system (háček, čárka) later borrowed by other Latin-script Slavic languages.',
      'The Prague Linguistic Circle of the 1920s–30s, built partly on Czech material, helped found linguistic structuralism.',
    ],
  },
  kk: {
    intro:
      'Казахська — кипчацька тюркська мова кочових степів Центральної Азії. Історично писалася арабицею, у 1929–1940 роках коротко латинкою, потім кирилицею за СРСР, а з 2017 року Казахстан поступово переходить на новий латинський алфавіт.',
    introEn:
      "Kazakh is a Kipchak Turkic language of the nomadic steppes of Central Asia. It was historically written in Arabic script, briefly switched to Latin in 1929–1940, then to Cyrillic under the USSR, and since 2017 Kazakhstan has been gradually transitioning to a new Latin alphabet.",
    facts: [
      'Належить до кипчацької гілки тюркських мов.',
      'Тривалий час не мала єдиної писемної норми — це була усна мова кочових степів.',
      'У 1929–1940 роках коротко використовувала латинську абетку, потім перейшла на кирилицю за наказом Москви.',
      'З 2017 року Казахстан офіційно веде поступовий перехід на новий латинський алфавіт.',
      'Багата на епічну усну традицію — акини виконували довгі імпровізовані поеми напам\'ять.',
    ],
    factsEn: [
      'Belongs to the Kipchak branch of the Turkic languages.',
      'For a long time it had no unified written standard — it was the oral language of the nomadic steppes.',
      'Briefly used a Latin alphabet from 1929–1940, then switched to Cyrillic under orders from Moscow.',
      'Since 2017, Kazakhstan has been officially transitioning, step by step, to a new Latin alphabet.',
      'Has a rich oral epic tradition — akyn bards performed long improvised poems from memory.',
    ],
  },
  sv: {
    intro:
      'Шведська розвинулася з давньоскандинавської мови вікінгів і належить до східноскандинавської гілки германських мов. Реформація й переклад Біблії Густава Вази (1541) заклали основу сучасної літературної шведської.',
    introEn:
      "Swedish developed from the Old Norse of the Vikings and belongs to the East Scandinavian branch of the Germanic languages. The Reformation and Gustav Vasa's 1541 Bible translation laid the foundation for modern literary Swedish.",
    facts: [
      'Належить до східноскандинавської гілки германських мов, найближча родичка — данська.',
      'Розвинулася з давньоскандинавської мови епохи вікінгів.',
      'Переклад Біблії 1541 року за короля Густава Вази закріпив основу сучасної літературної мови.',
      'Має тональний наголос — деякі слова розрізняються лише мелодикою вимови.',
      'Понад 300 років, до 1809 року, шведська була також мовою фінської адміністрації та освіченої еліти.',
    ],
    factsEn: [
      'Belongs to the East Scandinavian branch of the Germanic languages; its closest relative is Danish.',
      'Developed from the Old Norse spoken during the Viking Age.',
      "The 1541 Bible translation under King Gustav Vasa established the basis of the modern literary language.",
      'Has pitch accent — some words are distinguished only by their tonal melody.',
      "For over 300 years, until 1809, Swedish was also the language of Finland's administration and educated elite.",
    ],
  },
  ka: {
    intro:
      'Грузинська належить до картвельської мовної родини, не спорідненої ні з індоєвропейськими, ні з тюркськими мовами. Її унікальну абетку створили ще у V столітті для потреб християнського богослужіння, і вона й донині не має великих та малих літер.',
    introEn:
      "Georgian belongs to the Kartvelian language family, unrelated to either the Indo-European or Turkic languages. Its distinctive script was created as early as the 5th century for Christian liturgical use, and it still has no distinction between uppercase and lowercase letters.",
    facts: [
      'Належить до картвельської мовної родини, ізольованої від інших великих груп.',
      'Власну абетку створили близько V століття, невдовзі після ухвалення християнства як державної релігії.',
      'Це одна з небагатьох мов світу без розрізнення великих і малих літер.',
      'Дієслово в грузинській може узгоджуватися одразу з кількома учасниками дії — підметом, прямим і непрямим додатком.',
      'Найдавніша грузинська писемна пам\'ятка — напис у Бір-ель-Кутт (Палестина) 430-х років.',
    ],
    factsEn: [
      'Belongs to the Kartvelian language family, isolated from other major language groups.',
      'Its own script was created around the 5th century, shortly after Christianity became the state religion.',
      'One of the few languages in the world with no uppercase/lowercase letter distinction.',
      'Georgian verbs can agree simultaneously with multiple participants — subject, direct object, and indirect object.',
      'The oldest surviving Georgian inscription is from Bir el-Qutt in Palestine, dating to the 430s.',
    ],
  },
  hr: {
    intro:
      'Хорватська належить до південнослов\'янської групи і донедавна разом із сербською формувала єдину сербохорватську мовну норму. Хорватська писемна традиція має глибоке коріння — від глаголичних текстів середньовіччя до літератури дубровницького Ренесансу.',
    introEn:
      "Croatian belongs to the South Slavic group and, until relatively recently, shared a single Serbo-Croatian standard with Serbian. Croatian's written tradition runs deep, from medieval Glagolitic texts to the Renaissance literature of Dubrovnik.",
    facts: [
      'Належить до південнослов\'янської групи мов.',
      'До розпаду Югославії кодифікувалася разом із сербською як єдина сербохорватська мова.',
      'Середньовічні хорватські тексти писали глаголицею — однією з найдавніших слов\'янських абеток.',
      'Дубровницька республіка XV–XVI століть дала багату літературу хорватською мовою в добу Ренесансу.',
      'Використовує латинську абетку з діакритикою (č, ć, š, ž, đ), на відміну від сербської, яка паралельно використовує й кирилицю.',
    ],
    factsEn: [
      'Belongs to the South Slavic group of languages.',
      "Was codified together with Serbian as a single Serbo-Croatian language before Yugoslavia's breakup.",
      'Medieval Croatian texts were written in Glagolitic, one of the oldest Slavic scripts.',
      'The Republic of Dubrovnik produced a rich body of Renaissance-era literature in Croatian in the 15th–16th centuries.',
      'Uses a Latin alphabet with diacritics (č, ć, š, ž, đ), unlike Serbian, which also uses Cyrillic in parallel.',
    ],
  },
  sr: {
    intro:
      'Сербська належить до південнослов\'янської групи й донедавна утворювала з хорватською спільну сербохорватську мову. Реформа Вука Караджича у XIX столітті спростила кирилицю за принципом "як чуєш, так і пиши".',
    introEn:
      'Serbian belongs to the South Slavic group and, until relatively recently, formed a shared Serbo-Croatian standard with Croatian. Reformer Vuk Karadžić\'s 19th-century reform simplified Cyrillic under the principle "write as you speak."',
    facts: [
      'Належить до південнослов\'янської групи, тісно споріднена з хорватською, боснійською та чорногорською.',
      'Реформатор Вук Караджич у XIX столітті створив фонетичну кирилицю за принципом "один звук — одна літера".',
      'Офіційно використовує і кирилицю, і латинку, які застосовуються паралельно.',
      'Середньовічна сербська писемність тісно пов\'язана з православною церковною традицією.',
      'Розпад Югославії у 1990-х призвів до окремої кодифікації сербської, хорватської, боснійської та чорногорської як самостійних стандартів.',
    ],
    factsEn: [
      'Belongs to the South Slavic group, closely related to Croatian, Bosnian, and Montenegrin.',
      'Reformer Vuk Karadžić created a phonetic Cyrillic alphabet in the 19th century, one letter per sound.',
      'Officially uses both Cyrillic and Latin scripts in parallel.',
      'Medieval Serbian writing is closely tied to Orthodox Church tradition.',
      "Yugoslavia's breakup in the 1990s led to Serbian, Croatian, Bosnian, and Montenegrin being separately codified as distinct standards.",
    ],
  },
  bs: {
    intro:
      'Боснійська належить до південнослов\'янської групи й є частиною діалектного континууму, що донедавна називався сербохорватською мовою. Її окрема ідентичність тісно пов\'язана з боснійськими мусульманами (бошняками) та історичним впливом османської й арабської лексики.',
    introEn:
      "Bosnian belongs to the South Slavic group and forms part of the dialect continuum once known as Serbo-Croatian. Its distinct identity is closely tied to Bosnian Muslims (Bosniaks) and the historical influence of Ottoman and Arabic vocabulary.",
    facts: [
      'Належить до південнослов\'янської групи, взаємно зрозуміла з хорватською, сербською й чорногорською.',
      'До 1990-х кодифікувалася разом з ними як єдина сербохорватська мова.',
      'Позначена помітним шаром турецьких, арабських і перських запозичень через османську спадщину Боснії.',
      'Використовує переважно латинську абетку, хоча кирилиця також офіційно дозволена.',
      'Стала окремо кодифікованою мовою після розпаду Югославії та Боснійської війни 1992–1995 років.',
    ],
    factsEn: [
      'Belongs to the South Slavic group, mutually intelligible with Croatian, Serbian, and Montenegrin.',
      'Was codified together with them as a single Serbo-Croatian language until the 1990s.',
      'Marked by a notable layer of Turkish, Arabic, and Persian loanwords from Bosnia\'s Ottoman heritage.',
      'Mainly uses the Latin alphabet, though Cyrillic is also officially permitted.',
      "Became a separately codified standard after Yugoslavia's breakup and the 1992–1995 Bosnian War.",
    ],
  },
  bg: {
    intro:
      'Болгарська належить до південнослов\'янської групи й стала першою слов\'янською мовою з писемною літературною традицією — саме для неї Кирило й Мефодій створили глаголицю у IX столітті. Староцерковнослов\'янська мова, основа православної літургії, ґрунтувалася на давньоболгарських говірках.',
    introEn:
      "Bulgarian belongs to the South Slavic group and became the first Slavic language with a written literary tradition — Cyril and Methodius created the Glagolitic script for it in the 9th century. Old Church Slavonic, the basis of Orthodox liturgy, was rooted in Old Bulgarian dialects.",
    facts: [
      'Належить до південнослов\'янської групи мов.',
      'Для староболгарської мови Кирило й Мефодій створили у IX столітті глаголичну абетку, згодом замінену кирилицею.',
      'Староцерковнослов\'янська — літургійна мова православного слов\'янського світу — базувалася на давньоболгарських діалектах.',
      'На відміну від майже всіх інших слов\'янських мов, болгарська втратила відмінки іменників, натомість розвинула означений артикль.',
      'День слов\'янської писемності 24 травня відзначають саме на честь Кирила і Мефодія та їхньої абетки.',
    ],
    factsEn: [
      'Belongs to the South Slavic group of languages.',
      'Cyril and Methodius created the Glagolitic alphabet for Old Bulgarian in the 9th century, later replaced by Cyrillic.',
      'Old Church Slavonic, the liturgical language of the Orthodox Slavic world, was based on Old Bulgarian dialects.',
      'Unlike nearly all other Slavic languages, Bulgarian lost noun case endings and instead developed a definite article.',
      'Slavic Literacy Day on May 24 honors Cyril and Methodius and the alphabet they created.',
    ],
  },
  sk: {
    intro:
      'Словацька належить до західнослов\'янської групи, тісно споріднена з чеською, з якою довго була взаємозрозумілою в межах спільної держави. Літературний стандарт кодифікував Людовіт Штур 1843 року на основі центральнословацьких говірок.',
    introEn:
      "Slovak belongs to the West Slavic group, closely related to Czech, with which it remained mutually intelligible for centuries within a shared state. The literary standard was codified by Ľudovít Štúr in 1843, based on central Slovak dialects.",
    facts: [
      'Належить до західнослов\'янської групи, найближча родичка — чеська.',
      'Впродовж багатьох століть розвивалася під угорським та німецьким культурним впливом у складі Угорського королівства.',
      'Людовіт Штур кодифікував словацький літературний стандарт 1843 року на основі центральнословацьких діалектів.',
      'Упродовж існування Чехословаччини (1918–1993) чеська і словацька функціонували як дві близькі офіційні мови.',
      'Вважається однією з найлегших слов\'янських мов для взаємного розуміння з сусідніми мовами завдяки консервативній фонетиці.',
    ],
    factsEn: [
      'Belongs to the West Slavic group; its closest relative is Czech.',
      'Developed for centuries under Hungarian and German cultural influence within the Kingdom of Hungary.',
      "Ľudovít Štúr codified the Slovak literary standard in 1843, based on central Slovak dialects.",
      "During Czechoslovakia's existence (1918–1993), Czech and Slovak functioned as two closely related official languages.",
      'Considered one of the most mutually intelligible Slavic languages with its neighbors, thanks to its relatively conservative phonetics.',
    ],
  },
  hy: {
    intro:
      'Вірменська утворює окрему гілку індоєвропейської родини, не споріднену тісно з жодною іншою живою мовою. Абетку створив чернець Месроп Маштоц 405 року — саме тому Вірменія вважає писемність основою своєї національної ідентичності.',
    introEn:
      "Armenian forms its own separate branch of the Indo-European family, not closely related to any other living language. Its alphabet was created by the monk Mesrop Mashtots in 405 CE — which is why Armenia regards its script as central to national identity.",
    facts: [
      'Формує власну окрему гілку індоєвропейської мовної родини.',
      'Абетку з 36 літер створив Месроп Маштоц 405 року н.е. для перекладу Біблії.',
      'Вірменія першою у світі 301 року прийняла християнство державною релігією, що визначило подальший розвиток мови й писемності.',
      'Історично поділяється на східновірменську (Вірменія, Іран) і західновірменську (діаспора, колишня Османська імперія).',
      'Зазнала значного впливу перської лексики через тривалі контакти з іранським світом.',
    ],
    factsEn: [
      'Forms its own distinct branch of the Indo-European language family.',
      'Its 36-letter alphabet was created by Mesrop Mashtots in 405 CE for translating the Bible.',
      'Armenia was the first nation in the world to adopt Christianity as its state religion, in 301 CE, which shaped the language\'s later development.',
      'Historically splits into Eastern Armenian (Armenia, Iran) and Western Armenian (diaspora, former Ottoman Empire).',
      'Heavily influenced by Persian vocabulary through long contact with the Iranian world.',
    ],
  },
  da: {
    intro:
      'Данська розвинулася з давньоскандинавської мови вікінгів і належить до східноскандинавської гілки германських мов. Датське королівство поширило мову на Норвегію та Ісландію через кількасотлітню унію, а данський правопис зберігає багато німих літер, успадкованих від середньовічної вимови.',
    introEn:
      "Danish developed from the Old Norse of the Vikings and belongs to the East Scandinavian branch of the Germanic languages. Centuries of Danish rule spread the language to Norway and Iceland, and Danish spelling still preserves many silent letters inherited from medieval pronunciation.",
    facts: [
      'Належить до східноскандинавської гілки германських мов, найближча родичка — шведська.',
      'Розвинулася з давньоскандинавської мови епохи вікінгів.',
      'Понад 400 років унії з Данією (1380–1814) зробили данську офіційною мовою письма й освіти в Норвегії.',
      'Данська вимова суттєво спростилася порівняно з написанням — багато приголосних вимовляються ледь чутно або зовсім не вимовляються.',
      'Данська мала значний вплив на розвиток риксмолу (букмолу) — однієї з норвезьких писемних норм.',
    ],
    factsEn: [
      'Belongs to the East Scandinavian branch of the Germanic languages; its closest relative is Swedish.',
      'Developed from the Old Norse spoken during the Viking Age.',
      'Over 400 years of union with Denmark (1380–1814) made Danish the official language of writing and education in Norway.',
      'Danish pronunciation has simplified drastically compared to spelling — many consonants are barely audible or silent.',
      "Danish heavily shaped the development of Bokmål, one of Norway's two written standards.",
    ],
  },
  fi: {
    intro:
      'Фінська належить до фінської гілки уральської мовної родини й геть не споріднена зі шведською чи іншими германськими мовами-сусідами. Століття шведського й пізніше російського панування не завадили фінській зберегти унікальну аглютинативну граматику з п\'ятнадцятьма відмінками.',
    introEn:
      "Finnish belongs to the Finnic branch of the Uralic language family and is entirely unrelated to Swedish or the other neighboring Germanic languages. Centuries of Swedish and later Russian rule didn't stop Finnish from keeping its unique agglutinative grammar with fifteen noun cases.",
    facts: [
      'Належить до уральської мовної родини, споріднена з естонською та, дуже віддалено, з угорською.',
      'Понад 600 років Фінляндія перебувала під шведським правлінням, і шведська довго лишалася мовою еліти.',
      'Микаель Аґрікола створив писемну фінську мову й переклав Новий Завіт у XVI столітті.',
      'Має 15 відмінків іменника — один з найбільших наборів серед європейських мов.',
      'Наголос завжди падає на перший склад слова, незалежно від його довжини.',
    ],
    factsEn: [
      'Belongs to the Uralic language family, related to Estonian and, much more distantly, to Hungarian.',
      'Finland was under Swedish rule for over 600 years, and Swedish long remained the language of the elite.',
      'Mikael Agricola created written Finnish and translated the New Testament in the 16th century.',
      'Has 15 noun cases — one of the largest case systems among European languages.',
      "Word stress always falls on the first syllable, regardless of the word's length.",
    ],
  },
  no: {
    intro:
      'Норвезька розвинулася з давньоскандинавської, але після сторіч данського панування розкололася на дві офіційні писемні норми — букмол, близький до данської, і нюношк, створений Іваром Осеном у XIX столітті на основі сільських діалектів.',
    introEn:
      "Norwegian developed from Old Norse, but after centuries of Danish rule it split into two official written standards — Bokmål, close to Danish, and Nynorsk, created by Ivar Aasen in the 19th century from rural dialects.",
    facts: [
      'Належить до східноскандинавської (за деякими класифікаціями — окремої) гілки германських мов.',
      'Понад 400 років унії з Данією (1380–1814) наблизили писемну норвезьку до данської.',
      'Івар Осен у 1840-х роках створив нюношк — писемний стандарт на основі західнонорвезьких сільських діалектів, як противагу данському впливу.',
      'Сьогодні в Норвегії офіційно співіснують дві писемні форми — букмол і нюношк.',
      'Розмовна норвезька має надзвичайно велику діалектну варіативність, яку суспільство активно шанує й підтримує.',
    ],
    factsEn: [
      'Belongs to the East Scandinavian branch of the Germanic languages (some classifications treat it separately).',
      'Over 400 years of union with Denmark (1380–1814) brought written Norwegian close to Danish.',
      'In the 1840s, Ivar Aasen created Nynorsk, a written standard based on western Norwegian rural dialects, as a counterweight to Danish influence.',
      'Norway today officially maintains two parallel written forms — Bokmål and Nynorsk.',
      'Spoken Norwegian has extremely wide dialectal variation, which society actively values and preserves.',
    ],
  },
  lt: {
    intro:
      'Литовська належить до балтійської гілки індоєвропейської родини й вважається однією з найархаїчніших живих індоєвропейських мов — вона зберегла риси, близькі до реконструйованої праіндоєвропейської мови, втрачені майже всюди інші.',
    introEn:
      "Lithuanian belongs to the Baltic branch of the Indo-European family and is considered one of the most archaic living Indo-European languages — it retains features close to reconstructed Proto-Indo-European that have been lost almost everywhere else.",
    facts: [
      'Належить до балтійської гілки індоєвропейської родини, найближча родичка — латиська.',
      'Лінгвісти вважають литовську однією з найконсервативніших індоєвропейських мов за фонетикою й морфологією.',
      'Найдавніша друкована книга литовською — катехизис Мартінаса Мажвідаса 1547 року.',
      'Царська Росія забороняла друк литовською латинкою у 1864–1904 роках, змушуючи використовувати кирилицю.',
      'Зберігає складну систему з семи відмінків і тонального наголосу, подібного до давньогрецького чи санскриту.',
    ],
    factsEn: [
      'Belongs to the Baltic branch of the Indo-European family; its closest relative is Latvian.',
      'Linguists consider Lithuanian one of the most conservative Indo-European languages in phonetics and morphology.',
      "The earliest printed Lithuanian book is Martynas Mažvydas's catechism from 1547.",
      'Imperial Russia banned printing in the Latin alphabet from 1864–1904, forcing the use of Cyrillic instead.',
      'Retains a complex system of seven cases and pitch accent, similar in kind to Ancient Greek or Sanskrit.',
    ],
  },
  lv: {
    intro:
      'Латиська, як і литовська, належить до балтійської гілки індоєвропейської родини. Століття німецького панування в Прибалтиці залишили в латиській мові помітний шар германських запозичень, а сучасна літературна норма сформувалася лише в кінці XIX століття.',
    introEn:
      "Latvian, like Lithuanian, belongs to the Baltic branch of the Indo-European family. Centuries of German rule in the Baltics left Latvian with a notable layer of Germanic loanwords, and its modern literary standard only took shape at the end of the 19th century.",
    facts: [
      'Належить до балтійської гілки індоєвропейської родини, найближча родичка — литовська.',
      'Століттями розвивалася під владою німецьких лицарських орденів і балтійсько-німецької знаті.',
      'Перші друковані книги латиською з\'явилися у XVI столітті завдяки лютеранським місіонерам.',
      'Літературна норма остаточно сформувалася під час латиського національного відродження кінця XIX століття.',
      'Має фіксований наголос на першому складі й тональні відмінності голосних, подібно до литовської.',
    ],
    factsEn: [
      'Belongs to the Baltic branch of the Indo-European family; its closest relative is Lithuanian.',
      'Developed for centuries under the rule of German crusading orders and the Baltic German nobility.',
      'The first printed Latvian books appeared in the 16th century through Lutheran missionary work.',
      "Its literary standard was finalized during the Latvian national awakening of the late 19th century.",
      'Has fixed first-syllable stress and tonal vowel distinctions, similar to Lithuanian.',
    ],
  },
  et: {
    intro:
      'Естонська належить до фінської гілки уральської мовної родини й тісно споріднена з фінською, а не з сусідніми балтійськими чи слов\'янськими мовами. Століття німецького й шведського панування залишили в ній чималий шар германських запозичень.',
    introEn:
      "Estonian belongs to the Finnic branch of the Uralic language family and is closely related to Finnish rather than to the neighboring Baltic or Slavic languages. Centuries of German and Swedish rule left it with a substantial layer of Germanic loanwords.",
    facts: [
      'Належить до уральської мовної родини, найближча родичка — фінська.',
      'Століттями перебувала під владою балтійських німців, шведів і Російської імперії, зберігаючи власну мову переважно в селянському середовищі.',
      'Не має граматичного роду й прийменників — натомість використовує до 14 відмінків.',
      'Наголос завжди падає на перший склад слова.',
      'Перші друковані зразки народної естонської мови з\'явилися у XVII–XVIII століттях.',
    ],
    factsEn: [
      'Belongs to the Uralic language family; its closest relative is Finnish.',
      'Was ruled for centuries by Baltic Germans, Swedes, and the Russian Empire, with the language surviving mainly among peasants.',
      'Has no grammatical gender or prepositions — instead using as many as 14 noun cases.',
      'Word stress always falls on the first syllable.',
      'Early printed examples of vernacular Estonian date to the 17th–18th centuries.',
    ],
  },
  sl: {
    intro:
      'Словенська належить до південнослов\'янської групи й вирізняється тим, що зберегла подвійне число — граматичну форму для позначення саме двох предметів, втрачену більшістю інших слов\'янських мов. Перші друковані книги словенською видав протестантський реформатор Приможе Трубар у XVI столітті.',
    introEn:
      "Slovenian belongs to the South Slavic group and stands out for preserving the dual grammatical number — a form marking exactly two of something — which most other Slavic languages have lost. The first printed Slovenian books were published by Protestant reformer Primož Trubar in the 16th century.",
    facts: [
      'Належить до південнослов\'янської групи мов.',
      'Одна з небагатьох слов\'янських мов, що зберегла подвійне число поряд з одниною й множиною.',
      'Приможе Трубар видав перші друковані словенські книги у 1550-х роках у межах протестантської Реформації.',
      'Має надзвичайно велику діалектну різноманітність як для такої невеликої мовної території.',
      'Стала офіційною мовою незалежної Словенії після розпаду Югославії 1991 року.',
    ],
    factsEn: [
      'Belongs to the South Slavic group of languages.',
      'One of the few Slavic languages to preserve the dual grammatical number alongside singular and plural.',
      'Primož Trubar published the first printed Slovenian books in the 1550s as part of the Protestant Reformation.',
      'Has an unusually wide range of dialects for such a small language territory.',
      "Became the official language of independent Slovenia after Yugoslavia's breakup in 1991.",
    ],
  },
  mk: {
    intro:
      'Македонська належить до південнослов\'янської групи й найближче споріднена з болгарською, з якою утворює діалектний континуум. Її кодифікували як окрему літературну мову лише 1944 року, у соціалістичній Югославії.',
    introEn:
      "Macedonian belongs to the South Slavic group and is most closely related to Bulgarian, with which it forms a dialect continuum. It was codified as a separate literary language only in 1944, within socialist Yugoslavia.",
    facts: [
      'Належить до південнослов\'янської групи, найближча родичка — болгарська.',
      'Формує з болгарською діалектний континуум без чіткого мовного кордону.',
      'Кодифікована як окрема літературна мова 1944 року в межах Соціалістичної Республіки Македонія.',
      'Використовує кирилицю з кількома літерами, спільними з сербською абеткою.',
      'На відміну від більшості слов\'янських мов, втратила відмінки іменників, як і болгарська.',
    ],
    factsEn: [
      'Belongs to the South Slavic group; its closest relative is Bulgarian.',
      'Forms a dialect continuum with Bulgarian with no sharp linguistic border.',
      'Was codified as a separate literary language in 1944 within the Socialist Republic of Macedonia.',
      'Uses a Cyrillic alphabet sharing several letters with the Serbian alphabet.',
      'Like Bulgarian, and unlike most Slavic languages, it lost noun case endings.',
    ],
  },
  sq: {
    intro:
      'Албанська утворює окрему гілку індоєвропейської родини й вважається нащадком давніх іллірійських або мессапських мов Балкан, хоча її пряме походження досі остаточно не встановлено. Століття османського панування залишили в ній значний шар турецьких запозичень.',
    introEn:
      "Albanian forms its own separate branch of the Indo-European family and is thought to descend from ancient Illyrian or Messapic languages of the Balkans, though its exact origin remains unsettled. Centuries of Ottoman rule left it with a significant layer of Turkish loanwords.",
    facts: [
      'Формує власну окрему гілку індоєвропейської мовної родини.',
      'Її точне походження серед давніх балканських мов (іллірійська, мессапська, фракійська) досі є предметом наукових дискусій.',
      'Ділиться на дві основні діалектні групи — геґ на півночі та тоск на півдні.',
      'Сучасний літературний стандарт, ухвалений 1972 року, базується переважно на тоскському діалекті.',
      'Століття османського панування наситили албанську турецькими, а також грецькими й слов\'янськими запозиченнями.',
    ],
    factsEn: [
      'Forms its own distinct branch of the Indo-European language family.',
      'Its precise descent among ancient Balkan languages (Illyrian, Messapic, Thracian) remains debated among linguists.',
      'Splits into two main dialect groups — Gheg in the north and Tosk in the south.',
      'The modern literary standard, adopted in 1972, is based mainly on the Tosk dialect.',
      'Centuries of Ottoman rule filled Albanian with Turkish loanwords, alongside Greek and Slavic influence.',
    ],
  },
  is: {
    intro:
      'Ісландська — найбільш архаїчна з живих скандинавських мов, майже незмінна з часів заселення острова вікінгами у IX столітті. Ісландці й досі здатні читати середньовічні саги в оригіналі без спеціальної підготовки.',
    introEn:
      "Icelandic is the most archaic of the living Scandinavian languages, remarkably little changed since Vikings settled the island in the 9th century. Icelanders can still read medieval sagas in the original without special training.",
    facts: [
      'Належить до західноскандинавської гілки германських мов, найближча родичка — фарерська.',
      'Заселення Ісландії вікінгами у IX столітті принесло на острів давньоскандинавську мову, яка відтоді змінилася на диво мало.',
      'Ісландці й нині можуть читати середньовічні саги XIII століття практично без перекладу.',
      'Мовна політика Ісландії свідомо уникає запозичень, натомість кує нові слова з власних коренів — наприклад, "tölva" ("комп\'ютер") із "число" й "провидиця".',
      'Ісландці досі використовують систему батьківських імен (патронімів) замість прізвищ у західному сенсі.',
    ],
    factsEn: [
      'Belongs to the West Scandinavian branch of the Germanic languages; its closest relative is Faroese.',
      'Viking settlement of Iceland in the 9th century brought Old Norse to the island, which has since changed remarkably little.',
      "Icelanders can still read 13th-century medieval sagas largely without translation.",
      'Icelandic language policy deliberately avoids loanwords, coining new words from native roots instead — e.g., "tölva" ("computer") from "number" and "seeress."',
      'Icelanders still use a patronymic naming system instead of Western-style surnames.',
    ],
  },
  cy: {
    intro:
      'Валлійська належить до бриттської гілки кельтських мов і є прямим нащадком мови бриттів, що населяли більшу частину Британії до англосаксонського завоювання. Попри століття тиску англійської, вона лишається живою мовою завдяки міцній системі валлійськомовної освіти й медіа.',
    introEn:
      "Welsh belongs to the Brittonic branch of the Celtic languages and is a direct descendant of the Brittonic language spoken across most of Britain before the Anglo-Saxon conquest. Despite centuries of pressure from English, it remains a living language thanks to a strong system of Welsh-medium education and media.",
    facts: [
      'Належить до бриттської гілки кельтських мов, споріднена з корнською та бретонською.',
      'Прямий нащадок мови бриттів, витісненої англосаксами з більшої частини Британії у V–VII століттях.',
      '"Мабіногіон" — збірка середньовічних валлійських прозових оповідей, одна з найважливіших пам\'яток кельтської літератури.',
      'Закон про валлійську мову 1993 року й пізніші акти надали їй рівний офіційний статус з англійською в Уельсі.',
      'Має унікальну систему початкових мутацій, коли перша приголосна слова змінюється залежно від граматичного контексту.',
    ],
    factsEn: [
      'Belongs to the Brittonic branch of the Celtic languages, related to Cornish and Breton.',
      'A direct descendant of the Brittonic language, pushed out of most of Britain by the Anglo-Saxons in the 5th–7th centuries.',
      'The Mabinogion, a collection of medieval Welsh prose tales, is one of the key works of Celtic literature.',
      'The 1993 Welsh Language Act and later legislation gave Welsh equal official status with English in Wales.',
      "Has a distinctive system of initial consonant mutations, where a word's first sound shifts depending on grammatical context.",
    ],
  },
  ga: {
    intro:
      'Ірландська належить до гойдельської гілки кельтських мов і має одну з найдавніших писемних традицій Європи на північ від Альп — огамічне письмо на камінних стовпах сягає IV століття. Попри статус першої офіційної мови Ірландії, англійська витіснила її з повсякденного вжитку більшості населення ще у XIX столітті.',
    introEn:
      "Irish belongs to the Goidelic branch of the Celtic languages and has one of the oldest written traditions in Europe north of the Alps — Ogham inscriptions on standing stones date back to the 4th century. Despite being the Republic of Ireland's first official language, English displaced it from most people's daily use by the 19th century.",
    facts: [
      'Належить до гойдельської гілки кельтських мов, споріднена з шотландською гельською та мангською.',
      'Огамічне письмо на кам\'яних стовпах — найдавніша форма писемної ірландської, датована приблизно IV–VI століттями.',
      'Великий голод 1840-х років і масова еміграція різко скоротили кількість носіїв мови.',
      'Є першою офіційною мовою Республіки Ірландія за конституцією, хоча англійською розмовляє переважна більшість населення.',
      'Регіони, де ірландська лишається мовою повсякденного спілкування, називають Ґелтахт.',
    ],
    factsEn: [
      'Belongs to the Goidelic branch of the Celtic languages, related to Scottish Gaelic and Manx.',
      'Ogham inscriptions on standing stones are the earliest form of written Irish, dating to roughly the 4th–6th centuries.',
      'The Great Famine of the 1840s and mass emigration sharply reduced the number of speakers.',
      "Constitutionally the first official language of the Republic of Ireland, though English is spoken by the vast majority.",
      'Regions where Irish remains the everyday language are known as the Gaeltacht.',
    ],
  },
  tl: {
    intro:
      'Тагальська — австронезійська мова центрального Лусону, яку 1937 року обрано основою для національної мови Філіппін, згодом названої філіппінською. Столітня іспанська колонізація залишила в ній тисячі іспанських запозичень, а американське правління XX століття додало англійський шар.',
    introEn:
      "Tagalog is an Austronesian language of central Luzon that was chosen in 1937 as the basis for the Philippines' national language, later renamed Filipino. Centuries of Spanish colonization left thousands of Spanish loanwords, and 20th-century American rule added a layer of English.",
    facts: [
      'Належить до австронезійської мовної родини, філіппінської підгрупи.',
      '1937 року президент Мануель Кесон обрав тагальську основою майбутньої національної мови Філіппін.',
      'Понад 300 років іспанської колонізації дали мові тисячі іспанських запозичень — навіть числівники нерідко вживають іспанською.',
      'Історично записувалася силабічним письмом байбайін, витісненим латинкою за іспанських часів.',
      'Сучасна філіппінська мова офіційно включає елементи інших філіппінських мов, а не тільки тагальської.',
    ],
    factsEn: [
      'Belongs to the Austronesian language family, Philippine subgroup.',
      "In 1937, President Manuel Quezon selected Tagalog as the basis for the future Philippine national language.",
      'Over 300 years of Spanish colonization left the language thousands of Spanish loanwords — even numbers are often used in Spanish.',
      'Historically written in the Baybayin syllabic script, displaced by the Latin alphabet under Spanish rule.',
      'Modern Filipino officially incorporates elements from other Philippine languages, not just Tagalog.',
    ],
  },
  mn: {
    intro:
      'Монгольська мова об\'єднала кочові племена степу в XIII столітті під час завоювань Чингісхана, коли для неї вперше створили писемність на основі уйгурського алфавіту. За часів СРСР Монголія перейшла на кирилицю, тоді як у Внутрішній Монголії (Китай) досі використовують традиційне вертикальне письмо.',
    introEn:
      "Mongolian united the nomadic tribes of the steppe in the 13th century during Genghis Khan's conquests, when a script based on the Uyghur alphabet was first created for it. Under the USSR, Mongolia switched to Cyrillic, while Inner Mongolia (China) still uses the traditional vertical script.",
    facts: [
      'Належить до монгольської мовної родини Центральної Азії.',
      'Традиційну вертикальну писемність створили на основі уйгурського алфавіту на початку XIII століття, за Чингісхана.',
      '"Таємна історія монголів" (бл. 1240 р.) — найдавніша відома пам\'ятка монгольської літератури.',
      'Монголія перейшла на кирилицю 1941 року під радянським впливом; традиційне письмо збереглося у Внутрішній Монголії, Китай.',
      'З 2020-х років Монголія поступово відновлює традиційну вертикальну писемність поряд із кирилицею.',
    ],
    factsEn: [
      'Belongs to the Mongolic language family of Central Asia.',
      'The traditional vertical script was created from the Uyghur alphabet in the early 13th century under Genghis Khan.',
      'The "Secret History of the Mongols" (c. 1240) is the oldest known work of Mongolian literature.',
      'Mongolia switched to Cyrillic in 1941 under Soviet influence; the traditional script survived in Inner Mongolia, China.',
      'Since the 2020s, Mongolia has been gradually reviving the traditional vertical script alongside Cyrillic.',
    ],
  },
  uz: {
    intro:
      'Узбецька — карлуцька тюркська мова Центральної Азії, тісно пов\'язана зі середньовічною чаґатайською літературною мовою, якою писав поет Алішер Навої. Як і інші центральноазійські тюркські мови, вона змінювала письмо тричі за останнє століття.',
    introEn:
      "Uzbek is a Karluk Turkic language of Central Asia, closely tied to the medieval Chagatai literary language used by the poet Alisher Navoi. Like other Central Asian Turkic languages, it changed its script three times over the last century.",
    facts: [
      'Належить до карлуцької гілки тюркських мов, найближча родичка — уйгурська.',
      'Розвинулася зі середньовічної чаґатайської літературної мови Центральної Азії.',
      'Алішер Навої (XV ст.) — класик, чия творчість утвердила тюркську як мову високої поезії поруч з перською.',
      'Змінювала писемність тричі за XX століття: арабиця → латинка (1920-ті) → кирилиця (1940-ві) → знову латинка (з 1993 року).',
      'На відміну від багатьох тюркських мов, сучасна узбецька втратила сингармонізм голосних.',
    ],
    factsEn: [
      'Belongs to the Karluk branch of the Turkic languages; its closest relative is Uyghur.',
      'Developed from the medieval Chagatai literary language of Central Asia.',
      'Alisher Navoi (15th century) is a classical poet whose work established Turkic as a language of high poetry alongside Persian.',
      'Changed its script three times in the 20th century: Arabic → Latin (1920s) → Cyrillic (1940s) → Latin again (since 1993).',
      'Unlike many Turkic languages, modern Uzbek lost vowel harmony.',
    ],
  },
  am: {
    intro:
      'Амхарська належить до ефіосемітської гілки семітських мов і століттями була мовою імператорського двору Ефіопії. Вона використовує унікальне складове письмо ґеез, що походить від давньої мови церковних текстів, якою вже майже ніхто не розмовляє.',
    introEn:
      "Amharic belongs to the Ethio-Semitic branch of the Semitic languages and was for centuries the language of the Ethiopian imperial court. It uses the distinctive Ge'ez syllabary, descended from the ancient liturgical language that almost no one speaks anymore.",
    facts: [
      'Належить до ефіосемітської гілки семітської мовної родини, споріднена з тигринською.',
      'Записується складовим письмом ґеез — однією з найдавніших писемностей Африки, що й нині використовують для богослужіння.',
      'Століттями була мовою імператорського двору й адміністрації Ефіопської імперії.',
      'Ефіопія — одна з небагатьох африканських країн, що ніколи не була європейською колонією, тому амхарська розвивалася без нав\'язаного колоніального письма.',
      'Друга за поширеністю семітська мова світу після арабської.',
    ],
    factsEn: [
      'Belongs to the Ethio-Semitic branch of the Semitic language family, related to Tigrinya.',
      "Written in the Ge'ez syllabary, one of Africa's oldest scripts, still used for religious texts today.",
      'Was the language of the Ethiopian imperial court and administration for centuries.',
      'Ethiopia is one of the few African countries never colonized by a European power, so Amharic developed without an imposed colonial script.',
      'The second most-spoken Semitic language in the world after Arabic.',
    ],
  },
  ta: {
    intro:
      'Тамільська належить до дравідійської мовної родини й має одну з найдовших безперервних літературних традицій світу — санґамська поезія датується щонайменше II століттям до н.е. Це офіційна мова індійського штату Таміл Наду, Шрі-Ланки й Сінгапуру.',
    introEn:
      "Tamil belongs to the Dravidian language family and has one of the longest continuous literary traditions in the world — Sangam poetry dates back to at least the 2nd century BCE. It's an official language of the Indian state of Tamil Nadu, Sri Lanka, and Singapore.",
    facts: [
      'Належить до дравідійської мовної родини, не спорідненої з індоєвропейськими мовами Північної Індії.',
      'Санґамська література (бл. III ст. до н.е. — III ст. н.е.) — один із найдавніших корпусів світської поезії у світі.',
      'Використовує власне складове письмо, що походить від давньої тамільсько-брахмі.',
      'Офіційно визнана "класичною мовою" урядом Індії 2004 року — першою серед усіх мов країни.',
      'Одна з небагатьох мов світу з безперервною літературною традицією понад 2000 років без істотного розриву.',
    ],
    factsEn: [
      'Belongs to the Dravidian language family, unrelated to the Indo-European languages of North India.',
      'Sangam literature (c. 3rd century BCE – 3rd century CE) is one of the oldest bodies of secular poetry in the world.',
      'Uses its own syllabic script, descended from ancient Tamil-Brahmi.',
      'Officially recognized as a "classical language" by the Indian government in 2004 — the first language in the country to receive that status.',
      'One of the few languages with an unbroken literary tradition spanning over 2,000 years.',
    ],
  },
  pa: {
    intro:
      'Панджабі — індоарійська мова регіону Пенджаб, унікальна серед індійських мов тим, що є тональною. Сикхські гуру у XVI столітті створили для неї писемність ґурмукгі спеціально для запису священної книги "Ґуру Ґрант Сахіб".',
    introEn:
      "Punjabi is an Indo-Aryan language of the Punjab region, unusual among Indian languages for being tonal. Sikh gurus created the Gurmukhi script for it in the 16th century specifically to record the sacred Guru Granth Sahib.",
    facts: [
      'Належить до індоарійської гілки індоєвропейської мовної родини.',
      'Одна з небагатьох тональних мов Південної Азії — три тони виникли внаслідок втрати придихових приголосних.',
      'Гуру Ангад Дев у XVI столітті стандартизував письмо ґурмукгі для сикхських релігійних текстів.',
      'У Пакистані панджабі здебільшого записують арабським письмом шахмукгі, а в Індії — ґурмукгі.',
      'Багата на усну традицію бгангри та народних балад, які поширилися по всьому світу разом з панджабською діаспорою.',
    ],
    factsEn: [
      'Belongs to the Indo-Aryan branch of the Indo-European language family.',
      "One of the few tonal languages of South Asia — its three tones arose from the loss of aspirated consonants.",
      'Guru Angad Dev standardized the Gurmukhi script in the 16th century for Sikh religious texts.',
      'In Pakistan, Punjabi is mostly written in the Arabic-based Shahmukhi script; in India, in Gurmukhi.',
      'Has a rich oral tradition of bhangra and folk ballads that spread worldwide with the Punjabi diaspora.',
    ],
  },
  zu: {
    intro:
      'Зулуська — мова групи нгуні банту мовної родини, що стала домінантною мовою Південної Африки завдяки об\'єднанню зулуських кланів під владою короля Чаки на початку XIX століття. Її характерні клацаючі приголосні запозичені з сусідніх койсанських мов.',
    introEn:
      "Zulu belongs to the Nguni group of the Bantu language family and became a dominant language of Southern Africa after King Shaka united the Zulu clans in the early 19th century. Its distinctive click consonants were borrowed from neighboring Khoisan languages.",
    facts: [
      'Належить до групи нгуні мов банту, найближчі родички — коса та ндебеле.',
      'Король Чака на початку XIX століття об\'єднав розрізнені клани в потужне Зулуське королівство, поширивши мову далеко за межі первинної території.',
      'Має клацаючі приголосні, запозичені через контакт із койсанськими мовами Південної Африки.',
      'Найпоширеніша рідна мова Південно-Африканської Республіки за кількістю носіїв.',
      'Місіонери створили писемну норму зулуської на основі латинки лише у XIX столітті.',
    ],
    factsEn: [
      'Belongs to the Nguni group of Bantu languages, closely related to Xhosa and Ndebele.',
      'King Shaka united scattered clans into a powerful Zulu kingdom in the early 19th century, spreading the language far beyond its original territory.',
      'Has click consonants, borrowed through contact with the Khoisan languages of Southern Africa.',
      'The most widely spoken home language in South Africa.',
      'Missionaries created a Latin-based written standard for Zulu only in the 19th century.',
    ],
  },
  af: {
    intro:
      'Африкаанс розвинулася з нідерландської мови поселенців Капської колонії з кінця XVII століття, змішавшись із малайськими, койсанськими та африканськими мовами рабів і місцевого населення. Це одна з наймолодших мов, кодифікованих як окремий стандарт, — лише на початку XX століття.',
    introEn:
      "Afrikaans developed from the Dutch of Cape Colony settlers from the late 17th century, blending with Malay, Khoisan, and other African languages spoken by slaves and indigenous peoples. It's one of the youngest languages to be codified as a separate standard — only in the early 20th century.",
    facts: [
      'Розвинулася з нідерландської мови голландських поселенців Капської колонії з 1652 року.',
      'Зазнала значного впливу малайської, португальської, койсанських і африканських мов рабів і місцевих народів.',
      'Спрощена граматика — майже без дієвідмінювання й відмінків — відрізняє її від нідерландської.',
      'Визнана окремою мовою, відмінною від нідерландської, лише 1925 року.',
      'Найдавніші відомі тексти африкаанс написані арабським письмом мусульманською капською громадою у XIX столітті.',
    ],
    factsEn: [
      'Developed from the Dutch of Cape Colony settlers starting in 1652.',
      'Heavily influenced by Malay, Portuguese, Khoisan, and African languages spoken by slaves and local peoples.',
      'Its simplified grammar — almost no verb conjugation or noun cases — sets it apart from Dutch.',
      'Recognized as a language distinct from Dutch only in 1925.',
      'The earliest known Afrikaans texts were written in Arabic script by the Muslim Cape community in the 19th century.',
    ],
  },
  ky: {
    intro:
      'Киргизька — кипчацька тюркська мова кочових народів Тянь-Шаню, відома насамперед завдяки "Манасу" — найдовшому усному епосу у світі, який виконують напам\'ять сказителі-манасчі. Як і сусідні мови регіону, вона тричі змінювала писемність за останнє століття.',
    introEn:
      "Kyrgyz is a Kipchak Turkic language of the nomadic peoples of the Tian Shan mountains, best known for the \"Epic of Manas\" — the longest oral epic in the world, performed from memory by manaschi bards. Like neighboring languages of the region, it changed its script three times over the last century.",
    facts: [
      'Належить до кипчацької гілки тюркських мов.',
      '"Манас" — усний героїчний епос обсягом у сотні тисяч рядків, який досі виконують напам\'ять сказителі-манасчі.',
      'Змінювала письмо: арабиця → латинка (1928) → кирилиця (1940), яку використовують і донині.',
      'Кочовий спосіб життя киргизів зберіг у мові багатий словник, пов\'язаний з кіньми, юртами й пасовищами.',
      'Офіційна мова Киргизстану поряд з російською.',
    ],
    factsEn: [
      'Belongs to the Kipchak branch of the Turkic languages.',
      'The "Epic of Manas" is an oral heroic epic hundreds of thousands of lines long, still performed from memory by manaschi bards.',
      'Changed scripts: Arabic → Latin (1928) → Cyrillic (1940), which is still used today.',
      'The Kyrgyz nomadic lifestyle preserved a rich vocabulary related to horses, yurts, and pastures.',
      'An official language of Kyrgyzstan alongside Russian.',
    ],
  },
  tg: {
    intro:
      'Таджицька — фактично різновид перської мови, що розвивався в Центральній Азії окремо від Ірану після монгольських завоювань. На відміну від перської та дарі, які записуються арабицею, таджицька з радянських часів використовує кирилицю.',
    introEn:
      "Tajik is, in effect, a variety of Persian that developed in Central Asia separately from Iran after the Mongol conquests. Unlike Persian and Dari, which use the Arabic script, Tajik has used Cyrillic since Soviet times.",
    facts: [
      'Належить до іранської гілки індоєвропейської родини, дуже близька до перської мови Ірану й дарі Афганістану.',
      'Ці три мови настільки близькі, що часто розглядаються як варіанти однієї перської мови.',
      'На відміну від перської та дарі, записується кирилицею — спадщина радянської мовної політики 1930–40-х років.',
      'Бухара й Самарканд, історичні центри перськомовної культури, нині перебувають на території Узбекистану, а не Таджикистану.',
      'Зберегла архаїчнішу лексику, ніж сучасна іранська перська, менше зазнавши французького й арабського впливу XX століття.',
    ],
    factsEn: [
      'Belongs to the Iranian branch of the Indo-European family, very close to the Persian of Iran and the Dari of Afghanistan.',
      "The three languages are similar enough that they're often treated as varieties of a single Persian language.",
      'Unlike Persian and Dari, it\'s written in Cyrillic, a legacy of Soviet language policy in the 1930s–40s.',
      'Bukhara and Samarkand, historic centers of Persian-speaking culture, now lie in Uzbekistan rather than Tajikistan.',
      'Retains more archaic vocabulary than modern Iranian Persian, having been less exposed to 20th-century French and Arabic influence.',
    ],
  },
  tk: {
    intro:
      'Туркменська — огузька тюркська мова, тісно споріднена з турецькою й азербайджанською, що розвивалася серед кочових туркменських племен пустелі Каракуми. Як і сусідні центральноазійські мови, вона перейшла з арабиці на латинку, потім на кирилицю, а з 1990-х знову на латинку.',
    introEn:
      "Turkmen is an Oghuz Turkic language, closely related to Turkish and Azerbaijani, that developed among the nomadic Turkmen tribes of the Karakum Desert. Like neighboring Central Asian languages, it moved from Arabic to Latin script, then Cyrillic, and back to Latin since the 1990s.",
    facts: [
      'Належить до огузької гілки тюркських мов, найближчі родички — турецька та азербайджанська.',
      'Довгий час існувала переважно в усній формі серед кочових туркменських племен.',
      'Змінювала письмо: арабиця → латинка (1928) → кирилиця (1940) → знову латинка (з 1993 року).',
      'Поет Махтумкулі Фрагі (XVIII ст.) вважається засновником класичної туркменської літератури.',
      'Традиційна культура килимарства й племінних символів (гьоли) тісно пов\'язана з туркменською усною традицією.',
    ],
    factsEn: [
      'Belongs to the Oghuz branch of the Turkic languages, closely related to Turkish and Azerbaijani.',
      'Existed mainly in oral form for a long time among nomadic Turkmen tribes.',
      'Changed scripts: Arabic → Latin (1928) → Cyrillic (1940) → Latin again (since 1993).',
      'The poet Magtymguly Pyragy (18th century) is regarded as the founder of classical Turkmen literature.',
      'The traditional culture of carpet weaving and tribal symbols (gyols) is closely tied to Turkmen oral tradition.',
    ],
  },
  ug: {
    intro:
      'Уйгурська — карлуцька тюркська мова оазисних міст Таримської западини, історичного центру Шовкового шляху. Тисячолітня писемна традиція охоплює давнє уйгурське письмо, згодом арабицю, якою уйгурська записується й нині.',
    introEn:
      "Uyghur is a Karluk Turkic language of the oasis cities of the Tarim Basin, a historic hub of the Silk Road. Its millennium-long written tradition spans the ancient Old Uyghur script and the Arabic script still used today.",
    facts: [
      'Належить до карлуцької гілки тюркських мов, найближча родичка — узбецька.',
      'Давньоуйгурське письмо, розроблене на основі согдійського алфавіту, лягло в основу монгольської та маньчжурської писемностей.',
      'Історичні міста Кашгар і Турфан на Шовковому шляху столітттями були центрами уйгурської культури й торгівлі.',
      'Сьогодні записується переважно арабським письмом, на відміну від більшості тюркських мов Центральної Азії.',
      'Махмуд аль-Кашгарі створив у XI столітті перший відомий словник тюркських мов "Диван лугат ат-турк".',
    ],
    factsEn: [
      'Belongs to the Karluk branch of the Turkic languages; its closest relative is Uzbek.',
      'The Old Uyghur script, based on the Sogdian alphabet, became the basis of the Mongolian and Manchu writing systems.',
      'The historic Silk Road cities of Kashgar and Turfan were centers of Uyghur culture and trade for centuries.',
      "Today it's written mainly in Arabic script, unlike most Central Asian Turkic languages.",
      'Mahmud al-Kashgari compiled the earliest known dictionary of Turkic languages, the "Diwan Lughat al-Turk," in the 11th century.',
    ],
  },
  eu: {
    intro:
      'Баскська — мовний ізолят, не споріднений з жодною відомою мовною родиною світу, включно з індоєвропейською. Її носії живуть по обидва боки західних Піренеїв ще з часів, коли до регіону прийшли перші індоєвропейці.',
    introEn:
      "Basque is a language isolate, unrelated to any known language family, including Indo-European. Its speakers have lived on both sides of the western Pyrenees since before the first Indo-Europeans arrived in the region.",
    facts: [
      'Мовний ізолят — не має доведеної спорідненості з жодною іншою мовою світу.',
      'Ймовірно, збереглася від доіндоєвропейського населення Західної Європи, витісненого практично всюди інде.',
      'Має надзвичайно складну систему відмінків (ергативну будову) і аглютинативну морфологію.',
      'За часів франкістської диктатури в Іспанії (1939–1975) публічне використання баскської мови жорстко переслідувалося.',
      'Баскська автономна освіта й медіа за останні десятиліття суттєво відновили кількість носіїв мови.',
    ],
    factsEn: [
      'A language isolate — with no proven relationship to any other language in the world.',
      'Likely survives from the pre-Indo-European population of Western Europe, displaced almost everywhere else.',
      'Has an unusually complex ergative case system and agglutinative morphology.',
      "Public use of Basque was harshly suppressed under Francisco Franco's dictatorship in Spain (1939–1975).",
      'Basque-medium education and media over recent decades have significantly revived the number of speakers.',
    ],
  },
  ca: {
    intro:
      'Каталанська — окрема романська мова північного сходу Іберійського півострова, що розвинулася з народної латини паралельно з іспанською та окситанською. Золота доба середньовічної каталанської літератури зробила її мовою права, торгівлі й поезії ще до розквіту кастильської.',
    introEn:
      "Catalan is a distinct Romance language of the northeastern Iberian Peninsula that developed from Vulgar Latin alongside Spanish and Occitan. A golden age of medieval Catalan literature made it a language of law, trade, and poetry before Castilian's own rise.",
    facts: [
      'Належить до західної гілки романських мов, найближче споріднена з окситанською.',
      'Розвинулася з народної латини незалежно від кастильської (іспанської), маючи власну літературну традицію.',
      'Раймон Люль у XIII столітті писав філософські трактати каталанською — рідкість для тогочасної Європи, де домінувала латина.',
      'Пережила десятиліття заборон за диктатури Франко (1939–1975), коли публічне використання каталанської переслідувалося.',
      'Сьогодні офіційна мова Каталонії, Валенсії, Балеарських островів та Андорри, де це єдина державна мова.',
    ],
    factsEn: [
      'Belongs to the western branch of the Romance languages, most closely related to Occitan.',
      'Developed from Vulgar Latin independently of Castilian (Spanish), with its own literary tradition.',
      'Ramon Llull wrote philosophical treatises in Catalan in the 13th century — a rarity in a Europe dominated by Latin.',
      "Endured decades of suppression under Franco's dictatorship (1939–1975), when public use of Catalan was persecuted.",
      "Today it's the official language of Catalonia, Valencia, the Balearic Islands, and Andorra, where it's the sole state language.",
    ],
  },
  gl: {
    intro:
      'Галісійська розвинулася з народної латини північного заходу Іберії й у Середньовіччі була мовою галісійсько-португальської трубадурської поезії, спільної попередниці сучасних галісійської й португальської мов. Століття кастильського домінування відсунули її до статусу регіональної мови аж до автономії Іспанії XX століття.',
    introEn:
      "Galician developed from Vulgar Latin in the northwest of Iberia and, in the Middle Ages, was the language of Galician-Portuguese troubadour poetry, the shared ancestor of modern Galician and Portuguese. Centuries of Castilian dominance reduced it to regional status until Spain's 20th-century move to autonomy.",
    facts: [
      'Належить до західноіберійської підгрупи романських мов, найближча родичка — португальська.',
      'У XII–XIV століттях галісійсько-португальська була престижною мовою трубадурської лірики на всьому Піренейському півострові.',
      'Після політичного розділення Галісії й Португалії дві мови поступово розійшлися, хоч і досі частково взаємозрозумілі.',
      'За часів диктатури Франко зазнавала утисків на користь кастильської (іспанської) мови.',
      'Отримала статус співофіційної мови автономної Галісії за іспанською конституцією 1978 року.',
    ],
    factsEn: [
      'Belongs to the West Iberian subgroup of the Romance languages; its closest relative is Portuguese.',
      'In the 12th–14th centuries, Galician-Portuguese was the prestige language of troubadour poetry across the Iberian Peninsula.',
      'After Galicia and Portugal split politically, the two languages gradually diverged, though they remain partly mutually intelligible.',
      "Was suppressed in favor of Castilian (Spanish) under Franco's dictatorship.",
      "Gained co-official status in autonomous Galicia under Spain's 1978 constitution.",
    ],
  },
  mt: {
    intro:
      'Мальтійська — унікальна семітська мова Європи, що розвинулася із сицилійського арабського діалекту після норманського завоювання Мальти 1091 року, а згодом ввібрала величезний шар італійської та англійської лексики. Це єдина семітська мова, офіційно записана латинською абеткою й визнана офіційною мовою Європейського Союзу.',
    introEn:
      "Maltese is Europe's only Semitic language, having developed from a Siculo-Arabic dialect after the Norman conquest of Malta in 1091, later absorbing a huge layer of Italian and English vocabulary. It's the only Semitic language officially written in the Latin alphabet and recognized as an official EU language.",
    facts: [
      'Єдина семітська мова, що є офіційною мовою Європейського Союзу.',
      'Розвинулася із сикуло-арабського діалекту, яким розмовляли на Мальті до й після норманського завоювання 1091 року.',
      'Записується латинською абеткою з кількома додатковими літерами (ż, ħ) — унікальний випадок серед семітських мов.',
      'Понад половина лексики — романська, переважно сицилійська й італійська, з додатковим шаром англійських запозичень.',
      'Британське правління (1800–1964) залишило значний англомовний слід у сучасній мальтійській лексиці.',
    ],
    factsEn: [
      'The only Semitic language that is an official language of the European Union.',
      'Developed from the Siculo-Arabic dialect spoken in Malta before and after the Norman conquest of 1091.',
      'Written in the Latin alphabet with a few extra letters (ż, ħ) — unique among Semitic languages.',
      'Over half of its vocabulary is Romance, mostly Sicilian and Italian, with an added layer of English loanwords.',
      'British rule (1800–1964) left a substantial English imprint on modern Maltese vocabulary.',
    ],
  },
  lb: {
    intro:
      'Люксембурзька — мозельсько-франкський германський діалект, що набув статусу окремої національної мови лише 1984 року. У Великому Герцогстві вона співіснує з французькою й німецькою в унікальній триязиковій системі освіти й адміністрації.',
    introEn:
      "Luxembourgish is a Moselle Franconian Germanic dialect that only gained status as a separate national language in 1984. In the Grand Duchy it coexists with French and German in a unique trilingual system of education and administration.",
    facts: [
      'Належить до західногерманської групи, мозельсько-франкська підгілка, близька до діалектів прирейнської Німеччини.',
      'Довгий час вважалася лише розмовним німецьким діалектом без офіційного писемного статусу.',
      'Отримала статус національної мови Люксембургу тільки 1984 року.',
      'Люксембург офіційно функціонує у трьох мовах: люксембурзька — розмовна й національна, французька — мова законодавства, німецька — мова преси.',
      'Попри малий розмір країни, люксембурзька активно розвивається завдяки радіо, телебаченню й місцевій літературі.',
    ],
    factsEn: [
      'Belongs to the West Germanic group, Moselle Franconian subgroup, close to dialects of the German Rhineland.',
      'Was long regarded merely as a spoken German dialect with no official written status.',
      "Only gained status as Luxembourg's national language in 1984.",
      'Luxembourg officially functions in three languages: Luxembourgish for everyday speech and national identity, French for legislation, and German for the press.',
      "Despite the country's small size, Luxembourgish is actively developing through radio, television, and local literature.",
    ],
  },
  ht: {
    intro:
      'Гаїтянська креольська виникла на плантаціях колоніального Сан-Домінго XVII–XVIII століть, поєднавши французьку лексику з граматичними структурами західноафриканських мов поневолених людей. Після Гаїтянської революції 1804 року вона стала мовою нової незалежної нації, хоча офіційний статус здобула лише 1987 року.',
    introEn:
      "Haitian Creole emerged on the plantations of colonial Saint-Domingue in the 17th–18th centuries, combining French vocabulary with grammatical structures from the West African languages of enslaved people. After the 1804 Haitian Revolution it became the language of a new independent nation, though it only gained official status in 1987.",
    facts: [
      'Виникла на плантаціях французької колонії Сан-Домінго з поєднання французької лексики й граматики західноафриканських мов, зокрема фон і йоруба.',
      'Гаїтянська революція 1791–1804 років — єдине успішне повстання рабів, що привело до створення незалежної держави.',
      'Довгий час вважалася "неповноцінним" варіантом французької, хоча лінгвісти визнають її повноцінною самостійною мовою.',
      'Отримала статус співофіційної мови Гаїті поряд із французькою лише за конституцією 1987 року.',
      'Використовує послідовну фонетичну латинську орфографію, стандартизовану у XX столітті.',
    ],
    factsEn: [
      'Emerged on the plantations of colonial Saint-Domingue, combining French vocabulary with the grammar of West African languages, notably Fon and Yoruba.',
      'The Haitian Revolution (1791–1804) is the only successful slave revolt that led to the founding of an independent state.',
      'Long dismissed as a "deficient" form of French, though linguists recognize it as a fully independent language.',
      'Gained co-official status alongside French in Haiti only under the 1987 constitution.',
      'Uses a consistent phonetic Latin orthography, standardized in the 20th century.',
    ],
  },
  bo: {
    intro:
      'Тибетська належить до сино-тибетської мовної родини, а її писемність створили в VII столітті за наказом царя Сонгцена Гампо на основі індійського письма для перекладу буддійських текстів. Класична літературна тибетська й донині лишається практично незмінною попри значну розбіжність із розмовними діалектами.',
    introEn:
      "Tibetan belongs to the Sino-Tibetan language family, and its script was created in the 7th century under King Songtsen Gampo, based on an Indian script, for translating Buddhist texts. Classical literary Tibetan has remained largely unchanged despite significant divergence from spoken dialects.",
    facts: [
      'Належить до сино-тибетської мовної родини, тибето-бірманської гілки.',
      'Писемність створив у VII столітті вчений Тонмі Самбгота за наказом царя Сонгцена Гампо, взявши за основу індійське письмо.',
      'Класична літературна тибетська мова тісно пов\'язана з перекладом величезного корпусу буддійських текстів із санскриту.',
      'Написання слів здебільшого фіксує вимову VII–IX століть, тому сильно розходиться із сучасною розмовною мовою.',
      'Лхаський діалект слугує основою сучасного стандарту, хоча тибетські діалекти регіону значно різняться між собою.',
    ],
    factsEn: [
      'Belongs to the Sino-Tibetan language family, Tibeto-Burman branch.',
      'Its script was created in the 7th century by the scholar Thonmi Sambhota under King Songtsen Gampo, based on an Indian script.',
      'Classical literary Tibetan is closely tied to the translation of a vast corpus of Buddhist texts from Sanskrit.',
      'Spelling largely preserves the pronunciation of the 7th–9th centuries, so it diverges sharply from modern spoken Tibetan.',
      'The Lhasa dialect forms the basis of the modern standard, though Tibetan dialects vary considerably across the region.',
    ],
  },
  my: {
    intro:
      'Бірманська належить до сино-тибетської родини й записується округлим письмом, що походить від давнього монського алфавіту через буддійські пальмові рукописи. Це тональна мова з давньою літературною традицією, тісно пов\'язаною з теравада-буддизмом.',
    introEn:
      "Burmese belongs to the Sino-Tibetan family and is written in a rounded script descended from the ancient Mon alphabet through Buddhist palm-leaf manuscripts. It's a tonal language with a long literary tradition closely tied to Theravada Buddhism.",
    facts: [
      'Належить до сино-тибетської мовної родини, тибето-бірманської гілки.',
      'Округла форма бірманського письма розвинулася через практику писання на пальмовому листі, де прямі лінії могли розірвати матеріал.',
      'Писемність походить від давнього монського алфавіту, запозиченого через контакти з королівством Пеу.',
      'Тональна мова із чотирма тонами, кожен з яких повністю змінює значення складу.',
      'Буддизм школи тераваду глибоко переплетений з бірманською літературною традицією ще з середньовіччя.',
    ],
    factsEn: [
      'Belongs to the Sino-Tibetan language family, Tibeto-Burman branch.',
      'The rounded shape of Burmese script developed because straight lines would tear the palm-leaf manuscripts it was written on.',
      'Its script descends from the ancient Mon alphabet, borrowed through contact with the Pyu kingdom.',
      "A tonal language with four tones, each completely changing a syllable's meaning.",
      'Theravada Buddhism has been deeply interwoven with Burmese literary tradition since medieval times.',
    ],
  },
  km: {
    intro:
      'Кхмерська — мон-кхмерська мова, що була державною мовою могутньої імперії Ангкор (IX–XV ст.), яка залишила по собі найбільший храмовий комплекс світу. Писемність кхмерської — одна з найдавніших у Південно-Східній Азії, що походить від давньоіндійського письма пальава.',
    introEn:
      "Khmer is a Mon-Khmer language that served as the state language of the mighty Angkor Empire (9th–15th centuries), which left behind the largest temple complex in the world. Its script is one of the oldest in Southeast Asia, descended from the ancient Indian Pallava script.",
    facts: [
      'Належить до мон-кхмерської гілки австроазійської мовної родини.',
      'Була державною мовою імперії Ангкор (IX–XV ст.), яка збудувала храмовий комплекс Ангкор-Ват.',
      'Писемність походить від південноіндійського письма пальава, запозиченого через торгові контакти близько V–VII століть.',
      'Не є тональною мовою, на відміну від сусідніх тайської та в\'єтнамської.',
      'Кхмерська абетка — одна з найдовших у світі, налічує 74 літери.',
    ],
    factsEn: [
      'Belongs to the Mon-Khmer branch of the Austroasiatic language family.',
      'Was the state language of the Angkor Empire (9th–15th centuries), which built the Angkor Wat temple complex.',
      'Its script descends from the South Indian Pallava script, borrowed through trade contact around the 5th–7th centuries.',
      'Unlike neighboring Thai and Vietnamese, Khmer is not a tonal language.',
      'The Khmer alphabet is one of the longest in the world, with 74 letters.',
    ],
  },
  lo: {
    intro:
      'Лаоська належить до кра-дайської мовної родини й тісно споріднена з тайською — розмовно ці мови значною мірою взаємозрозумілі. Її писемність, як і тайська, походить від давнього кхмерського письма і зазнала значного впливу буддійських текстів палі.',
    introEn:
      "Lao belongs to the Kra-Dai language family and is closely related to Thai — the two are largely mutually intelligible when spoken. Its script, like Thai's, descends from ancient Khmer writing and was heavily shaped by Pali Buddhist texts.",
    facts: [
      'Належить до кра-дайської мовної родини, тісно споріднена з тайською.',
      'Розмовна лаоська й тайська взаємно значною мірою зрозумілі, хоча писемності різняться.',
      'Абетка походить від давнього кхмерського письма, як і тайська.',
      'Тональна мова, зазвичай виділяють шість тонів у в\'єнтьянському діалекті.',
      'Королівство Лансанг (XIV–XVIII ст.) заклало основи лаоської державності, культури й писемної традиції.',
    ],
    factsEn: [
      'Belongs to the Kra-Dai language family, closely related to Thai.',
      'Spoken Lao and Thai are largely mutually intelligible, though their scripts differ.',
      "Its script descends from ancient Khmer writing, as does Thai's.",
      'A tonal language, usually described as having six tones in the Vientiane dialect.',
      'The Kingdom of Lan Xang (14th–18th centuries) laid the foundations of Lao statehood, culture, and written tradition.',
    ],
  },
  ne: {
    intro:
      'Непальська належить до індоарійської гілки й розвинулася з мови кхас, що поширилася в горах з заходу сучасного Непалу. Об\'єднання країни династією Шах у XVIII столітті зробило її державною мовою багатомовної гімалайської держави.',
    introEn:
      "Nepali belongs to the Indo-Aryan branch and developed from the Khas language, which spread through the mountains from western present-day Nepal. The country's unification under the Shah dynasty in the 18th century made it the state language of a multilingual Himalayan nation.",
    facts: [
      'Належить до індоарійської гілки індоєвропейської мовної родини.',
      'Розвинулася з мови горян кхас, а не з рівнинних індійських мов.',
      'Записується абеткою деванагарі, спільною з гінді й санскритом.',
      'Об\'єднання Непалу королем Прітхві Нараяном Шахом у 1768–1769 роках закріпило непальську як мову держави.',
      'У Непалі, попри статус державної мови, рідною для непальської є лише частина населення — країна багатомовна, з понад 120 мовами.',
    ],
    factsEn: [
      'Belongs to the Indo-Aryan branch of the Indo-European language family.',
      'Developed from the Khas hill language rather than from lowland Indian languages.',
      'Written in the Devanagari script, shared with Hindi and Sanskrit.',
      "King Prithvi Narayan Shah's unification of Nepal in 1768–1769 cemented Nepali as the language of state.",
      'Despite its status as the national language, Nepali is only one mother tongue among many in a country with over 120 languages.',
    ],
  },
  si: {
    intro:
      'Сингальська — індоарійська мова Шрі-Ланки, унікальна тим, що розвивалася в оточенні дравідійських мов, ізольовано від решти індоарійського мовного масиву. Її писемність, споріднена з мовами Південної Індії, тісно пов\'язана з поширенням буддизму на острові з III століття до н.е.',
    introEn:
      "Sinhala is an Indo-Aryan language of Sri Lanka, unusual for having developed surrounded by Dravidian languages, isolated from the rest of the Indo-Aryan language mass. Its script, related to South Indian writing systems, is closely tied to the spread of Buddhism on the island from the 3rd century BCE.",
    facts: [
      'Належить до індоарійської гілки індоєвропейської мовної родини — єдина така мова, що розвивалася переважно серед дравідійського оточення.',
      'За переказами, острів заселили нащадки принца Віджаї з Північної Індії близько V століття до н.е.',
      'Буддизм, привнесений на Шрі-Ланку в III столітті до н.е., глибоко вплинув на розвиток сингальської писемності й літератури.',
      'Округла форма літер, як і в кількох сусідніх писемностях, пов\'язана з традицією писання на пальмовому листі.',
      'Зберігає давню хроніку "Магавамса" — один з найдавніших історичних літописів Південної Азії.',
    ],
    factsEn: [
      'Belongs to the Indo-Aryan branch of the Indo-European family — the only such language to have developed mainly amid Dravidian neighbors.',
      'Tradition holds the island was settled by descendants of Prince Vijaya from North India around the 5th century BCE.',
      'Buddhism, brought to Sri Lanka in the 3rd century BCE, deeply shaped the development of Sinhala writing and literature.',
      'Its rounded letterforms, like several neighboring scripts, stem from the tradition of writing on palm leaves.',
      'Preserves the Mahavamsa, one of the oldest historical chronicles in South Asia.',
    ],
  },
  ur: {
    intro:
      'Урду виникла з тієї самої розмовної основи, що й гінді, у військових таборах і містах мусульманської Індії, ввібравши перську, арабську й тюркську лексику та персько-арабське письмо. Розділення Британської Індії 1947 року закріпило урду як національну мову Пакистану.',
    introEn:
      "Urdu arose from the same spoken base as Hindi, in the military camps and cities of Muslim India, absorbing Persian, Arabic, and Turkic vocabulary along with the Perso-Arabic script. The 1947 partition of British India cemented Urdu as the national language of Pakistan.",
    facts: [
      'Належить до індоарійської гілки, розмовна граматика майже ідентична гінді.',
      'Назва "урду" походить від тюркського слова "ordu" ("військовий табір"), що відображає її формування серед військ Делійського султанату та Моголів.',
      'Записується персько-арабським письмом наста\'лік, на відміну від деванагарі гінді.',
      'Літературна урду культивувала високу поетичну традицію газелі під впливом перської поезії.',
      'Стала державною мовою Пакистану 1947 року, хоча рідною мовою для більшості населення країни є пенджабська та інші.',
    ],
    factsEn: [
      "Belongs to the Indo-Aryan branch; its spoken grammar is nearly identical to Hindi's.",
      'The name "Urdu" comes from the Turkic word "ordu" ("military camp"), reflecting its formation among the armies of the Delhi Sultanate and Mughals.',
      "Written in the Perso-Arabic Nasta'liq script, unlike Hindi's Devanagari.",
      'Literary Urdu cultivated a rich ghazal poetic tradition under Persian influence.',
      "Became the national language of Pakistan in 1947, though most of the country's population natively speaks Punjabi or other languages.",
    ],
  },
  te: {
    intro:
      'Телугу належить до дравідійської мовної родини й здобула прізвисько "італійської мови Сходу" за милозвучну вимову з переважанням голосних на кінці слів. Це мова з понад тисячолітньою літературною традицією, розквіт якої припав на епоху імперії Віджаянагара.',
    introEn:
      'Telugu belongs to the Dravidian language family and earned the nickname "the Italian of the East" for its melodic pronunciation, with most words ending in a vowel. It has a literary tradition spanning over a thousand years, flourishing especially under the Vijayanagara Empire.',
    facts: [
      'Належить до дравідійської мовної родини, найпоширеніша дравідійська мова за кількістю носіїв.',
      'Отримала прізвисько "італійської мови Сходу" через мелодійність, зумовлену тим, що майже всі слова закінчуються на голосний.',
      'Використовує власне округле письмо, споріднене з каннада, що походить від давньої брахмі.',
      'Імперія Віджаянагара (XIV–XVII ст.) підтримувала розквіт телузької поезії й літератури як придворної мови.',
      'Офіційна мова індійського штату Андхра-Прадеш і Телангана.',
    ],
    factsEn: [
      'Belongs to the Dravidian language family; it\'s the most widely spoken Dravidian language.',
      'Earned the nickname "the Italian of the East" for its melodic sound, since nearly all words end in a vowel.',
      'Uses its own rounded script, related to Kannada, descended from ancient Brahmi.',
      'The Vijayanagara Empire (14th–17th centuries) fostered a flourishing of Telugu poetry and literature as a courtly language.',
      'The official language of the Indian states of Andhra Pradesh and Telangana.',
    ],
  },
  ml: {
    intro:
      'Малаялам належить до дравідійської родини й розвинувся з давньотамільського через розгалуження торговими шляхами Керали, де вже дві тисячі років приймали купців з Аравії, Риму й Китаю. Її назва, як і абетка, паліндромна — читається однаково в обидва боки.',
    introEn:
      "Malayalam belongs to the Dravidian family and developed from Old Tamil, shaped by Kerala's trade routes, which for two millennia welcomed merchants from Arabia, Rome, and China. Its own name, like the script, is a palindrome — reading the same in both directions.",
    facts: [
      'Належить до дравідійської мовної родини, споріднена з тамільською, від якої відокремилася приблизно у IX–XIII століттях.',
      'Слово "малаялам" саме є паліндромом — читається однаково зліва направо й справа наліво.',
      'Керала століттями була центром прянощевої торгівлі, приймаючи арабських, єврейських, а згодом і європейських купців.',
      'Використовує округле письмо, споріднене з тамільсько-брахмі, адаптоване для запису численних санскритських запозичень.',
      'Керала має один з найвищих рівнів письменності в Індії, що підтримує багату сучасну літературу малаялам.',
    ],
    factsEn: [
      'Belongs to the Dravidian language family, related to Tamil, from which it split off roughly between the 9th and 13th centuries.',
      'The word "Malayalam" is itself a palindrome — it reads the same forwards and backwards.',
      'Kerala was for centuries a center of the spice trade, hosting Arab, Jewish, and later European merchants.',
      'Uses a rounded script related to Tamil-Brahmi, adapted to record numerous Sanskrit loanwords.',
      'Kerala has one of the highest literacy rates in India, supporting a rich modern Malayalam literature.',
    ],
  },
  kn: {
    intro:
      'Каннада — дравідійська мова з писемною традицією, що сягає щонайменше V століття н.е., коли з\'явився едикт Халміді — найдавніший відомий напис каннада. Була придворною мовою кількох могутніх південноіндійських імперій, зокрема Чалук\'їв і Раштракутів.',
    introEn:
      "Kannada is a Dravidian language with a written tradition dating back at least to the 5th century CE, when the Halmidi inscription — the oldest known Kannada inscription — was carved. It served as the courtly language of several powerful South Indian empires, including the Chalukyas and Rashtrakutas.",
    facts: [
      'Належить до дравідійської мовної родини.',
      'Едикт Халміді (бл. 450 р. н.е.) — найдавніший відомий напис каннада на камені.',
      'Використовує власне округле письмо, споріднене з телузьким, що розвинулося з давньої брахмі.',
      'Була придворною й літературною мовою імперій Чалук\'їв, Раштракутів і пізніше Віджаянагари.',
      'Офіційно визнана "класичною мовою" урядом Індії 2008 року.',
    ],
    factsEn: [
      'Belongs to the Dravidian language family.',
      'The Halmidi inscription (c. 450 CE) is the oldest known stone inscription in Kannada.',
      'Uses its own rounded script, related to Telugu, developed from ancient Brahmi.',
      'Was the courtly and literary language of the Chalukya, Rashtrakuta, and later Vijayanagara empires.',
      'Officially recognized as a "classical language" by the Indian government in 2008.',
    ],
  },
  mr: {
    intro:
      'Маратхі — індоарійська мова заходу Індії, що стала мовою держави завдяки імперії маратхів XVII–XVIII століть під проводом Шіваджі, яка на пізніших етапах контролювала більшу частину субконтиненту. Записується деванагарі, спільною з гінді й санскритом.',
    introEn:
      "Marathi is an Indo-Aryan language of western India that gained state power through the 17th–18th-century Maratha Empire founded by Shivaji, which at its height controlled much of the subcontinent. It's written in Devanagari, shared with Hindi and Sanskrit.",
    facts: [
      'Належить до індоарійської гілки індоєвропейської мовної родини.',
      'Найдавніші написи маратхі датуються приблизно XI століттям.',
      'Імперія маратхів, заснована Шіваджі у XVII столітті, поширила політичне й культурне значення мови по всій Індії.',
      'Записується абеткою деванагарі, спільною з гінді.',
      'Має багату бгакті-поетичну традицію, зокрема творчість святого-поета Тукарама XVII століття.',
    ],
    factsEn: [
      'Belongs to the Indo-Aryan branch of the Indo-European language family.',
      'The earliest Marathi inscriptions date to roughly the 11th century.',
      "The Maratha Empire, founded by Shivaji in the 17th century, spread the language's political and cultural reach across India.",
      'Written in the Devanagari script, shared with Hindi.',
      'Has a rich Bhakti devotional poetry tradition, notably the works of 17th-century saint-poet Tukaram.',
    ],
  },
  gu: {
    intro:
      'Ґуджараті — індоарійська мова заходу Індії з давньою купецькою традицією, що поширилася разом з ґуджаратськими торговцями по всьому Індійському океану, від Східної Африки до Південно-Східної Азії. Це рідна мова Махатми Ганді, який писав нею свою автобіографію.',
    introEn:
      "Gujarati is an Indo-Aryan language of western India with a long mercantile tradition that spread with Gujarati traders across the Indian Ocean, from East Africa to Southeast Asia. It's the native language of Mahatma Gandhi, who wrote his autobiography in it.",
    facts: [
      'Належить до індоарійської гілки індоєвропейської мовної родини.',
      'Розвинулася з середньовічної гуджаратсько-раджастганської мовної основи приблизно з XII століття.',
      'Ґуджаратські купецькі спільноти століттями вели торгівлю по всьому узбережжю Індійського океану.',
      'Використовує власну абетку без горизонтальної лінії зверху літер, на відміну від деванагарі.',
      'Махатма Ганді, рідною мовою якого була гуджараті, написав нею свою автобіографію "Історія моїх експериментів з істиною".',
    ],
    factsEn: [
      'Belongs to the Indo-Aryan branch of the Indo-European language family.',
      'Developed from a medieval Gujarati-Rajasthani linguistic base starting around the 12th century.',
      'Gujarati merchant communities traded across the Indian Ocean coastline for centuries.',
      'Uses its own script without the horizontal top line found in Devanagari.',
      'Mahatma Gandhi, a native Gujarati speaker, wrote his autobiography, "The Story of My Experiments with Truth," in the language.',
    ],
  },
  or: {
    intro:
      'Одія — індоарійська мова східної Індії, тісно пов\'язана з культом бога Джаганнатха в Пурі, храмовий комплекс якого століттями був центром одійської літератури й мистецтва. Отримала статус "класичної мови" від уряду Індії 2014 року.',
    introEn:
      "Odia is an Indo-Aryan language of eastern India closely tied to the cult of the god Jagannath in Puri, whose temple complex has for centuries been a center of Odia literature and art. It gained \"classical language\" status from the Indian government in 2014.",
    facts: [
      'Належить до індоарійської гілки індоєвропейської мовної родини.',
      'Найдавніші написи одія датуються приблизно X століттям.',
      'Храм Джаганнатха в Пурі століттями був духовним і літературним центром одійської культури.',
      'Використовує власну округлу абетку, що розвинулася з давньої брахмі, форми літер частково зумовлені письмом на пальмовому листі.',
      'Визнана "класичною мовою" Індії 2014 року — однією з небагатьох, що отримали цей статус.',
    ],
    factsEn: [
      'Belongs to the Indo-Aryan branch of the Indo-European language family.',
      'The earliest Odia inscriptions date to roughly the 10th century.',
      'The Jagannath Temple in Puri has been a spiritual and literary center of Odia culture for centuries.',
      'Uses its own rounded script, developed from ancient Brahmi, with letterforms partly shaped by palm-leaf writing.',
      'Recognized as a "classical language" of India in 2014 — one of only a few languages to hold that status.',
    ],
  },
  as: {
    intro:
      'Ассамська — найсхідніша індоарійська мова, що розвинулася в долині Брахмапутри на перетині індоарійського, тибето-бірманського й тайського мовних світів. Її писемність спільна з бенгальською, хоча мова має власну окрему літературну традицію.',
    introEn:
      "Assamese is the easternmost Indo-Aryan language, having developed in the Brahmaputra Valley at the crossroads of the Indo-Aryan, Tibeto-Burman, and Tai linguistic worlds. Its script is shared with Bengali, though the language has its own distinct literary tradition.",
    facts: [
      'Належить до індоарійської гілки — найсхідніша серед усіх індоарійських мов.',
      'Розвинулася в долині Брахмапутри в оточенні тибето-бірманських і тайських мов, які залишили в ній помітний слід.',
      'Використовує абетку, майже ідентичну бенгальській, з кількома відмінними літерами.',
      'Держава Ахом (XIII–XIX ст.), заснована тайськими переселенцями, панувала в регіоні й підтримувала розвиток ассамської літератури.',
      '"Чарія-гіти" — буддійські пісні X–XII століть — одні з найдавніших свідчень мов бенгальсько-ассамської підгілки.',
    ],
    factsEn: [
      'Belongs to the Indo-Aryan branch — the easternmost of all Indo-Aryan languages.',
      'Developed in the Brahmaputra Valley surrounded by Tibeto-Burman and Tai languages, which left a noticeable mark on it.',
      'Uses a script nearly identical to Bengali, with a few distinct letters.',
      'The Ahom kingdom (13th–19th centuries), founded by Tai settlers, ruled the region and supported the growth of Assamese literature.',
      'The Charyapada, Buddhist songs from the 10th–12th centuries, are among the earliest evidence of the Bengali-Assamese language subgroup.',
    ],
  },
  sd: {
    intro:
      'Сіндхі — індоарійська мова долини Інду з писемною традицією, що сягає щонайменше VIII століття арабського завоювання Сінду. Сьогодні мова записується арабським письмом у Пакистані та деванагарі — серед сіндхійської громади Індії.',
    introEn:
      "Sindhi is an Indo-Aryan language of the Indus Valley with a written tradition dating back to at least the 8th-century Arab conquest of Sindh. Today it's written in Arabic script in Pakistan and in Devanagari among the Sindhi community in India.",
    facts: [
      'Належить до індоарійської гілки індоєвропейської мовної родини.',
      'Арабське завоювання регіону Сінд у 711 році принесло іслам та арабське письмо, яке згодом адаптували для сіндхі.',
      'Суфійський поет Шах Абдул Латіф Бхіттаї (XVIII ст.) — класик сіндхійської духовної поезії, чия "Шах джо рісало" й досі виконується музично.',
      'У Пакистані записується арабсько-перським письмом, тоді як частина сіндхійської діаспори в Індії використовує деванагарі.',
      'Розділення Британської Індії 1947 року розкидало сіндхійськомовну громаду між Пакистаном та Індією.',
    ],
    factsEn: [
      'Belongs to the Indo-Aryan branch of the Indo-European language family.',
      'The Arab conquest of the Sindh region in 711 CE brought Islam and the Arabic script, later adapted for Sindhi.',
      'Sufi poet Shah Abdul Latif Bhittai (18th century) is a classic of Sindhi devotional poetry, whose "Shah Jo Risalo" is still performed musically.',
      'Written in Perso-Arabic script in Pakistan, while part of the Sindhi diaspora in India uses Devanagari.',
      'The 1947 partition of British India scattered the Sindhi-speaking community between Pakistan and India.',
    ],
  },
  ps: {
    intro:
      'Пушту — іранська мова афгано-пакистанського прикордоння, мова пуштунських племен, чий кодекс честі пуштунвалай тісно переплетений з усною поетичною традицією мови. Історично записується арабсько-перським письмом з додатковими літерами для унікальних звуків.',
    introEn:
      "Pashto is an Iranian language of the Afghan-Pakistani borderlands, the language of the Pashtun tribes, whose honor code, Pashtunwali, is deeply interwoven with an oral poetic tradition. It's historically written in a Perso-Arabic script with extra letters for its distinctive sounds.",
    facts: [
      'Належить до іранської гілки індоєвропейської мовної родини, східноіранська підгрупа.',
      'Мова пуштунів — найбільшого племінного суспільства світу, чий кодекс честі пуштунвалай глибоко вкорінений в усній традиції.',
      'Записується арабсько-перським письмом з додатковими літерами, створеними для звуків, відсутніх в арабській та перській.',
      'Хушал-хан Хаттак (XVII ст.) вважається батьком пуштунської поезії й одним з перших пуштунських націоналістичних голосів.',
      'Одна з двох офіційних мов Афганістану поряд з дарі, а також регіональна мова Пакистану.',
    ],
    factsEn: [
      'Belongs to the Iranian branch of the Indo-European language family, Eastern Iranian subgroup.',
      "The language of the Pashtuns, the world's largest tribal society, whose honor code, Pashtunwali, is deeply rooted in oral tradition.",
      'Written in a Perso-Arabic script with extra letters created for sounds absent in Arabic and Persian.',
      'Khushal Khan Khattak (17th century) is regarded as the father of Pashtun poetry and an early voice of Pashtun nationalism.',
      "One of Afghanistan's two official languages alongside Dari, and also a regional language of Pakistan.",
    ],
  },
  so: {
    intro:
      'Сомалійська належить до кушитської гілки афразійської мовної родини й тисячоліттями існувала переважно в усній формі багатющої поетичної традиції. Офіційну латинську писемність для сомалійської ухвалили лише 1972 року, поклавши край десятиліттям суперечок про вибір абетки.',
    introEn:
      "Somali belongs to the Cushitic branch of the Afroasiatic language family and existed for millennia mainly as a rich oral poetic tradition. An official Latin script for Somali was only adopted in 1972, ending decades of debate over which alphabet to use.",
    facts: [
      'Належить до кушитської гілки афразійської (колишньої афроазійської) мовної родини.',
      'Мала винятково багату усну поетичну традицію, яку деякі дослідники порівнюють з давньогрецькою епічною поезією.',
      'До 1972 року не мала офіційної писемності, попри спроби створити її на основі арабиці, латинки й навіть власного письма османія.',
      'Військовий уряд Мохамеда Сіада Барре офіційно запровадив латинську абетку 1972 року.',
      'Сомалійська поезія має чітку метричну систему, засновану на кількості складів і алітерації, а не на римі.',
    ],
    factsEn: [
      'Belongs to the Cushitic branch of the Afroasiatic language family.',
      'Had an exceptionally rich oral poetic tradition that some scholars compare to ancient Greek epic poetry.',
      'Had no official writing system until 1972, despite earlier attempts using Arabic script, Latin script, and even the native Osmanya script.',
      "The military government of Mohamed Siad Barre officially adopted the Latin alphabet in 1972.",
      'Somali poetry follows a strict metrical system based on syllable count and alliteration rather than rhyme.',
    ],
  },
  ha: {
    intro:
      'Хауса належить до чадської гілки афразійської мовної родини й століттями слугувала торговою лінгва франка Західної Африки завдяки могутнім хауським містам-державам і халіфату Сокото. Історично записувалася арабським письмом аджамі, а з колоніальних часів — переважно латинкою боко.',
    introEn:
      "Hausa belongs to the Chadic branch of the Afroasiatic language family and has served for centuries as a trade lingua franca of West Africa, thanks to the powerful Hausa city-states and the Sokoto Caliphate. It was historically written in the Arabic-based Ajami script and, since colonial times, mainly in the Latin-based Boko script.",
    facts: [
      'Належить до чадської гілки афразійської мовної родини, на відміну від сусідніх нігеро-конголезьких мов регіону.',
      'Хауські міста-держави (Кано, Кацина та інші) століттями були центрами транссахарської торгівлі.',
      'Іслам, поширений через торгівлю з XI століття, приніс арабське письмо аджамі для запису хауса.',
      'Халіфат Сокото, заснований 1804 року, поширив хауса як мову ісламської освіти й адміністрації.',
      'Сьогодні найпоширеніша мова Західної Африки як лінгва франка, хоч офіційно записується латинкою (боко).',
    ],
    factsEn: [
      'Belongs to the Chadic branch of the Afroasiatic language family, unlike the surrounding Niger-Congo languages of the region.',
      'The Hausa city-states (Kano, Katsina, and others) were centers of trans-Saharan trade for centuries.',
      'Islam, spread through trade from the 11th century, brought the Arabic-based Ajami script for writing Hausa.',
      'The Sokoto Caliphate, founded in 1804, spread Hausa as a language of Islamic education and administration.',
      "Today it's the most widely used lingua franca of West Africa, though officially written in the Latin-based Boko script.",
    ],
  },
  yo: {
    intro:
      'Йоруба належить до групи мов волта-конго нігеро-конголезької родини й є мовою давньої цивілізації Іфе — духовного центру релігії йоруба з унікальною скульптурною традицією. Тональна мова з трьома тонами, що поширилася по Атлантиці разом з работоргівлею й дала початок релігіям на кшталт сантерії та кандомбле.',
    introEn:
      "Yoruba belongs to the Volta-Congo group of the Niger-Congo language family and is the language of the ancient civilization of Ife, the spiritual center of Yoruba religion with a unique sculptural tradition. A tonal language with three tones, it spread across the Atlantic through the slave trade and shaped religions such as Santería and Candomblé.",
    facts: [
      'Належить до групи волта-конго нігеро-конголезької мовної родини.',
      'Місто Іфе вважається духовною колискою культури йоруба й батьківщиною бронзових та теракотових скульптур світового значення.',
      'Тональна мова з трьома тонами — низьким, середнім і високим, які змінюють значення слів.',
      'Через трансатлантичну работоргівлю поширилася в Америці, вплинувши на релігії сантерія (Куба) і кандомбле (Бразилія).',
      'Має багату усну традицію ориків — похвальних поем, що вшановують богів, предків і видатних людей.',
    ],
    factsEn: [
      'Belongs to the Volta-Congo group of the Niger-Congo language family.',
      'The city of Ife is regarded as the spiritual cradle of Yoruba culture and home to world-renowned bronze and terracotta sculptures.',
      'A tonal language with three tones — low, mid, and high — that change word meaning.',
      'Spread to the Americas through the transatlantic slave trade, shaping religions such as Santería (Cuba) and Candomblé (Brazil).',
      'Has a rich oral tradition of oriki — praise poems honoring gods, ancestors, and notable people.',
    ],
  },
  ig: {
    intro:
      'Ігбо належить до групи волта-конго нігеро-конголезької родини й історично не мала єдиного централізованого політичного устрою, натомість розвивалася в мережі незалежних громад із сильною традицією усного красномовства. Записується латинкою, стандартизованою у XX столітті на основі центральних діалектів.',
    introEn:
      "Igbo belongs to the Volta-Congo group of the Niger-Congo language family and historically had no single centralized political structure, instead developing across a network of independent communities with a strong tradition of oral eloquence. It's written in a Latin alphabet standardized in the 20th century based on central dialects.",
    facts: [
      'Належить до групи волта-конго нігеро-конголезької мовної родини.',
      'На відміну від йоруба чи хауса, традиційне суспільство ігбо не мало централізованих царств, а базувалося на демократичних громадах старійшин.',
      'Тональна мова, у якій висота тону відіграє ключову роль у значенні слів.',
      'Стандартизована писемна форма ігбо (izugbe) склалася у XX столітті на основі кількох центральних діалектів.',
      'Має багату традицію прислів\'їв і усної риторики, яку письменник Чинуа Ачебе відобразив у своїх англомовних романах.',
    ],
    factsEn: [
      'Belongs to the Volta-Congo group of the Niger-Congo language family.',
      'Unlike Yoruba or Hausa, traditional Igbo society had no centralized kingdoms, relying instead on democratic communities of elders.',
      'A tonal language in which pitch plays a central role in word meaning.',
      'A standardized written form of Igbo (Izugbe) took shape in the 20th century, based on several central dialects.',
      'Has a rich tradition of proverbs and oral rhetoric, which writer Chinua Achebe carried into his English-language novels.',
    ],
  },
  ti: {
    intro:
      'Тигринья належить до ефіосемітської гілки семітських мов і є прямою нащадкою давньої мови ґеез, класичної літургійної мови Ефіопської православної церкви. Використовує те саме складове письмо ґеез, що й амхарська.',
    introEn:
      "Tigrinya belongs to the Ethio-Semitic branch of the Semitic languages and is a direct descendant of the ancient Ge'ez language, the classical liturgical language of the Ethiopian Orthodox Church. It uses the same Ge'ez syllabary as Amharic.",
    facts: [
      'Належить до ефіосемітської гілки семітської мовної родини, тісно споріднена з амхарською й тигре.',
      'Прямий нащадок давньої мови ґеез — колишньої державної мови Аксумського царства.',
      'Ґеез і донині лишається літургійною мовою Ефіопської та Еритрейської православних церков, хоч розмовною давно не є.',
      'Записується тим самим складовим письмом, що й амхарська, з незначними відмінностями у наборі знаків.',
      'Основна мова Еритреї поряд з арабською та регіональна мова північної Ефіопії.',
    ],
    factsEn: [
      'Belongs to the Ethio-Semitic branch of the Semitic language family, closely related to Amharic and Tigre.',
      "A direct descendant of the ancient Ge'ez language, once the state language of the Kingdom of Aksum.",
      "Ge'ez remains the liturgical language of the Ethiopian and Eritrean Orthodox churches, though it's long ceased to be spoken.",
      'Written in the same syllabary as Amharic, with minor differences in the character set.',
      'A main language of Eritrea alongside Arabic, and a regional language of northern Ethiopia.',
    ],
  },
  wo: {
    intro:
      'Волоф належить до групи атлантичних мов нігеро-конголезької родини й століттями був мовою королівства Джолоф на території сучасного Сенегалу. Сьогодні це найпоширеніша мова міжетнічного спілкування Сенегалу, хоч офіційною лишається французька.',
    introEn:
      "Wolof belongs to the Atlantic group of the Niger-Congo language family and was for centuries the language of the Kingdom of Jolof in what is now Senegal. Today it's the most widely used lingua franca of Senegal, though French remains the official language.",
    facts: [
      'Належить до атлантичної гілки нігеро-конголезької мовної родини.',
      'Королівство Джолоф (XIII–XVI ст.) поширило волоф як мову політичного й культурного впливу в регіоні.',
      'Історично записувався арабським письмом воловал, паралельно з латинкою, впровадженою за французького колоніального правління.',
      'Найпоширеніша мова повсякденного спілкування в Сенегалі, хоч офіційний статус має французька.',
      'Значна частина волофської лексики й культурних практик пов\'язана з суфійськими братствами, зокрема муридією.',
    ],
    factsEn: [
      'Belongs to the Atlantic branch of the Niger-Congo language family.',
      'The Kingdom of Jolof (13th–16th centuries) spread Wolof as a language of political and cultural influence in the region.',
      'Historically written in the Arabic-based Wolofal script, alongside the Latin script introduced under French colonial rule.',
      'The most widely used everyday lingua franca in Senegal, though French holds official status.',
      'Much of Wolof vocabulary and cultural practice is tied to Sufi brotherhoods, notably the Muridiyya.',
    ],
  },
  mg: {
    intro:
      'Малагасійська — унікальна австронезійська мова, чиї найближчі родичі живуть за тисячі кілометрів на південному сході Борнео. Її принесли на Мадагаскар мореплавці з Південно-Східної Азії приблизно у I тисячолітті н.е., задовго до появи там африканців і європейців.',
    introEn:
      "Malagasy is a unique Austronesian language whose closest relatives live thousands of kilometers away in southeastern Borneo. It was brought to Madagascar by Southeast Asian seafarers around the 1st millennium CE, long before Africans or Europeans arrived there.",
    facts: [
      'Належить до австронезійської мовної родини, найближчий родич — маанянська мова південного Калімантану (Борнео).',
      'Мадагаскар заселили австронезійські мореплавці приблизно у 500–700 роках н.е., подолавши тисячі кілометрів Індійського океану.',
      'Пізніше зазнала впливу мов банту та арабської через контакти з Африкою й арабськими торговцями.',
      'Історично записувалася арабським письмом сорабе, витісненим латинкою у XIX столітті.',
      'Єдина офіційна мова Мадагаскару, що поєднує австронезійське коріння з африканським і арабським мовним впливом.',
    ],
    factsEn: [
      "Belongs to the Austronesian language family; its closest relative is the Ma'anyan language of southern Borneo.",
      'Madagascar was settled by Austronesian seafarers around 500–700 CE, who crossed thousands of kilometers of the Indian Ocean.',
      'Later influenced by Bantu languages and Arabic through contact with Africa and Arab traders.',
      'Historically written in the Arabic-based Sorabe script, displaced by the Latin alphabet in the 19th century.',
      'The sole official language of Madagascar, blending Austronesian roots with African and Arabic linguistic influence.',
    ],
  },
  xh: {
    intro:
      'Кхоса — мова групи нгуні банту мовної родини, відома своїми характерними клацаючими приголосними, запозиченими від сусідніх койсанських народів. Це рідна мова Нельсона Мандели, а її ім\'я саме починається з клацаючого звука.',
    introEn:
      "Xhosa belongs to the Nguni group of the Bantu language family and is known for its distinctive click consonants, borrowed from neighboring Khoisan peoples. It's the native language of Nelson Mandela, and its own name begins with a click sound.",
    facts: [
      'Належить до групи нгуні мов банту, тісно споріднена з зулуською.',
      'Має один з найбагатших наборів клацаючих приголосних серед банту мов, запозичених від койсанських сусідів.',
      'Рідна мова Нельсона Мандели та Десмонда Туту.',
      'Місіонери створили писемну норму на основі латинки у першій половині XIX століття.',
      'Одна з 11 офіційних мов Південно-Африканської Республіки.',
    ],
    factsEn: [
      'Belongs to the Nguni group of Bantu languages, closely related to Zulu.',
      'Has one of the richest sets of click consonants among Bantu languages, borrowed from Khoisan neighbors.',
      'The native language of Nelson Mandela and Desmond Tutu.',
      'Missionaries created a Latin-based written standard in the first half of the 19th century.',
      "One of South Africa's 11 official languages.",
    ],
  },
  sn: {
    intro:
      'Шона належить до мов банту нігеро-конголезької родини й пов\'язана з середньовічною цивілізацією Великого Зімбабве — кам\'яним містом-державою XI–XV століть, від якого й походить назва країни Зімбабве. Стандартизована писемна форма склалася лише у XX столітті з кількох близьких діалектів.',
    introEn:
      "Shona belongs to the Bantu group of the Niger-Congo language family and is connected to the medieval civilization of Great Zimbabwe, an 11th–15th-century stone city-state that gave the country of Zimbabwe its name. A standardized written form only took shape in the 20th century from several closely related dialects.",
    facts: [
      'Належить до групи банту нігеро-конголезької мовної родини.',
      'Пов\'язана з цивілізацією Великого Зімбабве (XI–XV ст.) — найбільшим кам\'яним комплексом Африки на південь від Сахари.',
      'Слово "Зімбабве" походить із шона й означає приблизно "кам\'яні будинки".',
      'Стандартну писемну шона створили місіонери й лінгвісти на початку XX століття, об\'єднавши кілька діалектів.',
      'Найпоширеніша рідна мова Зімбабве.',
    ],
    factsEn: [
      'Belongs to the Bantu group of the Niger-Congo language family.',
      'Connected to the civilization of Great Zimbabwe (11th–15th centuries), the largest stone complex in Sub-Saharan Africa.',
      'The word "Zimbabwe" comes from Shona, meaning roughly "stone houses."',
      'A standardized written Shona was created by missionaries and linguists in the early 20th century, merging several dialects.',
      'The most widely spoken native language in Zimbabwe.',
    ],
  },
  ny: {
    intro:
      'Чічева — мова банту нігеро-конголезької родини, поширена в регіоні озера Ньяса (Малаві), яку назвали на честь народу чева. За президентства Гастінгса Банди вона стала символом малавійської національної єдності поряд з англійською.',
    introEn:
      "Chichewa belongs to the Bantu group of the Niger-Congo language family and is spoken in the Lake Nyasa region (Malawi), named after the Chewa people. Under President Hastings Banda it became a symbol of Malawian national unity alongside English.",
    facts: [
      'Належить до групи банту нігеро-конголезької мовної родини.',
      'Названа на честь народу чева, історичного населення регіону навколо озера Ньяса.',
      'Президент Гастінгс Банда після здобуття незалежності 1964 року активно просував чічеву як мову національної єдності Малаві.',
      'Офіційна мова Малаві поряд з англійською, а також широко вживана в сусідніх Замбії та Мозамбіку.',
      'Має тональну систему, хоча тони відіграють меншу граматичну роль, ніж у деяких інших мовах банту.',
    ],
    factsEn: [
      'Belongs to the Bantu group of the Niger-Congo language family.',
      'Named after the Chewa people, the historic population of the Lake Nyasa region.',
      "President Hastings Banda actively promoted Chichewa as a language of national unity after Malawi's 1964 independence.",
      'An official language of Malawi alongside English, and also widely spoken in neighboring Zambia and Mozambique.',
      'Has a tonal system, though tones play a smaller grammatical role than in some other Bantu languages.',
    ],
  },
  fj: {
    intro:
      'Фіджійська належить до австронезійської мовної родини, океанійської гілки, і поширилася на архіпелаг Фіджі приблизно 3500 років тому разом із мореплавцями культури лапіта. Місіонери у XIX столітті створили для неї писемність на основі бауанського діалекту.',
    introEn:
      "Fijian belongs to the Oceanic branch of the Austronesian language family and spread across the Fiji archipelago roughly 3,500 years ago with Lapita culture seafarers. Missionaries created a written standard for it in the 19th century based on the Bau dialect.",
    facts: [
      'Належить до океанійської гілки австронезійської мовної родини.',
      'Заселення Фіджі мореплавцями культури лапіта датується приблизно 1500 роком до н.е.',
      'Місіонери у 1830–40-х роках стандартизували писемну фіджійську на основі діалекту острова Бау.',
      'Тісно споріднена з полінезійськими мовами, хоча формально належить до окремої фіджійсько-полінезійської підгрупи.',
      'Співіснує з фіджійським гінді як одна з офіційних мов багатоетнічної держави Фіджі.',
    ],
    factsEn: [
      'Belongs to the Oceanic branch of the Austronesian language family.',
      'The settlement of Fiji by Lapita culture seafarers dates to roughly 1500 BCE.',
      'Missionaries in the 1830s–40s standardized written Fijian based on the dialect of Bau Island.',
      'Closely related to the Polynesian languages, though formally classified in its own Fijian-Polynesian subgroup.',
      "Coexists with Fiji Hindi as one of the official languages of Fiji's multiethnic state.",
    ],
  },
  sm: {
    intro:
      'Самоанська належить до полінезійської гілки австронезійської родини й вважається однією з найдавніших полінезійських мов — острови Самоа були одними з перших заселених предками полінезійців близько 3000 років тому. Мова зберігає центральне поняття "фаа-Самоа" — самоанського способу життя.',
    introEn:
      "Samoan belongs to the Polynesian branch of the Austronesian family and is considered one of the oldest Polynesian languages — the Samoan Islands were among the first settled by the ancestors of Polynesians roughly 3,000 years ago. The language preserves the central concept of \"fa'a Samoa,\" the Samoan way of life.",
    facts: [
      'Належить до полінезійської гілки австронезійської мовної родини.',
      'Самоа заселили близько 800–1000 років до н.е. мореплавці культури лапіта — одна з перших полінезійських точок заселення.',
      'Має особливу форму мовлення — "поважну мову" (ту-ланги), яку використовують у зверненні до вождів і на офіційних церемоніях.',
      'Місіонери створили писемну норму на основі латинки у XIX столітті.',
      'Поняття "фаа-Самоа" ("самоанський шлях") глибоко вкорінене в мову й визначає соціальні норми та мовний етикет.',
    ],
    factsEn: [
      'Belongs to the Polynesian branch of the Austronesian language family.',
      'Samoa was settled around 800–1000 BCE by Lapita culture seafarers — one of the earliest points of Polynesian settlement.',
      'Has a special "respectful speech" register (tu lāgi) used when addressing chiefs and at formal ceremonies.',
      'Missionaries created a Latin-based written standard in the 19th century.',
      'The concept of "fa\'a Samoa" ("the Samoan way") is deeply embedded in the language and shapes social norms and speech etiquette.',
    ],
  },
  to: {
    intro:
      'Тонганська належить до полінезійської гілки австронезійської родини й є мовою єдиної в Океанії монархії, що безперервно існує донині. Мова зберігає складну систему почесної лексики, яка розрізняє звертання до короля, знаті й простих людей.',
    introEn:
      "Tongan belongs to the Polynesian branch of the Austronesian family and is the language of the only continuously surviving monarchy in Oceania. The language preserves an elaborate system of honorific vocabulary distinguishing speech to the king, nobility, and commoners.",
    facts: [
      'Належить до полінезійської гілки австронезійської мовної родини.',
      'Тонга — єдина острівна держава Тихого океану, що уникнула формальної колонізації й зберегла безперервну монархію.',
      'Має три рівні почесної лексики — для короля, знаті та простолюду, кожен з окремим словниковим набором.',
      'Місіонери у XIX столітті створили писемну норму на основі латинки.',
      'Король Джордж Тупоу I кодифікував першу писемну конституцію Тонга 1875 року, зокрема мовними положеннями.',
    ],
    factsEn: [
      'Belongs to the Polynesian branch of the Austronesian language family.',
      'Tonga is the only Pacific island nation to have avoided formal colonization and preserved an unbroken monarchy.',
      'Has three levels of honorific vocabulary — for the king, nobility, and commoners — each with its own word set.',
      'Missionaries created a Latin-based written standard in the 19th century.',
      "King George Tupou I codified Tonga's first written constitution in 1875, including provisions on language.",
    ],
  },
  mi: {
    intro:
      'Мова маорі належить до полінезійської гілки австронезійської родини й прийшла в Аотеароа (Нову Зеландію) з мореплавцями близько XIII століття — одним із останніх великих актів полінезійської колонізації Тихого океану. Попри жорсткі асиміляційні політики XX століття, "Те рео Мaорі" пережила потужне відродження завдяки рухам ті ко̄ганга рео.',
    introEn:
      "The Māori language belongs to the Polynesian branch of the Austronesian family and arrived in Aotearoa (New Zealand) with seafarers around the 13th century — one of the last great acts of Polynesian settlement of the Pacific. Despite harsh 20th-century assimilation policies, Te Reo Māori has undergone a powerful revival through the Kōhanga Reo movement.",
    facts: [
      'Належить до полінезійської гілки австронезійської мовної родини.',
      'Аотеароа (Нова Зеландія) стала одним з останніх великих островів, заселених полінезійцями, приблизно у XIII столітті.',
      'Договір Вайтангі 1840 року між британською короною й вождями маорі має тексти англійською й маорі мовами, які істотно різняться за змістом.',
      'У середині XX століття політика асиміляції в школах різко скоротила кількість носіїв мови.',
      'Рух "мовних гнізд" (ті ко̄ганга рео) з 1980-х років відродив мову через дошкільне занурення дітей.',
    ],
    factsEn: [
      'Belongs to the Polynesian branch of the Austronesian language family.',
      'Aotearoa (New Zealand) was one of the last major islands settled by Polynesians, around the 13th century.',
      'The 1840 Treaty of Waitangi between the British Crown and Māori chiefs exists in English and Māori texts that differ significantly in meaning.',
      'Mid-20th-century assimilation policies in schools sharply reduced the number of speakers.',
      'The "language nest" (Kōhanga Reo) movement, starting in the 1980s, revived the language through early-childhood immersion.',
    ],
  },
  haw: {
    intro:
      'Гавайська належить до полінезійської гілки австронезійської родини й прийшла на Гавайські острови з мореплавцями Маркізьких і Таїтянських островів близько I тисячоліття н.е. Заборонена в державних школах з 1896 року, вона майже зникла, аж поки рух за мовне відродження 1980-х не врятував її від вимирання.',
    introEn:
      "Hawaiian belongs to the Polynesian branch of the Austronesian family and arrived in the Hawaiian Islands with seafarers from the Marquesas and Tahiti around the 1st millennium CE. Banned from public schools starting in 1896, it nearly vanished until the language revival movement of the 1980s saved it from extinction.",
    facts: [
      'Належить до полінезійської гілки австронезійської мовної родини.',
      'Заселення Гаваїв полінезійцями з островів Маркіз і Таїті датується приблизно I тисячоліттям н.е.',
      'Місіонер Гірам Бінгем розробив писемну гавайську абетку у 1820-х роках всього з 13 літер.',
      'Закон 1896 року після анексії Гаваїв США заборонив викладання гавайською в державних школах, майже знищивши мову за одне покоління.',
      'Рух мовного відродження, зокрема школи занурення "Пунана Лео" з 1980-х років, повернув мову до життя.',
    ],
    factsEn: [
      'Belongs to the Polynesian branch of the Austronesian language family.',
      'The Polynesian settlement of Hawaii from the Marquesas and Tahiti dates to roughly the 1st millennium CE.',
      'Missionary Hiram Bingham developed a written Hawaiian alphabet in the 1820s with just 13 letters.',
      'An 1896 law after the U.S. annexation of Hawaii banned teaching in Hawaiian in public schools, nearly wiping out the language within a generation.',
      'The language revival movement, notably the Pūnana Leo immersion preschools starting in the 1980s, brought the language back to life.',
    ],
  },
  jv: {
    intro:
      'Яванська належить до австронезійської мовної родини й має одну з найдавніших писемних традицій Південно-Східної Азії — написи давньояванською датуються IX століттям. Мова знаменита складною системою мовних регістрів, що визначає ступінь ввічливості залежно від соціального статусу співрозмовника.',
    introEn:
      "Javanese belongs to the Austronesian language family and has one of the oldest written traditions in Southeast Asia — Old Javanese inscriptions date to the 9th century. The language is famous for its complex system of speech registers, which set the level of politeness based on the social status of the listener.",
    facts: [
      'Належить до австронезійської мовної родини, найпоширеніша місцева мова Індонезії за кількістю носіїв.',
      'Найдавніші написи давньояванською (кав\'ю) датуються приблизно IX століттям н.е.',
      'Історично записувалася власним письмом ганача, похідним від давньоіндійського письма, паралельно з арабицею пегон.',
      'Має складну систему мовних регістрів — нгоко (розмовний), кроми (ввічливий) і кроми інггіл (найпочесніший), які визначають вибір слів залежно від співрозмовника.',
      'Королівства Матарам і пізніше яванські султанати підтримували багату традицію яванської літератури й театру ваянг.',
    ],
    factsEn: [
      "Belongs to the Austronesian language family; it's the most widely spoken indigenous language of Indonesia.",
      'The earliest Old Javanese (Kawi) inscriptions date to roughly the 9th century CE.',
      'Historically written in its own Hanacaraka script, derived from ancient Indian writing, alongside the Arabic-based Pegon script.',
      'Has a complex register system — ngoko (informal), krama (polite), and krama inggil (most honorific) — that determines word choice based on the listener.',
      'The Mataram kingdom and later Javanese sultanates sustained a rich tradition of Javanese literature and wayang shadow theater.',
    ],
  },
  su: {
    intro:
      'Сунданська належить до австронезійської мовної родини й поширена в горах Західної Яви, де протягом століть зберігала окрему культурну ідентичність від яванців рівнин. Історично записувалася письмом сунда кагінатан і арабицею пегон, а нині — переважно латинкою.',
    introEn:
      "Sundanese belongs to the Austronesian language family and is spoken in the mountains of West Java, where for centuries it maintained a distinct cultural identity from the lowland Javanese. Historically written in the Sunda Kaganga script and the Arabic-based Pegon, it's now written mainly in Latin script.",
    facts: [
      'Належить до австронезійської мовної родини, друга за поширеністю місцева мова Індонезії після яванської.',
      'Королівство Сунда (669–1579) підтримувало окрему від яванської культурну й політичну ідентичність Західної Яви.',
      'Історично записувалася давнім письмом сунда кагінатан, спорідненим з іншими письмами Індонезії індійського походження.',
      'Після поширення ісламу частину текстів записували арабицею пегон, як і яванську.',
      'На відміну від яванської, має простішу систему мовних регістрів ввічливості.',
    ],
    factsEn: [
      "Belongs to the Austronesian language family; it's Indonesia's second most-spoken indigenous language after Javanese.",
      "The Kingdom of Sunda (669–1579) maintained a cultural and political identity separate from Java's other kingdoms.",
      'Historically written in the ancient Sunda Kaganga script, related to other Indian-derived scripts of Indonesia.',
      'After Islam spread, some texts were written in the Arabic-based Pegon script, as with Javanese.',
      'Unlike Javanese, it has a simpler system of politeness registers.',
    ],
  },
  gd: {
    intro:
      'Шотландська гельська належить до гойдельської гілки кельтських мов і принесена в Шотландію ірландськими поселенцями королівства Дал Ріада приблизно у V–VI століттях. Століття витіснення англійською, зокрема після повстань якобітів XVIII століття, звели кількість носіїв до невеликих громад Гебридських островів.',
    introEn:
      "Scottish Gaelic belongs to the Goidelic branch of the Celtic languages and was brought to Scotland by Irish settlers of the Kingdom of Dál Riata around the 5th–6th centuries. Centuries of displacement by English, especially after the 18th-century Jacobite risings, reduced the number of speakers to small communities in the Hebrides.",
    facts: [
      'Належить до гойдельської гілки кельтських мов, тісно споріднена з ірландською та мангською.',
      'Принесена в Шотландію переселенцями з ірландського королівства Дал Ріада приблизно у V–VI століттях.',
      'Після поразки якобітського повстання 1746 року британська влада активно придушувала гельську культуру й мову горян.',
      'Очищення Хайленду (Highland Clearances) XVIII–XIX століть змусили тисячі гельськомовних шотландців емігрувати.',
      'Сьогодні найбільше носіїв мови зосереджено на Зовнішніх Гебридах, де діють гельськомовні школи й медіа.',
    ],
    factsEn: [
      'Belongs to the Goidelic branch of the Celtic languages, closely related to Irish and Manx.',
      'Brought to Scotland by settlers from the Irish Kingdom of Dál Riata around the 5th–6th centuries.',
      'After the defeat of the 1746 Jacobite rising, British authorities actively suppressed Highland culture and language.',
      'The Highland Clearances of the 18th–19th centuries forced thousands of Gaelic speakers to emigrate.',
      'Today most remaining speakers are concentrated in the Outer Hebrides, which has Gaelic-medium schools and media.',
    ],
  },
  br: {
    intro:
      'Бретонська належить до бриттської гілки кельтських мов і принесена в Бретань (Франція) переселенцями з Британії, що тікали від англосаксонського завоювання у V–VI століттях. Це єдина кельтська мова континентальної Європи, що збереглася донині.',
    introEn:
      "Breton belongs to the Brittonic branch of the Celtic languages and was brought to Brittany (France) by settlers from Britain fleeing the Anglo-Saxon conquest in the 5th–6th centuries. It's the only Celtic language still spoken on the European continent rather than the British Isles.",
    facts: [
      'Належить до бриттської гілки кельтських мов, споріднена з валлійською та корнською.',
      'Принесена в Бретань британськими переселенцями, які тікали від англосаксонського завоювання у V–VI століттях.',
      'Єдина кельтська мова, що збереглася на європейському континенті, а не на Британських островах.',
      'Французька державна політика мовної уніфікації активно придушувала бретонську, особливо у школах з кінця XIX століття.',
      'Школи занурення "Дівaн" з 1977 року відроджують мову серед нового покоління носіїв.',
    ],
    factsEn: [
      'Belongs to the Brittonic branch of the Celtic languages, related to Welsh and Cornish.',
      'Brought to Brittany by British settlers fleeing the Anglo-Saxon conquest in the 5th–6th centuries.',
      'The only Celtic language to survive on the European continent rather than on the British Isles.',
      'French state language-unification policy actively suppressed Breton, especially in schools from the late 19th century onward.',
      'The Diwan immersion schools, founded in 1977, are reviving the language among a new generation of speakers.',
    ],
  },
  kw: {
    intro:
      'Корнська належить до бриттської гілки кельтських мов Корнуоллу й вважалася вимерлою мовою після смерті останньої відомої природної носійки наприкінці XVIII століття. Завдяки руху відродження XX століття вона стала однією з небагатьох мов у світі, "воскреслих" з практично повного зникнення.',
    introEn:
      "Cornish belongs to the Brittonic branch of the Celtic languages of Cornwall and was considered extinct after its last known native speaker died in the late 18th century. Thanks to a 20th-century revival movement, it became one of the few languages in the world \"resurrected\" from near-total disappearance.",
    facts: [
      'Належить до бриттської гілки кельтських мов, найближчі родички — валлійська та бретонська.',
      'Вважається, що остання відома природна носійка мови, Доллі Пентріт, померла 1777 року.',
      'Генрі Дженнер розпочав рух відродження корнської мови на початку XX століття, спираючись на середньовічні тексти.',
      'ЮНЕСКО офіційно визнала корнську "критично зникаючою" мовою, хоч кількість нових носіїв повільно зростає.',
      'Отримала офіційне визнання за Європейською хартією регіональних мов Великою Британією 2002 року.',
    ],
    factsEn: [
      'Belongs to the Brittonic branch of the Celtic languages, closest to Welsh and Breton.',
      'The last known native speaker, Dolly Pentreath, is believed to have died in 1777.',
      'Henry Jenner launched the Cornish revival movement in the early 20th century, drawing on medieval texts.',
      'UNESCO officially classifies Cornish as "critically endangered," though the number of new speakers is slowly growing.',
      'Gained official recognition under the European Charter for Regional Languages from the UK in 2002.',
    ],
  },
  gv: {
    intro:
      'Мангська належить до гойдельської гілки кельтських мов острова Мен і формально вважалася вимерлою після смерті останнього природного носія 1974 року. Завдяки цілеспрямованому відродженню сьогодні на острові з\'явилося нове покоління дітей, для яких мангська — рідна.',
    introEn:
      "Manx belongs to the Goidelic branch of the Celtic languages of the Isle of Man and was formally considered extinct after its last native speaker died in 1974. Thanks to a deliberate revival, the island now has a new generation of children for whom Manx is a first language.",
    facts: [
      'Належить до гойдельської гілки кельтських мов, споріднена з ірландською та шотландською гельською.',
      'Останній визнаний природний носій мангської, Нед Меддрелл, помер 1974 року.',
      'Рух відродження, що почався ще до його смерті, зберіг і поширив мову через записи й навчальні матеріали.',
      'Школа Bunscoill Ghaelgagh, заснована 2001 року, — перша школа з повним зануренням у мангську мову.',
      'ЮНЕСКО перекласифікувала мангську з "вимерлої" на "мову, що переродилася" — рідкісний офіційний статус.',
    ],
    factsEn: [
      'Belongs to the Goidelic branch of the Celtic languages, related to Irish and Scottish Gaelic.',
      'The last recognized native Manx speaker, Ned Maddrell, died in 1974.',
      'A revival movement, which began even before his death, preserved and spread the language through recordings and teaching materials.',
      'The Bunscoill Ghaelgagh school, founded in 2001, is the first full Manx-immersion school.',
      'UNESCO reclassified Manx from "extinct" to "revived" — a rare official status.',
    ],
  },
  fo: {
    intro:
      'Фарерська належить до західноскандинавської гілки германських мов і розвинулася з давньоскандинавської, принесеної на Фарерські острови норвезькими вікінгами у IX столітті. Століттями данського панування мова майже не мала писемної форми, аж поки її не кодифікували лише у XIX столітті.',
    introEn:
      "Faroese belongs to the West Scandinavian branch of the Germanic languages and developed from Old Norse, brought to the Faroe Islands by Norwegian Vikings in the 9th century. Centuries of Danish rule left it with barely any written form until it was finally codified in the 19th century.",
    facts: [
      'Належить до західноскандинавської гілки германських мов, найближча родичка — ісландська.',
      'Заселена норвезькими вікінгами приблизно у IX столітті, які принесли давньоскандинавську мову на острови.',
      'Данське правління століттями робило данську мовою церкви, освіти й адміністрації, залишаючи фарерську лише розмовною.',
      'Венсель Ульріксен Гаммерсгаймб кодифікував писемний стандарт фарерської 1854 року.',
      'Отримала статус головної офіційної мови Фарерських островів 1948 року в межах автономії від Данії.',
    ],
    factsEn: [
      'Belongs to the West Scandinavian branch of the Germanic languages; its closest relative is Icelandic.',
      'Settled by Norwegian Vikings around the 9th century, who brought Old Norse to the islands.',
      'Danish rule made Danish the language of the church, education, and administration for centuries, leaving Faroese purely spoken.',
      'Venceslaus Ulricus Hammershaimb codified the written Faroese standard in 1854.',
      'Gained status as the main official language of the Faroe Islands in 1948, under autonomy from Denmark.',
    ],
  },
  oc: {
    intro:
      'Окситанська — романська мова півдня Франції, мова середньовічних трубадурів, чия поезія кохання вплинула на всю європейську літературу. Французька королівська політика централізації, зокрема ордонанс Віллер-Котре 1539 року, поступово витіснила її на користь паризької французької.',
    introEn:
      "Occitan is a Romance language of southern France, the language of the medieval troubadours, whose poetry of courtly love shaped all of later European literature. French royal centralization policy, notably the 1539 Ordinance of Villers-Cotterêts, gradually displaced it in favor of Parisian French.",
    facts: [
      'Належить до окситано-романської підгрупи, найближче споріднена з каталанською.',
      'Мова трубадурів XI–XIII століть, чия куртуазна лірика вплинула на всю подальшу європейську поезію кохання.',
      'Ордонанс Віллер-Котре 1539 року зробив французьку єдиною офіційною мовою права й адміністрації Франції, витіснивши окситанську.',
      'Фредерік Містраль отримав Нобелівську премію з літератури 1904 року за твори провансальським діалектом окситанської.',
      'Має кілька значних діалектів — провансальський, лангедокський, ґасконський та інші, ступінь взаємозрозумілості між якими різниться.',
    ],
    factsEn: [
      'Belongs to the Occitano-Romance subgroup, most closely related to Catalan.',
      'The language of the 11th–13th-century troubadours, whose courtly love poetry shaped all later European love poetry.',
      'The 1539 Ordinance of Villers-Cotterêts made French the sole official language of law and administration in France, displacing Occitan.',
      'Frédéric Mistral won the 1904 Nobel Prize in Literature for works in the Provençal dialect of Occitan.',
      'Has several major dialects — Provençal, Languedocien, Gascon, and others — with varying degrees of mutual intelligibility.',
    ],
  },
  co: {
    intro:
      'Корсиканська — романська мова острова Корсика, найближче споріднена з тосканськими діалектами Італії, а не з французькою, яка стала офіційною мовою острова лише після його переходу до Франції 1768 року. Мовний рух за автономію Корсики тісно пов\'язаний із захистом корсиканської мови.',
    introEn:
      "Corsican is a Romance language of the island of Corsica, most closely related to the Tuscan dialects of Italy rather than to French, which only became the island's official language after it passed to France in 1768. Corsica's autonomy movement is closely tied to the defense of the Corsican language.",
    facts: [
      'Належить до італо-романської підгрупи, найближче споріднена з тосканським діалектом (основою літературної італійської).',
      'Корсика перебувала під владою Генуезької республіки протягом кількох століть, що зблизило мову з італійською традицією.',
      'Стала французькою територією лише 1768 року, за рік до народження Наполеона Бонапарта на острові.',
      'Французька державна політика централізації довго придушувала корсиканську на користь французької мови.',
      'Корсиканський автономістський і націоналістичний рух другої половини XX століття тісно пов\'язаний із захистом і відродженням мови.',
    ],
    factsEn: [
      'Belongs to the Italo-Romance subgroup, most closely related to the Tuscan dialect (the basis of literary Italian).',
      'Corsica was under the rule of the Republic of Genoa for several centuries, which drew the language close to the Italian tradition.',
      'Only became French territory in 1768, a year before Napoleon Bonaparte was born on the island.',
      'French state centralization policy long suppressed Corsican in favor of French.',
      "Corsica's autonomist and nationalist movement of the late 20th century is closely tied to defending and reviving the language.",
    ],
  },
  sc: {
    intro:
      'Сардинська — романська мова острова Сардинія, яку лінгвісти часто вважають найконсервативнішою серед усіх романських мов, оскільки вона зберегла найбільше рис латинської фонетики. Століттями географічна ізоляція острова захищала мову від змін, що трансформували материкові романські мови.',
    introEn:
      "Sardinian is a Romance language of the island of Sardinia that linguists often consider the most conservative of all Romance languages, since it retains the most features of Latin phonetics. Centuries of geographic isolation shielded the island's language from the changes that transformed mainland Romance languages.",
    facts: [
      'Утворює власну окрему гілку романських мов, а не належить до італо-романської підгрупи, як італійська.',
      'Лінгвісти вважають сардинську найбільш консервативною романською мовою за збереженою латинською фонетикою.',
      'Наприклад, сардинська зберігає тверде "к" перед "е" та "і" там, де інші романські мови його пом\'якшили.',
      'Географічна ізоляція острова століттями захищала мову від інновацій, що поширювалися материковою Європою.',
      'Має кілька діалектних груп — кампіданську на півдні й логудорську на півночі острова, доволі відмінних одна від одної.',
    ],
    factsEn: [
      'Forms its own separate branch of the Romance languages, rather than belonging to the Italo-Romance subgroup like Italian.',
      'Linguists regard Sardinian as the most conservative Romance language in terms of preserved Latin phonetics.',
      'For example, Sardinian retains a hard "k" sound before "e" and "i" where other Romance languages softened it.',
      "The island's geographic isolation shielded the language for centuries from innovations spreading across mainland Europe.",
      'Has several dialect groups — Campidanese in the south and Logudorese in the north of the island — that differ considerably from each other.',
    ],
  },
  fy: {
    intro:
      'Фризька належить до західногерманської групи й вважається найближчою живою родичкою англійської мови серед континентальних мов — обидві походять від спільної англо-фризької гілки. Провінція Фрисландія в Нідерландах зберігає мову як співофіційну поряд з нідерландською.',
    introEn:
      "Frisian belongs to the West Germanic group and is considered English's closest living relative among the continental languages — both descend from a shared Anglo-Frisian branch. The Dutch province of Friesland maintains it as a co-official language alongside Dutch.",
    facts: [
      'Належить до західногерманської групи, утворює з англійською окрему англо-фризьку підгілку.',
      'Лінгвісти жартома згадують приказку "Butter, bread and green cheese is good English and good Frisian" — приклад близькості словникового складу.',
      'Століттями розвивалася окремо від нідерландської під впливом фризької морської торгівлі й самоврядування.',
      'Отримала статус співофіційної мови нідерландської провінції Фрисландія 1956 року.',
      'Гісберт Япікс у XVII столітті вважається батьком фризької літературної традиції.',
    ],
    factsEn: [
      'Belongs to the West Germanic group, forming a distinct Anglo-Frisian subgroup together with English.',
      'Linguists often cite the saying "Bûter, brea en griene tsiis is goed Ingelsk en goed Frysk" to illustrate the closeness of their vocabulary.',
      'Developed separately from Dutch for centuries, shaped by Frisian maritime trade and self-governance.',
      'Gained co-official status in the Dutch province of Friesland in 1956.',
      'Gysbert Japiks is regarded as the father of the Frisian literary tradition in the 17th century.',
    ],
  },
  yi: {
    intro:
      'Їдиш виник близько тисячоліття тому серед єврейських громад Рейнської області як поєднання середньовічної німецької з гебрейською, арамейською та згодом слов\'янською лексикою. Це була основна мова ашкеназького єврейства Європи, а Голокост знищив більшість її мовного середовища.',
    introEn:
      "Yiddish emerged nearly a thousand years ago among Jewish communities in the Rhineland, blending medieval German with Hebrew, Aramaic, and later Slavic vocabulary. It was the main language of Ashkenazi European Jewry, and the Holocaust destroyed most of its linguistic homeland.",
    facts: [
      'Належить до західногерманської групи, ґрунтується на середньовічних німецьких діалектах з домішками гебрейської, арамейської та слов\'янських мов.',
      'Виник близько X століття серед єврейських громад долини Рейну.',
      'Записується гебрейським письмом, хоча граматично й лексично тісно споріднена з німецькою.',
      'До Другої світової війни їдиш була рідною мовою для приблизно 11–13 мільйонів людей у Європі.',
      'Голокост знищив більшість носіїв мови в Європі; сьогодні вона зберігається переважно в ортодоксальних громадах і культурних рухах відродження.',
    ],
    factsEn: [
      'Belongs to the West Germanic group, based on medieval German dialects with Hebrew, Aramaic, and Slavic elements.',
      'Emerged around the 10th century among Jewish communities of the Rhine Valley.',
      'Written in the Hebrew script, though grammatically and lexically closely related to German.',
      'Before World War II, Yiddish was the native language of roughly 11–13 million people in Europe.',
      'The Holocaust destroyed most of its European speaker base; today it survives mainly in Orthodox communities and cultural revival movements.',
    ],
  },
  lad: {
    intro:
      'Ладино — єврейсько-іспанська мова, яку сефардські євреї винесли з Іспанії після вигнання 1492 року й зберігали в Османській імперії, Північній Африці та на Балканах століттями майже незмінною. Вона законсервувала риси середньовічної іспанської, втрачені в самій сучасній кастильській мові.',
    introEn:
      "Ladino is a Judeo-Spanish language that Sephardic Jews carried out of Spain after the 1492 expulsion and preserved almost unchanged for centuries across the Ottoman Empire, North Africa, and the Balkans. It preserved features of medieval Spanish lost in modern Castilian itself.",
    facts: [
      'Розвинулася з середньовічної кастильської іспанської, якою розмовляли євреї Піренейського півострова до вигнання 1492 року.',
      'Указ про вигнання Фердинанда й Ізабелли 1492 року розсіяв сефардських євреїв по Османській імперії, Північній Африці та Італії.',
      'Записувалася переважно гебрейським письмом (Раші), хоча пізніше з\'явилися й латинізовані варіанти.',
      'Зберігає архаїчні риси середньовічної іспанської, втрачені в сучасній кастильській мові.',
      'Голокост і асиміляція різко скоротили кількість носіїв, сьогодні мова вважається такою, що зникає.',
    ],
    factsEn: [
      'Developed from the medieval Castilian Spanish spoken by Jews of the Iberian Peninsula before the 1492 expulsion.',
      'The 1492 expulsion edict of Ferdinand and Isabella scattered Sephardic Jews across the Ottoman Empire, North Africa, and Italy.',
      'Was mainly written in the Hebrew script (Rashi script), though Latin-alphabet variants later appeared.',
      'Preserves archaic features of medieval Spanish lost in modern Castilian.',
      'The Holocaust and assimilation sharply reduced the number of speakers; the language is now considered endangered.',
    ],
  },
  qu: {
    intro:
      'Кечуа — мовна родина Анд, що стала державною мовою імперії інків, які поширили її як лінгва франка через адміністрацію й дороги Тавантінсую. Попри іспанську колонізацію, вона й досі є рідною мовою мільйонів людей у Перу, Болівії, Еквадорі та інших країнах.',
    introEn:
      "Quechua is a language family of the Andes that became the state language of the Inca Empire, which spread it as a lingua franca through the administration and roads of Tawantinsuyu. Despite Spanish colonization, it remains the native language of millions of people in Peru, Bolivia, Ecuador, and beyond.",
    facts: [
      'Це не одна мова, а родина споріднених мов і діалектів Андського регіону.',
      'Стала державною мовою імперії інків (XV–XVI ст.), яка активно поширювала її як лінгва франка серед підкорених народів.',
      'Іспанські колонізатори спершу використовували кечуа для місіонерської діяльності, що частково сприяло її поширенню.',
      'Записувалася латинкою, впровадженою іспанськими місіонерами, оскільки власної писемності інки не мали (використовували вузликове письмо кіпу).',
      'Сьогодні співофіційна мова Перу, Болівії та Еквадору, з мільйонами носіїв по всіх Андах.',
    ],
    factsEn: [
      'Not a single language but a family of related languages and dialects of the Andean region.',
      'Became the state language of the Inca Empire (15th–16th centuries), which actively spread it as a lingua franca among conquered peoples.',
      'Spanish colonizers initially used Quechua for missionary work, which partly aided its spread.',
      'Written in a Latin alphabet introduced by Spanish missionaries, since the Incas had no writing system of their own (they used the knotted-cord quipu instead).',
      "Today it's a co-official language of Peru, Bolivia, and Ecuador, with millions of speakers across the Andes.",
    ],
  },
  gn: {
    intro:
      'Ґуарані — тупі-ґуаранійська мова Південної Америки, унікальна тим, що стала єдиною мовою корінного населення Америк, яку широко використовує неіндіанська більшість населення цілої держави — Парагваю. Її статус зумовлений тісним культурним змішанням гуарані й іспанських колоністів з часів єзуїтських місій.',
    introEn:
      "Guarani is a Tupi-Guarani language of South America, unique for being the only indigenous American language widely spoken by the non-Indigenous majority of an entire country — Paraguay. Its status stems from close cultural blending between Guarani people and Spanish colonists since the era of Jesuit missions.",
    facts: [
      'Належить до тупі-ґуаранійської мовної родини Південної Америки.',
      'Єзуїтські місії (редукції) XVII–XVIII століть активно використовували ґуарані для євангелізації й навіть друкували нею книги.',
      'Єдина мова корінних народів Америки, що є співофіційною мовою всієї держави — Парагваю, поряд з іспанською.',
      'Більшість населення Парагваю, включно з неіндіанським, розмовляє ґуарані як рідною або другою мовою.',
      'Має розвинену систему словотвору, що дає змогу вільно творити нові слова для сучасних понять.',
    ],
    factsEn: [
      'Belongs to the Tupi-Guarani language family of South America.',
      'Jesuit missions (reductions) of the 17th–18th centuries actively used Guarani for evangelization and even printed books in it.',
      "The only Indigenous American language that is a co-official language of an entire country — Paraguay, alongside Spanish.",
      "Most of Paraguay's population, including non-Indigenous people, speaks Guarani as a first or second language.",
      'Has a highly productive word-formation system that allows new words to be freely coined for modern concepts.',
    ],
  },
  ay: {
    intro:
      'Аймара — мова Андського високогір\'я, що передувала навіть імперії інків у регіоні озера Тітікака, де, ймовірно, була мовою цивілізації Тіванаку. Лінгвісти відзначають унікальну "зворотну" концептуалізацію часу в аймара — минуле сприймається як те, що попереду, а майбутнє — позаду.',
    introEn:
      "Aymara is a language of the Andean highlands that predates even the Inca Empire in the Lake Titicaca region, likely having been the language of the Tiwanaku civilization. Linguists note a unique \"reversed\" conceptualization of time in Aymara — the past is treated as what lies ahead, and the future as what lies behind.",
    facts: [
      'Мовна родина/мова Андського високогір\'я, зосереджена навколо озера Тітікака в Болівії та Перу.',
      'Ймовірно, пов\'язана з давньою цивілізацією Тіванаку, що передувала імперії інків у регіоні.',
      'Лінгвісти вивчають унікальну метафору часу в аймара, де минуле розташоване "попереду" (видиме), а майбутнє — "позаду" (невідоме) — протилежно більшості мов світу.',
      'Інки завоювали аймарамовні народи, але аймара зберегла окремішність від кечуа, попри сусідство.',
      'Співофіційна мова Болівії поряд з іспанською та кечуа.',
    ],
    factsEn: [
      'A language family/language of the Andean highlands, centered around Lake Titicaca in Bolivia and Peru.',
      'Likely connected to the ancient Tiwanaku civilization, which predated the Inca Empire in the region.',
      'Linguists study Aymara\'s unique metaphor for time, in which the past lies "ahead" (visible) and the future lies "behind" (unknown) — the opposite of most world languages.',
      'The Incas conquered Aymara-speaking peoples, but Aymara remained distinct from Quechua despite the close contact.',
      'A co-official language of Bolivia alongside Spanish and Quechua.',
    ],
  },
  dz: {
    intro:
      'Дзонгкха — тибето-бірманська мова Бутану, чия назва означає "мова фортець" (дзонгів) — буддійських монастирів-фортець, що століттями були центрами влади й освіти в країні. Стала єдиною офіційною мовою Бутану 1971 року.',
    introEn:
      "Dzongkha is a Tibeto-Burman language of Bhutan, whose name means \"the language of the fortresses\" (dzongs) — Buddhist fortress-monasteries that have for centuries been centers of power and learning in the country. It became Bhutan's sole official language in 1971.",
    facts: [
      'Належить до сино-тибетської мовної родини, тибето-бірманської гілки, тісно споріднена з тибетською.',
      'Назва означає "мова дзонгів" — буддійських монастирів-фортець, історичних центрів влади Бутану.',
      'Використовує те саме письмо, що й тибетська, — учен, похідне від давньоіндійського письма.',
      'Стала офіційною державною мовою Бутану 1971 року, хоча в країні співіснує понад 20 мов.',
      'Бутан — єдина держава світу, що офіційно виміряла добробут показником "валового національного щастя", а не лише ВВП, і дзонгха тісно пов\'язана з цією культурною політикою.',
    ],
    factsEn: [
      'Belongs to the Sino-Tibetan language family, Tibeto-Burman branch, closely related to Tibetan.',
      'Its name means "language of the dzongs" — Buddhist fortress-monasteries that are historic centers of power in Bhutan.',
      'Uses the same script as Tibetan — Ucen, derived from ancient Indian writing.',
      'Became Bhutan\'s official state language in 1971, though the country is home to over 20 languages.',
      'Bhutan is the only country to officially measure well-being by "Gross National Happiness" rather than GDP alone, a cultural policy closely tied to Dzongkha\'s promotion.',
    ],
  },
  dv: {
    intro:
      'Дівехі — індоарійська мова Мальдів, найпівденніша мова цієї гілки й унікальна тим, що розвивалася на ізольованому острівному архіпелазі Індійського океану. Її своєрідне письмо тана, що пишеться справа наліво, створили лише у XVI–XVIII століттях, частково на основі арабських і індійських цифр.',
    introEn:
      "Dhivehi is an Indo-Aryan language of the Maldives, the southernmost language of that branch, unique for having developed on an isolated Indian Ocean archipelago. Its distinctive Thaana script, written right to left, was only created in the 16th–18th centuries, partly based on Arabic and Indian numerals.",
    facts: [
      'Належить до індоарійської гілки індоєвропейської мовної родини — найпівденніша й найзахідніша серед острівних індоарійських мов.',
      'Розвивалася ізольовано на архіпелазі Мальдівських островів Індійського океану.',
      'Найдавніші написи дівехі виконані письмом евету акуру, спорідненим з давніми писемностями Шрі-Ланки.',
      'Сучасне письмо тана, що використовується й нині, склалося у XVI–XVIII століттях і пишеться справа наліво, хоча частково походить від цифр.',
      'Іслам, прийнятий 1153 року, приніс значний шар арабських запозичень у мову.',
    ],
    factsEn: [
      'Belongs to the Indo-Aryan branch of the Indo-European language family — the southernmost and westernmost of the island Indo-Aryan languages.',
      'Developed in isolation across the Maldivian archipelago of the Indian Ocean.',
      'The earliest Dhivehi inscriptions use the Evēla akuru script, related to ancient Sri Lankan writing systems.',
      'The modern Thaana script, still used today, took shape in the 16th–18th centuries and is written right to left, though partly derived from numerals.',
      'Islam, adopted in 1153, brought a significant layer of Arabic loanwords into the language.',
    ],
  },
  tet: {
    intro:
      'Тетум — австронезійська мова Східного Тимору, що стала символом національної єдності під час боротьби за незалежність від Індонезії наприкінці XX століття. Столітня португальська колонізація й пізніша католицька церква залишили в ній значний шар португальської лексики.',
    introEn:
      "Tetum is an Austronesian language of East Timor that became a symbol of national unity during the late 20th-century struggle for independence from Indonesia. Centuries of Portuguese colonization and the Catholic Church later left it with a substantial layer of Portuguese vocabulary.",
    facts: [
      'Належить до австронезійської мовної родини, малайсько-полінезійської гілки.',
      'Столітня португальська колонізація (з XVI ст.) наситила тетум португальською лексикою, особливо релігійною й адміністративною.',
      'За часів індонезійської окупації (1975–1999) тетум і католицька церква стали символами опору й національної ідентичності Східного Тимору.',
      'Стала однією з двох офіційних мов незалежного Східного Тимору поряд з португальською 2002 року.',
      'Має кілька діалектів, з яких тетум-праса (столичний) слугує основою офіційного стандарту.',
    ],
    factsEn: [
      'Belongs to the Austronesian language family, Malayo-Polynesian branch.',
      'Centuries of Portuguese colonization (from the 16th century) filled Tetum with Portuguese vocabulary, especially religious and administrative terms.',
      'During the Indonesian occupation (1975–1999), Tetum and the Catholic Church became symbols of resistance and East Timorese national identity.',
      "Became one of independent East Timor's two official languages, alongside Portuguese, in 2002.",
      'Has several dialects, of which Tetum Prasa (the capital dialect) forms the basis of the official standard.',
    ],
  },
  be: {
    intro:
      'Білоруська належить до східнослов\'янської групи й, як і українська, походить від давньоруської мови Київської Русі. Століттями функціонувала як писемна мова Великого князівства Литовського, а її сучасна літературна норма сформувалася наприкінці XIX — на початку XX століття попри жорстку русифікацію.',
    introEn:
      "Belarusian belongs to the East Slavic group and, like Ukrainian, descends from the Old East Slavic language of Kyivan Rus'. It served for centuries as the written chancery language of the Grand Duchy of Lithuania, and its modern literary standard took shape in the late 19th–early 20th century despite intense Russification.",
    facts: [
      'Належить до східнослов\'янської групи мов, разом з українською та російською.',
      'Розвинулася з давньоруської мови часів Київської Русі.',
      'Старобілоруська мова була офіційною канцелярською мовою Великого князівства Литовського протягом кількох століть.',
      'Сучасну літературну норму заклали письменники кінця XIX — початку XX століття, зокрема Янка Купала та Якуб Колас.',
      'Попри офіційний статус поряд з російською, більшість населення Білорусі сьогодні використовує російську мову у повсякденному спілкуванні.',
    ],
    factsEn: [
      'Belongs to the East Slavic group of languages, alongside Ukrainian and Russian.',
      "Developed from the Old East Slavic language of Kyivan Rus'.",
      'Old Belarusian was the official chancery language of the Grand Duchy of Lithuania for several centuries.',
      'The modern literary standard was shaped by late-19th and early-20th-century writers, notably Yanka Kupala and Yakub Kolas.',
      "Despite official status alongside Russian, most of Belarus's population today uses Russian in everyday communication.",
    ],
  },
  qya: {
    intro:
      'Квенья — одна з ельфійських мов, створених Дж. Р. Р. Толкіном, філологом за фахом, який розробляв її десятиліттями як особисте естетичне й наукове захоплення задовго до написання "Володаря перснів". Толкін надихався фінською мовою, зокрема її фонетикою й багатою відмінковою системою.',
    introEn:
      'Quenya is one of the Elvish languages created by J. R. R. Tolkien, a philologist by training, who developed it over decades as a personal aesthetic and scholarly passion long before writing "The Lord of the Rings." Tolkien drew inspiration from Finnish, particularly its phonetics and rich case system.',
    facts: [
      'Створена Дж. Р. Р. Толкіном, професором англосаксонської мови в Оксфорді, який розпочав роботу над нею ще в 1910-х роках.',
      'Толкін називав створення мов своїм "таємним пороком" — хобі, що передувало написанню будь-яких історій про Середзем\'я.',
      'Фонетика й граматика квеньї значною мірою натхненні фінською мовою, яку Толкін вивчав із захопленням.',
      'У леґендаріумі Толкіна квенья — "високоельфійська" мова, мова мудрості й церемоній, подібна до статусу латини в реальній Європі.',
      'Має детально розроблену граматику з десятьма відмінками та системою дієслівних часів, задокументовану в посмертно виданих працях Толкіна.',
    ],
    factsEn: [
      'Created by J. R. R. Tolkien, a professor of Anglo-Saxon at Oxford, who began work on it as early as the 1910s.',
      'Tolkien called language invention his "secret vice" — a hobby that preceded any of his Middle-earth stories.',
      "Quenya's phonetics and grammar draw heavily on Finnish, which Tolkien studied with fascination.",
      'Within Tolkien\'s legendarium, Quenya is the "High-elven" language, used for wisdom and ceremony, akin to Latin\'s role in real-world Europe.',
      "Has an elaborately developed grammar with ten cases and a verb tense system, documented in Tolkien's posthumously published works.",
    ],
  },
  sjn: {
    intro:
      'Синдарин — інша головна ельфійська мова леґендаріуму Дж. Р. Р. Толкіна, яку його ельфи-вигнанці з Валінору перейняли від місцевих ельфів Белеріанду. На відміну від архаїчнішої квеньї, фонетично й граматично вона натхненна валлійською мовою.',
    introEn:
      "Sindarin is the other major Elvish language of J. R. R. Tolkien's legendarium, adopted by his exiled Elves from Valinor from the local Elves of Beleriand. Unlike the more archaic Quenya, it draws phonetically and grammatically on Welsh.",
    facts: [
      'Створена Дж. Р. Р. Толкіном як "розмовна" мова ельфів Середзем\'я, на противагу церемоніальній квеньї.',
      'Фонетика синдарину значною мірою запозичує риси валлійської мови, яку Толкін глибоко цінував.',
      'У леґендаріумі синдарин має власну вигадану історію звукових змін від спільного ельфійського предка — Толкін ретельно продумав її як справжній лінгвіст-компаративіст.',
      'Саме синдарином записані більшість імен та назв у "Володарі перснів", наприклад "Мордор" і "Ґаладріель".',
      'Має характерну систему початкових мутацій приголосних, подібну до тієї, що є в реальних кельтських мовах.',
    ],
    factsEn: [
      'Created by J. R. R. Tolkien as the everyday "spoken" language of Middle-earth\'s Elves, in contrast to the ceremonial Quenya.',
      "Sindarin's phonetics borrow heavily from Welsh, a language Tolkien deeply admired.",
      'Within the legendarium, Sindarin has its own invented history of sound changes from a shared Elvish ancestor — Tolkien worked it out as a genuine comparative linguist would.',
      'Most of the names and places in "The Lord of the Rings," such as "Mordor" and "Galadriel," are Sindarin.',
      'Has a distinctive system of initial consonant mutations, similar to those found in real Celtic languages.',
    ],
  },
  ku: {
    intro:
      'Курдська — іранська мова гірських регіонів Курдистану, розділеного між Туреччиною, Іраком, Іраном і Сирією, унаслідок чого мова існує в кількох писемних формах — латинкою, арабицею й навіть кирилицею серед курдів колишнього СРСР. Це не єдина мова, а група близькоспоріднених діалектів, найбільші з яких — курманджі й сорані.',
    introEn:
      "Kurdish is an Iranian language of the mountainous Kurdistan region, split across Turkey, Iraq, Iran, and Syria, which is why it exists in several written forms — Latin script, Arabic script, and even Cyrillic among Kurds of the former USSR. It's not a single language but a group of closely related dialects, the largest being Kurmanji and Sorani.",
    facts: [
      'Належить до іранської гілки індоєвропейської мовної родини, північно-західна підгрупа.',
      'Курдистан ніколи не мав власної незалежної держави, тому мова розвивалася окремо в чотирьох різних державах.',
      'Курманджі (Туреччина, Сирія) записується латинкою, тоді як сорані (Ірак, Іран) — модифікованою арабицею.',
      'Ці два основні діалекти настільки різняться, що їхні носії часто не розуміють одне одного без перекладу.',
      'Курдський автономний регіон Іраку визнав курдську офіційною мовою поряд з арабською після 1990-х років.',
    ],
    factsEn: [
      'Belongs to the Iranian branch of the Indo-European language family, Northwestern subgroup.',
      'Kurdistan has never had its own independent state, so the language developed separately across four different countries.',
      'Kurmanji (Turkey, Syria) is written in Latin script, while Sorani (Iraq, Iran) uses a modified Arabic script.',
      "The two main dialects differ enough that their speakers often can't understand each other without translation.",
      "Iraq's Kurdistan Region recognized Kurdish as an official language alongside Arabic after the 1990s.",
    ],
  },
  om: {
    intro:
      'Оромо належить до кушитської гілки афразійської мовної родини й є мовою найчисленнішого етносу Ефіопії, хоча століттями її придушували на користь амхарської в державних інституціях. Латинська писемність кваалі, ухвалена 1991 року, замінила попередні спроби записувати оромо ефіопським письмом ґеез.',
    introEn:
      "Oromo belongs to the Cushitic branch of the Afroasiatic language family and is the language of Ethiopia's largest ethnic group, though it was suppressed for centuries in favor of Amharic in state institutions. The Latin-based Qubee script, adopted in 1991, replaced earlier attempts to write Oromo in the Ethiopian Ge'ez script.",
    facts: [
      'Належить до кушитської гілки афразійської мовної родини.',
      'Мова оромо — найчисленнішого етносу Ефіопії, хоча амхарська довго домінувала в державі як єдина офіційна мова.',
      'До 1991 року державна політика примушувала записувати оромо ефіопським письмом ґеез, що погано підходило для її фонетики.',
      'Після падіння режиму Менгісту 1991 року оромо офіційно перейшла на латинську абетку кваалі.',
      'Має традицію усної поезії й системи демократичного самоврядування ґада, що передається через мовну й культурну практику.',
    ],
    factsEn: [
      'Belongs to the Cushitic branch of the Afroasiatic language family.',
      "Oromo is the language of Ethiopia's largest ethnic group, though Amharic long dominated as the sole official state language.",
      "Until 1991, state policy forced Oromo to be written in the Ethiopian Ge'ez script, which poorly suited its phonetics.",
      'After the fall of the Mengistu regime in 1991, Oromo officially switched to the Latin-based Qubee alphabet.',
      'Has a tradition of oral poetry and the Gadaa democratic self-governance system, both transmitted through language and cultural practice.',
    ],
  },
  ln: {
    intro:
      'Лінгала — мова банту нігеро-конголезької родини, що виникла як спрощена торгова мова вздовж річки Конго наприкінці XIX століття й поширилася завдяки колоніальній армії та пізніше конголезькій музиці румба. Сьогодні це одна з найвпливовіших мов популярної музики Африки.',
    introEn:
      "Lingala is a Bantu language of the Niger-Congo family that emerged as a simplified trade language along the Congo River in the late 19th century and spread through the colonial army and later through Congolese rumba music. Today it's one of the most influential languages of African popular music.",
    facts: [
      'Належить до групи банту нігеро-конголезької мовної родини.',
      'Виникла наприкінці XIX століття як спрощена торгова мова вздовж річки Конго, на основі мови бобанджі.',
      'Бельгійська колоніальна армія "Форс пюблік" активно використовувала й поширювала лінгалу серед солдатів з різних регіонів.',
      'Стала мовою легендарної конголезької музики румба, що зробило її відомою по всій Африці й далеко за її межами.',
      'Одна з чотирьох національних мов Демократичної Республіки Конго поряд з французькою.',
    ],
    factsEn: [
      'Belongs to the Bantu group of the Niger-Congo language family.',
      'Emerged in the late 19th century as a simplified trade language along the Congo River, based on the Bobangi language.',
      'The Belgian colonial army, the Force Publique, actively used and spread Lingala among soldiers from different regions.',
      'Became the language of legendary Congolese rumba music, making it famous across Africa and beyond.',
      'One of the four national languages of the Democratic Republic of the Congo alongside French.',
    ],
  },
  bho: {
    intro:
      'Бходжпурі — індоарійська мова долини Гангу на кордоні Індії й Непалу, яка поширилася по всьому світу разом з робітниками-контрактниками, яких Британська імперія вивозила на плантації Карибів, Маврикію та Фіджі у XIX столітті. Досі об\'єднує діаспорні громади індійського походження на кількох континентах.',
    introEn:
      "Bhojpuri is an Indo-Aryan language of the Ganges Valley on the India-Nepal border that spread worldwide with indentured laborers whom the British Empire shipped to plantations in the Caribbean, Mauritius, and Fiji in the 19th century. It still unites diaspora communities of Indian descent across several continents.",
    facts: [
      'Належить до індоарійської гілки індоєвропейської мовної родини, східна підгрупа.',
      'Розвинулася в регіоні Бходжпур на схід від сучасного штату Уттар-Прадеш.',
      'Британська система законтрактованої праці (XIX ст.) вивезла сотні тисяч бходжпуромовних робітників на плантації Карибів, Маврикію, Фіджі та Південної Африки.',
      'Досі активно використовується діаспорними спільнотами в Тринідаді, Гаяні, Суринамі та на Маврикії.',
      'Багата на традицію народних пісень і фольклору, тісно пов\'язану з сільськогосподарським календарем.',
    ],
    factsEn: [
      'Belongs to the Indo-Aryan branch of the Indo-European language family, Eastern subgroup.',
      'Developed in the Bhojpur region east of what is now Uttar Pradesh.',
      'The British indentured labor system (19th century) shipped hundreds of thousands of Bhojpuri-speaking workers to plantations in the Caribbean, Mauritius, Fiji, and South Africa.',
      'Still actively used by diaspora communities in Trinidad, Guyana, Suriname, and Mauritius.',
      'Has a rich tradition of folk songs closely tied to the agricultural calendar.',
    ],
  },
  ceb: {
    intro:
      'Себуанська — австронезійська мова островів центральних Філіппін, друга за кількістю носіїв мова країни після тагальської. Магеллан висадився саме на острові Себу 1521 року, тож себуанська мала один з перших контактів з європейцями серед філіппінських мов.',
    introEn:
      "Cebuano is an Austronesian language of the central Philippine islands, the country's second most-spoken language after Tagalog. Magellan landed on the island of Cebu itself in 1521, giving Cebuano one of the earliest contacts with Europeans among Philippine languages.",
    facts: [
      'Належить до австронезійської мовної родини, філіппінської підгрупи.',
      'Друга за кількістю носіїв мова Філіппін після тагальської (філіппінської).',
      'Фернан Магеллан висадився на острові Себу 1521 року — один з перших контактів європейців з філіппінськими мовами.',
      'Іспанські місіонери склали ранні словники й граматики себуанської ще у XVI–XVII століттях.',
      'На відміну від тагальської, не має офіційного загальнонаціонального статусу, хоча ширше поширена в устах носіїв на островах Вісаяс і Мінданао.',
    ],
    factsEn: [
      'Belongs to the Austronesian language family, Philippine subgroup.',
      "The Philippines' second most-spoken language after Tagalog (Filipino).",
      'Ferdinand Magellan landed on the island of Cebu in 1521 — one of the earliest European contacts with a Philippine language.',
      'Spanish missionaries compiled early Cebuano dictionaries and grammars as far back as the 16th–17th centuries.',
      "Unlike Tagalog, it has no official nationwide status, though it's spoken by more people across the Visayas and Mindanao islands.",
    ],
  },
  rm: {
    intro:
      'Романш — романська мова швейцарського кантону Граубюнден, що збереглася в альпійських долинах, ізольованих від решти романського світу після розпаду Римської імперії. Стала четвертою національною мовою Швейцарії 1938 року, попри те, що нею розмовляє менш ніж 1% населення країни.',
    introEn:
      "Romansh is a Romance language of the Swiss canton of Graubünden, preserved in alpine valleys isolated from the rest of the Romance world after the fall of the Roman Empire. It became Switzerland's fourth national language in 1938, despite being spoken by less than 1% of the country's population.",
    facts: [
      'Належить до ретороманської підгрупи романських мов, разом з фріульською та ладинською мовами Італії.',
      'Розвинулася з народної латини легіонерів і поселенців у гірських долинах провінції Реція.',
      'Ізоляція альпійських долин століттями захищала мову від впливу сусідніх німецької та італійської.',
      'Стала четвертою офіційною національною мовою Швейцарії за результатами референдуму 1938 року.',
      'Має п\'ять основних писемних діалектів, для яких лише 1982 року створили об\'єднаний стандарт "рументш ґришун".',
    ],
    factsEn: [
      'Belongs to the Rhaeto-Romance subgroup of the Romance languages, alongside Friulian and Ladin of Italy.',
      'Developed from the Vulgar Latin of legionaries and settlers in the mountain valleys of the Roman province of Raetia.',
      'The isolation of the alpine valleys shielded the language for centuries from surrounding German and Italian influence.',
      "Became Switzerland's fourth official national language following a 1938 referendum.",
      'Has five main written dialects, for which a unified standard, "Rumantsch Grischun," was only created in 1982.',
    ],
  },
  ty: {
    intro:
      'Таїтянська належить до полінезійської гілки австронезійської родини й стала мовою широкого культурного впливу в Тихому океані завдяки центральному розташуванню Товариських островів на шляхах давньої полінезійської навігації. Європейські мореплавці XVIII століття, зокрема Джеймс Кук, зробили Таїті одним з перших полінезійських островів, детально описаних на Заході.',
    introEn:
      "Tahitian belongs to the Polynesian branch of the Austronesian family and became a language of broad cultural influence in the Pacific thanks to the Society Islands' central position on ancient Polynesian navigation routes. 18th-century European voyagers, notably James Cook, made Tahiti one of the first Polynesian islands extensively documented by the West.",
    facts: [
      'Належить до полінезійської гілки австронезійської мовної родини.',
      'Товариські острови, зокрема Таїті, були важливим вузлом давніх полінезійських мореплавних шляхів і міграцій.',
      'Місіонери Лондонського місіонерського товариства створили писемну норму на основі латинки на початку XIX століття.',
      'Відвідини Джеймса Кука та інших європейських мореплавців у XVIII столітті зробили Таїті одним з найвідоміших полінезійських островів у Європі.',
      'Офіційно визнана мова Французької Полінезії поряд з французькою.',
    ],
    factsEn: [
      'Belongs to the Polynesian branch of the Austronesian language family.',
      'The Society Islands, including Tahiti, were an important hub of ancient Polynesian voyaging routes and migrations.',
      'Missionaries of the London Missionary Society created a Latin-based written standard in the early 19th century.',
      'Visits by James Cook and other European voyagers in the 18th century made Tahiti one of the best-known Polynesian islands in Europe.',
      'A recognized language of French Polynesia alongside French.',
    ],
  },
  ch: {
    intro:
      'Чаморро — австронезійська мова Маріанських островів (Гуам), що пережила понад три століття іспанської колонізації, яка залишила в ній значний шар іспанської лексики, а згодом і американське правління XX століття. Це один з небагатьох випадків, коли мова корінного населення Тихого океану зберегла офіційний статус під владою США.',
    introEn:
      "Chamorro is an Austronesian language of the Mariana Islands (Guam) that survived over three centuries of Spanish colonization, which left it a significant layer of Spanish vocabulary, followed by 20th-century American rule. It's one of the few cases where an Indigenous Pacific language retained official status under U.S. governance.",
    facts: [
      'Належить до австронезійської мовної родини, хоча за деякими рисами дещо відрізняється від інших океанійських мов регіону.',
      'Іспанська колонізація Маріанських островів, що тривала з 1668 до 1898 року, залишила величезний шар іспанських запозичень у мові.',
      'Іспанські місіонери майже повністю знищили доколоніальне корінне населення чаморро через хвороби й насильство під час "чаморрських воєн" XVII століття.',
      'Після 1898 року острів Гуам перейшов під контроль США, що додало англомовний вплив на сучасну мову.',
      'Офіційна мова території Гуам США поряд з англійською.',
    ],
    factsEn: [
      'Belongs to the Austronesian language family, though it differs somewhat from other Oceanic languages of the region in several features.',
      'Spanish colonization of the Mariana Islands, lasting from 1668 to 1898, left a huge layer of Spanish loanwords in the language.',
      'Spanish missionaries nearly wiped out the pre-colonial Indigenous Chamorro population through disease and violence during the 17th-century "Chamorro Wars."',
      'After 1898, Guam passed to U.S. control, adding English influence to the modern language.',
      'An official language of the U.S. territory of Guam alongside English.',
    ],
  },
  mh: {
    intro:
      'Маршальська належить до мікронезійської гілки австронезійської родини й є мовою атолового архіпелагу Тихого океану, чиї навігатори століттями володіли унікальним мистецтвом читання морських хвиль за допомогою плетених "карт хвиль" — стик-чартів. Мова пережила ядерні випробування США на атолі Бікіні в 1940–50-х роках, які змусили переселити цілі громади.',
    introEn:
      'Marshallese belongs to the Micronesian branch of the Austronesian family and is the language of a Pacific atoll archipelago whose navigators mastered, for centuries, the unique art of reading ocean swells using woven "stick charts." The language endured U.S. nuclear testing at Bikini Atoll in the 1940s–50s, which forced entire communities to relocate.',
    facts: [
      'Належить до мікронезійської гілки океанійської групи австронезійської мовної родини.',
      'Маршальські навігатори традиційно використовували плетені стик-чарти для читання морських хвиль і течій під час навігації між атолами.',
      'США провели 67 ядерних випробувань на атолах Бікіні й Енівітак у 1946–1958 роках, змусивши переселити місцеві громади.',
      'Місіонери створили писемну норму на основі латинки у XIX столітті.',
      'Офіційна мова Республіки Маршаллові Острови поряд з англійською.',
    ],
    factsEn: [
      'Belongs to the Micronesian branch of the Oceanic group of the Austronesian language family.',
      'Marshallese navigators traditionally used woven stick charts to read ocean swells and currents when navigating between atolls.',
      'The U.S. conducted 67 nuclear tests at Bikini and Enewetak atolls between 1946 and 1958, forcing local communities to relocate.',
      'Missionaries created a Latin-based written standard in the 19th century.',
      'An official language of the Republic of the Marshall Islands alongside English.',
    ],
  },
  pau: {
    intro:
      'Палау — австронезійська мова однойменного тихоокеанського архіпелагу, що зазнала незвично багатошарового колоніального впливу — іспанського, німецького, японського та американського — упродовж лише одного століття. Це одна з небагатьох мов світу з офіційним статусом поряд з японською в певний історичний період.',
    introEn:
      "Palauan is an Austronesian language of the Pacific archipelago of the same name that experienced an unusually layered colonial history — Spanish, German, Japanese, and American — within just one century. It's one of the few languages in the world to have held official status alongside Japanese during a period of history.",
    facts: [
      'Належить до австронезійської мовної родини, хоча її точне місце серед океанійських мов лишається предметом дискусій лінгвістів.',
      'За менш ніж століття Палау пережила іспанське, німецьке, японське та американське колоніальне правління, кожне з яких залишило мовний слід.',
      'Японське правління (1914–1944) залишило значний шар японських запозичень у сучасній палауській лексиці.',
      'Місіонери й американська адміністрація розробили писемну норму на основі латинки у XX столітті.',
      'Офіційна мова Республіки Палау поряд з англійською.',
    ],
    factsEn: [
      'Belongs to the Austronesian language family, though its exact place among Oceanic languages remains debated among linguists.',
      'In under a century, Palau experienced Spanish, German, Japanese, and American colonial rule, each leaving a linguistic mark.',
      'Japanese rule (1914–1944) left a significant layer of Japanese loanwords in modern Palauan vocabulary.',
      'Missionaries and the American administration developed a Latin-based written standard in the 20th century.',
      'An official language of the Republic of Palau alongside English.',
    ],
  },
  nah: {
    intro:
      'Науатль — юто-ацтецька мова центральної Мексики, державна мова ацтецької імперії, яка до іспанського завоювання 1521 року записувалася піктографічним і логографічним письмом. Подарувала світовим мовам такі слова, як "шоколад", "томат", "авокадо" й "койот".',
    introEn:
      'Nahuatl is a Uto-Aztecan language of central Mexico, the state language of the Aztec Empire, which before the 1521 Spanish conquest was written in a pictographic and logographic script. It gave world languages words like "chocolate," "tomato," "avocado," and "coyote."',
    facts: [
      'Належить до юто-ацтецької мовної родини Мезоамерики.',
      'Була державною мовою ацтецької (мехіканської) імперії до іспанського завоювання 1521 року під проводом Ернана Кортеса.',
      'До завоювання записувалася системою піктографічних і логографічних знаків, відмінною від алфавітного письма.',
      'Іспанські місіонери адаптували латинську абетку для науатля вже у XVI столітті й використовували мову для євангелізації.',
      'Подарувала англійській та іспанській мовам такі слова, як "chocolate" (шоколад), "tomato" (томат), "avocado" (авокадо) і "coyote" (койот).',
    ],
    factsEn: [
      'Belongs to the Uto-Aztecan language family of Mesoamerica.',
      'Was the state language of the Aztec (Mexica) Empire until the 1521 Spanish conquest led by Hernán Cortés.',
      'Before the conquest, it was written using a system of pictographic and logographic signs, distinct from alphabetic writing.',
      'Spanish missionaries adapted the Latin alphabet for Nahuatl as early as the 16th century and used the language for evangelization.',
      'Gave English and Spanish words such as "chocolate," "tomato," "avocado," and "coyote."',
    ],
  },
  nv: {
    intro:
      'Навахо належить до атабаської мовної родини Північної Америки й здобула світову славу завдяки "кодоговорильникам" — навахомовним морським піхотинцям США, чий шифр на основі мови так і лишився нерозгаданим японцями впродовж усієї Другої світової війни. Це найпоширеніша мова корінних народів США й Канади за кількістю носіїв.',
    introEn:
      "Navajo belongs to the Athabaskan language family of North America and gained worldwide fame through the \"code talkers\" — Navajo-speaking U.S. Marines whose language-based code remained unbroken by Japan throughout World War II. It's the most widely spoken Indigenous language in the United States and Canada.",
    facts: [
      'Належить до атабаської (на-дене) мовної родини Північної Америки.',
      'Під час Другої світової війни морська піхота США завербувала навахомовних "кодоговорильників", чий шифр на основі мови ворог так і не розшифрував.',
      'Має складну дієслівну систему з численними префіксами, що передають напрямок, спосіб дії та інші відтінки значення.',
      'Політика примусової асиміляції в школах-інтернатах США протягом XX століття намагалася викорінити мову серед дітей навахо.',
      'Найпоширеніша мова корінних народів США й Канади на північ від Мексики.',
    ],
    factsEn: [
      'Belongs to the Athabaskan (Na-Dené) language family of North America.',
      'During World War II, the U.S. Marine Corps recruited Navajo-speaking "code talkers," whose language-based code was never broken by the enemy.',
      'Has a complex verb system with numerous prefixes conveying direction, manner, and other shades of meaning.',
      'Forced assimilation policy in U.S. boarding schools throughout the 20th century tried to erase the language among Navajo children.',
      'The most widely spoken Indigenous language in the United States and Canada north of Mexico.',
    ],
  },
  tlh: {
    intro:
      'Клінгонська — мова, створена лінгвістом Марком Окрандом 1984 року для франшизи "Зоряний шлях", навмисно побудована з нетиповими для людських мов рисами, щоб звучати по-справжньому "інопланетно". Це одна з найуспішніших вигаданих мов світу з активною спільнотою носіїв і навіть перекладами класики світової літератури.',
    introEn:
      'Klingon is a language created by linguist Marc Okrand in 1984 for the Star Trek franchise, deliberately built with features atypical of human languages to sound genuinely "alien." It\'s one of the most successful constructed languages in the world, with an active community of speakers and even translations of world literary classics.',
    facts: [
      'Створена лінгвістом Марком Окрандом 1984 року для фільму "Зоряний шлях III: У пошуках Спока".',
      'Окранд навмисне будував граматику з рідкісним для мов світу порядком слів "додаток-присудок-підмет".',
      'Інститут клінгонської мови, заснований 1992 року, підтримує спільноту носіїв, видає словники й переклади.',
      'Клінгонською перекладено уривки Шекспіра ("Гамлет") та інші класичні твори.',
      'Одна з небагатьох вигаданих мов, включених у деякі академічні лінгвістичні дослідження штучних мов.',
    ],
    factsEn: [
      'Created by linguist Marc Okrand in 1984 for the film "Star Trek III: The Search for Spock."',
      'Okrand deliberately built the grammar around an object-verb-subject word order, rare among the world\'s languages.',
      'The Klingon Language Institute, founded in 1992, supports a community of speakers and publishes dictionaries and translations.',
      'Portions of Shakespeare ("Hamlet") and other literary classics have been translated into Klingon.',
      'One of the few constructed languages to be included in some academic linguistic studies of artificial languages.',
    ],
  },
  val: {
    intro:
      'Валірійську створив лінгвіст-конлангер Девід Дж. Петерсон для телесеріалу "Гра престолів" на основі кількох слів, які автор книг Джордж Р. Р. Мартін вигадав для оригінальних романів. Петерсон розробив повноцінну граматику з відмінками й кількома "низькими" діалектами, що розвинулися з єдиної класичної валірійської.',
    introEn:
      'High Valyrian was created by linguist-conlanger David J. Peterson for the "Game of Thrones" TV series, based on a handful of words that author George R. R. Martin had invented for the original novels. Peterson developed a full grammar with cases and several "low" descendant dialects branching from a single classical Valyrian.',
    facts: [
      'Створена лінгвістом Девідом Дж. Петерсоном для телесеріалу HBO "Гра престолів" (з 2011 року).',
      'Ґрунтується на кількох словах і назвах, які Джордж Р. Р. Мартін вигадав у романах "Пісня льоду й полум\'я".',
      'Має складну систему відмінків і чотири граматичні роди — так званий "класичний" стандарт високої валірійської.',
      'У сюжеті серіалу високу валірійську, за аналогією з латиною, витіснили кілька "низьких" діалектів-нащадків.',
      'Петерсон розробляв мову настільки детально, що акторів навчали справжньої вимови й граматики для зйомок.',
    ],
    factsEn: [
      'Created by linguist David J. Peterson for HBO\'s "Game of Thrones" TV series (from 2011).',
      'Based on a handful of words and names George R. R. Martin invented in the "A Song of Ice and Fire" novels.',
      'Has a complex case system and four grammatical genders — the so-called "classical" standard of High Valyrian.',
      'Within the show\'s story, High Valyrian, like Latin, was displaced by several descendant "Low Valyrian" dialects.',
      'Peterson developed the language in such detail that actors were coached on genuine pronunciation and grammar for filming.',
    ],
  },
  dth: {
    intro:
      'Дотракійську, як і валірійську, створив лінгвіст Девід Дж. Петерсон для серіалу "Гра престолів" на основі кількох слів Джорджа Р. Р. Мартіна, розвинувши їх у повноцінну мову з власною граматикою й культурним контекстом кочового народу вершників. Петерсон переміг у конкурсі серед конлангерів, щоб отримати це замовлення.',
    introEn:
      'Dothraki, like Valyrian, was created by linguist David J. Peterson for "Game of Thrones," based on a handful of George R. R. Martin\'s words, which Peterson developed into a full language with its own grammar and the cultural context of a nomadic horse-riding people. Peterson won a competition among conlangers to land the commission.',
    facts: [
      'Створена лінгвістом Девідом Дж. Петерсоном 2009 року, який виграв відкритий конкурс Товариства мовотворення на розробку мови для серіалу.',
      'Ґрунтується на кількох словах ("khaleesi", "khal"), які Джордж Р. Р. Мартін вигадав у романах "Пісня льоду й полум\'я".',
      'Граматика й лексика навмисне відображають культуру кочового народу вершників — багато слів пов\'язані з кіньми, боєм і степом.',
      'Не має власної писемності в межах сюжету серіалу — дотракійці зображені як усний, безписемний народ.',
      'Петерсон продовжив розвивати мову й після завершення серіалу через спільноту шанувальників-конлангерів.',
    ],
    factsEn: [
      'Created by linguist David J. Peterson in 2009, who won an open competition run by the Language Creation Society to develop the language for the show.',
      'Based on a handful of words ("khaleesi," "khal") that George R. R. Martin invented in the "A Song of Ice and Fire" novels.',
      'Its grammar and vocabulary deliberately reflect the culture of a nomadic horse-riding people — many words relate to horses, combat, and the steppe.',
      'Has no writing system within the show\'s story — the Dothraki are portrayed as an oral, non-literate people.',
      'Peterson continued developing the language after the show ended, through a community of fan conlangers.',
    ],
  },
};
