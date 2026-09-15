// Vymova — data/grammar-data/grammar_yi.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_YI: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "<span dir=\"rtl\">פּערזענלעכע פּראָנאָמען</span> — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Їдиш ґрунтується на середньовічних німецьких діалектах, але записується гебрейським письмом справа наліво.",
            "en": {
              "text": "Yiddish is based on medieval German dialects but is written in the Hebrew script, right to left."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "<span dir=\"rtl\">איך</span> (ikh)"
              ],
              [
                "ти",
                "<span dir=\"rtl\">דו</span> (du)"
              ],
              [
                "він / вона",
                "<span dir=\"rtl\">ער / זי</span> (er / zi)"
              ],
              [
                "ми",
                "<span dir=\"rtl\">מיר</span> (mir)"
              ],
              [
                "ви",
                "<span dir=\"rtl\">איר</span> (ir)"
              ],
              [
                "вони",
                "<span dir=\"rtl\">זיי</span> (zey)"
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
        "id": "germanic-grammar-hebrew-script",
        "title": "<span dir=\"rtl\">דײַטשישע גראַמאַטיק, העברעיִשע אותיות</span> — B1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від інших мов цього курсу, записаних гебрейським чи арабським письмом (де саме письмо й граматика — семітські), їдиш поєднує германську граматику (порядок слів, дієвідмінювання) з гебрейським алфавітом — типологічне 'неспівпадіння' письма й граматики.",
            "en": {
              "text": "Unlike other languages in this course written in Hebrew or Arabic script (where both the script and the grammar are Semitic), Yiddish combines Germanic grammar (word order, verb conjugation) with the Hebrew alphabet — a typological 'mismatch' between script and grammar."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">איך גיי אַהיים.</span> (ikh gey aheym)",
                "I go home. (Germanic V2 word order, Hebrew script)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Germanic Grammar, Hebrew Script — B1"
      },
      {
        "id": "three-component-vocabulary",
        "title": "<span dir=\"rtl\">דרײַ שפּראַך-קאָמפּאָנענטן</span> — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Лексика їдиш складається з трьох шарів: германський (основа, ~70-75%), гебрейсько-арамейський (лошн-койдеш, релігійна й абстрактна лексика) і слов'янський (з польської, української, російської — контактний шар зі Східної Європи).",
            "en": {
              "text": "Yiddish vocabulary is made up of three layers: Germanic (the base, ~70-75%), Hebrew-Aramaic (loshn-koydesh, religious and abstract vocabulary), and Slavic (from Polish, Ukrainian, Russian — a contact layer from Eastern Europe)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">טאַטע</span> (герм.), <span dir=\"rtl\">שבת</span> (гебр.), <span dir=\"rtl\">גאָרניט</span> (слов.)",
                "father (Germanic), Sabbath (Hebrew), nothing (Slavic-derived)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Three Vocabulary Components — B1"
      },
      {
        "id": "three-way-grammatical-gender",
        "title": "<span dir=\"rtl\">דרײַ מינים</span> — A2",
        "emoji": "♀️",
        "sections": [
          {
            "type": "intro",
            "text": "Їдиш зберігає трирідну систему граматичного роду (чоловічий, жіночий, середній) із німецької, — на відміну від гебрейської, яка має лише два роди без середнього.",
            "en": {
              "text": "Yiddish retains the three-way grammatical gender system (masculine, feminine, neuter) from German — unlike Hebrew, which has only two genders and no neuter."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">דער טיש</span> (ч.р.), <span dir=\"rtl\">די טיר</span> (ж.р.), <span dir=\"rtl\">דאָס קינד</span> (с.р.)",
                "the table (masc.), the door (fem.), the child (neut.)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Three-Way Grammatical Gender — A2"
      },
      {
        "id": "yivo-standardization",
        "title": "<span dir=\"rtl\">ייִוואָ-אויסלייג</span> — B2",
        "emoji": "📏",
        "sections": [
          {
            "type": "intro",
            "text": "Інститут YIVO (Єврейський науковий інститут), заснований 1925 року у Вільнюсі, розробив стандартизовану орфографію й систему латинської транслітерації їдиш, досі вживану в академічних і секулярних виданнях.",
            "en": {
              "text": "The YIVO Institute (Yiddish Scientific Institute), founded in 1925 in Vilnius, developed the standardized orthography and Latin-transliteration system for Yiddish, still used in academic and secular publications."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "YIVO-transliteration: kh, tsh, zh",
                "YIVO transliteration conventions for Yiddish sounds not in English"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "YIVO Standardization — B2"
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
        "id": "present-tense",
        "title": "<span dir=\"rtl\">קעגנוואַרט</span> — A1",
        "emoji": "☀️",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній час утворюється особовим закінченням, доданим до дієслівної основи, — базовий, регулярний час, близький до німецького.",
            "en": {
              "text": "The present tense is formed with a personal ending added to the verb stem — the basic, regular tense, close to German."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">איך שרײַב.</span>",
                "Я пишу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Tense — A1"
      },
      {
        "id": "lost-simple-past",
        "title": "<span dir=\"rtl\">פֿאַרלוירענע פּשוטע פֿאַרגאַנגענהייט</span> — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від літературної німецької, їдиш повністю втратила синтетичний простий минулий час — для будь-якої минулої дії вживається лише складений перфект, як у розмовній німецькій.",
            "en": {
              "text": "Unlike literary German, Yiddish has completely lost the synthetic simple past — for any past action, only the compound perfect is used, as in colloquial German."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">איך האָב געשריבן.</span> (не окремий простий минулий)",
                "I wrote/have written. (no separate simple past exists)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Lost Simple Past — B1"
      },
      {
        "id": "perfect-tense-hobn-zayn",
        "title": "<span dir=\"rtl\">פּערפֿעקט: האָבן / זײַן</span> — A2",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Перфект утворюється допоміжним hobn ('мати') для більшості дієслів або zayn ('бути') для дієслів руху/зміни стану, плюс дієприкметник минулого часу.",
            "en": {
              "text": "The perfect is formed with the auxiliary hobn ('to have') for most verbs, or zayn ('to be') for verbs of motion/change of state, plus the past participle."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">איך בין געקומען.</span>",
                "Я прийшов. (zayn з дієсловом руху)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Perfect Tense: hobn / zayn — A2"
      },
      {
        "id": "pluperfect-tense",
        "title": "<span dir=\"rtl\">פּלוסקוואַמפּערפֿעקט</span> — B2",
        "emoji": "⏮️",
        "sections": [
          {
            "type": "intro",
            "text": "Плюсквамперфект утворюється тим самим допоміжним у минулому часі перфекта плюс дієприкметник, позначаючи дію, завершену до іншої минулої події.",
            "en": {
              "text": "The pluperfect is formed with the same auxiliary in the past tense of the perfect plus the participle, marking an action completed before another past event."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">איך האָב שוין געהאַט געשריבן.</span>",
                "Я вже був написав."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Pluperfect Tense — B2"
      },
      {
        "id": "future-tense-vel",
        "title": "<span dir=\"rtl\">קומעדיקע צײַט: וועל</span> — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється допоміжним дієсловом vel(n) плюс інфінітив головного дієслова, поставленим у кінці речення.",
            "en": {
              "text": "The future tense is formed with the auxiliary verb vel(n) plus the infinitive of the main verb, placed at the end of the sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">איך וועל שרײַבן.</span>",
                "Я писатиму."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Future Tense: vel(n) — A2"
      },
      {
        "id": "imperative-mood",
        "title": "<span dir=\"rtl\">אימפעראַטיוו</span> — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб для однини — гола основа дієслова, для множини/ввічливості — суфікс -t, доданий до основи.",
            "en": {
              "text": "The imperative for singular is the bare verb stem; for plural/polite address, the suffix -t is added to the stem."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">שרײַב! / שרײַבט!</span>",
                "Пиши! / Пишіть!"
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
        "id": "conditional-volt",
        "title": "<span dir=\"rtl\">קאָנדיציאָנאַל: וואָלט</span> — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб утворюється допоміжним volt плюс інфінітив, уживаним і в умовних реченнях, і для вираження ввічливого бажання.",
            "en": {
              "text": "The conditional is formed with the auxiliary volt plus the infinitive, used both in conditional sentences and to express a polite wish."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">איך וואָלט געוואָלט שרײַבן.</span>",
                "Я хотів би писати."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional: volt — B1"
      },
      {
        "id": "modal-verb-construction",
        "title": "<span dir=\"rtl\">מאָדאַלע ווערבן</span> — B1",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Модальні дієслова (kenen 'могти', muzn 'мусити', veln 'хотіти') уживаються з інфінітивом головного дієслова, поставленим наприкінці речення, як у німецькій.",
            "en": {
              "text": "Modal verbs (kenen 'can', muzn 'must', veln 'want') are used with the infinitive of the main verb, placed at the end of the sentence, as in German."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">איך קען שרײַבן.</span>",
                "Я можу писати."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Modal Verb Constructions — B1"
      },
      {
        "id": "negation-nit-keyn",
        "title": "<span dir=\"rtl\">נעגאַציע: ניט...קיין</span> — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення дієслова утворюється часткою nit, а заперечення іменника без артикля — часткою keyn, обидві можуть уживатися разом у подвійному запереченні без утрати заперечного значення.",
            "en": {
              "text": "Verb negation is formed with the particle nit, while negating a noun without an article uses the particle keyn — both can be used together in double negation without canceling the negative meaning."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">איך האָב ניט קיין בוך.</span>",
                "У мене немає книги. (подвійне заперечення, не скасовує значення)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation: nit...keyn — A2"
      },
      {
        "id": "passive-vern",
        "title": "<span dir=\"rtl\">פּאַסיוו: ווערן</span> — B2",
        "emoji": "🔃",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний стан утворюється допоміжним vern ('ставати') плюс дієприкметник минулого часу, окремо від перфекта, який уживає hobn/zayn.",
            "en": {
              "text": "The passive voice is formed with the auxiliary vern ('to become') plus the past participle, distinct from the perfect, which uses hobn/zayn."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">דאָס בוך ווערט געשריבן.</span>",
                "Книгу пишуть. (пасив)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Passive Voice: vern — B2"
      },
      {
        "id": "infinitive-construction",
        "title": "<span dir=\"rtl\">אינפֿיניטיוו</span> — A2",
        "emoji": "♾️",
        "sections": [
          {
            "type": "intro",
            "text": "Інфінітив закінчується на -n (або -en після приголосного) і в складних дієслівних конструкціях завжди посідає останнє місце в реченні.",
            "en": {
              "text": "The infinitive ends in -n (or -en after a consonant) and always occupies the final position in the sentence in compound verb constructions."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">שרײַבן</span> (писати)",
                "to write (infinitive ending in -n)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Infinitive: -n — A2"
      },
      {
        "id": "present-participle-progressive",
        "title": "<span dir=\"rtl\">האַלטן אין מיטן</span> — B2",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Тривалість дії підкреслюється конструкцією haltn in mitn ('перебувати в процесі') плюс інфінітив, а не окремою граматичною формою тривалого часу.",
            "en": {
              "text": "Ongoing action is emphasized with the construction haltn in mitn ('to be in the middle of') plus the infinitive, rather than a separate grammatical continuous-tense form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">איך האַלט אין מיטן שרײַבן.</span>",
                "Я саме пишу (у процесі)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Progressive Aspect: haltn in mitn — B2"
      },
      {
        "id": "verb-second-word-order",
        "title": "<span dir=\"rtl\">צווייטע שטעלע</span> — B2",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Як і в німецькій, дієслово завжди посідає друге місце в головному реченні (V2), незалежно від того, що стоїть на першому — навіть якщо це не підмет.",
            "en": {
              "text": "As in German, the finite verb always occupies second position in a main clause (V2), regardless of what stands first — even if it isn't the subject."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">הײַנט שרײַב איך.</span>",
                "Today I write. (verb still in second position, subject after)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Verb-Second (V2) Word Order — B2"
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
        "id": "three-case-system",
        "title": "<span dir=\"rtl\">דרײַ פֿאַלן</span> — B1",
        "emoji": "📊",
        "sections": [
          {
            "type": "intro",
            "text": "Їдиш зберігає лише три відмінки з чотирьох німецьких — номінатив, акузатив, датив, — утративши окремий генітив, який тепер виражається прийменниковою конструкцією з fun ('від').",
            "en": {
              "text": "Yiddish retains only three of German's four cases — nominative, accusative, dative — having lost the separate genitive, which is now expressed with the prepositional construction using fun ('of/from')."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">דאָס בוך פֿון דעם מאַן</span> (замість генітива)",
                "the man's book (fun-construction replaces the lost genitive)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Three-Case System — B1"
      },
      {
        "id": "definite-article-by-gender-case",
        "title": "<span dir=\"rtl\">באַשטימטער אַרטיקל</span> — A2",
        "emoji": "📇",
        "sections": [
          {
            "type": "table",
            "title": "Означений артикль",
            "rows": [
              [
                "ч.р. номінатив",
                "der"
              ],
              [
                "ж.р.",
                "di"
              ],
              [
                "с.р.",
                "dos"
              ],
              [
                "датив (усі роди)",
                "dem"
              ]
            ],
            "en": {
              "title": "Definite Article"
            }
          }
        ],
        "titleEn": "Definite Article by Gender and Case — A2"
      },
      {
        "id": "indefinite-article-a-an",
        "title": "<span dir=\"rtl\">אומבאַשטימטער אַרטיקל</span> — A1",
        "emoji": "1️⃣",
        "sections": [
          {
            "type": "intro",
            "text": "Неозначений артикль a (перед приголосним) чи an (перед голосним) не змінюється за родом, на відміну від означеного артикля.",
            "en": {
              "text": "The indefinite article a (before a consonant) or an (before a vowel) does not change by gender, unlike the definite article."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">אַ בוך, אַן עפּל</span>",
                "a book, an apple"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Indefinite Article: a / an — A1"
      },
      {
        "id": "plural-formation-multiple",
        "title": "<span dir=\"rtl\">פּלוראַל-פֿורמען</span> — B1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється кількома способами залежно від походження слова: -n/-en (германський шар), умлаут (германський), -s (слов'янський/англійський), або гебрейські множинні закінчення -im/-es (гебрейський шар).",
            "en": {
              "text": "The plural is formed several ways depending on the word's origin: -n/-en (Germanic layer), umlaut (Germanic), -s (Slavic/English), or Hebrew plural endings -im/-es (Hebrew layer)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">תלמיד → תלמידים</span> (гебр. -im)",
                "student → students (Hebrew-layer plural -im)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Multiple Plural Formation Strategies — B1"
      },
      {
        "id": "adjective-declension",
        "title": "<span dir=\"rtl\">אַדיעקטיוו-דעקלינאַציע</span> — B2",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник, поставлений перед іменником, відмінюється за родом, числом і відмінком, отримуючи закінчення, узгоджені з артиклем, як у німецькій.",
            "en": {
              "text": "An adjective placed before a noun declines by gender, number, and case, taking endings that agree with the article, as in German."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">אַ גוטער מאַן</span> (ч.р. ном.)",
                "a good man (masc. nom. adjective ending)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adjective Declension — B2"
      },
      {
        "id": "possessive-pronouns",
        "title": "<span dir=\"rtl\">פּאָסעסיווע פּראָנאָמען</span> — A2",
        "emoji": "🎁",
        "sections": [
          {
            "type": "table",
            "title": "Присвійні займенники",
            "rows": [
              [
                "мій",
                "mayn"
              ],
              [
                "твій",
                "dayn"
              ],
              [
                "його/її",
                "zayn / ir"
              ],
              [
                "наш",
                "undzer"
              ]
            ],
            "en": {
              "title": "Possessive Pronouns"
            }
          }
        ],
        "titleEn": "Possessive Pronouns — A2"
      },
      {
        "id": "demonstrative-pronouns",
        "title": "<span dir=\"rtl\">דעמאָנסטראַטיוו-פּראָנאָמען</span> — A2",
        "emoji": "👉",
        "sections": [
          {
            "type": "table",
            "title": "Вказівні займенники",
            "rows": [
              [
                "цей/ця/це",
                "der/di/dos ...do"
              ],
              [
                "той/та/те",
                "yener/yene/yenets"
              ]
            ],
            "en": {
              "title": "Demonstratives"
            }
          }
        ],
        "titleEn": "Demonstrative Pronouns — A2"
      },
      {
        "id": "interrogatives",
        "title": "<span dir=\"rtl\">פֿרעגווערטער</span> — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "хто?",
                "ver?"
              ],
              [
                "що?",
                "vos?"
              ],
              [
                "де?",
                "vu?"
              ],
              [
                "коли?",
                "ven?"
              ],
              [
                "чому?",
                "far vos?"
              ]
            ],
            "en": {
              "title": "Interrogatives"
            }
          }
        ],
        "titleEn": "Interrogatives — A1"
      },
      {
        "id": "reflexive-pronoun-zikh",
        "title": "<span dir=\"rtl\">רעפֿלעקסיוו: זיך</span> — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотний займенник zikh не змінюється за особою чи числом — уживається однаково для всіх осіб, на відміну від німецької, де sich уживається лише для 3-ї особи.",
            "en": {
              "text": "The reflexive pronoun zikh does not change by person or number — used identically for all persons, unlike German, where sich is used only for 3rd person."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">איך וואַש זיך.</span>",
                "Я миюся."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reflexive Pronoun: zikh — B1"
      },
      {
        "id": "diminutive-l-ele",
        "title": "<span dir=\"rtl\">דימינוטיוו: -ל / -עלע</span> — B1",
        "emoji": "🔎",
        "sections": [
          {
            "type": "intro",
            "text": "Пестливо-зменшувальна форма утворюється суфіксом -l чи подвійним -ele (ще пестливіше), надзвичайно продуктивна в їдиш, часто зі зміною роду на середній.",
            "en": {
              "text": "The diminutive is formed with the suffix -l or the doubled -ele (even more affectionate), extremely productive in Yiddish, often shifting the gender to neuter."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">מאַמע → מאַמעלע</span>",
                "mama → little mama (affectionate diminutive)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Diminutive: -l / -ele — B1"
      },
      {
        "id": "separable-prefix-verbs",
        "title": "<span dir=\"rtl\">צעטיילטע פּרעפֿיקסן</span> — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Багато дієслів мають відокремлюваний префікс, який у головному реченні відривається від дієслова й переходить у кінець речення, як у німецькій.",
            "en": {
              "text": "Many verbs have a separable prefix that, in a main clause, detaches from the verb and moves to the end of the sentence, as in German."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">איך קום אָן.</span> (ankumen, приходити)",
                "I arrive. (the prefix on- separates and moves to the end)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Separable Prefix Verbs — B2"
      },
      {
        "id": "comparative-superlative",
        "title": "<span dir=\"rtl\">קאָמפּאַראַטיוו און סופּערלאַטיוו</span> — B1",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняльний ступінь утворюється суфіксом -er, найвищий — суфіксом -st плюс означений артикль, доданими до основи прикметника.",
            "en": {
              "text": "The comparative is formed with the suffix -er, the superlative with the suffix -st plus the definite article, added to the adjective stem."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">גרויס → גרעסער → דער גרעסטער</span>",
                "big → bigger → the biggest"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparative and Superlative — B1"
      },
      {
        "id": "cardinal-numbers",
        "title": "<span dir=\"rtl\">קאַרדינאַל-צאָלן</span> — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "table",
            "title": "Кількісні числівники",
            "rows": [
              [
                "1",
                "eyns"
              ],
              [
                "2",
                "tsvey"
              ],
              [
                "3",
                "dray"
              ],
              [
                "4",
                "fir"
              ],
              [
                "5",
                "finf"
              ]
            ],
            "en": {
              "title": "Cardinal Numbers"
            }
          }
        ],
        "titleEn": "Cardinal Numbers — A1"
      },
      {
        "id": "relative-clause-vos",
        "title": "<span dir=\"rtl\">רעלאַטיוו-זאַץ: וואָס</span> — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Підрядне відносне речення часто вводиться незмінним словом vos ('що/який'), яке заступає всі роди й числа, простіше за німецьку систему з der/die/das.",
            "en": {
              "text": "A relative clause is often introduced with the invariant word vos ('that/which'), which covers all genders and numbers, simpler than German's der/die/das system."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">דער מאַן וואָס שרײַבט</span>",
                "the man who writes"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Clauses: vos — B1"
      },
      {
        "id": "conjunctions",
        "title": "<span dir=\"rtl\">קאָניונקציעס</span> — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники",
            "rows": [
              [
                "і, та",
                "un"
              ],
              [
                "але",
                "ober"
              ],
              [
                "або",
                "oder"
              ],
              [
                "тому що",
                "vayl"
              ]
            ],
            "en": {
              "title": "Conjunctions"
            }
          }
        ],
        "titleEn": "Conjunctions — A2"
      },
      {
        "id": "subordinate-clause-verb-final",
        "title": "<span dir=\"rtl\">אונטערגעאָרדנטער זאַץ</span> — B2",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "У підрядному реченні дієслово посідає останнє місце, як у німецькій, — на відміну від V2-порядку слів у головному реченні.",
            "en": {
              "text": "In a subordinate clause, the verb occupies the final position, as in German — unlike the V2 word order in a main clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">ווייל איך שרײַב אַ בריוו</span>",
                "because I write a letter (verb-final in subordinate clause)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Verb-Final Order in Subordinate Clauses — B2"
      },
      {
        "id": "prepositions-governing-dative",
        "title": "<span dir=\"rtl\">פּרעפּאָזיציעס מיטן דאַטיוו</span> — B1",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Більшість прийменників у їдиш керує давальним відмінком, на відміну від німецької, де прийменники розподіляються між чотирма відмінками.",
            "en": {
              "text": "Most prepositions in Yiddish govern the dative case, unlike German, where prepositions are distributed among four cases."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">מיט דעם מאַן</span>",
                "with the man (dative after mit)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Prepositions Governing the Dative — B1"
      },
      {
        "id": "hebrew-plural-endings",
        "title": "<span dir=\"rtl\">העברעיִשע פּלוראַל-סופֿיקסן</span> — B2",
        "emoji": "📚",
        "sections": [
          {
            "type": "intro",
            "text": "Слова гебрейсько-арамейського шару зберігають власні гебрейські множинні закінчення -im (чол.) чи -es/-os (жін.), не використовуючи германських закінчень навіть у щоденному вживанні.",
            "en": {
              "text": "Words from the Hebrew-Aramaic layer keep their own Hebrew plural endings -im (masc.) or -es/-os (fem.), not using the Germanic endings even in everyday use."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">חבֿר → חבֿרים</span>",
                "friend → friends (Hebrew-layer plural, not Germanic)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Hebrew-Layer Plural Endings — B2"
      },
      {
        "id": "compound-nouns",
        "title": "<span dir=\"rtl\">צונויפֿגעזעצטע ווערטער</span> — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Складні іменники утворюються поєднанням двох коренів без сполучного елемента, набуваючи роду останнього компонента, як у німецькій.",
            "en": {
              "text": "Compound nouns are formed by combining two roots without a linking element, taking on the gender of the final component, as in German."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">מאַמע-לשון</span> ('материнська мова')",
                "mother tongue (literally 'mama-language')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Compound Nouns — B1"
      },
      {
        "id": "adjective-after-copula-uninflected",
        "title": "<span dir=\"rtl\">אַדיעקטיוו נאָך זײַן</span> — A2",
        "emoji": "🟰",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник, поставлений після дієслова-зв'язки zayn ('бути'), не відмінюється й залишається в незмінній основній формі.",
            "en": {
              "text": "An adjective placed after the copula zayn ('to be') is not declined and stays in its unchanged base form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">דאָס בוך איז גוט.</span>",
                "The book is good. (uninflected predicate adjective)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Uninflected Predicate Adjectives — A2"
      },
      {
        "id": "yes-no-question-tsi",
        "title": "<span dir=\"rtl\">פֿראַגע: צי</span> — A2",
        "emoji": "❔",
        "sections": [
          {
            "type": "intro",
            "text": "Загальне питання можна утворити необов'язковою часткою tsi, поставленою на початку речення, окрім простої інверсії підмета й дієслова.",
            "en": {
              "text": "A yes/no question can be formed with the optional particle tsi, placed at the start of the sentence, besides simple subject-verb inversion."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">צי שרײַבסטו?</span>",
                "Do you write?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Yes/No Questions: tsi — A2"
      },
      {
        "id": "vocative-address",
        "title": "<span dir=\"rtl\">ווואָקאַטיוו</span> — A2",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Звертання не має окремого відмінка — іменник уживається без артикля, часто з пестливим суфіксом, для прямого звертання до когось.",
            "en": {
              "text": "Address has no separate case — the noun is used without the article, often with an affectionate suffix, for direct address to someone."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">קינד, קום אַהער!</span>",
                "Child, come here!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Vocative Address — A2"
      },
      {
        "id": "loshn-koydesh-construct-state",
        "title": "<span dir=\"rtl\">סמיכות</span> — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "У межах гебрейсько-арамейського шару лексики їдиш зберігає гебрейську конструкцію смихес (сполучення двох іменників без артикля для вираження присвійності), окрему від германської конструкції з fun.",
            "en": {
              "text": "Within the Hebrew-Aramaic vocabulary layer, Yiddish retains the Hebrew smikhes construction (joining two nouns without an article to express possession), separate from the Germanic construction with fun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">בית־מדרש</span> (дім навчання, смихес)",
                "beis-medresh (house of study, a Hebrew construct-state compound)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Hebrew Construct State: smikhes — B2"
      },
      {
        "id": "adverb-formation",
        "title": "<span dir=\"rtl\">אַדווערב-פֿורמירונג</span> — A2",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Прислівник часто збігається за формою з незмінним прикметником — та сама основа вживається і як прикметник, і як прислівник, без окремого суфікса.",
            "en": {
              "text": "An adverb often has the same form as the uninflected adjective — the same stem is used both as an adjective and as an adverb, without a separate suffix."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">ער שרײַבט גוט.</span>",
                "He writes well. (gut used unchanged as an adverb)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adverb Formation — A2"
      },
      {
        "id": "existential-es-construction",
        "title": "<span dir=\"rtl\">עס-קאָנסטרוקציע</span> — B2",
        "emoji": "✔️",
        "sections": [
          {
            "type": "intro",
            "text": "Наявність виражається формальним підметом es ('це') плюс дієслово zayn ('бути') та справжнім підметом далі в реченні, паралельно до німецького es gibt.",
            "en": {
              "text": "Existence is expressed with the formal subject es ('it') plus the verb zayn ('to be') and the real subject later in the sentence, parallel to German's es gibt."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">עס איז דאָ אַ בוך.</span>",
                "There is a book. (existential es construction)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Existential 'es' Construction — B2"
      },
      {
        "id": "ashkenazi-diaspora-origin",
        "title": "<span dir=\"rtl\">אַשכּנזישע דיאַספּאָרע</span> — B1",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Їдиш виникла близько 1000 років тому серед ашкеназьких євреїв у долині Рейну, поширившись згодом у Центральну й Східну Європу, де набула слов'янського лексичного шару.",
            "en": {
              "text": "Yiddish arose about 1,000 years ago among Ashkenazi Jews in the Rhineland, later spreading into Central and Eastern Europe, where it acquired its Slavic lexical layer."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">אַשכּנזים</span>",
                "Ashkenazim (the Yiddish-speaking Jewish diaspora)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Ashkenazi Diaspora Origin — B1"
      },
      {
        "id": "dialects-litvish-poylish-galitzish",
        "title": "<span dir=\"rtl\">דיאַלעקטן</span> — B2",
        "emoji": "🗣️",
        "sections": [
          {
            "type": "intro",
            "text": "Їдиш поділяється на регіональні діалекти — літвіш (північно-східний, литовсько-білоруський), пойліш (центральний, польський) і галіцький/українішер (південно-східний), кожен із власними голосними й лексичними особливостями.",
            "en": {
              "text": "Yiddish is divided into regional dialects — Litvish (northeastern, Lithuanian-Belarusian), Poylish (central, Polish), and Galitzish/Ukrainish (southeastern) — each with its own vowel system and lexical peculiarities."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">ליטוויש, פּויליש, גאַליציש</span>",
                "Litvish, Poylish, Galitzish (the three major dialect groups)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Dialects: Litvish, Poylish, Galitzish — B2"
      },
      {
        "id": "yiddish-theater-second-avenue",
        "title": "<span dir=\"rtl\">ייִדישער טעאַטער</span> — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Їдиш театр процвітав на Другій авеню в Нью-Йорку на початку 20 століття, з такими зірками, як Молли Пікон, ставши культурним центром іммігрантської громади.",
            "en": {
              "text": "Yiddish theater flourished on Second Avenue in New York City in the early 20th century, with stars like Molly Picon, becoming a cultural center of the immigrant community."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Second Avenue (\"ייִדיש בראָדוויי\")",
                "Second Avenue ('the Yiddish Broadway')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Yiddish Theater on Second Avenue — B1"
      },
      {
        "id": "sholem-aleichem-literature",
        "title": "<span dir=\"rtl\">שלום עליכם</span> — B1",
        "emoji": "✍️",
        "sections": [
          {
            "type": "intro",
            "text": "Шолом-Алейхем — класик літератури їдиш, чиї історії про Тев'є-молочника лягли в основу мюзиклу 'Скрипаль на даху', уславивши штетлівське життя Східної Європи.",
            "en": {
              "text": "Sholem Aleichem is a classic Yiddish-literature author whose Tevye the Dairyman stories became the basis for the musical 'Fiddler on the Roof', immortalizing shtetl life in Eastern Europe."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">טבֿיה דער מילכיקער</span>",
                "Tevye the Dairyman"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Sholem Aleichem's Literature — B1"
      },
      {
        "id": "isaac-bashevis-singer",
        "title": "<span dir=\"rtl\">יצחק באַשעוויס זינגער</span> — B2",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Ісаак Башевіс Зінгер отримав Нобелівську премію з літератури 1978 року за твори, написані їдиш, — єдиний випадок, коли ця мова принесла своєму авторові найвищу літературну нагороду.",
            "en": {
              "text": "Isaac Bashevis Singer won the 1978 Nobel Prize in Literature for works written in Yiddish — the only time this language has brought its author literature's highest award."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nobel Prize in Literature, 1978",
                "the 1978 Nobel Prize in Literature (Singer)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Isaac Bashevis Singer's Nobel Prize — B2"
      },
      {
        "id": "klezmer-music",
        "title": "<span dir=\"rtl\">קלעזמער</span> — A2",
        "emoji": "🎻",
        "sections": [
          {
            "type": "intro",
            "text": "Клезмер — традиційна інструментальна музика ашкеназьких євреїв, зі скрипкою й кларнетом на чолі, що пережила відродження популярності з 1970-х років і донині.",
            "en": {
              "text": "Klezmer is the traditional instrumental music of Ashkenazi Jews, led by violin and clarinet, which has undergone a revival in popularity since the 1970s and continues today."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">קלעזמער-מוזיק</span>",
                "klezmer music"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Klezmer Music — A2"
      },
      {
        "id": "haskalah-enlightenment",
        "title": "<span dir=\"rtl\">השׂכּלה</span> — B2",
        "emoji": "💡",
        "sections": [
          {
            "type": "intro",
            "text": "Гаскала (Гебрейсько-єврейське просвітництво) 18-19 століть започаткувала світську літературу їдиш, поступово перетворивши мову з розмовного жаргону на повноцінну літературну.",
            "en": {
              "text": "The Haskalah (Jewish Enlightenment) of the 18th-19th centuries launched secular Yiddish literature, gradually transforming the language from a spoken 'jargon' into a fully literary one."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">מענדעלע מוכר ספֿרים</span>",
                "Mendele Mocher Sforim ('grandfather' of modern Yiddish literature)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Haskalah and Yiddish Literature — B2"
      },
      {
        "id": "hasidic-communities-daily-yiddish",
        "title": "<span dir=\"rtl\">חסידישע קהילות</span> — B1",
        "emoji": "🕎",
        "sections": [
          {
            "type": "intro",
            "text": "Хасидські громади (наприклад, у Бруклінському Вільямсбурзі й Бней-Браку) сьогодні залишаються найбільшими середовищами, де їдиш живе як повсякденна розмовна мова, а не лише академічна чи культурна спадщина.",
            "en": {
              "text": "Hasidic communities (such as in Brooklyn's Williamsburg and Bnei Brak) today remain the largest environment where Yiddish lives as an everyday spoken language, not just an academic or cultural legacy."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Williamsburg, Bnei Brak",
                "Williamsburg, Bnei Brak (major Hasidic Yiddish-speaking centers)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Hasidic Communities and Daily Yiddish — B1"
      },
      {
        "id": "yiddishisms-in-english",
        "title": "<span dir=\"rtl\">ייִדישיזמען אין ענגליש</span> — A2",
        "emoji": "🇺🇸",
        "sections": [
          {
            "type": "intro",
            "text": "Багато слів їдиш увійшли в повсякденну американську англійську через імміграцію — schlep, chutzpah, klutz, kvetch — часто без усвідомлення їхнього єврейського походження.",
            "en": {
              "text": "Many Yiddish words entered everyday American English through immigration — schlep, chutzpah, klutz, kvetch — often without speakers realizing their Jewish origin."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">חוצפּה</span> (chutzpah)",
                "chutzpah (nerve/audacity, now common in English)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Yiddishisms in English — A2"
      },
      {
        "id": "borscht-belt-comedy",
        "title": "Borscht Belt Comedy — B2",
        "emoji": "😂",
        "sections": [
          {
            "type": "intro",
            "text": "Комедійна традиція 'Борщового поясу' (курортів Катскільських гір) виростала з їдишомовного гумору, сформувавши стиль американської стендап-комедії 20 століття.",
            "en": {
              "text": "The comedy tradition of the 'Borscht Belt' (Catskill Mountain resorts) grew out of Yiddish-speaking humor, shaping the style of 20th-century American stand-up comedy."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Borscht Belt",
                "the Borscht Belt (Catskills comedy circuit)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Borscht Belt Comedy — B2"
      },
      {
        "id": "vilna-jerusalem-of-lithuania",
        "title": "<span dir=\"rtl\">ווילנע — \"ירושלים דליטא\"</span> — B2",
        "emoji": "🏛️",
        "sections": [
          {
            "type": "intro",
            "text": "Вільнюс отримав прізвисько 'Єрусалим Литви' як провідний центр їдишомовної культури, науки й видавництва до Голокосту, дім YIVO та багатьох письменників.",
            "en": {
              "text": "Vilnius earned the nickname 'Jerusalem of Lithuania' as a leading center of Yiddish-speaking culture, scholarship, and publishing before the Holocaust, home to YIVO and many writers."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">ירושלים דליטא</span>",
                "Jerusalem of Lithuania (Vilnius's nickname)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Vilna: 'Jerusalem of Lithuania' — B2"
      },
      {
        "id": "post-holocaust-decline-revival",
        "title": "<span dir=\"rtl\">נאָך דער חורבן</span> — B2",
        "emoji": "🕯️",
        "sections": [
          {
            "type": "intro",
            "text": "Голокост знищив більшість носіїв їдиш у Європі, після чого мова пережила різкий занепад у секулярному вжитку, але нині відроджується у хасидських громадах і серед секулярних активістів-їдишистів.",
            "en": {
              "text": "The Holocaust destroyed most Yiddish speakers in Europe, after which the language underwent a sharp decline in secular use, but is now undergoing a revival in Hasidic communities and among secular Yiddishist activists."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">דער ייִדישיזם</span>",
                "Yiddishism (the secular cultural/political movement)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Post-Holocaust Decline and Revival — B2"
      },
      {
        "id": "der-forverts-newspaper",
        "title": "<span dir=\"rtl\">דער פֿאָרווערטס</span> — B1",
        "emoji": "📰",
        "sections": [
          {
            "type": "intro",
            "text": "Der Forverts (Форвертс) — заснована 1897 року нью-йоркська газета їдиш, яка з часом стала найважливішим виданням для іммігрантської громади, з окремою рубрикою порад 'Bintel Brief'.",
            "en": {
              "text": "Der Forverts (The Forward) is a New York Yiddish newspaper founded in 1897 that became the most important publication for the immigrant community, with a famous advice column called 'Bintel Brief'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">אַ בינטל בריוו</span>",
                "'A Bundle of Letters' (the Forverts advice column)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Der Forverts Newspaper — B1"
      },
      {
        "id": "colors",
        "title": "<span dir=\"rtl\">קאָלירן</span> — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "table",
            "title": "Кольори",
            "rows": [
              [
                "червоний",
                "<span dir=\"rtl\">רויט</span>"
              ],
              [
                "синій",
                "<span dir=\"rtl\">בלוי</span>"
              ],
              [
                "жовтий",
                "<span dir=\"rtl\">געל</span>"
              ],
              [
                "чорний",
                "<span dir=\"rtl\">שוואַרץ</span>"
              ],
              [
                "білий",
                "<span dir=\"rtl\">ווײַס</span>"
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
        "id": "days-of-week",
        "title": "<span dir=\"rtl\">וואָכנטעג</span> — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "понеділок",
                "<span dir=\"rtl\">מאָנטיק</span>"
              ],
              [
                "вівторок",
                "<span dir=\"rtl\">דינסטיק</span>"
              ],
              [
                "п'ятниця",
                "<span dir=\"rtl\">פֿרײַטיק</span>"
              ],
              [
                "субота",
                "<span dir=\"rtl\">שבת</span>"
              ]
            ],
            "en": {
              "title": "Days of the Week"
            }
          }
        ],
        "titleEn": "Days of the Week — A1"
      },
      {
        "id": "family-terms",
        "title": "<span dir=\"rtl\">משפּחה</span> — A1",
        "emoji": "👨‍👩‍👧",
        "sections": [
          {
            "type": "table",
            "title": "Родинні терміни",
            "rows": [
              [
                "батько",
                "<span dir=\"rtl\">טאַטע</span>"
              ],
              [
                "мати",
                "<span dir=\"rtl\">מאַמע</span>"
              ],
              [
                "дитина",
                "<span dir=\"rtl\">קינד</span>"
              ],
              [
                "бабуся",
                "<span dir=\"rtl\">באָבע</span>"
              ]
            ],
            "en": {
              "title": "Family Terms"
            }
          }
        ],
        "titleEn": "Family Terms — A1"
      },
      {
        "id": "greetings",
        "title": "<span dir=\"rtl\">גרוסן</span> — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "table",
            "title": "Привітання",
            "rows": [
              [
                "Привіт",
                "<span dir=\"rtl\">שלום</span>"
              ],
              [
                "Дякую",
                "<span dir=\"rtl\">אַ דאַנק</span>"
              ],
              [
                "Гарного дня",
                "<span dir=\"rtl\">אַ גוטן טאָג</span>"
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
        "id": "food-vocabulary",
        "title": "<span dir=\"rtl\">עסן</span> — A2",
        "emoji": "🍞",
        "sections": [
          {
            "type": "table",
            "title": "Їжа",
            "rows": [
              [
                "хліб",
                "<span dir=\"rtl\">ברויט</span>"
              ],
              [
                "суп",
                "<span dir=\"rtl\">זופּ</span>"
              ],
              [
                "рибу-фарш",
                "<span dir=\"rtl\">געפֿילטע פֿיש</span>"
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
        "id": "gefilte-fish-cuisine",
        "title": "<span dir=\"rtl\">געפֿילטע פֿיש</span> — A2",
        "emoji": "🐟",
        "sections": [
          {
            "type": "intro",
            "text": "Гефілте фіш ('фарширована риба') — знакова страва ашкеназької кухні їдиш, традиційно подана на Шабат і свята, готова з подрібненої риби, яєць і цибулі.",
            "en": {
              "text": "Gefilte fish ('stuffed fish') is an iconic dish of Ashkenazi Yiddish cuisine, traditionally served on the Sabbath and holidays, made from ground fish, eggs, and onion."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">געפֿילטע פֿיש מיט כרֵיין</span>",
                "gefilte fish with horseradish"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Gefilte Fish — A2"
      },
      {
        "id": "shtetl-life",
        "title": "<span dir=\"rtl\">שטעטל</span> — B1",
        "emoji": "🏘️",
        "sections": [
          {
            "type": "intro",
            "text": "Штетл — маленьке містечко з переважно єврейським населенням у дореволюційній Східній Європі, — центральний образ їдишомовної літератури й культурної пам'яті.",
            "en": {
              "text": "The shtetl was a small town with a predominantly Jewish population in pre-revolutionary Eastern Europe — a central image of Yiddish-language literature and cultural memory."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">שטעטל-לעבן</span>",
                "shtetl life"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Shtetl Life — B1"
      },
      {
        "id": "duolingo-yiddish-course",
        "title": "Yiddish on Duolingo — B1",
        "emoji": "📱",
        "sections": [
          {
            "type": "intro",
            "text": "2021 року Duolingo запустив курс їдиш — частина ширшого відродження зацікавленості мовою серед молодого й секулярного єврейського покоління поза хасидськими громадами.",
            "en": {
              "text": "In 2021 Duolingo launched a Yiddish course — part of a broader revival of interest in the language among a younger, secular Jewish generation outside Hasidic communities."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Duolingo Yiddish course",
                "the Duolingo Yiddish course (launched 2021)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Yiddish on Duolingo — B1"
      },
      {
        "id": "weather-vocabulary",
        "title": "<span dir=\"rtl\">וועטער</span> — A2",
        "emoji": "🌦️",
        "sections": [
          {
            "type": "table",
            "title": "Погода",
            "rows": [
              [
                "сонце",
                "<span dir=\"rtl\">זון</span>"
              ],
              [
                "дощ",
                "<span dir=\"rtl\">רעגן</span>"
              ],
              [
                "сніг",
                "<span dir=\"rtl\">שניי</span>"
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
        "title": "<span dir=\"rtl\">קערפּערטיילן</span> — A2",
        "emoji": "🧍",
        "sections": [
          {
            "type": "table",
            "title": "Частини тіла",
            "rows": [
              [
                "голова",
                "<span dir=\"rtl\">קאָפּ</span>"
              ],
              [
                "рука",
                "<span dir=\"rtl\">האַנט</span>"
              ],
              [
                "око",
                "<span dir=\"rtl\">אויג</span>"
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
        "id": "yiddish-humor-tradition",
        "title": "<span dir=\"rtl\">ייִדישער הומאָר</span> — B2",
        "emoji": "😄",
        "sections": [
          {
            "type": "intro",
            "text": "Гумор їдиш вирізняється самоіронією, абсурдизмом і риторичними формулами типу 'наче мені бракувало саме цього' — стиль, який глибоко вплинув на американську комедію.",
            "en": {
              "text": "Yiddish humor is characterized by self-irony, absurdism, and rhetorical formulas like 'just what I needed' — a style that deeply influenced American comedy."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">עס פֿעלט מיר נאָר דאָס</span>",
                "just what I needed (ironic, i.e. 'as if I needed that')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Yiddish Humor Tradition — B2"
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
        "id": "irregular-verb-zayn",
        "title": "<span dir=\"rtl\">אומרעגולערער ווערב: זײַן</span> — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово zayn ('бути') має повністю супплетивне теперішнє дієвідмінювання (bin, bist, iz, zenen), не пов'язане з інфінітивною основою, — успадковане з давньогерманського нерегулярного дієслова.",
            "en": {
              "text": "The verb zayn ('to be') has a fully suppletive present conjugation (bin, bist, iz, zenen), unrelated to the infinitive stem — inherited from the Old Germanic irregular verb."
            }
          },
          {
            "type": "table",
            "title": "Супплетивна форма",
            "rows": [
              [
                "<span dir=\"rtl\">זײַן</span> → <span dir=\"rtl\">איך בין</span> (не *זײַן-based форма)",
                "to be → I am (suppletive, unrelated to the infinitive stem)"
              ]
            ],
            "en": {
              "title": "Suppletive Form"
            }
          }
        ],
        "titleEn": "Irregular Verb: zayn ('to be') — B1"
      },
      {
        "id": "irregular-plural-mensh",
        "title": "<span dir=\"rtl\">אומרעגולערער פּלוראַל: מענטש</span> — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Іменник mentsh ('людина') утворює множину mentshn з умлаутом і закінченням -n, поєднуючи дві стратегії плюралізації одночасно, замість очікуваної однієї регулярної.",
            "en": {
              "text": "The noun mentsh ('person') forms its plural mentshn with both an umlaut-like vowel shift and the -n ending, combining two pluralization strategies at once, rather than the expected single regular one."
            }
          },
          {
            "type": "table",
            "title": "Подвійна стратегія множини",
            "rows": [
              [
                "<span dir=\"rtl\">מענטש → מענטשן</span> (умлаут + -n одночасно)",
                "person → people (combined vowel-shift + -n plural strategy)"
              ]
            ],
            "en": {
              "title": "Combined Plural Strategy"
            }
          }
        ],
        "titleEn": "Irregular Plural: mentsh ('person') — B2"
      },
      {
        "id": "irregular-comparative-gut",
        "title": "<span dir=\"rtl\">אומרעגולערער קאָמפּאַראַטיוו: גוט → בעסער</span> — B1",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник gut ('добрий') має супплетивний порівняльний ступінь beser ('кращий') замість очікуваної регулярної форми *guter, успадкований із того самого нерегулярного кореня, що й у німецькій gut/besser.",
            "en": {
              "text": "The adjective gut ('good') has a suppletive comparative beser ('better') instead of the expected regular form *guter, inherited from the same irregular root as German gut/besser."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярний порівняльний ступінь",
            "rows": [
              [
                "<span dir=\"rtl\">גוט → בעסער</span> (не *גוטער)",
                "good → better (suppletive, not the expected regular form)"
              ]
            ],
            "en": {
              "title": "Irregular Comparative"
            }
          }
        ],
        "titleEn": "Irregular Comparative: gut → beser — B1"
      }
    ]
  }
];
