// Vymova — data/grammar-data/grammar_sm.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_SM: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Suinauna Fa'aletagata — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У самоанській, як і в багатьох полінезійських мовах, розрізняють \"ми без вас\" (matou) і \"ми з вами\" (tatou).",
            "en": {
              "text": "Samoan, like many Polynesian languages, distinguishes \"we without you\" (matou) from \"we with you\" (tatou)."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "a'u"
              ],
              [
                "ти",
                "oe"
              ],
              [
                "він / вона",
                "ia"
              ],
              [
                "ми (без вас)",
                "matou"
              ],
              [
                "ми (з вами)",
                "tatou"
              ],
              [
                "ви",
                "outou"
              ],
              [
                "вони",
                "latou"
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
        "id": "t-style-k-style-register",
        "title": "'Gagana Fa'aaloalo': T ma K — B1",
        "emoji": "🗣️",
        "sections": [
          {
            "type": "intro",
            "text": "Самоанська має два фонологічні регістри: офіційний 'T-стиль' (з t і n) для формальних промов і письма, та розмовний 'K-стиль' (з k і ŋ) для щоденного спілкування, — цілий пласт звукових замін, обраних за соціальним контекстом.",
            "en": {
              "text": "Samoan has two phonological registers: the formal 'T-style' (with t and n) for formal speeches and writing, and the colloquial 'K-style' (with k and ŋ) for everyday talk — an entire layer of sound substitutions chosen by social context."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "tautala (T-стиль) / kaukala (K-стиль, 'говорити')",
                "to speak (formal vs. colloquial register)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "T-Style vs. K-Style Register — B1"
      },
      {
        "id": "ergative-marking-e",
        "title": "Ergativa: E — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Самоанська має ергативно-абсолютивну систему: діяч перехідного дієслова позначається часткою e, тоді як підмет неперехідного дієслова та об'єкт перехідного лишаються немаркованими (абсолютив).",
            "en": {
              "text": "Samoan has an ergative-absolutive system: the agent of a transitive verb is marked with the particle e, while the subject of an intransitive verb and the object of a transitive one both stay unmarked (absolutive)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Na fasi e Sina le pusi.",
                "Сіна вдарила кота (Сіна = агент, позначена e)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ergative Marking: e — B1"
      },
      {
        "id": "articles-le-se",
        "title": "Fa'ailoga: Le, Se — A2",
        "emoji": "🔖",
        "sections": [
          {
            "type": "table",
            "title": "Артиклі",
            "rows": [
              [
                "означений однини",
                "le"
              ],
              [
                "неозначений однини",
                "se"
              ]
            ],
            "en": {
              "title": "Articles"
            }
          }
        ],
        "titleEn": "Articles: le, se — A2"
      },
      {
        "id": "verb-initial-vso",
        "title": "Fa'atulagaga: VSO — A2",
        "emoji": "📝",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів — присудок-підмет-додаток (VSO): дієслово завжди стоїть на першому місці речення, перед підметом.",
            "en": {
              "text": "The basic word order is Verb-Subject-Object (VSO): the verb always stands at the very start of the sentence, before the subject."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Alu Sina i le maketi.",
                "Сіна йде на ринок (йде-Сіна-на ринок)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Word Order: VSO — A2"
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
        "id": "general-tense-e",
        "title": "Taimi Lautele: E — A1",
        "emoji": "☀️",
        "sections": [
          {
            "type": "intro",
            "text": "Загальний/звичний час утворюється часткою e перед дієсловом, вживаною для тверджень поза конкретним часом і для звичних дій.",
            "en": {
              "text": "The general/habitual tense is formed with the particle e before the verb, used for statements outside a specific time and for habitual actions."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "E alu Sina i le maketi.",
                "Сіна ходить на ринок (взагалі, регулярно)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "General Tense: e — A1"
      },
      {
        "id": "past-tense-na",
        "title": "Taimi Ua Mavae: Na — A2",
        "emoji": "⏪",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий час утворюється часткою na перед дієсловом, позначаючи завершену дію в минулому.",
            "en": {
              "text": "The past tense is formed with the particle na before the verb, marking a completed action in the past."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Na alu Sina i le maketi.",
                "Сіна пішла на ринок."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Past Tense: na — A2"
      },
      {
        "id": "perfective-ua",
        "title": "Suiga o le Tulaga: Ua — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Частка ua позначає зміну стану чи актуальність результату зараз ('вже'), а не просто минулу дію, — тонше розрізнення, ніж у більшості мов з окремим перфектом.",
            "en": {
              "text": "The particle ua marks a change of state or the present relevance of a result ('already'), rather than simply a past action — a finer distinction than most languages' separate perfect tense."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ua alu Sina.",
                "Сіна вже пішла (і зараз її немає)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Perfective / Change-of-State: ua — B1"
      },
      {
        "id": "progressive-o-loo",
        "title": "Taimi Nei: O Loo — A2",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія в теперішньому передається часткою o loo/o lo'o перед дієсловом, підкреслюючи, що дія триває саме зараз.",
            "en": {
              "text": "An ongoing present action is expressed with the particle o loo/o lo'o before the verb, emphasizing that the action is happening right now."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "O loo alu Sina i le maketi.",
                "Сіна саме йде на ринок."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Progressive: o loo — A2"
      },
      {
        "id": "past-continuous-sa",
        "title": "Taimi Ua Mavae Tumau: Sa — B1",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія в минулому передається часткою sa, окремою від простого минулого na, підкреслюючи тривалість чи звичність у минулому.",
            "en": {
              "text": "An ongoing past action is expressed with the particle sa, distinct from the simple past na, emphasizing duration or habituality in the past."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Sa alu Sina i le maketi i tausaga uma.",
                "Сіна ходила на ринок щороку (тривало в минулому)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Past Continuous: sa — B1"
      },
      {
        "id": "future-o-le-a",
        "title": "Taimi Fa'ale-Lumana'i: O Le A — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється часткою o le a перед дієсловом, доданою до речення в базовій формі.",
            "en": {
              "text": "The future tense is formed with the particle o le a before the verb, added to the sentence in its basic form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "O le a alu Sina i le maketi.",
                "Сіна піде на ринок."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Future: o le a — A2"
      },
      {
        "id": "imperative-mood",
        "title": "Fa'atonuga — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб — гола форма дієслова без часткової частки, часто з підметом ('e koe' 'ти') для ясності або без нього для короткого наказу.",
            "en": {
              "text": "The imperative is the bare verb form with no tense particle, often with the subject pronoun for clarity or without it for a short command."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Alu!",
                "Іди!"
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
        "id": "prohibitive-aua",
        "title": "Fa'asāga: Aua — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заборонний наказ утворюється часткою aua ('не смій') перед дієсловом, а не звичайним запереченням le, окремо позначаючи заборону від простого заперечення.",
            "en": {
              "text": "The prohibitive is formed with the particle aua ('don't') before the verb, rather than ordinary negation with le, marking a prohibition separately from a plain negative."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Aua e te alu!",
                "Не йди!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Prohibitive: aua — B1"
      },
      {
        "id": "negation-le",
        "title": "Fa'aleaga: Le — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Звичайне заперечення дієслова утворюється часткою le, поставленою перед часовою часткою й дієсловом.",
            "en": {
              "text": "Ordinary verb negation is formed with the particle le, placed before the tense particle and the verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ou te le alu.",
                "Я не йду."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation: le — A1"
      },
      {
        "id": "potential-mafai",
        "title": "Mafai: Malosi — B1",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Здатність чи можливість виражається словом mafai ('могти'), уживаним із підрядним реченням, введеним часткою ona.",
            "en": {
              "text": "Ability or possibility is expressed with the word mafai ('to be able'), used with a subordinate clause introduced by the particle ona."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "E mafai ona ou alu.",
                "Я можу йти."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Potential: mafai — B1"
      },
      {
        "id": "desiderative-manao",
        "title": "Mana'o: Fia — A2",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Бажання виражається словом mana'o ('хотіти') плюс підрядне речення з ona, або коротшим префіксом fia- ('бажати'), доданим безпосередньо до дієслова.",
            "en": {
              "text": "A wish is expressed with the word mana'o ('to want') plus a subordinate clause with ona, or with the shorter prefix fia- ('to wish to'), added directly to the verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ou te fia 'ai.",
                "Я хочу їсти."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Desiderative: mana'o / fia- — A2"
      },
      {
        "id": "perfect-ua-uma",
        "title": "Ua Uma: Fa'aiuga — B1",
        "emoji": "🏁",
        "sections": [
          {
            "type": "intro",
            "text": "Завершеність дії наголошується часткою uma ('весь, закінчено'), доданою після дієслова разом із ua, підкреслюючи, що дія повністю завершена.",
            "en": {
              "text": "Completion of an action is emphasized with the particle uma ('all, finished'), added after the verb together with ua, stressing that the action is fully completed."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ua uma ona 'ai.",
                "Я вже повністю поїв."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Completive: ua uma — B1"
      },
      {
        "id": "conditional-afai",
        "title": "Afai: Tulaga Fa'atatau — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовне речення вводиться сполучником afai ('якщо'), поставленим на початку підрядного речення.",
            "en": {
              "text": "A conditional sentence is introduced with the conjunction afai ('if'), placed at the start of the subordinate clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Afai e timu, ou te nofo i le fale.",
                "Якщо піде дощ, я залишуся вдома."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional: afai — B1"
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
        "id": "possessive-a-class",
        "title": "Fa'asili A: Pule — B1",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійний зв'язок класу 'a' уживається, коли власник має контроль чи владу над предметом (діти, тварини, набуте майно), позначений часткою a перед власником.",
            "en": {
              "text": "The 'a'-class possessive is used when the possessor has control or dominance over the thing possessed (children, animals, acquired property), marked with the particle a before the possessor."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "le pusi a Sina",
                "Сінин кіт (вона контролює тварину)"
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
        "title": "Fa'asili O: Fa'atasi — B1",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійний зв'язок класу 'o' уживається для невід'ємних чи нейтральних зв'язків (частини тіла, будівлі, транспорт, батьки), позначений часткою o.",
            "en": {
              "text": "The 'o'-class possessive is used for inherent or neutral relations (body parts, buildings, vehicles, parents), marked with the particle o."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "le fale o Sina",
                "Сінин дім (невід'ємний зв'язок, не 'контроль')"
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
        "id": "absolutive-unmarked",
        "title": "Absolutiva: Le'i Fa'ailogaina — B1",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Підмет неперехідного дієслова й об'єкт перехідного дієслова обидва лишаються без відмінкового маркера (абсолютив), утворюючи спільний клас, протиставлений позначеному ергативом агенту.",
            "en": {
              "text": "The subject of an intransitive verb and the object of a transitive verb both remain unmarked (absolutive), forming a shared class opposed to the ergative-marked agent."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Alu Sina. (неперехідне) / Na fasi e Sina Sione. (перехідне, Sione = абсолютив)",
                "Sina goes / Sina hit Sione (Sione unmarked, like the intransitive subject)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Absolutive Case: Unmarked — B1"
      },
      {
        "id": "plural-verb-reduplication",
        "title": "Toe Fa'aigoaina: Le Veape — B2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Множина в самоанській переважно позначається не на іменнику, а редуплікацією дієслова, коли підмет чи об'єкт множинний, — риса, нетипова для більшості мов.",
            "en": {
              "text": "Plurality in Samoan is mostly marked not on the noun but by reduplicating the verb when the subject or object is plural — a feature atypical of most languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "alu (іти, одн.) → ālu / feoa'i (іти, мн.)",
                "go (singular subject) vs. go (plural subject, reduplicated/suppletive verb)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Plural Marked on the Verb — B2"
      },
      {
        "id": "numeral-classifiers",
        "title": "Fa'avasegaga o Nūmera — B2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "При лічбі різних категорій предметів (людей, тонких плоских об'єктів, кокосів) уживають різні класифікатори між числівником та іменником.",
            "en": {
              "text": "When counting different categories of objects (people, thin flat objects, coconuts), different classifiers are used between the numeral and the noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "to'a lua (двоє людей, класифікатор to'a)",
                "two people (with the human classifier to'a)"
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
        "title": "Nūmera: 1-10 — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "table",
            "title": "Числа 1-10",
            "rows": [
              [
                "1",
                "tasi"
              ],
              [
                "2",
                "lua"
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
                "sefulu"
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
        "title": "Suinauna Fa'asino — A2",
        "emoji": "👉",
        "sections": [
          {
            "type": "table",
            "title": "Вказівні займенники",
            "rows": [
              [
                "цей",
                "lenei"
              ],
              [
                "той (біля тебе)",
                "lena"
              ],
              [
                "той (далеко)",
                "lela"
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
        "title": "Fesili — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "хто",
                "ai"
              ],
              [
                "що",
                "ā/āisā"
              ],
              [
                "де",
                "fea"
              ],
              [
                "коли",
                "āfea"
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
        "title": "Sasa'aga — A2",
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
                "ma"
              ],
              [
                "для",
                "mo"
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
        "title": "Fa'aoloolo — A1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники",
            "rows": [
              [
                "і",
                "ma"
              ],
              [
                "або",
                "pē"
              ],
              [
                "але",
                "'ae"
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
        "id": "relative-clause-e",
        "title": "Fuaitau Fa'atatau: E — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Означальні (відносні) підрядні речення часто вводяться повторенням часової частки (e, na) перед підрядним дієсловом, без окремого відносного займенника.",
            "en": {
              "text": "Relative clauses are often introduced by repeating the tense particle (e, na) before the subordinate verb, with no separate relative pronoun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "le tagata na alu",
                "людина, що пішла"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Clauses via Tense Particle — B1"
      },
      {
        "id": "focus-fronting",
        "title": "Fa'amuamua Manatu — B2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Слово, що потребує особливого наголосу (фокус), можна винести на самий початок речення перед часовою часткою, що є винятком із звичайного VSO-порядку.",
            "en": {
              "text": "A word requiring special emphasis (focus) can be fronted to the very start of the sentence before the tense particle, an exception to the ordinary VSO order."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "O Sina na alu i le maketi.",
                "Саме Сіна пішла на ринок (наголос на Сіні)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Focus Fronting — B2"
      },
      {
        "id": "topic-marker-o",
        "title": "Fa'ailoga Autū: O — B1",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Частка o вводить іменникову фразу, що є темою чи підметом у певних синтаксичних позиціях (наприклад, при винесенні наперед), відрізняючись від присвійного o.",
            "en": {
              "text": "The particle o introduces a noun phrase that is the topic or subject in certain syntactic positions (such as fronting), distinct from the possessive o."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "O ai lenā?",
                "Хто це?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Topic Marker: o — B1"
      },
      {
        "id": "comparative-degree",
        "title": "Fa'atusatusaga — B1",
        "emoji": "📊",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняльний ступінь утворюється часткою sili atu ('більш') перед прикметником, а об'єкт порівняння вводиться прийменником nai lo.",
            "en": {
              "text": "The comparative degree is formed with the particle sili atu ('more') before the adjective, with the compared object introduced by the preposition nai lo."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Sili atu ona tele nai lo lena.",
                "Це більше за те."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparative: sili atu — B1"
      },
      {
        "id": "superlative-degree",
        "title": "Fa'asiliga — B1",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь порівняння утворюється часткою sili ona ('найбільш') перед прикметником.",
            "en": {
              "text": "The superlative is formed with the particle sili ona ('most') before the adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "sili ona tele",
                "найбільший"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Superlative: sili ona — B1"
      },
      {
        "id": "intensive-consonant-gemination",
        "title": "Fa'amalosi: Toe Fa'aigoaina — B2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Часткове подвоєння складу прикметника чи дієслова підсилює значення, передаючи інтенсивність, повторюваність чи розсіяність дії.",
            "en": {
              "text": "Partial reduplication of a syllable in an adjective or verb intensifies its meaning, conveying intensity, repetition, or dispersal of an action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "tele → tetele",
                "великий → дуже великий/багато великих"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reduplication for Intensity — B2"
      },
      {
        "id": "vocative-simple",
        "title": "Vala'auga — A2",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "При звертанні до когось ім'я вживається без артикля le, на відміну від звичайного вживання іменників у реченні.",
            "en": {
              "text": "In direct address, a name is used without the article le, unlike its ordinary use as a noun in a sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Sina, sau iinei!",
                "Сіно, ходи сюди!"
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
        "id": "existential-e-i-ai",
        "title": "I Ai: I Le Aogā — B1",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Наявність чогось у певному місці передається зворотом e i ai ('там є'), із локативною часткою ai в кінці конструкції.",
            "en": {
              "text": "The existence of something at a place is expressed with e i ai ('there is'), with the locative particle ai at the end of the construction."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "E i ai le tama i le fale.",
                "У домі є хлопчик."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Existential: e i ai — B1"
      },
      {
        "id": "adjective-as-verb",
        "title": "Adjectiva o Se Veape — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники граматично функціонують як стативні дієслова: 'бути великим' — це саме дієслово tele, а не окрема частина мови з допоміжним 'бути'.",
            "en": {
              "text": "Adjectives grammatically function as stative verbs: 'to be big' is simply the verb tele itself, not a separate part of speech requiring an auxiliary 'to be'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "E tele le fale.",
                "Дім великий (букв. 'дім великіє')."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adjectives as Stative Verbs — B2"
      },
      {
        "id": "dual-plural-pronouns",
        "title": "Tolu Numera o Suinauna — B1",
        "emoji": "3️⃣",
        "sections": [
          {
            "type": "intro",
            "text": "Займенники розрізняють три числа: однину, двоїну (для точно двох) і множину (для трьох і більше), — риса, спільна з багатьма полінезійськими мовами.",
            "en": {
              "text": "Pronouns distinguish three numbers: singular, dual (for exactly two), and plural (for three or more) — a feature shared with many Polynesian languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mā'ua (ми двоє, без тебе) vs. mātou (ми троє й більше)",
                "we-two (exclusive) vs. we-many (exclusive)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Three-Way Pronoun Number: Singular/Dual/Plural — B1"
      },
      {
        "id": "postposed-adjective",
        "title": "Tulaga o le Adjectiva — A2",
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
                "le fale tele",
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
        "title": "Matou vs. Tatou — A2",
        "emoji": "👥",
        "sections": [
          {
            "type": "intro",
            "text": "Уже позначене в базових займенниках розрізнення інклюзивного/ексклюзивного 'ми' поширюється й на двоїну (mā'ua/tā'ua), тож кожна форма множини й двоїни першої особи існує в парі.",
            "en": {
              "text": "The inclusive/exclusive 'we' distinction already marked in the basic pronouns extends to the dual too (mā'ua/tā'ua), so every first-person plural and dual form exists in an inclusive/exclusive pair."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "tā'ua (ми двоє, з тобою) vs. mā'ua (ми двоє, без тебе)",
                "we-two (inclusive) vs. we-two (exclusive)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Inclusive/Exclusive Extended to Dual — A2"
      },
      {
        "id": "causative-fa-a",
        "title": "Fa'a-: Fa'amamafa — B1",
        "emoji": "⚙️",
        "sections": [
          {
            "type": "intro",
            "text": "Каузативний префікс fa'a- перетворює будь-яке дієслово чи прикметник на дієслово зі значенням 'змусити/зробити', — надзвичайно продуктивний словотворчий засіб.",
            "en": {
              "text": "The causative prefix fa'a- turns any verb or adjective into a verb meaning 'make/cause to', an extremely productive derivational device."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "tele (великий) → fa'atele (збільшити)",
                "big → to enlarge (causative)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Causative Prefix: fa'a- — B1"
      },
      {
        "id": "indefinite-plural-ni",
        "title": "Fa'ailoga Fa'atele Le Mautinoa: Ni — B1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Неозначена множина позначається словом ni ('якісь'), поставленим перед іменником, — множинний відповідник однинного se, а не просто відсутність артикля.",
            "en": {
              "text": "The indefinite plural is marked with the word ni ('some'), placed before the noun — the plural counterpart of the singular se, rather than simply the absence of an article."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ni tagata",
                "якісь люди"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Indefinite Plural: ni — B1"
      },
      {
        "id": "negative-existential-leai",
        "title": "Leai: Le'i Iai — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення наявності передається окремим словом leai ('немає'), а не звичайною часткою le, — самостійна заперечна форма для екзистенційних речень.",
            "en": {
              "text": "Negating existence is expressed with the dedicated word leai ('there isn't'), rather than the ordinary particle le — a standalone negative form for existential sentences."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Leai se tagata.",
                "Немає нікого."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negative Existential: leai — B1"
      },
      {
        "id": "fa-a-samoa-way-of-life",
        "title": "Fa'a Samoa: O le Ala Samoa — B2",
        "emoji": "🌺",
        "sections": [
          {
            "type": "intro",
            "text": "Fa'a Samoa ('самоанський шлях') — цілісна система соціальних обов'язків, поваги та колективізму, що визначає повсякденну поведінку, мову звертання й родинні стосунки набагато глибше, ніж просто 'традиція'.",
            "en": {
              "text": "Fa'a Samoa ('the Samoan way') is a comprehensive system of social obligation, respect, and collectivism that shapes everyday behavior, forms of address, and family relations far more deeply than 'tradition' alone."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "e tatau ona fai le Fa'a Samoa",
                "треба дотримуватися самоанського шляху"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Fa'a Samoa: The Samoan Way — B2"
      },
      {
        "id": "matai-chief-system",
        "title": "Matai: Pūlega — B2",
        "emoji": "👑",
        "sections": [
          {
            "type": "intro",
            "text": "Титул matai (вождя), обраний родиною (aiga), надає особі політичну, юридичну й церемоніальну владу над розширеною сім'єю — базова одиниця традиційного самоанського врядування, з власною лексикою титулів.",
            "en": {
              "text": "The matai (chief) title, elected by the extended family (aiga), gives a person political, legal, and ceremonial authority over the extended family — the basic unit of traditional Samoan governance, with its own titling vocabulary."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "fa'aipoipoga o matai",
                "церемонія надання титулу вождя"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Matai Chief System — B2"
      },
      {
        "id": "fa-alavelave-obligations",
        "title": "Fa'alavelave: Tiute Fa'aleaganu'u — B2",
        "emoji": "🎁",
        "sections": [
          {
            "type": "intro",
            "text": "Fa'alavelave (весілля, похорон, надання титулу) вимагають обов'язкового колективного внеску грошима й циновками (ie toga) від усіх членів родини, — центральна церемоніальна й економічна практика Fa'a Samoa.",
            "en": {
              "text": "A fa'alavelave (wedding, funeral, title bestowal) requires an obligatory collective contribution of money and fine mats (ie toga) from every family member — a central ceremonial and economic practice of Fa'a Samoa."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ie toga (тонка циновка, церемоніальна валюта)",
                "fine mat (ceremonial currency)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Fa'alavelave: Ceremonial Obligations — B2"
      },
      {
        "id": "ava-kava-ceremony",
        "title": "'Ava: Fa'atūlagaga — B2",
        "emoji": "🥥",
        "sections": [
          {
            "type": "intro",
            "text": "Церемонія 'ava (кава) супроводжується суворо впорядкованим ритуалом сервірування за титулом і суворою термінологією звертання, — центральний обряд формальних зустрічей вождів.",
            "en": {
              "text": "The 'ava (kava) ceremony is accompanied by a strictly ordered serving ritual by title rank and formal address terminology — the central rite of formal chiefly gatherings."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "taupou (дівчина, що подає 'aва)",
                "the ceremonial kava-serving maiden"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The 'Ava (Kava) Ceremony — B2"
      },
      {
        "id": "tatau-tattoo-tradition",
        "title": "Tatau: Pe'a ma Malu — B1",
        "emoji": "🖋️",
        "sections": [
          {
            "type": "intro",
            "text": "Саме слово 'tattoo' в англійській мові походить від самоанського tatau; чоловіче татуювання pe'a та жіноче malu — знаки, що позначають зрілість і зобов'язання перед громадою, а не просто прикрасу.",
            "en": {
              "text": "The English word 'tattoo' itself derives from Samoan tatau; the male pe'a and female malu tattoos are marks of maturity and obligation to the community, not mere decoration."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "fai le pe'a (пройти татуювання pe'a)",
                "undergo the pe'a tattooing"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Tatau: The Pe'a and Malu Tattoos — B1"
      },
      {
        "id": "fale-architecture",
        "title": "Fale: Fausaga Anamua — B1",
        "emoji": "🏠",
        "sections": [
          {
            "type": "intro",
            "text": "Традиційна самоанська хата fale — овальна, з відкритими боками без стін і з плетеними завісами pola, які опускають лише під час дощу чи для приватності.",
            "en": {
              "text": "The traditional Samoan fale is oval-shaped, open-sided with no walls, and uses woven pola blinds that are lowered only for rain or privacy."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "fale tele (велика хата для зборів)",
                "large meeting fale"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Fale: Traditional Architecture — B1"
      },
      {
        "id": "siva-dance",
        "title": "Siva: Tautali — B1",
        "emoji": "💃",
        "sections": [
          {
            "type": "intro",
            "text": "Siva — традиційний танець із плавними, витонченими рухами рук, що розповідає історію, на противагу енергійному чоловічому танцю таулуале (fa'ataupati, ляскання по тілу).",
            "en": {
              "text": "Siva is a traditional dance with fluid, graceful hand movements that tell a story, contrasting with the energetic male body-slapping dance fa'ataupati."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "fai le siva",
                "танцювати сіва"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Siva: The Traditional Dance — B1"
      },
      {
        "id": "food-vocabulary",
        "title": "Mea'ai — A2",
        "emoji": "🍞",
        "sections": [
          {
            "type": "table",
            "title": "Їжа",
            "rows": [
              [
                "таро",
                "talo"
              ],
              [
                "хлібне дерево",
                "'ulu"
              ],
              [
                "палусамі (страва з таро й кокоса)",
                "palusami"
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
        "id": "colors",
        "title": "Lanu — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "table",
            "title": "Кольори",
            "rows": [
              [
                "червоний",
                "mūmū"
              ],
              [
                "чорний",
                "uliuli"
              ],
              [
                "білий",
                "pa'epa'e"
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
        "title": "Nūmera: Sefulu — A2",
        "emoji": "🔟",
        "sections": [
          {
            "type": "table",
            "title": "Десятки",
            "rows": [
              [
                "20",
                "luasefulu"
              ],
              [
                "100",
                "selau"
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
        "title": "Aso o le Vāiaso — A2",
        "emoji": "📅",
        "sections": [
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "понеділок",
                "Aso Gafua"
              ],
              [
                "п'ятниця",
                "Aso Faraile"
              ],
              [
                "неділя",
                "Aso Sā"
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
        "id": "family-aiga-terms",
        "title": "'Āiga: Fai'āiga — B1",
        "emoji": "👪",
        "sections": [
          {
            "type": "intro",
            "text": "'Āiga означає не лише 'ядерна родина', а всю розширену родину, включно з титулованими родичами, — соціальна одиниця, ширша й важливіша, ніж 'сім'я' в західному розумінні.",
            "en": {
              "text": "'Āiga means not just 'nuclear family' but the entire extended family including titled relatives — a social unit broader and more significant than 'family' in the Western sense."
            }
          },
          {
            "type": "table",
            "title": "Родина",
            "rows": [
              [
                "батько",
                "tamā"
              ],
              [
                "мати",
                "tinā"
              ]
            ],
            "en": {
              "title": "Family"
            }
          }
        ],
        "titleEn": "'Āiga: The Extended Family — B1"
      },
      {
        "id": "greetings",
        "title": "Fa'afeiloa'iga — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "table",
            "title": "Вітання",
            "rows": [
              [
                "Привіт",
                "Talofa"
              ],
              [
                "Дякую",
                "Fa'afetai"
              ],
              [
                "До побачення",
                "Tōfā"
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
        "title": "Tau — A2",
        "emoji": "☁️",
        "sections": [
          {
            "type": "table",
            "title": "Погода",
            "rows": [
              [
                "сонце",
                "lā"
              ],
              [
                "дощ",
                "timu"
              ],
              [
                "вітер",
                "matagi"
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
        "title": "Vae o le Tino — A2",
        "emoji": "🧍",
        "sections": [
          {
            "type": "table",
            "title": "Частини тіла",
            "rows": [
              [
                "голова",
                "ulu"
              ],
              [
                "рука",
                "lima"
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
        "id": "lavalava-clothing",
        "title": "Lavalava: Ofu Fa'aleaganu'u — A2",
        "emoji": "🧵",
        "sections": [
          {
            "type": "intro",
            "text": "Lavalava — обгорнутий довкола пояса шматок тканини, який носять і чоловіки, і жінки на повсякденній основі й досі як частина офіційного дрес-коду на Самоа.",
            "en": {
              "text": "The lavalava is a wrap-around cloth worn around the waist by both men and women daily, still part of the formal dress code in Samoa today."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "'ofu lavalava",
                "одяг лавалава"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Lavalava: Traditional Clothing — A2"
      },
      {
        "id": "animals-vocabulary",
        "title": "Manu — A2",
        "emoji": "🐷",
        "sections": [
          {
            "type": "table",
            "title": "Тварини",
            "rows": [
              [
                "свиня",
                "pua'a"
              ],
              [
                "собака",
                "ta'ifau"
              ],
              [
                "риба",
                "i'a"
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
        "id": "rugby-cultural-significance",
        "title": "Lakapī: Ta'aloga Autū — B1",
        "emoji": "🏉",
        "sections": [
          {
            "type": "intro",
            "text": "Регбі має надзвичайне культурне значення на Самоа: команда Manu Samoa — джерело національної гордості, а самоанські гравці посідають непропорційно велику частку складів провідних світових команд.",
            "en": {
              "text": "Rugby holds extraordinary cultural significance in Samoa: the Manu Samoa team is a source of national pride, and Samoan players make up a disproportionately large share of leading world teams' rosters."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Manu Samoa (національна збірна з регбі)",
                "Manu Samoa (the national rugby team)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Rugby's Cultural Significance — B1"
      },
      {
        "id": "christianity-integration",
        "title": "Lotu: Fa'atasi ma Fa'a Samoa — B2",
        "emoji": "⛪",
        "sections": [
          {
            "type": "intro",
            "text": "Християнство глибоко переплетене з Fa'a Samoa: церковний вечірній час тиші (sā, звідси й 'Aso Sā' — неділя) шанобливо дотримується навіть за межами церкви, поєднуючи релігію з традиційним устроєм.",
            "en": {
              "text": "Christianity is deeply interwoven with Fa'a Samoa: the church's evening quiet-time observance (sā, hence 'Aso Sā' — Sunday) is respectfully kept even outside the church, blending religion with traditional order."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "sā (час вечірньої тиші/молитви)",
                "sā (evening prayer/quiet time)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Christianity Interwoven with Fa'a Samoa — B2"
      },
      {
        "id": "samoan-diaspora",
        "title": "Fānau i Fafo: Malaga — B2",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Значна самоанська діаспора живе в Новій Зеландії, Австралії та США, з активними самоаномовними громадами, церквами й освітніми програмами, що підтримують мову поза островами.",
            "en": {
              "text": "A significant Samoan diaspora lives in New Zealand, Australia, and the US, with active Samoan-speaking communities, churches, and education programs sustaining the language beyond the islands."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Samoa i Fafo (самоанці за кордоном)",
                "Samoans abroad"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Samoan Diaspora — B2"
      },
      {
        "id": "cardinal-directions",
        "title": "Itū o le Lalolagi — B1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "table",
            "title": "Сторони світу",
            "rows": [
              [
                "північ",
                "matū"
              ],
              [
                "південь",
                "saute"
              ],
              [
                "схід",
                "sasa'e"
              ],
              [
                "захід",
                "sisifo"
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
        "id": "long-vowel-macron",
        "title": "Fa'amamafa: Macron — B1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Довгота голосного фонематична й позначається макроном (ā,ē, ī, ō, ū), причому те саме написане без макрону слово може мати зовсім інше значення.",
            "en": {
              "text": "Vowel length is phonemic and is marked with a macron (ā, ē, ī, ō, ū), and the same word written without the macron can have a completely different meaning."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "sa (форма минулого часу) vs. sā (священний)",
                "past-tense particle vs. sacred"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Phonemic Vowel Length: The Macron — B1"
      },
      {
        "id": "fono-village-council",
        "title": "Fono: Fa'amasinoga a le Nu'u — B2",
        "emoji": "🏛️",
        "sections": [
          {
            "type": "intro",
            "text": "Fono — сільська рада вождів, що ухвалює рішення й вирішує суперечки за традиційним правом, паралельно з державною судовою системою, — власна термінологія засідань, штрафів і покарань.",
            "en": {
              "text": "The fono is the village council of chiefs, which makes decisions and settles disputes under customary law, running parallel to the state court system — with its own vocabulary for sessions, fines, and penalties."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "fai le fono a le nu'u",
                "провести сільську раду"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Fono Village Council — B2"
      },
      {
        "id": "coordinating-conjunctions-extra",
        "title": "Isi Fa'aoloolo — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Частка auā ('тому що') і сполучник peita'i ('однак') розширюють базовий набір ma/pē/'ae, додаючи причинові й протиставні зв'язки.",
            "en": {
              "text": "The particle auā ('because') and the connector peita'i ('however') extend the basic ma/pē/'ae set, adding causal and contrastive links."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ou te nofo i le fale auā e timu.",
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
        "id": "irregular-verb-plural-alu",
        "title": "Veape Le'i Masani: Alu → Ō — B2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово alu ('іти') утворює множинну форму зовсім іншим коренем ō, а не редуплікацією, як більшість інших дієслів, — супплетивна пара, а не регулярна модель.",
            "en": {
              "text": "The verb alu ('to go') forms its plural with an entirely different root ō, rather than reduplication like most other verbs — a suppletive pair, not the regular pattern."
            }
          },
          {
            "type": "table",
            "title": "Супплетивна множина дієслова",
            "rows": [
              [
                "alu (іде, одн.) → ō (ідуть, мн., не *alualu)",
                "goes (singular) → go (plural, suppletive)"
              ]
            ],
            "en": {
              "title": "Suppletive Verb Plural"
            }
          }
        ],
        "titleEn": "Irregular Verb Plural: alu → ō — B2"
      },
      {
        "id": "irregular-possessive-class-exceptions",
        "title": "Fa'asili Le'i Masani — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька іменників (наприклад, 'книга' чи 'фотографія') можуть уживатися і з класом a, і з класом o залежно від того, чи розглядають предмет як щось контрольоване чи як щось невід'ємно пов'язане, — виняток із чіткого поділу на дві категорії.",
            "en": {
              "text": "A handful of nouns (such as 'book' or 'photograph') can take either the a-class or the o-class depending on whether the object is viewed as controlled or as inherently connected — an exception to the otherwise clean two-way split."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "le tusi a Sina (книга, яку вона написала) vs. le tusi o Sina (книга про неї)",
                "Sina's book (she wrote it) vs. Sina's book (about her)"
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
        "id": "irregular-comparative-lelei",
        "title": "Fa'atusatusaga Le'i Masani: Lelei → Sili — B1",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник lelei ('добрий') має супплетивний найвищий ступінь sili ('найкращий/найвищий') замість очікуваного регулярного *sili ona lelei в розмовному вжитку.",
            "en": {
              "text": "The adjective lelei ('good') has a suppletive superlative sili ('best/highest') instead of the expected regular *sili ona lelei in colloquial usage."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярний найвищий ступінь",
            "rows": [
              [
                "lelei → sili (розмовно, не *sili ona lelei)",
                "good → best (suppletive, colloquial)"
              ]
            ],
            "en": {
              "title": "Irregular Superlative"
            }
          }
        ],
        "titleEn": "Irregular Superlative: lelei → sili — B1"
      }
    ]
  }
];
