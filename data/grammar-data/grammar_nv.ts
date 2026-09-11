// Vymova — data/grammar-data/grammar_nv.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_NV: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Personal Pronoun — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У навахо незалежні займенники часто збігаються за формою (наприклад, \"nihí\" означає і \"ми\", і \"ви\"-множина) — реальне розрізнення несе префікс дієслова, а не сам займенник.",
            "en": {
              "text": "In Navajo, independent pronouns often share the same form (e.g. \"nihí\" means both \"we\" and plural \"you\") — the real distinction is carried by the verb prefix, not the pronoun itself."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "shí"
              ],
              [
                "ти",
                "ni"
              ],
              [
                "він / вона / воно",
                "bí"
              ],
              [
                "ми",
                "nihí"
              ],
              [
                "ви",
                "nihí"
              ],
              [
                "вони",
                "bí"
              ]
            ],
            "en": {
              "title": "Personal Pronouns"
            }
          },
          {
            "type": "note",
            "text": "Дієслово в навахо несе основне граматичне навантаження — незалежний займенник часто взагалі можна опустити, оскільки особу й число вже показують префікси дієслова.",
            "en": {
              "text": "The verb in Navajo carries most of the grammatical load — the independent pronoun can often be dropped entirely, since person and number are already shown by verb prefixes."
            }
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      },
      {
        "id": "classificatory-verb-stems",
        "title": "Classificatory Verb Stems — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово 'дати, тримати, класти' змінює свою основу залежно від форми предмета — окрема основа для круглого предмета, окрема для довгого жорсткого, окрема для гнучкого чи сипкого, — класифікація вбудована в сам корінь дієслова.",
            "en": {
              "text": "The verb 'to give, hold, place' changes its stem depending on the shape of the object — a separate stem for a round object, another for a long rigid one, another for a flexible or granular one — classification built right into the verb root."
            }
          },
          {
            "type": "table",
            "title": "Приклади класифікаторних основ",
            "rows": [
              [
                "-ą́ (круглий/тваринний предмет)",
                "-tłéé' (плоский гнучкий предмет)"
              ],
              [
                "-tį́ (довгий жорсткий предмет)",
                "-lá (сипкий/маса)"
              ]
            ],
            "en": {
              "title": "Classificatory Stem Examples"
            }
          }
        ],
        "titleEn": "Classificatory Verb Stems — B1"
      },
      {
        "id": "tono-alto-bajo",
        "title": "High and Low Tone — A1",
        "emoji": "🎵",
        "sections": [
          {
            "type": "intro",
            "text": "Навахо — тональна мова: високий і низький тон розрізняють значення однаково записаних складів, а тон часто позначається діакритичним знаком над голосною.",
            "en": {
              "text": "Navajo is a tonal language: high and low tone distinguish the meaning of otherwise identically spelled syllables, and tone is often marked with a diacritic over the vowel."
            }
          },
          {
            "type": "table",
            "title": "Приклад тонового розрізнення",
            "rows": [
              [
                "bízhi' (низький тон) vs bízhí (високий тон)",
                "той самий запис звуків, різний тон і значення"
              ]
            ],
            "en": {
              "title": "Tone Distinction Example"
            }
          }
        ],
        "titleEn": "High and Low Tone — A1"
      },
      {
        "id": "code-talkers",
        "title": "The Navajo Code Talkers — A2",
        "emoji": "🎖️",
        "sections": [
          {
            "type": "intro",
            "text": "Під час Другої світової війни морські піхотинці навахо використовували свою мову для створення незламного військового коду — граматична складність і практична відсутність писемної літератури зробили шифр непіддатним ворожому дешифруванню.",
            "en": {
              "text": "During World War II, Navajo Marines used their language to create an unbreakable military code — the grammatical complexity and near-absence of written literature made the cipher impossible for the enemy to decode."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Navajo Code Talkers-yázhí saad yee' naanish áníłtsooz.",
                "Кодотворці навахо використовували мову у службі."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Navajo Code Talkers — A2"
      },
      {
        "id": "negasion-i-preguntas",
        "title": "Negation and Questions — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється циркумфіксом doo...da, що обрамляє дієслово з обох боків; питання без питального слова позначаються часткою sha' чи висхідною інтонацією.",
            "en": {
              "text": "Negation is formed with the circumfix doo...da, which encloses the verb from both sides; yes/no questions are marked with the particle sha' or rising intonation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Doo shił bééhózin da.",
                "Я не знаю."
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
        "id": "imperfective-mode",
        "title": "Imperfective Mode — A2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Недоконаний спосіб позначає незавершену чи тривалу дію взагалі — базовий, найзагальніший спосіб, що охоплює й теперішній момент, і повторювану дію.",
            "en": {
              "text": "The imperfective mode marks an incomplete or ongoing action in general — the basic, most general mode, covering both the present moment and repeated action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Naashá.",
                "Я йду (взагалі, зараз)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Imperfective Mode — A2"
      },
      {
        "id": "perfective-mode",
        "title": "Perfective Mode — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Доконаний спосіб позначає одноразову завершену дію, часто з іншою формою основи дієслова, ніж у недоконаному способі, — не просто час, а окрема граматична категорія.",
            "en": {
              "text": "The perfective mode marks a one-time completed action, often with a different verb stem shape than the imperfective — not simply a tense, but a distinct grammatical category."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Néeshjéé'.",
                "Я пішов (завершено, одноразово)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Perfective Mode — B1"
      },
      {
        "id": "progressive-mode",
        "title": "Progressive Mode — B1",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Прогресивний спосіб окремо позначає дію, що триває саме в момент мовлення, — відмінний від загального недоконаного способу, який може означати й регулярну звичку.",
            "en": {
              "text": "The progressive mode separately marks an action ongoing right at the moment of speaking — distinct from the general imperfective, which can also mean a regular habit."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Naashneʼ.",
                "Я саме граю."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Progressive Mode — B1"
      },
      {
        "id": "future-mode",
        "title": "Future Mode — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній спосіб позначає намір чи передбачувану дію, часто з префіксом doo- на початку слова, окремо від інших способів.",
            "en": {
              "text": "The future mode marks intention or a predicted action, often with the prefix doo- at the start of the word, separate from the other modes."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Deeshááł.",
                "Я піду."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Future Mode — A2"
      },
      {
        "id": "usitative-mode",
        "title": "Usitative Mode — B1",
        "emoji": "🔂",
        "sections": [
          {
            "type": "intro",
            "text": "Звичайний (усітативний) спосіб позначає регулярно повторювану дію як стійку рису чи звичку суб'єкта, — окрема граматична категорія, відмінна і від недоконаного, і від ітеративного способу.",
            "en": {
              "text": "The usitative mode marks a regularly repeated action as a stable trait or habit of the subject — a distinct grammatical category from both the imperfective and the iterative."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Naaghá.",
                "Він зазвичай ходить (постійна звичка)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Usitative Mode — B1"
      },
      {
        "id": "iterative-mode",
        "title": "Iterative Mode — B2",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Ітеративний спосіб позначає дію, що повторюється знову й знову в конкретній ситуації, — не постійна риса, як усітатив, а серія повторень тут і зараз.",
            "en": {
              "text": "The iterative mode marks an action repeated again and again in a specific situation — not a permanent trait like the usitative, but a series of repetitions here and now."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Naanáshjaa'.",
                "Я знову й знову це роблю."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Iterative Mode — B2"
      },
      {
        "id": "optative-mode",
        "title": "Optative Mode — B1",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Оптативний спосіб виражає бажання чи побажання — 'хай станеться' — з власним набором префіксів, відмінним від наказового способу.",
            "en": {
              "text": "The optative mode expresses a wish — 'may it happen' — with its own set of prefixes, distinct from the imperative."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Yisháálgo daniidzin.",
                "Хай я піду (побажання)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Optative Mode — B1"
      },
      {
        "id": "imperative-mode",
        "title": "Imperative Mode — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб має власний префіксальний зразок для прямого звертання, окремий від решти способів дієслова.",
            "en": {
              "text": "The imperative has its own prefix pattern for direct address, separate from the other verb modes."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Wóshdę́ę́ʼ!",
                "Іди сюди!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Imperative Mode — A2"
      },
      {
        "id": "momentaneous-aspect",
        "title": "Momentaneous Aspect — B2",
        "emoji": "⚡",
        "sections": [
          {
            "type": "intro",
            "text": "Моментальний вид позначає дію, що відбувається миттєво, за одну точку в часі, — окрема видова категорія, накладена поверх основного способу.",
            "en": {
              "text": "The momentaneous aspect marks an action happening instantaneously, at a single point in time — a distinct aspectual category layered on top of the base mode."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Momentaneous forms mark a single instant, e.g. striking or dropping.",
                "миттєва подієва дія"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Momentaneous Aspect — B2"
      },
      {
        "id": "continuative-aspect",
        "title": "Continuative Aspect — B2",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Континуативний вид позначає тривалий, розтягнутий у часі стан, — протилежність моментальному виду, з наголосом на протяжності, а не миттєвості.",
            "en": {
              "text": "The continuative aspect marks a state extended and drawn out over time — the opposite of the momentaneous aspect, emphasizing duration rather than instantaneity."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Continuative forms mark an extended ongoing state, not just a moment.",
                "тривалий стан"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Continuative Aspect — B2"
      },
      {
        "id": "semelfactive-aspect",
        "title": "Semelfactive Aspect — B2",
        "emoji": "1️⃣",
        "sections": [
          {
            "type": "intro",
            "text": "Семельфактивний вид позначає рівно одну окрему подію дії, зазвичай тієї, яка за природою повторювана, — 'один-єдиний раз' замість серії.",
            "en": {
              "text": "The semelfactive aspect marks exactly one single occurrence of an action that is by nature repetitive — 'just once' instead of a series."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Semelfactive forms isolate a single occurrence of a typically iterative action.",
                "одна виокремлена подія"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Semelfactive Aspect — B2"
      },
      {
        "id": "distributive-plural-aspect",
        "title": "Distributive Plural Aspect — B2",
        "emoji": "👥",
        "sections": [
          {
            "type": "intro",
            "text": "Розподільний вид позначає, що дію виконують кілька окремих учасників по черзі чи в різних місцях, а не колективно й одночасно, — вбудований у саму дієслівну форму.",
            "en": {
              "text": "The distributive aspect marks that an action is performed by several separate participants one by one or in different places, rather than collectively and at once — built into the verb form itself."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Da'adá.",
                "Вони їдять кожен окремо (розподільно)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Distributive Plural Aspect — B2"
      },
      {
        "id": "customary-vs-usitative-contrast",
        "title": "Customary Aspect vs. Usitative Mode — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Звичаєвий вид і усітативний спосіб обидва передають повторюваність, але звичаєвий вид накладається на недоконаний спосіб і виражає постійний загальний устрій, тоді як усітатив — власний окремий спосіб.",
            "en": {
              "text": "The customary aspect and the usitative mode both convey repetition, but the customary aspect layers onto the imperfective mode to express a permanent general order of things, while the usitative is its own separate mode."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Тонка відмінність між звичаєвим видом і усітативним способом стосується постійності явища.",
                "два способи вираження повторюваності"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Customary Aspect vs. Usitative Mode — B2"
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
        "id": "verb-template-structure",
        "title": "The Verb Word Template — B2",
        "emoji": "🧱",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово навахо будується за фіксованим шаблоном позицій для префіксів — окрема, чітко визначена позиція для способу, виду, підмета, класифікатора й нарешті кореня, — один з найскладніших дієслівних шаблонів серед мов світу.",
            "en": {
              "text": "The Navajo verb is built on a fixed template of prefix positions — a distinct, clearly defined slot for mode, aspect, subject, classifier, and finally the root — one of the most complex verb templates among world languages."
            }
          },
          {
            "type": "table",
            "title": "Спрощений шаблон позицій",
            "rows": [
              [
                "спосіб + вид + підмет + класифікатор + корінь",
                "п'ять чітко визначених позицій, у такому порядку"
              ]
            ],
            "en": {
              "title": "Simplified Position Template"
            }
          }
        ],
        "titleEn": "The Verb Word Template — B2"
      },
      {
        "id": "postpositions-pronominal-prefix",
        "title": "Postpositions with Pronominal Prefixes — B1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Просторові відношення передаються постпозиціями, що приєднують той самий особовий префікс, що й дієслово, — не окреме слово перед іменником, а зв'язана форма з власним займенниковим маркером.",
            "en": {
              "text": "Spatial relations are conveyed with postpositions that attach the same person prefix as the verb — not a separate word before the noun, but a bound form with its own pronominal marker."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "shibee' (біля мене, shi- + bee')",
                "постпозиція з особовим префіксом"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Postpositions with Pronominal Prefixes — B1"
      },
      {
        "id": "sibilant-consonant-harmony",
        "title": "Sibilant Harmony — B2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Усі сибілянти в межах одного дієслівного слова мусять узгоджуватися між собою — якщо один префікс містить 'sh', жоден інший сибілянт у тому самому слові не може бути 's', і навпаки.",
            "en": {
              "text": "All sibilants within a single verb word must harmonize with each other — if one prefix contains 'sh', no other sibilant in that same word can be 's', and vice versa."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Усі приголосні s/sh чи z/zh в одному слові узгоджуються між собою.",
                "сибілянтна гармонія"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Sibilant Harmony — B2"
      },
      {
        "id": "no-grammatical-gender",
        "title": "No Grammatical Gender — A1",
        "emoji": "⚥",
        "sections": [
          {
            "type": "intro",
            "text": "У навахо немає граматичного роду взагалі — займенник третьої особи bí охоплює 'він', 'вона' й 'воно' без розрізнення.",
            "en": {
              "text": "Navajo has no grammatical gender at all — the third-person pronoun bí covers 'he', 'she', and 'it' with no distinction."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "bí (він/вона/воно, той самий займенник для всіх)",
                "займенник без роду"
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
        "id": "fourth-person-obviative",
        "title": "Fourth Person (Obviative) — B2",
        "emoji": "👤",
        "sections": [
          {
            "type": "intro",
            "text": "Коли в реченні є дві особи третьої особи, одна позначається як 'близька' (проксимативна), а інша — як 'четверта особа' (обвіативна), щоб уникнути двозначності про те, хто саме виконав дію.",
            "en": {
              "text": "When a sentence has two third-person referents, one is marked as 'proximate' and the other as 'fourth person' (obviative), to avoid ambiguity about which one performed the action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Обвіативний префікс позначає другорядного з двох третіх осіб у реченні.",
                "розрізнення проксимативної і обвіативної особи"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Fourth Person (Obviative) — B2"
      },
      {
        "id": "word-order-sov",
        "title": "Word Order: SOV — A1",
        "emoji": "↔️",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів — підмет-додаток-присудок, з дієсловом завжди в самому кінці речення, як і в інших полісинтетичних мовах.",
            "en": {
              "text": "The basic word order is subject-object-verb, with the verb always at the very end of the sentence, as in other polysynthetic languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ashkii tsídii yiyiiłtsą́.",
                "Хлопчик побачив птаха (хлопчик-птах-побачив)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Word Order: SOV — A1"
      },
      {
        "id": "demonstratives",
        "title": "Demonstratives: díí, éí — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Вказівне díí ('цей') позначає близький предмет, éí ('той') — уже відомий чи згаданий, обидва стоять перед іменником.",
            "en": {
              "text": "The demonstrative díí ('this') marks a near item, éí ('that') an already known or mentioned one; both stand before the noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "díí kin",
                "цей дім"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Demonstratives: díí, éí — A1"
      },
      {
        "id": "question-words",
        "title": "Question Words — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питальні слова háísh (хто), haʼátʼíísh (що), háadish (де) зазвичай стоять на початку речення.",
            "en": {
              "text": "The question words háísh (who), haʼátʼíísh (what), háadish (where) normally stand at the start of the sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Háadish naniná?",
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
        "id": "possessive-prefix-system",
        "title": "Possessive Prefixes — A2",
        "emoji": "🏠",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійність передається префіксом перед іменником — shi- ('мій'), ni- ('твій'), bi- ('його/її') — той самий набір префіксів, що й особові маркери на дієслові.",
            "en": {
              "text": "Possession is expressed with a prefix before the noun — shi- ('my'), ni- ('your'), bi- ('his/her') — the same set of prefixes used as person markers on the verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "shikin (мій дім)",
                "присвійний префікс shi-"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Possessive Prefixes — A2"
      },
      {
        "id": "plurality-on-verb-not-noun",
        "title": "Plurality Marked on the Verb, Not the Noun — B1",
        "emoji": "➕",
        "sections": [
          {
            "type": "intro",
            "text": "Множинність людей і тварин позначається префіксом da-, вставленим у дієслово, а не суфіксом на самому іменнику, — сам іменник узагалі не змінюється в множині.",
            "en": {
              "text": "The plurality of people and animals is marked with the prefix da-, inserted into the verb, rather than a suffix on the noun itself — the noun itself doesn't change at all in the plural."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ashkii yigháál (хлопчик іде) → ashiiké daagháál (хлопчики йдуть, da- на дієслові)",
                "множина позначена на дієслові"
              ]
            ],
            "en": {
              "title": "Example"
            }
          }
        ],
        "titleEn": "Plurality on the Verb, Not the Noun — B1"
      },
      {
        "id": "reduplication-distributive",
        "title": "Reduplication for Distributivity — B2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Подвоєння частини дієслівного кореня може підкреслювати, що дія виконана кожним учасником окремо, — граматична стратегія, споріднена з видовим префіксом da-, але з іншим відтінком.",
            "en": {
              "text": "Reduplicating part of the verb root can emphasize that an action was performed by each participant separately — a grammatical strategy related to the da- aspect prefix, but with a different shade."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Подвоєння основи підкреслює розподільну дію, виконану кожним окремо.",
                "розподільна редуплікація"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reduplication for Distributivity — B2"
      },
      {
        "id": "compound-word-formation",
        "title": "Compound Word Formation — B2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Складні слова часто поєднують дієслівну основу з іменником, утворюючи назву предмета через опис його функції чи вигляду, — 'те, чим щось роблять'.",
            "en": {
              "text": "Compound words often join a verb stem with a noun, forming an item's name through a description of its function or appearance — 'the thing that does something'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "chidí naaʼnaʼí (танк, буквально 'машина, що повзе')",
                "приклад описового складного слова"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Compound Word Formation — B2"
      },
      {
        "id": "relative-clause-strategy",
        "title": "Relative Clause Strategy — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Замість відносного займенника вживається номіналізована дієслівна форма з суфіксом -ígíí, що перетворює ціле речення на означення, прикріплене до іменника.",
            "en": {
              "text": "Instead of a relative pronoun, a nominalized verb form with the suffix -ígíí is used, turning a whole clause into a modifier attached to the noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "naaltsoos yishtąʼígíí",
                "книга, яку я читаю"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Clause Strategy: -ígíí — B2"
      },
      {
        "id": "comparison-construction",
        "title": "Comparison Construction — B1",
        "emoji": "⚖️",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняння вищого ступеня утворюється зворотом, що буквально означає 'перевершує його', доданим після стативного дієслова-прикметника.",
            "en": {
              "text": "Comparison of superiority is formed with a phrase literally meaning 'surpasses it', added after the stative verb-adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Порівняння виражається дієслівною конструкцією 'перевершує', а не суфіксом на прикметнику.",
                "порівняльна дієслівна конструкція"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparison Construction — B1"
      },
      {
        "id": "numerals-cardinal",
        "title": "Cardinal Numbers — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Кількісні числівники мають власні корені навахо й ставляться перед іменником.",
            "en": {
              "text": "Cardinal numbers have their own Navajo roots and are placed before the noun."
            }
          },
          {
            "type": "table",
            "title": "Числа",
            "rows": [
              [
                "tʼááłáʼí, naaki, tááʼ",
                "один, два, три"
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
        "id": "adjective-as-stative-verb",
        "title": "Adjectives as Stative Verbs — A2",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники поводяться як окремий клас стативних дієслів — самі є присудком речення й приймають ті самі граматичні способи, що й звичайні дієслова.",
            "en": {
              "text": "Adjectives behave as a distinct class of stative verbs — they themselves serve as the predicate and take the same grammatical modes as ordinary verbs."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nizhóní.",
                "Це гарно (стативне дієслово, не окремий прикметник)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adjectives as Stative Verbs — A2"
      },
      {
        "id": "directional-prefix-areal",
        "title": "Areal/Directional Prefixes — B2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Ареальні префікси вказують на напрямок чи просторовий контекст дії — 'усередину', 'назовні', 'по колу' — вбудовані прямо в дієслівний шаблон.",
            "en": {
              "text": "Areal prefixes indicate the direction or spatial context of an action — 'into', 'out of', 'around' — built right into the verb template."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ареальні префікси уточнюють просторовий контекст руху.",
                "просторовий префікс у дієслові"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Areal/Directional Prefixes — B2"
      },
      {
        "id": "negative-existential",
        "title": "Negative Existential — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечне існування утворюється тим самим циркумфіксом doo...da, застосованим до дієслова існування.",
            "en": {
              "text": "Negative existence is formed with the same doo...da circumfix applied to the existential verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Доо бе'ешоні да.",
                "Грошей немає."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negative Existential — A2"
      },
      {
        "id": "vocative-forms",
        "title": "Vocative Forms — B1",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Звертання часто вживає родинний термін замість імені, без окремого граматичного маркера звертання, — сам вибір слова сигналізує пряме звертання.",
            "en": {
              "text": "Direct address often uses a kinship term instead of a name, with no separate grammatical address marker — the word choice itself signals direct address."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Shimá!",
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
        "id": "diminutive-suffix",
        "title": "Diminutive Suffix: -tsoí — B2",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувально-пестливий суфікс -tsoí чи подібний, доданий до кореня, надає слову ласкавого чи зменшеного відтінку.",
            "en": {
              "text": "The diminutive suffix -tsoí or similar, added to a root, gives the word an affectionate or diminished shade."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Зменшувальний суфікс додає ласкавого відтінку до слова.",
                "приклад зменшувальної форми"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Diminutive Suffix — B2"
      },
      {
        "id": "kinship-terms-clan-system",
        "title": "Kinship Terms and the Clan System — B1",
        "emoji": "👪",
        "sections": [
          {
            "type": "intro",
            "text": "Матрилінійна кланова система навахо (понад 130 кланів) визначає, як людина представляється, — ім'я супроводжується назвами чотирьох кланів (материнського, батьківського й двох дідусевих), а родинні терміни узгоджені з цією структурою.",
            "en": {
              "text": "The Navajo matrilineal clan system (over 130 clans) determines how a person introduces themselves — a name is accompanied by the names of four clans (maternal, paternal, and two grandparental), and kinship terms are aligned with this structure."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Традиційне представлення включає назви чотирьох кланів.",
                "кланова система в представленні"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Kinship Terms and the Clan System — B1"
      },
      {
        "id": "enclitic-particles",
        "title": "Sentence-Final Enclitic Particles — B2",
        "emoji": "🔚",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька енклітичних часток приєднуються в кінці речення, надаючи відтінку впевненості, здивування чи запитання, без зміни граматичної структури самого речення.",
            "en": {
              "text": "A few enclitic particles attach to the end of a sentence, adding a shade of certainty, surprise, or inquiry, without changing the sentence's grammatical structure."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Енклітичні частки в кінці речення додають відтінок ставлення мовця.",
                "енклітична частка наприкінці"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Sentence-Final Enclitic Particles — B2"
      },
      {
        "id": "postposition-object-prefix-fusion",
        "title": "Postposition-Object Prefix Fusion — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Об'єктний займенниковий префікс постпозиції зливається з самою постпозицією фонетично, утворюючи неподільну одиницю, а не два окремі слова.",
            "en": {
              "text": "The object pronominal prefix of a postposition fuses with the postposition itself phonetically, forming an indivisible unit rather than two separate words."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "shaa (до мене, shi- + -aa, злите)",
                "злиття префікса й постпозиції"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Postposition-Object Prefix Fusion — B2"
      },
      {
        "id": "reflexive-prefix-adi",
        "title": "Reflexive Prefix: ádí- — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотна дія позначається префіксом ádí- в дієслові, вбудованим у сам дієслівний шаблон, — 'він поранив самого себе' замість окремого займенника.",
            "en": {
              "text": "Reflexive action is marked with the prefix ádí- in the verb, built into the verb template itself — 'he hurt himself' instead of a separate pronoun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Зворотний префікс убудований прямо в шаблон дієслова.",
                "приклад зворотного префікса"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reflexive Prefix: ádí- — B1"
      },
      {
        "id": "reciprocal-prefix-ahil",
        "title": "Reciprocal Prefix: ahił — B2",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "Взаємна дія позначається окремим префіксом ahił ('одне з одним'), відмінним від зворотного ádí-, — розрізнення між 'себе' й 'одне одного' граматично обов'язкове.",
            "en": {
              "text": "A mutual action is marked with the separate prefix ahił ('with each other'), distinct from the reflexive ádí- — the distinction between 'oneself' and 'each other' is grammatically mandatory."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Взаємний префікс ahił окремий від зворотного, ці два не можна плутати.",
                "приклад взаємного префікса"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reciprocal Prefix: ahił — B2"
      },
      {
        "id": "verb-template-depth",
        "title": "The Verb Template in Depth — B2",
        "emoji": "🧱",
        "sections": [
          {
            "type": "intro",
            "text": "Повний шаблон дієслова має понад десять окремих позицій, поділених на дві зони — 'диз'юнктну' (дальню від кореня, з прислівниковими префіксами) і 'кон'юнктну' (ближню, з граматичними префіксами способу й особи).",
            "en": {
              "text": "The full verb template has over ten distinct prefix positions, split into two zones — the 'disjunct' zone (farther from the root, with adverbial prefixes) and the 'conjunct' zone (closer, with grammatical mode and person prefixes)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Диз'юнктна й кон'юнктна зони мають різні фонологічні правила.",
                "дві зони шаблону дієслова"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Verb Template in Depth — B2"
      },
      {
        "id": "classificatory-stem-depth",
        "title": "Classificatory Stems: Further Categories — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Крім круглого, довгого й гнучкого предмета, є окремі основи для множинних окремих предметів, для сипкої маси й для 'мнякого' предмета на кшталт одягу, — система класифікаторних основ охоплює десяток семантичних категорій.",
            "en": {
              "text": "Besides round, long, and flexible objects, there are separate stems for multiple separate objects, for a granular mass, and for a 'mushy' object like clothing — the classificatory-stem system covers about a dozen semantic categories."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Окрема основа для множинних окремих предметів, відмінна від основи одного предмета.",
                "класифікаторна основа для множини"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Classificatory Stems: Further Categories — B2"
      },
      {
        "id": "consonant-harmony-depth",
        "title": "Consonant Harmony: Further Examples — B2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Гармонія поширюється й на глухі/дзвінкі варіанти того самого сибілянта, тож вибір префікса іноді змінюється залежно від того, який сибілянт уже є в корені дієслова.",
            "en": {
              "text": "The harmony extends to the voiceless/voiced variants of the same sibilant too, so prefix choice sometimes shifts depending on which sibilant is already present in the verb root."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Гармонія поширюється й на дзвінкі варіанти сибілянтів.",
                "приклад поширеної гармонії"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Consonant Harmony: Further Examples — B2"
      },
      {
        "id": "fourth-person-narrative-tracking",
        "title": "Fourth Person in Narrative Tracking — B2",
        "emoji": "📖",
        "sections": [
          {
            "type": "intro",
            "text": "У довгій оповіді обвіативний маркер дозволяє слухачеві точно відстежувати, про яку з двох третіх осіб іде мова в кожному реченні, навіть коли обидві згадуються багато разів поспіль.",
            "en": {
              "text": "In a long narrative, the obviative marker lets the listener precisely track which of two third-person referents is being discussed in each sentence, even when both are mentioned many times in a row."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Обвіативний маркер запобігає двозначності в довгій розповіді.",
                "відстеження референта в оповіді"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Fourth Person in Narrative Tracking — B2"
      },
      {
        "id": "navajo-nation-official-status",
        "title": "Official Language of the Navajo Nation — B1",
        "emoji": "🏛️",
        "sections": [
          {
            "type": "intro",
            "text": "Навахо — офіційна мова Нації навахо й найбільша корінна американська мова за кількістю носіїв у США, з десятками тисяч мовців, зосереджених переважно на південному заході.",
            "en": {
              "text": "Navajo is the official language of the Navajo Nation and the largest Native American language by number of speakers in the US, with tens of thousands of speakers concentrated mostly in the Southwest."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Навахо залишається найбільшою корінною мовою США за кількістю носіїв.",
                "офіційний статус і кількість носіїв"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Official Language of the Navajo Nation — B1"
      },
      {
        "id": "code-talker-history-depth",
        "title": "Code Talkers: Historical Depth — B2",
        "emoji": "🎖️",
        "sections": [
          {
            "type": "intro",
            "text": "Кодотворці розробили спеціальний військовий словник із двохсот з гаком термінів для позначення техніки й тактики, зашифровуючи назви на кшталт 'залізна риба' для підводного човна, — код так і не був розшифрований противником.",
            "en": {
              "text": "The Code Talkers developed a special military vocabulary of over two hundred terms for equipment and tactics, encoding names like 'iron fish' for submarine — the code was never broken by the enemy."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Спеціальний військовий словник кодотворців ніколи не був розшифрований.",
                "нерозшифрований військовий код"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Code Talkers: Historical Depth — B2"
      },
      {
        "id": "clan-system-depth",
        "title": "The Clan System in Depth — B2",
        "emoji": "👪",
        "sections": [
          {
            "type": "intro",
            "text": "Одруження всередині власного клану вважається табу, тож знання назв усіх чотирьох кланів кожної людини — практична необхідність для соціальної навігації в спільноті навахо.",
            "en": {
              "text": "Marrying within one's own clan is taboo, so knowing the names of all four of a person's clans is a practical necessity for social navigation within the Navajo community."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Знання назв клану критично важливе для соціальних і шлюбних норм.",
                "соціальна функція кланової системи"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Clan System in Depth — B2"
      },
      {
        "id": "language-purism-neologisms",
        "title": "Language Purism and Neologisms — B2",
        "emoji": "🧼",
        "sections": [
          {
            "type": "intro",
            "text": "Мовні активісти навахо зазвичай утворюють власні описові неологізми для сучасних понять замість прямого запозичення з англійської, — 'обчислювальна машина, що думає' для комп'ютера, а не запозичене слово.",
            "en": {
              "text": "Navajo language activists typically coin their own descriptive neologisms for modern concepts instead of directly borrowing from English — 'a thinking machine' for computer, rather than a borrowed word."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Описові неологізми замінюють пряме запозичення для нових понять.",
                "власне словотворення замість запозичення"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Language Purism and Neologisms — B2"
      },
      {
        "id": "pueblo-contact-influence",
        "title": "Pueblo Contact Influence — B2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Століття сусідства з пуебловими народами південного заходу залишили в навахо культурні й лексичні запозичення, окремі від пізніших англійських і іспанських впливів.",
            "en": {
              "text": "Centuries of proximity to the Pueblo peoples of the Southwest left Navajo with cultural and lexical borrowings, separate from the later English and Spanish influences."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Культурний контакт з пуебловими народами залишив свій слід у лексиці.",
                "ареальний вплив пуебло"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Pueblo Contact Influence — B2"
      },
      {
        "id": "dialectal-variation",
        "title": "Regional Dialect Variation — B2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Хоч навахо відносно однорідна порівняно з іншими атабаскськими мовами, окремі регіони Нації навахо мають помітні відмінності у вимові й лексиці.",
            "en": {
              "text": "Although Navajo is relatively uniform compared to other Athabaskan languages, individual regions of the Navajo Nation show noticeable differences in pronunciation and vocabulary."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Регіональні відмінності у вимові помітні, попри загальну однорідність мови.",
                "регіональна варіація"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Regional Dialect Variation — B2"
      },
      {
        "id": "reduplication-distributive-depth",
        "title": "Distributive Reduplication: Further Depth — B2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Розподільна редуплікація може поєднуватися з префіксом da- в тому самому слові, посилюючи значення 'кожен окремо' ще виразніше, ніж будь-який із засобів окремо.",
            "en": {
              "text": "Distributive reduplication can combine with the da- prefix in the same word, reinforcing the 'each one separately' meaning even more strongly than either device alone."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Поєднання редуплікації й префікса da- підсилює розподільне значення.",
                "поєднані засоби розподільності"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Distributive Reduplication: Further Depth — B2"
      },
      {
        "id": "postposition-depth",
        "title": "Postpositions: Further Examples — B2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька постпозицій мають переносне, а не лише буквальне просторове значення, — той самий корінь позначає і фізичне 'під', і абстрактне 'через, з причини'.",
            "en": {
              "text": "Several postpositions have a figurative, not just literal spatial meaning — the same root marks both physical 'under' and abstract 'because of, through'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Переносне значення постпозицій виходить за межі буквального простору.",
                "переносне значення постпозиції"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Postpositions: Further Examples — B2"
      },
      {
        "id": "negative-circumfix-depth",
        "title": "The doo...da Circumfix: Further Depth — B2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечний циркумфікс doo...da може поєднуватися з майбутнім способом, утворюючи заперечення наміру, — 'я не збираюся' замість 'я не роблю зараз'.",
            "en": {
              "text": "The negative circumfix doo...da can combine with the future mode, forming a negation of intent — 'I'm not going to' rather than 'I'm not doing right now'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Заперечення в поєднанні з майбутнім способом виражає заперечення наміру.",
                "заперечення наміру"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The doo...da Circumfix: Further Depth — B2"
      },
      {
        "id": "sacred-mountains-directional-system",
        "title": "Sacred Mountains and Directional Worldview — B2",
        "emoji": "⛰️",
        "sections": [
          {
            "type": "intro",
            "text": "Чотири священні гори позначають межі традиційної землі навахо й відповідають чотирьом сторонам світу, а вхід традиційного хогана завжди орієнтований на схід, — просторова термінологія вкорінена в цьому світогляді.",
            "en": {
              "text": "Four sacred mountains mark the boundaries of traditional Navajo land and correspond to the four cardinal directions, and the entrance of a traditional hooghan always faces east — spatial terminology is rooted in this worldview."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Чотири священні гори структурують традиційний просторовий світогляд.",
                "просторовий світогляд, вкорінений у культурі"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Sacred Mountains and Directional Worldview — B2"
      },
      {
        "id": "code-switching-english-navajo",
        "title": "English-Navajo Code-Switching — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "У сучасному розмовному мовленні молоді типове перемикання кодів усередині одного речення — граматичний каркас навахо, а частина лексики вставляється з англійської без адаптації.",
            "en": {
              "text": "In modern youth speech, code-switching within a single sentence is typical — the grammatical frame is Navajo, while some vocabulary is inserted from English without adaptation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Молодіжне мовлення часто змішує навахо з англійськими вставками.",
                "код-світчинг у молодіжному мовленні"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "English-Navajo Code-Switching — B2"
      },
      {
        "id": "revitalization-efforts",
        "title": "Language Revitalization Efforts — B2",
        "emoji": "🌱",
        "sections": [
          {
            "type": "intro",
            "text": "Попри статус найбільшої корінної мови США, навахо теж класифікується як уразлива через зменшення передачі мови дітям, тож на Наваховій Нації діють програми занурення й двомовні школи.",
            "en": {
              "text": "Despite being the largest Native American language in the US, Navajo is also classified as vulnerable due to declining transmission to children, so the Navajo Nation runs immersion programs and bilingual schools."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Програми занурення підтримують передачу мови новому поколінню.",
                "мовне відродження"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Language Revitalization Efforts — B2"
      },
      {
        "id": "numeral-system-depth",
        "title": "The Numeral System in Depth — B2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Традиційна система рахунку доходила лише до певної межі й далі описово вказувала на 'багато', тоді як сучасна навахо запозичила й адаптувала числа для більших значень із практики шкільної освіти.",
            "en": {
              "text": "The traditional counting system only went up to a certain point and then descriptively indicated 'many', while modern Navajo borrowed and adapted numbers for larger values from schooling practice."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Традиційна лічба мала межу, за якою вживалося узагальнене 'багато'.",
                "історія числової системи"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Numeral System in Depth — B2"
      },
      {
        "id": "verb-stem-alternation-across-aspect",
        "title": "Stem Alternation Across Aspect — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Той самий дієслівний корінь набуває іншої форми залежно від способу — окрема форма основи для недоконаного, доконаного, майбутнього й усітативного способу того самого дієслова.",
            "en": {
              "text": "The same verb root takes a different shape depending on the mode — a distinct stem form for the imperfective, perfective, future, and usitative of the same verb."
            }
          },
          {
            "type": "table",
            "title": "Приклад альтернації основи",
            "rows": [
              [
                "-'aash (недокон.) / -yá (докон.) / -ash (майб.) — той самий дієслівний корінь 'йти'",
                "різні форми основи за способом"
              ]
            ],
            "en": {
              "title": "Stem Alternation Example"
            }
          }
        ],
        "titleEn": "Stem Alternation Across Aspect — B2"
      },
      {
        "id": "passive-like-construction",
        "title": "Passive-Like Construction — B2",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний відтінок передається безособовим префіксом підмета, що вказує на невизначену чи не важливу дійову особу, а не окремим граматичним пасивним станом.",
            "en": {
              "text": "A passive-like shade is conveyed with an impersonal subject prefix indicating an unspecified or unimportant agent, rather than a dedicated grammatical passive voice."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Безособовий префікс підмета передає значення, близьке до пасиву.",
                "приклад безособової конструкції"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Passive-Like Construction — B2"
      },
      {
        "id": "causative-construction",
        "title": "Causative Construction — B2",
        "emoji": "⚡",
        "sections": [
          {
            "type": "intro",
            "text": "Каузацію передає окремий каузативний префікс, вставлений у дієслівний шаблон, — 'змушувати робити' вбудоване прямо в саму дієслівну форму.",
            "en": {
              "text": "Causation is conveyed with a dedicated causative prefix inserted into the verb template — 'to make happen' built right into the verb form itself."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Каузативний префікс убудований у шаблон дієслова.",
                "приклад каузативного префікса"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Causative Construction — B2"
      },
      {
        "id": "honorific-register-elders",
        "title": "Respectful Register for Elders — B2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Звертання до старших уживає непрямий, ввічливий стиль мовлення й уникає прямих наказів, натомість формулюючи прохання як запитання чи побажання.",
            "en": {
              "text": "Addressing elders uses an indirect, polite speech style and avoids direct commands, instead phrasing requests as questions or wishes."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Непрямий стиль звертання до старших уникає прямих наказів.",
                "шанобливий регістр"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Respectful Register for Elders — B2"
      },
      {
        "id": "compound-verb-formation-depth",
        "title": "Compound Verb Formation: Further Depth — B2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька префіксальних елементів можуть поєднуватися в одному дієслові для передачі дуже точного й специфічного значення, недоступного жодному окремому префіксу.",
            "en": {
              "text": "Several prefixal elements can combine in one verb to convey a very precise and specific meaning unavailable to any single prefix alone."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Поєднання кількох префіксів дає дуже специфічне значення.",
                "приклад поєднання префіксів"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Compound Verb Formation: Further Depth — B2"
      },
      {
        "id": "loanword-adaptation-phonology",
        "title": "Loanword Phonological Adaptation — B1",
        "emoji": "🔧",
        "sections": [
          {
            "type": "intro",
            "text": "Запозичені з англійської слова адаптуються до звукового складу навахо, вписуючись у наявний набір приголосних і голосних, а не лишаючись у вихідній вимові.",
            "en": {
              "text": "Words borrowed from English are adapted to Navajo's sound system, fitting into the existing consonant and vowel inventory rather than keeping their original pronunciation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Запозичені слова адаптуються до фонологічної системи навахо.",
                "фонологічно адаптоване запозичення"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Loanword Phonological Adaptation — B1"
      },
      {
        "id": "fixed-idiomatic-expressions",
        "title": "Fixed Idiomatic Expressions — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Численні застиглі ідіоми вживаються цілими блоками з переносним значенням, не виведеним з буквального перекладу окремих слів.",
            "en": {
              "text": "Numerous fixed idioms are used as whole blocks with a figurative meaning not derived from the literal translation of the individual words."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Застиглі ідіоми вживаються цілими блоками з переносним значенням.",
                "приклад застиглої ідіоми"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Fixed Idiomatic Expressions — B2"
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
        "title": "Irregular Verbs — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька частовживаних дієслів (dah diníłdóós 'сидіти' у різних формах) мають суплетивні основи, що не виводяться з очікуваного класифікаторного зразка.",
            "en": {
              "text": "A few common verbs (forms of 'to sit', 'to be positioned') have suppletive stems that can't be derived from the expected classificatory pattern."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Суплетивні форми не виводяться з жодного регулярного класифікаторного зразка.",
                "нерегулярна суплетивна основа"
              ]
            ]
          }
        ],
        "titleEn": "Irregular Verbs — B1"
      },
      {
        "id": "irregular-stem-alternation",
        "title": "Irregular Stem Alternation — B2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька дієслів мають альтернацію основи за способом, яку неможливо передбачити з жодного стандартного зразка, — цю альтернацію слід запам'ятовувати окремо для кожного дієслова.",
            "en": {
              "text": "A few verbs have stem alternation across modes that can't be predicted from any standard pattern — this alternation must be memorized separately for each verb."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Нерегулярна альтернація основи не збігається з жодним продуктивним зразком.",
                "непередбачувана зміна основи"
              ]
            ]
          }
        ],
        "titleEn": "Irregular Stem Alternation — B2"
      },
      {
        "id": "fixed-ceremonial-archaic-forms",
        "title": "Fixed Archaic Forms in Ceremonial Chants — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Церемоніальні пісні й молитви зберігають архаїчну граматичну структуру й лексику, вже втрачену в живій мові, і вживаються цілими блоками без граматичного розбору.",
            "en": {
              "text": "Ceremonial songs and prayers preserve archaic grammatical structure and vocabulary already lost from the living language, and are used as whole blocks with no grammatical analysis."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Церемоніальні пісні зберігають архаїчні форми, недоступні аналізу поза контекстом обряду.",
                "застигла обрядова формула"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Fixed Archaic Forms in Ceremonial Chants — B2"
      }
    ]
  }
];
