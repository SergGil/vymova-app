// Vymova — data/grammar-data/grammar_lo.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_LO: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "ຄຳສັບພະນາມ — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У лаоській множину займенників зазвичай утворюють, додаючи слово \"ພວກ\" (phuak, \"група\") перед займенником однини.",
            "en": {
              "text": "In Lao, the plural of pronouns is usually formed by adding the word \"ພວກ\" (phuak, \"group\") before the singular pronoun."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ຂ້ອຍ (khoy)"
              ],
              [
                "ти",
                "ເຈົ້າ (chao)"
              ],
              [
                "він / вона",
                "ລາວ (lao)"
              ],
              [
                "ми",
                "ພວກເຮົາ (phuak hao)"
              ],
              [
                "ви",
                "ພວກເຈົ້າ (phuak chao)"
              ],
              [
                "вони",
                "ພວກເຂົາ (phuak khao)"
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
        "id": "vokjyd-6-nyai",
        "title": "ສຽງວັນນະຍຸດ 6 ສຽງ — A1",
        "emoji": "🎵",
        "sections": [
          {
            "type": "intro",
            "text": "Лаоська мова має шість тонів (у в'єнтьянській вимові) — на один більше, ніж п'ять тонів тайської, попри спільне походження обох мов з однієї тай-кадайської сім'ї.",
            "en": {
              "text": "Lao has six tones (in the Vientiane pronunciation) — one more than Thai's five tones, despite both languages sharing a common origin in the Tai-Kadai family."
            }
          },
          {
            "type": "table",
            "title": "Приклад тонового розрізнення",
            "rows": [
              [
                "ma (собака, низький тон) vs ma (кінь, середній тон)",
                "той самий запис звуків, різний тон і значення"
              ]
            ],
            "en": {
              "title": "Tone Distinction Example"
            }
          }
        ],
        "titleEn": "The Six Tones — A1"
      },
      {
        "id": "prestamos-franseses",
        "title": "ຄຳສັບຢືມຈາກພາສາຝຣັ່ງ — A2",
        "emoji": "🇫🇷",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від тайської, яку ніколи не колонізували, Лаос перебував під французьким колоніальним правлінням, тож лаоська містить помітний шар французьких запозичень у побутовій та адміністративній лексиці.",
            "en": {
              "text": "Unlike Thai, which was never colonized, Laos was under French colonial rule, so Lao contains a noticeable layer of French loanwords in everyday and administrative vocabulary."
            }
          },
          {
            "type": "table",
            "title": "Приклади запозичень",
            "rows": [
              [
                "ກາເຟ (kafeh) — з фр. café",
                "кава"
              ],
              [
                "ລົດ (lot, від 'automobile' опосередковано)",
                "машина"
              ]
            ],
            "en": {
              "title": "Loanword Examples"
            }
          }
        ],
        "titleEn": "French Loanwords — A2"
      },
      {
        "id": "klasifikatoroj",
        "title": "ຄຳລັກສະນະນາມ (Classifiers) — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Лічити предмети без класифікатора граматично неможливо: кожен іменник вимагає власного класифікаторного слова між числівником та іменником, залежно від форми чи категорії предмета.",
            "en": {
              "text": "Counting objects without a classifier is grammatically impossible: every noun requires its own classifier word between the number and the noun, depending on the object's shape or category."
            }
          },
          {
            "type": "formula",
            "title": "Формула лічби",
            "rows": [
              [
                "іменник + число + класифікатор",
                "ໝາ ສອງ ໂຕ (собака два ТВАР)",
                "дві собаки"
              ]
            ]
          }
        ],
        "titleEn": "Classifiers — A1"
      },
      {
        "id": "negasion-i-preguntas",
        "title": "ການປະຕິເສດ ແລະ ຄຳຖາມ — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється часткою ບໍ່ перед дієсловом; питання без питального слова утворюються часткою ບໍ່ у кінці речення — той самий склад виконує обидві функції залежно від позиції.",
            "en": {
              "text": "Negation is formed with the particle ບໍ່ before the verb; yes/no questions are formed with the same particle ບໍ່ at the end of the sentence — the same syllable performs both functions depending on position."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ຂ້ອຍບໍ່ຮູ້.",
                "Я не знаю."
              ],
              [
                "ເຈົ້າກິນເຂົ້າແລ້ວບໍ່?",
                "Ти вже поїв?"
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
        "id": "unmarked-present",
        "title": "ປັດຈຸບັນ (ບໍ່ມີເຄື່ອງໝາຍ) — A1",
        "emoji": "☀️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово в лаоській не змінюється за особами чи часом — без окремого маркера речення за замовчуванням розуміється як теперішній час чи загальний факт.",
            "en": {
              "text": "The verb in Lao doesn't change for person or tense — without a dedicated marker, a sentence is understood by default as present tense or a general fact."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ຂ້ອຍກິນເຂົ້າ.",
                "Я їм (рис/їжу)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Unmarked Present — A1"
      },
      {
        "id": "progressive-kamlang",
        "title": "ກຳລັງ (ໄລຍະດຳເນີນ) — A1",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія в момент мовлення позначається часткою ກຳລັງ (kamlang) перед дієсловом.",
            "en": {
              "text": "An action in progress at the moment of speaking is marked with the particle ກຳລັງ (kamlang) before the verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ຂ້ອຍກຳລັງກິນເຂົ້າ.",
                "Я саме їм."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Progressive with ກຳລັງ — A1"
      },
      {
        "id": "completed-laew",
        "title": "ແລ້ວ (ສຳເລັດແລ້ວ) — A1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Завершену дію позначає частка ແລ້ວ (laew), розміщена після дієслова чи в кінці речення — базовий спосіб виразити 'вже'.",
            "en": {
              "text": "A completed action is marked with the particle ແລ້ວ (laew), placed after the verb or at the end of the sentence — the basic way to express 'already'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ຂ້ອຍກິນເຂົ້າແລ້ວ.",
                "Я вже поїв."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Completed Action with ແລ້ວ — A1"
      },
      {
        "id": "future-cha",
        "title": "ຈະ (ອະນາຄົດ) — A1",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутню дію позначає частка ຈະ (cha) перед дієсловом — універсальний майбутній маркер без відмінювання за особами.",
            "en": {
              "text": "A future action is marked with the particle ຈະ (cha) before the verb — a universal future marker with no person conjugation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ຂ້ອຍຈະໄປ.",
                "Я піду."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Future with ຈະ — A1"
      },
      {
        "id": "experiential-koei",
        "title": "ເຄີຍ (ເຄີຍປະສົບການ) — A2",
        "emoji": "🗓️",
        "sections": [
          {
            "type": "intro",
            "text": "Досвід, набутий колись у минулому, незалежно від того, коли саме, позначається часткою ເຄີຍ (koei) перед дієсловом — 'бувало таке, що...'.",
            "en": {
              "text": "An experience gained at some unspecified point in the past is marked with the particle ເຄີຍ (koei) before the verb — 'have ever done'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ຂ້ອຍເຄີຍໄປລາວ.",
                "Я колись бував у Лаосі."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Experiential with ເຄີຍ — A2"
      },
      {
        "id": "past-marker-dai",
        "title": "ໄດ້ (ອະດີດ/ສຳເລັດ) — A2",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Частка ໄດ້ (dai) перед дієсловом підкреслює, що дія справді відбулася в минулому — часто використовується у формальнішому чи письмовому стилі поряд з ແລ້ວ.",
            "en": {
              "text": "The particle ໄດ້ (dai) before the verb emphasizes that an action did occur in the past — often used in a more formal or written style alongside ແລ້ວ."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ລາວໄດ້ໄປໂຮງຮຽນ.",
                "Він ходив до школи (справді відбулося)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Past Marker with ໄດ້ — A2"
      },
      {
        "id": "continuous-negation-nyang",
        "title": "ຍັງ...ບໍ່ (ຍັງບໍ່ທັນ) — A2",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "'Ще не' утворюється комбінацією ຍັງ (yang, 'ще') і заперечення ບໍ່ навколо дієслова — окрема конструкція, відмінна від простого заперечення.",
            "en": {
              "text": "'Not yet' is formed with the combination of ยัง (yang, 'still') and the negation ບໍ່ around the verb — a distinct construction from simple negation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ຂ້ອຍຍັງບໍ່ໄດ້ກິນ.",
                "Я ще не їв."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "'Not Yet' with ຍັງ...ບໍ່ — A2"
      },
      {
        "id": "habitual-mak",
        "title": "ມັກ (ນິໄສ/ເລື້ອຍໆ) — A2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Звичну, регулярно повторювану дію позначає частка ມັກ (mak) перед дієсловом — окремо від значення 'подобатися', яке те саме слово має самостійно.",
            "en": {
              "text": "A habitual, regularly repeated action is marked with the particle ມັກ (mak) before the verb — separate from the 'to like' meaning the same word carries on its own."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ລາວມັກກິນເຂົ້າໜຽວ.",
                "Він зазвичай їсть клейкий рис."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Habitual with ມັກ — A2"
      },
      {
        "id": "imperative-lo",
        "title": "ການສັ່ງ (Imperative) — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказ передається голим дієсловом без підмета; для пом'якшення прохання додають частку ເດີ້ (doe) в кінці речення.",
            "en": {
              "text": "A command is expressed with the bare verb and no subject; a request is softened by adding the particle ເດີ້ (doe) at the end of the sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ກິນເຂົ້າເດີ້.",
                "Їж, будь ласка."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Imperative — A2"
      },
      {
        "id": "prohibitive-ya",
        "title": "ຢ່າ (ຫ້າມ) — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заборона утворюється часткою ຢ່າ (ya) перед дієсловом — окрема заборонна частка, відмінна від звичайного заперечення ບໍ່.",
            "en": {
              "text": "A prohibition is formed with the particle ຢ່າ (ya) before the verb — a dedicated prohibitive particle, distinct from ordinary negation ບໍ່."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ຢ່າໄປ!",
                "Не йди!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Prohibitive with ຢ່າ — A2"
      },
      {
        "id": "ability-modal-dai-post",
        "title": "...ໄດ້ (ຄວາມສາມາດ) — B1",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Слово ໄດ້, поставлене після дієслова (на відміну від маркера минулого часу, що стоїть перед дієсловом), означає здатність чи можливість — та сама форма, протилежна позиція, інша функція.",
            "en": {
              "text": "The word ໄດ້, placed after the verb (unlike the past-tense marker, which stands before the verb), means ability or possibility — the same form, opposite position, different function."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ຂ້ອຍເວົ້າພາສາລາວໄດ້.",
                "Я вмію говорити лаоською."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "...ໄດ້ for Ability — B1"
      },
      {
        "id": "desiderative-yak",
        "title": "ຢາກ (ຄວາມຢາກ) — A1",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Бажання виражається часткою ຢາກ (yak) перед дієсловом — буквально 'хотіти зробити щось'.",
            "en": {
              "text": "A wish is expressed with the particle ຢາກ (yak) before the verb — literally 'to want to do something'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ຂ້ອຍຢາກກິນເຂົ້າ.",
                "Я хочу їсти."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Desiderative with ຢາກ — A1"
      },
      {
        "id": "near-future-si",
        "title": "ຊິ (ອະນາຄົດໃກ້, ພາສາເວົ້າ) — B1",
        "emoji": "🔜",
        "sections": [
          {
            "type": "intro",
            "text": "У розмовному мовленні часто замінюють майбутню частку ຈະ на розмовний варіант ຊິ (si), що звучить менш формально й уживається переважно в побутовій розмові.",
            "en": {
              "text": "In colloquial speech, the future particle ຈະ is often replaced with the colloquial variant ຊິ (si), which sounds less formal and is used mostly in everyday conversation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ຂ້ອຍຊິໄປຕະຫຼາດ.",
                "Я скоро піду на ринок (розмовний варіант)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Colloquial Near Future with ຊິ — B1"
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
        "id": "topic-comment-structure",
        "title": "ໂຄງສ້າງຫົວຂໍ້-ຄຳອະທິບາຍ — B1",
        "emoji": "🗣️",
        "sections": [
          {
            "type": "intro",
            "text": "Речення часто будується як 'тема-коментар': тема, про яку йдеться, виноситься на початок, а решта речення коментує чи описує її, незалежно від того, чи є вона граматичним підметом.",
            "en": {
              "text": "A sentence is often built as 'topic-comment': the topic being discussed is fronted, and the rest of the sentence comments on or describes it, regardless of whether it's the grammatical subject."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ເຂົ້າໜຽວ, ຂ້ອຍມັກ.",
                "Клейкий рис — я люблю (тема винесена наперед)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Topic-Comment Structure — B1"
      },
      {
        "id": "word-order-svo-basic",
        "title": "ລຳດັບຄຳ: ປະທານ-ກະລິຍາ-ກຳມະ — A1",
        "emoji": "↔️",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів — підмет-присудок-додаток, без відмінкових закінчень чи узгодження, що позначали б граматичні ролі, — саме порядок несе все смислове навантаження.",
            "en": {
              "text": "The basic word order is subject-verb-object, with no case endings or agreement marking grammatical roles — word order alone carries the full meaning load."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ຂ້ອຍກິນປາ.",
                "Я їм рибу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Word Order: SVO — A1"
      },
      {
        "id": "classifiers-deeper-categories",
        "title": "ຄຳລັກສະນະນາມຕາມປະເພດ — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Різні класифікатори обслуговують різні категорії предметів: ໂຕ для тварин і одягу, ຄົນ для людей, ຫົວ для рогатої худоби, ອັນ для дрібних предметів загалом.",
            "en": {
              "text": "Different classifiers serve different object categories: ໂຕ for animals and clothing, ຄົນ for people, ຫົວ for horned livestock, ອັນ for small objects in general."
            }
          },
          {
            "type": "table",
            "title": "Приклади класифікаторів",
            "rows": [
              [
                "ໝາ ໜຶ່ງ ໂຕ (одна собака)",
                "класифікатор для тварин"
              ],
              [
                "ຄົນ ສາມ ຄົນ (три людини)",
                "класифікатор для людей"
              ]
            ],
            "en": {
              "title": "Classifier Examples"
            }
          }
        ],
        "titleEn": "Classifiers by Category — A2"
      },
      {
        "id": "possessive-khong",
        "title": "ຂອງ (ຄວາມເປັນເຈົ້າຂອງ) — A1",
        "emoji": "🏠",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійність передається зв'язкою ຂອງ (khong, 'з, від'), розміщеною між предметом і власником; сама зв'язка часто опускається в розмовному мовленні.",
            "en": {
              "text": "Possession is expressed with the linker ຂອງ (khong, 'of'), placed between the object and the possessor; the linker is often dropped in colloquial speech."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ປື້ມຂອງຂ້ອຍ.",
                "Моя книга."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Possessive with ຂອງ — A1"
      },
      {
        "id": "adjectives-as-stative-verbs",
        "title": "ຄຳຄຸນນາມເປັນກະລິຍາ — A2",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники поводяться як окремий клас дієслів стану — вони самі є присудком речення й не потребують дієслова-зв'язки 'бути'.",
            "en": {
              "text": "Adjectives behave as a distinct class of stative verbs — they themselves function as the predicate of the sentence and require no 'to be' copula."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ເຮືອນໃຫຍ່.",
                "Дім великий (буквально 'дім great-is')."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adjectives as Stative Verbs — A2"
      },
      {
        "id": "comparison-kwa",
        "title": "ກວ່າ (ການປຽບທຽບ) — A2",
        "emoji": "⚖️",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняння вищого ступеня утворюється прикметником-дієсловом плюс частка ກວ່າ (kwa) плюс об'єкт порівняння — без окремого суфікса на прикметнику.",
            "en": {
              "text": "Comparison of superiority is formed with the stative verb/adjective plus the particle ກວ່າ (kwa) plus the compared object — with no dedicated suffix on the adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ລາວສູງກວ່າຂ້ອຍ.",
                "Він вищий за мене."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparison with ກວ່າ — A2"
      },
      {
        "id": "superlative-thisut",
        "title": "ທີ່ສຸດ (ຂັ້ນສູງສຸດ) — B1",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь додає слово ທີ່ສຸດ (thi sut, 'найбільше') після прикметника-дієслова.",
            "en": {
              "text": "The superlative adds the word ທີ່ສຸດ (thi sut, 'the most') after the stative verb/adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ລາວສູງທີ່ສຸດ.",
                "Він найвищий."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Superlative with ທີ່ສຸດ — B1"
      },
      {
        "id": "equality-comparison-thaokan",
        "title": "ເທົ່າກັນ (ເທົ່າທຽມ) — B1",
        "emoji": "🟰",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняння рівності виражається зворотом ເທົ່າກັນ (thao kan, 'однаково'), доданим після обох порівнюваних предметів.",
            "en": {
              "text": "Comparison of equality is expressed with the phrase ເທົ່າກັນ (thao kan, 'equally'), added after both compared items."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ສອງຄົນນີ້ສູງເທົ່າກັນ.",
                "Ці двоє однакового зросту."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Equality Comparison — B1"
      },
      {
        "id": "numerals-cardinal",
        "title": "ຕົວເລກ — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Кількісні числівники мають власні лаоські корені; після одиниці, десятка чи сотні числівник завжди вимагає класифікатора для лічби предметів.",
            "en": {
              "text": "Cardinal numbers have their own native Lao roots; after a unit, ten, or hundred, the number always requires a classifier for counting objects."
            }
          },
          {
            "type": "table",
            "title": "Числа",
            "rows": [
              [
                "ໜຶ່ງ, ສອງ, ສາມ",
                "один, два, три"
              ],
              [
                "ສິບ, ຮ້ອຍ",
                "десять, сто"
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
        "title": "ຕົວເລກລຳດັບ — A2",
        "emoji": "🥇",
        "sections": [
          {
            "type": "intro",
            "text": "Порядкові числівники утворюються часткою ທີ່ (thi) перед кількісним числівником — той самий склад, що й у відносному займеннику, але з іншою функцією.",
            "en": {
              "text": "Ordinal numbers are formed with the particle ທີ່ (thi) before the cardinal number — the same syllable as in the relative pronoun, but with a different function."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ມື້ທີ່ໜຶ່ງ",
                "перший день"
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
        "id": "reduplication-for-plurality-intensity",
        "title": "ການຊ້ຳຄຳ (Reduplication) — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Подвоєння прикметника-дієслова підсилює його значення чи натякає на розмаїття/множинність — граматична стратегія без окремого афікса.",
            "en": {
              "text": "Doubling a stative verb/adjective intensifies its meaning or hints at variety/plurality — a grammatical strategy with no dedicated affix."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ງາມໆ",
                "дуже гарний (посилене значення)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reduplication — B1"
      },
      {
        "id": "question-words-in-situ",
        "title": "ຄຳຖາມຢູ່ບ່ອນເດີມ (In-Situ) — A2",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питальні слова лишаються саме там, де стояло б слово, яке вони заміняють, — без винесення на початок речення, на відміну від багатьох європейських мов.",
            "en": {
              "text": "Question words stay exactly where the replaced word would stand — with no fronting to the beginning of the sentence, unlike many European languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ເຈົ້າໄປໃສ?",
                "Куди ти йдеш? (питальне слово в кінці, на місці додатка)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Question Words In-Situ — A2"
      },
      {
        "id": "relative-clause-thi",
        "title": "ອະນຸປະໂຫຍກສຳພັນ ທີ່ — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Відносне підрядне речення вводиться незмінним словом ທີ່ (thi), яке заміняє будь-який відмінюваний відносний займенник.",
            "en": {
              "text": "A relative clause is introduced by the invariant word ທີ່ (thi), which replaces any declined relative pronoun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ຄົນທີ່ເວົ້າພາສາລາວ.",
                "Людина, яка говорить лаоською."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Clauses with ທີ່ — B1"
      },
      {
        "id": "serial-verb-direction",
        "title": "ກະລິຍາຕໍ່ເນື່ອງ: ທິດທາງ — B1",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "Напрямок дії позначається другим дієсловом, доданим одразу після основного, без сполучника — ໄປ ('йти геть') чи ມາ ('прийти сюди') вказують напрямок руху.",
            "en": {
              "text": "The direction of an action is marked by a second verb added right after the main one, with no conjunction — ໄປ ('go away') or ມາ ('come here') indicate the direction of motion."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ເອົາປື້ມມາ.",
                "Принеси книгу (буквально 'взяти книгу прийти')."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Serial Verbs: Direction — B1"
      },
      {
        "id": "sentence-final-particles-politeness",
        "title": "ຄຳຕິດທ້າຍປະໂຫຍກ — A2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Частки ເດີ້ (пом'якшення прохання) і ເນາະ (пошук згоди, 'чи не так?') завершують речення й додають відтінок ставлення без зміни граматичного значення.",
            "en": {
              "text": "The particles ເດີ້ (softening a request) and ເນາະ (seeking agreement, 'isn't that right?') close a sentence and add a shade of attitude without changing the grammatical meaning."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ແຊບເນາະ?",
                "Смачно, чи не так?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Sentence-Final Particles — A2"
      },
      {
        "id": "pronoun-register-system",
        "title": "ພະນາມຕາມສະຖານະພາບ — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Вибір займенника залежить від відносного віку й соціального статусу співрозмовників; часто замість займенника вживають родинні терміни ('старший брате', 'тітонько') відповідно до відносного віку.",
            "en": {
              "text": "Pronoun choice depends on the relative age and social status of the speakers; kinship terms ('older brother', 'auntie') are often used instead of a pronoun according to relative age."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ອ້າຍໄປໃສ?",
                "Куди ти йдеш? (до старшого чоловіка, буквально 'старший брате')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Pronouns by Social Register — B1"
      },
      {
        "id": "plural-with-phuak-and-lai",
        "title": "ພະຫຸພົດ: ພວກ ແລະ ຫຼາຍ — A2",
        "emoji": "➕",
        "sections": [
          {
            "type": "intro",
            "text": "Крім префікса ພວກ перед займенниками, множинність іменників часто виражається словом ຫຼາຍ ('багато') чи просто контекстом — самого іменника ніколи не позначають окремим суфіксом множини.",
            "en": {
              "text": "Besides the prefix ພວກ before pronouns, the plurality of nouns is often expressed with the word ຫຼາຍ ('many') or simply by context — the noun itself is never marked with a dedicated plural suffix."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ໝາຫຼາຍໂຕ.",
                "Багато собак."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Plurality with ພວກ and ຫຼາຍ — A2"
      },
      {
        "id": "demonstratives-lo",
        "title": "ຄຳຊີ້ນີ້-ນັ້ນ — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Вказівні слова ນີ້ ('цей') і ນັ້ນ ('той') ставляться після іменника, а не перед ним, як в українській чи англійській.",
            "en": {
              "text": "The demonstratives ນີ້ ('this') and ນັ້ນ ('that') are placed after the noun, not before it as in Ukrainian or English."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ປື້ມນີ້.",
                "Ця книга."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Demonstratives ນີ້/ນັ້ນ — A1"
      },
      {
        "id": "locative-prepositions",
        "title": "ຄຳບອກສະຖານທີ່ — A2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Прийменники місця ໃນ (усередині), ເທິງ (на, зверху), ໃຕ້ (під) стоять перед іменником, а вказівка на конкретну точку часто додатково уточнюється словом ບ່ອນ ('місце').",
            "en": {
              "text": "Locative prepositions ໃນ (inside), ເທິງ (on top of), ໃຕ້ (under) precede the noun, and pointing to a specific spot is often further clarified with the word ບ່ອນ ('place')."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ປື້ມຢູ່ເທິງໂຕະ.",
                "Книга на столі."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Locative Prepositions — A2"
      },
      {
        "id": "time-expressions-no-tense",
        "title": "ຄຳບອກເວລາແທນການປ່ຽນກະລິຍາ — A2",
        "emoji": "🕐",
        "sections": [
          {
            "type": "intro",
            "text": "Оскільки дієслово не змінюється за часом, часові прислівники (ມື້ວານນີ້ 'учора', ມື້ອື່ນ 'завтра') самі несуть увесь тягар вказування, коли відбувається дія.",
            "en": {
              "text": "Since the verb doesn't change for tense, time adverbs (ມື້ວານນີ້ 'yesterday', ມື້ອື່ນ 'tomorrow') carry the entire burden of indicating when an action happens."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ມື້ວານນີ້ຂ້ອຍໄປຕະຫຼາດ.",
                "Учора я ходив на ринок."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Time Words Instead of Tense — A2"
      },
      {
        "id": "copula-pen-and-maen",
        "title": "ສອງກະລິຍາ 'ເປັນ' ແລະ 'ແມ່ນ' — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Лаоська має два різні дієслова-зв'язки: ເປັນ (pen) для належності до категорії чи професії, ແມ່ນ (maen) для ствердження тотожності чи наголошеного 'так, це саме так'.",
            "en": {
              "text": "Lao has two distinct copula verbs: ເປັນ (pen) for category or profession membership, ແມ່ນ (maen) for asserting identity or an emphatic 'yes, that's exactly it'."
            }
          },
          {
            "type": "table",
            "title": "Розподіл функцій",
            "rows": [
              [
                "ລາວເປັນໝໍ. (категорія)",
                "Він лікар."
              ],
              [
                "ນີ້ແມ່ນປື້ມຂ້ອຍ. (тотожність)",
                "Це саме моя книга."
              ]
            ],
            "en": {
              "title": "Division of Labor"
            }
          }
        ],
        "titleEn": "Two Copulas: ເປັນ and ແມ່ນ — B1"
      },
      {
        "id": "existential-mi",
        "title": "ມີ (ການມີຢູ່ ແລະ ຄວາມເປັນເຈົ້າຂອງ) — A1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово ມີ (mi) виконує подвійну роль: 'існувати, бути в наявності' і 'мати, володіти' — те саме слово без розрізнення цих двох значень.",
            "en": {
              "text": "The verb ມີ (mi) performs a double role: 'to exist, be present' and 'to have, possess' — the same word with no distinction between the two meanings."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ຂ້ອຍມີປື້ມ.",
                "У мене є книга."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "ມີ for Existence and Possession — A1"
      },
      {
        "id": "negative-existential-bomi",
        "title": "ບໍ່ມີ (ບໍ່ມີຢູ່) — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення існування чи володіння утворюється простим додаванням ບໍ່ перед ມີ — без окремого заперечного дієслова.",
            "en": {
              "text": "Negating existence or possession is formed by simply adding ບໍ່ before ມີ — with no dedicated negative verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ຂ້ອຍບໍ່ມີເງິນ.",
                "У мене немає грошей."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "ບໍ່ມີ for Non-Existence — A1"
      },
      {
        "id": "adverb-placement-post-verbal",
        "title": "ຕຳແໜ່ງຄຳກິລິຍາວິເສດ — B1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Прислівники способу дії зазвичай стоять одразу після дієслова, якому вони підпорядковані, а не перед ним, як в українській.",
            "en": {
              "text": "Manner adverbs typically stand right after the verb they modify, rather than before it as in Ukrainian."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ລາວແລ່ນໄວ.",
                "Він біжить швидко."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Post-Verbal Adverb Placement — B1"
      },
      {
        "id": "coordinating-conjunctions",
        "title": "ຄຳສັນທານ: ແລະ, ຫຼື, ແຕ່ — A1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Сурядні сполучники ແລະ ('і'), ຫຼື ('або'), ແຕ່ ('але') з'єднують слова й речення так само, як в українській, не впливаючи на порядок слів навколо себе.",
            "en": {
              "text": "Coordinating conjunctions ແລະ ('and'), ຫຼື ('or'), ແຕ່ ('but') connect words and clauses just as in Ukrainian, without affecting the word order around them."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ຂ້ອຍແລະລາວ.",
                "Я і він."
              ],
              [
                "ດີແຕ່ແພງ.",
                "Гарне, але дороге."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Coordinating Conjunctions — A1"
      },
      {
        "id": "serial-verb-benefactive-hai",
        "title": "ກະລິຍາຕໍ່ເນື່ອງ: ໃຫ້ (ຜົນປະໂຫຍດ) — B1",
        "emoji": "🎁",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово ໃຫ້ ('давати'), додане після основного дієслова, позначає, на чию користь виконується дія, — без окремого прийменника 'для'.",
            "en": {
              "text": "The verb ໃຫ້ ('to give'), added after the main verb, marks who benefits from the action — with no separate preposition 'for'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ຂ້ອຍຊື້ປື້ມໃຫ້ລາວ.",
                "Я купую книгу для нього."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Serial Verb ໃຫ້ for Benefaction — B1"
      },
      {
        "id": "passive-thuk",
        "title": "ຖືກ (ຮູບກະລິຍາຖືກກະທຳ) — B1",
        "emoji": "😣",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний стан утворюється допоміжним ຖືກ (thuk), яке за походженням означає 'торкатися, зазнавати', і тому пасив з ним завжди має негативний, потерпілий відтінок.",
            "en": {
              "text": "The passive voice is formed with the auxiliary ຖືກ (thuk), which originally means 'to touch, to be struck by', so the passive built with it always carries a negative, adversative shade."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ລາວຖືກຕີ.",
                "Його побили (потерпів від дії)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adversative Passive with ຖືກ — B1"
      },
      {
        "id": "causative-hai",
        "title": "ໃຫ້ (ການສາເຫດ/ອະນຸຍາດ) — B1",
        "emoji": "⚡",
        "sections": [
          {
            "type": "intro",
            "text": "Те саме слово ໃຫ້ у позиції перед другим дієсловом виражає каузацію чи дозвіл — 'змусити' або 'дозволити комусь зробити щось'.",
            "en": {
              "text": "The same word ໃຫ້ placed before a second verb expresses causation or permission — 'to make' or 'to let someone do something'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ແມ່ໃຫ້ລູກກິນເຂົ້າ.",
                "Мати змушує/дозволяє дитині їсти."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Causative/Permissive with ໃຫ້ — B1"
      },
      {
        "id": "no-gendered-politeness-particles",
        "title": "ບໍ່ມີຄຳສຸພາບແຍກຕາມເພດ — B2",
        "emoji": "⚥",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від тайської з її суворо розділеними за статтю частками ครับ (чоловіче) і ค่ะ (жіноче), лаоські ввічливі частки ເດີ້ і ເນາະ не розрізняють статі мовця взагалі.",
            "en": {
              "text": "Unlike Thai, with its strictly gender-split particles ครับ (male) and ค่ะ (female), Lao's polite particles ເດີ້ and ເນາະ don't distinguish the speaker's gender at all."
            }
          },
          {
            "type": "table",
            "title": "Лаоська проти тайської",
            "rows": [
              [
                "ເດີ້ (лаоська, стать не важлива)",
                "уживає будь-хто"
              ],
              [
                "ครับ/ค่ะ (тайська, стать обов'язкова)",
                "чоловік/жінка мусять обирати"
              ]
            ],
            "en": {
              "title": "Lao vs. Thai"
            }
          }
        ],
        "titleEn": "No Gender-Split Politeness Particles — B2"
      },
      {
        "id": "royal-vocabulary-reduced-vs-thai",
        "title": "ຄຳສັບລາຊະການໜ້ອຍກວ່າໄທ — B2",
        "emoji": "👑",
        "sections": [
          {
            "type": "intro",
            "text": "Хоча лаоська колись мала власний королівський реєстр лексики, після скасування монархії 1975 року він майже вийшов з ужитку — на відміну від тайської, яка досі активно вживає розлогу ราชาศัพท์ (королівську лексику) в ЗМІ.",
            "en": {
              "text": "While Lao once had its own royal vocabulary register, after the monarchy's abolition in 1975 it has nearly fallen out of use — unlike Thai, which still actively uses its elaborate ราชาศัพท์ (royal vocabulary) in the media."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ສະເດັດ (застаріле королівське 'йти', майже не вживається)",
                "рідковживана королівська лексика"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reduced Royal Vocabulary vs. Thai — B2"
      },
      {
        "id": "thai-lao-diglossia",
        "title": "ດິກລອສີ ລາວ-ໄທ — B2",
        "emoji": "📺",
        "sections": [
          {
            "type": "intro",
            "text": "Через десятиліття впливу тайського телебачення й радіо більшість лаосців розуміє усну тайську, тоді як письмова лаоська лишається виразно окремою системою — асиметричне мовне співіснування.",
            "en": {
              "text": "Through decades of Thai television and radio influence, most Lao speakers understand spoken Thai, while written Lao remains a distinctly separate system — an asymmetric language coexistence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ລາວເຂົ້າໃຈໄທໄດ້ ແຕ່ຂຽນລາວ.",
                "Лаосці розуміють тайську, але пишуть лаоською."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Thai-Lao Diglossia — B2"
      },
      {
        "id": "lao-script-simplified-vs-thai",
        "title": "ອັກສອນລາວ: ງ່າຍກວ່າໄທ — B1",
        "emoji": "✍️",
        "sections": [
          {
            "type": "intro",
            "text": "Лаоська писемність має менше приголосних символів, ніж тайська, і не позначає складних консонантних кластерів так само детально — писемна реформа ХХ ст. свідомо спростила орфографію.",
            "en": {
              "text": "Lao script has fewer consonant symbols than Thai and doesn't mark complex consonant clusters in as much detail — a 20th-century spelling reform deliberately simplified the orthography."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ລາວ (простіший запис) vs тайський еквівалент з більшою кількістю літер",
                "спрощена лаоська орфографія"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Simplified Lao Script vs. Thai — B1"
      },
      {
        "id": "loanwords-pali-sanskrit-different-adaptation",
        "title": "ຄຳຢືມບາລີ-ສັນສະກິດ: ການປັບປ່ຽນທີ່ຕ່າງກັນ — B2",
        "emoji": "🕉️",
        "sections": [
          {
            "type": "intro",
            "text": "Буддійські запозичення з палі й санскриту прийшли в лаоську й тайську окремими історичними шляхами, тому однакові слова часто мають різне написання й вимову в кожній мові.",
            "en": {
              "text": "Buddhist loanwords from Pali and Sanskrit entered Lao and Thai through separate historical routes, so identical words often have different spelling and pronunciation in each language."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ວິທະຍາລັຍ (лаоська адаптація 'коледж' з санскриту)",
                "власний шлях адаптації, відмінний від тайського"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Pali/Sanskrit Loanwords: Different Adaptation — B2"
      },
      {
        "id": "serial-verb-manner",
        "title": "ກະລິຍາຕໍ່ເນື່ອງ: ລັກສະນະ — B2",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Спосіб виконання дії часто передають другим дієсловом одразу після першого, без сполучника, — ланцюжок дієслів описує одну складену подію.",
            "en": {
              "text": "The manner of performing an action is often expressed with a second verb right after the first one, with no conjunction — the verb chain describes one compound event."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ລາວແລ່ນຫນີ.",
                "Він втік бігом (буквально 'бігти втекти')."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Serial Verbs: Manner — B2"
      },
      {
        "id": "topic-fronting-for-emphasis",
        "title": "ການຍົກຫົວຂໍ້ຂຶ້ນໜ້າເພື່ອເນັ້ນ — B2",
        "emoji": "🔝",
        "sections": [
          {
            "type": "intro",
            "text": "Будь-який елемент речення — навіть прямий додаток — можна винести на початок для наголосу, залишаючи слід у вигляді паузи чи інтонаційного зламу, без зміни форми слова.",
            "en": {
              "text": "Any element of the sentence — even the direct object — can be fronted for emphasis, leaving a trace as a pause or intonation break, with no change in the word's form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ປາ, ຂ້ອຍບໍ່ກິນ.",
                "Рибу я не їм (наголос на 'риба')."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Topic Fronting for Emphasis — B2"
      },
      {
        "id": "classifier-omission-in-casual-speech",
        "title": "ການລະຄຳລັກສະນະນາມໃນພາສາເວົ້າ — B2",
        "emoji": "🗨️",
        "sections": [
          {
            "type": "intro",
            "text": "У швидкому розмовному мовленні класифікатор іноді опускають, особливо коли предмет уже очевидний з контексту, — у формальному чи письмовому стилі це неприпустимо.",
            "en": {
              "text": "In rapid colloquial speech the classifier is sometimes dropped, especially when the item is already obvious from context — this is unacceptable in a formal or written style."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ເອົາສອງ. (класифікатор опущено, розмовне)",
                "Дай два (з них)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Classifier Omission in Casual Speech — B2"
      },
      {
        "id": "kinship-terms-as-pronouns",
        "title": "ຄຳສັບຍາດພີ່ນ້ອງເປັນພະນາມ — B1",
        "emoji": "👪",
        "sections": [
          {
            "type": "intro",
            "text": "Родинні терміни ('старший брат/сестра', 'молодший', 'тітонько', 'дядечку') регулярно заміняють особові займенники навіть між незнайомими людьми, орієнтуючись на приблизний вік співрозмовника.",
            "en": {
              "text": "Kinship terms ('older sibling', 'younger sibling', 'auntie', 'uncle') regularly replace personal pronouns even between strangers, based on the interlocutor's approximate age."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ນ້ອງຢາກກິນຫຍັງ?",
                "Що ти хочеш їсти? (до молодшого, буквально 'молодший братику')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Kinship Terms as Pronouns — B1"
      },
      {
        "id": "numeral-classifier-idiomatic-set-phrases",
        "title": "ຄຳລັກສະນະນາມສະເພາະ — B2",
        "emoji": "🎎",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька застиглих виразів вимагають особливого, ідіоматичного класифікатора, відмінного від того, що очікувано для семантичної категорії предмета, — просто традиція, яку слід запам'ятати.",
            "en": {
              "text": "A few fixed expressions require a special, idiomatic classifier different from what would be expected for the item's semantic category — simply a convention to be memorized."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ພະພຸດທະຮູບ ອົງ ໜຶ່ງ (одна статуя Будди, з особливим класифікатором ອົງ)",
                "класифікатор для священних предметів"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Idiomatic Classifiers — B2"
      },
      {
        "id": "double-negative-emphasis",
        "title": "ບໍ່...ເລີຍ (ການເນັ້ນການປະຕິເສດ) — B1",
        "emoji": "❌",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення підсилюється словом ເລີຍ ('взагалі') в кінці речення — 'зовсім не, ніскілечки не', сильніше за просте ບໍ່.",
            "en": {
              "text": "Negation is intensified with the word ເລີຍ ('at all') at the end of the sentence — 'not at all, not in the slightest', stronger than plain ບໍ່."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ຂ້ອຍບໍ່ຮູ້ເລີຍ.",
                "Я взагалі нічого не знаю."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Emphatic Negation with ເລີຍ — B1"
      },
      {
        "id": "resultative-verb-complement",
        "title": "ຄຳເສີມກະລິຍາຜົນ — B2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник-дієслово, доданий одразу після основного дієслова, описує результат дії, а не окрему подію, — ланцюжок 'дія + результат' в одному подієвому блоці.",
            "en": {
              "text": "A stative verb/adjective added right after the main verb describes the result of the action, not a separate event — a 'action + result' chain in one event block."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ກິນອີ່ມ.",
                "Наїстися досита (буквально 'їсти повний')."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Resultative Verb Complements — B2"
      },
      {
        "id": "discourse-particle-sentence-final-emphasis",
        "title": "ຄຳເນັ້ນທ້າຍປະໂຫຍກ: ແທ້ — B1",
        "emoji": "💯",
        "sections": [
          {
            "type": "intro",
            "text": "Частка ແທ້ ('справді, дійсно') у кінці речення підкреслює щирість чи впевненість мовця, не змінюючи логічного змісту висловлювання.",
            "en": {
              "text": "The particle ແທ້ ('really, indeed') at the end of a sentence underlines the speaker's sincerity or confidence, without changing the logical content of the statement."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ແຊບແທ້!",
                "Справді смачно!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Sentence-Final Emphasis with ແທ້ — B1"
      },
      {
        "id": "code-switching-with-thai-media",
        "title": "ການປະປົນຄຳໄທຍ໌ໃນວັຍໜຸ່ມ — B2",
        "emoji": "📱",
        "sections": [
          {
            "type": "intro",
            "text": "Молодь, особливо у великих містах, вставляє тайські слова й вирази з поп-культури просто в лаоські речення, — сленгове перемикання кодів, якого не було в мові попередніх поколінь.",
            "en": {
              "text": "Young people, especially in big cities, insert Thai words and pop-culture expressions right into Lao sentences — a slang code-switching absent from the language of earlier generations."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ມັນເທ່ຫຼາຍ! (тайський сленг 'круто', вставлений у лаоське речення)",
                "код-світчинг з тайської поп-культури"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Code-Switching with Thai Pop Culture — B2"
      },
      {
        "id": "tone-sandhi-in-compounds",
        "title": "ການປ່ຽນວັນນະຍຸດໃນຄຳປະສົມ — B2",
        "emoji": "🎼",
        "sections": [
          {
            "type": "intro",
            "text": "У деяких складних словах тон одного з компонентів систематично змінюється порівняно з тим, яким він був би окремо, — тональна асиміляція, подібна до тонального сандхі в інших тонових мовах.",
            "en": {
              "text": "In some compound words, the tone of one component systematically shifts compared to what it would be on its own — a tonal assimilation similar to tone sandhi in other tonal languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Тон змінюється в складному слові порівняно з тим самим складом окремо.",
                "тональне сандхі в композитах"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Tone Sandhi in Compounds — B2"
      },
      {
        "id": "formal-informal-lexical-doublets",
        "title": "ຄຳຄູ່: ພາສາລາຊະການ ແລະ ພາສາພື້ນເມືອງ — B2",
        "emoji": "📚",
        "sections": [
          {
            "type": "intro",
            "text": "Для багатьох понять існує пара слів — формальне, запозичене з палі/санскриту, і повсякденне, питомо лаоське, — вибір між ними задає рівень офіційності всього висловлювання.",
            "en": {
              "text": "For many concepts there's a word pair — a formal one borrowed from Pali/Sanskrit, and an everyday native Lao one — the choice between them sets the formality level of the whole utterance."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ອາຫານ (формальне, з палі) vs ເຂົ້າ (буденне, питоме)",
                "'їжа' у двох регістрах"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Formal/Informal Lexical Doublets — B2"
      },
      {
        "id": "verb-reduplication-for-attenuation",
        "title": "ການຊ້ຳກະລິຍາເພື່ອຫຼຸດຜ່ອນ — B2",
        "emoji": "🙂",
        "sections": [
          {
            "type": "intro",
            "text": "Подвоєння дієслова (на відміну від подвоєння прикметника для підсилення) натомість пом'якшує дію — робить її менш категоричною чи вказує на короткочасність.",
            "en": {
              "text": "Doubling a verb (unlike doubling an adjective for intensification) instead softens the action — making it less definitive or indicating brevity."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ພັກພັກ.",
                "Відпочити трохи (пом'якшене значення)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Verb Reduplication for Attenuation — B2"
      },
      {
        "id": "compound-verb-formation",
        "title": "ການປະສົມກະລິຍາ — B2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Два дієслова можуть злитися в одну лексичну одиницю з новим, непередбачуваним значенням, відмінним від суми значень обох компонентів.",
            "en": {
              "text": "Two verbs can fuse into a single lexical unit with a new, unpredictable meaning different from the sum of the two components' meanings."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ເຂົ້າໃຈ (буквально 'входити серце' → розуміти)",
                "злите значення, непередбачуване з частин"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Compound Verb Formation — B2"
      },
      {
        "id": "address-terms-social-hierarchy",
        "title": "ຄຳເອີ້ນຕາມລຳດັບຊັ້ນສັງຄົມ — B2",
        "emoji": "🏛️",
        "sections": [
          {
            "type": "intro",
            "text": "Крім вибору займенника, соціальну ієрархію передають ще й окремі титульні звертання перед ім'ям — чернечий, чиновницький чи професійний титул визначає, як до людини звертатимуться в будь-якій розмові.",
            "en": {
              "text": "Besides pronoun choice, social hierarchy is also expressed through dedicated title terms placed before a name — a monastic, official, or professional title determines how a person will be addressed in any conversation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ທ່ານ ອາຈານ (шановний вчителю, титул перед іменем)",
                "звертання, що відображає статус"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Address Terms and Social Hierarchy — B2"
      },
      {
        "id": "necessity-modal-tong",
        "title": "ຕ້ອງ (ຄວາມຈຳເປັນ) — A2",
        "emoji": "☑️",
        "sections": [
          {
            "type": "intro",
            "text": "Обов'язковість дії позначає частка ຕ້ອງ (tong) перед дієсловом — окрема модальна частка, відмінна за значенням від бажання ຢາк чи здатності ...ໄດ້.",
            "en": {
              "text": "Obligation is marked with the particle ຕ້ອງ (tong) before the verb — a distinct modal particle, different in meaning from the desiderative ຢາກ or the ability marker ...ໄດ້."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ຂ້ອຍຕ້ອງໄປ.",
                "Я мушу йти."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Necessity Modal ຕ້ອງ — A2"
      },
      {
        "id": "aspect-marker-stacking-order",
        "title": "ການລຽງຄຳຊີ້ບອກອາການ — B2",
        "emoji": "🧱",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька часток аспекту й модальності можуть поєднуватися навколо одного дієслова в чіткому фіксованому порядку — заперечення, потім 'ще', потім 'мати можливість/встигнути' — кожна на своєму місці.",
            "en": {
              "text": "Several aspect and modal particles can combine around a single verb in a strict fixed order — negation, then 'still', then 'manage to/have had the chance' — each in its own slot."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ຂ້ອຍຍັງບໍ່ທັນໄດ້ກິນ.",
                "Я ще навіть не встиг поїсти (кілька часток поспіль)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Aspect-Marker Stacking Order — B2"
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
        "id": "irregular-copula-choice-idiomatic",
        "title": "ການເລືອກ 'ເປັນ'/'ແມ່ນ' ແບບບໍ່ປົກກະຕິ — B2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "У кількох застиглих виразах вибір між ເປັນ і ແມ່ນ не підкоряється звичайному правилу 'категорія проти тотожності' й закріплений просто традицією вживання.",
            "en": {
              "text": "In a few fixed expressions the choice between ເປັນ and ແມ່ນ doesn't follow the usual 'category vs. identity' rule and is simply fixed by convention."
            }
          },
          {
            "type": "table",
            "title": "Приклад винятку",
            "rows": [
              [
                "ແມ່ນແລ້ວ (застигла фраза 'так, точно', не за загальним правилом)",
                "ідіоматичне вживання ແມ່ນ"
              ]
            ]
          }
        ],
        "titleEn": "Irregular ເປັນ/ແມ່ນ Choice — B2"
      },
      {
        "id": "fixed-classifier-exceptions",
        "title": "ຄຳລັກສະນະນາມທີ່ບໍ່ປົກກະຕິ — B2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька іменників мають несподіваний класифікатор, що не відповідає жодній семантичній категорії, до якої предмет формально належить, — суто традиційний виняток.",
            "en": {
              "text": "A few nouns take an unexpected classifier that doesn't match any semantic category the object formally belongs to — a purely traditional exception."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ເຮືອນ ຫຼັງ (дім, з класифікатором 'спина', не з очікуваним 'ອັນ')",
                "нерегулярний класифікатор"
              ]
            ]
          }
        ],
        "titleEn": "Irregular Classifier Exceptions — B2"
      },
      {
        "id": "fixed-idiomatic-buddhist-expressions",
        "title": "ສຳນວນພຸດທະສາສະໜາຄົງທີ່ — B2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Буддійські застиглі вирази зберігають архаїчний, майже палійський за структурою синтаксис, відмінний від сучасної лаоської граматики, і вживаються цілими блоками без внутрішнього розбору.",
            "en": {
              "text": "Fixed Buddhist expressions preserve an archaic, almost Pali-structured syntax different from modern Lao grammar, and are used as whole blocks without internal grammatical analysis."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ສາທຸ! (застигла палійська вигукова формула, 'амінь/добре')",
                "архаїчна палійська форма"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Fixed Buddhist Expressions — B2"
      }
    ]
  }
];
