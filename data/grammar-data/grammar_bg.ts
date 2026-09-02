// Vymova — data/grammar-data/grammar_bg.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_BG: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "pronouns",
        "title": "Особові займенники — A1",
        "emoji": "🙋",
        "sections": [
          {
            "type": "intro",
            "text": "Болгарські дієслова показують особу закінченням, тому займенник у звичайній розмові часто опускають.",
            "en": {
              "text": "Bulgarian verbs mark person through their ending, so the pronoun is often dropped in normal speech."
            }
          },
          {
            "type": "table",
            "title": "Базові займенники",
            "rows": [
              [
                "аз",
                "я"
              ],
              [
                "ти",
                "ти"
              ],
              [
                "той / тя / то",
                "він / вона / воно"
              ],
              [
                "ние",
                "ми"
              ],
              [
                "те",
                "вони"
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
                "Аз съм учител.",
                "Я вчитель."
              ]
            ]
          }
        ]
      },
      {
        "id": "to-be",
        "title": "Дієслово \"съм\" (бути) — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "\"Съм\" відмінюється схоже на українське \"бути\" й активно використовується як зв'язка.",
            "en": {
              "text": "\"Съм\" conjugates similarly to Ukrainian \"бути\" and is actively used as a copula."
            }
          },
          {
            "type": "formula",
            "title": "съм / си / е / сме / сте / са",
            "rows": [
              [
                "Аз съм учител.",
                "(Я вчитель.)"
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
                "Тя е лекарка.",
                "Вона лікарка."
              ]
            ]
          }
        ]
      },
      {
        "id": "negation",
        "title": "Заперечення \"не\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечна частка не ставиться безпосередньо перед дієсловом.",
            "en": {
              "text": "The negative particle не goes directly before the verb."
            }
          },
          {
            "type": "formula",
            "title": "не + дієслово",
            "rows": [
              [
                "Не знам.",
                "(Я не знаю.)"
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
                "Той не дойде.",
                "Він не прийшов."
              ]
            ]
          }
        ]
      },
      {
        "id": "questions",
        "title": "Питання з \"ли\" — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні часто утворюються часткою ли одразу після ключового слова.",
            "en": {
              "text": "Yes/no questions are often formed with the particle ли right after the key word."
            }
          },
          {
            "type": "formula",
            "title": "Слово + ли + решта речення?",
            "rows": [
              [
                "Уморен ли си?",
                "(Ти втомлений?)"
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
                "Имаш ли време?",
                "У тебе є час?"
              ]
            ]
          }
        ]
      },
      {
        "id": "suffixed-article",
        "title": "Артикль-суфікс, без відмінків — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від інших слов'янських мов, болгарська втратила відмінки іменників, але має означений артикль, приєднаний як суфікс в кінці слова.",
            "en": {
              "text": "Unlike other Slavic languages, Bulgarian lost noun cases, but has a definite article attached as a suffix at the end of the word."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "книга → книгата",
                "книга → ця книга"
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
                "Книгата е интересна.",
                "Ця книга цікава."
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "tenses",
    "title": "Часове и наклонения на глагола",
    "titleEn": "Tenses & Moods",
    "emoji": "🕐",
    "rules": [
      {
        "id": "present-tense",
        "title": "Сегашно време — A1",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній час утворюється додаванням особових закінчень безпосередньо до основи дієслова (окремого допоміжного дієслова не потрібно).",
            "en": {
              "text": "The present tense is formed by adding personal endings directly to the verb stem (no auxiliary verb needed)."
            }
          },
          {
            "type": "formula",
            "title": "чета (читати) — сегашно време",
            "rows": [
              [
                "✅ (+)",
                "аз",
                "чет<u>а</u>",
                "→ Чета книга."
              ],
              [
                "✅ (+)",
                "ти",
                "чет<u>еш</u>",
                "→ Четеш бързо."
              ],
              [
                "✅ (+)",
                "той/тя/то",
                "чет<u>е</u>",
                "→ Той чете вестник."
              ],
              [
                "✅ (+)",
                "ние",
                "чет<u>ем</u>",
                "→ Четем заедно."
              ],
              [
                "✅ (+)",
                "вие",
                "чет<u>ете</u>",
                "→ Четете ли?"
              ],
              [
                "✅ (+)",
                "те",
                "чет<u>ат</u>",
                "→ Те четат много."
              ]
            ],
            "en": {
              "title": "чета (to read) — present tense"
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
                "Не разбирам.",
                "Я не розумію."
              ],
              [
                "Той работи тук.",
                "Він працює тут."
              ]
            ]
          }
        ]
      },
      {
        "id": "conjugation-classes",
        "title": "Трите спрежения на глагола (-а/-я, -и, -е) — A1",
        "emoji": "📚",
        "sections": [
          {
            "type": "intro",
            "text": "Болгарські дієслова поділяються на три дієвідміни за голосною перед закінченням у 3-й особі однини: I (-а/-я), II (-и), III (-е).",
            "en": {
              "text": "Bulgarian verbs fall into three conjugation classes based on the vowel before the ending in the 3rd person singular: I (-а/-я), II (-и), III (-е)."
            }
          },
          {
            "type": "table",
            "title": "Три спрежения",
            "rows": [
              [
                "I спрежение: чета → чете",
                "основна голосна -е-"
              ],
              [
                "II спрежение: говоря → говори",
                "основна голосна -и-"
              ],
              [
                "III спрежение: играя → играе",
                "основна голосна -я-/-е-"
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
                "Той говори английски.",
                "Він розмовляє англійською."
              ],
              [
                "Играем футбол.",
                "Ми граємо у футбол."
              ]
            ]
          }
        ]
      },
      {
        "id": "past-aorist",
        "title": "Минало свършено време (Аорист) — A2",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Аорист описує завершену одноразову дію в минулому (аналог Past Simple); найчастіше утворюється від доконаних дієслів.",
            "en": {
              "text": "The Aorist describes a completed one-time past action (like Past Simple); it's most commonly formed from perfective verbs."
            }
          },
          {
            "type": "formula",
            "title": "прочета (прочитати) — аорист",
            "rows": [
              [
                "✅ (+)",
                "аз",
                "прочет<u>ох</u>",
                "→ Прочетох книгата."
              ],
              [
                "✅ (+)",
                "ти",
                "прочет<u>е</u>",
                "→ Прочете ли писмото?"
              ],
              [
                "✅ (+)",
                "той/тя/то",
                "прочет<u>е</u>",
                "→ Тя прочете всичко."
              ]
            ],
            "en": {
              "title": "прочета (to read/finish reading) — Aorist"
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
                "Вчера отидох на работа.",
                "Вчора я пішов(ла) на роботу."
              ]
            ]
          }
        ]
      },
      {
        "id": "past-imperfect",
        "title": "Минало несвършено време (Имперфект) — A2",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Імперфект виражає тривалу або звичну дію в минулому; найчастіше утворюється від недоконаних дієслів.",
            "en": {
              "text": "The Imperfect expresses an ongoing or habitual past action; it's most commonly formed from imperfective verbs."
            }
          },
          {
            "type": "formula",
            "title": "четях (читав) — имперфект",
            "rows": [
              [
                "✅ (+)",
                "аз",
                "чет<u>ях</u>",
                "→ Четях всеки ден."
              ],
              [
                "✅ (+)",
                "ти",
                "чет<u>еше</u>",
                "→ Четеше бавно."
              ],
              [
                "✅ (+)",
                "той/тя/то",
                "чет<u>еше</u>",
                "→ Той четеше вестник, докато чакаше."
              ]
            ],
            "en": {
              "title": "четях (was reading) — Imperfect"
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
                "Когато бях малък, играех навън.",
                "Коли я був малим, я грав надворі."
              ]
            ]
          }
        ]
      },
      {
        "id": "future-simple",
        "title": "Бъдеще време — A1",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється незмінною часткою ще перед дієсловом у теперішньому часі.",
            "en": {
              "text": "The future tense is formed with the invariable particle ще before the verb in the present tense."
            }
          },
          {
            "type": "table",
            "title": "ще + сегашно време",
            "rows": [
              [
                "ще чета",
                "я читатиму"
              ],
              [
                "ще прочета",
                "я прочитаю (доконаний)"
              ],
              [
                "Няма да чета.",
                "Я не читатиму. (заперечення)"
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
                "Утре ще пътувам.",
                "Завтра я поїду."
              ]
            ]
          }
        ]
      },
      {
        "id": "past-perfect",
        "title": "Минало предварително време (Плусквамперфект) — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Виражає дію, що відбулася раніше за іншу минулу подію (Past Perfect). Утворюється бях (імперфект від съм) + минало причастие.",
            "en": {
              "text": "Expresses an action that happened before another past event (Past Perfect). Formed with бях (imperfect of съм) + past participle."
            }
          },
          {
            "type": "formula",
            "title": "бях + причастие",
            "rows": [
              [
                "✅ (+)",
                "аз",
                "бях чел/а",
                "→ Бях чел книгата преди филма."
              ],
              [
                "✅ (+)",
                "ти",
                "беше чел/а",
                "→ Ти беше отишъл вече."
              ]
            ],
            "en": {
              "title": "бях + participle"
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
                "Когато пристигнах, той вече беше заминал.",
                "Коли я прибув, він уже поїхав."
              ]
            ]
          }
        ]
      },
      {
        "id": "present-perfect",
        "title": "Минало неопределено време (Перфект) — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Виражає минулу дію без указання на конкретний момент, результат якої важливий зараз. Утворюється съм + минало причастие.",
            "en": {
              "text": "Expresses a past action with no specific time reference, whose result matters now. Formed with съм + past participle."
            }
          },
          {
            "type": "formula",
            "title": "съм + причастие",
            "rows": [
              [
                "✅ (+)",
                "аз",
                "съм чел/а",
                "→ Чел съм тази книга."
              ],
              [
                "✅ (+)",
                "ти",
                "си чел/а",
                "→ Ходил ли си в България?"
              ]
            ],
            "en": {
              "title": "съм + participle"
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
                "Никога не съм бил там.",
                "Я ніколи там не був."
              ]
            ]
          }
        ]
      },
      {
        "id": "future-in-past",
        "title": "Бъдеще време в миналото — B1",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Виражає майбутню дію з погляду минулого (наприклад, у непрямій мові). Утворюється щях + да + дієслово в теперішньому часі.",
            "en": {
              "text": "Expresses a future action from a past viewpoint (e.g. in reported speech). Formed with щях + да + the verb in the present tense."
            }
          },
          {
            "type": "table",
            "title": "щях да + сегашно време",
            "rows": [
              [
                "Той каза, че щеше да дойде.",
                "Він сказав, що прийде."
              ],
              [
                "Знаех, че щях да закъснея.",
                "Я знав, що запізнюся."
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
                "Мислех, че щеше да вали.",
                "Я думав, що піде дощ."
              ]
            ]
          }
        ]
      },
      {
        "id": "future-perfect",
        "title": "Бъдеще предварително време — B2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Виражає дію, яка завершиться в майбутньому до іншого моменту. Утворюється ще + бъда + минало причастие.",
            "en": {
              "text": "Expresses an action that will be completed in the future before another point in time. Formed with ще + бъда + past participle."
            }
          },
          {
            "type": "table",
            "title": "ще бъда + причастие",
            "rows": [
              [
                "Ще съм свършил до пет.",
                "Я закінчу до п'ятої."
              ],
              [
                "До утре ще е пристигнал.",
                "До завтра він уже прибуде."
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
                "Дотогава ще съм готов.",
                "До того часу я буду готовий."
              ]
            ]
          }
        ]
      },
      {
        "id": "imperative",
        "title": "Повелително наклонение — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб має власні закінчення для 2-ї особи однини й множини; заперечення утворюється часткою не перед дієсловом.",
            "en": {
              "text": "The imperative has its own endings for 2nd person singular and plural; negation is formed with не before the verb."
            }
          },
          {
            "type": "formula",
            "title": "чети / четете",
            "rows": [
              [
                "✅ (+)",
                "ти",
                "чети!",
                "→ Чети внимателно!"
              ],
              [
                "✅ (+)",
                "вие",
                "четете!",
                "→ Четете заедно!"
              ],
              [
                "❌ (−)",
                "ти",
                "не чети!",
                "→ Не чети сега!"
              ]
            ],
            "en": {
              "title": "чети / четете"
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
                "Ела тук!",
                "Іди сюди!"
              ]
            ]
          }
        ]
      },
      {
        "id": "verbal-aspect",
        "title": "Глаголен вид: свършен и несвършен — A2",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Майже кожне болгарське дієслово має пару за видом: недоконаний (тривала/повторювана дія) і доконаний (одноразова, завершена дія) — часто утворюються за допомогою префіксів чи суфіксів.",
            "en": {
              "text": "Almost every Bulgarian verb has an aspectual pair: imperfective (ongoing/repeated action) and perfective (a single, completed action) — often formed with prefixes or suffixes."
            }
          },
          {
            "type": "table",
            "title": "Видові двойки",
            "rows": [
              [
                "чета (несв.) → прочета (св.)",
                "читати → прочитати"
              ],
              [
                "пиша (несв.) → напиша (св.)",
                "писати → написати"
              ],
              [
                "купувам (несв.) → купя (св.)",
                "купувати → купити"
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
                "Четях книгата цял ден.",
                "Я читав книгу весь день. (недоконаний)"
              ],
              [
                "Прочетох книгата за един ден.",
                "Я прочитав книгу за один день. (доконаний)"
              ]
            ]
          }
        ]
      },
      {
        "id": "renarrated-mood",
        "title": "Преизказно наклонение (евиденциалност) — B2",
        "emoji": "🗣️",
        "sections": [
          {
            "type": "intro",
            "text": "Унікальна риса болгарської — переказний спосіб позначає, що мовець не є свідком дії, а переказує почуте від когось іншого (без допоміжного дієслова в 3-й особі).",
            "en": {
              "text": "A unique Bulgarian feature — the renarrated (evidential) mood marks that the speaker did not witness the action but is retelling what someone else said (dropping the auxiliary in the 3rd person)."
            }
          },
          {
            "type": "table",
            "title": "Пряме vs переказне",
            "rows": [
              [
                "Той дойде. (свідок)",
                "Він прийшов. (я бачив)"
              ],
              [
                "Той дошъл. (переказне)",
                "Він, кажуть, прийшов. (я не бачив)"
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
                "Тя заминала за чужбина.",
                "Кажуть, вона поїхала за кордон."
              ]
            ]
          }
        ]
      },
      {
        "id": "conditional-mood",
        "title": "Условно наклонение — B1",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб утворюється особливою формою дієслова бих + минало причастие; вживається для гіпотетичних дій і ввічливих прохань.",
            "en": {
              "text": "The conditional mood is formed with the special verb form бих + past participle; it's used for hypothetical actions and polite requests."
            }
          },
          {
            "type": "formula",
            "title": "бих + причастие",
            "rows": [
              [
                "✅ (+)",
                "аз",
                "бих чел/а",
                "→ Бих искал кафе."
              ],
              [
                "✅ (+)",
                "ти",
                "би чел/а",
                "→ Би ли ми помогнал?"
              ]
            ],
            "en": {
              "title": "бих + participle"
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
                "Ако имах време, бих пътувал повече.",
                "Якби в мене був час, я б більше подорожував."
              ]
            ]
          }
        ]
      }
    ]
  }
];
