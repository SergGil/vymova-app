// Vymova — data/grammar-data/grammar_mt.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_MT: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Pronomi Personali — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Мальтійська — єдина семітська мова, що офіційно записується латинською абеткою.",
            "en": {
              "text": "Maltese is the only Semitic language officially written in the Latin alphabet."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "jien"
              ],
              [
                "ти",
                "int"
              ],
              [
                "він / вона",
                "huwa / hija"
              ],
              [
                "ми",
                "aħna"
              ],
              [
                "ви",
                "intom"
              ],
              [
                "вони",
                "huma"
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
        "id": "triradikal-ghereq",
        "title": "Għeruq Trilitteri — A2",
        "emoji": "🌳",
        "sections": [
          {
            "type": "intro",
            "text": "Як і арабська та іврит, мальтійська будує слова навколо кореня з трьох приголосних, вставляючи різні голосні й афікси для творення пов'язаних значень, — семітська морфологія, записана латинкою.",
            "en": {
              "text": "Like Arabic and Hebrew, Maltese builds words around a three-consonant root, inserting different vowels and affixes to form related meanings — Semitic morphology written in the Latin alphabet."
            }
          },
          {
            "type": "table",
            "title": "Приклад кореня k-t-b",
            "rows": [
              [
                "kiteb (написав), ktieb (книга), kittieb (письменник)",
                "три слова з одного кореня k-t-b"
              ]
            ],
            "en": {
              "title": "Example Root k-t-b"
            }
          }
        ],
        "titleEn": "Triconsonantal Roots — A2"
      },
      {
        "id": "artikolu-il-assimilazzjoni",
        "title": "L-Artikolu 'il-' u l-Assimilazzjoni — A2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Означений артикль il- уподібнюється до першого приголосного іменника, якщо той належить до 'сонячних літер' (t, d, n, s, r та інші), — та сама система, що й арабське al-, успадкована напряму.",
            "en": {
              "text": "The definite article il- assimilates to the noun's first consonant if it belongs to the 'sun letters' (t, d, n, s, r, and others) — the same system as Arabic al-, inherited directly."
            }
          },
          {
            "type": "table",
            "title": "Приклади асиміляції",
            "rows": [
              [
                "il- + xemx → ix-xemx (сонце)",
                "уподібнення до 'сонячної' літери x"
              ],
              [
                "il- + qamar → il-qamar (місяць)",
                "без уподібнення, 'місячна' літера"
              ]
            ],
            "en": {
              "title": "Assimilation Examples"
            }
          }
        ],
        "titleEn": "The Article 'il-' and Sun-Letter Assimilation — A2"
      },
      {
        "id": "negasion-ma-x",
        "title": "Negazzjoni: Ma...x — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення обрамляє дієслово з обох боків: частка ma- перед дієсловом і -x після нього — циркумфікс, а не проста частка перед дієсловом.",
            "en": {
              "text": "Negation encloses the verb from both sides: the particle ma- before the verb and -x after it — a circumfix, not a simple particle before the verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ma nafx.",
                "Я не знаю."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation: Ma...x — A1"
      },
      {
        "id": "preguntas",
        "title": "Mistoqsijiet — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання без питального слова передаються висхідною інтонацією, без окремої частки чи зміни порядку слів.",
            "en": {
              "text": "Yes/no questions are marked with rising intonation alone, with no separate particle or change in word order."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ġejt?",
                "Ти прийшов?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Questions — A1"
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
        "id": "perfect-tense-suffix",
        "title": "Il-Perfett: Suffissi — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий (перфектний) час утворюється додаванням особових суфіксів прямо до кореня — семітська стратегія, успадкована з арабської, тепер записана латинкою.",
            "en": {
              "text": "The past (perfect) tense is formed by adding person suffixes directly to the root — a Semitic strategy inherited from Arabic, now spelled in the Latin alphabet."
            }
          },
          {
            "type": "table",
            "title": "kiteb (написав) у перфекті",
            "rows": [
              [
                "ktibt / ktibt / kiteb",
                "я написав / ти написав / він написав"
              ]
            ],
            "en": {
              "title": "kiteb (wrote) in the perfect"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Jien ktibt ittra.",
                "Я написав листа."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Perfect: Suffix Conjugation — A1"
      },
      {
        "id": "imperfect-tense-prefix-suffix",
        "title": "L-Imperfett: Prefissi u Suffissi — A1",
        "emoji": "☀️",
        "sections": [
          {
            "type": "intro",
            "text": "Недоконаний час (теперішній/майбутній за значенням) поєднує префікс і суфікс навколо кореня одночасно — інша семітська стратегія, відмінна від суфіксального перфекта.",
            "en": {
              "text": "The imperfect (present/future in meaning) combines a prefix and a suffix around the root at once — a different Semitic strategy from the suffix-only perfect."
            }
          },
          {
            "type": "table",
            "title": "kiteb у недоконаному часі",
            "rows": [
              [
                "nikteb / tikteb / jikteb",
                "я пишу / ти пишеш / він пише"
              ]
            ],
            "en": {
              "title": "kiteb in the imperfect"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Jien nikteb ittra.",
                "Я пишу листа."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Imperfect: Prefix-Suffix Conjugation — A1"
      },
      {
        "id": "present-continuous-qed",
        "title": "Preżent Kontinwu: Qed — A2",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія в момент мовлення передається часткою qed перед недоконаним часом — периферична конструкція, що уточнює тривалість.",
            "en": {
              "text": "An action in progress at the moment of speaking is expressed with the particle qed before the imperfect — a periphrastic construction that clarifies ongoingness."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Jien qed nikteb ittra.",
                "Я саме пишу листа."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Continuous: Qed — A2"
      },
      {
        "id": "future-tense-se",
        "title": "Il-Futur: Se/Ser — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється часткою se/ser перед недоконаним часом — той самий недоконаний час, що й для теперішнього, розрізнений лише часткою.",
            "en": {
              "text": "The future tense is formed with the particle se/ser before the imperfect — the same imperfect used for the present, distinguished only by the particle."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Se nikteb ittra għada.",
                "Я напишу листа завтра."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Future: Se/Ser — A2"
      },
      {
        "id": "imperative-mood",
        "title": "Il-Mod Imperattiv — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб утворюється власною скороченою формою кореня, часто без префікса недоконаного часу, з окремими закінченнями для однини й множини.",
            "en": {
              "text": "The imperative is formed with its own shortened root form, often without the imperfect prefix, with separate endings for singular and plural."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ikteb!",
                "Пиши!"
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
        "id": "past-continuous-kont-qed",
        "title": "Imperfett fil-Passat: Kont Qed — B1",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія в минулому передається минулим часом допоміжного kien ('бути') плюс qed плюс недоконаний час.",
            "en": {
              "text": "An ongoing past action is expressed with the past tense of the auxiliary kien ('to be') plus qed plus the imperfect."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kont qed nikteb ittra.",
                "Я саме писав листа (тоді)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Past Continuous: Kont Qed — B1"
      },
      {
        "id": "conditional-mood-kieku",
        "title": "Il-Kundizzjonali: Kieku — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовне речення вводиться сполучником kieku ('якби'), за яким слідує перфект в обох частинах речення, незалежно від реального часу.",
            "en": {
              "text": "A conditional sentence is introduced with the conjunction kieku ('if only'), followed by the perfect in both clauses, regardless of the actual time."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kieku kelli l-flus, kont nixtri karozza.",
                "Якби я мав гроші, я б купив машину."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional: Kieku — B1"
      },
      {
        "id": "present-perfect-ilni",
        "title": "Ilni + Imperfett: Tul iż-Żmien — B1",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Слово ilni ('я вже'), плюс часовий вираз, плюс недоконаний час виражає дію, що триває від певного моменту до тепер, — конструкція без прямого аналога в українській.",
            "en": {
              "text": "The word ilni ('I've been'), plus a time expression, plus the imperfect expresses an action continuing from a certain point up to now — a construction with no direct Ukrainian analog."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ilni sagħtejn nistenna.",
                "Я чекаю вже дві години."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ilni + Imperfect: Duration Up to Now — B1"
      },
      {
        "id": "habitual-aspect",
        "title": "Drawwa: L-Imperfett Ġenerali — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Звичну дію передає той самий недоконаний час, що й теперішній момент, без окремого маркера, — контекст чи прислівник частоти уточнює звичність.",
            "en": {
              "text": "A habitual action is expressed with the same imperfect used for the present moment, with no dedicated marker — context or a frequency adverb clarifies the habituality."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kuljum nixrob il-kafè.",
                "Я щодня п'ю каву."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Habitual Aspect — B1"
      },
      {
        "id": "passive-participle-mahmul-style",
        "title": "Il-Passiv: Bidla fil-Mudell — B2",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний стан часто передається не окремим допоміжним дієсловом, а зміною самого голосного малюнка кореня — семітська стратегія словотворчого пасиву.",
            "en": {
              "text": "The passive voice is often conveyed not with a separate auxiliary verb but by changing the root's own vowel pattern — a Semitic word-formation passive strategy."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "miktub (написаний, пасивний дієприкметник від kiteb)",
                "пасивна форма через зміну малюнка"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Passive via Pattern Change — B2"
      },
      {
        "id": "reflexive-verb-form-tfaghel",
        "title": "Verbi Riflessivi: Prefiss T- — B2",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Префікс t-, доданий перед коренем, утворює зворотну чи взаємну форму дієслова — 'митися' від 'мити', без окремого зворотного займенника.",
            "en": {
              "text": "The prefix t-, added before the root, forms a reflexive or reciprocal verb — 'to wash oneself' from 'to wash', with no separate reflexive pronoun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ħasel (мити) → tħasel (митися)",
                "зворотна форма з префіксом t-"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reflexive Verbs: T- Prefix — B2"
      },
      {
        "id": "causative-verb-form",
        "title": "Verbi Kawżattivi: Radikal Ġeminat — B2",
        "emoji": "⚡",
        "sections": [
          {
            "type": "intro",
            "text": "Подвоєння середнього кореневого приголосного часто додає каузативне чи інтенсивне значення — 'змусити зробити' або 'зробити старанно' від того самого кореня.",
            "en": {
              "text": "Doubling the middle root consonant often adds a causative or intensive meaning — 'to make happen' or 'to do thoroughly' from the same root."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kiber (виріс) → kabbar (виростив, каузатив)",
                "подвоєння середнього приголосного"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Causative via Gemination — B2"
      },
      {
        "id": "modal-verb-jista",
        "title": "Verb Modali: Jista' — A2",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Здатність чи можливість виражається модальним дієсловом jista' ('могти'), поставленим перед головним дієсловом у недоконаному часі.",
            "en": {
              "text": "Ability or possibility is expressed with the modal verb jista' ('to be able'), placed before the main verb in the imperfect."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Jien nista' nikteb.",
                "Я можу писати."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Modal Verb: Jista' — A2"
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
        "id": "broken-plural-internal-change",
        "title": "Plural Miksur: Bidla Interna — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Багато іменників утворюють множину не суфіксом, а внутрішньою зміною голосного малюнка кореня, — 'зламана' множина, успадкована напряму з арабської.",
            "en": {
              "text": "Many nouns form their plural not with a suffix but with an internal change to the root's vowel pattern — a 'broken' plural inherited directly from Arabic."
            }
          },
          {
            "type": "table",
            "title": "Приклади зламаної множини",
            "rows": [
              [
                "ktieb (книга) → kotba (книги)",
                "внутрішня зміна, без суфікса"
              ],
              [
                "raġel (чоловік) → rġiel (чоловіки)",
                "інший зразок внутрішньої зміни"
              ]
            ],
            "en": {
              "title": "Broken Plural Examples"
            }
          }
        ],
        "titleEn": "Broken Plural: Internal Change — B1"
      },
      {
        "id": "sound-plural-external-suffix",
        "title": "Plural Sħiħ: Suffissi — A2",
        "emoji": "➕",
        "sections": [
          {
            "type": "intro",
            "text": "Інші іменники утворюють множину звичайним зовнішнім суфіксом -i, -ijiet чи -in, доданим до кореня без внутрішньої зміни, — 'ціла' множина поряд із 'зламаною'.",
            "en": {
              "text": "Other nouns form their plural with an ordinary external suffix -i, -ijiet, or -in added to the root with no internal change — a 'sound' plural alongside the 'broken' one."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "tifel → tfal (діти)",
                "внутрішня; вживається для порівняння"
              ],
              [
                "students-подібні запозичення: студenti",
                "зовнішній суфікс -i"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Sound Plural: External Suffix — A2"
      },
      {
        "id": "dual-number-marking",
        "title": "In-Numru Duwali: -ejn — B1",
        "emoji": "👥",
        "sections": [
          {
            "type": "intro",
            "text": "Мальтійська зберегла семітське двоїне число саме для одиниць часу й вимірювання — суфікс -ejn позначає рівно два, окремо від звичайної множини.",
            "en": {
              "text": "Maltese retained the Semitic dual number specifically for units of time and measurement — the suffix -ejn marks exactly two, distinct from the ordinary plural."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "jum → jumejn (не 'jiem tnejn', двоїна замість числівника плюс множина)",
                "два дні (двоїне число)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Dual Number: -ejn — B1"
      },
      {
        "id": "no-indefinite-article",
        "title": "Ebda Artikolu Indefinit — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Немає окремого неозначеного артикля — гола форма іменника без il- вже означає 'якийсь, один', на відміну від означеної форми з артиклем.",
            "en": {
              "text": "There's no separate indefinite article — the bare noun form without il- already means 'a, some', as opposed to the definite form with the article."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Rajt ktieb.",
                "Я бачив (якусь) книгу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "No Indefinite Article — A1"
      },
      {
        "id": "construct-state-vs-ta",
        "title": "L-Istat Kostrutt vs Ta' — B2",
        "emoji": "🏠",
        "sections": [
          {
            "type": "intro",
            "text": "Формальна присвійність поєднує два іменники напряму без прийменника (конструктний стан, успадкований з арабської), тоді як розмовна мова частіше вживає аналітичний зворот з ta' ('з').",
            "en": {
              "text": "Formal possession joins two nouns directly with no preposition (the construct state, inherited from Arabic), while colloquial speech more often uses the analytic construction with ta' ('of')."
            }
          },
          {
            "type": "table",
            "title": "Формальне проти розмовного",
            "rows": [
              [
                "dar il-mgħallem (формальне, конструктний стан)",
                "дім учителя"
              ],
              [
                "id-dar tal-mgħallem (розмовне, з ta')",
                "дім учителя"
              ]
            ],
            "en": {
              "title": "Formal vs. Colloquial"
            }
          }
        ],
        "titleEn": "Construct State vs. Ta' — B2"
      },
      {
        "id": "numeral-gender-polarity",
        "title": "Numri 3-10: Polarità tal-Ġeneru — B2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Числівники 3-10 мають протилежний рід відносно ліченого іменника — числівник у жіночій формі вживається з іменником чоловічого роду, і навпаки, — семітське правило гендерної полярності.",
            "en": {
              "text": "Numbers 3-10 take the opposite gender from the counted noun — the feminine-form number is used with a masculine noun, and vice versa — a Semitic gender-polarity rule."
            }
          },
          {
            "type": "table",
            "title": "Приклад полярності",
            "rows": [
              [
                "tliet subjan (три хлопчики, числівник у ж.р. формі з ч.р. іменником)",
                "гендерна полярність"
              ]
            ],
            "en": {
              "title": "Polarity Example"
            }
          }
        ],
        "titleEn": "Numbers 3-10: Gender Polarity — B2"
      },
      {
        "id": "adjective-agreement-gender-number",
        "title": "Aġġettivi: Ġeneru u Numru — A2",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники узгоджуються з іменником у роді й числі, з окремими закінченнями для чоловічого, жіночого й множинного вигляду.",
            "en": {
              "text": "Adjectives agree with the noun in gender and number, with separate endings for masculine, feminine, and plural forms."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "tifel kbir / tifla kbira / tfal kbar",
                "великий хлопчик / велика дівчинка / великі діти"
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
        "id": "adjective-placement-after-noun",
        "title": "Post l-Aġġettiv: Wara s-Sustantiv — A1",
        "emoji": "↔️",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник завжди стоїть після іменника, який він описує, — семітська модель, збережена попри латинську абетку.",
            "en": {
              "text": "The adjective always follows the noun it describes — a Semitic pattern retained despite the Latin alphabet."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "dar kbira",
                "великий дім (буквально 'дім великий')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adjective Placement After the Noun — A1"
      },
      {
        "id": "demonstratives-dan-dik",
        "title": "Dimostrattivi: Dan, Dik — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Вказівне dan (ч.р.)/din (ж.р.) означає 'цей', а dak/dik — 'той'; обидва узгоджуються з родом іменника.",
            "en": {
              "text": "The demonstrative dan (masc.)/din (fem.) means 'this', while dak/dik means 'that'; both agree with the noun's gender."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "dan il-ktieb",
                "ця книга"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Demonstratives: dan, dik — A1"
      },
      {
        "id": "question-words",
        "title": "Kliem Mistoqsija — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питальні слова x'inhu (що), min (хто), fejn (де), meta (коли) зазвичай стоять на початку речення.",
            "en": {
              "text": "The question words x'inhu (what), min (who), fejn (where), meta (when) normally stand at the start of the sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Fejn toqgħod?",
                "Де ти живеш?"
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
        "id": "relative-clause-li",
        "title": "Klawżola Relattiva: Li — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Відносне підрядне речення вводиться незмінним словом li, яке заміняє будь-який відмінюваний відносний займенник.",
            "en": {
              "text": "A relative clause is introduced by the invariant word li, which replaces any declined relative pronoun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ir-raġel li qed jikteb",
                "чоловік, який пише"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Clauses with li — B1"
      },
      {
        "id": "comparison-aktar-minn",
        "title": "Komparattiv: Aktar Minn — A2",
        "emoji": "⚖️",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняння вищого ступеня утворюється зворотом aktar ('більше') перед прикметником плюс minn ('ніж') — без окремого суфікса на прикметнику.",
            "en": {
              "text": "Comparison of superiority is formed with aktar ('more') before the adjective plus minn ('than') — with no dedicated suffix on the adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Hu aktar għoli minni.",
                "Він вищий за мене."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparison with aktar minn — A2"
      },
      {
        "id": "superlative-l-aktar",
        "title": "Superlattiv: L-Aktar — B1",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь додає артикль плюс aktar ('найбільше') перед прикметником.",
            "en": {
              "text": "The superlative adds the article plus aktar ('the most') before the adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "l-aktar għoli",
                "найвищий"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Superlative with l-aktar — B1"
      },
      {
        "id": "object-pronoun-suffix-on-verb",
        "title": "Pronom Oġġett: Suffiss fuq il-Verb — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Займенник прямого додатка приєднується прямо до кінця дієслова як суфікс, а не стоїть окремим словом, — семітська модель, успадкована з арабської.",
            "en": {
              "text": "The direct object pronoun attaches directly to the end of the verb as a suffix, rather than standing as a separate word — a Semitic pattern inherited from Arabic."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "rajtu (я побачив його, raj- + -tu)",
                "займенник злитий з дієсловом"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Object Pronoun Suffixes on the Verb — B1"
      },
      {
        "id": "preposition-pronoun-fusion",
        "title": "Prepożizzjoni + Pronom: Fużjoni — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Прийменник і особовий займенник зливаються в одне слово, як і в арабській, — окрема відмінювана форма прийменника для кожної особи.",
            "en": {
              "text": "A preposition and a personal pronoun fuse into one word, just as in Arabic — a separate declined preposition form for each person."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "miegħi (зі мною, ma' + -i)",
                "прийменник, злитий із займенником"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Preposition-Pronoun Fusion — B1"
      },
      {
        "id": "gender-system-m-f",
        "title": "Sistema tal-Ġeneru: Maskil, Femminil — A1",
        "emoji": "⚥",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники мають лише два роди — чоловічий і жіночий; середнього роду немає взагалі, як і в арабській.",
            "en": {
              "text": "Nouns have only two genders — masculine and feminine; there's no neuter gender at all, as in Arabic."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "raġel (ч.р.) / mara (ж.р.)",
                "чоловік / жінка"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Gender System: Masculine, Feminine — A1"
      },
      {
        "id": "diminutive-suffix",
        "title": "Suffiss Dgħajjef — B2",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувально-пестливий відтінок передається зміною голосного малюнка кореня, а не окремим суфіксом, — та сама внутрішня стратегія, що й у множині.",
            "en": {
              "text": "The diminutive shade is conveyed by changing the root's vowel pattern, not with a separate suffix — the same internal strategy used for the plural."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kelb (пес) → kelbuni (манюсінький песик)",
                "зменшена форма"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Diminutive via Pattern Change — B2"
      },
      {
        "id": "vocative-forms",
        "title": "Vokattiv: Ja — B1",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Звертання часто вводиться часткою ja перед ім'ям чи титулом — сигнал прямого звертання, а не просто згадки про особу.",
            "en": {
              "text": "Direct address is often introduced with the particle ja before a name or title — a signal of direct address, not merely mentioning a person."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ja Ġorġ!",
                "Джордже!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Vocative: Ja — B1"
      },
      {
        "id": "emphatic-pronoun-forms",
        "title": "Pronomi Enfatiċi — B1",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Незалежні особові займенники (jien, int, huwa) уживаються лише для наголосу чи контрасту, оскільки особа вже позначена в самому дієслові через суфікс чи префікс.",
            "en": {
              "text": "Independent personal pronouns (jien, int, huwa) are used only for emphasis or contrast, since person is already marked on the verb itself through the suffix or prefix."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Jien ktibt, mhux int.",
                "Я написав, не ти (наголос через незалежний займенник)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Emphatic Independent Pronouns — B1"
      },
      {
        "id": "word-order-svo-flexible",
        "title": "Ordni tal-Kliem: SVO Flessibbli — B1",
        "emoji": "↔️",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів — підмет-присудок-додаток, але через маркування особи в самому дієслові порядок досить гнучкий і слугує для наголосу.",
            "en": {
              "text": "The basic word order is subject-verb-object, but because person is marked on the verb itself, the order is fairly flexible and serves for emphasis."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Il-ktieb qrajtu.",
                "Книгу я прочитав (наголос на книзі)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Word Order: Flexible SVO — B1"
      },
      {
        "id": "possessive-pronoun-suffix-on-noun",
        "title": "Suffiss Possessiv fuq is-Sustantiv — B1",
        "emoji": "🏠",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійний займенник може приєднуватися прямо до кінця іменника як суфікс, альтернативно до аналітичного звороту з ta'.",
            "en": {
              "text": "A possessive pronoun can attach directly to the end of a noun as a suffix, as an alternative to the analytic ta' construction."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ktiebi (моя книга, ktieb + -i)",
                "присвійний суфікс"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Possessive Suffix on the Noun — B1"
      },
      {
        "id": "moon-letters-depth",
        "title": "Ittri Qamrija — B1",
        "emoji": "🌙",
        "sections": [
          {
            "type": "intro",
            "text": "На противагу сонячним літерам, 'місячні' приголосні (як b, ġ, ħ) не спричиняють жодної зміни артикля il- — той самий артикль лишається незмінним перед ними.",
            "en": {
              "text": "In contrast to sun letters, 'moon' consonants (like b, ġ, ħ) cause no change to the article il- at all — the same article stays unchanged before them."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "il-bieb (двері, без уподібнення)",
                "місячна літера, артикль незмінний"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Moon Letters — B1"
      },
      {
        "id": "plural-adjective-agreement-with-human-plural",
        "title": "Aġġettivi mal-Plural Uman — B2",
        "emoji": "👥",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник узгоджується зі справжньою множиною лише коли іменник позначає людей; для неживих предметів у множині натомість часто вживають форму жіночого роду однини, трактуючи їх як збірне ціле.",
            "en": {
              "text": "The adjective agrees with true plural only when the noun denotes people; for inanimate plural items, the feminine singular form is instead often used, treating them as a collective whole."
            }
          },
          {
            "type": "table",
            "title": "Приклад збірного трактування",
            "rows": [
              [
                "it-tfal kbar (діти, справжня множина)",
                "il-kotba ħelwa (книги, трактовані як збірне ж.р. одн.)"
              ]
            ],
            "en": {
              "title": "Collective Treatment Example"
            }
          }
        ],
        "titleEn": "Adjective Agreement: Human vs. Collective Plural — B2"
      },
      {
        "id": "cardinal-numbers-1-2-special",
        "title": "Numri 1 u 2: Imġieba Speċjali — B1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Числівник 'один' поводиться як звичайний прикметник після іменника, а 'два' часто взагалі опускається, оскільки саме двоїне число вже позначає кількість 'два'.",
            "en": {
              "text": "The number 'one' behaves like an ordinary adjective after the noun, while 'two' is often omitted entirely, since the dual number itself already marks the quantity 'two'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ktieb wieħed",
                "одна книга"
              ],
              [
                "jumejn (без слова 'два', вже двоїна)",
                "два дні"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Numbers 1 and 2: Special Behavior — B1"
      },
      {
        "id": "compound-word-formation",
        "title": "Kliem Komposti — B2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Складні слова часто поєднують семітський корінь з романським чи англійським елементом, відображаючи мовну історію острова.",
            "en": {
              "text": "Compound words often combine a Semitic root with a Romance or English element, reflecting the island's linguistic history."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "dar tal-kura (будинок піклування, суміш семітського dar і романського kura)",
                "приклад мішаного складного слова"
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
        "id": "verb-derivation-form-system",
        "title": "Sistema tal-Forom Verbali — B2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Той самий трилітерний корінь може набувати кількох 'форм' — базову, інтенсивну, каузативну, зворотну — кожна з власним фіксованим малюнком голосних і приголосних, паралельно до арабської системи дієслівних порід.",
            "en": {
              "text": "The same triliteral root can take several 'forms' — basic, intensive, causative, reflexive — each with its own fixed pattern of vowels and consonants, paralleling Arabic's verb-form (binyan) system."
            }
          },
          {
            "type": "table",
            "title": "Приклад форм від k-t-b",
            "rows": [
              [
                "kiteb (писати, базова)",
                "kittеb (посилена/інтенсивна форма)"
              ]
            ],
            "en": {
              "title": "Forms from k-t-b"
            }
          }
        ],
        "titleEn": "The Verb-Form Derivation System — B2"
      },
      {
        "id": "quadriliteral-roots",
        "title": "Għeruq Kwadrilitteri — B2",
        "emoji": "🌳",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі дієслова, особливо похідні від звуконаслідування чи запозичень, мають чотириприголосний корінь замість звичного трьох — рідкісніший, але продуктивний тип семітського кореня.",
            "en": {
              "text": "Some verbs, especially those derived from onomatopoeia or loanwords, have a four-consonant root instead of the usual three — a rarer but productive type of Semitic root."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "daħdaħ (штовхати туди-сюди, чотириприголосний корінь)",
                "чотириприголосний корінь"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Quadriliteral Roots — B2"
      },
      {
        "id": "weak-hollow-root-irregular-conjugation",
        "title": "Għeruq Dgħajfa: Konjugazzjoni Irregolari — B2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Корені з голосною чи слабким приголосним усередині (w, y) поводяться нерегулярно при відмінюванні, стягуючи чи випускаючи середній приголосний, — 'порожні' корені, типова семітська складність.",
            "en": {
              "text": "Roots with a vowel or weak consonant in the middle (w, y) behave irregularly during conjugation, contracting or dropping the middle consonant — 'hollow' roots, a typical Semitic complexity."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "qal (сказав, від слабкого кореня q-w-l, w зникає)",
                "нерегулярне відмінювання порожнього кореня"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Weak/Hollow Roots: Irregular Conjugation — B2"
      },
      {
        "id": "italian-sicilian-loanword-layer",
        "title": "Kelmiet Sqallin u Taljani — B1",
        "emoji": "🇮🇹",
        "sections": [
          {
            "type": "intro",
            "text": "Століття сицилійського й італійського впливу залишили глибокий шар романських запозичень у побутовій, кулінарній і мистецькій лексиці, вбудований у семітську граматичну основу.",
            "en": {
              "text": "Centuries of Sicilian and Italian influence left a deep layer of Romance loanwords in everyday, culinary, and artistic vocabulary, embedded within the Semitic grammatical core."
            }
          },
          {
            "type": "table",
            "title": "Приклади запозичень",
            "rows": [
              [
                "ċittà (місто) — з італ. città",
                "італійське запозичення"
              ],
              [
                "forma (форма) — з італ. forma",
                "італійське запозичення"
              ]
            ],
            "en": {
              "title": "Loanword Examples"
            }
          }
        ],
        "titleEn": "Italian and Sicilian Loanwords — B1"
      },
      {
        "id": "english-loanword-layer-modern",
        "title": "Kelmiet Ingliżi Moderni — B1",
        "emoji": "🇬🇧",
        "sections": [
          {
            "type": "intro",
            "text": "Британське колоніальне правління й сучасна глобалізація додали окремий, пізніший шар англійських запозичень у технічній, ділового й спортивній лексиці.",
            "en": {
              "text": "British colonial rule and modern globalization added a separate, later layer of English loanwords in technical, business, and sports vocabulary."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "futbol (футбол) — з англ. football",
                "англійське запозичення"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Modern English Loanwords — B1"
      },
      {
        "id": "hybrid-plural-english-loanwords",
        "title": "Plural Ibridu għal Kliem Ingliż — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Свіжі англійські запозичення іноді отримують просто додане -s замість семітського малюнка множини, — гібридна морфологія, що зраджує їхнє недавнє походження.",
            "en": {
              "text": "Fresh English loanwords sometimes simply take an added -s instead of a Semitic plural pattern — hybrid morphology betraying their recent origin."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "komputers (комп'ютери, англійська множина -s замість семітського малюнка)",
                "гібридна множина"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Hybrid Plurals for English Loanwords — B2"
      },
      {
        "id": "catholic-vocabulary-vs-islamic-arabic",
        "title": "Vokabularju Kattoliku vs Għeruq Iżlamiċi — B2",
        "emoji": "⛪",
        "sections": [
          {
            "type": "intro",
            "text": "Хоча граматика й корені семітські, релігійна лексика мальтійської католицька, а не мусульманська, — там, де арабська зберегла ісламські терміни, мальтійська запозичила відповідники з італійської чи латини.",
            "en": {
              "text": "Although the grammar and roots are Semitic, Maltese religious vocabulary is Catholic, not Muslim — where Arabic kept Islamic terms, Maltese borrowed equivalents from Italian or Latin instead."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "knisja (церква) — з італійської/латини, не семітський корінь",
                "католицька лексика через романські мови"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Catholic Vocabulary vs. Islamic Arabic Cognates — B2"
      },
      {
        "id": "code-switching-maltese-english",
        "title": "Taħlit Malti-Ingliż — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "У міському й освіченому мовленні типове перемикання кодів усередині одного речення — семітський граматичний каркас, а частина лексики чи цілі фрази вставляються з англійської без адаптації.",
            "en": {
              "text": "Urban, educated speech typically code-switches within a single sentence — the Semitic grammatical frame, while chunks of vocabulary or whole phrases are inserted from English without adaptation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Jien qed naħdem fl-office.",
                "Я працюю в офісі (English office вставлене напряму)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Maltese-English Code-Switching — B2"
      },
      {
        "id": "latin-script-history-unique",
        "title": "Storja tal-Alfabett Latin — B1",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Мальтійська — єдина серед сучасних семітських мов, яка офіційно й повністю записується латинською абеткою, — статус, кодифікований лише у ХХ столітті, тоді як арабська й іврит зберігають власні абетки.",
            "en": {
              "text": "Maltese is unique among modern Semitic languages in being officially and entirely written in the Latin alphabet — a status codified only in the 20th century, while Arabic and Hebrew keep their own scripts."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Офіційна орфографія мальтійської була кодифікована 1924 року.",
                "історія латинізації письма"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Unique History of Latin-Script Semitic — B1"
      },
      {
        "id": "comparative-synthetic-vs-analytic-by-origin",
        "title": "Komparattiv: Skont l-Oriġini tal-Kelma — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники семітського кореня іноді утворюють вищий ступінь власним внутрішнім малюнком, тоді як прикметники романського чи англійського походження завжди вживають лише аналітичне aktar.",
            "en": {
              "text": "Adjectives of Semitic root sometimes form the comparative with their own internal pattern, while adjectives of Romance or English origin always use only the analytic aktar."
            }
          },
          {
            "type": "table",
            "title": "Дві стратегії за походженням",
            "rows": [
              [
                "kbir → akbar (семітський корінь, внутрішня зміна)",
                "більший"
              ],
              [
                "modern → aktar modern (романське запозичення, лише аналітично)",
                "сучасніший"
              ]
            ],
            "en": {
              "title": "Two Strategies by Origin"
            }
          }
        ],
        "titleEn": "Comparative Strategy by Word Origin — B2"
      },
      {
        "id": "time-expression-ilni-depth",
        "title": "Ilni: Aktar Mudelli — B2",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Та сама конструкція ilni узгоджується за особою (ili, ilek, ilu...) і може вживатися й із запереченням, щоб показати, скільки часу минуло від того, як щось НЕ відбувалося.",
            "en": {
              "text": "The same ilni construction agrees for person (ili, ilek, ilu...) and can also be used with negation, to show how much time has passed since something has NOT happened."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ili ma narah.",
                "Я вже давно його не бачив."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ilni: Further Patterns — B2"
      },
      {
        "id": "large-numeral-mixed-vocabulary",
        "title": "Numri Kbar: Vokabularju Mħallat — B1",
        "emoji": "💯",
        "sections": [
          {
            "type": "intro",
            "text": "Великі числа поєднують семітські корені для менших чисел з романськими запозиченнями для сотень і тисяч — той самий мовний мікс, що й у решті лексикону.",
            "en": {
              "text": "Large numbers combine Semitic roots for smaller numbers with Romance loanwords for hundreds and thousands — the same language mix found throughout the lexicon."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "elf (тисяча) — з романського кореня, вживається поряд із семітськими малими числами",
                "змішана числова лексика"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Large Numbers: Mixed Vocabulary — B1"
      },
      {
        "id": "politeness-register-formal-address",
        "title": "Reġistru ta' Rispett — B2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Ввічливе звертання до незнайомців чи старших уживає форму третьої особи чи титул замість прямого 'ти', — окремий регістр, відмінний від буденного мовлення.",
            "en": {
              "text": "Polite address to strangers or elders uses a third-person form or a title instead of direct 'you' — a separate register, distinct from everyday speech."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Sinjur, jista' jgħinni?",
                "Пане, чи не могли б ви мені допомогти?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Polite Register of Address — B2"
      },
      {
        "id": "passive-participle-pattern-mmxxx",
        "title": "Partiċipju Passiv: Mudell M- — B2",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний дієприкметник часто утворюється префіксом m- плюс власним голосним малюнком, — окрема, повністю передбачувана форма для кожного кореня.",
            "en": {
              "text": "The passive participle is often formed with the prefix m- plus its own vowel pattern — a separate, fully predictable form for each root."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "miftuħ (відкритий, від fetaħ 'відкрити')",
                "пасивний дієприкметник з префіксом m-"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Passive Participle: M- Pattern — B2"
      },
      {
        "id": "reflexive-reciprocal-t-prefix-depth",
        "title": "T- Prefiss: Riflessiv u Reċiproku — B2",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "Той самий префікс t- може означати і зворотну дію ('митися'), і взаємну ('обійматися одне з одним') — розрізняється лише кількістю учасників і контекстом.",
            "en": {
              "text": "The same prefix t- can mean both a reflexive action ('to wash oneself') and a reciprocal one ('to hug each other') — distinguished only by the number of participants and context."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "tħabbew (обійнялися одне з одним, взаємне)",
                "взаємне значення t-префікса"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "T- Prefix: Reflexive and Reciprocal — B2"
      },
      {
        "id": "causative-gemination-depth",
        "title": "Ġeminazzjoni Kawżattiva: Aktar Eżempji — B2",
        "emoji": "⚡",
        "sections": [
          {
            "type": "intro",
            "text": "Подвоєння середнього приголосного може також надавати значення багаторазовості чи інтенсивності дії, а не лише каузативності, — той самий малюнок, кілька можливих відтінків залежно від кореня.",
            "en": {
              "text": "Doubling the middle consonant can also convey repetitiveness or intensity of an action, not just causation — the same pattern, several possible shades depending on the root."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "qatel (убив) → qattel (перебив багатьох, інтенсивна форма)",
                "інтенсивна, не каузативна функція"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Gemination: Further Examples — B2"
      },
      {
        "id": "color-terms-vocabulary",
        "title": "Kliem tal-Kuluri — A2",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Основні кольори мають семітський корінь і узгоджуються з іменником за родом, як і решта прикметників.",
            "en": {
              "text": "Basic colors have a Semitic root and agree with the noun in gender, like other adjectives."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "aħmar (червоний, ч.р.) / ħamra (червона, ж.р.)",
                "колір, узгоджений за родом"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Color Terms — A2"
      },
      {
        "id": "adjective-comparative-min-ma",
        "title": "Komparattiv: Aktar Dettalji — B2",
        "emoji": "⚖️",
        "sections": [
          {
            "type": "intro",
            "text": "У формальнішому регістрі порівняльний прийменник minn може узгоджуватися із займенником, зливаючись у нове слово, — та сама модель прийменниково-займенникового злиття, що й в основах.",
            "en": {
              "text": "In a more formal register, the comparative preposition minn can agree with a pronoun, fusing into a new word — the same preposition-pronoun fusion pattern seen in the basics."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "akbar minnu (більший за нього, minn + -u)",
                "прийменник злитий із займенником"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparative: Preposition-Pronoun Fusion — B2"
      },
      {
        "id": "definite-genitive-construct-depth",
        "title": "L-Istat Kostrutt: Aktar Eżempji — B2",
        "emoji": "🏠",
        "sections": [
          {
            "type": "intro",
            "text": "У конструктному стані лише другий іменник пари може отримати означений артикль — перший завжди лишається без артикля, навіть коли вся фраза означена.",
            "en": {
              "text": "In the construct state, only the second noun of the pair can take the definite article — the first always stays articleless, even when the whole phrase is definite."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "dar il-mgħallem (без артикля на dar, хоч фраза означена)",
                "перший іменник без артикля"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Construct State: Further Examples — B2"
      },
      {
        "id": "dual-plural-interaction",
        "title": "Duwali vs Plural: Interazzjoni — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Двоїна вживається лише рівно для двох; від трьох одиниць часу й далі мова переходить на звичайну множину плюс числівник, — двоїна не продовжує рахунок далі двох.",
            "en": {
              "text": "The dual is used only for exactly two; from three time units onward the language switches to the ordinary plural plus a number — the dual doesn't extend the count beyond two."
            }
          },
          {
            "type": "table",
            "title": "Двоїна проти множини",
            "rows": [
              [
                "jumejn (два дні, двоїна)",
                "tlett ijiem (три дні, множина + числівник)"
              ]
            ],
            "en": {
              "title": "Dual vs. Plural"
            }
          }
        ],
        "titleEn": "Dual vs. Plural Interaction — B2"
      },
      {
        "id": "loanword-verb-integration-morphology",
        "title": "Verbi Misluta: Integrazzjoni Morfoloġika — B2",
        "emoji": "🔧",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслова, запозичені з італійської чи англійської, часто набувають штучного чотириприголосного 'кореня' з першого й останнього приголосного слова, щоб вписатися в семітську систему відмінювання.",
            "en": {
              "text": "Verbs borrowed from Italian or English often acquire an artificial four-consonant 'root' from the word's first and last consonants, to fit into the Semitic conjugation system."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ikkuppja (скопіював, від англ. copy, вписане в семітську систему)",
                "запозичене дієслово з семітською морфологією"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Loanword Verbs: Morphological Integration — B2"
      },
      {
        "id": "numeral-classifier-absence-explicit",
        "title": "Ebda Klassifikaturi tan-Numri — B1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від багатьох східноазійських мов, мальтійська не вимагає класифікатора для лічби предметів — тільки узгодження роду й гендерну полярність, розглянуту раніше.",
            "en": {
              "text": "Unlike many East Asian languages, Maltese requires no classifier for counting objects — only gender agreement and the gender polarity covered earlier."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "tliet subjan (три хлопчики, без класифікатора)",
                "числівник напряму, без класифікатора"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "No Numeral Classifiers — B1"
      },
      {
        "id": "fixed-idiomatic-expressions",
        "title": "Espressjonijiet Idjomatiċi — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Численні застиглі ідіоми вживаються цілими блоками з переносним значенням, не виведеним з буквального перекладу окремих слів.",
            "en": {
              "text": "Numerous fixed idioms are used as whole blocks with a figurative meaning not derived from the literal translation of the individual words."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Xoffтejh mal-art. (буквально 'губи на землі' → дуже сумний)",
                "застигла ідіома"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Fixed Idiomatic Expressions — B2"
      },
      {
        "id": "maltese-dialectal-variation",
        "title": "Djaletti: Malta vs Għawdex — B2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Стандартна мальтійська базується на говірках столичної Валлетти, тоді як острів Гоцо й сільські регіони Мальти мають виразно відмінну вимову й лексику.",
            "en": {
              "text": "Standard Maltese is based on the dialects of capital Valletta, while the island of Gozo and rural regions of Malta have distinctly different pronunciation and vocabulary."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Гоцо має власну впізнавану вимову, відмінну від столичного стандарту.",
                "діалектна варіація острова"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Dialects: Malta vs. Gozo — B2"
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
        "title": "Verbi Irregolari — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслова kien ('бути') і ġie ('приходити') мають повністю нерегулярне відмінювання, що не виводиться з жодного стандартного зразка кореня.",
            "en": {
              "text": "The verbs kien ('to be') and ġie ('to come') have completely irregular conjugation that can't be derived from any standard root pattern."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярні форми",
            "rows": [
              [
                "kont / kont / kien",
                "я був / ти був / він був"
              ]
            ]
          }
        ],
        "titleEn": "Irregular Verbs — B1"
      },
      {
        "id": "irregular-plural-forms",
        "title": "Plural Irregolari — B2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька частовживаних іменників мають форму множини, яку неможливо передбачити з жодного стандартного зразка зламаної множини.",
            "en": {
              "text": "A few common nouns have a plural form that can't be predicted from any standard broken-plural pattern."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "mara (жінка) → nisa (не за очікуваним зразком)",
                "нерегулярна форма множини"
              ]
            ]
          }
        ],
        "titleEn": "Irregular Plurals — B2"
      },
      {
        "id": "fixed-proverbs-archaic-grammar",
        "title": "Qwiel u Grammatika Antika — B2",
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
                "Min iqum kmieni jagħmel ġurnata tajba.",
                "Хто рано встає, тому Бог дає (застигла приказка з архаїчними формами)."
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
