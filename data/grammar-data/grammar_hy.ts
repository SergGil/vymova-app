// Vymova — data/grammar-data/grammar_hy.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_HY: GrammarCategory[] = [
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
            "text": "Вірменська не має граматичного роду — նա означає і \"він\", і \"вона\".",
            "en": {
              "text": "Armenian has no grammatical gender — նա means both \"he\" and \"she\"."
            }
          },
          {
            "type": "table",
            "title": "Базові займенники",
            "rows": [
              [
                "ես (yes)",
                "я"
              ],
              [
                "դու (du)",
                "ти"
              ],
              [
                "նա (na)",
                "він / вона"
              ],
              [
                "մենք (menk')",
                "ми"
              ],
              [
                "նրանք (nrank')",
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
                "Ես ուսուցիչ եմ։",
                "Я вчитель."
              ]
            ]
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      },
      {
        "id": "to-be",
        "title": "Зв'язка \"եմ/ես/է\" — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово-зв'язка \"бути\" ставиться в кінці речення, після присудка.",
            "en": {
              "text": "The \"to be\" linking verb goes at the end of the sentence, after the predicate."
            }
          },
          {
            "type": "formula",
            "title": "Присудок + եմ/ես/է",
            "rows": [
              [
                "Ես ուսուցիչ եմ։",
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
                "Նա բժիշկ է։",
                "Він/вона лікар."
              ]
            ]
          }
        ],
        "titleEn": "The Copula Եմ/Ես/Է — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення префіксом \"չ-\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "У теперішньому часі заперечення утворюється префіксом չ- перед дієсловом.",
            "en": {
              "text": "In the present tense, negation is formed with the prefix չ- before the verb."
            }
          },
          {
            "type": "formula",
            "title": "չ- + дієслово",
            "rows": [
              [
                "Չգիտեմ։",
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
                "Նա չեկավ։",
                "Він/вона не прийшов(-ла)."
              ]
            ]
          }
        ],
        "titleEn": "Negation with the Prefix Չ- — A1"
      },
      {
        "id": "questions",
        "title": "Питання — наголос на складі — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "У питаннях так/ні наголос переноситься на склад слова, яке уточнюють — на письмі це позначають знаком над голосною.",
            "en": {
              "text": "In yes/no questions, stress shifts to the syllable of the word being questioned — in writing this is marked with a diacritic over the vowel."
            }
          },
          {
            "type": "formula",
            "title": "Твердження зі зміщеним наголосом?",
            "rows": [
              [
                "Դու հոգնա՞ծ ես։",
                "(Ти втомлений?)"
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
                "Ժամանա՞կ ունես։",
                "У тебе є час?"
              ]
            ]
          }
        ],
        "titleEn": "Questions — Stress Shift — A1"
      },
      {
        "id": "no-gender",
        "title": "Без граматичного роду й прийменників — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Вірменська не має граматичного роду взагалі та використовує післяйменники/відмінкові закінчення замість прийменників перед словом.",
            "en": {
              "text": "Armenian has no grammatical gender at all, and uses postpositions/case endings instead of prepositions before the word."
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
                "Սեղանի վրա",
                "На столі (վրա = \"на\", стоїть після слова)."
              ]
            ]
          }
        ],
        "titleEn": "No Grammatical Gender or Prepositions — A1"
      }
    ]
  }
];
