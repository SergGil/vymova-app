// Vymova — data/grammar-data/grammar_ty.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_TY: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Mau Parau Fa'aea — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У таїтянській, як і в інших полінезійських мовах, розрізняють \"ми без вас\" (mātou) і \"ми з вами\" (tātou).",
            "en": {
              "text": "Tahitian, like other Polynesian languages, distinguishes \"we without you\" (mātou) from \"we with you\" (tātou)."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "vau"
              ],
              [
                "ти",
                "ʻoe"
              ],
              [
                "він / вона",
                "ōna"
              ],
              [
                "ми (без вас)",
                "mātou"
              ],
              [
                "ми (з вами)",
                "tātou"
              ],
              [
                "ви",
                "ʻoutou"
              ],
              [
                "вони",
                "rātou"
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
        "id": "minimal-consonant-inventory",
        "title": "Mau Reo Pāpū: Iti Roa — B1",
        "emoji": "🔊",
        "sections": [
          {
            "type": "intro",
            "text": "Таїтянська має один із найменших приголосних інвентарів у світі — лише дев'ять приголосних, оскільки історично втратила звуки /k/, /s/ і /l/ (злиті з ʻ, зникли чи злиті з r), — найскромніший приголосний набір серед полінезійських мов.",
            "en": {
              "text": "Tahitian has one of the smallest consonant inventories in the world — only nine consonants, having historically lost the sounds /k/, /s/, and /l/ (merged into ʻ, vanished, or merged with r) — the most reduced consonant set among Polynesian languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "tahiti (сама назва — лише прості звуки)",
                "Tahiti (the name itself uses only the minimal consonant set)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Minimal Consonant Inventory — B1"
      },
      {
        "id": "glottal-stop-eta",
        "title": "ʻEta: Reo Pāpū Motu — A2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Гортанна змичка (ʻeta), позначена апострофом-подібним знаком ʻ, — повноцінний приголосний фонемо, а не пауза, тож слова, що різняться лише його наявністю, мають зовсім різне значення.",
            "en": {
              "text": "The glottal stop (ʻeta), marked with an apostrophe-like symbol ʻ, is a full phonemic consonant, not just a pause, so words differing only in its presence have completely different meanings."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "taʻi (плакати) vs. tai (море)",
                "to cry vs. sea (the glottal stop alone distinguishes meaning)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Glottal Stop: ʻEta — A2"
      },
      {
        "id": "french-collectivity-context",
        "title": "Farāni Poronetia: Tūhaʻa Farāni — B1",
        "emoji": "🇫🇷",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від Тонга (ніколи не колонізована) чи Самоа (незалежна з 1962 р.), Таїті й уся Французька Полінезія лишаються заморською спільнотою Франції, тож у таїтянській активно вживають значний шар французьких запозичень.",
            "en": {
              "text": "Unlike Tonga (never colonized) or Samoa (independent since 1962), Tahiti and all of French Polynesia remain a French overseas collectivity, so Tahitian actively uses a significant layer of French loanwords."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "farāni (з французької 'французький')",
                "French (French-derived word)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "French Overseas Collectivity Context — B1"
      },
      {
        "id": "lingua-franca-archipelagos",
        "title": "Reo Tumu: Mau Motu ʻArahiraa — B2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Таїтянська слугує регіональною лінгва-франка для всієї Французької Полінезії — архіпелагів Товариства, Маркізьких, Туамоту, Аустральних і Гамбʼє островів, — кожен з яких має власну корінну мову, окрему від таїтянської.",
            "en": {
              "text": "Tahitian serves as the regional lingua franca for all of French Polynesia — the Society, Marquesas, Tuamotu, Austral, and Gambier archipelagos — each of which has its own indigenous language, distinct from Tahitian."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "reo Tahiti (мова о. Таїті, лінгва-франка)",
                "Tahitian language (the archipelago-wide lingua franca)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Lingua Franca Across Multiple Archipelagos — B2"
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
        "id": "present-progressive-te-nei",
        "title": "Te...Nei: Taimi Piri — A1",
        "emoji": "☀️",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія в теперішньому передається циркумфіксом te...nei, що охоплює дієслово з обох боків, — базова конструкція для теперішньої дії.",
            "en": {
              "text": "An ongoing present action is expressed with the circumfix te...nei, wrapping the verb on both sides — the basic construction for present action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Te tāmāʻa nei vau.",
                "Я саме їм."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Progressive: te...nei — A1"
      },
      {
        "id": "past-tense-i-ra",
        "title": "I...Ra: Taimi Mahemo — A2",
        "emoji": "⏪",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий час передається циркумфіксом i...ra (чи i...nei для недавнього минулого), позначаючи завершену дію.",
            "en": {
              "text": "The past tense is expressed with the circumfix i...ra (or i...nei for recent past), marking a completed action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "I tāmāʻa ra vau.",
                "Я поїв."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Past Tense: i...ra — A2"
      },
      {
        "id": "future-tense-e-nei",
        "title": "E...Nei: Taimi Aʻe — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час передається циркумфіксом e...nei (чи e...ra), окремим від теперішнього te...nei лише часовою часткою.",
            "en": {
              "text": "The future tense is expressed with the circumfix e...nei (or e...ra), distinguished from the present te...nei only by the tense particle."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "E tāmāʻa a vau.",
                "Я їстиму."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Future Tense: e...nei/a — A2"
      },
      {
        "id": "perfective-ua",
        "title": "Ua: Fa'aotiraa — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Частка ua позначає зміну стану чи теперішню актуальність результату ('вже'), окрему від простого минулого i...ra, — та сама модель, що й в інших полінезійських мовах.",
            "en": {
              "text": "The particle ua marks a change of state or the present relevance of a result ('already'), distinct from the simple past i...ra — the same pattern found in other Polynesian languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ua tāmāʻa vau.",
                "Я вже поїв (і це важливо зараз)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Perfective/Change-of-State: ua — B1"
      },
      {
        "id": "imperative-mood",
        "title": "Fa'auēraa — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб — гола форма дієслова без часової частки, часто з часткою nā в кінці для пом'якшення.",
            "en": {
              "text": "The imperative is the bare verb form with no tense particle, often with the particle nā at the end to soften it."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Tāmāʻa!",
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
        "id": "prohibitive-eiaha",
        "title": "Eiaha: Ha'apa'oraa — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заборонний наказ утворюється часткою eiaha ('не смій') перед дієсловом, — окрема частка від звичайного заперечення.",
            "en": {
              "text": "The prohibitive is formed with the particle eiaha ('don't') before the verb — a separate particle from ordinary negation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Eiaha e tāmāʻa!",
                "Не їж!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Prohibitive: eiaha — B1"
      },
      {
        "id": "negation-aita",
        "title": "'Aita: Fa'ahaparaa — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Звичайне заперечення утворюється часткою ʻaita, поставленою на початку речення перед часовою часткою й дієсловом.",
            "en": {
              "text": "Ordinary negation is formed with the particle ʻaita, placed at the start of the sentence before the tense particle and the verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ʻAita vau e tāmāʻa nei.",
                "Я не їм."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation: ʻaita — A1"
      },
      {
        "id": "potential-nehenehe",
        "title": "Nehenehe: Ravaraa — B1",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Здатність чи можливість виражається словом nehenehe ('можна/могти'), уживаним із підрядним реченням, введеним часткою e.",
            "en": {
              "text": "Ability or possibility is expressed with the word nehenehe ('can/be possible'), used with a subordinate clause introduced by the particle e."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "E nehenehe ia tāmāʻa.",
                "Можна їсти."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Potential: nehenehe — B1"
      },
      {
        "id": "desiderative-hinaaro",
        "title": "Hinaʻaro: Anaraa — A2",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Бажання виражається словом hinaʻaro ('хотіти'), поставленим перед основним дієсловом.",
            "en": {
              "text": "A wish is expressed with the word hinaʻaro ('to want'), placed before the main verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Te hinaʻaro nei au e tāmāʻa.",
                "Я хочу їсти."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Desiderative: hinaʻaro — A2"
      },
      {
        "id": "not-yet-aore",
        "title": "'Aore A: Ho'e Taime — B1",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Частка ʻaore ʻa ('ще не') заперечує дію, вказуючи, що вона не сталася дотепер, — окрема частка від звичайного заперечення ʻaita.",
            "en": {
              "text": "The particle ʻaore ʻa ('not yet') negates an action by indicating it hasn't happened up to now — a separate particle from ordinary negation ʻaita."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ʻAore a vau i tāmāʻa.",
                "Я ще не їв."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Not Yet: ʻaore ʻa — B1"
      },
      {
        "id": "conditional-mai-te-peu",
        "title": "Mai Te Peu: Tumu Fa'atatau — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовне речення вводиться сполучником mai te peu ('якщо'), поставленим на початку підрядного речення.",
            "en": {
              "text": "A conditional sentence is introduced with the conjunction mai te peu ('if'), placed at the start of the subordinate clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mai te peu e ua, e faʻaea au i te fare.",
                "Якщо піде дощ, я залишуся вдома."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional: mai te peu — B1"
      },
      {
        "id": "obligation-mea-titauhia",
        "title": "Mea Tītauhia: Fa'aheporaa — B1",
        "emoji": "📋",
        "sections": [
          {
            "type": "intro",
            "text": "Обов'язок виражається зворотом mea tītauhia ('потрібно/треба'), поставленим перед основним дієсловом у підрядному реченні.",
            "en": {
              "text": "Obligation is expressed with the phrase mea tītauhia ('it is required'), placed before the main verb in a subordinate clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mea tītauhia ia tāmāʻa vau.",
                "Я мушу їсти."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Obligation: mea tītauhia — B1"
      },
      {
        "id": "habitual-tumu",
        "title": "Tumu: Peʻe-Peʻe — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Звична дія передається часткою tumu ('зазвичай') перед реченням у теперішньому чи минулому часі, окремою від тривалого чи завершеного виду.",
            "en": {
              "text": "A habitual action is expressed with the particle tumu ('usually') before a present- or past-tense sentence, distinct from the progressive or perfective aspect."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Tumu au i te tāmāʻa i te poipoi.",
                "Я зазвичай снідаю вранці."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Habitual: tumu — B1"
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
        "id": "word-order-vso",
        "title": "Fa'anahoraa Parau: VSO — A2",
        "emoji": "📝",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів — присудок-підмет-додаток (VSO): дієслово (з часовою часткою) завжди стоїть на першому місці речення.",
            "en": {
              "text": "The basic word order is Verb-Subject-Object (VSO): the verb (with its tense particle) always stands at the very start of the sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Te tāmāʻa nei te tamaiti i te maʻa.",
                "Дитина їсть їжу (їсть-дитина-їжу)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Word Order: VSO — A2"
      },
      {
        "id": "definite-article-te",
        "title": "Te: Fa'ailoraa — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Означений артикль te вживається і для однини, і для множини, — сам іменник не змінюється, а число визначається контекстом чи окремим словом.",
            "en": {
              "text": "The definite article te is used for both singular and plural — the noun itself never changes, with number determined by context or a separate word."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "te fare (дім/доми)",
                "the house/houses"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Definite Article: te — A1"
      },
      {
        "id": "possessive-a-class",
        "title": "Fa'ahoparaa A: Fa'atere — B1",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійний зв'язок класу 'a' уживається, коли власник контролює предмет (набуте майно, тварини), позначений часткою a перед власником.",
            "en": {
              "text": "The 'a'-class possessive is used when the possessor controls the thing possessed (acquired property, animals), marked with the particle a before the possessor."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "te puaʻa a Teina",
                "свиня Теїни (він контролює тварину)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Possessive Class A: Dominant — B1"
      },
      {
        "id": "possessive-o-class",
        "title": "Fa'ahoparaa O: Fa'atahi — B1",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійний зв'язок класу 'o' уживається для невід'ємних чи нейтральних зв'язків (частини тіла, дім, батьки), позначений часткою o.",
            "en": {
              "text": "The 'o'-class possessive is used for inherent or neutral relations (body parts, home, parents), marked with the particle o."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "te fare o Teina",
                "дім Теїни (невід'ємний зв'язок)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Possessive Class O: Inherent — B1"
      },
      {
        "id": "plural-marker-mau",
        "title": "Mau: Fa'ailonga Rahi — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина не позначається закінченням іменника, а окремим словом mau, поставленим перед ним, — сам іменник узагалі не змінюється.",
            "en": {
              "text": "The plural is not marked with a noun ending but with the separate word mau, placed before it — the noun itself remains completely unchanged."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "te fare → te mau fare",
                "дім → доми"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Plural Marker: mau — A2"
      },
      {
        "id": "cardinal-numbers",
        "title": "Numera: 1-10 — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "table",
            "title": "Числа 1-10",
            "rows": [
              [
                "1",
                "hoʻe"
              ],
              [
                "2",
                "piti"
              ],
              [
                "3",
                "toru"
              ],
              [
                "5",
                "pae"
              ],
              [
                "10",
                "hōhoʻe/ahuru"
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
        "id": "demonstratives",
        "title": "Mau Fa'aiteraa — A2",
        "emoji": "👉",
        "sections": [
          {
            "type": "table",
            "title": "Вказівні займенники",
            "rows": [
              [
                "цей",
                "teie"
              ],
              [
                "той (біля тебе)",
                "tenā"
              ],
              [
                "той (далеко)",
                "tera"
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
        "title": "Mau Uiraa — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "хто",
                "vai"
              ],
              [
                "що",
                "aha"
              ],
              [
                "де",
                "tei hea"
              ],
              [
                "коли",
                "āhea"
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
        "id": "prepositions-simple",
        "title": "Mau Ihoraa — A2",
        "emoji": "📌",
        "sections": [
          {
            "type": "table",
            "title": "Прийменники",
            "rows": [
              [
                "в/на",
                "i"
              ],
              [
                "з (разом)",
                "e"
              ],
              [
                "для",
                "nō"
              ]
            ],
            "en": {
              "title": "Prepositions"
            }
          }
        ],
        "titleEn": "Simple Prepositions — A2"
      },
      {
        "id": "conjunctions",
        "title": "Mau Tūʻatiraa — A1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники",
            "rows": [
              [
                "і",
                "e"
              ],
              [
                "або",
                "aore rā"
              ],
              [
                "але",
                "tera rā"
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
        "id": "relative-clause-tei",
        "title": "Tei: Fuaitau Fa'atano — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Означальні (відносні) підрядні речення часто вводяться словом tei ('той, що'), поставленим перед дієсловом, а не окремим суфіксом.",
            "en": {
              "text": "Relative clauses are often introduced with the word tei ('the one who'), placed before the verb, rather than a dedicated suffix."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "te taata tei haere",
                "чоловік, що йде"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Clause: tei — B1"
      },
      {
        "id": "comparative-mea-maitai-a-e",
        "title": "Fa'ahoparaa: Mea Maitaʻi Aʻe — B1",
        "emoji": "📊",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняльний ступінь утворюється часткою aʻe ('більш'), доданою після прикметника, а об'єкт порівняння вводиться прийменником i.",
            "en": {
              "text": "The comparative degree is formed with the particle aʻe ('more'), added after the adjective, with the compared object introduced by the preposition i."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Rahi aʻe teie i tera.",
                "Це більше за те."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparative: aʻe — B1"
      },
      {
        "id": "superlative-roa",
        "title": "Fa'arahiraa: Roa — B1",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь порівняння утворюється часткою roa ('дуже/найбільш') після прикметника.",
            "en": {
              "text": "The superlative is formed with the particle roa ('very/most') after the adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "rahi roa",
                "найбільший"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Superlative: roa — B1"
      },
      {
        "id": "adjective-as-stative-verb",
        "title": "Fa'aohipa Fa'aau: Veape — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники граматично поводяться як стативні дієслова: 'бути великим' — це саме дієслово rahi, без потреби в окремому допоміжному 'бути'.",
            "en": {
              "text": "Adjectives grammatically function as stative verbs: 'to be big' is simply the verb rahi itself, with no need for a separate auxiliary 'to be'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Te rahi nei te fare.",
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
        "id": "postposed-adjective",
        "title": "Tūʻoro o te Fa'aau — A2",
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
                "te fare rahi",
                "великий дім (букв. 'дім великий')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Postposed Adjective — A2"
      },
      {
        "id": "inclusive-exclusive-first-plural",
        "title": "Tātou vs. Mātou — A2",
        "emoji": "👥",
        "sections": [
          {
            "type": "intro",
            "text": "Займенники першої особи множини обов'язково розрізняють інклюзивне tātou ('ми з вами') та ексклюзивне mātou ('ми без вас').",
            "en": {
              "text": "First-person plural pronouns obligatorily distinguish inclusive tātou ('we, including you') from exclusive mātou ('we, excluding you')."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "E tāmāʻa tātou. / E tāmāʻa mātou.",
                "Ми поїмо (з тобою). / Ми поїмо (без тебе)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Inclusive/Exclusive 'We' — A2"
      },
      {
        "id": "causative-faa",
        "title": "Fa'a-: Ha'apao — B1",
        "emoji": "⚙️",
        "sections": [
          {
            "type": "intro",
            "text": "Каузативний префікс faʻa-, доданий до будь-якого дієслова чи прикметника, передає значення 'змусити/зробити', — надзвичайно продуктивний словотворчий засіб.",
            "en": {
              "text": "The causative prefix faʻa-, added to any verb or adjective, conveys 'make/cause to' — an extremely productive derivational device."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "rahi (великий) → faʻarahi (збільшити)",
                "big → to enlarge (causative)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Causative Prefix: faʻa- — B1"
      },
      {
        "id": "existential-tei-reira",
        "title": "Tei Reira: Vairaʻa — B1",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Наявність чогось у певному місці передається зворотом tei reira ('там є'), із локативним словом reira в кінці конструкції.",
            "en": {
              "text": "The existence of something at a place is expressed with tei reira ('there is'), with the locative word reira at the end of the construction."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Tei reira te mau taata rahi.",
                "Там багато людей."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Existential: tei reira — B1"
      },
      {
        "id": "reduplication-intensity",
        "title": "Fa'a-Piti-Raa: Fa'atotoro — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Часткове чи повне подвоєння слова підсилює значення, передаючи інтенсивність, повторюваність чи розсіяність дії.",
            "en": {
              "text": "Partial or full reduplication of a word intensifies its meaning, conveying intensity, repetition, or dispersal of an action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "haere → haerehaere",
                "іти → гуляти (без мети, туди-сюди)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reduplication for Intensity — B1"
      },
      {
        "id": "vocative-simple",
        "title": "Piʻiraʻa — A2",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "При звертанні до когось ім'я вживається без артикля te, на відміну від звичайного вживання іменника в реченні.",
            "en": {
              "text": "In direct address, a name is used without the article te, unlike its ordinary use as a noun in a sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Teina, haere mai!",
                "Теїно, ходи сюди!"
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
        "id": "negative-existential-aita-e",
        "title": "ʻAita E: Kore — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення наявності передається зворотом ʻaita e ('немає жодного'), а не звичайним запереченням дієслова.",
            "en": {
              "text": "Negating existence is expressed with the phrase ʻaita e ('there is not a single'), rather than the ordinary verb negation pattern."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ʻAita e moni.",
                "Немає грошей."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negative Existential: ʻaita e — B1"
      },
      {
        "id": "restrictive-particle-noa",
        "title": "Noa: Fa'atapearaa — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Частка noa ('лише/просто'), додана після слова, обмежує його значення чи пом'якшує тон висловлення.",
            "en": {
              "text": "The particle noa ('only/just'), added after a word, restricts its meaning or softens the tone of a statement."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "au noa",
                "тільки я"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Restrictive Particle: noa — B1"
      },
      {
        "id": "diminutive-expression",
        "title": "Iti: Fa'ahaparaa — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувальний відтінок передається окремим прикметником iti ('малий') після іменника, а не суфіксом.",
            "en": {
              "text": "A diminutive shade of meaning is conveyed with the separate adjective iti ('small') after the noun, rather than a suffix."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "tamaiti iti",
                "малятко (букв. 'дитина мала')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Diminutive: iti — B1"
      },
      {
        "id": "topic-marker-o",
        "title": "O: Fa'ailoga Autū — B1",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Частка ʻo вводить іменникову фразу як тему висловлювання чи відповідь на питання 'хто/що', ставлячись перед нею на самому початку речення.",
            "en": {
              "text": "The particle ʻo introduces a noun phrase as the topic of an utterance or the answer to a 'who/what' question, placed before it at the very start of the sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ʻO vai oe?",
                "Хто ти?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Topic Marker: ʻo — B1"
      },
      {
        "id": "question-particle-anei",
        "title": "Anei: Uiraa — A2",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні утворюється часткою anei, доданою в кінці речення, без інверсії порядку слів.",
            "en": {
              "text": "A yes/no question is formed with the particle anei, added at the end of the sentence, with no inversion of word order."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "E parau Tahiti ra oe anei?",
                "Ти говориш таїтянською?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Yes/No Question: anei — A2"
      },
      {
        "id": "heiva-festival",
        "title": "Heiva i Tahiti — B1",
        "emoji": "💃",
        "sections": [
          {
            "type": "intro",
            "text": "Хеіва — найбільший щорічний фестиваль танцю, музики й традиційних видів спорту у Французькій Полінезії, що триває цілий місяць і збирає команди танцівників з усіх островів для суворого конкурсного змагання.",
            "en": {
              "text": "Heiva is the largest annual festival of dance, music, and traditional sports in French Polynesia, lasting a full month and gathering dance troupes from every island for rigorous competitive judging."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ʻōrero (традиційна ораторська промова на Хеіва)",
                "ʻōrero (traditional oratory performance at Heiva)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Heiva i Tahiti: The Major Festival — B1"
      },
      {
        "id": "tamure-otea-dance",
        "title": "Tamure, ʻŌtea — B1",
        "emoji": "💃",
        "sections": [
          {
            "type": "intro",
            "text": "Тамуре — таїтянський танець зі швидкими рухами стегон, а отеа — синхронізований танець списів для чоловіків; обидва мають власну ритмічну термінологію, відмінну від інших полінезійських танцювальних традицій.",
            "en": {
              "text": "Tamure is the Tahitian dance with rapid hip movements, while ʻōtea is a synchronized spear dance for men; both have their own rhythmic terminology distinct from other Polynesian dance traditions."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "fai tamure",
                "танцювати тамуре"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Tamure and ʻŌtea Dance Forms — B1"
      },
      {
        "id": "black-pearl-vanilla",
        "title": "Poe ʻUri, Vaniʻa — B1",
        "emoji": "🖤",
        "sections": [
          {
            "type": "intro",
            "text": "Чорна таїтянська перлина (poe ʻuri) й ваніль сорту Vanilla tahitensis — два флагманські експортні товари, що дали Таїті світову впізнаваність далеко за межами туристичної слави.",
            "en": {
              "text": "The black Tahitian pearl (poe ʻuri) and Vanilla tahitensis vanilla are two flagship export products that gave Tahiti worldwide recognition far beyond its tourist fame."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "poe ʻuri Tahiti (чорна таїтянська перлина)",
                "the black Tahitian pearl"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Black Pearls and Vanilla — B1"
      },
      {
        "id": "marae-sacred-sites",
        "title": "Marae — B2",
        "emoji": "🛕",
        "sections": [
          {
            "type": "intro",
            "text": "Мараʻе — відкриті кам'яні святилища доколоніальної релігії, де проводили ритуали й ради вождів, — руїни цих платформ досі шануються як священні місця попри поширене християнство.",
            "en": {
              "text": "Marae are open-air stone shrines of the pre-colonial religion, where rituals and chiefly councils were held — the ruins of these platforms are still revered as sacred sites despite widespread Christianity."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "te marae tumu (стародавнє святилище)",
                "the ancient marae shrine"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Marae: Sacred Stone Sites — B2"
      },
      {
        "id": "pomare-dynasty-history",
        "title": "Te Uʻi Pomare — B2",
        "emoji": "👑",
        "sections": [
          {
            "type": "intro",
            "text": "Династія Помаре об'єднала острів Таїті наприкінці XVIII ст. і правила до французької анексії 1880 р.; королева Помаре IV — одна з найвідоміших постатей опору французькому колоніальному тиску.",
            "en": {
              "text": "The Pomare dynasty unified the island of Tahiti in the late 18th century and ruled until the 1880 French annexation; Queen Pomare IV is one of the most famous figures of resistance to French colonial pressure."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Pomare IV (королева-опозиціонерка)",
                "Queen Pomare IV (a famous figure of resistance)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Pomare Dynasty — B2"
      },
      {
        "id": "monoi-oil-culture",
        "title": "Monoi — B1",
        "emoji": "🌺",
        "sections": [
          {
            "type": "intro",
            "text": "Моноï — олія з кокосового горіха, настояна на квітах тіаре, використовувана для тіла й волосся, — має захищену географічну назву походження, як шампанське чи рокфор.",
            "en": {
              "text": "Monoi is coconut oil infused with tiare flowers, used on skin and hair — it holds a protected geographic designation of origin, like Champagne or Roquefort."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "monoi Tiare Tahiti",
                "моноï з квіткою тіаре"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Monoi Oil — B1"
      },
      {
        "id": "outrigger-canoe-vaa",
        "title": "Vaʻa: Piahi — B1",
        "emoji": "🛶",
        "sections": [
          {
            "type": "intro",
            "text": "Гонки на човнах-аутригерах (vaʻa) — найпопулярніший вид спорту, зі щорічними чемпіонатами між островами; сам човен був історично незамінний для міжострівної навігації й рибальства.",
            "en": {
              "text": "Outrigger canoe racing (vaʻa) is the most popular sport, with annual inter-island championships; the canoe itself was historically essential for inter-island navigation and fishing."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "hoe vaʻa",
                "веслувати на аутригері"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Vaʻa: Outrigger Canoe Racing — B1"
      },
      {
        "id": "gauguin-artistic-legacy",
        "title": "Gauguin i Tahiti — B2",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Французький художник Поль Гоген жив і творив на Таїті наприкінці XIX ст., назавжди пов'язавши острів із європейським мистецьким уявленням про 'тропічний рай', попри суперечливу спадщину колоніальної романтизації.",
            "en": {
              "text": "French painter Paul Gauguin lived and worked in Tahiti in the late 19th century, permanently linking the island to the European artistic imagination of 'tropical paradise', despite the contested legacy of colonial romanticization."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "te mau peʻa a Gauguin",
                "картини Гогена"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Gauguin's Artistic Legacy — B2"
      },
      {
        "id": "colors",
        "title": "Mau ʻŌuti — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "table",
            "title": "Кольори",
            "rows": [
              [
                "червоний",
                "ʻuteʻute"
              ],
              [
                "чорний",
                "reʻore'a/ʻuri"
              ],
              [
                "білий",
                "teatea"
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
        "title": "Numera: Ahuru — A2",
        "emoji": "🔟",
        "sections": [
          {
            "type": "table",
            "title": "Десятки",
            "rows": [
              [
                "20",
                "piti ahuru"
              ],
              [
                "100",
                "hānere"
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
        "title": "Mau Mahana o te Hepetoma — A2",
        "emoji": "📅",
        "sections": [
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "понеділок",
                "Monire"
              ],
              [
                "п'ятниця",
                "Pae"
              ],
              [
                "неділя",
                "Sāpati"
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
        "title": "ʻUtuafare — A2",
        "emoji": "👪",
        "sections": [
          {
            "type": "table",
            "title": "Родина",
            "rows": [
              [
                "батько",
                "metua tāne"
              ],
              [
                "мати",
                "metua vahine"
              ],
              [
                "брат",
                "tuaʻana/tuaiti"
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
        "title": "Fa'aararaa — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "table",
            "title": "Вітання",
            "rows": [
              [
                "Привіт",
                "ʻIa ora na"
              ],
              [
                "Дякую",
                "Māuruuru"
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
        "title": "Te Huru o te Reva — A2",
        "emoji": "☁️",
        "sections": [
          {
            "type": "table",
            "title": "Погода",
            "rows": [
              [
                "сонце",
                "mahana"
              ],
              [
                "дощ",
                "ua"
              ],
              [
                "вітер",
                "matai"
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
        "title": "Mau Tino Tino — A2",
        "emoji": "🧍",
        "sections": [
          {
            "type": "table",
            "title": "Частини тіла",
            "rows": [
              [
                "голова",
                "ʻupoʻo"
              ],
              [
                "рука",
                "rima"
              ],
              [
                "око",
                "mata"
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
        "id": "breadfruit-uru-food",
        "title": "ʻUru — A2",
        "emoji": "🍞",
        "sections": [
          {
            "type": "intro",
            "text": "Хлібне дерево (ʻuru) — основа традиційного раціону, приготоване печеним, вареним чи ферментованим, зі десятками способів обробки залежно від сезону й потреби зберігання.",
            "en": {
              "text": "Breadfruit (ʻuru) is a staple of the traditional diet, prepared baked, boiled, or fermented, with dozens of processing methods depending on season and storage needs."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "tunu ʻuru",
                "запікати хлібне дерево"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "ʻUru: Breadfruit Cuisine — A2"
      },
      {
        "id": "clothing-vocabulary",
        "title": "Mau ʻAhu — A2",
        "emoji": "👕",
        "sections": [
          {
            "type": "table",
            "title": "Одяг",
            "rows": [
              [
                "парео (обгорнута тканина)",
                "pāreu"
              ],
              [
                "взуття",
                "tāpiʻi"
              ]
            ],
            "en": {
              "title": "Clothing"
            }
          }
        ],
        "titleEn": "Clothing Vocabulary — A2"
      },
      {
        "id": "animals-vocabulary",
        "title": "Mau Animara — A2",
        "emoji": "🐟",
        "sections": [
          {
            "type": "table",
            "title": "Тварини",
            "rows": [
              [
                "риба",
                "iʻa"
              ],
              [
                "собака",
                "ʻūrī"
              ],
              [
                "свиня",
                "puaʻa"
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
        "title": "Mau ʻArataʻiraʻa — B1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "table",
            "title": "Сторони світу",
            "rows": [
              [
                "північ",
                "apatoʻerau"
              ],
              [
                "південь",
                "apatoʻa"
              ],
              [
                "схід",
                "hitia o te rā"
              ],
              [
                "захід",
                "toʻoa o te rā"
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
        "id": "european-contact-history",
        "title": "Piri Uputa i te Ao Teretite — B2",
        "emoji": "⛵",
        "sections": [
          {
            "type": "intro",
            "text": "Європейський контакт почався 1767 р. з експедиції Волліса, а потім Бугенвіля й Кука; ранні описи Таїті європейськими мандрівниками сформували стійкий стереотип 'тропічного раю', що досі впливає на світове уявлення про острів.",
            "en": {
              "text": "European contact began in 1767 with Wallis's expedition, followed by Bougainville and Cook; early European accounts of Tahiti shaped a lasting 'tropical paradise' stereotype that still shapes global perceptions of the island."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "te mau taote (перші відвідувачі)",
                "the early European visitors"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "European Contact History — B2"
      },
      {
        "id": "tahitian-diaspora-france",
        "title": "Ta Tahiti i Farāni — B2",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Значна таїтянська й полінезійська діаспора живе у Франції, зокрема через військову та адміністративну зайнятість, зберігаючи мову через культурні асоціації попри географічну відстань у понад 15 000 км.",
            "en": {
              "text": "A significant Tahitian and Polynesian diaspora lives in mainland France, notably through military and administrative employment, sustaining the language through cultural associations despite a geographic distance of over 15,000 km."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Tahitien e noho ra i Farāni",
                "таїтянин, що живе у Франції"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Tahitian Diaspora in France — B2"
      },
      {
        "id": "tatau-tattoo-tahitian-origin",
        "title": "Tātau: Te ʻĀmuiraʻa Peu — B1",
        "emoji": "🖋️",
        "sections": [
          {
            "type": "intro",
            "text": "Слово tatau (звідки й англійське 'tattoo') належить спільній полінезійській мовній спадщині; на Таїті татуювання позначало соціальний статус, родовід і духовний захист із геометричними візерунками, унікальними для кожного острова.",
            "en": {
              "text": "The word tatau (source of the English 'tattoo') belongs to shared Polynesian linguistic heritage; in Tahiti, tattooing marked social status, lineage, and spiritual protection, with geometric patterns unique to each island."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "fai tātau",
                "робити татуювання"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Tātau: Tattoo Tradition — B1"
      },
      {
        "id": "nuclear-testing-history",
        "title": "Mai Moruroa — B2",
        "emoji": "☢️",
        "sections": [
          {
            "type": "intro",
            "text": "Атол Муруроа був місцем французьких ядерних випробувань 1966-1996 рр., подія, що досі впливає на місцеву політичну свідомість і вживається в громадській дискусії поряд із питаннями екологічної справедливості.",
            "en": {
              "text": "Moruroa Atoll was the site of French nuclear testing from 1966 to 1996, an event still shaping local political consciousness and invoked in public discourse alongside environmental justice concerns."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "te tāmāʻaraʻa nūkilea i Moruroa",
                "ядерні випробування на Муруроа"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Nuclear Testing History — B2"
      },
      {
        "id": "coordinating-conjunctions-extra",
        "title": "Mau Tūʻatiraa Ê Atu — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Частка no te mea ('тому що') і сполучник no reira ('отже') розширюють базовий набір e/aore rā/tera rā, додаючи причинові й наслідкові зв'язки.",
            "en": {
              "text": "The particle no te mea ('because') and the connector no reira ('therefore') extend the basic e/aore rā/tera rā set, adding causal and consequential links."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "E faʻaea au i te fare no te mea e ua.",
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
        "id": "irregular-verb-plural-haere",
        "title": "Veape Ere Tūturu: Haere → Ō — B2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово haere ('іти') утворює множинну форму зовсім іншим коренем ō, а не звичайною зміною, — супплетивна пара, спільна риса з іншими полінезійськими мовами.",
            "en": {
              "text": "The verb haere ('to go') forms its plural with an entirely different root ō, rather than an ordinary change — a suppletive pair, a shared trait with other Polynesian languages."
            }
          },
          {
            "type": "table",
            "title": "Супплетивна множина дієслова",
            "rows": [
              [
                "haere (іде, одн.) → ō (ідуть, мн., не *haerehaere)",
                "goes (singular) → go (plural, suppletive)"
              ]
            ],
            "en": {
              "title": "Suppletive Verb Plural"
            }
          }
        ],
        "titleEn": "Irregular Verb Plural: haere → ō — B2"
      },
      {
        "id": "irregular-possessive-class-exceptions",
        "title": "Fa'ahoparaa Ere Tūturu — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька іменників (наприклад, 'книга' чи 'фотографія') можуть уживатися і з класом a, і з класом o залежно від того, чи розглядають предмет як контрольований, чи як невід'ємно пов'язаний, — виняток із чіткого поділу на дві категорії.",
            "en": {
              "text": "A handful of nouns (such as 'book' or 'photograph') can take either the a-class or the o-class depending on whether the object is viewed as controlled or as inherently connected — an exception to the otherwise clean two-way split."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "te buka a Teina (книга, яку він написав) vs. te buka o Teina (книга про нього)",
                "Teina's book (he wrote it) vs. Teina's book (about him)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Possessive-Class Exceptions — B2"
      },
      {
        "id": "irregular-comparative-maitai",
        "title": "Fa'ahoparaa Ere Tūturu: Maitaʻi → Maitaʻi Roa — B1",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник maitaʻi ('добрий') іноді утворює найвищий ступінь через подвоєння roa roa замість очікуваної одинарної частки roa, коли йдеться про абсолютну винятковість.",
            "en": {
              "text": "The adjective maitaʻi ('good') sometimes forms its superlative through the doubled roa roa instead of the expected single particle roa, when absolute exceptionality is meant."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярне подвоєння",
            "rows": [
              [
                "maitaʻi roa roa (не просто *maitaʻi roa)",
                "exceptionally good (doubled intensifier, not the regular single form)"
              ]
            ],
            "en": {
              "title": "Irregular Doubling"
            }
          }
        ],
        "titleEn": "Irregular Superlative Doubling: roa roa — B1"
      }
    ]
  }
];
