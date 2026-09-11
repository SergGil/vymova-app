// Vymova — data/grammar-data/grammar_lb.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_LB: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Perséinlech Pronomen — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Люксембурзька — західногерманська мова, близька до діалектів прирейнської Німеччини.",
            "en": {
              "text": "Luxembourgish is a West Germanic language, close to dialects of the German Rhineland."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ech"
              ],
              [
                "ти (зв. / ввічл.)",
                "du / Dir"
              ],
              [
                "він / вона / воно",
                "hie / si / hatt"
              ],
              [
                "ми",
                "mir"
              ],
              [
                "ви",
                "dir"
              ],
              [
                "вони",
                "si"
              ]
            ],
            "en": {
              "title": "Personal Pronouns"
            }
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      },
      {
        "id": "eifeler-regel",
        "title": "Eifeler Regel (n-Tilgung) — A1",
        "emoji": "✂️",
        "sections": [
          {
            "type": "intro",
            "text": "Айфельське правило — фонетичне й орфографічне правило: кінцеве -n у словах як an, an, mengen, kengen випадає перед більшістю приголосних і в кінці фрази, але зберігається перед голосними та h/n/d/t/z.",
            "en": {
              "text": "The Eifel Rule is a phonetic and spelling rule: the final -n of words like an, mengen, kengen drops before most consonants and at the end of a phrase, but is kept before vowels and h/n/d/t/z."
            }
          },
          {
            "type": "table",
            "title": "Коли -n зникає",
            "rows": [
              [
                "e Mann (перед M — зникає)",
                "чоловік"
              ],
              [
                "an Däitschland (перед D — залишається)",
                "у Німеччині"
              ],
              [
                "mä Mamm (mäin → mä перед M)",
                "моя мама"
              ]
            ],
            "en": {
              "title": "When -n Drops"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ech kommen aus Lëtzebuerg.",
                "Я з Люксембургу."
              ],
              [
                "E Mann steet do.",
                "Там стоїть чоловік."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Eifel Rule (n-Dropping) — A1"
      },
      {
        "id": "prestamos-franseses",
        "title": "Franséisch Wierder — A2",
        "emoji": "🇫🇷",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від літературної німецької, люксембурзька рясніє французькими запозиченнями в побутовій, адміністративній і кулінарній лексиці — наслідок століть впливу Франції на Великий Герцогство.",
            "en": {
              "text": "Unlike standard German, Luxembourgish is full of French loanwords in everyday, administrative, and culinary vocabulary — the result of centuries of French influence on the Grand Duchy."
            }
          },
          {
            "type": "table",
            "title": "Приклади французьких запозичень",
            "rows": [
              [
                "Trottoir (тротуар)",
                "з французької, не з німецької Bürgersteig"
              ],
              [
                "Kompliment (комплімент)",
                "пряме французьке запозичення"
              ],
              [
                "Forschette (виделка)",
                "з фр. fourchette, не з нім. Gabel"
              ]
            ],
            "en": {
              "title": "French Loanword Examples"
            }
          }
        ],
        "titleEn": "French Loanwords — A2"
      },
      {
        "id": "ortografia-1999",
        "title": "Orthografiereform 1999 — B1",
        "emoji": "✍️",
        "sections": [
          {
            "type": "intro",
            "text": "Офіційний правопис люксембурзької був стандартизований лише 1999 року — набагато пізніше, ніж у сусідніх мов, тому писемна норма молодша за саму мову на кілька століть.",
            "en": {
              "text": "The official Luxembourgish spelling was only standardized in 1999 — much later than neighboring languages, so the written norm is centuries younger than the language itself."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "D'Lëtzebuerger Sprooch gouf 1999 offiziell festgeluecht.",
                "Люксембурзьку мову офіційно закріпили 1999 року."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The 1999 Spelling Reform — B1"
      },
      {
        "id": "negasion-i-preguntas",
        "title": "Negatioun a Froen — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється часткою net, що зазвичай стоїть після дієслова чи прямого додатка; питання без питального слова утворюються інверсією підмета й дієслова, як у німецькій.",
            "en": {
              "text": "Negation uses the particle net, usually placed after the verb or direct object; yes/no questions are formed by subject-verb inversion, as in German."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ech verstinn net.",
                "Я не розумію."
              ],
              [
                "Kënns du haut?",
                "Ти прийдеш сьогодні?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation and Questions — A1"
      }
    ]
  },
  {
    "id": "tenses",
    "title": "Часи та способи дієслова",
    "titleEn": "Tenses & Moods",
    "emoji": "⏰",
    "rules": [
      {
        "id": "presenz",
        "title": "Presenz — A1",
        "emoji": "☀️",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній час утворюється закінченнями, що узгоджуються з особою; друга й третя особа однини часто збігаються за формою.",
            "en": {
              "text": "The present tense is formed with person-agreeing endings; second and third person singular often share the same form."
            }
          },
          {
            "type": "table",
            "title": "maachen (робити) у теперішньому часі",
            "rows": [
              [
                "ech maachen / du méchs / hie mécht",
                "я роблю / ти робиш / він робить"
              ],
              [
                "mir maachen / dir maacht / si maachen",
                "ми робимо / ви робите / вони роблять"
              ]
            ],
            "en": {
              "title": "maachen (to do) in the present"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ech maachen d'Aarbecht.",
                "Я роблю роботу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Tense — A1"
      },
      {
        "id": "perfekt",
        "title": "Perfekt — A2",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Перфект — панівний минулий час у живій мові, як і в розмовній німецькій: утворюється допоміжним hunn чи sinn плюс дієприкметник минулого часу.",
            "en": {
              "text": "The Perfekt is the dominant past tense in the living language, as in colloquial German: formed with the auxiliary hunn or sinn plus the past participle."
            }
          },
          {
            "type": "table",
            "title": "hunn gemaach",
            "rows": [
              [
                "ech hunn gemaach",
                "я зробив"
              ],
              [
                "mir hunn gemaach",
                "ми зробили"
              ]
            ],
            "en": {
              "title": "hunn gemaach"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ech hunn dat gëschter gemaach.",
                "Я зробив це вчора."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Perfect — A2"
      },
      {
        "id": "preteritum",
        "title": "Präteritum — B2",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Простий минулий час майже вимер у живій мові й уживається лише в допоміжних hunn/sinn і кількох модальних дієсловах — усе інше йде через Perfekt.",
            "en": {
              "text": "The simple past has almost died out in the living language and survives only for the auxiliaries hunn/sinn and a few modal verbs — everything else uses the Perfekt."
            }
          },
          {
            "type": "table",
            "title": "Форми, що вижили",
            "rows": [
              [
                "ech hat (мав) / ech war (був)",
                "форми hunn/sinn у претериті"
              ],
              [
                "ech konnt (міг)",
                "модальне дієслово в претериті"
              ]
            ],
            "en": {
              "title": "Surviving Forms"
            }
          }
        ],
        "titleEn": "Simple Past — B2"
      },
      {
        "id": "plusquamperfekt",
        "title": "Plusquamperfekt — B1",
        "emoji": "⏮️",
        "sections": [
          {
            "type": "intro",
            "text": "Плюсквамперфект описує дію, завершену до іншої минулої дії; утворюється претеритом hunn/sinn плюс дієприкметник.",
            "en": {
              "text": "The pluperfect describes an action completed before another past action; formed with the preterite of hunn/sinn plus the participle."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ech hat scho giess, ier hien koum.",
                "Я вже поїв, перш ніж він прийшов."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Pluperfect — B1"
      },
      {
        "id": "futur",
        "title": "Futur mat wäerten — B1",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється допоміжним wäerten плюс інфінітив, розміщений у кінці речення — синтетичного майбутнього немає.",
            "en": {
              "text": "The future is formed with the auxiliary wäerten plus an infinitive placed at the end of the clause — there's no synthetic future."
            }
          },
          {
            "type": "formula",
            "title": "Формула",
            "rows": [
              [
                "wäerten + інфінітив (в кінці)",
                "ech wäert kommen",
                "я прийду"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ech wäert muer kommen.",
                "Я прийду завтра."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Future with wäerten — B1"
      },
      {
        "id": "futur-ii",
        "title": "Futur II — B2",
        "emoji": "🔜",
        "sections": [
          {
            "type": "intro",
            "text": "Передмайбутній час виражає дію, яка завершиться до певного моменту в майбутньому; утворюється wäerten плюс перфектний інфінітив.",
            "en": {
              "text": "The future perfect expresses an action that will be completed by a certain future point; formed with wäerten plus the perfect infinitive."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Bis dann wäert hien schonn ukomm sinn.",
                "До того часу він уже прибуде."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Future Perfect — B2"
      },
      {
        "id": "kondischonal-mat-geif",
        "title": "Kondischonal mat géif — B1",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб майже завжди утворюється перифразою géif плюс інфінітив, а не синтетичною формою — типова риса люксембурзької дієслівної системи.",
            "en": {
              "text": "The conditional is almost always formed with the periphrasis géif plus infinitive, not a synthetic form — a typical feature of the Luxembourgish verb system."
            }
          },
          {
            "type": "formula",
            "title": "Формула",
            "rows": [
              [
                "géif + інфінітив (в кінці)",
                "ech géif kommen",
                "я прийшов би"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ech géif dat gäre maachen.",
                "Я б залюбки це зробив."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional with géif — B1"
      },
      {
        "id": "imperativ",
        "title": "Imperativ — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб має окрему форму для однини (dropнута дієслівна основа) і форму множини/ввічливості, що збігається з дієсловом другої особи множини.",
            "en": {
              "text": "The imperative has a separate singular form (bare verb stem) and a plural/polite form matching the second-person-plural verb form."
            }
          },
          {
            "type": "table",
            "title": "maachen у наказовому способі",
            "rows": [
              [
                "Maach dat!",
                "Зроби це! (однина)"
              ],
              [
                "Maacht dat!",
                "Зробіть це! (множина/ввічл.)"
              ]
            ],
            "en": {
              "title": "maachen in the imperative"
            }
          }
        ],
        "titleEn": "Imperative — A2"
      },
      {
        "id": "konjunktiv-selten",
        "title": "Konjunktiv (seelen benotzt) — B2",
        "emoji": "🌫️",
        "sections": [
          {
            "type": "intro",
            "text": "Синтетичний кон'юнктив майже зникнув з живої мови й зберігся лише в кількох застиглих виразах — усі решта функцій виконує перифраза géif плюс інфінітив.",
            "en": {
              "text": "The synthetic subjunctive has almost vanished from the living language and survives only in a few fixed expressions — everything else is handled by the géif-plus-infinitive periphrasis."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Et lieft eiser Sprooch! (застиглий вираз)",
                "Хай живе наша мова! (застигла форма)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Subjunctive (Rarely Used) — B2"
      },
      {
        "id": "passiv-mat-ginn",
        "title": "Passiv mat ginn — B1",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Пасив процесу (дія відбувається) утворюється допоміжним ginn плюс дієприкметник — на відміну від пасиву стану з sinn.",
            "en": {
              "text": "The process passive (the action happening) is formed with the auxiliary ginn plus the participle — unlike the state passive with sinn."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "D'Haus gëtt gebaut.",
                "Будинок будується."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Passive with ginn — B1"
      },
      {
        "id": "passiv-zoustand-mat-sinn",
        "title": "Zoustandspassiv mat sinn — B2",
        "emoji": "🏁",
        "sections": [
          {
            "type": "intro",
            "text": "Пасив стану (результат дії) утворюється допоміжним sinn плюс дієприкметник — позначає завершений стан, а не процес.",
            "en": {
              "text": "The state passive (result of an action) is formed with the auxiliary sinn plus the participle — it marks a completed state, not a process."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "D'Haus ass gebaut.",
                "Будинок побудований (готовий)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "State Passive with sinn — B2"
      },
      {
        "id": "ofsonnerbar-verben-am-satz",
        "title": "Ofsonnerbar Verben am Haaptsaz — A2",
        "emoji": "✂️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслова з відокремлюваним префіксом розділяють префікс і основу в головному реченні теперішнього/минулого часу — префікс переноситься в кінець.",
            "en": {
              "text": "Separable-prefix verbs split the prefix from the stem in a present/past main clause — the prefix moves to the end of the clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ech huelen dëst Buch mat.",
                "Я беру цю книгу з собою (mathuelen)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Separable Verbs in the Main Clause — A2"
      },
      {
        "id": "modalverben-plus-infinitiv",
        "title": "Modalverben + Infinitiv — A2",
        "emoji": "🧲",
        "sections": [
          {
            "type": "intro",
            "text": "Модальні дієслова (kënnen, mussen, wëllen, sollen, dierfen) відсилають смисловий інфінітив у кінець речення, як у німецькій рамковій конструкції.",
            "en": {
              "text": "Modal verbs (kënnen, mussen, wëllen, sollen, dierfen) push the meaning-bearing infinitive to the end of the clause, as in the German frame construction."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ech muss haut vill schaffen.",
                "Я мушу сьогодні багато працювати."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Modal Verbs + Infinitive — A2"
      }
    ]
  },
  {
    "id": "grammar",
    "title": "Граматика",
    "titleEn": "Grammar",
    "emoji": "📖",
    "rules": [
      {
        "id": "definitiv-artikel-drai-genren",
        "title": "Definitiven Artikel: dräi Genren — A1",
        "emoji": "📘",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники мають три граматичні роди — чоловічий (den), жіночий (d'), середній (dat) — з окремою формою артикля кожен, на відміну від спрощеного означеного артикля англійської чи французької.",
            "en": {
              "text": "Nouns have three grammatical genders — masculine (den), feminine (d'), neuter (dat) — each with its own article form, unlike the simplified definite article of English or French."
            }
          },
          {
            "type": "table",
            "title": "Означені артиклі",
            "rows": [
              [
                "den Dësch (стіл, ч.р.)",
                "чоловічий рід"
              ],
              [
                "d'Fra (жінка, ж.р.)",
                "жіночий рід"
              ],
              [
                "dat Kand (дитина, с.р.)",
                "середній рід"
              ]
            ],
            "en": {
              "title": "Definite Articles"
            }
          }
        ],
        "titleEn": "Definite Article: Three Genders — A1"
      },
      {
        "id": "indefinit-artikel",
        "title": "Indefinite Artikel — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Неозначений артикль en/eng узгоджується з родом іменника; середній рід використовує ту саму форму, що й чоловічий.",
            "en": {
              "text": "The indefinite article en/eng agrees with the noun's gender; the neuter uses the same form as the masculine."
            }
          },
          {
            "type": "table",
            "title": "Неозначені артиклі",
            "rows": [
              [
                "en Dësch / en Kand (ч./с. рід)",
                "стіл / дитина"
              ],
              [
                "eng Fra (ж. рід)",
                "жінка"
              ]
            ],
            "en": {
              "title": "Indefinite Articles"
            }
          }
        ],
        "titleEn": "Indefinite Article — A1"
      },
      {
        "id": "substantiv-plural-formen",
        "title": "Substantiv-Pluralformen — A2",
        "emoji": "➕",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється по-різному — умлаутом голосної, закінченнями -en/-er/-s чи їхнім поєднанням; єдиного універсального правила немає, як і в німецькій.",
            "en": {
              "text": "The plural is formed in various ways — umlaut of the vowel, endings -en/-er/-s, or a combination; there is no single universal rule, as in German."
            }
          },
          {
            "type": "table",
            "title": "Приклади множини",
            "rows": [
              [
                "d'Kand → d'Kanner",
                "дитина → діти (умлаут + -er)"
              ],
              [
                "den Dësch → d'Dëscher",
                "стіл → столи"
              ],
              [
                "d'Fra → d'Frae",
                "жінка → жінки"
              ]
            ],
            "en": {
              "title": "Plural Examples"
            }
          }
        ],
        "titleEn": "Noun Plural Formation — A2"
      },
      {
        "id": "adjektiv-flexioun-attributiv",
        "title": "Adjektiv-Flexioun (attributiv) — B1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "У ролі означення перед іменником прикметник отримує закінчення, що узгоджуються з родом і числом іменника; у ролі присудка (після ass) прикметник лишається незмінним.",
            "en": {
              "text": "As an attribute before a noun, the adjective takes an ending agreeing with the noun's gender and number; as a predicate (after ass) the adjective stays uninflected."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "e schéinen Dësch (ч.р. + -en)",
                "гарний стіл"
              ],
              [
                "eng schéin Fra (ж.р., без -en)",
                "гарна жінка"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adjective Declension (Attributive) — B1"
      },
      {
        "id": "adjektiv-komparatioun",
        "title": "Adjektiv-Komparatioun — A2",
        "emoji": "⚖️",
        "sections": [
          {
            "type": "intro",
            "text": "Вищий ступінь утворюється суфіксом -er або зворотом méi...wéi; порівняльний зворот вживає wéi (не 'als', на відміну від німецької), що зближує люксембурзьку з нідерландською.",
            "en": {
              "text": "The comparative is formed with the suffix -er or the méi...wéi construction; the comparison particle is wéi (not 'als' as in German), which brings Luxembourgish closer to Dutch."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Hien ass méi grouss wéi ech.",
                "Він вищий за мене."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adjective Comparison — A2"
      },
      {
        "id": "superlativ-mam-artikel",
        "title": "Superlativ mam Artikel — B1",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь утворюється означеним артиклем плюс суфіксом -st, узгодженим з родом.",
            "en": {
              "text": "The superlative is formed with the definite article plus the suffix -st, agreeing in gender."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Hien ass den Ältsten.",
                "Він найстарший."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Superlative with the Article — B1"
      },
      {
        "id": "pronominal-besezert",
        "title": "Besëtzpronomen — A1",
        "emoji": "🏠",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійні займенники mäin/däin/säin узгоджуються з родом предмета володіння й відмінюються, як прикметники, з тими самими атрибутивними закінченнями.",
            "en": {
              "text": "Possessive pronouns mäin/däin/säin agree with the gender of the object possessed and decline like adjectives, with the same attributive endings."
            }
          },
          {
            "type": "table",
            "title": "Присвійні",
            "rows": [
              [
                "mäin Dësch (ч.р.)",
                "мій стіл"
              ],
              [
                "meng Fra (ж.р.)",
                "моя дружина"
              ]
            ],
            "en": {
              "title": "Possessives"
            }
          }
        ],
        "titleEn": "Possessive Pronouns — A1"
      },
      {
        "id": "demonstrativpronomen",
        "title": "Demonstrativpronomen — A2",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Вказівний займенник dëse/dëst/dës ('цей') контрастує з означеним артиклем деен/дат/déi, ужитим наголошено як 'той самий'.",
            "en": {
              "text": "The demonstrative dëse/dëst/dës ('this') contrasts with the definite article deen/dat/déi used with stress to mean 'that one'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Dëse Buch ass gutt.",
                "Ця книга хороша."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Demonstrative Pronouns — A2"
      },
      {
        "id": "perseinlech-pronomen-akkusativ-dativ",
        "title": "Perséinlech Pronomen: Akk. an Dat. — A2",
        "emoji": "🔡",
        "sections": [
          {
            "type": "intro",
            "text": "Особові займенники мають окремі форми знахідного й давального відмінків — mech/mir, dech/dir — на відміну від називного ech/du.",
            "en": {
              "text": "Personal pronouns have separate accusative and dative forms — mech/mir, dech/dir — distinct from the nominative ech/du."
            }
          },
          {
            "type": "table",
            "title": "Відмінки займенників",
            "rows": [
              [
                "ech (наз.) → mech (знах.) → mir (дав.)",
                "я → мене → мені"
              ]
            ],
            "en": {
              "title": "Pronoun Cases"
            }
          }
        ],
        "titleEn": "Personal Pronouns: Accusative and Dative — A2"
      },
      {
        "id": "reflexivpronomen-basis",
        "title": "Reflexivpronomen — A2",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотні дії передаються особовими займенниками у знахідному чи давальному відмінку; окрема форма sech існує тільки для третьої особи.",
            "en": {
              "text": "Reflexive actions use the personal pronoun in the accusative or dative; a dedicated form sech exists only for third person."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Hie wäscht sech.",
                "Він миється."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reflexive Pronouns — A2"
      },
      {
        "id": "relativpronomen",
        "title": "Relativpronomen: wou, dee — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Розмовна люксембурзька часто вживає незмінне wou замість повного набору відмінюваних відносних займенників, особливо в місцевих і часових зворотах.",
            "en": {
              "text": "Spoken Luxembourgish often uses invariant wou instead of a full set of declined relative pronouns, especially in place and time clauses."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "D'Stad wou ech wunnen.",
                "Місто, де я живу."
              ],
              [
                "Deen deen dat gesot huet.",
                "Той, хто це сказав."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Pronouns: wou, dee — B1"
      },
      {
        "id": "froen-mat-froewierder",
        "title": "Froen mat Froewierder — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питальні слова wat, wien, wéini, wéi, firwat завжди виносяться на перше місце в реченні, за яким слідує дієслово (правило другого місця дієслова).",
            "en": {
              "text": "Question words wat, wien, wéini, wéi, firwat always go to the first position in the clause, followed by the verb (verb-second rule)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Wat mécht s du?",
                "Що ти робиш?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Questions with Question Words — A1"
      },
      {
        "id": "preposisiounen-mam-dativ",
        "title": "Präpositiounen mam Dativ — B1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Прийменники mat, vu, no, bei, zu завжди вимагають давального відмінка — жодних винятків, на відміну від змінного набору в німецькій.",
            "en": {
              "text": "The prepositions mat, vu, no, bei, zu always require the dative — no exceptions, unlike German's more variable set."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ech ginn mat mengem Frënd.",
                "Я йду з моїм другом."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Prepositions with the Dative — B1"
      },
      {
        "id": "zwee-wee-preposisiounen",
        "title": "Zwee-Wee-Präpositiounen — B1",
        "emoji": "↔️",
        "sections": [
          {
            "type": "intro",
            "text": "Двобічні прийменники (an, op, ënner...) можуть керувати знахідним відмінком для напрямку чи давальним для місця, як у німецькій — з тим самим протиставленням руху й стану.",
            "en": {
              "text": "Two-way prepositions (an, op, ënner...) can govern the accusative for direction or the dative for location, as in German — with the same movement/state contrast."
            }
          },
          {
            "type": "table",
            "title": "Рух проти стану",
            "rows": [
              [
                "op den Dësch (знах., рух — 'на стіл')",
                "куди — рух"
              ],
              [
                "op dem Dësch (дав., стан — 'на столі')",
                "де — стан"
              ]
            ],
            "en": {
              "title": "Movement vs. State"
            }
          }
        ],
        "titleEn": "Two-Way Prepositions — B1"
      },
      {
        "id": "kardinal-zuelen",
        "title": "Kardinalzuelen — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Кількісні числівники близькі до німецьких, але з люксембурзькою вимовою й записом; одиниці й десятки об'єднуються сполучником an, як у німецькій.",
            "en": {
              "text": "Cardinal numbers are close to German but with Luxembourgish pronunciation and spelling; units and tens are joined with an, as in German."
            }
          },
          {
            "type": "table",
            "title": "Числа",
            "rows": [
              [
                "eent, zwee, dräi",
                "один, два, три"
              ],
              [
                "eenanzwanzeg (21)",
                "двадцять один"
              ]
            ],
            "en": {
              "title": "Numbers"
            }
          }
        ],
        "titleEn": "Cardinal Numbers — A1"
      },
      {
        "id": "ordinal-zuelen",
        "title": "Ordinalzuelen — A2",
        "emoji": "🥇",
        "sections": [
          {
            "type": "intro",
            "text": "Порядкові числівники утворюються суфіксом -t/-ten і завжди узгоджуються з родом іменника як прикметники.",
            "en": {
              "text": "Ordinal numbers are formed with the suffix -t/-ten and always agree with the noun's gender like adjectives."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "den éischte Mount",
                "перший місяць"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ordinal Numbers — A2"
      },
      {
        "id": "konjunktiounen-basis",
        "title": "Konjunktiounen — A1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Сурядні сполучники an, oder, mä не змінюють порядок слів у реченні — дієслово лишається на другому місці.",
            "en": {
              "text": "The coordinating conjunctions an, oder, mä don't change the word order — the verb stays in second position."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ech kommen, mä ech sinn midd.",
                "Я прийду, але я втомлений."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conjunctions — A1"
      },
      {
        "id": "enneronend-konjunktiounen",
        "title": "Ënneronend Konjunktiounen — B1",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Підрядні сполучники datt, well, wann виштовхують дієслово на останнє місце в реченні — ключова відмінність від сурядних сполучників.",
            "en": {
              "text": "Subordinating conjunctions datt, well, wann push the verb to the very end of the clause — the key difference from coordinating conjunctions."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ech weess, datt hien haut kënnt.",
                "Я знаю, що він сьогодні прийде."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Subordinating Conjunctions — B1"
      },
      {
        "id": "wuertstellung-haaptsaz",
        "title": "Wuertstellung am Haaptsaz — B1",
        "emoji": "↔️",
        "sections": [
          {
            "type": "intro",
            "text": "У головному реченні дієслово завжди займає друге місце, незалежно від того, що стоїть на першому — підмет, обставина чи додаток.",
            "en": {
              "text": "In a main clause the verb always occupies second position, regardless of what stands first — the subject, an adverbial, or an object."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Haut kommen ech spéit.",
                "Сьогодні я прийду пізно."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Word Order in the Main Clause — B1"
      },
      {
        "id": "negatioun-plaz-vum-net",
        "title": "Negatioun: d'Plaz vum net — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Частка заперечення net зазвичай стоїть після відмінюваного дієслова й прямого додатка, але перед прийменниковими зворотами й прикметниками.",
            "en": {
              "text": "The negation particle net normally comes after the conjugated verb and the direct object, but before prepositional phrases and adjectives."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ech kennen hien net.",
                "Я його не знаю."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation: Placement of net — A2"
      },
      {
        "id": "kompositioun-mat-bindestrech",
        "title": "Substantivkompositioun — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Складні іменники утворюються приєднанням основ, як у німецькій; граматичний рід усього слова визначає останній компонент.",
            "en": {
              "text": "Compound nouns are formed by joining stems, as in German; the grammatical gender of the whole word is determined by the last component."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "den Dëschluucht (Dësch + Luucht)",
                "настільна лампа"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Noun Compounding — B1"
      },
      {
        "id": "artikelkontraktiounen",
        "title": "Artikelkontraktiounen — B1",
        "emoji": "🔡",
        "sections": [
          {
            "type": "intro",
            "text": "Прийменник і означений артикль часто стягуються в одне слово: an dem → am, op dem → um, fir den → fir'n.",
            "en": {
              "text": "A preposition and the definite article often contract into one word: an dem → am, op dem → um, fir den → fir'n."
            }
          },
          {
            "type": "table",
            "title": "Приклади стягнень",
            "rows": [
              [
                "an dem → am",
                "у (даваль. відмінок)"
              ],
              [
                "op dem → um",
                "на (даваль. відмінок)"
              ]
            ],
            "en": {
              "title": "Contraction Examples"
            }
          }
        ],
        "titleEn": "Article Contractions — B1"
      },
      {
        "id": "modalverben-iwwersiicht",
        "title": "Modalverben: en Iwwersiicht — A2",
        "emoji": "🧲",
        "sections": [
          {
            "type": "intro",
            "text": "Шість модальних дієслів (kënnen, mussen, wëllen, sollen, dierfen, mageng) мають неправильне відмінювання в однині, повністю відмінне від -en/-s/-t.",
            "en": {
              "text": "The six modal verbs (kënnen, mussen, wëllen, sollen, dierfen, mageng) have irregular singular conjugation, entirely different from the -en/-s/-t pattern."
            }
          },
          {
            "type": "table",
            "title": "Приклад: kënnen",
            "rows": [
              [
                "ech kann / du kanns / hie kann",
                "я можу / ти можеш / він може"
              ]
            ],
            "en": {
              "title": "Example: kënnen"
            }
          }
        ],
        "titleEn": "Modal Verbs Overview — A2"
      },
      {
        "id": "adverbien-vun-zaeit-a-plaz",
        "title": "Adverbien vun Zäit a Plaz — A2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Прислівники часу й місця (haut, muer, gëschter, hei, do) зазвичай стоять одразу після дієслова на другому місці, вибудовуючи типовий порядок 'дієслово-час-спосіб-місце'.",
            "en": {
              "text": "Time and place adverbs (haut, muer, gëschter, hei, do) normally stand right after the verb in second position, following the typical 'verb-time-manner-place' order."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ech ginn haut heem.",
                "Я йду сьогодні додому."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adverbs of Time and Place — A2"
      },
      {
        "id": "neutrum-bei-diminutiven-a-persounen",
        "title": "Neutrum bei Diminutiven — B1",
        "emoji": "⚥",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувальні форми на -chen завжди мають середній рід, навіть коли позначають людину жіночої статі — це саме правило застосовується до слова d'Meedchen (дівчина).",
            "en": {
              "text": "Diminutive forms in -chen are always neuter, even when they refer to a female person — the same rule applies to d'Meedchen (girl)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "dat Meedchen (не 'déi Meedchen')",
                "дівчина (середній рід)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Neuter Gender with Diminutives — B1"
      },
      {
        "id": "verlust-vum-genitiv",
        "title": "Verlust vum Genitiv — B2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Родовий відмінок повністю зник з живої мови й замінюється зворотом vun плюс давальний відмінок — на відміну від німецької, яка досі зберігає генітив у писемній мові.",
            "en": {
              "text": "The genitive case has disappeared entirely from the living language and is replaced by vun plus the dative — unlike German, which still keeps the genitive in writing."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "d'Haus vum Papp (не 'des Papps Haus')",
                "дім батька"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Loss of the Genitive — B2"
      },
      {
        "id": "dativ-als-standard-bei-bewegung",
        "title": "Dativ bei Bewegung — B2",
        "emoji": "🚶",
        "sections": [
          {
            "type": "intro",
            "text": "У розмовній мові давальний відмінок часто вживається навіть для напрямку руху, там де літературна німецька вимагала б знахідного — ще один крок далі від німецької відмінкової системи.",
            "en": {
              "text": "In spoken usage the dative is often used even for directional movement, where standard German would require the accusative — one more step away from the German case system."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ech ginn an der Stad. (дав. замість знах.)",
                "Я йду в місто (розмовний варіант)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Dative Extending into Movement — B2"
      },
      {
        "id": "verbcluster-am-nebensaz",
        "title": "Verbcluster am Nebensaz — B2",
        "emoji": "🧱",
        "sections": [
          {
            "type": "intro",
            "text": "У підрядному реченні кілька дієслівних форм (модальне + допоміжне + дієприкметник) нагромаджуються в самому кінці речення одна за одною в чіткому порядку.",
            "en": {
              "text": "In a subordinate clause, several verb forms (modal + auxiliary + participle) stack up at the very end of the clause in a fixed order."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "...datt hien hätt kënne kommen.",
                "...що він міг би прийти."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Verb Clusters in Subordinate Clauses — B2"
      },
      {
        "id": "ofsonnerbar-verben-grammar",
        "title": "Ofsonnerbar Verben: Bildung — B1",
        "emoji": "✂️",
        "sections": [
          {
            "type": "intro",
            "text": "Відокремлювані префікси (mat-, of-, un-, aus-) несуть наголос і в інфінітиві пишуться разом з основою, але відокремлюються в головному реченні теперішнього часу.",
            "en": {
              "text": "Separable prefixes (mat-, of-, un-, aus-) carry the stress and are written together with the stem in the infinitive, but split off in a present-tense main clause."
            }
          },
          {
            "type": "table",
            "title": "Приклад: matbréngen",
            "rows": [
              [
                "matbréngen (інфінітив)",
                "приносити з собою"
              ],
              [
                "Ech bréngen e Kuch mat.",
                "Я приношу пиріг з собою."
              ]
            ],
            "en": {
              "title": "Example: matbréngen"
            }
          }
        ],
        "titleEn": "Separable Verbs: Formation — B1"
      },
      {
        "id": "konjunktiv-ersat-duerch-geif",
        "title": "Konjunktiv duerch géif ersat — B2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Там, де німецька ще вживає синтетичний кон'юнктив II (wäre, hätte, käme), люксембурзька майже завжди вдається до перифрази géif плюс інфінітив — граматична перифрастизація, що пішла далі за німецьку.",
            "en": {
              "text": "Where German still uses the synthetic Konjunktiv II (wäre, hätte, käme), Luxembourgish almost always resorts to the géif-plus-infinitive periphrasis — a grammatical periphrastic shift that has gone further than German."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Wann ech Zäit hätt, géif ech kommen.",
                "Якби я мав час, я б прийшов."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Subjunctive Replaced by géif — B2"
      },
      {
        "id": "et-als-ausdrocksverb",
        "title": "Et als Ausdrocksverb — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Формальний підмет et заповнює першу позицію в реченні, коли справжній підмет винесено далі або відсутній, — подібно до німецького es, але вживається ширше.",
            "en": {
              "text": "The dummy subject et fills the first position in a clause when the real subject is moved elsewhere or absent — similar to German es, but used more widely."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Et reent.",
                "Йде дощ."
              ],
              [
                "Et ass een do, dee mech kennt.",
                "Тут є хтось, хто мене знає."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Et as a Dummy Subject — B1"
      },
      {
        "id": "dir-als-heiflechkeetsform",
        "title": "Dir als Héiflechkeetsform — A2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Ввічлива форма звертання Dir етимологічно є формою другої особи множини — так само, як французьке vous, але з власним, не запозиченим з французької, відмінюванням дієслова.",
            "en": {
              "text": "The polite address form Dir is etymologically the second-person-plural form — parallel to French vous, but with its own verb conjugation, not borrowed from French."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Wéi geet et Iech, Madame?",
                "Як ви почуваєтеся, пані?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Dir as the Polite Form — A2"
      },
      {
        "id": "drai-sproocheg-gesellschaft",
        "title": "Dräisproocheg Gesellschaft — B2",
        "emoji": "🗣️",
        "sections": [
          {
            "type": "intro",
            "text": "Люксембург живе в триглосії: люксембурзька — мова усного спілкування, французька домінує в адміністрації й законах, а німецька — мова початкової освіти й пресси; носій щодня перемикається між трьома.",
            "en": {
              "text": "Luxembourg lives in triglossia: Luxembourgish is the language of spoken communication, French dominates administration and law, and German is the language of early schooling and the press; a speaker switches between all three daily."
            }
          },
          {
            "type": "table",
            "title": "Розподіл функцій",
            "rows": [
              [
                "Lëtzebuergesch — усне спілкування",
                "розмовна сфера"
              ],
              [
                "Franséisch — закони, адміністрація",
                "писемна офіційна сфера"
              ],
              [
                "Däitsch — початкова школа, преса",
                "писемна навчальна сфера"
              ]
            ],
            "en": {
              "title": "Functional Distribution"
            }
          }
        ],
        "titleEn": "Trilingual Society — B2"
      },
      {
        "id": "lehnwierder-aus-daitsch-mat-eegener-phonologie",
        "title": "Lehnwierder aus Däitsch — B1",
        "emoji": "🔊",
        "sections": [
          {
            "type": "intro",
            "text": "Слова, спільні з німецькою, часто вимовляються за власними фонологічними правилами люксембурзької — приголосні й дифтонги систематично зсунуті, тож написання схоже, а звучання інше.",
            "en": {
              "text": "Words shared with German are often pronounced by Luxembourgish's own phonological rules — consonants and diphthongs are systematically shifted, so the spelling looks similar but the sound differs."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Haus (нім.) → Haus, вимовляється як 'Hаус' з іншим дифтонгом",
                "будинок"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "German Loanwords, Own Phonology — B1"
      },
      {
        "id": "gaer-hunn-konstruktioun",
        "title": "Gär hunn: 'gefäult' gewinnt — A2",
        "emoji": "❤️",
        "sections": [
          {
            "type": "intro",
            "text": "'Подобатися' передається буквально зворотом gär hunn — 'радо мати', а не окремим дієсловом типа 'подобатися'; прислівник gär несе все смислове навантаження.",
            "en": {
              "text": "'To like' is expressed literally with gär hunn — 'to gladly have', not a dedicated verb meaning 'to please'; the adverb gär carries the whole semantic weight."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ech hu gär Kaffi.",
                "Мені подобається кава."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The gär hunn Construction — A2"
      },
      {
        "id": "ginn-multifunktioun",
        "title": "Ginn: dräi Bedeitungen — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово ginn виконує три різні функції: самостійне 'давати', допоміжне пасиву процесу й допоміжне для 'ставати/робитися' — контекст визначає, яке значення діє.",
            "en": {
              "text": "The verb ginn performs three distinct functions: standalone 'to give', the process-passive auxiliary, and the auxiliary for 'to become' — context determines which sense applies."
            }
          },
          {
            "type": "table",
            "title": "Три функції ginn",
            "rows": [
              [
                "Ech ginn Iech d'Buch. (давати)",
                "Я даю вам книгу."
              ],
              [
                "D'Haus gëtt gebaut. (пасив)",
                "Будинок будується."
              ],
              [
                "Hie gëtt midd. (ставати)",
                "Він стає втомленим."
              ]
            ],
            "en": {
              "title": "Three Functions of ginn"
            }
          }
        ],
        "titleEn": "Ginn: Three Meanings — B1"
      },
      {
        "id": "pronominaladverbien",
        "title": "Pronominaladverbien — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Прийменникові прислівники dorop, domat, dodrin заміняють прийменник плюс займенник третьої особи, коли йдеться про неживий предмет, — пряма паралель до німецьких darauf/damit.",
            "en": {
              "text": "Pronominal adverbs dorop, domat, dodrin replace a preposition plus a third-person pronoun when referring to an inanimate thing — a direct parallel to German darauf/damit."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ech denken dorunner.",
                "Я думаю про це."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Pronominal Adverbs — B2"
      },
      {
        "id": "adjektiv-nemmen-attributiv-flekteiert",
        "title": "Adjektiv nëmmen attributiv flektéiert — B1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник отримує відмінювані закінчення тільки перед іменником (атрибутивно); у ролі присудка після ass він завжди лишається в базовій незмінній формі — чітке розмежування двох позицій.",
            "en": {
              "text": "An adjective takes declined endings only before a noun (attributively); as a predicate after ass it always stays in its bare uninflected form — a clean split between the two positions."
            }
          },
          {
            "type": "table",
            "title": "Дві позиції",
            "rows": [
              [
                "e schéinen Dag (атрибутивно, з -en)",
                "гарний день"
              ],
              [
                "De Dag ass schéin. (присудок, без закінчення)",
                "День гарний."
              ]
            ],
            "en": {
              "title": "Two Positions"
            }
          }
        ],
        "titleEn": "Adjectives Inflected Only Attributively — B1"
      },
      {
        "id": "reflexivpronomen-just-3-persoun",
        "title": "Reflexivpronomen: nëmmen 3. Persoun — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Окрема зворотна форма sech існує лише для третьої особи однини й множини; перша й друга особи просто повторюють звичайний особовий займенник у знахідному відмінку.",
            "en": {
              "text": "The dedicated reflexive form sech exists only for third person singular and plural; first and second person simply reuse the regular personal pronoun in the accusative."
            }
          },
          {
            "type": "table",
            "title": "Розподіл форм",
            "rows": [
              [
                "ech wäschen mech (не 'sech')",
                "я мию себе"
              ],
              [
                "hie wäscht sech",
                "він мию себе"
              ]
            ],
            "en": {
              "title": "Distribution of Forms"
            }
          }
        ],
        "titleEn": "Reflexive: Only Third Person Has Its Own Form — B1"
      },
      {
        "id": "kompositioun-vu-substantiven-kapp",
        "title": "Kompositioun: d'lescht Element bestëmmt de Genus — B2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "У складному слові граматичний рід завжди визначає останній компонент, незалежно від роду першого, — правило, що діє автоматично, без винятків.",
            "en": {
              "text": "In a compound word, the grammatical gender is always determined by the last component, regardless of the first element's gender — a rule that applies automatically, without exceptions."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "d'Kichendësch (Kichen + Dësch, ч.р. від Dësch)",
                "кухонний стіл"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Compounding: The Last Element Sets the Gender — B2"
      },
      {
        "id": "diminutiv-emlaut",
        "title": "Diminutiv: Ëmlaut mat -chen — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувальний суфікс -chen/-elchen зазвичай викликає умлаут кореневого голосного — системна звукова зміна, що супроводжує зменшення розміру чи вияв прихильності.",
            "en": {
              "text": "The diminutive suffix -chen/-elchen usually triggers umlaut of the root vowel — a systematic sound change accompanying the reduction in size or expression of affection."
            }
          },
          {
            "type": "table",
            "title": "Приклади умлауту",
            "rows": [
              [
                "Kand → Kandchen → Kännchen",
                "дитина → дитинка (з умлаутом)"
              ]
            ],
            "en": {
              "title": "Umlaut Examples"
            }
          }
        ],
        "titleEn": "Diminutive: Umlaut with -chen — B1"
      },
      {
        "id": "wann-fir-konditional-an-zeitlech",
        "title": "Wann: kondisional an zäitlech — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Сполучник wann однаково вводить і умовне ('якщо'), і часте повторюване часове ('коли, щоразу'), — розрізняє їх лише контекст, без окремого слова для кожного значення.",
            "en": {
              "text": "The conjunction wann introduces both a conditional ('if') and a recurring temporal ('whenever') clause — only context distinguishes them, with no separate word for each sense."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Wann ech Zäit hunn, liesen ech. (часте, 'щоразу')",
                "Коли в мене є час, я читаю."
              ],
              [
                "Wann et reent, bleift hien heem. (умовне)",
                "Якщо йде дощ, він лишається дома."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Wann: Conditional and Temporal — B1"
      },
      {
        "id": "artikelkontraktiounen-erweidert",
        "title": "Méi Artikelkontraktiounen — B2",
        "emoji": "🔡",
        "sections": [
          {
            "type": "intro",
            "text": "Окрім am/um, стягуються й інші поєднання прийменника з артиклем — fir den → fir'n, duerch dem → duerch'm — причому стягнена форма в розмові практично обов'язкова.",
            "en": {
              "text": "Besides am/um, other preposition-article combinations contract too — fir den → fir'n, duerch dem → duerch'm — and the contracted form is practically mandatory in speech."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ech kafen et fir'n Jong.",
                "Я купую це для хлопчика."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "More Article Contractions — B2"
      },
      {
        "id": "nationalspraach-zenter-1984",
        "title": "Nationalsprooch zënter 1984 — B2",
        "emoji": "🏛️",
        "sections": [
          {
            "type": "intro",
            "text": "Люксембурзька отримала статус національної мови лише 1984 року законом, тоді як французька й німецька залишилися адміністративними мовами — офіційне визнання прийшло пізніше самого мовного усвідомлення.",
            "en": {
              "text": "Luxembourgish received national-language status only in 1984 by law, while French and German remained administrative languages — official recognition came later than the language's own sense of identity."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "D'Gesetz vun 1984 huet d'Lëtzebuergesch unerkannt.",
                "Закон 1984 року визнав люксембурзьку мову."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "National Language Since 1984 — B2"
      },
      {
        "id": "modalpartikelen",
        "title": "Modalpartikelen: jo, awer, nach — B2",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Модальні частки jo, awer, nach, dach надають відтінок здивування, заперечення очікуванню чи наполягання, не змінюючи логічного значення речення — перекласти їх одним словом часто неможливо.",
            "en": {
              "text": "Modal particles jo, awer, nach, dach add a shade of surprise, contradiction of expectation, or insistence without changing the sentence's logical meaning — they're often impossible to translate with a single word."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Du bass jo schonn do!",
                "Та ти ж уже тут! (здивування)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Modal Particles: jo, awer, nach — B2"
      },
      {
        "id": "kaddo-a-mei-lehnwierder",
        "title": "Kaddo a méi franséisch Lehnwierder — B1",
        "emoji": "🎁",
        "sections": [
          {
            "type": "intro",
            "text": "Слова побуту часто мають французьке походження навіть там, де очікувано побачити німецький корінь: kaddo (подарунок, з фр. cadeau), merci (дякую, не danke).",
            "en": {
              "text": "Everyday words often have French origin even where a German root would be expected: kaddo (gift, from French cadeau), merci (thank you, not danke)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "kaddo (з фр. cadeau)",
                "подарунок"
              ],
              [
                "Merci! (з фр., не Danke!)",
                "Дякую!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Kaddo and More French Loanwords — B1"
      },
      {
        "id": "zuelen-vun-1-bis-100-muster",
        "title": "Zueler vu 1 bis 100: d'Muster — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Складені числа 21–99 будуються за порядком 'одиниці-an-десятки' — одиниця стоїть першою, як у німецькій, а не як у французькій чи англійській.",
            "en": {
              "text": "Compound numbers 21-99 are built in the order 'units-an-tens' — the unit comes first, as in German, not as in French or English."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "fënnefanzwanzeg (25, буквально 'п'ять-і-двадцять')",
                "двадцять п'ять"
              ]
            ],
            "en": {
              "title": "Example"
            }
          }
        ],
        "titleEn": "Numbers 1-100: The Pattern — A2"
      },
      {
        "id": "feste-verb-preposition-kombinatiounen",
        "title": "Fest Verb-Präpositioun-Kombinatiounen — B2",
        "emoji": "🧷",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі дієслова вимагають конкретного прийменника з фіксованим, часто непередбачуваним значенням — sech freeën op (чекати з радістю на щось), bestinn aus (складатися з) — прийменник тут частина самого дієслова, а не вільний вибір.",
            "en": {
              "text": "Some verbs require a specific preposition with a fixed, often unpredictable meaning — sech freeën op (to look forward to), bestinn aus (to consist of) — the preposition here is part of the verb itself, not a free choice."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ech freeë mech op de Summer.",
                "Я з радістю чекаю на літо."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Fixed Verb-Preposition Combinations — B2"
      },
      {
        "id": "zuel-als-substantiv",
        "title": "Zuel als Substantiv: den Éischten — B2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Порядковий числівник може вживатися самостійно як іменник з артиклем — den Éischten, d'Drëtt — і тоді відмінюється та узгоджується за родом, як і будь-який інший субстантивований прикметник.",
            "en": {
              "text": "An ordinal number can be used on its own as a noun with an article — den Éischten, d'Drëtt — and then declines and agrees in gender like any other nominalized adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Hien ass den Éischten an der Klass.",
                "Він перший у класі."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Numbers Used as Nouns — B2"
      }
    ]
  },
  {
    "id": "exceptions",
    "title": "Виключення",
    "titleEn": "Exceptions",
    "emoji": "⚡",
    "rules": [
      {
        "id": "irregular-verben-hunn-sinn",
        "title": "Irreguläre Verben: hunn, sinn — A2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "hunn (мати) і sinn (бути) мають повністю неправильне відмінювання й не підкоряються жодному регулярному зразку, при цьому вони ж і єдині допоміжні дієслова для всіх складених часів.",
            "en": {
              "text": "hunn (to have) and sinn (to be) have completely irregular conjugation, following no regular pattern, and they're also the only auxiliaries used for every compound tense."
            }
          },
          {
            "type": "table",
            "title": "Неправильні форми",
            "rows": [
              [
                "ech sinn / du bass / hie ass",
                "я є / ти є / він є"
              ]
            ]
          }
        ],
        "titleEn": "Irregular Verbs: hunn, sinn — A2"
      },
      {
        "id": "irregular-plural-eenzel-substantiven",
        "title": "Irreguläre Plural bei enzelne Substantiven — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька частовживаних іменників мають форму множини, яку неможливо вивести із жодного регулярного правила, і їх слід запам'ятовувати окремо.",
            "en": {
              "text": "A few common nouns have a plural form that can't be derived from any regular rule and must be memorized individually."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "d'Land → d'Länner",
                "країна → країни (нерегулярний умлаут + -er)"
              ]
            ]
          }
        ],
        "titleEn": "Irregular Plural of Certain Nouns — B1"
      },
      {
        "id": "fixed-gromm-letzebuerger-ausdreck",
        "title": "Fix Lëtzebuerger Ausdréck — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі застиглі вирази й прислів'я не підкоряються сучасним граматичним правилам розташування слів чи відмінювання, зберігаючи архаїчну структуру як культурну традицію.",
            "en": {
              "text": "Some fixed expressions and proverbs don't follow modern grammar rules for word order or inflection, preserving an archaic structure as a cultural tradition."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Spuere fir Schlechte Zäiten.",
                "Заощаджувати на чорний день (застигла приказка)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Fixed Luxembourgish Expressions — B2"
      }
    ]
  }
];
