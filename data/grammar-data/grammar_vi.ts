// Vymova — data/grammar-data/grammar_vi.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_VI: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "pronouns",
        "title": "Đại từ nhân xưng — A1",
        "emoji": "🙋",
        "sections": [
          {
            "type": "intro",
            "text": "В’єтнамські займенники залежать від віку, статі та ступеня формальності — це не просто \"я/ти/він\", а звертання на кшталт \"старший брат\", \"молодша сестра\" тощо. Нижче — нейтральні базові форми для початківців.",
            "en": {
              "text": "Vietnamese pronouns depend on age, gender, and formality — they work more like kinship terms (\"older brother\", \"younger sister\") than fixed words. Below are the neutral beginner-level forms."
            }
          },
          {
            "type": "table",
            "title": "Базові займенники",
            "rows": [
              [
                "tôi",
                "я (нейтральне, ввічливе)"
              ],
              [
                "bạn",
                "ти / ви (до ровесника)"
              ],
              [
                "anh",
                "він / ти (старший чоловік)"
              ],
              [
                "chị",
                "вона / ти (старша жінка)"
              ],
              [
                "chúng tôi",
                "ми (без співрозмовника)"
              ],
              [
                "họ",
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
                "Tôi là sinh viên.",
                "Я студент."
              ],
              [
                "Bạn khỏe không?",
                "Як ти? (букв. Ти здоровий?)"
              ]
            ]
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      },
      {
        "id": "verb-la",
        "title": "Động từ \"là\" — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "\"Là\" (бути/є) з’єднує підмет з іменником і не змінюється за особами, числом чи часом — на відміну від англійського \"to be\".",
            "en": {
              "text": "\"Là\" (to be) links a subject to a noun and never changes for person, number, or tense — unlike English \"to be\"."
            }
          },
          {
            "type": "formula",
            "title": "S + là + іменник",
            "rows": [
              [
                "Tôi",
                "là",
                "giáo viên. (Я вчитель.)"
              ],
              [
                "Đây",
                "là",
                "sách. (Це книга.)"
              ],
              [
                "Cô ấy",
                "là",
                "bác sĩ. (Вона лікар.)"
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
                "Anh ấy là bạn tôi.",
                "Він мій друг."
              ],
              [
                "Đây là nhà của tôi.",
                "Це мій дім."
              ]
            ]
          }
        ],
        "titleEn": "The Verb Là (To Be) — A1"
      },
      {
        "id": "negation",
        "title": "Phủ định \"không\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється часткою \"không\" перед дієсловом чи прикметником. З дієсловом \"là\" перед іменником вживають \"không phải là\".",
            "en": {
              "text": "Negation is formed with the particle \"không\" before a verb or adjective. With \"là\" before a noun, use \"không phải là\" instead."
            }
          },
          {
            "type": "table",
            "title": "Схема заперечення",
            "rows": [
              [
                "không + дієслово/прикметник",
                "không biết (не знаю), không lớn (не великий)"
              ],
              [
                "không phải là + іменник",
                "không phải là bác sĩ (не лікар)"
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
                "Tôi không biết.",
                "Я не знаю."
              ],
              [
                "Đây không phải là xe của tôi.",
                "Це не моя машина."
              ]
            ]
          }
        ],
        "titleEn": "Negation with Không — A1"
      },
      {
        "id": "questions",
        "title": "Câu hỏi \"có ... không?\" — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання \"так/ні\" утворюються рамковою конструкцією \"có ... không?\" навколо дієслова чи прикметника — порядок слів речення не міняється.",
            "en": {
              "text": "Yes/no questions are formed by wrapping the verb or adjective in \"có ... không?\" — the word order of the statement stays the same."
            }
          },
          {
            "type": "formula",
            "title": "S + có + дієслово/прикметник + không?",
            "rows": [
              [
                "Bạn",
                "có khỏe không?",
                "(Ти здоровий? / Як справи?)"
              ],
              [
                "Anh ấy",
                "có đi không?",
                "(Він іде?)"
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
                "Bạn có khỏe không? — Có, tôi khỏe.",
                "Як ти? — Так, я здоровий."
              ],
              [
                "Chị có bận không? — Không, tôi không bận.",
                "Ти зайнята? — Ні, я не зайнята."
              ]
            ]
          }
        ],
        "titleEn": "Questions with Có...Không? — A1"
      },
      {
        "id": "classifiers",
        "title": "Loại từ (класифікатори) — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Перед іменником у в’єтнамській зазвичай стоїть класифікатор — слово, що вказує категорію предмета (подібно до \"штука\" в \"дві штуки хліба\"). Вибір класифікатора залежить від типу об’єкта.",
            "en": {
              "text": "Vietnamese nouns are usually preceded by a classifier — a word marking the object's category (similar to \"piece\" in \"two pieces of bread\"). The classifier depends on the kind of object."
            }
          },
          {
            "type": "table",
            "title": "Основні класифікатори",
            "rows": [
              [
                "cái",
                "неживі предмети — cái bàn (стіл)"
              ],
              [
                "con",
                "тварини/істоти — con mèo (кіт)"
              ],
              [
                "quả / trái",
                "круглі плоди — quả cam (апельсин)"
              ],
              [
                "chiếc",
                "транспорт, парні предмети — chiếc xe (машина)"
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
                "Tôi có một con mèo.",
                "У мене є кіт."
              ],
              [
                "Đây là quả cam.",
                "Це апельсин."
              ]
            ]
          }
        ],
        "titleEn": "Classifiers — A1"
      }
    ]
  }
];
