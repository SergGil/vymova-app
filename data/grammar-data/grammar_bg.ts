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
        ],
        "titleEn": "Personal Pronouns — A1"
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
        ],
        "titleEn": "The Verb Съм (To Be) — A1"
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
        ],
        "titleEn": "Negation with Не — A1"
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
        ],
        "titleEn": "Questions with Ли — A1"
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
        ],
        "titleEn": "The Suffixed Article, No Cases — A1"
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
        ],
        "titleEn": "Present Tense — A1"
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
        ],
        "titleEn": "The Three Verb Conjugation Classes — A1"
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
        ],
        "titleEn": "Aorist (Simple Past) — A2"
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
        ],
        "titleEn": "Imperfect Past — A2"
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
        ],
        "titleEn": "Future Tense — A1"
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
        ],
        "titleEn": "Pluperfect — B1"
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
        ],
        "titleEn": "Perfect Tense — B1"
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
        ],
        "titleEn": "Future in the Past — B1"
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
        ],
        "titleEn": "Future Perfect — B2"
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
        ],
        "titleEn": "Imperative — A2"
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
        ],
        "titleEn": "Verbal Aspect: Perfective & Imperfective — A2"
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
        ],
        "titleEn": "Renarrated (Evidential) Mood — B2"
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
        ],
        "titleEn": "Conditional Mood — B1"
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
        "id": "vocative-case",
        "title": "Звателна форма (запазен падеж) — A2",
        "emoji": "🏷️",
        "sections": [
          {
            "type": "intro",
            "text": "Хоча болгарська втратила відмінки, звертальна форма (кличний відмінок) збереглася для чоловічих і жіночих імен та деяких іменників.",
            "en": {
              "text": "Although Bulgarian lost its case system, the vocative form survived for masculine and feminine names and some nouns."
            }
          },
          {
            "type": "table",
            "title": "Звателна форма",
            "rows": [
              [
                "Иван → Иване!",
                "Іван → Іване!"
              ],
              [
                "Мария → Марийо!",
                "Марія → Маріє!"
              ],
              [
                "майка → майко!",
                "мама → мамо!"
              ],
              [
                "приятел → приятелю!",
                "друг → друже!"
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
                "Иване, ела тук!",
                "Іване, іди сюди!"
              ]
            ]
          }
        ],
        "titleEn": "Vocative Form (the Surviving Case) — A2"
      },
      {
        "id": "full-short-article",
        "title": "Пълен и кратък член (-ът / -а) — B1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "У чоловічому роді однини означений артикль має дві форми: повну (-ът/-ят) для підмета й коротку (-а/-я) для додатка.",
            "en": {
              "text": "For masculine singular nouns, the definite article has two forms: the full one (-ът/-ят) for the subject and the short one (-а/-я) for the object."
            }
          },
          {
            "type": "table",
            "title": "-ът vs -а",
            "rows": [
              [
                "Столът е нов. (підмет)",
                "Стілець новий."
              ],
              [
                "Виждам стола. (додаток)",
                "Я бачу стілець."
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
                "Мъжът чете вестника.",
                "Чоловік читає газету."
              ]
            ]
          }
        ],
        "titleEn": "Full & Short Article (-ът / -а) — B1"
      },
      {
        "id": "plural-definite-article",
        "title": "Определителен член в множествено число — A2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "У множині означений артикль -те (для іменників на -и) або -та (для іменників середнього роду на -а) додається до форми множини.",
            "en": {
              "text": "In the plural, the definite article -те (for nouns ending in -и) or -та (for neuter nouns ending in -а) is added to the plural form."
            }
          },
          {
            "type": "table",
            "title": "Артикль у множині",
            "rows": [
              [
                "книги → книгите",
                "книги → ці книги"
              ],
              [
                "деца → децата",
                "діти → ці діти"
              ],
              [
                "мъже → мъжете",
                "чоловіки → ці чоловіки"
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
                "Децата играят навън.",
                "Ці діти грають надворі."
              ]
            ]
          }
        ],
        "titleEn": "Definite Article in the Plural — A2"
      },
      {
        "id": "gender-nouns",
        "title": "Род на съществителните — A1",
        "emoji": "⚥",
        "sections": [
          {
            "type": "intro",
            "text": "Три роди визначаються переважно за закінченням у словниковій формі: приголосна (чол.), -а/-я (жін.), -о/-е (сер.).",
            "en": {
              "text": "The three genders are mostly determined by the dictionary-form ending: a consonant (masc.), -а/-я (fem.), -о/-е (neut.)."
            }
          },
          {
            "type": "table",
            "title": "Рід за закінченням",
            "rows": [
              [
                "мъж, стол",
                "чоловічий (приголосна)"
              ],
              [
                "жена, книга",
                "жіночий (-а)"
              ],
              [
                "дете, море",
                "середній (-е/-о)"
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
                "Голямата книга е тук.",
                "Велика книга тут."
              ]
            ]
          }
        ],
        "titleEn": "Noun Gender — A1"
      },
      {
        "id": "plural-nouns",
        "title": "Множествено число на съществителните — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється за родом: чоловічий рід переважно на -и, жіночий на -и, середній на -а/-я.",
            "en": {
              "text": "The plural is formed by gender: masculine mostly -и, feminine -и, neuter -а/-я."
            }
          },
          {
            "type": "table",
            "title": "Однина → множина",
            "rows": [
              [
                "стол → столове",
                "стілець → стільці"
              ],
              [
                "жена → жени",
                "жінка → жінки"
              ],
              [
                "дете → деца",
                "дитина → діти"
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
                "Жените говорят.",
                "Жінки говорять."
              ]
            ]
          }
        ],
        "titleEn": "Plural Nouns — A1"
      },
      {
        "id": "personal-pronouns-full",
        "title": "Пълни лични местоимения — A1",
        "emoji": "🙋",
        "sections": [
          {
            "type": "intro",
            "text": "Повні особові займенники в непрямих відмінках (мене, тебе...) вживаються для наголосу або після прийменників.",
            "en": {
              "text": "Full personal pronouns in oblique forms (мене, тебе...) are used for emphasis or after prepositions."
            }
          },
          {
            "type": "table",
            "title": "Повні форми (об'єктні)",
            "rows": [
              [
                "мене",
                "мене"
              ],
              [
                "тебе",
                "тебе"
              ],
              [
                "него / нея",
                "його / її"
              ],
              [
                "нас",
                "нас"
              ],
              [
                "вас",
                "вас"
              ],
              [
                "тях",
                "їх"
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
                "За мене е важно.",
                "Для мене це важливо."
              ]
            ]
          }
        ],
        "titleEn": "Full Personal Pronouns (Object Forms) — A1"
      },
      {
        "id": "personal-pronouns-short",
        "title": "Кратки лични местоимения (обектни) — A2",
        "emoji": "🙋",
        "sections": [
          {
            "type": "intro",
            "text": "Короткі («ненаголошені») об'єктні форми стоять безпосередньо перед дієсловом (крім наказового способу) і вживаються значно частіше за повні.",
            "en": {
              "text": "Short ('unstressed') object forms go directly before the verb (except in the imperative) and are used far more often than the full forms."
            }
          },
          {
            "type": "table",
            "title": "Короткі форми",
            "rows": [
              [
                "ме / ми",
                "мене / мені"
              ],
              [
                "те / ти",
                "тебе / тобі"
              ],
              [
                "го / му; я / ѝ",
                "його / йому; її / їй"
              ],
              [
                "ни / ни",
                "нас / нам"
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
                "Виждам го.",
                "Я його бачу."
              ],
              [
                "Дай ми го.",
                "Дай мені це."
              ]
            ]
          }
        ],
        "titleEn": "Short Personal Pronouns (Clitics) — A2"
      },
      {
        "id": "possessive-pronouns",
        "title": "Притежателни местоимения — A1",
        "emoji": "🙋",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійні займенники узгоджуються з іменником, який вони визначають, у роді й числі.",
            "en": {
              "text": "Possessive pronouns agree with the noun they modify in gender and number."
            }
          },
          {
            "type": "table",
            "title": "мой / твой / негов",
            "rows": [
              [
                "моят/моята/моето",
                "мій/моя/моє"
              ],
              [
                "твоят/твоята/твоето",
                "твій/твоя/твоє"
              ],
              [
                "неговият/нейният",
                "його/її"
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
                "Моята къща е голяма.",
                "Мій дім великий."
              ]
            ]
          }
        ],
        "titleEn": "Possessive Pronouns — A1"
      },
      {
        "id": "possessive-short-forms",
        "title": "Кратки притежателни форми (ми, ти, му...) — A2",
        "emoji": "🙋",
        "sections": [
          {
            "type": "intro",
            "text": "Розмовний варіант присвійності — короткі форми (ми, ти, му, ѝ, ни, ви, им), приєднані після іменника з артиклем, замінюють повні присвійні займенники.",
            "en": {
              "text": "A colloquial way to express possession — short forms (ми, ти, му, ѝ, ни, ви, им) attached after the article-bearing noun replace the full possessive pronouns."
            }
          },
          {
            "type": "table",
            "title": "Короткі присвійні форми",
            "rows": [
              [
                "къщата ми",
                "мій дім (букв. дім-мій)"
              ],
              [
                "баща ти",
                "твій батько"
              ],
              [
                "колата му",
                "його машина"
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
                "Майка ми е лекар.",
                "Моя мама лікарка."
              ]
            ]
          }
        ],
        "titleEn": "Short Possessive Forms (Ми, Ти, Му) — A2"
      },
      {
        "id": "demonstrative-pronouns",
        "title": "Показателни местоимения (този/онзи) — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Този (цей) вказує на ближче, онзи/оня (той) — на дальше; обидва узгоджуються з іменником у роді й числі.",
            "en": {
              "text": "Този (this) points to something near, онзи/оня (that) to something farther; both agree with the noun in gender and number."
            }
          },
          {
            "type": "table",
            "title": "този / онзи",
            "rows": [
              [
                "този/тази/това",
                "цей/ця/це"
              ],
              [
                "тези",
                "ці"
              ],
              [
                "онзи/онази/онова",
                "той/та/те"
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
                "Тази книга е интересна.",
                "Ця книга цікава."
              ]
            ]
          }
        ],
        "titleEn": "Demonstrative Pronouns (Този/Онзи) — A1"
      },
      {
        "id": "relative-pronouns",
        "title": "Относителни местоимения (който, което) — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Който/която/което/които узгоджуються з іменником, до якого відносяться, у роді й числі.",
            "en": {
              "text": "Който/която/което/които agree with the noun they refer to in gender and number."
            }
          },
          {
            "type": "table",
            "title": "който",
            "rows": [
              [
                "мъжът, който говори",
                "чоловік, який говорить"
              ],
              [
                "книгата, която четох",
                "книга, яку я прочитав"
              ],
              [
                "децата, които играят",
                "діти, які грають"
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
                "Човекът, който видях, беше висок.",
                "Людина, яку я бачив, була висока."
              ]
            ]
          }
        ],
        "titleEn": "Relative Pronouns (Който) — B1"
      },
      {
        "id": "interrogative-pronouns",
        "title": "Въпросителни местоимения (кой, какво, колко) — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Кой (хто/який) узгоджується з родом і числом; какво (що) і колко (скільки) мають свої особливості.",
            "en": {
              "text": "Кой (who/which) agrees with gender and number; какво (what) and колко (how much) have their own forms."
            }
          },
          {
            "type": "table",
            "title": "кой / какво / колко",
            "rows": [
              [
                "кой, коя, кое",
                "хто/який, яка, яке"
              ],
              [
                "какво",
                "що (незмінне)"
              ],
              [
                "колко",
                "скільки (незмінне)"
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
                "Кой е той?",
                "Хто це?"
              ],
              [
                "Колко струва?",
                "Скільки коштує?"
              ]
            ]
          }
        ],
        "titleEn": "Interrogative Pronouns (Кой, Какво, Колко) — A1"
      },
      {
        "id": "indefinite-pronouns",
        "title": "Неопределителни местоимения (някой, никой, всеки) — B1",
        "emoji": "🔘",
        "sections": [
          {
            "type": "intro",
            "text": "Неозначені займенники: някой (хтось), никой (ніхто), всеки (кожен), нещо (щось), нищо (нічого).",
            "en": {
              "text": "Indefinite pronouns: някой (someone), никой (no one), всеки (each/every), нещо (something), нищо (nothing)."
            }
          },
          {
            "type": "table",
            "title": "Основні неозначені займенники",
            "rows": [
              [
                "някой",
                "хтось"
              ],
              [
                "никой",
                "ніхто"
              ],
              [
                "всеки",
                "кожен"
              ],
              [
                "нещо / нищо",
                "щось / нічого"
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
                "Някой позвъни.",
                "Хтось подзвонив."
              ],
              [
                "Никой не знае.",
                "Ніхто не знає."
              ]
            ]
          }
        ],
        "titleEn": "Indefinite Pronouns (Някой, Никой, Всеки) — B1"
      },
      {
        "id": "clitic-placement",
        "title": "Позиция на кратките местоимения в изречението — B1",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Короткі займенники стоять перед дієсловом у стверджувальних реченнях, але після дієслова в наказовому способі та коли речення починається з дієслова.",
            "en": {
              "text": "Short pronouns come before the verb in statements, but after the verb in the imperative and when the sentence starts with the verb."
            }
          },
          {
            "type": "table",
            "title": "Позиція займенника",
            "rows": [
              [
                "Аз го виждам.",
                "перед дієсловом"
              ],
              [
                "Дай ми го!",
                "після наказового способу"
              ],
              [
                "Виждам го.",
                "після дієслова на початку речення"
              ]
            ]
          },
          {
            "type": "note",
            "title": "Подвійні короткі форми",
            "text": "Коли поєднуються непрямий і прямий об'єктні займенники, непрямий іде першим: Дай ми го! (Дай мені це!)",
            "en": {
              "title": "Double clitics",
              "text": "When indirect and direct object pronouns combine, the indirect one comes first: Дай ми го! (Give it to me!)"
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
                "Той ми го каза вчера.",
                "Він сказав це мені вчора."
              ]
            ]
          }
        ],
        "titleEn": "Placement of Short Pronouns — B1"
      },
      {
        "id": "adjective-agreement",
        "title": "Съгласуване на прилагателното — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник узгоджується з іменником у роді й числі, стоїть перед іменником і теж набуває артикля.",
            "en": {
              "text": "An adjective agrees with the noun in gender and number, precedes the noun, and also takes the article."
            }
          },
          {
            "type": "table",
            "title": "хубав (гарний) — узгодження",
            "rows": [
              [
                "хубав мъж / хубавият мъж",
                "гарний чоловік / цей гарний чоловік"
              ],
              [
                "хубава жена",
                "гарна жінка"
              ],
              [
                "хубаво дете",
                "гарна дитина"
              ],
              [
                "хубави хора",
                "гарні люди"
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
                "Имам червена кола.",
                "У мене червона машина."
              ]
            ]
          }
        ],
        "titleEn": "Adjective Agreement — A1"
      },
      {
        "id": "comparative-superlative",
        "title": "Степени за сравнение (по-, най-) — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Ступені порівняння утворюються префіксами по- (вищий) і най- (найвищий) перед прикметником.",
            "en": {
              "text": "The degrees of comparison are formed with the prefixes по- (comparative) and най- (superlative) before the adjective."
            }
          },
          {
            "type": "table",
            "title": "по- / най-",
            "rows": [
              [
                "хубав → по-хубав → най-хубав",
                "гарний → гарніший → найгарніший"
              ],
              [
                "голям → по-голям → най-голям",
                "великий → більший → найбільший"
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
                "София е по-голяма от Пловдив.",
                "Софія більша за Пловдив."
              ]
            ]
          }
        ],
        "titleEn": "Degrees of Comparison (По-, Най-) — A2"
      },
      {
        "id": "numbers-cardinal",
        "title": "Числителни бройни — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Числа 1 і 2 узгоджуються за родом; решта незмінні.",
            "en": {
              "text": "The numbers 1 and 2 agree with gender; the rest are invariable."
            }
          },
          {
            "type": "table",
            "title": "1–10",
            "rows": [
              [
                "един / една / едно",
                "1"
              ],
              [
                "два / две",
                "2"
              ],
              [
                "три, четири, пет...десет",
                "3–10"
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
                "Имам две сестри.",
                "У мене дві сестри."
              ]
            ]
          }
        ],
        "titleEn": "Cardinal Numbers — A1"
      },
      {
        "id": "numbers-ordinal",
        "title": "Числителни редни — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Порядкові числівники узгоджуються з іменником, як прикметники з трьома закінченнями.",
            "en": {
              "text": "Ordinal numbers agree with the noun, like three-ending adjectives."
            }
          },
          {
            "type": "table",
            "title": "1-й – 5-й",
            "rows": [
              [
                "първи, първа, първо",
                "1-й"
              ],
              [
                "втори",
                "2-й"
              ],
              [
                "трети, четвърти, пети",
                "3-й, 4-й, 5-й"
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
                "Живея на третия етаж.",
                "Я живу на третьому поверсі."
              ]
            ]
          }
        ],
        "titleEn": "Ordinal Numbers — A2"
      },
      {
        "id": "numbers-special-form",
        "title": "Специална форма за мъжки лица (двама, трима) — B1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Унікальна риса болгарської — для позначення групи чоловіків (людей) числа 2–6 мають окрему особову форму.",
            "en": {
              "text": "A unique Bulgarian feature — for referring to a group of men (people), the numbers 2–6 have a distinct personal form."
            }
          },
          {
            "type": "table",
            "title": "Особові числівники",
            "rows": [
              [
                "двама мъже",
                "двоє чоловіків"
              ],
              [
                "трима студенти",
                "троє студентів"
              ],
              [
                "четирима приятели",
                "четверо друзів"
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
                "Дойдоха петима гости.",
                "Прийшло п'ятеро гостей."
              ]
            ]
          }
        ],
        "titleEn": "Personal Numeral Forms (Двама, Трима) — B1"
      },
      {
        "id": "prepositions-basic",
        "title": "Основни предлози (в, на, с, от, за) — A1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Оскільки болгарська втратила відмінки, прийменники несуть основне граматичне навантаження — форма іменника після них не змінюється.",
            "en": {
              "text": "Since Bulgarian lost its case system, prepositions carry most of the grammatical load — the noun form after them doesn't change."
            }
          },
          {
            "type": "table",
            "title": "в / на / с / от / за",
            "rows": [
              [
                "в София",
                "у Софії"
              ],
              [
                "на масата",
                "на столі"
              ],
              [
                "с приятел",
                "з другом"
              ],
              [
                "от България",
                "з Болгарії"
              ],
              [
                "за теб",
                "для тебе"
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
                "Живея в София.",
                "Я живу в Софії."
              ]
            ]
          }
        ],
        "titleEn": "Basic Prepositions (В, На, С, От, За) — A1"
      },
      {
        "id": "prepositions-other",
        "title": "Други предлози (без, до, през, между) — B1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Інші вживані прийменники: без (без), до (до/біля), през (через/протягом), между (між).",
            "en": {
              "text": "Other common prepositions: без (without), до (to/next to), през (through/during), между (between)."
            }
          },
          {
            "type": "table",
            "title": "без / до / през / между",
            "rows": [
              [
                "без захар",
                "без цукру"
              ],
              [
                "до вратата",
                "біля дверей"
              ],
              [
                "през лятото",
                "влітку"
              ],
              [
                "между нас",
                "між нами"
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
                "Ще се видим след работа.",
                "Побачимось після роботи."
              ]
            ]
          }
        ],
        "titleEn": "Other Prepositions (Без, До, През, Между) — B1"
      },
      {
        "id": "word-order",
        "title": "Словоред в изречението — A2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок — SVO, але завдяки коротким займенникам і артиклю-суфіксу порядок доволі гнучкий і часто змінюється для акценту.",
            "en": {
              "text": "The basic order is SVO, but thanks to short pronouns and the suffixed article, word order is fairly flexible and often changes for emphasis."
            }
          },
          {
            "type": "table",
            "title": "Гнучкий порядок",
            "rows": [
              [
                "Иван обича Мария.",
                "Іван любить Марію. (нейтрально)"
              ],
              [
                "Мария обича Иван.",
                "Марію любить Іван. (акцент)"
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
                "Утре заминавам.",
                "Завтра я їду."
              ]
            ]
          }
        ],
        "titleEn": "Word Order — A2"
      },
      {
        "id": "conjunctions-coordinating",
        "title": "Съчинителни съюзи (и, или, но) — A1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Сурядні сполучники з'єднують рівнозначні слова чи речення.",
            "en": {
              "text": "Coordinating conjunctions connect equal words or clauses."
            }
          },
          {
            "type": "markers",
            "title": "Основні сурядні сполучники",
            "items": [
              "и (і)",
              "или (або)",
              "но/а (але)",
              "обаче (проте)",
              "нито...нито (ні...ні)"
            ],
            "en": {
              "title": "Main coordinating conjunctions"
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
                "Искам кафе и вода.",
                "Я хочу каву і воду."
              ]
            ]
          }
        ],
        "titleEn": "Coordinating Conjunctions (И, Или, Но) — A1"
      },
      {
        "id": "conjunctions-subordinating",
        "title": "Подчинителни съюзи (защото, ако, че) — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Підрядні сполучники вводять залежне речення: причини, умови, наслідку тощо.",
            "en": {
              "text": "Subordinating conjunctions introduce a dependent clause: cause, condition, result, etc."
            }
          },
          {
            "type": "markers",
            "title": "Основні підрядні сполучники",
            "items": [
              "защото (тому що)",
              "ако (якщо)",
              "че (що)",
              "докато (поки)",
              "въпреки че (хоча)"
            ],
            "en": {
              "title": "Main subordinating conjunctions"
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
                "Не дойдох, защото бях болен.",
                "Я не прийшов, бо був хворий."
              ]
            ]
          }
        ],
        "titleEn": "Subordinating Conjunctions (Защото, Ако, Че) — B1"
      },
      {
        "id": "negation-nuances",
        "title": "Нюанси на отрицанието — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від англійської, подвійне заперечення в болгарській нормальне й обов'язкове з неозначеними займенниками.",
            "en": {
              "text": "Unlike English, double negation is normal and required in Bulgarian with indefinite pronouns."
            }
          },
          {
            "type": "table",
            "title": "Подвійне заперечення",
            "rows": [
              [
                "Нямам нищо.",
                "У мене нічого немає."
              ],
              [
                "Никой не дойде.",
                "Ніхто не прийшов."
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
                "Не знам нищо за това.",
                "Я нічого про це не знаю."
              ]
            ]
          }
        ],
        "titleEn": "Double Negation — B1"
      },
      {
        "id": "question-words",
        "title": "Въпросителни думи (къде, кога, защо) — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питальні слова стоять на початку речення.",
            "en": {
              "text": "Question words go at the start of the sentence."
            }
          },
          {
            "type": "markers",
            "title": "Питальні слова",
            "items": [
              "къде? (де?)",
              "кога? (коли?)",
              "защо? (чому?)",
              "как? (як?)",
              "колко? (скільки?)"
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
                "Къде живееш?",
                "Де ти живеш?"
              ]
            ]
          }
        ],
        "titleEn": "Question Words (Къде, Кога, Защо) — A1"
      },
      {
        "id": "reflexive-verbs",
        "title": "Възвратни глаголи (се/си) — A2",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотні дієслова беруть незмінну частку се (прямий об'єкт) або си (непрямий об'єкт) незалежно від особи.",
            "en": {
              "text": "Reflexive verbs take the invariable particle се (direct object) or си (indirect object), regardless of person."
            }
          },
          {
            "type": "table",
            "title": "се / си",
            "rows": [
              [
                "мия се",
                "я миюся"
              ],
              [
                "обличам се",
                "я одягаюся"
              ],
              [
                "купувам си",
                "я купую собі"
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
                "Той се къпе сутрин.",
                "Він приймає душ вранці."
              ]
            ]
          }
        ],
        "titleEn": "Reflexive Verbs (Се/Си) — A2"
      },
      {
        "id": "impersonal-constructions",
        "title": "Безлични конструкции (трябва, може) — A2",
        "emoji": "☁️",
        "sections": [
          {
            "type": "intro",
            "text": "Безособові конструкції (трябва — треба, може — можна) незмінні й поєднуються з да + дієсловом.",
            "en": {
              "text": "Impersonal constructions (трябва — must, може — can/may) are invariable and combine with да + verb."
            }
          },
          {
            "type": "table",
            "title": "трябва / може",
            "rows": [
              [
                "трябва да отида",
                "мені треба піти"
              ],
              [
                "може да дойдеш",
                "ти можеш прийти"
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
                "Трябва да тръгвам.",
                "Мені треба йти."
              ]
            ]
          }
        ],
        "titleEn": "Impersonal Constructions (Трябва, Може) — A2"
      },
      {
        "id": "modal-expressions",
        "title": "Модални изрази (искам да, мога да) — A1",
        "emoji": "🧠",
        "sections": [
          {
            "type": "intro",
            "text": "Модальність виражається дієсловом + да + інше дієслово (болгарська не має окремого інфінітива).",
            "en": {
              "text": "Modality is expressed with a verb + да + another verb (Bulgarian has no separate infinitive)."
            }
          },
          {
            "type": "table",
            "title": "Модальні конструкції",
            "rows": [
              [
                "искам да...",
                "я хочу..."
              ],
              [
                "мога да...",
                "я можу..."
              ],
              [
                "знам да...",
                "я вмію..."
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
                "Мога да плувам.",
                "Я вмію плавати."
              ]
            ]
          }
        ],
        "titleEn": "Modal Expressions (Искам Да, Мога Да) — A1"
      },
      {
        "id": "da-constructions",
        "title": "Конструкции с \"да\" вместо инфинитив — A2",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Болгарська втратила інфінітив — там, де інші мови використовують «to + дієслово», болгарська використовує да + дієслово в теперішньому часі, узгоджене з підметом.",
            "en": {
              "text": "Bulgarian lost the infinitive — where other languages use 'to + verb', Bulgarian uses да + the present-tense verb, agreeing with the subject."
            }
          },
          {
            "type": "table",
            "title": "да + сегашно време",
            "rows": [
              [
                "Искам да ям.",
                "Я хочу їсти."
              ],
              [
                "Искаш ли да дойдеш?",
                "Ти хочеш прийти?"
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
                "Обичам да чета.",
                "Я люблю читати."
              ]
            ]
          }
        ],
        "titleEn": "Да-Constructions (Replacing the Infinitive) — A2"
      },
      {
        "id": "participles-active",
        "title": "Причастия — деятелно сегашно/минало — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Дійсний дієприкметник сучасний (-щ) описує одночасну дію; дійсний дієприкметник минулий (-л) вживається для утворення складених часів і як прикметник.",
            "en": {
              "text": "The present active participle (-щ) describes a simultaneous action; the past active participle (-л) is used to form compound tenses and as an adjective."
            }
          },
          {
            "type": "table",
            "title": "-щ / -л",
            "rows": [
              [
                "четящ (той, който чете)",
                "той, що читає"
              ],
              [
                "чел (съм чел)",
                "читав (я читав)"
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
                "Спящото дете е тихо.",
                "Дитина, що спить, тиха."
              ]
            ]
          }
        ],
        "titleEn": "Active Participles — B1"
      },
      {
        "id": "participles-passive",
        "title": "Причастия — страдателно — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Страдальний дієприкметник (-н/-т) узгоджується з іменником, як прикметник, і виражає стан у результаті дії.",
            "en": {
              "text": "The passive participle (-н/-т) agrees with the noun like an adjective and expresses a state resulting from an action."
            }
          },
          {
            "type": "table",
            "title": "-н / -т",
            "rows": [
              [
                "написан",
                "написаний"
              ],
              [
                "затворен",
                "зачинений"
              ],
              [
                "уморен",
                "втомлений"
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
                "Вратата е затворена.",
                "Двері зачинені."
              ]
            ]
          }
        ],
        "titleEn": "Passive Participles — B1"
      },
      {
        "id": "verbal-adverb-uses",
        "title": "Употреба на деепричастието — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприслівник (-йки, незмінний) описує одночасну дію того самого підмета, аналог англійського «-ing».",
            "en": {
              "text": "The verbal adverb (-йки, invariable) describes a simultaneous action of the same subject, similar to English '-ing'."
            }
          },
          {
            "type": "table",
            "title": "-йки",
            "rows": [
              [
                "четейки",
                "читаючи"
              ],
              [
                "вървейки",
                "ідучи"
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
                "Вървейки, той мислеше за нея.",
                "Ідучи, він думав про неї."
              ]
            ]
          }
        ],
        "titleEn": "The Verbal Adverb (-Йки) — B1"
      },
      {
        "id": "passive-voice",
        "title": "Страдателен залог — B1",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний стан утворюється съм + страдателно причастие, узгоджене з підметом.",
            "en": {
              "text": "The passive voice is formed with съм + passive participle, agreeing with the subject."
            }
          },
          {
            "type": "table",
            "title": "съм + причастие",
            "rows": [
              [
                "Книгата е написана от нея.",
                "Книга написана нею."
              ],
              [
                "Вратите са затворени.",
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
                "Къщата беше продадена.",
                "Дім було продано."
              ]
            ]
          }
        ],
        "titleEn": "Passive Voice — B1"
      },
      {
        "id": "genitive-possession-with-na",
        "title": "Притежание с предлог \"на\" — A2",
        "emoji": "🏠",
        "sections": [
          {
            "type": "intro",
            "text": "Оскільки родового відмінка немає, належність виражають прийменником на після іменника-власника.",
            "en": {
              "text": "Since there is no genitive case, possession is expressed with the preposition на after the owner noun."
            }
          },
          {
            "type": "table",
            "title": "на для належності",
            "rows": [
              [
                "колата на Иван",
                "машина Івана"
              ],
              [
                "къщата на родителите ми",
                "дім моїх батьків"
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
                "Това е книгата на сестра ми.",
                "Це книга моєї сестри."
              ]
            ]
          }
        ],
        "titleEn": "Possession with На — A2"
      },
      {
        "id": "days-of-week",
        "title": "Дни от седмицата — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Дні тижня вживаються з прийменником в для позначення «у...».",
            "en": {
              "text": "Days of the week are used with в to mean 'on...'."
            }
          },
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "понеделник",
                "понеділок"
              ],
              [
                "вторник",
                "вівторок"
              ],
              [
                "сряда",
                "середа"
              ],
              [
                "четвъртък",
                "четвер"
              ],
              [
                "петък",
                "п'ятниця"
              ],
              [
                "събота",
                "субота"
              ],
              [
                "неделя",
                "неділя"
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
                "Ще се видим в петък.",
                "Побачимось у п'ятницю."
              ]
            ]
          }
        ],
        "titleEn": "Days of the Week — A1"
      },
      {
        "id": "months-dates",
        "title": "Месеци и дати — A2",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Дата вказується порядковим числівником + місяць, обидва в чоловічому роді.",
            "en": {
              "text": "Dates use an ordinal number + month, both in the masculine form."
            }
          },
          {
            "type": "table",
            "title": "Місяці й дата",
            "rows": [
              [
                "януари, февруари, март...",
                "січень, лютий, березень..."
              ],
              [
                "първи януари",
                "перше січня"
              ],
              [
                "на пети май",
                "5-го травня"
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
                "Роден съм през май.",
                "Я народився у травні."
              ]
            ]
          }
        ],
        "titleEn": "Months & Dates — A2"
      },
      {
        "id": "telling-time",
        "title": "Часът — A2",
        "emoji": "🕒",
        "sections": [
          {
            "type": "intro",
            "text": "Питання про час: Колко е часът? Відповідь будується числівником + часа/часът.",
            "en": {
              "text": "To ask the time: Колко е часът? The answer uses the number + часа/часът."
            }
          },
          {
            "type": "table",
            "title": "Вказування часу",
            "rows": [
              [
                "Часът е три.",
                "Третя година."
              ],
              [
                "Три и половина.",
                "Пів на четверту."
              ],
              [
                "Три без петнайсет.",
                "Без п'ятнадцяти три."
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
                "Колко е часът?",
                "Котра година?"
              ]
            ]
          }
        ],
        "titleEn": "Telling Time — A2"
      },
      {
        "id": "diminutives",
        "title": "Умалителни имена (-че, -ка, -ица) — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Пестливі суфікси надають значення «маленький» або ласкавого відтінку: -че (сер.), -ка/-ица (жін.), -ец/-чо (чол.).",
            "en": {
              "text": "Diminutive suffixes add a 'small' or affectionate meaning: -че (neut.), -ка/-ица (fem.), -ец/-чо (masc.)."
            }
          },
          {
            "type": "table",
            "title": "Пестливі суфікси",
            "rows": [
              [
                "куче → кученце",
                "пес → песик"
              ],
              [
                "книга → книжка",
                "книга → книжечка"
              ],
              [
                "град → градче",
                "місто → містечко"
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
                "Какво сладко коте!",
                "Яке миле кошеня!"
              ]
            ]
          }
        ],
        "titleEn": "Diminutives (-Че, -Ка, -Ица) — B1"
      },
      {
        "id": "adverbs",
        "title": "Наречия — A2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Більшість прислівників способу дії збігаються з формою середнього роду прикметника.",
            "en": {
              "text": "Most manner adverbs are identical to the neuter form of the adjective."
            }
          },
          {
            "type": "table",
            "title": "Прикметник → прислівник",
            "rows": [
              [
                "добър → добре",
                "хороший → добре"
              ],
              [
                "бърз → бързо",
                "швидкий → швидко"
              ],
              [
                "лесен → лесно",
                "легкий → легко"
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
                "Той говори бавно.",
                "Він говорить повільно."
              ]
            ]
          }
        ],
        "titleEn": "Adverbs — A2"
      },
      {
        "id": "quantifiers",
        "title": "Количествени определения (много, малко, доста) — A2",
        "emoji": "⚖️",
        "sections": [
          {
            "type": "intro",
            "text": "Кількісні слова много (багато), малко (мало), доста (достатньо) незмінні й стоять перед іменником.",
            "en": {
              "text": "Quantity words много (much/many), малко (little/few), доста (quite a lot) are invariable and precede the noun."
            }
          },
          {
            "type": "table",
            "title": "много / малко / доста",
            "rows": [
              [
                "много работа",
                "багато роботи"
              ],
              [
                "малко пари",
                "мало грошей"
              ],
              [
                "доста време",
                "достатньо часу"
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
                "Имам много приятели.",
                "У мене багато друзів."
              ]
            ]
          }
        ],
        "titleEn": "Quantifiers (Много, Малко, Доста) — A2"
      },
      {
        "id": "irregular-comparatives",
        "title": "Неправилни степени за сравнение — B1",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька дуже вживаних прикметників мають нерегулярний вищий ступінь, який слід запам'ятати окремо.",
            "en": {
              "text": "A few very common adjectives have irregular comparative forms that must be memorized separately."
            }
          },
          {
            "type": "table",
            "title": "Неправильні ступені порівняння",
            "rows": [
              [
                "добър → по-добър",
                "хороший → кращий"
              ],
              [
                "лош → по-лош",
                "поганий → гірший"
              ],
              [
                "голям → по-голям",
                "великий → більший"
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
                "Днес е по-добре.",
                "Сьогодні краще."
              ]
            ]
          }
        ],
        "titleEn": "Irregular Comparatives — B1"
      },
      {
        "id": "common-idioms",
        "title": "Разговорни изрази — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "intro",
            "text": "Стійкі вирази, які використовуються щодня і не завжди перекладаються дослівно.",
            "en": {
              "text": "Fixed expressions used every day, not always translated word-for-word."
            }
          },
          {
            "type": "table",
            "title": "Поширені вирази",
            "rows": [
              [
                "Как си?",
                "Як справи?"
              ],
              [
                "Наздраве!",
                "Будьмо!/Будь здоровий!"
              ],
              [
                "Няма проблем.",
                "Немає проблем."
              ],
              [
                "Дай Боже!",
                "Дай Боже!"
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
                "Как си? — Добре, а ти?",
                "Як справи? — Добре, а ти?"
              ]
            ]
          }
        ],
        "titleEn": "Common Expressions — B1"
      },
      {
        "id": "formal-informal",
        "title": "Ти срещу Вие (учтивост) — A1",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Ти — неформальне звертання, Вие — ввічливе до незнайомих/старших (і звичайна множина «ви»), з дієсловом у 2-й особі множини.",
            "en": {
              "text": "Ти is informal, Вие is polite for strangers/elders (and the ordinary plural 'you'), used with the verb in 2nd person plural."
            }
          },
          {
            "type": "table",
            "title": "ти vs Вие",
            "rows": [
              [
                "Как си? (ти)",
                "Як справи? (неформально)"
              ],
              [
                "Как сте? (Вие)",
                "Як ви? (ввічливо)"
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
                "Вие ли сте новият колега?",
                "Ви новий колега?"
              ]
            ]
          }
        ],
        "titleEn": "Ти vs Вие (Formality) — A1"
      },
      {
        "id": "existential-ima",
        "title": "Конструкция \"има\" — A2",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Има (є) — незмінна конструкція для однини й множини, аналог англійського «there is/are».",
            "en": {
              "text": "Има (there is/are) is an invariable construction for both singular and plural, like English 'there is/are'."
            }
          },
          {
            "type": "table",
            "title": "има / няма",
            "rows": [
              [
                "Има един проблем.",
                "Є одна проблема."
              ],
              [
                "Има много книги.",
                "Є багато книг."
              ],
              [
                "Няма нищо.",
                "Немає нічого."
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
                "Има ли аптека наблизо?",
                "Тут поблизу є аптека?"
              ]
            ]
          }
        ],
        "titleEn": "The Construction Има (There Is/Are) — A2"
      },
      {
        "id": "time-expressions-relative",
        "title": "Изрази за време (вече, още, скоро) — A2",
        "emoji": "⏱️",
        "sections": [
          {
            "type": "intro",
            "text": "Вече (вже), още (ще), вече не (більше не) — ключові слова для опису стану дії в часі.",
            "en": {
              "text": "Вече (already), още (still/yet), вече не (no longer) — key words for describing the state of an action over time."
            }
          },
          {
            "type": "table",
            "title": "вече / още / скоро",
            "rows": [
              [
                "Вече го направих.",
                "Я вже це зробив."
              ],
              [
                "Още ли си тук?",
                "Ти ще тут?"
              ],
              [
                "Скоро ще си тръгна.",
                "Скоро я піду."
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
                "Вече не работи тук.",
                "Він тут більше не працює."
              ]
            ]
          }
        ],
        "titleEn": "Time Expressions (Вече, Още, Скоро) — A2"
      },
      {
        "id": "stress-rules",
        "title": "Ударение — A2",
        "emoji": "✏️",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від польської чи чеської, наголос у болгарській вільний і може падати на будь-який склад, тому його слід запам'ятовувати для кожного слова окремо.",
            "en": {
              "text": "Unlike Polish or Czech, Bulgarian stress is free and can fall on any syllable, so it must be memorized for each word individually."
            }
          },
          {
            "type": "table",
            "title": "Наголос змінює значення",
            "rows": [
              [
                "пари (гроші) vs пара́ (пара)",
                "різний наголос — різне значення"
              ],
              [
                "Иван, момиче",
                "наголос — за словником"
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
                "Нямам пари.",
                "У мене немає грошей."
              ]
            ]
          }
        ],
        "titleEn": "Stress Rules — A2"
      },
      {
        "id": "seasons-weather",
        "title": "Сезони и време (метеорология) — A1",
        "emoji": "🌦️",
        "sections": [
          {
            "type": "intro",
            "text": "Пори року вживаються з прийменником през (протягом); погодні вирази часто безособові.",
            "en": {
              "text": "Seasons are used with the preposition през (during); weather expressions are often impersonal."
            }
          },
          {
            "type": "table",
            "title": "Сезони й погода",
            "rows": [
              [
                "пролет, лято, есен, зима",
                "весна, літо, осінь, зима"
              ],
              [
                "Вали дъжд.",
                "Іде дощ."
              ],
              [
                "Навън е студено.",
                "Надворі холодно."
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
                "През зимата вали сняг.",
                "Взимку йде сніг."
              ]
            ]
          }
        ],
        "titleEn": "Seasons & Weather — A1"
      },
      {
        "id": "greetings-common-phrases",
        "title": "Поздрави и учтиви изрази — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "intro",
            "text": "Основні формули ввічливості для привітань і подяки.",
            "en": {
              "text": "Basic politeness formulas for greetings and thanks."
            }
          },
          {
            "type": "table",
            "title": "Основні фрази",
            "rows": [
              [
                "Здравей / Здравейте",
                "Привіт / Вітаю (ввічл.)"
              ],
              [
                "Благодаря",
                "Дякую"
              ],
              [
                "Моля",
                "Будь ласка"
              ],
              [
                "Довиждане",
                "До побачення"
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
                "Благодаря много!",
                "Дуже дякую!"
              ]
            ]
          }
        ],
        "titleEn": "Greetings & Common Phrases — A1"
      }
    ]
  },
  {
    "id": "exceptions",
    "title": "Изключения",
    "titleEn": "Exceptions",
    "emoji": "⚠️",
    "rules": [
      {
        "id": "irregular-verbs",
        "title": "Неправилни глаголи — A2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька найуживаніших дієслів мають нерегулярне відмінювання в теперішньому часі й аористі, які слід просто запам'ятати.",
            "en": {
              "text": "A few of the most common verbs have irregular present-tense and Aorist conjugations that must simply be memorized."
            }
          },
          {
            "type": "table",
            "title": "Найпоширеніші нерегулярні дієслова",
            "rows": [
              [
                "съм → бях",
                "бути → був"
              ],
              [
                "ям → ядох",
                "їсти → з'їв"
              ],
              [
                "дам → дадох",
                "дати → дав"
              ],
              [
                "ида → идвах",
                "йти/приходити → йшов"
              ],
              [
                "мога → можах",
                "могти → зміг"
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
                "Ядох преди час.",
                "Я поїв годину тому."
              ]
            ]
          }
        ],
        "titleEn": "Irregular Verbs — A2"
      },
      {
        "id": "irregular-plurals",
        "title": "Неправилно множествено число — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі іменники утворюють множину не за стандартною парадигмою свого закінчення.",
            "en": {
              "text": "Some nouns form their plural outside their ending's standard pattern."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярні множини",
            "rows": [
              [
                "дете → деца",
                "дитина → діти"
              ],
              [
                "брат → братя",
                "брат → брати"
              ],
              [
                "син → синове",
                "син → сини"
              ],
              [
                "око → очи",
                "око → очі"
              ],
              [
                "ухо → уши",
                "вухо → вуха"
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
                "Братята ми живеят в чужбина.",
                "Мої брати живуть за кордоном."
              ]
            ]
          }
        ],
        "titleEn": "Irregular Plurals — B1"
      },
      {
        "id": "spelling-rules",
        "title": "Правописни особености (ъ, ь, звучни/беззвучни) — B1",
        "emoji": "✏️",
        "sections": [
          {
            "type": "intro",
            "text": "Літера ъ передає особливий звук, якого немає в українській; дзвінкі приголосні в кінці слова оглушуються на письмі й вимовляються глухо.",
            "en": {
              "text": "The letter ъ represents a distinct sound not found in Ukrainian; voiced consonants at the end of a word are devoiced in pronunciation but kept in spelling."
            }
          },
          {
            "type": "table",
            "title": "Правописні пастки",
            "rows": [
              [
                "българин, дъжд, някой",
                "звук ъ — щось середнє між «и» та «е»"
              ],
              [
                "град (вимовляється [грат])",
                "кінцеве д/б/г/з/в оглушуються у вимові"
              ],
              [
                "Ь тільки перед о (Ю, каньон)",
                "рідкісний, лише в кількох позиціях"
              ]
            ]
          },
          {
            "type": "tip",
            "title": "Порада",
            "text": "Оскільки вимова кінцевих приголосних не завжди відповідає написанню, перевіряйте правопис слова за словником, а не лише на слух.",
            "en": {
              "title": "Tip",
              "text": "Since the pronunciation of final consonants doesn't always match spelling, check a word's spelling in a dictionary rather than relying on sound alone."
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
                "Градът е красив.",
                "Місто гарне."
              ]
            ]
          }
        ],
        "titleEn": "Spelling Pitfalls (Ъ, Ь, Voicing) — B1"
      }
    ]
  }
];
