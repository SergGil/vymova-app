// Vymova — data/grammar-data/grammar_te.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_TE: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "సర్వనామాలు — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У телугу ввічлива форма \"మీరు\" (mīru) водночас служить і поважним звертанням до однієї людини, і звичайною множиною.",
            "en": {
              "text": "In Telugu, the polite form \"మీరు\" (mīru) serves both as a respectful way to address one person and as the ordinary plural \"you\"."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "నేను (nēnu)"
              ],
              [
                "ти (зв. / ввічл.)",
                "నువ్వు / మీరు (nuvvu / mīru)"
              ],
              [
                "він / вона",
                "అతను / ఆమె (atanu / āme)"
              ],
              [
                "ми",
                "మేము (mēmu)"
              ],
              [
                "ви",
                "మీరు (mīru)"
              ],
              [
                "вони",
                "వాళ్ళు (vāḷḷu)"
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
        "id": "open-syllable-vowel-ending",
        "title": "అచ్చు అంతం: 'తూర్పు ఇటాలియన్' — B1",
        "emoji": "🎵",
        "sections": [
          {
            "type": "intro",
            "text": "Майже всі питомі телугумовні слова закінчуються на голосний, надаючи мові плавного, музичного звучання, — саме тому лінгвісти колоніальної доби прозвали телугу 'італійською мовою Сходу'.",
            "en": {
              "text": "Almost all native Telugu words end in a vowel, giving the language a smooth, musical quality — which is why colonial-era linguists nicknamed Telugu 'the Italian of the East'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "తెలుగు (teluɡu, само слово закінчується на u)",
                "Telugu (the word itself ends in a vowel)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Open-Syllable Vowel Endings — B1"
      },
      {
        "id": "three-gender-system",
        "title": "లింగం: పుంలింగం, స్త్రీలింగం, నపుంసకలింగం — A2",
        "emoji": "⚥",
        "sections": [
          {
            "type": "intro",
            "text": "Телугу зберігає три граматичні роди — чоловічий, жіночий і середній, — на відміну від тамільської, яка звела рід до бінарної опозиції 'розумне/нерозумне'.",
            "en": {
              "text": "Telugu retains three grammatical genders — masculine, feminine, and neuter — unlike Tamil, which reduced gender to a binary 'rational/irrational' opposition."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "అతను (він) / ఆమె (вона) / అది (воно, середній рід)",
                "he / she / it (three distinct genders)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Three-Gender System — A2"
      },
      {
        "id": "sanskrit-loanword-density",
        "title": "సంస్కృత పదజాలం — B2",
        "emoji": "📚",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від тамільського руху за 'чисту тамільську', телугу глибоко й невимушено засвоїла санскритську лексику протягом століть, тож санскритські запозичення становлять значну частину повсякденного, а не лише книжного словника.",
            "en": {
              "text": "Unlike the Tamil 'Pure Tamil' purism movement, Telugu deeply and unselfconsciously absorbed Sanskrit vocabulary over the centuries, so Sanskrit loanwords make up a large share of everyday, not just literary, vocabulary."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "విద్య (освіта, з санскриту)",
                "education (Sanskrit loan, used in everyday speech)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Heavy Sanskrit Loanword Layer — B2"
      },
      {
        "id": "agglutinative-suffix-stacking",
        "title": "ప్రత్యయాలు: అనేకం — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Телугу — суто аглютинативна мова: до одного кореня можна нанизати кілька суфіксів (відмінка, числа, часу) у фіксованому порядку, кожен з яких додає точно одне граматичне значення.",
            "en": {
              "text": "Telugu is a purely agglutinative language: several suffixes (case, number, tense) can be stacked onto a single root in a fixed order, each adding exactly one grammatical meaning."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ఇల్లు → ఇళ్ళలో (в будинках, множина+місцевий)",
                "house → in the houses (plural + locative stacked)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Agglutinative Suffix Stacking — B1"
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
        "title": "వర్తమాన కాలం — A1",
        "emoji": "☀️",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній час утворюється часовим суфіксом -తున్న-, доданим до основи, плюс особове закінчення, узгоджене з підметом.",
            "en": {
              "text": "The present tense is formed with the tense suffix -తున్న- added to the stem, plus a person ending agreeing with the subject."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "చదువుతున్నాను.",
                "Я читаю."
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
        "id": "past-tense",
        "title": "భూత కాలం — A2",
        "emoji": "⏪",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий час утворюється суфіксом -ఇ-/-ఆ-, доданим до основи, залежно від класу дієслова.",
            "en": {
              "text": "The past tense is formed with the suffix -ఇ-/-ఆ-, added to the stem, depending on the verb class."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "చదివాను.",
                "Я прочитав."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Past Tense — A2"
      },
      {
        "id": "future-tense",
        "title": "భవిష్యత్ కాలం — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється суфіксом -తా-, доданим до основи, плюс особове закінчення.",
            "en": {
              "text": "The future tense is formed with the suffix -తా-, added to the stem, plus a person ending."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "చదువుతాను.",
                "Я читатиму."
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
        "id": "present-progressive",
        "title": "నిరంతర వర్తమానం — B1",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія в теперішньому передається тим самим -తున్న-, що й звичайний теперішній час, — розрізнення тривалості й звичності залежить лише від контексту.",
            "en": {
              "text": "An ongoing present action is expressed with the same -తున్న- used for the regular present tense — the continuous/habitual distinction depends only on context."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ఇప్పుడు చదువుతున్నాను.",
                "Я саме зараз читаю."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Progressive (Contextual) — B1"
      },
      {
        "id": "perfect-tense",
        "title": "పూర్ణ కాలం — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Перфект утворюється дієприслівником минулого часу плюс допоміжне дієслово ఉండు ('бути') у теперішньому часі, наголошуючи на теперішній актуальності завершеної дії.",
            "en": {
              "text": "The perfect is formed with the past converb plus the auxiliary ఉండు ('to be') in the present tense, emphasizing the present relevance of a completed action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "చదివి ఉన్నాను.",
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
        "title": "పూర్వ పూర్ణ కాలం — B2",
        "emoji": "⏮️",
        "sections": [
          {
            "type": "intro",
            "text": "Плюсквамперфект утворюється дієприслівником минулого часу плюс допоміжне дієслово ఉండు в минулому часі, позначаючи дію, завершену до іншої минулої події.",
            "en": {
              "text": "The pluperfect is formed with the past converb plus the auxiliary ఉండు in the past tense, marking an action completed before another past event."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "చదివి ఉన్నాను (сучасна форма зазвичай та сама)",
                "I had already read (formed the same way, tense of auxiliary shifts)"
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
        "id": "imperative-mood",
        "title": "ఆజ్ఞార్థకం — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб однини — гола основа дієслова; ввічлива й множинна форма додає суфікс -ండి.",
            "en": {
              "text": "The singular imperative is the bare verb stem; the polite/plural form adds the suffix -ండి."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "చదువు! / చదవండి!",
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
        "id": "negative-verb-lēdu",
        "title": "లేదు: నిషేధం — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення минулого часу здебільшого утворюється незмінним словом లేదు ('немає/не'), поставленим після дієприслівника, замість відмінюваної заперечної форми.",
            "en": {
              "text": "Negating the past tense is mostly formed with the invariable word లేదు ('is not'), placed after the converb, instead of a conjugated negative form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "చదవలేదు.",
                "Я не читав."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation: లేదు — A2"
      },
      {
        "id": "potential-galugu",
        "title": "శక్యార్థకం: గలుగు — B1",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Здатність чи можливість виражається допоміжним дієсловом గలుగు ('могти'), доданим після основного дієслова.",
            "en": {
              "text": "Ability or possibility is expressed with the auxiliary verb గలుగు ('to be able'), added after the main verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "చదవగలను.",
                "Я можу читати."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Potential: గలుగు — B1"
      },
      {
        "id": "conditional-ayite",
        "title": "నిబంధన: అయితే — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовне речення утворюється часткою అయితే ('якщо'), поставленою після дієприслівникової форми умови в підрядному реченні.",
            "en": {
              "text": "A conditional sentence is formed with the particle అయితే ('if'), placed after the conditional converb form in the subordinate clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "వర్షం పడితే, నేను ఇంట్లో ఉంటాను.",
                "Якщо піде дощ, я залишуся вдома."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional: అయితే — B1"
      },
      {
        "id": "desiderative-kavali",
        "title": "కావాలి: అవసరం — A2",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Бажання чи потреба виражається словом కావాలి ('треба/хочеться'), уживаним із давальним відмінком підмета, а не з називним, як звичайні дієслова.",
            "en": {
              "text": "A wish or need is expressed with the word కావాలి ('want/need'), used with the dative case of the experiencer rather than the nominative, unlike ordinary verbs."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "నాకు తినాలని ఉంది.",
                "Мені хочеться їсти."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Desiderative: కావాలి — A2"
      },
      {
        "id": "optative-mood",
        "title": "ఆశీరార్థకం — B2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Бажальний спосіб — окрема парадигма закінчень, уживана для благословень і формальних побажань третій особі.",
            "en": {
              "text": "The optative mood is a distinct set of endings used for blessings and formal wishes directed at a third person."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "తెలుగు వర్ధిల్లాలి!",
                "Хай процвітає телугу!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Optative Mood — B2"
      },
      {
        "id": "infinitive-form",
        "title": "క్రియావిశేషణం — A2",
        "emoji": "📖",
        "sections": [
          {
            "type": "intro",
            "text": "Інфінітив утворюється суфіксом -డానికి/-టానికి, доданим до основи дієслова, і вживається перед модальними словами.",
            "en": {
              "text": "The infinitive is formed with the suffix -డానికి/-టానికి, added to the verb stem, and is used before modal words."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "చదవడానికి వచ్చాను.",
                "Я прийшов, щоб читати."
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
        "id": "case-suffix-table",
        "title": "విభక్తి ప్రత్యయాలు — B1",
        "emoji": "📐",
        "sections": [
          {
            "type": "table",
            "title": "Відмінкові суфікси",
            "rows": [
              [
                "знахідний",
                "-ని (ni)"
              ],
              [
                "давальний",
                "-కి (ki)"
              ],
              [
                "орудний",
                "-తో (tō)"
              ],
              [
                "місцевий",
                "-లో (lō)"
              ]
            ],
            "en": {
              "title": "Case Suffixes"
            }
          }
        ],
        "titleEn": "Case Suffix Table — B1"
      },
      {
        "id": "word-order-sov",
        "title": "వాక్య నిర్మాణం: SOV — A2",
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
                "నేను పుస్తకం చదువుతున్నాను.",
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
        "id": "relative-participle-no-pronoun",
        "title": "సంబంధక క్రియ: సంబంధార్థక భూత కృదంతం — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Телугу не має відносного займенника: означальні звороти утворюються перетворенням дієслова на дієприкметник, поставлений прямо перед іменником, — та сама стратегія, що й у тамільській.",
            "en": {
              "text": "Telugu has no relative pronoun: relative clauses are formed by turning the verb into a participle, placed directly before the noun — the same strategy used in Tamil."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "చదువుతున్న విద్యార్థి",
                "учень, що читає"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Participle (No Relative Pronoun) — B2"
      },
      {
        "id": "plural-rational-lu",
        "title": "బహువచనం: -లు — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина здебільшого утворюється єдиним суфіксом -లు, доданим до основи іменника, незалежно від роду, — простіша система, ніж у мовах з окремими класами множини.",
            "en": {
              "text": "The plural is mostly formed with the single suffix -లు added to the noun stem, regardless of gender — a simpler system than languages with separate plural classes."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "పుస్తకం → పుస్తకాలు",
                "книга → книги"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Plural: -లు — A2"
      },
      {
        "id": "possessive-genitive-yokka",
        "title": "సంబంధం: యొక్క — A2",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійність передається родовим суфіксом -యొక్క чи -కి, доданим до власника, поставленого перед посідомим іменником.",
            "en": {
              "text": "Possession is expressed with the genitive suffix -యొక్క or -కి, added to the possessor, placed before the possessed noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "నాన్న యొక్క పుస్తకం",
                "батькова книга"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Possession: -యొక్క (Genitive) — A2"
      },
      {
        "id": "cardinal-numbers",
        "title": "సంఖ్యలు: 1-10 — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "table",
            "title": "Числа 1-10",
            "rows": [
              [
                "1",
                "ఒకటి"
              ],
              [
                "2",
                "రెండు"
              ],
              [
                "3",
                "మూడు"
              ],
              [
                "5",
                "ఐదు"
              ],
              [
                "10",
                "పది"
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
        "title": "సర్వనామాలు: సూచక — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "table",
            "title": "Вказівні займенники",
            "rows": [
              [
                "цей",
                "ఇది"
              ],
              [
                "той",
                "అది"
              ]
            ],
            "en": {
              "title": "Demonstratives"
            }
          }
        ],
        "titleEn": "Demonstratives — A1"
      },
      {
        "id": "interrogatives",
        "title": "ప్రశ్నార్థక పదాలు — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "хто",
                "ఎవరు"
              ],
              [
                "що",
                "ఏమిటి"
              ],
              [
                "де",
                "ఎక్కడ"
              ],
              [
                "коли",
                "ఎప్పుడు"
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
        "id": "compound-verbs",
        "title": "సంయుక్త క్రియలు — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Багато складних дієслівних значень (завершеність, раптовість, вигода для себе) утворюються дієприслівником плюс допоміжне дієслово (వేయు, పెట్టు, తీసుకొను), тонко змінюючи основне значення.",
            "en": {
              "text": "Many compound verbal meanings (completion, suddenness, self-benefit) are formed with a converb plus an auxiliary verb (వేయు, పెట్టు, తీసుకొను), subtly modifying the main meaning."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "చదివేసాను.",
                "Я закінчив читати (повністю)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Compound Verb Auxiliaries — B1"
      },
      {
        "id": "comparative-kante",
        "title": "పోలిక: కంటే — B1",
        "emoji": "📊",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняльний ступінь утворюється післяйменником కంటే ('ніж'), поставленим після об'єкта порівняння, без окремої граматичної форми прикметника.",
            "en": {
              "text": "The comparative is formed with the postposition కంటే ('than'), placed after the compared object, with no separate grammatical adjective form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ఇది దాని కంటే పెద్దది.",
                "Це більше за те."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparative: కంటే ('than') — B1"
      },
      {
        "id": "superlative-anniti-kanna",
        "title": "అత్యధికం: అన్నిటికన్నా — B1",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь порівняння утворюється часткою అన్నిటికన్నా ('за все') перед прикметником.",
            "en": {
              "text": "The superlative is formed with the phrase అన్నిటికన్నా ('of all') before the adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "అన్నిటికన్నా పెద్దది",
                "найбільший"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Superlative: అన్నిటికన్నా — B1"
      },
      {
        "id": "conjunctions",
        "title": "సంయోజకాలు — A1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники",
            "rows": [
              [
                "і",
                "మరియు"
              ],
              [
                "або",
                "లేదా"
              ],
              [
                "але",
                "కానీ"
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
        "id": "reflexive-tanu",
        "title": "ఆత్మార్థక సర్వనామం: తను — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотний займенник తను ('сам/себе') уживається для всіх осіб і чисел, коли підмет і об'єкт дії збігаються, або для наголосу.",
            "en": {
              "text": "The reflexive pronoun తను ('self') is used for all persons and numbers when the subject and object of the action coincide, or for emphasis."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "తను తనని చూసుకున్నాడు.",
                "Він подивився на себе."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reflexive Pronoun: తను — B1"
      },
      {
        "id": "sandhi-euphonic-combination",
        "title": "సంధి: సంయోగం — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Коли слово, що закінчується на голосний, зустрічається з наступним словом, що починається на голосний, вони часто зливаються в один склад за правилами санді, успадкованими з класичної граматики.",
            "en": {
              "text": "When a word ending in a vowel meets a word beginning with a vowel, they often fuse into a single syllable following sandhi rules inherited from classical grammar."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "రామ + అయ్య → రామయ్య",
                "сандхі-злиття двох слів в одне"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Sandhi: Euphonic Combination — B2"
      },
      {
        "id": "diminutive-chinna",
        "title": "చిన్న: చిన్నతనం — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувальний відтінок передається окремим прикметником చిన్న ('маленький') перед іменником, а не суфіксом, доданим до нього.",
            "en": {
              "text": "A diminutive shade of meaning is conveyed with the separate adjective చిన్న ('small') before the noun, rather than a suffix attached to it."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "చిన్న పిల్లవాడు",
                "малятко (букв. 'мала дитина')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Diminutive: చిన్న — B1"
      },
      {
        "id": "adjective-position",
        "title": "విశేషణం స్థానం — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник завжди стоїть перед іменником, який він означає, і не змінюється за родом, числом чи відмінком.",
            "en": {
              "text": "The adjective always precedes the noun it modifies, and does not change for gender, number, or case."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "పెద్ద ఇల్లు",
                "великий дім"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adjective Position: Invariant — A2"
      },
      {
        "id": "postpositions-simple",
        "title": "అనుప్రయోగాలు — A2",
        "emoji": "📌",
        "sections": [
          {
            "type": "table",
            "title": "Післяйменники",
            "rows": [
              [
                "з (разом)",
                "తో"
              ],
              [
                "для",
                "కోసం"
              ],
              [
                "без",
                "లేకుండా"
              ]
            ],
            "en": {
              "title": "Postpositions"
            }
          }
        ],
        "titleEn": "Simple Postpositions — A2"
      },
      {
        "id": "vocative-case",
        "title": "సంబోధన — B1",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "При звертанні деякі іменники мають окрему кличну форму з подовженим кінцевим звуком, відмінну від називного відмінка.",
            "en": {
              "text": "In direct address, some nouns take a distinct vocative form with a lengthened final sound, different from the nominative case."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "అమ్మా!",
                "мамо!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Vocative Case — B1"
      },
      {
        "id": "existential-undu",
        "title": "ఉండు: ఉనికి — B1",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Наявність чогось передається дієсловом ఉండు ('бути/існувати'), узгодженим з підметом за особою й числом, — звичайне дієслово в теперішньому часі, а не окреме безособове слово.",
            "en": {
              "text": "The existence of something is expressed with the verb ఉండు ('to be/exist'), agreeing with the subject in person and number — the ordinary verb in the present tense, not a separate impersonal word."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "చాలా మంది ఉన్నారు.",
                "Там багато людей."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Existential: ఉండు ('to exist') — B1"
      },
      {
        "id": "question-particle-aa",
        "title": "-ఆ: ప్రశ్న ప్రత్యయం — A2",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні утворюється клітичним суфіксом -ఆ, доданим до кінця слова, на якому наголошується запитання, без інверсії порядку слів.",
            "en": {
              "text": "A yes/no question is formed with the clitic suffix -ఆ added to the end of the word being questioned, with no inversion of word order."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "నువ్వు చదువుతున్నావా?",
                "Ти читаєш?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Yes/No Question Suffix: -ఆ — A2"
      },
      {
        "id": "converb-sequential",
        "title": "పూర్వకాలిక క్రియ: -ఇ — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприслівник на -ఇ з'єднує послідовні дії в одному реченні, приймаючи закінчення часу лише на останньому дієслові ланцюжка.",
            "en": {
              "text": "The -ఇ converb links sequential actions in one sentence, with the tense ending appearing only on the last verb in the chain."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "తిని నిద్రపోయాను.",
                "Я поїв і заснув."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Sequential Converb: -ఇ — B1"
      },
      {
        "id": "classifier-mandi",
        "title": "వర్గీకరణ పదం: మంది — B2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "При лічбі людей після числівника вживається класифікатор మంది ('осіб'), окремий від числівникового закінчення для неживих предметів.",
            "en": {
              "text": "When counting people, the classifier మంది ('persons') is used after the numeral, distinct from the numeral ending used for inanimate objects."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ముగ్గురు మంది",
                "троє людей"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Classifier for People: మంది — B2"
      },
      {
        "id": "rational-irrational-agreement",
        "title": "ప్రకృతి-అప్రకృతి: బహువచన ఒప్పందం — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "У множині людські іменники (чоловічий+жіночий) узгоджуються з дієсловом за окремою парадигмою, відмінною від тваринних і неживих іменників (середній рід), — та сама глибша дравідійська категорія 'розумного/нерозумного', що й у тамільській, накладена на трирідну систему.",
            "en": {
              "text": "In the plural, human nouns (masculine+feminine) agree with the verb through a separate paradigm from animal and inanimate nouns (neuter) — the same deeper Dravidian 'rational/irrational' category found in Tamil, overlaid on the three-gender system."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "వాళ్ళు వచ్చారు. (люди) / avi వచ్చాయి. (тварини/речі)",
                "they came (human) vs. they came (non-human, different verb agreement)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Rational/Irrational Plural Agreement — B2"
      },
      {
        "id": "echo-word-reduplication",
        "title": "జంట పదాలు: కాఫీ-గీఫీ — B2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Слово повторюється зі зміною першого приголосного (echo word), додаючи значення 'і подібне' до чогось, — риса, спільна з тамільською та іншими мовами Південної Азії.",
            "en": {
              "text": "A word is echoed with its first consonant altered (echo word), adding the meaning 'and such' to something — a feature shared with Tamil and other South Asian languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "కాఫీ-గీఫీ",
                "кава і все таке"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Echo-Word Reduplication — B2"
      },
      {
        "id": "negation-mattum-only",
        "title": "మాత్రమే: పరిమితి — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Частка మాత్రమే ('лише'), додана після іменника, обмежує його значення, — типовий приклад того, як частка може модифікувати будь-яку частину мови без зміни її форми.",
            "en": {
              "text": "The particle మాత్రమే ('only'), added after a noun, restricts its meaning — a typical example of how a particle can modify any part of speech without changing its form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "నేను మాత్రమే.",
                "Тільки я."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Restrictive Particle: మాత్రమే — B1"
      },
      {
        "id": "kavitrayam-classical-literature",
        "title": "కవిత్రయం: మహాభారత అనువాదం — B2",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "'Три поети' (кавітраям) — Наннайя, Тіккана й Єррапрагада — переклали санскритську Магабгарату телугу протягом трьох століть, заклавши основу класичної літературної традиції, що досі вивчається школярами.",
            "en": {
              "text": "The 'three poets' (kavitrayam) — Nannaya, Tikkana, and Yerrapragada — translated the Sanskrit Mahabharata into Telugu across three centuries, laying the foundation of a classical literary tradition still studied by schoolchildren."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "కవిత్రయం (три поети)",
                "the three poets"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Kavitrayam: The Classical Mahabharata Translation — B2"
      },
      {
        "id": "kuchipudi-dance",
        "title": "కూచిపూడి — B1",
        "emoji": "💃",
        "sections": [
          {
            "type": "intro",
            "text": "Кучіпуді — класичний танець телугу, названий за селом свого походження, поєднує швидкі ритмічні кроки з драматичною оповіддю й, на відміну від тамільського бгаратанатьяму, історично виконувався переважно чоловіками-браминами.",
            "en": {
              "text": "Kuchipudi is the classical Telugu dance form, named after its village of origin, blending quick rhythmic footwork with dramatic storytelling, and unlike Tamil Bharatanatyam, was historically performed mostly by Brahmin men."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "కూచిపూడి నృత్యం",
                "танець кучіпуді"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Kuchipudi Dance — B1"
      },
      {
        "id": "tollywood-cinema",
        "title": "టాలీవుడ్ — B1",
        "emoji": "🎬",
        "sections": [
          {
            "type": "intro",
            "text": "Телугумовна кіноіндустрія (Толівуд) — одна з найбільших у світі за кількістю щорічно вироблених фільмів, а бюджети видовищних епічних стрічок регулярно перевершують продукцію Болівуду.",
            "en": {
              "text": "The Telugu-language film industry (Tollywood) is one of the largest in the world by annual film output, with spectacle-epic budgets regularly surpassing Bollywood productions."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "టాలీవుడ్ సినిమా",
                "фільм Толівуду"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Tollywood Cinema — B1"
      },
      {
        "id": "hyderabadi-biryani",
        "title": "హైదరాబాదీ బిర్యానీ — A2",
        "emoji": "🍚",
        "sections": [
          {
            "type": "intro",
            "text": "Хайдерабадська біряні, приготована методом дум (запарювання в закритому казані на повільному вогні), — символ синтезу телугумовної й персько-мусульманської кулінарних традицій регіону.",
            "en": {
              "text": "Hyderabadi biryani, cooked by the dum method (slow-steaming in a sealed pot), is a symbol of the fusion between Telugu and Perso-Islamic culinary traditions in the region."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "దమ్ బిర్యానీ",
                "біряні дум"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Hyderabadi Biryani — A2"
      },
      {
        "id": "bathukamma-festival",
        "title": "బతుకమ్మ — B2",
        "emoji": "🌸",
        "sections": [
          {
            "type": "intro",
            "text": "Батукамма — квіткове свято, унікальне для регіону Телангана, коли жінки укладають багатоярусні квіткові композиції й танцюють довкола них дев'ять днів, — фестиваль без прямого аналога в решті телугумовного світу.",
            "en": {
              "text": "Bathukamma is a flower festival unique to the Telangana region, where women build multi-tiered flower arrangements and dance around them for nine days — a festival with no direct equivalent elsewhere in the Telugu-speaking world."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "బతుకమ్మ ఆడటం",
                "святкувати Батукамму"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Bathukamma: The Telangana Flower Festival — B2"
      },
      {
        "id": "charminar-monument",
        "title": "చార్మినార్ — B1",
        "emoji": "🕌",
        "sections": [
          {
            "type": "intro",
            "text": "Чармінар (XVI ст.) у Хайдарабаді — символ міста й регіону, побудований на честь закінчення епідемії чуми, з чотирма мінаретами, від яких і походить назва ('чотири мінарети').",
            "en": {
              "text": "The 16th-century Charminar in Hyderabad is the symbol of the city and region, built to mark the end of a plague epidemic, with four minarets giving it its name ('four minarets')."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "చార్మినార్ దగ్గర",
                "біля Чармінару"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Charminar Monument — B1"
      },
      {
        "id": "colors",
        "title": "రంగులు — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "table",
            "title": "Кольори",
            "rows": [
              [
                "червоний",
                "ఎరుపు"
              ],
              [
                "чорний",
                "నలుపు"
              ],
              [
                "білий",
                "తెలుపు"
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
        "title": "సంఖ్యలు: పది — A2",
        "emoji": "🔟",
        "sections": [
          {
            "type": "table",
            "title": "Десятки",
            "rows": [
              [
                "20",
                "ఇరవై"
              ],
              [
                "100",
                "వంద"
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
        "id": "family-terms",
        "title": "కుటుంబం — A2",
        "emoji": "👪",
        "sections": [
          {
            "type": "table",
            "title": "Родина",
            "rows": [
              [
                "батько",
                "నాన్న"
              ],
              [
                "мати",
                "అమ్మ"
              ],
              [
                "брат",
                "అన్న/తమ్ముడు"
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
        "title": "నమస్కారం — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "table",
            "title": "Вітання",
            "rows": [
              [
                "Привіт",
                "నమస్కారం"
              ],
              [
                "Дякую",
                "ధన్యవాదాలు"
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
        "title": "వాతావరణం — A2",
        "emoji": "☁️",
        "sections": [
          {
            "type": "table",
            "title": "Погода",
            "rows": [
              [
                "сонце",
                "సూర్యుడు"
              ],
              [
                "дощ",
                "వర్షం"
              ],
              [
                "вітер",
                "గాలి"
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
        "title": "శరీర భాగాలు — A2",
        "emoji": "🧍",
        "sections": [
          {
            "type": "table",
            "title": "Частини тіла",
            "rows": [
              [
                "голова",
                "తల"
              ],
              [
                "рука",
                "చేయి"
              ],
              [
                "око",
                "కన్ను"
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
        "title": "ఆహారం — A2",
        "emoji": "🍛",
        "sections": [
          {
            "type": "table",
            "title": "Їжа",
            "rows": [
              [
                "рис",
                "అన్నం"
              ],
              [
                "самбар",
                "పప్పు"
              ],
              [
                "хліб",
                "రొట్టె"
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
        "id": "clothing-vocabulary",
        "title": "దుస్తులు — A2",
        "emoji": "👘",
        "sections": [
          {
            "type": "table",
            "title": "Одяг",
            "rows": [
              [
                "сарі",
                "చీర"
              ],
              [
                "дхоті",
                "పంచె"
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
        "id": "animals-vocabulary",
        "title": "జంతువులు — A2",
        "emoji": "🐅",
        "sections": [
          {
            "type": "table",
            "title": "Тварини",
            "rows": [
              [
                "тигр",
                "పులి"
              ],
              [
                "собака",
                "కుక్క"
              ],
              [
                "корова",
                "ఆవు"
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
        "title": "దిక్కులు — B1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "table",
            "title": "Сторони світу",
            "rows": [
              [
                "північ",
                "ఉత్తరం"
              ],
              [
                "південь",
                "దక్షిణం"
              ],
              [
                "схід",
                "తూర్పు"
              ],
              [
                "захід",
                "పడమర"
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
        "id": "telugu-states-history",
        "title": "ఆంధ్రప్రదేశ్, తెలంగాణ — B2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "2014 року Андгра-Прадеш поділили на два окремі штати — Андгра-Прадеш і Телангану, — обидва з телугу як офіційною мовою, попри окрему історію й столицю Хайдарабад, спірну між ними.",
            "en": {
              "text": "In 2014, Andhra Pradesh was split into two separate states — Andhra Pradesh and Telangana — both with Telugu as the official language, despite separate histories and a capital, Hyderabad, contested between them."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "తెలంగాణ, ఆంధ్రప్రదేశ్ (два штати)",
                "Telangana, Andhra Pradesh (two states)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Andhra Pradesh/Telangana Split — B2"
      },
      {
        "id": "carnatic-music-telugu",
        "title": "కర్ణాటక సంగీతం: తెలుగు కృతులు — B2",
        "emoji": "🎵",
        "sections": [
          {
            "type": "intro",
            "text": "Хоча карнатична музика поширена в усій Південній Індії, значна частина її класичного репертуару (композиції Тьяґараджі) написана саме телугу, тож мова посідає центральне місце в цій музичній традиції.",
            "en": {
              "text": "Though Carnatic music is common across South India, a large share of its classical repertoire (Tyagaraja's compositions) is written specifically in Telugu, giving the language a central place in this musical tradition."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "త్యాగరాజ కృతులు (композиції Тьяґараджі)",
                "Tyagaraja's compositions"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Carnatic Music's Telugu Repertoire — B2"
      },
      {
        "id": "honorific-garu",
        "title": "గారు: గౌరవం — B1",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Шаноблива частка గారు, додана після імені чи титулу, — обов'язковий засіб ввічливого звертання до старших чи поважних осіб, уживаний навіть із професійними титулами.",
            "en": {
              "text": "The respectful particle గారు, added after a name or title, is an obligatory device for polite address to elders or respected people, used even with professional titles."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "రామారావు గారు",
                "пан Рамарао"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Honorific Particle: గారు — B1"
      },
      {
        "id": "telugu-diaspora",
        "title": "ప్రవాస తెలుగు — B2",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Значна телугумовна діаспора живе в США (особливо в технологічному секторі), Малайзії та Маврикії, з активними культурними асоціаціями, що підтримують мову й традиції поза Індією.",
            "en": {
              "text": "A significant Telugu-speaking diaspora lives in the US (especially in the tech sector), Malaysia, and Mauritius, with active cultural associations sustaining the language and traditions outside India."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ప్రవాస తెలుగు సంఘాలు",
                "телугумовні асоціації діаспори"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Telugu Diaspora — B2"
      },
      {
        "id": "ugadi-new-year",
        "title": "ఉగాది — B1",
        "emoji": "🎉",
        "sections": [
          {
            "type": "intro",
            "text": "Уґаді — телугумовний Новий рік, коли готують і споживають символічну страву угаді-паччаді з шести смаків (солодкого, кислого, гіркого тощо), що символізує різноманітність емоцій майбутнього року.",
            "en": {
              "text": "Ugadi is the Telugu New Year, when the symbolic dish ugadi pachadi — combining six tastes (sweet, sour, bitter, etc.) — is prepared and eaten, symbolizing the variety of emotions in the year ahead."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ఉగాది పచ్చడి",
                "страва угаді-паччаді"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ugadi: The Telugu New Year — B1"
      },
      {
        "id": "days-of-week",
        "title": "వారంలో రోజులు — A2",
        "emoji": "📅",
        "sections": [
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "понеділок",
                "సోమవారం"
              ],
              [
                "п'ятниця",
                "శుక్రవారం"
              ],
              [
                "неділя",
                "ఆదివారం"
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
        "id": "pearls-hyderabad-trade",
        "title": "హైదరాబాద్ ముత్యాలు — B2",
        "emoji": "💎",
        "sections": [
          {
            "type": "intro",
            "text": "Хайдарабад століттями був центром торгівлі перлинами й дорогоцінним камінням, і кварталу Патхаргатті досі притаманна власна спеціалізована лексика для сортування й оцінки перлин.",
            "en": {
              "text": "Hyderabad has been a center of pearl and gemstone trade for centuries, and the Pathargatti quarter still has its own specialized vocabulary for sorting and grading pearls."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ముత్యాల వ్యాపారం",
                "торгівля перлинами"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Hyderabad's Pearl Trade Heritage — B2"
      },
      {
        "id": "coordinating-conjunctions-extra",
        "title": "మరిన్ని సంయోజకాలు — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Частка ఎందుకంటే ('тому що') і сполучник కాబట్టి ('отже') розширюють базовий набір మరియు/లేదా/కానీ, додаючи причинові й наслідкові зв'язки.",
            "en": {
              "text": "The particle ఎందుకంటే ('because') and the connector కాబట్టి ('therefore') extend the basic మరియు/లేదా/కానీ set, adding causal and consequential links."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "నేను ఇంట్లో ఉన్నాను, ఎందుకంటే వర్షం పడుతోంది.",
                "Я вдома, бо йде дощ."
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
        "id": "irregular-verb-vellu-past",
        "title": "అనియమిత క్రియ: వెళ్ళు → వెళ్ళాను — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово వెళ్ళు ('іти') змінює кореневий приголосний у минулому часі непередбачувано порівняно з іншими дієсловами того самого класу, тож форму слід запам'ятовувати окремо.",
            "en": {
              "text": "The verb వెళ్ళు ('to go') changes its root consonant in the past tense unpredictably compared to other verbs of the same class, so the form must be memorized separately."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярна форма минулого часу",
            "rows": [
              [
                "వెళ్ళు (іти) → వెళ్ళాను",
                "go → went (irregular past stem)"
              ]
            ],
            "en": {
              "title": "Irregular Past Form"
            }
          }
        ],
        "titleEn": "Irregular Verb: వెళ్ళు ('to go') — B1"
      },
      {
        "id": "irregular-plural-manishi",
        "title": "అనియమిత బహువచనం: మనిషి → మనుషులు — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Іменник మనిషి ('людина') утворює множину зміною кореня (మనుషులు), а не просто додаванням звичайного суфікса множини -లు.",
            "en": {
              "text": "The noun మనిషి ('person') forms its plural through root alternation (మనుషులు), not simply by adding the ordinary plural suffix -లు."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярна множина",
            "rows": [
              [
                "మనిషి → మనుషులు (не *మనిషిలు)",
                "person → people (irregular root change)"
              ]
            ],
            "en": {
              "title": "Irregular Plural"
            }
          }
        ],
        "titleEn": "Irregular Plural: మనిషి → మనుషులు — B2"
      },
      {
        "id": "irregular-comparative-manchidi",
        "title": "అనియమిత పోలిక: మంచిది → మేలైనది — B1",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Замість очікуваної регулярної конструкції з కంటే для прикметника మంచిది ('добрий'), порівняльний ступінь часто передається окремим словом మేలైనది ('вище/краще').",
            "en": {
              "text": "Instead of the expected regular కంటే construction for the adjective మంచిది ('good'), the comparative is often conveyed with the separate word మేలైనది ('superior/better')."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярне порівняння",
            "rows": [
              [
                "మంచిది → మేలైనది (не *మంచిది కంటే)",
                "good → better (separate suppletive-like word)"
              ]
            ],
            "en": {
              "title": "Irregular Comparative"
            }
          }
        ],
        "titleEn": "Irregular Comparative: మంచిది → మేలైనది — B1"
      }
    ]
  }
];
