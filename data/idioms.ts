// Vymova — data/idioms.ts
// Idioms reference data: English idioms (with Ukrainian meaning),
// Ukrainian idioms (with their closest English equivalent),
// and Spanish idioms (with Ukrainian + English meanings).
import type { Lang } from '../js/features/i18n.ts';

export interface Idiom {
  phrase: string; // the idiom itself
  meaning: string; // Ukrainian meaning / explanation
  meaningEn?: string; // English meaning (Spanish idioms only)
  exampleSrc: string; // example sentence in the idiom's own language
  exampleTr: string; // Ukrainian translation of the example
  emoji?: string;
  // Per-language translations for Ukrainian idioms (meaning + example in that language)
  translations?: Partial<Record<string, { meaning: string; exampleTr: string }>>;
}

// ── English idioms → Ukrainian meaning ─────────────────────────
export const ENGLISH_IDIOMS: Idiom[] = [
  {
    emoji: '🌧️',
    phrase: "It's raining cats and dogs",
    meaning: 'Лити як з відра (про сильний дощ)',
    exampleSrc: "We can't go for a walk — it's raining cats and dogs outside.",
    exampleTr: 'Ми не можемо піти на прогулянку — на вулиці ллє як з відра.',
  },
  {
    emoji: '🧊',
    phrase: 'Break the ice',
    meaning: 'Розтопити кригу, подолати ніяковість на початку спілкування',
    exampleSrc: 'He told a joke to break the ice at the meeting.',
    exampleTr: 'Він розповів жарт, щоб розрядити обстановку на зустрічі.',
  },
  {
    emoji: '🎂',
    phrase: 'A piece of cake',
    meaning: 'Дуже легка справа, простіше простого',
    exampleSrc: "Don't worry about the test — it's a piece of cake.",
    exampleTr: 'Не хвилюйся через тест — це простіше простого.',
  },
  {
    emoji: '🌧️',
    phrase: 'Once in a blue moon',
    meaning: 'Дуже рідко, раз на сто років',
    exampleSrc: 'She visits her hometown once in a blue moon.',
    exampleTr: 'Вона навідується в рідне місто дуже рідко.',
  },
  {
    emoji: '💰',
    phrase: 'Cost an arm and a leg',
    meaning: 'Коштувати шалених грошей',
    exampleSrc: 'That new laptop cost him an arm and a leg.',
    exampleTr: 'Той новий ноутбук коштував йому шалених грошей.',
  },
  {
    emoji: '⏰',
    phrase: 'Beat around the bush',
    meaning: 'Ходити навколо та навколо, не казати прямо',
    exampleSrc: 'Stop beating around the bush and tell me what happened.',
    exampleTr: 'Перестань ходити навколо та навколо і скажи мені, що сталося.',
  },
  {
    emoji: '🐦',
    phrase: 'Kill two birds with one stone',
    meaning: 'Вбити двох зайців одним пострілом',
    exampleSrc: 'By cycling to work, I kill two birds with one stone — I save money and stay fit.',
    exampleTr:
      'Їздячи на роботу велосипедом, я вбиваю двох зайців одразу — заощаджую гроші і тримаю форму.',
  },
  {
    emoji: '🎯',
    phrase: 'Hit the nail on the head',
    meaning: 'Влучити в саму суть, сказати точно те, що треба',
    exampleSrc: 'You hit the nail on the head when you said the project needed more time.',
    exampleTr: 'Ти влучив у саму суть, коли сказав, що проєкту потрібно більше часу.',
  },
  {
    emoji: '🌅',
    phrase: 'Under the weather',
    meaning: 'Почуватися погано, нездужати',
    exampleSrc: "I'm feeling a bit under the weather, so I'll stay home today.",
    exampleTr: 'Я почуваюся трохи нездужаю, тож сьогодні залишусь вдома.',
  },
  {
    emoji: '🎣',
    phrase: 'Let the cat out of the bag',
    meaning: 'Видати таємницю, проговоритися',
    exampleSrc: 'She let the cat out of the bag about the surprise party.',
    exampleTr: 'Вона видала таємницю про вечірку-сюрприз.',
  },
  {
    emoji: '🪙',
    phrase: 'On the ball',
    meaning: 'Бути уважним, кмітливим, добре знатися на справі',
    exampleSrc: 'Our new manager is really on the ball — nothing gets past her.',
    exampleTr: 'Наша нова керівниця дуже уважна — від неї нічого не сховається.',
  },
  {
    emoji: '🚪',
    phrase: 'When one door closes, another opens',
    meaning: 'Коли одні двері зачиняються, відчиняються інші',
    exampleSrc: "Don't worry about losing the job — when one door closes, another opens.",
    exampleTr: 'Не переживай через втрату роботи — коли одні двері зачиняються, відчиняються інші.',
  },
  {
    emoji: '🧈',
    phrase: 'Butter someone up',
    meaning: 'Лестити комусь, підлещуватися',
    exampleSrc: 'He tried to butter up his boss before asking for a raise.',
    exampleTr: 'Він намагався підлеститися до начальника, перш ніж попросити підвищення зарплати.',
  },
  {
    emoji: '🐎',
    phrase: 'Hold your horses',
    meaning: 'Зачекай, не поспішай',
    exampleSrc: 'Hold your horses — we still need to check all the details.',
    exampleTr: 'Зачекай — нам ще потрібно перевірити всі деталі.',
  },
  {
    emoji: '🔔',
    phrase: 'Ring a bell',
    meaning: 'Здаватися знайомим, нагадувати щось',
    exampleSrc: "That name rings a bell, but I can't remember where I heard it.",
    exampleTr: "Це ім'я здається знайомим, але я не можу згадати, де його чув.",
  },
  {
    emoji: '🌪️',
    phrase: 'A storm in a teacup',
    meaning: 'Буря в склянці води, багато галасу даремно',
    exampleSrc: 'The argument turned out to be a storm in a teacup.',
    exampleTr: 'Суперечка виявилась бурею в склянці води.',
  },
  {
    emoji: '🧵',
    phrase: 'Hang by a thread',
    meaning: 'Висіти на волосині, бути в небезпеці',
    exampleSrc: 'After the accident, his life hung by a thread for several days.',
    exampleTr: 'Після аварії його життя кілька днів висіло на волосині.',
  },
  {
    emoji: '🌶️',
    phrase: 'Add fuel to the fire',
    meaning: 'Підливати масла у вогонь',
    exampleSrc: 'His sarcastic comment only added fuel to the fire.',
    exampleTr: 'Його саркастичне зауваження лише підлило масла у вогонь.',
  },
  {
    emoji: '🪞',
    phrase: 'See eye to eye',
    meaning: 'Повністю погоджуватися з кимось, мати однакову думку',
    exampleSrc: "My sister and I don't always see eye to eye on politics.",
    exampleTr: 'Ми з сестрою не завжди погоджуємось одне з одним щодо політики.',
  },
  {
    emoji: '🌊',
    phrase: 'In the same boat',
    meaning: 'Бути в однаковому, часто складному, становищі',
    exampleSrc: "Don't feel bad — we're all in the same boat with these deadlines.",
    exampleTr: 'Не переймайся — ми всі в однаковому становищі з цими дедлайнами.',
  },
  {
    emoji: '🪙',
    phrase: 'The other side of the coin',
    meaning: 'Зворотний бік медалі',
    exampleSrc:
      'Working from home is convenient, but the other side of the coin is feeling isolated.',
    exampleTr: 'Робота з дому зручна, але зворотний бік медалі — відчуття ізольованості.',
  },
  {
    emoji: '🐘',
    phrase: 'The elephant in the room',
    meaning: 'Очевидна проблема, яку всі уникають обговорювати',
    exampleSrc: "Someone finally mentioned the elephant in the room — the company's falling sales.",
    exampleTr: 'Хтось нарешті згадав про очевидну проблему — падіння продажів компанії.',
  },
  {
    emoji: '🪜',
    phrase: 'Climb the ladder',
    meaning: "Підійматися кар'єрними сходами",
    exampleSrc: 'She worked hard for years to climb the corporate ladder.',
    exampleTr: "Вона роками наполегливо працювала, щоб піднятися кар'єрними сходами.",
  },
  {
    emoji: '🎭',
    phrase: 'Bite the bullet',
    meaning: 'Стиснути зуби і зробити щось неприємне',
    exampleSrc: "I hate going to the dentist, but I'll just have to bite the bullet.",
    exampleTr: 'Я ненавиджу ходити до стоматолога, але доведеться стиснути зуби й піти.',
  },
  {
    emoji: '🪶',
    phrase: 'A blessing in disguise',
    meaning: 'Не було б щастя, та нещастя допомогло',
    exampleSrc: 'Losing that job was a blessing in disguise — she found a much better one.',
    exampleTr:
      'Втрата тієї роботи виявилась прихованим благословенням — вона знайшла набагато кращу.',
  },
  {
    emoji: '🪟',
    phrase: 'A window of opportunity',
    meaning: 'Сприятлива можливість, що скоро мине',
    exampleSrc: "There's a small window of opportunity to apply before the deadline.",
    exampleTr: 'Є невелика можливість подати заявку до настання дедлайну.',
  },
  {
    emoji: '🧶',
    phrase: 'Tie the knot',
    meaning: 'Одружитися, побратися',
    exampleSrc: 'They finally decided to tie the knot after seven years together.',
    exampleTr: 'Вони нарешті вирішили одружитися після семи років стосунків.',
  },
  {
    emoji: '🪙',
    phrase: 'A penny for your thoughts',
    meaning: 'Про що ти думаєш? (питання тому, хто замислився)',
    exampleSrc: "You've been quiet all evening — a penny for your thoughts?",
    exampleTr: 'Ти весь вечір мовчиш — про що ти думаєш?',
  },
  {
    emoji: '🌗',
    phrase: 'On the fence',
    meaning: 'Не визначитися, вагатися',
    exampleSrc: "I'm still on the fence about whether to take the job offer.",
    exampleTr: 'Я все ще вагаюся, чи приймати пропозицію роботи.',
  },
  {
    emoji: '🪂',
    phrase: 'Jump on the bandwagon',
    meaning: 'Приєднатися до модної течії, зробити, як усі',
    exampleSrc: 'A lot of brands jumped on the bandwagon when the trend became popular.',
    exampleTr: 'Багато брендів підхопили цю модну тенденцію, коли вона стала популярною.',
  },
  {
    emoji: '🪵',
    phrase: "Can't see the wood for the trees",
    meaning: 'За деревами не бачити лісу, загрузнути в дрібницях',
    exampleSrc: "He's so focused on small details that he can't see the wood for the trees.",
    exampleTr: 'Він так зосереджений на дрібницях, що не бачить картини в цілому.',
  },
  {
    emoji: '🪡',
    phrase: 'A stitch in time saves nine',
    meaning: 'Краще вчасно усунути проблему, ніж потім розгрібати наслідки',
    exampleSrc: 'Fix that leak now — a stitch in time saves nine.',
    exampleTr: 'Полагодь цей витік зараз — краще вчасно, ніж потім більше клопоту.',
  },
  {
    emoji: '🪃',
    phrase: 'Come back to bite you',
    meaning: 'Аукнутися, мати неприємні наслідки в майбутньому',
    exampleSrc: 'Cutting corners on safety can come back to bite the company later.',
    exampleTr: 'Економія на безпеці може потім вилізти компанії боком.',
  },
  {
    emoji: '🪤',
    phrase: 'Caught between a rock and a hard place',
    meaning: 'Опинитися між двома вогнями, у безвиході',
    exampleSrc: 'He felt caught between a rock and a hard place — both choices seemed bad.',
    exampleTr: 'Він почувався затиснутим між двома вогнями — обидва варіанти здавались поганими.',
  },
  {
    emoji: '🪞',
    phrase: 'A taste of your own medicine',
    meaning: 'Та сама монета, відплата тим самим',
    exampleSrc:
      'After years of being late, he finally got a taste of his own medicine when his train left without him.',
    exampleTr:
      'Після років запізнень йому нарешті відплатили тією самою монетою, коли потяг поїхав без нього.',
  },
  {
    emoji: '🪖',
    phrase: 'Burn the midnight oil',
    meaning: 'Працювати допізна, засиджуватися ночами',
    exampleSrc: 'She had to burn the midnight oil to finish the report on time.',
    exampleTr: 'Їй довелося засиджуватись допізна, щоб вчасно закінчити звіт.',
  },
  {
    emoji: '🪦',
    phrase: 'Let sleeping dogs lie',
    meaning: 'Не варто ворушити минуле, не буди лиха',
    exampleSrc: "I know you're still angry, but maybe it's best to let sleeping dogs lie.",
    exampleTr: 'Я знаю, ти все ще злишся, але, можливо, краще не ворушити минуле.',
  },
  {
    emoji: '🪧',
    phrase: 'Read between the lines',
    meaning: 'Читати між рядків, розуміти прихований сенс',
    exampleSrc: "If you read between the lines, you'll see he's not happy with the decision.",
    exampleTr: 'Якщо читати між рядків, видно, що він незадоволений цим рішенням.',
  },
  {
    emoji: '🪨',
    phrase: 'Cut corners',
    meaning: 'Економити на якості, робити абияк',
    exampleSrc: 'The contractor cut corners, and the roof started leaking within a year.',
    exampleTr: 'Підрядник схалтурив, і дах почав протікати вже за рік.',
  },
  {
    emoji: '🪶',
    phrase: 'Get cold feet',
    meaning: 'Злякатися в останній момент, передумати',
    exampleSrc: 'He got cold feet right before the wedding.',
    exampleTr: 'Він злякався в останній момент перед весіллям.',
  },
  {
    emoji: '🧭',
    phrase: 'Go the extra mile',
    meaning: 'Робити більше, ніж потрібно, докладати додаткових зусиль',
    exampleSrc: 'She always goes the extra mile to make sure customers are happy.',
    exampleTr: 'Вона завжди докладає додаткових зусиль, щоб клієнти були задоволені.',
  },
  {
    emoji: '🫘',
    phrase: 'Spill the beans',
    meaning: 'Розказати таємницю, виболтати',
    exampleSrc: "Don't spill the beans about the surprise party!",
    exampleTr: 'Не виболтуй таємницю про вечірку-сюрприз!',
  },
  {
    emoji: '🍽️',
    phrase: 'Bite off more than you can chew',
    meaning: 'Взяти на себе більше, ніж можна потягнути',
    exampleSrc: 'He bit off more than he could chew by accepting three projects at once.',
    exampleTr: 'Він взяв на себе більше, ніж міг потягнути, погодившись одразу на три проєкти.',
  },
  {
    emoji: '🛏️',
    phrase: 'Hit the sack',
    meaning: 'Лягати спати, йти на боковую',
    exampleSrc: "I'm exhausted — time to hit the sack.",
    exampleTr: 'Я виснажений — час на боковую.',
  },
  {
    emoji: '🚤',
    phrase: 'Miss the boat',
    meaning: 'Упустити момент, прогавити шанс',
    exampleSrc: "If you don't apply now, you'll miss the boat entirely.",
    exampleTr: 'Якщо ти не подаси заявку зараз, то прогаєш свій шанс.',
  },
  {
    emoji: '🦵',
    phrase: "Pull someone's leg",
    meaning: 'Підколювати, жартувати над кимось',
    exampleSrc: 'Relax, I was just pulling your leg!',
    exampleTr: 'Розслабся, я просто тебе підколював!',
  },
  {
    emoji: '🐂',
    phrase: 'Take the bull by the horns',
    meaning: 'Взяти бика за роги, сміливо вирішити проблему',
    exampleSrc: "It's time to take the bull by the horns and have that difficult conversation.",
    exampleTr: 'Час узяти бика за роги і провести цю складну розмову.',
  },
  {
    emoji: '🥊',
    phrase: 'Throw in the towel',
    meaning: 'Здатися, опустити руки',
    exampleSrc: 'After three failed attempts he finally threw in the towel.',
    exampleTr: 'Після трьох невдалих спроб він нарешті здався.',
  },
  {
    emoji: '🎾',
    phrase: 'The ball is in your court',
    meaning: 'Тепер ваша черга, ваш хід',
    exampleSrc: "I've made my offer — the ball is in your court now.",
    exampleTr: 'Я зробив свою пропозицію — тепер хід за тобою.',
  },
  {
    emoji: '🔄',
    phrase: 'Back to square one',
    meaning: 'Почати з нуля, повернутися до початку',
    exampleSrc: "The plan failed, so we're back to square one.",
    exampleTr: 'План не спрацював, тож ми починаємо з нуля.',
  },
  {
    emoji: '🌾',
    phrase: 'The last straw',
    meaning: 'Остання крапля, що переповнила чашу',
    exampleSrc: 'Missing the deadline was the last straw for the client.',
    exampleTr: 'Зрив дедлайну став останньою краплею для клієнта.',
  },
  {
    emoji: '😤',
    phrase: 'Keep your chin up',
    meaning: 'Не падати духом, тримати голову вище',
    exampleSrc: 'Keep your chin up — things will get better.',
    exampleTr: 'Не падай духом — все налагодиться.',
  },
  {
    emoji: '💪',
    phrase: 'No pain, no gain',
    meaning: 'Без зусиль немає результату',
    exampleSrc: 'Training every day is tough, but no pain, no gain.',
    exampleTr: 'Щоденні тренування важкі, але без зусиль немає результату.',
  },
  {
    emoji: '😈',
    phrase: 'Speak of the devil',
    meaning: "Легкий на помині (з'явився той, про кого говорили)",
    exampleSrc: 'Speak of the devil — here comes Tom right now!',
    exampleTr: 'Легкий на помині — ось і Том!',
  },
  {
    emoji: '🐕',
    phrase: 'Every dog has its day',
    meaning: 'У кожного є своя зоряна година',
    exampleSrc: 'He was overlooked for years, but every dog has its day.',
    exampleTr: 'Його роками не помічали, але у кожного є своя зоряна година.',
  },
  {
    emoji: '📕',
    phrase: "Don't judge a book by its cover",
    meaning: 'Не судити по зовнішності',
    exampleSrc: "The restaurant looks plain, but don't judge a book by its cover.",
    exampleTr: 'Ресторан виглядає невибагливо, але не судіть по зовнішності.',
  },
  {
    emoji: '🤚',
    phrase: 'Bite the hand that feeds you',
    meaning: 'Кусати руку, що годує',
    exampleSrc: 'Criticising your sponsor publicly is biting the hand that feeds you.',
    exampleTr: 'Публічно критикувати свого спонсора — це кусати руку, що годує.',
  },
  {
    emoji: '⛳',
    phrase: 'Get the ball rolling',
    meaning: 'Почати, запустити процес',
    exampleSrc: "Let's get the ball rolling with a quick brainstorm.",
    exampleTr: 'Давайте запустимо процес з короткого мозкового штурму.',
  },
  {
    emoji: '🍳',
    phrase: "You can't make an omelette without breaking eggs",
    meaning: 'Без жертв нічого не досягнеш',
    exampleSrc:
      "Some people got upset by the changes, but you can't make an omelette without breaking eggs.",
    exampleTr: 'Деяким людям не сподобались зміни, але без жертв нічого не досягнеш.',
  },
  {
    emoji: '⛈️',
    phrase: "Steal someone's thunder",
    meaning: 'Красти чужу славу, перебивати чийсь тріумф',
    exampleSrc: 'He announced his news at her graduation — totally stealing her thunder.',
    exampleTr: 'Він оголосив свою новину на її випускному — повністю перебив її тріумф.',
  },
  {
    emoji: '💼',
    phrase: "Twist someone's arm",
    meaning: 'Натиснути на когось, змусити зробити щось',
    exampleSrc: 'They had to twist his arm to get him to join the team.',
    exampleTr: 'Їм довелося натиснути на нього, щоб він приєднався до команди.',
  },
  {
    emoji: '🍦',
    phrase: 'The icing on the cake',
    meaning: 'Приємне доповнення до й так гарної речі',
    exampleSrc: 'The bonus was the icing on the cake after a great year.',
    exampleTr: 'Премія стала приємним доповненням після чудового року.',
  },
  {
    emoji: '🎭',
    phrase: 'Once bitten, twice shy',
    meaning: 'Обпікшись раз, надалі обережний',
    exampleSrc: "I won't lend him money again — once bitten, twice shy.",
    exampleTr: 'Я більше не позичу йому грошей — обпікшись раз, буду обережним надалі.',
  },
  {
    emoji: '🪜',
    phrase: 'Climb the corporate ladder',
    meaning: "Просуватися кар'єрними сходами",
    exampleSrc: 'She worked hard to climb the corporate ladder.',
    exampleTr: "Вона важко працювала, щоб просунутися кар'єрними сходами.",
  },
  {
    emoji: '🧹',
    phrase: 'Sweep something under the rug',
    meaning: 'Замовчати проблему, приховати щось',
    exampleSrc: 'They tried to sweep the scandal under the rug.',
    exampleTr: 'Вони намагалися замовчати скандал.',
  },
  {
    emoji: '🐝',
    phrase: 'The best of both worlds',
    meaning: 'Поєднання переваг двох речей одразу',
    exampleSrc: 'Working from a café gives me the best of both worlds — quiet and company.',
    exampleTr: 'Робота в кафе дає мені найкраще з обох світів — тишу і компанію.',
  },
  {
    emoji: '🪙',
    phrase: 'Put your money where your mouth is',
    meaning: 'Підтвердити слова ділом',
    exampleSrc: 'If you really believe in the project, put your money where your mouth is.',
    exampleTr: 'Якщо ти справді віриш у проєкт, підтверди це ділом.',
  },
  {
    emoji: '🦊',
    phrase: "A wolf in sheep's clothing",
    meaning: 'Вовк в овечій шкурі, прихована небезпека',
    exampleSrc: "He seemed friendly, but he turned out to be a wolf in sheep's clothing.",
    exampleTr: 'Він здавався дружнім, але виявився вовком в овечій шкурі.',
  },
  {
    emoji: '🪨',
    phrase: 'Between a rock and a hard place',
    meaning: 'Між двох вогнів, у безвихідному становищі',
    exampleSrc: 'I was between a rock and a hard place — both choices had big risks.',
    exampleTr: 'Я опинився між двох вогнів — обидва вибори мали великі ризики.',
  },
  {
    emoji: '🎈',
    phrase: "Burst someone's bubble",
    meaning: 'Розчарувати когось, зруйнувати ілюзії',
    exampleSrc: 'I hate to burst your bubble, but the trip is cancelled.',
    exampleTr: 'Не хочу тебе засмучувати, але поїздку скасовано.',
  },
];

// ── Ukrainian idioms → English equivalent ──────────────────────
export const UKRAINIAN_IDIOMS: Idiom[] = [
  {
    emoji: '🪣',
    phrase: 'Лити як з відра',
    meaning: "It's raining cats and dogs",
    exampleSrc: 'Цілий день ллє як з відра, і ми застрягли вдома.',
    exampleTr: "It's been raining cats and dogs all day, and we're stuck at home.",
    translations: {
      es: {
        meaning: 'Llover a cántaros',
        exampleTr: 'Ha estado lloviendo a cántaros todo el día y nos hemos quedado en casa.',
      },
      fr: {
        meaning: 'Il pleut des cordes',
        exampleTr: 'Il a plu des cordes toute la journée et nous sommes restés à la maison.',
      },
      it: {
        meaning: 'Piovere a catinelle',
        exampleTr: 'Ha piovuto a catinelle tutto il giorno e siamo rimasti a casa.',
      },
      pt: {
        meaning: 'Chover a cântaros',
        exampleTr: 'Choveu a cântaros o dia todo e ficamos presos em casa.',
      },
      de: {
        meaning: 'Es regnet in Strömen',
        exampleTr: 'Es hat den ganzen Tag in Strömen geregnet und wir blieben zu Hause.',
      },
    },
  },
  {
    emoji: '🐰',
    phrase: 'Вбити двох зайців одним пострілом',
    meaning: 'Kill two birds with one stone',
    exampleSrc: 'Підвозячи колегу на роботу, я вбиваю двох зайців одним пострілом.',
    exampleTr: 'By giving my colleague a lift to work, I kill two birds with one stone.',
    translations: {
      es: {
        meaning: 'Matar dos pájaros de un tiro',
        exampleTr: 'Al llevar a mi colega al trabajo, mato dos pájaros de un tiro.',
      },
      fr: {
        meaning: "Faire d'une pierre deux coups",
        exampleTr: "En emmenant mon collègue au travail, je fais d'une pierre deux coups.",
      },
      it: {
        meaning: 'Prendere due piccioni con una fava',
        exampleTr: 'Dando un passaggio al collega, prendo due piccioni con una fava.',
      },
      pt: {
        meaning: 'Matar dois coelhos de uma cajadada',
        exampleTr: 'Ao dar carona ao colega, mato dois coelhos de uma cajadada.',
      },
      de: {
        meaning: 'Zwei Fliegen mit einer Klappe schlagen',
        exampleTr: 'Indem ich meinen Kollegen mitnahm, schlug ich zwei Fliegen mit einer Klappe.',
      },
    },
  },
  {
    emoji: '🍮',
    phrase: 'Простіше простого / раз плюнути',
    meaning: 'A piece of cake / a walk in the park',
    exampleSrc: 'Цей іспит для неї — раз плюнути.',
    exampleTr: 'That exam is a piece of cake for her.',
    translations: {
      es: {
        meaning: 'Pan comido / coser y cantar',
        exampleTr: 'Ese examen para ella fue pan comido.',
      },
      fr: {
        meaning: "Simple comme bonjour / un jeu d'enfant",
        exampleTr: "Cet examen pour elle, c'était un jeu d'enfant.",
      },
      it: {
        meaning: 'Un gioco da ragazzi / una passeggiata',
        exampleTr: "Quell'esame per lei era un gioco da ragazzi.",
      },
      pt: {
        meaning: 'Canja de galinha / moleza',
        exampleTr: 'Esse exame para ela foi canja de galinha.',
      },
      de: {
        meaning: 'Ein Kinderspiel / kein Problem',
        exampleTr: 'Diese Prüfung war für sie ein Kinderspiel.',
      },
    },
  },
  {
    emoji: '🐔',
    phrase: 'Курам на сміх',
    meaning: 'Laughable / a joke (something ridiculous)',
    exampleSrc: 'Та пропозиція була просто курам на сміх.',
    exampleTr: 'That offer was simply laughable.',
    translations: {
      es: {
        meaning: 'Para morirse de risa / ridículo',
        exampleTr: 'Esa propuesta fue simplemente ridícula.',
      },
      fr: {
        meaning: 'À mourir de rire / ridicule',
        exampleTr: 'Cette proposition était tout simplement ridicule.',
      },
      it: {
        meaning: 'Da ridere / ridicolo',
        exampleTr: 'Quella proposta era semplicemente ridicola.',
      },
      pt: {
        meaning: 'Para rir / ridículo',
        exampleTr: 'Aquela proposta foi simplesmente para rir.',
      },
      de: {
        meaning: 'Zum Lachen / lächerlich',
        exampleTr: 'Dieses Angebot war einfach lächerlich.',
      },
    },
  },
  {
    emoji: '🪤',
    phrase: 'Потрапити як кур у щи',
    meaning: 'To be caught red-handed / land in hot water',
    exampleSrc: 'Він потрапив як кур у щи, коли начальник перевірив документи.',
    exampleTr: 'He landed in hot water when his boss checked the documents.',
    translations: {
      es: {
        meaning: 'Meterse en un lío / quedar en evidencia',
        exampleTr: 'Se metió en un lío cuando el jefe revisó los documentos.',
      },
      fr: {
        meaning: 'Se retrouver dans le pétrin',
        exampleTr: "Il s'est retrouvé dans le pétrin quand son patron a vérifié les documents.",
      },
      it: {
        meaning: 'Cacciarsi nei guai / essere colto in flagrante',
        exampleTr: 'Si è cacciato nei guai quando il capo ha controllato i documenti.',
      },
      pt: {
        meaning: 'Meter os pés pelas mãos / se dar mal',
        exampleTr: 'Ele se deu mal quando o chefe conferiu os documentos.',
      },
      de: {
        meaning: 'In die Klemme geraten / erwischt werden',
        exampleTr: 'Er geriet in die Klemme, als sein Chef die Dokumente prüfte.',
      },
    },
  },
  {
    emoji: '🌊',
    phrase: 'Сьома вода на киселі',
    meaning: 'A distant relative / once removed',
    exampleSrc: 'Він мені сьома вода на киселі, ми майже не спілкуємось.',
    exampleTr: "He's a distant relative of mine — we barely talk.",
    translations: {
      es: {
        meaning: 'Un pariente lejano',
        exampleTr: 'Es un pariente muy lejano mío, casi no nos hablamos.',
      },
      fr: {
        meaning: 'Un parent éloigné',
        exampleTr: "C'est un parent très éloigné — on se parle à peine.",
      },
      it: {
        meaning: 'Un parente lontano',
        exampleTr: 'È un mio parente lontano, ci parliamo appena.',
      },
      pt: {
        meaning: 'Um parente distante',
        exampleTr: 'Ele é um parente muito distante meu, mal nos falamos.',
      },
      de: {
        meaning: 'Ein entfernter Verwandter',
        exampleTr: 'Er ist ein entfernter Verwandter von mir — wir sprechen kaum miteinander.',
      },
    },
  },
  {
    emoji: '🐎',
    phrase: 'Не в коня корм',
    meaning: "To be wasted on someone (lit. fodder wasted on a horse that won't benefit)",
    exampleSrc: 'Усі ці поради йому не в коня корм — він однаково зробить по-своєму.',
    exampleTr: "All this advice is wasted on him — he'll do it his own way anyway.",
    translations: {
      es: {
        meaning: 'Tirar perlas a los cerdos / malgastar consejos',
        exampleTr: 'Todos esos consejos son en vano — de todas formas hará lo que quiera.',
      },
      fr: {
        meaning: 'Jeter des perles aux cochons / peine perdue',
        exampleTr: 'Tous ces conseils sont perdus pour lui — il fera de toute façon à sa tête.',
      },
      it: {
        meaning: 'Gettare perle ai porci / sprecato',
        exampleTr: 'Tutti questi consigli sono sprecati con lui — farà comunque a modo suo.',
      },
      pt: {
        meaning: 'Ser desperdiçado / falar com a parede',
        exampleTr:
          'Todos esses conselhos são desperdiçados com ele — de qualquer forma fará do seu jeito.',
      },
      de: {
        meaning: 'Perlen vor die Säue werfen / verschwendet',
        exampleTr: 'Alle Ratschläge sind an ihm verschwendet — er macht es sowieso auf seine Art.',
      },
    },
  },
  {
    emoji: '🪨',
    phrase: 'Камінь з душі впав',
    meaning: "A weight off one's shoulders / a load off one's mind",
    exampleSrc: 'Коли вона почула гарні новини, у неї немов камінь з душі впав.',
    exampleTr: 'When she heard the good news, it was like a weight off her shoulders.',
    translations: {
      es: {
        meaning: 'Un peso de encima / quedarse más tranquilo',
        exampleTr: 'Cuando escuchó las buenas noticias, le quitaron un peso de encima.',
      },
      fr: {
        meaning: 'Un poids en moins / soulagé',
        exampleTr: "Quand elle a entendu la bonne nouvelle, c'était comme un poids en moins.",
      },
      it: {
        meaning: 'Un peso tolto di dosso / sollievo',
        exampleTr: 'Quando ha sentito la buona notizia, è stato come togliersi un peso di dosso.',
      },
      pt: {
        meaning: 'Um peso saiu dos ombros / alívio',
        exampleTr: 'Quando ela ouviu as boas notícias, sentiu um peso sair dos ombros.',
      },
      de: {
        meaning: 'Ein Stein vom Herzen gefallen',
        exampleTr: 'Als sie die guten Nachrichten hörte, fiel ihr ein Stein vom Herzen.',
      },
    },
  },
  {
    emoji: '🐭',
    phrase: 'Тихіше води, нижче трави',
    meaning: 'As quiet as a mouse / meek as a lamb',
    exampleSrc: 'На зустрічах він зазвичай тихіше води, нижче трави.',
    exampleTr: "At meetings he's usually as quiet as a mouse.",
    translations: {
      es: {
        meaning: 'Quieto como un ratón / muy callado',
        exampleTr: 'En las reuniones suele estar quieto como un ratón.',
      },
      fr: {
        meaning: 'Silencieux comme une souris / très discret',
        exampleTr: 'Aux réunions, il est habituellement silencieux comme une souris.',
      },
      it: {
        meaning: 'Silenzioso come un topo / molto quieto',
        exampleTr: 'Alle riunioni di solito è silenzioso come un topo.',
      },
      pt: {
        meaning: 'Quieto como um rato / muito calmo',
        exampleTr: 'Nas reuniões, ele costuma ser quieto como um rato.',
      },
      de: {
        meaning: 'Still wie eine Maus / sehr ruhig',
        exampleTr: 'Bei Meetings ist er normalerweise still wie eine Maus.',
      },
    },
  },
  {
    emoji: '🪵',
    phrase: 'Шукати голку в копиці сіна',
    meaning: 'Look for a needle in a haystack',
    exampleSrc: 'Знайти його адресу в цьому місті — це як шукати голку в копиці сіна.',
    exampleTr: 'Finding his address in this city is like looking for a needle in a haystack.',
    translations: {
      es: {
        meaning: 'Buscar una aguja en un pajar',
        exampleTr: 'Encontrar su dirección en esta ciudad es como buscar una aguja en un pajar.',
      },
      fr: {
        meaning: 'Chercher une aiguille dans une botte de foin',
        exampleTr:
          "Trouver son adresse dans cette ville, c'est chercher une aiguille dans une botte de foin.",
      },
      it: {
        meaning: 'Cercare un ago in un pagliaio',
        exampleTr: 'Trovare il suo indirizzo in questa città è come cercare un ago in un pagliaio.',
      },
      pt: {
        meaning: 'Procurar uma agulha num palheiro',
        exampleTr:
          'Encontrar o endereço dele nesta cidade é como procurar uma agulha num palheiro.',
      },
      de: {
        meaning: 'Eine Nadel im Heuhaufen suchen',
        exampleTr:
          'Seine Adresse in dieser Stadt zu finden ist wie eine Nadel im Heuhaufen suchen.',
      },
    },
  },
  {
    emoji: '🪞',
    phrase: 'Зробити з мухи слона',
    meaning: 'Make a mountain out of a molehill',
    exampleSrc: 'Не варто робити з мухи слона через таку дрібницю.',
    exampleTr: "There's no need to make a mountain out of a molehill over such a small thing.",
    translations: {
      es: {
        meaning: 'Hacer una montaña de un grano de arena',
        exampleTr: 'No hay que hacer una montaña de un grano de arena por una nimiedad.',
      },
      fr: {
        meaning: "Faire une montagne d'un rien",
        exampleTr: "Il ne faut pas faire une montagne d'un rien pour une si petite chose.",
      },
      it: {
        meaning: 'Fare di una mosca un elefante',
        exampleTr: 'Non vale la pena fare di una mosca un elefante per una cosa così piccola.',
      },
      pt: {
        meaning: "Fazer uma tempestade num copo d'água",
        exampleTr: "Não precisa fazer uma tempestade num copo d'água por uma coisa tão pequena.",
      },
      de: {
        meaning: 'Aus einer Mücke einen Elefanten machen',
        exampleTr: 'Es ist nicht nötig, aus einer Mücke einen Elefanten zu machen.',
      },
    },
  },
  {
    emoji: '🦉',
    phrase: 'Сова влетіла',
    meaning: 'To be hit by sudden bad news / things go south',
    exampleSrc: 'Коли він побачив рахунок, у нього немов сова влетіла.',
    exampleTr: 'When he saw the bill, his face just fell.',
    translations: {
      es: {
        meaning: 'Quedarse de piedra / llevarse un susto',
        exampleTr: 'Cuando vio la factura, se quedó de piedra.',
      },
      fr: {
        meaning: 'Tomber des nues / avoir un choc',
        exampleTr: 'Quand il a vu la facture, il est tombé des nues.',
      },
      it: {
        meaning: 'Restare di sasso / avere uno shock',
        exampleTr: 'Quando ha visto il conto, è rimasto di sasso.',
      },
      pt: {
        meaning: 'Ficar boquiaberto / levar um susto',
        exampleTr: 'Quando ele viu a conta, ficou boquiaberto.',
      },
      de: {
        meaning: 'Aus allen Wolken fallen / schockiert sein',
        exampleTr: 'Als er die Rechnung sah, fiel er aus allen Wolken.',
      },
    },
  },
  {
    emoji: '🪤',
    phrase: 'Потрапити пальцем у небо',
    meaning: 'To miss the mark completely / be way off',
    exampleSrc: 'Зі своєю відповіддю він потрапив пальцем у небо.',
    exampleTr: 'He was way off the mark with his answer.',
    translations: {
      es: {
        meaning: 'No dar en el blanco / equivocarse por completo',
        exampleTr: 'Con su respuesta, erró completamente el blanco.',
      },
      fr: {
        meaning: 'Rater complètement la cible / se tromper lourdement',
        exampleTr: 'Avec sa réponse, il a raté complètement la cible.',
      },
      it: {
        meaning: 'Prendere una cantonata / sbagliare completamente',
        exampleTr: 'Con la sua risposta ha preso una bella cantonata.',
      },
      pt: {
        meaning: 'Errar o alvo completamente / estar muito longe',
        exampleTr: 'Com sua resposta, ele errou o alvo completamente.',
      },
      de: {
        meaning: 'Völlig danebenschießen / komplett falsch liegen',
        exampleTr: 'Mit seiner Antwort hat er völlig danebenschossen.',
      },
    },
  },
  {
    emoji: '🪶',
    phrase: 'Як сніг на голову',
    meaning: 'Out of the blue / like a bolt from the blue',
    exampleSrc: 'Ця новина впала як сніг на голову.',
    exampleTr: 'That news came completely out of the blue.',
    translations: {
      es: {
        meaning: 'Como caído del cielo / de repente',
        exampleTr: 'Esa noticia cayó como un rayo de la nada.',
      },
      fr: {
        meaning: "Tomber du ciel / complètement à l'improviste",
        exampleTr: "Cette nouvelle est tombée complètement à l'improviste.",
      },
      it: {
        meaning: "Piombare come dal nulla / all'improvviso",
        exampleTr: 'Quella notizia è piombata come dal nulla.',
      },
      pt: {
        meaning: 'Cair como uma bomba / do nada',
        exampleTr: 'Essa notícia caiu como uma bomba.',
      },
      de: {
        meaning: 'Wie aus heiterem Himmel / völlig unerwartet',
        exampleTr: 'Diese Nachricht kam wie aus heiterem Himmel.',
      },
    },
  },
  {
    emoji: '🐺',
    phrase: 'Вовків боятися — в ліс не ходити',
    meaning: 'Nothing ventured, nothing gained',
    exampleSrc: 'Вовків боятися — в ліс не ходити, тож я погодився на цю пропозицію.',
    exampleTr: 'Nothing ventured, nothing gained, so I accepted the offer.',
    translations: {
      es: {
        meaning: 'Quien no arriesga, no gana',
        exampleTr: 'Quien no arriesga, no gana — así que acepté la oferta.',
      },
      fr: {
        meaning: "Qui ne risque rien n'a rien",
        exampleTr: "Qui ne risque rien n'a rien — j'ai donc accepté l'offre.",
      },
      it: {
        meaning: 'Chi non risica non rosica',
        exampleTr: "Chi non risica non rosica — quindi ho accettato l'offerta.",
      },
      pt: {
        meaning: 'Quem não arrisca, não petisca',
        exampleTr: 'Quem não arrisca, não petisca — então aceitei a proposta.',
      },
      de: {
        meaning: 'Wer wagt, gewinnt / nichts wagen, nichts gewinnen',
        exampleTr: 'Wer wagt, gewinnt — also habe ich das Angebot angenommen.',
      },
    },
  },
  {
    emoji: '🪙',
    phrase: 'Грошей кури не клюють',
    meaning: 'To be rolling in money / made of money',
    exampleSrc: 'Виглядає так, ніби в нього грошей кури не клюють.',
    exampleTr: "It looks like he's rolling in money.",
    translations: {
      es: {
        meaning: 'Nadar en dinero / forrado de dinero',
        exampleTr: 'Parece que está nadando en dinero.',
      },
      fr: {
        meaning: "Nager dans l'argent / rouler sur l'or",
        exampleTr: "On dirait qu'il roule sur l'or.",
      },
      it: {
        meaning: "Nuotare nell'oro / pieno di soldi",
        exampleTr: "Sembra che stia nuotando nell'oro.",
      },
      pt: {
        meaning: 'Nadar em dinheiro / rico demais',
        exampleTr: 'Parece que ele está nadando em dinheiro.',
      },
      de: {
        meaning: 'Im Geld schwimmen / steinreich',
        exampleTr: 'Es sieht so aus, als würde er im Geld schwimmen.',
      },
    },
  },
  {
    emoji: '🪡',
    phrase: 'Шити білими нитками',
    meaning: 'To be obvious / poorly disguised (a lie sewn with white thread)',
    exampleSrc: 'Його виправдання було шите білими нитками.',
    exampleTr: 'His excuse was painfully obvious / poorly made up.',
    translations: {
      es: {
        meaning: 'Ser demasiado obvio / una mentira mal disimulada',
        exampleTr: 'Su excusa era demasiado obvia.',
      },
      fr: {
        meaning: 'Cousue de fil blanc / trop évident',
        exampleTr: 'Son excuse était cousue de fil blanc.',
      },
      it: {
        meaning: 'Cucito con filo bianco / troppo ovvio',
        exampleTr: 'La sua scusa era cucita con filo bianco.',
      },
      pt: {
        meaning: 'Costurado com linha grossa / óbvio demais',
        exampleTr: 'A desculpa dele era costurada com linha grossa.',
      },
      de: {
        meaning: 'Mit weißen Fäden genäht / zu offensichtlich',
        exampleTr: 'Seine Entschuldigung war zu offensichtlich.',
      },
    },
  },
  {
    emoji: '🪂',
    phrase: 'Танцювати під чужу дудку',
    meaning: "To dance to someone else's tune",
    exampleSrc: 'Він втомився танцювати під чужу дудку і вирішив відкрити власну справу.',
    exampleTr:
      "He got tired of dancing to someone else's tune and decided to start his own business.",
    translations: {
      es: {
        meaning: 'Bailar al son que le tocan',
        exampleTr: 'Se cansó de bailar al son que le tocan y decidió abrir su propio negocio.',
      },
      fr: {
        meaning: 'Danser au son du violon des autres',
        exampleTr:
          "Il s'est lassé de danser au son des autres et a décidé de créer sa propre entreprise.",
      },
      it: {
        meaning: 'Ballare al suono degli altri / fare quello che vogliono gli altri',
        exampleTr:
          'Si stancò di ballare al suono degli altri e decise di aprire la propria attività.',
      },
      pt: {
        meaning: 'Dançar conforme a música dos outros',
        exampleTr:
          'Ele se cansou de dançar conforme a música dos outros e decidiu abrir seu próprio negócio.',
      },
      de: {
        meaning: 'Nach der Pfeife anderer tanzen',
        exampleTr:
          'Er wurde es müde, nach der Pfeife anderer zu tanzen, und gründete sein eigenes Unternehmen.',
      },
    },
  },
  {
    emoji: '🪨',
    phrase: "Ні риба ні м'ясо",
    meaning: 'Neither fish nor fowl / wishy-washy',
    exampleSrc: "Його відповідь була ні риба ні м'ясо — нічого конкретного.",
    exampleTr: 'His answer was neither fish nor fowl — nothing concrete.',
    translations: {
      es: {
        meaning: 'Ni chicha ni limoná / sin definición',
        exampleTr: 'Su respuesta no fue ni chicha ni limoná — nada concreto.',
      },
      fr: {
        meaning: 'Ni chair ni poisson / sans consistance',
        exampleTr: "Sa réponse n'était ni chair ni poisson — rien de concret.",
      },
      it: {
        meaning: 'Né carne né pesce / senza definizione',
        exampleTr: 'La sua risposta non era né carne né pesce — niente di concreto.',
      },
      pt: {
        meaning: 'Nem peixe nem carne / sem definição',
        exampleTr: 'Sua resposta não foi nem peixe nem carne — nada de concreto.',
      },
      de: {
        meaning: 'Weder Fisch noch Fleisch / unentschlossen',
        exampleTr: 'Seine Antwort war weder Fisch noch Fleisch — nichts Konkretes.',
      },
    },
  },
  {
    emoji: '🪕',
    phrase: 'Замилювати очі',
    meaning: "To pull the wool over someone's eyes",
    exampleSrc: 'Не намагайся замилювати мені очі — я знаю правду.',
    exampleTr: "Don't try to pull the wool over my eyes — I know the truth.",
    translations: {
      es: {
        meaning: 'Dar gato por liebre / engañar',
        exampleTr: 'No intentes darme gato por liebre — sé la verdad.',
      },
      fr: {
        meaning: 'Jeter de la poudre aux yeux / tromper',
        exampleTr: "N'essaie pas de me jeter de la poudre aux yeux — je connais la vérité.",
      },
      it: {
        meaning: 'Gettare fumo negli occhi / ingannare',
        exampleTr: 'Non cercare di gettarmi fumo negli occhi — conosco la verità.',
      },
      pt: {
        meaning: 'Enganar alguém / passar a perna',
        exampleTr: 'Não tente me enganar — eu sei a verdade.',
      },
      de: {
        meaning: 'Sand in die Augen streuen / täuschen',
        exampleTr: 'Versuche nicht, mir Sand in die Augen zu streuen — ich kenne die Wahrheit.',
      },
    },
  },
  {
    emoji: '🐝',
    phrase: 'Як бджола до меду',
    meaning: 'Drawn to something like a moth to a flame',
    exampleSrc: 'Туристи злітаються до цього міста, як бджоли до меду.',
    exampleTr: 'Tourists are drawn to this city like moths to a flame.',
    translations: {
      es: {
        meaning: 'Atraído como una mariposa a la luz',
        exampleTr: 'Los turistas acuden a esta ciudad como mariposas a la luz.',
      },
      fr: {
        meaning: 'Attirés comme des papillons vers la lumière',
        exampleTr:
          'Les touristes sont attirés par cette ville comme des papillons vers la lumière.',
      },
      it: {
        meaning: 'Attirato come una falena alla fiamma',
        exampleTr: 'I turisti sono attratti da questa città come falene alla fiamma.',
      },
      pt: {
        meaning: 'Atraído como mariposa à luz',
        exampleTr: 'Os turistas são atraídos para esta cidade como mariposas à luz.',
      },
      de: {
        meaning: 'Angezogen wie Motten vom Licht',
        exampleTr: 'Touristen strömen in diese Stadt wie Motten zum Licht.',
      },
    },
  },
  {
    emoji: '🪜',
    phrase: "Сім п'ятниць на тиждень",
    meaning: "To keep changing one's mind / be fickle",
    exampleSrc: "З ним важко працювати — у нього сім п'ятниць на тиждень.",
    exampleTr: "He's hard to work with — he keeps changing his mind all the time.",
    translations: {
      es: {
        meaning: 'Cambiar de opinión constantemente / ser voluble',
        exampleTr: 'Es difícil trabajar con él — cambia de opinión constantemente.',
      },
      fr: {
        meaning: "Changer d'avis tout le temps / être inconstant",
        exampleTr: "C'est difficile de travailler avec lui — il change d'avis tout le temps.",
      },
      it: {
        meaning: 'Cambiare idea continuamente / essere volubile',
        exampleTr: 'È difficile lavorare con lui — cambia idea continuamente.',
      },
      pt: {
        meaning: 'Mudar de opinião o tempo todo / ser inconstante',
        exampleTr: 'É difícil trabalhar com ele — ele muda de opinião o tempo todo.',
      },
      de: {
        meaning: 'Ständig seine Meinung ändern / unbeständig sein',
        exampleTr: 'Es ist schwer, mit ihm zu arbeiten — er ändert ständig seine Meinung.',
      },
    },
  },
  {
    emoji: '🪦',
    phrase: 'Зарубати собі на носі',
    meaning: "To make a mental note / get it into one's head once and for all",
    exampleSrc: 'Зарубай собі на носі: запізнюватись сюди не можна.',
    exampleTr: 'Get this into your head — being late here is not allowed.',
    translations: {
      es: {
        meaning: 'Grabárselo bien en la cabeza / no olvidar',
        exampleTr: 'Grábatelo bien: llegar tarde aquí no está permitido.',
      },
      fr: {
        meaning: 'Bien se le mettre dans la tête / ne pas oublier',
        exampleTr: "Mets-toi bien ça dans la tête : être en retard ici n'est pas permis.",
      },
      it: {
        meaning: 'Fissarselo bene in testa / non dimenticare',
        exampleTr: 'Fissatelo bene in testa: essere in ritardo qui non è permesso.',
      },
      pt: {
        meaning: 'Gravar bem na memória / não esquecer',
        exampleTr: 'Grava bem na memória: chegar atrasado aqui não é permitido.',
      },
      de: {
        meaning: 'Sich etwas gut merken / nie vergessen',
        exampleTr: 'Merk dir das gut: Zuspätkommen ist hier nicht erlaubt.',
      },
    },
  },
  {
    emoji: '🪤',
    phrase: 'Вийти сухим з води',
    meaning: 'To get away with it / come out unscathed',
    exampleSrc: 'Йому вдалося вийти сухим з води після того скандалу.',
    exampleTr: 'He managed to get away with it after that scandal.',
    translations: {
      es: {
        meaning: 'Salir indemne / quedar impune',
        exampleTr: 'Logró salir indemne después de ese escándalo.',
      },
      fr: {
        meaning: "S'en sortir sans une égratignure / s'en tirer",
        exampleTr: "Il a réussi à s'en tirer après ce scandale.",
      },
      it: {
        meaning: 'Uscirne indenne / cavarsela',
        exampleTr: 'È riuscito a uscirne indenne dopo quello scandalo.',
      },
      pt: {
        meaning: 'Sair ileso / escapar impune',
        exampleTr: 'Ele conseguiu sair ileso após aquele escândalo.',
      },
      de: {
        meaning: 'Ungeschoren davonkommen / ohne Folgen',
        exampleTr: 'Es gelang ihm, nach dem Skandal ungeschoren davonzukommen.',
      },
    },
  },
  {
    emoji: '🪙',
    phrase: 'Купувати кота в мішку',
    meaning: 'To buy a pig in a poke',
    exampleSrc: 'Купувати вживану машину онлайн — це наче купувати кота в мішку.',
    exampleTr: 'Buying a used car online is like buying a pig in a poke.',
    translations: {
      es: {
        meaning: 'Comprar un gato por liebre / comprar sin ver',
        exampleTr: 'Comprar un coche de segunda mano online es como comprar un gato por liebre.',
      },
      fr: {
        meaning: "Acheter chat en poche / sans voir ce qu'on achète",
        exampleTr: "Acheter une voiture d'occasion en ligne, c'est acheter chat en poche.",
      },
      it: {
        meaning: 'Comprare la gatta in sacco / acquisto alla cieca',
        exampleTr: "Comprare un'auto usata online è come comprare la gatta in sacco.",
      },
      pt: {
        meaning: 'Comprar gato por lebre / comprar sem ver',
        exampleTr: 'Comprar um carro usado online é como comprar gato por lebre.',
      },
      de: {
        meaning: 'Die Katze im Sack kaufen',
        exampleTr: 'Ein gebrauchtes Auto online kaufen ist wie die Katze im Sack kaufen.',
      },
    },
  },
  {
    emoji: '🪨',
    phrase: 'Як з гуски вода',
    meaning: "Like water off a duck's back",
    exampleSrc: 'Усі зауваження йому як з гуски вода.',
    exampleTr: "All the criticism is like water off a duck's back to him.",
    translations: {
      es: {
        meaning: 'Como agua al pato / le resbala todo',
        exampleTr: 'Todas las críticas le resbalan como agua al pato.',
      },
      fr: {
        meaning: "Comme l'eau sur les plumes d'un canard / indifférent",
        exampleTr: "Toutes les critiques glissent sur lui comme l'eau sur les plumes d'un canard.",
      },
      it: {
        meaning: "Come l'acqua sul dorso delle anatre / impermeabile",
        exampleTr: "Tutte le critiche scorrono su di lui come l'acqua sul dorso delle anatre.",
      },
      pt: {
        meaning: 'Como água no pato / não liga',
        exampleTr: 'Todas as críticas para ele são como água no pato.',
      },
      de: {
        meaning: 'Wie Wasser an einer Ente / nichts macht ihm etwas aus',
        exampleTr: 'Alle Kritik prallt an ihm ab wie Wasser an einer Ente.',
      },
    },
  },
  {
    emoji: '🪶',
    phrase: 'Грати першу скрипку',
    meaning: 'To play first fiddle / take the lead',
    exampleSrc: 'У цьому проєкті вона грає першу скрипку.',
    exampleTr: 'She plays first fiddle in this project.',
    translations: {
      es: {
        meaning: 'Llevar la voz cantante / tomar la delantera',
        exampleTr: 'En este proyecto, ella lleva la voz cantante.',
      },
      fr: {
        meaning: 'Jouer le premier rôle / mener la danse',
        exampleTr: "Dans ce projet, c'est elle qui mène la danse.",
      },
      it: {
        meaning: 'Fare la parte del leone / avere il ruolo principale',
        exampleTr: 'In questo progetto è lei che fa la parte del leone.',
      },
      pt: {
        meaning: 'Tocar o primeiro violino / liderar',
        exampleTr: 'Ela toca o primeiro violino neste projeto.',
      },
      de: {
        meaning: 'Erste Geige spielen / die Führung übernehmen',
        exampleTr: 'In diesem Projekt spielt sie die erste Geige.',
      },
    },
  },
  {
    emoji: '🪵',
    phrase: 'Заварити кашу',
    meaning: 'To stir up trouble / start something messy',
    exampleSrc: 'Це він заварив усю цю кашу своїм необдуманим коментарем.',
    exampleTr: "He's the one who stirred up all this trouble with his thoughtless comment.",
    translations: {
      es: {
        meaning: 'Armar un lío / meter la pata',
        exampleTr: 'Fue él quien armó todo este lío con su comentario imprudente.',
      },
      fr: {
        meaning: 'Créer des problèmes / mettre le feu aux poudres',
        exampleTr: "C'est lui qui a mis le feu aux poudres avec son commentaire imprudent.",
      },
      it: {
        meaning: 'Creare casino / mettere il cacio sui maccheroni',
        exampleTr: 'È stato lui a creare tutto questo casino con il suo commento sconsiderato.',
      },
      pt: {
        meaning: 'Criar confusão / meter o pé na jaca',
        exampleTr: 'Foi ele quem criou toda essa confusão com seu comentário impensado.',
      },
      de: {
        meaning: 'Ärger machen / einen Schlamassel anrichten',
        exampleTr: 'Er hat den ganzen Schlamassel mit seinem unüberlegten Kommentar angerichtet.',
      },
    },
  },
  {
    emoji: '🧶',
    phrase: 'Розводити теревені',
    meaning: 'To chitchat / shoot the breeze',
    exampleSrc: 'Замість працювати, вони весь день розводили теревені.',
    exampleTr: 'Instead of working, they spent the whole day shooting the breeze.',
    translations: {
      es: {
        meaning: 'Cotillear / charlar sin parar',
        exampleTr: 'En lugar de trabajar, estuvieron charlando sin parar todo el día.',
      },
      fr: {
        meaning: 'Bavarder / papoter',
        exampleTr: 'Au lieu de travailler, ils ont passé la journée à papoter.',
      },
      it: {
        meaning: 'Chiacchierare / spettegolare',
        exampleTr: 'Invece di lavorare, hanno chiacchierato tutto il giorno.',
      },
      pt: {
        meaning: 'Bater papo / ficar conversando à toa',
        exampleTr: 'Em vez de trabalhar, ficaram batendo papo o dia todo.',
      },
      de: {
        meaning: 'Plaudern / den ganzen Tag quatschen',
        exampleTr: 'Statt zu arbeiten, haben sie den ganzen Tag geplaudert.',
      },
    },
  },
  {
    emoji: '🪞',
    phrase: 'Збити з пантелику',
    meaning: 'To throw someone off / confuse completely',
    exampleSrc: 'Складне питання збило його з пантелику.',
    exampleTr: 'The tricky question threw him completely off.',
    translations: {
      es: {
        meaning: 'Desconcertar / confundir por completo',
        exampleTr: 'La pregunta difícil lo desconcertó por completo.',
      },
      fr: {
        meaning: 'Dérouter / déstabiliser complètement',
        exampleTr: "La question difficile l'a complètement déstabilisé.",
      },
      it: {
        meaning: 'Sconcertare / confondere completamente',
        exampleTr: 'La domanda difficile lo ha sconcertato completamente.',
      },
      pt: {
        meaning: 'Deixar confuso / perder o fio',
        exampleTr: 'A pergunta difícil o deixou completamente confuso.',
      },
      de: {
        meaning: 'Völlig verwirren / aus dem Konzept bringen',
        exampleTr: 'Die schwierige Frage hat ihn völlig aus dem Konzept gebracht.',
      },
    },
  },
  {
    emoji: '🦅',
    phrase: 'Ловити ґав',
    meaning: 'To daydream / be absent-minded',
    exampleSrc: 'Не лови ґав на уроці — слухай уважно.',
    exampleTr: 'Stop daydreaming in class — pay attention.',
    translations: {
      es: {
        meaning: 'Estar en las nubes / estar distraído',
        exampleTr: 'No estés en las nubes en clase — presta atención.',
      },
      fr: {
        meaning: 'Être dans la lune / rêvasser',
        exampleTr: "Arrête d'être dans la lune en classe — écoute attentivement.",
      },
      it: {
        meaning: 'Stare con la testa tra le nuvole / essere distratto',
        exampleTr: 'Non stare con la testa tra le nuvole in classe — stai attento.',
      },
      pt: {
        meaning: 'Estar nas nuvens / distraído',
        exampleTr: 'Não fique nas nuvens na aula — preste atenção.',
      },
      de: {
        meaning: 'Tagträumen / mit den Gedanken woanders sein',
        exampleTr: 'Hör auf zu träumen im Unterricht — pass auf.',
      },
    },
  },
  {
    emoji: '🔙',
    phrase: 'Дати задній хід',
    meaning: "To back out / reverse one's decision",
    exampleSrc: 'Він пообіцяв допомогти, але потім дав задній хід.',
    exampleTr: 'He promised to help but then backed out.',
    translations: {
      es: {
        meaning: 'Echarse atrás / dar marcha atrás',
        exampleTr: 'Prometió ayudar pero luego se echó atrás.',
      },
      fr: {
        meaning: 'Faire marche arrière / se rétracter',
        exampleTr: "Il a promis d'aider mais a ensuite fait marche arrière.",
      },
      it: {
        meaning: 'Fare marcia indietro / ritirarsi',
        exampleTr: 'Ha promesso di aiutare ma poi ha fatto marcia indietro.',
      },
      pt: {
        meaning: 'Dar marcha a ré / voltar atrás',
        exampleTr: 'Ele prometeu ajudar, mas depois deu marcha a ré.',
      },
      de: {
        meaning: 'Einen Rückzieher machen / zurückrudern',
        exampleTr: 'Er versprach zu helfen, machte aber dann einen Rückzieher.',
      },
    },
  },
  {
    emoji: '🍀',
    phrase: 'Ні пуху ні пера',
    meaning: 'Break a leg! / Good luck!',
    exampleSrc: 'Завтра в тебе іспит — ні пуху ні пера!',
    exampleTr: 'You have an exam tomorrow — break a leg!',
    translations: {
      es: {
        meaning: '¡Mucha suerte! / ¡Mucha mierda! (teatro)',
        exampleTr: 'Tienes examen mañana — ¡mucha suerte!',
      },
      fr: {
        meaning: 'Bonne chance! / Merde! (théâtre)',
        exampleTr: 'Tu as un examen demain — bonne chance!',
      },
      it: {
        meaning: 'In bocca al lupo! / Buona fortuna!',
        exampleTr: 'Hai un esame domani — in bocca al lupo!',
      },
      pt: {
        meaning: 'Boa sorte! / Quebre uma perna!',
        exampleTr: 'Você tem prova amanhã — boa sorte!',
      },
      de: {
        meaning: 'Viel Glück! / Hals- und Beinbruch!',
        exampleTr: 'Du hast morgen eine Prüfung — Hals- und Beinbruch!',
      },
    },
  },
  {
    emoji: '🤞',
    phrase: 'Тримати кулаки',
    meaning: "To keep one's fingers crossed",
    exampleSrc: 'Ми тримаємо за тебе кулаки — ти впораєшся!',
    exampleTr: "We're keeping our fingers crossed for you — you've got this!",
    translations: {
      es: {
        meaning: 'Cruzar los dedos / torcer por alguien',
        exampleTr: 'Te estamos cruzando los dedos — ¡tú puedes!',
      },
      fr: {
        meaning: "Croiser les doigts pour quelqu'un",
        exampleTr: 'On croise les doigts pour toi — tu vas y arriver!',
      },
      it: {
        meaning: 'Tenere le dita incrociate / fare il tifo',
        exampleTr: 'Teniamo le dita incrociate per te — ce la fai!',
      },
      pt: {
        meaning: 'Torcer por alguém / estar com os dedos cruzados',
        exampleTr: 'Estamos torcendo por você — você consegue!',
      },
      de: {
        meaning: 'Die Daumen drücken',
        exampleTr: 'Wir drücken dir die Daumen — du schaffst das!',
      },
    },
  },
  {
    emoji: '🍎',
    phrase: 'Яблуко від яблуні недалеко падає',
    meaning: "The apple doesn't fall far from the tree",
    exampleSrc: 'Він такий само впертий, як його батько — яблуко від яблуні недалеко падає.',
    exampleTr: "He's just as stubborn as his father — the apple doesn't fall far from the tree.",
    translations: {
      es: {
        meaning: 'De tal palo, tal astilla',
        exampleTr: 'Es tan terco como su padre — de tal palo, tal astilla.',
      },
      fr: {
        meaning: "Tel père, tel fils / la pomme ne tombe pas loin de l'arbre",
        exampleTr: 'Il est aussi têtu que son père — tel père, tel fils.',
      },
      it: {
        meaning: 'Figlio di sua madre/padre / tale padre tale figlio',
        exampleTr: 'È testardo come suo padre — tale padre, tale figlio.',
      },
      pt: {
        meaning: 'Filho de peixe, peixinho é',
        exampleTr: 'Ele é tão teimoso quanto o pai — filho de peixe, peixinho é.',
      },
      de: {
        meaning: 'Der Apfel fällt nicht weit vom Stamm',
        exampleTr: 'Er ist genauso stur wie sein Vater — der Apfel fällt nicht weit vom Stamm.',
      },
    },
  },
  {
    emoji: '🥞',
    phrase: 'Перший млинець завжди грудкою',
    meaning: 'The first attempt is never perfect',
    exampleSrc: 'Перша версія додатку була сирою — перший млинець завжди грудкою.',
    exampleTr: 'The first version of the app was rough — the first attempt is never perfect.',
    translations: {
      es: {
        meaning: 'El primer intento nunca es perfecto',
        exampleTr: 'La primera versión de la app fue tosca — el primer intento nunca es perfecto.',
      },
      fr: {
        meaning: "Le premier essai n'est jamais parfait / la première crêpe est toujours ratée",
        exampleTr:
          "La première version de l'app était brouillon — le premier essai n'est jamais parfait.",
      },
      it: {
        meaning: 'Il primo tentativo non è mai perfetto',
        exampleTr: "La prima versione dell'app era grezza — il primo tentativo non è mai perfetto.",
      },
      pt: {
        meaning: 'A primeira tentativa nunca sai perfeita',
        exampleTr: 'A primeira versão do app foi ruim — a primeira tentativa nunca sai perfeita.',
      },
      de: {
        meaning: 'Der erste Versuch klappt nie perfekt / der erste Pfannkuchen misslingt immer',
        exampleTr: 'Die erste Version der App war roh — der erste Versuch klappt nie perfekt.',
      },
    },
  },
  {
    emoji: '🐔',
    phrase: 'Не кажи гоп, поки не перестрибнеш',
    meaning: "Don't count your chickens before they hatch",
    exampleSrc: 'Не кажи гоп, поки не перестрибнеш — спочатку підпиши договір.',
    exampleTr: "Don't count your chickens — sign the contract first.",
    translations: {
      es: {
        meaning: 'No vendas la piel del oso antes de cazarlo',
        exampleTr: 'No vendas la piel del oso — primero firma el contrato.',
      },
      fr: {
        meaning: "Il ne faut pas vendre la peau de l'ours avant de l'avoir tué",
        exampleTr: "Ne vends pas la peau de l'ours — signe d'abord le contrat.",
      },
      it: {
        meaning: "Non vendere la pelle dell'orso prima di averlo ucciso",
        exampleTr: "Non vendere la pelle dell'orso — prima firma il contratto.",
      },
      pt: {
        meaning: 'Não venda a pele do urso antes de matá-lo',
        exampleTr: 'Não venda a pele do urso — assine o contrato primeiro.',
      },
      de: {
        meaning: 'Den Bären nicht vor dem Abend loben / erst die Arbeit, dann das Vergnügen',
        exampleTr: 'Gib den Bären nicht vor dem Abend — unterschreibe erst den Vertrag.',
      },
    },
  },
  {
    emoji: '🐦',
    phrase: 'Слово не горобець, вилетить — не впіймаєш',
    meaning: "Think before you speak — words can't be unsaid",
    exampleSrc: 'Перед тим як щось казати, подумай: слово не горобець, вилетить — не впіймаєш.',
    exampleTr: "Think before you speak — once said, words can't be taken back.",
    translations: {
      es: {
        meaning: 'Una palabra dicha no vuelve atrás',
        exampleTr: 'Piensa antes de hablar — una palabra dicha no vuelve atrás.',
      },
      fr: {
        meaning: "Les paroles s'envolent / réfléchis avant de parler",
        exampleTr: 'Réfléchis avant de parler — les paroles prononcées ne reviennent pas.',
      },
      it: {
        meaning: 'Parola detta, non torna indietro',
        exampleTr: 'Pensa prima di parlare — la parola detta non torna indietro.',
      },
      pt: {
        meaning: 'Palavra dita não volta atrás',
        exampleTr: 'Pense antes de falar — palavra dita não volta atrás.',
      },
      de: {
        meaning: 'Gesprochene Worte lassen sich nicht zurücknehmen',
        exampleTr: 'Denk bevor du sprichst — gesprochene Worte lassen sich nicht zurücknehmen.',
      },
    },
  },
  {
    emoji: '⛓️',
    phrase: 'Де тонко, там і рветься',
    meaning: 'A chain is only as strong as its weakest link',
    exampleSrc: 'Один слабкий гравець зруйнував команду — де тонко, там і рветься.',
    exampleTr: 'One weak player ruined the team — a chain is only as strong as its weakest link.',
    translations: {
      es: {
        meaning: 'La cadena se rompe por el eslabón más débil',
        exampleTr:
          'Un jugador débil arruinó al equipo — la cadena se rompe por el eslabón más débil.',
      },
      fr: {
        meaning: 'La chaîne casse au maillon le plus faible',
        exampleTr: "Un joueur faible a ruiné l'équipe — la chaîne casse au maillon le plus faible.",
      },
      it: {
        meaning: "La catena si spezza sempre all'anello più debole",
        exampleTr:
          "Un giocatore debole ha rovinato la squadra — la catena si spezza all'anello più debole.",
      },
      pt: {
        meaning: 'A corrente sempre arrebenta pelo elo mais fraco',
        exampleTr:
          'Um jogador fraco arruinou o time — a corrente sempre arrebenta pelo elo mais fraco.',
      },
      de: {
        meaning: 'Eine Kette ist nur so stark wie ihr schwächstes Glied',
        exampleTr:
          'Ein schwacher Spieler hat das Team ruiniert — eine Kette ist nur so stark wie ihr schwächstes Glied.',
      },
    },
  },
  {
    emoji: '🧵',
    phrase: 'З миру по нитці — голому сорочка',
    meaning: 'Every little helps / many a little makes a mickle',
    exampleSrc: 'Усі скинулись по трохи — з миру по нитці голому сорочка.',
    exampleTr: 'Everyone chipped in a little — every little helps.',
    translations: {
      es: {
        meaning: 'Cada granito de arena ayuda / muchos pocos hacen un mucho',
        exampleTr: 'Todos aportaron un poco — cada granito de arena ayuda.',
      },
      fr: {
        meaning: 'Les petits ruisseaux font les grandes rivières',
        exampleTr:
          'Tout le monde a mis un peu du sien — les petits ruisseaux font les grandes rivières.',
      },
      it: {
        meaning: 'Molti gocce fanno un oceano / ognuno contribuisce',
        exampleTr: "Tutti hanno contribuito un po' — tante gocce fanno un oceano.",
      },
      pt: {
        meaning: 'Cada um contribuindo um pouco, muito se consegue',
        exampleTr:
          'Todos contribuíram um pouco — cada um contribuindo um pouco, muito se consegue.',
      },
      de: {
        meaning: 'Viele Wenige machen ein Viel / jeder Beitrag zählt',
        exampleTr: 'Jeder hat ein bisschen beigesteuert — viele Wenige machen ein Viel.',
      },
    },
  },
  {
    emoji: '🗺️',
    phrase: 'Язик до Києва доведе',
    meaning: "Ask and you'll find your way anywhere",
    exampleSrc: 'Не бійся питати дорогу — язик до Києва доведе.',
    exampleTr: "Don't be afraid to ask for directions — asking gets you anywhere.",
    translations: {
      es: {
        meaning: 'Preguntando se llega a Roma',
        exampleTr: 'No tengas miedo de pedir indicaciones — preguntando se llega a Roma.',
      },
      fr: {
        meaning: 'En demandant on arrive à Paris / la langue mène partout',
        exampleTr: "N'aie pas peur de demander son chemin — en demandant on va partout.",
      },
      it: {
        meaning: 'Chiedendo si arriva a Roma',
        exampleTr: 'Non aver paura di chiedere la strada — chiedendo si arriva a Roma.',
      },
      pt: {
        meaning: 'Perguntando se chega a Roma',
        exampleTr: 'Não tenha medo de perguntar o caminho — perguntando se chega a Roma.',
      },
      de: {
        meaning: 'Wer fragt, kommt weit',
        exampleTr: 'Hab keine Angst, nach dem Weg zu fragen — wer fragt, kommt weit.',
      },
    },
  },
  {
    emoji: '🛋️',
    phrase: 'Бити байдики',
    meaning: 'To idle about / do nothing / laze around',
    exampleSrc: 'Він цілий день бив байдики замість того щоб шукати роботу.',
    exampleTr: 'He idled around all day instead of looking for a job.',
    translations: {
      es: {
        meaning: 'Holgazanear / no hacer nada',
        exampleTr: 'Se pasó el día holgazaneando en vez de buscar trabajo.',
      },
      fr: {
        meaning: 'Flemmarder / ne rien faire',
        exampleTr: 'Il a flemmardé toute la journée au lieu de chercher du travail.',
      },
      it: {
        meaning: 'Oziare / non fare niente',
        exampleTr: 'Ha oziato tutto il giorno invece di cercare lavoro.',
      },
      pt: {
        meaning: 'Não fazer nada / ficar de molho',
        exampleTr: 'Ele ficou de molho o dia inteiro em vez de procurar emprego.',
      },
      de: {
        meaning: 'Faulenzen / nichts tun',
        exampleTr: 'Er hat den ganzen Tag gefaulenzt, statt Arbeit zu suchen.',
      },
    },
  },
  {
    emoji: '💨',
    phrase: 'Пускати пил в очі',
    meaning: "To pull the wool over someone's eyes / put on a false show",
    exampleSrc: 'Він пускав пил в очі, щоб здатися багатшим ніж насправді.',
    exampleTr: "He was pulling the wool over everyone's eyes to seem wealthier than he was.",
    translations: {
      es: {
        meaning: 'Darse aires / aparentar más de lo que es',
        exampleTr: 'Se daba aires para parecer más rico de lo que era.',
      },
      fr: {
        meaning: 'Jeter de la poudre aux yeux / faire semblant',
        exampleTr: "Il jetait de la poudre aux yeux pour paraître plus riche qu'il n'était.",
      },
      it: {
        meaning: 'Fare bella figura / gettare fumo negli occhi',
        exampleTr: 'Gettava fumo negli occhi per sembrare più ricco di quel che era.',
      },
      pt: {
        meaning: 'Dar uma de esperto / enganar com aparências',
        exampleTr: 'Ele enganava a todos com aparências para parecer mais rico do que era.',
      },
      de: {
        meaning: 'Sand in die Augen streuen / sich besser darstellen',
        exampleTr: 'Er streute allen Sand in die Augen, um reicher zu wirken, als er war.',
      },
    },
  },
  {
    emoji: '😂',
    phrase: 'Сміятися крізь сльози',
    meaning: 'Laughing through tears / bittersweet',
    exampleSrc: 'Вона розповідала сумну історію і при цьому сміялася крізь сльози.',
    exampleTr: 'She told a sad story while laughing through her tears.',
    translations: {
      es: {
        meaning: 'Reírse entre lágrimas / agridulce',
        exampleTr: 'Contó una historia triste mientras se reía entre lágrimas.',
      },
      fr: {
        meaning: 'Rire à travers les larmes / ambivalent',
        exampleTr: 'Elle a raconté une histoire triste en riant à travers ses larmes.',
      },
      it: {
        meaning: 'Ridere tra le lacrime / agrodolce',
        exampleTr: 'Ha raccontato una storia triste ridendo tra le lacrime.',
      },
      pt: {
        meaning: 'Rir entre lágrimas / agridoce',
        exampleTr: 'Ela contou uma história triste enquanto ria entre lágrimas.',
      },
      de: {
        meaning: 'Durch Tränen lachen / bittersüß',
        exampleTr: 'Sie erzählte eine traurige Geschichte und lachte dabei durch Tränen.',
      },
    },
  },
  {
    emoji: '⛏️',
    phrase: 'Не рий яму іншому — сам у ній опинишся',
    meaning: "Don't dig a pit for others or you'll fall in yourself",
    exampleSrc: 'Він намагався підставити колегу, але не рий яму іншому.',
    exampleTr: "He tried to set up his colleague, but don't dig a pit for others.",
    translations: {
      es: {
        meaning: 'El que a otro pone una trampa, en ella cae',
        exampleTr:
          'Intentó tender una trampa a su colega, pero el que a otro pone una trampa, en ella cae.',
      },
      fr: {
        meaning: 'On ne creuse pas une fosse pour autrui sans y tomber soi-même',
        exampleTr:
          'Il a essayé de piéger son collègue, mais on ne creuse pas une fosse pour autrui sans y tomber.',
      },
      it: {
        meaning: 'Non scavare una fossa agli altri o ci cadrai tu',
        exampleTr: 'Ha cercato di incastrare il collega, ma non scavare una fossa agli altri.',
      },
      pt: {
        meaning: 'Quem cava uma cova para o outro cai nela',
        exampleTr:
          'Ele tentou armar uma cilada para o colega, mas quem cava uma cova para o outro cai nela.',
      },
      de: {
        meaning: 'Wer anderen eine Grube gräbt, fällt selbst hinein',
        exampleTr:
          'Er versuchte, seinen Kollegen zu hintergehen, aber wer anderen eine Grube gräbt, fällt selbst hinein.',
      },
    },
  },
  {
    emoji: '☀️',
    phrase: 'Все тайне стає явним',
    meaning: 'The truth always comes out',
    exampleSrc: 'Він думав, що ніхто не дізнається, але все тайне стає явним.',
    exampleTr: 'He thought no one would find out, but the truth always comes out.',
    translations: {
      es: {
        meaning: 'La verdad siempre sale a la luz',
        exampleTr: 'Pensaba que nadie lo sabría, pero la verdad siempre sale a la luz.',
      },
      fr: {
        meaning: 'La vérité finit toujours par éclater',
        exampleTr:
          'Il pensait que personne ne le découvrirait, mais la vérité finit toujours par éclater.',
      },
      it: {
        meaning: 'La verità viene sempre a galla',
        exampleTr: 'Pensava che nessuno lo avrebbe scoperto, ma la verità viene sempre a galla.',
      },
      pt: {
        meaning: 'A verdade sempre vem à tona',
        exampleTr: 'Ele achava que ninguém descobriria, mas a verdade sempre vem à tona.',
      },
      de: {
        meaning: 'Die Wahrheit kommt immer ans Licht',
        exampleTr:
          'Er dachte, niemand würde es herausfinden, aber die Wahrheit kommt immer ans Licht.',
      },
    },
  },
  {
    emoji: '🔍',
    phrase: 'Хто шукає, той знаходить',
    meaning: 'Seek and you shall find',
    exampleSrc: 'Не здавайся — хто шукає, той знаходить.',
    exampleTr: "Don't give up — seek and you shall find.",
    translations: {
      es: {
        meaning: 'El que busca, encuentra',
        exampleTr: 'No te rindas — el que busca, encuentra.',
      },
      fr: { meaning: 'Qui cherche, trouve', exampleTr: "N'abandonne pas — qui cherche, trouve." },
      it: { meaning: 'Chi cerca, trova', exampleTr: 'Non arrenderti — chi cerca, trova.' },
      pt: { meaning: 'Quem procura, acha', exampleTr: 'Não desista — quem procura, acha.' },
      de: { meaning: 'Wer sucht, der findet', exampleTr: 'Gib nicht auf — wer sucht, der findet.' },
    },
  },
  {
    emoji: '🐦',
    phrase: 'Краще синиця в жмені, ніж журавель у небі',
    meaning: 'A bird in the hand is worth two in the bush',
    exampleSrc: 'Прийми цю пропозицію — краще синиця в жмені, ніж журавель у небі.',
    exampleTr: 'Accept this offer — a bird in the hand is worth two in the bush.',
    translations: {
      es: {
        meaning: 'Más vale pájaro en mano que ciento volando',
        exampleTr: 'Acepta esta oferta — más vale pájaro en mano que ciento volando.',
      },
      fr: {
        meaning: "Un tiens vaut mieux que deux tu l'auras",
        exampleTr: "Accepte cette offre — un tiens vaut mieux que deux tu l'auras.",
      },
      it: {
        meaning: 'Meglio un uovo oggi che una gallina domani',
        exampleTr: 'Accetta questa offerta — meglio un uovo oggi che una gallina domani.',
      },
      pt: {
        meaning: 'Mais vale um pássaro na mão do que dois voando',
        exampleTr: 'Aceite esta oferta — mais vale um pássaro na mão do que dois voando.',
      },
      de: {
        meaning: 'Besser ein Spatz in der Hand als eine Taube auf dem Dach',
        exampleTr:
          'Nimm dieses Angebot an — besser ein Spatz in der Hand als eine Taube auf dem Dach.',
      },
    },
  },
  {
    emoji: '💤',
    phrase: 'Хоч кіл на голові теши',
    meaning: "As stubborn as a mule / completely set in one's ways",
    exampleSrc: 'Йому пояснювали годинами, але хоч кіл на голові теши.',
    exampleTr: "They explained it for hours, but he's as stubborn as a mule.",
    translations: {
      es: {
        meaning: 'Terco como una mula / cabeza dura',
        exampleTr: 'Le explicaron durante horas, pero es terco como una mula.',
      },
      fr: {
        meaning: 'Têtu comme une mule / complètement borné',
        exampleTr: 'On lui a expliqué pendant des heures, mais il est têtu comme une mule.',
      },
      it: {
        meaning: 'Testardo come un mulo / duro di testa',
        exampleTr: 'Gli hanno spiegato per ore, ma è testardo come un mulo.',
      },
      pt: {
        meaning: 'Teimoso como uma mula / cabeça dura',
        exampleTr: 'Explicaram por horas, mas ele é teimoso como uma mula.',
      },
      de: {
        meaning: 'Stur wie ein Maulesel / dickköpfig',
        exampleTr: 'Man hat es ihm stundenlang erklärt, aber er ist stur wie ein Maulesel.',
      },
    },
  },
  {
    emoji: '🐀',
    phrase: 'Тікати як щур з корабля',
    meaning: 'Like rats fleeing a sinking ship',
    exampleSrc: 'Щойно компанія почала падати, керівники почали тікати як щури з корабля.',
    exampleTr:
      'As soon as the company started failing, the managers began fleeing like rats from a sinking ship.',
    translations: {
      es: {
        meaning: 'Como ratas que abandonan el barco',
        exampleTr:
          'En cuanto la empresa empezó a caer, los directivos huyeron como ratas del barco.',
      },
      fr: {
        meaning: 'Comme des rats qui quittent le navire',
        exampleTr:
          "Dès que l'entreprise a commencé à couler, les dirigeants ont fui comme des rats.",
      },
      it: {
        meaning: 'Come topi che abbandonano la nave',
        exampleTr: "Appena l'azienda ha iniziato a crollare, i dirigenti sono fuggiti come topi.",
      },
      pt: {
        meaning: 'Como ratos abandonando o navio',
        exampleTr: 'Assim que a empresa começou a cair, os diretores fugiram como ratos.',
      },
      de: {
        meaning: 'Wie Ratten, die das sinkende Schiff verlassen',
        exampleTr: 'Sobald die Firma zu sinken begann, flohen die Manager wie die Ratten.',
      },
    },
  },
  {
    emoji: '🧂',
    phrase: 'Не вистачає клепки',
    meaning: "Not have all one's marbles / a screw loose",
    exampleSrc: 'Купити це за такою ціною? У нього не вистачає клепки.',
    exampleTr: "Buy that at that price? He's got a screw loose.",
    translations: {
      es: {
        meaning: 'Le falta un tornillo',
        exampleTr: '¿Comprar eso a ese precio? Le falta un tornillo.',
      },
      fr: {
        meaning: 'Il lui manque une case',
        exampleTr: 'Acheter ça à ce prix-là ? Il lui manque une case.',
      },
      it: {
        meaning: 'Gli manca una rotella',
        exampleTr: 'Comprare quello a quel prezzo? Gli manca una rotella.',
      },
      pt: {
        meaning: 'Falta um parafuso',
        exampleTr: 'Comprar isso a esse preço? Falta um parafuso nele.',
      },
      de: {
        meaning: 'Er hat nicht mehr alle Tassen im Schrank',
        exampleTr: 'Das zu diesem Preis kaufen? Er hat nicht mehr alle Tassen im Schrank.',
      },
    },
  },
  {
    emoji: '🐗',
    phrase: 'Робити з мухи слона',
    meaning: 'Make a mountain out of a molehill',
    exampleSrc: 'Це дрібниця, не роби з мухи слона.',
    exampleTr: "It's a small thing, don't make a mountain out of a molehill.",
    translations: {
      es: {
        meaning: 'Hacer una montaña de un grano de arena',
        exampleTr: 'Es algo pequeño, no hagas una montaña de un grano de arena.',
      },
      fr: {
        meaning: "Faire une montagne d'une taupinière",
        exampleTr: "C'est un détail, n'en fais pas une montagne.",
      },
      it: {
        meaning: 'Fare di una mosca un elefante',
        exampleTr: 'È una piccola cosa, non fare di una mosca un elefante.',
      },
      pt: {
        meaning: "Fazer tempestade em copo d'água",
        exampleTr: "É uma coisa pequena, não faça tempestade em copo d'água.",
      },
      de: {
        meaning: 'Aus einer Mücke einen Elefanten machen',
        exampleTr: 'Das ist eine Kleinigkeit, mach nicht aus einer Mücke einen Elefanten.',
      },
    },
  },
  {
    emoji: '🪢',
    phrase: "Зав'язати вузлик на пам'ять",
    meaning: "Tie a knot in one's handkerchief (as a memory aid)",
    exampleSrc: "Зав'яжи вузлик на пам'ять, щоб не забути про зустріч.",
    exampleTr: "Tie a knot to remember, so you don't forget about the meeting.",
    translations: {
      es: {
        meaning: 'Hacerse un nudo en el pañuelo',
        exampleTr: 'Hazte un nudo en el pañuelo para no olvidar la reunión.',
      },
      fr: {
        meaning: 'Faire un nœud à son mouchoir',
        exampleTr: 'Fais un nœud à ton mouchoir pour ne pas oublier le rendez-vous.',
      },
      it: {
        meaning: 'Farsi un nodo al fazzoletto',
        exampleTr: "Fatti un nodo al fazzoletto per non dimenticare l'appuntamento.",
      },
      pt: {
        meaning: 'Dar um nó no lenço',
        exampleTr: 'Dê um nó no lenço para não esquecer a reunião.',
      },
      de: {
        meaning: 'Sich einen Knoten ins Taschentuch machen',
        exampleTr: 'Mach dir einen Knoten ins Taschentuch, damit du das Treffen nicht vergisst.',
      },
    },
  },
  {
    emoji: '🪶',
    phrase: 'Легкий на підйом',
    meaning: 'Always ready to go / up for anything',
    exampleSrc: 'Він легкий на підйом — завжди готовий до пригод.',
    exampleTr: "He's always up for anything — ready for adventure.",
    translations: {
      es: {
        meaning: 'Siempre listo para todo',
        exampleTr: 'Siempre está listo para todo — preparado para la aventura.',
      },
      fr: {
        meaning: 'Toujours partant',
        exampleTr: "Il est toujours partant — prêt pour l'aventure.",
      },
      it: {
        meaning: 'Sempre pronto a tutto',
        exampleTr: "È sempre pronto a tutto — pronto per l'avventura.",
      },
      pt: {
        meaning: 'Sempre disposto a tudo',
        exampleTr: 'Ele está sempre disposto a tudo — pronto para a aventura.',
      },
      de: {
        meaning: 'Immer zu allem bereit',
        exampleTr: 'Er ist immer zu allem bereit — bereit für Abenteuer.',
      },
    },
  },
  {
    emoji: '🪟',
    phrase: 'Душа навстіж',
    meaning: "Wear one's heart on one's sleeve",
    exampleSrc: 'Вона людина з душею навстіж, завжди щира.',
    exampleTr: 'She wears her heart on her sleeve, always sincere.',
    translations: {
      es: {
        meaning: 'Llevar el corazón en la mano',
        exampleTr: 'Ella es de las que llevan el corazón en la mano, siempre sincera.',
      },
      fr: {
        meaning: 'Avoir le cœur sur la main',
        exampleTr: 'Elle a le cœur sur la main, toujours sincère.',
      },
      it: {
        meaning: 'Avere il cuore in mano',
        exampleTr: 'Lei ha il cuore in mano, sempre sincera.',
      },
      pt: {
        meaning: 'Ter o coração nas mãos',
        exampleTr: 'Ela tem o coração nas mãos, sempre sincera.',
      },
      de: {
        meaning: 'Das Herz auf der Zunge tragen',
        exampleTr: 'Sie trägt ihr Herz auf der Zunge, immer aufrichtig.',
      },
    },
  },
  {
    emoji: '🪵',
    phrase: "Сім п'ятниць на тижні",
    meaning: "Change one's mind every five minutes",
    exampleSrc: "З ним важко домовитись — у нього сім п'ятниць на тижні.",
    exampleTr: "It's hard to make plans with him — he changes his mind every five minutes.",
    translations: {
      es: {
        meaning: 'Cambiar de opinión cada cinco minutos',
        exampleTr: 'Es difícil hacer planes con él — cambia de opinión cada cinco minutos.',
      },
      fr: {
        meaning: "Changer d'avis comme de chemise",
        exampleTr:
          "C'est difficile de faire des plans avec lui — il change d'avis comme de chemise.",
      },
      it: {
        meaning: 'Cambiare idea ogni cinque minuti',
        exampleTr: 'È difficile fare piani con lui — cambia idea ogni cinque minuti.',
      },
      pt: {
        meaning: 'Mudar de ideia a cada cinco minutos',
        exampleTr: 'É difícil fazer planos com ele — ele muda de ideia a cada cinco minutos.',
      },
      de: {
        meaning: 'Seine Meinung wie sein Hemd wechseln',
        exampleTr: 'Mit ihm ist schwer zu planen — er wechselt seine Meinung wie sein Hemd.',
      },
    },
  },
  {
    emoji: '🪴',
    phrase: 'Як на голках',
    meaning: 'On pins and needles',
    exampleSrc: 'Перед результатами іспиту вона сиділа як на голках.',
    exampleTr: 'Before the exam results, she was sitting on pins and needles.',
    translations: {
      es: {
        meaning: 'Estar en ascuas',
        exampleTr: 'Antes de los resultados del examen, estaba en ascuas.',
      },
      fr: {
        meaning: 'Être sur des charbons ardents',
        exampleTr: "Avant les résultats de l'examen, elle était sur des charbons ardents.",
      },
      it: {
        meaning: 'Stare sulle spine',
        exampleTr: "Prima dei risultati dell'esame, era sulle spine.",
      },
      pt: {
        meaning: 'Estar em brasa',
        exampleTr: 'Antes dos resultados do exame, ela estava em brasa.',
      },
      de: {
        meaning: 'Wie auf Nadeln sitzen',
        exampleTr: 'Vor den Prüfungsergebnissen saß sie wie auf Nadeln.',
      },
    },
  },
  {
    emoji: '🪺',
    phrase: 'Закопати сокиру війни',
    meaning: 'Bury the hatchet',
    exampleSrc: 'Після багатьох років сварки вони нарешті закопали сокиру війни.',
    exampleTr: 'After years of feuding, they finally buried the hatchet.',
    translations: {
      es: {
        meaning: 'Enterrar el hacha de guerra',
        exampleTr: 'Tras años de pelea, finalmente enterraron el hacha de guerra.',
      },
      fr: {
        meaning: 'Enterrer la hache de guerre',
        exampleTr: 'Après des années de dispute, ils ont finalement enterré la hache de guerre.',
      },
      it: {
        meaning: "Seppellire l'ascia di guerra",
        exampleTr: "Dopo anni di litigi, hanno finalmente seppellito l'ascia di guerra.",
      },
      pt: {
        meaning: 'Enterrar o machado de guerra',
        exampleTr: 'Após anos de briga, eles finalmente enterraram o machado de guerra.',
      },
      de: {
        meaning: 'Das Kriegsbeil begraben',
        exampleTr: 'Nach Jahren des Streits haben sie endlich das Kriegsbeil begraben.',
      },
    },
  },
  {
    emoji: '🐦‍⬛',
    phrase: 'Підрізати крила',
    meaning: "Clip someone's wings",
    exampleSrc: 'Постійна критика підрізала їй крила.',
    exampleTr: 'Constant criticism clipped her wings.',
    translations: {
      es: {
        meaning: 'Cortar las alas',
        exampleTr: 'Las críticas constantes le cortaron las alas.',
      },
      fr: {
        meaning: 'Couper les ailes',
        exampleTr: 'Les critiques constantes lui ont coupé les ailes.',
      },
      it: { meaning: 'Tarpare le ali', exampleTr: 'Le critiche costanti le hanno tarpato le ali.' },
      pt: { meaning: 'Cortar as asas', exampleTr: 'As críticas constantes cortaram as asas dela.' },
      de: {
        meaning: 'Jemandem die Flügel stutzen',
        exampleTr: 'Ständige Kritik stutzte ihr die Flügel.',
      },
    },
  },
  {
    emoji: '🪻',
    phrase: 'Виносити сміття з хати',
    meaning: "Air one's dirty laundry in public",
    exampleSrc: 'Не варто виносити сміття з хати — розберіться вдома.',
    exampleTr: "You shouldn't air your dirty laundry — sort it out at home.",
    translations: {
      es: {
        meaning: 'Sacar los trapos sucios',
        exampleTr: 'No deberías sacar los trapos sucios — resuélvanlo en casa.',
      },
      fr: {
        meaning: 'Laver son linge sale en public',
        exampleTr: 'Il ne faut pas laver son linge sale en public — réglez ça à la maison.',
      },
      it: {
        meaning: 'Lavare i panni sporchi in pubblico',
        exampleTr: 'Non dovresti lavare i panni sporchi in pubblico — risolvetelo a casa.',
      },
      pt: {
        meaning: 'Lavar roupa suja em público',
        exampleTr: 'Você não deveria lavar roupa suja em público — resolvam em casa.',
      },
      de: {
        meaning: 'Schmutzige Wäsche in der Öffentlichkeit waschen',
        exampleTr:
          'Man sollte seine schmutzige Wäsche nicht öffentlich waschen — klärt das zu Hause.',
      },
    },
  },
  {
    emoji: '🌪️',
    phrase: 'Носитися як курка з яйцем',
    meaning: 'Make a great fuss over something trivial',
    exampleSrc: 'Вона носиться зі своєю ідеєю як курка з яйцем.',
    exampleTr: "She's making a great fuss over her idea, treating it like something extraordinary.",
    translations: {
      es: {
        meaning: 'Hacer un mundo de algo',
        exampleTr: 'Ella hace un mundo de su idea, como si fuera extraordinaria.',
      },
      fr: {
        meaning: 'En faire tout un fromage',
        exampleTr: 'Elle en fait tout un fromage avec son idée.',
      },
      it: {
        meaning: 'Farne un caso di stato',
        exampleTr: 'Lei ne fa un caso di stato con la sua idea.',
      },
      pt: {
        meaning: 'Fazer um bicho de sete cabeças',
        exampleTr: 'Ela faz um bicho de sete cabeças com a ideia dela.',
      },
      de: {
        meaning: 'Aus etwas eine Staatsaffäre machen',
        exampleTr: 'Sie macht aus ihrer Idee eine Staatsaffäre.',
      },
    },
  },
  {
    emoji: '🪽',
    phrase: 'Як грім серед ясного неба',
    meaning: 'Like a bolt from the blue',
    exampleSrc: 'Новина про звільнення прийшла як грім серед ясного неба.',
    exampleTr: 'The news of the layoff came like a bolt from the blue.',
    translations: {
      es: {
        meaning: 'Como un rayo en cielo despejado',
        exampleTr: 'La noticia del despido llegó como un rayo en cielo despejado.',
      },
      fr: {
        meaning: 'Comme un coup de tonnerre dans un ciel bleu',
        exampleTr:
          'La nouvelle du licenciement est arrivée comme un coup de tonnerre dans un ciel bleu.',
      },
      it: {
        meaning: 'Come un fulmine a ciel sereno',
        exampleTr: 'La notizia del licenziamento è arrivata come un fulmine a ciel sereno.',
      },
      pt: {
        meaning: 'Como um raio em céu azul',
        exampleTr: 'A notícia da demissão chegou como um raio em céu azul.',
      },
      de: {
        meaning: 'Wie ein Blitz aus heiterem Himmel',
        exampleTr: 'Die Nachricht von der Kündigung kam wie ein Blitz aus heiterem Himmel.',
      },
    },
  },
  {
    emoji: '🪾',
    phrase: "Накивати п'ятами",
    meaning: "Take to one's heels",
    exampleSrc: "Побачивши поліцію, злодій накивав п'ятами.",
    exampleTr: 'Seeing the police, the thief took to his heels.',
    translations: {
      es: {
        meaning: 'Poner pies en polvorosa',
        exampleTr: 'Al ver a la policía, el ladrón puso pies en polvorosa.',
      },
      fr: {
        meaning: 'Prendre ses jambes à son cou',
        exampleTr: 'En voyant la police, le voleur a pris ses jambes à son cou.',
      },
      it: {
        meaning: 'Darsela a gambe',
        exampleTr: "Vedendo la polizia, il ladro se l'è data a gambe.",
      },
      pt: {
        meaning: 'Sair correndo a sete pés',
        exampleTr: 'Ao ver a polícia, o ladrão saiu correndo a sete pés.',
      },
      de: {
        meaning: 'Die Beine in die Hand nehmen',
        exampleTr: 'Als er die Polizei sah, nahm der Dieb die Beine in die Hand.',
      },
    },
  },
  {
    emoji: '🫧',
    phrase: 'Як риба у воді',
    meaning: 'Like a fish in water',
    exampleSrc: 'На новій роботі вона почувається як риба у воді.',
    exampleTr: 'At her new job, she feels like a fish in water.',
    translations: {
      es: {
        meaning: 'Como pez en el agua',
        exampleTr: 'En su nuevo trabajo, se siente como pez en el agua.',
      },
      fr: {
        meaning: "Comme un poisson dans l'eau",
        exampleTr: "Dans son nouveau travail, elle se sent comme un poisson dans l'eau.",
      },
      it: {
        meaning: "Come un pesce nell'acqua",
        exampleTr: "Nel suo nuovo lavoro, si sente come un pesce nell'acqua.",
      },
      pt: {
        meaning: 'Como peixe na água',
        exampleTr: 'No novo emprego, ela se sente como peixe na água.',
      },
      de: {
        meaning: 'Wie ein Fisch im Wasser',
        exampleTr: 'In ihrem neuen Job fühlt sie sich wie ein Fisch im Wasser.',
      },
    },
  },
  {
    emoji: '🫥',
    phrase: 'Шукати голку в стозі сіна',
    meaning: 'Look for a needle in a haystack',
    exampleSrc: 'Знайти його номер без прізвища — це як шукати голку в стозі сіна.',
    exampleTr: 'Finding his number without a surname is like looking for a needle in a haystack.',
    translations: {
      es: {
        meaning: 'Buscar una aguja en un pajar',
        exampleTr: 'Encontrar su número sin apellido es como buscar una aguja en un pajar.',
      },
      fr: {
        meaning: 'Chercher une aiguille dans une botte de foin',
        exampleTr:
          "Trouver son numéro sans nom de famille, c'est chercher une aiguille dans une botte de foin.",
      },
      it: {
        meaning: 'Cercare un ago in un pagliaio',
        exampleTr: 'Trovare il suo numero senza cognome è come cercare un ago in un pagliaio.',
      },
      pt: {
        meaning: 'Procurar uma agulha no palheiro',
        exampleTr: 'Encontrar o número dele sem sobrenome é como procurar uma agulha no palheiro.',
      },
      de: {
        meaning: 'Eine Nadel im Heuhaufen suchen',
        exampleTr:
          'Seine Nummer ohne Nachnamen zu finden, ist wie eine Nadel im Heuhaufen zu suchen.',
      },
    },
  },
  {
    emoji: '🫨',
    phrase: 'Сидіти склавши руки',
    meaning: "Sit on one's hands / do nothing",
    exampleSrc: 'Не можна сидіти склавши руки, коли є проблема.',
    exampleTr: "You can't sit on your hands when there's a problem.",
    translations: {
      es: {
        meaning: 'Quedarse de brazos cruzados',
        exampleTr: 'No puedes quedarte de brazos cruzados cuando hay un problema.',
      },
      fr: {
        meaning: 'Rester les bras croisés',
        exampleTr: 'On ne peut pas rester les bras croisés quand il y a un problème.',
      },
      it: {
        meaning: 'Stare con le mani in mano',
        exampleTr: "Non si può stare con le mani in mano quando c'è un problema.",
      },
      pt: {
        meaning: 'Ficar de braços cruzados',
        exampleTr: 'Não se pode ficar de braços cruzados quando há um problema.',
      },
      de: {
        meaning: 'Die Hände in den Schoß legen',
        exampleTr: 'Man kann nicht die Hände in den Schoß legen, wenn es ein Problem gibt.',
      },
    },
  },
  {
    emoji: '🫩',
    phrase: 'Не лізти за словом до кишені',
    meaning: 'Never be at a loss for words',
    exampleSrc: 'Вона дотепна, ніколи не лізе за словом до кишені.',
    exampleTr: "She's witty, never at a loss for words.",
    translations: {
      es: {
        meaning: 'No tener pelos en la lengua',
        exampleTr: 'Es ingeniosa, nunca tiene pelos en la lengua.',
      },
      fr: {
        meaning: 'Ne pas avoir la langue dans sa poche',
        exampleTr: "Elle est spirituelle, elle n'a jamais la langue dans sa poche.",
      },
      it: {
        meaning: 'Non avere peli sulla lingua',
        exampleTr: 'È spiritosa, non ha mai peli sulla lingua.',
      },
      pt: {
        meaning: 'Não ter papas na língua',
        exampleTr: 'Ela é espirituosa, nunca tem papas na língua.',
      },
      de: {
        meaning: 'Nicht auf den Mund gefallen sein',
        exampleTr: 'Sie ist witzig, sie ist nie auf den Mund gefallen.',
      },
    },
  },
  {
    emoji: '🫪',
    phrase: 'Грати з вогнем',
    meaning: 'Play with fire',
    exampleSrc: 'Критикувати начальника публічно — це грати з вогнем.',
    exampleTr: 'Criticizing the boss publicly is playing with fire.',
    translations: {
      es: {
        meaning: 'Jugar con fuego',
        exampleTr: 'Criticar al jefe en público es jugar con fuego.',
      },
      fr: {
        meaning: 'Jouer avec le feu',
        exampleTr: "Critiquer le patron en public, c'est jouer avec le feu.",
      },
      it: {
        meaning: 'Giocare con il fuoco',
        exampleTr: 'Criticare il capo in pubblico è giocare con il fuoco.',
      },
      pt: {
        meaning: 'Brincar com fogo',
        exampleTr: 'Criticar o chefe em público é brincar com fogo.',
      },
      de: {
        meaning: 'Mit dem Feuer spielen',
        exampleTr: 'Den Chef öffentlich zu kritisieren heißt, mit dem Feuer zu spielen.',
      },
    },
  },
  {
    emoji: '🫫',
    phrase: 'Випустити пару',
    meaning: 'Blow off steam',
    exampleSrc: 'Після важкого тижня треба просто випустити пару.',
    exampleTr: 'After a hard week you just need to blow off steam.',
    translations: {
      es: {
        meaning: 'Desahogarse / soltar vapor',
        exampleTr: 'Después de una semana dura solo necesitas desahogarte.',
      },
      fr: {
        meaning: 'Se défouler',
        exampleTr: 'Après une semaine difficile, il faut juste se défouler.',
      },
      it: { meaning: 'Sfogarsi', exampleTr: 'Dopo una settimana difficile bisogna solo sfogarsi.' },
      pt: {
        meaning: 'Aliviar a tensão',
        exampleTr: 'Depois de uma semana difícil, você só precisa aliviar a tensão.',
      },
      de: {
        meaning: 'Dampf ablassen',
        exampleTr: 'Nach einer harten Woche muss man einfach Dampf ablassen.',
      },
    },
  },
  {
    emoji: '🌰',
    phrase: 'Загребти жар чужими руками',
    meaning: 'Have someone else do the dirty work',
    exampleSrc: 'Він любить загрібати жар чужими руками, а собі лишати лаври.',
    exampleTr: 'He likes to have others do the dirty work while he takes the credit.',
    translations: {
      es: {
        meaning: 'Sacar las castañas del fuego con la mano del gato',
        exampleTr:
          'Le gusta sacar las castañas del fuego con la mano de otros, y quedarse con el mérito.',
      },
      fr: {
        meaning: 'Tirer les marrons du feu',
        exampleTr:
          'Il aime tirer les marrons du feu avec les mains des autres, et garder les lauriers.',
      },
      it: {
        meaning: 'Togliere le castagne dal fuoco con le zampe del gatto',
        exampleTr:
          'Gli piace togliere le castagne dal fuoco con le mani altrui, tenendosi i meriti.',
      },
      pt: {
        meaning: 'Tirar a castanha do fogo com a mão do gato',
        exampleTr:
          'Ele gosta de tirar a castanha do fogo com as mãos dos outros, ficando com os louros.',
      },
      de: {
        meaning: 'Die Kastanien aus dem Feuer holen lassen',
        exampleTr:
          'Er lässt gerne andere die Kastanien aus dem Feuer holen und streicht selbst den Ruhm ein.',
      },
    },
  },
];

// ── Spanish idioms → Ukrainian + English meaning ───────────────
export const SPANISH_IDIOMS: Idiom[] = [
  {
    emoji: '🌥️',
    phrase: 'No hay mal que por bien no venga',
    meaning: 'Немає лиха без добра',
    meaningEn: 'Every cloud has a silver lining',
    exampleSrc:
      'Perdí el vuelo, pero no hay mal que por bien no venga — conocí a mi mejor amigo en el aeropuerto.',
    exampleTr:
      'Я пропустив рейс, але немає лиха без добра — я познайомився зі своїм найкращим другом в аеропорту.',
  },
  {
    emoji: '🐴',
    phrase: 'A caballo regalado no le mires el diente',
    meaning: 'Дарованому коню в зуби не дивляться',
    meaningEn: "Don't look a gift horse in the mouth",
    exampleSrc: 'Te regalaron un coche viejo — a caballo regalado no le mires el diente.',
    exampleTr: 'Тобі подарували стару машину — дарованому коню в зуби не дивляться.',
  },
  {
    emoji: '🦐',
    phrase: 'Camarón que se duerme, se lo lleva la corriente',
    meaning: 'Хто не встигає — той програє',
    meaningEn: 'You snooze, you lose',
    exampleSrc: 'No te distraigas: camarón que se duerme, se lo lleva la corriente.',
    exampleTr: 'Не відволікайся: хто засинає — той програє.',
  },
  {
    emoji: '🦜',
    phrase: 'Más vale pájaro en mano que ciento volando',
    meaning: 'Краще синиця в руці, ніж журавель у небі',
    meaningEn: 'A bird in the hand is worth two in the bush',
    exampleSrc: 'Acepta la oferta que tienes — más vale pájaro en mano que ciento volando.',
    exampleTr: 'Прийми наявну пропозицію — краще синиця в руці, ніж журавель у небі.',
  },
  {
    emoji: '🤐',
    phrase: 'En boca cerrada no entran moscas',
    meaning: 'Слово — срібло, мовчання — золото',
    meaningEn: 'Silence is golden',
    exampleSrc: 'Antes de hablar, piénsalo dos veces: en boca cerrada no entran moscas.',
    exampleTr: 'Перш ніж говорити, подумай двічі: мовчання — золото.',
  },
  {
    emoji: '🕐',
    phrase: 'Más vale tarde que nunca',
    meaning: 'Краще пізно, ніж ніколи',
    meaningEn: 'Better late than never',
    exampleSrc: 'Llegó una hora tarde, pero más vale tarde que nunca.',
    exampleTr: 'Він запізнився на годину, але краще пізно, ніж ніколи.',
  },
  {
    emoji: '🌫️',
    phrase: 'Donde hay humo, hay fuego',
    meaning: 'Немає диму без вогню',
    meaningEn: "Where there's smoke, there's fire",
    exampleSrc: 'Se rumora que van a cerrar la empresa — donde hay humo, hay fuego.',
    exampleTr: 'Ходять чутки, що компанія закриється — немає диму без вогню.',
  },
  {
    emoji: '👁️',
    phrase: 'Ojos que no ven, corazón que no siente',
    meaning: 'З очей геть — з серця геть',
    meaningEn: 'Out of sight, out of mind',
    exampleSrc:
      'Desde que se fue al extranjero apenas lo recuerdo — ojos que no ven, corazón que no siente.',
    exampleTr: 'Відколи він виїхав за кордон, я майже не згадую його — з очей геть, з серця геть.',
  },
  {
    emoji: '🌅',
    phrase: 'A quien madruga, Dios le ayuda',
    meaning: 'Хто рано встає, тому Бог дає',
    meaningEn: 'The early bird catches the worm',
    exampleSrc: 'Siempre llega el primero a la oficina: a quien madruga, Dios le ayuda.',
    exampleTr: 'Він завжди приходить до офісу першим: хто рано встає, тому Бог дає.',
  },
  {
    emoji: '✨',
    phrase: 'No todo lo que brilla es oro',
    meaning: 'Не все те золото, що блищить',
    meaningEn: 'All that glitters is not gold',
    exampleSrc: 'Ese trabajo parece perfecto, pero no todo lo que brilla es oro.',
    exampleTr: 'Та робота здається ідеальною, але не все те золото, що блищить.',
  },
  {
    emoji: '💊',
    phrase: 'Más vale prevenir que curar',
    meaning: 'Краще запобігти, ніж лікувати',
    meaningEn: 'Prevention is better than cure',
    exampleSrc: 'Lleva paraguas aunque no llueva: más vale prevenir que curar.',
    exampleTr: 'Візьми парасольку, навіть якщо не дощить: краще запобігти, ніж лікувати.',
  },
  {
    emoji: '🐕',
    phrase: 'Perro que ladra no muerde',
    meaning: 'Собака, що гавкає, не кусає',
    meaningEn: 'His bark is worse than his bite',
    exampleSrc: 'No le tengas miedo, perro que ladra no muerde.',
    exampleTr: 'Не бійся його — собака, що гавкає, не кусає.',
  },
  {
    emoji: '👥',
    phrase: 'Dime con quién andas y te diré quién eres',
    meaning: 'Скажи мені, хто твій друг, і я скажу, хто ти',
    meaningEn: 'A man is known by the company he keeps',
    exampleSrc: 'Cuida tus amistades: dime con quién andas y te diré quién eres.',
    exampleTr: 'Бережи своє коло спілкування: скажи мені, хто твій друг, і я скажу, хто ти.',
  },
  {
    emoji: '📅',
    phrase: 'No dejes para mañana lo que puedes hacer hoy',
    meaning: 'Не відкладай на завтра те, що можеш зробити сьогодні',
    meaningEn: "Don't put off until tomorrow what you can do today",
    exampleSrc: 'Termina el informe ahora: no dejes para mañana lo que puedes hacer hoy.',
    exampleTr: 'Закінч звіт зараз: не відкладай на завтра те, що можеш зробити сьогодні.',
  },
  {
    emoji: '⏰',
    phrase: 'El tiempo es oro',
    meaning: 'Час — це гроші',
    meaningEn: 'Time is money',
    exampleSrc: 'Deja de perder el tiempo: el tiempo es oro.',
    exampleTr: 'Перестань гаяти час: час — це гроші.',
  },
  {
    emoji: '📖',
    phrase: 'Caras vemos, corazones no sabemos',
    meaning: 'По обличчю не зрозумієш, що на серці',
    meaningEn: "You can't judge a book by its cover",
    exampleSrc: 'Parecía muy amable, pero caras vemos, corazones no sabemos.',
    exampleTr: 'Він здавався дуже привітним, але по обличчю не зрозумієш, що на серці.',
  },
  {
    emoji: '😂',
    phrase: 'Quien ríe último, ríe mejor',
    meaning: 'Добре сміється той, хто сміється останнім',
    meaningEn: 'He who laughs last laughs best',
    exampleSrc: 'Al final ganó el equipo que nadie esperaba — quien ríe último, ríe mejor.',
    exampleTr:
      'Зрештою переміг той, від кого цього не чекали — добре сміється той, хто сміється останнім.',
  },
  {
    emoji: '🐑',
    phrase: 'Cada oveja con su pareja',
    meaning: 'Рівня до рівні',
    meaningEn: 'Birds of a feather flock together',
    exampleSrc: 'No me sorprende que sean amigos: cada oveja con su pareja.',
    exampleTr: 'Мене не дивує, що вони друзі: рівня до рівні.',
  },
  {
    emoji: '💪',
    phrase: 'Lo que no mata, engorda',
    meaning: 'Що не вбиває, те зміцнює',
    meaningEn: "What doesn't kill you makes you stronger",
    exampleSrc: 'El entrenamiento fue duro, pero lo que no mata, engorda.',
    exampleTr: 'Тренування було важким, але що не вбиває, те зміцнює.',
  },
  {
    emoji: '🐺',
    phrase: 'Más vale malo conocido que bueno por conocer',
    meaning: 'Краще синиця в руці, ніж невідоме добро',
    meaningEn: "Better the devil you know than the devil you don't",
    exampleSrc: 'No cambiaré de trabajo tan rápido: más vale malo conocido que bueno por conocer.',
    exampleTr: 'Я не змінюватиму роботу так швидко: краще знайоме зло, ніж незнайоме добро.',
  },
  {
    emoji: '🎯',
    phrase: 'Al que madruga, Dios le ayuda y al que no, también',
    meaning: 'Іронічно: наполеглива праця — не єдиний шлях',
    meaningEn: "Ironic take: hard work isn't always the answer",
    exampleSrc: 'A veces la suerte cuenta tanto como el esfuerzo.',
    exampleTr: 'Іноді удача важить не менше, ніж зусилля.',
  },
  {
    emoji: '🌊',
    phrase: 'A grandes males, grandes remedios',
    meaning: 'Великі проблеми потребують рішучих дій',
    meaningEn: 'Desperate times call for desperate measures',
    exampleSrc: 'La crisis requiere cambios radicales: a grandes males, grandes remedios.',
    exampleTr: 'Криза вимагає радикальних змін: великі проблеми потребують рішучих дій.',
  },
  {
    emoji: '🫙',
    phrase: 'Tanto va el cántaro a la fuente, hasta que se rompe',
    meaning: 'Скільки мотузочці не витися, а кінець буде',
    meaningEn: 'The pitcher goes to the well so often that it is broken at last',
    exampleSrc:
      'Le advirtieron que parara, pero tanto va el cántaro a la fuente, hasta que se rompe.',
    exampleTr: 'Його попереджали зупинитися, але скільки мотузочці не витися, а кінець буде.',
  },
  {
    emoji: '🍞',
    phrase: 'Barriga llena, corazón contento',
    meaning: 'Ситий черевець — серцю радість',
    meaningEn: 'A full belly makes for a happy heart',
    exampleSrc:
      'Después de cenar bien, todos estaban de buen humor: barriga llena, corazón contento.',
    exampleTr: 'Після доброї вечері всі були в гарному настрої: ситий черевець — серцю радість.',
  },
  {
    emoji: '🎲',
    phrase: 'El que no arriesga, no gana',
    meaning: 'Хто не ризикує, той не виграє',
    meaningEn: 'Nothing ventured, nothing gained',
    exampleSrc: 'Presentó su idea aunque tenía miedo: el que no arriesga, no gana.',
    exampleTr: 'Він представив свою ідею, незважаючи на страх: хто не ризикує, той не виграє.',
  },
  {
    emoji: '🏃',
    phrase: 'No hay atajo sin trabajo',
    meaning: 'Без праці не вийдеш із води',
    meaningEn: 'There are no shortcuts in life',
    exampleSrc:
      'Si quieres aprender bien el idioma, tendrás que estudiar mucho: no hay atajo sin trabajo.',
    exampleTr:
      'Якщо хочеш добре вивчити мову, доведеться багато вчитися: без праці не вийдеш із води.',
  },
  {
    emoji: '🤝',
    phrase: 'Una mano lava la otra',
    meaning: 'Рука руку миє',
    meaningEn: 'One hand washes the other',
    exampleSrc: 'Me ayudó con el proyecto y yo le ayudé después: una mano lava la otra.',
    exampleTr: 'Він допоміг мені з проєктом, і я потім допоміг йому: рука руку миє.',
  },
  {
    emoji: '🔔',
    phrase: 'A buen entendedor, pocas palabras bastan',
    meaning: 'Розумному достатньо натяку',
    meaningEn: 'A word to the wise is enough',
    exampleSrc: 'No necesito explicarte más: a buen entendedor, pocas palabras bastan.',
    exampleTr: 'Мені не потрібно пояснювати тобі більше: розумному достатньо натяку.',
  },
  {
    emoji: '🌱',
    phrase: 'El árbol que crece torcido, jamás su tronco endereza',
    meaning: 'Що посієш, те й пожнеш (про виховання)',
    meaningEn: 'As the twig is bent, so grows the tree',
    exampleSrc:
      'Los hábitos de la infancia marcan para siempre: el árbol que crece torcido, jamás su tronco endereza.',
    exampleTr:
      'Звички, набуті в дитинстві, залишаються назавжди: яким дерево виростає, таким і залишається.',
  },
  {
    emoji: '🪞',
    phrase: 'No hay peor ciego que el que no quiere ver',
    meaning: 'Немає гіршого сліпого, ніж той, хто не хоче бачити',
    meaningEn: 'None so blind as those who will not see',
    exampleSrc: 'Le mostramos todas las pruebas, pero no hay peor ciego que el que no quiere ver.',
    exampleTr:
      'Ми показали йому всі докази, але немає гіршого сліпого, ніж той, хто не хоче бачити.',
  },
  {
    emoji: '👁️',
    phrase: 'Costar un ojo de la cara',
    meaning: 'Коштувати шалених грошей',
    meaningEn: 'Cost an arm and a leg',
    exampleSrc: 'Ese abrigo es bonito, pero cuesta un ojo de la cara.',
    exampleTr: 'Те пальто гарне, але коштує шалених грошей.',
  },
  {
    emoji: '🎯',
    phrase: 'Dar en el clavo',
    meaning: 'Влучити в саму суть',
    meaningEn: 'Hit the nail on the head',
    exampleSrc: 'Con su análisis dio en el clavo: el problema era la comunicación.',
    exampleTr: 'Своїм аналізом він влучив у саму суть: проблемою була комунікація.',
  },
  {
    emoji: '☁️',
    phrase: 'Estar en las nubes',
    meaning: 'Витати в хмарах, бути неуважним',
    meaningEn: "Have one's head in the clouds",
    exampleSrc: 'Durante la reunión estaba en las nubes y no escuchó nada.',
    exampleTr: 'Під час наради він витав у хмарах і нічого не чув.',
  },
  {
    emoji: '🗣️',
    phrase: 'Hablar por los codos',
    meaning: 'Говорити без упину, торохтіти',
    meaningEn: "Talk someone's ear off",
    exampleSrc: 'Mi vecina habla por los codos — nunca puedo irme rápido.',
    exampleTr: 'Моя сусідка говорить без упину — від неї ніколи швидко не вирвешся.',
  },
  {
    emoji: '🙈',
    phrase: 'Hacer la vista gorda',
    meaning: 'Заплющувати очі, не помічати навмисне',
    meaningEn: 'Turn a blind eye',
    exampleSrc: 'El jefe hizo la vista gorda ante las llegadas tardías del equipo.',
    exampleTr: 'Начальник заплющував очі на запізнення команди.',
  },
  {
    emoji: '🥊',
    phrase: 'Tirar la toalla',
    meaning: 'Здатися, опустити руки',
    meaningEn: 'Throw in the towel',
    exampleSrc: 'Después de meses de intentarlo, decidió tirar la toalla.',
    exampleTr: 'Після місяців спроб він вирішив здатися.',
  },
  {
    emoji: '💬',
    phrase: 'Del dicho al hecho hay mucho trecho',
    meaning: 'Між словом і ділом велика різниця',
    meaningEn: 'Easier said than done',
    exampleSrc: 'Dice que va a correr una maratón, pero del dicho al hecho hay mucho trecho.',
    exampleTr: 'Він каже, що пробіжить марафон, але між словом і ділом велика різниця.',
  },
  {
    emoji: '🌍',
    phrase: 'El mundo es un pañuelo',
    meaning: 'Світ тісний',
    meaningEn: "It's a small world",
    exampleSrc: 'Me encontré con mi ex en otro país — el mundo es un pañuelo.',
    exampleTr: 'Я зустрів свою колишню в іншій країні — світ тісний.',
  },
  {
    emoji: '🏰',
    phrase: 'Hacer castillos en el aire',
    meaning: 'Будувати замки на піску, мріяти нереально',
    meaningEn: 'Build castles in the air',
    exampleSrc: 'Deja de hacer castillos en el aire y empieza a trabajar de verdad.',
    exampleTr: 'Перестань будувати замки на піску і починай справді працювати.',
  },
  {
    emoji: '🦶',
    phrase: 'Meter la pata',
    meaning: 'Встрявити в халепу, зробити незручну помилку',
    meaningEn: "Put one's foot in it",
    exampleSrc: 'Metió la pata cuando preguntó si estaba embarazada — y no lo estaba.',
    exampleTr: 'Він встряв у халепу, запитавши чи вагітна вона — а вона ні.',
  },
  {
    emoji: '🐱',
    phrase: 'Buscarle tres pies al gato',
    meaning: 'Ускладнювати там, де не треба',
    meaningEn: 'Look for trouble / make things unnecessarily complicated',
    exampleSrc: 'No le busques tres pies al gato — la solución es simple.',
    exampleTr: 'Не ускладнюй без потреби — рішення просте.',
  },
  {
    emoji: '🏠',
    phrase: 'Como Pedro por su casa',
    meaning: 'Почуватися як вдома, де тебе не запрошували',
    meaningEn: 'Make yourself at home / act like you own the place',
    exampleSrc: 'Entró a la oficina como Pedro por su casa sin llamar.',
    exampleTr: 'Він зайшов до офісу як до себе додому, навіть не постукавши.',
  },
  {
    emoji: '👁️',
    phrase: 'En tierra de ciegos, el tuerto es rey',
    meaning: 'У країні сліпих одноокий — цар',
    meaningEn: 'In the land of the blind, the one-eyed man is king',
    exampleSrc:
      'Es el único que sabe algo de informática aquí — en tierra de ciegos, el tuerto es rey.',
    exampleTr: 'Він єдиний, хто щось знає з інформатики тут — у країні сліпих одноокий цар.',
  },
  {
    emoji: '💧',
    phrase: 'La gota que colmó el vaso',
    meaning: 'Остання крапля, що переповнила чашу',
    meaningEn: 'The last straw',
    exampleSrc: 'El insulto fue la gota que colmó el vaso y renunció.',
    exampleTr: 'Образа стала останньою краплею, і він звільнився.',
  },
  {
    emoji: '🐻',
    phrase: 'No hay que vender la piel del oso antes de cazarlo',
    meaning: 'Не ділити шкуру невбитого ведмедя',
    meaningEn: "Don't count your chickens before they hatch",
    exampleSrc: 'Ya festeja el ascenso, pero no hay que vender la piel del oso antes de cazarlo.',
    exampleTr: 'Він вже святкує підвищення, але не ділять шкуру невбитого ведмедя.',
  },
  {
    emoji: '🪰',
    phrase: 'Por si las moscas',
    meaning: 'На всяк випадок',
    meaningEn: 'Just in case',
    exampleSrc: 'Lleva un paraguas, por si las moscas.',
    exampleTr: 'Візьми парасольку — на всяк випадок.',
  },
  {
    emoji: '🔋',
    phrase: 'Ponerse las pilas',
    meaning: 'Взятися за розум, активізуватися',
    meaningEn: "Get one's act together / step it up",
    exampleSrc: 'Si no te pones las pilas, vas a perder el trabajo.',
    exampleTr: 'Якщо не візьмешся за розум, ти втратиш роботу.',
  },
  {
    emoji: '⬜',
    phrase: 'Quedarse en blanco',
    meaning: 'Завмерти, нічого не пригадати',
    meaningEn: 'Draw a blank / mind goes blank',
    exampleSrc: 'Cuando le hicieron la pregunta, se quedó completamente en blanco.',
    exampleTr: 'Коли йому поставили запитання, він повністю завмер і нічого не міг згадати.',
  },
  {
    emoji: '🍞',
    phrase: 'Ser pan comido',
    meaning: 'Легше легкого, простіше простого',
    meaningEn: 'Be a piece of cake',
    exampleSrc: 'Para ella, ese examen fue pan comido.',
    exampleTr: 'Для неї той іспит був легше легкого.',
  },
  {
    emoji: '🔥',
    phrase: 'Echar leña al fuego',
    meaning: 'Підливати масла у вогонь',
    meaningEn: 'Add fuel to the fire',
    exampleSrc: 'Sus comentarios sólo echaron más leña al fuego.',
    exampleTr: 'Його коментарі лише підлили масла у вогонь.',
  },
  {
    emoji: '🐌',
    phrase: 'Ir a paso de tortuga',
    meaning: 'Рухатися як черепаха, дуже повільно',
    meaningEn: "Move at a snail's pace",
    exampleSrc: 'El proyecto avanza a paso de tortuga — llevamos meses y no terminamos.',
    exampleTr: 'Проєкт просувається як черепаха — ми вже місяцями не можемо закінчити.',
  },
  {
    emoji: '🌧️',
    phrase: 'Llover a cántaros',
    meaning: 'Лити як з відра',
    meaningEn: 'Rain cats and dogs',
    exampleSrc: 'No salgas, está lloviendo a cántaros.',
    exampleTr: 'Не виходь, ллє як з відра.',
  },
  {
    emoji: '🐦',
    phrase: 'Matar dos pájaros de un tiro',
    meaning: 'Вбити двох зайців одним пострілом',
    meaningEn: 'Kill two birds with one stone',
    exampleSrc: 'Comprando online, mato dos pájaros de un tiro: ahorro tiempo y dinero.',
    exampleTr: 'Купуючи онлайн, я вбиваю двох зайців одразу: економлю час і гроші.',
  },
  {
    emoji: '🧊',
    phrase: 'Romper el hielo',
    meaning: 'Розтопити кригу',
    meaningEn: 'Break the ice',
    exampleSrc: 'Contó un chiste para romper el hielo en la reunión.',
    exampleTr: 'Він розповів жарт, щоб розтопити кригу на зустрічі.',
  },
  {
    emoji: '🌙',
    phrase: 'De vez en cuando',
    meaning: 'Час від часу, час до часу',
    meaningEn: 'Once in a while',
    exampleSrc: 'Solo voy al gimnasio de vez en cuando.',
    exampleTr: 'Я ходжу в спортзал лише час від часу.',
  },
  {
    emoji: '🐸',
    phrase: 'Tener un nudo en la garganta',
    meaning: 'Мати ком у горлі',
    meaningEn: "Have a lump in one's throat",
    exampleSrc: 'Cuando vio a su hijo graduarse, tuvo un nudo en la garganta.',
    exampleTr: 'Коли вона побачила, як її син отримує диплом, у неї стояв ком у горлі.',
  },
  {
    emoji: '🌳',
    phrase: 'Irse por las ramas',
    meaning: 'Ходити навколо та навколо, не казати прямо',
    meaningEn: 'Beat around the bush',
    exampleSrc: 'Deja de irte por las ramas y dime qué pasó.',
    exampleTr: 'Перестань ходити навколо та навколо і скажи мені, що сталося.',
  },
  {
    emoji: '🥧',
    phrase: 'Tirar la casa por la ventana',
    meaning: 'Не шкодувати грошей, влаштувати щось з розмахом',
    meaningEn: 'Push the boat out / spare no expense',
    exampleSrc: 'Para la boda de su hija, tiraron la casa por la ventana.',
    exampleTr: 'На весілля доньки вони не пошкодували грошей.',
  },
  {
    emoji: '🌅',
    phrase: 'No estar muy católico',
    meaning: 'Почуватися погано, нездужати',
    meaningEn: 'Feel under the weather',
    exampleSrc: 'Hoy no estoy muy católico, creo que tengo gripe.',
    exampleTr: 'Сьогодні я почуваюся не дуже, здається, у мене грип.',
  },
  {
    emoji: '🐈',
    phrase: 'Aquí hay gato encerrado',
    meaning: 'Тут щось нечисто, тут є якийсь підступ',
    meaningEn: 'Something fishy is going on',
    exampleSrc: 'Esta oferta es demasiado buena — aquí hay gato encerrado.',
    exampleTr: 'Ця пропозиція занадто хороша — тут щось нечисто.',
  },
  {
    emoji: '🐎',
    phrase: 'A caballo regalado, no le mires el dentado',
    meaning: 'Дарованому коню в зуби не дивляться',
    meaningEn: "Don't look a gift horse in the mouth",
    exampleSrc: 'Te dieron el ordenador gratis — a caballo regalado, no le mires el dentado.',
    exampleTr: "Тобі дали комп'ютер безкоштовно — дарованому коню в зуби не дивляться.",
  },
  {
    emoji: '🔔',
    phrase: 'Sonar a chino',
    meaning: 'Бути незрозумілим, китайською грамотою',
    meaningEn: 'Sound like Greek (to me)',
    exampleSrc: 'Lo que explicó el profesor me sonó a chino.',
    exampleTr: 'Те, що пояснив викладач, для мене звучало як китайська грамота.',
  },
  {
    emoji: '🌪️',
    phrase: 'Una tormenta en un vaso de agua',
    meaning: 'Буря в склянці води',
    meaningEn: 'A storm in a teacup',
    exampleSrc: 'Al final, todo fue una tormenta en un vaso de agua.',
    exampleTr: 'Зрештою, все виявилось бурею в склянці води.',
  },
  {
    emoji: '🧵',
    phrase: 'Estar en un hilo',
    meaning: 'Висіти на волосині',
    meaningEn: 'Hang by a thread',
    exampleSrc: 'Su vida estuvo en un hilo durante la operación.',
    exampleTr: 'Його життя висіло на волосині під час операції.',
  },
  {
    emoji: '🪞',
    phrase: 'Estar en la misma sintonía',
    meaning: 'Мати однакову думку, розуміти одне одного',
    meaningEn: 'Be on the same wavelength',
    exampleSrc: 'Mi jefe y yo siempre estamos en la misma sintonía.',
    exampleTr: 'Ми з начальником завжди розуміємо одне одного.',
  },
  {
    emoji: '🌊',
    phrase: 'Estar en el mismo barco',
    meaning: 'Бути в однаковому становищі',
    meaningEn: 'Be in the same boat',
    exampleSrc: 'No te preocupes, todos estamos en el mismo barco con este proyecto.',
    exampleTr: 'Не хвилюйся, ми всі в однаковому становищі з цим проєктом.',
  },
  {
    emoji: '🐔',
    phrase: 'Acostarse con las gallinas',
    meaning: 'Лягати спати дуже рано',
    meaningEn: 'Go to bed with the chickens',
    exampleSrc: 'Mi abuelo siempre se acuesta con las gallinas.',
    exampleTr: 'Мій дідусь завжди лягає спати дуже рано.',
  },
  {
    emoji: '🪙',
    phrase: 'No tener ni un duro',
    meaning: 'Не мати ні копійки',
    meaningEn: "Not have a penny to one's name",
    exampleSrc: 'A fin de mes no tengo ni un duro.',
    exampleTr: 'Наприкінці місяця я не маю ні копійки.',
  },
  {
    emoji: '🌶️',
    phrase: 'Estar como un tomate',
    meaning: 'Почервоніти від сорому',
    meaningEn: 'Turn beet red',
    exampleSrc: 'Cuando le hicieron el cumplido, se puso como un tomate.',
    exampleTr: 'Коли йому зробили комплімент, він почервонів як буряк.',
  },
  {
    emoji: '🎈',
    phrase: 'Írsele a alguien el santo al cielo',
    meaning: 'Геть забути, про що говорили',
    meaningEn: 'Completely forget what one was saying',
    exampleSrc: 'Estaba contando la historia y se me fue el santo al cielo.',
    exampleTr: 'Я розповідав історію і геть забув, про що говорив.',
  },
];

// ── French idioms → Ukrainian + English meaning ────────────────
export const FRENCH_IDIOMS: Idiom[] = [
  {
    emoji: '🪲',
    phrase: 'Avoir le cafard',
    meaning: 'Бути в депресії, сумувати',
    meaningEn: 'Feel down / feel blue',
    exampleSrc: "Depuis qu'il a perdu son travail, il a le cafard.",
    exampleTr: 'Відколи він втратив роботу, він почуває себе пригніченим.',
  },
  {
    emoji: '🧂',
    phrase: 'Mettre son grain de sel',
    meaning: 'Влізти зі своєю думкою, втрутитися',
    meaningEn: "Put in one's two cents",
    exampleSrc: 'Il met toujours son grain de sel dans nos conversations.',
    exampleTr: 'Він завжди влізає зі своєю думкою в наші розмови.',
  },
  {
    emoji: '👁️',
    phrase: 'Coûter les yeux de la tête',
    meaning: 'Коштувати шалених грошей',
    meaningEn: 'Cost an arm and a leg',
    exampleSrc: 'Ce sac à main coûte les yeux de la tête.',
    exampleTr: 'Ця сумка коштує шалених грошей.',
  },
  {
    emoji: '🐱',
    phrase: 'Avoir un chat dans la gorge',
    meaning: 'Мати ком у горлі',
    meaningEn: "Have a frog in one's throat",
    exampleSrc: "Excusez-moi, j'ai un chat dans la gorge.",
    exampleTr: 'Вибачте, у мене ком у горлі.',
  },
  {
    emoji: '🦶',
    phrase: "Casser les pieds à quelqu'un",
    meaning: 'Дратувати когось, діставати когось',
    meaningEn: "Get on someone's nerves",
    exampleSrc: 'Arrête de me casser les pieds avec tes questions !',
    exampleTr: 'Перестань дратувати мене своїми питаннями!',
  },
  {
    emoji: '🐰',
    phrase: "Poser un lapin à quelqu'un",
    meaning: 'Підвести когось, не прийти на зустріч',
    meaningEn: 'Stand someone up',
    exampleSrc: "Il m'a posé un lapin hier soir, je l'ai attendu une heure.",
    exampleTr: 'Він підвів мене вчора ввечері, я чекав годину.',
  },
  {
    emoji: '🤚',
    phrase: 'Avoir un poil dans la main',
    meaning: 'Бути дуже лінивим',
    meaningEn: 'Be extremely lazy',
    exampleSrc: 'Il a un poil dans la main, il ne fait jamais rien à la maison.',
    exampleTr: 'Він дуже лінивий, ніколи нічого не робить вдома.',
  },
  {
    emoji: '🍎',
    phrase: 'Tomber dans les pommes',
    meaning: 'Знепритомніти',
    meaningEn: 'Faint / pass out',
    exampleSrc: 'Elle est tombée dans les pommes à cause de la chaleur.',
    exampleTr: 'Вона знепритомніла через спеку.',
  },
  {
    emoji: '🐱',
    phrase: 'Donner sa langue au chat',
    meaning: 'Здатися, не змогти відгадати',
    meaningEn: 'Give up guessing',
    exampleSrc: 'Je donne ma langue au chat, dis-moi la réponse.',
    exampleTr: 'Я здаюся, скажи мені відповідь.',
  },
  {
    emoji: '⚡',
    phrase: 'Avoir le coup de foudre',
    meaning: 'Закохатися з першого погляду',
    meaningEn: 'Fall in love at first sight',
    exampleSrc: 'Ils ont eu le coup de foudre dès leur première rencontre.',
    exampleTr: 'Вони закохались одне в одного з першого ж разу.',
  },
  {
    emoji: '🛌',
    phrase: 'Faire la grasse matinée',
    meaning: 'Довго спати вранці, валятися в ліжку',
    meaningEn: 'Sleep in',
    exampleSrc: "Le dimanche, j'aime faire la grasse matinée.",
    exampleTr: 'У неділю я люблю довго спати вранці.',
  },
  {
    emoji: '🍑',
    phrase: 'Avoir la pêche',
    meaning: 'Бути в чудовій формі, енергійним',
    meaningEn: 'Feel great / full of energy',
    exampleSrc: 'Depuis ses vacances, elle a la pêche.',
    exampleTr: 'Після відпустки вона в чудовій формі.',
  },
  {
    emoji: '🌙',
    phrase: 'Être dans la lune',
    meaning: 'Витати в хмарах',
    meaningEn: "Have one's head in the clouds",
    exampleSrc: "Excuse-moi, j'étais dans la lune, tu disais quoi ?",
    exampleTr: 'Вибач, я витав у хмарах, що ти казав?',
  },
  {
    emoji: '🐈',
    phrase: "Avoir d'autres chats à fouetter",
    meaning: 'Мати важливіші справи',
    meaningEn: 'Have other fish to fry',
    exampleSrc: "Je ne peux pas t'aider maintenant, j'ai d'autres chats à fouetter.",
    exampleTr: 'Я не можу тобі допомогти зараз, у мене є важливіші справи.',
  },
  {
    emoji: '🐂',
    phrase: 'Mettre la charrue avant les bœufs',
    meaning: 'Робити щось у неправильному порядку',
    meaningEn: 'Put the cart before the horse',
    exampleSrc:
      "Signer le contrat avant de négocier le prix, c'est mettre la charrue avant les bœufs.",
    exampleTr:
      'Підписувати контракт перед обговоренням ціни — це робити все в неправильному порядку.',
  },
  {
    emoji: '🐈‍⬛',
    phrase: 'Appeler un chat un chat',
    meaning: 'Називати речі своїми іменами',
    meaningEn: 'Call a spade a spade',
    exampleSrc: "Il faut appeler un chat un chat : c'était un échec.",
    exampleTr: 'Треба називати речі своїми іменами: це була невдача.',
  },
  {
    emoji: '🥗',
    phrase: 'Raconter des salades',
    meaning: 'Розповідати небилиці',
    meaningEn: 'Tell tall tales',
    exampleSrc: "Ne l'écoute pas, il raconte toujours des salades.",
    exampleTr: 'Не слухай його, він завжди розповідає небилиці.',
  },
  {
    emoji: '👃',
    phrase: 'Tirer les vers du nez',
    meaning: 'Витягувати інформацію з когось',
    meaningEn: 'Worm information out of someone',
    exampleSrc: "Il a fallu lui tirer les vers du nez pour qu'il avoue.",
    exampleTr: 'Довелося витягувати з нього інформацію, щоб він зізнався.',
  },
  {
    emoji: '💪',
    phrase: 'Avoir le bras long',
    meaning: "Мати впливові зв'язки",
    meaningEn: 'Have connections / pull strings',
    exampleSrc: "Il a réussi à obtenir ce poste parce qu'il a le bras long.",
    exampleTr: "Він зміг отримати цю посаду, бо має впливові зв'язки.",
  },
  {
    emoji: '💀',
    phrase: 'Casser sa pipe',
    meaning: 'Врізати дуба, померти',
    meaningEn: 'Kick the bucket',
    exampleSrc: 'Le vieux chat du voisin a cassé sa pipe la semaine dernière.',
    exampleTr: 'Старий кіт сусіда врізав дуба минулого тижня.',
  },
  {
    emoji: '🇬🇧',
    phrase: "Filer à l'anglaise",
    meaning: 'Піти по-англійськи, не попрощавшись',
    meaningEn: 'Take French leave (leave without saying goodbye)',
    exampleSrc: "Il a filé à l'anglaise avant la fin de la fête.",
    exampleTr: 'Він пішов по-англійськи ще до закінчення вечірки.',
  },
  {
    emoji: '🍽️',
    phrase: 'Mettre les pieds dans le plat',
    meaning: 'Сказати щось недоречне',
    meaningEn: "Put one's foot in it",
    exampleSrc: 'Il a mis les pieds dans le plat en posant cette question.',
    exampleTr: 'Він сказав щось недоречне, поставивши це питання.',
  },
  {
    emoji: '❤️',
    phrase: 'Avoir le cœur sur la main',
    meaning: 'Бути щедрим, мати добре серце',
    meaningEn: 'Be generous / big-hearted',
    exampleSrc: 'Elle a le cœur sur la main, elle aide toujours les autres.',
    exampleTr: 'Вона дуже щедра, завжди допомагає іншим.',
  },
  {
    emoji: '🕐',
    phrase: 'Chercher midi à quatorze heures',
    meaning: 'Шукати складнощів там, де їх немає',
    meaningEn: 'Overcomplicate things',
    exampleSrc: 'Ne cherche pas midi à quatorze heures, la solution est simple.',
    exampleTr: 'Не шукай складнощів там, де їх немає, рішення просте.',
  },
  {
    emoji: '🙉',
    phrase: 'Faire la sourde oreille',
    meaning: 'Прикидатися, що не чуєш',
    meaningEn: 'Turn a deaf ear',
    exampleSrc: 'Il fait la sourde oreille à toutes nos demandes.',
    exampleTr: 'Він прикидається, що не чує всіх наших прохань.',
  },
  {
    emoji: '🐺',
    phrase: 'Avoir une faim de loup',
    meaning: 'Бути голодним як вовк',
    meaningEn: 'Be ravenous',
    exampleSrc: "Après le sport, j'ai une faim de loup.",
    exampleTr: 'Після спорту я голодний як вовк.',
  },
  {
    emoji: '🌾',
    phrase: 'Être au four et au moulin',
    meaning: 'Розриватися між справами',
    meaningEn: 'Be in two places at once',
    exampleSrc: 'Avec trois enfants et le travail, elle est au four et au moulin.',
    exampleTr: 'З трьома дітьми й роботою вона розривається між справами.',
  },
  {
    emoji: '⛵',
    phrase: 'Avoir le vent en poupe',
    meaning: 'Бути на хвилі успіху',
    meaningEn: 'Be on a roll / thriving',
    exampleSrc: 'Son entreprise a le vent en poupe depuis un an.',
    exampleTr: 'Його компанія на хвилі успіху вже рік.',
  },
  {
    emoji: '🧈',
    phrase: 'Mettre du beurre dans les épinards',
    meaning: 'Покращити фінансове становище',
    meaningEn: 'Make ends meet a bit better',
    exampleSrc: "Ce petit boulot l'aide à mettre du beurre dans les épinards.",
    exampleTr: 'Ця підробітка допомагає йому покращити фінансове становище.',
  },
  {
    emoji: '👀',
    phrase: 'Avoir les yeux plus gros que le ventre',
    meaning: 'Очі завидющі, руки загребущі',
    meaningEn: "Have eyes bigger than one's stomach",
    exampleSrc: 'Il a pris trois desserts, il a les yeux plus gros que le ventre.',
    exampleTr: 'Він взяв три десерти — очі завидющі.',
  },
  {
    emoji: '☁️',
    phrase: 'Tomber des nues',
    meaning: 'Бути приголомшеним, як грім з ясного неба',
    meaningEn: 'Be astonished',
    exampleSrc: "Quand j'ai appris la nouvelle, je suis tombé des nues.",
    exampleTr: 'Коли я почув новину, я був приголомшений.',
  },
  {
    emoji: '👆',
    phrase: "Se mettre le doigt dans l'œil",
    meaning: 'Сильно помилятися',
    meaningEn: 'Be completely wrong',
    exampleSrc: "Si tu penses qu'il va accepter, tu te mets le doigt dans l'œil.",
    exampleTr: 'Якщо ти думаєш, що він погодиться, ти сильно помиляєшся.',
  },
  {
    emoji: '🌃',
    phrase: 'Passer une nuit blanche',
    meaning: 'Провести безсонну ніч',
    meaningEn: 'Pull an all-nighter',
    exampleSrc: "J'ai passé une nuit blanche à préparer la présentation.",
    exampleTr: 'Я провів безсонну ніч, готуючи презентацію.',
  },
  {
    emoji: '🎩',
    phrase: 'Être sur son trente et un',
    meaning: 'Бути одягненим з голочки',
    meaningEn: 'Be dressed to the nines',
    exampleSrc: 'Pour le mariage, elle était sur son trente et un.',
    exampleTr: 'На весілля вона була одягнена з голочки.',
  },
  {
    emoji: '🚴',
    phrase: 'Avoir la tête dans le guidon',
    meaning: 'Бути по вуха в роботі',
    meaningEn: 'Be overwhelmed with work',
    exampleSrc: "Désolé pour le retard, j'ai la tête dans le guidon en ce moment.",
    exampleTr: 'Вибач за затримку, я зараз по вуха в роботі.',
  },
  {
    emoji: '🍞',
    phrase: 'Mettre la main à la pâte',
    meaning: 'Докласти рук, допомогти',
    meaningEn: "Pitch in / get one's hands dirty",
    exampleSrc: 'Tout le monde a mis la main à la pâte pour préparer la fête.',
    exampleTr: 'Усі доклали рук, щоб підготувати свято.',
  },
  {
    emoji: '🪨',
    phrase: "Faire d'une pierre deux coups",
    meaning: 'Вбити двох зайців одним пострілом',
    meaningEn: 'Kill two birds with one stone',
    exampleSrc: "En allant à pied au travail, je fais d'une pierre deux coups.",
    exampleTr: 'Йдучи пішки на роботу, я вбиваю двох зайців одразу.',
  },
  {
    emoji: '🍞',
    phrase: 'Avoir du pain sur la planche',
    meaning: 'Мати багато роботи попереду',
    meaningEn: "Have a lot on one's plate",
    exampleSrc: 'Avec ce nouveau projet, on a du pain sur la planche.',
    exampleTr: 'З цим новим проєктом у нас багато роботи попереду.',
  },
  {
    emoji: '💧',
    phrase: "C'est la goutte d'eau qui fait déborder le vase",
    meaning: 'Це остання крапля',
    meaningEn: "That's the last straw",
    exampleSrc: "Sa remarque a été la goutte d'eau qui a fait déborder le vase.",
    exampleTr: 'Його зауваження стало останньою краплею.',
  },
  {
    emoji: '🎈',
    phrase: 'Avoir la grosse tête',
    meaning: 'Бути зарозумілим, загордитися',
    meaningEn: 'Be full of oneself',
    exampleSrc: 'Depuis son succès, il a la grosse tête.',
    exampleTr: 'Після свого успіху він став зарозумілим.',
  },
  {
    emoji: '🍲',
    phrase: 'Tourner autour du pot',
    meaning: 'Ходити навколо та навколо',
    meaningEn: 'Beat around the bush',
    exampleSrc: 'Arrête de tourner autour du pot et dis-moi la vérité.',
    exampleTr: 'Перестань ходити навколо та навколо і скажи мені правду.',
  },
  {
    emoji: '🧽',
    phrase: "Jeter l'éponge",
    meaning: 'Здатися, кинути боротьбу',
    meaningEn: 'Throw in the towel',
    exampleSrc: "Après tant d'échecs, il a fini par jeter l'éponge.",
    exampleTr: 'Після стількох невдач він зрештою здався.',
  },
  {
    emoji: '🥚',
    phrase: 'Mettre tous ses œufs dans le même panier',
    meaning: 'Класти всі яйця в один кошик',
    meaningEn: 'Put all eggs in one basket',
    exampleSrc: 'Il ne faut pas mettre tous ses œufs dans le même panier en bourse.',
    exampleTr: 'Не варто класти всі яйця в один кошик, інвестуючи на біржі.',
  },
  {
    emoji: '🛏️',
    phrase: 'Être dans de beaux draps',
    meaning: 'Бути в скрутному становищі',
    meaningEn: 'Be in a tricky/bad situation',
    exampleSrc: 'Sans argent et sans travail, il est dans de beaux draps.',
    exampleTr: 'Без грошей і без роботи він у скрутному становищі.',
  },
  {
    emoji: '👁️‍🗨️',
    phrase: 'Avoir un œil au beurre noir',
    meaning: 'Мати синець під оком',
    meaningEn: 'Have a black eye',
    exampleSrc: 'Il est rentré avec un œil au beurre noir après la bagarre.',
    exampleTr: 'Він повернувся з синцем під оком після бійки.',
  },
  {
    emoji: '🥬',
    phrase: 'Pédaler dans la choucroute',
    meaning: 'Топтатися на місці, безрезультатно старатися',
    meaningEn: 'Struggle without progress',
    exampleSrc: "On dirait qu'il pédale dans la choucroute avec ce projet.",
    exampleTr: 'Здається, він топчеться на місці з цим проєктом.',
  },
  {
    emoji: '🦷',
    phrase: "Avoir une dent contre quelqu'un",
    meaning: 'Мати зуб на когось',
    meaningEn: 'Hold a grudge against someone',
    exampleSrc: 'Elle a une dent contre lui depuis leur dispute.',
    exampleTr: 'Вона має зуб на нього з часу їхньої сварки.',
  },
  {
    emoji: '🔑',
    phrase: 'Mettre la clé sous la porte',
    meaning: 'Закрити справу, збанкрутувати',
    meaningEn: 'Shut down (a business)',
    exampleSrc: 'Le restaurant a mis la clé sous la porte après la pandémie.',
    exampleTr: 'Ресторан закрився після пандемії.',
  },
  {
    emoji: '🧭',
    phrase: "Avoir le compas dans l'œil",
    meaning: 'Мати добре окомір',
    meaningEn: 'Have a good eye for measurements',
    exampleSrc: "Pas besoin de mètre, il a le compas dans l'œil.",
    exampleTr: 'Йому не потрібна рулетка, у нього чудовий окомір.',
  },
  {
    emoji: '🤝',
    phrase: 'Donner un coup de main',
    meaning: 'Допомогти',
    meaningEn: 'Lend a hand',
    exampleSrc: 'Tu peux me donner un coup de main pour déménager ?',
    exampleTr: 'Можеш допомогти мені з переїздом?',
  },
  {
    emoji: '🐴',
    phrase: 'Être à cheval sur les principes',
    meaning: 'Бути принциповим, прискіпливим',
    meaningEn: 'Be a stickler for rules',
    exampleSrc: 'Notre professeur est très à cheval sur les principes.',
    exampleTr: 'Наш викладач дуже принциповий.',
  },
  {
    emoji: '👅',
    phrase: 'Avoir la langue bien pendue',
    meaning: 'Мати довгий язик, бути балакучим',
    meaningEn: 'Be very talkative',
    exampleSrc: 'Sa sœur a la langue bien pendue, elle parle sans arrêt.',
    exampleTr: 'Його сестра дуже балакуча, говорить без упину.',
  },
  {
    emoji: '🛣️',
    phrase: 'Ne pas y aller par quatre chemins',
    meaning: 'Говорити прямо, без манівців',
    meaningEn: 'Get straight to the point',
    exampleSrc: "Il n'y est pas allé par quatre chemins pour lui dire la vérité.",
    exampleTr: 'Він прямо й без манівців сказав їй правду.',
  },
  {
    emoji: '🐝',
    phrase: 'Avoir le bourdon',
    meaning: 'Сумувати, журитися',
    meaningEn: 'Feel blue / down',
    exampleSrc: "Depuis quelques jours, j'ai le bourdon.",
    exampleTr: 'Останні кілька днів я сумую.',
  },
  {
    emoji: '😍',
    phrase: 'Faire les yeux doux',
    meaning: 'Кокетувати, заграватися поглядом',
    meaningEn: 'Make eyes at someone',
    exampleSrc: 'Il lui fait les yeux doux depuis le début de la soirée.',
    exampleTr: 'Він кокетує з нею з самого початку вечора.',
  },
  {
    emoji: '💘',
    phrase: "Avoir un faible pour quelqu'un",
    meaning: 'Мати слабкість до когось',
    meaningEn: 'Have a soft spot for someone',
    exampleSrc: "Je dois avouer que j'ai un faible pour elle.",
    exampleTr: 'Маю зізнатись, що маю слабкість до неї.',
  },
  {
    emoji: '🏙️',
    phrase: 'Tenir le haut du pavé',
    meaning: 'Бути на чолі, займати провідне місце',
    meaningEn: 'Be at the top, prominent',
    exampleSrc: 'Cette entreprise tient le haut du pavé dans son secteur.',
    exampleTr: 'Ця компанія займає провідне місце у своїй галузі.',
  },
  {
    emoji: '⏩',
    phrase: 'Mettre les bouchées doubles',
    meaning: 'Працювати вдвічі швидше',
    meaningEn: 'Work twice as fast',
    exampleSrc: 'Il faut mettre les bouchées doubles pour finir à temps.',
    exampleTr: 'Треба працювати вдвічі швидше, щоб встигнути вчасно.',
  },
  {
    emoji: '🐜',
    phrase: 'Avoir des fourmis dans les jambes',
    meaning: 'Мати мурашки в ногах (від онімінн)',
    meaningEn: "Have pins and needles in one's legs",
    exampleSrc: "Après le vol, j'avais des fourmis dans les jambes.",
    exampleTr: 'Після польоту в мене були мурашки в ногах.',
  },
  {
    emoji: '🍎',
    phrase: 'Être haut comme trois pommes',
    meaning: 'Бути зовсім крихітним (про дитину)',
    meaningEn: 'Be knee-high to a grasshopper',
    exampleSrc: "Il était haut comme trois pommes quand on s'est connus.",
    exampleTr: 'Він був зовсім крихітним, коли ми познайомились.',
  },
  {
    emoji: '🩹',
    phrase: 'Se serrer la ceinture',
    meaning: 'Затягнути пояс, економити',
    meaningEn: "Tighten one's belt",
    exampleSrc: 'Ce mois-ci, il faut se serrer la ceinture.',
    exampleTr: 'Цього місяця треба затягнути пояс.',
  },
  {
    emoji: '🍈',
    phrase: 'Avoir le melon',
    meaning: 'Бути зарозумілим',
    meaningEn: 'Be conceited',
    exampleSrc: "Depuis qu'il est connu, il a vraiment le melon.",
    exampleTr: 'Відколи він став відомим, він справді зарозумілий.',
  },
  {
    emoji: '🧵',
    phrase: 'Filer un mauvais coton',
    meaning: 'Бути в поганому стані, котитися по похилій',
    meaningEn: 'Be in bad shape / going downhill',
    exampleSrc: 'Depuis son licenciement, il file un mauvais coton.',
    exampleTr: 'Відколи його звільнили, він котиться по похилій.',
  },
  {
    emoji: '🐦',
    phrase: "Avoir un appétit d'oiseau",
    meaning: 'Їсти як пташка, мало',
    meaningEn: 'Eat like a bird',
    exampleSrc: "Elle a un appétit d'oiseau, elle mange à peine.",
    exampleTr: 'Вона їсть як пташка, майже нічого.',
  },
  {
    emoji: '🧊',
    phrase: 'Garder la tête froide',
    meaning: 'Зберігати холоднокровність',
    meaningEn: 'Keep a cool head',
    exampleSrc: 'Malgré la pression, elle a su garder la tête froide.',
    exampleTr: 'Попри тиск, вона змогла зберегти холоднокровність.',
  },
  {
    emoji: '🦅',
    phrase: 'Avoir des yeux de lynx',
    meaning: 'Мати гострий зір, орлине око',
    meaningEn: 'Have eagle eyes',
    exampleSrc: 'Rien ne lui échappe, il a des yeux de lynx.',
    exampleTr: 'Від нього нічого не сховається, у нього орлине око.',
  },
  {
    emoji: '🧱',
    phrase: "Mettre quelqu'un au pied du mur",
    meaning: 'Поставити когось у безвихідь',
    meaningEn: 'Corner someone / force a decision',
    exampleSrc: "Ses questions l'ont mis au pied du mur.",
    exampleTr: 'Її питання поставили його у безвихідь.',
  },
  {
    emoji: '🗣️',
    phrase: 'Avoir le dernier mot',
    meaning: 'Мати останнє слово',
    meaningEn: 'Have the last word',
    exampleSrc: "Dans cette discussion, c'est toujours elle qui a le dernier mot.",
    exampleTr: 'У цій дискусії останнє слово завжди за нею.',
  },
  {
    emoji: '🍐',
    phrase: 'Couper la poire en deux',
    meaning: 'Піти на компроміс, поділити порівну',
    meaningEn: 'Meet halfway / compromise',
    exampleSrc: 'On a fini par couper la poire en deux.',
    exampleTr: 'Зрештою ми пішли на компроміс, поділивши порівну.',
  },
  {
    emoji: '🌹',
    phrase: "Avoir un cœur d'artichaut",
    meaning: 'Закохуватися дуже легко й часто',
    meaningEn: 'Fall in love easily',
    exampleSrc: "Il a un cœur d'artichaut, il tombe amoureux chaque mois.",
    exampleTr: 'Він закохується дуже легко, щомісяця в когось нового.',
  },
];

// ── Italian idioms → Ukrainian + English meaning ───────────────
export const ITALIAN_IDIOMS: Idiom[] = [
  {
    emoji: '🐺',
    phrase: 'In bocca al lupo',
    meaning: 'Ні пуху ні пера',
    meaningEn: 'Break a leg / good luck',
    exampleSrc: 'Domani ho un esame importante. — In bocca al lupo!',
    exampleTr: 'Завтра у мене важливий екзамен. — Ні пуху ні пера!',
  },
  {
    emoji: '👁️',
    phrase: 'Costare un occhio della testa',
    meaning: 'Коштувати шалених грошей',
    meaningEn: 'Cost an arm and a leg',
    exampleSrc: 'Quella macchina costa un occhio della testa.',
    exampleTr: 'Та машина коштує шалених грошей.',
  },
  {
    emoji: '🍝',
    phrase: 'Avere le mani in pasta',
    meaning: 'Бути причетним до чогось',
    meaningEn: 'Have a finger in the pie',
    exampleSrc: 'Anche lui ha le mani in pasta in questo progetto.',
    exampleTr: 'Він теж причетний до цього проєкту.',
  },
  {
    emoji: '⏳',
    phrase: "Non vedere l'ora",
    meaning: 'Не могти дочекатися',
    meaningEn: "Can't wait",
    exampleSrc: "Non vedo l'ora di andare in vacanza.",
    exampleTr: 'Я не можу дочекатися відпустки.',
  },
  {
    emoji: '🌧️',
    phrase: 'Piove a catinelle',
    meaning: 'Ллє як з відра',
    meaningEn: "It's raining cats and dogs",
    exampleSrc: 'Resta a casa, fuori piove a catinelle.',
    exampleTr: 'Залишайся вдома, на вулиці ллє як з відра.',
  },
];

// ── Portuguese idioms → Ukrainian + English meaning ────────────
export const PORTUGUESE_IDIOMS: Idiom[] = [
  {
    emoji: '👁️',
    phrase: 'Custar os olhos da cara',
    meaning: 'Коштувати шалених грошей',
    meaningEn: 'Cost an arm and a leg',
    exampleSrc: 'Esse carro custou os olhos da cara.',
    exampleTr: 'Та машина коштувала шалених грошей.',
  },
  {
    emoji: '🌿',
    phrase: 'Quebrar o galho',
    meaning: 'Якось викрутитися, вийти зі скрутного становища',
    meaningEn: 'Make do / get by',
    exampleSrc: 'Não temos tudo o que precisamos, mas vamos quebrar o galho.',
    exampleTr: 'У нас немає всього необхідного, але ми якось викрутимось.',
  },
  {
    emoji: '🐸',
    phrase: 'Engolir sapos',
    meaning: 'Терпіти неприємності мовчки',
    meaningEn: "Swallow one's pride",
    exampleSrc: 'Ele teve que engolir sapos para manter o emprego.',
    exampleTr: 'Йому довелося терпіти неприємності, щоб зберегти роботу.',
  },
  {
    emoji: '🦆',
    phrase: 'Pagar o pato',
    meaning: 'Відповідати за чужі помилки',
    meaningEn: 'Take the blame for someone else',
    exampleSrc: 'Sempre sou eu que pago o pato pelos erros dele.',
    exampleTr: 'Завжди я відповідаю за його помилки.',
  },
  {
    emoji: '🌧️',
    phrase: 'Chover a cântaros',
    meaning: 'Лити як з відра',
    meaningEn: 'Rain cats and dogs',
    exampleSrc: 'Não saia sem guarda-chuva, está chovendo a cântaros.',
    exampleTr: 'Не виходь без парасольки, ллє як з відра.',
  },
];

// ── German idioms → Ukrainian + English meaning ────────────────
export const GERMAN_IDIOMS: Idiom[] = [
  {
    emoji: '🤞',
    phrase: 'Die Daumen drücken',
    meaning: 'Тримати кулаки за когось',
    meaningEn: "Keep one's fingers crossed",
    exampleSrc: 'Ich drücke dir die Daumen für die Prüfung!',
    exampleTr: 'Тримаю за тебе кулаки на іспиті!',
  },
  {
    emoji: '🌱',
    phrase: 'Ins Gras beißen',
    meaning: 'Померти, загнутися (евфемізм)',
    meaningEn: 'Bite the dust',
    exampleSrc: 'Die alte Pflanze hat endlich ins Gras gebissen.',
    exampleTr: 'Стара рослина нарешті загнулася.',
  },
  {
    emoji: '🐻',
    phrase: 'Da steppt der Bär',
    meaning: 'Там кипить життя, там весело',
    meaningEn: "That's where the party's at",
    exampleSrc: 'Auf der Party gestern Abend steppte der Bär.',
    exampleTr: 'На вчорашній вечірці кипіло життя.',
  },
  {
    emoji: '🍅',
    phrase: 'Tomaten auf den Augen haben',
    meaning: 'Не помічати очевидного',
    meaningEn: 'Have a blind spot',
    exampleSrc: 'Hast du Tomaten auf den Augen? Das Schild ist direkt vor dir!',
    exampleTr: 'Ти не бачиш очевидного? Вивіска прямо перед тобою!',
  },
  {
    emoji: '🐱',
    phrase: 'Die Katze im Sack kaufen',
    meaning: 'Купити кота в мішку',
    meaningEn: 'Buy a pig in a poke',
    exampleSrc: 'Kauf das Auto nicht ungesehen — du könntest die Katze im Sack kaufen.',
    exampleTr: 'Не купуй машину не дивлячись — можеш купити кота в мішку.',
  },
];

// ── Hebrew idioms → Ukrainian + English meaning ────────────────
export const HEBREW_IDIOMS: Idiom[] = [
  {
    emoji: '🐻',
    phrase: 'לא דובים ולא יער',
    meaning: 'Цілковита нісенітниця, вигадка',
    meaningEn: 'A cock-and-bull story',
    exampleSrc: 'הסיפור שהוא סיפר היה לא דובים ולא יער.',
    exampleTr: 'Історія, яку він розповів, була повною нісенітницею.',
  },
  {
    emoji: '🤰',
    phrase: 'לקפוץ מעל הפופיק',
    meaning: 'Замахнутися на більше, ніж можеш осягнути',
    meaningEn: 'Bite off more than one can chew',
    exampleSrc: 'הוא ניסה לקפוץ מעל הפופיק וקנה עסק שהוא לא הבין בו.',
    exampleTr:
      'Він спробував вхопити більше, ніж міг проковтнути, і купив бізнес, у якому нічого не розумів.',
  },
  {
    emoji: '🤕',
    phrase: 'לשבור את הראש',
    meaning: 'Старанно думати, сушити голову',
    meaningEn: "Rack one's brain",
    exampleSrc: 'אני שובר את הראש על התרגיל הזה כבר שעה.',
    exampleTr: 'Я вже годину сушу голову над цією задачею.',
  },
  {
    emoji: '🌊',
    phrase: 'לזרום עם הזרם',
    meaning: 'Пливти за течією, не противитися обставинам',
    meaningEn: 'Go with the flow',
    exampleSrc: 'במקום להתעקש, הוא העדיף לזרום עם הזרם.',
    exampleTr: 'Замість того, щоб наполягати, він вирішив пливти за течією.',
  },
  {
    emoji: '🎉',
    phrase: 'סוף הדרך',
    meaning: 'Щось дуже хороше, найкраще (сленг)',
    meaningEn: 'The best thing ever',
    exampleSrc: 'המסיבה הזאת הייתה סוף הדרך!',
    exampleTr: 'Ця вечірка була просто найкращою!',
  },
];

// ── Arabic idioms → Ukrainian + English meaning ────────────────
export const ARABIC_IDIOMS: Idiom[] = [
  {
    emoji: '🐦',
    phrase: 'ضرب عصفورين بحجر واحد',
    meaning: 'Досягти двох цілей одночасно',
    meaningEn: 'Kill two birds with one stone',
    exampleSrc: 'بهذه الخطة، ضربتُ عصفورين بحجر واحد.',
    exampleTr: 'Цим планом я вбив двох зайців одним ударом.',
  },
  {
    emoji: '👀',
    phrase: 'العين بصيرة واليد قصيرة',
    meaning: 'Бачити, чого хочеш, але не могти цього отримати',
    meaningEn: 'So near and yet so far',
    exampleSrc: 'أحب هذه السيارة، لكن العين بصيرة واليد قصيرة.',
    exampleTr: 'Мені дуже подобається ця машина, але оком бачу, а руками не дістану.',
  },
  {
    emoji: '🔨',
    phrase: 'يضرب في حديد بارد',
    meaning: 'Марна, безрезультатна спроба',
    meaningEn: 'Flog a dead horse',
    exampleSrc: 'محاولاته لإصلاح العلاقة كانت كمن يضرب في حديد بارد.',
    exampleTr: 'Його спроби налагодити стосунки були марними, як биття холодного заліза.',
  },
  {
    emoji: '😊',
    phrase: 'حفظ ماء الوجه',
    meaning: 'Зберегти репутацію, не втратити обличчя',
    meaningEn: 'Save face',
    exampleSrc: 'وافق على العرض فقط ليحفظ ماء وجهه.',
    exampleTr: 'Він погодився на пропозицію лише щоб зберегти обличчя.',
  },
  {
    emoji: '🕰️',
    phrase: 'أكل عليه الدهر وشرب',
    meaning: 'Дуже старе, віджиле',
    meaningEn: 'As old as the hills',
    exampleSrc: 'هذا الكمبيوتر قديم جدًا، أكل عليه الدهر وشرب.',
    exampleTr: "Цей комп'ютер дуже старий, йому вже минули всі терміни.",
  },
];

// ── Polish idioms → Ukrainian + English meaning ────────────────
export const POLISH_IDIOMS: Idiom[] = [
  {
    emoji: '🎪',
    phrase: 'Nie mój cyrk, nie moje małpy',
    meaning: 'Не моя справа, мене це не стосується',
    meaningEn: 'Not my problem',
    exampleSrc: 'Mają problem z dostawą? Nie mój cyrk, nie moje małpy.',
    exampleTr: 'У них проблема з доставкою? Не моя справа, мене це не стосується.',
  },
  {
    emoji: '🧱',
    phrase: 'Rzucać grochem o ścianę',
    meaning: 'Говорити в порожнечу, марно намагатися щось довести',
    meaningEn: 'Talk to a brick wall',
    exampleSrc: 'Próbowałem mu to wyjaśnić, ale to jak rzucać grochem o ścianę.',
    exampleTr: 'Я намагався йому це пояснити, але це як говорити в порожнечу.',
  },
  {
    emoji: '🪰',
    phrase: 'Mieć muchy w nosie',
    meaning: 'Бути в поганому настрої, дратівливим',
    meaningEn: 'Be in a bad mood',
    exampleSrc: 'Nie podchodź do niego, dziś ma muchy w nosie.',
    exampleTr: 'Не підходь до нього, сьогодні він у поганому настрої.',
  },
  {
    emoji: '🐶',
    phrase: 'Wiercić komuś dziurę w brzuchu',
    meaning: 'Настирливо просити, приставати з проханнями',
    meaningEn: 'Pester someone',
    exampleSrc: 'Dzieci wierciły mu dziurę w brzuchu, żeby kupił im psa.',
    exampleTr: 'Діти настирливо просили його купити їм собаку.',
  },
  {
    emoji: '🔍',
    phrase: 'Szukać dziury w całym',
    meaning: 'Шукати недоліки там, де їх немає, чіплятися до дрібниць',
    meaningEn: 'Nitpick',
    exampleSrc: 'Zawsze szuka dziury w całym, nawet gdy wszystko jest w porządku.',
    exampleTr: 'Він завжди шукає недоліки, навіть коли все гаразд.',
  },
];

// ── Chinese idioms → Ukrainian + English meaning ───────────────
export const CHINESE_IDIOMS: Idiom[] = [
  {
    emoji: '🏠',
    phrase: '入乡随俗',
    meaning: 'Пристосовуватися до місцевих звичаїв',
    meaningEn: 'When in Rome, do as the Romans do',
    exampleSrc: '到了新的国家，最好入乡随俗。',
    exampleTr: 'Приїхавши в нову країну, краще пристосовуватися до місцевих звичаїв.',
  },
  {
    emoji: '🐍',
    phrase: '画蛇添足',
    meaning: 'Зробити щось зайве, що тільки псує справу',
    meaningEn: 'Gild the lily / overdo it',
    exampleSrc: '这个设计已经很完美了，不要画蛇添足。',
    exampleTr: 'Цей дизайн уже ідеальний, не варто додавати щось зайве.',
  },
  {
    emoji: '🐦',
    phrase: '一举两得',
    meaning: 'Вбити двох зайців одним ударом',
    meaningEn: 'Kill two birds with one stone',
    exampleSrc: '骑自行车上班一举两得，既省钱又锻炼身体。',
    exampleTr:
      'Їздити на роботу велосипедом — вбити двох зайців одним ударом: і гроші заощаджуєш, і тренуєшся.',
  },
  {
    emoji: '🤔',
    phrase: '三心二意',
    meaning: 'Бути нерішучим, неуважним, розпорошувати зусилля',
    meaningEn: 'Be half-hearted / indecisive',
    exampleSrc: '做事不要三心二意，要专心一点。',
    exampleTr: 'Не варто бути нерішучим у справах, потрібно зосередитися.',
  },
  {
    emoji: '😐',
    phrase: '马马虎虎',
    meaning: 'Так собі, абияк, недбало',
    meaningEn: 'So-so / careless',
    exampleSrc: '他的工作态度总是马马虎虎。',
    exampleTr: 'Його ставлення до роботи завжди абияке.',
  },
];

// ── Greek idioms → Ukrainian + English meaning ─────────────────
export const GREEK_IDIOMS: Idiom[] = [
  {
    emoji: '🌧️',
    phrase: 'Βρέχει καρεκλοπόδαρα',
    meaning: 'Дуже сильно йде дощ (буквально «йде дощ ніжками стільців»)',
    meaningEn: "It's raining cats and dogs",
    exampleSrc: 'Μην βγεις έξω, βρέχει καρεκλοπόδαρα!',
    exampleTr: 'Не виходь, надворі ллє як з відра!',
  },
  {
    emoji: '🦆',
    phrase: 'Κάνω την πάπια',
    meaning: 'Прикидатися, що нічого не знаєш',
    meaningEn: 'Play dumb',
    exampleSrc: 'Τον ρώτησα τι έγινε, αλλά έκανε την πάπια.',
    exampleTr: 'Я запитав його, що сталося, але він прикинувся, що нічого не знає.',
  },
  {
    emoji: '🔥',
    phrase: 'Βάζω το χέρι στη φωτιά',
    meaning: 'Бути цілком впевненим у чомусь, гарантувати',
    meaningEn: "I'd bet my life on it",
    exampleSrc: 'Βάζω το χέρι στη φωτιά ότι αυτός είναι αθώος.',
    exampleTr: 'Я готовий поручитися, що він невинний.',
  },
  {
    emoji: '🔎',
    phrase: 'Τρώω τον κόσμο στο ψάξιμο',
    meaning: 'Шукати щось/когось дуже довго й завзято',
    meaningEn: 'Search high and low',
    exampleSrc: 'Έφαγα τον κόσμο στο ψάξιμο για τα κλειδιά μου.',
    exampleTr: 'Я обшукав усе на світі, шукаючи свої ключі.',
  },
  {
    emoji: '🏷️',
    phrase: 'Του βγήκε το όνομα',
    meaning: 'Здобути (погану) репутацію, прізвисько',
    meaningEn: 'Get a reputation',
    exampleSrc: 'Από τότε που έσπασε το βάζο, του βγήκε το όνομα του αδέξιου.',
    exampleTr: 'Відколи він розбив вазу, за ним закріпилася репутація незграбного.',
  },
];

// ── Japanese idioms → Ukrainian + English meaning ──────────────
export const JAPANESE_IDIOMS: Idiom[] = [
  {
    emoji: '🐱',
    phrase: '猫の手も借りたい',
    meaning: 'Дуже зайнятий, не вистачає рук',
    meaningEn: 'So busy I could use any help',
    exampleSrc: '今日は猫の手も借りたいほど忙しい。',
    exampleTr: 'Сьогодні я такий зайнятий, що готовий прийняти будь-яку допомогу.',
  },
  {
    emoji: '🤸',
    phrase: '七転び八起き',
    meaning: 'Падати і знову підніматися, наполегливість',
    meaningEn: 'Fall down seven times, get up eight',
    exampleSrc: '七転び八起きの精神で頑張りましょう。',
    exampleTr: 'Будемо старатися з духом «падай сім разів, підіймайся вісім».',
  },
  {
    emoji: '🙂',
    phrase: '顔が広い',
    meaning: 'Мати багато знайомих, бути товариським',
    meaningEn: 'Be well-connected',
    exampleSrc: '彼は顔が広いから、誰でも知っている。',
    exampleTr: 'У нього багато знайомих, тож він знає всіх.',
  },
  {
    emoji: '🤐',
    phrase: '口が滑る',
    meaning: 'Випадково сказати зайве, проговоритися',
    meaningEn: 'Let something slip',
    exampleSrc: 'つい口が滑って秘密を話してしまった。',
    exampleTr: 'Я мимохіть проговорився і розповів таємницю.',
  },
  {
    emoji: '🍡',
    phrase: '棚から牡丹餅',
    meaning: 'Несподівана удача, щастя, що звалилося само',
    meaningEn: 'Unexpected windfall',
    exampleSrc: '棚から牡丹餅のように、突然賞金が当たった。',
    exampleTr: 'Як несподіваний дарунок з неба, я раптом виграв приз.',
  },
];

// ── Turkish idioms → Ukrainian + English meaning ───────────────
export const TURKISH_IDIOMS: Idiom[] = [
  {
    emoji: '🐦',
    phrase: 'Bir taşla iki kuş vurmak',
    meaning: 'Вбити двох зайців одним ударом',
    meaningEn: 'Kill two birds with one stone',
    exampleSrc: 'Markete giderken ekmek de aldım, bir taşla iki kuş vurdum.',
    exampleTr: 'Йдучи в магазин, я ще й хліба купив — вбив двох зайців одним ударом.',
  },
  {
    emoji: '👂',
    phrase: 'Eli kulağında',
    meaning: 'Щось має статися дуже скоро, на носі',
    meaningEn: 'Just around the corner',
    exampleSrc: 'Sonuçlar eli kulağında, yarın açıklanacak.',
    exampleTr: 'Результати вже на носі, оголосять завтра.',
  },
  {
    emoji: '🌊',
    phrase: 'Dereyi görmeden paçaları sıvamak',
    meaning: 'Діяти завчасно, не оцінивши ситуацію',
    meaningEn: 'Cross a bridge before you come to it',
    exampleSrc: 'Henüz teklif gelmedi, dereyi görmeden paçaları sıvama.',
    exampleTr: 'Пропозиції ще немає, не поспішай діяти завчасно.',
  },
  {
    emoji: '🍐',
    phrase: 'Armut piş ağzıma düş',
    meaning: 'Чекати, що все саме впаде в руки, лінувато сподіватися на готове',
    meaningEn: "Expect things to fall into one's lap",
    exampleSrc: 'Çalışmadan armut piş ağzıma düş diye bekleyemezsin.',
    exampleTr: 'Не можна, не працюючи, чекати, що все саме впаде тобі в руки.',
  },
  {
    emoji: '👁️',
    phrase: 'Gözden ırak olan gönülden de ırak olur',
    meaning: 'Геть з очей, геть з серця/думок',
    meaningEn: 'Out of sight, out of mind',
    exampleSrc: 'Taşındıktan sonra arkadaşlarını unuttu, gözden ırak olan gönülden de ırak olur.',
    exampleTr: 'Переїхавши, він забув про друзів — геть з очей, геть з серця.',
  },
];

// ── Dutch idioms → Ukrainian + English meaning ─────────────────
export const DUTCH_IDIOMS: Idiom[] = [
  {
    emoji: '🐈',
    phrase: 'De kat uit de boom kijken',
    meaning: 'Зачекати і подивитися, перш ніж діяти',
    meaningEn: 'Wait and see',
    exampleSrc: 'Laten we de kat uit de boom kijken voordat we iets besluiten.',
    exampleTr: 'Зачекаймо і подивімося, перш ніж щось вирішувати.',
  },
  {
    emoji: '🚪',
    phrase: 'Met de deur in huis vallen',
    meaning: 'Говорити прямо, без зайвих вступів',
    meaningEn: 'Get straight to the point',
    exampleSrc: 'Ik val meteen met de deur in huis: we moeten praten over je salaris.',
    exampleTr: 'Скажу прямо без зайвих слів: нам потрібно поговорити про твою зарплату.',
  },
  {
    emoji: '🌱',
    phrase: 'Boontje komt om zijn loontje',
    meaning: 'Що посієш, те й пожнеш',
    meaningEn: 'You reap what you sow',
    exampleSrc: 'Hij loog steeds en nu vertrouwt niemand hem meer — boontje komt om zijn loontje.',
    exampleTr: 'Він постійно брехав, і тепер йому ніхто не вірить — що посієш, те й пожнеш.',
  },
  {
    emoji: '🍎',
    phrase: 'Een appeltje voor de dorst',
    meaning: 'Заощадження на майбутнє, на чорний день',
    meaningEn: 'Save for a rainy day',
    exampleSrc: 'Ze legt elke maand wat geld opzij als appeltje voor de dorst.',
    exampleTr: 'Вона щомісяця відкладає трохи грошей на чорний день.',
  },
  {
    emoji: '🇫🇷',
    phrase: 'Iets met de Franse slag doen',
    meaning: 'Робити щось абияк, поверхово, недбало',
    meaningEn: 'Do a slapdash job',
    exampleSrc: 'Hij deed zijn huiswerk met de Franse slag.',
    exampleTr: 'Він зробив домашнє завдання абияк.',
  },
];

export const VIETNAMESE_IDIOMS: Idiom[] = [
  {
    emoji: '🐟',
    phrase: 'Cá lớn nuốt cá bé',
    meaning: 'Сильний перемагає слабшого',
    meaningEn: 'Big fish eat small fish',
    exampleSrc: 'Trên thị trường, cá lớn nuốt cá bé là chuyện thường thấy.',
    exampleTr: 'На ринку сильний перемагає слабшого — це звична справа.',
  },
  {
    emoji: '🍚',
    phrase: 'Một nắng hai sương',
    meaning: 'Важка, виснажлива праця',
    meaningEn: 'Toil under sun and dew',
    exampleSrc: 'Cha mẹ tôi một nắng hai sương để nuôi chúng tôi ăn học.',
    exampleTr: 'Мої батьки важко працювали, щоб виростити й вивчити нас.',
  },
  {
    emoji: '🐍',
    phrase: 'Vẽ rắn thêm chân',
    meaning: 'Робити щось зайве, псуючи результат',
    meaningEn: "Draw legs on a snake (gild the lily)",
    exampleSrc: 'Đừng sửa thêm nữa, vẽ rắn thêm chân đấy.',
    exampleTr: 'Не переробляй далі, це вже зайве — тільки зіпсуєш.',
  },
  {
    emoji: '🌧️',
    phrase: 'Chưa đỗ ông nghè đã đe hàng tổng',
    meaning: 'Хвалитися ще до досягнення успіху',
    meaningEn: "Count your chickens before they hatch",
    exampleSrc: 'Đừng chưa đỗ ông nghè đã đe hàng tổng, kết quả chưa có mà.',
    exampleTr: 'Не хвались наперед, результатів іще немає.',
  },
  {
    emoji: '🏠',
    phrase: 'An cư lạc nghiệp',
    meaning: 'Мати стабільне житло — основа спокійного життя й роботи',
    meaningEn: 'Settle down to prosper',
    exampleSrc: 'Có nhà riêng rồi, gia đình tôi mới an cư lạc nghiệp.',
    exampleTr: 'Тепер, маючи власне житло, моя сім’я нарешті влаштувалася й спокійно живе.',
  },
];

// ── Idioms per language ─────────────────────────────────────────
export const IDIOMS_BY_LANG: Partial<
  Record<Lang | 'he' | 'ar' | 'pl' | 'zh' | 'el' | 'ja' | 'tr' | 'nl' | 'vi', Idiom[]>
> = {
  en: ENGLISH_IDIOMS,
  ua: UKRAINIAN_IDIOMS,
  es: SPANISH_IDIOMS,
  fr: FRENCH_IDIOMS,
  it: ITALIAN_IDIOMS,
  pt: PORTUGUESE_IDIOMS,
  de: GERMAN_IDIOMS,
  he: HEBREW_IDIOMS,
  ar: ARABIC_IDIOMS,
  pl: POLISH_IDIOMS,
  zh: CHINESE_IDIOMS,
  el: GREEK_IDIOMS,
  ja: JAPANESE_IDIOMS,
  tr: TURKISH_IDIOMS,
  nl: DUTCH_IDIOMS,
  vi: VIETNAMESE_IDIOMS,
};
