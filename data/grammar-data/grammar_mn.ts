// Vymova — data/grammar-data/grammar_mn.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_MN: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Биеийн төлөөний үг — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У монгольській немає граматичного роду, тому \"тэр\" означає і \"він\", і \"вона\". Є розрізнення між звичайним \"чи\" та ввічливим \"та\" при зверненні.",
            "en": {
              "text": "Mongolian has no grammatical gender, so \"тэр\" means both \"he\" and \"she\". There's a distinction between informal \"чи\" and polite \"та\" when addressing someone."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "би"
              ],
              [
                "ти (зв. / ввічл.)",
                "чи / та"
              ],
              [
                "він / вона / воно",
                "тэр"
              ],
              [
                "ми",
                "бид"
              ],
              [
                "ви",
                "та нар"
              ],
              [
                "вони",
                "тэд"
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
        "id": "eguuleg-neileltsel",
        "title": "Эгшгийн нийлэлцэл — A1",
        "emoji": "🎵",
        "sections": [
          {
            "type": "intro",
            "text": "Голосні поділяються на 'чоловічі' (задні) й 'жіночі' (передні) групи, і всі суфікси слова мусять узгоджуватися з голосною коренем — та сама голосна гармонія, що й у тюркських мовах, але з незалежною монгольською системою.",
            "en": {
              "text": "Vowels split into 'masculine' (back) and 'feminine' (front) groups, and every suffix in a word must agree with the root's vowel — the same kind of vowel harmony found in Turkic languages, but with an independently developed Mongolian system."
            }
          },
          {
            "type": "table",
            "title": "Приклади гармонії",
            "rows": [
              [
                "гэр-ээс (з юрти, передні голосні)",
                "суфікс узгоджений з коренем"
              ],
              [
                "ном-оос (з книги, задні голосні)",
                "суфікс узгоджений з коренем"
              ]
            ],
            "en": {
              "title": "Harmony Examples"
            }
          }
        ],
        "titleEn": "Vowel Harmony — A1"
      },
      {
        "id": "bichig-tuukh",
        "title": "Монгол бичиг ба кирилл — A2",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Традиційне монгольське письмо записується вертикально зверху вниз і досі вживається в Автономному районі Внутрішня Монголія Китаю, тоді як сама Монголія перейшла на кирилицю за радянського впливу 1940-х років.",
            "en": {
              "text": "Traditional Mongolian script is written vertically, top to bottom, and is still used in China's Inner Mongolia Autonomous Region, while Mongolia itself switched to Cyrillic under Soviet influence in the 1940s."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Монголд кирилл үсэг 1941 оноос хэрэглэгддэг.",
                "У Монголії кирилицю вживають з 1941 року."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Traditional Script and Cyrillic — A2"
      },
      {
        "id": "svoy-affix",
        "title": "Өөрийн харьяалал: -аа — A2",
        "emoji": "🏠",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотно-присвійний суфікс -аа/-ээ/-оо/-өө вказує, що предмет належить саме підмету речення, — окрема форма, відмінна від звичайного присвійного слова для чужого предмета.",
            "en": {
              "text": "The reflexive-possessive suffix -аа/-ээ/-оо/-өө indicates that an item belongs specifically to the sentence's own subject — a distinct form from the ordinary possessive for someone else's item."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Тэр номоо уншив.",
                "Він прочитав свою (власну) книгу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reflexive-Possessive Suffix: -аа — A2"
      },
      {
        "id": "negasion-i-preguntas",
        "title": "Үгүйсгэл ба асуулт — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється часткою үгүй чи суфіксом -гүй, доданим до дієслова; питання без питального слова передаються часткою уу/юу в кінці речення.",
            "en": {
              "text": "Negation is formed with the particle үгүй or the suffix -гүй added to the verb; yes/no questions are formed with the particle уу/юу at the end of the sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Би мэдэхгүй.",
                "Я не знаю."
              ],
              [
                "Чи ирэх үү?",
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
        "id": "present-general-na",
        "title": "Одоо цаг: -на/-нэ — A1",
        "emoji": "☀️",
        "sections": [
          {
            "type": "intro",
            "text": "Загальний теперішній час утворюється суфіксом -на/-нэ/-но/-нө (варіант обирається за голосною гармонією), позначаючи дію взагалі або факт.",
            "en": {
              "text": "The general present tense is formed with the suffix -на/-нэ/-но/-нө (the variant chosen by vowel harmony), marking an action in general or a fact."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Би ном уншина.",
                "Я читаю книгу (взагалі, регулярно)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "General Present: -на/-нэ — A1"
      },
      {
        "id": "present-continuous-j-baina",
        "title": "Одоогийн үргэлжлэх: -ж байна — A1",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія в момент мовлення передається дієприслівником на -ж/-ч плюс допоміжне байна ('перебувати') — точний аналог тривалого часу.",
            "en": {
              "text": "An action in progress at the moment of speaking is expressed with the converb in -ж/-ч plus the auxiliary байна ('to be present') — a close analog of the continuous tense."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Би ном уншиж байна.",
                "Я саме читаю книгу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Continuous: -ж байна — A1"
      },
      {
        "id": "past-witnessed-v-laa",
        "title": "Харсан өнгөрсөн: -лаа — A2",
        "emoji": "👁️",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -лаа/-лээ позначає минулу дію, свідком якої мовець був особисто, — граматичне розрізнення засвідченості, вбудоване прямо в закінчення дієслова.",
            "en": {
              "text": "The suffix -лаа/-лээ marks a past action the speaker personally witnessed — a grammatical evidentiality distinction built right into the verb ending."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Тэр ирлээ.",
                "Він прийшов (я бачив це на власні очі)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Witnessed Past: -лаа — A2"
      },
      {
        "id": "past-unwitnessed-jee",
        "title": "Гэрчлэгдээгүй өнгөрсөн: -жээ — B1",
        "emoji": "🗞️",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -жээ/-чээ позначає минулу дію, про яку мовець дізнався непрямо — з чужих слів, здогаду чи виявленого результату, — а не побачив особисто.",
            "en": {
              "text": "The suffix -жээ/-чээ marks a past action the speaker learned about indirectly — from hearsay, inference, or a discovered result — rather than having personally seen it."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Тэр ирсэн байжээ.",
                "Виявляється, він прийшов (я не бачив, а дізнався потім)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Unwitnessed/Inferential Past: -жээ — B1"
      },
      {
        "id": "past-perfect-san",
        "title": "Ерөнхий өнгөрсөн: -сан — A2",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -сан/-сэн — найзагальніша форма минулого часу, нейтральна щодо засвідченості, уживана для загального опису подій і в оповіді.",
            "en": {
              "text": "The suffix -сан/-сэн is the most general past-tense form, neutral regarding evidentiality, used for general narration and storytelling."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Би сургуульд явсан.",
                "Я ходив до школи."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "General Past: -сан — A2"
      },
      {
        "id": "future-intent-h",
        "title": "Ирээдүй: -х — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприкметник майбутнього часу на -х, ужитий самостійно з допоміжним дієсловом байх, позначає намір чи впевнене майбутнє.",
            "en": {
              "text": "The future participle in -х, used on its own with the auxiliary байх, marks intention or a confident future."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Би ирэх болно.",
                "Я прийду."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Future: -х — A2"
      },
      {
        "id": "future-going-to-haar",
        "title": "Хийхээр байна: -хаар — B1",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "Форма на -хаар плюс допоміжне байна виражає найближче заплановане майбутнє — 'збиратися зробити щось прямо зараз'.",
            "en": {
              "text": "The form in -хаар plus the auxiliary байна expresses the imminent planned future — 'to be about to do something right now'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Би явахаар байна.",
                "Я збираюся йти."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Imminent Future: -хаар байна — B1"
      },
      {
        "id": "habitual-dag",
        "title": "Заншил: -даг — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -даг/-дэг позначає звичну, регулярно повторювану дію чи загальну властивість — окрема форма, відмінна від простого теперішнього часу на -на.",
            "en": {
              "text": "The suffix -даг/-дэг marks a habitual, regularly repeated action or a general property — a distinct form from the plain -на present."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Би өглөө кофе уудаг.",
                "Я зазвичай п'ю каву вранці."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Habitual: -даг — B1"
      },
      {
        "id": "imperative-mood",
        "title": "Тушаалын хэлбэр — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Прямий наказ утворюється голою основою дієслова; ввічливіша форма додає суфікс -аарай/-ээрэй для пом'якшення.",
            "en": {
              "text": "A direct command is formed with the bare verb stem; a politer form adds the suffix -аарай/-ээрэй to soften it."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Суу!",
                "Сідай!"
              ],
              [
                "Суугаарай.",
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
        "id": "conditional-bal",
        "title": "Болзолт: -бал/-вэл — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб утворюється суфіксом -бал/-вэл, доданим прямо до дієслова, — 'якщо' вбудоване в саму дієслівну форму, без окремого сполучника.",
            "en": {
              "text": "The conditional is formed with the suffix -бал/-вэл added directly to the verb — 'if' built right into the verb form, with no separate conjunction."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Бороо орвол, би гэртээ байна.",
                "Якщо піде дощ, я залишуся вдома."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional: -бал/-вэл — B1"
      },
      {
        "id": "converb-consecutive-aad",
        "title": "Дараалсан деепричастие: -аад — B1",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприслівник на -аад/-ээд позначає завершену дію, за якою одразу слідує наступна, — 'зробивши це, потім...', зв'язуючи два речення без сполучника.",
            "en": {
              "text": "The converb in -аад/-ээд marks a completed action immediately followed by the next one — 'having done this, then...', linking two clauses with no conjunction."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Би идээд явлаа.",
                "Я поїв і пішов."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Consecutive Converb: -аад — B1"
      },
      {
        "id": "converb-simultaneous-j",
        "title": "Зэрэгцүүлсэн деепричастие: -ж — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Той самий дієприслівник на -ж/-ч, що й у прогресивному часі, поза допоміжним байна позначає одночасну дію — 'роблячи це, водночас...'.",
            "en": {
              "text": "The same converb in -ж/-ч used in the progressive tense, apart from the auxiliary байна, marks a simultaneous action — 'while doing this, at the same time...'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Тэр дуулж алхлаа.",
                "Він ходив, співаючи."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Simultaneous Converb: -ж — B1"
      },
      {
        "id": "converb-purpose-haar",
        "title": "Зорилгын деепричастие: -хаар — B2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Та сама форма на -хаар, що й у найближчому майбутньому, у поєднанні з дієсловом руху вводить речення мети — 'щоб зробити'.",
            "en": {
              "text": "The same -хаар form used for the imminent future, combined with a motion verb, introduces a purpose clause — 'in order to do'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Би ном авахаар явлаа.",
                "Я пішов, щоб узяти книгу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Purpose Converb: -хаар — B2"
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
        "id": "seven-cases-system",
        "title": "Долоон тийн ялгал — A2",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники відмінюються за сімома аглютинативними відмінками через суфікси, кожен з яких має кілька варіантів залежно від голосної гармонії кореня.",
            "en": {
              "text": "Nouns decline through seven agglutinative cases via suffixes, each with several variants depending on the root's vowel harmony."
            }
          },
          {
            "type": "table",
            "title": "Приклади відмінків",
            "rows": [
              [
                "ном (книга, називний) → номын (родовий)",
                "суфікс родового"
              ],
              [
                "номд (давально-місцевий)",
                "суфікс давально-місцевого"
              ]
            ],
            "en": {
              "title": "Case Examples"
            }
          }
        ],
        "titleEn": "The Seven Cases — A2"
      },
      {
        "id": "genitive-case-yn",
        "title": "Харьяалах тийн ялгал: -ын — A2",
        "emoji": "🏠",
        "sections": [
          {
            "type": "intro",
            "text": "Родовий відмінок на -ын/-ийн/-ы/-ий передає присвійність чи означувальний зв'язок, ставлячись перед означуваним іменником.",
            "en": {
              "text": "The genitive case in -ын/-ийн/-ы/-ий conveys possession or a modifying relationship, standing before the modified noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ээжийн гэр",
                "дім матері"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Genitive Case: -ын — A2"
      },
      {
        "id": "dative-locative-case-d",
        "title": "Заах оршихын тийн ялгал: -д/-т — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Давально-місцевий відмінок на -д/-т одночасно позначає і одержувача дії, і місце перебування — 'кому' і 'де' одним і тим самим суфіксом.",
            "en": {
              "text": "The dative-locative case in -д/-т simultaneously marks both the recipient of an action and a location — 'to whom' and 'where' with the same suffix."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "сургуульд",
                "у школі / до школи (давально-місцевий)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Dative-Locative Case: -д/-т — A2"
      },
      {
        "id": "ablative-case-aas",
        "title": "Гарах тийн ялгал: -аас — A2",
        "emoji": "↩️",
        "sections": [
          {
            "type": "intro",
            "text": "Відкладний відмінок на -аас/-ээс/-оос/-өөс позначає джерело чи вихідну точку руху — 'звідки, з'.",
            "en": {
              "text": "The ablative case in -аас/-ээс/-оос/-өөс marks the source or starting point of movement — 'from where'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Улаанбаатараас",
                "з Улан-Батора"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ablative Case: -аас — A2"
      },
      {
        "id": "instrumental-case-aar",
        "title": "Тусгай тийн ялгал: -аар — B1",
        "emoji": "🛠️",
        "sections": [
          {
            "type": "intro",
            "text": "Орудний відмінок на -аар/-ээр/-оор/-өөр позначає знаряддя дії, маршрут руху чи причину, залежно від контексту.",
            "en": {
              "text": "The instrumental case in -аар/-ээр/-оор/-өөр marks the instrument of an action, a route of movement, or a cause, depending on context."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "машинаар",
                "машиною (знаряддя пересування)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Instrumental Case: -аар — B1"
      },
      {
        "id": "comitative-case-tai",
        "title": "Хамтын тийн ялгал: -тай — A2",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "Супровідний відмінок на -тай/-тэй/-той позначає супровід ('разом з') чи наявність якості/предмета — 'з чимось'.",
            "en": {
              "text": "The comitative case in -тай/-тэй/-той marks accompaniment ('together with') or the presence of a quality/item — 'with something'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "найзтай",
                "з другом"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comitative Case: -тай — A2"
      },
      {
        "id": "postpositions-not-prepositions",
        "title": "Дараах үг — B1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Складніші просторові й часові відношення передаються постпозиціями, що йдуть після іменника у відповідному відмінку, а не прийменниками перед ним.",
            "en": {
              "text": "More complex spatial and temporal relations are conveyed with postpositions that follow the noun in the appropriate case, rather than prepositions preceding it."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ширээний дор",
                "під столом"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Postpositions, Not Prepositions — B1"
      },
      {
        "id": "plural-suffix-system",
        "title": "Олон тооны дагавар — A2",
        "emoji": "➕",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється кількома можливими суфіксами (-нар, -ууд, -үүд, -чууд) залежно від типу іменника й голосної гармонії — не єдине правило на всі слова.",
            "en": {
              "text": "The plural is formed with several possible suffixes (-нар, -ууд, -үүд, -чууд) depending on the noun type and vowel harmony — not a single rule for every word."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "хүүхэд → хүүхдүүд",
                "дитина → діти"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Plural Suffix System — A2"
      },
      {
        "id": "demonstratives-ene-ter",
        "title": "Заах үг: Энэ, Тэр — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Вказівне энэ ('цей') позначає близький предмет, тэр ('той') — далекий; обидва стоять перед іменником, незмінні за родом чи числом.",
            "en": {
              "text": "The demonstrative энэ ('this') marks a near item, тэр ('that') a far one; both stand before the noun, invariant for gender or number."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "энэ ном",
                "ця книга"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Demonstratives: энэ, тэр — A1"
      },
      {
        "id": "question-words",
        "title": "Асуух үг: Юу, Хэн, Хаана — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питальні слова юу (що), хэн (хто), хаана (де), хэзээ (коли) зазвичай стоять на тому самому місці в реченні, де було б слово, яке вони заміняють.",
            "en": {
              "text": "The question words юу (what), хэн (who), хаана (where), хэзээ (when) normally stand in the same sentence position the replaced word would occupy."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Чи хаана байна вэ?",
                "Де ти є?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Question Words: юу, хэн, хаана — A1"
      },
      {
        "id": "comparison-ees-ilvv",
        "title": "Харьцуулах: -аас илүү — A2",
        "emoji": "⚖️",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняння вищого ступеня утворюється відкладним відмінком -аас плюс слово илүү ('більше') — прикметник сам не змінюється.",
            "en": {
              "text": "Comparison of superiority is formed with the ablative case -аас plus the word илүү ('more') — the adjective itself doesn't change."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Тэр надаас өндөр.",
                "Він вищий за мене."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparison with -аас илүү — A2"
      },
      {
        "id": "superlative-hamgiin",
        "title": "Хамгийн дээд зэрэг — B1",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь додає слово хамгийн ('найбільше') перед прикметником.",
            "en": {
              "text": "The superlative adds the word хамгийн ('the most') before the adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "хамгийн өндөр",
                "найвищий"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Superlative with хамгийн — B1"
      },
      {
        "id": "word-order-sov",
        "title": "Үгийн дараалал: SOV — A1",
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
                "Би цай уужа.",
                "Я п'ю чай (я-чай-п'ю)."
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
        "id": "adjective-invariant-before-noun",
        "title": "Тэмдэг нэр өөрчлөгддөггүй — A2",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники стоять перед іменником і не узгоджуються з ним за родом, числом чи відмінком, — одна незмінна форма завжди.",
            "en": {
              "text": "Adjectives stand before the noun and don't agree with it in gender, number, or case — one invariant form always."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "том гэр / том гэрүүд",
                "великий дім / великі доми (той самий прикметник)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Invariant Adjectives Before the Noun — A2"
      },
      {
        "id": "relative-participle-strategy",
        "title": "Оршихуйн тэмдэг нэр: харилцан холбоос — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Замість відносного займенника вживається дієприкметникова форма дієслова, поставлена прямо перед іменником, — ціле підрядне речення стискається в одне слово-означення.",
            "en": {
              "text": "Instead of a relative pronoun, a participial verb form is used, placed right before the noun — a whole relative clause compressed into a single modifying word."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Би уншсан ном",
                "книга, яку я прочитав"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Participle Strategy — B1"
      },
      {
        "id": "possessive-suffix-general",
        "title": "Ердийн харьяалал: -ын vs Өөрийн: -аа — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Звичайний родовий відмінок -ын указує на когось стороннього, тоді як зворотно-присвійний -аа (з основ) позначає власника, який водночас є підметом того самого речення, — дві граматично несумісні присвійні стратегії.",
            "en": {
              "text": "The ordinary genitive -ын points to someone else, while the reflexive-possessive -аа (from basics) marks a possessor who is also the subject of that same sentence — two grammatically incompatible possessive strategies."
            }
          },
          {
            "type": "table",
            "title": "Дві присвійні стратегії",
            "rows": [
              [
                "Түүний ном (родовий, чужа книга)",
                "його книга (чиясь інша)"
              ],
              [
                "Номоо уншив (зворотне -аа, власна)",
                "прочитав свою (власну) книгу"
              ]
            ],
            "en": {
              "title": "Two Possessive Strategies"
            }
          }
        ],
        "titleEn": "Genitive -ын vs. Reflexive -аа — B1"
      },
      {
        "id": "numerals-cardinal",
        "title": "Тоо: Нэг, Хоёр, Гурав — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Кількісні числівники мають власні монгольські корені й ставляться перед іменником.",
            "en": {
              "text": "Cardinal numbers have their own Mongolian roots and are placed before the noun."
            }
          },
          {
            "type": "table",
            "title": "Числа",
            "rows": [
              [
                "нэг, хоёр, гурав",
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
        "title": "Дараалал заасан тоо: -дугаар — A2",
        "emoji": "🥇",
        "sections": [
          {
            "type": "intro",
            "text": "Порядкові числівники утворюються суфіксом -дугаар/-дүгээр, доданим до кількісного числівника.",
            "en": {
              "text": "Ordinal numbers are formed with the suffix -дугаар/-дүгээр added to the cardinal number."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "гуравдугаар",
                "третій"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ordinal Numbers: -дугаар — A2"
      },
      {
        "id": "vocative-forms",
        "title": "Дуудлагын хэлбэр — B1",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Звертання до когось часто передається просто ім'ям чи титулом без окремої граматичної форми, хоча в деяких застиглих виразах трапляється особлива вокативна частка.",
            "en": {
              "text": "Direct address is often conveyed simply with a name or title, with no dedicated grammatical form, though some fixed expressions have a special vocative particle."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Багш аа!",
                "Учителю!"
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
        "id": "diminutive-suffixes",
        "title": "Эрхэмсэг дагавар — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувально-пестливий суфікс -хан/-хэн, доданий до кореня, надає слову ласкавого чи зменшеного відтінку.",
            "en": {
              "text": "The diminutive suffix -хан/-хэн, added to a root, gives the word an affectionate or diminished shade."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "жижигхэн",
                "манюсінький"
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
        "id": "compound-word-formation",
        "title": "Нийлмэл үг — B2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Складні слова поєднують дві основи в одне ціле, часто описуючи предмет через його функцію чи зовнішній вигляд.",
            "en": {
              "text": "Compound words join two stems into one unit, often describing an item through its function or appearance."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "гар (рука) + утас (дріт) → гар утас (мобільний телефон)",
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
        "id": "kinship-terms-elaborate",
        "title": "Ураг төрлийн нэршил — B1",
        "emoji": "👪",
        "sections": [
          {
            "type": "intro",
            "text": "Розлога система термінів спорідненості розрізняє родичів за стороною сім'ї (материнська/батьківська) й відносним віком — точніше, ніж у більшості європейських мов.",
            "en": {
              "text": "An elaborate kinship-term system distinguishes relatives by side of family (maternal/paternal) and relative age — more precisely than in most European languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "нагац ах (дядько по материнській лінії) vs авга ах (дядько по батьківській лінії)",
                "розрізнення за стороною сім'ї"
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
        "id": "honorific-verb-endings",
        "title": "Хүндэтгэлийн үйл үг — B2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Ввічливий регістр додає окремі частки чи форми ввічливості до звичайних дієслівних закінчень при зверненні до старших чи офіційних осіб.",
            "en": {
              "text": "The polite register adds separate politeness particles or forms to ordinary verb endings when addressing elders or official figures."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Та сууна уу?",
                "Ви сідаєте? (ввічливе звертання)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Honorific Verb Forms — B2"
      },
      {
        "id": "negative-suffix-guai-depth",
        "title": "Үгүйсгэх дагавар: -гүй ахин ажиглах — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -гүй/-гvй не лише заперечує дієслово, а й може приєднуватися до іменника, надаючи йому значення 'без' — той самий суфікс, дві різні граматичні ролі.",
            "en": {
              "text": "The suffix -гүй/-гvй doesn't just negate a verb — it can also attach to a noun, giving it the meaning 'without' — the same suffix, two different grammatical roles."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "мөнгөгүй",
                "без грошей"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The -гүй Suffix: Verb and Noun Uses — B1"
      },
      {
        "id": "numeral-noun-agreement-no-plural",
        "title": "Тоотой хамт нэр vг ганц тоонд — B1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Іменник після будь-якого числівника залишається в однині, — множинний суфікс тут був би граматично зайвим, оскільки саме число вже вказує на кількість.",
            "en": {
              "text": "The noun after any numeral stays in the singular — a plural suffix here would be grammatically redundant, since the number itself already indicates quantity."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "гурван ном (не 'номууд')",
                "три книги (іменник в однині)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Nouns Stay Singular After Numerals — B1"
      },
      {
        "id": "evidentiality-three-way",
        "title": "Гэрчлэлийн гурван зэрэг — B2",
        "emoji": "👁️",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий час має тристороннє розрізнення за джерелом інформації — особисто засвідчене (-лаа), почуте чи виявлене (-жээ), і нейтральне загальне (-сан) — граматично обов'язковий вибір за кожної розповіді про минуле.",
            "en": {
              "text": "The past tense has a three-way distinction by information source — personally witnessed (-лаа), heard or discovered (-жээ), and neutral general (-сан) — a grammatically mandatory choice every time one narrates the past."
            }
          },
          {
            "type": "table",
            "title": "Три джерела інформації",
            "rows": [
              [
                "ирлээ (я сам бачив)",
                "жив свідоцтво"
              ],
              [
                "ирсэн байжээ (дізнався потім)",
                "непряме джерело"
              ],
              [
                "ирсэн (нейтрально)",
                "загальна розповідь"
              ]
            ],
            "en": {
              "title": "Three Information Sources"
            }
          }
        ],
        "titleEn": "The Three-Way Evidentiality System — B2"
      },
      {
        "id": "converb-system-depth",
        "title": "Деепричастийн систем: гvнзгий — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Крім послідовного й одночасного, монгольська має ще кілька окремих дієприслівникових форм — умовну, поступову, причинову, — кожна з власним суфіксом і власною логічною роллю в реченні.",
            "en": {
              "text": "Besides the consecutive and simultaneous converbs, Mongolian has several more distinct converb forms — conditional, concessive, causal — each with its own suffix and logical role in the sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Явсан ч (поступовий, 'хоча пішов')",
                "приклад іншого типу дієприслівника"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Converb System in Depth — B2"
      },
      {
        "id": "vertical-script-letterforms",
        "title": "Монгол бичгийн үсгийн хэлбэр — B2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "У традиційному вертикальному письмі форма кожної літери залежить від її позиції в слові — на початку, всередині чи в кінці, — подібно до арабської, хоча система розвинулася повністю незалежно.",
            "en": {
              "text": "In the traditional vertical script, each letter's shape depends on its position in the word — initial, medial, or final — similarly to Arabic, though the system developed completely independently."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Форма букви змінюється залежно від того, стоїть вона на початку чи в кінці слова.",
                "позиційна зміна форми літери"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Positional Letterforms in Traditional Script — B2"
      },
      {
        "id": "nomadic-livestock-vocabulary",
        "title": "Малын нэршил: маш нарийвчилсан — B2",
        "emoji": "🐴",
        "sections": [
          {
            "type": "intro",
            "text": "Кочова тваринницька культура наклала на мову надзвичайно детальну лексику — окреме слово для коня майже кожного віку, статі й масті, замість опису прикметниками.",
            "en": {
              "text": "Nomadic pastoral culture left the language with extraordinarily detailed vocabulary — a separate dedicated word for a horse of nearly every age, sex, and color, instead of describing it with adjectives."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "унага (лоша до року), даага (лоша 1-2 роки), шүдлэн (кінь 2-3 роки) — окремі слова, не прикметники",
                "детальна вікова лексика коней"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Detailed Livestock Vocabulary — B2"
      },
      {
        "id": "tibetan-buddhist-loanwords",
        "title": "Төвд буддын шашны үгс — B1",
        "emoji": "☸️",
        "sections": [
          {
            "type": "intro",
            "text": "Століття тибетського буддизму залишили в монгольській окремий шар релігійних і філософських запозичень, відмінний і від питомих монгольських коренів, і від пізніших російських запозичень.",
            "en": {
              "text": "Centuries of Tibetan Buddhism left Mongolian with a distinct layer of religious and philosophical loanwords, separate both from native Mongolian roots and from later Russian borrowings."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "лам (буддійський монах) — з тибетської",
                "тибетське запозичення"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Tibetan Buddhist Loanwords — B1"
      },
      {
        "id": "russian-loanwords-soviet",
        "title": "Оросын үгс: Зөвлөлтийн үе — B1",
        "emoji": "🔴",
        "sections": [
          {
            "type": "intro",
            "text": "Радянський вплив ХХ століття залишив окремий, пізніший шар запозичень у технічній, адміністративній та побутовій лексиці, окремий від давнього тибетського шару.",
            "en": {
              "text": "20th-century Soviet influence left a separate, later layer of loanwords in technical, administrative, and everyday vocabulary, distinct from the older Tibetan layer."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "машин (машина) — з російської",
                "радянське запозичення"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Russian Loanwords from the Soviet Era — B1"
      },
      {
        "id": "khalkha-oirat-buryat-dialects",
        "title": "Халх, Ойрад, Буриад аялгуу — B2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Стандартна монгольська базується на халхаському діалекті, тоді як ойратський і бурятський діалекти розходяться настільки, що частина лінгвістів вважає їх окремими мовами монгольської сім'ї.",
            "en": {
              "text": "Standard Mongolian is based on the Khalkha dialect, while Oirat and Buryat diverge enough that some linguists consider them separate languages of the Mongolic family."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Стандарт базується саме на халхаському діалекті, не на ойратському чи бурятському.",
                "діалектна основа стандарту"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Khalkha, Oirat, and Buryat Dialects — B2"
      },
      {
        "id": "case-suffix-stacking",
        "title": "Тийн ялгалын давхарга — B2",
        "emoji": "🧱",
        "sections": [
          {
            "type": "intro",
            "text": "Відмінкові суфікси можуть накладатися один на одного на тому самому іменнику в чіткому фіксованому порядку — спочатку присвійний, потім місцевий, наприклад, — багатошарова аглютинація.",
            "en": {
              "text": "Case suffixes can stack on top of each other on the same noun in a strict fixed order — possessive first, then locative, for instance — multi-layered agglutination."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "гэртээ (гэр + -т + -аа, у своєму домі, два суфікси поспіль)",
                "накладені суфікси"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Stacked Case Suffixes — B2"
      },
      {
        "id": "honorific-register-depth",
        "title": "Хүндэтгэлийн үг хэллэг: гvнзгий — B2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Крім дієслівних часток, ввічливий регістр уживає й окремі шанобливі іменники та займенники замість буденних відповідників того самого значення.",
            "en": {
              "text": "Besides verb particles, the polite register also uses separate honorific nouns and pronouns instead of everyday equivalents of the same meaning."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "та (ввічливе 'ви') замість чи ('ти', буденне)",
                "ввічлива лексика замість буденної"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Honorific Register in Depth — B2"
      },
      {
        "id": "passive-voice-suffix",
        "title": "Страдательный хэлбэр: -гд- — B1",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний стан утворюється суфіксом -гд-/-гд, вставленим перед закінченням дієслова, — граматично вбудований пасив, без допоміжного дієслова.",
            "en": {
              "text": "The passive voice is formed with the suffix -гд-/-гд inserted before the verb ending — a grammatically built-in passive, with no auxiliary verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "барих (будувати) → баригдах (бути побудованим)",
                "пасивний суфікс"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Passive Voice Suffix: -гд- — B1"
      },
      {
        "id": "causative-voice-suffix",
        "title": "Үүсгэх хэлбэр: -уул- — B1",
        "emoji": "⚡",
        "sections": [
          {
            "type": "intro",
            "text": "Каузативний суфікс -уул-/-үүл-, вставлений перед закінченням дієслова, додає значення 'змушувати робити' — граматично вбудована причиновість.",
            "en": {
              "text": "The causative suffix -уул-/-үүл-, inserted before the verb ending, adds the meaning 'to make someone do' — grammatically built-in causation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "унших (читати) → уншуулах (змушувати читати)",
                "каузативний суфікс"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Causative Voice Suffix: -уул- — B1"
      },
      {
        "id": "compound-verb-auxiliary",
        "title": "Нийлмэл үйл үг: өгөх — B2",
        "emoji": "🎁",
        "sections": [
          {
            "type": "intro",
            "text": "Допоміжне дієслово өгөх ('давати'), додане після дієприслівника, позначає, що дію виконано на користь когось іншого, — благодійний відтінок значення.",
            "en": {
              "text": "The auxiliary verb өгөх ('to give'), added after the converb, marks that the action was performed for someone else's benefit — a benefactive shade of meaning."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Би түүнд ном уншиж өглөө.",
                "Я почитав йому книгу (на його користь)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Compound Verb: Benefactive өгөх — B2"
      },
      {
        "id": "directional-suffix-toward-away",
        "title": "Чиглэлийн дагавар — B2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Спеціальний суфікс напрямку, доданий до дієслова руху, вказує, чи рухається предмет до мовця чи від нього, — уточнення, вбудоване прямо в дієслово.",
            "en": {
              "text": "A special directional suffix added to a motion verb indicates whether the item is moving toward or away from the speaker — a clarification built right into the verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ирэх (прийти, до мовця) vs явах (піти, від мовця)",
                "напрямкове розрізнення в самому дієслові"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Directional Motion Verbs — B2"
      },
      {
        "id": "converb-chaining-complex-sentences",
        "title": "Деепричастийн гинж: төвөгтэй өгүүлбэр — B2",
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
                "Босож, угаагаад, идэж, явлаа.",
                "Встав, помився, поїв і пішов (лише останнє дієслово має час)."
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
        "id": "numeral-classifier-limited-use",
        "title": "Тооллын нэгж: хязгаарлагдмал — B2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від багатьох східноазійських мов, монгольська вживає класифікатори для лічби обмежено — лише для кількох особливих категорій, як-от плоскі предмети чи тварини.",
            "en": {
              "text": "Unlike many East Asian languages, Mongolian uses counting classifiers in a limited way — only for a few special categories, such as flat objects or livestock."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Обмежений набір класифікаторів для окремих категорій предметів.",
                "рідкісне вживання класифікаторів"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Limited Numeral Classifier Use — B2"
      },
      {
        "id": "mongolian-script-reform-history",
        "title": "Бичгийн шинэчлэлийн түүх — B2",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Монголія коротко експериментувала з латинською абеткою на початку 1930-х років, перш ніж остаточно перейти на кирилицю 1941 року, — епізод, майже забутий у сучасній мовній свідомості.",
            "en": {
              "text": "Mongolia briefly experimented with the Latin alphabet in the early 1930s before finally switching to Cyrillic in 1941 — an episode nearly forgotten in modern language consciousness."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Латинська абетка проіснувала недовго до переходу на кирилицю.",
                "історія писемних реформ"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "History of Script Reforms — B2"
      },
      {
        "id": "nomadic-directional-terms",
        "title": "Гэрийн чиг баримжаа — B2",
        "emoji": "⛺",
        "sections": [
          {
            "type": "intro",
            "text": "Традиційна юрта завжди має орієнтацію дверей на південь, і внутрішній простір ділиться на чоловічу/жіночу й почесну/буденну зони — просторова термінологія, вкорінена в кочовому побуті.",
            "en": {
              "text": "The traditional ger always faces its door south, and the interior space is divided into male/female and honored/everyday zones — spatial terminology rooted in nomadic life."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "хойморь (почесне місце навпроти дверей юрти)",
                "просторовий термін кочового побуту"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ger-Based Spatial Orientation Terms — B2"
      },
      {
        "id": "buddhist-monastic-vocabulary-register",
        "title": "Хийдийн лексик — B2",
        "emoji": "🛕",
        "sections": [
          {
            "type": "intro",
            "text": "Монастирська буддійська лексика утворює окремий шар, значною мірою побудований на тибетських і санскритських коренях, майже незрозумілий поза релігійним контекстом.",
            "en": {
              "text": "Monastic Buddhist vocabulary forms a separate layer, largely built on Tibetan and Sanskrit roots, nearly incomprehensible outside a religious context."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Монастирська лексика значною мірою відрізняється від побутової.",
                "спеціалізований релігійний шар"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Monastic Buddhist Vocabulary — B2"
      },
      {
        "id": "code-switching-russian-english",
        "title": "Орос, Англи хэлтэй хольж хэрэглэх — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "У міському й освіченому мовленні типове перемикання кодів усередині одного речення — граматичний каркас монгольський, а частина лексики вставляється з російської чи англійської без адаптації.",
            "en": {
              "text": "Urban, educated speech typically code-switches within a single sentence — the grammatical frame is Mongolian, while chunks of vocabulary are inserted from Russian or English without adaptation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Би компьютер дээр ажиллаж байна.",
                "Я працюю на комп'ютері (запозичена лексика без адаптації)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Russian/English Code-Switching — B2"
      },
      {
        "id": "reduplication-intensifier",
        "title": "Давтамж: эрч хvчийг нэмэх — B2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Часткове подвоєння першого складу прикметника з приголосним 'б' підсилює його значення — 'справді дуже' замість простого прикметника.",
            "en": {
              "text": "Partial reduplication of an adjective's first syllable with the consonant 'б' intensifies its meaning — 'really very' instead of the plain adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "улаан → улбар улаан (яскраво-червоний)",
                "часткове подвоєння для підсилення"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reduplication for Intensity — B2"
      },
      {
        "id": "numeral-with-classifier-time",
        "title": "Цаг хугацааны тоолол — B1",
        "emoji": "🕐",
        "sections": [
          {
            "type": "intro",
            "text": "Вираження часу (година, день, тиждень) вживає власний набір суфіксів для кожної одиниці виміру, відмінний від звичайної лічби предметів.",
            "en": {
              "text": "Time expressions (hour, day, week) use their own set of suffixes for each unit of measure, distinct from ordinary object counting."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "гурван цаг",
                "три години"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Time-Counting Expressions — B1"
      },
      {
        "id": "relative-clause-tense-marking-participle",
        "title": "Оршихуйн тэмдэг нэр: цаг заах — B2",
        "emoji": "⏱️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприкметникова форма, що заміняє відносне речення, сама несе часову інформацію — окрема форма для теперішнього, минулого й майбутнього значення підрядного речення.",
            "en": {
              "text": "The participial form that replaces a relative clause itself carries tense information — a separate form for present, past, and future meaning of the subordinate clause."
            }
          },
          {
            "type": "table",
            "title": "Часові форми дієприкметника",
            "rows": [
              [
                "уншдаг ном (теп., 'книга, яку читаю')",
                "унших ном (майб., 'книга, яку читатиму')"
              ]
            ],
            "en": {
              "title": "Participle Tense Forms"
            }
          }
        ],
        "titleEn": "Relative Participle: Tense Marking — B2"
      },
      {
        "id": "polite-imperative-aarai-depth",
        "title": "Хvндэтгэсэн тушаал: -аарай гvнзгий — B1",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Той самий суфікс -аарай/-ээрэй з наказового способу додатково вживається й для пом'якшених побажань та порад, не лише прямих наказів, — розширена ввічлива функція тієї самої форми.",
            "en": {
              "text": "The same suffix -аарай/-ээрэй from the imperative is also additionally used for softened wishes and advice, not just direct commands — an extended polite function of the same form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Сайн аяллаарай!",
                "Гарної подорожі! (пом'якшене побажання, не наказ)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Polite -аарай Beyond the Imperative — B1"
      },
      {
        "id": "converb-negative-algui",
        "title": "Vгvйсгэсэн деепричастие: -алгvй — B2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечний дієприслівник на -алгvй/-элгvй означає 'не роблячи цього' — окремий тип дієприслівника, який поєднує в собі одночасно заперечення й одночасність дії.",
            "en": {
              "text": "The negative converb in -алгvй/-элгvй means 'without doing this' — a distinct converb type that combines negation and simultaneity in one form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Тэр юу ч хэлэлгvй явлаа.",
                "Він пішов, нічого не сказавши."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negative Converb: -алгvй — B2"
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
        "title": "Дvрэмгvй vйл vг — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька частовживаних дієслів (байх 'бути', очих 'приходити') мають форми, що не виводяться регулярно з очікуваного зразка суфіксації.",
            "en": {
              "text": "A few common verbs (байх 'to be', очих 'to come') have forms that can't be regularly derived from the expected suffixation pattern."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "байна (є, не за звичайним зразком)",
                "нерегулярна форма дієслова байх"
              ]
            ]
          }
        ],
        "titleEn": "Irregular Verbs — B1"
      },
      {
        "id": "irregular-plural-forms",
        "title": "Дvрэмгvй олон тоо — B1",
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
                "хvн → хvмvvс (не за очікуваним зразком)",
                "нерегулярна множина"
              ]
            ]
          }
        ],
        "titleEn": "Irregular Plurals — B1"
      },
      {
        "id": "fixed-proverbs-archaic-grammar",
        "title": "Зvйр vгийн эртний дvрэм — B2",
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
                "Хvнээс их юм алга, хvлнээс хурдан юм алга.",
                "Нема нічого могутнішого за людину, нема нічого швидшого за ногу (застигла приказка з архаїчною структурою)."
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
