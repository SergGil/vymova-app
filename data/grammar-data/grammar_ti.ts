// Vymova — data/grammar-data/grammar_ti.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_TI: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "ናይ ውልቀ ቃላት ኣርእስቲ — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Тигринья, як і амхарська, має окремі форми звертання \"ти\" — одну для чоловіка, іншу для жінки.",
            "en": {
              "text": "Tigrinya, like Amharic, has separate forms of \"you\" — one for addressing a man, another for a woman."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ኣነ (ane)"
              ],
              [
                "ти (до чоловіка / жінки)",
                "ንስኻ / ንስኺ (nsxa / nsxi)"
              ],
              [
                "він / вона",
                "ንሱ / ንሳ (nsu / nsa)"
              ],
              [
                "ми",
                "ንሕና (nḥna)"
              ],
              [
                "ви",
                "ንስኻትኩም (nsxatkum)"
              ],
              [
                "вони",
                "ንሶም (nsom)"
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
        "id": "geez-abugida-script",
        "title": "ፊደል: ግዕዝ — A2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Тигринья записується абугідою ге'ез (fidäl): кожен базовий символ позначає приголосний, а невелика зміна форми вказує на голосний після нього, — фонетично прозоріша система, ніж алфавіт із окремими літерами для голосних.",
            "en": {
              "text": "Tigrinya is written with the Ge'ez abugida (fidäl): each base symbol denotes a consonant, and a small shape modification marks the vowel that follows it — a phonetically more transparent system than an alphabet with separate vowel letters."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ለ (lə) → ሉ (lu) → ሊ (li)",
                "the same consonant, different vowel orders"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Ge'ez Abugida Script — A2"
      },
      {
        "id": "triconsonantal-root-system",
        "title": "ስረ-ቃል: ሰለስተ ተናባቢ — B1",
        "emoji": "🔺",
        "sections": [
          {
            "type": "intro",
            "text": "Як і в інших семітських мовах, більшість слів будується на трьохприголосному корені, що несе базове значення, тоді як голосні, вставлені між приголосними за визначеним шаблоном, уточнюють граматичну форму.",
            "en": {
              "text": "As in other Semitic languages, most words are built on a three-consonant root carrying the basic meaning, while vowels inserted between the consonants according to a fixed template specify the grammatical form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ስ-ብ-ር (корінь 'ламати') → ሰበረ, ይሰብር, ምስባር",
                "the root s-b-r ('break') yields different forms via vowel templates"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Triconsonantal Root System — B1"
      },
      {
        "id": "converb-gerund-system",
        "title": "ገርንድ: ቀዳማይ ግስ — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Тигринья, як і інші ефіопсько-семітські мови, має розвинену систему герундія (converb) — власну дієслівну форму для супровідної чи причинової дії, відмінну від систем арабської чи гебрейської.",
            "en": {
              "text": "Tigrinya, like other Ethiopian Semitic languages, has a developed gerund (converb) system — its own verb form for an accompanying or causal action, distinct from the systems of Arabic or Hebrew."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ጽሒፉ (написавши) — герундій",
                "having written (gerund/converb form)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Gerund/Converb System — B2"
      },
      {
        "id": "negation-circumfix-ay-n",
        "title": "ኣሉታ: ኣይ...ን — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення дієслова утворюється циркумфіксом ኣይ...ን, що охоплює дієслово з обох боків: префікс ኣይ- перед основою й суфікс -ን у кінці.",
            "en": {
              "text": "Verb negation is formed with the circumfix ኣይ...ን, wrapping the verb on both sides: the prefix ኣይ- before the stem and the suffix -ን at the end."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ኣይፈልጥን",
                "я не знаю"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation Circumfix: ኣይ...ን — A2"
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
        "id": "perfect-tense",
        "title": "ፍጹም ግዜ — A1",
        "emoji": "⏪",
        "sections": [
          {
            "type": "intro",
            "text": "Доконаний (перфектний) час — базова форма минулого часу, утворена власним набором закінчень, доданих до кореня, і позначає завершену дію.",
            "en": {
              "text": "The perfect tense is the basic past-tense form, formed with its own set of endings added to the root, marking a completed action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ጽሒፈ",
                "я написав"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Perfect (Basic Past) — A1"
      },
      {
        "id": "imperfect-tense",
        "title": "ዘይፍጹም ግዜ — A2",
        "emoji": "☀️",
        "sections": [
          {
            "type": "intro",
            "text": "Недоконаний час утворюється префіксом, доданим до кореня, і охоплює водночас теперішню й майбутню дію, а також звичну дію.",
            "en": {
              "text": "The imperfect tense is formed with a prefix added to the root, and covers both present and future action, as well as habitual action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "እጽሕፍ",
                "я пишу/писатиму"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Imperfect (Present-Future) — A2"
      },
      {
        "id": "present-progressive-zelo",
        "title": "ህልው ኩነታት: ዘሎ — B1",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія в теперішньому передається герундієм плюс допоміжне дієслово ዘሎ ('перебуваю'), окремим від простого недоконаного часу.",
            "en": {
              "text": "An ongoing present action is expressed with the gerund plus the auxiliary ዘሎ ('am present'), distinct from the plain imperfect tense."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ጽሒፈ ዘሎኹ",
                "я саме пишу"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Progressive: ዘሎ — B1"
      },
      {
        "id": "past-progressive",
        "title": "ዝሓለፈ ቀጻሊ ግዜ — B1",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія в минулому передається герундієм плюс допоміжне дієслово ነበረ ('був') у минулому часі.",
            "en": {
              "text": "An ongoing past action is expressed with the gerund plus the auxiliary ነበረ ('was') in the past tense."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ጽሒፈ ነበርኩ",
                "я писав (тривало)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Past Progressive — B1"
      },
      {
        "id": "jussive-mood",
        "title": "ትእዛዝ: ትእዛዛዊ — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказово-бажальний спосіб (юссив) утворюється власним набором закінчень, відмінним і від перфекта, і від недоконаного часу, для третьої особи та ввічливих наказів.",
            "en": {
              "text": "The jussive mood is formed with its own set of endings, distinct from both the perfect and imperfect, used for third-person and polite commands."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ይጻሓፍ",
                "нехай він напише"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Jussive Mood — A2"
      },
      {
        "id": "imperative-mood",
        "title": "ትእዛዝ ካልኣይ ኣካል — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Прямий наказовий спосіб для другої особи має власну форму, окрему від юссива, з узгодженням за родом і числом того, до кого звертаються.",
            "en": {
              "text": "The direct second-person imperative has its own form, separate from the jussive, agreeing in gender and number with the addressee."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ጽሓፍ! / ጽሓፊ!",
                "Пиши! (до чоловіка / до жінки)"
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
        "id": "negative-perfect",
        "title": "ኣሉታዊ ፍጹም — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення доконаного часу утворюється циркумфіксом ኣይ...ን, приєднаним до основи перфекта.",
            "en": {
              "text": "Negating the perfect tense is formed with the circumfix ኣይ...ን, attached to the perfect stem."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ኣይጸሓፍኩን",
                "я не написав"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negative Perfect — B1"
      },
      {
        "id": "negative-imperfect",
        "title": "ኣሉታዊ ዘይፍጹም — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення недоконаного часу утворюється тим самим циркумфіксом ኣይ...ን, приєднаним до основи недоконаного часу замість перфекта.",
            "en": {
              "text": "Negating the imperfect tense is formed with the same circumfix ኣይ...ን, attached to the imperfect stem instead of the perfect."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ኣይጽሕፍን",
                "я не пишу/не писатиму"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negative Imperfect — B1"
      },
      {
        "id": "potential-kixl",
        "title": "ክእለት: ምኽኣል — B1",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Здатність чи можливість виражається допоміжним дієсловом ክኽእል ('могти'), доданим після основного дієслова в недоконаному часі.",
            "en": {
              "text": "Ability or possibility is expressed with the auxiliary verb ክኽእል ('to be able'), added after the main verb in the imperfect tense."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ክጽሕፍ እኽእል እየ.",
                "Я можу писати."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Potential: ክኽእል — B1"
      },
      {
        "id": "desiderative-fetu",
        "title": "ድልየት: ምድላይ — A2",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Бажання виражається дієсловом ደለየ ('хотіти'), доданим перед основним дієсловом у недоконаному часі.",
            "en": {
              "text": "A wish is expressed with the verb ደለየ ('to want'), added before the main verb in the imperfect tense."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ክጽሕፍ እደሊ እየ.",
                "Я хочу писати."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Desiderative: ደለየ — A2"
      },
      {
        "id": "conditional-ente",
        "title": "ኩነታዊ: እንተ — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовне речення вводиться сполучником እንተ ('якщо'), поставленим на початку підрядного речення перед дієсловом.",
            "en": {
              "text": "A conditional sentence is introduced with the conjunction እንተ ('if'), placed at the start of the subordinate clause before the verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "እንተ ዝናብ ዘሪቡ፣ ኣብ ገዛ ክተርፍ እየ.",
                "Якщо піде дощ, я залишуся вдома."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional: እንተ — B1"
      },
      {
        "id": "infinitive-form",
        "title": "ኣገባብ ስራሕ: ምስራሕ — A2",
        "emoji": "📖",
        "sections": [
          {
            "type": "intro",
            "text": "Інфінітив утворюється префіксом ም-, доданим до кореня, і саме ця форма подається в словниках.",
            "en": {
              "text": "The infinitive is formed with the prefix ም-, added to the root, and this is the form listed in dictionaries."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ምጽሓፍ",
                "писати (інфінітив)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Infinitive: ም- — A2"
      },
      {
        "id": "optative-mood",
        "title": "ትምኒት — B2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Бажальний спосіб для благословень утворюється часткою ይግበር ('нехай буде') перед реченням у юссивній формі, — окрема конструкція для урочистих побажань.",
            "en": {
              "text": "The optative for blessings is formed with the particle ይግበር ('may it be') before a clause in jussive form — a separate construction for solemn wishes."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ኤርትራ ትንበር!",
                "Хай живе Еритрея!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Optative Mood — B2"
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
        "title": "ኣወዳድባ ቃላት: ተገዛኢ-ተሳቢ-ግስ — A2",
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
                "ንሱ መጽሓፍ የንብብ.",
                "Він читає книгу."
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
        "id": "object-suffix-pronouns",
        "title": "ተወሳኺ ተሳቢ ተውላጠ-ስም — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Об'єктний займенник може приєднуватися прямо до дієслова як суфікс, замість окремого слова, — той самий об'єкт передається одним словом разом із дієсловом.",
            "en": {
              "text": "An object pronoun can attach directly to the verb as a suffix, instead of a separate word — the object is conveyed as a single word together with the verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ርኢኹዎ",
                "я побачив його (дієслово + суфікс-об'єкт)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Object Suffix Pronouns — B1"
      },
      {
        "id": "plural-formation-classes",
        "title": "ብዙሕነት: ደገፍቲ ቅርጺ — B1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється або зовнішнім суфіксом (-ታት/-ት), або 'зламаною множиною' — внутрішньою зміною голосних кореня без суфікса, — риса, спільна з арабською та іншими семітськими мовами.",
            "en": {
              "text": "The plural is formed either with an external suffix (-ታት/-ት) or with a 'broken plural' — an internal root vowel change with no suffix — a feature shared with Arabic and other Semitic languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "መጽሓፍ → መጻሕፍቲ (зламана множина)",
                "book → books (broken/internal plural)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Plural Formation: External and Broken — B1"
      },
      {
        "id": "possessive-nay",
        "title": "ናይ: ዋንነት — A2",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійність передається словом ናይ ('належить до'), поставленим перед власником, а не суфіксом чи відмінком.",
            "en": {
              "text": "Possession is expressed with the word ናይ ('belonging to'), placed before the possessor, rather than a suffix or case."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ናይ ኣቦይ መጽሓፍ",
                "батькова книга"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Possession: ናይ — A2"
      },
      {
        "id": "gender-agreement-verb",
        "title": "ጾታ: ስምምዕ ምስ ግስ — A2",
        "emoji": "⚥",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово обов'язково узгоджується з підметом за родом (чоловічий/жіночий) через окреме закінчення, тож звертання до чоловіка й жінки вимагає різної форми того самого дієслова.",
            "en": {
              "text": "The verb obligatorily agrees with the subject in gender (masculine/feminine) through a distinct ending, so addressing a man versus a woman requires a different form of the same verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ትጽሕፍ (вона пише) / ትጽሕፍ (ти, чоловіче, пишеш) — різні контексти",
                "she writes / you (m.) write — gender-marked forms"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Gender Agreement on the Verb — A2"
      },
      {
        "id": "cardinal-numbers",
        "title": "ቁጽሪ: 1-10 — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "table",
            "title": "Числа 1-10",
            "rows": [
              [
                "1",
                "ሓደ"
              ],
              [
                "2",
                "ክልተ"
              ],
              [
                "3",
                "ሰለስተ"
              ],
              [
                "5",
                "ሓሙሽተ"
              ],
              [
                "10",
                "ዓሰርተ"
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
        "id": "demonstratives",
        "title": "ኣመልካቲ ተውላጠ-ስም — A2",
        "emoji": "👉",
        "sections": [
          {
            "type": "table",
            "title": "Вказівні займенники",
            "rows": [
              [
                "цей (ч.р.)",
                "እዚ"
              ],
              [
                "ця (ж.р.)",
                "እዚኣ"
              ],
              [
                "той",
                "እቲ"
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
        "title": "ናይ ሕቶ ቃላት — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "хто",
                "መን"
              ],
              [
                "що",
                "እንታይ"
              ],
              [
                "де",
                "ኣበይ"
              ],
              [
                "коли",
                "መዓስ"
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
        "id": "relative-clause-ze",
        "title": "ዘ-: ዝምድና ዘለዎ ሓረግ — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Означальні (відносні) підрядні речення вводяться префіксом ዝ-/ዘ-, доданим прямо до дієслова, а не окремим відносним займенником.",
            "en": {
              "text": "Relative clauses are introduced by the prefix ዝ-/ዘ-, attached directly to the verb, rather than a separate relative pronoun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "እቲ ዝጽሕፍ ሰብ",
                "чоловік, що пише"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Clause Prefix: ዝ-/ዘ- — B1"
      },
      {
        "id": "comparative-kab",
        "title": "ንጽጽር: ካብ — B1",
        "emoji": "📊",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняльний ступінь утворюється прийменником ካብ ('від'), поставленим перед об'єктом порівняння, а прикметник лишається без зміни.",
            "en": {
              "text": "The comparative is formed with the preposition ካብ ('from'), placed before the compared object, with the adjective staying unchanged."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "እዚ ካብቲ ዝዓበየ እዩ.",
                "Це більше за те."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparative: ካብ ('than') — B1"
      },
      {
        "id": "superlative-kulu",
        "title": "ልዑል ደረጃ: ካብ ኩሉ — B1",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь порівняння утворюється фразою ካብ ኩሉ ('від усього') перед прикметником.",
            "en": {
              "text": "The superlative is formed with the phrase ካብ ኩሉ ('from all') before the adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ካብ ኩሉ ዝዓበየ",
                "найбільший"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Superlative: ካብ ኩሉ — B1"
      },
      {
        "id": "conjunctions",
        "title": "መራኸቢ ቃላት — A1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники",
            "rows": [
              [
                "і",
                "ን-/ከምኡውን"
              ],
              [
                "або",
                "ወይ"
              ],
              [
                "але",
                "ግን"
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
        "id": "adjective-agreement",
        "title": "ስምምዕ ናይ ቅጽል — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники узгоджуються з іменником у роді й числі через власну систему закінчень, поставлені перед іменником.",
            "en": {
              "text": "Adjectives agree with the noun in gender and number through their own system of endings, placed before the noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ጽቡቕ ሰብኣይ / ጽብቕቲ ሰበይቲ",
                "хороший чоловік / хороша жінка"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adjective Agreement — A2"
      },
      {
        "id": "reduplication-intensity",
        "title": "ድግማ: ምድጋም — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Повне подвоєння прикметника чи прислівника підсилює його значення, передаючи інтенсивність без окремого підсилювального слова.",
            "en": {
              "text": "Fully reduplicating an adjective or adverb intensifies its meaning, conveying intensity without a separate intensifying word."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ቀስ ቀስ",
                "дуже повільно (букв. 'повільно-повільно')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reduplication for Intensity — B1"
      },
      {
        "id": "vocative-simple",
        "title": "ጻውዒት — A2",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "При звертанні до когось ім'я вживається без жодних змін, іноді з вигуком ኦ перед ним для урочистого тону.",
            "en": {
              "text": "In direct address, a name is used unchanged, sometimes with the exclamation ኦ before it for a solemn tone."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ኣብርሃም፣ ንዓ!",
                "Абрагаме, приходь!"
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
        "id": "existential-alo",
        "title": "ኣሎ: ህልውና — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Наявність чогось передається дієсловом ኣሎ ('є'), узгодженим за родом і числом, — те саме дієслово, що й у прогресивному часі.",
            "en": {
              "text": "The existence of something is expressed with the verb ኣሎ ('there is'), agreeing in gender and number — the same verb used in the progressive tense."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ብዙሓት ሰባት ኣለዉ.",
                "Там багато людей."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Existential: ኣሎ — A2"
      },
      {
        "id": "question-particle-do",
        "title": "ድዩ: ናይ ሕቶ መልክዕ — B1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні утворюється часткою ድዩ, доданою в кінці речення, узгодженою за родом і числом підмета.",
            "en": {
              "text": "A yes/no question is formed with the particle ድዩ, added at the end of the sentence, agreeing in gender and number with the subject."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ትግርኛ ትዛረብ ዲኻ?",
                "Ти говориш тигринья?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Yes/No Question: ድዩ — B1"
      },
      {
        "id": "prepositions-simple",
        "title": "ቅድመ-ግስ — A2",
        "emoji": "📌",
        "sections": [
          {
            "type": "table",
            "title": "Прийменники",
            "rows": [
              [
                "в/на",
                "ኣብ"
              ],
              [
                "з (разом)",
                "ምስ"
              ],
              [
                "до",
                "ናብ"
              ]
            ],
            "en": {
              "title": "Prepositions"
            }
          }
        ],
        "titleEn": "Simple Prepositions — A2"
      },
      {
        "id": "causative-verb-template",
        "title": "ኣስዓቢ ግስ: ኣ- ቅድመ-ቅጥያ — B2",
        "emoji": "⚙️",
        "sections": [
          {
            "type": "intro",
            "text": "Каузативна форма дієслова утворюється префіксом ኣ-, доданим до кореня в межах системи дієслівних шаблонів, передаючи значення 'змусити зробити'.",
            "en": {
              "text": "The causative form of the verb is formed with the prefix ኣ-, added to the root within the verb-template system, conveying the meaning 'make/cause to do'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ፈለጠ (знати) → ኣፍለጠ (повідомити, 'змусити знати')",
                "to know → to inform ('cause to know')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Causative Verb Template: ኣ- — B2"
      },
      {
        "id": "reflexive-reciprocal-template",
        "title": "ተመላላሲ ግስ: ተ- ቅድመ-ቅጥያ — B2",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотно-взаємна форма дієслова утворюється префіксом ተ-, доданим до кореня, і передає значення дії, спрямованої на себе чи одне одного.",
            "en": {
              "text": "The reflexive-reciprocal form of the verb is formed with the prefix ተ-, added to the root, and conveys an action directed at oneself or at each other."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ሓጸበ (мити) → ተሓጽበ (вмиватися)",
                "to wash → to wash oneself (reflexive)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reflexive-Reciprocal Template: ተ- — B2"
      },
      {
        "id": "diminutive-expression",
        "title": "ንኣሽቱነት: ውሒድ — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувальний відтінок передається окремим прикметником ንእሽቶ ('малий') перед іменником, а не суфіксом, доданим до нього.",
            "en": {
              "text": "A diminutive shade of meaning is conveyed with the separate adjective ንእሽቶ ('small') before the noun, rather than a suffix attached to it."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ንእሽቶ ቆልዓ",
                "малятко (букв. 'мала дитина')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Diminutive: ንእሽቶ — B1"
      },
      {
        "id": "negative-existential-yellon",
        "title": "የልቦን: ኣሉታ ናይ ህልውና — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення наявності передається окремою формою የልቦን ('немає'), а не звичайним циркумфіксом ኣይ...ን, — самостійна заперечна форма для екзистенційних речень.",
            "en": {
              "text": "Negating existence is expressed with the dedicated form የልቦን ('there isn't'), rather than the ordinary circumfix ኣይ...ን — a standalone negative form for existential sentences."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ገንዘብ የልቦን.",
                "Немає грошей."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negative Existential: የልቦን — B1"
      },
      {
        "id": "passive-verb-template",
        "title": "ተገባሪ ግስ: ተ-...-ዐ — B2",
        "emoji": "📥",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивна форма дієслова утворюється тим самим префіксом ተ-, що й зворотно-взаємний стан, поєднаним із конкретним голосним шаблоном, — та сама форма поверхнево, розрізнена лише контекстом і шаблоном кореня.",
            "en": {
              "text": "The passive verb form is formed with the same prefix ተ- used for the reflexive-reciprocal voice, combined with a specific vowel template — the same surface form, distinguished only by context and the root's template."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ተሰብረ",
                "було зламано (пасив)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Passive Verb Template: ተ- — B2"
      },
      {
        "id": "focus-particle-nay",
        "title": "ፍሉይ ኣተኩሮ: እዩ — B2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Наголос на конкретному слові речення передається постановкою його перед допоміжним дієсловом እዩ ('є'), яке саме собою не додає нового значення, лише виділяє попереднє слово.",
            "en": {
              "text": "Emphasis on a specific word in the sentence is conveyed by placing it before the auxiliary እዩ ('is'), which adds no new meaning of its own, only highlighting the preceding word."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ኣቦይ እዩ ዝመጸ.",
                "Саме батько прийшов (наголос на 'батько')."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Focus Construction: እዩ — B2"
      },
      {
        "id": "restrictive-particle-bs",
        "title": "ጥራይ: ገደብ — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Частка ጥራይ ('лише'), додана після слова, обмежує його значення, — типовий приклад того, як частка може модифікувати будь-яку частину мови без зміни її форми.",
            "en": {
              "text": "The particle ጥራይ ('only'), added after a word, restricts its meaning — a typical example of how a particle can modify any part of speech without changing its form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ኣነ ጥራይ",
                "тільки я"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Restrictive Particle: ጥራይ — B1"
      },
      {
        "id": "geez-fidel-detail",
        "title": "ፊደል: 26 መሰረታዊ ምልክታት — B1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Абетка ге'ез налічує понад 30 базових приголосних знаків, кожен із сімома голосними варіантами (ordini), — усього понад 200 складових символів, що робить письмо гнучким, але потребує запам'ятовування великої таблиці.",
            "en": {
              "text": "The Ge'ez alphabet has over 30 base consonant symbols, each with seven vowel variants (orders) — over 200 syllabic symbols in total, making the script flexible but requiring a large table to be memorized."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ሀ-ሁ-ሂ-ሃ-ሄ-ህ-ሆ (сім порядків одного приголосного)",
                "seven vowel orders of a single consonant"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Fidel: Over 200 Syllabic Symbols — B1"
      },
      {
        "id": "aksumite-heritage",
        "title": "መንግስቲ ኣኽሱም — B2",
        "emoji": "🏛️",
        "sections": [
          {
            "type": "intro",
            "text": "Стародавнє Аксумське царство, розташоване на території сучасних тигриньямовних земель, вважається однією з великих цивілізацій стародавнього світу з власними обелісками й ранньою християнізацією IV ст.",
            "en": {
              "text": "The ancient Kingdom of Aksum, located in present-day Tigrinya-speaking territory, is considered one of the great civilizations of the ancient world, with its own obelisks and early 4th-century Christianization."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ሓወልቲ ኣኽሱም (обеліски Аксуму)",
                "the obelisks of Aksum"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Aksumite Heritage — B2"
      },
      {
        "id": "buna-coffee-ceremony",
        "title": "ቡን: ስነ-ስርዓት — B1",
        "emoji": "☕",
        "sections": [
          {
            "type": "intro",
            "text": "Кавова церемонія (буна) — тригодинний ритуал підсмажування, товчення й заварювання кави тричі поспіль, із власною термінологією для кожного етапу, — центральна форма гостинності й спільноти.",
            "en": {
              "text": "The coffee ceremony (buna) is a three-hour ritual of roasting, grinding, and brewing coffee three times in succession, with its own terminology for each stage — a central form of hospitality and community."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ቡን ምስታይ",
                "пити каву (церемоніально)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Buna Coffee Ceremony — B1"
      },
      {
        "id": "injera-tsebhi-cuisine",
        "title": "እንጀራ ምስ ጸብሒ — A2",
        "emoji": "🍛",
        "sections": [
          {
            "type": "intro",
            "text": "Ін'єра — губчастий млинець із тефу, який їдять руками разом із гострим рагу цебхі, — основа щоденного раціону й соціальний спосіб їсти зі спільної тарілки.",
            "en": {
              "text": "Injera is a spongy teff-flour flatbread eaten by hand alongside spicy tsebhi stew — the staple of daily meals and a social way of eating from a shared plate."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "እንጀራ ምስ ጸብሒ ምብላዕ",
                "їсти ін'єру з цебхі"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Injera and Tsebhi Cuisine — A2"
      },
      {
        "id": "orthodox-christian-identity",
        "title": "ተዋህዶ: ሃይማኖታዊ መንነት — B1",
        "emoji": "⛪",
        "sections": [
          {
            "type": "intro",
            "text": "Тевахідо-православне християнство, одна з найдавніших християнських традицій світу, глибоко переплетене з тигриньямовною культурою через власний літургійний календар і мовний зв'язок із класичною мовою ге'ез.",
            "en": {
              "text": "Tewahedo Orthodox Christianity, one of the world's oldest Christian traditions, is deeply interwoven with Tigrinya culture through its own liturgical calendar and linguistic link to the classical Ge'ez language."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ቤተ ክርስትያን ተዋህዶ",
                "тевахідо-православна церква"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Tewahedo Orthodox Christian Identity — B1"
      },
      {
        "id": "geez-liturgical-language",
        "title": "ግዕዝ: ናይ ኣምልኾ ቋንቋ — B2",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Класична мова ге'ез, предок тигриньї, уживається досі як мова богослужіння в церкві, подібно до латини в католицизмі, — мертва розмовна мова, жива літургійно.",
            "en": {
              "text": "Classical Ge'ez, Tigrinya's ancestor language, is still used as the liturgical language of the church, similar to Latin in Catholicism — a dead spoken language, alive liturgically."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ብግዕዝ ምጽላይ",
                "молитися ге'ез"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ge'ez as a Liturgical Language — B2"
      },
      {
        "id": "guayla-traditional-dance",
        "title": "ጓይላ — B1",
        "emoji": "💃",
        "sections": [
          {
            "type": "intro",
            "text": "Гвайла — традиційний танець із характерним рухом плечей і швидким кроком, виконуваний на весіллях і святах, — одна з найвпізнаваніших форм тигриньямовної народної культури.",
            "en": {
              "text": "Guayla is a traditional dance with a characteristic shoulder movement and quick step, performed at weddings and festivals — one of the most recognizable forms of Tigrinya folk culture."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ጓይላ ምስዓም",
                "танцювати гвайла"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Guayla: Traditional Dance — B1"
      },
      {
        "id": "colors",
        "title": "ሕብርታት — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "table",
            "title": "Кольори",
            "rows": [
              [
                "червоний",
                "ቀይሕ"
              ],
              [
                "чорний",
                "ጸሊም"
              ],
              [
                "білий",
                "ጻዕዳ"
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
        "title": "ቁጽሪ: ዓሰርተ — A2",
        "emoji": "🔟",
        "sections": [
          {
            "type": "table",
            "title": "Десятки",
            "rows": [
              [
                "20",
                "ዕስራ"
              ],
              [
                "100",
                "ሚእቲ"
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
        "title": "መዓልትታት ሰሙን — A2",
        "emoji": "📅",
        "sections": [
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "понеділок",
                "ሰኑይ"
              ],
              [
                "п'ятниця",
                "ዓርቢ"
              ],
              [
                "неділя",
                "ሰንበት"
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
        "title": "ስድራቤት — A2",
        "emoji": "👪",
        "sections": [
          {
            "type": "table",
            "title": "Родина",
            "rows": [
              [
                "батько",
                "ኣቦ"
              ],
              [
                "мати",
                "ኣደ"
              ],
              [
                "брат",
                "ሓው"
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
        "title": "ሰላምታ — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "table",
            "title": "Вітання",
            "rows": [
              [
                "Привіт",
                "ሰላም"
              ],
              [
                "Дякую",
                "የቐንየለይ"
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
        "title": "ኩነታት ኣየር — A2",
        "emoji": "☁️",
        "sections": [
          {
            "type": "table",
            "title": "Погода",
            "rows": [
              [
                "сонце",
                "ጸሓይ"
              ],
              [
                "дощ",
                "ዝናብ"
              ],
              [
                "вітер",
                "ንፋስ"
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
        "title": "ኣካላት ኣካላዊ — A2",
        "emoji": "🧍",
        "sections": [
          {
            "type": "table",
            "title": "Частини тіла",
            "rows": [
              [
                "голова",
                "ርእሲ"
              ],
              [
                "рука",
                "ኢድ"
              ],
              [
                "око",
                "ዓይኒ"
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
        "id": "highland-farming-culture",
        "title": "ግራት: ሓረስቶት — B1",
        "emoji": "🌾",
        "sections": [
          {
            "type": "intro",
            "text": "Тераsove сільське господарство в гористих регіонах формує основу традиційного побуту, з власною лексикою для орних полів, волового плуга й сезонних дощів, від яких залежить урожай.",
            "en": {
              "text": "Terraced farming in mountainous regions forms the backbone of traditional life, with dedicated vocabulary for plowed fields, the ox-drawn plow, and the seasonal rains the harvest depends on."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ግራት ምሕራስ",
                "орати поле"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Highland Farming Culture — B1"
      },
      {
        "id": "clothing-vocabulary",
        "title": "ክዳን — A2",
        "emoji": "👗",
        "sections": [
          {
            "type": "table",
            "title": "Одяг",
            "rows": [
              [
                "традиційна сукня",
                "ሓበሻ ክዳን"
              ],
              [
                "шаль",
                "ነጠላ"
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
        "title": "እንስሳታት — A2",
        "emoji": "🐄",
        "sections": [
          {
            "type": "table",
            "title": "Тварини",
            "rows": [
              [
                "корова",
                "ላም"
              ],
              [
                "собака",
                "ከልቢ"
              ],
              [
                "коза",
                "ኣጣል"
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
        "title": "ኣንፈታት — B1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "table",
            "title": "Сторони світу",
            "rows": [
              [
                "північ",
                "ሰሜን"
              ],
              [
                "південь",
                "ደቡብ"
              ],
              [
                "схід",
                "ምብራቕ"
              ],
              [
                "захід",
                "ምዕራብ"
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
        "id": "tigrinya-two-nation-status",
        "title": "ትግርኛ: ኣብ ክልተ ሃገራት — B2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Тигринья — офіційна робоча мова Еритреї та регіональна мова провінції Тигреу Ефіопії, тож єдина мовна спільнота поширена по обидва боки міжнародного кордону, з незначними діалектними відмінностями.",
            "en": {
              "text": "Tigrinya is an official working language of Eritrea and the regional language of Ethiopia's Tigray province, so a single language community spans both sides of an international border, with minor dialectal differences."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ትግራይ (ክልል ኣብ ኢትዮጵያ)",
                "Tigray (a region in Ethiopia)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Tigrinya Across Two Countries — B2"
      },
      {
        "id": "diaspora-vocabulary",
        "title": "ዲያስፖራ: ኣብ ወጻኢ ዝነብሩ — B2",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Значна тигриньямовна діаспора живе в Європі, Північній Америці та Ізраїлі, з активними культурними й релігійними громадами, що підтримують мову й церковну традицію поза межами Африканського Рогу.",
            "en": {
              "text": "A significant Tigrinya-speaking diaspora lives in Europe, North America, and Israel, with active cultural and religious communities sustaining the language and church tradition outside the Horn of Africa."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ኣብ ወጻኢ ዝነብሩ ትግርኛ ተዛረብቲ",
                "Tigrinya speakers living abroad"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Tigrinya Diaspora — B2"
      },
      {
        "id": "food-vocabulary-extra",
        "title": "ምግቢ: ተስፋ — A2",
        "emoji": "🍞",
        "sections": [
          {
            "type": "table",
            "title": "Їжа",
            "rows": [
              [
                "хліб",
                "ባኒ"
              ],
              [
                "вода",
                "ማይ"
              ],
              [
                "мед",
                "መዓር"
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
        "id": "tais-textile-title-titles",
        "title": "ማዕረግ: ካህን፣ ሸማግለ — B2",
        "emoji": "🎖️",
        "sections": [
          {
            "type": "intro",
            "text": "Шаноблива термінологія включає ካህን (священник) і ሸማግለ (шановний старійшина), уживані перед ім'ям, — окремий пласт лексики поваги, тісно пов'язаний і з церковною, і з громадською ієрархією.",
            "en": {
              "text": "Honorific vocabulary includes ካህን (priest) and ሸማግለ (respected elder), used before a name — a distinct layer of respect vocabulary tightly linked to both church and community hierarchy."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ሸማግለ ኣብርሃም",
                "шановний старійшина Абрагам"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Honorific Titles: ካህን, ሸማግለ — B2"
      },
      {
        "id": "mai-jah-jah-waterfall",
        "title": "ደብረ ዳሞ: ዓቐብ ገዳም — B2",
        "emoji": "⛰️",
        "sections": [
          {
            "type": "intro",
            "text": "Монастир Дебре-Дамо, доступний лише через вертикальний підйом по мотузці на прямовисну скелю, — символ давньої монастирської аскетичної традиції й видовищної географії тигриньямовних гір.",
            "en": {
              "text": "Debre Damo monastery, accessible only by a vertical rope climb up a sheer cliff, symbolizes the ancient monastic ascetic tradition and the dramatic geography of the Tigrinya-speaking highlands."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ደብረ ዳሞ ብገመድ ምድያብ",
                "піднятися до Дебре-Дамо по мотузці"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Debre Damo: The Cliff Monastery — B2"
      },
      {
        "id": "coordinating-conjunctions-extra",
        "title": "ተወሳኺ መራኸቢ ቃላት — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Сполучник ስለዚ ('тому') і частка ምኽንያቱ ('тому що') розширюють базовий набір ን-/ወይ/ግን, додаючи причинові й наслідкові зв'язки.",
            "en": {
              "text": "The conjunction ስለዚ ('therefore') and the particle ምኽንያቱ ('because') extend the basic ን-/ወይ/ግን set, adding causal and consequential links."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ኣብ ገዛ ኣለኹ፣ ምኽንያቱ ዝናብ ይዘንብ ኣሎ.",
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
        "id": "irregular-verb-alo",
        "title": "ዘይስሩዕ ግስ: ኣሎ — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово ኣሎ ('є/існувати') відмінюється за окремою, неповною парадигмою, відмінною від звичайних тришаблонних дієслів, і не має власного інфінітива.",
            "en": {
              "text": "The verb ኣሎ ('to be/exist') conjugates according to a separate, defective paradigm unlike ordinary three-consonant verbs, and has no infinitive form of its own."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярна парадигма",
            "rows": [
              [
                "ኣሎ (є) — немає інфінітива",
                "there is/exists — no infinitive form exists"
              ]
            ],
            "en": {
              "title": "Irregular Paradigm"
            }
          }
        ],
        "titleEn": "Irregular Verb: ኣሎ ('to exist') — B1"
      },
      {
        "id": "irregular-plural-sab",
        "title": "ዘይስሩዕ ብዙሕነት: ሰብ → ሰባት — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Іменник ሰብ ('людина') утворює множину суфіксом -ት (ሰባት), не зазнаючи типової зламаної множини чи стандартного зовнішнього суфікса -ታት, — виняток, що вивчається окремо.",
            "en": {
              "text": "The noun ሰብ ('person') forms its plural with the suffix -ት (ሰባት), following neither a typical broken plural nor the standard external -ታት suffix — an exception learned individually."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярна множина",
            "rows": [
              [
                "ሰብ → ሰባት (не за типовою моделлю)",
                "person → people (irregular, non-standard suffix)"
              ]
            ],
            "en": {
              "title": "Irregular Plural"
            }
          }
        ],
        "titleEn": "Irregular Plural: ሰብ → ሰባት — B2"
      },
      {
        "id": "irregular-comparative-tsbuq",
        "title": "ዘይስሩዕ ንጽጽር: ጽቡቕ → ዝሓሸ — B1",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник ጽቡቕ ('добрий') має супплетивний порівняльний ступінь ዝሓሸ ('кращий') замість очікуваної регулярної конструкції з ካብ.",
            "en": {
              "text": "The adjective ጽቡቕ ('good') has a suppletive comparative ዝሓሸ ('better') instead of the expected regular construction with ካብ."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярний порівняльний ступінь",
            "rows": [
              [
                "ጽቡቕ → ዝሓሸ (супплетивне)",
                "good → better (suppletive)"
              ]
            ],
            "en": {
              "title": "Irregular Comparative"
            }
          }
        ],
        "titleEn": "Irregular Comparative: ጽቡቕ → ዝሓሸ — B1"
      }
    ]
  }
];
