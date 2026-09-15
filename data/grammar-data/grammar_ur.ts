// Vymova — data/grammar-data/grammar_ur.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_UR: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "<span dir=\"rtl\">ذاتی ضمائر</span> — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Урду майже ідентична гінді за розмовною граматикою, але записується арабсько-перським письмом справа наліво.",
            "en": {
              "text": "Urdu is nearly identical to Hindi in spoken grammar, but is written in the Perso-Arabic script, right to left."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "<span dir=\"rtl\">میں</span> (maiṅ)"
              ],
              [
                "ти (зв. / ввічл.)",
                "<span dir=\"rtl\">تم / آپ</span> (tum / āp)"
              ],
              [
                "він / вона / воно",
                "<span dir=\"rtl\">وہ</span> (voh)"
              ],
              [
                "ми",
                "<span dir=\"rtl\">ہم</span> (ham)"
              ],
              [
                "ви",
                "<span dir=\"rtl\">تم لوگ</span> (tum log)"
              ],
              [
                "вони",
                "<span dir=\"rtl\">وہ</span> (voh)"
              ]
            ],
            "en": {
              "title": "Personal Pronouns"
            }
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      },
      {
        "id": "hindi-urdu-digraphia",
        "title": "<span dir=\"rtl\">اردو-ہندی: دو رسم الخط</span> — B1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Урду й гінді — по суті одна розмовна мова (гіндустані) з майже ідентичною граматикою, але з двома різними писемностями й формальними словниковими регістрами: урду тяжіє до персько-арабської лексики, гінді — до санскритської.",
            "en": {
              "text": "Urdu and Hindi are essentially one spoken language (Hindustani) with nearly identical grammar, but with two different scripts and formal vocabulary registers: Urdu leans toward Perso-Arabic vocabulary, Hindi toward Sanskrit."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">کتاب</span> (урду, з арабської) = पुस्तक (гінді, з санскриту)",
                "book (Urdu Arabic-derived word vs. Hindi Sanskrit-derived word for the same meaning)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Hindi-Urdu Digraphia — B1"
      },
      {
        "id": "nastaliq-script-style",
        "title": "<span dir=\"rtl\">نستعلیق</span> — A2",
        "emoji": "✍️",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від прямішого стилю насх, уживаного для арабської, урду традиційно друкують і пишуть каліграфічним стилем настал'ік — з похилими, підвішеними рядками літер, що ускладнює комп'ютерний набір цієї мови.",
            "en": {
              "text": "Unlike the more upright Naskh style used for Arabic, Urdu is traditionally printed and written in the calligraphic Nastaliq style — with diagonal, suspended lines of letters, which complicates digital typesetting of the language."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">اردو</span> (у стилі настал'ік)",
                "Urdu (typeset in the Nastaliq style)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Nastaliq Script Style — A2"
      },
      {
        "id": "persian-arabic-high-register",
        "title": "<span dir=\"rtl\">فارسی و عربی الفاظ</span> — B1",
        "emoji": "📚",
        "sections": [
          {
            "type": "intro",
            "text": "Учена й поетична лексика урду масово запозичена з перської та арабської мов через століття мусульманського правління в Південній Азії, — окремий високий регістр, паралельний повсякденній гіндустані.",
            "en": {
              "text": "Urdu's learned and poetic vocabulary is massively borrowed from Persian and Arabic through centuries of Muslim rule in South Asia — a distinct high register running parallel to everyday Hindustani."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">محبت</span> (кохання, з арабської)",
                "love (Arabic-derived learned word)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Persian/Arabic High Register — B1"
      },
      {
        "id": "izafat-construction",
        "title": "<span dir=\"rtl\">اضافت</span> — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "У формальному й поетичному урду вживається запозичена з перської конструкція ізафат (короткий голосний -е, доданий до першого іменника) для зв'язку з наступним означенням, — окрема від звичайної урдусько-гіндустанської граматики.",
            "en": {
              "text": "In formal and poetic Urdu, the Persian-borrowed izafat construction (a short vowel -e added to the first noun) links it to a following modifier — separate from ordinary Urdu-Hindustani grammar."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">اردوئے معلی</span> (uрду-е-муалла, 'висока урду')",
                "Urdu-e-Mualla ('the exalted Urdu', izafat construction)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Izafat Construction — B2"
      }
    ]
  },
  {
    "id": "tenses",
    "title": "Часи та способи дієслова",
    "titleEn": "Tenses & Moods",
    "emoji": "⏰",
    "rules": [
      {
        "id": "present-habitual",
        "title": "<span dir=\"rtl\">حالِ عادی</span> — A1",
        "emoji": "☀️",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній звичний час утворюється дієприкметником теперішнього часу на -تا/-تی плюс допоміжне ہونا ('бути'), узгоджене з підметом за родом.",
            "en": {
              "text": "The present habitual tense is formed with the present participle in -ta/-ti plus the auxiliary 'to be', agreeing with the subject in gender."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">میں لکھتا ہوں۔</span>",
                "Я пишу (взагалі)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Habitual — A1"
      },
      {
        "id": "present-continuous",
        "title": "<span dir=\"rtl\">حالِ جاری</span> — A2",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія в теперішньому передається дієприкметником минулого часу رَہا/رہی плюс допоміжне 'бути', окремим від звичайного теперішнього.",
            "en": {
              "text": "An ongoing present action is expressed with the past participle rahā/rahī plus the auxiliary 'to be', distinct from the ordinary present."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">میں لکھ رہا ہوں۔</span>",
                "Я саме пишу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Continuous — A2"
      },
      {
        "id": "past-tense-ergative",
        "title": "<span dir=\"rtl\">ماضی: نے کا استعمال</span> — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "У перехідному минулому часі підмет переходить у непрямий (скісний) відмінок із післяйменником نے ('через/агентом'), а дієслово узгоджується з прямим додатком, а не з підметом, — розщеплена ергативність.",
            "en": {
              "text": "In the transitive past tense, the subject shifts to the oblique case with the postposition ne ('agent'), and the verb agrees with the direct object rather than the subject — split ergativity."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">میں نے کتاب پڑھی۔</span>",
                "Я прочитав книгу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Past Tense: Ergative Construction — B1"
      },
      {
        "id": "past-continuous",
        "title": "<span dir=\"rtl\">ماضیِ جاری</span> — B1",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія в минулому передається дієприкметником رَہا/رہی плюс допоміжне 'бути' в минулому часі.",
            "en": {
              "text": "An ongoing past action is expressed with the participle rahā/rahī plus the past-tense auxiliary 'to be'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">میں لکھ رہا تھا۔</span>",
                "Я писав (тривало)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Past Continuous — B1"
      },
      {
        "id": "future-tense",
        "title": "<span dir=\"rtl\">مستقبل: -گا</span> — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється власним суфіксом -گا/-گی/-گے, доданим до дієслівної основи й узгодженим з підметом за родом і числом.",
            "en": {
              "text": "The future tense is formed with its own suffix -gā/-gī/-ge, added to the verb stem and agreeing with the subject in gender and number."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">میں لکھوں گا۔</span>",
                "Я писатиму."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Future Tense: -گا — A2"
      },
      {
        "id": "imperative-mood",
        "title": "<span dir=\"rtl\">امر</span> — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб має окремі рівні ввічливості: гола основа для звичайного наказу, -و для помірної ввічливості, -یے/-یں для найввічливішого звертання.",
            "en": {
              "text": "The imperative has distinct politeness levels: the bare stem for a plain command, -o for moderate politeness, -iye/-iṅ for the most polite form of address."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">لکھو! / لکھیے!</span>",
                "Пиши! / Пишіть, будь ласка!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Imperative Mood — A2"
      },
      {
        "id": "present-perfect",
        "title": "<span dir=\"rtl\">حالِ تمام</span> — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Перфект утворюється дієприкметником минулого часу плюс допоміжне 'бути' в теперішньому часі, наголошуючи на теперішній актуальності завершеної дії.",
            "en": {
              "text": "The perfect is formed with the past participle plus the present-tense auxiliary 'to be', emphasizing the present relevance of a completed action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">میں نے لکھا ہے۔</span>",
                "Я вже написав."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Perfect — B1"
      },
      {
        "id": "pluperfect",
        "title": "<span dir=\"rtl\">ماضیِ بعید</span> — B2",
        "emoji": "⏮️",
        "sections": [
          {
            "type": "intro",
            "text": "Плюсквамперфект утворюється дієприкметником минулого часу плюс допоміжне 'бути' в минулому часі, позначаючи дію, завершену до іншої минулої події.",
            "en": {
              "text": "The pluperfect is formed with the past participle plus the past-tense auxiliary 'to be', marking an action completed before another past event."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">میں نے لکھا تھا۔</span>",
                "Я вже був написав."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Pluperfect — B2"
      },
      {
        "id": "subjunctive-mood",
        "title": "<span dir=\"rtl\">التزامی</span> — B1",
        "emoji": "🌫️",
        "sections": [
          {
            "type": "intro",
            "text": "Умовно-бажальний спосіб уживається після дієслів бажання чи необхідності й утворюється власним набором закінчень, відмінним від дійсного способу.",
            "en": {
              "text": "The subjunctive is used after verbs of wishing or necessity and is formed with its own set of endings, distinct from the indicative."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">میں چاہتا ہوں کہ وہ لکھے۔</span>",
                "Я хочу, щоб він написав."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Subjunctive Mood — B1"
      },
      {
        "id": "conditional-agar",
        "title": "<span dir=\"rtl\">اگر: شرطی جملہ</span> — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовне речення вводиться сполучником اگر ('якщо'), поставленим на початку підрядного речення.",
            "en": {
              "text": "A conditional sentence is introduced with the conjunction agar ('if'), placed at the start of the subordinate clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">اگر بارش ہو، تو میں گھر میں رہوں گا۔</span>",
                "Якщо піде дощ, я залишуся вдома."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional: اگر — B1"
      },
      {
        "id": "potential-sakna",
        "title": "<span dir=\"rtl\">سکنا: قدرت</span> — B1",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Здатність чи можливість виражається складеним дієсловом з допоміжним سکنا ('могти'), доданим після дієприслівникової основи головного дієслова.",
            "en": {
              "text": "Ability or possibility is expressed with the compound verb using the auxiliary saknā ('to be able'), added after the converb stem of the main verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">میں لکھ سکتا ہوں۔</span>",
                "Я можу писати."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Potential: سکنا — B1"
      },
      {
        "id": "desiderative-chahna",
        "title": "<span dir=\"rtl\">چاہنا: خواہش</span> — A2",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Бажання виражається дієсловом چاہنا ('хотіти'), поставленим після інфінітива головного дієслова.",
            "en": {
              "text": "A wish is expressed with the verb chāhnā ('to want'), placed after the infinitive of the main verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">میں کھانا چاہتا ہوں۔</span>",
                "Я хочу їсти."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Desiderative: چاہنا — A2"
      },
      {
        "id": "negation-nahin",
        "title": "<span dir=\"rtl\">نفی: نہیں</span> — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється часткою نہیں, поставленою перед або після дієслова залежно від часу й наголосу.",
            "en": {
              "text": "Negation is formed with the particle nahīṅ, placed before or after the verb depending on tense and emphasis."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">میں نہیں لکھتا۔</span>",
                "Я не пишу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation: نہیں — A1"
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
        "id": "word-order-sov",
        "title": "<span dir=\"rtl\">جملے کی ساخت: SOV</span> — A2",
        "emoji": "📝",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів — підмет-додаток-присудок (SOV), причому дієслово майже завжди стоїть у кінці речення.",
            "en": {
              "text": "The basic word order is Subject-Object-Verb (SOV), with the verb almost always placed at the end of the sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">میں کتاب پڑھتا ہوں۔</span>",
                "Я читаю книгу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Word Order: SOV — A2"
      },
      {
        "id": "direct-oblique-case",
        "title": "<span dir=\"rtl\">راست اور مائل حالت</span> — B1",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники мають прямий (номінативний) і непрямий (скісний) відмінок, причому непрямий вживається перед будь-яким післяйменником.",
            "en": {
              "text": "Nouns have a direct (nominative) and an oblique case, with the oblique used before any postposition."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">لڑکا</span> (прямий) / <span dir=\"rtl\">لڑکے</span> (непрямий)",
                "boy (direct/oblique)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Direct and Oblique Case — B1"
      },
      {
        "id": "postposition-case-system",
        "title": "<span dir=\"rtl\">حرفِ اضافت</span> — A2",
        "emoji": "📌",
        "sections": [
          {
            "type": "table",
            "title": "Післяйменники",
            "rows": [
              [
                "в/на",
                "<span dir=\"rtl\">میں</span> (meṅ)"
              ],
              [
                "до",
                "<span dir=\"rtl\">کو</span> (ko)"
              ],
              [
                "з (разом)",
                "<span dir=\"rtl\">کے ساتھ</span> (ke sāth)"
              ]
            ],
            "en": {
              "title": "Postpositions"
            }
          }
        ],
        "titleEn": "Postposition Case System — A2"
      },
      {
        "id": "gender-two-way",
        "title": "<span dir=\"rtl\">جنس: دو قسمیں</span> — A2",
        "emoji": "⚥",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники мають чоловічий або жіночий рід, і дієслова, прикметники та післяйменники узгоджуються з цим родом.",
            "en": {
              "text": "Nouns are masculine or feminine, and verbs, adjectives, and postpositions agree with this gender."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">اچھا لڑکا</span> / <span dir=\"rtl\">اچھی لڑکی</span>",
                "хороший хлопчик / хороша дівчинка"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Gender: Two-Way System — A2"
      },
      {
        "id": "plural-formation-classes",
        "title": "<span dir=\"rtl\">جمع: طریقے</span> — B1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється кількома різними класами закінчень залежно від роду й кінцевого звука основи, — окрема система від арабських чи перських запозичень, які іноді зберігають власну множину.",
            "en": {
              "text": "Plurals are formed with several distinct classes of endings depending on gender and the stem's final sound — a separate system from Arabic or Persian loanwords, which sometimes keep their own plural."
            }
          },
          {
            "type": "table",
            "title": "Класи множини",
            "rows": [
              [
                "<span dir=\"rtl\">لڑکا → لڑکے</span>",
                "хлопчик → хлопчики"
              ],
              [
                "<span dir=\"rtl\">کتاب → کتابیں</span>",
                "книга → книги"
              ]
            ],
            "en": {
              "title": "Plural Classes"
            }
          }
        ],
        "titleEn": "Plural: Multiple Classes — B1"
      },
      {
        "id": "possessive-ka",
        "title": "<span dir=\"rtl\">کا: تعلق</span> — A2",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійність передається післяйменником کا/کی/کے (узгодженим за родом посідомого), поставленим після власника в непрямому відмінку.",
            "en": {
              "text": "Possession is expressed with the postposition kā/kī/ke (agreeing in gender with the possessed noun), placed after the possessor in the oblique case."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">باپ کی کتاب</span>",
                "батькова книга"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Possession: کا — A2"
      },
      {
        "id": "demonstratives",
        "title": "<span dir=\"rtl\">اشاری ضمائر</span> — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "table",
            "title": "Вказівні займенники",
            "rows": [
              [
                "цей",
                "<span dir=\"rtl\">یہ</span> (yeh)"
              ],
              [
                "той",
                "<span dir=\"rtl\">وہ</span> (voh)"
              ]
            ],
            "en": {
              "title": "Demonstratives"
            }
          }
        ],
        "titleEn": "Demonstratives — A1"
      },
      {
        "id": "interrogatives",
        "title": "<span dir=\"rtl\">استفہامیہ الفاظ</span> — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "хто",
                "<span dir=\"rtl\">کون</span> (kaun)"
              ],
              [
                "що",
                "<span dir=\"rtl\">کیا</span> (kyā)"
              ],
              [
                "де",
                "<span dir=\"rtl\">کہاں</span> (kahāṅ)"
              ],
              [
                "коли",
                "<span dir=\"rtl\">کب</span> (kab)"
              ]
            ],
            "en": {
              "title": "Question Words"
            }
          }
        ],
        "titleEn": "Interrogatives — A1"
      },
      {
        "id": "reflexive-pronoun-apna",
        "title": "<span dir=\"rtl\">اپنا: بازانگاڑی</span> — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотний присвійний займенник اپنا ('свій') уживається для всіх осіб і чисел замість звичайних присвійних займенників, коли власник збігається з підметом.",
            "en": {
              "text": "The reflexive possessive apnā ('one's own') is used for all persons and numbers instead of ordinary possessives, whenever the possessor matches the subject."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">میں اپنی کتاب پڑھتا ہوں۔</span>",
                "Я читаю свою книгу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reflexive Pronoun: اپنا — B1"
      },
      {
        "id": "compound-verbs",
        "title": "<span dir=\"rtl\">مرکب فعل</span> — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Багато нових і запозичених дієслівних понять утворюється складеним дієсловом: іменник плюс допоміжне کرنا ('робити') чи ہونا ('ставати').",
            "en": {
              "text": "Many new and borrowed verbal concepts are formed as compound verbs: a noun plus the auxiliary karnā ('to do') or honā ('to become')."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">کام کرنا</span>",
                "працювати (букв. 'роботу робити')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Compound Verbs: کرنا — B1"
      },
      {
        "id": "comparative-degree",
        "title": "<span dir=\"rtl\">مقابلہ: سے زیادہ</span> — A2",
        "emoji": "📊",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняльний ступінь утворюється прикметником з об'єктом порівняння, введеним післяйменником سے ('ніж').",
            "en": {
              "text": "The comparative is formed with the adjective and the compared object introduced by the postposition se ('than')."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">یہ اس سے بڑا ہے۔</span>",
                "Це більше за те."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparative: سے — A2"
      },
      {
        "id": "superlative-degree",
        "title": "<span dir=\"rtl\">سب سے زیادہ</span> — B1",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь порівняння утворюється часткою سب سے ('за все') перед прикметником.",
            "en": {
              "text": "The superlative is formed with the particle sab se ('of all') before the adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">سب سے بڑا</span>",
                "найбільший"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Superlative: سب سے — B1"
      },
      {
        "id": "cardinal-numbers",
        "title": "<span dir=\"rtl\">اعداد: 1-10</span> — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "table",
            "title": "Числа 1-10",
            "rows": [
              [
                "1",
                "<span dir=\"rtl\">ایک</span> (ek)"
              ],
              [
                "2",
                "<span dir=\"rtl\">دو</span> (do)"
              ],
              [
                "3",
                "<span dir=\"rtl\">تین</span> (tīn)"
              ],
              [
                "5",
                "<span dir=\"rtl\">پانچ</span> (pāṅch)"
              ],
              [
                "10",
                "<span dir=\"rtl\">دس</span> (das)"
              ]
            ],
            "en": {
              "title": "Numbers 1-10"
            }
          }
        ],
        "titleEn": "Cardinal Numbers 1-10 — A1"
      },
      {
        "id": "relative-clause-jo",
        "title": "<span dir=\"rtl\">جو: متعلقہ جملہ</span> — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Означальні (відносні) підрядні речення вводяться відносним займенником جو ('що/який'), часто з відповідним вказівним словом وہ в головному реченні, — парна кореляційна конструкція.",
            "en": {
              "text": "Relative clauses are introduced by the relative pronoun jo ('who/which'), often paired with the corresponding demonstrative voh in the main clause — a correlative construction."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">جو آدمی آیا وہ میرا دوست ہے۔</span>",
                "Чоловік, що прийшов, — мій друг."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Clause: جو — B1"
      },
      {
        "id": "conjunctions",
        "title": "<span dir=\"rtl\">حروفِ ربط</span> — A1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники",
            "rows": [
              [
                "і",
                "<span dir=\"rtl\">اور</span> (aur)"
              ],
              [
                "або",
                "<span dir=\"rtl\">یا</span> (yā)"
              ],
              [
                "але",
                "<span dir=\"rtl\">لیکن</span> (lekin)"
              ]
            ],
            "en": {
              "title": "Conjunctions"
            }
          }
        ],
        "titleEn": "Conjunctions — A1"
      },
      {
        "id": "adjective-before-noun",
        "title": "<span dir=\"rtl\">صفت کی جگہ</span> — A1",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник завжди стоїть перед іменником, який він означає.",
            "en": {
              "text": "The adjective always precedes the noun it modifies."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">بڑا گھر</span>",
                "великий дім"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adjective Before Noun — A1"
      },
      {
        "id": "indefinite-marker-ek",
        "title": "<span dir=\"rtl\">ایک: غیرمعین</span> — A2",
        "emoji": "1️⃣",
        "sections": [
          {
            "type": "intro",
            "text": "Урду не має окремого артикля; неозначеність передається числівником ایک ('один'), поставленим перед іменником, коли контекст цього потребує.",
            "en": {
              "text": "Urdu has no dedicated article; indefiniteness is conveyed with the numeral ek ('one') placed before the noun when context requires it."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">ایک لڑکا</span>",
                "якийсь хлопчик"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Indefinite: ایک — A2"
      },
      {
        "id": "infinitive-form",
        "title": "<span dir=\"rtl\">مصدر: -نا</span> — A2",
        "emoji": "📖",
        "sections": [
          {
            "type": "intro",
            "text": "Інфінітив (словникова форма дієслова) закінчується на -نا, доданий до основи, і саме ця форма подається в словниках.",
            "en": {
              "text": "The infinitive (dictionary form of the verb) ends in -nā added to the stem, and this is the form listed in dictionaries."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">لکھنا</span>",
                "писати (інфінітив)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Infinitive: -نا — A2"
      },
      {
        "id": "participles",
        "title": "<span dir=\"rtl\">فعل صفت</span> — B1",
        "emoji": "🧷",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприкметник минулого часу утворюється зміною закінчення інфінітива на -ا і вживається водночас у перфектних формах дієслова та як окремий прикметник.",
            "en": {
              "text": "The past participle is formed by changing the infinitive ending to -ā and is used both in the verb's perfect forms and as a standalone adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">لکھا ہوا</span>",
                "написаний"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Participles — B1"
      },
      {
        "id": "causative-verbs",
        "title": "<span dir=\"rtl\">سببی فعل</span> — B2",
        "emoji": "⚙️",
        "sections": [
          {
            "type": "intro",
            "text": "Каузативні дієслова утворюються суфіксом -انا/-وانا, доданим до основи, передаючи значення 'змусити зробити'.",
            "en": {
              "text": "Causative verbs are formed with the suffix -ānā/-wānā, added to the stem, conveying the meaning 'make/have someone do'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">کھانا → کھلانا</span>",
                "їсти → годувати (примусити їсти)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Causative Verbs — B2"
      },
      {
        "id": "formal-aap",
        "title": "<span dir=\"rtl\">آپ: احترام</span> — A2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Форма آپ вживається як найввічливіше звертання незалежно від числа співрозмовників, окремо від нейтрального تم і фамільярного تو.",
            "en": {
              "text": "The form āp is used as the most polite address regardless of the number of people addressed, separate from the neutral tum and the familiar tū."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">آپ کیسے ہیں؟</span>",
                "Як ви поживаєте? (ввічливо)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Formal آپ — A2"
      },
      {
        "id": "emphatic-particle-hi",
        "title": "<span dir=\"rtl\">ہی: تاکید</span> — B1",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Частка ہی ('саме/лише'), додана безпосередньо після виділюваного слова, підсилює або обмежує його значення.",
            "en": {
              "text": "The particle hī ('exactly/only'), added directly after the highlighted word, intensifies or restricts its meaning."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">میں ہی جاؤں گا۔</span>",
                "Саме я піду."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Emphatic Particle: ہی — B1"
      },
      {
        "id": "question-particle-kya",
        "title": "<span dir=\"rtl\">کیا: سوال</span> — A2",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні можна утворити часткою کیا на початку речення, хоча інтонація сама по собі теж може передавати питальність.",
            "en": {
              "text": "A yes/no question can be formed with the particle kyā at the start of the sentence, though intonation alone can also convey a question."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">کیا تم اردو بولتے ہو؟</span>",
                "Ти говориш урду?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Question Particle: کیا — A2"
      },
      {
        "id": "existential-hai",
        "title": "<span dir=\"rtl\">ہے: موجودگی</span> — A1",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Наявність чогось передається дієсловом ہونا ('бути') у теперішньому часі, узгодженим з підметом, — звичайне дієслово, а не окреме безособове слово.",
            "en": {
              "text": "The existence of something is expressed with the verb honā ('to be') in the present tense, agreeing with the subject — the ordinary verb, not a separate impersonal word."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">بہت لوگ ہیں۔</span>",
                "Там багато людей."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Existential: ہے — A1"
      },
      {
        "id": "vocative-address",
        "title": "<span dir=\"rtl\">ندا</span> — B1",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "При звертанні деякі іменники мають окрему кличну форму з подовженим кінцевим голосним, відмінну від звичайного вживання в реченні.",
            "en": {
              "text": "In direct address, some nouns take a distinct vocative form with a lengthened final vowel, different from ordinary use in a sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">بھائی!</span>",
                "брате!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Vocative Address — B1"
      },
      {
        "id": "ghazal-poetry-tradition",
        "title": "<span dir=\"rtl\">غزل: شاعری</span> — B2",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Газель — вірш із парними римованими двовіршами (шер) на тему кохання й розлуки, успадкований із перської традиції; Мір і Ґаліб — найвідоміші класичні майстри цього жанру урду.",
            "en": {
              "text": "The ghazal is a poem of rhymed couplets (sher) on themes of love and separation, inherited from the Persian tradition; Mir and Ghalib are the most famous classical masters of this Urdu genre."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">غزل سنانا</span>",
                "декламувати газель"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Ghazal Poetry Tradition — B2"
      },
      {
        "id": "mushaira-poetry-gathering",
        "title": "<span dir=\"rtl\">مشاعرہ</span> — B1",
        "emoji": "🎤",
        "sections": [
          {
            "type": "intro",
            "text": "Мушаіра — публічний поетичний вечір, на якому поети по черзі декламують вірші, а слухачі відповідають вигуками схвалення واہ واہ ('браво') — жива й досі популярна форма усної культури.",
            "en": {
              "text": "A mushaira is a public poetry gathering where poets take turns reciting verse, and the audience responds with approving exclamations of wāh wāh ('bravo') — a living, still-popular form of oral culture."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">واہ واہ!</span>",
                "Браво! (традиційний вигук схвалення)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Mushaira: Poetry Gathering — B1"
      },
      {
        "id": "adab-mughal-courtesy",
        "title": "<span dir=\"rtl\">ادب: مغلیہ شائستگی</span> — B2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "ادب ('витончена ввічливість') — успадкований із могольської придворної культури комплекс мовних формул шани й самопринизливої скромності, вбудований у щоденне мовлення урду набагато глибше, ніж просте 'будь ласка/дякую'.",
            "en": {
              "text": "Adab ('refined courtesy') is a complex of speech formulas for honor and self-deprecating modesty inherited from Mughal court culture, embedded in daily Urdu speech far more deeply than a simple 'please/thank you'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">آداب عرض ہے۔</span>",
                "Моя шана вам (формальне вітання)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adab: Mughal Courtesy Culture — B2"
      },
      {
        "id": "lucknow-hyderabad-centers",
        "title": "<span dir=\"rtl\">لکھنؤ، حیدرآباد</span> — B2",
        "emoji": "🏛️",
        "sections": [
          {
            "type": "intro",
            "text": "Лакхнау й Гайдарабад Декан — два історичні центри витонченої урдумовної придворної культури, кожен зі своїми діалектними особливостями й репутацією за витонченістю мовного етикету.",
            "en": {
              "text": "Lucknow and Hyderabad Deccan are two historic centers of refined Urdu court culture, each with its own dialectal features and reputation for elaborate speech etiquette."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">لکھنؤی اردو</span>",
                "лакхнавська урду (особливо витончена)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Lucknow and Hyderabad: Cultural Centers — B2"
      },
      {
        "id": "national-language-pakistan",
        "title": "<span dir=\"rtl\">قومی زبان: پاکستان</span> — B1",
        "emoji": "🇵🇰",
        "sections": [
          {
            "type": "intro",
            "text": "Урду — національна мова Пакистану, попри те, що рідною є лише для меншості населення країни, тоді як в Індії вона є однією з 22 офіційно визнаних мов, зосереджена переважно серед мусульманської громади.",
            "en": {
              "text": "Urdu is Pakistan's national language, despite being the mother tongue of only a minority of the country's population, while in India it is one of 22 officially recognized languages, concentrated mostly within the Muslim community."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">قومی زبان</span>",
                "національна мова"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Urdu's National Language Status — B1"
      },
      {
        "id": "urdu-cinema-bollywood",
        "title": "<span dir=\"rtl\">فلمی اردو</span> — B1",
        "emoji": "🎬",
        "sections": [
          {
            "type": "intro",
            "text": "Значна частина болівудського кіносценарного й пісенного словника історично спирається на урду, а не на стандартну гінді, — витончена урдуська лексика надає діалогам і піснями поетичного відтінку навіть у гіндімовних фільмах.",
            "en": {
              "text": "A large share of Bollywood film dialogue and song vocabulary historically draws on Urdu rather than standard Hindi — refined Urdu vocabulary lends dialogue and songs a poetic quality even in Hindi-language films."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">فلمی گانے میں اردو الفاظ</span>",
                "Urdu words in film songs"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Urdu in Bollywood Cinema — B1"
      },
      {
        "id": "colors",
        "title": "<span dir=\"rtl\">رنگ</span> — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "table",
            "title": "Кольори",
            "rows": [
              [
                "червоний",
                "<span dir=\"rtl\">سرخ</span>"
              ],
              [
                "чорний",
                "<span dir=\"rtl\">کالا</span>"
              ],
              [
                "білий",
                "<span dir=\"rtl\">سفید</span>"
              ]
            ],
            "en": {
              "title": "Colors"
            }
          }
        ],
        "titleEn": "Colors — A1"
      },
      {
        "id": "numbers-tens",
        "title": "<span dir=\"rtl\">اعداد: دس</span> — A2",
        "emoji": "🔟",
        "sections": [
          {
            "type": "table",
            "title": "Десятки",
            "rows": [
              [
                "20",
                "<span dir=\"rtl\">بیس</span>"
              ],
              [
                "100",
                "<span dir=\"rtl\">سو</span>"
              ]
            ],
            "en": {
              "title": "Tens"
            }
          }
        ],
        "titleEn": "Numbers: Tens — A2"
      },
      {
        "id": "days-of-week",
        "title": "<span dir=\"rtl\">ہفتے کے دن</span> — A2",
        "emoji": "📅",
        "sections": [
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "понеділок",
                "<span dir=\"rtl\">پیر</span>"
              ],
              [
                "п'ятниця",
                "<span dir=\"rtl\">جمعہ</span>"
              ],
              [
                "неділя",
                "<span dir=\"rtl\">اتوار</span>"
              ]
            ],
            "en": {
              "title": "Days"
            }
          }
        ],
        "titleEn": "Days of the Week — A2"
      },
      {
        "id": "family-terms",
        "title": "<span dir=\"rtl\">خاندان</span> — A2",
        "emoji": "👪",
        "sections": [
          {
            "type": "table",
            "title": "Родина",
            "rows": [
              [
                "батько",
                "<span dir=\"rtl\">والد</span>"
              ],
              [
                "мати",
                "<span dir=\"rtl\">والدہ</span>"
              ],
              [
                "брат",
                "<span dir=\"rtl\">بھائی</span>"
              ]
            ],
            "en": {
              "title": "Family"
            }
          }
        ],
        "titleEn": "Family Terms — A2"
      },
      {
        "id": "greetings",
        "title": "<span dir=\"rtl\">سلام</span> — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "table",
            "title": "Вітання",
            "rows": [
              [
                "Привіт",
                "<span dir=\"rtl\">السلام علیکم</span>"
              ],
              [
                "Дякую",
                "<span dir=\"rtl\">شکریہ</span>"
              ]
            ],
            "en": {
              "title": "Greetings"
            }
          }
        ],
        "titleEn": "Greetings — A1"
      },
      {
        "id": "weather-vocabulary",
        "title": "<span dir=\"rtl\">موسم</span> — A2",
        "emoji": "☁️",
        "sections": [
          {
            "type": "table",
            "title": "Погода",
            "rows": [
              [
                "сонце",
                "<span dir=\"rtl\">سورج</span>"
              ],
              [
                "дощ",
                "<span dir=\"rtl\">بارش</span>"
              ],
              [
                "вітер",
                "<span dir=\"rtl\">ہوا</span>"
              ]
            ],
            "en": {
              "title": "Weather"
            }
          }
        ],
        "titleEn": "Weather Vocabulary — A2"
      },
      {
        "id": "body-parts",
        "title": "<span dir=\"rtl\">جسم کے اعضاء</span> — A2",
        "emoji": "🧍",
        "sections": [
          {
            "type": "table",
            "title": "Частини тіла",
            "rows": [
              [
                "голова",
                "<span dir=\"rtl\">سر</span>"
              ],
              [
                "рука",
                "<span dir=\"rtl\">ہاتھ</span>"
              ],
              [
                "око",
                "<span dir=\"rtl\">آنکھ</span>"
              ]
            ],
            "en": {
              "title": "Body Parts"
            }
          }
        ],
        "titleEn": "Body Parts — A2"
      },
      {
        "id": "food-vocabulary",
        "title": "<span dir=\"rtl\">کھانا</span> — A2",
        "emoji": "🍛",
        "sections": [
          {
            "type": "table",
            "title": "Їжа",
            "rows": [
              [
                "хліб",
                "<span dir=\"rtl\">روٹی</span>"
              ],
              [
                "рис",
                "<span dir=\"rtl\">چاول</span>"
              ],
              [
                "карі",
                "<span dir=\"rtl\">سالن</span>"
              ]
            ],
            "en": {
              "title": "Food"
            }
          }
        ],
        "titleEn": "Food Vocabulary — A2"
      },
      {
        "id": "clothing-shalwar-kameez",
        "title": "<span dir=\"rtl\">شلوار قمیض</span> — B1",
        "emoji": "👘",
        "sections": [
          {
            "type": "intro",
            "text": "Шальвар-каміз — традиційний комплект вільних штанів і довгої сорочки, який носять і чоловіки, і жінки, — національний одяг, тісно пов'язаний з урдумовною ідентичністю Південної Азії.",
            "en": {
              "text": "The shalwar kameez is a traditional set of loose trousers and a long shirt, worn by both men and women — national dress closely tied to South Asian Urdu-speaking identity."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">شلوار قمیض پہننا</span>",
                "надягати шальвар-каміз"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Shalwar Kameez: National Dress — B1"
      },
      {
        "id": "animals-vocabulary",
        "title": "<span dir=\"rtl\">جانور</span> — A2",
        "emoji": "🐘",
        "sections": [
          {
            "type": "table",
            "title": "Тварини",
            "rows": [
              [
                "слон",
                "<span dir=\"rtl\">ہاتھی</span>"
              ],
              [
                "собака",
                "<span dir=\"rtl\">کتا</span>"
              ],
              [
                "корова",
                "<span dir=\"rtl\">گائے</span>"
              ]
            ],
            "en": {
              "title": "Animals"
            }
          }
        ],
        "titleEn": "Animal Vocabulary — A2"
      },
      {
        "id": "cardinal-directions",
        "title": "<span dir=\"rtl\">سمتیں</span> — B1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "table",
            "title": "Сторони світу",
            "rows": [
              [
                "північ",
                "<span dir=\"rtl\">شمال</span>"
              ],
              [
                "південь",
                "<span dir=\"rtl\">جنوب</span>"
              ],
              [
                "схід",
                "<span dir=\"rtl\">مشرق</span>"
              ],
              [
                "захід",
                "<span dir=\"rtl\">مغرب</span>"
              ]
            ],
            "en": {
              "title": "Directions"
            }
          }
        ],
        "titleEn": "Cardinal Directions — B1"
      },
      {
        "id": "urdu-english-code-switching",
        "title": "<span dir=\"rtl\">انگریزی اردو ملاپ</span> — B1",
        "emoji": "🗣️",
        "sections": [
          {
            "type": "intro",
            "text": "У міському середовищі широко поширене перемикання кодів між урду й англійською в повсякденному мовленні, особливо серед освіченої молоді, — не помилка, а усталена соціолінгвістична норма.",
            "en": {
              "text": "Code-switching between Urdu and English is widespread in urban everyday speech, especially among educated youth — not an error, but an established sociolinguistic norm."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">مجھے یہ فلم بہت پسند ہے۔</span> (з англійським 'фільм')",
                "I really like this film (English loanword 'film' inside an Urdu sentence)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Urdu-English Code-Switching — B1"
      },
      {
        "id": "faiz-progressive-poetry",
        "title": "<span dir=\"rtl\">فیض احمد فیض</span> — B2",
        "emoji": "✊",
        "sections": [
          {
            "type": "intro",
            "text": "Файз Ахмад Файз — один із найвідоміших поетів урду XX ст., чия поезія поєднала класичну газельну форму з політичним і соціальним змістом, здобувши міжнародне визнання далеко за межами Південної Азії.",
            "en": {
              "text": "Faiz Ahmad Faiz is one of the most famous 20th-century Urdu poets, whose poetry combined the classical ghazal form with political and social content, earning international recognition far beyond South Asia."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">فیض کی نظم</span>",
                "поема Файза"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Faiz Ahmad Faiz: Progressive Poetry — B2"
      },
      {
        "id": "qawwali-music",
        "title": "<span dir=\"rtl\">قوالی</span> — B1",
        "emoji": "🎵",
        "sections": [
          {
            "type": "intro",
            "text": "Каввалі — суфійська духовна музика, що поєднує урдуські й перські вірші зі складним ритмом плескання в долоні й гармоніуму, виконувана на святинях суфійських святих.",
            "en": {
              "text": "Qawwali is Sufi devotional music combining Urdu and Persian verses with intricate clapping rhythms and harmonium, performed at Sufi saints' shrines."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">قوالی گانا</span>",
                "співати каввалі"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Qawwali: Sufi Devotional Music — B1"
      },
      {
        "id": "diaspora-vocabulary",
        "title": "<span dir=\"rtl\">بیرونِ ملک اردو</span> — B2",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Значна урдумовна діаспора живе у Великій Британії, США та Перській затоці, з активними культурними асоціаціями, що підтримують мову, поезію й церемонії мушаіра поза межами Південної Азії.",
            "en": {
              "text": "A significant Urdu-speaking diaspora lives in the UK, US, and the Persian Gulf, with active cultural associations sustaining the language, poetry, and mushaira ceremonies outside South Asia."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">بیرونِ ملک اردو انجمنیں</span>",
                "overseas Urdu literary associations"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Urdu Diaspora — B2"
      },
      {
        "id": "khatt-e-nastaliq-calligraphy",
        "title": "<span dir=\"rtl\">خطاطی</span> — B2",
        "emoji": "🖋️",
        "sections": [
          {
            "type": "intro",
            "text": "Каліграфія настал'ік вважається образотворчим мистецтвом, а не просто письмом: вивісочні написи, поетичні збірки й навіть газетні заголовки традиційно доручають професійним каліграфам-катибам замість друкарського шрифту.",
            "en": {
              "text": "Nastaliq calligraphy is considered a visual art form, not just writing: shop signs, poetry collections, and even newspaper headlines were traditionally entrusted to professional calligraphers (katib) instead of printed type."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">خطاط</span> (професійний каліграф)",
                "katib (professional calligrapher)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Nastaliq Calligraphy as Art — B2"
      },
      {
        "id": "mughal-architecture-legacy",
        "title": "<span dir=\"rtl\">مغلیہ طرزِ تعمیر</span> — B2",
        "emoji": "🕌",
        "sections": [
          {
            "type": "intro",
            "text": "Могольська архітектурна спадщина (Тадж-Магал, Червоний форт) супроводжується власною урдуською термінологією для елементів декору — джалі (різьблена решітка), айван (арочний портал) — успадкованою прямо з перської будівельної традиції.",
            "en": {
              "text": "Mughal architectural heritage (the Taj Mahal, the Red Fort) comes with its own Urdu terminology for decorative elements — jālī (carved lattice screen), īwān (arched portal) — inherited directly from Persian building tradition."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">جالی</span>",
                "різьблена кам'яна решітка"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Mughal Architectural Legacy — B2"
      },
      {
        "id": "coordinating-conjunctions-extra",
        "title": "<span dir=\"rtl\">مزید حروفِ ربط</span> — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Сполучник کیونکہ ('тому що') і частка اس لیے ('отже') розширюють базовий набір اور/یا/لیکن, додаючи причинові й наслідкові зв'язки.",
            "en": {
              "text": "The conjunction kyūṅki ('because') and the particle is liye ('therefore') extend the basic aur/yā/lekin set, adding causal and consequential links."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">میں گھر میں ہوں کیونکہ بارش ہو رہی ہے۔</span>",
                "Я вдома, бо йде дощ."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Further Conjunctions — B1"
      }
    ]
  },
  {
    "id": "exceptions",
    "title": "Виключення",
    "titleEn": "Exceptions",
    "emoji": "⚡",
    "rules": [
      {
        "id": "irregular-verb-jana",
        "title": "<span dir=\"rtl\">فعل بے قاعدہ: جانا</span> — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово جانا ('іти') утворює дієприкметник минулого часу від зовсім іншого кореня (گیا замість очікуваного *جایا), — супплетивна форма, яку слід запам'ятовувати окремо.",
            "en": {
              "text": "The verb jānā ('to go') forms its past participle from an entirely different root (gayā instead of the expected *jāyā) — a suppletive form that must be memorized separately."
            }
          },
          {
            "type": "table",
            "title": "Супплетивна форма",
            "rows": [
              [
                "<span dir=\"rtl\">جانا</span> (іти) → <span dir=\"rtl\">گیا</span> (пішов, не *جایا)",
                "go → went (suppletive past participle)"
              ]
            ],
            "en": {
              "title": "Suppletive Form"
            }
          }
        ],
        "titleEn": "Irregular Verb: جانا ('to go') — B1"
      },
      {
        "id": "irregular-plural-admi",
        "title": "<span dir=\"rtl\">بے قاعدہ جمع</span> — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька дуже частотних іменників (наприклад, آدمی 'людина') не змінюються в множині взагалі, лишаючись у тій самій формі, — виняток із загальних правил утворення множини.",
            "en": {
              "text": "A handful of very frequent nouns (such as ādmī 'person') don't change in the plural at all, staying in the same form — an exception to the general pluralization rules."
            }
          },
          {
            "type": "table",
            "title": "Незмінна множина",
            "rows": [
              [
                "<span dir=\"rtl\">ایک آدمی</span> / <span dir=\"rtl\">کئی آدمی</span> (форма незмінна)",
                "one person / several people (same noun form)"
              ]
            ],
            "en": {
              "title": "Unchanged Plural"
            }
          }
        ],
        "titleEn": "Irregular Plural: آدمی (Unchanged) — B2"
      },
      {
        "id": "irregular-comparative-acha",
        "title": "<span dir=\"rtl\">بے قاعدہ مقابلہ: اچھا → بہتر</span> — B1",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник اچھا ('добрий') має супплетивний порівняльний ступінь بہتر ('кращий', запозичений з перської) замість очікуваного регулярного *اچھے سے زیادہ.",
            "en": {
              "text": "The adjective achhā ('good') has a suppletive comparative behtar ('better', borrowed from Persian) instead of the expected regular *achhe se zyādā."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярний порівняльний ступінь",
            "rows": [
              [
                "<span dir=\"rtl\">اچھا → بہتر</span> (супплетивне, з перської)",
                "good → better (suppletive, Persian loan)"
              ]
            ],
            "en": {
              "title": "Irregular Comparative"
            }
          }
        ],
        "titleEn": "Irregular Comparative: اچھا → بہتر — B1"
      }
    ]
  }
];
