// Vymova — data/grammar-data/grammar_nl.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_NL: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "articles",
        "title": "Lidwoorden de / het — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У нідерландській є два артиклі: \"de\" (для більшості іменників) і \"het\" (для деяких іменників середнього роду). Неозначений артикль для обох — \"een\".",
            "en": {
              "text": "Dutch has two articles: \"de\" (for most nouns) and \"het\" (for some neuter nouns). The indefinite article for both is \"een\"."
            }
          },
          {
            "type": "table",
            "title": "Приклади з артиклями",
            "rows": [
              [
                "de man (чоловік)",
                "een man (чоловік, неозн.)"
              ],
              [
                "het huis (дім)",
                "een huis (дім, неозн.)"
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
                "De man is groot.",
                "Чоловік великий."
              ],
              [
                "Het huis is mooi.",
                "Дім гарний."
              ]
            ]
          }
        ],
        "titleEn": "Articles De / Het — A1"
      },
      {
        "id": "verb-zijn",
        "title": "Werkwoord \"zijn\" — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "\"Zijn\" (бути) — одне з найважливіших дієслів нідерландської, що відмінюється за особами.",
            "en": {
              "text": "\"Zijn\" (to be) is one of the most important Dutch verbs and conjugates by person."
            }
          },
          {
            "type": "formula",
            "title": "\"zijn\" — теперішній час",
            "rows": [
              [
                "ik",
                "ben",
                "я є"
              ],
              [
                "jij / je",
                "bent",
                "ти є"
              ],
              [
                "hij / zij / het",
                "is",
                "він/вона/воно є"
              ],
              [
                "wij / we",
                "zijn",
                "ми є"
              ],
              [
                "jullie",
                "zijn",
                "ви є"
              ],
              [
                "zij",
                "zijn",
                "вони є"
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
                "Ik ben leraar.",
                "Я вчитель."
              ],
              [
                "Zij is blij.",
                "Вона щаслива."
              ]
            ]
          }
        ],
        "titleEn": "The Verb Zijn (To Be) — A1"
      },
      {
        "id": "plural",
        "title": "Meervoud — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина в нідерландській зазвичай утворюється закінченням -en, рідше -s.",
            "en": {
              "text": "The plural in Dutch is usually formed with the ending -en, less often -s."
            }
          },
          {
            "type": "table",
            "title": "Однина → множина",
            "rows": [
              [
                "huis (дім)",
                "huizen (дома)"
              ],
              [
                "boek (книга)",
                "boeken (книги)"
              ],
              [
                "tafel (стіл)",
                "tafels (столи)"
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
                "Ik heb twee boeken.",
                "У мене є дві книги."
              ],
              [
                "De kinderen spelen buiten.",
                "Діти грають на вулиці."
              ]
            ]
          }
        ],
        "titleEn": "Plural Nouns — A1"
      },
      {
        "id": "pronouns",
        "title": "Persoonlijke voornaamwoorden — A1",
        "emoji": "🙋",
        "sections": [
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "ik",
                "я"
              ],
              [
                "jij / je",
                "ти"
              ],
              [
                "hij / zij / het",
                "він / вона / воно"
              ],
              [
                "wij / we",
                "ми"
              ],
              [
                "jullie",
                "ви"
              ],
              [
                "zij",
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
                "Ik ben student.",
                "Я студент."
              ],
              [
                "Wij zijn thuis.",
                "Ми вдома."
              ]
            ]
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      },
      {
        "id": "present-tense",
        "title": "Tegenwoordige tijd — A1",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній час правильних дієслів утворюється відніманням -en від інфінітива (основа) і додаванням особового закінчення.",
            "en": {
              "text": "The present tense of regular verbs is formed by removing -en from the infinitive (stem) and adding a personal ending."
            }
          },
          {
            "type": "formula",
            "title": "werken (працювати) — теперішній час",
            "rows": [
              [
                "ik",
                "werk",
                "я працюю"
              ],
              [
                "jij / je",
                "werkt",
                "ти працюєш"
              ],
              [
                "hij / zij / het",
                "werkt",
                "він/вона працює"
              ],
              [
                "wij / we",
                "werken",
                "ми працюємо"
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
                "Ik werk in Amsterdam.",
                "Я працюю в Амстердамі."
              ],
              [
                "Zij woont in Utrecht.",
                "Вона живе в Утрехті."
              ]
            ]
          }
        ],
        "titleEn": "Present Tense — A1"
      }
    ]
  }
];
