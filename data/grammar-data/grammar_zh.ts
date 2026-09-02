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
        ],
        "titleEn": "是 (Shì) — \"To Be\""
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
        ],
        "titleEn": "的 (De) — Possessive Particle"
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
        ],
        "titleEn": "了 (Le) — Completed Action"
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
        ],
        "titleEn": "Measure Words (量词) — A1"
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
        ],
        "titleEn": "Pronouns & the Plural 们 — A1"
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
        ],
        "titleEn": "The Two Uses of 了 — B1"
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
        ],
        "titleEn": "过 — Experiential Aspect"
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
        ],
        "titleEn": "在/正在 — Progressive Aspect"
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
        ],
        "titleEn": "着 — Durative Aspect"
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
        ],
        "titleEn": "要/会 — Future Tense"
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
        ],
        "titleEn": "将 — Formal Future"
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
        ],
        "titleEn": "Expressing Habitual Actions — A2"
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
        ],
        "titleEn": "Placement of Time Words — A2"
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
        ],
        "titleEn": "Duration Complement — B1"
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
        ],
        "titleEn": "Frequency Complement — B1"
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
        ],
        "titleEn": "没(有) — Past Negation"
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
        ],
        "titleEn": "不 — General Negation"
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
        ],
        "titleEn": "Imperative Sentences — A2"
      }
    ]
  },
  {
    "id": "grammar",
    "title": "语法",
    "titleEn": "Grammar",
    "emoji": "📖",
    "rules": [
      {
        "id": "topic-comment-structure",
        "title": "主题句结构 — B1",
        "emoji": "📝",
        "sections": [
          {
            "type": "intro",
            "text": "Китайська часто будує речення за схемою «тема + коментар», а не строго «підмет + присудок» — тема стоїть на початку, навіть якщо не є граматичним підметом.",
            "en": {
              "text": "Chinese often builds sentences as 'topic + comment' rather than strictly 'subject + predicate' — the topic comes first, even if it isn't the grammatical subject."
            }
          },
          {
            "type": "table",
            "title": "Тема + коментар",
            "rows": [
              [
                "这个电影我看过了。",
                "Цей фільм я вже дивився. (тема: фільм)"
              ],
              [
                "中文很有意思。",
                "Китайська дуже цікава. (тема: китайська)"
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
                "水果我最喜欢苹果。",
                "З фруктів я найбільше люблю яблука."
              ]
            ]
          }
        ],
        "titleEn": "Topic-Comment Sentence Structure — B1"
      },
      {
        "id": "comparison-bi",
        "title": "比 — 比较句 — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняльний ступінь: [A] 比 [B] + прикметник (без потреби 很).",
            "en": {
              "text": "The comparative: [A] 比 [B] + adjective (no need for 很)."
            }
          },
          {
            "type": "table",
            "title": "比",
            "rows": [
              [
                "他比我高。",
                "Він вищий за мене."
              ],
              [
                "中文比英文难。",
                "Китайська важча за англійську."
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
                "北京比上海冷。",
                "Пекін холодніший за Шанхай."
              ]
            ]
          }
        ],
        "titleEn": "比 — Comparison"
      },
      {
        "id": "comparison-superlative",
        "title": "最 — 最高级 — A1",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь утворюється часткою 最 перед прикметником.",
            "en": {
              "text": "The superlative is formed with the particle 最 before the adjective."
            }
          },
          {
            "type": "table",
            "title": "最",
            "rows": [
              [
                "他最高。",
                "Він найвищий."
              ],
              [
                "这是最好的方法。",
                "Це найкращий спосіб."
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
                "珠穆朗玛峰最高。",
                "Еверест найвищий."
              ]
            ]
          }
        ],
        "titleEn": "最 — Superlative"
      },
      {
        "id": "ba-construction",
        "title": "把字句 — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Унікальна риса китайської — конструкція 把 виносить прямий додаток перед дієсловом, коли важливо підкреслити, що сталося з конкретним предметом (зазвичай з результативним доповненням).",
            "en": {
              "text": "A unique Chinese feature — the 把 construction moves the direct object before the verb, used to emphasize what happened to a specific thing (usually with a resultative complement)."
            }
          },
          {
            "type": "table",
            "title": "把 + додаток + дієслово",
            "rows": [
              [
                "我把书放在桌子上了。",
                "Я поклав книгу на стіл."
              ],
              [
                "请把门关上。",
                "Будь ласка, зачиніть двері."
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
                "他把我的手机拿走了。",
                "Він забрав мій телефон."
              ]
            ]
          }
        ],
        "titleEn": "The 把-Construction — B1"
      },
      {
        "id": "bei-construction",
        "title": "被字句 — 被动语态 — B1",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "被 вводить пасивну конструкцію, часто з відтінком, що дія негативна чи небажана для підмета.",
            "en": {
              "text": "被 introduces a passive construction, often with a nuance that the action is negative or unwelcome for the subject."
            }
          },
          {
            "type": "table",
            "title": "被",
            "rows": [
              [
                "我的钱包被偷了。",
                "Мій гаманець вкрали."
              ],
              [
                "杯子被打破了。",
                "Склянку розбили."
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
                "他被老师批评了。",
                "Учитель покритикував його."
              ]
            ]
          }
        ],
        "titleEn": "被 — Passive Voice"
      },
      {
        "id": "resultative-complement",
        "title": "结果补语 — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Унікальна риса китайської — другий елемент одразу після дієслова вказує на результат дії (не спосіб чи час), напр. 完 (закінчити), 懂 (зрозуміти), 好 (успішно).",
            "en": {
              "text": "A unique Chinese feature — a second element right after the verb indicates the result of the action (not manner or time), e.g. 完 (finish), 懂 (understand), 好 (successfully)."
            }
          },
          {
            "type": "table",
            "title": "Результативні доповнення",
            "rows": [
              [
                "我吃完了。",
                "Я доїв."
              ],
              [
                "你听懂了吗？",
                "Ти зрозумів (почуте)?"
              ],
              [
                "作业做好了。",
                "Домашнє завдання зроблено (успішно)."
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
                "我看完了这本书。",
                "Я дочитав цю книгу."
              ]
            ]
          }
        ],
        "titleEn": "Resultative Complements — B1"
      },
      {
        "id": "potential-complement",
        "title": "可能补语（得/不） — B2",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Вставляючи 得 (можливо) чи 不 (неможливо) між дієсловом і результативним/напрямним доповненням, виражають, чи можлива дана дія.",
            "en": {
              "text": "Inserting 得 (possible) or 不 (impossible) between the verb and its resultative/directional complement expresses whether an action is possible."
            }
          },
          {
            "type": "table",
            "title": "得/不 + доповнення",
            "rows": [
              [
                "我听得懂。",
                "Я можу зрозуміти (почуте)."
              ],
              [
                "我听不懂。",
                "Я не можу зрозуміти (почуте)."
              ],
              [
                "这个字看不清楚。",
                "Цей ієрогліф неможливо чітко розгледіти."
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
                "我做得到。",
                "Я можу це зробити."
              ]
            ]
          }
        ],
        "titleEn": "Potential Complement (得/不) — B2"
      },
      {
        "id": "directional-complement-simple",
        "title": "简单趋向补语（来/去） — A2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "来 (сюди) чи 去 (туди) після дієслова вказують напрям руху відносно мовця.",
            "en": {
              "text": "来 (hither) or 去 (thither) after a verb indicate the direction of movement relative to the speaker."
            }
          },
          {
            "type": "table",
            "title": "来 / 去",
            "rows": [
              [
                "请进来。",
                "Заходьте (сюди), будь ласка."
              ],
              [
                "他跑出去了。",
                "Він вибіг (туди)."
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
                "快过来！",
                "Швидше йди сюди!"
              ]
            ]
          }
        ],
        "titleEn": "Simple Directional Complements (来/去) — A2"
      },
      {
        "id": "directional-complement-compound",
        "title": "复合趋向补语 — B1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Складене напрямне доповнення поєднує напрямне дієслово (上/下/进/出) з来/去, утворюючи детальніший опис руху.",
            "en": {
              "text": "A compound directional complement combines a directional verb (上/下/进/出) with 来/去, forming a more detailed description of movement."
            }
          },
          {
            "type": "table",
            "title": "Складені доповнення",
            "rows": [
              [
                "他走进来了。",
                "Він зайшов (сюди)."
              ],
              [
                "她拿出去了。",
                "Вона винесла (туди)."
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
                "请把书拿过来。",
                "Принесіть книгу сюди, будь ласка."
              ]
            ]
          }
        ],
        "titleEn": "Compound Directional Complements — B1"
      },
      {
        "id": "adjective-predicate",
        "title": "形容词谓语句 — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник може виступати присудком самостійно, без 是 — 是 вживається лише для іменних присудків.",
            "en": {
              "text": "An adjective can function as the predicate on its own, without 是 — 是 is used only for noun predicates."
            }
          },
          {
            "type": "table",
            "title": "Прикметник-присудок",
            "rows": [
              [
                "她很漂亮。",
                "Вона дуже гарна. (не *她是漂亮)"
              ],
              [
                "天气很好。",
                "Погода дуже гарна."
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
                "这个苹果很甜。",
                "Це яблуко дуже солодке."
              ]
            ]
          }
        ],
        "titleEn": "Adjectives as Predicates — A1"
      },
      {
        "id": "adverb-hen-with-adjectives",
        "title": "很 + 形容词 — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "У нейтральному стверджувальному реченні перед прикметником-присудком зазвичай ставлять 很, навіть без сильного значення «дуже» — інакше речення звучить як приховане порівняння.",
            "en": {
              "text": "In a neutral affirmative sentence, 很 is usually placed before a predicate adjective, even without a strong 'very' meaning — otherwise the sentence sounds like an implied comparison."
            }
          },
          {
            "type": "table",
            "title": "很 + прикметник",
            "rows": [
              [
                "他很高。",
                "Він високий. (нейтрально)"
              ],
              [
                "他高。",
                "Він високий (а хтось інший — ні, порівняння)"
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
                "这本书很有意思。",
                "Ця книга дуже цікава."
              ]
            ]
          }
        ],
        "titleEn": "很 + Adjective — A1"
      },
      {
        "id": "classifier-full-list",
        "title": "常用量词 — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Крім універсального 个, кожен клас предметів має власне рахункове слово, залежно від форми чи типу.",
            "en": {
              "text": "Besides the universal 个, each class of objects has its own measure word, depending on shape or type."
            }
          },
          {
            "type": "table",
            "title": "Рахункові слова",
            "rows": [
              [
                "一张纸 (плоскі предмети)",
                "один аркуш паперу"
              ],
              [
                "一条鱼 (довгі гнучкі предмети)",
                "одна риба"
              ],
              [
                "一只猫 (тварини)",
                "один кіт"
              ],
              [
                "一辆车 (транспорт)",
                "одна машина"
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
                "我买了一件衣服。",
                "Я купив один одяг."
              ]
            ]
          }
        ],
        "titleEn": "Common Measure Words — A2"
      },
      {
        "id": "demonstrative-pronouns",
        "title": "这/那 — 指示代词 — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "这 (це/цей) вказує на ближче, 那 (те/той) — на дальше; обидва вимагають рахункового слова перед іменником.",
            "en": {
              "text": "这 (this) points to something near, 那 (that) to something farther; both require a measure word before the noun."
            }
          },
          {
            "type": "table",
            "title": "这 / 那",
            "rows": [
              [
                "这本书",
                "ця книга"
              ],
              [
                "那个人",
                "та людина"
              ],
              [
                "这些 / 那些",
                "ці / ті (множина)"
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
                "这是我的朋友。",
                "Це мій друг."
              ]
            ]
          }
        ],
        "titleEn": "Demonstratives (这/那) — A1"
      },
      {
        "id": "question-particle-ma",
        "title": "吗 — 是非问句 — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "吗 у кінці стверджувального речення перетворює його на питання так/ні, без зміни порядку слів.",
            "en": {
              "text": "吗 at the end of a statement turns it into a yes/no question, with no word-order change."
            }
          },
          {
            "type": "table",
            "title": "吗",
            "rows": [
              [
                "你是学生吗？",
                "Ти студент?"
              ],
              [
                "你忙吗？",
                "Ти зайнятий?"
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
                "你喜欢中国菜吗？",
                "Тобі подобається китайська їжа?"
              ]
            ]
          }
        ],
        "titleEn": "吗 — Yes/No Questions"
      },
      {
        "id": "question-word-ne",
        "title": "呢 — 反问/省略问句 — A2",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "呢 після іменника означає «а як щодо...?» (еліптичне питання); також вживається для «а де ж...?».",
            "en": {
              "text": "呢 after a noun means 'and what about...?' (an elliptical question); also used for 'where is...?'."
            }
          },
          {
            "type": "table",
            "title": "呢",
            "rows": [
              [
                "我很好，你呢？",
                "У мене все добре, а в тебе?"
              ],
              [
                "我的手机呢？",
                "А де мій телефон?"
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
                "他在学习，你呢？",
                "Він вчиться, а ти?"
              ]
            ]
          }
        ],
        "titleEn": "呢 — Elliptical Questions"
      },
      {
        "id": "alternative-questions",
        "title": "正反问句（是不是/去不去） — A2",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання типу «А-не-А» повторюють дієслово в ствердній і заперечній формі поспіль, замінюючи 吗.",
            "en": {
              "text": "A-not-A questions repeat the verb in affirmative and negative form back to back, replacing 吗."
            }
          },
          {
            "type": "table",
            "title": "A-不-A",
            "rows": [
              [
                "你去不去？",
                "Ти йдеш чи ні?"
              ],
              [
                "这个好不好？",
                "Це добре чи ні?"
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
                "你是不是老师？",
                "Ти вчитель чи ні?"
              ]
            ]
          }
        ],
        "titleEn": "A-Not-A Questions — A2"
      },
      {
        "id": "interrogative-pronouns",
        "title": "疑问代词（谁/什么/哪里） — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питальні слова стоять на тому самому місці в реченні, де була б відповідь (без зміни порядку слів).",
            "en": {
              "text": "Question words go in the same position in the sentence where the answer would be (no word-order change)."
            }
          },
          {
            "type": "table",
            "title": "谁 / 什么 / 哪里",
            "rows": [
              [
                "他是谁？",
                "Хто це?"
              ],
              [
                "你叫什么名字？",
                "Як тебе звати?"
              ],
              [
                "你在哪里？",
                "Де ти?"
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
                "你想吃什么？",
                "Що ти хочеш поїсти?"
              ]
            ]
          }
        ],
        "titleEn": "Interrogative Pronouns (谁/什么/哪里) — A1"
      },
      {
        "id": "indefinite-pronouns",
        "title": "不定代词的用法（谁都/什么都） — B1",
        "emoji": "🔘",
        "sections": [
          {
            "type": "intro",
            "text": "Питальне слово + 都/也 утворює неозначений займенник «будь-хто/усе», зазвичай із запереченням для «ніхто/нічого».",
            "en": {
              "text": "Question word + 都/也 forms an indefinite pronoun 'anyone/everything', usually with negation for 'no one/nothing'."
            }
          },
          {
            "type": "table",
            "title": "谁都 / 什么都",
            "rows": [
              [
                "谁都知道。",
                "Усі це знають."
              ],
              [
                "我什么都不知道。",
                "Я нічого не знаю."
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
                "哪里都可以。",
                "Будь-де підійде."
              ]
            ]
          }
        ],
        "titleEn": "Indefinite Pronouns (谁都/什么都) — B1"
      },
      {
        "id": "conjunctions-basic",
        "title": "基本连词（和/或者/但是） — A1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "和 з'єднує лише іменники («і»); 或者 означає «або» (у стверджувальних реченнях); 但是 означає «але».",
            "en": {
              "text": "和 connects only nouns ('and'); 或者 means 'or' (in statements); 但是 means 'but'."
            }
          },
          {
            "type": "markers",
            "title": "Основні сполучники",
            "items": [
              "和 (і, тільки для іменників)",
              "或者 (або)",
              "但是/可是 (але)"
            ],
            "en": {
              "title": "Main conjunctions"
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
                "我喜欢茶和咖啡。",
                "Мені подобаються чай і кава."
              ]
            ]
          }
        ],
        "titleEn": "Basic Conjunctions (和/或者/但是) — A1"
      },
      {
        "id": "conjunctions-correlative",
        "title": "关联词组（虽然...但是/因为...所以） — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Підрядні сполучники в китайській часто вживаються парами — обидва слова присутні в реченні.",
            "en": {
              "text": "Subordinating conjunctions in Chinese are often used in pairs — both words appear in the sentence."
            }
          },
          {
            "type": "table",
            "title": "虽然...但是 / 因为...所以",
            "rows": [
              [
                "虽然很累，但是很开心。",
                "Хоч і втомлений, але щасливий."
              ],
              [
                "因为下雨，所以我没去。",
                "Оскільки йшов дощ, я не пішов."
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
                "如果你来，我就很高兴。",
                "Якщо ти прийдеш, я буду радий."
              ]
            ]
          }
        ],
        "titleEn": "Correlative Conjunctions (虽然...但是) — B1"
      },
      {
        "id": "prepositions-basic",
        "title": "基本介词（在/从/到/对） — A1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Прийменники в китайській стоять перед дієсловом (не після нього, як прості додатки).",
            "en": {
              "text": "Prepositions in Chinese precede the verb (not after it, unlike simple objects)."
            }
          },
          {
            "type": "table",
            "title": "在 / 从 / 到 / 对",
            "rows": [
              [
                "我在家吃饭。",
                "Я їм удома."
              ],
              [
                "我从中国来。",
                "Я з Китаю."
              ],
              [
                "对我来说很重要。",
                "Для мене це важливо."
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
                "他从早到晚工作。",
                "Він працює з ранку до вечора."
              ]
            ]
          }
        ],
        "titleEn": "Basic Prepositions (在/从/到/对) — A1"
      },
      {
        "id": "word-order-svo",
        "title": "基本语序（主谓宾） — A1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів — SVO (підмет-присудок-додаток), як в українській, але означення й обставини завжди стоять перед означуваним словом.",
            "en": {
              "text": "The basic word order is SVO (subject-verb-object), like Ukrainian, but modifiers and adverbials always precede the word they modify."
            }
          },
          {
            "type": "table",
            "title": "主谓宾",
            "rows": [
              [
                "我喜欢中国菜。",
                "Я люблю китайську їжу."
              ],
              [
                "她昨天买了一本书。",
                "Вона вчора купила книгу."
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
                "他每天早上跑步。",
                "Він щоранку бігає."
              ]
            ]
          }
        ],
        "titleEn": "Basic SVO Word Order — A1"
      },
      {
        "id": "modifiers-order",
        "title": "定语的顺序（修饰语顺序） — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька означень перед іменником вишиковуються у фіксованому порядку: присвійність → вказівне+число → прикметник → 的.",
            "en": {
              "text": "Multiple modifiers before a noun follow a fixed order: possession → demonstrative+number → adjective → 的."
            }
          },
          {
            "type": "table",
            "title": "Порядок означень",
            "rows": [
              [
                "我的那三本新书",
                "ті три мої нові книги"
              ],
              [
                "他的一个好朋友",
                "один хороший друг його"
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
                "这是我的新手机。",
                "Це мій новий телефон."
              ]
            ]
          }
        ],
        "titleEn": "Order of Modifiers Before a Noun — B1"
      },
      {
        "id": "numbers-cardinal",
        "title": "数字 — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Числа мають прозору десяткову структуру (十一 = 10+1 = 11), яка робить систему рахунку доволі логічною порівняно з іншими мовами.",
            "en": {
              "text": "Numbers have a transparent decimal structure (十一 = 10+1 = 11), which makes the counting system quite logical compared to other languages."
            }
          },
          {
            "type": "table",
            "title": "1–20",
            "rows": [
              [
                "一、二、三...十",
                "1, 2, 3...10"
              ],
              [
                "十一 (11) = 十+一",
                "十 (10) + 一 (1)"
              ],
              [
                "二十 (20) = 二+十",
                "二 (2) + 十 (10)"
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
                "我有三十岁。",
                "Мені тридцять років."
              ]
            ]
          }
        ],
        "titleEn": "Cardinal Numbers — A1"
      },
      {
        "id": "numbers-ordinal",
        "title": "序数词（第一/第二） — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Порядкові числівники утворюються префіксом 第 перед кардинальним числом, незмінні.",
            "en": {
              "text": "Ordinal numbers are formed with the prefix 第 before the cardinal number, invariable."
            }
          },
          {
            "type": "table",
            "title": "第一 / 第二",
            "rows": [
              [
                "第一次",
                "перший раз"
              ],
              [
                "第三层",
                "третій поверх"
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
                "这是我第一次来北京。",
                "Це мій перший раз у Пекіні."
              ]
            ]
          }
        ],
        "titleEn": "Ordinal Numbers (第一/第二) — A2"
      },
      {
        "id": "days-of-week",
        "title": "星期 — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Дні тижня (крім неділі) прозоро побудовані з 星期 + число.",
            "en": {
              "text": "Days of the week (except Sunday) are transparently built from 星期 + number."
            }
          },
          {
            "type": "table",
            "title": "星期几",
            "rows": [
              [
                "星期一、星期二",
                "понеділок, вівторок"
              ],
              [
                "星期六、星期日/天",
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
                "我们星期五见面。",
                "Ми зустрінемось у п'ятницю."
              ]
            ]
          }
        ],
        "titleEn": "Days of the Week — A1"
      },
      {
        "id": "months-dates",
        "title": "月份和日期 — A2",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Місяці — це число + 月; дата будується від великого до малого: рік-місяць-день, на відміну від української.",
            "en": {
              "text": "Months are number + 月; dates go from largest to smallest unit: year-month-day, unlike Ukrainian."
            }
          },
          {
            "type": "table",
            "title": "Місяці й дата",
            "rows": [
              [
                "一月、二月...十二月",
                "січень, лютий...грудень"
              ],
              [
                "2024年5月10号",
                "10 травня 2024 року"
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
                "我的生日是六月。",
                "Мій день народження в червні."
              ]
            ]
          }
        ],
        "titleEn": "Months & Dates — A2"
      },
      {
        "id": "telling-time",
        "title": "说时间 — A2",
        "emoji": "🕒",
        "sections": [
          {
            "type": "intro",
            "text": "Питання про час: 几点了？Відповідь будується числом + 点 (година) + 分 (хвилина).",
            "en": {
              "text": "To ask the time: jǐ diǎn le? The answer uses number + 点 (hour) + 分 (minute)."
            }
          },
          {
            "type": "table",
            "title": "Вказування часу",
            "rows": [
              [
                "三点。",
                "Третя година."
              ],
              [
                "三点半。",
                "Пів на четверту."
              ],
              [
                "三点十五分。",
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
                "现在几点了？",
                "Котра зараз година?"
              ]
            ]
          }
        ],
        "titleEn": "Telling Time — A2"
      },
      {
        "id": "modal-verbs",
        "title": "能/可以/会 — 情态动词 — A1",
        "emoji": "🧠",
        "sections": [
          {
            "type": "intro",
            "text": "能 (могти фізично/за обставинами), 可以 (можна, дозвіл), 会 (уміти, набута навичка).",
            "en": {
              "text": "能 (can, physically/circumstantially), 可以 (may, permission), 会 (know how to, an acquired skill)."
            }
          },
          {
            "type": "table",
            "title": "能 / 可以 / 会",
            "rows": [
              [
                "我能游泳。",
                "Я можу плавати (є сили)."
              ],
              [
                "我可以进来吗？",
                "Можна зайти?"
              ],
              [
                "我会说中文。",
                "Я вмію говорити китайською."
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
                "你会开车吗？",
                "Ти вмієш водити машину?"
              ]
            ]
          }
        ],
        "titleEn": "Modal Verbs (能/可以/会) — A1"
      },
      {
        "id": "obligation-yinggai-bixu",
        "title": "应该/必须 — B1",
        "emoji": "☁️",
        "sections": [
          {
            "type": "intro",
            "text": "应该 (варто/слід, м'якший обов'язок) і 必须 (мусити, категоричний обов'язок).",
            "en": {
              "text": "应该 (should, softer obligation) and 必须 (must, categorical obligation)."
            }
          },
          {
            "type": "table",
            "title": "应该 / 必须",
            "rows": [
              [
                "你应该多休息。",
                "Тобі варто більше відпочивати."
              ],
              [
                "我们必须准时到达。",
                "Ми мусимо прибути вчасно."
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
                "你必须完成作业。",
                "Ти мусиш виконати домашнє завдання."
              ]
            ]
          }
        ],
        "titleEn": "Obligation (应该/必须) — B1"
      },
      {
        "id": "reduplication-verbs",
        "title": "动词重叠（看看/试试） — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Унікальна риса китайської — повторення односкладового дієслова пом'якшує дію («трошки зробити») чи означає короткочасність.",
            "en": {
              "text": "A unique Chinese feature — repeating a one-syllable verb softens the action ('do a bit') or implies it's brief."
            }
          },
          {
            "type": "table",
            "title": "Подвоєні дієслова",
            "rows": [
              [
                "看看",
                "трохи подивитися"
              ],
              [
                "试试",
                "спробувати"
              ],
              [
                "想一想",
                "трохи подумати (з 一 посередині)"
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
                "你尝尝这个菜。",
                "Спробуй цю страву."
              ]
            ]
          }
        ],
        "titleEn": "Verb Reduplication — B1"
      },
      {
        "id": "reduplication-adjectives",
        "title": "形容词重叠 — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Повторення прикметника посилює значення й додає образності, часто вживається в описах.",
            "en": {
              "text": "Repeating an adjective intensifies its meaning and adds vividness, often used in descriptions."
            }
          },
          {
            "type": "table",
            "title": "Подвоєні прикметники",
            "rows": [
              [
                "高高的",
                "дуже високий"
              ],
              [
                "红红的脸",
                "дуже червоне обличчя"
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
                "她的眼睛大大的。",
                "У неї великі-великі очі."
              ]
            ]
          }
        ],
        "titleEn": "Adjective Reduplication — B1"
      },
      {
        "id": "existential-you",
        "title": "有 — 存在句 — A1",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "有 (є/мати) — незмінне для однини й множини, вживається і для наявності, і для володіння.",
            "en": {
              "text": "有 (there is/to have) is invariable for singular and plural, used both for existence and possession."
            }
          },
          {
            "type": "table",
            "title": "有",
            "rows": [
              [
                "这里有一个问题。",
                "Тут є одна проблема."
              ],
              [
                "我有两个孩子。",
                "У мене двоє дітей."
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
                "附近有商店吗？",
                "Тут поблизу є магазин?"
              ]
            ]
          }
        ],
        "titleEn": "有 — Existence & Possession"
      },
      {
        "id": "locative-zai",
        "title": "在 — 表示位置 — A1",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "在 перед іменником місця означає «у/на/в» і вживається як дієслово («перебувати») чи як прийменник перед дієсловом.",
            "en": {
              "text": "在 before a place noun means 'in/at/on' and is used as a verb ('to be at') or as a preposition before another verb."
            }
          },
          {
            "type": "table",
            "title": "在",
            "rows": [
              [
                "我在家。",
                "Я вдома."
              ],
              [
                "我在家吃饭。",
                "Я їм удома."
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
                "书在桌子上。",
                "Книга на столі."
              ]
            ]
          }
        ],
        "titleEn": "在 — Location"
      },
      {
        "id": "shi-de-emphasis",
        "title": "是...的 — 强调句 — B1",
        "emoji": "💫",
        "sections": [
          {
            "type": "intro",
            "text": "Унікальна риса китайської — конструкція 是...的 підкреслює деталь уже відомої минулої дії (коли/де/як/ким), а не саму дію.",
            "en": {
              "text": "A unique Chinese feature — the 是...的 construction emphasizes a detail of an already-known past action (when/where/how/by whom), not the action itself."
            }
          },
          {
            "type": "table",
            "title": "是...的",
            "rows": [
              [
                "我是昨天来的。",
                "Я приїхав саме вчора."
              ],
              [
                "他是坐飞机来的。",
                "Він приїхав саме літаком."
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
                "这是在中国买的。",
                "Це куплено саме в Китаї."
              ]
            ]
          }
        ],
        "titleEn": "是...的 — Emphasis Construction"
      },
      {
        "id": "lian-emphasis",
        "title": "连...都/也 — B2",
        "emoji": "💫",
        "sections": [
          {
            "type": "intro",
            "text": "连...都/也 («навіть») підкреслює крайній чи несподіваний випадок.",
            "en": {
              "text": "连...都/也 ('even') emphasizes an extreme or unexpected case."
            }
          },
          {
            "type": "table",
            "title": "连...都",
            "rows": [
              [
                "连小孩都懂。",
                "Навіть дитина розуміє."
              ],
              [
                "他连一分钟都不等。",
                "Він не чекає навіть хвилини."
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
                "我连他的名字都忘了。",
                "Я навіть його ім'я забув."
              ]
            ]
          }
        ],
        "titleEn": "连...都/也 — \"Even\""
      },
      {
        "id": "double-object-verbs",
        "title": "双宾语动词（给/教） — A2",
        "emoji": "🎁",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі дієслова (给, 教, 送) можуть мати два додатки поспіль: спершу особу, потім предмет — без прийменника.",
            "en": {
              "text": "Some verbs (给, 教, 送) can take two objects in a row: person first, then thing — with no preposition."
            }
          },
          {
            "type": "table",
            "title": "双宾语",
            "rows": [
              [
                "他给我一本书。",
                "Він дав мені книгу."
              ],
              [
                "老师教我们中文。",
                "Вчитель навчає нас китайської."
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
                "我送她一个礼物。",
                "Я подарував їй подарунок."
              ]
            ]
          }
        ],
        "titleEn": "Double-Object Verbs (给/教) — A2"
      },
      {
        "id": "adverbial-de",
        "title": "地 — 副词修饰动词 — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "地 (de) з'єднує прислівник/прикметник з дієсловом, яке він описує — вимовляється так само, як 的, але виконує іншу роль.",
            "en": {
              "text": "地 (de) connects an adverb/adjective to the verb it modifies — pronounced the same as 的, but serving a different role."
            }
          },
          {
            "type": "table",
            "title": "地",
            "rows": [
              [
                "她慢慢地走。",
                "Вона йде повільно."
              ],
              [
                "他认真地工作。",
                "Він старанно працює."
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
                "孩子们高兴地笑了。",
                "Діти радісно засміялися."
              ]
            ]
          }
        ],
        "titleEn": "地 — Adverbial Particle"
      },
      {
        "id": "complement-de-manner",
        "title": "得 — 程度/情态补语 — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "得 (de) з'єднує дієслово/прикметник з описом ступеня чи способу дії — третя частка «de», відмінна від 的 і 地.",
            "en": {
              "text": "得 (de) connects a verb/adjective to a description of the degree or manner of the action — the third 'de' particle, distinct from 的 and 地."
            }
          },
          {
            "type": "table",
            "title": "得",
            "rows": [
              [
                "他跑得很快。",
                "Він бігає дуже швидко."
              ],
              [
                "她说得很好。",
                "Вона говорить дуже добре."
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
                "今天热得要命。",
                "Сьогодні неймовірно спекотно."
              ]
            ]
          }
        ],
        "titleEn": "得 — Degree/Manner Complement"
      },
      {
        "id": "formal-informal-address",
        "title": "您 vs 你 — 礼貌用语 — A1",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "你 — нейтральне «ти/ви»; 您 — ввічлива форма до старших/незнайомих, вживана переважно на півночі Китаю.",
            "en": {
              "text": "你 is the neutral 'you'; 您 is the polite form for elders/strangers, used mostly in northern China."
            }
          },
          {
            "type": "table",
            "title": "你 vs 您",
            "rows": [
              [
                "你好吗？",
                "Як справи? (звичайно)"
              ],
              [
                "您好，请问...",
                "Вітаю, дозвольте запитати... (ввічливо)"
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
                "您贵姓？",
                "Як ваше шановне прізвище? (дуже ввічливо)"
              ]
            ]
          }
        ],
        "titleEn": "您 vs 你 — Politeness"
      },
      {
        "id": "common-idioms",
        "title": "常用习语 — B1",
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
                "你好",
                "привіт"
              ],
              [
                "谢谢",
                "дякую"
              ],
              [
                "没关系",
                "нічого страшного"
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
                "谢谢你的帮助！",
                "Дякую за допомогу!"
              ]
            ]
          }
        ],
        "titleEn": "Common Expressions — B1"
      },
      {
        "id": "negation-nuances",
        "title": "不 vs 没 的区别 — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Детальніше про різницю: 不 заперечує волю/звичку/майбутнє, 没 заперечує факт, що дія відбулася, — їх не можна взаємозамінювати.",
            "en": {
              "text": "More on the distinction: 不 negates will/habit/future, 没 negates the fact that an action occurred — they cannot be interchanged."
            }
          },
          {
            "type": "table",
            "title": "不 vs 没 — контраст",
            "rows": [
              [
                "我不吃肉。",
                "Я не їм м'ясо. (звичка/воля)"
              ],
              [
                "我没吃早饭。",
                "Я не поснідав. (факт, що не відбулось)"
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
                "他不喝酒，也没喝过。",
                "Він не п'є алкоголь і ніколи не пив."
              ]
            ]
          }
        ],
        "titleEn": "不 vs 没 — The Distinction"
      },
      {
        "id": "weather-expressions",
        "title": "天气表达 — A1",
        "emoji": "🌦️",
        "sections": [
          {
            "type": "intro",
            "text": "Погодні вирази здебільшого будуються з прикметника-присудка (з 很) або дієслова 下 (падати, про дощ/сніг).",
            "en": {
              "text": "Weather expressions are mostly built with a predicate adjective (with 很) or the verb 下 (to fall, for rain/snow)."
            }
          },
          {
            "type": "table",
            "title": "Погода",
            "rows": [
              [
                "下雨了。",
                "Іде дощ."
              ],
              [
                "今天很热。",
                "Сьогодні дуже спекотно."
              ],
              [
                "外面很冷。",
                "Надворі дуже холодно."
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
                "冬天会下雪。",
                "Взимку йде сніг."
              ]
            ]
          }
        ],
        "titleEn": "Weather Expressions — A1"
      },
      {
        "id": "greetings-common-phrases",
        "title": "问候语和常用语 — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "intro",
            "text": "你好 — універсальне привітання, доречне будь-коли, на відміну від деяких мов з привітаннями за часом доби.",
            "en": {
              "text": "你好 is a universal greeting, appropriate any time, unlike languages with time-of-day-specific greetings."
            }
          },
          {
            "type": "table",
            "title": "Основні фрази",
            "rows": [
              [
                "你好 / 你们好",
                "привіт / привіт усім"
              ],
              [
                "再见",
                "до побачення"
              ],
              [
                "对不起",
                "перепрошую/вибачте"
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
                "你好，很高兴认识你。",
                "Привіт, приємно познайомитись."
              ]
            ]
          }
        ],
        "titleEn": "Greetings & Common Phrases — A1"
      },
      {
        "id": "quantifiers",
        "title": "数量词（很多/一点儿） — A2",
        "emoji": "⚖️",
        "sections": [
          {
            "type": "intro",
            "text": "很多 (багато), 一点儿 (трохи), 都 (усі/весь) незмінні; 很多/一点儿 вимагають іменника без рахункового слова.",
            "en": {
              "text": "很多 (much/many), 一点儿 (a little), 都 (all/every) are invariable; 很多/一点儿 take the noun with no measure word."
            }
          },
          {
            "type": "table",
            "title": "很多 / 一点儿 / 都",
            "rows": [
              [
                "我有很多朋友。",
                "У мене багато друзів."
              ],
              [
                "我会说一点儿中文。",
                "Я трохи вмію говорити китайською."
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
                "大家都来了。",
                "Усі прийшли."
              ]
            ]
          }
        ],
        "titleEn": "Quantifiers (很多/一点儿) — A2"
      },
      {
        "id": "adverbs-common",
        "title": "常用副词（也/都/还） — A2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "也 (теж), 都 (усі/весь), 还 (ще/до того ж) — незмінні прислівники, що завжди стоять перед дієсловом чи прикметником.",
            "en": {
              "text": "也 (also), 都 (all), 还 (still/moreover) are invariable adverbs that always precede the verb or adjective."
            }
          },
          {
            "type": "table",
            "title": "也 / 都 / 还",
            "rows": [
              [
                "我也是学生。",
                "Я теж студент."
              ],
              [
                "他们都很忙。",
                "Вони всі дуже зайняті."
              ],
              [
                "我还没吃饭。",
                "Я ще не їв."
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
                "她还在睡觉。",
                "Вона все ще спить."
              ]
            ]
          }
        ],
        "titleEn": "Common Adverbs (也/都/还) — A2"
      },
      {
        "id": "word-order-time-place",
        "title": "时间状语和地点状语的顺序 — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Коли в реченні є і час, і місце, порядок фіксований: час → місце → дієслово (від загального до конкретного).",
            "en": {
              "text": "When a sentence has both time and place, the order is fixed: time → place → verb (from general to specific)."
            }
          },
          {
            "type": "table",
            "title": "时间 + 地点 + 动词",
            "rows": [
              [
                "我昨天在家看电视。",
                "Я вчора вдома дивився телевізор."
              ],
              [
                "他明天在学校考试。",
                "Він завтра в школі складатиме іспит."
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
                "我们今晚在饭店吃饭。",
                "Ми сьогодні ввечері їмо в ресторані."
              ]
            ]
          }
        ],
        "titleEn": "Order of Time & Place Adverbials — B1"
      },
      {
        "id": "sentence-final-particles",
        "title": "语气助词（吧/啊） — A2",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "吧 пом'якшує наказ/пропозицію («давай ж») або виражає припущення; 啊 додає емоційності чи здивування.",
            "en": {
              "text": "吧 softens a command/suggestion ('let's, then') or expresses a guess; 啊 adds emotion or surprise."
            }
          },
          {
            "type": "table",
            "title": "吧 / 啊",
            "rows": [
              [
                "我们走吧。",
                "Ходімо ж."
              ],
              [
                "你是老师吧？",
                "Ти, мабуть, вчитель?"
              ],
              [
                "太好了啊！",
                "Як же добре!"
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
                "快点儿吧！",
                "Швидше ж!"
              ]
            ]
          }
        ],
        "titleEn": "Modal Particles (吧/啊) — A2"
      },
      {
        "id": "counting-money-prices",
        "title": "钱和价格 — A2",
        "emoji": "💰",
        "sections": [
          {
            "type": "intro",
            "text": "Ціни вказуються числом + 块/元 (розмовна/письмова одиниця валюти), з 毛/角 для дрібніших частин.",
            "en": {
              "text": "Prices are stated with a number + 块/元 (colloquial/written currency unit), with 毛/角 for smaller fractions."
            }
          },
          {
            "type": "table",
            "title": "问价钱",
            "rows": [
              [
                "这个多少钱？",
                "Скільки це коштує?"
              ],
              [
                "三十块五毛。",
                "Тридцять юанів п'ятдесят фен."
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
                "这本书二十块钱。",
                "Ця книга коштує двадцять юанів."
              ]
            ]
          }
        ],
        "titleEn": "Money & Prices — A2"
      }
    ]
  },
  {
    "id": "exceptions",
    "title": "特殊情况",
    "titleEn": "Exceptions",
    "emoji": "⚠️",
    "rules": [
      {
        "id": "irregular-measure-words",
        "title": "特殊量词搭配 — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька рахункових слів не відповідають очевидній логіці форми предмета й потребують окремого запам'ятовування для конкретних іменників.",
            "en": {
              "text": "A few measure words don't follow the obvious shape-based logic and must be memorized individually for specific nouns."
            }
          },
          {
            "type": "table",
            "title": "Незвичні пари",
            "rows": [
              [
                "一匹马 (для коней)",
                "один кінь"
              ],
              [
                "一头牛 (для великої рогатої худоби)",
                "одна корова"
              ],
              [
                "一朵花 (для квітів)",
                "одна квітка"
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
                "她买了一朵玫瑰花。",
                "Вона купила одну троянду."
              ]
            ]
          }
        ],
        "titleEn": "Irregular Measure Word Pairings — B1"
      },
      {
        "id": "polysemous-le-pitfalls",
        "title": "了的常见错误用法 — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "了 не можна вживати з дієсловами стану/почуттів (爱, 喜欢) для звичайних тверджень і не вживають разом із запереченням 没.",
            "en": {
              "text": "了 cannot be used with state/emotion verbs (爱, 喜欢) for ordinary statements, and it's never combined with the negation 没."
            }
          },
          {
            "type": "table",
            "title": "Типові помилки",
            "rows": [
              [
                "我喜欢她。 (не *我喜欢了她 для звичного факту)",
                "Мені вона подобається."
              ],
              [
                "我没吃饭。 (не *我没吃了饭)",
                "Я не їв."
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
                "我以前喜欢过他。",
                "Раніше він мені подобався. (过, не 了, для минулого стану)"
              ]
            ]
          }
        ],
        "titleEn": "Common 了 Usage Pitfalls — B1"
      },
      {
        "id": "tone-sandhi-rules",
        "title": "声调变化规则（变调） — B1",
        "emoji": "✏️",
        "sections": [
          {
            "type": "intro",
            "text": "Тони можуть змінюватися в потоці мовлення: два треті тони поспіль → перший стає другим; 不 перед 4-м тоном стає 2-м тоном.",
            "en": {
              "text": "Tones can shift in connected speech: two 3rd tones in a row → the first becomes a 2nd tone; 不 before a 4th tone becomes a 2nd tone."
            }
          },
          {
            "type": "table",
            "title": "Приклади变调",
            "rows": [
              [
                "你好 (nǐ hǎo → ní hǎo)",
                "перший 3-й тон стає 2-м"
              ],
              [
                "不是 (bù shì → bú shì)",
                "不 перед 4-м тоном стає 2-м тоном"
              ]
            ]
          },
          {
            "type": "tip",
            "title": "Порада",
            "text": "Зміна тону не позначається на письмі піньїнєм — вимовляйте за правилом变调, а не за написаним тоном.",
            "en": {
              "title": "Tip",
              "text": "The tone shift isn't shown in written pinyin — pronounce according to the sandhi rule, not the written tone."
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
                "我也很好。",
                "У мене теж усе добре."
              ]
            ]
          }
        ],
        "titleEn": "Tone Sandhi Rules — B1"
      }
    ]
  }
];
