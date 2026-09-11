// Vymova — data/grammar-data/grammar_lv.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_LV: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Personu vietniekvārdi — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Латиські особові займенники, як і в литовській, розрізняють рід лише в третій особі.",
            "en": {
              "text": "Latvian personal pronouns, like Lithuanian, distinguish gender only in the third person."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "es"
              ],
              [
                "ти",
                "tu"
              ],
              [
                "він / вона",
                "viņš / viņa"
              ],
              [
                "ми",
                "mēs"
              ],
              [
                "ви",
                "jūs"
              ],
              [
                "вони (ч./ж.)",
                "viņi / viņas"
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
        "id": "fiksets-uzsvars",
        "title": "Fiksēts Uzsvars — A1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від спорідненої литовської з її рухомим наголосом, латиська майже завжди наголошує перший склад слова, незалежно від відмінка чи числа, — фіксований наголос, успадкований під впливом лівського субстрату.",
            "en": {
              "text": "Unlike its close relative Lithuanian with its mobile stress, Latvian almost always stresses the first syllable of a word, regardless of case or number — a fixed stress inherited under the influence of the Livonian substrate."
            }
          },
          {
            "type": "table",
            "title": "Латиська проти литовської",
            "rows": [
              [
                "gálva (латиська, завжди перший склад)",
                "голова"
              ],
              [
                "galvà → gálvą (литовська, наголос рухається)",
                "той самий корінь, рухомий наголос"
              ]
            ],
            "en": {
              "title": "Latvian vs. Lithuanian"
            }
          }
        ],
        "titleEn": "Fixed Initial Stress — A1"
      },
      {
        "id": "trys-intonacijas",
        "title": "Trīs Zilbju Intonācijas — B1",
        "emoji": "🎵",
        "sections": [
          {
            "type": "intro",
            "text": "Наголошений довгий склад несе одну з трьох складових інтонацій — протяжну, ламану чи спадну — на відміну від литовської, де таких тонів лише два.",
            "en": {
              "text": "A stressed long syllable carries one of three syllabic intonations — level, broken, or falling — unlike Lithuanian, which has only two such tones."
            }
          },
          {
            "type": "table",
            "title": "Три інтонації",
            "rows": [
              [
                "stieptā (протяжна), lauztā (ламана), krītošā (спадна)",
                "три типи інтонації довгого складу"
              ]
            ],
            "en": {
              "title": "Three Intonations"
            }
          }
        ],
        "titleEn": "Three Syllabic Intonations — B1"
      },
      {
        "id": "vacu-lielinieku-ipatnibas",
        "title": "Vācu un Lībiešu Ietekme — A2",
        "emoji": "🏰",
        "sections": [
          {
            "type": "intro",
            "text": "Століття панування балтійських німців залишили в латиській шар німецьких запозичень, а зникла фінно-угорська лівська мова наклала свій слід на вимову й лексику прибережних говорів — подвійний субстратний вплив, якого немає в литовській.",
            "en": {
              "text": "Centuries of Baltic-German rule left a layer of German loanwords in Latvian, while the now-extinct Finno-Ugric Livonian language left its mark on the pronunciation and vocabulary of coastal dialects — a double substrate influence absent from Lithuanian."
            }
          },
          {
            "type": "table",
            "title": "Приклади запозичень",
            "rows": [
              [
                "skola (школа) — з нім. Schule",
                "німецьке запозичення"
              ],
              [
                "forma (форма) — з нім. Form",
                "німецьке запозичення"
              ]
            ],
            "en": {
              "title": "Loanword Examples"
            }
          }
        ],
        "titleEn": "German and Livonian Influence — A2"
      },
      {
        "id": "negasion-i-preguntas",
        "title": "Noliegums un Jautājumi — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється часткою ne, написаною разом з дієсловом; питання без питального слова часто позначаються лише інтонацією або часткою vai на початку речення.",
            "en": {
              "text": "Negation is formed with the particle ne, written together with the verb; yes/no questions are often marked with intonation alone or with the particle vai at the start of the sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Es nezinu.",
                "Я не знаю."
              ],
              [
                "Vai tu nāksi?",
                "Ти прийдеш?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation and Questions — A1"
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
        "title": "Tagadne — A1",
        "emoji": "☀️",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній час утворюється особовими закінченнями, що узгоджуються з дієвідміною дієслова; більшість дієслів у першій особі однини закінчуються на -u чи -ju.",
            "en": {
              "text": "The present tense is formed with person endings agreeing with the verb's conjugation class; most verbs end in -u or -ju in the first person singular."
            }
          },
          {
            "type": "table",
            "title": "runāt (говорити) у теперішньому часі",
            "rows": [
              [
                "runāju / runā / runā",
                "я говорю / ти говориш / він говорить"
              ],
              [
                "runājam / runājat / runā",
                "ми говоримо / ви говорите / вони говорять"
              ]
            ],
            "en": {
              "title": "runāt (to speak) in the present"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Es runāju latviski.",
                "Я говорю латиською."
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
        "id": "simple-past",
        "title": "Pagātne — A2",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий час позначає завершену дію в минулому й утворюється власним набором закінчень, відмінних від теперішнього часу для більшості дієслів.",
            "en": {
              "text": "The past tense marks a completed past action and is formed with its own set of endings, distinct from the present tense for most verbs."
            }
          },
          {
            "type": "table",
            "title": "runāt у минулому часі",
            "rows": [
              [
                "runāju / runāji / runāja",
                "я говорив / ти говорив / він говорив"
              ]
            ],
            "en": {
              "title": "runāt in the past"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Es runāju ar viņu vakar.",
                "Я говорив з ним учора."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Simple Past — A2"
      },
      {
        "id": "future-tense",
        "title": "Nākotne — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється суфіксом -š-, вставленим перед особовим закінченням, — синтетична форма, як і в литовській.",
            "en": {
              "text": "The future tense is formed with the suffix -š- inserted before the person ending — a synthetic form, as in Lithuanian."
            }
          },
          {
            "type": "table",
            "title": "runāt у майбутньому часі",
            "rows": [
              [
                "runāšu / runāsi / runās",
                "я говоритиму / ти говоритимеш / він говоритиме"
              ]
            ],
            "en": {
              "title": "runāt in the future"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Rīt es runāšu ar tevi.",
                "Завтра я поговорю з тобою."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Future Tense — A2"
      },
      {
        "id": "conditional-mood",
        "title": "Vēlējuma Izteiksme — B1",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб утворюється незмінним для всіх осіб суфіксом -tu, доданим до основи дієслова, — одна форма на всі особи й числа.",
            "en": {
              "text": "The conditional mood is formed with a suffix -tu, invariant across all persons, added to the verb stem — a single form for all persons and numbers."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Es runātu, ja zinātu atbildi.",
                "Я б сказав, якби знав відповідь."
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
        "title": "Pavēles Izteiksme — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб має окрему форму для другої особи однини й множини, утворену від основи дієслова.",
            "en": {
              "text": "The imperative has a separate form for second person singular and plural, formed from the verb stem."
            }
          },
          {
            "type": "table",
            "title": "runāt у наказовому способі",
            "rows": [
              [
                "runā! / runājiet!",
                "говори! / говоріть!"
              ]
            ],
            "en": {
              "title": "runāt in the imperative"
            }
          }
        ],
        "titleEn": "Imperative Mood — A2"
      },
      {
        "id": "oblique-mood-present",
        "title": "Atstāstījuma Izteiksme (Tagadne) — B2",
        "emoji": "🗞️",
        "sections": [
          {
            "type": "intro",
            "text": "Унікальна для латиської переказна форма на -ot позначає, що мовець лише передає почуту, а не власну підтверджену інформацію, — незмінна форма, однакова для всіх осіб.",
            "en": {
              "text": "A form unique to Latvian, the reportative form in -ot marks that the speaker is merely relaying information heard from someone else, not their own confirmed knowledge — an invariant form, the same for all persons."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Viņš esot slims. (я лише чув це, не бачив сам)",
                "Кажуть, він хворий."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Oblique/Reportative Mood (Present) — B2"
      },
      {
        "id": "oblique-mood-past",
        "title": "Atstāstījuma Izteiksme (Pagātne) — B2",
        "emoji": "🗞️",
        "sections": [
          {
            "type": "intro",
            "text": "Переказна форма минулого часу на -ušot передає почуту інформацію про минулу подію — та сама незмінна структура, застосована до дієприкметника минулого часу.",
            "en": {
              "text": "The reportative past form in -ušot conveys heard information about a past event — the same invariant structure applied to the past participle."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Viņš esot bijis mājās.",
                "Кажуть, він був удома."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Oblique/Reportative Mood (Past) — B2"
      },
      {
        "id": "debitive-mood",
        "title": "Vajadzības Izteiksme — B1",
        "emoji": "☑️",
        "sections": [
          {
            "type": "intro",
            "text": "Унікальний латиський дебітив утворюється префіксом jā-, доданим до дієслова, і виражає обов'язковість; той, хто мусить, стоїть у давальному відмінку, а не в називному.",
            "en": {
              "text": "Latvian's unique debitive is formed with the prefix jā- added to the verb and expresses obligation; the person who must act stands in the dative, not the nominative."
            }
          },
          {
            "type": "table",
            "title": "Формула дебітива",
            "rows": [
              [
                "jā- + дієслово, суб'єкт у давальному",
                "man jāiet",
                "мені треба йти"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Man jāstrādā.",
                "Мені треба працювати."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Debitive Mood — B1"
      },
      {
        "id": "present-active-participle",
        "title": "Tagadnes Divdabis — B1",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Активний дієприкметник теперішнього часу на -ošs/-oša узгоджується з іменником у роді, числі й відмінку, описуючи того, хто виконує дію.",
            "en": {
              "text": "The present active participle in -ošs/-oša agrees with the noun in gender, number, and case, describing one performing the action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "runājošs cilvēks",
                "людина, яка говорить"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Active Participle — B1"
      },
      {
        "id": "past-active-participle",
        "title": "Pagātnes Divdabis — B1",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Активний дієприкметник минулого часу на -is/-usi позначає того, хто вже виконав дію.",
            "en": {
              "text": "The past active participle in -is/-usi marks one who has already performed the action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "runājis cilvēks",
                "людина, яка говорила"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Past Active Participle — B1"
      },
      {
        "id": "present-passive-participle",
        "title": "Ciešamās Kārtas Divdabis (Tagadne) — B2",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний дієприкметник теперішнього часу на -ams/-āms позначає предмет, над яким наразі відбувається дія.",
            "en": {
              "text": "The present passive participle in -ams/-āms marks the object currently undergoing the action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "lasāma grāmata",
                "книга, яку читають"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Passive Participle — B2"
      },
      {
        "id": "past-passive-participle",
        "title": "Ciešamās Kārtas Divdabis (Pagātne) — B2",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний дієприкметник минулого часу на -ts позначає результат завершеної дії над предметом, часто вживаний з дієсловом būt для утворення складеного пасиву.",
            "en": {
              "text": "The past passive participle in -ts marks the result of a completed action on the object, often used with the verb būt to form the compound passive."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "uzrakstīta grāmata",
                "написана книга"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Past Passive Participle — B2"
      },
      {
        "id": "converb-dams-dama",
        "title": "Divdabis -dams/-dama — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Прислівниковий дієприкметник на -dams (ч.р.) чи -dama (ж.р.) описує дію того самого підмета, що й головне дієслово, — на відміну від литовського pusdalyvis, ця форма узгоджується за родом підмета.",
            "en": {
              "text": "The adverbial converb in -dams (masc.) or -dama (fem.) describes an action of the same subject as the main verb — unlike Lithuanian's pusdalyvis, this form agrees with the subject's gender."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Viņš gāja dziedādams.",
                "Він ішов, співаючи."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Converb -dams/-dama — B2"
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
        "id": "sesi-linksniai",
        "title": "Seši Locījumi — A1",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від литовської з її сімома відмінками, латиська має шість — орудний відмінок історично злився зі знахідним і давальним і не існує окремо в сучасній мові.",
            "en": {
              "text": "Unlike Lithuanian with its seven cases, Latvian has six — the instrumental case historically merged with the accusative and dative and doesn't exist separately in the modern language."
            }
          },
          {
            "type": "table",
            "title": "Шість відмінків",
            "rows": [
              [
                "nominatīvs, ģenitīvs, datīvs",
                "називний, родовий, давальний"
              ],
              [
                "akuzatīvs, lokatīvs, vokatīvs",
                "знахідний, місцевий, кличний"
              ]
            ],
            "en": {
              "title": "The Six Cases"
            }
          }
        ],
        "titleEn": "The Six Cases — A1"
      },
      {
        "id": "sest-declinacijas",
        "title": "Sešas Deklinācijas — A2",
        "emoji": "📚",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники розподіляються за шістьма відмінами залежно від закінчення в називному відмінку однини — на одну більше, ніж у литовській.",
            "en": {
              "text": "Nouns are sorted into six declension classes based on their nominative singular ending — one more than in Lithuanian."
            }
          },
          {
            "type": "table",
            "title": "Приклади відмін",
            "rows": [
              [
                "vīrs (чоловік, -s) — I відміна",
                "vīra, vīram, vīru..."
              ],
              [
                "zivs (риба, -s з м'яким приголосним) — VI відміна",
                "zivs, zivij, zivi..."
              ]
            ],
            "en": {
              "title": "Declension Examples"
            }
          }
        ],
        "titleEn": "The Six Noun Declensions — A2"
      },
      {
        "id": "adjektivu-linksnosana",
        "title": "Īpašības Vārdu Locīšana — A2",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники відмінюються за шістьма відмінками, узгоджуючись з іменником у роді, числі й відмінку.",
            "en": {
              "text": "Adjectives decline through the six cases, agreeing with the noun in gender, number, and case."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "labs vīrs / laba vīra / labam vīram",
                "добрий чоловік / доброго чоловіка / доброму чоловікові"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adjective Declension — A2"
      },
      {
        "id": "noteiktas-nenoteiktas-galotnes",
        "title": "Noteiktās un Nenoteiktās Galotnes — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники мають означену форму на -ais/-ā поряд з неозначеною коротшою формою — та сама стратегія, що й у литовській, але з власним набором латиських закінчень.",
            "en": {
              "text": "Adjectives have a definite form in -ais/-ā alongside a shorter indefinite form — the same strategy as in Lithuanian, but with Latvian's own set of endings."
            }
          },
          {
            "type": "table",
            "title": "Неозначена проти означеної",
            "rows": [
              [
                "labs vīrs (неозначена, 'якийсь добрий чоловік')",
                "неозначена форма"
              ],
              [
                "labais vīrs (означена, 'той самий добрий чоловік')",
                "означена форма"
              ]
            ],
            "en": {
              "title": "Indefinite vs. Definite"
            }
          }
        ],
        "titleEn": "Definite and Indefinite Adjective Endings — B1"
      },
      {
        "id": "genitivs-pec-noliegurna",
        "title": "Ģenitīvs pēc Noliegšanas — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "У заперечному реченні прямий додаток переходить у родовий відмінок замість знахідного — та сама балто-слов'янська конструкція, що й у литовській.",
            "en": {
              "text": "In a negated sentence, the direct object switches to the genitive case instead of the accusative — the same Balto-Slavic construction found in Lithuanian."
            }
          },
          {
            "type": "table",
            "title": "Знахідний проти родового",
            "rows": [
              [
                "Es redzu grāmatu. (знахідний)",
                "Я бачу книгу."
              ],
              [
                "Es neredzu grāmatas. (родовий)",
                "Я не бачу книги."
              ]
            ],
            "en": {
              "title": "Accusative vs. Genitive"
            }
          }
        ],
        "titleEn": "Genitive of Negation — B1"
      },
      {
        "id": "demonstrativie-vietniekvardi",
        "title": "Norādāmie Vietniekvārdi — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Вказівні займенники šis ('цей') і tas ('той') відмінюються за всіма відмінками й узгоджуються з іменником у роді й числі.",
            "en": {
              "text": "The demonstratives šis ('this') and tas ('that') decline through all cases and agree with the noun in gender and number."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "šis vīrs / šī vīra",
                "цей чоловік / цього чоловіка"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Demonstrative Pronouns — A1"
      },
      {
        "id": "jautajuma-vietniekvardi",
        "title": "Jautājamie Vietniekvārdi — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питальні займенники kas (хто/що), kāds (який), kurš (котрий) теж відмінюються за відмінками.",
            "en": {
              "text": "The interrogative pronouns kas (who/what), kāds (what kind), kurš (which one) also decline by case."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ko tu gribi?",
                "Чого ти хочеш? (родовий відмінок)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Interrogative Pronouns — A1"
      },
      {
        "id": "piederibas-vietniekvardi-savs-vina",
        "title": "Savs pret Viņa — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійний займенник savs позначає, що предмет належить самому підмету речення, а viņa/viņas — що предмет належить комусь третьому; сплутування цих двох форм — типова помилка навіть для просунутих носіїв суміжних мов.",
            "en": {
              "text": "The possessive savs marks that the object belongs to the sentence's own subject, while viņa/viņas marks that it belongs to some third party; confusing these two forms is a typical mistake even for advanced speakers of related languages."
            }
          },
          {
            "type": "table",
            "title": "savs проти viņa",
            "rows": [
              [
                "Viņš mīl savu suni. (свій власний пес)",
                "Він любить свого пса."
              ],
              [
                "Viņš mīl viņa suni. (пес когось іншого)",
                "Він любить його (чужого) пса."
              ]
            ],
            "en": {
              "title": "savs vs. viņa"
            }
          }
        ],
        "titleEn": "savs vs. viņa (Reflexive Possessive) — B1"
      },
      {
        "id": "atgriezeniskie-verbi-ties",
        "title": "Atgriezeniskie Verbi ar -ties — A2",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотні дієслова завжди закінчуються на -ties і ця частка лишається в кінці слова навіть з префіксом — на відміну від литовської, де -si переміщується перед префіксом.",
            "en": {
              "text": "Reflexive verbs always end in -ties, and this particle stays at the very end of the word even with a prefix — unlike Lithuanian, where -si shifts to before the prefix."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mazgāt (мити) → mazgāties (митися)",
                "зворотна форма, завжди в кінці слова"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reflexive Verbs with -ties — A2"
      },
      {
        "id": "deminutivi-in-s-a",
        "title": "Deminutīvi ar -iņš/-iņa — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувально-пестливий суфікс -iņš/-iņa надзвичайно продуктивний і посідає центральне місце в латиських народних піснях (dainas), де майже кожен іменник може отримати цю ласкаву форму.",
            "en": {
              "text": "The diminutive suffix -iņš/-iņa is extremely productive and holds a central place in Latvian folk songs (dainas), where almost any noun can take this endearing form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "saule → saulīte",
                "сонце → сонечко"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Diminutives with -iņš/-iņa — B1"
      },
      {
        "id": "adjektivu-pakāpes",
        "title": "Īpašības Vārdu Pakāpes — A2",
        "emoji": "⚖️",
        "sections": [
          {
            "type": "intro",
            "text": "Вищий ступінь утворюється суфіксом -āks, найвищий — префіксом vis- плюс -ākais, доданими до основи прикметника.",
            "en": {
              "text": "The comparative is formed with the suffix -āks, the superlative with the prefix vis- plus -ākais, added to the adjective stem."
            }
          },
          {
            "type": "table",
            "title": "Ступені порівняння",
            "rows": [
              [
                "labs → labāks → vislabākais",
                "добрий → кращий → найкращий"
              ]
            ],
            "en": {
              "title": "Degrees of Comparison"
            }
          }
        ],
        "titleEn": "Adjective Comparison — A2"
      },
      {
        "id": "skaitlazvardu-linksnosana",
        "title": "Skaitļa Vārdu Locīšana — B1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Числівники також відмінюються за відмінками, як прикметники, — риса, втрачена в більшості сучасних європейських мов.",
            "en": {
              "text": "Numerals also decline by case, like adjectives — a feature lost in most modern European languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "viens vīrs / viena vīra",
                "один чоловік / одного чоловіка"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Numeral Declension — B1"
      },
      {
        "id": "prievardi-ar-linksniem",
        "title": "Prievārdi ar Locījumiem — A2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Кожен прийменник вимагає конкретного відмінка іменника, який за ним іде, — ar завжди з знахідним/орудним поєднаним відмінком, bez завжди з родовим.",
            "en": {
              "text": "Each preposition requires a specific case for the noun that follows it — ar always with the merged accusative/instrumental, bez always with the genitive."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ar draugu",
                "з другом"
              ],
              [
                "bez naudas",
                "без грошей"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Prepositions and Their Cases — A2"
      },
      {
        "id": "vardu-kartiba-brivs",
        "title": "Brīva Vārdu Kārtība — B1",
        "emoji": "↔️",
        "sections": [
          {
            "type": "intro",
            "text": "Оскільки відмінок, а не позиція в реченні, визначає граматичну роль слова, порядок слів досить вільний і слугує переважно для наголосу.",
            "en": {
              "text": "Since case, not position in the sentence, determines a word's grammatical role, word order is fairly free and mostly serves for emphasis."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Grāmatu es lasu. (наголос на об'єкті)",
                "Книгу я читаю (саме книгу)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Free Word Order — B1"
      },
      {
        "id": "nav-artikulu",
        "title": "Nav Artikulu — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "У латиській немає ані означеного, ані неозначеного артикля — цю роль частково бере на себе означена форма прикметника.",
            "en": {
              "text": "Latvian has neither a definite nor an indefinite article — this role is partly taken over by the definite adjective form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Es redzu vīru.",
                "Я бачу (якогось) чоловіка / чоловіка."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "No Articles — A1"
      },
      {
        "id": "daudzskaitla-formas",
        "title": "Daudzskaitļa Formas — A2",
        "emoji": "➕",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється власним набором закінчень для кожної з шести відмін і кожного з шести відмінків.",
            "en": {
              "text": "The plural is formed with its own set of endings for each of the six declensions and each of the six cases."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "vīrs → vīri (наз. мн.) → vīru (род. мн.)",
                "чоловік → чоловіки → чоловіків"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Plural Formation — A2"
      },
      {
        "id": "nenoteiksme-forma",
        "title": "Nenoteiksme — A1",
        "emoji": "📘",
        "sections": [
          {
            "type": "intro",
            "text": "Інфінітив завжди закінчується на -t і слугує словниковою формою дієслова.",
            "en": {
              "text": "The infinitive always ends in -t and serves as the dictionary form of the verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "runāt, lasīt, rakstīt",
                "говорити, читати, писати"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Infinitive — A1"
      },
      {
        "id": "verbu-konjugacijas-klases",
        "title": "Verbu Konjugācijas — A2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслова розподіляються на три дієвідміни залежно від закінчення інфінітива й основи теперішнього часу.",
            "en": {
              "text": "Verbs are sorted into three conjugation classes depending on the infinitive ending and the present-tense stem."
            }
          },
          {
            "type": "table",
            "title": "Три дієвідміни",
            "rows": [
              [
                "I: strādāt (основа не змінюється)",
                "II: -āt з подовженою основою",
                "III: -ināt з іншим типом основи"
              ]
            ]
          }
        ],
        "titleEn": "Verb Conjugation Classes — A2"
      },
      {
        "id": "apstaklu-darinasana",
        "title": "Apstākļa Vārdu Darināšana — A2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Прислівники способу дії утворюються від прикметника суфіксом -i, доданим до основи, — регулярна й продуктивна модель.",
            "en": {
              "text": "Manner adverbs are formed from an adjective with the suffix -i added to the stem — a regular and productive pattern."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "labs (добрий) → labi (добре)",
                "прикметник → прислівник"
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
        "id": "saliktenu-veidosana",
        "title": "Salikteņu Veidošana — B2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Складні слова поєднують дві основи в одне ціле, зберігаючи внутрішню відмінюваність останнього компонента.",
            "en": {
              "text": "Compound words join two stems into one unit, keeping the last component internally declinable."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "saule + lēkt → saullēkts",
                "сонце + сходити → схід сонця"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Compound Words — B2"
      },
      {
        "id": "saukļa-locijums-liekas",
        "title": "Vokatīva Liekas — B1",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Кличний відмінок зберігся частково — насамперед для чоловічих імен на -s і для родинних термінів, де він відрізняється від називного відсутністю кінцевого -s.",
            "en": {
              "text": "The vocative case survives partially — mainly for male names ending in -s and for kinship terms, where it's distinguished from the nominative by dropping the final -s."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Jānis → Jāni! (звертання)",
                "Яніс → Яніс! (кличний)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Vocative Remnants — B1"
      },
      {
        "id": "vietas-locijuma-lietojums",
        "title": "Lokatīva Lietojums bez Prievārda — B1",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Місцевий відмінок сам, без жодного прийменника, виражає місце чи напрямок дії — mājā ('вдома') замінює конструкцію 'в домі' з окремим прийменником.",
            "en": {
              "text": "The locative case alone, with no preposition, expresses the place or direction of an action — mājā ('at home') replaces an 'in the house' construction with a separate preposition."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Es esmu mājā.",
                "Я вдома."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Bare Locative Usage — B1"
      },
      {
        "id": "lietvardu-dzimte",
        "title": "Lietvārdu Dzimte — A1",
        "emoji": "⚥",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники мають лише два роди — чоловічий і жіночий; середнього роду немає взагалі, як і в литовській.",
            "en": {
              "text": "Nouns have only two genders — masculine and feminine; there's no neuter gender at all, as in Lithuanian."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "vīrs (ч.р.) / sieviete (ж.р.)",
                "чоловік / жінка"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Noun Gender — A1"
      },
      {
        "id": "piedēkļu-vardu-darinasana",
        "title": "Vārdu Darināšana ar Piedēkļiem — B1",
        "emoji": "🧱",
        "sections": [
          {
            "type": "intro",
            "text": "Численні словотворчі суфікси дозволяють утворювати іменники з дієслів чи прикметників у регулярний, передбачуваний спосіб.",
            "en": {
              "text": "Numerous derivational suffixes allow forming nouns from verbs or adjectives in a regular, predictable way."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mācīt (навчати) → skolotājs (вчитель)",
                "суфікс -tājs утворює діяча"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Suffix Derivation — B1"
      },
      {
        "id": "divskana-un-garuma-pazimes",
        "title": "Garo Patskaņu Apzīmējums — A2",
        "emoji": "✍️",
        "sections": [
          {
            "type": "intro",
            "text": "Довгота голосного позначається макроном над буквою (ā, ē, ī, ū) — окрема орфографічна риса, яку не має литовська, де довгота передається інакше.",
            "en": {
              "text": "Vowel length is marked with a macron over the letter (ā, ē, ī, ū) — a distinct orthographic feature Lithuanian doesn't have, where length is conveyed differently."
            }
          },
          {
            "type": "table",
            "title": "Приклад довготи",
            "rows": [
              [
                "māja (довгий ā, дім) vs mana (короткий a, моя)",
                "макрон розрізняє довготу голосного"
              ]
            ],
            "en": {
              "title": "Length Example"
            }
          }
        ],
        "titleEn": "Marking Vowel Length with Macrons — A2"
      },
      {
        "id": "atstastijuma-izteiksme-lietojums",
        "title": "Atstāstījuma Izteiksme Žurnālistikā — B2",
        "emoji": "📰",
        "sections": [
          {
            "type": "intro",
            "text": "Переказний спосіб активно вживається в журналістиці для позначення непідтвердженої чи чужої інформації — репортер, що переказує заяву політика без власного підтвердження, зобов'язаний ужити саме цю форму.",
            "en": {
              "text": "The oblique mood is actively used in journalism to mark unconfirmed or secondhand information — a reporter relaying a politician's statement without personal confirmation is obligated to use exactly this form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ministrs paziņojis, ka situācija uzlabošoties. (переказний спосіб)",
                "Міністр заявив, що ситуація нібито покращиться."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Oblique Mood in Journalism — B2"
      },
      {
        "id": "vajadzibas-izteiksme-visas-personas",
        "title": "Vajadzības Izteiksme Visām Personām — B2",
        "emoji": "☑️",
        "sections": [
          {
            "type": "intro",
            "text": "Дебітив утворюється однаково для всіх осіб — сам суб'єкт-виконавець позначається лише давальним відмінком, а дієслово з префіксом jā- лишається незмінним, незалежно від того, хто саме мусить.",
            "en": {
              "text": "The debitive is formed identically for every person — the acting subject is marked only by the dative case, while the jā-prefixed verb stays unchanged regardless of who exactly must act."
            }
          },
          {
            "type": "table",
            "title": "Дебітив для різних осіб",
            "rows": [
              [
                "man jāiet / tev jāiet / viņam jāiet",
                "мені треба йти / тобі треба йти / йому треба йти"
              ]
            ],
            "en": {
              "title": "Debitive Across Persons"
            }
          }
        ],
        "titleEn": "The Debitive Across All Persons — B2"
      },
      {
        "id": "savs-obligatais-lietojums",
        "title": "Savs: Obligāts Lietojums — B1",
        "emoji": "☑️",
        "sections": [
          {
            "type": "intro",
            "text": "Уживання savs обов'язкове щоразу, коли предмет належить граматичному підмету речення, — заміна на viņa в такому контексті є граматичною помилкою, а не просто стилістичною відмінністю.",
            "en": {
              "text": "Using savs is mandatory whenever the object belongs to the sentence's grammatical subject — substituting viņa in such a context is a grammatical error, not just a stylistic difference."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Es lasu savu grāmatu. (правильно, моя власна книга)",
                "Я читаю свою книгу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Savs: Mandatory Usage — B1"
      },
      {
        "id": "dubultie-deminutivi",
        "title": "Dubultie Deminutīvi — B2",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувальний суфікс можна подвоїти для ще більшої ніжності — -iņdziņš замість простого -iņš, особливо в фольклорі та ласкавому мовленні до дітей.",
            "en": {
              "text": "The diminutive suffix can be doubled for even greater tenderness — -iņdziņš instead of the plain -iņš, especially in folklore and affectionate speech to children."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "saule → saulīte → saulīnīte (подвійне зменшення)",
                "сонце → сонечко → сонечечко"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Double Diminutives — B2"
      },
      {
        "id": "dainas-arhaiskas-formas",
        "title": "Tautasdziesmu Arhaiskās Formas — B2",
        "emoji": "🎶",
        "sections": [
          {
            "type": "intro",
            "text": "Латиські народні пісні (dainas) зберігають архаїчні граматичні форми, вже втрачені в живій мові, а також специфічний чотирискладовий поетичний розмір — мовна капсула часу, найбагатша серед балтійських мов.",
            "en": {
              "text": "Latvian folk songs (dainas) preserve archaic grammatical forms already lost in the living language, along with a distinctive four-syllable poetic meter — a linguistic time capsule, the richest among the Baltic languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Archaïc verb and noun forms specific to the daina register, no longer used in everyday speech.",
                "архаїчні форми, характерні для реєстру dainas"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Archaic Forms in Folk Songs (Dainas) — B2"
      },
      {
        "id": "latgaliesu-dialekts",
        "title": "Latgaliešu Izloksne — B2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Латгальська говірка південного сходу Латвії розходиться настільки сильно у вимові, лексиці й навіть частково в письмі, що частина мовознавців вважає її окремою мовою, а не просто діалектом латиської.",
            "en": {
              "text": "The Latgalian dialect of southeastern Latvia diverges so strongly in pronunciation, vocabulary, and even partly in writing that some linguists consider it a separate language rather than just a dialect of Latvian."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Latgalian has its own written literary tradition, distinct from standard Latvian.",
                "латгальська має власну писемну літературну традицію"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Latgalian Dialect — B2"
      },
      {
        "id": "krievu-valodas-ietekme",
        "title": "Krievu Valodas Ietekme — B2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Десятиліття російськомовного панування за радянського періоду залишили в латиській шар технічної й побутової лексики, а в двомовних спільнотах досі трапляється перемикання кодів між латиською й російською.",
            "en": {
              "text": "Decades of Russian-language dominance during the Soviet period left a layer of technical and everyday vocabulary in Latvian, and code-switching between Latvian and Russian still occurs in bilingual communities."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Деякі технічні терміни радянської доби досі мають виразно російське коріння.",
                "радянський лексичний шар"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Russian-Language Influence — B2"
      },
      {
        "id": "instrumentala-zudums-linksne",
        "title": "Instrumentāļa Zudums — B2",
        "emoji": "📉",
        "sections": [
          {
            "type": "intro",
            "text": "Орудний відмінок історично злився із знахідним в однині й з давальним у множині — саме тому сучасна латиська має на один відмінок менше, ніж споріднена литовська, яка досі зберігає орудний окремо.",
            "en": {
              "text": "The instrumental case historically merged with the accusative in the singular and with the dative in the plural — this is exactly why modern Latvian has one fewer case than its relative Lithuanian, which still keeps the instrumental separate."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ar draugu (форма ідентична знахідному, орудне значення)",
                "з другом"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Lost Instrumental Case — B2"
      },
      {
        "id": "noteiktibas-izteiksana-ar-demonstrativu",
        "title": "Noteiktība ar Tas/Tā Sarunvalodā — B2",
        "emoji": "🗨️",
        "sections": [
          {
            "type": "intro",
            "text": "У розмовному мовленні вказівний займенник tas/tā часто вживається майже як означений артикль перед іменником, підкреслюючи, що йдеться про вже відомий предмет.",
            "en": {
              "text": "In colloquial speech the demonstrative tas/tā is often used almost like a definite article before a noun, emphasizing that a known object is meant."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Tas puisis, ko es redzēju. (розмовне, майже як 'той хлопець')",
                "той хлопець, якого я бачив"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Demonstrative as a Near-Article in Speech — B2"
      },
      {
        "id": "skaitlazvardu-saskanosana-ar-lietvardu",
        "title": "Skaitļa Vārdu Saskaņošana — B1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Після одиниці іменник стоїть у називному однини, а після будь-якого іншого числа — переважно в родовому множини, незалежно від самого числа, — простіше правило, ніж у литовській, де 2-9 вимагають називного множини.",
            "en": {
              "text": "After 'one' the noun stands in nominative singular, and after any other number — mostly in genitive plural, regardless of the number itself — a simpler rule than in Lithuanian, where 2-9 require nominative plural."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "divi vīri (наз. мн.) / vairāk nekā desmit vīru (род. мн.)",
                "два чоловіки / більш ніж десять чоловіків"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Numeral-Noun Agreement — B1"
      },
      {
        "id": "pasivais-teikums-ar-tikt",
        "title": "Ciešamā Kārta ar Tikt — B1",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивна конструкція частіше утворюється допоміжним дієсловом tikt ('ставати'), а не būt, коли наголошується сам процес переходу до нового стану, а не готовий результат.",
            "en": {
              "text": "The passive construction is more often formed with the auxiliary tikt ('to become') rather than būt, when emphasizing the process of transitioning to a new state rather than the finished result."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Māja tiek celta.",
                "Дім будується (процес)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Passive Voice with tikt — B1"
      },
      {
        "id": "verbu-priedekli-aspekts",
        "title": "Verbu Priedēkļi un Veids — B1",
        "emoji": "⚡",
        "sections": [
          {
            "type": "intro",
            "text": "Префікси на кшталт pa-, sa-, iz- надають дієслову доконаного виду, як і в литовській та слов'янських мовах, — балто-слов'янська ареальна риса.",
            "en": {
              "text": "Prefixes like pa-, sa-, iz- give a verb perfective aspect, as in Lithuanian and Slavic languages — a Balto-Slavic areal feature."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "rakstīt (писати) → uzrakstīt (написати)",
                "префікс uz- додає доконаність"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Verb Prefixes and Aspect — B1"
      },
      {
        "id": "partikas-vardu-secība-uzsvaram",
        "title": "Vārdu Secība Uzsvaram — B2",
        "emoji": "🔝",
        "sections": [
          {
            "type": "intro",
            "text": "Слово, винесене на початок речення, отримує особливий наголос, — і навіть додаток чи обставина можуть стояти першими, залишаючи підмет далі в реченні.",
            "en": {
              "text": "A word fronted to the beginning of the sentence receives special emphasis — even an object or adverbial can stand first, leaving the subject further into the sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Vakar es biju mājās. (наголос на 'вчора')",
                "Учора я був удома."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Word Order for Emphasis — B2"
      },
      {
        "id": "pieklajibas-formas-jus",
        "title": "Pieklājības Formas: Jūs — A2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Ввічливе звертання до однієї особи передається займенником множини jūs з узгодженням дієслова у множині.",
            "en": {
              "text": "Polite address to one person is expressed with the plural pronoun jūs and plural verb agreement."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Vai jūs runājat angliski?",
                "Ви розмовляєте англійською?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Polite Address with Jūs — A2"
      },
      {
        "id": "saliktie-laiki-ar-but",
        "title": "Saliktie Laiki ar Būt — B1",
        "emoji": "🧱",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово būt плюс активний дієприкметник минулого часу утворюють складений перфект, що позначає результат минулої дії, актуальний у теперішньому.",
            "en": {
              "text": "The verb būt plus the past active participle forms a compound perfect, marking the result of a past action relevant to the present."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Es esmu redzējis šo filmu.",
                "Я бачив цей фільм (уже, коли-небудь)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Compound Tenses with Būt — B1"
      },
      {
        "id": "apstaklu-teikumi-ar-lai",
        "title": "Mērķa Teikumi ar Lai — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Підрядне речення мети вводиться сполучником lai ('щоб'), після якого дієслово завжди стоїть в умовному способі, незалежно від часу головного речення.",
            "en": {
              "text": "A purpose clause is introduced with the conjunction lai ('so that'), after which the verb always stands in the conditional mood, regardless of the main clause's tense."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Es strādāju, lai nopelnītu naudu.",
                "Я працюю, щоб заробити грошей."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Purpose Clauses with Lai — B1"
      },
      {
        "id": "nosacijuma-teikumi-ja",
        "title": "Nosacījuma Teikumi ar Ja — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовне підрядне речення вводиться сполучником ja ('якщо'); для реальної умови дієслово стоїть у дійсному способі, для нереальної — обидва речення в умовному способі.",
            "en": {
              "text": "A conditional clause is introduced with the conjunction ja ('if'); for a real condition the verb stands in the indicative, for an unreal one both clauses take the conditional."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ja tu nāksi, es priecāšos.",
                "Якщо ти прийдеш, я зрадію."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional Clauses with Ja — B1"
      },
      {
        "id": "nenoteiktas-vietniekvardu-formas",
        "title": "Nenoteiktie Vietniekvārdi — B1",
        "emoji": "🌫️",
        "sections": [
          {
            "type": "intro",
            "text": "Неозначені займенники kaut kas ('щось') і kāds ('хтось') утворюються додаванням частки kaut до питальних займенників, зберігаючи їхнє відмінювання.",
            "en": {
              "text": "Indefinite pronouns kaut kas ('something') and kāds ('someone') are formed by adding the particle kaut to interrogative pronouns, keeping their declension."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Es kaut ko redzēju.",
                "Я щось бачив."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Indefinite Pronouns — B1"
      },
      {
        "id": "vokatīva-liekas-uzrunas",
        "title": "Uzrunas Formas ar Radniecības Vārdiem — B1",
        "emoji": "👪",
        "sections": [
          {
            "type": "intro",
            "text": "Крім вокатива на іменах, звертання часто утворюється й на родинних термінах — mammu! (мамо!), tētiņ! (татку!) — з тим самим випущенням кінцевого приголосного.",
            "en": {
              "text": "Besides the vocative on names, address is also often formed on kinship terms — mammu! (mom!), tētiņ! (dad!) — with the same dropping of the final consonant."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mammu, nāc šurp!",
                "Мамо, іди сюди!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Vocative Address with Kinship Terms — B1"
      },
      {
        "id": "adjektivu-substantivacija",
        "title": "Īpašības Vārdu Substantivācija — B2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Означена форма прикметника може вживатися самостійно як іменник — 'старший', 'молодша' — без потреби в окремому іменнику 'людина'.",
            "en": {
              "text": "The definite adjective form can be used on its own as a noun — 'the elder', 'the younger one' — with no need for a separate noun 'person'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Vecākais to zina.",
                "Старший це знає."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adjective Nominalization — B2"
      },
      {
        "id": "verbu-nozimju-maina-ar-priedekliem",
        "title": "Verbu Nozīmes Maiņa ar Priedēkļiem — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Різні префікси, додані до того самого кореня, можуть повністю змінити лексичне значення дієслова, а не лише вид, — по суті, утворюючи новий, самостійний дієслівний словник.",
            "en": {
              "text": "Different prefixes added to the same root can completely change a verb's lexical meaning, not just its aspect — effectively forming a new, independent verbal vocabulary."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "nākt (приходити) → panākt (досягти) → iznākt (виходити)",
                "різні префікси, різні значення"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Meaning Shift Through Prefixes — B2"
      },
      {
        "id": "latviesu-valodas-purisms",
        "title": "Latviešu Valodas Purisms — B2",
        "emoji": "🧼",
        "sections": [
          {
            "type": "intro",
            "text": "Подібно до литовської, латиська мовна політика заохочує власні неологізми замість прямих запозичень, — державний орган мовного контролю активно пропонує латиські відповідники новим міжнародним термінам.",
            "en": {
              "text": "Similarly to Lithuanian, Latvian language policy encourages native neologisms over direct loanwords — a state language-control body actively proposes Latvian equivalents for new international terms."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "tīmeklis ('мережа', власний неологізм замість запозиченого 'internets' в деяких контекстах)",
                "приклад власного словотвору"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Latvian Language Purism — B2"
      },
      {
        "id": "sieviesu-vīriesu-uzvārdu-galotnes",
        "title": "Uzvārdu Galotnes: Sievietes pret Vīrieši — B2",
        "emoji": "👤",
        "sections": [
          {
            "type": "intro",
            "text": "Прізвища обов'язково відмінюються за родом: чоловічі закінчуються на -s чи -is, жіночі — на -a чи -e, а традиційно навіть різняться закінченням залежно від сімейного стану жінки, — граматична риса, якої немає в більшості європейських мов.",
            "en": {
              "text": "Surnames are obligatorily inflected for gender: male ones end in -s or -is, female ones in -a or -e, and traditionally even differ by ending depending on a woman's marital status — a grammatical feature absent from most European languages."
            }
          },
          {
            "type": "table",
            "title": "Приклад родових закінчень",
            "rows": [
              [
                "Bērziņš (чоловіче прізвище)",
                "закінчення -š"
              ],
              [
                "Bērziņa (жіноче прізвище, та сама сім'я)",
                "закінчення -a"
              ]
            ],
            "en": {
              "title": "Gendered Ending Example"
            }
          }
        ],
        "titleEn": "Gendered Surname Endings — B2"
      },
      {
        "id": "lai-treso-personas-pavele",
        "title": "Lai: Trešās Personas Pavēle — B1",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Крім уведення мети, те саме слово lai перед дієсловом теперішнього часу утворює наказ чи побажання для третьої особи, — окрема функція, відмінна від підрядного речення мети.",
            "en": {
              "text": "Besides introducing purpose, the same word lai before a present-tense verb forms a command or wish for the third person — a distinct function from the purpose clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Lai dzīvo brīvība!",
                "Хай живе свобода!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Lai: Third-Person Imperative — B1"
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
        "id": "neregularie-verbi",
        "title": "Neregulārie Verbi — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька частовживаних дієслів (būt 'бути', iet 'йти') мають форми, що не виводяться регулярно з основи інфінітива, і їх слід запам'ятовувати окремо.",
            "en": {
              "text": "A few common verbs (būt 'to be', iet 'to go') have forms that can't be regularly derived from the infinitive stem and must be memorized separately."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярні форми",
            "rows": [
              [
                "esmu (я є, не за звичайним зразком)",
                "нерегулярна форма дієслова būt"
              ]
            ]
          }
        ],
        "titleEn": "Irregular Verbs — B1"
      },
      {
        "id": "neregulara-lietvardu-locisana",
        "title": "Neregulāra Lietvārdu Locīšana — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька частовживаних іменників мають нерегулярну форму родового відмінка чи множини, яку слід запам'ятовувати окремо.",
            "en": {
              "text": "A few common nouns have an irregular genitive or plural form that must be memorized separately."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ledus (лід) → ledus (той самий вигляд у родовому, не за звичайним зразком)",
                "нерегулярна форма родового"
              ]
            ]
          }
        ],
        "titleEn": "Irregular Noun Declension — B1"
      },
      {
        "id": "fikseti-izteicieni-tautasdziesmas",
        "title": "Fiksēti Izteicieni Tautasdziesmās — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Прислів'я й застиглі вирази з народних пісень зберігають архаїчні граматичні конструкції, які вже вийшли з ужитку в сучасній розмовній мові, і вживаються цілими блоками.",
            "en": {
              "text": "Proverbs and fixed expressions from folk songs preserve archaic grammatical constructions already out of use in modern spoken language, and are used as whole blocks."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kāda māte, tāda meita.",
                "Яка мати, така й донька (застигла приказка)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Fixed Expressions in Folk Songs — B2"
      }
    ]
  }
];
