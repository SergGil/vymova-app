// Vymova — data/grammar-data/grammar_om.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_OM: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Maqaa Bakalchaa — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Оромо — мова найчисельнішого етносу Ефіопії, записується латинською абеткою кваалі з 1991 року.",
            "en": {
              "text": "Oromo, the language of Ethiopia's largest ethnic group, has been written in the Latin-based Qubee alphabet since 1991."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ani"
              ],
              [
                "ти",
                "ati"
              ],
              [
                "він / вона",
                "inni / isheen"
              ],
              [
                "ми",
                "nu"
              ],
              [
                "ви",
                "isin"
              ],
              [
                "вони",
                "isaan"
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
        "id": "marked-nominative",
        "title": "Haala Kaayyoo Mallattaa'aa — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від більшості мов, де саме додаток отримує окреме відмінкове закінчення, в оромо саме підмет (називний відмінок) позначається спеціальним закінченням, тоді як форма додатка збігається зі словниковою формою слова, — рідкісний тип відмінкової системи, який лінгвісти звуть 'маркованим номінативом'.",
            "en": {
              "text": "Unlike most languages, where it's the object that gets a special case ending, in Oromo it's the subject (nominative case) that's marked with a special ending, while the object form matches the word's plain dictionary form — a rare case-system type linguists call 'marked nominative'."
            }
          },
          {
            "type": "table",
            "title": "Приклад маркованого номінатива",
            "rows": [
              [
                "nam-tichi (чоловік, підмет, з позначкою)",
                "nama (чоловік, додаток, гола форма)"
              ]
            ],
            "en": {
              "title": "Marked Nominative Example"
            }
          }
        ],
        "titleEn": "Marked-Nominative Case System — B1"
      },
      {
        "id": "qubee-alfabeeta",
        "title": "Qubee: Alfabeeta Afaan Oromoo — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Абетку кваалі на латинській основі офіційно прийняли 1991 року після падіння режиму Менгісту — символічний розрив з ефіопською писемністю ге'ез, яку раніше нав'язували для запису оромо.",
            "en": {
              "text": "The Latin-based Qubee alphabet was officially adopted in 1991 after the fall of the Mengistu regime — a symbolic break from the Ethiopian Ge'ez script, which had previously been imposed for writing Oromo."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Qubeen bara 1991 fudhatame.",
                "Абетку кваалі прийняли 1991 року."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Qubee: The Oromo Latin Alphabet — A1"
      },
      {
        "id": "gadaa-system",
        "title": "Sirna Gadaa — A2",
        "emoji": "🏛️",
        "sections": [
          {
            "type": "intro",
            "text": "Традиційна система ґадаа — демократична система вікових класів, що визначає соціальну й політичну роль кожного покоління чоловіків через регулярні вісім-річні цикли, — визнана ЮНЕСКО нематеріальною спадщиною людства.",
            "en": {
              "text": "The traditional Gadaa system is a democratic age-grade system that determines each generation of men's social and political role through regular eight-year cycles — recognized by UNESCO as intangible human heritage."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Sirni Gadaa waggaa saddeettan hunda jijjiirama.",
                "Система ґадаа змінюється кожні вісім років."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Gadaa System — A2"
      },
      {
        "id": "negasion-i-preguntas",
        "title": "Dhoksuu fi Gaaffii — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється часткою hin перед дієсловом; питання без питального слова позначаються часткою moo чи висхідною інтонацією.",
            "en": {
              "text": "Negation is formed with the particle hin before the verb; yes/no questions are marked with the particle moo or rising intonation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ani hin beeku.",
                "Я не знаю."
              ],
              [
                "Ati ni dhufta?",
                "Ти прийдеш?"
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
        "id": "present-tense",
        "title": "Yeroo Ammaa: -a — A1",
        "emoji": "☀️",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній час утворюється особовими закінченнями, здебільшого на -a, доданими до основи дієслова, — позначає загальну дію чи факт.",
            "en": {
              "text": "The present tense is formed with person endings, mostly in -a, added to the verb stem — marking a general action or fact."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ani nan barsiisa.",
                "Я навчаю."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Tense: -a — A1"
      },
      {
        "id": "present-continuous-jira",
        "title": "Yeroo Ammaa Itti Fufaa: Jira — A2",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія в момент мовлення передається дієприслівником плюс допоміжне jira ('перебувати') — точний аналог тривалого часу.",
            "en": {
              "text": "An action in progress at the moment of speaking is expressed with the converb plus the auxiliary jira ('to be present') — a close analog of the continuous tense."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ani barsiisaa jira.",
                "Я саме навчаю."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Continuous: Jira — A2"
      },
      {
        "id": "past-tense",
        "title": "Yeroo Darbe: -e — A2",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий час утворюється суфіксом -e, доданим до основи дієслова, узгодженим з особою й числом підмета.",
            "en": {
              "text": "The past tense is formed with the suffix -e added to the verb stem, agreeing with the subject's person and number."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ani barsiise.",
                "Я навчав."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Past Tense: -e — A2"
      },
      {
        "id": "past-continuous-ture",
        "title": "Yeroo Darbe Itti Fufaa: Ture — B1",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія в минулому передається дієприслівником плюс допоміжне ture ('був') у минулому часі.",
            "en": {
              "text": "An ongoing past action is expressed with the converb plus the past auxiliary ture ('was')."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ani barsiisaa ture.",
                "Я саме навчав (тоді)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Past Continuous: Ture — B1"
      },
      {
        "id": "future-tense",
        "title": "Yeroo Fuulduraa: Ni... -a — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється часткою ni перед дієсловом теперішнього часу з наголосом на ствердженні — семантика майбутнього виводиться з контексту й часового прислівника.",
            "en": {
              "text": "The future is formed with the particle ni before the present-tense verb with assertive emphasis — the future meaning is drawn from context and a time adverb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Boru nan dhufa.",
                "Я прийду завтра."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Future Tense — A2"
      },
      {
        "id": "imperative-mood",
        "title": "Ajaja — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб однини — основа дієслова з окремим закінченням; множина додає суфікс -aa.",
            "en": {
              "text": "The singular imperative is the verb stem with a dedicated ending; the plural adds the suffix -aa."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Dhufi!",
                "Приходь!"
              ],
              [
                "Dhufaa!",
                "Приходьте!"
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
        "id": "jussive-mood-haa",
        "title": "Haa: Ajaja Sadaffaa — B1",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Юссивний спосіб на haa виражає побажання чи непряму спонуку до третьої особи — 'хай він зробить' — окрема граматична категорія, відмінна від прямого наказу.",
            "en": {
              "text": "The jussive mood with haa expresses a wish or indirect command toward a third person — 'may he do' — a distinct grammatical category from a direct imperative."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Haa dhufu.",
                "Хай він прийде."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Jussive Mood: Haa — B1"
      },
      {
        "id": "present-perfect",
        "title": "Yeroo Xumurame: -eera — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Перфект утворюється суфіксом -eera, доданим до основи дієслова, наголошуючи на теперішній актуальності завершеної дії.",
            "en": {
              "text": "The perfect is formed with the suffix -eera added to the verb stem, emphasizing the present relevance of a completed action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ani nyaadheera.",
                "Я вже поїв (результат актуальний)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Perfect: -eera — B1"
      },
      {
        "id": "pluperfect",
        "title": "Yeroo Darbe Xumurame — B2",
        "emoji": "⏮️",
        "sections": [
          {
            "type": "intro",
            "text": "Плюсквамперфект описує дію, завершену до іншої минулої дії; утворюється дієприкметником плюс допоміжне ture в минулому часі.",
            "en": {
              "text": "The pluperfect describes an action completed before another past action; formed with the participle plus the past auxiliary ture."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ani duraan nyaadhee ture.",
                "Я вже був поїв до того."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Pluperfect — B2"
      },
      {
        "id": "habitual-past",
        "title": "Amala Darbe — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Звичну дію в минулому передає дієприслівник плюс допоміжне ture, — 'бувало, робив' — та сама конструкція, що й тривалий минулий час, розрізнена контекстом.",
            "en": {
              "text": "A habitual past action is expressed with a converb plus the auxiliary ture — 'used to do' — the same construction as the past continuous, distinguished by context."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Yeroo ijoollee ani taphachaa ture.",
                "У дитинстві я, бувало, грав."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Habitual Past — B1"
      },
      {
        "id": "conditional-mood-yoo",
        "title": "Yoo: Haala Yaadamee — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовне речення вводиться сполучником yoo ('якщо'), а дієслово головного речення отримує майбутню чи умовну форму залежно від реальності умови.",
            "en": {
              "text": "A conditional sentence is introduced with the conjunction yoo ('if'), and the main clause's verb takes a future or conditional form depending on the reality of the condition."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Yoo bokkaan roobe, mana nan taa'a.",
                "Якщо піде дощ, я залишуся вдома."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional: Yoo — B1"
      },
      {
        "id": "potential-mood-dandau",
        "title": "Danda'uu: Dandeettii — B1",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Здатність чи можливість виражається складеним дієсловом з допоміжним danda'uu ('могти'), доданим після смислового дієслова.",
            "en": {
              "text": "Ability or possibility is expressed with the compound verb using the auxiliary danda'uu ('to be able'), added after the meaning verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ani Afaan Oromoo dubbachuu nan danda'a.",
                "Я можу говорити мовою оромо."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Potential: Danda'uu — B1"
      },
      {
        "id": "negative-future",
        "title": "Yeroo Fuulduraa Dhoksuu: Hin... -u — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення майбутньої дії поєднує частку hin перед дієсловом із закінченням -u замість звичайного -a, — окрема заперечна форма для майбутнього.",
            "en": {
              "text": "Negating a future action combines the particle hin before the verb with the ending -u instead of the ordinary -a — a distinct negative form for the future."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ani hin dhufu.",
                "Я не прийду."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negative Future: Hin... -u — B1"
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
        "id": "genitive-case",
        "title": "Haala Qabeenyaa — A2",
        "emoji": "🏠",
        "sections": [
          {
            "type": "intro",
            "text": "Родовий відмінок передається суфіксом -ii/-aa на іменнику-власнику, доданим перед предметом володіння, — та сама роль, що й прийменник 'з' в українській.",
            "en": {
              "text": "The genitive case is conveyed with the suffix -ii/-aa on the possessor noun, placed before the possessed item — the same role as the preposition 'of' in Ukrainian."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mana abbaa koo",
                "дім мого батька"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Genitive Case — A2"
      },
      {
        "id": "dative-case",
        "title": "Haala Kennamaa — A2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Давальний відмінок передається суфіксом -f/-if, доданим до іменника-отримувача дії.",
            "en": {
              "text": "The dative case is conveyed with the suffix -f/-if, added to the noun receiving the action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kitaaba mucaaf kenne.",
                "Він дав книгу дитині."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Dative Case — A2"
      },
      {
        "id": "ablative-case",
        "title": "Haala Ka'umsaa — B1",
        "emoji": "↩️",
        "sections": [
          {
            "type": "intro",
            "text": "Відкладний відмінок передається суфіксом -rraa, що позначає джерело чи вихідну точку руху — 'звідки, з'.",
            "en": {
              "text": "The ablative case is conveyed with the suffix -rraa, marking the source or starting point of movement — 'from where'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Finfinneerraa dhufe.",
                "Він прийшов з Фінфіне (Аддіс-Абеби)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ablative Case — B1"
      },
      {
        "id": "instrumental-case",
        "title": "Haala Meeshaa — B1",
        "emoji": "🛠️",
        "sections": [
          {
            "type": "intro",
            "text": "Орудний відмінок передається суфіксом -n/-dhaan, доданим до іменника-знаряддя дії.",
            "en": {
              "text": "The instrumental case is conveyed with the suffix -n/-dhaan, added to the instrument noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Qalamaan barreesse.",
                "Він писав ручкою."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Instrumental Case — B1"
      },
      {
        "id": "gender-agreement-m-f",
        "title": "Waliigaltee Saala — A2",
        "emoji": "⚥",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники мають чоловічий або жіночий рід, а прикметники й дієслова узгоджуються з ним через окреме закінчення, часто -tuu/-ittii для жіночого роду.",
            "en": {
              "text": "Nouns are masculine or feminine, and adjectives and verbs agree with this through a dedicated ending, often -tuu/-ittii for feminine."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "barsiisaa (учитель, ч.р.) / barsiiftuu (учителька, ж.р.)",
                "приклад роду"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Gender Agreement — A2"
      },
      {
        "id": "plural-formation",
        "title": "Baayina — A2",
        "emoji": "➕",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється суфіксом -oota/-wwan, доданим до основи іменника, — регулярне правило з кількома фонетичними варіантами.",
            "en": {
              "text": "The plural is formed with the suffix -oota/-wwan added to the noun stem — a regular rule with a few phonetic variants."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mana → manneen",
                "дім → доми"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Plural Formation — A2"
      },
      {
        "id": "demonstratives",
        "title": "Argisiiftuu: Kun, Sun — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Вказівне kun ('цей') позначає близький предмет, sun ('той') — далекий; обидва узгоджуються з родом іменника.",
            "en": {
              "text": "The demonstrative kun ('this') marks a near item, sun ('that') a far one; both agree with the noun's gender."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kitaabni kun",
                "ця книга"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Demonstratives: Kun, Sun — A1"
      },
      {
        "id": "possessive-construction",
        "title": "Qabeenya Ibsuu — A2",
        "emoji": "🏠",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійність передається присвійними прикметниками koo/kee/isaa, доданими після іменника-предмета володіння.",
            "en": {
              "text": "Possession is expressed with the possessive adjectives koo/kee/isaa, added after the possessed noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mana koo",
                "мій дім"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Possessive Construction — A2"
      },
      {
        "id": "comparison-caalaa",
        "title": "Wal Bira Qabuu: Caalaa — A2",
        "emoji": "⚖️",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняння вищого ступеня утворюється прикметником плюс caalaa ('більше, ніж'), доданим після предмета порівняння.",
            "en": {
              "text": "Comparison of superiority is formed with the adjective plus caalaa ('more than'), added after the compared item."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Inni ana caalaa dheeraa dha.",
                "Він вищий за мене."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparison with Caalaa — A2"
      },
      {
        "id": "superlative",
        "title": "Sadarkaa Ol'aanaa — B1",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь додає слово hunda ('усіх') до конструкції з caalaa, підсилюючи порівняння до значення абсолютної переваги.",
            "en": {
              "text": "The superlative adds the word hunda ('all') to the caalaa construction, intensifying the comparison to mean absolute superiority."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Inni hunda caalaa dheeraa dha.",
                "Він найвищий з усіх."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Superlative — B1"
      },
      {
        "id": "numerals-cardinal",
        "title": "Lakkoofsa Baay'inaa — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Кількісні числівники мають власні кушитські корені й ставляться перед іменником.",
            "en": {
              "text": "Cardinal numbers have their own Cushitic roots and are placed before the noun."
            }
          },
          {
            "type": "table",
            "title": "Числа",
            "rows": [
              [
                "tokko, lama, sadii",
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
        "id": "numerals-ordinal",
        "title": "Lakkoofsa Tartiibaa — A2",
        "emoji": "🥇",
        "sections": [
          {
            "type": "intro",
            "text": "Порядкові числівники утворюються суфіксом -ffaa, доданим до кількісного числівника.",
            "en": {
              "text": "Ordinal numbers are formed with the suffix -ffaa added to the cardinal number."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "sadaffaa",
                "третій"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ordinal Numbers: -ffaa — A2"
      },
      {
        "id": "question-words",
        "title": "Jechoota Gaaffii — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питальні слова maal (що), eenyu (хто), eessa (де), yoom (коли) зазвичай стоять на тому самому місці в реченні, де було б слово, яке вони заміняють.",
            "en": {
              "text": "The question words maal (what), eenyu (who), eessa (where), yoom (when) normally stand in the same sentence position the replaced word would occupy."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ati eessa deemta?",
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
        "id": "relative-clause-strategy",
        "title": "Ibsituu Walqabsiisaa — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Відносне підрядне речення вводиться незмінним словом kan, яке заміняє будь-який відмінюваний відносний займенник.",
            "en": {
              "text": "A relative clause is introduced by the invariant word kan, which replaces any declined relative pronoun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "namicha kan dubbatu",
                "чоловік, який говорить"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Clauses with Kan — B1"
      },
      {
        "id": "word-order-sov",
        "title": "Tartiiba Jechootaa: SOV — A1",
        "emoji": "↔️",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів — підмет-додаток-присудок, з дієсловом завжди в самому кінці речення.",
            "en": {
              "text": "The basic word order is subject-object-verb, with the verb always at the very end of the sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ani buna nan dhuga.",
                "Я п'ю каву (я-каву-п'ю)."
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
        "id": "adjective-agreement",
        "title": "Waliigaltee Ibsituu — A2",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник стоїть після іменника й узгоджується з ним за родом і числом через власне закінчення.",
            "en": {
              "text": "An adjective follows the noun and agrees with it in gender and number through its own ending."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mana guddaa",
                "великий дім"
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
        "id": "postpositions",
        "title": "Duub Jechoota — A2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Просторові відношення часто передаються постпозиціями, що йдуть після іменника, а не прийменниками перед ним.",
            "en": {
              "text": "Spatial relations are often conveyed with postpositions that follow the noun, rather than prepositions preceding it."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mana jala",
                "під домом"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Postpositions — A2"
      },
      {
        "id": "vocative-forms",
        "title": "Waamicha — B1",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Звертання часто вживає родинний термін чи ім'я саме по собі, без окремого граматичного маркера звертання.",
            "en": {
              "text": "Direct address often uses a kinship term or a name on its own, with no separate grammatical address marker."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Haadha!",
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
        "title": "Suffiksii Xiqqeessaa — B2",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувально-пестливий суфікс -oo/-ittii, доданий до кореня, надає слову ласкавого чи зменшеного відтінку.",
            "en": {
              "text": "The diminutive suffix -oo/-ittii, added to a root, gives the word an affectionate or diminished shade."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mucaa → mucaayyoo",
                "дитина → манюсінька дитинка"
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
        "id": "converb-chaining",
        "title": "Wal Qabsiisuu Kaayyoo — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприслівник зв'язує послідовні дії в реченні без окремого сполучника 'і' — часово нейтральна форма, час несе лише останнє дієслово ланцюжка.",
            "en": {
              "text": "The converb links sequential actions in a sentence with no separate conjunction 'and' — a tense-neutral form, with only the last verb of the chain carrying tense."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ka'ee gara mana deeme.",
                "Він устав і пішов додому (без 'і', через дієприслівник)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Converb Chaining — B1"
      },
      {
        "id": "reflexive-pronoun",
        "title": "Maqaa Ofii — A2",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотність передається словом ofii ('сам'), доданим після особового займенника чи безпосередньо перед дієсловом.",
            "en": {
              "text": "Reflexivity is expressed with the word ofii ('self'), added after the personal pronoun or right before the verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ofii isaa ilaale.",
                "Він подивився на самого себе."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reflexive: Ofii — A2"
      },
      {
        "id": "reciprocal-construction",
        "title": "Waliif Godhuu — B1",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "Взаємна дія позначається словом wal, вставленим перед дієсловом, — 'одне одного' вбудоване прямо в дієслівну фразу.",
            "en": {
              "text": "A mutual action is marked with the word wal, inserted before the verb — 'each other' built right into the verb phrase."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Wal jaallatu.",
                "Вони люблять одне одного."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reciprocal: Wal — B1"
      },
      {
        "id": "negative-existential",
        "title": "Hin Jiru: Jiraachuu Dhoksuu — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечне існування утворюється часткою hin плюс дієслово jiraachuu ('існувати') з відповідним закінченням.",
            "en": {
              "text": "Negative existence is formed with the particle hin plus the verb jiraachuu ('to exist') with the appropriate ending."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Maallaqni hin jiru.",
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
        "id": "kinship-terms",
        "title": "Maqaa Firummaa — B1",
        "emoji": "👪",
        "sections": [
          {
            "type": "intro",
            "text": "Розлога система термінів спорідненості розрізняє родичів за відносним віком і тісно пов'язана з традиційною системою ґадаа, — окремі слова для старшого й молодшого покоління всередині одного вікового класу.",
            "en": {
              "text": "An elaborate kinship-term system distinguishes relatives by relative age and is closely tied to the traditional Gadaa system — separate words for the older and younger generation within the same age grade."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "obboleessa (старший брат) vs obboleettii (сестра)",
                "терміни спорідненості"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Kinship Terminology — B1"
      },
      {
        "id": "focus-marker-particle",
        "title": "Mallattoo Xiyyeeffannaa: Dha — B2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Частка dha в кінці іменникового присудка позначає особливий наголос чи ствердження, — окрема граматична частка фокусу, притаманна кушитським мовам.",
            "en": {
              "text": "The particle dha at the end of a nominal predicate marks special emphasis or assertion — a dedicated focus particle typical of Cushitic languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Inni barsiisaa dha.",
                "Він (саме) учитель."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Focus Particle: Dha — B2"
      },
      {
        "id": "verb-extension-causative-siis",
        "title": "Kawuzaatiivii: -siis- — B2",
        "emoji": "⚡",
        "sections": [
          {
            "type": "intro",
            "text": "Каузативний суфікс -siis-, вставлений перед закінченням дієслова, додає значення 'змушувати робити' — граматично вбудована причиновість без окремого допоміжного дієслова.",
            "en": {
              "text": "The causative suffix -siis-, inserted before the verb ending, adds the meaning 'to make someone do' — grammatically built-in causation with no separate auxiliary verb."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "baru (навчатися) → barsiisuu (навчати когось)",
                "каузативний суфікс"
              ]
            ],
            "en": {
              "title": "Example"
            }
          }
        ],
        "titleEn": "Causative Suffix: -siis- — B2"
      },
      {
        "id": "verb-extension-passive-am",
        "title": "Kaasaa Argamaa: -am- — B2",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивне розширення -am-, вставлене перед закінченням дієслова, перетворює дієслово на пасивний стан без допоміжного дієслова 'бути'.",
            "en": {
              "text": "The passive extension -am-, inserted before the verb ending, turns a verb passive with no auxiliary 'to be'."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "bitu (купувати) → bitamuu (бути купленим)",
                "пасивне розширення"
              ]
            ],
            "en": {
              "title": "Example"
            }
          }
        ],
        "titleEn": "Passive Extension: -am- — B2"
      },
      {
        "id": "verb-extension-middle-voice",
        "title": "Sagaleen Gidduu Galeessaa — B2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Середній стан позначає дію, вигідну самому підмету чи спрямовану на самого себе, — окрема категорія поміж активним і пасивним станом, властива кушитським мовам.",
            "en": {
              "text": "The middle voice marks an action beneficial to the subject itself or directed at oneself — a distinct category between active and passive, typical of Cushitic languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Середній стан виражає дію на власну користь підмета.",
                "приклад середнього стану"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Middle Voice — B2"
      },
      {
        "id": "converb-chaining-depth",
        "title": "Wal Qabsiisuu: Bal'inaan — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Довгий ланцюжок дієприслівників може описувати цілу послідовність дій в одному реченні, і лише останнє дієслово в ланцюжку несе граматичний час.",
            "en": {
              "text": "A long chain of converbs can describe an entire sequence of actions in one sentence, and only the last verb in the chain carries grammatical tense."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ka'ee, dhiqatee, nyaatee, gara hojii deeme.",
                "Він устав, помився, поїв і пішов на роботу (лише останнє дієслово має час)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Long Converb Chains — B2"
      },
      {
        "id": "marked-nominative-depth",
        "title": "Haala Kaayyoo Mallattaa'aa: Bal'inaan — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Маркований номінатив зникає в кількох конкретних синтаксичних контекстах — наприклад, коли підмет стоїть у фокусі з часткою dha, форма підмета збігається з голою формою, а не з маркованою.",
            "en": {
              "text": "The marked nominative disappears in a few specific syntactic contexts — for example, when the subject stands in focus with the particle dha, the subject form matches the bare form rather than the marked one."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Контекст фокусу нейтралізує звичайне маркування номінатива.",
                "нейтралізація маркованого номінатива у фокусі"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Marked Nominative: Further Depth — B2"
      },
      {
        "id": "gadaa-vocabulary-depth",
        "title": "Jechoota Sirna Gadaa — B2",
        "emoji": "🏛️",
        "sections": [
          {
            "type": "intro",
            "text": "Система ґадаа має власну спеціалізовану лексику для кожного з восьми вікових класів (luba) і для керівних посад (Abbaa Gadaa), — термінологічний шар, тісно пов'язаний з традиційним демократичним устроєм оромо.",
            "en": {
              "text": "The Gadaa system has its own specialized vocabulary for each of the eight age grades (luba) and for leadership positions (Abbaa Gadaa) — a terminological layer closely tied to traditional Oromo democratic governance."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Abbaa Gadaa waggaa saddeetiif ni hoogganaa.",
                "Абба Ґадаа керує вісім років."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Gadaa System Vocabulary — B2"
      },
      {
        "id": "oromo-political-history-vocabulary",
        "title": "Jechoota Seenaa Siyaasaa Oromoo — B2",
        "emoji": "✊",
        "sections": [
          {
            "type": "intro",
            "text": "Історія боротьби за визнання мови й культури оромо в Ефіопії залишила окремий шар політичної та правозахисної лексики, активно вживаної в сучасних медіа.",
            "en": {
              "text": "The history of the struggle for recognition of the Oromo language and culture in Ethiopia left a distinct layer of political and rights-related vocabulary, actively used in modern media."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Політична лексика набула розвитку в контексті боротьби за визнання мови.",
                "історичний політичний шар лексики"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Oromo Political History Vocabulary — B2"
      },
      {
        "id": "amharic-geez-historical-loanwords",
        "title": "Jechoota Amaariffaa fi Giiʼiizii — B1",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Століття політичного домінування амхарської мови в Ефіопії залишили в оромо шар адміністративних і релігійних запозичень з амхарської й ге'ез, — окремий шар, відмінний від пізніших англійських запозичень.",
            "en": {
              "text": "Centuries of Amharic political dominance in Ethiopia left Oromo with a layer of administrative and religious loanwords from Amharic and Ge'ez — a distinct layer from the later English borrowings."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Амхарські адміністративні запозичення відображають історичну політичну ієрархію.",
                "історичний амхарський шар"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Amharic and Ge'ez Historical Loanwords — B1"
      },
      {
        "id": "dialectal-variation-borana-harar",
        "title": "Afaan Booranaa fi Haraghee — B2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Оромо охоплює кілька діалектних груп — боранський на півдні, харарський на сході, воллеганський на заході, — з помітними лексичними й фонетичними відмінностями попри спільну стандартну писемну форму.",
            "en": {
              "text": "Oromo encompasses several dialect groups — Borana in the south, Harar in the east, Wallagga in the west — with noticeable lexical and phonetic differences despite a shared standard written form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Діалекти оромо розходяться в лексиці, попри спільний стандарт писемності.",
                "діалектна варіація"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Dialectal Variation: Borana, Harar — B2"
      },
      {
        "id": "code-switching-amharic-english",
        "title": "Afaan Amaariffaa fi Ingliffaa wal Makuu — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "У міському й освіченому мовленні типове перемикання кодів усередині одного речення — граматичний каркас оромо, а частина лексики вставляється з амхарської чи англійської без адаптації.",
            "en": {
              "text": "Urban, educated speech typically code-switches within a single sentence — the grammatical frame is Oromo, while some vocabulary is inserted from Amharic or English without adaptation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ani office jira.",
                "Я в офісі (English office вставлене напряму)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Amharic/English Code-Switching — B2"
      },
      {
        "id": "pitch-accent-system",
        "title": "Sirna Sagalee Ol Kaʼaa — B2",
        "emoji": "🎵",
        "sections": [
          {
            "type": "intro",
            "text": "Оромо має систему висотного наголосу, де положення підвищеного тону на складі може розрізняти граматичні форми того самого слова, попри те що мова не є повністю тоновою.",
            "en": {
              "text": "Oromo has a pitch-accent system, where the position of a raised pitch on a syllable can distinguish grammatical forms of the same word, even though the language isn't fully tonal."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Позиція підвищеного тону розрізняє граматичні форми того самого слова.",
                "приклад висотного наголосу"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Pitch-Accent System — B2"
      },
      {
        "id": "honorific-plural-address",
        "title": "Baay'ina Ulfinaa — B2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Займенник множини isin ('ви') іноді вживається й до однієї поважної особи як знак пошани — та сама стратегія множини-як-поваги, що й у багатьох мовах світу.",
            "en": {
              "text": "The plural pronoun isin ('you-plural') is sometimes used for a single respected person as a sign of respect — the same plural-as-respect strategy found in many world languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ввічливе звертання множиною до однієї поважної особи.",
                "множина як знак поваги"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Plural for Polite Address — B2"
      },
      {
        "id": "numeral-classifier-absence",
        "title": "Dhabuu Lakkaawwan Addaa — B2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від багатьох східноазійських мов, оромо не вимагає окремого класифікатора для лічби предметів — числівник стоїть напряму перед іменником.",
            "en": {
              "text": "Unlike many East Asian languages, Oromo requires no separate counting classifier — the number stands directly before the noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Числівник стоїть напряму перед іменником, без класифікатора.",
                "лічба без класифікатора"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "No Numeral Classifiers — B2"
      },
      {
        "id": "discourse-particles",
        "title": "Jechoota Haasawaa — B1",
        "emoji": "🗣️",
        "sections": [
          {
            "type": "intro",
            "text": "Дискурсивні частки організують розмову, позначаючи підтвердження почутого чи перехід між думками, без власного лексичного значення поза контекстом діалогу.",
            "en": {
              "text": "Discourse particles organize conversation, marking confirmation of what was heard or a transition between thoughts, with no lexical meaning of their own outside dialogue."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Дискурсивні частки структурують розмову поза буквальним значенням.",
                "приклад дискурсивної частки"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Discourse Particles — B1"
      },
      {
        "id": "fixed-idiomatic-proverbs-mammaaksa",
        "title": "Mammaaksa — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Прислів'я (mammaaksa) уживаються цілими блоками з переносним значенням, не виведеним з буквального перекладу окремих слів, і часто зберігають архаїчну граматичну структуру.",
            "en": {
              "text": "Proverbs (mammaaksa) are used as whole blocks with a figurative meaning not derived from the literal translation of the individual words, and often preserve archaic grammatical structure."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Namni tokko utaalee bishaan hin ceenu.",
                "Одна людина, стрибнувши, не перейде через воду (потрібна спільна праця)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Mammaaksa: Fixed Proverbs — B2"
      },
      {
        "id": "waaqeffannaa-traditional-religion-vocabulary",
        "title": "Jechoota Amantii Waaqeffannaa — B2",
        "emoji": "🕊️",
        "sections": [
          {
            "type": "intro",
            "text": "Традиційна релігія ваакеффанна, що вшановує єдиного творця Ваака, зберегла власний релігійний словниковий шар, окремий від пізніших християнського й ісламського впливу.",
            "en": {
              "text": "The traditional Waaqeffannaa religion, honoring the single creator Waaqa, preserved its own religious vocabulary layer, separate from the later Christian and Islamic influences."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ваакеффанна зберігає власний релігійний шар лексики.",
                "традиційний релігійний шар"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Waaqeffannaa Traditional Religious Vocabulary — B2"
      },
      {
        "id": "double-object-construction",
        "title": "Ibsituu Ovjeektii Lamaa — B2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "У реченнях з двома додатками (давати комусь щось) один додаток отримує давальний відмінок, а інший лишається в голій формі, — розрізнення ролей через відмінкове маркування.",
            "en": {
              "text": "In sentences with two objects (giving someone something), one object takes the dative case while the other stays in the bare form — role distinction through case marking."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kitaaba mucaaf kenne.",
                "Він дав книгу дитині (давальний на 'дитина')."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Double Object Construction — B2"
      },
      {
        "id": "compound-verb-formation",
        "title": "Kaasaa Walitti Qabame — B2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Іменник плюс допоміжне дієслово godhuu ('робити') утворює складене дієслово, — продуктивна система, що замінює багато окремих префіксів чи суфіксів.",
            "en": {
              "text": "A noun plus the auxiliary verb godhuu ('to do') forms a compound verb — a productive system that replaces many separate prefixes or suffixes."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "hojii godhuu (робота + робити → працювати)",
                "складене дієслово"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Compound Verb Formation — B2"
      },
      {
        "id": "adjective-nominalization",
        "title": "Ibsituu Maqaa Taasisuu — B2",
        "emoji": "📘",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник може вживатися самостійно як іменник з відповідним закінченням, — 'добрий' стає 'добра людина' без додаткового слова.",
            "en": {
              "text": "An adjective can be used on its own as a noun with the appropriate ending — 'good' becomes 'a good person' with no extra word needed."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "gaariin",
                "той, хто добрий (прикметник, ужитий як іменник)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adjective Nominalization — B2"
      },
      {
        "id": "agent-nominalization",
        "title": "Maqaa Hojjetaa: -tuu/-aa — B1",
        "emoji": "👤",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -tuu (ж.р.) чи -aa (ч.р.), доданий до дієслівного кореня, утворює іменник-діяча, що позначає того, хто регулярно виконує дію.",
            "en": {
              "text": "The suffix -tuu (fem.) or -aa (masc.), added to a verb root, forms an agent noun denoting one who regularly performs the action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "barsiisuu (навчати) → barsiisaa (учитель)",
                "дієслово → діяч"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Agent Nominalization: -tuu/-aa — B1"
      },
      {
        "id": "numeral-time-expressions",
        "title": "Ibsa Yeroo Lakkoofsaan — B1",
        "emoji": "🕐",
        "sections": [
          {
            "type": "intro",
            "text": "Вираження часу доби вживає власну систему слів, часто пов'язану з сонячним циклом, а не абстрактним годинником у західному стилі.",
            "en": {
              "text": "Time-of-day expressions use their own word system, often tied to the solar cycle rather than an abstract Western-style clock."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Мовна система часу доби пов'язана з традиційним сонячним циклом.",
                "лексика часу, вкорінена в сонячному циклі"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Time-of-Day Expressions — B1"
      },
      {
        "id": "politeness-register",
        "title": "Sadarkaa Ulfinaa — B2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Ввічливий регістр додає окремі слова й займенникові форми при зверненні до старших чи офіційних осіб, відмінні від буденного мовлення.",
            "en": {
              "text": "The polite register adds separate words and pronoun forms when addressing elders or official figures, distinct from everyday speech."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Isin akkam jirtu?",
                "Як ви поживаєте? (ввічливе звертання)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Polite Register — B2"
      },
      {
        "id": "loanword-adaptation-phonology",
        "title": "Jechoota Ergamanii Sirna Sagaleetti Makuu — B1",
        "emoji": "🔧",
        "sections": [
          {
            "type": "intro",
            "text": "Запозичені слова, потрапивши в мову, адаптуються до звукового складу оромо, вписуючись у наявний набір приголосних і голосних.",
            "en": {
              "text": "Loanwords, once they enter the language, are adapted to Oromo's sound system, fitting into the existing consonant and vowel inventory."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Запозичені слова адаптуються до фонологічної системи оромо.",
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
        "id": "relative-time-clauses",
        "title": "Yeroo Ibsu: Yeroo... — B1",
        "emoji": "⏱️",
        "sections": [
          {
            "type": "intro",
            "text": "Сполучник yeroo ('коли') вводить часове підрядне речення, вказуючи, що дія головного речення відбулася одночасно з подією в підрядному.",
            "en": {
              "text": "The conjunction yeroo ('when') introduces a temporal clause, indicating that the main clause's action happened simultaneously with the event in the subordinate clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Yeroo inni dhufe, ani deemaa ture.",
                "Коли він прийшов, я саме йшов."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Temporal Clauses: Yeroo — B1"
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
        "title": "Kaasaa Hin Sirreeffamne — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово ta'uu ('бути, ставати') має кілька нерегулярних форм у різних часах, що не виводяться з очікуваного зразка.",
            "en": {
              "text": "The verb ta'uu ('to be, to become') has several irregular forms across different tenses that can't be derived from the expected pattern."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ti'e (не за звичайним зразком)",
                "нерегулярна форма дієслова ta'uu"
              ]
            ]
          }
        ],
        "titleEn": "Irregular Verbs — B1"
      },
      {
        "id": "irregular-plural-forms",
        "title": "Baay'ina Hin Sirreeffamne — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька частовживаних іменників мають нерегулярну форму множини, яку слід запам'ятовувати окремо, поза загальним правилом.",
            "en": {
              "text": "A few common nouns have an irregular plural form that must be memorized separately, outside the general rule."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "nama → namoota (не за очікуваним зразком)",
                "нерегулярна множина"
              ]
            ]
          }
        ],
        "titleEn": "Irregular Plurals — B1"
      },
      {
        "id": "fixed-proverbs-archaic-grammar",
        "title": "Mammaaksa Durii — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Прислів'я зберігають архаїчну граматичну структуру й лексику, вже втрачену в живій мові, і вживаються цілими блоками без граматичного розбору.",
            "en": {
              "text": "Proverbs preserve archaic grammatical structure and vocabulary already lost from the living language, and are used as whole blocks with no grammatical analysis."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Waan tokko hin beekne hin sodaatan.",
                "Того, чого не знаєш, не боїшся (застигла приказка з архаїчними формами)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Archaic Grammar in Proverbs — B2"
      }
    ]
  }
];
