// Vymova — data/grammar-data/grammar_sq.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_SQ: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Përemrat vetorë — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Албанська утворює окрему гілку індоєвропейської родини, тому її займенники не схожі на жодну сусідню мову.",
            "en": {
              "text": "Albanian forms its own branch of the Indo-European family, so its pronouns don't resemble those of any neighboring language."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "unë"
              ],
              [
                "ти",
                "ti"
              ],
              [
                "він / вона",
                "ai / ajo"
              ],
              [
                "ми",
                "ne"
              ],
              [
                "ви",
                "ju"
              ],
              [
                "вони (ч./ж.)",
                "ata / ato"
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
        "id": "admirative-mood",
        "title": "Mënyra Habitore — B2",
        "emoji": "😲",
        "sections": [
          {
            "type": "intro",
            "text": "Адміративний спосіб — унікальний для албанської граматичний спосіб, що передає подив, недовіру чи те, що інформація отримана з чужих слів, а не пережита особисто, — окрема парадигма дієслова, відмінна від дійсного способу.",
            "en": {
              "text": "The admirative mood is a grammatical mood unique to Albanian, conveying surprise, disbelief, or that information was learned secondhand rather than personally experienced — a distinct verb paradigm from the indicative."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ai qenka i pasur!",
                "Виявляється, він багатий! (здивування/чужі слова)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Admirative Mood — B2"
      },
      {
        "id": "postposed-definite-article",
        "title": "Nyja Shquese e Prapashtuar — A2",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Означений артикль приєднується як суфікс до кінця іменника, а не стоїть перед ним окремим словом, — риса, спільна з іншими мовами Балканського мовного союзу (румунською, болгарською).",
            "en": {
              "text": "The definite article attaches as a suffix at the end of the noun, rather than standing before it as a separate word — a feature shared with other Balkan Sprachbund languages (Romanian, Bulgarian)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "libër → libri (книга → ця книга)",
                "book → the book"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Postposed Definite Article — A2"
      },
      {
        "id": "gheg-tosk-dialect-split",
        "title": "Gegërishtja dhe Toskërishtja — B1",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Албанська поділяється на два основні наріччя — північне ґеґське (з носовими голосними, інфінітивом) і південне тоскське (основа літературної мови, без інфінітива, з ротацизмом n→r).",
            "en": {
              "text": "Albanian splits into two main dialects — the northern Gheg (with nasal vowels, retains the infinitive) and the southern Tosk (basis of the standard language, has lost the infinitive, shows n→r rhotacism)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Gheg: me punue / Tosk: të punoj",
                "to work (Gheg infinitive vs. Tosk subjunctive construction)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Gheg-Tosk Dialect Split — B1"
      },
      {
        "id": "medio-passive-conjugation",
        "title": "Zgjedhimi Joveprues — B2",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Медіо-пасивний (незворотно-пасивний) стан має власну повну дієвідмінну парадигму закінчень, відмінну від активного стану, а не просто суфікс чи допоміжне дієслово, — успадковано з давньогрецько-подібної системи середнього стану.",
            "en": {
              "text": "The medio-passive (non-active) voice has its own complete set of conjugation endings, distinct from the active voice, rather than just a suffix or auxiliary verb — inherited from an Ancient-Greek-like middle-voice system."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "laj (я мию) → lahem (я миюся, окреме закінчення)",
                "I wash → I wash myself (distinct medio-passive ending)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Medio-Passive Conjugation — B2"
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
        "title": "Koha e Tashme — A1",
        "emoji": "☀️",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній час утворюється особовими закінченнями, доданими до основи дієслова, і поділяється на дві дієвідміни (-oj та інші дієслова).",
            "en": {
              "text": "The present tense is formed with person endings added to the verb stem, split into two conjugation classes (-oj verbs and others)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Unë flas shqip.",
                "Я говорю албанською."
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
        "id": "imperfect-tense",
        "title": "E Pakryera — A2",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Імперфект позначає тривалу чи звичну дію в минулому й утворюється суфіксом -ja/-nja, доданим до основи.",
            "en": {
              "text": "The imperfect marks an ongoing or habitual past action and is formed with the suffix -ja/-nja added to the stem."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Unë flisja shqip.",
                "Я, бувало, говорив албанською."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Imperfect Tense — A2"
      },
      {
        "id": "simple-past-aorist",
        "title": "E Kryera e Thjeshtë — A2",
        "emoji": "⏪",
        "sections": [
          {
            "type": "intro",
            "text": "Простий минулий час (аорист) утворюється власним набором закінчень, часто з чергуванням кореня, і позначає завершену дію без допоміжного дієслова.",
            "en": {
              "text": "The simple past (aorist) is formed with its own set of endings, often with root alternation, and marks a completed action with no auxiliary verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Unë fola shqip.",
                "Я поговорив албанською."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Simple Past (Aorist) — A2"
      },
      {
        "id": "compound-perfect",
        "title": "E Kryera — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Складений перфект утворюється допоміжним дієсловом kam ('мати') у теперішньому часі плюс дієприкметник минулого часу.",
            "en": {
              "text": "The compound perfect is formed with the auxiliary kam ('to have') in the present tense plus the past participle."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kam folur shqip.",
                "Я поговорив (перфект)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Compound Perfect — B1"
      },
      {
        "id": "pluperfect",
        "title": "Më se e Kryera — B1",
        "emoji": "⏮️",
        "sections": [
          {
            "type": "intro",
            "text": "Плюсквамперфект утворюється допоміжним дієсловом kam в імперфекті плюс дієприкметник минулого часу, позначаючи дію, завершену до іншої минулої дії.",
            "en": {
              "text": "The pluperfect is formed with the auxiliary kam in the imperfect plus the past participle, marking an action completed before another past action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kisha folur shqip.",
                "Я вже був поговорив."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Pluperfect — B1"
      },
      {
        "id": "future-do-te",
        "title": "Koha e Ardhme: Do të — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється незмінною часткою do (спорідненою з дієсловом 'хотіти') плюс сполучник të й дієслово в теперішньому часі, — риса, спільна з балканським мовним союзом.",
            "en": {
              "text": "The future tense is formed with the invariable particle do (related to the verb 'to want') plus the connector të and the verb in the present tense — a feature shared with the Balkan Sprachbund."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Do të flas shqip.",
                "Я говоритиму албанською."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Future: do të — A2"
      },
      {
        "id": "conditional-mood",
        "title": "Mënyra Kushtore — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб утворюється часткою do плюс дієслово в імперфекті сполучникового способу, вживаний в умовних реченнях і для ввічливих прохань.",
            "en": {
              "text": "The conditional mood is formed with the particle do plus the verb in the imperfect subjunctive, used in conditional sentences and for polite requests."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Do të flisja shqip.",
                "Я б говорив албанською."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional Mood — B1"
      },
      {
        "id": "imperative-mood",
        "title": "Mënyra Urdhërore — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб однини — власне закінчення, відмінне від теперішнього часу; множина використовує ту саму форму, що й друга особа множини теперішнього часу.",
            "en": {
              "text": "The singular imperative has its own ending, distinct from the present tense; the plural uses the same form as the second-person-plural present."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Fol! / Flisni!",
                "Говори! / Говоріть!"
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
        "id": "subjunctive-te",
        "title": "Mënyra Lidhore: Të — B1",
        "emoji": "🌫️",
        "sections": [
          {
            "type": "intro",
            "text": "Сполучниковий (умовно-бажальний) спосіб уживається зі сполучником të після модальних дієслів і замінює втрачений в тоскській мові інфінітив.",
            "en": {
              "text": "The subjunctive mood is used with the connector të after modal verbs, and replaces the infinitive lost in Tosk-based standard Albanian."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Dua të flas.",
                "Я хочу говорити (букв. 'хочу щоб я говорив')."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Subjunctive: të — B1"
      },
      {
        "id": "optative-mood",
        "title": "Mënyra Dëshirore — B2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Бажальний спосіб — окрема парадигма дієслова для висловлення побажань і благословень, із власним, відмінним від інших способів набором закінчень.",
            "en": {
              "text": "The optative mood is a distinct verb paradigm for expressing wishes and blessings, with its own set of endings different from the other moods."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Rroftë Shqipëria!",
                "Хай живе Албанія! (бажальний спосіб)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Optative Mood — B2"
      },
      {
        "id": "admirative-present",
        "title": "Habitorja e Tashme — B2",
        "emoji": "😲",
        "sections": [
          {
            "type": "intro",
            "text": "Адміративний спосіб теперішнього часу утворюється власним закінченням -kam/-ka, доданим до основи, передаючи здивування чи непряме джерело інформації в теперішньому моменті.",
            "en": {
              "text": "The present admirative is formed with its own ending -kam/-ka added to the stem, conveying surprise or secondhand information about the present moment."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Flet-kam shqip!",
                "Виявляється, він говорить албанською!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Admirative — B2"
      },
      {
        "id": "admirative-past",
        "title": "Habitorja e Kryer — C1",
        "emoji": "😲",
        "sections": [
          {
            "type": "intro",
            "text": "Адміративний спосіб минулого часу поєднує адміративну основу з минулим часовим значенням, вживаний, коли мовець дізнається про минулу подію з подивом чи недовірою.",
            "en": {
              "text": "The past admirative combines the admirative stem with past-tense meaning, used when the speaker learns about a past event with surprise or disbelief."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Paskam folur shqip!",
                "Виявляється, я говорив албанською! (з подивом)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Past Admirative — C1"
      },
      {
        "id": "future-perfect",
        "title": "E Ardhmja e Përparme — B2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній доконаний час утворюється допоміжним дієсловом kam у майбутньому часі плюс дієприкметник минулого часу, позначаючи дію, яка завершиться до певного моменту в майбутньому.",
            "en": {
              "text": "The future perfect is formed with the auxiliary kam in the future tense plus the past participle, marking an action that will be completed by a certain point in the future."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Do të kem folur shqip.",
                "Я вже поговорю албанською (до певного моменту в майбутньому)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Future Perfect — B2"
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
        "id": "five-case-system",
        "title": "Sistemi i Rasave: Pesë — B1",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Албанська має п'ять відмінків: називний, знахідний, родовий, давальний і орудний (аблатив), успадкованих з давнішого індоєвропейського відмінкового стану.",
            "en": {
              "text": "Albanian has five cases: nominative, accusative, genitive, dative, and ablative, inherited from an older Indo-European case state."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "libri (наз.) / librit (родовий/давальний)",
                "the book (nominative) / of the book, to the book"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Five-Case System — B1"
      },
      {
        "id": "gender-two-plus-remnant",
        "title": "Gjinia: Mashkullore dhe Femërore — A2",
        "emoji": "⚥",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники мають чоловічий або жіночий рід, але невелика група незмінно однинних іменників (метали, абстрактні поняття) поводиться в множині як інший рід, — залишок давнього середнього роду.",
            "en": {
              "text": "Nouns are masculine or feminine, but a small group of otherwise-singular nouns (metals, abstract concepts) behave as the opposite gender in the plural — a remnant of an older neuter gender."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ari (золото, ч.р. одн.) → art (ж.р.-подібна форма, залишок середнього)",
                "gold (masc. singular) → (neuter-like remnant behavior)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Gender: Masculine/Feminine Plus a Neuter Remnant — A2"
      },
      {
        "id": "linking-article-nyja",
        "title": "Nyja Shquese e Lidhur: I, E, Të, Së — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники, присвійні займенники й порядкові числівники, поставлені після іменника, обов'язково супроводжуються 'сполучним артиклем' (i/e/të/së), що узгоджується з родом, числом і відмінком іменника, — унікальна риса албанської синтаксичної системи.",
            "en": {
              "text": "Adjectives, possessives, and ordinal numerals placed after the noun must obligatorily be preceded by a 'linking article' (i/e/të/së), agreeing with the noun's gender, number, and case — a feature unique to Albanian syntax."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "djali i mirë",
                "хороший хлопчик (i узгоджує прикметник з іменником)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Linking Article: i, e, të, së — B1"
      },
      {
        "id": "numbers-11-19-construction",
        "title": "Numrat 11-19: Një mbi Dhjetë — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Числа від 11 до 19 утворюються буквально як 'один-на-десять' (njëmbëdhjetë), — модель, спільна з балканським мовним союзом, а не з іншими індоєвропейськими мовами.",
            "en": {
              "text": "Numbers 11-19 are formed literally as 'one-on-ten' (njëmbëdhjetë) — a pattern shared with the Balkan Sprachbund, rather than with other Indo-European languages generally."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "njëmbëdhjetë (11, 'один-на-десять')",
                "eleven (literally 'one-on-ten')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Numbers 11-19: 'One-on-Ten' — A2"
      },
      {
        "id": "cardinal-numbers",
        "title": "Numrat: 1-10 — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "table",
            "title": "Числа 1-10",
            "rows": [
              [
                "1",
                "një"
              ],
              [
                "2",
                "dy"
              ],
              [
                "3",
                "tre/tri"
              ],
              [
                "5",
                "pesë"
              ],
              [
                "10",
                "dhjetë"
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
        "id": "definite-indefinite-noun-forms",
        "title": "Trajtat e Pashquara dhe Shquara — A2",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Кожен іменник має дві повністю окремі форми — неозначену (словникову) і означену (з артиклем), — які відмінюються за окремими парадигмами відмінка, а не просто додаванням артикля.",
            "en": {
              "text": "Every noun has two fully separate forms — indefinite (dictionary) and definite (with article) — which decline along separate case paradigms, not simply by adding an article."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mal (гора) / mali (ця гора)",
                "a mountain / the mountain"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Indefinite and Definite Noun Forms — A2"
      },
      {
        "id": "word-order-svo",
        "title": "Rendi i Fjalëve: SVO — A2",
        "emoji": "📝",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів — підмет-присудок-додаток (SVO), хоча багата відмінкова система дозволяє гнучкість для наголосу.",
            "en": {
              "text": "The basic word order is Subject-Verb-Object (SVO), though the rich case system allows flexibility for emphasis."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Djali lexon librin.",
                "Хлопчик читає книгу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Word Order: SVO — A2"
      },
      {
        "id": "clitic-doubling",
        "title": "Përemrat e Dobët të Dyfishtë — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Непрямий і прямий додаток часто дублюється ненаголошеним займенником-кліткою перед дієсловом навіть тоді, коли повний іменник теж присутній у реченні, — обов'язкове клітичне дублювання, характерне для балканського мовного союзу.",
            "en": {
              "text": "The indirect and direct object is often doubled by an unstressed clitic pronoun before the verb even when the full noun is also present in the sentence — obligatory clitic doubling, characteristic of the Balkan Sprachbund."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ia dhashë librin Anës.",
                "Я дав книгу Ані (ia дублює 'Ані' і 'книгу')."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Clitic Doubling — B2"
      },
      {
        "id": "comparative-me",
        "title": "Krahasori: Më — B1",
        "emoji": "📊",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняльний ступінь утворюється часткою më ('більш') перед прикметником, а об'єкт порівняння вводиться прийменником se.",
            "en": {
              "text": "The comparative degree is formed with the particle më ('more') before the adjective, with the compared object introduced by the preposition se."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kjo është më e madhe se ajo.",
                "Це більше за те."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparative: më — B1"
      },
      {
        "id": "superlative-me-i",
        "title": "Superlativi: Më i — B1",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь порівняння утворюється означеним артиклем плюс тим самим порівняльним më перед прикметником.",
            "en": {
              "text": "The superlative is formed with the definite article plus the same comparative më before the adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "më i madhi",
                "найбільший"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Superlative: më i — B1"
      },
      {
        "id": "demonstratives",
        "title": "Përemrat Dëftorë — A2",
        "emoji": "👉",
        "sections": [
          {
            "type": "table",
            "title": "Вказівні займенники",
            "rows": [
              [
                "цей",
                "ky/kjo"
              ],
              [
                "той",
                "ai/ajo"
              ]
            ],
            "en": {
              "title": "Demonstratives"
            }
          }
        ],
        "titleEn": "Demonstratives — A2"
      },
      {
        "id": "interrogatives",
        "title": "Fjalët Pyetëse — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "хто",
                "kush"
              ],
              [
                "що",
                "çfarë/çka"
              ],
              [
                "де",
                "ku"
              ],
              [
                "коли",
                "kur"
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
        "id": "negation-nuk-mos",
        "title": "Mohimi: Nuk dhe Mos — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення дійсного способу утворюється часткою nuk, тоді як умовно-бажальний і наказовий способи вживають окрему частку mos, — два різні заперечення для різних граматичних способів.",
            "en": {
              "text": "Negating the indicative uses the particle nuk, while the subjunctive and imperative moods use the separate particle mos — two distinct negators for different grammatical moods."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nuk flas. / Mos fol!",
                "Я не говорю. / Не говори!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation: nuk vs. mos — A2"
      },
      {
        "id": "possessive-with-linking-article",
        "title": "Përemrat Pronorë me Nyjë — A2",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійні займенники також вимагають сполучного артикля, що узгоджується з посідомим іменником, а не з власником, — та сама модель, що й для прикметників.",
            "en": {
              "text": "Possessive pronouns also require the linking article, agreeing with the possessed noun rather than the possessor — the same pattern used for adjectives."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "libri im / shtëpia ime",
                "моя книга (ч.р.) / мій дім (ж.р.) — різний артикль"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Possessives with the Linking Article — A2"
      },
      {
        "id": "conjunctions",
        "title": "Lidhëzat — A1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники",
            "rows": [
              [
                "і",
                "dhe/edhe"
              ],
              [
                "або",
                "ose"
              ],
              [
                "але",
                "por"
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
        "id": "relative-pronoun-qe",
        "title": "Përemri Lidhor: Që — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Означальні (відносні) підрядні речення вводяться незмінним відносним займенником që ('що/який'), незалежно від роду й числа означуваного іменника.",
            "en": {
              "text": "Relative clauses are introduced by the invariable relative pronoun që ('who/which'), regardless of the gender and number of the noun being modified."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "burri që flet",
                "чоловік, що говорить"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Pronoun: që — B1"
      },
      {
        "id": "reflexive-pronoun-vete",
        "title": "Përemri Vetvetor: Vetja — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотний займенник vetja ('сам/себе') узгоджується з підметом за особою через присвійний займенник, доданий до нього, а не через окремі форми для кожної особи.",
            "en": {
              "text": "The reflexive pronoun vetja ('self') agrees with the subject's person through a possessive pronoun attached to it, rather than through separate forms for each person."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "e shoh veten time",
                "я бачу себе"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reflexive Pronoun: vetja — B1"
      },
      {
        "id": "diminutive-suffix",
        "title": "Zvogëluesi: -th — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувально-пестлива форма утворюється суфіксом -th (ч.р.) чи -zë (ж.р.), доданим до основи іменника.",
            "en": {
              "text": "The diminutive is formed with the suffix -th (masculine) or -zë (feminine), added to the noun stem."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mal → malth",
                "гора → горбочок"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Diminutive: -th / -zë — B1"
      },
      {
        "id": "infinitive-replacement-per-te",
        "title": "Zëvendësimi i Paskajores: Për të — B1",
        "emoji": "📖",
        "sections": [
          {
            "type": "intro",
            "text": "Замість втраченого в стандартній тоскській мові інфінітива для вираження мети вживають конструкцію për të ('для того щоб') плюс сполучниковий спосіб.",
            "en": {
              "text": "Instead of the infinitive lost in standard Tosk-based Albanian, purpose is expressed with the construction për të ('in order to') plus the subjunctive mood."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Erdha për të folur.",
                "Я прийшов, щоб поговорити."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Infinitive Replacement: për të — B1"
      },
      {
        "id": "vocative-case",
        "title": "Rasa Thirrore — B1",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "При звертанні деякі іменники мають окрему кличну форму, часто з подовженим кінцевим голосним і частками like 'more' для неформального звертання.",
            "en": {
              "text": "In direct address, some nouns take a distinct vocative form, often with a lengthened final vowel and particles like 'more' for informal address."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Shoku, eja këtu!",
                "Друже, ходи сюди!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Vocative Case — B1"
      },
      {
        "id": "existential-ka",
        "title": "Ekzistenca: Ka — B1",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Наявність чогось передається безособовим дієсловом ka ('має бути'), незалежно від роду чи числа предмета, про який ідеться.",
            "en": {
              "text": "The existence of something is expressed with the impersonal verb ka ('there is'), regardless of the gender or number of the thing being talked about."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ka shumë njerëz.",
                "Там багато людей."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Existential: ka — B1"
      },
      {
        "id": "adjective-position-flexible",
        "title": "Vendi i Mbiemrit — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник зазвичай стоїть після іменника із сполучним артиклем, але кілька частотних прикметників (i madh, i vogël) також можуть стояти перед ним у певних стилістичних контекстах.",
            "en": {
              "text": "The adjective usually follows the noun with the linking article, but a handful of frequent adjectives (i madh, i vogël) can also precede it in certain stylistic contexts."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "shtëpia e madhe",
                "великий дім"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adjective Position — A2"
      },
      {
        "id": "prepositions-case-governing",
        "title": "Parafjalët dhe Rasat — B1",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Кожен прийменник керує певним відмінком — знахідним чи давальним/аблативом, — залежно від значення, тож той самий прийменник вимагає різних форм іменника.",
            "en": {
              "text": "Each preposition governs a specific case — accusative or dative/ablative — depending on meaning, so the same preposition requires different noun forms."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "me shokun (знахідний) / prej shokut (аблатив)",
                "with the friend (accusative) / from the friend (ablative)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Prepositions and Case Government — B1"
      },
      {
        "id": "question-particle-a",
        "title": "Pyetja: A — A2",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання без питального слова здебільшого утворюється часткою a на початку речення, без інверсії підмета й дієслова.",
            "en": {
              "text": "A yes/no question is mostly formed with the particle a at the start of the sentence, with no subject-verb inversion."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "A flet shqip?",
                "Ти говориш албанською?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Yes/No Question: a — A2"
      },
      {
        "id": "adverb-formation-si",
        "title": "Ndajfoljet: Si — B1",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Прислівники способу дії часто утворюються часткою si ('як') плюс прикметник у сполучній формі, а не окремим суфіксом.",
            "en": {
              "text": "Manner adverbs are often formed with the particle si ('as/like') plus the adjective in its linking form, rather than a dedicated suffix."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "si i shpejtë",
                "швидко (букв. 'як швидкий')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Manner Adverbs: si + Adjective — B1"
      },
      {
        "id": "illyrian-ancestry-debate",
        "title": "Origjina Ilire — B2",
        "emoji": "🏛️",
        "sections": [
          {
            "type": "intro",
            "text": "Албанська — єдина жива мова свого власного відгалуження індоєвропейської родини; походження від давньої іллірійської мови загальноприйняте, але через брак писемних пам'яток остаточно недоведене.",
            "en": {
              "text": "Albanian is the sole living language of its own branch of Indo-European; descent from the ancient Illyrian language is widely assumed but ultimately unproven due to a lack of written records."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Iliria (давня іллірійська територія)",
                "ancient Illyria"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Illyrian Ancestry Debate — B2"
      },
      {
        "id": "kanun-customary-law",
        "title": "Kanuni i Lekë Dukagjinit — B2",
        "emoji": "⚖️",
        "sections": [
          {
            "type": "intro",
            "text": "Канун Лекі Дукаджіні — записаний звичаєвий кодекс північної Албанії, що регулював гостинність, честь і кровну помсту й досі впливає на суспільне життя в деяких гірських регіонах.",
            "en": {
              "text": "The Kanun of Lekë Dukagjini is a codified customary law of northern Albania that governed hospitality, honor, and blood feuds, and still influences social life in some mountain regions today."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "sipas Kanunit (за Кануном)",
                "according to the Kanun"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Kanun of Lekë Dukagjini — B2"
      },
      {
        "id": "besa-honor-concept",
        "title": "Besa: Fjala e Nderit — B1",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "Besa ('слово честі') — священна обіцянка, порушення якої вважається найтяжчою ганьбою; besa захищала навіть гостей чи чужинців, переслідуваних ворогами, ціною власного життя господаря.",
            "en": {
              "text": "Besa ('word of honor') is a sacred promise whose violation is considered the gravest disgrace; besa protected even guests or strangers pursued by enemies, at the cost of the host's own life."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "e mbajti besën",
                "він дотримав слова честі"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Besa: The Word of Honor — B1"
      },
      {
        "id": "skanderbeg-national-hero",
        "title": "Skënderbeu — B1",
        "emoji": "⚔️",
        "sections": [
          {
            "type": "intro",
            "text": "Ґєорґ Кастріоті Скандербег — національний герой, що очолив опір Османській імперії в XV ст.; його зображення на прапорі й у центрі Тирани роблять його символом албанської ідентичності, порівнянним із засновником нації.",
            "en": {
              "text": "Gjergj Kastrioti Skanderbeg is the national hero who led resistance against the Ottoman Empire in the 15th century; his image on the flag and in central Tirana make him a symbol of Albanian identity comparable to a founding father."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Skënderbeu (heroi kombëtar)",
                "Skanderbeg (the national hero)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Skanderbeg: The National Hero — B1"
      },
      {
        "id": "digraphs-orthography",
        "title": "Bashkëtingëlloret e Dyfishta — A2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Албанська орфографія вживає диграфи (dh, gj, ll, nj, rr, sh, th, xh, zh) для позначення окремих фонем однією парою літер, — стандартизовано 1908 року на конгресі в Манастирі.",
            "en": {
              "text": "Albanian orthography uses digraphs (dh, gj, ll, nj, rr, sh, th, xh, zh) to represent single phonemes with a pair of letters, standardized in 1908 at the Congress of Manastir."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "gjuha shqipe (одна фонема на 'gj')",
                "the Albanian language (gj = one phoneme)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Digraph Orthography — A2"
      },
      {
        "id": "communist-bunkers-legacy",
        "title": "Bunkerët — B1",
        "emoji": "🏚️",
        "sections": [
          {
            "type": "intro",
            "text": "Режим Енвера Годжі побудував понад 170 000 бетонних бункерів по всій країні через параноїдальний страх вторгнення — слово bunker увійшло в повсякденне мовлення й туристичну лексику як розпізнавальний символ албанського ландшафту.",
            "en": {
              "text": "Enver Hoxha's regime built over 170,000 concrete bunkers across the country out of paranoid fear of invasion — the word bunker entered everyday and tourist vocabulary as a recognizable symbol of the Albanian landscape."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "bunker (mbi 170,000 nëpër vend)",
                "bunker (over 170,000 across the country)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Communist Bunker Legacy — B1"
      },
      {
        "id": "mother-teresa-heritage",
        "title": "Nëna Terezë — B1",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Мати Тереза, етнічна албанка з Скоп'є, — одна з найвідоміших постатей албанського походження у світі; аеропорт Тирани названий на її честь.",
            "en": {
              "text": "Mother Teresa, an ethnic Albanian born in Skopje, is one of the most globally recognized figures of Albanian heritage; Tirana's airport is named after her."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Aeroporti Nënë Tereza",
                "аеропорт Матері Терези (у Тирані)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Mother Teresa's Albanian Heritage — B1"
      },
      {
        "id": "ottoman-loanword-layer",
        "title": "Fjalët Osmane — B2",
        "emoji": "📚",
        "sections": [
          {
            "type": "intro",
            "text": "Майже п'ять століть османського правління залишили в албанській значний шар турецьких запозичень, особливо в побутовій, кулінарній і адміністративній лексиці, попри пізніші зусилля з мовного очищення.",
            "en": {
              "text": "Nearly five centuries of Ottoman rule left Albanian a significant layer of Turkish loanwords, especially in everyday, culinary, and administrative vocabulary, despite later language-purification efforts."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kafe (з турецької 'кава')",
                "coffee (Turkish loan)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ottoman Loanword Layer — B2"
      },
      {
        "id": "double-headed-eagle-flag",
        "title": "Shqiponja Dykrenore — B1",
        "emoji": "🦅",
        "sections": [
          {
            "type": "intro",
            "text": "Двоголовий орел на прапорі, символ Скандербега, дав самій країні поетичну самоназву 'Земля орлів' (Shqipëria), пов'язану зі словом shqiponjë ('орел').",
            "en": {
              "text": "The double-headed eagle on the flag, Skanderbeg's symbol, gave the country its own poetic self-name 'Land of the Eagles' (Shqipëria), linked to the word shqiponjë ('eagle')."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Shqipëria ('Земля орлів')",
                "Shqipëria ('Land of the Eagles')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Double-Headed Eagle and the Flag — B1"
      },
      {
        "id": "colors",
        "title": "Ngjyrat — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "table",
            "title": "Кольори",
            "rows": [
              [
                "червоний",
                "kuq"
              ],
              [
                "чорний",
                "zi"
              ],
              [
                "білий",
                "bardhë"
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
        "title": "Numrat: Dhjetëshet — A2",
        "emoji": "🔟",
        "sections": [
          {
            "type": "table",
            "title": "Десятки",
            "rows": [
              [
                "20",
                "njëzet"
              ],
              [
                "100",
                "njëqind"
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
        "id": "family-terms",
        "title": "Familja — A2",
        "emoji": "👪",
        "sections": [
          {
            "type": "table",
            "title": "Родина",
            "rows": [
              [
                "батько",
                "baba"
              ],
              [
                "мати",
                "nënë"
              ],
              [
                "брат",
                "vëlla"
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
        "id": "byrek-traditional-food",
        "title": "Byrek — A2",
        "emoji": "🥧",
        "sections": [
          {
            "type": "intro",
            "text": "Бюрек — шаруватий пиріг з начинкою (сир, шпинат, м'ясо), продається на кожному кроці й вважається невіддільним елементом албанського сніданку.",
            "en": {
              "text": "Byrek is a layered filled pastry (cheese, spinach, meat), sold on every corner and considered an inseparable part of the Albanian breakfast."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "byrek me spinaq",
                "бюрек зі шпинатом"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Byrek: Traditional Filled Pastry — A2"
      },
      {
        "id": "greetings",
        "title": "Përshëndetjet — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "table",
            "title": "Вітання",
            "rows": [
              [
                "Привіт",
                "Përshëndetje"
              ],
              [
                "Дякую",
                "Faleminderit"
              ],
              [
                "До побачення",
                "Mirupafshim"
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
        "title": "Moti — A2",
        "emoji": "☁️",
        "sections": [
          {
            "type": "table",
            "title": "Погода",
            "rows": [
              [
                "сонце",
                "diell"
              ],
              [
                "дощ",
                "shi"
              ],
              [
                "сніг",
                "borë"
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
        "title": "Pjesët e Trupit — A2",
        "emoji": "🧍",
        "sections": [
          {
            "type": "table",
            "title": "Частини тіла",
            "rows": [
              [
                "голова",
                "kokë"
              ],
              [
                "рука",
                "dorë"
              ],
              [
                "око",
                "sy"
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
        "id": "traditional-clothing-qeleshe",
        "title": "Qeleshja dhe Fustanella — B1",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Qeleshja — біла повстяна шапка без крисів, регіонально відмінна за формою, і фустанелла — плісована спідниця чоловічого костюма, обидві досі вживані як символи національної ідентичності на святах.",
            "en": {
              "text": "The qeleshe is a white felt brimless cap, regionally distinct in shape, and the fustanella is the pleated skirt of the men's costume, both still worn as national-identity symbols at festivals."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "qeleshja e bardhë",
                "біла шапка qeleshe"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Traditional Clothing: Qeleshe and Fustanella — B1"
      },
      {
        "id": "clothing-vocabulary",
        "title": "Veshjet — A2",
        "emoji": "👕",
        "sections": [
          {
            "type": "table",
            "title": "Одяг",
            "rows": [
              [
                "сорочка",
                "këmishë"
              ],
              [
                "взуття",
                "këpucë"
              ]
            ],
            "en": {
              "title": "Clothing"
            }
          }
        ],
        "titleEn": "Clothing Vocabulary — A2"
      },
      {
        "id": "animals-vocabulary",
        "title": "Kafshët — A2",
        "emoji": "🦅",
        "sections": [
          {
            "type": "table",
            "title": "Тварини",
            "rows": [
              [
                "орел",
                "shqiponjë"
              ],
              [
                "собака",
                "qen"
              ],
              [
                "риба",
                "peshk"
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
        "title": "Drejtimet — B1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "table",
            "title": "Сторони світу",
            "rows": [
              [
                "північ",
                "veri"
              ],
              [
                "південь",
                "jug"
              ],
              [
                "схід",
                "lindje"
              ],
              [
                "захід",
                "perëndim"
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
        "id": "raki-hospitality-drink",
        "title": "Rakia dhe Mikpritja — B1",
        "emoji": "🥃",
        "sections": [
          {
            "type": "intro",
            "text": "Домашня ракія (фруктова горілка) невіддільна від гостинності — гостю пропонують склянку відразу при вході, ще до будь-якої розмови, символічно відкриваючи двері дому.",
            "en": {
              "text": "Homemade raki (fruit brandy) is inseparable from hospitality — a guest is offered a glass immediately upon entering, before any conversation, symbolically opening the doors of the house."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "një gotë raki",
                "склянка ракії"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Raki and Hospitality Customs — B1"
      },
      {
        "id": "diaspora-geography",
        "title": "Shqiptarët Jashtë Shqipërisë — B2",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Етнічні албанці становлять більшість населення Косова й значну частину Північної Македонії, тож албанська мова живе в кількох державах поза самою Албанією, — рідкісний випадок мови, поширенішої за межами свого офіційного 'дому'.",
            "en": {
              "text": "Ethnic Albanians form the majority in Kosovo and a significant share in North Macedonia, so the Albanian language lives across several states beyond Albania itself — a rare case of a language spread wider than its official 'home'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kosova, Maqedonia e Veriut",
                "Косово, Північна Македонія (значні албаномовні регіони)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Albanian Beyond Albania's Borders — B2"
      },
      {
        "id": "days-of-week",
        "title": "Ditët e Javës — A2",
        "emoji": "📅",
        "sections": [
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "понеділок",
                "e hënë"
              ],
              [
                "п'ятниця",
                "e premte"
              ],
              [
                "неділя",
                "e diel"
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
        "id": "coordinating-conjunctions-extra",
        "title": "Lidhëza të Tjera — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Сполучник sepse ('тому що') і частка prandaj ('отже') розширюють базовий набір dhe/ose/por, додаючи причинові й наслідкові зв'язки.",
            "en": {
              "text": "The conjunction sepse ('because') and the particle prandaj ('therefore') extend the basic dhe/ose/por set, adding causal and consequential links."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Rri në shtëpi sepse bie shi.",
                "Я залишаюся вдома, бо йде дощ."
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
        "id": "irregular-verb-jam",
        "title": "Folja e Parregullt: Jam ('të jem') — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово jam ('бути') має повністю супплетивні форми в різних часах, не пов'язані спільним коренем, — типова риса для дієслова 'бути' в багатьох мовах світу.",
            "en": {
              "text": "The verb jam ('to be') has fully suppletive forms across different tenses, not sharing a common root — a typical trait for the verb 'to be' across many world languages."
            }
          },
          {
            "type": "table",
            "title": "Супплетивні форми",
            "rows": [
              [
                "jam (я є) vs. isha (я був)",
                "am vs. was (suppletive roots)"
              ]
            ],
            "en": {
              "title": "Suppletive Forms"
            }
          }
        ],
        "titleEn": "Irregular Verb: jam ('to be') — B1"
      },
      {
        "id": "irregular-plural-njeri",
        "title": "Shumësi i Parregullt: Njeri → Njerëz — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Іменник njeri ('людина') утворює множину від зовсім іншого кореня (njerëz), а не за регулярною моделлю додавання закінчень до основи однини.",
            "en": {
              "text": "The noun njeri ('person') forms its plural from an entirely different root (njerëz), not by the regular pattern of adding endings to the singular stem."
            }
          },
          {
            "type": "table",
            "title": "Супплетивна множина",
            "rows": [
              [
                "njeri → njerëz (не *njerinj)",
                "person → people (suppletive plural)"
              ]
            ],
            "en": {
              "title": "Suppletive Plural"
            }
          }
        ],
        "titleEn": "Irregular Plural: njeri → njerëz — B2"
      },
      {
        "id": "irregular-comparative-shume",
        "title": "Krahasori i Parregullt: Shumë → Më Shumë — B1",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Прислівник shumë ('дуже/багато') уживає окрему форму më shumë для порівняльного ступеня, а не звичайну модель 'më + прикметник', властиву прикметникам.",
            "en": {
              "text": "The adverb shumë ('very/much') uses the separate form më shumë for its comparative, rather than the ordinary 'më + adjective' pattern typical of adjectives."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярний порівняльний ступінь",
            "rows": [
              [
                "shumë → më shumë ('більше', не *më i shumë)",
                "much → more (irregular, not the adjective pattern)"
              ]
            ],
            "en": {
              "title": "Irregular Comparative"
            }
          }
        ],
        "titleEn": "Irregular Comparative: shumë → më shumë — B1"
      }
    ]
  }
];
