// Vymova — data/grammar-data/grammar_el.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_EL: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "articles",
        "title": "Άρθρα ο / η / το — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У грецькій мові є три роди: чоловічий (ο), жіночий (η) і середній (το). Артикль ставиться перед іменником.",
            "en": {
              "text": "Greek has three genders: masculine (ο), feminine (η) and neuter (το). The article is placed before the noun."
            }
          },
          {
            "type": "table",
            "title": "Артиклі за родом",
            "rows": [
              [
                "ο άντρας (чоловік)",
                "чоловічий"
              ],
              [
                "η γυναίκα (жінка)",
                "жіночий"
              ],
              [
                "το παιδί (дитина)",
                "середній"
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
                "Ο άντρας είναι ψηλός.",
                "Чоловік високий."
              ],
              [
                "Το παιδί παίζει.",
                "Дитина грає."
              ]
            ]
          }
        ]
      },
      {
        "id": "verb-eimai",
        "title": "Ρήμα είμαι — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Είμαι (бути) — одне з найважливіших дієслів грецької, що відмінюється за особами.",
            "en": {
              "text": "Είμαι (to be) is one of the most important Greek verbs and conjugates by person."
            }
          },
          {
            "type": "formula",
            "title": "είμαι — теперішній час",
            "rows": [
              [
                "εγώ",
                "είμαι",
                "я є"
              ],
              [
                "εσύ",
                "είσαι",
                "ти є"
              ],
              [
                "αυτός / αυτή / αυτό",
                "είναι",
                "він/вона/воно є"
              ],
              [
                "εμείς",
                "είμαστε",
                "ми є"
              ],
              [
                "εσείς",
                "είστε",
                "ви є"
              ],
              [
                "αυτοί / αυτές",
                "είναι",
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
                "Είμαι δάσκαλος.",
                "Я вчитель."
              ],
              [
                "Είναι χαρούμενη.",
                "Вона щаслива."
              ]
            ]
          }
        ]
      },
      {
        "id": "plural",
        "title": "Πληθυντικός — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється зміною закінчення іменника та артикля залежно від роду.",
            "en": {
              "text": "The plural is formed by changing the noun ending and the article depending on gender."
            }
          },
          {
            "type": "table",
            "title": "Однина → множина",
            "rows": [
              [
                "ο άντρας → οι άντρες",
                "чоловік → чоловіки"
              ],
              [
                "η γυναίκα → οι γυναίκες",
                "жінка → жінки"
              ],
              [
                "το παιδί → τα παιδιά",
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
                "Τα παιδιά παίζουν.",
                "Діти грають."
              ],
              [
                "Οι γυναίκες μιλούν.",
                "Жінки розмовляють."
              ]
            ]
          }
        ]
      },
      {
        "id": "pronouns",
        "title": "Προσωπικές αντωνυμίες — A1",
        "emoji": "🙋",
        "sections": [
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "εγώ",
                "я"
              ],
              [
                "εσύ",
                "ти"
              ],
              [
                "αυτός / αυτή / αυτό",
                "він / вона / воно"
              ],
              [
                "εμείς",
                "ми"
              ],
              [
                "εσείς",
                "ви"
              ],
              [
                "αυτοί / αυτές",
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
                "Εγώ είμαι φοιτητής.",
                "Я студент."
              ],
              [
                "Εμείς είμαστε στο σπίτι.",
                "Ми вдома."
              ]
            ]
          }
        ]
      },
      {
        "id": "verb-echo",
        "title": "Ρήμα έχω — A1",
        "emoji": "✋",
        "sections": [
          {
            "type": "intro",
            "text": "Έχω (мати) — друге найважливіше дієслово грецької для вираження володіння.",
            "en": {
              "text": "Έχω (to have) is the second most important Greek verb, used to express possession."
            }
          },
          {
            "type": "formula",
            "title": "έχω — теперішній час",
            "rows": [
              [
                "εγώ",
                "έχω",
                "я маю"
              ],
              [
                "εσύ",
                "έχεις",
                "ти маєш"
              ],
              [
                "αυτός / αυτή / αυτό",
                "έχει",
                "він/вона/воно має"
              ],
              [
                "εμείς",
                "έχουμε",
                "ми маємо"
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
                "Έχω ένα αυτοκίνητο.",
                "У мене є машина."
              ],
              [
                "Έχει δύο παιδιά.",
                "У нього/неї двоє дітей."
              ]
            ]
          }
        ]
      }
    ]
  }
];
