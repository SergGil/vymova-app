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
