// Vymova — data/grammar-data/grammar_tet.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_TET: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Pronomi Pesoál — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У тетум, як і в кечуа чи ґуарані, розрізняють \"ми з вами\" (ita) і \"ми без вас\" (ami).",
            "en": {
              "text": "Tetum, like Quechua or Guarani, distinguishes \"we including you\" (ita) from \"we excluding you\" (ami)."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ha'u"
              ],
              [
                "ти",
                "o"
              ],
              [
                "він / вона / воно",
                "nia"
              ],
              [
                "ми (з вами)",
                "ita"
              ],
              [
                "ми (без вас)",
                "ami"
              ],
              [
                "ви",
                "imi"
              ],
              [
                "вони",
                "sira"
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
        "id": "portuguese-loanword-layer",
        "title": "Liafuan Portugés — B1",
        "emoji": "🇵🇹",
        "sections": [
          {
            "type": "intro",
            "text": "Через п'ять століть португальської колонізації офіційний тетум (Tetun-Prasa) увібрав величезний шар португальської лексики для сучасних, наукових і абстрактних понять, — часто більший, ніж власне австронезійська основа мови.",
            "en": {
              "text": "Through five centuries of Portuguese colonization, official Tetum (Tetun-Prasa) absorbed a massive layer of Portuguese vocabulary for modern, scientific, and abstract concepts — often larger than the language's own Austronesian core."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "governu (з португальської 'уряд')",
                "government (Portuguese loanword)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Portuguese Loanword Layer — B1"
      },
      {
        "id": "tetun-prasa-terik-split",
        "title": "Tetun-Prasa no Tetun-Terik — B1",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Тетум має дві помітно різні форми: міський Tetun-Prasa (офіційний стандарт Ділі, насичений португальською лексикою) і сільський Tetun-Terik (консервативніший, ближчий до чистої австронезійської основи).",
            "en": {
              "text": "Tetum has two noticeably different forms: urban Tetun-Prasa (the official Dili standard, saturated with Portuguese vocabulary) and rural Tetun-Terik (more conservative, closer to the pure Austronesian base)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "eskola (Prasa, з порт.) vs. власне слово (Terik)",
                "school (Portuguese loan in Prasa vs. native word in Terik)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Tetun-Prasa vs. Tetun-Terik — B1"
      },
      {
        "id": "aspect-particles-no-tense",
        "title": "Ona, Sei: La Iha Tempu — A2",
        "emoji": "⏰",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово не відмінюється за часом взагалі: замість цього вживаються частки на кшталт ona ('вже') чи sei ('ще/буде'), поставлені після дієслова чи перед ним відповідно.",
            "en": {
              "text": "The verb does not conjugate for tense at all: instead, particles like ona ('already') or sei ('still/will') are used, placed after or before the verb respectively."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ha'u han ona.",
                "Я вже поїв."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Aspect Particles Instead of Tense — A2"
      },
      {
        "id": "possessive-nia-linker",
        "title": "Nia: Konetór Umanidade — A2",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійність передається зв'язковим словом nia ('його/її'), поставленим між власником і посідомим предметом, незалежно від особи чи числа власника.",
            "en": {
              "text": "Possession is expressed with the linking word nia ('his/her/its'), placed between the possessor and the possessed thing, regardless of the possessor's person or number."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "João nia livru",
                "книга Жоао"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Possessive Linker: nia — A2"
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
        "id": "perfective-ona",
        "title": "Ona: Halo Tiha Ona — A2",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Завершена дія позначається часткою ona ('вже'), поставленою після дієслова.",
            "en": {
              "text": "A completed action is marked with the particle ona ('already'), placed after the verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nia mai ona.",
                "Він уже прийшов."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Perfective: ona — A2"
      },
      {
        "id": "future-sei",
        "title": "Sei: Lalais — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутня дія позначається часткою sei ('буде'), поставленою перед дієсловом.",
            "en": {
              "text": "A future action is marked with the particle sei ('will'), placed before the verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ha'u sei han.",
                "Я їстиму."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Future: sei — A2"
      },
      {
        "id": "progressive-hela",
        "title": "Hela: Halo Daudauk — B1",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія в теперішньому передається часткою hela ('поки/ще'), поставленою після дієслова.",
            "en": {
              "text": "An ongoing present action is expressed with the particle hela ('while/still'), placed after the verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ha'u han hela.",
                "Я саме їм."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Progressive: hela — B1"
      },
      {
        "id": "not-yet-seidauk",
        "title": "Seidauk: La Hela — A2",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Частка seidauk ('ще не') заперечує дію, вказуючи, що вона не сталася дотепер, — комбінація sei ('буде') і заперечення, окрема від звичайного la.",
            "en": {
              "text": "The particle seidauk ('not yet') negates an action by indicating it hasn't happened up to now — a combination of sei ('will') and negation, distinct from ordinary la."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ha'u seidauk han.",
                "Я ще не їв."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Not Yet: seidauk — A2"
      },
      {
        "id": "habitual-dala-barak",
        "title": "Dala Barak: Kostume — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Звична дія позначається прислівником dala barak ('часто') або відсутністю будь-якої часткової позначки взагалі, тож контекст визначає звичність.",
            "en": {
              "text": "A habitual action is marked with the adverb dala barak ('often') or simply by the absence of any particle marking, with context determining habituality."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ha'u han arroz dala barak.",
                "Я часто їм рис."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Habitual: dala barak — B1"
      },
      {
        "id": "imperative-mood",
        "title": "Fó Ordem — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб — гола форма дієслова без часткової позначки, часто пом'якшена словом favór ('будь ласка', з португальської) для ввічливості.",
            "en": {
              "text": "The imperative is the bare verb form with no particle, often softened with the word favór ('please', from Portuguese) for politeness."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Han!",
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
        "id": "negation-la",
        "title": "La: Negativu — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Звичайне заперечення дієслова чи прикметника утворюється часткою la, поставленою перед ним.",
            "en": {
              "text": "Ordinary negation of a verb or adjective is formed with the particle la, placed before it."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ha'u la han.",
                "Я не їм."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation: la — A1"
      },
      {
        "id": "prohibitive-labele",
        "title": "Labele: Proibidu — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заборонний наказ утворюється складеним словом labele ('не можна', з la + bele), поставленим перед дієсловом, — окреме слово від звичайного заперечення la.",
            "en": {
              "text": "The prohibitive is formed with the compound word labele ('not allowed', from la + bele), placed before the verb — a distinct word from ordinary negation la."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Labele han iha ne'e!",
                "Не можна їсти тут!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Prohibitive: labele — B1"
      },
      {
        "id": "potential-bele",
        "title": "Bele: Kapasidade — A2",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Здатність чи можливість виражається словом bele ('могти'), поставленим перед основним дієсловом.",
            "en": {
              "text": "Ability or possibility is expressed with the word bele ('can'), placed before the main verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ha'u bele koalia Tetun.",
                "Я можу говорити тетумом."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Potential: bele — A2"
      },
      {
        "id": "obligation-tenke",
        "title": "Tenke: Obrigasaun — B1",
        "emoji": "📋",
        "sections": [
          {
            "type": "intro",
            "text": "Обов'язок виражається словом tenke ('мусити'), поставленим перед основним дієсловом.",
            "en": {
              "text": "Obligation is expressed with the word tenke ('must'), placed before the main verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ha'u tenke han.",
                "Я мушу їсти."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Obligation: tenke — B1"
      },
      {
        "id": "desiderative-hakarak",
        "title": "Hakarak: Dezeiu — A2",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Бажання виражається словом hakarak ('хотіти'), поставленим перед основним дієсловом.",
            "en": {
              "text": "A wish is expressed with the word hakarak ('to want'), placed before the main verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ha'u hakarak han.",
                "Я хочу їсти."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Desiderative: hakarak — A2"
      },
      {
        "id": "conditional-se",
        "title": "Se: Kondisaun — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовне речення вводиться сполучником se ('якщо', з португальської), поставленим на початку підрядного речення.",
            "en": {
              "text": "A conditional sentence is introduced with the conjunction se ('if', from Portuguese), placed at the start of the subordinate clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Se udan tau, ha'u hela iha uma.",
                "Якщо піде дощ, я залишуся вдома."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional: se — B1"
      },
      {
        "id": "probability-karik",
        "title": "Karik: Diak Liu — B1",
        "emoji": "🌫️",
        "sections": [
          {
            "type": "intro",
            "text": "Імовірність передається часткою karik ('мабуть'), поставленою в кінці речення, а не окремим граматичним способом дієслова.",
            "en": {
              "text": "Probability is conveyed with the particle karik ('maybe'), placed at the end of the sentence, rather than a separate grammatical verb mood."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nia mai karik.",
                "Він, мабуть, прийде."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Probability: karik — B1"
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
        "id": "word-order-svo",
        "title": "Ordem Liafuan: SVO — A2",
        "emoji": "📝",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів — підмет-присудок-додаток (SVO), типовий для більшості австронезійських мов регіону.",
            "en": {
              "text": "The basic word order is Subject-Verb-Object (SVO), typical of most Austronesian languages of the region."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ha'u han etu.",
                "Я їм рис."
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
        "id": "no-grammatical-gender",
        "title": "La Iha Jéneru — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Тетум зовсім не має граматичного роду: іменники, прикметники й займенник третьої особи nia однаково означають і чоловічий, і жіночий рід.",
            "en": {
              "text": "Tetum has no grammatical gender at all: nouns, adjectives, and the third-person pronoun nia equally mean both masculine and feminine."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "nia (він/вона/воно)",
                "he/she/it (single pronoun for all)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "No Grammatical Gender — A1"
      },
      {
        "id": "optional-plural-sira",
        "title": "Sira: Barak — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина не обов'язкова й здебільшого передається лише контекстом; коли треба уточнити, після іменника ставлять слово sira ('вони/багато').",
            "en": {
              "text": "Plurality is not obligatory and is mostly conveyed by context alone; when clarification is needed, the word sira ('they/many') is placed after the noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "labarik sira",
                "діти (labarik + sira)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Optional Plural: sira — A2"
      },
      {
        "id": "cardinal-numbers",
        "title": "Numeru: 1-10 — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "table",
            "title": "Числа 1-10",
            "rows": [
              [
                "1",
                "ida"
              ],
              [
                "2",
                "rua"
              ],
              [
                "3",
                "tolu"
              ],
              [
                "5",
                "lima"
              ],
              [
                "10",
                "sanulu"
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
        "title": "Pronomi Demonstrativu — A2",
        "emoji": "👉",
        "sections": [
          {
            "type": "table",
            "title": "Вказівні займенники",
            "rows": [
              [
                "цей",
                "ne'e"
              ],
              [
                "той",
                "ne'ebá"
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
        "title": "Liafuan Husu — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "хто",
                "se"
              ],
              [
                "що",
                "saida"
              ],
              [
                "де",
                "iha ne'ebé"
              ],
              [
                "коли",
                "bainhira"
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
        "id": "comparative-liu",
        "title": "Komparasaun: Liu — B1",
        "emoji": "📊",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняльний ступінь утворюється словом liu ('більш/понад'), поставленим після прикметника, а об'єкт порівняння вводиться прийменником duke чи liu fali.",
            "en": {
              "text": "The comparative is formed with the word liu ('more/beyond'), placed after the adjective, with the compared object introduced by duke or liu fali."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ida ne'e boot liu ida ne'ebá.",
                "Це більше за те."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparative: liu — B1"
      },
      {
        "id": "superlative-liu-hotu",
        "title": "Superlativu: Liu Hotu — B1",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь порівняння утворюється фразою liu hotu ('за все') після прикметника.",
            "en": {
              "text": "The superlative is formed with the phrase liu hotu ('of all') after the adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "boot liu hotu",
                "найбільший"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Superlative: liu hotu — B1"
      },
      {
        "id": "conjunctions",
        "title": "Konjunsaun — A1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники",
            "rows": [
              [
                "і",
                "no"
              ],
              [
                "або",
                "ka"
              ],
              [
                "але",
                "maibé"
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
        "id": "relative-clause-neebe",
        "title": "Ne'ebé: Fuaitau Fa'atatau — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Означальні (відносні) підрядні речення вводяться незмінним відносним словом ne'ebé ('що/який'), запозиченим і адаптованим із португальської, незалежно від живості чи числа означуваного іменника.",
            "en": {
              "text": "Relative clauses are introduced by the invariable relative word ne'ebé ('who/which'), borrowed and adapted from Portuguese, regardless of the animacy or number of the noun being modified."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ema ne'ebé mai",
                "людина, що прийшла"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Clause: ne'ebé — B1"
      },
      {
        "id": "adjective-position",
        "title": "Pozisaun Adjetivu — A2",
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
                "uma boot",
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
        "id": "adjective-as-stative-verb",
        "title": "Adjetivu Nu'udar Veape — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники граматично поводяться як дієслова: 'бути великим' передається просто прикметником boot, без потреби в допоміжному дієслові 'бути'.",
            "en": {
              "text": "Adjectives behave grammatically like verbs: 'to be big' is conveyed simply with the adjective boot, with no auxiliary 'to be' verb needed."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Uma ne'e boot.",
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
        "title": "Repitisaun Liafuan — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Повне подвоєння прикметника чи прислівника підсилює або урізноманітнює значення, передаючи інтенсивність без окремого підсилювального слова.",
            "en": {
              "text": "Fully reduplicating an adjective or adverb intensifies or diversifies its meaning, conveying intensity without a separate intensifying word."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ne'e-ne'e",
                "різноманітні (букв. 'це-це')"
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
        "id": "diminutive-oan",
        "title": "Oan: Kiik — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувальний відтінок передається суфіксом -oan ('дитина/маленьке'), доданим до іменника, а не окремим прикметником.",
            "en": {
              "text": "A diminutive shade of meaning is conveyed with the suffix -oan ('child/small'), added to the noun, rather than a separate adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "asu-oan",
                "цуценя (собака + oan)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Diminutive: -oan — B1"
      },
      {
        "id": "vocative-simple",
        "title": "Vokativu — A2",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "При звертанні до когось ім'я вживається без жодних змін, іноді з часткою ó попереду для наголосу.",
            "en": {
              "text": "In direct address, a name is used unchanged, sometimes with the particle ó before it for emphasis."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ó João, mai!",
                "Жоао, ходи сюди!"
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
        "id": "existential-iha",
        "title": "Iha: Existénsia — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Наявність чогось передається словом iha ('є/мати'), тим самим, що й прийменник 'в/на', — одне слово для двох різних граматичних функцій.",
            "en": {
              "text": "The existence of something is expressed with the word iha ('there is/to have'), the same word used as the preposition 'in/at' — one word serving two different grammatical functions."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Iha ema barak.",
                "Там багато людей."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Existential/Locative: iha — A2"
      },
      {
        "id": "question-particle-ka",
        "title": "Ka: Pergunta — A2",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні утворюється часткою ka в кінці речення, без інверсії порядку слів, — та сама частка ka, що вживається і як сполучник 'або'.",
            "en": {
              "text": "A yes/no question is formed with the particle ka at the end of the sentence, with no inversion of word order — the same particle ka also used as the conjunction 'or'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "O bele koalia Tetun ka?",
                "Ти можеш говорити тетумом?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Yes/No Question: ka — A2"
      },
      {
        "id": "prepositions-simple",
        "title": "Preposisaun — A2",
        "emoji": "📌",
        "sections": [
          {
            "type": "table",
            "title": "Прийменники",
            "rows": [
              [
                "з (разом)",
                "ho"
              ],
              [
                "для",
                "ba"
              ],
              [
                "з (від)",
                "husi"
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
        "id": "causative-halo",
        "title": "Halo: Sabab — B1",
        "emoji": "⚙️",
        "sections": [
          {
            "type": "intro",
            "text": "Каузативне значення передається дієсловом halo ('робити'), поставленим перед прикметником чи дієсловом, а не окремим суфіксом.",
            "en": {
              "text": "Causative meaning is conveyed with the verb halo ('to make/do'), placed before the adjective or verb, rather than a dedicated suffix."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "halo moras",
                "заподіяти біль (halo + 'хворий')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Causative: halo — B1"
      },
      {
        "id": "indefinite-marker-ida",
        "title": "Ida: Naran La Sertu — A2",
        "emoji": "1️⃣",
        "sections": [
          {
            "type": "intro",
            "text": "Тетум не має окремого артикля; неозначеність передається числівником ida ('один'), поставленим після іменника.",
            "en": {
              "text": "Tetum has no dedicated article; indefiniteness is conveyed with the numeral ida ('one'), placed after the noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ema ida",
                "якась людина"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Indefinite: ida ('one') — A2"
      },
      {
        "id": "focus-particle-mak",
        "title": "Mak: Fokus — B2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Частка mak, поставлена після виділюваного слова, наголошує на ньому як на найважливішій частині речення, — риса, спільна з деякими іншими малайсько-полінезійськими мовами.",
            "en": {
              "text": "The particle mak, placed after the emphasized word, marks it as the most important part of the sentence — a feature shared with some other Malayo-Polynesian languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ha'u mak mai.",
                "Це я прийшов (наголос на 'я')."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Focus Particle: mak — B2"
      },
      {
        "id": "postposed-adjective-also",
        "title": "Mós: Tan — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Частка mós ('теж'), поставлена після слова, додає значення включення, — приєднується безпосередньо до слова, яке потребує наголосу.",
            "en": {
              "text": "The particle mós ('also'), placed after a word, adds a sense of inclusion — attached directly to the word requiring emphasis."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ha'u mós hakarak.",
                "Я теж хочу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Additive Particle: mós — B1"
      },
      {
        "id": "possessive-pronoun-forms",
        "title": "Pronomi Posesivu — A2",
        "emoji": "🔑",
        "sections": [
          {
            "type": "table",
            "title": "Присвійні займенники",
            "rows": [
              [
                "мій",
                "ha'u nia"
              ],
              [
                "твій",
                "ita nia"
              ],
              [
                "наш",
                "ami nia"
              ]
            ],
            "en": {
              "title": "Possessive Pronouns"
            }
          }
        ],
        "titleEn": "Possessive Pronoun Forms — A2"
      },
      {
        "id": "converb-sequential-hafoin",
        "title": "Hafoin: Tuir Malu — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Послідовні дії з'єднуються сполучником hafoin ('потім'), поставленим між дієсловами, замість дієприслівникової форми.",
            "en": {
              "text": "Sequential actions are joined with the conjunction hafoin ('then'), placed between verbs, rather than a converb form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Han hafoin toba.",
                "Поїсти, а потім лягти спати."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Sequential Connector: hafoin — B1"
      },
      {
        "id": "classifier-simple",
        "title": "Klasifikadór Simples — B2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "При лічбі окремих предметів між числівником та іменником іноді вставляють класифікатор ka'an ('штука'), особливо для круглих чи фруктоподібних предметів.",
            "en": {
              "text": "When counting individual objects, the classifier ka'an ('piece') is sometimes inserted between the numeral and the noun, especially for round or fruit-like objects."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ai-farina ka'an tolu",
                "три плоди хлібного дерева"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Simple Classifier: ka'an — B2"
      },
      {
        "id": "dual-colonial-history",
        "title": "Kolonializmu Portugés no Indonézia — B2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Тетум формувався під подвійним колоніальним тиском: п'ять століть португальського панування (1515-1975) і 24 роки жорсткої індонезійської окупації (1975-1999), кожна з яких залишила окремий лексичний шар.",
            "en": {
              "text": "Tetum was shaped under dual colonial pressure: five centuries of Portuguese rule (1515-1975) and 24 years of harsh Indonesian occupation (1975-1999), each leaving a distinct lexical layer."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "liafuan portugés no bahasa indonézia",
                "португальські й індонезійські запозичення"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Dual Portuguese/Indonesian Colonial History — B2"
      },
      {
        "id": "independence-2002",
        "title": "Independénsia 2002 — B1",
        "emoji": "🇹🇱",
        "sections": [
          {
            "type": "intro",
            "text": "Тимор-Лешті здобув незалежність 2002 року після референдуму й перехідного управління ООН — одна з наймолодших держав світу, тож тетум лише нещодавно закріпив свій статус офіційної мови поряд із португальською.",
            "en": {
              "text": "Timor-Leste gained independence in 2002 after a referendum and UN transitional administration — one of the world's youngest states, so Tetum only recently secured its official-language status alongside Portuguese."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Loron Independénsia (20 Maiu)",
                "Independence Day (May 20)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Independence in 2002 — B1"
      },
      {
        "id": "lulik-sacred-concept",
        "title": "Lulik: Sagradu ho Tabu — B2",
        "emoji": "🏠",
        "sections": [
          {
            "type": "intro",
            "text": "Lulik ('священне/заборонене') — центральне поняття тиморської духовності, що охоплює місця, предмети й соціальні правила, порушення яких карається духовними наслідками, а не лише соціальним осудом.",
            "en": {
              "text": "Lulik ('sacred/forbidden') is a central concept of Timorese spirituality, covering places, objects, and social rules whose violation is punished by spiritual consequences, not just social disapproval."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "uma lulik (священний дім)",
                "the sacred house"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Lulik: The Sacred/Taboo Concept — B2"
      },
      {
        "id": "uma-lulik-architecture",
        "title": "Uma Lulik: Arkitetura Sagradu — B2",
        "emoji": "⛩️",
        "sections": [
          {
            "type": "intro",
            "text": "Ума-лулик — священний дім предків, ритуальний і соціальний центр клану, з високим дахом і власною спорідненою термінологією, що позначає його статус окремо від звичайного житла.",
            "en": {
              "text": "The uma lulik is the sacred ancestral house, the ritual and social center of a clan, with a tall roof and its own kinship terminology marking its status apart from ordinary housing."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "uma lulik boot",
                "великий священний дім"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Uma Lulik: Sacred House Architecture — B2"
      },
      {
        "id": "tais-woven-cloth",
        "title": "Tais — B1",
        "emoji": "🧵",
        "sections": [
          {
            "type": "intro",
            "text": "Таїс — традиційна тканина, виткана вручну на регіональному ткацькому верстаті, з візерунками, що позначають походження й соціальний статус, і дарується як символ поваги на важливих церемоніях.",
            "en": {
              "text": "Tais is a traditional hand-woven cloth made on a regional backstrap loom, with patterns marking origin and social status, and given as a symbol of respect at important ceremonies."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "tais fó ba",
                "подарувати таїс"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Tais: Traditional Woven Cloth — B1"
      },
      {
        "id": "catholic-identity",
        "title": "Katólika: Identidade Nasionál — B1",
        "emoji": "⛪",
        "sections": [
          {
            "type": "intro",
            "text": "Тимор-Лешті — переважно католицька країна в мусульмансько-більшому регіоні Південно-Східної Азії, тож католицизм посідає центральне місце в національній ідентичності, зрощений із традиційними lulik-віруваннями.",
            "en": {
              "text": "Timor-Leste is predominantly Catholic in a Muslim-majority Southeast Asian region, so Catholicism holds a central place in national identity, blended with traditional lulik beliefs."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Missa Domingu (недільна меса)",
                "Sunday Mass"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Catholic National Identity — B1"
      },
      {
        "id": "betel-nut-culture",
        "title": "Bua Malus — B1",
        "emoji": "🌿",
        "sections": [
          {
            "type": "intro",
            "text": "Жування бетелевого горіха з листям бетелю (bua malus) — традиційна практика гостинності й соціального ритуалу, обов'язковий елемент весільних переговорів і зустрічей старійшин.",
            "en": {
              "text": "Chewing areca nut with betel leaf (bua malus) is a traditional hospitality and social ritual, an obligatory element of marriage negotiations and elder gatherings."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "han bua malus",
                "жувати бетелевий горіх"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Bua Malus: Betel Nut Culture — B1"
      },
      {
        "id": "coffee-export-heritage",
        "title": "Kafé Timor — B1",
        "emoji": "☕",
        "sections": [
          {
            "type": "intro",
            "text": "Тиморська кава, вирощена в горах органічно за традиційними методами без пестицидів, стала основним експортним товаром і символом якості на світовому ринку кави.",
            "en": {
              "text": "Timorese coffee, grown organically in the mountains using traditional pesticide-free methods, became the country's main export commodity and a symbol of quality on the world coffee market."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kafé montanha (гірська кава)",
                "mountain coffee"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Timor Coffee Export Heritage — B1"
      },
      {
        "id": "colors",
        "title": "Kór — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "table",
            "title": "Кольори",
            "rows": [
              [
                "червоний",
                "mean"
              ],
              [
                "чорний",
                "metan"
              ],
              [
                "білий",
                "mutin"
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
        "title": "Numeru: Sanulu — A2",
        "emoji": "🔟",
        "sections": [
          {
            "type": "table",
            "title": "Десятки",
            "rows": [
              [
                "20",
                "ruanulu"
              ],
              [
                "100",
                "atus ida"
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
        "id": "days-portuguese-influence",
        "title": "Loron: Portugés Naran — A2",
        "emoji": "📅",
        "sections": [
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "понеділок",
                "segunda-feira"
              ],
              [
                "п'ятниця",
                "sesta-feira"
              ],
              [
                "неділя",
                "domingu"
              ]
            ],
            "en": {
              "title": "Days"
            }
          }
        ],
        "titleEn": "Days of the Week (Portuguese-Derived) — A2"
      },
      {
        "id": "family-terms",
        "title": "Família — A2",
        "emoji": "👪",
        "sections": [
          {
            "type": "table",
            "title": "Родина",
            "rows": [
              [
                "батько",
                "aman"
              ],
              [
                "мати",
                "inan"
              ],
              [
                "брат",
                "maun/alin"
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
        "title": "Kumprimentu — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "table",
            "title": "Вітання",
            "rows": [
              [
                "Привіт",
                "Bom dia/Diak ka lae"
              ],
              [
                "Дякую",
                "Obrigadu/Obrigada"
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
        "title": "Tempu — A2",
        "emoji": "☁️",
        "sections": [
          {
            "type": "table",
            "title": "Погода",
            "rows": [
              [
                "сонце",
                "loro"
              ],
              [
                "дощ",
                "udan"
              ],
              [
                "вітер",
                "anin"
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
        "title": "Isin Parte — A2",
        "emoji": "🧍",
        "sections": [
          {
            "type": "table",
            "title": "Частини тіла",
            "rows": [
              [
                "голова",
                "ulun"
              ],
              [
                "рука",
                "liman"
              ],
              [
                "око",
                "matan"
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
        "id": "food-vocabulary",
        "title": "Ai-Han — A2",
        "emoji": "🍚",
        "sections": [
          {
            "type": "table",
            "title": "Їжа",
            "rows": [
              [
                "рис",
                "etu"
              ],
              [
                "вода",
                "be'e"
              ],
              [
                "риба",
                "ikan"
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
        "id": "cardinal-directions",
        "title": "Direksaun — B1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "table",
            "title": "Сторони світу",
            "rows": [
              [
                "північ",
                "norte"
              ],
              [
                "південь",
                "sul"
              ],
              [
                "схід",
                "leste"
              ],
              [
                "захід",
                "loro sa'e"
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
        "id": "animals-vocabulary",
        "title": "Animál — A2",
        "emoji": "🐃",
        "sections": [
          {
            "type": "table",
            "title": "Тварини",
            "rows": [
              [
                "буйвол",
                "karau"
              ],
              [
                "собака",
                "asu"
              ],
              [
                "курка",
                "manu"
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
        "id": "resistance-history",
        "title": "Luta Rezisténsia — B2",
        "emoji": "✊",
        "sections": [
          {
            "type": "intro",
            "text": "Тетум і мовна ідентичність стали символом опору під час індонезійської окупації: католицька церква проводила меси тетумом як акт мовчазного спротиву, зміцнюючи мову як маркер національної єдності.",
            "en": {
              "text": "Tetum and linguistic identity became symbols of resistance during the Indonesian occupation: the Catholic Church held Mass in Tetum as an act of quiet resistance, strengthening the language as a marker of national unity."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Missa iha Tetun",
                "меса тетумом (акт спротиву)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Language and Resistance History — B2"
      },
      {
        "id": "clothing-vocabulary",
        "title": "Roupa — A2",
        "emoji": "👕",
        "sections": [
          {
            "type": "table",
            "title": "Одяг",
            "rows": [
              [
                "сорочка",
                "kamiza"
              ],
              [
                "взуття",
                "sapatu"
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
        "id": "official-languages-status",
        "title": "Lian Ofisiál: Tetun no Portugés — B2",
        "emoji": "🗣️",
        "sections": [
          {
            "type": "intro",
            "text": "Тимор-Лешті має дві офіційні мови (тетум і португальську) та дві робочі (індонезійську й англійську), — рідкісний випадок чотиримовної адміністративної системи для такої маленької країни.",
            "en": {
              "text": "Timor-Leste has two official languages (Tetum and Portuguese) and two working languages (Indonesian and English) — a rare case of a four-language administrative system for such a small country."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Tetun, Portugés (ofisiál)",
                "Tetum, Portuguese (official)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Four-Language Official/Working Status — B2"
      },
      {
        "id": "greetings-diak-ka-lae",
        "title": "Diak ka Lae: Fasi Kumprimentu — A2",
        "emoji": "👋",
        "sections": [
          {
            "type": "intro",
            "text": "Найпоширеніше побутове вітання — питання diak ka lae? ('добре чи ні?'), на яке зазвичай відповідають diak ('добре'), — прямий переклад того, як тиморці буквально запитують про самопочуття.",
            "en": {
              "text": "The most common everyday greeting is the question diak ka lae? ('good or not?'), usually answered with diak ('good') — a literal translation of how Timorese ask directly about wellbeing."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Diak ka lae? — Diak, obrigadu.",
                "Як справи? — Добре, дякую."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Diak ka Lae: Everyday Greeting — A2"
      },
      {
        "id": "greetings-tais-market",
        "title": "Merkadu Tais: Ekonomia — B1",
        "emoji": "🧺",
        "sections": [
          {
            "type": "intro",
            "text": "Ринок Таїс у Ділі — не лише торговий, а й соціальний центр, де жінки продають тканини таїс і продукти, з власним мовним етикетом торгу (barganha) та ввічливими формулами запрошення покупця.",
            "en": {
              "text": "The Tais Market in Dili is not only a trading but a social hub, where women sell tais cloth and produce, with its own bargaining etiquette (barganha) and polite phrases for inviting a buyer."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "merkadu Tais",
                "ринок Таїс"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Tais Market — B1"
      },
      {
        "id": "coordinating-conjunctions-extra",
        "title": "Konjunsaun Seluk — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Сполучник tanba ('тому що') і частка entaun ('отже') розширюють базовий набір no/ka/maibé, додаючи причинові й наслідкові зв'язки.",
            "en": {
              "text": "The conjunction tanba ('because') and the particle entaun ('therefore') extend the basic no/ka/maibé set, adding causal and consequential links."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ha'u hela iha uma tanba udan tau.",
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
        "id": "irregular-pronoun-formal-portuguese",
        "title": "Pronomi La Regulár: Sinhór — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "У дуже формальному чи офіційному мовленні вживають запозичені з португальської ввічливі звертання (sinhór, dona) замість звичайного займенника o ('ти'), — виняток із питомої займенникової системи тетуму.",
            "en": {
              "text": "In very formal or official speech, Portuguese-borrowed polite address terms (sinhór, dona) are used instead of the ordinary pronoun o ('you') — an exception to Tetum's native pronoun system."
            }
          },
          {
            "type": "table",
            "title": "Виняткове формальне звертання",
            "rows": [
              [
                "o (звичайне) vs. sinhór (формальне, з португальської)",
                "you (ordinary) vs. sir (formal, Portuguese loan)"
              ]
            ],
            "en": {
              "title": "Formal Address Exception"
            }
          }
        ],
        "titleEn": "Irregular Formal Address: sinhór — B1"
      },
      {
        "id": "irregular-negation-lae",
        "title": "Lae: Diferente husi La — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечна відповідь на питання утворюється окремим словом lae ('ні'), відмінним від дієслівного заперечення la, — виняткова пара з тим самим значенням, але різним синтаксичним уживанням.",
            "en": {
              "text": "A negative answer to a question is formed with the separate word lae ('no'), distinct from the verbal negation la — an exceptional pair sharing the same meaning but different syntactic use."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярна пара заперечення",
            "rows": [
              [
                "la (дієслівне заперечення) vs. lae (самостійне 'ні')",
                "la (verbal negation) vs. lae (standalone 'no')"
              ]
            ],
            "en": {
              "title": "Irregular Negation Pair"
            }
          }
        ],
        "titleEn": "Irregular Negation Pair: la vs. lae — B1"
      },
      {
        "id": "irregular-comparative-portuguese-loan",
        "title": "Komparasaun Le'i Regulár: Mellor — B2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "У формальному тетумі порівняльний ступінь слова diak ('добрий') іноді повністю замінюють португальським запозиченням mellor ('кращий') замість регулярної конструкції diak liu.",
            "en": {
              "text": "In formal Tetum, the comparative of diak ('good') is sometimes replaced entirely by the Portuguese loan mellor ('better') instead of the regular diak liu construction."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярне запозичене порівняння",
            "rows": [
              [
                "diak liu (регулярне) vs. mellor (запозичене, формальне)",
                "diak liu (regular) vs. mellor (borrowed, formal)"
              ]
            ],
            "en": {
              "title": "Irregular Loan Comparative"
            }
          }
        ],
        "titleEn": "Irregular Comparative: Portuguese Loan mellor — B2"
      }
    ]
  }
];
