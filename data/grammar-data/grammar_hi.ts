// Vymova — data/grammar-data/grammar_hi.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_HI: GrammarCategory[] = [
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
            "text": "Займенник другої особи вибирається за ступенем ввічливості: तुम — до рівних/молодших, आप — ввічливо, до старших чи незнайомих.",
            "en": {
              "text": "The second-person pronoun depends on politeness level: तुम for peers/juniors, आप as the polite/formal form for elders or strangers."
            }
          },
          {
            "type": "table",
            "title": "Базові займенники",
            "rows": [
              [
                "मैं (maiṅ)",
                "я"
              ],
              [
                "तुम / आप",
                "ти / ви (ввічливо)"
              ],
              [
                "वह (vah)",
                "він / вона / воно"
              ],
              [
                "हम (ham)",
                "ми"
              ],
              [
                "वे (ve)",
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
                "मैं ठीक हूँ।",
                "Я в порядку."
              ],
              [
                "आप कैसे हैं?",
                "Як ви? (ввічливо)"
              ]
            ]
          }
        ]
      },
      {
        "id": "to-be",
        "title": "Дієслово \"होना\" (бути) — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Гінді має порядок слів SOV — дієслово-зв'язка \"होना\" ставиться в кінці речення, а не після підмета, як в українській.",
            "en": {
              "text": "Hindi uses SOV word order — the linking verb \"होना\" (to be) goes at the end of the sentence, not right after the subject."
            }
          },
          {
            "type": "formula",
            "title": "Підмет + присудок + है/हैं",
            "rows": [
              [
                "यह किताब है।",
                "(Це книга.)"
              ],
              [
                "वे अच्छे हैं।",
                "(Вони хороші.)"
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
                "मैं छात्र हूँ।",
                "Я студент."
              ],
              [
                "वह डॉक्टर है।",
                "Він/вона лікар."
              ]
            ]
          }
        ]
      },
      {
        "id": "negation",
        "title": "Заперечення \"नहीं\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечна частка नहीं (nahīṅ) ставиться перед дієсловом, зберігаючи порядок слів SOV.",
            "en": {
              "text": "The negative particle नहीं (nahīṅ) goes right before the verb, keeping the SOV word order."
            }
          },
          {
            "type": "formula",
            "title": "Підмет + додаток + नहीं + дієслово",
            "rows": [
              [
                "मुझे पता नहीं है।",
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
                "मुझे पता नहीं है।",
                "Я не знаю."
              ],
              [
                "वह नहीं आया।",
                "Він не прийшов."
              ]
            ]
          }
        ]
      },
      {
        "id": "questions",
        "title": "Питання \"क्या\" — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання типу \"так/ні\" утворюються додаванням частки क्या (kyā) на початок стверджувального речення — порядок слів не змінюється.",
            "en": {
              "text": "Yes/no questions are formed by adding the particle क्या (kyā) at the start of the statement — word order stays unchanged."
            }
          },
          {
            "type": "formula",
            "title": "क्या + твердження?",
            "rows": [
              [
                "क्या आप ठीक हैं?",
                "(Ви в порядку?)"
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
                "क्या तुम आ रहे हो?",
                "Ти йдеш?"
              ],
              [
                "क्या यह सही है?",
                "Це правильно?"
              ]
            ]
          }
        ]
      },
      {
        "id": "word-order",
        "title": "Порядок слів SOV — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів у гінді — підмет-додаток-присудок (SOV), на відміну від українського/англійського SVO. Дієслово завжди в кінці речення.",
            "en": {
              "text": "Hindi's basic word order is Subject-Object-Verb (SOV), unlike English/Ukrainian SVO — the verb always comes last."
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
                "मैं किताब पढ़ता हूँ।",
                "Я читаю книгу (букв. \"я книгу читаю\")."
              ],
              [
                "वह चाय पीती है।",
                "Вона п'є чай (букв. \"вона чай п'є\")."
              ]
            ]
          }
        ]
      }
    ]
  }
];
