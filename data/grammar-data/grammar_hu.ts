// Vymova — data/grammar-data/grammar_hu.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_HU: GrammarCategory[] = [
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
            "text": "Угорські дієслова показують особу через закінчення, тому займенник часто опускають — його вживають лише для наголосу.",
            "en": {
              "text": "Hungarian verbs mark person through their ending, so the pronoun is often dropped — it is used mainly for emphasis."
            }
          },
          {
            "type": "table",
            "title": "Базові займенники",
            "rows": [
              [
                "én",
                "я"
              ],
              [
                "te",
                "ти"
              ],
              [
                "ő",
                "він / вона"
              ],
              [
                "mi",
                "ми"
              ],
              [
                "ők",
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
                "Én tanár vagyok.",
                "Я вчитель."
              ]
            ]
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      },
      {
        "id": "to-be",
        "title": "Дієслово \"van\" (бути) — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "З іменником-присудком \"van/vagyok\" вживається так само, як в українській, але з прикметником у 3-й особі теперішнього часу зв'язка ОПУСКАЄТЬСЯ.",
            "en": {
              "text": "With a noun predicate, \"van/vagyok\" behaves like Ukrainian \"бути\", but with an adjective in the 3rd person present tense the copula is DROPPED."
            }
          },
          {
            "type": "formula",
            "title": "Підмет + vagyok/van + присудок",
            "rows": [
              [
                "Én tanár vagyok.",
                "(Я вчитель.)"
              ],
              [
                "Ő fáradt.",
                "(Він втомлений — без \"van\"!)"
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
                "Te orvos vagy.",
                "Ти лікар."
              ]
            ]
          }
        ],
        "titleEn": "The Verb Van (To Be) — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення \"nem\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечна частка nem ставиться безпосередньо перед словом, яке заперечують.",
            "en": {
              "text": "The negative particle nem goes directly before the word being negated."
            }
          },
          {
            "type": "formula",
            "title": "nem + слово",
            "rows": [
              [
                "Nem tudom.",
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
                "Ő nem fáradt.",
                "Він не втомлений."
              ]
            ]
          }
        ],
        "titleEn": "Negation with Nem — A1"
      },
      {
        "id": "questions",
        "title": "Питання — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні здебільшого утворюються висхідною інтонацією; у формальнішому мовленні можлива питальна частка -e.",
            "en": {
              "text": "Yes/no questions are mostly formed with rising intonation; more formal speech may add the question particle -e."
            }
          },
          {
            "type": "formula",
            "title": "Твердження + висхідна інтонація?",
            "rows": [
              [
                "Fáradt vagy?",
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
                "Van időd?",
                "У тебе є час?"
              ]
            ]
          }
        ],
        "titleEn": "Questions — A1"
      },
      {
        "id": "case-suffixes",
        "title": "Відмінкові суфікси замість прийменників — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Замість прийменників угорська приєднує відмінкові суфікси до кінця слова, вибір голосної в яких залежить від гармонії голосних.",
            "en": {
              "text": "Instead of prepositions, Hungarian attaches case suffixes to the end of the word; the vowel choice follows vowel harmony."
            }
          },
          {
            "type": "table",
            "title": "Приклад: \"у/в\" (-ban/-ben)",
            "rows": [
              [
                "ház → házban",
                "дім → у домі"
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
                "A könyv az asztalon van.",
                "Книга на столі (-on = \"на\")."
              ]
            ]
          }
        ],
        "titleEn": "Case Suffixes Instead of Prepositions — A1"
      }
    ]
  }
];
