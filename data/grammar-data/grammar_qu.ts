// Vymova — data/grammar-data/grammar_qu.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_QU: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Runasimipi Sutichaykuna — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У кечуа є два слова для \"ми\": \"ñuqanchik\" (з вами) і \"ñuqayku\" (без вас) — це розрізнення називають інклюзивністю/ексклюзивністю.",
            "en": {
              "text": "Quechua has two words for \"we\": \"ñuqanchik\" (including you) and \"ñuqayku\" (excluding you) — known as the inclusive/exclusive distinction."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ñuqa"
              ],
              [
                "ти",
                "qam"
              ],
              [
                "він / вона / воно",
                "pay"
              ],
              [
                "ми (з вами)",
                "ñuqanchik"
              ],
              [
                "ми (без вас)",
                "ñuqayku"
              ],
              [
                "ви",
                "qamkuna"
              ],
              [
                "вони",
                "paykuna"
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
        "id": "evidentiality-suffixes",
        "title": "Sut'inchaq Sufijukuna — B1",
        "emoji": "🔍",
        "sections": [
          {
            "type": "intro",
            "text": "Кечуа обов'язково позначає джерело інформації суфіксами евіденційності: -mi (я бачив сам), -si (мені сказали), -chá (припущення) — це одна з найвідоміших граматичних рис мови, майже не представлена в європейських мовах.",
            "en": {
              "text": "Quechua obligatorily marks the source of information with evidentiality suffixes: -mi (witnessed firsthand), -si (reported/hearsay), -chá (conjecture) — one of the language's most famous grammatical features, largely absent from European languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Para-sha-n-mi.",
                "Дощить (я сам бачу)."
              ],
              [
                "Para-sha-n-si.",
                "Дощить (мені так сказали)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Evidentiality Suffixes — B1"
      },
      {
        "id": "no-grammatical-gender",
        "title": "Mana Qhari-Warmi Rakiy — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Кечуа не має граматичного роду взагалі: іменники, прикметники й займенники не змінюються за родом, а третя особа однини (pay) означає і 'він', і 'вона'.",
            "en": {
              "text": "Quechua has no grammatical gender at all: nouns, adjectives, and pronouns do not vary by gender, and the third-person singular (pay) covers both 'he' and 'she'."
            }
          }
        ],
        "titleEn": "No Grammatical Gender — A1"
      },
      {
        "id": "plural-kuna",
        "title": "Achka Ninapaq: -kuna — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється єдиним суфіксом -kuna, доданим до будь-якого іменника незалежно від його форми, — без класів чи винятків.",
            "en": {
              "text": "The plural is formed with a single suffix -kuna, added to any noun regardless of its shape — no classes or exceptions."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "wasi → wasikuna",
                "будинок → будинки"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Plural: -kuna — A1"
      },
      {
        "id": "topic-marker-qa",
        "title": "Rimasqa Sut'inchaq: -qa — A2",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -qa позначає тему висловлювання (те, про що йдеться), відрізняючи її від нової чи акцентованої інформації, позначеної суфіксом -mi.",
            "en": {
              "text": "The suffix -qa marks the topic of an utterance (what is being talked about), distinguishing it from new or emphasized information marked by -mi."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ñuqaqa Ana kani.",
                "Що стосується мене, я Ана."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Topic Marker: -qa — A2"
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
        "title": "Kunan Pacha — A1",
        "emoji": "☀️",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній час утворюється особовими суфіксами, доданими безпосередньо до основи дієслова: -ni (я), -nki (ти), -n (він/вона).",
            "en": {
              "text": "The present tense is formed with person suffixes added directly to the verb stem: -ni (I), -nki (you), -n (he/she)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Rima-ni.",
                "Я говорю."
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
        "id": "present-progressive",
        "title": "Kunan Pacha: -chka- — A2",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія передається вставним суфіксом -chka-, доданим перед особовим закінченням, щоб підкреслити, що дія відбувається саме зараз.",
            "en": {
              "text": "An ongoing action is expressed with the infix -chka-, inserted before the person ending, to emphasize that the action is happening right now."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Rima-chka-ni.",
                "Я саме говорю."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Progressive: -chka- — A2"
      },
      {
        "id": "simple-past-rqa",
        "title": "Ñawpa Pacha: -rqa — A2",
        "emoji": "⏪",
        "sections": [
          {
            "type": "intro",
            "text": "Простий минулий час на -rqa- позначає подію, яку мовець особисто бачив чи пережив, — так званий 'пережитий' минулий час.",
            "en": {
              "text": "The simple past with -rqa- marks an event the speaker personally witnessed or experienced — the so-called 'experienced' past."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Rima-rqa-ni.",
                "Я говорив (я це бачив/пережив)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Simple Past: -rqa (Witnessed) — A2"
      },
      {
        "id": "narrative-past-sqa",
        "title": "Willakuy Pacha: -sqa — B1",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Наративний минулий час на -sqa- позначає подію, про яку мовець дізнався від інших або якої не пережив сам, — тісно пов'язаний з евіденційною системою кечуа і типовий для міфів і переказів.",
            "en": {
              "text": "The narrative past with -sqa- marks an event the speaker learned about from others or did not personally experience — closely tied to Quechua's evidentiality system and typical of myths and legends."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Rima-sqa.",
                "Кажуть, він говорив (я цього не бачив)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Narrative Past: -sqa (Non-Witnessed) — B1"
      },
      {
        "id": "future-tense",
        "title": "Hamuq Pacha — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється суфіксом -saq у першій особі однини і -nqa в третій, доданими безпосередньо до основи дієслова.",
            "en": {
              "text": "The future tense is formed with the suffix -saq in the first-person singular and -nqa in the third, added directly to the verb stem."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Rima-saq.",
                "Я говоритиму."
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
        "id": "past-progressive",
        "title": "Ñawpa Pacha: -chka-rqa — B1",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія в минулому поєднує прогресивний інфікс -chka- з минулим закінченням -rqa-, розміщуючи обидва суфікси в одній дієслівній формі.",
            "en": {
              "text": "The past progressive combines the progressive infix -chka- with the past ending -rqa-, stacking both suffixes in one verb form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Rima-chka-rqa-ni.",
                "Я говорив (тривало)."
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
        "id": "pluperfect",
        "title": "Ñawpaq Ñawpa Pacha — B2",
        "emoji": "⏮️",
        "sections": [
          {
            "type": "intro",
            "text": "Плюсквамперфект утворюється дієприкметником на -sqa плюс допоміжне дієслово 'бути' (kay) у минулому часі, позначаючи дію, завершену до іншої минулої дії.",
            "en": {
              "text": "The pluperfect is formed with the -sqa participle plus the past tense of the verb 'to be' (kay), marking an action completed before another past action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Rima-sqa ka-rqa-ni.",
                "Я вже був поговорив."
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
        "id": "imperative-mood",
        "title": "Kamachiy — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб однини утворюється суфіксом -y, доданим до основи дієслова; множина додає -ychik для звертання до кількох осіб.",
            "en": {
              "text": "The singular imperative is formed with the suffix -y added to the verb stem; the plural adds -ychik for addressing several people."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Rima-y!",
                "Говори!"
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
        "id": "conditional-man",
        "title": "Sichus Pacha: -man — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб утворюється суфіксом -man, доданим до основи дієслова, і вживається як в умовних реченнях, так і для ввічливого висловлення бажання.",
            "en": {
              "text": "The conditional mood is formed with the suffix -man added to the verb stem, and is used both in conditional sentences and to politely express a wish."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Rima-y-man.",
                "Я б говорив."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional: -man — B1"
      },
      {
        "id": "desiderative-naya",
        "title": "Munay Pacha: -naya- — B1",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Бажальний спосіб на -naya- передає сильне, майже фізичне бажання щось зробити, доданий безпосередньо до основи дієслова перед особовим закінченням.",
            "en": {
              "text": "The desiderative with -naya- conveys a strong, almost physical urge to do something, added directly to the verb stem before the person ending."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Puñu-naya-wa-n.",
                "Мене хилить на сон."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Desiderative: -naya- — B1"
      },
      {
        "id": "potential-ability",
        "title": "Atiy: Ruwayta Atiy — B1",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Здатність виражається інфінітивом на -y плюс допоміжне дієслово atiy ('могти'), доданим після нього і узгодженим за особою.",
            "en": {
              "text": "Ability is expressed with the -y infinitive plus the auxiliary verb atiy ('to be able'), following it and conjugated for person."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Rima-y-ta ati-ni.",
                "Я можу говорити."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Potential: atiy ('to be able') — B1"
      },
      {
        "id": "same-subject-converb-spa",
        "title": "Kaq Rimaq: -spa — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприслівник на -spa вживається, коли підмет підрядної та головної дії збігається (switch-reference: 'same subject'), і не має власного особового закінчення.",
            "en": {
              "text": "The converb suffix -spa is used when the subordinate and main clause share the same subject (switch-reference: 'same subject'), and carries no person ending of its own."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Miku-spa, rima-ni.",
                "Їдячи, я говорю (я = я)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Same-Subject Converb: -spa — B1"
      },
      {
        "id": "different-subject-converb-pti",
        "title": "Huk Rimaq: -pti — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприслівник на -pti вживається, коли підмет підрядної дії відрізняється від підмета головного речення (switch-reference: 'different subject'), і обов'язково приймає особовий суфікс.",
            "en": {
              "text": "The converb suffix -pti is used when the subordinate clause's subject differs from the main clause's subject (switch-reference: 'different subject'), and obligatorily takes a person suffix."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Miku-pti-n, rima-ni.",
                "Коли він їсть, я говорю (він ≠ я)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Different-Subject Converb: -pti — B2"
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
        "id": "sov-word-order",
        "title": "Rimay Churay: SOV — A2",
        "emoji": "📝",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів — підмет-додаток-присудок (SOV); оскільки роль слова позначена відмінковим суфіксом, а не позицією, порядок слів досить гнучкий для наголосу.",
            "en": {
              "text": "The basic word order is Subject-Object-Verb (SOV); since a word's role is marked by a case suffix rather than position, word order is fairly flexible for emphasis."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nuqa papata mikuni.",
                "Я їм картоплю (я-картоплю-їм)."
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
        "id": "case-accusative-ta",
        "title": "Kaqchasqa: -ta — A2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Знахідний відмінок (прямий додаток) позначається суфіксом -ta, доданим до іменника, тоді як підмет узагалі не має закінчення.",
            "en": {
              "text": "The accusative case (direct object) is marked with the suffix -ta added to the noun, while the subject takes no ending at all."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "papa-ta",
                "картоплю (знахідний)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Accusative Case: -ta — A2"
      },
      {
        "id": "case-genitive-pa",
        "title": "Kaqniyuq: -pa — A2",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "Родовий (присвійний) відмінок позначається суфіксом -pa, доданим до власника, який ставиться перед посідомим іменником.",
            "en": {
              "text": "The genitive (possessive) case is marked with the suffix -pa added to the possessor, which is placed before the possessed noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ana-pa wasin",
                "Анин дім"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Genitive Case: -pa — A2"
      },
      {
        "id": "case-locative-pi",
        "title": "Maypichus: -pi — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Місцевий відмінок на -pi позначає місце перебування чи дії ('в/на'), приєднуючись безпосередньо до іменника без прийменника.",
            "en": {
              "text": "The locative case with -pi marks the place of being or action ('in/at'), attaching directly to the noun with no separate preposition."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "wasi-pi",
                "у домі"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Locative Case: -pi — A2"
      },
      {
        "id": "case-ablative-manta",
        "title": "Maymantachus: -manta — B1",
        "emoji": "↩️",
        "sections": [
          {
            "type": "intro",
            "text": "Аблатив на -manta позначає рух звідкись або матеріал/причину ('з, від'), приєднуючись до іменника як єдиний суфікс без прийменника.",
            "en": {
              "text": "The ablative with -manta marks movement away from somewhere or material/cause ('from, out of'), attaching to the noun as a single suffix with no preposition."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "wasi-manta",
                "з дому"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ablative Case: -manta — B1"
      },
      {
        "id": "case-allative-man",
        "title": "Maymanchus: -man — A2",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "Алатив (напрямний відмінок) на -man позначає рух до когось/чогось ('до, у напрямку'), протиставляючись аблативу -manta.",
            "en": {
              "text": "The allative (directional) case with -man marks movement toward something ('to, toward'), contrasting with the ablative -manta."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "wasi-man",
                "до дому"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Allative Case: -man — A2"
      },
      {
        "id": "case-instrumental-wan",
        "title": "Imawanchus: -wan — A2",
        "emoji": "🛠️",
        "sections": [
          {
            "type": "intro",
            "text": "Орудний/спільний відмінок на -wan позначає інструмент ('чим') або супровід ('з ким'), обидва значення передаються тим самим суфіксом.",
            "en": {
              "text": "The instrumental/comitative case with -wan marks either the instrument ('with what') or accompaniment ('with whom'), both meanings sharing the same suffix."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kuchara-wan",
                "ложкою"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Instrumental/Comitative: -wan — A2"
      },
      {
        "id": "case-benefactive-paq",
        "title": "Pipaqchus: -paq — A2",
        "emoji": "🎁",
        "sections": [
          {
            "type": "intro",
            "text": "Бенефактивний відмінок на -paq позначає адресата чи призначення дії ('для кого/чого'), приєднуючись безпосередньо до іменника.",
            "en": {
              "text": "The benefactive case with -paq marks the recipient or purpose of an action ('for whom/what'), attaching directly to the noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ana-paq",
                "для Ани"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Benefactive Case: -paq — A2"
      },
      {
        "id": "agglutinative-suffix-stacking",
        "title": "Sufijukunapa Tantasqan — B1",
        "emoji": "🧱",
        "sections": [
          {
            "type": "intro",
            "text": "Кечуа — суто аглютинативна мова: до одного кореня можна нанизати десяток чи більше суфіксів у фіксованому порядку, і кожен із них додає точно одне граматичне значення.",
            "en": {
              "text": "Quechua is a purely agglutinative language: a dozen or more suffixes can be stacked onto a single root in a fixed order, each adding exactly one grammatical meaning."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "wasi-cha-y-ki-kuna-pi",
                "у твоїх маленьких будиночках"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Agglutinative Suffix Stacking — B1"
      },
      {
        "id": "verb-subject-object-agreement",
        "title": "Ruwaqwan Kaqchasqawan Tinkuy — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово в кечуа може одночасно узгоджуватися з підметом і з непрямим об'єктом через окремий суфікс -wa- ('мені'), так що дієслівна форма сама виражає обидва учасники дії.",
            "en": {
              "text": "The Quechua verb can agree with both the subject and the indirect object through the dedicated suffix -wa- ('to me'), so the verb form alone expresses both participants of the action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Qu-wa-nki.",
                "Ти даєш мені."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Subject-Object Verb Agreement — B2"
      },
      {
        "id": "possessive-suffixes",
        "title": "Kaqniyuq Sufijukuna — A2",
        "emoji": "🏠",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійність позначається суфіксом безпосередньо на самому іменнику (-y 'мій', -yki 'твій', -n 'його/її'), без окремого присвійного займенника.",
            "en": {
              "text": "Possession is marked with a suffix directly on the noun itself (-y 'my', -yki 'your', -n 'his/her'), with no separate possessive pronoun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "wasi-y",
                "мій дім"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Possessive Suffixes — A2"
      },
      {
        "id": "negation-mana-chu",
        "title": "Manachu: Negación — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється часткою mana перед дієсловом і обов'язковим суфіксом -chu на самому дієслові — подвійне маркування заперечення.",
            "en": {
              "text": "Negation is formed with the particle mana before the verb and the obligatory suffix -chu on the verb itself — a double marking of negation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mana rima-ni-chu.",
                "Я не говорю."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation: mana...-chu — A2"
      },
      {
        "id": "question-particle-chu",
        "title": "Tapuy: -chu — A2",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Той самий суфікс -chu, доданий до слова, яке уточнюється, перетворює речення на питання так/ні, без зміни порядку слів.",
            "en": {
              "text": "The same suffix -chu, added to the word being questioned, turns a sentence into a yes/no question, with no change to word order."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Rima-nki-chu?",
                "Ти говориш?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Yes/No Question: -chu — A2"
      },
      {
        "id": "interrogative-words",
        "title": "Tapukuna Simikuna — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "хто",
                "pi"
              ],
              [
                "що",
                "ima"
              ],
              [
                "де",
                "maypi"
              ],
              [
                "коли",
                "hayk'aq"
              ]
            ],
            "en": {
              "title": "Question Words"
            }
          }
        ],
        "titleEn": "Interrogative Words — A1"
      },
      {
        "id": "demonstratives",
        "title": "Rikuchiy Simikuna — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "table",
            "title": "Вказівні займенники",
            "rows": [
              [
                "цей",
                "kay"
              ],
              [
                "той (ближче)",
                "chay"
              ],
              [
                "той (далі)",
                "wak"
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
        "id": "adjective-invariant",
        "title": "Sutichaq: Mana Tikray — A2",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники в кечуа незмінні: вони ставляться перед іменником і не набувають жодного суфікса роду, числа чи відмінка, узгоджуючись 'нульовим' способом.",
            "en": {
              "text": "Adjectives in Quechua are invariant: they precede the noun and take no gender, number, or case suffix at all, agreeing 'by zero marking'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "hatun wasi / hatun wasikuna",
                "великий дім / великі доми (прикметник не змінюється)"
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
        "id": "comparative-aswan",
        "title": "Aswan: Pantalliy — B1",
        "emoji": "📊",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняльний ступінь утворюється часткою aswan ('більш') перед прикметником, а об'єкт порівняння приймає аблативний суфікс -manta ('ніж').",
            "en": {
              "text": "The comparative is formed with the particle aswan ('more') before the adjective, and the compared object takes the ablative suffix -manta ('than')."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kay-qa, chay-manta aswan hatun.",
                "Це більше, ніж те."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparative: aswan...-manta — B1"
      },
      {
        "id": "cardinal-numbers",
        "title": "Yupaykuna: 1-10 — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "table",
            "title": "Числа 1-10",
            "rows": [
              [
                "1",
                "huk"
              ],
              [
                "2",
                "iskay"
              ],
              [
                "3",
                "kimsa"
              ],
              [
                "5",
                "pisqa"
              ],
              [
                "10",
                "chunka"
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
        "id": "reduplication-intensity",
        "title": "Iskayñiqin Simi: Kallpanchay — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Повне подвоєння прикметника чи прислівника підсилює його значення, передаючи інтенсивність без потреби в окремому підсилювальному слові.",
            "en": {
              "text": "Fully reduplicating an adjective or adverb intensifies its meaning, conveying intensity without a separate intensifying word."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "allin allin",
                "дуже добре (букв. 'добре-добре')"
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
        "id": "diminutive-cha",
        "title": "Uchuychay: -cha — A2",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувально-пестлива форма на -cha додає значення малості або симпатії до будь-якого іменника.",
            "en": {
              "text": "The diminutive suffix -cha adds a sense of smallness or affection to any noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "wasi-cha",
                "будиночок"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Diminutive: -cha — A2"
      },
      {
        "id": "vocative-lla",
        "title": "Waqyay: -lla — B1",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Частка -lla ('лише, просто'), додана до звертання, пом'якшує тон і надає йому теплого, менш формального відтінку.",
            "en": {
              "text": "The particle -lla ('just, only'), added to a form of address, softens the tone and gives it a warmer, less formal shade."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ana-lla!",
                "Аночко!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Softening Vocative: -lla — B1"
      },
      {
        "id": "conjunctions",
        "title": "Tantachiqkuna — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники",
            "rows": [
              [
                "і",
                "-wan (на іменнику) / ima...ima"
              ],
              [
                "або",
                "utaq"
              ],
              [
                "але",
                "ichaqa"
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
        "id": "nominalizer-relative-q",
        "title": "Sutichaq Ruwaq: -q — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Замість окремого відносного займенника кечуа перетворює дієслово на іменник за допомогою номіналізаторів -q ('той, хто робить') чи -sqa ('те, що зроблено'), утворюючи означальні звороти без сполучного слова.",
            "en": {
              "text": "Instead of a separate relative pronoun, Quechua turns a verb into a noun with nominalizers -q ('the one who does') or -sqa ('the thing done'), forming relative-clause-like phrases with no linking word."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "takiq runa",
                "чоловік, який співає"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Nominalizer: -q — B2"
      },
      {
        "id": "postpositions-general",
        "title": "Qhipa Simikuna — B1",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Замість прийменників кечуа вживає післяйменники — окремі слова, що йдуть за іменником в родовому відмінку, а не суфікси.",
            "en": {
              "text": "Instead of prepositions, Quechua uses postpositions — separate words that follow a noun in the genitive case, rather than suffixes."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "wasi-pa qhipan",
                "за домом"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Postpositions — B1"
      },
      {
        "id": "infinitive-y",
        "title": "Rikuchiy: -y — A2",
        "emoji": "📖",
        "sections": [
          {
            "type": "intro",
            "text": "Інфінітив (словникова форма дієслова) закінчується на -y, доданий до основи, і саме ця форма подається в словниках.",
            "en": {
              "text": "The infinitive (dictionary form of the verb) ends in -y added to the stem, and this is the form listed in dictionaries."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "rima-y",
                "говорити (інфінітив)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Infinitive: -y — A2"
      },
      {
        "id": "quechua-dialect-continuum",
        "title": "Runasimipa Rakikunan — B2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "'Кечуа' — не одна мова, а діалектний континуум із двох великих гілок (Кечуа I та Кечуа II), поширених у шести країнах Анд, з рівнем взаємної зрозумілості, що часто нижчий, ніж між іспанською та італійською.",
            "en": {
              "text": "'Quechua' is not one language but a dialect continuum of two major branches (Quechua I and Quechua II), spoken across six Andean countries, with mutual intelligibility often lower than between Spanish and Italian."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Qhichwa (Куско) vs. Kichwa (Еквадор)",
                "різні гілки континууму кечуа"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Quechua Dialect Continuum — B2"
      },
      {
        "id": "andean-kinship-terms",
        "title": "Ayllu: Kinship — A2",
        "emoji": "👪",
        "sections": [
          {
            "type": "table",
            "title": "Спорідненість",
            "rows": [
              [
                "мати",
                "mama"
              ],
              [
                "батько",
                "tayta"
              ],
              [
                "брат (чоловіка)",
                "wawqi"
              ],
              [
                "брат (жінки)",
                "tura"
              ]
            ],
            "en": {
              "title": "Kinship"
            }
          }
        ],
        "titleEn": "Andean Kinship Terms — A2"
      },
      {
        "id": "ayni-reciprocity",
        "title": "Ayni: Ruray Kutichiy — B2",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "Ayni — андійський принцип взаємної трудової допомоги: сьогодні я допомагаю тобі зібрати врожай, а завтра ти допомагаєш мені, без грошового обміну — основа традиційної общинної економіки.",
            "en": {
              "text": "Ayni is the Andean principle of reciprocal labor exchange: today I help you harvest, tomorrow you help me, with no monetary exchange — the foundation of traditional communal economy."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ayni-ta ruwa-sun.",
                "Зробімо взаємообмін працею."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ayni: Reciprocal Labor — B2"
      },
      {
        "id": "minka-communal-labor",
        "title": "Minka: Llaqtapaq Llamk'ay — B2",
        "emoji": "👷",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від двостороннього ayni, minka — колективна праця на благо всієї громади (будівництво каналу, мосту), організована місцевим лідером і винагороджувана спільним святкуванням.",
            "en": {
              "text": "Unlike the bilateral ayni, minka is collective labor for the benefit of the whole community (building a canal, a bridge), organized by a local leader and rewarded with a shared celebration."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Minka-man rina.",
                "Іти на громадську працю."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Minka: Communal Labor — B2"
      },
      {
        "id": "pachamama-cosmology",
        "title": "Pachamama: Kawsay — B2",
        "emoji": "🌎",
        "sections": [
          {
            "type": "intro",
            "text": "Пачамама ('Мати-Земля') — центральне поняття андійської космології: земля розглядається як жива істота, якій приносять підношення (despacho) перед посівом чи будівництвом.",
            "en": {
              "text": "Pachamama ('Mother Earth') is central to Andean cosmology: the earth is treated as a living being, given offerings (despacho) before planting or building."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Pachamama-man qu-sun.",
                "Піднесімо дар Пачамамі."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Pachamama Cosmology — B2"
      },
      {
        "id": "coca-leaf-vocabulary",
        "title": "Kuka: Hallpay — B1",
        "emoji": "🌿",
        "sections": [
          {
            "type": "intro",
            "text": "Жування листя коки (hallpay) — давня андійська практика для боротьби з висотною хворобою і втомою, з окремим словом kintu для добірного пучка листя, що підносять на ритуалах.",
            "en": {
              "text": "Chewing coca leaf (hallpay) is an ancient Andean practice against altitude sickness and fatigue, with a dedicated word kintu for the select bundle of leaves offered in rituals."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kuka-ta hallpa-sun.",
                "Пожуймо коку."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Coca Leaf Vocabulary — B1"
      },
      {
        "id": "khipu-record-keeping",
        "title": "Khipu: Yupay Simp'ay — B2",
        "emoji": "🧶",
        "sections": [
          {
            "type": "intro",
            "text": "Khipu — система вузликових мотузок, якою імперія інків вела облік і, можливо, передавала розповіді, без алфавітного письма; термін khipukamayuq позначав спеціаліста, що читав і в'язав такі мотузки.",
            "en": {
              "text": "The khipu was a knotted-cord system used by the Inca Empire for record-keeping and possibly narrative, with no alphabetic script; the term khipukamayuq denoted the specialist who read and tied these cords."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Khipu-ta hina yupa-y.",
                "Рахувати за допомогою кіпу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Khipu Record-Keeping — B2"
      },
      {
        "id": "colors",
        "title": "Llimp'ikuna — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "table",
            "title": "Кольори",
            "rows": [
              [
                "червоний",
                "puka"
              ],
              [
                "чорний",
                "yana"
              ],
              [
                "білий",
                "yuraq"
              ],
              [
                "жовтий",
                "q'illu"
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
        "title": "Chunkakuna — A2",
        "emoji": "🔟",
        "sections": [
          {
            "type": "table",
            "title": "Десятки",
            "rows": [
              [
                "20",
                "iskay chunka"
              ],
              [
                "30",
                "kimsa chunka"
              ],
              [
                "100",
                "pachak"
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
        "id": "inca-calendar-time",
        "title": "Inti Watapa Q'ipin — B2",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Традиційний календар інків орієнтувався на сонцестояння через обсерваторії (sukanka), а рік ділився на періоди землеробських та ритуальних робіт, а не на тижні.",
            "en": {
              "text": "The traditional Inca calendar was oriented to the solstices through observatories (sukanka), with the year divided into agricultural and ritual work periods rather than weeks."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Inti Raymi",
                "свято сонця (сонцестояння)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Inca Calendar and Time — B2"
      },
      {
        "id": "weather-vocabulary",
        "title": "Mama Killa Pacha — A2",
        "emoji": "☁️",
        "sections": [
          {
            "type": "table",
            "title": "Погода",
            "rows": [
              [
                "сонце",
                "inti"
              ],
              [
                "дощ",
                "para"
              ],
              [
                "сніг",
                "rit'i"
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
        "title": "Ukhu Aychankuna — A2",
        "emoji": "🧍",
        "sections": [
          {
            "type": "table",
            "title": "Частини тіла",
            "rows": [
              [
                "голова",
                "uma"
              ],
              [
                "рука",
                "maki"
              ],
              [
                "око",
                "ñawi"
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
        "id": "potato-food-vocabulary",
        "title": "Papa: Mikhuna — A2",
        "emoji": "🥔",
        "sections": [
          {
            "type": "intro",
            "text": "Слово 'папа' (картопля) прийшло в усі мови світу з кечуа, де для сотень андійських сортів картоплі є окремі назви; chuño — заморожена й висушена на морозі картопля для тривалого зберігання.",
            "en": {
              "text": "The word 'papa' (potato) entered languages worldwide from Quechua, which has distinct names for hundreds of Andean potato varieties; chuño is freeze-dried potato for long-term storage."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Chuño-ta mikuy.",
                "Їж чуньйо."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Potato Vocabulary — A2"
      },
      {
        "id": "greetings",
        "title": "Napaykuy — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "table",
            "title": "Вітання",
            "rows": [
              [
                "Привіт",
                "Napaykullayki"
              ],
              [
                "Як справи?",
                "Imaynalla?"
              ],
              [
                "Дякую",
                "Sulpayki / Añay"
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
        "id": "augmentative-suffix",
        "title": "Hatunchay: -sapa — B1",
        "emoji": "📏",
        "sections": [
          {
            "type": "intro",
            "text": "Збільшувальний суфікс -sapa додає значення великого розміру або надмірності, протиставляючись зменшувальному -cha.",
            "en": {
              "text": "The augmentative suffix -sapa adds a sense of large size or excess, contrasting with the diminutive -cha."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "uma-sapa",
                "головатий (з великою головою)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Augmentative: -sapa — B1"
      },
      {
        "id": "spanish-loanword-layer",
        "title": "Español Simikuna — B1",
        "emoji": "📚",
        "sections": [
          {
            "type": "intro",
            "text": "Після колонізації в кечуа увійшов значний шар іспанських запозичень для нових понять (Bibliya, kwintu), хоча базова лексика й граматика залишились переважно питомими.",
            "en": {
              "text": "After colonization, a significant layer of Spanish loanwords entered Quechua for new concepts (Bibliya, kwintu), though core vocabulary and grammar remained largely native."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kwintu (з ісп. cuento)",
                "розповідь"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Spanish Loanword Layer — B1"
      },
      {
        "id": "orthography-vowel-debate",
        "title": "Qillqa: Kimsa utaq Pichqa Vocal — B2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Кечуа не мала алфавітного письма до колонізації; сучасна стандартизована латинська орфографія досі є предметом дискусії — писати три голосні (a, i, u) чи п'ять, як в іспанській.",
            "en": {
              "text": "Quechua had no alphabetic writing before colonization; the modern standardized Latin orthography is still debated — whether to write three vowels (a, i, u) or five, as in Spanish."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "qucha vs. qocha",
                "озеро (два варіанти написання)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Orthography: Three vs. Five Vowels — B2"
      },
      {
        "id": "clothing-vocabulary",
        "title": "P'achakuna — A2",
        "emoji": "🧣",
        "sections": [
          {
            "type": "table",
            "title": "Одяг",
            "rows": [
              [
                "пончо",
                "punchu"
              ],
              [
                "в'язана шапка з навушниками",
                "ch'ullu"
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
        "id": "cardinal-directions",
        "title": "Tawantin Suyu: Lawkuna — B1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Слово Tawantinsuyu ('чотири об'єднані частини'), самоназва імперії інків, буквально складається з назв чотирьох сторін світу — інки організовували простір навколо столиці Куско за чотирма провінціями.",
            "en": {
              "text": "The word Tawantinsuyu ('the four united regions'), the Inca Empire's own name for itself, is literally built from the names of the four cardinal directions — the Incas organized space around the capital Cusco into four provinces."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Tawantinsuyu",
                "'Чотири об'єднані частини' (імперія інків)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Four Suyus (Directions) — B1"
      },
      {
        "id": "camelid-vocabulary",
        "title": "Llama, Alpaka, Wik'uña — B1",
        "emoji": "🦙",
        "sections": [
          {
            "type": "intro",
            "text": "Кечуа має окремі назви для чотирьох андійських верблюдових: llama (в'ючна тварина), alpaka (вовняна), вища за якістю vicuña та дика guanaco — усі чотири слова увійшли до інших мов світу з кечуа.",
            "en": {
              "text": "Quechua has distinct names for the four Andean camelids: llama (pack animal), alpaca (wool), the higher-quality wikuña, and the wild wari — all of which entered other world languages from Quechua."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Llama-kuna michiy.",
                "Пасти лам."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Camelid Vocabulary — B1"
      },
      {
        "id": "terrace-agriculture",
        "title": "Andenes: Pata Pata Chakra — B1",
        "emoji": "🏔️",
        "sections": [
          {
            "type": "intro",
            "text": "Слово pata (тераса) описує андійську систему ступінчастих полів на схилах гір, що дозволила вирощувати врожай у різних мікрокліматах на різній висоті водночас.",
            "en": {
              "text": "The word pata (terrace) describes the Andean system of stepped mountainside fields, which allowed farming in different microclimates at different altitudes simultaneously."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "pata pata chakra",
                "терасові поля"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Terrace Agriculture — B1"
      },
      {
        "id": "andean-instruments",
        "title": "Takiy Q'iwmikuna — A2",
        "emoji": "🎵",
        "sections": [
          {
            "type": "table",
            "title": "Музичні інструменти",
            "rows": [
              [
                "флейта",
                "quena"
              ],
              [
                "панфлейта",
                "siku / antara"
              ]
            ],
            "en": {
              "title": "Instruments"
            }
          }
        ],
        "titleEn": "Andean Musical Instruments — A2"
      },
      {
        "id": "formal-address-suffix",
        "title": "Yupaychay: -lla / -niy — B1",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Пошанне звертання до старших чи поважних осіб передається додаванням суфікса -niy до терміна спорідненості (tayta-y, 'батьку мій') замість окремого титулу.",
            "en": {
              "text": "Respectful address to elders or esteemed people is conveyed by adding the suffix -niy to a kinship term (tayta-y, 'my father') rather than a separate title."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Tayta-y!",
                "Батьку!/Шановний!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Formal Address — B1"
      },
      {
        "id": "coordinating-conjunctions-extra",
        "title": "Achkha Tantachiqkuna — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Частка chayrayku ('тому') і сполучник chaymantaqa ('потім') додають причиново-наслідкові й послідовні зв'язки поза базовим набором utaq/ichaqa.",
            "en": {
              "text": "The particle chayrayku ('therefore') and the connector chaymantaqa ('then') add causal and sequential links beyond the basic utaq/ichaqa set."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Para-sha-n-mi, chayrayku mana lluqsi-saq-chu.",
                "Дощить, тому я не вийду."
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
        "id": "irregular-verb-kay",
        "title": "Mana Kaq Simi: Kay — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово kay ('бути') часто опускається в теперішньому часі (нульова зв'язка: 'Nuqa Ana' = 'Я Ана'), але виявляється повністю в минулому і майбутньому часах — рідкісна асиметрія в парадигмі.",
            "en": {
              "text": "The verb kay ('to be') is often omitted in the present tense (zero copula: 'Nuqa Ana' = 'I [am] Ana'), but appears in full in the past and future tenses — a rare asymmetry in the paradigm."
            }
          },
          {
            "type": "table",
            "title": "Асиметрія зв'язки",
            "rows": [
              [
                "Nuqa Ana. (теп., без 'бути')",
                "Я Ана."
              ],
              [
                "Nuqa Ana ka-rqa-ni. (мин., з 'бути')",
                "Я була Ана."
              ]
            ],
            "en": {
              "title": "Copula Asymmetry"
            }
          }
        ],
        "titleEn": "Irregular Verb: kay ('to be') — B1"
      },
      {
        "id": "irregular-plural-runa",
        "title": "Mana Kaq Achka: Runa — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Слово runa ('людина') у значенні 'люди' часто вживається в однині без суфікса -kuna, коли йдеться про народ чи людство загалом, — виняток із регулярного правила утворення множини.",
            "en": {
              "text": "The word runa ('person') is often used in the singular without the -kuna suffix when referring to a people or humanity in general — an exception to the regular pluralization rule."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "runa simi",
                "мова людей (= кечуанська мова, не 'мова людини')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Collective Singular: runa — B2"
      },
      {
        "id": "irregular-negative-imperative",
        "title": "Ama: Mana Kaq Kamachiy — B2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечний наказовий спосіб не вживає частки mana, як у звичайному запереченні, а натомість власну частку ama, доданою до -y-форми, — окремий, не похідний засіб заперечення.",
            "en": {
              "text": "The negative imperative does not use the particle mana like ordinary negation; instead it uses its own particle ama added to the -y form — a separate, non-derived means of negation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ama rima-y-chu!",
                "Не говори!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negative Imperative: ama — B2"
      }
    ]
  }
];
