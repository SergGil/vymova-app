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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
      }
    ]
  }
];
