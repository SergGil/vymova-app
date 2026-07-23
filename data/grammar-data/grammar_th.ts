// Vymova — data/grammar-data/grammar_th.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_TH: GrammarCategory[] = [
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
            "text": "Займенник \"я\" в тайській залежить від статі мовця: ผม використовують чоловіки, ดิฉัน — жінки.",
            "en": {
              "text": "The pronoun \"I\" in Thai depends on the speaker's gender: ผม is used by men, ดิฉัน by women."
            }
          },
          {
            "type": "table",
            "title": "Базові займенники",
            "rows": [
              [
                "ผม / ดิฉัน",
                "я (чоловік / жінка)"
              ],
              [
                "คุณ",
                "ти / ви"
              ],
              [
                "เขา",
                "він / вона"
              ],
              [
                "เรา",
                "ми"
              ],
              [
                "พวกเขา",
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
                "ผมเป็นนักเรียน.",
                "Я студент (чоловік)."
              ]
            ]
          }
        ]
      },
      {
        "id": "to-be",
        "title": "Дієслово \"เป็น\" (бути) — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "เป็น використовують для ототожнення (професія, національність), а อยู่ — для позначення місцезнаходження.",
            "en": {
              "text": "เป็น is used for identity statements (profession, nationality), while อยู่ marks location."
            }
          },
          {
            "type": "formula",
            "title": "Підмет + เป็น + іменник",
            "rows": [
              [
                "ผมเป็นนักเรียน.",
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
                "เขาอยู่ที่บ้าน.",
                "Він/вона вдома (อยู่ для місця)."
              ]
            ]
          }
        ]
      },
      {
        "id": "negation",
        "title": "Заперечення \"ไม่\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечна частка ไม่ (mâi) ставиться перед дієсловом чи прикметником — тайські дієслова взагалі не відмінюються.",
            "en": {
              "text": "The negative particle ไม่ (mâi) goes before the verb or adjective — Thai verbs never conjugate at all."
            }
          },
          {
            "type": "formula",
            "title": "ไม่ + дієслово/прикметник",
            "rows": [
              [
                "ผมไม่รู้.",
                "(Я не знаю.)"
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
                "อาหารนี้ไม่อร่อย.",
                "Ця їжа не смачна."
              ]
            ]
          }
        ]
      },
      {
        "id": "questions",
        "title": "Питання з \"ไหม\" — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні утворюються додаванням частки ไหม в кінець стверджувального речення.",
            "en": {
              "text": "Yes/no questions are formed by adding the particle ไหม at the end of the statement."
            }
          },
          {
            "type": "formula",
            "title": "Твердження + ไหม?",
            "rows": [
              [
                "คุณหิวไหม?",
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
                "คุณเหนื่อยไหม?",
                "Ти втомлений?"
              ]
            ]
          }
        ]
      },
      {
        "id": "no-conjugation",
        "title": "Без відмінювання й часу — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Тайські дієслова мають лише одну форму — час, тривалість чи завершеність дії передають окремими словами-маркерами, а не закінченнями.",
            "en": {
              "text": "Thai verbs have just one form — tense, duration, or completion is shown with separate marker words, not endings."
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
                "เขากินข้าวแล้ว.",
                "Він/вона вже поїв(-ла) (แล้ว = маркер завершеної дії)."
              ]
            ]
          }
        ]
      }
    ]
  }
];
