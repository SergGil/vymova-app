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
  },
  {
    "id": "grammar",
    "title": "文法",
    "titleEn": "Grammar",
    "emoji": "📖",
    "rules": [
      {
        "id": "particle-ga",
        "title": "が — 主語を表す助詞 — A1",
        "emoji": "🏷️",
        "sections": [
          {
            "type": "intro",
            "text": "が позначає граматичний підмет, часто нову або конкретну інформацію, на відміну від は, яка позначає тему.",
            "en": {
              "text": "が marks the grammatical subject, often new or specific information, unlike は which marks the topic."
            }
          },
          {
            "type": "table",
            "title": "が vs は",
            "rows": [
              [
                "猫がいます。",
                "Є кіт. (нова інформація)"
              ],
              [
                "誰が来ましたか。",
                "Хто прийшов?"
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
                "雨が降っています。",
                "Іде дощ."
              ]
            ]
          }
        ]
      },
      {
        "id": "particle-ni",
        "title": "に — 場所・時間・方向 — A1",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "に позначає місце перебування, конкретний момент часу, напрям руху чи одержувача дії.",
            "en": {
              "text": "に marks a location of existence, a specific point in time, direction of movement, or the recipient of an action."
            }
          },
          {
            "type": "table",
            "title": "に",
            "rows": [
              [
                "東京にいます。",
                "Я в Токіо."
              ],
              [
                "7時に起きます。",
                "Я прокидаюсь о 7-й."
              ],
              [
                "友達に会います。",
                "Я зустрічаюсь з другом."
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
                "学校に行きます。",
                "Я йду до школи."
              ]
            ]
          }
        ]
      },
      {
        "id": "particle-de",
        "title": "で — 手段・場所 — A1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "で позначає місце, де відбувається дія (не існування), а також засіб чи знаряддя.",
            "en": {
              "text": "で marks the location where an action takes place (not existence), as well as means or instrument."
            }
          },
          {
            "type": "table",
            "title": "で",
            "rows": [
              [
                "レストランで食べます。",
                "Я їм у ресторані."
              ],
              [
                "バスで行きます。",
                "Я їду автобусом."
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
                "日本語で話します。",
                "Я говорю японською."
              ]
            ]
          }
        ]
      },
      {
        "id": "particle-to-ya",
        "title": "と・や — 並列助詞 — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "と перелічує всі елементи повністю («і... і»); や перелічує лише приклади з решти неозначеного списку («і... і т.д.»).",
            "en": {
              "text": "と lists all elements exhaustively ('and... and'); や lists only examples from an open-ended list ('and... etc.')."
            }
          },
          {
            "type": "table",
            "title": "と vs や",
            "rows": [
              [
                "ペンとノート",
                "ручка і зошит (тільки ці два)"
              ],
              [
                "ペンやノート",
                "ручка, зошит і подібне (не тільки ці два)"
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
                "リンゴとバナナを買いました。",
                "Я купив яблуко і банан."
              ]
            ]
          }
        ]
      },
      {
        "id": "particle-mo",
        "title": "も — も助詞（〜も） — A1",
        "emoji": "➕",
        "sections": [
          {
            "type": "intro",
            "text": "も замінює は чи が й означає «теж/також».",
            "en": {
              "text": "も replaces は or が and means 'also/too'."
            }
          },
          {
            "type": "table",
            "title": "も",
            "rows": [
              [
                "私も学生です。",
                "Я теж студент."
              ],
              [
                "彼も来ます。",
                "Він теж прийде."
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
                "これも好きです。",
                "Це мені теж подобається."
              ]
            ]
          }
        ]
      },
      {
        "id": "particle-no",
        "title": "の — 所有・修飾 — A1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "の з'єднує два іменники, виражаючи належність чи означення (аналог «‑ового»).",
            "en": {
              "text": "の connects two nouns, expressing possession or modification (like an apostrophe-s)."
            }
          },
          {
            "type": "table",
            "title": "の",
            "rows": [
              [
                "私の本",
                "моя книга"
              ],
              [
                "日本の文化",
                "японська культура"
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
                "これは友達の車です。",
                "Це машина мого друга."
              ]
            ]
          }
        ]
      },
      {
        "id": "particle-kara-made",
        "title": "から・まで — A2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "から (з/від) вказує початкову точку в часі/просторі, まで (до) — кінцеву.",
            "en": {
              "text": "から (from/since) marks a starting point in time/space, まで (until/to) marks the ending point."
            }
          },
          {
            "type": "table",
            "title": "から / まで",
            "rows": [
              [
                "9時から5時まで",
                "з 9-ї до 5-ї"
              ],
              [
                "東京から大阪まで",
                "з Токіо до Осаки"
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
                "月曜日から働きます。",
                "Я почну працювати з понеділка."
              ]
            ]
          }
        ]
      },
      {
        "id": "particle-he",
        "title": "へ — 方向 — A1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "へ (вимовляється «e») позначає загальний напрям руху, часто взаємозамінна з に для напрямку.",
            "en": {
              "text": "へ (pronounced 'e') marks a general direction of movement, often interchangeable with に for direction."
            }
          },
          {
            "type": "table",
            "title": "へ",
            "rows": [
              [
                "日本へ行きます。",
                "Я їду до Японії."
              ],
              [
                "どちらへ？",
                "Куди (ви прямуєте)?"
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
                "駅へ向かっています。",
                "Я прямую до вокзалу."
              ]
            ]
          }
        ]
      },
      {
        "id": "question-particle-ka",
        "title": "か — 疑問文 — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "か в кінці речення перетворює його на питання, без зміни порядку слів чи допоміжного дієслова.",
            "en": {
              "text": "か at the end of a sentence turns it into a question, with no word-order change or auxiliary verb."
            }
          },
          {
            "type": "table",
            "title": "か",
            "rows": [
              [
                "学生ですか。",
                "Ти студент?"
              ],
              [
                "何を食べますか。",
                "Що ти їстимеш?"
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
                "元気ですか。",
                "Як справи? (букв. Ти бадьорий?)"
              ]
            ]
          }
        ]
      },
      {
        "id": "counters-classifiers",
        "title": "助数詞 — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Унікальна риса японської — при рахуванні предметів потрібен спеціальний класифікатор, що залежить від форми/типу предмета: 人 (люди), 匹 (тварини), 本 (довгі предмети), 枚 (плоскі предмети).",
            "en": {
              "text": "A unique Japanese feature — counting objects requires a specific classifier depending on the object's shape/type: 人 (people), 匹 (animals), 本 (long objects), 枚 (flat objects)."
            }
          },
          {
            "type": "table",
            "title": "Класифікатори",
            "rows": [
              [
                "三人 (san-nin)",
                "троє людей"
              ],
              [
                "二匹 (ni-hiki)",
                "дві тварини"
              ],
              [
                "一本 (ip-pon)",
                "один довгий предмет"
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
                "猫が二匹います。",
                "Є два коти."
              ]
            ]
          }
        ]
      },
      {
        "id": "numbers-cardinal",
        "title": "数字 — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Числа мають дві системи читання (китайську й японську) залежно від контексту й наступного класифікатора.",
            "en": {
              "text": "Numbers have two reading systems (Sino-Japanese and native Japanese) depending on context and the following classifier."
            }
          },
          {
            "type": "table",
            "title": "1–10",
            "rows": [
              [
                "一、二、三 (ichi, ni, san)",
                "1, 2, 3"
              ],
              [
                "ひとつ、ふたつ、みっつ",
                "1, 2, 3 (рахунок предметів)"
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
                "りんごを三つください。",
                "Дайте мені три яблука, будь ласка."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-conjugation-i",
        "title": "い形容詞の活用 — A2",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "い-прикметники самі відмінюються за часом і запереченням, без допомоги です у минулому/заперечному часі.",
            "en": {
              "text": "い-adjectives conjugate on their own for tense and negation, without relying on です in the past/negative."
            }
          },
          {
            "type": "table",
            "title": "大きい (великий) — відмінювання",
            "rows": [
              [
                "大きい",
                "великий (теперішній)"
              ],
              [
                "大きくない",
                "не великий"
              ],
              [
                "大きかった",
                "був великим"
              ],
              [
                "大きくなかった",
                "не був великим"
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
                "この映画は面白くなかった。",
                "Цей фільм не був цікавим."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-conjugation-na",
        "title": "な形容詞の活用 — A2",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "な-прикметники відмінюються, як іменники, за допомогою です/だ, а не власним закінченням.",
            "en": {
              "text": "な-adjectives conjugate like nouns, using です/だ, rather than an ending of their own."
            }
          },
          {
            "type": "table",
            "title": "静か (тихий) — відмінювання",
            "rows": [
              [
                "静かです",
                "тихий (теперішній)"
              ],
              [
                "静かじゃないです",
                "не тихий"
              ],
              [
                "静かでした",
                "був тихим"
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
                "この部屋は静かじゃないです。",
                "Ця кімната не тиха."
              ]
            ]
          }
        ]
      },
      {
        "id": "comparative-superlative",
        "title": "比較・最上級 — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняльний ступінь: [A]の方が[B]より + прикметник; найвищий: 一番 + прикметник.",
            "en": {
              "text": "Comparative: [A] no hō ga [B] yori + adjective; superlative: ichiban + adjective."
            }
          },
          {
            "type": "table",
            "title": "の方が...より / 一番",
            "rows": [
              [
                "東京の方が大阪より大きいです。",
                "Токіо більше за Осаку."
              ],
              [
                "これが一番好きです。",
                "Це мені подобається найбільше."
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
                "富士山が日本で一番高い山です。",
                "Фудзі — найвища гора Японії."
              ]
            ]
          }
        ]
      },
      {
        "id": "demonstrative-kosoado",
        "title": "こそあど言葉 — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Систематичний ряд слів на こ- (біля мовця), そ- (біля співрозмовника), あ- (далеко від обох), ど- (питальне).",
            "en": {
              "text": "A systematic series of words with こ- (near speaker), そ- (near listener), あ- (far from both), ど- (interrogative)."
            }
          },
          {
            "type": "table",
            "title": "これ/それ/あれ/どれ",
            "rows": [
              [
                "これ / この",
                "це / цей (біля мене)"
              ],
              [
                "それ / その",
                "те / той (біля тебе)"
              ],
              [
                "あれ / あの",
                "он те / он той (далеко)"
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
                "これは何ですか。",
                "Що це?"
              ]
            ]
          }
        ]
      },
      {
        "id": "relative-clause-attributive",
        "title": "連体修飾（名詞を修飾する文） — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Замість відносного займенника («який») ціле речення в звичайній формі ставиться безпосередньо перед іменником, який воно означує.",
            "en": {
              "text": "Instead of a relative pronoun ('which'), an entire clause in plain form is placed directly before the noun it modifies."
            }
          },
          {
            "type": "table",
            "title": "Означувальне речення + іменник",
            "rows": [
              [
                "私が読んだ本",
                "книга, яку я прочитав"
              ],
              [
                "昨日会った人",
                "людина, яку я зустрів учора"
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
                "これは母が作った料理です。",
                "Це страва, яку приготувала мама."
              ]
            ]
          }
        ]
      },
      {
        "id": "giving-receiving-verbs",
        "title": "あげる・もらう・くれる — B1",
        "emoji": "🎁",
        "sections": [
          {
            "type": "intro",
            "text": "Унікальна риса японської — вибір дієслова давання/отримання залежить від напряму дії відносно мовця: あげる (я даю комусь), もらう (я отримую від когось), くれる (хтось дає мені).",
            "en": {
              "text": "A unique Japanese feature — the giving/receiving verb depends on the direction of the action relative to the speaker: あげる (I give to someone), もらう (I receive from someone), くれる (someone gives to me)."
            }
          },
          {
            "type": "table",
            "title": "あげる / もらう / くれる",
            "rows": [
              [
                "私は友達に本をあげました。",
                "Я дав книгу другові."
              ],
              [
                "私は友達に本をもらいました。",
                "Я отримав книгу від друга."
              ],
              [
                "友達が私に本をくれました。",
                "Друг дав мені книгу."
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
                "兄が私に時計をくれた。",
                "Брат подарував мені годинник."
              ]
            ]
          }
        ]
      },
      {
        "id": "desire-tai-form",
        "title": "たい形 — A2",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Форма бажання (-たい, «хочу зробити») утворюється додаванням たい до основи дієслова ます-форми й відмінюється як い-прикметник.",
            "en": {
              "text": "The desiderative form (-たい, 'want to do') is formed by adding たい to the masu-form stem and conjugates like an い-adjective."
            }
          },
          {
            "type": "table",
            "title": "たい形",
            "rows": [
              [
                "飲みたい",
                "хочу пити"
              ],
              [
                "行きたくない",
                "не хочу йти"
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
                "日本に行きたいです。",
                "Я хочу поїхати до Японії."
              ]
            ]
          }
        ]
      },
      {
        "id": "suggestion-mashou",
        "title": "ましょう・ませんか — A1",
        "emoji": "🙌",
        "sections": [
          {
            "type": "intro",
            "text": "ましょう пропонує спільну дію («давайте»), ませんか — ввічливо запрошує («чи не хочете...?»).",
            "en": {
              "text": "ましょう proposes a joint action ('let's'), ませんか politely invites ('wouldn't you like to...?')."
            }
          },
          {
            "type": "table",
            "title": "ましょう / ませんか",
            "rows": [
              [
                "行きましょう。",
                "Давайте підемо."
              ],
              [
                "一緒に行きませんか。",
                "Чи не хочете піти разом?"
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
                "お茶を飲みませんか。",
                "Не хочете випити чаю?"
              ]
            ]
          }
        ]
      },
      {
        "id": "request-kudasai",
        "title": "〜てください — A1",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "て-форма + ください виражає ввічливе прохання.",
            "en": {
              "text": "Te-form + ください expresses a polite request."
            }
          },
          {
            "type": "table",
            "title": "てください",
            "rows": [
              [
                "待ってください。",
                "Зачекайте, будь ласка."
              ],
              [
                "見てください。",
                "Подивіться, будь ласка."
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
                "ここに名前を書いてください。",
                "Напишіть тут своє ім'я, будь ласка."
              ]
            ]
          }
        ]
      },
      {
        "id": "permission-prohibition",
        "title": "〜てもいい・〜てはいけない — A2",
        "emoji": "🚦",
        "sections": [
          {
            "type": "intro",
            "text": "て-форма + もいい виражає дозвіл («можна»); て-форма + はいけない — заборону («не можна»).",
            "en": {
              "text": "Te-form + もいい expresses permission ('may/can'); te-form + はいけない expresses prohibition ('must not')."
            }
          },
          {
            "type": "table",
            "title": "てもいい / てはいけない",
            "rows": [
              [
                "入ってもいいです。",
                "Можна зайти."
              ],
              [
                "ここに座ってはいけません。",
                "Тут не можна сидіти."
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
                "写真を撮ってもいいですか。",
                "Можна сфотографувати?"
              ]
            ]
          }
        ]
      },
      {
        "id": "obligation-nakereba",
        "title": "〜なければならない — B1",
        "emoji": "☁️",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечна форма + ければならない виражає обов'язок («мушу», букв. «якщо не зроблю, не годиться»).",
            "en": {
              "text": "Negative form + kereba naranai expresses obligation ('must', literally 'if I don't do it, it won't do')."
            }
          },
          {
            "type": "table",
            "title": "なければならない",
            "rows": [
              [
                "行かなければならない。",
                "Я мушу піти."
              ],
              [
                "勉強しなければなりません。",
                "Мені треба вчитися."
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
                "今日中に終わらせなければならない。",
                "Я мушу закінчити це сьогодні."
              ]
            ]
          }
        ]
      }
    ]
  }
];
