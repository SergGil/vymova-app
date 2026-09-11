// Vymova — data/grammar-data/grammar_lt.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_LT: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Asmeniniai įvardžiai — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Особові займенники в литовській змінюються за особою й числом. У третій особі є окремі форми чоловічого й жіночого роду.",
            "en": {
              "text": "Lithuanian personal pronouns vary by person and number. The third person has separate masculine and feminine forms."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "aš"
              ],
              [
                "ти",
                "tu"
              ],
              [
                "він / вона",
                "jis / ji"
              ],
              [
                "ми",
                "mes"
              ],
              [
                "ви",
                "jūs"
              ],
              [
                "вони (ч./ж.)",
                "jie / jos"
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
        "id": "septyni-linksniai",
        "title": "Septyni Linksniai — A1",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Литовська зберегла сім відмінків — найбагатшу відмінкову систему серед живих індоєвропейських мов поряд із санскритом, тоді як більшість сучасних європейських мов утратила майже всі відмінки.",
            "en": {
              "text": "Lithuanian retained seven grammatical cases — the richest case system among living Indo-European languages alongside Sanskrit, while most modern European languages have lost almost all their cases."
            }
          },
          {
            "type": "table",
            "title": "Сім відмінків",
            "rows": [
              [
                "vardininkas (називний), kilmininkas (родовий), naudininkas (давальний)",
                "хто? кого? кому?"
              ],
              [
                "galininkas (знахідний), įnagininkas (орудний), vietininkas (місцевий), šauksmininkas (кличний)",
                "кого? ким? де? о!"
              ]
            ],
            "en": {
              "title": "The Seven Cases"
            }
          }
        ],
        "titleEn": "The Seven Cases — A1"
      },
      {
        "id": "kirtis-du-tonai",
        "title": "Priegaidė: Du Tonai — B1",
        "emoji": "🎵",
        "sections": [
          {
            "type": "intro",
            "text": "Наголошений склад з довгим голосним чи дифтонгом несе один із двох тонів — гострий (висхідний) чи циркумфлексний (спадний) — той самий тональний контраст, що й у сербській/хорватській, але успадкований незалежно з праіндоєвропейської.",
            "en": {
              "text": "A stressed syllable with a long vowel or diphthong carries one of two pitch accents — acute (rising) or circumflex (falling) — the same kind of tonal contrast found in Serbian/Croatian, but inherited independently from Proto-Indo-European."
            }
          },
          {
            "type": "table",
            "title": "Приклад тонового контрасту",
            "rows": [
              [
                "ãžuolas (гострий тон) vs kalnas (циркумфлексний тон)",
                "різний тональний малюнок наголошеного складу"
              ]
            ],
            "en": {
              "title": "Pitch Accent Example"
            }
          }
        ],
        "titleEn": "Pitch Accent: Two Tones — B1"
      },
      {
        "id": "archajine-kalba",
        "title": "Archajiška Kalba — A2",
        "emoji": "🏛️",
        "sections": [
          {
            "type": "intro",
            "text": "Литовська вважається найбільш архаїчною живою індоєвропейською мовою — вона зберегла більше праіндоєвропейських рис у граматиці й лексиці, ніж будь-яка інша сучасна мова цієї родини, включно з латиною й давньогрецькою.",
            "en": {
              "text": "Lithuanian is considered the most archaic living Indo-European language — it has preserved more Proto-Indo-European features in its grammar and vocabulary than any other modern language of the family, including Latin and Ancient Greek."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "sūnus (син) ≈ санскр. sūnú-",
                "спільний праіндоєвропейський корінь, майже незмінений"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "An Archaic Language — A2"
      },
      {
        "id": "negasion-i-preguntas",
        "title": "Neigimas ir Klausimai — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється часткою ne безпосередньо перед дієсловом (пишеться разом); питання без питального слова передаються часткою ar на початку речення.",
            "en": {
              "text": "Negation is formed with the particle ne directly before the verb (written together as one word); yes/no questions are formed with the particle ar at the beginning of the sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Aš nežinau.",
                "Я не знаю."
              ],
              [
                "Ar tu ateisi?",
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
        "title": "Esamasis Laikas — A1",
        "emoji": "☀️",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній час утворюється особовими закінченнями, що відрізняються за дієвідмінами; більшість дієслів у першій особі однини закінчуються на -u чи -iu.",
            "en": {
              "text": "The present tense is formed with person endings that vary by conjugation class; most verbs end in -u or -iu in the first person singular."
            }
          },
          {
            "type": "table",
            "title": "kalbėti (говорити) у теперішньому часі",
            "rows": [
              [
                "kalbu / kalbi / kalba",
                "я говорю / ти говориш / він говорить"
              ],
              [
                "kalbame / kalbate / kalba",
                "ми говоримо / ви говорите / вони говорять"
              ]
            ],
            "en": {
              "title": "kalbėti (to speak) in the present"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Aš kalbu lietuviškai.",
                "Я говорю литовською."
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
        "title": "Būtasis Kartinis Laikas — A2",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Простий минулий час описує одноразову завершену дію й найчастіше утворюється закінченням -o в третій особі.",
            "en": {
              "text": "The simple past describes a one-time completed action and most often takes the ending -o in the third person."
            }
          },
          {
            "type": "table",
            "title": "kalbėti у минулому часі",
            "rows": [
              [
                "kalbėjau / kalbėjai / kalbėjo",
                "я говорив / ти говорив / він говорив"
              ]
            ],
            "en": {
              "title": "kalbėti in the past"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Aš kalbėjau su juo vakar.",
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
        "id": "past-frequentative",
        "title": "Būtasis Dažninis Laikas — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Балтійська особливість: окремий минулий час на -davo позначає звичну, регулярно повторювану дію в минулому — 'бувало, робив' — цілком інша форма, ніж простий минулий час.",
            "en": {
              "text": "A Baltic peculiarity: a dedicated past tense in -davo marks a habitual, regularly repeated past action — 'used to do' — an entirely different form from the simple past."
            }
          },
          {
            "type": "table",
            "title": "kalbėti у минулому звичайному часі",
            "rows": [
              [
                "kalbėdavau / kalbėdavai / kalbėdavo",
                "я бувало говорив / ти бувало говорив / він бувало говорив"
              ]
            ],
            "en": {
              "title": "kalbėti in the past frequentative"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Vaikystėje kalbėdavau su seneliais lietuviškai.",
                "У дитинстві я, бувало, говорив з бабусею й дідусем литовською."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Past Frequentative (Iterative Past) — B1"
      },
      {
        "id": "future-tense",
        "title": "Būsimasis Laikas — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється суфіксом -s-, вставленим перед особовим закінченням, — синтетична форма без допоміжного дієслова.",
            "en": {
              "text": "The future tense is formed with the suffix -s- inserted before the person ending — a synthetic form with no auxiliary verb."
            }
          },
          {
            "type": "table",
            "title": "kalbėti у майбутньому часі",
            "rows": [
              [
                "kalbėsiu / kalbėsi / kalbės",
                "я говоритиму / ти говоритимеш / він говоритиме"
              ]
            ],
            "en": {
              "title": "kalbėti in the future"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Rytoj kalbėsiu su tavimi.",
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
        "title": "Tariamoji Nuosaka — B1",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб утворюється незмінним для всіх осіб суфіксом -čiau/-tum-, тож форма розрізняється лише додаванням особового закінчення в множині.",
            "en": {
              "text": "The conditional mood is formed with a suffix -čiau/-tum- invariant across persons, so the form is distinguished only by the added person ending in the plural."
            }
          },
          {
            "type": "table",
            "title": "kalbėti в умовному способі",
            "rows": [
              [
                "kalbėčiau / kalbėtum / kalbėtų",
                "я говорив би / ти говорив би / він говорив би"
              ]
            ],
            "en": {
              "title": "kalbėti in the conditional"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Aš kalbėčiau, jei žinočiau atsakymą.",
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
        "title": "Liepiamoji Nuosaka — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб має окрему форму для другої особи однини й множини, утворену суфіксом -k(ite) на основі дієслова.",
            "en": {
              "text": "The imperative has a separate form for second person singular and plural, formed with the suffix -k(ite) on the verb stem."
            }
          },
          {
            "type": "table",
            "title": "kalbėti в наказовому способі",
            "rows": [
              [
                "kalbėk! / kalbėkite!",
                "говори! / говоріть!"
              ]
            ],
            "en": {
              "title": "kalbėti in the imperative"
            }
          }
        ],
        "titleEn": "Imperative Mood — A2"
      },
      {
        "id": "present-active-participle",
        "title": "Esamojo Laiko Veikiamasis Dalyvis — B1",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Активний дієприкметник теперішнього часу на -antis узгоджується з іменником у роді, числі й відмінку — заміняє підрядне речення 'що робить'.",
            "en": {
              "text": "The present active participle in -antis agrees with the noun in gender, number, and case — it replaces a relative clause meaning 'who is doing'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kalbantis žmogus",
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
        "title": "Būtojo Laiko Veikiamasis Dalyvis — B1",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Активний дієприкметник минулого часу на -ęs позначає того, хто вже виконав дію, і теж узгоджується за родом, числом і відмінком.",
            "en": {
              "text": "The past active participle in -ęs marks one who has already performed the action, and also agrees in gender, number, and case."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kalbėjęs žmogus",
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
        "id": "future-active-participle",
        "title": "Būsimojo Laiko Dalyvis — B2",
        "emoji": "🔜",
        "sections": [
          {
            "type": "intro",
            "text": "Литовська має й майбутній дієприкметник на -siantis — форму, відсутню в більшості інших мов, що позначає того, хто ще збирається виконати дію.",
            "en": {
              "text": "Lithuanian even has a future participle in -siantis — a form absent from most other languages, marking one who is about to perform an action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kalbėsiantis žmogus",
                "людина, яка говоритиме"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Future Active Participle — B2"
      },
      {
        "id": "present-passive-participle",
        "title": "Esamojo Laiko Neveikiamasis Dalyvis — B2",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний дієприкметник теперішнього часу на -amas позначає предмет, над яким наразі відбувається дія.",
            "en": {
              "text": "The present passive participle in -amas marks the object currently undergoing the action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "skaitomas laikraštis",
                "газета, яку читають"
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
        "title": "Būtojo Laiko Neveikiamasis Dalyvis — B2",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний дієприкметник минулого часу на -tas позначає результат завершеної дії над предметом і використовується для утворення перфектного пасиву з дієсловом būti.",
            "en": {
              "text": "The past passive participle in -tas marks the result of a completed action on the object and is used to form the perfect passive with the verb būti."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "parašyta knyga",
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
        "id": "pusdalyvis-half-participle",
        "title": "Pusdalyvis — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Півдієприкметник (pusdalyvis) описує дію, яку виконує той самий підмет одночасно з головним дієсловом, — окрема невідмінювана форма, що не потребує узгодження.",
            "en": {
              "text": "The half-participle (pusdalyvis) describes an action performed by the same subject simultaneously with the main verb — a separate, uninflected form that needs no agreement."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Jis ėjo dainuodamas.",
                "Він ішов, співаючи."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Pusdalyvis (Half-Participle) — B2"
      },
      {
        "id": "padalyvis-adverbial-participle",
        "title": "Padalyvis — B2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Прислівниковий дієприкметник (padalyvis) описує одночасну дію іншого, ніж у головному реченні, підмета — незалежна конструкція, подібна до латинського ablativus absolutus.",
            "en": {
              "text": "The adverbial participle (padalyvis) describes a simultaneous action of a subject different from the main clause's — an independent construction similar to the Latin ablative absolute."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Saulei tekant, mes išvykome.",
                "Коли сходило сонце, ми вирушили."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Padalyvis (Adverbial Absolute Participle) — B2"
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
        "id": "penkios-linksniuotes",
        "title": "Penkios Linksniuotės — A2",
        "emoji": "📚",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники розподіляються за п'ятьма відмінами залежно від закінчення в називному відмінку однини — кожна відміна має власний набір закінчень для всіх семи відмінків.",
            "en": {
              "text": "Nouns are sorted into five declension classes based on their nominative singular ending — each declension has its own set of endings for all seven cases."
            }
          },
          {
            "type": "table",
            "title": "Приклади відмін",
            "rows": [
              [
                "vyras (чоловік, -as) — I відміна",
                "vyro, vyrui, vyrą..."
              ],
              [
                "žuvis (риба, -is) — III відміна",
                "žuvies, žuviai, žuvį..."
              ]
            ],
            "en": {
              "title": "Declension Examples"
            }
          }
        ],
        "titleEn": "The Five Noun Declensions — A2"
      },
      {
        "id": "budvardziu-linksniavimas",
        "title": "Būdvardžių Linksniavimas — A2",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники відмінюються за тими самими сімома відмінками, узгоджуючись з іменником у роді, числі й відмінку — жодної незмінної форми немає.",
            "en": {
              "text": "Adjectives decline through the same seven cases, agreeing with the noun in gender, number, and case — there's no invariant form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "geras vyras / gero vyro / geram vyrui",
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
        "id": "ilgosios-trumposios-budvardziu-formos",
        "title": "Ilgosios ir Trumposios Formos — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники мають дві форми: коротку (невизначену) й довгу з додатковою часткою -asis/-oji (визначену) — довга форма позначає конкретний, відомий предмет, майже як означений артикль, вбудований у саме слово.",
            "en": {
              "text": "Adjectives have two forms: short (indefinite) and long with an added -asis/-oji particle (definite) — the long form marks a specific, known item, almost like a definite article built right into the word."
            }
          },
          {
            "type": "table",
            "title": "Коротка проти довгої форми",
            "rows": [
              [
                "geras vyras (короткa, 'якийсь добрий чоловік')",
                "невизначена форма"
              ],
              [
                "gerasis vyras (довга, 'той самий добрий чоловік')",
                "визначена форма"
              ]
            ],
            "en": {
              "title": "Short vs. Long Form"
            }
          }
        ],
        "titleEn": "Long and Short Adjective Forms — B1"
      },
      {
        "id": "genityvo-po-neigimo",
        "title": "Kilmininkas Po Neigimo — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "У заперечному реченні прямий додаток обов'язково переходить у родовий відмінок замість знахідного — та сама конструкція, що й у слов'янських мовах, успадкована з праіндоєвропейської.",
            "en": {
              "text": "In a negated sentence, the direct object obligatorily switches to the genitive case instead of the accusative — the same construction found in Slavic languages, inherited from Proto-Indo-European."
            }
          },
          {
            "type": "table",
            "title": "Знахідний проти родового",
            "rows": [
              [
                "Aš matau knygą. (знахідний, ствердне)",
                "Я бачу книгу."
              ],
              [
                "Aš nematau knygos. (родовий, заперечне)",
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
        "id": "veiksmazodziu-priešdeliai-aspektas",
        "title": "Veiksmažodžių Priešdėliai ir Veikslas — B1",
        "emoji": "⚡",
        "sections": [
          {
            "type": "intro",
            "text": "Префікси на кшталт pa-, su-, iš- надають дієслову доконаного виду, точно як у слов'янських мовах, — ареальна риса, спільна для балто-слов'янського мовного простору.",
            "en": {
              "text": "Prefixes like pa-, su-, iš- give a verb perfective aspect, exactly as in Slavic languages — an areal feature shared across the Balto-Slavic linguistic space."
            }
          },
          {
            "type": "table",
            "title": "Приклад виду",
            "rows": [
              [
                "rašyti (писати, недоконаний) → parašyti (написати, доконаний)",
                "префікс pa- додає доконаність"
              ]
            ],
            "en": {
              "title": "Aspect Example"
            }
          }
        ],
        "titleEn": "Verb Prefixes and Aspect — B1"
      },
      {
        "id": "sangrąžiniai-veiksmazodziai",
        "title": "Sangrąžiniai Veiksmažodžiai — A2",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотні дієслова додають частку -si в кінці слова (чи перед закінченням, якщо є префікс), позначаючи, що дія повертається на підмет.",
            "en": {
              "text": "Reflexive verbs add the particle -si at the end of the word (or before the ending if there's a prefix), marking that the action returns to the subject."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "prausti (мити) → praustis (митися)",
                "зворотна форма з -si"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reflexive Verbs — A2"
      },
      {
        "id": "žodžiu-tvarka-laisva",
        "title": "Laisva Žodžių Tvarka — B1",
        "emoji": "↔️",
        "sections": [
          {
            "type": "intro",
            "text": "Оскільки відмінок, а не позиція в реченні, визначає граматичну роль слова, порядок слів вільніший, ніж в англійській, і використовується переважно для наголосу й теми.",
            "en": {
              "text": "Since case, not position in the sentence, determines a word's grammatical role, word order is freer than in English and is mostly used for emphasis and topic."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Knygą skaitau. (наголос на об'єкті)",
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
        "id": "nera-artikeliu",
        "title": "Nėra Artikelių — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "У литовській немає ані означеного, ані неозначеного артикля — визначеність передається порядком слів, довгою формою прикметника чи контекстом.",
            "en": {
              "text": "Lithuanian has neither a definite nor an indefinite article — definiteness is conveyed by word order, the long adjective form, or context."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Matau vyrą.",
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
        "id": "įvardžiai-linksniuojami",
        "title": "Įvardžių Linksniavimas — A2",
        "emoji": "🔡",
        "sections": [
          {
            "type": "intro",
            "text": "Особові займенники відмінюються за всіма сімома відмінками, часто з формами, дуже відмінними від називного, — нерегулярними, як і в більшості індоєвропейських мов.",
            "en": {
              "text": "Personal pronouns decline through all seven cases, often with forms very different from the nominative — irregular, as in most Indo-European languages."
            }
          },
          {
            "type": "table",
            "title": "aš (я) у відмінках",
            "rows": [
              [
                "aš (наз.) → manęs (род.) → man (дав.) → mane (знах.)",
                "я → мене → мені → мене"
              ]
            ],
            "en": {
              "title": "aš (I) Across Cases"
            }
          }
        ],
        "titleEn": "Pronoun Declension — A2"
      },
      {
        "id": "parodomieji-įvardžiai",
        "title": "Parodomieji Įvardžiai — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Вказівні займенники šis ('цей') і tas ('той') також відмінюються за всіма відмінками й узгоджуються з іменником у роді й числі.",
            "en": {
              "text": "The demonstratives šis ('this') and tas ('that') also decline through all cases and agree with the noun in gender and number."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "šis vyras / šio vyro",
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
        "id": "klausiamieji-įvardžiai",
        "title": "Klausiamieji Įvardžiai — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питальні займенники kas (хто/що), koks (який), kuris (котрий) теж відмінюються за відмінками, узгоджуючись з очікуваною відповіддю.",
            "en": {
              "text": "The interrogative pronouns kas (who/what), koks (what kind), kuris (which one) also decline by case, agreeing with the expected answer."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ko tu nori?",
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
        "id": "skaitvardžiu-linksniavimas",
        "title": "Skaitvardžių Linksniavimas — B1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Числівники також відмінюються за відмінками, як прикметники, — риса, втрачена в більшості сучасних європейських мов, де числа лишаються незмінними.",
            "en": {
              "text": "Numerals also decline by case, like adjectives — a feature lost in most modern European languages, where numbers stay invariant."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "vienas vyras / vieno vyro",
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
        "id": "budvardziu-laipsniavimas",
        "title": "Būdvardžių Laipsniavimas — A2",
        "emoji": "⚖️",
        "sections": [
          {
            "type": "intro",
            "text": "Вищий ступінь утворюється суфіксом -esnis, найвищий — суфіксом -iausias, доданими прямо до основи прикметника, без окремого допоміжного слова.",
            "en": {
              "text": "The comparative is formed with the suffix -esnis, the superlative with the suffix -iausias, added directly to the adjective stem, with no separate helper word."
            }
          },
          {
            "type": "table",
            "title": "Ступені порівняння",
            "rows": [
              [
                "geras → geresnis → geriausias",
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
        "id": "sauksmininko-vartojimas",
        "title": "Šauksmininko Vartojimas — B1",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Кличний відмінок, утрачений у більшості сучасних європейських мов, у литовській активно вживається для звертання й часто має окрему форму, відмінну від називного.",
            "en": {
              "text": "The vocative case, lost in most modern European languages, is actively used in Lithuanian for direct address and often has its own form distinct from the nominative."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Jonai! (звертання до Jonas)",
                "Йоне! (кличний відмінок)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Use of the Vocative Case — B1"
      },
      {
        "id": "prielinksniai-su-linksniais",
        "title": "Prielinksniai su Linksniais — A2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Кожен прийменник вимагає конкретного відмінка іменника, який за ним іде, — su завжди з орудним, be завжди з родовим, без винятків.",
            "en": {
              "text": "Each preposition requires a specific case for the noun that follows it — su always with the instrumental, be always with the genitive, with no exceptions."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "su draugu (орудний)",
                "з другом"
              ],
              [
                "be pinigų (родовий)",
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
        "id": "mažybiniai-priesagos",
        "title": "Mažybinės Priesagos — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувально-пестливі суфікси (-elis, -utis, -ukas) надзвичайно продуктивні й уживаються значно частіше, ніж у більшості європейських мов, — навіть у стандартній, не лише дитячій мові.",
            "en": {
              "text": "Diminutive suffixes (-elis, -utis, -ukas) are extremely productive and used far more often than in most European languages — even in standard, not just child-directed, speech."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "namas → namelis",
                "дім → будиночок"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Diminutive Suffixes — B1"
      },
      {
        "id": "daugiskaitos-formos",
        "title": "Daugiskaitos Formos — A2",
        "emoji": "➕",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється власним набором закінчень для кожної з п'яти відмін і кожного з семи відмінків — граматика множини так само детальна, як і однини.",
            "en": {
              "text": "The plural is formed with its own set of endings for each of the five declensions and each of the seven cases — plural grammar is just as detailed as the singular."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "vyras → vyrai (наз. мн.) → vyrų (род. мн.)",
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
        "id": "bendraties-forma",
        "title": "Bendratis — A1",
        "emoji": "📘",
        "sections": [
          {
            "type": "intro",
            "text": "Інфінітив завжди закінчується на -ti й слугує словниковою формою дієслова, від якої утворюються всі інші форми.",
            "en": {
              "text": "The infinitive always ends in -ti and serves as the dictionary form of the verb, from which all other forms are derived."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kalbėti, skaityti, rašyti",
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
        "id": "priesagu-daryba",
        "title": "Žodžių Daryba Priesagomis — B1",
        "emoji": "🧱",
        "sections": [
          {
            "type": "intro",
            "text": "Численні словотворчі суфікси дозволяють утворювати іменники з дієслів чи прикметників у регулярний, передбачуваний спосіб — продуктивна система деривації.",
            "en": {
              "text": "Numerous derivational suffixes allow forming nouns from verbs or adjectives in a regular, predictable way — a productive derivation system."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mokyti (навчати) → mokytojas (вчитель)",
                "суфікс -tojas утворює діяча"
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
        "id": "sudurtiniai-zodziai",
        "title": "Sudurtiniai Žodžiai — B2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Складні слова поєднують дві основи в одне ціле, часто зі сполучним голосним -a-, зберігаючи внутрішню відмінюваність останнього компонента.",
            "en": {
              "text": "Compound words join two stems into one unit, often with the connecting vowel -a-, keeping the last component internally declinable."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "saulė + lydis → saulėlydis",
                "сонце + захід → захід сонця"
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
        "id": "linksniu-sinkretizmas",
        "title": "Linksnių Sinkretizmas — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "У деяких відмінах форма одного відмінка збігається з формою іншого — наприклад, знахідний множини часто збігається з називним множини для окремих класів іменників.",
            "en": {
              "text": "In some declensions the form of one case coincides with the form of another — for example, the accusative plural often coincides with the nominative plural for certain noun classes."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "vyrai (і наз. мн., і частково знах. мн. в окремих контекстах)",
                "збіг форм відмінків"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Case Syncretism — B2"
      },
      {
        "id": "veiksmazodziu-asmenuotes",
        "title": "Veiksmažodžių Asmenuotės — A2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслова розподіляються на три дієвідміни залежно від закінчення першої особи однини теперішнього часу — кожна дієвідміна має власний набір особових закінчень.",
            "en": {
              "text": "Verbs are sorted into three conjugation classes depending on the first-person-singular present-tense ending — each conjugation has its own set of person endings."
            }
          },
          {
            "type": "table",
            "title": "Три дієвідміни",
            "rows": [
              [
                "-u (dirbu), -iu (kalbu), -au (sakau)",
                "три різні типи закінчення першої особи"
              ]
            ],
            "en": {
              "title": "Three Conjugations"
            }
          }
        ],
        "titleEn": "Verb Conjugation Classes — A2"
      },
      {
        "id": "kircio-vietos-kaita",
        "title": "Kirčio Vietos Kaita — B2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "У багатьох парадигмах наголос рухається між різними складами залежно від відмінка чи числа за одним з чотирьох фіксованих акцентних типів — ще одна архаїчна риса, успадкована з праіндоєвропейської.",
            "en": {
              "text": "In many paradigms the stress moves between different syllables depending on case or number, following one of four fixed accent-paradigm types — another archaic feature inherited from Proto-Indo-European."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "galvà (наз., наголос на кінці) → gálvą (знах., наголос зсунувся)",
                "рухомий наголос за акцентним типом"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Mobile Stress Paradigms — B2"
      },
      {
        "id": "rikšme-linksniu-vartojimas",
        "title": "Linksnių Reikšmės be Prielinksnių — B1",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Сам відмінок без жодного прийменника може передавати значення часу, знаряддя чи способу — місцевий відмінок сам виражає 'де', орудний сам виражає 'чим'.",
            "en": {
              "text": "The case alone, with no preposition at all, can convey meaning of time, instrument, or manner — the locative alone expresses 'where', the instrumental alone expresses 'by what means'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Vasarą aš keliauju. (знахідний без прийменника = 'влітку')",
                "Влітку я подорожую."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Case Meaning Without Prepositions — B1"
      },
      {
        "id": "daiktavardziu-gimine",
        "title": "Daiktavardžių Giminė — A1",
        "emoji": "⚥",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники мають лише два роди — чоловічий і жіночий; середнього роду серед іменників немає взагалі, на відміну від багатьох інших слов'янських і балтійських сусідів.",
            "en": {
              "text": "Nouns have only two genders — masculine and feminine; there's no neuter gender among nouns at all, unlike many other Slavic and Baltic neighbors."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "vyras (ч.р.) / moteris (ж.р.)",
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
        "id": "dalyviu-vietoj-salutini-sakiniu",
        "title": "Dalyviai Vietoj Šalutinių Sakinių — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприкметник, узгоджений за відмінком з означуваним іменником, часто заміняє ціле відносне підрядне речення — писемна литовська уникає надмірної кількості 'kuris' ('котрий') саме завдяки цій компактнішій стратегії.",
            "en": {
              "text": "A participle, agreeing in case with the noun it modifies, often replaces an entire relative clause — written Lithuanian avoids overusing 'kuris' ('which') precisely through this more compact strategy."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "knygą rašantis autorius (замість 'autorius, kuris rašo knygą')",
                "автор, що пише книгу"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Participles Replacing Relative Clauses — B2"
      },
      {
        "id": "netiesioginė-kalba-dalyviais",
        "title": "Netiesioginė Kalba su Dalyviais — B2",
        "emoji": "🗣️",
        "sections": [
          {
            "type": "intro",
            "text": "Непряму мову часто передають не підрядним реченням із сполучником, а дієприкметниковою конструкцією — балтійська ареальна стратегія, паралельна до непрямого способу латиської, хоч і досягнута інакше.",
            "en": {
              "text": "Reported speech is often expressed not with a conjunction-introduced subordinate clause but with a participial construction — a Balto-areal strategy paralleling Latvian's oblique mood, though achieved differently."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Jis sakė esąs pavargęs. (дієприкметник esąs, замість 'kad jis yra pavargęs')",
                "Він сказав, що втомлений."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reported Speech via Participles — B2"
      },
      {
        "id": "skaitvardžiu-daiktavardžiu-suderinimas",
        "title": "Skaitvardžių ir Daiktavardžių Derinimas — B1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Іменник після числівника узгоджується по-різному залежно від самого числа: 1 вимагає називного однини, 2-9 — називного множини, а 10 і більше — родового множини.",
            "en": {
              "text": "The noun after a numeral agrees differently depending on the number itself: 1 requires nominative singular, 2-9 nominative plural, and 10 and above genitive plural."
            }
          },
          {
            "type": "table",
            "title": "Каскад узгодження",
            "rows": [
              [
                "vienas vyras (наз. одн.)",
                "один чоловік"
              ],
              [
                "du vyrai (наз. мн.)",
                "два чоловіки"
              ],
              [
                "dešimt vyrų (род. мн.)",
                "десять чоловіків"
              ]
            ],
            "en": {
              "title": "Agreement Cascade"
            }
          }
        ],
        "titleEn": "Numeral-Noun Case Agreement — B1"
      },
      {
        "id": "dviskaita-liekanos",
        "title": "Dviskaitos Liekanos — B2",
        "emoji": "👥",
        "sections": [
          {
            "type": "intro",
            "text": "Праіндоєвропейське двоїне число, яке позначало саме два предмети окремою граматичною формою, зникло зі стандартної мови, але лишило сліди в діалектах і в кількох застиглих виразах.",
            "en": {
              "text": "The Proto-Indo-European dual number, which marked exactly two items with a dedicated grammatical form, has vanished from the standard language but left traces in dialects and a few fixed expressions."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "dviese (застигла форма 'удвох', слід колишнього двоїни)",
                "діалектний/застиглий залишок двоїни"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Vestiges of the Dual Number — B2"
      },
      {
        "id": "si-dalelytes-vieta-su-priešdeliais",
        "title": "-si Dalelytės Vieta su Priešdėliais — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Коли зворотне дієслово має ще й префікс, частка -si переміщується з кінця слова й вставляється між префіксом і коренем, а не лишається на своєму звичному місці.",
            "en": {
              "text": "When a reflexive verb also has a prefix, the particle -si moves from the end of the word and is inserted between the prefix and the root, instead of staying in its usual position."
            }
          },
          {
            "type": "table",
            "title": "Приклад переміщення",
            "rows": [
              [
                "rašytis (звичайне зворотне) → užsirašyti (з префіксом, -si всередині)",
                "-si переміщується всередину слова"
              ]
            ],
            "en": {
              "title": "Movement Example"
            }
          }
        ],
        "titleEn": "The Position of -si with Prefixes — B2"
      },
      {
        "id": "kalbos-grynumas-neologizmai",
        "title": "Kalbos Grynumas ir Neologizmai — B2",
        "emoji": "🧼",
        "sections": [
          {
            "type": "intro",
            "text": "Литовська мовна політика активно уникає прямих запозичень, натомість утворюючи власні неологізми з питомих коренів, — там, де інші мови просто запозичують слово, литовська зазвичай його перекладає.",
            "en": {
              "text": "Lithuanian language policy actively avoids direct loanwords, instead coining its own neologisms from native roots — where other languages simply borrow a word, Lithuanian typically translates it."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kompiuteris (все ж запозичене), але šaldytuvas ('холодильник', власний корінь замість 'refrigerator')",
                "приклад власного словотвору"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Language Purism and Neologisms — B2"
      },
      {
        "id": "aukstaiciu-zemaiciu-tarmes",
        "title": "Aukštaičių ir Žemaičių Tarmės — B2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Аукштайтський діалект ліг в основу літературної мови, тоді як жемайтський розходиться настільки сильно — інша система голосних, інша інтонація, — що деякі лінгвісти вважають його окремою мовою, а не діалектом.",
            "en": {
              "text": "The Aukštaitian dialect forms the basis of the literary standard, while Žemaitian diverges so strongly — a different vowel system, different intonation — that some linguists consider it a separate language rather than a dialect."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Стандартна литовська базується на аукштайтському діалекті.",
                "жемайтський лишається окремим мовним острівцем"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Aukštaitian and Žemaitian Dialects — B2"
      },
      {
        "id": "pagoniska-leksika",
        "title": "Pagoniškos Kilmės Leksika — B2",
        "emoji": "⚡",
        "sections": [
          {
            "type": "intro",
            "text": "У побутовій лексиці й топоніміці збереглися сліди дохристиянської балтійської міфології — імена язичницьких божеств і священних явищ природи, які пережили офіційну християнізацію XIV століття.",
            "en": {
              "text": "Everyday vocabulary and place names preserve traces of pre-Christian Baltic mythology — the names of pagan deities and sacred natural phenomena that survived the official 14th-century Christianization."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Perkūnas (бог грому, досі слово для 'грому' в народній мові)",
                "язичницьке божество, збережене в лексиці"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Pre-Christian Mythological Vocabulary — B2"
      },
      {
        "id": "linksniu-sinonimija-su-prielinksniais",
        "title": "Linksnio ir Prielinksnio Sinonimija — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Іноді той самий зміст можна передати або самим відмінком, або відмінком з прийменником — вибір позначає тонку різницю в стилі чи точності, а не інше значення.",
            "en": {
              "text": "Sometimes the same meaning can be conveyed either with the case alone or with the case plus a preposition — the choice marks a subtle difference in style or precision, not a different meaning."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "vasarą (просто знах.) vs per vasarą (знах. з прийменником)",
                "'влітку' двома трохи різними способами"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Case vs. Preposition Synonymy — B2"
      },
      {
        "id": "veikslo-poriniai-veiksmazodziai",
        "title": "Veikslo Poriniai Veiksmažodžiai — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Багато дієслів існують парами доконаного/недоконаного виду, утвореними додаванням чи зміною префікса, — паралель до слов'янського видового протиставлення, хоч і виникла незалежно в балтійській гілці.",
            "en": {
              "text": "Many verbs exist in perfective/imperfective pairs formed by adding or changing a prefix — a parallel to the Slavic aspectual opposition, though it arose independently in the Baltic branch."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "statyti (будувати) → pastatyti (побудувати)",
                "видова пара"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Aspectual Verb Pairs — B1"
      },
      {
        "id": "bendraties-su-reikia-privalo",
        "title": "Bendratis su reikia, privalo — A2",
        "emoji": "☑️",
        "sections": [
          {
            "type": "intro",
            "text": "Безособове reikia ('треба') плюс інфінітив виражає необхідність без граматичного підмета — той, хто мусить, стоїть у давальному відмінку, а не в називному.",
            "en": {
              "text": "The impersonal reikia ('it's necessary') plus infinitive expresses necessity with no grammatical subject — the person who must act stands in the dative, not the nominative."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Man reikia eiti.",
                "Мені треба йти."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Impersonal Necessity with reikia — A2"
      },
      {
        "id": "asmenuojamosios-ir-neasmenuojamosios-formos",
        "title": "Asmenuojamosios ir Neasmenuojamosios Formos — B2",
        "emoji": "🧮",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслівна система чітко ділиться на відмінювані особові форми (часи, способи) і невідмінювані форми (інфінітив, дієприслівники) — друга група в литовській значно більша й продуктивніша, ніж в українській.",
            "en": {
              "text": "The verb system is clearly split into conjugated personal forms (tenses, moods) and non-personal forms (infinitive, converbs) — the second group is significantly larger and more productive in Lithuanian than in Ukrainian."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kalba (особова форма) vs kalbėdamas (неособова форма)",
                "особова проти неособової форми"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Finite and Non-Finite Verb Forms — B2"
      },
      {
        "id": "įnagininko-be-prielinksnio-vartojimas",
        "title": "Įnagininkas be Prielinksnio — B1",
        "emoji": "🛠️",
        "sections": [
          {
            "type": "intro",
            "text": "Орудний відмінок без жодного прийменника самостійно виражає знаряддя дії, маршрут руху чи спосіб дії — багатофункціональність, притаманна цьому відмінку в усіх балто-слов'янських мовах.",
            "en": {
              "text": "The instrumental case with no preposition at all independently expresses the instrument of an action, a route of movement, or manner — a multifunctionality typical of this case across all Balto-Slavic languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Einu keliu. (маршрут, орудний без прийменника)",
                "Я йду дорогою."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Bare Instrumental Case — B1"
      },
      {
        "id": "vietininko-postpoziciniai-liekanai",
        "title": "Postpozicinio Vietininko Liekanos — B2",
        "emoji": "🏠",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька застиглих слів зберегли давню постпозиційну форму місцевого відмінка (з колишньою часткою -n, приєднаною до кінця слова) — свідчення того, як виникав сучасний, простіший місцевий відмінок.",
            "en": {
              "text": "A few fossilized words preserve the old postpositional form of the locative case (with a former particle -n attached to the end of the word) — evidence of how the modern, simpler locative arose."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "namie ('вдома', застигла постпозиційна форма)",
                "історичний слід постпозиційного місцевого"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Vestiges of the Postpositional Locative — B2"
      },
      {
        "id": "sudetiniai-laikai-su-buti",
        "title": "Sudėtiniai Laikai su būti — B2",
        "emoji": "🧱",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово būti ('бути') плюс пасивний дієприкметник минулого часу утворюють складений перфектний пасив, схожий на конструкції з 'бути' в інших європейських мовах, але з литовською деталізацією узгодження.",
            "en": {
              "text": "The verb būti ('to be') plus the past passive participle forms a compound perfect passive, similar to 'be'-constructions in other European languages, but with Lithuanian-level agreement detail."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Knyga yra parašyta.",
                "Книга написана."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Compound Tenses with būti — B2"
      },
      {
        "id": "dalyviu-lyciu-derinimas",
        "title": "Dalyvių Derinimas — B2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприкметник узгоджується з означуваним іменником одразу за трьома категоріями — родом, числом і відмінком, — на відміну від невідмінюваних дієприслівникових форм pusdalyvis і padalyvis.",
            "en": {
              "text": "A participle agrees with the noun it modifies across three categories at once — gender, number, and case — unlike the uninflected converb forms pusdalyvis and padalyvis."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "skaitanti moteris / skaitančios moters",
                "жінка, яка читає / жінки, яка читає (родовий)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Participle Agreement — B2"
      },
      {
        "id": "bendraties-vardažodinis-vartojimas",
        "title": "Bendratis Kaip Vardažodis — B2",
        "emoji": "📘",
        "sections": [
          {
            "type": "intro",
            "text": "Інфінітив може сам виступати підметом речення, поводячись як іменник, — без потреби в окремому дієслівному іменнику типу українського 'ходіння'.",
            "en": {
              "text": "The infinitive can itself serve as the subject of a sentence, behaving like a noun — with no need for a separate verbal noun like Ukrainian 'ходіння'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Skaityti yra smagu.",
                "Читати весело (буквально 'читати є весело')."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Infinitive as a Noun — B2"
      },
      {
        "id": "mandagumo-formos-jus",
        "title": "Mandagumo Formos: Jūs — A2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Ввічливе звертання до однієї особи передається займенником множини jūs з узгодженням дієслова у множині — та сама стратегія множини-як-поваги, що й у слов'янських мовах.",
            "en": {
              "text": "Polite address to one person is expressed with the plural pronoun jūs and plural verb agreement — the same plural-as-respect strategy found in Slavic languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ar jūs kalbate angliškai?",
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
        "id": "kreipiniu-sakinio-struktura",
        "title": "Kreipinio Sakinio Struktūra — B1",
        "emoji": "📣",
        "sections": [
          {
            "type": "intro",
            "text": "Звертання в кличному відмінку відокремлюється комою й може стояти на будь-якому місці в реченні — на початку, всередині чи в кінці, — без порушення граматики решти речення.",
            "en": {
              "text": "A vocative-case address is set off by a comma and can stand anywhere in the sentence — at the start, in the middle, or at the end — without disrupting the grammar of the rest of the sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ar tu, Jonai, jau valgei?",
                "Ти, Йоне, вже їв?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Vocative Address Placement — B1"
      },
      {
        "id": "dazniniai-veiksmazodziai-su-priesagom",
        "title": "Dažniniai Veiksmažodžiai su Priesagomis — B2",
        "emoji": "🔂",
        "sections": [
          {
            "type": "intro",
            "text": "Окрім спеціального минулого часу на -davo, значення повторюваності можна закодувати ще й окремим суфіксом просто в самому дієслові, утворивши новий, окремий лексичний вид дієслова.",
            "en": {
              "text": "Besides the dedicated past tense in -davo, repetitiveness can also be encoded with a separate suffix built right into the verb itself, forming a new, distinct lexical verb aspect."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mėtyti (кидати неодноразово, похідне від mesti 'кинути')",
                "лексична ітеративність через суфікс"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Frequentative Verb Suffixes — B2"
      },
      {
        "id": "sangrąžiniu-veiksmazodziu-reikšmiu-kaita",
        "title": "Sangrąžinių Veiksmažodžių Reikšmės Kaita — B2",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "У деяких дієсловах частка -si не позначає зворотності взагалі, а повністю змінює лексичне значення дієслова — саме зворотна форма існує без незворотного парного дієслова.",
            "en": {
              "text": "In some verbs the particle -si doesn't mark reflexivity at all, but completely changes the verb's lexical meaning — the reflexive form exists with no non-reflexive counterpart verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "juoktis (сміятися) — нема окремого 'juokti' з тим самим значенням",
                "зворотна форма з власним, незалежним значенням"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reflexive Verbs with Shifted Meaning — B2"
      },
      {
        "id": "linksniu-vartojimas-laiko-israiškai",
        "title": "Linksniai Laiko Reiškimui — B1",
        "emoji": "🕐",
        "sections": [
          {
            "type": "intro",
            "text": "Тривалість чи момент часу можна передати самим відмінком без жодного прийменника: знахідний вказує на тривалість, родовий — на дату чи час доби.",
            "en": {
              "text": "Duration or a point in time can be conveyed by the case alone, with no preposition: the accusative marks duration, the genitive marks a date or time of day."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Aš dirbau visą dieną. (знах., тривалість)",
                "Я працював цілий день."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Case Forms for Expressing Time — B1"
      },
      {
        "id": "tautosakos-formulinis-kalbos-sluoksnis",
        "title": "Tautosakos Formulinė Kalba — B2",
        "emoji": "🎶",
        "sections": [
          {
            "type": "intro",
            "text": "Народні пісні (dainos) зберігають архаїчні граматичні форми й застиглі формули, які вже вийшли з ужитку в повсякденній мові, — мовна капсула часу, що передається з покоління в покоління.",
            "en": {
              "text": "Folk songs (dainos) preserve archaic grammatical forms and fixed formulas already out of use in everyday language — a linguistic time capsule passed down through generations."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Sodauto, lylio (застигла народна пісенна формула-приспів)",
                "архаїчна формула з фольклору"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Formulaic Folk-Song Language — B2"
      },
      {
        "id": "skoliniu-adaptavimas-morfologiskai",
        "title": "Skolinių Morfologinis Pritaikymas — B1",
        "emoji": "🔧",
        "sections": [
          {
            "type": "intro",
            "text": "Ті небагато запозичень, що все ж проникають у мову, обов'язково отримують повну литовську морфологію — рід, відміну, закінчення для всіх семи відмінків — на відміну від мов, що зберігають запозичення незмінними.",
            "en": {
              "text": "The few loanwords that do enter the language always receive full Lithuanian morphology — gender, a declension class, endings for all seven cases — unlike languages that keep loanwords invariant."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kompiuteris → kompiuterio, kompiuteriui... (повністю відмінюється)",
                "запозичення, повністю адаптоване морфологічно"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Morphological Adaptation of Loanwords — B1"
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
        "id": "netaisyklingi-veiksmazodziai",
        "title": "Netaisyklingi Veiksmažodžiai — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька частовживаних дієслів (būti 'бути', eiti 'йти') мають суплетивні форми в різних часах, що не виводяться регулярно з основи інфінітива.",
            "en": {
              "text": "A few common verbs (būti 'to be', eiti 'to go') have suppletive forms in different tenses that can't be regularly derived from the infinitive stem."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярні форми",
            "rows": [
              [
                "esu (я є, не 'būju')",
                "суплетивна форма дієслова būti"
              ]
            ]
          }
        ],
        "titleEn": "Irregular Verbs — B1"
      },
      {
        "id": "netaisyklingas-daugiskaitos-linksniavimas",
        "title": "Netaisyklingas Daiktavardžių Linksniavimas — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька частовживаних іменників мають нерегулярну форму родового відмінка чи множини, яку слід запам'ятовувати окремо, поза загальним правилом відміни.",
            "en": {
              "text": "A few common nouns have an irregular genitive or plural form that must be memorized individually, outside the general declension rule."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "sūnus (син) → sūnaus (не за звичайним зразком)",
                "нерегулярна форма родового"
              ]
            ]
          }
        ],
        "titleEn": "Irregular Noun Declension — B1"
      },
      {
        "id": "fiksuoti-posakiai-tautosakoje",
        "title": "Fiksuoti Posakiai Tautosakoje — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Прислів'я й застиглі вирази зберігають архаїчні граматичні конструкції, які вже вийшли з ужитку в сучасній розмовній мові, і вживаються цілими блоками без граматичного аналізу.",
            "en": {
              "text": "Proverbs and fixed expressions preserve archaic grammatical constructions already out of use in modern spoken language, and are used as whole blocks without grammatical analysis."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kaip pasiklosi, taip išmiegosi.",
                "Як постелиш, так і виспишся (застигла приказка з архаїчними формами)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Fixed Expressions in Folklore — B2"
      }
    ]
  }
];
