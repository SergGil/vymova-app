// Vymova — data/grammar-data/grammar_si.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_SI: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "නාම පද — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У сингальській дієслово не змінюється за особою — воно однакове для \"я\", \"ти\", \"він\" тощо, тому займенник є єдиним способом зрозуміти, хто діє.",
            "en": {
              "text": "In Sinhala, the verb doesn't change by person — it's the same for \"I\", \"you\", \"he\", etc., so the pronoun is the only way to tell who's acting."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "මම (mama)"
              ],
              [
                "ти (зв. / ввічл.)",
                "ඔයා / ඔබ (oyā / oba)"
              ],
              [
                "він / вона",
                "ඔහු / ඇය (ohu / æya)"
              ],
              [
                "ми",
                "අපි (api)"
              ],
              [
                "ви",
                "ඔයාලා (oyālā)"
              ],
              [
                "вони",
                "එයාලා (eyālā)"
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
        "id": "animate-inanimate-distinction",
        "title": "සජීවී-අජීවී වෙනස — A2",
        "emoji": "🌳",
        "sections": [
          {
            "type": "intro",
            "text": "Замість граматичного роду (чоловічий/жіночий) сингальська розрізняє живе й неживе: різні форми множини, дієслова існування й займенники залежать від того, чи є предмет живим.",
            "en": {
              "text": "Instead of grammatical gender (masculine/feminine), Sinhala distinguishes animate from inanimate: different plural forms, existential verbs, and pronouns depend on whether a thing is alive."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ළමයි (діти, живе) vs. පොත් (книги, неживе)",
                "children (animate) vs. books (inanimate)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Animate-Inanimate Distinction — A2"
      },
      {
        "id": "diglossia-literary-colloquial",
        "title": "ලිඛිත සහ කථන භාෂාව — B2",
        "emoji": "📚",
        "sections": [
          {
            "type": "intro",
            "text": "Сингальська має надзвичайно сильну диглосію: літературна мова відмінює дієслово за особою й числом, а розмовна — зовсім ні, тож це фактично дві паралельні граматичні системи в межах однієї мови.",
            "en": {
              "text": "Sinhala has extremely strong diglossia: the literary language conjugates the verb for person and number, while the colloquial language does not at all — effectively two parallel grammatical systems within one language."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "колокв. මම කරනවා / літ. මම කරමි",
                "я роблю (розмовна / літературна форми)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Literary vs. Colloquial Diglossia — B2"
      },
      {
        "id": "sinhala-script-round-letters",
        "title": "සිංහල අකුරු — A2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Сингальське письмо, що походить від брахмі, має особливо заокруглені форми літер — прямі лінії розривали б пальмове листя, на якому традиційно писали.",
            "en": {
              "text": "The Sinhala script, descended from Brahmi, has unusually rounded letterforms — straight lines would tear the palm leaves traditionally used for writing."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "සිංහල (заокруглені форми)",
                "'Sinhala' (rounded letterforms)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Sinhala Script: Rounded Letterforms — A2"
      },
      {
        "id": "prenasalized-consonants",
        "title": "පූර්ව-නාසික ව්‍යාංජන — B1",
        "emoji": "🔊",
        "sections": [
          {
            "type": "intro",
            "text": "Сингальська має преназалізовані приголосні (ඟ mb, ඬ nd, ඳ nd), що вимовляються з коротким носовим призвуком перед дзвінким приголосним, — риса, успадкована прямо з давньої мови й позначена окремими літерами.",
            "en": {
              "text": "Sinhala has prenasalized consonants (ඟ mb, ඬ nd, ඳ nd), pronounced with a brief nasal onset before the voiced consonant — a trait inherited directly from Old Sinhala and marked with dedicated letters."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "කැඳ (kæ​nda, каша)",
                "porridge (with prenasalized nd)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Prenasalized Consonants — B1"
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
        "title": "වර්තමාන කාලය — A1",
        "emoji": "☀️",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній час у розмовній мові утворюється суфіксом -නවා, доданим до основи дієслова, однаковим для всіх осіб і чисел.",
            "en": {
              "text": "The present tense in colloquial speech is formed with the suffix -නවා added to the verb stem, the same for every person and number."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "මම කරනවා.",
                "Я роблю."
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
        "title": "අඛණ්ඩ වර්තමානය — A2",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія передається дієприслівником на -ලා плюс допоміжне 'бути' (innawa/tiyenawa залежно від живості), підкреслюючи, що дія відбувається саме зараз.",
            "en": {
              "text": "An ongoing action is expressed with the -ලා converb plus the auxiliary 'to be' (innawa/tiyenawa depending on animacy), emphasizing that the action is happening right now."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "මම කරලා ඉන්නවා.",
                "Я саме роблю."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Progressive — A2"
      },
      {
        "id": "past-tense",
        "title": "අතීත කාලය — A2",
        "emoji": "⏪",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий час у розмовній мові утворюється суфіксом -ා (часто з подвоєнням чи зміною кореня), однаковим для всіх осіб і чисел.",
            "en": {
              "text": "The past tense in colloquial speech is formed with the suffix -ා (often with root doubling or alternation), the same for every person and number."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "මම කලා.",
                "Я зробив."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Past Tense — A2"
      },
      {
        "id": "habitual-present",
        "title": "පුරුදු වර්තමානය — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Звична дія передається тим самим теперішнім часом на -නවා, що й буквальна теперішня дія, — розрізнення залежить лише від контексту й часового прислівника.",
            "en": {
              "text": "A habitual action is expressed with the same -නවා present tense used for a literal present action — the distinction depends only on context and a time adverb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "මම හැම දිනකම කරනවා.",
                "Я роблю це щодня."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Habitual Present — B1"
      },
      {
        "id": "future-tense",
        "title": "අනාගත කාලය — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється суфіксом -යි (у розмовній мові часто збігається з теперішнім часом, розрізнюваним лише контекстом), доданим до основи дієслова.",
            "en": {
              "text": "The future tense is formed with the suffix -යි (in colloquial speech it often coincides with the present, distinguished only by context), added to the verb stem."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "මම කරයි.",
                "Я зроблю."
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
        "id": "perfect-tense",
        "title": "පූර්ණ කාලය — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Перфект утворюється дієприслівником на -ලා плюс допоміжне 'бути', наголошуючи на теперішній актуальності завершеної дії.",
            "en": {
              "text": "The perfect is formed with the -ලා converb plus the auxiliary 'to be', emphasizing the present relevance of a completed action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "මම කරලා තියෙනවා.",
                "Я вже зробив (і це важливо зараз)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Perfect Tense — B1"
      },
      {
        "id": "pluperfect-tense",
        "title": "අතීත පූර්ණය — B2",
        "emoji": "⏮️",
        "sections": [
          {
            "type": "intro",
            "text": "Плюсквамперфект утворюється дієприслівником на -ලා плюс допоміжне 'бути' в минулому часі, позначаючи дію, завершену до іншої минулої події.",
            "en": {
              "text": "The pluperfect is formed with the -ලා converb plus the past-tense auxiliary 'to be', marking an action completed before another past event."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "මම කරලා තිබුණා.",
                "Я вже був зробив (до того)."
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
        "id": "imperative-mood",
        "title": "අණ ක්‍රියා — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб утворюється власним закінченням, доданим до основи дієслова, з окремими рівнями ввічливості для звичайного й шанобливого звертання.",
            "en": {
              "text": "The imperative is formed with its own ending added to the verb stem, with separate politeness levels for ordinary and respectful address."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "කරන්න!",
                "Роби!"
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
        "id": "conditional-mood",
        "title": "නම්: කොන්දේසි — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовне речення утворюється частку නම් ('якщо'), доданою після дієслова в підрядному реченні.",
            "en": {
              "text": "A conditional sentence is formed with the particle නම් ('if'), added after the verb in the subordinate clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "වැස්ස ආවා නම්, මම ගෙදර ඉන්නවා.",
                "Якщо піде дощ, я залишуся вдома."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional: නම් — B1"
      },
      {
        "id": "potential-puluvan",
        "title": "පුළුවන්: හැකියාව — B1",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Здатність чи можливість виражається словом පුළුවන් ('можна/здатний'), поставленим після інфінітива, — незмінюваним предикативом, а не відмінюваним дієсловом.",
            "en": {
              "text": "Ability or possibility is expressed with the word පුළුවන් ('can/able'), placed after the infinitive — an uninflected predicate rather than a conjugated verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "මට කරන්න පුළුවන්.",
                "Я можу це зробити."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Potential: පුළුවන් — B1"
      },
      {
        "id": "desiderative-oona",
        "title": "ඕන: අවශ්‍යතාව — A2",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Бажання чи потреба виражається словом ඕන ('треба/хочеться'), уживаним із давальним відмінком підмета, а не з номінативом, як звичайні дієслова.",
            "en": {
              "text": "A wish or need is expressed with the word ඕන ('want/need'), used with the dative case of the experiencer rather than the nominative, unlike ordinary verbs."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "මට කන්න ඕන.",
                "Мені хочеться їсти."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Desiderative: ඕන — A2"
      },
      {
        "id": "volitive-involitive-verbs",
        "title": "කැමැත්ත-අකැමැත්ත ක්‍රියා — B2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Багато дієслів мають парні вольові (навмисні) й безвольові (мимовільні) форми того самого значення: одна вказує на свідому дію, інша — на випадкову чи неконтрольовану, — хрестоматійна риса сингальської граматики.",
            "en": {
              "text": "Many verbs have paired volitive (intentional) and involitive (accidental) forms of the same meaning: one signals a deliberate action, the other an accidental or uncontrolled one — a textbook feature of Sinhala grammar."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "කඩනවා (навмисно ламати) vs. කැඩෙනවා (ламається саме собою)",
                "break (deliberately) vs. break (by itself, involitive)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Volitive vs. Involitive Verbs — B2"
      },
      {
        "id": "infinitive-form",
        "title": "අනියම් ක්‍රියා — A2",
        "emoji": "📖",
        "sections": [
          {
            "type": "intro",
            "text": "Інфінітив (словникова форма дієслова) закінчується на -න්න, доданий до основи, і вживається перед модальними словами, як පුළුවන් чи ඕන.",
            "en": {
              "text": "The infinitive (dictionary form of the verb) ends in -න්න added to the stem, and is used before modal words like පුළුවන් or ඕන."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "කරන්න",
                "робити (інфінітив)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Infinitive: -න්න — A2"
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
        "title": "වාක්‍ය ව්‍යූහය: SOV — A2",
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
                "මම පොත කියවනවා.",
                "Я читаю книгу."
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
        "id": "existential-verb-choice",
        "title": "තියෙනවා / ඉන්නවා: පැවැත්ම — B1",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Вибір дієслова 'бути' в реченнях наявності залежить від живості: තියෙනවා для неживого, ඉන්නවා для живого — розрізнення, вбудоване прямо в базову лексику дієслова.",
            "en": {
              "text": "The choice of 'to be' in existential sentences depends on animacy: තියෙනවා for inanimate things, ඉන්නවා for animate ones — a distinction built directly into the basic verb vocabulary."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "මේසය මෙතන තියෙනවා. / බල්ලා මෙතන ඉන්නවා.",
                "Стіл тут. / Собака тут."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Existential Verb Choice by Animacy — B1"
      },
      {
        "id": "plural-formation-animacy",
        "title": "බහුවචනය: සජීවී/අජීවී — B1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина живих іменників часто утворюється суфіксом -ලා/-ල් чи повторенням, а неживих — суфіксом -වල්/-val, тож форма множини сама вказує на живість предмета.",
            "en": {
              "text": "The plural of animate nouns is often formed with -ලා/-ල් or reduplication, while inanimate nouns take -වල්/-val, so the plural form itself signals the noun's animacy."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ළමයි (діти, живе) / පොත්වල් (книги, неживе)",
                "children (animate) / books (inanimate)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Plural Formation by Animacy — B1"
      },
      {
        "id": "case-system-overview",
        "title": "විභක්ති: හතරක් — B2",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Сингальська зберегла спрощену систему відмінків (номінатив, аккузатив, датив, інструменталь/аблатив), позначених суфіксами, доданими до основи іменника.",
            "en": {
              "text": "Sinhala retains a simplified case system (nominative, accusative, dative, instrumental/ablative), marked with suffixes added to the noun stem."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "මට (мені, датив)",
                "to me (dative)"
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
        "id": "dative-experiencer",
        "title": "දායක විභක්තිය: හැඟීම් — B1",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслова відчуттів, бажань і потреб (ඕන, подобатися, боліти) уживають давальний відмінок суб'єкта замість називного, — підмет граматично 'переживає', а не 'діє'.",
            "en": {
              "text": "Verbs of feeling, wanting, and needing (ඕන, liking, hurting) take the dative case of the subject instead of the nominative — the subject grammatically 'experiences' rather than 'acts'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "මට ලෙඩයි.",
                "Мені боляче (букв. 'мені хворе')."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Dative Experiencer Constructions — B1"
      },
      {
        "id": "demonstratives-three-way",
        "title": "පෙන්වන සර්වනාම: තුනක් — A2",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Вказівні займенники розрізняють три ступені відстані: මේ (близько до мовця), ඒ (близько до слухача), ඔය/ඔය (далеко від обох) — трирівнева система, поширена в мовах регіону.",
            "en": {
              "text": "Demonstratives distinguish three degrees of distance: මේ (near the speaker), ඒ (near the listener), ඔය/ඈ (far from both) — a three-way system common in the region's languages."
            }
          },
          {
            "type": "table",
            "title": "Вказівні займенники",
            "rows": [
              [
                "цей (тут)",
                "මේ"
              ],
              [
                "той (там, біля тебе)",
                "ඒ"
              ],
              [
                "той (далеко)",
                "ඈ"
              ]
            ],
            "en": {
              "title": "Demonstratives"
            }
          }
        ],
        "titleEn": "Three-Way Demonstratives — A2"
      },
      {
        "id": "interrogatives",
        "title": "ප්‍රශ්න වචන — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "хто",
                "කවුද"
              ],
              [
                "що",
                "මොකක්ද"
              ],
              [
                "де",
                "කොහෙද"
              ],
              [
                "коли",
                "කවදාද"
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
        "id": "negation-postposed",
        "title": "නෑ: ප්‍රතික්ෂේප — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється часткою නෑ, поставленою після дієслова (не перед ним, як у більшості мов), із варіантами залежно від часу дії.",
            "en": {
              "text": "Negation is formed with the particle නෑ placed after the verb (not before it, unlike most languages), with variants depending on the tense of the action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "මම දන්නෑ.",
                "Я не знаю."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation: නෑ (Postposed) — A1"
      },
      {
        "id": "adjective-invariant",
        "title": "විශේෂණ: වෙනස් නොවේ — A2",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники незмінні: вони ставляться перед іменником і не набувають жодного суфікса роду, числа чи відмінка.",
            "en": {
              "text": "Adjectives are invariant: they precede the noun and take no gender, number, or case suffix at all."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ලස්සන ගෙදර / ලස්සන ගෙවල්",
                "гарний дім / гарні доми (прикметник не змінюється)"
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
        "id": "comparative-degree",
        "title": "වඩා: සංසන්දනය — B1",
        "emoji": "📊",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняльний ступінь утворюється часткою වඩා ('більш') після об'єкта порівняння в аблативному відмінку, перед прикметником.",
            "en": {
              "text": "The comparative degree is formed with the particle වඩා ('more') after the compared object in the ablative case, before the adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "මේක ඒකට වඩා ලොකුයි.",
                "Це більше за те."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparative: වඩා — B1"
      },
      {
        "id": "superlative-degree",
        "title": "ම වඩාත් / ඉතාම: උපරිම — B1",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь порівняння утворюється часткою ඉතාම ('найбільш') перед прикметником.",
            "en": {
              "text": "The superlative is formed with the particle ඉතාම ('most') before the adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ඉතාම ලොකු",
                "найбільший"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Superlative: ඉතාම — B1"
      },
      {
        "id": "cardinal-numbers",
        "title": "ගණන: 1-10 — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "table",
            "title": "Числа 1-10",
            "rows": [
              [
                "1",
                "එක (eka)"
              ],
              [
                "2",
                "දෙක (deka)"
              ],
              [
                "3",
                "තුන (thuna)"
              ],
              [
                "5",
                "පහ (paha)"
              ],
              [
                "10",
                "දහය (dahaya)"
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
        "id": "relative-participle-construction",
        "title": "සම්බන්ධක ක්‍රියා: නොමැති සර්වනාම — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Сингальська не має відносного займенника ('який/що'): означальні звороти утворюються дієприкметниковою формою дієслова, поставленою прямо перед іменником.",
            "en": {
              "text": "Sinhala has no relative pronoun ('who/which'): relative clauses are formed with a participial verb form placed directly before the noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "එන මිනිසා",
                "чоловік, що йде (букв. 'той-хто-йде чоловік')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Clauses via Participles — B2"
      },
      {
        "id": "conjunctions",
        "title": "සම්බන්ධක වචන — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники",
            "rows": [
              [
                "і",
                "සහ"
              ],
              [
                "або",
                "හෝ"
              ],
              [
                "але",
                "නමුත්"
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
        "id": "question-particle-da",
        "title": "ද: ප්‍රශ්නය — A2",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання без питального слова утворюється часткою ද, доданою до кінця дієслова, без інверсії підмета й дієслова.",
            "en": {
              "text": "A yes/no question is formed with the particle ද added to the end of the verb, with no subject-verb inversion."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ඔයා යනවාද?",
                "Ти йдеш?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Yes/No Question Particle: ද — A2"
      },
      {
        "id": "sandhi-vowel-fusion",
        "title": "සන්ධි: ස්වර සන්ධානය — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Коли слово, що закінчується на голосний, зустрічається зі словом, що починається на голосний, вони часто зливаються в один склад за правилами санді, успадкованими з пракритської традиції.",
            "en": {
              "text": "When a word ending in a vowel meets a word beginning with a vowel, they often fuse into a single syllable following sandhi rules inherited from the Prakrit tradition."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "මාළු + අඹුල → මාළඹුල",
                "риба + кисле = кисла риба (сандхі-злиття)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Sandhi: Vowel Fusion — B2"
      },
      {
        "id": "diminutive-expression",
        "title": "පොඩි: කුඩාකම — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувальний відтінок передається окремим прикметником පොඩි ('маленький') перед іменником, а не суфіксом, доданим до нього.",
            "en": {
              "text": "A diminutive shade of meaning is conveyed with the separate adjective පොඩි ('small') before the noun, rather than a suffix attached to it."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "පොඩි ළමයා",
                "малятко (букв. 'мала дитина')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Diminutive: පොඩි — B1"
      },
      {
        "id": "classifier-counting",
        "title": "ගණන් කරන වචන — B2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "При лічбі предметів між числівником та іменником вставляється класифікатор, залежний від категорії предмета (දෙනෙක් для людей, ක් для загальних предметів).",
            "en": {
              "text": "When counting objects, a classifier is inserted between the numeral and the noun, depending on the object's category (දෙනෙක් for people, ක් for general objects)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "මිනිස්සු තුන් දෙනෙක්",
                "троє людей (з класифікатором для людей)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Classifiers for Counting — B2"
      },
      {
        "id": "honorific-verb-forms",
        "title": "ගෞරව ක්‍රියා: වඩිනවා — B2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Для монахів і поважних осіб уживають окремі шанобливі дієслова замість звичайних (вадінава 'приходити' замість звичайного слова), — окремий пласт шанобливої лексики, паралельний до звичайних дієслів.",
            "en": {
              "text": "For monks and highly respected people, dedicated honorific verbs are used instead of ordinary ones (vadinawa 'to come' instead of the plain verb) — a separate layer of respectful vocabulary running parallel to ordinary verbs."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "හාමුදුරුවෝ වඩිනවා.",
                "Монах приходить (шанобливе дієслово)."
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
        "id": "reduplication-intensity",
        "title": "පුනරාවර්තනය: තීව්‍රතාව — B1",
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
                "ඉක්මනට ඉක්මනට",
                "дуже швидко (букв. 'швидко-швидко')"
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
        "id": "postpositions-simple",
        "title": "පසුපද — A2",
        "emoji": "📌",
        "sections": [
          {
            "type": "table",
            "title": "Післяйменники",
            "rows": [
              [
                "в",
                "ඇතුළේ"
              ],
              [
                "на",
                "උඩ"
              ],
              [
                "з (разом)",
                "එක්ක"
              ]
            ],
            "en": {
              "title": "Postpositions"
            }
          }
        ],
        "titleEn": "Simple Postpositions — A2"
      },
      {
        "id": "possessive-ge",
        "title": "ගේ: හිමිකම — A2",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійність передається суфіксом -ගේ (для живих) чи -එ (для неживих), доданим до власника, поставленого перед посідомим іменником.",
            "en": {
              "text": "Possession is expressed with the suffix -ගේ (for animate possessors) or -ේ (for inanimate), attached to the possessor, placed before the possessed noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "අම්මාගේ පොත",
                "мамина книга"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Possession: -ගේ — A2"
      },
      {
        "id": "converb-la-sequential",
        "title": "-ලා: අනුක්‍රමික ක්‍රියා — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприслівник на -ලා з'єднує послідовні дії в одному реченні, приймаючи закінчення часу лише на останньому дієслові ланцюжка.",
            "en": {
              "text": "The -ලා converb links sequential actions in one sentence, with the tense ending appearing only on the last verb in the chain."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "කාලා බීලා ගියා.",
                "Він поїв, попив і пішов."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Sequential Converb: -ලා — B1"
      },
      {
        "id": "causative-verb-wanawa",
        "title": "ක්‍රියා කරවන: -වනවා — B2",
        "emoji": "⚙️",
        "sections": [
          {
            "type": "intro",
            "text": "Каузативні дієслова утворюються суфіксом -වනවා, доданим до основи, передаючи значення 'змусити зробити' і часто узгоджуючись зі своєю окремою парою вольова/безвольова форма.",
            "en": {
              "text": "Causative verbs are formed with the suffix -වනවා added to the stem, conveying the meaning 'make/have someone do', and often pairing with their own volitive/involitive distinction."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "කනවා → කවනවා",
                "їсти → годувати (примусити їсти)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Causative: -වනවා — B2"
      },
      {
        "id": "indefinite-marker-ek",
        "title": "එක: නිශ්චිත නැති — A2",
        "emoji": "1️⃣",
        "sections": [
          {
            "type": "intro",
            "text": "Сингальська не має окремого артикля; неозначеність передається числівником එක/එකක් ('один'), поставленим після іменника.",
            "en": {
              "text": "Sinhala has no dedicated article; indefiniteness is conveyed with the numeral එක/එකක් ('one'), placed after the noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "පොතක්",
                "якась книга"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Indefinite Marker: -ක් — A2"
      },
      {
        "id": "pali-sanskrit-buddhist-layer",
        "title": "පාලි-සංස්කෘත වචන — B2",
        "emoji": "☸️",
        "sections": [
          {
            "type": "intro",
            "text": "Значний шар сингальської лексики походить із палі (мови буддійського канону) та санскриту, окремо від питомої давньоіндоарійської основи, — два різні шари запозичень для релігійних і вчених понять.",
            "en": {
              "text": "A substantial layer of Sinhala vocabulary comes from Pali (the language of the Buddhist canon) and Sanskrit, separate from the native Old Indo-Aryan base — two distinct borrowing layers for religious and learned concepts."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ධර්මය (дхарма, з палі/санскриту)",
                "dharma (Pali/Sanskrit loan)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Pali and Sanskrit Loanword Layer — B2"
      },
      {
        "id": "tamil-dravidian-contact",
        "title": "දෙමළ බලපෑම — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Тривалий контакт із тамільською (дравідійською мовою) на острові вплинув на фонологію (ретрофлексні приголосні) і синтаксис сингальської, попри те, що сама вона є індоарійською.",
            "en": {
              "text": "Prolonged contact with Tamil (a Dravidian language) on the island influenced Sinhala's phonology (retroflex consonants) and syntax, despite Sinhala itself being Indo-Aryan."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ට, ඩ (ретрофлексні, дравідійський вплив)",
                "retroflex consonants (Dravidian contact feature)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Tamil/Dravidian Contact Influence — B2"
      },
      {
        "id": "ola-leaf-manuscripts",
        "title": "පුස්කොළ පොත් — B1",
        "emoji": "🌴",
        "sections": [
          {
            "type": "intro",
            "text": "Традиційні рукописи писали залізним стилосом на пальмовому листі (пуская пота), яке потім натирали сажею для видимості тексту, — тисячолітня традиція, що й досі впливає на форму сингальського письма.",
            "en": {
              "text": "Traditional manuscripts were written with an iron stylus on palm leaves (pus-kola pot), then rubbed with soot to make the text visible — a millennium-old tradition that still shapes the form of the Sinhala script."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "පුස්කොළ පොත",
                "рукопис на пальмовому листі"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ola Leaf Manuscripts — B1"
      },
      {
        "id": "ancient-hydraulic-civilization",
        "title": "පුරාණ වාරි තාක්ෂණය — B2",
        "emoji": "💧",
        "sections": [
          {
            "type": "intro",
            "text": "Стародавні сингальські царства побудували складну систему резервуарів (වැව), яка досі забезпечує зрошення — 'кожна крапля води, що падає з неба, має дійти до моря, служачи людині', приписуваний королю Паракрамабаху вислів.",
            "en": {
              "text": "Ancient Sinhala kingdoms built an elaborate reservoir system (wewa) that still provides irrigation — 'not even a drop of rain water should flow into the ocean without benefiting man', a saying attributed to King Parakramabahu."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "වැව (резервуар)",
                "wewa (irrigation reservoir)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ancient Hydraulic Civilization — B2"
      },
      {
        "id": "sigiriya-ancient-cities",
        "title": "සීගිරිය: පුරාණ නගර — B1",
        "emoji": "🏛️",
        "sections": [
          {
            "type": "intro",
            "text": "Сігірія — скельна фортеця V ст., чиї стіни зберегли одні з найдавніших написів розмовною сингальською (графіті відвідувачів), безцінне джерело для дослідження давньої мови.",
            "en": {
              "text": "Sigiriya is a 5th-century rock fortress whose walls preserve some of the oldest inscriptions in colloquial Sinhala (visitor graffiti), an invaluable source for studying the early language."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "සීගිරි ගී (Сігірійські вірші-графіті)",
                "Sigiri graffiti verses"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Sigiriya and Ancient Cities — B1"
      },
      {
        "id": "vesak-festival",
        "title": "වෙසක් උත්සවය — B1",
        "emoji": "🏮",
        "sections": [
          {
            "type": "intro",
            "text": "Вешак — найважливіше буддійське свято, що відзначає народження, просвітлення й смерть Будди водночас, зі спеціальною лексикою для паперових ліхтарів (вешак кудуву) і безкоштовних пунктів роздачі їжі (дансала).",
            "en": {
              "text": "Vesak is the most important Buddhist festival, commemorating the Buddha's birth, enlightenment, and death all at once, with special vocabulary for paper lanterns (vesak kuudu) and free food-distribution stalls (dansala)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "වෙසක් කූඩු",
                "весакські ліхтарі"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Vesak Festival — B1"
      },
      {
        "id": "tea-culture-ceylon",
        "title": "තේ සංස්කෘතිය — B1",
        "emoji": "🍵",
        "sections": [
          {
            "type": "intro",
            "text": "Цейлонський чай — символ національної ідентичності й основна експортна культура, з розвиненою лексикою для висотних сортів (upcountry) і низинних (low-grown).",
            "en": {
              "text": "Ceylon tea is a symbol of national identity and a major export crop, with developed vocabulary for highland (upcountry) and lowland (low-grown) varieties."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "තේ වත්ත",
                "чайна плантація"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ceylon Tea Culture — B1"
      },
      {
        "id": "cinnamon-spice-trade",
        "title": "කුරුඳු: වෙළඳාම — B1",
        "emoji": "🌿",
        "sections": [
          {
            "type": "intro",
            "text": "Кориця (кurundu) — прянощ, за яку колись боролися голландці й португальці, дала назву регіону в давніх торгових текстах і досі виробляється традиційними методами обчищення кори.",
            "en": {
              "text": "Cinnamon (kurundu) is a spice once fought over by the Dutch and Portuguese, giving its name to the region in old trade texts, and is still produced by traditional bark-peeling methods."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "කුරුඳු පොතු",
                "кора кориці"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Cinnamon and the Spice Trade — B1"
      },
      {
        "id": "colors",
        "title": "වර්ණ — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "table",
            "title": "Кольори",
            "rows": [
              [
                "червоний",
                "රතු"
              ],
              [
                "чорний",
                "කලු"
              ],
              [
                "білий",
                "සුදු"
              ],
              [
                "зелений",
                "කොළ"
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
        "title": "ගණන: දහය — A2",
        "emoji": "🔟",
        "sections": [
          {
            "type": "table",
            "title": "Десятки",
            "rows": [
              [
                "20",
                "විස්ස"
              ],
              [
                "30",
                "තිහ"
              ],
              [
                "100",
                "සීය"
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
        "id": "family-terms",
        "title": "පවුල — A2",
        "emoji": "👪",
        "sections": [
          {
            "type": "table",
            "title": "Родина",
            "rows": [
              [
                "батько",
                "තාත්තා"
              ],
              [
                "мати",
                "අම්මා"
              ],
              [
                "брат",
                "අයියා / මල්ලි"
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
        "id": "food-vocabulary",
        "title": "කෑම — A2",
        "emoji": "🍛",
        "sections": [
          {
            "type": "table",
            "title": "Їжа",
            "rows": [
              [
                "рис",
                "බත්"
              ],
              [
                "каррі",
                "curry (කරි)"
              ],
              [
                "вода",
                "වතුර"
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
        "id": "greetings",
        "title": "ආයුබෝවන් — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "table",
            "title": "Вітання",
            "rows": [
              [
                "Привіт",
                "ආයුබෝවන්"
              ],
              [
                "Дякую",
                "ස්තුතියි"
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
        "title": "කාලගුණය — A2",
        "emoji": "☁️",
        "sections": [
          {
            "type": "table",
            "title": "Погода",
            "rows": [
              [
                "сонце",
                "ඉර"
              ],
              [
                "дощ",
                "වැස්ස"
              ],
              [
                "вітер",
                "සුළඟ"
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
        "title": "ශරීර කොටස් — A2",
        "emoji": "🧍",
        "sections": [
          {
            "type": "table",
            "title": "Частини тіла",
            "rows": [
              [
                "голова",
                "ඔලුව"
              ],
              [
                "рука",
                "අත"
              ],
              [
                "око",
                "ඇස"
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
        "id": "buddhist-monastic-vocabulary",
        "title": "භික්ෂු ජීවිතය — B2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Буддійська чернеча громада (සංඝය) має власну спеціалізовану лексику для рангів, одягу й повсякденних практик, часто пов'язану з палійськими термінами.",
            "en": {
              "text": "The Buddhist monastic community (sangha) has its own specialized vocabulary for ranks, robes, and daily practices, often tied to Pali terms."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "හාමුදුරුවෝ",
                "шанобливе звертання до монаха"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Buddhist Monastic Vocabulary — B2"
      },
      {
        "id": "clothing-vocabulary",
        "title": "ඇඳුම් — A2",
        "emoji": "👗",
        "sections": [
          {
            "type": "table",
            "title": "Одяг",
            "rows": [
              [
                "саронг",
                "සරම"
              ],
              [
                "сорочка",
                "කමිසය"
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
        "title": "සතුන් — A2",
        "emoji": "🐘",
        "sections": [
          {
            "type": "table",
            "title": "Тварини",
            "rows": [
              [
                "слон",
                "අලියා"
              ],
              [
                "собака",
                "බල්ලා"
              ],
              [
                "риба",
                "මාළුවා"
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
        "id": "elephant-cultural-significance",
        "title": "අලියා: සංස්කෘතික වැදගත්කම — B1",
        "emoji": "🐘",
        "sections": [
          {
            "type": "intro",
            "text": "Слон посідає особливе культурне й релігійне місце на острові, з окремою лексикою для прирученого храмового слона (перахера) і церемонії щорічної процесії Канді з релікварієм зуба Будди.",
            "en": {
              "text": "The elephant holds a special cultural and religious place on the island, with dedicated vocabulary for the tamed temple elephant and the annual Kandy Esala Perahera procession carrying the Buddha's tooth relic."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "මාළිගාව අලියා",
                "храмовий слон"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Elephants and the Kandy Perahera — B1"
      },
      {
        "id": "cardinal-directions",
        "title": "දිශාවන් — B1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "table",
            "title": "Сторони світу",
            "rows": [
              [
                "північ",
                "උතුර"
              ],
              [
                "південь",
                "දකුණ"
              ],
              [
                "схід",
                "නැගෙනහිර"
              ],
              [
                "захід",
                "බටහිර"
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
        "id": "kandy-kingdom-history",
        "title": "මහනුවර රාජධානිය — B2",
        "emoji": "👑",
        "sections": [
          {
            "type": "intro",
            "text": "Королівство Канді — останнє незалежне сингальське царство, що впало під британським контролем 1815 року, лишило по собі багату придворну лексику й церемоніальні терміни, досі вживані в культурному контексті.",
            "en": {
              "text": "The Kingdom of Kandy, the last independent Sinhala kingdom, fell to British control in 1815, leaving behind a rich courtly vocabulary and ceremonial terms still used in cultural contexts today."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "මහනුවර",
                "Канді (столиця королівства)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Kingdom of Kandy — B2"
      },
      {
        "id": "coordinating-conjunctions-extra",
        "title": "තවත් සම්බන්ධක — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Частка නිසා ('тому що') і сполучник එහෙනම් ('тоді, у такому разі') розширюють базовий набір සහ/හෝ/නමුත්, додаючи причинові й наслідкові зв'язки.",
            "en": {
              "text": "The particle නිසා ('because') and the connector එහෙනම් ('then, in that case') extend the basic සහ/හෝ/නමුත් set, adding causal and consequential links."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "වැස්ස නිසා මම ගෙදර ඉන්නවා.",
                "Через дощ я залишаюся вдома."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Further Conjunctions — B1"
      },
      {
        "id": "colonial-loanword-layers",
        "title": "පෝර්තුගීසි-ලන්දේසි වචන — B2",
        "emoji": "⚓",
        "sections": [
          {
            "type": "intro",
            "text": "Століття португальського, голландського й британського колоніального правління залишили в сингальській три послідовні шари запозичень, кожен упізнаваний за власною лексичною сферою (меблі, адміністрація, техніка).",
            "en": {
              "text": "Centuries of Portuguese, Dutch, and British colonial rule left Sinhala three successive loanword layers, each recognizable by its own lexical domain (furniture, administration, technology)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "almariya (з голландської 'шафа')",
                "cupboard (Dutch loan)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Colonial Loanword Layers — B2"
      },
      {
        "id": "sinhala-new-year",
        "title": "අලුත් අවුරුද්ද — B1",
        "emoji": "🎉",
        "sections": [
          {
            "type": "intro",
            "text": "Сингальський і тамільський новий рік святкують одночасно в квітні, за астрологічним, а не календарним циклом, із ритуальним запалюванням вогню в точний, астрологічно вирахуваний момент.",
            "en": {
              "text": "The Sinhala and Tamil New Year are celebrated together in April, on an astrological rather than calendar cycle, with a ritual lighting of the hearth fire at a precise, astrologically calculated moment."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "අලුත් අවුරුද්ද සුබ වේවා!",
                "З Новим роком!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Sinhala New Year — B1"
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
        "id": "irregular-verb-venawa",
        "title": "අක්‍රමවත් ක්‍රියා: වෙනවා — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово වෙනවා ('ставати') має нерегулярну основу минулого часу (උනා), що не відповідає жодному стандартному класу відмінювання дієслів.",
            "en": {
              "text": "The verb වෙනවා ('to become') has an irregular past stem (උනා) that does not match any standard verb-conjugation class."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярна форма",
            "rows": [
              [
                "වෙනවා (стає) → උනා (не *වුණාවා)",
                "becomes → became (irregular stem)"
              ]
            ],
            "en": {
              "title": "Irregular Form"
            }
          }
        ],
        "titleEn": "Irregular Verb: වෙනවා ('to become') — B1"
      },
      {
        "id": "irregular-plural-minissu",
        "title": "අක්‍රමවත් බහුවචනය: මිනිසා — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька дуже частотних живих іменників, зокрема මිනිසා ('людина'), мають множину, що не вписується в жоден стандартний клас, а утворюється зміною кореня.",
            "en": {
              "text": "A handful of very frequent animate nouns, including මිනිසා ('person'), have a plural that fits no standard class, formed instead by root alternation."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярна множина",
            "rows": [
              [
                "මිනිසා → මිනිස්සු (не *මිනිසාලා)",
                "person → people (irregular stem)"
              ]
            ],
            "en": {
              "title": "Irregular Plural"
            }
          }
        ],
        "titleEn": "Irregular Plural: මිනිසා → මිනිස්සු — B2"
      },
      {
        "id": "irregular-comparative-honda",
        "title": "අක්‍රමවත් සංසන්දනය: හොඳ → හොඳම — B1",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник හොඳ ('добрий') утворює найвищий ступінь не через регулярну частку ඉතාම, а через власний посилений суфікс -ම, приєднаний прямо до кореня.",
            "en": {
              "text": "The adjective හොඳ ('good') forms its superlative not through the regular particle ඉතාම, but through its own intensifying suffix -ම attached directly to the root."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярний найвищий ступінь",
            "rows": [
              [
                "හොඳ → හොඳම (не *ඉතාම හොඳ)",
                "good → best (irregular suffix, not the regular particle)"
              ]
            ],
            "en": {
              "title": "Irregular Superlative"
            }
          }
        ],
        "titleEn": "Irregular Superlative: හොඳ → හොඳම — B1"
      }
    ]
  }
];
