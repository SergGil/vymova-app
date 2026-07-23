// Vymova — data/grammar-data/grammar_pt.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_PT: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "ser-estar",
        "title": "Ser vs Estar — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "У португальській є два дієслова \"бути\" — ser та estar. Ser використовують для постійних характеристик, estar — для тимчасових станів і місцезнаходження.",
            "en": {
              "text": "Portuguese has two verbs for \"to be\" — ser and estar. Ser is for permanent characteristics, estar is for temporary states and location."
            }
          },
          {
            "type": "formula",
            "title": "Дієвідмінювання (теперішній час)",
            "rows": [
              [
                "eu",
                "sou",
                "estou"
              ],
              [
                "tu",
                "és",
                "estás"
              ],
              [
                "ele / ela",
                "é",
                "está"
              ],
              [
                "nós",
                "somos",
                "estamos"
              ],
              [
                "vós",
                "sois",
                "estais"
              ],
              [
                "eles / elas",
                "são",
                "estão"
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
                "Sou professor.",
                "Я (є) вчитель. (постійна риса)"
              ],
              [
                "Estou cansado.",
                "Я втомлений. (тимчасовий стан)"
              ],
              [
                "Lisboa está em Portugal.",
                "Лісабон у Португалії. (місце)"
              ],
              [
                "Ela é alta.",
                "Вона висока. (характеристика)"
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
            "text": "Усі іменники в португальській мають рід — чоловічий або жіночий. Артикль узгоджується з родом і числом іменника.",
            "en": {
              "text": "All Portuguese nouns have a gender — masculine or feminine. The article agrees with the noun in gender and number."
            }
          },
          {
            "type": "table",
            "title": "Типові закінчення та артиклі",
            "rows": [
              [
                "-o → чоловічий",
                "o livro (книга)",
                "os livros (книги)"
              ],
              [
                "-a → жіночий",
                "a casa (дім)",
                "as casas (дома)"
              ],
              [
                "неозначений артикль",
                "um / uns",
                "uma / umas"
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
                "O livro é interessante.",
                "Книга цікава."
              ],
              [
                "A casa é grande.",
                "Дім великий."
              ],
              [
                "Os livros são novos.",
                "Книги нові."
              ],
              [
                "Tenho uma maçã.",
                "У мене є яблуко."
              ]
            ]
          }
        ]
      }
    ]
  }
];
