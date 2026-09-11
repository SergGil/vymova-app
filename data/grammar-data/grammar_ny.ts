// Vymova — data/grammar-data/grammar_ny.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_NY: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Maina a Anthu — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У чічева немає граматичного роду — займенник \"iye\" однаково означає і \"він\", і \"вона\".",
            "en": {
              "text": "Chichewa has no grammatical gender — the pronoun \"iye\" means both \"he\" and \"she\"."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ine"
              ],
              [
                "ти",
                "iwe"
              ],
              [
                "він / вона",
                "iye"
              ],
              [
                "ми",
                "ife"
              ],
              [
                "ви",
                "inu"
              ],
              [
                "вони",
                "iwo"
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
        "id": "chichewa-vs-chinyanja",
        "title": "Chichewa ndi Chinyanja — A2",
        "emoji": "🏛️",
        "sections": [
          {
            "type": "intro",
            "text": "Та сама мова має дві офіційні назви залежно від політичного кордону: 'чічева' — офіційна назва в Малаві, 'чіньянджа' — назва, вживана в Замбії й Мозамбіку, — політична, а не мовна відмінність.",
            "en": {
              "text": "The same language has two official names depending on the political border: 'Chichewa' is the official name in Malawi, 'Chinyanja' is the name used in Zambia and Mozambique — a political, not linguistic, difference."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ku Malawi amati Chichewa, ku Zambia amati Chinyanja.",
                "У Малаві кажуть чічева, у Замбії — чіньянджа."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Chichewa and Chinyanja: One Language, Two Names — A2"
      },
      {
        "id": "klas-ya-nkombo",
        "title": "Magulu a Mayina — A1",
        "emoji": "🗂️",
        "sections": [
          {
            "type": "intro",
            "text": "Як і всі мови банту, чічева розподіляє іменники за класами — кожен клас має власний префікс однини й окремий префікс множини, і саме цей префікс визначає узгодження в усьому реченні.",
            "en": {
              "text": "Like all Bantu languages, Chichewa sorts nouns into classes — each class has its own singular prefix and a separate plural prefix, and this prefix drives agreement throughout the sentence."
            }
          },
          {
            "type": "table",
            "title": "Приклади класів",
            "rows": [
              [
                "mfumu (вождь) → mafumu (вожді)",
                "клас 9/10 для деяких людей"
              ],
              [
                "chipatso (плід) → zipatso (плоди)",
                "клас 7/8 для предметів"
              ]
            ],
            "en": {
              "title": "Class Examples"
            }
          }
        ],
        "titleEn": "Noun Classes — A1"
      },
      {
        "id": "tonaliti-mbili",
        "title": "Matani Awiri — B1",
        "emoji": "🎵",
        "sections": [
          {
            "type": "intro",
            "text": "Чічева — тональна мова з двома тонами (високим і низьким), і саме тонова мелодія, а не лише голосні й приголосні, розрізняє значення слів, написаних однаково.",
            "en": {
              "text": "Chichewa is a tonal language with two tones (high and low), and it's the tonal melody, not just the vowels and consonants, that distinguishes the meaning of otherwise identically spelled words."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Один і той самий запис слова змінює значення залежно від тонового малюнка.",
                "тональна мелодія розрізняє значення"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Two Tones — B1"
      },
      {
        "id": "negasion-i-preguntas",
        "title": "Kukana ndi Mafunso — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється префіксом si-, доданим перед особовим префіксом підмета; питання без питального слова передаються лише висхідною інтонацією.",
            "en": {
              "text": "Negation is formed with the prefix si-, added before the subject person prefix; yes/no questions are marked with rising intonation alone."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Sindikudziwa.",
                "Я не знаю."
              ],
              [
                "Ukubwera?",
                "Ти приходиш?"
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
        "id": "present-general",
        "title": "Nthawi Yamakono: -ma- — A1",
        "emoji": "☀️",
        "sections": [
          {
            "type": "intro",
            "text": "Загальний теперішній час утворюється інфіксом -ma-, вставленим між префіксом підмета й коренем дієслова, позначаючи звичну дію чи факт.",
            "en": {
              "text": "The general present tense is formed with the infix -ma-, inserted between the subject prefix and the verb root, marking a habitual action or fact."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ndimapita ku sukulu.",
                "Я ходжу до школи (взагалі)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "General Present: -ma- — A1"
      },
      {
        "id": "present-progressive",
        "title": "Nthawi Yamakono Yopitilira: -ku- — A1",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія в момент мовлення передається інфіксом -ku-, вставленим між префіксом підмета й коренем дієслова.",
            "en": {
              "text": "An action in progress at the moment of speaking is expressed with the infix -ku-, inserted between the subject prefix and the verb root."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ndikupita ku sukulu.",
                "Я саме йду до школи."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Progressive: -ku- — A1"
      },
      {
        "id": "hodiernal-past-today",
        "title": "Zomwe Zachitika Lero: -a- — A2",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Особливий минулий час позначає дію, завершену саме сьогодні, — окрема граматична форма, відмінна від будь-якого іншого минулого часу, скільки б днів тому це не сталося.",
            "en": {
              "text": "A dedicated past tense marks an action completed specifically today — a distinct grammatical form from any other past tense, no matter how many days ago something else happened."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ndagula mkate lero.",
                "Я купив хліб сьогодні."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Hodiernal Past (Today) — A2"
      },
      {
        "id": "hesternal-past-yesterday",
        "title": "Zomwe Zachitika Dzulo: -na- — B1",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Окрема форма минулого часу позначає дію, що сталася вчора чи кілька днів тому, — граматично відмінна і від сьогоднішнього, і від давнішого минулого.",
            "en": {
              "text": "A separate past-tense form marks an action that happened yesterday or a few days ago — grammatically distinct from both the today-past and the more distant past."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ndinagula mkate dzulo.",
                "Я купив хліб учора."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Hesternal Past (Yesterday/Recent) — B1"
      },
      {
        "id": "remote-past-distant",
        "title": "Zakale Zoyambirira: -daa- — B1",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Ще одна окрема форма позначає дію, що сталася давно, за межами кількох останніх днів, — трирівнева система віддаленості минулого, добре відома в лінгвістиці саме на прикладі чічева.",
            "en": {
              "text": "Yet another dedicated form marks an action that happened long ago, beyond the last few days — a three-tier past-remoteness system, well known in linguistics precisely from the Chichewa example."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ndinkakhala ku Blantyre kale.",
                "Я колись давно жив у Блантайрі."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Remote Past (Distant) — B1"
      },
      {
        "id": "hodiernal-future-today",
        "title": "Zomwe Zichitika Lero: -dza- — A2",
        "emoji": "🔜",
        "sections": [
          {
            "type": "intro",
            "text": "Так само як минулий час, майбутній розрізняє віддаленість: окрема форма для дії, яка станеться пізніше сьогодні.",
            "en": {
              "text": "Just like the past, the future distinguishes remoteness: a separate form for an action that will happen later today."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ndidzapita ku msika lero.",
                "Я піду на ринок сьогодні (пізніше)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Hodiernal Future (Later Today) — A2"
      },
      {
        "id": "remote-future-distant",
        "title": "Zamtsogolo Zakutali: -dzaa- — B1",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Окрема форма позначає майбутню дію, віддалену на дні, місяці чи роки вперед, — не пізніше сьогодні, а колись у далекому майбутньому.",
            "en": {
              "text": "A dedicated form marks a future action distant by days, months, or years — not later today, but sometime in the more distant future."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ndidzapita ku Malawi chaka chamawa.",
                "Я поїду в Малаві наступного року."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Remote Future (Distant) — B1"
      },
      {
        "id": "habitual-past",
        "title": "Chizolowezi Chakale: -nka- — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Звичну дію в минулому передає окрема форма на -nka-, відмінна від простого одноразового минулого часу, — 'бувало, робив'.",
            "en": {
              "text": "A habitual past action is expressed with a dedicated form in -nka-, distinct from the simple one-time past — 'used to do'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ndinkasewera mpira ndili mwana.",
                "У дитинстві я, бувало, грав у футбол."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Habitual Past: -nka- — B1"
      },
      {
        "id": "perfect-aspect",
        "title": "Wathunthu: -a — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Перфект наголошує на теперішній актуальності завершеної дії, часто збігаючись формально з сьогоднішнім минулим, але з ширшим значенням стану, а не самого моменту дії.",
            "en": {
              "text": "The perfect emphasizes the present relevance of a completed action, often coinciding formally with the today-past but with a broader meaning of state rather than the moment of the action itself."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Wafika kale.",
                "Він уже прибув (стан актуальний)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Perfect Aspect — B1"
      },
      {
        "id": "imperative-mood",
        "title": "Lamulo — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб однини — гола основа дієслова без префікса підмета; множина додає суфікс -ni.",
            "en": {
              "text": "The singular imperative is the bare verb stem with no subject prefix; the plural adds the suffix -ni."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Bwera!",
                "Приходь!"
              ],
              [
                "Bwerani!",
                "Приходьте!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Imperative Mood — A2"
      },
      {
        "id": "subjunctive-mood",
        "title": "Mawu Ofuna: -e — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Умовно-бажальний спосіб на -e вживається в підрядних реченнях мети чи після дієслів бажання, замінюючи закінчення -a на -e.",
            "en": {
              "text": "The subjunctive in -e is used in purpose clauses or after verbs of wishing, replacing the ending -a with -e."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ndikufuna kuti upite.",
                "Я хочу, щоб ти пішов."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Subjunctive Mood: -e — B1"
      },
      {
        "id": "conditional-mood",
        "title": "Ngati: Mikhalidwe — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовне речення вводиться сполучником ngati ('якщо'), а дієслово підрядного речення часто отримує інфікс -ka-, що позначає умовність.",
            "en": {
              "text": "A conditional sentence is introduced with the conjunction ngati ('if'), and the subordinate clause's verb often takes the infix -ka-, marking conditionality."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ngati mvula igwa, ndikhala kunyumba.",
                "Якщо піде дощ, я залишуся вдома."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional: Ngati — B1"
      },
      {
        "id": "persistive-aspect",
        "title": "Kupitirizabe: -ki-/-cha- — B2",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Персистивний вид на -ki-/-cha- позначає дію, яка досі триває всупереч очікуванню, — 'усе ще робить', з відтінком, якого не передає звичайний прогресив.",
            "en": {
              "text": "The persistive aspect in -ki-/-cha- marks an action still ongoing against expectation — 'still doing', with a shade the ordinary progressive doesn't convey."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Akadali kugona.",
                "Він досі спить (усупереч очікуванню)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Persistive Aspect: -ki-/-cha- — B2"
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
        "id": "locative-classes-pa-ku-mu",
        "title": "Magulu a Malo: Pa-, Ku-, Mu- — B1",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Три окремі локативні класи іменників — pa- (точне місце), ku- (загальний напрямок), mu- (усередині) — кожен зі своїм відтінком просторового значення й повним власним узгодженням.",
            "en": {
              "text": "Three separate locative noun classes — pa- (a precise spot), ku- (a general direction), mu- (inside) — each with its own shade of spatial meaning and its own full agreement pattern."
            }
          },
          {
            "type": "table",
            "title": "Приклади локативних класів",
            "rows": [
              [
                "pamsika (саме на ринку)",
                "точне місце"
              ],
              [
                "kumsika (у бік ринку)",
                "загальний напрямок"
              ],
              [
                "mumsika (усередині ринку)",
                "усередині"
              ]
            ],
            "en": {
              "title": "Locative Class Examples"
            }
          }
        ],
        "titleEn": "Locative Classes: Pa-, Ku-, Mu- — B1"
      },
      {
        "id": "object-marker-system",
        "title": "Chizindikiro cha Chinthu — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Займенник прямого додатка вставляється інфіксом усередину дієслова, безпосередньо перед коренем, — не окреме слово, а частина самої дієслівної форми.",
            "en": {
              "text": "The direct object pronoun is inserted as an infix inside the verb, right before the root — not a separate word, but part of the verb form itself."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ndimamuona. (na-ma-mu-ona)",
                "Я його бачу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Object Marker — B1"
      },
      {
        "id": "possessive-linker-a",
        "title": "Chogwirizanitsa Umwini: -a — A1",
        "emoji": "🏠",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійність передається зв'язкою -a, узгодженою з класом предмета володіння, а не власника, — та сама асоціативна частка, що вживається й для інших означальних зв'язків.",
            "en": {
              "text": "Possession is expressed with the linker -a, agreeing with the class of the possessed item, not the possessor — the same associative particle also used for other modifying relations."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "nyumba ya mfumu",
                "дім вождя"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Possessive Linker: -a — A1"
      },
      {
        "id": "demonstratives-three-way",
        "title": "Zosonyeza: Uyu, Uyo, Uja — A2",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Вказівні слова мають три ступені віддаленості: uyu ('цей, поряд зі мною'), uyo ('той, поряд з тобою'), uja ('он той, далеко від обох') — усі узгоджені з класом іменника.",
            "en": {
              "text": "Demonstratives have three degrees of distance: uyu ('this, near me'), uyo ('that, near you'), uja ('that over there, far from both') — all agreeing with the noun's class."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "munthu uyu",
                "ця людина (поряд зі мною)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Demonstratives: Three-Way Distance — A2"
      },
      {
        "id": "adjective-agreement-class",
        "title": "Kugwirizana kwa Mawu Ofotokoza — A2",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник стоїть після іменника й отримує префікс того самого класу, що й іменник, котрий він описує.",
            "en": {
              "text": "An adjective follows the noun and takes the prefix of the same class as the noun it describes."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "nyumba yaikulu (великий дім)",
                "префікс узгоджений з класом nyumba"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adjective Class Agreement — A2"
      },
      {
        "id": "comparison-kuposa",
        "title": "Kufanizira: Kuposa — A2",
        "emoji": "⚖️",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняння вищого ступеня утворюється не суфіксом, а дієсловом kuposa ('перевершувати'), — прикметник лишається незмінним, а порівняння виражає саме дієслівна конструкція.",
            "en": {
              "text": "Comparison of superiority is not formed with a suffix but with the verb kuposa ('to surpass') — the adjective stays unchanged, and the comparison is expressed by the verbal construction itself."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Iye ndi wamtali kuposa ine.",
                "Він вищий за мене (буквально 'перевершує мене')."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparison with Kuposa — A2"
      },
      {
        "id": "superlative-kwambiri",
        "title": "Wapamwamba Kwambiri — B1",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь додає слово kwambiri ('дуже') до конструкції з kuposa, підсилюючи порівняння до значення абсолютної переваги.",
            "en": {
              "text": "The superlative adds the word kwambiri ('very much') to the kuposa construction, intensifying the comparison to mean absolute superiority."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ndi wamtali kuposa onse.",
                "Він найвищий з усіх."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Superlative with Kwambiri — B1"
      },
      {
        "id": "numerals-cardinal",
        "title": "Ziwerengero — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Числівники 1-5 узгоджуються з класом іменника через префікс, як прикметники, тоді як числа від 6 і далі часто запозичені й незмінні.",
            "en": {
              "text": "Numbers 1-5 agree with the noun's class through a prefix, like adjectives, while numbers from 6 onward are often borrowed and invariant."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "anthu awiri (дві людини, узгоджене число)",
                "клас-префікс на числівнику"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Cardinal Numbers — A1"
      },
      {
        "id": "numerals-ordinal",
        "title": "Ziwerengero Zotsatizana — B1",
        "emoji": "🥇",
        "sections": [
          {
            "type": "intro",
            "text": "Порядкові числівники утворюються сполучником -a plus кількісний числівник, що стоїть після іменника.",
            "en": {
              "text": "Ordinal numbers are formed with the connector -a plus the cardinal number, placed after the noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "tsiku loyamba",
                "перший день"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ordinal Numbers — B1"
      },
      {
        "id": "question-words",
        "title": "Mafunso: Chiyani, Ndani — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питальні слова chiyani (що), ndani (хто), kuti (де), liti (коли) зазвичай залишаються на місці слова, яке вони заміняють, без винесення на початок.",
            "en": {
              "text": "The question words chiyani (what), ndani (who), kuti (where), liti (when) normally stay in the position of the replaced word, with no fronting."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ukupita kuti?",
                "Куди ти йдеш?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Question Words — A1"
      },
      {
        "id": "relative-clause-strategy",
        "title": "Chogwirizanitsa Ziganizo: -amene — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Відносне підрядне речення вводиться часткою -amene/-omwe, узгодженою за класом з означуваним іменником.",
            "en": {
              "text": "A relative clause is introduced with the particle -amene/-omwe, agreeing in class with the modified noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "munthu amene akuyankhula",
                "людина, яка говорить"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Clauses: -amene — B1"
      },
      {
        "id": "plural-formation-across-classes",
        "title": "Chiwerengero Zambiri m'Magulu Onse — A2",
        "emoji": "➕",
        "sections": [
          {
            "type": "intro",
            "text": "Кожен іменниковий клас має власну пару префіксів однина/множина, тому правило множини не універсальне, а повністю залежить від класу, до якого належить іменник.",
            "en": {
              "text": "Every noun class has its own singular/plural prefix pair, so the plural rule isn't universal but depends entirely on the class the noun belongs to."
            }
          },
          {
            "type": "table",
            "title": "Приклади пар",
            "rows": [
              [
                "mtengo → mitengo (клас 3/4)",
                "дерево → дерева"
              ],
              [
                "nyumba → nyumba (клас 9/10, та сама форма)",
                "дім → доми (без зміни)"
              ]
            ],
            "en": {
              "title": "Pair Examples"
            }
          }
        ],
        "titleEn": "Plural Across Noun Classes — A2"
      },
      {
        "id": "reduplication-repetition-intensity",
        "title": "Kubwerezabwereza — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Подвоєння дієслівного кореня позначає повторювану, недбалу чи ослаблену дію — граматична стратегія без окремого афікса.",
            "en": {
              "text": "Doubling the verb root marks a repeated, casual, or attenuated action — a grammatical strategy with no dedicated affix."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kuyendayenda (тинятися, ходити туди-сюди)",
                "приклад редуплікації"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reduplication for Repetition — B1"
      },
      {
        "id": "word-order-svo",
        "title": "Dongosolo la Mawu: SVO — A1",
        "emoji": "↔️",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів — підмет-присудок-додаток, як в українській, хоч тема речення може бути винесена наперед для наголосу.",
            "en": {
              "text": "The basic word order is subject-verb-object, as in Ukrainian, though the sentence's topic can be fronted for emphasis."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mkazi akuphika chakudya.",
                "Жінка готує їжу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Word Order: SVO — A1"
      },
      {
        "id": "subject-concord-all-classes",
        "title": "Kugwirizana kwa Wochita — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Клас іменника-підмета визначає префікс на дієслові незалежно від того, чи підмет — людина, тварина чи неживий предмет, — одна узгоджувальна система пронизує все речення.",
            "en": {
              "text": "The class of the subject noun determines the verb prefix regardless of whether the subject is a person, animal, or inanimate object — one agreement system runs through the entire sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mtengo wagwa. (клас 3 узгоджено на дієслові)",
                "Дерево впало."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Subject Concord Across All Classes — A2"
      },
      {
        "id": "associative-construction-depth",
        "title": "Chogwirizanitsa: Ntchito Zina — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Та сама асоціативна частка -a вживається й для матеріалу, з якого зроблено предмет, і для походження, не лише для присвійності.",
            "en": {
              "text": "The same associative particle -a is also used for the material something is made of and for origin, not just possession."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "nyumba ya matabwa (дерев'яний дім, матеріал)",
                "асоціативна частка для матеріалу"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Associative Particle: Further Uses — B1"
      },
      {
        "id": "augmentative-class-shift",
        "title": "Zazikulu: Kusintha Gulu — B2",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Перенесення іменника в клас 5/6 (li-/ma-) може додати значення більшого розміру чи грубуватості — граматичний клас тут виконує те, що в інших мовах робить окремий суфікс.",
            "en": {
              "text": "Shifting a noun into class 5/6 (li-/ma-) can add the meaning of greater size or coarseness — the grammatical class here does what a dedicated suffix does in other languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mwana (клас 1, дитина) → зсув до іншого класу надає грубуватого відтінку",
                "здоровань"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Augmentative via Class Shift — B2"
      },
      {
        "id": "diminutive-class-shift",
        "title": "Zazing'ono: Kusintha Gulu — B2",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Перенесення в клас 12/13 (ka-/ti-) натомість надає значення зменшеності чи молодості предмета, незалежно від його вихідного класу.",
            "en": {
              "text": "Shifting into class 12/13 (ka-/ti-) instead adds a meaning of smallness or youth, regardless of the item's original class."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kambuzi (маленька коза, клас ka- надає зменшувальне значення)",
                "зменшена форма"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Diminutive via Class Shift — B2"
      },
      {
        "id": "vocative-forms",
        "title": "Kuyitanira — B1",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Звертання часто вживає родинний термін чи ім'я саме по собі, без окремого граматичного маркера звертання, — інтонація сигналізує пряме звертання.",
            "en": {
              "text": "Direct address often uses a kinship term or a name on its own, with no separate grammatical address marker — intonation signals direct address."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Amayi!",
                "Мамо!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Vocative Forms — B1"
      },
      {
        "id": "reflexive-prefix-dzi",
        "title": "Kudzichitira: -dzi- — A2",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотна дія позначається інфіксом -dzi-, вставленим на місці об'єктного маркера в дієслові, — незалежно від особи чи числа підмета.",
            "en": {
              "text": "Reflexive action is marked with the infix -dzi-, inserted in the object-marker slot of the verb — independent of the subject's person or number."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Akudzimenya.",
                "Він б'є себе."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reflexive Prefix: -dzi- — A2"
      },
      {
        "id": "english-loanwords-colonial",
        "title": "Mawu Ochokera ku Chingerezi — A2",
        "emoji": "🇬🇧",
        "sections": [
          {
            "type": "intro",
            "text": "Британська колоніальна доба Ньясаленду залишила в чічева окремий шар англійських запозичень у технічній, адміністративній і шкільній лексиці — відмінний шар від французьких запозичень у лінгала.",
            "en": {
              "text": "The British colonial period of Nyasaland left Chichewa with a distinct layer of English loanwords in technical, administrative, and school vocabulary — a different layer from Lingala's French loanwords."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "sukulu (школа) — з англ. school",
                "англійське запозичення"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "English Colonial-Era Loanwords — A2"
      },
      {
        "id": "portuguese-loanwords-mozambique-contact",
        "title": "Mawu Ochokera ku Chipwitikizi — B1",
        "emoji": "🇵🇹",
        "sections": [
          {
            "type": "intro",
            "text": "Пограничний контакт з португаломовним Мозамбіком залишив у чічева невеликий, але виразний шар португальських запозичень, окремий від англійського колоніального шару.",
            "en": {
              "text": "Border contact with Portuguese-speaking Mozambique left Chichewa with a small but distinct layer of Portuguese loanwords, separate from the English colonial layer."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Прикордонний контакт із Мозамбіком приніс окремі португальські запозичення.",
                "португальський шар запозичень"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Portuguese Loanwords from Mozambique Contact — B1"
      },
      {
        "id": "compound-noun-formation",
        "title": "Kupanga Mawu Osakanizika — B2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Складні іменники поєднують два корені в одне ціле, часто описуючи предмет через його функцію чи зовнішній вигляд.",
            "en": {
              "text": "Compound nouns join two roots into one unit, often describing an item through its function or appearance."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "nyumba ya masewera (спортивна зала, буквально 'дім ігор')",
                "приклад складного слова"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Compound Noun Formation — B2"
      },
      {
        "id": "adjective-invariant-borrowed",
        "title": "Mawu Ofotokoza Obwereka Osasintha — B2",
        "emoji": "🇬🇧",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники, запозичені з англійської, часто не отримують класового префікса й лишаються незмінними незалежно від класу описуваного іменника.",
            "en": {
              "text": "Adjectives borrowed from English often don't take a class prefix and stay invariant regardless of the class of the noun described."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "nyumba modern (сучасний дім, без узгодження)",
                "запозичений прикметник, незмінний"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Invariant Borrowed Adjectives — B2"
      },
      {
        "id": "existential-pali-palibe",
        "title": "Kukhalapo: Pali, Palibe — A1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Існування виражається словом pali ('є, існує'), а заперечне існування — palibe ('немає') — окрема пара слів, відмінна від звичайного дієслова 'бути'.",
            "en": {
              "text": "Existence is expressed with the word pali ('there is'), and negative existence with palibe ('there isn't') — a distinct word pair, separate from the ordinary verb 'to be'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Pali madzi.",
                "Є вода."
              ],
              [
                "Palibe ndalama.",
                "Немає грошей."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Existential: Pali, Palibe — A1"
      },
      {
        "id": "remoteness-tense-system-depth",
        "title": "Nthawi Zakutali: Kuzama — B2",
        "emoji": "📏",
        "sections": [
          {
            "type": "intro",
            "text": "Трирівнева система віддаленості часу (сьогодні/учора/давно, як у минулому, так і в майбутньому) робить чічева хрестоматійним прикладом граматикалізованої часової дистанції в мовознавчій літературі — жоден інший рівень мовної системи не позначає час так детально.",
            "en": {
              "text": "The three-tier time-remoteness system (today/yesterday/long-ago, in both past and future) makes Chichewa the textbook example of grammaticalized temporal distance in linguistic literature — no other level of the language system marks time so precisely."
            }
          },
          {
            "type": "table",
            "title": "Шість часових форм разом",
            "rows": [
              [
                "сьогоднішній / учорашній / давній минулий час",
                "три ступені віддаленості в минулому"
              ],
              [
                "сьогоднішній / близький / давній майбутній час",
                "три ступені віддаленості в майбутньому"
              ]
            ],
            "en": {
              "title": "Six Tense Forms Together"
            }
          }
        ],
        "titleEn": "The Remoteness Tense System in Depth — B2"
      },
      {
        "id": "persistive-aspect-depth",
        "title": "Kupitirizabe: Kuzama — B2",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Персистивний вид можна поєднати із запереченням, утворюючи 'усе ще не робить' — тонший відтінок, ніж просте заперечення звичайної дії.",
            "en": {
              "text": "The persistive aspect can combine with negation, forming 'still hasn't done' — a subtler shade than simple negation of an ordinary action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Sadakadali kubwera.",
                "Він досі ще не прийшов."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Persistive Aspect: Further Depth — B2"
      },
      {
        "id": "verb-extension-applicative",
        "title": "Kuwonjezera: -ir-/-er- — B2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Аплікативний суфікс -ir-/-er-, вставлений перед кінцевим голосним дієслова, додає нового учасника дії — того, для кого чи заради кого щось робиться.",
            "en": {
              "text": "The applicative suffix -ir-/-er-, inserted before the verb's final vowel, adds a new participant to the action — the person for or on behalf of whom something is done."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "kuphika (готувати) → kuphikira (готувати для когось)",
                "аплікативне розширення"
              ]
            ],
            "en": {
              "title": "Example"
            }
          }
        ],
        "titleEn": "Verb Extension: Applicative -ir-/-er- — B2"
      },
      {
        "id": "verb-extension-causative",
        "title": "Kuchititsa: -its-/-ets- — B2",
        "emoji": "⚡",
        "sections": [
          {
            "type": "intro",
            "text": "Каузативний суфікс -its-/-ets- перетворює дієслово на 'змушувати робити' — граматично вбудовує причиновість у сам дієслівний корінь.",
            "en": {
              "text": "The causative suffix -its-/-ets- turns a verb into 'to make someone do' — grammatically builds causation right into the verb root."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "kudya (їсти) → kudyetsa (годувати когось)",
                "каузативне розширення"
              ]
            ],
            "en": {
              "title": "Example"
            }
          }
        ],
        "titleEn": "Verb Extension: Causative -its-/-ets- — B2"
      },
      {
        "id": "verb-extension-passive",
        "title": "Wogwidwa: -idwa/-edwa — B2",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивне розширення -idwa/-edwa перетворює дієслово на пасивний стан без допоміжного дієслова 'бути'.",
            "en": {
              "text": "The passive extension -idwa/-edwa turns a verb passive with no auxiliary 'to be'."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "kumenya (бити) → kumenyedwa (бути побитим)",
                "пасивне розширення"
              ]
            ],
            "en": {
              "title": "Example"
            }
          }
        ],
        "titleEn": "Verb Extension: Passive -idwa/-edwa — B2"
      },
      {
        "id": "verb-extension-reciprocal",
        "title": "Wina ndi Mzake: -an- — B2",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "Реципрокальне розширення -an- позначає взаємну дію, коли учасники роблять щось один одному, без окремого займенника 'один одного'.",
            "en": {
              "text": "The reciprocal extension -an- marks a mutual action, when participants do something to each other, with no separate 'each other' pronoun."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "kukonda (любити) → kukondana (любити одне одного)",
                "реципрокальне розширення"
              ]
            ],
            "en": {
              "title": "Example"
            }
          }
        ],
        "titleEn": "Verb Extension: Reciprocal -an- — B2"
      },
      {
        "id": "locative-inversion",
        "title": "Kusinthanitsa kwa Malo — B2",
        "emoji": "🔃",
        "sections": [
          {
            "type": "intro",
            "text": "Місцевий вираз може стати граматичним підметом речення, а логічний підмет перейти в кінець, — знаменита синтаксична риса мов банту, що дозволяє реченню фокусуватися на місці, а не на дійовій особі.",
            "en": {
              "text": "A locative expression can become the grammatical subject of the sentence, with the logical subject moving to the end — a famous Bantu syntactic feature that lets a sentence focus on the place rather than the actor."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mnyumbamu muli anthu ambiri.",
                "У домі є багато людей (локатив як підмет)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Locative Inversion — B2"
      },
      {
        "id": "object-marker-stacking-limits",
        "title": "Malire a Zizindikiro za Chinthu — B2",
        "emoji": "🧱",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від деяких споріднених мов банту, чічева дозволяє вставити в дієслово лише один об'єктний маркер за раз, — жодного стосу з кількох додатків одночасно.",
            "en": {
              "text": "Unlike some related Bantu languages, Chichewa allows only one object marker to be inserted into the verb at a time — no stacking of multiple objects at once."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Обмеження на один об'єктний маркер відрізняє чічева від деяких сусідніх мов банту.",
                "обмеження на кількість об'єктних маркерів"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Object Marker Stacking Limits — B2"
      },
      {
        "id": "tone-melody-tense-distinguishing",
        "title": "Kalembedwe ka Mawu: Kusiyanitsa Nthawi — B2",
        "emoji": "🎵",
        "sections": [
          {
            "type": "intro",
            "text": "У кількох парах часів той самий сегментний запис розрізняється лише тоновим малюнком — одна й та сама послідовність приголосних і голосних, різна мелодика, різний граматичний час.",
            "en": {
              "text": "In several tense pairs the same segmental spelling is distinguished only by tonal melody — the same sequence of consonants and vowels, different pitch pattern, different grammatical tense."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Тональний малюнок розрізняє граматичні форми поза сегментним записом.",
                "тонове розрізнення форм"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Tone Distinguishing Tense Pairs — B2"
      },
      {
        "id": "tone-sandhi-depth",
        "title": "Kusintha kwa Matani — B2",
        "emoji": "🎼",
        "sections": [
          {
            "type": "intro",
            "text": "У безперервному мовленні тон одного слова може систематично змінюватися під впливом сусіднього слова, — тональне сандхі, характерне для тонових мов банту.",
            "en": {
              "text": "In continuous speech, the tone of one word can systematically change under the influence of a neighboring word — tone sandhi, typical of Bantu tonal languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Тон слова змінюється залежно від сусіднього слова в потоці мовлення.",
                "тональне сандхі"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Tone Sandhi — B2"
      },
      {
        "id": "tumbuka-yao-contact-influence",
        "title": "Chiyankhulidwe cha Tumbuka ndi Yao — B2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Багатовіковий контакт з тумбука на півночі й яо на південному сході Малаві залишив у чічева лексичні запозичення, окремі від колоніальних англійських і португальських шарів.",
            "en": {
              "text": "Centuries of contact with Tumbuka in the north and Yao in the southeast of Malawi left Chichewa with lexical borrowings, separate from the colonial English and Portuguese layers."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Контакт з іншими мовами Малаві залишив окремий шар запозичень.",
                "внутрішньомалавійський мовний контакт"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Tumbuka and Yao Contact Influence — B2"
      },
      {
        "id": "banda-standardization-history",
        "title": "Mbiri ya Chiyankhulidwe cha Banda — B2",
        "emoji": "🏛️",
        "sections": [
          {
            "type": "intro",
            "text": "Президент Гастінгс Банда після незалежності 1964 року зробив чічева єдиною національною мовою Малаві, свідомо просуваючи саме центральний діалект як стандарт над іншими малавійськими мовами.",
            "en": {
              "text": "After independence in 1964, President Hastings Banda made Chichewa Malawi's sole national language, deliberately promoting specifically the central dialect as the standard over other Malawian languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Політичне рішення 1968 року закріпило статус чічева як національної мови.",
                "політична стандартизація мови"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Banda-Era Language Standardization — B2"
      },
      {
        "id": "kinship-terms-elaborate",
        "title": "Mawu a Achibale — B1",
        "emoji": "👪",
        "sections": [
          {
            "type": "intro",
            "text": "Розлога система термінів спорідненості розрізняє родичів за відносним віком і стороною сім'ї, тісно пов'язана з матрилінійною системою спадкування, традиційною для народу чева.",
            "en": {
              "text": "An elaborate kinship-term system distinguishes relatives by relative age and side of the family, closely tied to the matrilineal inheritance system traditional to the Chewa people."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mchimwene (старший брат) vs mng'ono (молодший)",
                "розрізнення за відносним віком"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Elaborate Kinship Terminology — B1"
      },
      {
        "id": "ngoni-nguni-historical-contact",
        "title": "Chiyankhulidwe cha Angoni — B2",
        "emoji": "⚔️",
        "sections": [
          {
            "type": "intro",
            "text": "Міграції нгоні (споріднених із зулу) у ХІХ столітті привнесли в чічева окремий, історично більш ранній шар нгуні-лексики, відмінний від пізніших європейських колоніальних запозичень.",
            "en": {
              "text": "19th-century Ngoni migrations (related to the Zulu) brought Chichewa a separate, historically earlier layer of Nguni vocabulary, distinct from the later European colonial loanwords."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Міграції нгоні залишили історичний шар лексики, старіший за колоніальні запозичення.",
                "історичний шар нгуні"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ngoni (Nguni) Historical Contact — B2"
      },
      {
        "id": "fixed-idiomatic-proverbs-mwambi",
        "title": "Miyambi — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Прислів'я (miyambi) уживаються цілими блоками з переносним значенням, не виведеним з буквального перекладу окремих слів, і часто зберігають архаїчну граматичну структуру.",
            "en": {
              "text": "Proverbs (miyambi) are used as whole blocks with a figurative meaning not derived from the literal translation of the individual words, and often preserve archaic grammatical structure."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mvula sigwera pa nyumba imodzi. (буквально 'дощ не падає лише на один дім' → біда торкається всіх)",
                "застигла ідіома-прислів'я"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Miyambi: Fixed Proverbs — B2"
      },
      {
        "id": "gule-wamkulu-ritual-vocabulary",
        "title": "Mawu a Gule Wamkulu — B2",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Ритуальна лексика таємного товариства Gule Wamkulu, визнаного ЮНЕСКО нематеріальною спадщиною людства, утворює окремий, майже незрозумілий поза церемонією словниковий шар.",
            "en": {
              "text": "The ritual vocabulary of the Gule Wamkulu secret society, recognized by UNESCO as intangible human heritage, forms a separate vocabulary layer nearly incomprehensible outside the ceremony."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ритуальна лексика Gule Wamkulu вживається лише в церемоніальному контексті.",
                "спеціалізований ритуальний шар"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Gule Wamkulu Ritual Vocabulary — B2"
      },
      {
        "id": "code-switching-english-urban",
        "title": "Kusakaniza Chingerezi ndi Chichewa — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "У міському й освіченому мовленні типове перемикання кодів усередині одного речення — граматичний каркас чічева, а частина лексики вставляється з англійської без адаптації.",
            "en": {
              "text": "Urban, educated speech typically code-switches within a single sentence — the grammatical frame is Chichewa, while some vocabulary is inserted from English without adaptation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ndili ku office.",
                "Я в офісі (English office вставлене напряму)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "English-Chichewa Code-Switching — B2"
      },
      {
        "id": "numeral-classifier-absence",
        "title": "Kupanda Ziwerengero Zapadera — B2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від багатьох східноазійських мов, чічева не вимагає окремого класифікатора для лічби — сама класова система іменника вже виконує цю узгоджувальну функцію.",
            "en": {
              "text": "Unlike many East Asian languages, Chichewa requires no separate counting classifier — the noun's own class system already performs that agreement function."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Класова система іменника замінює потребу в окремому класифікаторі.",
                "клас іменника замість класифікатора"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "No Separate Numeral Classifiers — B2"
      },
      {
        "id": "discourse-particles",
        "title": "Mawu Ogwirizanitsa Nkhani: Basi, Kaya — B1",
        "emoji": "🗣️",
        "sections": [
          {
            "type": "intro",
            "text": "Дискурсивні частки basi ('досить, і все') і kaya ('хтозна') організують розмову, позначаючи завершення думки чи невпевненість, а не описуючи предмет чи дію.",
            "en": {
              "text": "The discourse particles basi ('that's it, enough') and kaya ('who knows') organize conversation, marking the closure of a thought or uncertainty, rather than describing an object or action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kaya akubwera lero.",
                "Хтозна, чи він прийде сьогодні."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Discourse Particles: Basi, Kaya — B1"
      },
      {
        "id": "honorific-plural-address",
        "title": "Umachi wa Chiwerengero Zambiri — B2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Займенник множини inu ('ви') іноді вживається й до однієї поважної особи як знак пошани — та сама стратегія множини-як-поваги, що й у багатьох мовах світу.",
            "en": {
              "text": "The plural pronoun inu ('you-plural') is sometimes used for a single respected person as a sign of respect — the same plural-as-respect strategy found in many world languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ввічливе звертання множиною до однієї поважної особи.",
                "множина як знак поваги"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Plural for Polite Address — B2"
      },
      {
        "id": "time-expression-vocabulary",
        "title": "Mawu a Nthawi — B1",
        "emoji": "🕐",
        "sections": [
          {
            "type": "intro",
            "text": "Вираження часу доби й днів тижня утворює власну лексичну систему, часто пов'язану з побутовими подіями (час доїння, час обіду), а не абстрактним годинником.",
            "en": {
              "text": "Time-of-day and weekday expressions form their own vocabulary system, often tied to everyday events (milking time, lunch time) rather than an abstract clock."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Мовна система часу пов'язана з побутовими подіями дня.",
                "лексика часу, вкорінена в побуті"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Time Expression Vocabulary — B1"
      },
      {
        "id": "compound-verb-serial-constructions",
        "title": "Ziganizo Zophatikizika — B2",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Два дієслова поспіль без сполучника можуть описувати одну складену подію — перше дієслово способу, друге напрямку чи результату.",
            "en": {
              "text": "Two verbs in a row with no conjunction can describe one compound event — the first verb of manner, the second of direction or result."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Anathamanga kutuluka.",
                "Він вибіг (буквально 'бігти-вийти')."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Serial-Like Verb Constructions — B2"
      },
      {
        "id": "loanword-morphological-adaptation",
        "title": "Kusintha kwa Mawu Obwereka — B1",
        "emoji": "🔧",
        "sections": [
          {
            "type": "intro",
            "text": "Запозичені слова, потрапивши в мову, отримують повноцінну приналежність до одного з іменникових класів чічева, а не лишаються поза системою.",
            "en": {
              "text": "Loanwords, once they enter the language, receive full membership in one of Chichewa's noun classes, rather than staying outside the system."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "sitima (потяг, з англ. steamer, повністю інтегроване в клас 9/10)",
                "запозичення, інтегроване в клас іменника"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Morphological Adaptation of Loanwords — B1"
      },
      {
        "id": "negative-past-tense-deeper",
        "title": "Kukana Nthawi Zakale — B2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечний префікс si- поєднується з кожною з трьох ступенів минулого часу окремо, зберігаючи розрізнення віддаленості навіть у запереченні, — заперечення не втрачає деталізовану часову інформацію.",
            "en": {
              "text": "The negative prefix si- combines with each of the three past-tense remoteness levels separately, keeping the remoteness distinction even under negation — negation doesn't lose the detailed temporal information."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Sindinapite dzulo.",
                "Я не ходив учора (заперечення зберігає вчорашню віддаленість)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation Across Past-Tense Remoteness Levels — B2"
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
        "id": "irregular-verbs-common",
        "title": "Ziganizo Zopanda Dongosolo — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово kukhala ('бути, жити') має кілька нерегулярних, суплетивних форм у різних часах, що не виводяться з очікуваного зразка.",
            "en": {
              "text": "The verb kukhala ('to be, to live') has several irregular, suppletive forms across different tenses that can't be derived from the expected pattern."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ndili (я є, не за звичайним зразком дієслова)",
                "суплетивна форма"
              ]
            ]
          }
        ],
        "titleEn": "Irregular Verbs — B1"
      },
      {
        "id": "irregular-class-assignment",
        "title": "Kusankha Gulu Kosayembekezeka — B2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька іменників несподівано потрапляють до іншого класу, ніж очікувалося за формою слова, і тому отримують узгодження, що суперечить видимому закінченню.",
            "en": {
              "text": "A few nouns unexpectedly fall into a different class than the word's shape would suggest, and therefore trigger agreement that contradicts the visible ending."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Деякі іменники мають клас, не передбачуваний з форми слова.",
                "нерегулярне класове узгодження"
              ]
            ]
          }
        ],
        "titleEn": "Irregular Class Assignment — B2"
      },
      {
        "id": "fixed-proverbs-archaic-grammar",
        "title": "Miyambi Yakale — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Прислів'я зберігають архаїчну граматичну структуру й лексику, вже втрачену в живій мові, і вживаються цілими блоками без граматичного розбору.",
            "en": {
              "text": "Proverbs preserve archaic grammatical structure and vocabulary already lost from the living language, and are used as whole blocks with no grammatical analysis."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Chinthu chosaoneka sichikhala mumtima.",
                "Те, чого не бачиш, не тримається в серці (застигла приказка з архаїчною структурою)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Archaic Grammar in Proverbs — B2"
      }
    ]
  }
];
