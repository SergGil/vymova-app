// Vymova — data/grammar-data/grammar_or.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_OR: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "ସର୍ବନାମ — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "В одія множину зазвичай утворюють, додаючи суфікс \"-ମାନେ\" (-māne) до займенника однини.",
            "en": {
              "text": "In Odia, the plural is usually formed by adding the suffix \"-ମାନେ\" (-māne) to the singular pronoun."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ମୁଁ (muñ)"
              ],
              [
                "ти (зв. / ввічл.)",
                "ତୁମେ / ଆପଣ (tume / āpaṇa)"
              ],
              [
                "він / вона",
                "ସେ (se)"
              ],
              [
                "ми",
                "ଆମେ (āme)"
              ],
              [
                "ви",
                "ଆପଣମାନେ (āpaṇamāne)"
              ],
              [
                "вони",
                "ସେମାନେ (semāne)"
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
        "id": "no-grammatical-gender",
        "title": "ଲିଙ୍ଗଭେଦ ନାହିଁ — A1",
        "emoji": "⚥",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від гінді, маратхі чи гуджараті, одія не має граматичного роду взагалі — жоден прикметник, займенник чи дієслово не змінюється залежно від статі референта.",
            "en": {
              "text": "Unlike Hindi, Marathi, or Gujarati, Odia has no grammatical gender at all — no adjective, pronoun, or verb changes based on the referent's sex."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ସେ ଭଲ ଅଛି। (те саме речення для 'він' і 'вона')",
                "Він/вона добре (та сама форма)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "No Grammatical Gender — A1"
      },
      {
        "id": "definiteness-suffix",
        "title": "ନିର୍ଦ୍ଦିଷ୍ଟତା: -ଟା, -ଟି — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Означеність передається суфіксом -ଟା чи -ଟି, доданим прямо до іменника, — не окремий артикль-слово, а частина самого іменника, типова риса східноіндоарійських мов.",
            "en": {
              "text": "Definiteness is conveyed with the suffix -ଟା or -ଟି, added directly to the noun — not a separate article word, but part of the noun itself, a typical Eastern Indo-Aryan feature."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ବହିଟା",
                "(та сама) книга"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Definiteness Suffix: -ଟା, -ଟି — A2"
      },
      {
        "id": "classical-language-status",
        "title": "ଶାସ୍ତ୍ରୀୟ ଭାଷା — A2",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "2014 року Індія визнала одію 'класичною мовою' — одну лише з шести мов з таким статусом, — завдяки літературній традиції, що сягає 'Одійської Магабгарати' Сарали Даса XV століття.",
            "en": {
              "text": "In 2014, India recognized Odia as a 'classical language' — one of only six languages with this status — thanks to a literary tradition reaching back to Sarala Das's 15th-century Odia Mahabharata."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ଓଡ଼ିଆ ୨୦୧୪ରେ ଶାସ୍ତ୍ରୀୟ ଭାଷା ମାନ୍ୟତା ପାଇଲା।",
                "Одія отримала статус класичної мови 2014 року."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Classical Language Status — A2"
      },
      {
        "id": "negasion-i-preguntas",
        "title": "ନାକାରାତ୍ମକ ଓ ପ୍ରଶ୍ନ — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється часткою ନାହିଁ (nāhiñ) у кінці речення; питання без питального слова передаються лише висхідною інтонацією.",
            "en": {
              "text": "Negation is formed with the particle ନାହିଁ (nāhiñ) at the end of the sentence; yes/no questions are marked with rising intonation alone."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ମୁଁ ଜାଣେ ନାହିଁ।",
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
        "id": "present-general-e",
        "title": "ସାଧାରଣ ବର୍ତ୍ତମାନ: -ଏ — A1",
        "emoji": "☀️",
        "sections": [
          {
            "type": "intro",
            "text": "Загальний теперішній час утворюється суфіксом -ଏ (однина) чи -ନ୍ତି (множина), доданим до основи дієслова, позначаючи звичну дію чи факт.",
            "en": {
              "text": "The general present tense is formed with the suffix -ଏ (singular) or -ନ୍ତି (plural) added to the verb stem, marking a habitual action or fact."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ମୁଁ ଯାଏ।",
                "Я йду (взагалі)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "General Present: -ଏ — A1"
      },
      {
        "id": "present-continuous",
        "title": "ଚାଲୁ ବର୍ତ୍ତମାନ: ଅଛି — A1",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія в момент мовлення передається дієприслівником плюс допоміжне ଅଛି ('є') — точний аналог тривалого часу.",
            "en": {
              "text": "An action in progress at the moment of speaking is expressed with the converb plus the auxiliary ଅଛି ('is') — a close analog of the continuous tense."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ମୁଁ ଯାଉଛି।",
                "Я саме йду."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Continuous: ଅଛି — A1"
      },
      {
        "id": "simple-past",
        "title": "ସାଧାରଣ ଅତୀତ: -ଲା — A2",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Простий минулий час утворюється суфіксом -ଲା, доданим до основи дієслова, — узгоджується з особою й числом підмета, як і теперішній час.",
            "en": {
              "text": "The simple past is formed with the suffix -ଲା added to the verb stem — agreeing with the subject's person and number, just like the present."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ମୁଁ ଗଲି।",
                "Я пішов."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Simple Past: -ଲା — A2"
      },
      {
        "id": "past-continuous",
        "title": "ଚାଲୁ ଅତୀତ: ଥିଲା — B1",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія в минулому передається дієприслівником плюс допоміжне ଥିଲା ('був') у минулому часі.",
            "en": {
              "text": "An ongoing past action is expressed with the converb plus the past auxiliary ଥିଲା ('was')."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ମୁଁ ଯାଉଥିଲି।",
                "Я саме йшов (тоді)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Past Continuous: ଥିଲା — B1"
      },
      {
        "id": "future-tense",
        "title": "ଭବିଷ୍ୟତ: -ବ — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється синтетичним суфіксом -ବ, доданим до основи дієслова, без окремого допоміжного слова.",
            "en": {
              "text": "The future tense is formed with the synthetic suffix -ବ added to the verb stem, with no separate auxiliary word."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ମୁଁ ଯିବି।",
                "Я піду."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Future Tense: -ବ — A2"
      },
      {
        "id": "imperative-mood",
        "title": "ଆଦେଶାତ୍ମକ — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб має три ступені ввічливості, узгоджені з трьома рівнями займенників 'ти/ви', — від різкого наказу до дуже ввічливого прохання.",
            "en": {
              "text": "The imperative has three politeness tiers, aligned with the three tiers of 'you' pronouns — from a blunt command to a very polite request."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ଯାଅ! (ତୁମେ) / ଯାଆନ୍ତୁ! (ଆପଣ)",
                "Іди! / Ідіть, будь ласка!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Imperative: Three Politeness Tiers — A2"
      },
      {
        "id": "present-perfect",
        "title": "ପୂର୍ଣ୍ଣ ବର୍ତ୍ତମାନ: -ଛି — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Перфект утворюється дієприкметником минулого часу плюс допоміжне ଅଛି, наголошуючи на теперішній актуальності завершеної дії.",
            "en": {
              "text": "The perfect is formed with the past participle plus the auxiliary ଅଛି, emphasizing the present relevance of a completed action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ମୁଁ ଖାଇଛି।",
                "Я вже поїв (результат актуальний)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Perfect: -ଛି — B1"
      },
      {
        "id": "pluperfect",
        "title": "ପୂର୍ଣ୍ଣ ଅତୀତ: -ଥିଲା — B2",
        "emoji": "⏮️",
        "sections": [
          {
            "type": "intro",
            "text": "Плюсквамперфект описує дію, завершену до іншої минулої дії; утворюється дієприкметником минулого часу плюс допоміжне ଥିଲା.",
            "en": {
              "text": "The pluperfect describes an action completed before another past action; formed with the past participle plus the auxiliary ଥିଲା."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ମୁଁ ଆଗରୁ ଖାଇଥିଲି।",
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
        "title": "ଅଭ୍ୟାସଗତ ଅତୀତ — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Звичну дію в минулому передає дієприслівник плюс допоміжне ଥିଲା, — 'бувало, робив' — та сама конструкція, що й тривалий минулий час, розрізнена контекстом.",
            "en": {
              "text": "A habitual past action is expressed with a converb plus the auxiliary ଥିଲା — 'used to do' — the same construction as the past continuous, distinguished by context."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ପିଲାଦିନେ ମୁଁ ଖେଳୁଥିଲି।",
                "У дитинстві я, бувало, грав."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Habitual Past — B1"
      },
      {
        "id": "conditional-mood",
        "title": "ଯଦି: ସର୍ତ୍ତମୂଳକ — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовне речення вводиться сполучником ଯଦି ('якщо'); головне речення часто продовжується часткою ତେବେ ('то').",
            "en": {
              "text": "A conditional sentence is introduced with the conjunction ଯଦି ('if'); the main clause often continues with the particle ତେବେ ('then')."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ଯଦି ବର୍ଷା ହେବ, ମୁଁ ଘରେ ରହିବି।",
                "Якщо піде дощ, я залишуся вдома."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional: ଯଦି — B1"
      },
      {
        "id": "subjunctive-optative",
        "title": "ଇଚ୍ଛାସୂଚକ — B2",
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
                "ତୁମର ସବୁ ଭଲ ହେଉ।",
                "Хай у тебе все буде добре."
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
        "id": "potential-mood-paribaa",
        "title": "ପାରିବା: ସାମର୍ଥ୍ୟ — B1",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Здатність чи можливість виражається складеним дієсловом з допоміжним ପାରିବା ('могти'), доданим після дієприслівника.",
            "en": {
              "text": "Ability or possibility is expressed with the compound verb using the auxiliary ପାରିବା ('to be able'), added after the converb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ମୁଁ ଓଡ଼ିଆ କହି ପାରେ।",
                "Я можу говорити одія."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Potential: ପାରିବା — B1"
      },
      {
        "id": "converb-past-participle-chaining",
        "title": "ପୂର୍ବକାଳୀନ କ୍ରିୟା: -ଇ — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприслівник на -ଇ зв'язує послідовні дії в реченні без окремого сполучника 'і' — часово нейтральна форма, час несе лише останнє дієслово ланцюжка.",
            "en": {
              "text": "The converb in -ଇ links sequential actions in a sentence with no separate conjunction 'and' — a tense-neutral form, with only the last verb of the chain carrying tense."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ସେ ଉଠି ବାହାରିଗଲା।",
                "Він устав і вийшов (без 'і', через дієприслівник)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Converb Chaining: -ଇ — B1"
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
        "id": "no-split-ergativity",
        "title": "ବିଭକ୍ତ କର୍ତ୍ତୃବାଚ୍ୟ ନାହିଁ — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від гінді, маратхі, непальської чи гуджараті, одія не має розщепленої ергативності — підмет ніколи не отримує окремої ергативної частки навіть у перехідному минулому часі, а дієслово завжди узгоджується з підметом, незалежно від часу.",
            "en": {
              "text": "Unlike Hindi, Marathi, Nepali, or Gujarati, Odia has no split ergativity — the subject never takes a dedicated ergative particle, even in the transitive past tense, and the verb always agrees with the subject, regardless of tense."
            }
          },
          {
            "type": "table",
            "title": "Одія проти гінді",
            "rows": [
              [
                "ମୁଁ ବହି ପଢ଼ିଲି। (без ергативної частки)",
                "Я прочитав книгу."
              ],
              [
                "मैंने किताब पढ़ी। (гінді, з ергативним ने)",
                "той самий зміст, з ергативною часткою"
              ]
            ],
            "en": {
              "title": "Odia vs. Hindi"
            }
          }
        ],
        "titleEn": "No Split Ergativity — B1"
      },
      {
        "id": "dative-accusative-postposition-ku",
        "title": "କୁ: ସମ୍ପ୍ରଦାନ-କର୍ମ କାରକ — A2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Частка କୁ одночасно виконує роль давального й (одушевленого) знахідного відмінка — 'кому' й 'кого' — залежно від контексту дієслова.",
            "en": {
              "text": "The particle କୁ simultaneously serves as both dative and (animate) accusative — 'to whom' and 'whom' — depending on the verb's context."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ମୁଁ ତାକୁ ଦେଖିଲି।",
                "Я побачив його."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "କୁ: Dative/Accusative — A2"
      },
      {
        "id": "genitive-postposition-ra",
        "title": "ର: ସମ୍ବନ୍ଧ କାରକ — A1",
        "emoji": "🏠",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійність передається часткою ର, доданою після іменника-власника, перед предметом володіння.",
            "en": {
              "text": "Possession is expressed with the particle ର, added after the possessor noun, before the possessed item."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ରାମର ବହି",
                "книга Рама"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "ର: Genitive Particle — A1"
      },
      {
        "id": "locative-postposition-re",
        "title": "ରେ: ଅଧିକରଣ କାରକ — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Місцевий відмінок передається часткою ରେ, доданою після іменника місця.",
            "en": {
              "text": "The locative is conveyed with the particle ରେ, added after the place noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ଘରେ",
                "вдома"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "ରେ: Locative — A2"
      },
      {
        "id": "classifier-ta-general",
        "title": "-ଟା: ସାଧାରଣ ଗଣକ — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Лічба неживих предметів вимагає загального класифікатора -ଟା, вставленого між числівником та іменником.",
            "en": {
              "text": "Counting inanimate objects requires the general classifier -ଟା, inserted between the number and the noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ଦୁଇଟା ବହି",
                "дві книги"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "-ଟା: General Classifier — A1"
      },
      {
        "id": "classifier-jana-people",
        "title": "-ଜଣ: ବ୍ୟକ୍ତି ଗଣନା — A2",
        "emoji": "👥",
        "sections": [
          {
            "type": "intro",
            "text": "Лічба людей вимагає окремого класифікатора -ଜଣ, відмінного від класифікатора для предметів.",
            "en": {
              "text": "Counting people requires the separate classifier -ଜଣ, distinct from the classifier for objects."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ତିନିଜଣ ଲୋକ",
                "три людини"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "-ଜଣ: Person Classifier — A2"
      },
      {
        "id": "demonstratives-e-se",
        "title": "ଏ, ସେ: ଦେଖାଉଥିବା — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Вказівне ଏ ('цей') позначає близький предмет, ସେ ('той') — далекий чи вже згаданий; обидва стоять перед іменником.",
            "en": {
              "text": "The demonstrative ଏ ('this') marks a near item, ସେ ('that') a far or already mentioned one; both stand before the noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ଏ ବହି",
                "ця книга"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Demonstratives: ଏ, ସେ — A1"
      },
      {
        "id": "possessive-construction",
        "title": "ପିତୃତ୍ୱ ପ୍ରକାଶ — A1",
        "emoji": "🏠",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійні займенники ମୋ/ତୋ/ତାଙ୍କ узгоджуються з предметом володіння й стоять перед іменником.",
            "en": {
              "text": "Possessive pronouns ମୋ/ତୋ/ତାଙ୍କ agree with the object possessed and stand before the noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ମୋ ବହି",
                "моя книга"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Possessive Construction — A1"
      },
      {
        "id": "comparison-tulanare",
        "title": "ତୁଳନା: ଠାରୁ — A2",
        "emoji": "⚖️",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняння вищого ступеня утворюється прикметником плюс ଠାରୁ ('ніж') після предмета порівняння, без окремого суфікса на прикметнику.",
            "en": {
              "text": "Comparison of superiority is formed with the adjective plus ଠାରୁ ('than') after the compared item, with no dedicated suffix on the adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ସେ ମୋ ଠାରୁ ଲମ୍ବା।",
                "Він вищий за мене."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparison with ଠାରୁ — A2"
      },
      {
        "id": "superlative-sabuthu",
        "title": "ସର୍ବୋଚ୍ଚ: ସବୁଠାରୁ — B1",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь додає слово ସବୁଠାରୁ ('з усіх найбільше') перед прикметником.",
            "en": {
              "text": "The superlative adds the word ସବୁଠାରୁ ('most of all') before the adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ସେ ସବୁଠାରୁ ଲମ୍ବା।",
                "Він найвищий."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Superlative with ସବୁଠାରୁ — B1"
      },
      {
        "id": "numerals-cardinal",
        "title": "ମୌଳିକ ସଂଖ୍ୟା — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Кількісні числівники мають власні одійські корені, здебільшого нерегулярні для чисел від 1 до 100.",
            "en": {
              "text": "Cardinal numbers have their own Odia roots, mostly irregular from 1 to 100."
            }
          },
          {
            "type": "table",
            "title": "Числа",
            "rows": [
              [
                "ଏକ, ଦୁଇ, ତିନି",
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
        "title": "କ୍ରମିକ ସଂଖ୍ୟା — A2",
        "emoji": "🥇",
        "sections": [
          {
            "type": "intro",
            "text": "Порядкові числівники утворюються суфіксом -ୟ, доданим до кількісного числівника.",
            "en": {
              "text": "Ordinal numbers are formed with the suffix -ୟ added to the cardinal number."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ତୃତୀୟ",
                "третій"
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
        "title": "ପ୍ରଶ୍ନବାଚକ ଶବ୍ଦ — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питальні слова କଣ (що), କିଏ (хто), କେଉଁଠି (де), କେବେ (коли) зазвичай стоять на тому самому місці в реченні, де було б слово, яке вони заміняють.",
            "en": {
              "text": "The question words କଣ (what), କିଏ (who), କେଉଁଠି (where), କେବେ (when) normally stand in the same sentence position the replaced word would occupy."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ତୁମେ କେଉଁଠି ଯାଉଛ?",
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
        "title": "ସମ୍ବନ୍ଧବାଚକ: ଯିଏ, ଯାହା — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Відносний займенник ଯିଏ (для осіб) чи ଯାହା (для речей) уводить підрядне речення й зазвичай супроводжується вказівним ସେ/ତାହା в головному реченні.",
            "en": {
              "text": "The relative pronoun ଯିଏ (for people) or ଯାହା (for things) introduces a relative clause and is usually paired with the demonstrative ସେ/ତାହା in the main clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ଯିଏ ଆସିଲା, ସେ ମୋ ବନ୍ଧୁ।",
                "Той, хто прийшов, — мій друг."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Pronouns: ଯିଏ, ଯାହା — B1"
      },
      {
        "id": "word-order-sov",
        "title": "ବାକ୍ୟ ଗଠନ: SOV — A1",
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
                "ମୁଁ ଭାତ ଖାଏ।",
                "Я їм рис (я-рис-їм)."
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
        "id": "adjective-invariant",
        "title": "ବିଶେଷଣ ଅପରିବର୍ତ୍ତନୀୟ — A2",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники не змінюються ні за родом (якого немає взагалі), ні за числом іменника, — одна незмінна форма перед будь-яким іменником.",
            "en": {
              "text": "Adjectives don't change for gender (which doesn't exist at all) or the noun's number — one invariant form before any noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ଭଲ ପିଲା / ଭଲ ପିଲାମାନେ (той самий прикметник)",
                "хороша дитина / хороші діти"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Invariant Adjectives — A2"
      },
      {
        "id": "plural-marker-mane-gudika",
        "title": "ବହୁବଚନ: -ମାନେ, -ଗୁଡ଼ିକ — A1",
        "emoji": "➕",
        "sections": [
          {
            "type": "intro",
            "text": "Множина розрізняється за одухотвореністю: суфікс -ମାନେ для людей і тварин, -ଗୁଡ଼ିକ для неживих предметів, — той самий граматичний принцип, що й у сусідніх бенгальській та ассамській.",
            "en": {
              "text": "The plural is distinguished by animacy: the suffix -ମାନେ for people and animals, -ଗୁଡ଼ିକ for inanimate objects — the same grammatical principle found in neighboring Bengali and Assamese."
            }
          },
          {
            "type": "table",
            "title": "Приклади суфіксів",
            "rows": [
              [
                "ପିଲାମାନେ (діти, одушевлена)",
                "ବହିଗୁଡ଼ିକ (книги, нежива)"
              ]
            ],
            "en": {
              "title": "Suffix Examples"
            }
          }
        ],
        "titleEn": "Plural: -ମାନେ, -ଗୁଡ଼ିକ — A1"
      },
      {
        "id": "vocative-forms",
        "title": "ସମ୍ବୋଧନ — B1",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Звертання часто вживає родинний термін чи вкорочену форму імені, часто із закінченням на -ରେ для наголошеного звертання.",
            "en": {
              "text": "Direct address often uses a kinship term or a shortened name form, often ending in -ରେ for an emphatic address."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ମା'!",
                "Мамо!"
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
        "title": "କ୍ଷୁଦ୍ରାର୍ଥକ ପ୍ରତ୍ୟୟ — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувально-пестливий суфікс -ଆ/-ଣୀ, доданий до кореня, надає слову ласкавого чи зменшеного відтінку.",
            "en": {
              "text": "The diminutive suffix -ଆ/-ଣୀ, added to a root, gives the word an affectionate or diminished shade."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ଛୁଆ → ଛୁଆଁ",
                "дитина → манюсінька дитинка"
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
        "id": "reflexive-pronoun-nije",
        "title": "ନିଜେ: ଆତ୍ମବାଚକ — A2",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотний займенник ନିଜେ ('сам') незалежний від особи й числа підмета й підкреслює, що дія стосується самого підмета.",
            "en": {
              "text": "The reflexive pronoun ନିଜେ ('oneself') is independent of the subject's person and number and emphasizes that the action concerns the subject itself."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ସେ ନିଜକୁ ଦେଖିଲା।",
                "Він побачив самого себе."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reflexive Pronoun: ନିଜେ — A2"
      },
      {
        "id": "kinship-terms-elaborate",
        "title": "ସମ୍ପର୍କୀୟ ଶବ୍ଦ — B1",
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
                "ବଡ଼ ଭାଇ (старший брат) vs ସାନ ଭାଇ (молодший брат)",
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
        "id": "existential-achi-nahin",
        "title": "ଅସ୍ତିତ୍ୱ: ଅଛି, ନାହିଁ — A1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово ଅଛି виражає і наявність предмета, і володіння ним; заперечна форма ନାହିଁ позначає їхню відсутність.",
            "en": {
              "text": "The verb ଅଛି expresses both the presence of something and possession of it; the negative form ନାହିଁ marks their absence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ମୋ ପାଖରେ ବହି ଅଛି।",
                "У мене є книга."
              ],
              [
                "ମୋ ପାଖରେ ପଇସା ନାହିଁ।",
                "У мене немає грошей."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Existential: ଅଛି, ନାହିଁ — A1"
      },
      {
        "id": "compound-word-formation",
        "title": "ମିଶ୍ରିତ ଶବ୍ଦ ଗଠନ — B2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Складні слова поєднують два корені в одне ціле, часто за санскритськими моделями словоскладання, успадкованими через літературну мову.",
            "en": {
              "text": "Compound words join two roots into one unit, often following Sanskrit compounding models inherited through the literary language."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ପୁସ୍ତକାଳୟ (бібліотека, буквально 'книга-приміщення')",
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
        "id": "round-script-history",
        "title": "ଗୋଲାକାର ଲିପି ଇତିହାସ — B1",
        "emoji": "⭕",
        "sections": [
          {
            "type": "intro",
            "text": "Одійське письмо складається з характерних округлих, дугастих форм — вони виникли тому, що прямі лінії розривали пальмове листя, на якому писали загостреним стилем до появи паперу.",
            "en": {
              "text": "Odia script consists of characteristic round, arched letterforms — they arose because straight lines would tear the palm leaves written on with a sharp stylus before paper became common."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ଓଡ଼ିଆ ଲିପି ଗୋଲାକାର ଅଟେ।",
                "Одійське письмо кругле."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Round Script History — B1"
      },
      {
        "id": "coordinating-conjunctions",
        "title": "ସଂଯୋଜକ: ଓ, ବା, କିନ୍ତୁ — A1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Сурядні сполучники ଓ ('і'), ବା ('або'), କିନ୍ତୁ ('але') з'єднують слова й речення так само, як в українській, не впливаючи на порядок слів навколо себе.",
            "en": {
              "text": "Coordinating conjunctions ଓ ('and'), ବା ('or'), କିନ୍ତୁ ('but') connect words and clauses just as in Ukrainian, without affecting the word order around them."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ମୁଁ ଓ ତୁମେ",
                "я і ти"
              ],
              [
                "ଭଲ କିନ୍ତୁ ମହଙ୍ଗା",
                "гарне, але дороге"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Coordinating Conjunctions: ଓ, ବା, କିନ୍ତୁ — A1"
      },
      {
        "id": "honorific-verb-ending-three-tier",
        "title": "ସମ୍ମାନସୂଚକ କ୍ରିୟା ପ୍ରତ୍ୟୟ — B2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Кожен з трьох рівнів займенника 'ти/ви' (ତୁ, ତୁମେ, ଆପଣ) викликає повністю окремий набір дієслівних закінчень у кожному часі, — три паралельні системи відмінювання, а не одна форма з доданою часткою ввічливості.",
            "en": {
              "text": "Each of the three tiers of 'you' pronoun (ତୁ, ତୁମେ, ଆପଣ) triggers an entirely separate set of verb endings in every tense — three parallel conjugation systems, not one form with a politeness particle added."
            }
          },
          {
            "type": "table",
            "title": "Три системи для 'йти'",
            "rows": [
              [
                "ଯାଉଛୁ (ତୁ) / ଯାଉଛ (ତୁମେ) / ଯାଉଛନ୍ତି (ଆପଣ)",
                "три різні форми того самого значення"
              ]
            ],
            "en": {
              "title": "Three Systems for 'to go'"
            }
          }
        ],
        "titleEn": "Honorific Verb Endings: Three Tiers — B2"
      },
      {
        "id": "politeness-register-depth",
        "title": "ଶିଷ୍ଟାଚାର ସ୍ତର: ଗଭୀର — B2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Вибір займенника й дієслівного закінчення має узгоджуватися одночасно — не можна вжити ввічливий займенник ଆପଣ з неввічливим дієслівним закінченням, і навпаки.",
            "en": {
              "text": "Pronoun and verb-ending choice must agree simultaneously — one cannot use the polite pronoun ଆପଣ with an impolite verb ending, and vice versa."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ଆପଣ କେମିତି ଅଛନ୍ତି? (не 'ଆପଣ କେମିତି ଅଛୁ')",
                "Як ви поживаєте? (узгоджена ввічливість)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Coordinated Pronoun-Verb Politeness — B2"
      },
      {
        "id": "sambalpuri-dialect-variation",
        "title": "ସମ୍ବଲପୁରୀ ଓ ଅନ୍ୟ ଉପଭାଷା — B2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Самбалпурська говірка західної Одіші розходиться з стандартом настільки в лексиці й вимові, що частина мовознавців вважає її окремою, хоч і близькоспорідненою мовою.",
            "en": {
              "text": "The Sambalpuri dialect of western Odisha diverges from the standard enough in vocabulary and pronunciation that some linguists consider it a separate, though closely related, language."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Самбалпурська зберігає власну літературну традицію, відмінну від стандарту.",
                "діалектна дивергенція"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Sambalpuri Dialect Variation — B2"
      },
      {
        "id": "bengali-assamese-sister-language-comparison",
        "title": "ବଙ୍ଗଳା ଓ ଅସମୀୟା ସହ ସମ୍ପର୍କ — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Одія, бенгальська й ассамська утворюють східноіндоарійську підгрупу з подібними спрощеннями відносно санскритської бази — утрата роду, суфіксальна означеність, — розвинутими незалежно, але паралельно.",
            "en": {
              "text": "Odia, Bengali, and Assamese form the Eastern Indo-Aryan subgroup with similar simplifications relative to the Sanskrit base — loss of gender, suffixal definiteness — developed independently but in parallel."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Східноіндоарійська підгрупа поділяє кілька типологічних спрощень.",
                "спорідненість з бенгальською й ассамською"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Bengali and Assamese: Sister Languages — B2"
      },
      {
        "id": "jagannath-cultural-vocabulary",
        "title": "ଜଗନ୍ନାଥ ସଂସ୍କୃତି ଶବ୍ଦାବଳୀ — B2",
        "emoji": "🛕",
        "sections": [
          {
            "type": "intro",
            "text": "Культ Джаганнатха в Пурі, центральний для одійської ідентичності, утворює окремий, детально розроблений шар ритуальної й храмової лексики, майже незрозумілий поза культурним контекстом.",
            "en": {
              "text": "The Jagannath cult in Puri, central to Odia identity, forms a separate, elaborately developed layer of ritual and temple vocabulary, nearly incomprehensible outside the cultural context."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ରଥଯାତ୍ରା ଶବ୍ଦାବଳୀ ଜଗନ୍ନାଥ ସଂସ୍କୃତି ସହ ଜଡ଼ିତ।",
                "Лексика свята Ратха-ятра пов'язана з культом Джаганнатха."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Jagannath Cultural Vocabulary — B2"
      },
      {
        "id": "odissi-classical-arts-vocabulary",
        "title": "ଓଡ଼ିଶୀ ନୃତ୍ୟ ଶବ୍ଦାବଳୀ — B2",
        "emoji": "💃",
        "sections": [
          {
            "type": "intro",
            "text": "Класичний танець одіссі та пов'язана з ним поетична традиція мають власний спеціалізований словниковий шар для рухів, поз і музичних ритмів, успадкований з храмової практики.",
            "en": {
              "text": "The classical Odissi dance and its associated poetic tradition have their own specialized vocabulary layer for movements, poses, and musical rhythms, inherited from temple practice."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Термінологія одіссі успадкована з храмової танцювальної традиції.",
                "спеціалізований шар танцювальної лексики"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Odissi Classical Dance Vocabulary — B2"
      },
      {
        "id": "tatsama-tadbhava-vocabulary",
        "title": "ତତ୍ସମ ଓ ତଦ୍ଭବ ଶବ୍ଦ — B2",
        "emoji": "📚",
        "sections": [
          {
            "type": "intro",
            "text": "Лексика поділяється на tatsama (запозичене прямо з санскриту без змін) і tadbhava (унаслідуване з санскриту через природну звукову еволюцію) — той самий історичний корінь, два різних шляхи входження в сучасну мову.",
            "en": {
              "text": "Vocabulary splits into tatsama (borrowed directly from Sanskrit unchanged) and tadbhava (inherited from Sanskrit through natural sound evolution) — the same historical root, two different paths into the modern language."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ସୂର୍ଯ୍ୟ (tatsama, пряме санскритське запозичення 'сонце')",
                "формальний прямий шар лексики"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Tatsama and Tadbhava Vocabulary — B2"
      },
      {
        "id": "persian-arabic-historical-loanwords",
        "title": "ଫାରସୀ-ଆରବୀ ଶବ୍ଦ: ମୋଗଲ ଯୁଗ — B1",
        "emoji": "🕌",
        "sections": [
          {
            "type": "intro",
            "text": "Століття могольського адміністративного впливу залишили в одії окремий шар персько-арабських запозичень у правовій й адміністративній лексиці, відмінний від пізнішого англійського колоніального шару.",
            "en": {
              "text": "Centuries of Mughal administrative influence left Odia with a distinct layer of Perso-Arabic loanwords in legal and administrative vocabulary, separate from the later English colonial layer."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ଜମିଦାର (землевласник) — з перської",
                "перське адміністративне запозичення"
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
        "id": "english-colonial-loanwords",
        "title": "ଇଂରାଜୀ ଉପନିବେଶିକ ଶବ୍ଦ — A2",
        "emoji": "🇬🇧",
        "sections": [
          {
            "type": "intro",
            "text": "Британська колоніальна доба залишила в одії окремий, пізніший шар англійських запозичень у технічній і шкільній лексиці, окремий від могольського персько-арабського шару.",
            "en": {
              "text": "The British colonial period left Odia with a separate, later layer of English loanwords in technical and school vocabulary, distinct from the Mughal Perso-Arabic layer."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ସ୍କୁଲ (школа) — з англ. school",
                "англійське колоніальне запозичення"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "English Colonial-Era Loanwords — A2"
      },
      {
        "id": "code-switching-english-urban",
        "title": "ଇଂରାଜୀ-ଓଡ଼ିଆ ମିଶ୍ରଣ — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "У міському й освіченому мовленні типове перемикання кодів усередині одного речення — граматичний каркас одійський, а частина лексики вставляється з англійської без адаптації.",
            "en": {
              "text": "Urban, educated speech typically code-switches within a single sentence — the grammatical frame is Odia, while some vocabulary is inserted from English without adaptation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ମୁଁ office ରେ ଅଛି।",
                "Я в офісі (English office вставлене напряму)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "English-Odia Code-Switching — B2"
      },
      {
        "id": "numeral-classifier-depth",
        "title": "ଗଣକ ଶବ୍ଦ: ଅଧିକ ବିବରଣୀ — B2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Крім -ଟା й -ଜଣ, окремі класифікатори вживаються для плоских предметів, довгастих предметів і пар, — розгалужена система, хоч і менш деталізована, ніж у східноазійських мовах.",
            "en": {
              "text": "Besides -ଟା and -ଜଣ, separate classifiers are used for flat objects, elongated objects, and pairs — a branching system, though less detailed than in East Asian languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Різні класифікатори обслуговують різні категорії предметів.",
                "розгалужена класифікаторна система"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Numeral Classifiers: Further Depth — B2"
      },
      {
        "id": "converb-chaining-depth",
        "title": "ପୂର୍ବକାଳୀନ କ୍ରିୟା: ବିସ୍ତାର — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Довгий ланцюжок дієприслівників може описувати цілу послідовність дій в одному реченні, і лише останнє дієслово в ланцюжку несе граматичний час.",
            "en": {
              "text": "A long chain of converbs can describe an entire sequence of actions in one sentence, and only the last verb in the chain carries grammatical tense."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ଉଠି, ସ୍ନାନ କରି, ଖାଇ, ଅଫିସ୍ ଗଲା।",
                "Він устав, помився, поїв і пішов в офіс (лише останнє дієслово має час)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Long Converb Chains — B2"
      },
      {
        "id": "causative-construction",
        "title": "ପ୍ରେରଣାର୍ଥକ କ୍ରିୟା — B2",
        "emoji": "⚡",
        "sections": [
          {
            "type": "intro",
            "text": "Каузативний суфікс -ଆଇ, вставлений перед закінченням дієслова, додає значення 'змушувати робити' — граматично вбудована причиновість.",
            "en": {
              "text": "The causative suffix -ଆଇ, inserted before the verb ending, adds the meaning 'to make someone do' — grammatically built-in causation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ବସିବା (сидіти) → ବସାଇବା (садити когось)",
                "каузативний суфікс"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Causative Suffix: -ଆଇ — B2"
      },
      {
        "id": "passive-like-construction",
        "title": "କର୍ମବାଚ୍ୟ ସମାନ ରଚନା — B2",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний відтінок часто передається дієприкметником плюс ଯିବା ('йти'), а не окремим граматичним пасивним станом, — 'книга пишеться' через конструкцію, близьку до 'книга йде написана'.",
            "en": {
              "text": "A passive shade is often conveyed with a participle plus ଯିବା ('to go'), rather than a dedicated grammatical passive voice — 'the book is written' via a construction close to 'the book goes written'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ପତ୍ର ଲେଖା ଯାଉଛି।",
                "Лист пишеться."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Passive-Like Construction with ଯିବା — B2"
      },
      {
        "id": "double-object-construction",
        "title": "ଦ୍ୱିତ୍ୱ କର୍ମ ରଚନା — B2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "У реченнях з двома додатками (давати комусь щось) обидва одушевлені додатки можуть отримати частку କୁ, і лише контекст і порядок слів розрізняють, хто отримувач, а хто предмет.",
            "en": {
              "text": "In sentences with two objects (giving someone something), both animate objects can take the particle କୁ, and only context and word order distinguish the recipient from the item."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ମୁଁ ତାକୁ ପିଲାକୁ ଦେଲି।",
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
        "id": "emphatic-particle",
        "title": "ଗୁରୁତ୍ୱାରୋପକ ଶବ୍ଦ: ହିଁ — B1",
        "emoji": "💯",
        "sections": [
          {
            "type": "intro",
            "text": "Частка ହିଁ, приєднана після будь-якого слова, підкреслює виключність чи наголос — 'саме, тільки', виключаючи альтернативи.",
            "en": {
              "text": "The particle ହିଁ, attached after any word, emphasizes exclusivity or focus — 'exactly, only', ruling out alternatives."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ସେ ହିଁ ଆସିଲା।",
                "Саме він і прийшов."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Emphatic Particle ହିଁ — B1"
      },
      {
        "id": "discourse-particles",
        "title": "ଆଲୋଚନା ସୂଚକ ଶବ୍ଦ — B1",
        "emoji": "🗣️",
        "sections": [
          {
            "type": "intro",
            "text": "Дискурсивні частки організують розмову, позначаючи підтвердження почутого чи невпевненість, без власного лексичного значення поза контекстом діалогу.",
            "en": {
              "text": "Discourse particles organize conversation, marking confirmation of what was heard or uncertainty, with no lexical meaning of their own outside dialogue."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Дискурсивні частки структурують розмову поза буквальним значенням.",
                "приклад дискурсивної частки"
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
        "id": "fixed-idiomatic-expressions",
        "title": "ପ୍ରବାଦ ଓ ରୁଢ଼ି — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Численні застиглі ідіоми вживаються цілими блоками з переносним значенням, не виведеним з буквального перекладу окремих слів.",
            "en": {
              "text": "Numerous fixed idioms are used as whole blocks with a figurative meaning not derived from the literal translation of the individual words."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ମୁଣ୍ଡ ଖରାପ ହେବା। (буквально 'голова стає поганою' → втратити самовладання)",
                "застигла ідіома"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Fixed Idiomatic Expressions — B2"
      },
      {
        "id": "verb-serialization-depth",
        "title": "କ୍ରିୟା ଶୃଙ୍ଖଳା — B2",
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
                "ସେ ଦୌଡ଼ି ପଳାଇଲା।",
                "Він утік бігом (буквально 'бігти-втекти')."
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
        "id": "honorific-plural-address",
        "title": "ସମ୍ମାନାର୍ଥକ ବହୁବଚନ — B2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Займенник ଆପଣ ('ви') сам по собі вже є ввічливою формою однини, узгодженою з дієсловом у формі, паралельній до множини, — та сама стратегія 'множина-як-повага', що й у багатьох мовах світу.",
            "en": {
              "text": "The pronoun ଆପଣ ('you') is itself already the polite singular form, agreeing with a verb form parallel to the plural — the same 'plural-as-respect' strategy found in many world languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ввічливе звертання граматично паралельне до множини.",
                "множина як знак поваги"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Plural-Parallel Polite Address — B2"
      },
      {
        "id": "numeral-time-expressions",
        "title": "ସମୟ ଅଭିବ୍ୟକ୍ତି — B1",
        "emoji": "🕐",
        "sections": [
          {
            "type": "intro",
            "text": "Вираження часу доби вживає власне слово ଟା ('година'), додане після числівника, — окрема конструкція, відмінна від звичайної лічби предметів.",
            "en": {
              "text": "Time-of-day expressions use the dedicated word ଟା ('o'clock'), added after the number — a distinct construction from ordinary object counting."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ତିନିଟା",
                "о третій годині"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Time Expressions: ଟା — B1"
      },
      {
        "id": "comitative-postposition-sange",
        "title": "ସଙ୍ଗେ: ସହଚର କାରକ — A2",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "Супровідність ('разом з') виражається зворотом іменник плюс ସଙ୍ଗେ, доданим після нього, — власна конструкція, відмінна від простих відмінкових часток.",
            "en": {
              "text": "Accompaniment ('together with') is expressed with the phrase noun plus ସଙ୍ଗେ, added after it — its own construction, distinct from the simple case particles."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ମୋ ସାଙ୍ଗ ସଙ୍ଗେ",
                "з моїм другом"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comitative: ସଙ୍ଗେ — A2"
      },
      {
        "id": "animacy-plural-depth",
        "title": "ପ୍ରାଣୀତ୍ୱ ଅନୁସାରେ ବହୁବଚନ: ବିସ୍ତାର — B2",
        "emoji": "➕",
        "sections": [
          {
            "type": "intro",
            "text": "Вибір суфікса множини -ମାନେ проти -ଗୁଡ଼ିକ іноді вживають і для стилістичного ефекту — -ମାନେ для колективів, які трактують як одухотворені, навіть якщо формально це не люди.",
            "en": {
              "text": "The choice between the plural suffix -ମାନେ and -ଗୁଡ଼ିକ is sometimes also used for stylistic effect — -ମାନେ for collectives treated as animate, even if formally not people."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Вибір суфікса множини може мати стилістичний, а не лише граматичний ефект.",
                "стилістичне вживання суфіксів множини"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Animacy Plural: Further Depth — B2"
      },
      {
        "id": "loanword-adaptation-phonology",
        "title": "ଋଣକୃତ ଶବ୍ଦର ଧ୍ୱନି ଅନୁକୂଳନ — B1",
        "emoji": "🔧",
        "sections": [
          {
            "type": "intro",
            "text": "Запозичені слова, потрапивши в мову, адаптуються до одійського звукового складу, вписуючись у наявний набір приголосних і голосних.",
            "en": {
              "text": "Loanwords, once they enter the language, are adapted to Odia's sound system, fitting into the existing consonant and vowel inventory."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Запозичені слова адаптуються до фонологічної системи одії.",
                "фонологічно адаптоване запозичення"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Loanword Phonological Adaptation — B1"
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
        "title": "ଅନିୟମିତ କ୍ରିୟା — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово ହେବା ('бути, ставати') має кілька нерегулярних форм у різних часах, що не виводяться з очікуваного зразка.",
            "en": {
              "text": "The verb ହେବା ('to be, to become') has several irregular forms across different tenses that can't be derived from the expected pattern."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ହୁଏ (не за звичайним зразком)",
                "нерегулярна форма дієслова ହେବା"
              ]
            ]
          }
        ],
        "titleEn": "Irregular Verbs — B1"
      },
      {
        "id": "irregular-plural-forms",
        "title": "ଅନିୟମିତ ବହୁବଚନ — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька частовживаних іменників мають нерегулярну форму множини, яку слід запам'ятовувати окремо, поза загальним правилом за одухотвореністю.",
            "en": {
              "text": "A few common nouns have an irregular plural form that must be memorized separately, outside the general animacy-based rule."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Кілька іменників мають нерегулярну форму множини.",
                "нерегулярна множина"
              ]
            ]
          }
        ],
        "titleEn": "Irregular Plurals — B1"
      },
      {
        "id": "fixed-proverbs-archaic-grammar",
        "title": "ପ୍ରବାଦରେ ପୁରାତନ ବ୍ୟାକରଣ — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Прислів'я зберігають архаїчну граматичну структуру й лексику, вже втрачену в живій мові, і вживаються цілими блоками без граматичного розбору.",
            "en": {
              "text": "Proverbs preserve archaic grammatical structure and vocabulary already lost from the living language, and are used as whole blocks with no grammatical analysis."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ଯେମିତି କର୍ମ ସେମିତି ଫଳ।",
                "Який учинок, такий і плід (застигла приказка з архаїчними формами)."
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
