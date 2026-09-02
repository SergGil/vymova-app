// Vymova — data/grammar-data/grammar_id.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_ID: GrammarCategory[] = [
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
            "text": "Індонезійські дієслова не змінюються за особами чи числом — займенник завжди залишається головним показником, хто виконує дію.",
            "en": {
              "text": "Indonesian verbs never change for person or number — the pronoun is always the main marker of who does the action."
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
                "kamu / Anda",
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
              ],
              [
                "Anda dari mana?",
                "Звідки ви?"
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
            "text": "Індонезійська не має дієслова \"бути\" перед іменником чи прикметником — присудок ставиться відразу після підмета.",
            "en": {
              "text": "Indonesian has no \"to be\" verb before a noun or adjective — the predicate simply follows the subject directly."
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
                "Rumah ini besar.",
                "Цей будинок великий."
              ],
              [
                "Dia lapar.",
                "Він/вона голодний(-а)."
              ]
            ]
          }
        ],
        "titleEn": "Zero Copula — A1"
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
                "Saya tidak tahu.",
                "(Я не знаю.)"
              ],
              [
                "Ini bukan buku saya.",
                "(Це не моя книга.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Dia tidak lapar.",
                "Він/вона не голодний(-а)."
              ]
            ]
          }
        ],
        "titleEn": "Negation with Tidak / Bukan — A1"
      },
      {
        "id": "questions",
        "title": "Питання \"apakah\" — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні можна утворити часткою apakah на початку речення або просто інтонацією, без зміни порядку слів.",
            "en": {
              "text": "Yes/no questions can be formed with apakah at the start of the sentence, or just by rising intonation — word order never changes."
            }
          },
          {
            "type": "formula",
            "title": "Apakah + твердження?",
            "rows": [
              [
                "Apakah kamu lapar?",
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
                "Kamu lelah?",
                "Ти втомлений? (без apakah, лише інтонація)"
              ]
            ]
          }
        ],
        "titleEn": "Questions with Apakah — A1"
      },
      {
        "id": "reduplication",
        "title": "Множина через повтор — A1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Замість закінчень множина в індонезійській часто утворюється повторенням усього слова.",
            "en": {
              "text": "Instead of endings, the plural in Indonesian is often formed by reduplicating the whole word."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "buku → buku-buku",
                "книга → книги"
              ],
              [
                "anak → anak-anak",
                "дитина → діти"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Anak-anak bermain.",
                "Діти граються."
              ]
            ]
          }
        ],
        "titleEn": "Plural via Reduplication — A1"
      }
    ]
  }
];
