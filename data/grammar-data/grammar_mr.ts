// Vymova — data/grammar-data/grammar_mr.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_MR: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "सर्वनामे — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У маратхі є граматичний рід не лише в іменниках, а й у формах дієслова минулого часу, узгоджених з підметом.",
            "en": {
              "text": "Marathi has grammatical gender not just in nouns but also in past-tense verb forms, which agree with the subject."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "मी (mī)"
              ],
              [
                "ти (зв. / ввічл.)",
                "तू / तुम्ही (tū / tumhī)"
              ],
              [
                "він / вона",
                "तो / ती (to / tī)"
              ],
              [
                "ми",
                "आम्ही (āmhī)"
              ],
              [
                "ви",
                "तुम्ही (tumhī)"
              ],
              [
                "вони (ч./ж.)",
                "ते / त्या (te / tyā)"
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
        "id": "modi-lipi",
        "title": "मोडी लिपी — A2",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "До ХХ століття маратхі записувалася переважно курсивним письмом моді, відмінним від деванагарі, — власна писемна традиція, яку витіснила стандартизація деванагарі лише в недавній історії.",
            "en": {
              "text": "Until the 20th century Marathi was mostly written in the cursive Modi script, distinct from Devanagari — its own writing tradition, displaced by Devanagari standardization only recently in history."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "मोडी लिपी ऐतिहासिक कागदपत्रांत वापरली जात असे.",
                "Письмо моді вживали в історичних документах."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Modi Script — A2"
      },
      {
        "id": "retroflex-la",
        "title": "ळ: विशेष ध्वनी — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Маратхі має особливу ретрофлексну літеру ळ, відсутню в стандартній хінді, — звук, що вимовляється язиком, загнутим назад, і розрізняє слова, які інакше звучали б однаково.",
            "en": {
              "text": "Marathi has a special retroflex letter ळ, absent from standard Hindi — a sound made with the tongue curled backward, distinguishing words that would otherwise sound identical."
            }
          },
          {
            "type": "table",
            "title": "Приклад ретрофлексного звука",
            "rows": [
              [
                "खळ (потік) vs खल (лиходій)",
                "ळ іल розрізняють значення"
              ]
            ],
            "en": {
              "title": "Retroflex Sound Example"
            }
          }
        ],
        "titleEn": "ळ: A Special Sound — A1"
      },
      {
        "id": "verb-final-negation",
        "title": "नाही: वाक्याच्या शेवटी — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення नाही (nāhī) стоїть у самому кінці речення, після дієслова, — на відміну від багатьох мов, де заперечна частка передує дієслову.",
            "en": {
              "text": "The negation नाही (nāhī) stands at the very end of the sentence, after the verb — unlike many languages where the negative particle precedes the verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "मला माहीत नाही.",
                "Я не знаю (буквально 'мені відомо не')."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Sentence-Final Negation: नाही — A1"
      },
      {
        "id": "preguntas",
        "title": "प्रश्न — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання без питального слова передаються лише висхідною інтонацією, без окремої частки чи зміни порядку слів.",
            "en": {
              "text": "Yes/no questions are marked with rising intonation alone, with no separate particle or change in word order."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "तू येतोस?",
                "Ти прийдеш?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Questions — A1"
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
        "id": "present-tense-ahe",
        "title": "वर्तमानकाळ: आहे — A1",
        "emoji": "☀️",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній час утворюється дієприкметником теперішнього часу плюс допоміжне आहे ('є'), узгоджене з підметом за родом і числом.",
            "en": {
              "text": "The present tense is formed with the present participle plus the auxiliary आहे ('is'), agreeing with the subject in gender and number."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "मी जातो आहे.",
                "Я йду (чоловік говорить)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Tense: आहे — A1"
      },
      {
        "id": "present-continuous-t-ahe",
        "title": "चालू वर्तमानकाळ: -त आहे — A2",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія в момент мовлення передається дієприкметником на -त плюс допоміжне आहे, узгоджене з підметом.",
            "en": {
              "text": "An action in progress at the moment of speaking is expressed with the participle in -त plus the auxiliary आहे, agreeing with the subject."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "मी जेवत आहे.",
                "Я саме їм."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Continuous: -त आहे — A2"
      },
      {
        "id": "past-tense-ergative",
        "title": "भूतकाळ: कर्मणी रचना — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "У перехідному минулому часі підмет отримує ергативну частку ने, а дієслово узгоджується не з підметом, а з прямим додатком за родом і числом, — розщеплена ергативність, хрестоматійна для сучасних індоарійських мов.",
            "en": {
              "text": "In the transitive past tense, the subject takes the ergative particle ने, and the verb agrees not with the subject but with the direct object in gender and number — split ergativity, a hallmark of modern Indo-Aryan languages."
            }
          },
          {
            "type": "table",
            "title": "Ергативна конструкція",
            "rows": [
              [
                "मुलाने पुस्तक वाचले. (книга с.р., дієслово узгоджене з книгою)",
                "Хлопчик прочитав книгу."
              ],
              [
                "मुलाने कादंबरी वाचली. (роман ж.р., дієслово змінюється)",
                "Хлопчик прочитав роман."
              ]
            ],
            "en": {
              "title": "Ergative Construction"
            }
          }
        ],
        "titleEn": "Past Tense: Split Ergativity — B1"
      },
      {
        "id": "past-continuous-imperfect",
        "title": "अपूर्ण भूतकाळ — B1",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія в минулому передається дієприкметником на -त плюс допоміжне होता ('був') у минулому часі.",
            "en": {
              "text": "An ongoing past action is expressed with the participle in -त plus the past auxiliary होता ('was')."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "मी जेवत होतो.",
                "Я саме їв."
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
        "id": "future-tense-el",
        "title": "भविष्यकाळ: -एल — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється синтетичним суфіксом -एल/-ईल, доданим до основи дієслова, узгодженим з підметом за особою й числом.",
            "en": {
              "text": "The future tense is formed with the synthetic suffix -एल/-ईल added to the verb stem, agreeing with the subject in person and number."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "मी जाईन.",
                "Я піду."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Future Tense: -एल — A2"
      },
      {
        "id": "imperative-mood",
        "title": "आज्ञार्थ — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Прямий наказ утворюється основою дієслова; ввічливіша форма додає суфікс -आ для звертання до старших чи незнайомих.",
            "en": {
              "text": "A direct command is formed with the verb stem; a politer form adds the suffix -आ for addressing elders or strangers."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "बस!",
                "Сідай!"
              ],
              [
                "बसा.",
                "Сідайте, будь ласка."
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
        "id": "potential-mood-shakane",
        "title": "शक्यता: शकणे — B1",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Здатність чи можливість виражається складеним дієсловом з допоміжним शकणे ('могти'), доданим після дієприкметника.",
            "en": {
              "text": "Ability or possibility is expressed with the compound verb using the auxiliary शकणे ('to be able'), added after the participle."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "मी मराठी बोलू शकतो.",
                "Я можу говорити маратхі."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Potential: शकणे — B1"
      },
      {
        "id": "perfect-tense-la-ahe",
        "title": "पूर्ण वर्तमानकाळ: -लेला आहे — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Перфект утворюється дієприкметником минулого часу на -लेला плюс допоміжне आहे, наголошуючи на теперішній актуальності результату.",
            "en": {
              "text": "The perfect is formed with the past participle in -लेला plus the auxiliary आहे, emphasizing the present relevance of the result."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "मी जेवण केलेले आहे.",
                "Я вже поїв (результат актуальний)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Perfect: -लेला आहे — B1"
      },
      {
        "id": "pluperfect-hota",
        "title": "पूर्ण भूतकाळ: -लेला होता — B2",
        "emoji": "⏮️",
        "sections": [
          {
            "type": "intro",
            "text": "Плюсквамперфект описує дію, завершену до іншої минулої дії; утворюється тим самим дієприкметником на -लेला плюс допоміжне होता в минулому часі.",
            "en": {
              "text": "The pluperfect describes an action completed before another past action; formed with the same -लेला participle plus the past auxiliary होता."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "मी आधीच जेवण केलेले होते.",
                "Я вже був поїв до того."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Pluperfect: -लेला होता — B2"
      },
      {
        "id": "habitual-past-aychaa",
        "title": "सवयीचा भूतकाळ: -ायचा — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Звичну дію в минулому передає окрема форма на -आयचा/-आयची/-आयचे, узгоджена з підметом за родом, — 'бувало, робив'.",
            "en": {
              "text": "A habitual past action is expressed with a dedicated form in -आयचा/-आयची/-आयचे, agreeing with the subject in gender — 'used to do'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "मी लहानपणी क्रिकेट खेळायचो.",
                "У дитинстві я, бувало, грав у крикет."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Habitual Past: -आयचा — B1"
      },
      {
        "id": "conditional-tar",
        "title": "जर...तर — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовне речення вводиться сполучником जर ('якщо') і завершується तर ('то') перед головним реченням.",
            "en": {
              "text": "A conditional sentence is introduced with जर ('if') and closed with तर ('then') before the main clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "जर पाऊस आला, तर मी घरी राहीन.",
                "Якщо піде дощ, я залишуся вдома."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional: जर...तर — B1"
      },
      {
        "id": "passive-voice-ja",
        "title": "कर्मणी प्रयोग: जाणे — B2",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний стан утворюється дієприкметником минулого часу плюс допоміжне जाणे ('йти'), а не буквальним 'бути' — 'книга пишеться' через 'книга йде-написана'.",
            "en": {
              "text": "The passive voice is formed with the past participle plus the auxiliary जाणे ('to go'), not a literal 'to be' — 'the book is written' via 'the book goes-written'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "पुस्तक लिहिले जाते.",
                "Книга пишеться."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Passive Voice: जाणे — B2"
      },
      {
        "id": "compound-verb-completive-taknein",
        "title": "पूर्णत्वदर्शक क्रियापद: टाकणे — B2",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Допоміжне 'легке' дієслово टाकणे ('кидати'), додане після дієприслівника, підкреслює остаточність і навмисну повноту дії.",
            "en": {
              "text": "The 'light' auxiliary verb टाकणे ('to throw'), added after the converb, emphasizes the finality and deliberate completeness of an action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "मी पत्र लिहून टाकले.",
                "Я написав листа (остаточно, повністю)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Completive Light Verb: टाकणे — B2"
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
        "id": "three-gender-system",
        "title": "तीन लिंगे — A1",
        "emoji": "⚥",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники мають три роди — чоловічий, жіночий, середній — що узгоджуються з прикметниками, займенниками й навіть дієсловами в перехідному минулому часі.",
            "en": {
              "text": "Nouns have three genders — masculine, feminine, neuter — agreeing with adjectives, pronouns, and even verbs in the transitive past tense."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "मुलगा (хлопчик, ч.р.) / मुलगी (дівчинка, ж.р.) / मूल (дитина, с.р.)",
                "три роди"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Three Genders — A1"
      },
      {
        "id": "split-ergativity-ne",
        "title": "ने: कर्ता कारक — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "У перехідному минулому часі підмет обов'язково отримує частку ने, тоді як у теперішньому й майбутньому часах цієї частки немає взагалі, — ергативність, розщеплена саме за часом.",
            "en": {
              "text": "In the transitive past tense, the subject obligatorily takes the particle ने, while in the present and future there's no such particle at all — ergativity split precisely by tense."
            }
          },
          {
            "type": "table",
            "title": "Присутність ने за часом",
            "rows": [
              [
                "मी पुस्तक वाचतो. (теп., без ने)",
                "मी पुस्तक वाचले. → मी पुस्तक वाचले होते"
              ],
              [
                "मी पुस्तक वाचले. (мин., з ने)",
                "мене-ergative прочитав книгу"
              ]
            ],
            "en": {
              "title": "ने by Tense"
            }
          }
        ],
        "titleEn": "ने: The Ergative Particle — B1"
      },
      {
        "id": "oblique-case-before-postpositions",
        "title": "सामान्यरूप: विभक्तीपूर्वी — B1",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Перед будь-якою післяйменниковою часткою іменник обов'язково переходить у непряму (загальну) форму, часто відмінну від прямого називного відмінка.",
            "en": {
              "text": "Before any postposition, the noun obligatorily shifts to the oblique (general) form, often different from the plain nominative."
            }
          },
          {
            "type": "table",
            "title": "Приклад непрямої форми",
            "rows": [
              [
                "मुलगा (наз.) → मुलाला (непряма форма + ला)",
                "хлопчик → хлопчикові"
              ]
            ],
            "en": {
              "title": "Oblique Form Example"
            }
          }
        ],
        "titleEn": "The Oblique Case Before Postpositions — B1"
      },
      {
        "id": "postposition-system",
        "title": "विभक्ती प्रत्यय — A2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Граматичні відношення передаються післяйменниковими частками, що йдуть після іменника в непрямій формі, а не прийменниками перед ним.",
            "en": {
              "text": "Grammatical relations are conveyed with postpositions that follow the noun in its oblique form, rather than prepositions preceding it."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "घरात (у домі)",
                "post-postpositional locative"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Postposition System — A2"
      },
      {
        "id": "plural-formation",
        "title": "अनेकवचन — A2",
        "emoji": "➕",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється власним набором закінчень для кожного роду — -ई для чоловічого, -आ для жіночого, -ई для середнього роду з подовженням, — не єдиний суфікс на всі слова.",
            "en": {
              "text": "The plural is formed with its own set of endings for each gender — -ई for masculine, -आ for feminine, a lengthened -ई for neuter — not a single suffix for every word."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "मुलगा → मुलगे (хлопчики, ч.р.)",
                "приклад множини"
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
        "id": "demonstratives-three-gender",
        "title": "दर्शक सर्वनामे: हा, ही, हे — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Вказівне हा/ही/हे ('цей') узгоджується з родом іменника, а तो/ती/ते ('той') позначає віддалений предмет, теж з узгодженням роду.",
            "en": {
              "text": "The demonstrative हा/ही/हे ('this') agrees with the noun's gender, and तो/ती/ते ('that') marks a distant item, also with gender agreement."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "हा मुलगा / ही मुलगी / हे मूल",
                "цей хлопчик / ця дівчинка / ця дитина"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Demonstratives: हा, ही, हे — A1"
      },
      {
        "id": "possessive-cha-chi-che",
        "title": "चा, ची, चे: मालकी — B1",
        "emoji": "🏠",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійна частка чा/чी/चे узгоджується за родом не з володарем, а з предметом володіння, — навіть якщо власник чоловік, частка стане чі, якщо володіє річчю жіночого роду.",
            "en": {
              "text": "The possessive particle चा/ची/चे agrees in gender not with the possessor but with the possessed item — even if the possessor is male, the particle becomes ची if he owns a feminine-gender item."
            }
          },
          {
            "type": "table",
            "title": "Узгодження з предметом",
            "rows": [
              [
                "रामचा मुलगा (Рамів син, ч.р.)",
                "хлопчик — чоловічий рід"
              ],
              [
                "रामची मुलगी (Рамова дочка, ж.р.)",
                "дівчинка — жіночий рід, та сама особа-власник"
              ]
            ],
            "en": {
              "title": "Agreement with the Possessed Item"
            }
          }
        ],
        "titleEn": "चा/ची/चे: Possessive Agreeing with the Item — B1"
      },
      {
        "id": "inclusive-exclusive-aapan-aamhi",
        "title": "आपण vs आम्ही: समावेशक आणि अनन्य — B2",
        "emoji": "👥",
        "sections": [
          {
            "type": "intro",
            "text": "Маратхі, на відміну від більшості індоарійських мов, розрізняє включне आपण ('ми зі слухачем') і виключне आम्ही ('ми без слухача') — риса, запозичена через контакт з дравідійськими мовами Декану, а не успадкована з давньоіндійської.",
            "en": {
              "text": "Marathi, unlike most Indo-Aryan languages, distinguishes inclusive आपण ('we, including the listener') from exclusive आम्ही ('we, excluding the listener') — a feature borrowed through contact with the Dravidian languages of the Deccan, not inherited from Old Indo-Aryan."
            }
          },
          {
            "type": "table",
            "title": "Включне проти виключного",
            "rows": [
              [
                "आपण जाऊया. (включне, 'ходімо, і ти теж')",
                "запрошення разом"
              ],
              [
                "आम्ही गेलो. (виключне, без слухача)",
                "ми пішли (без тебе)"
              ]
            ],
            "en": {
              "title": "Inclusive vs. Exclusive"
            }
          }
        ],
        "titleEn": "आपण vs. आम्ही: Inclusive/Exclusive 'We' — B2"
      },
      {
        "id": "comparison-peksha",
        "title": "तुलना: पेक्षा — A2",
        "emoji": "⚖️",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняння вищого ступеня утворюється прикметником плюс पेक्षा ('ніж') після предмета порівняння — без окремого суфікса на прикметнику.",
            "en": {
              "text": "Comparison of superiority is formed with the adjective plus पेक्षा ('than') after the compared item — with no dedicated suffix on the adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "तो माझ्यापेक्षा उंच आहे.",
                "Він вищий за мене."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparison with पेक्षा — A2"
      },
      {
        "id": "superlative-sarvaat",
        "title": "सर्वोत्कृष्टता: सर्वात — B1",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь додає слово सर्वात ('з усіх найбільше') перед прикметником.",
            "en": {
              "text": "The superlative adds the word सर्वात ('most of all') before the adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "तो सर्वात उंच आहे.",
                "Він найвищий."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Superlative with सर्वात — B1"
      },
      {
        "id": "numerals-cardinal",
        "title": "मूळ संख्या — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Кількісні числівники мають власні маратхські корені, здебільшого нерегулярні для чисел від 1 до 100, — їх слід запам'ятовувати як окремі слова, а не виводити з правил.",
            "en": {
              "text": "Cardinal numbers have their own Marathi roots, mostly irregular from 1 to 100 — they must be memorized as individual words rather than derived from rules."
            }
          },
          {
            "type": "table",
            "title": "Числа",
            "rows": [
              [
                "एक, दोन, तीन",
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
        "title": "क्रमवाचक संख्या — A2",
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
                "तिसरा मुलगा / तिसरी मुलगी",
                "третій хлопчик / третя дівчинка"
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
        "title": "प्रश्नार्थक शब्द — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питальні слова काय (що), कोण (хто), कुठे (де), केव्हा (коли) зазвичай стоять на тому самому місці в реченні, де було б слово, яке вони заміняють.",
            "en": {
              "text": "The question words काय (what), कोण (who), कुठे (where), केव्हा (when) normally stand in the same sentence position the replaced word would occupy."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "तू कुठे जातोस?",
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
        "id": "relative-clause-jo-ji-je",
        "title": "संबंधवाचक सर्वनाम: जो, जी, जे — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Відносний займенник जो/जी/जे узгоджується за родом з означуваним іменником і зазвичай супроводжується вказівним त्या ('той') у головному реченні.",
            "en": {
              "text": "The relative pronoun जो/जी/जे agrees in gender with the modified noun and is usually paired with the demonstrative त्या ('that') in the main clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "जो मुलगा आला, तो माझा मित्र आहे.",
                "Хлопчик, який прийшов, — мій друг."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Pronoun: जो, जी, जे — B1"
      },
      {
        "id": "compound-postpositions",
        "title": "संयुक्त विभक्ती — B2",
        "emoji": "🧱",
        "sections": [
          {
            "type": "intro",
            "text": "Складні післяйменникові звороти поєднують родовий показник चा/ची/चे з іще однією часткою, утворюючи уточненіше просторове чи присвійне значення.",
            "en": {
              "text": "Compound postpositional phrases combine the genitive marker चा/ची/चे with yet another particle, forming a more refined spatial or possessive meaning."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "माझ्याकडे (у мене, буквально 'у моєму напрямку')",
                "складений післяйменниковий зворот"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Compound Postpositions — B2"
      },
      {
        "id": "reflexive-pronoun-aapan-swataha",
        "title": "स्वतः: आत्मवाचक सर्वनाम — A2",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотний займенник स्वतः ('сам') незалежний від особи й числа підмета й підкреслює, що дія стосується самого підмета.",
            "en": {
              "text": "The reflexive pronoun स्वतः ('oneself') is independent of the subject's person and number and emphasizes that the action concerns the subject itself."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "त्याने स्वतःला पाहिले.",
                "Він побачив самого себе."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reflexive Pronoun: स्वतः — A2"
      },
      {
        "id": "diminutive-suffixes",
        "title": "लघुत्वदर्शक प्रत्यय — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувально-пестливий суфікс -ऊ/-डी, доданий до кореня, надає слову ласкавого чи зменшеного відтінку, часто змінюючи рід слова на середній.",
            "en": {
              "text": "The diminutive suffix -ऊ/-डी, added to a root, gives the word an affectionate or diminished shade, often shifting the word's gender to neuter."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "मुलगा → मुलगू (манюсінький хлопчик)",
                "зменшувальна форма"
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
        "id": "word-order-sov",
        "title": "वाक्यरचना: SOV — A1",
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
                "मी भात खातो.",
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
        "id": "adjective-agreement-depth",
        "title": "विशेषण सुसंवाद: सखोल — B1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник, що закінчується на -आ, узгоджується з іменником одразу за трьома категоріями — родом, числом і відмінком, — тоді як прикметники з іншим закінченням лишаються незмінними.",
            "en": {
              "text": "An adjective ending in -आ agrees with the noun across three categories at once — gender, number, and case — while adjectives with other endings stay invariant."
            }
          },
          {
            "type": "table",
            "title": "Приклад узгодження",
            "rows": [
              [
                "चांगला मुलगा / चांगली मुलगी / चांगले मूल",
                "хороший хлопчик / хороша дівчинка / хороша дитина"
              ]
            ],
            "en": {
              "title": "Agreement Example"
            }
          }
        ],
        "titleEn": "Adjective Agreement in Depth — B1"
      },
      {
        "id": "vocative-forms",
        "title": "संबोधन — B1",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Звертання часто вкорочує чи змінює закінчення іменника, особливо для чоловічих імен на -आ, які втрачають цю голосну при зверненні.",
            "en": {
              "text": "Direct address often shortens or changes the noun's ending, especially for male names in -आ, which drop that vowel when addressed."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "रामा! (звертання до Ram, зі зміненим закінченням)",
                "Раме! (клична форма)"
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
        "id": "verb-agreement-non-past-subject",
        "title": "वर्तमान-भविष्यकाळात कर्त्याशी सुसंवाद — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від минулого часу, у теперішньому й майбутньому дієслово узгоджується саме з підметом, а не з додатком, — та сама мова, дві протилежні стратегії узгодження залежно від часу.",
            "en": {
              "text": "Unlike the past tense, in the present and future the verb agrees with the subject, not the object — the same language, two opposite agreement strategies depending on tense."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ती पुस्तक वाचते. (теп., узгоджено з 'вона')",
                "Вона читає книгу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Non-Past Tenses: Subject Agreement — B1"
      },
      {
        "id": "postposition-la-dative-accusative",
        "title": "ला: संप्रदान-कर्म कारक — A2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Частка ला одночасно виконує роль давального й знахідного відмінка — 'кому' й одушевленого 'кого' — залежно від контексту дієслова.",
            "en": {
              "text": "The particle ला simultaneously serves as both dative and (animate) accusative — 'to whom' and animate 'whom' — depending on the verb's context."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "मी त्याला पाहिले.",
                "Я побачив його."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "ला: Dative/Accusative — A2"
      },
      {
        "id": "postposition-madhe-locative",
        "title": "मध्ये: अधिकरण कारक — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Місцевий відмінок передається частками मध्ये ('усередині') чи -त, доданими до непрямої форми іменника.",
            "en": {
              "text": "The locative is conveyed with the particles मध्ये ('inside') or -त, added to the oblique form of the noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "शाळेमध्ये",
                "у школі"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "मध्ये: Locative — A2"
      },
      {
        "id": "compound-noun-formation",
        "title": "समासयुक्त शब्द — B2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Складні іменники поєднують дві основи в одне ціле, часто за санскритськими моделями словоскладання, успадкованими через літературну мову.",
            "en": {
              "text": "Compound nouns join two stems into one unit, often following Sanskrit compounding models inherited through the literary language."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "पुस्तकालय (книгарня/бібліотека, буквально 'книга-приміщення')",
                "приклад складного слова"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Compound Noun Formation — B2"
      },
      {
        "id": "abstract-noun-suffix-panaa",
        "title": "भाववाचक प्रत्यय: -पणा — B1",
        "emoji": "📘",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -पणा, доданий до прикметника, перетворює його на абстрактний іменник середнього роду, що позначає саму якість.",
            "en": {
              "text": "The suffix -पणा, added to an adjective, turns it into a neuter abstract noun denoting the quality itself."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "मोठा (великий) → मोठेपणा (велич)",
                "прикметник → абстрактний іменник"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Abstract Noun Suffix: -पणा — B1"
      },
      {
        "id": "split-ergativity-transitive-intransitive-contrast",
        "title": "कर्ता कारक: सकर्मक विरुद्ध अकर्मक — B2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Частка ने вживається лише з перехідними дієсловами в минулому часі; неперехідні дієслова навіть у минулому часі лишають підмет без цієї частки, і дієслово тоді узгоджується саме з підметом, — розщеплення проходить не лише за часом, а й за перехідністю дієслова.",
            "en": {
              "text": "The particle ने is used only with transitive verbs in the past tense; intransitive verbs, even in the past, leave the subject without this particle, and the verb then agrees with the subject — the split runs along both tense and verb transitivity."
            }
          },
          {
            "type": "table",
            "title": "Перехідне проти неперехідного",
            "rows": [
              [
                "त्याने पुस्तक वाचले. (перехідне, з ने)",
                "Він прочитав книгу."
              ],
              [
                "तो पडला. (неперехідне, без ने)",
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
        "id": "compound-verb-light-verb-system",
        "title": "संयुक्त क्रियापदे: प्रकाश क्रियापदे — B2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Крім टाकणे для завершеності, продуктивна система 'легких' допоміжних дієслів охоплює й інші відтінки — येणे для ненавмисності, घेणे для дії на власну користь.",
            "en": {
              "text": "Besides टाकणे for completion, the productive light-verb system covers other shades too — येणे for unintentionality, घेणे for an action done for oneself."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "तोंडातून शब्द निघून गेला. (येणे, ненавмисне вихоплення слова)",
                "Слово вихопилося (ненавмисно)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Light Verb System — B2"
      },
      {
        "id": "aapan-polite-singular-third-function",
        "title": "आपण: विनम्र एकवचन — B2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Крім значення 'ми включно', आपण виконує ще й третю функцію — ввічливе звертання до однієї поважної особи, схоже на множину-як-повагу, — те саме слово, три різні граматичні ролі залежно від контексту.",
            "en": {
              "text": "Besides its inclusive-'we' meaning, आपण performs a third function — polite address to a single respected individual, similar to a plural-as-respect strategy — the same word, three different grammatical roles depending on context."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "आपण कसे आहात?",
                "Як ви поживаєте? (ввічливо, до однієї особи)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "आपण as Polite Singular Address — B2"
      },
      {
        "id": "dravidian-contact-features",
        "title": "द्राविडी संपर्काचा प्रभाव — B2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Крім включного/виключного 'ми', контакт з дравідійськими мовами Декану зміцнив і без того наявний порядок SOV та збагатив ретрофлексну приголосну систему маратхі — мовний контакт, що діяв в обох напрямках століттями.",
            "en": {
              "text": "Besides inclusive/exclusive 'we', contact with the Dravidian languages of the Deccan reinforced the already-present SOV order and enriched Marathi's retroflex consonant system — language contact that ran both ways for centuries."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Контакт з дравідійськими мовами вплинув на кілька рівнів граматики маратхі одночасно.",
                "багаторівневий мовний контакт"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Dravidian Contact Influence — B2"
      },
      {
        "id": "varhadi-konkani-dialect-variation",
        "title": "वऱ्हाडी आणि कोकणी बोली — B2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Стандартна маратхі базується на пунському говорі, тоді як варгаді на сході й прибережні говірки, близькі до конкані на заході, розходяться в лексиці й вимові настільки, що можуть заплутати навіть носіїв стандарту.",
            "en": {
              "text": "Standard Marathi is based on the Pune dialect, while Varhadi in the east and coastal dialects close to Konkani in the west diverge in vocabulary and pronunciation enough to confuse even speakers of the standard."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Стандарт базується саме на пунському говорі, не на варгаді чи прибережних.",
                "діалектна основа стандарту"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Varhadi and Konkani-Adjacent Dialects — B2"
      },
      {
        "id": "tatsama-tadbhava-vocabulary-layers",
        "title": "तत्सम आणि तद्भव शब्द — B2",
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
            "type": "table",
            "title": "Приклад двох шляхів",
            "rows": [
              [
                "सूर्य (tatsama, пряме запозичення 'сонце')",
                "хвостомtatsama"
              ],
              [
                "सूरज-подібна еволюйована форма в спорідненій хінді (tadbhava-тип)",
                "приклад еволюційного шляху"
              ]
            ],
            "en": {
              "title": "Two Paths Example"
            }
          }
        ],
        "titleEn": "Tatsama and Tadbhava Vocabulary — B2"
      },
      {
        "id": "perso-arabic-loanwords-deccan",
        "title": "फार्सी-अरबी शब्द: दख्खनचा काळ — B1",
        "emoji": "🕌",
        "sections": [
          {
            "type": "intro",
            "text": "Століття мусульманських султанатів Декану залишили в маратхі окремий шар персько-арабських запозичень в адміністративній і військовій лексиці, відмінний від пізнішого шару в хінді-урду з могольського періоду.",
            "en": {
              "text": "Centuries of Deccan Muslim sultanates left Marathi with a distinct layer of Perso-Arabic loanwords in administrative and military vocabulary, separate from the later Hindi-Urdu layer from the Mughal period."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "सरकार (уряд) — з перської",
                "перське запозичення періоду Декану"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Perso-Arabic Loanwords from the Deccan Period — B1"
      },
      {
        "id": "code-switching-english-urban",
        "title": "इंग्रजी-मराठी मिश्रण — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "У міському й освіченому мовленні типове перемикання кодів усередині одного речення — граматичний каркас маратхський, а частина лексики чи цілі фрази вставляються з англійської без адаптації.",
            "en": {
              "text": "Urban, educated speech typically code-switches within a single sentence — the grammatical frame is Marathi, while chunks of vocabulary or whole phrases are inserted from English without adaptation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "मी ऑफिसमध्ये आहे.",
                "Я в офісі (English office вставлене напряму)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "English-Marathi Code-Switching — B2"
      },
      {
        "id": "causative-suffix-vane",
        "title": "प्रेरणार्थक: -वणे — B2",
        "emoji": "⚡",
        "sections": [
          {
            "type": "intro",
            "text": "Каузативний суфікс -वणे, доданий до дієслівного кореня, додає значення 'змушувати робити' — граматично вбудована причиновість без окремого допоміжного дієслова.",
            "en": {
              "text": "The causative suffix -वणे, added to the verb root, adds the meaning 'to make someone do' — grammatically built-in causation with no separate auxiliary verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "बसणे (сидіти) → बसवणे (садити когось)",
                "каузативний суфікс"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Causative Suffix: -वणे — B2"
      },
      {
        "id": "passive-voice-ja-depth",
        "title": "कर्मणी प्रयोग: सखोल — B2",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Пасив з जाणे наголошує на процесі чи спонтанному результаті, тоді як для готового, статичного результату замість нього частіше вживають просте дієприкметникове означення.",
            "en": {
              "text": "The जाणे-passive emphasizes the process or a spontaneous result, while for a finished, static result a simple participial modifier is more often used instead."
            }
          },
          {
            "type": "table",
            "title": "Процес проти стану",
            "rows": [
              [
                "पुस्तक लिहिले जात आहे. (процес)",
                "Книга саме пишеться."
              ],
              [
                "पुस्तक लिहिलेले आहे. (стан)",
                "Книга написана (готова)."
              ]
            ],
            "en": {
              "title": "Process vs. State"
            }
          }
        ],
        "titleEn": "The जाणे-Passive in Depth — B2"
      },
      {
        "id": "double-object-la-la",
        "title": "दुहेरी कर्म: ला...ला — B2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "У реченнях з двома додатками (давати комусь щось) обидва одушевлені додатки можуть отримати частку ला, і лише контекст і порядок слів розрізняють, хто отримувач, а хто предмет.",
            "en": {
              "text": "In sentences with two objects (giving someone something), both animate objects can take the particle ला, and only context and word order distinguish the recipient from the item."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "मी त्याला मुलाला दिले.",
                "Я віддав його дитині."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Double Object Marking with ला — B2"
      },
      {
        "id": "compound-tense-stacking",
        "title": "संयुक्त काळ: अनेक साहाय्यक क्रियापदे — B2",
        "emoji": "🧱",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька допоміжних дієслів можуть накладатися одне на одне для передачі складнішого часо-видового відтінку — дієприкметник плюс два допоміжних дієслова поспіль.",
            "en": {
              "text": "Several auxiliary verbs can stack on top of each other to convey a more complex tense-aspect shade — a participle plus two auxiliary verbs in a row."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "तो जात असावा. (можливо, він йде — модальність + аспект)",
                "накладені допоміжні дієслова"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Stacked Compound Tenses — B2"
      },
      {
        "id": "gender-assignment-loanwords",
        "title": "उसन्या शब्दांचे लिंग — B2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Запозичені англійські іменники отримують граматичний рід за формальними ознаками закінчення чи семантичною аналогією, часто непередбачувано для носіїв англійської.",
            "en": {
              "text": "Borrowed English nouns receive grammatical gender based on formal ending cues or semantic analogy, often unpredictably for English speakers."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "टेबल (стіл, запозичене, отримує середній рід)",
                "непередбачуваний рід для носія англійської"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Gender Assignment for Loanwords — B2"
      },
      {
        "id": "compound-consonant-script-conjuncts",
        "title": "जोडाक्षरे: संयुक्त व्यंजने — B1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Консонантні кластери позначаються лігатурами-конюнктами в деванагарі, де форми двох чи більше приголосних зливаються в один графічний знак, — та сама система, що й у санскриті чи хінді, з маратхськими конвенціями.",
            "en": {
              "text": "Consonant clusters are marked with conjunct ligatures in Devanagari, where two or more consonant shapes merge into one graphic sign — the same system as in Sanskrit or Hindi, with Marathi's own conventions."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "क्ष (лігатура k+sh)",
                "приклад конюнкта"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conjunct Consonant Ligatures — B1"
      },
      {
        "id": "numeral-classifier-absence",
        "title": "गणक शब्दांची अनुपस्थिती — B2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від багатьох східноазійських мов, маратхі не вимагає класифікатора для лічби предметів — числівник стоїть безпосередньо перед іменником.",
            "en": {
              "text": "Unlike many East Asian languages, Marathi doesn't require a classifier for counting objects — the number stands directly before the noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "तीन मुले (три дитини, без класифікатора)",
                "числівник напряму перед іменником"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "No Numeral Classifiers — B2"
      },
      {
        "id": "politeness-register-pronoun-verb-choice",
        "title": "विनम्रता: सर्वनाम आणि क्रियापद निवड — B2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Ввічливість передається одночасно вибором займенника (तू проти तुम्ही/आपण) і відповідним узгодженням дієслова у множині — обидва елементи мають змінюватися разом, а не окремо.",
            "en": {
              "text": "Politeness is conveyed simultaneously through pronoun choice (तू vs. तुम्ही/आपण) and the corresponding plural verb agreement — both elements must change together, not separately."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "तुम्ही कसे आहात? (ввічливо, займенник + дієслово множини)",
                "Як ви поживаєте?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Politeness: Coordinated Pronoun and Verb Choice — B2"
      },
      {
        "id": "light-verb-unintentional-yene",
        "title": "अनैच्छिक क्रिया: येणे — B2",
        "emoji": "😅",
        "sections": [
          {
            "type": "intro",
            "text": "Допоміжне येणे ('приходити'), додане після дієприслівника, позначає, що дія сталася мимовільно чи спонтанно, без свідомого наміру підмета.",
            "en": {
              "text": "The auxiliary येणे ('to come'), added after the converb, marks that an action happened involuntarily or spontaneously, without the subject's conscious intent."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "माझ्याकडून चूक होऊन गेली.",
                "Я випадково помилився (мимовільно)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Light Verb येणे: Unintentional Action — B2"
      },
      {
        "id": "light-verb-benefactive-ghene",
        "title": "स्वतःसाठी क्रिया: घेणे — B2",
        "emoji": "🎁",
        "sections": [
          {
            "type": "intro",
            "text": "Допоміжне घेणे ('брати'), додане після дієприслівника, позначає, що дію виконано на власну користь підмета, — протилежність благодійному значенню для когось іншого.",
            "en": {
              "text": "The auxiliary घेणे ('to take'), added after the converb, marks that an action was performed for the subject's own benefit — the opposite of a benefactive meaning for someone else."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "त्याने पुस्तक विकत घेतले.",
                "Він купив книгу (для себе)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Light Verb घेणे: Self-Benefactive — B2"
      },
      {
        "id": "postposition-stacking-genitive-plus-case",
        "title": "विभक्तींचा संयोग: माझ्याकडे — B2",
        "emoji": "🧱",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійна частка चा/ची/चे може поєднуватися з іще однією післяйменниковою часткою, утворюючи складене значення 'у розпорядженні когось'.",
            "en": {
              "text": "The possessive particle चा/ची/चे can combine with yet another postposition, forming the compound meaning 'in someone's possession'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "माझ्याकडे पैसे आहेत.",
                "У мене є гроші (буквально 'у моєму розпорядженні')."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Stacked Postpositions: माझ्याकडे — B2"
      },
      {
        "id": "numeral-time-expressions",
        "title": "वेळेचे गणक: वाजता — B1",
        "emoji": "🕐",
        "sections": [
          {
            "type": "intro",
            "text": "Вираження часу доби вживає власне слово वाजता ('о годині'), доданe після числівника, — окрема конструкція, відмінна від звичайної лічби предметів.",
            "en": {
              "text": "Time-of-day expressions use the dedicated word वाजता ('at the hour'), added after the number — a distinct construction from ordinary object counting."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "तीन वाजता",
                "о третій годині"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Time Expressions: वाजता — B1"
      },
      {
        "id": "emphatic-particle-c",
        "title": "च: निश्चयदर्शक अव्यय — B1",
        "emoji": "💯",
        "sections": [
          {
            "type": "intro",
            "text": "Частка च, приєднана до кінця будь-якого слова, підкреслює виключність чи наголос — 'саме, тільки', виключаючи альтернативи.",
            "en": {
              "text": "The particle च, attached to the end of any word, emphasizes exclusivity or focus — 'exactly, only', ruling out alternatives."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "तोच आला.",
                "Саме він і прийшов."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Emphatic Particle च — B1"
      },
      {
        "id": "converb-tense-neutral-un",
        "title": "पूर्वकालवाचक: -ऊन — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприслівник на -ऊन/-ऊनी зв'язує послідовні дії в реченні без окремого сполучника 'і' — сам дієприслівник часово нейтральний, час несе лише останнє дієслово ланцюжка.",
            "en": {
              "text": "The converb in -ऊन/-ऊनी links sequential actions in a sentence with no separate conjunction 'and' — the converb itself is tense-neutral, with only the last verb of the chain carrying tense."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "तो उठून बाहेर गेला.",
                "Він встав і вийшов (без 'і', через дієприслівник)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Tense-Neutral Converb: -ऊन — B1"
      },
      {
        "id": "address-terms-social-hierarchy",
        "title": "नातेवाचक संबोधने — B1",
        "emoji": "👪",
        "sections": [
          {
            "type": "intro",
            "text": "Родинні терміни часто заміняють особові займенники в розмові, відображаючи відносний вік і соціальну ієрархію, а не лише кровний зв'язок.",
            "en": {
              "text": "Kinship terms often replace personal pronouns in conversation, reflecting relative age and social hierarchy, not just blood relation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "दादा, तू कुठे आहेस?",
                "Старший брате, де ти?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Kinship Address Terms — B1"
      },
      {
        "id": "fixed-idiomatic-expressions",
        "title": "वाक्प्रचार — B2",
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
                "डोक्यावर बर्फ ठेवणे. (буквально 'класти лід на голову' → зберігати спокій)",
                "застигла ідіома"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Fixed Idiomatic Expressions — B2"
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
        "title": "अनियमित क्रियापदे — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово असणे ('бути') має повністю нерегулярне відмінювання й водночас є найважливішим допоміжним дієсловом майже кожної складеної часової форми.",
            "en": {
              "text": "The verb असणे ('to be') has completely irregular conjugation and is at the same time the most important auxiliary verb of nearly every compound tense form."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярні форми",
            "rows": [
              [
                "आहे / होता / असेल",
                "є / був / буде"
              ]
            ]
          }
        ],
        "titleEn": "Irregular Verbs — B1"
      },
      {
        "id": "irregular-plural-gender-exceptions",
        "title": "अनियमित अनेकवचन आणि लिंग — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька частовживаних іменників мають несподіваний рід чи нерегулярну форму множини, що не виводиться з очікуваного закінчення слова.",
            "en": {
              "text": "A few common nouns have an unexpected gender or an irregular plural form that can't be derived from the word's expected ending."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "हात (рука, ч.р. попри закінчення на приголосний)",
                "нерегулярне присвоєння роду"
              ]
            ]
          }
        ],
        "titleEn": "Irregular Plurals and Gender Exceptions — B1"
      },
      {
        "id": "fixed-proverbs-archaic-grammar",
        "title": "म्हणींमधील जुनी व्याकरणरचना — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Прислів'я (म्हणी) зберігають архаїчну граматичну структуру й лексику, вже втрачену в живій мові, і вживаються цілими блоками без граматичного розбору.",
            "en": {
              "text": "Proverbs (म्हणी) preserve archaic grammatical structure and vocabulary already lost from the living language, and are used as whole blocks with no grammatical analysis."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "शहाण्याला शब्दांचा मार.",
                "Розумному достатньо слова (застигла приказка з архаїчними формами)."
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
