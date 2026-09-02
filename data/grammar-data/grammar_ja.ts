// Vymova — data/grammar-data/grammar_ja.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_JA: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "copula-desu",
        "title": "です — зв'язка \"бути\" — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "です (desu) ставиться в кінці речення й означає \"є/бути\". Не змінюється за родом чи числом підмета.",
            "en": {
              "text": "です (desu) is placed at the end of a sentence and means \"to be\". It does not change for the subject's gender or number."
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
                "私は先生です。(Watashi wa sensei desu.)",
                "Я вчитель."
              ],
              [
                "彼女は学生です。",
                "Вона студентка."
              ]
            ]
          }
        ]
      },
      {
        "id": "particle-wa",
        "title": "は — частка теми — A1",
        "emoji": "🏷️",
        "sections": [
          {
            "type": "intro",
            "text": "は (wa) позначає тему речення — те, про що йде мова, подібно до підмета.",
            "en": {
              "text": "は (wa) marks the topic of the sentence — what the sentence is about, similar to a subject."
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
                "猫は可愛いです。(Neko wa kawaii desu.)",
                "Кіт милий."
              ],
              [
                "今日は暑いです。",
                "Сьогодні спекотно."
              ]
            ]
          }
        ]
      },
      {
        "id": "particle-o",
        "title": "を — частка об'єкта — A1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "を (o) ставиться після прямого додатка, позначаючи об'єкт дії.",
            "en": {
              "text": "を (o) is placed after the direct object, marking the object of an action."
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
                "本を読みます。(Hon o yomimasu.)",
                "Я читаю книгу."
              ],
              [
                "水を飲みます。",
                "Я п'ю воду."
              ]
            ]
          }
        ]
      },
      {
        "id": "pronouns",
        "title": "Особові займенники — A1",
        "emoji": "🙋",
        "sections": [
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "私 (watashi)",
                "я"
              ],
              [
                "あなた (anata)",
                "ти / ви"
              ],
              [
                "彼 (kare)",
                "він"
              ],
              [
                "彼女 (kanojo)",
                "вона"
              ],
              [
                "私たち (watashitachi)",
                "ми"
              ]
            ]
          },
          {
            "type": "tip",
            "title": "Суфікс たち",
            "text": "たち (tachi) додається до займенників і слів, що позначають людей, для утворення множини: 友達たち (друзі).",
            "en": {
              "title": "The suffix たち",
              "text": "たち (tachi) is added to pronouns and words for people to form the plural: 友達たち (friends)."
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
                "彼は医者です。",
                "Він лікар."
              ],
              [
                "私たちは友達です。",
                "Ми друзі."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjectives",
        "title": "い- та な-прикметники — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Японські прикметники бувають двох типів: い-прикметники (закінчуються на い) і な-прикметники (потребують な перед іменником).",
            "en": {
              "text": "Japanese adjectives are of two types: い-adjectives (ending in い) and な-adjectives (requiring な before a noun)."
            }
          },
          {
            "type": "table",
            "title": "い- vs な-прикметники",
            "rows": [
              [
                "大きい家 (ōkii ie)",
                "великий дім (い-тип)"
              ],
              [
                "静かな町 (shizukana machi)",
                "тихе місто (な-тип)"
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
                "この家は大きいです。",
                "Цей дім великий."
              ],
              [
                "この町は静かです。",
                "Це місто тихе."
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "tenses",
    "title": "時制と活用",
    "titleEn": "Tenses & Verb Forms",
    "emoji": "🕐",
    "rules": [
      {
        "id": "present-polite",
        "title": "現在形（丁寧語）ます形 — A1",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Ввічлива форма теперішнього/майбутнього часу утворюється заміною закінчення дієслова на -ます (masu).",
            "en": {
              "text": "The polite present/future form is made by replacing the verb ending with -ます (masu)."
            }
          },
          {
            "type": "table",
            "title": "ます形",
            "rows": [
              [
                "飲みます (nomimasu)",
                "п'ю/питиму"
              ],
              [
                "食べます (tabemasu)",
                "їм/їстиму"
              ],
              [
                "します (shimasu)",
                "роблю/робитиму"
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
                "毎日コーヒーを飲みます。(Mainichi kōhī o nomimasu.)",
                "Я щодня п'ю каву."
              ]
            ]
          }
        ]
      },
      {
        "id": "present-plain",
        "title": "現在形（普通形）辞書形 — A2",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Звичайна (неформальна) форма — словникова форма дієслова, яка вживається в розмові з друзями й у підрядних реченнях.",
            "en": {
              "text": "The plain (casual) form is the dictionary form of the verb, used with friends and inside subordinate clauses."
            }
          },
          {
            "type": "table",
            "title": "辞書形 vs ます形",
            "rows": [
              [
                "飲む (nomu) = 飲みます",
                "пити"
              ],
              [
                "食べる (taberu) = 食べます",
                "їсти"
              ],
              [
                "する (suru) = します",
                "робити"
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
                "コーヒーを飲む。(Kōhī o nomu.)",
                "Я п'ю каву. (неформально)"
              ]
            ]
          }
        ]
      },
      {
        "id": "past-polite",
        "title": "過去形（丁寧語）ました — A1",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Ввічливий минулий час утворюється заміною -ます на -ました.",
            "en": {
              "text": "The polite past tense is made by replacing -ます with -ました."
            }
          },
          {
            "type": "table",
            "title": "ました",
            "rows": [
              [
                "飲みました (nomimashita)",
                "я випив"
              ],
              [
                "食べました (tabemashita)",
                "я з'їв"
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
                "昨日映画を見ました。(Kinō eiga o mimashita.)",
                "Вчора я подивився фільм."
              ]
            ]
          }
        ]
      },
      {
        "id": "past-plain",
        "title": "過去形（普通形）た形 — A2",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Звичайна форма минулого часу (た-форма) утворюється за тими самими правилами звуку, що й て-форма, замінюючи て на た.",
            "en": {
              "text": "The plain past form (ta-form) follows the same sound-change rules as the te-form, replacing て with た."
            }
          },
          {
            "type": "table",
            "title": "た形",
            "rows": [
              [
                "飲んだ (nonda)",
                "випив (неформально)"
              ],
              [
                "食べた (tabeta)",
                "з'їв (неформально)"
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
                "昨日、友達に会った。(Kinō, tomodachi ni atta.)",
                "Вчора я зустрів друга."
              ]
            ]
          }
        ]
      },
      {
        "id": "te-form",
        "title": "て形 — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "て-форма — одна з найважливіших форм дієслова: з'єднує дії, утворює прохання (てください) і тривалий час (ている).",
            "en": {
              "text": "The te-form is one of the most important verb forms: it connects actions, forms requests (te kudasai), and the continuous tense (te iru)."
            }
          },
          {
            "type": "table",
            "title": "て形",
            "rows": [
              [
                "飲んで (nonde)",
                "випивши/пий"
              ],
              [
                "食べて (tabete)",
                "з'ївши/їж"
              ],
              [
                "見て、話す。",
                "подивившись, говорю (послідовність дій)"
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
                "朝起きて、顔を洗います。",
                "Прокинувшись вранці, я вмиваюся."
              ]
            ]
          }
        ]
      },
      {
        "id": "progressive-teiru",
        "title": "ている形 — A1",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "て-форма + いる виражає тривалу дію («зараз роблю») або стан у результаті дії («вже зроблено»).",
            "en": {
              "text": "Te-form + いる expresses an ongoing action ('doing now') or a resulting state ('has been done')."
            }
          },
          {
            "type": "table",
            "title": "ている",
            "rows": [
              [
                "食べている (tabete iru)",
                "я зараз їм"
              ],
              [
                "結婚している (kekkon shite iru)",
                "я одружений (стан)"
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
                "今、テレビを見ています。",
                "Зараз я дивлюся телевізор."
              ]
            ]
          }
        ]
      },
      {
        "id": "negative-present",
        "title": "否定形 ない形・ません — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Ввічливе заперечення теперішнього часу — заміна -ます на -ません; неформальне — заміна закінчення на -ない.",
            "en": {
              "text": "Polite present negation replaces -ます with -ません; casual negation replaces the ending with -ない."
            }
          },
          {
            "type": "table",
            "title": "ません vs ない",
            "rows": [
              [
                "飲みません / 飲まない",
                "не п'ю (ввічл./неформ.)"
              ],
              [
                "食べません / 食べない",
                "не їм (ввічл./неформ.)"
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
                "お酒を飲みません。",
                "Я не п'ю алкоголь."
              ]
            ]
          }
        ]
      },
      {
        "id": "negative-past",
        "title": "過去否定形 なかった・ませんでした — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Ввічливе заперечення минулого часу — -ませんでした; неформальне — заміна ない на なかった.",
            "en": {
              "text": "Polite past negation is -ませんでした; casual negation replaces ない with なかった."
            }
          },
          {
            "type": "table",
            "title": "ませんでした vs なかった",
            "rows": [
              [
                "飲みませんでした / 飲まなかった",
                "не пив (ввічл./неформ.)"
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
                "昨日は勉強しませんでした。",
                "Вчора я не вчився."
              ]
            ]
          }
        ]
      },
      {
        "id": "potential-form",
        "title": "可能形 — B1",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Форма можливості («могти зробити») утворюється зміною закінчення дієслова й вживається замість できる + іменник.",
            "en": {
              "text": "The potential form ('can do') is formed by changing the verb ending and is used instead of dekiru + noun."
            }
          },
          {
            "type": "table",
            "title": "可能形",
            "rows": [
              [
                "飲む → 飲める",
                "могти пити"
              ],
              [
                "食べる → 食べられる",
                "могти їсти"
              ],
              [
                "する → できる",
                "могти робити"
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
                "日本語が話せます。",
                "Я вмію говорити японською."
              ]
            ]
          }
        ]
      },
      {
        "id": "passive-voice",
        "title": "受身形 — B1",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний стан утворюється спеціальним закінченням і вживається не лише для дій над предметом, а й для «постраждалого пасиву» (незручність від чиєїсь дії).",
            "en": {
              "text": "The passive is formed with a special ending and is used not only for actions on a thing, but also for the 'adversative passive' (inconvenience caused by someone's action)."
            }
          },
          {
            "type": "table",
            "title": "受身形",
            "rows": [
              [
                "褒める → 褒められる",
                "хвалити → бути похваленим"
              ],
              [
                "雨に降られた。",
                "Мене застав дощ. (постраждалий пасив)"
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
                "先生に褒められました。",
                "Мене похвалив учитель."
              ]
            ]
          }
        ]
      },
      {
        "id": "causative-voice",
        "title": "使役形 — B1",
        "emoji": "🔧",
        "sections": [
          {
            "type": "intro",
            "text": "Каузативна форма («змусити/дозволити зробити») утворюється закінченням -させる/-せる.",
            "en": {
              "text": "The causative form ('to make/let someone do') is formed with the ending -させる/-せる."
            }
          },
          {
            "type": "table",
            "title": "使役形",
            "rows": [
              [
                "食べる → 食べさせる",
                "змусити/дозволити їсти"
              ],
              [
                "行く → 行かせる",
                "змусити/дозволити піти"
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
                "母は子供に野菜を食べさせました。",
                "Мама змусила дитину з'їсти овочі."
              ]
            ]
          }
        ]
      },
      {
        "id": "conditional-forms",
        "title": "条件形 ば・たら・と・なら — B1",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "У японській є чотири різні умовні форми з нюансами: ば (загальна умова), たら (одноразова умова/після), と (природний наслідок), なら (умова щодо теми).",
            "en": {
              "text": "Japanese has four distinct conditional forms with different nuances: ば (general condition), たら (one-time condition/after), と (natural consequence), なら (topic-based condition)."
            }
          },
          {
            "type": "table",
            "title": "Чотири умовні форми",
            "rows": [
              [
                "安ければ、買います。",
                "Якщо буде дешево, куплю. (ば)"
              ],
              [
                "雨が降ったら、行きません。",
                "Якщо піде дощ, не піду. (たら)"
              ],
              [
                "春になると、暖かくなる。",
                "Коли настає весна, стає тепло. (と)"
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
                "時間があれば、手伝います。",
                "Якщо буде час, я допоможу."
              ]
            ]
          }
        ]
      },
      {
        "id": "volitional-form",
        "title": "意向形 — A2",
        "emoji": "🙌",
        "sections": [
          {
            "type": "intro",
            "text": "Вольова форма («давай зробимо») ввічливо утворюється -ましょう, неформально — зміною закінчення дієслова.",
            "en": {
              "text": "The volitional form ('let's do') is polite with -ましょう, casual with a changed verb ending."
            }
          },
          {
            "type": "table",
            "title": "意向形",
            "rows": [
              [
                "飲みましょう / 飲もう",
                "давай вип'ємо (ввічл./неформ.)"
              ],
              [
                "食べましょう / 食べよう",
                "давай поїмо (ввічл./неформ.)"
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
                "一緒に行きましょう。",
                "Давай підемо разом."
              ]
            ]
          }
        ]
      }
    ]
  }
];
