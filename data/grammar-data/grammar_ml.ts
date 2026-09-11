// Vymova — data/grammar-data/grammar_ml.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_ML: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "സർവ്വനാമങ്ങൾ — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У малаялам, як і в тамільській, ввічлива форма \"നിങ്ങൾ\" (ningaḷ) служить і поважним звертанням, і звичайною множиною.",
            "en": {
              "text": "In Malayalam, as in Tamil, the polite form \"നിങ്ങൾ\" (ningaḷ) serves both as a respectful address and as the ordinary plural."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ഞാൻ (njān)"
              ],
              [
                "ти (зв. / ввічл.)",
                "നീ / നിങ്ങൾ (nī / ningaḷ)"
              ],
              [
                "він / вона",
                "അവൻ / അവൾ (avan / avaḷ)"
              ],
              [
                "ми",
                "ഞങ്ങൾ (njangaḷ)"
              ],
              [
                "ви",
                "നിങ്ങൾ (ningaḷ)"
              ],
              [
                "вони",
                "അവർ (avar)"
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
        "id": "verb-no-agreement",
        "title": "ക്രിയ മാറ്റമില്ല — A1",
        "emoji": "🔒",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від тамільської, каннада чи телугу, дієслово в малаялам не змінюється за особою, числом чи родом взагалі — одна й та сама форма для 'я йду', 'ти йдеш', 'вони йдуть'; лише час і спосіб відображені в дієслові.",
            "en": {
              "text": "Unlike Tamil, Kannada, or Telugu, the Malayalam verb never changes for person, number, or gender at all — the same form serves 'I go', 'you go', 'they go'; only tense and mood are reflected in the verb."
            }
          },
          {
            "type": "table",
            "title": "Одна форма для всіх осіб",
            "rows": [
              [
                "ഞാൻ പോകുന്നു / നീ പോകുന്നു / അവർ പോകുന്നു",
                "я йду / ти йдеш / вони йдуть — та сама форма поканунку"
              ]
            ],
            "en": {
              "title": "One Form for All Persons"
            }
          }
        ],
        "titleEn": "Verbs Show No Person/Number/Gender Agreement — A1"
      },
      {
        "id": "sanskrit-influence",
        "title": "സംസ്കൃത സ്വാധീനം — A2",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Малаялам увібрала санскритську лексику й навіть граматичні елементи значно глибше, ніж тамільська, яка свідомо чинила опір санскритизації, — тож формальна малаялам рясніє санскритськими складними словами.",
            "en": {
              "text": "Malayalam absorbed Sanskrit vocabulary and even grammatical elements far more deeply than Tamil, which deliberately resisted Sanskritization — so formal Malayalam is dense with Sanskrit compound words."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "വിദ്യാഭ്യാസം (освіта) — санскритське складне слово",
                "освіта, з санскриту"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Sanskrit Influence — A2"
      },
      {
        "id": "sandhi-rules",
        "title": "സന്ധി നിയമങ്ങൾ — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Коли два слова з'єднуються в мовленні чи на письмі, кінцевий і початковий звуки часто зливаються чи змінюються за складними правилами сандхі — те саме слово пишеться по-різному залежно від сусіда.",
            "en": {
              "text": "When two words join in speech or writing, the final and initial sounds often merge or change according to complex sandhi rules — the same word is spelled differently depending on its neighbor."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "മല + ഇറങ്ങി → മലയിറങ്ങി (гора + спустився → спустився з гори)",
                "приклад злиття сандхі"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Sandhi Rules — B1"
      },
      {
        "id": "negasion-i-preguntas",
        "title": "നിഷേധവും ചോദ്യങ്ങളും — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється часткою illa в кінці речення або суфіксом -atta/-a, доданим до дієслова; питання без питального слова позначаються суфіксом -о в кінці ключового слова.",
            "en": {
              "text": "Negation is formed with the particle illa at the end of the sentence or the suffix -atta/-a added to the verb; yes/no questions are marked with the suffix -о at the end of the key word."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "എനിക്ക് അറിയില്ല.",
                "Я не знаю."
              ],
              [
                "നീ വരുന്നുവോ?",
                "Ти приходиш?"
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
        "id": "present-tense-unnu",
        "title": "വർത്തമാനകാലം: -unnu — A1",
        "emoji": "☀️",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній час утворюється суфіксом -unnu, доданим до основи дієслова, — та сама форма для всіх осіб і чисел.",
            "en": {
              "text": "The present tense is formed with the suffix -unnu added to the verb stem — the same form for every person and number."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ഞാൻ പഠിക്കുന്നു.",
                "Я вчуся."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Tense: -unnu — A1"
      },
      {
        "id": "past-tense-i",
        "title": "ഭൂതകാലം: -i — A2",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий час утворюється суфіксом -i (з чергуванням приголосного залежно від кореня), доданим до основи, — знову одна форма на всі особи.",
            "en": {
              "text": "The past tense is formed with the suffix -i (with consonant alternation depending on the root) added to the stem — again one form for every person."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ഞാൻ പഠിച്ചു.",
                "Я вчився."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Past Tense: -i — A2"
      },
      {
        "id": "future-tense-um",
        "title": "ഭാവികാലം: -um — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється суфіксом -um, доданим до основи дієслова, — та сама неізменна форма для всіх осіб.",
            "en": {
              "text": "The future tense is formed with the suffix -um added to the verb stem — again the same invariant form for every person."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ഞാൻ പഠിക്കും.",
                "Я вчитимусь."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Future Tense: -um — A2"
      },
      {
        "id": "imperative-mood",
        "title": "കൽപ്പനാരൂപം — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб — гола основа дієслова для прямого, різкого наказу, або основа плюс -൱ (-oo) для ввічливішого прохання.",
            "en": {
              "text": "The imperative is the bare verb stem for a direct, blunt command, or the stem plus -oo for a more polite request."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "പഠിക്ക്!",
                "Вчися!"
              ],
              [
                "പഠിക്കൂ.",
                "Вчися, будь ласка."
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
        "id": "infinitive-aan",
        "title": "ഭാവരൂപം: -aan — A2",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "Форма на -aan вживається як інфінітив мети — 'щоб зробити' — після дієслів руху чи наміру.",
            "en": {
              "text": "The -aan form is used as a purpose infinitive — 'in order to do' — after verbs of motion or intent."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ഞാൻ പഠിക്കാൻ പോകുന്നു.",
                "Я йду вчитися."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Purpose Infinitive: -aan — A2"
      },
      {
        "id": "conditional-enkil",
        "title": "സോപാധികരൂപം: -enkil — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб утворюється суфіксом -enkil, доданим до дієслова в будь-якому часі, — 'якщо' вбудоване прямо в дієслівну форму, а не окреме слово-сполучник.",
            "en": {
              "text": "The conditional is formed with the suffix -enkil added to the verb in any tense — 'if' built right into the verb form, not a separate conjunction word."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "മഴ പെയ്യുന്നെങ്കിൽ, ഞാൻ വീട്ടിൽ ഇരിക്കും.",
                "Якщо йтиме дощ, я залишуся вдома."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional: -enkil — B1"
      },
      {
        "id": "habitual-aspect",
        "title": "ശീലരൂപം — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Звичну дію передають тим самим теперішнім часом на -unnu разом з прислівником on кшталт 'зазвичай', оскільки в дієслові немає окремої граматичної форми звички.",
            "en": {
              "text": "A habitual action is expressed with the same -unnu present tense together with an adverb like 'usually', since the verb has no dedicated grammatical form for habituality."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ഞാൻ സാധാരണ കാപ്പി കുടിക്കുന്നു.",
                "Я зазвичай п'ю каву."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Habitual Action — B1"
      },
      {
        "id": "perfect-aspect-irikkunnu",
        "title": "പൂർണ്ണരൂപം: -irikkunnu — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Перфект утворюється дієприкметником минулого часу плюс допоміжне irikkunnu ('перебувати') — наголос на теперішньому результаті завершеної дії.",
            "en": {
              "text": "The perfect is formed with the past participle plus the auxiliary irikkunnu ('to be situated') — emphasizing the present result of a completed action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ഞാൻ പഠിച്ചിരിക്കുന്നു.",
                "Я вже вивчив (і результат актуальний зараз)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Perfect: -irikkunnu — B1"
      },
      {
        "id": "progressive-aspect-kondirikkunnu",
        "title": "പുരോഗതിരൂപം: -kondirikkunnu — B1",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія в момент мовлення передається дієприслівником плюс допоміжне kondirikkunnu — точний аналог англійського '-ing'.",
            "en": {
              "text": "An action in progress at the moment of speaking is expressed with the converb plus the auxiliary kondirikkunnu — a close analog of English '-ing'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ഞാൻ പഠിച്ചുകൊണ്ടിരിക്കുന്നു.",
                "Я саме вчуся."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Progressive: -kondirikkunnu — B1"
      },
      {
        "id": "negative-existential-illa",
        "title": "നിഷേധം: Illa — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Слово illa в кінці речення заперечує дієслово незалежно від часу — та сама частка для минулого, теперішнього й майбутнього, оскільки саме дієслово взагалі не відмінюється.",
            "en": {
              "text": "The word illa at the end of the sentence negates the verb regardless of tense — the same particle for past, present, and future, since the verb itself doesn't inflect at all."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ഞാൻ പഠിക്കുന്നില്ല.",
                "Я не вчуся."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation with illa — A1"
      },
      {
        "id": "permissive-mood-aam",
        "title": "അനുവാദരൂപം: -aam — B1",
        "emoji": "☑️",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -aam, доданий до основи дієслова, виражає дозвіл чи можливість — 'можна зробити' — без окремого модального дієслова.",
            "en": {
              "text": "The suffix -aam, added to the verb stem, expresses permission or possibility — 'it's okay to do' — with no separate modal verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "നിങ്ങൾക്ക് പോകാം.",
                "Ви можете йти."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Permissive: -aam — B1"
      },
      {
        "id": "prohibitive-aruthu",
        "title": "വിലക്ക്: Aruthu — B1",
        "emoji": "🙅",
        "sections": [
          {
            "type": "intro",
            "text": "Заборона утворюється дієприслівником плюс словом aruthu ('не слід') — окрема конструкція, відмінна від простого заперечення illa.",
            "en": {
              "text": "A prohibition is formed with the converb plus the word aruthu ('must not') — a distinct construction from plain negation with illa."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "അവിടെ പോകരുത്.",
                "Туди не можна йти."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Prohibitive: aruthu — B1"
      },
      {
        "id": "optative-mood-atte",
        "title": "ആശംസാരൂപം: -atte — B2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Оптативний спосіб на -atte виражає побажання чи благословення — 'хай станеться' — уживаний у формальних побажаннях і молитвах.",
            "en": {
              "text": "The optative mood in -atte expresses a wish or blessing — 'may it happen' — used in formal well-wishes and prayers."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "നിങ്ങൾക്ക് നല്ലത് വരട്ടെ.",
                "Хай тобі буде добре."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Optative: -atte — B2"
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
        "id": "rational-irrational-gender",
        "title": "യുക്തി/അയുക്തി ലിംഗഭേദം — B1",
        "emoji": "⚥",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники поділяються на розумні (люди) й нерозумні (тварини, речі); розумні мають окремі займенники чоловічого й жіночого роду, а нерозумні — єдиний рід незалежно від статі.",
            "en": {
              "text": "Nouns split into rational (people) and non-rational (animals, things); rational ones have separate masculine and feminine pronouns, while non-rational ones share a single gender regardless of sex."
            }
          },
          {
            "type": "table",
            "title": "Приклади класів",
            "rows": [
              [
                "അവൻ/അവൾ (він/вона, розумний)",
                "тільки для людей"
              ],
              [
                "അത് (воно, нерозумний)",
                "тварини й речі, будь-якої статі"
              ]
            ],
            "en": {
              "title": "Class Examples"
            }
          }
        ],
        "titleEn": "Rational vs. Non-Rational Gender — B1"
      },
      {
        "id": "case-system-seven",
        "title": "ഏഴ് വിഭക്തികൾ — B1",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники відмінюються за сімома аглютинативними відмінками, кожен з яких додає окремий суфікс до основи іменника, а не змінює його закінчення нерегулярно.",
            "en": {
              "text": "Nouns decline through seven agglutinative cases, each adding a distinct suffix to the noun stem rather than irregularly changing the ending."
            }
          },
          {
            "type": "table",
            "title": "Приклади відмінків",
            "rows": [
              [
                "വീട് (дім, називний) → വീടിന്റെ (родовий)",
                "суфікс -inte"
              ],
              [
                "വീട്ടിൽ (місцевий, 'у домі')",
                "суфікс -il"
              ]
            ],
            "en": {
              "title": "Case Examples"
            }
          }
        ],
        "titleEn": "The Seven Cases — B1"
      },
      {
        "id": "plural-formation-kal",
        "title": "ബഹുവചനം: -kal — A1",
        "emoji": "➕",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється суфіксом -kal, доданим до основи іменника, — регулярне правило майже без винятків.",
            "en": {
              "text": "The plural is formed with the suffix -kal added to the noun stem — a regular rule with almost no exceptions."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "വീട് → വീടുകൾ",
                "дім → доми"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Plural: -kal — A1"
      },
      {
        "id": "postpositions-not-prepositions",
        "title": "പിൻവിളികൾ — A2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Просторові й часові відношення виражаються постпозиціями, що йдуть після іменника, а не прийменниками перед ним, як в українській.",
            "en": {
              "text": "Spatial and temporal relations are expressed with postpositions that follow the noun, rather than prepositions preceding it as in Ukrainian."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "വീടിന്റെ അടുത്ത്",
                "поряд з домом (буквально 'дому поряд')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Postpositions, Not Prepositions — A2"
      },
      {
        "id": "echo-word-reduplication",
        "title": "പ്രതിധ്വനി വാക്കുകൾ — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "'Ехо-слова' повторюють іменник зі зміненим першим звуком, додаючи значення 'і таке інше' — типова дравідська стратегія узагальнення без окремого слова.",
            "en": {
              "text": "'Echo words' repeat a noun with its initial sound changed, adding the meaning 'and such' — a typical Dravidian generalization strategy with no separate word."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ചായ കാപ്പി (чай-кава, тобто 'напої на кшталт чаю')",
                "ехо-слово узагальнює категорію"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Echo-Word Reduplication — B1"
      },
      {
        "id": "classifier-counting-words",
        "title": "എണ്ണൽ വാക്കുകൾ — B2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Лічба людей вимагає окремого класифікатора (per), відмінного від лічби предметів чи тварин, — особлива узгоджувальна одиниця саме для осіб.",
            "en": {
              "text": "Counting people requires a dedicated classifier (per), distinct from counting objects or animals — a special agreement unit specifically for persons."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "മൂന്ന് പേർ (три людини)",
                "класифікатор для людей"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Numeral Classifiers — B2"
      },
      {
        "id": "compound-verb-light-verb",
        "title": "സങ്കീർണ്ണ ക്രിയകൾ — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприслівник плюс допоміжне 'легке' дієслово утворює складене дієслово з уточненим відтінком значення — продуктивна система, що замінює багато окремих префіксів чи суфіксів.",
            "en": {
              "text": "A converb plus an auxiliary 'light' verb forms a compound verb with a refined shade of meaning — a productive system that replaces many separate prefixes or suffixes."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "എഴുതി വെച്ചു (написав + поклав → записав про запас)",
                "складене дієслово з уточненим значенням"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Compound (Light) Verbs — B1"
      },
      {
        "id": "question-words",
        "title": "ചോദ്യവാക്കുകൾ — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питальні слова ആര് (хто), എന്ത് (що), എവിടെ (де), എപ്പോൾ (коли) зазвичай стоять на тому самому місці, де було б слово, яке вони заміняють.",
            "en": {
              "text": "The question words ആര് (who), എന്ത് (what), എവിടെ (where), എപ്പോൾ (when) normally stand in the same position the replaced word would occupy."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "നീ എവിടെ പോകുന്നു?",
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
        "id": "relative-participle-strategy",
        "title": "ആപേക്ഷിക ഭൂതരൂപം — B1",
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
                "ഞാൻ വായിച്ച പുസ്തകം",
                "книга, яку я прочитав (буквально 'мною-прочитана книга')"
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
        "id": "comparison-ekkal",
        "title": "താരതമ്യം: -ekkal — A2",
        "emoji": "⚖️",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняння вищого ступеня утворюється суфіксом -ekkal ('ніж'), доданим до предмета порівняння, без зміни самого прикметника.",
            "en": {
              "text": "Comparison of superiority is formed with the suffix -ekkal ('than') added to the compared item, with no change to the adjective itself."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "അവൻ എന്നെക്കാൾ ഉയരമുള്ളവനാണ്.",
                "Він вищий за мене."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparison with -ekkal — A2"
      },
      {
        "id": "superlative-erravum",
        "title": "അത്യുന്നതരൂപം: Erravum — B1",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь додає слово erravum ('найбільше') перед прикметником.",
            "en": {
              "text": "The superlative adds the word erravum ('the most') before the adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ഏറ്റവും ഉയരമുള്ളവൻ",
                "найвищий"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Superlative with erravum — B1"
      },
      {
        "id": "demonstratives-ee-aa",
        "title": "സൂചക പദങ്ങൾ: Ee, Aa — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Вказівне ee ('цей') позначає близький предмет, aa ('той') — далекий, і обидва стоять перед іменником, незмінні за родом і числом.",
            "en": {
              "text": "The demonstrative ee ('this') marks a near item, aa ('that') a far one, and both stand before the noun, invariant for gender and number."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ഈ പുസ്തകം",
                "ця книга"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Demonstratives: ee, aa — A1"
      },
      {
        "id": "possessive-genitive-inte",
        "title": "സ്വത്വരൂപം: -inte — A2",
        "emoji": "🏠",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійність передається родовим відмінком на -inte/-nte, доданим прямо до іменника-власника, без окремого присвійного слова.",
            "en": {
              "text": "Possession is expressed with the genitive case in -inte/-nte, added directly to the possessor noun, with no separate possessive word."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "രാജുവിന്റെ പുസ്തകം",
                "книга Раджу"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Genitive Possession: -inte — A2"
      },
      {
        "id": "honorific-plural-pronoun-depth",
        "title": "ബഹുമാന സർവ്വനാമം: ആഴത്തിൽ — B1",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Ввічливе ningaḷ уживається не лише до однієї поважної особи, а й — у ще формальнішому регістрі — прикметники й дієприкметники, що стосуються цієї особи, теж можуть узгоджуватися з множинним трактуванням.",
            "en": {
              "text": "The polite ningaḷ is used not only for a single respected person, but — in an even more formal register — adjectives and participles relating to that person can also agree with the plural treatment."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "നിങ്ങൾ വരുന്നുണ്ടോ?",
                "Ви приходите? (до однієї поважної особи)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Honorific Plural Pronoun in Depth — B1"
      },
      {
        "id": "numerals-cardinal",
        "title": "അടിസ്ഥാന സംഖ്യകൾ — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Кількісні числівники мають власні малаяламські корені й узгоджуються з класифікатором для людей чи предметів.",
            "en": {
              "text": "Cardinal numbers have their own Malayalam roots and agree with the classifier for people or objects."
            }
          },
          {
            "type": "table",
            "title": "Числа",
            "rows": [
              [
                "ഒന്ന്, രണ്ട്, മൂന്ന്",
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
        "title": "ക്രമസംഖ്യകൾ: -aam — A2",
        "emoji": "🥇",
        "sections": [
          {
            "type": "intro",
            "text": "Порядкові числівники утворюються суфіксом -aam, доданим до кількісного числівника.",
            "en": {
              "text": "Ordinal numbers are formed with the suffix -aam added to the cardinal number."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "മൂന്നാം ദിവസം",
                "третій день"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ordinal Numbers: -aam — A2"
      },
      {
        "id": "word-order-sov",
        "title": "പദക്രമം: SOV — A1",
        "emoji": "↔️",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів — підмет-додаток-присудок, з дієсловом завжди в самому кінці речення.",
            "en": {
              "text": "The basic word order is subject-object-verb, with the verb always coming at the very end of the sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ഞാൻ ചോറ് കഴിക്കുന്നു.",
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
        "title": "വിശേഷണം മാറ്റമില്ല — A2",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники, як і дієслова, не змінюються ні за родом, ні за числом, ні за відмінком — одна незмінна форма перед будь-яким іменником.",
            "en": {
              "text": "Adjectives, like verbs, don't change for gender, number, or case at all — one invariant form before any noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "നല്ല വീട് / നല്ല വീടുകൾ",
                "хороший дім / хороші доми (той самий прикметник)"
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
        "id": "compound-noun-formation",
        "title": "സംയുക്തനാമങ്ങൾ — B1",
        "emoji": "🧱",
        "sections": [
          {
            "type": "intro",
            "text": "Складні іменники поєднують дві основи в одне ціле, часто з правилами сандхі на межі поєднання, характерними для санскритських складних слів.",
            "en": {
              "text": "Compound nouns join two stems into one unit, often with sandhi rules at the boundary characteristic of Sanskrit compounds."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "പുസ്തകശാല (книгарня, буквально 'книга-приміщення')",
                "приклад складного слова"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Compound Noun Formation — B1"
      },
      {
        "id": "diglossia-spoken-literary",
        "title": "സംസാരഭാഷയും സാഹിത്യഭാഷയും — B2",
        "emoji": "📚",
        "sections": [
          {
            "type": "intro",
            "text": "Письмова, літературна малаялам суттєво відрізняється від розмовної лексикою й навіть частиною граматичних закінчень — виражена диглосія, що вимагає окремого засвоєння обох регістрів.",
            "en": {
              "text": "Written, literary Malayalam differs substantially from the spoken language in vocabulary and even some grammatical endings — a pronounced diglossia requiring separate mastery of both registers."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Літературна форма часто довша й консервативніша за розмовний варіант того самого слова.",
                "диглосія письмової й розмовної мови"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Spoken vs. Literary Diglossia — B2"
      },
      {
        "id": "negative-copula-alla-vs-illa",
        "title": "Alla vs Illa: രണ്ട് നിഷേധങ്ങൾ — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Alla заперечує іменний присудок ('це не X'), тоді як illa заперечує дієслово чи існування ('немає', 'не роблю') — два різні заперечення для двох різних граматичних ролей.",
            "en": {
              "text": "Alla negates a nominal predicate ('this is not X'), while illa negates a verb or existence ('there isn't', 'don't do') — two different negations for two different grammatical roles."
            }
          },
          {
            "type": "table",
            "title": "Alla проти Illa",
            "rows": [
              [
                "ഇത് പുസ്തകമല്ല. (alla, іменний присудок)",
                "Це не книга."
              ],
              [
                "എനിക്ക് പുസ്തകമില്ല. (illa, наявність)",
                "У мене немає книги."
              ]
            ],
            "en": {
              "title": "Alla vs. Illa"
            }
          }
        ],
        "titleEn": "Alla vs. Illa: Two Negations — B1"
      },
      {
        "id": "interrogative-particle-o",
        "title": "ചോദ്യചിഹ്നം: -о — A2",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання без питального слова позначається суфіксом -о, доданим до останнього слова речення, — граматичний, а не лише інтонаційний маркер питання.",
            "en": {
              "text": "A yes/no question is marked with the suffix -о added to the last word of the sentence — a grammatical, not merely intonational, question marker."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "നീ വരുമോ?",
                "Ти прийдеш?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Question Particle: -о — A2"
      },
      {
        "id": "vocative-forms",
        "title": "സംബോധനാരൂപം — B1",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Звертання часто вкорочує кінцеву голосну імені чи додає особливу вокативну частку, відмінну від звичайної форми називного відмінка.",
            "en": {
              "text": "Direct address often shortens the final vowel of a name or adds a special vocative particle, distinct from the ordinary nominative form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "രാജൂ! (звертання, вкорочене від Raju)",
                "Раджу! (кличний)"
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
        "id": "reflexive-pronoun-swantham-thaan",
        "title": "ആത്മീയ സർവ്വനാമം: താൻ — A2",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотний займенник thaan ('сам собою') незалежний від особи й числа підмета й часто підсилюється словом swantham ('власний') для наголосу.",
            "en": {
              "text": "The reflexive pronoun thaan ('oneself') is independent of the subject's person and number and is often reinforced with swantham ('own') for emphasis."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "അവൻ തന്നെ കണ്ടു.",
                "Він побачив самого себе."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reflexive Pronoun: thaan — A2"
      },
      {
        "id": "adverbial-participle-verbal-noun",
        "title": "ക്രിയാവിശേഷണരൂപം — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприслівник (converb) з'єднує послідовні дії в реченні без окремого сполучника 'і' — ланцюжок дій, стиснений в одну граматичну структуру.",
            "en": {
              "text": "The converb links sequential actions in a sentence with no separate conjunction 'and' — a chain of actions compressed into one grammatical structure."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "അവൻ എഴുന്നേറ്റ് പുറത്തുപോയി.",
                "Він встав і вийшов (без 'і', через дієприслівник)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Converb Chaining — B2"
      },
      {
        "id": "compound-verb-depth-completion",
        "title": "സങ്കീർണ്ണ ക്രിയ: പൂർത്തീകരണം — B2",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Допоміжне дієслово veykkuka ('класти'), додане до дієприслівника, підкреслює остаточність і завершеність дії, зроблену свідомо, наперед — не просто 'зробив', а 'зробив і залишив так'.",
            "en": {
              "text": "The auxiliary verb veykkuka ('to place'), added to the converb, emphasizes the finality and deliberate completion of an action — not just 'did' but 'did it and left it that way'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ഞാൻ എഴുതിവെച്ചു.",
                "Я записав про запас (свідомо, заздалегідь)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Light Verb: Deliberate Completion — B2"
      },
      {
        "id": "compound-verb-benefactive",
        "title": "സങ്കീർണ്ണ ക്രിയ: ഉപകാരം — B2",
        "emoji": "🎁",
        "sections": [
          {
            "type": "intro",
            "text": "Допоміжне дієслово kodukkuka ('давати'), додане до дієприслівника, позначає, що дію виконано на користь когось іншого.",
            "en": {
              "text": "The auxiliary verb kodukkuka ('to give'), added to the converb, marks that the action was performed for someone else's benefit."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ഞാൻ അവനു പുസ്തകം വാങ്ങിക്കൊടുത്തു.",
                "Я купив йому книгу (на його користь)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Light Verb: Benefactive — B2"
      },
      {
        "id": "compound-verb-ability-regret",
        "title": "സങ്കീർണ്ണ ക്രിയ: കഴിവും ഖേദവും — B2",
        "emoji": "😔",
        "sections": [
          {
            "type": "intro",
            "text": "Допоміжні дієслова pattuka ('вдаватися') й poyi ('піти', з відтінком жалю) додають до дієприслівника значення здатності чи, навпаки, шкодування про здійснене.",
            "en": {
              "text": "The auxiliary verbs pattuka ('to manage') and poyi ('to go', with a regretful shade) add a meaning of ability or, conversely, regret about what was done."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ഞാൻ അബദ്ധത്തിൽ പറഞ്ഞുപോയി.",
                "Я випадково це бовкнув (з жалем)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Light Verb: Ability/Regret — B2"
      },
      {
        "id": "echo-word-function-depth",
        "title": "പ്രതിധ്വനി വാക്കുകൾ: ആഴത്തിൽ — B2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Крім узагальнення категорії, ехо-слова можуть також натякати на невизначеність чи легку зневагу, — той самий прийом, різні відтінки залежно від контексту й тону.",
            "en": {
              "text": "Besides generalizing a category, echo words can also hint at vagueness or mild dismissiveness — the same device, different shades depending on context and tone."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "പുസ്തകം-കൂസ്തകം ഒന്നും വേണ്ട.",
                "Книжки-мнижки якісь мені не треба (зневажливий відтінок)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Echo Words: Additional Functions — B2"
      },
      {
        "id": "honorific-verb-forms-religious",
        "title": "ബഹുമാനരൂപങ്ങൾ: ദേവതകൾക്കും മൂപ്പർക്കും — B2",
        "emoji": "🛕",
        "sections": [
          {
            "type": "intro",
            "text": "У формальному й релігійному регістрі щодо божеств чи старших уживають окремі шанобливі дієслова й лексику, відмінні від буденних відповідників того самого значення.",
            "en": {
              "text": "In the formal and religious register, regarding deities or elders, separate honorific verbs and vocabulary are used, distinct from the everyday equivalents of the same meaning."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "എഴുന്നള്ളുക (шанобливе 'йти' щодо божества, не буденне 'pokuka')",
                "шаноблива лексика"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Honorific Verbs for Deities and Elders — B2"
      },
      {
        "id": "script-conjunct-consonants",
        "title": "ലിപി: കൂട്ടക്ഷരങ്ങൾ — B2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Малаяламський алфавіт має надзвичайно велику кількість лігатур-конюнктів, успадкованих для точного відтворення санскритських консонантних кластерів, — один з найбагатших набором символів серед індійських письмівок.",
            "en": {
              "text": "The Malayalam alphabet has an unusually large number of conjunct-consonant ligatures, inherited to precisely render Sanskrit consonant clusters — one of the richest character sets among Indian scripts."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ക്ഷ (лігатура ka+sha, окремий знак для санскритського кластера)",
                "приклад конюнкта"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Script: Conjunct Consonants — B2"
      },
      {
        "id": "old-malayalam-vs-modern-diglossia",
        "title": "പഴയ മലയാളവും ആധുനിക മലയാളവും — B2",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Класичні літературні тексти, як-от маниправаламські твори, настільки насичені санскритом і архаїчною граматикою, що для їхнього читання сучасним мовцям потрібна спеціальна підготовка, — розрив глибший, ніж просто діалектна відмінність.",
            "en": {
              "text": "Classical literary texts, such as Manipravalam works, are so dense with Sanskrit and archaic grammar that modern speakers need special training to read them — a gap deeper than a simple dialect difference."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Класичні тексти вимагають окремого вивчення граматики, відмінної від сучасної мови.",
                "історичний розрив у мові"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Old vs. Modern Malayalam — B2"
      },
      {
        "id": "matrilineal-kinship-vocabulary",
        "title": "മരുമക്കത്തായ ബന്ധുത്വപദങ്ങൾ — B2",
        "emoji": "👪",
        "sections": [
          {
            "type": "intro",
            "text": "Історична матрилінійна система спадкування наірів (marumakkathayam) залишила слід у термінах спорідненості, де роль дядька по материнській лінії граматично й культурно виділена окремо, відмінно від патрилінійних мов.",
            "en": {
              "text": "The historical matrilineal inheritance system of the Nair community (marumakkathayam) left its mark on kinship terms, where the maternal uncle's role is grammatically and culturally marked separately, unlike in patrilineal languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "അമ്മാവൻ (дядько по материнській лінії, з особливим соціальним статусом)",
                "матрилінійна спорідненість"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Matrilineal Kinship Vocabulary — B2"
      },
      {
        "id": "arabic-loanwords-trade",
        "title": "അറബി കടംവാക്കുകൾ: വ്യാപാരം — B1",
        "emoji": "🕌",
        "sections": [
          {
            "type": "intro",
            "text": "Століття морської торгівлі Кералою з арабським світом залишили окремий шар арабських запозичень у релігійній і торговій лексиці, — цей шар відмінний від санскритського й характерний саме для Керали.",
            "en": {
              "text": "Centuries of Kerala's maritime trade with the Arab world left a distinct layer of Arabic loanwords in religious and commercial vocabulary — a layer separate from the Sanskrit one and characteristic specifically of Kerala."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "കിതാബ് (книга, релігійна, з арабської kitab)",
                "арабське запозичення"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Arabic Loanwords from Trade — B1"
      },
      {
        "id": "portuguese-loanwords-colonial",
        "title": "പോർച്ചുഗീസ് കടംവാക്കുകൾ — B1",
        "emoji": "⛵",
        "sections": [
          {
            "type": "intro",
            "text": "Ранній колоніальний контакт з Португалією XVI століття залишив свій шар запозичень у лексиці меблів, релігії та побуту, окремий від пізніших англійських запозичень.",
            "en": {
              "text": "Early 16th-century colonial contact with Portugal left its own loanword layer in furniture, religion, and household vocabulary, separate from later English borrowings."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "മേശ (стіл) — з португальської mesa",
                "португальське запозичення"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Portuguese Loanwords from Colonial Contact — B1"
      },
      {
        "id": "code-switching-english-urban",
        "title": "ഇംഗ്ലീഷ്-മലയാളം കൂടിക്കലരൽ — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "У міському й освіченому мовленні типове перемикання кодів усередині одного речення — граматичний каркас малаяламський, а частина лексики чи цілі фрази вставляються з англійської без адаптації.",
            "en": {
              "text": "Urban, educated speech typically code-switches within a single sentence — the grammatical frame is Malayalam, while chunks of vocabulary or whole phrases are inserted from English without adaptation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ഞാൻ ഓഫീസിൽ ആണ്.",
                "Я в офісі (English office вставлене напряму)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "English-Malayalam Code-Switching — B2"
      },
      {
        "id": "manglish-transliteration-practice",
        "title": "മാംഗ്ലീഷ്: ലാറ്റിൻ ലിപ്യന്തരണം — B2",
        "emoji": "📱",
        "sections": [
          {
            "type": "intro",
            "text": "У неформальному онлайн-листуванні малаялам часто записують латинською абеткою ('мангліш'), передаючи звучання наближено, без стандартизованих правил транслітерації.",
            "en": {
              "text": "In informal online messaging, Malayalam is often written in the Latin alphabet ('Manglish'), approximating the sound with no standardized transliteration rules."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "'Njan varunnu' замість ഞാൻ വരുന്നു у неформальному листуванні",
                "латинська транслітерація"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Manglish: Latin-Script Transliteration — B2"
      },
      {
        "id": "malabar-travancore-dialect-variation",
        "title": "മലബാർ, തിരുവിതാംകൂർ ഭാഷാഭേദങ്ങൾ — B2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Північна говірка Малабару й південна говірка колишньої Траванкур-Кочінської держави розходяться в лексиці й вимові настільки, що носії різних регіонів іноді впізнають регіон співрозмовника за першими словами.",
            "en": {
              "text": "The northern Malabar dialect and the southern dialect of the former Travancore-Cochin state diverge in vocabulary and pronunciation enough that speakers from different regions can sometimes identify each other's origin from the first few words."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Північна й південна говірки різняться навіть у побутовій лексиці.",
                "регіональна діалектна варіація"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Malabar and Travancore Dialect Variation — B2"
      },
      {
        "id": "politeness-lexical-not-verbal",
        "title": "മര്യാദ: പദനിഷ്ഠം, ക്രിയാനിഷ്ഠമല്ല — B2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Оскільки саме дієслово не відмінюється за особою, ввічливість передається виключно вибором займенника й лексики, а не окремим дієслівним закінченням, — прямий наслідок відсутності узгодження в дієслові.",
            "en": {
              "text": "Since the verb itself doesn't inflect for person, politeness is conveyed entirely through pronoun and vocabulary choice, not through a dedicated verb ending — a direct consequence of the lack of verb agreement."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Той самий дієслівний вигляд обслуговує і ввічливе, і буденне звертання — різниться лише займенник.",
                "ввічливість без дієслівного маркування"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Politeness Is Lexical, Not Verbal — B2"
      },
      {
        "id": "causative-suffix-ikk-app",
        "title": "പ്രേരകരൂപം: -ikk-/-app- — B2",
        "emoji": "⚡",
        "sections": [
          {
            "type": "intro",
            "text": "Каузативні суфікси -ikk- чи -app-, вставлені перед закінченням дієслова, додають значення 'змушувати робити' — граматично вбудована причиновість без окремого допоміжного дієслова.",
            "en": {
              "text": "The causative suffixes -ikk- or -app-, inserted before the verb ending, add the meaning 'to make someone do' — grammatically built-in causation with no separate auxiliary verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ഇരിക്കുക (сидіти) → ഇരുത്തുക (садити когось)",
                "каузативний суфікс"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Causative Suffixes: -ikk-/-app- — B2"
      },
      {
        "id": "passive-like-appeduka",
        "title": "നിഷ്ക്രിയരൂപം: -appeduka — B2",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "У малаяламі немає справжнього пасивного стану — натомість конструкція з -appeduka ('зазнавати') позначає, що предмет зазнав дії, з наголосом на постраждалому, а не на виконавці.",
            "en": {
              "text": "Malayalam has no true passive voice — instead the -appeduka ('to undergo') construction marks that the item underwent an action, with emphasis on the affected party, not the doer."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "വീട് നശിപ്പിക്കപ്പെട്ടു.",
                "Дім було зруйновано (зазнав руйнування)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Passive-Like Construction: -appeduka — B2"
      },
      {
        "id": "converb-absolutive-chaining-depth",
        "title": "ക്രിയാവിശേഷണരൂപം: ആഴത്തിൽ — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Довгий ланцюжок дієприслівників може описувати цілу послідовність дій в одному реченні, і лише останнє дієслово в ланцюжку несе граматичний час, — усі попередні дієприслівники часово нейтральні.",
            "en": {
              "text": "A long chain of converbs can describe an entire sequence of actions in one sentence, and only the last verb in the chain carries grammatical tense — all the preceding converbs are tense-neutral."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "അവൻ എഴുന്നേറ്റ്, കുളിച്ച്, ഭക്ഷണം കഴിച്ച് ജോലിക്ക് പോയി.",
                "Він встав, скупався, поїв і пішов на роботу (лише останнє дієслово має час)."
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
        "id": "emphatic-particle-thanne",
        "title": "ഊന്നൽ പദം: Thanne — B1",
        "emoji": "💯",
        "sections": [
          {
            "type": "intro",
            "text": "Частка thanne ('саме, дійсно'), додана після будь-якого слова, підсилює його значення чи виключає альтернативи, — 'саме він, а не хтось інший'.",
            "en": {
              "text": "The particle thanne ('exactly, indeed'), added after any word, intensifies its meaning or rules out alternatives — 'him specifically, not someone else'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "അവൻ തന്നെയാണ് വന്നത്.",
                "Саме він і прийшов."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Emphatic Particle: thanne — B1"
      },
      {
        "id": "numeral-classifier-people-vs-objects-depth",
        "title": "എണ്ണൽ: ആളുകളും വസ്തുക്കളും — B2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Класифікатор per для людей категорично не можна вжити для лічби предметів чи тварин, і навпаки, — вибір неправильного класифікатора звучить як явна граматична помилка, а не стилістична незручність.",
            "en": {
              "text": "The classifier per for people categorically cannot be used to count objects or animals, and vice versa — choosing the wrong classifier sounds like an outright grammatical error, not a stylistic awkwardness."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "മൂന്ന് പേർ (три людини) vs മൂന്ന് പുസ്തകം (три книги, без per)",
                "класифікатор для людей проти лічби без нього"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Classifiers: People vs. Objects — B2"
      },
      {
        "id": "relative-participle-tense-marking",
        "title": "ആപേക്ഷികരൂപം: കാലഭേദം — B2",
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
                "വായിക്കുന്ന പുസ്തകം (теп., 'книга, яку читаю')",
                "വായിച്ച പുസ്തകം (мин., 'книга, яку прочитав')"
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
        "id": "verbal-noun-formation",
        "title": "ക്രിയാനാമം: -al — B2",
        "emoji": "📘",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -al перетворює дієслово на абстрактний іменник, що позначає саму дію, — паралель до українського '-ння'.",
            "en": {
              "text": "The suffix -al turns a verb into an abstract noun denoting the action itself — a parallel to the Ukrainian '-ing/-tion' nominalization."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "പഠിക്കുക (вчитися) → പഠനം (навчання)",
                "дієслово → абстрактний іменник"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Verbal Noun Formation: -al — B2"
      },
      {
        "id": "kerala-script-reform-1970s",
        "title": "ലിപി പരിഷ്കരണം: 1970-കൾ — B2",
        "emoji": "🖨️",
        "sections": [
          {
            "type": "intro",
            "text": "Реформа письма 1970-х років спростила частину конюнктних лігатур для потреб друку й, пізніше, комп'ютерного набору, — компроміс між традиційним видом і практичною зручністю.",
            "en": {
              "text": "A 1970s script reform simplified some of the conjunct ligatures for printing and, later, computer typesetting needs — a compromise between traditional appearance and practical convenience."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Спрощені форми лігатур увійшли в стандартний друкований шрифт після реформи.",
                "спрощення письма для друку"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The 1970s Script Reform — B2"
      },
      {
        "id": "loanword-adaptation-english-modern",
        "title": "ആധുനിക ഇംഗ്ലീഷ് കടംവാക്കുകൾ — B1",
        "emoji": "🔧",
        "sections": [
          {
            "type": "intro",
            "text": "Сучасні англійські запозичення адаптуються до малаяламської морфології, отримуючи ті самі відмінкові суфікси й класифікатори, що й питомі слова.",
            "en": {
              "text": "Modern English loanwords are adapted to Malayalam morphology, receiving the same case suffixes and classifiers as native words."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "കമ്പ്യൂട്ടറിന്റെ (родовий відмінок від 'комп'ютер', з малаяламським суфіксом)",
                "англійське запозичення з малаяламською морфологією"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Modern English Loanword Adaptation — B1"
      },
      {
        "id": "fixed-idiomatic-expressions",
        "title": "ശൈലികൾ — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Численні застиглі ідіоми вживаються цілими блоками, з переносним значенням, не виведеним з буквального перекладу окремих слів.",
            "en": {
              "text": "Numerous fixed idioms are used as whole blocks, with a figurative meaning not derived from the literal translation of the individual words."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "തലയിൽ ആകാശം ഇടിഞ്ഞു വീണു. (буквально 'небо впало на голову' → приголомшений)",
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
        "title": "അപവാദ ക്രിയകൾ — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька частовживаних дієслів (varuka 'приходити', kaanuka 'бачити') мають форми минулого часу, що не виводяться регулярно за звичайним правилом -i.",
            "en": {
              "text": "A few common verbs (varuka 'to come', kaanuka 'to see') have past-tense forms that can't be regularly derived by the ordinary -i rule."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "വന്നു (не 'варичи', нерегулярна основа)",
                "нерегулярна форма минулого часу varuka"
              ]
            ]
          }
        ],
        "titleEn": "Irregular Verbs — B1"
      },
      {
        "id": "irregular-plural-forms",
        "title": "അപവാദ ബഹുവചനം — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька частовживаних іменників мають нерегулярну форму множини, яку слід запам'ятовувати окремо, поза загальним правилом на -kal.",
            "en": {
              "text": "A few common nouns have an irregular plural form that must be memorized separately, outside the general -kal rule."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "മരം → മരങ്ങൾ (не за очікуваним зразком)",
                "нерегулярна множина"
              ]
            ]
          }
        ],
        "titleEn": "Irregular Plurals — B1"
      },
      {
        "id": "fixed-proverbs-archaic-forms",
        "title": "പഴഞ്ചൊല്ലുകളിലെ പഴയ രൂപങ്ങൾ — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Прислів'я зберігають архаїчну граматичну структуру й лексику, уже втрачену в живій мові, і вживаються цілими блоками без граматичного розбору.",
            "en": {
              "text": "Proverbs preserve archaic grammatical structure and vocabulary already lost from the living language, and are used as whole blocks with no grammatical analysis."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "മൂക്കില്ലാ രാജ്യത്ത് മുറിമൂക്കൻ രാജാവ്.",
                "У країні без носів кривоносий — цар (застигла приказка з архаїчними формами)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Fixed Archaic Forms in Proverbs — B2"
      }
    ]
  }
];
