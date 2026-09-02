// Vymova — data/grammar-data/grammar_pl.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_PL: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "gender",
        "title": "Rodzaj rzeczowników — A1",
        "emoji": "👫",
        "sections": [
          {
            "type": "intro",
            "text": "Польські іменники мають один із трьох родів: чоловічий, жіночий або середній. Рід впливає на форму прикметників і дієслів.",
            "en": {
              "text": "Polish nouns have one of three genders: masculine, feminine or neuter. The gender affects the form of adjectives and verbs."
            }
          },
          {
            "type": "table",
            "title": "Приклади за родом",
            "rows": [
              [
                "чоловічий",
                "stół (стіл)",
                "duży stół (великий стіл)"
              ],
              [
                "жіночий",
                "kobieta (жінка)",
                "miła kobieta (приємна жінка)"
              ],
              [
                "середній",
                "dziecko (дитина)",
                "małe dziecko (маленька дитина)"
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
                "To jest duży stół.",
                "Це великий стіл."
              ],
              [
                "Ona jest miłą kobietą.",
                "Вона приємна жінка."
              ]
            ]
          }
        ],
        "titleEn": "Noun Gender — A1"
      },
      {
        "id": "verb-byc",
        "title": "Czasownik \"być\" — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Czasownik \"być\" (бути) — один з найважливіших дієслів польської мови, що відмінюється за особами.",
            "en": {
              "text": "The verb \"być\" (to be) is one of the most important Polish verbs and conjugates by person."
            }
          },
          {
            "type": "formula",
            "title": "\"być\" — теперішній час",
            "rows": [
              [
                "ja",
                "jestem",
                "я є"
              ],
              [
                "ty",
                "jesteś",
                "ти є"
              ],
              [
                "on / ona / ono",
                "jest",
                "він/вона/воно є"
              ],
              [
                "my",
                "jesteśmy",
                "ми є"
              ],
              [
                "wy",
                "jesteście",
                "ви є"
              ],
              [
                "oni / one",
                "są",
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
                "Jestem nauczycielem.",
                "Я вчитель."
              ],
              [
                "Ona jest szczęśliwa.",
                "Вона щаслива."
              ]
            ]
          }
        ],
        "titleEn": "The Verb Być (To Be) — A1"
      },
      {
        "id": "plural",
        "title": "Liczba mnoga — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина в польській утворюється зміною закінчення іменника, залежно від роду і типу слова.",
            "en": {
              "text": "The plural in Polish is formed by changing the noun ending, depending on gender and word type."
            }
          },
          {
            "type": "table",
            "title": "Однина → множина",
            "rows": [
              [
                "stół (стіл)",
                "stoły (столи)"
              ],
              [
                "kobieta (жінка)",
                "kobiety (жінки)"
              ],
              [
                "dziecko (дитина)",
                "dzieci (діти)"
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
                "Mam dwa stoły.",
                "У мене два столи."
              ],
              [
                "Dzieci grają w parku.",
                "Діти грають у парку."
              ]
            ]
          }
        ],
        "titleEn": "Plural Nouns — A1"
      },
      {
        "id": "pronouns",
        "title": "Zaimki osobowe — A1",
        "emoji": "🙋",
        "sections": [
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "ja",
                "я"
              ],
              [
                "ty",
                "ти"
              ],
              [
                "on / ona / ono",
                "він / вона / воно"
              ],
              [
                "my",
                "ми"
              ],
              [
                "wy",
                "ви"
              ],
              [
                "oni / one",
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
                "Ja jestem studentem.",
                "Я студент."
              ],
              [
                "My jesteśmy w domu.",
                "Ми вдома."
              ]
            ]
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      },
      {
        "id": "cases-intro",
        "title": "Przypadki — wprowadzenie — A2",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Польська має 7 відмінків. Найважливіші для початку — це nominativ (хто/що) та akuzativ (кого/що, об'єкт дії).",
            "en": {
              "text": "Polish has 7 grammatical cases. The most important ones to start with are nominative (who/what) and accusative (whom/what — the object of an action)."
            }
          },
          {
            "type": "table",
            "title": "Nominativ → Akuzativ",
            "rows": [
              [
                "kot (кіт)",
                "Widzę kota. (Я бачу кота.)"
              ],
              [
                "książka (книга)",
                "Czytam książkę. (Я читаю книгу.)"
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
                "Mam psa.",
                "У мене є пес."
              ],
              [
                "Lubię kawę.",
                "Мені подобається кава."
              ]
            ]
          }
        ],
        "titleEn": "Introduction to the Cases — A2"
      }
    ]
  }
];
