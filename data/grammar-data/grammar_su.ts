// Vymova — data/grammar-data/grammar_su.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_SU: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Kecap Ganti Jalma — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У сунданській, як і в яванській, є мовні регістри ввічливості — тут наведено нейтральні розмовні форми.",
            "en": {
              "text": "Sundanese, like Javanese, has politeness registers — the neutral everyday forms are shown here."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "kuring"
              ],
              [
                "ти",
                "anjeun"
              ],
              [
                "він / вона",
                "manéhna"
              ],
              [
                "ми",
                "urang"
              ],
              [
                "ви",
                "aranjeun"
              ],
              [
                "вони",
                "maranéhna"
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
        "id": "eu-vowel-unique",
        "title": "Vokal Eu — A2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Сунданська має унікальний для регіону голосний, записуваний диграфом eu (шва, подібна до французького eu), якого немає ні в індонезійській/малайській, ні в яванській мовах.",
            "en": {
              "text": "Sundanese has a vowel unique in the region, written with the digraph eu (a schwa similar to French eu), absent from both Indonesian/Malay and Javanese."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "reueus (гордий, з голосним eu)",
                "proud (with the eu vowel)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Unique Eu Vowel — A2"
      },
      {
        "id": "undak-usuk-speech-levels",
        "title": "Undak Usuk Basa — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Сунданська має систему мовних регістрів ввічливості (loma — нейтральний, lemes — шанобливий, kasar — грубий), відмінну й простішу за яванську систему крама, але все ж таку, що вимагає окремого словника залежно від того, до кого звертаєшся.",
            "en": {
              "text": "Sundanese has a system of politeness registers (loma — neutral, lemes — refined, kasar — rough), distinct from and simpler than Javanese krama, but still requiring a different vocabulary depending on who is being addressed."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "dahar (loma) / neda (lemes, 'їсти')",
                "to eat (neutral vs. refined register)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Undak Usuk: Speech Levels — B1"
      },
      {
        "id": "affix-system-overview",
        "title": "Rarangkén: Panyambung Kecap — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Сунданська утворює нові слова багатою системою префіксів, інфіксів і суфіксів (di-, ng-, pa-, -an, -keun), доданих до кореня, а не окремими допоміжними словами.",
            "en": {
              "text": "Sundanese forms new words with a rich system of prefixes, infixes, and suffixes (di-, ng-, pa-, -an, -keun) added to the root, rather than separate auxiliary words."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "tulis (писати) → nulis (пишу, актив ng-)",
                "write → to write (active ng- prefix)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Affix System — B1"
      },
      {
        "id": "no-verb-tense",
        "title": "Kecap Pagawéan: Teu Aya Waktos — A2",
        "emoji": "⏰",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово не відмінюється за часом взагалі: одна й та сама форма вживається для минулого, теперішнього й майбутнього, а час уточнюють лише прислівники чи контекст.",
            "en": {
              "text": "The verb does not conjugate for tense at all: the same form is used for past, present, and future, with time clarified only by adverbs or context."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kuring dahar. (їм / їв / їстиму — залежно від контексту)",
                "I eat/ate/will eat (same verb form, tense from context)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "No Verb Tense Conjugation — A2"
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
        "id": "perfective-geus",
        "title": "Geus: Réngsé — A2",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Завершена дія позначається часткою geus ('вже'), поставленою перед дієсловом, — без цієї частки та сама дієслівна форма читалася б як теперішня чи майбутня.",
            "en": {
              "text": "A completed action is marked with the particle geus ('already'), placed before the verb — without it, the same verb form would read as present or future."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kuring geus dahar.",
                "Я вже поїв."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Perfective: geus — A2"
      },
      {
        "id": "progressive-keur",
        "title": "Keur: Keur Kénéh — A2",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія в момент мовлення позначається часткою keur ('саме зараз'), поставленою перед дієсловом.",
            "en": {
              "text": "An action in progress at the moment of speaking is marked with the particle keur ('right now'), placed before the verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kuring keur dahar.",
                "Я саме їм."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Progressive: keur — A2"
      },
      {
        "id": "future-rek-bade",
        "title": "Rek / Bade: Rencana — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній намір позначається часткою rek (нейтральний регістр) чи bade (шанобливий регістр), поставленою перед дієсловом.",
            "en": {
              "text": "Future intention is marked with the particle rek (neutral register) or bade (refined register), placed before the verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kuring rek dahar.",
                "Я збираюся їсти."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Future Intention: rek / bade — A2"
      },
      {
        "id": "not-yet-can-tacan",
        "title": "Can / Tacan: Encan — A2",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Частка can/tacan ('ще не') заперечує дію, вказуючи, що вона не сталася дотепер, — окрема частка від звичайного заперечення henteu.",
            "en": {
              "text": "The particle can/tacan ('not yet') negates an action by indicating it hasn't happened up to now — a separate particle from ordinary negation with henteu."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kuring can dahar.",
                "Я ще не їв."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Not Yet: can / tacan — A2"
      },
      {
        "id": "habitual-sok",
        "title": "Sok: Biasana — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Звична дія позначається часткою sok ('зазвичай'), поставленою перед дієсловом, окремо від тривалого keur чи завершеного geus.",
            "en": {
              "text": "A habitual action is marked with the particle sok ('usually'), placed before the verb, distinct from the progressive keur or perfective geus."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kuring sok dahar isuk-isuk.",
                "Я зазвичай снідаю вранці."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Habitual: sok — B1"
      },
      {
        "id": "experiential-pernah",
        "title": "Pernah: Kungsi — B1",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Досвід у минулому ('колись траплялося') позначається часткою pernah/kungsi, поставленою перед дієсловом, — окрема категорія від простого завершення дії.",
            "en": {
              "text": "Past experience ('has ever happened') is marked with the particle pernah/kungsi, placed before the verb — a separate category from simple completion."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kuring pernah ka Bandung.",
                "Я колись був у Бандунзі."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Experiential: pernah — B1"
      },
      {
        "id": "imperative-mood",
        "title": "Paréntah — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб — гола форма дієслова без частки часу, часто пом'якшена часткою mangga для ввічливості.",
            "en": {
              "text": "The imperative is the bare verb form with no tense particle, often softened with the particle mangga for politeness."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Dahar!",
                "Їж!"
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
        "id": "prohibitive-ulah-tong",
        "title": "Ulah / Tong: Larangan — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заборонний наказ утворюється часткою ulah/tong ('не смій'), поставленою перед дієсловом, — окрема частка від звичайного заперечення.",
            "en": {
              "text": "The prohibitive is formed with the particle ulah/tong ('don't'), placed before the verb — a separate particle from ordinary negation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ulah dahar di dieu!",
                "Не їж тут!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Prohibitive: ulah / tong — A2"
      },
      {
        "id": "potential-bisa",
        "title": "Bisa: Kamampuh — A2",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Здатність чи можливість виражається словом bisa ('могти'), поставленим перед основним дієсловом.",
            "en": {
              "text": "Ability or possibility is expressed with the word bisa ('can'), placed before the main verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kuring bisa nyarita Sunda.",
                "Я можу говорити сунданською."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Potential: bisa — A2"
      },
      {
        "id": "obligation-kudu-kedah",
        "title": "Kudu / Kedah: Kawajiban — B1",
        "emoji": "📋",
        "sections": [
          {
            "type": "intro",
            "text": "Обов'язок виражається словом kudu (нейтральний регістр) чи kedah (шанобливий регістр), поставленим перед основним дієсловом.",
            "en": {
              "text": "Obligation is expressed with the word kudu (neutral register) or kedah (refined register), placed before the main verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kuring kudu dahar.",
                "Я мушу їсти."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Obligation: kudu / kedah — B1"
      },
      {
        "id": "desiderative-hayang",
        "title": "Hayang: Kahayang — A2",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Бажання виражається словом hayang ('хотіти'), поставленим перед основним дієсловом.",
            "en": {
              "text": "A wish is expressed with the word hayang ('to want'), placed before the main verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kuring hayang dahar.",
                "Я хочу їсти."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Desiderative: hayang — A2"
      },
      {
        "id": "probability-meureun",
        "title": "Meureun: Sigana — B1",
        "emoji": "🌫️",
        "sections": [
          {
            "type": "intro",
            "text": "Імовірність передається часткою meureun/sigana ('мабуть'), поставленою після підмета, а не окремим граматичним способом дієслова.",
            "en": {
              "text": "Probability is conveyed with the particle meureun/sigana ('probably'), placed after the subject, rather than a separate grammatical verb mood."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Manéhna meureun geus dahar.",
                "Він, мабуть, уже поїв."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Probability: meureun — B1"
      },
      {
        "id": "conditional-mun",
        "title": "Mun: Upami — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовне речення вводиться сполучником mun (нейтральний) чи upami (шанобливий), поставленим на початку підрядного речення.",
            "en": {
              "text": "A conditional sentence is introduced with the conjunction mun (neutral) or upami (refined), placed at the start of the subordinate clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mun hujan, kuring cicing di imah.",
                "Якщо піде дощ, я залишуся вдома."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional: mun — B1"
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
        "id": "active-prefix-ng",
        "title": "Rarangkén Ng-: Aktif — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Активний стан дієслова утворюється носовим префіксом ng- (чи його алофоном m-/n-/ny-, залежним від першого звука кореня), доданим до основи.",
            "en": {
              "text": "The active voice of a verb is formed with the nasal prefix ng- (or its allophone m-/n-/ny-, depending on the root's first sound), added to the stem."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "tulis (корінь) → nulis (пишу, активна форма)",
                "write (root) → to write (active form)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Active Prefix: ng- — B1"
      },
      {
        "id": "passive-prefix-di",
        "title": "Rarangkén Di-: Pasif — B1",
        "emoji": "📥",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний стан утворюється префіксом di-, доданим до кореня дієслова, і вживається частіше за активний, якщо об'єкт важливіший за діяча.",
            "en": {
              "text": "The passive voice is formed with the prefix di-, added to the verb root, and is used more often than the active when the object matters more than the agent."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "tulis (корінь) → ditulis (написаний)",
                "write (root) → is written (passive)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Passive Prefix: di- — B1"
      },
      {
        "id": "causative-suffix-keun",
        "title": "Rarangkén -Keun: Sabab — B1",
        "emoji": "⚙️",
        "sections": [
          {
            "type": "intro",
            "text": "Каузативний суфікс -keun, доданий до кореня, передає значення 'змусити зробити' чи 'зробити щось для когось' (бенефактивне значення).",
            "en": {
              "text": "The causative suffix -keun, added to the root, conveys 'make/cause to do' or 'do something for someone' (benefactive meaning)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "dahar (їсти) → dahareun (годувати)",
                "eat → to feed (causative)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Causative Suffix: -keun — B1"
      },
      {
        "id": "locative-suffix-an",
        "title": "Rarangkén -An: Tempat/Balikan — B1",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -an, доданий до кореня, позначає місце дії чи повторювану дію залежно від значення кореня.",
            "en": {
              "text": "The suffix -an, added to the root, marks either the location of an action or a repeated action, depending on the root's meaning."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "tulis (писати) → tulisan (написане, текст)",
                "write → writing (a text, locative/result meaning)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Locative/Repetitive Suffix: -an — B1"
      },
      {
        "id": "nominal-prefix-pa",
        "title": "Rarangkén Pa-: Nomina — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Префікс pa-, доданий до кореня дієслова, утворює іменник, що позначає діяча чи інструмент дії.",
            "en": {
              "text": "The prefix pa-, added to a verb root, forms a noun denoting the doer or instrument of the action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "tani (землеробство) → patani (землероб)",
                "farming → farmer (agent noun)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Nominal Prefix: pa- — B1"
      },
      {
        "id": "reduplication-plural",
        "title": "Dwilingga: Loba — A2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Множина часто утворюється повним подвоєнням кореня іменника, а не окремим суфіксом.",
            "en": {
              "text": "The plural is often formed by fully reduplicating the noun root, rather than with a dedicated suffix."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "budak → budak-budak",
                "дитина → діти"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reduplication for Plural — A2"
      },
      {
        "id": "classifier-counting",
        "title": "Kecap Pambantu Wilangan — B2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "При лічбі предметів між числівником та іменником вставляється класифікатор, залежний від категорії предмета (urang для людей, siki для дрібних предметів).",
            "en": {
              "text": "When counting objects, a classifier is inserted between the numeral and the noun, depending on the object's category (urang for people, siki for small objects)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "tilu urang murid",
                "троє учнів (з класифікатором для людей)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Numeral Classifiers — B2"
      },
      {
        "id": "cardinal-numbers",
        "title": "Wilangan: 1-10 — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "table",
            "title": "Числа 1-10",
            "rows": [
              [
                "1",
                "hiji"
              ],
              [
                "2",
                "dua"
              ],
              [
                "3",
                "tilu"
              ],
              [
                "5",
                "lima"
              ],
              [
                "10",
                "sapuluh"
              ]
            ],
            "en": {
              "title": "Numbers 1-10"
            }
          }
        ],
        "titleEn": "Cardinal Numbers 1-10 — A1"
      },
      {
        "id": "word-order-svo",
        "title": "Runtuyan Kecap: SVO — A2",
        "emoji": "📝",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів — підмет-присудок-додаток (SVO), типовий для більшості австронезійських мов Індонезії.",
            "en": {
              "text": "The basic word order is Subject-Verb-Object (SVO), typical of most Austronesian languages of Indonesia."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kuring maca buku.",
                "Я читаю книгу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Word Order: SVO — A2"
      },
      {
        "id": "negation-henteu",
        "title": "Henteu / Teu: Nolak — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Звичайне заперечення дієслова чи прикметника утворюється часткою henteu/teu, поставленою перед ним.",
            "en": {
              "text": "Ordinary negation of a verb or adjective is formed with the particle henteu/teu, placed before it."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kuring teu dahar.",
                "Я не їм."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation: henteu / teu — A1"
      },
      {
        "id": "possessive-word-order",
        "title": "Kapunyaan: Runtuyan — A2",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійність передається простим порядком слів: власник ставиться одразу після посідомого предмета, без окремого прийменника чи закінчення.",
            "en": {
              "text": "Possession is conveyed simply by word order: the possessor is placed directly after the possessed thing, with no separate preposition or ending."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "buku kuring",
                "моя книга"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Possession via Word Order — A2"
      },
      {
        "id": "demonstratives",
        "title": "Kecap Panuduh — A2",
        "emoji": "👉",
        "sections": [
          {
            "type": "table",
            "title": "Вказівні займенники",
            "rows": [
              [
                "цей",
                "ieu"
              ],
              [
                "той",
                "eta"
              ]
            ],
            "en": {
              "title": "Demonstratives"
            }
          }
        ],
        "titleEn": "Demonstratives — A2"
      },
      {
        "id": "interrogatives",
        "title": "Kecap Pananya — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "хто",
                "saha"
              ],
              [
                "що",
                "naon"
              ],
              [
                "де",
                "dimana"
              ],
              [
                "коли",
                "iraha"
              ]
            ],
            "en": {
              "title": "Question Words"
            }
          }
        ],
        "titleEn": "Interrogatives — A1"
      },
      {
        "id": "comparative-leuwih",
        "title": "Babandingan: Leuwih...Batan — B1",
        "emoji": "📊",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняльний ступінь утворюється часткою leuwih ('більш') перед прикметником, а об'єкт порівняння вводиться сполучником batan ('ніж').",
            "en": {
              "text": "The comparative degree is formed with the particle leuwih ('more') before the adjective, with the compared object introduced by batan ('than')."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ieu leuwih gede batan eta.",
                "Це більше за те."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparative: leuwih...batan — B1"
      },
      {
        "id": "superlative-pang-na",
        "title": "Superlatif: Pang-...-Na — B1",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь порівняння утворюється циркумфіксом pang-...-na, що охоплює прикметник з обох боків, — не окремою часткою, а суфіксально-префіксальним засобом.",
            "en": {
              "text": "The superlative is formed with the circumfix pang-...-na, wrapping the adjective on both sides — a prefix-suffix device rather than a separate particle."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "panggedena",
                "найбільший"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Superlative: pang-...-na — B1"
      },
      {
        "id": "conjunctions",
        "title": "Kecap Panyambung — A1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники",
            "rows": [
              [
                "і",
                "jeung"
              ],
              [
                "або",
                "atawa"
              ],
              [
                "але",
                "tapi"
              ]
            ],
            "en": {
              "title": "Conjunctions"
            }
          }
        ],
        "titleEn": "Conjunctions — A1"
      },
      {
        "id": "relative-clause-anu",
        "title": "Kecap Panyambung: Anu — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Означальні (відносні) підрядні речення вводяться незмінною часткою anu ('що/який'), незалежно від живості чи класу означуваного іменника.",
            "en": {
              "text": "Relative clauses are introduced by the invariable particle anu ('who/which'), regardless of the animacy or class of the noun being modified."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "jalma anu keur dahar",
                "людина, що їсть"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Clause: anu — B1"
      },
      {
        "id": "adjective-as-stative-verb",
        "title": "Sipat Salaku Kecap Pagawéan — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники граматично поводяться як дієслова: 'бути великим' передається просто прикметником gede, без потреби в допоміжному дієслові 'бути'.",
            "en": {
              "text": "Adjectives behave grammatically like verbs: 'to be big' is conveyed simply with the adjective gede, with no auxiliary 'to be' verb needed."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Imahna gede.",
                "Дім великий (букв. 'дім великіє')."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adjectives as Stative Verbs — B1"
      },
      {
        "id": "reduplication-intensity",
        "title": "Dwilingga Salin Swara: Tarik — B2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Часткове подвоєння зі зміною голосного (dwilingga salin swara) підсилює значення прикметника, передаючи інтенсивність чи різноманітність.",
            "en": {
              "text": "Partial reduplication with vowel change (dwilingga salin swara) intensifies an adjective's meaning, conveying intensity or variety."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "bulak-balik (туди-сюди)",
                "back and forth (partial reduplication with vowel shift)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reduplication with Vowel Change — B2"
      },
      {
        "id": "diminutive-expression",
        "title": "Leutik: Ekspresi Kelutikan — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувальний відтінок передається окремим прикметником leutik ('маленький') перед іменником, а не суфіксом, доданим до нього.",
            "en": {
              "text": "A diminutive shade of meaning is conveyed with the separate adjective leutik ('small') before the noun, rather than a suffix attached to it."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "budak leutik",
                "малятко (букв. 'мала дитина')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Diminutive: leutik — B1"
      },
      {
        "id": "vocative-simple",
        "title": "Panyaur — A2",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "При звертанні до когось ім'я вживається без жодних змін, іноді з часткою mang/kang перед ним для ввічливого звертання до чоловіка.",
            "en": {
              "text": "In direct address, a name is used unchanged, sometimes with the particle mang/kang before it for polite address to a man."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kang Asep, mangga linggih!",
                "Пане Асепе, прошу, сідайте!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Vocative Address — A2"
      },
      {
        "id": "existential-aya",
        "title": "Aya: Ayana — B1",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Наявність чогось передається словом aya ('є'), незалежно від класу предмета, про який ідеться.",
            "en": {
              "text": "The existence of something is expressed with the word aya ('there is'), regardless of the class of the thing being talked about."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Aya jalma loba.",
                "Там багато людей."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Existential: aya — B1"
      },
      {
        "id": "adjective-before-or-after",
        "title": "Tempat Sipat — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник завжди стоїть після іменника, який він означає.",
            "en": {
              "text": "The adjective always follows the noun it modifies."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "imah gede",
                "великий дім"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adjective Position — A2"
      },
      {
        "id": "question-particle-naha",
        "title": "Naha: Patarosan Enya/Henteu — A2",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні утворюється часткою naha на початку речення, без інверсії порядку слів.",
            "en": {
              "text": "A yes/no question is formed with the particle naha at the start of the sentence, with no inversion of word order."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Naha anjeun bisa nyarita Sunda?",
                "Ти можеш говорити сунданською?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Yes/No Question: naha — A2"
      },
      {
        "id": "ka-di-ti-prepositions",
        "title": "Kecap Pangantét: Ka, Di, Ti — A2",
        "emoji": "📌",
        "sections": [
          {
            "type": "table",
            "title": "Прийменники",
            "rows": [
              [
                "до",
                "ka"
              ],
              [
                "в/на",
                "di"
              ],
              [
                "з (від)",
                "ti"
              ]
            ],
            "en": {
              "title": "Prepositions"
            }
          }
        ],
        "titleEn": "Prepositions: ka, di, ti — A2"
      },
      {
        "id": "speech-level-detail",
        "title": "Loma, Lemes, Kasar: Conto — B2",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Вибір регістру залежить не лише від адресата, а й від того, про кого йдеться: шанобливу форму lemes уживають, говорячи ПРО поважну особу, тоді як про себе кажуть у нейтральному чи навіть 'смиренному' регістрі.",
            "en": {
              "text": "Register choice depends not only on who is addressed but who is being talked about: the refined lemes form is used when speaking ABOUT a respected person, while speaking about oneself uses the neutral or even a 'humble' register."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "dahar (loma) / tuang (lemes, про поважну особу) / neda (lemes, про себе)",
                "eat (neutral / refined-about-others / humble-about-self)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Speech Levels in Practice — B2"
      },
      {
        "id": "aksara-sunda-script",
        "title": "Aksara Sunda: Naskah Revival — B2",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Аксара Сунда — власне складове письмо, відроджене в сучасну добу з давньосунданських рукописів XIV-XVIII ст.; сьогодні його вживають переважно на вивісках і символічно для збереження культурної ідентичності, а не в повсякденному письмі.",
            "en": {
              "text": "Aksara Sunda is an indigenous syllabic script, revived in modern times from Old Sundanese manuscripts of the 14th-18th centuries; today it is mostly used on signage and symbolically for cultural preservation, rather than in everyday writing."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ᮞᮥᮔ᮪ᮓ (Sunda в аксара сунда)",
                "'Sunda' written in the Aksara Sunda script"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Aksara Sunda Script — B2"
      },
      {
        "id": "angklung-unesco-heritage",
        "title": "Angklung: Alat Musik — B1",
        "emoji": "🎋",
        "sections": [
          {
            "type": "intro",
            "text": "Ангклунг — бамбуковий інструмент, що видає звук вертикальним потрушуванням, визнаний ЮНЕСКО шедевром нематеріальної культурної спадщини й символ сунданської культури, знаний у всьому світі.",
            "en": {
              "text": "The angklung is a bamboo instrument sounded by vertical shaking, recognized by UNESCO as a Masterpiece of Intangible Cultural Heritage and a globally known symbol of Sundanese culture."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "maen angklung",
                "грати на ангклунгу"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Angklung: UNESCO Heritage Instrument — B1"
      },
      {
        "id": "wayang-golek-puppetry",
        "title": "Wayang Golek: Wayang Kai — B1",
        "emoji": "🎎",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від яванського тіньового театру wayang kulit (з шкіряних ляльок), сунданський wayang golek використовує об'ємні дерев'яні ляльки, які видно повністю, а не лише в тіні.",
            "en": {
              "text": "Unlike Javanese shadow-puppet theater wayang kulit (using leather puppets), Sundanese wayang golek uses three-dimensional wooden puppets visible in full, not just as shadows."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "dalang wayang golek",
                "лялькар вайянг ґолек"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Wayang Golek: Wooden Puppet Theater — B1"
      },
      {
        "id": "silat-martial-arts",
        "title": "Pencak Silat — B1",
        "emoji": "🥋",
        "sections": [
          {
            "type": "intro",
            "text": "Пенчак-силат — традиційне бойове мистецтво з елементами танцю й духовної практики, з розвиненою термінологією стійок і рухів, поширене по всій Західній Яві.",
            "en": {
              "text": "Pencak silat is a traditional martial art blending dance and spiritual practice, with developed terminology for stances and movements, widespread across West Java."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "maen pencak",
                "займатися пенчак-силатом"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Pencak Silat Martial Arts — B1"
      },
      {
        "id": "lalab-raw-vegetable-cuisine",
        "title": "Lalab jeung Sambel — B1",
        "emoji": "🥬",
        "sections": [
          {
            "type": "intro",
            "text": "Lalab — сирі овочі й зелень, подані з гострим соусом sambal, — центральний елемент сунданської кухні, що вирізняє її серед інших індонезійських кулінарних традицій акцентом на сирій, а не смаженій їжі.",
            "en": {
              "text": "Lalab is raw vegetables and greens served with spicy sambal sauce — a central element of Sundanese cuisine, distinguishing it from other Indonesian culinary traditions by its emphasis on raw rather than fried food."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "lalab jeung sambel",
                "сирі овочі зі самбалом"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Lalab: Raw Vegetable Cuisine — B1"
      },
      {
        "id": "parahyangan-highland-culture",
        "title": "Tanah Pasundan: Parahyangan — B2",
        "emoji": "⛰️",
        "sections": [
          {
            "type": "intro",
            "text": "Регіон Паріанган/Парахьянган ('обитель богів') у гірській Західній Яві, з центром у Бандунзі, вважається духовним серцем сунданської ідентичності, з прохолодним кліматом, чайними плантаціями й давніми святилищами.",
            "en": {
              "text": "The Priangan/Parahyangan region ('abode of the gods') in mountainous West Java, centered on Bandung, is considered the spiritual heartland of Sundanese identity, with a cool climate, tea plantations, and ancient shrines."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Tatar Sunda (Земля сунданців)",
                "the Sundanese Land"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Parahyangan: The Highland Heartland — B2"
      },
      {
        "id": "gamelan-degung",
        "title": "Gamelan Degung — B1",
        "emoji": "🎶",
        "sections": [
          {
            "type": "intro",
            "text": "Ансамбль gamelan degung — сунданський різновид гамелана, менший за яванський, із власним ладом (пелог дегунг) і характерним, ніжнішим звучанням, вживаний для урочистих зустрічей.",
            "en": {
              "text": "The gamelan degung ensemble is a Sundanese variant of gamelan, smaller than the Javanese version, with its own scale (pelog degung) and a distinctively softer sound, used for ceremonial welcomes."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "nabeuh gamelan degung",
                "грати на гамелан дегунг"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Gamelan Degung — B1"
      },
      {
        "id": "colors",
        "title": "Warna — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "table",
            "title": "Кольори",
            "rows": [
              [
                "червоний",
                "beureum"
              ],
              [
                "чорний",
                "hideung"
              ],
              [
                "білий",
                "bodas"
              ]
            ],
            "en": {
              "title": "Colors"
            }
          }
        ],
        "titleEn": "Colors — A1"
      },
      {
        "id": "numbers-tens",
        "title": "Wilangan: Puluh — A2",
        "emoji": "🔟",
        "sections": [
          {
            "type": "table",
            "title": "Десятки",
            "rows": [
              [
                "20",
                "dua puluh"
              ],
              [
                "100",
                "saratus"
              ]
            ],
            "en": {
              "title": "Tens"
            }
          }
        ],
        "titleEn": "Numbers: Tens — A2"
      },
      {
        "id": "days-of-week",
        "title": "Poe Dina Saminggu — A2",
        "emoji": "📅",
        "sections": [
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "понеділок",
                "Senén"
              ],
              [
                "п'ятниця",
                "Jumaah"
              ],
              [
                "неділя",
                "Minggu"
              ]
            ],
            "en": {
              "title": "Days"
            }
          }
        ],
        "titleEn": "Days of the Week — A2"
      },
      {
        "id": "family-terms",
        "title": "Kulawarga — A2",
        "emoji": "👪",
        "sections": [
          {
            "type": "table",
            "title": "Родина",
            "rows": [
              [
                "батько",
                "bapa"
              ],
              [
                "мати",
                "ibu"
              ],
              [
                "брат",
                "lanceuk"
              ]
            ],
            "en": {
              "title": "Family"
            }
          }
        ],
        "titleEn": "Family Terms — A2"
      },
      {
        "id": "greetings",
        "title": "Salam — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "table",
            "title": "Вітання",
            "rows": [
              [
                "Привіт",
                "Wilujeng sumping"
              ],
              [
                "Дякую",
                "Hatur nuhun"
              ]
            ],
            "en": {
              "title": "Greetings"
            }
          }
        ],
        "titleEn": "Greetings — A1"
      },
      {
        "id": "weather-vocabulary",
        "title": "Cuaca — A2",
        "emoji": "☁️",
        "sections": [
          {
            "type": "table",
            "title": "Погода",
            "rows": [
              [
                "сонце",
                "panonpoé"
              ],
              [
                "дощ",
                "hujan"
              ],
              [
                "вітер",
                "angin"
              ]
            ],
            "en": {
              "title": "Weather"
            }
          }
        ],
        "titleEn": "Weather Vocabulary — A2"
      },
      {
        "id": "body-parts",
        "title": "Anggota Awak — A2",
        "emoji": "🧍",
        "sections": [
          {
            "type": "table",
            "title": "Частини тіла",
            "rows": [
              [
                "голова",
                "sirah"
              ],
              [
                "рука",
                "leungeun"
              ],
              [
                "око",
                "panon"
              ]
            ],
            "en": {
              "title": "Body Parts"
            }
          }
        ],
        "titleEn": "Body Parts — A2"
      },
      {
        "id": "clothing-kebaya-iket",
        "title": "Iket jeung Kebaya — B1",
        "emoji": "👘",
        "sections": [
          {
            "type": "intro",
            "text": "Iket — традиційна чоловіча пов'язка на голову з десятками способів зав'язування, кожен зі своїм символічним значенням; кебая — традиційне жіноче вбрання, спільне для регіону, але з власними сунданськими візерунками.",
            "en": {
              "text": "The iket is a traditional men's head-wrap with dozens of tying styles, each with its own symbolic meaning; the kebaya is traditional women's attire common to the region but with its own Sundanese patterns."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "make iket",
                "носити ікет"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Iket and Kebaya: Traditional Dress — B1"
      },
      {
        "id": "animals-vocabulary",
        "title": "Sasatoan — A2",
        "emoji": "🐅",
        "sections": [
          {
            "type": "table",
            "title": "Тварини",
            "rows": [
              [
                "тигр",
                "maung"
              ],
              [
                "собака",
                "anjing"
              ],
              [
                "риба",
                "lauk"
              ]
            ],
            "en": {
              "title": "Animals"
            }
          }
        ],
        "titleEn": "Animal Vocabulary — A2"
      },
      {
        "id": "cardinal-directions",
        "title": "Arah Mata Angin — B1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "table",
            "title": "Сторони світу",
            "rows": [
              [
                "північ",
                "kaler"
              ],
              [
                "південь",
                "kidul"
              ],
              [
                "схід",
                "wetan"
              ],
              [
                "захід",
                "kulon"
              ]
            ],
            "en": {
              "title": "Directions"
            }
          }
        ],
        "titleEn": "Cardinal Directions — B1"
      },
      {
        "id": "paribasa-proverbs",
        "title": "Paribasa: Wewejangan — B1",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Прислів'я (paribasa) — важлива частина усної традиції, часто вживані в повсякденній мові як спосіб непрямо висловити моральне повчання, ввічливо уникаючи прямої критики.",
            "en": {
              "text": "Proverbs (paribasa) are an important part of oral tradition, often used in everyday speech as a way to convey a moral point indirectly, politely avoiding direct criticism."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "cikaracak ninggang batu, laun-laun jadi legok",
                "крапля точить камінь (буквально: крапаюча вода, врешті, видовбує камінь)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Paribasa: Sundanese Proverbs — B1"
      },
      {
        "id": "rice-terrace-culture",
        "title": "Sawah: Sistem Pertanian — B1",
        "emoji": "🌾",
        "sections": [
          {
            "type": "intro",
            "text": "Терасові рисові поля (sawah) на гірських схилах Західної Яви — не лише сільськогосподарська, а й естетична та духовна спадщина, оспівана в піснях і живописі як символ гармонії з природою.",
            "en": {
              "text": "Terraced rice fields (sawah) on West Java's mountain slopes are not only an agricultural but an aesthetic and spiritual heritage, celebrated in songs and painting as a symbol of harmony with nature."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "sawah anu héjo",
                "зелені рисові тераси"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Rice Terrace Culture — B1"
      },
      {
        "id": "tea-plantation-heritage",
        "title": "Kebon Teh: Warisan — B1",
        "emoji": "🍵",
        "sections": [
          {
            "type": "intro",
            "text": "Чайні плантації колоніальної доби на прохолодних гірських схилах Пунчак і Бандунга досі формують економіку й пейзаж Західної Яви, з власною лексикою для збору й обробки листя.",
            "en": {
              "text": "Colonial-era tea plantations on the cool mountain slopes around Puncak and Bandung still shape West Java's economy and landscape, with dedicated vocabulary for leaf picking and processing."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kebon teh",
                "чайна плантація"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Tea Plantation Heritage — B1"
      },
      {
        "id": "food-vocabulary",
        "title": "Kadaharan — A2",
        "emoji": "🍚",
        "sections": [
          {
            "type": "table",
            "title": "Їжа",
            "rows": [
              [
                "рис",
                "sangu"
              ],
              [
                "риба, засмажена",
                "lauk goreng"
              ],
              [
                "темпе",
                "tempe"
              ]
            ],
            "en": {
              "title": "Food"
            }
          }
        ],
        "titleEn": "Food Vocabulary — A2"
      },
      {
        "id": "imah-panggung-architecture",
        "title": "Imah Panggung: Arsitéktur — B1",
        "emoji": "🏠",
        "sections": [
          {
            "type": "intro",
            "text": "Традиційний сунданський дім будують на дерев'яних палях над землею (imah panggung), що захищає від повеней і шкідників, — конструкція, спільна з іншими austronesian-будинками, але з власними сунданськими декоративними деталями даху.",
            "en": {
              "text": "Traditional Sundanese houses are built on wooden stilts above the ground (imah panggung), protecting against floods and pests — a construction shared with other Austronesian houses, but with its own Sundanese roof decoration details."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "imah panggung",
                "будинок на палях"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Imah Panggung: Stilt-House Architecture — B1"
      },
      {
        "id": "coordinating-conjunctions-extra",
        "title": "Kecap Panyambung Lianna — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Сполучник sabab ('тому що') і частка tapi mah ('однак') розширюють базовий набір jeung/atawa/tapi, додаючи причинові й протиставні зв'язки.",
            "en": {
              "text": "The conjunction sabab ('because') and the particle tapi mah ('however') extend the basic jeung/atawa/tapi set, adding causal and contrastive links."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kuring cicing di imah sabab hujan.",
                "Я залишаюся вдома, бо йде дощ."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Further Conjunctions — B1"
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
        "id": "irregular-pronoun-register-shift",
        "title": "Kecap Ganti: Robah Tingkatan — B2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Займенник першої особи kuring ('я') узагалі не має шанобливого відповідника lemes: у формальному мовленні його просто уникають, замінюючи власним ім'ям чи посадою, а не окремою займенниковою формою, як для інших слів.",
            "en": {
              "text": "The first-person pronoun kuring ('I') has no refined lemes counterpart at all: in formal speech, it is simply avoided and replaced with one's own name or title, rather than by a dedicated pronoun form as with other words."
            }
          },
          {
            "type": "table",
            "title": "Виняток у системі регістрів",
            "rows": [
              [
                "kuring (немає lemes-відповідника)",
                "I (no refined-register counterpart exists)"
              ]
            ],
            "en": {
              "title": "Register-System Exception"
            }
          }
        ],
        "titleEn": "Irregular Register Gap: kuring — B2"
      },
      {
        "id": "irregular-negation-teu-aya",
        "title": "Nolak Ayana: Teu Aya, Lain Aya Teu — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення наявності утворюється словосполученням teu aya ('немає'), а не звичайним порядком 'заперечення + дієслово', властивим для інших дієслів, — виняткова, фіксована пара слів.",
            "en": {
              "text": "Negating existence is formed with the fixed phrase teu aya ('there isn't'), rather than the ordinary 'negation + verb' order used for other verbs — an exceptional, fixed word pairing."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярна конструкція",
            "rows": [
              [
                "teu aya (не *aya teu)",
                "there isn't (fixed order, not the general pattern)"
              ]
            ],
            "en": {
              "title": "Irregular Construction"
            }
          }
        ],
        "titleEn": "Irregular Existential Negation: teu aya — B1"
      },
      {
        "id": "irregular-comparative-hade",
        "title": "Babandingan Teu Umum: Hade → Leuwih Hade — B1",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "У розмовному мовленні прикметник hade ('добрий') нерідко замінюють словом sae ('добрий', шанобливий регістр) навіть у нейтральних реченнях, коли йдеться про якість чужої роботи, — порушення звичайного регістрового розподілу.",
            "en": {
              "text": "In colloquial speech, the adjective hade ('good') is often replaced with sae ('good', refined register) even in otherwise neutral sentences when referring to the quality of someone else's work — a break from the ordinary register distribution."
            }
          },
          {
            "type": "table",
            "title": "Виняткове вживання регістру",
            "rows": [
              [
                "Padamelanana sae. (замість hade у нейтральному контексті)",
                "Their work is good. (refined-register word used outside its expected context)"
              ]
            ],
            "en": {
              "title": "Irregular Register Use"
            }
          }
        ],
        "titleEn": "Irregular Register Crossover: sae for hade — B1"
      }
    ]
  }
];
