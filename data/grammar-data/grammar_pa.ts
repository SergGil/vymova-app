// Vymova — data/grammar-data/grammar_pa.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_PA: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "ਨਿੱਜੀ ਪੜਨਾਂਵ — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У панджабі займенник третьої особи \"ਉਹ\" (oh) не змінюється за родом чи числом — \"він\", \"вона\" і \"вони\" різняться лише формою дієслова.",
            "en": {
              "text": "In Punjabi, the third-person pronoun \"ਉਹ\" (oh) doesn't change for gender or number — \"he\", \"she\", and \"they\" are distinguished only by the verb form."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ਮੈਂ (maiṁ)"
              ],
              [
                "ти (зв. / ввічл.)",
                "ਤੂੰ (tūṁ) / ਤੁਸੀਂ (tusīṁ)"
              ],
              [
                "він / вона",
                "ਉਹ (oh)"
              ],
              [
                "ми",
                "ਅਸੀਂ (asīṁ)"
              ],
              [
                "ви",
                "ਤੁਸੀਂ (tusīṁ)"
              ],
              [
                "вони",
                "ਉਹ (oh)"
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
        "id": "sur-tini-tonalnist",
        "title": "ਸੁਰ: ਤਿੰਨ ਟੋਨ — A1",
        "emoji": "🎵",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від майже всіх інших індоарійських мов, панджабі — тональна мова: три тони (рівний, високий, низький) розрізняють значення складів, що виникли внаслідок історичної втрати придихових приголосних.",
            "en": {
              "text": "Unlike almost every other Indo-Aryan language, Punjabi is tonal: three tones (level, high, low) distinguish the meaning of syllables, arising from the historical loss of aspirated consonants."
            }
          },
          {
            "type": "table",
            "title": "Приклад тонового розрізнення",
            "rows": [
              [
                "ਕੋੜਾ (низький тон, 'батіг') vs ਕੋਰਾ (рівний тон, 'чистий')",
                "той самий запис голосних, різний тон"
              ]
            ],
            "en": {
              "title": "Tone Distinction Example"
            }
          }
        ],
        "titleEn": "Tone: Three-Way Contrast — A1"
      },
      {
        "id": "gurmukhi-shahmukhi",
        "title": "ਗੁਰਮੁਖੀ ਤੇ ਸ਼ਾਹਮੁਖੀ — A2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Та сама мова записується двома цілком різними абетками залежно від країни: ґурмукхі (пов'язана із сикхізмом) в Індії й шахмукхі (перська-арабська) у Пакистані, — той самий усний панджабі, дві незалежні писемні традиції.",
            "en": {
              "text": "The same language is written in two completely different alphabets depending on the country: Gurmukhi (associated with Sikhism) in India and Shahmukhi (Perso-Arabic) in Pakistan — the same spoken Punjabi, two independent writing traditions."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ਪੰਜਾਬੀ (ґурмукхі) = پنجابی (шахмукхі)",
                "той самий напис 'панджабі' двома абетками"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Gurmukhi and Shahmukhi: Two Scripts — A2"
      },
      {
        "id": "gender-two-way",
        "title": "ਲਿੰਗ: ਦੋ ਪ੍ਰਕਾਰ — A1",
        "emoji": "⚥",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники мають чоловічий або жіночий рід, і прикметники та дієслова узгоджуються з ним через окреме закінчення — та сама двородова система, що й у гінді.",
            "en": {
              "text": "Nouns are masculine or feminine, and adjectives and verbs agree with this through a dedicated ending — the same two-gender system found in Hindi."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ਮੁੰਡਾ ਚੰਗਾ ਹੈ। (ч.р.) / ਕੁੜੀ ਚੰਗੀ ਹੈ। (ж.р.)",
                "Хлопець хороший. / Дівчина хороша."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Gender: Two-Way System — A1"
      },
      {
        "id": "negasion-i-preguntas",
        "title": "ਨਾਂਹ ਤੇ ਸਵਾਲ — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється часткою ਨਹੀਂ (nahīṁ) перед дієсловом; питання без питального слова передаються лише висхідною інтонацією.",
            "en": {
              "text": "Negation is formed with the particle ਨਹੀਂ (nahīṁ) before the verb; yes/no questions are marked with rising intonation alone."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ਮੈਨੂੰ ਨਹੀਂ ਪਤਾ।",
                "Я не знаю."
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
        "id": "present-general-da",
        "title": "ਆਮ ਵਰਤਮਾਨ: -ਦਾ ਹੈ — A1",
        "emoji": "☀️",
        "sections": [
          {
            "type": "intro",
            "text": "Загальний теперішній час утворюється дієприкметником на -ਦਾ, узгодженим з родом підмета, плюс допоміжне ਹੈ ('є').",
            "en": {
              "text": "The general present tense is formed with the participle in -ਦਾ, agreeing with the subject's gender, plus the auxiliary ਹੈ ('is')."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ਮੈਂ ਜਾਂਦਾ ਹਾਂ।",
                "Я йду (взагалі)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "General Present: -ਦਾ ਹੈ — A1"
      },
      {
        "id": "present-continuous",
        "title": "ਚਾਲੂ ਵਰਤਮਾਨ: ਰਿਹਾ ਹੈ — A1",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія в момент мовлення передається дієприкметником на -ਰਿਹਾ, узгодженим з родом, плюс допоміжне ਹੈ.",
            "en": {
              "text": "An action in progress at the moment of speaking is expressed with the participle in -ਰਿਹਾ, agreeing with gender, plus the auxiliary ਹੈ."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ਮੈਂ ਜਾ ਰਿਹਾ ਹਾਂ।",
                "Я саме йду."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Continuous: ਰਿਹਾ ਹੈ — A1"
      },
      {
        "id": "simple-past-ergative",
        "title": "ਭੂਤਕਾਲ: ਨੇ — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "У перехідному минулому часі підмет отримує ергативну частку ਨੇ, а дієслово узгоджується не з підметом, а з прямим додатком за родом і числом, — розщеплена ергативність, спільна риса з гінді й маратхі.",
            "en": {
              "text": "In the transitive past tense, the subject takes the ergative particle ਨੇ, and the verb agrees not with the subject but with the direct object in gender and number — split ergativity, a feature shared with Hindi and Marathi."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ਮੁੰਡੇ ਨੇ ਕਿਤਾਬ ਪੜ੍ਹੀ।",
                "Хлопець прочитав книгу (дієслово узгоджене з 'книга', ж.р.)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Simple Past: Ergative ਨੇ — B1"
      },
      {
        "id": "past-continuous",
        "title": "ਚਾਲੂ ਭੂਤਕਾਲ: ਰਿਹਾ ਸੀ — B1",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія в минулому передається дієприкметником на -ਰਿਹਾ плюс допоміжне ਸੀ ('був') у минулому часі.",
            "en": {
              "text": "An ongoing past action is expressed with the participle in -ਰਿਹਾ plus the past auxiliary ਸੀ ('was')."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ਮੈਂ ਜਾ ਰਿਹਾ ਸੀ।",
                "Я саме йшов (тоді)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Past Continuous: ਰਿਹਾ ਸੀ — B1"
      },
      {
        "id": "future-tense",
        "title": "ਭਵਿੱਖ ਕਾਲ: -ਗਾ — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється синтетичним суфіксом -ਗਾ/-ਗੀ/-ਗੇ, узгодженим з родом і числом підмета, без окремого допоміжного слова.",
            "en": {
              "text": "The future tense is formed with the synthetic suffix -ਗਾ/-ਗੀ/-ਗੇ, agreeing with the subject's gender and number, with no separate auxiliary word."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ਮੈਂ ਜਾਵਾਂਗਾ।",
                "Я піду."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Future Tense: -ਗਾ — A2"
      },
      {
        "id": "imperative-mood",
        "title": "ਹੁਕਮੀ ਭਵਿੱਖ — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб однини — основа дієслова; ввічливіша форма додає суфікс -ਓ для звертання до старших чи незнайомих.",
            "en": {
              "text": "The singular imperative is the verb stem; a politer form adds the suffix -ਓ for addressing elders or strangers."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ਜਾ!",
                "Іди!"
              ],
              [
                "ਜਾਓ!",
                "Ідіть!"
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
        "title": "ਪੂਰਨ ਵਰਤਮਾਨ — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Перфект утворюється дієприкметником минулого часу плюс допоміжне ਹੈ, наголошуючи на теперішній актуальності завершеної дії.",
            "en": {
              "text": "The perfect is formed with the past participle plus the auxiliary ਹੈ, emphasizing the present relevance of a completed action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ਮੈਂ ਖਾ ਲਿਆ ਹੈ।",
                "Я вже поїв (результат актуальний)."
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
        "title": "ਪੂਰਨ ਭੂਤਕਾਲ — B2",
        "emoji": "⏮️",
        "sections": [
          {
            "type": "intro",
            "text": "Плюсквамперфект описує дію, завершену до іншої минулої дії; утворюється дієприкметником минулого часу плюс допоміжне ਸੀ.",
            "en": {
              "text": "The pluperfect describes an action completed before another past action; formed with the past participle plus the auxiliary ਸੀ."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ਮੈਂ ਪਹਿਲਾਂ ਹੀ ਖਾ ਲਿਆ ਸੀ।",
                "Я вже був поїв до того."
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
        "id": "habitual-past",
        "title": "ਆਦਤਨ ਭੂਤਕਾਲ: -ਦਾ ਸੀ — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Звичну дію в минулому передає дієприкметник на -ਦਾ плюс допоміжне ਸੀ, — 'бувало, робив', відмінно від простого одноразового минулого часу.",
            "en": {
              "text": "A habitual past action is expressed with the participle in -ਦਾ plus the auxiliary ਸੀ — 'used to do', distinct from the simple one-time past."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ਮੈਂ ਬਚਪਨ ਵਿੱਚ ਖੇਡਦਾ ਸੀ।",
                "У дитинстві я, бувало, грав."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Habitual Past: -ਦਾ ਸੀ — B1"
      },
      {
        "id": "conditional-mood",
        "title": "ਜੇ: ਸ਼ਰਤੀ — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовне речення вводиться сполучником ਜੇ ('якщо'); головне речення часто продовжується часткою ਤਾਂ ('то').",
            "en": {
              "text": "A conditional sentence is introduced with the conjunction ਜੇ ('if'); the main clause often continues with the particle ਤਾਂ ('then')."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ਜੇ ਮੀਂਹ ਪਿਆ, ਤਾਂ ਮੈਂ ਘਰ ਰਹਾਂਗਾ।",
                "Якщо піде дощ, я залишуся вдома."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional: ਜੇ — B1"
      },
      {
        "id": "subjunctive-optative",
        "title": "ਇੱਛਾਵਾਚਕ — B2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Оптативний спосіб виражає побажання чи благословення щодо третьої особи — 'хай станеться' — уживаний у формальних побажаннях.",
            "en": {
              "text": "The optative mood expresses a wish or blessing toward a third person — 'may it happen' — used in formal well-wishes."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ਤੇਰਾ ਭਲਾ ਹੋਵੇ।",
                "Хай тобі буде добре."
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
        "id": "potential-mood-sakna",
        "title": "ਸਕਣਾ: ਸਮਰੱਥਾ — B1",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Здатність чи можливість виражається складеним дієсловом з допоміжним ਸਕਣਾ ('могти'), доданим після дієприслівника.",
            "en": {
              "text": "Ability or possibility is expressed with the compound verb using the auxiliary ਸਕਣਾ ('to be able'), added after the converb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ਮੈਂ ਪੰਜਾਬੀ ਬੋਲ ਸਕਦਾ ਹਾਂ।",
                "Я можу говорити панджабі."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Potential: ਸਕਣਾ — B1"
      },
      {
        "id": "tone-tense-interaction",
        "title": "ਸੁਰ ਤੇ ਕਾਲ: ਅੰਤਰ-ਕਿਰਿਆ — B2",
        "emoji": "🎵",
        "sections": [
          {
            "type": "intro",
            "text": "У кількох парах часових форм той самий сегментний запис розрізняється лише тоном на дієслівному складі — тонова опозиція бере участь у граматичному розрізненні, а не лише в лексичному.",
            "en": {
              "text": "In a few tense-form pairs, the same segmental spelling is distinguished only by tone on the verb syllable — the tonal opposition participates in grammatical, not just lexical, distinction."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Тон на дієслівному складі бере участь у розрізненні граматичних форм.",
                "тонова опозиція в граматиці дієслова"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Tone-Tense Interaction — B2"
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
        "id": "postposition-nu-dative-accusative",
        "title": "ਨੂੰ: ਸੰਪ੍ਰਦਾਨ-ਕਰਮ — A2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Частка ਨੂੰ одночасно виконує роль давального й (одушевленого) знахідного відмінка — 'кому' й 'кого' — залежно від контексту дієслова.",
            "en": {
              "text": "The particle ਨੂੰ simultaneously serves as both dative and (animate) accusative — 'to whom' and 'whom' — depending on the verb's context."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ਮੈਂ ਉਸ ਨੂੰ ਦੇਖਿਆ।",
                "Я побачив його."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "ਨੂੰ: Dative/Accusative — A2"
      },
      {
        "id": "possessive-da-de-di",
        "title": "ਦਾ, ਦੇ, ਦੀ: ਮਾਲਕੀ — B1",
        "emoji": "🏠",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійна частка ਦਾ/ਦੇ/ਦੀ узгоджується за родом і числом не з володарем, а з предметом володіння, — три форми того самого показника залежно від того, чим володіють.",
            "en": {
              "text": "The possessive particle ਦਾ/ਦੇ/ਦੀ agrees in gender and number not with the possessor but with the possessed item — three forms of the same marker depending on what is owned."
            }
          },
          {
            "type": "table",
            "title": "Три форми",
            "rows": [
              [
                "ਰਾਮ ਦਾ ਘਰ (дім, ч.р.)",
                "дім Рама"
              ],
              [
                "ਰਾਮ ਦੀ ਕਿਤਾਬ (книга, ж.р.)",
                "книга Рама"
              ]
            ],
            "en": {
              "title": "Three Forms"
            }
          }
        ],
        "titleEn": "ਦਾ/ਦੇ/ਦੀ: Possessive Agreement — B1"
      },
      {
        "id": "gender-agreement-depth",
        "title": "ਲਿੰਗ ਸਹਿਮਤੀ: ਵਿਸਥਾਰ — A2",
        "emoji": "⚥",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники й дієприкметники узгоджуються з іменником за родом через закінчення -ਾ (ч.р.) чи -ੀ (ж.р.), тоді як приголосно-кінцеві прикметники лишаються незмінними.",
            "en": {
              "text": "Adjectives and participles agree with the noun in gender through the ending -ਾ (masc.) or -ੀ (fem.), while consonant-ending adjectives stay invariant."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ਚੰਗਾ ਮੁੰਡਾ / ਚੰਗੀ ਕੁੜੀ",
                "хороший хлопець / хороша дівчина"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Gender Agreement in Depth — A2"
      },
      {
        "id": "plural-formation",
        "title": "ਬਹੁਵਚਨ — A2",
        "emoji": "➕",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється власним набором закінчень залежно від роду й кінцевого звука іменника — не єдине правило на всі слова.",
            "en": {
              "text": "The plural is formed with its own set of endings depending on the noun's gender and final sound — not a single rule for every word."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ਮੁੰਡਾ → ਮੁੰਡੇ",
                "хлопець → хлопці"
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
        "id": "demonstratives",
        "title": "ਇਹ, ਉਹ: ਸੰਕੇਤਕ — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Вказівне ਇਹ ('цей') позначає близький предмет, ਉਹ ('той') — далекий; обидва стоять перед іменником.",
            "en": {
              "text": "The demonstrative ਇਹ ('this') marks a near item, ਉਹ ('that') a far one; both stand before the noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ਇਹ ਕਿਤਾਬ",
                "ця книга"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Demonstratives: ਇਹ, ਉਹ — A1"
      },
      {
        "id": "comparison-nalon",
        "title": "ਤੁਲਨਾ: ਨਾਲੋਂ — A2",
        "emoji": "⚖️",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняння вищого ступеня утворюється прикметником плюс ਨਾਲੋਂ ('ніж') після предмета порівняння, без окремого суфікса на прикметнику.",
            "en": {
              "text": "Comparison of superiority is formed with the adjective plus ਨਾਲੋਂ ('than') after the compared item, with no dedicated suffix on the adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ਉਹ ਮੇਰੇ ਨਾਲੋਂ ਲੰਬਾ ਹੈ।",
                "Він вищий за мене."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparison with ਨਾਲੋਂ — A2"
      },
      {
        "id": "superlative",
        "title": "ਸਭ ਤੋਂ: ਸਰਵਉੱਚ — B1",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь додає слово ਸਭ ਤੋਂ ('з усіх найбільше') перед прикметником.",
            "en": {
              "text": "The superlative adds the word ਸਭ ਤੋਂ ('most of all') before the adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ਉਹ ਸਭ ਤੋਂ ਲੰਬਾ ਹੈ।",
                "Він найвищий."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Superlative with ਸਭ ਤੋਂ — B1"
      },
      {
        "id": "numerals-cardinal",
        "title": "ਗਿਣਤੀ — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Кількісні числівники мають власні панджабські корені, здебільшого нерегулярні для чисел від 1 до 100.",
            "en": {
              "text": "Cardinal numbers have their own Punjabi roots, mostly irregular from 1 to 100."
            }
          },
          {
            "type": "table",
            "title": "Числа",
            "rows": [
              [
                "ਇੱਕ, ਦੋ, ਤਿੰਨ",
                "один, два, три"
              ]
            ],
            "en": {
              "title": "Numbers"
            }
          }
        ],
        "titleEn": "Cardinal Numbers — A1"
      },
      {
        "id": "numerals-ordinal",
        "title": "ਕ੍ਰਮਵਾਚਕ ਗਿਣਤੀ — A2",
        "emoji": "🥇",
        "sections": [
          {
            "type": "intro",
            "text": "Порядкові числівники узгоджуються з іменником за родом і мають закінчення, як прикметники.",
            "en": {
              "text": "Ordinal numbers agree with the noun in gender and have endings like adjectives."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ਤੀਜਾ ਦਿਨ",
                "третій день"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ordinal Numbers — A2"
      },
      {
        "id": "question-words",
        "title": "ਸਵਾਲੀਆ ਸ਼ਬਦ — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питальні слова ਕੀ (що), ਕੌਣ (хто), ਕਿੱਥੇ (де), ਕਦੋਂ (коли) зазвичай стоять на тому самому місці в реченні, де було б слово, яке вони заміняють.",
            "en": {
              "text": "The question words ਕੀ (what), ਕੌਣ (who), ਕਿੱਥੇ (where), ਕਦੋਂ (when) normally stand in the same sentence position the replaced word would occupy."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ਤੂੰ ਕਿੱਥੇ ਜਾ ਰਿਹਾ ਹੈਂ?",
                "Куди ти йдеш?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Question Words — A1"
      },
      {
        "id": "relative-clause-strategy",
        "title": "ਸੰਬੰਧਵਾਚਕ: ਜੋ — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Відносний займенник ਜੋ вводить підрядне речення й зазвичай супроводжується вказівним ਉਹ у головному реченні.",
            "en": {
              "text": "The relative pronoun ਜੋ introduces a relative clause and is usually paired with the demonstrative ਉਹ in the main clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ਜੋ ਮੁੰਡਾ ਆਇਆ, ਉਹ ਮੇਰਾ ਦੋਸਤ ਹੈ।",
                "Хлопець, який прийшов, — мій друг."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Pronoun: ਜੋ — B1"
      },
      {
        "id": "word-order-sov",
        "title": "ਵਾਕ ਬਣਤਰ: SOV — A1",
        "emoji": "↔️",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів — підмет-додаток-присудок, з дієсловом завжди в самому кінці речення.",
            "en": {
              "text": "The basic word order is subject-object-verb, with the verb always at the very end of the sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ਮੈਂ ਰੋਟੀ ਖਾਂਦਾ ਹਾਂ।",
                "Я їм хліб (я-хліб-їм)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Word Order: SOV — A1"
      },
      {
        "id": "adjective-agreement-depth",
        "title": "ਵਿਸ਼ੇਸ਼ਣ ਸਹਿਮਤੀ: ਵਿਸਥਾਰ — B1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник, що закінчується на -ਾ, узгоджується з іменником одразу за родом, числом і непрямою формою, — інші прикметники лишаються незмінними в усіх контекстах.",
            "en": {
              "text": "An adjective ending in -ਾ agrees with the noun in gender, number, and oblique form at once — other adjectives stay invariant in every context."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ਚੰਗੇ ਮੁੰਡੇ ਨੂੰ (непряма форма множини)",
                "хорошому хлопцеві (у множинному непрямому)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adjective Agreement in Depth — B1"
      },
      {
        "id": "vocative-forms",
        "title": "ਸੰਬੋਧਨ — B1",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Звертання часто вкорочує чи змінює закінчення іменника, особливо для чоловічих імен на -ਾ, які набувають окремого закінчення при зверненні.",
            "en": {
              "text": "Direct address often shortens or changes the noun's ending, especially for male names in -ਾ, which take a separate ending when addressed."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ਮੁੰਡਿਆ!",
                "Хлопче! (кличний)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Vocative Forms — B1"
      },
      {
        "id": "diminutive-suffix",
        "title": "ਛੋਟਾ-ਸੂਚਕ ਪਿਛੇਤਰ — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувально-пестливий суфікс -ੜੀ/-ਲਾ, доданий до кореня, надає слову ласкавого чи зменшеного відтінку.",
            "en": {
              "text": "The diminutive suffix -ੜੀ/-ਲਾ, added to a root, gives the word an affectionate or diminished shade."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ਕੁੜੀ → ਕੁੜੀੜੀ",
                "дівчина → манюсінька дівчинка"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Diminutive Suffix — B1"
      },
      {
        "id": "reflexive-pronoun-aap",
        "title": "ਆਪ: ਆਤਮਵਾਚਕ — A2",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотний займенник ਆਪ ('сам') незалежний від особи й числа підмета й підкреслює, що дія стосується самого підмета.",
            "en": {
              "text": "The reflexive pronoun ਆਪ ('oneself') is independent of the subject's person and number and emphasizes that the action concerns the subject itself."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ਉਸ ਨੇ ਆਪਣੇ ਆਪ ਨੂੰ ਦੇਖਿਆ।",
                "Він побачив самого себе."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reflexive Pronoun: ਆਪ — A2"
      },
      {
        "id": "kinship-terms-elaborate",
        "title": "ਰਿਸ਼ਤੇਦਾਰੀ ਸ਼ਬਦ — B1",
        "emoji": "👪",
        "sections": [
          {
            "type": "intro",
            "text": "Розлога система термінів спорідненості розрізняє родичів за стороною сім'ї (материнська/батьківська) й відносним віком — окремі слова для старшого й молодшого брата.",
            "en": {
              "text": "An elaborate kinship-term system distinguishes relatives by side of family (maternal/paternal) and relative age — separate words for older and younger brother."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ਵੱਡਾ ਭਰਾ (старший брат) vs ਛੋਟਾ ਭਰਾ (молодший)",
                "розрізнення за відносним віком"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Elaborate Kinship Terminology — B1"
      },
      {
        "id": "existential-hai-nahi",
        "title": "ਹੋਂਦ: ਹੈ, ਨਹੀਂ — A1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово ਹੈ виражає і наявність предмета, і володіння ним; заперечна форма ਨਹੀਂ позначає їхню відсутність.",
            "en": {
              "text": "The verb ਹੈ expresses both the presence of something and possession of it; the negative form ਨਹੀਂ marks their absence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ਮੇਰੇ ਕੋਲ ਕਿਤਾਬ ਹੈ।",
                "У мене є книга."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Existential: ਹੈ, ਨਹੀਂ — A1"
      },
      {
        "id": "compound-word-formation",
        "title": "ਮਿਸ਼ਰਿਤ ਸ਼ਬਦ — B2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Складні слова поєднують два корені в одне ціле, часто описуючи предмет через його функцію чи зовнішній вигляд.",
            "en": {
              "text": "Compound words join two roots into one unit, often describing an item through its function or appearance."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ਪੁਸਤਕਾਲਾ (бібліотека, буквально 'книга-приміщення')",
                "приклад складного слова"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Compound Word Formation — B2"
      },
      {
        "id": "gurmukhi-script-features",
        "title": "ਗੁਰਮੁਖੀ ਲਿਪੀ: ਸੁਰ ਚਿੰਨ੍ਹ — B1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Абетка ґурмукхі позначає складові голосні окремими діакритичними знаками (матрами), а сама будова літер тісно пов'язана з традицією сикхських священних текстів.",
            "en": {
              "text": "The Gurmukhi script marks syllabic vowels with separate diacritic signs (matras), and the letterforms themselves are closely tied to the tradition of sacred Sikh texts."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Діакритичні знаки матра позначають голосні при приголосних.",
                "матра в ґурмукхі"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Gurmukhi Script Features — B1"
      },
      {
        "id": "reduplication-emphasis-distributive",
        "title": "ਦੁਹਰਾਓ: ਜ਼ੋਰ ਤੇ ਵੰਡ — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Подвоєння іменника чи прикметника може позначати розподільність ('кожен окремо') чи посилення значення, — граматична стратегія без окремого афікса.",
            "en": {
              "text": "Doubling a noun or adjective can mark distributivity ('each one separately') or intensification — a grammatical strategy with no dedicated affix."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ਘਰ-ਘਰ (кожен дім окремо)",
                "розподільне значення"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reduplication for Emphasis/Distributivity — B1"
      },
      {
        "id": "converb-chaining",
        "title": "ਪੂਰਵਕਾਲਿਕ ਕਿਰਿਆ: -ਕੇ — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприслівник на -ਕੇ зв'язує послідовні дії в реченні без окремого сполучника 'і' — часово нейтральна форма, час несе лише останнє дієслово ланцюжка.",
            "en": {
              "text": "The converb in -ਕੇ links sequential actions in a sentence with no separate conjunction 'and' — a tense-neutral form, with only the last verb of the chain carrying tense."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ਉਹ ਉੱਠ ਕੇ ਬਾਹਰ ਗਿਆ।",
                "Він устав і вийшов (без 'і', через дієприслівник)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Converb Chaining: -ਕੇ — B1"
      },
      {
        "id": "locative-postposition-vich",
        "title": "ਵਿੱਚ: ਅਧਿਕਰਣ — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Місцевий відмінок передається постпозицією ਵਿੱਚ ('усередині, у'), доданою після іменника місця.",
            "en": {
              "text": "The locative is conveyed with the postposition ਵਿੱਚ ('inside, in'), added after the place noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ਘਰ ਵਿੱਚ",
                "вдома"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Locative: ਵਿੱਚ — A2"
      },
      {
        "id": "comitative-postposition-nal",
        "title": "ਨਾਲ: ਸਹਿਚਰ — A2",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "Супровідність ('разом з') виражається постпозицією ਨਾਲ, доданою після іменника-супутника.",
            "en": {
              "text": "Accompaniment ('together with') is expressed with the postposition ਨਾਲ, added after the accompanying noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ਦੋਸਤ ਨਾਲ",
                "з другом"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comitative: ਨਾਲ — A2"
      },
      {
        "id": "coordinating-conjunctions",
        "title": "ਜੋੜਨ ਵਾਲੇ ਸ਼ਬਦ: ਅਤੇ, ਜਾਂ, ਪਰ — A1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Сурядні сполучники ਅਤੇ ('і'), ਜਾਂ ('або'), ਪਰ ('але') з'єднують слова й речення так само, як в українській, не впливаючи на порядок слів навколо себе.",
            "en": {
              "text": "Coordinating conjunctions ਅਤੇ ('and'), ਜਾਂ ('or'), ਪਰ ('but') connect words and clauses just as in Ukrainian, without affecting the word order around them."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ਮੈਂ ਅਤੇ ਤੂੰ",
                "я і ти"
              ],
              [
                "ਚੰਗਾ ਪਰ ਮਹਿੰਗਾ",
                "гарне, але дороге"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Coordinating Conjunctions: ਅਤੇ, ਜਾਂ, ਪਰ — A1"
      },
      {
        "id": "tone-historical-origin",
        "title": "ਸੁਰ ਦਾ ਇਤਿਹਾਸਕ ਮੂਲ — B2",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Тони панджабі виникли внаслідок історичної втрати придихових дзвінких приголосних (bh, dh, gh): там, де сусідні мови зберегли придих, панджабі перетворила його на тон, — задокументований приклад фонологізації в мовознавстві.",
            "en": {
              "text": "Punjabi's tones arose from the historical loss of voiced aspirated consonants (bh, dh, gh): where neighboring languages kept the aspiration, Punjabi converted it into tone — a documented example of phonologization in linguistics."
            }
          },
          {
            "type": "table",
            "title": "Приклад походження тону",
            "rows": [
              [
                "ghar (гінді, 'дім', з придихом) → kar з низьким тоном (панджабі)",
                "придих перетворився на тон"
              ]
            ],
            "en": {
              "title": "Tone Origin Example"
            }
          }
        ],
        "titleEn": "The Historical Origin of Tone — B2"
      },
      {
        "id": "split-ergativity-transitive-intransitive",
        "title": "ਕਰਤਾ ਕਾਰਕ: ਸਕਰਮਕ ਬਨਾਮ ਅਕਰਮਕ — B2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Частка ਨੇ вживається лише з перехідними дієсловами в минулому часі; неперехідні дієслова навіть у минулому часі лишають підмет без цієї частки, і дієслово узгоджується з підметом.",
            "en": {
              "text": "The particle ਨੇ is used only with transitive verbs in the past tense; intransitive verbs, even in the past, leave the subject without this particle, and the verb agrees with the subject."
            }
          },
          {
            "type": "table",
            "title": "Перехідне проти неперехідного",
            "rows": [
              [
                "ਉਸ ਨੇ ਕਿਤਾਬ ਪੜ੍ਹੀ। (перехідне, з ਨੇ)",
                "Він прочитав книгу."
              ],
              [
                "ਉਹ ਡਿੱਗਿਆ। (неперехідне, без ਨੇ)",
                "Він упав."
              ]
            ],
            "en": {
              "title": "Transitive vs. Intransitive"
            }
          }
        ],
        "titleEn": "Ergativity Split by Transitivity — B2"
      },
      {
        "id": "gurmukhi-shahmukhi-depth",
        "title": "ਗੁਰਮੁਖੀ ਤੇ ਸ਼ਾਹਮੁਖੀ: ਵਿਸਥਾਰ — B2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Політичний поділ Панджабу 1947 року закріпив і писемний поділ: індійський Панджаб розвинув літературну традицію в ґурмукхі, тоді як пакистанський Панджаб — у шахмукхі, тож видання однієї книги для обох аудиторій вимагає окремої транслітерації.",
            "en": {
              "text": "The 1947 political partition of Punjab also cemented a written divide: Indian Punjab developed its literary tradition in Gurmukhi, while Pakistani Punjab developed its own in Shahmukhi, so publishing one book for both audiences requires separate transliteration."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Політичний поділ 1947 року закріпив писемну двоколійність.",
                "історія розділення писемних традицій"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Gurmukhi and Shahmukhi: Further Depth — B2"
      },
      {
        "id": "sikh-gurbani-religious-vocabulary",
        "title": "ਗੁਰਬਾਣੀ ਸ਼ਬਦਾਵਲੀ — B2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Мова Гурбані (гімнів Ґуру Ґрантх Сахіба) зберігає архаїчну, змішану з іншими північноіндійськими мовами лексику й граматику XV-XVII століть — окремий, шанований релігійний регістр, відмінний від сучасної розмовної панджабі.",
            "en": {
              "text": "The language of Gurbani (the hymns of the Guru Granth Sahib) preserves archaic 15th-17th-century vocabulary and grammar mixed with other North Indian languages — a separate, revered religious register, distinct from modern spoken Punjabi."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Гурбані зберігає архаїчну мову, відмінну від сучасної розмовної панджабі.",
                "релігійний архаїчний регістр"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Gurbani Religious Vocabulary — B2"
      },
      {
        "id": "dialectal-variation-majhi-malwai-doabi",
        "title": "ਮਾਝੀ, ਮਾਲਵੀ, ਦੁਆਬੀ — B2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Стандартна панджабі базується на майгхі говірці центрального Панджабу, тоді як малвайська, дуабська й потгохарська говірки розходяться в лексиці й вимові, зберігаючи взаємну зрозумілість.",
            "en": {
              "text": "Standard Punjabi is based on the Majhi dialect of central Punjab, while the Malwai, Doabi, and Pothohari dialects diverge in vocabulary and pronunciation while remaining mutually intelligible."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Стандарт базується саме на майгхі говірці, не на решті діалектів.",
                "діалектна основа стандарту"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Dialects: Majhi, Malwai, Doabi — B2"
      },
      {
        "id": "punjabi-diaspora-influence",
        "title": "ਪਰਵਾਸੀ ਪੰਜਾਬੀ: ਯੂਕੇ, ਕੈਨੇਡਾ — B2",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Велика панджабська діаспора у Великій Британії й Канаді розвинула власні мовні особливості, включно з активним перемиканням кодів з англійською, — панджабі належить до найпоширеніших мов діаспори в цих країнах.",
            "en": {
              "text": "The large Punjabi diaspora in the UK and Canada developed its own linguistic features, including active code-switching with English — Punjabi is among the most widely spoken diaspora languages in those countries."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Панджабська діаспора у Великій Британії й Канаді активно розвиває мову.",
                "діаспорна мовна спільнота"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Punjabi Diaspora: UK, Canada — B2"
      },
      {
        "id": "code-switching-english-punjabi",
        "title": "ਅੰਗਰੇਜ਼ੀ-ਪੰਜਾਬੀ ਮਿਲਾਵਟ — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "У міському й діаспорному мовленні типове перемикання кодів усередині одного речення — граматичний каркас панджабський, а частина лексики вставляється з англійської без адаптації.",
            "en": {
              "text": "Urban and diaspora speech typically code-switches within a single sentence — the grammatical frame is Punjabi, while some vocabulary is inserted from English without adaptation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ਮੈਂ office ਵਿੱਚ ਹਾਂ।",
                "Я в офісі (English office вставлене напряму)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "English-Punjabi Code-Switching — B2"
      },
      {
        "id": "causative-construction",
        "title": "ਪ੍ਰੇਰਣਾਰਥਕ ਕਿਰਿਆ — B2",
        "emoji": "⚡",
        "sections": [
          {
            "type": "intro",
            "text": "Каузативний суфікс -ਵਾ, вставлений перед закінченням дієслова, додає значення 'змушувати робити' — граматично вбудована причиновість.",
            "en": {
              "text": "The causative suffix -ਵਾ, inserted before the verb ending, adds the meaning 'to make someone do' — grammatically built-in causation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ਬੈਠਣਾ (сидіти) → ਬਿਠਾਉਣਾ (садити когось)",
                "каузативний суфікс"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Causative Suffix: -ਵਾ — B2"
      },
      {
        "id": "passive-construction",
        "title": "ਕਰਮਵਾਚਕ: ਜਾਣਾ — B2",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний стан утворюється дієприкметником плюс допоміжне ਜਾਣਾ ('йти'), а не буквальним 'бути' — та сама конструкція, що й у гінді.",
            "en": {
              "text": "The passive voice is formed with the participle plus the auxiliary ਜਾਣਾ ('to go'), not a literal 'to be' — the same construction found in Hindi."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ਕਿਤਾਬ ਲਿਖੀ ਜਾਂਦੀ ਹੈ।",
                "Книга пишеться."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Passive: ਜਾਣਾ — B2"
      },
      {
        "id": "double-object-construction",
        "title": "ਦੋਹਰਾ ਕਰਮ — B2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "У реченнях з двома додатками (давати комусь щось) обидва одушевлені додатки можуть отримати частку ਨੂੰ, і лише контекст і порядок слів розрізняють, хто отримувач, а хто предмет.",
            "en": {
              "text": "In sentences with two objects (giving someone something), both animate objects can take the particle ਨੂੰ, and only context and word order distinguish the recipient from the item."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ਮੈਂ ਉਸ ਨੂੰ ਬੱਚੇ ਨੂੰ ਦਿੱਤਾ।",
                "Я віддав його дитині."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Double Object Construction — B2"
      },
      {
        "id": "discourse-particles",
        "title": "ਗੱਲਬਾਤ ਦੇ ਕਣ — B1",
        "emoji": "🗣️",
        "sections": [
          {
            "type": "intro",
            "text": "Дискурсивні частки організують розмову, позначаючи підтвердження почутого чи наголос, без власного лексичного значення поза контекстом діалогу.",
            "en": {
              "text": "Discourse particles organize conversation, marking confirmation of what was heard or emphasis, with no lexical meaning of their own outside dialogue."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ਚੰਗਾ ਜੀ।",
                "Добре (з ввічливою часткою jī)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Discourse Particles — B1"
      },
      {
        "id": "fixed-idiomatic-proverbs",
        "title": "ਅਖਾਣ — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Численні застиглі приказки (ਅਖਾਣ) уживаються цілими блоками з переносним значенням, не виведеним з буквального перекладу окремих слів.",
            "en": {
              "text": "Numerous fixed proverbs (ਅਖਾਣ) are used as whole blocks with a figurative meaning not derived from the literal translation of the individual words."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ਅੰਨ੍ਹਿਆਂ ਵਿੱਚ ਕਾਣਾ ਰਾਜਾ। (буквально 'серед сліпих одноокий — цар')",
                "застигла приказка"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Fixed Proverbs (Akhaan) — B2"
      },
      {
        "id": "numeral-classifier-depth",
        "title": "ਗਿਣਤੀ ਸ਼ਬਦ: ਵਿਸਥਾਰ — B2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Хоч панджабі не вимагає окремого класифікатора для більшості предметів, кілька усталених виразів для пар чи груп зберігають власну лічильну лексику.",
            "en": {
              "text": "Although Punjabi doesn't require a dedicated classifier for most objects, a few fixed expressions for pairs or groups keep their own counting vocabulary."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ਕੁਝ усталені лічильні вирази для пар і груп предметів.",
                "лічильна лексика для особливих категорій"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Numeral Vocabulary: Further Depth — B2"
      },
      {
        "id": "honorific-plural-address",
        "title": "ਸਤਿਕਾਰਯੋਗ ਬਹੁਵਚਨ — B2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Займенник ਤੁਸੀਂ ('ви') уживається і як звичайна множина, і як ввічлива форма однини до однієї поважної особи, — та сама стратегія 'множина-як-повага', що й у багатьох мовах світу.",
            "en": {
              "text": "The pronoun ਤੁਸੀਂ ('you-plural') is used both as an ordinary plural and as a polite singular form for one respected person — the same 'plural-as-respect' strategy found in many world languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ввічливе звертання множиною до однієї поважної особи.",
                "множина як знак поваги"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Plural for Polite Address — B2"
      },
      {
        "id": "persian-arabic-historical-loanwords",
        "title": "ਫਾਰਸੀ-ਅਰਬੀ ਸ਼ਬਦ: ਮੁਗ਼ਲ ਯੁੱਗ — B1",
        "emoji": "🕌",
        "sections": [
          {
            "type": "intro",
            "text": "Століття могольського адміністративного впливу залишили в панджабі шар персько-арабських запозичень у правовій й адміністративній лексиці, окремий від пізнішого англійського колоніального шару.",
            "en": {
              "text": "Centuries of Mughal administrative influence left Punjabi with a layer of Perso-Arabic loanwords in legal and administrative vocabulary, separate from the later English colonial layer."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ਕਾਨੂੰਨ (закон) — з арабської",
                "арабське адміністративне запозичення"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Perso-Arabic Loanwords: Mughal Era — B1"
      },
      {
        "id": "bhangra-folk-music-vocabulary",
        "title": "ਭੰਗੜਾ ਸ਼ਬਦਾਵਲੀ — B2",
        "emoji": "🎶",
        "sections": [
          {
            "type": "intro",
            "text": "Традиційний танцювальний і музичний жанр бгангра має власний спеціалізований словниковий шар для рухів, ритмів і святкової лексики, пов'язаний з врожайним святом Байсакгі.",
            "en": {
              "text": "The traditional Bhangra dance and music genre has its own specialized vocabulary layer for movements, rhythms, and festive terms, tied to the Baisakhi harvest festival."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Лексика бгангра пов'язана з традиційним врожайним святом.",
                "спеціалізований шар танцювальної лексики"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Bhangra Folk Music Vocabulary — B2"
      },
      {
        "id": "politeness-register-depth",
        "title": "ਸਤਿਕਾਰ ਪੱਧਰ: ਵਿਸਥਾਰ — B2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Ввічливий регістр додає частку ਜੀ після імені чи фрази при зверненні до старших або поважних осіб, — окремий словниковий і граматичний шар пошани.",
            "en": {
              "text": "The polite register adds the particle ਜੀ after a name or phrase when addressing elders or respected persons — a separate lexical and grammatical layer of respect."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਜੀ।",
                "Вітання (з ввічливою часткою jī)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Politeness Register in Depth — B2"
      },
      {
        "id": "verb-serialization-depth",
        "title": "ਕਿਰਿਆ ਲੜੀ — B2",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Два дієслова поспіль можуть описувати одну складену подію — перше дієслово способу, друге напрямку чи результату, без окремого сполучника.",
            "en": {
              "text": "Two verbs in a row can describe one compound event — the first verb of manner, the second of direction or result, with no separate conjunction."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ਉਹ ਭੱਜ ਗਿਆ।",
                "Він утік (буквально 'бігти-піти')."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Serial Verb Constructions — B2"
      },
      {
        "id": "agent-nominalization",
        "title": "ਕਰਤਾ ਨਾਮ: -ਣ ਵਾਲਾ — B1",
        "emoji": "👤",
        "sections": [
          {
            "type": "intro",
            "text": "Зворот -ਣ ਵਾਲਾ, доданий до дієслівного кореня, утворює іменник-діяча, що позначає того, хто регулярно виконує дію.",
            "en": {
              "text": "The phrase -ਣ ਵਾਲਾ, added to a verb root, forms an agent noun denoting one who regularly performs the action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ਪੜ੍ਹਾਉਣ ਵਾਲਾ (учитель, буквально 'той, хто навчає')",
                "дієслово → діяч"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Agent Nominalization: -ਣ ਵਾਲਾ — B1"
      },
      {
        "id": "numeral-time-expressions",
        "title": "ਸਮਾਂ ਪ੍ਰਗਟਾਵਾ — B1",
        "emoji": "🕐",
        "sections": [
          {
            "type": "intro",
            "text": "Вираження часу доби вживає власне слово ਵਜੇ ('о годині'), додане після числівника, — окрема конструкція, відмінна від звичайної лічби предметів.",
            "en": {
              "text": "Time-of-day expressions use the dedicated word ਵਜੇ ('at the hour'), added after the number — a distinct construction from ordinary object counting."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ਤਿੰਨ ਵਜੇ",
                "о третій годині"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Time Expressions: ਵਜੇ — B1"
      },
      {
        "id": "tone-sandhi",
        "title": "ਸੁਰ ਬਦਲਾਅ ਸੰਧੀ — B2",
        "emoji": "🎼",
        "sections": [
          {
            "type": "intro",
            "text": "У безперервному мовленні тон одного слова може систематично змінюватися під впливом сусіднього слова, — тональне сандхі, властиве тоновим мовам загалом.",
            "en": {
              "text": "In continuous speech, the tone of one word can systematically change under the influence of a neighboring word — tone sandhi, typical of tonal languages in general."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Тон слова змінюється залежно від сусіднього слова в потоці мовлення.",
                "тональне сандхі"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Tone Sandhi — B2"
      },
      {
        "id": "emphatic-particle",
        "title": "ਜ਼ੋਰ ਦੇਣ ਵਾਲਾ ਕਣ: ਹੀ — B1",
        "emoji": "💯",
        "sections": [
          {
            "type": "intro",
            "text": "Частка ਹੀ, приєднана після будь-якого слова, підкреслює виключність чи наголос — 'саме, тільки', виключаючи альтернативи.",
            "en": {
              "text": "The particle ਹੀ, attached after any word, emphasizes exclusivity or focus — 'exactly, only', ruling out alternatives."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ਉਹ ਹੀ ਆਇਆ।",
                "Саме він і прийшов."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Emphatic Particle ਹੀ — B1"
      },
      {
        "id": "loanword-adaptation-phonology",
        "title": "ਉਧਾਰ ਸ਼ਬਦਾਂ ਦਾ ਧੁਨੀ ਅਨੁਕੂਲਨ — B1",
        "emoji": "🔧",
        "sections": [
          {
            "type": "intro",
            "text": "Запозичені слова, потрапивши в мову, адаптуються до панджабського звукового складу, включно з можливим набуттям тону, — фонологічна інтеграція, а не пряме копіювання вимови.",
            "en": {
              "text": "Loanwords, once they enter the language, are adapted to Punjabi's sound system, including possibly acquiring a tone — phonological integration rather than a direct copy of the original pronunciation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Запозичені слова адаптуються до фонологічної й тональної системи панджабі.",
                "фонологічно адаптоване запозичення"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Loanword Phonological Adaptation — B1"
      },
      {
        "id": "relative-time-clauses",
        "title": "ਸਮੇਂ ਦੇ ਅਧੀਨ ਵਾਕ: ਜਦੋਂ — B1",
        "emoji": "⏱️",
        "sections": [
          {
            "type": "intro",
            "text": "Сполучник ਜਦੋਂ ('коли') вводить часове підрядне речення, вказуючи, що дія головного речення відбулася одночасно з подією в підрядному.",
            "en": {
              "text": "The conjunction ਜਦੋਂ ('when') introduces a temporal clause, indicating that the main clause's action happened simultaneously with the event in the subordinate clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ਜਦੋਂ ਉਹ ਆਇਆ, ਮੈਂ ਜਾ ਰਿਹਾ ਸੀ।",
                "Коли він прийшов, я саме йшов."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Temporal Clauses: ਜਦੋਂ — B1"
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
        "id": "irregular-verbs-common",
        "title": "ਅਨਿਯਮਿਤ ਕਿਰਿਆਵਾਂ — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово ਹੋਣਾ ('бути, ставати') має повністю нерегулярне відмінювання й водночас є найважливішим допоміжним дієсловом майже кожної складеної часової форми.",
            "en": {
              "text": "The verb ਹੋਣਾ ('to be, to become') has completely irregular conjugation and is at the same time the most important auxiliary verb of nearly every compound tense form."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярні форми",
            "rows": [
              [
                "ਹਾਂ / ਸੀ / ਹੋਵੇਗਾ",
                "я є / я був / я буду"
              ]
            ]
          }
        ],
        "titleEn": "Irregular Verbs — B1"
      },
      {
        "id": "irregular-plural-forms",
        "title": "ਅਨਿਯਮਿਤ ਬਹੁਵਚਨ — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька частовживаних іменників мають нерегулярну форму множини, яку слід запам'ятовувати окремо, поза загальним правилом.",
            "en": {
              "text": "A few common nouns have an irregular plural form that must be memorized separately, outside the general rule."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ਦਿਨ → ਦਿਨ (та сама форма в однині й множині)",
                "нерегулярна незмінна множина"
              ]
            ]
          }
        ],
        "titleEn": "Irregular Plurals — B1"
      },
      {
        "id": "fixed-proverbs-archaic-grammar",
        "title": "ਅਖਾਣਾਂ ਵਿੱਚ ਪੁਰਾਣੀ ਵਿਆਕਰਣ — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Приказки зберігають архаїчну граматичну структуру й лексику, вже втрачену в живій мові, і вживаються цілими блоками без граматичного розбору.",
            "en": {
              "text": "Proverbs preserve archaic grammatical structure and vocabulary already lost from the living language, and are used as whole blocks with no grammatical analysis."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ਜਿਹਾ ਬੀਜੋਗੇ, ਤਿਹਾ ਵੱਢੋਗੇ।",
                "Що посієш, те й пожнеш (застигла приказка з архаїчними формами)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Archaic Grammar in Proverbs — B2"
      }
    ]
  }
];
