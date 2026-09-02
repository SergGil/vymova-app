// Vymova — data/grammar-data/grammar_zh.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_ZH: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "verb-shi",
        "title": "是 (shì) — \"бути\" — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "是 (shì) використовується, щоб сполучити підмет з іменником, означаючи \"є/бути\". Дієслово не змінюється за особами чи часом.",
            "en": {
              "text": "是 (shì) is used to link a subject with a noun, meaning \"to be\". It does not change for person or tense."
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
                "我是老师。(Wǒ shì lǎoshī.)",
                "Я вчитель."
              ],
              [
                "她是学生。(Tā shì xuéshēng.)",
                "Вона студентка."
              ]
            ]
          }
        ]
      },
      {
        "id": "particle-de",
        "title": "的 (de) — присвійна частка — A1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "的 (de) ставиться між власником і предметом, що позначає належність, подібно до апострофа \"-'s\" в англійській.",
            "en": {
              "text": "的 (de) is placed between an owner and an object to mark possession, similar to \"-'s\" in English."
            }
          },
          {
            "type": "table",
            "title": "Приклади з 的",
            "rows": [
              [
                "我的书 (wǒ de shū)",
                "моя книга"
              ],
              [
                "他的车 (tā de chē)",
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
                "这是我的书。",
                "Це моя книга."
              ],
              [
                "他的车很新。",
                "Його машина дуже нова."
              ]
            ]
          }
        ]
      },
      {
        "id": "particle-le",
        "title": "了 (le) — завершена дія — A2",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "了 (le) ставиться після дієслова, щоб показати, що дія вже відбулася або завершилася.",
            "en": {
              "text": "了 (le) is placed after a verb to show that an action has already happened or been completed."
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
                "我吃了。(Wǒ chī le.)",
                "Я вже з'їв."
              ],
              [
                "他去了北京。",
                "Він поїхав до Пекіна."
              ]
            ]
          }
        ]
      },
      {
        "id": "measure-words",
        "title": "Рахункові слова (量词) — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Перед іменником при підрахунку потрібно вставити відповідне рахункове слово, що залежить від типу предмета. Найпоширеніше — 个 (gè).",
            "en": {
              "text": "When counting a noun, a measure word matching the type of object must be inserted before it. The most common is 个 (gè)."
            }
          },
          {
            "type": "table",
            "title": "Рахункові слова",
            "rows": [
              [
                "一个人 (yí gè rén)",
                "одна людина"
              ],
              [
                "两本书 (liǎng běn shū)",
                "дві книги"
              ],
              [
                "三杯水 (sān bēi shuǐ)",
                "три чашки води"
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
                "我有两个朋友。",
                "У мене двоє друзів."
              ],
              [
                "她买了三本书。",
                "Вона купила три книги."
              ]
            ]
          }
        ]
      },
      {
        "id": "pronouns-plural",
        "title": "Займенники і множина 们 (men) — A1",
        "emoji": "🙋",
        "sections": [
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "我 (wǒ)",
                "я"
              ],
              [
                "你 (nǐ)",
                "ти"
              ],
              [
                "他 / 她 (tā)",
                "він / вона"
              ],
              [
                "我们 (wǒmen)",
                "ми"
              ],
              [
                "你们 (nǐmen)",
                "ви"
              ],
              [
                "他们 / 她们 (tāmen)",
                "вони"
              ]
            ]
          },
          {
            "type": "tip",
            "title": "Суфікс 们",
            "text": "们 (men) додається до займенників і деяких слів, що позначають людей, щоб утворити множину: 朋友们 (друзі).",
            "en": {
              "title": "The suffix 们",
              "text": "们 (men) is added to pronouns and some words for people to form the plural: 朋友们 (friends)."
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
                "我们是朋友。",
                "Ми друзі."
              ],
              [
                "你们好！",
                "Привіт усім вам!"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "tenses",
    "title": "时态与体",
    "titleEn": "Tense & Aspect",
    "emoji": "🕐",
    "rules": [
      {
        "id": "aspect-le-two-types",
        "title": "了的两种用法 — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "了 має два різних вживання: одразу після дієслова (動態助詞, показує завершену дію) і в кінці речення (語氣助詞, показує зміну стану чи новину).",
            "en": {
              "text": "了 has two distinct uses: right after the verb (verbal aspect particle, showing a completed action) and at the end of the sentence (modal particle, showing a change of state or news)."
            }
          },
          {
            "type": "table",
            "title": "動詞了 vs 句末了",
            "rows": [
              [
                "我吃了饭。",
                "Я поїв (завершена дія)."
              ],
              [
                "天冷了。",
                "Стало холодно (зміна стану)."
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
                "他已经走了。",
                "Він уже пішов."
              ]
            ]
          }
        ]
      },
      {
        "id": "aspect-guo-experience",
        "title": "过 — 经验体 — A2",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "过 (guo) після дієслова виражає життєвий досвід («колись робив»), а не одноразову минулу подію.",
            "en": {
              "text": "过 (guo) after a verb expresses life experience ('have done at some point'), not a single past event."
            }
          },
          {
            "type": "table",
            "title": "过",
            "rows": [
              [
                "我去过中国。",
                "Я був у Китаї (колись)."
              ],
              [
                "她没吃过榴莲。",
                "Вона ніколи не їла дуріан."
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
                "你看过这部电影吗？",
                "Ти колись дивився цей фільм?"
              ]
            ]
          }
        ]
      },
      {
        "id": "aspect-zai-zhengzai",
        "title": "在/正在 — 进行体 — A1",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "在/正在 перед дієсловом виражає тривалу дію «просто зараз», часто з 呢 у кінці речення.",
            "en": {
              "text": "在/正在 before the verb expresses an action happening right now, often with 呢 at the end of the sentence."
            }
          },
          {
            "type": "table",
            "title": "在 / 正在",
            "rows": [
              [
                "我在吃饭。",
                "Я зараз їм."
              ],
              [
                "他正在睡觉呢。",
                "Він зараз спить."
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
                "你在做什么？",
                "Що ти зараз робиш?"
              ]
            ]
          }
        ]
      },
      {
        "id": "aspect-zhe-durative",
        "title": "着 — 持续体 — A2",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "着 (zhe) після дієслова виражає тривалий стан у результаті дії (аналог «сидить/висить»), а не саму дію.",
            "en": {
              "text": "着 (zhe) after a verb expresses an ongoing state resulting from an action (like 'is sitting/hanging'), not the action itself."
            }
          },
          {
            "type": "table",
            "title": "着",
            "rows": [
              [
                "门开着。",
                "Двері (є) відчинені."
              ],
              [
                "她坐着看书。",
                "Вона сидить і читає книгу."
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
                "墙上挂着一幅画。",
                "На стіні висить картина."
              ]
            ]
          }
        ]
      },
      {
        "id": "future-yao-hui",
        "title": "要/会 — 将来时 — A1",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "要 виражає намір/план («збираюся»), 会 — передбачення чи вміння в майбутньому («буде/зможе»).",
            "en": {
              "text": "要 expresses intention/plan ('going to'), 会 expresses a prediction or future ability ('will/be able to')."
            }
          },
          {
            "type": "table",
            "title": "要 / 会",
            "rows": [
              [
                "我要去北京。",
                "Я збираюся до Пекіна."
              ],
              [
                "明天会下雨。",
                "Завтра піде дощ."
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
                "他会来吗？",
                "Він прийде?"
              ]
            ]
          }
        ]
      },
      {
        "id": "future-jiang",
        "title": "将 — 正式将来时 — B1",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "将 (jiāng) — формальніший, книжний спосіб виразити майбутнє, типовий для новин і офіційних текстів.",
            "en": {
              "text": "将 (jiāng) is a more formal, literary way to express the future, typical of news and official texts."
            }
          },
          {
            "type": "table",
            "title": "将",
            "rows": [
              [
                "会议将于明天举行。",
                "Нарада відбудеться завтра."
              ],
              [
                "他将成为医生。",
                "Він стане лікарем."
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
                "总统将访问中国。",
                "Президент відвідає Китай."
              ]
            ]
          }
        ]
      },
      {
        "id": "habitual-actions",
        "title": "习惯性动作的表达 — A2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Оскільки дієслово не змінюється за часом, звичну дію виражають словами часу (每天, 常常) без жодних інших маркерів.",
            "en": {
              "text": "Since the verb doesn't inflect for tense, habitual actions are expressed with time words (every day, often) with no other markers."
            }
          },
          {
            "type": "table",
            "title": "每天 / 常常",
            "rows": [
              [
                "我每天喝咖啡。",
                "Я щодня п'ю каву."
              ],
              [
                "他常常迟到。",
                "Він часто спізнюється."
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
                "我们经常一起吃饭。",
                "Ми часто разом їмо."
              ]
            ]
          }
        ]
      },
      {
        "id": "time-words-order",
        "title": "时间词的位置 — A2",
        "emoji": "🕐",
        "sections": [
          {
            "type": "intro",
            "text": "Слова часу стоять на початку речення або одразу після підмета, але завжди перед дієсловом.",
            "en": {
              "text": "Time words go at the start of the sentence or right after the subject, but always before the verb."
            }
          },
          {
            "type": "table",
            "title": "Позиція слова часу",
            "rows": [
              [
                "我昨天去了商店。",
                "Я вчора ходив у магазин."
              ],
              [
                "昨天我去了商店。",
                "Вчора я ходив у магазин. (обидва правильні)"
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
                "他明天要去上海。",
                "Він завтра поїде до Шанхая."
              ]
            ]
          }
        ]
      },
      {
        "id": "duration-complement",
        "title": "时量补语 — B1",
        "emoji": "⏱️",
        "sections": [
          {
            "type": "intro",
            "text": "Тривалість дії вказується після дієслова (а не перед ним, як у прислівнику), у формі «час + одиниця».",
            "en": {
              "text": "The duration of an action is indicated after the verb (not before, as with an adverb), in the form 'amount + unit'."
            }
          },
          {
            "type": "table",
            "title": "Часовий комплемент",
            "rows": [
              [
                "我学了三年中文。",
                "Я вчив китайську три роки."
              ],
              [
                "他等了半个小时。",
                "Він чекав півгодини."
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
                "我睡了八个小时。",
                "Я спав вісім годин."
              ]
            ]
          }
        ]
      },
      {
        "id": "frequency-complement",
        "title": "动量补语 — B1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Кількість разів, коли відбулася дія, вказується після дієслова у формі «число + рахункове слово дії» (次/遍).",
            "en": {
              "text": "The number of times an action occurred is indicated after the verb in the form 'number + action measure word' (次/遍)."
            }
          },
          {
            "type": "table",
            "title": "Комплемент кратності",
            "rows": [
              [
                "我去过三次北京。",
                "Я їздив до Пекіна тричі."
              ],
              [
                "请再说一遍。",
                "Скажіть, будь ласка, ще раз."
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
                "我看了两次这部电影。",
                "Я подивився цей фільм двічі."
              ]
            ]
          }
        ]
      },
      {
        "id": "negation-past-meiyou",
        "title": "没(有) — 过去否定 — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "没(有) заперечує минулу дію чи стан «мати»; ніколи не вживається з 了 в тому самому реченні.",
            "en": {
              "text": "没(有) negates a past action or the verb 'to have'; it's never used together with 了 in the same clause."
            }
          },
          {
            "type": "table",
            "title": "没(有)",
            "rows": [
              [
                "我没吃饭。",
                "Я не їв."
              ],
              [
                "他没有钱。",
                "У нього немає грошей."
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
                "她还没来。",
                "Вона ще не прийшла."
              ]
            ]
          }
        ]
      },
      {
        "id": "negation-present-bu",
        "title": "不 — 一般否定 — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "不 заперечує звичайну дію, стан, майбутнє чи бажання — універсальний заперечник, крім минулих завершених дій.",
            "en": {
              "text": "不 negates ordinary actions, states, the future, or wishes — a universal negator, except for completed past actions."
            }
          },
          {
            "type": "table",
            "title": "不",
            "rows": [
              [
                "我不喝咖啡。",
                "Я не п'ю каву."
              ],
              [
                "他不是老师。",
                "Він не вчитель."
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
                "我不去。",
                "Я не піду."
              ]
            ]
          }
        ]
      },
      {
        "id": "imperative-mood",
        "title": "祈使句 — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб — просто дієслово без підмета; 请 додає ввічливості, 别/不要 заперечує наказ.",
            "en": {
              "text": "The imperative is just the bare verb with no subject; 请 adds politeness, 别/不要 negates the command."
            }
          },
          {
            "type": "table",
            "title": "请 / 别",
            "rows": [
              [
                "请坐。",
                "Прошу, сідайте."
              ],
              [
                "别说话！",
                "Не розмовляй!"
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
                "快走吧！",
                "Швидше йди!"
              ]
            ]
          }
        ]
      }
    ]
  }
];
