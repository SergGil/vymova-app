// Vymova — data/grammar-data/grammar_tg.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_TG: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Ҷонишинҳои шахсӣ — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Таджицька — по суті персько-таджицький варіант перської мови, записаний кирилицею. Займенник \"ӯ\" не розрізняє роду.",
            "en": {
              "text": "Tajik is, in essence, a Persian-related variety of Persian written in Cyrillic. The pronoun \"ӯ\" doesn't distinguish gender."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ман"
              ],
              [
                "ти (зв. / ввічл.)",
                "ту / шумо"
              ],
              [
                "він / вона",
                "ӯ"
              ],
              [
                "ми",
                "мо"
              ],
              [
                "ви",
                "шумо"
              ],
              [
                "вони",
                "онҳо"
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
        "id": "cyrillic-script-unique",
        "title": "Алифбои Кирилӣ — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Таджицька — єдиний з великих варіантів перської мови, записуваний кирилицею (з радянської доби, 1940 р.), тоді як іранська перська й дарі досі вживають персько-арабське письмо.",
            "en": {
              "text": "Tajik is the only major variety of Persian written in the Cyrillic alphabet (since the Soviet era, 1940), while Iranian Persian and Dari still use the Perso-Arabic script."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "тоҷикӣ (кирилиця) = فارسی (персько-арабське письмо)",
                "Tajik (Cyrillic) = Persian (Perso-Arabic script for the same language family)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Unique Cyrillic Script — A1"
      },
      {
        "id": "izafe-construction",
        "title": "Изофат: -и — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Ізафет (-и), доданий до іменника, зв'язує його з наступним означенням — прикметником, іншим іменником у родовому значенні чи присвійним словом, — базова конструкція, успадкована зі спільноперської граматики.",
            "en": {
              "text": "The izafe (-i), added to a noun, links it to the following modifier — an adjective, another noun in a genitive sense, or a possessive word — a core construction inherited from common Persian grammar."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "китоби ман (моя книга)",
                "my book (book-izafe I)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Izafe Construction: -и — A2"
      },
      {
        "id": "russian-soviet-loanword-layer",
        "title": "Калимаҳои Русӣ-Шӯравӣ — B1",
        "emoji": "📚",
        "sections": [
          {
            "type": "intro",
            "text": "Через сімдесят років радянського правління таджицька увібрала значний і досі активно вживаний шар російської лексики для техніки, адміністрації й побуту, — окремий шар запозичень, відсутній в іранській перській.",
            "en": {
              "text": "Through seventy years of Soviet rule, Tajik absorbed a significant and still actively used layer of Russian vocabulary for technology, administration, and everyday life — a distinct loanword layer absent from Iranian Persian."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "телевизор, самолёт (з російської)",
                "television, airplane (Russian loans)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Russian/Soviet Loanword Layer — B1"
      },
      {
        "id": "evidential-mood-turkic-contact",
        "title": "Феъли Нақлӣ: Хабари Ғайримустақим — B2",
        "emoji": "🔍",
        "sections": [
          {
            "type": "intro",
            "text": "Через тривалий контакт із тюркськими мовами Центральної Азії таджицька розвинула розгалуженішу евіденційну систему (переказний/непрямий минулий час), ніж іранська перська, розрізняючи бачене особисто від почутого від інших.",
            "en": {
              "text": "Through prolonged contact with the Turkic languages of Central Asia, Tajik developed a more elaborate evidential system (reportative/inferential past tense) than Iranian Persian, distinguishing what was personally witnessed from what was heard from others."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "рафтааст (кажуть, він пішов — непрямо)",
                "he apparently left (evidential/reportative, not directly witnessed)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Evidential Mood via Turkic Contact — B2"
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
        "id": "present-future-tense",
        "title": "Замони Ҳозира-Оянда — A1",
        "emoji": "☀️",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішньо-майбутній час утворюється префіксом ме-, доданим до основи теперішнього часу, плюс особове закінчення, обслуговуючи водночас теперішню й найближчу майбутню дію.",
            "en": {
              "text": "The present-future tense is formed with the prefix ме-, added to the present stem, plus a person ending, serving both present and near-future action at once."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ман мехонам.",
                "Я читаю/читатиму."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present-Future Tense — A1"
      },
      {
        "id": "simple-past",
        "title": "Замони Гузаштаи Содда — A2",
        "emoji": "⏪",
        "sections": [
          {
            "type": "intro",
            "text": "Простий минулий час утворюється основою минулого часу плюс особове закінчення, без допоміжного дієслова.",
            "en": {
              "text": "The simple past is formed with the past stem plus a person ending, with no auxiliary verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ман хондам.",
                "Я прочитав."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Simple Past — A2"
      },
      {
        "id": "imperfect-past",
        "title": "Замони Гузаштаи Давомдор: Ме- — B1",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Тривалий/звичний минулий час утворюється тим самим префіксом ме-, доданим до основи минулого часу, окремо від простого минулого без префікса.",
            "en": {
              "text": "The continuous/habitual past is formed with the same prefix ме-, added to the past stem, distinct from the simple past with no prefix."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ман мехондам.",
                "Я, бувало, читав."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Imperfect Past: ме- — B1"
      },
      {
        "id": "perfect-tense",
        "title": "Замони Гузаштаи Наздик — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Перфект утворюється дієприкметником минулого часу на -а плюс допоміжне дієслово будан ('бути') у теперішньому часі, наголошуючи на теперішній актуальності завершеної дії.",
            "en": {
              "text": "The perfect is formed with the past participle in -а plus the auxiliary будан ('to be') in the present tense, emphasizing the present relevance of a completed action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ман хондаам.",
                "Я вже прочитав."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Perfect Tense — B1"
      },
      {
        "id": "pluperfect",
        "title": "Замони Гузаштаи Дур — B1",
        "emoji": "⏮️",
        "sections": [
          {
            "type": "intro",
            "text": "Плюсквамперфект утворюється дієприкметником минулого часу плюс допоміжне дієслово будан у минулому часі, позначаючи дію, завершену до іншої минулої події.",
            "en": {
              "text": "The pluperfect is formed with the past participle plus the auxiliary будан in the past tense, marking an action completed before another past event."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ман хонда будам.",
                "Я вже був прочитав."
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
        "id": "evidential-past-ast",
        "title": "Гузаштаи Нақлӣ: -астааст — B2",
        "emoji": "🔍",
        "sections": [
          {
            "type": "intro",
            "text": "Непрямий (переказний) минулий час утворюється дієприкметником минулого часу плюс -аст, позначаючи дію, про яку мовець дізнався від інших, а не бачив особисто.",
            "en": {
              "text": "The inferential (reportative) past is formed with the past participle plus -аст, marking an action the speaker learned about from others rather than witnessed personally."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ӯ рафтааст.",
                "Кажуть, він пішов (я цього не бачив)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Evidential/Reportative Past: -аст — B2"
      },
      {
        "id": "future-khoh",
        "title": "Замони Ояндаи Муайян: Хоҳ- — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Означене майбутнє утворюється допоміжним дієсловом хоҳ- ('хотіти'), доданим перед основним дієсловом, підкреслюючи впевненість у дії на відміну від звичайного теперішньо-майбутнього.",
            "en": {
              "text": "The definite future is formed with the auxiliary хоҳ- ('will/want'), placed before the main verb, emphasizing certainty about the action unlike the ordinary present-future."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ман хоҳам хонд.",
                "Я читатиму (напевно)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Definite Future: хоҳ- — A2"
      },
      {
        "id": "imperative-mood",
        "title": "Сиғаи Амрӣ — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб однини утворюється префіксом би- плюс основа теперішнього часу; множина додає -ед.",
            "en": {
              "text": "The singular imperative is formed with the prefix би- plus the present stem; the plural adds -ед."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Бихон! / Бихонед!",
                "Читай! / Читайте!"
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
        "id": "subjunctive-mood",
        "title": "Сиғаи Эҳтимолӣ: Би- — B1",
        "emoji": "🌫️",
        "sections": [
          {
            "type": "intro",
            "text": "Умовно-бажальний спосіб утворюється тим самим префіксом би-, що й наказовий, доданим до основи теперішнього часу, і вживається після модальних дієслів.",
            "en": {
              "text": "The subjunctive is formed with the same prefix би- used in the imperative, added to the present stem, and is used after modal verbs."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Мехоҳам, ки бихонам.",
                "Я хочу, щоб я читав."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Subjunctive Mood: би- — B1"
      },
      {
        "id": "conditional-agar",
        "title": "Ҷумлаи Шартӣ: Агар — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовне речення вводиться сполучником агар ('якщо'), поставленим на початку підрядного речення.",
            "en": {
              "text": "A conditional sentence is introduced with the conjunction агар ('if'), placed at the start of the subordinate clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Агар борон борад, ман дар хона мемонам.",
                "Якщо піде дощ, я залишуся вдома."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional: агар — B1"
      },
      {
        "id": "potential-metavonam",
        "title": "Тавонистан: Қобилият — B1",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Здатність чи можливість виражається допоміжним дієсловом тавонистан ('могти'), доданим перед основним дієсловом.",
            "en": {
              "text": "Ability or possibility is expressed with the auxiliary verb тавонистан ('to be able'), added before the main verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ман метавонам хонам.",
                "Я можу читати."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Potential: тавонистан — B1"
      },
      {
        "id": "negation-na",
        "title": "Namoyish: На- — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється префіксом на-, доданим безпосередньо до дієслова перед часовими префіксами.",
            "en": {
              "text": "Negation is formed with the prefix на-, added directly to the verb before the tense prefixes."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ман намехонам.",
                "Я не читаю."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation: на- — A1"
      },
      {
        "id": "infinitive-form",
        "title": "Масдар — A2",
        "emoji": "📖",
        "sections": [
          {
            "type": "intro",
            "text": "Інфінітив (словникова форма дієслова) закінчується на -тан/-дан, і саме ця форма подається в словниках.",
            "en": {
              "text": "The infinitive (dictionary form of the verb) ends in -тан/-дан, and this is the form listed in dictionaries."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "хондан",
                "читати (інфінітив)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Infinitive — A2"
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
        "id": "word-order-sov",
        "title": "Тартиби Калимаҳо: SOV — A2",
        "emoji": "📝",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів — підмет-додаток-присудок (SOV), причому дієслово майже завжди стоїть у кінці речення.",
            "en": {
              "text": "The basic word order is Subject-Object-Verb (SOV), with the verb almost always placed at the end of the sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ман китобро мехонам.",
                "Я читаю книгу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Word Order: SOV — A2"
      },
      {
        "id": "direct-object-marker-ro",
        "title": "Нишонаи Пуркунандаи Бевосита: -ро — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Означений прямий додаток позначається післяйменником -ро, доданим до кінця іменникової фрази, — неозначений додаток лишається без маркера.",
            "en": {
              "text": "A definite direct object is marked with the postposition -ро, added to the end of the noun phrase — an indefinite object remains unmarked."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ман китобро дидам.",
                "Я побачив (цю) книгу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Direct Object Marker: -ро — B1"
      },
      {
        "id": "plural-formation-ho-on",
        "title": "Ҷамъ: -ҳо, -он — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина здебільшого утворюється суфіксом -ҳо, а для живих істот часто вживається питомий суфікс -он, — два класи множини залежно від живості іменника.",
            "en": {
              "text": "The plural is mostly formed with the suffix -ҳо, while animate beings often take the native suffix -он — two plural classes depending on the noun's animacy."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "китоб → китобҳо / дӯст → дӯстон",
                "книга → книги / друг → друзі"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Plural: -ҳо, -он — A2"
      },
      {
        "id": "indefinite-suffix-e",
        "title": "Номуайянӣ: -е — A2",
        "emoji": "1️⃣",
        "sections": [
          {
            "type": "intro",
            "text": "Неозначеність передається суфіксом -е, доданим до кінця іменника, — окремий засіб від числівника як ('один'), уживаний паралельно.",
            "en": {
              "text": "Indefiniteness is conveyed with the suffix -е, added to the end of the noun — a device separate from the numeral як ('one'), used in parallel."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "китобе",
                "якась книга"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Indefinite Suffix: -е — A2"
      },
      {
        "id": "comparative-tar",
        "title": "Дараҷаи Муқоисавӣ: -тар — B1",
        "emoji": "📊",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняльний ступінь утворюється суфіксом -тар, доданим до прикметника, а об'єкт порівняння вводиться прийменником аз ('від').",
            "en": {
              "text": "The comparative degree is formed with the suffix -тар added to the adjective, with the compared object introduced by the preposition аз ('from')."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ин аз он калонтар аст.",
                "Це більше за те."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparative: -тар — B1"
      },
      {
        "id": "superlative-tarin",
        "title": "Дараҷаи Олӣ: -тарин — B1",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь порівняння утворюється суфіксом -тарин, доданим до прикметника, поставленого перед іменником.",
            "en": {
              "text": "The superlative is formed with the suffix -тарин added to the adjective, placed before the noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "калонтарин",
                "найбільший"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Superlative: -тарин — B1"
      },
      {
        "id": "cardinal-numbers",
        "title": "Рақамҳо: 1-10 — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "table",
            "title": "Числа 1-10",
            "rows": [
              [
                "1",
                "як"
              ],
              [
                "2",
                "ду"
              ],
              [
                "3",
                "се"
              ],
              [
                "5",
                "панҷ"
              ],
              [
                "10",
                "даҳ"
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
        "title": "Ҷонишинҳои Ишоратӣ — A2",
        "emoji": "👉",
        "sections": [
          {
            "type": "table",
            "title": "Вказівні займенники",
            "rows": [
              [
                "цей",
                "ин"
              ],
              [
                "той",
                "он"
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
        "title": "Ҷонишинҳои Саволӣ — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "хто",
                "кӣ"
              ],
              [
                "що",
                "чӣ"
              ],
              [
                "де",
                "куҷо"
              ],
              [
                "коли",
                "кай"
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
        "id": "conjunctions",
        "title": "Пайвандакҳо — A1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники",
            "rows": [
              [
                "і",
                "ва"
              ],
              [
                "або",
                "ё"
              ],
              [
                "але",
                "аммо"
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
        "id": "relative-clause-ki",
        "title": "Ҷумлаи Пайваста: Ки — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Означальні (відносні) підрядні речення вводяться незмінним сполучником ки ('що/який'), незалежно від роду чи числа означуваного іменника.",
            "en": {
              "text": "Relative clauses are introduced by the invariable conjunction ки ('that/who'), regardless of the gender or number of the noun being modified."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "марде, ки меравад",
                "чоловік, що йде"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Clause: ки — B1"
      },
      {
        "id": "reflexive-khud",
        "title": "Ҷонишини Бозгашт: Худ — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотний займенник худ ('сам/себе') уживається для всіх осіб і чисел, коли підмет і об'єкт дії збігаються, або для наголосу на підметі.",
            "en": {
              "text": "The reflexive pronoun худ ('self') is used for all persons and numbers when the subject and object of the action coincide, or for emphasizing the subject."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ӯ худро дид.",
                "Він побачив себе."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reflexive Pronoun: худ — B1"
      },
      {
        "id": "compound-verbs-kardan",
        "title": "Феъли Таркибӣ: Кардан — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Багато нових і запозичених дієслівних понять утворюється складеним дієсловом: іменник плюс допоміжне кардан ('робити') чи шудан ('ставати').",
            "en": {
              "text": "Many new and borrowed verbal concepts are formed as compound verbs: a noun plus the auxiliary кардан ('to do') or шудан ('to become')."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "кор кардан",
                "працювати (букв. 'роботу робити')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Compound Verbs: кардан — B1"
      },
      {
        "id": "adjective-before-noun-izafe",
        "title": "Ҷои Сифат: Изофат — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник стоїть після іменника, зв'язаний з ним ізафетом -и, — протилежно до багатьох мов, де прикметник стоїть перед іменником.",
            "en": {
              "text": "The adjective follows the noun, linked to it by the izafe -и — the opposite of many languages, where the adjective precedes the noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "хонаи калон",
                "великий дім (дім-ізафет-великий)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adjective After Noun via Izafe — A2"
      },
      {
        "id": "possessive-izafe-pronoun",
        "title": "Соҳибият: Изофат бо Ҷонишин — A2",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійність передається тим самим ізафетом -и, що зв'язує іменник із присвійним займенником, поставленим після нього.",
            "en": {
              "text": "Possession is expressed with the same izafe -и linking the noun to a possessive pronoun placed after it."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "хонаи ман",
                "мій дім"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Possession via Izafe — A2"
      },
      {
        "id": "postposition-bo-the-preposition-ba",
        "title": "Пешояндҳо ва Пасояндҳо — B1",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Таджицька вживає і прийменники (ба, аз, бо), і післяйменник -ро, тож граматичні зв'язки маркуються з обох боків іменникової фрази залежно від значення.",
            "en": {
              "text": "Tajik uses both prepositions (ба, аз, бо) and the postposition -ро, so grammatical relations are marked on either side of the noun phrase depending on meaning."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ба хона (до дому) / бо дӯст (з другом)",
                "to the house / with a friend"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Prepositions and the -ро Postposition — B1"
      },
      {
        "id": "diminutive-cha",
        "title": "Хурдкунӣ: -ча — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувально-пестлива форма утворюється суфіксом -ча, доданим до основи іменника.",
            "en": {
              "text": "The diminutive is formed with the suffix -ча, added to the noun stem."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "хона → хонача",
                "дім → будиночок"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Diminutive: -ча — B1"
      },
      {
        "id": "vocative-simple",
        "title": "Хитоб — A2",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "При звертанні до когось ім'я часто вживається з частками -ҷон чи -ака для ласкавого чи шанобливого відтінку.",
            "en": {
              "text": "In direct address, a name is often used with the particles -ҷон or -ака for an affectionate or respectful tone."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Гулҷон!",
                "Гуле, серденько!"
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
        "id": "existential-hast",
        "title": "Ҳаст: Мавҷудият — B1",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Наявність чогось передається незмінним словом ҳаст ('є'), незалежно від роду чи числа предмета, про який ідеться.",
            "en": {
              "text": "The existence of something is expressed with the invariable word ҳаст ('there is'), regardless of the gender or number of the thing being talked about."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Дар ин ҷо одамони зиёд ҳастанд.",
                "Там багато людей."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Existential: ҳаст — B1"
      },
      {
        "id": "question-particle-magar",
        "title": "Магар: Пурсиш — B1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні можна утворити часткою магар на початку речення, хоча найчастіше воно передається лише інтонацією без зміни порядку слів.",
            "en": {
              "text": "A yes/no question can be formed with the particle магар at the start of the sentence, though it is most often conveyed by intonation alone with no change in word order."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Магар ту тоҷикиро медонӣ?",
                "Ти знаєш таджицьку?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Question Particle: магар — B1"
      },
      {
        "id": "converb-sequential",
        "title": "Феъли Ҳамроҳ: -а — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприслівник на -а з'єднує послідовні дії в одному реченні, приймаючи закінчення часу лише на останньому дієслові ланцюжка.",
            "en": {
              "text": "The -а converb links sequential actions in one sentence, with the tense ending appearing only on the last verb in the chain."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "хӯрда хобид",
                "поївши, ліг спати"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Sequential Converb: -а — B1"
      },
      {
        "id": "negative-existential-nest",
        "title": "Нест: Набудани Мавҷудият — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення наявності передається окремим словом нест ('немає'), а не звичайним префіксом на-, — окрема заперечна форма для екзистенційних речень.",
            "en": {
              "text": "Negating existence is expressed with the dedicated word нест ('there isn't'), rather than the ordinary prefix на- — a standalone negative form for existential sentences."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Дар хона касе нест.",
                "У домі нікого немає."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negative Existential: нест — B1"
      },
      {
        "id": "restrictive-particle-faqat",
        "title": "Фақат: Маҳдудият — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Частка фақат ('лише'), додана перед словом, обмежує його значення, — типовий приклад того, як частка може модифікувати будь-яку частину мови без зміни її форми.",
            "en": {
              "text": "The particle фақат ('only'), placed before a word, restricts its meaning — a typical example of how a particle can modify any part of speech without changing its form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "фақат ман",
                "тільки я"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Restrictive Particle: фақат — B1"
      },
      {
        "id": "adjective-plural-agreement",
        "title": "Сифат: Мувофиқат бо Ҷамъ — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від багатьох сусідніх мов, прикметник у таджицькій узгоджується з множиною іменника лише в означальній конструкції ізафету, а не через власне закінчення, — форма прикметника сама по собі незмінна.",
            "en": {
              "text": "Unlike many neighboring languages, the Tajik adjective agrees with a plural noun only through the izafe modifying construction, not through its own ending — the adjective form itself stays unchanged."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "хонаҳои калон (доми великі, прикметник незмінний)",
                "big houses (adjective form unchanged despite plural noun)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adjective Invariance with Plurals — B2"
      },
      {
        "id": "coordinating-conjunctions-extra",
        "title": "Пайвандакҳои Дигар — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Сполучник зеро ('тому що') і частка бинобар ин ('отже') розширюють базовий набір ва/ё/аммо, додаючи причинові й наслідкові зв'язки.",
            "en": {
              "text": "The conjunction зеро ('because') and the particle бинобар ин ('therefore') extend the basic ва/ё/аммо set, adding causal and consequential links."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ман дар хона мондам, зеро борон борид.",
                "Я залишився вдома, бо йшов дощ."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Further Conjunctions — B1"
      },
      {
        "id": "samanid-heritage",
        "title": "Сомониён: Мероси Миллӣ — B2",
        "emoji": "👑",
        "sections": [
          {
            "type": "intro",
            "text": "Держава Саманідів (IX-X ст.) вважається першою власне перськомовною імперією після арабського завоювання й основою таджицької національної ідентичності; засновник Ісмоїл Сомонӣ зображений на найбільшій статуї Душанбе.",
            "en": {
              "text": "The Samanid state (9th-10th c.) is considered the first properly Persian-speaking empire after the Arab conquest and the foundation of Tajik national identity; founder Ismail Samani is depicted in Dushanbe's largest statue."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Исмоили Сомонӣ (засновник, на грошовій одиниці 'сомонӣ')",
                "Ismail Samani (the currency 'somoni' is named after him)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Samanid Heritage — B2"
      },
      {
        "id": "rudaki-firdowsi-poetry",
        "title": "Рӯдакӣ ва Фирдавсӣ: Шеъри Классикӣ — B2",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Рудакі, 'батько перської поезії', і Фірдоусі, автор епосу 'Шахнаме', обидва вважаються таджицькою культурою власними класиками, попри те, що та сама спадщина водночас належить іранській та афганській культурам.",
            "en": {
              "text": "Rudaki, the 'father of Persian poetry', and Ferdowsi, author of the epic Shahnameh, are both claimed by Tajik culture as its own classics, even though the same heritage is simultaneously claimed by Iranian and Afghan cultures."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Шоҳнома (епос Фірдоусі)",
                "the Shahnameh (Ferdowsi's epic)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Rudaki and Ferdowsi: Claimed Classical Poets — B2"
      },
      {
        "id": "pamir-mountain-culture",
        "title": "Помир: Фарҳанги Кӯҳистонӣ — B2",
        "emoji": "🏔️",
        "sections": [
          {
            "type": "intro",
            "text": "Гірський регіон Памір на сході країни населений переважно ісмаїлітами-шиїтами, які розмовляють окремими памірськими мовами (не таджицькою), — окрема етнорелігійна й мовна група в межах Таджикистану.",
            "en": {
              "text": "The mountainous Pamir region in the east is inhabited mostly by Ismaili Shia Muslims who speak separate Pamiri languages (not Tajik) — a distinct ethnoreligious and linguistic group within Tajikistan."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Бадахшони Кӯҳӣ (Гірсько-Бадахшанська автономна область)",
                "Gorno-Badakhshan Autonomous Region"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Pamir Mountain Culture — B2"
      },
      {
        "id": "plov-osh-cuisine",
        "title": "Оши Палов — A2",
        "emoji": "🍚",
        "sections": [
          {
            "type": "intro",
            "text": "Ош (плов) — центральна страва, приготована в спеціальному казані з рисом, морквою й м'ясом, обов'язкова на весіллях і поминках, з десятками регіональних рецептур.",
            "en": {
              "text": "Osh (plov) is the central dish, cooked in a special cauldron with rice, carrots, and meat, obligatory at weddings and funerals, with dozens of regional recipes."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ош пухтан",
                "готувати плов"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Osh (Plov): The Central Dish — A2"
      },
      {
        "id": "chakan-embroidery",
        "title": "Чакан: Гулдӯзӣ — B1",
        "emoji": "🧵",
        "sections": [
          {
            "type": "intro",
            "text": "Чакан — традиційна вишивка, визнана ЮНЕСКО нематеріальною культурною спадщиною, з геометричними й рослинними візерунками, що прикрашають жіночий і чоловічий святковий одяг.",
            "en": {
              "text": "Chakan is traditional embroidery, recognized by UNESCO as intangible cultural heritage, with geometric and floral patterns decorating both women's and men's festive clothing."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "куртаи чакандӯзӣ",
                "сорочка з вишивкою чакан"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Chakan Embroidery — B1"
      },
      {
        "id": "cotton-monoculture-legacy",
        "title": "Пахта: Мероси Иқтисодӣ — B2",
        "emoji": "🌾",
        "sections": [
          {
            "type": "intro",
            "text": "Радянська політика перетворила значну частину орних земель Таджикистану на монокультуру бавовни, залишивши спадщину водних криз і залежності від експорту, що досі формує сільську економіку.",
            "en": {
              "text": "Soviet policy turned much of Tajikistan's arable land into a cotton monoculture, leaving a legacy of water crises and export dependency that still shapes the rural economy today."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "майдони пахта",
                "бавовняне поле"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Cotton Monoculture Legacy — B2"
      },
      {
        "id": "tea-culture",
        "title": "Чойхона — B1",
        "emoji": "🍵",
        "sections": [
          {
            "type": "intro",
            "text": "Чойхона (чайний дім) — центр громадського життя, де чоловіки сидять на піднятих дерев'яних настилах (тахтах), п'ють зелений чай і обговорюють справи, — соціальний інститут, а не просто заклад харчування.",
            "en": {
              "text": "The choykhona (teahouse) is the center of community life, where men sit on raised wooden platforms (takhts), drink green tea, and discuss affairs — a social institution, not just a place to eat."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "дар чойхона нишастан",
                "сидіти в чайхані"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Choykhona: Teahouse Culture — B1"
      },
      {
        "id": "colors",
        "title": "Рангҳо — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "table",
            "title": "Кольори",
            "rows": [
              [
                "червоний",
                "сурх"
              ],
              [
                "чорний",
                "сиёҳ"
              ],
              [
                "білий",
                "сафед"
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
        "title": "Рақамҳо: Даҳ — A2",
        "emoji": "🔟",
        "sections": [
          {
            "type": "table",
            "title": "Десятки",
            "rows": [
              [
                "20",
                "бист"
              ],
              [
                "100",
                "сад"
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
        "title": "Рӯзҳои Ҳафта — A2",
        "emoji": "📅",
        "sections": [
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "понеділок",
                "душанбе"
              ],
              [
                "п'ятниця",
                "ҷумъа"
              ],
              [
                "неділя",
                "якшанбе"
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
        "title": "Оила — A2",
        "emoji": "👪",
        "sections": [
          {
            "type": "table",
            "title": "Родина",
            "rows": [
              [
                "батько",
                "падар"
              ],
              [
                "мати",
                "модар"
              ],
              [
                "брат",
                "бародар"
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
        "title": "Салом — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "table",
            "title": "Вітання",
            "rows": [
              [
                "Привіт",
                "Салом"
              ],
              [
                "Дякую",
                "Рахмат"
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
        "title": "Обу Ҳаво — A2",
        "emoji": "☁️",
        "sections": [
          {
            "type": "table",
            "title": "Погода",
            "rows": [
              [
                "сонце",
                "офтоб"
              ],
              [
                "дощ",
                "борон"
              ],
              [
                "сніг",
                "барф"
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
        "title": "Узвҳои Бадан — A2",
        "emoji": "🧍",
        "sections": [
          {
            "type": "table",
            "title": "Частини тіла",
            "rows": [
              [
                "голова",
                "сар"
              ],
              [
                "рука",
                "даст"
              ],
              [
                "око",
                "чашм"
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
        "id": "nowruz-celebration",
        "title": "Наврӯз — B1",
        "emoji": "🎉",
        "sections": [
          {
            "type": "intro",
            "text": "Наврӯз — найважливіше свято року, зороастрійське за походженням, відзначає весняне рівнодення й готування семи символічних страв на 'С' (ҳафт син), незалежно від офіційно радянсько-атеїстичного минулого країни.",
            "en": {
              "text": "Nowruz is the most important holiday of the year, Zoroastrian in origin, marking the spring equinox and the preparation of seven symbolic dishes (haft sin), regardless of the country's officially Soviet-atheist past."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Наврӯзи шумо муборак!",
                "З Наврузом!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Nowruz Celebration — B1"
      },
      {
        "id": "dushanbe-capital",
        "title": "Душанбе: Пойтахт — B1",
        "emoji": "🏙️",
        "sections": [
          {
            "type": "intro",
            "text": "Назва столиці Душанбе буквально означає 'понеділок' — на цьому місці колись відбувався щопонедільковий базар, назва якого зрештою стала назвою всього міста.",
            "en": {
              "text": "The capital's name Dushanbe literally means 'Monday' — a weekly Monday market was once held on the site, and the market's name eventually became the name of the whole city."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Душанбе (буквально 'понеділок')",
                "Dushanbe (literally 'Monday')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Dushanbe: The Capital's Name — B1"
      },
      {
        "id": "clothing-vocabulary",
        "title": "Либос — A2",
        "emoji": "🧣",
        "sections": [
          {
            "type": "table",
            "title": "Одяг",
            "rows": [
              [
                "тюбетейка",
                "тоқӣ"
              ],
              [
                "халат",
                "ҷома"
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
        "id": "food-vocabulary",
        "title": "Хӯрок — A2",
        "emoji": "🍞",
        "sections": [
          {
            "type": "table",
            "title": "Їжа",
            "rows": [
              [
                "хліб",
                "нон"
              ],
              [
                "чай",
                "чой"
              ],
              [
                "самбуса",
                "самбуса"
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
        "id": "animals-vocabulary",
        "title": "Ҳайвонот — A2",
        "emoji": "🐎",
        "sections": [
          {
            "type": "table",
            "title": "Тварини",
            "rows": [
              [
                "кінь",
                "асп"
              ],
              [
                "собака",
                "саг"
              ],
              [
                "вівця",
                "гӯсфанд"
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
        "id": "cardinal-directions",
        "title": "Ҷиҳатҳо — B1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "table",
            "title": "Сторони світу",
            "rows": [
              [
                "північ",
                "шимол"
              ],
              [
                "південь",
                "ҷануб"
              ],
              [
                "схід",
                "шарқ"
              ],
              [
                "захід",
                "ғарб"
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
        "id": "uzbek-tajik-bilingual-contact",
        "title": "Дузабонии Тоҷикӣ-Узбекӣ — B2",
        "emoji": "🗣️",
        "sections": [
          {
            "type": "intro",
            "text": "Через сплетену радянську й попередню історію багато таджиків у містах Самарканд і Бухара (нині в Узбекистані) досі розмовляють таджицькою вдома, а численні таджикистанці вільно володіють узбецькою, — двомовність, що виходить за межі кордону.",
            "en": {
              "text": "Through intertwined Soviet and earlier history, many Tajiks in the cities of Samarkand and Bukhara (now in Uzbekistan) still speak Tajik at home, and many Tajikistanis are fluent in Uzbek — bilingualism that crosses the border."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Самарқанд, Бухоро (таджикомовні міста в Узбекистані)",
                "Samarkand, Bukhara (Tajik-speaking cities in Uzbekistan)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Tajik-Uzbek Bilingual Contact — B2"
      },
      {
        "id": "civil-war-history",
        "title": "Ҷанги Шаҳрвандӣ (1992-1997) — B2",
        "emoji": "⚖️",
        "sections": [
          {
            "type": "intro",
            "text": "Громадянська війна 1992-1997 рр., що спалахнула невдовзі після розпаду СРСР, залишила глибокий слід у суспільній пам'яті й досі впливає на регіональну політику та обережне ставлення до релігійного вираження.",
            "en": {
              "text": "The 1992-1997 civil war, which broke out shortly after the USSR's collapse, left a deep mark on collective memory and still shapes regional politics and a cautious approach to religious expression today."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Созишномаи сулҳ (1997, мирна угода)",
                "the 1997 peace agreement"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Tajik Civil War (1992-1997) — B2"
      },
      {
        "id": "iskandarkul-zorkul-lakes",
        "title": "Кӯлҳо: Искандаркӯл, Зӯркӯл — B2",
        "emoji": "🏞️",
        "sections": [
          {
            "type": "intro",
            "text": "Озеро Іскандаркуль, назване за легендою про Олександра Македонського, і високогірне озеро Зоркуль на Памірі — символи мальовничих альпійських ландшафтів Таджикистану, оспівані в поезії й туристичній лексиці.",
            "en": {
              "text": "Lake Iskanderkul, named after a legend about Alexander the Great, and the high-altitude Lake Zorkul in the Pamirs are symbols of Tajikistan's picturesque alpine landscapes, celebrated in poetry and tourist vocabulary."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Искандаркӯл",
                "озеро Іскандаркуль"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Iskanderkul and Zorkul Lakes — B2"
      },
      {
        "id": "coordinating-conjunctions-extra-vocab",
        "title": "Тавонистан: Дигар Мисолҳо — B1",
        "emoji": "📚",
        "sections": [
          {
            "type": "intro",
            "text": "Арабська лексика, увійшла через іслам, і досі становить значний шар книжної й релігійної термінології таджицької, паралельно з питомим персько-таджицьким шаром.",
            "en": {
              "text": "Arabic vocabulary, which entered through Islam, still forms a significant layer of Tajik's literary and religious terminology, running parallel to the native Persian-Tajik layer."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "китоб (з арабської 'книга')",
                "book (Arabic loanword, shared across the whole Persian-influenced region)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Arabic Loanword Layer via Islam — B1"
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
        "id": "irregular-verb-budan",
        "title": "Феъли Бенизом: Будан — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово будан ('бути') має супплетивні клітичні форми в теперішньому часі (-ам, -ӣ, -аст), не пов'язані з основою минулого часу буд-, — типова риса для дієслова 'бути' в багатьох мовах світу.",
            "en": {
              "text": "The verb будан ('to be') has suppletive clitic forms in the present tense (-ам, -ӣ, -аст), unrelated to the past stem буд-, — a typical trait for the verb 'to be' across many world languages."
            }
          },
          {
            "type": "table",
            "title": "Супплетивні форми",
            "rows": [
              [
                "ҳастам (я є) vs. будам (я був)",
                "am vs. was (different roots)"
              ]
            ],
            "en": {
              "title": "Suppletive Forms"
            }
          }
        ],
        "titleEn": "Irregular Verb: будан ('to be') — B1"
      },
      {
        "id": "irregular-plural-zan",
        "title": "Ҷамъи Бенизом: Зан → Занон — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька дуже частотних живих іменників, зокрема зан ('жінка'), обов'язково утворюють множину суфіксом -он, а не звичайним -ҳо, — виняток, який слід запам'ятовувати окремо.",
            "en": {
              "text": "A handful of very frequent animate nouns, including зан ('woman'), obligatorily form their plural with -он rather than the ordinary -ҳо — an exception that must be memorized separately."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярна множина",
            "rows": [
              [
                "зан → занон (не *занҳо)",
                "woman → women (irregular -он, not -ҳо)"
              ]
            ],
            "en": {
              "title": "Irregular Plural"
            }
          }
        ],
        "titleEn": "Irregular Plural: зан → занон — B2"
      },
      {
        "id": "irregular-comparative-khub",
        "title": "Дараҷаи Муқоисавии Бенизом: Хуб → Беҳтар — B1",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник хуб ('добрий') має супплетивний порівняльний ступінь беҳтар ('кращий') замість очікуваного регулярного *хубтар.",
            "en": {
              "text": "The adjective хуб ('good') has a suppletive comparative беҳтар ('better') instead of the expected regular *хубтар."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярний порівняльний ступінь",
            "rows": [
              [
                "хуб → беҳтар (не *хубтар)",
                "good → better (suppletive)"
              ]
            ],
            "en": {
              "title": "Irregular Comparative"
            }
          }
        ],
        "titleEn": "Irregular Comparative: хуб → беҳтар — B1"
      }
    ]
  }
];
