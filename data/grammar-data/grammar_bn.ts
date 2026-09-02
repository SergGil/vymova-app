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
  },
  {
    "id": "grammar",
    "title": "ব্যাকরণ",
    "titleEn": "Grammar",
    "emoji": "📖",
    "rules": [
      {
        "id": "classifier-ta-ti",
        "title": "সংখ্যাবাচক শব্দ টা/টি — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Унікальна риса бенгальської — числа не поєднуються з іменником напряму, а вимагають класифікатора টা (звичайний) або টি (ввічливий/маленький) між числом і іменником.",
            "en": {
              "text": "A unique Bengali feature — numbers don't combine with a noun directly; they require a classifier টা (ordinary) or টি (polite/small) between the number and the noun."
            }
          },
          {
            "type": "table",
            "title": "সংখ্যা + টা/টি + বিশেষ্য",
            "rows": [
              [
                "একটা বই",
                "одна книга"
              ],
              [
                "দুটো আপেল",
                "два яблука"
              ],
              [
                "তিনটি ছেলে",
                "троє хлопчиків (ввічл.)"
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
                "আমার একটা কলম দরকার।",
                "Мені потрібна одна ручка."
              ]
            ]
          }
        ]
      },
      {
        "id": "definite-article-ta",
        "title": "নির্দিষ্টতা বোঝাতে টা/টি — A2",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Без числа টা/টি, приєднані до іменника, виконують роль означеного артикля («той самий», «конкретний»).",
            "en": {
              "text": "Without a number, টা/টি attached to a noun act as a definite article ('the specific one')."
            }
          },
          {
            "type": "table",
            "title": "বই vs বইটা",
            "rows": [
              [
                "বই",
                "книга (загалом)"
              ],
              [
                "বইটা",
                "ця книга (конкретна)"
              ],
              [
                "মেয়েটি",
                "ця дівчина (конкретна)"
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
                "বইটা টেবিলে আছে।",
                "Ця книга на столі."
              ]
            ]
          }
        ]
      },
      {
        "id": "classifier-jon",
        "title": "মানুষের জন্য জন — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Для людей замість টা вживають класифікатор জন, підкреслюючи, що йдеться про особу.",
            "en": {
              "text": "For people, the classifier জন is used instead of টা, emphasizing that a person is being referred to."
            }
          },
          {
            "type": "table",
            "title": "সংখ্যা + জন",
            "rows": [
              [
                "একজন মানুষ",
                "одна людина"
              ],
              [
                "দুজন ছাত্র",
                "два студенти"
              ],
              [
                "পাঁচজন শিক্ষক",
                "п'ять вчителів"
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
                "একজন লোক এসেছে।",
                "Прийшла одна людина."
              ]
            ]
          }
        ]
      },
      {
        "id": "plural-suffixes-detail",
        "title": "বহুবচনের প্রত্যয় বিস্তারিত — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Крім -রা для людей, вживають -গুলো (звичайне), -গুলি (літературне) для предметів, а -দের — присвійно-об'єктну форму множини людей.",
            "en": {
              "text": "Besides -রা for people, -গুলো (colloquial) and -গুলি (literary) are used for objects, and -দের is the possessive/object plural form for people."
            }
          },
          {
            "type": "table",
            "title": "Суфікси множини",
            "rows": [
              [
                "ছেলেরা",
                "хлопчики (підмет)"
              ],
              [
                "ছেলেদের",
                "хлопчиків/хлопчикам (додаток/присвійне)"
              ],
              [
                "জিনিসগুলো",
                "ці речі"
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
                "আমি ছেলেদের দেখলাম।",
                "Я побачив хлопчиків."
              ]
            ]
          }
        ]
      },
      {
        "id": "case-nominative-objective",
        "title": "কর্তৃকারক ও কর্মকারক — A2",
        "emoji": "🏷️",
        "sections": [
          {
            "type": "intro",
            "text": "Підмет (кортрікарок) не має закінчення; означений/особовий прямий додаток (кормокарок) отримує -কে.",
            "en": {
              "text": "The subject (nominative) has no ending; a definite/personal direct object (objective) takes -কে."
            }
          },
          {
            "type": "table",
            "title": "কর্তা vs কর্ম",
            "rows": [
              [
                "রহিম বইটা পড়ল।",
                "Рахім прочитав книгу. (неозначений додаток — без -কে)"
              ],
              [
                "আমি রহিমকে দেখলাম।",
                "Я побачив Рахіма. (особа — з -কে)"
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
                "সে আমাকে ডাকল।",
                "Він покликав мене."
              ]
            ]
          }
        ]
      },
      {
        "id": "postposition-r",
        "title": "-র/-এর — A1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійність виражається суфіксом -র (після голосної) або -এর (після приголосної), приєднаним до іменника-власника.",
            "en": {
              "text": "Possession is expressed with the suffix -র (after a vowel) or -এর (after a consonant), attached to the owner noun."
            }
          },
          {
            "type": "table",
            "title": "-র / -এর",
            "rows": [
              [
                "রহিমের বই",
                "книга Рахіма"
              ],
              [
                "আমার বাড়ি",
                "мій дім"
              ],
              [
                "মায়ের ছবি",
                "фотографія мами"
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
                "এটা আমার ভাইয়ের গাড়ি।",
                "Це машина мого брата."
              ]
            ]
          }
        ]
      },
      {
        "id": "postposition-te",
        "title": "-তে — A1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -তে означає «у/на» (місце) і теж використовується для позначення часу.",
            "en": {
              "text": "The suffix -তে means 'in/at/on' (location) and is also used for time expressions."
            }
          },
          {
            "type": "table",
            "title": "-তে",
            "rows": [
              [
                "বাড়িতে",
                "у домі"
              ],
              [
                "টেবিলে",
                "на столі"
              ],
              [
                "সকালে",
                "вранці"
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
                "আমি ঢাকায় থাকি।",
                "Я живу в Дацці."
              ]
            ]
          }
        ]
      },
      {
        "id": "postposition-theke",
        "title": "থেকে — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "থেকে (від/з) вказує на джерело, точку відліку в часі чи порівняння.",
            "en": {
              "text": "থেকে (from) marks a source, a starting point in time, or comparison."
            }
          },
          {
            "type": "table",
            "title": "থেকে",
            "rows": [
              [
                "আমি ইউক্রেন থেকে এসেছি।",
                "Я приїхав з України."
              ],
              [
                "সকাল থেকে বিকেল পর্যন্ত",
                "з ранку до вечора"
              ],
              [
                "সে আমার থেকে লম্বা।",
                "Він вищий за мене."
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
                "দোকান থেকে ফিরলাম।",
                "Я повернувся з магазину."
              ]
            ]
          }
        ]
      },
      {
        "id": "postposition-diye-jonno",
        "title": "দিয়ে, জন্য — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "দিয়ে (за допомогою/через) виражає знаряддя чи спосіб; জন্য (для/заради) — мету чи призначення.",
            "en": {
              "text": "দিয়ে (with/by means of) expresses instrument or manner; জন্য (for/for the sake of) expresses purpose or destination."
            }
          },
          {
            "type": "table",
            "title": "দিয়ে / জন্য",
            "rows": [
              [
                "কলম দিয়ে লেখা",
                "писати ручкою"
              ],
              [
                "তোমার জন্য",
                "для тебе"
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
                "এই উপহার তোমার জন্য।",
                "Цей подарунок для тебе."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-invariable",
        "title": "বিশেষণ অপরিবর্তনীয় — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від гінді, бенгальські прикметники повністю незмінні — жодного узгодження за родом, числом чи відмінком.",
            "en": {
              "text": "Unlike Hindi, Bengali adjectives are completely invariable — no agreement for gender, number, or case."
            }
          },
          {
            "type": "table",
            "title": "ভালো (гарний) — без змін",
            "rows": [
              [
                "ভালো ছেলে",
                "гарний хлопчик"
              ],
              [
                "ভালো মেয়ে",
                "гарна дівчинка"
              ],
              [
                "ভালো ছেলেরা",
                "гарні хлопчики"
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
                "এটা একটা সুন্দর বাড়ি।",
                "Це гарний дім."
              ]
            ]
          }
        ]
      },
      {
        "id": "comparative-superlative",
        "title": "তুলনা (চেয়ে, সবচেয়ে) — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняльний ступінь: [іменник] + চেয়ে + прикметник; найвищий ступінь: সবচেয়ে + прикметник.",
            "en": {
              "text": "Comparative: [noun] + চেয়ে + adjective; superlative: সবচেয়ে + adjective."
            }
          },
          {
            "type": "table",
            "title": "চেয়ে / সবচেয়ে",
            "rows": [
              [
                "সে আমার চেয়ে লম্বা।",
                "Він вищий за мене."
              ],
              [
                "সে সবচেয়ে লম্বা।",
                "Він найвищий."
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
                "ঢাকা তার চেয়ে বড় শহর।",
                "Дацца більше за нього місто."
              ]
            ]
          }
        ]
      },
      {
        "id": "personal-pronoun-oblique",
        "title": "সর্বনামের বিভক্তিযুক্ত রূপ — A2",
        "emoji": "🙋",
        "sections": [
          {
            "type": "intro",
            "text": "Особові займенники мають окремі форми перед -কে/-র/-তে, часто скорочені.",
            "en": {
              "text": "Personal pronouns have distinct forms before -কে/-র/-তে, often shortened."
            }
          },
          {
            "type": "table",
            "title": "Непрямі форми",
            "rows": [
              [
                "আমি → আমাকে / আমার",
                "я → мене / мій"
              ],
              [
                "তুমি → তোমাকে / তোমার",
                "ти → тебе / твій"
              ],
              [
                "সে → তাকে / তার",
                "він/вона → його/її / його/її"
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
                "আমাকে সাহায্য করো।",
                "Допоможи мені."
              ]
            ]
          }
        ]
      },
      {
        "id": "possessive-pronouns",
        "title": "সম্বন্ধবাচক সর্বনাম (আমার/তোমার/আপনার) — A1",
        "emoji": "🙋",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійні займенники утворені від займенника + -র/-এর і незмінні, оскільки прикметники не мають узгодження.",
            "en": {
              "text": "Possessive pronouns are formed with pronoun + -র/-এর and are invariable, since adjectives have no agreement."
            }
          },
          {
            "type": "table",
            "title": "আমার / তোমার / আপনার",
            "rows": [
              [
                "আমার বই",
                "моя книга"
              ],
              [
                "তোমার বাড়ি",
                "твій дім"
              ],
              [
                "আপনার নাম",
                "ваше ім'я (ввічл.)"
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
                "আপনার নাম কী?",
                "Як вас звати?"
              ]
            ]
          }
        ]
      },
      {
        "id": "demonstrative-pronouns",
        "title": "নির্দেশক সর্বনাম (এই/ওই/সেই) — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "এই (цей) — найближче, ওই (той) — видиме здалеку, সেই (той) — згаданий раніше, невидимий.",
            "en": {
              "text": "এই (this) is nearest, ওই (that) is visible far away, সেই (that) refers to something mentioned earlier, not visible."
            }
          },
          {
            "type": "table",
            "title": "এই / ওই / সেই",
            "rows": [
              [
                "এই বই",
                "ця книга (тут)"
              ],
              [
                "ওই বাড়ি",
                "той дім (там, видно)"
              ],
              [
                "সেই দিন",
                "того дня (згаданий раніше)"
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
                "এই মেয়েটি আমার বোন।",
                "Ця дівчина — моя сестра."
              ]
            ]
          }
        ]
      },
      {
        "id": "relative-pronouns",
        "title": "সম্বন্ধবাচক সর্বনাম যে...সে — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Бенгальська, як гінді, використовує кореляцію যে (який)...সে (той) — обидва слова присутні в реченні.",
            "en": {
              "text": "Bengali, like Hindi, uses the correlative যে (who/which)...সে (that one) — both words appear in the sentence."
            }
          },
          {
            "type": "table",
            "title": "যে...সে",
            "rows": [
              [
                "যে ছেলে এসেছে, সে আমার ভাই।",
                "Хлопчик, який прийшов, — мій брат."
              ],
              [
                "যা তুমি বলেছ, তা ঠিক।",
                "Те, що ти сказав, правильно."
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
                "যা চাও, তাই করো।",
                "Роби, що хочеш."
              ]
            ]
          }
        ]
      },
      {
        "id": "interrogative-pronouns",
        "title": "প্রশ্নবাচক সর্বনাম (কে, কী, কত) — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "কে (хто) вживається для осіб, কী (що) для речей, কত (скільки) — незмінне, оскільки прикметники не узгоджуються.",
            "en": {
              "text": "কে (who) is used for people, কী (what) for things, কত (how much/many) is invariable since adjectives don't agree."
            }
          },
          {
            "type": "table",
            "title": "কে / কী / কত",
            "rows": [
              [
                "সে কে?",
                "Хто це?"
              ],
              [
                "এটা কী?",
                "Що це?"
              ],
              [
                "এটার দাম কত?",
                "Скільки це коштує?"
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
                "তোমার নাম কী?",
                "Як тебе звати?"
              ]
            ]
          }
        ]
      },
      {
        "id": "indefinite-pronouns",
        "title": "অনির্দিষ্ট সর্বনাম (কেউ, কিছু) — A2",
        "emoji": "🔘",
        "sections": [
          {
            "type": "intro",
            "text": "কেউ (хтось/будь-хто) для осіб; কিছু (щось/дещо) для речей.",
            "en": {
              "text": "কেউ (someone/anyone) is for people; কিছু (something/some) is for things."
            }
          },
          {
            "type": "table",
            "title": "কেউ / কিছু",
            "rows": [
              [
                "কেউ এসেছে।",
                "Хтось прийшов."
              ],
              [
                "আমার কিছু লাগবে।",
                "Мені щось потрібно."
              ],
              [
                "কোনো সমস্যা নেই।",
                "Немає жодної проблеми."
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
                "কিছু বোলো না।",
                "Нічого не кажи."
              ]
            ]
          }
        ]
      },
      {
        "id": "three-tier-politeness",
        "title": "তিন স্তরের সম্মান — A1",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Унікальна риса бенгальської — три ступені ввічливості для «ти/ви»: তুই (дуже фамільярно, до дітей/дуже близьких), তুমি (нейтрально), আপনি (ввічливо).",
            "en": {
              "text": "A unique Bengali feature — three politeness levels for 'you': তুই (very intimate, for children/very close people), তুমি (neutral), আপনি (polite)."
            }
          },
          {
            "type": "table",
            "title": "তুই / তুমি / আপনি",
            "rows": [
              [
                "তুই যাবি?",
                "Ти підеш? (дуже фамільярно)"
              ],
              [
                "তুমি যাবে?",
                "Ти підеш? (нейтрально)"
              ],
              [
                "আপনি যাবেন?",
                "Ви підете? (ввічливо)"
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
                "আপনি কোথায় থাকেন?",
                "Де ви живете?"
              ]
            ]
          }
        ]
      },
      {
        "id": "numbers-cardinal",
        "title": "সংখ্যা (গণনা) — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Числа в бенгальській переважно нерегулярні й вимагають індивідуального запам'ятовування, особливо 1-20.",
            "en": {
              "text": "Numbers in Bengali are mostly irregular and must be memorized individually, especially 1-20."
            }
          },
          {
            "type": "table",
            "title": "1–10",
            "rows": [
              [
                "এক, দুই, তিন",
                "1, 2, 3"
              ],
              [
                "চার, পাঁচ",
                "4, 5"
              ],
              [
                "ছয়...দশ",
                "6...10"
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
                "আমার তিনটা ভাই আছে।",
                "У мене три брати."
              ]
            ]
          }
        ]
      },
      {
        "id": "numbers-ordinal",
        "title": "ক্রমবাচক সংখ্যা — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Порядкові числівники утворюються переважно суфіксом -ম, крім перших кількох, які нерегулярні; незмінні.",
            "en": {
              "text": "Ordinal numbers are mostly formed with the suffix -ম, except the first few, which are irregular; invariable."
            }
          },
          {
            "type": "table",
            "title": "1-й – 5-й",
            "rows": [
              [
                "প্রথম",
                "1-й"
              ],
              [
                "দ্বিতীয়",
                "2-й"
              ],
              [
                "তৃতীয়, চতুর্থ, পঞ্চম",
                "3-й, 4-й, 5-й"
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
                "এটা আমার প্রথম বই।",
                "Це моя перша книга."
              ]
            ]
          }
        ]
      },
      {
        "id": "days-of-week",
        "title": "সপ্তাহের দিন — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Дні тижня вживаються з суфіксом -য়/-তে для позначення «у...».",
            "en": {
              "text": "Days of the week take the suffix -য়/-তে to mean 'on...'."
            }
          },
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "সোমবার, মঙ্গলবার, বুধবার",
                "понеділок, вівторок, середа"
              ],
              [
                "বৃহস্পতিবার, শুক্রবার",
                "четвер, п'ятниця"
              ],
              [
                "শনিবার, রবিবার",
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
                "আমরা শুক্রবারে দেখা করব।",
                "Ми зустрінемось у п'ятницю."
              ]
            ]
          }
        ]
      },
      {
        "id": "months-dates",
        "title": "মাস ও তারিখ — A2",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Бенгальська має власний сонячний календар (Bôngabdo) поряд з григоріанським, який вживають у щоденному житті.",
            "en": {
              "text": "Bengali has its own solar calendar (Bôngabdo) alongside the Gregorian one used in daily life."
            }
          },
          {
            "type": "table",
            "title": "Місяці й дата",
            "rows": [
              [
                "জানুয়ারি, ফেব্রুয়ারি...",
                "січень, лютий..."
              ],
              [
                "৫ মে",
                "5-те травня"
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
                "আমার জন্মদিন জুনে।",
                "Мій день народження в червні."
              ]
            ]
          }
        ]
      }
    ]
  }
];
