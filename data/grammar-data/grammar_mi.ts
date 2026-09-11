// Vymova — data/grammar-data/grammar_mi.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_MI: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Kupu Whakakapi — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У мові маорі, як і в самоанській та гавайській, розрізняють \"ми без вас\" (matou) і \"ми з вами\" (tatou).",
            "en": {
              "text": "Māori, like Samoan and Hawaiian, distinguishes \"we without you\" (matou) from \"we with you\" (tatou)."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ahau"
              ],
              [
                "ти",
                "koe"
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
                "koutou"
              ],
              [
                "вони",
                "ratou"
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
        "id": "rerenga-orokati",
        "title": "Ngā Oro Konohi: Whā, Ng — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від гавайської, яка втратила майже половину приголосних, маорі зберегла ширший приголосний склад — окремі звуки wh (близький до 'ф') і ng (носовий 'нг'), яких немає в спрощеній гавайській системі.",
            "en": {
              "text": "Unlike Hawaiian, which lost nearly half its consonants, Māori retained a broader consonant inventory — the distinct sounds wh (close to 'f') and ng (a nasal 'ng'), absent from Hawaiian's simplified system."
            }
          },
          {
            "type": "table",
            "title": "Приклади звуків",
            "rows": [
              [
                "whare (дім, звук wh)",
                "wh, відсутній у гавайській"
              ],
              [
                "ngahere (ліс, звук ng)",
                "ng, відсутній у гавайській"
              ]
            ],
            "en": {
              "title": "Sound Examples"
            }
          }
        ],
        "titleEn": "Consonants: whā, ng — A1"
      },
      {
        "id": "rite-tia-passiv",
        "title": "Te Rite -tia — B1",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний суфікс (-tia та понад десяток інших варіантів) — центральна, обов'язкова риса маорійської граматики, яку слід уживати в наказах до предмета й у багатьох підрядних реченнях, тоді як у гавайській цей суфікс менш вживаний.",
            "en": {
              "text": "The passive suffix (-tia and over a dozen other variants) is a central, obligatory feature of Māori grammar, required in commands directed at an object and in many subordinate clauses — far less pervasive in Hawaiian."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Horoia te pereti!",
                "Помий тарілку! (буквально 'нехай тарілку буде помито')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Passive Suffix -tia — B1"
      },
      {
        "id": "kohanga-reo",
        "title": "Kōhanga Reo — A2",
        "emoji": "🌱",
        "sections": [
          {
            "type": "intro",
            "text": "Рух Kōhanga Reo ('мовне гніздо'), заснований 1982 року, — дошкільні заклади повного занурення в мову маорі, що врятували мову від зникнення й стали моделлю для відродження мов по всьому світу.",
            "en": {
              "text": "The Kōhanga Reo ('language nest') movement, founded in 1982, is a network of Māori-immersion preschools that rescued the language from extinction and became a model for language revitalization worldwide."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "I whakaturia ngā Kōhanga Reo tuatahi i te tau 1982.",
                "Перші мовні гнізда заснували 1982 року."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Kōhanga Reo Movement — A2"
      },
      {
        "id": "negasion-i-preguntas",
        "title": "Te Whakakāhore me Ngā Pātai — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється часткою kāore перед реченням; питання без питального слова передаються лише висхідною інтонацією, без окремого маркера.",
            "en": {
              "text": "Negation is formed with the particle kāore before the clause; yes/no questions are marked with rising intonation alone, with no separate marker."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kāore au e mōhio.",
                "Я не знаю."
              ],
              [
                "Kei te haere koe?",
                "Ти йдеш?"
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
        "id": "present-kei-te",
        "title": "Kei te: Ināianei — A1",
        "emoji": "☀️",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішня тривала дія позначається часткою kei te перед дієсловом — найпоширеніша форма для опису того, що відбувається просто зараз.",
            "en": {
              "text": "The present continuous is marked with the particle kei te before the verb — the most common form for describing what's happening right now."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kei te mahi ahau.",
                "Я саме працюю."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Kei te: Present Continuous — A1"
      },
      {
        "id": "past-i",
        "title": "I: Te Wā Kua Pahure — A2",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Простий минулий час позначається часткою i перед дієсловом — базова форма для завершеної дії в минулому.",
            "en": {
              "text": "The simple past is marked with the particle i before the verb — the basic form for a completed past action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "I haere ahau ki te tāone.",
                "Я ходив до міста."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "I: Simple Past — A2"
      },
      {
        "id": "perfect-kua",
        "title": "Kua: Kua Oti — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Частка kua позначає завершену дію, результат якої актуальний зараз, — 'уже зроблено', з наголосом на теперішньому наслідку, а не на самому моменті події.",
            "en": {
              "text": "The particle kua marks a completed action whose result is relevant now — 'already done', with the emphasis on the present consequence rather than the moment of the event itself."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kua oti taku mahi.",
                "Моя робота вже закінчена."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Kua: Perfect Aspect — B1"
      },
      {
        "id": "future-ka",
        "title": "Ka: Ā Muri Ake — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Частка ka перед дієсловом позначає майбутню дію, а в оповіді часто вживається для послідовних подій, незалежно від справжнього часу, — подвійна функція.",
            "en": {
              "text": "The particle ka before the verb marks a future action, and in narration is often used for a sequence of events regardless of actual tense — a dual function."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ka haere ahau āpōpō.",
                "Я піду завтра."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ka: Future Tense — A2"
      },
      {
        "id": "habitual-e-ana",
        "title": "E...Ana: Te Wā Roa — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Циркумфікс e...ana навколо дієслова позначає тривалу чи звичну дію незалежно від конкретного часу — відмінна конструкція від kei te, яка прив'язана саме до теперішнього моменту.",
            "en": {
              "text": "The circumfix e...ana around the verb marks an ongoing or habitual action independent of a specific time — a distinct construction from kei te, which is tied specifically to the present moment."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "E mahi ana ia i tēnā wā.",
                "Він працював у той час."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "E...ana: Ongoing/Habitual — B1"
      },
      {
        "id": "imperative-mood",
        "title": "Te Whakahau — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Прямий наказ утворюється голим дієсловом без жодної часової частки, зазвичай з підметом, що йде одразу за дієсловом.",
            "en": {
              "text": "A direct command is formed with the bare verb and no tense particle at all, usually with the subject following right after the verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Haere koe!",
                "Іди геть!"
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
        "id": "passive-imperative",
        "title": "Te Whakahau Rite -tia — B1",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Наказ, спрямований на конкретний предмет, обов'язково вживає пасивну форму дієслова з суфіксом -tia — звичайна активна форма тут була б граматично неправильною.",
            "en": {
              "text": "A command directed at a specific object obligatorily uses the passive verb form with the -tia suffix — the plain active form would be grammatically wrong here."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Tukuna mai te pukapuka!",
                "Передай мені книгу! (пасивна форма обов'язкова)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Obligatory Passive Imperative — B1"
      },
      {
        "id": "potential-mood-e-ai",
        "title": "E Taea Ai — B2",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Здатність чи можливість виражається дієсловом taea ('можна, вдається') у поєднанні з підрядним реченням, завершеним часткою ai.",
            "en": {
              "text": "Ability or possibility is expressed with the verb taea ('to be possible, to manage') combined with a subordinate clause closed by the particle ai."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ka taea e ia te kōrero Māori.",
                "Він може говорити мовою маорі."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Potential Mood with taea...ai — B2"
      },
      {
        "id": "desiderative-hiahia",
        "title": "Hiahia ki te — A2",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Бажання виражається дієсловом hiahia ('хотіти'), поставленим перед зворотом ki te плюс дієслово, — буквально 'хотіти в бік зробити щось'.",
            "en": {
              "text": "A wish is expressed with the verb hiahia ('to want'), placed before the phrase ki te plus a verb — literally 'to want toward doing something'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kei te hiahia ahau ki te kai.",
                "Я хочу їсти."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Hiahia ki te: Desiderative — A2"
      },
      {
        "id": "prohibitive-kaua",
        "title": "Kaua e: Te Ārai — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заборона утворюється зворотом kaua e перед дієсловом — окрема заборонна частка, відмінна від звичайного заперечення kāore.",
            "en": {
              "text": "A prohibition is formed with the phrase kaua e before the verb — a dedicated prohibitive particle, distinct from ordinary negation kāore."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kaua e haere!",
                "Не йди!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Kaua e: Prohibitive — A2"
      },
      {
        "id": "conditional-mena",
        "title": "Mena: Te Āhuatanga — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовне речення вводиться сполучником mena ('якщо'), за яким слідує звичайна часова частка в підрядному й головному реченнях.",
            "en": {
              "text": "A conditional sentence is introduced with the conjunction mena ('if'), followed by the ordinary tense particle in both the subordinate and main clauses."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mena ka ua, ka noho au i te whare.",
                "Якщо піде дощ, я залишуся вдома."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Mena: Conditional — B1"
      },
      {
        "id": "narrative-past-ka",
        "title": "Ka i roto i ngā Kōrero — B2",
        "emoji": "📖",
        "sections": [
          {
            "type": "intro",
            "text": "У традиційних оповідях частка ka вживається для позначення послідовних минулих подій одна за одною, попри те, що в інших контекстах та сама частка означає майбутнє, — контекст оповіді визначає значення.",
            "en": {
              "text": "In traditional narratives the particle ka is used to mark a sequence of past events one after another, despite the same particle meaning future in other contexts — the narrative context determines the meaning."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ka tae mai ia, ka kōrero.",
                "Він прийшов, і (потім) заговорив."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Narrative ka: Sequential Past — B2"
      },
      {
        "id": "perfect-negative-kahore-ano",
        "title": "Kāhore Anō: Kāore Anō — B1",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "'Ще не' утворюється зворотом kāhore anō... (kia) — окрема конструкція, відмінна від простого заперечення kāore.",
            "en": {
              "text": "'Not yet' is formed with the phrase kāhore anō... (kia) — a distinct construction from plain negation kāore."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kāhore anō ia kia tae mai.",
                "Він ще не прийшов."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Kāhore Anō: 'Not Yet' — B1"
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
        "id": "te-nga-artikolo",
        "title": "Te, Ngā: Te Kupu Whakatau — A1",
        "emoji": "📘",
        "sections": [
          {
            "type": "intro",
            "text": "Означений артикль te вживається для однини, а його форма множини ngā — для більш ніж одного предмета, — окремі слова, а не суфікс на іменнику.",
            "en": {
              "text": "The definite article te is used for singular, and its plural form ngā for more than one item — separate words, not a suffix on the noun."
            }
          },
          {
            "type": "table",
            "title": "Приклади артикля",
            "rows": [
              [
                "te whare (дім, однина)",
                "означений артикль однини"
              ],
              [
                "ngā whare (доми, множина)",
                "означений артикль множини"
              ]
            ],
            "en": {
              "title": "Article Examples"
            }
          }
        ],
        "titleEn": "Te, Ngā: The Definite Article — A1"
      },
      {
        "id": "he-artikolo-tsy-voafaritra",
        "title": "He: Te Kupu Whakatau Kāore i Tautuhia — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Неозначений артикль he вживається для будь-якого числа й водночас слугує зв'язкою в реченнях ототожнення ('X — це Y').",
            "en": {
              "text": "The indefinite article he is used for any number and also serves as the linker in identity sentences ('X is a Y')."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "He whare tērā.",
                "Це дім."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "He: The Indefinite Article — A1"
      },
      {
        "id": "a-o-fananana",
        "title": "A me O: Ngā Momo Rangatiratanga — B1",
        "emoji": "🏠",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійність поділяється на два класи залежно від того, чи володіє власник предметом активно (клас a) чи предмет притаманний йому пасивно (клас o) — та сама поліполінезійська система, що й у гавайській, зі своїми маорійськими прикладами.",
            "en": {
              "text": "Possession splits into two classes depending on whether the possessor actively controls the item (a-class) or the item is passively inherent to them (o-class) — the same pan-Polynesian system found in Hawaiian, with its own Māori examples."
            }
          },
          {
            "type": "table",
            "title": "Клас a проти клас o",
            "rows": [
              [
                "tāku pukapuka (моя книга, клас a — контроль)",
                "активне володіння"
              ],
              [
                "tōku waka (мій човен предків, клас o — притаманність)",
                "пасивна притаманність"
              ]
            ],
            "en": {
              "title": "A-class vs. O-class"
            }
          }
        ],
        "titleEn": "A-class and O-class Possession — B1"
      },
      {
        "id": "tenei-tena-tera",
        "title": "Tēnei, Tēnā, Tērā — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Вказівні займенники мають три ступені віддаленості: tēnei ('цей, поряд зі мною'), tēnā ('той, поряд з тобою'), tērā ('он той, далеко від обох').",
            "en": {
              "text": "Demonstratives have three degrees of distance: tēnei ('this, near me'), tēnā ('that, near you'), tērā ('that over there, far from both')."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Tēnei pukapuka.",
                "Ця книга (поряд зі мною)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Demonstratives: tēnei, tēnā, tērā — A1"
      },
      {
        "id": "dual-pronoun-system",
        "title": "Ngā Kupu Whakakapi Tokorua — B1",
        "emoji": "👥",
        "sections": [
          {
            "type": "intro",
            "text": "Крім однини й множини, займенники мають окрему двоїнну форму рівно для двох осіб — māua ('ми двоє без тебе'), tāua ('ми двоє з тобою'), kōrua ('ви двоє'), rāua ('вони двоє') — категорія, втрачена в більшості мов світу.",
            "en": {
              "text": "Besides singular and plural, pronouns have a separate dual form for exactly two people — māua ('we two, excluding you'), tāua ('we two, including you'), kōrua ('you two'), rāua ('they two') — a category lost in most world languages."
            }
          },
          {
            "type": "table",
            "title": "Двоїна",
            "rows": [
              [
                "māua (ми двоє, без тебе)",
                "tāua (ми двоє, з тобою)"
              ],
              [
                "kōrua (ви двоє)",
                "rāua (вони двоє)"
              ]
            ],
            "en": {
              "title": "Dual Forms"
            }
          }
        ],
        "titleEn": "Dual Pronouns — B1"
      },
      {
        "id": "word-order-vso",
        "title": "Te Raupapa Kupu: VSO — A1",
        "emoji": "↔️",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів — дієслово-підмет-додаток, з часовою часткою на першому місці: дієслово завжди йде перед підметом, на відміну від української SVO.",
            "en": {
              "text": "The basic word order is verb-subject-object, with the tense particle in first position: the verb always precedes the subject, unlike Ukrainian's SVO."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kei te kai te tangata i te ika.",
                "Людина їсть рибу (дієслово-підмет-додаток)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Word Order: VSO — A1"
      },
      {
        "id": "numerals-cardinal",
        "title": "Ngā Tau: Tahi, Rua, Toru — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Кількісні числівники мають власні полінезійські корені; перед іменником зазвичай ставиться частка e (для 2-9) чи tahi для 'один'.",
            "en": {
              "text": "Cardinal numbers have their own Polynesian roots; before a noun they normally take the particle e (for 2-9) or tahi for 'one'."
            }
          },
          {
            "type": "table",
            "title": "Числа",
            "rows": [
              [
                "tahi, rua, toru",
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
        "id": "numerals-ordinal-tuarua",
        "title": "Ngā Tau Whakatau: Tua- — A2",
        "emoji": "🥇",
        "sections": [
          {
            "type": "intro",
            "text": "Порядкові числівники утворюються префіксом tua- плюс кількісний числівник.",
            "en": {
              "text": "Ordinal numbers are formed with the prefix tua- plus the cardinal number."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "tuatoru",
                "третій"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ordinal Numbers with tua- — A2"
      },
      {
        "id": "mpanontany",
        "title": "Ngā Pātai: Aha, Wai, Āhea — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питальні слова aha (що), wai (хто), āhea (коли), nō hea (звідки) зазвичай стоять у тій самій позиції в реченні, де було б слово, яке вони заміняють.",
            "en": {
              "text": "The question words aha (what), wai (who), āhea (when), nō hea (where from) normally stand in the same sentence position the replaced word would occupy."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ko wai tō ingoa?",
                "Як тебе звати? (буквально 'хто твоє ім'я')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Question Words: aha, wai, āhea — A1"
      },
      {
        "id": "relative-clause-ai",
        "title": "Te Rerenga Whakaū: Ai — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Відносне підрядне речення часто завершується часткою ai, яка зв'язує його з головним реченням, — не відносний займенник на початку, а маркер у кінці.",
            "en": {
              "text": "A relative clause is often closed with the particle ai, which links it to the main clause — not a relative pronoun at the start, but a marker at the end."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Koinei te whare i noho ai ia.",
                "Це той дім, де він жив."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Clauses with ai — B1"
      },
      {
        "id": "comparison-rite-atu",
        "title": "Te Whakataurite: Atu i — A2",
        "emoji": "⚖️",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняння вищого ступеня утворюється прикметником-дієсловом плюс atu i ('далі, ніж') — без окремого суфікса на прикметнику.",
            "en": {
              "text": "Comparison of superiority is formed with the stative verb/adjective plus atu i ('further than') — with no dedicated suffix on the adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "He teitei ake ia i a au.",
                "Він вищий за мене."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparison with atu i — A2"
      },
      {
        "id": "superlative-rawa-atu",
        "title": "Te Whakataurite Nui Rawa: Rawa Atu — B1",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь додає слова rawa atu ('найбільше з усього') після прикметника-дієслова.",
            "en": {
              "text": "The superlative adds the words rawa atu ('the most of all') after the stative verb/adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "He teitei rawa atu ia.",
                "Він найвищий."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Superlative with rawa atu — B1"
      },
      {
        "id": "reduplication-plurality-intensity",
        "title": "Te Tuarua o Ngā Kupu — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Подвоєння частини кореня може позначати множинність учасників дії чи підсилення значення прикметника — та сама граматична стратегія, різні функції залежно від контексту.",
            "en": {
              "text": "Reduplicating part of the root can mark plurality of participants in an action or intensify an adjective's meaning — the same grammatical strategy, different functions depending on context."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "haere-haere (тинятися, ходити туди-сюди)",
                "подвоєння підкреслює повторюваність"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reduplication for Plurality/Intensity — B1"
      },
      {
        "id": "tohuto-macron-length",
        "title": "Te Tohutō: Te Roa o te Oro — A2",
        "emoji": "✍️",
        "sections": [
          {
            "type": "intro",
            "text": "Макрон (tohutō) над голосною позначає її довготу — довгий і короткий голосний часто розрізняють цілком різні слова, тож пропуск макрона змінює зміст.",
            "en": {
              "text": "The macron (tohutō) over a vowel marks its length — a long and short vowel often distinguish completely different words, so omitting the macron changes the meaning."
            }
          },
          {
            "type": "table",
            "title": "Приклад довготи",
            "rows": [
              [
                "keke (пекти, короткі голосні) vs kēkē (пахва, довгі голосні)",
                "макрон розрізняє слова"
              ]
            ],
            "en": {
              "title": "Length Example"
            }
          }
        ],
        "titleEn": "The Macron (Tohutō) for Vowel Length — A2"
      },
      {
        "id": "stative-verbs",
        "title": "Ngā Kupu Āhua Hei Kupu Mahi — A2",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники поводяться як окремий клас стативних дієслів — самі є присудком речення й можуть приймати ту саму часову частку kei te чи ka.",
            "en": {
              "text": "Adjectives behave as a distinct class of stative verbs — they themselves serve as the predicate and can take the same tense particle kei te or ka."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "He nui te whare.",
                "Дім великий (буквально 'великий дім')."
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
        "id": "nominalization-tanga",
        "title": "-Tanga: Te Whakaputa Ingoa — B1",
        "emoji": "📘",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -tanga перетворює дієслово на абстрактний іменник, що позначає саму дію чи її результат.",
            "en": {
              "text": "The suffix -tanga turns a verb into an abstract noun denoting the action itself or its result."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ako (навчатися) → akoranga (навчання)",
                "дієслово → абстрактний іменник"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "-tanga: Verb-to-Noun Nominalization — B1"
      },
      {
        "id": "agent-nominalization-kai",
        "title": "Kai-: Te Kaimahi — B1",
        "emoji": "👤",
        "sections": [
          {
            "type": "intro",
            "text": "Префікс kai- утворює іменник-діяч, що позначає того, хто регулярно виконує дію, — паралель до українського суфікса '-ач/-ач(ка)'.",
            "en": {
              "text": "The prefix kai- forms an agent noun denoting one who regularly performs the action — a parallel to the Ukrainian '-er/-or' agent suffix."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mahi (працювати) → kaimahi (працівник)",
                "дієслово → діяч"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Kai-: Agent Nominalization — B1"
      },
      {
        "id": "directional-particles-mai-atu",
        "title": "Mai, Atu: Te Ahunga — A2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Дейктичні частки mai ('сюди, до мовця') і atu ('туди, від мовця') додаються до дієслова руху, вказуючи напрямок відносно того, хто говорить.",
            "en": {
              "text": "The deictic particles mai ('hither, toward the speaker') and atu ('thither, away from the speaker') attach to a motion verb, indicating direction relative to the speaker."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Haere mai!",
                "Ласкаво просимо! (буквально 'йди сюди')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Directional Particles: mai, atu — A2"
      },
      {
        "id": "locative-particles-ki-kei-i",
        "title": "Ki, Kei, I: Ngā Kupu Wāhi — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Прийменник ki позначає напрямок руху, kei — місце перебування зараз, i — минуле місцезнаходження чи джерело, — три різні прийменники там, де українська обходиться прийменником 'в/на' плюс контекст.",
            "en": {
              "text": "The preposition ki marks the direction of movement, kei the current location, i a past location or source — three different prepositions where Ukrainian gets by with 'in/at' plus context."
            }
          },
          {
            "type": "table",
            "title": "Три просторові прийменники",
            "rows": [
              [
                "ki te tāone (до міста, напрямок)",
                "kei te tāone (у місті зараз, місце)"
              ],
              [
                "i te tāone (був у місті, минуле)",
                "джерело чи минуле розташування"
              ]
            ],
            "en": {
              "title": "Three Spatial Prepositions"
            }
          }
        ],
        "titleEn": "Ki, Kei, I: Locative Prepositions — A2"
      },
      {
        "id": "possessive-suffix-ku-u",
        "title": "-Ku, -U: Ngā Whakapiri Whanaungatanga — B1",
        "emoji": "👪",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька термінів спорідненості приєднують присвійний суфікс безпосередньо до кореня, а не вживають окреме присвійне слово перед іменником.",
            "en": {
              "text": "A few kinship terms attach a possessive suffix directly to the root, rather than using a separate possessive word before the noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "matua + ku → matuaku (застаріла форма 'мій батько')",
                "суфіксальна присвійність"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Possessive Suffixes on Kinship Terms — B1"
      },
      {
        "id": "vocative-particle-e",
        "title": "E: Te Karanga — A2",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Кличну частку e ставлять перед ім'ям чи титулом при прямому звертанні — обов'язковий маркер, що сигналізує саме звертання, а не просто згадку про особу.",
            "en": {
              "text": "The vocative particle e is placed before a name or title in direct address — an obligatory marker signaling that the person is being addressed, not merely mentioned."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "E Hine!",
                "Гей, Гіне!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "E: The Vocative Particle — A2"
      },
      {
        "id": "emphatic-particle-ano",
        "title": "Anō: Te Whakakaha — B1",
        "emoji": "💯",
        "sections": [
          {
            "type": "intro",
            "text": "Частка anō, додана після дієслова чи прикметника, підсилює значення чи позначає повторення дії — 'знову, справді' — залежно від контексту.",
            "en": {
              "text": "The particle anō, added after a verb or adjective, intensifies the meaning or marks the repetition of an action — 'again, indeed' — depending on context."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kōrero anō!",
                "Скажи ще раз!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Anō: The Emphatic Particle — B1"
      },
      {
        "id": "plural-marker-nga-deeper",
        "title": "Ngā me Ngā Ingoa Nui — B1",
        "emoji": "➕",
        "sections": [
          {
            "type": "intro",
            "text": "Артикль ngā може вживатися і з незліченними чи збірними іменниками, надаючи їм значення 'усі, скільки їх є', а не буквальної числової множини.",
            "en": {
              "text": "The article ngā can also be used with uncountable or collective nouns, giving them the meaning 'all of it/them there is', rather than a literal numeric plural."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ngā wai (усі води, збірне значення)",
                "збірна, не буквально numeric множина"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ngā with Collective Nouns — B1"
      },
      {
        "id": "compound-word-formation",
        "title": "Te Whakahiato Kupu — B2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Складні слова поєднують два корені в одне ціле, часто описуючи предмет через його функцію чи зовнішній вигляд.",
            "en": {
              "text": "Compound words join two roots into one unit, often describing an item through its function or appearance."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "whare (дім) + kura (навчання) → wharekura (середня школа)",
                "приклад складного слова"
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
        "id": "negative-existential-kaore-he",
        "title": "Kāore He: Kāore He Mea — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечне існування утворюється зворотом kāore he ('немає жодного') плюс іменник.",
            "en": {
              "text": "Negative existence is formed with the phrase kāore he ('there is no') plus a noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kāore he wai.",
                "Немає води."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Kāore He: Negative Existence — A2"
      },
      {
        "id": "passive-suffix-allomorphy",
        "title": "Ngā Momo -tia: Neke Atu i te Tekau — B2",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний суфікс має понад десять різних форм (-a, -ia, -hia, -kia, -mia, -na, -ngia, -ria, -tia, -whia), і котра саме форма пасує кожному дієслову, слід просто запам'ятати — жодне фонетичне правило не передбачає вибір повністю.",
            "en": {
              "text": "The passive suffix has over ten different forms (-a, -ia, -hia, -kia, -mia, -na, -ngia, -ria, -tia, -whia), and which exact form fits each verb simply has to be memorized — no phonetic rule fully predicts the choice."
            }
          },
          {
            "type": "table",
            "title": "Приклади варіантів",
            "rows": [
              [
                "horoi → horoia (мити → бути помитим)",
                "варіант -ia"
              ],
              [
                "patu → patua (бити → бути побитим)",
                "варіант -a"
              ]
            ],
            "en": {
              "title": "Variant Examples"
            }
          }
        ],
        "titleEn": "Passive Suffix Allomorphy — B2"
      },
      {
        "id": "passive-agent-phrase-e",
        "title": "Te Kaimahi i te Rite: E — B1",
        "emoji": "👤",
        "sections": [
          {
            "type": "intro",
            "text": "У пасивній конструкції виконавець дії, якщо його взагалі згадують, вводиться прийменником e — та сама частка, що й у наказовому способі, тут виконує зовсім іншу функцію.",
            "en": {
              "text": "In a passive construction, the doer of the action, when mentioned at all, is introduced with the preposition e — the same particle used in the imperative here performs an entirely different function."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "I horoia te pereti e ia.",
                "Тарілку було помито ним."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Passive Agent Marked with e — B1"
      },
      {
        "id": "whaikorero-oratory-register",
        "title": "Te Whaikōrero: Te Reo Ōkawa — B2",
        "emoji": "🎙️",
        "sections": [
          {
            "type": "intro",
            "text": "Формальна ораторська промова на marae (традиційному зібранні) дотримується власних усталених риторичних формул, ритму й лексики, суттєво відмінних від повсякденного мовлення.",
            "en": {
              "text": "Formal oratory on the marae (traditional meeting ground) follows its own established rhetorical formulas, rhythm, and vocabulary, substantially different from everyday speech."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Специфічні риторичні формули відкривають і закривають промову на marae.",
                "формальний ораторський регістр"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Whaikōrero: Formal Oratory Register — B2"
      },
      {
        "id": "haka-performance-language",
        "title": "Te Reo o te Haka — B2",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Мова хаки поєднує наказовий спосіб, повторення й архаїчну лексику в ритмізовану формулу — граматична структура, підпорядкована ритму й колективному виконанню, а не звичайному синтаксису розмови.",
            "en": {
              "text": "Haka language combines the imperative, repetition, and archaic vocabulary into a rhythmic formula — a grammatical structure subordinated to rhythm and collective performance rather than ordinary conversational syntax."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Повторювані накази й архаїчні слова структурують текст хаки.",
                "ритмізована формула хаки"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Haka: Performance Language — B2"
      },
      {
        "id": "karakia-fixed-formulas",
        "title": "Te Karakia: Ngā Kupu Tapu — B2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Ритуальні заклики (karakia) уживають застиглі, часто архаїчні граматичні звороти, що передаються дослівно з покоління в покоління, без граматичної адаптації до сучасної мови.",
            "en": {
              "text": "Ritual chants (karakia) use fixed, often archaic grammatical phrasing passed down verbatim from generation to generation, with no grammatical adaptation to the modern language."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Формули karakia зберігають архаїчну структуру, незмінну поколіннями.",
                "застигла ритуальна формула"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Karakia: Fixed Ritual Formulas — B2"
      },
      {
        "id": "waiata-archaic-preservation",
        "title": "Te Waiata: Ngā Kupu o Mua — B2",
        "emoji": "🎶",
        "sections": [
          {
            "type": "intro",
            "text": "Традиційні пісні (waiata) зберігають архаїчні граматичні форми й лексику, вже вийшлу з ужитку в повсякденній мові, — мовна капсула часу, що передається разом з мелодією.",
            "en": {
              "text": "Traditional songs (waiata) preserve archaic grammatical forms and vocabulary already out of use in everyday language — a linguistic time capsule passed down together with the melody."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Архаїчні форми, збережені лише в текстах waiata.",
                "мовна капсула часу"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Waiata: Archaic Forms in Song — B2"
      },
      {
        "id": "ngai-tahu-southern-dialect",
        "title": "Ngāi Tahu: Te K mō te Ng — B2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "У південному діалекті Нгаі Тагу звук ng регулярно замінюється на k — Kāi Tahu замість Ngāi Tahu, kā замість ngā, — систематичне діалектне чергування, а не помилка вимови.",
            "en": {
              "text": "In the southern Ngāi Tahu dialect the sound ng is regularly replaced with k — Kāi Tahu instead of Ngāi Tahu, kā instead of ngā — a systematic dialectal correspondence, not a pronunciation mistake."
            }
          },
          {
            "type": "table",
            "title": "Приклад чергування",
            "rows": [
              [
                "ngā (північний стандарт) → kā (Кай Таху, південний)",
                "систематичне ng → k"
              ]
            ],
            "en": {
              "title": "Correspondence Example"
            }
          }
        ],
        "titleEn": "Ngāi Tahu: The ng-to-k Dialect Shift — B2"
      },
      {
        "id": "waitangi-tribunal-language-act",
        "title": "Te Ture Reo Māori 1987 — B2",
        "emoji": "🏛️",
        "sections": [
          {
            "type": "intro",
            "text": "Закон про мову маорі 1987 року, ухвалений після позову WAI 11 до трибуналу Вайтангі, зробив маорі офіційною мовою Нової Зеландії — юридичне визнання, здобуте через формальну судову скаргу на загрозу зникнення мови.",
            "en": {
              "text": "The Māori Language Act of 1987, passed after the WAI 11 claim to the Waitangi Tribunal, made Māori an official language of New Zealand — legal recognition won through a formal legal complaint about the language's endangerment."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "I whakamanahia te reo Māori hei reo whaimana i te tau 1987.",
                "Мову маорі офіційно визнали 1987 року."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The 1987 Māori Language Act — B2"
      },
      {
        "id": "code-switching-english-maori-urban",
        "title": "Te Whakauru Reo Pākehā — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "У міському мовленні молоді типове перемикання кодів усередині одного речення — граматичний каркас маорійський, а частина лексики чи цілі фрази вставляються з англійської без адаптації.",
            "en": {
              "text": "Urban youth speech typically code-switches within a single sentence — the grammatical frame is Māori, while chunks of vocabulary or whole phrases are inserted from English without adaptation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kei te ako ahau i te school.",
                "Я вчуся в школі (English school вставлене напряму)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "English-Māori Code-Switching — B2"
      },
      {
        "id": "tapu-noa-register",
        "title": "Te Tapu me te Noa — B2",
        "emoji": "⚡",
        "sections": [
          {
            "type": "intro",
            "text": "Окремий шар лексики й мовних заборон стосується речей, священних (tapu) чи буденних (noa) — вибір слова відображає не лише ввічливість, а й духовно-культурний статус предмета розмови.",
            "en": {
              "text": "A separate layer of vocabulary and speech taboos concerns things that are sacred (tapu) or ordinary (noa) — word choice reflects not just politeness but the spiritual-cultural status of the topic."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Певні слова уникають у буденній мові через їхню священну природу.",
                "лексичний шар tapu"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Tapu and Noa Vocabulary Register — B2"
      },
      {
        "id": "whakatauki-proverb-structure",
        "title": "Te Whakataukī: Te Hanganga — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Прислів'я (whakataukī) мають власну стислу, часто паралельну граматичну структуру з двома врівноваженими частинами — форма, що полегшує запам'ятовування й усну передачу.",
            "en": {
              "text": "Proverbs (whakataukī) have their own concise, often parallel grammatical structure with two balanced parts — a form that aids memorization and oral transmission."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "He aha te mea nui o te ao? He tangata, he tangata, he tangata.",
                "Що найважливіше у світі? Люди, люди, люди."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Whakataukī: Proverb Structure — B2"
      },
      {
        "id": "ai-particle-multifunction",
        "title": "Ai: Toru Ngā Mahi — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Частка ai виконує три різні функції — завершує відносне підрядне речення, позначає звичну дію в минулому, і вводить речення мети — розрізняються лише за синтаксичною позицією й контекстом.",
            "en": {
              "text": "The particle ai performs three different functions — it closes a relative clause, marks a habitual past action, and introduces a purpose clause — distinguished only by syntactic position and context."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "I haere ia ki reira ki te kite ai i a ia. (мета)",
                "Він пішов туди, щоб побачити його."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ai: Three Functions — B2"
      },
      {
        "id": "passive-indirectness-politeness",
        "title": "Te Rite Hei Whakangāwari — B2",
        "emoji": "🤐",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивна конструкція часто обирається замість активної саме для того, щоб змістити увагу з виконавця дії на сам предмет, — мовна звичка непрямого, ввічливого висловлювання, вкорінена в маорійському мовному етикеті.",
            "en": {
              "text": "The passive construction is often chosen over the active precisely to shift attention away from the doer of the action toward the item itself — a habit of indirect, polite expression rooted in Māori speech etiquette."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "I pakarutia te ipu. (не хто зробив, а що сталося)",
                "Горщик розбився (без наголосу на винуватцеві)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Passive for Politeness/Indirectness — B2"
      },
      {
        "id": "reduplication-lexical-shift",
        "title": "Te Tuarua Hei Whakarerekē Tikanga — B2",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "У деяких словах подвоєння вже не позначає ні множинності, ні інтенсивності, а повністю змінює лексичне значення — подвоєна форма існує як самостійне слово з власним значенням.",
            "en": {
              "text": "In some words, reduplication no longer marks plurality or intensity at all, but completely changes the lexical meaning — the reduplicated form exists as an independent word with its own meaning."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "wera (гарячий) vs weraweta (комаха на кшталт цвіркуна, не 'дуже гарячий')",
                "подвоєння з новим, непов'язаним значенням"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reduplication with a Shifted Lexical Meaning — B2"
      },
      {
        "id": "possessive-alienable-inalienable-a-o-depth",
        "title": "A me O: Te Hōhonutanga — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Вибір між класом a й класом o не завжди інтуїтивний: діти, чоловіки/дружини й транспортні засоби потрапляють у клас a (контрольовані), тоді як батьки, частини тіла й дах над головою — у клас o (притаманні), навіть коли логіка контролю здається зворотною.",
            "en": {
              "text": "The choice between a-class and o-class isn't always intuitive: children, spouses, and vehicles fall into the a-class (controlled), while parents, body parts, and one's dwelling fall into the o-class (inherent), even when the control logic seems reversed."
            }
          },
          {
            "type": "table",
            "title": "Нелогічні приклади",
            "rows": [
              [
                "tāku tama (мій син, клас a)",
                "дитина — 'контрольована'"
              ],
              [
                "tōku matua (мій батько, клас o)",
                "батько — 'притаманний', не контрольований"
              ]
            ],
            "en": {
              "title": "Counterintuitive Examples"
            }
          }
        ],
        "titleEn": "A/O Class: The Fine Print — B2"
      },
      {
        "id": "compound-verb-serial",
        "title": "Ngā Kupu Mahi Whakahiato — B2",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Два дієслова можуть стояти поряд без сполучника, описуючи одну складену подію, — перше дієслово описує спосіб, друге — основну дію.",
            "en": {
              "text": "Two verbs can stand next to each other with no conjunction, describing one compound event — the first verb describes the manner, the second the main action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Oma atu!",
                "Тікай бігом! (біжи-геть, два дієслова разом)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Serial-Like Verb Combinations — B2"
      },
      {
        "id": "emphatic-topic-fronting-ko",
        "title": "Ko: Te Whakatau Tuatahi — B1",
        "emoji": "🔝",
        "sections": [
          {
            "type": "intro",
            "text": "Частка ko перед іменником у реченні ототожнення означає 'саме X є Y' — стандартна конструкція для представлення чи ідентифікації когось або чогось.",
            "en": {
              "text": "The particle ko before a noun in an identity sentence means 'X specifically is Y' — the standard construction for introducing or identifying someone or something."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ko Hēmi tōku ingoa.",
                "Мене звати Гемі (буквально 'саме Гемі є моє ім'я')."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ko: Identity/Topic Marker — B1"
      },
      {
        "id": "numeral-classifiers-tokotoru",
        "title": "Toko-: Te Tatau i te Tangata — B1",
        "emoji": "👥",
        "sections": [
          {
            "type": "intro",
            "text": "Лічба людей вживає особливий префікс toko- перед числівником, відмінний від звичайної лічби предметів, — класифікаторна риса саме для осіб.",
            "en": {
              "text": "Counting people uses the special prefix toko- before the number, distinct from ordinary object counting — a classifier feature specifically for persons."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "tokotoru (троє людей)",
                "toko- + toru, класифікатор для осіб"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Toko-: Person Classifier for Counting — B1"
      },
      {
        "id": "time-word-order-clause-final",
        "title": "Ngā Kupu Wā: Te Tūnga Whakamutunga — B1",
        "emoji": "🕐",
        "sections": [
          {
            "type": "intro",
            "text": "Часові вирази (āpōpō 'завтра', inanahi 'учора') зазвичай стоять у кінці речення, а не на початку, як в українській.",
            "en": {
              "text": "Time expressions (āpōpō 'tomorrow', inanahi 'yesterday') normally stand at the end of the sentence, not at the beginning as in Ukrainian."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "I haere ahau ki te tāone inanahi.",
                "Учора я ходив до міста."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Time Words at Clause End — B1"
      },
      {
        "id": "address-terms-whanau-hierarchy",
        "title": "Ngā Kupu Karanga o te Whānau — B2",
        "emoji": "👪",
        "sections": [
          {
            "type": "intro",
            "text": "Терміни спорідненості часто заміняють особові займенники в розмові, відображаючи структуру whānau (розширеної родини) й відносний вік, а не лише кровний зв'язок.",
            "en": {
              "text": "Kinship terms often replace personal pronouns in conversation, reflecting whānau (extended family) structure and relative age, not just blood relation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "E koro, kei te pēhea koe?",
                "Дідусю, як ти?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Kinship Address Terms and Whānau Hierarchy — B2"
      },
      {
        "id": "loanword-adaptation-phonology",
        "title": "Ngā Kupu Nō Tāwāhi: Te Urutau — B1",
        "emoji": "🔧",
        "sections": [
          {
            "type": "intro",
            "text": "Слова, запозичені з англійської, обов'язково адаптуються до маорійської складової структури — кожен приголосний завершується голосним, а звуки, відсутні в мові, замінюються на найближчі наявні.",
            "en": {
              "text": "Words borrowed from English are obligatorily adapted to Māori syllable structure — every consonant is followed by a vowel, and sounds absent from the language are replaced with the closest available ones."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "pukapuka (книга) — з англ. book, адаптоване до складової структури",
                "фонологічно адаптоване запозичення"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Phonological Adaptation of Loanwords — B1"
      },
      {
        "id": "macron-orthography-history",
        "title": "Te Hītori o te Tohutō — B2",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Систематичне вживання макрона в друкованих текстах стандартизувалося лише в другій половині ХХ століття — до того довгі голосні часто взагалі не позначалися на письмі.",
            "en": {
              "text": "The systematic use of the macron in printed texts was only standardized in the second half of the 20th century — before that, long vowels were often not marked in writing at all."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Стандартизація тохуто відбулася відносно нещодавно в історії письмової маорі.",
                "історія орфографічної реформи"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "History of Macron Standardization — B2"
      },
      {
        "id": "double-negative-emphasis-rawa",
        "title": "Kāore Rawa: Te Whakakaha o te Whakakāhore — B1",
        "emoji": "❌",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення підсилюється словом rawa ('зовсім') одразу після kāore — 'зовсім не, ніскілечки не', сильніше за просте kāore.",
            "en": {
              "text": "Negation is intensified with the word rawa ('entirely') right after kāore — 'not at all, not in the slightest', stronger than plain kāore."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kāore rawa ahau e mōhio.",
                "Я взагалі нічого не знаю."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Emphatic Negation with kāore rawa — B1"
      },
      {
        "id": "relative-time-clauses-i-te-wa",
        "title": "I Te Wā I...: Te Rerenga Wā — B1",
        "emoji": "⏱️",
        "sections": [
          {
            "type": "intro",
            "text": "Часове підрядне речення вводиться зворотом i te wā i... ('у той час, коли...'), за яким слідує звичайна часова частка минулого часу.",
            "en": {
              "text": "A temporal clause is introduced with the phrase i te wā i... ('at the time when...'), followed by the ordinary past-tense particle."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "I te wā i tae mai ai ia, kua kai kē mātou.",
                "Коли він прийшов, ми вже поїли."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Temporal Clauses with i te wā i... — B1"
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
        "title": "Ngā Kupu Mahi Kāore i te Whai i te Tikanga — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька частовживаних дієслів (haere 'йти', tae 'прибувати') мають особливості в поєднанні з частками часу чи напрямку, що не виводяться регулярно з очікуваного зразка.",
            "en": {
              "text": "A few common verbs (haere 'to go', tae 'to arrive') have quirks in combination with tense or directional particles that can't be regularly derived from the expected pattern."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "haere mai (не 'haere atu mai', зрощена форма)",
                "нерегулярне поєднання руху й напрямку"
              ]
            ]
          }
        ],
        "titleEn": "Irregular Common Verbs — B1"
      },
      {
        "id": "irregular-passive-suffix-assignment",
        "title": "Ngā Rite Kāore i te Whai i te Tikanga — B2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька дієслів мають пасивну форму, яку неможливо передбачити навіть приблизно з фонетичного вигляду кореня, — цю форму слід просто запам'ятати окремо для кожного слова.",
            "en": {
              "text": "A few verbs have a passive form that can't be predicted even approximately from the root's phonetic shape — this form simply has to be memorized separately for each word."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "kite (бачити) → kitea (побачений, не за очікуваним зразком)",
                "непередбачувана форма пасиву"
              ]
            ]
          }
        ],
        "titleEn": "Unpredictable Passive Suffix Assignment — B2"
      },
      {
        "id": "fixed-whakatauki-archaic-forms",
        "title": "Ngā Whakataukī me Ngā Kupu o Mua — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька відомих прислів'їв зберігають архаїчну граматичну структуру чи лексику, вже втрачену в живій мові, і вживаються цілими блоками без граматичного розбору.",
            "en": {
              "text": "A few well-known proverbs preserve archaic grammatical structure or vocabulary already lost from the living language, and are used as whole blocks with no grammatical analysis."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "E kore e piri te uku ki te rino.",
                "Глина не пристане до заліза (застигла приказка з архаїчною лексикою)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Fixed Archaic Forms in Whakataukī — B2"
      }
    ]
  }
];
