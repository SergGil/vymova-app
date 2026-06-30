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
  'light': [
    { pos: 'noun', translation: 'світло', exEn: 'Please turn on the light in the hallway.', exUa: 'Будь ласка, увімкни світло в коридорі.' },
    { pos: 'adj',  translation: 'легкий (за вагою)', exEn: 'This suitcase is surprisingly light for its size.', exUa: 'Ця валіза несподівано легка для свого розміру.' },
  ],
  'right': [
    { pos: 'adj',  translation: 'правильний', exEn: 'You gave the right answer to every question.', exUa: 'Ти дав правильну відповідь на кожне запитання.' },
    { pos: 'noun', translation: 'право', exEn: 'Everyone has the right to a fair trial.', exUa: 'Кожен має право на справедливий суд.' },
    { pos: 'adv',  translation: 'праворуч', exEn: 'Turn right at the next intersection.', exUa: 'Поверни праворуч на наступному перехресті.' },
  ],
  'mean': [
    { pos: 'adj', translation: 'злий, підлий', exEn: 'It was mean of him to laugh at her mistake.', exUa: 'Було підло з його боку насміхатися з її помилки.' },
    { pos: 'v',   translation: 'означати', exEn: 'What does this strange word actually mean?', exUa: 'Що насправді означає це дивне слово?' },
  ],
  'fine': [
    { pos: 'adj',  translation: 'чудовий, добрий', exEn: 'We had a fine evening at the theatre.', exUa: 'У нас був чудовий вечір у театрі.' },
    { pos: 'noun', translation: 'штраф', exEn: 'She paid a fine for parking illegally.', exUa: 'Вона заплатила штраф за неправильне паркування.' },
  ],
  'mind': [
    { pos: 'noun', translation: 'розум', exEn: 'Meditation helps to calm an anxious mind.', exUa: 'Медитація допомагає заспокоїти неспокійний розум.' },
    { pos: 'v',    translation: 'заперечувати, мати щось проти', exEn: 'Would you mind closing the window?', exUa: 'Ти не проти зачинити вікно?' },
  ],
  'present': [
    { pos: 'noun', translation: 'подарунок', exEn: 'She wrapped the present in colourful paper.', exUa: 'Вона завернула подарунок у барвистий папір.' },
    { pos: 'v',    translation: 'представляти, демонструвати', exEn: 'She will present her findings tomorrow.', exUa: 'Вона представить свої висновки завтра.' },
    { pos: 'adj',  translation: 'присутній', exEn: 'All the team members were present at the meeting.', exUa: 'Усі члени команди були присутні на зустрічі.' },
  ],
  'watch': [
    { pos: 'v',    translation: 'стежити, дивитися', exEn: 'She watched the children playing in the yard.', exUa: 'Вона спостерігала за дітьми, що гралися у дворі.' },
    { pos: 'noun', translation: 'годинник (наручний)', exEn: 'He got a gold watch for his retirement.', exUa: 'На пенсію йому подарували золотий годинник.' },
  ],
  'well': [
    { pos: 'adv',  translation: 'добре', exEn: 'She did very well in her final exams.', exUa: 'Вона дуже добре впоралась на випускних іспитах.' },
    { pos: 'noun', translation: 'колодязь', exEn: 'The villagers drew water from an old well.', exUa: 'Селяни брали воду зі старого колодязя.' },
  ],
  'bank': [
    { pos: 'noun', translation: 'банк', exEn: 'She deposited the cheque at the bank.', exUa: 'Вона внесла чек у банк.' },
    { pos: 'noun', translation: 'берег (річки)', exEn: 'They sat fishing on the grassy river bank.', exUa: 'Вони сиділи й рибалили на трав\'янистому берегу річки.' },
  ],
  'match': [
    { pos: 'noun', translation: 'матч, гра', exEn: 'They watched the football match on TV.', exUa: 'Вони дивилися футбольний матч по телевізору.' },
    { pos: 'v',    translation: 'підходити, відповідати', exEn: 'Her shoes perfectly match her dress.', exUa: 'Її туфлі ідеально підходять до сукні.' },
  ],
  'plant': [
    { pos: 'noun', translation: 'рослина', exEn: 'She waters the plant every morning.', exUa: 'Вона поливає рослину щоранку.' },
    { pos: 'v',    translation: 'садити; підкладати', exEn: 'He planted a row of sunflowers in the garden.', exUa: 'Він посадив ряд соняшників у саду.' },
  ],
  'suit': [
    { pos: 'v',    translation: 'підходити, бути зручним', exEn: 'Saturday morning would suit me best for the meeting.', exUa: 'Субота вранці підійшла б мені найкраще для зустрічі.' },
    { pos: 'noun', translation: 'костюм', exEn: 'He wore a dark suit to the interview.', exUa: 'Він одягнув темний костюм на інтерв\'ю.' },
  ],
  'fly': [
    { pos: 'noun', translation: 'муха', exEn: 'A fly kept buzzing around the kitchen.', exUa: 'Муха весь час дзижчала по кухні.' },
    { pos: 'v',    translation: 'літати', exEn: 'Birds fly south for the winter.', exUa: 'Птахи летять на південь на зиму.' },
  ],
  'point': [
    { pos: 'noun', translation: 'точка', exEn: 'Mark the exact point on the map.', exUa: 'Познач точну точку на карті.' },
    { pos: 'v',    translation: 'вказувати', exEn: 'She pointed at the door and asked him to leave.', exUa: 'Вона показала на двері й попросила його вийти.' },
    { pos: 'noun', translation: 'сенс, суть', exEn: 'There is no point in arguing about this any further.', exUa: 'Немає сенсу далі сперечатися про це.' },
  ],
  'ring': [
    { pos: 'noun', translation: 'каблучка', exEn: 'He gave her a diamond ring when he proposed.', exUa: 'Він подарував їй діамантову каблучку, коли пропонував руку.' },
    { pos: 'v',    translation: 'дзвонити', exEn: 'Could you ring me later this evening?', exUa: 'Чи міг би ти зателефонувати мені пізніше ввечері?' },
  ],
  'scale': [
    { pos: 'noun', translation: 'масштаб', exEn: 'The scale of the damage was hard to believe.', exUa: 'Масштаб збитків було важко уявити.' },
    { pos: 'v',    translation: 'злазити, підніматися на', exEn: 'The climbers scaled the steep cliff with ease.', exUa: 'Альпіністи легко піднялися на крутий обрив.' },
    { pos: 'noun', translation: 'ваги (для зважування)', exEn: 'Step on the scale to check your weight.', exUa: 'Стань на ваги, щоб перевірити свою вагу.' },
  ],
  'even': [
    { pos: 'adj', translation: 'рівний, гладкий', exEn: 'Make sure the table legs are even before you sit down.', exUa: 'Переконайся, що ніжки столу рівні, перш ніж сідати.' },
    { pos: 'adv', translation: 'навіть', exEn: 'She did not even notice the loud noise outside.', exUa: 'Вона навіть не помітила гучного шуму зовні.' },
  ],
  'run': [
    { pos: 'v', translation: 'бігти', exEn: 'She runs five kilometres every morning.', exUa: 'Вона бігає п\'ять кілометрів щоранку.' },
    { pos: 'v', translation: 'керувати, управляти', exEn: 'He runs a small family business in the city centre.', exUa: 'Він керує невеликим сімейним бізнесом у центрі міста.' },
  ],
  'play': [
    { pos: 'v',    translation: 'грати', exEn: 'The children love to play outside after school.', exUa: 'Діти люблять гратися надворі після школи.' },
    { pos: 'noun', translation: 'п\'єса', exEn: 'They went to see a play at the local theatre.', exUa: 'Вони пішли подивитися п\'єсу в місцевому театрі.' },
  ],
  'book': [
    { pos: 'noun', translation: 'книга', exEn: 'She is reading a fascinating book about ancient history.', exUa: 'Вона читає захопливу книгу про стародавню історію.' },
    { pos: 'v',    translation: 'бронювати', exEn: 'They booked a table at their favourite restaurant.', exUa: 'Вони забронювали столик у своєму улюбленому ресторані.' },
  ],
  'bear': [
    { pos: 'noun', translation: 'медвідь', exEn: 'A brown bear wandered through the forest looking for food.', exUa: 'Бурий медвідь бродив лісом, шукаючи їжу.' },
    { pos: 'v',    translation: 'терпіти, нести', exEn: 'She could hardly bear the pain after the long hike.', exUa: 'Вона ледве могла терпіти біль після довгого походу.' },
  ],
  'bat': [
    { pos: 'noun', translation: 'кажан', exEn: 'A bat flew silently through the dark cave.', exUa: 'Кажан безшумно пролетів темною печерою.' },
    { pos: 'noun', translation: 'бейсбольна біта', exEn: 'He gripped the bat tightly before the pitch.', exUa: 'Він міцно стиснув бейсбольну біту перед подачею.' },
  ],
  'spring': [
    { pos: 'noun', translation: 'весна', exEn: 'Flowers begin to bloom in early spring.', exUa: 'Квіти починають цвісти на початку весни.' },
    { pos: 'noun', translation: 'пружина', exEn: 'The old mattress had a broken spring poking through.', exUa: 'У старому матраці випинала зламана пружина.' },
    { pos: 'v',    translation: 'стрибати', exEn: 'The cat sprang onto the windowsill in one swift move.', exUa: 'Кіт стрибнув на підвіконня одним швидким рухом.' },
  ],
  'crane': [
    { pos: 'noun', translation: 'журавель', exEn: 'A graceful crane stood at the edge of the lake.', exUa: 'Граційний журавель стояв на краю озера.' },
    { pos: 'noun', translation: 'будівельний кран', exEn: 'A tall crane lifted steel beams to the top floor.', exUa: 'Високий кран піднімав сталеві балки на верхній етаж.' },
  ],
  'pitch': [
    { pos: 'v',    translation: 'кидати, подавати', exEn: 'He pitched the ball straight over the plate.', exUa: 'Він кинув мʼяч прямо над базою.' },
    { pos: 'noun', translation: 'висота звуку', exEn: 'The singer struggled to hit the highest pitch.', exUa: 'Співачка намагалася взяти найвищу ноту.' },
    { pos: 'noun', translation: 'спортивне поле', exEn: 'The players ran onto the pitch to warm up.', exUa: 'Гравці вибігли на поле, щоб розігрітися.' },
  ],
  'fair': [
    { pos: 'adj',  translation: 'справедливий', exEn: 'The judge made sure the trial was fair to both sides.', exUa: 'Суддя простежив, щоб суд був справедливим до обох сторін.' },
    { pos: 'noun', translation: 'ярмарок', exEn: 'They rode the Ferris wheel at the county fair.', exUa: 'Вони покаталися на колесі огляду на ярмарку.' },
  ],
  'pole': [
    { pos: 'noun', translation: 'стовп, жердина', exEn: 'He used a long pole to fish the ball out of the pond.', exUa: 'Він використав довгу палицю, щоб виловити мʼяч зі ставка.' },
    { pos: 'noun', translation: 'полюс (географічний)', exEn: 'Explorers finally reached the South Pole after months of travel.', exUa: 'Дослідники нарешті досягли Південного полюса після місяців подорожі.' },
  ],
  'seal': [
    { pos: 'noun', translation: 'тюлень', exEn: 'A seal basked lazily on the rocky shore.', exUa: 'Тюлень ліниво вигрівався на скелястому березі.' },
    { pos: 'v',    translation: 'запечатувати', exEn: 'She sealed the envelope before mailing it.', exUa: 'Вона запечатала конверт перед тим, як відправити його.' },
  ],
  'nail': [
    { pos: 'noun', translation: 'ніготь', exEn: 'She painted her nails a bright shade of red.', exUa: 'Вона пофарбувала нігті в яскраво-червоний колір.' },
    { pos: 'noun', translation: 'цвях', exEn: 'He hammered a nail into the wooden board.', exUa: 'Він забив цвях у деревʼяну дошку.' },
  ],
  'club': [
    { pos: 'noun', translation: 'клуб (товариство)', exEn: 'She joined a book club to meet other readers.', exUa: 'Вона приєдналася до книжкового клубу, щоб познайомитися з іншими читачами.' },
    { pos: 'noun', translation: 'ключка (для гольфу)', exEn: 'He swung the golf club and missed the ball completely.', exUa: 'Він змахнув ключкою для гольфу і повністю пропустив мʼяч.' },
  ],
  'bill': [
    { pos: 'noun', translation: 'рахунок', exEn: 'She paid the electricity bill online.', exUa: 'Вона оплатила рахунок за електроенергію онлайн.' },
    { pos: 'noun', translation: 'дзьоб (птаха)', exEn: 'The duck used its flat bill to search for food in the mud.', exUa: 'Качка використовувала свій плоский дзьоб, щоб шукати їжу в багнюці.' },
  ],
  'trunk': [
    { pos: 'noun', translation: 'стовбур (дерева)', exEn: 'The old oak had a thick, gnarled trunk.', exUa: 'У старого дуба був товстий, вузлуватий стовбур.' },
    { pos: 'noun', translation: 'хобот (слона)', exEn: 'The elephant used its trunk to spray water over its back.', exUa: 'Слон використав свій хобот, щоб обприскати водою спину.' },
    { pos: 'noun', translation: 'багажник (авто)', exEn: 'He put the suitcases in the trunk before leaving.', exUa: 'Він поклав валізи в багажник перед виїздом.' },
  ],
  'sole': [
    { pos: 'adj',  translation: 'єдиний', exEn: 'She was the sole survivor of the shipwreck.', exUa: 'Вона була єдиною, хто вижив після корабельної аварії.' },
    { pos: 'noun', translation: 'підошва (взуття)', exEn: 'The sole of his shoe came loose after the long hike.', exUa: 'Підошва його туфлі відклеїлась після довгого походу.' },
  ],
  'mole': [
    { pos: 'noun', translation: 'кріт', exEn: 'A mole dug tunnels under the garden overnight.', exUa: 'Кріт прорив тунелі під садом за ніч.' },
    { pos: 'noun', translation: 'родимка', exEn: 'The doctor checked the dark mole on her shoulder.', exUa: 'Лікар перевірив темну родимку на її плечі.' },
  ],
  'cell': [
    { pos: 'noun', translation: 'клітина (біологічна)', exEn: 'Every living organism is made up of tiny cells.', exUa: 'Кожен живий організм складається з крихітних клітин.' },
    { pos: 'noun', translation: 'камера (тюремна)', exEn: 'The prisoner spent ten years in a small cell.', exUa: 'Ув\'язнений провів десять років у маленькій камері.' },
  ],
  'key': [
    { pos: 'noun', translation: 'ключ (від замка)', exEn: 'She lost the key to the front door.', exUa: 'Вона загубила ключ від вхідних дверей.' },
    { pos: 'adj',  translation: 'ключовий, важливий', exEn: 'Communication is a key factor in any relationship.', exUa: 'Спілкування — ключовий фактор у будь-яких стосунках.' },
    { pos: 'noun', translation: 'тональність (музична)', exEn: 'The song was written in the key of C major.', exUa: 'Пісня була написана в тональності до-мажор.' },
  ],
  'pen': [
    { pos: 'noun', translation: 'ручка (для писання)', exEn: 'She signed the document with a black pen.', exUa: 'Вона підписала документ чорною ручкою.' },
    { pos: 'noun', translation: 'загорожа (для тварин)', exEn: 'The farmer led the sheep into the pen for the night.', exUa: 'Фермер завів овець у загорожу на ніч.' },
  ],
  'jam': [
    { pos: 'noun', translation: 'джем, варення', exEn: 'She spread strawberry jam on her toast.', exUa: 'Вона намастила полуничний джем на тост.' },
    { pos: 'noun', translation: 'затор (дорожній)', exEn: 'They were stuck in a jam for over an hour.', exUa: 'Вони застрягли в заторі більш ніж на годину.' },
  ],
  'fan': [
    { pos: 'noun', translation: 'фанат, вболівальник', exEn: 'He is a huge fan of classic rock music.', exUa: 'Він великий фанат класичної рок-музики.' },
    { pos: 'noun', translation: 'вентилятор', exEn: 'She turned on the fan to cool the stuffy room.', exUa: 'Вона увімкнула вентилятор, щоб охолодити задушливу кімнату.' },
  ],
  'tank': [
    { pos: 'noun', translation: 'танк (військовий)', exEn: 'The army tank rolled slowly across the field.', exUa: 'Армійський танк повільно проїхав через поле.' },
    { pos: 'noun', translation: 'резервуар, акваріум', exEn: 'The fish swam peacefully inside the glass tank.', exUa: 'Рибки мирно плавали в скляному акваріумі.' },
  ],
  'charge': [
    { pos: 'noun', translation: 'плата, ціна', exEn: 'The hotel added a small charge for breakfast.', exUa: 'Готель додав невелику плату за сніданок.' },
    { pos: 'v',    translation: 'кидатися в атаку', exEn: 'The soldiers charged forward despite the danger.', exUa: 'Солдати рвонули вперед, незважаючи на небезпеку.' },
    { pos: 'v',    translation: 'заряджати', exEn: 'Please charge your phone before the trip.', exUa: 'Будь ласка, заряди свій телефон перед поїздкою.' },
  ],
  'file': [
    { pos: 'noun', translation: 'папка, справа', exEn: 'He kept all the receipts in a yellow file.', exUa: 'Він тримав усі квитанції в жовтій папці.' },
    { pos: 'v',    translation: 'подавати (заяву, скаргу)', exEn: 'She decided to file a formal complaint against the company.', exUa: 'Вона вирішила подати офіційну скаргу на компанію.' },
    { pos: 'noun', translation: 'ряд, шеренга', exEn: 'The students walked in a single file to the exit.', exUa: 'Студенти йшли одним рядком до виходу.' },
  ],
  'record': [
    { pos: 'noun', translation: 'платівка (вінілова)', exEn: 'He collects old jazz records from the 1960s.', exUa: 'Він колекціонує старі джазові вінілові платівки 1960-х.' },
    { pos: 'v',    translation: 'записувати', exEn: 'She recorded the lecture on her phone.', exUa: 'Вона записала лекцію на свій телефон.' },
    { pos: 'noun', translation: 'рекорд (спортивний)', exEn: 'He broke the world record in the marathon.', exUa: 'Він побив світовий рекорд у марафоні.' },
  ],
  'stick': [
    { pos: 'noun', translation: 'паличка, гілка', exEn: 'The dog ran to fetch the stick.', exUa: 'Пес побіг приносити паличку.' },
    { pos: 'v',    translation: 'прилипати', exEn: "The label wouldn't stick to the wet bottle.", exUa: 'Етикетка не хотіла прилипати до вологої бутельки.' },
  ],
  'spot': [
    { pos: 'noun', translation: 'пляма', exEn: 'There was a small spot of grease on his shirt.', exUa: 'На його сорочці була маленька масляна пляма.' },
    { pos: 'v',    translation: 'помічати', exEn: 'She spotted her friend in the crowded station.', exUa: 'Вона помітила свого друга в переповненому вокзалі.' },
  ],
  'bolt': [
    { pos: 'noun', translation: 'болт', exEn: 'He tightened the bolt with a wrench.', exUa: 'Він закрутив болт гайковим ключем.' },
    { pos: 'v',    translation: 'кидатися навтьоки', exEn: 'The horse bolted at the sound of thunder.', exUa: 'Кінь рвонув навтьоки від звуку грому.' },
  ],
  'patient': [
    { pos: 'adj',  translation: 'терплячий', exEn: 'She remained patient even after the long delay.', exUa: 'Вона залишалася терплячою навіть після довгої затримки.' },
    { pos: 'noun', translation: 'пацієнт', exEn: 'The patient waited quietly in the hospital corridor.', exUa: 'Пацієнт спокійно чекав у лікарняному коридорі.' },
  ],
  'desert': [
    { pos: 'noun', translation: 'пустеля', exEn: 'Few plants can survive in the dry desert.', exUa: 'Мало рослин можуть вижити в сухій пустелі.' },
    { pos: 'v',    translation: 'покидати, дезертирувати', exEn: 'He refused to desert his friends in their time of need.', exUa: 'Він відмовився покинути своїх друзів у важку хвилину.' },
  ],
  'content': [
    { pos: 'adj',  translation: 'задоволений', exEn: 'She felt content after a quiet evening at home.', exUa: 'Вона почувалася задоволеною після тихого вечора вдома.' },
    { pos: 'noun', translation: 'зміст, вміст', exEn: 'The content of the speech surprised everyone in the room.', exUa: 'Зміст промови здивував усіх присутніх.' },
  ],
  'object': [
    { pos: 'noun', translation: 'предмет', exEn: 'There was a strange object lying on the table.', exUa: 'На столі лежав дивний предмет.' },
    { pos: 'v',    translation: 'заперечувати', exEn: 'Her lawyer objected to the question immediately.', exUa: 'Її адвокат негайно заперечив проти запитання.' },
  ],


  // ── Expanded set ─────────────────────────────────────────────────────────
  'bow': [
    { pos: 'noun', translation: 'бант', exEn: 'She tied a pink bow in her daughter\'s hair.', exUa: 'Вона зав\'язала рожевий бант у волоссі доньки.' },
    { pos: 'noun', translation: 'лук (зброя)', exEn: 'The archer drew his bow and aimed at the target.', exUa: 'Лучник натягнув лук і прицілився в мішень.' },
  ],
  'tear': [
    { pos: 'noun', translation: 'сльоза', exEn: 'A single tear rolled down her cheek during the movie.', exUa: 'Під час фільму одна сльоза скотилася по її щоці.' },
    { pos: 'v', translation: 'рвати, дерти', exEn: 'He accidentally tore the page while turning it.', exUa: 'Він випадково порвав сторінку, перегортаючи її.' },
  ],
  'wind': [
    { pos: 'noun', translation: 'вітер', exEn: 'A strong wind blew the leaves across the yard.', exUa: 'Сильний вітер гнав листя через двір.' },
    { pos: 'v', translation: 'заводити (годинник), намотувати', exEn: 'She had to wind the old clock every morning.', exUa: 'Їй доводилося заводити старий годинник щоранку.' },
  ],
  'lead': [
    { pos: 'noun', translation: 'свинець', exEn: 'The old pipes were made of lead.', exUa: 'Старі труби були зроблені зі свинцю.' },
    { pos: 'v', translation: 'вести, керувати', exEn: 'She will lead the team through the new project.', exUa: 'Вона керуватиме командою під час нового проєкту.' },
  ],
  'park': [
    { pos: 'noun', translation: 'парк', exEn: 'They had a picnic in the park near the river.', exUa: 'Вони влаштували пікнік у парку біля річки.' },
    { pos: 'v', translation: 'паркувати', exEn: 'He parked the car right outside the building.', exUa: 'Він припаркував машину прямо біля будівлі.' },
  ],
  'date': [
    { pos: 'noun', translation: 'дата', exEn: 'They haven\'t decided on a date for the wedding yet.', exUa: 'Вони ще не визначилися з датою весілля.' },
    { pos: 'noun', translation: 'фінік (плід)', exEn: 'She added chopped dates to the morning porridge.', exUa: 'Вона додала нарізані фініки до ранкової каші.' },
  ],
  'long': [
    { pos: 'adj', translation: 'довгий', exEn: 'It was a long journey across the mountains.', exUa: 'Це була довга подорож через гори.' },
    { pos: 'v', translation: 'сильно хотіти, тужити', exEn: 'She longed to see her family again after the war.', exUa: 'Вона дуже хотіла знову побачити свою родину після війни.' },
  ],
  'second': [
    { pos: 'adj', translation: 'другий', exEn: 'This is the second time he has visited Paris.', exUa: 'Це вже другий раз, коли він відвідує Париж.' },
    { pos: 'noun', translation: 'секунда', exEn: 'The race was decided by less than a second.', exUa: 'Перегони вирішила різниця менш ніж в одну секунду.' },
  ],
  'address': [
    { pos: 'noun', translation: 'адреса', exEn: 'Please write your home address on the form.', exUa: 'Будь ласка, напишіть свою домашню адресу у формі.' },
    { pos: 'v', translation: 'звертатися, вирішувати (проблему)', exEn: 'The mayor promised to address the housing crisis.', exUa: 'Мер пообіцяв вирішити кризу з житлом.' },
  ],
  'capital': [
    { pos: 'noun', translation: 'столиця', exEn: 'Paris is the capital of France.', exUa: 'Париж — столиця Франції.' },
    { pos: 'noun', translation: 'капітал, кошти', exEn: 'The company raised enough capital to expand abroad.', exUa: 'Компанія залучила достатньо капіталу, щоб розширитися за кордон.' },
  ],
  'current': [
    { pos: 'adj', translation: 'теперішній, поточний', exEn: 'Her current job involves a lot of travelling.', exUa: 'Її теперішня робота передбачає багато подорожей.' },
    { pos: 'noun', translation: 'течія, струм', exEn: 'The swimmer was swept away by a strong current.', exUa: 'Плавця віднесло сильною течією.' },
  ],
  'state': [
    { pos: 'noun', translation: 'штат, держава', exEn: 'California is the most populous state in the USA.', exUa: 'Каліфорнія — найбільш населений штат у США.' },
    { pos: 'v', translation: 'заявляти, стверджувати', exEn: 'The witness stated that she saw nothing unusual.', exUa: 'Свідок заявила, що не бачила нічого незвичайного.' },
  ],
  'rock': [
    { pos: 'noun', translation: 'скеля, камінь', exEn: 'The climbers rested on a flat rock halfway up.', exUa: 'Альпіністи відпочили на пласкій скелі на половині шляху.' },
    { pos: 'noun', translation: 'рок (музика)', exEn: 'He grew up listening to classic rock on the radio.', exUa: 'Він виріс, слухаючи класичний рок по радіо.' },
  ],
  'tip': [
    { pos: 'noun', translation: 'кінчик', exEn: 'She felt a sharp pain at the tip of her finger.', exUa: 'Вона відчула гострий біль на кінчику пальця.' },
    { pos: 'noun', translation: 'чайові', exEn: 'They left a generous tip for the waiter.', exUa: 'Вони залишили щедрі чайові офіціанту.' },
  ],
  'fast': [
    { pos: 'adj', translation: 'швидкий', exEn: 'He drives a fast sports car.', exUa: 'Він водить швидкий спортивний автомобіль.' },
    { pos: 'v', translation: 'постити, голодувати', exEn: 'Many people fast during religious holidays.', exUa: 'Багато людей постять під час релігійних свят.' },
  ],
  'last': [
    { pos: 'adj', translation: 'останній', exEn: 'This is the last chapter of the book.', exUa: 'Це останній розділ книги.' },
    { pos: 'v', translation: 'тривати', exEn: 'The meeting lasted almost two hours.', exUa: 'Зустріч тривала майже дві години.' },
  ],
  'stand': [
    { pos: 'v', translation: 'стояти', exEn: 'They had to stand for the entire train ride.', exUa: 'Їм довелося стояти всю поїздку на потязі.' },
    { pos: 'noun', translation: 'кіоск, прилавок', exEn: 'She bought fresh lemonade from a small stand.', exUa: 'Вона купила свіжий лимонад у маленькому кіоску.' },
  ],
  'palm': [
    { pos: 'noun', translation: 'долоня', exEn: 'He held the coin tightly in his palm.', exUa: 'Він міцно тримав монету в долоні.' },
    { pos: 'noun', translation: 'пальма', exEn: 'Tall palms lined the sandy beach.', exUa: 'Високі пальми обрамляли піщаний пляж.' },
  ],
  'orange': [
    { pos: 'noun', translation: 'апельсин', exEn: 'She squeezed a fresh orange for breakfast.', exUa: 'Вона видавила свіжий апельсин на сніданок.' },
    { pos: 'adj', translation: 'помаранчевий', exEn: 'The sky turned a brilliant orange at sunset.', exUa: 'Небо набуло яскравого помаранчевого кольору на заході сонця.' },
  ],
  'iron': [
    { pos: 'noun', translation: 'залізо', exEn: 'The gate was made of solid iron.', exUa: 'Ворота були зроблені з суцільного заліза.' },
    { pos: 'v', translation: 'прасувати', exEn: 'She ironed his shirt before the interview.', exUa: 'Вона попрасувала йому сорочку перед співбесідою.' },
  ],
  'wave': [
    { pos: 'noun', translation: 'хвиля', exEn: 'A huge wave crashed against the rocks.', exUa: 'Величезна хвиля розбилася об скелі.' },
    { pos: 'v', translation: 'махати рукою', exEn: 'She waved at her friends from across the street.', exUa: 'Вона помахала друзям з іншого боку вулиці.' },
  ],
  'train': [
    { pos: 'noun', translation: 'потяг', exEn: 'They caught the early train to the city.', exUa: 'Вони встигли на ранній потяг до міста.' },
    { pos: 'v', translation: 'тренувати(ся)', exEn: 'She trains every morning before work.', exUa: 'Вона тренується щоранку перед роботою.' },
  ],
  'race': [
    { pos: 'noun', translation: 'перегони, гонка', exEn: 'He won the race by a few seconds.', exUa: 'Він виграв перегони з різницею в кілька секунд.' },
    { pos: 'noun', translation: 'раса', exEn: 'The festival celebrated people of every race and culture.', exUa: 'Фестиваль святкував людей будь-якої раси та культури.' },
  ],
  'note': [
    { pos: 'noun', translation: 'нота (музична)', exEn: 'She hit the highest note perfectly during the song.', exUa: 'Вона ідеально взяла найвищу ноту під час пісні.' },
    { pos: 'noun', translation: 'записка', exEn: 'He left a short note on the kitchen table.', exUa: 'Він залишив коротку записку на кухонному столі.' },
  ],
  'check': [
    { pos: 'v', translation: 'перевіряти', exEn: 'Please check your answers before submitting the test.', exUa: 'Будь ласка, перевір свої відповіді перед здачею тесту.' },
    { pos: 'noun', translation: 'чек (банківський)', exEn: 'He paid the contractor with a check.', exUa: 'Він заплатив підряднику чеком.' },
  ],
  'fall': [
    { pos: 'v', translation: 'падати', exEn: 'Be careful not to fall on the icy pavement.', exUa: 'Будь обережний, щоб не впасти на ожеледиці.' },
    { pos: 'noun', translation: 'осінь', exEn: 'The leaves turn golden every fall.', exUa: 'Листя стає золотим щоосені.' },
  ],
  'sound': [
    { pos: 'noun', translation: 'звук', exEn: 'They heard a strange sound coming from the basement.', exUa: 'Вони почули дивний звук, що долинав з підвалу.' },
    { pos: 'adj', translation: 'здоровий, міцний, обґрунтований', exEn: 'Her argument was based on sound reasoning.', exUa: 'Її аргумент ґрунтувався на обґрунтованих міркуваннях.' },
  ],
  'minute': [
    { pos: 'noun', translation: 'хвилина', exEn: 'Wait just a minute, I\'ll be right with you.', exUa: 'Зачекай хвилинку, я зараз буду.' },
    { pos: 'adj', translation: 'крихітний, мізерний', exEn: 'There was only a minute chance of survival.', exUa: 'Шанс на виживання був лише мізерним.' },
  ],
  'court': [
    { pos: 'noun', translation: 'суд', exEn: 'The case will be heard in court next month.', exUa: 'Справу розглядатимуть у суді наступного місяця.' },
    { pos: 'noun', translation: 'корт, майданчик', exEn: 'They booked a tennis court for the afternoon.', exUa: 'Вони забронювали тенісний корт на другу половину дня.' },
  ],
  'company': [
    { pos: 'noun', translation: 'компанія, фірма', exEn: 'She started her own company at the age of twenty-five.', exUa: 'Вона заснувала власну компанію у двадцять п\'ять років.' },
    { pos: 'noun', translation: 'товариство, компанія (людей)', exEn: 'He enjoyed the company of old friends after years apart.', exUa: 'Він насолоджувався товариством старих друзів після років розлуки.' },
  ],
  'arm': [
    { pos: 'noun', translation: 'рука (від плеча до кисті)', exEn: 'She broke her arm while skiing last winter.', exUa: 'Вона зламала руку під час катання на лижах минулої зими.' },
    { pos: 'v', translation: 'озброювати', exEn: 'The soldiers were armed before the mission began.', exUa: 'Солдатів озброїли перед початком місії.' },
  ],
  'foot': [
    { pos: 'noun', translation: 'стопа, нога', exEn: 'He stubbed his foot on the corner of the bed.', exUa: 'Він вдарився ногою об кут ліжка.' },
    { pos: 'noun', translation: 'фут (одиниця довжини)', exEn: 'The ceiling was just over ten foot high.', exUa: 'Стеля була трохи вищою за десять футів.' },
  ],
  'head': [
    { pos: 'noun', translation: 'голова', exEn: 'She nodded her head in agreement.', exUa: 'Вона кивнула головою на знак згоди.' },
    { pos: 'v', translation: 'прямувати', exEn: 'They headed toward the mountains at dawn.', exUa: 'На світанку вони попрямували до гір.' },
  ],
  'band': [
    { pos: 'noun', translation: 'гурт (музичний)', exEn: 'The band played until midnight at the festival.', exUa: 'Гурт грав до півночі на фестивалі.' },
    { pos: 'noun', translation: 'стрічка, обідок', exEn: 'She wore a thin gold band on her finger.', exUa: 'Вона носила тонкий золотий обідок на пальці.' },
  ],
  'bark': [
    { pos: 'noun', translation: 'кора (дерева)', exEn: 'The tree\'s bark was rough and grey.', exUa: 'Кора дерева була грубою і сірою.' },
    { pos: 'v', translation: 'гавкати', exEn: 'The dog barked loudly at the stranger.', exUa: 'Собака голосно гавкав на незнайомця.' },
  ],
  'block': [
    { pos: 'noun', translation: 'квартал (міський)', exEn: 'Their house is just two blocks from the park.', exUa: 'Їхній будинок лише за два квартали від парку.' },
    { pos: 'v', translation: 'блокувати', exEn: 'The fallen tree blocked the entire road.', exUa: 'Повалене дерево заблокувало всю дорогу.' },
  ],
  'figure': [
    { pos: 'noun', translation: 'цифра, число', exEn: 'The exact figure was not released to the public.', exUa: 'Точну цифру не оприлюднили для громадськості.' },
    { pos: 'v', translation: 'здогадатися, зрозуміти', exEn: 'It took her a while to figure out the puzzle.', exUa: 'Їй знадобився певний час, щоб розгадати головоломку.' },
  ],
  'ground': [
    { pos: 'noun', translation: 'земля, ґрунт', exEn: 'The apples fell straight onto the ground.', exUa: 'Яблука впали прямо на землю.' },
    { pos: 'v', translation: 'заземляти, забороняти виходити', exEn: 'Her parents grounded her for missing curfew.', exUa: 'Батьки заборонили їй виходити за порушення комендантської години.' },
  ],
  'land': [
    { pos: 'noun', translation: 'земля, суходіл', exEn: 'After weeks at sea, they finally spotted land.', exUa: 'Після тижнів у морі вони нарешті помітили землю.' },
    { pos: 'v', translation: 'приземлятися', exEn: 'The plane landed safely despite the storm.', exUa: 'Літак безпечно приземлився попри шторм.' },
  ],
  'organ': [
    { pos: 'noun', translation: 'орган (тіла)', exEn: 'The heart is the most vital organ in the body.', exUa: 'Серце — найважливіший орган у тілі.' },
    { pos: 'noun', translation: 'орган (музичний інструмент)', exEn: 'The organist played a powerful hymn on the church organ.', exUa: 'Органіст зіграв потужний гімн на церковному органі.' },
  ],
  'sentence': [
    { pos: 'noun', translation: 'речення', exEn: 'She wrote a short sentence at the top of the page.', exUa: 'Вона написала коротке речення вгорі сторінки.' },
    { pos: 'noun', translation: 'вирок (судовий)', exEn: 'The judge handed down a harsh sentence for the crime.', exUa: 'Суддя виніс суворий вирок за цей злочин.' },
  ],
  'volume': [
    { pos: 'noun', translation: 'гучність', exEn: 'Could you turn down the volume on the TV?', exUa: 'Чи міг би ти зменшити гучність телевізора?' },
    { pos: 'noun', translation: 'том (книги)', exEn: 'The encyclopedia filled twelve thick volumes.', exUa: 'Енциклопедія складалася з дванадцяти товстих томів.' },
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
  'замок': [
    { pos: 'noun', translation: 'фортеця, укріплена споруда', exEn: 'Середньовічний замок стояв на високому пагорбі.', exUa: '' },
    { pos: 'noun', translation: 'дверний замок, запор', exEn: 'Вона завжди перевіряє замок на дверях перед сном.', exUa: '' },
  ],
  'кран': [
    { pos: 'noun', translation: 'водопровідний кран', exEn: 'Вона відкрила кран і почекала, поки вода нагріється.', exUa: '' },
    { pos: 'noun', translation: 'будівельний кран (машина)', exEn: 'Великий будівельний кран височів над майданчиком.', exUa: '' },
  ],
  'мати': [
    { pos: 'noun', translation: 'матір, неня', exEn: 'Її мати завжди точно знала, що їй потрібно.', exUa: '' },
    { pos: 'v',    translation: 'володіти, посідати щось', exEn: 'У тебе є якісь плани на вихідні?', exUa: '' },
  ],
  'куля': [
    { pos: 'noun', translation: 'патрон, набій', exEn: 'Поліція знайшла кулю, застрягла в стіні будівлі.', exUa: '' },
    { pos: 'noun', translation: 'сфера, шар (геометрична форма)', exEn: 'Земля має форму майже ідеальної кулі.', exUa: '' },
  ],
  'вид': [
    { pos: 'noun', translation: 'погляд, зовнішній вигляд', exEn: 'З вершини гори відкривався чудовий вид на долину.', exUa: '' },
    { pos: 'noun', translation: 'різновид, тип (тварин чи рослин)', exEn: 'Кілька видів рідкісних метеликів населяють цей заповідник.', exUa: '' },
  ],
  'стрічка': [
    { pos: 'noun', translation: 'декоративна стрічка (для подарунка, волосся)', exEn: "Вона зав'язала червону стрічку навколо подарунка.", exUa: '' },
    { pos: 'noun', translation: 'магнітна плівка, запис', exEn: 'Старі фільми записували на магнітну стрічку.', exUa: '' },
  ],
};

export const SENSES_ES: Record<string, SenseEntry[]> = {
  'vela': [
    { pos: 'noun', translation: 'свічка', exEn: 'Encendió una vela para crear un ambiente romántico durante la cena.', exUa: 'Вона запалила свічку, щоб створити романтичну атмосферу під час вечері.' },
    { pos: 'noun', translation: 'парус', exEn: 'Navegaron por la costa disfrutando de la cálida brisa veraniega bajo la vela.', exUa: 'Вони пливли під парусом уздовж берега, насолоджуючись теплим літнім вітерцем.' },
  ],
  'banco': [
    { pos: 'noun', translation: 'банк (фінансова установа)', exEn: 'Se sentaron en la orilla del río, cerca del banco donde guardaban sus ahorros.', exUa: 'Вони сиділи на березі річки, недалеко від банку, де зберігали свої заощадження.' },
    { pos: 'noun', translation: 'лавка, скамія', exEn: 'Se sentó en el banco del parque a leer el periódico bajo la sombra de los árboles.', exUa: 'Він сів на лавку в парку почитати газету в тіні дерев.' },
  ],
  'muñeca': [
    { pos: 'noun', translation: 'лялька', exEn: 'La niña pequeña llevaba su muñeca favorita a todas partes.', exUa: 'Маленька дівчинка носила свою улюблену ляльку всюди.' },
    { pos: 'noun', translation: 'запʼясток', exEn: 'Se torció la muñeca durante el partido de voleibol y tuvo que descansarla.', exUa: 'Вона вивихнула запʼясток під час матчу з волейболу і мусила дати йому відпочити.' },
  ],
  'cinta': [
    { pos: 'noun', translation: 'стрічка (декоративна)', exEn: 'Ató una cinta roja alrededor del regalo para que se viera especial.', exUa: "Вона обв'язала подарунок червоною стрічкою, щоб він виглядав особливо." },
    { pos: 'noun', translation: 'плівка, скотч', exEn: 'Pegó la nota en el frigorífico con cinta para que él la viera.', exUa: 'Вона прикріпила записку до холодильника скотчем, щоб він її побачив.' },
  ],
  'tiempo': [
    { pos: 'noun', translation: 'час', exEn: 'Nunca tiene suficiente tiempo para hacer todo lo que planea.', exUa: 'Їй ніколи не вистачає часу зробити все, що вона планує.' },
    { pos: 'noun', translation: 'погода', exEn: 'El tiempo era perfecto para un largo paseo por la costa.', exUa: 'Погода була ідеальною для довгої прогулянки вздовж берега.' },
  ],
  'frente': [
    { pos: 'noun', translation: 'чоло (частина обличчя)', exEn: 'Presionó un paño fresco y húmedo contra su frente febril.', exUa: 'Вона приклала свіжу вологу тканину до свого гарячого чола.' },
    { pos: 'noun', translation: 'передня частина, фронт', exEn: 'Se sentó al frente del aula para oír mejor.', exUa: 'Вона сіла в передній частині аудиторії, щоб краще чути.' },
  ],
  'derecho': [
    { pos: 'noun', translation: 'право (юридичне)', exEn: 'Estudió derecho en la universidad antes de convertirse en una abogada de éxito.', exUa: 'Вона вивчала право в університеті, перш ніж стати успішною адвокаткою.' },
    { pos: 'adv',  translation: 'прямо, рівно (напрямок)', exEn: 'Gira a la derecha en el semáforo y luego sigue derecho.', exUa: 'Поверни праворуч на світлофорі, а потім їдь прямо.' },
  ],
  'sobre': [
    { pos: 'noun', translation: 'конверт', exEn: 'Selló el sobre y le puso un sello en la esquina.', exUa: 'Вона запечатала конверт і поклала марку в кутку.' },
    { pos: 'prep', translation: 'над, на, про (привід)', exEn: 'Dio una breve charla sobre la historia de su pueblo natal.', exUa: 'Вона прочитала коротку доповідь про історію свого рідного містечка.' },
  ],
  'letra': [
    { pos: 'noun', translation: 'буква, літера', exEn: 'Recibía una carta escrita a mano de su abuela cada semana.', exUa: 'Вона щотижня отримувала лист, написаний від руки бабусиним почерком.' },
    { pos: 'noun', translation: 'текст пісні', exEn: 'De niña se aprendía de memoria la letra de todas sus canciones favoritas.', exUa: 'У дитинстві вона вивчала напам\'ять текст усіх своїх улюблених пісень.' },
  ],
  'cabo': [
    { pos: 'noun', translation: 'мис (географічний)', exEn: 'El barco dobló el cabo durante una peligrosa tormenta nocturna de invierno.', exUa: 'Корабель обійшов мис під час небезпечного нічного зимового шторму.' },
    { pos: 'noun', translation: 'капрал (військове звання)', exEn: 'El cabo dio las órdenes a los soldados antes del amanecer.', exUa: 'Капрал віддав накази солдатам перед світанком.' },
  ],


  // ── Expanded set ─────────────────────────────────────────────────────────
  'cura': [
    { pos: 'noun', translation: 'священник', exEn: 'El cura bendijo a los recién casados frente a la iglesia.', exUa: 'Священник благословив молодят перед церквою.' },
    { pos: 'noun', translation: 'лікування, зцілення', exEn: 'Los científicos todavía buscan una cura para esa enfermedad.', exUa: 'Науковці досі шукають ліки від цієї хвороби.' },
  ],
  'corte': [
    { pos: 'noun', translation: 'королівський двір', exEn: 'El embajador fue recibido en la corte del rey.', exUa: 'Посла прийняли при королівському дворі.' },
    { pos: 'noun', translation: 'розріз, поріз', exEn: 'Se hizo un corte profundo en el dedo mientras cocinaba.', exUa: 'Вона глибоко порізала палець під час готування.' },
  ],
  'cometa': [
    { pos: 'noun', translation: 'комета', exEn: 'El cometa será visible en el cielo nocturno esta semana.', exUa: 'Комету буде видно на нічному небі цього тижня.' },
    { pos: 'noun', translation: 'повітряний змій', exEn: 'Los niños hicieron volar una cometa de colores en el parque.', exUa: 'Діти запускали барвистого повітряного змія в парку.' },
  ],
  'pez': [
    { pos: 'noun', translation: 'риба', exEn: 'Un pez plateado nadaba cerca de la orilla del lago.', exUa: 'Срібляста риба плавала біля берега озера.' },
    { pos: 'noun', translation: 'смола (дьоготь)', exEn: 'Sellaron las grietas del barco con pez caliente.', exUa: 'Вони запечатали тріщини на човні гарячою смолою.' },
  ],
  'gato': [
    { pos: 'noun', translation: 'кіт', exEn: 'El gato dormía tranquilamente sobre el sofá.', exUa: 'Кіт спокійно спав на дивані.' },
    { pos: 'noun', translation: 'домкрат', exEn: 'Sacó el gato del maletero para cambiar la rueda pinchada.', exUa: 'Він дістав домкрат із багажника, щоб поміняти спущене колесо.' },
  ],
  'real': [
    { pos: 'adj', translation: 'справжній, дійсний', exEn: 'Esta historia está basada en hechos reales.', exUa: 'Ця історія заснована на реальних подіях.' },
    { pos: 'adj', translation: 'королівський', exEn: 'La familia real visitó el hospital infantil ayer.', exUa: 'Королівська родина вчора відвідала дитячу лікарню.' },
  ],
  'llama': [
    { pos: 'noun', translation: 'полум\'я', exEn: 'Una pequeña llama parpadeaba en la oscuridad de la cueva.', exUa: 'Маленьке полум\'я мерехтіло в темряві печери.' },
    { pos: 'noun', translation: 'лама (тварина)', exEn: 'La llama caminaba lentamente por los Andes con su carga.', exUa: 'Лама повільно йшла Андами зі своїм вантажем.' },
  ],
  'mango': [
    { pos: 'noun', translation: 'манго (фрукт)', exEn: 'Cortó el mango maduro en rodajas para la ensalada.', exUa: 'Вона нарізала стиглий манго скибочками для салату.' },
    { pos: 'noun', translation: 'руків\'я, ручка', exEn: 'El mango del cuchillo estaba hecho de madera oscura.', exUa: 'Руків\'я ножа було зроблене з темного дерева.' },
  ],
  'falta': [
    { pos: 'noun', translation: 'відсутність, брак', exEn: 'El proyecto se retrasó por falta de financiación.', exUa: 'Проєкт затримався через брак фінансування.' },
    { pos: 'noun', translation: 'фол (спортивний)', exEn: 'El árbitro pitó una falta dentro del área.', exUa: 'Суддя зафіксував фол у межах штрафного майданчика.' },
  ],
  'cola': [
    { pos: 'noun', translation: 'хвіст', exEn: 'El perro movía la cola con entusiasmo cuando lo veía llegar.', exUa: 'Собака радісно вертів хвостом, коли бачив, що він приходить.' },
    { pos: 'noun', translation: 'черга', exEn: 'Esperaron media hora en la cola del cine.', exUa: 'Вони чекали півгодини в черзі до кінотеатру.' },
  ],
  'copa': [
    { pos: 'noun', translation: 'келих', exEn: 'Brindaron con una copa de vino tinto.', exUa: 'Вони цокнулися келихами червоного вина.' },
    { pos: 'noun', translation: 'крона (дерева)', exEn: 'Los pájaros anidaban en la copa del viejo roble.', exUa: 'Птахи гніздилися в кроні старого дуба.' },
  ],
  'lengua': [
    { pos: 'noun', translation: 'язик (частина тіла)', exEn: 'Se quemó la lengua al beber el café demasiado caliente.', exUa: 'Вона обпекла язик, випивши надто гарячу каву.' },
    { pos: 'noun', translation: 'мова, мовлення', exEn: 'Aprender una nueva lengua amplía la mente.', exUa: 'Вивчення нової мови розширює світогляд.' },
  ],
  'pila': [
    { pos: 'noun', translation: 'батарейка', exEn: 'El mando a distancia necesita una pila nueva.', exUa: 'Пульту дистанційного керування потрібна нова батарейка.' },
    { pos: 'noun', translation: 'купа, стос', exEn: 'Dejó una pila de libros sobre el escritorio.', exUa: 'Вона залишила стос книг на письмовому столі.' },
  ],
  'planta': [
    { pos: 'noun', translation: 'рослина', exEn: 'Riega la planta dos veces por semana.', exUa: 'Вона поливає рослину двічі на тиждень.' },
    { pos: 'noun', translation: 'підошва (стопи)', exEn: 'Sintió una piedra afilada bajo la planta del pie.', exUa: 'Вона відчула гострий камінець під підошвою ноги.' },
  ],
  'gracia': [
    { pos: 'noun', translation: 'грація, витонченість', exEn: 'La bailarina se movía con una gracia extraordinaria.', exUa: 'Танцівниця рухалася з надзвичайною грацією.' },
    { pos: 'noun', translation: 'дотепність, кумедність', exEn: 'Su comentario tenía mucha gracia y todos rieron.', exUa: 'Його коментар був дуже дотепним, і всі засміялися.' },
  ],
  'pasta': [
    { pos: 'noun', translation: 'паста, макарони', exEn: 'Cocinó pasta fresca para la cena familiar.', exUa: 'Вона приготувала свіжу пасту на сімейну вечерю.' },
    { pos: 'noun', translation: 'гроші (розмовно)', exEn: 'No tenía suficiente pasta para pagar el alquiler ese mes.', exUa: 'Тоді йому не вистачало грошей заплатити за оренду.' },
  ],
  'cara': [
    { pos: 'noun', translation: 'обличчя', exEn: 'Su cara se iluminó al ver el regalo.', exUa: 'Її обличчя засяяло, коли вона побачила подарунок.' },
    { pos: 'adj', translation: 'дорогий (за ціною)', exEn: 'Esa chaqueta de cuero era demasiado cara para su presupuesto.', exUa: 'Та шкіряна куртка була надто дорогою для її бюджету.' },
  ],
  'pico': [
    { pos: 'noun', translation: 'дзьоб', exEn: 'El pájaro sostenía un gusano en el pico.', exUa: 'Птах тримав у дзьобі черв\'яка.' },
    { pos: 'noun', translation: 'вершина, пік', exEn: 'Alcanzaron el pico de la montaña justo antes del atardecer.', exUa: 'Вони досягли вершини гори якраз перед заходом сонця.' },
  ],
  'sierra': [
    { pos: 'noun', translation: 'пилка', exEn: 'Cortó la madera con una sierra eléctrica.', exUa: 'Він розпиляв деревину електричною пилкою.' },
    { pos: 'noun', translation: 'гірський хребет', exEn: 'Pasaron el verano caminando por la sierra.', exUa: 'Вони провели літо, гуляючи гірським хребтом.' },
  ],
  'pasaje': [
    { pos: 'noun', translation: 'прохід, провулок', exEn: 'Encontraron un pasaje estrecho entre los dos edificios.', exUa: 'Вони знайшли вузький прохід між двома будівлями.' },
    { pos: 'noun', translation: 'квиток (проїзний)', exEn: 'Compró el pasaje de avión con tres meses de antelación.', exUa: 'Вона купила авіаквиток за три місяці наперед.' },
  ],
  'cuenta': [
    { pos: 'noun', translation: 'рахунок (банківський)', exEn: 'Abrió una cuenta nueva en el banco del centro.', exUa: 'Вона відкрила новий рахунок у банку в центрі міста.' },
    { pos: 'noun', translation: 'намистина', exEn: 'El collar estaba hecho de cuentas de cristal azul.', exUa: 'Намисто було зроблене з блакитних скляних намистин.' },
  ],
  'partido': [
    { pos: 'noun', translation: 'матч (спортивний)', exEn: 'Vieron el partido de fútbol en casa de un amigo.', exUa: 'Вони дивилися футбольний матч у будинку друга.' },
    { pos: 'noun', translation: 'партія (політична)', exEn: 'Se unió al partido político cuando era estudiante.', exUa: 'Вона вступила до політичної партії, коли була студенткою.' },
  ],
  'pluma': [
    { pos: 'noun', translation: 'перо (пташине)', exEn: 'Una pluma blanca cayó suavemente sobre la hierba.', exUa: 'Біле перо м\'яко впало на траву.' },
    { pos: 'noun', translation: 'перо, ручка (для письма)', exEn: 'Firmó el contrato con una pluma elegante.', exUa: 'Вона підписала контракт елегантною ручкою.' },
  ],
  'cuadro': [
    { pos: 'noun', translation: 'картина', exEn: 'Colgó un cuadro nuevo sobre la chimenea.', exUa: 'Вона повісила нову картину над каміном.' },
    { pos: 'noun', translation: 'таблиця, схема', exEn: 'El profesor dibujó un cuadro para explicar los datos.', exUa: 'Вчитель намалював таблицю, щоб пояснити дані.' },
  ],
  'lima': [
    { pos: 'noun', translation: 'лайм (фрукт)', exEn: 'Exprimió una lima fresca sobre el pescado.', exUa: 'Вона видавила сік свіжого лайма на рибу.' },
    { pos: 'noun', translation: 'пилка (для нігтів, металу)', exEn: 'Usó una lima para suavizar el borde del metal.', exUa: 'Вона використала пилку, щоб згладити край металу.' },
  ],
  'cuerda': [
    { pos: 'noun', translation: 'мотузка', exEn: 'Ataron la cuerda alrededor del tronco del árbol.', exUa: 'Вони прив\'язали мотузку навколо стовбура дерева.' },
    { pos: 'noun', translation: 'струна (музичного інструменту)', exEn: 'Una cuerda de la guitarra se rompió durante el concierto.', exUa: 'Одна струна гітари порвалася під час концерту.' },
  ],
  'orden': [
    { pos: 'noun', translation: 'порядок, послідовність', exEn: 'Pon los libros en orden alfabético en la estantería.', exUa: 'Розклади книги в алфавітному порядку на полиці.' },
    { pos: 'noun', translation: 'наказ, розпорядження', exEn: 'El general dio la orden de retirada al amanecer.', exUa: 'Генерал віддав наказ про відступ на світанку.' },
  ],
  'mañana': [
    { pos: 'noun', translation: 'ранок', exEn: 'Salió a correr temprano por la mañana.', exUa: 'Вона вийшла на пробіжку рано-вранці.' },
    { pos: 'adv', translation: 'завтра', exEn: 'Nos vemos mañana en la reunión.', exUa: 'Побачимось завтра на зустрічі.' },
  ],
  'parte': [
    { pos: 'noun', translation: 'частина', exEn: 'Solo leyó la primera parte del informe.', exUa: 'Вона прочитала лише першу частину звіту.' },
    { pos: 'noun', translation: 'зведення, бюлетень', exEn: 'Escucharon el parte meteorológico antes de salir de viaje.', exUa: 'Перед поїздкою вони прослухали зведення погоди.' },
  ],
  'pendiente': [
    { pos: 'noun', translation: 'сережка', exEn: 'Perdió un pendiente de plata en la fiesta.', exUa: 'Вона загубила срібну сережку на вечірці.' },
    { pos: 'noun', translation: 'схил, скат', exEn: 'La casa estaba construida sobre una pendiente pronunciada.', exUa: 'Будинок був побудований на крутому схилі.' },
  ],
  'cubierta': [
    { pos: 'noun', translation: 'палуба (корабля)', exEn: 'Los pasajeros tomaban el sol en la cubierta del barco.', exUa: 'Пасажири засмагали на палубі корабля.' },
    { pos: 'noun', translation: 'обкладинка, чохол', exEn: 'La cubierta del libro estaba decorada con flores doradas.', exUa: 'Обкладинка книги була прикрашена золотими квітами.' },
  ],
  'tapa': [
    { pos: 'noun', translation: 'кришка', exEn: 'Cerró la olla con la tapa antes de salir.', exUa: 'Вона закрила каструлю кришкою перед виходом.' },
    { pos: 'noun', translation: 'тапас, закуска', exEn: 'Pidieron una tapa de jamón para compartir.', exUa: 'Вони замовили закуску з хамоном, щоб поділитися.' },
  ],
  'banda': [
    { pos: 'noun', translation: 'гурт, оркестр', exEn: 'La banda tocó en la plaza durante el festival.', exUa: 'Гурт грав на площі під час фестивалю.' },
    { pos: 'noun', translation: 'стрічка, перев\'язь', exEn: 'La reina llevaba una banda azul sobre el vestido.', exUa: 'Королева носила синю стрічку поверх сукні.' },
  ],
};

export const SENSES_FR: Record<string, SenseEntry[]> = {
  'accord': [
    { pos: 'noun', translation: 'угода, домовленість', exEn: 'Ils ont signé un accord formel pour mettre fin au litige.', exUa: 'Вони підписали офіційну угоду, щоб покласти край спору.' },
    { pos: 'noun', translation: 'акорд (музичний)', exEn: "Il a joué un doux accord d'ouverture à la guitare.", exUa: 'Він зіграв на гітарі тихий вступний акорд.' },
  ],
  'balle': [
    { pos: 'noun', translation: 'мʼяч', exEn: 'Les enfants tapaient dans le ballon dans le jardin.', exUa: 'Діти ганяли мʼяч у саду.' },
    { pos: 'noun', translation: 'куля (патрон)', exEn: 'La police a trouvé une balle incrustée dans le mur du bâtiment.', exUa: 'Поліція знайшла кулю, застряглу в стіні будівлі.' },
  ],
  'baie': [
    { pos: 'noun', translation: 'бухта, затока', exEn: 'Les bateaux de pêche sont rentrés sans encombre dans la baie abritée.', exUa: 'Рибальські човни безперешкодно повернулися до захищеної бухти.' },
    { pos: 'noun', translation: 'ягода', exEn: 'Elle a cueilli des baies sauvages fraîches le long du chemin.', exUa: 'Вона зібрала свіжі дикі ягоди вздовж стежки.' },
  ],
  'bleu': [
    { pos: 'adj',  translation: 'синій (колір)', exEn: "Le ciel est d'un beau bleu clair aujourd'hui.", exUa: 'Сьогодні небо гарного світло-синього кольору.' },
    { pos: 'noun', translation: 'синець', exEn: 'Elle avait un gros bleu violet sur le bras gauche.', exUa: 'У неї був великий фіолетовий синець на лівій руці.' },
  ],
  'café': [
    { pos: 'noun', translation: 'кава (напій)', exEn: 'Il boit toujours un café fort avant de commencer le travail.', exUa: 'Він завжди випиває міцну каву перед початком роботи.' },
    { pos: 'noun', translation: 'кафе (заклад)', exEn: 'Ils se sont retrouvés dans un café confortable près de la gare.', exUa: 'Вони зустрілися в затишному кафе біля вокзалу.' },
  ],


  // ── Expanded set ─────────────────────────────────────────────────────────
  'avocat': [
    { pos: 'noun', translation: 'адвокат', exEn: 'L\'avocat a défendu son client avec passion devant le tribunal.', exUa: 'Адвокат пристрасно захищав свого клієнта в суді.' },
    { pos: 'noun', translation: 'авокадо', exEn: 'Elle a écrasé un avocat mûr pour préparer le guacamole.', exUa: 'Вона розім\'яла стиглий авокадо, щоб приготувати гуакамоле.' },
  ],
  'livre': [
    { pos: 'noun', translation: 'книга', exEn: 'Il a passé tout le week-end à lire un nouveau livre.', exUa: 'Він провів увесь вихідний, читаючи нову книгу.' },
    { pos: 'noun', translation: 'фунт (вага або валюта)', exEn: 'Elle a acheté une livre de fraises fraîches au marché.', exUa: 'Вона купила фунт свіжої полуниці на ринку.' },
  ],
  'voile': [
    { pos: 'noun', translation: 'вуаль, покривало', exEn: 'La mariée portait un long voile blanc.', exUa: 'Наречена носила довгу білу вуаль.' },
    { pos: 'noun', translation: 'парус', exEn: 'Le bateau hissa sa voile et quitta le port au lever du soleil.', exUa: 'Човен підняв вітрило і вийшов з порту на світанку.' },
  ],
  'tour': [
    { pos: 'noun', translation: 'вежа', exEn: 'Ils ont grimpé jusqu\'au sommet de la vieille tour.', exUa: 'Вони піднялися на вершину старої вежі.' },
    { pos: 'noun', translation: 'черга, оберт', exEn: 'C\'était enfin son tour de parler lors de la réunion.', exUa: 'Нарешті настала її черга говорити на зустрічі.' },
  ],
  'mode': [
    { pos: 'noun', translation: 'мода', exEn: 'Elle suit toujours les dernières tendances de la mode.', exUa: 'Вона завжди слідкує за останніми тенденціями моди.' },
    { pos: 'noun', translation: 'спосіб, режим', exEn: 'Le téléphone est resté en mode silencieux toute la nuit.', exUa: 'Телефон цілу ніч залишався в беззвучному режимі.' },
  ],
  'poste': [
    { pos: 'noun', translation: 'посада', exEn: 'Elle a obtenu un nouveau poste dans une entreprise internationale.', exUa: 'Вона отримала нову посаду в міжнародній компанії.' },
    { pos: 'noun', translation: 'пошта (заклад)', exEn: 'Il a envoyé le colis depuis le bureau de poste local.', exUa: 'Він відправив посилку з місцевого поштового відділення.' },
  ],
  'manche': [
    { pos: 'noun', translation: 'рукав', exEn: 'Elle a remonté ses manches avant de commencer à cuisiner.', exUa: 'Вона закотила рукави, перш ніж почати готувати.' },
    { pos: 'noun', translation: 'руків\'я, ручка', exEn: 'Le manche du marteau était fait de bois solide.', exUa: 'Руків\'я молотка було зроблене з міцного дерева.' },
  ],
  'mémoire': [
    { pos: 'noun', translation: 'пам\'ять', exEn: 'Sa mémoire impressionnante lui permettait de réciter des poèmes entiers.', exUa: 'Її вражаюча пам\'ять дозволяла декламувати цілі вірші.' },
    { pos: 'noun', translation: 'дипломна робота, мемуар', exEn: 'Il a passé des mois à rédiger son mémoire de fin d\'études.', exUa: 'Він провів місяці, пишучи свою випускну дипломну роботу.' },
  ],
  'physique': [
    { pos: 'noun', translation: 'фізика (наука)', exEn: 'Elle étudie la physique quantique à l\'université.', exUa: 'Вона вивчає квантову фізику в університеті.' },
    { pos: 'noun', translation: 'статура, зовнішність', exEn: 'Il garde un physique athlétique grâce à un entraînement régulier.', exUa: 'Він підтримує спортивну статуру завдяки регулярним тренуванням.' },
  ],
  'somme': [
    { pos: 'noun', translation: 'сума (грошова)', exEn: 'Ils ont dépensé une somme considérable pour rénover la maison.', exUa: 'Вони витратили значну суму на ремонт будинку.' },
    { pos: 'noun', translation: 'короткий сон', exEn: 'Elle a fait un petit somme après le déjeuner.', exUa: 'Вона трохи поспала після обіду.' },
  ],
  'vase': [
    { pos: 'noun', translation: 'ваза', exEn: 'Elle a mis les roses fraîches dans un vase en cristal.', exUa: 'Вона поставила свіжі троянди у кришталеву вазу.' },
    { pos: 'noun', translation: 'мул, баговиння', exEn: 'Leurs bottes s\'enfonçaient dans la vase au bord de l\'étang.', exUa: 'Їхні чоботи загрузали в мулі біля краю ставка.' },
  ],
  'moule': [
    { pos: 'noun', translation: 'форма (для випічки)', exEn: 'Elle a versé la pâte dans un moule à gâteau.', exUa: 'Вона налила тісто у форму для торта.' },
    { pos: 'noun', translation: 'мідія', exEn: 'Ils ont commandé des moules marinières au restaurant du port.', exUa: 'Вони замовили мідії в ресторані біля порту.' },
  ],
  'poêle': [
    { pos: 'noun', translation: 'сковорода', exEn: 'Elle a fait revenir les oignons dans une poêle chaude.', exUa: 'Вона обсмажила цибулю на гарячій сковороді.' },
    { pos: 'noun', translation: 'піч, грубка', exEn: 'Une vieille poêle à bois chauffait toute la cabane.', exUa: 'Стара дров\'яна піч обігрівала всю хатину.' },
  ],
  'glace': [
    { pos: 'noun', translation: 'лід', exEn: 'Le lac était couvert d\'une fine couche de glace en hiver.', exUa: 'Озеро взимку було вкрите тонким шаром льоду.' },
    { pos: 'noun', translation: 'дзеркало', exEn: 'Elle s\'est regardée dans la glace avant de sortir.', exUa: 'Вона подивилася на себе в дзеркало, перш ніж вийти.' },
  ],
  'temps': [
    { pos: 'noun', translation: 'час', exEn: 'Elle n\'a jamais assez de temps pour tout terminer.', exUa: 'Їй ніколи не вистачає часу, щоб усе закінчити.' },
    { pos: 'noun', translation: 'погода', exEn: 'Le temps était parfait pour une longue promenade au bord de la mer.', exUa: 'Погода була ідеальною для довгої прогулянки біля моря.' },
  ],
  'addition': [
    { pos: 'noun', translation: 'додавання', exEn: 'Les enfants apprennent l\'addition en première année.', exUa: 'Діти вивчають додавання в першому класі.' },
    { pos: 'noun', translation: 'рахунок (у ресторані)', exEn: 'Il a demandé l\'addition à la fin du repas.', exUa: 'Він попросив рахунок наприкінці трапези.' },
  ],
  'carte': [
    { pos: 'noun', translation: 'карта (географічна)', exEn: 'Ils ont étudié la carte avant de partir en randonnée.', exUa: 'Вони вивчили карту перед тим, як вирушити в похід.' },
    { pos: 'noun', translation: 'меню', exEn: 'Le serveur leur a apporté la carte dès qu\'ils se sont assis.', exUa: 'Офіціант приніс їм меню, щойно вони сіли.' },
  ],
  'pièce': [
    { pos: 'noun', translation: 'кімната', exEn: 'L\'appartement comptait quatre pièces lumineuses.', exUa: 'У квартирі було чотири світлі кімнати.' },
    { pos: 'noun', translation: 'монета', exEn: 'Il a trouvé une vieille pièce en argent dans le jardin.', exUa: 'Він знайшов стару срібну монету в саду.' },
  ],
  'note': [
    { pos: 'noun', translation: 'оцінка (шкільна)', exEn: 'Elle a obtenu une excellente note à son examen final.', exUa: 'Вона отримала відмінну оцінку на випускному іспиті.' },
    { pos: 'noun', translation: 'нота (музична)', exEn: 'Le pianiste a joué la dernière note avec beaucoup d\'émotion.', exUa: 'Піаніст зіграв останню ноту з великим почуттям.' },
  ],
  'col': [
    { pos: 'noun', translation: 'комір', exEn: 'Le col de sa chemise était soigneusement repassé.', exUa: 'Комір її сорочки був акуратно випрасуваний.' },
    { pos: 'noun', translation: 'гірський перевал', exEn: 'Les cyclistes ont franchi le col après des heures d\'effort.', exUa: 'Велосипедисти подолали гірський перевал після годин зусиль.' },
  ],
  'feuille': [
    { pos: 'noun', translation: 'листок (дерева)', exEn: 'Une feuille jaune tomba doucement sur le sentier.', exUa: 'Жовтий листок тихо впав на стежку.' },
    { pos: 'noun', translation: 'аркуш (паперу)', exEn: 'Elle a écrit son adresse sur une feuille blanche.', exUa: 'Вона написала свою адресу на чистому аркуші.' },
  ],
  'mine': [
    { pos: 'noun', translation: 'шахта, копальня', exEn: 'Son grand-père travaillait dans une mine de charbon.', exUa: 'Його дід працював на вугільній шахті.' },
    { pos: 'noun', translation: 'грифель (олівця)', exEn: 'La mine du crayon s\'est cassée pendant l\'examen.', exUa: 'Грифель олівця зламався під час іспиту.' },
  ],
  'chat': [
    { pos: 'noun', translation: 'кіт', exEn: 'Le chat dormait paisiblement sur le rebord de la fenêtre.', exUa: 'Кіт мирно спав на підвіконні.' },
    { pos: 'noun', translation: 'чат (онлайн-спілкування)', exEn: 'Ils ont discuté pendant des heures sur le chat de l\'entreprise.', exUa: 'Вони годинами спілкувалися в робочому чаті компанії.' },
  ],
  'rose': [
    { pos: 'noun', translation: 'троянда', exEn: 'Il lui a offert une rose rouge pour son anniversaire.', exUa: 'Він подарував їй червону троянду на день народження.' },
    { pos: 'adj', translation: 'рожевий', exEn: 'Elle portait une robe rose pour la fête.', exUa: 'Вона була у рожевій сукні на святі.' },
  ],
  'cours': [
    { pos: 'noun', translation: 'урок, заняття', exEn: 'Le cours de français commence à neuf heures.', exUa: 'Урок французької починається о дев\'ятій годині.' },
    { pos: 'noun', translation: 'курс (валюти, акцій)', exEn: 'Le cours de l\'action a chuté après l\'annonce.', exUa: 'Курс акції впав після оголошення.' },
  ],
  'fil': [
    { pos: 'noun', translation: 'нитка', exEn: 'Elle a cousu le bouton avec du fil rouge.', exUa: 'Вона пришила ґудзик червоною ниткою.' },
    { pos: 'noun', translation: 'дріт, провід', exEn: 'Un fil électrique pendait du plafond endommagé.', exUa: 'Електричний дріт звисав зі пошкодженої стелі.' },
  ],
  'banc': [
    { pos: 'noun', translation: 'лава, лавка', exEn: 'Ils se sont assis sur un banc pour regarder les bateaux.', exUa: 'Вони сіли на лавку, щоб подивитися на човни.' },
    { pos: 'noun', translation: 'косяк (риби)', exEn: 'Un grand banc de poissons argentés traversa la baie.', exUa: 'Великий косяк сріблястих риб перетнув затоку.' },
  ],
  'pile': [
    { pos: 'noun', translation: 'батарейка', exEn: 'La télécommande ne fonctionne plus, il faut changer la pile.', exUa: 'Пульт більше не працює, треба поміняти батарейку.' },
    { pos: 'noun', translation: 'стос, купа', exEn: 'Une pile de dossiers s\'entassait sur son bureau.', exUa: 'На її столі громадився стос документів.' },
  ],
};

export const SENSES_IT: Record<string, SenseEntry[]> = {
  'libreria': [
    { pos: 'noun', translation: 'книжкова шафа (меблі)', exEn: 'La vecchia libreria di legno era piena di romanzi classici.', exUa: 'Стара деревʼяна книжкова шафа була повна класичних романів.' },
    { pos: 'noun', translation: 'книгарня (магазин)', exEn: 'Ha passato ore a curiosare nella libreria locale.', exUa: 'Він провів години, розглядаючи книжки в місцевій книгарні.' },
  ],
};

export const SENSES_PT: Record<string, SenseEntry[]> = {
  'conta': [
    { pos: 'noun', translation: 'рахунок (банківський)', exEn: 'Ele abriu uma nova conta no banco.', exUa: 'Він відкрив новий рахунок у банку.' },
    { pos: 'noun', translation: 'рахунок (у ресторані)', exEn: 'O garçom trouxe a conta no final do longo jantar.', exUa: 'Офіціант приніс рахунок наприкінці довгої вечері.' },
    { pos: 'noun', translation: 'бісеринка (на ниточці)', exEn: 'Ela enfiou pequenas contas de vidro no colar de fio de prata.', exUa: 'Вона нанизала маленькі скляні бісеринки на срібний ланцюжок намиста.' },
  ],
  'ativo': [
    { pos: 'adj',  translation: 'активний', exEn: 'Tente se manter ativo durante o fim de semana.', exUa: 'Намагайся залишатися активним протягом вихідних.' },
    { pos: 'noun', translation: 'актив (фінансовий)', exEn: 'A equipe experiente é o maior ativo da empresa.', exUa: 'Досвідчена команда — найбільший актив компанії.' },
  ],
  'conselho': [
    { pos: 'noun', translation: 'порада', exEn: 'Obrigado pelo ótimo conselho que você me deu.', exUa: 'Дякую за чудову пораду, яку ти мені дав.' },
    { pos: 'noun', translation: 'рада (адміністративна)', exEn: 'O conselho da empresa se reuniu com urgência para discutir a crise financeira.', exUa: 'Рада компанії терміново зібралася, щоб обговорити фінансову кризу.' },
  ],
  'caixa': [
    { pos: 'noun', translation: 'коробка, ящик', exEn: 'Coloque todos os livros antigos naquela caixa lá.', exUa: 'Поклади всі старі книжки в той ящик.' },
    { pos: 'noun', translation: 'касир (особа)', exEn: 'O caixa contou o troco e o devolveu com um sorriso.', exUa: 'Касир рахував решту і повернув її з усмішкою.' },
  ],
};

export const SENSES_DE: Record<string, SenseEntry[]> = {
  'bank': [
    { pos: 'noun', translation: 'берег (річки)', exEn: 'Sie saßen am grasbewachsenen Flussufer und angelten, nahe der alten Bank.', exUa: 'Вони сиділи на трав\'янистому березі річки і рибалили, біля старої лавки.' },
    { pos: 'noun', translation: 'лавка, скамія', exEn: 'Ein alter Mann saß allein auf einer hölzernen Parkbank.', exUa: 'Старий чоловік сидів сам на деревʼяній лавці в парку.' },
  ],
  'decke': [
    { pos: 'noun', translation: 'ковдра', exEn: 'Sie zog sich die warme weiche Decke um die Schultern.', exUa: 'Вона накинула теплу м\'яку ковдру на плечі.' },
    { pos: 'noun', translation: 'стеля', exEn: 'Der hohe alte Raum hatte eine kunstvoll bemalte Decke.', exUa: 'У високій старій кімнаті була майстерно розписана стеля.' },
  ],
};

export const SENSES_PL: Record<string, SenseEntry[]> = {
  'koło': [
    { pos: 'noun', translation: 'коло (геометрична фігура)', exEn: 'Dzieci usiadły w kole na podłodze klasy.', exUa: 'Діти сіли колом на підлозі класу.' },
    { pos: 'prep', translation: 'біля, поруч', exEn: 'Siedziała spokojnie koło niego przez całą długą podróż.', exUa: 'Вона спокійно сиділа біля нього протягом усієї довгої подорожі.' },
  ],
};

export const SENSES_NL: Record<string, SenseEntry[]> = {
  'klok': [
    { pos: 'noun', translation: 'годинник (настінний)', exEn: 'De klok aan de muur toont de verkeerde tijd.', exUa: 'Годинник на стіні показує неправильний час.' },
    { pos: 'noun', translation: 'дзвін (церковний)', exEn: 'De kerkklok luidde luid elk uur door de dag.', exUa: 'Церковний дзвін голосно дзвонив щогодини протягом дня.' },
  ],
  'band': [
    { pos: 'noun', translation: 'емоційний звʼязок', exEn: 'Kinderen ontwikkelen sterke gehechtheid en een hechte band met hun verzorgers.', exUa: 'Діти розвивають міцну прив\'язаність і тісний звʼязок зі своїми опікунами.' },
    { pos: 'noun', translation: 'музичний гурт', exEn: 'De rockband speelde drie toegiften voor het enthousiaste publiek.', exUa: 'Рок-гурт зіграв три біси для захопленої публіки.' },
  ],
  'bot': [
    { pos: 'noun', translation: 'кістка', exEn: 'De hond begroef zijn favoriete bot in de tuin.', exUa: 'Пес закопав свою улюблену кістку в саду.' },
    { pos: 'adj',  translation: 'грубий, нечемний', exEn: 'Zijn botte manieren stootten veel mensen af.', exUa: 'Його грубі манери відштовхували багатьох людей.' },
  ],
};

export const SENSES_TR: Record<string, SenseEntry[]> = {
  'top': [
    { pos: 'noun', translation: 'мʼяч', exEn: 'Çocuklar bahçede topu tekmeliyordu.', exUa: 'Діти ганяли мʼяч у саду.' },
    { pos: 'noun', translation: 'гармата', exEn: 'Eski top kalenin girişini koruyordu.', exUa: 'Стара гармата охороняла вхід до фортеці.' },
  ],
  'daire': [
    { pos: 'noun', translation: 'квартира', exEn: 'Şehir merkezinde küçük bir daire kiraladı.', exUa: 'Вона винайняла маленьку квартиру в центрі міста.' },
    { pos: 'noun', translation: 'коло (геометрична фігура)', exEn: 'Çocuklar sınıfın zemininde daire şeklinde oturdu.', exUa: 'Діти сіли колом на підлозі класу.' },
  ],
  'kemer': [
    { pos: 'noun', translation: 'пояс, ремінь', exEn: 'Biraz kilo verdikten sonra deri kemerini sıkılaştırdı.', exUa: 'Схудши трохи, вона підтягнула свій шкіряний пояс.' },
    { pos: 'noun', translation: 'арка (архітектурна)', exEn: 'Eski taş kemerden geçerek avluya girdiler.', exUa: 'Вони пройшли через стару каменю арку у двір.' },
  ],
  'sıra': [
    { pos: 'noun', translation: 'черга, порядок', exEn: 'Dükkân çok çeşitli renkli taze sebzeleri sırayla sergiledi.', exUa: 'Магазин виставив різноманітні свіжі овочі рядами по черзі.' },
    { pos: 'noun', translation: 'парта, лавка (у класі)', exEn: 'Yaşlı bir adam ahşap park bankında, sırada tek başına oturuyordu.', exUa: 'Старий чоловік сидів сам на деревʼяній лавці в парку.' },
  ],
};

export const SENSES_EL: Record<string, SenseEntry[]> = {
  'διαμέρισμα': [
    { pos: 'noun', translation: 'квартира', exEn: 'Νοίκιασε ένα μικρό διαμέρισμα στο κέντρο της πόλης.', exUa: 'Вона винайняла маленьку квартиру в центрі міста.' },
    { pos: 'noun', translation: 'відділення, секція (у валізі тощо)', exEn: 'Φύλασσε το διαβατήριό της σε ξεχωριστό διαμέρισμα της τσάντας της.', exUa: 'Вона зберігала свій паспорт у окремому відділенні своєї сумки.' },
  ],
  'καφέ': [
    { pos: 'adj',  translation: 'коричневий (колір)', exEn: 'Έχει καφέ μαλλιά και πράσινα μάτια.', exUa: 'У неї коричневе волосся і зелені очі.' },
    { pos: 'noun', translation: 'кафе (заклад)', exEn: 'Συναντήθηκαν σε ένα ευχάριστο καφέ κοντά στον σιδηροδρομικό σταθμό.', exUa: 'Вони зустрілися в приємному кафе біля залізничного вокзалу.' },
  ],
};

export const SENSES_HE: Record<string, SenseEntry[]> = {
  'כדור': [
    { pos: 'noun', translation: 'мʼяч', exEn: 'הילדים בעטו בכדור בגינה.', exUa: 'Діти ганяли мʼяч у саду.' },
    { pos: 'noun', translation: 'куля (патрон)', exEn: 'המשטרה מצאה כדור תקוע בקיר הבניין.', exUa: 'Поліція знайшла кулю, застряглу в стіні будівлі.' },
  ],
  'בירה': [
    { pos: 'noun', translation: 'пиво', exEn: 'הם הזמינו סבב בירה בבר.', exUa: 'Вони замовили по пиву в барі.' },
    { pos: 'noun', translation: 'столиця (місто)', exEn: 'פריז היא בירת צרפת היפה וההיסטורית.', exUa: 'Париж — це прекрасна й історична столиця Франції.' },
  ],
  'תא': [
    { pos: 'noun', translation: 'кабінка, будка (телефонна)', exEn: 'הוא נכנס לתא הטלפון לבצע שיחה פרטית.', exUa: 'Він зайшов у телефонну будку, щоб зробити приватний дзвінок.' },
    { pos: 'noun', translation: 'клітина (біологічна)', exEn: 'כל יצור חי בנוי מתאים קטנים.', exUa: 'Кожна жива істота складається з маленьких клітин.' },
  ],
  'מטען': [
    { pos: 'noun', translation: 'багаж', exEn: 'אנא ודא שהמטען שלך לא עולה על 20 ק"ג.', exUa: 'Будь ласка, переконайтеся, що ваш багаж не перевищує 20 кг.' },
    { pos: 'noun', translation: 'зарядний пристрій', exEn: 'הטלפון שלי נגמר והשארתי את המטען בבית.', exUa: 'У мого телефону закінчився заряд, а зарядний пристрій я залишив дома.' },
  ],
  'מקור': [
    { pos: 'noun', translation: 'дзьоб (птаха)', exEn: 'הציפור השתמשה במקורה החד לפצח את הקליפה הקשה.', exUa: 'Птах використав свій гострий дзьоб, щоб розколоти тверду шкірку.' },
    { pos: 'noun', translation: 'джерело, походження', exEn: 'ייחוס נכון של מקורות הוא חיוני בכתיבה אקדמית.', exUa: 'Правильне зазначення джерел є важливим в академічному письмі.' },
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
