// Vymova — data/senses.ts
// Numbered meanings for highly polysemous English words, each with its own
// example sentence (Cambridge-style "multiple senses" view).
// Key: lowercase English headword.

export interface SenseEntry {
  pos: string;
  translation: string;
  exEn: string;
  exUa: string;
}

export const SENSES: Record<string, SenseEntry[]> = {
  light: [
    {
      pos: 'noun',
      translation: 'світло',
      exEn: 'Please turn on the light in the hallway.',
      exUa: 'Будь ласка, увімкни світло в коридорі.',
    },
    {
      pos: 'adj',
      translation: 'легкий (за вагою)',
      exEn: 'This suitcase is surprisingly light for its size.',
      exUa: 'Ця валіза несподівано легка для свого розміру.',
    },
  ],
  right: [
    {
      pos: 'adj',
      translation: 'правильний',
      exEn: 'You gave the right answer to every question.',
      exUa: 'Ти дав правильну відповідь на кожне запитання.',
    },
    {
      pos: 'noun',
      translation: 'право',
      exEn: 'Everyone has the right to a fair trial.',
      exUa: 'Кожен має право на справедливий суд.',
    },
    {
      pos: 'adv',
      translation: 'праворуч',
      exEn: 'Turn right at the next intersection.',
      exUa: 'Поверни праворуч на наступному перехресті.',
    },
  ],
  mean: [
    {
      pos: 'adj',
      translation: 'злий, підлий',
      exEn: 'It was mean of him to laugh at her mistake.',
      exUa: 'Було підло з його боку насміхатися з її помилки.',
    },
    {
      pos: 'v',
      translation: 'означати',
      exEn: 'What does this strange word actually mean?',
      exUa: 'Що насправді означає це дивне слово?',
    },
  ],
  fine: [
    {
      pos: 'adj',
      translation: 'чудовий, добрий',
      exEn: 'We had a fine evening at the theatre.',
      exUa: 'У нас був чудовий вечір у театрі.',
    },
    {
      pos: 'noun',
      translation: 'штраф',
      exEn: 'She paid a fine for parking illegally.',
      exUa: 'Вона заплатила штраф за неправильне паркування.',
    },
  ],
  mind: [
    {
      pos: 'noun',
      translation: 'розум',
      exEn: 'Meditation helps to calm an anxious mind.',
      exUa: 'Медитація допомагає заспокоїти неспокійний розум.',
    },
    {
      pos: 'v',
      translation: 'заперечувати, мати щось проти',
      exEn: 'Would you mind closing the window?',
      exUa: 'Ти не проти зачинити вікно?',
    },
  ],
  present: [
    {
      pos: 'noun',
      translation: 'подарунок',
      exEn: 'She wrapped the present in colourful paper.',
      exUa: 'Вона завернула подарунок у барвистий папір.',
    },
    {
      pos: 'v',
      translation: 'представляти, демонструвати',
      exEn: 'She will present her findings tomorrow.',
      exUa: 'Вона представить свої висновки завтра.',
    },
    {
      pos: 'adj',
      translation: 'присутній',
      exEn: 'All the team members were present at the meeting.',
      exUa: 'Усі члени команди були присутні на зустрічі.',
    },
  ],
  watch: [
    {
      pos: 'v',
      translation: 'стежити, дивитися',
      exEn: 'She watched the children playing in the yard.',
      exUa: 'Вона спостерігала за дітьми, що гралися у дворі.',
    },
    {
      pos: 'noun',
      translation: 'годинник (наручний)',
      exEn: 'He got a gold watch for his retirement.',
      exUa: 'На пенсію йому подарували золотий годинник.',
    },
  ],
  well: [
    {
      pos: 'adv',
      translation: 'добре',
      exEn: 'She did very well in her final exams.',
      exUa: 'Вона дуже добре впоралась на випускних іспитах.',
    },
    {
      pos: 'noun',
      translation: 'колодязь',
      exEn: 'The villagers drew water from an old well.',
      exUa: 'Селяни брали воду зі старого колодязя.',
    },
  ],
  bank: [
    {
      pos: 'noun',
      translation: 'банк',
      exEn: 'She deposited the cheque at the bank.',
      exUa: 'Вона внесла чек у банк.',
    },
    {
      pos: 'noun',
      translation: 'берег (річки)',
      exEn: 'They sat fishing on the grassy river bank.',
      exUa: "Вони сиділи й рибалили на трав'янистому берегу річки.",
    },
  ],
  match: [
    {
      pos: 'noun',
      translation: 'матч, гра',
      exEn: 'They watched the football match on TV.',
      exUa: 'Вони дивилися футбольний матч по телевізору.',
    },
    {
      pos: 'v',
      translation: 'підходити, відповідати',
      exEn: 'Her shoes perfectly match her dress.',
      exUa: 'Її туфлі ідеально підходять до сукні.',
    },
  ],
  plant: [
    {
      pos: 'noun',
      translation: 'рослина',
      exEn: 'She waters the plant every morning.',
      exUa: 'Вона поливає рослину щоранку.',
    },
    {
      pos: 'v',
      translation: 'садити; підкладати',
      exEn: 'He planted a row of sunflowers in the garden.',
      exUa: 'Він посадив ряд соняшників у саду.',
    },
  ],
  suit: [
    {
      pos: 'v',
      translation: 'підходити, бути зручним',
      exEn: 'Saturday morning would suit me best for the meeting.',
      exUa: 'Субота вранці підійшла б мені найкраще для зустрічі.',
    },
    {
      pos: 'noun',
      translation: 'костюм',
      exEn: 'He wore a dark suit to the interview.',
      exUa: "Він одягнув темний костюм на інтерв'ю.",
    },
  ],
  fly: [
    {
      pos: 'noun',
      translation: 'муха',
      exEn: 'A fly kept buzzing around the kitchen.',
      exUa: 'Муха весь час дзижчала по кухні.',
    },
    {
      pos: 'v',
      translation: 'літати',
      exEn: 'Birds fly south for the winter.',
      exUa: 'Птахи летять на південь на зиму.',
    },
  ],
  point: [
    {
      pos: 'noun',
      translation: 'точка',
      exEn: 'Mark the exact point on the map.',
      exUa: 'Познач точну точку на карті.',
    },
    {
      pos: 'v',
      translation: 'вказувати',
      exEn: 'She pointed at the door and asked him to leave.',
      exUa: 'Вона показала на двері й попросила його вийти.',
    },
    {
      pos: 'noun',
      translation: 'сенс, суть',
      exEn: 'There is no point in arguing about this any further.',
      exUa: 'Немає сенсу далі сперечатися про це.',
    },
  ],
  ring: [
    {
      pos: 'noun',
      translation: 'каблучка',
      exEn: 'He gave her a diamond ring when he proposed.',
      exUa: 'Він подарував їй діамантову каблучку, коли пропонував руку.',
    },
    {
      pos: 'v',
      translation: 'дзвонити',
      exEn: 'Could you ring me later this evening?',
      exUa: 'Чи міг би ти зателефонувати мені пізніше ввечері?',
    },
  ],
  scale: [
    {
      pos: 'noun',
      translation: 'масштаб',
      exEn: 'The scale of the damage was hard to believe.',
      exUa: 'Масштаб збитків було важко уявити.',
    },
    {
      pos: 'v',
      translation: 'злазити, підніматися на',
      exEn: 'The climbers scaled the steep cliff with ease.',
      exUa: 'Альпіністи легко піднялися на крутий обрив.',
    },
    {
      pos: 'noun',
      translation: 'ваги (для зважування)',
      exEn: 'Step on the scale to check your weight.',
      exUa: 'Стань на ваги, щоб перевірити свою вагу.',
    },
  ],
  even: [
    {
      pos: 'adj',
      translation: 'рівний, гладкий',
      exEn: 'Make sure the table legs are even before you sit down.',
      exUa: 'Переконайся, що ніжки столу рівні, перш ніж сідати.',
    },
    {
      pos: 'adv',
      translation: 'навіть',
      exEn: 'She did not even notice the loud noise outside.',
      exUa: 'Вона навіть не помітила гучного шуму зовні.',
    },
  ],
  run: [
    {
      pos: 'v',
      translation: 'бігти',
      exEn: 'She runs five kilometres every morning.',
      exUa: "Вона бігає п'ять кілометрів щоранку.",
    },
    {
      pos: 'v',
      translation: 'керувати, управляти',
      exEn: 'He runs a small family business in the city centre.',
      exUa: 'Він керує невеликим сімейним бізнесом у центрі міста.',
    },
  ],
  play: [
    {
      pos: 'v',
      translation: 'грати',
      exEn: 'The children love to play outside after school.',
      exUa: 'Діти люблять гратися надворі після школи.',
    },
    {
      pos: 'noun',
      translation: "п'єса",
      exEn: 'They went to see a play at the local theatre.',
      exUa: "Вони пішли подивитися п'єсу в місцевому театрі.",
    },
  ],
  book: [
    {
      pos: 'noun',
      translation: 'книга',
      exEn: 'She is reading a fascinating book about ancient history.',
      exUa: 'Вона читає захопливу книгу про стародавню історію.',
    },
    {
      pos: 'v',
      translation: 'бронювати',
      exEn: 'They booked a table at their favourite restaurant.',
      exUa: 'Вони забронювали столик у своєму улюбленому ресторані.',
    },
  ],
  bear: [
    {
      pos: 'noun',
      translation: 'медвідь',
      exEn: 'A brown bear wandered through the forest looking for food.',
      exUa: 'Бурий медвідь бродив лісом, шукаючи їжу.',
    },
    {
      pos: 'v',
      translation: 'терпіти, нести',
      exEn: 'She could hardly bear the pain after the long hike.',
      exUa: 'Вона ледве могла терпіти біль після довгого походу.',
    },
  ],
  bat: [
    {
      pos: 'noun',
      translation: 'кажан',
      exEn: 'A bat flew silently through the dark cave.',
      exUa: 'Кажан безшумно пролетів темною печерою.',
    },
    {
      pos: 'noun',
      translation: 'бейсбольна біта',
      exEn: 'He gripped the bat tightly before the pitch.',
      exUa: 'Він міцно стиснув бейсбольну біту перед подачею.',
    },
  ],
  spring: [
    {
      pos: 'noun',
      translation: 'весна',
      exEn: 'Flowers begin to bloom in early spring.',
      exUa: 'Квіти починають цвісти на початку весни.',
    },
    {
      pos: 'noun',
      translation: 'пружина',
      exEn: 'The old mattress had a broken spring poking through.',
      exUa: 'У старому матраці випинала зламана пружина.',
    },
    {
      pos: 'v',
      translation: 'стрибати',
      exEn: 'The cat sprang onto the windowsill in one swift move.',
      exUa: 'Кіт стрибнув на підвіконня одним швидким рухом.',
    },
  ],
  crane: [
    {
      pos: 'noun',
      translation: 'журавель',
      exEn: 'A graceful crane stood at the edge of the lake.',
      exUa: 'Граційний журавель стояв на краю озера.',
    },
    {
      pos: 'noun',
      translation: 'будівельний кран',
      exEn: 'A tall crane lifted steel beams to the top floor.',
      exUa: 'Високий кран піднімав сталеві балки на верхній етаж.',
    },
  ],
  pitch: [
    {
      pos: 'v',
      translation: 'кидати, подавати',
      exEn: 'He pitched the ball straight over the plate.',
      exUa: 'Він кинув мʼяч прямо над базою.',
    },
    {
      pos: 'noun',
      translation: 'висота звуку',
      exEn: 'The singer struggled to hit the highest pitch.',
      exUa: 'Співачка намагалася взяти найвищу ноту.',
    },
    {
      pos: 'noun',
      translation: 'спортивне поле',
      exEn: 'The players ran onto the pitch to warm up.',
      exUa: 'Гравці вибігли на поле, щоб розігрітися.',
    },
  ],
  fair: [
    {
      pos: 'adj',
      translation: 'справедливий',
      exEn: 'The judge made sure the trial was fair to both sides.',
      exUa: 'Суддя простежив, щоб суд був справедливим до обох сторін.',
    },
    {
      pos: 'noun',
      translation: 'ярмарок',
      exEn: 'They rode the Ferris wheel at the county fair.',
      exUa: 'Вони покаталися на колесі огляду на ярмарку.',
    },
  ],
  pole: [
    {
      pos: 'noun',
      translation: 'стовп, жердина',
      exEn: 'He used a long pole to fish the ball out of the pond.',
      exUa: 'Він використав довгу палицю, щоб виловити мʼяч зі ставка.',
    },
    {
      pos: 'noun',
      translation: 'полюс (географічний)',
      exEn: 'Explorers finally reached the South Pole after months of travel.',
      exUa: 'Дослідники нарешті досягли Південного полюса після місяців подорожі.',
    },
  ],
  seal: [
    {
      pos: 'noun',
      translation: 'тюлень',
      exEn: 'A seal basked lazily on the rocky shore.',
      exUa: 'Тюлень ліниво вигрівався на скелястому березі.',
    },
    {
      pos: 'v',
      translation: 'запечатувати',
      exEn: 'She sealed the envelope before mailing it.',
      exUa: 'Вона запечатала конверт перед тим, як відправити його.',
    },
  ],
  nail: [
    {
      pos: 'noun',
      translation: 'ніготь',
      exEn: 'She painted her nails a bright shade of red.',
      exUa: 'Вона пофарбувала нігті в яскраво-червоний колір.',
    },
    {
      pos: 'noun',
      translation: 'цвях',
      exEn: 'He hammered a nail into the wooden board.',
      exUa: 'Він забив цвях у деревʼяну дошку.',
    },
  ],
  club: [
    {
      pos: 'noun',
      translation: 'клуб (товариство)',
      exEn: 'She joined a book club to meet other readers.',
      exUa: 'Вона приєдналася до книжкового клубу, щоб познайомитися з іншими читачами.',
    },
    {
      pos: 'noun',
      translation: 'ключка (для гольфу)',
      exEn: 'He swung the golf club and missed the ball completely.',
      exUa: 'Він змахнув ключкою для гольфу і повністю пропустив мʼяч.',
    },
  ],
  bill: [
    {
      pos: 'noun',
      translation: 'рахунок',
      exEn: 'She paid the electricity bill online.',
      exUa: 'Вона оплатила рахунок за електроенергію онлайн.',
    },
    {
      pos: 'noun',
      translation: 'дзьоб (птаха)',
      exEn: 'The duck used its flat bill to search for food in the mud.',
      exUa: 'Качка використовувала свій плоский дзьоб, щоб шукати їжу в багнюці.',
    },
  ],
  trunk: [
    {
      pos: 'noun',
      translation: 'стовбур (дерева)',
      exEn: 'The old oak had a thick, gnarled trunk.',
      exUa: 'У старого дуба був товстий, вузлуватий стовбур.',
    },
    {
      pos: 'noun',
      translation: 'хобот (слона)',
      exEn: 'The elephant used its trunk to spray water over its back.',
      exUa: 'Слон використав свій хобот, щоб обприскати водою спину.',
    },
    {
      pos: 'noun',
      translation: 'багажник (авто)',
      exEn: 'He put the suitcases in the trunk before leaving.',
      exUa: 'Він поклав валізи в багажник перед виїздом.',
    },
  ],
  sole: [
    {
      pos: 'adj',
      translation: 'єдиний',
      exEn: 'She was the sole survivor of the shipwreck.',
      exUa: 'Вона була єдиною, хто вижив після корабельної аварії.',
    },
    {
      pos: 'noun',
      translation: 'підошва (взуття)',
      exEn: 'The sole of his shoe came loose after the long hike.',
      exUa: 'Підошва його туфлі відклеїлась після довгого походу.',
    },
  ],
  mole: [
    {
      pos: 'noun',
      translation: 'кріт',
      exEn: 'A mole dug tunnels under the garden overnight.',
      exUa: 'Кріт прорив тунелі під садом за ніч.',
    },
    {
      pos: 'noun',
      translation: 'родимка',
      exEn: 'The doctor checked the dark mole on her shoulder.',
      exUa: 'Лікар перевірив темну родимку на її плечі.',
    },
  ],
  cell: [
    {
      pos: 'noun',
      translation: 'клітина (біологічна)',
      exEn: 'Every living organism is made up of tiny cells.',
      exUa: 'Кожен живий організм складається з крихітних клітин.',
    },
    {
      pos: 'noun',
      translation: 'камера (тюремна)',
      exEn: 'The prisoner spent ten years in a small cell.',
      exUa: "Ув'язнений провів десять років у маленькій камері.",
    },
  ],
  key: [
    {
      pos: 'noun',
      translation: 'ключ (від замка)',
      exEn: 'She lost the key to the front door.',
      exUa: 'Вона загубила ключ від вхідних дверей.',
    },
    {
      pos: 'adj',
      translation: 'ключовий, важливий',
      exEn: 'Communication is a key factor in any relationship.',
      exUa: 'Спілкування — ключовий фактор у будь-яких стосунках.',
    },
    {
      pos: 'noun',
      translation: 'тональність (музична)',
      exEn: 'The song was written in the key of C major.',
      exUa: 'Пісня була написана в тональності до-мажор.',
    },
  ],
  pen: [
    {
      pos: 'noun',
      translation: 'ручка (для писання)',
      exEn: 'She signed the document with a black pen.',
      exUa: 'Вона підписала документ чорною ручкою.',
    },
    {
      pos: 'noun',
      translation: 'загорожа (для тварин)',
      exEn: 'The farmer led the sheep into the pen for the night.',
      exUa: 'Фермер завів овець у загорожу на ніч.',
    },
  ],
  jam: [
    {
      pos: 'noun',
      translation: 'джем, варення',
      exEn: 'She spread strawberry jam on her toast.',
      exUa: 'Вона намастила полуничний джем на тост.',
    },
    {
      pos: 'noun',
      translation: 'затор (дорожній)',
      exEn: 'They were stuck in a jam for over an hour.',
      exUa: 'Вони застрягли в заторі більш ніж на годину.',
    },
  ],
  fan: [
    {
      pos: 'noun',
      translation: 'фанат, вболівальник',
      exEn: 'He is a huge fan of classic rock music.',
      exUa: 'Він великий фанат класичної рок-музики.',
    },
    {
      pos: 'noun',
      translation: 'вентилятор',
      exEn: 'She turned on the fan to cool the stuffy room.',
      exUa: 'Вона увімкнула вентилятор, щоб охолодити задушливу кімнату.',
    },
  ],
  tank: [
    {
      pos: 'noun',
      translation: 'танк (військовий)',
      exEn: 'The army tank rolled slowly across the field.',
      exUa: 'Армійський танк повільно проїхав через поле.',
    },
    {
      pos: 'noun',
      translation: 'резервуар, акваріум',
      exEn: 'The fish swam peacefully inside the glass tank.',
      exUa: 'Рибки мирно плавали в скляному акваріумі.',
    },
  ],
  charge: [
    {
      pos: 'noun',
      translation: 'плата, ціна',
      exEn: 'The hotel added a small charge for breakfast.',
      exUa: 'Готель додав невелику плату за сніданок.',
    },
    {
      pos: 'v',
      translation: 'кидатися в атаку',
      exEn: 'The soldiers charged forward despite the danger.',
      exUa: 'Солдати рвонули вперед, незважаючи на небезпеку.',
    },
    {
      pos: 'v',
      translation: 'заряджати',
      exEn: 'Please charge your phone before the trip.',
      exUa: 'Будь ласка, заряди свій телефон перед поїздкою.',
    },
  ],
  file: [
    {
      pos: 'noun',
      translation: 'папка, справа',
      exEn: 'He kept all the receipts in a yellow file.',
      exUa: 'Він тримав усі квитанції в жовтій папці.',
    },
    {
      pos: 'v',
      translation: 'подавати (заяву, скаргу)',
      exEn: 'She decided to file a formal complaint against the company.',
      exUa: 'Вона вирішила подати офіційну скаргу на компанію.',
    },
    {
      pos: 'noun',
      translation: 'ряд, шеренга',
      exEn: 'The students walked in a single file to the exit.',
      exUa: 'Студенти йшли одним рядком до виходу.',
    },
  ],
  record: [
    {
      pos: 'noun',
      translation: 'платівка (вінілова)',
      exEn: 'He collects old jazz records from the 1960s.',
      exUa: 'Він колекціонує старі джазові вінілові платівки 1960-х.',
    },
    {
      pos: 'v',
      translation: 'записувати',
      exEn: 'She recorded the lecture on her phone.',
      exUa: 'Вона записала лекцію на свій телефон.',
    },
    {
      pos: 'noun',
      translation: 'рекорд (спортивний)',
      exEn: 'He broke the world record in the marathon.',
      exUa: 'Він побив світовий рекорд у марафоні.',
    },
  ],
  stick: [
    {
      pos: 'noun',
      translation: 'паличка, гілка',
      exEn: 'The dog ran to fetch the stick.',
      exUa: 'Пес побіг приносити паличку.',
    },
    {
      pos: 'v',
      translation: 'прилипати',
      exEn: "The label wouldn't stick to the wet bottle.",
      exUa: 'Етикетка не хотіла прилипати до вологої бутельки.',
    },
  ],
  spot: [
    {
      pos: 'noun',
      translation: 'пляма',
      exEn: 'There was a small spot of grease on his shirt.',
      exUa: 'На його сорочці була маленька масляна пляма.',
    },
    {
      pos: 'v',
      translation: 'помічати',
      exEn: 'She spotted her friend in the crowded station.',
      exUa: 'Вона помітила свого друга в переповненому вокзалі.',
    },
  ],
  bolt: [
    {
      pos: 'noun',
      translation: 'болт',
      exEn: 'He tightened the bolt with a wrench.',
      exUa: 'Він закрутив болт гайковим ключем.',
    },
    {
      pos: 'v',
      translation: 'кидатися навтьоки',
      exEn: 'The horse bolted at the sound of thunder.',
      exUa: 'Кінь рвонув навтьоки від звуку грому.',
    },
  ],
  patient: [
    {
      pos: 'adj',
      translation: 'терплячий',
      exEn: 'She remained patient even after the long delay.',
      exUa: 'Вона залишалася терплячою навіть після довгої затримки.',
    },
    {
      pos: 'noun',
      translation: 'пацієнт',
      exEn: 'The patient waited quietly in the hospital corridor.',
      exUa: 'Пацієнт спокійно чекав у лікарняному коридорі.',
    },
  ],
  desert: [
    {
      pos: 'noun',
      translation: 'пустеля',
      exEn: 'Few plants can survive in the dry desert.',
      exUa: 'Мало рослин можуть вижити в сухій пустелі.',
    },
    {
      pos: 'v',
      translation: 'покидати, дезертирувати',
      exEn: 'He refused to desert his friends in their time of need.',
      exUa: 'Він відмовився покинути своїх друзів у важку хвилину.',
    },
  ],
  content: [
    {
      pos: 'adj',
      translation: 'задоволений',
      exEn: 'She felt content after a quiet evening at home.',
      exUa: 'Вона почувалася задоволеною після тихого вечора вдома.',
    },
    {
      pos: 'noun',
      translation: 'зміст, вміст',
      exEn: 'The content of the speech surprised everyone in the room.',
      exUa: 'Зміст промови здивував усіх присутніх.',
    },
  ],
  object: [
    {
      pos: 'noun',
      translation: 'предмет',
      exEn: 'There was a strange object lying on the table.',
      exUa: 'На столі лежав дивний предмет.',
    },
    {
      pos: 'v',
      translation: 'заперечувати',
      exEn: 'Her lawyer objected to the question immediately.',
      exUa: 'Її адвокат негайно заперечив проти запитання.',
    },
  ],

  // ── Expanded set ─────────────────────────────────────────────────────────
  bow: [
    {
      pos: 'noun',
      translation: 'бант',
      exEn: "She tied a pink bow in her daughter's hair.",
      exUa: "Вона зав'язала рожевий бант у волоссі доньки.",
    },
    {
      pos: 'noun',
      translation: 'лук (зброя)',
      exEn: 'The archer drew his bow and aimed at the target.',
      exUa: 'Лучник натягнув лук і прицілився в мішень.',
    },
  ],
  tear: [
    {
      pos: 'noun',
      translation: 'сльоза',
      exEn: 'A single tear rolled down her cheek during the movie.',
      exUa: 'Під час фільму одна сльоза скотилася по її щоці.',
    },
    {
      pos: 'v',
      translation: 'рвати, дерти',
      exEn: 'He accidentally tore the page while turning it.',
      exUa: 'Він випадково порвав сторінку, перегортаючи її.',
    },
  ],
  wind: [
    {
      pos: 'noun',
      translation: 'вітер',
      exEn: 'A strong wind blew the leaves across the yard.',
      exUa: 'Сильний вітер гнав листя через двір.',
    },
    {
      pos: 'v',
      translation: 'заводити (годинник), намотувати',
      exEn: 'She had to wind the old clock every morning.',
      exUa: 'Їй доводилося заводити старий годинник щоранку.',
    },
  ],
  lead: [
    {
      pos: 'noun',
      translation: 'свинець',
      exEn: 'The old pipes were made of lead.',
      exUa: 'Старі труби були зроблені зі свинцю.',
    },
    {
      pos: 'v',
      translation: 'вести, керувати',
      exEn: 'She will lead the team through the new project.',
      exUa: 'Вона керуватиме командою під час нового проєкту.',
    },
  ],
  park: [
    {
      pos: 'noun',
      translation: 'парк',
      exEn: 'They had a picnic in the park near the river.',
      exUa: 'Вони влаштували пікнік у парку біля річки.',
    },
    {
      pos: 'v',
      translation: 'паркувати',
      exEn: 'He parked the car right outside the building.',
      exUa: 'Він припаркував машину прямо біля будівлі.',
    },
  ],
  date: [
    {
      pos: 'noun',
      translation: 'дата',
      exEn: "They haven't decided on a date for the wedding yet.",
      exUa: 'Вони ще не визначилися з датою весілля.',
    },
    {
      pos: 'noun',
      translation: 'фінік (плід)',
      exEn: 'She added chopped dates to the morning porridge.',
      exUa: 'Вона додала нарізані фініки до ранкової каші.',
    },
  ],
  long: [
    {
      pos: 'adj',
      translation: 'довгий',
      exEn: 'It was a long journey across the mountains.',
      exUa: 'Це була довга подорож через гори.',
    },
    {
      pos: 'v',
      translation: 'сильно хотіти, тужити',
      exEn: 'She longed to see her family again after the war.',
      exUa: 'Вона дуже хотіла знову побачити свою родину після війни.',
    },
  ],
  second: [
    {
      pos: 'adj',
      translation: 'другий',
      exEn: 'This is the second time he has visited Paris.',
      exUa: 'Це вже другий раз, коли він відвідує Париж.',
    },
    {
      pos: 'noun',
      translation: 'секунда',
      exEn: 'The race was decided by less than a second.',
      exUa: 'Перегони вирішила різниця менш ніж в одну секунду.',
    },
  ],
  address: [
    {
      pos: 'noun',
      translation: 'адреса',
      exEn: 'Please write your home address on the form.',
      exUa: 'Будь ласка, напишіть свою домашню адресу у формі.',
    },
    {
      pos: 'v',
      translation: 'звертатися, вирішувати (проблему)',
      exEn: 'The mayor promised to address the housing crisis.',
      exUa: 'Мер пообіцяв вирішити кризу з житлом.',
    },
  ],
  capital: [
    {
      pos: 'noun',
      translation: 'столиця',
      exEn: 'Paris is the capital of France.',
      exUa: 'Париж — столиця Франції.',
    },
    {
      pos: 'noun',
      translation: 'капітал, кошти',
      exEn: 'The company raised enough capital to expand abroad.',
      exUa: 'Компанія залучила достатньо капіталу, щоб розширитися за кордон.',
    },
  ],
  current: [
    {
      pos: 'adj',
      translation: 'теперішній, поточний',
      exEn: 'Her current job involves a lot of travelling.',
      exUa: 'Її теперішня робота передбачає багато подорожей.',
    },
    {
      pos: 'noun',
      translation: 'течія, струм',
      exEn: 'The swimmer was swept away by a strong current.',
      exUa: 'Плавця віднесло сильною течією.',
    },
  ],
  state: [
    {
      pos: 'noun',
      translation: 'штат, держава',
      exEn: 'California is the most populous state in the USA.',
      exUa: 'Каліфорнія — найбільш населений штат у США.',
    },
    {
      pos: 'v',
      translation: 'заявляти, стверджувати',
      exEn: 'The witness stated that she saw nothing unusual.',
      exUa: 'Свідок заявила, що не бачила нічого незвичайного.',
    },
  ],
  rock: [
    {
      pos: 'noun',
      translation: 'скеля, камінь',
      exEn: 'The climbers rested on a flat rock halfway up.',
      exUa: 'Альпіністи відпочили на пласкій скелі на половині шляху.',
    },
    {
      pos: 'noun',
      translation: 'рок (музика)',
      exEn: 'He grew up listening to classic rock on the radio.',
      exUa: 'Він виріс, слухаючи класичний рок по радіо.',
    },
  ],
  tip: [
    {
      pos: 'noun',
      translation: 'кінчик',
      exEn: 'She felt a sharp pain at the tip of her finger.',
      exUa: 'Вона відчула гострий біль на кінчику пальця.',
    },
    {
      pos: 'noun',
      translation: 'чайові',
      exEn: 'They left a generous tip for the waiter.',
      exUa: 'Вони залишили щедрі чайові офіціанту.',
    },
  ],
  fast: [
    {
      pos: 'adj',
      translation: 'швидкий',
      exEn: 'He drives a fast sports car.',
      exUa: 'Він водить швидкий спортивний автомобіль.',
    },
    {
      pos: 'v',
      translation: 'постити, голодувати',
      exEn: 'Many people fast during religious holidays.',
      exUa: 'Багато людей постять під час релігійних свят.',
    },
  ],
  last: [
    {
      pos: 'adj',
      translation: 'останній',
      exEn: 'This is the last chapter of the book.',
      exUa: 'Це останній розділ книги.',
    },
    {
      pos: 'v',
      translation: 'тривати',
      exEn: 'The meeting lasted almost two hours.',
      exUa: 'Зустріч тривала майже дві години.',
    },
  ],
  stand: [
    {
      pos: 'v',
      translation: 'стояти',
      exEn: 'They had to stand for the entire train ride.',
      exUa: 'Їм довелося стояти всю поїздку на потязі.',
    },
    {
      pos: 'noun',
      translation: 'кіоск, прилавок',
      exEn: 'She bought fresh lemonade from a small stand.',
      exUa: 'Вона купила свіжий лимонад у маленькому кіоску.',
    },
  ],
  palm: [
    {
      pos: 'noun',
      translation: 'долоня',
      exEn: 'He held the coin tightly in his palm.',
      exUa: 'Він міцно тримав монету в долоні.',
    },
    {
      pos: 'noun',
      translation: 'пальма',
      exEn: 'Tall palms lined the sandy beach.',
      exUa: 'Високі пальми обрамляли піщаний пляж.',
    },
  ],
  orange: [
    {
      pos: 'noun',
      translation: 'апельсин',
      exEn: 'She squeezed a fresh orange for breakfast.',
      exUa: 'Вона видавила свіжий апельсин на сніданок.',
    },
    {
      pos: 'adj',
      translation: 'помаранчевий',
      exEn: 'The sky turned a brilliant orange at sunset.',
      exUa: 'Небо набуло яскравого помаранчевого кольору на заході сонця.',
    },
  ],
  iron: [
    {
      pos: 'noun',
      translation: 'залізо',
      exEn: 'The gate was made of solid iron.',
      exUa: 'Ворота були зроблені з суцільного заліза.',
    },
    {
      pos: 'v',
      translation: 'прасувати',
      exEn: 'She ironed his shirt before the interview.',
      exUa: 'Вона попрасувала йому сорочку перед співбесідою.',
    },
  ],
  wave: [
    {
      pos: 'noun',
      translation: 'хвиля',
      exEn: 'A huge wave crashed against the rocks.',
      exUa: 'Величезна хвиля розбилася об скелі.',
    },
    {
      pos: 'v',
      translation: 'махати рукою',
      exEn: 'She waved at her friends from across the street.',
      exUa: 'Вона помахала друзям з іншого боку вулиці.',
    },
  ],
  train: [
    {
      pos: 'noun',
      translation: 'потяг',
      exEn: 'They caught the early train to the city.',
      exUa: 'Вони встигли на ранній потяг до міста.',
    },
    {
      pos: 'v',
      translation: 'тренувати(ся)',
      exEn: 'She trains every morning before work.',
      exUa: 'Вона тренується щоранку перед роботою.',
    },
  ],
  race: [
    {
      pos: 'noun',
      translation: 'перегони, гонка',
      exEn: 'He won the race by a few seconds.',
      exUa: 'Він виграв перегони з різницею в кілька секунд.',
    },
    {
      pos: 'noun',
      translation: 'раса',
      exEn: 'The festival celebrated people of every race and culture.',
      exUa: 'Фестиваль святкував людей будь-якої раси та культури.',
    },
  ],
  note: [
    {
      pos: 'noun',
      translation: 'нота (музична)',
      exEn: 'She hit the highest note perfectly during the song.',
      exUa: 'Вона ідеально взяла найвищу ноту під час пісні.',
    },
    {
      pos: 'noun',
      translation: 'записка',
      exEn: 'He left a short note on the kitchen table.',
      exUa: 'Він залишив коротку записку на кухонному столі.',
    },
  ],
  check: [
    {
      pos: 'v',
      translation: 'перевіряти',
      exEn: 'Please check your answers before submitting the test.',
      exUa: 'Будь ласка, перевір свої відповіді перед здачею тесту.',
    },
    {
      pos: 'noun',
      translation: 'чек (банківський)',
      exEn: 'He paid the contractor with a check.',
      exUa: 'Він заплатив підряднику чеком.',
    },
  ],
  fall: [
    {
      pos: 'v',
      translation: 'падати',
      exEn: 'Be careful not to fall on the icy pavement.',
      exUa: 'Будь обережний, щоб не впасти на ожеледиці.',
    },
    {
      pos: 'noun',
      translation: 'осінь',
      exEn: 'The leaves turn golden every fall.',
      exUa: 'Листя стає золотим щоосені.',
    },
  ],
  sound: [
    {
      pos: 'noun',
      translation: 'звук',
      exEn: 'They heard a strange sound coming from the basement.',
      exUa: 'Вони почули дивний звук, що долинав з підвалу.',
    },
    {
      pos: 'adj',
      translation: 'здоровий, міцний, обґрунтований',
      exEn: 'Her argument was based on sound reasoning.',
      exUa: 'Її аргумент ґрунтувався на обґрунтованих міркуваннях.',
    },
  ],
  minute: [
    {
      pos: 'noun',
      translation: 'хвилина',
      exEn: "Wait just a minute, I'll be right with you.",
      exUa: 'Зачекай хвилинку, я зараз буду.',
    },
    {
      pos: 'adj',
      translation: 'крихітний, мізерний',
      exEn: 'There was only a minute chance of survival.',
      exUa: 'Шанс на виживання був лише мізерним.',
    },
  ],
  court: [
    {
      pos: 'noun',
      translation: 'суд',
      exEn: 'The case will be heard in court next month.',
      exUa: 'Справу розглядатимуть у суді наступного місяця.',
    },
    {
      pos: 'noun',
      translation: 'корт, майданчик',
      exEn: 'They booked a tennis court for the afternoon.',
      exUa: 'Вони забронювали тенісний корт на другу половину дня.',
    },
  ],
  company: [
    {
      pos: 'noun',
      translation: 'компанія, фірма',
      exEn: 'She started her own company at the age of twenty-five.',
      exUa: "Вона заснувала власну компанію у двадцять п'ять років.",
    },
    {
      pos: 'noun',
      translation: 'товариство, компанія (людей)',
      exEn: 'He enjoyed the company of old friends after years apart.',
      exUa: 'Він насолоджувався товариством старих друзів після років розлуки.',
    },
  ],
  arm: [
    {
      pos: 'noun',
      translation: 'рука (від плеча до кисті)',
      exEn: 'She broke her arm while skiing last winter.',
      exUa: 'Вона зламала руку під час катання на лижах минулої зими.',
    },
    {
      pos: 'v',
      translation: 'озброювати',
      exEn: 'The soldiers were armed before the mission began.',
      exUa: 'Солдатів озброїли перед початком місії.',
    },
  ],
  foot: [
    {
      pos: 'noun',
      translation: 'стопа, нога',
      exEn: 'He stubbed his foot on the corner of the bed.',
      exUa: 'Він вдарився ногою об кут ліжка.',
    },
    {
      pos: 'noun',
      translation: 'фут (одиниця довжини)',
      exEn: 'The ceiling was just over ten foot high.',
      exUa: 'Стеля була трохи вищою за десять футів.',
    },
  ],
  head: [
    {
      pos: 'noun',
      translation: 'голова',
      exEn: 'She nodded her head in agreement.',
      exUa: 'Вона кивнула головою на знак згоди.',
    },
    {
      pos: 'v',
      translation: 'прямувати',
      exEn: 'They headed toward the mountains at dawn.',
      exUa: 'На світанку вони попрямували до гір.',
    },
  ],
  band: [
    {
      pos: 'noun',
      translation: 'гурт (музичний)',
      exEn: 'The band played until midnight at the festival.',
      exUa: 'Гурт грав до півночі на фестивалі.',
    },
    {
      pos: 'noun',
      translation: 'стрічка, обідок',
      exEn: 'She wore a thin gold band on her finger.',
      exUa: 'Вона носила тонкий золотий обідок на пальці.',
    },
  ],
  bark: [
    {
      pos: 'noun',
      translation: 'кора (дерева)',
      exEn: "The tree's bark was rough and grey.",
      exUa: 'Кора дерева була грубою і сірою.',
    },
    {
      pos: 'v',
      translation: 'гавкати',
      exEn: 'The dog barked loudly at the stranger.',
      exUa: 'Собака голосно гавкав на незнайомця.',
    },
  ],
  block: [
    {
      pos: 'noun',
      translation: 'квартал (міський)',
      exEn: 'Their house is just two blocks from the park.',
      exUa: 'Їхній будинок лише за два квартали від парку.',
    },
    {
      pos: 'v',
      translation: 'блокувати',
      exEn: 'The fallen tree blocked the entire road.',
      exUa: 'Повалене дерево заблокувало всю дорогу.',
    },
  ],
  figure: [
    {
      pos: 'noun',
      translation: 'цифра, число',
      exEn: 'The exact figure was not released to the public.',
      exUa: 'Точну цифру не оприлюднили для громадськості.',
    },
    {
      pos: 'v',
      translation: 'здогадатися, зрозуміти',
      exEn: 'It took her a while to figure out the puzzle.',
      exUa: 'Їй знадобився певний час, щоб розгадати головоломку.',
    },
  ],
  ground: [
    {
      pos: 'noun',
      translation: 'земля, ґрунт',
      exEn: 'The apples fell straight onto the ground.',
      exUa: 'Яблука впали прямо на землю.',
    },
    {
      pos: 'v',
      translation: 'заземляти, забороняти виходити',
      exEn: 'Her parents grounded her for missing curfew.',
      exUa: 'Батьки заборонили їй виходити за порушення комендантської години.',
    },
  ],
  land: [
    {
      pos: 'noun',
      translation: 'земля, суходіл',
      exEn: 'After weeks at sea, they finally spotted land.',
      exUa: 'Після тижнів у морі вони нарешті помітили землю.',
    },
    {
      pos: 'v',
      translation: 'приземлятися',
      exEn: 'The plane landed safely despite the storm.',
      exUa: 'Літак безпечно приземлився попри шторм.',
    },
  ],
  organ: [
    {
      pos: 'noun',
      translation: 'орган (тіла)',
      exEn: 'The heart is the most vital organ in the body.',
      exUa: 'Серце — найважливіший орган у тілі.',
    },
    {
      pos: 'noun',
      translation: 'орган (музичний інструмент)',
      exEn: 'The organist played a powerful hymn on the church organ.',
      exUa: 'Органіст зіграв потужний гімн на церковному органі.',
    },
  ],
  sentence: [
    {
      pos: 'noun',
      translation: 'речення',
      exEn: 'She wrote a short sentence at the top of the page.',
      exUa: 'Вона написала коротке речення вгорі сторінки.',
    },
    {
      pos: 'noun',
      translation: 'вирок (судовий)',
      exEn: 'The judge handed down a harsh sentence for the crime.',
      exUa: 'Суддя виніс суворий вирок за цей злочин.',
    },
  ],
  volume: [
    {
      pos: 'noun',
      translation: 'гучність',
      exEn: 'Could you turn down the volume on the TV?',
      exUa: 'Чи міг би ти зменшити гучність телевізора?',
    },
    {
      pos: 'noun',
      translation: 'том (книги)',
      exEn: 'The encyclopedia filled twelve thick volumes.',
      exUa: 'Енциклопедія складалася з дванадцяти товстих томів.',
    },
  ],

  // ── Round 2 ─────────────────────────────────────────────────────────────
  novel: [
    {
      pos: 'noun',
      translation: 'роман (книга)',
      exEn: 'She finished writing her first novel last summer.',
      exUa: 'Минулого літа вона закінчила писати свій перший роман.',
    },
    {
      pos: 'adj',
      translation: 'новий, оригінальний',
      exEn: 'They proposed a novel solution to the old problem.',
      exUa: 'Вони запропонували оригінальне рішення старої проблеми.',
    },
  ],
  duck: [
    {
      pos: 'noun',
      translation: 'качка',
      exEn: 'A duck swam quietly across the pond.',
      exUa: 'Качка тихо пливла через ставок.',
    },
    {
      pos: 'v',
      translation: 'пригинатися',
      exEn: 'He had to duck to avoid hitting his head on the beam.',
      exUa: 'Йому довелося пригнутися, щоб не вдаритися головою об балку.',
    },
  ],
  box: [
    {
      pos: 'noun',
      translation: 'коробка',
      exEn: 'She packed the books into a sturdy cardboard box.',
      exUa: 'Вона спакувала книги в міцну картонну коробку.',
    },
    {
      pos: 'v',
      translation: 'боксувати',
      exEn: 'He started to box at a local gym last year.',
      exUa: 'Минулого року він почав займатися боксом у місцевому спортзалі.',
    },
  ],
  yard: [
    {
      pos: 'noun',
      translation: "подвір'я",
      exEn: 'The children played football in the back yard.',
      exUa: "Діти грали у футбол на задньому подвір'ї.",
    },
    {
      pos: 'noun',
      translation: 'ярд (одиниця довжини)',
      exEn: 'The tailor measured three yards of fabric.',
      exUa: 'Кравець відміряв три ярди тканини.',
    },
  ],
  tender: [
    {
      pos: 'adj',
      translation: "ніжний, м'який",
      exEn: 'She gave her son a tender hug before school.',
      exUa: 'Вона ніжно обійняла сина перед школою.',
    },
    {
      pos: 'noun',
      translation: 'тендер, пропозиція (комерційна)',
      exEn: 'The company submitted a tender for the new bridge project.',
      exUa: 'Компанія подала тендерну пропозицію на новий проєкт мосту.',
    },
  ],
  lap: [
    {
      pos: 'noun',
      translation: 'коліна (сидячи)',
      exEn: 'The cat curled up on her lap and fell asleep.',
      exUa: 'Кіт згорнувся клубочком у неї на колінах і заснув.',
    },
    {
      pos: 'noun',
      translation: 'коло (на трасі)',
      exEn: 'He finished the final lap in record time.',
      exUa: 'Він завершив останнє коло за рекордний час.',
    },
  ],
  letter: [
    {
      pos: 'noun',
      translation: 'лист (поштовий)',
      exEn: 'She wrote a long letter to her grandmother.',
      exUa: 'Вона написала довгого листа своїй бабусі.',
    },
    {
      pos: 'noun',
      translation: 'буква',
      exEn: 'Each letter of the alphabet was printed on a card.',
      exUa: 'Кожна буква алфавіту була надрукована на картці.',
    },
  ],
  crow: [
    {
      pos: 'noun',
      translation: 'ворона',
      exEn: 'A black crow perched on the fence post.',
      exUa: 'Чорна ворона сиділа на стовпчику паркану.',
    },
    {
      pos: 'v',
      translation: 'хвалитися',
      exEn: "He couldn't stop crowing about his victory.",
      exUa: 'Він не міг перестати хвалитися своєю перемогою.',
    },
  ],
  abdicate: [
    {
      pos: 'v',
      translation: 'зрікатися (престолу)',
      exEn: 'King Edward abdicated the throne to marry the woman he loved.',
      exUa: 'Король Едвард зрікся престолу, щоб одружитися з жінкою, яку кохав.',
    },
    {
      pos: 'v',
      translation: 'відмовлятися від відповідальності',
      exEn: 'Parents cannot simply abdicate responsibility for their children\'s education.',
      exUa: 'Батьки не можуть просто відмовлятися від відповідальності за освіту своїх дітей.',
    },
  ],
  abide: [
    {
      pos: 'v',
      translation: 'терпіти',
      exEn: 'I cannot abide people who are constantly late.',
      exUa: 'Я не можу терпіти людей, які постійно спізнюються.',
    },
    {
      pos: 'v',
      translation: 'дотримуватися',
      exEn: "All members must abide by the club's rules.",
      exUa: 'Усі члени повинні дотримуватися правил клубу.',
    },
  ],
  abrasive: [
    {
      pos: 'adj',
      translation: 'різкий, грубий (про манеру)',
      exEn: 'Her abrasive tone made the meeting uncomfortable for everyone.',
      exUa: 'Її різкий тон зробив зустріч незручною для всіх.',
    },
    {
      pos: 'adj',
      translation: 'абразивний',
      exEn: 'The cleaner contains abrasive particles that scratch soft surfaces.',
      exUa: 'Засіб для чищення містить абразивні частинки, які дряпають м\'які поверхні.',
    },
  ],
  academic: [
    {
      pos: 'adj',
      translation: 'академічний',
      exEn: 'She has published several academic papers on climate change.',
      exUa: 'Вона опублікувала кілька академічних статей про зміну клімату.',
    },
    {
      pos: 'noun',
      translation: 'науковець',
      exEn: 'The academic gave a lecture on ancient Roman history.',
      exUa: 'Науковець прочитав лекцію з історії стародавнього Риму.',
    },
  ],
  acclaim: [
    {
      pos: 'noun',
      translation: 'схвалення, визнання',
      exEn: 'The novel received widespread critical acclaim upon its release.',
      exUa: 'Роман отримав широке визнання критиків після виходу.',
    },
    {
      pos: 'v',
      translation: 'прославляти',
      exEn: 'Critics acclaimed her performance as the best of the year.',
      exUa: 'Критики прославляли її виступ як найкращий за рік.',
    },
  ],
  ache: [
    {
      pos: 'v',
      translation: 'боліти',
      exEn: 'Her legs ached after the long mountain hike.',
      exUa: 'Її ноги боліли після довгого походу в гори.',
    },
    {
      pos: 'noun',
      translation: 'біль',
      exEn: 'He felt a dull ache in his lower back.',
      exUa: 'Він відчув тупий біль у попереку.',
    },
  ],
  actuate: [
    {
      pos: 'v',
      translation: 'приводити в дію',
      exEn: 'A small motor actuates the mechanism inside the door lock.',
      exUa: 'Невеликий двигун приводить у дію механізм всередині дверного замка.',
    },
    {
      pos: 'v',
      translation: 'спонукати',
      exEn: 'Fear of failure actuated him to work harder than ever.',
      exUa: 'Страх невдачі спонукав його працювати ще старанніше.',
    },
  ],
  admission: [
    {
      pos: 'noun',
      translation: 'визнання',
      exEn: 'His admission of the mistake came only after weeks of denial.',
      exUa: 'Його визнання помилки прийшло лише через кілька тижнів заперечень.',
    },
    {
      pos: 'noun',
      translation: 'прийом',
      exEn: 'Admission to the university is highly competitive this year.',
      exUa: 'Прийом до університету цього року дуже конкурентний.',
    },
  ],
  agitate: [
    {
      pos: 'v',
      translation: 'збуджувати, хвилювати',
      exEn: 'The loud noises outside began to agitate the sleeping baby.',
      exUa: 'Гучні звуки надворі почали хвилювати немовля, що спало.',
    },
    {
      pos: 'v',
      translation: 'агітувати',
      exEn: 'Activists agitated for stronger environmental protection laws.',
      exUa: 'Активісти агітували за суворіші закони про захист довкілля.',
    },
  ],
  airtight: [
    {
      pos: 'adj',
      translation: 'герметичний',
      exEn: 'Store the flour in an airtight container to keep it fresh.',
      exUa: 'Зберігайте борошно в герметичному контейнері, щоб воно залишалося свіжим.',
    },
    {
      pos: 'adj',
      translation: 'бездоганний, без вад',
      exEn: 'The lawyer presented an airtight case with no weaknesses.',
      exUa: 'Адвокат представив бездоганну справу без жодних слабких місць.',
    },
  ],
  alert: [
    {
      pos: 'v',
      translation: 'попереджати',
      exEn: 'The guard alerted everyone about the approaching storm.',
      exUa: 'Охоронець попередив усіх про шторм, що наближався.',
    },
    {
      pos: 'adj',
      translation: 'пильний',
      exEn: 'Stay alert while driving on icy roads.',
      exUa: 'Залишайтеся пильними, керуючи автомобілем на слизьких дорогах.',
    },
  ],
  allure: [
    {
      pos: 'noun',
      translation: 'принадність, привабливість',
      exEn: 'The allure of the big city drew thousands of young people each year.',
      exUa: 'Привабливість великого міста щороку приваблювала тисячі молодих людей.',
    },
    {
      pos: 'v',
      translation: 'приваблювати',
      exEn: 'The shop window was designed to allure passing customers.',
      exUa: 'Вітрина магазину була створена, щоб приваблювати перехожих.',
    },
  ],
  'amount to': [
    {
      pos: 'v',
      translation: 'рівнятися, дорівнювати',
      exEn: 'Her total expenses amounted to almost a thousand dollars.',
      exUa: 'Її загальні витрати дорівнювали майже тисячі доларів.',
    },
    {
      pos: 'v',
      translation: 'зводитися до',
      exEn: 'His whole argument amounts to nothing more than an excuse.',
      exUa: 'Уся його аргументація зводиться лише до виправдання.',
    },
  ],
  annex: [
    {
      pos: 'v',
      translation: 'приєднувати, анексувати',
      exEn: 'The empire annexed the small neighbouring kingdom after a brief war.',
      exUa: 'Імперія анексувала невелике сусіднє королівство після короткої війни.',
    },
    {
      pos: 'noun',
      translation: 'додаток',
      exEn: 'Please refer to the annex for detailed technical specifications.',
      exUa: 'Будь ласка, зверніться до додатка для детальних технічних характеристик.',
    },
  ],
  answer: [
    {
      pos: 'noun',
      translation: 'відповідь',
      exEn: 'She gave a thoughtful answer to a difficult question.',
      exUa: 'Вона дала продуману відповідь на складне запитання.',
    },
    {
      pos: 'v',
      translation: 'відповідати',
      exEn: "Please answer the phone — it's been ringing for a while.",
      exUa: 'Будь ласка, відповідай на телефон — він дзвонить вже деякий час.',
    },
  ],
  'appeal to': [
    {
      pos: 'v',
      translation: 'апелювати до',
      exEn: 'The lawyer decided to appeal to a higher court.',
      exUa: 'Адвокат вирішив апелювати до вищого суду.',
    },
    {
      pos: 'v',
      translation: 'подобатися',
      exEn: 'The idea of working from home really appeals to me.',
      exUa: 'Ідея роботи з дому мені справді подобається.',
    },
  ],
  'apply to': [
    {
      pos: 'v',
      translation: 'стосуватися',
      exEn: 'This rule applies to all employees without exception.',
      exUa: 'Це правило стосується всіх працівників без винятку.',
    },
    {
      pos: 'v',
      translation: 'подавати заявку',
      exEn: 'She decided to apply to three different universities.',
      exUa: 'Вона вирішила подати заявку до трьох різних університетів.',
    },
  ],
  appreciation: [
    {
      pos: 'noun',
      translation: 'вдячність',
      exEn: 'He expressed his sincere appreciation for their help.',
      exUa: 'Він висловив щиру вдячність за їхню допомогу.',
    },
    {
      pos: 'noun',
      translation: 'розуміння',
      exEn: 'Years abroad gave her a deeper appreciation of other cultures.',
      exUa: 'Роки за кордоном дали їй глибше розуміння інших культур.',
    },
  ],
  apprehend: [
    {
      pos: 'v',
      translation: 'затримувати (злочинця)',
      exEn: 'Police apprehended the suspect near the train station.',
      exUa: 'Поліція затримала підозрюваного біля залізничної станції.',
    },
    {
      pos: 'v',
      translation: 'розуміти',
      exEn: 'It took her a moment to fully apprehend the seriousness of the situation.',
      exUa: 'Їй знадобилася мить, щоб повністю зрозуміти серйозність ситуації.',
    },
  ],
  apprehension: [
    {
      pos: 'noun',
      translation: 'побоювання, тривога',
      exEn: 'She felt a growing sense of apprehension before the interview.',
      exUa: 'Вона відчувала зростаюче почуття тривоги перед співбесідою.',
    },
    {
      pos: 'noun',
      translation: 'затримання',
      exEn: "The apprehension of the escaped prisoner took several days.",
      exUa: "Затримання втікача-в'язня зайняло кілька днів.",
    },
  ],
  apt: [
    {
      pos: 'adj',
      translation: 'схильний',
      exEn: 'Children are apt to imitate the behaviour of their parents.',
      exUa: 'Діти схильні наслідувати поведінку своїх батьків.',
    },
    {
      pos: 'adj',
      translation: 'влучний, доречний',
      exEn: 'That was a very apt comparison to describe the situation.',
      exUa: 'Це було дуже влучне порівняння, щоб описати ситуацію.',
    },
  ],
  articulate: [
    {
      pos: 'v',
      translation: 'чітко висловлювати',
      exEn: 'She struggled to articulate her feelings after the accident.',
      exUa: 'Їй було важко чітко висловити свої почуття після аварії.',
    },
    {
      pos: 'adj',
      translation: 'красномовний',
      exEn: 'He is a remarkably articulate speaker for his young age.',
      exUa: 'Він на диво красномовний оратор як для свого молодого віку.',
    },
  ],
  attribute: [
    {
      pos: 'v',
      translation: 'приписувати',
      exEn: 'Historians attribute the painting to a lesser-known Renaissance artist.',
      exUa: 'Історики приписують цю картину маловідомому художнику епохи Відродження.',
    },
    {
      pos: 'noun',
      translation: 'атрибут',
      exEn: 'Patience is an essential attribute for a good teacher.',
      exUa: 'Терпіння — це важливий атрибут хорошого вчителя.',
    },
  ],
  attrition: [
    {
      pos: 'noun',
      translation: 'виснаження, знос',
      exEn: 'The long war became a slow battle of attrition.',
      exUa: 'Довга війна перетворилася на повільну війну на виснаження.',
    },
    {
      pos: 'noun',
      translation: 'природне скорочення',
      exEn: 'The company reduced staff through natural attrition rather than layoffs.',
      exUa: 'Компанія скоротила штат через природне скорочення, а не звільнення.',
    },
  ],
  back: [
    {
      pos: 'noun',
      translation: 'спина',
      exEn: 'He hurt his back while lifting the heavy box.',
      exUa: 'Він пошкодив спину, піднімаючи важку коробку.',
    },
    {
      pos: 'adv',
      translation: 'назад',
      exEn: 'Please step back from the edge of the platform.',
      exUa: 'Будь ласка, відійдіть назад від краю платформи.',
    },
  ],
  'bail out': [
    {
      pos: 'v',
      translation: 'рятувати (фінансово)',
      exEn: 'The government agreed to bail out the failing bank.',
      exUa: 'Уряд погодився фінансово врятувати банк, що збанкрутував.',
    },
    {
      pos: 'v',
      translation: 'вискакувати з парашутом',
      exEn: 'The pilot had to bail out before the plane crashed.',
      exUa: 'Пілот мусив вистрибнути з парашутом до того, як літак розбився.',
    },
  ],
  bankrupt: [
    {
      pos: 'noun',
      translation: 'банкрут',
      exEn: 'After the failed investment, he was declared a bankrupt.',
      exUa: 'Після невдалої інвестиції його оголосили банкрутом.',
    },
    {
      pos: 'v',
      translation: 'банкрутувати',
      exEn: 'Poor management caused the small business to bankrupt within a year.',
      exUa: 'Погане управління призвело до того, що малий бізнес збанкрутував протягом року.',
    },
  ],
  barbecue: [
    {
      pos: 'noun',
      translation: 'барбекю',
      exEn: "We're hosting a barbecue in the backyard this Saturday.",
      exUa: 'Ми влаштовуємо барбекю на задньому дворі цієї суботи.',
    },
    {
      pos: 'v',
      translation: 'смажити на грилі',
      exEn: 'Dad loves to barbecue burgers for the whole family.',
      exUa: 'Тато любить смажити бургери на грилі для всієї родини.',
    },
  ],
  'be bound to': [
    {
      pos: 'v',
      translation: 'бути приреченим на',
      exEn: 'Without proper planning, the project was bound to fail.',
      exUa: 'Без належного планування проєкт був приречений на провал.',
    },
    {
      pos: 'v',
      translation: "бути зобов'язаним",
      exEn: 'As a citizen, you are bound to follow the law.',
      exUa: "Як громадянин, ти зобов'язаний дотримуватися закону.",
    },
  ],
  besiege: [
    {
      pos: 'v',
      translation: 'облягати',
      exEn: 'Enemy forces besieged the ancient city for over a year.',
      exUa: 'Ворожі війська облягали стародавнє місто понад рік.',
    },
    {
      pos: 'v',
      translation: 'засипати (проханнями)',
      exEn: 'Reporters besieged the actress with questions outside the courthouse.',
      exUa: 'Репортери засипали акторку запитаннями біля будівлі суду.',
    },
  ],
  blight: [
    {
      pos: 'noun',
      translation: 'пошесть, руйнівна сила',
      exEn: 'Poverty remains a blight on many parts of the city.',
      exUa: 'Бідність залишається пошестю для багатьох районів міста.',
    },
    {
      pos: 'v',
      translation: 'руйнувати',
      exEn: 'A mysterious disease blighted the entire potato harvest that year.',
      exUa: 'Таємнича хвороба знищила весь урожай картоплі того року.',
    },
  ],
  'blind spot': [
    {
      pos: 'noun',
      translation: 'сліпа пляма',
      exEn: 'Always check your blind spot before changing lanes.',
      exUa: 'Завжди перевіряй сліпу пляму, перш ніж перебудуватися в інший ряд.',
    },
    {
      pos: 'noun',
      translation: 'область незнання',
      exEn: 'Everyone has a blind spot when judging their own behaviour.',
      exUa: 'У кожного є область незнання, коли йдеться про оцінку власної поведінки.',
    },
  ],
  blunder: [
    {
      pos: 'noun',
      translation: 'груба помилка',
      exEn: "Forgetting the client's name was an embarrassing blunder.",
      exUa: 'Забути ім\'я клієнта було ганебною грубою помилкою.',
    },
    {
      pos: 'v',
      translation: 'помилятися',
      exEn: 'Even experienced pilots occasionally blunder under pressure.',
      exUa: 'Навіть досвідчені пілоти інколи помиляються під тиском.',
    },
  ],
  blunt: [
    {
      pos: 'adj',
      translation: 'прямий, різкий (про манеру говорити)',
      exEn: 'She gave a blunt assessment of his performance.',
      exUa: 'Вона дала пряму й різку оцінку його виступу.',
    },
    {
      pos: 'adj',
      translation: 'тупий (про предмет)',
      exEn: 'The knife was too blunt to cut the bread properly.',
      exUa: 'Ніж був занадто тупий, щоб як слід нарізати хліб.',
    },
  ],
  boom: [
    {
      pos: 'noun',
      translation: 'бум, різке зростання',
      exEn: 'The city experienced an economic boom after the new factory opened.',
      exUa: 'Місто пережило економічний бум після відкриття нового заводу.',
    },
    {
      pos: 'v',
      translation: 'гриміти',
      exEn: 'Thunder boomed across the valley during the storm.',
      exUa: 'Грім гримів по всій долині під час шторму.',
    },
  ],
  'bottom line': [
    {
      pos: 'noun',
      translation: 'суть справи',
      exEn: 'The bottom line is that we simply cannot afford this expense.',
      exUa: 'Суть справи в тому, що ми просто не можемо дозволити собі ці витрати.',
    },
    {
      pos: 'noun',
      translation: 'підсумковий результат',
      exEn: "New efficiency measures improved the company's bottom line significantly.",
      exUa: 'Нові заходи з підвищення ефективності суттєво покращили підсумковий результат компанії.',
    },
  ],
  'box office': [
    {
      pos: 'noun',
      translation: 'каса (кінотеатру)',
      exEn: 'Tickets are available at the box office an hour before the show.',
      exUa: 'Квитки можна придбати в касі кінотеатру за годину до сеансу.',
    },
    {
      pos: 'noun',
      translation: 'касові збори',
      exEn: 'The film topped the box office for three weeks in a row.',
      exUa: 'Фільм очолював касові збори три тижні поспіль.',
    },
  ],
  brainstorm: [
    {
      pos: 'noun',
      translation: 'мозковий штурм',
      exEn: 'The team held a brainstorm to generate new marketing ideas.',
      exUa: 'Команда провела мозковий штурм, щоб згенерувати нові маркетингові ідеї.',
    },
    {
      pos: 'v',
      translation: 'проводити мозковий штурм',
      exEn: "Let's brainstorm some possible solutions before the deadline.",
      exUa: 'Давайте проведемо мозковий штурм можливих рішень до кінцевого терміну.',
    },
  ],
  breakdown: [
    {
      pos: 'noun',
      translation: 'збій, розпад',
      exEn: 'The negotiations ended in a complete breakdown of communication.',
      exUa: 'Переговори завершилися повним розпадом комунікації.',
    },
    {
      pos: 'noun',
      translation: 'аналіз',
      exEn: 'The report gives a detailed breakdown of monthly expenses.',
      exUa: 'Звіт дає детальний аналіз щомісячних витрат.',
    },
  ],
  broker: [
    {
      pos: 'noun',
      translation: 'брокер',
      exEn: 'She works as a broker for a large real estate firm.',
      exUa: 'Вона працює брокером у великій компанії з нерухомості.',
    },
    {
      pos: 'v',
      translation: 'домовлятися, посередничати',
      exEn: 'The UN tried to broker a peace agreement between the two nations.',
      exUa: 'ООН намагалася виступити посередником у мирній угоді між двома націями.',
    },
  ],
  brokerage: [
    {
      pos: 'noun',
      translation: 'брокерські послуги',
      exEn: 'The firm charges a small fee for its brokerage services.',
      exUa: 'Фірма стягує невелику комісію за свої брокерські послуги.',
    },
    {
      pos: 'noun',
      translation: 'брокерська компанія',
      exEn: 'She opened an account with a well-known brokerage.',
      exUa: 'Вона відкрила рахунок у відомій брокерській компанії.',
    },
  ],
  brood: [
    {
      pos: 'v',
      translation: 'мовчки переживати',
      exEn: 'He tends to brood for days after losing an argument.',
      exUa: 'Він схильний мовчки переживати кілька днів після програної суперечки.',
    },
    {
      pos: 'noun',
      translation: 'виводок',
      exEn: 'The hen carefully watched over her brood of chicks.',
      exUa: 'Курка уважно наглядала за своїм виводком курчат.',
    },
  ],
  'brother-in-law': [
    {
      pos: 'noun',
      translation: 'зять',
      exEn: 'My sister\'s husband, my brother-in-law, works as an engineer.',
      exUa: 'Чоловік моєї сестри, мій зять, працює інженером.',
    },
    {
      pos: 'noun',
      translation: 'швагер',
      exEn: "My wife's brother, my brother-in-law, came to visit us for the weekend.",
      exUa: 'Брат моєї дружини, мій швагер, приїхав до нас у гості на вихідні.',
    },
  ],
  buoyant: [
    {
      pos: 'adj',
      translation: 'жвавий, оптимістичний',
      exEn: 'She remained buoyant and cheerful despite the setback.',
      exUa: 'Вона залишалася жвавою й оптимістичною, попри невдачу.',
    },
    {
      pos: 'adj',
      translation: 'такий, що тримається на плаву',
      exEn: 'The life jacket kept him buoyant in the rough water.',
      exUa: 'Рятувальний жилет тримав його на плаву в неспокійній воді.',
    },
  ],
  'buy into': [
    {
      pos: 'v',
      translation: 'вірити в ідею',
      exEn: 'Not everyone on the team bought into the new strategy.',
      exUa: 'Не всі в команді повірили в нову стратегію.',
    },
    {
      pos: 'v',
      translation: 'приймати аргументи',
      exEn: 'She refused to buy into his excuses any longer.',
      exUa: 'Вона відмовилася й далі приймати його виправдання.',
    },
  ],
  calibre: [
    {
      pos: 'noun',
      translation: 'рівень, якість',
      exEn: 'The competition attracted athletes of exceptional calibre.',
      exUa: 'Змагання привабили спортсменів виняткового рівня.',
    },
    {
      pos: 'noun',
      translation: 'калібр',
      exEn: 'The rifle uses a smaller calibre of ammunition.',
      exUa: 'Ця гвинтівка використовує набої меншого калібру.',
    },
  ],
  care: [
    {
      pos: 'v',
      translation: 'дбати',
      exEn: "Good nurses genuinely care about their patients' wellbeing.",
      exUa: 'Хороші медсестри щиро дбають про самопочуття своїх пацієнтів.',
    },
    {
      pos: 'noun',
      translation: 'турбота',
      exEn: 'She surrounded her elderly mother with constant care.',
      exUa: 'Вона оточила свою літню матір постійною турботою.',
    },
  ],
  cascade: [
    {
      pos: 'noun',
      translation: 'каскад',
      exEn: 'A gentle cascade of water flowed over the rocks.',
      exUa: 'Ніжний каскад води стікав по каменях.',
    },
    {
      pos: 'v',
      translation: 'падати каскадом',
      exEn: 'Autumn leaves cascaded down onto the quiet street.',
      exUa: 'Осіннє листя каскадом падало на тиху вулицю.',
    },
  ],
  censure: [
    {
      pos: 'noun',
      translation: 'осуд, критика',
      exEn: 'The minister faced public censure for his careless remarks.',
      exUa: 'Міністр зіткнувся з публічним осудом за свої необережні висловлювання.',
    },
    {
      pos: 'v',
      translation: 'засуджувати',
      exEn: 'The committee voted to censure the senator for his conduct.',
      exUa: 'Комітет проголосував за осуд сенатора за його поведінку.',
    },
  ],
  challenge: [
    {
      pos: 'noun',
      translation: 'виклик',
      exEn: 'Learning a new language later in life is a real challenge.',
      exUa: 'Вивчення нової мови в дорослому віці — це справжній виклик.',
    },
    {
      pos: 'v',
      translation: 'кидати виклик',
      exEn: "She decided to challenge the referee's decision.",
      exUa: 'Вона вирішила кинути виклик рішенню судді.',
    },
  ],
  channel: [
    {
      pos: 'noun',
      translation: 'канал',
      exEn: 'She changed the channel to watch the evening news.',
      exUa: 'Вона перемкнула канал, щоб подивитися вечірні новини.',
    },
    {
      pos: 'v',
      translation: 'спрямовувати',
      exEn: 'He learned to channel his anger into something productive.',
      exUa: 'Він навчився спрямовувати свій гнів у щось продуктивне.',
    },
  ],
  charter: [
    {
      pos: 'noun',
      translation: 'статут, хартія',
      exEn: "The organisation's charter outlines its core mission and values.",
      exUa: 'Статут організації окреслює її основну місію та цінності.',
    },
    {
      pos: 'noun',
      translation: 'чартер (рейс)',
      exEn: 'They booked a charter flight to the small island.',
      exUa: 'Вони забронювали чартерний рейс на маленький острів.',
    },
  ],
  chemical: [
    {
      pos: 'noun',
      translation: 'хімічна речовина',
      exEn: 'The factory releases several chemicals into the river.',
      exUa: 'Завод скидає кілька хімічних речовин у річку.',
    },
    {
      pos: 'adj',
      translation: 'хімічний',
      exEn: 'The reaction produced an unexpected chemical change.',
      exUa: 'Реакція спричинила несподівану хімічну зміну.',
    },
  ],
  chicken: [
    {
      pos: 'noun',
      translation: 'курка',
      exEn: 'The farmer keeps forty chickens in the yard.',
      exUa: "Фермер тримає сорок курей на подвір'ї.",
    },
    {
      pos: 'noun',
      translation: 'курятина',
      exEn: 'We had roast chicken with potatoes for dinner.',
      exUa: "На вечерю в нас була смажена курятина з картоплею.",
    },
  ],
  circulation: [
    {
      pos: 'noun',
      translation: 'тираж',
      exEn: "The newspaper's circulation dropped sharply after it went online.",
      exUa: 'Тираж газети різко впав після переходу онлайн.',
    },
    {
      pos: 'noun',
      translation: 'циркуляція',
      exEn: 'Poor blood circulation can cause cold hands and feet.',
      exUa: 'Погана циркуляція крові може спричиняти холодні руки й ноги.',
    },
  ],
  clamour: [
    {
      pos: 'noun',
      translation: 'галас, гамір',
      exEn: 'The clamour of the crowd grew louder as the match continued.',
      exUa: 'Гамір натовпу ставав гучнішим у міру продовження матчу.',
    },
    {
      pos: 'v',
      translation: 'гучно вимагати',
      exEn: 'Fans clamoured for the band to play one more song.',
      exUa: 'Фанати гучно вимагали, щоб гурт зіграв ще одну пісню.',
    },
  ],
  clean: [
    {
      pos: 'adj',
      translation: 'чистий',
      exEn: 'She keeps her kitchen spotlessly clean at all times.',
      exUa: 'Вона завжди тримає свою кухню бездоганно чистою.',
    },
    {
      pos: 'v',
      translation: 'прибирати',
      exEn: 'He promised to clean his room before the weekend.',
      exUa: 'Він пообіцяв прибрати свою кімнату до вихідних.',
    },
  ],
  close: [
    {
      pos: 'v',
      translation: 'закривати',
      exEn: "Please close the door — there's a draught.",
      exUa: 'Будь ласка, зачини двері — тут протяг.',
    },
    {
      pos: 'adj',
      translation: 'близький',
      exEn: 'They have remained close friends since childhood.',
      exUa: 'Вони залишаються близькими друзями з дитинства.',
    },
  ],
  collaborator: [
    {
      pos: 'noun',
      translation: 'колаборатор',
      exEn: 'The man was branded a collaborator after helping the occupying forces.',
      exUa: 'Чоловіка назвали колаборатором після того, як він допомагав окупаційним військам.',
    },
    {
      pos: 'noun',
      translation: 'співпрацівник',
      exEn: 'She found a talented collaborator for her new music project.',
      exUa: 'Вона знайшла талановитого співпрацівника для свого нового музичного проєкту.',
    },
  ],
  comment: [
    {
      pos: 'noun',
      translation: 'коментар',
      exEn: 'She left a thoughtful comment under his photo.',
      exUa: 'Вона залишила продуманий коментар під його фотографією.',
    },
    {
      pos: 'v',
      translation: 'коментувати',
      exEn: 'The spokesperson refused to comment on the rumours.',
      exUa: 'Речник відмовився коментувати чутки.',
    },
  ],
  complete: [
    {
      pos: 'v',
      translation: 'завершувати',
      exEn: 'She worked late to complete the project on time.',
      exUa: 'Вона працювала допізна, щоб вчасно завершити проєкт.',
    },
    {
      pos: 'adj',
      translation: 'повний',
      exEn: 'The collection is now complete after years of searching.',
      exUa: 'Колекція тепер повна після багатьох років пошуків.',
    },
  ],
  compromise: [
    {
      pos: 'noun',
      translation: 'компроміс',
      exEn: 'After a long discussion, they finally reached a compromise.',
      exUa: 'Після довгої дискусії вони нарешті досягли компромісу.',
    },
    {
      pos: 'v',
      translation: 'йти на поступки',
      exEn: 'Marriage often requires both partners to compromise.',
      exUa: 'Шлюб часто вимагає, щоб обидва партнери йшли на поступки.',
    },
  ],
  conflict: [
    {
      pos: 'noun',
      translation: 'конфлікт',
      exEn: 'The two neighbouring countries have been in conflict for decades.',
      exUa: 'Дві сусідні країни перебувають у конфлікті вже десятиліттями.',
    },
    {
      pos: 'v',
      translation: 'суперечити',
      exEn: 'Her new statement seemed to conflict with what she said earlier.',
      exUa: 'Її нова заява, здається, суперечила тому, що вона казала раніше.',
    },
  ],
  conservative: [
    {
      pos: 'adj',
      translation: 'консервативний',
      exEn: 'He held fairly conservative views on most social issues.',
      exUa: 'Він мав досить консервативні погляди на більшість соціальних питань.',
    },
    {
      pos: 'noun',
      translation: 'консерватор',
      exEn: 'She has always voted for the Conservatives in every election.',
      exUa: 'Вона завжди голосувала за консерваторів на кожних виборах.',
    },
  ],
  contrast: [
    {
      pos: 'noun',
      translation: 'контраст',
      exEn: 'The bright colours created a striking contrast against the grey wall.',
      exUa: 'Яскраві кольори створювали разючий контраст на тлі сірої стіни.',
    },
    {
      pos: 'v',
      translation: 'протиставляти',
      exEn: 'The documentary contrasts life in the city with life in the countryside.',
      exUa: 'Документальний фільм протиставляє життя в місті життю в сільській місцевості.',
    },
  ],
  control: [
    {
      pos: 'v',
      translation: 'контролювати',
      exEn: 'It took years for her to learn to control her temper.',
      exUa: 'Їй знадобилися роки, щоб навчитися контролювати свій характер.',
    },
    {
      pos: 'noun',
      translation: 'контроль',
      exEn: 'The pilot lost control of the aircraft during the storm.',
      exUa: 'Пілот втратив контроль над літаком під час шторму.',
    },
  ],
  convention: [
    {
      pos: 'noun',
      translation: 'конвенція, угода',
      exEn: 'The country signed an international convention on human rights.',
      exUa: 'Країна підписала міжнародну конвенцію про права людини.',
    },
    {
      pos: 'noun',
      translation: 'традиція',
      exEn: 'She refused to follow the convention of wearing white at weddings.',
      exUa: 'Вона відмовилася дотримуватися традиції носити біле на весіллях.',
    },
  ],
  conviction: [
    {
      pos: 'noun',
      translation: 'переконання',
      exEn: 'He spoke about his political beliefs with great conviction.',
      exUa: 'Він говорив про свої політичні переконання з великою впевненістю.',
    },
    {
      pos: 'noun',
      translation: 'засудження (вироком суду)',
      exEn: 'His previous conviction made it harder to find a job.',
      exUa: 'Його попереднє засудження ускладнило пошук роботи.',
    },
  ],
  cost: [
    {
      pos: 'v',
      translation: 'коштувати',
      exEn: 'The repairs cost more than she had expected.',
      exUa: 'Ремонт коштував більше, ніж вона очікувала.',
    },
    {
      pos: 'noun',
      translation: 'вартість',
      exEn: 'The total cost of the trip included flights and hotels.',
      exUa: 'Загальна вартість поїздки включала перельоти й готелі.',
    },
  ],
  country: [
    {
      pos: 'noun',
      translation: 'країна',
      exEn: 'She has travelled to more than twenty countries.',
      exUa: 'Вона побувала більш ніж у двадцяти країнах.',
    },
    {
      pos: 'noun',
      translation: 'село',
      exEn: 'They moved to the country to escape the noisy city.',
      exUa: 'Вони переїхали в село, щоб втекти від галасливого міста.',
    },
  ],
  criminal: [
    {
      pos: 'noun',
      translation: 'злочинець',
      exEn: 'The criminal was finally arrested after months on the run.',
      exUa: 'Злочинця нарешті заарештували після кількох місяців переховування.',
    },
    {
      pos: 'adj',
      translation: 'злочинний',
      exEn: 'It would be criminal to waste such a huge opportunity.',
      exUa: 'Було б злочинно змарнувати таку величезну можливість.',
    },
  ],
  crusader: [
    {
      pos: 'noun',
      translation: 'хрестоносець',
      exEn: 'Medieval crusaders travelled thousands of miles to the Holy Land.',
      exUa: 'Середньовічні хрестоносці долали тисячі миль до Святої землі.',
    },
    {
      pos: 'noun',
      translation: 'поборник (за ідею)',
      exEn: 'She became a lifelong crusader for children\'s rights.',
      exUa: "Вона стала довічним поборником прав дітей.",
    },
  ],
  cure: [
    {
      pos: 'noun',
      translation: 'ліки',
      exEn: 'Scientists are still searching for a cure for the disease.',
      exUa: 'Науковці досі шукають ліки від цієї хвороби.',
    },
    {
      pos: 'v',
      translation: 'вилікувати',
      exEn: 'Rest and fluids helped cure her cold within a week.',
      exUa: 'Відпочинок і рідина допомогли вилікувати її застуду протягом тижня.',
    },
  ],
  curl: [
    {
      pos: 'noun',
      translation: 'завиток',
      exEn: 'A single curl of hair fell across her forehead.',
      exUa: 'Один завиток волосся впав їй на чоло.',
    },
    {
      pos: 'v',
      translation: 'скручуватися',
      exEn: 'The old photograph began to curl at the edges.',
      exUa: 'Стара фотографія почала скручуватися по краях.',
    },
  ],
  curse: [
    {
      pos: 'noun',
      translation: 'прокляття',
      exEn: 'According to legend, the ancient tomb carries a terrible curse.',
      exUa: 'За легендою, стародавня гробниця несе жахливе прокляття.',
    },
    {
      pos: 'v',
      translation: 'лаятися',
      exEn: 'He tends to curse loudly whenever he stubs his toe.',
      exUa: 'Він схильний голосно лаятися щоразу, коли вдаряється пальцем ноги.',
    },
  ],
  'cut loose': [
    {
      pos: 'v',
      translation: 'звільнитися від обмежень',
      exEn: 'On holiday, she finally let herself cut loose and relax.',
      exUa: 'У відпустці вона нарешті дозволила собі звільнитися від обмежень і розслабитися.',
    },
    {
      pos: 'v',
      translation: 'звільнити',
      exEn: 'The company had to cut loose several employees during the crisis.',
      exUa: 'Компанії довелося звільнити кількох працівників під час кризи.',
    },
  ],
  cutoff: [
    {
      pos: 'noun',
      translation: 'граничний термін',
      exEn: 'The application cutoff is midnight on Friday.',
      exUa: "Граничний термін подання заявок — опівночі в п'ятницю.",
    },
    {
      pos: 'noun',
      translation: 'рубіж, точка відсічення',
      exEn: 'Anyone scoring above the cutoff will advance to the next round.',
      exUa: 'Кожен, хто набере бали вище точки відсічення, пройде в наступний раунд.',
    },
  ],
  damage: [
    {
      pos: 'noun',
      translation: 'шкода',
      exEn: 'The storm caused severe damage to the coastal town.',
      exUa: 'Шторм завдав серйозної шкоди прибережному містечку.',
    },
    {
      pos: 'v',
      translation: 'пошкоджувати',
      exEn: 'The flood damaged dozens of homes along the river.',
      exUa: 'Повінь пошкодила десятки будинків уздовж річки.',
    },
  ],
  damn: [
    {
      pos: 'adj',
      translation: 'клятий',
      exEn: "He couldn't find his damn keys anywhere in the house.",
      exUa: 'Він ніяк не міг знайти свої кляті ключі в усьому будинку.',
    },
    {
      pos: 'v',
      translation: 'проклинати',
      exEn: 'She damned herself for forgetting such an important appointment.',
      exUa: 'Вона проклинала себе за те, що забула про таку важливу зустріч.',
    },
  ],
  dampen: [
    {
      pos: 'v',
      translation: 'гасити, зменшувати (ентузіазм)',
      exEn: 'Nothing could dampen her enthusiasm for the new project.',
      exUa: 'Ніщо не могло погасити її ентузіазм щодо нового проєкту.',
    },
    {
      pos: 'v',
      translation: 'зволожувати',
      exEn: 'She dampened the cloth before wiping down the counter.',
      exUa: 'Вона зволожила ганчірку, перш ніж протерти стільницю.',
    },
  ],
  dash: [
    {
      pos: 'v',
      translation: 'кидатися',
      exEn: 'He made a sudden dash for the exit when the fire alarm rang.',
      exUa: 'Він раптово кинувся до виходу, коли пролунала пожежна сигналізація.',
    },
    {
      pos: 'noun',
      translation: 'тире',
      exEn: 'Use a dash to separate the two parts of the sentence.',
      exUa: 'Використай тире, щоб розділити дві частини речення.',
    },
  ],
  debut: [
    {
      pos: 'noun',
      translation: 'дебют',
      exEn: 'Her debut novel became an instant bestseller.',
      exUa: 'Її дебютний роман миттєво став бестселером.',
    },
    {
      pos: 'v',
      translation: 'дебютувати',
      exEn: 'The young actor will debut in a major film next year.',
      exUa: 'Молодий актор дебютує у великому фільмі наступного року.',
    },
  ],
  decay: [
    {
      pos: 'v',
      translation: 'гнити',
      exEn: 'The fallen leaves slowly decayed on the forest floor.',
      exUa: 'Опале листя повільно гнило на лісовій підстилці.',
    },
    {
      pos: 'noun',
      translation: 'занепад',
      exEn: 'The old mansion showed clear signs of decay.',
      exUa: 'Старий особняк мав явні ознаки занепаду.',
    },
  ],
  decrease: [
    {
      pos: 'v',
      translation: 'зменшувати',
      exEn: 'The company decreased its prices to attract more customers.',
      exUa: 'Компанія зменшила ціни, щоб привабити більше клієнтів.',
    },
    {
      pos: 'noun',
      translation: 'зниження',
      exEn: 'There has been a steady decrease in unemployment this year.',
      exUa: 'Цього року спостерігається стійке зниження безробіття.',
    },
  ],
  default: [
    {
      pos: 'v',
      translation: "не виконувати зобов'язань",
      exEn: 'The borrower defaulted on his loan after losing his job.',
      exUa: "Позичальник не виконав зобов'язання за кредитом після втрати роботи.",
    },
    {
      pos: 'v',
      translation: 'мати значення за замовчуванням',
      exEn: 'The settings default to English unless changed manually.',
      exUa: 'Налаштування мають значення за замовчуванням англійською, якщо не змінені вручну.',
    },
  ],
  defeat: [
    {
      pos: 'noun',
      translation: 'поразка',
      exEn: 'The team suffered a humiliating defeat in the final match.',
      exUa: 'Команда зазнала принизливої поразки у фінальному матчі.',
    },
    {
      pos: 'v',
      translation: 'перемагати',
      exEn: 'Our side defeated the opponents by three points.',
      exUa: 'Наша сторона перемогла суперників з різницею у три очки.',
    },
  ],
  defendant: [
    {
      pos: 'noun',
      translation: 'відповідач',
      exEn: 'The defendant filed a counterclaim in the civil case.',
      exUa: 'Відповідач подав зустрічний позов у цивільній справі.',
    },
    {
      pos: 'noun',
      translation: 'підсудний',
      exEn: 'The defendant pleaded not guilty before the judge.',
      exUa: 'Підсудний визнав себе невинним перед суддею.',
    },
  ],
  delay: [
    {
      pos: 'noun',
      translation: 'затримка',
      exEn: 'The flight suffered a three-hour delay due to bad weather.',
      exUa: 'Рейс мав тригодинну затримку через погану погоду.',
    },
    {
      pos: 'v',
      translation: 'затримувати',
      exEn: 'Heavy traffic delayed her arrival by almost an hour.',
      exUa: 'Через сильний трафік вона запізнилась майже на годину.',
    },
  ],
  delegation: [
    {
      pos: 'noun',
      translation: 'делегація',
      exEn: 'A delegation from the ministry visited the factory yesterday.',
      exUa: 'Учора завод відвідала делегація з міністерства.',
    },
    {
      pos: 'noun',
      translation: 'делегування',
      exEn: 'Good managers understand the importance of delegation.',
      exUa: 'Хороші керівники розуміють важливість делегування повноважень.',
    },
  ],
  delicacy: [
    {
      pos: 'noun',
      translation: 'делікатес',
      exEn: 'Caviar is considered a delicacy in many countries.',
      exUa: 'Ікра вважається делікатесом у багатьох країнах.',
    },
    {
      pos: 'noun',
      translation: 'тонкість',
      exEn: 'She handled the sensitive topic with great delicacy.',
      exUa: 'Вона делікатно, з великою тонкістю, підійшла до чутливої теми.',
    },
  ],
  delight: [
    {
      pos: 'noun',
      translation: 'насолода',
      exEn: 'Watching the children play brought her great delight.',
      exUa: 'Спостереження за грою дітей приносило їй велику насолоду.',
    },
    {
      pos: 'v',
      translation: 'радувати',
      exEn: 'The surprise gift delighted her beyond words.',
      exUa: 'Несподіваний подарунок надзвичайно порадував її.',
    },
  ],
  demand: [
    {
      pos: 'v',
      translation: 'вимагати',
      exEn: 'The workers demanded better pay and safer conditions.',
      exUa: 'Робітники вимагали кращої оплати та безпечніших умов.',
    },
    {
      pos: 'noun',
      translation: 'попит',
      exEn: 'There is growing demand for electric vehicles worldwide.',
      exUa: 'У всьому світі зростає попит на електромобілі.',
    },
  ],
  demographic: [
    {
      pos: 'adj',
      translation: 'демографічний',
      exEn: 'The country is facing a serious demographic crisis.',
      exUa: 'Країна стикається із серйозною демографічною кризою.',
    },
    {
      pos: 'noun',
      translation: 'демографія',
      exEn: 'Marketers study demographics to understand their target audience.',
      exUa: 'Маркетологи вивчають демографію, щоб зрозуміти свою цільову аудиторію.',
    },
  ],
  derivation: [
    {
      pos: 'noun',
      translation: 'похідне, деривація',
      exEn: "The word's derivation can be traced back to Old French.",
      exUa: 'Походження цього слова можна простежити до старофранцузької мови.',
    },
    {
      pos: 'noun',
      translation: 'виведення',
      exEn: 'The textbook includes a full derivation of the formula.',
      exUa: 'Підручник містить повне виведення формули.',
    },
  ],
  design: [
    {
      pos: 'noun',
      translation: 'дизайн',
      exEn: "The building's design won several architecture awards.",
      exUa: 'Дизайн будівлі отримав кілька архітектурних нагород.',
    },
    {
      pos: 'v',
      translation: 'проектувати',
      exEn: 'Engineers designed a bridge that could withstand earthquakes.',
      exUa: 'Інженери спроектували міст, здатний витримати землетруси.',
    },
  ],
  desire: [
    {
      pos: 'noun',
      translation: 'бажання',
      exEn: 'She had a strong desire to travel the world.',
      exUa: 'У неї було сильне бажання подорожувати світом.',
    },
    {
      pos: 'v',
      translation: 'прагнути',
      exEn: 'He desired nothing more than peace and quiet.',
      exUa: 'Він не прагнув нічого, окрім спокою і тиші.',
    },
  ],
  determination: [
    {
      pos: 'noun',
      translation: 'рішучість',
      exEn: 'Her determination helped her overcome every obstacle.',
      exUa: 'Її рішучість допомогла їй подолати кожну перешкоду.',
    },
    {
      pos: 'noun',
      translation: 'визначення',
      exEn: 'The determination of the exact cause took several weeks.',
      exUa: 'Визначення точної причини зайняло кілька тижнів.',
    },
  ],
  dial: [
    {
      pos: 'v',
      translation: 'набирати номер',
      exEn: 'She dialled the number three times but nobody answered.',
      exUa: 'Вона набрала номер тричі, але ніхто не відповів.',
    },
    {
      pos: 'noun',
      translation: 'циферблат',
      exEn: 'The clock\'s dial glowed softly in the dark.',
      exUa: 'Циферблат годинника м\'яко світився в темряві.',
    },
  ],
  'dig in': [
    {
      pos: 'v',
      translation: 'заглиблюватися',
      exEn: "Let's dig in and look at the details of the contract.",
      exUa: 'Давайте заглибимось і розглянемо деталі контракту.',
    },
    {
      pos: 'v',
      translation: 'вперто триматися',
      exEn: 'The soldiers dug in and refused to retreat.',
      exUa: 'Солдати вперто трималися позиції й відмовлялися відступати.',
    },
  ],
  dim: [
    {
      pos: 'adj',
      translation: 'тьмяний',
      exEn: 'The room was lit only by a dim lamp in the corner.',
      exUa: 'Кімнату освітлювала лише тьмяна лампа в кутку.',
    },
    {
      pos: 'v',
      translation: 'приглушувати',
      exEn: 'She dimmed the lights before the movie started.',
      exUa: 'Вона приглушила світло перед початком фільму.',
    },
  ],
  dip: [
    {
      pos: 'v',
      translation: 'занурювати',
      exEn: 'He dipped his toast into the warm soup.',
      exUa: 'Він занурив тост у теплий суп.',
    },
    {
      pos: 'noun',
      translation: 'соус',
      exEn: 'She served the vegetables with a creamy dip.',
      exUa: 'Вона подала овочі з вершковим соусом.',
    },
  ],
  direct: [
    {
      pos: 'adj',
      translation: 'прямий',
      exEn: 'She took the most direct route to avoid the heavy traffic.',
      exUa: 'Вона обрала найпряміший маршрут, щоб уникнути щільного руху.',
    },
    {
      pos: 'v',
      translation: 'направляти',
      exEn: 'The officer directed the traffic around the accident.',
      exUa: 'Офіцер направляв рух транспорту навколо аварії.',
    },
  ],
  discipline: [
    {
      pos: 'noun',
      translation: 'дисципліна',
      exEn: 'Success in sport requires years of discipline.',
      exUa: 'Успіх у спорті вимагає багатьох років дисципліни.',
    },
    {
      pos: 'v',
      translation: 'дисциплінувати',
      exEn: 'The coach disciplined the players who missed training.',
      exUa: 'Тренер дисциплінував гравців, які пропустили тренування.',
    },
  ],
  discount: [
    {
      pos: 'noun',
      translation: 'знижка',
      exEn: 'Students receive a ten percent discount on tickets.',
      exUa: 'Студенти отримують десятивідсоткову знижку на квитки.',
    },
    {
      pos: 'v',
      translation: 'не брати до уваги',
      exEn: "We shouldn't discount the possibility of a delay.",
      exUa: 'Нам не варто відкидати можливість затримки.',
    },
  ],
  disdain: [
    {
      pos: 'noun',
      translation: 'зневага',
      exEn: 'He looked at the offer with obvious disdain.',
      exUa: 'Він подивився на пропозицію з очевидною зневагою.',
    },
    {
      pos: 'v',
      translation: 'зневажати',
      exEn: 'She openly disdained anyone who broke the rules.',
      exUa: 'Вона відкрито зневажала кожного, хто порушував правила.',
    },
  ],
  disguise: [
    {
      pos: 'noun',
      translation: 'маскування',
      exEn: 'The spy entered the building wearing a clever disguise.',
      exUa: 'Шпигун увійшов до будівлі в хитромудрому маскуванні.',
    },
    {
      pos: 'v',
      translation: 'маскувати',
      exEn: 'He tried to disguise his accent during the interview.',
      exUa: 'Він намагався маскувати свій акцент під час співбесіди.',
    },
  ],
  dispatch: [
    {
      pos: 'v',
      translation: 'відправляти',
      exEn: 'The company dispatched the package the same afternoon.',
      exUa: 'Компанія відправила посилку того ж дня по обіді.',
    },
    {
      pos: 'noun',
      translation: 'відправка',
      exEn: 'The dispatch of emergency supplies took only a few hours.',
      exUa: 'Відправка гуманітарної допомоги зайняла лише кілька годин.',
    },
  ],
  display: [
    {
      pos: 'v',
      translation: 'демонструвати',
      exEn: 'The museum displays artefacts from ancient Egypt.',
      exUa: 'Музей демонструє артефакти стародавнього Єгипту.',
    },
    {
      pos: 'noun',
      translation: 'виставка',
      exEn: 'The gallery organised a special display of local art.',
      exUa: 'Галерея організувала спеціальну виставку місцевого мистецтва.',
    },
  ],
  dispute: [
    {
      pos: 'noun',
      translation: 'суперечка',
      exEn: 'The two companies settled their dispute out of court.',
      exUa: 'Дві компанії владнали свою суперечку поза судом.',
    },
    {
      pos: 'v',
      translation: 'сперечатися',
      exEn: "They disputed the referee's decision for several minutes.",
      exUa: 'Вони сперечалися з рішенням судді кілька хвилин.',
    },
  ],
  disquiet: [
    {
      pos: 'noun',
      translation: 'неспокій, тривога',
      exEn: 'A sense of disquiet spread through the town after the news.',
      exUa: 'Після новин у місті поширилося відчуття тривоги.',
    },
    {
      pos: 'v',
      translation: 'тривожити',
      exEn: 'The strange silence disquieted everyone in the room.',
      exUa: 'Дивна тиша тривожила всіх у кімнаті.',
    },
  ],
  dissent: [
    {
      pos: 'noun',
      translation: 'незгода',
      exEn: 'There was open dissent among party members over the new policy.',
      exUa: 'Серед членів партії була відкрита незгода щодо нової політики.',
    },
    {
      pos: 'v',
      translation: 'не погоджуватися',
      exEn: "Two judges dissented from the majority's final ruling.",
      exUa: 'Двоє суддів не погодилися з остаточним рішенням більшості.',
    },
  ],
  distill: [
    {
      pos: 'v',
      translation: 'дистилювати',
      exEn: 'The factory distills water to remove impurities.',
      exUa: 'Завод дистилює воду, щоб видалити домішки.',
    },
    {
      pos: 'v',
      translation: 'виражати суть',
      exEn: "Her speech distilled decades of experience into a few simple ideas.",
      exUa: 'Її промова виразила суть десятиліть досвіду в кількох простих ідеях.',
    },
  ],
  distrust: [
    {
      pos: 'noun',
      translation: 'недовіра',
      exEn: 'Years of broken promises had left him with a deep distrust.',
      exUa: 'Роки порушених обіцянок залишили в ньому глибоку недовіру.',
    },
    {
      pos: 'v',
      translation: 'не довіряти',
      exEn: 'She distrusted strangers who seemed overly friendly.',
      exUa: 'Вона не довіряла незнайомцям, які здавалися занадто дружніми.',
    },
  ],
  ditch: [
    {
      pos: 'noun',
      translation: 'рів',
      exEn: "The car skidded off the road and into a ditch.",
      exUa: "Автомобіль з'їхав з дороги в рів.",
    },
    {
      pos: 'v',
      translation: 'кидати',
      exEn: 'He decided to ditch his old plan and start fresh.',
      exUa: 'Він вирішив кинути свій старий план і почати спочатку.',
    },
  ],
  divorce: [
    {
      pos: 'noun',
      translation: 'розлучення',
      exEn: 'Their divorce was finalised after months of negotiation.',
      exUa: 'Їхнє розлучення було оформлене після кількох місяців переговорів.',
    },
    {
      pos: 'v',
      translation: 'розлучатися',
      exEn: 'They decided to divorce after twenty years of marriage.',
      exUa: 'Вони вирішили розлучитися після двадцяти років шлюбу.',
    },
  ],
  dock: [
    {
      pos: 'noun',
      translation: 'причал',
      exEn: 'The ship was tied up at the dock overnight.',
      exUa: 'Корабель був пришвартований до причалу на ніч.',
    },
    {
      pos: 'v',
      translation: 'стикуватися',
      exEn: 'The spacecraft docked with the station successfully.',
      exUa: 'Космічний корабель успішно пристикувався до станції.',
    },
  ],
  document: [
    {
      pos: 'noun',
      translation: 'документ',
      exEn: 'Please sign the document before submitting it.',
      exUa: 'Будь ласка, підпишіть документ перед подачею.',
    },
    {
      pos: 'v',
      translation: 'документувати',
      exEn: 'Researchers carefully documented every stage of the experiment.',
      exUa: 'Дослідники ретельно документували кожен етап експерименту.',
    },
  ],
  double: [
    {
      pos: 'v',
      translation: 'подвоювати',
      exEn: 'The company doubled its profits within two years.',
      exUa: 'Компанія подвоїла свій прибуток за два роки.',
    },
    {
      pos: 'adj',
      translation: 'подвійний',
      exEn: 'She ordered a double espresso to stay awake.',
      exUa: 'Вона замовила подвійний еспресо, щоб не заснути.',
    },
  ],
  doubt: [
    {
      pos: 'noun',
      translation: 'сумнів',
      exEn: 'She had serious doubts about whether the plan would work.',
      exUa: 'У неї були серйозні сумніви щодо того, чи спрацює план.',
    },
    {
      pos: 'v',
      translation: 'сумніватися',
      exEn: 'I doubt that he will arrive on time.',
      exUa: 'Я сумніваюся, що він прибуде вчасно.',
    },
  ],
  dramatic: [
    {
      pos: 'adj',
      translation: 'драматичний',
      exEn: 'The play ended with a dramatic final scene.',
      exUa: "П'єса завершилася драматичною фінальною сценою.",
    },
    {
      pos: 'adj',
      translation: 'різкий',
      exEn: 'There was a dramatic increase in sales last quarter.',
      exUa: 'Минулого кварталу відбулося різке зростання продажів.',
    },
  ],
  drawing: [
    {
      pos: 'noun',
      translation: 'малювання',
      exEn: 'Drawing has been her favourite hobby since childhood.',
      exUa: "Малювання було її улюбленим хобі з дитинства.",
    },
    {
      pos: 'noun',
      translation: 'малюнок',
      exEn: 'She pinned her latest drawing on the wall above her desk.',
      exUa: 'Вона причепила свій останній малюнок на стіну над столом.',
    },
  ],
  dread: [
    {
      pos: 'noun',
      translation: 'жах',
      exEn: 'She felt a growing sense of dread before the exam.',
      exUa: 'Вона відчувала наростаючий жах перед іспитом.',
    },
    {
      pos: 'v',
      translation: 'боятися',
      exEn: 'He dreaded telling his parents about the accident.',
      exUa: 'Він боявся розповісти батькам про аварію.',
    },
  ],
  dream: [
    {
      pos: 'noun',
      translation: 'мрія',
      exEn: 'Owning her own bakery had always been her dream.',
      exUa: 'Володіти власною пекарнею завжди було її мрією.',
    },
    {
      pos: 'v',
      translation: 'снитися',
      exEn: 'She dreamed about flying over the ocean last night.',
      exUa: 'Минулої ночі їй снилося, що вона летить над океаном.',
    },
  ],
  dress: [
    {
      pos: 'v',
      translation: 'одягатися',
      exEn: 'It only took her five minutes to dress this morning.',
      exUa: 'Цього ранку їй знадобилося лише п\'ять хвилин, щоб одягнутися.',
    },
    {
      pos: 'noun',
      translation: 'сукня',
      exEn: 'She wore a beautiful blue dress to the wedding.',
      exUa: 'Вона вдягла красиву синю сукню на весілля.',
    },
  ],
  drill: [
    {
      pos: 'noun',
      translation: 'свердло',
      exEn: 'He bought a new electric drill to hang the shelves.',
      exUa: 'Він купив нову електричну дриль, щоб повісити полиці.',
    },
    {
      pos: 'v',
      translation: 'свердлити',
      exEn: 'Workers drilled through the concrete floor to install new pipes.',
      exUa: 'Робітники свердлили бетонну підлогу, щоб встановити нові труби.',
    },
    {
      pos: 'noun',
      translation: 'тренування',
      exEn: 'The fire drill was held on Tuesday morning.',
      exUa: 'Пожежне тренування відбулося у вівторок вранці.',
    },
  ],
  drink: [
    {
      pos: 'v',
      translation: 'пити',
      exEn: 'She drinks a glass of water first thing every morning.',
      exUa: 'Вона щоранку першим ділом випиває склянку води.',
    },
    {
      pos: 'noun',
      translation: 'напій',
      exEn: 'Would you like a cold drink after your walk?',
      exUa: 'Хочеш холодний напій після прогулянки?',
    },
  ],
  drip: [
    {
      pos: 'v',
      translation: 'капати',
      exEn: 'Water dripped steadily from the leaking tap all night.',
      exUa: 'Вода всю ніч рівномірно капала з протікаючого крана.',
    },
    {
      pos: 'noun',
      translation: 'крапля',
      exEn: 'A single drip of paint fell onto the clean floor.',
      exUa: 'Одна крапля фарби впала на чисту підлогу.',
    },
  ],
  drizzle: [
    {
      pos: 'noun',
      translation: 'мряка',
      exEn: 'A light drizzle fell all morning making the streets wet.',
      exUa: 'Легка мряка йшла цілий ранок, змочуючи вулиці.',
    },
    {
      pos: 'v',
      translation: 'мрячити',
      exEn: 'It began to drizzle just as we left the house.',
      exUa: 'Почало мрячити якраз тоді, коли ми вийшли з дому.',
    },
  ],
  drop: [
    {
      pos: 'v',
      translation: 'падати',
      exEn: 'The temperature is expected to drop sharply tonight.',
      exUa: 'Очікується, що температура різко впаде сьогодні вночі.',
    },
    {
      pos: 'noun',
      translation: 'крапля',
      exEn: 'A single drop of rain landed on her cheek.',
      exUa: 'Одна крапля дощу впала їй на щоку.',
    },
  ],
  drum: [
    {
      pos: 'noun',
      translation: 'барабан',
      exEn: 'He bought his son a small drum for his birthday.',
      exUa: 'Він купив синові маленький барабан на день народження.',
    },
    {
      pos: 'v',
      translation: 'барабанити',
      exEn: 'Rain drummed steadily against the window all night.',
      exUa: 'Дощ рівномірно барабанив у вікно всю ніч.',
    },
  ],
  dry: [
    {
      pos: 'adj',
      translation: 'сухий',
      exEn: 'The desert air is extremely dry and hot.',
      exUa: 'Повітря пустелі надзвичайно сухе й гаряче.',
    },
    {
      pos: 'v',
      translation: 'сушити',
      exEn: 'She hung the laundry outside to dry in the sun.',
      exUa: 'Вона повісила білизну надворі сушитися на сонці.',
    },
  ],
  duplicate: [
    {
      pos: 'noun',
      translation: 'дублікат',
      exEn: "She keeps a duplicate of her house key at her sister's.",
      exUa: 'Вона зберігає дублікат ключа від дому в сестри.',
    },
    {
      pos: 'v',
      translation: 'дублювати',
      exEn: "Please don't duplicate the work someone else has already done.",
      exUa: 'Будь ласка, не дублюй роботу, яку вже виконав хтось інший.',
    },
  ],
  dust: [
    {
      pos: 'noun',
      translation: 'пил',
      exEn: 'A thick layer of dust covered the old furniture.',
      exUa: 'Товстий шар пилу вкривав старі меблі.',
    },
    {
      pos: 'v',
      translation: 'витирати пил',
      exEn: 'She dusted the shelves before the guests arrived.',
      exUa: 'Вона витерла пил з полиць перед приходом гостей.',
    },
  ],
  dye: [
    {
      pos: 'noun',
      translation: 'фарба',
      exEn: 'She used a natural dye made from beetroot.',
      exUa: 'Вона використала натуральну фарбу з буряка.',
    },
    {
      pos: 'v',
      translation: 'фарбувати',
      exEn: 'He decided to dye his hair a darker shade.',
      exUa: 'Він вирішив пофарбувати волосся в темніший відтінок.',
    },
  ],
  ease: [
    {
      pos: 'noun',
      translation: 'легкість',
      exEn: 'She completed the difficult exam with remarkable ease.',
      exUa: 'Вона склала складний іспит з надзвичайною легкістю.',
    },
    {
      pos: 'v',
      translation: 'полегшувати',
      exEn: "The medicine helped ease the pain in his shoulder.",
      exUa: 'Ліки допомогли полегшити біль у його плечі.',
    },
  ],
  echo: [
    {
      pos: 'noun',
      translation: 'луна',
      exEn: 'The echo of her footsteps filled the empty hallway.',
      exUa: 'Луна її кроків наповнювала порожній коридор.',
    },
    {
      pos: 'v',
      translation: 'відлунювати',
      exEn: 'His words echoed through the silent church.',
      exUa: 'Його слова відлунювали в тихій церкві.',
    },
  ],
  'edge out': [
    {
      pos: 'v',
      translation: 'витісняти',
      exEn: 'New technology is gradually edging out the old factory jobs.',
      exUa: 'Нові технології поступово витісняють старі заводські робочі місця.',
    },
    {
      pos: 'v',
      translation: 'трохи обходити',
      exEn: 'She edged out her closest rival by less than a second.',
      exUa: 'Вона трохи обійшла свою найближчу суперницю менш ніж на секунду.',
    },
  ],
  editorial: [
    {
      pos: 'noun',
      translation: 'редакційна стаття',
      exEn: 'The newspaper published a strong editorial about climate policy.',
      exUa: 'Газета опублікувала гостру редакційну статтю про кліматичну політику.',
    },
    {
      pos: 'adj',
      translation: 'редакційний',
      exEn: 'The magazine has strict editorial standards for every article.',
      exUa: 'Журнал має суворі редакційні стандарти для кожної статті.',
    },
  ],
  efface: [
    {
      pos: 'v',
      translation: 'стирати, знищувати (слід)',
      exEn: 'Time had almost effaced the inscription on the old gravestone.',
      exUa: 'Час майже стер напис на старому надгробку.',
    },
    {
      pos: 'v',
      translation: 'вести себе непомітно',
      exEn: 'He tends to efface himself in large social gatherings.',
      exUa: 'Він схильний триматися непомітно на великих зібраннях.',
    },
  ],
  elaborate: [
    {
      pos: 'v',
      translation: 'детально розробляти',
      exEn: 'Could you elaborate on your plan for the new project?',
      exUa: 'Чи не могли б ви детальніше розробити свій план щодо нового проєкту?',
    },
    {
      pos: 'adj',
      translation: 'докладний',
      exEn: 'She gave an elaborate explanation of the entire process.',
      exUa: 'Вона дала докладне пояснення всього процесу.',
    },
  ],
  embark: [
    {
      pos: 'v',
      translation: 'відправлятися',
      exEn: 'The passengers embarked on the ship early in the morning.',
      exUa: 'Пасажири відправилися на кораблі рано вранці.',
    },
    {
      pos: 'v',
      translation: 'братися за',
      exEn: 'She decided to embark on a completely new career.',
      exUa: "Вона вирішила взятися за абсолютно нову кар'єру.",
    },
  ],
  empty: [
    {
      pos: 'adj',
      translation: 'порожній',
      exEn: 'The room was completely empty when she finally arrived.',
      exUa: 'Кімната була абсолютно порожньою, коли вона нарешті прийшла.',
    },
    {
      pos: 'v',
      translation: 'спустошувати',
      exEn: 'He emptied his pockets onto the table before going through security.',
      exUa: 'Він спустошив кишені на стіл перед проходом через контроль безпеки.',
    },
  ],
  enabler: [
    {
      pos: 'noun',
      translation: 'пособник',
      exEn: 'Critics called him an enabler of corrupt practices.',
      exUa: 'Критики назвали його пособником корупційних практик.',
    },
    {
      pos: 'noun',
      translation: 'той, хто сприяє (поведінці)',
      exEn: 'Friends who always cover for him have become enablers of his bad habits.',
      exUa: 'Друзі, які завжди його прикривають, стали тими, хто сприяє його поганим звичкам.',
    },
  ],
  encore: [
    {
      pos: 'noun',
      translation: 'біс',
      exEn: 'The crowd shouted for an encore after the final song.',
      exUa: 'Натовп вигукував «біс» після останньої пісні.',
    },
    {
      pos: 'v',
      translation: 'виконувати на біс',
      exEn: 'The band encored with their most popular hit.',
      exUa: 'Гурт виконав на біс свій найпопулярніший хіт.',
    },
  ],
  end: [
    {
      pos: 'noun',
      translation: 'кінець',
      exEn: 'At the end of the film, everyone was crying.',
      exUa: 'Наприкінці фільму всі плакали.',
    },
    {
      pos: 'v',
      translation: 'закінчувати',
      exEn: 'They decided to end the meeting early.',
      exUa: 'Вони вирішили закінчити зустріч раніше.',
    },
  ],
  'endeavor (endeavour)': [
    {
      pos: 'noun',
      translation: 'зусилля',
      exEn: 'Their endeavour to save the old theatre finally succeeded.',
      exUa: 'Їхні зусилля врятувати старий театр нарешті увінчалися успіхом.',
    },
    {
      pos: 'v',
      translation: 'намагатися',
      exEn: 'The team endeavoured to finish the project ahead of schedule.',
      exUa: 'Команда намагалася завершити проєкт раніше запланованого терміну.',
    },
  ],
  envy: [
    {
      pos: 'noun',
      translation: 'заздрість',
      exEn: "She couldn't hide her envy when her friend won the prize.",
      exUa: 'Вона не могла приховати заздрість, коли її подруга виграла приз.',
    },
    {
      pos: 'v',
      translation: 'заздрити',
      exEn: "He envied his brother's easy confidence in social situations.",
      exUa: 'Він заздрив легкій впевненості свого брата в спілкуванні.',
    },
  ],
  equal: [
    {
      pos: 'adj',
      translation: 'рівний',
      exEn: 'Everyone deserves equal treatment regardless of background.',
      exUa: 'Кожен заслуговує на рівне ставлення незалежно від походження.',
    },
    {
      pos: 'v',
      translation: 'дорівнювати',
      exEn: 'Two plus two equals four.',
      exUa: 'Два плюс два дорівнює чотирьом.',
    },
  ],
  establishment: [
    {
      pos: 'noun',
      translation: 'установа',
      exEn: 'The old hotel is a well-known establishment in the town.',
      exUa: 'Старий готель — відома установа в місті.',
    },
    {
      pos: 'noun',
      translation: 'заснування',
      exEn: 'The establishment of the new library took almost two years.',
      exUa: 'Заснування нової бібліотеки зайняло майже два роки.',
    },
  ],
  esteem: [
    {
      pos: 'noun',
      translation: 'повага',
      exEn: 'He is held in high esteem by his colleagues.',
      exUa: 'Колеги ставляться до нього з великою повагою.',
    },
    {
      pos: 'v',
      translation: 'поважати',
      exEn: 'Everyone in the village esteemed the old doctor deeply.',
      exUa: 'Усі в селі глибоко поважали старого лікаря.',
    },
  ],
  estimate: [
    {
      pos: 'v',
      translation: 'оцінювати',
      exEn: 'Experts estimate that repairs will cost around ten thousand dollars.',
      exUa: 'Експерти оцінюють, що ремонт коштуватиме близько десяти тисяч доларів.',
    },
    {
      pos: 'noun',
      translation: 'кошторис',
      exEn: 'The builder gave us a written estimate before starting the work.',
      exUa: 'Будівельник надав нам письмовий кошторис перед початком робіт.',
    },
  ],
  exact: [
    {
      pos: 'adj',
      translation: 'точний',
      exEn: 'She could not recall the exact time when the incident occurred.',
      exUa: 'Вона не могла пригадати точний час, коли стався інцидент.',
    },
    {
      pos: 'v',
      translation: 'вимагати',
      exEn: 'The dictator exacted a heavy price from anyone who opposed him.',
      exUa: 'Диктатор вимагав важку плату від кожного, хто йому опирався.',
    },
  ],
  exchange: [
    {
      pos: 'noun',
      translation: 'обмін',
      exEn: 'They had a brief exchange of opinions before the meeting started.',
      exUa: 'Перед початком зустрічі вони коротко обмінялися думками.',
    },
    {
      pos: 'v',
      translation: 'обмінювати',
      exEn: 'She wanted to exchange the shirt for a larger size.',
      exUa: 'Вона хотіла обміняти сорочку на більший розмір.',
    },
  ],
  excuse: [
    {
      pos: 'noun',
      translation: 'виправдання',
      exEn: 'He always has an excuse for being late.',
      exUa: 'У нього завжди є виправдання для запізнення.',
    },
    {
      pos: 'v',
      translation: 'вибачати',
      exEn: 'Please excuse my late reply — I was travelling.',
      exUa: 'Будь ласка, вибачте за пізню відповідь — я подорожував.',
    },
  ],
  execution: [
    {
      pos: 'noun',
      translation: 'виконання',
      exEn: 'The plan was excellent, but its execution was poor.',
      exUa: 'План був чудовий, але його виконання було слабким.',
    },
    {
      pos: 'noun',
      translation: 'страта',
      exEn: 'The king ordered the execution of the traitor at dawn.',
      exUa: 'Король наказав стратити зрадника на світанку.',
    },
  ],
  exercise: [
    {
      pos: 'noun',
      translation: 'вправа',
      exEn: 'Complete exercise three on page twelve for homework.',
      exUa: 'Виконайте вправу три на сторінці дванадцять як домашнє завдання.',
    },
    {
      pos: 'v',
      translation: 'тренуватися',
      exEn: 'Doctors recommend exercising at least thirty minutes a day.',
      exUa: 'Лікарі рекомендують тренуватися щонайменше тридцять хвилин на день.',
    },
  ],
  exhaust: [
    {
      pos: 'v',
      translation: 'виснажувати',
      exEn: 'The long hike completely exhausted every member of the group.',
      exUa: 'Довгий похід повністю виснажив кожного учасника групи.',
    },
    {
      pos: 'noun',
      translation: 'вихлоп',
      exEn: "Black smoke poured from the car's exhaust pipe.",
      exUa: 'Чорний дим валив з вихлопної труби автомобіля.',
    },
  ],
  exit: [
    {
      pos: 'noun',
      translation: 'вихід',
      exEn: 'Please use the emergency exit at the back of the building.',
      exUa: 'Будь ласка, скористайтеся аварійним виходом у задній частині будівлі.',
    },
    {
      pos: 'v',
      translation: 'виходити',
      exEn: 'Passengers should exit the train quickly at this station.',
      exUa: 'Пасажирам слід швидко виходити з потяга на цій станції.',
    },
  ],
  export: [
    {
      pos: 'noun',
      translation: 'експорт',
      exEn: 'The country relies heavily on the export of grain.',
      exUa: 'Країна значною мірою залежить від експорту зерна.',
    },
    {
      pos: 'v',
      translation: 'експортувати',
      exEn: 'The company exports furniture to over thirty countries.',
      exUa: 'Компанія експортує меблі до понад тридцяти країн.',
    },
  ],
  exposure: [
    {
      pos: 'noun',
      translation: 'вплив, контакт',
      exEn: 'Long exposure to loud noise can damage your hearing.',
      exUa: 'Тривалий вплив гучного шуму може пошкодити слух.',
    },
    {
      pos: 'noun',
      translation: 'оприлюднення',
      exEn: 'The scandal received massive media exposure within days.',
      exUa: 'Скандал отримав масштабне медійне висвітлення протягом кількох днів.',
    },
  ],
  fallout: [
    {
      pos: 'noun',
      translation: 'наслідки',
      exEn: 'The company is still dealing with the fallout from the scandal.',
      exUa: 'Компанія досі має справу з наслідками скандалу.',
    },
    {
      pos: 'noun',
      translation: 'радіоактивне опадання',
      exEn: 'Radioactive fallout contaminated the area for decades.',
      exUa: 'Радіоактивне опадання забруднювало територію протягом десятиліть.',
    },
  ],
  fancy: [
    {
      pos: 'v',
      translation: 'уявляти',
      exEn: 'She fancied herself as a famous singer one day.',
      exUa: 'Вона уявляла себе колись відомою співачкою.',
    },
    {
      pos: 'adj',
      translation: 'химерний',
      exEn: 'The hotel lobby had a rather fancy chandelier.',
      exUa: 'У вестибюлі готелю була доволі химерна люстра.',
    },
  ],
  'far from': [
    {
      pos: 'adv',
      translation: 'далеко від',
      exEn: 'The village is far from the nearest hospital.',
      exUa: 'Село знаходиться далеко від найближчої лікарні.',
    },
    {
      pos: 'adv',
      translation: 'аж ніяк не',
      exEn: 'The results were far from perfect.',
      exUa: 'Результати були аж ніяк не ідеальними.',
    },
  ],
  fathom: [
    {
      pos: 'v',
      translation: 'осягати, розуміти',
      exEn: "I simply couldn't fathom why he would say such a thing.",
      exUa: 'Я просто не міг осягнути, чому він сказав би таке.',
    },
    {
      pos: 'noun',
      translation: 'морська сажень',
      exEn: 'The wreck lies twenty fathoms below the surface.',
      exUa: 'Уламки корабля лежать на глибині двадцяти морських саженів.',
    },
  ],
  fellowship: [
    {
      pos: 'noun',
      translation: 'стипендія (для дослідника)',
      exEn: 'She was awarded a research fellowship at a prestigious university.',
      exUa: 'Їй призначили дослідницьку стипендію в престижному університеті.',
    },
    {
      pos: 'noun',
      translation: 'братерство',
      exEn: 'The club offers a strong sense of fellowship among its members.',
      exUa: 'Клуб пропонує міцне відчуття братерства між своїми членами.',
    },
  ],
  ferment: [
    {
      pos: 'v',
      translation: 'бродити',
      exEn: 'Unrest had been fermenting among the workers for months.',
      exUa: 'Серед робітників уже кілька місяців бродило невдоволення.',
    },
    {
      pos: 'v',
      translation: 'ферментувати',
      exEn: 'The grapes are left to ferment for several weeks.',
      exUa: 'Виноград залишають ферментуватися на кілька тижнів.',
    },
  ],
  fiddle: [
    {
      pos: 'noun',
      translation: 'скрипка',
      exEn: 'He played a lively tune on his old fiddle.',
      exUa: 'Він зіграв жваву мелодію на своїй старій скрипці.',
    },
    {
      pos: 'v',
      translation: 'метушитися',
      exEn: 'She kept fiddling with her keys while waiting nervously.',
      exUa: 'Вона нервово метушилася з ключами, чекаючи.',
    },
  ],
  fight: [
    {
      pos: 'v',
      translation: 'боротися',
      exEn: 'She fought hard to keep her small business alive.',
      exUa: 'Вона наполегливо боролася, щоб зберегти свій малий бізнес.',
    },
    {
      pos: 'noun',
      translation: 'бійка',
      exEn: 'A fight broke out between two fans after the match.',
      exUa: 'Після матчу між двома вболівальниками спалахнула бійка.',
    },
  ],
  fillet: [
    {
      pos: 'noun',
      translation: 'філе',
      exEn: 'She ordered a grilled salmon fillet for dinner.',
      exUa: 'Вона замовила на вечерю філе лосося на грилі.',
    },
    {
      pos: 'v',
      translation: 'нарізати на філе',
      exEn: 'The chef filleted the fish quickly and skilfully.',
      exUa: 'Шеф-кухар швидко і вправно нарізав рибу на філе.',
    },
  ],
  film: [
    {
      pos: 'v',
      translation: 'знімати',
      exEn: 'They filmed the entire wedding from start to finish.',
      exUa: 'Вони зняли все весілля від початку до кінця.',
    },
    {
      pos: 'noun',
      translation: 'фільм',
      exEn: 'The new film received excellent reviews from critics.',
      exUa: 'Новий фільм отримав відмінні відгуки критиків.',
    },
  ],
  fire: [
    {
      pos: 'noun',
      translation: 'вогонь, пожежа',
      exEn: 'Firefighters battled the fire for nearly six hours.',
      exUa: 'Пожежники боролися з вогнем майже шість годин.',
    },
    {
      pos: 'v',
      translation: 'звільняти',
      exEn: 'The manager had to fire two employees due to budget cuts.',
      exUa: 'Менеджеру довелося звільнити двох працівників через скорочення бюджету.',
    },
  ],
  fit: [
    {
      pos: 'v',
      translation: 'пристосовуватися',
      exEn: 'It took her a while to fit into the new school.',
      exUa: 'Їй знадобився час, щоб пристосуватися до нової школи.',
    },
    {
      pos: 'adj',
      translation: 'придатний',
      exEn: 'He was declared fit to return to work after the injury.',
      exUa: 'Його визнали придатним повернутися до роботи після травми.',
    },
  ],
  flake: [
    {
      pos: 'noun',
      translation: 'пластівець',
      exEn: 'She added a few flakes of sea salt on top of the dish.',
      exUa: 'Вона додала кілька пластівців морської солі зверху на страву.',
    },
    {
      pos: 'v',
      translation: 'лускатися',
      exEn: 'The old paint began to flake off the wall.',
      exUa: 'Стара фарба почала лущитися зі стіни.',
    },
  ],
  flame: [
    {
      pos: 'noun',
      translation: "полум'я",
      exEn: 'A single candle flame flickered in the dark room.',
      exUa: "Одне полум'я свічки мерехтіло в темній кімнаті.",
    },
    {
      pos: 'v',
      translation: 'горіти',
      exEn: 'The campfire flamed brightly against the night sky.',
      exUa: 'Багаття яскраво горіло на тлі нічного неба.',
    },
  ],
  flap: [
    {
      pos: 'noun',
      translation: 'клапан',
      exEn: 'She closed the flap of the envelope carefully.',
      exUa: 'Вона обережно закрила клапан конверта.',
    },
    {
      pos: 'v',
      translation: 'хлопати',
      exEn: 'The bird flapped its wings frantically before taking off.',
      exUa: 'Птах шалено хлопав крилами, перш ніж злетіти.',
    },
  ],
  flare: [
    {
      pos: 'noun',
      translation: 'спалах',
      exEn: 'A flare was fired into the sky to signal their position.',
      exUa: "У небо був випущений спалах, щоб позначити їхнє місцезнаходження.",
    },
    {
      pos: 'v',
      translation: 'спалахувати',
      exEn: 'Tensions flared between the two neighbouring countries.',
      exUa: 'Напруга спалахнула між двома сусідніми країнами.',
    },
  ],
  flash: [
    {
      pos: 'noun',
      translation: 'спалах',
      exEn: 'A bright flash of lightning lit up the dark sky.',
      exUa: 'Яскравий спалах блискавки освітив темне небо.',
    },
    {
      pos: 'v',
      translation: 'блискати',
      exEn: 'Warning lights flashed at the railway crossing.',
      exUa: 'На залізничному переїзді блискали попереджувальні вогні.',
    },
  ],
  flood: [
    {
      pos: 'noun',
      translation: 'повінь',
      exEn: 'The flood destroyed dozens of homes along the river.',
      exUa: 'Повінь знищила десятки будинків уздовж річки.',
    },
    {
      pos: 'v',
      translation: 'затопити',
      exEn: 'Heavy rain flooded the basement overnight.',
      exUa: 'Сильний дощ затопив підвал за ніч.',
    },
  ],
  flop: [
    {
      pos: 'noun',
      translation: 'провал',
      exEn: 'The movie was a huge flop at the box office.',
      exUa: 'Фільм став величезним провалом у прокаті.',
    },
    {
      pos: 'v',
      translation: 'звалюватися',
      exEn: 'He flopped onto the sofa, exhausted after the long day.',
      exUa: 'Він звалився на диван, знесилений після довгого дня.',
    },
  ],
  flow: [
    {
      pos: 'noun',
      translation: 'потік',
      exEn: "The river's flow was much stronger after the heavy rain.",
      exUa: 'Потік річки був набагато сильнішим після сильного дощу.',
    },
    {
      pos: 'v',
      translation: 'текти',
      exEn: 'The river flows gently through the quiet valley.',
      exUa: 'Річка тихо тече через спокійну долину.',
    },
  ],
  foam: [
    {
      pos: 'noun',
      translation: 'піна',
      exEn: 'White foam covered the surface of the waves.',
      exUa: 'Біла піна вкривала поверхню хвиль.',
    },
    {
      pos: 'v',
      translation: 'пінитися',
      exEn: 'The soap foamed generously in her hands.',
      exUa: 'Мило рясно пінилося в її руках.',
    },
  ],
  foil: [
    {
      pos: 'v',
      translation: 'розстроювати',
      exEn: 'Police managed to foil the robbery before it happened.',
      exUa: 'Поліції вдалося розстроїти пограбування до того, як воно сталося.',
    },
    {
      pos: 'noun',
      translation: 'фольга',
      exEn: 'She wrapped the sandwich in aluminium foil.',
      exUa: 'Вона загорнула бутерброд у алюмінієву фольгу.',
    },
  ],
  fool: [
    {
      pos: 'noun',
      translation: 'дурень',
      exEn: 'Only a fool would ignore such an obvious warning.',
      exUa: 'Лише дурень проігнорував би таке очевидне попередження.',
    },
    {
      pos: 'v',
      translation: 'дурити',
      exEn: 'He tried to fool everyone with his fake accent.',
      exUa: 'Він намагався всіх обдурити своїм фальшивим акцентом.',
    },
  ],
  force: [
    {
      pos: 'noun',
      translation: 'сила',
      exEn: 'The force of the explosion shattered every window nearby.',
      exUa: 'Сила вибуху розбила всі вікна поблизу.',
    },
    {
      pos: 'v',
      translation: 'змушувати',
      exEn: 'Nobody can force you to sign the contract.',
      exUa: 'Ніхто не може змусити тебе підписати контракт.',
    },
  ],
  forecast: [
    {
      pos: 'noun',
      translation: 'прогноз',
      exEn: 'The weather forecast predicts heavy rain tomorrow.',
      exUa: 'Прогноз погоди передбачає сильний дощ завтра.',
    },
    {
      pos: 'v',
      translation: 'передбачати',
      exEn: 'Analysts forecast strong economic growth next year.',
      exUa: 'Аналітики передбачають сильне економічне зростання наступного року.',
    },
  ],
  form: [
    {
      pos: 'noun',
      translation: 'форма',
      exEn: 'Please fill out this form before your appointment.',
      exUa: 'Будь ласка, заповніть цю форму перед прийомом.',
    },
    {
      pos: 'v',
      translation: 'утворювати',
      exEn: 'Ice forms on the lake when the temperature drops.',
      exUa: 'Лід утворюється на озері, коли температура падає.',
    },
  ],
  forward: [
    {
      pos: 'adv',
      translation: 'вперед',
      exEn: 'She took a step forward to greet the guests.',
      exUa: 'Вона зробила крок вперед, щоб привітати гостей.',
    },
    {
      pos: 'v',
      translation: 'подати',
      exEn: 'Could you forward this email to the whole team?',
      exUa: 'Чи не могли б ви переслати цей лист усій команді?',
    },
  ],
  foster: [
    {
      pos: 'v',
      translation: 'сприяти',
      exEn: 'Good teachers foster curiosity and independent thinking.',
      exUa: 'Хороші вчителі сприяють допитливості та самостійному мисленню.',
    },
    {
      pos: 'adj',
      translation: 'прийомний',
      exEn: 'The couple decided to become foster parents.',
      exUa: 'Подружжя вирішило стати прийомними батьками.',
    },
  ],
  fray: [
    {
      pos: 'noun',
      translation: 'бійка',
      exEn: 'He jumped straight into the fray to help his friend.',
      exUa: 'Він одразу кинувся в бійку, щоб допомогти другові.',
    },
    {
      pos: 'v',
      translation: 'потріпуватися',
      exEn: 'The edges of the old rope had begun to fray.',
      exUa: 'Краї старої мотузки почали потріпуватися.',
    },
  ],
  frequent: [
    {
      pos: 'adj',
      translation: 'частий',
      exEn: 'Frequent breaks help you stay focused during long study sessions.',
      exUa: 'Часті перерви допомагають зберігати концентрацію під час довгих занять.',
    },
    {
      pos: 'v',
      translation: 'відвідувати',
      exEn: 'Tourists frequent this small café every summer.',
      exUa: 'Туристи відвідують це маленьке кафе щоліта.',
    },
  ],
  fuel: [
    {
      pos: 'noun',
      translation: 'паливо',
      exEn: 'The car ran out of fuel halfway through the trip.',
      exUa: 'У машині закінчилося паливо на півдорозі.',
    },
    {
      pos: 'v',
      translation: 'підживлювати',
      exEn: 'Rising prices fuelled public anger across the country.',
      exUa: 'Зростання цін підживлювало суспільний гнів по всій країні.',
    },
  ],
  function: [
    {
      pos: 'v',
      translation: 'функціонувати',
      exEn: 'The old machine still functions perfectly after decades of use.',
      exUa: 'Стара машина досі бездоганно функціонує після десятиліть використання.',
    },
    {
      pos: 'noun',
      translation: 'функція',
      exEn: 'The main function of the heart is to pump blood.',
      exUa: 'Головна функція серця — перекачувати кров.',
    },
  ],
  fund: [
    {
      pos: 'noun',
      translation: 'фонд',
      exEn: 'The charity relies on a fund set up by donors.',
      exUa: 'Благодійна організація покладається на фонд, створений донорами.',
    },
    {
      pos: 'v',
      translation: 'фінансувати',
      exEn: 'The government agreed to fund the new hospital.',
      exUa: 'Уряд погодився фінансувати нову лікарню.',
    },
  ],
  funnel: [
    {
      pos: 'noun',
      translation: 'лійка',
      exEn: 'She used a small funnel to pour the oil into the bottle.',
      exUa: 'Вона використала маленьку лійку, щоб налити олію в пляшку.',
    },
    {
      pos: 'v',
      translation: 'спрямовувати',
      exEn: 'The charity funnels donations directly to families in need.',
      exUa: 'Благодійна організація спрямовує пожертви безпосередньо сім\'ям, які потребують допомоги.',
    },
  ],
  fuse: [
    {
      pos: 'noun',
      translation: 'запобіжник',
      exEn: 'A blown fuse caused the lights to go out.',
      exUa: 'Перегорілий запобіжник спричинив вимкнення світла.',
    },
    {
      pos: 'v',
      translation: 'зливати',
      exEn: 'The two departments were fused into a single team.',
      exUa: 'Два відділи були злиті в одну команду.',
    },
  ],
  fuss: [
    {
      pos: 'noun',
      translation: 'метушня',
      exEn: 'There was a lot of fuss over such a small mistake.',
      exUa: 'Було багато метушні через таку дрібну помилку.',
    },
    {
      pos: 'v',
      translation: 'метушитися',
      exEn: 'Stop fussing and just sit down and relax.',
      exUa: 'Перестань метушитися і просто сядь і розслабся.',
    },
  ],
  gamble: [
    {
      pos: 'noun',
      translation: 'азартна гра',
      exEn: "Investing all his savings was a huge gamble.",
      exUa: 'Вкласти всі свої заощадження було величезною азартною грою.',
    },
    {
      pos: 'v',
      translation: 'ризикувати',
      exEn: 'She gambled on a risky new business idea.',
      exUa: 'Вона ризикнула, взявшись за нову ризиковану бізнес-ідею.',
    },
  ],
  garden: [
    {
      pos: 'noun',
      translation: 'сад',
      exEn: 'They spent the afternoon relaxing in the garden.',
      exUa: 'Вони провели день, відпочиваючи в саду.',
    },
    {
      pos: 'v',
      translation: 'городити',
      exEn: 'He loves to garden on weekends, growing his own vegetables.',
      exUa: 'Він любить городити на вихідних, вирощуючи власні овочі.',
    },
  ],
  gaze: [
    {
      pos: 'v',
      translation: 'пильно дивитися',
      exEn: 'She gazed out of the window at the falling snow.',
      exUa: 'Вона пильно дивилася у вікно на падаючий сніг.',
    },
    {
      pos: 'noun',
      translation: 'погляд',
      exEn: 'His gaze lingered on the old photograph for a long time.',
      exUa: 'Його погляд надовго затримався на старій фотографії.',
    },
  ],
  gesture: [
    {
      pos: 'noun',
      translation: 'жест',
      exEn: 'He made a small gesture of thanks with his hand.',
      exUa: 'Він зробив невеликий жест подяки рукою.',
    },
    {
      pos: 'v',
      translation: 'робити жест',
      exEn: 'She gestured toward the empty chair, inviting him to sit.',
      exUa: 'Вона зробила жест у бік порожнього стільця, запрошуючи його сісти.',
    },
  ],
  'get around': [
    {
      pos: 'v',
      translation: "обходити, обʼїжджати",
      exEn: 'They found a clever way to get around the new regulations.',
      exUa: 'Вони знайшли хитрий спосіб обійти нові правила.',
    },
    {
      pos: 'v',
      translation: 'поширюватись (про новини)',
      exEn: 'News of the merger quickly got around the office.',
      exUa: 'Новини про злиття швидко поширилися по офісу.',
    },
  ],
  girl: [
    {
      pos: 'noun',
      translation: 'дівчинка',
      exEn: 'The little girl was playing happily in the park.',
      exUa: 'Маленька дівчинка щасливо гралася в парку.',
    },
    {
      pos: 'noun',
      translation: 'дівчина',
      exEn: 'The girl next door just started university this year.',
      exUa: "Дівчина із сусіднього будинку цього року щойно почала навчання в університеті.",
    },
  ],
  girlfriend: [
    {
      pos: 'noun',
      translation: 'подруга',
      exEn: 'She met her best girlfriend for coffee on Sunday.',
      exUa: 'Вона зустрілася зі своєю найкращою подругою на каву в неділю.',
    },
    {
      pos: 'noun',
      translation: 'дівчина',
      exEn: 'He introduced his girlfriend to his parents for the first time.',
      exUa: 'Він вперше познайомив свою дівчину з батьками.',
    },
  ],
  'give way': [
    {
      pos: 'v',
      translation: 'поступатися',
      exEn: 'Eventually, his stubbornness gave way to common sense.',
      exUa: 'Врешті-решт його впертість поступилася здоровому глузду.',
    },
    {
      pos: 'v',
      translation: 'провалюватись',
      exEn: 'The old bridge suddenly gave way under the heavy truck.',
      exUa: 'Старий міст раптово провалився під важкою вантажівкою.',
    },
  ],
  glance: [
    {
      pos: 'v',
      translation: 'кинути погляд',
      exEn: 'She glanced at her watch during the meeting.',
      exUa: 'Вона кинула погляд на годинник під час зустрічі.',
    },
    {
      pos: 'noun',
      translation: 'погляд',
      exEn: 'One glance at his face told her something was wrong.',
      exUa: 'Один погляд на його обличчя підказав їй, що щось не так.',
    },
  ],
  glaze: [
    {
      pos: 'v',
      translation: "покривати глазур'ю",
      exEn: 'The baker glazed the donuts with sweet icing.',
      exUa: "Пекар покрив пончики солодкою глазур'ю.",
    },
    {
      pos: 'noun',
      translation: 'скляний погляд',
      exEn: 'He stared ahead with a glaze in his tired eyes.',
      exUa: 'Він дивився вперед зі скляним поглядом у втомлених очах.',
    },
  ],
  gleam: [
    {
      pos: 'noun',
      translation: 'блиск',
      exEn: 'There was a mischievous gleam in her eyes.',
      exUa: 'У її очах був пустотливий блиск.',
    },
    {
      pos: 'v',
      translation: 'сяяти',
      exEn: 'The polished silver gleamed under the bright lights.',
      exUa: 'Відполіроване срібло сяяло під яскравим світлом.',
    },
  ],
  glimpse: [
    {
      pos: 'noun',
      translation: 'короткий погляд',
      exEn: 'She got only a brief glimpse of the rare bird before it flew away.',
      exUa: 'Вона встигла кинути лише короткий погляд на рідкісного птаха, перш ніж він відлетів.',
    },
    {
      pos: 'v',
      translation: 'побачити мигцем',
      exEn: 'I glimpsed her face for just a second in the crowd.',
      exUa: 'Я побачив мигцем її обличчя лише на секунду в натовпі.',
    },
  ],
  glitter: [
    {
      pos: 'noun',
      translation: 'блиск',
      exEn: 'The snow had a magical glitter under the streetlights.',
      exUa: 'Сніг мав чарівний блиск під вуличними ліхтарями.',
    },
    {
      pos: 'v',
      translation: 'блищати',
      exEn: 'Her earrings glittered every time she moved her head.',
      exUa: 'Її сережки блищали щоразу, коли вона рухала головою.',
    },
  ],
  glow: [
    {
      pos: 'v',
      translation: 'сяяти',
      exEn: 'The embers continued to glow long after the fire went out.',
      exUa: 'Жарини продовжували сяяти ще довго після того, як вогонь погас.',
    },
    {
      pos: 'noun',
      translation: 'світіння',
      exEn: 'The soft glow of the lamp filled the room.',
      exUa: 'М\'яке світіння лампи наповнювало кімнату.',
    },
  ],
  glue: [
    {
      pos: 'noun',
      translation: 'клей',
      exEn: 'She used strong glue to fix the broken vase.',
      exUa: 'Вона використала міцний клей, щоб полагодити розбиту вазу.',
    },
    {
      pos: 'v',
      translation: 'клеїти',
      exEn: 'He glued the pieces of the model together carefully.',
      exUa: 'Він обережно склеїв частини моделі докупи.',
    },
  ],
  gorge: [
    {
      pos: 'noun',
      translation: 'ущелина',
      exEn: 'The river carved a deep gorge through the mountains.',
      exUa: 'Річка прорізала глибоку ущелину крізь гори.',
    },
    {
      pos: 'v',
      translation: 'наїдатися',
      exEn: 'They gorged themselves on cake at the birthday party.',
      exUa: 'Вони наїлися торта на дні народження.',
    },
  ],
  gossip: [
    {
      pos: 'noun',
      translation: 'плітки',
      exEn: 'She refused to listen to office gossip.',
      exUa: 'Вона відмовлялася слухати офісні плітки.',
    },
    {
      pos: 'v',
      translation: 'пліткувати',
      exEn: 'The neighbours love to gossip about everyone on the street.',
      exUa: 'Сусіди люблять пліткувати про всіх на вулиці.',
    },
  ],
  gouge: [
    {
      pos: 'v',
      translation: 'вирізати, видовбувати',
      exEn: 'He accidentally gouged a hole in the wooden table.',
      exUa: "Він випадково видовбав дірку в дерев'яному столі.",
    },
    {
      pos: 'v',
      translation: 'здирати ціну',
      exEn: 'The vendor was accused of gouging tourists on prices.',
      exUa: 'Продавця звинуватили в тому, що він здирав ціну з туристів.',
    },
  ],
  gourmet: [
    {
      pos: 'noun',
      translation: 'гурман',
      exEn: 'As a true gourmet, he only eats at the finest restaurants.',
      exUa: 'Як справжній гурман, він їсть лише в найкращих ресторанах.',
    },
    {
      pos: 'adj',
      translation: 'вишуканий',
      exEn: 'The hotel offers a gourmet breakfast every morning.',
      exUa: 'Готель щоранку пропонує вишуканий сніданок.',
    },
  ],
  graduate: [
    {
      pos: 'noun',
      translation: 'випускник',
      exEn: 'She is a recent graduate of a prestigious law school.',
      exUa: 'Вона нещодавня випускниця престижної юридичної школи.',
    },
    {
      pos: 'v',
      translation: 'закінчувати',
      exEn: 'He plans to graduate from university next spring.',
      exUa: 'Він планує закінчити університет наступної весни.',
    },
  ],
  grate: [
    {
      pos: 'noun',
      translation: 'решітка',
      exEn: 'Warm air rose from the metal grate in the floor.',
      exUa: 'Тепле повітря піднімалося з металевої решітки в підлозі.',
    },
    {
      pos: 'v',
      translation: 'натирати',
      exEn: 'She grated fresh cheese over the hot pasta.',
      exUa: 'Вона натерла свіжий сир на гарячу пасту.',
    },
  ],
  grease: [
    {
      pos: 'noun',
      translation: 'мастило',
      exEn: 'The mechanic applied grease to the squeaky hinge.',
      exUa: 'Механік наніс мастило на скрипучу петлю.',
    },
    {
      pos: 'v',
      translation: 'змащувати',
      exEn: 'You should grease the pan before adding the batter.',
      exUa: 'Тобі слід змастити сковороду, перш ніж додати тісто.',
    },
  ],
  grill: [
    {
      pos: 'noun',
      translation: 'гриль',
      exEn: 'They bought a new grill for the summer barbecues.',
      exUa: 'Вони купили новий гриль для літніх барбекю.',
    },
    {
      pos: 'v',
      translation: 'смажити на грилі',
      exEn: 'Dad loves to grill vegetables alongside the meat.',
      exUa: "Тато любить смажити овочі на грилі разом з м'ясом.",
    },
  ],
  grin: [
    {
      pos: 'v',
      translation: 'усміхатися',
      exEn: 'She grinned widely when she saw the surprise party.',
      exUa: 'Вона широко усміхнулася, побачивши вечірку-сюрприз.',
    },
    {
      pos: 'noun',
      translation: 'усмішка',
      exEn: 'He had a mischievous grin on his face.',
      exUa: 'На його обличчі була пустотлива усмішка.',
    },
  ],
  grip: [
    {
      pos: 'noun',
      translation: 'хватка',
      exEn: 'She kept a firm grip on the railing as she climbed.',
      exUa: 'Вона міцно тримала поручень, піднімаючись.',
    },
    {
      pos: 'v',
      translation: 'стиснути',
      exEn: 'He gripped the steering wheel tightly during the storm.',
      exUa: 'Він міцно стиснув кермо під час шторму.',
    },
  ],
  groan: [
    {
      pos: 'v',
      translation: 'стогнати',
      exEn: 'He groaned in pain after twisting his ankle.',
      exUa: 'Він застогнав від болю, підвернувши ногу.',
    },
    {
      pos: 'noun',
      translation: 'стогін',
      exEn: 'A low groan escaped her lips as she stood up.',
      exUa: 'Тихий стогін вирвався з її вуст, коли вона підвелася.',
    },
  ],
  groom: [
    {
      pos: 'noun',
      translation: 'наречений',
      exEn: 'The groom looked nervous as he waited at the altar.',
      exUa: 'Наречений виглядав нервовим, чекаючи біля вівтаря.',
    },
    {
      pos: 'v',
      translation: 'доглядати',
      exEn: 'She grooms her horse every morning before riding.',
      exUa: 'Вона доглядає свого коня щоранку перед їздою.',
    },
  ],
  guarantee: [
    {
      pos: 'noun',
      translation: 'гарантія',
      exEn: 'The washing machine comes with a two-year guarantee.',
      exUa: 'Пральна машина постачається з дворічною гарантією.',
    },
    {
      pos: 'v',
      translation: 'гарантувати',
      exEn: "The company guarantees a full refund if you're not satisfied.",
      exUa: 'Компанія гарантує повне повернення коштів, якщо ви не задоволені.',
    },
  ],
  guard: [
    {
      pos: 'v',
      translation: 'охороняти',
      exEn: 'Two soldiers guarded the entrance to the palace.',
      exUa: 'Двоє солдатів охороняли вхід до палацу.',
    },
    {
      pos: 'noun',
      translation: 'варта',
      exEn: 'The night guard checked every door before locking up.',
      exUa: 'Нічна варта перевірила кожні двері перед тим, як зачинити.',
    },
  ],
  guide: [
    {
      pos: 'noun',
      translation: 'гід',
      exEn: 'She hired a local guide to show them around the ruins.',
      exUa: 'Вона найняла місцевого гіда, щоб показати їм руїни.',
    },
    {
      pos: 'v',
      translation: 'направляти',
      exEn: 'The teacher gently guided the students through the difficult exercise.',
      exUa: 'Вчителька м\'яко направляла учнів через складну вправу.',
    },
  ],
  guilty: [
    {
      pos: 'adj',
      translation: 'винний',
      exEn: 'The jury found him guilty of all charges.',
      exUa: 'Присяжні визнали його винним за всіма пунктами звинувачення.',
    },
    {
      pos: 'adj',
      translation: 'відчуває провину',
      exEn: "She felt guilty for forgetting her friend's birthday.",
      exUa: "Вона відчувала провину за те, що забула про день народження подруги.",
    },
  ],
  gull: [
    {
      pos: 'noun',
      translation: 'чайка',
      exEn: 'Seagulls circled noisily above the fishing boats.',
      exUa: 'Чайки галасливо кружляли над рибальськими човнами.',
    },
    {
      pos: 'v',
      translation: 'обманути',
      exEn: 'The scammer gulled several elderly victims out of their savings.',
      exUa: 'Шахрай обманом позбавив кількох літніх людей їхніх заощаджень.',
    },
  ],
  gulp: [
    {
      pos: 'v',
      translation: 'ковтати',
      exEn: 'He gulped his coffee before rushing out the door.',
      exUa: 'Він проковтнув каву, перш ніж вибігти за двері.',
    },
    {
      pos: 'noun',
      translation: 'великий ковток',
      exEn: 'She took a big gulp of water after the run.',
      exUa: 'Вона зробила великий ковток води після пробіжки.',
    },
  ],
  hail: [
    {
      pos: 'v',
      translation: 'вітати',
      exEn: 'Critics hailed the film as a masterpiece.',
      exUa: 'Критики вітали фільм як шедевр.',
    },
    {
      pos: 'noun',
      translation: 'град',
      exEn: 'Heavy hail damaged several cars parked outside.',
      exUa: 'Сильний град пошкодив кілька автомобілів, припаркованих надворі.',
    },
  ],
  halt: [
    {
      pos: 'v',
      translation: 'зупинятися',
      exEn: 'The train halted suddenly between two stations.',
      exUa: 'Потяг раптово зупинився між двома станціями.',
    },
    {
      pos: 'noun',
      translation: 'зупинка',
      exEn: 'Production came to a complete halt after the accident.',
      exUa: 'Виробництво повністю зупинилося після аварії.',
    },
  ],
  hammer: [
    {
      pos: 'noun',
      translation: 'молоток',
      exEn: 'He used a hammer to fix the loose shelf.',
      exUa: 'Він скористався молотком, щоб полагодити хитку полицю.',
    },
    {
      pos: 'v',
      translation: 'забивати',
      exEn: 'She hammered the nail into the wall carefully.',
      exUa: 'Вона обережно забила цвях у стіну.',
    },
  ],
  hamper: [
    {
      pos: 'v',
      translation: 'заважати',
      exEn: 'Heavy fog hampered visibility on the motorway.',
      exUa: 'Сильний туман заважав видимості на автомагістралі.',
    },
    {
      pos: 'noun',
      translation: 'кошик',
      exEn: 'They packed a picnic hamper full of sandwiches and fruit.',
      exUa: 'Вони спакували кошик для пікніка, повний бутербродів і фруктів.',
    },
  ],
  handle: [
    {
      pos: 'noun',
      translation: 'рукоятка',
      exEn: 'The knife has a wooden handle.',
      exUa: 'Ніж має дерев\'яну рукоятку.',
    },
    {
      pos: 'v',
      translation: 'справлятися',
      exEn: 'She handled the difficult situation with great calm.',
      exUa: 'Вона справилася зі складною ситуацією з великим спокоєм.',
    },
  ],
  harangue: [
    {
      pos: 'noun',
      translation: 'гнівна промова',
      exEn: "The coach launched into a harangue about the team's poor effort.",
      exUa: 'Тренер розпочав гнівну промову про слабкі старання команди.',
    },
    {
      pos: 'v',
      translation: 'виголошувати гнівно',
      exEn: 'He harangued the crowd for nearly twenty minutes.',
      exUa: 'Він гнівно виголошував промову перед натовпом майже двадцять хвилин.',
    },
  ],
  'harbor (harbour)': [
    {
      pos: 'noun',
      translation: 'гавань',
      exEn: 'Ships took shelter in the harbor during the storm.',
      exUa: 'Кораблі знайшли прихисток у гавані під час шторму.',
    },
    {
      pos: 'v',
      translation: 'плекати',
      exEn: 'She had long harboured a secret dream of becoming a writer.',
      exUa: 'Вона довго плекала таємну мрію стати письменницею.',
    },
  ],
  harbour: [
    {
      pos: 'v',
      translation: 'плекати (почуття)',
      exEn: 'He harboured a deep resentment toward his former boss.',
      exUa: 'Він плекав глибоку образу до свого колишнього начальника.',
    },
    {
      pos: 'noun',
      translation: 'гавань',
      exEn: 'Fishing boats returned safely to the harbour before the storm hit.',
      exUa: 'Рибальські човни безпечно повернулися в гавань до того, як вдарив шторм.',
    },
  ],
  harm: [
    {
      pos: 'noun',
      translation: 'шкода',
      exEn: 'The chemicals could cause serious harm to the environment.',
      exUa: 'Ці хімікати можуть завдати серйозної шкоди довкіллю.',
    },
    {
      pos: 'v',
      translation: 'шкодити',
      exEn: 'Smoking harms not only the smoker but people around them.',
      exUa: 'Куріння шкодить не лише курцю, а й людям навколо.',
    },
  ],
  harvest: [
    {
      pos: 'noun',
      translation: 'врожай',
      exEn: 'Farmers celebrated an unusually large harvest this year.',
      exUa: 'Фермери відзначили незвично великий врожай цього року.',
    },
    {
      pos: 'v',
      translation: 'збирати',
      exEn: 'Workers harvest the grapes early in the morning.',
      exUa: 'Робітники збирають виноград рано вранці.',
    },
  ],
  hatch: [
    {
      pos: 'noun',
      translation: 'люк',
      exEn: "The submarine's hatch opened with a loud hiss.",
      exUa: 'Люк підводного човна відкрився з гучним шипінням.',
    },
    {
      pos: 'v',
      translation: 'вилуплюватися',
      exEn: 'The chicks hatched from their eggs after three weeks.',
      exUa: 'Курчата вилупилися з яєць через три тижні.',
    },
  ],
  hawk: [
    {
      pos: 'noun',
      translation: 'яструб',
      exEn: 'A hawk circled high above the open field.',
      exUa: 'Яструб кружляв високо над відкритим полем.',
    },
    {
      pos: 'v',
      translation: 'продавати',
      exEn: 'Vendors hawked souvenirs to tourists near the monument.',
      exUa: "Продавці продавали сувеніри туристам біля пам'ятника.",
    },
  ],
  headroom: [
    {
      pos: 'noun',
      translation: 'вільний простір (над головою)',
      exEn: 'The attic has very little headroom near the walls.',
      exUa: 'На горищі дуже мало вільного простору над головою біля стін.',
    },
    {
      pos: 'noun',
      translation: 'запас маневру',
      exEn: 'The company has some financial headroom to invest in new projects.',
      exUa: 'Компанія має певний запас маневру для інвестування в нові проєкти.',
    },
  ],
  heap: [
    {
      pos: 'noun',
      translation: 'купа',
      exEn: 'Dirty clothes were piled in a heap on the floor.',
      exUa: 'Брудний одяг лежав купою на підлозі.',
    },
    {
      pos: 'v',
      translation: 'звалювати',
      exEn: 'She heaped mashed potatoes onto his plate.',
      exUa: 'Вона наклала йому повну тарілку картопляного пюре.',
    },
  ],
  heat: [
    {
      pos: 'noun',
      translation: 'тепло',
      exEn: 'She turned up the heat because the room was too cold.',
      exUa: 'Вона зробила тепло сильнішим, бо в кімнаті було занадто холодно.',
    },
    {
      pos: 'v',
      translation: 'нагрівати',
      exEn: 'Heat the oil in the pan before adding the onions.',
      exUa: 'Нагрій олію на сковороді, перш ніж додати цибулю.',
    },
  ],
  hedge: [
    {
      pos: 'noun',
      translation: 'живопліт',
      exEn: 'A tall hedge separated the two gardens.',
      exUa: 'Високий живопліт розділяв два сади.',
    },
    {
      pos: 'v',
      translation: 'страхуватися',
      exEn: 'Investors hedge against risk by diversifying their portfolio.',
      exUa: 'Інвестори страхуються від ризику, диверсифікуючи свій портфель.',
    },
  ],
  help: [
    {
      pos: 'v',
      translation: 'допомагати',
      exEn: 'Could you help me carry these boxes upstairs?',
      exUa: 'Чи не міг би ти допомогти мені занести ці коробки нагору?',
    },
    {
      pos: 'noun',
      translation: 'допомога',
      exEn: 'She needed some help with her homework.',
      exUa: 'Їй потрібна була якась допомога з домашнім завданням.',
    },
  ],
  herald: [
    {
      pos: 'noun',
      translation: 'вісник',
      exEn: 'The first robin is often seen as a herald of spring.',
      exUa: 'Перший вільшанка часто вважається вісником весни.',
    },
    {
      pos: 'v',
      translation: 'сповіщати',
      exEn: 'Dark clouds heralded the coming storm.',
      exUa: 'Темні хмари сповіщали про наближення шторму.',
    },
  ],
  herd: [
    {
      pos: 'noun',
      translation: 'стадо',
      exEn: 'A herd of cattle grazed peacefully in the meadow.',
      exUa: 'Стадо худоби мирно паслося на луці.',
    },
    {
      pos: 'v',
      translation: 'пасти',
      exEn: 'Shepherds herded the sheep down from the hills.',
      exUa: 'Пастухи спускали овець з пагорбів.',
    },
  ],
  heresy: [
    {
      pos: 'noun',
      translation: 'єресь',
      exEn: "The scholar's ideas were condemned as heresy by the church.",
      exUa: 'Ідеї вченого були засуджені церквою як єресь.',
    },
    {
      pos: 'noun',
      translation: 'відступництво від загальноприйнятих поглядів',
      exEn: 'Questioning the theory was considered heresy among his colleagues.',
      exUa: 'Сумнів у теорії вважався відступництвом від загальноприйнятих поглядів серед його колег.',
    },
  ],
  'high heels': [
    {
      pos: 'noun',
      translation: 'підбори',
      exEn: 'She struggled to walk in such high heels.',
      exUa: 'Їй було важко ходити на таких високих підборах.',
    },
    {
      pos: 'noun',
      translation: 'туфлі на підборах',
      exEn: 'She packed a pair of high heels for the wedding.',
      exUa: 'Вона взяла з собою туфлі на підборах на весілля.',
    },
  ],
  highlight: [
    {
      pos: 'v',
      translation: 'виділяти',
      exEn: 'She highlighted the most important sentences in yellow.',
      exUa: 'Вона виділила найважливіші речення жовтим кольором.',
    },
    {
      pos: 'noun',
      translation: 'найвища точка',
      exEn: 'Meeting the author was the highlight of the whole trip.',
      exUa: 'Зустріч з автором була найвищою точкою всієї поїздки.',
    },
  ],
  hike: [
    {
      pos: 'noun',
      translation: 'похід',
      exEn: 'They went on a long hike through the mountains.',
      exUa: 'Вони вирушили в довгий похід через гори.',
    },
    {
      pos: 'v',
      translation: 'йти в похід',
      exEn: 'We plan to hike to the summit before sunrise.',
      exUa: 'Ми плануємо йти в похід до вершини до світанку.',
    },
  ],
  hinge: [
    {
      pos: 'noun',
      translation: 'завіса',
      exEn: 'The door hinge squeaked every time it opened.',
      exUa: 'Дверна завіса скрипіла щоразу, коли двері відчинялися.',
    },
    {
      pos: 'v',
      translation: 'залежати від',
      exEn: 'Their whole plan hinges on the weather being good.',
      exUa: 'Весь їхній план залежить від того, чи буде гарна погода.',
    },
  ],
  hint: [
    {
      pos: 'noun',
      translation: 'натяк',
      exEn: 'She dropped a hint about her upcoming birthday.',
      exUa: "Вона зробила натяк про своє наближення дня народження.",
    },
    {
      pos: 'v',
      translation: 'натякати',
      exEn: 'He hinted that he might be leaving the company soon.',
      exUa: 'Він натякнув, що незабаром може піти з компанії.',
    },
  ],
  hoard: [
    {
      pos: 'v',
      translation: 'накопичувати',
      exEn: 'During the crisis, some people began to hoard food and supplies.',
      exUa: 'Під час кризи деякі люди почали накопичувати їжу та припаси.',
    },
    {
      pos: 'noun',
      translation: 'запас',
      exEn: 'They found a hidden hoard of old coins in the attic.',
      exUa: 'Вони знайшли прихований запас старих монет на горищі.',
    },
  ],
  hog: [
    {
      pos: 'noun',
      translation: 'великий кабан',
      exEn: 'The farmer kept several hogs in the barn.',
      exUa: 'Фермер тримав кількох великих кабанів у сараї.',
    },
    {
      pos: 'v',
      translation: 'займати',
      exEn: 'He always hogs the remote control during movie night.',
      exUa: 'Він завжди займає пульт під час перегляду фільмів.',
    },
  ],
  holiday: [
    {
      pos: 'noun',
      translation: 'свято',
      exEn: 'Christmas is a major holiday celebrated worldwide.',
      exUa: 'Різдво — велике свято, яке відзначають у всьому світі.',
    },
    {
      pos: 'noun',
      translation: 'відпустка',
      exEn: 'They booked a two-week holiday in Spain.',
      exUa: 'Вони забронювали двотижневу відпустку в Іспанії.',
    },
  ],
  'honor (honour)': [
    {
      pos: 'noun',
      translation: 'честь',
      exEn: 'She accepted the award with great honour and gratitude.',
      exUa: 'Вона прийняла нагороду з великою честю та вдячністю.',
    },
    {
      pos: 'v',
      translation: 'шанувати',
      exEn: 'The city built a statue to honour the fallen soldiers.',
      exUa: 'Місто спорудило статую, щоб вшанувати загиблих солдатів.',
    },
  ],
  hook: [
    {
      pos: 'noun',
      translation: 'гачок',
      exEn: 'She hung her coat on the hook behind the door.',
      exUa: 'Вона повісила пальто на гачок за дверима.',
    },
    {
      pos: 'v',
      translation: 'зачіпляти',
      exEn: 'The fisherman hooked a large trout in the river.',
      exUa: 'Рибалка зачепив на гачок велику форель у річці.',
    },
  ],
  hop: [
    {
      pos: 'v',
      translation: 'стрибати',
      exEn: 'The rabbit hopped quickly across the garden.',
      exUa: 'Кролик швидко стрибав через сад.',
    },
    {
      pos: 'noun',
      translation: 'стрибок',
      exEn: "It's just a short hop from here to the next town.",
      exUa: 'Звідси до наступного міста лише короткий стрибок.',
    },
  ],
  hope: [
    {
      pos: 'v',
      translation: 'сподіватися',
      exEn: 'I hope you have a wonderful trip.',
      exUa: 'Сподіваюся, у тебе буде чудова поїздка.',
    },
    {
      pos: 'noun',
      translation: 'надія',
      exEn: 'She never lost hope during the difficult years.',
      exUa: 'Вона ніколи не втрачала надії протягом важких років.',
    },
  ],
  hose: [
    {
      pos: 'noun',
      translation: 'шланг',
      exEn: 'He used the garden hose to wash the car.',
      exUa: 'Він скористався садовим шлангом, щоб помити машину.',
    },
    {
      pos: 'v',
      translation: 'поливати',
      exEn: 'She hosed down the muddy patio after the party.',
      exUa: 'Вона полила з шланга брудну терасу після вечірки.',
    },
  ],
  host: [
    {
      pos: 'noun',
      translation: 'господар',
      exEn: 'The host greeted every guest warmly at the door.',
      exUa: 'Господар тепло вітав кожного гостя біля дверей.',
    },
    {
      pos: 'v',
      translation: 'приймати',
      exEn: 'The city will host the international conference next year.',
      exUa: 'Місто прийматиме міжнародну конференцію наступного року.',
    },
  ],
  hound: [
    {
      pos: 'noun',
      translation: 'мисливський пес',
      exEn: "The hunter's hound tracked the scent through the forest.",
      exUa: 'Мисливський пес мисливця йшов слідом крізь ліс.',
    },
    {
      pos: 'v',
      translation: 'переслідувати',
      exEn: 'Reporters hounded the celebrity for weeks after the scandal.',
      exUa: 'Репортери переслідували знаменитість тижнями після скандалу.',
    },
  ],
  howl: [
    {
      pos: 'v',
      translation: 'вити',
      exEn: 'Wolves howled in the distance throughout the night.',
      exUa: 'Вовки вили вдалині всю ніч.',
    },
    {
      pos: 'noun',
      translation: 'завивання',
      exEn: 'The howl of the wind kept them awake all night.',
      exUa: 'Завивання вітру не давало їм заснути всю ніч.',
    },
  ],
  hug: [
    {
      pos: 'v',
      translation: 'обіймати',
      exEn: 'She hugged her grandmother tightly at the airport.',
      exUa: 'Вона міцно обійняла бабусю в аеропорту.',
    },
    {
      pos: 'noun',
      translation: 'обійми',
      exEn: 'He gave his son a warm hug before leaving.',
      exUa: "Він тепло обійняв сина перед від'їздом.",
    },
  ],
  hull: [
    {
      pos: 'noun',
      translation: 'корпус',
      exEn: "The ship's hull was damaged by the rocks.",
      exUa: 'Корпус корабля був пошкоджений об каміння.',
    },
    {
      pos: 'v',
      translation: 'лущити',
      exEn: 'She hulled the strawberries before making the jam.',
      exUa: 'Вона очистила полуницю, перш ніж робити варення.',
    },
  ],
  humble: [
    {
      pos: 'adj',
      translation: 'скромний',
      exEn: 'Despite his fame, he remained genuinely humble.',
      exUa: 'Попри свою славу, він залишався щиро скромним.',
    },
    {
      pos: 'v',
      translation: 'приземляти',
      exEn: 'The unexpected defeat humbled the arrogant champion.',
      exUa: 'Несподівана поразка приземлила зарозумілого чемпіона.',
    },
  ],
  hump: [
    {
      pos: 'noun',
      translation: 'горб',
      exEn: "The camel's hump stores fat, not water.",
      exUa: 'Горб верблюда зберігає жир, а не воду.',
    },
    {
      pos: 'v',
      translation: 'здолати',
      exEn: 'It took real effort to hump the heavy suitcase over the hill.',
      exUa: 'Знадобилися справжні зусилля, щоб здолати пагорб з важкою валізою.',
    },
  ],
  hunch: [
    {
      pos: 'noun',
      translation: 'передчуття',
      exEn: 'She had a strong hunch that something was wrong.',
      exUa: 'У неї було сильне передчуття, що щось не так.',
    },
    {
      pos: 'v',
      translation: 'горбитися',
      exEn: 'He hunched over his desk, exhausted after the long shift.',
      exUa: 'Він горбився за столом, виснажений після довгої зміни.',
    },
  ],
  hunt: [
    {
      pos: 'noun',
      translation: 'полювання',
      exEn: 'The hunt lasted several hours before they found the deer.',
      exUa: 'Полювання тривало кілька годин, перш ніж вони знайшли оленя.',
    },
    {
      pos: 'v',
      translation: 'полювати',
      exEn: 'Owls hunt mice and small rodents at night.',
      exUa: 'Сови полюють на мишей та дрібних гризунів вночі.',
    },
  ],
  hurry: [
    {
      pos: 'v',
      translation: 'поспішати',
      exEn: 'She hurried to catch the last bus home.',
      exUa: 'Вона поспішала, щоб встигнути на останній автобус додому.',
    },
    {
      pos: 'noun',
      translation: 'поспіх',
      exEn: 'In her hurry, she forgot her keys on the table.',
      exUa: 'У поспіху вона забула ключі на столі.',
    },
  ],
  hush: [
    {
      pos: 'noun',
      translation: 'тиша',
      exEn: 'A sudden hush fell over the crowd as the speaker approached.',
      exUa: 'Раптова тиша запанувала над натовпом, коли промовець наблизився.',
    },
    {
      pos: 'v',
      translation: 'замовчати',
      exEn: 'The company tried to hush up the scandal.',
      exUa: 'Компанія намагалася замовчати скандал.',
    },
  ],
  hustle: [
    {
      pos: 'noun',
      translation: 'метушня',
      exEn: 'She loves the hustle and energy of the big city.',
      exUa: 'Їй подобається метушня та енергія великого міста.',
    },
    {
      pos: 'v',
      translation: 'поспішати',
      exEn: 'They hustled through the airport to catch their connecting flight.',
      exUa: 'Вони поспішали через аеропорт, щоб встигнути на пересадку.',
    },
  ],
  hybrid: [
    {
      pos: 'noun',
      translation: 'гібрид',
      exEn: 'The new car is a hybrid powered by petrol and electricity.',
      exUa: 'Нова машина — гібрид, що працює на бензині та електриці.',
    },
    {
      pos: 'adj',
      translation: 'гібридний',
      exEn: 'The company adopted a hybrid work model after the pandemic.',
      exUa: 'Компанія запровадила гібридну модель роботи після пандемії.',
    },
  ],
  immune: [
    {
      pos: 'adj',
      translation: 'несприйнятливий',
      exEn: 'No one is completely immune to stress.',
      exUa: 'Ніхто не є повністю несприйнятливим до стресу.',
    },
    {
      pos: 'adj',
      translation: 'імунний',
      exEn: 'A healthy diet strengthens your immune system.',
      exUa: 'Здорове харчування зміцнює імунну систему.',
    },
  ],
  import: [
    {
      pos: 'noun',
      translation: 'імпорт',
      exEn: "The country's economy depends heavily on the import of oil.",
      exUa: 'Економіка країни значною мірою залежить від імпорту нафти.',
    },
    {
      pos: 'v',
      translation: 'імпортувати',
      exEn: 'The company imports coffee beans from South America.',
      exUa: 'Компанія імпортує кавові зерна з Південної Америки.',
    },
  ],
  imprint: [
    {
      pos: 'noun',
      translation: 'відбиток',
      exEn: 'The fossil preserved a clear imprint of an ancient leaf.',
      exUa: 'Скам\'янілість зберегла чіткий відбиток стародавнього листка.',
    },
    {
      pos: 'v',
      translation: 'залишати слід',
      exEn: 'Her kindness imprinted itself on everyone she met.',
      exUa: 'Її доброта залишала слід у кожному, кого вона зустрічала.',
    },
  ],
  inch: [
    {
      pos: 'noun',
      translation: 'дюйм',
      exEn: 'The screen measures six inches diagonally.',
      exUa: 'Екран має шість дюймів по діагоналі.',
    },
    {
      pos: 'v',
      translation: 'повільно рухатися',
      exEn: 'Traffic inched forward slowly during rush hour.',
      exUa: 'Рух повільно просувався вперед у годину пік.',
    },
  ],
  incline: [
    {
      pos: 'noun',
      translation: 'схил',
      exEn: 'The path followed a gentle incline up the hill.',
      exUa: 'Стежка йшла пологим схилом угору.',
    },
    {
      pos: 'v',
      translation: 'схиляти',
      exEn: 'Her calm arguments inclined him to agree.',
      exUa: 'Її спокійні аргументи схилили його погодитися.',
    },
  ],
  increase: [
    {
      pos: 'v',
      translation: 'збільшувати',
      exEn: 'The government decided to increase the minimum wage.',
      exUa: 'Уряд вирішив збільшити мінімальну заробітну плату.',
    },
    {
      pos: 'noun',
      translation: 'зростання',
      exEn: 'There was a sharp increase in tourism this summer.',
      exUa: 'Цього літа відбулося різке зростання туризму.',
    },
  ],
  inertia: [
    {
      pos: 'noun',
      translation: 'інерція',
      exEn: 'The car continued moving forward due to inertia.',
      exUa: 'Автомобіль продовжував рухатися вперед через інерцію.',
    },
    {
      pos: 'noun',
      translation: 'небажання діяти',
      exEn: 'Pure inertia kept him in the same job for twenty years.',
      exUa: 'Просте небажання діяти утримувало його на тій самій роботі двадцять років.',
    },
  ],
  influence: [
    {
      pos: 'noun',
      translation: 'вплив',
      exEn: 'Her parents had a huge influence on her career choice.',
      exUa: 'Її батьки мали величезний вплив на вибір кар\'єри.',
    },
    {
      pos: 'v',
      translation: 'впливати',
      exEn: 'Advertising can strongly influence what people buy.',
      exUa: 'Реклама може сильно впливати на те, що купують люди.',
    },
  ],
  input: [
    {
      pos: 'noun',
      translation: 'внесок',
      exEn: 'We value your input on this important decision.',
      exUa: 'Ми цінуємо ваш внесок у це важливе рішення.',
    },
    {
      pos: 'v',
      translation: 'вводити',
      exEn: 'Please input your password to continue.',
      exUa: 'Будь ласка, введіть свій пароль, щоб продовжити.',
    },
  ],
  instruction: [
    {
      pos: 'noun',
      translation: 'інструкція',
      exEn: 'Please read the instructions carefully before assembling the furniture.',
      exUa: 'Будь ласка, уважно прочитайте інструкцію, перш ніж збирати меблі.',
    },
    {
      pos: 'noun',
      translation: 'навчання',
      exEn: 'The school offers instruction in three foreign languages.',
      exUa: 'Школа пропонує навчання трьома іноземними мовами.',
    },
  ],
  instrumental: [
    {
      pos: 'adj',
      translation: 'ключовий, вирішальний',
      exEn: 'She was instrumental in organising the charity event.',
      exUa: 'Вона відіграла ключову роль в організації благодійного заходу.',
    },
    {
      pos: 'adj',
      translation: 'інструментальний',
      exEn: 'The album features several instrumental tracks without vocals.',
      exUa: 'Альбом містить кілька інструментальних треків без вокалу.',
    },
  ],
  insult: [
    {
      pos: 'noun',
      translation: 'образа',
      exEn: 'He took her comment as a personal insult.',
      exUa: 'Він сприйняв її коментар як особисту образу.',
    },
    {
      pos: 'v',
      translation: 'ображати',
      exEn: "She didn't mean to insult anyone with her joke.",
      exUa: 'Вона не мала на меті нікого образити своїм жартом.',
    },
  ],
  interest: [
    {
      pos: 'noun',
      translation: 'інтерес',
      exEn: 'She showed great interest in ancient history.',
      exUa: 'Вона виявила великий інтерес до стародавньої історії.',
    },
    {
      pos: 'v',
      translation: 'зацікавлювати',
      exEn: 'The story interested him from the very first page.',
      exUa: 'Історія зацікавила його з першої ж сторінки.',
    },
  ],
  intern: [
    {
      pos: 'noun',
      translation: 'стажер',
      exEn: 'The company hired a new intern for the summer.',
      exUa: 'Компанія найняла нового стажера на літо.',
    },
    {
      pos: 'v',
      translation: 'проходити стажування',
      exEn: 'She interned at a law firm during her final year.',
      exUa: 'Вона проходила стажування в юридичній фірмі на останньому курсі.',
    },
  ],
  interview: [
    {
      pos: 'noun',
      translation: 'співбесіда',
      exEn: 'She was nervous before her job interview.',
      exUa: 'Вона нервувала перед співбесідою на роботу.',
    },
    {
      pos: 'noun',
      translation: "інтерв'ю",
      exEn: 'The journalist conducted an interview with the mayor.',
      exUa: "Журналіст провів інтерв'ю з мером.",
    },
  ],
  intrigue: [
    {
      pos: 'noun',
      translation: 'інтрига',
      exEn: 'Political intrigue surrounded the royal court.',
      exUa: 'Політична інтрига оточувала королівський двір.',
    },
    {
      pos: 'v',
      translation: 'цікавити',
      exEn: 'The mysterious painting intrigued every visitor to the museum.',
      exUa: 'Загадкова картина цікавила кожного відвідувача музею.',
    },
  ],
  issue: [
    {
      pos: 'noun',
      translation: 'проблема, питання',
      exEn: 'Pollution remains a serious issue in many big cities.',
      exUa: 'Забруднення залишається серйозною проблемою у багатьох великих містах.',
    },
    {
      pos: 'v',
      translation: 'видавати',
      exEn: 'The library issues new cards at the front desk.',
      exUa: 'Бібліотека видає нові картки на стійці реєстрації.',
    },
  ],
  itch: [
    {
      pos: 'v',
      translation: 'свербіти',
      exEn: 'Her skin began to itch after the mosquito bite.',
      exUa: 'Її шкіра почала свербіти після укусу комара.',
    },
    {
      pos: 'noun',
      translation: 'свербіж',
      exEn: 'The wool sweater caused an annoying itch.',
      exUa: 'Вовняний светр викликав неприємний свербіж.',
    },
  ],
  jab: [
    {
      pos: 'v',
      translation: 'колоти',
      exEn: 'The nurse gently jabbed the needle into his arm.',
      exUa: 'Медсестра обережно вколола голку в його руку.',
    },
    {
      pos: 'noun',
      translation: 'укол',
      exEn: 'The doctor gave her a flu jab before winter.',
      exUa: 'Лікар зробив їй укол від грипу перед зимою.',
    },
  ],
  jail: [
    {
      pos: 'noun',
      translation: "в'язниця",
      exEn: 'He spent five years in jail for the robbery.',
      exUa: "Він провів п'ять років у в'язниці за пограбування.",
    },
    {
      pos: 'v',
      translation: "ув'язнити",
      exEn: 'The court jailed him for fraud.',
      exUa: "Суд ув'язнив його за шахрайство.",
    },
  ],
  jamboree: [
    {
      pos: 'noun',
      translation: 'джамборі',
      exEn: 'Thousands of scouts attended the international jamboree.',
      exUa: 'Тисячі скаутів взяли участь у міжнародному джамборі.',
    },
    {
      pos: 'noun',
      translation: 'велике гучне святкування',
      exEn: 'The whole town turned the festival into a joyful jamboree.',
      exUa: 'Все місто перетворило фестиваль на велике гучне святкування.',
    },
  ],
  jar: [
    {
      pos: 'noun',
      translation: 'банка',
      exEn: 'She kept sugar in a glass jar on the shelf.',
      exUa: 'Вона тримала цукор у скляній банці на полиці.',
    },
    {
      pos: 'v',
      translation: 'дратувати',
      exEn: 'His constant complaining began to jar on her nerves.',
      exUa: 'Його постійні скарги почали дратувати їй нерви.',
    },
  ],
  jazzy: [
    {
      pos: 'adj',
      translation: 'яскравий, строкатий',
      exEn: 'She wore a jazzy shirt with bright patterns.',
      exUa: 'Вона вдягла яскраву строкату сорочку з яскравими візерунками.',
    },
    {
      pos: 'adj',
      translation: 'джазовий',
      exEn: 'The band played a jazzy version of the classic tune.',
      exUa: 'Гурт зіграв джазову версію класичної мелодії.',
    },
  ],
  jerk: [
    {
      pos: 'v',
      translation: 'смикати',
      exEn: 'He jerked the rope to test if it was secure.',
      exUa: 'Він смикнув мотузку, щоб перевірити, чи вона надійна.',
    },
    {
      pos: 'noun',
      translation: 'дурень',
      exEn: 'Everyone agreed that he had acted like a real jerk.',
      exUa: 'Усі погодилися, що він повівся як справжній дурень.',
    },
  ],
  jest: [
    {
      pos: 'v',
      translation: 'жартувати',
      exEn: 'He jested about retiring early, though he never meant it.',
      exUa: 'Він жартував про дострокову пенсію, хоча й не мав цього на увазі.',
    },
    {
      pos: 'noun',
      translation: 'жарт',
      exEn: 'It was said in jest, not meant to hurt anyone.',
      exUa: 'Це було сказано як жарт, без наміру когось образити.',
    },
  ],
  jingle: [
    {
      pos: 'v',
      translation: 'дзвеніти',
      exEn: 'The coins jingled loudly in his pocket.',
      exUa: 'Монети голосно дзвеніли в його кишені.',
    },
    {
      pos: 'noun',
      translation: 'рекламна мелодія',
      exEn: 'The catchy jingle played every time the advert came on.',
      exUa: 'Заразлива рекламна мелодія лунала щоразу, коли з\'являлася реклама.',
    },
  ],
  jinx: [
    {
      pos: 'v',
      translation: 'накликати нещастя',
      exEn: "Don't say that out loud, you'll jinx it!",
      exUa: 'Не кажи цього вголос, накличеш нещастя!',
    },
    {
      pos: 'noun',
      translation: 'невезіння',
      exEn: 'The team seemed to be under some kind of jinx this season.',
      exUa: 'Команда цього сезону, здавалося, перебувала під якимось невезінням.',
    },
  ],
  job: [
    {
      pos: 'noun',
      translation: 'робота',
      exEn: 'She finally found a job after months of searching.',
      exUa: 'Вона нарешті знайшла роботу після кількох місяців пошуків.',
    },
    {
      pos: 'noun',
      translation: 'посада',
      exEn: 'He was offered a senior job at the new company.',
      exUa: 'Йому запропонували керівну посаду в новій компанії.',
    },
  ],
  jolt: [
    {
      pos: 'noun',
      translation: 'поштовх',
      exEn: 'The sudden jolt of the train woke her up.',
      exUa: 'Раптовий поштовх потяга розбудив її.',
    },
    {
      pos: 'v',
      translation: 'різко рухатися',
      exEn: 'The car jolted forward when the light turned green.',
      exUa: 'Автомобіль різко рушив уперед, коли загорілося зелене світло.',
    },
  ],
  judge: [
    {
      pos: 'noun',
      translation: 'суддя',
      exEn: 'The judge sentenced him to five years in prison.',
      exUa: "Суддя присудив йому п'ять років ув'язнення.",
    },
    {
      pos: 'v',
      translation: 'судити',
      exEn: "Try not to judge people before you know their story.",
      exUa: 'Намагайся не судити людей, доки не знаєш їхньої історії.',
    },
  ],
  juggle: [
    {
      pos: 'v',
      translation: 'жонглювати',
      exEn: 'The street performer juggled five balls at once.',
      exUa: "Вуличний артист жонглював п'ятьма м'ячами одночасно.",
    },
    {
      pos: 'v',
      translation: 'поєднувати (кілька справ)',
      exEn: 'She juggles a full-time job and raising three children.',
      exUa: 'Вона поєднує роботу на повну ставку з вихованням трьох дітей.',
    },
  ],
  jump: [
    {
      pos: 'v',
      translation: 'стрибати',
      exEn: 'The children jumped happily on the trampoline.',
      exUa: 'Діти щасливо стрибали на батуті.',
    },
    {
      pos: 'noun',
      translation: 'стрибок',
      exEn: 'It was a huge jump in her career after the promotion.',
      exUa: "Це був величезний стрибок у її кар'єрі після підвищення.",
    },
  ],
  juncture: [
    {
      pos: 'noun',
      translation: 'момент, поворотний пункт',
      exEn: 'At this juncture, we need to make a final decision.',
      exUa: 'На цьому поворотному етапі нам потрібно ухвалити остаточне рішення.',
    },
    {
      pos: 'noun',
      translation: "з'єднання",
      exEn: 'Engineers reinforced the juncture between the two beams.',
      exUa: "Інженери зміцнили з'єднання між двома балками.",
    },
  ],
  juvenile: [
    {
      pos: 'adj',
      translation: 'юнацький',
      exEn: 'The court handled the case in a special juvenile division.',
      exUa: 'Суд розглядав справу в спеціальному юнацькому відділенні.',
    },
    {
      pos: 'adj',
      translation: 'неповнолітній',
      exEn: 'Juvenile offenders are treated differently from adults in court.',
      exUa: 'З неповнолітніми правопорушниками в суді поводяться інакше, ніж з дорослими.',
    },
  ],
  keynote: [
    {
      pos: 'noun',
      translation: 'основна тема',
      exEn: 'Innovation was the keynote of her entire presentation.',
      exUa: 'Інновація була основною темою всієї її презентації.',
    },
    {
      pos: 'noun',
      translation: 'головна доповідь',
      exEn: 'She delivered the keynote at the technology conference.',
      exUa: 'Вона виголосила головну доповідь на технологічній конференції.',
    },
  ],
  kick: [
    {
      pos: 'v',
      translation: 'бити ногою',
      exEn: 'He kicked the ball straight into the goal.',
      exUa: 'Він вдарив ногою по м\'ячу прямо у ворота.',
    },
    {
      pos: 'noun',
      translation: 'удар',
      exEn: 'The horse gave a sudden kick backward.',
      exUa: 'Кінь раптово вдарив ногою назад.',
    },
  ],
  'kick back': [
    {
      pos: 'v',
      translation: 'розслаблятися',
      exEn: 'On weekends, he prefers to kick back and watch movies.',
      exUa: 'На вихідних він віддає перевагу розслаблятися й дивитися фільми.',
    },
    {
      pos: 'noun',
      translation: 'відкат',
      exEn: 'The official was accused of accepting a kickback from the contractor.',
      exUa: 'Посадовця звинуватили в отриманні відкату від підрядника.',
    },
  ],
  'kick in': [
    {
      pos: 'v',
      translation: 'вступати в дію',
      exEn: 'The new tax rules kick in next January.',
      exUa: 'Нові податкові правила вступають в дію наступного січня.',
    },
    {
      pos: 'v',
      translation: 'спрацьовувати',
      exEn: 'The painkillers finally kicked in after twenty minutes.',
      exUa: 'Знеболювальні нарешті спрацювали через двадцять хвилин.',
    },
  ],
  kickback: [
    {
      pos: 'noun',
      translation: 'відкат, хабар',
      exEn: 'The contractor was accused of paying a kickback to win the deal.',
      exUa: 'Підрядника звинуватили у сплаті відкату, щоб отримати контракт.',
    },
    {
      pos: 'noun',
      translation: 'зворотна реакція',
      exEn: 'There was a strong kickback from the public against the new tax.',
      exUa: 'Була сильна зворотна реакція громадськості проти нового податку.',
    },
  ],
  kid: [
    {
      pos: 'noun',
      translation: 'дитина',
      exEn: 'The kid ran happily around the playground.',
      exUa: 'Дитина щасливо бігала по дитячому майданчику.',
    },
    {
      pos: 'v',
      translation: 'жартувати',
      exEn: "I'm just kidding, don't take it seriously.",
      exUa: 'Я просто жартую, не сприймай це серйозно.',
    },
  ],
  knock: [
    {
      pos: 'v',
      translation: 'стукати',
      exEn: 'She knocked gently on the door before entering.',
      exUa: 'Вона тихо постукала у двері, перш ніж увійти.',
    },
    {
      pos: 'noun',
      translation: 'вдар',
      exEn: 'He felt a sharp knock on the back of his head.',
      exUa: 'Він відчув різкий удар по потилиці.',
    },
  ],
  'knock off': [
    {
      pos: 'v',
      translation: 'знижувати ціну',
      exEn: 'The seller knocked off ten dollars from the original price.',
      exUa: 'Продавець знизив ціну на десять доларів від початкової.',
    },
    {
      pos: 'v',
      translation: 'звільнятися з роботи',
      exEn: 'We usually knock off work at five oclock on Fridays.',
      exUa: "У п'ятницю ми зазвичай звільняємося з роботи о п'ятій годині.",
    },
  ],
  knockout: [
    {
      pos: 'noun',
      translation: 'нокаут',
      exEn: 'The boxer won the match with a stunning knockout.',
      exUa: 'Боксер виграв поєдинок приголомшливим нокаутом.',
    },
    {
      pos: 'noun',
      translation: 'щось вражаюче приголомшливе',
      exEn: 'Her performance at the concert was an absolute knockout.',
      exUa: 'Її виступ на концерті був абсолютно приголомшливим.',
    },
  ],
  knot: [
    {
      pos: 'noun',
      translation: 'вузол',
      exEn: 'She tied a tight knot to secure the rope.',
      exUa: 'Вона зав\'язала тугий вузол, щоб закріпити мотузку.',
    },
    {
      pos: 'v',
      translation: "зав'язувати",
      exEn: 'He knotted his tie carefully before the interview.',
      exUa: "Він обережно зав'язав краватку перед співбесідою.",
    },
  ],
  lack: [
    {
      pos: 'noun',
      translation: 'брак',
      exEn: 'The project failed due to a lack of proper funding.',
      exUa: 'Проєкт провалився через брак належного фінансування.',
    },
    {
      pos: 'v',
      translation: 'бракувати',
      exEn: 'The plan lacked any clear direction from the start.',
      exUa: 'Плану з самого початку бракувало чіткого напрямку.',
    },
  ],
  lag: [
    {
      pos: 'v',
      translation: 'відставати',
      exEn: 'Sales in that region continued to lag behind the rest of the country.',
      exUa: 'Продажі в тому регіоні продовжували відставати від решти країни.',
    },
    {
      pos: 'noun',
      translation: 'затримка',
      exEn: 'There was a noticeable lag between the click and the response.',
      exUa: 'Була помітна затримка між клацанням і реакцією.',
    },
  ],
  lapdog: [
    {
      pos: 'noun',
      translation: 'підлабузник',
      exEn: 'Critics called the newspaper a lapdog of the government.',
      exUa: 'Критики назвали газету підлабузником уряду.',
    },
    {
      pos: 'noun',
      translation: 'кімнатна собачка',
      exEn: 'She carried her tiny lapdog everywhere she went.',
      exUa: 'Вона носила свою маленьку кімнатну собачку всюди, куди йшла.',
    },
  ],
  'lash (eyelash)': [
    {
      pos: 'noun',
      translation: 'вія',
      exEn: 'A speck of dust got caught in her eyelash.',
      exUa: 'Порошинка потрапила їй у вію.',
    },
    {
      pos: 'v',
      translation: 'хльостати',
      exEn: 'Heavy rain lashed the windows all through the night.',
      exUa: 'Сильний дощ хльостав по вікнах усю ніч.',
    },
  ],
  latch: [
    {
      pos: 'noun',
      translation: 'защіпка',
      exEn: 'She lifted the latch on the wooden gate.',
      exUa: 'Вона підняла защіпку на дерев\'яній хвіртці.',
    },
    {
      pos: 'v',
      translation: 'зачіплятися',
      exEn: 'The door latched shut with a soft click.',
      exUa: 'Двері зачепилися з тихим клацанням.',
    },
  ],
  latitude: [
    {
      pos: 'noun',
      translation: 'широта (географічна)',
      exEn: 'The city is located at a fairly high latitude.',
      exUa: 'Місто розташоване на досить високій широті.',
    },
    {
      pos: 'noun',
      translation: 'свобода дій',
      exEn: 'The manager gave her a great deal of latitude in decision-making.',
      exUa: 'Керівник надав їй велику свободу дій у прийнятті рішень.',
    },
  ],
  laugh: [
    {
      pos: 'v',
      translation: 'сміятися',
      exEn: 'The children laughed loudly at the funny clown.',
      exUa: 'Діти голосно сміялися з кумедного клоуна.',
    },
    {
      pos: 'noun',
      translation: 'сміх',
      exEn: 'Her laugh could be heard across the entire room.',
      exUa: 'Її сміх було чути через усю кімнату.',
    },
  ],
  launch: [
    {
      pos: 'v',
      translation: 'запускати',
      exEn: 'The company will launch its new product next month.',
      exUa: 'Компанія запустить свій новий продукт наступного місяця.',
    },
    {
      pos: 'noun',
      translation: 'початок',
      exEn: 'The launch of the campaign was delayed by two weeks.',
      exUa: 'Початок кампанії було відкладено на два тижні.',
    },
  ],
  layperson: [
    {
      pos: 'noun',
      translation: 'мирянин',
      exEn: 'The sermon was written to be understood by any layperson.',
      exUa: 'Проповідь була написана так, щоб її розумів будь-який мирянин.',
    },
    {
      pos: 'noun',
      translation: 'непрофесіонал, звичайна людина',
      exEn: 'The report was simplified for a layperson to understand.',
      exUa: 'Звіт спростили, щоб його зрозуміла звичайна людина.',
    },
  ],
  leak: [
    {
      pos: 'noun',
      translation: 'витік',
      exEn: 'The company investigated a serious data leak.',
      exUa: 'Компанія розслідувала серйозний витік даних.',
    },
    {
      pos: 'v',
      translation: 'протікати',
      exEn: 'The roof began to leak after the heavy storm.',
      exUa: 'Дах почав протікати після сильного шторму.',
    },
  ],
  lean: [
    {
      pos: 'v',
      translation: 'нахилятися',
      exEn: 'She leaned against the wall and waited for him.',
      exUa: 'Вона притулилася до стіни й чекала на нього.',
    },
    {
      pos: 'adj',
      translation: 'худий',
      exEn: 'The lean athlete moved gracefully across the field.',
      exUa: 'Худорлявий спортсмен грайливо рухався полем.',
    },
  ],
  'lean on': [
    {
      pos: 'v',
      translation: 'спиратися на',
      exEn: 'She learned to lean on her friends during difficult times.',
      exUa: 'Вона навчилася спиратися на друзів у важкі часи.',
    },
    {
      pos: 'v',
      translation: 'тиснути на',
      exEn: 'The manager leaned on the team to finish the project faster.',
      exUa: 'Керівник тиснув на команду, щоб та швидше завершила проєкт.',
    },
  ],
  leap: [
    {
      pos: 'v',
      translation: 'стрибати',
      exEn: 'The cat leapt gracefully onto the windowsill.',
      exUa: 'Кіт граційно стрибнув на підвіконня.',
    },
    {
      pos: 'noun',
      translation: 'стрибок',
      exEn: 'It was a huge leap forward for medical science.',
      exUa: 'Це був величезний стрибок вперед для медичної науки.',
    },
  ],
  lease: [
    {
      pos: 'noun',
      translation: 'оренда',
      exEn: 'They signed a two-year lease on the apartment.',
      exUa: 'Вони підписали дворічну оренду на квартиру.',
    },
    {
      pos: 'v',
      translation: 'здавати в оренду',
      exEn: 'The company leases office space to small businesses.',
      exUa: 'Компанія здає офісні приміщення в оренду малому бізнесу.',
    },
  ],
  lecture: [
    {
      pos: 'noun',
      translation: 'лекція',
      exEn: 'Students attended a fascinating lecture on ancient history.',
      exUa: 'Студенти відвідали захопливу лекцію з давньої історії.',
    },
    {
      pos: 'v',
      translation: 'читати лекцію',
      exEn: 'The professor lectures on economics twice a week.',
      exUa: 'Професор читає лекції з економіки двічі на тиждень.',
    },
  ],
  level: [
    {
      pos: 'noun',
      translation: 'рівень',
      exEn: 'Water levels rose sharply after the storm.',
      exUa: 'Рівень води різко піднявся після шторму.',
    },
    {
      pos: 'v',
      translation: 'вирівнювати',
      exEn: 'Workers levelled the ground before building the foundation.',
      exUa: 'Робітники вирівняли землю перед закладанням фундаменту.',
    },
  ],
  leverage: [
    {
      pos: 'noun',
      translation: 'важіль, вплив',
      exEn: 'The union used its leverage to negotiate better wages.',
      exUa: 'Профспілка використала свій важіль впливу, щоб домовитися про кращу зарплату.',
    },
    {
      pos: 'v',
      translation: 'використовувати',
      exEn: 'The company leveraged its brand to enter new markets.',
      exUa: 'Компанія використала свій бренд, щоб вийти на нові ринки.',
    },
  ],
  liability: [
    {
      pos: 'noun',
      translation: 'відповідальність',
      exEn: 'The company accepted full liability for the damage.',
      exUa: 'Компанія взяла на себе повну відповідальність за завдану шкоду.',
    },
    {
      pos: 'noun',
      translation: 'зобов\'язання',
      exEn: 'Unpaid debts are listed as liabilities on the balance sheet.',
      exUa: 'Несплачені борги вказуються як зобов\'язання в балансі.',
    },
  ],
  liberal: [
    {
      pos: 'adj',
      translation: 'ліберальний',
      exEn: 'She holds fairly liberal views on social issues.',
      exUa: 'Вона має досить ліберальні погляди на соціальні питання.',
    },
    {
      pos: 'noun',
      translation: 'ліберал',
      exEn: 'He has always identified himself as a liberal.',
      exUa: 'Він завжди ідентифікував себе як ліберала.',
    },
  ],
  lie: [
    {
      pos: 'v',
      translation: 'брехати',
      exEn: 'He lied about his age to get the job.',
      exUa: 'Він збрехав про свій вік, щоб отримати роботу.',
    },
    {
      pos: 'noun',
      translation: 'брехня',
      exEn: 'Everyone in the room knew it was a lie.',
      exUa: 'Усі в кімнаті знали, що це брехня.',
    },
  ],
  lift: [
    {
      pos: 'v',
      translation: 'піднімати',
      exEn: 'Could you help me lift this heavy box?',
      exUa: 'Чи не міг би ти допомогти мені підняти цю важку коробку?',
    },
    {
      pos: 'noun',
      translation: 'ліфт',
      exEn: 'They took the lift to the tenth floor.',
      exUa: 'Вони піднялися ліфтом на десятий поверх.',
    },
  ],
  'light (lit, lit)': [
    {
      pos: 'v',
      translation: 'запалювати',
      exEn: 'He lit the campfire just before it got dark.',
      exUa: 'Він запалив багаття якраз перед тим, як стемніло.',
    },
    {
      pos: 'noun',
      translation: 'світло',
      exEn: 'Please turn off the light before you leave the room.',
      exUa: 'Будь ласка, вимкни світло, перш ніж вийти з кімнати.',
    },
    {
      pos: 'adj',
      translation: 'легкий',
      exEn: 'This backpack feels surprisingly light for its size.',
      exUa: 'Цей рюкзак на диво легкий для свого розміру.',
    },
  ],
  like: [
    {
      pos: 'v',
      translation: 'подобатися',
      exEn: 'She likes reading mystery novels before bed.',
      exUa: 'Їй подобається читати детективи перед сном.',
    },
    {
      pos: 'adv',
      translation: 'як',
      exEn: 'He walked into the room like a man with no worries.',
      exUa: 'Він увійшов до кімнати, як людина без жодних турбот.',
    },
  ],
  limit: [
    {
      pos: 'v',
      translation: 'обмежувати',
      exEn: 'Doctors advise patients to limit their sugar intake.',
      exUa: 'Лікарі радять пацієнтам обмежувати споживання цукру.',
    },
    {
      pos: 'noun',
      translation: 'межа',
      exEn: 'There is a strict limit on how much luggage you can bring.',
      exUa: 'Існує чітка межа того, скільки багажу можна взяти.',
    },
  ],
  limp: [
    {
      pos: 'v',
      translation: 'кульгати',
      exEn: 'She limped slightly after the long hike.',
      exUa: 'Вона трохи кульгала після довгого походу.',
    },
    {
      pos: 'adv',
      translation: 'мляво',
      exEn: 'The wilted flowers hung limp in the vase.',
      exUa: 'Зів\'ялі квіти мляво звисали у вазі.',
    },
  ],
  list: [
    {
      pos: 'noun',
      translation: 'список',
      exEn: 'She made a shopping list before going to the store.',
      exUa: 'Вона склала список покупок перед походом у магазин.',
    },
    {
      pos: 'v',
      translation: 'перелічувати',
      exEn: 'The teacher listed the main causes of the war on the board.',
      exUa: 'Учитель перелічив головні причини війни на дошці.',
    },
  ],
  litter: [
    {
      pos: 'v',
      translation: 'сміттити',
      exEn: "Please don't litter in the park.",
      exUa: 'Будь ласка, не смітіть у парку.',
    },
    {
      pos: 'noun',
      translation: 'послід',
      exEn: 'Farmers use chicken litter as a natural fertiliser for their fields.',
      exUa: 'Фермери використовують курячий послід як натуральне добриво для полів.',
    },
  ],
  'live on': [
    {
      pos: 'v',
      translation: 'жити на (кошти)',
      exEn: 'The family had to live on a very tight budget.',
      exUa: 'Родині довелося жити на дуже обмежений бюджет.',
    },
    {
      pos: 'v',
      translation: 'продовжувати жити (про спогади)',
      exEn: 'Her memory will live on in the hearts of everyone who knew her.',
      exUa: 'Її пам\'ять продовжуватиме жити в серцях усіх, хто її знав.',
    },
  ],
  load: [
    {
      pos: 'v',
      translation: 'вантажити',
      exEn: 'Workers loaded boxes onto the truck all morning.',
      exUa: 'Робітники вантажили коробки на вантажівку цілий ранок.',
    },
    {
      pos: 'noun',
      translation: 'навантаження',
      exEn: 'The bridge was designed to carry a heavy load.',
      exUa: 'Міст спроєктований витримувати велике навантаження.',
    },
  ],
  loaf: [
    {
      pos: 'noun',
      translation: 'буханка',
      exEn: 'She bought a fresh loaf of bread from the bakery.',
      exUa: 'Вона купила свіжу буханку хліба в пекарні.',
    },
    {
      pos: 'v',
      translation: 'ледарювати',
      exEn: 'He spent the whole weekend loafing around the house.',
      exUa: 'Він провів усі вихідні, ледарюючи вдома.',
    },
  ],
  loan: [
    {
      pos: 'noun',
      translation: 'позика',
      exEn: 'They took out a loan to buy their first house.',
      exUa: 'Вони взяли позику, щоб купити свій перший будинок.',
    },
    {
      pos: 'v',
      translation: 'позичати',
      exEn: 'Could you loan me twenty dollars until Friday?',
      exUa: "Чи не міг би ти позичити мені двадцять доларів до п'ятниці?",
    },
  ],
  lobby: [
    {
      pos: 'noun',
      translation: 'вестибюль',
      exEn: 'Guests waited in the hotel lobby for their rooms to be ready.',
      exUa: 'Гості чекали у вестибюлі готелю, поки їхні номери будуть готові.',
    },
    {
      pos: 'v',
      translation: 'лобіювати',
      exEn: 'Environmental groups lobbied hard for the new law.',
      exUa: 'Екологічні групи наполегливо лобіювали новий закон.',
    },
  ],
  lock: [
    {
      pos: 'v',
      translation: 'замикати',
      exEn: 'Please lock the door before you leave.',
      exUa: 'Будь ласка, замкни двері, перш ніж вийти.',
    },
    {
      pos: 'noun',
      translation: 'замок',
      exEn: 'She changed the lock after losing her keys.',
      exUa: 'Вона поміняла замок після втрати ключів.',
    },
  ],
  'lock down': [
    {
      pos: 'v',
      translation: 'встановлювати суворий контроль',
      exEn: 'Authorities locked down the entire border area.',
      exUa: 'Влада встановила суворий контроль над усією прикордонною зоною.',
    },
    {
      pos: 'v',
      translation: 'блокувати',
      exEn: 'The prison was locked down after the incident.',
      exUa: 'В\'язницю заблокували після інциденту.',
    },
  ],
  lodge: [
    {
      pos: 'v',
      translation: 'подавати скаргу',
      exEn: 'She lodged a formal complaint with the manager.',
      exUa: 'Вона подала офіційну скаргу керівнику.',
    },
    {
      pos: 'noun',
      translation: 'притулок',
      exEn: 'They stayed at a small mountain lodge during the trip.',
      exUa: 'Під час подорожі вони зупинилися в маленькому гірському притулку.',
    },
  ],
  log: [
    {
      pos: 'noun',
      translation: 'колода',
      exEn: 'He chopped the fallen log into smaller pieces for firewood.',
      exUa: 'Він порубав повалену колоду на менші шматки для дров.',
    },
    {
      pos: 'v',
      translation: 'реєструвати',
      exEn: 'He logged all the daily expenses in a spreadsheet.',
      exUa: 'Він реєстрував усі щоденні витрати в таблиці.',
    },
  ],
  loom: [
    {
      pos: 'noun',
      translation: 'ткацький верстат',
      exEn: 'The old loom in the museum still worked perfectly.',
      exUa: 'Старий ткацький верстат у музеї досі працював бездоганно.',
    },
    {
      pos: 'v',
      translation: 'маячити',
      exEn: 'Dark clouds loomed on the horizon before the storm.',
      exUa: 'Темні хмари маячили на горизонті перед штормом.',
    },
  ],
  loot: [
    {
      pos: 'v',
      translation: 'пограбувати',
      exEn: 'Rioters looted several shops during the unrest.',
      exUa: 'Бунтівники пограбували кілька магазинів під час заворушень.',
    },
    {
      pos: 'noun',
      translation: 'здобич',
      exEn: 'The pirates divided their loot among the crew.',
      exUa: 'Пірати розділили здобич між командою.',
    },
  ],
  lounge: [
    {
      pos: 'noun',
      translation: 'вітальня',
      exEn: 'They relaxed together in the lounge after dinner.',
      exUa: 'Вони разом відпочивали у вітальні після вечері.',
    },
    {
      pos: 'v',
      translation: 'чекати',
      exEn: 'She sat in the lounge, waiting for her connecting flight to be called.',
      exUa: 'Вона сиділа в залі очікування, чекаючи виклику на пересадку.',
    },
  ],
  love: [
    {
      pos: 'v',
      translation: 'любити',
      exEn: 'She loves spending time with her family.',
      exUa: 'Вона любить проводити час зі своєю родиною.',
    },
    {
      pos: 'noun',
      translation: 'любов',
      exEn: 'Their love for each other grew stronger every year.',
      exUa: 'Їхня любов одне до одного з кожним роком ставала міцнішою.',
    },
  ],
  lower: [
    {
      pos: 'v',
      translation: 'знижувати',
      exEn: 'The store lowered its prices for the holiday season.',
      exUa: 'Магазин знизив ціни на святковий сезон.',
    },
    {
      pos: 'adj',
      translation: 'нижній',
      exEn: 'She lives on the lower floor of the building.',
      exUa: 'Вона живе на нижньому поверсі будівлі.',
    },
  ],
  lull: [
    {
      pos: 'noun',
      translation: 'затишшя',
      exEn: 'There was a brief lull in the fighting before dawn.',
      exUa: 'Перед світанком настало коротке затишшя в боях.',
    },
    {
      pos: 'v',
      translation: 'заколисувати',
      exEn: 'The gentle rocking lulled the baby to sleep.',
      exUa: 'Ніжне гойдання заколисало малюка.',
    },
  ],
  lumber: [
    {
      pos: 'noun',
      translation: 'деревина',
      exEn: 'The factory produces high-quality lumber for construction.',
      exUa: 'Завод виробляє високоякісну деревину для будівництва.',
    },
    {
      pos: 'v',
      translation: 'брести',
      exEn: 'The old bear lumbered slowly through the forest.',
      exUa: 'Старий ведмідь повільно брів через ліс.',
    },
  ],
  lunge: [
    {
      pos: 'v',
      translation: 'кидатися',
      exEn: 'The dog lunged forward suddenly when it spotted the squirrel.',
      exUa: 'Собака раптово кинувся вперед, помітивши білку.',
    },
    {
      pos: 'noun',
      translation: 'випад',
      exEn: 'The fencer made a quick lunge toward his opponent.',
      exUa: 'Фехтувальник зробив швидкий випад у бік суперника.',
    },
  ],
  lurch: [
    {
      pos: 'v',
      translation: 'хитатися',
      exEn: 'The ship lurched violently in the storm.',
      exUa: 'Корабель сильно хитався під час шторму.',
    },
    {
      pos: 'noun',
      translation: 'поштовх',
      exEn: 'The bus stopped with a sudden lurch.',
      exUa: 'Автобус зупинився з раптовим поштовхом.',
    },
  ],
  lure: [
    {
      pos: 'noun',
      translation: 'принада',
      exEn: 'The lure of easy money attracted many investors.',
      exUa: 'Принада легких грошей приваблювала багатьох інвесторів.',
    },
    {
      pos: 'v',
      translation: 'заманювати',
      exEn: 'The shop used discounts to lure more customers.',
      exUa: 'Магазин використовував знижки, щоб заманити більше клієнтів.',
    },
  ],
  malfunction: [
    {
      pos: 'noun',
      translation: 'несправність',
      exEn: 'A technical malfunction delayed the flight for hours.',
      exUa: 'Технічна несправність затримала рейс на кілька годин.',
    },
    {
      pos: 'v',
      translation: 'давати збій',
      exEn: 'The system malfunctioned during the live broadcast.',
      exUa: 'Система дала збій під час прямої трансляції.',
    },
  ],
  man: [
    {
      pos: 'noun',
      translation: 'чоловік',
      exEn: 'A tall man stood by the entrance.',
      exUa: 'Біля входу стояв високий чоловік.',
    },
    {
      pos: 'noun',
      translation: 'людина',
      exEn: 'Man has always been curious about the stars.',
      exUa: 'Людина завжди цікавилася зірками.',
    },
  ],
  maneuver: [
    {
      pos: 'noun',
      translation: 'маневр',
      exEn: 'The pilot performed a difficult maneuver to avoid the storm.',
      exUa: 'Пілот виконав складний маневр, щоб уникнути шторму.',
    },
    {
      pos: 'v',
      translation: 'маневрувати',
      exEn: 'She had to maneuver carefully between the parked cars.',
      exUa: 'Їй довелося обережно маневрувати між припаркованими автомобілями.',
    },
  ],
  manifest: [
    {
      pos: 'v',
      translation: 'виявляти',
      exEn: 'Her anxiety began to manifest as physical symptoms.',
      exUa: 'Її тривога почала виявлятися у вигляді фізичних симптомів.',
    },
    {
      pos: 'noun',
      translation: 'маніфест',
      exEn: 'The artist published a bold manifesto about modern art.',
      exUa: 'Митець опублікував сміливий маніфест про сучасне мистецтво.',
    },
  ],
  marinade: [
    {
      pos: 'noun',
      translation: 'маринад',
      exEn: 'She prepared a spicy marinade for the chicken.',
      exUa: 'Вона приготувала гострий маринад для курки.',
    },
    {
      pos: 'v',
      translation: 'маринувати',
      exEn: 'Marinate the meat overnight for the best flavour.',
      exUa: "Маринуй м'ясо всю ніч для найкращого смаку.",
    },
  ],
  marvel: [
    {
      pos: 'v',
      translation: 'дивуватися',
      exEn: 'Tourists marvelled at the ancient architecture.',
      exUa: 'Туристи дивувалися стародавній архітектурі.',
    },
    {
      pos: 'noun',
      translation: 'диво',
      exEn: 'The bridge is considered an engineering marvel.',
      exUa: 'Міст вважається інженерним дивом.',
    },
  ],
  mash: [
    {
      pos: 'v',
      translation: 'товкти',
      exEn: 'She mashed the potatoes with butter and milk.',
      exUa: "Вона розтовкла картоплю з маслом та молоком.",
    },
    {
      pos: 'noun',
      translation: 'каша',
      exEn: 'For breakfast, the farmer fed the pigs a warm mash.',
      exUa: 'На сніданок фермер годував свиней теплою кашею.',
    },
  ],
  mask: [
    {
      pos: 'noun',
      translation: 'маска',
      exEn: 'He wore a mask to the costume party.',
      exUa: 'Він одягнув маску на костюмовану вечірку.',
    },
    {
      pos: 'v',
      translation: 'маскувати',
      exEn: 'She tried to mask her disappointment with a smile.',
      exUa: 'Вона намагалася замаскувати своє розчарування усмішкою.',
    },
  ],
  master: [
    {
      pos: 'v',
      translation: 'опановувати',
      exEn: 'It takes years to master a musical instrument.',
      exUa: 'Потрібні роки, щоб опанувати музичний інструмент.',
    },
    {
      pos: 'noun',
      translation: 'майстер',
      exEn: 'He is a true master of his craft.',
      exUa: 'Він справжній майстер своєї справи.',
    },
  ],
  mate: [
    {
      pos: 'noun',
      translation: 'товариш',
      exEn: 'He met up with his old school mate for coffee.',
      exUa: 'Він зустрівся зі своїм старим шкільним товаришем на каву.',
    },
    {
      pos: 'v',
      translation: 'підходити',
      exEn: 'This connector is designed to mate perfectly with the corresponding socket.',
      exUa: 'Цей з\'єднувач розроблений так, щоб ідеально підходити до відповідного гнізда.',
    },
  ],
  matter: [
    {
      pos: 'v',
      translation: 'мати значення',
      exEn: 'Your opinion really matters to me.',
      exUa: 'Твоя думка справді має для мене значення.',
    },
    {
      pos: 'noun',
      translation: 'справа',
      exEn: 'This is a matter of great importance to the whole team.',
      exUa: 'Це справа великої важливості для всієї команди.',
    },
  ],
  mature: [
    {
      pos: 'adj',
      translation: 'дорослий',
      exEn: 'He seemed remarkably mature for his age.',
      exUa: 'Він здавався напрочуд дорослим як для свого віку.',
    },
    {
      pos: 'v',
      translation: 'дозрівати',
      exEn: 'The cheese needs several months to mature properly.',
      exUa: 'Сиру потрібно кілька місяців, щоб належно дозріти.',
    },
  ],
  measure: [
    {
      pos: 'v',
      translation: 'міряти',
      exEn: 'She measured the room before buying new furniture.',
      exUa: 'Вона виміряла кімнату перед купівлею нових меблів.',
    },
    {
      pos: 'noun',
      translation: 'захід',
      exEn: 'The government introduced new measures to fight inflation.',
      exUa: 'Уряд запровадив нові заходи для боротьби з інфляцією.',
    },
  ],
  meeting: [
    {
      pos: 'noun',
      translation: 'зустріч',
      exEn: 'They arranged a meeting to discuss the contract.',
      exUa: 'Вони домовилися про зустріч, щоб обговорити контракт.',
    },
    {
      pos: 'noun',
      translation: 'нарада',
      exEn: 'The manager called an urgent meeting with the whole department.',
      exUa: 'Керівник скликав термінову нараду з усім відділом.',
    },
  ],
  meltdown: [
    {
      pos: 'noun',
      translation: 'розплавлення ядра',
      exEn: 'Engineers worked to prevent a nuclear meltdown at the plant.',
      exUa: 'Інженери працювали, щоб запобігти розплавленню ядра на станції.',
    },
    {
      pos: 'noun',
      translation: 'повний крах',
      exEn: 'The country suffered a complete economic meltdown in the 1990s.',
      exUa: 'Країна пережила повний економічний крах у 1990-х.',
    },
    {
      pos: 'noun',
      translation: 'емоційний зрив',
      exEn: 'The toddler had a complete meltdown in the middle of the store.',
      exUa: 'У малюка стався справжній емоційний зрив посеред магазину.',
    },
  ],
  menace: [
    {
      pos: 'noun',
      translation: 'загроза',
      exEn: 'The wild dog was seen as a menace to the neighbourhood.',
      exUa: 'Дикого собаку вважали загрозою для району.',
    },
    {
      pos: 'v',
      translation: 'погрожувати',
      exEn: 'He menaced his neighbour with threats of violence.',
      exUa: 'Він погрожував сусідові насильством.',
    },
  ],
  mesh: [
    {
      pos: 'noun',
      translation: 'сітка',
      exEn: 'The wire mesh fence surrounded the entire garden.',
      exUa: 'Дротяна сітчаста огорожа оточувала весь сад.',
    },
    {
      pos: 'v',
      translation: 'зчіплюватися',
      exEn: 'The gears meshed smoothly together when the machine started.',
      exUa: 'Шестерні плавно зчепилися разом, коли машина запустилася.',
    },
  ],
  mess: [
    {
      pos: 'noun',
      translation: 'безлад',
      exEn: 'The kids left the kitchen in a complete mess.',
      exUa: 'Діти залишили кухню в повному безладі.',
    },
    {
      pos: 'v',
      translation: 'заплутати',
      exEn: 'His careless comment messed up the whole negotiation.',
      exUa: 'Його необережний коментар заплутав усі переговори.',
    },
  ],
  mince: [
    {
      pos: 'v',
      translation: 'рубати',
      exEn: 'She minced the garlic finely before adding it to the sauce.',
      exUa: 'Вона дрібно порубала часник, перш ніж додати його до соусу.',
    },
    {
      pos: 'noun',
      translation: 'фарш',
      exEn: 'The recipe calls for half a kilo of beef mince.',
      exUa: "Рецепт вимагає півкіло яловичого фаршу.",
    },
  ],
  mineral: [
    {
      pos: 'noun',
      translation: 'мінерал',
      exEn: 'The cave contains rare and valuable minerals.',
      exUa: 'Печера містить рідкісні та цінні мінерали.',
    },
    {
      pos: 'adj',
      translation: 'мінеральний',
      exEn: 'She drinks mineral water every morning.',
      exUa: "Вона щоранку п'є мінеральну воду.",
    },
  ],
  mistake: [
    {
      pos: 'noun',
      translation: 'помилка',
      exEn: "Forgetting the client's name was an embarrassing mistake.",
      exUa: 'Забути ім\'я клієнта було ганебною помилкою.',
    },
    {
      pos: 'v',
      translation: 'помилитися',
      exEn: "I think you've mistaken me for someone else.",
      exUa: 'Гадаю, ти помилився, прийнявши мене за когось іншого.',
    },
  ],
  mix: [
    {
      pos: 'v',
      translation: 'змішувати',
      exEn: 'Mix the flour and sugar together in a large bowl.',
      exUa: 'Змішай борошно та цукор у великій мисці.',
    },
    {
      pos: 'noun',
      translation: 'суміш',
      exEn: 'The cake mix just needs water and eggs.',
      exUa: 'Суміш для торта потребує лише води та яєць.',
    },
  ],
  moderate: [
    {
      pos: 'adj',
      translation: 'помірний',
      exEn: 'She took a moderate approach to the issue.',
      exUa: 'Вона обрала помірний підхід до питання.',
    },
    {
      pos: 'v',
      translation: 'помірковувати',
      exEn: 'She moderated between two extreme viewpoints before making her final decision.',
      exUa: 'Вона поміркувала над двома крайніми поглядами, перш ніж ухвалити остаточне рішення.',
    },
  ],
  'mold (mould)': [
    {
      pos: 'noun',
      translation: 'пліснява',
      exEn: 'Mold started growing on the old bread.',
      exUa: 'На старому хлібі почала рости пліснява.',
    },
    {
      pos: 'noun',
      translation: 'форма',
      exEn: 'The sculptor poured the plaster into a mold.',
      exUa: 'Скульптор залив гіпс у форму.',
    },
  ],
  mop: [
    {
      pos: 'noun',
      translation: 'швабра',
      exEn: 'She kept a mop and bucket in the closet.',
      exUa: 'Вона тримала швабру та відро в шафі.',
    },
    {
      pos: 'v',
      translation: 'мити підлогу',
      exEn: 'He mopped the kitchen floor after dinner.',
      exUa: 'Він помив підлогу на кухні після вечері.',
    },
  ],
  'mother-in-law': [
    {
      pos: 'noun',
      translation: 'теща',
      exEn: "His mother-in-law, his wife's mother, visits every Sunday.",
      exUa: 'Його теща, мати дружини, приходить у гості щонеділі.',
    },
    {
      pos: 'noun',
      translation: 'свекруха',
      exEn: "Her mother-in-law, her husband's mother, taught her the family recipe.",
      exUa: 'Її свекруха, мати чоловіка, навчила її сімейного рецепта.',
    },
  ],
  mould: [
    {
      pos: 'v',
      translation: 'формувати',
      exEn: 'Teachers help mould young minds from an early age.',
      exUa: 'Вчителі допомагають формувати молоді уми з раннього віку.',
    },
    {
      pos: 'noun',
      translation: 'пліснява',
      exEn: 'Damp walls often develop mould over time.',
      exUa: 'Вологі стіни з часом часто вкриваються пліснявою.',
    },
  ],
  mount: [
    {
      pos: 'v',
      translation: 'підійматися',
      exEn: 'Tension mounted as the deadline approached.',
      exUa: 'Напруга наростала в міру наближення дедлайну.',
    },
    {
      pos: 'noun',
      translation: 'гора',
      exEn: 'They set up camp at the foot of the mount.',
      exUa: 'Вони розбили табір біля підніжжя гори.',
    },
  ],
  muddle: [
    {
      pos: 'noun',
      translation: 'плутанина',
      exEn: 'The schedule was a complete muddle after the last-minute changes.',
      exUa: 'Розклад перетворився на повну плутанину після змін в останню хвилину.',
    },
    {
      pos: 'v',
      translation: 'заплутувати',
      exEn: 'Too much information only muddled her thinking.',
      exUa: 'Забагато інформації лише заплутало її думки.',
    },
  ],
  mug: [
    {
      pos: 'noun',
      translation: 'кружка',
      exEn: 'She poured hot coffee into her favourite mug.',
      exUa: 'Вона налила гарячу каву у свою улюблену кружку.',
    },
    {
      pos: 'v',
      translation: 'пограбувати',
      exEn: 'He was mugged on his way home from work.',
      exUa: 'Його пограбували дорогою додому з роботи.',
    },
  ],
  murder: [
    {
      pos: 'noun',
      translation: 'вбивство',
      exEn: 'The detective investigated the mysterious murder for months.',
      exUa: 'Детектив розслідував загадкове вбивство протягом кількох місяців.',
    },
    {
      pos: 'v',
      translation: 'вбивати',
      exEn: "The novel's villain murders three people before being caught.",
      exUa: 'Лиходій у романі вбиває трьох людей, перш ніж його спіймають.',
    },
  ],
  murmur: [
    {
      pos: 'v',
      translation: 'шепотіти',
      exEn: 'She murmured a quiet apology under her breath.',
      exUa: 'Вона прошепотіла тихе вибачення собі під ніс.',
    },
    {
      pos: 'noun',
      translation: 'шепіт',
      exEn: 'A low murmur spread through the crowd.',
      exUa: 'Тихий шепіт поширився натовпом.',
    },
  ],
  mush: [
    {
      pos: 'noun',
      translation: 'каша',
      exEn: 'The overcooked vegetables turned into a soft mush.',
      exUa: 'Переварені овочі перетворилися на м\'яку кашу.',
    },
    {
      pos: 'v',
      translation: 'розм\'якшувати',
      exEn: 'Constant rain mushed the ground into thick mud.',
      exUa: 'Постійний дощ розм\'якшив землю в густу грязюку.',
    },
  ],
  musical: [
    {
      pos: 'noun',
      translation: 'мюзикл',
      exEn: 'They went to see a famous musical on Broadway.',
      exUa: 'Вони пішли подивитися відомий мюзикл на Бродвеї.',
    },
    {
      pos: 'adj',
      translation: 'музичний',
      exEn: 'She has always had a strong musical talent.',
      exUa: 'Вона завжди мала сильний музичний талант.',
    },
  ],
  mute: [
    {
      pos: 'adj',
      translation: 'беззвучний',
      exEn: 'She kept her phone on mute during the meeting.',
      exUa: 'Вона тримала телефон у беззвучному режимі під час зустрічі.',
    },
    {
      pos: 'v',
      translation: 'заглушувати',
      exEn: 'He muted the television during the commercial break.',
      exUa: 'Він заглушив телевізор під час рекламної паузи.',
    },
  ],
  name: [
    {
      pos: 'noun',
      translation: "ім'я",
      exEn: 'Her name is written on the certificate.',
      exUa: "Її ім'я написано на сертифікаті.",
    },
    {
      pos: 'noun',
      translation: 'назва',
      exEn: 'The company changed its name after the merger.',
      exUa: 'Компанія змінила назву після злиття.',
    },
  ],
  nap: [
    {
      pos: 'v',
      translation: 'подрімати',
      exEn: 'She likes to nap for twenty minutes after lunch.',
      exUa: 'Вона любить подрімати двадцять хвилин після обіду.',
    },
    {
      pos: 'noun',
      translation: 'короткий сон',
      exEn: 'A short nap can improve your focus in the afternoon.',
      exUa: 'Короткий сон може покращити концентрацію вдень.',
    },
  ],
  need: [
    {
      pos: 'v',
      translation: 'потребувати',
      exEn: 'She needs more time to finish the report.',
      exUa: 'Їй потрібно більше часу, щоб завершити звіт.',
    },
    {
      pos: 'noun',
      translation: 'потреба',
      exEn: 'There is an urgent need for more volunteers.',
      exUa: 'Існує нагальна потреба в більшій кількості волонтерів.',
    },
  ],
  nest: [
    {
      pos: 'noun',
      translation: 'гніздо',
      exEn: 'The bird built its nest high in the tree.',
      exUa: 'Птах звив своє гніздо високо на дереві.',
    },
    {
      pos: 'v',
      translation: 'звивати гніздо',
      exEn: 'Robins usually nest in quiet, sheltered spots.',
      exUa: 'Вільшанки зазвичай звивають гніздо в тихих, захищених місцях.',
    },
  ],
  network: [
    {
      pos: 'noun',
      translation: 'мережа',
      exEn: 'The company built a strong network of suppliers.',
      exUa: 'Компанія побудувала міцну мережу постачальників.',
    },
    {
      pos: 'v',
      translation: 'налагоджувати контакти',
      exEn: 'She attended the conference mainly to network with other professionals.',
      exUa: 'Вона відвідала конференцію переважно, щоб налагодити контакти з іншими фахівцями.',
    },
  ],
  neurotic: [
    {
      pos: 'adj',
      translation: 'невротичний',
      exEn: 'He became increasingly neurotic about germs after the illness.',
      exUa: 'Він ставав дедалі більш невротичним щодо мікробів після хвороби.',
    },
    {
      pos: 'noun',
      translation: 'невротик',
      exEn: 'Her friends jokingly called her a neurotic about cleanliness.',
      exUa: 'Друзі жартома називали її невротиком через її потяг до чистоти.',
    },
  ],
  nobility: [
    {
      pos: 'noun',
      translation: 'шляхетність',
      exEn: 'He faced the tragedy with quiet nobility.',
      exUa: 'Він зустрів трагедію з тихою шляхетністю.',
    },
    {
      pos: 'noun',
      translation: 'дворянство',
      exEn: 'The French nobility lost much of its power after the revolution.',
      exUa: 'Французьке дворянство втратило значну частину влади після революції.',
    },
  ],
  nominal: [
    {
      pos: 'adj',
      translation: 'номінальний',
      exEn: 'He remains the nominal head of the company, though he rarely makes decisions.',
      exUa: 'Він залишається номінальним керівником компанії, хоча рідко ухвалює рішення.',
    },
    {
      pos: 'adj',
      translation: 'незначний',
      exEn: 'They charge only a nominal fee for the service.',
      exUa: 'Вони стягують лише незначну плату за послугу.',
    },
  ],
  notice: [
    {
      pos: 'v',
      translation: 'помічати',
      exEn: 'She noticed a small crack in the wall.',
      exUa: 'Вона помітила невелику тріщину в стіні.',
    },
    {
      pos: 'noun',
      translation: 'повідомлення',
      exEn: 'The tenants received a notice about the upcoming repairs.',
      exUa: 'Орендарі отримали повідомлення про майбутній ремонт.',
    },
  ],
  numb: [
    {
      pos: 'v',
      translation: 'заніміти',
      exEn: 'Cold weather quickly numbed his hands.',
      exUa: 'Холодна погода швидко заніміла його руки.',
    },
    {
      pos: 'adj',
      translation: 'онімілий',
      exEn: 'After the injection, her whole arm felt numb.',
      exUa: 'Після ін\'єкції вся рука здавалася онімілою.',
    },
  ],
  nurse: [
    {
      pos: 'noun',
      translation: 'медсестра',
      exEn: 'The kind nurse checked on every patient during the shift.',
      exUa: 'Добра медсестра перевіряла кожного пацієнта під час зміни.',
    },
    {
      pos: 'v',
      translation: 'доглядати',
      exEn: 'She nursed her sick grandmother back to health.',
      exUa: 'Вона доглядала за хворою бабусею, поки та не одужала.',
    },
  ],
  nurturing: [
    {
      pos: 'adj',
      translation: 'турботливий, виховуючий',
      exEn: 'She grew up in a warm and nurturing family.',
      exUa: 'Вона виросла в теплій і турботливій родині.',
    },
    {
      pos: 'noun',
      translation: 'виховання',
      exEn: "Good nurturing in early childhood shapes a person's whole life.",
      exUa: 'Хороше виховання в ранньому дитинстві формує все життя людини.',
    },
  ],
  obstruction: [
    {
      pos: 'noun',
      translation: 'перешкода, перепона',
      exEn: 'A fallen tree caused a major obstruction on the highway.',
      exUa: 'Повалене дерево спричинило серйозну перешкоду на трасі.',
    },
    {
      pos: 'noun',
      translation: 'обструкція',
      exEn: 'Opposition politicians were accused of obstruction in parliament.',
      exUa: 'Опозиційних політиків звинуватили в обструкції в парламенті.',
    },
  ],
  offer: [
    {
      pos: 'v',
      translation: 'пропонувати',
      exEn: 'The company offered her a higher salary.',
      exUa: 'Компанія запропонувала їй вищу зарплату.',
    },
    {
      pos: 'noun',
      translation: 'пропозиція',
      exEn: 'She received an excellent job offer from a well-known company.',
      exUa: 'Вона отримала чудову пропозицію роботи від відомої компанії.',
    },
  ],
  offset: [
    {
      pos: 'v',
      translation: 'компенсувати',
      exEn: 'The company plans to offset its carbon emissions by planting trees.',
      exUa: 'Компанія планує компенсувати викиди вуглецю, саджаючи дерева.',
    },
    {
      pos: 'noun',
      translation: 'зміщення',
      exEn: 'There was a slight offset between the two printed layers.',
      exUa: 'Було невелике зміщення між двома надрукованими шарами.',
    },
  ],
  offshore: [
    {
      pos: 'adj',
      translation: 'офшорний',
      exEn: 'The company transferred its profits to an offshore account.',
      exUa: 'Компанія перевела свої прибутки на офшорний рахунок.',
    },
    {
      pos: 'adv',
      translation: 'за кордоном',
      exEn: 'Many manufacturing jobs have moved offshore in recent decades.',
      exUa: 'Багато виробничих робочих місць переїхали за кордон за останні десятиліття.',
    },
  ],
  open: [
    {
      pos: 'v',
      translation: 'відкривати',
      exEn: 'Could you open the window, please?',
      exUa: 'Чи не міг би ти відкрити вікно, будь ласка?',
    },
    {
      pos: 'adj',
      translation: 'відкритий',
      exEn: 'The shop stays open until nine every evening.',
      exUa: 'Магазин залишається відкритим до дев\'ятої щовечора.',
    },
  ],
  opposite: [
    {
      pos: 'adj',
      translation: 'протилежний',
      exEn: 'They live on opposite sides of the city.',
      exUa: 'Вони живуть на протилежних кінцях міста.',
    },
    {
      pos: 'adv',
      translation: 'навпроти',
      exEn: 'The bakery stands right opposite the old church.',
      exUa: 'Пекарня стоїть якраз навпроти старої церкви.',
    },
  ],
  orbit: [
    {
      pos: 'noun',
      translation: 'орбіта',
      exEn: 'The satellite entered orbit around the Earth.',
      exUa: 'Супутник вийшов на орбіту навколо Землі.',
    },
    {
      pos: 'v',
      translation: 'обертатися',
      exEn: 'The Moon orbits the Earth roughly once a month.',
      exUa: 'Місяць обертається навколо Землі приблизно раз на місяць.',
    },
  ],
  outline: [
    {
      pos: 'v',
      translation: 'окреслювати',
      exEn: 'The manager outlined the main goals for next year.',
      exUa: 'Керівник окреслив основні цілі на наступний рік.',
    },
    {
      pos: 'noun',
      translation: 'нарис',
      exEn: 'She wrote a brief outline before starting the full essay.',
      exUa: 'Вона написала короткий нарис, перш ніж почати повне есе.',
    },
  ],
  outrage: [
    {
      pos: 'noun',
      translation: 'обурення',
      exEn: 'The decision sparked public outrage across the country.',
      exUa: 'Рішення викликало суспільне обурення по всій країні.',
    },
    {
      pos: 'v',
      translation: 'обурювати',
      exEn: 'The unfair verdict outraged everyone in the courtroom.',
      exUa: 'Несправедливий вирок обурив усіх у залі суду.',
    },
  ],
  overhead: [
    {
      pos: 'adv',
      translation: 'над головою',
      exEn: 'A plane flew overhead just as they arrived.',
      exUa: 'Літак пролетів над головою якраз тоді, коли вони прибули.',
    },
    {
      pos: 'noun',
      translation: 'накладні витрати',
      exEn: 'The company tried to reduce its overhead costs.',
      exUa: 'Компанія намагалася скоротити накладні витрати.',
    },
  ],
  overreach: [
    {
      pos: 'noun',
      translation: 'перевищення повноважень',
      exEn: 'Critics accused the agency of regulatory overreach.',
      exUa: 'Критики звинуватили агентство в перевищенні повноважень.',
    },
    {
      pos: 'noun',
      translation: 'надмірні амбіції',
      exEn: 'The failed expansion was a classic case of corporate overreach.',
      exUa: 'Невдале розширення стало класичним прикладом надмірних амбіцій компанії.',
    },
  ],
  overture: [
    {
      pos: 'noun',
      translation: 'увертюра',
      exEn: 'The orchestra opened the concert with a dramatic overture.',
      exUa: 'Оркестр відкрив концерт драматичною увертюрою.',
    },
    {
      pos: 'noun',
      translation: 'початок',
      exEn: 'Their first meeting was seen as a diplomatic overture toward peace.',
      exUa: 'Їхня перша зустріч розглядалася як початок дипломатичних кроків до миру.',
    },
  ],
  own: [
    {
      pos: 'adj',
      translation: 'власний',
      exEn: 'She finally has her own apartment.',
      exUa: 'У неї нарешті є власна квартира.',
    },
    {
      pos: 'v',
      translation: 'визнавати',
      exEn: 'She owned her mistake honestly in front of everyone.',
      exUa: 'Вона чесно визнала свою помилку перед усіма.',
    },
  ],
  pack: [
    {
      pos: 'v',
      translation: 'пакувати',
      exEn: 'She packed her suitcase the night before the flight.',
      exUa: 'Вона спакувала валізу за ніч до рейсу.',
    },
    {
      pos: 'noun',
      translation: 'упаковка',
      exEn: 'The pack of biscuits was already half empty.',
      exUa: 'Упаковка печива вже була наполовину порожня.',
    },
  ],
  paddle: [
    {
      pos: 'v',
      translation: 'гребти',
      exEn: 'They paddled steadily across the calm lake.',
      exUa: 'Вони рівномірно гребли через спокійне озеро.',
    },
    {
      pos: 'noun',
      translation: 'весло',
      exEn: 'He lost his paddle in the middle of the river.',
      exUa: 'Він загубив весло посеред річки.',
    },
  ],
  pain: [
    {
      pos: 'noun',
      translation: 'біль',
      exEn: 'She felt a sharp pain in her lower back.',
      exUa: 'Вона відчула гострий біль у попереку.',
    },
    {
      pos: 'v',
      translation: 'завдавати болю',
      exEn: 'His harsh words really pained her.',
      exUa: 'Його різкі слова справді завдали їй болю.',
    },
  ],
  painting: [
    {
      pos: 'noun',
      translation: 'картина',
      exEn: 'The museum bought a rare painting by a local artist.',
      exUa: 'Музей придбав рідкісну картину місцевого художника.',
    },
    {
      pos: 'noun',
      translation: 'живопис',
      exEn: 'She studied painting at art school for four years.',
      exUa: 'Вона вивчала живопис у художній школі протягом чотирьох років.',
    },
  ],
  pair: [
    {
      pos: 'noun',
      translation: 'пара',
      exEn: 'She bought a new pair of shoes for the wedding.',
      exUa: 'Вона купила нову пару взуття на весілля.',
    },
    {
      pos: 'v',
      translation: 'підбирати в пару',
      exEn: 'The stylist paired the blue jacket with grey trousers.',
      exUa: 'Стиліст підібрав у пару синій піджак із сірими штанами.',
    },
  ],
  pale: [
    {
      pos: 'adj',
      translation: 'блідий',
      exEn: 'His face looked unusually pale after the long illness.',
      exUa: 'Його обличчя виглядало незвично блідим після тривалої хвороби.',
    },
    {
      pos: 'v',
      translation: 'блідіти',
      exEn: 'She paled visibly at the mention of the accident.',
      exUa: 'Вона помітно зблідла при згадці про аварію.',
    },
  ],
  pan: [
    {
      pos: 'noun',
      translation: 'сковорідка',
      exEn: 'She heated some oil in the pan before adding the onions.',
      exUa: 'Вона нагріла трохи олії на сковорідці, перш ніж додати цибулю.',
    },
    {
      pos: 'v',
      translation: 'панорамувати',
      exEn: 'The camera panned slowly across the mountain landscape.',
      exUa: 'Камера повільно панорамувала гірський ландшафт.',
    },
  ],
  panic: [
    {
      pos: 'noun',
      translation: 'паніка',
      exEn: 'There was widespread panic when the alarm went off.',
      exUa: 'Коли пролунала сигналізація, охопила загальна паніка.',
    },
    {
      pos: 'v',
      translation: 'панікувати',
      exEn: "Please don't panic — everything is under control.",
      exUa: 'Будь ласка, не панікуй — усе під контролем.',
    },
  ],
  paraphrase: [
    {
      pos: 'v',
      translation: 'перефразувати',
      exEn: 'Could you paraphrase that in simpler terms?',
      exUa: 'Чи не міг би ти перефразувати це простішими словами?',
    },
    {
      pos: 'noun',
      translation: 'переказ',
      exEn: 'The student submitted a short paraphrase of the article.',
      exUa: 'Студент подав короткий переказ статті.',
    },
  ],
  parent: [
    {
      pos: 'noun',
      translation: 'батько',
      exEn: 'Her father was a strict but loving parent.',
      exUa: 'Її батько був суворим, але люблячим батьком.',
    },
    {
      pos: 'noun',
      translation: 'мати (один із батьків)',
      exEn: 'As a parent, she always put her children\'s needs first.',
      exUa: 'Як мати, вона завжди ставила потреби дітей на перше місце.',
    },
  ],
  parrot: [
    {
      pos: 'noun',
      translation: 'папуга',
      exEn: 'The colourful parrot could say several words.',
      exUa: 'Барвистий папуга міг вимовляти кілька слів.',
    },
    {
      pos: 'v',
      translation: 'повторювати бездумно',
      exEn: 'He just parrots whatever his favourite politician says.',
      exUa: 'Він просто бездумно повторює все, що каже його улюблений політик.',
    },
  ],
  part: [
    {
      pos: 'noun',
      translation: 'частина, роль',
      exEn: 'This chapter is only a small part of the whole story.',
      exUa: 'Цей розділ — лише невелика частина всієї історії.',
    },
    {
      pos: 'v',
      translation: 'розлучатися',
      exEn: 'The two old friends finally had to part ways.',
      exUa: 'Двоє старих друзів нарешті мусили розлучитися.',
    },
  ],
  pass: [
    {
      pos: 'v',
      translation: 'проходити',
      exEn: "Please let me pass — I'm in a hurry.",
      exUa: 'Будь ласка, дай мені пройти — я поспішаю.',
    },
    {
      pos: 'noun',
      translation: 'перепустка',
      exEn: 'You need a valid pass to enter the building.',
      exUa: 'Вам потрібна дійсна перепустка, щоб увійти до будівлі.',
    },
  ],
  'pass on': [
    {
      pos: 'v',
      translation: 'передавати',
      exEn: 'Please pass on my regards to your family.',
      exUa: 'Будь ласка, передай мої вітання своїй родині.',
    },
    {
      pos: 'v',
      translation: 'померти',
      exEn: 'Her grandfather passed on peacefully last spring.',
      exUa: 'Її дідусь тихо помер минулої весни.',
    },
  ],
  paste: [
    {
      pos: 'noun',
      translation: 'паста',
      exEn: 'She spread tomato paste evenly over the dough.',
      exUa: 'Вона рівномірно намазала томатну пасту на тісто.',
    },
    {
      pos: 'v',
      translation: 'вставляти',
      exEn: 'Copy the text and paste it into the document.',
      exUa: 'Скопіюй текст і встав його в документ.',
    },
  ],
  pat: [
    {
      pos: 'v',
      translation: 'погладжувати',
      exEn: 'She patted the dog gently on the head.',
      exUa: 'Вона ніжно погладила собаку по голові.',
    },
    {
      pos: 'noun',
      translation: 'тихенький удар',
      exEn: 'He gave his friend a reassuring pat on the shoulder.',
      exUa: 'Він заспокійливо поплескав друга по плечу.',
    },
  ],
  patrol: [
    {
      pos: 'noun',
      translation: 'патруль',
      exEn: 'A police patrol passed by the building twice an hour.',
      exUa: 'Поліцейський патруль проїжджав повз будівлю двічі на годину.',
    },
    {
      pos: 'v',
      translation: 'патрулювати',
      exEn: 'Officers patrolled the neighbourhood after dark.',
      exUa: 'Офіцери патрулювали район після настання темряви.',
    },
  ],
  patronise: [
    {
      pos: 'v',
      translation: 'поводитися зверхньо',
      exEn: "Please don't patronise me — I understand the situation perfectly.",
      exUa: 'Будь ласка, не поводься зі мною зверхньо — я чудово розумію ситуацію.',
    },
    {
      pos: 'v',
      translation: 'підтримувати',
      exEn: 'She patronises several small local shops in her neighbourhood.',
      exUa: 'Вона підтримує кілька невеликих місцевих магазинів у своєму районі.',
    },
  ],
  patronize: [
    {
      pos: 'v',
      translation: 'заступатися',
      exEn: 'The duke patronized several young painters throughout his life.',
      exUa: 'Герцог протягом усього життя заступався за кількох молодих художників.',
    },
    {
      pos: 'v',
      translation: 'ставитися зверхньо',
      exEn: 'He hated being patronized by his older colleagues.',
      exUa: 'Він ненавидів, коли старші колеги ставилися до нього зверхньо.',
    },
  ],
  pause: [
    {
      pos: 'noun',
      translation: 'пауза',
      exEn: 'There was an awkward pause before she answered.',
      exUa: 'Перед тим як вона відповіла, настала незручна пауза.',
    },
    {
      pos: 'v',
      translation: 'зупинятися',
      exEn: 'He paused briefly before continuing his speech.',
      exUa: 'Він на мить зупинився, перш ніж продовжити свою промову.',
    },
  ],
  peck: [
    {
      pos: 'v',
      translation: 'клювати',
      exEn: 'The chicken pecked at the seeds on the ground.',
      exUa: 'Курка клювала зерна на землі.',
    },
    {
      pos: 'noun',
      translation: 'легкий поцілунок',
      exEn: 'She gave him a quick peck on the cheek before leaving.',
      exUa: 'Вона легенько поцілувала його в щоку перед від\'їздом.',
    },
  ],
  pee: [
    {
      pos: 'v',
      translation: 'писяти',
      exEn: 'The puppy needs to pee before we leave the house.',
      exUa: 'Цуценя мусить пописяти, перш ніж ми вийдемо з дому.',
    },
    {
      pos: 'noun',
      translation: 'сеча',
      exEn: 'The doctor asked for a urine sample for testing.',
      exUa: 'Лікар попросив зразок сечі для аналізу.',
    },
  ],
  peek: [
    {
      pos: 'v',
      translation: 'підглядати',
      exEn: 'She peeked through the curtains to see who arrived.',
      exUa: 'Вона підглянула крізь фіранки, щоб побачити, хто прийшов.',
    },
    {
      pos: 'noun',
      translation: 'швидкий погляд',
      exEn: 'He took a quick peek at the answer key.',
      exUa: 'Він кинув швидкий погляд на список правильних відповідей.',
    },
  ],
  peer: [
    {
      pos: 'noun',
      translation: 'однолітки',
      exEn: 'Teenagers often care deeply about what their peers think.',
      exUa: 'Підлітки часто дуже переймаються тим, що думають їхні однолітки.',
    },
    {
      pos: 'v',
      translation: 'вдивлятися',
      exEn: 'She peered into the dark room, searching for the light switch.',
      exUa: 'Вона вдивлялася в темну кімнату, шукаючи вимикач світла.',
    },
  ],
  perfect: [
    {
      pos: 'adj',
      translation: 'досконалий',
      exEn: 'It was a perfect evening for a walk on the beach.',
      exUa: 'Це був досконалий вечір для прогулянки на пляжі.',
    },
    {
      pos: 'v',
      translation: 'відпрацювати',
      exEn: 'She perfected her recipe over many years of practice.',
      exUa: 'Вона відпрацювала свій рецепт за багато років практики.',
    },
  ],
  permit: [
    {
      pos: 'v',
      translation: 'дозволяти',
      exEn: 'The rules do not permit smoking inside the building.',
      exUa: 'Правила не дозволяють курити всередині будівлі.',
    },
    {
      pos: 'noun',
      translation: 'дозвіл',
      exEn: 'You need a permit to build an extension on your house.',
      exUa: 'Вам потрібен дозвіл, щоб добудувати прибудову до будинку.',
    },
  ],
  person: [
    {
      pos: 'noun',
      translation: 'людина',
      exEn: 'Every person deserves respect regardless of background.',
      exUa: 'Кожна людина заслуговує на повагу незалежно від походження.',
    },
    {
      pos: 'noun',
      translation: 'особа',
      exEn: 'The document must be signed by an authorised person.',
      exUa: 'Документ повинен підписати уповноважена особа.',
    },
  ],
  pervert: [
    {
      pos: 'noun',
      translation: 'збочена людина',
      exEn: 'He was reported to the police as a suspected pervert.',
      exUa: 'Про нього повідомили в поліцію як про підозрюваного збоченця.',
    },
    {
      pos: 'v',
      translation: 'спотворювати',
      exEn: 'He was accused of perverting the course of justice.',
      exUa: 'Його звинуватили у спотворенні перебігу правосуддя.',
    },
  ],
  petition: [
    {
      pos: 'noun',
      translation: 'петиція',
      exEn: 'Thousands of people signed the online petition.',
      exUa: 'Тисячі людей підписали онлайн-петицію.',
    },
    {
      pos: 'v',
      translation: 'подавати клопотання',
      exEn: 'Residents petitioned the council to build a new park.',
      exUa: 'Мешканці подали клопотання до ради про будівництво нового парку.',
    },
  ],
  photograph: [
    {
      pos: 'v',
      translation: 'фотографувати',
      exEn: 'She photographed every moment of the trip.',
      exUa: 'Вона фотографувала кожну мить подорожі.',
    },
    {
      pos: 'noun',
      translation: 'фотографія',
      exEn: 'The old photograph showed her grandparents as young adults.',
      exUa: 'Стара фотографія показувала її бабусю й дідуся молодими.',
    },
  ],
  phrase: [
    {
      pos: 'noun',
      translation: 'фраза',
      exEn: 'She repeated the same phrase three times for emphasis.',
      exUa: 'Вона повторила ту саму фразу тричі для наголосу.',
    },
    {
      pos: 'v',
      translation: 'формулювати',
      exEn: 'Try to phrase your question more politely.',
      exUa: 'Спробуй сформулювати своє питання ввічливіше.',
    },
  ],
  pile: [
    {
      pos: 'noun',
      translation: 'купа',
      exEn: 'There was a huge pile of laundry waiting to be washed.',
      exUa: 'Там була величезна купа білизни, яка чекала прання.',
    },
    {
      pos: 'v',
      translation: 'складати в купу',
      exEn: 'She piled the dirty dishes in the sink.',
      exUa: 'Вона склала брудний посуд купою в раковині.',
    },
  ],
  pin: [
    {
      pos: 'noun',
      translation: 'шпилька',
      exEn: 'She fixed the fabric in place with a pin.',
      exUa: 'Вона закріпила тканину на місці шпилькою.',
    },
    {
      pos: 'v',
      translation: 'прикріплювати',
      exEn: 'He pinned the notice to the board.',
      exUa: 'Він прикріпив оголошення до дошки.',
    },
  ],
  pinch: [
    {
      pos: 'v',
      translation: 'щипати',
      exEn: 'The crab pinched her finger by accident.',
      exUa: 'Краб випадково вщипнув її за палець.',
    },
    {
      pos: 'noun',
      translation: 'щіпка',
      exEn: 'Add just a pinch of salt to the soup.',
      exUa: 'Додай лише щіпку солі в суп.',
    },
  ],
  pine: [
    {
      pos: 'noun',
      translation: 'сосна',
      exEn: 'The forest was full of tall pine trees.',
      exUa: 'Ліс був повний високих сосен.',
    },
    {
      pos: 'v',
      translation: 'сумувати за',
      exEn: 'She pined for her homeland after moving abroad.',
      exUa: 'Вона сумувала за батьківщиною після переїзду за кордон.',
    },
  ],
  pious: [
    {
      pos: 'adj',
      translation: 'побожний',
      exEn: 'She came from a deeply pious family.',
      exUa: 'Вона походила з глибоко побожної родини.',
    },
    {
      pos: 'adj',
      translation: 'удавано доброчесний',
      exEn: 'His pious speeches never matched his selfish actions.',
      exUa: 'Його удавано доброчесні промови ніколи не відповідали його егоїстичним вчинкам.',
    },
  ],
  pipe: [
    {
      pos: 'noun',
      translation: 'труба',
      exEn: 'Water flowed through the old metal pipe.',
      exUa: 'Вода текла крізь стару металеву трубу.',
    },
    {
      pos: 'v',
      translation: 'курити трубку',
      exEn: 'Her grandfather liked to pipe tobacco on the porch every evening.',
      exUa: 'Її дідусь любив курити трубку на ганку щовечора.',
    },
  ],
  pipeline: [
    {
      pos: 'noun',
      translation: 'канал, конвеєр',
      exEn: 'Oil flows through the pipeline across several countries.',
      exUa: 'Нафта тече трубопроводом через кілька країн.',
    },
    {
      pos: 'adj',
      translation: 'у процесі розробки',
      exEn: 'Several new products are currently in the pipeline.',
      exUa: 'Кілька нових продуктів наразі перебувають у процесі розробки.',
    },
  ],
  pivot: [
    {
      pos: 'noun',
      translation: 'стрижень',
      exEn: 'The door swings on a central pivot.',
      exUa: 'Двері обертаються на центральному стрижні.',
    },
    {
      pos: 'v',
      translation: 'повертатися',
      exEn: 'The company decided to pivot toward online sales.',
      exUa: 'Компанія вирішила переорієнтуватися в бік онлайн-продажів.',
    },
  ],
  plague: [
    {
      pos: 'noun',
      translation: 'чума',
      exEn: 'The plague killed millions of people in medieval Europe.',
      exUa: 'Чума вбила мільйони людей у середньовічній Європі.',
    },
    {
      pos: 'v',
      translation: 'переслідувати',
      exEn: 'Doubts continued to plague her long after the decision was made.',
      exUa: 'Сумніви продовжували переслідувати її ще довго після ухвалення рішення.',
    },
  ],
  plainly: [
    {
      pos: 'adv',
      translation: 'ясно, чітко',
      exEn: 'She spoke plainly so that everyone could understand.',
      exUa: 'Вона говорила ясно, щоб усі могли зрозуміти.',
    },
    {
      pos: 'adv',
      translation: 'очевидно',
      exEn: 'Plainly, the plan needs more work before it can succeed.',
      exUa: 'Очевидно, план потребує доопрацювання, перш ніж він зможе спрацювати.',
    },
  ],
  plan: [
    {
      pos: 'noun',
      translation: 'план',
      exEn: 'She wrote a detailed plan for the new project.',
      exUa: 'Вона написала детальний план нового проєкту.',
    },
    {
      pos: 'v',
      translation: 'планувати',
      exEn: 'They are planning a trip to Italy next summer.',
      exUa: 'Вони планують поїздку до Італії наступного літа.',
    },
  ],
  please: [
    {
      pos: 'noun',
      translation: 'будь ласка',
      exEn: 'Please close the door behind you.',
      exUa: 'Будь ласка, зачини за собою двері.',
    },
    {
      pos: 'v',
      translation: 'задовольняти',
      exEn: "It's impossible to please every single customer.",
      exUa: 'Неможливо задовольнити кожного окремого клієнта.',
    },
  ],
  plot: [
    {
      pos: 'noun',
      translation: 'ділянка',
      exEn: 'They bought a small plot of land near the river.',
      exUa: 'Вони купили невелику ділянку землі біля річки.',
    },
    {
      pos: 'noun',
      translation: 'сюжет',
      exEn: "The movie's plot twist surprised everyone in the cinema.",
      exUa: 'Несподіваний поворот сюжету фільму здивував усіх у кінотеатрі.',
    },
    {
      pos: 'v',
      translation: 'змовляти',
      exEn: 'The conspirators plotted to overthrow the government.',
      exUa: 'Змовники змовлялися повалити уряд.',
    },
  ],
  pluck: [
    {
      pos: 'v',
      translation: 'зривати, смикати',
      exEn: 'He plucked the loose thread from his sweater.',
      exUa: 'Він висмикнув вільну нитку зі свого светра.',
    },
    {
      pos: 'noun',
      translation: 'сміливість',
      exEn: 'It took real pluck to stand up to the bully.',
      exUa: 'Знадобилася справжня сміливість, щоб протистояти хулігану.',
    },
  ],
  plug: [
    {
      pos: 'noun',
      translation: 'вилка',
      exEn: 'She inserted the plug into the wall socket.',
      exUa: 'Вона вставила вилку в розетку.',
    },
    {
      pos: 'v',
      translation: 'затикати',
      exEn: 'He plugged the leak in the pipe with tape.',
      exUa: 'Він заткнув витік у трубі стрічкою.',
    },
  ],
  poach: [
    {
      pos: 'v',
      translation: 'варити без шкаралупи (яйце)',
      exEn: 'She poached two eggs for breakfast.',
      exUa: 'Вона зварила два яйця-пашот на сніданок.',
    },
    {
      pos: 'v',
      translation: 'приготувати в рідині',
      exEn: 'The chef poached the pears in spiced wine.',
      exUa: 'Шеф-кухар приготував груші у прянім вині.',
    },
  ],
  pocket: [
    {
      pos: 'noun',
      translation: 'кишеня',
      exEn: 'He kept his keys in his jacket pocket.',
      exUa: 'Він тримав ключі в кишені куртки.',
    },
    {
      pos: 'v',
      translation: 'присвоювати',
      exEn: 'The manager was accused of pocketing company funds.',
      exUa: 'Керівника звинуватили у присвоєнні коштів компанії.',
    },
  ],
  poison: [
    {
      pos: 'noun',
      translation: 'отрута',
      exEn: 'The detective found traces of poison in the wine.',
      exUa: 'Детектив знайшов сліди отрути у вині.',
    },
    {
      pos: 'v',
      translation: 'отруювати',
      exEn: 'Industrial waste poisoned the river for miles.',
      exUa: 'Промислові відходи отруїли річку на багато кілометрів.',
    },
  ],
  polish: [
    {
      pos: 'v',
      translation: 'полірувати',
      exEn: 'She polished the silver until it gleamed.',
      exUa: 'Вона відполірувала срібло, поки воно не заблищало.',
    },
    {
      pos: 'noun',
      translation: 'польська мова',
      exEn: 'He has been learning Polish for two years.',
      exUa: 'Він вивчає польську мову вже два роки.',
    },
  ],
  poll: [
    {
      pos: 'noun',
      translation: 'опитування',
      exEn: 'A recent poll showed strong support for the new policy.',
      exUa: 'Нещодавнє опитування показало сильну підтримку нової політики.',
    },
    {
      pos: 'v',
      translation: 'голосувати',
      exEn: 'Citizens polled overwhelmingly in favour of the reform.',
      exUa: 'Громадяни переважно проголосували за реформу.',
    },
  ],
  pool: [
    {
      pos: 'noun',
      translation: 'басейн',
      exEn: 'The children spent all afternoon in the swimming pool.',
      exUa: 'Діти провели весь день у басейні.',
    },
    {
      pos: 'v',
      translation: "об'єднувати",
      exEn: 'The neighbours pooled their money to fix the shared fence.',
      exUa: "Сусіди об'єднали свої гроші, щоб полагодити спільний паркан.",
    },
  ],
  pose: [
    {
      pos: 'v',
      translation: 'поставати',
      exEn: 'Climate change poses one of the greatest threats to global stability.',
      exUa: 'Зміна клімату постає однією з найбільших загроз глобальній стабільності.',
    },
    {
      pos: 'noun',
      translation: 'загроза',
      exEn: 'Wild animals can pose a real threat if approached carelessly.',
      exUa: 'Дикі тварини можуть становити реальну загрозу, якщо до них необережно наближатися.',
    },
  ],
  post: [
    {
      pos: 'noun',
      translation: 'пост',
      exEn: 'She was appointed to a senior post at the ministry.',
      exUa: 'Її призначили на керівний пост у міністерстві.',
    },
    {
      pos: 'v',
      translation: 'надсилати',
      exEn: "Please post the letter before five o'clock.",
      exUa: "Будь ласка, надішли лист до п'ятої години.",
    },
  ],
  postgraduate: [
    {
      pos: 'noun',
      translation: 'аспірант',
      exEn: 'She is a postgraduate studying chemistry at the university.',
      exUa: 'Вона аспірантка, яка вивчає хімію в університеті.',
    },
    {
      pos: 'adj',
      translation: 'аспірантський',
      exEn: 'He enrolled in a postgraduate programme in economics.',
      exUa: 'Він вступив на аспірантську програму з економіки.',
    },
  ],
  pound: [
    {
      pos: 'noun',
      translation: 'фунт',
      exEn: 'The recipe calls for one pound of flour.',
      exUa: 'Рецепт вимагає одного фунта борошна.',
    },
    {
      pos: 'v',
      translation: 'товкти',
      exEn: 'He pounded the meat with a mallet to tenderize it.',
      exUa: "Він товк м'ясо молотком, щоб зробити його м'якшим.",
    },
  ],
  powder: [
    {
      pos: 'noun',
      translation: 'порошок',
      exEn: 'She mixed the protein powder into her smoothie.',
      exUa: 'Вона змішала протеїновий порошок у своєму смузі.',
    },
    {
      pos: 'v',
      translation: 'припудрювати',
      exEn: 'She powdered her face lightly before the interview.',
      exUa: 'Вона легенько припудрила обличчя перед співбесідою.',
    },
  ],
  practice: [
    {
      pos: 'noun',
      translation: 'практика',
      exEn: 'Regular practice is the key to learning any language.',
      exUa: 'Регулярна практика — ключ до вивчення будь-якої мови.',
    },
    {
      pos: 'v',
      translation: 'вправлятися',
      exEn: 'He practices the piano every day after school.',
      exUa: 'Він вправляється на піаніно щодня після школи.',
    },
  ],
  praise: [
    {
      pos: 'v',
      translation: 'хвалити',
      exEn: 'The teacher praised her students for their hard work.',
      exUa: 'Вчителька похвалила своїх учнів за наполегливу працю.',
    },
    {
      pos: 'noun',
      translation: 'похвала',
      exEn: 'He received high praise for his outstanding performance.',
      exUa: 'Він отримав високу похвалу за свій видатний виступ.',
    },
  ],
  precipitate: [
    {
      pos: 'v',
      translation: 'прискорювати (події)',
      exEn: 'The scandal precipitated his sudden resignation.',
      exUa: 'Скандал прискорив його раптову відставку.',
    },
    {
      pos: 'noun',
      translation: 'опад',
      exEn: 'The weather report predicts precipitation later today.',
      exUa: 'Прогноз погоди передбачає опади пізніше сьогодні.',
    },
  ],
  press: [
    {
      pos: 'noun',
      translation: 'преса',
      exEn: 'The press gathered outside the courthouse for the verdict.',
      exUa: 'Преса зібралася біля будівлі суду, чекаючи на вирок.',
    },
    {
      pos: 'v',
      translation: 'натискати',
      exEn: 'Press the button to open the door.',
      exUa: 'Натисни кнопку, щоб відчинити двері.',
    },
  ],
  pressure: [
    {
      pos: 'noun',
      translation: 'тиск',
      exEn: 'She performed well even under enormous pressure.',
      exUa: 'Вона добре виступила навіть під величезним тиском.',
    },
    {
      pos: 'v',
      translation: 'тиснути',
      exEn: 'Her parents pressured her to choose a more practical career.',
      exUa: "Батьки тиснули на неї, щоб вона обрала практичнішу кар'єру.",
    },
  ],
  prick: [
    {
      pos: 'v',
      translation: 'колоти',
      exEn: 'She pricked her finger while sewing.',
      exUa: 'Вона вколола палець під час шиття.',
    },
    {
      pos: 'noun',
      translation: 'укол',
      exEn: 'He felt a small prick when the needle went in.',
      exUa: 'Він відчув невеликий укол, коли ввійшла голка.',
    },
  ],
  print: [
    {
      pos: 'adj',
      translation: 'друкований (про ЗМІ)',
      exEn: 'The magazine is available in both print and digital formats.',
      exUa: 'Журнал доступний як у друкованому, так і в цифровому форматі.',
    },
    {
      pos: 'noun',
      translation: 'друк',
      exEn: 'The book went into its third print run this year.',
      exUa: 'Книга цього року вийшла третім друком.',
    },
  ],
  probation: [
    {
      pos: 'noun',
      translation: 'пробаційний нагляд',
      exEn: 'He was placed on probation instead of going to prison.',
      exUa: "Його поставили під пробаційний нагляд замість в'язниці.",
    },
    {
      pos: 'noun',
      translation: 'випробувальний термін',
      exEn: 'New employees serve a three-month probation period.',
      exUa: 'Нові працівники проходять тримісячний випробувальний термін.',
    },
  ],
  probe: [
    {
      pos: 'v',
      translation: 'розслідувати',
      exEn: "Journalists probed the company's financial records.",
      exUa: 'Журналісти розслідували фінансові документи компанії.',
    },
    {
      pos: 'noun',
      translation: 'зонд',
      exEn: 'The space probe sent back stunning images of Mars.',
      exUa: 'Космічний зонд надіслав вражаючі знімки Марса.',
    },
  ],
  process: [
    {
      pos: 'noun',
      translation: 'процес',
      exEn: 'The entire hiring process took almost two months.',
      exUa: 'Весь процес найму зайняв майже два місяці.',
    },
    {
      pos: 'v',
      translation: 'обробляти',
      exEn: 'The factory processes thousands of tons of grain each year.',
      exUa: 'Завод обробляє тисячі тонн зерна щороку.',
    },
  ],
  profess: [
    {
      pos: 'v',
      translation: 'стверджувати, заявляти',
      exEn: 'He professed his innocence throughout the trial.',
      exUa: 'Він заявляв про свою невинуватість протягом усього суду.',
    },
    {
      pos: 'v',
      translation: 'сповідувати',
      exEn: 'Most people in the village profess the Christian faith.',
      exUa: 'Більшість жителів села сповідують християнську віру.',
    },
  ],
  professional: [
    {
      pos: 'noun',
      translation: 'професіонал',
      exEn: 'She hired a professional to fix the leaking roof.',
      exUa: 'Вона найняла професіонала, щоб полагодити протікаючий дах.',
    },
    {
      pos: 'adj',
      translation: 'професійний',
      exEn: 'He always maintains a professional attitude at work.',
      exUa: 'Він завжди зберігає професійне ставлення на роботі.',
    },
  ],
  profit: [
    {
      pos: 'noun',
      translation: 'прибуток',
      exEn: 'The company reported a record profit this quarter.',
      exUa: 'Компанія повідомила про рекордний прибуток цього кварталу.',
    },
    {
      pos: 'v',
      translation: 'отримувати вигоду',
      exEn: 'Investors profited greatly from the rising stock prices.',
      exUa: 'Інвестори отримали велику вигоду від зростання цін на акції.',
    },
  ],
  promise: [
    {
      pos: 'v',
      translation: 'обіцяти',
      exEn: 'She promised to call him as soon as she landed.',
      exUa: 'Вона пообіцяла зателефонувати йому, як тільки приземлиться.',
    },
    {
      pos: 'noun',
      translation: 'обіцянка',
      exEn: 'He broke his promise to help with the move.',
      exUa: 'Він порушив свою обіцянку допомогти з переїздом.',
    },
  ],
  prompt: [
    {
      pos: 'v',
      translation: 'спонукати',
      exEn: 'The alarm prompted everyone to leave the building immediately.',
      exUa: 'Сигналізація спонукала всіх негайно покинути будівлю.',
    },
    {
      pos: 'adj',
      translation: 'негайний',
      exEn: 'She gave a prompt reply to every client email.',
      exUa: 'Вона давала негайну відповідь на кожен лист клієнта.',
    },
  ],
  prop: [
    {
      pos: 'noun',
      translation: 'підпора',
      exEn: 'They used a wooden beam as a prop for the sagging roof.',
      exUa: 'Вони використали дерев\'яну балку як підпору для проваленого даху.',
    },
    {
      pos: 'v',
      translation: 'підтримувати',
      exEn: 'She propped the door open with a heavy book.',
      exUa: 'Вона підперла двері відкритими важкою книгою.',
    },
  ],
  protest: [
    {
      pos: 'noun',
      translation: 'протест',
      exEn: 'Thousands joined the protest against the new law.',
      exUa: 'Тисячі людей приєдналися до протесту проти нового закону.',
    },
    {
      pos: 'v',
      translation: 'протестувати',
      exEn: 'Students protested outside the parliament building.',
      exUa: 'Студенти протестували біля будівлі парламенту.',
    },
  ],
  provision: [
    {
      pos: 'noun',
      translation: 'забезпечення',
      exEn: 'The charity focuses on the provision of clean water.',
      exUa: 'Благодійна організація зосереджується на забезпеченні чистою водою.',
    },
    {
      pos: 'noun',
      translation: 'положення (закону)',
      exEn: 'The contract includes a provision for early termination.',
      exUa: 'Контракт містить положення про дострокове розірвання.',
    },
  ],
  puff: [
    {
      pos: 'v',
      translation: 'пихкати',
      exEn: 'The old train puffed slowly up the hill.',
      exUa: 'Старий потяг повільно пихкав угору схилом.',
    },
    {
      pos: 'noun',
      translation: 'клубок диму',
      exEn: 'A puff of smoke rose from the chimney.',
      exUa: 'Клубок диму піднявся з димаря.',
    },
  ],
  pump: [
    {
      pos: 'noun',
      translation: 'насос',
      exEn: 'The water pump broke down during the drought.',
      exUa: 'Водяний насос зламався під час посухи.',
    },
    {
      pos: 'v',
      translation: 'качати',
      exEn: 'He pumped air into the flat tyre.',
      exUa: 'Він накачав повітря в спущену шину.',
    },
  ],
  purchase: [
    {
      pos: 'v',
      translation: 'купувати',
      exEn: 'She purchased a new laptop for university.',
      exUa: 'Вона купила новий ноутбук для університету.',
    },
    {
      pos: 'noun',
      translation: 'купівля',
      exEn: 'The purchase of the house took several months to complete.',
      exUa: 'Купівля будинку зайняла кілька місяців для завершення.',
    },
  ],
  puree: [
    {
      pos: 'noun',
      translation: 'пюре',
      exEn: 'She made a smooth puree from the roasted vegetables.',
      exUa: 'Вона зробила гладке пюре з печених овочів.',
    },
    {
      pos: 'v',
      translation: 'протирати',
      exEn: "Puree the soup until it's completely smooth.",
      exUa: 'Протри суп, поки він не стане цілком гладким.',
    },
  ],
  purge: [
    {
      pos: 'noun',
      translation: 'очищення',
      exEn: 'The new leader launched a purge of corrupt officials.',
      exUa: 'Новий лідер розпочав очищення від корумпованих чиновників.',
    },
    {
      pos: 'v',
      translation: 'очищати',
      exEn: 'The company purged its records of outdated files.',
      exUa: 'Компанія очистила свої записи від застарілих файлів.',
    },
  ],
  purse: [
    {
      pos: 'noun',
      translation: 'гаманець',
      exEn: 'She kept her money in a small leather purse.',
      exUa: 'Вона тримала гроші в маленькому шкіряному гаманці.',
    },
    {
      pos: 'v',
      translation: 'стягувати губи',
      exEn: 'She pursed her lips in disapproval.',
      exUa: 'Вона стиснула губи на знак несхвалення.',
    },
  ],
  puzzle: [
    {
      pos: 'noun',
      translation: 'головоломка',
      exEn: 'The children solved the puzzle in under ten minutes.',
      exUa: 'Діти розв\'язали головоломку менш ніж за десять хвилин.',
    },
    {
      pos: 'v',
      translation: 'збивати з пантелику',
      exEn: 'Her strange behaviour puzzled everyone in the room.',
      exUa: 'Її дивна поведінка збила з пантелику всіх у кімнаті.',
    },
  ],
  'qualified opinion': [
    {
      pos: 'noun',
      translation: 'кваліфікована думка',
      exEn: 'Before making such a big decision, get a qualified opinion from a specialist.',
      exUa: 'Перш ніж ухвалювати таке важливе рішення, отримай кваліфіковану думку фахівця.',
    },
    {
      pos: 'noun',
      translation: 'думка з застереженнями',
      exEn: 'The report included a qualified opinion due to incomplete records.',
      exUa: 'Звіт містив думку із застереженнями через неповні записи.',
    },
  ],
  quarrel: [
    {
      pos: 'noun',
      translation: 'сварка',
      exEn: 'Their quarrel over money lasted the whole evening.',
      exUa: 'Їхня сварка через гроші тривала весь вечір.',
    },
    {
      pos: 'v',
      translation: 'сваритися',
      exEn: 'The two brothers quarrelled constantly as children.',
      exUa: 'Двоє братів постійно сварилися в дитинстві.',
    },
  ],
  query: [
    {
      pos: 'noun',
      translation: 'запит',
      exEn: 'She submitted a query about her recent order.',
      exUa: 'Вона подала запит щодо свого нещодавнього замовлення.',
    },
    {
      pos: 'v',
      translation: 'запитувати',
      exEn: 'He queried whether the price included tax.',
      exUa: 'Він запитав, чи включена в ціну податок.',
    },
  ],
  question: [
    {
      pos: 'noun',
      translation: 'питання',
      exEn: 'She asked a difficult question during the interview.',
      exUa: 'Вона поставила складне питання під час співбесіди.',
    },
    {
      pos: 'v',
      translation: 'ставити під сумнів',
      exEn: 'Nobody questioned his loyalty to the company.',
      exUa: 'Ніхто не ставив під сумнів його відданість компанії.',
    },
  ],
  'question mark': [
    {
      pos: 'noun',
      translation: 'знак питання',
      exEn: 'Remember to add a question mark at the end of the sentence.',
      exUa: 'Не забудь поставити знак питання в кінці речення.',
    },
    {
      pos: 'noun',
      translation: 'непевність',
      exEn: 'There is still a question mark over his future at the club.',
      exUa: 'Досі існує непевність щодо його майбутнього в клубі.',
    },
  ],
  queue: [
    {
      pos: 'noun',
      translation: 'черга',
      exEn: 'She stood in a long queue at the post office.',
      exUa: 'Вона стояла в довгій черзі на пошті.',
    },
    {
      pos: 'v',
      translation: 'чекати в черзі',
      exEn: 'Dozens of fans queued overnight for concert tickets.',
      exUa: 'Десятки фанатів чекали в черзі всю ніч за квитками на концерт.',
    },
  ],
  quicken: [
    {
      pos: 'v',
      translation: 'прискорюватися',
      exEn: 'Her heartbeat quickened as she waited for the results.',
      exUa: 'Її серцебиття прискорилося, поки вона чекала на результати.',
    },
    {
      pos: 'v',
      translation: 'пожвавлюватися',
      exEn: 'The pace of the story quickens in the final chapters.',
      exUa: 'Темп історії пожвавлюється в останніх розділах.',
    },
  ],
  quintuple: [
    {
      pos: 'adj',
      translation: "п'ятикратний",
      exEn: 'The company saw a quintuple increase in sales after the campaign.',
      exUa: "Компанія побачила п'ятикратне зростання продажів після кампанії.",
    },
    {
      pos: 'v',
      translation: "збільшити у п'ять разів",
      exEn: 'The population of the town quintupled in just twenty years.',
      exUa: "Населення міста збільшилося у п'ять разів лише за двадцять років.",
    },
  ],
  quiz: [
    {
      pos: 'noun',
      translation: 'вікторина',
      exEn: 'The teacher organised a fun quiz at the end of term.',
      exUa: 'Вчителька організувала веселу вікторину наприкінці семестру.',
    },
    {
      pos: 'v',
      translation: 'ставити запитання',
      exEn: 'Reporters quizzed the minister about the new policy.',
      exUa: 'Журналісти закидали міністра запитаннями про нову політику.',
    },
  ],
  quote: [
    {
      pos: 'v',
      translation: 'цитувати',
      exEn: 'She quoted a famous line from the poem.',
      exUa: 'Вона процитувала відомий рядок із вірша.',
    },
    {
      pos: 'noun',
      translation: 'котирування',
      exEn: 'The insurance company gave her a quote over the phone.',
      exUa: 'Страхова компанія надала їй котирування по телефону.',
    },
  ],
  rack: [
    {
      pos: 'noun',
      translation: 'стелаж',
      exEn: 'She hung her coat on the rack by the door.',
      exUa: 'Вона повісила пальто на стелаж біля дверей.',
    },
    {
      pos: 'v',
      translation: 'мучити',
      exEn: 'Guilt racked him for years after the accident.',
      exUa: 'Провина мучила його роками після аварії.',
    },
  ],
  rage: [
    {
      pos: 'noun',
      translation: 'лють',
      exEn: 'He felt a sudden surge of rage when he heard the news.',
      exUa: 'Він відчув раптовий спалах люті, почувши новину.',
    },
    {
      pos: 'v',
      translation: 'шаленіти',
      exEn: 'The storm raged for three days without stopping.',
      exUa: 'Шторм шаленів три дні без зупинки.',
    },
  ],
  rake: [
    {
      pos: 'noun',
      translation: 'граблі',
      exEn: 'He used a rake to gather the fallen leaves.',
      exUa: 'Він скористався граблями, щоб зібрати опале листя.',
    },
    {
      pos: 'v',
      translation: 'згрібати',
      exEn: 'She raked the leaves into a large pile.',
      exUa: 'Вона згребла листя у велику купу.',
    },
  ],
  rally: [
    {
      pos: 'noun',
      translation: 'мітинг',
      exEn: 'Thousands attended the political rally downtown.',
      exUa: 'Тисячі людей відвідали політичний мітинг у центрі міста.',
    },
    {
      pos: 'v',
      translation: "об'єднуватися",
      exEn: 'The team rallied together after their early defeat.',
      exUa: "Команда об'єдналася після ранньої поразки.",
    },
  ],
  ram: [
    {
      pos: 'noun',
      translation: 'баран',
      exEn: 'The ram butted heads with another male in the field.',
      exUa: 'Баран зіштовхнувся головами з іншим самцем на полі.',
    },
    {
      pos: 'v',
      translation: 'вдарятися',
      exEn: 'The truck rammed into the back of the parked car.',
      exUa: 'Вантажівка врізалася в задню частину припаркованого автомобіля.',
    },
  ],
  rampage: [
    {
      pos: 'noun',
      translation: 'нищівний напад',
      exEn: 'The elephant went on a rampage through the village.',
      exUa: 'Слон здійснив нищівний напад на село.',
    },
    {
      pos: 'v',
      translation: 'шаленіти',
      exEn: 'The mob rampaged through the streets after the match.',
      exUa: 'Натовп шаленів на вулицях після матчу.',
    },
  ],
  rank: [
    {
      pos: 'noun',
      translation: 'звання',
      exEn: 'He was promoted to the rank of captain.',
      exUa: 'Його підвищили до звання капітана.',
    },
    {
      pos: 'v',
      translation: 'ранжувати',
      exEn: 'The website ranks hotels based on customer reviews.',
      exUa: 'Сайт ранжує готелі на основі відгуків клієнтів.',
    },
  ],
  rate: [
    {
      pos: 'noun',
      translation: 'ставка',
      exEn: 'The bank offered a lower interest rate this year.',
      exUa: 'Банк цього року запропонував нижчу процентну ставку.',
    },
    {
      pos: 'v',
      translation: 'оцінювати',
      exEn: 'Customers rated the service five stars.',
      exUa: 'Клієнти оцінили обслуговування на п\'ять зірок.',
    },
  ],
  rating: [
    {
      pos: 'noun',
      translation: 'рейтинг',
      exEn: 'The film received an excellent rating from viewers.',
      exUa: 'Фільм отримав чудовий рейтинг від глядачів.',
    },
    {
      pos: 'noun',
      translation: 'оцінка',
      exEn: 'Her performance rating this year was outstanding.',
      exUa: 'Її оцінка ефективності цього року була відмінною.',
    },
  ],
  rattle: [
    {
      pos: 'v',
      translation: 'брязчати',
      exEn: 'The old windows rattled loudly in the wind.',
      exUa: 'Старі вікна голосно брязчали на вітрі.',
    },
    {
      pos: 'noun',
      translation: 'тріщотка',
      exEn: 'The baby shook her rattle happily.',
      exUa: 'Малюк щасливо трусив своєю тріщоткою.',
    },
  ],
  readily: [
    {
      pos: 'adv',
      translation: 'охоче',
      exEn: 'She readily agreed to help with the project.',
      exUa: 'Вона охоче погодилася допомогти з проєктом.',
    },
    {
      pos: 'adv',
      translation: 'легко',
      exEn: 'The information is readily available online.',
      exUa: 'Ця інформація легко доступна онлайн.',
    },
  ],
  rear: [
    {
      pos: 'adj',
      translation: 'задній',
      exEn: 'The rear window of the car was cracked.',
      exUa: 'Заднє вікно автомобіля було тріснуте.',
    },
    {
      pos: 'v',
      translation: 'виховувати',
      exEn: 'They reared three children in that small house.',
      exUa: 'Вони виховали трьох дітей у тому маленькому будинку.',
    },
  ],
  reason: [
    {
      pos: 'noun',
      translation: 'причина',
      exEn: 'There was no clear reason for his sudden departure.',
      exUa: 'Не було чіткої причини для його раптового від\'їзду.',
    },
    {
      pos: 'v',
      translation: 'міркувати',
      exEn: 'He reasoned carefully before making his final decision.',
      exUa: 'Він ретельно поміркував, перш ніж ухвалити остаточне рішення.',
    },
  ],
  rebel: [
    {
      pos: 'v',
      translation: 'повставати',
      exEn: "Teenagers often rebel against their parents' rules.",
      exUa: 'Підлітки часто повстають проти правил своїх батьків.',
    },
    {
      pos: 'noun',
      translation: 'бунтівник',
      exEn: 'The rebels captured the town after a long siege.',
      exUa: 'Бунтівники захопили місто після тривалої облоги.',
    },
  ],
  rebuke: [
    {
      pos: 'v',
      translation: 'докоряти, осуджувати',
      exEn: 'The coach rebuked the player for his poor attitude.',
      exUa: 'Тренер докорив гравцеві за погане ставлення.',
    },
    {
      pos: 'noun',
      translation: 'догана',
      exEn: 'She received a formal rebuke from her manager.',
      exUa: 'Вона отримала офіційну догану від свого керівника.',
    },
  ],
  recap: [
    {
      pos: 'noun',
      translation: 'короткий підсумок',
      exEn: "Let's start the meeting with a quick recap of last week.",
      exUa: 'Розпочнемо зустріч із короткого підсумку минулого тижня.',
    },
    {
      pos: 'v',
      translation: 'підсумовувати',
      exEn: 'She recapped the main points before ending the presentation.',
      exUa: 'Вона підсумувала основні пункти перед завершенням презентації.',
    },
  ],
  recoil: [
    {
      pos: 'v',
      translation: 'відступати в жаху',
      exEn: 'She recoiled in horror at the sight of the spider.',
      exUa: 'Вона відступила в жаху при вигляді павука.',
    },
    {
      pos: 'noun',
      translation: 'відкат',
      exEn: "The rifle's recoil surprised the new shooter.",
      exUa: 'Відкат гвинтівки здивував нового стрільця.',
    },
  ],
  recruit: [
    {
      pos: 'v',
      translation: 'набирати',
      exEn: 'The army recruits thousands of young volunteers every year.',
      exUa: 'Армія щороку набирає тисячі молодих добровольців.',
    },
    {
      pos: 'noun',
      translation: 'рекрут',
      exEn: 'The new recruit struggled during his first week of training.',
      exUa: 'Новий рекрут мав труднощі протягом першого тижня навчання.',
    },
  ],
  redundancy: [
    {
      pos: 'noun',
      translation: 'скорочення штату',
      exEn: 'Many workers faced redundancy after the factory closed.',
      exUa: 'Багато робітників зіткнулися зі скороченням штату після закриття заводу.',
    },
    {
      pos: 'noun',
      translation: 'надлишковість',
      exEn: 'The system was designed with built-in redundancy for safety.',
      exUa: 'Система була спроєктована з вбудованою надлишковістю для безпеки.',
    },
  ],
  reel: [
    {
      pos: 'noun',
      translation: 'котушка',
      exEn: 'He wound the fishing line back onto the reel.',
      exUa: 'Він намотав волосінь назад на котушку.',
    },
    {
      pos: 'v',
      translation: 'хитатися',
      exEn: 'She reeled in shock after hearing the terrible news.',
      exUa: 'Вона захиталася від шоку, почувши жахливу новину.',
    },
  ],
  reflection: [
    {
      pos: 'noun',
      translation: 'відображення',
      exEn: 'She admired her reflection in the mirror.',
      exUa: 'Вона милувалася своїм відображенням у дзеркалі.',
    },
    {
      pos: 'noun',
      translation: 'роздум',
      exEn: 'After much reflection, he decided to change careers.',
      exUa: 'Після довгих роздумів він вирішив змінити кар\'єру.',
    },
  ],
  reform: [
    {
      pos: 'noun',
      translation: 'реформа',
      exEn: 'The government introduced a major education reform.',
      exUa: 'Уряд запровадив масштабну освітню реформу.',
    },
    {
      pos: 'v',
      translation: 'реформувати',
      exEn: 'They plan to reform the outdated tax system.',
      exUa: 'Вони планують реформувати застарілу податкову систему.',
    },
  ],
  refrain: [
    {
      pos: 'v',
      translation: 'утримуватися',
      exEn: 'Please refrain from smoking in this area.',
      exUa: 'Будь ласка, утримайтеся від куріння в цій зоні.',
    },
    {
      pos: 'noun',
      translation: 'приспів',
      exEn: 'Everyone sang along to the catchy refrain.',
      exUa: 'Усі підспівували заразливому приспіву.',
    },
  ],
  refuse: [
    {
      pos: 'v',
      translation: 'відмовляти',
      exEn: 'She refused to sign the contract without changes.',
      exUa: 'Вона відмовилася підписувати контракт без змін.',
    },
    {
      pos: 'noun',
      translation: 'сміття',
      exEn: 'The council collects refuse every Tuesday morning.',
      exUa: 'Рада забирає сміття щовівторка вранці.',
    },
  ],
  regard: [
    {
      pos: 'v',
      translation: 'вважати',
      exEn: 'She is widely regarded as an expert in her field.',
      exUa: 'Її широко вважають експертом у своїй галузі.',
    },
    {
      pos: 'noun',
      translation: 'повага',
      exEn: 'He has great regard for his former teacher.',
      exUa: 'Він має велику повагу до свого колишнього вчителя.',
    },
  ],
  regiment: [
    {
      pos: 'noun',
      translation: 'полк',
      exEn: 'The regiment marched through the town at dawn.',
      exUa: 'Полк марширував через місто на світанку.',
    },
    {
      pos: 'v',
      translation: 'суворо контролювати',
      exEn: 'Her daily routine was regimented down to the minute.',
      exUa: 'Її щоденний розпорядок був суворо контрольований до хвилини.',
    },
  ],
  register: [
    {
      pos: 'v',
      translation: 'реєструватися',
      exEn: 'Students must register for classes before September.',
      exUa: 'Студенти повинні зареєструватися на заняття до вересня.',
    },
    {
      pos: 'noun',
      translation: 'журнал',
      exEn: 'The teacher checked the attendance register every morning.',
      exUa: 'Вчителька щоранку перевіряла журнал відвідуваності.',
    },
  ],
  regret: [
    {
      pos: 'v',
      translation: 'шкодувати',
      exEn: 'She regrets not studying abroad when she had the chance.',
      exUa: 'Вона шкодує, що не навчалася за кордоном, коли мала таку можливість.',
    },
    {
      pos: 'noun',
      translation: 'жаль',
      exEn: 'He expressed deep regret for his mistake.',
      exUa: 'Він висловив глибокий жаль за свою помилку.',
    },
  ],
  rein: [
    {
      pos: 'noun',
      translation: 'поводи',
      exEn: 'She pulled gently on the reins to slow the horse.',
      exUa: 'Вона обережно потягнула за поводи, щоб сповільнити коня.',
    },
    {
      pos: 'v',
      translation: 'стримувати',
      exEn: 'The government tried to rein in inflation.',
      exUa: 'Уряд намагався стримати інфляцію.',
    },
  ],
  relay: [
    {
      pos: 'v',
      translation: 'передавати',
      exEn: 'She relayed the message to the rest of the team.',
      exUa: 'Вона передала повідомлення решті команди.',
    },
    {
      pos: 'noun',
      translation: 'естафета',
      exEn: 'Their team won the relay race at the school championship.',
      exUa: 'Їхня команда виграла естафету на шкільному чемпіонаті.',
    },
  ],
  relish: [
    {
      pos: 'v',
      translation: 'насолоджуватися',
      exEn: 'She relished every moment of her vacation.',
      exUa: 'Вона насолоджувалася кожною миттю своєї відпустки.',
    },
    {
      pos: 'noun',
      translation: 'гострий соус',
      exEn: 'He added a spoonful of relish to his hot dog.',
      exUa: 'Він додав ложку гострого соусу до свого хот-дога.',
    },
  ],
  remark: [
    {
      pos: 'noun',
      translation: 'зауваження',
      exEn: 'His remark about her cooking upset her deeply.',
      exUa: 'Його зауваження про її кулінарію дуже засмутило її.',
    },
    {
      pos: 'v',
      translation: 'зауважувати',
      exEn: 'She remarked that the weather had improved recently.',
      exUa: 'Вона зауважила, що погода нещодавно покращилася.',
    },
  ],
  renaissance: [
    {
      pos: 'noun',
      translation: 'відродження',
      exEn: 'The city experienced a cultural renaissance in the 1990s.',
      exUa: 'Місто пережило культурне відродження у 1990-х.',
    },
    {
      pos: 'noun',
      translation: 'епоха Відродження',
      exEn: "The museum's collection focuses on art from the Renaissance.",
      exUa: 'Колекція музею зосереджена на мистецтві епохи Відродження.',
    },
  ],
  rent: [
    {
      pos: 'noun',
      translation: 'орендна плата',
      exEn: 'They struggled to pay the rent this month.',
      exUa: 'Цього місяця їм було важко сплатити орендну плату.',
    },
    {
      pos: 'v',
      translation: 'орендувати',
      exEn: 'They decided to rent an apartment near the city centre.',
      exUa: 'Вони вирішили орендувати квартиру біля центру міста.',
    },
  ],
  repair: [
    {
      pos: 'v',
      translation: 'ремонтувати',
      exEn: 'He repaired the broken fence over the weekend.',
      exUa: 'Він відремонтував зламаний паркан на вихідних.',
    },
    {
      pos: 'noun',
      translation: 'ремонт',
      exEn: 'The car needs major repair after the accident.',
      exUa: 'Автомобілю потрібен серйозний ремонт після аварії.',
    },
  ],
  reply: [
    {
      pos: 'v',
      translation: 'відповідати',
      exEn: 'She replied to the email within an hour.',
      exUa: 'Вона відповіла на лист протягом години.',
    },
    {
      pos: 'noun',
      translation: 'відповідь',
      exEn: 'His reply came as a complete surprise.',
      exUa: 'Його відповідь стала повною несподіванкою.',
    },
  ],
  report: [
    {
      pos: 'noun',
      translation: 'звіт',
      exEn: 'She submitted her final report on Friday.',
      exUa: "Вона подала свій остаточний звіт у п'ятницю.",
    },
    {
      pos: 'v',
      translation: 'повідомляти',
      exEn: 'Witnesses reported seeing a suspicious car nearby.',
      exUa: 'Свідки повідомили, що бачили поблизу підозрілу машину.',
    },
  ],
  representative: [
    {
      pos: 'adj',
      translation: 'репрезентативний',
      exEn: 'The survey used a representative sample of the population.',
      exUa: 'Опитування використовувало репрезентативну вибірку населення.',
    },
    {
      pos: 'noun',
      translation: 'представник',
      exEn: 'A company representative answered all our questions.',
      exUa: 'Представник компанії відповів на всі наші запитання.',
    },
  ],
  reproach: [
    {
      pos: 'v',
      translation: 'дорікати',
      exEn: 'She reproached him for arriving so late.',
      exUa: 'Вона дорікнула йому за таке запізнення.',
    },
    {
      pos: 'noun',
      translation: 'докір',
      exEn: 'There was a note of reproach in her voice.',
      exUa: 'У її голосі відчувався докір.',
    },
  ],
  request: [
    {
      pos: 'v',
      translation: 'просити',
      exEn: 'She requested a window seat for the flight.',
      exUa: 'Вона попросила місце біля вікна на рейс.',
    },
    {
      pos: 'noun',
      translation: 'прохання',
      exEn: 'The manager granted his request for extra leave.',
      exUa: 'Керівник задовольнив його прохання про додаткову відпустку.',
    },
  ],
  rescue: [
    {
      pos: 'v',
      translation: 'рятувати',
      exEn: 'Firefighters rescued the family from the burning building.',
      exUa: 'Пожежники врятували родину з палаючої будівлі.',
    },
    {
      pos: 'noun',
      translation: 'порятунок',
      exEn: 'The dramatic rescue was broadcast live on television.',
      exUa: 'Драматичний порятунок транслювали в прямому ефірі телебачення.',
    },
  ],
  research: [
    {
      pos: 'noun',
      translation: 'дослідження',
      exEn: 'She conducted years of research into rare diseases.',
      exUa: 'Вона провела роки досліджень рідкісних хвороб.',
    },
    {
      pos: 'v',
      translation: 'досліджувати',
      exEn: 'Scientists are researching new ways to treat cancer.',
      exUa: 'Науковці досліджують нові способи лікування раку.',
    },
  ],
  reserve: [
    {
      pos: 'noun',
      translation: 'резерв',
      exEn: 'The team kept two players in reserve.',
      exUa: 'Команда тримала двох гравців у резерві.',
    },
    {
      pos: 'v',
      translation: 'резервувати',
      exEn: 'She reserved a table at the restaurant for six people.',
      exUa: 'Вона зарезервувала столик у ресторані на шість осіб.',
    },
  ],
  resolution: [
    {
      pos: 'noun',
      translation: 'рішення, постанова',
      exEn: 'The council passed a resolution to protect the park.',
      exUa: 'Рада ухвалила постанову про захист парку.',
    },
    {
      pos: 'noun',
      translation: 'вирішення',
      exEn: 'They finally reached a resolution to the long dispute.',
      exUa: 'Вони нарешті досягли вирішення тривалої суперечки.',
    },
  ],
  resolve: [
    {
      pos: 'v',
      translation: 'вирішувати',
      exEn: 'They managed to resolve the conflict peacefully.',
      exUa: 'Їм вдалося мирно вирішити конфлікт.',
    },
    {
      pos: 'noun',
      translation: 'рішучість',
      exEn: 'Her resolve never weakened despite the setbacks.',
      exUa: 'Її рішучість жодного разу не ослабла, попри невдачі.',
    },
  ],
  resort: [
    {
      pos: 'noun',
      translation: 'курорт',
      exEn: 'They spent their honeymoon at a beach resort.',
      exUa: 'Вони провели медовий місяць на пляжному курорті.',
    },
    {
      pos: 'v',
      translation: 'вдаватися до',
      exEn: 'He resorted to begging for help when the deadline approached.',
      exUa: 'Він вдався до благань про допомогу, коли наближався дедлайн.',
    },
  ],
  restraint: [
    {
      pos: 'noun',
      translation: 'стриманість',
      exEn: 'She showed remarkable restraint during the heated argument.',
      exUa: 'Вона виявила дивовижну стриманість під час гострої суперечки.',
    },
    {
      pos: 'noun',
      translation: 'обмеження',
      exEn: 'The new rules impose strict restraints on spending.',
      exUa: 'Нові правила накладають суворі обмеження на витрати.',
    },
  ],
  resume: [
    {
      pos: 'v',
      translation: 'відновлювати',
      exEn: 'Trading resumed after a brief pause.',
      exUa: 'Торгівля відновилася після короткої паузи.',
    },
    {
      pos: 'noun',
      translation: 'резюме',
      exEn: 'She updated her resume before applying for the job.',
      exUa: 'Вона оновила своє резюме перед подачею заявки на роботу.',
    },
  ],
  retreat: [
    {
      pos: 'v',
      translation: 'відступати',
      exEn: 'The soldiers retreated after suffering heavy losses.',
      exUa: 'Солдати відступили після значних втрат.',
    },
    {
      pos: 'noun',
      translation: 'відступ',
      exEn: "The army's retreat was carefully organised.",
      exUa: 'Відступ армії був ретельно організований.',
    },
  ],
  return: [
    {
      pos: 'v',
      translation: 'повертатися',
      exEn: 'She plans to return home next Friday.',
      exUa: "Вона планує повернутися додому наступної п'ятниці.",
    },
    {
      pos: 'noun',
      translation: 'повернення',
      exEn: 'His return to the team was welcomed by all the fans.',
      exUa: 'Його повернення до команди привітали всі фанати.',
    },
  ],
  reverse: [
    {
      pos: 'v',
      translation: 'здавати назад',
      exEn: 'He carefully reversed the truck into the narrow driveway.',
      exUa: "Він обережно здав задом вантажівку на вузьку під'їзну доріжку.",
    },
    {
      pos: 'adj',
      translation: 'зворотний',
      exEn: 'They took the reverse route back to avoid traffic.',
      exUa: 'Вони поїхали зворотним маршрутом, щоб уникнути затору.',
    },
  ],
  review: [
    {
      pos: 'noun',
      translation: 'огляд',
      exEn: 'The film received a glowing review from critics.',
      exUa: 'Фільм отримав захопливий огляд від критиків.',
    },
    {
      pos: 'v',
      translation: 'перевіряти',
      exEn: 'She reviewed the contract carefully before signing.',
      exUa: 'Вона ретельно перевірила контракт, перш ніж підписати.',
    },
  ],
  revolt: [
    {
      pos: 'v',
      translation: 'бунтувати',
      exEn: 'The people revolted against the unfair new taxes.',
      exUa: 'Люди повстали проти несправедливих нових податків.',
    },
    {
      pos: 'noun',
      translation: 'повстання',
      exEn: 'The revolt was crushed within a few days.',
      exUa: 'Повстання придушили протягом кількох днів.',
    },
  ],
  reward: [
    {
      pos: 'v',
      translation: 'винагороджувати',
      exEn: 'The company rewards employees who exceed their targets.',
      exUa: 'Компанія винагороджує працівників, які перевищують свої показники.',
    },
    {
      pos: 'noun',
      translation: 'нагорода',
      exEn: 'She received a generous reward for returning the lost wallet.',
      exUa: 'Вона отримала щедру нагороду за повернення загубленого гаманця.',
    },
  ],
  rhyme: [
    {
      pos: 'noun',
      translation: 'рима',
      exEn: 'The poem uses a simple rhyme scheme.',
      exUa: 'Вірш використовує просту схему рими.',
    },
    {
      pos: 'v',
      translation: 'римуватися',
      exEn: "The word 'cat' rhymes with 'hat'.",
      exUa: "Слово 'cat' римується зі словом 'hat'.",
    },
  ],
  ride: [
    {
      pos: 'v',
      translation: 'їздити',
      exEn: 'She rides her bicycle to work every day.',
      exUa: 'Вона щодня їздить на роботу на велосипеді.',
    },
    {
      pos: 'noun',
      translation: 'поїздка',
      exEn: 'The ride to the airport took almost an hour.',
      exUa: 'Поїздка до аеропорту зайняла майже годину.',
    },
  ],
  rifle: [
    {
      pos: 'noun',
      translation: 'гвинтівка',
      exEn: 'The hunter carried an old rifle over his shoulder.',
      exUa: 'Мисливець ніс стару гвинтівку через плече.',
    },
    {
      pos: 'v',
      translation: 'обшукати',
      exEn: 'Someone had rifled through her desk drawers.',
      exUa: 'Хтось обшукав шухляди її столу.',
    },
  ],
  rig: [
    {
      pos: 'noun',
      translation: 'обладнання',
      exEn: 'Workers repaired the oil rig after the storm.',
      exUa: 'Робітники відремонтували нафтову вишку після шторму.',
    },
    {
      pos: 'v',
      translation: 'маніпулювати',
      exEn: 'The scandal revealed that officials had rigged the election.',
      exUa: 'Скандал показав, що чиновники сфальсифікували вибори.',
    },
  ],
  'ring (rang, rung)': [
    {
      pos: 'v',
      translation: 'дзвонити',
      exEn: 'Please ring me when you arrive at the station.',
      exUa: 'Будь ласка, зателефонуй мені, коли прибудеш на станцію.',
    },
    {
      pos: 'noun',
      translation: 'кільце',
      exEn: 'He proposed with a beautiful diamond ring.',
      exUa: 'Він зробив пропозицію з красивим діамантовим кільцем.',
    },
  ],
  riot: [
    {
      pos: 'noun',
      translation: 'заворушення',
      exEn: 'The riot broke out after the controversial verdict.',
      exUa: 'Заворушення спалахнули після суперечливого вироку.',
    },
    {
      pos: 'v',
      translation: 'бешкетувати',
      exEn: 'Fans rioted in the streets after their team lost.',
      exUa: 'Фанати бешкетували на вулицях після поразки своєї команди.',
    },
  ],
  ripple: [
    {
      pos: 'noun',
      translation: 'брижа',
      exEn: 'A gentle ripple spread across the still pond.',
      exUa: 'Легка брижа розійшлася по тихому ставку.',
    },
    {
      pos: 'v',
      translation: 'поширюватися',
      exEn: 'News of the scandal rippled through the entire office.',
      exUa: 'Новина про скандал поширилася по всьому офісу.',
    },
  ],
  'rise (rose, risen)': [
    {
      pos: 'v',
      translation: 'підніматися',
      exEn: 'Smoke rose slowly from the chimney.',
      exUa: 'Дим повільно піднімався з димаря.',
    },
    {
      pos: 'noun',
      translation: 'зростання',
      exEn: 'There was a sudden rise in temperature yesterday.',
      exUa: 'Учора відбулося раптове зростання температури.',
    },
  ],
  rivet: [
    {
      pos: 'noun',
      translation: 'заклепка',
      exEn: 'The engineer checked every rivet on the old bridge.',
      exUa: 'Інженер перевірив кожну заклепку на старому мосту.',
    },
    {
      pos: 'v',
      translation: 'захоплювати увагу',
      exEn: 'The gripping story riveted the audience from start to finish.',
      exUa: 'Захоплива історія прикувала увагу глядачів від початку до кінця.',
    },
  ],
  roar: [
    {
      pos: 'v',
      translation: 'ревти',
      exEn: 'Lions roared in the distance during the night safari.',
      exUa: 'Леви ревли вдалині під час нічного сафарі.',
    },
    {
      pos: 'noun',
      translation: 'гуркіт',
      exEn: 'The roar of the engine echoed through the valley.',
      exUa: 'Гуркіт двигуна лунав по долині.',
    },
  ],
  roast: [
    {
      pos: 'v',
      translation: 'смажити',
      exEn: 'She roasted the chicken with herbs and lemon.',
      exUa: 'Вона запекла курку з травами та лимоном.',
    },
    {
      pos: 'noun',
      translation: "смажене м'ясо",
      exEn: 'They served a Sunday roast with all the trimmings.',
      exUa: "Вони подали недільне смажене м'ясо з усіма гарнірами.",
    },
  ],
  roll: [
    {
      pos: 'v',
      translation: 'котитися',
      exEn: 'The ball rolled down the hill and into the street.',
      exUa: 'М\'яч котився з пагорба на вулицю.',
    },
    {
      pos: 'noun',
      translation: 'рулон',
      exEn: 'She bought a new roll of paper towels.',
      exUa: 'Вона купила новий рулон паперових рушників.',
    },
  ],
  root: [
    {
      pos: 'noun',
      translation: 'корінь',
      exEn: 'The old oak had deep, sprawling roots.',
      exUa: 'Старий дуб мав глибоке розлоге коріння.',
    },
    {
      pos: 'v',
      translation: 'укорінюватися',
      exEn: 'The tradition rooted itself deeply in local culture.',
      exUa: 'Традиція глибоко вкоренилася в місцевій культурі.',
    },
  ],
  round: [
    {
      pos: 'adj',
      translation: 'кругий',
      exEn: 'The table had a round wooden top.',
      exUa: 'Стіл мав круглу дерев\'яну стільницю.',
    },
    {
      pos: 'noun',
      translation: 'раунд',
      exEn: 'The boxer won the fight in the third round.',
      exUa: 'Боксер виграв бій у третьому раунді.',
    },
    {
      pos: 'v',
      translation: 'обходити',
      exEn: 'The road rounds the lake before reaching the village.',
      exUa: 'Дорога обходить озеро, перш ніж дістатися до села.',
    },
  ],
  roundabout: [
    {
      pos: 'noun',
      translation: "кільцева розв'язка",
      exEn: "There's a large roundabout just before the town centre.",
      exUa: "Перед центром міста є велика кільцева розв'язка.",
    },
    {
      pos: 'adj',
      translation: 'непрямий',
      exEn: 'He gave a roundabout answer instead of a direct one.',
      exUa: 'Він дав непряму відповідь замість прямої.',
    },
  ],
  routine: [
    {
      pos: 'noun',
      translation: 'звичний порядок, рутина',
      exEn: 'She has a strict morning routine before work.',
      exUa: 'У неї є суворий ранковий розпорядок перед роботою.',
    },
    {
      pos: 'adj',
      translation: 'рутинний',
      exEn: 'It was just a routine check-up at the dentist.',
      exUa: 'Це був просто рутинний огляд у стоматолога.',
    },
  ],
  row: [
    {
      pos: 'noun',
      translation: 'ряд',
      exEn: 'They sat in the front row of the theatre.',
      exUa: 'Вони сиділи в першому ряду театру.',
    },
    {
      pos: 'noun',
      translation: 'сварка',
      exEn: 'The neighbours had a loud row over the fence.',
      exUa: 'Сусіди мали гучну сварку через паркан.',
    },
    {
      pos: 'v',
      translation: 'гребти',
      exEn: 'They rowed across the lake at sunrise.',
      exUa: 'Вони гребли через озеро на світанку.',
    },
  ],
  rub: [
    {
      pos: 'v',
      translation: 'терти',
      exEn: 'She rubbed her eyes after waking up.',
      exUa: 'Вона потерла очі, прокинувшись.',
    },
    {
      pos: 'noun',
      translation: 'тертя',
      exEn: 'There was noticeable friction between the two managers.',
      exUa: 'Між двома керівниками відчувалося помітне тертя.',
    },
  ],
  ruin: [
    {
      pos: 'noun',
      translation: 'руїна',
      exEn: 'The ancient ruin attracted thousands of tourists each year.',
      exUa: 'Стародавня руїна щороку приваблювала тисячі туристів.',
    },
    {
      pos: 'v',
      translation: 'руйнувати',
      exEn: 'The scandal ruined his political career.',
      exUa: 'Скандал зруйнував його політичну кар\'єру.',
    },
  ],
  rule: [
    {
      pos: 'noun',
      translation: 'правило',
      exEn: 'The school has a strict rule about mobile phones.',
      exUa: 'У школі є суворе правило щодо мобільних телефонів.',
    },
    {
      pos: 'v',
      translation: 'керувати',
      exEn: 'The queen ruled the country for over fifty years.',
      exUa: "Королева керувала країною понад п'ятдесят років.",
    },
  ],
  ruling: [
    {
      pos: 'noun',
      translation: 'постанова, рішення',
      exEn: "The court's ruling surprised many legal experts.",
      exUa: 'Постанова суду здивувала багатьох правових експертів.',
    },
    {
      pos: 'adj',
      translation: 'правлячий',
      exEn: 'The ruling party faced strong criticism after the vote.',
      exUa: 'Правляча партія зіткнулася з серйозною критикою після голосування.',
    },
  ],
  rumble: [
    {
      pos: 'v',
      translation: 'гуркотіти',
      exEn: 'Thunder rumbled in the distance before the storm hit.',
      exUa: 'Грім гуркотів вдалині перед тим, як вдарив шторм.',
    },
    {
      pos: 'noun',
      translation: 'гуркіт',
      exEn: 'She heard a low rumble coming from the basement.',
      exUa: 'Вона почула тихий гуркіт, що долинав з підвалу.',
    },
  ],
  rust: [
    {
      pos: 'noun',
      translation: 'іржа',
      exEn: 'Rust covered the old bicycle chain.',
      exUa: 'Іржа вкривала старий ланцюг велосипеда.',
    },
    {
      pos: 'v',
      translation: 'іржавіти',
      exEn: 'The metal gate began to rust after years in the rain.',
      exUa: 'Металева хвіртка почала іржавіти після років під дощем.',
    },
  ],
  sack: [
    {
      pos: 'noun',
      translation: 'мішок',
      exEn: 'The farmer carried a heavy sack of potatoes.',
      exUa: 'Фермер ніс важкий мішок картоплі.',
    },
    {
      pos: 'v',
      translation: 'звільняти',
      exEn: 'He was sacked from his job after repeated lateness.',
      exUa: 'Його звільнили з роботи через постійні запізнення.',
    },
  ],
  sacrifice: [
    {
      pos: 'v',
      translation: 'жертвувати',
      exEn: 'She sacrificed her weekends to finish the project.',
      exUa: 'Вона пожертвувала своїми вихідними, щоб завершити проєкт.',
    },
    {
      pos: 'noun',
      translation: 'жертва',
      exEn: 'Their success came at a great personal sacrifice.',
      exUa: 'Їхній успіх коштував великої особистої жертви.',
    },
  ],
  saddle: [
    {
      pos: 'noun',
      translation: 'сідло',
      exEn: 'He adjusted the saddle before riding the horse.',
      exUa: 'Він відрегулював сідло, перш ніж сісти на коня.',
    },
    {
      pos: 'v',
      translation: 'обтяжувати',
      exEn: 'She was saddled with all the extra paperwork.',
      exUa: 'Її обтяжили усією додатковою паперовою роботою.',
    },
  ],
  safeguard: [
    {
      pos: 'noun',
      translation: 'захист',
      exEn: 'The new law provides a safeguard for consumer rights.',
      exUa: 'Новий закон забезпечує захист прав споживачів.',
    },
    {
      pos: 'v',
      translation: 'охороняти',
      exEn: "The company took steps to safeguard its employees' data.",
      exUa: 'Компанія вжила заходів, щоб охороняти дані своїх працівників.',
    },
  ],
  'safety valve': [
    {
      pos: 'noun',
      translation: 'клапан безпеки',
      exEn: "The engineer checked the pressure cooker's safety valve.",
      exUa: 'Інженер перевірив запобіжний клапан скороварки.',
    },
    {
      pos: 'noun',
      translation: 'спосіб зняти напруженість',
      exEn: "Sport acts as a safety valve for the players' stress.",
      exUa: 'Спорт слугує способом зняти напруженість для гравців.',
    },
  ],
  sail: [
    {
      pos: 'v',
      translation: 'плисти',
      exEn: 'They sailed across the Atlantic in three weeks.',
      exUa: 'Вони пропливли через Атлантику за три тижні.',
    },
    {
      pos: 'noun',
      translation: 'вітрило',
      exEn: "The wind filled the ship's sail.",
      exUa: 'Вітер наповнив вітрило корабля.',
    },
  ],
  salt: [
    {
      pos: 'noun',
      translation: 'сіль',
      exEn: 'Add a pinch of salt to the soup.',
      exUa: 'Додай щіпку солі до супу.',
    },
    {
      pos: 'v',
      translation: 'солити',
      exEn: 'She salted the fish before cooking it.',
      exUa: 'Вона посолила рибу перед приготуванням.',
    },
  ],
  salvage: [
    {
      pos: 'v',
      translation: 'рятувати',
      exEn: 'She managed to salvage a few irreplaceable photographs from the flooded house.',
      exUa: 'Їй вдалося врятувати кілька незамінних фотографій зі затопленого будинку.',
    },
    {
      pos: 'noun',
      translation: 'порятунок',
      exEn: 'The salvage of the sunken ship took several months.',
      exUa: 'Порятунок затонулого корабля зайняв кілька місяців.',
    },
  ],
  sample: [
    {
      pos: 'noun',
      translation: 'зразок',
      exEn: 'The lab tested a sample of the water.',
      exUa: 'Лабораторія перевірила зразок води.',
    },
    {
      pos: 'v',
      translation: 'пробувати',
      exEn: 'Customers were invited to sample the new products.',
      exUa: 'Клієнтів запросили спробувати нові продукти.',
    },
  ],
  sanction: [
    {
      pos: 'noun',
      translation: 'санкція',
      exEn: 'The country faced international sanctions after the invasion.',
      exUa: 'Країна зіткнулася з міжнародними санкціями після вторгнення.',
    },
    {
      pos: 'v',
      translation: 'санкціонувати',
      exEn: 'The board sanctioned the new policy unanimously.',
      exUa: 'Рада одноголосно санкціонувала нову політику.',
    },
  ],
  sand: [
    {
      pos: 'noun',
      translation: 'пісок',
      exEn: 'The children built a castle out of sand.',
      exUa: 'Діти збудували замок із піску.',
    },
    {
      pos: 'v',
      translation: 'шліфувати',
      exEn: 'He sanded the wooden table before painting it.',
      exUa: 'Він відшліфував дерев\'яний стіл, перш ніж пофарбувати його.',
    },
  ],
  savoury: [
    {
      pos: 'adj',
      translation: 'солоний (на смак)',
      exEn: 'She prefers savoury snacks over sweet ones.',
      exUa: 'Вона надає перевагу солоним закускам, а не солодким.',
    },
    {
      pos: 'adj',
      translation: 'пікантний',
      exEn: 'The dish had a rich, savoury flavour.',
      exUa: 'Страва мала насичений пікантний смак.',
    },
  ],
  saw: [
    {
      pos: 'noun',
      translation: 'пила',
      exEn: 'He bought a new saw for the woodworking project.',
      exUa: 'Він купив нову пилу для столярного проєкту.',
    },
    {
      pos: 'v',
      translation: 'пиляти',
      exEn: 'She sawed the branch into smaller pieces.',
      exUa: 'Вона розпиляла гілку на менші шматки.',
    },
  ],
  scar: [
    {
      pos: 'noun',
      translation: 'шрам',
      exEn: 'He still has a small scar from the accident.',
      exUa: 'У нього досі є невеликий шрам від аварії.',
    },
    {
      pos: 'v',
      translation: 'залишати слід',
      exEn: 'The war scarred an entire generation.',
      exUa: 'Війна залишила слід на цілому поколінні.',
    },
  ],
  scare: [
    {
      pos: 'v',
      translation: 'лякати',
      exEn: 'The loud noise scared the cat under the bed.',
      exUa: 'Гучний звук налякав кота під ліжко.',
    },
    {
      pos: 'noun',
      translation: 'переляк',
      exEn: 'She had quite a scare when the car nearly hit her.',
      exUa: 'Вона добряче перелякалася, коли машина мало не збила її.',
    },
  ],
  schedule: [
    {
      pos: 'noun',
      translation: 'розклад',
      exEn: 'The train is running on schedule today.',
      exUa: 'Сьогодні потяг рухається за розкладом.',
    },
    {
      pos: 'v',
      translation: 'планувати',
      exEn: 'She scheduled all her meetings for Tuesday.',
      exUa: 'Вона запланувала всі свої зустрічі на вівторок.',
    },
  ],
  score: [
    {
      pos: 'noun',
      translation: 'рахунок',
      exEn: 'The final score was two to one.',
      exUa: 'Фінальний рахунок був два до одного.',
    },
    {
      pos: 'v',
      translation: 'здобувати',
      exEn: 'She scored the winning goal in the final minute.',
      exUa: 'Вона забила переможний гол в останню хвилину.',
    },
  ],
  scorn: [
    {
      pos: 'noun',
      translation: 'зневага',
      exEn: 'He looked at the proposal with obvious scorn.',
      exUa: 'Він подивився на пропозицію з очевидною зневагою.',
    },
    {
      pos: 'v',
      translation: 'зневажати',
      exEn: 'She scorned his attempts to apologise.',
      exUa: 'Вона зневажливо поставилася до його спроб вибачитися.',
    },
  ],
  scout: [
    {
      pos: 'noun',
      translation: 'розвідник',
      exEn: 'The army sent a scout ahead to check the terrain.',
      exUa: 'Армія відправила розвідника вперед перевірити місцевість.',
    },
    {
      pos: 'v',
      translation: 'вивідувати',
      exEn: 'Talent agents scout for young players at school matches.',
      exUa: 'Агенти з пошуку талантів вивідують молодих гравців на шкільних матчах.',
    },
  ],
  scrap: [
    {
      pos: 'noun',
      translation: 'уривок, брухт',
      exEn: 'The old car was sold for scrap after the accident.',
      exUa: 'Стару машину продали на брухт після аварії.',
    },
    {
      pos: 'v',
      translation: 'відмовитися',
      exEn: 'They decided to scrap the original plan entirely.',
      exUa: 'Вони вирішили повністю відмовитися від початкового плану.',
    },
  ],
  scratch: [
    {
      pos: 'v',
      translation: 'подряпати',
      exEn: 'The cat scratched the furniture again.',
      exUa: 'Кіт знову подряпав меблі.',
    },
    {
      pos: 'noun',
      translation: 'нуль',
      exEn: 'She built the business from scratch with no outside help.',
      exUa: 'Вона побудувала бізнес з нуля без сторонньої допомоги.',
    },
  ],
  scream: [
    {
      pos: 'v',
      translation: 'кричати',
      exEn: 'She screamed when she saw the spider.',
      exUa: 'Вона закричала, побачивши павука.',
    },
    {
      pos: 'noun',
      translation: 'кричання',
      exEn: 'The scream echoed through the empty house.',
      exUa: 'Крик луною пронісся порожнім будинком.',
    },
  ],
  screen: [
    {
      pos: 'noun',
      translation: 'екран',
      exEn: 'The movie played on a huge outdoor screen.',
      exUa: 'Фільм показували на величезному екрані просто неба.',
    },
    {
      pos: 'v',
      translation: 'відбирати',
      exEn: 'The company screens all job applicants carefully.',
      exUa: 'Компанія ретельно відбирає всіх кандидатів на роботу.',
    },
  ],
  screw: [
    {
      pos: 'noun',
      translation: 'гвинт',
      exEn: 'She tightened the loose screw on the shelf.',
      exUa: 'Вона затягнула розхитаний гвинт на полиці.',
    },
    {
      pos: 'v',
      translation: 'закручувати',
      exEn: 'He screwed the lid tightly onto the jar.',
      exUa: 'Він щільно закрутив кришку на банці.',
    },
  ],
  scribble: [
    {
      pos: 'noun',
      translation: 'каракулі',
      exEn: 'The note was full of illegible scribble.',
      exUa: 'Записка була повна нерозбірливих каракулів.',
    },
    {
      pos: 'v',
      translation: 'нашвидкуруч писати',
      exEn: 'She scribbled a quick note before leaving.',
      exUa: 'Вона нашвидкуруч написала коротку записку перед виходом.',
    },
  ],
  scrub: [
    {
      pos: 'v',
      translation: 'терти',
      exEn: 'She scrubbed the pots until they shone.',
      exUa: 'Вона терла каструлі, поки вони не заблищали.',
    },
    {
      pos: 'noun',
      translation: 'чагарник',
      exEn: 'The trail cut through thick desert scrub.',
      exUa: 'Стежка проходила через густий пустельний чагарник.',
    },
  ],
  search: [
    {
      pos: 'v',
      translation: 'шукати',
      exEn: 'Police searched the house for evidence.',
      exUa: 'Поліція обшукала будинок у пошуках доказів.',
    },
    {
      pos: 'noun',
      translation: 'обшук',
      exEn: 'The officers conducted a thorough search of the property.',
      exUa: 'Офіцери провели ретельний обшук території.',
    },
  ],
  season: [
    {
      pos: 'v',
      translation: 'приправляти',
      exEn: 'Chefs season the soup with fresh herbs.',
      exUa: 'Шеф-кухарі приправляють суп свіжими травами.',
    },
    {
      pos: 'noun',
      translation: 'сезон',
      exEn: 'Autumn is her favourite season of the year.',
      exUa: 'Осінь — її улюблена пора року.',
    },
  ],
  seat: [
    {
      pos: 'noun',
      translation: 'місце',
      exEn: 'She reserved a seat near the window.',
      exUa: 'Вона забронювала місце біля вікна.',
    },
    {
      pos: 'v',
      translation: 'посадити',
      exEn: 'The waiter seated them at a table by the door.',
      exUa: 'Офіціант посадив їх за столик біля дверей.',
    },
  ],
  secure: [
    {
      pos: 'v',
      translation: 'захищати',
      exEn: 'She secured all the windows before leaving.',
      exUa: 'Вона захистила всі вікна перед від\'їздом.',
    },
    {
      pos: 'adj',
      translation: 'безпечний',
      exEn: 'This is a very secure neighbourhood to live in.',
      exUa: 'Це дуже безпечний район для проживання.',
    },
  ],
  seed: [
    {
      pos: 'noun',
      translation: 'насіння',
      exEn: 'She planted the seeds in early spring.',
      exUa: 'Вона посадила насіння рано навесні.',
    },
    {
      pos: 'v',
      translation: 'засівати',
      exEn: 'Farmers seeded the fields before the rainy season.',
      exUa: 'Фермери засіяли поля перед сезоном дощів.',
    },
  ],
  separate: [
    {
      pos: 'v',
      translation: 'відділяти',
      exEn: 'She separated the whites from the yolks.',
      exUa: 'Вона відділила білки від жовтків.',
    },
    {
      pos: 'adj',
      translation: 'окремий',
      exEn: 'They keep their finances completely separate.',
      exUa: 'Вони тримають свої фінанси абсолютно окремо.',
    },
  ],
  set: [
    {
      pos: 'v',
      translation: 'ставити',
      exEn: 'She set the vase carefully on the table.',
      exUa: 'Вона обережно поставила вазу на стіл.',
    },
    {
      pos: 'noun',
      translation: 'набір',
      exEn: 'He bought a new set of tools for the garage.',
      exUa: 'Він купив новий набір інструментів для гаража.',
    },
  ],
  'set (set, set)': [
    {
      pos: 'v',
      translation: 'встановлювати',
      exEn: 'They set new rules for the competition.',
      exUa: 'Вони встановили нові правила для змагання.',
    },
    {
      pos: 'noun',
      translation: 'набір',
      exEn: 'She received a chess set as a birthday present.',
      exUa: 'Вона отримала шаховий набір у подарунок на день народження.',
    },
  ],
  shadow: [
    {
      pos: 'noun',
      translation: 'тінь',
      exEn: 'A long shadow fell across the path at sunset.',
      exUa: 'Довга тінь лягла на стежку на заході сонця.',
    },
    {
      pos: 'v',
      translation: 'слідкувати',
      exEn: 'The detective shadowed the suspect for several days.',
      exUa: 'Детектив слідкував за підозрюваним кілька днів.',
    },
  ],
  shame: [
    {
      pos: 'noun',
      translation: 'сором',
      exEn: 'She felt deep shame after the argument.',
      exUa: 'Вона відчувала глибокий сором після сварки.',
    },
    {
      pos: 'v',
      translation: 'соромити',
      exEn: 'He was shamed publicly for his mistake.',
      exUa: 'Його публічно засоромили за його помилку.',
    },
  ],
  shape: [
    {
      pos: 'noun',
      translation: 'форма',
      exEn: 'The cookie was cut into the shape of a star.',
      exUa: 'Печиво було вирізане у формі зірки.',
    },
    {
      pos: 'v',
      translation: 'формувати',
      exEn: 'Her childhood experiences shaped her entire worldview.',
      exUa: 'Досвід дитинства сформував увесь її світогляд.',
    },
  ],
  share: [
    {
      pos: 'v',
      translation: 'ділитися',
      exEn: 'She shared her lunch with her classmate.',
      exUa: 'Вона поділилася обідом зі своїм однокласником.',
    },
    {
      pos: 'noun',
      translation: 'частка',
      exEn: 'He owns a small share in the company.',
      exUa: 'Йому належить невелика частка в компанії.',
    },
  ],
  shed: [
    {
      pos: 'v',
      translation: 'проливати',
      exEn: 'She shed tears of joy at the wedding.',
      exUa: 'Вона проливала сльози радості на весіллі.',
    },
    {
      pos: 'noun',
      translation: 'сарай',
      exEn: 'He keeps his tools in the garden shed.',
      exUa: 'Він тримає свої інструменти в садовому сараї.',
    },
  ],
  shepherd: [
    {
      pos: 'noun',
      translation: 'пастух',
      exEn: 'The shepherd led his flock across the hills.',
      exUa: 'Пастух вів своє стадо через пагорби.',
    },
    {
      pos: 'v',
      translation: 'пасти',
      exEn: 'He shepherded the tourists safely through the busy market.',
      exUa: 'Він провів туристів безпечно через людний ринок.',
    },
  ],
  shield: [
    {
      pos: 'noun',
      translation: 'щит',
      exEn: 'The knight raised his shield to block the blow.',
      exUa: 'Лицар підняв щит, щоб заблокувати удар.',
    },
    {
      pos: 'v',
      translation: 'захищати',
      exEn: 'She shielded her eyes from the bright sun.',
      exUa: 'Вона захистила очі від яскравого сонця.',
    },
  ],
  shimmer: [
    {
      pos: 'v',
      translation: 'мерехтіти',
      exEn: 'The lake shimmered under the summer sun.',
      exUa: 'Озеро мерехтіло під літнім сонцем.',
    },
    {
      pos: 'noun',
      translation: 'мерехтіння',
      exEn: "The shimmer of the sequins caught everyone's eye.",
      exUa: 'Мерехтіння пайєток привертало увагу всіх.',
    },
  ],
  shin: [
    {
      pos: 'noun',
      translation: 'гомілка',
      exEn: 'She bruised her shin on the coffee table.',
      exUa: 'Вона забила гомілку об журнальний столик.',
    },
    {
      pos: 'v',
      translation: 'дерти ноги',
      exEn: 'The boy shinned up the tree to get his ball.',
      exUa: 'Хлопчик поліз на дерево, щоб дістати м\'яч.',
    },
  ],
  ship: [
    {
      pos: 'noun',
      translation: 'корабель',
      exEn: 'The ship arrived at the port early in the morning.',
      exUa: 'Корабель прибув у порт рано вранці.',
    },
    {
      pos: 'v',
      translation: 'відвантажувати',
      exEn: 'The company ships orders within two business days.',
      exUa: 'Компанія відвантажує замовлення протягом двох робочих днів.',
    },
  ],
  shoes: [
    {
      pos: 'noun',
      translation: 'туфлі',
      exEn: 'She wore elegant black shoes to the party.',
      exUa: 'Вона взула елегантні чорні туфлі на вечірку.',
    },
    {
      pos: 'noun',
      translation: 'взуття',
      exEn: 'This shop sells all kinds of footwear for children.',
      exUa: 'Цей магазин продає взуття всіх видів для дітей.',
    },
  ],
  shortcut: [
    {
      pos: 'noun',
      translation: 'скорочений шлях',
      exEn: 'They took a shortcut through the park to save time.',
      exUa: 'Вони пішли скороченим шляхом через парк, щоб заощадити час.',
    },
    {
      pos: 'noun',
      translation: 'спрощений метод',
      exEn: 'There are no shortcuts to becoming fluent in a language.',
      exUa: 'Немає спрощених методів, щоб вільно оволодіти мовою.',
    },
  ],
  shortlist: [
    {
      pos: 'noun',
      translation: 'список кандидатів',
      exEn: 'She made it onto the shortlist for the position.',
      exUa: 'Вона потрапила до списку кандидатів на цю посаду.',
    },
    {
      pos: 'v',
      translation: 'включати до списку',
      exEn: 'The committee shortlisted five candidates for the final interview.',
      exUa: "Комітет включив п'ятьох кандидатів до списку для фінальної співбесіди.",
    },
  ],
  shoulder: [
    {
      pos: 'noun',
      translation: 'плече',
      exEn: 'He carried the heavy bag on his shoulder.',
      exUa: 'Він ніс важку сумку на плечі.',
    },
    {
      pos: 'v',
      translation: 'нести тягар',
      exEn: 'She had to shoulder the responsibility alone.',
      exUa: 'Їй довелося самій нести тягар відповідальності.',
    },
  ],
  shout: [
    {
      pos: 'v',
      translation: 'кричати',
      exEn: 'He shouted for help when he saw the fire.',
      exUa: 'Він закричав про допомогу, побачивши вогонь.',
    },
    {
      pos: 'noun',
      translation: 'оклик',
      exEn: 'A shout from the crowd startled the horse.',
      exUa: 'Оклик з натовпу налякав коня.',
    },
  ],
  shovel: [
    {
      pos: 'noun',
      translation: 'лопата',
      exEn: "He used a shovel to clear the snow from the driveway.",
      exUa: "Він скористався лопатою, щоб прибрати сніг з під'їзної доріжки.",
    },
    {
      pos: 'v',
      translation: 'гребти лопатою',
      exEn: 'They shovelled sand into the truck all morning.',
      exUa: 'Вони весь ранок гребли лопатою пісок у вантажівку.',
    },
  ],
  show: [
    {
      pos: 'v',
      translation: 'показувати',
      exEn: 'She showed him the photos from her trip.',
      exUa: 'Вона показала йому фотографії зі своєї поїздки.',
    },
    {
      pos: 'noun',
      translation: 'шоу',
      exEn: 'The talent show attracted thousands of viewers.',
      exUa: 'Шоу талантів привабило тисячі глядачів.',
    },
  ],
  showcase: [
    {
      pos: 'noun',
      translation: 'вітрина',
      exEn: 'The gallery is a showcase for local artists.',
      exUa: 'Галерея — це вітрина для місцевих митців.',
    },
    {
      pos: 'v',
      translation: 'демонструвати',
      exEn: 'The event showcased the latest technology.',
      exUa: 'Захід продемонстрував найновіші технології.',
    },
  ],
  shred: [
    {
      pos: 'noun',
      translation: 'шматочок',
      exEn: "There wasn't a shred of evidence against him.",
      exUa: 'Не було жодного шматочка доказів проти нього.',
    },
    {
      pos: 'v',
      translation: 'шинкувати',
      exEn: 'She shredded the cabbage for the salad.',
      exUa: 'Вона нашинкувала капусту для салату.',
    },
  ],
  shriek: [
    {
      pos: 'v',
      translation: 'верещати',
      exEn: 'She shrieked when the spider fell on her arm.',
      exUa: 'Вона заверещала, коли павук впав їй на руку.',
    },
    {
      pos: 'noun',
      translation: 'пронизливий крик',
      exEn: 'A shriek pierced the silence of the night.',
      exUa: 'Пронизливий крик пронизав тишу ночі.',
    },
  ],
  shroud: [
    {
      pos: 'noun',
      translation: 'саван',
      exEn: 'The body was wrapped in a white shroud.',
      exUa: 'Тіло було загорнуте в білий саван.',
    },
    {
      pos: 'v',
      translation: 'окутувати',
      exEn: 'Mist shrouded the entire valley at dawn.',
      exUa: 'Туман окутав всю долину на світанку.',
    },
  ],
  shy: [
    {
      pos: 'adj',
      translation: "сором'язливий",
      exEn: 'She was always shy around strangers.',
      exUa: "Вона завжди була сором'язливою з незнайомцями.",
    },
    {
      pos: 'v',
      translation: 'соромитися',
      exEn: 'He shied away from public speaking for years.',
      exUa: 'Він роками соромився публічних виступів.',
    },
  ],
  sideline: [
    {
      pos: 'noun',
      translation: 'бічна лінія',
      exEn: 'The coach shouted instructions from the sideline.',
      exUa: 'Тренер вигукував інструкції з бічної лінії.',
    },
    {
      pos: 'v',
      translation: 'відсувати',
      exEn: 'The injury sidelined him for the rest of the season.',
      exUa: 'Травма відсунула його від гри до кінця сезону.',
    },
  ],
  sideshow: [
    {
      pos: 'noun',
      translation: 'другорядне шоу',
      exEn: 'The main event was overshadowed by a strange sideshow.',
      exUa: 'Головна подія була затьмарена дивним другорядним шоу.',
    },
    {
      pos: 'noun',
      translation: 'відволікальний маневр',
      exEn: 'The scandal became a sideshow distracting from the real issues.',
      exUa: 'Скандал перетворився на відволікальний маневр від справжніх проблем.',
    },
  ],
  sigh: [
    {
      pos: 'v',
      translation: 'зітхати',
      exEn: 'She sighed with relief when the exam finally ended.',
      exUa: 'Вона зітхнула з полегшенням, коли іспит нарешті закінчився.',
    },
    {
      pos: 'noun',
      translation: 'зітхання',
      exEn: 'A deep sigh escaped him as he sat down.',
      exUa: 'Глибоке зітхання вирвалося в нього, коли він сів.',
    },
  ],
  sign: [
    {
      pos: 'noun',
      translation: 'знак',
      exEn: 'She noticed a sign warning of the steep drop ahead.',
      exUa: 'Вона помітила знак, що попереджав про крутий обрив попереду.',
    },
    {
      pos: 'v',
      translation: 'підписувати',
      exEn: 'He signed the contract without reading it fully.',
      exUa: 'Він підписав контракт, не прочитавши його повністю.',
    },
  ],
  signal: [
    {
      pos: 'noun',
      translation: 'сигнал',
      exEn: 'The train signal turned red suddenly.',
      exUa: 'Потяговий сигнал раптово став червоним.',
    },
    {
      pos: 'v',
      translation: 'сигналізувати',
      exEn: 'She signalled her agreement with a quick nod.',
      exUa: 'Вона сигналізувала про свою згоду швидким кивком.',
    },
  ],
  sin: [
    {
      pos: 'noun',
      translation: 'гріх',
      exEn: 'In many religions, lying is considered a sin.',
      exUa: 'У багатьох релігіях брехня вважається гріхом.',
    },
    {
      pos: 'v',
      translation: 'грішити',
      exEn: 'He believes everyone sins at some point in their life.',
      exUa: 'Він вважає, що кожен колись у житті грішить.',
    },
  ],
  sip: [
    {
      pos: 'noun',
      translation: 'маленький ковток',
      exEn: 'She took a small sip of the hot tea.',
      exUa: 'Вона зробила маленький ковток гарячого чаю.',
    },
    {
      pos: 'v',
      translation: 'потягувати',
      exEn: 'He sipped his coffee slowly while reading the newspaper.',
      exUa: 'Він повільно потягував каву, читаючи газету.',
    },
  ],
  sketch: [
    {
      pos: 'noun',
      translation: 'ескіз',
      exEn: 'The architect drew a quick sketch of the building.',
      exUa: 'Архітектор швидко намалював ескіз будівлі.',
    },
    {
      pos: 'v',
      translation: 'малювати',
      exEn: 'She sketched the mountains from memory.',
      exUa: "Вона намалювала гори по пам'яті.",
    },
  ],
  skin: [
    {
      pos: 'noun',
      translation: 'шкіра',
      exEn: 'She applied sunscreen to protect her skin.',
      exUa: 'Вона нанесла сонцезахисний крем, щоб захистити шкіру.',
    },
    {
      pos: 'v',
      translation: 'чистити',
      exEn: 'He skinned the potatoes before boiling them.',
      exUa: 'Він почистив картоплю, перш ніж варити.',
    },
  ],
  skirt: [
    {
      pos: 'noun',
      translation: 'спідниця',
      exEn: 'She wore a long floral skirt to the party.',
      exUa: 'Вона вдягла довгу квіткову спідницю на вечірку.',
    },
    {
      pos: 'v',
      translation: 'обходити',
      exEn: 'The politician skirted the difficult question entirely.',
      exUa: 'Політик повністю обійшов складне питання.',
    },
  ],
  slack: [
    {
      pos: 'v',
      translation: 'розслаблятися',
      exEn: 'She decided to slack off after finishing the big project.',
      exUa: 'Вона вирішила розслабитися після завершення великого проєкту.',
    },
    {
      pos: 'adj',
      translation: 'слабкий',
      exEn: 'The rope went slack when he let go of it.',
      exUa: 'Мотузка обвисла, коли він її відпустив.',
    },
  ],
  slander: [
    {
      pos: 'noun',
      translation: 'наклеп, обмова',
      exEn: 'He sued the newspaper for slander.',
      exUa: 'Він подав до суду на газету за наклеп.',
    },
    {
      pos: 'v',
      translation: 'наклепляти',
      exEn: 'She accused him of slandering her reputation.',
      exUa: 'Вона звинуватила його в наклепі на її репутацію.',
    },
  ],
  slant: [
    {
      pos: 'noun',
      translation: 'нахил',
      exEn: 'The roof has a steep slant to let rain run off.',
      exUa: 'Дах має крутий нахил, щоб дощ стікав.',
    },
    {
      pos: 'v',
      translation: 'подавати упереджено',
      exEn: 'The article seemed to slant the facts in his favour.',
      exUa: 'Стаття, здається, подавала факти упереджено на його користь.',
    },
  ],
  slap: [
    {
      pos: 'v',
      translation: 'ляскати',
      exEn: 'He slapped the table in frustration.',
      exUa: 'Він ляснув по столу від роздратування.',
    },
    {
      pos: 'noun',
      translation: 'ляпас',
      exEn: 'She gave him a sharp slap across the face.',
      exUa: 'Вона дала йому різкого ляпаса по обличчю.',
    },
  ],
  slash: [
    {
      pos: 'v',
      translation: 'різко скорочувати',
      exEn: 'The company slashed its prices for the sale.',
      exUa: 'Компанія різко скоротила ціни для розпродажу.',
    },
    {
      pos: 'noun',
      translation: 'косий удар',
      exEn: 'The fencer landed a quick slash with his sword.',
      exUa: 'Фехтувальник завдав швидкого косого удару мечем.',
    },
  ],
  slate: [
    {
      pos: 'noun',
      translation: 'сланець',
      exEn: 'The roof was covered in traditional grey slate.',
      exUa: 'Дах був вкритий традиційним сірим сланцем.',
    },
    {
      pos: 'v',
      translation: 'критикувати',
      exEn: 'Critics slated the film for its weak plot.',
      exUa: 'Критики розкритикували фільм за слабкий сюжет.',
    },
  ],
  slaughter: [
    {
      pos: 'noun',
      translation: 'різня',
      exEn: 'The battle turned into a senseless slaughter.',
      exUa: 'Битва перетворилася на безглузду різню.',
    },
    {
      pos: 'v',
      translation: 'вбивати',
      exEn: 'The farmer slaughtered the pig for the winter.',
      exUa: 'Фермер забив свиню на зиму.',
    },
  ],
  slave: [
    {
      pos: 'noun',
      translation: 'раб',
      exEn: 'The novel tells the story of a former slave.',
      exUa: 'Роман розповідає історію колишнього раба.',
    },
    {
      pos: 'v',
      translation: 'горбатитися',
      exEn: 'She slaved away at two jobs to support her family.',
      exUa: 'Вона горбатилася на двох роботах, щоб утримувати родину.',
    },
  ],
  sleep: [
    {
      pos: 'v',
      translation: 'спати',
      exEn: 'The baby finally fell asleep after hours of crying.',
      exUa: 'Немовля нарешті заснуло після кількох годин плачу.',
    },
    {
      pos: 'noun',
      translation: 'сон',
      exEn: 'She needs at least eight hours of sleep every night.',
      exUa: 'Їй потрібно щонайменше вісім годин сну щоночі.',
    },
  ],
  slice: [
    {
      pos: 'noun',
      translation: 'скибка',
      exEn: 'She cut a thick slice of bread for breakfast.',
      exUa: 'Вона відрізала товсту скибку хліба на сніданок.',
    },
    {
      pos: 'v',
      translation: 'нарізати',
      exEn: 'He sliced the tomatoes for the salad.',
      exUa: 'Він нарізав помідори для салату.',
    },
  ],
  'slide (slid, slid)': [
    {
      pos: 'v',
      translation: 'ковзати',
      exEn: 'The children loved to slide down the icy hill.',
      exUa: 'Діти любили ковзати з крижаного пагорба.',
    },
    {
      pos: 'noun',
      translation: 'слайд',
      exEn: 'She added a new slide to her presentation.',
      exUa: 'Вона додала новий слайд до своєї презентації.',
    },
  ],
  slim: [
    {
      pos: 'adj',
      translation: 'струнка',
      exEn: 'She has always had a slim figure.',
      exUa: 'У неї завжди була струнка фігура.',
    },
    {
      pos: 'v',
      translation: 'скорочувати',
      exEn: 'The company slimmed down its workforce during the recession.',
      exUa: 'Компанія скоротила штат під час рецесії.',
    },
  ],
  slip: [
    {
      pos: 'v',
      translation: 'ковзати',
      exEn: 'She slipped on the icy pavement and fell.',
      exUa: 'Вона посковзнулася на крижаному тротуарі й впала.',
    },
    {
      pos: 'noun',
      translation: 'помилка',
      exEn: 'It was just a small slip in her otherwise perfect speech.',
      exUa: 'Це була лише невелика помилка в її бездоганній в іншому промові.',
    },
  ],
  slit: [
    {
      pos: 'noun',
      translation: 'щілина',
      exEn: 'Light came through a thin slit in the curtains.',
      exUa: 'Світло проходило крізь тонку щілину у фіранках.',
    },
    {
      pos: 'v',
      translation: 'розрізати',
      exEn: 'He slit the envelope open with a knife.',
      exUa: 'Він розрізав конверт ножем.',
    },
  ],
  slot: [
    {
      pos: 'noun',
      translation: 'щілина',
      exEn: 'Insert the coin into the slot.',
      exUa: 'Вставте монету в щілину.',
    },
    {
      pos: 'v',
      translation: 'вставляти',
      exEn: 'She slotted the new battery into the remote.',
      exUa: 'Вона вставила нову батарейку в пульт.',
    },
  ],
  sloth: [
    {
      pos: 'noun',
      translation: 'лінощі, ледачість',
      exEn: 'Sloth is considered one of the seven deadly sins.',
      exUa: 'Ледачість вважається одним із семи смертних гріхів.',
    },
    {
      pos: 'noun',
      translation: 'лінивець',
      exEn: "The zoo's newest resident is a slow-moving sloth.",
      exUa: 'Найновіший мешканець зоопарку — повільний лінивець.',
    },
  ],
  slump: [
    {
      pos: 'v',
      translation: 'різко впасти',
      exEn: 'Sales slumped dramatically after the scandal.',
      exUa: 'Продажі різко впали після скандалу.',
    },
    {
      pos: 'noun',
      translation: 'занепад',
      exEn: 'The economy entered a serious slump last year.',
      exUa: 'Економіка увійшла в серйозний занепад минулого року.',
    },
  ],
  slur: [
    {
      pos: 'noun',
      translation: 'образливий натяк',
      exEn: 'He was fired for making a racial slur.',
      exUa: 'Його звільнили за образливий расистський натяк.',
    },
    {
      pos: 'v',
      translation: 'мовити нечітко',
      exEn: 'He slurred his words after drinking too much.',
      exUa: 'Він нечітко вимовляв слова, випивши забагато.',
    },
  ],
  smack: [
    {
      pos: 'v',
      translation: 'шльопати',
      exEn: 'She smacked her hand on the table to get attention.',
      exUa: 'Вона хляснула рукою по столу, щоб привернути увагу.',
    },
    {
      pos: 'noun',
      translation: 'пряме влучення',
      exEn: 'He received a smack right on the nose.',
      exUa: 'Він отримав пряме влучення прямо в ніс.',
    },
  ],
  smear: [
    {
      pos: 'v',
      translation: 'мазати',
      exEn: 'She smeared paint across the canvas.',
      exUa: 'Вона розмазала фарбу по полотну.',
    },
    {
      pos: 'noun',
      translation: 'наклеп',
      exEn: 'The article was widely seen as a political smear.',
      exUa: 'Статтю широко сприймали як політичний наклеп.',
    },
  ],
  smile: [
    {
      pos: 'v',
      translation: 'посміхатися',
      exEn: 'She smiled warmly at the young child.',
      exUa: 'Вона тепло посміхнулася до маленької дитини.',
    },
    {
      pos: 'noun',
      translation: 'посмішка',
      exEn: 'His friendly smile put everyone at ease.',
      exUa: 'Його дружня посмішка заспокоювала всіх.',
    },
  ],
  smirk: [
    {
      pos: 'v',
      translation: 'ухмилятися',
      exEn: 'He smirked when he saw her mistake.',
      exUa: 'Він ухмилявся, побачивши її помилку.',
    },
    {
      pos: 'noun',
      translation: 'ухмилка',
      exEn: 'There was a hint of a smirk on her face.',
      exUa: 'На її обличчі промайнула легка ухмилка.',
    },
  ],
  smooth: [
    {
      pos: 'adj',
      translation: 'гладкий',
      exEn: 'The stone was worn perfectly smooth by the river.',
      exUa: 'Камінь був досконало гладким, обточений річкою.',
    },
    {
      pos: 'v',
      translation: "пом'якшувати",
      exEn: 'She smoothed things over after the argument.',
      exUa: 'Вона згладила ситуацію після сварки.',
    },
  ],
  smudge: [
    {
      pos: 'noun',
      translation: 'пляма',
      exEn: 'There was an ink smudge on the paper.',
      exUa: 'На папері була чорнильна пляма.',
    },
    {
      pos: 'v',
      translation: 'розмазувати',
      exEn: 'She accidentally smudged her lipstick.',
      exUa: 'Вона випадково розмазала свою помаду.',
    },
  ],
  snag: [
    {
      pos: 'v',
      translation: 'зачепитися',
      exEn: 'Her sweater snagged on the fence.',
      exUa: 'Її светр зачепився за паркан.',
    },
    {
      pos: 'noun',
      translation: 'перешкода',
      exEn: "There was a small snag in the plan they hadn't anticipated.",
      exUa: 'У плані виникла невелика перешкода, якої вони не передбачили.',
    },
  ],
  snake: [
    {
      pos: 'noun',
      translation: 'змія',
      exEn: 'A snake slithered through the grass.',
      exUa: 'Змія проповзла крізь траву.',
    },
    {
      pos: 'v',
      translation: 'звивисто рухатися',
      exEn: 'The path snaked through the dense forest.',
      exUa: 'Стежка звивисто йшла через густий ліс.',
    },
  ],
  sneer: [
    {
      pos: 'v',
      translation: 'глузувати',
      exEn: 'He sneered at her attempt to apologise.',
      exUa: 'Він поглузував з її спроби вибачитися.',
    },
    {
      pos: 'noun',
      translation: 'зневажлива усмішка',
      exEn: 'There was a sneer on his face as he walked away.',
      exUa: 'На його обличчі була зневажлива усмішка, коли він відходив.',
    },
  ],
  snowball: [
    {
      pos: 'noun',
      translation: 'сніжний ком',
      exEn: 'The children threw snowballs at each other.',
      exUa: 'Діти кидали одне в одного сніжками.',
    },
    {
      pos: 'v',
      translation: 'наростати',
      exEn: 'Small problems began to snowball into a major crisis.',
      exUa: 'Дрібні проблеми почали наростати як сніжний ком, перетворюючись на серйозну кризу.',
    },
  ],
  sock: [
    {
      pos: 'noun',
      translation: 'шкарпетка',
      exEn: 'She pulled on thick woollen socks before going outside.',
      exUa: 'Вона натягнула товсті вовняні шкарпетки перед виходом надвір.',
    },
    {
      pos: 'v',
      translation: 'вдарити',
      exEn: 'He socked his opponent right in the jaw.',
      exUa: 'Він вдарив суперника прямо в щелепу.',
    },
  ],
  soil: [
    {
      pos: 'noun',
      translation: 'ґрунт',
      exEn: 'The soil in this region is rich and fertile.',
      exUa: 'Ґрунт у цьому регіоні багатий і родючий.',
    },
    {
      pos: 'v',
      translation: 'забруднювати',
      exEn: 'Try not to soil your clean clothes.',
      exUa: 'Намагайся не забруднити свій чистий одяг.',
    },
  ],
  solidify: [
    {
      pos: 'v',
      translation: 'затвердіти',
      exEn: 'The melted wax solidified as it cooled.',
      exUa: 'Розплавлений віск затвердів, охолоджуючись.',
    },
    {
      pos: 'v',
      translation: 'зміцнити, закріпити',
      exEn: 'The victory solidified his reputation as a champion.',
      exUa: 'Перемога зміцнила його репутацію чемпіона.',
    },
  ],
  sort: [
    {
      pos: 'noun',
      translation: 'вид',
      exEn: 'What sort of music do you enjoy?',
      exUa: 'Який вид музики тобі подобається?',
    },
    {
      pos: 'v',
      translation: 'сортувати',
      exEn: 'She sorted the mail into separate piles.',
      exUa: 'Вона розсортувала пошту на окремі стоси.',
    },
  ],
  sour: [
    {
      pos: 'adj',
      translation: 'кислий',
      exEn: 'The lemon was too sour for her taste.',
      exUa: 'Лимон був занадто кислим на її смак.',
    },
    {
      pos: 'v',
      translation: 'скисати',
      exEn: 'The milk soured after being left out overnight.',
      exUa: 'Молоко скисло, простоявши всю ніч поза холодильником.',
    },
  ],
  span: [
    {
      pos: 'v',
      translation: 'охоплювати',
      exEn: 'Her career spanned over four decades.',
      exUa: 'Її кар\'єра охоплювала понад чотири десятиліття.',
    },
    {
      pos: 'noun',
      translation: 'проміжок',
      exEn: 'The bridge has a span of nearly two kilometres.',
      exUa: 'Проміжок мосту становить майже два кілометри.',
    },
  ],
  spare: [
    {
      pos: 'adj',
      translation: 'запасний',
      exEn: 'She kept a spare key under the doormat.',
      exUa: 'Вона тримала запасний ключ під килимком.',
    },
    {
      pos: 'v',
      translation: 'жаліти',
      exEn: "He didn't spare her feelings when he criticised the plan.",
      exUa: 'Він не пожалів її почуттів, критикуючи план.',
    },
  ],
  spark: [
    {
      pos: 'noun',
      translation: 'іскра',
      exEn: 'A single spark from the fire started the blaze.',
      exUa: 'Одна іскра від вогнища спричинила пожежу.',
    },
    {
      pos: 'v',
      translation: 'запалювати',
      exEn: 'The speech sparked a wave of public support.',
      exUa: 'Промова запалила хвилю суспільної підтримки.',
    },
  ],
  spear: [
    {
      pos: 'noun',
      translation: 'спис',
      exEn: 'The warrior carried a long spear into battle.',
      exUa: 'Воїн ніс довгий спис у бій.',
    },
    {
      pos: 'v',
      translation: 'пронизувати',
      exEn: 'The fisherman speared a large fish in the shallow water.',
      exUa: 'Рибалка проколов списом велику рибу на мілководді.',
    },
  ],
  spell: [
    {
      pos: 'noun',
      translation: 'заклинання',
      exEn: 'The witch cast a powerful spell.',
      exUa: 'Відьма наклала потужне заклинання.',
    },
    {
      pos: 'v',
      translation: 'вимовляти по буквах',
      exEn: 'Could you spell your last name for me?',
      exUa: 'Чи не могли б ви вимовити своє прізвище по буквах?',
    },
  ],
  spike: [
    {
      pos: 'noun',
      translation: 'шип',
      exEn: 'The fence was topped with sharp metal spikes.',
      exUa: 'Паркан був увінчаний гострими металевими шипами.',
    },
    {
      pos: 'v',
      translation: 'різко підскочити',
      exEn: 'Prices spiked dramatically after the shortage.',
      exUa: 'Ціни різко підскочили після дефіциту.',
    },
  ],
  spit: [
    {
      pos: 'v',
      translation: 'плювати',
      exEn: 'He spat on the ground in disgust.',
      exUa: 'Він плюнув на землю з огидою.',
    },
    {
      pos: 'noun',
      translation: 'рожен',
      exEn: 'The meat was roasted slowly on a spit.',
      exUa: "М'ясо повільно смажили на рожні.",
    },
  ],
  splash: [
    {
      pos: 'v',
      translation: 'плескати',
      exEn: 'The children splashed water at each other in the pool.',
      exUa: 'Діти плескали одне в одного водою в басейні.',
    },
    {
      pos: 'noun',
      translation: 'бризки',
      exEn: 'A splash of mud covered her white shoes.',
      exUa: 'Бризки грязюки вкрили її білі туфлі.',
    },
  ],
  splinter: [
    {
      pos: 'noun',
      translation: 'скалка',
      exEn: 'She got a splinter in her finger from the old fence.',
      exUa: 'Вона загнала скалку в палець зі старого паркану.',
    },
    {
      pos: 'v',
      translation: 'розколюватися',
      exEn: 'The old political party splintered into several smaller groups.',
      exUa: 'Стара політична партія розкололася на кілька менших груп.',
    },
  ],
  spoiled: [
    {
      pos: 'adj',
      translation: 'зіпсований (про їжу)',
      exEn: 'The milk had gone spoiled by the time she noticed.',
      exUa: 'Молоко зіпсувалося до того часу, як вона помітила.',
    },
    {
      pos: 'adj',
      translation: 'розпещений (про людину)',
      exEn: 'He was a spoiled child who always got what he wanted.',
      exUa: 'Він був розпещеною дитиною, яка завжди отримувала бажане.',
    },
  ],
  sponge: [
    {
      pos: 'noun',
      translation: 'губка',
      exEn: 'She wiped the counter with a wet sponge.',
      exUa: 'Вона протерла стільницю вологою губкою.',
    },
    {
      pos: 'v',
      translation: 'жити за чужий рахунок',
      exEn: "He's been sponging off his parents for years.",
      exUa: 'Він роками жив за чужий рахунок своїх батьків.',
    },
  ],
  sponsor: [
    {
      pos: 'noun',
      translation: 'спонсор',
      exEn: "The event's main sponsor was a local bank.",
      exUa: 'Головним спонсором заходу був місцевий банк.',
    },
    {
      pos: 'v',
      translation: 'спонсорувати',
      exEn: 'The company sponsors several youth sports teams.',
      exUa: 'Компанія спонсорує кілька молодіжних спортивних команд.',
    },
  ],
  spoon: [
    {
      pos: 'noun',
      translation: 'ложка',
      exEn: 'She stirred her tea with a small spoon.',
      exUa: 'Вона розмішала чай маленькою ложкою.',
    },
    {
      pos: 'v',
      translation: 'годувати з ложки',
      exEn: "The mother spooned soup into the baby's mouth.",
      exUa: 'Мама годувала малюка супом з ложки.',
    },
  ],
  spotlight: [
    {
      pos: 'noun',
      translation: 'прожектор',
      exEn: 'The dancer stood alone under the bright spotlight.',
      exUa: 'Танцівниця стояла сама під яскравим прожектором.',
    },
    {
      pos: 'v',
      translation: 'привертати увагу',
      exEn: 'The scandal spotlighted serious problems within the organisation.',
      exUa: 'Скандал привернув увагу до серйозних проблем в організації.',
    },
  ],
  'spring (sprang, sprung)': [
    {
      pos: 'v',
      translation: 'стрибати',
      exEn: 'She sprang out of bed when the alarm rang.',
      exUa: 'Вона зістрибнула з ліжка, коли задзвонив будильник.',
    },
    {
      pos: 'noun',
      translation: 'пружина',
      exEn: 'The old mattress had a broken spring.',
      exUa: 'У старому матраці була зламана пружина.',
    },
  ],
  sprint: [
    {
      pos: 'noun',
      translation: 'спринт',
      exEn: 'She trains for the hundred-metre sprint every day.',
      exUa: 'Вона щодня тренується для стометрового спринту.',
    },
    {
      pos: 'v',
      translation: 'бігти на короткі дистанції',
      exEn: 'He sprinted the last hundred metres to win the race.',
      exUa: 'Він пробіг спринтом останні сто метрів, щоб виграти забіг.',
    },
  ],
  sprout: [
    {
      pos: 'v',
      translation: 'проростати',
      exEn: 'The seeds began to sprout after a few days.',
      exUa: 'Насіння почало проростати через кілька днів.',
    },
    {
      pos: 'noun',
      translation: 'паросток',
      exEn: 'A tiny green sprout appeared in the pot.',
      exUa: "У горщику з'явився крихітний зелений паросток.",
    },
  ],
  spur: [
    {
      pos: 'noun',
      translation: 'шпора',
      exEn: 'The rider gently touched the horse with his spur.',
      exUa: 'Вершник обережно торкнувся коня шпорою.',
    },
    {
      pos: 'v',
      translation: 'підштовхувати',
      exEn: 'The competition spurred them to work even harder.',
      exUa: 'Конкуренція підштовхнула їх працювати ще старанніше.',
    },
  ],
  spy: [
    {
      pos: 'noun',
      translation: 'шпигун',
      exEn: 'The novel is about a Cold War spy.',
      exUa: 'Роман про шпигуна часів Холодної війни.',
    },
    {
      pos: 'v',
      translation: 'шпигувати',
      exEn: 'The company was accused of spying on its competitors.',
      exUa: 'Компанію звинуватили в шпигунстві за своїми конкурентами.',
    },
  ],
  squash: [
    {
      pos: 'v',
      translation: 'давити',
      exEn: 'He squashed the bug with his shoe.',
      exUa: 'Він розчавив жука своїм черевиком.',
    },
    {
      pos: 'noun',
      translation: 'гарбуз',
      exEn: 'She roasted the squash with olive oil and herbs.',
      exUa: 'Вона запекла гарбуз з оливковою олією та травами.',
    },
  ],
  squat: [
    {
      pos: 'v',
      translation: 'присідати',
      exEn: 'She squatted down to tie her shoelace.',
      exUa: 'Вона присіла, щоб зав\'язати шнурок.',
    },
    {
      pos: 'noun',
      translation: 'сквот',
      exEn: 'The abandoned building became a squat for homeless people.',
      exUa: 'Покинута будівля стала сквотом для бездомних людей.',
    },
  ],
  squeal: [
    {
      pos: 'v',
      translation: 'верещати',
      exEn: 'The children squealed with delight on the rollercoaster.',
      exUa: 'Діти верещали від захвату на американських гірках.',
    },
    {
      pos: 'noun',
      translation: 'пронизливий крик',
      exEn: 'A squeal of brakes echoed through the street.',
      exUa: 'Пронизливий скрип гальм пролунав вулицею.',
    },
  ],
  squirt: [
    {
      pos: 'v',
      translation: 'бризкати',
      exEn: 'She squirted lemon juice over the fish.',
      exUa: 'Вона бризнула лимонним соком на рибу.',
    },
    {
      pos: 'noun',
      translation: 'струмінь',
      exEn: 'A squirt of water hit him right in the face.',
      exUa: 'Струмінь води влучив йому прямо в обличчя.',
    },
  ],
  stab: [
    {
      pos: 'v',
      translation: 'колоти',
      exEn: 'The attacker stabbed him with a knife.',
      exUa: 'Нападник вдарив його ножем.',
    },
    {
      pos: 'noun',
      translation: 'зрадливий удар',
      exEn: "Losing his best friend's trust felt like a stab in the back.",
      exUa: "Втрата довіри найкращого друга відчувалася як зрадливий удар у спину.",
    },
  ],
  stack: [
    {
      pos: 'noun',
      translation: 'стос',
      exEn: 'There was a huge stack of papers on his desk.',
      exUa: 'На його столі був величезний стос паперів.',
    },
    {
      pos: 'v',
      translation: 'складати в стос',
      exEn: 'She stacked the chairs neatly in the corner.',
      exUa: 'Вона акуратно склала стільці в стос у кутку.',
    },
  ],
  stage: [
    {
      pos: 'noun',
      translation: 'сцена',
      exEn: 'The actors rehearsed on the empty stage.',
      exUa: 'Актори репетирували на порожній сцені.',
    },
    {
      pos: 'noun',
      translation: 'етап',
      exEn: 'The project is now entering its final stage.',
      exUa: 'Проєкт зараз вступає у свій завершальний етап.',
    },
    {
      pos: 'v',
      translation: 'організовувати',
      exEn: 'They staged a surprise party for her birthday.',
      exUa: 'Вони організували вечірку-сюрприз на її день народження.',
    },
  ],
  stain: [
    {
      pos: 'noun',
      translation: 'пляма',
      exEn: 'There was a coffee stain on the tablecloth.',
      exUa: 'На скатертині була кавова пляма.',
    },
    {
      pos: 'v',
      translation: 'забруднювати',
      exEn: 'The wine stained her white dress.',
      exUa: 'Вино забруднило її білу сукню.',
    },
  ],
  stalk: [
    {
      pos: 'v',
      translation: 'переслідувати',
      exEn: 'The lion stalked its prey silently through the grass.',
      exUa: 'Лев мовчки переслідував свою здобич крізь траву.',
    },
    {
      pos: 'noun',
      translation: 'стебло',
      exEn: 'She picked a flower with a long, thin stalk.',
      exUa: 'Вона зірвала квітку з довгим тонким стеблом.',
    },
  ],
  stall: [
    {
      pos: 'v',
      translation: 'зупинятися',
      exEn: 'The car engine stalled at the traffic light.',
      exUa: 'Двигун автомобіля заглух на світлофорі.',
    },
    {
      pos: 'noun',
      translation: 'ятка',
      exEn: 'She bought fresh vegetables from a market stall.',
      exUa: 'Вона купила свіжі овочі на ринковій ятці.',
    },
  ],
  stammer: [
    {
      pos: 'v',
      translation: 'заїкатися',
      exEn: 'He stammered nervously during his first speech.',
      exUa: 'Він нервово заїкався під час своєї першої промови.',
    },
    {
      pos: 'noun',
      translation: 'заїкання',
      exEn: 'She has worked hard to overcome her stammer.',
      exUa: 'Вона наполегливо працювала, щоб подолати своє заїкання.',
    },
  ],
  stamp: [
    {
      pos: 'noun',
      translation: 'штамп',
      exEn: 'The clerk placed an official stamp on the document.',
      exUa: 'Клерк поставив офіційний штамп на документ.',
    },
    {
      pos: 'v',
      translation: 'тупати',
      exEn: 'She stamped her foot impatiently while waiting.',
      exUa: 'Вона нетерпляче тупала ногою, чекаючи.',
    },
  ],
  start: [
    {
      pos: 'v',
      translation: 'починати',
      exEn: 'She started her homework right after dinner.',
      exUa: 'Вона почала домашнє завдання одразу після вечері.',
    },
    {
      pos: 'noun',
      translation: 'початок',
      exEn: 'The start of the race was delayed by rain.',
      exUa: 'Початок забігу було затримано через дощ.',
    },
  ],
  stash: [
    {
      pos: 'v',
      translation: 'ховати',
      exEn: 'He stashed the extra cash under his mattress.',
      exUa: 'Він сховав зайві гроші під матрацом.',
    },
    {
      pos: 'noun',
      translation: 'тайник',
      exEn: 'Police found a hidden stash of drugs in the warehouse.',
      exUa: 'Поліція знайшла прихований тайник з наркотиками на складі.',
    },
  ],
  station: [
    {
      pos: 'noun',
      translation: 'станція',
      exEn: 'The bus stopped at every station along the route.',
      exUa: 'Автобус зупинявся на кожній станції вздовж маршруту.',
    },
    {
      pos: 'noun',
      translation: 'вокзал',
      exEn: 'They waited for the train at the central station.',
      exUa: 'Вони чекали на потяг на центральному вокзалі.',
    },
  ],
  statute: [
    {
      pos: 'noun',
      translation: 'статут',
      exEn: "The company's statute outlines its main objectives.",
      exUa: 'Статут компанії окреслює її основні цілі.',
    },
    {
      pos: 'noun',
      translation: 'закон',
      exEn: 'The new statute takes effect at the start of next year.',
      exUa: 'Новий закон набирає чинності з початку наступного року.',
    },
  ],
  steam: [
    {
      pos: 'noun',
      translation: 'пара',
      exEn: 'Steam rose from the hot cup of tea.',
      exUa: 'Пара піднімалася від гарячої чашки чаю.',
    },
    {
      pos: 'v',
      translation: 'паритися',
      exEn: 'The vegetables steamed gently in the covered pot.',
      exUa: 'Овочі ніжно парилися в накритій каструлі.',
    },
  ],
  steel: [
    {
      pos: 'noun',
      translation: 'сталь',
      exEn: 'The bridge was built from reinforced steel.',
      exUa: 'Міст був побудований з армованої сталі.',
    },
    {
      pos: 'v',
      translation: 'загартовувати',
      exEn: 'She steeled herself for the difficult conversation.',
      exUa: 'Вона загартувала себе перед складною розмовою.',
    },
  ],
  steep: [
    {
      pos: 'adj',
      translation: 'крутий',
      exEn: 'The path up the mountain was extremely steep.',
      exUa: 'Стежка в гору була надзвичайно крутою.',
    },
    {
      pos: 'v',
      translation: 'занурювати',
      exEn: 'Let the tea leaves steep for five minutes.',
      exUa: "Дайте чайному листю настоятися п'ять хвилин.",
    },
  ],
  stem: [
    {
      pos: 'noun',
      translation: 'стебло',
      exEn: 'She cut the rose just below the stem.',
      exUa: 'Вона зрізала троянду якраз під стеблом.',
    },
    {
      pos: 'v',
      translation: 'стримувати',
      exEn: 'The government tried to stem the flow of illegal migration.',
      exUa: 'Уряд намагався стримати потік нелегальної міграції.',
    },
  ],
  step: [
    {
      pos: 'noun',
      translation: 'крок',
      exEn: 'She took a small step toward the door.',
      exUa: 'Вона зробила невеликий крок до дверей.',
    },
    {
      pos: 'v',
      translation: 'ступити',
      exEn: 'He stepped carefully over the puddle.',
      exUa: 'Він обережно ступив через калюжу.',
    },
  ],
  stew: [
    {
      pos: 'noun',
      translation: 'рагу',
      exEn: 'She made a hearty beef stew for dinner.',
      exUa: 'Вона приготувала ситне рагу з яловичини на вечерю.',
    },
    {
      pos: 'v',
      translation: 'тушкувати',
      exEn: 'The meat was stewed slowly for several hours.',
      exUa: 'М\'ясо тушкували повільно кілька годин.',
    },
  ],
  'stick (stuck, stuck)': [
    {
      pos: 'v',
      translation: 'застрягати',
      exEn: 'Her shoe got stuck in the mud.',
      exUa: 'Її взуття застрягло в грязюці.',
    },
    {
      pos: 'noun',
      translation: 'палиця',
      exEn: 'He used a stick to knock the fruit down from the tree.',
      exUa: 'Він скористався палицею, щоб збити фрукт з дерева.',
    },
  ],
  'sting (stung, stung)': [
    {
      pos: 'v',
      translation: 'жалити',
      exEn: 'A bee stung her on the arm.',
      exUa: 'Бджола вжалила її в руку.',
    },
    {
      pos: 'noun',
      translation: 'жало',
      exEn: "The scorpion's sting can be extremely dangerous.",
      exUa: 'Жало скорпіона може бути надзвичайно небезпечним.',
    },
  ],
  stint: [
    {
      pos: 'noun',
      translation: 'термін служби',
      exEn: 'He completed a two-year stint in the army.',
      exUa: 'Він завершив дворічний термін служби в армії.',
    },
    {
      pos: 'v',
      translation: 'обмежувати',
      exEn: 'She never stints on quality when it comes to food.',
      exUa: 'Вона ніколи не обмежує якість, коли йдеться про їжу.',
    },
  ],
  stitch: [
    {
      pos: 'noun',
      translation: 'стібок',
      exEn: 'The tailor added a neat stitch to the hem.',
      exUa: 'Кравець додав акуратний стібок до підшивки.',
    },
    {
      pos: 'v',
      translation: 'зашивати',
      exEn: 'The doctor stitched up the wound carefully.',
      exUa: 'Лікар обережно зашив рану.',
    },
  ],
  stomach: [
    {
      pos: 'noun',
      translation: 'шлунок',
      exEn: 'She felt a sharp pain in her stomach.',
      exUa: 'Вона відчула гострий біль у шлунку.',
    },
    {
      pos: 'v',
      translation: 'терпіти',
      exEn: "He couldn't stomach the idea of losing again.",
      exUa: 'Він не міг стерпіти думку про чергову поразку.',
    },
  ],
  store: [
    {
      pos: 'v',
      translation: 'зберігати',
      exEn: 'They store the wine in a cool, dark cellar.',
      exUa: 'Вони зберігають вино в прохолодному темному підвалі.',
    },
    {
      pos: 'noun',
      translation: 'магазин',
      exEn: 'She bought new shoes at the store downtown.',
      exUa: 'Вона купила нове взуття в магазині в центрі міста.',
    },
  ],
  strand: [
    {
      pos: 'noun',
      translation: 'нитка',
      exEn: 'A single strand of hair fell across her face.',
      exUa: 'Одне пасмо волосся впало їй на обличчя.',
    },
    {
      pos: 'v',
      translation: 'залишити без допомоги',
      exEn: 'The broken-down car left them stranded on the highway.',
      exUa: 'Зламана машина залишила їх без допомоги на трасі.',
    },
  ],
  strap: [
    {
      pos: 'noun',
      translation: 'ремінець',
      exEn: 'She adjusted the strap of her bag.',
      exUa: 'Вона підправила ремінець своєї сумки.',
    },
    {
      pos: 'v',
      translation: 'пристебнути',
      exEn: 'He strapped the child safely into the car seat.',
      exUa: 'Він безпечно пристебнув дитину в автокріслі.',
    },
  ],
  stray: [
    {
      pos: 'v',
      translation: 'заблукати',
      exEn: 'The dog strayed far from home and got lost.',
      exUa: 'Собака забрів далеко від дому і загубився.',
    },
    {
      pos: 'adj',
      translation: 'безпритульний',
      exEn: 'She took in a stray cat from the street.',
      exUa: 'Вона прихистила безпритульного кота з вулиці.',
    },
  ],
  stream: [
    {
      pos: 'noun',
      translation: 'потік',
      exEn: 'A small stream ran through the meadow.',
      exUa: 'Крізь луку тік невеликий потік.',
    },
    {
      pos: 'v',
      translation: 'транслювати',
      exEn: 'They streamed the concert live online.',
      exUa: 'Вони транслювали концерт наживо онлайн.',
    },
  ],
  stress: [
    {
      pos: 'noun',
      translation: 'стрес',
      exEn: 'Work-related stress can affect your health.',
      exUa: "Стрес, пов'язаний з роботою, може вплинути на здоров'я.",
    },
    {
      pos: 'v',
      translation: 'підкреслювати',
      exEn: 'The teacher stressed the importance of practice.',
      exUa: 'Вчитель підкреслив важливість практики.',
    },
  ],
  stride: [
    {
      pos: 'v',
      translation: 'крокувати',
      exEn: 'She strode confidently across the stage.',
      exUa: 'Вона впевнено крокувала через сцену.',
    },
    {
      pos: 'noun',
      translation: 'крок',
      exEn: 'He took long strides to keep up with her.',
      exUa: 'Він робив довгі кроки, щоб не відставати від неї.',
    },
  ],
  strike: [
    {
      pos: 'noun',
      translation: 'страйк',
      exEn: 'Workers voted to go on strike over pay.',
      exUa: 'Робітники проголосували за страйк через оплату праці.',
    },
    {
      pos: 'v',
      translation: 'вдаряти',
      exEn: 'Lightning struck the old oak tree.',
      exUa: 'Блискавка вдарила у старий дуб.',
    },
  ],
  string: [
    {
      pos: 'noun',
      translation: 'нитка',
      exEn: 'She tied the package with a piece of string.',
      exUa: 'Вона перев\'язала посилку шматком нитки.',
    },
    {
      pos: 'v',
      translation: "зв'язувати",
      exEn: 'He strung the beads together to make a necklace.',
      exUa: "Він нанизав намистини разом, щоб зробити намисто.",
    },
  ],
  strip: [
    {
      pos: 'v',
      translation: 'знімати',
      exEn: 'He stripped the old paint off the door.',
      exUa: 'Він зняв стару фарбу з дверей.',
    },
    {
      pos: 'noun',
      translation: 'смуга',
      exEn: 'The flag had a red strip across the middle.',
      exUa: 'Прапор мав червону смугу посередині.',
    },
  ],
  stroll: [
    {
      pos: 'v',
      translation: 'прогулятися',
      exEn: 'They strolled along the beach at sunset.',
      exUa: 'Вони прогулялися пляжем на заході сонця.',
    },
    {
      pos: 'noun',
      translation: 'прогулянка',
      exEn: 'She enjoys a quiet stroll in the park every morning.',
      exUa: 'Вона щоранку насолоджується тихою прогулянкою в парку.',
    },
  ],
  struggle: [
    {
      pos: 'v',
      translation: 'боротися',
      exEn: 'She struggled to keep her business afloat.',
      exUa: 'Вона боролася, щоб втримати свій бізнес на плаву.',
    },
    {
      pos: 'noun',
      translation: 'труднощі',
      exEn: 'Learning a new language can be a real struggle.',
      exUa: 'Вивчення нової мови може бути справжніми труднощами.',
    },
  ],
  stuff: [
    {
      pos: 'noun',
      translation: 'речі',
      exEn: 'She packed all her stuff into two suitcases.',
      exUa: 'Вона спакувала всі свої речі у дві валізи.',
    },
    {
      pos: 'v',
      translation: 'набивати',
      exEn: 'He stuffed his pockets with candy.',
      exUa: 'Він набив кишені цукерками.',
    },
  ],
  stump: [
    {
      pos: 'v',
      translation: 'ставити в безвихідь',
      exEn: 'The final question completely stumped her.',
      exUa: 'Останнє питання повністю поставило її в глухий кут.',
    },
    {
      pos: 'noun',
      translation: 'пень',
      exEn: 'The old tree stump made a perfect seat.',
      exUa: 'Старий пень дерева слугував чудовим сидінням.',
    },
  ],
  stunt: [
    {
      pos: 'noun',
      translation: 'трюк',
      exEn: 'The actor performed his own dangerous stunt.',
      exUa: 'Актор сам виконав свій небезпечний трюк.',
    },
    {
      pos: 'v',
      translation: 'затримувати ріст',
      exEn: "Poor nutrition can stunt a child's growth.",
      exUa: 'Погане харчування може затримати ріст дитини.',
    },
  ],
  subject: [
    {
      pos: 'noun',
      translation: 'тема',
      exEn: 'History was always her favourite subject in school.',
      exUa: 'Історія завжди була її улюбленою темою у школі.',
    },
    {
      pos: 'v',
      translation: 'підлягати',
      exEn: 'The decision is subject to approval by the board.',
      exUa: 'Рішення підлягає затвердженню радою.',
    },
  ],
  subpoena: [
    {
      pos: 'noun',
      translation: 'судова повістка',
      exEn: 'She received a subpoena to testify in court.',
      exUa: 'Вона отримала судову повістку для дачі свідчень у суді.',
    },
    {
      pos: 'v',
      translation: 'викликати повісткою',
      exEn: 'The witness was subpoenaed to appear before the jury.',
      exUa: 'Свідка викликали повісткою постати перед присяжними.',
    },
  ],
  substitute: [
    {
      pos: 'noun',
      translation: 'замінник',
      exEn: 'They used a sugar substitute in the recipe.',
      exUa: 'Вони використали замінник цукру в рецепті.',
    },
    {
      pos: 'v',
      translation: 'заміщувати',
      exEn: 'The coach substituted the tired player in the second half.',
      exUa: 'Тренер замінив втомленого гравця в другому таймі.',
    },
  ],
  sum: [
    {
      pos: 'noun',
      translation: 'сума',
      exEn: 'She calculated the total sum of the expenses.',
      exUa: 'Вона підрахувала загальну суму витрат.',
    },
    {
      pos: 'v',
      translation: 'підбивати підсумок',
      exEn: 'Let me sum up the main points of the meeting.',
      exUa: 'Дозвольте мені підбити підсумок основних пунктів зустрічі.',
    },
  ],
};

// ════════════════════════════════════════════════════════════════════════
// Per-language polysemous-word datasets — genuine homonyms/polysemy in
// that language itself (NOT translations of the English words above).
// Key: lowercase word in that language. `exEn` holds the example sentence
// in THAT language (field name kept for type/render reuse); `exUa` holds
// its Ukrainian translation (empty for the Ukrainian dataset itself, since
// translating Ukrainian into Ukrainian is pointless — the UI skips that
// line when exUa is empty).
//
// Coverage is intentionally uneven: the 12 "small" target-language tables
// only cover ~2000 shared words, so genuine reachable polysemy is rare —
// languages with no verified pair (Arabic, Chinese, Japanese) are omitted
// rather than padded with invented or unreachable entries.
// ════════════════════════════════════════════════════════════════════════

export const SENSES_UA: Record<string, SenseEntry[]> = {
  замок: [
    {
      pos: 'noun',
      translation: 'фортеця, укріплена споруда',
      exEn: 'Середньовічний замок стояв на високому пагорбі.',
      exUa: '',
    },
    {
      pos: 'noun',
      translation: 'дверний замок, запор',
      exEn: 'Вона завжди перевіряє замок на дверях перед сном.',
      exUa: '',
    },
  ],
  кран: [
    {
      pos: 'noun',
      translation: 'водопровідний кран',
      exEn: 'Вона відкрила кран і почекала, поки вода нагріється.',
      exUa: '',
    },
    {
      pos: 'noun',
      translation: 'будівельний кран (машина)',
      exEn: 'Великий будівельний кран височів над майданчиком.',
      exUa: '',
    },
  ],
  мати: [
    {
      pos: 'noun',
      translation: 'матір, неня',
      exEn: 'Її мати завжди точно знала, що їй потрібно.',
      exUa: '',
    },
    {
      pos: 'v',
      translation: 'володіти, посідати щось',
      exEn: 'У тебе є якісь плани на вихідні?',
      exUa: '',
    },
  ],
  куля: [
    {
      pos: 'noun',
      translation: 'патрон, набій',
      exEn: 'Поліція знайшла кулю, застрягла в стіні будівлі.',
      exUa: '',
    },
    {
      pos: 'noun',
      translation: 'сфера, шар (геометрична форма)',
      exEn: 'Земля має форму майже ідеальної кулі.',
      exUa: '',
    },
  ],
  вид: [
    {
      pos: 'noun',
      translation: 'погляд, зовнішній вигляд',
      exEn: 'З вершини гори відкривався чудовий вид на долину.',
      exUa: '',
    },
    {
      pos: 'noun',
      translation: 'різновид, тип (тварин чи рослин)',
      exEn: 'Кілька видів рідкісних метеликів населяють цей заповідник.',
      exUa: '',
    },
  ],
  стрічка: [
    {
      pos: 'noun',
      translation: 'декоративна стрічка (для подарунка, волосся)',
      exEn: "Вона зав'язала червону стрічку навколо подарунка.",
      exUa: '',
    },
    {
      pos: 'noun',
      translation: 'магнітна плівка, запис',
      exEn: 'Старі фільми записували на магнітну стрічку.',
      exUa: '',
    },
  ],
};

export const SENSES_ES: Record<string, SenseEntry[]> = {
  vela: [
    {
      pos: 'noun',
      translation: 'свічка',
      exEn: 'Encendió una vela para crear un ambiente romántico durante la cena.',
      exUa: 'Вона запалила свічку, щоб створити романтичну атмосферу під час вечері.',
    },
    {
      pos: 'noun',
      translation: 'парус',
      exEn: 'Navegaron por la costa disfrutando de la cálida brisa veraniega bajo la vela.',
      exUa: 'Вони пливли під парусом уздовж берега, насолоджуючись теплим літнім вітерцем.',
    },
  ],
  banco: [
    {
      pos: 'noun',
      translation: 'банк (фінансова установа)',
      exEn: 'Se sentaron en la orilla del río, cerca del banco donde guardaban sus ahorros.',
      exUa: 'Вони сиділи на березі річки, недалеко від банку, де зберігали свої заощадження.',
    },
    {
      pos: 'noun',
      translation: 'лавка, скамія',
      exEn: 'Se sentó en el banco del parque a leer el periódico bajo la sombra de los árboles.',
      exUa: 'Він сів на лавку в парку почитати газету в тіні дерев.',
    },
  ],
  muñeca: [
    {
      pos: 'noun',
      translation: 'лялька',
      exEn: 'La niña pequeña llevaba su muñeca favorita a todas partes.',
      exUa: 'Маленька дівчинка носила свою улюблену ляльку всюди.',
    },
    {
      pos: 'noun',
      translation: 'запʼясток',
      exEn: 'Se torció la muñeca durante el partido de voleibol y tuvo que descansarla.',
      exUa: 'Вона вивихнула запʼясток під час матчу з волейболу і мусила дати йому відпочити.',
    },
  ],
  cinta: [
    {
      pos: 'noun',
      translation: 'стрічка (декоративна)',
      exEn: 'Ató una cinta roja alrededor del regalo para que se viera especial.',
      exUa: "Вона обв'язала подарунок червоною стрічкою, щоб він виглядав особливо.",
    },
    {
      pos: 'noun',
      translation: 'плівка, скотч',
      exEn: 'Pegó la nota en el frigorífico con cinta para que él la viera.',
      exUa: 'Вона прикріпила записку до холодильника скотчем, щоб він її побачив.',
    },
  ],
  tiempo: [
    {
      pos: 'noun',
      translation: 'час',
      exEn: 'Nunca tiene suficiente tiempo para hacer todo lo que planea.',
      exUa: 'Їй ніколи не вистачає часу зробити все, що вона планує.',
    },
    {
      pos: 'noun',
      translation: 'погода',
      exEn: 'El tiempo era perfecto para un largo paseo por la costa.',
      exUa: 'Погода була ідеальною для довгої прогулянки вздовж берега.',
    },
  ],
  frente: [
    {
      pos: 'noun',
      translation: 'чоло (частина обличчя)',
      exEn: 'Presionó un paño fresco y húmedo contra su frente febril.',
      exUa: 'Вона приклала свіжу вологу тканину до свого гарячого чола.',
    },
    {
      pos: 'noun',
      translation: 'передня частина, фронт',
      exEn: 'Se sentó al frente del aula para oír mejor.',
      exUa: 'Вона сіла в передній частині аудиторії, щоб краще чути.',
    },
  ],
  derecho: [
    {
      pos: 'noun',
      translation: 'право (юридичне)',
      exEn: 'Estudió derecho en la universidad antes de convertirse en una abogada de éxito.',
      exUa: 'Вона вивчала право в університеті, перш ніж стати успішною адвокаткою.',
    },
    {
      pos: 'adv',
      translation: 'прямо, рівно (напрямок)',
      exEn: 'Gira a la derecha en el semáforo y luego sigue derecho.',
      exUa: 'Поверни праворуч на світлофорі, а потім їдь прямо.',
    },
  ],
  sobre: [
    {
      pos: 'noun',
      translation: 'конверт',
      exEn: 'Selló el sobre y le puso un sello en la esquina.',
      exUa: 'Вона запечатала конверт і поклала марку в кутку.',
    },
    {
      pos: 'prep',
      translation: 'над, на, про (привід)',
      exEn: 'Dio una breve charla sobre la historia de su pueblo natal.',
      exUa: 'Вона прочитала коротку доповідь про історію свого рідного містечка.',
    },
  ],
  letra: [
    {
      pos: 'noun',
      translation: 'буква, літера',
      exEn: 'Recibía una carta escrita a mano de su abuela cada semana.',
      exUa: 'Вона щотижня отримувала лист, написаний від руки бабусиним почерком.',
    },
    {
      pos: 'noun',
      translation: 'текст пісні',
      exEn: 'De niña se aprendía de memoria la letra de todas sus canciones favoritas.',
      exUa: "У дитинстві вона вивчала напам'ять текст усіх своїх улюблених пісень.",
    },
  ],
  cabo: [
    {
      pos: 'noun',
      translation: 'мис (географічний)',
      exEn: 'El barco dobló el cabo durante una peligrosa tormenta nocturna de invierno.',
      exUa: 'Корабель обійшов мис під час небезпечного нічного зимового шторму.',
    },
    {
      pos: 'noun',
      translation: 'капрал (військове звання)',
      exEn: 'El cabo dio las órdenes a los soldados antes del amanecer.',
      exUa: 'Капрал віддав накази солдатам перед світанком.',
    },
  ],

  // ── Expanded set ─────────────────────────────────────────────────────────
  cura: [
    {
      pos: 'noun',
      translation: 'священник',
      exEn: 'El cura bendijo a los recién casados frente a la iglesia.',
      exUa: 'Священник благословив молодят перед церквою.',
    },
    {
      pos: 'noun',
      translation: 'лікування, зцілення',
      exEn: 'Los científicos todavía buscan una cura para esa enfermedad.',
      exUa: 'Науковці досі шукають ліки від цієї хвороби.',
    },
  ],
  corte: [
    {
      pos: 'noun',
      translation: 'королівський двір',
      exEn: 'El embajador fue recibido en la corte del rey.',
      exUa: 'Посла прийняли при королівському дворі.',
    },
    {
      pos: 'noun',
      translation: 'розріз, поріз',
      exEn: 'Se hizo un corte profundo en el dedo mientras cocinaba.',
      exUa: 'Вона глибоко порізала палець під час готування.',
    },
  ],
  cometa: [
    {
      pos: 'noun',
      translation: 'комета',
      exEn: 'El cometa será visible en el cielo nocturno esta semana.',
      exUa: 'Комету буде видно на нічному небі цього тижня.',
    },
    {
      pos: 'noun',
      translation: 'повітряний змій',
      exEn: 'Los niños hicieron volar una cometa de colores en el parque.',
      exUa: 'Діти запускали барвистого повітряного змія в парку.',
    },
  ],
  pez: [
    {
      pos: 'noun',
      translation: 'риба',
      exEn: 'Un pez plateado nadaba cerca de la orilla del lago.',
      exUa: 'Срібляста риба плавала біля берега озера.',
    },
    {
      pos: 'noun',
      translation: 'смола (дьоготь)',
      exEn: 'Sellaron las grietas del barco con pez caliente.',
      exUa: 'Вони запечатали тріщини на човні гарячою смолою.',
    },
  ],
  gato: [
    {
      pos: 'noun',
      translation: 'кіт',
      exEn: 'El gato dormía tranquilamente sobre el sofá.',
      exUa: 'Кіт спокійно спав на дивані.',
    },
    {
      pos: 'noun',
      translation: 'домкрат',
      exEn: 'Sacó el gato del maletero para cambiar la rueda pinchada.',
      exUa: 'Він дістав домкрат із багажника, щоб поміняти спущене колесо.',
    },
  ],
  real: [
    {
      pos: 'adj',
      translation: 'справжній, дійсний',
      exEn: 'Esta historia está basada en hechos reales.',
      exUa: 'Ця історія заснована на реальних подіях.',
    },
    {
      pos: 'adj',
      translation: 'королівський',
      exEn: 'La familia real visitó el hospital infantil ayer.',
      exUa: 'Королівська родина вчора відвідала дитячу лікарню.',
    },
  ],
  llama: [
    {
      pos: 'noun',
      translation: "полум'я",
      exEn: 'Una pequeña llama parpadeaba en la oscuridad de la cueva.',
      exUa: "Маленьке полум'я мерехтіло в темряві печери.",
    },
    {
      pos: 'noun',
      translation: 'лама (тварина)',
      exEn: 'La llama caminaba lentamente por los Andes con su carga.',
      exUa: 'Лама повільно йшла Андами зі своїм вантажем.',
    },
  ],
  mango: [
    {
      pos: 'noun',
      translation: 'манго (фрукт)',
      exEn: 'Cortó el mango maduro en rodajas para la ensalada.',
      exUa: 'Вона нарізала стиглий манго скибочками для салату.',
    },
    {
      pos: 'noun',
      translation: "руків'я, ручка",
      exEn: 'El mango del cuchillo estaba hecho de madera oscura.',
      exUa: "Руків'я ножа було зроблене з темного дерева.",
    },
  ],
  falta: [
    {
      pos: 'noun',
      translation: 'відсутність, брак',
      exEn: 'El proyecto se retrasó por falta de financiación.',
      exUa: 'Проєкт затримався через брак фінансування.',
    },
    {
      pos: 'noun',
      translation: 'фол (спортивний)',
      exEn: 'El árbitro pitó una falta dentro del área.',
      exUa: 'Суддя зафіксував фол у межах штрафного майданчика.',
    },
  ],
  cola: [
    {
      pos: 'noun',
      translation: 'хвіст',
      exEn: 'El perro movía la cola con entusiasmo cuando lo veía llegar.',
      exUa: 'Собака радісно вертів хвостом, коли бачив, що він приходить.',
    },
    {
      pos: 'noun',
      translation: 'черга',
      exEn: 'Esperaron media hora en la cola del cine.',
      exUa: 'Вони чекали півгодини в черзі до кінотеатру.',
    },
  ],
  copa: [
    {
      pos: 'noun',
      translation: 'келих',
      exEn: 'Brindaron con una copa de vino tinto.',
      exUa: 'Вони цокнулися келихами червоного вина.',
    },
    {
      pos: 'noun',
      translation: 'крона (дерева)',
      exEn: 'Los pájaros anidaban en la copa del viejo roble.',
      exUa: 'Птахи гніздилися в кроні старого дуба.',
    },
  ],
  lengua: [
    {
      pos: 'noun',
      translation: 'язик (частина тіла)',
      exEn: 'Se quemó la lengua al beber el café demasiado caliente.',
      exUa: 'Вона обпекла язик, випивши надто гарячу каву.',
    },
    {
      pos: 'noun',
      translation: 'мова, мовлення',
      exEn: 'Aprender una nueva lengua amplía la mente.',
      exUa: 'Вивчення нової мови розширює світогляд.',
    },
  ],
  pila: [
    {
      pos: 'noun',
      translation: 'батарейка',
      exEn: 'El mando a distancia necesita una pila nueva.',
      exUa: 'Пульту дистанційного керування потрібна нова батарейка.',
    },
    {
      pos: 'noun',
      translation: 'купа, стос',
      exEn: 'Dejó una pila de libros sobre el escritorio.',
      exUa: 'Вона залишила стос книг на письмовому столі.',
    },
  ],
  planta: [
    {
      pos: 'noun',
      translation: 'рослина',
      exEn: 'Riega la planta dos veces por semana.',
      exUa: 'Вона поливає рослину двічі на тиждень.',
    },
    {
      pos: 'noun',
      translation: 'підошва (стопи)',
      exEn: 'Sintió una piedra afilada bajo la planta del pie.',
      exUa: 'Вона відчула гострий камінець під підошвою ноги.',
    },
  ],
  gracia: [
    {
      pos: 'noun',
      translation: 'грація, витонченість',
      exEn: 'La bailarina se movía con una gracia extraordinaria.',
      exUa: 'Танцівниця рухалася з надзвичайною грацією.',
    },
    {
      pos: 'noun',
      translation: 'дотепність, кумедність',
      exEn: 'Su comentario tenía mucha gracia y todos rieron.',
      exUa: 'Його коментар був дуже дотепним, і всі засміялися.',
    },
  ],
  pasta: [
    {
      pos: 'noun',
      translation: 'паста, макарони',
      exEn: 'Cocinó pasta fresca para la cena familiar.',
      exUa: 'Вона приготувала свіжу пасту на сімейну вечерю.',
    },
    {
      pos: 'noun',
      translation: 'гроші (розмовно)',
      exEn: 'No tenía suficiente pasta para pagar el alquiler ese mes.',
      exUa: 'Тоді йому не вистачало грошей заплатити за оренду.',
    },
  ],
  cara: [
    {
      pos: 'noun',
      translation: 'обличчя',
      exEn: 'Su cara se iluminó al ver el regalo.',
      exUa: 'Її обличчя засяяло, коли вона побачила подарунок.',
    },
    {
      pos: 'adj',
      translation: 'дорогий (за ціною)',
      exEn: 'Esa chaqueta de cuero era demasiado cara para su presupuesto.',
      exUa: 'Та шкіряна куртка була надто дорогою для її бюджету.',
    },
  ],
  pico: [
    {
      pos: 'noun',
      translation: 'дзьоб',
      exEn: 'El pájaro sostenía un gusano en el pico.',
      exUa: "Птах тримав у дзьобі черв'яка.",
    },
    {
      pos: 'noun',
      translation: 'вершина, пік',
      exEn: 'Alcanzaron el pico de la montaña justo antes del atardecer.',
      exUa: 'Вони досягли вершини гори якраз перед заходом сонця.',
    },
  ],
  sierra: [
    {
      pos: 'noun',
      translation: 'пилка',
      exEn: 'Cortó la madera con una sierra eléctrica.',
      exUa: 'Він розпиляв деревину електричною пилкою.',
    },
    {
      pos: 'noun',
      translation: 'гірський хребет',
      exEn: 'Pasaron el verano caminando por la sierra.',
      exUa: 'Вони провели літо, гуляючи гірським хребтом.',
    },
  ],
  pasaje: [
    {
      pos: 'noun',
      translation: 'прохід, провулок',
      exEn: 'Encontraron un pasaje estrecho entre los dos edificios.',
      exUa: 'Вони знайшли вузький прохід між двома будівлями.',
    },
    {
      pos: 'noun',
      translation: 'квиток (проїзний)',
      exEn: 'Compró el pasaje de avión con tres meses de antelación.',
      exUa: 'Вона купила авіаквиток за три місяці наперед.',
    },
  ],
  cuenta: [
    {
      pos: 'noun',
      translation: 'рахунок (банківський)',
      exEn: 'Abrió una cuenta nueva en el banco del centro.',
      exUa: 'Вона відкрила новий рахунок у банку в центрі міста.',
    },
    {
      pos: 'noun',
      translation: 'намистина',
      exEn: 'El collar estaba hecho de cuentas de cristal azul.',
      exUa: 'Намисто було зроблене з блакитних скляних намистин.',
    },
  ],
  partido: [
    {
      pos: 'noun',
      translation: 'матч (спортивний)',
      exEn: 'Vieron el partido de fútbol en casa de un amigo.',
      exUa: 'Вони дивилися футбольний матч у будинку друга.',
    },
    {
      pos: 'noun',
      translation: 'партія (політична)',
      exEn: 'Se unió al partido político cuando era estudiante.',
      exUa: 'Вона вступила до політичної партії, коли була студенткою.',
    },
  ],
  pluma: [
    {
      pos: 'noun',
      translation: 'перо (пташине)',
      exEn: 'Una pluma blanca cayó suavemente sobre la hierba.',
      exUa: "Біле перо м'яко впало на траву.",
    },
    {
      pos: 'noun',
      translation: 'перо, ручка (для письма)',
      exEn: 'Firmó el contrato con una pluma elegante.',
      exUa: 'Вона підписала контракт елегантною ручкою.',
    },
  ],
  cuadro: [
    {
      pos: 'noun',
      translation: 'картина',
      exEn: 'Colgó un cuadro nuevo sobre la chimenea.',
      exUa: 'Вона повісила нову картину над каміном.',
    },
    {
      pos: 'noun',
      translation: 'таблиця, схема',
      exEn: 'El profesor dibujó un cuadro para explicar los datos.',
      exUa: 'Вчитель намалював таблицю, щоб пояснити дані.',
    },
  ],
  lima: [
    {
      pos: 'noun',
      translation: 'лайм (фрукт)',
      exEn: 'Exprimió una lima fresca sobre el pescado.',
      exUa: 'Вона видавила сік свіжого лайма на рибу.',
    },
    {
      pos: 'noun',
      translation: 'пилка (для нігтів, металу)',
      exEn: 'Usó una lima para suavizar el borde del metal.',
      exUa: 'Вона використала пилку, щоб згладити край металу.',
    },
  ],
  cuerda: [
    {
      pos: 'noun',
      translation: 'мотузка',
      exEn: 'Ataron la cuerda alrededor del tronco del árbol.',
      exUa: "Вони прив'язали мотузку навколо стовбура дерева.",
    },
    {
      pos: 'noun',
      translation: 'струна (музичного інструменту)',
      exEn: 'Una cuerda de la guitarra se rompió durante el concierto.',
      exUa: 'Одна струна гітари порвалася під час концерту.',
    },
  ],
  orden: [
    {
      pos: 'noun',
      translation: 'порядок, послідовність',
      exEn: 'Pon los libros en orden alfabético en la estantería.',
      exUa: 'Розклади книги в алфавітному порядку на полиці.',
    },
    {
      pos: 'noun',
      translation: 'наказ, розпорядження',
      exEn: 'El general dio la orden de retirada al amanecer.',
      exUa: 'Генерал віддав наказ про відступ на світанку.',
    },
  ],
  mañana: [
    {
      pos: 'noun',
      translation: 'ранок',
      exEn: 'Salió a correr temprano por la mañana.',
      exUa: 'Вона вийшла на пробіжку рано-вранці.',
    },
    {
      pos: 'adv',
      translation: 'завтра',
      exEn: 'Nos vemos mañana en la reunión.',
      exUa: 'Побачимось завтра на зустрічі.',
    },
  ],
  parte: [
    {
      pos: 'noun',
      translation: 'частина',
      exEn: 'Solo leyó la primera parte del informe.',
      exUa: 'Вона прочитала лише першу частину звіту.',
    },
    {
      pos: 'noun',
      translation: 'зведення, бюлетень',
      exEn: 'Escucharon el parte meteorológico antes de salir de viaje.',
      exUa: 'Перед поїздкою вони прослухали зведення погоди.',
    },
  ],
  pendiente: [
    {
      pos: 'noun',
      translation: 'сережка',
      exEn: 'Perdió un pendiente de plata en la fiesta.',
      exUa: 'Вона загубила срібну сережку на вечірці.',
    },
    {
      pos: 'noun',
      translation: 'схил, скат',
      exEn: 'La casa estaba construida sobre una pendiente pronunciada.',
      exUa: 'Будинок був побудований на крутому схилі.',
    },
  ],
  cubierta: [
    {
      pos: 'noun',
      translation: 'палуба (корабля)',
      exEn: 'Los pasajeros tomaban el sol en la cubierta del barco.',
      exUa: 'Пасажири засмагали на палубі корабля.',
    },
    {
      pos: 'noun',
      translation: 'обкладинка, чохол',
      exEn: 'La cubierta del libro estaba decorada con flores doradas.',
      exUa: 'Обкладинка книги була прикрашена золотими квітами.',
    },
  ],
  tapa: [
    {
      pos: 'noun',
      translation: 'кришка',
      exEn: 'Cerró la olla con la tapa antes de salir.',
      exUa: 'Вона закрила каструлю кришкою перед виходом.',
    },
    {
      pos: 'noun',
      translation: 'тапас, закуска',
      exEn: 'Pidieron una tapa de jamón para compartir.',
      exUa: 'Вони замовили закуску з хамоном, щоб поділитися.',
    },
  ],
  banda: [
    {
      pos: 'noun',
      translation: 'гурт, оркестр',
      exEn: 'La banda tocó en la plaza durante el festival.',
      exUa: 'Гурт грав на площі під час фестивалю.',
    },
    {
      pos: 'noun',
      translation: "стрічка, перев'язь",
      exEn: 'La reina llevaba una banda azul sobre el vestido.',
      exUa: 'Королева носила синю стрічку поверх сукні.',
    },
  ],

  // ── Round 2 ─────────────────────────────────────────────────────────────
  cañón: [
    {
      pos: 'noun',
      translation: 'гармата',
      exEn: 'El cañón disparó al amanecer durante la batalla.',
      exUa: 'Гармата вистрелила на світанку під час бою.',
    },
    {
      pos: 'noun',
      translation: 'каньйон',
      exEn: 'Caminaron por el borde del cañón al atardecer.',
      exUa: 'Вони йшли краєм каньйону на заході сонця.',
    },
  ],
  cubo: [
    {
      pos: 'noun',
      translation: 'відро',
      exEn: 'Llenó el cubo con agua fría del grifo.',
      exUa: 'Вона наповнила відро холодною водою з крана.',
    },
    {
      pos: 'noun',
      translation: 'куб (геометрична фігура)',
      exEn: 'El profesor dibujó un cubo en la pizarra.',
      exUa: 'Вчитель намалював куб на дошці.',
    },
  ],
  taquilla: [
    {
      pos: 'noun',
      translation: 'каса (квиткова)',
      exEn: 'Compraron las entradas en la taquilla del cine.',
      exUa: 'Вони купили квитки в касі кінотеатру.',
    },
    {
      pos: 'noun',
      translation: 'шафка (для одягу)',
      exEn: 'Dejó su mochila en la taquilla del gimnasio.',
      exUa: 'Вона залишила рюкзак у шафці спортзалу.',
    },
  ],
  fuente: [
    {
      pos: 'noun',
      translation: 'фонтан',
      exEn: 'Los niños jugaban junto a la fuente de la plaza.',
      exUa: 'Діти гралися біля фонтану на площі.',
    },
    {
      pos: 'noun',
      translation: 'джерело (інформації)',
      exEn: 'El periodista no reveló su fuente.',
      exUa: 'Журналіст не розкрив своє джерело.',
    },
  ],
  ensayo: [
    {
      pos: 'noun',
      translation: 'твір, есе',
      exEn: 'Escribió un ensayo sobre la historia de su país.',
      exUa: 'Вона написала есе про історію своєї країни.',
    },
    {
      pos: 'noun',
      translation: 'репетиція',
      exEn: 'La orquesta tuvo un ensayo largo antes del concierto.',
      exUa: 'Оркестр мав довгу репетицію перед концертом.',
    },
  ],
  explotar: [
    {
      pos: 'v',
      translation: 'вибухати',
      exEn: 'La bomba explotó a pocos metros del edificio.',
      exUa: 'Бомба вибухнула за кілька метрів від будівлі.',
    },
    {
      pos: 'v',
      translation: 'експлуатувати',
      exEn: 'La empresa explotaba a sus trabajadores con largas jornadas.',
      exUa: 'Компанія експлуатувала своїх працівників довгими змінами.',
    },
  ],
  destino: [
    {
      pos: 'noun',
      translation: 'пункт призначення',
      exEn: 'Su destino final era una pequeña isla del Caribe.',
      exUa: 'Їхнім кінцевим пунктом призначення був маленький острів у Карибському морі.',
    },
    {
      pos: 'noun',
      translation: 'доля',
      exEn: 'Creía firmemente que el destino los había unido.',
      exUa: 'Вона твердо вірила, що доля їх звела.',
    },
  ],
  exposición: [
    {
      pos: 'noun',
      translation: 'виставка',
      exEn: 'Visitaron una exposición de arte moderno en el museo.',
      exUa: 'Вони відвідали виставку сучасного мистецтва в музеї.',
    },
    {
      pos: 'noun',
      translation: 'перебування під впливом (сонця тощо)',
      exEn: 'La exposición prolongada al sol dañó su piel.',
      exUa: 'Тривале перебування на сонці пошкодило її шкіру.',
    },
  ],
  cocina: [
    {
      pos: 'noun',
      translation: 'кухня (приміщення)',
      exEn: 'Preparó la cena en la pequeña cocina del apartamento.',
      exUa: 'Вона приготувала вечерю на маленькій кухні квартири.',
    },
    {
      pos: 'noun',
      translation: 'плита (для готування)',
      exEn: 'Encendió la cocina para calentar la sopa.',
      exUa: 'Вона ввімкнула плиту, щоб розігріти суп.',
    },
  ],
  novio: [
    {
      pos: 'noun',
      translation: 'хлопець (партнер)',
      exEn: 'Su novio la sorprendió con flores después del trabajo.',
      exUa: 'Її хлопець здивував її квітами після роботи.',
    },
    {
      pos: 'noun',
      translation: 'наречений',
      exEn: 'El novio esperaba nervioso en el altar.',
      exUa: 'Наречений нервово чекав біля вівтаря.',
    },
  ],
  contraer: [
    {
      pos: 'v',
      translation: 'захворіти (на щось)',
      exEn: 'Contrajo la gripe durante el largo vuelo.',
      exUa: 'Вона захворіла на грип під час довгого перельоту.',
    },
    {
      pos: 'v',
      translation: 'стискатися',
      exEn: 'El metal se contrae cuando baja la temperatura.',
      exUa: 'Метал стискається, коли температура падає.',
    },
  ],
  granada: [
    {
      pos: 'noun',
      translation: 'граната (зброя)',
      exEn: 'El soldado lanzó una granada hacia la trinchera enemiga.',
      exUa: 'Солдат кинув гранату в ворожий окоп.',
    },
    {
      pos: 'noun',
      translation: 'гранат (фрукт)',
      exEn: 'Le encantaba el sabor agridulce de la granada fresca.',
      exUa: 'Йому дуже подобався кисло-солодкий смак свіжого граната.',
    },
  ],
  tortilla: [
    {
      pos: 'noun',
      translation: 'омлет',
      exEn: 'Preparó una tortilla de patatas para la cena.',
      exUa: 'Вона приготувала картопляний омлет на вечерю.',
    },
    {
      pos: 'noun',
      translation: 'коржик (кукурудзяний/пшеничний)',
      exEn: 'Envolvió el relleno en una tortilla caliente.',
      exUa: 'Вона загорнула начинку в гарячий коржик.',
    },
  ],
  red: [
    {
      pos: 'noun',
      translation: 'мережа',
      exEn: 'La empresa amplió su red de distribución por todo el país.',
      exUa: 'Компанія розширила свою мережу розповсюдження по всій країні.',
    },
    {
      pos: 'noun',
      translation: 'сітка (рибальська)',
      exEn: 'El pescador remendaba su red dañada en el muelle.',
      exUa: 'Рибалка лагодив свою пошкоджену сітку на причалі.',
    },
  ],
  rosa: [
    {
      pos: 'noun',
      translation: 'троянда',
      exEn: 'Le regaló una rosa roja en su aniversario.',
      exUa: 'Він подарував їй червону троянду на річницю.',
    },
    {
      pos: 'adj',
      translation: 'рожевий',
      exEn: 'Pintó la habitación del bebé de color rosa.',
      exUa: 'Вона пофарбувала кімнату немовляти в рожевий колір.',
    },
  ],
  cartera: [
    {
      pos: 'noun',
      translation: 'гаманець',
      exEn: 'Olvidó la cartera en casa y no podía pagar el taxi.',
      exUa: 'Вона забула гаманець вдома й не могла заплатити за таксі.',
    },
    {
      pos: 'noun',
      translation: 'портфель (інвестиційний)',
      exEn: 'El banco gestionaba una cartera diversa de inversiones.',
      exUa: 'Банк керував різноманітним інвестиційним портфелем.',
    },
  ],
  escala: [
    {
      pos: 'noun',
      translation: 'масштаб, шкала',
      exEn: 'El mapa estaba dibujado a una escala muy pequeña.',
      exUa: 'Карта була намальована в дуже маленькому масштабі.',
    },
    {
      pos: 'noun',
      translation: 'пересадка (авіарейс)',
      exEn: 'Tuvieron una escala de tres horas en Madrid.',
      exUa: 'У них була трьохгодинна пересадка в Мадриді.',
    },
  ],
  despedir: [
    {
      pos: 'v',
      translation: 'звільняти (з роботи)',
      exEn: 'La empresa tuvo que despedir a varios empleados.',
      exUa: 'Компанії довелося звільнити кількох працівників.',
    },
    {
      pos: 'v',
      translation: 'проводжати, прощатися',
      exEn: 'Fueron al aeropuerto a despedir a su hija.',
      exUa: 'Вони поїхали в аеропорт проводжати доньку.',
    },
  ],
  deber: [
    {
      pos: 'v',
      translation: "бути зобов'язаним (модальне дієслово)",
      exEn: 'Debes terminar el informe antes del viernes.',
      exUa: "Ти повинен закінчити звіт до п'ятниці.",
    },
    {
      pos: 'v',
      translation: 'бути винним (гроші)',
      exEn: 'Todavía le debe dinero a su hermano.',
      exUa: 'Він досі винен грошей своєму братові.',
    },
  ],
  rescate: [
    {
      pos: 'noun',
      translation: 'порятунок, рятувальна операція',
      exEn: 'El equipo de rescate llegó justo a tiempo.',
      exUa: 'Рятувальна команда прибула якраз вчасно.',
    },
    {
      pos: 'noun',
      translation: 'викуп',
      exEn: 'Los secuestradores exigieron un rescate enorme.',
      exUa: 'Викрадачі вимагали величезний викуп.',
    },
  ],
  desconocido: [
    {
      pos: 'adj',
      translation: 'невідомий',
      exEn: 'El origen de la pintura sigue siendo desconocido.',
      exUa: 'Походження картини досі залишається невідомим.',
    },
    {
      pos: 'noun',
      translation: 'незнайомець',
      exEn: 'Un desconocido le ayudó a cargar las maletas.',
      exUa: 'Незнайомець допоміг їй донести валізи.',
    },
  ],
  reconocimiento: [
    {
      pos: 'noun',
      translation: 'визнання',
      exEn: 'Recibió un reconocimiento especial por su trabajo voluntario.',
      exUa: 'Вона отримала особливе визнання за свою волонтерську роботу.',
    },
    {
      pos: 'noun',
      translation: 'розвідка (військова)',
      exEn: 'El dron realizó un vuelo de reconocimiento sobre la zona.',
      exUa: 'Дрон здійснив розвідувальний політ над територією.',
    },
  ],
  guion: [
    {
      pos: 'noun',
      translation: 'сценарій',
      exEn: 'El director reescribió el guion tres veces antes del rodaje.',
      exUa: 'Режисер тричі переписав сценарій перед зйомками.',
    },
    {
      pos: 'noun',
      translation: 'дефіс, риска',
      exEn: 'Escribió la palabra compuesta con un guion en medio.',
      exUa: 'Вона написала складне слово з дефісом усередині.',
    },
  ],
  cuello: [
    {
      pos: 'noun',
      translation: 'шия',
      exEn: 'Llevaba una bufanda gruesa alrededor del cuello.',
      exUa: 'Вона носила товстий шарф навколо шиї.',
    },
    {
      pos: 'noun',
      translation: 'комір (одягу)',
      exEn: 'El cuello de la camisa estaba un poco arrugado.',
      exUa: "Комір сорочки був трохи зім'ятий.",
    },
  ],
  hoja: [
    {
      pos: 'noun',
      translation: 'листок (дерева)',
      exEn: 'Una hoja amarilla cayó suavemente al suelo.',
      exUa: 'Жовтий листок тихо впав на землю.',
    },
    {
      pos: 'noun',
      translation: 'лезо, клинок',
      exEn: 'La hoja del cuchillo estaba muy afilada.',
      exUa: 'Лезо ножа було дуже гострим.',
    },
  ],
  punto: [
    {
      pos: 'noun',
      translation: 'крапка',
      exEn: 'Olvidó poner el punto al final de la frase.',
      exUa: 'Вона забула поставити крапку в кінці речення.',
    },
    {
      pos: 'noun',
      translation: 'бал, очко',
      exEn: 'El equipo ganó el partido por un solo punto.',
      exUa: 'Команда виграла матч лише з різницею в одне очко.',
    },
  ],
  medio: [
    {
      pos: 'adj',
      translation: 'середній, половинний',
      exEn: 'Esperó media hora antes de que llegara el tren.',
      exUa: 'Вона чекала півгодини, перш ніж прибув потяг.',
    },
    {
      pos: 'noun',
      translation: 'засіб, спосіб',
      exEn: 'Encontraron un medio eficaz para resolver el problema.',
      exUa: 'Вони знайшли ефективний спосіб вирішити проблему.',
    },
  ],
  cargo: [
    {
      pos: 'noun',
      translation: 'посада',
      exEn: 'Asumió el cargo de director general el mes pasado.',
      exUa: 'Минулого місяця вона обійняла посаду генерального директора.',
    },
    {
      pos: 'noun',
      translation: 'вантаж',
      exEn: 'El barco transportaba un cargo pesado de acero.',
      exUa: 'Корабель перевозив важкий вантаж сталі.',
    },
  ],
  tabla: [
    {
      pos: 'noun',
      translation: 'дошка',
      exEn: 'Cortó las verduras sobre una tabla de madera.',
      exUa: "Вона нарізала овочі на дерев'яній дошці.",
    },
    {
      pos: 'noun',
      translation: 'таблиця',
      exEn: 'Los resultados se mostraban en una tabla clara.',
      exUa: 'Результати були показані в чіткій таблиці.',
    },
  ],
  entrada: [
    {
      pos: 'noun',
      translation: 'вхід',
      exEn: 'Esperaron junto a la entrada del edificio.',
      exUa: 'Вони чекали біля входу до будівлі.',
    },
    {
      pos: 'noun',
      translation: 'квиток',
      exEn: 'Compró dos entradas para el concierto de mañana.',
      exUa: 'Вона купила два квитки на завтрашній концерт.',
    },
  ],
  cita: [
    {
      pos: 'noun',
      translation: 'побачення, зустріч',
      exEn: 'Tenía una cita con el médico a las diez.',
      exUa: 'У неї була зустріч з лікарем о десятій.',
    },
    {
      pos: 'noun',
      translation: 'цитата',
      exEn: 'Comenzó su discurso con una cita famosa.',
      exUa: 'Вона почала свою промову з відомої цитати.',
    },
  ],
  consulta: [
    {
      pos: 'noun',
      translation: 'консультація',
      exEn: 'Pidieron una consulta antes de tomar la decisión final.',
      exUa: 'Вони попросили консультацію, перш ніж прийняти остаточне рішення.',
    },
    {
      pos: 'noun',
      translation: 'кабінет лікаря',
      exEn: 'El paciente esperaba en la consulta del médico.',
      exUa: 'Пацієнт чекав у кабінеті лікаря.',
    },
  ],
  rama: [
    {
      pos: 'noun',
      translation: 'гілка (дерева)',
      exEn: 'Un pájaro se posó en la rama más alta del árbol.',
      exUa: 'Птах сів на найвищу гілку дерева.',
    },
    {
      pos: 'noun',
      translation: 'галузь (науки, компанії)',
      exEn: 'Trabaja en la rama financiera de la empresa.',
      exUa: 'Вона працює у фінансовій галузі компанії.',
    },
  ],
  raíz: [
    {
      pos: 'noun',
      translation: 'корінь (рослини)',
      exEn: 'Las raíces del árbol se extendían bajo toda la calle.',
      exUa: 'Коріння дерева простягалося під усією вулицею.',
    },
    {
      pos: 'noun',
      translation: 'корінь (математичний)',
      exEn: 'Calculó la raíz cuadrada de ese número.',
      exUa: 'Вона обчислила квадратний корінь цього числа.',
    },
  ],
  tronco: [
    {
      pos: 'noun',
      translation: 'стовбур (дерева)',
      exEn: 'El leñador cortó el tronco con una sierra.',
      exUa: 'Лісоруб розпиляв стовбур пилкою.',
    },
    {
      pos: 'noun',
      translation: 'тулуб (тіла)',
      exEn: 'El entrenador les pidió fortalecer el tronco con ejercicios.',
      exUa: 'Тренер попросив зміцнити тулуб вправами.',
    },
  ],
  gallo: [
    {
      pos: 'noun',
      translation: 'півень',
      exEn: 'El gallo cantó antes del amanecer.',
      exUa: 'Півень заспівав перед світанком.',
    },
    {
      pos: 'noun',
      translation: 'фальшива нота (при співі)',
      exEn: 'El cantante soltó un gallo en la nota más alta.',
      exUa: 'Співак дав півня на найвищій ноті.',
    },
  ],
  titular: [
    {
      pos: 'noun',
      translation: 'заголовок (новин)',
      exEn: 'El titular del periódico anunciaba la noticia en grandes letras.',
      exUa: 'Заголовок газети великими літерами оголошував новину.',
    },
    {
      pos: 'noun',
      translation: 'власник, утримувач (посади)',
      exEn: 'El titular del cargo presentó su dimisión.',
      exUa: 'Особа, що обіймала посаду, подала у відставку.',
    },
  ],

  // ── Round 3 ─────────────────────────────────────────────────────────────
  capa: [
    {
      pos: 'noun',
      translation: 'шар, прошарок',
      exEn: 'Aplicó una capa fina de pintura blanca en la pared.',
      exUa: 'Вона нанесла тонкий шар білої фарби на стіну.',
    },
    {
      pos: 'noun',
      translation: 'плащ, накидка',
      exEn: 'El mago llevaba una capa negra durante el espectáculo.',
      exUa: 'Фокусник носив чорний плащ під час вистави.',
    },
  ],
  vista: [
    {
      pos: 'noun',
      translation: 'вид, краєвид',
      exEn: 'Desde la terraza había una vista impresionante del valle.',
      exUa: 'З тераси відкривався вражаючий вид на долину.',
    },
    {
      pos: 'noun',
      translation: 'судове засідання',
      exEn: 'La vista del caso se celebrará el próximo martes.',
      exUa: 'Судове засідання у справі відбудеться наступного вівторка.',
    },
  ],
  mono: [
    {
      pos: 'noun',
      translation: 'мавпа',
      exEn: 'Un mono saltaba de rama en rama en la jungla.',
      exUa: 'Мавпа стрибала з гілки на гілку в джунглях.',
    },
    {
      pos: 'noun',
      translation: 'комбінезон (робочий одяг)',
      exEn: 'El mecánico se puso un mono azul antes de empezar a trabajar.',
      exUa: 'Механік одягнув синій комбінезон, перш ніж почати працювати.',
    },
  ],
  doble: [
    {
      pos: 'adj',
      translation: 'подвійний',
      exEn: 'Pidió una habitación doble para los dos.',
      exUa: 'Вона замовила двомісний номер для них обох.',
    },
    {
      pos: 'noun',
      translation: 'дублер (у кіно)',
      exEn: 'El actor usó un doble para la escena más peligrosa.',
      exUa: 'Актор використав дублера для найнебезпечнішої сцени.',
    },
  ],
  media: [
    {
      pos: 'noun',
      translation: 'панчоха',
      exEn: 'Se rompió una media justo antes de la entrevista.',
      exUa: 'Вона порвала панчоху якраз перед співбесідою.',
    },
    {
      pos: 'noun',
      translation: 'середнє значення',
      exEn: 'La media de edad en la clase era veinte años.',
      exUa: 'Середній вік у класі становив двадцять років.',
    },
  ],
  gota: [
    {
      pos: 'noun',
      translation: 'крапля',
      exEn: 'Una gota de lluvia cayó sobre su mejilla.',
      exUa: 'Крапля дощу впала на її щоку.',
    },
    {
      pos: 'noun',
      translation: 'подагра (хвороба)',
      exEn: 'Su abuelo sufría de gota en el pie derecho.',
      exUa: 'Її дідусь страждав на подагру правої ноги.',
    },
  ],
  clave: [
    {
      pos: 'noun',
      translation: 'код, пароль',
      exEn: 'Olvidó la clave de su correo electrónico.',
      exUa: 'Вона забула пароль від своєї електронної пошти.',
    },
    {
      pos: 'adj',
      translation: 'ключовий, важливий',
      exEn: 'La comunicación fue un factor clave en su éxito.',
      exUa: 'Спілкування було ключовим фактором її успіху.',
    },
  ],
  tipo: [
    {
      pos: 'noun',
      translation: 'тип, вид',
      exEn: '¿Qué tipo de música te gusta escuchar?',
      exUa: 'Який тип музики тобі подобається слухати?',
    },
    {
      pos: 'noun',
      translation: 'тип, хлопець (розмовно)',
      exEn: 'Ese tipo siempre llega tarde a las reuniones.',
      exUa: 'Той тип завжди запізнюється на зустрічі.',
    },
  ],
  paso: [
    {
      pos: 'noun',
      translation: 'крок',
      exEn: 'Dio un paso hacia adelante con cuidado.',
      exUa: 'Вона обережно зробила крок вперед.',
    },
    {
      pos: 'noun',
      translation: 'гірський перевал',
      exEn: 'Cruzaron el paso de montaña antes de la tormenta de nieve.',
      exUa: 'Вони перетнули гірський перевал перед сніговою бурею.',
    },
  ],
  figura: [
    {
      pos: 'noun',
      translation: 'фігура, постать',
      exEn: 'Una figura misteriosa apareció entre la niebla.',
      exUa: "Загадкова постать з'явилася в тумані.",
    },
    {
      pos: 'noun',
      translation: 'знаменитість, відома особа',
      exEn: 'Se convirtió en una figura importante del cine español.',
      exUa: 'Вона стала важливою фігурою іспанського кіно.',
    },
  ],
  pista: [
    {
      pos: 'noun',
      translation: 'підказка',
      exEn: 'El detective encontró una pista importante en la escena.',
      exUa: 'Детектив знайшов важливу підказку на місці події.',
    },
    {
      pos: 'noun',
      translation: 'танцпол',
      exEn: 'Bailaron toda la noche en la pista del club.',
      exUa: 'Вони танцювали всю ніч на танцполі клубу.',
    },
  ],
  meta: [
    {
      pos: 'noun',
      translation: 'мета, ціль',
      exEn: 'Su meta era terminar la carrera antes de los treinta años.',
      exUa: 'Її метою було закінчити навчання до тридцяти років.',
    },
    {
      pos: 'noun',
      translation: 'фінішна лінія',
      exEn: 'Cruzó la meta con los brazos en alto.',
      exUa: 'Вона перетнула фінішну лінію з піднятими руками.',
    },
  ],
  cuarto: [
    {
      pos: 'noun',
      translation: 'кімната',
      exEn: 'Subió directamente a su cuarto después de cenar.',
      exUa: 'Вона одразу пішла до своєї кімнати після вечері.',
    },
    {
      pos: 'noun',
      translation: 'чверть',
      exEn: 'Faltaba un cuarto de hora para que terminara la clase.',
      exUa: 'До кінця уроку залишалося чверть години.',
    },
  ],
};

export const SENSES_FR: Record<string, SenseEntry[]> = {
  accord: [
    {
      pos: 'noun',
      translation: 'угода, домовленість',
      exEn: 'Ils ont signé un accord formel pour mettre fin au litige.',
      exUa: 'Вони підписали офіційну угоду, щоб покласти край спору.',
    },
    {
      pos: 'noun',
      translation: 'акорд (музичний)',
      exEn: "Il a joué un doux accord d'ouverture à la guitare.",
      exUa: 'Він зіграв на гітарі тихий вступний акорд.',
    },
  ],
  balle: [
    {
      pos: 'noun',
      translation: 'мʼяч',
      exEn: 'Les enfants tapaient dans le ballon dans le jardin.',
      exUa: 'Діти ганяли мʼяч у саду.',
    },
    {
      pos: 'noun',
      translation: 'куля (патрон)',
      exEn: 'La police a trouvé une balle incrustée dans le mur du bâtiment.',
      exUa: 'Поліція знайшла кулю, застряглу в стіні будівлі.',
    },
  ],
  baie: [
    {
      pos: 'noun',
      translation: 'бухта, затока',
      exEn: 'Les bateaux de pêche sont rentrés sans encombre dans la baie abritée.',
      exUa: 'Рибальські човни безперешкодно повернулися до захищеної бухти.',
    },
    {
      pos: 'noun',
      translation: 'ягода',
      exEn: 'Elle a cueilli des baies sauvages fraîches le long du chemin.',
      exUa: 'Вона зібрала свіжі дикі ягоди вздовж стежки.',
    },
  ],
  bleu: [
    {
      pos: 'adj',
      translation: 'синій (колір)',
      exEn: "Le ciel est d'un beau bleu clair aujourd'hui.",
      exUa: 'Сьогодні небо гарного світло-синього кольору.',
    },
    {
      pos: 'noun',
      translation: 'синець',
      exEn: 'Elle avait un gros bleu violet sur le bras gauche.',
      exUa: 'У неї був великий фіолетовий синець на лівій руці.',
    },
  ],
  café: [
    {
      pos: 'noun',
      translation: 'кава (напій)',
      exEn: 'Il boit toujours un café fort avant de commencer le travail.',
      exUa: 'Він завжди випиває міцну каву перед початком роботи.',
    },
    {
      pos: 'noun',
      translation: 'кафе (заклад)',
      exEn: 'Ils se sont retrouvés dans un café confortable près de la gare.',
      exUa: 'Вони зустрілися в затишному кафе біля вокзалу.',
    },
  ],

  // ── Expanded set ─────────────────────────────────────────────────────────
  avocat: [
    {
      pos: 'noun',
      translation: 'адвокат',
      exEn: "L'avocat a défendu son client avec passion devant le tribunal.",
      exUa: 'Адвокат пристрасно захищав свого клієнта в суді.',
    },
    {
      pos: 'noun',
      translation: 'авокадо',
      exEn: 'Elle a écrasé un avocat mûr pour préparer le guacamole.',
      exUa: "Вона розім'яла стиглий авокадо, щоб приготувати гуакамоле.",
    },
  ],
  livre: [
    {
      pos: 'noun',
      translation: 'книга',
      exEn: 'Il a passé tout le week-end à lire un nouveau livre.',
      exUa: 'Він провів увесь вихідний, читаючи нову книгу.',
    },
    {
      pos: 'noun',
      translation: 'фунт (вага або валюта)',
      exEn: 'Elle a acheté une livre de fraises fraîches au marché.',
      exUa: 'Вона купила фунт свіжої полуниці на ринку.',
    },
  ],
  voile: [
    {
      pos: 'noun',
      translation: 'вуаль, покривало',
      exEn: 'La mariée portait un long voile blanc.',
      exUa: 'Наречена носила довгу білу вуаль.',
    },
    {
      pos: 'noun',
      translation: 'парус',
      exEn: 'Le bateau hissa sa voile et quitta le port au lever du soleil.',
      exUa: 'Човен підняв вітрило і вийшов з порту на світанку.',
    },
  ],
  tour: [
    {
      pos: 'noun',
      translation: 'вежа',
      exEn: "Ils ont grimpé jusqu'au sommet de la vieille tour.",
      exUa: 'Вони піднялися на вершину старої вежі.',
    },
    {
      pos: 'noun',
      translation: 'черга, оберт',
      exEn: "C'était enfin son tour de parler lors de la réunion.",
      exUa: 'Нарешті настала її черга говорити на зустрічі.',
    },
  ],
  mode: [
    {
      pos: 'noun',
      translation: 'мода',
      exEn: 'Elle suit toujours les dernières tendances de la mode.',
      exUa: 'Вона завжди слідкує за останніми тенденціями моди.',
    },
    {
      pos: 'noun',
      translation: 'спосіб, режим',
      exEn: 'Le téléphone est resté en mode silencieux toute la nuit.',
      exUa: 'Телефон цілу ніч залишався в беззвучному режимі.',
    },
  ],
  poste: [
    {
      pos: 'noun',
      translation: 'посада',
      exEn: 'Elle a obtenu un nouveau poste dans une entreprise internationale.',
      exUa: 'Вона отримала нову посаду в міжнародній компанії.',
    },
    {
      pos: 'noun',
      translation: 'пошта (заклад)',
      exEn: 'Il a envoyé le colis depuis le bureau de poste local.',
      exUa: 'Він відправив посилку з місцевого поштового відділення.',
    },
  ],
  manche: [
    {
      pos: 'noun',
      translation: 'рукав',
      exEn: 'Elle a remonté ses manches avant de commencer à cuisiner.',
      exUa: 'Вона закотила рукави, перш ніж почати готувати.',
    },
    {
      pos: 'noun',
      translation: "руків'я, ручка",
      exEn: 'Le manche du marteau était fait de bois solide.',
      exUa: "Руків'я молотка було зроблене з міцного дерева.",
    },
  ],
  mémoire: [
    {
      pos: 'noun',
      translation: "пам'ять",
      exEn: 'Sa mémoire impressionnante lui permettait de réciter des poèmes entiers.',
      exUa: "Її вражаюча пам'ять дозволяла декламувати цілі вірші.",
    },
    {
      pos: 'noun',
      translation: 'дипломна робота, мемуар',
      exEn: "Il a passé des mois à rédiger son mémoire de fin d'études.",
      exUa: 'Він провів місяці, пишучи свою випускну дипломну роботу.',
    },
  ],
  physique: [
    {
      pos: 'noun',
      translation: 'фізика (наука)',
      exEn: "Elle étudie la physique quantique à l'université.",
      exUa: 'Вона вивчає квантову фізику в університеті.',
    },
    {
      pos: 'noun',
      translation: 'статура, зовнішність',
      exEn: 'Il garde un physique athlétique grâce à un entraînement régulier.',
      exUa: 'Він підтримує спортивну статуру завдяки регулярним тренуванням.',
    },
  ],
  somme: [
    {
      pos: 'noun',
      translation: 'сума (грошова)',
      exEn: 'Ils ont dépensé une somme considérable pour rénover la maison.',
      exUa: 'Вони витратили значну суму на ремонт будинку.',
    },
    {
      pos: 'noun',
      translation: 'короткий сон',
      exEn: 'Elle a fait un petit somme après le déjeuner.',
      exUa: 'Вона трохи поспала після обіду.',
    },
  ],
  vase: [
    {
      pos: 'noun',
      translation: 'ваза',
      exEn: 'Elle a mis les roses fraîches dans un vase en cristal.',
      exUa: 'Вона поставила свіжі троянди у кришталеву вазу.',
    },
    {
      pos: 'noun',
      translation: 'мул, баговиння',
      exEn: "Leurs bottes s'enfonçaient dans la vase au bord de l'étang.",
      exUa: 'Їхні чоботи загрузали в мулі біля краю ставка.',
    },
  ],
  moule: [
    {
      pos: 'noun',
      translation: 'форма (для випічки)',
      exEn: 'Elle a versé la pâte dans un moule à gâteau.',
      exUa: 'Вона налила тісто у форму для торта.',
    },
    {
      pos: 'noun',
      translation: 'мідія',
      exEn: 'Ils ont commandé des moules marinières au restaurant du port.',
      exUa: 'Вони замовили мідії в ресторані біля порту.',
    },
  ],
  poêle: [
    {
      pos: 'noun',
      translation: 'сковорода',
      exEn: 'Elle a fait revenir les oignons dans une poêle chaude.',
      exUa: 'Вона обсмажила цибулю на гарячій сковороді.',
    },
    {
      pos: 'noun',
      translation: 'піч, грубка',
      exEn: 'Une vieille poêle à bois chauffait toute la cabane.',
      exUa: "Стара дров'яна піч обігрівала всю хатину.",
    },
  ],
  glace: [
    {
      pos: 'noun',
      translation: 'лід',
      exEn: "Le lac était couvert d'une fine couche de glace en hiver.",
      exUa: 'Озеро взимку було вкрите тонким шаром льоду.',
    },
    {
      pos: 'noun',
      translation: 'дзеркало',
      exEn: "Elle s'est regardée dans la glace avant de sortir.",
      exUa: 'Вона подивилася на себе в дзеркало, перш ніж вийти.',
    },
  ],
  temps: [
    {
      pos: 'noun',
      translation: 'час',
      exEn: "Elle n'a jamais assez de temps pour tout terminer.",
      exUa: 'Їй ніколи не вистачає часу, щоб усе закінчити.',
    },
    {
      pos: 'noun',
      translation: 'погода',
      exEn: 'Le temps était parfait pour une longue promenade au bord de la mer.',
      exUa: 'Погода була ідеальною для довгої прогулянки біля моря.',
    },
  ],
  addition: [
    {
      pos: 'noun',
      translation: 'додавання',
      exEn: "Les enfants apprennent l'addition en première année.",
      exUa: 'Діти вивчають додавання в першому класі.',
    },
    {
      pos: 'noun',
      translation: 'рахунок (у ресторані)',
      exEn: "Il a demandé l'addition à la fin du repas.",
      exUa: 'Він попросив рахунок наприкінці трапези.',
    },
  ],
  carte: [
    {
      pos: 'noun',
      translation: 'карта (географічна)',
      exEn: 'Ils ont étudié la carte avant de partir en randonnée.',
      exUa: 'Вони вивчили карту перед тим, як вирушити в похід.',
    },
    {
      pos: 'noun',
      translation: 'меню',
      exEn: "Le serveur leur a apporté la carte dès qu'ils se sont assis.",
      exUa: 'Офіціант приніс їм меню, щойно вони сіли.',
    },
  ],
  pièce: [
    {
      pos: 'noun',
      translation: 'кімната',
      exEn: "L'appartement comptait quatre pièces lumineuses.",
      exUa: 'У квартирі було чотири світлі кімнати.',
    },
    {
      pos: 'noun',
      translation: 'монета',
      exEn: 'Il a trouvé une vieille pièce en argent dans le jardin.',
      exUa: 'Він знайшов стару срібну монету в саду.',
    },
  ],
  note: [
    {
      pos: 'noun',
      translation: 'оцінка (шкільна)',
      exEn: 'Elle a obtenu une excellente note à son examen final.',
      exUa: 'Вона отримала відмінну оцінку на випускному іспиті.',
    },
    {
      pos: 'noun',
      translation: 'нота (музична)',
      exEn: "Le pianiste a joué la dernière note avec beaucoup d'émotion.",
      exUa: 'Піаніст зіграв останню ноту з великим почуттям.',
    },
  ],
  col: [
    {
      pos: 'noun',
      translation: 'комір',
      exEn: 'Le col de sa chemise était soigneusement repassé.',
      exUa: 'Комір її сорочки був акуратно випрасуваний.',
    },
    {
      pos: 'noun',
      translation: 'гірський перевал',
      exEn: "Les cyclistes ont franchi le col après des heures d'effort.",
      exUa: 'Велосипедисти подолали гірський перевал після годин зусиль.',
    },
  ],
  feuille: [
    {
      pos: 'noun',
      translation: 'листок (дерева)',
      exEn: 'Une feuille jaune tomba doucement sur le sentier.',
      exUa: 'Жовтий листок тихо впав на стежку.',
    },
    {
      pos: 'noun',
      translation: 'аркуш (паперу)',
      exEn: 'Elle a écrit son adresse sur une feuille blanche.',
      exUa: 'Вона написала свою адресу на чистому аркуші.',
    },
  ],
  mine: [
    {
      pos: 'noun',
      translation: 'шахта, копальня',
      exEn: 'Son grand-père travaillait dans une mine de charbon.',
      exUa: 'Його дід працював на вугільній шахті.',
    },
    {
      pos: 'noun',
      translation: 'грифель (олівця)',
      exEn: "La mine du crayon s'est cassée pendant l'examen.",
      exUa: 'Грифель олівця зламався під час іспиту.',
    },
  ],
  chat: [
    {
      pos: 'noun',
      translation: 'кіт',
      exEn: 'Le chat dormait paisiblement sur le rebord de la fenêtre.',
      exUa: 'Кіт мирно спав на підвіконні.',
    },
    {
      pos: 'noun',
      translation: 'чат (онлайн-спілкування)',
      exEn: "Ils ont discuté pendant des heures sur le chat de l'entreprise.",
      exUa: 'Вони годинами спілкувалися в робочому чаті компанії.',
    },
  ],
  rose: [
    {
      pos: 'noun',
      translation: 'троянда',
      exEn: 'Il lui a offert une rose rouge pour son anniversaire.',
      exUa: 'Він подарував їй червону троянду на день народження.',
    },
    {
      pos: 'adj',
      translation: 'рожевий',
      exEn: 'Elle portait une robe rose pour la fête.',
      exUa: 'Вона була у рожевій сукні на святі.',
    },
  ],
  cours: [
    {
      pos: 'noun',
      translation: 'урок, заняття',
      exEn: 'Le cours de français commence à neuf heures.',
      exUa: "Урок французької починається о дев'ятій годині.",
    },
    {
      pos: 'noun',
      translation: 'курс (валюти, акцій)',
      exEn: "Le cours de l'action a chuté après l'annonce.",
      exUa: 'Курс акції впав після оголошення.',
    },
  ],
  fil: [
    {
      pos: 'noun',
      translation: 'нитка',
      exEn: 'Elle a cousu le bouton avec du fil rouge.',
      exUa: 'Вона пришила ґудзик червоною ниткою.',
    },
    {
      pos: 'noun',
      translation: 'дріт, провід',
      exEn: 'Un fil électrique pendait du plafond endommagé.',
      exUa: 'Електричний дріт звисав зі пошкодженої стелі.',
    },
  ],
  banc: [
    {
      pos: 'noun',
      translation: 'лава, лавка',
      exEn: 'Ils se sont assis sur un banc pour regarder les bateaux.',
      exUa: 'Вони сіли на лавку, щоб подивитися на човни.',
    },
    {
      pos: 'noun',
      translation: 'косяк (риби)',
      exEn: 'Un grand banc de poissons argentés traversa la baie.',
      exUa: 'Великий косяк сріблястих риб перетнув затоку.',
    },
  ],
  pile: [
    {
      pos: 'noun',
      translation: 'батарейка',
      exEn: 'La télécommande ne fonctionne plus, il faut changer la pile.',
      exUa: 'Пульт більше не працює, треба поміняти батарейку.',
    },
    {
      pos: 'noun',
      translation: 'стос, купа',
      exEn: "Une pile de dossiers s'entassait sur son bureau.",
      exUa: 'На її столі громадився стос документів.',
    },
  ],

  // ── Round 2 ─────────────────────────────────────────────────────────────
  conseil: [
    {
      pos: 'noun',
      translation: 'порада',
      exEn: "Elle lui a donné un sage conseil avant l'entretien.",
      exUa: 'Вона дала йому мудру пораду перед співбесідою.',
    },
    {
      pos: 'noun',
      translation: 'рада (орган)',
      exEn: 'Le conseil municipal se réunit chaque mardi.',
      exUa: 'Міська рада засідає щовівторка.',
    },
  ],
  affaire: [
    {
      pos: 'noun',
      translation: 'справа, бізнес',
      exEn: 'Il a monté son affaire il y a dix ans.',
      exUa: 'Він заснував свій бізнес десять років тому.',
    },
    {
      pos: 'noun',
      translation: 'справа (судова)',
      exEn: "L'affaire sera jugée le mois prochain.",
      exUa: 'Справу розглядатимуть наступного місяця.',
    },
  ],
  bibliothèque: [
    {
      pos: 'noun',
      translation: 'бібліотека',
      exEn: 'Elle passait des heures à étudier dans la bibliothèque.',
      exUa: 'Вона годинами навчалася в бібліотеці.',
    },
    {
      pos: 'noun',
      translation: 'книжкова шафа',
      exEn: 'Il a rangé tous ses livres dans la bibliothèque du salon.',
      exUa: 'Він розставив усі свої книги в книжковій шафі вітальні.',
    },
  ],
  corps: [
    {
      pos: 'noun',
      translation: 'тіло',
      exEn: 'Elle sentait la fatigue dans tout son corps après la course.',
      exUa: 'Вона відчувала втому в усьому тілі після забігу.',
    },
    {
      pos: 'noun',
      translation: 'корпус, орган (організація)',
      exEn: 'Le corps diplomatique assistait à la cérémonie.',
      exUa: 'Дипломатичний корпус був присутній на церемонії.',
    },
  ],
  chaîne: [
    {
      pos: 'noun',
      translation: 'ланцюг',
      exEn: 'Le chien était attaché avec une lourde chaîne.',
      exUa: "Собака був прив'язаний важким ланцюгом.",
    },
    {
      pos: 'noun',
      translation: 'телеканал',
      exEn: 'Ils regardaient les informations sur leur chaîne préférée.',
      exUa: 'Вони дивилися новини на своєму улюбленому телеканалі.',
    },
  ],
  côte: [
    {
      pos: 'noun',
      translation: 'узбережжя',
      exEn: 'Ils ont passé leurs vacances sur la côte atlantique.',
      exUa: 'Вони провели відпустку на атлантичному узбережжі.',
    },
    {
      pos: 'noun',
      translation: 'ребро',
      exEn: "Il s'est cassé une côte en tombant de vélo.",
      exUa: 'Він зламав ребро, впавши з велосипеда.',
    },
  ],
  cour: [
    {
      pos: 'noun',
      translation: 'двір (внутрішній)',
      exEn: "Les enfants jouaient dans la cour de l'école.",
      exUa: 'Діти гралися у шкільному дворі.',
    },
    {
      pos: 'noun',
      translation: 'суд, королівський двір',
      exEn: "L'affaire a été portée devant la cour suprême.",
      exUa: 'Справу подали до верховного суду.',
    },
  ],
  composer: [
    {
      pos: 'v',
      translation: 'складати, писати (музику)',
      exEn: "Il a composé cette symphonie à l'âge de vingt ans.",
      exUa: 'Він склав цю симфонію у двадцять років.',
    },
    {
      pos: 'v',
      translation: 'набирати (номер телефону)',
      exEn: "Elle a composé le numéro d'urgence immédiatement.",
      exUa: 'Вона негайно набрала номер екстреної служби.',
    },
  ],
  société: [
    {
      pos: 'noun',
      translation: 'компанія, фірма',
      exEn: 'Il travaille pour une grande société internationale.',
      exUa: 'Він працює у великій міжнародній компанії.',
    },
    {
      pos: 'noun',
      translation: 'суспільство',
      exEn: 'La société moderne fait face à de nombreux défis.',
      exUa: 'Сучасне суспільство стикається з багатьма викликами.',
    },
  ],
  légende: [
    {
      pos: 'noun',
      translation: 'легенда (переказ)',
      exEn: 'Selon la légende, un dragon vivait dans ces montagnes.',
      exUa: 'За легендою, у цих горах жив дракон.',
    },
    {
      pos: 'noun',
      translation: 'підпис (під фото)',
      exEn: 'La légende sous la photo expliquait le contexte.',
      exUa: 'Підпис під фото пояснював контекст.',
    },
  ],
  couture: [
    {
      pos: 'noun',
      translation: 'шиття, кравецтво',
      exEn: 'Elle a appris la couture de sa grand-mère.',
      exUa: 'Вона навчилася шиття від своєї бабусі.',
    },
    {
      pos: 'noun',
      translation: 'шов',
      exEn: "La couture de la veste s'est défaite.",
      exUa: 'Шов на куртці розпустився.',
    },
  ],
  garde: [
    {
      pos: 'noun',
      translation: 'охоронець',
      exEn: "Un garde surveillait l'entrée du musée toute la nuit.",
      exUa: 'Охоронець стежив за входом до музею всю ніч.',
    },
    {
      pos: 'noun',
      translation: 'опіка (юридична)',
      exEn: 'Le tribunal lui a accordé la garde de ses enfants.',
      exUa: 'Суд надав їй опіку над дітьми.',
    },
  ],
  couche: [
    {
      pos: 'noun',
      translation: 'шар, прошарок',
      exEn: 'La neige formait une fine couche sur le toit.',
      exUa: 'Сніг утворив тонкий шар на даху.',
    },
    {
      pos: 'noun',
      translation: 'підгузок',
      exEn: 'Elle a changé la couche du bébé avant de partir.',
      exUa: 'Вона поміняла підгузок дитині перед виходом.',
    },
  ],
  dépôt: [
    {
      pos: 'noun',
      translation: 'депозит, внесок',
      exEn: "Il a fait un dépôt initial pour réserver l'appartement.",
      exUa: 'Він зробив початковий депозит, щоб забронювати квартиру.',
    },
    {
      pos: 'noun',
      translation: 'склад, депо',
      exEn: 'Les marchandises étaient stockées dans un grand dépôt.',
      exUa: 'Товари зберігалися на великому складі.',
    },
  ],
  chiffre: [
    {
      pos: 'noun',
      translation: 'цифра',
      exEn: 'Elle a écrit le chiffre cinq sur le tableau.',
      exUa: "Вона написала цифру п'ять на дошці.",
    },
    {
      pos: 'noun',
      translation: 'оборот, виручка',
      exEn: "Le chiffre d'affaires de l'entreprise a doublé cette année.",
      exUa: 'Оборот компанії цього року подвоївся.',
    },
  ],
  bureau: [
    {
      pos: 'noun',
      translation: 'письмовий стіл',
      exEn: 'Elle a laissé ses lunettes sur le bureau.',
      exUa: 'Вона залишила окуляри на письмовому столі.',
    },
    {
      pos: 'noun',
      translation: 'офіс, кабінет',
      exEn: 'Il passe dix heures par jour au bureau.',
      exUa: 'Він проводить десять годин на день в офісі.',
    },
  ],
  course: [
    {
      pos: 'noun',
      translation: 'забіг, перегони',
      exEn: 'Elle a gagné la course malgré la pluie.',
      exUa: 'Вона виграла забіг попри дощ.',
    },
    {
      pos: 'noun',
      translation: 'доручення, справа',
      exEn: 'Il devait faire une course rapide avant le déjeuner.',
      exUa: 'Йому треба було швидко виконати одне доручення перед обідом.',
    },
  ],
  faute: [
    {
      pos: 'noun',
      translation: 'помилка, провина',
      exEn: "Ce n'était pas sa faute si le train était en retard.",
      exUa: 'Це була не її провина, що потяг запізнився.',
    },
    {
      pos: 'noun',
      translation: 'фол (спортивний)',
      exEn: "L'arbitre a sifflé une faute juste avant la mi-temps.",
      exUa: 'Суддя зафіксував фол якраз перед перервою.',
    },
  ],
  expérience: [
    {
      pos: 'noun',
      translation: 'досвід',
      exEn: "Elle a beaucoup d'expérience dans ce domaine.",
      exUa: 'Вона має великий досвід у цій сфері.',
    },
    {
      pos: 'noun',
      translation: 'експеримент',
      exEn: 'Les élèves ont réalisé une expérience en classe de chimie.',
      exUa: 'Учні провели експеримент на уроці хімії.',
    },
  ],
  palais: [
    {
      pos: 'noun',
      translation: 'палац',
      exEn: 'Le palais royal attirait des milliers de touristes chaque année.',
      exUa: 'Королівський палац щороку приваблював тисячі туристів.',
    },
    {
      pos: 'noun',
      translation: 'піднебіння (смак)',
      exEn: 'Le chef avait un palais raffiné pour les épices.',
      exUa: 'Шеф-кухар мав витончене відчуття смаку до спецій.',
    },
  ],
  siège: [
    {
      pos: 'noun',
      translation: 'сидіння, місце',
      exEn: 'Elle a réservé un siège près de la fenêtre.',
      exUa: 'Вона забронювала місце біля вікна.',
    },
    {
      pos: 'noun',
      translation: 'облога',
      exEn: 'La ville résistait au siège depuis des mois.',
      exUa: 'Місто чинило опір облозі вже кілька місяців.',
    },
  ],
  plat: [
    {
      pos: 'noun',
      translation: 'страва',
      exEn: 'Le chef présenta un plat délicieux à base de poisson.',
      exUa: 'Шеф-кухар подав смачну страву з риби.',
    },
    {
      pos: 'adj',
      translation: 'плаский, рівний',
      exEn: 'Le terrain était parfaitement plat près du lac.',
      exUa: 'Місцевість біля озера була цілком рівною.',
    },
  ],
  volant: [
    {
      pos: 'noun',
      translation: 'кермо',
      exEn: 'Elle tenait fermement le volant pendant la tempête.',
      exUa: 'Вона міцно тримала кермо під час бурі.',
    },
    {
      pos: 'noun',
      translation: 'волан (бадмінтон)',
      exEn: "Le volant atterrit juste à l'extérieur du terrain.",
      exUa: 'Волан приземлився якраз за межами майданчика.',
    },
  ],
  queue: [
    {
      pos: 'noun',
      translation: 'хвіст',
      exEn: 'Le chat agitait sa queue avec impatience.',
      exUa: 'Кіт нетерпляче ворушив хвостом.',
    },
    {
      pos: 'noun',
      translation: 'черга',
      exEn: 'Ils ont attendu une heure dans la queue.',
      exUa: 'Вони чекали годину в черзі.',
    },
  ],
  patte: [
    {
      pos: 'noun',
      translation: 'лапа',
      exEn: 'Le chien leva la patte pour saluer son maître.',
      exUa: 'Собака підняв лапу, щоб привітати господаря.',
    },
    {
      pos: 'noun',
      translation: 'нога (розмовно, про людину)',
      exEn: "Il s'est cogné la patte contre la table en se levant.",
      exUa: 'Він вдарився ногою об стіл, вставаючи.',
    },
  ],

  // ── Round 3 ─────────────────────────────────────────────────────────────
  frais: [
    {
      pos: 'adj',
      translation: 'свіжий',
      exEn: 'Elle a acheté du pain frais ce matin.',
      exUa: 'Вона купила свіжий хліб сьогодні вранці.',
    },
    {
      pos: 'noun',
      translation: 'витрати, видатки',
      exEn: 'Les frais de scolarité ont augmenté cette année.',
      exUa: 'Плата за навчання цього року зросла.',
    },
  ],
  pêche: [
    {
      pos: 'noun',
      translation: 'персик',
      exEn: 'Elle a mangé une pêche juteuse pour le goûter.',
      exUa: "Вона з'їла соковитий персик на полудень.",
    },
    {
      pos: 'noun',
      translation: 'риболовля',
      exEn: 'Ils sont partis à la pêche tôt le matin.',
      exUa: 'Вони рано-вранці вирушили на риболовлю.',
    },
  ],
  sol: [
    {
      pos: 'noun',
      translation: 'земля, підлога',
      exEn: "Le verre est tombé et s'est brisé sur le sol.",
      exUa: 'Склянка впала і розбилася об підлогу.',
    },
    {
      pos: 'noun',
      translation: 'соль (нота)',
      exEn: 'Le morceau commence sur la note de sol.',
      exUa: 'Твір починається з ноти соль.',
    },
  ],
  mousse: [
    {
      pos: 'noun',
      translation: 'піна',
      exEn: 'La mousse débordait du verre de bière.',
      exUa: 'Піна переливалася через край склянки пива.',
    },
    {
      pos: 'noun',
      translation: 'мох',
      exEn: 'Une épaisse couche de mousse couvrait les rochers.',
      exUa: 'Товстий шар моху вкривав каміння.',
    },
  ],
  gorge: [
    {
      pos: 'noun',
      translation: 'горло',
      exEn: 'Elle avait mal à la gorge depuis trois jours.',
      exUa: 'У неї боліло горло вже три дні.',
    },
    {
      pos: 'noun',
      translation: 'ущелина',
      exEn: "La rivière coulait au fond d'une profonde gorge.",
      exUa: 'Річка текла на дні глибокої ущелини.',
    },
  ],
  poignée: [
    {
      pos: 'noun',
      translation: 'ручка (дверей)',
      exEn: 'La poignée de la porte était cassée depuis des semaines.',
      exUa: 'Дверна ручка була зламана вже кілька тижнів.',
    },
    {
      pos: 'noun',
      translation: 'жменя',
      exEn: 'Il a pris une poignée de cerises dans le bol.',
      exUa: 'Він узяв жменю вишень з миски.',
    },
  ],
  objectif: [
    {
      pos: 'noun',
      translation: 'мета, ціль',
      exEn: 'Son objectif était de terminer le marathon en trois heures.',
      exUa: 'Її метою було завершити марафон за три години.',
    },
    {
      pos: 'noun',
      translation: "об'єктив (камери)",
      exEn: "Le photographe nettoya soigneusement l'objectif avant la séance.",
      exUa: "Фотограф ретельно почистив об'єктив перед зйомкою.",
    },
  ],
  entretien: [
    {
      pos: 'noun',
      translation: 'співбесіда',
      exEn: "Elle se préparait nerveusement pour l'entretien d'embauche.",
      exUa: 'Вона нервово готувалася до співбесіди на роботу.',
    },
    {
      pos: 'noun',
      translation: 'технічне обслуговування',
      exEn: "L'entretien régulier de la voiture évite bien des pannes.",
      exUa: 'Регулярне технічне обслуговування авто запобігає поломкам.',
    },
  ],
  bas: [
    {
      pos: 'adj',
      translation: 'низький',
      exEn: 'Le plafond était très bas dans cette vieille maison.',
      exUa: 'Стеля в цьому старому будинку була дуже низькою.',
    },
    {
      pos: 'noun',
      translation: 'панчоха',
      exEn: 'Elle a filé son bas en sortant de la voiture.',
      exUa: 'Вона порвала панчоху, виходячи з машини.',
    },
  ],
  nœud: [
    {
      pos: 'noun',
      translation: 'вузол',
      exEn: 'Il a fait un double nœud avant la course.',
      exUa: "Він зав'язав подвійний вузол перед забігом.",
    },
    {
      pos: 'noun',
      translation: 'вузол (мережевий)',
      exEn: 'Chaque nœud du réseau transmettait les données rapidement.',
      exUa: 'Кожен вузол мережі швидко передавав дані.',
    },
  ],
  langue: [
    {
      pos: 'noun',
      translation: 'язик (частина тіла)',
      exEn: 'Le médecin lui a demandé de tirer la langue.',
      exUa: 'Лікар попросив її висунути язик.',
    },
    {
      pos: 'noun',
      translation: 'мова',
      exEn: 'Elle parle couramment trois langues étrangères.',
      exUa: 'Вона вільно розмовляє трьома іноземними мовами.',
    },
  ],
  salon: [
    {
      pos: 'noun',
      translation: 'вітальня',
      exEn: 'Toute la famille se réunissait dans le salon le soir.',
      exUa: 'Уся родина збиралася у вітальні щовечора.',
    },
    {
      pos: 'noun',
      translation: 'виставка, салон',
      exEn: "Ils ont présenté leur nouveau modèle au salon de l'automobile.",
      exUa: 'Вони представили свою нову модель на автомобільному салоні.',
    },
  ],
  membre: [
    {
      pos: 'noun',
      translation: 'кінцівка',
      exEn: 'Il a senti une douleur dans tous ses membres après la course.',
      exUa: 'Він відчув біль у всіх кінцівках після забігу.',
    },
    {
      pos: 'noun',
      translation: 'член (організації)',
      exEn: "Elle est devenue membre du club l'année dernière.",
      exUa: 'Минулого року вона стала членом клубу.',
    },
  ],
  nom: [
    {
      pos: 'noun',
      translation: "ім'я, прізвище",
      exEn: 'Elle a écrit son nom en haut de la page.',
      exUa: "Вона написала своє ім'я вгорі сторінки.",
    },
    {
      pos: 'noun',
      translation: 'іменник (граматика)',
      exEn: 'Le professeur expliqua la différence entre un nom et un verbe.',
      exUa: 'Вчитель пояснив різницю між іменником і дієсловом.',
    },
  ],
  serviette: [
    {
      pos: 'noun',
      translation: 'серветка',
      exEn: 'Elle a posé une serviette en papier à côté de chaque assiette.',
      exUa: 'Вона поклала паперову серветку біля кожної тарілки.',
    },
    {
      pos: 'noun',
      translation: 'рушник',
      exEn: 'Il a pris une serviette propre après la douche.',
      exUa: 'Він узяв чистий рушник після душу.',
    },
  ],
  portefeuille: [
    {
      pos: 'noun',
      translation: 'гаманець',
      exEn: 'Il a oublié son portefeuille sur la table du café.',
      exUa: 'Він забув гаманець на столику в кафе.',
    },
    {
      pos: 'noun',
      translation: 'портфель (інвестиційний)',
      exEn: "Elle gère un portefeuille d'investissements diversifié.",
      exUa: 'Вона керує диверсифікованим інвестиційним портфелем.',
    },
  ],
  taille: [
    {
      pos: 'noun',
      translation: 'розмір',
      exEn: "Ce manteau n'est pas disponible dans sa taille.",
      exUa: 'Цього пальта немає в її розмірі.',
    },
    {
      pos: 'noun',
      translation: 'талія',
      exEn: 'Elle portait une ceinture fine autour de la taille.',
      exUa: 'Вона носила тонкий пасок навколо талії.',
    },
  ],
  serveur: [
    {
      pos: 'noun',
      translation: 'офіціант',
      exEn: 'Le serveur leur apporta le menu en souriant.',
      exUa: 'Офіціант з усмішкою приніс їм меню.',
    },
    {
      pos: 'noun',
      translation: "сервер (комп'ютерний)",
      exEn: 'Le serveur est tombé en panne pendant la mise à jour.',
      exUa: 'Сервер вийшов з ладу під час оновлення.',
    },
  ],
  plateau: [
    {
      pos: 'noun',
      translation: 'піднос',
      exEn: 'Elle apporta le petit déjeuner sur un plateau en bois.',
      exUa: "Вона принесла сніданок на дерев'яному підносі.",
    },
    {
      pos: 'noun',
      translation: 'плато (геогр.)',
      exEn: 'Le village était niché sur un haut plateau montagneux.',
      exUa: 'Село розташувалося на високогірному плато.',
    },
  ],
  compte: [
    {
      pos: 'noun',
      translation: 'рахунок (банківський)',
      exEn: 'Elle a ouvert un compte dans une nouvelle banque.',
      exUa: 'Вона відкрила рахунок у новому банку.',
    },
    {
      pos: 'v',
      translation: 'рахувати',
      exEn: "L'enfant apprenait à compter jusqu'à cent.",
      exUa: 'Дитина вчилася рахувати до ста.',
    },
  ],
  chambre: [
    {
      pos: 'noun',
      translation: 'спальня',
      exEn: 'Les enfants jouaient tranquillement dans leur chambre.',
      exUa: 'Діти тихо гралися у своїй спальні.',
    },
    {
      pos: 'noun',
      translation: 'палата (законодавча)',
      exEn: 'La loi fut votée par la chambre des députés.',
      exUa: 'Закон ухвалила палата депутатів.',
    },
  ],
  point: [
    {
      pos: 'noun',
      translation: 'крапка',
      exEn: 'Elle oublia de mettre un point à la fin de la phrase.',
      exUa: 'Вона забула поставити крапку в кінці речення.',
    },
    {
      pos: 'noun',
      translation: 'стібок (шиття)',
      exEn: "L'infirmière fit un point pour refermer la plaie.",
      exUa: 'Медсестра наклала стібок, щоб закрити рану.',
    },
  ],
  cadre: [
    {
      pos: 'noun',
      translation: 'рамка',
      exEn: 'Elle a mis la photo de famille dans un joli cadre.',
      exUa: 'Вона вставила сімейне фото в гарну рамку.',
    },
    {
      pos: 'noun',
      translation: 'керівник (компанії)',
      exEn: "Il est devenu cadre supérieur après dix ans dans l'entreprise.",
      exUa: 'Він став старшим керівником після десяти років у компанії.',
    },
  ],
  feu: [
    {
      pos: 'noun',
      translation: 'вогонь',
      exEn: "Ils se réchauffaient autour d'un grand feu de camp.",
      exUa: 'Вони грілися біля великого багаття.',
    },
    {
      pos: 'noun',
      translation: 'світлофор',
      exEn: "La voiture s'arrêta au feu rouge.",
      exUa: 'Машина зупинилася на червоне світло світлофора.',
    },
  ],
  fiche: [
    {
      pos: 'noun',
      translation: 'картка, бланк',
      exEn: 'Elle a rempli une fiche avec ses coordonnées.',
      exUa: 'Вона заповнила картку зі своїми контактними даними.',
    },
    {
      pos: 'noun',
      translation: 'вилка, штекер',
      exEn: 'La fiche électrique ne rentrait pas dans la prise.',
      exUa: 'Електрична вилка не вставлялася в розетку.',
    },
  ],
};

export const SENSES_IT: Record<string, SenseEntry[]> = {
  libreria: [
    {
      pos: 'noun',
      translation: 'книжкова шафа (меблі)',
      exEn: 'La vecchia libreria di legno era piena di romanzi classici.',
      exUa: 'Стара деревʼяна книжкова шафа була повна класичних романів.',
    },
    {
      pos: 'noun',
      translation: 'книгарня (магазин)',
      exEn: 'Ha passato ore a curiosare nella libreria locale.',
      exUa: 'Він провів години, розглядаючи книжки в місцевій книгарні.',
    },
  ],
};

export const SENSES_PT: Record<string, SenseEntry[]> = {
  conta: [
    {
      pos: 'noun',
      translation: 'рахунок (банківський)',
      exEn: 'Ele abriu uma nova conta no banco.',
      exUa: 'Він відкрив новий рахунок у банку.',
    },
    {
      pos: 'noun',
      translation: 'рахунок (у ресторані)',
      exEn: 'O garçom trouxe a conta no final do longo jantar.',
      exUa: 'Офіціант приніс рахунок наприкінці довгої вечері.',
    },
    {
      pos: 'noun',
      translation: 'бісеринка (на ниточці)',
      exEn: 'Ela enfiou pequenas contas de vidro no colar de fio de prata.',
      exUa: 'Вона нанизала маленькі скляні бісеринки на срібний ланцюжок намиста.',
    },
  ],
  ativo: [
    {
      pos: 'adj',
      translation: 'активний',
      exEn: 'Tente se manter ativo durante o fim de semana.',
      exUa: 'Намагайся залишатися активним протягом вихідних.',
    },
    {
      pos: 'noun',
      translation: 'актив (фінансовий)',
      exEn: 'A equipe experiente é o maior ativo da empresa.',
      exUa: 'Досвідчена команда — найбільший актив компанії.',
    },
  ],
  conselho: [
    {
      pos: 'noun',
      translation: 'порада',
      exEn: 'Obrigado pelo ótimo conselho que você me deu.',
      exUa: 'Дякую за чудову пораду, яку ти мені дав.',
    },
    {
      pos: 'noun',
      translation: 'рада (адміністративна)',
      exEn: 'O conselho da empresa se reuniu com urgência para discutir a crise financeira.',
      exUa: 'Рада компанії терміново зібралася, щоб обговорити фінансову кризу.',
    },
  ],
  caixa: [
    {
      pos: 'noun',
      translation: 'коробка, ящик',
      exEn: 'Coloque todos os livros antigos naquela caixa lá.',
      exUa: 'Поклади всі старі книжки в той ящик.',
    },
    {
      pos: 'noun',
      translation: 'касир (особа)',
      exEn: 'O caixa contou o troco e o devolveu com um sorriso.',
      exUa: 'Касир рахував решту і повернув її з усмішкою.',
    },
  ],
};

export const SENSES_DE: Record<string, SenseEntry[]> = {
  bank: [
    {
      pos: 'noun',
      translation: 'берег (річки)',
      exEn: 'Sie saßen am grasbewachsenen Flussufer und angelten, nahe der alten Bank.',
      exUa: "Вони сиділи на трав'янистому березі річки і рибалили, біля старої лавки.",
    },
    {
      pos: 'noun',
      translation: 'лавка, скамія',
      exEn: 'Ein alter Mann saß allein auf einer hölzernen Parkbank.',
      exUa: 'Старий чоловік сидів сам на деревʼяній лавці в парку.',
    },
  ],
  decke: [
    {
      pos: 'noun',
      translation: 'ковдра',
      exEn: 'Sie zog sich die warme weiche Decke um die Schultern.',
      exUa: "Вона накинула теплу м'яку ковдру на плечі.",
    },
    {
      pos: 'noun',
      translation: 'стеля',
      exEn: 'Der hohe alte Raum hatte eine kunstvoll bemalte Decke.',
      exUa: 'У високій старій кімнаті була майстерно розписана стеля.',
    },
  ],
};

export const SENSES_PL: Record<string, SenseEntry[]> = {
  koło: [
    {
      pos: 'noun',
      translation: 'коло (геометрична фігура)',
      exEn: 'Dzieci usiadły w kole na podłodze klasy.',
      exUa: 'Діти сіли колом на підлозі класу.',
    },
    {
      pos: 'prep',
      translation: 'біля, поруч',
      exEn: 'Siedziała spokojnie koło niego przez całą długą podróż.',
      exUa: 'Вона спокійно сиділа біля нього протягом усієї довгої подорожі.',
    },
  ],
};

export const SENSES_NL: Record<string, SenseEntry[]> = {
  klok: [
    {
      pos: 'noun',
      translation: 'годинник (настінний)',
      exEn: 'De klok aan de muur toont de verkeerde tijd.',
      exUa: 'Годинник на стіні показує неправильний час.',
    },
    {
      pos: 'noun',
      translation: 'дзвін (церковний)',
      exEn: 'De kerkklok luidde luid elk uur door de dag.',
      exUa: 'Церковний дзвін голосно дзвонив щогодини протягом дня.',
    },
  ],
  band: [
    {
      pos: 'noun',
      translation: 'емоційний звʼязок',
      exEn: 'Kinderen ontwikkelen sterke gehechtheid en een hechte band met hun verzorgers.',
      exUa: "Діти розвивають міцну прив'язаність і тісний звʼязок зі своїми опікунами.",
    },
    {
      pos: 'noun',
      translation: 'музичний гурт',
      exEn: 'De rockband speelde drie toegiften voor het enthousiaste publiek.',
      exUa: 'Рок-гурт зіграв три біси для захопленої публіки.',
    },
  ],
  bot: [
    {
      pos: 'noun',
      translation: 'кістка',
      exEn: 'De hond begroef zijn favoriete bot in de tuin.',
      exUa: 'Пес закопав свою улюблену кістку в саду.',
    },
    {
      pos: 'adj',
      translation: 'грубий, нечемний',
      exEn: 'Zijn botte manieren stootten veel mensen af.',
      exUa: 'Його грубі манери відштовхували багатьох людей.',
    },
  ],
};

export const SENSES_TR: Record<string, SenseEntry[]> = {
  top: [
    {
      pos: 'noun',
      translation: 'мʼяч',
      exEn: 'Çocuklar bahçede topu tekmeliyordu.',
      exUa: 'Діти ганяли мʼяч у саду.',
    },
    {
      pos: 'noun',
      translation: 'гармата',
      exEn: 'Eski top kalenin girişini koruyordu.',
      exUa: 'Стара гармата охороняла вхід до фортеці.',
    },
  ],
  daire: [
    {
      pos: 'noun',
      translation: 'квартира',
      exEn: 'Şehir merkezinde küçük bir daire kiraladı.',
      exUa: 'Вона винайняла маленьку квартиру в центрі міста.',
    },
    {
      pos: 'noun',
      translation: 'коло (геометрична фігура)',
      exEn: 'Çocuklar sınıfın zemininde daire şeklinde oturdu.',
      exUa: 'Діти сіли колом на підлозі класу.',
    },
  ],
  kemer: [
    {
      pos: 'noun',
      translation: 'пояс, ремінь',
      exEn: 'Biraz kilo verdikten sonra deri kemerini sıkılaştırdı.',
      exUa: 'Схудши трохи, вона підтягнула свій шкіряний пояс.',
    },
    {
      pos: 'noun',
      translation: 'арка (архітектурна)',
      exEn: 'Eski taş kemerden geçerek avluya girdiler.',
      exUa: 'Вони пройшли через стару каменю арку у двір.',
    },
  ],
  sıra: [
    {
      pos: 'noun',
      translation: 'черга, порядок',
      exEn: 'Dükkân çok çeşitli renkli taze sebzeleri sırayla sergiledi.',
      exUa: 'Магазин виставив різноманітні свіжі овочі рядами по черзі.',
    },
    {
      pos: 'noun',
      translation: 'парта, лавка (у класі)',
      exEn: 'Yaşlı bir adam ahşap park bankında, sırada tek başına oturuyordu.',
      exUa: 'Старий чоловік сидів сам на деревʼяній лавці в парку.',
    },
  ],
};

export const SENSES_EL: Record<string, SenseEntry[]> = {
  διαμέρισμα: [
    {
      pos: 'noun',
      translation: 'квартира',
      exEn: 'Νοίκιασε ένα μικρό διαμέρισμα στο κέντρο της πόλης.',
      exUa: 'Вона винайняла маленьку квартиру в центрі міста.',
    },
    {
      pos: 'noun',
      translation: 'відділення, секція (у валізі тощо)',
      exEn: 'Φύλασσε το διαβατήριό της σε ξεχωριστό διαμέρισμα της τσάντας της.',
      exUa: 'Вона зберігала свій паспорт у окремому відділенні своєї сумки.',
    },
  ],
  καφέ: [
    {
      pos: 'adj',
      translation: 'коричневий (колір)',
      exEn: 'Έχει καφέ μαλλιά και πράσινα μάτια.',
      exUa: 'У неї коричневе волосся і зелені очі.',
    },
    {
      pos: 'noun',
      translation: 'кафе (заклад)',
      exEn: 'Συναντήθηκαν σε ένα ευχάριστο καφέ κοντά στον σιδηροδρομικό σταθμό.',
      exUa: 'Вони зустрілися в приємному кафе біля залізничного вокзалу.',
    },
  ],
};

export const SENSES_HE: Record<string, SenseEntry[]> = {
  כדור: [
    {
      pos: 'noun',
      translation: 'мʼяч',
      exEn: 'הילדים בעטו בכדור בגינה.',
      exUa: 'Діти ганяли мʼяч у саду.',
    },
    {
      pos: 'noun',
      translation: 'куля (патрон)',
      exEn: 'המשטרה מצאה כדור תקוע בקיר הבניין.',
      exUa: 'Поліція знайшла кулю, застряглу в стіні будівлі.',
    },
  ],
  בירה: [
    {
      pos: 'noun',
      translation: 'пиво',
      exEn: 'הם הזמינו סבב בירה בבר.',
      exUa: 'Вони замовили по пиву в барі.',
    },
    {
      pos: 'noun',
      translation: 'столиця (місто)',
      exEn: 'פריז היא בירת צרפת היפה וההיסטורית.',
      exUa: 'Париж — це прекрасна й історична столиця Франції.',
    },
  ],
  תא: [
    {
      pos: 'noun',
      translation: 'кабінка, будка (телефонна)',
      exEn: 'הוא נכנס לתא הטלפון לבצע שיחה פרטית.',
      exUa: 'Він зайшов у телефонну будку, щоб зробити приватний дзвінок.',
    },
    {
      pos: 'noun',
      translation: 'клітина (біологічна)',
      exEn: 'כל יצור חי בנוי מתאים קטנים.',
      exUa: 'Кожна жива істота складається з маленьких клітин.',
    },
  ],
  מטען: [
    {
      pos: 'noun',
      translation: 'багаж',
      exEn: 'אנא ודא שהמטען שלך לא עולה על 20 ק"ג.',
      exUa: 'Будь ласка, переконайтеся, що ваш багаж не перевищує 20 кг.',
    },
    {
      pos: 'noun',
      translation: 'зарядний пристрій',
      exEn: 'הטלפון שלי נגמר והשארתי את המטען בבית.',
      exUa: 'У мого телефону закінчився заряд, а зарядний пристрій я залишив дома.',
    },
  ],
  מקור: [
    {
      pos: 'noun',
      translation: 'дзьоб (птаха)',
      exEn: 'הציפור השתמשה במקורה החד לפצח את הקליפה הקשה.',
      exUa: 'Птах використав свій гострий дзьоб, щоб розколоти тверду шкірку.',
    },
    {
      pos: 'noun',
      translation: 'джерело, походження',
      exEn: 'ייחוס נכון של מקורות הוא חיוני בכתיבה אקדמית.',
      exUa: 'Правильне зазначення джерел є важливим в академічному письмі.',
    },
  ],
};

export const SENSES_BY_LANG: Record<string, Record<string, SenseEntry[]>> = {
  en: SENSES,
  ua: SENSES_UA,
  es: SENSES_ES,
  fr: SENSES_FR,
  it: SENSES_IT,
  pt: SENSES_PT,
  de: SENSES_DE,
  pl: SENSES_PL,
  nl: SENSES_NL,
  tr: SENSES_TR,
  el: SENSES_EL,
  he: SENSES_HE,
};
