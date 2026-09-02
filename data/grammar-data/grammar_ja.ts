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
        ],
        "titleEn": "です — The Copula \"To Be\""
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
        ],
        "titleEn": "は — The Topic Particle"
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
        ],
        "titleEn": "を — The Object Particle"
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
        ],
        "titleEn": "Personal Pronouns — A1"
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
        ],
        "titleEn": "I- and Na-Adjectives — A1"
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
        ],
        "titleEn": "Present Tense (Polite Masu-Form) — A1"
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
        ],
        "titleEn": "Present Tense (Plain/Dictionary Form) — A2"
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
        ],
        "titleEn": "Past Tense (Polite Mashita) — A1"
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
        ],
        "titleEn": "Past Tense (Plain Ta-Form) — A2"
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
        ],
        "titleEn": "The Te-Form — A2"
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
        ],
        "titleEn": "The Progressive Te Iru Form — A1"
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
        ],
        "titleEn": "Negative Present (Nai/Masen) — A1"
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
        ],
        "titleEn": "Negative Past (Nakatta/Masen Deshita) — A2"
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
        ],
        "titleEn": "Potential Form — B1"
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
        ],
        "titleEn": "Passive Voice — B1"
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
        ],
        "titleEn": "Causative Voice — B1"
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
        ],
        "titleEn": "Conditional Forms (Ba/Tara/To/Nara) — B1"
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
        ],
        "titleEn": "Volitional Form (Let's Do) — A2"
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
        ],
        "titleEn": "が — The Subject Particle"
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
        ],
        "titleEn": "に — Location, Time, Direction"
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
        ],
        "titleEn": "で — Means, Location of Action"
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
        ],
        "titleEn": "と・や — Listing Conjunctions"
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
        ],
        "titleEn": "も — Also/Too"
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
        ],
        "titleEn": "の — Possession & Modification"
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
        ],
        "titleEn": "から・まで — From/Until"
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
        ],
        "titleEn": "へ — Direction"
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
        ],
        "titleEn": "か — Question Particle"
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
        ],
        "titleEn": "Counters & Classifiers — A2"
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
        ],
        "titleEn": "Cardinal Numbers — A1"
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
        ],
        "titleEn": "I-Adjective Conjugation — A2"
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
        ],
        "titleEn": "Na-Adjective Conjugation — A2"
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
        ],
        "titleEn": "Comparison & Superlative — A2"
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
        ],
        "titleEn": "Kosoado Demonstratives — A1"
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
        ],
        "titleEn": "Attributive (Relative) Clauses — B1"
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
        ],
        "titleEn": "Giving & Receiving Verbs (Ageru/Morau/Kureru) — B1"
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
        ],
        "titleEn": "Desiderative Form (-Tai) — A2"
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
        ],
        "titleEn": "Suggestions (Mashou/Masen Ka) — A1"
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
        ],
        "titleEn": "Requests with Te Kudasai — A1"
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
        ],
        "titleEn": "Permission & Prohibition (Temo Ii/Tewa Ikenai) — A2"
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
        ],
        "titleEn": "Obligation (Nakereba Naranai) — B1"
      },
      {
        "id": "experience-koto-ga-aru",
        "title": "〜たことがある — A2",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "た-форма + ことがある виражає життєвий досвід («колись робив»), а не одноразову минулу дію.",
            "en": {
              "text": "Ta-form + koto ga aru expresses life experience ('have done at some point'), not a single past action."
            }
          },
          {
            "type": "table",
            "title": "たことがある",
            "rows": [
              [
                "日本に行ったことがあります。",
                "Я був у Японії (колись)."
              ],
              [
                "寿司を食べたことがない。",
                "Я ніколи не їв суші."
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
                "富士山に登ったことがありますか。",
                "Ти колись піднімався на Фудзі?"
              ]
            ]
          }
        ],
        "titleEn": "Experience (Ta Koto Ga Aru) — A2"
      },
      {
        "id": "quotation-to",
        "title": "と — 引用 — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "intro",
            "text": "と після прямої чи непрямої мови вводить дієслово говоріння/думки (言う, 思う).",
            "en": {
              "text": "と after direct or reported speech introduces a verb of saying/thinking (言う, 思う)."
            }
          },
          {
            "type": "table",
            "title": "と言う / と思う",
            "rows": [
              [
                "「元気です」と言いました。",
                "Він сказав: «Я в порядку»."
              ],
              [
                "雨が降ると思います。",
                "Я думаю, що піде дощ."
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
                "彼は来ないと言った。",
                "Він сказав, що не прийде."
              ]
            ]
          }
        ],
        "titleEn": "The Quotation Particle と — B1"
      },
      {
        "id": "reason-kara-node",
        "title": "から・ので — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "から вказує причину суб'єктивно (частіше в розмові); ので — об'єктивніше й ввічливіше.",
            "en": {
              "text": "から marks a reason subjectively (more common in speech); ので is more objective and polite."
            }
          },
          {
            "type": "table",
            "title": "から / ので",
            "rows": [
              [
                "疲れたから、休みます。",
                "Бо втомився, відпочину."
              ],
              [
                "雨なので、行きません。",
                "Оскільки дощ, я не піду."
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
                "時間がないから、急ぎましょう。",
                "Оскільки немає часу, поспішаймо."
              ]
            ]
          }
        ],
        "titleEn": "Reason (Kara/Node) — A2"
      },
      {
        "id": "contrast-kedo-ga",
        "title": "けど・が — A2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "けど (розмовне) і が (ввічливіше/письмове) обидва означають «але» й ставляться в кінці підрядного речення.",
            "en": {
              "text": "けど (casual) and が (more polite/written) both mean 'but' and are placed at the end of the subordinate clause."
            }
          },
          {
            "type": "table",
            "title": "けど / が",
            "rows": [
              [
                "高いけど、買います。",
                "Хоч і дорого, я куплю."
              ],
              [
                "すみませんが、質問があります。",
                "Перепрошую, але в мене є питання."
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
                "行きたいけど、時間がない。",
                "Хочу піти, але немає часу."
              ]
            ]
          }
        ],
        "titleEn": "Contrast (Kedo/Ga) — A2"
      },
      {
        "id": "purpose-tame-ni",
        "title": "ために — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "辞書形 + ために виражає мету («заради/для того, щоб»).",
            "en": {
              "text": "Dictionary form + tame ni expresses purpose ('in order to')."
            }
          },
          {
            "type": "table",
            "title": "ために",
            "rows": [
              [
                "日本語を勉強するために、日本に来ました。",
                "Я приїхав до Японії, щоб вивчати японську."
              ],
              [
                "家族のために働きます。",
                "Я працюю заради сім'ї."
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
                "健康のために運動します。",
                "Я займаюся спортом заради здоров'я."
              ]
            ]
          }
        ],
        "titleEn": "Purpose (Tame Ni) — B1"
      },
      {
        "id": "keigo-sonkeigo",
        "title": "尊敬語 — B1",
        "emoji": "🙇",
        "sections": [
          {
            "type": "intro",
            "text": "Шаноблива мова (сонкейго) підносить дію співрозмовника чи третьої особи вищого статусу за допомогою особливих форм дієслів чи конструкції お + ます-основа + になる.",
            "en": {
              "text": "Honorific speech (sonkeigo) elevates the action of a listener or a higher-status third person, using special verb forms or the o + masu-stem + ni naru construction."
            }
          },
          {
            "type": "table",
            "title": "尊敬語 — приклади",
            "rows": [
              [
                "行く → いらっしゃる",
                "йти → зволити піти (про іншого)"
              ],
              [
                "読む → お読みになる",
                "читати → зволити прочитати"
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
                "先生はもういらっしゃいました。",
                "Вчитель уже прибув."
              ]
            ]
          }
        ],
        "titleEn": "Sonkeigo (Honorific Speech) — B1"
      },
      {
        "id": "keigo-kenjougo",
        "title": "謙譲語 — B1",
        "emoji": "🙇",
        "sections": [
          {
            "type": "intro",
            "text": "Скромна мова (кенджого) принижує дію самого мовця, щоб непрямо підвищити статус співрозмовника — окремі дієслова чи конструкція お + ます-основа + する.",
            "en": {
              "text": "Humble speech (kenjougo) lowers the speaker's own action to indirectly elevate the listener's status — special verbs or the o + masu-stem + suru construction."
            }
          },
          {
            "type": "table",
            "title": "謙譲語 — приклади",
            "rows": [
              [
                "行く → 参る",
                "йти → скромно піти (про себе)"
              ],
              [
                "言う → 申す",
                "казати → скромно сказати"
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
                "明日、伺います。",
                "Завтра я скромно прийду."
              ]
            ]
          }
        ],
        "titleEn": "Kenjougo (Humble Speech) — B1"
      },
      {
        "id": "keigo-teineigo",
        "title": "丁寧語 — A2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Ввічлива мова (тейнейго) — нейтральна ввічливість (です/ます), яка не підносить і не принижує нікого, на відміну від сонкейго/кенджого.",
            "en": {
              "text": "Polite speech (teineigo) is neutral politeness (desu/masu), which neither elevates nor lowers anyone, unlike sonkeigo/kenjougo."
            }
          },
          {
            "type": "table",
            "title": "Три рівні ввічливості",
            "rows": [
              [
                "食べます (丁寧語)",
                "їм (нейтрально ввічливо)"
              ],
              [
                "召し上がります (尊敬語)",
                "зволять їсти (про іншого)"
              ],
              [
                "いただきます (謙譲語)",
                "скромно їм (про себе)"
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
                "毎朝コーヒーを飲みます。",
                "Я щоранку п'ю каву."
              ]
            ]
          }
        ],
        "titleEn": "Teineigo (Polite Speech) — A2"
      },
      {
        "id": "days-of-week",
        "title": "曜日 — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Усі дні тижня закінчуються на 曜日 (yōbi) і названі на честь стихій/небесних тіл.",
            "en": {
              "text": "All days of the week end in 曜日 (yōbi) and are named after elements/celestial bodies."
            }
          },
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "月曜日、火曜日、水曜日",
                "понеділок, вівторок, середа"
              ],
              [
                "木曜日、金曜日",
                "четвер, п'ятниця"
              ],
              [
                "土曜日、日曜日",
                "субота, неділя"
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
                "金曜日に会いましょう。",
                "Побачимось у п'ятницю."
              ]
            ]
          }
        ],
        "titleEn": "Days of the Week — A1"
      },
      {
        "id": "months-dates",
        "title": "月と日付 — A2",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Місяці — це просто числа + 月 (gatsu); дні місяця мають особливі, часто нерегулярні читання для 1-10 числа.",
            "en": {
              "text": "Months are just numbers + 月 (gatsu); days of the month have special, often irregular readings for the 1st-10th."
            }
          },
          {
            "type": "table",
            "title": "Місяці й дата",
            "rows": [
              [
                "一月、二月、三月",
                "січень, лютий, березень"
              ],
              [
                "一日 (tsuitachi)",
                "1-ше число (нерегулярне читання)"
              ],
              [
                "五月五日",
                "5 травня"
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
                "誕生日は六月です。",
                "Мій день народження в червні."
              ]
            ]
          }
        ],
        "titleEn": "Months & Dates — A2"
      },
      {
        "id": "telling-time",
        "title": "時間の言い方 — A2",
        "emoji": "🕒",
        "sections": [
          {
            "type": "intro",
            "text": "Питання про час: 何時ですか。Відповідь будується числом + 時 (година) + 分 (хвилина).",
            "en": {
              "text": "To ask the time: nanji desu ka. The answer uses number + 時 (hour) + 分 (minute)."
            }
          },
          {
            "type": "table",
            "title": "Вказування часу",
            "rows": [
              [
                "三時です。",
                "Третя година."
              ],
              [
                "三時半です。",
                "Пів на четверту."
              ],
              [
                "三時十五分です。",
                "Чверть на четверту."
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
                "今何時ですか。",
                "Котра зараз година?"
              ]
            ]
          }
        ],
        "titleEn": "Telling Time — A2"
      },
      {
        "id": "plain-form-casual-speech",
        "title": "普通形とカジュアルな会話 — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "intro",
            "text": "У розмові з друзями й родиною замість ввічливої форми на -ます/です вживають звичайну (辞書形/た形), яку також використовують у підрядних реченнях.",
            "en": {
              "text": "In conversation with friends and family, the plain form (dictionary/ta-form) is used instead of the polite -masu/desu form, and it's also used in subordinate clauses."
            }
          },
          {
            "type": "table",
            "title": "丁寧語 vs 普通形",
            "rows": [
              [
                "行きます → 行く",
                "йти (ввічл. → звич.)"
              ],
              [
                "食べました → 食べた",
                "з'їв (ввічл. → звич.)"
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
                "今日、映画見に行く?",
                "Підеш сьогодні дивитися фільм? (неформально)"
              ]
            ]
          }
        ],
        "titleEn": "Plain Form in Casual Speech — B1"
      },
      {
        "id": "existence-aru-iru",
        "title": "ある・いる — 存在を表す動詞 — A1",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "いる вживається для істот (людей, тварин), ある — для неживих предметів; обидва означають «є/існує».",
            "en": {
              "text": "いる is used for animate beings (people, animals), ある for inanimate objects; both mean 'there is/exist'."
            }
          },
          {
            "type": "table",
            "title": "いる vs ある",
            "rows": [
              [
                "猫がいます。",
                "Є кіт."
              ],
              [
                "本があります。",
                "Є книга."
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
                "公園に子供がいます。",
                "У парку є діти."
              ]
            ]
          }
        ],
        "titleEn": "Existence: Aru vs Iru — A1"
      },
      {
        "id": "adverbs",
        "title": "副詞 — A2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Прислівники здебільшого незмінні й стоять перед дієсловом чи прикметником, який вони описують.",
            "en": {
              "text": "Adverbs are mostly invariable and precede the verb or adjective they describe."
            }
          },
          {
            "type": "table",
            "title": "Основні прислівники",
            "rows": [
              [
                "とても",
                "дуже"
              ],
              [
                "ゆっくり",
                "повільно"
              ],
              [
                "いつも",
                "завжди"
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
                "彼はゆっくり話します。",
                "Він говорить повільно."
              ]
            ]
          }
        ],
        "titleEn": "Adverbs — A2"
      },
      {
        "id": "onomatopoeia",
        "title": "擬音語・擬態語 — B1",
        "emoji": "🔊",
        "sections": [
          {
            "type": "intro",
            "text": "Унікальна риса японської — величезний шар звуконаслідувальних (擬音語) і образних (擬態語) слів, які активно вживаються навіть у формальній мові.",
            "en": {
              "text": "A unique Japanese feature — a huge layer of sound-imitating (giongo) and mimetic (gitaigo) words, actively used even in formal speech."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "わんわん",
                "гав-гав (собака)"
              ],
              [
                "どきどき",
                "калатання серця (від хвилювання)"
              ],
              [
                "にこにこ",
                "усміхаючись"
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
                "彼女はにこにこ笑っています。",
                "Вона усміхається."
              ]
            ]
          }
        ],
        "titleEn": "Onomatopoeia & Mimetic Words — B1"
      },
      {
        "id": "word-order-flexibility",
        "title": "語順の柔軟性 — A2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок SOV, але через частки, які позначають роль слова, порядок додатків доволі гнучкий.",
            "en": {
              "text": "The basic order is SOV, but since particles mark a word's role, the order of objects is fairly flexible."
            }
          },
          {
            "type": "table",
            "title": "Гнучкий порядок",
            "rows": [
              [
                "私は本を読みます。",
                "Я читаю книгу. (нейтрально)"
              ],
              [
                "本を私は読みます。",
                "Книгу я читаю. (акцент)"
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
                "今日、学校に行きます。",
                "Сьогодні я йду до школи."
              ]
            ]
          }
        ],
        "titleEn": "Word Order Flexibility — A2"
      },
      {
        "id": "sentence-final-particles",
        "title": "終助詞（ね・よ・な） — A2",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Унікальна риса японської — кінцеві частки додають емоційний відтінок: ね (шукає згоди/підтвердження), よ (повідомляє нову інформацію), な (розмовне ね, більш чоловіче).",
            "en": {
              "text": "A unique Japanese feature — sentence-final particles add an emotional nuance: ね (seeks agreement/confirmation), よ (conveys new information), な (casual ね, more masculine)."
            }
          },
          {
            "type": "table",
            "title": "ね / よ / な",
            "rows": [
              [
                "いい天気ですね。",
                "Гарна погода, чи не так?"
              ],
              [
                "これは高いですよ。",
                "Це дороге, знаєш."
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
                "美味しいですね！",
                "Смачно, чи не так!"
              ]
            ]
          }
        ],
        "titleEn": "Sentence-Final Particles (Ne/Yo/Na) — A2"
      },
      {
        "id": "transitive-intransitive-verbs",
        "title": "自動詞・他動詞 — B1",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Унікальна риса японської — багато дієслів мають парну форму: неперехідну (дія відбувається сама) і перехідну (хтось виконує дію), часто дуже схожі за звучанням.",
            "en": {
              "text": "A unique Japanese feature — many verbs have a paired form: intransitive (the action happens by itself) and transitive (someone performs the action), often very similar in sound."
            }
          },
          {
            "type": "table",
            "title": "Пари дієслів",
            "rows": [
              [
                "ドアが開く (неперех.)",
                "Двері відчиняються (самі)"
              ],
              [
                "ドアを開ける (перех.)",
                "Я відчиняю двері"
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
                "電気が消えた。",
                "Світло згасло. (само)"
              ]
            ]
          }
        ],
        "titleEn": "Transitive & Intransitive Verb Pairs — B1"
      },
      {
        "id": "verb-groups-conjugation",
        "title": "動詞のグループ（活用の種類） — A2",
        "emoji": "📚",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслова поділяються на три групи за відмінюванням: I група (五段, зміна останнього складу), II група (一段, лише -る відпадає), III група (нерегулярні する/来る).",
            "en": {
              "text": "Verbs fall into three conjugation groups: Group I (godan, changing the final syllable), Group II (ichidan, just dropping -る), Group III (irregular suru/kuru)."
            }
          },
          {
            "type": "table",
            "title": "Три групи",
            "rows": [
              [
                "I група: 飲む → 飲みます",
                "п'ю (зміна складу む→み)"
              ],
              [
                "II група: 食べる → 食べます",
                "їм (лише -る відпадає)"
              ],
              [
                "III група: する/来る",
                "робити/приходити (нерегулярні)"
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
                "毎日勉強します。",
                "Я щодня вчуся."
              ]
            ]
          }
        ],
        "titleEn": "Verb Conjugation Groups — A2"
      },
      {
        "id": "negative-question-response",
        "title": "否定疑問文への答え方 — B1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від української/англійської, відповідь на заперечне питання підтверджує саме твердження, а не факт: はい означає «так, ви праві (заперечення вірне)».",
            "en": {
              "text": "Unlike Ukrainian/English, the answer to a negative question confirms the statement itself, not the fact: はい means 'yes, you're right (the negative is true)'."
            }
          },
          {
            "type": "table",
            "title": "はい/いいえ на заперечне питання",
            "rows": [
              [
                "行きませんか。— はい、行きません。",
                "Ти не підеш? — Так (правильно), не піду."
              ],
              [
                "行きませんか。— いいえ、行きます。",
                "Ти не підеш? — Ні (не так), піду."
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
                "寒くないですか。— はい、寒くないです。",
                "Тобі не холодно? — Так, не холодно."
              ]
            ]
          }
        ],
        "titleEn": "Answering Negative Questions — B1"
      },
      {
        "id": "common-idioms",
        "title": "慣用句 — B1",
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
                "お元気ですか。",
                "Як справи?"
              ],
              [
                "いただきます",
                "перед їжею (букв. скромно приймаю)"
              ],
              [
                "お疲れ様でした",
                "дякую за роботу/старання"
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
                "ごちそうさまでした。",
                "Дякую за їжу. (після їжі)"
              ]
            ]
          }
        ],
        "titleEn": "Common Expressions — B1"
      },
      {
        "id": "counting-people-formal",
        "title": "人を数える（〜名・〜人） — B1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "人 (nin) — звичайний класифікатор для людей; 名 (mei) — формальніший, вживається в офіційних оголошеннях і документах.",
            "en": {
              "text": "人 (nin) is the ordinary classifier for people; 名 (mei) is more formal, used in official announcements and documents."
            }
          },
          {
            "type": "table",
            "title": "人 vs 名",
            "rows": [
              [
                "三人来ました。",
                "Прийшло троє людей. (звичайно)"
              ],
              [
                "お客様、三名様。",
                "Три гості, будь ласка. (формально)"
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
                "何名様ですか。",
                "На скільки осіб? (у ресторані)"
              ]
            ]
          }
        ],
        "titleEn": "Counting People Formally (Mei vs Nin) — B1"
      },
      {
        "id": "formal-informal-address",
        "title": "敬称（さん・くん・ちゃん） — A1",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "さん — нейтрально ввічливий суфікс до імені (для будь-кого); くん — до молодших чоловіків/хлопчиків; ちゃん — пестливий, до дітей/близьких.",
            "en": {
              "text": "さん is a neutral polite name suffix (for anyone); くん is for younger males/boys; ちゃん is affectionate, for children/close friends."
            }
          },
          {
            "type": "table",
            "title": "さん / くん / ちゃん",
            "rows": [
              [
                "田中さん",
                "пан/пані Танака"
              ],
              [
                "太郎くん",
                "Таро (молодший хлопець)"
              ],
              [
                "ゆきちゃん",
                "Юкі (пестливо)"
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
                "山田さんはどこですか。",
                "Де пан/пані Ямада?"
              ]
            ]
          }
        ],
        "titleEn": "Name Suffixes (San/Kun/Chan) — A1"
      },
      {
        "id": "weather-expressions",
        "title": "天気の表現 — A1",
        "emoji": "🌦️",
        "sections": [
          {
            "type": "intro",
            "text": "Погодні вирази здебільшого будуються з іменника + です або дієсловом降る (падати, про дощ/сніг).",
            "en": {
              "text": "Weather expressions are mostly built with a noun + desu, or the verb furu (to fall, for rain/snow)."
            }
          },
          {
            "type": "table",
            "title": "Погода",
            "rows": [
              [
                "雨が降っています。",
                "Іде дощ."
              ],
              [
                "今日は暑いです。",
                "Сьогодні спекотно."
              ],
              [
                "とても寒いです。",
                "Дуже холодно."
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
                "冬は雪が降ります。",
                "Взимку йде сніг."
              ]
            ]
          }
        ],
        "titleEn": "Weather Expressions — A1"
      },
      {
        "id": "greetings-common-phrases",
        "title": "挨拶と一般的な表現 — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "intro",
            "text": "Привітання в японській залежать від часу доби, на відміну від універсального привітання в деяких інших мовах.",
            "en": {
              "text": "Greetings in Japanese depend on the time of day, unlike a universal greeting in some other languages."
            }
          },
          {
            "type": "table",
            "title": "Основні фрази",
            "rows": [
              [
                "おはようございます",
                "доброго ранку"
              ],
              [
                "こんにちは",
                "добрий день"
              ],
              [
                "こんばんは",
                "добрий вечір"
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
                "ありがとうございます。",
                "Дуже дякую."
              ]
            ]
          }
        ],
        "titleEn": "Greetings & Common Phrases — A1"
      },
      {
        "id": "quantifiers",
        "title": "数量詞（たくさん・少し） — A2",
        "emoji": "⚖️",
        "sections": [
          {
            "type": "intro",
            "text": "たくさん (багато), 少し (трохи), 全部 (усе) незмінні й зазвичай стоять після іменника з に/を або перед дієсловом.",
            "en": {
              "text": "たくさん (much/many), 少し (a little), 全部 (all) are invariable and usually come after the noun with に/を or before the verb."
            }
          },
          {
            "type": "table",
            "title": "たくさん / 少し / 全部",
            "rows": [
              [
                "水をたくさん飲みます。",
                "Я п'ю багато води."
              ],
              [
                "少し休みましょう。",
                "Давайте трохи відпочинемо."
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
                "友達がたくさんいます。",
                "У мене багато друзів."
              ]
            ]
          }
        ],
        "titleEn": "Quantifiers (Takusan/Sukoshi) — A2"
      },
      {
        "id": "genitive-nominalizer-no",
        "title": "の — 名詞化（〜のが好き） — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "の після дієслова в звичайній формі перетворює всю дію на іменник, що дозволяє вживати її як підмет чи додаток.",
            "en": {
              "text": "の after a plain-form verb turns the whole action into a noun, allowing it to be used as a subject or object."
            }
          },
          {
            "type": "table",
            "title": "の — номіналізація",
            "rows": [
              [
                "泳ぐのが好きです。",
                "Мені подобається плавати."
              ],
              [
                "日本語を勉強するのは楽しいです。",
                "Вивчати японську весело."
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
                "音楽を聞くのが好きです。",
                "Мені подобається слухати музику."
              ]
            ]
          }
        ],
        "titleEn": "The Nominalizer の — B1"
      }
    ]
  },
  {
    "id": "exceptions",
    "title": "例外",
    "titleEn": "Exceptions",
    "emoji": "⚠️",
    "rules": [
      {
        "id": "irregular-verbs",
        "title": "不規則動詞（する・来る） — A2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "する (робити) і 来る (приходити) — єдині два справді нерегулярні дієслова японської; їхнє відмінювання слід просто запам'ятати.",
            "en": {
              "text": "する (to do) and 来る (to come) are the only two truly irregular verbs in Japanese; their conjugation must simply be memorized."
            }
          },
          {
            "type": "table",
            "title": "する / 来る",
            "rows": [
              [
                "する → します → した → しない",
                "робити (форми)"
              ],
              [
                "来る → 来ます → 来た → 来ない",
                "приходити (форми, читання き/こ змінюється)"
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
                "彼は明日来ます。",
                "Він прийде завтра."
              ]
            ]
          }
        ],
        "titleEn": "Irregular Verbs (Suru/Kuru) — A2"
      },
      {
        "id": "irregular-readings-kanji",
        "title": "特殊な読み方（数字・日付） — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Дні місяця з 1-го по 10-те й кілька чисел мають унікальні, історично зумовлені читання, відмінні від звичайних числівників.",
            "en": {
              "text": "Days of the month from the 1st to the 10th, and a few numbers, have unique, historically rooted readings different from ordinary numerals."
            }
          },
          {
            "type": "table",
            "title": "Особливі читання",
            "rows": [
              [
                "一日 (tsuitachi)",
                "1-ше число (не *ichinichi)"
              ],
              [
                "二十日 (hatsuka)",
                "20-те число (не *nijūnichi)"
              ],
              [
                "一人 (hitori) / 二人 (futari)",
                "одна людина / дві людини (не звичайні *ichi-nin/*ni-nin)"
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
                "今日は八日です。",
                "Сьогодні восьме число."
              ]
            ]
          }
        ],
        "titleEn": "Special Kanji Readings (Numbers & Dates) — B1"
      },
      {
        "id": "honorific-irregular-verbs",
        "title": "尊敬語・謙譲語の特殊動詞 — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька найуживаніших дієслів мають повністю окремі, непередбачувані форми в шанобливій і скромній мові замість регулярного утворення.",
            "en": {
              "text": "A few of the most common verbs have completely separate, unpredictable forms in honorific and humble speech instead of the regular pattern."
            }
          },
          {
            "type": "table",
            "title": "Особливі ввічливі дієслова",
            "rows": [
              [
                "行く/来る/いる → いらっしゃる (尊敬語)",
                "йти/приходити/бути (про іншого)"
              ],
              [
                "食べる/飲む → 召し上がる (尊敬語)",
                "їсти/пити (про іншого)"
              ],
              [
                "見る → 拝見する (謙譲語)",
                "дивитися (скромно, про себе)"
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
                "どうぞ召し上がってください。",
                "Прошу, їжте (пригощайтеся)."
              ]
            ]
          }
        ],
        "titleEn": "Special Honorific/Humble Verbs — B1"
      }
    ]
  }
];
