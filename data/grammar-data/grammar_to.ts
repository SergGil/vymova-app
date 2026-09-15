// Vymova — data/grammar-data/grammar_to.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_TO: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Ngaahi Poloniva Fakafoʻituitui — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У тонганській є окремі форми числа для двох осіб (двоїна) і трьох та більше (множина) — тут наведено форми множини.",
            "en": {
              "text": "Tongan has separate forms for two people (dual) and three or more (plural) — the plural forms are shown here."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ou"
              ],
              [
                "ти",
                "koe"
              ],
              [
                "він / вона / воно",
                "ia"
              ],
              [
                "ми (без вас)",
                "kimautolu"
              ],
              [
                "ми (з вами)",
                "kitautolu"
              ],
              [
                "ви",
                "kimoutolu"
              ],
              [
                "вони",
                "kinautolu"
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
        "id": "three-tier-honorific-vocabulary",
        "title": "Lea Fakaʻeiki: Tolu Tuʻunga — B2",
        "emoji": "👑",
        "sections": [
          {
            "type": "intro",
            "text": "Тонганська має три повністю окремі словникові набори залежно від соціального статусу того, про кого йдеться: звичайна мова, шанобливе мовлення про вождів і окреме, ще шанобливіше мовлення про короля, — окремі слова, а не просто інший тон, як у самоанському T/K-регістрі.",
            "en": {
              "text": "Tongan has three entirely separate vocabulary sets depending on the social status of the person being discussed: ordinary speech, honorific speech for chiefs, and a separate, even more honorific register for the king — distinct words, not just a different tone as in Samoan's T/K register."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kai (звичайне 'їсти') / ʻilo (шанобливе, про вождя) / ʻafo (про короля)",
                "to eat (ordinary / chiefly-honorific / royal register)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Three-Tier Honorific Vocabulary — B2"
      },
      {
        "id": "living-monarchy-context",
        "title": "Tuʻi Tonga: Puleʻanga — B1",
        "emoji": "🏛️",
        "sections": [
          {
            "type": "intro",
            "text": "Тонга — єдина полінезійська держава, що ніколи формально не була колонізована, і досі має чинну монархію: шанобливий словниковий пласт мови безпосередньо обслуговує живий королівський двір, а не історичну пам'ять.",
            "en": {
              "text": "Tonga is the only Polynesian nation never formally colonized, and still has a functioning monarchy: the language's honorific vocabulary layer directly serves a living royal court, not historical memory."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Tuʻi Tonga (Король Тонга)",
                "the King of Tonga"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Living Monarchy Context — B1"
      },
      {
        "id": "article-he-ha-a",
        "title": "He, Ha, ʻA: Fakaʻilonga — A2",
        "emoji": "🔖",
        "sections": [
          {
            "type": "table",
            "title": "Артиклі",
            "rows": [
              [
                "означений звичайний",
                "he"
              ],
              [
                "неозначений",
                "ha"
              ],
              [
                "перед власними назвами",
                "ʻa"
              ]
            ],
            "en": {
              "title": "Articles"
            }
          }
        ],
        "titleEn": "Articles: he, ha, ʻa — A2"
      },
      {
        "id": "verb-initial-vso",
        "title": "Fokotuʻutuʻu Lea: VSO — A2",
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
                "ʻOku ʻalu ʻa Sione ki he sikolá.",
                "Джон іде до школи (йде-Джон-до школи)."
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
        "id": "present-habitual-oku",
        "title": "Taimi Lolotonga: ʻOku — A1",
        "emoji": "☀️",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній/звичний час утворюється часткою ʻoku перед дієсловом, вживаною і для миттєвої дії, і для загальних тверджень.",
            "en": {
              "text": "The present/habitual tense is formed with the particle ʻoku before the verb, used for both immediate action and general statements."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ʻOku ou kai.",
                "Я їм (взагалі/зараз)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present/Habitual: ʻoku — A1"
      },
      {
        "id": "past-tense-nae",
        "title": "Taimi Kuohili: Naʻe — A2",
        "emoji": "⏪",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий час утворюється часткою naʻe перед дієсловом, позначаючи завершену дію в минулому.",
            "en": {
              "text": "The past tense is formed with the particle naʻe before the verb, marking a completed action in the past."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Naʻe kai ia.",
                "Він/вона поїв(-ла)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Past Tense: naʻe — A2"
      },
      {
        "id": "future-tense-te",
        "title": "Taimi Kahaʻu: Te — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється часткою te перед дієсловом, доданою до речення в базовій формі.",
            "en": {
              "text": "The future tense is formed with the particle te before the verb, added to the sentence in its basic form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Te u kai.",
                "Я їстиму."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Future: te — A2"
      },
      {
        "id": "perfective-kuo",
        "title": "Kuo: Fakaʻosi — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Частка kuo позначає зміну стану чи теперішню актуальність результату ('вже'), окрему від простого минулого naʻe.",
            "en": {
              "text": "The particle kuo marks a change of state or the present relevance of a result ('already'), distinct from the simple past naʻe."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kuo kai ia.",
                "Він/вона вже поїв(-ла) (і це важливо зараз)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Perfective/Change-of-State: kuo — B1"
      },
      {
        "id": "past-continuous-nae-ha",
        "title": "Taimi Kuohili Fai: Naʻe...Pē — B1",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія в минулому передається часткою naʻe плюс прислівник pē ('якраз'), окремо від простого завершеного минулого.",
            "en": {
              "text": "An ongoing past action is expressed with the particle naʻe plus the adverb pē ('just'), distinct from the plain completed past."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Naʻe kai pē ia.",
                "Він/вона саме їв(-ла) (тривало)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Past Continuous: naʻe...pē — B1"
      },
      {
        "id": "imperative-mood",
        "title": "Fekau — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб — гола форма дієслова без частки часу, часто з часткою pe пом'якшеною для ввічливості.",
            "en": {
              "text": "The imperative is the bare verb form with no tense particle, often softened with the particle pe for politeness."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kai!",
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
        "id": "prohibitive-oua",
        "title": "Fakataputapu: ʻOua — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заборонний наказ утворюється часткою ʻoua ('не смій') перед дієсловом, — окрема частка від звичайного заперечення.",
            "en": {
              "text": "The prohibitive is formed with the particle ʻoua ('don't') before the verb — a separate particle from ordinary negation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ʻOua ʻe kai!",
                "Не їж!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Prohibitive: ʻoua — B1"
      },
      {
        "id": "negation-ikai",
        "title": "Fakaʻikaiʻi: ʻIkai — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Звичайне заперечення утворюється часткою ʻikai, поставленою перед часовою часткою й дієсловом.",
            "en": {
              "text": "Ordinary negation is formed with the particle ʻikai, placed before the tense particle and the verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ʻIkai te u kai.",
                "Я не їм."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation: ʻikai — A2"
      },
      {
        "id": "potential-lava",
        "title": "Lava: Malava — B1",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Здатність чи можливість виражається словом lava ('могти'), уживаним із підрядним реченням, введеним часткою ke.",
            "en": {
              "text": "Ability or possibility is expressed with the word lava ('to be able'), used with a subordinate clause introduced by the particle ke."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ʻOku ou lava ke kai.",
                "Я можу їсти."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Potential: lava — B1"
      },
      {
        "id": "desiderative-fie",
        "title": "Fie-: Holi — A2",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Бажання виражається префіксом fie- ('бажати'), доданим безпосередньо до дієслова, — простіший засіб, ніж окреме допоміжне дієслово.",
            "en": {
              "text": "A wish is expressed with the prefix fie- ('to wish to'), added directly to the verb — a simpler device than a separate auxiliary verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ʻOku ou fiekai.",
                "Я хочу їсти (голодний)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Desiderative: fie- — A2"
      },
      {
        "id": "not-yet-teeki",
        "title": "Teʻeki: Kei Mateuteu — B1",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Частка teʻeki ('ще не') заперечує дію, вказуючи, що вона не сталася дотепер, — окрема частка від звичайного заперечення ʻikai.",
            "en": {
              "text": "The particle teʻeki ('not yet') negates an action by indicating it hasn't happened up to now — a separate particle from ordinary negation ʻikai."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Teʻeki ke kai ia.",
                "Він/вона ще не їв(-ла)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Not Yet: teʻeki — B1"
      },
      {
        "id": "conditional-kapau",
        "title": "Kapau: Tuʻunga Fakatatau — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовне речення вводиться сполучником kapau ('якщо'), поставленим на початку підрядного речення.",
            "en": {
              "text": "A conditional sentence is introduced with the conjunction kapau ('if'), placed at the start of the subordinate clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kapau ʻe ʻuha, te u nofo ʻi ʻapi.",
                "Якщо піде дощ, я залишуся вдома."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional: kapau — B1"
      },
      {
        "id": "obligation-pau-ke",
        "title": "Pau Ke: Fatongia — B1",
        "emoji": "📋",
        "sections": [
          {
            "type": "intro",
            "text": "Обов'язок виражається зворотом pau ke ('мусити'), поставленим перед основним дієсловом у підрядному реченні.",
            "en": {
              "text": "Obligation is expressed with the phrase pau ke ('must'), placed before the main verb in a subordinate clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ʻOku pau ke u kai.",
                "Я мушу їсти."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Obligation: pau ke — B1"
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
        "id": "ergative-marking-e",
        "title": "Ngaahi Fakaʻilonga Kaha: ʻE — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Тонганська має ергативно-абсолютивну систему: діяч перехідного дієслова позначається часткою ʻe, тоді як підмет неперехідного дієслова та об'єкт перехідного лишаються немаркованими.",
            "en": {
              "text": "Tongan has an ergative-absolutive system: the agent of a transitive verb is marked with the particle ʻe, while the subject of an intransitive verb and the object of a transitive one both stay unmarked."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Naʻe taaʻi ʻe Sione ʻa e kulí.",
                "Джон вдарив собаку (Джон = агент, позначений ʻe)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ergative Marking: ʻe — B1"
      },
      {
        "id": "possessive-a-class",
        "title": "Meʻa ʻA: Puleʻi — B1",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійний зв'язок класу 'a' уживається, коли власник контролює предмет (набуте майно, тварини, молодші родичі), позначений часткою ʻa перед власником.",
            "en": {
              "text": "The 'a'-class possessive is used when the possessor controls the thing possessed (acquired property, animals, younger relatives), marked with the particle ʻa before the possessor."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ʻa e puaka ʻa Sioné",
                "свиня Джона (він контролює тварину)"
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
        "title": "Meʻa ʻO: Fakatasi — B1",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійний зв'язок класу 'o' уживається для невід'ємних чи нейтральних зв'язків (частини тіла, будівлі, батьки, транспорт), позначений часткою ʻo.",
            "en": {
              "text": "The 'o'-class possessive is used for inherent or neutral relations (body parts, buildings, parents, vehicles), marked with the particle ʻo."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ʻa e fale ʻo Sioné",
                "дім Джона (невід'ємний зв'язок)"
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
        "id": "plural-verb-agreement",
        "title": "Tokolahi: Veape — B2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Множина підмета часто позначається не на іменнику, а зміною самого дієслова (суплетивна форма чи редуплікація), — та сама стратегія, що й в інших полінезійських мовах.",
            "en": {
              "text": "Plurality of the subject is often marked not on the noun but by a change to the verb itself (suppletive form or reduplication) — the same strategy found in other Polynesian languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ʻalu (іти, одн.) → ʻohake/feʻalu (іти, мн.)",
                "go (singular subject) vs. go (plural subject, distinct verb form)"
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
        "id": "cardinal-numbers",
        "title": "Ngaahi Fika: 1-10 — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "table",
            "title": "Числа 1-10",
            "rows": [
              [
                "1",
                "taha"
              ],
              [
                "2",
                "ua"
              ],
              [
                "3",
                "tolu"
              ],
              [
                "5",
                "nima"
              ],
              [
                "10",
                "hongofulu"
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
        "title": "Ngaahi Fakaʻilonga Fakahaaʻi — A2",
        "emoji": "👉",
        "sections": [
          {
            "type": "table",
            "title": "Вказівні займенники",
            "rows": [
              [
                "цей",
                "eni"
              ],
              [
                "той (біля тебе)",
                "ena"
              ],
              [
                "той (далеко)",
                "ia"
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
        "title": "Ngaahi Fehuʻi — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "хто",
                "hai"
              ],
              [
                "що",
                "ha"
              ],
              [
                "де",
                "fē"
              ],
              [
                "коли",
                "fēfē"
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
        "title": "Ngaahi Kupuʻi Lea — A2",
        "emoji": "📌",
        "sections": [
          {
            "type": "table",
            "title": "Прийменники",
            "rows": [
              [
                "в/на",
                "ʻi"
              ],
              [
                "з (разом)",
                "mo"
              ],
              [
                "для",
                "maʻa"
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
        "title": "Ngaahi Fakahoko — A1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники",
            "rows": [
              [
                "і",
                "mo"
              ],
              [
                "або",
                "pe"
              ],
              [
                "але",
                "ka"
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
        "id": "relative-clause-aia-nae",
        "title": "ʻAia Naʻe: Kupu Fakamatala — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Означальні (відносні) підрядні речення часто вводяться словосполученням ʻaia naʻe ('той, хто'), окремим повноцінним словом, а не суфіксом на дієслові.",
            "en": {
              "text": "Relative clauses are often introduced with the phrase ʻaia naʻe ('the one who'), a standalone full word rather than a suffix on the verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ʻa e tangata ʻaia naʻe ʻalu",
                "чоловік, що пішов"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Clause: ʻaia naʻe — B1"
      },
      {
        "id": "comparative-lahi-ange",
        "title": "Fakafehoanaki: Lahi Ange — B1",
        "emoji": "📊",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняльний ступінь утворюється часткою ange ('більш'), доданою після прикметника, а об'єкт порівняння вводиться прийменником ʻi.",
            "en": {
              "text": "The comparative degree is formed with the particle ange ('more'), added after the adjective, with the compared object introduced by the preposition ʻi."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Lahi ange ʻeni ʻi ena.",
                "Це більше за те."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparative: lahi ange — B1"
      },
      {
        "id": "superlative-taha-pe",
        "title": "Fakalahi Taha: Taha Pē — B1",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь порівняння утворюється часткою taha pē ('єдиний, найбільш') після прикметника.",
            "en": {
              "text": "The superlative is formed with the particle taha pē ('the only one, most') after the adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "lahi taha pē",
                "найбільший"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Superlative: lahi taha pē — B1"
      },
      {
        "id": "focus-fronting",
        "title": "Fakamamafa: Fetuku ki Muʻa — B2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Слово, що потребує особливого наголосу, можна винести на самий початок речення перед часовою часткою, — виняток із звичайного VSO-порядку.",
            "en": {
              "text": "A word requiring special emphasis can be fronted to the very start of the sentence before the tense particle — an exception to the ordinary VSO order."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ko Sione naʻe kai.",
                "Саме Джон поїв (наголос на Джоні)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Focus Fronting: ko — B2"
      },
      {
        "id": "adjective-as-stative-verb",
        "title": "Fakaʻuli ʻo e Veape — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники граматично поводяться як стативні дієслова: 'бути великим' — це саме дієслово lahi, без потреби в окремому допоміжному 'бути'.",
            "en": {
              "text": "Adjectives grammatically function as stative verbs: 'to be big' is simply the verb lahi itself, with no need for a separate auxiliary 'to be'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ʻOku lahi ʻa e falé.",
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
        "id": "dual-plural-pronouns",
        "title": "Toko Ua, Tokolahi: Tolu Numera — A2",
        "emoji": "3️⃣",
        "sections": [
          {
            "type": "intro",
            "text": "Займенники розрізняють три числа: однину, двоїну (для точно двох) і множину (для трьох і більше), причому цей поділ обов'язковий у кожній особі.",
            "en": {
              "text": "Pronouns distinguish three numbers: singular, dual (for exactly two), and plural (for three or more), and this split is obligatory in every person."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kimaua (ми двоє, без тебе) vs. kimautolu (ми троє й більше)",
                "we-two (exclusive) vs. we-many (exclusive)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Three-Way Pronoun Number — A2"
      },
      {
        "id": "postposed-adjective",
        "title": "Tuʻunga ʻo e Kupuʻi Fakaʻuli — A2",
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
                "fale lahi",
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
        "title": "Kitautolu vs. Kimautolu — A2",
        "emoji": "👥",
        "sections": [
          {
            "type": "intro",
            "text": "Займенники першої особи множини обов'язково розрізняють інклюзивне kitautolu ('ми з вами') та ексклюзивне kimautolu ('ми без вас').",
            "en": {
              "text": "First-person plural pronouns obligatorily distinguish inclusive kitautolu ('we, including you') from exclusive kimautolu ('we, excluding you')."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Te tau kai. / Te mau kai.",
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
        "id": "causative-faka",
        "title": "Faka-: Fakatupu — B1",
        "emoji": "⚙️",
        "sections": [
          {
            "type": "intro",
            "text": "Каузативний префікс faka-, доданий до будь-якого дієслова чи прикметника, передає значення 'змусити/зробити', — надзвичайно продуктивний словотворчий засіб.",
            "en": {
              "text": "The causative prefix faka-, added to any verb or adjective, conveys 'make/cause to' — an extremely productive derivational device."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "lahi (великий) → fakalahi (збільшити)",
                "big → to enlarge (causative)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Causative Prefix: faka- — B1"
      },
      {
        "id": "existential-oku-ai",
        "title": "ʻOku ʻI Ai: ʻI he Ngofua — B1",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Наявність чогось у певному місці передається зворотом ʻoku ʻi ai ('там є'), із локативною часткою ai в кінці конструкції.",
            "en": {
              "text": "The existence of something at a place is expressed with ʻoku ʻi ai ('there is'), with the locative particle ai at the end of the construction."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ʻOku ʻi ai ʻa e tangata ʻi he falé.",
                "У домі є чоловік."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Existential: ʻoku ʻi ai — B1"
      },
      {
        "id": "reduplication-intensity",
        "title": "Toe Lea: Fakamalohi — B1",
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
                "lahi → lalahi",
                "великий → дуже великий/багато великих"
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
        "title": "Uiʻi — A2",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "При звертанні до когось ім'я вживається без артикля he, на відміну від звичайного вживання іменника в реченні.",
            "en": {
              "text": "In direct address, a name is used without the article he, unlike its ordinary use as a noun in a sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Sione, haʻu ki heni!",
                "Джоне, ходи сюди!"
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
        "id": "negative-existential-ikai-hano",
        "title": "ʻIkai Hanó: Kavakava — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення наявності передається зворотом ʻikai ha ('немає жодного'), а не звичайним циркумфіксом чи запереченням дієслова.",
            "en": {
              "text": "Negating existence is expressed with the phrase ʻikai ha ('there is not a single'), rather than the ordinary verb negation pattern."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ʻIkai ha paʻanga.",
                "Немає грошей."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negative Existential: ʻikai ha — B1"
      },
      {
        "id": "indefinite-plural-ha-ngaahi",
        "title": "Ha Ngaahi: Fakaʻilonga Tokolahi — B1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Неозначена множина позначається словом ngaahi ('якісь/деякі'), поставленим перед іменником, — множинний відповідник однинного ha.",
            "en": {
              "text": "The indefinite plural is marked with the word ngaahi ('some'), placed before the noun — the plural counterpart of the singular ha."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ha ngaahi tangata",
                "якісь чоловіки"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Indefinite Plural: ngaahi — B1"
      },
      {
        "id": "topic-marker-ko",
        "title": "Ko: Fakaʻilonga Kaveinga — B1",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Частка ko вводить іменникову фразу як тему висловлювання чи відповідь на питання 'хто/що', ставлячись перед нею на самому початку речення.",
            "en": {
              "text": "The particle ko introduces a noun phrase as the topic of an utterance or the answer to a 'who/what' question, placed before it at the very start of the sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ko hai koe?",
                "Хто ти?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Topic Marker: ko — B1"
      },
      {
        "id": "diminutive-expression",
        "title": "Iiki: Fakaveʻiveʻi — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувальний відтінок передається окремим прикметником iiki ('малий') після іменника, а не суфіксом.",
            "en": {
              "text": "A diminutive shade of meaning is conveyed with the separate adjective iiki ('small') after the noun, rather than a suffix."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "tamasiʻi iiki",
                "малятко (букв. 'дитина мала')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Diminutive: iiki — B1"
      },
      {
        "id": "sunday-sabbath-law",
        "title": "Sāpate: Lao Fakamalumalu — B2",
        "emoji": "⛪",
        "sections": [
          {
            "type": "intro",
            "text": "Тонга має одне з найсуворіших у світі конституційних недільних законів: комерційна діяльність, спорт і публічний транспорт офіційно призупиняються по неділях на знак релігійної пошани, — рідкісний приклад мовно-правового закріплення релігійної практики.",
            "en": {
              "text": "Tonga has one of the strictest constitutional Sunday laws in the world: commercial activity, sports, and public transport are officially suspended on Sundays as a mark of religious observance — a rare example of religious practice enshrined in law."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Sāpate tapu",
                "священна неділя (законодавчо захищена)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Sunday Sabbath Law — B2"
      },
      {
        "id": "faikava-royal-ceremony",
        "title": "Faikava: Fakaʻeiki — B2",
        "emoji": "🥥",
        "sections": [
          {
            "type": "intro",
            "text": "Королівська церемонія кави (файкава) має ще суворіший порядок подачі й термінологію звертання, ніж звичайна церемонія кави, з окремими ролями для дівчини, що готує напій (тоуʻа), і чіткою ієрархією подачі присутнім за титулом.",
            "en": {
              "text": "The royal kava ceremony (faikava) has an even stricter serving order and address terminology than an ordinary kava ceremony, with a distinct role for the kava-mixing maiden (tou'a) and a strict serving hierarchy by title."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "tou'a (дівчина, що готує каву)",
                "the kava-mixing maiden"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Faikava: The Royal Kava Ceremony — B2"
      },
      {
        "id": "ngatu-tapa-cloth",
        "title": "Ngatu — B1",
        "emoji": "🧵",
        "sections": [
          {
            "type": "intro",
            "text": "Нгату — тканина з кори шовковиці, розписана вручну геометричними візерунками й даровувана на весіллях і похоронах, — може досягати десятків метрів завдовжки для особливо урочистих подій.",
            "en": {
              "text": "Ngatu is a hand-painted barkcloth made from paper mulberry, given at weddings and funerals, and can reach dozens of meters in length for especially formal occasions."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ngatu ʻi he mali",
                "нгату на весілля"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ngatu: Ceremonial Barkcloth — B1"
      },
      {
        "id": "never-colonized-status",
        "title": "Tonga: Mana Taʻekolonaiʻi — B1",
        "emoji": "🇹🇴",
        "sections": [
          {
            "type": "intro",
            "text": "Тонга — єдина держава Тихоокеанського регіону, що ніколи не була формально колонізована жодною європейською державою, хоча й перебувала під британським протекторатом (1900-1970), — джерело особливої національної гордості.",
            "en": {
              "text": "Tonga is the only Pacific nation never formally colonized by a European power, though it was a British protectorate (1900-1970) — a source of particular national pride."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Puleʻanga Fakatuʻi ʻo Tonga (Королівство Тонга)",
                "the Kingdom of Tonga"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Never Formally Colonized — B1"
      },
      {
        "id": "colors",
        "title": "Ngaahi Lanu — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "table",
            "title": "Кольори",
            "rows": [
              [
                "червоний",
                "kulokula"
              ],
              [
                "чорний",
                "ʻuliʻuli"
              ],
              [
                "білий",
                "hinehina"
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
        "title": "Ngaahi Fika: Hongofulu — A2",
        "emoji": "🔟",
        "sections": [
          {
            "type": "table",
            "title": "Десятки",
            "rows": [
              [
                "20",
                "uofulu"
              ],
              [
                "100",
                "teau"
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
        "title": "Ngaahi ʻAho ʻo e Uike — A2",
        "emoji": "📅",
        "sections": [
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "понеділок",
                "Mōnite"
              ],
              [
                "п'ятниця",
                "Falaite"
              ],
              [
                "неділя",
                "Sāpate"
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
        "id": "family-kainga-terms",
        "title": "Kāinga: Kāhoa Famili — B1",
        "emoji": "👪",
        "sections": [
          {
            "type": "intro",
            "text": "Kāinga означає не лише вузьку сім'ю, а всю розширену родину й клан, тож стосунки регулюються складною системою взаємних обов'язків між родичами за статтю й старшинством.",
            "en": {
              "text": "Kāinga means not just the nuclear family but the entire extended clan, so relationships are governed by a complex system of mutual obligations among relatives by sex and seniority."
            }
          },
          {
            "type": "table",
            "title": "Родина",
            "rows": [
              [
                "батько",
                "tamai"
              ],
              [
                "мати",
                "faʻē"
              ]
            ],
            "en": {
              "title": "Family"
            }
          }
        ],
        "titleEn": "Kāinga: The Extended Family — B1"
      },
      {
        "id": "greetings",
        "title": "Fakafeʻiloaki — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "table",
            "title": "Вітання",
            "rows": [
              [
                "Привіт",
                "Mālō e lelei"
              ],
              [
                "Дякую",
                "Mālō"
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
        "title": "ʻEa — A2",
        "emoji": "☁️",
        "sections": [
          {
            "type": "table",
            "title": "Погода",
            "rows": [
              [
                "сонце",
                "laʻā"
              ],
              [
                "дощ",
                "ʻuha"
              ],
              [
                "вітер",
                "matangi"
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
        "title": "Konga ʻo e Sino — A2",
        "emoji": "🧍",
        "sections": [
          {
            "type": "table",
            "title": "Частини тіла",
            "rows": [
              [
                "голова",
                "ʻulu"
              ],
              [
                "рука",
                "nima"
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
        "id": "food-vocabulary",
        "title": "Meʻakai — A2",
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
                "свинина",
                "puaka"
              ],
              [
                "риба",
                "ika"
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
        "id": "tapa-clothing-tuvala",
        "title": "Taʻovala: Ngaahi Kofu — B1",
        "emoji": "🧣",
        "sections": [
          {
            "type": "intro",
            "text": "Тао'вала — плетена мата з пандануса, обов'язково обгорнута навколо талії поверх звичайного одягу, — важлива частина офіційного вбрання, яку носять навіть з діловим костюмом.",
            "en": {
              "text": "The taʻovala is a woven pandanus mat obligatorily wrapped around the waist over ordinary clothing — an essential part of formal dress, worn even over a business suit."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "fai taʻovala",
                "надягнути тао'валу"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Taʻovala: Mandatory Formal Dress — B1"
      },
      {
        "id": "animals-vocabulary",
        "title": "Fanga Manu — A2",
        "emoji": "🐷",
        "sections": [
          {
            "type": "table",
            "title": "Тварини",
            "rows": [
              [
                "свиня",
                "puaka"
              ],
              [
                "собака",
                "kulī"
              ],
              [
                "курка",
                "moa"
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
        "title": "Lakapī: Ikale Tahi — B1",
        "emoji": "🏉",
        "sections": [
          {
            "type": "intro",
            "text": "Регбі — національна пристрасть Тонга, і збірна ʻIkale Tahi ('Морський орел') — джерело надзвичайної гордості, попри невеликий розмір країни, з традиційним бойовим танцем сипі-тау перед матчами.",
            "en": {
              "text": "Rugby is Tonga's national passion, and the ʻIkale Tahi ('Sea Eagle') national team is a source of immense pride despite the country's tiny size, with the traditional sipi tau war dance performed before matches."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "sipi tau (бойовий танець перед матчем)",
                "the sipi tau war dance"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Rugby and the Sipi Tau — B1"
      },
      {
        "id": "clothing-vocabulary",
        "title": "Kofu — A2",
        "emoji": "👕",
        "sections": [
          {
            "type": "table",
            "title": "Одяг",
            "rows": [
              [
                "сорочка",
                "sote"
              ],
              [
                "взуття",
                "topuvaʻe"
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
        "id": "cardinal-directions",
        "title": "Ngaahi Feituʻu — B1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "table",
            "title": "Сторони світу",
            "rows": [
              [
                "північ",
                "tokelau"
              ],
              [
                "південь",
                "tonga"
              ],
              [
                "схід",
                "hahake"
              ],
              [
                "захід",
                "hihifo"
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
        "id": "fahu-sister-authority",
        "title": "Fahu: Mafai Fefine — B2",
        "emoji": "👑",
        "sections": [
          {
            "type": "intro",
            "text": "Fahu — унікальний тонганський соціальний статус, за яким найстарша сестра батька (чи її нащадки) має церемоніальну владу вищу за самого вождя роду, — рідкісна система матрилінійного пошанування в патрилінійному в іншому суспільстві.",
            "en": {
              "text": "Fahu is a unique Tongan social status in which the father's eldest sister (or her descendants) holds ceremonial authority even higher than the clan chief himself — a rare matrilineal honor system embedded in an otherwise patrilineal society."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ʻa e fahu ʻo e familí",
                "family's fahu (highest-honored relative)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Fahu: The Father's-Sister Authority — B2"
      },
      {
        "id": "lakalaka-dance",
        "title": "Lakalaka — B1",
        "emoji": "💃",
        "sections": [
          {
            "type": "intro",
            "text": "Лакалака — визнаний ЮНЕСКО танець-декламація, що поєднує спів, синхронізовані рухи рук і поетичні тексти, часто присвячені історії роду чи королівської родини, — виконується великими групами на державних святах.",
            "en": {
              "text": "Lakalaka is a UNESCO-recognized dance-recitation combining song, synchronized hand movements, and poetic texts often dedicated to clan or royal history — performed by large groups at state occasions."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "fai lakalaka",
                "виконувати лакалаку"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Lakalaka: UNESCO Dance Tradition — B1"
      },
      {
        "id": "tongan-diaspora",
        "title": "Kau Tonga ʻi Tuʻapule — B2",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Значна тонганська діаспора живе в Новій Зеландії, Австралії та США — за деякими оцінками, тонганців за кордоном більше, ніж у самому королівстві, — з активними церковними й культурними громадами.",
            "en": {
              "text": "A significant Tongan diaspora lives in New Zealand, Australia, and the US — by some estimates, more Tongans live abroad than in the kingdom itself — with active church and cultural communities."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Tonga ʻi tuʻapule (тонганці за кордоном)",
                "Tongans abroad"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Tongan Diaspora — B2"
      },
      {
        "id": "long-vowel-macron",
        "title": "Fakamamafa: Toloi — B1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Довгота голосного фонематична й позначається макроном (ā, ē, ī, ō, ū), причому те саме написане без макрону слово може мати зовсім інше значення.",
            "en": {
              "text": "Vowel length is phonemic and is marked with a macron (ā, ē, ī, ō, ū), and the same word written without the macron can have a completely different meaning."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mate (помер) vs. māte (дуже боязкий)",
                "died vs. very afraid (short vs. long vowel)"
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
        "id": "tongan-methodist-christianity",
        "title": "Siasi: Lotu Fakatōputapu — B1",
        "emoji": "✝️",
        "sections": [
          {
            "type": "intro",
            "text": "Методистське й іншу протестантське християнство глибоко переплетене з тонганською монархічною й суспільною ідентичністю: девіз держави 'Ko e ʻOtua mo Tonga ko hoku Tofiʻa' ('Бог і Тонга — моя спадщина') прямо об'єднує релігію й національність.",
            "en": {
              "text": "Methodist and other Protestant Christianity is deeply interwoven with Tongan monarchic and social identity: the national motto 'Ko e ʻOtua mo Tonga ko hoku Tofiʻa' ('God and Tonga are my inheritance') directly fuses religion and nationhood."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ko e ʻOtua mo Tonga ko hoku Tofiʻa.",
                "Бог і Тонга — моя спадщина (девіз держави)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Methodist Christianity and National Identity — B1"
      },
      {
        "id": "tongan-tattoo-tradition",
        "title": "Tātatau: Fakaʻilonga Sino — B2",
        "emoji": "🖋️",
        "sections": [
          {
            "type": "intro",
            "text": "Хоча традиційне тонганське татуювання майже зникло під впливом місіонерів XIX ст., сучасне культурне відродження повертає геометричні візерунки, спільні за походженням із самоанською традицією татуювання pe'a.",
            "en": {
              "text": "Though traditional Tongan tattooing nearly disappeared under 19th-century missionary influence, a modern cultural revival is reviving the geometric patterns, sharing a common origin with the Samoan pe'a tattoo tradition."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "tātatau fakaonopooni",
                "сучасне відроджене татуювання"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Tongan Tattoo Tradition Revival — B2"
      },
      {
        "id": "coordinating-conjunctions-extra",
        "title": "Ngaahi Fakahoko Kehe — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Частка koeʻuhí ('тому що') і сполучник ka ('однак') розширюють базовий набір mo/pe/ka, додаючи причинові й протиставні зв'язки.",
            "en": {
              "text": "The particle koeʻuhí ('because') and the connector ka ('however') extend the basic mo/pe/ka set, adding causal and contrastive links."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ʻOku ou nofo ʻi ʻapi, koeʻuhí ʻoku ʻuha.",
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
        "title": "Veape Taʻemaʻu: ʻAlu → Ō — B2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово ʻalu ('іти') утворює множинну форму зовсім іншим коренем ō, а не звичайною зміною чи редуплікацією, — супплетивна пара, спільна риса з іншими полінезійськими мовами.",
            "en": {
              "text": "The verb ʻalu ('to go') forms its plural with an entirely different root ō, rather than an ordinary change or reduplication — a suppletive pair, a shared trait with other Polynesian languages."
            }
          },
          {
            "type": "table",
            "title": "Супплетивна множина дієслова",
            "rows": [
              [
                "ʻalu (іде, одн.) → ō (ідуть, мн., не *ʻaluʻalu)",
                "goes (singular) → go (plural, suppletive)"
              ]
            ],
            "en": {
              "title": "Suppletive Verb Plural"
            }
          }
        ],
        "titleEn": "Irregular Verb Plural: ʻalu → ō — B2"
      },
      {
        "id": "irregular-royal-vocabulary-gap",
        "title": "Lea Fakaʻeiki: Taʻefaʻa Faʻo — B2",
        "emoji": "👑",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька дуже базових дієслів (зокрема 'спати', 'їсти', 'померти') не мають прогнозованого шанобливого відповідника, а вживають повністю окремий, історично не пов'язаний корінь для мовлення про короля, — виняток, що вивчається окремо.",
            "en": {
              "text": "A handful of very basic verbs (including 'sleep', 'eat', 'die') have no predictable honorific counterpart, using an entirely separate, historically unrelated root when speaking of the king — an exception learned individually."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярна шаноблива форма",
            "rows": [
              [
                "mohe (спати, звичайне) → tofá (спати, про короля)",
                "sleep (ordinary) → sleep (royal register, unrelated root)"
              ]
            ],
            "en": {
              "title": "Irregular Royal Register"
            }
          }
        ],
        "titleEn": "Irregular Royal-Register Gap — B2"
      },
      {
        "id": "irregular-comparative-lelei",
        "title": "Fehoanaki Taʻemaʻu: Lelei → Sai Ange — B1",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник lelei ('добрий') у розмовному вжитку часто заміняється окремим словом sai ('добрий') у порівняльній формі sai ange, а не власне очікуваним lelei ange.",
            "en": {
              "text": "The adjective lelei ('good') in colloquial usage is often replaced by the separate word sai ('good') in the comparative form sai ange, rather than the expected lelei ange itself."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярне порівняння",
            "rows": [
              [
                "sai ange (розмовно) замість lelei ange",
                "better (colloquial substitution for the expected comparative)"
              ]
            ],
            "en": {
              "title": "Irregular Comparative"
            }
          }
        ],
        "titleEn": "Irregular Comparative: sai ange for lelei — B1"
      }
    ]
  }
];
