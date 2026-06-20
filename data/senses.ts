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
};
