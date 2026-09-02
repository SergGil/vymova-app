// Vymova — data/grammar-data/grammar_he.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_HE: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "definite-article",
        "title": "ה' הידיעה — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У івриті означеність позначається префіксом <span dir=\"rtl\">ה-</span>, який додається перед іменником і означає \"цей/ця/ці\" (the).",
            "en": {
              "text": "In Hebrew, definiteness is marked by the prefix ה- attached before a noun, meaning \"the\"."
            }
          },
          {
            "type": "table",
            "title": "Без артикля → з артиклем",
            "rows": [
              [
                "<span dir=\"rtl\">ספר</span> (книга)",
                "<span dir=\"rtl\">הספר</span> (ця книга)"
              ],
              [
                "<span dir=\"rtl\">בית</span> (дім)",
                "<span dir=\"rtl\">הבית</span> (цей дім)"
              ],
              [
                "<span dir=\"rtl\">אישה</span> (жінка)",
                "<span dir=\"rtl\">האישה</span> (ця жінка)"
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
                "<span dir=\"rtl\">הספר על השולחן.</span>",
                "Книга на столі."
              ],
              [
                "<span dir=\"rtl\">האישה יושבת בבית.</span>",
                "Жінка сидить вдома."
              ]
            ]
          }
        ],
        "titleEn": "The Definite Article Ha- — A1"
      },
      {
        "id": "gender",
        "title": "זכר ונקבה — A1",
        "emoji": "👫",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники та прикметники в івриті мають рід — чоловічий або жіночий. Жіночий рід часто утворюється додаванням <span dir=\"rtl\">ה-</span> або <span dir=\"rtl\">ת-</span> в кінці слова.",
            "en": {
              "text": "Hebrew nouns and adjectives have gender — masculine or feminine. The feminine form is often created by adding ה- or ת- at the end of the word."
            }
          },
          {
            "type": "table",
            "title": "Чоловічий і жіночий рід",
            "rows": [
              [
                "<span dir=\"rtl\">טוב</span> (хороший)",
                "<span dir=\"rtl\">טובה</span> (хороша)"
              ],
              [
                "<span dir=\"rtl\">גדול</span> (великий)",
                "<span dir=\"rtl\">גדולה</span> (велика)"
              ],
              [
                "<span dir=\"rtl\">ילד</span> (хлопчик)",
                "<span dir=\"rtl\">ילדה</span> (дівчинка)"
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
                "<span dir=\"rtl\">הוא ילד טוב.</span>",
                "Він хороший хлопчик."
              ],
              [
                "<span dir=\"rtl\">היא ילדה טובה.</span>",
                "Вона хороша дівчинка."
              ]
            ]
          }
        ],
        "titleEn": "Masculine & Feminine — A1"
      },
      {
        "id": "present-tense",
        "title": "הווה — הטיית פעלים — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "У теперішньому часі дієслово змінюється за родом і числом підмета. Дієслово <span dir=\"rtl\">לכתוב</span> (писати) у формі теперішнього часу <span dir=\"rtl\">כותב</span>.",
            "en": {
              "text": "In the present tense, the verb changes according to the gender and number of the subject. The verb לכתוב (to write) has the present-tense form כותב."
            }
          },
          {
            "type": "formula",
            "title": "<span dir=\"rtl\">לכתוב</span> (писати) — теперішній час",
            "rows": [
              [
                "<span dir=\"rtl\">אני</span> (я, ч.р.)",
                "<span dir=\"rtl\">כותב</span>",
                ""
              ],
              [
                "<span dir=\"rtl\">אני</span> (я, ж.р.)",
                "<span dir=\"rtl\">כותבת</span>",
                ""
              ],
              [
                "<span dir=\"rtl\">אתה</span> (ти, ч.р.)",
                "<span dir=\"rtl\">כותב</span>",
                ""
              ],
              [
                "<span dir=\"rtl\">את</span> (ти, ж.р.)",
                "<span dir=\"rtl\">כותבת</span>",
                ""
              ],
              [
                "<span dir=\"rtl\">אנחנו</span> (ми)",
                "<span dir=\"rtl\">כותבים / כותבות</span>",
                ""
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
                "<span dir=\"rtl\">אני כותב מכתב.</span>",
                "Я пишу листа. (чоловік)"
              ],
              [
                "<span dir=\"rtl\">היא כותבת ספר.</span>",
                "Вона пише книгу."
              ]
            ]
          }
        ],
        "titleEn": "Present Tense (Verb Conjugation) — A1"
      },
      {
        "id": "pronouns-to-be",
        "title": "כינויי גוף — A1",
        "emoji": "🙋",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від української, у теперішньому часі іврит не використовує окреме дієслово \"бути\" — займенник одразу поєднується з прикметником або іменником.",
            "en": {
              "text": "Unlike English, in the present tense Hebrew has no separate verb \"to be\" — the pronoun connects directly with an adjective or noun."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "<span dir=\"rtl\">אני</span>",
                "я"
              ],
              [
                "<span dir=\"rtl\">אתה / את</span>",
                "ти (ч./ж.)"
              ],
              [
                "<span dir=\"rtl\">הוא / היא</span>",
                "він / вона"
              ],
              [
                "<span dir=\"rtl\">אנחנו</span>",
                "ми"
              ],
              [
                "<span dir=\"rtl\">הם / הן</span>",
                "вони (ч./ж.)"
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
                "<span dir=\"rtl\">אני מורה.</span>",
                "Я (є) вчитель."
              ],
              [
                "<span dir=\"rtl\">היא רעבה.</span>",
                "Вона (є) голодна."
              ]
            ]
          },
          {
            "type": "tip",
            "title": "Без \"є\"",
            "text": "אני מורה буквально \"я вчитель\" — слово \"є\" не потрібне і не має окремого еквівалента в теперішньому часі.",
            "en": {
              "title": "No \"is/am/are\"",
              "text": "אני מורה literally means \"I teacher\" — no equivalent of \"am/is/are\" is needed in the present tense."
            }
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      },
      {
        "id": "plural",
        "title": "רבים — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина чоловічого роду зазвичай утворюється закінченням <span dir=\"rtl\">ים-</span>, жіночого — <span dir=\"rtl\">ות-</span>, але є й винятки.",
            "en": {
              "text": "The masculine plural is usually formed with the ending ים-, the feminine with ות-, though there are exceptions."
            }
          },
          {
            "type": "table",
            "title": "Однина → множина",
            "rows": [
              [
                "<span dir=\"rtl\">ספר</span> (книга)",
                "<span dir=\"rtl\">ספרים</span> (книги)"
              ],
              [
                "<span dir=\"rtl\">מורה</span> (учитель)",
                "<span dir=\"rtl\">מורים</span> (учителі)"
              ],
              [
                "<span dir=\"rtl\">אישה</span> (жінка)",
                "<span dir=\"rtl\">נשים</span> (жінки, виняток)"
              ],
              [
                "<span dir=\"rtl\">ילדה</span> (дівчинка)",
                "<span dir=\"rtl\">ילדות</span> (дівчинки)"
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
                "<span dir=\"rtl\">יש לי שני ספרים.</span>",
                "У мене є дві книги."
              ],
              [
                "<span dir=\"rtl\">הילדות משחקות בחוץ.</span>",
                "Дівчатка грають на вулиці."
              ]
            ]
          }
        ],
        "titleEn": "Plural — A1"
      },
      {
        "id": "adjective-agreement",
        "title": "הסכמת תואר עם שם עצם — A1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник в івриті завжди узгоджується з іменником у роді (ч./ж.) та числі (одн./мн.) і стоїть ПІСЛЯ іменника, на відміну від української.",
            "en": {
              "text": "In Hebrew, an adjective always agrees with the noun in gender (m./f.) and number (sg./pl.), and it comes AFTER the noun — unlike Ukrainian or English."
            }
          },
          {
            "type": "table",
            "title": "Форми прикметника <span dir=\"rtl\">גדול</span> (великий)",
            "rows": [
              [
                "ч.р. одн.",
                "<span dir=\"rtl\">גדול</span>"
              ],
              [
                "ж.р. одн.",
                "<span dir=\"rtl\">גדולה</span>"
              ],
              [
                "ч.р. мн.",
                "<span dir=\"rtl\">גדולים</span>"
              ],
              [
                "ж.р. мн.",
                "<span dir=\"rtl\">גדולות</span>"
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
                "<span dir=\"rtl\">בית גדול</span>",
                "великий дім (ч.р.)"
              ],
              [
                "<span dir=\"rtl\">דירה גדולה</span>",
                "велика квартира (ж.р.)"
              ],
              [
                "<span dir=\"rtl\">ספרים גדולים</span>",
                "великі книги (ч.р. мн.)"
              ],
              [
                "<span dir=\"rtl\">מכוניות גדולות</span>",
                "великі машини (ж.р. мн.)"
              ]
            ]
          },
          {
            "type": "tip",
            "title": "Означений артикль двічі",
            "text": "Якщо іменник означений, артикль <span dir=\"rtl\">ה-</span> додається і до іменника, і до прикметника: <span dir=\"rtl\">הבית הגדול</span> (цей великий дім).",
            "en": {
              "title": "The definite article appears twice",
              "text": "If the noun is definite, ה- is added to BOTH the noun and the adjective: הבית הגדול (\"the big house\")."
            }
          }
        ],
        "titleEn": "Adjective-Noun Agreement — A1"
      },
      {
        "id": "yesh-ein",
        "title": "יש / אין — A1",
        "emoji": "📦",
        "sections": [
          {
            "type": "intro",
            "text": "<span dir=\"rtl\">יש</span> означає \"є/має\", <span dir=\"rtl\">אין</span> — \"немає\". Це не дієслова, а особливі слова існування, які не змінюються за особою.",
            "en": {
              "text": "יש means \"there is/are\" or \"has\", אין means \"there isn't/aren't\" or \"doesn't have\". These are special existential words, not verbs — they don't conjugate by person."
            }
          },
          {
            "type": "formula",
            "title": "Наявність / відсутність",
            "rows": [
              [
                "✅",
                "<span dir=\"rtl\">יש</span> + іменник",
                "є щось",
                "<span dir=\"rtl\">יש לי זמן.</span>"
              ],
              [
                "❌",
                "<span dir=\"rtl\">אין</span> + іменник",
                "немає щось",
                "<span dir=\"rtl\">אין לי זמן.</span>"
              ]
            ]
          },
          {
            "type": "table",
            "title": "\"Мати\" через <span dir=\"rtl\">יש ל-</span>",
            "rows": [
              [
                "<span dir=\"rtl\">יש לי</span>",
                "я маю / у мене є"
              ],
              [
                "<span dir=\"rtl\">יש לך</span>",
                "ти маєш (ч.р.)"
              ],
              [
                "<span dir=\"rtl\">יש לה</span>",
                "вона має"
              ],
              [
                "<span dir=\"rtl\">אין לו</span>",
                "він не має"
              ],
              [
                "<span dir=\"rtl\">אין לנו</span>",
                "ми не маємо"
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
                "<span dir=\"rtl\">יש לי כלב.</span>",
                "У мене є собака."
              ],
              [
                "<span dir=\"rtl\">אין לה מכונית.</span>",
                "У неї немає машини."
              ],
              [
                "<span dir=\"rtl\">יש כאן בית קפה?</span>",
                "Тут є кав'ярня?"
              ]
            ]
          },
          {
            "type": "tip",
            "title": "Немає теперішнього \"бути\"",
            "text": "В іврит немає окремого дієслова \"мати\" — конструкція <span dir=\"rtl\">יש ל-</span> буквально означає \"є для мене\", а не \"я маю\".",
            "en": {
              "title": "No verb \"to have\"",
              "text": "Hebrew has no separate verb \"to have\" — the construction יש ל- literally means \"there is, to me\", not \"I have\"."
            }
          }
        ],
        "titleEn": "Yesh / Ein (There Is/Isn't) — A1"
      },
      {
        "id": "possession-shel",
        "title": "שייכות עם של — A1",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "Належність в івриті найчастіше виражається словом <span dir=\"rtl\">של</span> (від, належить) між іменником і власником, або приєднанням займенникових суфіксів прямо до <span dir=\"rtl\">של</span>.",
            "en": {
              "text": "Possession in Hebrew is most often expressed with the word של (\"of, belonging to\") between the noun and the owner, or by attaching pronoun suffixes directly to של."
            }
          },
          {
            "type": "formula",
            "title": "Іменник + <span dir=\"rtl\">של</span> + власник",
            "rows": [
              [
                "✅",
                "іменник",
                "<span dir=\"rtl\">של</span> + власник",
                "<span dir=\"rtl\">הספר של דנה</span>"
              ]
            ]
          },
          {
            "type": "table",
            "title": "<span dir=\"rtl\">של</span> + займенникові суфікси",
            "rows": [
              [
                "<span dir=\"rtl\">שלי</span>",
                "мій/моя"
              ],
              [
                "<span dir=\"rtl\">שלך</span>",
                "твій (ч.р.)"
              ],
              [
                "<span dir=\"rtl\">שלה</span>",
                "її"
              ],
              [
                "<span dir=\"rtl\">שלו</span>",
                "його"
              ],
              [
                "<span dir=\"rtl\">שלנו</span>",
                "наш"
              ],
              [
                "<span dir=\"rtl\">שלהם</span>",
                "їхній (ч.р. мн.)"
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
                "<span dir=\"rtl\">זה הבית שלי.</span>",
                "Це мій дім."
              ],
              [
                "<span dir=\"rtl\">המכונית של אבא גדולה.</span>",
                "Машина тата велика."
              ],
              [
                "<span dir=\"rtl\">איפה התיק שלך?</span>",
                "Де твоя сумка?"
              ]
            ]
          }
        ],
        "titleEn": "Possession with Shel — A1"
      },
      {
        "id": "negation-lo",
        "title": "שלילה עם לא — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення дієслів і прикметників у теперішньому часі утворюється за допомогою <span dir=\"rtl\">לא</span> перед словом. Це найпростіший і найчастіший спосіб заперечення.",
            "en": {
              "text": "Negation of verbs and adjectives in the present tense is formed by placing לא before the word. This is the simplest and most common form of negation."
            }
          },
          {
            "type": "formula",
            "title": "Заперечення з <span dir=\"rtl\">לא</span>",
            "rows": [
              [
                "❌",
                "<span dir=\"rtl\">לא</span> + дієслово/прикметник",
                "не...",
                "<span dir=\"rtl\">אני לא רוצה.</span>"
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
                "<span dir=\"rtl\">אני לא מבין.</span>",
                "Я не розумію."
              ],
              [
                "<span dir=\"rtl\">היא לא רעבה.</span>",
                "Вона не голодна."
              ],
              [
                "<span dir=\"rtl\">זה לא נכון.</span>",
                "Це не правда."
              ]
            ]
          },
          {
            "type": "note",
            "title": "<span dir=\"rtl\">לא</span> vs <span dir=\"rtl\">אין</span> vs <span dir=\"rtl\">בלי</span>",
            "text": "<span dir=\"rtl\">לא</span> заперечує дію/якість (\"не роблю\"), <span dir=\"rtl\">אין</span> заперечує наявність (\"немає\"), а <span dir=\"rtl\">בלי</span> означає \"без\" (прийменник).",
            "en": {
              "title": "לא vs אין vs בלי",
              "text": "לא negates an action or quality (\"I don't...\"), אין negates existence (\"there isn't...\"), and בלי means \"without\" (a preposition)."
            }
          }
        ],
        "titleEn": "Negation with Lo — A1"
      },
      {
        "id": "numbers-cardinal-basic",
        "title": "מספרים 1–10 — A1",
        "emoji": "🔟",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від більшості мов, числівники в івриті мають окрему форму чоловічого і жіночого роду, яка залежить від роду іменника, що рахується.",
            "en": {
              "text": "Unlike most languages, Hebrew numerals have separate masculine and feminine forms, depending on the gender of the noun being counted."
            }
          },
          {
            "type": "table",
            "title": "1–10 (ч.р. / ж.р.)",
            "rows": [
              [
                "1",
                "<span dir=\"rtl\">אחד</span> / <span dir=\"rtl\">אחת</span>"
              ],
              [
                "2",
                "<span dir=\"rtl\">שניים</span> / <span dir=\"rtl\">שתיים</span>"
              ],
              [
                "3",
                "<span dir=\"rtl\">שלושה</span> / <span dir=\"rtl\">שלוש</span>"
              ],
              [
                "4",
                "<span dir=\"rtl\">ארבעה</span> / <span dir=\"rtl\">ארבע</span>"
              ],
              [
                "5",
                "<span dir=\"rtl\">חמישה</span> / <span dir=\"rtl\">חמש</span>"
              ],
              [
                "6",
                "<span dir=\"rtl\">שישה</span> / <span dir=\"rtl\">שש</span>"
              ],
              [
                "7",
                "<span dir=\"rtl\">שבעה</span> / <span dir=\"rtl\">שבע</span>"
              ],
              [
                "8",
                "<span dir=\"rtl\">שמונה</span> / <span dir=\"rtl\">שמונה</span>"
              ],
              [
                "9",
                "<span dir=\"rtl\">תשעה</span> / <span dir=\"rtl\">תשע</span>"
              ],
              [
                "10",
                "<span dir=\"rtl\">עשרה</span> / <span dir=\"rtl\">עשר</span>"
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
                "<span dir=\"rtl\">שלושה ילדים</span>",
                "троє дітей (ч.р.)"
              ],
              [
                "<span dir=\"rtl\">שלוש בנות</span>",
                "три дівчинки (ж.р.)"
              ],
              [
                "<span dir=\"rtl\">יש לי שני אחים.</span>",
                "У мене два брати."
              ]
            ]
          },
          {
            "type": "tip",
            "title": "Зворотне узгодження",
            "text": "Незвично, але форма зі суфіксом <span dir=\"rtl\">ה-</span> (напр. <span dir=\"rtl\">שלושה</span>) використовується для ЧОЛОВІЧОГО роду, а коротша форма (<span dir=\"rtl\">שלוש</span>) — для ЖІНОЧОГО.",
            "en": {
              "title": "Reversed agreement pattern",
              "text": "Counter-intuitively, the form with the ה- suffix (e.g. שלושה) is used for MASCULINE nouns, while the shorter form (שלוש) is used for FEMININE nouns."
            }
          }
        ],
        "titleEn": "Numbers 1-10 — A1"
      }
    ]
  },
  {
    "id": "tenses",
    "title": "Часи та біньяни",
    "titleEn": "Tenses & Verb Patterns",
    "emoji": "⏰",
    "rules": [
      {
        "id": "binyanim-overview",
        "title": "שבעת הבניינים — A2",
        "emoji": "🏛️",
        "sections": [
          {
            "type": "intro",
            "text": "Майже кожне дієслово в івриті будується з трилітерного кореня (шореш), вставленого в один із 7 стандартних шаблонів — біньянів. Біньян визначає не лише форму слова, а й його заставу (активний/пасивний/зворотний).",
            "en": {
              "text": "Almost every Hebrew verb is built from a three-letter root (shoresh) inserted into one of 7 standard patterns — binyanim. The binyan determines not only the word's shape but also its voice (active/passive/reflexive)."
            }
          },
          {
            "type": "table",
            "title": "Сім біньянів (корінь כ-ת-ב / ד-ב-ר / ז-מ-ן як приклад)",
            "rows": [
              [
                "<span dir=\"rtl\">קל / פָּעַל</span> (Пааль)",
                "простий активний",
                "<span dir=\"rtl\">כתב</span> (написав)"
              ],
              [
                "<span dir=\"rtl\">נִפְעַל</span> (Ніфаль)",
                "пасив/зворотний до Пааль",
                "<span dir=\"rtl\">נכנס</span> (увійшов)"
              ],
              [
                "<span dir=\"rtl\">פִּעֵל</span> (Піель)",
                "посилений активний",
                "<span dir=\"rtl\">דיבר</span> (говорив)"
              ],
              [
                "<span dir=\"rtl\">פֻּעַל</span> (Пуаль)",
                "пасив до Піель",
                "<span dir=\"rtl\">בושל</span> (був зварений)"
              ],
              [
                "<span dir=\"rtl\">הִפְעִיל</span> (Гіфіль)",
                "каузатив (\"змусити\")",
                "<span dir=\"rtl\">הזמין</span> (запросив)"
              ],
              [
                "<span dir=\"rtl\">הֻפְעַל</span> (Гуфаль)",
                "пасив до Гіфіль",
                "<span dir=\"rtl\">הוזמן</span> (був запрошений)"
              ],
              [
                "<span dir=\"rtl\">הִתְפַּעֵל</span> (Гітпаель)",
                "зворотний/взаємний",
                "<span dir=\"rtl\">התרחץ</span> (мився)"
              ]
            ]
          },
          {
            "type": "note",
            "title": "Навіщо це знати",
            "text": "Знання біньяну дозволяє передбачити всю парадигму дієвідмінювання нового слова, щойно ти впізнав шаблон голосних і префіксів — це найпотужніший інструмент для вивчення дієслів в івриті.",
            "en": {
              "title": "Why this matters",
              "text": "Recognizing the binyan lets you predict a new verb's entire conjugation pattern once you spot its vowel/prefix template — this is the single most powerful tool for learning Hebrew verbs."
            }
          }
        ],
        "titleEn": "The Seven Binyanim (Verb Patterns) — A2"
      },
      {
        "id": "paal-past",
        "title": "בניין קל — עבר — A1",
        "emoji": "📗",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий час у Пааль утворюється додаванням суфіксів до основи кореня. Приклад: <span dir=\"rtl\">לכתוב</span> (писати), корінь כ-ת-ב.",
            "en": {
              "text": "The past tense in Paal is formed by adding suffixes to the root base. Example: לכתוב (to write), root כ-ת-ב."
            }
          },
          {
            "type": "formula",
            "title": "<span dir=\"rtl\">כתב</span> — минулий час",
            "rows": [
              [
                "אני",
                "<span dir=\"rtl\">אני</span>",
                "<span dir=\"rtl\">כתבתי</span>",
                "katavti"
              ],
              [
                "אתה",
                "<span dir=\"rtl\">אתה</span>",
                "<span dir=\"rtl\">כתבת</span>",
                "katavta"
              ],
              [
                "את",
                "<span dir=\"rtl\">את</span>",
                "<span dir=\"rtl\">כתבת</span>",
                "katavt"
              ],
              [
                "הוא",
                "<span dir=\"rtl\">הוא</span>",
                "<span dir=\"rtl\">כתב</span>",
                "katav"
              ],
              [
                "היא",
                "<span dir=\"rtl\">היא</span>",
                "<span dir=\"rtl\">כתבה</span>",
                "katva"
              ],
              [
                "אנחנו",
                "<span dir=\"rtl\">אנחנו</span>",
                "<span dir=\"rtl\">כתבנו</span>",
                "katavnu"
              ],
              [
                "אתם/אתן",
                "<span dir=\"rtl\">אתם/אתן</span>",
                "<span dir=\"rtl\">כתבתם / כתבתן</span>",
                "ktavtem / ktavten"
              ],
              [
                "הם/הן",
                "<span dir=\"rtl\">הם/הן</span>",
                "<span dir=\"rtl\">כתבו</span>",
                "katvu"
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
                "<span dir=\"rtl\">אתמול כתבתי מכתב.</span>",
                "Вчора я написав(-ла) листа."
              ],
              [
                "<span dir=\"rtl\">הם כתבו שיעורי בית.</span>",
                "Вони написали домашнє завдання."
              ]
            ]
          },
          {
            "type": "tip",
            "title": "Одна форма для двох осіб",
            "text": "Форми \"ти\" (ч.р.) і \"я\" схожі лише голосними: <span dir=\"rtl\">כתבת</span> (ти, ч.р.) vs <span dir=\"rtl\">כתבתי</span> (я) — головне не переплутати суфікс.",
            "en": {
              "title": "Watch the suffixes",
              "text": "Second-person masculine and first-person forms look similar: כתבת (\"you\", m.) vs כתבתי (\"I\") — the suffix is what distinguishes them."
            }
          }
        ],
        "titleEn": "Binyan Pa'al — Past"
      },
      {
        "id": "paal-present-full",
        "title": "בניין קל — הווה (הרחבה) — A1",
        "emoji": "📗",
        "sections": [
          {
            "type": "intro",
            "text": "У теперішньому часі Пааль дієслово змінюється лише за родом і числом (не за особою) — форма діє як прикметник-дієприкметник (בינוני).",
            "en": {
              "text": "In the present tense, Paal verbs change only by gender and number (not by person) — the form functions as an active participle (beinoni)."
            }
          },
          {
            "type": "formula",
            "title": "<span dir=\"rtl\">כותב</span> — теперішній час",
            "rows": [
              [
                "ч.р. одн.",
                "אני/אתה/הוא",
                "<span dir=\"rtl\">כותב</span>",
                "kotev"
              ],
              [
                "ж.р. одн.",
                "אני/את/היא",
                "<span dir=\"rtl\">כותבת</span>",
                "kotevet"
              ],
              [
                "ч.р. мн.",
                "אנחנו/אתם/הם",
                "<span dir=\"rtl\">כותבים</span>",
                "kotvim"
              ],
              [
                "ж.р. мн.",
                "אנחנו/אתן/הן",
                "<span dir=\"rtl\">כותבות</span>",
                "kotvot"
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
                "<span dir=\"rtl\">אני כותב עכשיו.</span>",
                "Я пишу зараз. (ч.р.)"
              ],
              [
                "<span dir=\"rtl\">הן כותבות מייל.</span>",
                "Вони пишуть імейл. (ж.р.)"
              ]
            ]
          },
          {
            "type": "note",
            "title": "Одна форма — 3 функції",
            "text": "Форма теперішнього часу (<span dir=\"rtl\">בינוני</span>) також працює як звичайний прикметник і як іменник: <span dir=\"rtl\">כותב</span> може означати \"пишу\", \"той, хто пише\" або \"письменник\" залежно від контексту.",
            "en": {
              "title": "One form, three functions",
              "text": "The present-tense form (beinoni) also doubles as a plain adjective and as a noun: כותב can mean \"writing\", \"one who writes\", or \"a writer\" depending on context."
            }
          }
        ],
        "titleEn": "Binyan Pa'al — Present (Extended)"
      },
      {
        "id": "paal-future",
        "title": "בניין קל — עתיד — A2",
        "emoji": "📗",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється префіксами (א-, ת-, י-, נ-) перед основою кореня. Ці префікси однакові для всіх біньянів — лише голосні змінюються.",
            "en": {
              "text": "The future tense is formed with prefixes (א-, ת-, י-, נ-) before the root base. These prefixes are the same across all binyanim — only the vowels change."
            }
          },
          {
            "type": "formula",
            "title": "<span dir=\"rtl\">יכתוב</span> — майбутній час",
            "rows": [
              [
                "אני",
                "<span dir=\"rtl\">אני</span>",
                "<span dir=\"rtl\">אכתוב</span>",
                "ekhtov"
              ],
              [
                "אתה",
                "<span dir=\"rtl\">אתה</span>",
                "<span dir=\"rtl\">תכתוב</span>",
                "tikhtov"
              ],
              [
                "את",
                "<span dir=\"rtl\">את</span>",
                "<span dir=\"rtl\">תכתבי</span>",
                "tikhtevi"
              ],
              [
                "הוא",
                "<span dir=\"rtl\">הוא</span>",
                "<span dir=\"rtl\">יכתוב</span>",
                "yikhtov"
              ],
              [
                "היא",
                "<span dir=\"rtl\">היא</span>",
                "<span dir=\"rtl\">תכתוב</span>",
                "tikhtov"
              ],
              [
                "אנחנו",
                "<span dir=\"rtl\">אנחנו</span>",
                "<span dir=\"rtl\">נכתוב</span>",
                "nikhtov"
              ],
              [
                "אתם/אתן",
                "<span dir=\"rtl\">אתם/אתן</span>",
                "<span dir=\"rtl\">תכתבו</span>",
                "tikhtevu"
              ],
              [
                "הם/הן",
                "<span dir=\"rtl\">הם/הן</span>",
                "<span dir=\"rtl\">יכתבו</span>",
                "yikhtevu"
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
                "<span dir=\"rtl\">מחר אכתוב לך.</span>",
                "Завтра я напишу тобі."
              ],
              [
                "<span dir=\"rtl\">הם יכתבו מבחן.</span>",
                "Вони писатимуть контрольну."
              ]
            ]
          },
          {
            "type": "tip",
            "title": "Мнемоніка א-ת-י-נ",
            "text": "Запам'ятай префікси майбутнього часу як слово <span dir=\"rtl\">איתן</span> (\"міцний\"): א (я), ת (ти/вона), י (він/вони), נ (ми).",
            "en": {
              "title": "The איתן mnemonic",
              "text": "Remember the future-tense prefixes as spelling the word איתן (\"sturdy\"): א (I), ת (you/she), י (he/they), נ (we)."
            }
          }
        ],
        "titleEn": "Binyan Pa'al — Future"
      },
      {
        "id": "paal-imperative",
        "title": "בניין קל — ציווי — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб використовується лише у формах \"ти\" (2-а особа) і в розмовній мові часто замінюється майбутнім часом (\"<span dir=\"rtl\">תכתוב</span>!\" замість \"<span dir=\"rtl\">כתוב</span>!\").",
            "en": {
              "text": "The imperative is used only in the 2nd person (\"you\") forms, and in casual speech is often replaced by the future tense (\"תכתוב!\" instead of \"כתוב!\")."
            }
          },
          {
            "type": "formula",
            "title": "<span dir=\"rtl\">כתוב</span> — наказовий спосіб",
            "rows": [
              [
                "ти (ч.р.)",
                "אתה",
                "<span dir=\"rtl\">כתוב!</span>",
                "ktov"
              ],
              [
                "ти (ж.р.)",
                "את",
                "<span dir=\"rtl\">כתבי!</span>",
                "kitvi"
              ],
              [
                "ви",
                "אתם/אתן",
                "<span dir=\"rtl\">כתבו!</span>",
                "kitvu"
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
                "<span dir=\"rtl\">סגור את הדלת!</span>",
                "Зачини двері! (ч.р.)"
              ],
              [
                "<span dir=\"rtl\">בואי הנה!</span>",
                "Ходи сюди! (ж.р.)"
              ]
            ]
          },
          {
            "type": "note",
            "title": "Заперечний наказ",
            "text": "Заборону не можна виразити наказовим способом напряму — потрібно вжити <span dir=\"rtl\">אל</span> + майбутній час: <span dir=\"rtl\">אל תכתוב!</span> (Не пиши!).",
            "en": {
              "title": "Negative commands",
              "text": "You cannot negate the imperative directly — use אל + the future tense instead: אל תכתוב! (\"Don't write!\")."
            }
          }
        ],
        "titleEn": "Binyan Pa'al — Imperative"
      },
      {
        "id": "piel-conjugation",
        "title": "בניין פיעל — A2",
        "emoji": "📘",
        "sections": [
          {
            "type": "intro",
            "text": "Піель — активний \"посилений\" біньян: часто виражає інтенсивну, повторювану або каузативну дію. Приклад: <span dir=\"rtl\">לדבר</span> (говорити), корінь ד-ב-ר.",
            "en": {
              "text": "Piel is an active, \"intensive\" binyan: it often expresses repeated, intensive, or causative action. Example: לדבר (to speak), root ד-ב-ר."
            }
          },
          {
            "type": "table",
            "title": "Теперішній час",
            "rows": [
              [
                "ч.р. одн.",
                "<span dir=\"rtl\">מדבר</span> (medaber)"
              ],
              [
                "ж.р. одн.",
                "<span dir=\"rtl\">מדברת</span> (medaberet)"
              ],
              [
                "ч.р. мн.",
                "<span dir=\"rtl\">מדברים</span> (medabrim)"
              ],
              [
                "ж.р. мн.",
                "<span dir=\"rtl\">מדברות</span> (medabrot)"
              ]
            ]
          },
          {
            "type": "formula",
            "title": "Минулий час",
            "rows": [
              [
                "אני",
                "<span dir=\"rtl\">אני</span>",
                "<span dir=\"rtl\">דיברתי</span>",
                "dibarti"
              ],
              [
                "אתה",
                "<span dir=\"rtl\">אתה</span>",
                "<span dir=\"rtl\">דיברת</span>",
                "dibarta"
              ],
              [
                "הוא",
                "<span dir=\"rtl\">הוא</span>",
                "<span dir=\"rtl\">דיבר</span>",
                "diber"
              ],
              [
                "היא",
                "<span dir=\"rtl\">היא</span>",
                "<span dir=\"rtl\">דיברה</span>",
                "dibra"
              ],
              [
                "אנחנו",
                "<span dir=\"rtl\">אנחנו</span>",
                "<span dir=\"rtl\">דיברנו</span>",
                "dibarnu"
              ],
              [
                "הם/הן",
                "<span dir=\"rtl\">הם/הן</span>",
                "<span dir=\"rtl\">דיברו</span>",
                "dibru"
              ]
            ]
          },
          {
            "type": "formula",
            "title": "Майбутній час",
            "rows": [
              [
                "אני",
                "<span dir=\"rtl\">אני</span>",
                "<span dir=\"rtl\">אדבר</span>",
                "adaber"
              ],
              [
                "אתה",
                "<span dir=\"rtl\">אתה</span>",
                "<span dir=\"rtl\">תדבר</span>",
                "tedaber"
              ],
              [
                "הוא",
                "<span dir=\"rtl\">הוא</span>",
                "<span dir=\"rtl\">ידבר</span>",
                "yedaber"
              ],
              [
                "אנחנו",
                "<span dir=\"rtl\">אנחנו</span>",
                "<span dir=\"rtl\">נדבר</span>",
                "nedaber"
              ],
              [
                "הם/הן",
                "<span dir=\"rtl\">הם/הן</span>",
                "<span dir=\"rtl\">ידברו</span>",
                "yedabru"
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
                "<span dir=\"rtl\">אני מדבר עברית.</span>",
                "Я розмовляю на івриті."
              ],
              [
                "<span dir=\"rtl\">היא דיברה איתו אתמול.</span>",
                "Вона говорила з ним учора."
              ]
            ]
          },
          {
            "type": "tip",
            "title": "Впізнати Піель",
            "text": "Піель легко впізнати за подвоєною середньою приголосною кореня у словнику (нескладно у вимові) та за префіксом <span dir=\"rtl\">מ-</span> у теперішньому часі без додаткових голосних, як у Гіфіль.",
            "en": {
              "title": "Spotting Piel",
              "text": "Piel is recognizable by its \"doubled\" middle root consonant (in the dictionary form) and by the מ- prefix in the present tense without the extra vowel pattern Hifil has."
            }
          }
        ],
        "titleEn": "Binyan Piel — A2"
      },
      {
        "id": "hifil-conjugation",
        "title": "בניין הפעיל — A2",
        "emoji": "📙",
        "sections": [
          {
            "type": "intro",
            "text": "Гіфіль — каузативний біньян: \"змусити щось статися\". Приклад: <span dir=\"rtl\">להזמין</span> (запросити/замовити), корінь ז-מ-ן.",
            "en": {
              "text": "Hifil is the causative binyan: \"to make something happen\". Example: להזמין (to invite / order), root ז-מ-ן."
            }
          },
          {
            "type": "table",
            "title": "Теперішній час",
            "rows": [
              [
                "ч.р. одн.",
                "<span dir=\"rtl\">מזמין</span> (mazmin)"
              ],
              [
                "ж.р. одн.",
                "<span dir=\"rtl\">מזמינה</span> (mazmina)"
              ],
              [
                "ч.р. мн.",
                "<span dir=\"rtl\">מזמינים</span> (mazminim)"
              ],
              [
                "ж.р. мн.",
                "<span dir=\"rtl\">מזמינות</span> (mazminot)"
              ]
            ]
          },
          {
            "type": "formula",
            "title": "Минулий час",
            "rows": [
              [
                "אני",
                "<span dir=\"rtl\">אני</span>",
                "<span dir=\"rtl\">הזמנתי</span>",
                "hizmanti"
              ],
              [
                "אתה",
                "<span dir=\"rtl\">אתה</span>",
                "<span dir=\"rtl\">הזמנת</span>",
                "hizmanta"
              ],
              [
                "הוא",
                "<span dir=\"rtl\">הוא</span>",
                "<span dir=\"rtl\">הזמין</span>",
                "hizmin"
              ],
              [
                "היא",
                "<span dir=\"rtl\">היא</span>",
                "<span dir=\"rtl\">הזמינה</span>",
                "hizmina"
              ],
              [
                "אנחנו",
                "<span dir=\"rtl\">אנחנו</span>",
                "<span dir=\"rtl\">הזמנו</span>",
                "hizmanu"
              ],
              [
                "הם/הן",
                "<span dir=\"rtl\">הם/הן</span>",
                "<span dir=\"rtl\">הזמינו</span>",
                "hizminu"
              ]
            ]
          },
          {
            "type": "formula",
            "title": "Майбутній час",
            "rows": [
              [
                "אני",
                "<span dir=\"rtl\">אני</span>",
                "<span dir=\"rtl\">אזמין</span>",
                "azmin"
              ],
              [
                "אתה",
                "<span dir=\"rtl\">אתה</span>",
                "<span dir=\"rtl\">תזמין</span>",
                "tazmin"
              ],
              [
                "הוא",
                "<span dir=\"rtl\">הוא</span>",
                "<span dir=\"rtl\">יזמין</span>",
                "yazmin"
              ],
              [
                "אנחנו",
                "<span dir=\"rtl\">אנחנו</span>",
                "<span dir=\"rtl\">נזמין</span>",
                "nazmin"
              ],
              [
                "הם/הן",
                "<span dir=\"rtl\">הם/הן</span>",
                "<span dir=\"rtl\">יזמינו</span>",
                "yazminu"
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
                "<span dir=\"rtl\">אנחנו מזמינים פיצה.</span>",
                "Ми замовляємо піцу."
              ],
              [
                "<span dir=\"rtl\">הוא הזמין אותי למסיבה.</span>",
                "Він запросив мене на вечірку."
              ]
            ]
          },
          {
            "type": "note",
            "title": "Значення каузативу",
            "text": "Багато дієслів Гіфіль виражають \"змушування\": <span dir=\"rtl\">להכניס</span> (внести, букв. \"змусити ввійти\"), <span dir=\"rtl\">להסביר</span> (пояснити, букв. \"зробити зрозумілим\").",
            "en": {
              "title": "Causative meaning",
              "text": "Many Hifil verbs express \"causing\": להכניס (\"to bring in\", lit. \"to cause to enter\"), להסביר (\"to explain\", lit. \"to make clear\")."
            }
          }
        ],
        "titleEn": "Binyan Hif'il — A2"
      },
      {
        "id": "nifal-conjugation",
        "title": "בניין נפעל — A2",
        "emoji": "📕",
        "sections": [
          {
            "type": "intro",
            "text": "Ніфаль зазвичай виражає пасивний або зворотний стан щодо Пааль, але багато дієслів Ніфаль — самостійні, без активного відповідника. Приклад: <span dir=\"rtl\">להיכנס</span> (увійти), корінь כ-נ-ס.",
            "en": {
              "text": "Nifal usually expresses a passive or reflexive state relative to Paal, but many Nifal verbs stand alone without an active counterpart. Example: להיכנס (to enter), root כ-נ-ס."
            }
          },
          {
            "type": "table",
            "title": "Теперішній час",
            "rows": [
              [
                "ч.р. одн.",
                "<span dir=\"rtl\">נכנס</span> (nichnas)"
              ],
              [
                "ж.р. одн.",
                "<span dir=\"rtl\">נכנסת</span> (nichneset)"
              ],
              [
                "ч.р. мн.",
                "<span dir=\"rtl\">נכנסים</span> (nichnasim)"
              ],
              [
                "ж.р. мн.",
                "<span dir=\"rtl\">נכנסות</span> (nichnasot)"
              ]
            ]
          },
          {
            "type": "formula",
            "title": "Минулий час",
            "rows": [
              [
                "אני",
                "<span dir=\"rtl\">אני</span>",
                "<span dir=\"rtl\">נכנסתי</span>",
                "nichnasti"
              ],
              [
                "אתה",
                "<span dir=\"rtl\">אתה</span>",
                "<span dir=\"rtl\">נכנסת</span>",
                "nichnasta"
              ],
              [
                "הוא",
                "<span dir=\"rtl\">הוא</span>",
                "<span dir=\"rtl\">נכנס</span>",
                "nichnas"
              ],
              [
                "היא",
                "<span dir=\"rtl\">היא</span>",
                "<span dir=\"rtl\">נכנסה</span>",
                "nichnesa"
              ],
              [
                "אנחנו",
                "<span dir=\"rtl\">אנחנו</span>",
                "<span dir=\"rtl\">נכנסנו</span>",
                "nichnasnu"
              ],
              [
                "הם/הן",
                "<span dir=\"rtl\">הם/הן</span>",
                "<span dir=\"rtl\">נכנסו</span>",
                "nichnesu"
              ]
            ]
          },
          {
            "type": "formula",
            "title": "Майбутній час",
            "rows": [
              [
                "אני",
                "<span dir=\"rtl\">אני</span>",
                "<span dir=\"rtl\">אכנס</span>",
                "ekanes"
              ],
              [
                "אתה",
                "<span dir=\"rtl\">אתה</span>",
                "<span dir=\"rtl\">תיכנס</span>",
                "tikanes"
              ],
              [
                "הוא",
                "<span dir=\"rtl\">הוא</span>",
                "<span dir=\"rtl\">ייכנס</span>",
                "yikanes"
              ],
              [
                "אנחנו",
                "<span dir=\"rtl\">אנחנו</span>",
                "<span dir=\"rtl\">ניכנס</span>",
                "nikanes"
              ],
              [
                "הם/הן",
                "<span dir=\"rtl\">הם/הן</span>",
                "<span dir=\"rtl\">ייכנסו</span>",
                "yikanesu"
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
                "<span dir=\"rtl\">אנחנו נכנסים לבית.</span>",
                "Ми заходимо в дім."
              ],
              [
                "<span dir=\"rtl\">הכוס נשברה.</span>",
                "Склянка розбилась. (пасив)"
              ]
            ]
          },
          {
            "type": "tip",
            "title": "Впізнати Ніфаль",
            "text": "У словнику (форма минулого часу, він) Ніфаль завжди починається на <span dir=\"rtl\">נ-</span>: <span dir=\"rtl\">נכנס</span>, <span dir=\"rtl\">נשבר</span>, <span dir=\"rtl\">נולד</span>.",
            "en": {
              "title": "Spotting Nifal",
              "text": "In the dictionary form (past tense, \"he\"), Nifal verbs always start with נ-: נכנס, נשבר, נולד."
            }
          }
        ],
        "titleEn": "Binyan Nif'al — A2"
      },
      {
        "id": "hitpael-conjugation",
        "title": "בניין התפעל — A2",
        "emoji": "📔",
        "sections": [
          {
            "type": "intro",
            "text": "Гітпаель виражає зворотну, взаємну дію (\"робити щось собі/один одному\") або зміну стану. Приклад: <span dir=\"rtl\">להתרחץ</span> (митися), корінь ר-ח-צ.",
            "en": {
              "text": "Hitpael expresses reflexive or reciprocal action (\"doing something to oneself / each other\") or a change of state. Example: להתרחץ (to wash oneself/shower), root ר-ח-צ."
            }
          },
          {
            "type": "table",
            "title": "Теперішній час",
            "rows": [
              [
                "ч.р. одн.",
                "<span dir=\"rtl\">מתרחץ</span> (mitrachetz)"
              ],
              [
                "ж.р. одн.",
                "<span dir=\"rtl\">מתרחצת</span> (mitrachetzet)"
              ],
              [
                "ч.р. мн.",
                "<span dir=\"rtl\">מתרחצים</span> (mitrachatzim)"
              ],
              [
                "ж.р. мн.",
                "<span dir=\"rtl\">מתרחצות</span> (mitrachatzot)"
              ]
            ]
          },
          {
            "type": "formula",
            "title": "Минулий час",
            "rows": [
              [
                "אני",
                "<span dir=\"rtl\">אני</span>",
                "<span dir=\"rtl\">התרחצתי</span>",
                "hitrachatzti"
              ],
              [
                "אתה",
                "<span dir=\"rtl\">אתה</span>",
                "<span dir=\"rtl\">התרחצת</span>",
                "hitrachatzta"
              ],
              [
                "הוא",
                "<span dir=\"rtl\">הוא</span>",
                "<span dir=\"rtl\">התרחץ</span>",
                "hitrachetz"
              ],
              [
                "היא",
                "<span dir=\"rtl\">היא</span>",
                "<span dir=\"rtl\">התרחצה</span>",
                "hitrachatza"
              ],
              [
                "אנחנו",
                "<span dir=\"rtl\">אנחנו</span>",
                "<span dir=\"rtl\">התרחצנו</span>",
                "hitrachatznu"
              ],
              [
                "הם/הן",
                "<span dir=\"rtl\">הם/הן</span>",
                "<span dir=\"rtl\">התרחצו</span>",
                "hitrachatzu"
              ]
            ]
          },
          {
            "type": "formula",
            "title": "Майбутній час",
            "rows": [
              [
                "אני",
                "<span dir=\"rtl\">אני</span>",
                "<span dir=\"rtl\">אתרחץ</span>",
                "etrachetz"
              ],
              [
                "אתה",
                "<span dir=\"rtl\">אתה</span>",
                "<span dir=\"rtl\">תתרחץ</span>",
                "titrachetz"
              ],
              [
                "הוא",
                "<span dir=\"rtl\">הוא</span>",
                "<span dir=\"rtl\">יתרחץ</span>",
                "yitrachetz"
              ],
              [
                "אנחנו",
                "<span dir=\"rtl\">אנחנו</span>",
                "<span dir=\"rtl\">נתרחץ</span>",
                "nitrachetz"
              ],
              [
                "הם/הן",
                "<span dir=\"rtl\">הם/הן</span>",
                "<span dir=\"rtl\">יתרחצו</span>",
                "yitrachatzu"
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
                "<span dir=\"rtl\">אני מתרחץ כל בוקר.</span>",
                "Я приймаю душ щоранку."
              ],
              [
                "<span dir=\"rtl\">הם התכתבו כל הלילה.</span>",
                "Вони листувалися всю ніч. (взаємно)"
              ]
            ]
          },
          {
            "type": "note",
            "title": "Впізнати Гітпаель",
            "text": "Гітпаель завжди починається з <span dir=\"rtl\">הת-</span> (минулий/словникова форма) або <span dir=\"rtl\">מת-</span> (теперішній час): <span dir=\"rtl\">התלבש</span> (одягнувся), <span dir=\"rtl\">מתאמן</span> (тренується).",
            "en": {
              "title": "Spotting Hitpael",
              "text": "Hitpael always starts with הת- (past/dictionary form) or מת- (present tense): התלבש (\"got dressed\"), מתאמן (\"is training\")."
            }
          }
        ],
        "titleEn": "Binyan Hitpael — A2"
      },
      {
        "id": "pual-hufal",
        "title": "פועל וסביל — פֻּעַל והֻפְעַל — B1",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Пуаль і Гуфаль — пасивні пари до Піель і Гіфіль відповідно. Вони не мають наказового способу й найчастіше вживаються в теперішньому часі як дієприкметники стану.",
            "en": {
              "text": "Pual and Hufal are the passive counterparts of Piel and Hifil respectively. They have no imperative and are most often used in the present tense as stative participles."
            }
          },
          {
            "type": "table",
            "title": "Активний → пасивний",
            "rows": [
              [
                "<span dir=\"rtl\">בישל</span> (Піель: зварив)",
                "<span dir=\"rtl\">מבושל</span> (Пуаль: зварений)"
              ],
              [
                "<span dir=\"rtl\">סידר</span> (Піель: прибрав)",
                "<span dir=\"rtl\">מסודר</span> (Пуаль: прибраний)"
              ],
              [
                "<span dir=\"rtl\">הזמין</span> (Гіфіль: запросив)",
                "<span dir=\"rtl\">מוזמן</span> (Гуфаль: запрошений)"
              ],
              [
                "<span dir=\"rtl\">הפעיל</span> (Гіфіль: увімкнув)",
                "<span dir=\"rtl\">מופעל</span> (Гуфаль: увімкнений)"
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
                "<span dir=\"rtl\">האוכל כבר מבושל.</span>",
                "Їжа вже зварена."
              ],
              [
                "<span dir=\"rtl\">החדר מסודר.</span>",
                "Кімната прибрана."
              ],
              [
                "<span dir=\"rtl\">אתה מוזמן למסיבה.</span>",
                "Тебе запрошено на вечірку."
              ]
            ]
          },
          {
            "type": "tip",
            "title": "Голосний \"у\" — маркер пасиву",
            "text": "В обох пасивних біньянах характерний голосний \"у\" у першому складі: <span dir=\"rtl\">מְבֻשָּׁל</span>, <span dir=\"rtl\">מֻזְמָן</span> — це найшвидший спосіб впізнати пасивну форму.",
            "en": {
              "title": "The \"u\" vowel marks the passive",
              "text": "Both passive binyanim feature a characteristic \"u\" vowel in the first syllable — the fastest way to spot a passive form at a glance."
            }
          }
        ],
        "titleEn": "Passive Binyanim — Pu'al & Huf'al"
      },
      {
        "id": "infinitive-construct",
        "title": "שם הפועל — A2",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "Інфінітив в івриті утворюється префіксом <span dir=\"rtl\">ל-</span> перед основою кореня. Форма інфінітива залежить від біньяну і використовується після дієслів волі/можливості/обов'язку.",
            "en": {
              "text": "The infinitive in Hebrew is formed with the prefix ל- before the root base. Its shape depends on the binyan, and it's used after verbs of will, ability, or obligation."
            }
          },
          {
            "type": "table",
            "title": "Інфінітив за біньянами",
            "rows": [
              [
                "Пааль",
                "<span dir=\"rtl\">לכתוב</span> (писати)"
              ],
              [
                "Ніфаль",
                "<span dir=\"rtl\">להיכנס</span> (входити)"
              ],
              [
                "Піель",
                "<span dir=\"rtl\">לדבר</span> (говорити)"
              ],
              [
                "Гіфіль",
                "<span dir=\"rtl\">להזמין</span> (запрошувати)"
              ],
              [
                "Гітпаель",
                "<span dir=\"rtl\">להתרחץ</span> (митися)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади вживання",
            "en": {
              "title": "Usage examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">אני רוצה לכתוב לך.</span>",
                "Я хочу написати тобі."
              ],
              [
                "<span dir=\"rtl\">היא צריכה להתרחץ.</span>",
                "Їй потрібно помитися."
              ],
              [
                "<span dir=\"rtl\">אנחנו יכולים לדבר עכשיו?</span>",
                "Ми можемо поговорити зараз?"
              ]
            ]
          },
          {
            "type": "note",
            "title": "Слова, після яких завжди інфінітив",
            "text": "<span dir=\"rtl\">רוצה</span> (хочу), <span dir=\"rtl\">צריך</span> (потрібно), <span dir=\"rtl\">יכול</span> (можу), <span dir=\"rtl\">אוהב</span> (люблю [робити]), <span dir=\"rtl\">מתחיל</span> (починаю) — всі вимагають інфінітива з <span dir=\"rtl\">ל-</span> після себе.",
            "en": {
              "title": "Words always followed by the infinitive",
              "text": "רוצה (want), צריך (need to), יכול (can), אוהב (like [doing]), מתחיל (start to) — all require the ל- infinitive right after them."
            }
          }
        ],
        "titleEn": "The Infinitive — A2"
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
        "id": "construct-state",
        "title": "סמיכות — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Сміхут (сполучений стан) — це спосіб з'єднати два іменники в одне поняття без прийменника \"з\": \"перший\" іменник (нахід) часто трохи змінює форму, а означеність передається лише через \"другий\".",
            "en": {
              "text": "Smichut (construct state) links two nouns into a single compound concept without a preposition: the first noun often shifts form slightly, and definiteness is marked only on the second noun."
            }
          },
          {
            "type": "table",
            "title": "Приклади сміхуту",
            "rows": [
              [
                "<span dir=\"rtl\">בית</span> + <span dir=\"rtl\">ספר</span>",
                "<span dir=\"rtl\">בית ספר</span> (школа, букв. \"дім книги\")"
              ],
              [
                "<span dir=\"rtl\">חדר</span> + <span dir=\"rtl\">שינה</span>",
                "<span dir=\"rtl\">חדר שינה</span> (спальня)"
              ],
              [
                "<span dir=\"rtl\">בית</span> + <span dir=\"rtl\">ה</span> + <span dir=\"rtl\">ספר</span>",
                "<span dir=\"rtl\">בית הספר</span> (ця школа — артикль лише на другому слові)"
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
                "<span dir=\"rtl\">אני הולך לבית הספר.</span>",
                "Я йду до школи."
              ],
              [
                "<span dir=\"rtl\">היא עובדת בבית חולים.</span>",
                "Вона працює в лікарні."
              ]
            ]
          },
          {
            "type": "tip",
            "title": "Артикль тільки один раз",
            "text": "На відміну від узгодження прикметника (де <span dir=\"rtl\">ה-</span> дублюється), у сміхуті <span dir=\"rtl\">ה-</span> ставиться ТІЛЬКИ перед другим словом: <span dir=\"rtl\">בית הספר</span>, а не <span dir=\"rtl\">הבית הספר</span>.",
            "en": {
              "title": "The article appears only once",
              "text": "Unlike adjective agreement (where ה- is doubled), in smichut the ה- goes ONLY before the second word: בית הספר, never הבית הספר."
            }
          }
        ],
        "titleEn": "The Construct State (Smichut) — B1"
      },
      {
        "id": "direct-object-et",
        "title": "מילית המושא הישיר את — A2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "<span dir=\"rtl\">את</span> ставиться перед ОЗНАЧЕНИМ прямим додатком (означеним іменником, іменем або займенником) і не перекладається — це маркер, а не слово зі значенням.",
            "en": {
              "text": "את is placed before a DEFINITE direct object (a definite noun, a name, or a pronoun) and has no translation — it's a grammatical marker, not a meaningful word."
            }
          },
          {
            "type": "formula",
            "title": "Коли ставити <span dir=\"rtl\">את</span>",
            "rows": [
              [
                "✅",
                "дієслово + <span dir=\"rtl\">את</span> + означений додаток",
                "бачу книгу (ЦЮ)",
                "<span dir=\"rtl\">אני רואה את הספר.</span>"
              ],
              [
                "❌",
                "дієслово + неозначений додаток",
                "бачу (якусь) книгу",
                "<span dir=\"rtl\">אני רואה ספר.</span>"
              ]
            ]
          },
          {
            "type": "table",
            "title": "<span dir=\"rtl\">את</span> + займенникові суфікси",
            "rows": [
              [
                "<span dir=\"rtl\">אותי</span>",
                "мене"
              ],
              [
                "<span dir=\"rtl\">אותך</span>",
                "тебе (ч.р.)"
              ],
              [
                "<span dir=\"rtl\">אותה</span>",
                "її"
              ],
              [
                "<span dir=\"rtl\">אותו</span>",
                "його"
              ],
              [
                "<span dir=\"rtl\">אותנו</span>",
                "нас"
              ],
              [
                "<span dir=\"rtl\">אותם</span>",
                "їх (ч.р.)"
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
                "<span dir=\"rtl\">אני אוהב את דנה.</span>",
                "Я люблю Дану."
              ],
              [
                "<span dir=\"rtl\">היא ראתה אותי בעיר.</span>",
                "Вона бачила мене в місті."
              ]
            ]
          }
        ],
        "titleEn": "The Direct Object Marker Et — A2"
      },
      {
        "id": "prepositions-le",
        "title": "מילת היחס ל- — A1",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "Прийменник <span dir=\"rtl\">ל-</span> (\"до, для\") приєднується прямо до слова як префікс. У поєднанні з займенниками він утворює окремі злиті форми.",
            "en": {
              "text": "The preposition ל- (\"to, for\") is attached directly to the following word as a prefix. Combined with pronouns, it forms fused suffix words."
            }
          },
          {
            "type": "table",
            "title": "<span dir=\"rtl\">ל-</span> + займенники",
            "rows": [
              [
                "<span dir=\"rtl\">לי</span>",
                "мені"
              ],
              [
                "<span dir=\"rtl\">לך</span>",
                "тобі (ч.р.) / (ж.р.)"
              ],
              [
                "<span dir=\"rtl\">לו</span>",
                "йому"
              ],
              [
                "<span dir=\"rtl\">לה</span>",
                "їй"
              ],
              [
                "<span dir=\"rtl\">לנו</span>",
                "нам"
              ],
              [
                "<span dir=\"rtl\">להם</span>",
                "їм (ч.р.)"
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
                "<span dir=\"rtl\">אני נותן לך מתנה.</span>",
                "Я даю тобі подарунок."
              ],
              [
                "<span dir=\"rtl\">אנחנו נוסעים לתל אביב.</span>",
                "Ми їдемо до Тель-Авіва."
              ]
            ]
          }
        ],
        "titleEn": "The Preposition Le- — A1"
      },
      {
        "id": "prepositions-be",
        "title": "מילת היחס ב- — A1",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Прийменник <span dir=\"rtl\">ב-</span> (\"в, за допомогою\") також приєднується як префікс і означає місце, засіб або час.",
            "en": {
              "text": "The preposition ב- (\"in, at, by/with\") also attaches as a prefix and expresses location, instrument, or time."
            }
          },
          {
            "type": "table",
            "title": "<span dir=\"rtl\">ב-</span> + займенники",
            "rows": [
              [
                "<span dir=\"rtl\">בי</span>",
                "у мені"
              ],
              [
                "<span dir=\"rtl\">בך</span>",
                "у тобі"
              ],
              [
                "<span dir=\"rtl\">בו</span>",
                "у ньому"
              ],
              [
                "<span dir=\"rtl\">בה</span>",
                "у ній"
              ],
              [
                "<span dir=\"rtl\">בנו</span>",
                "у нас"
              ],
              [
                "<span dir=\"rtl\">בהם</span>",
                "у них (ч.р.)"
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
                "<span dir=\"rtl\">אני גר בתל אביב.</span>",
                "Я живу в Тель-Авіві."
              ],
              [
                "<span dir=\"rtl\">היא כותבת בעט.</span>",
                "Вона пише ручкою."
              ],
              [
                "<span dir=\"rtl\">נפגש ביום ראשון.</span>",
                "Зустрінемось у неділю."
              ]
            ]
          }
        ],
        "titleEn": "The Preposition Be- — A1"
      },
      {
        "id": "prepositions-im-etzel",
        "title": "עם / אצל — A2",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "<span dir=\"rtl\">עם</span> означає \"з\" (у супроводі), а <span dir=\"rtl\">אצל</span> означає \"у (когось), в домі/офісі когось\" — обидва часто плутають новачки.",
            "en": {
              "text": "עם means \"with\" (in the company of), while אצל means \"at [someone's] place\" — a preposition beginners often confuse."
            }
          },
          {
            "type": "table",
            "title": "<span dir=\"rtl\">עם</span> / <span dir=\"rtl\">אצל</span> + займенники",
            "rows": [
              [
                "<span dir=\"rtl\">איתי</span>",
                "зі мною"
              ],
              [
                "<span dir=\"rtl\">איתך</span>",
                "з тобою"
              ],
              [
                "<span dir=\"rtl\">איתו</span>",
                "з ним"
              ],
              [
                "<span dir=\"rtl\">אצלי</span>",
                "у мене (вдома)"
              ],
              [
                "<span dir=\"rtl\">אצלה</span>",
                "у неї (вдома)"
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
                "<span dir=\"rtl\">אני הולך איתך.</span>",
                "Я йду з тобою."
              ],
              [
                "<span dir=\"rtl\">נפגשים אצלי בשמונה.</span>",
                "Зустрічаємось у мене о восьмій."
              ]
            ]
          }
        ],
        "titleEn": "Im / Etzel (With/At) — A2"
      },
      {
        "id": "prepositions-al-min",
        "title": "על / מ- — A2",
        "emoji": "📤",
        "sections": [
          {
            "type": "intro",
            "text": "<span dir=\"rtl\">על</span> означає \"на\" або \"про\", а <span dir=\"rtl\">מ-</span> (варіант <span dir=\"rtl\">מן</span>) означає \"з, від\" (джерело/напрямок від).",
            "en": {
              "text": "על means \"on\" or \"about\", while מ- (also מן) means \"from\" (source/direction away from)."
            }
          },
          {
            "type": "table",
            "title": "<span dir=\"rtl\">על</span> / <span dir=\"rtl\">מ-</span> + займенники",
            "rows": [
              [
                "<span dir=\"rtl\">עליי</span>",
                "на мені / про мене"
              ],
              [
                "<span dir=\"rtl\">עליו</span>",
                "на ньому / про нього"
              ],
              [
                "<span dir=\"rtl\">ממני</span>",
                "від мене"
              ],
              [
                "<span dir=\"rtl\">ממנו</span>",
                "від нього"
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
                "<span dir=\"rtl\">הספר על השולחן.</span>",
                "Книга на столі."
              ],
              [
                "<span dir=\"rtl\">היא סיפרה לי עליך.</span>",
                "Вона розповіла мені про тебе."
              ],
              [
                "<span dir=\"rtl\">אני מגיע מאוקראינה.</span>",
                "Я приїхав з України."
              ]
            ]
          }
        ],
        "titleEn": "Al / Min (On/From) — A2"
      },
      {
        "id": "question-words",
        "title": "מילות שאלה — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питальні слова зазвичай стоять на початку речення. Порядок слів у решті речення після них — як у звичайному стверджувальному реченні.",
            "en": {
              "text": "Question words usually stand at the start of the sentence. Word order in the rest of the sentence stays the same as in a normal statement."
            }
          },
          {
            "type": "table",
            "title": "Основні питальні слова",
            "rows": [
              [
                "<span dir=\"rtl\">מה</span>",
                "що"
              ],
              [
                "<span dir=\"rtl\">מי</span>",
                "хто"
              ],
              [
                "<span dir=\"rtl\">איפה</span>",
                "де"
              ],
              [
                "<span dir=\"rtl\">מתי</span>",
                "коли"
              ],
              [
                "<span dir=\"rtl\">למה</span>",
                "чому"
              ],
              [
                "<span dir=\"rtl\">איך</span>",
                "як"
              ],
              [
                "<span dir=\"rtl\">כמה</span>",
                "скільки"
              ],
              [
                "<span dir=\"rtl\">איזה / איזו</span>",
                "який / яка"
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
                "<span dir=\"rtl\">איפה אתה גר?</span>",
                "Де ти живеш?"
              ],
              [
                "<span dir=\"rtl\">כמה זה עולה?</span>",
                "Скільки це коштує?"
              ],
              [
                "<span dir=\"rtl\">למה את עצובה?</span>",
                "Чому ти сумна?"
              ]
            ]
          }
        ],
        "titleEn": "Question Words — A1"
      },
      {
        "id": "word-order",
        "title": "סדר מילים במשפט — A2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів у сучасному івриті — підмет-присудок-додаток (SVO), як в українській. У формальному чи літературному стилі можливий інверсійний порядок VSO.",
            "en": {
              "text": "The basic word order in modern Hebrew is subject-verb-object (SVO), just like in English. In formal or literary style, inverted VSO order is also possible."
            }
          },
          {
            "type": "formula",
            "title": "SVO — стандартний порядок",
            "rows": [
              [
                "✅",
                "підмет + присудок + додаток",
                "Дана читає книгу.",
                "<span dir=\"rtl\">דנה קוראת ספר.</span>"
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
                "<span dir=\"rtl\">הילד אוכל תפוח.</span>",
                "Хлопчик їсть яблуко."
              ],
              [
                "<span dir=\"rtl\">אתמול הלכנו לים.</span>",
                "(обставина часу спереду) Вчора ми ходили на море."
              ]
            ]
          },
          {
            "type": "note",
            "title": "Гнучкість порядку",
            "text": "Обставини часу/місця часто виносяться на початок речення для акценту, без зміни значення: <span dir=\"rtl\">היום אני עובד</span> = <span dir=\"rtl\">אני עובד היום</span>.",
            "en": {
              "title": "Flexible ordering",
              "text": "Time/place adverbials are often fronted for emphasis, without changing the meaning: היום אני עובד = אני עובד היום (\"Today I'm working\")."
            }
          }
        ],
        "titleEn": "Word Order — A2"
      },
      {
        "id": "relative-clause-she",
        "title": "משפט זיקה עם ש- — A2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "<span dir=\"rtl\">ש-</span> — універсальний сполучник для підрядних речень: \"що/який/яка/котрий\". На відміну від англійської чи української, він ЗАВЖДИ один і той самий, незалежно від роду й числа.",
            "en": {
              "text": "ש- is the universal relative-clause connector: \"that / which / who\". Unlike English or Ukrainian, it never changes — the same ש- is used regardless of gender or number."
            }
          },
          {
            "type": "formula",
            "title": "Головне речення + <span dir=\"rtl\">ש-</span> + підрядне",
            "rows": [
              [
                "✅",
                "іменник",
                "<span dir=\"rtl\">ש-</span> + речення",
                "<span dir=\"rtl\">הספר שקראתי</span>"
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
                "<span dir=\"rtl\">האיש שראיתי הוא המורה שלי.</span>",
                "Чоловік, якого я бачив, — мій вчитель."
              ],
              [
                "<span dir=\"rtl\">אני חושב שזה נכון.</span>",
                "Я думаю, що це правильно."
              ],
              [
                "<span dir=\"rtl\">היא יודעת שאתה עסוק.</span>",
                "Вона знає, що ти зайнятий."
              ]
            ]
          },
          {
            "type": "tip",
            "title": "<span dir=\"rtl\">ש-</span> і <span dir=\"rtl\">אשר</span>",
            "text": "<span dir=\"rtl\">אשר</span> — літературний/офіційний синонім <span dir=\"rtl\">ש-</span>, але у розмовній мові майже завжди використовують коротшу форму <span dir=\"rtl\">ש-</span>.",
            "en": {
              "title": "ש- vs אשר",
              "text": "אשר is a literary/formal synonym for ש-, but everyday spoken Hebrew almost always uses the shorter ש-."
            }
          }
        ],
        "titleEn": "Relative Clauses with She- — A2"
      },
      {
        "id": "comparatives-superlatives",
        "title": "השוואה — יותר, הכי — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняльний ступінь утворюється словом <span dir=\"rtl\">יותר</span> (\"більш\") перед/після прикметника, а найвищий — словом <span dir=\"rtl\">הכי</span> (\"найбільш\") перед прикметником.",
            "en": {
              "text": "The comparative is formed with יותר (\"more\") before/after the adjective, and the superlative with הכי (\"most\") before the adjective."
            }
          },
          {
            "type": "formula",
            "title": "Порівняльний і найвищий ступінь",
            "rows": [
              [
                "✅",
                "прикметник + <span dir=\"rtl\">יותר</span>",
                "більш ...",
                "<span dir=\"rtl\">גדול יותר</span> (більший)"
              ],
              [
                "✅",
                "<span dir=\"rtl\">הכי</span> + прикметник",
                "най... ",
                "<span dir=\"rtl\">הכי גדול</span> (найбільший)"
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
                "<span dir=\"rtl\">הבית שלי גדול יותר משלך.</span>",
                "Мій дім більший за твій."
              ],
              [
                "<span dir=\"rtl\">זה הספר הכי טוב שקראתי.</span>",
                "Це найкраща книга, яку я читав."
              ]
            ]
          },
          {
            "type": "note",
            "title": "\"За/ніж\" — <span dir=\"rtl\">מ-</span>",
            "text": "У порівнянні друга частина (\"ніж X\") вводиться прийменником <span dir=\"rtl\">מ-</span>: <span dir=\"rtl\">גדול יותר ממנו</span> (більший, ніж він).",
            "en": {
              "title": "\"Than\" is מ-",
              "text": "In comparisons, the second element (\"than X\") is introduced with the preposition מ-: גדול יותר ממנו (\"bigger than him\")."
            }
          }
        ],
        "titleEn": "Comparison — Yoter, Hachi"
      },
      {
        "id": "modal-words",
        "title": "מילות מודליות — צריך, יכול, רוצה — A1",
        "emoji": "🔧",
        "sections": [
          {
            "type": "intro",
            "text": "В івриті немає модальних дієслів у звичному сенсі — замість цього використовуються прикметникоподібні слова, які узгоджуються з підметом за родом і числом і вимагають інфінітива.",
            "en": {
              "text": "Hebrew has no modal verbs in the usual sense — instead it uses adjective-like words that agree with the subject in gender/number and take the infinitive."
            }
          },
          {
            "type": "table",
            "title": "Основні \"модальні\" слова",
            "rows": [
              [
                "<span dir=\"rtl\">צריך / צריכה</span>",
                "потрібно, мусиш"
              ],
              [
                "<span dir=\"rtl\">יכול / יכולה</span>",
                "можу, можеш"
              ],
              [
                "<span dir=\"rtl\">רוצה</span>",
                "хочу, хочеш (одна форма для ч./ж.)"
              ],
              [
                "<span dir=\"rtl\">מותר</span>",
                "дозволено"
              ],
              [
                "<span dir=\"rtl\">אסור</span>",
                "заборонено"
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
                "<span dir=\"rtl\">אני צריך ללכת.</span>",
                "Мені потрібно йти."
              ],
              [
                "<span dir=\"rtl\">היא יכולה לעזור.</span>",
                "Вона може допомогти."
              ],
              [
                "<span dir=\"rtl\">אסור לעשן כאן.</span>",
                "Тут заборонено курити."
              ]
            ]
          },
          {
            "type": "tip",
            "title": "<span dir=\"rtl\">מותר</span>/<span dir=\"rtl\">אסור</span> — безособові",
            "text": "На відміну від <span dir=\"rtl\">צריך</span> і <span dir=\"rtl\">יכול</span>, слова <span dir=\"rtl\">מותר</span> і <span dir=\"rtl\">אסור</span> НЕ узгоджуються за родом/числом — вони завжди в одній формі.",
            "en": {
              "title": "מותר/אסור are impersonal",
              "text": "Unlike צריך and יכול, the words מותר and אסור do NOT agree in gender/number — they always stay in one fixed form."
            }
          }
        ],
        "titleEn": "Modal Words — Tsarich, Yachol, Rotse"
      },
      {
        "id": "numbers-11-20",
        "title": "מספרים 11–20 — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Числа від 11 до 19 утворюються поєднанням одиниці з <span dir=\"rtl\">עשר / עשרה</span> (\"-надцять\"), причому й тут зберігається узгодження за родом.",
            "en": {
              "text": "Numbers 11–19 are formed by combining the unit digit with עשר/עשרה (\"-teen\"), and gender agreement still applies."
            }
          },
          {
            "type": "table",
            "title": "11–20 (ч.р. / ж.р.)",
            "rows": [
              [
                "11",
                "<span dir=\"rtl\">אחד עשר</span> / <span dir=\"rtl\">אחת עשרה</span>"
              ],
              [
                "12",
                "<span dir=\"rtl\">שנים עשר</span> / <span dir=\"rtl\">שתים עשרה</span>"
              ],
              [
                "13",
                "<span dir=\"rtl\">שלושה עשר</span> / <span dir=\"rtl\">שלוש עשרה</span>"
              ],
              [
                "15",
                "<span dir=\"rtl\">חמישה עשר</span> / <span dir=\"rtl\">חמש עשרה</span>"
              ],
              [
                "20",
                "<span dir=\"rtl\">עשרים</span> (одна форма для обох родів)"
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
                "<span dir=\"rtl\">יש לי שתים עשרה שאלות.</span>",
                "У мене дванадцять питань."
              ],
              [
                "<span dir=\"rtl\">היא בת עשרים.</span>",
                "Їй двадцять років."
              ]
            ]
          }
        ],
        "titleEn": "Numbers 11-20 — A2"
      },
      {
        "id": "numbers-tens-hundreds",
        "title": "עשרות ומאות — B1",
        "emoji": "💯",
        "sections": [
          {
            "type": "intro",
            "text": "Десятки (20-90) мають лише одну форму для обох родів. Сотні й тисячі узгоджуються з іменником, який вони рахують, за родом.",
            "en": {
              "text": "The tens (20-90) have only a single form for both genders. Hundreds and thousands agree in gender with the noun being counted."
            }
          },
          {
            "type": "table",
            "title": "Десятки та сотні",
            "rows": [
              [
                "30",
                "<span dir=\"rtl\">שלושים</span>"
              ],
              [
                "40",
                "<span dir=\"rtl\">ארבעים</span>"
              ],
              [
                "50",
                "<span dir=\"rtl\">חמישים</span>"
              ],
              [
                "100",
                "<span dir=\"rtl\">מאה</span>"
              ],
              [
                "200",
                "<span dir=\"rtl\">מאתיים</span>"
              ],
              [
                "1000",
                "<span dir=\"rtl\">אלף</span>"
              ],
              [
                "2000",
                "<span dir=\"rtl\">אלפיים</span>"
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
                "<span dir=\"rtl\">זה עולה מאה שקל.</span>",
                "Це коштує сто шекелів."
              ],
              [
                "<span dir=\"rtl\">בעיר גרים אלפיים אנשים.</span>",
                "У місті живуть дві тисячі людей."
              ]
            ]
          },
          {
            "type": "note",
            "title": "Подвійна форма на \"-іים\"",
            "text": "Так само як з іменниками, суфікс <span dir=\"rtl\">-יים</span> означає \"два\": <span dir=\"rtl\">מאתיים</span> (200 = \"дві сотні\"), <span dir=\"rtl\">אלפיים</span> (2000 = \"дві тисячі\").",
            "en": {
              "title": "The dual \"-ayim\" pattern",
              "text": "Just like with nouns, the -ayim suffix means \"two\": מאתיים (200 = \"two hundreds\"), אלפיים (2000 = \"two thousands\")."
            }
          }
        ],
        "titleEn": "Tens & Hundreds — B1"
      },
      {
        "id": "ordinal-numbers",
        "title": "מספרים סודרים — A2",
        "emoji": "🥇",
        "sections": [
          {
            "type": "intro",
            "text": "Порядкові числівники (перший, другий...) — це фактично прикметники, тому вони узгоджуються з іменником за родом і числом, як і будь-який інший прикметник.",
            "en": {
              "text": "Ordinal numbers (first, second...) are essentially adjectives, so they agree with the noun in gender and number just like any other adjective."
            }
          },
          {
            "type": "table",
            "title": "Перші порядкові числівники",
            "rows": [
              [
                "перший",
                "<span dir=\"rtl\">ראשון</span> / <span dir=\"rtl\">ראשונה</span>"
              ],
              [
                "другий",
                "<span dir=\"rtl\">שני</span> / <span dir=\"rtl\">שנייה</span>"
              ],
              [
                "третій",
                "<span dir=\"rtl\">שלישי</span> / <span dir=\"rtl\">שלישית</span>"
              ],
              [
                "четвертий",
                "<span dir=\"rtl\">רביעי</span> / <span dir=\"rtl\">רביעית</span>"
              ],
              [
                "п'ятий",
                "<span dir=\"rtl\">חמישי</span> / <span dir=\"rtl\">חמישית</span>"
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
                "<span dir=\"rtl\">זו הפעם הראשונה שלי כאן.</span>",
                "Це мій перший раз тут."
              ],
              [
                "<span dir=\"rtl\">היום ראשון בשבוע.</span>",
                "Неділя — перший день тижня."
              ]
            ]
          }
        ],
        "titleEn": "Ordinal Numbers — A2"
      },
      {
        "id": "days-of-week",
        "title": "ימות השבוע — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Дні тижня в івриті названі просто числами (крім суботи) і починаються з неділі — першого робочого дня в Ізраїлі.",
            "en": {
              "text": "Days of the week in Hebrew are simply named by number (except Saturday) and the week starts on Sunday — the first workday in Israel."
            }
          },
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "неділя",
                "<span dir=\"rtl\">יום ראשון</span>"
              ],
              [
                "понеділок",
                "<span dir=\"rtl\">יום שני</span>"
              ],
              [
                "вівторок",
                "<span dir=\"rtl\">יום שלישי</span>"
              ],
              [
                "середа",
                "<span dir=\"rtl\">יום רביעי</span>"
              ],
              [
                "четвер",
                "<span dir=\"rtl\">יום חמישי</span>"
              ],
              [
                "п'ятниця",
                "<span dir=\"rtl\">יום שישי</span>"
              ],
              [
                "субота",
                "<span dir=\"rtl\">שבת</span>"
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
                "<span dir=\"rtl\">נתראה ביום שלישי.</span>",
                "Побачимось у вівторок."
              ],
              [
                "<span dir=\"rtl\">בשבת אני נח.</span>",
                "У суботу я відпочиваю."
              ]
            ]
          }
        ],
        "titleEn": "Days of the Week — A1"
      },
      {
        "id": "telling-time",
        "title": "שעות — A2",
        "emoji": "🕐",
        "sections": [
          {
            "type": "intro",
            "text": "Час запитується виразом <span dir=\"rtl\">מה השעה?</span> (\"котра година?\"), а відповідь завжди у жіночому роді, бо слово <span dir=\"rtl\">שעה</span> (година) — жіночого роду.",
            "en": {
              "text": "Time is asked with מה השעה? (\"what time is it?\"), and the answer is always in the feminine, because the word שעה (\"hour\") is feminine."
            }
          },
          {
            "type": "table",
            "title": "Основні вирази часу",
            "rows": [
              [
                "<span dir=\"rtl\">השעה שלוש.</span>",
                "Третя година."
              ],
              [
                "<span dir=\"rtl\">השעה שלוש וחצי.</span>",
                "Пів на четверту."
              ],
              [
                "<span dir=\"rtl\">השעה רבע לארבע.</span>",
                "За чверть четверта."
              ],
              [
                "<span dir=\"rtl\">השעה עשר בבוקר.</span>",
                "Десята ранку."
              ],
              [
                "<span dir=\"rtl\">השעה שמונה בערב.</span>",
                "Восьма вечора."
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
                "<span dir=\"rtl\">באיזו שעה נפגשים?</span>",
                "О котрій годині зустрічаємось?"
              ],
              [
                "<span dir=\"rtl\">השיעור מתחיל בשעה תשע.</span>",
                "Урок починається о дев'ятій."
              ]
            ]
          }
        ],
        "titleEn": "Telling Time — A2"
      },
      {
        "id": "months-dates",
        "title": "חודשים ותאריכים — A2",
        "emoji": "🗓️",
        "sections": [
          {
            "type": "intro",
            "text": "У повсякденному вжитку ізраїльтяни зазвичай користуються григоріанськими назвами місяців (запозичені слова), паралельно з єврейським календарем для свят.",
            "en": {
              "text": "In everyday use, Israelis mostly use Gregorian month names (borrowed words), alongside the Hebrew calendar for holidays."
            }
          },
          {
            "type": "table",
            "title": "Кілька місяців (григоріанський календар)",
            "rows": [
              [
                "січень",
                "<span dir=\"rtl\">ינואר</span>"
              ],
              [
                "лютий",
                "<span dir=\"rtl\">פברואר</span>"
              ],
              [
                "травень",
                "<span dir=\"rtl\">מאי</span>"
              ],
              [
                "вересень",
                "<span dir=\"rtl\">ספטמבר</span>"
              ],
              [
                "грудень",
                "<span dir=\"rtl\">דצמבר</span>"
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
                "<span dir=\"rtl\">היום התאריך חמישה במאי.</span>",
                "Сьогодні п'яте травня."
              ],
              [
                "<span dir=\"rtl\">נולדתי בחודש ינואר.</span>",
                "Я народився(-лася) у січні."
              ]
            ]
          }
        ],
        "titleEn": "Months & Dates — A2"
      },
      {
        "id": "conjunctions-basic",
        "title": "מילות חיבור בסיסיות — A1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Найпростіший сполучник — <span dir=\"rtl\">ו-</span> (\"і/та\"), який теж приєднується як префікс до наступного слова, а не пишеться окремо.",
            "en": {
              "text": "The simplest conjunction is ו- (\"and\"), which — like other one-letter particles — attaches as a prefix to the following word rather than standing alone."
            }
          },
          {
            "type": "table",
            "title": "Базові сполучники",
            "rows": [
              [
                "<span dir=\"rtl\">ו-</span>",
                "і, та"
              ],
              [
                "<span dir=\"rtl\">אבל</span>",
                "але"
              ],
              [
                "<span dir=\"rtl\">או</span>",
                "або"
              ],
              [
                "<span dir=\"rtl\">כי</span>",
                "бо, тому що"
              ],
              [
                "<span dir=\"rtl\">אז</span>",
                "тоді, отже"
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
                "<span dir=\"rtl\">אני ואתה</span>",
                "я і ти"
              ],
              [
                "<span dir=\"rtl\">אני עייף אבל שמח.</span>",
                "Я втомлений, але щасливий."
              ],
              [
                "<span dir=\"rtl\">לא באתי כי הייתי חולה.</span>",
                "Я не прийшов, бо був хворий."
              ]
            ]
          }
        ],
        "titleEn": "Basic Conjunctions — A1"
      },
      {
        "id": "conjunctions-advanced",
        "title": "מילות חיבור מתקדמות — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Складніші сполучники вводять умову, час або поступку — часто з часткою <span dir=\"rtl\">ש-</span> у складі.",
            "en": {
              "text": "More advanced conjunctions introduce condition, time, or concession — often built around the particle ש-."
            }
          },
          {
            "type": "table",
            "title": "Складніші сполучники",
            "rows": [
              [
                "<span dir=\"rtl\">אם</span>",
                "якщо"
              ],
              [
                "<span dir=\"rtl\">כאשר / כש-</span>",
                "коли"
              ],
              [
                "<span dir=\"rtl\">למרות ש-</span>",
                "незважаючи на те, що"
              ],
              [
                "<span dir=\"rtl\">מכיוון ש- / כי</span>",
                "оскільки"
              ],
              [
                "<span dir=\"rtl\">לפני ש-</span>",
                "перед тим, як"
              ],
              [
                "<span dir=\"rtl\">אחרי ש-</span>",
                "після того, як"
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
                "<span dir=\"rtl\">אם ירד גשם, נישאר בבית.</span>",
                "Якщо піде дощ, ми залишимось вдома."
              ],
              [
                "<span dir=\"rtl\">כשהייתי קטן, גרתי בקייב.</span>",
                "Коли я був маленьким, я жив у Києві."
              ],
              [
                "<span dir=\"rtl\">למרות שהיה קר, יצאנו לטייל.</span>",
                "Незважаючи на холод, ми пішли гуляти."
              ]
            ]
          }
        ],
        "titleEn": "Advanced Conjunctions — B1"
      },
      {
        "id": "adverbs",
        "title": "תארי פועל — A2",
        "emoji": "⚡",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від прикметників, прислівники в івриті НЕ узгоджуються з дієсловом — вони мають одну незмінну форму.",
            "en": {
              "text": "Unlike adjectives, Hebrew adverbs do NOT agree with the verb — they have a single unchanging form."
            }
          },
          {
            "type": "table",
            "title": "Поширені прислівники",
            "rows": [
              [
                "<span dir=\"rtl\">מהר</span>",
                "швидко"
              ],
              [
                "<span dir=\"rtl\">לאט</span>",
                "повільно"
              ],
              [
                "<span dir=\"rtl\">טוב</span>",
                "добре"
              ],
              [
                "<span dir=\"rtl\">היטב</span>",
                "добре (формальніше)"
              ],
              [
                "<span dir=\"rtl\">תמיד</span>",
                "завжди"
              ],
              [
                "<span dir=\"rtl\">אף פעם לא</span>",
                "ніколи"
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
                "<span dir=\"rtl\">היא רצה מהר.</span>",
                "Вона бігає швидко."
              ],
              [
                "<span dir=\"rtl\">הוא אף פעם לא מאחר.</span>",
                "Він ніколи не запізнюється."
              ]
            ]
          }
        ],
        "titleEn": "Adverbs — A2"
      },
      {
        "id": "gam-rak",
        "title": "גם / רק — A2",
        "emoji": "➕",
        "sections": [
          {
            "type": "intro",
            "text": "<span dir=\"rtl\">גם</span> (\"також\") і <span dir=\"rtl\">רק</span> (\"тільки\") — короткі, але дуже частотні слова, що стоять безпосередньо перед словом, до якого стосуються.",
            "en": {
              "text": "גם (\"also/too\") and רק (\"only\") are short but very common words that stand right before the word they modify."
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
                "<span dir=\"rtl\">גם אני רוצה לבוא.</span>",
                "Я теж хочу прийти."
              ],
              [
                "<span dir=\"rtl\">יש לי רק חמש דקות.</span>",
                "У мене лише п'ять хвилин."
              ],
              [
                "<span dir=\"rtl\">היא לא רק חכמה, גם אדיבה.</span>",
                "Вона не лише розумна, а й добра."
              ]
            ]
          }
        ],
        "titleEn": "Gam / Rak (Also/Only) — A2"
      },
      {
        "id": "dual-number",
        "title": "זוגי — הסיומת -יים — B1",
        "emoji": "👥",
        "sections": [
          {
            "type": "intro",
            "text": "Крім однини і множини, іврит має особливу форму для парних предметів або природних пар — суфікс <span dir=\"rtl\">-יים</span>, який часто виражає \"два\" в одному слові.",
            "en": {
              "text": "Besides singular and plural, Hebrew has a special dual form for naturally paired items or units of two — the -ayim suffix, which packs \"two\" into a single word."
            }
          },
          {
            "type": "table",
            "title": "Приклади подвійної форми",
            "rows": [
              [
                "<span dir=\"rtl\">יד</span> (рука)",
                "<span dir=\"rtl\">ידיים</span> (дві руки, обидві руки)"
              ],
              [
                "<span dir=\"rtl\">עין</span> (око)",
                "<span dir=\"rtl\">עיניים</span> (два ока)"
              ],
              [
                "<span dir=\"rtl\">יום</span> (день)",
                "<span dir=\"rtl\">יומיים</span> (два дні)"
              ],
              [
                "<span dir=\"rtl\">שבוע</span> (тиждень)",
                "<span dir=\"rtl\">שבועיים</span> (два тижні)"
              ],
              [
                "<span dir=\"rtl\">פעם</span> (раз)",
                "<span dir=\"rtl\">פעמיים</span> (двічі)"
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
                "<span dir=\"rtl\">אני חוזר בעוד שבועיים.</span>",
                "Я повернуся через два тижні."
              ],
              [
                "<span dir=\"rtl\">כאבו לי העיניים.</span>",
                "У мене болять очі."
              ]
            ]
          },
          {
            "type": "note",
            "title": "Не плутати зі звичайною множиною",
            "text": "Форма на <span dir=\"rtl\">-יים</span> означає САМЕ \"два\", а не просто множину: для \"трьох днів\" уже потрібна звичайна множина зі числівником — <span dir=\"rtl\">שלושה ימים</span>.",
            "en": {
              "title": "Not the same as regular plural",
              "text": "The -ayim form specifically means \"two\", not just \"plural\": \"three days\" needs the regular plural with a numeral instead — שלושה ימים."
            }
          }
        ],
        "titleEn": "The Dual Number (-Ayim) — B1"
      },
      {
        "id": "root-pattern-system",
        "title": "שורש ומשקל — B1",
        "emoji": "🧬",
        "sections": [
          {
            "type": "intro",
            "text": "Слова в івриті будуються з \"кореня\" (шореш, зазвичай 3 приголосні, що несуть основне значення) і \"шаблону\" (мішкаль, набір голосних і префіксів/суфіксів, що визначає граматичну функцію).",
            "en": {
              "text": "Hebrew words are built from a \"root\" (shoresh, usually 3 consonants carrying the core meaning) and a \"pattern\" (mishkal, a template of vowels and affixes that defines the grammatical function)."
            }
          },
          {
            "type": "table",
            "title": "Один корінь — багато слів (ל-מ-ד = \"вчити\")",
            "rows": [
              [
                "<span dir=\"rtl\">למד</span>",
                "він вчився (дієслово, Пааль)"
              ],
              [
                "<span dir=\"rtl\">לימד</span>",
                "він навчав (дієслово, Піель)"
              ],
              [
                "<span dir=\"rtl\">תלמיד</span>",
                "учень (іменник)"
              ],
              [
                "<span dir=\"rtl\">מלומד</span>",
                "вчений (прикметник)"
              ],
              [
                "<span dir=\"rtl\">לימוד</span>",
                "навчання (іменник)"
              ]
            ]
          },
          {
            "type": "tip",
            "title": "Практична користь",
            "text": "Впізнавши корінь <span dir=\"rtl\">ל-מ-ד</span> (\"вчити\"), можна вгадати значення багатьох незнайомих слів, які містять ті самі три приголосні в різних шаблонах.",
            "en": {
              "title": "Why this is useful",
              "text": "Once you recognize the root ל-מ-ד (\"to learn\"), you can guess the meaning of many unfamiliar words that contain the same three consonants in different patterns."
            }
          }
        ],
        "titleEn": "Root & Pattern System (Shoresh U-Mishkal) — B1"
      },
      {
        "id": "passive-voice-overview",
        "title": "סביל בעברית — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний стан в івриті виражається не допоміжним дієсловом (як \"бути + дієприкметник\" в українській), а окремими пасивними біньянами: Ніфаль, Пуаль і Гуфаль.",
            "en": {
              "text": "The passive voice in Hebrew is not formed with an auxiliary verb (like \"to be + participle\") — instead, it uses dedicated passive binyanim: Nifal, Pual, and Hufal."
            }
          },
          {
            "type": "table",
            "title": "Активний → пасивний",
            "rows": [
              [
                "<span dir=\"rtl\">כתבתי מכתב.</span>",
                "<span dir=\"rtl\">המכתב נכתב.</span> (Ніфаль: лист написаний)"
              ],
              [
                "<span dir=\"rtl\">בישלתי אוכל.</span>",
                "<span dir=\"rtl\">האוכל מבושל.</span> (Пуаль: їжа зварена)"
              ],
              [
                "<span dir=\"rtl\">הזמנתי אותך.</span>",
                "<span dir=\"rtl\">אתה מוזמן.</span> (Гуфаль: тебе запрошено)"
              ]
            ]
          },
          {
            "type": "note",
            "title": "Немає окремого діяча",
            "text": "На відміну від англійської (\"by someone\"), у пасивних реченнях івриту зазвичай НЕ вказують, хто виконав дію — це природна риса пасивного стану тут.",
            "en": {
              "title": "No agent phrase",
              "text": "Unlike English (\"by someone\"), Hebrew passive sentences typically do NOT specify who performed the action — that's a natural feature of the passive here."
            }
          }
        ],
        "titleEn": "Passive Voice in Hebrew — B1"
      },
      {
        "id": "negation-nuances",
        "title": "ניואנסים בשלילה — B1",
        "emoji": "🙅",
        "sections": [
          {
            "type": "intro",
            "text": "Окрім простого <span dir=\"rtl\">לא</span>, іврит має кілька підсилених заперечних конструкцій для \"ще ні\", \"взагалі ні\" й \"жоден\".",
            "en": {
              "text": "Beyond simple לא, Hebrew has several intensified negative constructions for \"not yet\", \"not at all\", and \"none\"."
            }
          },
          {
            "type": "table",
            "title": "Підсилені заперечення",
            "rows": [
              [
                "<span dir=\"rtl\">עדיין לא</span>",
                "ще ні"
              ],
              [
                "<span dir=\"rtl\">כבר לא</span>",
                "вже ні"
              ],
              [
                "<span dir=\"rtl\">בכלל לא</span>",
                "взагалі ні"
              ],
              [
                "<span dir=\"rtl\">אף פעם לא</span>",
                "ніколи"
              ],
              [
                "<span dir=\"rtl\">אף אחד לא</span>",
                "ніхто"
              ],
              [
                "<span dir=\"rtl\">כלום</span>",
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
                "<span dir=\"rtl\">עדיין לא אכלתי.</span>",
                "Я ще не їв(-ла)."
              ],
              [
                "<span dir=\"rtl\">אף אחד לא בא.</span>",
                "Ніхто не прийшов."
              ],
              [
                "<span dir=\"rtl\">לא אכלתי כלום.</span>",
                "Я нічого не їв(-ла)."
              ]
            ]
          }
        ],
        "titleEn": "Negation Nuances — B1"
      },
      {
        "id": "quantifiers",
        "title": "כמתים — הרבה, מעט, כל — A2",
        "emoji": "📏",
        "sections": [
          {
            "type": "intro",
            "text": "Квантифікатори \"багато/мало/весь/кожен\" стоять ПЕРЕД іменником, а <span dir=\"rtl\">כל</span> (\"весь/кожен\") приєднується безпосередньо, без прийменника.",
            "en": {
              "text": "Quantifiers like \"much/little/all/every\" come BEFORE the noun, and כל (\"all/every\") attaches directly, without a linking word."
            }
          },
          {
            "type": "table",
            "title": "Основні квантифікатори",
            "rows": [
              [
                "<span dir=\"rtl\">הרבה</span>",
                "багато"
              ],
              [
                "<span dir=\"rtl\">מעט</span>",
                "мало"
              ],
              [
                "<span dir=\"rtl\">קצת</span>",
                "трохи"
              ],
              [
                "<span dir=\"rtl\">כל</span>",
                "весь / кожен"
              ],
              [
                "<span dir=\"rtl\">כמה</span>",
                "декілька"
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
                "<span dir=\"rtl\">יש לי הרבה עבודה.</span>",
                "У мене багато роботи."
              ],
              [
                "<span dir=\"rtl\">כל יום אני קם מוקדם.</span>",
                "Кожного дня я рано встаю."
              ],
              [
                "<span dir=\"rtl\">כל הילדים כאן.</span>",
                "Усі діти тут."
              ]
            ]
          }
        ],
        "titleEn": "Quantifiers — Harbe, Me'at, Kol"
      },
      {
        "id": "possessive-suffixes-attached",
        "title": "כינויי קניין חבורים — B1",
        "emoji": "🧷",
        "sections": [
          {
            "type": "intro",
            "text": "Крім конструкції з <span dir=\"rtl\">של</span>, деякі часто вживані іменники (особливо родинні терміни й частини тіла) можуть приєднувати займенникові суфікси прямо до себе — це формальніший, \"злитий\" спосіб виразити належність.",
            "en": {
              "text": "Besides the של construction, some very common nouns (especially family terms and body parts) can attach pronoun suffixes directly to themselves — a more formal, \"fused\" way to express possession."
            }
          },
          {
            "type": "table",
            "title": "<span dir=\"rtl\">אב</span> (батько) з суфіксами",
            "rows": [
              [
                "<span dir=\"rtl\">אבי</span>",
                "мій батько"
              ],
              [
                "<span dir=\"rtl\">אביך</span>",
                "твій батько"
              ],
              [
                "<span dir=\"rtl\">אביו</span>",
                "його батько"
              ],
              [
                "<span dir=\"rtl\">אבינו</span>",
                "наш батько"
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
                "<span dir=\"rtl\">אבי גר בחיפה.</span>",
                "Мій батько живе в Хайфі."
              ],
              [
                "<span dir=\"rtl\">ביתי קטן אך נעים.</span>",
                "Мій дім маленький, але затишний."
              ]
            ]
          },
          {
            "type": "note",
            "title": "Розмовна норма — все ж <span dir=\"rtl\">של</span>",
            "text": "У щоденній розмовній мові конструкція з <span dir=\"rtl\">של</span> (наприклад, <span dir=\"rtl\">אבא שלי</span>) вживається набагато частіше за приєднані суфікси, які звучать формальніше або літературніше.",
            "en": {
              "title": "Everyday speech still prefers של",
              "text": "In daily spoken Hebrew, the של construction (e.g. אבא שלי) is used far more often than attached suffixes, which sound more formal or literary."
            }
          }
        ],
        "titleEn": "Attached Possessive Suffixes — B1"
      },
      {
        "id": "imperative-politeness",
        "title": "נימוס ובקשות — A2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Ввічливі прохання зазвичай пом'якшуються словом <span dir=\"rtl\">בבקשה</span> (\"будь ласка\") або питальною формою з <span dir=\"rtl\">אפשר</span> (\"можна\") замість прямого наказу.",
            "en": {
              "text": "Polite requests are usually softened with בבקשה (\"please\") or a question form with אפשר (\"may/can I\") instead of a direct command."
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
                "<span dir=\"rtl\">אפשר כוס מים, בבקשה?</span>",
                "Можна склянку води, будь ласка?"
              ],
              [
                "<span dir=\"rtl\">סליחה, איפה השירותים?</span>",
                "Вибачте, де туалет?"
              ],
              [
                "<span dir=\"rtl\">תודה רבה!</span>",
                "Дуже дякую!"
              ]
            ]
          },
          {
            "type": "note",
            "title": "Майбутній час замість наказового",
            "text": "У ввічливих проханнях замість наказового способу часто вживають майбутній час: <span dir=\"rtl\">תסגור את הדלת, בבקשה</span> звучить м'якше, ніж пряме <span dir=\"rtl\">סגור!</span>.",
            "en": {
              "title": "The future tense softens commands",
              "text": "For polite requests, the future tense is often used instead of the imperative: תסגור את הדלת, בבקשה sounds softer than the blunt סגור! (\"close!\")."
            }
          }
        ],
        "titleEn": "Politeness & Requests — A2"
      },
      {
        "id": "greetings-basic",
        "title": "ברכות בסיסיות — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "intro",
            "text": "<span dir=\"rtl\">שלום</span> означає і \"привіт\", і \"до побачення\", і буквально \"мир\" — універсальне слово на всі випадки.",
            "en": {
              "text": "שלום means both \"hello\" and \"goodbye\", and literally \"peace\" — a universal word for every occasion."
            }
          },
          {
            "type": "table",
            "title": "Основні привітання",
            "rows": [
              [
                "<span dir=\"rtl\">שלום</span>",
                "привіт / до побачення"
              ],
              [
                "<span dir=\"rtl\">בוקר טוב</span>",
                "доброго ранку"
              ],
              [
                "<span dir=\"rtl\">ערב טוב</span>",
                "доброго вечора"
              ],
              [
                "<span dir=\"rtl\">לילה טוב</span>",
                "на добраніч"
              ],
              [
                "<span dir=\"rtl\">להתראות</span>",
                "до побачення (нейтральне)"
              ],
              [
                "<span dir=\"rtl\">מה שלומך?</span>",
                "як справи?"
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
                "<span dir=\"rtl\">שלום, מה שלומך?</span>",
                "Привіт, як справи?"
              ],
              [
                "<span dir=\"rtl\">בסדר, תודה. ואתה?</span>",
                "Добре, дякую. А ти?"
              ]
            ]
          }
        ],
        "titleEn": "Basic Greetings — A1"
      },
      {
        "id": "family-vocab-grammar",
        "title": "משפחה + שייכות — A1",
        "emoji": "👨‍👩‍👧",
        "sections": [
          {
            "type": "intro",
            "text": "Родинні терміни — чудова практика для конструкції <span dir=\"rtl\">של</span>: майже завжди говорять \"мама моя\", а не просто \"мама\", коли йдеться про конкретну людину.",
            "en": {
              "text": "Family terms are great practice for the של construction: Hebrew almost always says \"mom mine\" rather than just \"mom\" when referring to a specific person."
            }
          },
          {
            "type": "table",
            "title": "Родина",
            "rows": [
              [
                "<span dir=\"rtl\">אמא / אמא שלי</span>",
                "мама / моя мама"
              ],
              [
                "<span dir=\"rtl\">אבא / אבא שלי</span>",
                "тато / мій тато"
              ],
              [
                "<span dir=\"rtl\">אח / אחות</span>",
                "брат / сестра"
              ],
              [
                "<span dir=\"rtl\">סבא / סבתא</span>",
                "дідусь / бабуся"
              ],
              [
                "<span dir=\"rtl\">בן / בת</span>",
                "син / дочка"
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
                "<span dir=\"rtl\">אמא שלי מורה.</span>",
                "Моя мама вчителька."
              ],
              [
                "<span dir=\"rtl\">יש לי שתי אחיות.</span>",
                "У мене дві сестри."
              ]
            ]
          }
        ],
        "titleEn": "Family & Possession — A1"
      },
      {
        "id": "body-health-expr",
        "title": "ביטויים עם כואב לי — A2",
        "emoji": "🤕",
        "sections": [
          {
            "type": "intro",
            "text": "Про біль в івриті кажуть не \"я маю біль\", а буквально \"болить мені\" — <span dir=\"rtl\">כואב לי</span> + частина тіла, з дієсловом, що узгоджується з частиною тіла, а не з \"я\".",
            "en": {
              "text": "Pain in Hebrew isn't \"I have pain\" — it's literally \"it hurts to me\": כואב לי + body part, where the verb agrees with the body part, not with \"I\"."
            }
          },
          {
            "type": "formula",
            "title": "<span dir=\"rtl\">כואב/כואבת/כואבים</span> + <span dir=\"rtl\">ל-</span>",
            "rows": [
              [
                "✅",
                "<span dir=\"rtl\">כואב לי</span> + одн.",
                "мене болить",
                "<span dir=\"rtl\">כואב לי הראש.</span>"
              ],
              [
                "✅",
                "<span dir=\"rtl\">כואבות לי</span> + мн.",
                "мене болять",
                "<span dir=\"rtl\">כואבות לי הרגליים.</span>"
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
                "<span dir=\"rtl\">כואבת לי הבטן.</span>",
                "У мене болить живіт. (ж.р. — בטן)"
              ],
              [
                "<span dir=\"rtl\">כואבים לי השיניים.</span>",
                "У мене болять зуби. (мн.)"
              ]
            ]
          }
        ],
        "titleEn": "Expressions with Ko'ev Li (It Hurts Me) — A2"
      },
      {
        "id": "kvar-adayin",
        "title": "כבר / עדיין — B1",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "<span dir=\"rtl\">כבר</span> (\"вже\") і <span dir=\"rtl\">עדיין</span> (\"ще\") дозволяють передати відтінки, схожі на англійський Present Perfect, без окремого граматичного часу.",
            "en": {
              "text": "כבר (\"already\") and עדיין (\"still/yet\") let Hebrew express nuances similar to the English present perfect, without a dedicated grammatical tense."
            }
          },
          {
            "type": "table",
            "title": "Комбінації",
            "rows": [
              [
                "<span dir=\"rtl\">כבר אכלתי.</span>",
                "Я вже поїв(-ла)."
              ],
              [
                "<span dir=\"rtl\">עדיין לא אכלתי.</span>",
                "Я ще не їв(-ла)."
              ],
              [
                "<span dir=\"rtl\">היא עדיין ישנה.</span>",
                "Вона ще спить."
              ],
              [
                "<span dir=\"rtl\">כבר לא גר כאן.</span>",
                "Вже тут не живе."
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
                "<span dir=\"rtl\">ראית כבר את הסרט הזה?</span>",
                "Ти вже бачив(-ла) цей фільм?"
              ],
              [
                "<span dir=\"rtl\">אנחנו עדיין מחכים לאוטובוס.</span>",
                "Ми все ще чекаємо на автобус."
              ]
            ]
          }
        ],
        "titleEn": "Kvar / Adayin (Already/Still) — B1"
      },
      {
        "id": "time-expressions-relative",
        "title": "ביטויי זמן — A2",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Слова на кшталт \"вчора/сьогодні/завтра\" зазвичай ставляться на початку або в кінці речення і не потребують прийменника.",
            "en": {
              "text": "Words like \"yesterday/today/tomorrow\" are usually placed at the start or end of the sentence and need no preposition."
            }
          },
          {
            "type": "table",
            "title": "Часові вирази",
            "rows": [
              [
                "<span dir=\"rtl\">עכשיו</span>",
                "зараз"
              ],
              [
                "<span dir=\"rtl\">היום</span>",
                "сьогодні"
              ],
              [
                "<span dir=\"rtl\">אתמול</span>",
                "вчора"
              ],
              [
                "<span dir=\"rtl\">מחר</span>",
                "завтра"
              ],
              [
                "<span dir=\"rtl\">אחר כך</span>",
                "потім"
              ],
              [
                "<span dir=\"rtl\">מייד</span>",
                "негайно"
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
                "<span dir=\"rtl\">מחר יש לי בחינה.</span>",
                "Завтра у мене іспит."
              ],
              [
                "<span dir=\"rtl\">נדבר על זה אחר כך.</span>",
                "Поговоримо про це потім."
              ]
            ]
          }
        ],
        "titleEn": "Time Expressions — A2"
      },
      {
        "id": "subject-pronoun-drop",
        "title": "השמטת כינוי גוף — B1",
        "emoji": "🫥",
        "sections": [
          {
            "type": "intro",
            "text": "У минулому й майбутньому часі особовий займенник іноді можна опустити, бо особу вже видно з дієслівного закінчення — на відміну від теперішнього часу, де займенник обов'язковий.",
            "en": {
              "text": "In the past and future tenses, the personal pronoun can sometimes be dropped because the verb ending already shows the person — unlike the present tense, where the pronoun is mandatory."
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
                "<span dir=\"rtl\">(אני) הלכתי הביתה.</span>",
                "(Я) пішов(-шла) додому."
              ],
              [
                "<span dir=\"rtl\">(אנחנו) נגיע בעשר.</span>",
                "(Ми) прийдемо о десятій."
              ]
            ]
          },
          {
            "type": "note",
            "title": "У теперішньому — обов'язково",
            "text": "У теперішньому часі форма дієслова (<span dir=\"rtl\">בינוני</span>) сама по собі не вказує на особу (лише рід/число), тому займенник тут ЗАВЖДИ потрібен: <span dir=\"rtl\">אני הולך</span>, а не просто <span dir=\"rtl\">הולך</span>.",
            "en": {
              "title": "Mandatory in the present tense",
              "text": "In the present tense, the verb form (beinoni) by itself doesn't mark person (only gender/number), so the pronoun is ALWAYS required: אני הולך, never just הולך."
            }
          }
        ],
        "titleEn": "Subject Pronoun Dropping — B1"
      },
      {
        "id": "comparison-irregular",
        "title": "השוואות לא סדירות — B1",
        "emoji": "⭐",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька дуже вживаних прикметників мають окремі \"особливі\" слова для порівняння замість звичайного <span dir=\"rtl\">יותר</span>.",
            "en": {
              "text": "A handful of very common adjectives have their own special comparison words instead of the regular יותר pattern."
            }
          },
          {
            "type": "table",
            "title": "Особливі форми",
            "rows": [
              [
                "<span dir=\"rtl\">טוב</span> (добрий)",
                "<span dir=\"rtl\">יותר טוב</span> / <span dir=\"rtl\">הכי טוב</span>"
              ],
              [
                "<span dir=\"rtl\">רע</span> (поганий)",
                "<span dir=\"rtl\">יותר גרוע</span> / <span dir=\"rtl\">הכי גרוע</span>"
              ],
              [
                "<span dir=\"rtl\">הרבה</span> (багато)",
                "<span dir=\"rtl\">יותר</span> / <span dir=\"rtl\">הכי הרבה</span>"
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
                "<span dir=\"rtl\">המצב יותר טוב עכשיו.</span>",
                "Ситуація зараз краща."
              ],
              [
                "<span dir=\"rtl\">זה הכי גרוע יום שהיה לי.</span>",
                "Це найгірший день у моєму житті."
              ]
            ]
          }
        ],
        "titleEn": "Irregular Comparisons — B1"
      },
      {
        "id": "purpose-kedei",
        "title": "כדי ל- — משפט תכלית — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "<span dir=\"rtl\">כדי ל-</span> (\"щоб, для того щоб\") вводить речення мети й завжди супроводжується інфінітивом.",
            "en": {
              "text": "כדי ל- (\"in order to\") introduces a purpose clause and is always followed by the infinitive."
            }
          },
          {
            "type": "formula",
            "title": "Речення мети",
            "rows": [
              [
                "✅",
                "головне речення",
                "<span dir=\"rtl\">כדי ל-</span> + інфінітив",
                "<span dir=\"rtl\">למדתי כדי לעבור</span>"
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
                "<span dir=\"rtl\">אני עובד כדי להרוויח כסף.</span>",
                "Я працюю, щоб заробляти гроші."
              ],
              [
                "<span dir=\"rtl\">היא למדה קשה כדי לעבור את המבחן.</span>",
                "Вона важко вчилась, щоб скласти іспит."
              ]
            ]
          }
        ],
        "titleEn": "Kedei Le- (Purpose Clauses) — B1"
      },
      {
        "id": "conditional-im",
        "title": "משפטי תנאי עם אם — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "<span dir=\"rtl\">אם</span> (\"якщо\") вводить умовне речення. Для реальних/можливих умов обидва дієслова зазвичай стоять у майбутньому часі — на відміну від англійської.",
            "en": {
              "text": "אם (\"if\") introduces a conditional clause. For real/possible conditions, both verbs are usually in the future tense — unlike English."
            }
          },
          {
            "type": "formula",
            "title": "Реальна умова",
            "rows": [
              [
                "✅",
                "<span dir=\"rtl\">אם</span> + майбутній час",
                "майбутній час",
                "<span dir=\"rtl\">אם תלמד, תצליח.</span>"
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
                "<span dir=\"rtl\">אם ירד גשם, לא נצא.</span>",
                "Якщо піде дощ, ми не підемо."
              ],
              [
                "<span dir=\"rtl\">אם יהיה לי זמן, אתקשר אליך.</span>",
                "Якщо в мене буде час, я подзвоню тобі."
              ]
            ]
          },
          {
            "type": "note",
            "title": "Нереальна умова",
            "text": "Для нереальних/гіпотетичних умов (\"якби я був...\") використовується форма умовного способу <span dir=\"rtl\">הייתי</span> + інфінітив: <span dir=\"rtl\">אם הייתי עשיר, הייתי קונה בית</span>.",
            "en": {
              "title": "Unreal conditions",
              "text": "For unreal/hypothetical conditions (\"if I were...\"), Hebrew uses הייתי + infinitive: אם הייתי עשיר, הייתי קונה בית (\"If I were rich, I would buy a house\")."
            }
          }
        ],
        "titleEn": "Conditional Sentences with Im — B1"
      },
      {
        "id": "wishes-halevai",
        "title": "הלוואי — משאלות — B2",
        "emoji": "🌠",
        "sections": [
          {
            "type": "intro",
            "text": "<span dir=\"rtl\">הלוואי</span> (\"якби ж, от би\") виражає бажання чогось нереального або малоймовірного — емоційно забарвлене слово без прямого українського відповідника.",
            "en": {
              "text": "הלוואי (\"if only, I wish\") expresses a wish for something unreal or unlikely — an emotionally loaded word with no direct one-word English equivalent."
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
                "<span dir=\"rtl\">הלוואי שהיה לי יותר זמן.</span>",
                "От би у мене було більше часу."
              ],
              [
                "<span dir=\"rtl\">הלוואי שהיא תבוא.</span>",
                "От би вона прийшла."
              ]
            ]
          }
        ],
        "titleEn": "Halevai — Wishes"
      },
      {
        "id": "common-idioms",
        "title": "ניבים נפוצים — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька дуже вживаних ідіом, які варто знати напам'ять — дослівний переклад часто не має сенсу українською.",
            "en": {
              "text": "A handful of very common idioms worth memorizing as whole chunks — a literal translation often makes no sense in English either."
            }
          },
          {
            "type": "table",
            "title": "Поширені ідіоми",
            "rows": [
              [
                "<span dir=\"rtl\">יאללה</span>",
                "ну ж бо / гайда (розм.)"
              ],
              [
                "<span dir=\"rtl\">אין בעיה</span>",
                "без проблем"
              ],
              [
                "<span dir=\"rtl\">סוף העולם</span>",
                "кінець світу (перебільшено)"
              ],
              [
                "<span dir=\"rtl\">על הפנים</span>",
                "дуже погано (букв. \"на обличчі\")"
              ],
              [
                "<span dir=\"rtl\">שיהיה בהצלחה</span>",
                "хай щастить"
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
                "<span dir=\"rtl\">יאללה, בואו נלך!</span>",
                "Гайда, ходімо!"
              ],
              [
                "<span dir=\"rtl\">המבחן היה על הפנים.</span>",
                "Іспит був жахливий."
              ]
            ]
          }
        ],
        "titleEn": "Common Idioms — B1"
      },
      {
        "id": "register-formal-informal",
        "title": "רישום — רשמי מול יומיומי — B1",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Розмовний іврит часто відрізняється від письмового/офіційного скороченими формами, сленгом і запозиченнями з арабської та англійської.",
            "en": {
              "text": "Spoken Hebrew often differs from written/formal Hebrew through shortened forms, slang, and loanwords from Arabic and English."
            }
          },
          {
            "type": "table",
            "title": "Офіційне vs розмовне",
            "rows": [
              [
                "<span dir=\"rtl\">מה שלומך?</span> (офіц.)",
                "<span dir=\"rtl\">מה נשמע?</span> (розм.)"
              ],
              [
                "<span dir=\"rtl\">כן</span> (так)",
                "<span dir=\"rtl\">אה-אה / בטח</span> (розм. \"ага/звісно\")"
              ],
              [
                "<span dir=\"rtl\">תודה רבה</span>",
                "<span dir=\"rtl\">תודה</span> (коротше, теж прийнятно)"
              ]
            ]
          },
          {
            "type": "note",
            "title": "Коли важливо",
            "text": "У листах, резюме та офіційних документах варто уникати розмовних скорочень і сленгу — використовуй повні граматичні форми.",
            "en": {
              "title": "When it matters",
              "text": "In letters, résumés, and official documents, avoid casual contractions and slang — use full grammatical forms instead."
            }
          }
        ],
        "titleEn": "Register — Formal vs Everyday"
      },
      {
        "id": "numbers-currency-prices",
        "title": "מחירים ומטבע — A2",
        "emoji": "💰",
        "sections": [
          {
            "type": "intro",
            "text": "Валюта Ізраїлю — новий шекель (<span dir=\"rtl\">שקל חדש</span>, скор. <span dir=\"rtl\">ש\"ח</span>). Ціни запитуються фразою <span dir=\"rtl\">כמה זה עולה?</span>.",
            "en": {
              "text": "Israel's currency is the New Israeli Shekel (שקל חדש, abbreviated ש\"ח). Prices are asked with כמה זה עולה?"
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
                "<span dir=\"rtl\">כמה זה עולה?</span>",
                "Скільки це коштує?"
              ],
              [
                "<span dir=\"rtl\">זה עולה חמישים שקל.</span>",
                "Це коштує п'ятдесят шекелів."
              ],
              [
                "<span dir=\"rtl\">יש הנחה?</span>",
                "Є знижка?"
              ]
            ]
          }
        ],
        "titleEn": "Prices & Currency — A2"
      },
      {
        "id": "weather-expressions",
        "title": "מזג אוויר — A1",
        "emoji": "🌤️",
        "sections": [
          {
            "type": "intro",
            "text": "Про погоду зазвичай говорять безособовою конструкцією <span dir=\"rtl\">חם / קר / נעים</span> (\"тепло/холодно/приємно\") без слова \"є\".",
            "en": {
              "text": "Weather is usually described with the impersonal construction חם / קר / נעים (\"it's hot/cold/pleasant\") without any word for \"is\"."
            }
          },
          {
            "type": "table",
            "title": "Погода",
            "rows": [
              [
                "<span dir=\"rtl\">חם</span>",
                "спекотно"
              ],
              [
                "<span dir=\"rtl\">קר</span>",
                "холодно"
              ],
              [
                "<span dir=\"rtl\">נעים</span>",
                "приємно (тепло)"
              ],
              [
                "<span dir=\"rtl\">יורד גשם</span>",
                "йде дощ"
              ],
              [
                "<span dir=\"rtl\">שמשי</span>",
                "сонячно"
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
                "<span dir=\"rtl\">היום חם מאוד.</span>",
                "Сьогодні дуже спекотно."
              ],
              [
                "<span dir=\"rtl\">מחר יורד גשם.</span>",
                "Завтра піде дощ."
              ]
            ]
          }
        ],
        "titleEn": "Weather Expressions — A1"
      },
      {
        "id": "exclamations",
        "title": "קריאות וביטויים — A1",
        "emoji": "❕",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька дуже частих вигуків, які почуєш у щоденній розмові, — незамінні для природного звучання, навіть якщо їх немає в жодному підручнику граматики.",
            "en": {
              "text": "A handful of very frequent exclamations you'll hear in daily conversation — essential for sounding natural, even though no grammar textbook covers them."
            }
          },
          {
            "type": "table",
            "title": "Вигуки",
            "rows": [
              [
                "<span dir=\"rtl\">וואלה</span>",
                "справді? / овва (розм., здивування)"
              ],
              [
                "<span dir=\"rtl\">אחלה</span>",
                "клас, супер (розм., від араб.)"
              ],
              [
                "<span dir=\"rtl\">חבל</span>",
                "шкода"
              ],
              [
                "<span dir=\"rtl\">כן / לא</span>",
                "так / ні"
              ],
              [
                "<span dir=\"rtl\">בסדר</span>",
                "гаразд, окей"
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
                "<span dir=\"rtl\">וואלה, זה מדהים!</span>",
                "Овва, це дивовижно!"
              ],
              [
                "<span dir=\"rtl\">חבל שלא באת.</span>",
                "Шкода, що ти не прийшов."
              ]
            ]
          }
        ],
        "titleEn": "Exclamations & Expressions — A1"
      }
    ]
  },
  {
    "id": "exceptions",
    "title": "Винятки та слабкі корені",
    "titleEn": "Exceptions & Weak Roots",
    "emoji": "⚠️",
    "rules": [
      {
        "id": "weak-roots-guttural-first",
        "title": "שורש עם גרונית ראשונה (פ\"א גרונית) — B1",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Коли перша приголосна кореня — гортанна (<span dir=\"rtl\">א, ה, ח, ע</span>), вона не може приймати деякі голосні так само, як звичайні приголосні, тому голосні навколо неї трохи змінюються. Приклад: <span dir=\"rtl\">לעמוד</span> (стояти), корінь ע-מ-ד.",
            "en": {
              "text": "When a root's first consonant is guttural (א, ה, ח, ע), it can't take certain vowels the way regular consonants can, so the surrounding vowels shift slightly. Example: לעמוד (to stand), root ע-מ-ד."
            }
          },
          {
            "type": "formula",
            "title": "<span dir=\"rtl\">עמד</span> — минулий і майбутній час",
            "rows": [
              [
                "я (мин.)",
                "<span dir=\"rtl\">אני</span>",
                "<span dir=\"rtl\">עמדתי</span>",
                "amadti"
              ],
              [
                "він (мин.)",
                "<span dir=\"rtl\">הוא</span>",
                "<span dir=\"rtl\">עמד</span>",
                "amad"
              ],
              [
                "я (майб.)",
                "<span dir=\"rtl\">אני</span>",
                "<span dir=\"rtl\">אעמוד</span>",
                "e'emod"
              ],
              [
                "ти (майб., ч.р.)",
                "<span dir=\"rtl\">אתה</span>",
                "<span dir=\"rtl\">תעמוד</span>",
                "ta'amod"
              ],
              [
                "він (майб.)",
                "<span dir=\"rtl\">הוא</span>",
                "<span dir=\"rtl\">יעמוד</span>",
                "ya'amod"
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
                "<span dir=\"rtl\">אני עומד ליד הדלת.</span>",
                "Я стою біля дверей."
              ],
              [
                "<span dir=\"rtl\">מחר נעמוד בתור מוקדם.</span>",
                "Завтра ми станемо в чергу рано."
              ]
            ]
          },
          {
            "type": "note",
            "title": "Ще приклади цього класу",
            "text": "Той самий шаблон мають дієслова <span dir=\"rtl\">לחשוב</span> (думати), <span dir=\"rtl\">לחלום</span> (мріяти), <span dir=\"rtl\">לעבוד</span> (працювати) — усі починаються на гортанну приголосну.",
            "en": {
              "title": "More verbs in this class",
              "text": "The same pattern applies to לחשוב (\"to think\"), לחלום (\"to dream\"), לעבוד (\"to work\") — all starting with a guttural consonant."
            }
          }
        ],
        "titleEn": "Weak Roots — Initial Guttural (Pe Guttural)"
      },
      {
        "id": "weak-roots-first-nun",
        "title": "שורש עם נ ראשונה (פ\"נ) — B1",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Коли перша приголосна кореня — <span dir=\"rtl\">נ</span>, вона зазвичай ЗНИКАЄ в майбутньому часі й наказовому способі (асимілюється в наступну приголосну). Найвідоміший приклад: <span dir=\"rtl\">לתת</span> (давати), корінь נ-ת-ן.",
            "en": {
              "text": "When a root's first consonant is נ, it usually DISAPPEARS in the future tense and imperative (assimilates into the next consonant). The most famous example: לתת (\"to give\"), root נ-ת-ן."
            }
          },
          {
            "type": "formula",
            "title": "<span dir=\"rtl\">נתן</span> — усі часи",
            "rows": [
              [
                "теп. (він)",
                "<span dir=\"rtl\">הוא</span>",
                "<span dir=\"rtl\">נותן</span>",
                "noten"
              ],
              [
                "мин. (він)",
                "<span dir=\"rtl\">הוא</span>",
                "<span dir=\"rtl\">נתן</span>",
                "natan"
              ],
              [
                "майб. (я)",
                "<span dir=\"rtl\">אני</span>",
                "<span dir=\"rtl\">אתן</span>",
                "eten"
              ],
              [
                "майб. (він)",
                "<span dir=\"rtl\">הוא</span>",
                "<span dir=\"rtl\">ייתן</span>",
                "yiten"
              ],
              [
                "наказ. (ти, ч.р.)",
                "<span dir=\"rtl\">אתה</span>",
                "<span dir=\"rtl\">תן!</span>",
                "ten"
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
                "<span dir=\"rtl\">תן לי בבקשה את הספר.</span>",
                "Дай мені, будь ласка, книгу."
              ],
              [
                "<span dir=\"rtl\">אני אתן לך תשובה מחר.</span>",
                "Я дам тобі відповідь завтра."
              ]
            ]
          },
          {
            "type": "tip",
            "title": "Той самий шаблон — <span dir=\"rtl\">ליפול</span>",
            "text": "<span dir=\"rtl\">ליפול</span> (падати, корінь נ-פ-ל) поводиться так само: <span dir=\"rtl\">נופל</span> (теп.) → <span dir=\"rtl\">נפל</span> (мин.) → <span dir=\"rtl\">ייפול</span> (майб., <span dir=\"rtl\">נ</span> зникає).",
            "en": {
              "title": "Same pattern — ליפול",
              "text": "ליפול (\"to fall\", root נ-פ-ל) behaves the same way: נופל (present) → נפל (past) → ייפול (future, the נ disappears)."
            }
          }
        ],
        "titleEn": "Weak Roots — Initial Nun (Pe-Nun)"
      },
      {
        "id": "weak-roots-hollow",
        "title": "שורש חלול (ע\"ו / ע\"י) — B1",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "У \"порожніх\" коренях середня приголосна — <span dir=\"rtl\">ו</span> або <span dir=\"rtl\">י</span> — зникає майже в усіх формах, залишаючи лише дві \"видимі\" приголосні. Приклад: <span dir=\"rtl\">לבוא</span> (приходити), корінь ב-ו-א.",
            "en": {
              "text": "In \"hollow\" roots, the middle consonant — ו or י — disappears in almost every form, leaving only two \"visible\" consonants. Example: לבוא (\"to come\"), root ב-ו-א."
            }
          },
          {
            "type": "formula",
            "title": "<span dir=\"rtl\">בוא</span> — усі часи",
            "rows": [
              [
                "теп. (він)",
                "<span dir=\"rtl\">הוא</span>",
                "<span dir=\"rtl\">בא</span>",
                "ba"
              ],
              [
                "мин. (я)",
                "<span dir=\"rtl\">אני</span>",
                "<span dir=\"rtl\">באתי</span>",
                "bati"
              ],
              [
                "мин. (він)",
                "<span dir=\"rtl\">הוא</span>",
                "<span dir=\"rtl\">בא</span>",
                "ba"
              ],
              [
                "майб. (я)",
                "<span dir=\"rtl\">אני</span>",
                "<span dir=\"rtl\">אבוא</span>",
                "avo"
              ],
              [
                "наказ. (ти, ч.р.)",
                "<span dir=\"rtl\">אתה</span>",
                "<span dir=\"rtl\">בוא!</span>",
                "bo"
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
                "<span dir=\"rtl\">בוא הנה!</span>",
                "Йди сюди! (ч.р.)"
              ],
              [
                "<span dir=\"rtl\">היא באה מאוחר אתמול.</span>",
                "Вона прийшла пізно вчора."
              ]
            ]
          },
          {
            "type": "note",
            "title": "Ще приклад — <span dir=\"rtl\">לקום</span>",
            "text": "<span dir=\"rtl\">לקום</span> (вставати, корінь ק-ו-ם) той самий тип: <span dir=\"rtl\">קם</span> (теп./мин., він) → <span dir=\"rtl\">אקום</span> (майб., я) → <span dir=\"rtl\">קום!</span> (наказ.).",
            "en": {
              "title": "Another example — לקום",
              "text": "לקום (\"to get up\", root ק-ו-ם) is the same type: קם (present/past, \"he\") → אקום (future, \"I\") → קום! (imperative)."
            }
          }
        ],
        "titleEn": "Weak Roots — Hollow (Ayin-Vav/Ayin-Yod)"
      },
      {
        "id": "weak-roots-final-heh",
        "title": "שורש עם ה סופית (ל\"ה) — B1",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Коли третя приголосна кореня історично була <span dir=\"rtl\">י</span>, у сучасному слові вона стала <span dir=\"rtl\">ה</span> в кінці словникової форми, але змінюється або зникає в інших формах. Приклад: <span dir=\"rtl\">לקנות</span> (купувати), корінь ק-נ-ה.",
            "en": {
              "text": "When a root's third consonant was historically י, in the modern word it surfaces as ה at the end of the dictionary form, but changes or drops in other forms. Example: לקנות (\"to buy\"), root ק-נ-ה."
            }
          },
          {
            "type": "formula",
            "title": "<span dir=\"rtl\">קנה</span> — усі часи",
            "rows": [
              [
                "теп. (він)",
                "<span dir=\"rtl\">הוא</span>",
                "<span dir=\"rtl\">קונה</span>",
                "koneh"
              ],
              [
                "мин. (я)",
                "<span dir=\"rtl\">אני</span>",
                "<span dir=\"rtl\">קניתי</span>",
                "kaniti"
              ],
              [
                "мин. (він)",
                "<span dir=\"rtl\">הוא</span>",
                "<span dir=\"rtl\">קנה</span>",
                "kana"
              ],
              [
                "майб. (я)",
                "<span dir=\"rtl\">אני</span>",
                "<span dir=\"rtl\">אקנה</span>",
                "ekneh"
              ],
              [
                "наказ. (ти, ч.р.)",
                "<span dir=\"rtl\">אתה</span>",
                "<span dir=\"rtl\">קנה!</span>",
                "kneh"
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
                "<span dir=\"rtl\">אני קונה לחם כל בוקר.</span>",
                "Я купую хліб щоранку."
              ],
              [
                "<span dir=\"rtl\">קניתי מתנה לאמא.</span>",
                "Я купив(-ла) подарунок для мами."
              ]
            ]
          },
          {
            "type": "note",
            "title": "Дуже продуктивний клас",
            "text": "Багато частих дієслів належать сюди: <span dir=\"rtl\">לראות</span> (бачити), <span dir=\"rtl\">לעשות</span> (робити), <span dir=\"rtl\">לרצות</span> (хотіти), <span dir=\"rtl\">לבכות</span> (плакати) — усі закінчуються на <span dir=\"rtl\">ה-</span> в словнику.",
            "en": {
              "title": "A very productive class",
              "text": "Many common verbs belong here: לראות (\"to see\"), לעשות (\"to do\"), לרצות (\"to want\"), לבכות (\"to cry\") — all end in ה- in the dictionary form."
            }
          }
        ],
        "titleEn": "Weak Roots — Final Heh (Lamed-Heh)"
      },
      {
        "id": "weak-roots-geminate",
        "title": "שורש כפול (ע\"ע) — B1",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "У \"подвоєних\" коренях друга й третя приголосні однакові. У теперішньому й минулому часі вони можуть зливатись в одну. Приклад: <span dir=\"rtl\">לחגוג</span> (святкувати), корінь ח-ג-ג.",
            "en": {
              "text": "In \"geminate\" roots, the second and third consonants are identical. In the present and past tense they can merge into one. Example: לחגוג (\"to celebrate\"), root ח-ג-ג."
            }
          },
          {
            "type": "formula",
            "title": "<span dir=\"rtl\">חגג</span> — усі часи",
            "rows": [
              [
                "теп. (він)",
                "<span dir=\"rtl\">הוא</span>",
                "<span dir=\"rtl\">חוגג</span>",
                "choged"
              ],
              [
                "мин. (я)",
                "<span dir=\"rtl\">אני</span>",
                "<span dir=\"rtl\">חגגתי</span>",
                "chagagti"
              ],
              [
                "мин. (він)",
                "<span dir=\"rtl\">הוא</span>",
                "<span dir=\"rtl\">חגג</span>",
                "chagag"
              ],
              [
                "майб. (я)",
                "<span dir=\"rtl\">אני</span>",
                "<span dir=\"rtl\">אחגוג</span>",
                "echgog"
              ],
              [
                "наказ. (ти, ч.р.)",
                "<span dir=\"rtl\">אתה</span>",
                "<span dir=\"rtl\">חגוג!</span>",
                "chagog"
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
                "<span dir=\"rtl\">אנחנו חוגגים יום הולדת.</span>",
                "Ми святкуємо день народження."
              ],
              [
                "<span dir=\"rtl\">בשנה שעברה חגגנו בפריז.</span>",
                "Минулого року ми святкували в Парижі."
              ]
            ]
          }
        ],
        "titleEn": "Weak Roots — Geminate (Ayin-Ayin)"
      },
      {
        "id": "irregular-common-verbs",
        "title": "פעלים לא סדירים נפוצים — A2",
        "emoji": "🎲",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово \"бути\" (<span dir=\"rtl\">להיות</span>) — унікальне: воно НЕ має теперішнього часу взагалі (згадай правило про відсутність \"є\"), а існує лише в минулому й майбутньому.",
            "en": {
              "text": "The verb \"to be\" (להיות) is unique: it has NO present tense at all (recall the rule about the missing \"is/am/are\") — it only exists in past and future."
            }
          },
          {
            "type": "formula",
            "title": "<span dir=\"rtl\">היה</span> — минулий і майбутній час",
            "rows": [
              [
                "я (мин.)",
                "<span dir=\"rtl\">אני</span>",
                "<span dir=\"rtl\">הייתי</span>",
                "hayiti"
              ],
              [
                "він (мин.)",
                "<span dir=\"rtl\">הוא</span>",
                "<span dir=\"rtl\">היה</span>",
                "haya"
              ],
              [
                "вона (мин.)",
                "<span dir=\"rtl\">היא</span>",
                "<span dir=\"rtl\">הייתה</span>",
                "hayta"
              ],
              [
                "я (майб.)",
                "<span dir=\"rtl\">אני</span>",
                "<span dir=\"rtl\">אהיה</span>",
                "ehiye"
              ],
              [
                "він (майб.)",
                "<span dir=\"rtl\">הוא</span>",
                "<span dir=\"rtl\">יהיה</span>",
                "yihiye"
              ]
            ]
          },
          {
            "type": "table",
            "title": "<span dir=\"rtl\">לקחת</span> (брати) — майбутній час губить <span dir=\"rtl\">ל</span>",
            "rows": [
              [
                "<span dir=\"rtl\">אני אקח</span>",
                "я візьму"
              ],
              [
                "<span dir=\"rtl\">אתה תיקח</span>",
                "ти візьмеш"
              ],
              [
                "<span dir=\"rtl\">הוא ייקח</span>",
                "він візьме"
              ],
              [
                "<span dir=\"rtl\">קח!</span>",
                "візьми! (наказ.)"
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
                "<span dir=\"rtl\">אתמול הייתי עסוק.</span>",
                "Вчора я був зайнятий."
              ],
              [
                "<span dir=\"rtl\">מחר יהיה יום חם.</span>",
                "Завтра буде спекотний день."
              ],
              [
                "<span dir=\"rtl\">קח מטריה, יורד גשם.</span>",
                "Візьми парасольку, йде дощ."
              ]
            ]
          }
        ],
        "titleEn": "Common Irregular Verbs — A2"
      },
      {
        "id": "irregular-plurals",
        "title": "רבים לא סדירים — A2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі дуже вживані іменники мають множину, яка не слідує звичайним правилам <span dir=\"rtl\">ים-</span>/<span dir=\"rtl\">ות-</span> — їх варто просто запам'ятати.",
            "en": {
              "text": "Some very common nouns have plurals that don't follow the regular ים-/ות- rules — these are best simply memorized."
            }
          },
          {
            "type": "table",
            "title": "Неправильна множина",
            "rows": [
              [
                "<span dir=\"rtl\">איש</span> (чоловік)",
                "<span dir=\"rtl\">אנשים</span> (люди/чоловіки)"
              ],
              [
                "<span dir=\"rtl\">בית</span> (дім)",
                "<span dir=\"rtl\">בתים</span> (доми)"
              ],
              [
                "<span dir=\"rtl\">יום</span> (день)",
                "<span dir=\"rtl\">ימים</span> (дні)"
              ],
              [
                "<span dir=\"rtl\">עיר</span> (місто)",
                "<span dir=\"rtl\">ערים</span> (міста)"
              ],
              [
                "<span dir=\"rtl\">שנה</span> (рік)",
                "<span dir=\"rtl\">שנים</span> (роки)"
              ],
              [
                "<span dir=\"rtl\">אב</span> (батько)",
                "<span dir=\"rtl\">אבות</span> (батьки, чол. рід із ות-!)"
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
                "<span dir=\"rtl\">יש הרבה אנשים ברחוב.</span>",
                "На вулиці багато людей."
              ],
              [
                "<span dir=\"rtl\">גרתי בשלושה בתים שונים.</span>",
                "Я жив(-ла) у трьох різних будинках."
              ]
            ]
          },
          {
            "type": "note",
            "title": "Рід не завжди видно за закінченням",
            "text": "<span dir=\"rtl\">אב</span> (батько) — чоловічого роду, але його множина закінчується на <span dir=\"rtl\">ות-</span> (типово жіноче закінчення) — закінчення множини не завжди відображає рід слова в однині.",
            "en": {
              "title": "Gender isn't always visible from the ending",
              "text": "אב (\"father\") is masculine, yet its plural takes the ות- ending (typically feminine) — the plural ending doesn't always reflect the singular's gender."
            }
          }
        ],
        "titleEn": "Irregular Plurals — A2"
      },
      {
        "id": "spelling-ktiv",
        "title": "כתיב מלא וכתיב חסר — B2",
        "emoji": "✍️",
        "sections": [
          {
            "type": "intro",
            "text": "У щоденному письмі нікуд (значки голосних) майже завжди пропускають. Щоб текст усе одно можна було прочитати, використовують \"повне письмо\" (<span dir=\"rtl\">כתיב מלא</span>) — додаткові літери <span dir=\"rtl\">ו</span> та <span dir=\"rtl\">י</span>, які позначають голосні там, де в офіційному \"неповному письмі\" (<span dir=\"rtl\">כתיב חסר</span>) стояв би лише нікуд.",
            "en": {
              "text": "In everyday writing, niqqud (vowel points) is almost always omitted. To keep the text readable anyway, Hebrew uses \"full spelling\" (ktiv male) — extra ו and י letters marking vowels that, in the formal \"defective spelling\" (ktiv chaser) with niqqud, would be shown only by vowel points."
            }
          },
          {
            "type": "table",
            "title": "Неповне (з нікуд) vs повне (без нікуд)",
            "rows": [
              [
                "<span dir=\"rtl\">כֻּלָּם</span> (ktiv chaser)",
                "<span dir=\"rtl\">כולם</span> (ktiv male) — \"всі\""
              ],
              [
                "<span dir=\"rtl\">דִּבֵּר</span> (ktiv chaser)",
                "<span dir=\"rtl\">דיבר</span> (ktiv male) — \"говорив\""
              ],
              [
                "<span dir=\"rtl\">שִׁיר</span> (ktiv chaser)",
                "<span dir=\"rtl\">שיר</span> (те саме) — \"пісня\""
              ]
            ]
          },
          {
            "type": "note",
            "title": "Що варто знати практично",
            "text": "Майже все, що ти бачиш у книгах, на вивісках чи в новинах — написано без нікуд, у \"повному письмі\". Нікуд трапляється переважно в текстах для дітей, у молитовниках і в підручниках для початківців.",
            "en": {
              "title": "Practical takeaway",
              "text": "Nearly everything you see in books, on signs, or in the news is written without niqqud, in \"full spelling\". Niqqud mainly appears in children's books, prayer books, and beginner textbooks."
            }
          }
        ],
        "titleEn": "Full vs Defective Spelling (Ktiv Male/Chaser) — B2"
      }
    ]
  }
];
