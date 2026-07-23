// Vymova — data/grammar-data/grammar_ms.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_MS: GrammarCategory[] = [
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
            "text": "Малайські дієслова не змінюються за особами чи числом — займенник лишається головним показником, хто виконує дію (як і в спорідненій індонезійській).",
            "en": {
              "text": "Malay verbs never change for person or number — the pronoun stays the main marker of who acts (as in related Indonesian)."
            }
          },
          {
            "type": "table",
            "title": "Базові займенники",
            "rows": [
              [
                "saya / aku",
                "я (ввічливо / неформально)"
              ],
              [
                "awak / anda",
                "ти / ви (ввічливо)"
              ],
              [
                "dia",
                "він / вона"
              ],
              [
                "kami / kita",
                "ми (без співрозмовника / з ним)"
              ],
              [
                "mereka",
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
                "Saya guru.",
                "Я вчитель."
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
            "text": "Малайська не має дієслова \"бути\" перед іменником чи прикметником — присудок ставиться відразу після підмета.",
            "en": {
              "text": "Malay has no \"to be\" verb before a noun or adjective — the predicate simply follows the subject directly."
            }
          },
          {
            "type": "formula",
            "title": "Підмет + присудок",
            "rows": [
              [
                "Saya guru.",
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
                "Dia lapar.",
                "Він/вона голодний(-а)."
              ]
            ]
          }
        ]
      },
      {
        "id": "negation",
        "title": "Заперечення \"tidak\" / \"bukan\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Для заперечення дієслів і прикметників використовують tidak, а для заперечення іменників — bukan.",
            "en": {
              "text": "Verbs and adjectives are negated with tidak, while nouns are negated with bukan."
            }
          },
          {
            "type": "formula",
            "title": "tidak / bukan + слово",
            "rows": [
              [
                "Saya tidak faham.",
                "(Я не розумію.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ini bukan buku saya.",
                "Це не моя книга."
              ]
            ]
          }
        ]
      },
      {
        "id": "questions",
        "title": "Питання — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні найчастіше утворюються висхідною інтонацією або суфіксом -kah, доданим до ключового слова.",
            "en": {
              "text": "Yes/no questions are most often formed with rising intonation, or with the suffix -kah attached to the key word."
            }
          },
          {
            "type": "formula",
            "title": "Твердження + висхідна інтонація?",
            "rows": [
              [
                "Awak lapar?",
                "(Ти голодний?)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Betulkah itu?",
                "Це справді так?"
              ]
            ]
          }
        ]
      },
      {
        "id": "reduplication",
        "title": "Множина через повтор — A1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Замість закінчень множина в малайській часто утворюється повторенням усього слова.",
            "en": {
              "text": "Instead of endings, the plural in Malay is often formed by reduplicating the whole word."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "buku → buku-buku",
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
                "Kanak-kanak bermain.",
                "Діти граються."
              ]
            ]
          }
        ]
      }
    ]
  }
];
