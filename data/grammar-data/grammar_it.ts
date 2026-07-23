// Vymova — data/grammar-data/grammar_it.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_IT: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "essere-avere",
        "title": "Essere vs Avere — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Essere (бути) та avere (мати) — два найважливіші дієслова в італійській. Вони використовуються самостійно і як допоміжні дієслова для утворення складених часів.",
            "en": {
              "text": "Essere (to be) and avere (to have) are the two most important Italian verbs. They are used on their own and as auxiliary verbs for compound tenses."
            }
          },
          {
            "type": "formula",
            "title": "Дієвідмінювання (теперішній час)",
            "rows": [
              [
                "io",
                "sono",
                "ho"
              ],
              [
                "tu",
                "sei",
                "hai"
              ],
              [
                "lui / lei",
                "è",
                "ha"
              ],
              [
                "noi",
                "siamo",
                "abbiamo"
              ],
              [
                "voi",
                "siete",
                "avete"
              ],
              [
                "loro",
                "sono",
                "hanno"
              ]
            ]
          },
          {
            "type": "note",
            "text": "Avere вживають там, де українською кажуть \"є\" про вік чи наявність: \"ho vent'anni\" — буквально \"я маю двадцять років\".",
            "en": {
              "text": "Avere is used where Ukrainian/English say \"to be\" about age: \"ho vent'anni\" literally means \"I have twenty years\"."
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
                "Sono insegnante.",
                "Я вчитель."
              ],
              [
                "Ho vent'anni.",
                "Мені двадцять років."
              ],
              [
                "Siamo a Roma.",
                "Ми в Римі."
              ],
              [
                "Lei ha un gatto.",
                "У неї є кіт."
              ]
            ]
          }
        ]
      },
      {
        "id": "gender-nouns",
        "title": "Рід іменників — A1",
        "emoji": "⚥",
        "sections": [
          {
            "type": "intro",
            "text": "Усі іменники в італійській мають рід — чоловічий або жіночий. Артикль узгоджується з родом і числом іменника.",
            "en": {
              "text": "All Italian nouns have a gender — masculine or feminine. The article agrees with the noun in gender and number."
            }
          },
          {
            "type": "table",
            "title": "Типові закінчення та артиклі",
            "rows": [
              [
                "-o → чоловічий",
                "il libro (книга)",
                "i libri (книги)"
              ],
              [
                "-a → жіночий",
                "la casa (дім)",
                "le case (дома)"
              ],
              [
                "голосна на початку слова",
                "l'amico (друг)",
                "l'amica (подруга)"
              ],
              [
                "-e → чол. або жін.",
                "il padre / la madre",
                "i padri / le madri"
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
                "Il libro è interessante.",
                "Книга цікава."
              ],
              [
                "La casa è grande.",
                "Дім великий."
              ],
              [
                "I bambini giocano.",
                "Діти грають."
              ],
              [
                "Ho una mela.",
                "У мене є яблуко."
              ]
            ]
          }
        ]
      }
    ]
  }
];
