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
  }
];
