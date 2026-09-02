// Vymova — data/grammar-data/grammar_it.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_IT: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "essere-avere",
        "title": "Essere vs Avere — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Essere (бути) та avere (мати) — два найважливіші дієслова в італійській. Вони використовуються самостійно і як допоміжні дієслова для утворення складених часів.",
            "en": {
              "text": "Essere (to be) and avere (to have) are the two most important Italian verbs. They are used on their own and as auxiliary verbs for compound tenses."
            }
          },
          {
            "type": "formula",
            "title": "Дієвідмінювання (теперішній час)",
            "rows": [
              [
                "io",
                "sono",
                "ho"
              ],
              [
                "tu",
                "sei",
                "hai"
              ],
              [
                "lui / lei",
                "è",
                "ha"
              ],
              [
                "noi",
                "siamo",
                "abbiamo"
              ],
              [
                "voi",
                "siete",
                "avete"
              ],
              [
                "loro",
                "sono",
                "hanno"
              ]
            ]
          },
          {
            "type": "note",
            "text": "Avere вживають там, де українською кажуть \"є\" про вік чи наявність: \"ho vent'anni\" — буквально \"я маю двадцять років\".",
            "en": {
              "text": "Avere is used where Ukrainian/English say \"to be\" about age: \"ho vent'anni\" literally means \"I have twenty years\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Sono insegnante.",
                "Я вчитель."
              ],
              [
                "Ho vent'anni.",
                "Мені двадцять років."
              ],
              [
                "Siamo a Roma.",
                "Ми в Римі."
              ],
              [
                "Lei ha un gatto.",
                "У неї є кіт."
              ]
            ]
          }
        ]
      },
      {
        "id": "gender-nouns",
        "title": "Рід іменників — A1",
        "emoji": "⚥",
        "sections": [
          {
            "type": "intro",
            "text": "Усі іменники в італійській мають рід — чоловічий або жіночий. Артикль узгоджується з родом і числом іменника.",
            "en": {
              "text": "All Italian nouns have a gender — masculine or feminine. The article agrees with the noun in gender and number."
            }
          },
          {
            "type": "table",
            "title": "Типові закінчення та артиклі",
            "rows": [
              [
                "-o → чоловічий",
                "il libro (книга)",
                "i libri (книги)"
              ],
              [
                "-a → жіночий",
                "la casa (дім)",
                "le case (дома)"
              ],
              [
                "голосна на початку слова",
                "l'amico (друг)",
                "l'amica (подруга)"
              ],
              [
                "-e → чол. або жін.",
                "il padre / la madre",
                "i padri / le madri"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Il libro è interessante.",
                "Книга цікава."
              ],
              [
                "La casa è grande.",
                "Дім великий."
              ],
              [
                "I bambini giocano.",
                "Діти грають."
              ],
              [
                "Ho una mela.",
                "У мене є яблуко."
              ]
            ]
          }
        ]
      },
      {
        "id": "articles",
        "title": "Articoli Determinativi e Indeterminativi — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Означений артикль (il/lo/la/i/gli/le) вказує на конкретний предмет, неозначений (un/uno/una) — на будь-який. Форма залежить від роду, числа й першої літери наступного слова.",
            "en": {
              "text": "The definite article (il/lo/la/i/gli/le) points to a specific thing, the indefinite (un/uno/una) to any one. The form depends on gender, number, and the next word's first letter."
            }
          },
          {
            "type": "table",
            "title": "Означений артикль",
            "rows": [
              [
                "il libro / i libri",
                "чол. перед приголосною"
              ],
              [
                "lo studente / gli studenti",
                "чол. перед s+приг./z/gn/ps"
              ],
              [
                "l'amico / gli amici",
                "чол. перед голосною"
              ],
              [
                "la casa / le case",
                "жін. перед приголосною"
              ],
              [
                "l'amica / le amiche",
                "жін. перед голосною"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Il gatto dorme.",
                "Кіт спить."
              ],
              [
                "Ho un cane.",
                "У мене є пес."
              ]
            ]
          }
        ]
      },
      {
        "id": "plural-nouns",
        "title": "Plurale dei Nomi — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється зміною кінцевої голосної: -o/-e (чол.) → -i, -a (жін.) → -e.",
            "en": {
              "text": "The plural is formed by changing the final vowel: -o/-e (masc.) → -i, -a (fem.) → -e."
            }
          },
          {
            "type": "table",
            "title": "Однина → множина",
            "rows": [
              [
                "libro → libri",
                "книга → книги"
              ],
              [
                "studente → studenti",
                "студент → студенти"
              ],
              [
                "casa → case",
                "дім → доми"
              ],
              [
                "amica → amiche (+h для збереження звуку)",
                "подруга → подруги"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "I libri sono nuovi.",
                "Книги нові."
              ],
              [
                "Le case sono grandi.",
                "Доми великі."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjectives",
        "title": "Aggettivi — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник узгоджується з іменником у роді й числі та зазвичай стоїть після нього.",
            "en": {
              "text": "An adjective agrees with the noun in gender and number and usually follows it."
            }
          },
          {
            "type": "table",
            "title": "bello (гарний) — узгодження",
            "rows": [
              [
                "un ragazzo bello",
                "гарний хлопець"
              ],
              [
                "una ragazza bella",
                "гарна дівчина"
              ],
              [
                "ragazzi belli / ragazze belle",
                "гарні хлопці / дівчата"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ho una macchina rossa.",
                "У мене червона машина."
              ],
              [
                "Sono studenti intelligenti.",
                "Це розумні студенти."
              ]
            ]
          }
        ]
      },
      {
        "id": "possessives",
        "title": "Aggettivi Possessivi — A1",
        "emoji": "🙋",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійні прикметники узгоджуються з іменником, який вони визначають (а не з володарем), і зазвичай вимагають артикля.",
            "en": {
              "text": "Possessive adjectives agree with the noun they modify (not with the owner) and usually require an article."
            }
          },
          {
            "type": "table",
            "title": "il mio / la mia (мій/моя)",
            "rows": [
              [
                "il mio libro / la mia casa",
                "моя книга / мій дім"
              ],
              [
                "il tuo libro / la tua casa",
                "твоя книга / твій дім"
              ],
              [
                "il suo libro / la sua casa",
                "його/її книга / дім"
              ],
              [
                "il nostro libro",
                "наша книга"
              ]
            ]
          },
          {
            "type": "note",
            "title": "Виняток: сім'я",
            "text": "З іменниками сім'ї в однині без прикметника артикль опускається: mia madre, tuo padre (але: la mia mamma з пестливим словом).",
            "en": {
              "title": "Exception: family",
              "text": "With singular unmodified family nouns, the article is dropped: mia madre, tuo padre (but: la mia mamma with an affectionate word)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mia madre lavora qui.",
                "Моя мама тут працює."
              ],
              [
                "Il tuo telefono è nuovo.",
                "Твій телефон новий."
              ]
            ]
          }
        ]
      },
      {
        "id": "demonstratives",
        "title": "Dimostrativi (Questo/Quello) — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Questo (цей) вказує на ближче, quello (той) — на дальше. Quello поводиться як означений артикль перед іменником.",
            "en": {
              "text": "Questo (this) points to something near, quello (that) to something farther. Quello behaves like the definite article before a noun."
            }
          },
          {
            "type": "table",
            "title": "questo / quello",
            "rows": [
              [
                "questo libro / questa casa",
                "ця книга / цей дім"
              ],
              [
                "quel libro / quella casa",
                "та книга / той дім"
              ],
              [
                "quello studente / quegli studenti",
                "той студент / ті студенти"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Questo caffè è buono.",
                "Ця кава хороша."
              ],
              [
                "Quella macchina è veloce.",
                "Та машина швидка."
              ]
            ]
          }
        ]
      },
      {
        "id": "question-words",
        "title": "Parole Interrogative — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питальні слова стоять на початку речення; порядок слів зазвичай не змінюється.",
            "en": {
              "text": "Question words go at the start of the sentence; word order usually doesn't change."
            }
          },
          {
            "type": "markers",
            "title": "Питальні слова",
            "items": [
              "chi? (хто?)",
              "che cosa? (що?)",
              "dove? (де?)",
              "quando? (коли?)",
              "perché? (чому?)",
              "come? (як?)",
              "quanto? (скільки?)"
            ],
            "en": {
              "title": "Question words"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Dove abiti?",
                "Де ти живеш?"
              ],
              [
                "Come stai?",
                "Як справи?"
              ]
            ]
          }
        ]
      },
      {
        "id": "negation",
        "title": "Negazione — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється часткою non перед дієсловом. На відміну від англійської, подвійне заперечення в італійській нормальне й обов'язкове.",
            "en": {
              "text": "Negation is formed with non before the verb. Unlike English, double negation is normal and required in Italian."
            }
          },
          {
            "type": "table",
            "title": "non + дієслово",
            "rows": [
              [
                "Non capisco.",
                "Я не розумію."
              ],
              [
                "Non ho niente.",
                "У мене нічого немає. (подвійне заперечення)"
              ],
              [
                "Non viene mai.",
                "Він ніколи не приходить."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Non lo so.",
                "Я цього не знаю."
              ],
              [
                "Non c'è nessuno.",
                "Тут нікого немає."
              ]
            ]
          }
        ]
      },
      {
        "id": "reflexive-verbs",
        "title": "Verbi Riflessivi — A2",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотні дієслова мають зворотний займенник (mi/ti/si/ci/vi/si), що узгоджується з підметом і стоїть перед дієсловом.",
            "en": {
              "text": "Reflexive verbs take a reflexive pronoun (mi/ti/si/ci/vi/si) that agrees with the subject and comes before the verb."
            }
          },
          {
            "type": "formula",
            "title": "svegliarsi (прокидатися)",
            "rows": [
              [
                "✅ (+)",
                "io",
                "mi sveglio",
                "→ Mi sveglio alle 7."
              ],
              [
                "✅ (+)",
                "tu",
                "ti svegli",
                "→ Ti svegli tardi."
              ],
              [
                "✅ (+)",
                "lui/lei",
                "si sveglia",
                "→ Si sveglia presto."
              ]
            ],
            "en": {
              "title": "svegliarsi (to wake up)"
            }
          },
          {
            "type": "note",
            "title": "Складені часи",
            "text": "Зворотні дієслова у складених часах завжди вживають допоміжне essere: Mi sono svegliato/a.",
            "en": {
              "title": "Compound tenses",
              "text": "Reflexive verbs in compound tenses always take the auxiliary essere: Mi sono svegliato/a."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mi lavo le mani.",
                "Я мию руки."
              ],
              [
                "Si è alzata presto.",
                "Вона встала рано."
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "tenses",
    "title": "Часи дієслів",
    "titleEn": "Tenses",
    "emoji": "🕐",
    "rules": [
      {
        "id": "present-regular",
        "title": "Presente Indicativo (Verbi Regolari) — A1",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Правильні дієслова мають три дієвідміни: -are, -ere, -ire — кожна зі своїм набором закінчень.",
            "en": {
              "text": "Regular verbs have three conjugations: -are, -ere, -ire — each with its own set of endings."
            }
          },
          {
            "type": "table",
            "title": "parlare / vedere / dormire",
            "rows": [
              [
                "io",
                "parlo",
                "vedo / dormo"
              ],
              [
                "tu",
                "parli",
                "vedi / dormi"
              ],
              [
                "lui/lei",
                "parla",
                "vede / dorme"
              ],
              [
                "noi",
                "parliamo",
                "vediamo / dormiamo"
              ],
              [
                "voi",
                "parlate",
                "vedete / dormite"
              ],
              [
                "loro",
                "parlano",
                "vedono / dormono"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Parlo italiano.",
                "Я розмовляю італійською."
              ],
              [
                "Non capisce niente.",
                "Він/вона нічого не розуміє."
              ]
            ]
          }
        ]
      },
      {
        "id": "passato-prossimo",
        "title": "Passato Prossimo — A2",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Passato Prossimo виражає завершену минулу дію (аналог Present Perfect/Past Simple). Утворюється essere/avere в теперішньому + причастя минулого часу.",
            "en": {
              "text": "The Passato Prossimo expresses a completed past action (like Present Perfect/Past Simple). Formed with essere/avere in the present + past participle."
            }
          },
          {
            "type": "formula",
            "title": "parlare (avere) / andare (essere)",
            "rows": [
              [
                "✅ (+)",
                "io",
                "ho parlato",
                "→ Ho parlato con lui."
              ],
              [
                "✅ (+)",
                "io (essere)",
                "sono andato/a",
                "→ Sono andato a casa."
              ],
              [
                "✅ (+)",
                "lei",
                "è andata",
                "→ È andata al lavoro."
              ]
            ],
            "en": {
              "title": "parlare (avere) / andare (essere)"
            }
          },
          {
            "type": "note",
            "title": "essere vs avere",
            "text": "Дієслова руху/зміни стану (andare, venire, nascere...) і зворотні дієслова беруть essere (причастя узгоджується з підметом); більшість інших — avere.",
            "en": {
              "title": "essere vs avere",
              "text": "Motion/change-of-state verbs (andare, venire, nascere...) and reflexives take essere (participle agrees with the subject); most others take avere."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ho mangiato la pizza.",
                "Я з'їв(ла) піцу."
              ],
              [
                "Siamo arrivati tardi.",
                "Ми приїхали пізно."
              ]
            ]
          }
        ]
      },
      {
        "id": "imperfetto",
        "title": "Imperfetto — A2",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Imperfetto виражає тривалу або звичну дію в минулому (аналог used to / Past Continuous).",
            "en": {
              "text": "The Imperfetto expresses an ongoing or habitual past action (like used to / Past Continuous)."
            }
          },
          {
            "type": "formula",
            "title": "parlare → Imperfetto",
            "rows": [
              [
                "✅ (+)",
                "io",
                "parlavo",
                "→ Parlavo con lei ogni giorno."
              ],
              [
                "✅ (+)",
                "tu",
                "parlavi",
                "→ Parlavi italiano da piccolo."
              ],
              [
                "✅ (+)",
                "lui/lei",
                "parlava",
                "→ Parlava sempre di lavoro."
              ]
            ],
            "en": {
              "title": "parlare → Imperfect"
            }
          },
          {
            "type": "markers",
            "title": "Маркери часу",
            "items": [
              "ogni giorno (nel passato)",
              "sempre",
              "quando ero piccolo",
              "mentre"
            ],
            "en": {
              "title": "Time markers"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Quando ero bambino, giocavo molto.",
                "Коли я був дитиною, я багато грав(ла)."
              ]
            ]
          }
        ]
      },
      {
        "id": "futuro-semplice",
        "title": "Futuro Semplice — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Простий майбутній час утворюється особливим набором закінчень, доданих до зміненої основи інфінітива.",
            "en": {
              "text": "The simple future is formed with a distinct set of endings added to a modified infinitive stem."
            }
          },
          {
            "type": "formula",
            "title": "parlare → Futuro",
            "rows": [
              [
                "✅ (+)",
                "io",
                "parlerò",
                "→ Ti parlerò domani."
              ],
              [
                "✅ (+)",
                "tu",
                "parlerai",
                "→ Parlerai con lui?"
              ],
              [
                "✅ (+)",
                "lui/lei",
                "parlerà",
                "→ Parlerà alla riunione."
              ]
            ],
            "en": {
              "title": "parlare → Future"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Domani andrò a Roma.",
                "Завтра я поїду до Риму."
              ],
              [
                "Sarà una bella giornata.",
                "Це буде гарний день."
              ]
            ]
          }
        ]
      },
      {
        "id": "present-continuous",
        "title": "Presente Progressivo (Stare + Gerundio) — A2",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія «просто зараз» виражається stare + герундій (-ando/-endo).",
            "en": {
              "text": "An action happening right now is expressed with stare + gerund (-ando/-endo)."
            }
          },
          {
            "type": "table",
            "title": "stare + gerundio",
            "rows": [
              [
                "sto parlando",
                "я зараз говорю"
              ],
              [
                "stai mangiando",
                "ти зараз їси"
              ],
              [
                "sta dormendo",
                "він/вона зараз спить"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Sto studiando italiano.",
                "Я зараз вивчаю італійську."
              ],
              [
                "Cosa stai facendo?",
                "Що ти зараз робиш?"
              ]
            ]
          }
        ]
      },
      {
        "id": "trapassato-prossimo",
        "title": "Trapassato Prossimo — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Виражає дію, що відбулася раніше за іншу минулу подію (Past Perfect). Утворюється essere/avere в Imperfetto + причастя минулого часу.",
            "en": {
              "text": "Expresses an action that happened before another past event (Past Perfect). Formed with essere/avere in the Imperfetto + past participle."
            }
          },
          {
            "type": "formula",
            "title": "avevo/ero + participio",
            "rows": [
              [
                "✅ (+)",
                "io",
                "avevo parlato",
                "→ Avevo già mangiato."
              ],
              [
                "✅ (+)",
                "io (essere)",
                "ero andato/a",
                "→ Ero già andato via."
              ]
            ],
            "en": {
              "title": "avevo/ero + participle"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Quando sono arrivato, era già partito.",
                "Коли я прибув, він уже поїхав."
              ]
            ]
          }
        ]
      },
      {
        "id": "passato-remoto",
        "title": "Passato Remoto — B1",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Passato Remoto описує завершену минулу дію, не пов'язану з теперішнім (переважно в літературі та на півдні Італії — у розмовній мові півночі його часто замінює Passato Prossimo).",
            "en": {
              "text": "The Passato Remoto describes a completed past action with no connection to the present (mainly literary and used in southern spoken Italian — in northern speech it's often replaced by Passato Prossimo)."
            }
          },
          {
            "type": "formula",
            "title": "parlare → Passato Remoto",
            "rows": [
              [
                "✅ (+)",
                "io",
                "parlai",
                "→ Gli parlai una volta."
              ],
              [
                "✅ (+)",
                "lui/lei",
                "parlò",
                "→ Dante nacque nel 1265."
              ]
            ],
            "en": {
              "title": "parlare → Passato Remoto"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Cristoforo Colombo scoprì l'America nel 1492.",
                "Христофор Колумб відкрив Америку в 1492 році."
              ]
            ]
          }
        ]
      },
      {
        "id": "condizionale-semplice",
        "title": "Condizionale Semplice — B1",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб виражає бажання, ввічливу пропозицію або гіпотетичну дію (аналог would). Утворюється як Futuro, але з іншими закінченнями.",
            "en": {
              "text": "The conditional expresses a wish, polite suggestion, or hypothetical action (like 'would'). Formed like the Futuro but with different endings."
            }
          },
          {
            "type": "formula",
            "title": "parlare → Condizionale",
            "rows": [
              [
                "✅ (+)",
                "io",
                "parlerei",
                "→ Vorrei un caffè."
              ],
              [
                "✅ (+)",
                "tu",
                "parleresti",
                "→ Potresti aiutarmi?"
              ]
            ],
            "en": {
              "title": "parlare → Conditional"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mi piacerebbe viaggiare.",
                "Мені хотілося б подорожувати."
              ],
              [
                "Dovresti studiare di più.",
                "Тобі варто більше вчитися."
              ]
            ]
          }
        ]
      },
      {
        "id": "congiuntivo-presente",
        "title": "Congiuntivo Presente — B1",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Кон'юнктив вживають після дієслів думки, бажання, сумніву, емоції (credo che, voglio che, penso che...), коли підмети головного й підрядного речень різні.",
            "en": {
              "text": "The subjunctive is used after verbs of opinion, wish, doubt, emotion (credo che, voglio che, penso che...) when the main and subordinate subjects differ."
            }
          },
          {
            "type": "formula",
            "title": "che io parli",
            "rows": [
              [
                "✅ (+)",
                "che io",
                "parli",
                "→ Penso che parli bene."
              ],
              [
                "✅ (+)",
                "che tu",
                "parli",
                "→ Voglio che tu venga."
              ],
              [
                "✅ (+)",
                "che lui/lei",
                "parli",
                "→ Credo che sia vero."
              ]
            ],
            "en": {
              "title": "che io parli (that I speak)"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Spero che tu stia bene.",
                "Сподіваюсь, що в тебе все добре."
              ],
              [
                "Non credo che sia vero.",
                "Я не думаю, що це правда."
              ]
            ]
          }
        ]
      },
      {
        "id": "futuro-anteriore",
        "title": "Futuro Anteriore — B2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Виражає дію, яка завершиться в майбутньому до іншої майбутньої дії, або припущення про минуле. Утворюється essere/avere у Futuro + причастя.",
            "en": {
              "text": "Expresses an action that will be completed in the future before another future action, or a guess about the past. Formed with essere/avere in the Futuro + participle."
            }
          },
          {
            "type": "formula",
            "title": "avrò/sarò + participio",
            "rows": [
              [
                "✅ (+)",
                "io",
                "avrò finito",
                "→ Avrò finito entro le 5."
              ],
              [
                "✅ (+)",
                "io (essere)",
                "sarò arrivato/a",
                "→ Sarò già arrivato quando chiami."
              ]
            ],
            "en": {
              "title": "avrò/sarò + participle"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Avrà già mangiato.",
                "Він, мабуть, уже поїв. (припущення)"
              ]
            ]
          }
        ]
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
        "id": "piacere",
        "title": "Verbo Piacere — A2",
        "emoji": "❤️",
        "sections": [
          {
            "type": "intro",
            "text": "Piacere (подобатися) будується навпаки, ніж «любити»: підметом є предмет, що подобається, а особі присвоюють непрямий додаток.",
            "en": {
              "text": "Piacere (to like) is built backwards from 'to like': the subject is the thing that pleases, and the person is the indirect object."
            }
          },
          {
            "type": "table",
            "title": "mi piace / mi piacciono",
            "rows": [
              [
                "Mi piace il caffè.",
                "Мені подобається кава. (однина)"
              ],
              [
                "Mi piacciono i libri.",
                "Мені подобаються книги. (множина)"
              ],
              [
                "Ti piace la musica?",
                "Тобі подобається музика?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Non mi piace il pesce.",
                "Мені не подобається риба."
              ],
              [
                "Le piace viaggiare.",
                "Їй подобається подорожувати."
              ]
            ]
          }
        ]
      },
      {
        "id": "per-da",
        "title": "Per vs Da — B1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Per (для/протягом/через) вказує мету, тривалість, причину; da (з/від/у) — джерело, час початку дії, призначення предмета.",
            "en": {
              "text": "Per (for/through/by) marks purpose, duration, cause; da (from/since/at) marks origin, the start of an action, or a thing's purpose."
            }
          },
          {
            "type": "table",
            "title": "per / da",
            "rows": [
              [
                "Studio per l'esame.",
                "Я вчуся для іспиту."
              ],
              [
                "Vivo qui da tre anni.",
                "Я живу тут три роки. (з тих пір)"
              ],
              [
                "Vado da Marco.",
                "Я йду до Марко (додому)."
              ],
              [
                "una tazza da tè",
                "чашка для чаю (призначення)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ho aspettato per un'ora.",
                "Я чекав(ла) годину."
              ],
              [
                "Vengo da Kyiv.",
                "Я з Києва."
              ]
            ]
          }
        ]
      },
      {
        "id": "direct-object-pronouns",
        "title": "Pronomi Diretti — A2",
        "emoji": "🙋",
        "sections": [
          {
            "type": "intro",
            "text": "Прямі займенники (mi, ti, lo, la, ci, vi, li, le) заміняють прямий додаток і стоять перед дієсловом.",
            "en": {
              "text": "Direct object pronouns (mi, ti, lo, la, ci, vi, li, le) replace a direct object and go before the verb."
            }
          },
          {
            "type": "table",
            "title": "Прямі займенники",
            "rows": [
              [
                "lo vedo",
                "я його бачу"
              ],
              [
                "la vedo",
                "я її бачу"
              ],
              [
                "li vedo",
                "я їх бачу (чол.)"
              ],
              [
                "le vedo",
                "я їх бачу (жін.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Il libro? Lo leggo.",
                "Книга? Я її читаю."
              ],
              [
                "Ti amo.",
                "Я тебе люблю."
              ]
            ]
          }
        ]
      },
      {
        "id": "imperative-affirmative",
        "title": "Imperativo Affermativo — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб має свої закінчення для tu/noi/voi (форми лей формально позичають з кон'юнктива).",
            "en": {
              "text": "The imperative has its own endings for tu/noi/voi (the formal Lei form borrows from the subjunctive)."
            }
          },
          {
            "type": "formula",
            "title": "parlare — imperativo",
            "rows": [
              [
                "✅ (+)",
                "tu",
                "parla!",
                "→ Parla piano!"
              ],
              [
                "✅ (+)",
                "noi",
                "parliamo!",
                "→ Parliamo insieme!"
              ],
              [
                "✅ (+)",
                "voi",
                "parlate!",
                "→ Parlate più forte!"
              ]
            ],
            "en": {
              "title": "parlare — imperative"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Vieni qui!",
                "Іди сюди!"
              ],
              [
                "Mangiamo!",
                "Їмо!/Давай поїмо!"
              ]
            ]
          }
        ]
      },
      {
        "id": "comparatives",
        "title": "Comparativi e Superlativi — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняльний ступінь утворюється più/meno + прикметник + di/che; найвищий — il più/il meno + прикметник.",
            "en": {
              "text": "The comparative is formed with più/meno + adjective + di/che; the superlative with il più/il meno + adjective."
            }
          },
          {
            "type": "table",
            "title": "Ступені порівняння",
            "rows": [
              [
                "più alto di lui",
                "вищий за нього"
              ],
              [
                "meno caro di quello",
                "дешевший за той"
              ],
              [
                "il più intelligente della classe",
                "найрозумніший у класі"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Roma è più grande di Firenze.",
                "Рим більший за Флоренцію."
              ]
            ]
          }
        ]
      },
      {
        "id": "indirect-object-pronouns",
        "title": "Pronomi Indiretti — A2",
        "emoji": "🙋",
        "sections": [
          {
            "type": "intro",
            "text": "Непрямі займенники (mi, ti, gli, le, ci, vi, gli/loro) заміняють непрямий додаток (кому?/чому?).",
            "en": {
              "text": "Indirect object pronouns (mi, ti, gli, le, ci, vi, gli/loro) replace an indirect object (to whom?)."
            }
          },
          {
            "type": "table",
            "title": "Непрямі займенники",
            "rows": [
              [
                "gli parlo",
                "я говорю йому"
              ],
              [
                "le parlo",
                "я говорю їй"
              ],
              [
                "gli parlo (мн.)",
                "я говорю їм"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Le ho scritto una lettera.",
                "Я написав(ла) їй листа."
              ]
            ]
          }
        ]
      },
      {
        "id": "combined-pronouns",
        "title": "Pronomi Combinati (me lo, te la) — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Коли є два займенники (непрямий + прямий), непрямий змінює закінчення на -e і йде першим: mi→me, ti→te, gli/le→glie-.",
            "en": {
              "text": "When there are two pronouns (indirect + direct), the indirect one changes its ending to -e and comes first: mi→me, ti→te, gli/le→glie-."
            }
          },
          {
            "type": "table",
            "title": "Комбіновані займенники",
            "rows": [
              [
                "me lo dai?",
                "ти даси це мені?"
              ],
              [
                "te lo spiego",
                "я тобі це поясню"
              ],
              [
                "glielo dico",
                "я кажу це йому/їй"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Me lo ha regalato ieri.",
                "Він/вона подарував(ла) мені це вчора."
              ]
            ]
          }
        ]
      },
      {
        "id": "relative-pronouns",
        "title": "Pronomi Relativi (che, cui, il quale) — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Che — універсальний і незмінний (підмет/прямий додаток); cui вживають після прийменника; il quale — формальніший, узгоджується за родом/числом.",
            "en": {
              "text": "Che is universal and invariable (subject/direct object); cui is used after a preposition; il quale is more formal and agrees in gender/number."
            }
          },
          {
            "type": "table",
            "title": "che / cui / il quale",
            "rows": [
              [
                "il libro che leggo",
                "книга, яку я читаю"
              ],
              [
                "la persona a cui parlo",
                "людина, з якою я говорю"
              ],
              [
                "l'uomo il quale parla",
                "чоловік, який говорить (формально)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "La casa in cui vivo è grande.",
                "Дім, у якому я живу, великий."
              ]
            ]
          }
        ]
      },
      {
        "id": "passive-voice",
        "title": "Voce Passiva (Essere + Participio) — B1",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний стан утворюється essere + причастя минулого часу, узгоджене з підметом.",
            "en": {
              "text": "The passive voice is formed with essere + past participle, agreeing with the subject."
            }
          },
          {
            "type": "table",
            "title": "essere + participio",
            "rows": [
              [
                "Il libro è scritto da lei.",
                "Книга написана нею."
              ],
              [
                "Le porte sono chiuse.",
                "Двері зачинені."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "La casa è stata venduta.",
                "Дім було продано."
              ]
            ]
          }
        ]
      },
      {
        "id": "gerund-uses",
        "title": "Usi del Gerundio — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Герундій (-ando/-endo) описує спосіб дії або одночасну дію; окрім stare + gerundio, вживається самостійно як обставина.",
            "en": {
              "text": "The gerund (-ando/-endo) describes the manner or a simultaneous action; besides stare + gerund, it's used on its own as an adverbial."
            }
          },
          {
            "type": "table",
            "title": "-ando / -endo",
            "rows": [
              [
                "Camminando, pensavo a te.",
                "Ідучи, я думав(ла) про тебе."
              ],
              [
                "Ha imparato l'italiano guardando film.",
                "Він/вона вивчив(ла) італійську, дивлячись фільми."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Studiando, ho capito tutto.",
                "Навчаючись, я все зрозумів(ла)."
              ]
            ]
          }
        ]
      }
    ]
  }
];
