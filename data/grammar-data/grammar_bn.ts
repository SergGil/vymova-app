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
        ],
        "titleEn": "Personal Pronouns — A1"
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
        ],
        "titleEn": "Zero Copula — A1"
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
        ],
        "titleEn": "Negation with না — A1"
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
        ],
        "titleEn": "Questions with কি — A1"
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
        ],
        "titleEn": "Plurals — A1"
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
        ],
        "titleEn": "Simple Present — A1"
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
        ],
        "titleEn": "Present Continuous — A1"
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
        ],
        "titleEn": "Present Perfect — A2"
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
        ],
        "titleEn": "Simple Past — A1"
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
        ],
        "titleEn": "Past Continuous — A2"
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
        ],
        "titleEn": "Habitual Past — B1"
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
        ],
        "titleEn": "Past Perfect — B1"
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
        ],
        "titleEn": "Simple Future — A1"
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
        ],
        "titleEn": "Future Continuous — B1"
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
        ],
        "titleEn": "Imperative — A2"
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
        ],
        "titleEn": "Conditional Sentences (Jodi...Tahole) — B1"
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
        ],
        "titleEn": "Honorific-Based Verb Agreement — A2"
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
        ],
        "titleEn": "Compound Verbs & Aspect — B1"
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
        ],
        "titleEn": "Numeral Classifiers টা/টি — A1"
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
        ],
        "titleEn": "Definiteness with টা/টি — A2"
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
        ],
        "titleEn": "The Classifier জন (For People) — A2"
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
        ],
        "titleEn": "Plural Suffixes in Detail — A2"
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
        ],
        "titleEn": "Subject & Object Marking — A2"
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
        ],
        "titleEn": "The Possessive Suffix -র/-এর — A1"
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
        ],
        "titleEn": "The Locative Suffix -তে — A1"
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
        ],
        "titleEn": "থেকে (From) — A2"
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
        ],
        "titleEn": "দিয়ে, জন্য (With, For) — A2"
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
        ],
        "titleEn": "Invariable Adjectives — A1"
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
        ],
        "titleEn": "Comparison (চেয়ে, সবচেয়ে) — A2"
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
        ],
        "titleEn": "Oblique Personal Pronouns — A2"
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
        ],
        "titleEn": "Possessive Pronouns — A1"
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
        ],
        "titleEn": "Demonstrative Pronouns (এই/ওই/সেই) — A1"
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
        ],
        "titleEn": "Correlative Relative Pronouns (যে...সে) — B1"
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
        ],
        "titleEn": "Interrogative Pronouns (কে, কী, কত) — A1"
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
        ],
        "titleEn": "Indefinite Pronouns (কেউ, কিছু) — A2"
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
        ],
        "titleEn": "The Three-Tier Politeness System — A1"
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
        ],
        "titleEn": "Cardinal Numbers — A1"
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
        ],
        "titleEn": "Ordinal Numbers — A2"
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
        ],
        "titleEn": "Days of the Week — A1"
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
        ],
        "titleEn": "Months & Dates — A2"
      },
      {
        "id": "telling-time",
        "title": "সময় বলা — A2",
        "emoji": "🕒",
        "sections": [
          {
            "type": "intro",
            "text": "Питання про час: কয়টা বাজে? Відповідь будується числом + টা বাজে.",
            "en": {
              "text": "To ask the time: কয়টা বাজে? The answer uses the number + টা বাজে."
            }
          },
          {
            "type": "table",
            "title": "Вказування часу",
            "rows": [
              [
                "তিনটা বাজে।",
                "Третя година."
              ],
              [
                "সাড়ে তিনটা বাজে।",
                "Пів на четверту."
              ],
              [
                "পৌনে চারটা বাজে।",
                "Без чверті четверта."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "এখন কয়টা বাজে?",
                "Котра зараз година?"
              ]
            ]
          }
        ],
        "titleEn": "Telling Time — A2"
      },
      {
        "id": "conjunctions-basic",
        "title": "সংযোজক অব্যয় (এবং, বা, কিন্তু) — A1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Сурядні сполучники з'єднують рівнозначні слова чи речення.",
            "en": {
              "text": "Coordinating conjunctions connect equal words or clauses."
            }
          },
          {
            "type": "markers",
            "title": "Основні сполучники",
            "items": [
              "এবং/আর (і)",
              "বা/অথবা (або)",
              "কিন্তু/তবে (але)"
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
                "আমি চা এবং কফি পছন্দ করি।",
                "Мені подобаються чай і кава."
              ]
            ]
          }
        ],
        "titleEn": "Basic Conjunctions (এবং, বা, কিন্তু) — A1"
      },
      {
        "id": "conjunctions-advanced",
        "title": "অধীন সংযোজক (কারণ, যদি, যে) — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Підрядні сполучники вводять залежне речення причини, умови чи змісту.",
            "en": {
              "text": "Subordinating conjunctions introduce a dependent clause of cause, condition, or content."
            }
          },
          {
            "type": "markers",
            "title": "Основні підрядні сполучники",
            "items": [
              "কারণ (тому що)",
              "যদি (якщо)",
              "যে (що)",
              "যখন (коли)",
              "যদিও (хоча)"
            ],
            "en": {
              "title": "Main subordinating conjunctions"
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
                "আমি আসিনি কারণ আমি অসুস্থ ছিলাম।",
                "Я не прийшов, бо був хворий."
              ]
            ]
          }
        ],
        "titleEn": "Subordinating Conjunctions (কারণ, যদি, যে) — B1"
      },
      {
        "id": "word-order-flexibility",
        "title": "বাক্যে শব্দক্রমের নমনীয়তা — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Хоча дієслово завжди стоїть у кінці (SOV), порядок підмета й додатків доволі гнучкий і використовується для акценту.",
            "en": {
              "text": "Although the verb always comes last (SOV), the order of subject and objects is fairly flexible and used for emphasis."
            }
          },
          {
            "type": "table",
            "title": "Гнучкий порядок",
            "rows": [
              [
                "রহিম বইটা পড়ল।",
                "Рахім прочитав книгу. (нейтрально)"
              ],
              [
                "বইটা রহিম পড়ল।",
                "Саме книгу Рахім прочитав. (акцент)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "আজ আমি বাড়ি যাব।",
                "Сьогодні я піду додому."
              ]
            ]
          }
        ],
        "titleEn": "Word Order Flexibility — B1"
      },
      {
        "id": "reduplication",
        "title": "শব্দের দ্বিরুক্তি — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Повторення слова підсилює значення, виражає тривалість/розподільність або утворює приблизні пари слів.",
            "en": {
              "text": "Repeating a word intensifies meaning, expresses duration/distributiveness, or forms approximate word pairs."
            }
          },
          {
            "type": "table",
            "title": "Повтори",
            "rows": [
              [
                "আস্তে আস্তে",
                "повільно-повільно (поступово)"
              ],
              [
                "ঘরে ঘরে",
                "у кожному домі"
              ],
              [
                "বড় বড়",
                "дуже великий"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "সে আস্তে আস্তে হাঁটছে।",
                "Він іде дуже повільно."
              ]
            ]
          }
        ],
        "titleEn": "Reduplication — B1"
      },
      {
        "id": "adverbs",
        "title": "ক্রিয়াবিশেষণ — A2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Прислівники незмінні й зазвичай стоять перед дієсловом.",
            "en": {
              "text": "Adverbs are invariable and usually precede the verb."
            }
          },
          {
            "type": "table",
            "title": "Основні прислівники",
            "rows": [
              [
                "তাড়াতাড়ি",
                "швидко"
              ],
              [
                "ধীরে",
                "повільно"
              ],
              [
                "ভালোভাবে",
                "добре"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "সে তাড়াতাড়ি কথা বলে।",
                "Він говорить швидко."
              ]
            ]
          }
        ],
        "titleEn": "Adverbs — A2"
      },
      {
        "id": "quantifiers",
        "title": "পরিমাণবাচক শব্দ (অনেক, কিছু, সব) — A2",
        "emoji": "⚖️",
        "sections": [
          {
            "type": "intro",
            "text": "অনেক (багато), কিছু (трохи/дещо), সব (весь/усі) незмінні й стоять перед іменником.",
            "en": {
              "text": "অনেক (much/many), কিছু (a little/some), সব (all/every) are invariable and precede the noun."
            }
          },
          {
            "type": "table",
            "title": "অনেক / কিছু / সব",
            "rows": [
              [
                "অনেক পানি",
                "багато води"
              ],
              [
                "কিছু চিনি",
                "трохи цукру"
              ],
              [
                "সব মানুষ",
                "усі люди"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "আমার অনেক বন্ধু আছে।",
                "У мене багато друзів."
              ]
            ]
          }
        ],
        "titleEn": "Quantifiers (অনেক, কিছু, সব) — A2"
      },
      {
        "id": "question-words",
        "title": "প্রশ্নবাচক শব্দ (কোথায়, কখন, কেন) — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питальні слова, як і в гінді, стоять перед дієсловом, необов'язково на початку речення.",
            "en": {
              "text": "Question words, like in Hindi, go right before the verb, not necessarily at the sentence start."
            }
          },
          {
            "type": "markers",
            "title": "Питальні слова",
            "items": [
              "কোথায়? (де?)",
              "কখন? (коли?)",
              "কেন? (чому?)",
              "কীভাবে? (як?)"
            ],
            "en": {
              "title": "Question words"
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
                "তুমি কোথায় থাকো?",
                "Де ти живеш?"
              ]
            ]
          }
        ],
        "titleEn": "Question Words (কোথায়, কখন, কেন) — A1"
      },
      {
        "id": "existential-ache",
        "title": "আছে/নেই দিয়ে অস্তিত্ব — A1",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "আছে (є) / নেই (немає) — незмінні для однини й множини, аналог англійського «there is/are».",
            "en": {
              "text": "আছে (there is/are) / নেই (there isn't/aren't) are invariable for singular and plural, like English 'there is/are'."
            }
          },
          {
            "type": "table",
            "title": "আছে / নেই",
            "rows": [
              [
                "একটা সমস্যা আছে।",
                "Є одна проблема."
              ],
              [
                "অনেক বই আছে।",
                "Є багато книг."
              ],
              [
                "কিছু নেই।",
                "Нічого немає."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "কাছে কোনো দোকান আছে?",
                "Тут поблизу є магазин?"
              ]
            ]
          }
        ],
        "titleEn": "Existence with আছে/নেই — A1"
      },
      {
        "id": "passive-voice",
        "title": "কর্মবাচ্য — B1",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Бенгальська рідко вживає граматичний пасив — замість нього переважно використовують конструкцію з হওয়া (ставатися) чи безособову форму.",
            "en": {
              "text": "Bengali rarely uses a grammatical passive — instead it mostly uses a construction with হওয়া (to happen/become) or an impersonal form."
            }
          },
          {
            "type": "table",
            "title": "হওয়া для пасиву",
            "rows": [
              [
                "বইটি লেখা হয়েছে।",
                "Книгу написано."
              ],
              [
                "দরজা বন্ধ করা হলো।",
                "Двері зачинили."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "কাজটা করা হয়েছে।",
                "Роботу зроблено."
              ]
            ]
          }
        ],
        "titleEn": "Passive Voice — B1"
      },
      {
        "id": "infinitive-verbal-noun",
        "title": "ক্রিয়া বিশেষ্য (-তে/-আ) — A2",
        "emoji": "📝",
        "sections": [
          {
            "type": "intro",
            "text": "Форма на -তে функціонує як інфінітив («щоб зробити»), а форма на -আ — як віддієслівний іменник («роблення»).",
            "en": {
              "text": "The -তে form functions as an infinitive ('to do'), while the -আ form works as a verbal noun ('doing')."
            }
          },
          {
            "type": "table",
            "title": "-তে vs -আ",
            "rows": [
              [
                "আমি যেতে চাই।",
                "Я хочу піти. (-তে, інфінітив)"
              ],
              [
                "পড়া ভালো।",
                "Читання — це добре. (-আ, іменник)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "আমার সাঁতার কাটতে ভালো লাগে।",
                "Мені подобається плавати."
              ]
            ]
          }
        ],
        "titleEn": "The Infinitive/Verbal Noun (-তে/-আ) — A2"
      },
      {
        "id": "participles-uses",
        "title": "অসমাপিকা ক্রিয়া — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприслівник (-এ/-ে, «не завершена дія») описує послідовну дію того самого підмета, перед головним дієсловом.",
            "en": {
              "text": "The conjunctive participle (-এ/-ে, 'unfinished action') describes a sequential action of the same subject, before the main verb."
            }
          },
          {
            "type": "table",
            "title": "-এ / -ে",
            "rows": [
              [
                "খেয়ে ঘুমাল",
                "поївши, заснув"
              ],
              [
                "বলে চলে গেল",
                "сказавши, пішов"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "স্নান করে বের হলাম।",
                "Прийнявши душ, я вийшов."
              ]
            ]
          }
        ],
        "titleEn": "Conjunctive Participles — B1"
      },
      {
        "id": "genitive-of-relation",
        "title": "সম্বন্ধ পদ ও আত্মীয়তা — A2",
        "emoji": "👪",
        "sections": [
          {
            "type": "intro",
            "text": "Родинні стосунки виражають суфіксом -র/-এর, приєднаним до іменника-власника, так само, як звичайна належність.",
            "en": {
              "text": "Kinship relations are expressed with the -র/-এর suffix attached to the owner noun, just like ordinary possession."
            }
          },
          {
            "type": "table",
            "title": "Родинна належність",
            "rows": [
              [
                "আমার বাবার নাম",
                "ім'я мого батька"
              ],
              [
                "তার বোনের মেয়ে",
                "дочка його/її сестри"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "এটা আমার দাদার বাড়ি।",
                "Це дім мого дідуся."
              ]
            ]
          }
        ],
        "titleEn": "Kinship Possession — A2"
      },
      {
        "id": "vocative-particle",
        "title": "সম্বোধন পদ — A2",
        "emoji": "📣",
        "sections": [
          {
            "type": "intro",
            "text": "Звертання утворюється часткою ও (неформально) перед іменем або зміною закінчення іменника; হে вживається в поетичному/урочистому стилі.",
            "en": {
              "text": "Direct address is formed with the particle ও (informal) before a name, or by changing the noun's ending; হে is used in poetic/solemn style."
            }
          },
          {
            "type": "table",
            "title": "ও + ім'я",
            "rows": [
              [
                "ও রহিম, শোনো!",
                "Гей, Рахіме, слухай!"
              ],
              [
                "মা গো!",
                "Мамо!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "বন্ধু, তুমি কেমন আছ?",
                "Друже, як справи?"
              ]
            ]
          }
        ],
        "titleEn": "The Vocative Particle ও — A2"
      },
      {
        "id": "common-idioms",
        "title": "প্রচলিত বাগধারা — B1",
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
                "কেমন আছেন?",
                "Як справи?"
              ],
              [
                "ধন্যবাদ",
                "дякую"
              ],
              [
                "কোনো ব্যাপার না",
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
                "কেমন আছেন? — ভালো, আপনি?",
                "Як справи? — Добре, а ви?"
              ]
            ]
          }
        ],
        "titleEn": "Common Expressions — B1"
      },
      {
        "id": "negation-nuances",
        "title": "না, নি, নেই এর ব্যবহার — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "না — загальне заперечення (після дієслова); নি — заперечення завершеної минулої дії (замінює -লাম না); নেই — заперечення наявності (протилежність আছে).",
            "en": {
              "text": "না is general negation (after the verb); নি negates a completed past action (replacing -লাম না); নেই negates existence (the opposite of আছে)."
            }
          },
          {
            "type": "table",
            "title": "না / নি / নেই",
            "rows": [
              [
                "আমি জানি না।",
                "Я не знаю."
              ],
              [
                "সে আসেনি।",
                "Він не прийшов."
              ],
              [
                "এখানে কেউ নেই।",
                "Тут нікого немає."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "আমি এখনো খাইনি।",
                "Я ще не їв."
              ]
            ]
          }
        ],
        "titleEn": "Negation Nuances (না/নি/নেই) — B1"
      },
      {
        "id": "echo-words",
        "title": "দ্বিরুক্ত শব্দ — B2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Подібно до гінді, слово-відлуння повторює основне слово зі зміненим першим звуком, додаючи значення «і подібне до цього».",
            "en": {
              "text": "Similar to Hindi, an echo word repeats the main word with a changed initial sound, adding the meaning 'and such/etc.'."
            }
          },
          {
            "type": "table",
            "title": "Слова-відлуння",
            "rows": [
              [
                "চা-টা",
                "чай і таке інше"
              ],
              [
                "বই-টই",
                "книжки і таке інше"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "চা-টা খাবে?",
                "Вип'єш чаю чи щось таке?"
              ]
            ]
          }
        ],
        "titleEn": "Echo Words — B2"
      },
      {
        "id": "formal-verb-omission",
        "title": "সম্মানসূচক ক্রিয়ায় বিশেষ রূপ — B1",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Для дуже шанобливих звертань (দাদা, স্যার) дієслово вживається у формі আপনি, навіть коли явний займенник опущено.",
            "en": {
              "text": "For very respectful address (দাদা, স্যার), the verb takes the আপনি form even when the pronoun itself is omitted."
            }
          },
          {
            "type": "table",
            "title": "Шаноблива форма без займенника",
            "rows": [
              [
                "স্যার, আসুন।",
                "Пане, заходьте."
              ],
              [
                "দাদা কী করছেন?",
                "Що дідусь/старший брат зараз робить?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "আম্মা কোথায় গেছেন?",
                "Куди пішла мама?"
              ]
            ]
          }
        ],
        "titleEn": "Honorific Verb Forms Without a Pronoun — B1"
      },
      {
        "id": "possession-with-ache",
        "title": "কাছে/আছে দিয়ে অধিকার — A2",
        "emoji": "🏠",
        "sections": [
          {
            "type": "intro",
            "text": "Бенгальська не має дієслова «мати» — належність виражають [іменник-власник]-র/-এর + [предмет] + আছে.",
            "en": {
              "text": "Bengali has no verb 'to have' — possession is expressed with [owner]-র/-এর + [thing] + আছে."
            }
          },
          {
            "type": "table",
            "title": "-র + আছে",
            "rows": [
              [
                "আমার একটা বই আছে।",
                "У мене є книга."
              ],
              [
                "তার টাকা নেই।",
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
                "আমার সময় নেই।",
                "У мене немає часу."
              ]
            ]
          }
        ],
        "titleEn": "Possession with আছে — A2"
      },
      {
        "id": "weather-expressions",
        "title": "আবহাওয়া — A1",
        "emoji": "🌦️",
        "sections": [
          {
            "type": "intro",
            "text": "Погодні вирази здебільшого безособові, з হচ্ছে/আছে.",
            "en": {
              "text": "Weather expressions are mostly impersonal, using হচ্ছে/আছে."
            }
          },
          {
            "type": "table",
            "title": "Погода",
            "rows": [
              [
                "বৃষ্টি হচ্ছে।",
                "Іде дощ."
              ],
              [
                "আজ গরম।",
                "Сьогодні спекотно."
              ],
              [
                "খুব ঠান্ডা।",
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
                "শীতকালে কুয়াশা পড়ে।",
                "Взимку буває туман."
              ]
            ]
          }
        ],
        "titleEn": "Weather Expressions — A1"
      },
      {
        "id": "greetings-common-phrases",
        "title": "নমস্কার ও সাধারণ বাক্যাংশ — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "intro",
            "text": "নমস্কার/আদাব — універсальні привітання (перше переважно серед індуїстів, друге серед мусульман).",
            "en": {
              "text": "নমস্কার/আদাব are universal greetings (the first mostly among Hindus, the second among Muslims)."
            }
          },
          {
            "type": "table",
            "title": "Основні фрази",
            "rows": [
              [
                "নমস্কার / আদাব",
                "вітаю"
              ],
              [
                "ধন্যবাদ",
                "дякую"
              ],
              [
                "দুঃখিত",
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
                "নমস্কার, কেমন আছেন?",
                "Вітаю, як справи?"
              ]
            ]
          }
        ],
        "titleEn": "Greetings & Common Phrases — A1"
      },
      {
        "id": "modal-expressions",
        "title": "পারা, চাই, উচিত — A1",
        "emoji": "🧠",
        "sections": [
          {
            "type": "intro",
            "text": "পারা (могти, приєднується до -তে форми), চাই (хотіти), উচিত (треба/варто, безособове).",
            "en": {
              "text": "পারা (can, attaches to the -তে form), চাই (want), উচিত (should, impersonal)."
            }
          },
          {
            "type": "table",
            "title": "Модальні конструкції",
            "rows": [
              [
                "আমি সাঁতার কাটতে পারি।",
                "Я вмію плавати."
              ],
              [
                "আমি যেতে চাই।",
                "Я хочу піти."
              ],
              [
                "তোমার পড়া উচিত।",
                "Тобі варто вчитися."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "আমাকে যেতে হবে।",
                "Мені треба йти."
              ]
            ]
          }
        ],
        "titleEn": "Modal Expressions (পারা, চাই, উচিত) — A1"
      },
      {
        "id": "causative-verbs",
        "title": "প্রযোজক ক্রিয়া — B2",
        "emoji": "🔧",
        "sections": [
          {
            "type": "intro",
            "text": "Каузативна форма (переважно -আনো) означає «змусити зробити» чи «доручити зробити».",
            "en": {
              "text": "The causative form (usually -আনো) means 'to make someone do' or 'to have someone do'."
            }
          },
          {
            "type": "table",
            "title": "-আনো",
            "rows": [
              [
                "পড়া → পড়ানো",
                "читати → навчати"
              ],
              [
                "খাওয়া → খাওয়ানো",
                "їсти → годувати"
              ],
              [
                "শেখা → শেখানো",
                "вчитися → навчати"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "মা বাচ্চাকে খাওয়াচ্ছেন।",
                "Мама годує дитину."
              ]
            ]
          }
        ],
        "titleEn": "Causative Verbs (-আনো) — B2"
      },
      {
        "id": "adverbial-participle-time",
        "title": "সময় বোঝাতে ক্রিয়া-বিশেষণ — B1",
        "emoji": "⏱️",
        "sections": [
          {
            "type": "intro",
            "text": "Конструкція [дієприкметник] + পর (після) чи আগে (до) виражає часову послідовність дій.",
            "en": {
              "text": "The construction [participle] + পর (after) or আগে (before) expresses the time sequence of actions."
            }
          },
          {
            "type": "table",
            "title": "পর / আগে",
            "rows": [
              [
                "খাওয়ার পর",
                "після їжі"
              ],
              [
                "যাওয়ার আগে",
                "до того, як піти"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "খাওয়ার পর আমি ঘুমাব।",
                "Після їжі я спатиму."
              ]
            ]
          }
        ],
        "titleEn": "Time Sequencing (পর/আগে) — B1"
      },
      {
        "id": "stress-pronunciation",
        "title": "উচ্চারণ ও স্বরসঙ্গতি — A2",
        "emoji": "✏️",
        "sections": [
          {
            "type": "intro",
            "text": "У бенгальській наголос завжди на першому складі, а неявний голосний «о» вимовляється в кінці слова, змінюючи значення при пропуску.",
            "en": {
              "text": "In Bengali, stress always falls on the first syllable, and the inherent 'o' vowel is pronounced at word endings, changing meaning if omitted."
            }
          },
          {
            "type": "table",
            "title": "Наголос і вимова",
            "rows": [
              [
                "কলম (kolom)",
                "наголос на першому складі"
              ],
              [
                "আমি বই পড়ি।",
                "неявне «о» вимовляється в পড়ি"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "আমার নাম রহিম।",
                "Мене звати Рахім."
              ]
            ]
          }
        ],
        "titleEn": "Stress & the Inherent Vowel — A2"
      },
      {
        "id": "body-part-idioms",
        "title": "শরীরের অঙ্গ দিয়ে বাগধারা — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "intro",
            "text": "Багато ідіом побудовані на частинах тіла, наприклад মাথা (голова) для розуму/настрою.",
            "en": {
              "text": "Many idioms are built around body parts, e.g. মাথা (head) for mind/mood."
            }
          },
          {
            "type": "table",
            "title": "Ідіоми з частинами тіла",
            "rows": [
              [
                "মাথা খারাপ",
                "з'їхати з глузду (букв. голова погана)"
              ],
              [
                "হাত দেওয়া",
                "втручатися (букв. давати руку)"
              ],
              [
                "মন ভালো না",
                "поганий настрій (букв. розум не добрий)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "তার মাথা খারাপ হয়ে গেছে।",
                "Він з'їхав з глузду."
              ]
            ]
          }
        ],
        "titleEn": "Body-Part Idioms — B1"
      },
      {
        "id": "counting-money-prices",
        "title": "টাকা ও দাম গণনা — A2",
        "emoji": "💰",
        "sections": [
          {
            "type": "intro",
            "text": "Ціни вказуються числом + класифікатором টাকা (грошова одиниця, не потребує окремого класифікатора টা).",
            "en": {
              "text": "Prices are stated with the number + টাকা (the currency unit, which needs no separate classifier)."
            }
          },
          {
            "type": "table",
            "title": "দাম জিজ্ঞাসা করা",
            "rows": [
              [
                "এটার দাম কত?",
                "Скільки це коштує?"
              ],
              [
                "এটা পঞ্চাশ টাকা।",
                "Це коштує п'ятдесят таку."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "এই বইটার দাম একশো টাকা।",
                "Ця книга коштує сто така."
              ]
            ]
          }
        ],
        "titleEn": "Counting Money & Prices — A2"
      }
    ]
  },
  {
    "id": "exceptions",
    "title": "ব্যতিক্রম",
    "titleEn": "Exceptions",
    "emoji": "⚠️",
    "rules": [
      {
        "id": "irregular-verbs",
        "title": "অনিয়মিত ক্রিয়া — A2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька найуживаніших дієслів мають нерегулярні форми, які слід просто запам'ятати: হওয়া (бути/ставати), যাওয়া (йти), করা (робити), দেওয়া/নেওয়া (давати/брати).",
            "en": {
              "text": "A few of the most common verbs have irregular forms that must simply be memorized: হওয়া (to be/become), যাওয়া (to go), করা (to do), দেওয়া/নেওয়া (to give/take)."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярні форми",
            "rows": [
              [
                "যাওয়া → গেলাম (не *যাওলাম)",
                "йти → пішов"
              ],
              [
                "করা → করলাম (не *কারলাম)",
                "робити → зробив"
              ],
              [
                "দেওয়া → দিলাম / নেওয়া → নিলাম",
                "давати → дав / брати → взяв"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "সে কী করল?",
                "Що він зробив?"
              ]
            ]
          }
        ],
        "titleEn": "Irregular Verbs — A2"
      },
      {
        "id": "irregular-plurals-honorifics",
        "title": "অনিয়মিত বহুবচন ও সম্মানসূচক রূপ — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі шанобливі форми займенників і дієслів не утворюються за загальними правилами й потребують окремого запам'ятовування.",
            "en": {
              "text": "Some honorific pronoun and verb forms don't follow the general rules and must be memorized separately."
            }
          },
          {
            "type": "table",
            "title": "Особливі шанобливі форми",
            "rows": [
              [
                "তিনি (він/вона, шанобливо) → এলেন (прийшов, шанобливо)",
                "не *এলো"
              ],
              [
                "মা-বাবা",
                "батьки (вже готова форма, не *মাবাবারা)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "আমার দাদু এলেন।",
                "Мій дідусь прийшов. (шанобливо)"
              ]
            ]
          }
        ],
        "titleEn": "Irregular Honorific Forms — B1"
      },
      {
        "id": "spelling-rules",
        "title": "বানান ও যুক্তাক্ষরের নিয়ম — B1",
        "emoji": "✏️",
        "sections": [
          {
            "type": "intro",
            "text": "Складні лігатури (যুক্তাক্ষর, поєднання двох і більше приголосних в одному знаку) — одна з найважчих тем письма бенгальською, форма яких часто непередбачувана.",
            "en": {
              "text": "Conjunct consonant clusters (যুক্তাক্ষর, two or more consonants merged into one glyph) are one of the hardest parts of Bengali writing, with often unpredictable shapes."
            }
          },
          {
            "type": "table",
            "title": "Приклади лігатур",
            "rows": [
              [
                "ক্ষ (k+ṣ)",
                "у слові রক্ষা (захист)"
              ],
              [
                "ঞ্চ (ñ+c)",
                "у слові পঞ্চ (п'ять)"
              ],
              [
                "ন্ত (n+t)",
                "у слові জন্ত (тварина)"
              ]
            ]
          },
          {
            "type": "tip",
            "title": "Порада",
            "text": "Лігатури варто вивчати як окремі цілісні знаки поряд зі словом, а не намагатися вивести їхню форму із суми звичайних приголосних.",
            "en": {
              "title": "Tip",
              "text": "Conjuncts are best learned as whole units alongside the word, rather than trying to derive their shape from the sum of the ordinary consonants."
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
                "বিদ্যালয়ে যাই।",
                "Я йду до школи."
              ]
            ]
          }
        ],
        "titleEn": "Conjunct Consonant Spelling — B1"
      }
    ]
  }
];
