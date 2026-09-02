// Vymova — data/grammar-data/grammar_fr.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_FR: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "etre-avoir",
        "title": "Être vs Avoir — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Être (бути) та avoir (мати) — два найважливіші дієслова у французькій. Вони використовуються самостійно і як допоміжні дієслова для утворення інших часів.",
            "en": {
              "text": "Être (to be) and avoir (to have) are the two most important French verbs. They are used on their own and as auxiliary verbs for other tenses."
            }
          },
          {
            "type": "formula",
            "title": "Дієвідмінювання (теперішній час)",
            "rows": [
              [
                "je",
                "suis",
                "ai"
              ],
              [
                "tu",
                "es",
                "as"
              ],
              [
                "il / elle",
                "est",
                "a"
              ],
              [
                "nous",
                "sommes",
                "avons"
              ],
              [
                "vous",
                "êtes",
                "avez"
              ],
              [
                "ils / elles",
                "sont",
                "ont"
              ]
            ]
          },
          {
            "type": "note",
            "text": "Avoir вживають там, де в українській кажуть \"є\" про вік чи наявність: \"il a vingt ans\" — буквально \"він має двадцять років\".",
            "en": {
              "text": "Avoir is used where Ukrainian/English say \"to be\" about age: \"il a vingt ans\" literally means \"he has twenty years\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Je suis étudiant.",
                "Я студент."
              ],
              [
                "Il a vingt ans.",
                "Йому двадцять років."
              ],
              [
                "Nous sommes en France.",
                "Ми у Франції."
              ],
              [
                "Elle a une voiture.",
                "У неї є машина."
              ]
            ]
          }
        ],
        "titleEn": "Être vs Avoir — A1"
      },
      {
        "id": "gender-nouns",
        "title": "Рід іменників — A1",
        "emoji": "⚥",
        "sections": [
          {
            "type": "intro",
            "text": "Усі іменники у французькій мають рід — чоловічий або жіночий. Артикль узгоджується з родом і числом іменника.",
            "en": {
              "text": "All French nouns have a gender — masculine or feminine. The article agrees with the noun in gender and number."
            }
          },
          {
            "type": "table",
            "title": "Артиклі",
            "rows": [
              [
                "",
                "однина",
                "множина"
              ],
              [
                "чоловічий",
                "le / un",
                "les / des"
              ],
              [
                "жіночий",
                "la / une",
                "les / des"
              ],
              [
                "перед голосною",
                "l'",
                "les / des"
              ]
            ]
          },
          {
            "type": "note",
            "text": "Типові закінчення жіночого роду: -e, -tion, -sion, -té. Типові закінчення чоловічого роду: -age, -ment, -isme (з винятками).",
            "en": {
              "text": "Typical feminine endings: -e, -tion, -sion, -té. Typical masculine endings: -age, -ment, -isme (with exceptions)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Le livre est intéressant.",
                "Книга цікава."
              ],
              [
                "La maison est grande.",
                "Дім великий."
              ],
              [
                "Les enfants jouent.",
                "Діти грають."
              ],
              [
                "J'ai une pomme.",
                "У мене є яблуко."
              ]
            ]
          }
        ],
        "titleEn": "Noun Gender — A1"
      },
      {
        "id": "articles",
        "title": "Артиклі (défini / indéfini / partitif) — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У французькій є три типи артиклів: означений (le, la, les) — для конкретних, відомих предметів; неозначений (un, une, des) — для нових, невизначених; частковий (du, de la, des) — для незлічуваної кількості.",
            "en": {
              "text": "French has three article types: definite (le, la, les) for specific, known things; indefinite (un, une, des) for new, unspecified things; partitive (du, de la, des) for an uncountable quantity."
            }
          },
          {
            "type": "table",
            "title": "Форми артиклів",
            "rows": [
              [
                "",
                "чол.",
                "жін.",
                "множина"
              ],
              [
                "означений",
                "le / l'",
                "la / l'",
                "les"
              ],
              [
                "неозначений",
                "un",
                "une",
                "des"
              ],
              [
                "частковий",
                "du / de l'",
                "de la / de l'",
                "des"
              ]
            ],
            "en": {
              "title": "Article forms"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Je mange du pain.",
                "Я їм хліб. (трохи)"
              ],
              [
                "Elle boit de l'eau.",
                "Вона п'є воду."
              ],
              [
                "J'ai un chat et une chienne.",
                "У мене є кіт і собака."
              ],
              [
                "Les enfants aiment les bonbons.",
                "Діти люблять цукерки."
              ]
            ]
          }
        ],
        "titleEn": "Articles (Definite/Indefinite/Partitive) — A1"
      },
      {
        "id": "plural-nouns",
        "title": "Множина іменників — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина зазвичай утворюється додаванням -s до однини (на письмі; вимова майже не змінюється). Є кілька груп винятків.",
            "en": {
              "text": "The plural is usually formed by adding -s to the singular (in writing; pronunciation barely changes). There are a few groups of exceptions."
            }
          },
          {
            "type": "table",
            "title": "Правила утворення множини",
            "rows": [
              [
                "основне правило: +s",
                "livre → livres",
                "maison → maisons"
              ],
              [
                "-eau/-eu → +x",
                "château → châteaux",
                "jeu → jeux"
              ],
              [
                "-al → -aux",
                "animal → animaux",
                "journal → journaux"
              ],
              [
                "-s/-x/-z → без змін",
                "pays → pays",
                "voix → voix"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "J'ai deux chats.",
                "У мене два коти."
              ],
              [
                "Les chevaux courent vite.",
                "Коні бігають швидко."
              ],
              [
                "Ce sont mes journaux préférés.",
                "Це мої улюблені газети."
              ]
            ]
          }
        ],
        "titleEn": "Plural Nouns — A1"
      },
      {
        "id": "adjectives",
        "title": "Прикметники — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники узгоджуються з іменником у роді й числі. Жіночий рід зазвичай утворюється додаванням -e, множина — додаванням -s.",
            "en": {
              "text": "Adjectives agree with the noun in gender and number. The feminine is usually formed by adding -e, the plural by adding -s."
            }
          },
          {
            "type": "table",
            "title": "Узгодження",
            "rows": [
              [
                "основне правило",
                "petit",
                "petite",
                "petits / petites"
              ],
              [
                "-eux → -euse",
                "heureux",
                "heureuse",
                "heureux / heureuses"
              ],
              [
                "-f → -ve",
                "actif",
                "active",
                "actifs / actives"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Il est grand. Elle est grande.",
                "Він високий. Вона висока."
              ],
              [
                "Ce sont de belles fleurs.",
                "Це гарні квіти."
              ],
              [
                "Un homme heureux, une femme heureuse.",
                "Щасливий чоловік, щаслива жінка."
              ]
            ]
          }
        ],
        "titleEn": "Adjectives — A1"
      },
      {
        "id": "possessives",
        "title": "Присвійні прикметники — A1",
        "emoji": "👪",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійні прикметники узгоджуються не з власником, а з предметом, яким володіють — у роді й числі.",
            "en": {
              "text": "Possessive adjectives agree not with the owner but with the thing owned — in gender and number."
            }
          },
          {
            "type": "table",
            "title": "Форми",
            "rows": [
              [
                "mon / ma / mes",
                "мій, моя, мої"
              ],
              [
                "ton / ta / tes",
                "твій, твоя, твої"
              ],
              [
                "son / sa / ses",
                "його, її"
              ],
              [
                "notre / nos",
                "наш, наші"
              ],
              [
                "votre / vos",
                "ваш, ваші"
              ],
              [
                "leur / leurs",
                "їхній, їхні"
              ]
            ]
          },
          {
            "type": "note",
            "text": "Перед іменником жіночого роду, що починається з голосної, \"ma/ta/sa\" замінюють на \"mon/ton/son\": mon amie (а не ma amie).",
            "en": {
              "text": "Before a feminine noun starting with a vowel, \"ma/ta/sa\" are replaced with \"mon/ton/son\": mon amie (not ma amie)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "C'est mon frère.",
                "Це мій брат."
              ],
              [
                "Où sont tes clés?",
                "Де твої ключі?"
              ],
              [
                "Notre maison est petite.",
                "Наш будинок маленький."
              ],
              [
                "Ils aiment leurs enfants.",
                "Вони люблять своїх дітей."
              ]
            ]
          }
        ],
        "titleEn": "Possessive Adjectives — A1"
      },
      {
        "id": "demonstratives",
        "title": "Вказівні прикметники — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Вказівні прикметники \"цей/ця/це/ці\" узгоджуються з іменником у роді й числі. Перед чоловічим іменником, що починається з голосної, ce замінюють на cet.",
            "en": {
              "text": "Demonstrative adjectives (\"this/that/these/those\") agree with the noun in gender and number. Before a masculine noun starting with a vowel, ce becomes cet."
            }
          },
          {
            "type": "table",
            "title": "Форми",
            "rows": [
              [
                "чол. одн.",
                "ce / cet (перед голосною)"
              ],
              [
                "жін. одн.",
                "cette"
              ],
              [
                "множина",
                "ces"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ce livre est intéressant.",
                "Ця книга цікава."
              ],
              [
                "Cet homme est mon père.",
                "Цей чоловік — мій батько."
              ],
              [
                "Cette robe est belle.",
                "Ця сукня гарна."
              ],
              [
                "Ces enfants jouent dehors.",
                "Ці діти грають надворі."
              ]
            ]
          }
        ],
        "titleEn": "Demonstrative Adjectives — A1"
      },
      {
        "id": "question-words",
        "title": "Питальні слова — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питальні слова стоять зазвичай на початку речення; у розмовній мові питання часто утворюють самою лише інтонацією.",
            "en": {
              "text": "Question words usually come at the start of the sentence; in everyday speech, questions are often formed by intonation alone."
            }
          },
          {
            "type": "table",
            "title": "Основні питальні слова",
            "rows": [
              [
                "Qui?",
                "Хто?"
              ],
              [
                "Que / Quoi?",
                "Що?"
              ],
              [
                "Où?",
                "Де?"
              ],
              [
                "Quand?",
                "Коли?"
              ],
              [
                "Pourquoi?",
                "Чому?"
              ],
              [
                "Comment?",
                "Як?"
              ],
              [
                "Combien?",
                "Скільки?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Qui est-ce?",
                "Хто це?"
              ],
              [
                "Où habites-tu?",
                "Де ти живеш?"
              ],
              [
                "Pourquoi pleures-tu?",
                "Чому ти плачеш?"
              ],
              [
                "Combien ça coûte?",
                "Скільки це коштує?"
              ]
            ]
          }
        ],
        "titleEn": "Question Words — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється рамкою ne...pas навколо дієслова. Перед голосною ne скорочується до n'.",
            "en": {
              "text": "Negation is formed with the frame ne...pas around the verb. Before a vowel, ne shortens to n'."
            }
          },
          {
            "type": "formula",
            "title": "Структура",
            "rows": [
              [
                "❌ (−)",
                "ne + verbe + pas",
                "→ Je ne sais pas."
              ],
              [
                "❌ (−)",
                "перед голосною: n' + verbe + pas",
                "→ Il n'aime pas ça."
              ]
            ],
            "en": {
              "title": "Structure"
            }
          },
          {
            "type": "note",
            "text": "Інші заперечні слова: ne...jamais (ніколи), ne...rien (нічого), ne...personne (нікого), ne...plus (більше не).",
            "en": {
              "text": "Other negative words: ne...jamais (never), ne...rien (nothing), ne...personne (nobody), ne...plus (no longer)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Je ne parle pas anglais.",
                "Я не говорю англійською."
              ],
              [
                "Elle n'a pas de voiture.",
                "У неї немає машини."
              ],
              [
                "Il ne mange jamais de viande.",
                "Він ніколи не їсть м'яса."
              ],
              [
                "Nous n'avons rien.",
                "У нас нічого немає."
              ]
            ]
          }
        ],
        "titleEn": "Negation — A1"
      },
      {
        "id": "present-regular",
        "title": "Теперішній час правильних дієслів — A1",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Правильні дієслова поділяють на групи за закінченням інфінітива: -er (найбільша група), -ir (тип finir), -re (тип vendre). Кожна група має свій набір закінчень.",
            "en": {
              "text": "Regular verbs fall into groups by infinitive ending: -er (the largest group), -ir (finir type), -re (vendre type). Each group has its own set of endings."
            }
          },
          {
            "type": "formula",
            "title": "parler (-er), finir (-ir), vendre (-re)",
            "rows": [
              [
                "je",
                "parl-e",
                "fin-is",
                "vend-s"
              ],
              [
                "tu",
                "parl-es",
                "fin-is",
                "vend-s"
              ],
              [
                "il / elle",
                "parl-e",
                "fin-it",
                "vend"
              ],
              [
                "nous",
                "parl-ons",
                "fin-issons",
                "vend-ons"
              ],
              [
                "vous",
                "parl-ez",
                "fin-issez",
                "vend-ez"
              ],
              [
                "ils / elles",
                "parl-ent",
                "fin-issent",
                "vend-ent"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Je parle français.",
                "Я говорю французькою."
              ],
              [
                "Tu finis tes devoirs?",
                "Ти закінчуєш домашнє завдання?"
              ],
              [
                "Elle vend des fleurs.",
                "Вона продає квіти."
              ],
              [
                "Nous parlons souvent.",
                "Ми часто розмовляємо."
              ]
            ]
          }
        ],
        "titleEn": "Present Tense (Regular Verbs) — A1"
      }
    ]
  },
  {
    "id": "tenses",
    "title": "Часи дієслів",
    "titleEn": "Verb Tenses",
    "emoji": "🕐",
    "rules": [
      {
        "id": "futur-proche",
        "title": "Futur Proche (aller + infinitif) — A1",
        "emoji": "🚶",
        "sections": [
          {
            "type": "intro",
            "text": "Найпоширеніший спосіб говорити про найближче майбутнє — дієслово aller (йти) у теперішньому часі + інфінітив. У розмовній мові вживається частіше за Futur Simple.",
            "en": {
              "text": "The most common way to talk about the near future is the verb aller (to go) in the present tense + infinitive. It is used more often than the Futur Simple in everyday speech."
            }
          },
          {
            "type": "formula",
            "title": "aller + infinitif",
            "rows": [
              [
                "je",
                "vais",
                "→ Je vais partir demain."
              ],
              [
                "tu",
                "vas",
                "→ Tu vas venir à la fête?"
              ],
              [
                "il / elle",
                "va",
                "→ Il va pleuvoir."
              ],
              [
                "nous",
                "allons",
                "→ Nous allons manger maintenant."
              ],
              [
                "vous",
                "allez",
                "→ Vous allez arriver en retard."
              ],
              [
                "ils / elles",
                "vont",
                "→ Ils vont étudier ce soir."
              ]
            ],
            "en": {
              "title": "aller + infinitive"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Je vais appeler ma mère.",
                "Я зателефоную мамі."
              ],
              [
                "Qu'est-ce que tu vas faire ce week-end?",
                "Що ти робитимеш цими вихідними?"
              ],
              [
                "Ça va commencer à huit heures.",
                "Це почнеться о восьмій."
              ]
            ]
          }
        ],
        "titleEn": "Futur Proche (Aller + Infinitive) — A1"
      },
      {
        "id": "passe-compose",
        "title": "Passé Composé — A2",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий доконаний час для завершених дій у минулому. Утворюється: avoir або être (теперішній час) + дієприкметник минулого часу (participe passé). Більшість дієслів використовують avoir; дієслова руху/стану та зворотні дієслова — être.",
            "en": {
              "text": "The compound past for completed past actions. Formed with avoir or être (present tense) + past participle. Most verbs use avoir; verbs of motion/state and reflexive verbs use être."
            }
          },
          {
            "type": "table",
            "title": "Participe passé",
            "rows": [
              [
                "-er → -é",
                "parler → parlé",
                "manger → mangé"
              ],
              [
                "-ir → -i",
                "finir → fini",
                "choisir → choisi"
              ],
              [
                "-re → -u",
                "vendre → vendu",
                "attendre → attendu"
              ]
            ]
          },
          {
            "type": "formula",
            "title": "avoir / être + participe passé",
            "rows": [
              [
                "je",
                "ai parlé",
                "→ J'ai parlé avec elle."
              ],
              [
                "tu",
                "as fini",
                "→ Tu as fini tes devoirs?"
              ],
              [
                "il / elle",
                "a vendu / est allé(e)",
                "→ Elle est allée au marché."
              ],
              [
                "nous",
                "avons mangé",
                "→ Nous avons mangé tôt."
              ],
              [
                "vous",
                "avez fini",
                "→ Vous avez fini?"
              ],
              [
                "ils / elles",
                "ont parlé / sont partis(es)",
                "→ Ils sont partis hier."
              ]
            ]
          },
          {
            "type": "note",
            "text": "З être дієприкметник узгоджується з підметом у роді й числі: elle est allée, ils sont partis.",
            "en": {
              "text": "With être, the past participle agrees with the subject in gender and number: elle est allée, ils sont partis."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "J'ai mangé une pomme.",
                "Я з'їв яблуко."
              ],
              [
                "Elle est née à Paris.",
                "Вона народилась у Парижі."
              ],
              [
                "Nous avons visité le musée.",
                "Ми відвідали музей."
              ]
            ]
          }
        ],
        "titleEn": "Passé Composé — A2"
      },
      {
        "id": "imparfait",
        "title": "Imparfait — A2",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий незавершений час — для звичних дій у минулому, опису і фону подій. Утворюється від основи nous теперішнього часу (без -ons) + закінчення.",
            "en": {
              "text": "The imperfect tense — for habitual past actions, descriptions and background. Formed from the nous present-tense stem (without -ons) + endings."
            }
          },
          {
            "type": "formula",
            "title": "parler, finir, vendre",
            "rows": [
              [
                "je",
                "parl-ais",
                "finiss-ais",
                "vend-ais"
              ],
              [
                "tu",
                "parl-ais",
                "finiss-ais",
                "vend-ais"
              ],
              [
                "il / elle",
                "parl-ait",
                "finiss-ait",
                "vend-ait"
              ],
              [
                "nous",
                "parl-ions",
                "finiss-ions",
                "vend-ions"
              ],
              [
                "vous",
                "parl-iez",
                "finiss-iez",
                "vend-iez"
              ],
              [
                "ils / elles",
                "parl-aient",
                "finiss-aient",
                "vend-aient"
              ]
            ]
          },
          {
            "type": "note",
            "text": "Виняток — être: основа ét- (j'étais, tu étais, il était...).",
            "en": {
              "text": "Exception — être: stem ét- (j'étais, tu étais, il était...)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Quand j'étais petit, je jouais au parc.",
                "Коли я був малим, я грався в парку."
              ],
              [
                "Il faisait beau ce jour-là.",
                "Того дня була гарна погода."
              ],
              [
                "Nous habitions à Lyon.",
                "Ми жили в Ліоні."
              ]
            ]
          }
        ],
        "titleEn": "Imparfait — A2"
      },
      {
        "id": "futur-simple",
        "title": "Futur Simple — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Простий майбутній час утворюють від інфінітива (для -re дієслів відкидають кінцеве -e) + закінчення -ai, -as, -a, -ons, -ez, -ont.",
            "en": {
              "text": "The simple future is formed from the infinitive (drop the final -e for -re verbs) + endings -ai, -as, -a, -ons, -ez, -ont."
            }
          },
          {
            "type": "formula",
            "title": "parler / finir / vendre + закінчення",
            "rows": [
              [
                "je",
                "parler-ai",
                "→ Demain, je parlerai avec lui."
              ],
              [
                "tu",
                "finir-as",
                "→ Tu finiras à quelle heure?"
              ],
              [
                "il / elle",
                "vendr-a",
                "→ Elle vendra sa voiture."
              ],
              [
                "nous",
                "parler-ons",
                "→ Nous parlerons demain."
              ],
              [
                "vous",
                "finir-ez",
                "→ Vous finirez à temps."
              ],
              [
                "ils / elles",
                "vendr-ont",
                "→ Ils vendront la maison."
              ]
            ],
            "en": {
              "title": "parler / finir / vendre + endings"
            }
          },
          {
            "type": "note",
            "text": "Неправильні основи: être → ser-, avoir → aur-, aller → ir-, faire → fer-, pouvoir → pourr-, voir → verr-, venir → viendr-.",
            "en": {
              "text": "Irregular stems: être → ser-, avoir → aur-, aller → ir-, faire → fer-, pouvoir → pourr-, voir → verr-, venir → viendr-."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Demain, je parlerai avec le directeur.",
                "Завтра я поговорю з директором."
              ],
              [
                "Elle finira son travail à six heures.",
                "Вона закінчить роботу о шостій."
              ],
              [
                "Nous irons en France l'été prochain.",
                "Ми поїдемо до Франції наступного літа."
              ]
            ]
          }
        ],
        "titleEn": "Futur Simple — A2"
      },
      {
        "id": "etre-en-train-de",
        "title": "Être en train de + infinitif — A2",
        "emoji": "▶️",
        "sections": [
          {
            "type": "intro",
            "text": "У французькій немає окремого тривалого часу, як англійський Continuous. Щоб підкреслити, що дія відбувається саме зараз, вживають конструкцію être en train de + інфінітив.",
            "en": {
              "text": "French has no separate continuous tense like English. To emphasize that an action is happening right now, use the construction être en train de + infinitive."
            }
          },
          {
            "type": "formula",
            "title": "être + en train de + infinitif",
            "rows": [
              [
                "je",
                "suis en train de",
                "→ Je suis en train de manger."
              ],
              [
                "tu",
                "es en train de",
                "→ Tu es en train de travailler?"
              ],
              [
                "il / elle",
                "est en train de",
                "→ Elle est en train de lire."
              ],
              [
                "nous",
                "sommes en train de",
                "→ Nous sommes en train de cuisiner."
              ],
              [
                "vous",
                "êtes en train de",
                "→ Vous êtes en train de partir?"
              ],
              [
                "ils / elles",
                "sont en train de",
                "→ Ils sont en train de jouer."
              ]
            ],
            "en": {
              "title": "être + en train de + infinitive"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Je suis en train de travailler.",
                "Я зараз працюю."
              ],
              [
                "Ne me dérange pas, je suis en train de cuisiner.",
                "Не заважай, я зараз готую."
              ],
              [
                "Ils sont en train de regarder un film.",
                "Вони зараз дивляться фільм."
              ]
            ]
          }
        ],
        "titleEn": "Être En Train De + Infinitive — A2"
      },
      {
        "id": "plus-que-parfait",
        "title": "Plus-que-parfait — B1",
        "emoji": "⏮️",
        "sections": [
          {
            "type": "intro",
            "text": "Передминулий час — для дії, що відбулась раніше за іншу минулу дію. Утворюється: avoir/être в imparfait + дієприкметник минулого часу (ті самі правила вибору допоміжного дієслова, що й у Passé Composé).",
            "en": {
              "text": "The past perfect — for an action that happened before another past action. Formed with avoir/être in the imparfait + past participle (same auxiliary-choice rules as the Passé Composé)."
            }
          },
          {
            "type": "formula",
            "title": "avoir/être (imparfait) + participe passé",
            "rows": [
              [
                "je",
                "avais parlé",
                "→ J'avais déjà mangé quand tu es arrivé."
              ],
              [
                "tu",
                "avais fini",
                "→ Tu avais fini avant moi."
              ],
              [
                "il / elle",
                "avait vendu / était parti(e)",
                "→ Elle était déjà partie."
              ],
              [
                "nous",
                "avions mangé",
                "→ Nous avions mangé avant huit heures."
              ],
              [
                "vous",
                "aviez fini",
                "→ Vous aviez déjà fini."
              ],
              [
                "ils / elles",
                "avaient parlé / étaient partis(es)",
                "→ Ils étaient déjà partis."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Quand je suis arrivé, ils avaient déjà mangé.",
                "Коли я прийшов, вони вже поїли."
              ],
              [
                "Je n'avais jamais vu un film pareil.",
                "Я ніколи не бачив подібного фільму."
              ],
              [
                "Elle était déjà partie quand j'ai appelé.",
                "Вона вже пішла, коли я подзвонив."
              ]
            ]
          }
        ],
        "titleEn": "Plus-que-Parfait (Past Perfect) — B1"
      },
      {
        "id": "conditionnel-present",
        "title": "Conditionnel Présent — B1",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб для гіпотетичних дій, ввічливих прохань і порад. Утворюється від основи Futur Simple + закінчення imparfait (-ais, -ais, -ait, -ions, -iez, -aient).",
            "en": {
              "text": "The conditional mood, used for hypothetical actions, polite requests and advice. Formed from the Futur Simple stem + imparfait endings (-ais, -ais, -ait, -ions, -iez, -aient)."
            }
          },
          {
            "type": "formula",
            "title": "parler / finir / vendre + закінчення",
            "rows": [
              [
                "je",
                "parler-ais",
                "→ Je parlerais avec lui."
              ],
              [
                "tu",
                "finir-ais",
                "→ Tu finirais à temps?"
              ],
              [
                "il / elle",
                "vendr-ait",
                "→ Elle vendrait sa voiture."
              ],
              [
                "nous",
                "parler-ions",
                "→ Nous parlerions plus lentement."
              ],
              [
                "vous",
                "finir-iez",
                "→ Finiriez-vous à six heures?"
              ],
              [
                "ils / elles",
                "vendr-aient",
                "→ Ils vendraient la maison."
              ]
            ],
            "en": {
              "title": "parler / finir / vendre + endings"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Pourriez-vous m'aider, s'il vous plaît?",
                "Не могли б Ви мені допомогти, будь ласка?"
              ],
              [
                "J'aimerais voyager en France.",
                "Мені б хотілося поїхати до Франції."
              ],
              [
                "Tu devrais te reposer davantage.",
                "Тобі варто б більше відпочивати."
              ]
            ]
          }
        ],
        "titleEn": "Conditionnel Présent — B1"
      },
      {
        "id": "subjonctif-present",
        "title": "Subjonctif Présent — B1",
        "emoji": "🌫️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслівний спосіб для бажань, сумнівів, емоцій і необхідності (зазвичай після que). Утворюється від основи 3-ї особи множини теперішнього часу.",
            "en": {
              "text": "A verbal mood for wishes, doubts, emotions and necessity (usually after que). Formed from the present-tense ils/elles stem."
            }
          },
          {
            "type": "formula",
            "title": "parler (-er), finir (-ir), vendre (-re)",
            "rows": [
              [
                "je",
                "parle",
                "finisse",
                "vende"
              ],
              [
                "tu",
                "parles",
                "finisses",
                "vendes"
              ],
              [
                "il / elle",
                "parle",
                "finisse",
                "vende"
              ],
              [
                "nous",
                "parlions",
                "finissions",
                "vendions"
              ],
              [
                "vous",
                "parliez",
                "finissiez",
                "vendiez"
              ],
              [
                "ils / elles",
                "parlent",
                "finissent",
                "vendent"
              ]
            ]
          },
          {
            "type": "markers",
            "title": "Тригери subjonctif",
            "items": [
              "il faut que...",
              "je veux que...",
              "je doute que...",
              "il est important que...",
              "avant que...",
              "bien que..."
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Il faut que tu viennes.",
                "Треба, щоб ти прийшов."
              ],
              [
                "Je doute qu'il sache la vérité.",
                "Я сумніваюсь, що він знає правду."
              ],
              [
                "Bien qu'il pleuve, nous sortons.",
                "Хоча йде дощ, ми виходимо."
              ]
            ]
          }
        ],
        "titleEn": "Subjonctif Présent — B1"
      },
      {
        "id": "futur-anterieur",
        "title": "Futur Antérieur — B2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Передмайбутній час — для дії, яка завершиться до певного моменту в майбутньому. Утворюється: avoir/être у Futur Simple + дієприкметник минулого часу.",
            "en": {
              "text": "The future perfect — for an action that will be completed before a point in the future. Formed with avoir/être in the Futur Simple + past participle."
            }
          },
          {
            "type": "formula",
            "title": "avoir/être (futur simple) + participe passé",
            "rows": [
              [
                "je",
                "aurai fini",
                "→ J'aurai fini avant midi."
              ],
              [
                "tu",
                "auras parlé",
                "→ Tu auras parlé avec elle d'ici demain."
              ],
              [
                "il / elle",
                "sera parti(e)",
                "→ Il sera déjà parti."
              ],
              [
                "nous",
                "aurons terminé",
                "→ Nous aurons terminé avant huit heures."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Quand tu arriveras, j'aurai déjà fini.",
                "Коли ти прийдеш, я вже закінчу."
              ],
              [
                "Elle sera rentrée avant minuit.",
                "Вона повернеться додому до півночі."
              ]
            ]
          }
        ],
        "titleEn": "Futur Antérieur (Future Perfect) — B2"
      },
      {
        "id": "passe-recent",
        "title": "Passé Récent (venir de) — A2",
        "emoji": "⏪",
        "sections": [
          {
            "type": "intro",
            "text": "Для дії, що відбулась щойно, вживають venir (теперішній час) + de + інфінітив.",
            "en": {
              "text": "For an action that just happened, use venir (present tense) + de + infinitive."
            }
          },
          {
            "type": "formula",
            "title": "venir + de + infinitif",
            "rows": [
              [
                "je",
                "viens de",
                "→ Je viens de manger."
              ],
              [
                "tu",
                "viens de",
                "→ Tu viens de finir?"
              ],
              [
                "il / elle",
                "vient de",
                "→ Elle vient de partir."
              ],
              [
                "nous",
                "venons de",
                "→ Nous venons d'arriver."
              ],
              [
                "vous",
                "venez de",
                "→ Vous venez de la voir?"
              ],
              [
                "ils / elles",
                "viennent de",
                "→ Ils viennent de téléphoner."
              ]
            ],
            "en": {
              "title": "venir + de + infinitive"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Je viens de recevoir ton message.",
                "Я щойно отримав твоє повідомлення."
              ],
              [
                "Ils viennent de déménager.",
                "Вони щойно переїхали."
              ]
            ]
          }
        ],
        "titleEn": "Passé Récent (Venir De) — A2"
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
        "id": "comparatives",
        "title": "Comparatifs et Superlatifs — A2",
        "emoji": "⚖️",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняння будується за допомогою plus...que (більше, ніж), moins...que (менше, ніж) або aussi...que (так само, як). Найвищий ступінь — le/la/les plus...",
            "en": {
              "text": "Comparisons use plus...que (more than), moins...que (less than) or aussi...que (as...as). The superlative is le/la/les plus..."
            }
          },
          {
            "type": "table",
            "title": "Структура",
            "rows": [
              [
                "вищий ступінь",
                "plus + прикм. + que",
                "Il est plus grand que moi."
              ],
              [
                "нижчий ступінь",
                "moins + прикм. + que",
                "C'est moins cher que ça."
              ],
              [
                "рівність",
                "aussi + прикм. + que",
                "Elle est aussi belle que toi."
              ],
              [
                "найвищий",
                "le/la plus + прикм.",
                "C'est le plus beau jour."
              ]
            ]
          },
          {
            "type": "note",
            "title": "Неправильні форми",
            "text": "bon → meilleur (кращий), mauvais → pire (гірший).",
            "en": {
              "title": "Irregular forms"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Paris est plus grand que Lyon.",
                "Париж більший за Ліон."
              ],
              [
                "Mon frère est meilleur que moi en sport.",
                "Мій брат кращий за мене у спорті."
              ],
              [
                "C'est le livre le plus intéressant que j'ai lu.",
                "Це найцікавіша книга, яку я читав."
              ]
            ]
          }
        ],
        "titleEn": "Comparatives & Superlatives — A2"
      },
      {
        "id": "object-pronouns",
        "title": "Pronoms Compléments Directs (COD) — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Прямі додаткові займенники (COD) замінюють іменник-додаток і ставляться перед дієсловом.",
            "en": {
              "text": "Direct object pronouns (COD) replace the object noun and go right before the verb."
            }
          },
          {
            "type": "table",
            "title": "Форми",
            "rows": [
              [
                "me / m'",
                "мене"
              ],
              [
                "te / t'",
                "тебе"
              ],
              [
                "le / la / l'",
                "його / її"
              ],
              [
                "nous",
                "нас"
              ],
              [
                "vous",
                "вас"
              ],
              [
                "les",
                "їх"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Tu as mon livre? Oui, je l'ai.",
                "У тебе моя книга? Так, вона в мене."
              ],
              [
                "Je la connais bien.",
                "Я добре її знаю."
              ],
              [
                "Il nous invite à dîner.",
                "Він запрошує нас на вечерю."
              ],
              [
                "Je vous remercie.",
                "Я вам дякую."
              ]
            ]
          }
        ],
        "titleEn": "Direct Object Pronouns (COD) — B1"
      },
      {
        "id": "imperative",
        "title": "L'Impératif — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб утворюється від теперішнього часу без займенника-підмета. У -er дієслів форма tu втрачає кінцеве -s.",
            "en": {
              "text": "The imperative is formed from the present tense without the subject pronoun. For -er verbs, the tu form drops the final -s."
            }
          },
          {
            "type": "formula",
            "title": "parler (-er), finir (-ir), vendre (-re)",
            "rows": [
              [
                "tu",
                "parle",
                "finis",
                "vends"
              ],
              [
                "nous",
                "parlons",
                "finissons",
                "vendons"
              ],
              [
                "vous",
                "parlez",
                "finissez",
                "vendez"
              ]
            ]
          },
          {
            "type": "note",
            "title": "Неправильні форми",
            "text": "être → sois, soyons, soyez; avoir → aie, ayons, ayez.",
            "en": {
              "title": "Irregular forms"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Parle plus fort!",
                "Говори голосніше!"
              ],
              [
                "Finissons ce travail.",
                "Завершімо цю роботу."
              ],
              [
                "N'aie pas peur!",
                "Не бійся!"
              ]
            ]
          }
        ],
        "titleEn": "The Imperative — A2"
      },
      {
        "id": "preposition-villes-pays",
        "title": "Prépositions à / en avec villes et pays — A2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Перед назвами міст зазвичай вживають à. Перед країнами жіночого роду (або тими, що починаються з голосної) — en, перед чоловічим родом — au, перед множиною — aux.",
            "en": {
              "text": "Cities usually take à. Feminine countries (or those starting with a vowel) take en, masculine countries take au, plural countries take aux."
            }
          },
          {
            "type": "table",
            "title": "Вживання",
            "rows": [
              [
                "місто",
                "à",
                "à Paris, à Madrid"
              ],
              [
                "країна ж.р./голосна",
                "en",
                "en France, en Italie"
              ],
              [
                "країна ч.р.",
                "au",
                "au Canada, au Japon"
              ],
              [
                "країна, множина",
                "aux",
                "aux États-Unis"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Je vis à Paris.",
                "Я живу в Парижі."
              ],
              [
                "Elle voyage en Espagne.",
                "Вона подорожує Іспанією."
              ],
              [
                "Nous allons au Portugal cet été.",
                "Ми їдемо до Португалії цього літа."
              ],
              [
                "Ils habitent aux Pays-Bas.",
                "Вони живуть у Нідерландах."
              ]
            ]
          }
        ],
        "titleEn": "Prepositions À/En with Cities & Countries — A2"
      },
      {
        "id": "il-y-a-il-faut",
        "title": "Il y a / Il faut — A1",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Il y a (\"є, там є\") вказує на наявність чогось. Il faut (\"треба, потрібно\") виражає необхідність. Обидві конструкції безособові й не змінюються за особами.",
            "en": {
              "text": "Il y a (\"there is/are\") indicates that something exists. Il faut (\"it is necessary\") expresses necessity. Both are impersonal and never change for person."
            }
          },
          {
            "type": "formula",
            "title": "Структура",
            "rows": [
              [
                "",
                "il y a + іменник",
                "→ Il y a un café près d'ici."
              ],
              [
                "",
                "il faut + infinitif",
                "→ Il faut partir maintenant."
              ]
            ],
            "en": {
              "title": "Structure"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Il y a beaucoup de monde ici.",
                "Тут багато людей."
              ],
              [
                "Il n'y a pas de pain.",
                "Немає хліба."
              ],
              [
                "Il faut étudier pour réussir.",
                "Треба вчитися, щоб досягти успіху."
              ],
              [
                "Il faut deux heures pour y arriver.",
                "Потрібно дві години, щоб туди дістатися."
              ]
            ]
          }
        ],
        "titleEn": "Il Y A / Il Faut — A1"
      },
      {
        "id": "indirect-object-pronouns",
        "title": "Pronoms Compléments Indirects (COI) — A2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Непрямі додаткові займенники (COI) вказують, кому/для кого виконується дія, і, як і прямі, ставляться перед дієсловом.",
            "en": {
              "text": "Indirect object pronouns (COI) show to/for whom an action is done, and like direct ones, go right before the verb."
            }
          },
          {
            "type": "table",
            "title": "Форми",
            "rows": [
              [
                "me / m'",
                "мені"
              ],
              [
                "te / t'",
                "тобі"
              ],
              [
                "lui",
                "йому/їй"
              ],
              [
                "nous",
                "нам"
              ],
              [
                "vous",
                "вам"
              ],
              [
                "leur",
                "їм"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Je lui donne un cadeau.",
                "Я даю йому/їй подарунок."
              ],
              [
                "Tu peux me téléphoner ce soir.",
                "Можеш зателефонувати мені сьогодні ввечері."
              ],
              [
                "Je leur écris un message.",
                "Я пишу їм повідомлення."
              ]
            ]
          }
        ],
        "titleEn": "Indirect Object Pronouns (COI) — A2"
      },
      {
        "id": "pronoms-en-y",
        "title": "Pronoms En et Y — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "En замінює \"de + іменник\" (кількість, походження), y замінює \"à/en/dans + місце\". Обидва ставляться перед дієсловом.",
            "en": {
              "text": "En replaces \"de + noun\" (quantity, origin), y replaces \"à/en/dans + place\". Both go right before the verb."
            }
          },
          {
            "type": "table",
            "title": "Вживання",
            "rows": [
              [
                "en",
                "de + ім.",
                "J'en ai trois. (= trois pommes)"
              ],
              [
                "y",
                "à/en/dans + місце",
                "J'y vais demain. (= à Paris)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Tu veux du café? Oui, j'en veux.",
                "Хочеш кави? Так, хочу."
              ],
              [
                "Je pense souvent à ce projet. — J'y pense souvent.",
                "Я часто думаю про цей проєкт."
              ],
              [
                "Combien de frères as-tu? J'en ai deux.",
                "Скільки в тебе братів? У мене двоє."
              ]
            ]
          }
        ],
        "titleEn": "The Pronouns En and Y — B1"
      },
      {
        "id": "relative-pronouns",
        "title": "Pronoms Relatifs (qui, que, où, dont) — B1",
        "emoji": "🧵",
        "sections": [
          {
            "type": "intro",
            "text": "Відносні займенники з'єднують два речення, уникаючи повторення іменника. Qui — підмет, que — додаток, où — місце/час, dont — заміняє \"de + іменник\".",
            "en": {
              "text": "Relative pronouns join two clauses without repeating the noun. Qui is the subject, que is the object, où is place/time, dont replaces \"de + noun\"."
            }
          },
          {
            "type": "table",
            "title": "Основні відносні слова",
            "rows": [
              [
                "qui",
                "хто/який (підмет)"
              ],
              [
                "que",
                "якого/яку (додаток)"
              ],
              [
                "où",
                "де/коли"
              ],
              [
                "dont",
                "про якого, чий (з de)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "L'homme qui parle est mon père.",
                "Чоловік, який говорить, мій батько."
              ],
              [
                "Le livre que je lis est intéressant.",
                "Книга, яку я читаю, цікава."
              ],
              [
                "C'est la maison où je suis né.",
                "Це дім, де я народився."
              ],
              [
                "Voici le livre dont je parlais.",
                "Ось книга, про яку я говорив."
              ]
            ]
          }
        ],
        "titleEn": "Relative Pronouns (Qui, Que, Où, Dont) — B1"
      },
      {
        "id": "passive-voice",
        "title": "Voix Passive (être + participe) — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний стан вживають, коли важливіша дія, а не той, хто її виконує. Утворюється: être + дієприкметник, що узгоджується з підметом у роді й числі. Виконавець дії вводиться через par.",
            "en": {
              "text": "The passive voice is used when the action matters more than who performs it. Formed with être + past participle, which agrees with the subject in gender and number. The agent is introduced with par."
            }
          },
          {
            "type": "formula",
            "title": "être + participe (+ par)",
            "rows": [
              [
                "présent",
                "est construit(e)",
                "→ La maison est construite par des ouvriers."
              ],
              [
                "passé",
                "a été écrit(e)",
                "→ Le livre a été écrit par elle."
              ],
              [
                "futur",
                "sera annoncé(e)",
                "→ Le résultat sera annoncé demain."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ce tableau a été peint par Monet.",
                "Цю картину намалював Моне."
              ],
              [
                "Les lettres sont envoyées chaque jour.",
                "Листи відправляють щодня."
              ],
              [
                "Le français est parlé ici.",
                "Тут розмовляють французькою."
              ]
            ]
          }
        ],
        "titleEn": "Passive Voice (Être + Participle) — B1"
      },
      {
        "id": "gerondif",
        "title": "Le Gérondif (en + participe présent) — B1",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Gérondif (en + дієприслівник теперішнього часу) описує дію, що відбувається одночасно з головною, або спосіб/засіб її виконання.",
            "en": {
              "text": "The gérondif (en + present participle) describes an action happening at the same time as the main one, or the manner/means of doing it."
            }
          },
          {
            "type": "formula",
            "title": "Утворення",
            "rows": [
              [
                "parler → parlant",
                "en parlant",
                "→ Il mange en parlant."
              ],
              [
                "finir → finissant",
                "en finissant",
                "→ En finissant tôt, il a pu sortir."
              ],
              [
                "faire → faisant",
                "en faisant",
                "→ Il apprend en faisant des erreurs."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Elle a appris le français en regardant des films.",
                "Вона вивчила французьку, дивлячись фільми."
              ],
              [
                "Il s'est blessé en courant.",
                "Він травмувався, біжучи."
              ]
            ]
          }
        ],
        "titleEn": "The Gérondif (En + Present Participle) — B1"
      }
    ]
  },
  {
    "id": "advanced",
    "title": "Просунута граматика",
    "titleEn": "Advanced grammar",
    "emoji": "🚀",
    "rules": [
      {
        "id": "conditional-sentences",
        "title": "Phrases Conditionnelles avec Si — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовні речення з si мають три основні типи залежно від реалістичності умови.",
            "en": {
              "text": "Conditional sentences with si have three main types depending on how realistic the condition is."
            }
          },
          {
            "type": "table",
            "title": "Типи умовних речень",
            "rows": [
              [
                "реальна умова",
                "Si + présent, + présent/futur/impératif",
                "Si j'ai le temps, je t'appelle."
              ],
              [
                "нереальна теперішня",
                "Si + imparfait, + conditionnel présent",
                "Si j'avais de l'argent, je voyagerais."
              ],
              [
                "нереальна минула",
                "Si + plus-que-parfait, + conditionnel passé",
                "Si j'avais su, je t'aurais prévenu."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "S'il pleut, nous ne sortons pas.",
                "Якщо піде дощ, ми не вийдемо."
              ],
              [
                "Si j'étais riche, j'achèterais une maison.",
                "Якби я був багатим, я б купив будинок."
              ],
              [
                "Si j'avais étudié, j'aurais réussi.",
                "Якби я навчався, я б склав."
              ]
            ]
          }
        ],
        "titleEn": "Conditional Sentences with Si — B1"
      },
      {
        "id": "discours-indirect",
        "title": "Discours Indirect — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "intro",
            "text": "У непрямій мові, коли головне дієслово (a dit, a expliqué) стоїть у минулому часі, час дієслова в підрядному реченні зазвичай зміщується на крок назад.",
            "en": {
              "text": "In reported speech, when the main verb (a dit, a expliqué) is in the past, the verb tense in the reported clause usually shifts one step back."
            }
          },
          {
            "type": "table",
            "title": "Зміщення часів",
            "rows": [
              [
                "présent → imparfait",
                "\"Je travaille\" → Il a dit qu'il travaillait."
              ],
              [
                "passé composé → plus-que-parfait",
                "\"J'ai mangé\" → Il a dit qu'il avait mangé."
              ],
              [
                "futur simple → conditionnel",
                "\"Je viendrai\" → Il a dit qu'il viendrait."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "\"J'ai faim\" → Il a dit qu'il avait faim.",
                "\"Я голодний\" → Він сказав, що голодний."
              ],
              [
                "\"J'arriverai en retard\" → Il a dit qu'il arriverait en retard.",
                "\"Я прийду пізно\" → Він сказав, що прийде пізно."
              ]
            ]
          }
        ],
        "titleEn": "Reported Speech — B1"
      },
      {
        "id": "pronoms-indefinis",
        "title": "Pronoms Indéfinis — A2",
        "emoji": "❔",
        "sections": [
          {
            "type": "intro",
            "text": "Невизначені займенники вказують на невідомі, неконкретні особи, предмети чи кількості.",
            "en": {
              "text": "Indefinite pronouns refer to unknown or unspecified people, things or quantities."
            }
          },
          {
            "type": "table",
            "title": "Основні форми",
            "rows": [
              [
                "quelque chose / rien",
                "щось / нічого"
              ],
              [
                "quelqu'un / personne",
                "хтось / ніхто"
              ],
              [
                "quelques-uns / aucun",
                "декілька / жодний"
              ],
              [
                "tout / chaque",
                "все / кожен"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Il y a quelqu'un à la porte?",
                "Хтось є біля дверей?"
              ],
              [
                "Je n'ai rien à dire.",
                "Мені нічого сказати."
              ],
              [
                "Aucun d'eux n'est venu.",
                "Жоден з них не прийшов."
              ]
            ]
          }
        ],
        "titleEn": "Indefinite Pronouns — A2"
      },
      {
        "id": "nombres-ordinaux",
        "title": "Nombres Ordinaux — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Порядкові числівники зазвичай утворюються додаванням -ième до кількісного числівника (з винятком \"перший\").",
            "en": {
              "text": "Ordinal numbers are usually formed by adding -ième to the cardinal number (with the exception of \"first\")."
            }
          },
          {
            "type": "table",
            "title": "Перші десять",
            "rows": [
              [
                "premier/première",
                "1-й",
                "sixième",
                "6-й"
              ],
              [
                "deuxième",
                "2-й",
                "septième",
                "7-й"
              ],
              [
                "troisième",
                "3-й",
                "huitième",
                "8-й"
              ],
              [
                "quatrième",
                "4-й",
                "neuvième",
                "9-й"
              ],
              [
                "cinquième",
                "5-й",
                "dixième",
                "10-й"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "J'habite au troisième étage.",
                "Я живу на третьому поверсі."
              ],
              [
                "C'est la première fois que je viens ici.",
                "Це перший раз, коли я тут."
              ]
            ]
          }
        ],
        "titleEn": "Ordinal Numbers — A2"
      },
      {
        "id": "exclamatives",
        "title": "Phrases Exclamatives — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Окличні речення утворюють за допомогою quel(le)(s) + іменник або que/comme + речення.",
            "en": {
              "text": "Exclamatory sentences are formed with quel(le)(s) + noun or que/comme + clause."
            }
          },
          {
            "type": "table",
            "title": "Структури",
            "rows": [
              [
                "Quel(le)(s) + ім.!",
                "для предмету/якості",
                "Quelle belle journée!"
              ],
              [
                "Que + речення!",
                "для способу/міри",
                "Qu'il fait beau!"
              ],
              [
                "Comme + речення!",
                "для способу",
                "Comme tu as grandi!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Quelle bonne idée!",
                "Яка чудова ідея!"
              ],
              [
                "Que c'est beau!",
                "Як же це гарно!"
              ],
              [
                "Comme il pleut fort!",
                "Як же сильно йде дощ!"
              ]
            ]
          }
        ],
        "titleEn": "Exclamatory Sentences — A2"
      },
      {
        "id": "prepositions-lieu",
        "title": "Prépositions de Lieu — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Прийменники місця показують, де розташований предмет чи особа відносно іншого об'єкта.",
            "en": {
              "text": "Prepositions of place show where something or someone is located relative to another object."
            }
          },
          {
            "type": "table",
            "title": "Основні прийменники",
            "rows": [
              [
                "sur / sous",
                "на / під"
              ],
              [
                "dans / devant",
                "у / перед"
              ],
              [
                "derrière / entre",
                "позаду / між"
              ],
              [
                "chez",
                "у когось вдома/в офісі"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Le chat est sur la table.",
                "Кіт на столі."
              ],
              [
                "Je vais chez le médecin.",
                "Я йду до лікаря."
              ],
              [
                "La pharmacie est entre la banque et l'école.",
                "Аптека між банком і школою."
              ]
            ]
          }
        ],
        "titleEn": "Prepositions of Place — A2"
      },
      {
        "id": "ne-que",
        "title": "Ne... Que (seulement) — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Конструкція ne...que виражає обмеження \"лише, тільки\" — це не справжнє заперечення, а синонім до seulement.",
            "en": {
              "text": "The construction ne...que expresses restriction (\"only\") — it is not a true negation, but a synonym for seulement."
            }
          },
          {
            "type": "formula",
            "title": "Структура",
            "rows": [
              [
                "",
                "sujet + ne + verbe + que + ...",
                "→ Je n'ai que deux euros."
              ]
            ],
            "en": {
              "title": "Structure"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Elle ne mange que des légumes.",
                "Вона їсть тільки овочі."
              ],
              [
                "Il n'a que dix-huit ans.",
                "Йому лише вісімнадцять років."
              ],
              [
                "Nous n'avons que deux jours.",
                "У нас лише два дні."
              ]
            ]
          }
        ],
        "titleEn": "Ne...Que (Only) — B1"
      },
      {
        "id": "pronoms-toniques",
        "title": "Pronoms Toniques — A2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Наголошені (тонічні) займенники вживають після прийменників, у порівняннях, для підкреслення підмета та в коротких відповідях.",
            "en": {
              "text": "Stressed (tonic) pronouns are used after prepositions, in comparisons, to emphasize the subject, and in short answers."
            }
          },
          {
            "type": "table",
            "title": "Форми",
            "rows": [
              [
                "moi",
                "я (наголош.)",
                "nous",
                "ми (наголош.)"
              ],
              [
                "toi",
                "ти (наголош.)",
                "vous",
                "ви (наголош.)"
              ],
              [
                "lui / elle",
                "він/вона (наголош.)",
                "eux / elles",
                "вони (наголош.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ce cadeau est pour toi.",
                "Цей подарунок для тебе."
              ],
              [
                "Moi, je préfère le café.",
                "Я особисто волію каву."
              ],
              [
                "Qui a faim? — Moi!",
                "Хто голодний? — Я!"
              ]
            ]
          }
        ],
        "titleEn": "Stressed Pronouns — A2"
      },
      {
        "id": "concordance-des-temps",
        "title": "Concordance des Temps — B2",
        "emoji": "⏱️",
        "sections": [
          {
            "type": "intro",
            "text": "Узгодження часів — правило, за яким час дієслова в підрядному реченні залежить від часу в головному реченні, особливо в непрямій мові.",
            "en": {
              "text": "Sequence of tenses — the rule by which the tense of the verb in a subordinate clause depends on the tense in the main clause, especially in reported speech."
            }
          },
          {
            "type": "table",
            "title": "Узгодження",
            "rows": [
              [
                "головне в теперішньому",
                "підрядне — будь-який час",
                "Il dit qu'il vient/est venu/viendra."
              ],
              [
                "головне в минулому",
                "présent → imparfait",
                "Il a dit qu'il venait."
              ],
              [
                "головне в минулому",
                "futur → conditionnel",
                "Il a dit qu'il viendrait."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Il sait que tu travailles.",
                "Він знає, що ти працюєш."
              ],
              [
                "Il savait que tu travaillais.",
                "Він знав, що ти працюєш(-ла)."
              ]
            ]
          }
        ],
        "titleEn": "Sequence of Tenses — B2"
      },
      {
        "id": "depuis-pendant-il-y-a",
        "title": "Depuis, Pendant, Il y a — B1",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Три способи виразити тривалість: depuis (з якого моменту/відтоді), pendant (протягом якого періоду), il y a (скільки часу тому).",
            "en": {
              "text": "Three ways to express duration: depuis (since when), pendant (for how long/during), il y a (how long ago)."
            }
          },
          {
            "type": "table",
            "title": "Вживання",
            "rows": [
              [
                "depuis",
                "з (моменту)",
                "J'habite ici depuis 2015."
              ],
              [
                "pendant",
                "протягом",
                "J'ai étudié pendant trois ans."
              ],
              [
                "il y a",
                "(скільки) тому",
                "Il est arrivé il y a deux heures."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Je ne l'ai pas vue depuis l'été.",
                "Я не бачив її з літа."
              ],
              [
                "Il a travaillé pendant dix ans dans cette entreprise.",
                "Він працював у тій компанії десять років."
              ],
              [
                "Elle est partie il y a une semaine.",
                "Вона поїхала тиждень тому."
              ]
            ]
          }
        ],
        "titleEn": "Depuis, Pendant, Il Y A — B1"
      }
    ]
  },
  {
    "id": "mastery",
    "title": "Майстерність",
    "titleEn": "Mastery",
    "emoji": "🏆",
    "rules": [
      {
        "id": "subjonctif-passe",
        "title": "Subjonctif Passé — B2",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий час підрядного способу — для дій, що мали б завершитись до моменту мовлення, при вираженні сумніву, емоцій чи бажання. Утворюється: avoir/être (subjonctif présent) + дієприкметник минулого часу.",
            "en": {
              "text": "The past subjunctive — for actions that should be completed by the moment of speaking, when expressing doubt, emotion or wish. Formed with avoir/être (subjonctif présent) + past participle."
            }
          },
          {
            "type": "formula",
            "title": "avoir/être (subjonctif) + participe passé",
            "rows": [
              [
                "je",
                "aie parlé",
                "→ Je suis content que tu aies réussi."
              ],
              [
                "tu",
                "aies fini",
                "→ Je doute que tu aies fini."
              ],
              [
                "il / elle",
                "soit parti(e)",
                "→ Il est possible qu'elle soit déjà partie."
              ],
              [
                "nous",
                "ayons terminé",
                "→ Bien que nous ayons terminé tôt..."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Je suis content que tu sois venu.",
                "Я радий, що ти прийшов."
              ],
              [
                "Je ne pense pas qu'il ait compris.",
                "Я не думаю, що він зрозумів."
              ],
              [
                "C'est dommage qu'elle n'ait pas pu venir.",
                "Шкода, що вона не змогла прийти."
              ]
            ]
          }
        ],
        "titleEn": "Subjonctif Passé — B2"
      },
      {
        "id": "imperative-negative",
        "title": "Impératif Négatif — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечний наказовий спосіб утворюється рамкою ne...pas навколо стверджувальної форми. На відміну від стверджувального, займенники тут ставляться перед дієсловом.",
            "en": {
              "text": "The negative imperative is formed with the ne...pas frame around the affirmative form. Unlike the affirmative, pronouns here go before the verb."
            }
          },
          {
            "type": "formula",
            "title": "ne + impératif + pas",
            "rows": [
              [
                "tu",
                "ne parle pas",
                "→ Ne parle pas si fort!"
              ],
              [
                "nous",
                "ne parlons pas",
                "→ Ne paniquons pas."
              ],
              [
                "vous",
                "ne parlez pas",
                "→ Ne partez pas encore."
              ]
            ]
          },
          {
            "type": "note",
            "text": "З займенником: Ne me le dis pas! (а не Dis-moi-le pas!) — порядок займенників такий самий, як у звичайному реченні.",
            "en": {
              "text": "With a pronoun: Ne me le dis pas! (not Dis-moi-le pas!) — the pronoun order is the same as in a regular sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ne t'inquiète pas!",
                "Не хвилюйся!"
              ],
              [
                "Ne le fais pas comme ça.",
                "Не роби так."
              ],
              [
                "Ne m'appelle pas après dix heures.",
                "Не дзвони мені після десятої."
              ]
            ]
          }
        ],
        "titleEn": "Negative Imperative — A2"
      },
      {
        "id": "pronoms-possessifs",
        "title": "Pronoms Possessifs (le mien, le tien) — B1",
        "emoji": "👪",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійні займенники (на відміну від прикметників) замінюють іменник повністю і завжди вживаються з означеним артиклем.",
            "en": {
              "text": "Possessive pronouns (unlike adjectives) replace the noun entirely and are always used with the definite article."
            }
          },
          {
            "type": "table",
            "title": "Форми (чол. одн. / жін. одн.)",
            "rows": [
              [
                "le mien / la mienne",
                "мій / моя"
              ],
              [
                "le tien / la tienne",
                "твій / твоя"
              ],
              [
                "le sien / la sienne",
                "його/її"
              ],
              [
                "le nôtre / la nôtre",
                "наш/наша"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ma voiture est bleue, et la tienne?",
                "Моя машина синя, а твоя?"
              ],
              [
                "Cette table est la nôtre.",
                "Цей стіл наш."
              ],
              [
                "Ses idées sont meilleures que les miennes.",
                "Його/її ідеї кращі за мої."
              ]
            ]
          }
        ],
        "titleEn": "Possessive Pronouns (Le Mien, Le Tien) — B1"
      },
      {
        "id": "adverbes-ment",
        "title": "Adverbes en -ment — A2",
        "emoji": "⚡",
        "sections": [
          {
            "type": "intro",
            "text": "Більшість прислівників способу дії утворюються додаванням -ment до жіночої форми прикметника.",
            "en": {
              "text": "Most adverbs of manner are formed by adding -ment to the feminine form of the adjective."
            }
          },
          {
            "type": "table",
            "title": "Утворення",
            "rows": [
              [
                "lent → lente → lentement",
                "повільно"
              ],
              [
                "heureux → heureuse → heureusement",
                "на щастя"
              ],
              [
                "vrai → vraiment",
                "справді (без -e, бо закінчується на голосну)"
              ],
              [
                "constant → constamment",
                "-ant → -amment"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Elle conduit lentement.",
                "Вона веде машину повільно."
              ],
              [
                "Heureusement, il n'a pas plu.",
                "На щастя, дощу не було."
              ],
              [
                "Il parle constamment de son travail.",
                "Він постійно говорить про роботу."
              ]
            ]
          }
        ],
        "titleEn": "Adverbs in -Ment — A2"
      },
      {
        "id": "etre-participe-etat",
        "title": "Être + Participe Passé (état résultant) — A2",
        "emoji": "🔒",
        "sections": [
          {
            "type": "intro",
            "text": "Être + дієприкметник минулого часу описує стан, що є результатом дії (а не саму дію), і узгоджується з підметом, як прикметник.",
            "en": {
              "text": "Être + past participle describes a state resulting from an action (not the action itself), and agrees with the subject like an adjective."
            }
          },
          {
            "type": "table",
            "title": "Порівняння: дія vs стан",
            "rows": [
              [
                "дія (пасив)",
                "La porte est fermée (par quelqu'un).",
                "Двері зачиняються (кимось)."
              ],
              [
                "стан (результат)",
                "La porte est fermée.",
                "Двері зачинені."
              ],
              [
                "стан (результат)",
                "Les magasins sont ouverts.",
                "Магазини відчинені."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "La fenêtre est cassée.",
                "Вікно розбите."
              ],
              [
                "Nous sommes fatigués après le voyage.",
                "Ми втомлені після подорожі."
              ],
              [
                "Le travail est déjà terminé.",
                "Робота вже завершена."
              ]
            ]
          }
        ],
        "titleEn": "Être + Past Participle (Resultant State) — A2"
      },
      {
        "id": "etre-sur-le-point-de",
        "title": "Être sur le Point de + Infinitif — B1",
        "emoji": "⏩",
        "sections": [
          {
            "type": "intro",
            "text": "Конструкція être sur le point de + інфінітив виражає дію, яка от-от станеться — \"бути на межі того, щоб зробити щось\".",
            "en": {
              "text": "The construction être sur le point de + infinitive expresses an action that is about to happen — \"to be on the verge of doing something\"."
            }
          },
          {
            "type": "formula",
            "title": "être + sur le point de + infinitif",
            "rows": [
              [
                "je",
                "suis sur le point de",
                "→ Je suis sur le point de partir."
              ],
              [
                "elle",
                "est sur le point de",
                "→ Elle est sur le point de pleurer."
              ],
              [
                "nous",
                "sommes sur le point de",
                "→ Nous sommes sur le point de commencer."
              ]
            ],
            "en": {
              "title": "être + sur le point de + infinitive"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Le film est sur le point de commencer.",
                "Фільм от-от почнеться."
              ],
              [
                "J'étais sur le point de t'appeler.",
                "Я якраз збирався тобі подзвонити."
              ]
            ]
          }
        ],
        "titleEn": "Être Sur Le Point De + Infinitive — B1"
      },
      {
        "id": "obligation-verbs",
        "title": "Devoir, Il faut, Avoir besoin de — A2",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Три способи виразити необхідність: il faut (безособове, загальне правило), devoir (особистий обов'язок/порада), avoir besoin de (потреба в чомусь чи зробити щось).",
            "en": {
              "text": "Three ways to express necessity: il faut (impersonal, general rule), devoir (personal duty/advice), avoir besoin de (need for something or to do something)."
            }
          },
          {
            "type": "table",
            "title": "Різниця",
            "rows": [
              [
                "il faut",
                "безособово",
                "Il faut respecter les règles."
              ],
              [
                "devoir",
                "особисто/порада",
                "Tu dois finir ce rapport."
              ],
              [
                "avoir besoin de",
                "потреба",
                "J'ai besoin de me reposer."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Il faut étudier pour réussir.",
                "Треба вчитися, щоб досягти успіху."
              ],
              [
                "Je dois aller chez le médecin demain.",
                "Мені треба піти до лікаря завтра."
              ],
              [
                "Tu as besoin de dormir plus.",
                "Тобі потрібно більше спати."
              ]
            ]
          }
        ],
        "titleEn": "Devoir, Il Faut, Avoir Besoin De — A2"
      },
      {
        "id": "quel-vs-quest-ce-que",
        "title": "Quel vs Qu'est-ce que — B1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Quel(le)(s) — питальний прикметник, узгоджується з іменником і вживається перед ним. Qu'est-ce que — питальний займенник для запитання \"що\" як додатка дієслова.",
            "en": {
              "text": "Quel(le)(s) is an interrogative adjective, agrees with the noun and comes before it. Qu'est-ce que is an interrogative pronoun for asking \"what\" as the object of a verb."
            }
          },
          {
            "type": "table",
            "title": "Порівняння",
            "rows": [
              [
                "Quel + ім.",
                "перед іменником",
                "Quel livre lis-tu?"
              ],
              [
                "Qu'est-ce que",
                "додаток дієслова",
                "Qu'est-ce que tu fais?"
              ],
              [
                "Qu'est-ce qui",
                "підмет (для речей)",
                "Qu'est-ce qui se passe?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Quelle heure est-il?",
                "Котра година?"
              ],
              [
                "Qu'est-ce que tu veux manger?",
                "Що ти хочеш з'їсти?"
              ],
              [
                "Quels sont tes projets?",
                "Які твої плани?"
              ]
            ]
          }
        ],
        "titleEn": "Quel vs Qu'est-ce Que — B1"
      },
      {
        "id": "ni-ni",
        "title": "Ne... Ni... Ni — B1",
        "emoji": "↔️",
        "sections": [
          {
            "type": "intro",
            "text": "Конструкція ne...ni...ni означає \"ні..., ні...\". Артиклі un/une/des та частковий артикль перед іменником зазвичай опускаються.",
            "en": {
              "text": "The construction ne...ni...ni means \"neither... nor...\". The articles un/une/des and the partitive article before the noun are usually dropped."
            }
          },
          {
            "type": "formula",
            "title": "Структура",
            "rows": [
              [
                "",
                "sujet + ne + verbe + ni... ni...",
                "→ Je n'aime ni le café ni le thé."
              ]
            ],
            "en": {
              "title": "Structure"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Il n'a ni frère ni sœur.",
                "У нього немає ні брата, ні сестри."
              ],
              [
                "Je ne veux ni sortir ni rester.",
                "Я не хочу ні виходити, ні залишатись."
              ],
              [
                "Elle n'a ni le temps ni l'argent.",
                "У неї немає ні часу, ні грошей."
              ]
            ]
          }
        ],
        "titleEn": "Ne...Ni...Ni — B1"
      },
      {
        "id": "infinitif-passe",
        "title": "Infinitif Passé — B2",
        "emoji": "⏮️",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий інфінітив виражає дію, що завершилась до іншої дії, найчастіше після après. Утворюється: avoir/être (інфінітив) + дієприкметник минулого часу.",
            "en": {
              "text": "The past infinitive expresses an action completed before another, most often after après. Formed with avoir/être (infinitive) + past participle."
            }
          },
          {
            "type": "formula",
            "title": "avoir/être (infinitif) + participe passé",
            "rows": [
              [
                "avoir + participe",
                "après avoir mangé",
                "→ Après avoir mangé, il est sorti."
              ],
              [
                "être + participe",
                "après être parti(e)",
                "→ Après être partie, elle a appelé."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Après avoir fini ses devoirs, il a joué.",
                "Закінчивши домашнє завдання, він пограв."
              ],
              [
                "Après être arrivés, ils ont déjeuné.",
                "Прибувши, вони пообідали."
              ]
            ]
          }
        ],
        "titleEn": "Infinitif Passé (Past Infinitive) — B2"
      },
      {
        "id": "impersonal-expressions",
        "title": "Expressions Impersonnelles — A2",
        "emoji": "🌦️",
        "sections": [
          {
            "type": "intro",
            "text": "Безособові конструкції не мають конкретного підмета й вживаються лише з il: il y a (наявність), il fait (погода), il est (час, оцінка).",
            "en": {
              "text": "Impersonal constructions have no specific subject and are used only with il: il y a (existence), il fait (weather), il est (time, evaluation)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "il y a",
                "наявність",
                "Il y a beaucoup de monde ici."
              ],
              [
                "il fait + погода",
                "погода",
                "Il fait froid aujourd'hui."
              ],
              [
                "il est + час/оцінка",
                "час/оцінка",
                "Il est important d'étudier."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Il y a un problème avec la voiture.",
                "Є проблема з машиною."
              ],
              [
                "Il fait très chaud en été.",
                "Влітку дуже спекотно."
              ],
              [
                "Il est nécessaire d'arriver à l'heure.",
                "Необхідно прийти вчасно."
              ]
            ]
          }
        ],
        "titleEn": "Impersonal Expressions — A2"
      },
      {
        "id": "reported-questions",
        "title": "Discours Indirect : les Questions — B1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "У непрямих питаннях порядок слів прямий, знаки питання не вживають. Питання з питальним словом зберігають його (que → ce que); питання без питального слова з'єднують через si.",
            "en": {
              "text": "In indirect questions, the word order is the normal statement order, and question marks are not used. Questions with a question word keep it (que → ce que); yes/no questions are joined with si."
            }
          },
          {
            "type": "table",
            "title": "Структура",
            "rows": [
              [
                "з питальним словом",
                "Il m'a demandé où j'habitais.",
                "Він запитав мене, де я живу."
              ],
              [
                "\"qu'est-ce que\" → ce que",
                "Il m'a demandé ce que je voulais.",
                "Він запитав мене, що я хочу."
              ],
              [
                "без питального слова",
                "Il m'a demandé si je voulais venir.",
                "Він запитав мене, чи хочу я прийти."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "\"Où habites-tu?\" → Il m'a demandé où j'habitais.",
                "\"Де ти живеш?\" → Він запитав, де я живу."
              ],
              [
                "\"As-tu faim?\" → Il m'a demandé si j'avais faim.",
                "\"Ти голодний?\" → Він запитав, чи я голодний."
              ]
            ]
          }
        ],
        "titleEn": "Reported Speech: Questions — B1"
      },
      {
        "id": "devenir-rendre",
        "title": "Devenir, Rendre, Se Rendre — B2",
        "emoji": "🦋",
        "sections": [
          {
            "type": "intro",
            "text": "Французька не має одного дієслова \"ставати\" для всіх контекстів: devenir для самостійної зміни підмета, rendre + прикметник для зміни, спричиненої кимось іншим, se rendre compte de для усвідомлення.",
            "en": {
              "text": "French has no single verb for \"to become\" in every context: devenir for the subject's own change, rendre + adjective for a change caused by someone else, se rendre compte de for realizing something."
            }
          },
          {
            "type": "table",
            "title": "Вибір дієслова",
            "rows": [
              [
                "devenir",
                "власна зміна підмета",
                "Il est devenu médecin."
              ],
              [
                "rendre + прикм.",
                "зміна, спричинена кимось",
                "Cette nouvelle l'a rendu triste."
              ],
              [
                "se rendre compte de",
                "усвідомити",
                "Je me suis rendu compte de mon erreur."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Avec les années, il est devenu plus patient.",
                "З роками він став терплячішим."
              ],
              [
                "Cette musique me rend heureux.",
                "Ця музика робить мене щасливим."
              ],
              [
                "Elle s'est rendu compte qu'elle s'était trompée.",
                "Вона усвідомила, що помилилась."
              ]
            ]
          }
        ],
        "titleEn": "Devenir, Rendre, Se Rendre (To Become) — B2"
      },
      {
        "id": "participe-present",
        "title": "Participe Présent vs Gérondif — B2",
        "emoji": "🌳",
        "sections": [
          {
            "type": "intro",
            "text": "Participe présent (parlant, finissant) без en вживається як прикметник або для опису одночасної, але окремої дії того ж підмета чи іншого. Gérondif (en + participe présent) завжди стосується підмета головного дієслова.",
            "en": {
              "text": "The participe présent (parlant, finissant) without en is used as an adjective or to describe a simultaneous but separate action of the same or a different subject. The gérondif (en + participe présent) always relates to the subject of the main verb."
            }
          },
          {
            "type": "table",
            "title": "Порівняння",
            "rows": [
              [
                "participe présent",
                "як прикметник/окрема дія",
                "Une eau courante. / Habitant à Paris, il..."
              ],
              [
                "gérondif",
                "одночасна дія того ж підмета",
                "Il mange en regardant la télé."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Connaissant bien la ville, il nous a guidés.",
                "Добре знаючи місто, він провів нас."
              ],
              [
                "Elle chante en cuisinant.",
                "Вона співає, готуючи їжу."
              ]
            ]
          }
        ],
        "titleEn": "Participe Présent vs Gérondif — B2"
      },
      {
        "id": "subjonctif-vs-indicatif",
        "title": "Subjonctif ou Indicatif? — B2",
        "emoji": "⚖️",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі вирази вимагають subjonctif (сумнів, бажання, емоції), інші — indicatif (упевненість, факт). Вибір залежить від ступеня впевненості мовця.",
            "en": {
              "text": "Some expressions require the subjonctif (doubt, wish, emotion), others the indicatif (certainty, fact). The choice depends on the speaker's degree of certainty."
            }
          },
          {
            "type": "table",
            "title": "Порівняння",
            "rows": [
              [
                "subjonctif",
                "сумнів/бажання",
                "Je doute qu'il vienne."
              ],
              [
                "indicatif",
                "упевненість",
                "Je suis sûr qu'il vient."
              ],
              [
                "subjonctif",
                "після penser/croire у заперечній формі",
                "Je ne pense pas qu'il ait raison."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Je pense qu'il a raison.",
                "Я думаю, що він правий. (indicatif)"
              ],
              [
                "Je ne pense pas qu'il ait raison.",
                "Я не думаю, що він правий. (subjonctif)"
              ],
              [
                "Il est certain qu'elle viendra.",
                "Точно, що вона прийде. (indicatif)"
              ]
            ]
          }
        ],
        "titleEn": "Subjunctive or Indicative? — B2"
      }
    ]
  },
  {
    "id": "fluency",
    "title": "Вільне володіння",
    "titleEn": "Fluency",
    "emoji": "🎓",
    "rules": [
      {
        "id": "conditionnel-passe",
        "title": "Conditionnel Passé — B2",
        "emoji": "⏮️",
        "sections": [
          {
            "type": "intro",
            "text": "Складений умовний спосіб — для нездійснених у минулому гіпотез (\"я б зробив, але...\"), а також у головній частині нереальних умовних речень минулого часу. Утворюється: avoir/être у Conditionnel Présent + дієприкметник минулого часу.",
            "en": {
              "text": "The compound conditional — for unrealized past hypotheticals (\"I would have done, but...\"), and in the main clause of unreal past conditionals. Formed with avoir/être in the Conditionnel Présent + past participle."
            }
          },
          {
            "type": "formula",
            "title": "avoir/être (conditionnel) + participe passé",
            "rows": [
              [
                "j'",
                "aurais parlé",
                "→ J'aurais appelé, mais je n'avais pas ton numéro."
              ],
              [
                "tu",
                "aurais fini",
                "→ Tu aurais fini à temps."
              ],
              [
                "il / elle",
                "serait parti(e)",
                "→ Elle serait partie si elle avait pu."
              ],
              [
                "nous",
                "aurions travaillé",
                "→ Nous aurions travaillé plus vite ensemble."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Si j'avais su, je t'aurais prévenu.",
                "Якби я знав, я б тебе попередив."
              ],
              [
                "Je n'aurais pas dit ça.",
                "Я б такого не сказав."
              ],
              [
                "Nous serions arrivés plus tôt sans embouteillage.",
                "Ми б прибули раніше без затору."
              ]
            ]
          }
        ],
        "titleEn": "Conditionnel Passé (Past Conditional) — B2"
      },
      {
        "id": "tu-vs-vous",
        "title": "Tu vs Vous (formalité) — A2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Tu вживають у неформальному спілкуванні (друзі, родина, ровесники), vous — у формальному (незнайомі люди, начальство, ввічливе звертання) і завжди для звертання до кількох осіб.",
            "en": {
              "text": "Tu is used informally (friends, family, peers), vous formally (strangers, superiors, polite address) and always when addressing more than one person."
            }
          },
          {
            "type": "table",
            "title": "Порівняння",
            "rows": [
              [
                "tu",
                "2-а ос. одн. (неформ.)",
                "Comment vas-tu?"
              ],
              [
                "vous",
                "2-а ос. мн./ввічливе одн.",
                "Comment allez-vous?"
              ]
            ]
          },
          {
            "type": "note",
            "text": "Перехід з vous на tu (tutoyer) зазвичай відбувається за взаємною згодою, коли стосунки стають ближчими.",
            "en": {
              "text": "Switching from vous to tu (tutoyer) usually happens by mutual agreement as the relationship becomes closer."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Tu as des frères et sœurs? (informel)",
                "У тебе є брати чи сестри?"
              ],
              [
                "Avez-vous des frères et sœurs? (formel)",
                "У Вас є брати чи сестри?"
              ]
            ]
          }
        ],
        "titleEn": "Tu vs Vous (Formality) — A2"
      },
      {
        "id": "ce-qui-ce-que",
        "title": "\"Ce qui\" / \"Ce que\" — B1",
        "emoji": "◾",
        "sections": [
          {
            "type": "intro",
            "text": "\"Ce qui\" і \"ce que\" означають \"те, що\" — узагальнюють невизначений предмет/факт. Ce qui — підмет наступного дієслова, ce que — додаток.",
            "en": {
              "text": "\"Ce qui\" and \"ce que\" mean \"that which/what\" — they generalize an unspecified thing or fact. Ce qui is the subject of the following verb, ce que is the object."
            }
          },
          {
            "type": "table",
            "title": "Порівняння",
            "rows": [
              [
                "ce qui",
                "підмет",
                "Dis-moi ce qui se passe."
              ],
              [
                "ce que",
                "додаток",
                "Je ne sais pas ce que tu veux."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ce qui m'intéresse, c'est la musique.",
                "Те, що мене цікавить, — це музика."
              ],
              [
                "Je ne comprends pas ce que tu dis.",
                "Я не розумію того, що ти кажеш."
              ],
              [
                "C'est exactement ce que je pensais.",
                "Це саме те, що я думав."
              ]
            ]
          }
        ],
        "titleEn": "\"Ce Qui\" / \"Ce Que\" — B1"
      },
      {
        "id": "celui-celle",
        "title": "Pronoms Démonstratifs (celui, celle, ceux, celles) — B2",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Вказівні займенники celui/celle/ceux/celles замінюють іменник, щоб уникнути повторення, і завжди супроводжуються уточненням (de + іменник, відносним реченням або -ci/-là).",
            "en": {
              "text": "Demonstrative pronouns celui/celle/ceux/celles replace a noun to avoid repetition, and are always followed by a qualifier (de + noun, a relative clause, or -ci/-là)."
            }
          },
          {
            "type": "table",
            "title": "Форми",
            "rows": [
              [
                "celui / celle",
                "той/та (одн. ч./ж.)"
              ],
              [
                "ceux / celles",
                "ті (мн. ч./ж.)"
              ],
              [
                "celui-ci / celui-là",
                "цей / той (з двох)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ce livre est celui de Marie.",
                "Ця книга — Маріїна."
              ],
              [
                "Je préfère celui-ci à celui-là.",
                "Я волію цей, а не той."
              ],
              [
                "Prends celles que tu aimes.",
                "Бери ті, які тобі подобаються."
              ]
            ]
          }
        ],
        "titleEn": "Demonstrative Pronouns (Celui, Celle, Ceux, Celles) — B2"
      },
      {
        "id": "faire-causatif",
        "title": "Faire + Infinitif (causatif) — B2",
        "emoji": "🎬",
        "sections": [
          {
            "type": "intro",
            "text": "Faire + інфінітив означає \"змусити/спричинити, щоб щось сталося\" — той, хто виконує дію, вводиться через par або à.",
            "en": {
              "text": "Faire + infinitive means \"to make/cause something to happen\" — the person who performs the action is introduced with par or à."
            }
          },
          {
            "type": "formula",
            "title": "faire + infinitif",
            "rows": [
              [
                "",
                "faire + infinitif",
                "→ Il m'a fait rire."
              ],
              [
                "",
                "faire + infinitif + par/à",
                "→ Elle a fait réparer sa voiture par un mécanicien."
              ]
            ],
            "en": {
              "title": "faire + infinitive"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ce film m'a fait pleurer.",
                "Цей фільм змусив мене плакати."
              ],
              [
                "Elle a fait construire une maison.",
                "Вона наказала збудувати дім."
              ],
              [
                "Fais-moi savoir si tu viens.",
                "Дай мені знати, чи ти прийдеш."
              ]
            ]
          }
        ],
        "titleEn": "Faire + Infinitive (Causative) — B2"
      },
      {
        "id": "deja-encore-pas-encore",
        "title": "Déjà, Encore, Pas encore — A2",
        "emoji": "⏱️",
        "sections": [
          {
            "type": "intro",
            "text": "Déjà означає \"вже\", encore — \"ще\" (у стверджувальних реченнях), pas encore — \"ще не\" (у заперечних).",
            "en": {
              "text": "Déjà means \"already\", encore means \"still\" (in affirmative sentences), pas encore means \"not yet\" (in negative ones)."
            }
          },
          {
            "type": "table",
            "title": "Вживання",
            "rows": [
              [
                "déjà",
                "вже",
                "J'ai déjà mangé."
              ],
              [
                "encore",
                "ще",
                "Il habite encore à Paris."
              ],
              [
                "pas encore",
                "ще не",
                "Je n'ai pas encore fini."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Tu es déjà arrivé?",
                "Ти вже прийшов?"
              ],
              [
                "Je travaille encore.",
                "Я ще працюю."
              ],
              [
                "Je ne sais pas encore la réponse.",
                "Я ще не знаю відповіді."
              ]
            ]
          }
        ],
        "titleEn": "Déjà, Encore, Pas Encore — A2"
      },
      {
        "id": "si-tellement",
        "title": "Si vs Tellement — B1",
        "emoji": "📏",
        "sections": [
          {
            "type": "intro",
            "text": "Si вживають перед прикметниками й прислівниками (\"так, такий\"), tellement — теж перед прикметниками/прислівниками, але також перед \"de + іменник\" (\"стільки\").",
            "en": {
              "text": "Si is used before adjectives and adverbs (\"so, such\"), tellement is used the same way but also before \"de + noun\" (\"so much/many\")."
            }
          },
          {
            "type": "table",
            "title": "Порівняння",
            "rows": [
              [
                "si + прикм./присл.",
                "так, такий",
                "Il est si grand."
              ],
              [
                "tellement + прикм./присл.",
                "так, такий",
                "Il est tellement gentil."
              ],
              [
                "tellement de + ім.",
                "стільки",
                "Il y a tellement de monde."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Je ne savais pas que tu étais si sympathique.",
                "Я не знав, що ти такий приємний."
              ],
              [
                "J'ai tellement de travail cette semaine.",
                "У мене стільки роботи цього тижня."
              ],
              [
                "Je n'avais jamais vu tellement de monde.",
                "Я ніколи не бачив стільки людей."
              ]
            ]
          }
        ],
        "titleEn": "Si vs Tellement — B1"
      },
      {
        "id": "position-adjectif",
        "title": "Position de l'Adjectif — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Більшість прикметників стоять після іменника, але деякі змінюють значення залежно від позиції — перед іменником вони набувають переносного/суб'єктивного значення.",
            "en": {
              "text": "Most adjectives come after the noun, but some change meaning depending on position — before the noun they take on a figurative/subjective sense."
            }
          },
          {
            "type": "table",
            "title": "Зміна значення",
            "rows": [
              [
                "un ami ancien",
                "давній за часом друг",
                "un ancien ami",
                "колишній друг"
              ],
              [
                "un homme grand",
                "високий чоловік",
                "un grand homme",
                "видатна людина"
              ],
              [
                "une histoire propre",
                "чиста (фізично) історія",
                "sa propre histoire",
                "власна історія"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "C'est un grand écrivain.",
                "Він видатний письменник."
              ],
              [
                "Il a une voiture grande.",
                "У нього велика машина."
              ],
              [
                "C'est ma propre décision.",
                "Це моє власне рішення."
              ]
            ]
          }
        ],
        "titleEn": "Adjective Position — B2"
      },
      {
        "id": "prepositions-extra",
        "title": "Prépositions: Sur, Entre, Vers, Depuis — A2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Чотири додаткові прийменники місця й напрямку, що часто плутають: sur (на), entre (між), vers (у напрямку), depuis (з/від).",
            "en": {
              "text": "Four additional prepositions of place/direction that are often confused: sur (on), entre (between), vers (towards), depuis (from/since)."
            }
          },
          {
            "type": "table",
            "title": "Вживання",
            "rows": [
              [
                "sur",
                "на",
                "Le livre est sur la table."
              ],
              [
                "entre",
                "між",
                "C'est entre la chaise et la porte."
              ],
              [
                "vers",
                "у напрямку",
                "Nous marchons vers le parc."
              ],
              [
                "depuis",
                "з/від (місце/час)",
                "Depuis ici, on voit la mer."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Nous avons parlé du projet.",
                "Ми говорили про проєкт."
              ],
              [
                "Le village est entre deux montagnes.",
                "Село між двома горами."
              ],
              [
                "Allons vers le centre-ville.",
                "Ходімо в напрямку центру."
              ]
            ]
          }
        ],
        "titleEn": "Prepositions: Sur, Entre, Vers, Depuis — A2"
      },
      {
        "id": "cest-qui-cest-que",
        "title": "Structures Emphatiques \"C'est... qui/que\" — B2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Конструкція c'est... qui/que вживається для підкреслення певної частини речення (виокремлювальна конструкція). Qui — коли підкреслений елемент є підметом, que — коли додатком.",
            "en": {
              "text": "The construction c'est... qui/que is used to emphasize a particular part of a sentence (a cleft construction). Qui when the emphasized element is the subject, que when it is the object."
            }
          },
          {
            "type": "formula",
            "title": "Структура",
            "rows": [
              [
                "підмет",
                "C'est... qui...",
                "→ C'est Marie qui a appelé."
              ],
              [
                "додаток",
                "C'est... que...",
                "→ C'est ce livre que je veux."
              ]
            ],
            "en": {
              "title": "Structure"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "C'est toi qui as raison.",
                "Це ти маєш рацію."
              ],
              [
                "C'est le temps qui me manque.",
                "Мені бракує саме часу."
              ]
            ]
          }
        ],
        "titleEn": "Emphatic Structures \"C'est...Qui/Que\" — B2"
      },
      {
        "id": "grands-nombres",
        "title": "Grands Nombres Cardinaux — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Cent у множині втрачає -s перед іншим числом, але зберігає його, коли стоїть останнім. Mille ніколи не змінюється і не вживається з un.",
            "en": {
              "text": "Cent in the plural loses its -s before another number, but keeps it when it comes last. Mille never changes form and is never used with un."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "100",
                "cent"
              ],
              [
                "101",
                "cent un"
              ],
              [
                "200",
                "deux cents"
              ],
              [
                "250",
                "deux cent cinquante"
              ],
              [
                "1 000",
                "mille"
              ],
              [
                "1 000 000",
                "un million"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ça coûte cent euros.",
                "Це коштує сто євро."
              ],
              [
                "Il y avait cinq cents personnes au concert.",
                "На концерті було п'ятсот людей."
              ],
              [
                "La ville compte un million d'habitants.",
                "Місто має мільйон жителів."
              ]
            ]
          }
        ],
        "titleEn": "Large Cardinal Numbers — A2"
      },
      {
        "id": "pronoms-reflexifs-emphatiques",
        "title": "Pronoms Réfléchis Emphatiques (moi-même) — B2",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Même додають до наголошених займенників для підсилення зворотності дії — \"сам собі/сам себе\".",
            "en": {
              "text": "Même is added to stressed pronouns to emphasize the reflexive nature of the action — \"myself/yourself\", emphatically."
            }
          },
          {
            "type": "table",
            "title": "Форми",
            "rows": [
              [
                "moi-même",
                "я сам/сама"
              ],
              [
                "toi-même",
                "ти сам/сама"
              ],
              [
                "lui-même / elle-même",
                "він сам / вона сама"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Je me parle à moi-même quand je suis nerveux.",
                "Я говорю сам із собою, коли нервую."
              ],
              [
                "Il exige trop de lui-même.",
                "Він вимагає від себе занадто багато."
              ]
            ]
          }
        ],
        "titleEn": "Emphatic Reflexive Pronouns (Moi-Même) — B2"
      },
      {
        "id": "souhait-subjonctif",
        "title": "Souhaiter que + Subjonctif (souhaits) — B1",
        "emoji": "🌠",
        "sections": [
          {
            "type": "intro",
            "text": "Souhaiter que, vouloir que та подібні дієслова бажання завжди вимагають subjonctif у підрядному реченні (на відміну від espérer que, яке вживається з indicatif).",
            "en": {
              "text": "Souhaiter que, vouloir que and similar verbs of wishing always require the subjonctif in the subordinate clause (unlike espérer que, which takes the indicatif)."
            }
          },
          {
            "type": "table",
            "title": "Порівняння",
            "rows": [
              [
                "souhaiter que + subj.",
                "бажати, щоб",
                "Je souhaite que tu réussisses."
              ],
              [
                "espérer que + indic.",
                "сподіватись, що",
                "J'espère que tu réussiras."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Je souhaite que tout aille bien.",
                "Я бажаю, щоб усе було добре."
              ],
              [
                "Nous voulons qu'elle vienne avec nous.",
                "Ми хочемо, щоб вона пішла з нами."
              ]
            ]
          }
        ],
        "titleEn": "Souhaiter Que + Subjunctive (Wishes) — B1"
      },
      {
        "id": "accent-orthographe",
        "title": "Règles des Accents — A2",
        "emoji": "✍️",
        "sections": [
          {
            "type": "intro",
            "text": "Французькі діакритичні знаки (accents) можуть змінювати вимову голосної або розрізняти слова, що пишуться однаково.",
            "en": {
              "text": "French diacritics (accents) can change a vowel's pronunciation or distinguish words that are otherwise spelled the same."
            }
          },
          {
            "type": "table",
            "title": "Типи акцентів",
            "rows": [
              [
                "é (accent aigu)",
                "закрите е",
                "café, été"
              ],
              [
                "è / ê (accent grave/circonflexe)",
                "відкрите е",
                "mère, fête"
              ],
              [
                "ç (cédille)",
                "звук \"с\" перед a/o/u",
                "français, garçon"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "où (де) vs ou (або)",
                "accent розрізняє значення"
              ],
              [
                "à (прийменник) vs a (має, від avoir)",
                "accent розрізняє значення"
              ],
              [
                "français, à côté, déjà",
                "типові слова з accents"
              ]
            ]
          }
        ],
        "titleEn": "Accent Rules — A2"
      },
      {
        "id": "adverbes-frequence",
        "title": "Adverbes de Fréquence — A2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Прислівники частоти показують, як часто відбувається дія. Зазвичай стоять після дієслова в простих часах і між допоміжним дієсловом і дієприкметником у складених.",
            "en": {
              "text": "Adverbs of frequency show how often an action happens. They usually go after the verb in simple tenses, and between the auxiliary and the participle in compound tenses."
            }
          },
          {
            "type": "table",
            "title": "Шкала частоти",
            "rows": [
              [
                "toujours",
                "завжди"
              ],
              [
                "souvent",
                "часто"
              ],
              [
                "parfois / quelquefois",
                "іноді"
              ],
              [
                "rarement",
                "рідко"
              ],
              [
                "jamais",
                "ніколи"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Je bois toujours du café le matin.",
                "Я завжди п'ю каву вранці."
              ],
              [
                "Il a souvent voyagé en Europe.",
                "Він часто подорожував Європою."
              ],
              [
                "Je ne mange jamais de viande.",
                "Я ніколи не їм м'яса."
              ]
            ]
          }
        ],
        "titleEn": "Adverbs of Frequency — A2"
      }
    ]
  }
];
