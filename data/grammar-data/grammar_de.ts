// Vymova — data/grammar-data/grammar_de.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_DE: GrammarCategory[] = [
  {
    "id": "tenses",
    "title": "Часи та способи дієслова",
    "titleEn": "Tenses & Moods",
    "emoji": "🕐",
    "rules": [
      {
        "id": "praesens",
        "title": "Präsens — A1",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній час. Використовується для теперішніх дій, постійних фактів і навіть майбутнього (з вказівкою часу).",
            "en": {
              "text": "Present tense. Used for current actions, permanent facts, and even the future (with a time reference)."
            }
          },
          {
            "type": "formula",
            "title": "Дієвідмінювання (spielen)",
            "rows": [
              [
                "ich",
                "spiele"
              ],
              [
                "du",
                "spielst"
              ],
              [
                "er / sie / es",
                "spielt"
              ],
              [
                "wir",
                "spielen"
              ],
              [
                "ihr",
                "spielt"
              ],
              [
                "sie / Sie",
                "spielen"
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
                "Ich spiele Fußball.",
                "Я граю у футбол."
              ],
              [
                "Wir fahren morgen nach Berlin.",
                "Ми їдемо завтра до Берліна."
              ]
            ]
          }
        ],
        "titleEn": "Präsens (Present Tense) — A1"
      },
      {
        "id": "perfekt",
        "title": "Perfekt — A2",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Розмовний минулий час. Утворюється з haben/sein у теперішньому часі + Partizip II. Найчастіше вживається в усному мовленні.",
            "en": {
              "text": "The conversational past tense. Formed with haben/sein in the present tense + Partizip II. Most common in spoken German."
            }
          },
          {
            "type": "formula",
            "title": "Структура",
            "rows": [
              [
                "haben/sein + Partizip II",
                "Ich habe gespielt.",
                "Я грав."
              ],
              [
                "sein-дієслова (рух, зміна стану)",
                "Ich bin gegangen.",
                "Я пішов."
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
                "Ich habe das Buch gelesen.",
                "Я прочитав книгу."
              ],
              [
                "Sie ist nach Hause gefahren.",
                "Вона поїхала додому."
              ]
            ]
          }
        ],
        "titleEn": "Perfekt (Present Perfect) — A2"
      },
      {
        "id": "praeteritum",
        "title": "Präteritum — A2",
        "emoji": "📖",
        "sections": [
          {
            "type": "intro",
            "text": "Простий минулий час. Вживається переважно в письмовій мові, розповідях, а також завжди з haben, sein, модальними дієсловами.",
            "en": {
              "text": "The simple past tense. Used mainly in written narratives, and always with haben, sein and modal verbs."
            }
          },
          {
            "type": "formula",
            "title": "Дієвідмінювання (sagen)",
            "rows": [
              [
                "ich",
                "sagte"
              ],
              [
                "du",
                "sagtest"
              ],
              [
                "er / sie / es",
                "sagte"
              ],
              [
                "wir",
                "sagten"
              ],
              [
                "ihr",
                "sagtet"
              ],
              [
                "sie / Sie",
                "sagten"
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
                "Ich war gestern krank.",
                "Я вчора хворів."
              ],
              [
                "Er hatte keine Zeit.",
                "У нього не було часу."
              ]
            ]
          }
        ],
        "titleEn": "Präteritum (Simple Past) — A2"
      },
      {
        "id": "plusquamperfekt",
        "title": "Plusquamperfekt — B1",
        "emoji": "⏮️",
        "sections": [
          {
            "type": "intro",
            "text": "Передминулий час — дія, що відбулася раніше за іншу дію в минулому. Утворюється з haben/sein у Präteritum + Partizip II.",
            "en": {
              "text": "The past perfect — an action that happened before another past action. Formed with haben/sein in Präteritum + Partizip II."
            }
          },
          {
            "type": "formula",
            "title": "Структура",
            "rows": [
              [
                "hatte/war + Partizip II",
                "Ich hatte schon gegessen, als er kam.",
                "Я вже поїв, коли він прийшов."
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
                "Sie war schon weg, als ich anrief.",
                "Вона вже пішла, коли я подзвонив."
              ],
              [
                "Wir hatten das Projekt beendet, bevor die Frist kam.",
                "Ми завершили проєкт до настання дедлайну."
              ]
            ]
          }
        ],
        "titleEn": "Plusquamperfekt (Past Perfect) — B1"
      },
      {
        "id": "futur-1",
        "title": "Futur I — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час. Утворюється з werden + інфінітив. Часто замінюється на Präsens з вказівкою часу.",
            "en": {
              "text": "The future tense. Formed with werden + infinitive. Often replaced by the present tense with a time reference."
            }
          },
          {
            "type": "formula",
            "title": "Структура",
            "rows": [
              [
                "werden + Infinitiv",
                "Ich werde morgen kommen.",
                "Я прийду завтра."
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
                "Sie wird nächstes Jahr studieren.",
                "Вона вступить до університету наступного року."
              ],
              [
                "Wir werden das schaffen.",
                "Ми з цим впораємось."
              ]
            ]
          }
        ],
        "titleEn": "Futur I (Future Tense) — A2"
      },
      {
        "id": "futur-2",
        "title": "Futur II — B2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Передмайбутній час — дія, що завершиться до певного моменту в майбутньому, або припущення щодо минулого.",
            "en": {
              "text": "The future perfect — an action completed by a certain future point, or a guess about the past."
            }
          },
          {
            "type": "formula",
            "title": "Структура",
            "rows": [
              [
                "werden + Partizip II + haben/sein",
                "Bis morgen werde ich es geschafft haben.",
                "До завтра я вже впораюся з цим."
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
                "Er wird wohl den Zug verpasst haben.",
                "Він, мабуть, спізнився на потяг."
              ],
              [
                "Bis Freitag werden wir alles vorbereitet haben.",
                "До п'ятниці ми все підготуємо."
              ]
            ]
          }
        ],
        "titleEn": "Futur II (Future Perfect) — B2"
      },
      {
        "id": "imperativ",
        "title": "Imperativ — A1",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб — для прохань, порад і наказів. Форми відрізняються для du, ihr та Sie.",
            "en": {
              "text": "The imperative mood — for requests, advice and commands. The forms differ for du, ihr and Sie."
            }
          },
          {
            "type": "formula",
            "title": "Форми (kommen)",
            "rows": [
              [
                "du",
                "Komm!"
              ],
              [
                "ihr",
                "Kommt!"
              ],
              [
                "Sie",
                "Kommen Sie!"
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
                "Mach die Tür zu!",
                "Закрий двері!"
              ],
              [
                "Setzen Sie sich bitte.",
                "Сідайте, будь ласка."
              ]
            ]
          }
        ],
        "titleEn": "Imperativ (Imperative) — A1"
      },
      {
        "id": "konjunktiv-2-gegenwart",
        "title": "Konjunktiv II (Gegenwart) — B1",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб теперішнього часу — для нереальних умов, побажань і ввічливих прохань.",
            "en": {
              "text": "The present subjunctive — used for unreal conditions, wishes and polite requests."
            }
          },
          {
            "type": "formula",
            "title": "Структура",
            "rows": [
              [
                "würde + Infinitiv",
                "Ich würde gern kommen.",
                "Я б залюбки прийшов."
              ],
              [
                "wäre / hätte / könnte (сильні форми)",
                "Wenn ich Zeit hätte...",
                "Якби у мене був час..."
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
                "Wenn ich reich wäre, würde ich reisen.",
                "Якби я був багатим, я б подорожував."
              ],
              [
                "Könnten Sie mir bitte helfen?",
                "Чи не могли б ви мені допомогти?"
              ]
            ]
          }
        ],
        "titleEn": "Konjunktiv II — Present"
      },
      {
        "id": "konjunktiv-2-vergangenheit",
        "title": "Konjunktiv II (Vergangenheit) — B2",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб минулого часу — для нереальних умов і жалю щодо минулого. Утворюється з hätte/wäre + Partizip II.",
            "en": {
              "text": "The past subjunctive — used for unreal past conditions and regret. Formed with hätte/wäre + Partizip II."
            }
          },
          {
            "type": "formula",
            "title": "Структура",
            "rows": [
              [
                "hätte/wäre + Partizip II",
                "Ich hätte das nicht gesagt.",
                "Я б цього не сказав."
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
                "Wenn ich das gewusst hätte, wäre ich nicht gekommen.",
                "Якби я це знав, я б не прийшов."
              ],
              [
                "Wir wären fast zu spät gekommen.",
                "Ми ледь не запізнилися."
              ]
            ]
          }
        ],
        "titleEn": "Konjunktiv II — Past"
      },
      {
        "id": "konjunktiv-1",
        "title": "Konjunktiv I (indirekte Rede) — B2",
        "emoji": "💬",
        "sections": [
          {
            "type": "intro",
            "text": "Використовується переважно в непрямій мові (переказі чужих слів) у пресі та офіційних текстах.",
            "en": {
              "text": "Used mainly for reported speech in press and formal writing."
            }
          },
          {
            "type": "formula",
            "title": "Приклад форми (sein)",
            "rows": [
              [
                "er/sie/es",
                "sei"
              ],
              [
                "sie (Pl.)",
                "seien"
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
                "Er sagte, er sei krank.",
                "Він сказав, що хворий."
              ],
              [
                "Sie behauptet, sie habe es nicht gewusst.",
                "Вона стверджує, що не знала цього."
              ]
            ]
          }
        ],
        "titleEn": "Konjunktiv I (Reported Speech) — B2"
      },
      {
        "id": "passiv-vorgang",
        "title": "Passiv (Vorgangspassiv) — B1",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний стан процесу — коли важлива дія, а не хто її виконує. Утворюється з werden + Partizip II.",
            "en": {
              "text": "The passive of process — used when the action matters more than who performs it. Formed with werden + Partizip II."
            }
          },
          {
            "type": "formula",
            "title": "Структура",
            "rows": [
              [
                "werden + Partizip II",
                "Das Haus wird gebaut.",
                "Будинок будується."
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
                "Die Tür wurde geöffnet.",
                "Двері відчинили."
              ],
              [
                "Der Brief wird morgen geschickt.",
                "Лист відправлять завтра."
              ]
            ]
          }
        ],
        "titleEn": "Passive Voice (Vorgangspassiv) — B1"
      },
      {
        "id": "passiv-zustand",
        "title": "Zustandspassiv — B2",
        "emoji": "🚪",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний стан результату — описує стан, що виник після дії. Утворюється з sein + Partizip II.",
            "en": {
              "text": "The passive of state — describes the resulting state after an action. Formed with sein + Partizip II."
            }
          },
          {
            "type": "formula",
            "title": "Структура",
            "rows": [
              [
                "sein + Partizip II",
                "Die Tür ist geöffnet.",
                "Двері відчинені."
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
                "Das Geschäft ist geschlossen.",
                "Магазин зачинений."
              ],
              [
                "Der Tisch ist gedeckt.",
                "Стіл накритий."
              ]
            ]
          }
        ],
        "titleEn": "Stative Passive (Zustandspassiv) — B2"
      },
      {
        "id": "modalverben-perfekt",
        "title": "Modalverben im Perfekt — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "У Perfekt з модальним дієсловом та іншим дієсловом використовується подвійний інфінітив замість Partizip II.",
            "en": {
              "text": "In the Perfekt with a modal verb plus another verb, a double infinitive is used instead of Partizip II."
            }
          },
          {
            "type": "formula",
            "title": "Структура",
            "rows": [
              [
                "haben + Infinitiv + Modalverb (Infinitiv)",
                "Ich habe kommen müssen.",
                "Мені довелося прийти."
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
                "Er hat das nicht machen können.",
                "Він не зміг цього зробити."
              ],
              [
                "Wir haben früh aufstehen müssen.",
                "Нам довелося рано встати."
              ]
            ]
          }
        ],
        "titleEn": "Modal Verbs in the Perfekt — B2"
      }
    ]
  },
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "sein-haben",
        "title": "Sein vs Haben — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Sein (бути) та haben (мати) — два найважливіші дієслова в німецькій. Вони використовуються самостійно і як допоміжні дієслова для утворення інших часів.",
            "en": {
              "text": "Sein (to be) and haben (to have) are the two most important German verbs. They are used on their own and as auxiliary verbs for other tenses."
            }
          },
          {
            "type": "formula",
            "title": "Дієвідмінювання (теперішній час)",
            "rows": [
              [
                "ich",
                "bin",
                "habe"
              ],
              [
                "du",
                "bist",
                "hast"
              ],
              [
                "er / sie / es",
                "ist",
                "hat"
              ],
              [
                "wir",
                "sind",
                "haben"
              ],
              [
                "ihr",
                "seid",
                "habt"
              ],
              [
                "sie / Sie",
                "sind",
                "haben"
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
                "Ich bin Lehrer.",
                "Я вчитель."
              ],
              [
                "Er hat ein Auto.",
                "У нього є машина."
              ],
              [
                "Wir sind in Berlin.",
                "Ми в Берліні."
              ],
              [
                "Sie ist groß.",
                "Вона висока."
              ]
            ]
          }
        ],
        "titleEn": "Sein vs Haben (To Be vs To Have) — A1"
      },
      {
        "id": "articles",
        "title": "Артиклі der / die / das — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У німецькій кожен іменник має рід — чоловічий (der), жіночий (die) або середній (das). Рід потрібно запам'ятовувати разом зі словом.",
            "en": {
              "text": "Every German noun has a gender — masculine (der), feminine (die) or neuter (das). The gender must be memorised together with the word."
            }
          },
          {
            "type": "table",
            "title": "Означений і неозначений артиклі (Nominativ)",
            "rows": [
              [
                "чоловічий",
                "der Tisch",
                "ein Tisch"
              ],
              [
                "жіночий",
                "die Frau",
                "eine Frau"
              ],
              [
                "середній",
                "das Kind",
                "ein Kind"
              ],
              [
                "множина",
                "die Bücher",
                "— (без артикля)"
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
                "Der Tisch ist groß.",
                "Стіл великий."
              ],
              [
                "Die Frau ist nett.",
                "Жінка приємна."
              ],
              [
                "Das Kind spielt.",
                "Дитина грає."
              ],
              [
                "Ich habe ein Buch.",
                "У мене є книга."
              ]
            ]
          }
        ],
        "titleEn": "Articles Der/Die/Das — A1"
      }
    ]
  },
  {
    "id": "grammar",
    "title": "Граматика",
    "titleEn": "Grammar",
    "emoji": "📚",
    "rules": [
      {
        "id": "nominativ",
        "title": "Nominativ — A1",
        "emoji": "1️⃣",
        "sections": [
          {
            "type": "intro",
            "text": "Називний відмінок — відповідає на питання \"хто? що?\". Це відмінок підмета речення.",
            "en": {
              "text": "The nominative case — answers \"who? what?\". It is the case of the subject of the sentence."
            }
          },
          {
            "type": "table",
            "title": "Артиклі в Nominativ",
            "rows": [
              [
                "чоловічий",
                "der Mann",
                "ein Mann"
              ],
              [
                "жіночий",
                "die Frau",
                "eine Frau"
              ],
              [
                "середній",
                "das Kind",
                "ein Kind"
              ],
              [
                "множина",
                "die Kinder",
                "—"
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
                "Der Mann liest.",
                "Чоловік читає."
              ],
              [
                "Die Frau kocht.",
                "Жінка готує."
              ]
            ]
          }
        ],
        "titleEn": "Nominativ (Nominative Case) — A1"
      },
      {
        "id": "akkusativ",
        "title": "Akkusativ — A1",
        "emoji": "2️⃣",
        "sections": [
          {
            "type": "intro",
            "text": "Знахідний відмінок — відповідає на питання \"кого? що?\". Це відмінок прямого додатка.",
            "en": {
              "text": "The accusative case — answers \"whom? what?\". It is the case of the direct object."
            }
          },
          {
            "type": "table",
            "title": "Артиклі в Akkusativ",
            "rows": [
              [
                "чоловічий",
                "den Mann",
                "einen Mann"
              ],
              [
                "жіночий",
                "die Frau",
                "eine Frau"
              ],
              [
                "середній",
                "das Kind",
                "ein Kind"
              ],
              [
                "множина",
                "die Kinder",
                "—"
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
                "Ich sehe den Mann.",
                "Я бачу чоловіка."
              ],
              [
                "Sie kauft einen Apfel.",
                "Вона купує яблуко."
              ]
            ]
          }
        ],
        "titleEn": "Akkusativ (Accusative Case) — A1"
      },
      {
        "id": "dativ",
        "title": "Dativ — A1",
        "emoji": "3️⃣",
        "sections": [
          {
            "type": "intro",
            "text": "Давальний відмінок — відповідає на питання \"кому? чому?\". Це відмінок непрямого додатка.",
            "en": {
              "text": "The dative case — answers \"to whom? to what?\". It is the case of the indirect object."
            }
          },
          {
            "type": "table",
            "title": "Артиклі в Dativ",
            "rows": [
              [
                "чоловічий",
                "dem Mann",
                "einem Mann"
              ],
              [
                "жіночий",
                "der Frau",
                "einer Frau"
              ],
              [
                "середній",
                "dem Kind",
                "einem Kind"
              ],
              [
                "множина",
                "den Kindern",
                "—"
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
                "Ich gebe dem Mann das Buch.",
                "Я даю чоловікові книгу."
              ],
              [
                "Sie hilft der Frau.",
                "Вона допомагає жінці."
              ]
            ]
          }
        ],
        "titleEn": "Dativ (Dative Case) — A1"
      },
      {
        "id": "genitiv",
        "title": "Genitiv — B1",
        "emoji": "4️⃣",
        "sections": [
          {
            "type": "intro",
            "text": "Родовий відмінок — виражає належність, відповідає на питання \"кого? чого? чий?\". У розмовній мові часто замінюється на von + Dativ.",
            "en": {
              "text": "The genitive case — expresses possession, answers \"whose?\". In spoken German it is often replaced by von + dative."
            }
          },
          {
            "type": "table",
            "title": "Артиклі в Genitiv",
            "rows": [
              [
                "чоловічий",
                "des Mannes",
                "eines Mannes"
              ],
              [
                "жіночий",
                "der Frau",
                "einer Frau"
              ],
              [
                "середній",
                "des Kindes",
                "eines Kindes"
              ],
              [
                "множина",
                "der Kinder",
                "—"
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
                "Das ist das Auto des Mannes.",
                "Це машина чоловіка."
              ],
              [
                "Die Farbe der Blätter ändert sich.",
                "Колір листя змінюється."
              ]
            ]
          }
        ],
        "titleEn": "Genitiv (Genitive Case) — B1"
      },
      {
        "id": "personalpronomen",
        "title": "Особові займенники — A1",
        "emoji": "👤",
        "sections": [
          {
            "type": "intro",
            "text": "Особові займенники змінюються за відмінками так само, як іменники.",
            "en": {
              "text": "Personal pronouns decline by case just like nouns."
            }
          },
          {
            "type": "table",
            "title": "Nominativ / Akkusativ / Dativ",
            "rows": [
              [
                "ich",
                "mich",
                "mir"
              ],
              [
                "du",
                "dich",
                "dir"
              ],
              [
                "er/sie/es",
                "ihn/sie/es",
                "ihm/ihr/ihm"
              ],
              [
                "wir",
                "uns",
                "uns"
              ],
              [
                "ihr",
                "euch",
                "euch"
              ],
              [
                "sie/Sie",
                "sie/Sie",
                "ihnen/Ihnen"
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
                "Ich sehe ihn.",
                "Я його бачу."
              ],
              [
                "Sie gibt mir das Geld.",
                "Вона дає мені гроші."
              ]
            ]
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      },
      {
        "id": "possessivpronomen",
        "title": "Присвійні займенники — A1",
        "emoji": "🏠",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійні займенники (mein, dein, sein...) вказують на належність і відмінюються як неозначений артикль.",
            "en": {
              "text": "Possessive pronouns (mein, dein, sein...) show ownership and decline like the indefinite article."
            }
          },
          {
            "type": "table",
            "title": "Базові форми",
            "rows": [
              [
                "ich",
                "mein"
              ],
              [
                "du",
                "dein"
              ],
              [
                "er/es",
                "sein"
              ],
              [
                "sie",
                "ihr"
              ],
              [
                "wir",
                "unser"
              ],
              [
                "ihr",
                "euer"
              ],
              [
                "sie/Sie",
                "ihr/Ihr"
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
                "Das ist mein Buch.",
                "Це моя книга."
              ],
              [
                "Wo ist deine Tasche?",
                "Де твоя сумка?"
              ]
            ]
          }
        ],
        "titleEn": "Possessive Pronouns — A1"
      },
      {
        "id": "modalverben",
        "title": "Модальні дієслова — A2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Модальні дієслова (können, müssen, dürfen, wollen, sollen, mögen) виражають можливість, необхідність, дозвіл чи бажання й вживаються з інфінітивом без zu.",
            "en": {
              "text": "Modal verbs (können, müssen, dürfen, wollen, sollen, mögen) express ability, necessity, permission or desire, and take an infinitive without zu."
            }
          },
          {
            "type": "table",
            "title": "Значення",
            "rows": [
              [
                "können",
                "могти, вміти"
              ],
              [
                "müssen",
                "бути зобов'язаним"
              ],
              [
                "dürfen",
                "мати дозвіл"
              ],
              [
                "wollen",
                "хотіти"
              ],
              [
                "sollen",
                "бути повинним (за наказом)"
              ],
              [
                "mögen",
                "подобатися"
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
                "Ich kann schwimmen.",
                "Я вмію плавати."
              ],
              [
                "Du musst jetzt gehen.",
                "Тобі треба йти зараз."
              ]
            ]
          }
        ],
        "titleEn": "Modal Verbs — A2"
      },
      {
        "id": "adjektivdeklination",
        "title": "Відмінювання прикметників — B1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Закінчення прикметника залежить від відмінка, роду та від того, чи стоїть перед ним артикль.",
            "en": {
              "text": "The adjective ending depends on the case, gender, and whether an article precedes it."
            }
          },
          {
            "type": "table",
            "title": "Після означеного артикля (Nominativ)",
            "rows": [
              [
                "чоловічий",
                "der gute Mann"
              ],
              [
                "жіночий",
                "die gute Frau"
              ],
              [
                "середній",
                "das gute Kind"
              ],
              [
                "множина",
                "die guten Kinder"
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
                "Ich kaufe einen roten Apfel.",
                "Я купую червоне яблуко."
              ],
              [
                "Das ist ein interessantes Buch.",
                "Це цікава книга."
              ]
            ]
          }
        ],
        "titleEn": "Adjective Declension — B1"
      },
      {
        "id": "komparativ-superlativ",
        "title": "Ступені порівняння прикметників — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Вищий ступінь утворюється додаванням -er, найвищий — am + -sten.",
            "en": {
              "text": "The comparative is formed with -er, the superlative with am + -sten."
            }
          },
          {
            "type": "table",
            "title": "Приклад (schnell)",
            "rows": [
              [
                "звичайний",
                "schnell"
              ],
              [
                "вищий",
                "schneller"
              ],
              [
                "найвищий",
                "am schnellsten"
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
                "Er ist schneller als ich.",
                "Він швидший за мене."
              ],
              [
                "Das ist das beste Restaurant der Stadt.",
                "Це найкращий ресторан у місті."
              ]
            ]
          }
        ],
        "titleEn": "Comparative & Superlative — A2"
      },
      {
        "id": "praepositionen-akkusativ",
        "title": "Прийменники з Akkusativ — A2",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "Ці прийменники завжди вимагають Akkusativ: durch, für, gegen, ohne, um.",
            "en": {
              "text": "These prepositions always take the accusative: durch, für, gegen, ohne, um."
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
                "Das Geschenk ist für dich.",
                "Цей подарунок для тебе."
              ],
              [
                "Wir gehen ohne ihn.",
                "Ми йдемо без нього."
              ],
              [
                "Er läuft durch den Park.",
                "Він біжить через парк."
              ]
            ]
          }
        ],
        "titleEn": "Prepositions with Akkusativ — A2"
      },
      {
        "id": "praepositionen-dativ",
        "title": "Прийменники з Dativ — A2",
        "emoji": "⬅️",
        "sections": [
          {
            "type": "intro",
            "text": "Ці прийменники завжди вимагають Dativ: aus, bei, mit, nach, seit, von, zu.",
            "en": {
              "text": "These prepositions always take the dative: aus, bei, mit, nach, seit, von, zu."
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
                "Ich komme aus der Ukraine.",
                "Я з України."
              ],
              [
                "Sie fährt mit dem Bus.",
                "Вона їде автобусом."
              ],
              [
                "Wir wohnen seit einem Jahr hier.",
                "Ми живемо тут уже рік."
              ]
            ]
          }
        ],
        "titleEn": "Prepositions with Dativ — A2"
      },
      {
        "id": "wechselpraepositionen",
        "title": "Двосторонні прийменники (Wechselpräpositionen) — B1",
        "emoji": "↔️",
        "sections": [
          {
            "type": "intro",
            "text": "Ці дев'ять прийменників вимагають Akkusativ при русі (куди?) і Dativ при місцезнаходженні (де?): an, auf, hinter, in, neben, über, unter, vor, zwischen.",
            "en": {
              "text": "These nine prepositions take the accusative for movement (where to?) and the dative for location (where?): an, auf, hinter, in, neben, über, unter, vor, zwischen."
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
                "Ich lege das Buch auf den Tisch.",
                "Я кладу книгу на стіл. (Akkusativ — куди?)"
              ],
              [
                "Das Buch liegt auf dem Tisch.",
                "Книга лежить на столі. (Dativ — де?)"
              ]
            ]
          }
        ],
        "titleEn": "Two-Way Prepositions (Wechselpräpositionen) — B1"
      },
      {
        "id": "praepositionen-genitiv",
        "title": "Прийменники з Genitiv — B2",
        "emoji": "🔸",
        "sections": [
          {
            "type": "intro",
            "text": "Ці прийменники вимагають Genitiv: während, trotz, wegen, statt (у розмовній мові часто з Dativ).",
            "en": {
              "text": "These prepositions take the genitive: während, trotz, wegen, statt (often used with the dative in spoken German)."
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
                "Wegen des Regens bleiben wir zu Hause.",
                "Через дощ ми залишаємось удома."
              ],
              [
                "Trotz der Kälte ging sie spazieren.",
                "Незважаючи на холод, вона пішла на прогулянку."
              ]
            ]
          }
        ],
        "titleEn": "Prepositions with Genitiv — B2"
      },
      {
        "id": "woertfolge-hauptsatz",
        "title": "Порядок слів у головному реченні — A1",
        "emoji": "📏",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово в головному реченні завжди стоїть на другому місці (правило \"Verb-Zweit\").",
            "en": {
              "text": "The verb in a main clause is always in second position (the \"verb-second\" rule)."
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
                "Ich gehe heute ins Kino.",
                "Я йду сьогодні в кіно."
              ],
              [
                "Heute gehe ich ins Kino.",
                "Сьогодні я йду в кіно. (дієслово все одно на 2-му місці)"
              ]
            ]
          }
        ],
        "titleEn": "Word Order in Main Clauses — A1"
      },
      {
        "id": "woertfolge-nebensatz",
        "title": "Порядок слів у підрядному реченні — A2",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "У підрядному реченні дієслово переноситься в кінець.",
            "en": {
              "text": "In a subordinate clause, the conjugated verb moves to the end."
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
                "Ich weiß, dass er krank ist.",
                "Я знаю, що він хворий."
              ],
              [
                "Sie bleibt zu Hause, weil es regnet.",
                "Вона залишається вдома, бо йде дощ."
              ]
            ]
          }
        ],
        "titleEn": "Word Order in Subordinate Clauses — A2"
      },
      {
        "id": "konjunktionen-koordinierend",
        "title": "Сурядні сполучники — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Сурядні сполучники (und, aber, oder, denn, sondern) не змінюють порядок слів у реченні.",
            "en": {
              "text": "Coordinating conjunctions (und, aber, oder, denn, sondern) do not change the word order."
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
                "Ich koche, und er deckt den Tisch.",
                "Я готую, а він накриває на стіл."
              ],
              [
                "Sie ist müde, aber sie arbeitet weiter.",
                "Вона втомлена, але продовжує працювати."
              ]
            ]
          }
        ],
        "titleEn": "Coordinating Conjunctions — A2"
      },
      {
        "id": "konjunktionen-subordinierend",
        "title": "Підрядні сполучники — B1",
        "emoji": "🧷",
        "sections": [
          {
            "type": "intro",
            "text": "Підрядні сполучники (weil, dass, obwohl, wenn, als) відправляють дієслово в кінець речення.",
            "en": {
              "text": "Subordinating conjunctions (weil, dass, obwohl, wenn, als) send the verb to the end of the clause."
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
                "Obwohl es regnet, gehen wir spazieren.",
                "Хоча йде дощ, ми йдемо на прогулянку."
              ],
              [
                "Als ich klein war, wohnte ich in Kyjiw.",
                "Коли я був маленьким, я жив у Києві."
              ]
            ]
          }
        ],
        "titleEn": "Subordinating Conjunctions — B1"
      },
      {
        "id": "relativsaetze",
        "title": "Відносні речення — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Відносні займенники (der, die, das) вводять підрядні означальні речення й узгоджуються з іменником у роді/числі, а відмінок беруть із власної ролі в реченні.",
            "en": {
              "text": "Relative pronouns (der, die, das) introduce relative clauses, agreeing in gender/number with the noun, and taking their case from their role in the clause."
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
                "Der Mann, der dort steht, ist mein Lehrer.",
                "Чоловік, що там стоїть, — мій вчитель."
              ],
              [
                "Das ist die Frau, die ich gestern getroffen habe.",
                "Це жінка, яку я зустрів учора."
              ]
            ]
          }
        ],
        "titleEn": "Relative Clauses — B1"
      },
      {
        "id": "fragewoerter",
        "title": "Питальні слова — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питальні слова (wer, was, wo, wann, warum, wie) ставляться на перше місце в реченні, дієслово — на друге.",
            "en": {
              "text": "Question words (wer, was, wo, wann, warum, wie) come first, with the verb in second position."
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
                "Wo wohnst du?",
                "Де ти живеш?"
              ],
              [
                "Warum lernst du Deutsch?",
                "Чому ти вчиш німецьку?"
              ]
            ]
          }
        ],
        "titleEn": "Question Words — A1"
      },
      {
        "id": "ja-nein-fragen",
        "title": "Так/ні питання — A1",
        "emoji": "✋",
        "sections": [
          {
            "type": "intro",
            "text": "У загальних питаннях дієслово ставиться на перше місце.",
            "en": {
              "text": "In yes/no questions, the verb comes first."
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
                "Kommst du morgen?",
                "Ти прийдеш завтра?"
              ],
              [
                "Hast du Zeit?",
                "У тебе є час?"
              ]
            ]
          }
        ],
        "titleEn": "Yes/No Questions — A1"
      },
      {
        "id": "verneinung",
        "title": "Заперечення (nicht/kein) — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Kein заперечує іменник з неозначеним артиклем, nicht заперечує дієслово, прикметник чи все речення.",
            "en": {
              "text": "Kein negates a noun with an indefinite article, nicht negates a verb, adjective, or the whole sentence."
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
                "Ich habe kein Auto.",
                "У мене немає машини."
              ],
              [
                "Ich verstehe das nicht.",
                "Я цього не розумію."
              ]
            ]
          }
        ],
        "titleEn": "Negation (Nicht/Kein) — A1"
      },
      {
        "id": "reflexivverben",
        "title": "Зворотні дієслова — A2",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотні дієслова (sich freuen, sich waschen) вживаються зі зворотним займенником, який узгоджується з підметом.",
            "en": {
              "text": "Reflexive verbs (sich freuen, sich waschen) are used with a reflexive pronoun that agrees with the subject."
            }
          },
          {
            "type": "table",
            "title": "Зворотні займенники (Akkusativ)",
            "rows": [
              [
                "ich",
                "mich"
              ],
              [
                "du",
                "dich"
              ],
              [
                "er/sie/es",
                "sich"
              ],
              [
                "wir",
                "uns"
              ],
              [
                "ihr",
                "euch"
              ],
              [
                "sie/Sie",
                "sich"
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
                "Ich freue mich auf die Ferien.",
                "Я тішуся з приводу канікул."
              ],
              [
                "Er wäscht sich jeden Morgen.",
                "Він миється щоранку."
              ]
            ]
          }
        ],
        "titleEn": "Reflexive Verbs — A2"
      },
      {
        "id": "trennbare-verben-intro",
        "title": "Відокремлювані префікси дієслів — A2",
        "emoji": "✂️",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі префікси (an-, auf-, aus-, mit-, weg-...) відокремлюються від дієслова і йдуть у кінець речення в Präsens/Präteritum.",
            "en": {
              "text": "Some prefixes (an-, auf-, aus-, mit-, weg-...) separate from the verb and move to the end of the sentence in Präsens/Präteritum."
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
                "Ich stehe um sieben Uhr auf.",
                "Я встаю о сьомій годині."
              ],
              [
                "Er ruft mich später an.",
                "Він зателефонує мені пізніше."
              ]
            ]
          }
        ],
        "titleEn": "Separable Verb Prefixes — A2"
      },
      {
        "id": "untrennbare-verben",
        "title": "Невідокремлювані префікси дієслів — B1",
        "emoji": "🔒",
        "sections": [
          {
            "type": "intro",
            "text": "Префікси be-, ge-, er-, ver-, zer-, ent-, emp-, miss- ніколи не відокремлюються від дієслова.",
            "en": {
              "text": "The prefixes be-, ge-, er-, ver-, zer-, ent-, emp-, miss- never separate from the verb."
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
                "Sie verstehen den Text.",
                "Вони розуміють текст."
              ],
              [
                "Ich besuche meine Oma.",
                "Я відвідую бабусю."
              ]
            ]
          }
        ],
        "titleEn": "Inseparable Verb Prefixes — B1"
      },
      {
        "id": "nomen-plural",
        "title": "Множина іменників — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина в німецькій утворюється по-різному: -e, -er, -(e)n, -s, або без закінчення. Її потрібно запам'ятовувати разом зі словом.",
            "en": {
              "text": "German plurals form in several ways: -e, -er, -(e)n, -s, or no ending. They must be memorised with the word."
            }
          },
          {
            "type": "table",
            "title": "Приклади типів множини",
            "rows": [
              [
                "der Tisch → die Tische",
                "-e"
              ],
              [
                "das Kind → die Kinder",
                "-er"
              ],
              [
                "die Frau → die Frauen",
                "-en"
              ],
              [
                "das Auto → die Autos",
                "-s"
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
                "Ich habe zwei Bücher.",
                "У мене дві книги."
              ],
              [
                "Die Kinder spielen im Garten.",
                "Діти грають у саду."
              ]
            ]
          }
        ],
        "titleEn": "Noun Plurals — A1"
      },
      {
        "id": "nomen-genus",
        "title": "Рід іменників — A1",
        "emoji": "⚧️",
        "sections": [
          {
            "type": "intro",
            "text": "Рід іменника не завжди передбачуваний, але є кілька корисних правил за закінченням слова.",
            "en": {
              "text": "Noun gender is not always predictable, but there are several useful rules based on word endings."
            }
          },
          {
            "type": "table",
            "title": "Корисні підказки",
            "rows": [
              [
                "-ung, -heit, -keit, -schaft → жіночий",
                "die Zeitung, die Freiheit"
              ],
              [
                "-chen, -lein → середній",
                "das Mädchen"
              ],
              [
                "-er (люди) → чоловічий",
                "der Lehrer"
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
                "die Freiheit ist wichtig.",
                "Свобода важлива."
              ],
              [
                "Das Mädchen liest ein Buch.",
                "Дівчинка читає книгу."
              ]
            ]
          }
        ],
        "titleEn": "Noun Gender — A1"
      },
      {
        "id": "zusammengesetzte-nomen",
        "title": "Складні іменники (Komposita) — A2",
        "emoji": "🧱",
        "sections": [
          {
            "type": "intro",
            "text": "Німецькі складні іменники утворюються поєднанням кількох слів в одне; рід визначає останнє слово.",
            "en": {
              "text": "German compound nouns are formed by joining several words into one; the gender is determined by the last word."
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
                "die Hand + der Schuh → der Handschuh",
                "рукавичка"
              ],
              [
                "das Haus + die Tür → die Haustür",
                "вхідні двері"
              ]
            ]
          }
        ],
        "titleEn": "Compound Nouns (Komposita) — A2"
      },
      {
        "id": "da-wo-composita",
        "title": "da-/wo- складні слова — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Da- + прийменник замінює займенник, коли йдеться про неживий предмет (damit, davon). Wo- + прийменник використовується в питаннях (womit, wovon).",
            "en": {
              "text": "Da- + preposition replaces a pronoun when referring to a thing (damit, davon). Wo- + preposition is used in questions (womit, wovon)."
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
                "Womit schreibst du? — Ich schreibe damit.",
                "Чим ти пишеш? — Я пишу цим."
              ],
              [
                "Wovon sprichst du?",
                "Про що ти говориш?"
              ]
            ]
          }
        ],
        "titleEn": "Da-/Wo- Compounds — B1"
      },
      {
        "id": "zahlen",
        "title": "Числівники — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Кількісні числівники від 21 до 99 читаються \"у зворотному порядку\": спочатку одиниці, потім десятки через und.",
            "en": {
              "text": "Cardinal numbers from 21 to 99 are read \"in reverse\": units first, then tens, joined by und."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "21",
                "einundzwanzig"
              ],
              [
                "34",
                "vierunddreißig"
              ],
              [
                "100",
                "hundert"
              ],
              [
                "1000",
                "tausend"
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
                "Ich bin fünfundzwanzig Jahre alt.",
                "Мені двадцять п'ять років."
              ]
            ]
          }
        ],
        "titleEn": "Cardinal Numbers — A1"
      },
      {
        "id": "ordinalzahlen",
        "title": "Порядкові числівники — A1",
        "emoji": "🥇",
        "sections": [
          {
            "type": "intro",
            "text": "Порядкові числівники утворюються з -te (2–19) або -ste (з 20) і відмінюються як прикметники.",
            "en": {
              "text": "Ordinal numbers are formed with -te (2–19) or -ste (from 20) and decline like adjectives."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "1.",
                "erste"
              ],
              [
                "3.",
                "dritte"
              ],
              [
                "7.",
                "siebte"
              ],
              [
                "20.",
                "zwanzigste"
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
                "Heute ist der erste Mai.",
                "Сьогодні перше травня."
              ]
            ]
          }
        ],
        "titleEn": "Ordinal Numbers — A1"
      },
      {
        "id": "uhrzeit",
        "title": "Час доби (Uhrzeit) — A1",
        "emoji": "🕐",
        "sections": [
          {
            "type": "intro",
            "text": "Час можна називати офіційно (24-годинний формат) або розмовно, з viertel/halb.",
            "en": {
              "text": "Time can be told officially (24-hour format) or colloquially, using viertel/halb."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "9:00",
                "neun Uhr"
              ],
              [
                "9:15",
                "Viertel nach neun"
              ],
              [
                "9:30",
                "halb zehn"
              ],
              [
                "9:45",
                "Viertel vor zehn"
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
                "Es ist halb acht.",
                "Зараз пів на восьму."
              ]
            ]
          }
        ],
        "titleEn": "Time of Day (Uhrzeit) — A1"
      },
      {
        "id": "datum",
        "title": "Дата — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Дата вказується порядковим числівником у Dativ з прийменником am.",
            "en": {
              "text": "The date is given with an ordinal number in the dative, using the preposition am."
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
                "Ich habe am dritten Mai Geburtstag.",
                "У мене день народження третього травня."
              ],
              [
                "Wir treffen uns am zwanzigsten Juni.",
                "Ми зустрічаємось двадцятого червня."
              ]
            ]
          }
        ],
        "titleEn": "Date — A1"
      },
      {
        "id": "modalpartikeln",
        "title": "Модальні частки — B1",
        "emoji": "✨",
        "sections": [
          {
            "type": "intro",
            "text": "Частки doch, mal, ja, eben, halt надають реченню відтінку емоції чи ставлення й не мають прямого перекладу.",
            "en": {
              "text": "Particles like doch, mal, ja, eben, halt add nuance or attitude to a sentence and have no direct translation."
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
                "Komm doch mit!",
                "Та ходімо ж разом! (заохочення)"
              ],
              [
                "Das ist ja toll!",
                "Це ж чудово! (здивування)"
              ]
            ]
          }
        ],
        "titleEn": "Modal Particles — B1"
      },
      {
        "id": "konjunktiv-hoeflichkeit",
        "title": "Ввічливі прохання (Konjunktiv II) — A2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Konjunktiv II робить прохання чи запитання ввічливішим, ніж пряма форма Präsens.",
            "en": {
              "text": "Konjunktiv II makes a request or question more polite than the direct present-tense form."
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
                "Könntest du mir helfen?",
                "Чи не міг би ти мені допомогти?"
              ],
              [
                "Ich hätte gern einen Kaffee.",
                "Я б хотів (замовити) каву."
              ]
            ]
          }
        ],
        "titleEn": "Polite Requests (Konjunktiv II) — A2"
      },
      {
        "id": "infinitiv-mit-zu",
        "title": "Інфінітив з zu — B1",
        "emoji": "➕",
        "sections": [
          {
            "type": "intro",
            "text": "Після більшості дієслів (крім модальних) другий інфінітив вживається з zu.",
            "en": {
              "text": "After most verbs (except modals), a second infinitive is used with zu."
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
                "Ich versuche, früh aufzustehen.",
                "Я намагаюсь рано вставати."
              ],
              [
                "Es ist wichtig, Deutsch zu lernen.",
                "Важливо вивчати німецьку."
              ]
            ]
          }
        ],
        "titleEn": "Infinitive with Zu — B1"
      },
      {
        "id": "um-zu-damit",
        "title": "um...zu / damit — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Um...zu вживається, коли підмет обох дій однаковий; damit — коли підмети різні.",
            "en": {
              "text": "Um...zu is used when both clauses share the same subject; damit is used when the subjects differ."
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
                "Ich lerne, um die Prüfung zu bestehen.",
                "Я вчуся, щоб скласти іспит."
              ],
              [
                "Ich erkläre es dir, damit du es verstehst.",
                "Я пояснюю тобі це, щоб ти зрозумів."
              ]
            ]
          }
        ],
        "titleEn": "Um...Zu / Damit (Purpose) — B1"
      },
      {
        "id": "lassen-konstruktion",
        "title": "Конструкція lassen — B1",
        "emoji": "🛠️",
        "sections": [
          {
            "type": "intro",
            "text": "Lassen + інфінітив означає \"дозволяти\" або \"доручати комусь зробити щось\".",
            "en": {
              "text": "Lassen + infinitive means \"to allow\" or \"to have someone do something\"."
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
                "Ich lasse mein Auto reparieren.",
                "Я віддаю машину в ремонт (доручаю комусь відремонтувати)."
              ],
              [
                "Lass mich in Ruhe!",
                "Залиши мене в спокої!"
              ]
            ]
          }
        ],
        "titleEn": "The Lassen Construction — B1"
      },
      {
        "id": "es-gibt",
        "title": "Конструкція es gibt — A1",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Es gibt (є, існує) завжди вживається з Akkusativ і однаково для однини й множини.",
            "en": {
              "text": "Es gibt (there is/are) is always followed by the accusative, and is the same for singular and plural."
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
                "Es gibt hier einen guten Supermarkt.",
                "Тут є хороший супермаркет."
              ],
              [
                "Es gibt viele Probleme.",
                "Є багато проблем."
              ]
            ]
          }
        ],
        "titleEn": "The Construction Es Gibt — A1"
      },
      {
        "id": "adjektive-praedikativ-attributiv",
        "title": "Прикметники: предикативні vs атрибутивні — A2",
        "emoji": "🖌️",
        "sections": [
          {
            "type": "intro",
            "text": "Предикативний прикметник (після sein/werden) не відмінюється; атрибутивний (перед іменником) відмінюється.",
            "en": {
              "text": "A predicative adjective (after sein/werden) is not declined; an attributive one (before a noun) is declined."
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
                "Das Auto ist neu.",
                "Машина нова. (предикативний, без закінчення)"
              ],
              [
                "Das ist ein neues Auto.",
                "Це нова машина. (атрибутивний, з закінченням)"
              ]
            ]
          }
        ],
        "titleEn": "Predicative vs Attributive Adjectives — A2"
      },
      {
        "id": "adverbien",
        "title": "Прислівники — A2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Німецькі прислівники зазвичай мають ту саму форму, що й прикметники, і не відмінюються.",
            "en": {
              "text": "German adverbs usually have the same form as adjectives and are not declined."
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
                "Sie singt schön.",
                "Вона гарно співає."
              ],
              [
                "Er fährt schnell.",
                "Він швидко їде."
              ]
            ]
          }
        ],
        "titleEn": "Adverbs — A2"
      },
      {
        "id": "steigerung-unregelmaessig",
        "title": "Неправильні ступені порівняння — A2",
        "emoji": "⚡",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі прикметники утворюють ступені порівняння нерегулярно.",
            "en": {
              "text": "Some adjectives form comparison degrees irregularly."
            }
          },
          {
            "type": "table",
            "title": "Найважливіші винятки",
            "rows": [
              [
                "gut",
                "besser",
                "am besten"
              ],
              [
                "viel",
                "mehr",
                "am meisten"
              ],
              [
                "gern",
                "lieber",
                "am liebsten"
              ],
              [
                "hoch",
                "höher",
                "am höchsten"
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
                "Ich mag Tee, aber ich mag Kaffee lieber.",
                "Я люблю чай, але каву люблю більше."
              ]
            ]
          }
        ],
        "titleEn": "Irregular Comparatives — A2"
      },
      {
        "id": "genitiv-vs-von",
        "title": "Genitiv vs von + Dativ — B1",
        "emoji": "⚖️",
        "sections": [
          {
            "type": "intro",
            "text": "У розмовній мові Genitiv часто замінюється конструкцією von + Dativ.",
            "en": {
              "text": "In spoken German, the genitive is often replaced by von + dative."
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
                "das Auto des Mannes (Genitiv)",
                "машина чоловіка"
              ],
              [
                "das Auto von dem Mann (розмовне)",
                "машина того чоловіка"
              ]
            ]
          }
        ],
        "titleEn": "Genitiv vs Von + Dativ — B1"
      },
      {
        "id": "indirekte-fragesaetze",
        "title": "Непрямі питання — B1",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "У непрямих питаннях дієслово переноситься в кінець речення, як у підрядному.",
            "en": {
              "text": "In indirect questions the verb moves to the end of the clause, as in a subordinate clause."
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
                "Ich weiß nicht, wo er wohnt.",
                "Я не знаю, де він живе."
              ],
              [
                "Sie fragt, ob ich Zeit habe.",
                "Вона питає, чи є в мене час."
              ]
            ]
          }
        ],
        "titleEn": "Indirect Questions — B1"
      },
      {
        "id": "konjunktiv-wuensche",
        "title": "Побажання (Ich wünschte...) — B2",
        "emoji": "🌠",
        "sections": [
          {
            "type": "intro",
            "text": "Konjunktiv II з wenn nur / ich wünschte виражає жаль або нереальне побажання.",
            "en": {
              "text": "Konjunktiv II with wenn nur / ich wünschte expresses regret or an unreal wish."
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
                "Ich wünschte, ich hätte mehr Zeit.",
                "Хотів би я мати більше часу."
              ],
              [
                "Wenn ich nur früher angefangen hätte!",
                "Якби ж я почав раніше!"
              ]
            ]
          }
        ],
        "titleEn": "Wishes (Ich Wünschte...) — B2"
      },
      {
        "id": "partizip-1-2",
        "title": "Partizip I та II як прикметники — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Partizip I (-end) означає дію, що триває; Partizip II означає завершену дію чи пасивний стан.",
            "en": {
              "text": "Partizip I (-end) denotes an ongoing action; Partizip II denotes a completed action or passive state."
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
                "das schlafende Kind",
                "дитина, що спить"
              ],
              [
                "das gekochte Ei",
                "зварене яйце"
              ]
            ]
          }
        ],
        "titleEn": "Partizip I & II as Adjectives — B1"
      },
      {
        "id": "erweitertes-partizip",
        "title": "Розширена дієприкметникова конструкція — C1",
        "emoji": "🧠",
        "sections": [
          {
            "type": "intro",
            "text": "Типова для офіційного письма конструкція, де дієприкметник з додатковими словами стоїть перед іменником замість відносного речення.",
            "en": {
              "text": "A construction typical of formal writing where a participle with additional words stands before the noun instead of a relative clause."
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
                "der gestern angekommene Zug",
                "потяг, що прибув учора"
              ],
              [
                "die von der Regierung geplante Reform",
                "реформа, запланована урядом"
              ]
            ]
          }
        ],
        "titleEn": "Extended Participle Construction — C1"
      },
      {
        "id": "nominalisierung",
        "title": "Номіналізація дієслів — B2",
        "emoji": "🏛️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслова можна перетворити на іменник за допомогою das + інфінітив або суфіксів -ung, -heit.",
            "en": {
              "text": "Verbs can be turned into nouns using das + infinitive or suffixes such as -ung, -heit."
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
                "das Lesen",
                "читання"
              ],
              [
                "die Entscheidung (entscheiden)",
                "рішення"
              ]
            ]
          }
        ],
        "titleEn": "Nominalization of Verbs — B2"
      },
      {
        "id": "satzklammer",
        "title": "Рамкова конструкція речення (Satzklammer) — B1",
        "emoji": "🖇️",
        "sections": [
          {
            "type": "intro",
            "text": "Змінна частина дієслова стоїть на другому місці, а незмінна (частка, інфінітив, Partizip II) — у кінці, утворюючи \"рамку\".",
            "en": {
              "text": "The finite verb part stands in second position, and the non-finite part (particle, infinitive, Partizip II) goes to the end, forming a \"frame\"."
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
                "Ich habe das Buch gestern gelesen.",
                "Я прочитав книгу вчора."
              ],
              [
                "Er ruft seine Mutter oft an.",
                "Він часто дзвонить своїй матері."
              ]
            ]
          }
        ],
        "titleEn": "The Sentence Bracket (Satzklammer) — B1"
      },
      {
        "id": "stellung-objekte",
        "title": "Порядок додатків (Akkusativ vs Dativ) — B1",
        "emoji": "↕️",
        "sections": [
          {
            "type": "intro",
            "text": "Якщо обидва додатки — іменники, першим стоїть Dativ; якщо один із них займенник, він стоїть першим.",
            "en": {
              "text": "If both objects are nouns, the dative comes first; if one is a pronoun, the pronoun comes first."
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
                "Ich gebe dem Mann das Buch.",
                "Я даю чоловікові книгу. (Dativ перед Akkusativ)"
              ],
              [
                "Ich gebe es ihm.",
                "Я даю це йому. (займенник перед іменником)"
              ]
            ]
          }
        ],
        "titleEn": "Object Order (Akkusativ vs Dativ) — B1"
      },
      {
        "id": "hoeflichkeitsform",
        "title": "Форма ввічливості Sie — A1",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Sie (з великої літери) — ввічливе звертання до незнайомих людей чи в офіційних ситуаціях, дієслово узгоджується як з sie (вони).",
            "en": {
              "text": "Sie (capitalized) is the polite form of address for strangers or formal situations, conjugated like sie (they)."
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
                "Wie heißen Sie?",
                "Як вас звати?"
              ],
              [
                "Können Sie mir helfen?",
                "Чи можете ви мені допомогти?"
              ]
            ]
          }
        ],
        "titleEn": "The Polite Form Sie — A1"
      },
      {
        "id": "anrede-briefe",
        "title": "Звертання в листах та e-mail — A2",
        "emoji": "✉️",
        "sections": [
          {
            "type": "intro",
            "text": "Офіційні листи починаються з Sehr geehrte(r), а неофіційні — з Liebe(r) чи Hallo.",
            "en": {
              "text": "Formal letters begin with Sehr geehrte(r), while informal ones start with Liebe(r) or Hallo."
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
                "Sehr geehrte Frau Müller,",
                "Шановна пані Мюллер,"
              ],
              [
                "Liebe Anna, wie geht es dir?",
                "Люба Анно, як справи?"
              ]
            ]
          }
        ],
        "titleEn": "Forms of Address in Letters & Email — A2"
      },
      {
        "id": "modalverben-subjektiv",
        "title": "Суб'єктивне вживання модальних дієслів — C1",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Модальні дієслова можуть виражати не лише об'єктивне значення, а й припущення чи оцінку мовця (müssen — впевненість, könnte — можливість).",
            "en": {
              "text": "Modal verbs can express not just objective meaning but the speaker's guess or assessment (müssen — certainty, könnte — possibility)."
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
                "Er müsste jetzt zu Hause sein.",
                "Він, мабуть, уже вдома."
              ],
              [
                "Das könnte stimmen.",
                "Це може бути правдою."
              ]
            ]
          }
        ],
        "titleEn": "Subjective Use of Modal Verbs — C1"
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
        "id": "unregelmaessige-verben",
        "title": "Неправильні (сильні) дієслова 150 — A1–B2",
        "titleEn": "Irregular (Strong) Verbs 150 — A1–B2",
        "emoji": "📋",
        "sections": [
          {
            "type": "intro",
            "text": "Сильні та неправильні дієслова змінюють кореневий голосний у Präteritum і Partizip II замість регулярного закінчення -te/-t. 150 найуживаніших — від базових A1 до просунутих B2.",
            "en": {
              "text": "Strong and irregular verbs change the stem vowel in the Präteritum and Partizip II instead of taking the regular -te/-t ending. The 150 most common — from basic A1 to advanced B2."
            }
          },
          {
            "type": "table",
            "title": "Неправильні дієслова (Infinitiv — Präteritum — Partizip II)",
            "en": {
              "title": "Irregular Verbs (Infinitive — Simple Past — Past Participle)"
            },
            "rows": [
              [
                "Infinitiv",
                "Präteritum",
                "Partizip II",
                "Переклад"
              ],
              [
                "backen",
                "buk / backte",
                "hat gebacken",
                "пекти"
              ],
              [
                "befehlen",
                "befahl",
                "hat befohlen",
                "наказувати"
              ],
              [
                "beginnen",
                "begann",
                "hat begonnen",
                "починати"
              ],
              [
                "beißen",
                "biss",
                "hat gebissen",
                "кусати"
              ],
              [
                "bergen",
                "barg",
                "hat geborgen",
                "рятувати, ховати"
              ],
              [
                "bersten",
                "barst",
                "ist geborsten",
                "тріскати, лопатись"
              ],
              [
                "biegen",
                "bog",
                "hat/ist gebogen",
                "гнути(ся)"
              ],
              [
                "bieten",
                "bot",
                "hat geboten",
                "пропонувати"
              ],
              [
                "binden",
                "band",
                "hat gebunden",
                "зв'язувати"
              ],
              [
                "bitten",
                "bat",
                "hat gebeten",
                "просити"
              ],
              [
                "blasen",
                "blies",
                "hat geblasen",
                "дути"
              ],
              [
                "bleiben",
                "blieb",
                "ist geblieben",
                "залишатися"
              ],
              [
                "braten",
                "briet",
                "hat gebraten",
                "смажити"
              ],
              [
                "brechen",
                "brach",
                "hat/ist gebrochen",
                "ламати(ся)"
              ],
              [
                "brennen",
                "brannte",
                "hat gebrannt",
                "горіти"
              ],
              [
                "bringen",
                "brachte",
                "hat gebracht",
                "приносити"
              ],
              [
                "denken",
                "dachte",
                "hat gedacht",
                "думати"
              ],
              [
                "dringen",
                "drang",
                "ist gedrungen",
                "проникати"
              ],
              [
                "dürfen",
                "durfte",
                "hat gedurft",
                "мати дозвіл"
              ],
              [
                "empfehlen",
                "empfahl",
                "hat empfohlen",
                "рекомендувати"
              ],
              [
                "erschrecken",
                "erschrak",
                "ist erschrocken",
                "лякатися"
              ],
              [
                "essen",
                "aß",
                "hat gegessen",
                "їсти"
              ],
              [
                "fahren",
                "fuhr",
                "ist gefahren",
                "їхати"
              ],
              [
                "fallen",
                "fiel",
                "ist gefallen",
                "падати"
              ],
              [
                "fangen",
                "fing",
                "hat gefangen",
                "ловити"
              ],
              [
                "finden",
                "fand",
                "hat gefunden",
                "знаходити"
              ],
              [
                "flechten",
                "flocht",
                "hat geflochten",
                "плести"
              ],
              [
                "fliegen",
                "flog",
                "ist geflogen",
                "летіти"
              ],
              [
                "fliehen",
                "floh",
                "ist geflohen",
                "тікати"
              ],
              [
                "fließen",
                "floss",
                "ist geflossen",
                "текти"
              ],
              [
                "fressen",
                "fraß",
                "hat gefressen",
                "їсти (про тварин)"
              ],
              [
                "frieren",
                "fror",
                "hat gefroren",
                "мерзнути"
              ],
              [
                "gebären",
                "gebar",
                "hat geboren",
                "народжувати"
              ],
              [
                "geben",
                "gab",
                "hat gegeben",
                "давати"
              ],
              [
                "gehen",
                "ging",
                "ist gegangen",
                "йти"
              ],
              [
                "gelingen",
                "gelang",
                "ist gelungen",
                "вдаватися"
              ],
              [
                "gelten",
                "galt",
                "hat gegolten",
                "діяти, бути чинним"
              ],
              [
                "genesen",
                "genas",
                "ist genesen",
                "одужувати"
              ],
              [
                "genießen",
                "genoss",
                "hat genossen",
                "насолоджуватися"
              ],
              [
                "geschehen",
                "geschah",
                "ist geschehen",
                "ставатися"
              ],
              [
                "gewinnen",
                "gewann",
                "hat gewonnen",
                "вигравати"
              ],
              [
                "gießen",
                "goss",
                "hat gegossen",
                "лити, поливати"
              ],
              [
                "gleichen",
                "glich",
                "hat geglichen",
                "бути схожим"
              ],
              [
                "gleiten",
                "glitt",
                "ist geglitten",
                "ковзати"
              ],
              [
                "graben",
                "grub",
                "hat gegraben",
                "копати"
              ],
              [
                "greifen",
                "griff",
                "hat gegriffen",
                "хапати"
              ],
              [
                "haben",
                "hatte",
                "hat gehabt",
                "мати"
              ],
              [
                "halten",
                "hielt",
                "hat gehalten",
                "тримати, зупинятися"
              ],
              [
                "hängen",
                "hing",
                "hat gehangen",
                "висіти"
              ],
              [
                "hauen",
                "hieb / haute",
                "hat gehauen",
                "бити, рубати"
              ],
              [
                "heben",
                "hob",
                "hat gehoben",
                "піднімати"
              ],
              [
                "heißen",
                "hieß",
                "hat geheißen",
                "називатися"
              ],
              [
                "helfen",
                "half",
                "hat geholfen",
                "допомагати"
              ],
              [
                "kennen",
                "kannte",
                "hat gekannt",
                "знати (когось)"
              ],
              [
                "klingen",
                "klang",
                "hat geklungen",
                "звучати"
              ],
              [
                "kneifen",
                "kniff",
                "hat gekniffen",
                "щипати"
              ],
              [
                "kommen",
                "kam",
                "ist gekommen",
                "приходити"
              ],
              [
                "können",
                "konnte",
                "hat gekonnt",
                "могти, вміти"
              ],
              [
                "kriechen",
                "kroch",
                "ist gekrochen",
                "повзати"
              ],
              [
                "laden",
                "lud",
                "hat geladen",
                "вантажити, запрошувати"
              ],
              [
                "lassen",
                "ließ",
                "hat gelassen",
                "дозволяти, залишати"
              ],
              [
                "laufen",
                "lief",
                "ist gelaufen",
                "бігти"
              ],
              [
                "leiden",
                "litt",
                "hat gelitten",
                "страждати"
              ],
              [
                "leihen",
                "lieh",
                "hat geliehen",
                "позичати"
              ],
              [
                "lesen",
                "las",
                "hat gelesen",
                "читати"
              ],
              [
                "liegen",
                "lag",
                "hat gelegen",
                "лежати"
              ],
              [
                "lügen",
                "log",
                "hat gelogen",
                "брехати"
              ],
              [
                "meiden",
                "mied",
                "hat gemieden",
                "уникати"
              ],
              [
                "messen",
                "maß",
                "hat gemessen",
                "вимірювати"
              ],
              [
                "mögen",
                "mochte",
                "hat gemocht",
                "любити, подобатися"
              ],
              [
                "müssen",
                "musste",
                "hat gemusst",
                "бути зобов'язаним"
              ],
              [
                "nehmen",
                "nahm",
                "hat genommen",
                "брати"
              ],
              [
                "nennen",
                "nannte",
                "hat genannt",
                "називати"
              ],
              [
                "pfeifen",
                "pfiff",
                "hat gepfiffen",
                "свистіти"
              ],
              [
                "preisen",
                "pries",
                "hat gepriesen",
                "вихваляти"
              ],
              [
                "raten",
                "riet",
                "hat geraten",
                "радити, вгадувати"
              ],
              [
                "reiben",
                "rieb",
                "hat gerieben",
                "терти"
              ],
              [
                "reißen",
                "riss",
                "hat/ist gerissen",
                "рвати(ся)"
              ],
              [
                "reiten",
                "ritt",
                "ist geritten",
                "їздити верхи"
              ],
              [
                "rennen",
                "rannte",
                "ist gerannt",
                "бігти"
              ],
              [
                "riechen",
                "roch",
                "hat gerochen",
                "пахнути"
              ],
              [
                "ringen",
                "rang",
                "hat gerungen",
                "боротися"
              ],
              [
                "rufen",
                "rief",
                "hat gerufen",
                "кликати"
              ],
              [
                "salzen",
                "salzte",
                "hat gesalzen",
                "солити"
              ],
              [
                "saufen",
                "soff",
                "hat gesoffen",
                "пити (про тварин; жарг.)"
              ],
              [
                "saugen",
                "sog / saugte",
                "hat gesogen",
                "смоктати, всмоктувати"
              ],
              [
                "schaffen",
                "schuf",
                "hat geschaffen",
                "створювати"
              ],
              [
                "scheiden",
                "schied",
                "hat/ist geschieden",
                "розлучатися, розділяти"
              ],
              [
                "scheinen",
                "schien",
                "hat geschienen",
                "світити, здаватися"
              ],
              [
                "schieben",
                "schob",
                "hat geschoben",
                "штовхати"
              ],
              [
                "schießen",
                "schoss",
                "hat geschossen",
                "стріляти"
              ],
              [
                "schlafen",
                "schlief",
                "hat geschlafen",
                "спати"
              ],
              [
                "schlagen",
                "schlug",
                "hat geschlagen",
                "бити"
              ],
              [
                "schleichen",
                "schlich",
                "ist geschlichen",
                "підкрадатися"
              ],
              [
                "schleifen",
                "schliff",
                "hat geschliffen",
                "гострити, шліфувати"
              ],
              [
                "schließen",
                "schloss",
                "hat geschlossen",
                "закривати"
              ],
              [
                "schlingen",
                "schlang",
                "hat geschlungen",
                "обвивати"
              ],
              [
                "schmeißen",
                "schmiss",
                "hat geschmissen",
                "кидати (розм.)"
              ],
              [
                "schmelzen",
                "schmolz",
                "ist geschmolzen",
                "танути"
              ],
              [
                "schneiden",
                "schnitt",
                "hat geschnitten",
                "різати"
              ],
              [
                "schreiben",
                "schrieb",
                "hat geschrieben",
                "писати"
              ],
              [
                "schreien",
                "schrie",
                "hat geschrien",
                "кричати"
              ],
              [
                "schreiten",
                "schritt",
                "ist geschritten",
                "крокувати"
              ],
              [
                "schweigen",
                "schwieg",
                "hat geschwiegen",
                "мовчати"
              ],
              [
                "schwellen",
                "schwoll",
                "ist geschwollen",
                "набрякати"
              ],
              [
                "schwimmen",
                "schwamm",
                "ist geschwommen",
                "плавати"
              ],
              [
                "schwingen",
                "schwang",
                "hat geschwungen",
                "розмахувати"
              ],
              [
                "schwören",
                "schwor",
                "hat geschworen",
                "присягатися"
              ],
              [
                "sehen",
                "sah",
                "hat gesehen",
                "бачити"
              ],
              [
                "sein",
                "war",
                "ist gewesen",
                "бути"
              ],
              [
                "senden",
                "sandte",
                "hat gesandt",
                "надсилати"
              ],
              [
                "singen",
                "sang",
                "hat gesungen",
                "співати"
              ],
              [
                "sinken",
                "sank",
                "ist gesunken",
                "тонути, опускатися"
              ],
              [
                "sinnen",
                "sann",
                "hat gesonnen",
                "розмірковувати"
              ],
              [
                "sitzen",
                "saß",
                "hat gesessen",
                "сидіти"
              ],
              [
                "sollen",
                "sollte",
                "hat gesollt",
                "бути повинним"
              ],
              [
                "spinnen",
                "spann",
                "hat gesponnen",
                "прясти, вигадувати"
              ],
              [
                "sprechen",
                "sprach",
                "hat gesprochen",
                "говорити"
              ],
              [
                "springen",
                "sprang",
                "ist gesprungen",
                "стрибати"
              ],
              [
                "stechen",
                "stach",
                "hat gestochen",
                "колоти"
              ],
              [
                "stehen",
                "stand",
                "hat gestanden",
                "стояти"
              ],
              [
                "stehlen",
                "stahl",
                "hat gestohlen",
                "красти"
              ],
              [
                "steigen",
                "stieg",
                "ist gestiegen",
                "підійматися"
              ],
              [
                "sterben",
                "starb",
                "ist gestorben",
                "помирати"
              ],
              [
                "stinken",
                "stank",
                "hat gestunken",
                "смердіти"
              ],
              [
                "stoßen",
                "stieß",
                "hat/ist gestoßen",
                "штовхати, наштовхуватися"
              ],
              [
                "streichen",
                "strich",
                "hat gestrichen",
                "фарбувати, гладити"
              ],
              [
                "streiten",
                "stritt",
                "hat gestritten",
                "сваритися"
              ],
              [
                "tragen",
                "trug",
                "hat getragen",
                "нести, носити"
              ],
              [
                "treffen",
                "traf",
                "hat getroffen",
                "зустрічати"
              ],
              [
                "treiben",
                "trieb",
                "hat/ist getrieben",
                "гнати, займатися"
              ],
              [
                "treten",
                "trat",
                "hat/ist getreten",
                "ступати, штовхати ногою"
              ],
              [
                "trinken",
                "trank",
                "hat getrunken",
                "пити"
              ],
              [
                "tun",
                "tat",
                "hat getan",
                "робити"
              ],
              [
                "verderben",
                "verdarb",
                "hat/ist verdorben",
                "псувати(ся)"
              ],
              [
                "vergessen",
                "vergaß",
                "hat vergessen",
                "забувати"
              ],
              [
                "verlieren",
                "verlor",
                "hat verloren",
                "втрачати"
              ],
              [
                "wachsen",
                "wuchs",
                "ist gewachsen",
                "рости"
              ],
              [
                "waschen",
                "wusch",
                "hat gewaschen",
                "мити"
              ],
              [
                "weichen",
                "wich",
                "ist gewichen",
                "відступати, поступатися"
              ],
              [
                "weisen",
                "wies",
                "hat gewiesen",
                "вказувати"
              ],
              [
                "wenden",
                "wandte",
                "hat gewandt",
                "повертати(ся)"
              ],
              [
                "werben",
                "warb",
                "hat geworben",
                "рекламувати, вербувати"
              ],
              [
                "werden",
                "wurde",
                "ist geworden",
                "ставати"
              ],
              [
                "werfen",
                "warf",
                "hat geworfen",
                "кидати"
              ],
              [
                "wiegen",
                "wog",
                "hat gewogen",
                "важити"
              ],
              [
                "wissen",
                "wusste",
                "hat gewusst",
                "знати (факт)"
              ],
              [
                "wollen",
                "wollte",
                "hat gewollt",
                "хотіти"
              ],
              [
                "ziehen",
                "zog",
                "hat/ist gezogen",
                "тягнути, переїжджати"
              ],
              [
                "zwingen",
                "zwang",
                "hat gezwungen",
                "примушувати"
              ]
            ]
          },
          {
            "type": "note",
            "title": "liegen vs legen — найпоширеніша плутанина",
            "text": "liegen / lag / gelegen → лежати (без додатка): \"Das Buch lag auf dem Tisch.\"\nlegen / legte / gelegt → класти (з додатком, слабке дієслово): \"Ich legte das Buch auf den Tisch.\"",
            "en": {
              "title": "liegen vs legen — the most common confusion",
              "text": "liegen / lag / gelegen → to lie/be positioned (no object): \"Das Buch lag auf dem Tisch.\"\nlegen / legte / gelegt → to lay/place (with object, weak verb): \"Ich legte das Buch auf den Tisch.\""
            }
          }
        ]
      },
      {
        "id": "trennbare-verben-liste",
        "title": "Відокремлювані дієслова 150 — A1–C1",
        "titleEn": "Separable Verbs 150 — A1–C1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Відокремлювані дієслова з префіксами (an-, auf-, aus-, mit-, vor-, weg-, zurück-...) — німецький аналог фразових дієслів. Префікс відокремлюється й переноситься в кінець речення в Präsens/Präteritum. 150 найуживаніших — від базових A1 до просунутих C1.",
            "en": {
              "text": "Separable verbs with prefixes (an-, auf-, aus-, mit-, vor-, weg-, zurück-...) are the German counterpart of phrasal verbs. The prefix separates and moves to the end of the clause in Präsens/Präteritum. The 150 most common — from basic A1 to advanced C1."
            }
          },
          {
            "type": "table",
            "title": "Відокремлювані дієслова",
            "en": {
              "title": "Separable Verbs"
            },
            "rows": [
              [
                "Дієслово",
                "Значення",
                "Приклад"
              ],
              [
                "aufstehen",
                "вставати",
                "Ich stehe um sieben Uhr auf."
              ],
              [
                "ankommen",
                "прибувати",
                "Der Zug kommt um acht an."
              ],
              [
                "anrufen",
                "телефонувати",
                "Ich rufe dich später an."
              ],
              [
                "aufmachen",
                "відкривати",
                "Mach das Fenster auf!"
              ],
              [
                "zumachen",
                "закривати",
                "Mach die Tür zu!"
              ],
              [
                "einkaufen",
                "робити покупки",
                "Wir kaufen heute ein."
              ],
              [
                "ausgehen",
                "виходити (розважатися)",
                "Wir gehen heute Abend aus."
              ],
              [
                "mitkommen",
                "йти разом",
                "Kommst du mit?"
              ],
              [
                "mitbringen",
                "приносити з собою",
                "Bring bitte etwas zu essen mit."
              ],
              [
                "wegfahren",
                "виїжджати",
                "Wir fahren am Montag weg."
              ],
              [
                "zurückkommen",
                "повертатися",
                "Er kommt morgen zurück."
              ],
              [
                "zurückgeben",
                "повертати (річ)",
                "Gib mir das Buch zurück."
              ],
              [
                "vorbereiten",
                "готувати(ся)",
                "Ich bereite mich auf die Prüfung vor."
              ],
              [
                "vorstellen",
                "представляти",
                "Ich stelle dir meinen Freund vor."
              ],
              [
                "aufwachen",
                "прокидатися",
                "Ich wache jeden Morgen früh auf."
              ],
              [
                "einschlafen",
                "засинати",
                "Das Baby schläft schnell ein."
              ],
              [
                "anfangen",
                "починати",
                "Der Film fängt um acht an."
              ],
              [
                "aufhören",
                "припиняти",
                "Hör auf zu reden!"
              ],
              [
                "mitmachen",
                "брати участь",
                "Machst du mit?"
              ],
              [
                "teilnehmen",
                "брати участь",
                "Ich nehme an dem Kurs teil."
              ],
              [
                "ausschalten",
                "вимикати",
                "Schalte das Licht aus."
              ],
              [
                "einschalten",
                "вмикати",
                "Schalte den Fernseher ein."
              ],
              [
                "anziehen",
                "одягати",
                "Zieh deine Jacke an."
              ],
              [
                "ausziehen",
                "роздягатися, виїжджати",
                "Zieh deine Schuhe aus."
              ],
              [
                "aufräumen",
                "прибирати",
                "Ich räume mein Zimmer auf."
              ],
              [
                "wegwerfen",
                "викидати",
                "Wirf den Müll weg."
              ],
              [
                "mitnehmen",
                "брати з собою",
                "Nimm einen Regenschirm mit."
              ],
              [
                "abholen",
                "забирати (когось)",
                "Ich hole dich vom Bahnhof ab."
              ],
              [
                "absagen",
                "скасовувати",
                "Sie sagt das Treffen ab."
              ],
              [
                "zusagen",
                "погоджуватися",
                "Er sagt der Einladung zu."
              ],
              [
                "vorschlagen",
                "пропонувати",
                "Ich schlage einen Ausflug vor."
              ],
              [
                "durchführen",
                "проводити (захід)",
                "Sie führen das Experiment durch."
              ],
              [
                "feststellen",
                "встановлювати, з'ясовувати",
                "Wir stellen das Problem fest."
              ],
              [
                "festhalten",
                "міцно тримати",
                "Halt dich fest!"
              ],
              [
                "loslassen",
                "відпускати",
                "Lass mich los!"
              ],
              [
                "losgehen",
                "вирушати, починатися",
                "Wann geht die Party los?"
              ],
              [
                "umziehen",
                "переїжджати, переодягатися",
                "Wir ziehen nächsten Monat um."
              ],
              [
                "umsteigen",
                "пересідати (транспорт)",
                "Sie steigen in Berlin um."
              ],
              [
                "weitermachen",
                "продовжувати",
                "Mach weiter!"
              ],
              [
                "zusammenpassen",
                "пасувати одне одному",
                "Die Farben passen gut zusammen."
              ],
              [
                "zusammenarbeiten",
                "співпрацювати",
                "Wir arbeiten gut zusammen."
              ],
              [
                "hinfallen",
                "падати",
                "Das Kind ist hingefallen."
              ],
              [
                "hingehen",
                "йти туди",
                "Wo gehst du hin?"
              ],
              [
                "herkommen",
                "приходити сюди",
                "Komm her!"
              ],
              [
                "hereinkommen",
                "заходити",
                "Komm herein!"
              ],
              [
                "hinausgehen",
                "виходити",
                "Er geht hinaus."
              ],
              [
                "ausdrucken",
                "роздруковувати",
                "Ich drucke das Dokument aus."
              ],
              [
                "ausfüllen",
                "заповнювати (форму)",
                "Füllen Sie das Formular aus."
              ],
              [
                "anmelden",
                "реєструвати(ся)",
                "Ich melde mich für den Kurs an."
              ],
              [
                "abmelden",
                "виписуватися, відписуватися",
                "Ich melde mich vom Newsletter ab."
              ],
              [
                "anbieten",
                "пропонувати (товар/послугу)",
                "Wir bieten einen Rabatt an."
              ],
              [
                "annehmen",
                "приймати",
                "Ich nehme das Angebot an."
              ],
              [
                "ablehnen",
                "відхиляти",
                "Sie lehnt den Vorschlag ab."
              ],
              [
                "abschließen",
                "завершувати, замикати",
                "Ich schließe die Tür ab."
              ],
              [
                "aufpassen",
                "слідкувати, бути уважним",
                "Pass auf!"
              ],
              [
                "aufwachsen",
                "зростати",
                "Er ist in Berlin aufgewachsen."
              ],
              [
                "ausruhen",
                "відпочивати",
                "Ich ruhe mich aus."
              ],
              [
                "aussehen",
                "виглядати",
                "Du siehst müde aus."
              ],
              [
                "aussteigen",
                "виходити (з транспорту)",
                "Ich steige an der nächsten Haltestelle aus."
              ],
              [
                "einsteigen",
                "заходити (в транспорт)",
                "Steig schnell ein!"
              ],
              [
                "eintragen",
                "вписувати",
                "Trag deinen Namen ein."
              ],
              [
                "einladen",
                "запрошувати",
                "Ich lade dich zur Party ein."
              ],
              [
                "einziehen",
                "в'їжджати (в житло)",
                "Wir ziehen nächste Woche ein."
              ],
              [
                "mitteilen",
                "повідомляти",
                "Ich teile dir die Neuigkeit mit."
              ],
              [
                "nachdenken",
                "розмірковувати",
                "Ich denke über das Problem nach."
              ],
              [
                "nachschauen",
                "перевіряти, дивитися",
                "Schau bitte nach, ob die Tür zu ist."
              ],
              [
                "nachholen",
                "надолужувати",
                "Ich muss die Arbeit nachholen."
              ],
              [
                "vorbeikommen",
                "заходити (в гості)",
                "Komm doch mal vorbei!"
              ],
              [
                "vorbeigehen",
                "проходити повз",
                "Ich gehe an dem Laden vorbei."
              ],
              [
                "vorlesen",
                "читати вголос",
                "Die Mutter liest dem Kind vor."
              ],
              [
                "vorziehen",
                "надавати перевагу",
                "Ich ziehe Tee vor."
              ],
              [
                "weggehen",
                "йти геть",
                "Geh nicht weg!"
              ],
              [
                "wegnehmen",
                "забирати",
                "Nimm mir das nicht weg!"
              ],
              [
                "weiterfahren",
                "їхати далі",
                "Wir fahren weiter."
              ],
              [
                "weitergehen",
                "йти далі",
                "Das Leben geht weiter."
              ],
              [
                "zunehmen",
                "набирати вагу",
                "Ich habe fünf Kilo zugenommen."
              ],
              [
                "abnehmen",
                "худнути, знімати (слухавку)",
                "Ich möchte abnehmen."
              ],
              [
                "zuhören",
                "слухати",
                "Hör mir bitte zu!"
              ],
              [
                "zusehen",
                "спостерігати",
                "Ich sehe ihm beim Kochen zu."
              ],
              [
                "zurückkehren",
                "повертатися",
                "Er kehrt nach Hause zurück."
              ],
              [
                "zurückrufen",
                "передзвонити",
                "Ich rufe dich zurück."
              ],
              [
                "abfahren",
                "відправлятися (транспорт)",
                "Der Bus fährt in fünf Minuten ab."
              ],
              [
                "abfliegen",
                "вилітати",
                "Das Flugzeug fliegt um zehn ab."
              ],
              [
                "abgeben",
                "здавати",
                "Ich gebe die Prüfung ab."
              ],
              [
                "absteigen",
                "злазити, зупинятися (в готелі)",
                "Wir steigen im Hotel ab."
              ],
              [
                "anbauen",
                "вирощувати, добудовувати",
                "Die Bauern bauen Weizen an."
              ],
              [
                "anbrennen",
                "підгоряти",
                "Das Essen ist angebrannt."
              ],
              [
                "andauern",
                "тривати",
                "Der Regen dauert an."
              ],
              [
                "anfassen",
                "торкатися",
                "Fass das nicht an!"
              ],
              [
                "angeben",
                "хвалитися, вказувати",
                "Gib bitte deine Adresse an."
              ],
              [
                "angehen",
                "стосуватися, вмикатися",
                "Das geht dich nichts an."
              ],
              [
                "anhalten",
                "зупиняти(ся)",
                "Der Bus hält an."
              ],
              [
                "ankreuzen",
                "позначати галочкою",
                "Kreuzen Sie die richtige Antwort an."
              ],
              [
                "anlegen",
                "вкладати (гроші), одягати",
                "Sie legt Geld an."
              ],
              [
                "anmachen",
                "вмикати, чіплятися",
                "Mach das Radio an."
              ],
              [
                "anpassen",
                "пристосовувати",
                "Wir passen den Plan an."
              ],
              [
                "anschauen",
                "дивитися на",
                "Schau mich an."
              ],
              [
                "ansehen",
                "розглядати, вважати",
                "Ich sehe mir das Bild an."
              ],
              [
                "anspringen",
                "заводитися (двигун)",
                "Das Auto springt nicht an."
              ],
              [
                "anstellen",
                "наймати на роботу, вмикати",
                "Die Firma stellt neue Mitarbeiter an."
              ],
              [
                "auffallen",
                "привертати увагу",
                "Ihr Kleid fällt auf."
              ],
              [
                "aufgeben",
                "здаватися, здавати (пошту)",
                "Gib nicht auf!"
              ],
              [
                "aufhalten",
                "затримувати",
                "Halt mich nicht auf."
              ],
              [
                "aufholen",
                "надолужувати (втрачений час)",
                "Wir müssen die Zeit aufholen."
              ],
              [
                "auflösen",
                "розчиняти, розпускати",
                "Der Zucker löst sich auf."
              ],
              [
                "aufnehmen",
                "записувати (звук), приймати",
                "Wir nehmen das Konzert auf."
              ],
              [
                "aufschlagen",
                "розкривати (книгу), розбивати",
                "Schlag das Buch auf Seite zehn auf."
              ],
              [
                "aufsetzen",
                "надягати (окуляри)",
                "Setz deine Brille auf."
              ],
              [
                "aufsteigen",
                "підійматися",
                "Der Ballon steigt auf."
              ],
              [
                "auftauchen",
                "з'являтися",
                "Er ist plötzlich aufgetaucht."
              ],
              [
                "auftreten",
                "виступати, з'являтися",
                "Sie tritt heute Abend auf."
              ],
              [
                "aufwenden",
                "витрачати (зусилля/гроші)",
                "Wir wenden viel Zeit auf."
              ],
              [
                "ausbauen",
                "розширювати, добудовувати",
                "Wir bauen das Haus aus."
              ],
              [
                "ausbilden",
                "навчати (профосвіта)",
                "Die Firma bildet Lehrlinge aus."
              ],
              [
                "ausbrechen",
                "вибухати, вириватися",
                "Der Krieg brach aus."
              ],
              [
                "ausdenken",
                "вигадувати",
                "Sie denkt sich eine Geschichte aus."
              ],
              [
                "ausdrücken",
                "виражати",
                "Drück deine Gefühle aus."
              ],
              [
                "auseinandergehen",
                "розходитися",
                "Die Meinungen gehen auseinander."
              ],
              [
                "ausgeben",
                "витрачати (гроші)",
                "Ich gebe zu viel Geld aus."
              ],
              [
                "ausgleichen",
                "компенсувати, вирівнювати",
                "Das gleicht die Differenz aus."
              ],
              [
                "aushalten",
                "витримувати",
                "Ich halte das nicht mehr aus."
              ],
              [
                "auskommen",
                "обходитися, ладнати",
                "Wir kommen gut miteinander aus."
              ],
              [
                "auspacken",
                "розпаковувати",
                "Ich packe den Koffer aus."
              ],
              [
                "ausrichten",
                "передавати (повідомлення)",
                "Ich richte ihm das aus."
              ],
              [
                "ausschließen",
                "виключати",
                "Wir schließen diese Möglichkeit aus."
              ],
              [
                "aussprechen",
                "вимовляти",
                "Sprich das Wort richtig aus."
              ],
              [
                "ausstellen",
                "виставляти (експонат)",
                "Das Museum stellt Gemälde aus."
              ],
              [
                "austauschen",
                "обмінюватися",
                "Wir tauschen Nummern aus."
              ],
              [
                "austeilen",
                "роздавати",
                "Der Lehrer teilt die Blätter aus."
              ],
              [
                "auswählen",
                "вибирати",
                "Wähl ein Buch aus."
              ],
              [
                "auswandern",
                "емігрувати",
                "Sie sind nach Kanada ausgewandert."
              ],
              [
                "auswirken",
                "впливати",
                "Das wirkt sich auf die Wirtschaft aus."
              ],
              [
                "bereitstellen",
                "надавати, готувати",
                "Die Stadt stellt Mittel bereit."
              ],
              [
                "beitragen",
                "сприяти",
                "Das trägt zum Erfolg bei."
              ],
              [
                "dabeihaben",
                "мати при собі",
                "Hast du dein Handy dabei?"
              ],
              [
                "dazugehören",
                "належати до",
                "Das gehört dazu."
              ],
              [
                "durchlesen",
                "прочитувати повністю",
                "Lies den Text durch."
              ],
              [
                "durchsetzen",
                "домагатися свого",
                "Er setzt sich immer durch."
              ],
              [
                "eingreifen",
                "втручатися",
                "Die Polizei greift ein."
              ],
              [
                "einrichten",
                "облаштовувати (квартиру)",
                "Wir richten die Wohnung ein."
              ],
              [
                "einsetzen",
                "застосовувати, вставляти",
                "Wir setzen neue Technik ein."
              ],
              [
                "entgegenkommen",
                "йти назустріч",
                "Er kommt mir entgegen."
              ],
              [
                "festlegen",
                "визначати, встановлювати",
                "Wir legen den Termin fest."
              ],
              [
                "freilassen",
                "звільняти, відпускати",
                "Sie lassen den Vogel frei."
              ],
              [
                "gutmachen",
                "виправити, компенсувати",
                "Ich mache den Fehler gut."
              ],
              [
                "herausfinden",
                "з'ясовувати",
                "Wir finden die Wahrheit heraus."
              ],
              [
                "hervorheben",
                "підкреслювати",
                "Ich möchte einen Punkt hervorheben."
              ],
              [
                "zurücklegen",
                "відкладати (гроші, відстань)",
                "Ich lege jeden Monat Geld zurück."
              ],
              [
                "nachmachen",
                "наслідувати, повторювати",
                "Mach mir das nach."
              ],
              [
                "vorkommen",
                "траплятися",
                "Das kommt oft vor."
              ]
            ]
          }
        ]
      },
      {
        "id": "rechtschreibung",
        "title": "Правила написання — A1",
        "titleEn": "Spelling Rules — A1",
        "emoji": "✍️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька ключових правил німецького правопису: великі літери для іменників, ß vs ss, та вживання умлаутів.",
            "en": {
              "text": "Several key German spelling rules: capitalizing nouns, ß vs ss, and the use of umlauts."
            }
          },
          {
            "type": "markers",
            "title": "Основні правила",
            "en": {
              "title": "Main rules"
            },
            "items": [
              "Усі іменники завжди пишуться з великої літери (das Haus, die Liebe).",
              "ß вживається після довгого голосного/дифтонга (die Straße), ss — після короткого (dass, essen).",
              "Умлаути ä, ö, ü змінюють значення слова (schon vs schön).",
              "У Швейцарії ß взагалі не використовується — завжди ss."
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
                "Ich lese ein interessantes Buch.",
                "Я читаю цікаву книгу. (іменники з великої)"
              ],
              [
                "Der Fluss ist breit, aber die Straße ist schmal.",
                "Річка широка, а вулиця вузька. (ss vs ß)"
              ]
            ]
          }
        ]
      }
    ]
  }
];
