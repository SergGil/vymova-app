// Vymova — data/grammar-data/grammar_sw.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_SW: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "pronouns",
        "title": "Суб'єктні префікси — A1",
        "emoji": "🙋",
        "sections": [
          {
            "type": "intro",
            "text": "У суахілі особа підмета часто позначається префіксом прямо на дієслові, а не окремим займенником.",
            "en": {
              "text": "In Swahili the subject person is often marked with a prefix directly on the verb, rather than a separate pronoun."
            }
          },
          {
            "type": "table",
            "title": "Суб'єктні префікси дієслова",
            "rows": [
              [
                "ni-",
                "я"
              ],
              [
                "u-",
                "ти"
              ],
              [
                "a-",
                "він / вона"
              ],
              [
                "tu-",
                "ми"
              ],
              [
                "wa-",
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
                "Ninasoma.",
                "Я читаю (ni- + -na- (теп.час) + -soma)."
              ]
            ]
          }
        ]
      },
      {
        "id": "to-be",
        "title": "Зв'язка \"ni\" — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Для ототожнення (\"я — вчитель\") використовують коротке слово ni між підметом та іменником-присудком.",
            "en": {
              "text": "For identity statements (\"I am a teacher\"), use the short word ni between the subject and the predicate noun."
            }
          },
          {
            "type": "formula",
            "title": "Підмет + ni + іменник",
            "rows": [
              [
                "Mimi ni mwalimu.",
                "(Я вчитель.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Yeye ni daktari.",
                "Він/вона лікар."
              ]
            ]
          }
        ]
      },
      {
        "id": "negation",
        "title": "Заперечення \"si\" / \"ha-\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Для заперечення \"бути\" використовують si, а для інших дієслів — префікс ha- перед суб'єктним префіксом.",
            "en": {
              "text": "To negate \"to be\" use si, while other verbs are negated with the prefix ha- before the subject prefix."
            }
          },
          {
            "type": "formula",
            "title": "ha- + suб'єктний префікс + дієслово",
            "rows": [
              [
                "Sijui.",
                "(Я не знаю, si- + jui.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mimi si mwalimu.",
                "Я не вчитель."
              ]
            ]
          }
        ]
      },
      {
        "id": "questions",
        "title": "Питання з \"Je\" — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні можна утворити словом Je на початку речення або просто висхідною інтонацією.",
            "en": {
              "text": "Yes/no questions can be formed with Je at the start of the sentence, or simply with rising intonation."
            }
          },
          {
            "type": "formula",
            "title": "Je, + твердження?",
            "rows": [
              [
                "Je, wewe ni mwanafunzi?",
                "(Ти студент?)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Una njaa?",
                "Ти голодний? (без Je)"
              ]
            ]
          }
        ]
      },
      {
        "id": "noun-classes",
        "title": "Класи іменників — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники в суахілі належать до класів з характерними префіксами (наприклад, m-/wa- для людей), від яких залежить множина й узгодження прикметників.",
            "en": {
              "text": "Swahili nouns belong to classes with characteristic prefixes (e.g. m-/wa- for people), which determine the plural and adjective agreement."
            }
          },
          {
            "type": "table",
            "title": "Приклад класу людей (m-/wa-)",
            "rows": [
              [
                "mtu → watu",
                "людина → люди"
              ],
              [
                "mwalimu → walimu",
                "вчитель → вчителі"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Watu wengi wanafanya kazi.",
                "Багато людей працюють."
              ]
            ]
          }
        ]
      }
    ]
  }
];
