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
  },
  {
    "id": "advanced",
    "title": "Просунута граматика",
    "titleEn": "Advanced Grammar",
    "emoji": "🎯",
    "rules": [
      {
        "id": "conditional-sentences",
        "title": "Periodo Ipotetico con Se — B1",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовні речення з se мають три типи: реальний (indicativo), можливий (congiuntivo imperfetto + condizionale), нереальний минулий (congiuntivo trapassato + condizionale composto).",
            "en": {
              "text": "Conditional sentences with se have three types: real (indicative), possible (imperfect subjunctive + conditional), unreal past (pluperfect subjunctive + past conditional)."
            }
          },
          {
            "type": "table",
            "title": "Три типи",
            "rows": [
              [
                "Se piove, resto a casa.",
                "Якщо піде дощ, я залишусь удома. (реальний)"
              ],
              [
                "Se piovesse, resterei a casa.",
                "Якби пішов дощ, я залишився б удома. (можливий)"
              ],
              [
                "Se avessi saputo, sarei venuto.",
                "Якби я знав, я б прийшов. (нереальний, минулий)"
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
                "Se avessi tempo, viaggerei di più.",
                "Якби в мене був час, я б більше подорожував(ла)."
              ]
            ]
          }
        ]
      },
      {
        "id": "reported-speech",
        "title": "Discorso Indiretto — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "intro",
            "text": "У непрямій мові часи зазвичай зсуваються назад (presente → imperfetto, passato prossimo → trapassato), як і в англійській.",
            "en": {
              "text": "In reported speech, tenses usually shift back (present → imperfect, present perfect → pluperfect), similar to English."
            }
          },
          {
            "type": "table",
            "title": "Пряма → непряма мова",
            "rows": [
              [
                "\"Sono stanco\" → Ha detto che era stanco.",
                "«Я втомлений» → Він сказав, що втомлений."
              ],
              [
                "\"Verrò domani\" → Ha detto che sarebbe venuto.",
                "«Я прийду завтра» → Він сказав, що прийде."
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
                "Mi ha detto che non capiva.",
                "Він/вона сказав(ла) мені, що не розуміє."
              ]
            ]
          }
        ]
      },
      {
        "id": "indefinite-pronouns",
        "title": "Pronomi Indefiniti — A2",
        "emoji": "🔘",
        "sections": [
          {
            "type": "intro",
            "text": "Неозначені займенники вказують на невизначену особу/кількість: qualcuno (хтось), nessuno (ніхто), tutto/tutti (все/всі), ogni (кожен).",
            "en": {
              "text": "Indefinite pronouns denote an unspecified person/quantity: qualcuno (someone), nessuno (no one), tutto/tutti (all/everyone), ogni (each)."
            }
          },
          {
            "type": "table",
            "title": "Основні неозначені займенники",
            "rows": [
              [
                "qualcuno",
                "хтось"
              ],
              [
                "nessuno",
                "ніхто"
              ],
              [
                "tutti / tutto",
                "всі / все"
              ],
              [
                "ogni",
                "кожен (незмінне)"
              ],
              [
                "niente",
                "нічого"
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
                "Qualcuno ha chiamato.",
                "Хтось телефонував."
              ],
              [
                "Non c'è nessuno qui.",
                "Тут нікого немає."
              ]
            ]
          }
        ]
      },
      {
        "id": "ordinal-numbers",
        "title": "Numeri Ordinali — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Порядкові числівники узгоджуються з іменником, як прикметники; від 11-го й далі утворюються додаванням -esimo до кардинального числа.",
            "en": {
              "text": "Ordinal numbers agree with the noun like adjectives; from 11th onward they're formed by adding -esimo to the cardinal number."
            }
          },
          {
            "type": "table",
            "title": "1-й – 10-й",
            "rows": [
              [
                "primo, -a",
                "1-й"
              ],
              [
                "secondo",
                "2-й"
              ],
              [
                "terzo",
                "3-й"
              ],
              [
                "quarto ... decimo",
                "4-й ... 10-й"
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
                "Abito al terzo piano.",
                "Я живу на третьому поверсі."
              ]
            ]
          }
        ]
      },
      {
        "id": "exclamatory-sentences",
        "title": "Frasi Esclamative — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Окличні речення часто починаються з che (який/яка) або come (як).",
            "en": {
              "text": "Exclamatory sentences often start with che (what a) or come (how)."
            }
          },
          {
            "type": "table",
            "title": "che / come",
            "rows": [
              [
                "Che bella giornata!",
                "Який гарний день!"
              ],
              [
                "Come sei bravo!",
                "Який ти молодець!"
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
                "Che sorpresa!",
                "Який сюрприз!"
              ]
            ]
          }
        ]
      },
      {
        "id": "prepositions-a-in-di",
        "title": "Preposizioni A, In, Di — A2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "A (до/у), in (у/до/всередину), di (з/про) — три найуживаніші прийменники з різними, часто нелогічними вживаннями.",
            "en": {
              "text": "A (to/at), in (in/into), di (of/about) — the three most common prepositions with distinct, often non-obvious usages."
            }
          },
          {
            "type": "table",
            "title": "a / in / di",
            "rows": [
              [
                "vado a Roma",
                "я їду до Риму (місто)"
              ],
              [
                "vado in Italia",
                "я їду до Італії (країна)"
              ],
              [
                "parlo di te",
                "я говорю про тебе"
              ],
              [
                "il libro di Maria",
                "книга Марії"
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
                "Sono a casa.",
                "Я вдома."
              ],
              [
                "Vivo in Francia.",
                "Я живу у Франції."
              ]
            ]
          }
        ]
      },
      {
        "id": "diminutives",
        "title": "Alterati (-ino/-etto/-one) — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Змінені форми слів надають значення «маленький» (-ino/-etto), «великий» (-one) або пестливий/зневажливий відтінок (-uccio/-accio).",
            "en": {
              "text": "Altered word forms add a 'small' (-ino/-etto), 'big' (-one), or affectionate/pejorative meaning (-uccio/-accio)."
            }
          },
          {
            "type": "table",
            "title": "Основні суфікси",
            "rows": [
              [
                "casa → casetta",
                "дім → будиночок"
              ],
              [
                "libro → libretto",
                "книга → книжечка"
              ],
              [
                "naso → nasone",
                "ніс → носяра"
              ],
              [
                "tempo → tempaccio",
                "погода → погана погода"
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
                "Che bel gattino!",
                "Яке гарне кошеня!"
              ]
            ]
          }
        ]
      },
      {
        "id": "prepositional-pronouns",
        "title": "Pronomi con Preposizione (con me, da te) — A2",
        "emoji": "🙋",
        "sections": [
          {
            "type": "intro",
            "text": "Після прийменників особові займенники мають окремі («тонічні») форми: me, te, lui, lei, noi, voi, loro.",
            "en": {
              "text": "After prepositions, personal pronouns take distinct ('stressed') forms: me, te, lui, lei, noi, voi, loro."
            }
          },
          {
            "type": "table",
            "title": "Тонічні форми",
            "rows": [
              [
                "con me / con te",
                "зі мною / з тобою"
              ],
              [
                "da lui / da lei",
                "від нього / від неї"
              ],
              [
                "per noi",
                "для нас"
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
                "Vieni con me.",
                "Ходи зі мною."
              ]
            ]
          }
        ]
      },
      {
        "id": "time-expressions",
        "title": "Da, Fa, Durante — B1",
        "emoji": "🕒",
        "sections": [
          {
            "type": "intro",
            "text": "Da (з/протягом — з теперішнім часом для дії, що триває), fa (тому — з минулим), durante (протягом — з іменником).",
            "en": {
              "text": "Da (since/for — with the present tense for an ongoing action), fa (ago — with the past), durante (during — with a noun)."
            }
          },
          {
            "type": "table",
            "title": "da / fa / durante",
            "rows": [
              [
                "Vivo qui da due anni.",
                "Я живу тут два роки (і досі)."
              ],
              [
                "Sono arrivato due anni fa.",
                "Я приїхав два роки тому."
              ],
              [
                "Durante l'estate viaggio.",
                "Влітку я подорожую."
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
                "Non lo vedo da un mese.",
                "Я не бачив(ла) його місяць."
              ]
            ]
          }
        ]
      },
      {
        "id": "ci-ne-particles",
        "title": "Particelle \"Ci\" e \"Ne\" — B2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Ci заміняє місце чи конструкцію з a/in; ne заміняє конструкцію з di/da, часто вказуючи кількість.",
            "en": {
              "text": "Ci replaces a place or a construction with a/in; ne replaces a construction with di/da, often indicating quantity."
            }
          },
          {
            "type": "table",
            "title": "ci / ne",
            "rows": [
              [
                "Vai a Roma? Sì, ci vado.",
                "Ти їдеш до Риму? Так, я туди їду."
              ],
              [
                "Quanti libri hai? Ne ho tre.",
                "Скільки в тебе книг? У мене їх три."
              ],
              [
                "Pensi al futuro? Ci penso spesso.",
                "Ти думаєш про майбутнє? Я часто про це думаю."
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
                "Non ci credo.",
                "Я в це не вірю."
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "mastery",
    "title": "Майстерність",
    "titleEn": "Mastery",
    "emoji": "🏆",
    "rules": [
      {
        "id": "congiuntivo-imperfetto",
        "title": "Congiuntivo Imperfetto — B2",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Вживається після дієслів у минулому часі, що вимагають кон'юнктива, або в нереальних умовних реченнях.",
            "en": {
              "text": "Used after past-tense verbs that require the subjunctive, or in unreal conditional sentences."
            }
          },
          {
            "type": "formula",
            "title": "che io parlassi",
            "rows": [
              [
                "✅ (+)",
                "che io",
                "parlassi",
                "→ Volevo che tu parlassi."
              ],
              [
                "✅ (+)",
                "che lui/lei",
                "parlasse",
                "→ Pensavo che fosse vero."
              ]
            ],
            "en": {
              "title": "che io parlassi (that I spoke)"
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
                "Speravo che venissi.",
                "Я сподівався(лась), що ти прийдеш."
              ]
            ]
          }
        ]
      },
      {
        "id": "congiuntivo-passato",
        "title": "Congiuntivo Passato — B2",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Виражає завершену дію в реченнях, що вимагають кон'юнктива. Утворюється essere/avere у Congiuntivo Presente + причастя.",
            "en": {
              "text": "Expresses a completed action in clauses requiring the subjunctive. Formed with essere/avere in the Congiuntivo Presente + participle."
            }
          },
          {
            "type": "formula",
            "title": "che io abbia/sia + participio",
            "rows": [
              [
                "✅ (+)",
                "che io",
                "abbia parlato",
                "→ Penso che abbia già parlato."
              ],
              [
                "✅ (+)",
                "che lui",
                "sia andato",
                "→ Credo che sia già andato."
              ]
            ],
            "en": {
              "title": "che io abbia/sia + participle"
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
                "Spero che abbiate capito.",
                "Сподіваюсь, ви зрозуміли."
              ]
            ]
          }
        ]
      },
      {
        "id": "imperative-negative",
        "title": "Imperativo Negativo — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечний наказ для tu утворюється non + інфінітив (унікальна риса); для noi/voi просто додають non перед звичайною формою.",
            "en": {
              "text": "The negative imperative for tu is formed with non + infinitive (a unique feature); for noi/voi, non is simply added before the ordinary form."
            }
          },
          {
            "type": "table",
            "title": "non + infinito (tu)",
            "rows": [
              [
                "Non parlare!",
                "Не говори! (tu)"
              ],
              [
                "Non parliamo!",
                "Не будемо говорити! (noi)"
              ],
              [
                "Non parlate!",
                "Не говоріть! (voi)"
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
                "Non toccare!",
                "Не чіпай!"
              ]
            ]
          }
        ]
      },
      {
        "id": "possessive-pronouns",
        "title": "Pronomi Possessivi — B1",
        "emoji": "🙋",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійні займенники (окремо від прикметників) заміняють іменник + присвійний прикметник і зберігають артикль.",
            "en": {
              "text": "Possessive pronouns (as distinct from adjectives) replace noun + possessive adjective and keep the article."
            }
          },
          {
            "type": "table",
            "title": "il mio, il tuo...",
            "rows": [
              [
                "Questo è il mio.",
                "Це моє."
              ],
              [
                "Quella è la tua.",
                "Те твоє."
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
                "La mia macchina è rossa, la tua è blu.",
                "Моя машина червона, твоя синя."
              ]
            ]
          }
        ]
      },
      {
        "id": "absolute-superlative",
        "title": "Superlativo Assoluto (-issimo) — B1",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Абсолютний найвищий ступінь (дуже...) утворюється додаванням -issimo/-issima до основи прикметника без порівняння з іншими.",
            "en": {
              "text": "The absolute superlative (very...) is formed by adding -issimo/-issima to the adjective's stem, with no comparison to others."
            }
          },
          {
            "type": "table",
            "title": "-issimo",
            "rows": [
              [
                "bello → bellissimo",
                "гарний → дуже гарний"
              ],
              [
                "buono → buonissimo",
                "хороший → дуже хороший"
              ],
              [
                "felice → felicissimo",
                "щасливий → дуже щасливий"
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
                "Questo caffè è buonissimo.",
                "Ця кава дуже хороша."
              ]
            ]
          }
        ]
      },
      {
        "id": "stare-per",
        "title": "Stare Per + Infinito — A2",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Stare per + інфінітив виражає дію, що от-от станеться (аналог «to be about to»).",
            "en": {
              "text": "Stare per + infinitive expresses an action about to happen (like 'to be about to')."
            }
          },
          {
            "type": "table",
            "title": "stare per + infinito",
            "rows": [
              [
                "Sto per uscire.",
                "Я от-от вийду."
              ],
              [
                "Il treno sta per partire.",
                "Потяг от-от відправляється."
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
                "Stavo per chiamarti.",
                "Я вже збирався(лась) тобі дзвонити."
              ]
            ]
          }
        ]
      },
      {
        "id": "stare-gerundio-past",
        "title": "Stare + Gerundio al Passato — B1",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Stavo + герундій виражає дію, що тривала в момент іншої минулої події (аналог Past Continuous).",
            "en": {
              "text": "Stavo + gerund expresses an action ongoing at the moment of another past event (like Past Continuous)."
            }
          },
          {
            "type": "table",
            "title": "stavo + gerundio",
            "rows": [
              [
                "Stavo dormendo quando hai chiamato.",
                "Я спав(ла), коли ти зателефонував(ла)."
              ],
              [
                "Stava piovendo.",
                "Ішов дощ."
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
                "Stavamo mangiando quando è arrivato.",
                "Ми їли, коли він приїхав."
              ]
            ]
          }
        ]
      },
      {
        "id": "modal-verbs-past",
        "title": "Verbi Modali al Passato (Dovere/Potere/Volere) — B2",
        "emoji": "🧠",
        "sections": [
          {
            "type": "intro",
            "text": "Модальні дієслова в Passato Prossimo можуть брати essere чи avere залежно від допоміжного дієслова головного дієслова, до якого вони приєднуються.",
            "en": {
              "text": "Modal verbs in the Passato Prossimo can take essere or avere depending on the auxiliary of the main verb they attach to."
            }
          },
          {
            "type": "table",
            "title": "dovere/potere/volere + infinito",
            "rows": [
              [
                "Ho dovuto studiare.",
                "Мені довелося вчитися. (avere)"
              ],
              [
                "Sono dovuto andare.",
                "Мені довелося піти. (essere, бо andare)"
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
                "Non ho potuto venire.",
                "Я не зміг(ла) прийти."
              ]
            ]
          }
        ]
      },
      {
        "id": "obligation-verbs",
        "title": "Bisogna, Dovere, Ci Vuole — A2",
        "emoji": "☁️",
        "sections": [
          {
            "type": "intro",
            "text": "Bisogna (треба, безособове) + infinito, dovere (мусити) + infinito особисто, ci vuole/ci vogliono (потрібно) для кількості/часу.",
            "en": {
              "text": "Bisogna (it's necessary, impersonal) + infinitive, dovere (must) + infinitive personally, ci vuole/ci vogliono (it takes) for amount/time."
            }
          },
          {
            "type": "table",
            "title": "Конструкції необхідності",
            "rows": [
              [
                "Bisogna studiare.",
                "Треба вчитися."
              ],
              [
                "Devo studiare.",
                "Я мушу вчитися."
              ],
              [
                "Ci vuole un'ora.",
                "Потрібна одна година."
              ],
              [
                "Ci vogliono due ore.",
                "Потрібні дві години."
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
                "Bisogna partire subito.",
                "Треба виїжджати негайно."
              ]
            ]
          }
        ]
      },
      {
        "id": "quale-vs-che",
        "title": "Quale? vs Che? — B1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Quale (який з...) передбачає вибір серед варіантів; che (що/який) — загальніше питання.",
            "en": {
              "text": "Quale (which one) implies a choice among options; che (what/which) is a more general question."
            }
          },
          {
            "type": "table",
            "title": "quale / che",
            "rows": [
              [
                "Quale vuoi, questo o quello?",
                "Який хочеш, цей чи той?"
              ],
              [
                "Che libro leggi?",
                "Яку книгу ти читаєш?"
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
                "Quale preferisci?",
                "Який ти надаєш перевагу?"
              ]
            ]
          }
        ]
      },
      {
        "id": "pero-ma-bensi",
        "title": "Però vs Ma vs Bensì — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Ma і però обидва означають «але» (però сильніше й може стояти в кінці речення); bensì («а навпаки») вживають після заперечення для протиставлення.",
            "en": {
              "text": "Ma and però both mean 'but' (però is stronger and can go at the end of a sentence); bensì ('but rather') is used after a negation for contrast."
            }
          },
          {
            "type": "table",
            "title": "ma / però / bensì",
            "rows": [
              [
                "È caro, ma bello.",
                "Це дорого, але гарно."
              ],
              [
                "Bello, però caro.",
                "Гарно, але дорого. (наголос на «але»)"
              ],
              [
                "Non è facile, bensì difficile.",
                "Це не легко, а важко."
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
                "Vorrei venire, però non posso.",
                "Я б хотів прийти, але не можу."
              ]
            ]
          }
        ]
      },
      {
        "id": "infinitive-gerund-verbs",
        "title": "Verbi + Infinito/Gerundio — B2",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі дієслова сприйняття й початку/продовження дії поєднуються з інфінітивом або герундієм із власними прийменниками чи без них.",
            "en": {
              "text": "Some perception and beginning/continuing verbs combine with the infinitive or gerund, with their own prepositions or none."
            }
          },
          {
            "type": "table",
            "title": "Приклади конструкцій",
            "rows": [
              [
                "cominciare a + infinito",
                "почати..."
              ],
              [
                "continuare a + infinito",
                "продовжувати..."
              ],
              [
                "finire di + infinito",
                "закінчити..."
              ],
              [
                "vedere/sentire + infinito",
                "бачити/чути, як..."
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
                "Ho finito di lavorare.",
                "Я закінчив(ла) працювати."
              ]
            ]
          }
        ]
      },
      {
        "id": "impersonal-si",
        "title": "Il \"Si\" Impersonale — B1",
        "emoji": "🌐",
        "sections": [
          {
            "type": "intro",
            "text": "Si impersonale виражає загальне твердження без конкретного підмета (аналог «one»/«people say»); дієслово завжди в 3-й особі однини.",
            "en": {
              "text": "The impersonal si expresses a general statement with no specific subject (like 'one'/'people say'); the verb is always 3rd person singular."
            }
          },
          {
            "type": "table",
            "title": "si + дієслово",
            "rows": [
              [
                "Qui si parla italiano.",
                "Тут розмовляють італійською."
              ],
              [
                "Non si sa mai.",
                "Ніколи не знаєш."
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
                "Si dice che sia vero.",
                "Кажуть, що це правда."
              ]
            ]
          }
        ]
      },
      {
        "id": "reported-questions",
        "title": "Domande Indirette — B1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Непрямі питання не мають знака питання і не інвертують порядок слів; вводяться se (чи) для питань так/ні.",
            "en": {
              "text": "Indirect questions have no question mark and no word-order inversion; they're introduced by se (whether) for yes/no questions."
            }
          },
          {
            "type": "table",
            "title": "Пряме → непряме питання",
            "rows": [
              [
                "\"Vieni?\" → Mi ha chiesto se venivo.",
                "«Ти йдеш?» → Він запитав, чи я йду."
              ],
              [
                "\"Dove vai?\" → Mi ha chiesto dove andavo.",
                "«Куди ти йдеш?» → Він запитав, куди я йду."
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
                "Non so se verrà.",
                "Я не знаю, чи він прийде."
              ]
            ]
          }
        ]
      },
      {
        "id": "become-verbs",
        "title": "Diventare, Farsi, Rendersi — B2",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Diventare — загальне «ставати»; farsi — переважно про фізичні/вікові зміни; rendersi — зазвичай тільки з conto (усвідомити).",
            "en": {
              "text": "Diventare is the general 'to become'; farsi is mostly for physical/age changes; rendersi is mostly used only with conto (to realize)."
            }
          },
          {
            "type": "table",
            "title": "diventare / farsi / rendersi",
            "rows": [
              [
                "diventare famoso",
                "стати відомим"
              ],
              [
                "farsi grande",
                "вирости (про дитину)"
              ],
              [
                "rendersi conto di",
                "усвідомити"
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
                "Mi sono reso conto dell'errore.",
                "Я усвідомив(ла) помилку."
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "fluency",
    "title": "Вільне володіння",
    "titleEn": "Fluency",
    "emoji": "🚀",
    "rules": [
      {
        "id": "condizionale-composto",
        "title": "Condizionale Composto — B2",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Виражає дію, яка сталася б у минулому за певної умови, або майбутнє в минулому. Утворюється essere/avere в Condizionale + причастя.",
            "en": {
              "text": "Expresses an action that would have happened in the past given a condition, or future-in-the-past. Formed with essere/avere in the Conditional + participle."
            }
          },
          {
            "type": "formula",
            "title": "avrei/sarei + participio",
            "rows": [
              [
                "✅ (+)",
                "io",
                "avrei parlato",
                "→ Avrei parlato se avessi potuto."
              ],
              [
                "✅ (+)",
                "io (essere)",
                "sarei andato/a",
                "→ Sarei andato, ma pioveva."
              ]
            ],
            "en": {
              "title": "avrei/sarei + participle"
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
                "Ha detto che sarebbe venuto.",
                "Він сказав, що прийде. (майбутнє в минулому)"
              ]
            ]
          }
        ]
      },
      {
        "id": "futuro-probabilita",
        "title": "Uso del Futuro per Probabilità — B2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Futuro може виражати не лише майбутнє, а й припущення про теперішнє (аналог «мабуть»).",
            "en": {
              "text": "The future can express not only future time, but also a guess about the present (like 'probably')."
            }
          },
          {
            "type": "table",
            "title": "Futuro для припущення",
            "rows": [
              [
                "Che ore sono? Saranno le tre.",
                "Котра година? Мабуть, третя."
              ],
              [
                "Avrà trent'anni.",
                "Йому/їй, мабуть, тридцять."
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
                "Sarà stanco dopo il viaggio.",
                "Він, мабуть, втомлений після подорожі."
              ]
            ]
          }
        ]
      },
      {
        "id": "tu-vs-lei",
        "title": "Tu vs Lei (Formalità) — A2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Tu — неформальне «ти», Lei — ввічливе звертання до незнайомих/старших (з дієсловом у 3-й особі однини, навіть до однієї людини).",
            "en": {
              "text": "Tu is informal 'you', Lei is the polite form for strangers/elders (used with the verb in 3rd person singular, even for one person)."
            }
          },
          {
            "type": "table",
            "title": "tu vs Lei",
            "rows": [
              [
                "Come stai? (tu)",
                "Як справи? (неформально)"
              ],
              [
                "Come sta? (Lei)",
                "Як ви? (ввічливо, 3-тя особа)"
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
                "Lei è italiano?",
                "Ви італієць? (ввічливо)"
              ]
            ]
          }
        ]
      },
      {
        "id": "lo-neutro",
        "title": "Il Pronome Neutro \"Lo\" — B1",
        "emoji": "🔘",
        "sections": [
          {
            "type": "intro",
            "text": "Lo може заміняти цілу ідею, прикметник або дієслово-присудок, а не лише іменник чоловічого роду.",
            "en": {
              "text": "Lo can replace a whole idea, an adjective, or a predicate verb, not just a masculine noun."
            }
          },
          {
            "type": "table",
            "title": "lo нейтральне",
            "rows": [
              [
                "Sei stanco? Sì, lo sono.",
                "Ти втомлений? Так, я такий."
              ],
              [
                "Lo sapevo!",
                "Я це знав(ла)!"
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
                "Non lo credo.",
                "Я в це не вірю."
              ]
            ]
          }
        ]
      },
      {
        "id": "il-cui-possessivo",
        "title": "\"Il Cui\" (Possessivo Relativo) — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Il cui/la cui/i cui/le cui означає «чий/чия» — узгоджується з іменником, що йде після нього, а не з попереднім.",
            "en": {
              "text": "Il cui/la cui/i cui/le cui means 'whose' — it agrees with the noun that follows it, not with the preceding one."
            }
          },
          {
            "type": "table",
            "title": "il cui",
            "rows": [
              [
                "l'uomo il cui libro ho letto",
                "чоловік, чию книгу я прочитав(ла)"
              ],
              [
                "la donna la cui figlia studia qui",
                "жінка, чия дочка тут навчається"
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
                "Il professore il cui corso seguo è bravo.",
                "Викладач, чий курс я відвідую, хороший."
              ]
            ]
          }
        ]
      },
      {
        "id": "fare-lasciare-causativo",
        "title": "Fare/Lasciare + Infinito (Causativo) — B2",
        "emoji": "🔧",
        "sections": [
          {
            "type": "intro",
            "text": "Fare + інфінітив виражає спонукання («примусити зробити»), lasciare + інфінітив — дозвіл («дозволити зробити»).",
            "en": {
              "text": "Fare + infinitive expresses causation ('to make someone do'), lasciare + infinitive expresses permission ('to let someone do')."
            }
          },
          {
            "type": "table",
            "title": "fare / lasciare + infinito",
            "rows": [
              [
                "Faccio riparare la macchina.",
                "Я віддаю машину в ремонт."
              ],
              [
                "Lascio parlare lui.",
                "Я дозволяю йому говорити."
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
                "Mi ha fatto ridere.",
                "Він/вона мене розсмішив(ла)."
              ]
            ]
          }
        ]
      },
      {
        "id": "gia-ancora-piu",
        "title": "Già, Ancora, Non...Più — A2",
        "emoji": "⏱️",
        "sections": [
          {
            "type": "intro",
            "text": "Già (вже), ancora (ще), non...più (більше не) — ключові прислівники для опису стану дії в часі.",
            "en": {
              "text": "Già (already), ancora (still/yet), non...più (no longer) — key adverbs for describing the state of an action over time."
            }
          },
          {
            "type": "table",
            "title": "già / ancora / non...più",
            "rows": [
              [
                "L'ho già fatto.",
                "Я вже це зробив(ла)."
              ],
              [
                "Sei ancora qui?",
                "Ти ще тут?"
              ],
              [
                "Non fumo più.",
                "Я більше не палю."
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
                "Non lavora più qui.",
                "Він/вона тут більше не працює."
              ]
            ]
          }
        ]
      },
      {
        "id": "tanto-quanto",
        "title": "Tanto...Quanto — B1",
        "emoji": "⚖️",
        "sections": [
          {
            "type": "intro",
            "text": "Tanto...quanto виражає рівність («настільки ж... як») — з прикметниками часто скорочується до così...come.",
            "en": {
              "text": "Tanto...quanto expresses equality ('as much... as') — with adjectives it's often shortened to così...come."
            }
          },
          {
            "type": "table",
            "title": "tanto...quanto",
            "rows": [
              [
                "Ho tanti libri quanti te.",
                "У мене стільки ж книг, скільки в тебе."
              ],
              [
                "È tanto intelligente quanto bella.",
                "Вона настільки ж розумна, наскільки красива."
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
                "È alto quanto suo padre.",
                "Він такий же високий, як його батько."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-position",
        "title": "Posizione dell'Aggettivo — B2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі прикметники змінюють значення залежно від позиції: перед іменником — переносне/суб'єктивне значення, після — буквальне.",
            "en": {
              "text": "Some adjectives change meaning depending on position: before the noun — figurative/subjective meaning, after — literal."
            }
          },
          {
            "type": "table",
            "title": "Позиція змінює значення",
            "rows": [
              [
                "un vecchio amico",
                "давній друг (перен.)"
              ],
              [
                "un amico vecchio",
                "старий (за віком) друг (букв.)"
              ],
              [
                "un grande uomo",
                "велика людина (значуща)"
              ],
              [
                "un uomo grande",
                "велика (фізично) людина"
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
                "È un caro amico.",
                "Це любий друг."
              ]
            ]
          }
        ]
      },
      {
        "id": "prepositions-extra",
        "title": "Preposizioni: Su, Tra, Verso, Sotto — A2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Інші вживані прийменники: su (на/про), tra/fra (між), verso (у напрямку), sotto (під).",
            "en": {
              "text": "Other common prepositions: su (on/about), tra/fra (between), verso (towards), sotto (under)."
            }
          },
          {
            "type": "table",
            "title": "su / tra / verso / sotto",
            "rows": [
              [
                "Il libro è sul tavolo.",
                "Книга на столі."
              ],
              [
                "Tra due giorni parto.",
                "За два дні я їду."
              ],
              [
                "Vado verso casa.",
                "Я йду у бік дому."
              ],
              [
                "Sotto il tavolo.",
                "Під столом."
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
                "Parliamo su questo argomento.",
                "Поговорімо на цю тему."
              ]
            ]
          }
        ]
      },
      {
        "id": "cio-che-cleft",
        "title": "\"Ciò Che\" (Frasi Enfatiche) — B2",
        "emoji": "💫",
        "sections": [
          {
            "type": "intro",
            "text": "Ciò che (те, що) вводить підмет чи додаток, коли референт неозначений, часто в емфатичних конструкціях.",
            "en": {
              "text": "Ciò che (that which/what) introduces a subject or object when the referent is unspecified, often in emphatic constructions."
            }
          },
          {
            "type": "table",
            "title": "ciò che",
            "rows": [
              [
                "Ciò che dici è vero.",
                "Те, що ти кажеш, правда."
              ],
              [
                "Non capisco ciò che vuoi.",
                "Я не розумію, чого ти хочеш."
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
                "Ciò che conta è la salute.",
                "Те, що важливо, — це здоров'я."
              ]
            ]
          }
        ]
      },
      {
        "id": "large-numbers",
        "title": "Numeri Cardinali Grandi — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Великі числа утворюються послідовним поєднанням: сотні (cento), тисячі (mille/mila), мільйони (milione/milioni).",
            "en": {
              "text": "Large numbers are formed by chaining: hundreds (cento), thousands (mille/mila), millions (milione/milioni)."
            }
          },
          {
            "type": "table",
            "title": "Великі числа",
            "rows": [
              [
                "cento",
                "100"
              ],
              [
                "mille / duemila",
                "1000 / 2000 (mille → mila у множині)"
              ],
              [
                "un milione / due milioni",
                "1 000 000 / 2 000 000"
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
                "Costa duemila euro.",
                "Це коштує дві тисячі євро."
              ]
            ]
          }
        ]
      },
      {
        "id": "reflexive-emphatic",
        "title": "Pronomi Riflessivi Enfatici (a me stesso) — B2",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Stesso/stessa/stessi/stesse додається до тонічного займенника для підсилення зворотного значення («сам собі»).",
            "en": {
              "text": "Stesso/stessa/stessi/stesse is added to the stressed pronoun to emphasize a reflexive meaning ('to myself')."
            }
          },
          {
            "type": "table",
            "title": "me stesso / te stesso",
            "rows": [
              [
                "L'ho fatto per me stesso.",
                "Я зробив(ла) це для себе самого(ої)."
              ],
              [
                "Parla a se stesso.",
                "Він говорить сам до себе."
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
                "Devi credere in te stesso.",
                "Ти маєш вірити в себе."
              ]
            ]
          }
        ]
      },
      {
        "id": "magari-speriamo",
        "title": "Magari + Congiuntivo (Desideri) — B1",
        "emoji": "🌠",
        "sections": [
          {
            "type": "intro",
            "text": "Magari виражає сильне бажання («якби ж») і вживається з кон'юнктивом імперфект/трапассато.",
            "en": {
              "text": "Magari expresses a strong wish ('if only') and is used with the imperfect/pluperfect subjunctive."
            }
          },
          {
            "type": "table",
            "title": "magari + congiuntivo",
            "rows": [
              [
                "Magari fosse vero!",
                "Якби ж це було правдою!"
              ],
              [
                "Magari avessi più tempo!",
                "Якби ж у мене було більше часу!"
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
                "Magari potessi venire!",
                "Якби ж я міг(могла) прийти!"
              ]
            ]
          }
        ]
      },
      {
        "id": "accent-rules",
        "title": "Regole dell'Accento — A2",
        "emoji": "✏️",
        "sections": [
          {
            "type": "intro",
            "text": "Наголос падає переважно на передостанній склад, але слова з наголосом на останній голосній завжди позначаються графічним знаком (à, è, ì, ò, ù).",
            "en": {
              "text": "Stress usually falls on the second-to-last syllable, but words stressed on the final vowel always carry a written accent mark (à, è, ì, ò, ù)."
            }
          },
          {
            "type": "table",
            "title": "Приклади наголосу",
            "rows": [
              [
                "città, però, così",
                "наголос на останньому складі — обов'язковий знак"
              ],
              [
                "perché",
                "чому/тому що — завжди зі знаком"
              ],
              [
                "e (і) vs è (є)",
                "розрізняються лише наголосом"
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
                "Abito in città.",
                "Я живу в місті."
              ]
            ]
          }
        ]
      }
    ]
  }
];
