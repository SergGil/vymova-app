// Vymova — data/grammar-data/grammar_qya.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_QYA: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Nótesse Hínala — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У квеньї, мові, створеній Дж. Р. Р. Толкіном, займенники здебільшого не окремі слова, а суфікси, які додають до дієслова: наприклад, \"-nyë\" означає \"я\", а \"-lyë\" — \"ти\".",
            "en": {
              "text": "In Quenya, one of J. R. R. Tolkien's Elvish languages, pronouns are mostly not separate words but verb suffixes: \"-nyë\" means \"I\", \"-lyë\" means \"you\"."
            }
          },
          {
            "type": "table",
            "title": "Займенникові суфікси дієслова",
            "rows": [
              [
                "я",
                "-nyë"
              ],
              [
                "ти",
                "-lyë"
              ],
              [
                "він / вона / воно",
                "-s"
              ],
              [
                "ми",
                "-lmë"
              ],
              [
                "ви",
                "-llë"
              ],
              [
                "вони",
                "-ntë"
              ]
            ],
            "en": {
              "title": "Verb Pronominal Suffixes"
            }
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      },
      {
        "id": "dual-number",
        "title": "Tyuvë Nótë — B1",
        "emoji": "👥",
        "sections": [
          {
            "type": "intro",
            "text": "Окрім однини й множини, квенья має окреме подвійне число для природних пар (очі, руки, двоє людей, що діють разом) — суфікс -u або -t, відмінний від звичайного множинного -r/-i.",
            "en": {
              "text": "Besides singular and plural, Quenya has a separate dual number for natural pairs (eyes, hands, two people acting together) — the suffix -u or -t, distinct from the ordinary plural -r/-i."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ciryat (два кораблі, разом)",
                "two ships (a pair, acting together)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Dual Number — B1"
      },
      {
        "id": "definite-article-i",
        "title": "I: Ëartaina Nyérë — A2",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Означений артикль i ('той/ця') ставиться перед іменником; неозначеного артикля в квеньї немає взагалі — іменник без артикля вже трактується як неозначений.",
            "en": {
              "text": "The definite article i ('the') precedes the noun; there is no indefinite article at all in Quenya — a bare noun is already understood as indefinite."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "i elda",
                "цей ельф (означено)"
              ],
              [
                "elda",
                "якийсь ельф (неозначено)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Definite Article: i — A2"
      },
      {
        "id": "verb-classes",
        "title": "Colindor: A-Stem yo Basic — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслова квеньї поділяються на два основні класи відмінювання: 'основні' (кореневі, без тематичного голосного) і 'А-основи' (з тематичним -a-), кожен зі своїм набором закінчень.",
            "en": {
              "text": "Quenya verbs fall into two main conjugation classes: 'basic' verbs (root verbs, with no thematic vowel) and 'A-stem' verbs (with a thematic -a-), each with its own set of endings."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mat- (їсти, основний)",
                "mat- (to eat, basic class)"
              ],
              [
                "lanta- (падати, А-основа)",
                "lanta- (to fall, A-stem class)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Verb Classes — B1"
      },
      {
        "id": "zero-copula-present",
        "title": "Úrima Ná: Sí Lúmë — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "У теперішньому часі дієслово ná ('бути') часто зовсім опускається: підмет і присудок просто стоять поруч без зв'язки, як у 'Elda vanya' ('Ельф [є] гарний').",
            "en": {
              "text": "In the present tense, the verb ná ('to be') is often omitted entirely: the subject and predicate simply stand side by side with no copula, as in 'Elda vanya' ('The Elf [is] beautiful')."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Elda vanya.",
                "Ельф [є] гарний."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Zero Copula in the Present — A2"
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
        "id": "aorist-tense",
        "title": "I Ilyarembë Lúmë — B1",
        "emoji": "♾️",
        "sections": [
          {
            "type": "intro",
            "text": "Аорист (позачасова форма) виражає загальні істини й звичну дію без прив'язки до конкретного моменту; утворюється голим коренем плюс особовим закінченням.",
            "en": {
              "text": "The aorist (timeless form) expresses general truths and habitual action with no tie to a specific moment; formed with the bare root plus a person ending."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ciryar síla.",
                "Кораблі сяють (взагалі, завжди)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Aorist (Timeless) Tense — B1"
      },
      {
        "id": "present-tense",
        "title": "I Sí Lúmë — A2",
        "emoji": "☀️",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній тривалий час утворюється подовженням основного голосного основи, підкреслюючи дію, що триває саме зараз, на відміну від безчасового аориста.",
            "en": {
              "text": "The present continuous is formed by lengthening the stem's core vowel, emphasizing an action happening right now, in contrast to the timeless aorist."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Cirya síla.",
                "Корабель сяє (саме зараз)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Tense — A2"
      },
      {
        "id": "past-tense",
        "title": "I Yára Lúmë — B1",
        "emoji": "⏪",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий час утворюється суфіксом -në для 'сильних' дієслів і -në/-ne з чергуванням кореня для 'слабких' дієслів, залежно від фонетичної форми основи.",
            "en": {
              "text": "The past tense is formed with the suffix -në for 'strong' verbs and with -në plus stem alternation for 'weak' verbs, depending on the phonetic shape of the stem."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "sílanë",
                "сяяв(-ла)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Past Tense — B1"
      },
      {
        "id": "perfect-tense",
        "title": "I Perfecta Lúmë — B2",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Перфект утворюється редуплікацією першого приголосного кореня плюс суфіксом -ië, наголошуючи на теперішній актуальності завершеної дії.",
            "en": {
              "text": "The perfect is formed by reduplicating the root's initial consonant plus the suffix -ië, emphasizing the present relevance of a completed action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "sisílië",
                "вже сяяв (і це важливо зараз)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Perfect Tense — B2"
      },
      {
        "id": "pluperfect-tense",
        "title": "I Yára Perfecta — B2",
        "emoji": "⏮️",
        "sections": [
          {
            "type": "intro",
            "text": "Плюсквамперфект додає до редуплікованої перфектної основи ще один суфікс минулого часу -në, позначаючи дію, завершену до іншої минулої події.",
            "en": {
              "text": "The pluperfect adds a further past-tense suffix -në to the reduplicated perfect stem, marking an action completed before another past event."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "sisílienë",
                "вже був посяяв (до того)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Pluperfect Tense — B2"
      },
      {
        "id": "future-tense",
        "title": "I Tuluva Lúmë — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється суфіксом -uva, доданим до основи дієслова, незалежно від класу відмінювання.",
            "en": {
              "text": "The future tense is formed with the suffix -uva added to the verb stem, regardless of conjugation class."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "sílauva",
                "сяятиме"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Future Tense: -uva — A2"
      },
      {
        "id": "imperative-mood",
        "title": "I Canta Lúmë — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб утворюється часткою á перед голим коренем дієслова, без особового закінчення.",
            "en": {
              "text": "The imperative is formed with the particle á before the bare verb root, with no person ending."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Á síla!",
                "Сяй!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Imperative: á — A2"
      },
      {
        "id": "negative-imperative",
        "title": "I Ú-Canta Lúmë — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечний наказовий спосіб уживає окрему частку áva ('не смій') замість звичайного заперечення ú-, вказуючи на заборону.",
            "en": {
              "text": "The negative imperative uses the dedicated particle áva ('don't') instead of the ordinary negative prefix ú-, marking a prohibition."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Áva quetë!",
                "Не говори!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negative Imperative: áva — B1"
      },
      {
        "id": "optative-mood",
        "title": "I Merilya Lúmë — B2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Бажальний спосіб утворюється часткою nai ('нехай буде так') перед реченням у майбутньому часі, вживаною для благословень і побажань.",
            "en": {
              "text": "The optative is formed with the particle nai ('may it be so') before a future-tense clause, used for blessings and wishes."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nai hiruvalyë Valimar.",
                "Хай знайдеш ти Валімар."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Optative: nai — B2"
      },
      {
        "id": "active-participle",
        "title": "I Colila Nyérë — B1",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Активний дієприкметник утворюється суфіксом -la, доданим до основи, і функціонує і як прикметник, і в тривалих зворотах.",
            "en": {
              "text": "The active participle is formed with the suffix -la added to the stem, functioning both as an adjective and in continuous constructions."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "sílala",
                "сяючий"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Active Participle: -la — B1"
      },
      {
        "id": "passive-participle",
        "title": "I Camnala Nyérë — B1",
        "emoji": "📥",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний дієприкметник утворюється суфіксом -ina, доданим до основи, і позначає стан, спричинений завершеною дією.",
            "en": {
              "text": "The passive participle is formed with the suffix -ina added to the stem, denoting a state resulting from a completed action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mátina",
                "з'їдений"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Passive Participle: -ina — B1"
      },
      {
        "id": "gerund-form",
        "title": "I Ië-Nyérë — B1",
        "emoji": "📖",
        "sections": [
          {
            "type": "intro",
            "text": "Віддієслівний іменник (герундій) утворюється суфіксом -ië, доданим до основи, і трактується як звичайний іменник, здатний відмінюватися за відмінками.",
            "en": {
              "text": "The verbal noun (gerund) is formed with the suffix -ië added to the stem, and is treated as an ordinary noun capable of taking case endings."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mahtië",
                "битва (від mahta- 'битися')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Gerund: -ië — B1"
      },
      {
        "id": "infinitive-form",
        "title": "I Aiquenta Nyérë — A2",
        "emoji": "📝",
        "sections": [
          {
            "type": "intro",
            "text": "Інфінітив утворюється додаванням -ita до кореня дієслова й уживається після модальних дієслів, подібно до 'to' в англійській.",
            "en": {
              "text": "The infinitive is formed by adding -ita to the verb root and is used after modal verbs, similar to English 'to'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "matita",
                "їсти (інфінітив)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Infinitive: -ita — A2"
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
        "id": "noun-cases-overview",
        "title": "I Cantar: Nea Yando — B2",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Квенья має близько десяти відмінків (номінатив, аккузатив, генітив, посесив, датив, локатив, алатив, аблатив, інструменталь, респектив) — систему, натхненну фінською мовою, яку Толкін особливо цінував.",
            "en": {
              "text": "Quenya has around ten grammatical cases (nominative, accusative, genitive, possessive, dative, locative, allative, ablative, instrumental, respective) — a system inspired by Finnish, which Tolkien particularly admired."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "elda (номінатив)",
                "ельф (початкова форма)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Case System Overview — B2"
      },
      {
        "id": "nominative-accusative-syncretism",
        "title": "Nótima yo Cámima: Imya Colma — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "У класичній квеньї номінатив і аккузатив мають однакову форму в однині: роль підмета чи прямого додатка визначається лише порядком слів і контекстом.",
            "en": {
              "text": "In Classical Quenya, the nominative and accusative share the same form in the singular: the role of subject or direct object is determined by word order and context alone."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Elda cenë cirya.",
                "Ельф бачить корабель. (обидва — базова форма)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Nominative-Accusative Syncretism — B1"
      },
      {
        "id": "genitive-case",
        "title": "I Nostacolma: -o — A2",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "Родовий відмінок на -o позначає походження чи належність до групи (тип 'з когось/чогось'), приєднуючись безпосередньо до іменника.",
            "en": {
              "text": "The genitive case with -o marks origin or belonging to a group (roughly 'of'), attaching directly to the noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Eldo",
                "ельфа (родовий, походження)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Genitive Case: -o — A2"
      },
      {
        "id": "possessive-case",
        "title": "I Aracolma: -va — A2",
        "emoji": "🏠",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійний відмінок на -va відрізняється від родового -o й позначає власність або приналежність саме предмета, а не абстрактне походження, — окрема пара відмінків, рідкісна для мов світу.",
            "en": {
              "text": "The possessive case with -va is distinct from the genitive -o and marks ownership or belonging of an object specifically, rather than abstract origin — a separate case pair rare among world languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Eldava",
                "ельфів (присвійний, власність)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Possessive Case: -va — A2"
      },
      {
        "id": "dative-case",
        "title": "I Antacolma: -n — A2",
        "emoji": "🎁",
        "sections": [
          {
            "type": "intro",
            "text": "Давальний відмінок на -n позначає адресата дії ('кому/для кого'), приєднуючись як єдиний суфікс без прийменника.",
            "en": {
              "text": "The dative case with -n marks the recipient of an action ('to/for whom'), attaching as a single suffix with no preposition."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Eldan",
                "ельфові"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Dative Case: -n — A2"
      },
      {
        "id": "locative-case",
        "title": "I Massëcolma: -ssë — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Місцевий відмінок на -ssë позначає перебування в певному місці ('в/на'), приєднуючись безпосередньо до іменника.",
            "en": {
              "text": "The locative case with -ssë marks location at a place ('in/at'), attaching directly to the noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ambar-ssë (в світі)",
                "у світі"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Locative Case: -ssë — A2"
      },
      {
        "id": "allative-case",
        "title": "I Ettacolma: -nna — A2",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "Алатив (напрямний відмінок) на -nna позначає рух до чогось ('до, у напрямку'), протиставляючись аблативу.",
            "en": {
              "text": "The allative (directional) case with -nna marks movement toward something ('to, toward'), contrasting with the ablative."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Valimar-nna",
                "до Валімару"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Allative Case: -nna — A2"
      },
      {
        "id": "ablative-case",
        "title": "I Ettelëa Colma: -llo — B1",
        "emoji": "↩️",
        "sections": [
          {
            "type": "intro",
            "text": "Аблатив на -llo позначає рух звідкись ('з, від'), контрастуючи з алативом -nna і локативом -ssë.",
            "en": {
              "text": "The ablative with -llo marks movement away from somewhere ('from, out of'), contrasting with the allative -nna and locative -ssë."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Valimar-llo",
                "з Валімару"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ablative Case: -llo — B1"
      },
      {
        "id": "instrumental-case",
        "title": "I Carmacolma: -nen — B1",
        "emoji": "🛠️",
        "sections": [
          {
            "type": "intro",
            "text": "Орудний відмінок на -nen позначає засіб чи інструмент дії ('за допомогою'), приєднуючись безпосередньо до іменника.",
            "en": {
              "text": "The instrumental case with -nen marks the means or instrument of an action ('by means of'), attaching directly to the noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "macil-nen (мечем)",
                "мечем"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Instrumental Case: -nen — B1"
      },
      {
        "id": "respective-case",
        "title": "I Pelecolma: -s — B2",
        "emoji": "🔍",
        "sections": [
          {
            "type": "intro",
            "text": "Респектив (рідкісний відмінок) на -s позначає 'щодо, стосовно' чогось — один із найменш уживаних відмінків квеньї, реконструйований із небагатьох текстів Толкіна.",
            "en": {
              "text": "The respective case (a rare case) with -s marks 'regarding, concerning' something — one of the least-used Quenya cases, reconstructed from a handful of Tolkien's texts."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Eldas",
                "щодо ельфа"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Respective Case: -s — B2"
      },
      {
        "id": "partitive-plural",
        "title": "I Ohta Nótë: -li — B2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Партитивна множина на -li позначає невизначену кількість чи 'деякі з' предметів, окремо від звичайної точної множини -r/-i.",
            "en": {
              "text": "The partitive plural with -li marks an indefinite quantity or 'some of' something, distinct from the ordinary exact plural -r/-i."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Eldali",
                "деякі ельфи (невизначена кількість)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Partitive Plural: -li — B2"
      },
      {
        "id": "adjective-number-case-agreement",
        "title": "I Peo Colma: Imya Nótë — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники узгоджуються з іменником у числі (однина/двоїна/множина) і, зазвичай, в основних відмінках, приймаючи ті самі суфікси, що й іменник.",
            "en": {
              "text": "Adjectives agree with the noun in number (singular/dual/plural) and, typically, in the main cases, taking the same suffixes as the noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "vanya elda / vanyë eldar",
                "гарний ельф / гарні ельфи"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adjective Agreement — B1"
      },
      {
        "id": "adjective-position-flexible",
        "title": "I Peo Nostë — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник зазвичай стоїть перед іменником у прозі, але в поетичних текстах Толкіна нерідко ставиться після нього для стилістичного ефекту.",
            "en": {
              "text": "The adjective usually precedes the noun in prose, but in Tolkien's poetic texts it often follows the noun for stylistic effect."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "vanya elda / elda vanya",
                "гарний ельф (проза / поезія)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Flexible Adjective Position — A2"
      },
      {
        "id": "word-order-svo-tendency",
        "title": "I Nostalë Quettaron — A2",
        "emoji": "📝",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів у прозовій квеньї — підмет-присудок-додаток (SVO), хоча багата відмінкова система робить порядок слів гнучким для наголосу, особливо в поезії.",
            "en": {
              "text": "The basic word order in prose Quenya is Subject-Verb-Object (SVO), though the rich case system makes word order flexible for emphasis, especially in poetry."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Elda cenë cirya.",
                "Ельф бачить корабель."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Word Order: SVO Tendency — A2"
      },
      {
        "id": "comparative-degree",
        "title": "I Amya Peo — B1",
        "emoji": "📊",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняльний ступінь утворюється часткою an ('ніж') після прикметника, з об'єктом порівняння в базовій формі.",
            "en": {
              "text": "The comparative degree is formed with the particle an ('than') after the adjective, with the compared object in the base form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "alta an ..., 'більший, ніж ...'",
                "bigger than ..."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparative Degree: an — B1"
      },
      {
        "id": "superlative-degree",
        "title": "I Anta Peo: an- — B1",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь порівняння утворюється префіксом an- ('над-, най-'), доданим безпосередньо до прикметника.",
            "en": {
              "text": "The superlative degree is formed with the prefix an- ('over-, -est'), added directly to the adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "analta",
                "найбільший"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Superlative Degree: an- — B1"
      },
      {
        "id": "cardinal-numbers",
        "title": "Nótë: 1-10 — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "table",
            "title": "Числа 1-10",
            "rows": [
              [
                "1",
                "minë"
              ],
              [
                "2",
                "atta"
              ],
              [
                "3",
                "neldë"
              ],
              [
                "5",
                "lempë"
              ],
              [
                "10",
                "cainen"
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
        "id": "plural-nasal-mutation",
        "title": "I Long yo Short Nótë — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники утворюють множину або суфіксом -r (для основ на голосний), або суфіксом -i (для основ на приголосний), причому -i часто спричиняє зміну кореневого голосного.",
            "en": {
              "text": "Nouns form the plural with either the suffix -r (for vowel-final stems) or -i (for consonant-final stems), with -i often triggering a change in the root vowel."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "elda → eldar / atan → atani",
                "ельф → ельфи / людина → люди"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Two Plural Suffix Classes: -r / -i — B2"
      },
      {
        "id": "compound-noun-formation",
        "title": "I Ostimë Quettaron — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Складні іменники утворюються поєднанням двох коренів, часто зі скороченням чи зміною закінчення першого елемента перед другим.",
            "en": {
              "text": "Compound nouns are formed by joining two roots, often with the first element's ending shortened or altered before the second."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Eldamar (Дім Ельфів)",
                "elda + mar (дім) = 'Ельфійський дім'"
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
        "id": "diminutive-suffix",
        "title": "I Titta Colma: -incë — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувальний суфікс -incë/-itsë додає значення малості чи пестливості до будь-якого іменника, часто вживається в іменах.",
            "en": {
              "text": "The diminutive suffix -incë/-itsë adds a sense of smallness or affection to any noun, often used in names."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Atarincë",
                "татусь (пестливо)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Diminutive: -incë — B1"
      },
      {
        "id": "patronymic-suffix",
        "title": "I Ataro Esselya: -ion — B1",
        "emoji": "👨‍👦",
        "sections": [
          {
            "type": "intro",
            "text": "По-батькові утворюється суфіксом -ion ('син') або -iel ('дочка'), доданим до імені батька, — типова традиція іменування в леґендаріумі Толкіна.",
            "en": {
              "text": "A patronymic is formed with the suffix -ion ('son') or -iel ('daughter') added to the father's name — a typical naming tradition in Tolkien's legendarium."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Fëanárion",
                "син Феанора"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Patronymic: -ion / -iel — B1"
      },
      {
        "id": "vocative-particle",
        "title": "I Yalya Quettë: Á — B1",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "При звертанні до когось перед іменем часто вживають вигук á чи ai, що надає висловленню урочистого, поетичного звучання.",
            "en": {
              "text": "When addressing someone, the exclamation á or ai is often placed before the name, giving the utterance a solemn, poetic tone."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ai Elbereth Gilthoniel!",
                "О Елберет Ґілтоніель! (звертання)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Vocative Particle: á / ai — B1"
      },
      {
        "id": "negative-particle-u",
        "title": "I Úva Quettë: Ú- — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється префіксом ú- на дієслові або окремою часткою là перед реченням, залежно від того, заперечується дієслово чи ціле твердження.",
            "en": {
              "text": "Negation is formed with the prefix ú- on the verb, or the separate particle là before a clause, depending on whether the verb or the whole statement is negated."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "úsíla",
                "не сяє"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negative Particle: ú- — B1"
      },
      {
        "id": "conjunctions",
        "title": "I Ostimor — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники",
            "rows": [
              [
                "і",
                "ar"
              ],
              [
                "або",
                "ono / "
              ],
              [
                "але",
                "mal"
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
        "id": "relative-pronoun-i",
        "title": "I Yána Sanya: I — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Той самий елемент i, що вживається як означений артикль, служить і відносним займенником ('який, що'), вводячи означальне підрядне речення.",
            "en": {
              "text": "The same element i used as the definite article also serves as the relative pronoun ('who, which'), introducing a relative clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "i elda i cenë cirya",
                "ельф, який бачить корабель"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Pronoun: i — B1"
      },
      {
        "id": "tengwar-writing-system",
        "title": "I Tengwar: Sarmë — B1",
        "emoji": "✍️",
        "sections": [
          {
            "type": "intro",
            "text": "Квенью здебільшого записують письмом тенгвар, створеним Феанором: знаки позначають приголосні за місцем і способом творення в упорядкованій таблиці, а не довільно, як у більшості алфавітів.",
            "en": {
              "text": "Quenya is chiefly written in the Tengwar script, devised by Fëanor: the glyphs encode consonants by place and manner of articulation in an ordered table, rather than arbitrarily as in most alphabets."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "tengwa (одиниця письма)",
                "'літера' (букв. 'знак')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Tengwar Script — B1"
      },
      {
        "id": "tehtar-vowel-diacritics",
        "title": "I Tehtar: Onórëa Símë — B2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Голосні в тенгварі зазвичай записуються не окремими знаками, а діакритиками (tehtar) над попереднім приголосним, — система, схожа на арабські огласовки, а не на латинський алфавіт.",
            "en": {
              "text": "Vowels in Tengwar are usually not written as separate letters but as diacritics (tehtar) placed above the preceding consonant — a system resembling Arabic vowel marks rather than the Latin alphabet."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "tehta (одна діакритика)",
                "'знак голосного' (діакритика)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Tehtar: Vowel Diacritics — B2"
      },
      {
        "id": "finnish-phonology-influence",
        "title": "Finlanto Léta: Onóro — B2",
        "emoji": "🇫🇮",
        "sections": [
          {
            "type": "intro",
            "text": "Толкін відкрито визнавав, що фонологію й відмінкову систему квеньї надихнула фінська мова, яку він вивчав у молодості й описував як 'винне сховище, що я так і не спорожнив'.",
            "en": {
              "text": "Tolkien openly acknowledged that Quenya's phonology and case system were inspired by Finnish, which he studied in his youth and described as 'a bottle of wine that I never emptied'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "десять відмінків, подвійні голосні",
                "паралель до фінської граматики"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Finnish Phonological Influence — B2"
      },
      {
        "id": "latin-greek-aesthetic",
        "title": "Latina yo Hellena Léta — B2",
        "emoji": "🏛️",
        "sections": [
          {
            "type": "intro",
            "text": "Крім фінської, Толкін зазначав вплив латини й грецької на звукову естетику квеньї — вподобання до відкритих складів, дзвінких голосних і врівноваженого ритму.",
            "en": {
              "text": "Besides Finnish, Tolkien noted the influence of Latin and Greek on Quenya's sound aesthetic — a preference for open syllables, sonorous vowels, and a balanced rhythm."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Eä ('Хай буде', творення світу)",
                "слово з латинсько-грецьким відлунням"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Latin and Greek Aesthetic Influence — B2"
      },
      {
        "id": "vowel-length-phonemic",
        "title": "Anda yo Sinta Onot — B1",
        "emoji": "📏",
        "sections": [
          {
            "type": "intro",
            "text": "Довгота голосного в квеньї фонематична — короткий і довгий варіант того самого голосного розрізняють значення слів, і на письмі довгота позначається акутом.",
            "en": {
              "text": "Vowel length in Quenya is phonemic — the short and long version of the same vowel distinguish word meanings, and length is marked in writing with an acute accent."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "nár (вогонь) vs. nar (вони є)",
                "довгота голосного змінює значення"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Phonemic Vowel Length — B1"
      },
      {
        "id": "stress-pattern",
        "title": "I Lauca Nyérë: Naikë — B1",
        "emoji": "🎵",
        "sections": [
          {
            "type": "intro",
            "text": "Наголос падає на передостанній склад, якщо він 'важкий' (містить довгий голосний, дифтонг чи кластер приголосних), або на третій склад із кінця, якщо передостанній 'легкий'.",
            "en": {
              "text": "Stress falls on the penultimate syllable if it is 'heavy' (contains a long vowel, diphthong, or consonant cluster), or on the third-from-last syllable if the penultimate is 'light'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "elda → ELda (наголос на першому)",
                "regular vs. exceptional stress placement"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Stress Placement Rules — B1"
      },
      {
        "id": "consonant-cluster-restrictions",
        "title": "I Pustaina Nyestion — B2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Квенья дуже обмежує приголосні на початку слова (жодних довільних кластерів) і зовсім не має звука z чи дзвінкого щілинного v на початку слова, що надає мові характерної 'плавності'.",
            "en": {
              "text": "Quenya heavily restricts word-initial consonants (no arbitrary clusters) and has no z sound or word-initial v at all, giving the language its characteristic 'flowing' quality."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "tw-, thr- (недозволені кластери)",
                "consonant clusters not permitted word-initially"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Consonant Cluster Restrictions — B2"
      },
      {
        "id": "quenya-elf-latin-status",
        "title": "Elda-Latina: Nostë — B2",
        "emoji": "⛪",
        "sections": [
          {
            "type": "intro",
            "text": "У світі Толкіна до Третьої епохи квенья перестала бути живою розмовною мовою й функціонує як 'ельфійська латина' — урочиста, книжна, церемоніальна мова, якою користується освічена еліта.",
            "en": {
              "text": "Within Tolkien's world, by the Third Age Quenya had ceased to be a living spoken language and functions as 'Elf-Latin' — a solemn, learned, ceremonial language used by an educated elite."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "намелаур, урочисті імена та написи",
                "ceremonial names and inscriptions"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Quenya as 'Elf-Latin' — B2"
      },
      {
        "id": "sindarin-ban-history",
        "title": "I Ú-Quenta Sindarwa — B2",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "За переказом, король Тінґол заборонив квенью в Доріаті через кривди Вигнанців, тож синдарин (споріднена, але окрема ельфійська мова) став повсякденною мовою Середзем'я, тоді як квенья лишилася книжною.",
            "en": {
              "text": "According to the legendarium, King Thingol banned Quenya in Doriath because of the Exiles' wrongdoing, so Sindarin (a related but separate Elvish language) became Middle-earth's everyday tongue, while Quenya remained a literary one."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Quenya vs. Sindarin",
                "дві окремі, споріднені ельфійські мови"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Quenya's Ban and Sindarin's Rise — B2"
      },
      {
        "id": "common-eldarin-ancestor",
        "title": "I Endëa Eldarin — B2",
        "emoji": "🌳",
        "sections": [
          {
            "type": "intro",
            "text": "Квенья й синдарин обидві походять від спільного предка — прамови Eldarin, реконструйованої Толкіном подібно до того, як лінгвісти реконструюють праіндоєвропейську мову.",
            "en": {
              "text": "Quenya and Sindarin both descend from a common ancestor — Primitive Eldarin, reconstructed by Tolkien in a manner analogous to how linguists reconstruct Proto-Indo-European."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "*kwendē (прамова) → Quendë (квенья)",
                "reconstructed ancestral root"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Common Eldarin Ancestor — B2"
      },
      {
        "id": "valarin-loanwords",
        "title": "Valarin Ómalindë — B2",
        "emoji": "✨",
        "sections": [
          {
            "type": "intro",
            "text": "Небагато слів квеньї — прямі запозичення з валарину, мови божественних Валар, зазвичай пов'язані з іменами богів і священними поняттями, які ельфи не могли перекласти власними коренями.",
            "en": {
              "text": "A small number of Quenya words are direct loans from Valarin, the language of the divine Valar, usually connected to the names of gods and sacred concepts the Elves could not translate with their own roots."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Manwë (з валарину)",
                "ім'я Валар, не з ельфійського кореня"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Valarin Loanwords — B2"
      },
      {
        "id": "star-lore-vocabulary",
        "title": "Elenion Ancalima — B1",
        "emoji": "⭐",
        "sections": [
          {
            "type": "intro",
            "text": "Зорі посідають центральне місце в ельфійській культурі — саме зорі, а не сонце, першими побачили Ельдар, тому квенья має розвинену лексику для сузір'їв і зоряного світла, як у знаменитому вітанні Elen síla lúmenn' omentielvo.",
            "en": {
              "text": "Stars hold a central place in Elvish culture — the stars, not the sun, were the first thing the Eldar saw, so Quenya has rich vocabulary for constellations and starlight, as in the famous greeting Elen síla lúmenn' omentielvo."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Elen síla lúmenn' omentielvo.",
                "Зоря сяє на годину нашої зустрічі."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Star Lore Vocabulary — B1"
      },
      {
        "id": "greetings",
        "title": "Suilë — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "table",
            "title": "Вітання",
            "rows": [
              [
                "Вітаю",
                "Aiya"
              ],
              [
                "Дякую",
                "Hantanyel"
              ],
              [
                "Прощавай",
                "Namárië"
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
        "id": "colors",
        "title": "Calmar — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "table",
            "title": "Кольори",
            "rows": [
              [
                "білий",
                "ninquë"
              ],
              [
                "чорний",
                "morë"
              ],
              [
                "зелений",
                "laica / calvo"
              ],
              [
                "золотий",
                "laurëa"
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
        "title": "Nótë: Cainen — A2",
        "emoji": "🔟",
        "sections": [
          {
            "type": "table",
            "title": "Десятки",
            "rows": [
              [
                "20",
                "yunquë"
              ],
              [
                "100",
                "haranta"
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
        "id": "eldarin-calendar",
        "title": "I Eldarin Coranar — B2",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Ельфійський календар (coranar, 'сонячний рік') ділиться на шість сезонів різної довжини, а не на чотири, з особливими 'безіменними днями' між ними для святкувань.",
            "en": {
              "text": "The Elvish calendar (coranar, 'sun-round') is divided into six seasons of unequal length rather than four, with special 'unnamed days' between them for celebration."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "tuilë, lairë, yávië, quellë, hrívë, coirë",
                "весна, літо, урожай, осінь, зима, пробудження"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Eldarin Calendar — B2"
      },
      {
        "id": "tree-vocabulary",
        "title": "Alda: Taurë — A2",
        "emoji": "🌲",
        "sections": [
          {
            "type": "table",
            "title": "Дерева й природа",
            "rows": [
              [
                "дерево",
                "alda"
              ],
              [
                "ліс",
                "taurë"
              ],
              [
                "квітка",
                "loa / lótë"
              ]
            ],
            "en": {
              "title": "Trees and Nature"
            }
          }
        ],
        "titleEn": "Tree and Nature Vocabulary — A2"
      },
      {
        "id": "family-terms",
        "title": "Nossë — A2",
        "emoji": "👪",
        "sections": [
          {
            "type": "table",
            "title": "Родина",
            "rows": [
              [
                "батько",
                "atar"
              ],
              [
                "мати",
                "amil"
              ],
              [
                "брат",
                "háno"
              ],
              [
                "сестра",
                "néssa / noro"
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
        "id": "body-parts",
        "title": "Hroa: Luntë — A2",
        "emoji": "🧍",
        "sections": [
          {
            "type": "table",
            "title": "Частини тіла",
            "rows": [
              [
                "голова",
                "cas"
              ],
              [
                "рука",
                "má"
              ],
              [
                "око",
                "hen"
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
        "id": "weather-vocabulary",
        "title": "I Lauca — A2",
        "emoji": "☁️",
        "sections": [
          {
            "type": "table",
            "title": "Погода",
            "rows": [
              [
                "сонце",
                "anar"
              ],
              [
                "дощ",
                "mistë"
              ],
              [
                "сніг",
                "lossë"
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
        "id": "animals-vocabulary",
        "title": "Celvar — A2",
        "emoji": "🦅",
        "sections": [
          {
            "type": "table",
            "title": "Тварини",
            "rows": [
              [
                "кінь",
                "rocco"
              ],
              [
                "орел",
                "soron"
              ],
              [
                "вовк",
                "draug"
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
        "id": "titles-and-epithets",
        "title": "I Essi Antaina — B1",
        "emoji": "👑",
        "sections": [
          {
            "type": "intro",
            "text": "У легендаріумі поширена практика надавати особі не одне ім'я, а декілька епітетів, що описують діяння чи природу (наприклад, Феанор, 'дух вогню'), — жива іменникова традиція, а не застигла фамільна форма.",
            "en": {
              "text": "In the legendarium it is common for a person to have not one name but several epithets describing their deeds or nature (e.g. Fëanor, 'spirit of fire') — a living naming tradition rather than a fixed surname form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Fëanáro (Fëa 'дух' + nár 'вогонь')",
                "Феанор, 'Дух вогню'"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Titles and Epithets — B1"
      },
      {
        "id": "long-vowel-diphthongs",
        "title": "I Tyuvë Onot — B1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Квенья має обмежений набір дифтонгів (ai, au, oi, ui, eu, iu), кожен із яких вимовляється як один склад, а не як два окремі голосні поспіль.",
            "en": {
              "text": "Quenya has a limited set of diphthongs (ai, au, oi, ui, eu, iu), each pronounced as a single syllable rather than two separate vowels in sequence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Aulë (один склад 'Au-lë')",
                "Ауле (двоскладове ім'я, з дифтонгом)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Diphthongs — B1"
      },
      {
        "id": "coordinating-conjunctions-extra",
        "title": "Anta Ostimor — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Частка ono ('чи, або') і сполучник sië ('так само як') розширюють базовий набір ar/mal, додаючи альтернативні й порівняльні зв'язки між реченнями.",
            "en": {
              "text": "The particle ono ('or, either') and the connector sië ('just as') extend the basic ar/mal set, adding alternative and comparative links between clauses."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Sië carila i Eldar, sië carin.",
                "Як роблять ельфи, так роблю і я."
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
        "id": "irregular-verb-na",
        "title": "I Ú-Sanya Quettë: Ná — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово ná ('бути') часто опускається в теперішньому часі, подібно до нульової зв'язки, але в минулому часі виявляє супплетивну форму né замість очікуваного *nanë.",
            "en": {
              "text": "The verb ná ('to be') is often omitted in the present tense, similar to a zero copula, but in the past tense shows the suppletive form né instead of the expected *nanë."
            }
          },
          {
            "type": "table",
            "title": "Супплетивна форма",
            "rows": [
              [
                "ná → né (не *nanë)",
                "is → was (suppletive, not the regular pattern)"
              ]
            ],
            "en": {
              "title": "Suppletive Form"
            }
          }
        ],
        "titleEn": "Irregular Verb: ná ('to be') — B1"
      },
      {
        "id": "irregular-plural-atan-elda",
        "title": "I Ú-Sanya Nótë: Elda → Eldar — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька ключових іменників леґендаріуму (Elda, Vala, Noldo) утворюють множину повністю за регулярним -r, але з несподіваним чергуванням наголосу чи скороченням голосного, зафіксованим лише в цих словах.",
            "en": {
              "text": "A few key legendarium nouns (Elda, Vala, Noldo) form their plural fully with the regular -r, but with an unexpected stress shift or vowel shortening attested only in these particular words."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярні наголоси у множині",
            "rows": [
              [
                "Noldo → Noldor (наголос зсувається)",
                "Noldo → Noldor (stress shifts)"
              ]
            ],
            "en": {
              "title": "Irregular Plural Stress"
            }
          }
        ],
        "titleEn": "Irregular Plural Stress: Noldor — B2"
      },
      {
        "id": "archaic-forms-in-poetry",
        "title": "I Yára Nyérë: Namárië — B2",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Поетичні тексти Толкіна (як-от Namárië) зберігають архаїчні форми відмінків і дієслів, що вийшли з ужитку в реконструйованій 'нео-квеньї', тому фанатський стандарт іноді розходиться з канонічними текстами.",
            "en": {
              "text": "Tolkien's poetic texts (such as Namárië) preserve archaic case and verb forms that fell out of use in the reconstructed 'Neo-Quenya' fan standard, so the fan consensus sometimes diverges from the canonical texts."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Namárië! Nai hiruvalyë Valimar.",
                "Прощавай! Хай знайдеш ти Валімар. (архаїчна поетична форма)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Archaic Forms in Poetry — B2"
      }
    ]
  }
];
