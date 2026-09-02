// Vymova — data/grammar-data/grammar_bn.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_BN: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "pronouns",
        "title": "Особові займенники — A1",
        "emoji": "🙋",
        "sections": [
          {
            "type": "intro",
            "text": "Бенгальська має три ступені ввічливості для \"ти/ви\": তুই (фамільярно), তুমি (нейтрально), আপনি (ввічливо).",
            "en": {
              "text": "Bengali has three politeness levels for \"you\": তুই (intimate), তুমি (neutral), আপনি (polite)."
            }
          },
          {
            "type": "table",
            "title": "Базові займенники",
            "rows": [
              [
                "আমি (ami)",
                "я"
              ],
              [
                "তুমি / আপনি",
                "ти / ви (ввічливо)"
              ],
              [
                "সে (se)",
                "він / вона"
              ],
              [
                "আমরা (amra)",
                "ми"
              ],
              [
                "তারা (tara)",
                "вони"
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
                "আমি ভালো আছি।",
                "Я почуваюся добре."
              ],
              [
                "আপনি কেমন আছেন?",
                "Як ви поживаєте? (ввічливо)"
              ]
            ]
          }
        ]
      },
      {
        "id": "zero-copula",
        "title": "Нульова зв'язка — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "У теперішньому часі для опису тотожності (\"я — студент\") бенгальська часто обходиться без дієслова-зв'язки взагалі — присудок-іменник ставиться просто після підмета.",
            "en": {
              "text": "For present-tense identity statements (\"I am a student\"), Bengali often drops the linking verb entirely — the noun predicate just follows the subject."
            }
          },
          {
            "type": "formula",
            "title": "Підмет + іменник(-присудок)",
            "rows": [
              [
                "আমি ছাত্র।",
                "(Я студент.)"
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
                "সে ডাক্তার।",
                "Він/вона лікар."
              ],
              [
                "আমি এখানে আছি।",
                "Я тут (для місця вживається আছি)."
              ]
            ]
          }
        ]
      },
      {
        "id": "negation",
        "title": "Заперечення \"না\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від багатьох мов, заперечна частка না (na) в бенгальській ставиться ПІСЛЯ дієслова, а не перед ним.",
            "en": {
              "text": "Unlike many languages, the negative particle না (na) in Bengali comes AFTER the verb, not before it."
            }
          },
          {
            "type": "formula",
            "title": "Підмет + дієслово + না",
            "rows": [
              [
                "আমি জানি না।",
                "(Я не знаю, букв. \"знаю не\".)"
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
                "আমি জানি না।",
                "Я не знаю."
              ],
              [
                "সে আসেনি।",
                "Він/вона не прийшов(-ла)."
              ]
            ]
          }
        ]
      },
      {
        "id": "questions",
        "title": "Питання з \"কি\" — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні утворюються часткою কি (ki), яка зазвичай ставиться одразу після підмета, без зміни іншого порядку слів.",
            "en": {
              "text": "Yes/no questions use the particle কি (ki), usually placed right after the subject, without changing the rest of the word order."
            }
          },
          {
            "type": "formula",
            "title": "Підмет + কি + решта речення?",
            "rows": [
              [
                "তুমি কি আসবে?",
                "(Ти прийдеш?)"
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
                "আপনি কি ব্যস্ত?",
                "Ви зайняті?"
              ],
              [
                "তুমি কি ক্ষুধার্ত?",
                "Ти голодний?"
              ]
            ]
          }
        ]
      },
      {
        "id": "plurals",
        "title": "Множина — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина для людей утворюється суфіксом -রা, а для предметів — -গুলো/-গুলি, що приєднуються до іменника.",
            "en": {
              "text": "The plural for people uses the suffix -রা, while for objects it is -গুলো/-গুলি, attached to the noun."
            }
          },
          {
            "type": "table",
            "title": "Приклади суфіксів",
            "rows": [
              [
                "ছেলে → ছেলেরা",
                "хлопчик → хлопчики"
              ],
              [
                "বই → বইগুলো",
                "книга → книги"
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
                "ছেলেরা খেলছে।",
                "Хлопчики граються."
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "tenses",
    "title": "কাল ও ভাব",
    "titleEn": "Tenses & Moods",
    "emoji": "🕐",
    "rules": [
      {
        "id": "present-simple",
        "title": "সাধারণ বর্তমান কাল — A1",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Звичайний теперішній час утворюється основою дієслова + особовим закінченням, узгодженим не з родом (якого немає), а з рівнем ввічливості (তুই/তুমি/আপনি).",
            "en": {
              "text": "The simple present is formed with the verb stem + a personal ending, agreeing not with gender (which doesn't exist) but with the politeness level (তুই/তুমি/আপনি)."
            }
          },
          {
            "type": "formula",
            "title": "পড়া (читати) — বর্তমান কাল",
            "rows": [
              [
                "✅ (+)",
                "আমি",
                "পড়ি",
                "→ আমি বই পড়ি।"
              ],
              [
                "✅ (+)",
                "তুমি",
                "পড়ো",
                "→ তুমি পড়ো।"
              ],
              [
                "✅ (+)",
                "আপনি",
                "পড়েন",
                "→ আপনি পড়েন।"
              ],
              [
                "✅ (+)",
                "সে",
                "পড়ে",
                "→ সে বই পড়ে।"
              ]
            ],
            "en": {
              "title": "পড়া (to read) — present"
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
                "আমি প্রতিদিন স্কুলে যাই।",
                "Я щодня ходжу до школи."
              ]
            ]
          }
        ]
      },
      {
        "id": "present-continuous",
        "title": "ঘটমান বর্তমান কাল — A1",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія «просто зараз» утворюється основою + -চ্ছি/-চ্ছ/-চ্ছে/-চ্ছেন.",
            "en": {
              "text": "An action happening right now is formed with the stem + -চ্ছি/-চ্ছ/-চ্ছে/-চ্ছেন."
            }
          },
          {
            "type": "formula",
            "title": "পড়া → ঘটমান বর্তমান",
            "rows": [
              [
                "✅ (+)",
                "আমি",
                "পড়ছি",
                "→ আমি বই পড়ছি।"
              ],
              [
                "✅ (+)",
                "সে",
                "পড়ছে",
                "→ সে পড়ছে।"
              ]
            ],
            "en": {
              "title": "পড়া → present continuous"
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
                "তুমি কী করছ?",
                "Що ти зараз робиш?"
              ]
            ]
          }
        ]
      },
      {
        "id": "present-perfect",
        "title": "পুরাঘটিত বর্তমান কাল — A2",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній доконаний час виражає дію, результат якої важливий зараз. Утворюється основою + -য়েছি/-য়েছ/-য়েছে.",
            "en": {
              "text": "The present perfect expresses an action whose result matters now. Formed with the stem + -য়েছি/-য়েছ/-য়েছে."
            }
          },
          {
            "type": "formula",
            "title": "পড়া → পুরাঘটিত বর্তমান",
            "rows": [
              [
                "✅ (+)",
                "আমি",
                "পড়েছি",
                "→ আমি বইটা পড়েছি।"
              ],
              [
                "✅ (+)",
                "সে",
                "পড়েছে",
                "→ সে খেয়েছে।"
              ]
            ],
            "en": {
              "title": "পড়া → present perfect"
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
                "আমি কখনো ঢাকায় যাইনি।",
                "Я ніколи не був у Дацці."
              ]
            ]
          }
        ]
      },
      {
        "id": "past-simple",
        "title": "সাধারণ অতীত কাল — A1",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Простий минулий час виражає одноразову завершену дію; утворюється основою + -লাম/-লে/-লো/-লেন.",
            "en": {
              "text": "The simple past expresses a single completed action; formed with the stem + -লাম/-লে/-লো/-লেন."
            }
          },
          {
            "type": "formula",
            "title": "পড়া → সাধারণ অতীত",
            "rows": [
              [
                "✅ (+)",
                "আমি",
                "পড়লাম",
                "→ আমি বইটা পড়লাম।"
              ],
              [
                "✅ (+)",
                "সে",
                "পড়লো",
                "→ সে গতকাল এসেছিল।"
              ]
            ],
            "en": {
              "title": "পড়া → simple past"
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
                "আমি গতকাল বাজারে গেলাম।",
                "Я вчора пішов на ринок."
              ]
            ]
          }
        ]
      },
      {
        "id": "past-continuous",
        "title": "ঘটমান অতীত কাল — A2",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія в минулому утворюється основою + -চ্ছিলাম/-চ্ছিলে/-চ্ছিল.",
            "en": {
              "text": "An ongoing past action is formed with the stem + -চ্ছিলাম/-চ্ছিলে/-চ্ছিল."
            }
          },
          {
            "type": "table",
            "title": "-চ্ছিলাম",
            "rows": [
              [
                "আমি পড়ছিলাম।",
                "Я читав."
              ],
              [
                "সে ঘুমাচ্ছিল।",
                "Він/вона спав(ла)."
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
                "যখন আমি এলাম, সে খাচ্ছিল।",
                "Коли я прийшов, вона їла."
              ]
            ]
          }
        ]
      },
      {
        "id": "past-habitual",
        "title": "নিত্যবৃত্ত অতীত কাল — B1",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Звичка в минулому виражається основою + -তাম/-তে/-তো (аналог used to).",
            "en": {
              "text": "A past habit is expressed with the stem + -তাম/-তে/-তো (like 'used to')."
            }
          },
          {
            "type": "table",
            "title": "-তাম",
            "rows": [
              [
                "আমি রোজ খেলতাম।",
                "Я щодня грав."
              ],
              [
                "সে বই পড়ত।",
                "Він/вона читав(ла) книги."
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
                "ছোটবেলায় আমি ফুটবল খেলতাম।",
                "У дитинстві я грав у футбол."
              ]
            ]
          }
        ]
      },
      {
        "id": "past-perfect",
        "title": "পুরাঘটিত অতীত কাল — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Виражає дію, що відбулася раніше за іншу минулу подію; утворюється основою + -য়েছিলাম/-য়েছিলে/-য়েছিল.",
            "en": {
              "text": "Expresses an action that happened before another past event; formed with the stem + -য়েছিলাম/-য়েছিলে/-য়েছিল."
            }
          },
          {
            "type": "table",
            "title": "-য়েছিলাম",
            "rows": [
              [
                "আমি আগেই খেয়েছিলাম।",
                "Я вже поїв раніше."
              ],
              [
                "সে চলে গিয়েছিল।",
                "Він уже пішов."
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
                "যখন আমি পৌঁছালাম, ট্রেন চলে গিয়েছিল।",
                "Коли я прибув, потяг уже поїхав."
              ]
            ]
          }
        ]
      },
      {
        "id": "future-simple",
        "title": "সাধারণ ভবিষ্যৎ কাল — A1",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється основою + -বো/-বে/-বেন.",
            "en": {
              "text": "The future tense is formed with the stem + -বো/-বে/-বেন."
            }
          },
          {
            "type": "formula",
            "title": "পড়া → ভবিষ্যৎ",
            "rows": [
              [
                "✅ (+)",
                "আমি",
                "পড়বো",
                "→ আমি কাল পড়বো।"
              ],
              [
                "✅ (+)",
                "সে",
                "পড়বে",
                "→ সে আসবে।"
              ]
            ],
            "en": {
              "title": "পড়া → future"
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
                "কাল বৃষ্টি হবে।",
                "Завтра піде дощ."
              ]
            ]
          }
        ]
      },
      {
        "id": "future-continuous",
        "title": "ঘটমান ভবিষ্যৎ কাল — B1",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія в майбутньому утворюється дієприслівником + থাকা (перебувати) у майбутньому часі.",
            "en": {
              "text": "An ongoing future action is formed with a verbal adverb + থাকা (to remain) in the future tense."
            }
          },
          {
            "type": "table",
            "title": "থাকা в майбутньому",
            "rows": [
              [
                "আমি পড়তে থাকব।",
                "Я продовжуватиму читати."
              ],
              [
                "সে কাজ করতে থাকবে।",
                "Він продовжуватиме працювати."
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
                "এই সময় সে ঘুমাচ্ছে হবে।",
                "У цей час він, мабуть, спатиме."
              ]
            ]
          }
        ]
      },
      {
        "id": "imperative",
        "title": "অনুজ্ঞা — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб має три форми ввічливості, узгоджені з тим самим займенником, що й у теперішньому часі.",
            "en": {
              "text": "The imperative has three politeness forms, matching the same pronoun system as the present tense."
            }
          },
          {
            "type": "table",
            "title": "Рівні ввічливості",
            "rows": [
              [
                "পড়ো! (তুমি)",
                "читай!"
              ],
              [
                "পড়ুন! (আপনি)",
                "будь ласка, читайте! (ввічливо)"
              ],
              [
                "পড়িস না! (তুই)",
                "не читай! (фамільярно)"
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
                "দয়া করে বসুন।",
                "Будь ласка, сідайте."
              ]
            ]
          }
        ]
      },
      {
        "id": "subjunctive-conditional",
        "title": "সাপেক্ষ ভবিষ্যৎ (যদি...তাহলে) — B1",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовні речення вводяться যদি (якщо) в підрядному й তাহলে (то) в головному реченні.",
            "en": {
              "text": "Conditional sentences are introduced by যদি (if) in the subordinate clause and তাহলে (then) in the main clause."
            }
          },
          {
            "type": "table",
            "title": "যদি...তাহলে",
            "rows": [
              [
                "যদি বৃষ্টি হয়, তাহলে আমি যাব না।",
                "Якщо піде дощ, я не піду."
              ],
              [
                "যদি সময় থাকত, আমি যেতাম।",
                "Якби був час, я б пішов."
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
                "যদি তুমি চাও, আমি সাহায্য করব।",
                "Якщо ти хочеш, я допоможу."
              ]
            ]
          }
        ]
      },
      {
        "id": "verb-conjugation-by-honorific",
        "title": "ক্রিয়ার সম্মানসূচক রূপ — A2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Унікальна риса бенгальської — дієслово не має ні роду, ні окремого відмінювання за особою в третій особі; натомість воно узгоджується з рівнем ввічливості займенника (তুই/তুমি/আপনি/সে/তিনি).",
            "en": {
              "text": "A unique Bengali feature — the verb has no gender and no separate 3rd-person distinction by number; instead it agrees with the politeness level of the pronoun (তুই/তুমি/আপনি/সে/তিনি)."
            }
          },
          {
            "type": "table",
            "title": "সে vs তিনি",
            "rows": [
              [
                "সে যায়।",
                "Він/вона йде. (звичайно)"
              ],
              [
                "তিনি যান।",
                "Він/вона йде. (шанобливо)"
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
                "আমার বাবা কাজ করেন।",
                "Мій батько працює. (шанобливо)"
              ]
            ]
          }
        ]
      },
      {
        "id": "compound-verbs-aspect",
        "title": "যৌগিক ক্রিয়া ও দিক — B1",
        "emoji": "🔧",
        "sections": [
          {
            "type": "intro",
            "text": "Основне дієслово + допоміжне «легке» дієслово (ফেলা, নেওয়া, দেওয়া) додає відтінок завершеності, раптовості чи користі.",
            "en": {
              "text": "Main verb + a 'light' auxiliary verb (ফেলা, নেওয়া, দেওয়া) adds a nuance of completion, suddenness, or benefit."
            }
          },
          {
            "type": "table",
            "title": "Складені дієслова",
            "rows": [
              [
                "খেয়ে ফেলা",
                "з'їсти все (завершено)"
              ],
              [
                "করে নেওয়া",
                "зробити (для себе)"
              ],
              [
                "বলে দেওয়া",
                "сказати (комусь)"
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
                "সে সব খেয়ে ফেলেছে।",
                "Він з'їв усе."
              ]
            ]
          }
        ]
      }
    ]
  }
];
