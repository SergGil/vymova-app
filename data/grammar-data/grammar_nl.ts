// Vymova — data/grammar-data/grammar_nl.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_NL: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "pronouns",
        "title": "Persoonlijke voornaamwoorden — A1",
        "emoji": "🙋",
        "sections": [
          {
            "type": "intro",
            "text": "В нідерландській є повні та скорочені форми особових займенників; скорочені частіше вживаються в розмовній мові.",
            "en": {
              "text": "Dutch has full and reduced forms of personal pronouns; the reduced forms are more common in spoken language."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "ik",
                "я"
              ],
              [
                "jij / je",
                "ти"
              ],
              [
                "u",
                "Ви (ввічливо)"
              ],
              [
                "hij / zij / het",
                "він / вона / воно"
              ],
              [
                "wij / we",
                "ми"
              ],
              [
                "jullie",
                "ви (мн.)"
              ],
              [
                "zij / ze",
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
                "Ik woon in Rotterdam.",
                "Я живу в Роттердамі."
              ],
              [
                "Zij werkt hard.",
                "Вона багато працює."
              ]
            ]
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      },
      {
        "id": "verb-zijn-hebben",
        "title": "Zijn & hebben — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "\"Zijn\" (бути) і \"hebben\" (мати) — два найважливіші дієслова нідерландської мови, які також служать допоміжними дієсловами для доконаного часу.",
            "en": {
              "text": "\"Zijn\" (to be) and \"hebben\" (to have) are the two most important Dutch verbs and also serve as auxiliary verbs for the perfect tense."
            }
          },
          {
            "type": "formula",
            "title": "zijn / hebben — теперішній час",
            "rows": [
              [
                "ik",
                "ben",
                "heb"
              ],
              [
                "jij, je",
                "bent",
                "hebt"
              ],
              [
                "hij, zij, het",
                "is",
                "heeft"
              ],
              [
                "wij, we",
                "zijn",
                "hebben"
              ],
              [
                "jullie",
                "zijn",
                "hebben"
              ],
              [
                "zij, ze",
                "zijn",
                "hebben"
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
                "Ik heb een hond.",
                "У мене є собака."
              ],
              [
                "Wij zijn moe.",
                "Ми втомлені."
              ]
            ]
          }
        ],
        "titleEn": "Zijn & Hebben (To Be / To Have) — A1"
      },
      {
        "id": "articles-de-het",
        "title": "Lidwoorden: de, het, een — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Означений артикль \"de\" вживається з іменниками спільного роду (близько 2/3 усіх іменників) і з усіма іменниками у множині, а \"het\" — із середнім родом в однині. Неозначений артикль для обох родів однаковий — \"een\".",
            "en": {
              "text": "The definite article \"de\" is used with common-gender nouns (about two-thirds of all nouns) and with every plural noun, while \"het\" marks singular neuter nouns. The indefinite article is the same for both genders — \"een\"."
            }
          },
          {
            "type": "table",
            "title": "de чи het",
            "rows": [
              [
                "de tafel",
                "стіл (спільний рід)"
              ],
              [
                "het boek",
                "книга (середній рід)"
              ],
              [
                "de tafels / de boeken",
                "столи / книги (множина завжди de)"
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
                "De tafel is groot.",
                "Стіл великий."
              ],
              [
                "Het boek is interessant.",
                "Книга цікава."
              ]
            ]
          }
        ],
        "titleEn": "Articles: De, Het, Een — A1"
      },
      {
        "id": "negation",
        "title": "Ontkenning: niet & geen — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "\"Geen\" заперечує іменники, перед якими стояв би \"een\" або взагалі жоден артикль; \"niet\" заперечує все інше — дієслова, прикметники, конкретні (означені) іменники.",
            "en": {
              "text": "\"Geen\" negates nouns that would otherwise take \"een\" or no article at all; \"niet\" negates everything else — verbs, adjectives, and definite (specific) nouns."
            }
          },
          {
            "type": "table",
            "title": "niet чи geen",
            "rows": [
              [
                "Ik heb geen tijd.",
                "У мене немає часу."
              ],
              [
                "Ik zie het niet.",
                "Я цього не бачу."
              ],
              [
                "Dit is niet de trein naar Utrecht.",
                "Це не той потяг до Утрехта."
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
                "Zij drinkt geen koffie.",
                "Вона не п’є каву."
              ],
              [
                "Hij komt niet.",
                "Він не прийде."
              ]
            ]
          }
        ],
        "titleEn": "Negation: Niet & Geen — A1"
      },
      {
        "id": "questions",
        "title": "Ja/nee-vragen & vraagwoorden — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "У питаннях без питального слова дієслово ставиться на перше місце (інверсія). З питальним словом (wat, wie, waar...) воно йде одразу після нього.",
            "en": {
              "text": "In yes/no questions the verb moves to the front of the sentence (inversion). With a question word (wat, wie, waar...) the verb comes right after it."
            }
          },
          {
            "type": "table",
            "title": "Основні питальні слова",
            "rows": [
              [
                "wat",
                "що"
              ],
              [
                "wie",
                "хто"
              ],
              [
                "waar",
                "де"
              ],
              [
                "wanneer",
                "коли"
              ],
              [
                "waarom",
                "чому"
              ],
              [
                "hoe",
                "як"
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
                "Spreek je Engels?",
                "Ти говориш англійською?"
              ],
              [
                "Waar woon je?",
                "Де ти живеш?"
              ]
            ]
          }
        ],
        "titleEn": "Yes/No Questions & Question Words — A1"
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
        "id": "present-tense",
        "title": "Tegenwoordige tijd — A1",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній час утворюється відніманням -en від інфінітива (основа дієслова) і додаванням особового закінчення: -, -t, -t, -en.",
            "en": {
              "text": "The present tense is formed by removing -en from the infinitive (the stem) and adding a personal ending: -, -t, -t, -en."
            }
          },
          {
            "type": "formula",
            "title": "werken (працювати)",
            "rows": [
              [
                "ik",
                "werk",
                "я працюю"
              ],
              [
                "jij / je",
                "werkt",
                "ти працюєш"
              ],
              [
                "hij / zij / het",
                "werkt",
                "він/вона працює"
              ],
              [
                "wij, jullie, zij",
                "werken",
                "ми/ви/вони працюємо"
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
                "Ik werk elke dag.",
                "Я працюю щодня."
              ],
              [
                "Zij woont in Utrecht.",
                "Вона живе в Утрехті."
              ]
            ]
          }
        ],
        "titleEn": "Present Tense — A1"
      },
      {
        "id": "perfect-tense",
        "title": "Voltooid tegenwoordige tijd (perfectum) — A2",
        "emoji": "🕑",
        "sections": [
          {
            "type": "intro",
            "text": "Доконаний теперішній час утворюється допоміжним дієсловом \"hebben\" або \"zijn\" у теперішньому часі + дієприкметник минулого часу (voltooid deelwoord), який зазвичай ставиться в кінець речення.",
            "en": {
              "text": "The present perfect is formed with the auxiliary \"hebben\" or \"zijn\" in the present tense plus a past participle (voltooid deelwoord), which usually goes to the end of the clause."
            }
          },
          {
            "type": "table",
            "title": "ge- + основа + -d/-t",
            "rows": [
              [
                "werken → gewerkt",
                "працювати → попрацював"
              ],
              [
                "maken → gemaakt",
                "робити → зробив"
              ],
              [
                "fietsen → gefietst",
                "їхати на велосипеді → проїхав"
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
                "Ik heb gewerkt.",
                "Я попрацював."
              ],
              [
                "Wij hebben een huis gekocht.",
                "Ми купили будинок."
              ]
            ]
          }
        ],
        "titleEn": "Present Perfect (Perfectum) — A2"
      },
      {
        "id": "hebben-zijn-choice",
        "title": "Hebben of zijn als hulpwerkwoord — A2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Більшість дієслів утворюють доконаний час із \"hebben\". \"Zijn\" вживається з дієсловами руху зі зміною місця (gaan, komen, vertrekken) та зі зміни стану (worden, groeien, sterven), а також із самих \"zijn\" і \"blijven\".",
            "en": {
              "text": "Most verbs form the perfect with \"hebben\". \"Zijn\" is used with verbs of motion that involve a change of place (gaan, komen, vertrekken) and verbs of change of state (worden, groeien, sterven), as well as with \"zijn\" and \"blijven\" themselves."
            }
          },
          {
            "type": "table",
            "title": "hebben vs zijn",
            "rows": [
              [
                "Ik ben naar huis gegaan.",
                "Я пішов додому."
              ],
              [
                "Zij is ziek geworden.",
                "Вона захворіла."
              ],
              [
                "Wij zijn gebleven.",
                "Ми залишилися."
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
                "Hij is gevallen.",
                "Він впав."
              ],
              [
                "Ik heb gegeten.",
                "Я поїв."
              ]
            ]
          }
        ],
        "titleEn": "Choosing Hebben or Zijn — A2"
      },
      {
        "id": "simple-past",
        "title": "Onvoltooid verleden tijd — A2",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Слабкі (правильні) дієслова утворюють минулий час додаванням -te(n) або -de(n) до основи, залежно від останньої приголосної (правило ’t kofschip). Сильні дієслова змінюють кореневий голосний.",
            "en": {
              "text": "Weak (regular) verbs form the simple past by adding -te(n) or -de(n) to the stem, depending on the final consonant (the ’t kofschip rule). Strong verbs change their stem vowel."
            }
          },
          {
            "type": "table",
            "title": "правило ’t kofschip",
            "rows": [
              [
                "werken → werkte(n)",
                "k — глуха приголосна → -te"
              ],
              [
                "leven → leefde(n)",
                "v звучить як f, дзвінка → -de"
              ],
              [
                "lopen (сильне) → liep(en)",
                "змінюється кореневий голосний"
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
                "Ik werkte gisteren.",
                "Я працював учора."
              ],
              [
                "Hij liep naar school.",
                "Він йшов до школи."
              ]
            ]
          }
        ],
        "titleEn": "Simple Past (Imperfect) — A2"
      },
      {
        "id": "past-perfect",
        "title": "Voltooid verleden tijd — B1",
        "emoji": "⏮️",
        "sections": [
          {
            "type": "intro",
            "text": "Доконаний минулий час позначає дію, яка відбулася до іншої минулої дії. Утворюється допоміжним дієсловом \"had(den)\" або \"was/waren\" + дієприкметник минулого часу.",
            "en": {
              "text": "The past perfect marks an action that took place before another past action. It is formed with the auxiliary \"had(den)\" or \"was/waren\" plus a past participle."
            }
          },
          {
            "type": "table",
            "title": "had(den) / was(en) + deelwoord",
            "rows": [
              [
                "ik/jij/hij had gewerkt",
                "я вже попрацював (до того)"
              ],
              [
                "ik/jij/hij was vertrokken",
                "я вже поїхав (до того)"
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
                "Ik had het al gedaan.",
                "Я вже це зробив."
              ],
              [
                "Zij was al vertrokken toen ik aankwam.",
                "Вона вже поїхала, коли я прибув."
              ]
            ]
          }
        ],
        "titleEn": "Past Perfect (Pluperfect) — B1"
      },
      {
        "id": "future-gaan",
        "title": "Nabije toekomst met \"gaan\" — A1",
        "emoji": "🚶",
        "sections": [
          {
            "type": "intro",
            "text": "\"Gaan\" + інфінітив описує заплановану або близьку майбутню дію, подібно до англійського \"going to\".",
            "en": {
              "text": "\"Gaan\" + infinitive describes a planned or near future action, similar to English \"going to\"."
            }
          },
          {
            "type": "table",
            "title": "gaan + infinitief",
            "rows": [
              [
                "ik ga werken",
                "я збираюся працювати"
              ],
              [
                "wij gaan reizen",
                "ми поїдемо подорожувати"
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
                "Ik ga morgen werken.",
                "Я завтра піду на роботу."
              ],
              [
                "Zij gaat een huis kopen.",
                "Вона збирається купити будинок."
              ]
            ]
          }
        ],
        "titleEn": "Near Future with Gaan — A1"
      },
      {
        "id": "future-zullen",
        "title": "Toekomende tijd met \"zullen\" — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "\"Zullen\" + інфінітив виражає передбачення, обіцянку або рішення, прийняте в момент мовлення.",
            "en": {
              "text": "\"Zullen\" + infinitive expresses a prediction, a promise, or a decision made at the moment of speaking."
            }
          },
          {
            "type": "table",
            "title": "zullen + infinitief",
            "rows": [
              [
                "ik zal komen",
                "я прийду"
              ],
              [
                "wij zullen helpen",
                "ми допоможемо"
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
                "Het zal morgen regenen.",
                "Завтра, мабуть, буде дощ."
              ],
              [
                "Ik zal je bellen.",
                "Я тобі подзвоню."
              ]
            ]
          }
        ],
        "titleEn": "Future Tense with Zullen — A2"
      },
      {
        "id": "imperative",
        "title": "Gebiedende wijs — A1",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб зазвичай збігається з основою дієслова (інфінітив без -en). Для ввічливої форми додають \"u\" після дієслова.",
            "en": {
              "text": "The imperative usually matches the verb stem (the infinitive minus -en). For the polite form, \"u\" is added after the verb."
            }
          },
          {
            "type": "table",
            "title": "Наказовий спосіб",
            "rows": [
              [
                "Kom hier!",
                "Іди сюди!"
              ],
              [
                "Wacht even.",
                "Зачекай хвилинку."
              ],
              [
                "Komt u binnen.",
                "Заходьте, будь ласка (ввічливо)."
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
                "Doe de deur dicht.",
                "Зачини двері."
              ],
              [
                "Luister goed.",
                "Слухай уважно."
              ]
            ]
          }
        ],
        "titleEn": "Imperative — A1"
      },
      {
        "id": "conditional-zou",
        "title": "Voorwaardelijke wijs: \"zou\" — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "\"Zou(den)\" + інфінітив передає умовний спосіб (українське \"б/би\") і часто вживається у ввічливих проханнях і гіпотетичних реченнях.",
            "en": {
              "text": "\"Zou(den)\" + infinitive expresses the conditional mood (English \"would\") and is often used for polite requests and hypothetical sentences."
            }
          },
          {
            "type": "table",
            "title": "zou(den) + infinitief",
            "rows": [
              [
                "Ik zou graag koffie willen.",
                "Я б хотів кави."
              ],
              [
                "Als ik rijk was, zou ik reizen.",
                "Якби я був багатим, я б подорожував."
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
                "Zou je me kunnen helpen?",
                "Чи не міг би ти мені допомогти?"
              ],
              [
                "Dat zou fijn zijn.",
                "Це було б чудово."
              ]
            ]
          }
        ],
        "titleEn": "Conditional Mood with Zou — B1"
      },
      {
        "id": "double-infinitive",
        "title": "Dubbele infinitief bij modale werkwoorden — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "У доконаному часі модальні дієслова (kunnen, moeten, willen...) зазвичай не набувають форми дієприкметника, а стоять в інфінітиві поруч зі смисловим дієсловом — так званий \"подвійний інфінітив\".",
            "en": {
              "text": "In the perfect tense, modal verbs (kunnen, moeten, willen...) usually do not take a participle form but appear as an infinitive next to the main verb — the so-called \"double infinitive\"."
            }
          },
          {
            "type": "table",
            "title": "hebben + infinitief + modaal",
            "rows": [
              [
                "Ik heb moeten werken.",
                "Мені довелося працювати."
              ],
              [
                "Zij heeft willen komen.",
                "Вона хотіла прийти."
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
                "Wij hebben het niet kunnen doen.",
                "Ми не змогли це зробити."
              ],
              [
                "Hij heeft moeten wachten.",
                "Йому довелося чекати."
              ]
            ]
          }
        ],
        "titleEn": "Double Infinitive with Modal Verbs — B1"
      },
      {
        "id": "passive-voice",
        "title": "Lijdende vorm — B1",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Пасив дії утворюється допоміжним дієсловом \"worden\" + дієприкметник минулого часу; пасив стану — дієсловом \"zijn\" + дієприкметник.",
            "en": {
              "text": "The passive of an ongoing action is formed with \"worden\" + past participle; the passive of a resulting state uses \"zijn\" + past participle."
            }
          },
          {
            "type": "table",
            "title": "worden vs zijn (пасив)",
            "rows": [
              [
                "Het huis wordt gebouwd.",
                "Будинок будується."
              ],
              [
                "Het huis is gebouwd.",
                "Будинок збудовано (стан)."
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
                "De brief wordt geschreven.",
                "Лист пишеться."
              ],
              [
                "Het probleem werd opgelost.",
                "Проблему було вирішено."
              ]
            ]
          }
        ],
        "titleEn": "Passive Voice — B1"
      },
      {
        "id": "present-participle",
        "title": "Tegenwoordig deelwoord — B1",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприкметник теперішнього часу утворюється додаванням -d до інфінітива і вживається як прикметник або обставина способу дії.",
            "en": {
              "text": "The present participle is formed by adding -d to the infinitive and is used as an adjective or as an adverb of manner."
            }
          },
          {
            "type": "table",
            "title": "infinitief + d",
            "rows": [
              [
                "een slapend kind",
                "дитина, що спить"
              ],
              [
                "lachend liep hij weg",
                "він пішов, сміючись"
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
                "Zingend liep ze door de straat.",
                "Наспівуючи, вона йшла вулицею."
              ],
              [
                "Het is een verrassend resultaat.",
                "Це дивовижний результат."
              ]
            ]
          }
        ],
        "titleEn": "Present Participle — B1"
      },
      {
        "id": "subjunctive-wishes",
        "title": "Archaïsche wensvorm: \"moge\" — C1",
        "emoji": "🕊️",
        "sections": [
          {
            "type": "intro",
            "text": "У формальних побажаннях і девізах іноді трапляється застарілий кон’юнктив, наприклад \"moge\" (нехай). У сучасній мові він майже не використовується поза сталими виразами.",
            "en": {
              "text": "In formal wishes and mottos, an archaic subjunctive occasionally appears, such as \"moge\" (may). In modern usage it survives almost only in set expressions."
            }
          },
          {
            "type": "table",
            "title": "Застарілий кон’юнктив",
            "rows": [
              [
                "Moge het je goed gaan.",
                "Нехай тобі щастить."
              ],
              [
                "Lang leve de koning!",
                "Хай живе король!"
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
                "God zij met u.",
                "Хай Бог буде з вами."
              ],
              [
                "Moge dit jaar goed zijn.",
                "Нехай цей рік буде хорошим."
              ]
            ]
          }
        ],
        "titleEn": "Archaic Subjunctive: Wishes with Moge — C1"
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
        "id": "plural-nouns",
        "title": "Meervoud — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина зазвичай утворюється закінченням -en, рідше -s (після ненаголошеного -el, -en, -er, -em або зменшувального -je).",
            "en": {
              "text": "The plural is usually formed with the ending -en, less often -s (after an unstressed -el, -en, -er, -em, or a diminutive -je)."
            }
          },
          {
            "type": "table",
            "title": "Однина → множина",
            "rows": [
              [
                "huis → huizen",
                "дім → доми"
              ],
              [
                "boek → boeken",
                "книга → книги"
              ],
              [
                "tafel → tafels",
                "стіл → столи"
              ],
              [
                "auto → auto's",
                "авто → авто (мн.)"
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
                "Ik heb twee katten.",
                "У мене дві кішки."
              ],
              [
                "De kinderen spelen buiten.",
                "Діти грають надворі."
              ]
            ]
          }
        ],
        "titleEn": "Plural Nouns — A1"
      },
      {
        "id": "noun-gender",
        "title": "Geslacht: de- en het-woorden — A1",
        "emoji": "⚧️",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники поділяються на спільний рід (de-woorden, близько 2/3) і середній рід (het-woorden, близько 1/3); рід треба запам’ятовувати з кожним словом окремо.",
            "en": {
              "text": "Nouns fall into common gender (de-woorden, about two-thirds) and neuter gender (het-woorden, about one-third); gender must be memorized with each word."
            }
          },
          {
            "type": "table",
            "title": "de- та het-слова",
            "rows": [
              [
                "de vrouw, de stoel, de auto",
                "жінка, стілець, авто"
              ],
              [
                "het kind, het water, het meisje",
                "дитина, вода, дівчинка"
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
                "De stoel staat in de kamer.",
                "Стілець стоїть у кімнаті."
              ],
              [
                "Het meisje leest een boek.",
                "Дівчинка читає книгу."
              ]
            ]
          }
        ],
        "titleEn": "Noun Gender: De- and Het-words — A1"
      },
      {
        "id": "diminutives",
        "title": "Verkleinwoorden (-je) — A2",
        "emoji": "🤏",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувальна форма додається суфіксом -je (та варіантами -tje, -pje, -kje) і завжди отримує рід \"het\".",
            "en": {
              "text": "The diminutive is formed with the suffix -je (and the variants -tje, -pje, -kje) and always takes \"het\" as its article."
            }
          },
          {
            "type": "table",
            "title": "Зменшувальні форми",
            "rows": [
              [
                "huis → huisje",
                "будиночок"
              ],
              [
                "boom → boompje",
                "деревце"
              ],
              [
                "tafel → tafeltje",
                "столик"
              ],
              [
                "kop → kopje",
                "чашечка"
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
                "Wil je een kopje koffie?",
                "Хочеш чашечку кави?"
              ],
              [
                "Het huisje is heel klein.",
                "Будиночок дуже маленький."
              ]
            ]
          }
        ],
        "titleEn": "Diminutives (-je) — A2"
      },
      {
        "id": "possessive-pronouns",
        "title": "Bezittelijke voornaamwoorden — A1",
        "emoji": "👪",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійні займенники не змінюються за родом чи числом іменника, на відміну від багатьох інших європейських мов.",
            "en": {
              "text": "Possessive pronouns do not change according to the gender or number of the noun, unlike in many other European languages."
            }
          },
          {
            "type": "table",
            "title": "Присвійні займенники",
            "rows": [
              [
                "mijn",
                "мій"
              ],
              [
                "jouw / je",
                "твій"
              ],
              [
                "uw",
                "Ваш"
              ],
              [
                "zijn",
                "його"
              ],
              [
                "haar",
                "її"
              ],
              [
                "ons / onze",
                "наш"
              ],
              [
                "jullie",
                "ваш (мн.)"
              ],
              [
                "hun",
                "їхній"
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
                "Dit is mijn tas.",
                "Це моя сумка."
              ],
              [
                "Ons huis is groot.",
                "Наш будинок великий."
              ]
            ]
          }
        ],
        "titleEn": "Possessive Pronouns — A1"
      },
      {
        "id": "demonstrative-pronouns",
        "title": "Aanwijzende voornaamwoorden — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Вказівні займенники узгоджуються з родом іменника: deze/dit — \"цей\", die/dat — \"той\".",
            "en": {
              "text": "Demonstrative pronouns agree with the gender of the noun: deze/dit mean \"this\", die/dat mean \"that\"."
            }
          },
          {
            "type": "table",
            "title": "deze/dit vs die/dat",
            "rows": [
              [
                "deze man (de)",
                "цей чоловік"
              ],
              [
                "dit boek (het)",
                "ця книга"
              ],
              [
                "die man (de)",
                "той чоловік"
              ],
              [
                "dat boek (het)",
                "та книга"
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
                "Deze auto is nieuw.",
                "Ця машина нова."
              ],
              [
                "Dat huis is oud.",
                "Той будинок старий."
              ]
            ]
          }
        ],
        "titleEn": "Demonstrative Pronouns — A1"
      },
      {
        "id": "relative-pronouns",
        "title": "Betrekkelijke voornaamwoorden: die/dat — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "\"Die\" вживається для de-слів (і для людей загалом), \"dat\" — для het-слів.",
            "en": {
              "text": "\"Die\" is used for de-words (and generally for people), \"dat\" is used for het-words."
            }
          },
          {
            "type": "table",
            "title": "die vs dat",
            "rows": [
              [
                "de man die daar staat",
                "чоловік, який там стоїть"
              ],
              [
                "het boek dat ik lees",
                "книга, яку я читаю"
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
                "Ik ken de vrouw die daar woont.",
                "Я знаю жінку, яка там живе."
              ],
              [
                "Dit is het huis dat we kopen.",
                "Це будинок, який ми купуємо."
              ]
            ]
          }
        ],
        "titleEn": "Relative Pronouns: Die/Dat — B1"
      },
      {
        "id": "interrogative-pronouns",
        "title": "Vraagwoorden: wie, wat, welke — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "table",
            "title": "Питальні займенники",
            "rows": [
              [
                "wie",
                "хто"
              ],
              [
                "wat",
                "що"
              ],
              [
                "welke / welk",
                "який/яка/яке"
              ],
              [
                "wiens",
                "чий"
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
                "Wie is dat?",
                "Хто це?"
              ],
              [
                "Welke trein gaat naar Den Haag?",
                "Який потяг їде до Гааги?"
              ]
            ]
          }
        ],
        "titleEn": "Interrogative Pronouns — A1"
      },
      {
        "id": "indefinite-pronouns",
        "title": "Onbepaalde voornaamwoorden — A2",
        "emoji": "🌀",
        "sections": [
          {
            "type": "table",
            "title": "Неозначені займенники",
            "rows": [
              [
                "iemand / niemand",
                "хтось / ніхто"
              ],
              [
                "iets / niets",
                "щось / нічого"
              ],
              [
                "ergens / nergens",
                "десь / ніде"
              ],
              [
                "elk(e) / alle",
                "кожен / усі"
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
                "Er is iemand aan de deur.",
                "Хтось біля дверей."
              ],
              [
                "Ik heb niets gezien.",
                "Я нічого не бачив."
              ]
            ]
          }
        ],
        "titleEn": "Indefinite Pronouns — A2"
      },
      {
        "id": "reflexive-pronouns",
        "title": "Wederkerende voornaamwoorden & werkwoorden — A2",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотні дієслова вживаються зі зворотним займенником, що узгоджується з підметом.",
            "en": {
              "text": "Reflexive verbs are used with a reflexive pronoun that agrees with the subject."
            }
          },
          {
            "type": "table",
            "title": "wassen (митися)",
            "rows": [
              [
                "ik was me",
                "я миюся"
              ],
              [
                "jij wast je",
                "ти миєшся"
              ],
              [
                "hij/zij wast zich",
                "він/вона миється"
              ],
              [
                "wij wassen ons",
                "ми миємося"
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
                "Ik voel me goed.",
                "Я почуваюся добре."
              ],
              [
                "Zij herinnert zich alles.",
                "Вона все пам’ятає."
              ]
            ]
          }
        ],
        "titleEn": "Reflexive Pronouns & Verbs — A2"
      },
      {
        "id": "adjective-inflection",
        "title": "Verbuiging van bijvoeglijke naamwoorden (-e) — A2",
        "emoji": "✏️",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник перед іменником зазвичай отримує закінчення -e, крім випадку, коли він стоїть перед het-словом в однині з неозначеним артиклем або без артикля.",
            "en": {
              "text": "An adjective before a noun usually gets the ending -e, except when it stands before a singular het-word with an indefinite article or no article."
            }
          },
          {
            "type": "table",
            "title": "Закінчення -e",
            "rows": [
              [
                "een grote tafel (de)",
                "великий стіл"
              ],
              [
                "een groot huis (het, неозн.)",
                "великий будинок"
              ],
              [
                "het grote huis (het, означ.)",
                "той великий будинок"
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
                "Ik heb een mooie auto.",
                "У мене красива машина."
              ],
              [
                "Het kleine kind slaapt.",
                "Маленька дитина спить."
              ]
            ]
          }
        ],
        "titleEn": "Adjective Inflection (-e Ending) — A2"
      },
      {
        "id": "comparative-superlative",
        "title": "Vergrotende en overtreffende trap — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Вищий ступінь порівняння утворюється закінченням -er, найвищий — -st (з артиклем \"het\").",
            "en": {
              "text": "The comparative is formed with the ending -er, the superlative with -st (using the article \"het\")."
            }
          },
          {
            "type": "table",
            "title": "groter / grootst",
            "rows": [
              [
                "groot → groter → het grootst",
                "великий → більший → найбільший"
              ],
              [
                "snel → sneller → het snelst",
                "швидкий → швидший → найшвидший"
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
                "Deze auto is sneller.",
                "Ця машина швидша."
              ],
              [
                "Hij is het grootst.",
                "Він найвищий."
              ]
            ]
          }
        ],
        "titleEn": "Comparative & Superlative — A2"
      },
      {
        "id": "irregular-comparatives",
        "title": "Onregelmatige trappen van vergelijking — A2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "table",
            "title": "Нерегулярні форми",
            "rows": [
              [
                "goed → beter → best",
                "добрий → кращий → найкращий"
              ],
              [
                "veel → meer → meest",
                "багато → більше → найбільше"
              ],
              [
                "weinig → minder → minst",
                "мало → менше → найменше"
              ],
              [
                "graag → liever → liefst",
                "охоче → охочіше → найохочіше"
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
                "Dit is beter.",
                "Це краще."
              ],
              [
                "Ik hou het meest van muziek.",
                "Я найбільше люблю музику."
              ]
            ]
          }
        ],
        "titleEn": "Irregular Comparatives — A2"
      },
      {
        "id": "adverbs",
        "title": "Bijwoorden — A2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від багатьох мов, у нідерландській прикметник і прислівник часто мають однакову форму — прислівник не отримує особливого закінчення.",
            "en": {
              "text": "Unlike in many languages, in Dutch the adjective and adverb often share the same form — the adverb does not get a special ending."
            }
          },
          {
            "type": "table",
            "title": "Прикметник = прислівник",
            "rows": [
              [
                "Hij loopt snel.",
                "Він швидко йде."
              ],
              [
                "Zij zingt mooi.",
                "Вона гарно співає."
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
                "Ze werkt hard.",
                "Вона важко працює."
              ],
              [
                "Hij spreekt duidelijk.",
                "Він говорить зрозуміло."
              ]
            ]
          }
        ],
        "titleEn": "Adverbs — A2"
      },
      {
        "id": "predicative-attributive-adjectives",
        "title": "Predicatief vs. attributief bijvoeglijk naamwoord — B1",
        "emoji": "⚖️",
        "sections": [
          {
            "type": "intro",
            "text": "Присудковий прикметник (після \"zijn\") не змінюється; означальний прикметник (перед іменником) зазвичай отримує -e.",
            "en": {
              "text": "A predicative adjective (after \"zijn\") does not change; an attributive adjective (before a noun) usually gets the ending -e."
            }
          },
          {
            "type": "table",
            "title": "Присудковий vs означальний",
            "rows": [
              [
                "De auto is snel. (присудк.)",
                "Машина швидка."
              ],
              [
                "de snelle auto (означ.)",
                "швидка машина"
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
                "Het weer is mooi.",
                "Погода гарна."
              ],
              [
                "Een mooie dag.",
                "Гарний день."
              ]
            ]
          }
        ],
        "titleEn": "Predicative vs Attributive Adjectives — B1"
      },
      {
        "id": "word-order-main-clause",
        "title": "Woordvolgorde: hoofdzin (V2) — A2",
        "emoji": "🧱",
        "sections": [
          {
            "type": "intro",
            "text": "У головному реченні відмінюване дієслово завжди стоїть на другій позиції, незалежно від того, що стоїть на першому місці.",
            "en": {
              "text": "In a main clause, the finite verb always occupies the second position, no matter what element comes first."
            }
          },
          {
            "type": "table",
            "title": "Правило V2",
            "rows": [
              [
                "Ik ga morgen naar Parijs.",
                "Я завтра їду до Парижа."
              ],
              [
                "Morgen ga ik naar Parijs.",
                "Завтра я їду до Парижа."
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
                "Vandaag werk ik thuis.",
                "Сьогодні я працюю вдома."
              ],
              [
                "Daarom bel ik je.",
                "Тому я тобі дзвоню."
              ]
            ]
          }
        ],
        "titleEn": "Word Order in Main Clauses (V2) — A2"
      },
      {
        "id": "inversion",
        "title": "Inversie na bijwoorden — B1",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Коли речення починається не з підмета, а з обставини, підмет і дієслово міняються місцями, при цьому правило V2 залишається дотриманим.",
            "en": {
              "text": "When a sentence begins with something other than the subject, the subject and verb swap places, while the V2 rule is still respected."
            }
          },
          {
            "type": "table",
            "title": "Інверсія",
            "rows": [
              [
                "Gisteren kwam hij te laat.",
                "Учора він прийшов пізно."
              ],
              [
                "Soms twijfel ik.",
                "Іноді я сумніваюся."
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
                "Nu begrijp ik het.",
                "Тепер я це розумію."
              ],
              [
                "Toch ging ze naar huis.",
                "Проте вона пішла додому."
              ]
            ]
          }
        ],
        "titleEn": "Inversion after Adverbs — B1"
      },
      {
        "id": "word-order-subordinate-clause",
        "title": "Woordvolgorde: bijzin — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "У підрядному реченні (після dat, omdat, als...) відмінюване дієслово переноситься в кінець речення.",
            "en": {
              "text": "In a subordinate clause (after dat, omdat, als...) the finite verb moves to the end of the clause."
            }
          },
          {
            "type": "table",
            "title": "Дієслово в кінці",
            "rows": [
              [
                "Ik weet dat hij komt.",
                "Я знаю, що він прийде."
              ],
              [
                "Omdat het regent, blijf ik thuis.",
                "Оскільки йде дощ, я лишаюся вдома."
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
                "Ik denk dat het goed gaat.",
                "Я думаю, що все добре."
              ],
              [
                "Als je tijd hebt, bel me.",
                "Якщо в тебе є час, подзвони мені."
              ]
            ]
          }
        ],
        "titleEn": "Word Order in Subordinate Clauses — B1"
      },
      {
        "id": "coordinating-conjunctions",
        "title": "Nevenschikkende voegwoorden — A2",
        "emoji": "➕",
        "sections": [
          {
            "type": "intro",
            "text": "Сурядні сполучники (en, maar, of, want, dus) не змінюють порядок слів у реченні.",
            "en": {
              "text": "Coordinating conjunctions (en, maar, of, want, dus) do not change the word order of the sentence."
            }
          },
          {
            "type": "table",
            "title": "Сурядні сполучники",
            "rows": [
              [
                "en",
                "і"
              ],
              [
                "maar",
                "але"
              ],
              [
                "of",
                "або"
              ],
              [
                "want",
                "бо"
              ],
              [
                "dus",
                "отже"
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
                "Ik wil koffie of thee.",
                "Я хочу каву або чай."
              ],
              [
                "Het regent, dus ik blijf thuis.",
                "Йде дощ, тому я лишаюся вдома."
              ]
            ]
          }
        ],
        "titleEn": "Coordinating Conjunctions — A2"
      },
      {
        "id": "subordinating-conjunctions",
        "title": "Onderschikkende voegwoorden — B1",
        "emoji": "➖",
        "sections": [
          {
            "type": "intro",
            "text": "Підрядні сполучники (omdat, als, terwijl, hoewel...) вимагають кінцевої позиції дієслова в підрядному реченні.",
            "en": {
              "text": "Subordinating conjunctions (omdat, als, terwijl, hoewel...) require the verb to move to the end of the subordinate clause."
            }
          },
          {
            "type": "table",
            "title": "Підрядні сполучники",
            "rows": [
              [
                "omdat",
                "тому що"
              ],
              [
                "als",
                "якщо/коли"
              ],
              [
                "terwijl",
                "поки, тоді як"
              ],
              [
                "hoewel",
                "хоча"
              ],
              [
                "totdat",
                "поки не"
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
                "Hoewel het koud is, ga ik zwemmen.",
                "Хоча холодно, я йду плавати."
              ],
              [
                "Ik wacht totdat je klaar bent.",
                "Я чекаю, поки ти закінчиш."
              ]
            ]
          }
        ],
        "titleEn": "Subordinating Conjunctions — B1"
      },
      {
        "id": "conjunctive-adverbs",
        "title": "Voegwoordelijke bijwoorden — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Такі слова, як daarom, toch, dus, daardoor, займають першу позицію в реченні і викликають інверсію (правило V2).",
            "en": {
              "text": "Words like daarom, toch, dus, daardoor take the first position in the sentence and trigger inversion (the V2 rule)."
            }
          },
          {
            "type": "table",
            "title": "Сполучникові прислівники",
            "rows": [
              [
                "daarom",
                "тому"
              ],
              [
                "toch",
                "все ж таки"
              ],
              [
                "daardoor",
                "через це"
              ],
              [
                "bovendien",
                "крім того"
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
                "Daarom kom ik later.",
                "Тому я прийду пізніше."
              ],
              [
                "Toch bleef ze rustig.",
                "Проте вона залишалася спокійною."
              ]
            ]
          }
        ],
        "titleEn": "Conjunctive Adverbs — B1"
      },
      {
        "id": "prepositions-common",
        "title": "Veelgebruikte voorzetsels — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "table",
            "title": "Прийменники",
            "rows": [
              [
                "in, op, onder, boven",
                "в, на, під, над"
              ],
              [
                "naar, van, met, zonder",
                "до, з (звідки), з (разом), без"
              ],
              [
                "voor, achter, tussen",
                "перед, за, між"
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
                "Het boek ligt op tafel.",
                "Книга лежить на столі."
              ],
              [
                "Ik ga naar school.",
                "Я йду до школи."
              ]
            ]
          }
        ],
        "titleEn": "Common Prepositions — A2"
      },
      {
        "id": "prepositions-fixed",
        "title": "Vaste voorzetsels bij werkwoorden — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Багато дієслів вимагають конкретного прийменника, який часто відрізняється від українського відповідника.",
            "en": {
              "text": "Many verbs require a specific preposition, which is often different from the equivalent in other languages."
            }
          },
          {
            "type": "table",
            "title": "Дієслово + прийменник",
            "rows": [
              [
                "wachten op",
                "чекати на"
              ],
              [
                "houden van",
                "любити (когось/щось)"
              ],
              [
                "denken aan",
                "думати про"
              ],
              [
                "praten over",
                "говорити про"
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
                "Ik wacht op de bus.",
                "Я чекаю на автобус."
              ],
              [
                "Zij houdt van muziek.",
                "Вона любить музику."
              ]
            ]
          }
        ],
        "titleEn": "Fixed Prepositions with Verbs — B1"
      },
      {
        "id": "separable-verbs",
        "title": "Scheidbare werkwoorden — A2",
        "emoji": "✂️",
        "sections": [
          {
            "type": "intro",
            "text": "Прийменникова частка (op, aan, mee, weg...) відокремлюється від дієслова в головному реченні і йде в кінець.",
            "en": {
              "text": "The prefixed particle (op, aan, mee, weg...) separates from the verb in a main clause and moves to the end."
            }
          },
          {
            "type": "table",
            "title": "Роздільні дієслова",
            "rows": [
              [
                "opbellen → Ik bel je op.",
                "телефонувати → Я тобі подзвоню."
              ],
              [
                "meenemen → Neem je paraplu mee.",
                "брати з собою → Візьми парасольку."
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
                "Ik sta om zeven uur op.",
                "Я встаю о сьомій."
              ],
              [
                "Zet de tv aan.",
                "Увімкни телевізор."
              ]
            ]
          }
        ],
        "titleEn": "Separable Verbs — A2"
      },
      {
        "id": "inseparable-verbs",
        "title": "Onscheidbare werkwoorden — B1",
        "emoji": "🔒",
        "sections": [
          {
            "type": "intro",
            "text": "Префікси be-, ge-, ver-, ont-, her-, er- ніколи не відокремлюються, і такі дієслова не отримують ge- у дієприкметнику.",
            "en": {
              "text": "The prefixes be-, ge-, ver-, ont-, her-, er- never separate, and such verbs do not take ge- in the participle."
            }
          },
          {
            "type": "table",
            "title": "Нероздільні дієслова",
            "rows": [
              [
                "begrijpen → begrepen",
                "розуміти → зрозумів"
              ],
              [
                "vertellen → verteld",
                "розповідати → розповів"
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
                "Ik begrijp het niet.",
                "Я цього не розумію."
              ],
              [
                "Zij heeft het verteld.",
                "Вона це розповіла."
              ]
            ]
          }
        ],
        "titleEn": "Inseparable Verbs — B1"
      },
      {
        "id": "modal-verbs",
        "title": "Modale werkwoorden — A2",
        "emoji": "🧠",
        "sections": [
          {
            "type": "table",
            "title": "Модальні дієслова",
            "rows": [
              [
                "kunnen",
                "могти"
              ],
              [
                "moeten",
                "мусити"
              ],
              [
                "mogen",
                "мати дозвіл"
              ],
              [
                "willen",
                "хотіти"
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
                "Ik moet werken.",
                "Я мушу працювати."
              ],
              [
                "Mag ik binnenkomen?",
                "Можна увійти?"
              ]
            ]
          }
        ],
        "titleEn": "Modal Verbs — A2"
      },
      {
        "id": "infinitive-with-te",
        "title": "Infinitief met \"te\" — B1",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "Після багатьох дієслів (proberen, hopen, beginnen...) інфінітив вводиться часткою \"te\".",
            "en": {
              "text": "After many verbs (proberen, hopen, beginnen...) the infinitive is introduced by the particle \"te\"."
            }
          },
          {
            "type": "table",
            "title": "werkwoord + te + infinitief",
            "rows": [
              [
                "Ik probeer te slapen.",
                "Я намагаюся заснути."
              ],
              [
                "Zij begint te lachen.",
                "Вона починає сміятися."
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
                "Hij hoopt te winnen.",
                "Він сподівається виграти."
              ],
              [
                "Wij vergeten te bellen.",
                "Ми забуваємо подзвонити."
              ]
            ]
          }
        ],
        "titleEn": "Infinitive with Te — B1"
      },
      {
        "id": "om-te-infinitive",
        "title": "\"Om ... te\" + infinitief — A2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Конструкція \"om ... te\" + інфінітив виражає мету дії — \"для того, щоб\".",
            "en": {
              "text": "The construction \"om ... te\" + infinitive expresses the purpose of an action — \"in order to\"."
            }
          },
          {
            "type": "table",
            "title": "om ... te",
            "rows": [
              [
                "Ik leer Nederlands om hier te werken.",
                "Я вчу нідерландську, щоб тут працювати."
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
                "Zij spaart geld om een huis te kopen.",
                "Вона заощаджує гроші, щоб купити будинок."
              ],
              [
                "We gaan naar buiten om te wandelen.",
                "Ми йдемо надвір, щоб погуляти."
              ]
            ]
          }
        ],
        "titleEn": "Purpose: Om...Te — A2"
      },
      {
        "id": "er-existential",
        "title": "\"Er\" als plaatsonderwerp — A2",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "\"Er\" вживається як формальний підмет, коли реальний підмет — неозначений іменник, що йде після дієслова, подібно до англійського \"there is/are\".",
            "en": {
              "text": "\"Er\" is used as a formal subject when the real subject is an indefinite noun that comes after the verb, similar to English \"there is/are\"."
            }
          },
          {
            "type": "table",
            "title": "er + zijn",
            "rows": [
              [
                "Er is een probleem.",
                "Є проблема."
              ],
              [
                "Er zijn veel mensen.",
                "Є багато людей."
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
                "Er staat een fiets buiten.",
                "Надворі стоїть велосипед."
              ],
              [
                "Er komt iemand.",
                "Хтось іде."
              ]
            ]
          }
        ],
        "titleEn": "Existential Er: There Is/Are — A2"
      },
      {
        "id": "er-with-quantities",
        "title": "\"Er\" bij hoeveelheden — B1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "\"Er\" також обов’язково вживається, коли іменник замінено числівником або кількісним словом, а сам іменник опущено.",
            "en": {
              "text": "\"Er\" is also required when a noun is replaced by a number or a quantity word and the noun itself is omitted."
            }
          },
          {
            "type": "table",
            "title": "er + числівник",
            "rows": [
              [
                "Ik heb er drie.",
                "У мене їх троє."
              ],
              [
                "Zij heeft er veel.",
                "У неї їх багато."
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
                "Hoeveel boeken heb je? — Ik heb er vijf.",
                "Скільки в тебе книг? — У мене їх п’ять."
              ],
              [
                "Wil je koffie? — Ja, ik wil er wel.",
                "Хочеш кави? — Так, хочу."
              ]
            ]
          }
        ],
        "titleEn": "Er with Quantities — B1"
      },
      {
        "id": "er-referential",
        "title": "\"Er\" als verwijzend woord — B1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "\"Er\" замінює неживий іменник у поєднанні з прийменником (erover, ervan, eraan...), уникаючи повторення іменника.",
            "en": {
              "text": "\"Er\" replaces an inanimate noun combined with a preposition (erover, ervan, eraan...), avoiding repetition of the noun."
            }
          },
          {
            "type": "table",
            "title": "er + прийменник",
            "rows": [
              [
                "Ik denk erover na.",
                "Я про це думаю."
              ],
              [
                "Zij houdt ervan.",
                "Вона це любить."
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
                "Ik ben er blij mee.",
                "Я цим задоволений."
              ],
              [
                "We praten er niet over.",
                "Ми про це не говоримо."
              ]
            ]
          }
        ],
        "titleEn": "Referential Er (with Prepositions) — B1"
      },
      {
        "id": "word-order-objects",
        "title": "Volgorde van lijdend en meewerkend voorwerp — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Коли обидва додатки — іменники, спочатку йде непрямий додаток (кому), потім прямий; коли прямий додаток — займенник, він іде першим.",
            "en": {
              "text": "When both objects are nouns, the indirect object (to whom) comes first, then the direct object; when the direct object is a pronoun, it comes first."
            }
          },
          {
            "type": "table",
            "title": "Порядок додатків",
            "rows": [
              [
                "Ik geef mijn broer het boek.",
                "Я даю братові книгу."
              ],
              [
                "Ik geef het hem.",
                "Я даю йому це."
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
                "Zij stuurt haar moeder een kaart.",
                "Вона надсилає мамі листівку."
              ],
              [
                "Zij stuurt het haar.",
                "Вона надсилає їй це."
              ]
            ]
          }
        ],
        "titleEn": "Direct vs Indirect Object Order — B1"
      },
      {
        "id": "numbers-cardinal",
        "title": "Hoofdtelwoorden — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "table",
            "title": "Кількісні числівники",
            "rows": [
              [
                "een, twee, drie",
                "один, два, три"
              ],
              [
                "tien, twintig, honderd",
                "десять, двадцять, сто"
              ],
              [
                "eenentwintig (21)",
                "двадцять один (порядок: одиниці + en + десятки)"
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
                "Ik heb drie broers.",
                "У мене троє братів."
              ],
              [
                "Het kost tien euro.",
                "Це коштує десять євро."
              ]
            ]
          }
        ],
        "titleEn": "Cardinal Numbers — A1"
      },
      {
        "id": "numbers-ordinal",
        "title": "Rangtelwoorden — A1",
        "emoji": "🥇",
        "sections": [
          {
            "type": "intro",
            "text": "Порядкові числівники утворюються закінченням -de (найчастіше) або -ste (після 8 і після десятків).",
            "en": {
              "text": "Ordinal numbers are formed with the ending -de (most often) or -ste (after 8 and after the tens)."
            }
          },
          {
            "type": "table",
            "title": "Порядкові числівники",
            "rows": [
              [
                "eerste, tweede, derde",
                "перший, другий, третій"
              ],
              [
                "achtste, twintigste",
                "восьмий, двадцятий"
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
                "Dit is de eerste keer.",
                "Це перший раз."
              ],
              [
                "Hij woont op de derde verdieping.",
                "Він живе на третьому поверсі."
              ]
            ]
          }
        ],
        "titleEn": "Ordinal Numbers — A1"
      },
      {
        "id": "telling-time",
        "title": "Klokkijken — A1",
        "emoji": "🕐",
        "sections": [
          {
            "type": "table",
            "title": "Час на годиннику",
            "rows": [
              [
                "Het is drie uur.",
                "Третя година."
              ],
              [
                "half vier (3:30)",
                "пів на четверту"
              ],
              [
                "kwart over drie (3:15)",
                "чверть на четверту"
              ],
              [
                "kwart voor vier (3:45)",
                "за чверть четверта"
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
                "Hoe laat is het?",
                "Котра година?"
              ],
              [
                "De trein vertrekt om half negen.",
                "Потяг відправляється о пів на дев’яту."
              ]
            ]
          }
        ],
        "titleEn": "Telling Time — A1"
      },
      {
        "id": "days-months-dates",
        "title": "Dagen, maanden en datums — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "table",
            "title": "Дні та місяці",
            "rows": [
              [
                "maandag, dinsdag, woensdag",
                "понеділок, вівторок, середа"
              ],
              [
                "januari, februari, maart",
                "січень, лютий, березень"
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
                "Vandaag is het maandag.",
                "Сьогодні понеділок."
              ],
              [
                "Mijn verjaardag is in mei.",
                "Мій день народження в травні."
              ]
            ]
          }
        ],
        "titleEn": "Days, Months & Dates — A1"
      },
      {
        "id": "formal-informal",
        "title": "Jij/je vs. u — A1",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "\"U\" — ввічлива форма звертання до незнайомців, старших людей або в офіційних ситуаціях; \"jij/je\" — неформальне звертання.",
            "en": {
              "text": "\"U\" is the polite form of address for strangers, older people, or formal situations; \"jij/je\" is the informal form."
            }
          },
          {
            "type": "table",
            "title": "jij vs u",
            "rows": [
              [
                "Hoe heet je?",
                "Як тебе звати? (нефор.)"
              ],
              [
                "Hoe heet u?",
                "Як Вас звати? (форм.)"
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
                "Kunt u me helpen?",
                "Чи можете Ви мені допомогти?"
              ],
              [
                "Kun je me helpen?",
                "Чи можеш ти мені допомогти?"
              ]
            ]
          }
        ],
        "titleEn": "Formality: Jij vs U — A1"
      },
      {
        "id": "greetings-common-phrases",
        "title": "Begroetingen en veelgebruikte zinnen — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "table",
            "title": "Вітання",
            "rows": [
              [
                "Hallo / Hoi",
                "Привіт"
              ],
              [
                "Goedemorgen",
                "Добрий ранок"
              ],
              [
                "Tot ziens",
                "До побачення"
              ],
              [
                "Dank je wel / Dank u wel",
                "Дякую (нефор./форм.)"
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
                "Hoe gaat het met je?",
                "Як справи?"
              ],
              [
                "Alsjeblieft.",
                "Будь ласка."
              ]
            ]
          }
        ],
        "titleEn": "Greetings & Common Phrases — A1"
      },
      {
        "id": "question-words",
        "title": "Vraagwoorden met voorzetsels — A1",
        "emoji": "❔",
        "sections": [
          {
            "type": "intro",
            "text": "Питальні слова можна поєднувати з прийменниками: waarmee (чим), waarnaar (куди/до чого), waarover (про що).",
            "en": {
              "text": "Question words can be combined with prepositions: waarmee (with what), waarnaar (to what), waarover (about what)."
            }
          },
          {
            "type": "table",
            "title": "Питальні слова з прийменниками",
            "rows": [
              [
                "waarmee",
                "чим"
              ],
              [
                "waarnaar",
                "куди/до чого"
              ],
              [
                "waarover",
                "про що"
              ],
              [
                "hoeveel",
                "скільки"
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
                "Waarover praat je?",
                "Про що ти говориш?"
              ],
              [
                "Hoeveel kost dit?",
                "Скільки це коштує?"
              ]
            ]
          }
        ],
        "titleEn": "Question Words with Prepositions — A1"
      },
      {
        "id": "yes-no-questions",
        "title": "Ja/nee-vragen — A1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "У питаннях без питального слова дієслово завжди виходить на перше місце речення.",
            "en": {
              "text": "In questions without a question word, the verb always comes to the very first position of the sentence."
            }
          },
          {
            "type": "table",
            "title": "Питання без питального слова",
            "rows": [
              [
                "Woon je hier?",
                "Ти тут живеш?"
              ],
              [
                "Heb je tijd?",
                "У тебе є час?"
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
                "Kom je vanavond?",
                "Ти прийдеш сьогодні ввечері?"
              ],
              [
                "Is dit correct?",
                "Це правильно?"
              ]
            ]
          }
        ],
        "titleEn": "Yes/No Questions — A1"
      },
      {
        "id": "negation-nuances",
        "title": "Nuances van ontkenning — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "table",
            "title": "Слова заперечення",
            "rows": [
              [
                "nooit",
                "ніколи"
              ],
              [
                "niemand",
                "ніхто"
              ],
              [
                "niets",
                "нічого"
              ],
              [
                "geen enkele",
                "жоден"
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
                "Ik heb nooit tijd.",
                "У мене ніколи немає часу."
              ],
              [
                "Niemand weet het antwoord.",
                "Ніхто не знає відповіді."
              ]
            ]
          }
        ],
        "titleEn": "Negation Nuances — A2"
      },
      {
        "id": "modal-particles",
        "title": "Stopwoordjes: eigenlijk, toch, gewoon, wel — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "intro",
            "text": "Модальні частки додають відтінок ставлення мовця, не змінюючи буквального змісту речення.",
            "en": {
              "text": "Modal particles add a nuance of the speaker’s attitude without changing the literal meaning of the sentence."
            }
          },
          {
            "type": "table",
            "title": "Модальні частки",
            "rows": [
              [
                "eigenlijk",
                "власне кажучи"
              ],
              [
                "toch",
                "все ж таки / чи не так"
              ],
              [
                "gewoon",
                "просто"
              ],
              [
                "wel",
                "все ж/таки (підсилення)"
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
                "Dat is toch niet zo moeilijk?",
                "Це ж не так важко, чи не так?"
              ],
              [
                "Ik vind het eigenlijk wel leuk.",
                "Мені це, власне, подобається."
              ]
            ]
          }
        ],
        "titleEn": "Modal Particles — B1"
      },
      {
        "id": "compound-nouns",
        "title": "Samengestelde zelfstandige naamwoorden — A2",
        "emoji": "🧱",
        "sections": [
          {
            "type": "intro",
            "text": "Складні іменники пишуться разом одним словом, а рід визначається останнім компонентом.",
            "en": {
              "text": "Compound nouns are written together as a single word, and the gender is determined by the last component."
            }
          },
          {
            "type": "table",
            "title": "Складні іменники",
            "rows": [
              [
                "boek + winkel → de boekwinkel",
                "книгарня"
              ],
              [
                "huis + deur → de huisdeur",
                "вхідні двері"
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
                "De boekwinkel is dicht.",
                "Книгарня зачинена."
              ],
              [
                "Ik zoek de huissleutel.",
                "Я шукаю ключ від дому."
              ]
            ]
          }
        ],
        "titleEn": "Compound Nouns — A2"
      },
      {
        "id": "quantifiers",
        "title": "Kwantoren: veel, weinig, sommige — A2",
        "emoji": "📊",
        "sections": [
          {
            "type": "table",
            "title": "Кванторні слова",
            "rows": [
              [
                "veel",
                "багато"
              ],
              [
                "weinig",
                "мало"
              ],
              [
                "sommige",
                "деякі"
              ],
              [
                "enkele",
                "кілька"
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
                "Ik heb veel werk.",
                "У мене багато роботи."
              ],
              [
                "Sommige mensen houden er niet van.",
                "Декому це не подобається."
              ]
            ]
          }
        ],
        "titleEn": "Quantifiers — A2"
      },
      {
        "id": "indirect-questions",
        "title": "Indirecte vragen — B1",
        "emoji": "🗨️",
        "sections": [
          {
            "type": "intro",
            "text": "У непрямих питаннях дієслово переноситься в кінець речення, як у підрядному реченні; питання без питального слова вводяться словом \"of\".",
            "en": {
              "text": "In indirect questions the verb moves to the end of the clause, as in a subordinate clause; questions without a question word are introduced with \"of\"."
            }
          },
          {
            "type": "table",
            "title": "Непрямі питання",
            "rows": [
              [
                "Ik weet niet of hij komt.",
                "Я не знаю, чи він прийде."
              ],
              [
                "Ze vraagt waar ik woon.",
                "Вона питає, де я живу."
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
                "Weet je hoe laat het is?",
                "Ти знаєш, котра година?"
              ],
              [
                "Ik vraag me af waarom hij laat is.",
                "Мені цікаво, чому він запізнюється."
              ]
            ]
          }
        ],
        "titleEn": "Indirect Questions — B1"
      },
      {
        "id": "laten-construction",
        "title": "De constructie \"laten\" — B1",
        "emoji": "🛠️",
        "sections": [
          {
            "type": "intro",
            "text": "\"Laten\" + інфінітив означає дозволяти комусь щось зробити або доручити комусь щось зробити за себе.",
            "en": {
              "text": "\"Laten\" + infinitive means allowing someone to do something, or having someone else do something for you."
            }
          },
          {
            "type": "table",
            "title": "laten + infinitief",
            "rows": [
              [
                "Ik laat mijn auto repareren.",
                "Я віддаю машину в ремонт (доручаю полагодити)."
              ],
              [
                "Laat me even denken.",
                "Дай мені трохи подумати."
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
                "Zij laat het huis schoonmaken.",
                "Вона замовляє прибирання будинку."
              ],
              [
                "Laat hem met rust.",
                "Залиш його в спокої."
              ]
            ]
          }
        ],
        "titleEn": "The Laten Construction — B1"
      },
      {
        "id": "impersonal-het",
        "title": "Onpersoonlijk \"het\" — A2",
        "emoji": "🌦️",
        "sections": [
          {
            "type": "intro",
            "text": "\"Het\" вживається як формальний підмет у безособових реченнях про погоду, час і загальні стани.",
            "en": {
              "text": "\"Het\" is used as a formal subject in impersonal sentences about weather, time, and general states."
            }
          },
          {
            "type": "table",
            "title": "Безособове het",
            "rows": [
              [
                "Het regent.",
                "Іде дощ."
              ],
              [
                "Het is laat.",
                "Пізно."
              ],
              [
                "Het gaat goed met me.",
                "У мене все добре."
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
                "Het sneeuwt buiten.",
                "Надворі йде сніг."
              ],
              [
                "Het is koud vandaag.",
                "Сьогодні холодно."
              ]
            ]
          }
        ],
        "titleEn": "Impersonal Het — A2"
      },
      {
        "id": "seasons-weather",
        "title": "Seizoenen en weer — A1",
        "emoji": "☀️",
        "sections": [
          {
            "type": "table",
            "title": "Пори року та погода",
            "rows": [
              [
                "de lente, de zomer",
                "весна, літо"
              ],
              [
                "de herfst, de winter",
                "осінь, зима"
              ],
              [
                "het regent, het is zonnig",
                "іде дощ, сонячно"
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
                "In de zomer is het warm.",
                "Влітку тепло."
              ],
              [
                "Het waait hard vandaag.",
                "Сьогодні сильний вітер."
              ]
            ]
          }
        ],
        "titleEn": "Seasons & Weather — A1"
      },
      {
        "id": "common-idioms",
        "title": "Veelgebruikte uitdrukkingen — B1",
        "emoji": "💡",
        "sections": [
          {
            "type": "table",
            "title": "Ідіоми",
            "rows": [
              [
                "Het regent pijpenstelen.",
                "Ллє як з відра."
              ],
              [
                "Ergens geen zin in hebben.",
                "Не мати бажання щось робити."
              ],
              [
                "De kat uit de boom kijken.",
                "Вичікувати, не поспішати з рішенням."
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
                "Hij kijkt de kat uit de boom.",
                "Він вичікує."
              ],
              [
                "Ik heb er geen zin in.",
                "Мені цього не хочеться."
              ]
            ]
          }
        ],
        "titleEn": "Common Idioms & Expressions — B1"
      },
      {
        "id": "possessive-with-van",
        "title": "Bezit met \"van\" — A2",
        "emoji": "🏠",
        "sections": [
          {
            "type": "intro",
            "text": "У розмовній нідерландській присвійність частіше виражається конструкцією \"van\" + іменник, а не родовим відмінком, який майже зник.",
            "en": {
              "text": "In spoken Dutch, possession is more often expressed with \"van\" + noun rather than the genitive case, which has almost disappeared."
            }
          },
          {
            "type": "table",
            "title": "van для присвійності",
            "rows": [
              [
                "het huis van mijn broer",
                "будинок мого брата"
              ],
              [
                "de auto van Anna",
                "машина Анни"
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
                "Dit is de tas van mijn moeder.",
                "Це сумка моєї матері."
              ],
              [
                "De hond van de buren blaft.",
                "Собака сусідів гавкає."
              ]
            ]
          }
        ],
        "titleEn": "Possession with Van — A2"
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
        "id": "irregular-strong-verbs",
        "title": "Onregelmatige (sterke) werkwoorden — A2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Сильні дієслова змінюють кореневий голосний у минулому часі й дієприкметнику замість додавання -te/-de; їх треба запам’ятовувати окремо.",
            "en": {
              "text": "Strong verbs change their stem vowel in the past tense and participle instead of adding -te/-de; they must be memorized individually."
            }
          },
          {
            "type": "table",
            "title": "Найпоширеніші сильні дієслова",
            "rows": [
              [
                "gaan → ging → gegaan",
                "йти/їхати"
              ],
              [
                "komen → kwam → gekomen",
                "приходити"
              ],
              [
                "zien → zag → gezien",
                "бачити"
              ],
              [
                "nemen → nam → genomen",
                "брати"
              ],
              [
                "geven → gaf → gegeven",
                "давати"
              ],
              [
                "zijn → was → geweest",
                "бути"
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
                "Ik zag hem gisteren.",
                "Я його вчора бачив."
              ],
              [
                "Zij heeft het boek genomen.",
                "Вона взяла книгу."
              ]
            ]
          }
        ],
        "titleEn": "Irregular Strong Verbs — A2"
      },
      {
        "id": "spelling-open-closed-syllables",
        "title": "Spelling: open en gesloten lettergrepen — A2",
        "emoji": "✒️",
        "sections": [
          {
            "type": "intro",
            "text": "Довгий голосний позначається одним символом у відкритому складі, але подвоюється в закритому складі; короткий голосний завжди пишеться однією літерою, але приголосна після нього подвоюється при додаванні закінчення.",
            "en": {
              "text": "A long vowel is written with a single letter in an open syllable but doubled in a closed syllable; a short vowel is always written with a single letter, but the following consonant is doubled when a suffix is added."
            }
          },
          {
            "type": "table",
            "title": "Приклади правопису",
            "rows": [
              [
                "maan → manen",
                "місяць/-і (довгий голосний, одна a у відкритому складі)"
              ],
              [
                "man → mannen",
                "чоловік/-и (короткий голосний, подвоєна n)"
              ],
              [
                "kat → katten",
                "кіт/коти"
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
                "Ik zie twee manen.",
                "Я бачу два місяці (небесні)."
              ],
              [
                "De mannen werken hard.",
                "Чоловіки багато працюють."
              ]
            ]
          }
        ],
        "titleEn": "Spelling: Open & Closed Syllables — A2"
      },
      {
        "id": "separable-verbs-list",
        "title": "Veelvoorkomende scheidbare werkwoorden — B1",
        "emoji": "📋",
        "sections": [
          {
            "type": "intro",
            "text": "Ось список часто вживаних роздільних дієслів із типовими частками.",
            "en": {
              "text": "Here is a list of frequently used separable verbs with their typical particles."
            }
          },
          {
            "type": "table",
            "title": "Роздільні дієслова",
            "rows": [
              [
                "opstaan",
                "вставати"
              ],
              [
                "aankomen",
                "прибувати"
              ],
              [
                "opbellen",
                "телефонувати"
              ],
              [
                "meenemen",
                "брати з собою"
              ],
              [
                "uitgaan",
                "виходити/розважатися"
              ],
              [
                "voorstellen",
                "пропонувати/представляти"
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
                "De trein komt om acht uur aan.",
                "Потяг прибуває о восьмій."
              ],
              [
                "Zullen we vanavond uitgaan?",
                "Підемо сьогодні ввечері розважитись?"
              ]
            ]
          }
        ],
        "titleEn": "Common Separable Verbs List — B1"
      }
    ]
  }
];
