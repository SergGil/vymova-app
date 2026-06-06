// scripts/add-words.mjs
// Merges NEW_WORDS into data/words.js, deduplicates, sorts alphabetically, writes back.
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dir = dirname(fileURLToPath(import.meta.url));
const wordsPath = join(__dir, '../data/words.js');

// ── New words to add ─────────────────────────────────────────
// Format: [english, ukrainian, example_en, example_ua, ipa]
const NEW_WORDS = [
  // ── A1 basics ────────────────────────────────────────────────
  ["above","вище, над","The plane flew above the clouds for hours.","Літак летів вище хмар кілька годин.","/əˈbʌv/"],
  ["after","після","Let's meet for coffee after work today.","Давай зустрінемося на каву після роботи сьогодні.","/ˈɑːftər/"],
  ["again","знову","Please say that again — I didn't hear you.","Скажи це знову — я тебе не чув.","/əˈɡen/"],
  ["ago","тому","She moved to London three years ago.","Вона переїхала до Лондона три роки тому.","/əˈɡəʊ/"],
  ["all","весь, всі","All the students passed the final exam.","Всі студенти здали фінальний іспит.","/ɔːl/"],
  ["also","також","He speaks French and also knows some Italian.","Він розмовляє французькою і також знає трохи італійської.","/ˈɔːlsəʊ/"],
  ["always","завжди","She always drinks a cup of tea in the morning.","Вона завжди п'є чашку чаю вранці.","/ˈɔːlweɪz/"],
  ["answer","відповідь, відповідати","Please answer the question in complete sentences.","Будь ласка, відповідай на питання повними реченнями.","/ˈɑːnsər/"],
  ["any","будь-який, жодний","Do you have any questions before we begin?","У вас є будь-які запитання перед початком?","/ˈeni/"],
  ["ask","запитувати","Don't be afraid to ask for help when you need it.","Не бійся просити про допомогу, коли вона тобі потрібна.","/ɑːsk/"],
  ["away","далеко, геть","The nearest supermarket is only five minutes away.","Найближчий супермаркет лише за п'ять хвилин.","/əˈweɪ/"],
  ["bad","поганий","The weather was so bad that we stayed inside all day.","Погода була настільки погана, що ми провели весь день вдома.","/bæd/"],
  ["ball","м'яч","The children kicked the ball around the garden.","Діти ганяли м'яч по саду.","/bɔːl/"],
  ["because","тому що","I stayed home because I was feeling sick.","Я залишився вдома, тому що погано себе почував.","/bɪˈkɒz/"],
  ["big","великий","They live in a big house near the park.","Вони живуть у великому будинку біля парку.","/bɪɡ/"],
  ["black","чорний","She always wears black clothes to work.","Вона завжди носить чорний одяг на роботу.","/blæk/"],
  ["blue","синій, блакитний","The sky is a beautiful clear blue today.","Небо сьогодні прекрасне і ясно-блакитне.","/bluː/"],
  ["bread","хліб","She baked fresh bread every morning for the family.","Вона пекла свіжий хліб щоранку для родини.","/bred/"],
  ["brown","коричневий","He has brown hair and green eyes.","У нього коричневе волосся і зелені очі.","/braʊn/"],
  ["call","дзвонити, називати","I'll call you tomorrow morning to confirm the plan.","Я подзвоню тобі завтра вранці, щоб підтвердити план.","/kɔːl/"],
  ["class","клас, урок","The class starts at nine o'clock every weekday.","Урок починається о дев'ятій щодня крім вихідних.","/klɑːs/"],
  ["clean","чистий, прибирати","Please keep your room clean and tidy at all times.","Будь ласка, тримай свою кімнату чистою і охайною.","/kliːn/"],
  ["clock","годинник","The clock on the wall shows the wrong time.","Годинник на стіні показує неправильний час.","/klɒk/"],
  ["close","закривати, близький","Please close the window — it's getting cold.","Будь ласка, закрий вікно — стає холодно.","/kləʊz/"],
  ["come","приходити, приїжджати","Can you come to the party on Saturday evening?","Ти можеш прийти на вечірку в суботу ввечері?","/kʌm/"],
  ["cut","різати, скорочувати","Be careful when you cut vegetables with a sharp knife.","Будь обережним, коли ріжеш овочі гострим ножем.","/kʌt/"],
  ["dad","тато","My dad taught me how to ride a bicycle.","Мій тато навчив мене їздити на велосипеді.","/dæd/"],
  ["door","двері","Please lock the door when you leave the house.","Будь ласка, замкни двері, коли виходиш з дому.","/dɔːr/"],
  ["down","вниз, донизу","The cat jumped down from the high shelf.","Кіт зістрибнув вниз з високої полиці.","/daʊn/"],
  ["draw","малювати, рисувати","She loves to draw portraits of her friends.","Вона обожнює малювати портрети своїх друзів.","/drɔː/"],
  ["drink","пити, напій","Would you like something to drink with your meal?","Бажаєте щось випити до їжі?","/drɪŋk/"],
  ["drive","їздити, водити","He learned to drive a car when he was eighteen.","Він навчився водити машину, коли йому було вісімнадцять.","/draɪv/"],
  ["eat","їсти","We usually eat dinner together as a family.","Ми зазвичай їмо вечерю разом як родина.","/iːt/"],
  ["egg","яйце","I had two fried eggs for breakfast this morning.","Сьогодні вранці я з'їв два яйця на сніданок.","/eɡ/"],
  ["eight","вісім","The meeting starts at eight o'clock in the morning.","Нарада починається о восьмій годині ранку.","/eɪt/"],
  ["enjoy","насолоджуватися","I really enjoy reading books on rainy afternoons.","Я дуже люблю читати книги в дощові пополудні.","/ɪnˈdʒɔɪ/"],
  ["every","кожен, кожна","She goes for a walk every morning before breakfast.","Вона ходить на прогулянку щоранку перед сніданком.","/ˈevri/"],
  ["far","далеко, далекий","Is the train station far from the city centre?","Чи далеко залізнична станція від центру міста?","/fɑːr/"],
  ["fast","швидкий, швидко","The cheetah is the fastest land animal in the world.","Гепард — найшвидша наземна тварина у світі.","/fɑːst/"],
  ["feel","відчувати, почуватися","I feel much better after a good night's sleep.","Я почуваюся набагато краще після хорошого нічного сну.","/fiːl/"],
  ["find","знаходити","Can you help me find my keys? I lost them again.","Можеш допомогти мені знайти ключі? Я знову їх загубив.","/faɪnd/"],
  ["five","п'ять","We have five minutes left before the class ends.","У нас залишилося п'ять хвилин до кінця уроку.","/faɪv/"],
  ["food","їжа","This restaurant serves excellent food at fair prices.","Цей ресторан подає чудову їжу за помірними цінами.","/fuːd/"],
  ["four","чотири","The package should arrive in four to five business days.","Посилка має прийти за чотири-п'ять робочих дні.","/fɔːr/"],
  ["fruit","фрукт","Eating fresh fruit every day is good for your health.","Їсти свіжі фрукти щодня корисно для здоров'я.","/fruːt/"],
  ["fun","веселощі, цікавий","We had so much fun at the beach last weekend.","Ми так добре повеселилися на пляжі минулого вікенду.","/fʌn/"],
  ["game","гра","The children played a board game after dinner.","Діти зіграли в настільну гру після вечері.","/ɡeɪm/"],
  ["give","давати, подарувати","Please give me a few minutes to think about it.","Будь ласка, дай мені кілька хвилин подумати.","/ɡɪv/"],
  ["go","йти, їхати","Let's go to the cinema tonight — there's a great film.","Ходімо в кіно сьогодні ввечері — там чудовий фільм.","/ɡəʊ/"],
  ["good","хороший, добрий","She is a very good teacher who explains clearly.","Вона дуже хороший вчитель, який пояснює зрозуміло.","/ɡʊd/"],
  ["great","чудовий, великий","That was a great idea — everyone loved it.","Це була чудова ідея — всім вона сподобалась.","/ɡreɪt/"],
  ["green","зелений","The park is full of beautiful green trees in summer.","Парк влітку повний красивих зелених дерев.","/ɡriːn/"],
  ["grow","рости, вирощувати","Children grow so fast — she's already taller than me.","Діти ростуть так швидко — вона вже вища за мене.","/ɡrəʊ/"],
  ["head","голова","She shook her head to say no to the offer.","Вона похитала головою на знак відмови від пропозиції.","/hed/"],
  ["hear","чути","I can't hear you — please speak a little louder.","Я не чую тебе — говори, будь ласка, трохи голосніше.","/hɪər/"],
  ["hello","привіт","Hello! My name is Anna. Nice to meet you.","Привіт! Мене звати Анна. Приємно познайомитися.","/həˈləʊ/"],
  ["help","допомагати, допомога","Could you please help me carry these heavy bags?","Чи не міг би ти допомогти мені нести ці важкі сумки?","/help/"],
  ["here","тут, сюди","Please come here and look at this together.","Будь ласка, підійди сюди і подивися на це разом зі мною.","/hɪər/"],
  ["high","високий, вгорі","The eagle flew high above the mountain peaks.","Орел летів високо над вершинами гір.","/haɪ/"],
  ["hot","гарячий, спекотний","It's too hot to go outside in the afternoon today.","Сьогодні вдень надто спекотно, щоб виходити надвір.","/hɒt/"],
  ["jump","стрибати, стрибок","The dog jumped over the fence with ease.","Пес легко перестрибнув через паркан.","/dʒʌmp/"],
  ["keep","тримати, зберігати","Please keep this information private — don't tell anyone.","Будь ласка, тримай цю інформацію в секреті.","/kiːp/"],
  ["know","знати","Do you know where the nearest pharmacy is?","Ти знаєш, де знаходиться найближча аптека?","/nəʊ/"],
  ["learn","вчитися, дізнаватися","It takes time to learn a new language well.","Потрібен час, щоб добре вивчити нову мову.","/lɜːrn/"],
  ["let","дозволяти, дати змогу","Let me know if you need any help with the project.","Дай мені знати, якщо тобі потрібна допомога з проектом.","/let/"],
  ["light","світло, легкий","Please turn on the light — it's getting dark outside.","Увімкни, будь ласка, світло — надворі темніє.","/laɪt/"],
  ["listen","слухати","Please listen carefully to the instructions before you start.","Будь ласка, уважно прослухай інструкції перед початком.","/ˈlɪsən/"],
  ["little","маленький, трохи","A little patience goes a long way in difficult situations.","Трохи терпіння допомагає в складних ситуаціях.","/ˈlɪtl/"],
  ["live","жити","They live in a small apartment near the city centre.","Вони живуть у маленькій квартирі біля центру міста.","/lɪv/"],
  ["long","довгий, довго","The meeting was so long that everyone felt tired.","Нарада була настільки довгою, що всі втомилися.","/lɒŋ/"],
  ["meat","м'ясо","I don't eat meat — I've been a vegetarian for five years.","Я не їм м'яса — я вегетаріанець вже п'ять років.","/miːt/"],
  ["meet","зустрічати, познайомитися","I'd love to meet your family at the party.","Я б хотів познайомитися з твоєю родиною на вечірці.","/miːt/"],
  ["nice","приємний, гарний","What a nice surprise — I didn't expect to see you here!","Який приємний сюрприз — я не очікував тебе тут побачити!","/naɪs/"],
  ["nine","дев'ять","The library closes at nine o'clock in the evening.","Бібліотека зачиняється о дев'ятій годині вечора.","/naɪn/"],
  ["number","число, номер","Can I have your phone number so I can call you?","Можеш дати мені свій номер телефону, щоб я міг зателефонувати?","/ˈnʌmbər/"],
  ["old","старий, літній","My grandmother is eighty years old and still very active.","Моїй бабусі вісімдесят років, і вона все ще дуже активна.","/əʊld/"],
  ["open","відкривати, відкритий","Please open the window — the room needs some fresh air.","Будь ласка, відкрий вікно — в кімнаті потрібно свіже повітря.","/ˈəʊpən/"],
  ["orange","апельсин, помаранчевий","She drinks a glass of fresh orange juice every morning.","Вона щоранку п'є склянку свіжовичавленого апельсинового соку.","/ˈɒrɪndʒ/"],
  ["page","сторінка","Please turn to page fifteen in your textbook now.","Будь ласка, відкрийте п'ятнадцяту сторінку у вашому підручнику.","/peɪdʒ/"],
  ["pen","ручка","Could I borrow your pen to sign this document?","Можу я позичити твою ручку, щоб підписати цей документ?","/pen/"],
  ["picture","картина, фото","She painted a beautiful picture of the sunset.","Вона намалювала красиву картину заходу сонця.","/ˈpɪktʃər/"],
  ["play","грати, п'єса","The children love to play outside after school.","Діти люблять гратися надворі після школи.","/pleɪ/"],
  ["police","поліція","The police arrived at the scene within minutes.","Поліція прибула на місце події за кілька хвилин.","/pəˈliːs/"],
  ["rain","дощ, іти (про дощ)","It started to rain just as we left the house.","Почався дощ якраз тоді, коли ми вийшли з дому.","/reɪn/"],
  ["read","читати","I like to read a chapter of my book before bed.","Я люблю читати розділ книги перед сном.","/riːd/"],
  ["red","червоний","She wore a beautiful red dress to the party.","Вона прийшла на вечірку в красивій червоній сукні.","/red/"],
  ["ride","їхати, кататися","I ride my bicycle to work every day to stay fit.","Я щодня їжджу на роботу на велосипеді, щоб бути у формі.","/raɪd/"],
  ["road","дорога","The road was closed because of roadworks for a week.","Дорогу перекрили через дорожні роботи на тиждень.","/rəʊd/"],
  ["room","кімната","The hotel room had a wonderful view of the ocean.","Готельний номер мав чудовий вид на океан.","/ruːm/"],
  ["run","бігти, бігати","She runs five kilometres every morning before breakfast.","Вона бігає п'ять кілометрів щоранку до сніданку.","/rʌn/"],
  ["say","говорити, казати","What did she say about the new project plan?","Що вона сказала про новий план проекту?","/seɪ/"],
  ["see","бачити","Can you see the mountains from your apartment window?","Чи видно гори з вікна твоєї квартири?","/siː/"],
  ["seven","сім","There are seven days in a week and four weeks in a month.","У тижні сім днів і чотири тижні в місяці.","/ˈsevən/"],
  ["short","короткий, невисокий","The film was only ninety minutes — quite short for a thriller.","Фільм тривав лише дев'яносто хвилин — досить коротко для трилера.","/ʃɔːrt/"],
  ["sing","співати","She sings in a local choir every weekend.","Вона співає в місцевому хорі кожні вихідні.","/sɪŋ/"],
  ["six","шість","We need six chairs for the dinner table tonight.","Нам потрібно шість стільців для обіднього столу сьогодні ввечері.","/sɪks/"],
  ["sleep","спати, сон","Adults need at least seven to eight hours of sleep.","Дорослим потрібно принаймні сім-вісім годин сну.","/sliːp/"],
  ["small","маленький, невеликий","The café is small but very cosy and welcoming.","Кав'ярня маленька, але дуже затишна і привітна.","/smɔːl/"],
  ["smile","посміхатися, посмішка","Her warm smile made everyone feel welcome immediately.","Її тепла посмішка змусила всіх відразу відчути себе бажаними.","/smaɪl/"],
  ["snow","сніг, іти (про сніг)","It snowed all night and the streets were completely white.","Сніг ішов усю ніч, і вулиці стали повністю білими.","/snəʊ/"],
  ["sport","спорт","Playing sport regularly is great for your health.","Регулярні заняття спортом чудово впливають на здоров'я.","/spɔːrt/"],
  ["spring","весна","The flowers begin to bloom in spring after the long winter.","Квіти починають цвісти навесні після довгої зими.","/sprɪŋ/"],
  ["star","зірка","You can see thousands of stars in the sky on a clear night.","В ясну ніч на небі можна побачити тисячі зірок.","/stɑːr/"],
  ["stay","залишатися","Would you like to stay for dinner with us tonight?","Хочеш залишитися на вечерю з нами сьогодні?","/steɪ/"],
  ["stop","зупинятися, зупинка","The bus stops right outside the school entrance.","Автобус зупиняється прямо біля входу до школи.","/stɒp/"],
  ["strong","сильний, міцний","You need to be strong both mentally and physically.","Потрібно бути сильним як розумово, так і фізично.","/strɒŋ/"],
  ["sugar","цукор","Do you take sugar in your coffee or do you drink it black?","Ти кладеш цукор у каву чи п'єш її без цукру?","/ˈʃʊɡər/"],
  ["swim","плавати, купатися","She learned to swim when she was only four years old.","Вона навчилася плавати, коли їй було лише чотири роки.","/swɪm/"],
  ["talk","розмовляти, говорити","We need to talk about what happened at the meeting.","Нам потрібно поговорити про те, що сталося на нараді.","/tɔːk/"],
  ["tall","високий","He is the tallest player on the basketball team.","Він найвищий гравець у баскетбольній команді.","/tɔːl/"],
  ["ten","десять","I'll be ready in ten minutes — just give me a moment.","Я буду готовий через десять хвилин — дай мені хвилинку.","/ten/"],
  ["think","думати, вважати","I think we should leave early to avoid the traffic.","Я думаю, що нам варто виїхати раніше, щоб уникнути пробок.","/θɪŋk/"],
  ["three","три","She has lived in three different countries in her life.","Вона жила у трьох різних країнах протягом свого життя.","/θriː/"],
  ["today","сьогодні","Today is a perfect day to go for a walk in the park.","Сьогодні ідеальний день для прогулянки в парку.","/təˈdeɪ/"],
  ["together","разом","Let's work together to find the best solution.","Давай працювати разом, щоб знайти найкраще рішення.","/təˈɡeðər/"],
  ["town","місто (невелике)","She grew up in a small town in the countryside.","Вона виросла в маленькому містечку в сільській місцевості.","/taʊn/"],
  ["try","намагатися, спробувати","Always try your best even when things feel difficult.","Завжди намагайся робити все від тебе можливе навіть у складних ситуаціях.","/traɪ/"],
  ["two","два","She has two brothers and one younger sister.","У неї два брати і одна молодша сестра.","/tuː/"],
  ["umbrella","парасоля","Don't forget to take your umbrella — it looks like rain.","Не забудь взяти парасолю — схоже, буде дощ.","/ʌmˈbrelə/"],
  ["walk","ходити, прогулянка","We went for a long walk along the river on Sunday.","Ми пішли на довгу прогулянку вздовж річки в неділю.","/wɔːk/"],
  ["white","білий","She wrote on the whiteboard with a blue marker pen.","Вона писала на дошці синім маркером.","/waɪt/"],
  ["window","вікно","The cat likes to sit by the window and watch birds.","Кіт любить сидіти біля вікна і спостерігати за птахами.","/ˈwɪndəʊ/"],
  ["word","слово","I learned a new word in English every day this month.","Цього місяця я вивчав нове англійське слово щодня.","/wɜːrd/"],
  ["work","працювати, робота","She works hard every day to achieve her goals.","Вона щодня наполегливо працює, щоб досягти своїх цілей.","/wɜːrk/"],
  ["world","світ","Travelling the world is her biggest dream in life.","Подорожувати світом — її найбільша мрія в житті.","/wɜːrld/"],
  ["write","писати","She writes in her diary every evening before bed.","Вона щовечора пише у своєму щоденнику перед сном.","/raɪt/"],
  ["yellow","жовтий","The sunflowers in the field were bright yellow.","Соняшники на полі були яскраво-жовтими.","/ˈjeləʊ/"],
  ["young","молодий","He is young but very experienced for his age.","Він молодий, але дуже досвідчений для свого віку.","/jʌŋ/"],
  ["zero","нуль, нуль","The temperature dropped to zero degrees overnight.","Температура вночі опустилася до нуля градусів.","/ˈzɪərəʊ/"],
];

// ── Read & parse current words.js ─────────────────────────────
const raw = readFileSync(wordsPath, 'utf8');
// File format: export const W=[...];
const startIdx = raw.indexOf('[');
const endIdx   = raw.lastIndexOf(']') + 1;
const arrStr   = raw.slice(startIdx, endIdx);
const current  = JSON.parse(arrStr);

// ── Merge (deduplicate by lowercase english) ──────────────────
const existingSet = new Set(current.map(w => w[0].toLowerCase()));
const toAdd = NEW_WORDS.filter(w => !existingSet.has(w[0].toLowerCase()));

const merged = [...current, ...toAdd];

// ── Sort alphabetically by english word ───────────────────────
merged.sort((a, b) => a[0].toLowerCase().localeCompare(b[0].toLowerCase()));

// ── Write back ────────────────────────────────────────────────
const prefix = raw.slice(0, startIdx);
const suffix = raw.slice(endIdx);
const newContent = prefix + JSON.stringify(merged) + suffix;
writeFileSync(wordsPath, newContent, 'utf8');

console.log(`✅ Added ${toAdd.length} new words (skipped ${NEW_WORDS.length - toAdd.length} duplicates).`);
console.log(`📚 Total words now: ${merged.length}`);
if (toAdd.length > 0) {
  console.log('New words added:', toAdd.map(w => w[0]).join(', '));
}
