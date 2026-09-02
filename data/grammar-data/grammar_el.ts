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
        ],
        "titleEn": "Articles Ο/Η/Το — A1"
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
        ],
        "titleEn": "The Verb Είμαι (To Be) — A1"
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
        ],
        "titleEn": "Plural Nouns — A1"
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
        ],
        "titleEn": "Personal Pronouns — A1"
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
        ],
        "titleEn": "The Verb Έχω (To Have) — A1"
      }
    ]
  },
  {
    "id": "tenses",
    "title": "Часи та способи дієслова",
    "titleEn": "Tenses & Moods",
    "emoji": "🕐",
    "rules": [
      {
        "id": "present-a-conjugation",
        "title": "Ενεστώτας — Α΄ Συζυγία (-ω) — A1",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслова першої дієвідміни закінчуються на -ω в словниковій формі (наприклад, γράφω — писати). Це найпоширеніша група дієслів.",
            "en": {
              "text": "First-conjugation verbs end in -ω in the dictionary form (e.g. γράφω — to write). This is the most common verb group."
            }
          },
          {
            "type": "formula",
            "title": "γράφω (писати) — теперішній час",
            "rows": [
              [
                "✅ (+)",
                "εγώ",
                "γράφ<u>ω</u>",
                "→ Γράφω ένα γράμμα."
              ],
              [
                "✅ (+)",
                "εσύ",
                "γράφ<u>εις</u>",
                "→ Γράφεις καλά."
              ],
              [
                "✅ (+)",
                "αυτός/-ή/-ό",
                "γράφ<u>ει</u>",
                "→ Γράφει αργά."
              ],
              [
                "✅ (+)",
                "εμείς",
                "γράφ<u>ουμε</u>",
                "→ Γράφουμε μαζί."
              ],
              [
                "✅ (+)",
                "εσείς",
                "γράφ<u>ετε</u>",
                "→ Γράφετε πολύ."
              ],
              [
                "✅ (+)",
                "αυτοί/-ές/-ά",
                "γράφ<u>ουν(ε)</u>",
                "→ Γράφουν ιστορίες."
              ]
            ],
            "en": {
              "title": "Present tense"
            }
          },
          {
            "type": "note",
            "title": "Заперечення і питання",
            "text": "Заперечення утворюється часткою δεν перед дієсловом: δεν γράφω. Питання не потребує допоміжного дієслова — лише інтонація/знак питання (;): Γράφεις;",
            "en": {
              "title": "Negation and questions",
              "text": "Negation uses δεν before the verb: δεν γράφω. Questions need no auxiliary verb — just intonation/the question mark (;): Γράφεις;"
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
                "Διαβάζω ένα βιβλίο.",
                "Я читаю книгу."
              ],
              [
                "Δεν καταλαβαίνω.",
                "Я не розумію."
              ],
              [
                "Τι κάνεις;",
                "Що ти робиш?"
              ]
            ]
          }
        ],
        "titleEn": "Present Tense — 1st Conjugation (-ω)"
      },
      {
        "id": "present-b-conjugation",
        "title": "Ενεστώτας — Β΄ Συζυγία (-άω/-ώ) — A1",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Друга дієвідміна має два підтипи: Β1 (наголос на закінченні, напр. αγαπάω/αγαπώ — любити) і Β2 (напр. μπορώ — могти). Закінчення відрізняються від першої дієвідміни.",
            "en": {
              "text": "The second conjugation has two subtypes: B1 (stress on the ending, e.g. αγαπάω/αγαπώ — to love) and B2 (e.g. μπορώ — to be able to). Endings differ from the first conjugation."
            }
          },
          {
            "type": "formula",
            "title": "αγαπάω/αγαπώ (любити) — Β1",
            "rows": [
              [
                "✅ (+)",
                "εγώ",
                "αγαπ<u>άω/-ώ</u>",
                "→ Σ' αγαπώ."
              ],
              [
                "✅ (+)",
                "εσύ",
                "αγαπ<u>άς</u>",
                "→ Αγαπάς τη μουσική."
              ],
              [
                "✅ (+)",
                "αυτός/-ή/-ό",
                "αγαπ<u>άει/-ά</u>",
                "→ Αγαπάει τα ζώα."
              ],
              [
                "✅ (+)",
                "εμείς",
                "αγαπ<u>άμε</u>",
                "→ Αγαπάμε την Ελλάδα."
              ],
              [
                "✅ (+)",
                "εσείς",
                "αγαπ<u>άτε</u>",
                "→ Αγαπάτε το φαγητό;"
              ],
              [
                "✅ (+)",
                "αυτοί/-ές/-ά",
                "αγαπ<u>άνε/-ούν</u>",
                "→ Αγαπάνε ταξίδια."
              ]
            ],
            "en": {
              "title": "αγαπάω/αγαπώ (to love) — B1"
            }
          },
          {
            "type": "table",
            "title": "μπορώ (могти) — Β2",
            "rows": [
              [
                "μπορώ",
                "я можу"
              ],
              [
                "μπορείς",
                "ти можеш"
              ],
              [
                "μπορεί",
                "він/вона/воно може"
              ],
              [
                "μπορούμε",
                "ми можемо"
              ],
              [
                "μπορείτε",
                "ви можете"
              ],
              [
                "μπορούν",
                "вони можуть"
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
                "Μπορώ να έρθω αύριο.",
                "Я можу прийти завтра."
              ],
              [
                "Τι παρακολουθείς;",
                "Що ти дивишся/вивчаєш?"
              ]
            ]
          }
        ],
        "titleEn": "Present Tense — 2nd Conjugation (-άω/-ώ)"
      },
      {
        "id": "imperfect",
        "title": "Παρατατικός — A2",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Παρατατικός виражає тривалу або повторювану дію в минулому (аналог Past Continuous / used to). Наголос переміщується на третій склад від кінця, а якщо складів бракує — додається префікс έ-.",
            "en": {
              "text": "The Imperfect expresses an ongoing or habitual past action (like Past Continuous / used to). Stress shifts to the third-from-last syllable, adding the prefix έ- if there aren't enough syllables."
            }
          },
          {
            "type": "formula",
            "title": "γράφω → Παρατατικός",
            "rows": [
              [
                "✅ (+)",
                "εγώ",
                "<u>έ</u>γραφα",
                "→ Έγραφα κάθε μέρα."
              ],
              [
                "✅ (+)",
                "εσύ",
                "έγραφες",
                "→ Έγραφες γράμματα."
              ],
              [
                "✅ (+)",
                "αυτός/-ή/-ό",
                "έγραφε",
                "→ Έγραφε συνέχεια."
              ],
              [
                "✅ (+)",
                "εμείς",
                "γράφαμε",
                "→ Γράφαμε μαζί."
              ],
              [
                "✅ (+)",
                "εσείς",
                "γράφατε",
                "→ Γράφατε αργά."
              ],
              [
                "✅ (+)",
                "αυτοί/-ές/-ά",
                "έγραφαν",
                "→ Έγραφαν ιστορίες."
              ]
            ],
            "en": {
              "title": "γράφω → Imperfect"
            }
          },
          {
            "type": "markers",
            "title": "Маркери часу",
            "items": [
              "κάθε μέρα (στο παρελθόν)",
              "τότε",
              "συνήθως",
              "όταν ήμουν μικρός/-ή",
              "πάντα"
            ],
            "en": {
              "title": "Time markers"
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
                "Όταν ήμουν μικρός, έπαιζα ποδόσφαιρο.",
                "Коли я був малим, я грав у футбол."
              ],
              [
                "Δούλευε στην Αθήνα.",
                "Він/вона працював(ла) в Афінах."
              ]
            ]
          }
        ],
        "titleEn": "Imperfect (Παρατατικός) — A2"
      },
      {
        "id": "aorist",
        "title": "Αόριστος — A2",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Αόριστος виражає завершену одноразову дію в минулому (Past Simple). Використовує окрему («доконану») основу дієслова, яка часто відрізняється приголосним від основи теперішнього часу.",
            "en": {
              "text": "The Aorist expresses a completed, one-time past action (Past Simple). It uses a separate perfective stem, which often differs in its final consonant from the present stem."
            }
          },
          {
            "type": "formula",
            "title": "γράφω → Αόριστος (основа γραψ-)",
            "rows": [
              [
                "✅ (+)",
                "εγώ",
                "έγρα<u>ψ</u>α",
                "→ Έγραψα ένα email."
              ],
              [
                "✅ (+)",
                "εσύ",
                "έγραψες",
                "→ Έγραψες καλά;"
              ],
              [
                "✅ (+)",
                "αυτός/-ή/-ό",
                "έγραψε",
                "→ Έγραψε ένα βιβλίο."
              ],
              [
                "✅ (+)",
                "εμείς",
                "γράψαμε",
                "→ Γράψαμε την εξέταση."
              ],
              [
                "✅ (+)",
                "εσείς",
                "γράψατε",
                "→ Γράψατε το όνομά σας;"
              ],
              [
                "✅ (+)",
                "αυτοί/-ές/-ά",
                "έγραψαν",
                "→ Έγραψαν το τεστ."
              ]
            ],
            "en": {
              "title": "γράφω → Aorist (perfective stem γραψ-)"
            }
          },
          {
            "type": "table",
            "title": "Типові зміни основи",
            "rows": [
              [
                "φ/π/β → ψ",
                "γράφω → έγραψα, κρύβω → έκρυψα"
              ],
              [
                "ζ/γ/κ → ξ",
                "διαβάζω → διάβασα*, ανοίγω → άνοιξα"
              ],
              [
                "ν/ζ/(нульова) → σ",
                "χάνω → έχασα, κλείνω → έκλεισα"
              ]
            ]
          },
          {
            "type": "note",
            "title": "Наголос",
            "text": "Αόριστος завжди наголошений на третьому складі від кінця; якщо в дієслові менше складів, додається έ- (як у Παρατατικός).",
            "en": {
              "title": "Stress",
              "text": "The Aorist is always stressed on the third-from-last syllable; if the verb has fewer syllables, the prefix έ- is added (as in the Imperfect)."
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
                "Χθες πήγα στη δουλειά.",
                "Вчора я пішов(ла) на роботу."
              ],
              [
                "Είδε την ταινία.",
                "Він/вона подивився(-лась) фільм."
              ]
            ]
          }
        ],
        "titleEn": "Aorist (Αόριστος) — A2"
      },
      {
        "id": "future-simple",
        "title": "Μέλλοντας Στιγμιαίος (θα + Αόριστος) — A1",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Простий майбутній час утворюється часткою θα перед формою Αόριστος (доконаної основи) — виражає одноразову майбутню дію.",
            "en": {
              "text": "The simple future is formed with the particle θα before the Aorist (perfective) form — it expresses a one-time future action."
            }
          },
          {
            "type": "formula",
            "title": "θα + γράψω",
            "rows": [
              [
                "✅ (+)",
                "εγώ",
                "θα γράψω",
                "→ Θα γράψω ένα γράμμα."
              ],
              [
                "✅ (+)",
                "εσύ",
                "θα γράψεις",
                "→ Θα γράψεις σήμερα;"
              ],
              [
                "✅ (+)",
                "αυτός/-ή/-ό",
                "θα γράψει",
                "→ Θα γράψει αύριο."
              ],
              [
                "❌ (−)",
                "εγώ",
                "δεν θα γράψω",
                "→ Δεν θα γράψω τίποτα."
              ],
              [
                "❓ (?)",
                "εσύ",
                "Θα γράψεις;",
                "→ Θα γράψεις το τεστ;"
              ]
            ],
            "en": {
              "title": "θα + write (Aorist)"
            }
          },
          {
            "type": "markers",
            "title": "Маркери часу",
            "items": [
              "αύριο",
              "του χρόνου",
              "σε λίγο",
              "μετά",
              "την επόμενη εβδομάδα"
            ],
            "en": {
              "title": "Time markers"
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
                "Θα σε πάρω τηλέφωνο.",
                "Я тобі подзвоню."
              ],
              [
                "Θα φάμε έξω απόψε.",
                "Ми повечеряємо надворі сьогодні ввечері."
              ]
            ]
          }
        ],
        "titleEn": "Simple Future (Θα + Aorist) — A1"
      },
      {
        "id": "future-continuous",
        "title": "Μέλλοντας Εξακολουθητικός (θα + Ενεστώτας) — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Тривалий майбутній час утворюється θα перед формою теперішнього часу (недоконаної основи) — виражає тривалу/повторювану дію в майбутньому.",
            "en": {
              "text": "The continuous future is formed with θα before the present-tense (imperfective) form — it expresses an ongoing/habitual future action."
            }
          },
          {
            "type": "formula",
            "title": "θα + γράφω",
            "rows": [
              [
                "✅ (+)",
                "εγώ",
                "θα γράφω",
                "→ Θα γράφω κάθε μέρα."
              ],
              [
                "✅ (+)",
                "εσύ",
                "θα γράφεις",
                "→ Θα γράφεις εκεί."
              ],
              [
                "✅ (+)",
                "αυτός/-ή/-ό",
                "θα γράφει",
                "→ Θα δουλεύει το καλοκαίρι."
              ]
            ],
            "en": {
              "title": "θα + present (imperfective)"
            }
          },
          {
            "type": "note",
            "title": "Στιγμιαίος vs Εξακολουθητικός",
            "text": "Θα γράψω = напишу один раз, конкретно (доконаний вид). Θα γράφω = писатиму постійно/регулярно (недоконаний вид).",
            "en": {
              "title": "Simple vs Continuous",
              "text": "Θα γράψω = I will write once, specifically (perfective). Θα γράφω = I will be writing / will write regularly (imperfective)."
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
                "Θα δουλεύω από το σπίτι από Δευτέρα.",
                "Я працюватиму з дому з понеділка."
              ],
              [
                "Του χρόνου θα σπουδάζω στην Αθήνα.",
                "Наступного року я навчатимусь в Афінах."
              ]
            ]
          }
        ],
        "titleEn": "Continuous Future (Θα + Present) — A2"
      },
      {
        "id": "present-perfect",
        "title": "Παρακείμενος (έχω + Απαρέμφατο) — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Παρακείμενος утворюється дієсловом έχω у теперішньому часі + незмінна форма «απαρέμφατο» (доконана основа + -ει). Виражає дію, результат якої важливий зараз.",
            "en": {
              "text": "The Present Perfect is formed with έχω in the present tense + the invariable 'aparemfato' form (perfective stem + -ει). It expresses an action whose result matters now."
            }
          },
          {
            "type": "formula",
            "title": "έχω + γράψει",
            "rows": [
              [
                "✅ (+)",
                "εγώ",
                "έχω γράψει",
                "→ Έχω γράψει το email."
              ],
              [
                "✅ (+)",
                "εσύ",
                "έχεις γράψει",
                "→ Έχεις τελειώσει;"
              ],
              [
                "✅ (+)",
                "αυτός/-ή/-ό",
                "έχει γράψει",
                "→ Έχει δει την ταινία."
              ],
              [
                "✅ (+)",
                "εμείς",
                "έχουμε γράψει",
                "→ Έχουμε φάει ήδη."
              ],
              [
                "✅ (+)",
                "εσείς",
                "έχετε γράψει",
                "→ Έχετε πάει ποτέ Ελλάδα;"
              ],
              [
                "✅ (+)",
                "αυτοί/-ές/-ά",
                "έχουν γράψει",
                "→ Έχουν φύγει."
              ]
            ],
            "en": {
              "title": "έχω + written (aparemfato)"
            }
          },
          {
            "type": "note",
            "title": "Απαρέμφατο",
            "text": "Форма απαρέμφατο незмінна для всіх осіб — вона завжди дорівнює формі 3-ї особи однини Αόριστος + -ει (γράψει, δει, φάει).",
            "en": {
              "title": "Aparemfato",
              "text": "The aparemfato form is invariable for all persons — it always equals the 3rd person singular Aorist stem + -ει (γράψει, δει, φάει)."
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
                "Έχεις φάει;",
                "Ти вже їв(ла)?"
              ],
              [
                "Δεν έχω πάει ποτέ στην Κρήτη.",
                "Я ніколи не був(ла) на Криті."
              ]
            ]
          }
        ],
        "titleEn": "Present Perfect (Παρακείμενος) — B1"
      },
      {
        "id": "pluperfect",
        "title": "Υπερσυντέλικος (είχα + Απαρέμφατο) — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Υπερσυντέλικος виражає дію, що відбулася раніше за іншу минулу подію (Past Perfect). Утворюється είχα + απαρέμφατο.",
            "en": {
              "text": "The Pluperfect expresses an action that happened before another past event (Past Perfect). Formed with είχα + aparemfato."
            }
          },
          {
            "type": "formula",
            "title": "είχα + γράψει",
            "rows": [
              [
                "✅ (+)",
                "εγώ",
                "είχα γράψει",
                "→ Είχα ήδη φύγει."
              ],
              [
                "✅ (+)",
                "εσύ",
                "είχες γράψει",
                "→ Είχες τελειώσει πριν;"
              ],
              [
                "✅ (+)",
                "αυτός/-ή/-ό",
                "είχε γράψει",
                "→ Είχε φάει πριν έρθει."
              ],
              [
                "✅ (+)",
                "εμείς",
                "είχαμε γράψει",
                "→ Είχαμε δει την ταινία."
              ],
              [
                "✅ (+)",
                "εσείς",
                "είχατε γράψει",
                "→ Είχατε πάει εκεί."
              ],
              [
                "✅ (+)",
                "αυτοί/-ές/-ά",
                "είχαν γράψει",
                "→ Είχαν φύγει νωρίτερα."
              ]
            ],
            "en": {
              "title": "είχα + written (aparemfato)"
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
                "Όταν έφτασα, το τρένο είχε φύγει.",
                "Коли я прибув(ла), потяг уже поїхав."
              ],
              [
                "Είχαμε ήδη φάει όταν τηλεφώνησες.",
                "Ми вже поїли, коли ти зателефонував(ла)."
              ]
            ]
          }
        ],
        "titleEn": "Pluperfect (Υπερσυντέλικος) — B1"
      },
      {
        "id": "subjunctive-na",
        "title": "Υποτακτική με \"να\" — A2",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Частка να перед дієсловом виражає бажання, намір, мету або підрядну дію (аналог англійського «to» / субʼюнктива). Може поєднуватися з формою теперішнього часу (тривала дія) або Αόριστος (одноразова дія).",
            "en": {
              "text": "The particle να before a verb expresses a wish, intention, purpose or subordinate action (like English 'to' / subjunctive). It can combine with the present-tense form (ongoing) or the Aorist form (one-time)."
            }
          },
          {
            "type": "table",
            "title": "να + Ενεστώτας vs να + Αόριστος",
            "rows": [
              [
                "να γράφω",
                "щоб я писав (постійно/зараз)"
              ],
              [
                "να γράψω",
                "щоб я написав (один раз)"
              ],
              [
                "θέλω να φάω",
                "я хочу поїсти (одноразово)"
              ],
              [
                "μου αρέσει να διαβάζω",
                "мені подобається читати (загалом)"
              ]
            ]
          },
          {
            "type": "note",
            "title": "Типові конструкції",
            "text": "θέλω να... (я хочу, щоб/щоб я...), πρέπει να... (треба, щоб...), μπορώ να... (я можу...), ελπίζω να... (сподіваюсь, що...).",
            "en": {
              "title": "Common patterns",
              "text": "θέλω να... (I want to...), πρέπει να... (I must...), μπορώ να... (I can...), ελπίζω να... (I hope that...)."
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
                "Θέλω να μάθω ελληνικά.",
                "Я хочу вивчити грецьку."
              ],
              [
                "Πρέπει να φύγω τώρα.",
                "Мені треба йти зараз."
              ]
            ]
          }
        ],
        "titleEn": "The Subjunctive with Να — A2"
      },
      {
        "id": "imperative",
        "title": "Προστακτική — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб має дві форми: від основи теперішнього часу (тривала/повторювана дія) і від основи Αόριστος (одноразова, конкретна дія) — обидві широко вживані.",
            "en": {
              "text": "The imperative has two forms: from the present stem (ongoing/repeated action) and from the Aorist stem (one-time, specific action) — both are widely used."
            }
          },
          {
            "type": "formula",
            "title": "γράφω — наказовий спосіб",
            "rows": [
              [
                "✅ (+)",
                "εσύ (тривала)",
                "γράφε!",
                "→ Γράφε συνέχεια!"
              ],
              [
                "✅ (+)",
                "εσύ (одноразова)",
                "γράψε!",
                "→ Γράψε το όνομά σου!"
              ],
              [
                "✅ (+)",
                "εσείς (тривала)",
                "γράφετε!",
                "→ Γράφετε προσεκτικά!"
              ],
              [
                "✅ (+)",
                "εσείς (одноразова)",
                "γράψτε!",
                "→ Γράψτε εδώ!"
              ],
              [
                "❌ (−)",
                "заперечення",
                "μη(ν) γράφεις!",
                "→ Μην γράφεις τώρα!"
              ]
            ],
            "en": {
              "title": "γράφω — imperative"
            }
          },
          {
            "type": "note",
            "title": "Заперечний наказ",
            "text": "Заперечний наказ ніколи не використовує чисту форму Προστακτική — замість неї вживають μη(ν) + Υποτακτική: Μην φεύγεις! (Не йди!).",
            "en": {
              "title": "Negative imperative",
              "text": "The negative imperative never uses the plain imperative form — instead μη(ν) + Subjunctive is used: Μην φεύγεις! (Don't leave!)."
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
                "Έλα εδώ!",
                "Іди сюди!"
              ],
              [
                "Μην ανησυχείς.",
                "Не хвилюйся."
              ]
            ]
          }
        ],
        "titleEn": "Imperative (Προστακτική) — A2"
      },
      {
        "id": "passive-present",
        "title": "Παθητική Φωνή — Ενεστώτας — B1",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний стан використовується, коли підмет зазнає дії, а не виконує її (аналог англійського «is written»). Дієслова пасивного стану мають окремі закінчення на -μαι.",
            "en": {
              "text": "The passive voice is used when the subject undergoes an action rather than performing it (like English 'is written'). Passive verbs have distinct -μαι endings."
            }
          },
          {
            "type": "formula",
            "title": "γράφομαι (мене пишуть/я пишуся)",
            "rows": [
              [
                "✅ (+)",
                "εγώ",
                "γράφ<u>ομαι</u>",
                "→ Γράφομαι στο μάθημα."
              ],
              [
                "✅ (+)",
                "εσύ",
                "γράφ<u>εσαι</u>",
                "→ Πώς λέγεσαι;"
              ],
              [
                "✅ (+)",
                "αυτός/-ή/-ό",
                "γράφ<u>εται</u>",
                "→ Το βιβλίο διαβάζεται εύκολα."
              ],
              [
                "✅ (+)",
                "εμείς",
                "γραφ<u>όμαστε</u>",
                "→ Γραφόμαστε τώρα."
              ],
              [
                "✅ (+)",
                "εσείς",
                "γράφ<u>εστε</u>",
                "→ Πώς λέγεστε;"
              ],
              [
                "✅ (+)",
                "αυτοί/-ές/-ά",
                "γράφ<u>ονται</u>",
                "→ Οι λέξεις γράφονται σωστά."
              ]
            ],
            "en": {
              "title": "γράφομαι (to be written / to sign up)"
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
                "Πώς λέγεσαι;",
                "Як тебе звати? (букв. Як ти називаєшся?)"
              ],
              [
                "Αυτό δεν εξηγείται εύκολα.",
                "Це нелегко пояснити."
              ]
            ]
          }
        ],
        "titleEn": "Passive Voice — Present"
      },
      {
        "id": "passive-aorist",
        "title": "Παθητική Φωνή — Αόριστος — B1",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний Αόριστος описує завершену пасивну дію в минулому. Здебільшого закінчується на -τηκα і використовує окрему основу.",
            "en": {
              "text": "The passive Aorist describes a completed passive action in the past. It mostly ends in -τηκα and uses a distinct stem."
            }
          },
          {
            "type": "formula",
            "title": "γράφτηκα (мене написали/я написався)",
            "rows": [
              [
                "✅ (+)",
                "εγώ",
                "γράφ<u>τηκα</u>",
                "→ Γεννήθηκα στην Αθήνα."
              ],
              [
                "✅ (+)",
                "εσύ",
                "γράφ<u>τηκες</u>",
                "→ Πού γεννήθηκες;"
              ],
              [
                "✅ (+)",
                "αυτός/-ή/-ό",
                "γράφ<u>τηκε</u>",
                "→ Το σπίτι χτίστηκε το 1990."
              ],
              [
                "✅ (+)",
                "εμείς",
                "γραφ<u>τήκαμε</u>",
                "→ Γραφτήκαμε στο μάθημα."
              ],
              [
                "✅ (+)",
                "εσείς",
                "γραφ<u>τήκατε</u>",
                "→ Πού γεννηθήκατε;"
              ],
              [
                "✅ (+)",
                "αυτοί/-ές/-ά",
                "γράφ<u>τηκαν</u>",
                "→ Χτίστηκαν πολλά σπίτια."
              ]
            ],
            "en": {
              "title": "γράφτηκα (was written / signed up) — Aorist"
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
                "Γεννήθηκα το 1995.",
                "Я народився(-лась) 1995 року."
              ],
              [
                "Το κάστρο χτίστηκε τον 15ο αιώνα.",
                "Замок був збудований у 15-му столітті."
              ]
            ]
          }
        ],
        "titleEn": "Passive Voice — Aorist"
      },
      {
        "id": "aspect-overview",
        "title": "Ρηματική Όψη: Εξακολουθητική vs Στιγμιαία — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "У грецькій дієслові кожна форма (крім теперішнього часу) будується на одній із двох основ: недоконаній (εξακολουθητική — тривала/повторювана дія) або доконаній (στιγμιαία — одноразова, завершена дія). Це ключова відмінність від англійської чи української системи часів.",
            "en": {
              "text": "In Greek, every verb form (except the present) is built on one of two stems: imperfective (εξακολουθητική — ongoing/repeated action) or perfective (στιγμιαία — a single, completed action). This is a key difference from the English or Ukrainian tense system."
            }
          },
          {
            "type": "table",
            "title": "Дві основи дієслова γράφω",
            "rows": [
              [
                "Недоконана основа (γραφ-)",
                "Ενεστώτας, Παρατατικός, Εξακολ. Μέλλοντας, να γράφω"
              ],
              [
                "Доконана основа (γραψ-)",
                "Αόριστος, Στιγμ. Μέλλοντας, Παρακείμενος, να γράψω, Προστακτική"
              ]
            ]
          },
          {
            "type": "tip",
            "title": "Як запам'ятати",
            "text": "Питайте себе: дія одноразова й завершена (доконана основа) чи тривала/повторювана (недоконана основа)? Це визначає, яку основу вжити в будь-якому часі чи способі.",
            "en": {
              "title": "How to remember",
              "text": "Ask yourself: is the action a single, completed event (perfective stem) or ongoing/repeated (imperfective stem)? This determines which stem to use in any tense or mood."
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
                "Διάβαζα όλο το απόγευμα.",
                "Я читав(ла) весь день (тривало)."
              ],
              [
                "Διάβασα το βιβλίο σε μια μέρα.",
                "Я прочитав(ла) книгу за один день (завершено)."
              ]
            ]
          }
        ],
        "titleEn": "Verbal Aspect: Imperfective vs Perfective — B1"
      }
    ]
  },
  {
    "id": "grammar",
    "title": "Граматика",
    "titleEn": "Grammar",
    "emoji": "📖",
    "rules": [
      {
        "id": "case-nominative",
        "title": "Ονομαστική Πτώση — A1",
        "emoji": "🏷️",
        "sections": [
          {
            "type": "intro",
            "text": "Називний відмінок — базова («словникова») форма іменника. Використовується для підмета речення й іменної частини присудка.",
            "en": {
              "text": "The Nominative is the base ('dictionary') form of a noun. It is used for the subject of a sentence and for the predicate nominative."
            }
          },
          {
            "type": "table",
            "title": "Функції",
            "rows": [
              [
                "Підмет",
                "Ο άντρας τρέχει. (Чоловік біжить.)"
              ],
              [
                "Іменна частина присудка",
                "Είναι δάσκαλος. (Він учитель.)"
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
                "Η γυναίκα διαβάζει.",
                "Жінка читає."
              ],
              [
                "Ο Γιάννης είναι φοιτητής.",
                "Яннис — студент."
              ]
            ]
          }
        ],
        "titleEn": "Nominative Case — A1"
      },
      {
        "id": "case-genitive",
        "title": "Γενική Πτώση — A2",
        "emoji": "🏷️",
        "sections": [
          {
            "type": "intro",
            "text": "Родовий відмінок виражає належність (чиєсь), а також вживається після деяких прийменників і дієслів. Іменники та артиклі змінюють закінчення.",
            "en": {
              "text": "The Genitive expresses possession, and is also used after certain prepositions and verbs. Nouns and articles change their endings."
            }
          },
          {
            "type": "table",
            "title": "Родовий відмінок за родом",
            "rows": [
              [
                "ο άντρας → του άντρα",
                "чоловіка (belonging to the man)"
              ],
              [
                "η γυναίκα → της γυναίκας",
                "жінки"
              ],
              [
                "το παιδί → του παιδιού",
                "дитини"
              ]
            ]
          },
          {
            "type": "note",
            "title": "Порядок слів",
            "text": "Присвійний родовий зазвичай стоїть після іменника: το βιβλίο του Γιάννη (книга Яніса).",
            "en": {
              "title": "Word order",
              "text": "The possessive genitive usually follows the noun: το βιβλίο του Γιάννη (Yannis's book)."
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
                "Το αυτοκίνητο του πατέρα μου.",
                "Машина мого батька."
              ],
              [
                "Είναι φίλη της μητέρας μου.",
                "Вона подруга моєї мами."
              ]
            ]
          }
        ],
        "titleEn": "Genitive Case — A2"
      },
      {
        "id": "case-accusative",
        "title": "Αιτιατική Πτώση — A1",
        "emoji": "🏷️",
        "sections": [
          {
            "type": "intro",
            "text": "Знахідний відмінок — відмінок прямого додатка (кого/що?) і вживається після більшості прийменників.",
            "en": {
              "text": "The Accusative is the case of the direct object (whom/what?) and is used after most prepositions."
            }
          },
          {
            "type": "table",
            "title": "Знахідний відмінок за родом",
            "rows": [
              [
                "ο άντρας → τον άντρα",
                "чоловіка (as direct object)"
              ],
              [
                "η γυναίκα → τη(ν) γυναίκα",
                "жінку"
              ],
              [
                "το παιδί → το παιδί",
                "дитину (без змін для середнього роду)"
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
                "Βλέπω τον άντρα.",
                "Я бачу чоловіка."
              ],
              [
                "Αγαπάω τη γυναίκα μου.",
                "Я люблю свою дружину."
              ],
              [
                "Πάω στην Αθήνα.",
                "Я їду до Афін."
              ]
            ]
          }
        ],
        "titleEn": "Accusative Case — A1"
      },
      {
        "id": "case-vocative",
        "title": "Κλητική Πτώση — A2",
        "emoji": "🏷️",
        "sections": [
          {
            "type": "intro",
            "text": "Кличний відмінок використовують для звертання до когось. Артикль не вживається; закінчення чоловічого роду часто змінюється.",
            "en": {
              "text": "The Vocative is used to address someone directly. No article is used, and masculine endings often change."
            }
          },
          {
            "type": "table",
            "title": "Кличний відмінок — приклади",
            "rows": [
              [
                "ο Γιάννης → Γιάννη!",
                "Яніс → Яніс! (звертання)"
              ],
              [
                "ο άντρας → άντρα!",
                "чоловіче!"
              ],
              [
                "η Μαρία → Μαρία!",
                "Марія! (жіночий рід без змін)"
              ],
              [
                "το παιδί → παιδί!",
                "дитино!"
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
                "Γιάννη, έλα εδώ!",
                "Яніс, іди сюди!"
              ],
              [
                "Κύριε, μπορείτε να με βοηθήσετε;",
                "Пане, чи можете ви мені допомогти?"
              ]
            ]
          }
        ],
        "titleEn": "Vocative Case — A2"
      },
      {
        "id": "decl-masc-os",
        "title": "Αρσενικά σε -ος — Κλίση — A1",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Найпоширеніший тип чоловічих іменників — закінчення -ος у називному однини.",
            "en": {
              "text": "The most common masculine noun type — ending -ος in the nominative singular."
            }
          },
          {
            "type": "table",
            "title": "ο άνθρωπος (людина) — відмінювання",
            "rows": [
              [
                "Ονομαστική",
                "ο άνθρωπος / οι άνθρωποι"
              ],
              [
                "Γενική",
                "του ανθρώπου / των ανθρώπων"
              ],
              [
                "Αιτιατική",
                "τον άνθρωπο / τους ανθρώπους"
              ],
              [
                "Κλητική",
                "άνθρωπε! / άνθρωποι!"
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
                "Ο άνθρωπος είναι καλός.",
                "Людина добра."
              ],
              [
                "Βλέπω τον άνθρωπο.",
                "Я бачу людину."
              ]
            ]
          }
        ],
        "titleEn": "Masculine Nouns in -ος — Declension"
      },
      {
        "id": "decl-masc-is-as",
        "title": "Αρσενικά σε -ης/-ας — Κλίση — A2",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Друга група чоловічих іменників закінчується на -ης або -ας у називному однини й має власну парадигму відмінювання.",
            "en": {
              "text": "A second group of masculine nouns ends in -ης or -ας in the nominative singular and has its own declension pattern."
            }
          },
          {
            "type": "table",
            "title": "ο μαθητής (учень) / ο άνδρας (чоловік)",
            "rows": [
              [
                "Ονομαστική",
                "ο μαθητής / οι μαθητές"
              ],
              [
                "Γενική",
                "του μαθητή / των μαθητών"
              ],
              [
                "Αιτιατική",
                "τον μαθητή / τους μαθητές"
              ],
              [
                "Ονομαστική (-ας)",
                "ο άνδρας / οι άνδρες"
              ],
              [
                "Γενική (-ας)",
                "του άνδρα / των ανδρών"
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
                "Ο μαθητής διαβάζει.",
                "Учень читає."
              ],
              [
                "Βλέπω τον άνδρα.",
                "Я бачу чоловіка."
              ]
            ]
          }
        ],
        "titleEn": "Masculine Nouns in -ης/-ας — Declension"
      },
      {
        "id": "decl-fem-a",
        "title": "Θηλυκά σε -α — Κλίση — A1",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Найпоширеніший тип жіночих іменників — закінчення -α в називному однини.",
            "en": {
              "text": "The most common feminine noun type — ending -α in the nominative singular."
            }
          },
          {
            "type": "table",
            "title": "η ώρα (година) — відмінювання",
            "rows": [
              [
                "Ονομαστική",
                "η ώρα / οι ώρες"
              ],
              [
                "Γενική",
                "της ώρας / των ωρών"
              ],
              [
                "Αιτιατική",
                "την ώρα / τις ώρες"
              ],
              [
                "Κλητική",
                "ώρα! / ώρες!"
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
                "Τι ώρα είναι;",
                "Котра година?"
              ],
              [
                "Βλέπω τη θάλασσα.",
                "Я бачу море."
              ]
            ]
          }
        ],
        "titleEn": "Feminine Nouns in -α — Declension"
      },
      {
        "id": "decl-fem-i",
        "title": "Θηλυκά σε -η — Κλίση — A2",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Друга група жіночих іменників закінчується на -η в називному однини.",
            "en": {
              "text": "A second group of feminine nouns ends in -η in the nominative singular."
            }
          },
          {
            "type": "table",
            "title": "η τέχνη (мистецтво) — відмінювання",
            "rows": [
              [
                "Ονομαστική",
                "η τέχνη / οι τέχνες"
              ],
              [
                "Γενική",
                "της τέχνης / των τεχνών"
              ],
              [
                "Αιτιατική",
                "την τέχνη / τις τέχνες"
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
                "Η τέχνη είναι όμορφη.",
                "Мистецтво прекрасне."
              ],
              [
                "Μιλάω για τη ζωή.",
                "Я говорю про життя."
              ]
            ]
          }
        ],
        "titleEn": "Feminine Nouns in -η — Declension"
      },
      {
        "id": "decl-neut-o",
        "title": "Ουδέτερα σε -ο — Κλίση — A1",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Найпоширеніший тип середнього роду — закінчення -ο в називному однини. Називний і знахідний завжди однакові.",
            "en": {
              "text": "The most common neuter type — ending -ο in the nominative singular. Nominative and Accusative are always identical."
            }
          },
          {
            "type": "table",
            "title": "το βιβλίο (книга) — відмінювання",
            "rows": [
              [
                "Ονομαστική",
                "το βιβλίο / τα βιβλία"
              ],
              [
                "Γενική",
                "του βιβλίου / των βιβλίων"
              ],
              [
                "Αιτιατική",
                "το βιβλίο / τα βιβλία"
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
                "Το βιβλίο είναι καλό.",
                "Книга хороша."
              ],
              [
                "Διαβάζω το βιβλίο.",
                "Я читаю книгу."
              ]
            ]
          }
        ],
        "titleEn": "Neuter Nouns in -ο — Declension"
      },
      {
        "id": "decl-neut-i",
        "title": "Ουδέτερα σε -ι — Κλίση — A2",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Друга група середнього роду закінчується на -ι в називному однини; у множині часто подвоює приголосний перед -ια.",
            "en": {
              "text": "A second neuter group ends in -ι in the nominative singular; the plural often doubles the consonant before -ια."
            }
          },
          {
            "type": "table",
            "title": "το παιδί (дитина) / το τραπέζι (стіл)",
            "rows": [
              [
                "Ονομαστική",
                "το παιδί / τα παιδιά"
              ],
              [
                "Γενική",
                "του παιδιού / των παιδιών"
              ],
              [
                "Ονομαστική",
                "το τραπέζι / τα τραπέζια"
              ],
              [
                "Γενική",
                "του τραπεζιού / των τραπεζιών"
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
                "Τα παιδιά παίζουν στο πάρκο.",
                "Діти грають у парку."
              ],
              [
                "Βάλε το ποτήρι στο τραπέζι.",
                "Постав склянку на стіл."
              ]
            ]
          }
        ],
        "titleEn": "Neuter Nouns in -ι — Declension"
      },
      {
        "id": "decl-irregular-nouns",
        "title": "Ανώμαλα Ουσιαστικά — Κλίση — B1",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі дуже вживані іменники мають нерегулярні або змішані парадигми відмінювання, які варто запам'ятати окремо.",
            "en": {
              "text": "Some very common nouns have irregular or mixed declension patterns that are best memorized individually."
            }
          },
          {
            "type": "table",
            "title": "Найпоширеніші нерегулярні іменники",
            "rows": [
              [
                "ο πατέρας / του πατέρα / τον πατέρα",
                "батько (наголос переходить)"
              ],
              [
                "η μητέρα / της μητέρας / τη μητέρα",
                "мати"
              ],
              [
                "το χέρι / του χεριού / τα χέρια",
                "рука"
              ],
              [
                "το νερό / του νερού",
                "вода (без множини)"
              ],
              [
                "ο καφές / του καφέ / τον καφέ",
                "кава"
              ],
              [
                "η γυναίκα / της γυναίκας / οι γυναίκες",
                "жінка (множина -αίκες)"
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
                "Θέλω έναν καφέ.",
                "Я хочу каву."
              ],
              [
                "Το χέρι μου πονάει.",
                "У мене болить рука."
              ]
            ]
          }
        ],
        "titleEn": "Irregular Nouns — Declension"
      },
      {
        "id": "adjective-agreement",
        "title": "Συμφωνία Επιθέτου-Ουσιαστικού — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник узгоджується з іменником у роді, числі та відмінку. Більшість прикметників мають три закінчення: -ος (чол.), -η/-α (жін.), -ο (сер.).",
            "en": {
              "text": "An adjective agrees with the noun in gender, number and case. Most adjectives have three endings: -ος (masc.), -η/-α (fem.), -ο (neut.)."
            }
          },
          {
            "type": "table",
            "title": "καλός, καλή, καλό (гарний)",
            "rows": [
              [
                "ο καλός άντρας",
                "хороший чоловік"
              ],
              [
                "η καλή γυναίκα",
                "хороша жінка"
              ],
              [
                "το καλό παιδί",
                "хороша дитина"
              ],
              [
                "οι καλοί άντρες",
                "хороші чоловіки"
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
                "Έχω έναν όμορφο κήπο.",
                "У мене є гарний сад."
              ],
              [
                "Είναι μια έξυπνη γυναίκα.",
                "Вона розумна жінка."
              ]
            ]
          }
        ],
        "titleEn": "Adjective-Noun Agreement — A1"
      },
      {
        "id": "comparative-superlative",
        "title": "Συγκριτικός και Υπερθετικός Βαθμός — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Ступені порівняння прикметників утворюють двома способами: словом πιο (аналітично) або закінченням -ότερος (синтетично).",
            "en": {
              "text": "Adjective comparison is formed two ways: with πιο (analytically) or with the ending -ότερος (synthetically)."
            }
          },
          {
            "type": "table",
            "title": "Ступені порівняння",
            "rows": [
              [
                "όμορφος (гарний)",
                "πιο όμορφος / ομορφότερος (гарніший)"
              ],
              [
                "Найвищий ступінь",
                "ο πιο όμορφος / ο ομορφότερος (найгарніший)"
              ],
              [
                "καλός (хороший)",
                "καλύτερος (краще) — неправильна форма"
              ],
              [
                "κακός (поганий)",
                "χειρότερος (гірше) — неправильна форма"
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
                "Η Αθήνα είναι πιο μεγάλη από τη Θεσσαλονίκη.",
                "Афіни більші за Салоніки."
              ],
              [
                "Είναι ο καλύτερος μαθητής της τάξης.",
                "Він найкращий учень у класі."
              ]
            ]
          }
        ],
        "titleEn": "Comparative & Superlative Degree — A2"
      },
      {
        "id": "weak-personal-pronouns",
        "title": "Αδύνατοι Τύποι Προσωπικών Αντωνυμιών — A2",
        "emoji": "🙋",
        "sections": [
          {
            "type": "intro",
            "text": "Слабкі («ненаголошені») форми особових займенників використовують як прямий чи непрямий додаток — вони стоять безпосередньо перед дієсловом.",
            "en": {
              "text": "Weak ('unstressed') personal pronoun forms are used as direct or indirect objects — they are placed directly before the verb."
            }
          },
          {
            "type": "table",
            "title": "Слабкі форми (знахідний / родовий)",
            "rows": [
              [
                "με / μου",
                "мене / мені"
              ],
              [
                "σε / σου",
                "тебе / тобі"
              ],
              [
                "τον / του (чол.); τη(ν) / της (жін.); το / του (сер.)",
                "його / йому; її / їй; його / йому"
              ],
              [
                "μας / μας",
                "нас / нам"
              ],
              [
                "σας / σας",
                "вас / вам"
              ],
              [
                "τους / τους",
                "їх / їм"
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
                "Σε βλέπω.",
                "Я тебе бачу."
              ],
              [
                "Μου αρέσει το καφέ.",
                "Мені подобається кава."
              ],
              [
                "Του το έδωσα.",
                "Я дав/дала йому це."
              ]
            ]
          }
        ],
        "titleEn": "Weak Personal Pronouns — A2"
      },
      {
        "id": "possessive-pronouns",
        "title": "Κτητικές Αντωνυμίες — A1",
        "emoji": "🙋",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійність виражається артиклем + іменник + ненаголошена родова форма займенника (μου, σου, του...), яка стоїть після іменника.",
            "en": {
              "text": "Possession is expressed with article + noun + the unstressed genitive pronoun (μου, σου, του...), placed after the noun."
            }
          },
          {
            "type": "table",
            "title": "Присвійні форми",
            "rows": [
              [
                "το σπίτι μου",
                "мій дім"
              ],
              [
                "το σπίτι σου",
                "твій дім"
              ],
              [
                "το σπίτι του / της",
                "його / її дім"
              ],
              [
                "το σπίτι μας",
                "наш дім"
              ],
              [
                "το σπίτι σας",
                "ваш дім"
              ],
              [
                "το σπίτι τους",
                "їхній дім"
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
                "Ο φίλος μου λέγεται Νίκος.",
                "Мого друга звати Нікос."
              ],
              [
                "Πού είναι το αυτοκίνητό σου;",
                "Де твоя машина?"
              ]
            ]
          }
        ],
        "titleEn": "Possessive Pronouns — A1"
      },
      {
        "id": "demonstrative-pronouns",
        "title": "Δεικτικές Αντωνυμίες (αυτός/εκείνος) — A2",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Αυτός (цей) вказує на ближче, εκείνος (той) — на дальше. Обидва відмінюються за родом, числом і відмінком, як прикметники.",
            "en": {
              "text": "Αυτός (this) points to something near, εκείνος (that) to something farther. Both decline for gender, number and case like adjectives."
            }
          },
          {
            "type": "table",
            "title": "αυτός / εκείνος",
            "rows": [
              [
                "αυτός, αυτή, αυτό",
                "цей, ця, це"
              ],
              [
                "εκείνος, εκείνη, εκείνο",
                "той, та, те"
              ],
              [
                "αυτόν τον άντρα",
                "цього чоловіка (знах.)"
              ],
              [
                "εκείνη τη γυναίκα",
                "ту жінку (знах.)"
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
                "Αυτό το βιβλίο είναι δικό μου.",
                "Ця книга моя."
              ],
              [
                "Εκείνος ο άντρας είναι δάσκαλος.",
                "Той чоловік — вчитель."
              ]
            ]
          }
        ],
        "titleEn": "Demonstrative Pronouns (Αυτός/Εκείνος) — A2"
      },
      {
        "id": "relative-pronouns",
        "title": "Αναφορικές Αντωνυμίες (που, ο οποίος) — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Που — універсальний і найчастіше вживаний відносний займенник (незмінний). Ο οποίος — формальніший, відмінюється за родом/числом/відмінком.",
            "en": {
              "text": "Που is the universal, most common relative pronoun (invariable). Ο οποίος is more formal and declines for gender/number/case."
            }
          },
          {
            "type": "table",
            "title": "που vs ο οποίος",
            "rows": [
              [
                "ο άντρας που είδα",
                "чоловік, якого я бачив"
              ],
              [
                "ο άντρας τον οποίο είδα",
                "чоловік, якого я бачив (формально)"
              ],
              [
                "η γυναίκα που μιλάει",
                "жінка, яка говорить"
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
                "Το βιβλίο που διάβασα ήταν καλό.",
                "Книга, яку я прочитав(ла), була хороша."
              ],
              [
                "Ο δάσκαλος με τον οποίο μίλησα.",
                "Учитель, з яким я розмовляв(ла)."
              ]
            ]
          }
        ],
        "titleEn": "Relative Pronouns (Που, Ο Οποίος) — B1"
      },
      {
        "id": "interrogative-pronouns",
        "title": "Ερωτηματικές Αντωνυμίες (ποιος, τι, πόσος) — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Ποιος (хто/який) відмінюється за родом і числом; τι (що) і πόσος (скільки) мають свої особливості.",
            "en": {
              "text": "Ποιος (who/which) declines for gender and number; τι (what) and πόσος (how much) have their own forms."
            }
          },
          {
            "type": "table",
            "title": "ποιος / τι / πόσος",
            "rows": [
              [
                "ποιος, ποια, ποιο",
                "хто/який, яка, яке"
              ],
              [
                "τι",
                "що (незмінне)"
              ],
              [
                "πόσος, πόση, πόσο",
                "скільки (узгоджується з іменником)"
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
                "Ποιος είναι αυτός;",
                "Хто це?"
              ],
              [
                "Τι κάνεις;",
                "Що ти робиш?"
              ],
              [
                "Πόσο κάνει;",
                "Скільки коштує?"
              ]
            ]
          }
        ],
        "titleEn": "Interrogative Pronouns (Ποιος, Τι, Πόσος) — A1"
      },
      {
        "id": "indefinite-pronouns",
        "title": "Αόριστες Αντωνυμίες (κάποιος, κανένας, όλος) — B1",
        "emoji": "🔘",
        "sections": [
          {
            "type": "intro",
            "text": "Неозначені займенники вказують на невизначену особу/кількість: κάποιος (хтось), κανένας (ніхто/жоден, у заперечних/питальних реченнях), όλος (весь/усі), κάθε (кожен).",
            "en": {
              "text": "Indefinite pronouns denote an unspecified person/quantity: κάποιος (someone), κανένας (no one / anyone, in negative/questions), όλος (all/every), κάθε (each/every)."
            }
          },
          {
            "type": "table",
            "title": "Основні неозначені займенники",
            "rows": [
              [
                "κάποιος, -α, -ο",
                "хтось / якийсь"
              ],
              [
                "κανένας, καμία, κανένα",
                "ніхто / жоден"
              ],
              [
                "όλος, όλη, όλο (мн. όλοι)",
                "весь / усі"
              ],
              [
                "κάθε",
                "кожен (незмінне)"
              ],
              [
                "τίποτα",
                "нічого"
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
                "Κάποιος χτύπησε την πόρτα.",
                "Хтось постукав у двері."
              ],
              [
                "Δεν είδα κανέναν.",
                "Я нікого не бачив(ла)."
              ],
              [
                "Όλοι οι μαθητές ήρθαν.",
                "Усі учні прийшли."
              ]
            ]
          }
        ],
        "titleEn": "Indefinite Pronouns (Κάποιος, Κανένας, Όλος) — B1"
      },
      {
        "id": "clitic-placement",
        "title": "Θέση Αδύνατων Αντωνυμιών στην Πρόταση — B1",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Слабкі займенники стоять перед дієсловом у стверджувальних реченнях, але після дієслова (приєднані) у наказовому способі й з дієприслівником.",
            "en": {
              "text": "Weak pronouns come before the verb in statements, but after the verb (attached) in the imperative and with the gerund."
            }
          },
          {
            "type": "table",
            "title": "Позиція займенника",
            "rows": [
              [
                "Το βλέπω.",
                "перед дієсловом (я це бачу)"
              ],
              [
                "Δώσ' το μου!",
                "після наказового способу (дай мені це!)"
              ],
              [
                "Θέλω να το δω.",
                "перед інфінітивною формою (να + дієслово)"
              ],
              [
                "Λέγοντάς το...",
                "приєднано до дієприслівника"
              ]
            ]
          },
          {
            "type": "note",
            "title": "Подвійні займенники",
            "text": "Коли є два слабких займенники (непрямий + прямий додаток), непрямий іде першим: Μου το έδωσε. (Він дав це мені.)",
            "en": {
              "title": "Double pronouns",
              "text": "When there are two weak pronouns (indirect + direct object), the indirect comes first: Μου το έδωσε. (He gave it to me.)"
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
                "Δώσε μου το!",
                "Дай мені це!"
              ],
              [
                "Μου το είπε χθες.",
                "Він/вона сказав(ла) мені це вчора."
              ]
            ]
          }
        ],
        "titleEn": "Placement of Weak Pronouns — B1"
      },
      {
        "id": "preposition-se",
        "title": "Πρόθεση \"σε\" — A1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Σε (у/в/на/до) — найуживаніший прийменник, завжди керує знахідним відмінком. Зливається з означеним артиклем: σε + το(ν)/τη(ν) → στο(ν)/στη(ν).",
            "en": {
              "text": "Σε (in/at/to) is the most common preposition, always governing the Accusative. It contracts with the definite article: σε + το(ν)/τη(ν) → στο(ν)/στη(ν)."
            }
          },
          {
            "type": "table",
            "title": "σε + артикль",
            "rows": [
              [
                "σε + το → στο",
                "στο σπίτι (у домі/додому)"
              ],
              [
                "σε + τη(ν) → στη(ν)",
                "στην Αθήνα (в Афінах/до Афін)"
              ],
              [
                "σε + τον → στον",
                "στον κήπο (у саду)"
              ],
              [
                "σε + τα → στα",
                "στα βουνά (у горах)"
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
                "Πάω στο σχολείο.",
                "Я йду до школи."
              ],
              [
                "Μένω στην Ελλάδα.",
                "Я живу в Греції."
              ]
            ]
          }
        ],
        "titleEn": "The Preposition Σε — A1"
      },
      {
        "id": "preposition-apo",
        "title": "Πρόθεση \"από\" — A1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Από (з/від) виражає походження, джерело, порівняння, і теж керує знахідним відмінком. На відміну від σε, не зливається з артиклем.",
            "en": {
              "text": "Από (from) expresses origin, source, comparison, and also governs the Accusative. Unlike σε, it does not contract with the article."
            }
          },
          {
            "type": "table",
            "title": "Вживання από",
            "rows": [
              [
                "Походження",
                "Είμαι από την Ουκρανία. (Я з України.)"
              ],
              [
                "Порівняння",
                "πιο μεγάλος από... (більший за...)"
              ],
              [
                "Матеріал",
                "φτιαγμένο από ξύλο (зроблено з дерева)"
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
                "Ήρθα από το αεροδρόμιο.",
                "Я приїхав(ла) з аеропорту."
              ],
              [
                "Είναι πιο ψηλός από εμένα.",
                "Він вищий за мене."
              ]
            ]
          }
        ],
        "titleEn": "The Preposition Από — A1"
      },
      {
        "id": "preposition-me-gia",
        "title": "Προθέσεις \"με\" και \"για\" — A2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Με (з, разом з, за допомогою) і για (для, заради, про) — обидва керують знахідним відмінком.",
            "en": {
              "text": "Με (with, by means of) and για (for, about) both govern the Accusative."
            }
          },
          {
            "type": "table",
            "title": "με / για",
            "rows": [
              [
                "πάω με το λεωφορείο",
                "їду автобусом"
              ],
              [
                "είμαι με τον φίλο μου",
                "я з моїм другом"
              ],
              [
                "αυτό είναι για σένα",
                "це для тебе"
              ],
              [
                "μιλάμε για τη δουλειά",
                "ми говоримо про роботу"
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
                "Ήρθα με το αυτοκίνητο.",
                "Я приїхав(ла) машиною."
              ],
              [
                "Ευχαριστώ για το δώρο.",
                "Дякую за подарунок."
              ]
            ]
          }
        ],
        "titleEn": "The Prepositions Με and Για — A2"
      },
      {
        "id": "preposition-other",
        "title": "Άλλες Προθέσεις (χωρίς, πριν, μετά, κατά) — B1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Інші вживані прийменники, усі керують знахідним відмінком: χωρίς (без), πριν (до/перед), μετά (після), κατά (проти/приблизно), μέχρι (до/поки).",
            "en": {
              "text": "Other common prepositions, all governing the Accusative: χωρίς (without), πριν (before), μετά (after), κατά (against/around), μέχρι (until)."
            }
          },
          {
            "type": "table",
            "title": "Прийменники",
            "rows": [
              [
                "χωρίς ζάχαρη",
                "без цукру"
              ],
              [
                "πριν το μεσημέρι",
                "до обіду"
              ],
              [
                "μετά το μάθημα",
                "після уроку"
              ],
              [
                "κατά τις 5",
                "приблизно о 5-й"
              ],
              [
                "μέχρι αύριο",
                "до завтра"
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
                "Θα σε δω μετά τη δουλειά.",
                "Побачимось після роботи."
              ],
              [
                "Δεν μπορώ να ζήσω χωρίς εσένα.",
                "Я не можу жити без тебе."
              ]
            ]
          }
        ],
        "titleEn": "Other Prepositions (Χωρίς, Πριν, Μετά, Κατά) — B1"
      },
      {
        "id": "word-order",
        "title": "Σειρά Λέξεων στην Πρόταση — A2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок — SVO (підмет-присудок-додаток), але через відмінки порядок доволі гнучкий і часто змінюється для акценту.",
            "en": {
              "text": "The basic order is SVO (subject-verb-object), but because of case endings, word order is fairly flexible and often changes for emphasis."
            }
          },
          {
            "type": "table",
            "title": "Гнучкий порядок",
            "rows": [
              [
                "Ο Γιάννης αγαπάει τη Μαρία.",
                "Яніс любить Марію. (нейтрально)"
              ],
              [
                "Τη Μαρία αγαπάει ο Γιάννης.",
                "Марію любить Яніс. (акцент на Марію)"
              ]
            ]
          },
          {
            "type": "note",
            "title": "Слабкі займенники",
            "text": "Слабкі займенники завжди йдуть безпосередньо перед дієсловом (крім наказового способу), незалежно від порядку решти речення.",
            "en": {
              "title": "Weak pronouns",
              "text": "Weak pronouns always come immediately before the verb (except in the imperative), regardless of the order of the rest of the sentence."
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
                "Σήμερα πάω στη δουλειά.",
                "Сьогодні я йду на роботу."
              ],
              [
                "Το βιβλίο το διάβασα χθες.",
                "Книгу я прочитав(ла) вчора."
              ]
            ]
          }
        ],
        "titleEn": "Word Order — A2"
      },
      {
        "id": "conjunctions-coordinating",
        "title": "Συμπλεκτικοί Σύνδεσμοι (και, ή, αλλά) — A1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Сурядні сполучники з'єднують рівнозначні слова чи речення.",
            "en": {
              "text": "Coordinating conjunctions connect equal words or clauses."
            }
          },
          {
            "type": "markers",
            "title": "Основні сурядні сполучники",
            "items": [
              "και (і)",
              "ή (або)",
              "αλλά (але)",
              "όμως (проте)",
              "λοιπόν (отже)",
              "ούτε...ούτε (ні...ні)"
            ],
            "en": {
              "title": "Main coordinating conjunctions"
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
                "Θέλω καφέ και νερό.",
                "Я хочу каву і воду."
              ],
              [
                "Είναι κουρασμένος αλλά χαρούμενος.",
                "Він втомлений, але щасливий."
              ]
            ]
          }
        ],
        "titleEn": "Coordinating Conjunctions (Και, Ή, Αλλά) — A1"
      },
      {
        "id": "conjunctions-subordinating",
        "title": "Υποτακτικοί Σύνδεσμοι (επειδή, αν, ότι) — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Підрядні сполучники вводять залежне речення: причини, умови, наслідку, часу тощо.",
            "en": {
              "text": "Subordinating conjunctions introduce a dependent clause: cause, condition, result, time, etc."
            }
          },
          {
            "type": "markers",
            "title": "Основні підрядні сполучники",
            "items": [
              "επειδή / γιατί (тому що)",
              "αν (якщо)",
              "ότι / πως (що)",
              "μόλις (щойно)",
              "ενώ (тоді як)",
              "παρόλο που (хоча)"
            ],
            "en": {
              "title": "Main subordinating conjunctions"
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
                "Δεν ήρθα επειδή ήμουν άρρωστος.",
                "Я не прийшов, бо був хворий."
              ],
              [
                "Αν βρέξει, δεν θα πάμε.",
                "Якщо піде дощ, ми не підемо."
              ],
              [
                "Ξέρω ότι είναι αλήθεια.",
                "Я знаю, що це правда."
              ]
            ]
          }
        ],
        "titleEn": "Subordinating Conjunctions (Επειδή, Αν, Ότι) — B1"
      },
      {
        "id": "negation",
        "title": "Άρνηση: \"δεν\" vs \"μην\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Δεν заперечує дійсний спосіб (звичайні речення), μην(ν) заперечує наказовий спосіб і конструкції з να/ας.",
            "en": {
              "text": "Δεν negates the indicative mood (ordinary statements), μην(ν) negates the imperative and constructions with να/ας."
            }
          },
          {
            "type": "table",
            "title": "δεν vs μην",
            "rows": [
              [
                "Δεν καταλαβαίνω.",
                "Я не розумію. (дійсний спосіб)"
              ],
              [
                "Μην φεύγεις!",
                "Не йди! (наказовий спосіб)"
              ],
              [
                "Θέλω να μην αργήσω.",
                "Я хочу не запізнитися. (з να)"
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
                "Δεν έχω χρόνο.",
                "У мене немає часу."
              ],
              [
                "Μην ανησυχείς.",
                "Не хвилюйся."
              ]
            ]
          }
        ],
        "titleEn": "Negation: Δεν vs Μην — A1"
      },
      {
        "id": "yes-no-questions",
        "title": "Ερωτήσεις Ναι/Όχι — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання без питального слова не потребують зміни порядку слів чи допоміжного дієслова — лише інтонація та знак питання «;» (грецька крапка з комою).",
            "en": {
              "text": "Yes/no questions require no word-order change or auxiliary verb — just intonation and the question mark «;» (the Greek semicolon)."
            }
          },
          {
            "type": "table",
            "title": "Стверджувальне речення → питання",
            "rows": [
              [
                "Μιλάς αγγλικά.",
                "Μιλάς αγγλικά;"
              ],
              [
                "Είναι εδώ.",
                "Είναι εδώ;"
              ]
            ]
          },
          {
            "type": "note",
            "title": "Відповіді",
            "text": "Ναι (так), όχι (ні), βεβαίως (звісно), ίσως (можливо).",
            "en": {
              "title": "Answers",
              "text": "Ναι (yes), όχι (no), βεβαίως (of course), ίσως (maybe)."
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
                "Μιλάς ελληνικά;",
                "Ти розмовляєш грецькою?"
              ],
              [
                "Έχεις αδέρφια;",
                "У тебе є брати/сестри?"
              ]
            ]
          }
        ],
        "titleEn": "Yes/No Questions — A1"
      },
      {
        "id": "question-words",
        "title": "Ερωτηματικές Λέξεις (πού, πότε, πώς, γιατί) — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питальні слова стоять на початку речення й завжди позначаються наголосом (на відміну від однозвучних відносних без наголосу).",
            "en": {
              "text": "Question words come at the start of the sentence and always carry a stress accent (unlike similar-sounding unstressed relative words)."
            }
          },
          {
            "type": "markers",
            "title": "Питальні слова",
            "items": [
              "πού; (де?)",
              "πότε; (коли?)",
              "πώς; (як?)",
              "γιατί; (чому?)",
              "πόσο; (скільки?)",
              "ποιος; (хто?)"
            ],
            "en": {
              "title": "Question words"
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
                "Πού μένεις;",
                "Де ти живеш?"
              ],
              [
                "Γιατί κλαις;",
                "Чому ти плачеш?"
              ],
              [
                "Πότε φεύγεις;",
                "Коли ти їдеш?"
              ]
            ]
          }
        ],
        "titleEn": "Question Words (Πού, Πότε, Πώς, Γιατί) — A1"
      },
      {
        "id": "cardinal-numbers",
        "title": "Απόλυτα Αριθμητικά — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Числа 1, 3, 4 та всі складені з ними (21, 134...) відмінюються за родом; решта незмінні.",
            "en": {
              "text": "The numbers 1, 3, 4 and any compound number containing them (21, 134...) decline for gender; the rest are invariable."
            }
          },
          {
            "type": "table",
            "title": "1–10",
            "rows": [
              [
                "ένας / μία / ένα",
                "1"
              ],
              [
                "δύο",
                "2"
              ],
              [
                "τρεις / τρία",
                "3"
              ],
              [
                "τέσσερις / τέσσερα",
                "4"
              ],
              [
                "πέντε, έξι, εφτά, οκτώ, εννιά, δέκα",
                "5–10"
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
                "Έχω δύο αδέρφια.",
                "У мене двоє братів/сестер."
              ],
              [
                "Είναι τρεις γυναίκες.",
                "Це три жінки."
              ]
            ]
          }
        ],
        "titleEn": "Cardinal Numbers — A1"
      },
      {
        "id": "ordinal-numbers",
        "title": "Τακτικά Αριθμητικά — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Порядкові числівники завжди відмінюються, як прикметники з трьома закінченнями (-ος/-η/-ο).",
            "en": {
              "text": "Ordinal numbers always decline, like three-ending adjectives (-ος/-η/-ο)."
            }
          },
          {
            "type": "table",
            "title": "1-й – 10-й",
            "rows": [
              [
                "πρώτος, -η, -ο",
                "1-й"
              ],
              [
                "δεύτερος",
                "2-й"
              ],
              [
                "τρίτος",
                "3-й"
              ],
              [
                "τέταρτος",
                "4-й"
              ],
              [
                "πέμπτος ... δέκατος",
                "5-й ... 10-й"
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
                "Μένω στον τρίτο όροφο.",
                "Я живу на третьому поверсі."
              ],
              [
                "Είναι η πρώτη φορά μου.",
                "Це мій перший раз."
              ]
            ]
          }
        ],
        "titleEn": "Ordinal Numbers — A2"
      },
      {
        "id": "days-of-week",
        "title": "Ημέρες της Εβδομάδας — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Дні тижня — жіночого роду (крім Σάββατο — середнього) і вживаються з прийменником την для позначення «у...».",
            "en": {
              "text": "Days of the week are feminine (except Σάββατο — neuter) and are used with την to mean 'on...'."
            }
          },
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "Δευτέρα",
                "понеділок"
              ],
              [
                "Τρίτη",
                "вівторок"
              ],
              [
                "Τετάρτη",
                "середа"
              ],
              [
                "Πέμπτη",
                "четвер"
              ],
              [
                "Παρασκευή",
                "п'ятниця"
              ],
              [
                "Σάββατο",
                "субота"
              ],
              [
                "Κυριακή",
                "неділя"
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
                "Θα σε δω την Τρίτη.",
                "Побачимось у вівторок."
              ],
              [
                "Δεν δουλεύω την Κυριακή.",
                "Я не працюю в неділю."
              ]
            ]
          }
        ],
        "titleEn": "Days of the Week — A1"
      },
      {
        "id": "months-dates",
        "title": "Μήνες και Ημερομηνίες — A2",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Місяці — чоловічого роду. Дата вказується порядковим числівником + артикль + місяць у родовому.",
            "en": {
              "text": "Months are masculine. Dates use an ordinal number + article + the month in the genitive."
            }
          },
          {
            "type": "table",
            "title": "Місяці й дата",
            "rows": [
              [
                "Ιανουάριος, Φεβρουάριος, Μάρτιος...",
                "січень, лютий, березень..."
              ],
              [
                "η πρώτη Ιανουαρίου",
                "перше січня"
              ],
              [
                "στις 5 Μαΐου",
                "5-го травня"
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
                "Γεννήθηκα τον Μάιο.",
                "Я народився(-лась) у травні."
              ],
              [
                "Σήμερα είναι 10 Ιουνίου.",
                "Сьогодні 10 червня."
              ]
            ]
          }
        ],
        "titleEn": "Months & Dates — A2"
      },
      {
        "id": "telling-time",
        "title": "Ώρα — A2",
        "emoji": "🕒",
        "sections": [
          {
            "type": "intro",
            "text": "Питання про час: Τι ώρα είναι; Відповідь будується словом ώρα + числівник, з παρά (без) для «до» і και (та) для «після».",
            "en": {
              "text": "To ask the time: Τι ώρα είναι; The answer uses ώρα + number, with παρά ('to') and και ('past')."
            }
          },
          {
            "type": "table",
            "title": "Вказування часу",
            "rows": [
              [
                "Είναι τρεις η ώρα.",
                "Третя година."
              ],
              [
                "Είναι τρεις και μισή.",
                "Пів на четверту (3:30)."
              ],
              [
                "Είναι τέσσερις παρά τέταρτο.",
                "Без чверті четверта (3:45)."
              ],
              [
                "Είναι τρεις και τέταρτο.",
                "Чверть на четверту (3:15)."
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
                "Τι ώρα είναι;",
                "Котра година?"
              ],
              [
                "Το μάθημα αρχίζει στις 9.",
                "Урок починається о 9-й."
              ]
            ]
          }
        ],
        "titleEn": "Telling Time — A2"
      },
      {
        "id": "diminutives",
        "title": "Υποκοριστικά (-άκι, -ούλα) — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Пестливі суфікси надають значення «маленький» або ласкавого відтінку. Найпоширеніший — середнього роду -άκι, для будь-якого слова.",
            "en": {
              "text": "Diminutive suffixes add a 'small' or affectionate meaning. The most common is neuter -άκι, usable with almost any word."
            }
          },
          {
            "type": "table",
            "title": "Пестливі суфікси",
            "rows": [
              [
                "σπίτι → σπιτάκι",
                "дім → будиночок"
              ],
              [
                "γάτα → γατούλα",
                "кіт → котик"
              ],
              [
                "Γιάννης → Γιαννάκης",
                "Яніс → Яннакіс (пестливо)"
              ],
              [
                "λίγο → λιγάκι",
                "трохи → трішки"
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
                "Έχω ένα σκυλάκι.",
                "У мене є песик."
              ],
              [
                "Πόσο γλυκό μωράκι!",
                "Яке миле немовлятко!"
              ]
            ]
          }
        ],
        "titleEn": "Diminutives (-άκι, -ούλα) — B1"
      },
      {
        "id": "reflexive-verbs",
        "title": "Αυτοπαθή Ρήματα — A2",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотні дієслова мають форму пасивного стану (-ομαι), коли дія повертається на підмет: πλένομαι (мию себе), ντύνομαι (одягаюсь).",
            "en": {
              "text": "Reflexive verbs take the passive-voice form (-ομαι) when the action reflects back on the subject: πλένομαι (I wash myself), ντύνομαι (I get dressed)."
            }
          },
          {
            "type": "formula",
            "title": "πλένομαι (митися)",
            "rows": [
              [
                "✅ (+)",
                "εγώ",
                "πλέν<u>ομαι</u>",
                "→ Πλένομαι το πρωί."
              ],
              [
                "✅ (+)",
                "εσύ",
                "πλέν<u>εσαι</u>",
                "→ Ντύνεσαι γρήγορα."
              ],
              [
                "✅ (+)",
                "αυτός/-ή/-ό",
                "πλέν<u>εται</u>",
                "→ Ξυρίζεται κάθε μέρα."
              ]
            ],
            "en": {
              "title": "πλένομαι (to wash oneself)"
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
                "Ξυπνάω και πλένομαι.",
                "Я прокидаюсь і вмиваюсь."
              ],
              [
                "Ντύνομαι γρήγορα το πρωί.",
                "Я швидко одягаюсь вранці."
              ]
            ]
          }
        ],
        "titleEn": "Reflexive Verbs — A2"
      },
      {
        "id": "impersonal-verbs",
        "title": "Απρόσωπα Ρήματα (πρέπει, φαίνεται, αξίζει) — A2",
        "emoji": "☁️",
        "sections": [
          {
            "type": "intro",
            "text": "Безособові дієслова вживаються лише в 3-й особі однини, без підмета-особи, зазвичай + να-конструкція.",
            "en": {
              "text": "Impersonal verbs are used only in the 3rd person singular, with no personal subject, usually followed by a να-clause."
            }
          },
          {
            "type": "table",
            "title": "Основні безособові дієслова",
            "rows": [
              [
                "πρέπει να...",
                "треба, щоб..."
              ],
              [
                "φαίνεται ότι...",
                "здається, що..."
              ],
              [
                "αξίζει να...",
                "варто..."
              ],
              [
                "χρειάζεται να...",
                "потрібно..."
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
                "Πρέπει να φύγω.",
                "Мені треба йти."
              ],
              [
                "Αξίζει να το δεις.",
                "Варто це побачити."
              ]
            ]
          }
        ],
        "titleEn": "Impersonal Verbs (Πρέπει, Φαίνεται, Αξίζει) — A2"
      },
      {
        "id": "modal-expressions",
        "title": "Τροπικές Εκφράσεις (μπορώ να, πρέπει να, θέλω να) — A1",
        "emoji": "🧠",
        "sections": [
          {
            "type": "intro",
            "text": "У грецькій немає окремих модальних дієслів, як can/must — замість цього дієслово + να + інше дієслово.",
            "en": {
              "text": "Greek has no separate modal verbs like can/must — instead it uses a verb + να + another verb."
            }
          },
          {
            "type": "table",
            "title": "Модальні конструкції",
            "rows": [
              [
                "μπορώ να...",
                "я можу..."
              ],
              [
                "πρέπει να...",
                "я мушу/маю..."
              ],
              [
                "θέλω να...",
                "я хочу..."
              ],
              [
                "ξέρω να...",
                "я вмію..."
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
                "Μπορώ να κολυμπήσω.",
                "Я вмію плавати."
              ],
              [
                "Πρέπει να δουλέψω.",
                "Мені треба працювати."
              ]
            ]
          }
        ],
        "titleEn": "Modal Expressions (Μπορώ Να, Πρέπει Να, Θέλω Να) — A1"
      },
      {
        "id": "active-participle",
        "title": "Ενεργητική Μετοχή (-οντας) — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Активний дієприслівник (незмінний, на -οντας) описує одночасну дію, аналог англійського «-ing».",
            "en": {
              "text": "The active gerund/participle (invariable, ending -οντας) describes a simultaneous action, similar to English '-ing'."
            }
          },
          {
            "type": "table",
            "title": "-οντας",
            "rows": [
              [
                "γράφοντας",
                "пишучи"
              ],
              [
                "τρώγοντας",
                "їдячи"
              ],
              [
                "περπατώντας",
                "ідучи пішки"
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
                "Τρώγοντας, μιλούσε συνέχεια.",
                "Їдячи, він увесь час говорив."
              ],
              [
                "Περπατώντας, σκεφτόμουν εσένα.",
                "Ідучи пішки, я думав(ла) про тебе."
              ]
            ]
          }
        ],
        "titleEn": "Active Participle (-Οντας) — B1"
      },
      {
        "id": "passive-participle",
        "title": "Παθητική Μετοχή (-μένος) — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний дієприкметник (-μένος/-μένη/-μένο) узгоджується з іменником як прикметник і виражає стан у результаті дії.",
            "en": {
              "text": "The passive participle (-μένος/-μένη/-μένο) agrees with the noun like an adjective and expresses a state resulting from an action."
            }
          },
          {
            "type": "table",
            "title": "-μένος",
            "rows": [
              [
                "κλείνω → κλειστός/κλεισμένος",
                "закритий"
              ],
              [
                "γράφω → γραμμένος",
                "написаний"
              ],
              [
                "κουράζομαι → κουρασμένος",
                "втомлений"
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
                "Είμαι κουρασμένος.",
                "Я втомлений."
              ],
              [
                "Η πόρτα είναι κλειστή.",
                "Двері зачинені."
              ]
            ]
          }
        ],
        "titleEn": "Passive Participle (-Μένος) — B1"
      },
      {
        "id": "genitive-possession",
        "title": "Κτήση με Γενική vs \"από\" — A2",
        "emoji": "🏠",
        "sections": [
          {
            "type": "intro",
            "text": "Належність зазвичай виражають родовим відмінком, а не прийменником «від» (який вживають лише для походження чи матеріалу).",
            "en": {
              "text": "Possession is usually expressed with the Genitive, not with 'from' (which is used only for origin or material)."
            }
          },
          {
            "type": "table",
            "title": "Родовий для належності",
            "rows": [
              [
                "το αμάξι του Νίκου",
                "машина Нікоса"
              ],
              [
                "η πόρτα του σπιτιού",
                "двері дому"
              ],
              [
                "φτιαγμένο από ξύλο",
                "зроблено з дерева (матеріал, не належність)"
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
                "Είναι το βιβλίο της αδερφής μου.",
                "Це книга моєї сестри."
              ]
            ]
          }
        ],
        "titleEn": "Possession with the Genitive vs Από — A2"
      },
      {
        "id": "formal-informal",
        "title": "Εσύ vs Εσείς — Ευγένεια — A1",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Εσύ — неформальне «ти», εσείς — ввічливе звертання до незнайомих/старших людей, а також звичайне множинне «ви».",
            "en": {
              "text": "Εσύ is the informal 'you', εσείς is the polite form for strangers/elders and the ordinary plural 'you'."
            }
          },
          {
            "type": "table",
            "title": "εσύ vs εσείς",
            "rows": [
              [
                "Πώς είσαι; (εσύ)",
                "Як справи? (неформально, до друга)"
              ],
              [
                "Πώς είστε; (εσείς)",
                "Як ви? (ввічливо/до групи)"
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
                "Μπορείτε να με βοηθήσετε;",
                "Чи можете ви мені допомогти? (ввічливо)"
              ]
            ]
          }
        ],
        "titleEn": "Εσύ vs Εσείς (Formality) — A1"
      },
      {
        "id": "existential-yparxei",
        "title": "Υπάρχει / Υπάρχουν — A2",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Υπάρχει (є, однина) / υπάρχουν (є, множина) — вказує на наявність чогось, аналог англійського «there is/are».",
            "en": {
              "text": "Υπάρχει (there is, singular) / υπάρχουν (there are, plural) indicates existence, like English 'there is/are'."
            }
          },
          {
            "type": "table",
            "title": "υπάρχει / υπάρχουν",
            "rows": [
              [
                "Υπάρχει ένα πρόβλημα.",
                "Є одна проблема."
              ],
              [
                "Υπάρχουν πολλά βιβλία.",
                "Є багато книг."
              ],
              [
                "Δεν υπάρχει τίποτα.",
                "Немає нічого."
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
                "Υπάρχει φαρμακείο εδώ κοντά;",
                "Тут поблизу є аптека?"
              ]
            ]
          }
        ],
        "titleEn": "Υπάρχει/Υπάρχουν (There Is/Are) — A2"
      },
      {
        "id": "adverbs",
        "title": "Επιρρήματα — A2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Більшість прислівників способу дії утворюють від прикметника заміною закінчення на -α.",
            "en": {
              "text": "Most manner adverbs are formed from the adjective by replacing the ending with -α."
            }
          },
          {
            "type": "table",
            "title": "Прикметник → прислівник",
            "rows": [
              [
                "καλός → καλά",
                "хороший → добре"
              ],
              [
                "γρήγορος → γρήγορα",
                "швидкий → швидко"
              ],
              [
                "εύκολος → εύκολα",
                "легкий → легко"
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
                "Μιλάει αργά.",
                "Він/вона говорить повільно."
              ],
              [
                "Το έκανε καλά.",
                "Він/вона зробив(ла) це добре."
              ]
            ]
          }
        ],
        "titleEn": "Adverbs — A2"
      },
      {
        "id": "quantifiers",
        "title": "Ποσοτικοί Προσδιορισμοί (πολύς, λίγος, αρκετός) — A2",
        "emoji": "⚖️",
        "sections": [
          {
            "type": "intro",
            "text": "Кількісні прикметники узгоджуються з іменником у роді/числі/відмінку, як звичайні прикметники, але πολύς має нерегулярне відмінювання.",
            "en": {
              "text": "Quantifiers agree with the noun in gender/number/case like ordinary adjectives, but πολύς has an irregular declension."
            }
          },
          {
            "type": "table",
            "title": "πολύς, λίγος, αρκετός",
            "rows": [
              [
                "πολύς, πολλή, πολύ (мн. πολλοί)",
                "багато"
              ],
              [
                "λίγος, λίγη, λίγο",
                "мало"
              ],
              [
                "αρκετός, αρκετή, αρκετό",
                "достатньо"
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
                "Έχω πολλή δουλειά.",
                "У мене багато роботи."
              ],
              [
                "Έχουμε αρκετό χρόνο.",
                "У нас достатньо часу."
              ]
            ]
          }
        ],
        "titleEn": "Quantifiers (Πολύς, Λίγος, Αρκετός) — A2"
      },
      {
        "id": "irregular-comparatives",
        "title": "Ανώμαλοι Βαθμοί Σύγκρισης — B1",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька дуже вживаних прикметників і прислівників мають нерегулярний вищий/найвищий ступінь, який слід запам'ятати окремо.",
            "en": {
              "text": "A few very common adjectives and adverbs have irregular comparative/superlative forms that must be memorized separately."
            }
          },
          {
            "type": "table",
            "title": "Неправильні ступені порівняння",
            "rows": [
              [
                "καλός → καλύτερος",
                "хороший → кращий"
              ],
              [
                "κακός → χειρότερος",
                "поганий → гірший"
              ],
              [
                "πολύς → περισσότερος",
                "багато → більше"
              ],
              [
                "λίγος → λιγότερος",
                "мало → менше"
              ],
              [
                "μεγάλος → μεγαλύτερος",
                "великий → більший"
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
                "Είναι καλύτερα τώρα.",
                "Зараз краще."
              ],
              [
                "Θέλω περισσότερο χρόνο.",
                "Я хочу більше часу."
              ]
            ]
          }
        ],
        "titleEn": "Irregular Comparatives — B1"
      },
      {
        "id": "common-idioms",
        "title": "Συνηθισμένες Εκφράσεις — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "intro",
            "text": "Стійкі вирази, які використовуються щодня і не завжди перекладаються дослівно.",
            "en": {
              "text": "Fixed expressions used every day, not always translated word-for-word."
            }
          },
          {
            "type": "table",
            "title": "Поширені вирази",
            "rows": [
              [
                "Τι κάνεις;",
                "Як справи? (букв. Що робиш?)"
              ],
              [
                "Καλή όρεξη!",
                "Смачного!"
              ],
              [
                "Καλή τύχη!",
                "Удачі!"
              ],
              [
                "Δεν πειράζει.",
                "Нічого страшного."
              ],
              [
                "Με τίποτα!",
                "Ні за що!"
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
                "Τι κάνεις; — Καλά, εσύ;",
                "Як справи? — Добре, а ти?"
              ]
            ]
          }
        ],
        "titleEn": "Common Expressions — B1"
      },
      {
        "id": "stress-accent",
        "title": "Τονισμός — Κανόνες Τόνου — A1",
        "emoji": "✏️",
        "sections": [
          {
            "type": "intro",
            "text": "Кожне грецьке слово з двох і більше складів має обов'язковий знак наголосу (τόνος) над голосною наголошеного складу — без нього слово вважається орфографічно неправильним.",
            "en": {
              "text": "Every Greek word of two or more syllables requires a stress mark (τόνος) over the vowel of the stressed syllable — without it, the word is considered misspelled."
            }
          },
          {
            "type": "table",
            "title": "Приклади наголосу",
            "rows": [
              [
                "άνθρωπος",
                "наголос на першому складі"
              ],
              [
                "καλός",
                "наголос на останньому складі"
              ],
              [
                "ζωή",
                "наголос на останньому складі"
              ]
            ]
          },
          {
            "type": "note",
            "title": "Наголос змінює значення",
            "text": "Пари слів можуть відрізнятися лише наголосом: πότε (коли?) vs ποτέ (ніколи); νομίζω тощо. Завжди перевіряйте наголос під час письма.",
            "en": {
              "title": "Stress changes meaning",
              "text": "Word pairs can differ only in stress: πότε (when?) vs ποτέ (never). Always check the stress when writing."
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
                "Πότε θα έρθεις;",
                "Коли ти прийдеш?"
              ],
              [
                "Δεν πάω ποτέ εκεί.",
                "Я ніколи туди не ходжу."
              ]
            ]
          }
        ],
        "titleEn": "Stress Accent Rules — A1"
      }
    ]
  },
  {
    "id": "exceptions",
    "title": "Виключення",
    "titleEn": "Exceptions",
    "emoji": "⚠️",
    "rules": [
      {
        "id": "irregular-verbs",
        "title": "Ανώμαλα Ρήματα — Συχνόχρηστα — A2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька найуживаніших дієслів мають нерегулярну основу Αόριστος, яку не можна вивести за загальними правилами — їх слід просто запам'ятати.",
            "en": {
              "text": "A few of the most common verbs have an irregular Aorist stem that cannot be derived by the general rules — they must simply be memorized."
            }
          },
          {
            "type": "table",
            "title": "Найпоширеніші нерегулярні дієслова",
            "rows": [
              [
                "λέω → είπα",
                "казати → сказав"
              ],
              [
                "βλέπω → είδα",
                "бачити → побачив"
              ],
              [
                "τρώω → έφαγα",
                "їсти → з'їв"
              ],
              [
                "πίνω → ήπια",
                "пити → випив"
              ],
              [
                "πάω → πήγα",
                "йти/їхати → пішов"
              ],
              [
                "παίρνω → πήρα",
                "брати → взяв"
              ],
              [
                "δίνω → έδωσα",
                "давати → дав"
              ],
              [
                "βρίσκω → βρήκα",
                "знаходити → знайшов"
              ],
              [
                "έρχομαι → ήρθα",
                "приходити → прийшов"
              ],
              [
                "είμαι → ήμουν",
                "бути → був"
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
                "Ήρθα χθες.",
                "Я прийшов(ла) вчора."
              ],
              [
                "Το είπε ξεκάθαρα.",
                "Він/вона сказав(ла) це чітко."
              ]
            ]
          }
        ],
        "titleEn": "Irregular Verbs — Common"
      },
      {
        "id": "irregular-plurals",
        "title": "Ανώμαλοι Πληθυντικοί Ουσιαστικών — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі іменники утворюють множину не за стандартною парадигмою свого закінчення — множину варто вивчати окремо.",
            "en": {
              "text": "Some nouns form their plural outside their ending's standard pattern — the plural should be learned separately."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярні множини",
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
                "το χέρι → τα χέρια",
                "рука → руки"
              ],
              [
                "το αυτί → τα αυτιά",
                "вухо → вуха"
              ],
              [
                "ο πατέρας → οι πατεράδες",
                "батько → батьки"
              ],
              [
                "το φως → τα φώτα",
                "світло → вогні"
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
                "Οι άντρες δουλεύουν εκεί.",
                "Чоловіки працюють там."
              ],
              [
                "Τα φώτα είναι αναμμένα.",
                "Вогні увімкнені."
              ]
            ]
          }
        ],
        "titleEn": "Irregular Noun Plurals — B1"
      },
      {
        "id": "spelling-rules",
        "title": "Ορθογραφικοί Κανόνες (γ/γκ, ι/η/υ, διπλά σύμφωνα) — B1",
        "emoji": "✏️",
        "sections": [
          {
            "type": "intro",
            "text": "У грецькій кілька звуків можна записати різними літерами — вибір літери фіксується орфографією слова й не завжди виводиться з вимови.",
            "en": {
              "text": "In Greek, several sounds can be written with different letters — the choice of letter is fixed by a word's spelling and cannot always be deduced from pronunciation."
            }
          },
          {
            "type": "table",
            "title": "Найчастіші орфографічні пастки",
            "rows": [
              [
                "ι / η / υ / ει / οι",
                "усі звучать як «і»: τι, ζωή, αυτό, είναι, ποιος"
              ],
              [
                "ε / αι",
                "звучать як «е»: πες, παίζει"
              ],
              [
                "ο / ω",
                "звучать як «о»: πότε, πώς"
              ],
              [
                "γκ / γγ (усередині слова)",
                "звук «ґ/нґ»: αγκαλιά, Αγγλία"
              ],
              [
                "μπ (на початку слова)",
                "звук «б»: μπαίνω"
              ],
              [
                "ντ (на початку слова)",
                "звук «д»: ντομάτα"
              ]
            ]
          },
          {
            "type": "tip",
            "title": "Порада",
            "text": "Оскільки написання не завжди відповідає вимові, найкраще запам'ятовувати правопис слова разом з його значенням, а не покладатися лише на звук.",
            "en": {
              "title": "Tip",
              "text": "Since spelling doesn't always match pronunciation, it's best to memorize a word's spelling together with its meaning, rather than relying on sound alone."
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
                "Πώς σε λένε;",
                "Як тебе звати?"
              ],
              [
                "Μπαίνω στο σπίτι.",
                "Я заходжу в дім."
              ]
            ]
          }
        ],
        "titleEn": "Spelling Pitfalls (γ/γκ, ι/η/υ, Double Consonants) — B1"
      }
    ]
  }
];
