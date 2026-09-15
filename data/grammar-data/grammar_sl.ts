// Vymova — data/grammar-data/grammar_sl.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_SL: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Osebni zaimki — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Крім однини й множини, словенська зберегла ще й двоїну — окрему форму для рівно двох осіб (напр. \"midva\" — \"ми двоє\").",
            "en": {
              "text": "Besides singular and plural, Slovenian also kept the dual number — a separate form for exactly two people (e.g. \"midva\" — \"we two\")."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники (однина/множина)",
            "rows": [
              [
                "я",
                "jaz"
              ],
              [
                "ти",
                "ti"
              ],
              [
                "він / вона / воно",
                "on / ona / ono"
              ],
              [
                "ми",
                "mi"
              ],
              [
                "ви",
                "vi"
              ],
              [
                "вони (ч./ж./с.р.)",
                "oni / one / ona"
              ]
            ],
            "en": {
              "title": "Personal Pronouns (singular/plural)"
            }
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      },
      {
        "id": "six-case-dual-multiplication",
        "title": "Šest Sklonov: Ednina, Dvojina, Množina — B1",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Словенська має шість відмінків, і кожен із них має три числа — однину, двоїну й множину, тож повна відмінкова парадигма іменника втричі більша, ніж у мовах без двоїни.",
            "en": {
              "text": "Slovenian has six grammatical cases, and each of them has three numbers — singular, dual, and plural — so a noun's full case paradigm is three times larger than in languages without a dual."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mesto / mesti / mesta (місто, одн./дв./мн.)",
                "city (singular/dual/plural)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Six Cases × Three Numbers — B1"
      },
      {
        "id": "supine-verb-form",
        "title": "Namenilnik: Supin — B2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Словенська унікально серед більшості слов'янських мов зберегла супін — окрему форму дієслова (коротшу за інфінітив), що вживається лише після дієслів руху для вираження мети.",
            "en": {
              "text": "Slovenian uniquely among most Slavic languages retains the supine — a distinct verb form (shorter than the infinitive) used only after verbs of motion to express purpose."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Grem spat. (супін) vs. Хочу spati. (інфінітив)",
                "I'm going to sleep (supine) vs. I want to sleep (infinitive)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Supine — B2"
      },
      {
        "id": "dialectal-fragmentation",
        "title": "Narečja: Sedem Skupin — B2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Словенська має надзвичайно високу діалектну роздробленість для такої малої країни — сім основних діалектних груп і близько 50 піддіалектів, тож мовці з протилежних кінців країни часто ледве розуміють одне одного без літературної мови.",
            "en": {
              "text": "Slovenian has extraordinarily high dialectal fragmentation for such a small country — seven main dialect groups and around 50 sub-dialects, so speakers from opposite ends of the country often barely understand each other without the standard language."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "prekmursko, primorsko, gorenjsko, ...",
                "прекмурське, приморське, горенське та інші наріччя"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Dialectal Fragmentation — B2"
      },
      {
        "id": "pitch-accent-tonal",
        "title": "Tonemski Naglas — B2",
        "emoji": "🎵",
        "sections": [
          {
            "type": "intro",
            "text": "У деяких говірках і в літературній вимові словенська зберігає тонічний наголос (висхідний/низхідний тон), успадкований із праслов'янської, — риса, втрачена в більшості інших слов'янських мов.",
            "en": {
              "text": "In some dialects and in the standard pronunciation, Slovenian retains pitch accent (rising/falling tone), inherited from Proto-Slavic — a feature lost in most other Slavic languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kȍst (кістка, короткий) vs. kóst (архаїчний варіант, довгий)",
                "bone (short vs. long/toned vowel)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Pitch Accent — B2"
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
        "id": "present-tense",
        "title": "Sedanjik — A1",
        "emoji": "☀️",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній час утворюється особовими закінченнями, доданими до основи дієслова, і має окремі форми для однини, двоїни й множини для кожної особи.",
            "en": {
              "text": "The present tense is formed with person endings added to the verb stem, with separate forms for singular, dual, and plural for each person."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Govorim slovensko.",
                "Я говорю словенською."
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
        "id": "past-tense-l-participle",
        "title": "Preteklik: L-Deležnik — A2",
        "emoji": "⏪",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий час утворюється дієприкметником на -l (узгодженим за родом і числом) плюс допоміжне дієслово biti ('бути') у теперішньому часі.",
            "en": {
              "text": "The past tense is formed with the l-participle (agreeing in gender and number) plus the auxiliary biti ('to be') in the present tense."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Govoril sem slovensko.",
                "Я говорив словенською."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Past Tense: L-Participle — A2"
      },
      {
        "id": "future-tense-bom",
        "title": "Prihodnjik: Bom — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється допоміжним дієсловом bom ('буду') плюс інфінітив, з окремими формами для однини, двоїни й множини допоміжного дієслова.",
            "en": {
              "text": "The future tense is formed with the auxiliary bom ('will be') plus the infinitive, with separate singular, dual, and plural forms of the auxiliary."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Bom govoril slovensko.",
                "Я говоритиму словенською."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Future Tense: bom — A2"
      },
      {
        "id": "imperfect-literary",
        "title": "Nedovršni Preteklik: Knjižni — C1",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Синтетичний імперфект, успадкований прямо з праслов'янської, майже повністю зник з усної мови й зберігся лише в архаїчних і поетичних текстах.",
            "en": {
              "text": "The synthetic imperfect, inherited directly from Proto-Slavic, has almost entirely disappeared from spoken usage and survives only in archaic and poetic texts."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "govorjah (архаїчний імперфект)",
                "I was speaking (archaic literary imperfect)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Literary Imperfect — C1"
      },
      {
        "id": "aorist-literary",
        "title": "Aorist: Knjižni — C1",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Синтетичний аорист, як і імперфект, зник з усного мовлення й трапляється лише в архаїчній поезії та фольклорних текстах.",
            "en": {
              "text": "The synthetic aorist, like the imperfect, has vanished from spoken usage and appears only in archaic poetry and folkloric texts."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "govorih (архаїчний аорист)",
                "I spoke (archaic literary aorist)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Literary Aorist — C1"
      },
      {
        "id": "pluperfect",
        "title": "Predpreteklik — B1",
        "emoji": "⏮️",
        "sections": [
          {
            "type": "intro",
            "text": "Плюсквамперфект утворюється дієприкметником на -l плюс допоміжне дієслово biti в минулому часі, позначаючи дію, завершену до іншої минулої події.",
            "en": {
              "text": "The pluperfect is formed with the l-participle plus the auxiliary biti in the past tense, marking an action completed before another past event."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Bil sem govoril.",
                "Я вже був поговорив."
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
        "id": "conditional-mood",
        "title": "Pogojnik — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб утворюється дієприкметником на -l плюс частка bi, незмінна для всіх осіб і чисел.",
            "en": {
              "text": "The conditional mood is formed with the l-participle plus the particle bi, unchanged for all persons and numbers."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Govoril bi slovensko.",
                "Я б говорив словенською."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional Mood — B1"
      },
      {
        "id": "imperative-mood",
        "title": "Velelnik — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб має окремі закінчення для однини, двоїни й множини, узгоджені з особою, до якої звертаються.",
            "en": {
              "text": "The imperative has separate endings for singular, dual, and plural, agreeing with the person being addressed."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Govori! / Govorita! / Govorite!",
                "Говори! / Говоріть удвох! / Говоріть!"
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
        "id": "infinitive-form",
        "title": "Nedoločnik — A1",
        "emoji": "📖",
        "sections": [
          {
            "type": "intro",
            "text": "Інфінітив (словникова форма дієслова) закінчується на -ti чи -či, і саме ця форма подається в словниках.",
            "en": {
              "text": "The infinitive (dictionary form of the verb) ends in -ti or -či, and this is the form listed in dictionaries."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "govoriti",
                "говорити (інфінітив)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Infinitive — A1"
      },
      {
        "id": "supine-motion",
        "title": "Namenilnik: Po Gibanju — B2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Після дієслів руху (йти, бігти, їхати) вживається супін — коротша форма, ніж інфінітив, без кінцевого -i, спеціально позначаючи мету руху.",
            "en": {
              "text": "After verbs of motion (go, run, drive), the supine is used — a shorter form than the infinitive, without the final -i, specifically marking the purpose of the motion."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Grem spat.",
                "Я йду спати (супін, не *spati)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Supine After Motion Verbs — B2"
      },
      {
        "id": "passive-se-reflexive",
        "title": "Trpnik: Se — B1",
        "emoji": "📥",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний стан часто передається зворотною часткою se, доданою до дієслова, замість аналітичної конструкції з допоміжним дієсловом і дієприкметником.",
            "en": {
              "text": "The passive voice is often expressed with the reflexive particle se added to the verb, instead of the analytic construction with an auxiliary and participle."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "To se dela tako.",
                "Це робиться так."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Passive: se — B1"
      },
      {
        "id": "passive-participle-analytic",
        "title": "Trpnik: Analitični — B2",
        "emoji": "📥",
        "sections": [
          {
            "type": "intro",
            "text": "Аналітичний пасив утворюється допоміжним дієсловом biti плюс пасивний дієприкметник на -n/-t, узгоджений із підметом за родом і числом.",
            "en": {
              "text": "The analytic passive is formed with the auxiliary biti plus the passive participle in -n/-t, agreeing with the subject in gender and number."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Hiša je bila zgrajena.",
                "Будинок був побудований."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Analytic Passive — B2"
      },
      {
        "id": "present-active-participle",
        "title": "Deležnik na -č — B2",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Активний дієприкметник теперішнього часу утворюється суфіксом -č, доданим до основи, і вживається як прикметник, що описує дію в процесі.",
            "en": {
              "text": "The present active participle is formed with the suffix -č added to the stem, and is used as an adjective describing an ongoing action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "goreča hiša",
                "будинок, що горить"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Active Participle: -č — B2"
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
        "id": "nominative-genitive-case",
        "title": "Imenovalnik in Rodilnik — A2",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Називний відмінок позначає підмет, а родовий — належність і, з певними дієсловами, прямий додаток, особливо в заперечних реченнях.",
            "en": {
              "text": "The nominative marks the subject, while the genitive marks possession and, with certain verbs, the direct object, especially in negative sentences."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "hiša / hiše",
                "дім (називний/родовий)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Nominative and Genitive Case — A2"
      },
      {
        "id": "dative-accusative-case",
        "title": "Dajalnik in Tožilnik — A2",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Давальний відмінок позначає непрямий додаток ('кому'), а знахідний — прямий додаток ('кого/що').",
            "en": {
              "text": "The dative marks the indirect object ('to whom'), and the accusative marks the direct object ('whom/what')."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Dam knjigo prijatelju.",
                "Я даю книгу другові."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Dative and Accusative Case — A2"
      },
      {
        "id": "locative-instrumental-case",
        "title": "Mestnik in Orodnik — B1",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Місцевий відмінок уживається лише з прийменником і позначає місце, а орудний позначає засіб чи інструмент дії.",
            "en": {
              "text": "The locative is used only with a preposition and marks location, while the instrumental marks the means or instrument of an action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "v hiši (в домі) / z nožem (ножем)",
                "in the house / with a knife"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Locative and Instrumental Case — B1"
      },
      {
        "id": "negation-genitive",
        "title": "Zanikanje: Rodilnik — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "У заперечних реченнях прямий додаток переходить із знахідного в родовий відмінок, — риса, успадкована з праслов'янської й спільна з іншими слов'янськими мовами.",
            "en": {
              "text": "In negative sentences, the direct object shifts from the accusative to the genitive case — a feature inherited from Proto-Slavic and shared with other Slavic languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nimam knjige. (родовий, не *knjigo)",
                "I don't have a book (genitive, not accusative)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation Triggers the Genitive — B1"
      },
      {
        "id": "dual-agreement-two",
        "title": "Dvojina po Številu Dva — B1",
        "emoji": "2️⃣",
        "sections": [
          {
            "type": "intro",
            "text": "Числівник dva ('два') обов'язково вимагає форми двоїни іменника, прикметника й дієслова, а не множини, — на відміну від інших числівників.",
            "en": {
              "text": "The numeral dva ('two') obligatorily requires the dual form of the noun, adjective, and verb, not the plural — unlike other numerals."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "dva prijatelja (двоїна, не *prijatelji)",
                "two friends (dual, not plural)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Dual Agreement with 'Two' — B1"
      },
      {
        "id": "adjective-agreement",
        "title": "Pridevnik: Ujemanje — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники узгоджуються з іменником у роді, числі й відмінку через власну систему закінчень.",
            "en": {
              "text": "Adjectives agree with the noun in gender, number, and case through their own system of endings."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "dober prijatelj / dobra prijateljica",
                "хороший друг / хороша подруга"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adjective Agreement — A2"
      },
      {
        "id": "aspect-perfective-imperfective",
        "title": "Vid: Dovršni in Nedovršni — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Кожне дієслово має доконаний або недоконаний вид, часто утворений парою окремих дієслів чи префіксом, — граматична категорія виду, а не часу.",
            "en": {
              "text": "Every verb has perfective or imperfective aspect, often formed as a separate verb pair or with a prefix — a grammatical category of aspect, not tense."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "delati (недок.) / narediti (док.)",
                "to do (imperfective) / to do (perfective)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Aspect: Perfective vs. Imperfective — B1"
      },
      {
        "id": "reflexive-verbs-se",
        "title": "Povratni Glagoli: Se — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотні дієслова вживаються з незмінною часткою se, поставленою після дієслова, незалежно від особи чи числа підмета.",
            "en": {
              "text": "Reflexive verbs are used with the invariable particle se, placed after the verb, regardless of the subject's person or number."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Umivam se.",
                "Я вмиваюся."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reflexive Verbs: se — B1"
      },
      {
        "id": "demonstratives",
        "title": "Kazalni Zaimki — A2",
        "emoji": "👉",
        "sections": [
          {
            "type": "table",
            "title": "Вказівні займенники",
            "rows": [
              [
                "цей",
                "ta"
              ],
              [
                "той",
                "oni"
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
        "title": "Vprašalnice — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "хто",
                "kdo"
              ],
              [
                "що",
                "kaj"
              ],
              [
                "де",
                "kje"
              ],
              [
                "коли",
                "kdaj"
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
        "id": "possessive-adjectives",
        "title": "Svojilni Pridevniki — A2",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійність часто передається окремим прикметником, утвореним від власника суфіксом -ov/-in, а не родовим відмінком, — типово для західнослов'янського й південнослов'янського ареалу.",
            "en": {
              "text": "Possession is often expressed with a dedicated adjective formed from the possessor's name with the suffix -ov/-in, rather than the genitive case — typical of the West and South Slavic area."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Markova knjiga",
                "Марків книга"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Possessive Adjectives: -ov / -in — A2"
      },
      {
        "id": "comparative-degree",
        "title": "Primernik — B1",
        "emoji": "📊",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняльний ступінь утворюється суфіксом -ši/-jši, доданим до основи прикметника, а об'єкт порівняння вводиться прийменником od.",
            "en": {
              "text": "The comparative degree is formed with the suffix -ši/-jši added to the adjective stem, with the compared object introduced by the preposition od."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "večji od tega",
                "більший за це"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparative: -ši / -jši — B1"
      },
      {
        "id": "superlative-degree",
        "title": "Presežnik: Naj- — B1",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь порівняння утворюється префіксом naj-, доданим до порівняльної форми прикметника.",
            "en": {
              "text": "The superlative is formed with the prefix naj- added to the comparative form of the adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "največji",
                "найбільший"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Superlative: naj- — B1"
      },
      {
        "id": "cardinal-numbers",
        "title": "Števniki: 1-10 — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "table",
            "title": "Числа 1-10",
            "rows": [
              [
                "1",
                "ena/en"
              ],
              [
                "2",
                "dva"
              ],
              [
                "3",
                "trije"
              ],
              [
                "5",
                "pet"
              ],
              [
                "10",
                "deset"
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
        "id": "word-order-flexible",
        "title": "Besedni Red: Prost — B1",
        "emoji": "📝",
        "sections": [
          {
            "type": "intro",
            "text": "Порядок слів досить вільний завдяки повній відмінковій системі; базовий SVO часто змінюється для наголосу, а нове/важливе слово ставиться в кінець речення.",
            "en": {
              "text": "Word order is fairly free thanks to the full case system; the basic SVO order often shifts for emphasis, with new or important information placed at the end of the sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Knjigo berem. (наголос на 'книгу')",
                "It's the book I'm reading (emphasis on 'book')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Flexible Word Order — B1"
      },
      {
        "id": "diminutive-suffix",
        "title": "Manjšalnica: -ek/-ica — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувально-пестлива форма утворюється продуктивними суфіксами -ek (ч.р.) чи -ica (ж.р.), уживаними надзвичайно часто в побутовому мовленні.",
            "en": {
              "text": "The diminutive is formed with the highly productive suffixes -ek (masculine) or -ica (feminine), used extremely frequently in everyday speech."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "hiša → hišica",
                "дім → будиночок"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Diminutive: -ek / -ica — B1"
      },
      {
        "id": "conjunctions",
        "title": "Vezniki — A1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники",
            "rows": [
              [
                "і",
                "in"
              ],
              [
                "або",
                "ali"
              ],
              [
                "але",
                "ampak"
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
        "id": "relative-pronoun-ki",
        "title": "Oziralni Zaimek: Ki — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Означальні (відносні) підрядні речення вводяться незмінним відносним займенником ki ('що/який'), доповненим клітичним займенником у потрібному відмінку, якщо треба.",
            "en": {
              "text": "Relative clauses are introduced by the invariable relative pronoun ki ('who/which'), supplemented by a clitic pronoun in the needed case when required."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "moški, ki govori",
                "чоловік, що говорить"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Pronoun: ki — B1"
      },
      {
        "id": "clitic-pronoun-order",
        "title": "Naslonke: Vrstni Red — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Ненаголошені займенники-клітики (mi, ga, se) завжди стоять у другій позиції речення, у фіксованому взаємному порядку, незалежно від того, яке слово стоїть на першому місці.",
            "en": {
              "text": "Unstressed clitic pronouns (mi, ga, se) always occupy the second position of the sentence, in a fixed mutual order, regardless of which word comes first."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Videl sem ga.",
                "Я бачив його."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Clitic Pronoun Ordering — B2"
      },
      {
        "id": "vocative-remnant",
        "title": "Ostanki Vokativa — B2",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Хоча самостійний кличний відмінок майже зник, кілька архаїчних вигуків і імен зберегли його форму в застиглому вигляді, особливо в релігійному та поетичному мовленні.",
            "en": {
              "text": "Though a fully independent vocative case has almost vanished, a handful of archaic exclamations and names preserve its form in fossilized use, especially in religious and poetic speech."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Bože! (архаїчний кличний)",
                "O God! (archaic vocative remnant)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Vocative Remnants — B2"
      },
      {
        "id": "adjective-before-noun",
        "title": "Vrstni Red Pridevnika — A1",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник завжди стоїть перед іменником, який він означає.",
            "en": {
              "text": "The adjective always precedes the noun it modifies."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "velika hiša",
                "великий дім"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adjective Before Noun — A1"
      },
      {
        "id": "prepositions-case-governing",
        "title": "Predlogi in Skloni — B1",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Кожен прийменник керує певним відмінком (або двома, з різним значенням), тож той самий прийменник може вимагати різного відмінка залежно від значення руху чи стану.",
            "en": {
              "text": "Each preposition governs a specific case (or two, with different meanings), so the same preposition can require a different case depending on whether it means motion or state."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "v hiši (стан, місцевий) / v hišo (рух, знахідний)",
                "in the house (state, locative) / into the house (motion, accusative)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Prepositions and Case Government — B1"
      },
      {
        "id": "reduplication-intensity",
        "title": "Podvajanje: Poudarek — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Повторення прислівника чи частки підсилює значення в розмовному мовленні, передаючи інтенсивність без окремого підсилювального слова.",
            "en": {
              "text": "Repeating an adverb or particle intensifies its meaning in colloquial speech, conveying emphasis without a separate intensifying word."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "počasi počasi",
                "дуже повільно (букв. 'повільно-повільно')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reduplication for Emphasis — B1"
      },
      {
        "id": "vowel-r-syllabic",
        "title": "Zlogotvorni R — B2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Приголосний r може виконувати роль голосного в складі, коли стоїть між двома приголосними, — так само, як у сербській чи хорватській, — не потребуючи жодного голосного поруч.",
            "en": {
              "text": "The consonant r can function as a syllable nucleus when it stands between two consonants — just as in Serbian or Croatian — with no vowel needed beside it."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "vrt (сад, без голосного між v і rt)",
                "garden (r functions as the vowel of the syllable)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Syllabic r — B2"
      },
      {
        "id": "existential-negation-ni",
        "title": "Zanikanje Obstoja: Ni — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення наявності передається безособовою формою ni ('немає') з родовим відмінком, незалежно від роду й числа відсутнього предмета.",
            "en": {
              "text": "Negating existence is expressed with the impersonal form ni ('there is not') with the genitive case, regardless of the gender or number of the absent thing."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ni denarja.",
                "Немає грошей."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Existential Negation: ni — B1"
      },
      {
        "id": "resian-isolated-dialect",
        "title": "Rezijansko Narečje — C1",
        "emoji": "🏔️",
        "sections": [
          {
            "type": "intro",
            "text": "Резіянська говірка, якою розмовляють у долині Резія в Італії, розвивалася ізольовано від решти словенської мовної території майже тисячу років і має власну писемну традицію та навіть окрему абетку.",
            "en": {
              "text": "The Resian dialect, spoken in the Resia Valley in Italy, developed in isolation from the rest of the Slovenian-speaking territory for almost a thousand years and has its own written tradition and even a distinct alphabet."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Rozajanski Alfabet",
                "Резіянська абетка (окрема від стандартної словенської)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Isolated Resian Dialect — C1"
      },
      {
        "id": "prekmurje-hungarian-contact",
        "title": "Prekmursko Narečje: Madžarski Vpliv — B2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Прекмурська говірка, історично відділена від решти словенської території угорським правлінням, мала власну літературну традицію та стандарт до XX ст., з помітним угорським лексичним впливом.",
            "en": {
              "text": "The Prekmurje dialect, historically separated from the rest of Slovenian territory by Hungarian rule, had its own literary tradition and standard until the 20th century, with noticeable Hungarian lexical influence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Prekmurska pesmarica (прекмурський збірник пісень)",
                "Prekmurje songbook (its own literary standard)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Prekmurje Dialect and Hungarian Influence — B2"
      },
      {
        "id": "trubar-first-book",
        "title": "Primož Trubar: Prva Knjiga — B2",
        "emoji": "📖",
        "sections": [
          {
            "type": "intro",
            "text": "Примож Трубар видав 1550 року перші друковані книги словенською мовою під час протестантської Реформації, заклавши основу стандартизованої писемної словенської.",
            "en": {
              "text": "Primož Trubar published the first printed books in Slovenian in 1550 during the Protestant Reformation, laying the foundation for standardized written Slovenian."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Katekizem (1550, перша словенська книга)",
                "Catechism (1550, the first Slovenian book)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Primož Trubar and the First Slovenian Book — B2"
      },
      {
        "id": "preseren-national-poet",
        "title": "France Prešeren — B1",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Франце Прешерен — національний поет, чий вірш 'Здравлиця' став текстом словенського гімну, а День культури (8 лютого) відзначають у день його смерті.",
            "en": {
              "text": "France Prešeren is the national poet whose poem 'Zdravljica' became the text of the Slovenian anthem, and Culture Day (February 8) is observed on the anniversary of his death."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Zdravljica (гімн Словенії)",
                "Zdravljica (Slovenia's national anthem)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "France Prešeren, the National Poet — B1"
      },
      {
        "id": "triglav-mountain-symbolism",
        "title": "Triglav: Simbol Naroda — B1",
        "emoji": "⛰️",
        "sections": [
          {
            "type": "intro",
            "text": "Тригле́в, найвища гора Словенії, зображена на прапорі й гербі країни — символ національної ідентичності настільки сильний, що кожен словенець вважає за обов'язок хоча б раз піднятися на її вершину.",
            "en": {
              "text": "Triglav, Slovenia's highest mountain, appears on the national flag and coat of arms — a symbol of national identity so strong that every Slovenian is expected to climb it at least once."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Triglav (Тригле́в, гора на прапорі)",
                "Triglav (the mountain on the flag)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Triglav: Mountain Symbol of the Nation — B1"
      },
      {
        "id": "karst-terminology-origin",
        "title": "Kras: Izvor Izraza — B2",
        "emoji": "🪨",
        "sections": [
          {
            "type": "intro",
            "text": "Сам геологічний термін 'карст' (тип вапнякового ландшафту з печерами) походить від словенської назви регіону Крас, де це явище вперше було науково описано.",
            "en": {
              "text": "The geological term 'karst' (a type of limestone landscape with caves) itself derives from the Slovenian name of the Kras region, where the phenomenon was first scientifically described."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kras (регіон, звідки походить термін 'карст')",
                "Kras (the region the term 'karst' comes from)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Karst: The Term's Slovenian Origin — B2"
      },
      {
        "id": "lipizzaner-horses",
        "title": "Lipicanci — B1",
        "emoji": "🐎",
        "sections": [
          {
            "type": "intro",
            "text": "Ліпіцанська порода коней виведена в селі Ліпіца в регіоні Крас із XVI ст. і досі вважається одним із найшляхетніших символів словенської культурної спадщини.",
            "en": {
              "text": "The Lipizzaner horse breed was developed in the village of Lipica in the Kras region starting in the 16th century, and is still considered one of the noblest symbols of Slovenian cultural heritage."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Lipica (село, звідки походить порода)",
                "Lipica (the village the breed is named after)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Lipizzaner Horses — B1"
      },
      {
        "id": "kozolec-architecture",
        "title": "Kozolec: Arhitektura — B1",
        "emoji": "🏚️",
        "sections": [
          {
            "type": "intro",
            "text": "Козолец — традиційна дерев'яна конструкція для сушіння сіна й зерна, унікальна для словенської сільської архітектури й настільки впізнавана, що вважається національним архітектурним символом.",
            "en": {
              "text": "The kozolec is a traditional wooden hay- and grain-drying rack, unique to Slovenian rural architecture and so recognizable it is considered a national architectural symbol."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kozolec na Gorenjskem",
                "козолец на Горенському"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Kozolec Hay Rack — B1"
      },
      {
        "id": "potica-traditional-food",
        "title": "Potica — A2",
        "emoji": "🍞",
        "sections": [
          {
            "type": "intro",
            "text": "Потіца — традиційний рулет із горіховою чи медовою начинкою, обов'язкова страва на Різдво й Великдень, з десятками регіональних варіантів начинки.",
            "en": {
              "text": "Potica is a traditional rolled pastry with a walnut or honey filling, an obligatory dish for Christmas and Easter, with dozens of regional filling variants."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "orehova potica (горіхова потіца)",
                "walnut potica"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Potica: Traditional Rolled Pastry — A2"
      },
      {
        "id": "colors",
        "title": "Barve — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "table",
            "title": "Кольори",
            "rows": [
              [
                "червоний",
                "rdeč"
              ],
              [
                "чорний",
                "črn"
              ],
              [
                "білий",
                "bel"
              ],
              [
                "зелений",
                "zelen"
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
        "title": "Števniki: Deset — A2",
        "emoji": "🔟",
        "sections": [
          {
            "type": "table",
            "title": "Десятки",
            "rows": [
              [
                "20",
                "dvajset"
              ],
              [
                "30",
                "trideset"
              ],
              [
                "100",
                "sto"
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
        "title": "Dnevi v Tednu — A2",
        "emoji": "📅",
        "sections": [
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "понеділок",
                "ponedeljek"
              ],
              [
                "п'ятниця",
                "petek"
              ],
              [
                "неділя",
                "nedelja"
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
        "title": "Družina — A2",
        "emoji": "👪",
        "sections": [
          {
            "type": "table",
            "title": "Родина",
            "rows": [
              [
                "батько",
                "oče"
              ],
              [
                "мати",
                "mati"
              ],
              [
                "брат",
                "brat"
              ],
              [
                "сестра",
                "sestra"
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
        "title": "Pozdravi — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "table",
            "title": "Вітання",
            "rows": [
              [
                "Привіт",
                "Živjo"
              ],
              [
                "Дякую",
                "Hvala"
              ],
              [
                "До побачення",
                "Nasvidenje"
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
        "title": "Vreme — A2",
        "emoji": "☁️",
        "sections": [
          {
            "type": "table",
            "title": "Погода",
            "rows": [
              [
                "сонце",
                "sonce"
              ],
              [
                "дощ",
                "dež"
              ],
              [
                "сніг",
                "sneg"
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
        "title": "Deli Telesa — A2",
        "emoji": "🧍",
        "sections": [
          {
            "type": "table",
            "title": "Частини тіла",
            "rows": [
              [
                "голова",
                "glava"
              ],
              [
                "рука",
                "roka"
              ],
              [
                "око",
                "oko"
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
        "id": "yugoslav-independence-history",
        "title": "Osamosvojitev 1991 — B2",
        "emoji": "🇸🇮",
        "sections": [
          {
            "type": "intro",
            "text": "Словенія проголосила незалежність від Югославії 1991 року після короткої 'Десятиденної війни' — найшвидшого й найменш кривавого розпаду серед усіх колишніх югославських республік.",
            "en": {
              "text": "Slovenia declared independence from Yugoslavia in 1991 after the brief 'Ten-Day War' — the swiftest and least bloody breakup among all the former Yugoslav republics."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Deseti dnevi vojne (1991)",
                "the Ten-Day War (1991)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Independence in 1991 — B2"
      },
      {
        "id": "eu-eurozone-membership",
        "title": "Slovenija: EU in Evro — B1",
        "emoji": "🇪🇺",
        "sections": [
          {
            "type": "intro",
            "text": "Словенія першою з колишніх югославських республік вступила до ЄС (2004) і першою запровадила євро (2007), а також першою серед посткомуністичних країн головувала в Раді ЄС.",
            "en": {
              "text": "Slovenia was the first former Yugoslav republic to join the EU (2004) and the first to adopt the euro (2007), and the first post-communist country to hold the EU Council presidency."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Slovenija v EU (2004)",
                "Slovenia in the EU (2004)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "EU and Eurozone Membership — B1"
      },
      {
        "id": "clothing-vocabulary",
        "title": "Oblačila — A2",
        "emoji": "👕",
        "sections": [
          {
            "type": "table",
            "title": "Одяг",
            "rows": [
              [
                "сорочка",
                "srajca"
              ],
              [
                "взуття",
                "čevlji"
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
        "title": "Strani Neba — B1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "table",
            "title": "Сторони світу",
            "rows": [
              [
                "північ",
                "sever"
              ],
              [
                "південь",
                "jug"
              ],
              [
                "схід",
                "vzhod"
              ],
              [
                "захід",
                "zahod"
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
        "id": "postojna-caves-tourism",
        "title": "Postojnska Jama — B1",
        "emoji": "🕳️",
        "sections": [
          {
            "type": "intro",
            "text": "Постойнська печера — одна з найбільших карстових печерних систем Європи, відома завдяки унікальній печерній саламандрі протей (človeška ribica, 'людська рибка'), яка живе виключно в темряві.",
            "en": {
              "text": "Postojna Cave is one of Europe's largest karst cave systems, famous for the unique cave salamander known as the olm (človeška ribica, 'human fish'), which lives exclusively in darkness."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "človeška ribica (протей, 'людська рибка')",
                "the olm ('human fish')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Postojna Cave and the Olm — B1"
      },
      {
        "id": "animals-vocabulary",
        "title": "Živali — A2",
        "emoji": "🐻",
        "sections": [
          {
            "type": "table",
            "title": "Тварини",
            "rows": [
              [
                "ведмідь",
                "medved"
              ],
              [
                "собака",
                "pes"
              ],
              [
                "риба",
                "riba"
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
        "id": "food-culinary-vocabulary",
        "title": "Hrana — A2",
        "emoji": "🍞",
        "sections": [
          {
            "type": "table",
            "title": "Їжа",
            "rows": [
              [
                "хліб",
                "kruh"
              ],
              [
                "вода",
                "voda"
              ],
              [
                "сир",
                "sir"
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
        "id": "coordinating-conjunctions-extra",
        "title": "Nadaljnji Vezniki — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Сполучник ker ('тому що') і частка torej ('отже') розширюють базовий набір in/ali/ampak, додаючи причинові й наслідкові зв'язки.",
            "en": {
              "text": "The conjunction ker ('because') and the particle torej ('therefore') extend the basic in/ali/ampak set, adding causal and consequential links."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ostajam doma, ker dežuje.",
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
        "id": "irregular-verb-biti",
        "title": "Nepravilen Glagol: Biti — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово biti ('бути') має повністю супплетивні форми в теперішньому часі (sem, si, je...), не пов'язані з основою biti-, — типова риса для дієслова 'бути' в багатьох мовах світу.",
            "en": {
              "text": "The verb biti ('to be') has fully suppletive present-tense forms (sem, si, je...), unrelated to the biti- stem — a typical trait for the verb 'to be' across many world languages."
            }
          },
          {
            "type": "table",
            "title": "Супплетивні форми",
            "rows": [
              [
                "sem (я є) vs. biti (бути, інфінітив)",
                "am vs. to be (suppletive forms)"
              ]
            ],
            "en": {
              "title": "Suppletive Forms"
            }
          }
        ],
        "titleEn": "Irregular Verb: biti ('to be') — B1"
      },
      {
        "id": "irregular-plural-clovek",
        "title": "Nepravilna Množina: Človek → Ljudje — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Іменник človek ('людина') утворює множину від зовсім іншого кореня (ljudje), а не за регулярною моделлю додавання закінчень до основи однини.",
            "en": {
              "text": "The noun človek ('person') forms its plural from an entirely different root (ljudje), not by the regular pattern of adding endings to the singular stem."
            }
          },
          {
            "type": "table",
            "title": "Супплетивна множина",
            "rows": [
              [
                "človek → ljudje (не *človeki)",
                "person → people (suppletive plural)"
              ]
            ],
            "en": {
              "title": "Suppletive Plural"
            }
          }
        ],
        "titleEn": "Irregular Plural: človek → ljudje — B2"
      },
      {
        "id": "irregular-comparative-dober",
        "title": "Nepravilen Primernik: Dober → Boljši — B1",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник dober ('добрий') має супплетивний порівняльний ступінь boljši ('кращий') замість очікуваного регулярного *dobrejši.",
            "en": {
              "text": "The adjective dober ('good') has a suppletive comparative boljši ('better') instead of the expected regular *dobrejši."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярний порівняльний ступінь",
            "rows": [
              [
                "dober → boljši (не *dobrejši)",
                "good → better (suppletive)"
              ]
            ],
            "en": {
              "title": "Irregular Comparative"
            }
          }
        ],
        "titleEn": "Irregular Comparative: dober → boljši — B1"
      }
    ]
  }
];
