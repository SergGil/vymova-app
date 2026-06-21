// Vymova — js/features/voice-roleplay.tsx
// Голосовий ШІ-ролеплей: browser-native speech recognition (free, no API key)
// + the same Cloudflare Worker proxy as ai-tutor.tsx, in "roleplay" mode —
// the AI plays a scenario character and returns an in-character reply plus
// a grammar-feedback note on the user's last turn.
import { createPortal } from 'react-dom';
import { useRef, useState, type ReactElement } from 'react';
import { AI_PROXY_URL, AI_TUTOR_ENABLED } from '../config.ts';
import { getKnowLang, getLearnLang } from './lang-pair-select.tsx';
import { _speakWithLang } from './speech.ts';
import { t } from './i18n.ts';
import { useStateVersion } from '../../src/store.ts';
import { bindOverlayDismiss } from './overlay-utils.ts';

export type ScenarioId =
  | 'job-interview' | 'ordering-coffee' | 'restaurant' | 'hotel-checkin' | 'airport-security'
  | 'doctor-appointment' | 'asking-directions' | 'shopping-clothes' | 'returning-item' | 'bank-account'
  | 'renting-apartment' | 'performance-review' | 'small-talk-party' | 'taxi-ride' | 'car-rental'
  | 'gym-membership' | 'hairdresser' | 'noise-complaint' | 'tech-support' | 'ordering-pizza'
  | 'lost-luggage' | 'museum-tour' | 'ordering-takeout' | 'booking-flight' | 'negotiating-price'
  | 'emergency-call' | 'parent-teacher' | 'first-date' | 'customer-complaint' | 'networking-event'
  | 'lost-passport' | 'train-station' | 'bus-information' | 'hostel-checkin' | 'car-breakdown'
  | 'parking-ticket' | 'lost-and-found' | 'customs-declaration' | 'car-accident' | 'weather-smalltalk'
  | 'job-offer-negotiation' | 'coworker-conflict' | 'client-meeting' | 'business-trip-planning' | 'resignation'
  | 'asking-for-raise' | 'onboarding-new-job' | 'conference-networking' | 'team-standup' | 'freelance-pitch'
  | 'ordering-fastfood' | 'wine-tasting' | 'grocery-shopping' | 'food-allergy' | 'cooking-class'
  | 'farmers-market' | 'birthday-party' | 'baking-recipe' | 'food-delivery-issue' | 'dinner-party-host'
  | 'dentist-visit' | 'pharmacy-visit' | 'vet-appointment' | 'fitness-trainer' | 'mental-health-checkin'
  | 'eye-exam' | 'yoga-class' | 'hospital-checkin' | 'nutrition-consult' | 'physical-therapy'
  | 'real-estate-viewing' | 'utility-setup' | 'moving-day' | 'neighbor-introduction' | 'home-repair'
  | 'internet-installation' | 'insurance-claim' | 'furniture-shopping' | 'pet-adoption' | 'garden-center'
  | 'wedding-planning' | 'blind-date' | 'meeting-in-laws' | 'breakup-conversation' | 'catching-up-friend'
  | 'roommate-agreement' | 'family-reunion' | 'apologizing-friend' | 'giving-advice' | 'volunteer-orientation'
  | 'university-application' | 'classroom-discussion' | 'library-help-desk' | 'study-group' | 'exam-stress'
  | 'police-report' | 'dmv-appointment' | 'voting-registration' | 'jury-duty' | 'tax-office-visit';

export const SCENARIOS: { id: ScenarioId; emoji: string; labelKey: string }[] = [
  { id: 'job-interview', emoji: '💼', labelKey: 'roleplay.scenarioInterview' },
  { id: 'ordering-coffee', emoji: '☕', labelKey: 'roleplay.scenarioCoffee' },
  { id: 'restaurant', emoji: '🍽️', labelKey: 'roleplay.scenarioRestaurant' },
  { id: 'hotel-checkin', emoji: '🏨', labelKey: 'roleplay.scenarioHotel' },
  { id: 'airport-security', emoji: '✈️', labelKey: 'roleplay.scenarioAirport' },
  { id: 'doctor-appointment', emoji: '🩺', labelKey: 'roleplay.scenarioDoctor' },
  { id: 'asking-directions', emoji: '🗺️', labelKey: 'roleplay.scenarioDirections' },
  { id: 'shopping-clothes', emoji: '👕', labelKey: 'roleplay.scenarioShopping' },
  { id: 'returning-item', emoji: '🔄', labelKey: 'roleplay.scenarioReturn' },
  { id: 'bank-account', emoji: '🏦', labelKey: 'roleplay.scenarioBank' },
  { id: 'renting-apartment', emoji: '🏠', labelKey: 'roleplay.scenarioRenting' },
  { id: 'performance-review', emoji: '📈', labelKey: 'roleplay.scenarioReview' },
  { id: 'small-talk-party', emoji: '🎉', labelKey: 'roleplay.scenarioParty' },
  { id: 'taxi-ride', emoji: '🚕', labelKey: 'roleplay.scenarioTaxi' },
  { id: 'car-rental', emoji: '🚗', labelKey: 'roleplay.scenarioCarRental' },
  { id: 'gym-membership', emoji: '🏋️', labelKey: 'roleplay.scenarioGym' },
  { id: 'hairdresser', emoji: '💇', labelKey: 'roleplay.scenarioHairdresser' },
  { id: 'noise-complaint', emoji: '🔇', labelKey: 'roleplay.scenarioNoiseComplaint' },
  { id: 'tech-support', emoji: '💻', labelKey: 'roleplay.scenarioTechSupport' },
  { id: 'ordering-pizza', emoji: '🍕', labelKey: 'roleplay.scenarioPizza' },
  { id: 'lost-luggage', emoji: '🧳', labelKey: 'roleplay.scenarioLuggage' },
  { id: 'museum-tour', emoji: '🖼️', labelKey: 'roleplay.scenarioMuseum' },
  { id: 'ordering-takeout', emoji: '🥡', labelKey: 'roleplay.scenarioTakeout' },
  { id: 'booking-flight', emoji: '🎫', labelKey: 'roleplay.scenarioFlight' },
  { id: 'negotiating-price', emoji: '🤝', labelKey: 'roleplay.scenarioNegotiate' },
  { id: 'emergency-call', emoji: '🚨', labelKey: 'roleplay.scenarioEmergency' },
  { id: 'parent-teacher', emoji: '🍎', labelKey: 'roleplay.scenarioParentTeacher' },
  { id: 'first-date', emoji: '❤️', labelKey: 'roleplay.scenarioFirstDate' },
  { id: 'customer-complaint', emoji: '📞', labelKey: 'roleplay.scenarioComplaint' },
  { id: 'networking-event', emoji: '🧑‍💼', labelKey: 'roleplay.scenarioNetworking' },
  { id: 'lost-passport', emoji: '🛂', labelKey: 'roleplay.scenarioLostPassport' },
  { id: 'train-station', emoji: '🚆', labelKey: 'roleplay.scenarioTrainStation' },
  { id: 'bus-information', emoji: '🚌', labelKey: 'roleplay.scenarioBusInfo' },
  { id: 'hostel-checkin', emoji: '🎒', labelKey: 'roleplay.scenarioHostel' },
  { id: 'car-breakdown', emoji: '🔧', labelKey: 'roleplay.scenarioCarBreakdown' },
  { id: 'parking-ticket', emoji: '🎫', labelKey: 'roleplay.scenarioParkingTicket' },
  { id: 'lost-and-found', emoji: '🔍', labelKey: 'roleplay.scenarioLostFound' },
  { id: 'customs-declaration', emoji: '🛃', labelKey: 'roleplay.scenarioCustoms' },
  { id: 'car-accident', emoji: '🚗', labelKey: 'roleplay.scenarioCarAccident' },
  { id: 'weather-smalltalk', emoji: '☀️', labelKey: 'roleplay.scenarioWeather' },
  { id: 'job-offer-negotiation', emoji: '💰', labelKey: 'roleplay.scenarioJobOffer' },
  { id: 'coworker-conflict', emoji: '😤', labelKey: 'roleplay.scenarioCoworkerConflict' },
  { id: 'client-meeting', emoji: '🤵', labelKey: 'roleplay.scenarioClientMeeting' },
  { id: 'business-trip-planning', emoji: '🧳', labelKey: 'roleplay.scenarioBusinessTrip' },
  { id: 'resignation', emoji: '📝', labelKey: 'roleplay.scenarioResignation' },
  { id: 'asking-for-raise', emoji: '💵', labelKey: 'roleplay.scenarioRaise' },
  { id: 'onboarding-new-job', emoji: '👋', labelKey: 'roleplay.scenarioOnboarding' },
  { id: 'conference-networking', emoji: '🎤', labelKey: 'roleplay.scenarioConference' },
  { id: 'team-standup', emoji: '📋', labelKey: 'roleplay.scenarioStandup' },
  { id: 'freelance-pitch', emoji: '📊', labelKey: 'roleplay.scenarioFreelancePitch' },
  { id: 'ordering-fastfood', emoji: '🍔', labelKey: 'roleplay.scenarioFastFood' },
  { id: 'wine-tasting', emoji: '🍷', labelKey: 'roleplay.scenarioWineTasting' },
  { id: 'grocery-shopping', emoji: '🛒', labelKey: 'roleplay.scenarioGrocery' },
  { id: 'food-allergy', emoji: '⚠️', labelKey: 'roleplay.scenarioFoodAllergy' },
  { id: 'cooking-class', emoji: '👨‍🍳', labelKey: 'roleplay.scenarioCookingClass' },
  { id: 'farmers-market', emoji: '🥕', labelKey: 'roleplay.scenarioFarmersMarket' },
  { id: 'birthday-party', emoji: '🎂', labelKey: 'roleplay.scenarioBirthdayParty' },
  { id: 'baking-recipe', emoji: '🍰', labelKey: 'roleplay.scenarioRecipe' },
  { id: 'food-delivery-issue', emoji: '🍱', labelKey: 'roleplay.scenarioDeliveryIssue' },
  { id: 'dinner-party-host', emoji: '🍽️', labelKey: 'roleplay.scenarioDinnerHost' },
  { id: 'dentist-visit', emoji: '🦷', labelKey: 'roleplay.scenarioDentist' },
  { id: 'pharmacy-visit', emoji: '💊', labelKey: 'roleplay.scenarioPharmacy' },
  { id: 'vet-appointment', emoji: '🐾', labelKey: 'roleplay.scenarioVet' },
  { id: 'fitness-trainer', emoji: '🏃', labelKey: 'roleplay.scenarioTrainer' },
  { id: 'mental-health-checkin', emoji: '🧠', labelKey: 'roleplay.scenarioTherapy' },
  { id: 'eye-exam', emoji: '👓', labelKey: 'roleplay.scenarioEyeExam' },
  { id: 'yoga-class', emoji: '🧘', labelKey: 'roleplay.scenarioYoga' },
  { id: 'hospital-checkin', emoji: '🏥', labelKey: 'roleplay.scenarioHospital' },
  { id: 'nutrition-consult', emoji: '🥗', labelKey: 'roleplay.scenarioNutrition' },
  { id: 'physical-therapy', emoji: '🦵', labelKey: 'roleplay.scenarioPhysicalTherapy' },
  { id: 'real-estate-viewing', emoji: '🏡', labelKey: 'roleplay.scenarioRealEstate' },
  { id: 'utility-setup', emoji: '💡', labelKey: 'roleplay.scenarioUtilities' },
  { id: 'moving-day', emoji: '📦', labelKey: 'roleplay.scenarioMovingDay' },
  { id: 'neighbor-introduction', emoji: '👋', labelKey: 'roleplay.scenarioNeighbor' },
  { id: 'home-repair', emoji: '🔨', labelKey: 'roleplay.scenarioHomeRepair' },
  { id: 'internet-installation', emoji: '📡', labelKey: 'roleplay.scenarioInternetInstall' },
  { id: 'insurance-claim', emoji: '📄', labelKey: 'roleplay.scenarioInsuranceClaim' },
  { id: 'furniture-shopping', emoji: '🛋️', labelKey: 'roleplay.scenarioFurniture' },
  { id: 'pet-adoption', emoji: '🐶', labelKey: 'roleplay.scenarioPetAdoption' },
  { id: 'garden-center', emoji: '🌱', labelKey: 'roleplay.scenarioGardenCenter' },
  { id: 'wedding-planning', emoji: '💍', labelKey: 'roleplay.scenarioWeddingPlanning' },
  { id: 'blind-date', emoji: '🌹', labelKey: 'roleplay.scenarioBlindDate' },
  { id: 'meeting-in-laws', emoji: '👫', labelKey: 'roleplay.scenarioInLaws' },
  { id: 'breakup-conversation', emoji: '💔', labelKey: 'roleplay.scenarioBreakup' },
  { id: 'catching-up-friend', emoji: '☕', labelKey: 'roleplay.scenarioCatchUp' },
  { id: 'roommate-agreement', emoji: '🏠', labelKey: 'roleplay.scenarioRoommate' },
  { id: 'family-reunion', emoji: '👨‍👩‍👧', labelKey: 'roleplay.scenarioFamilyReunion' },
  { id: 'apologizing-friend', emoji: '🙏', labelKey: 'roleplay.scenarioApology' },
  { id: 'giving-advice', emoji: '💬', labelKey: 'roleplay.scenarioAdvice' },
  { id: 'volunteer-orientation', emoji: '🤲', labelKey: 'roleplay.scenarioVolunteer' },
  { id: 'university-application', emoji: '🎓', labelKey: 'roleplay.scenarioUniversityApp' },
  { id: 'classroom-discussion', emoji: '🏫', labelKey: 'roleplay.scenarioClassroom' },
  { id: 'library-help-desk', emoji: '📚', labelKey: 'roleplay.scenarioLibrary' },
  { id: 'study-group', emoji: '📖', labelKey: 'roleplay.scenarioStudyGroup' },
  { id: 'exam-stress', emoji: '😰', labelKey: 'roleplay.scenarioExamStress' },
  { id: 'police-report', emoji: '👮', labelKey: 'roleplay.scenarioPoliceReport' },
  { id: 'dmv-appointment', emoji: '🪪', labelKey: 'roleplay.scenarioDmv' },
  { id: 'voting-registration', emoji: '🗳️', labelKey: 'roleplay.scenarioVoting' },
  { id: 'jury-duty', emoji: '⚖️', labelKey: 'roleplay.scenarioJuryDuty' },
  { id: 'tax-office-visit', emoji: '🧾', labelKey: 'roleplay.scenarioTaxOffice' },
];

const SPEECH_LANG: Record<string, string> = {
  ua: 'uk-UA', en: 'en-US', es: 'es-ES', fr: 'fr-FR', it: 'it-IT', pt: 'pt-PT', de: 'de-DE',
  he: 'he-IL', ar: 'ar-SA', pl: 'pl-PL', zh: 'zh-CN', el: 'el-GR', ja: 'ja-JP', tr: 'tr-TR', nl: 'nl-NL',
};

export interface RoleplayTurn { role: 'user' | 'assistant'; text: string; feedback?: string; }

interface SpeechRecognitionLike extends EventTarget {
  lang: string;
  interimResults: boolean;
  continuous: boolean;
  start(): void;
  stop(): void;
  onresult: ((e: { results: { 0: { transcript: string } }[] }) => void) | null;
  onerror: (() => void) | null;
  onend: (() => void) | null;
}

function getSpeechRecognition(): (new () => SpeechRecognitionLike) | null {
  const w = window as unknown as { SpeechRecognition?: new () => SpeechRecognitionLike; webkitSpeechRecognition?: new () => SpeechRecognitionLike };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

export function speechRecognitionSupported(): boolean {
  return getSpeechRecognition() !== null;
}

// Parses the worker's "<reply>\nFEEDBACK: <note>" convention into parts.
export function splitFeedback(raw: string): { reply: string; feedback: string | null } {
  const idx = raw.indexOf('FEEDBACK:');
  if (idx === -1) return { reply: raw.trim(), feedback: null };
  return { reply: raw.slice(0, idx).trim(), feedback: raw.slice(idx + 'FEEDBACK:'.length).trim() };
}

export async function sendRoleplayMessage(scenario: ScenarioId, turns: RoleplayTurn[]): Promise<{ reply: string; feedback: string | null }> {
  const res = await fetch(`${AI_PROXY_URL}/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      mode: 'roleplay',
      scenario,
      lang: { know: getKnowLang(), learn: getLearnLang() },
      messages: turns.map(m => ({ role: m.role, text: m.text })),
    }),
  });
  if (!res.ok) throw new Error(`AI proxy responded ${res.status}`);
  const data = await res.json() as { text?: string };
  if (!data.text) throw new Error('AI proxy returned no text');
  return splitFeedback(data.text);
}

export function VoiceRoleplayPage(): ReactElement | null {
  useStateVersion();
  const target = document.getElementById('voice-roleplay-content');
  const [scenario, setScenario] = useState<ScenarioId | null>(null);
  const [turns, setTurns] = useState<RoleplayTurn[]>([]);
  const [listening, setListening] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);
  const supported = speechRecognitionSupported();

  if (!target) return null;
  if (!AI_TUTOR_ENABLED) {
    return createPortal(
      <div style={{ padding: '24px 16px', textAlign: 'center', color: 'var(--text3)' }}>{t('aiTutor.disabled')}</div>,
      target,
    );
  }

  const speakReply = (text: string): void => {
    const lang = SPEECH_LANG[getLearnLang()] ?? 'en-US';
    _speakWithLang(text, lang, null);
  };

  const send = async (text: string): Promise<void> => {
    const clean = text.trim();
    if (!clean || pending || !scenario) return;
    setError(null);
    const next = [...turns, { role: 'user' as const, text: clean }];
    setTurns(next);
    setTextInput('');
    setPending(true);
    try {
      const { reply, feedback } = await sendRoleplayMessage(scenario, next);
      setTurns(t2 => {
        const updated = t2.map((turn, i) => (i === t2.length - 1 ? { ...turn, feedback: feedback ?? undefined } : turn));
        return [...updated, { role: 'assistant', text: reply }];
      });
      speakReply(reply);
    } catch {
      setError(t('aiTutor.error'));
    } finally {
      setPending(false);
    }
  };

  const startListening = (): void => {
    const Ctor = getSpeechRecognition();
    if (!Ctor || !scenario) return;
    const rec = new Ctor();
    rec.lang = SPEECH_LANG[getLearnLang()] ?? 'en-US';
    rec.interimResults = false;
    rec.continuous = false;
    rec.onresult = (e) => {
      const transcript = e.results[0]?.[0]?.transcript ?? '';
      if (transcript) void send(transcript);
    };
    rec.onerror = () => setListening(false);
    rec.onend = () => setListening(false);
    recognitionRef.current = rec;
    setListening(true);
    rec.start();
  };

  const stopListening = (): void => {
    recognitionRef.current?.stop();
    setListening(false);
  };

  const pickScenario = (id: ScenarioId): void => {
    setScenario(id);
    setTurns([]);
    setError(null);
  };

  return createPortal(
    <div className="roleplay-panel">
      {!scenario ? (
        <div className="roleplay-scenarios">
          <div className="ai-tutor-hint">{t('roleplay.pickScenario')}</div>
          <ol className="roleplay-scenario-list">
            {SCENARIOS.map((s, i) => (
              <li key={s.id}>
                <button className="roleplay-scenario-row" onClick={() => pickScenario(s.id)}>
                  <span className="roleplay-scenario-num">{i + 1}</span>
                  <span className="roleplay-scenario-emoji">{s.emoji}</span>
                  <span className="roleplay-scenario-label">{t(s.labelKey as any)}</span>
                </button>
              </li>
            ))}
          </ol>
        </div>
      ) : (
        <>
          <div className="roleplay-header">
            <span>{SCENARIOS.find(s => s.id === scenario)?.emoji} {t(SCENARIOS.find(s => s.id === scenario)!.labelKey as any)}</span>
            <button className="roleplay-change-btn" onClick={() => setScenario(null)}>{t('roleplay.changeScenario')}</button>
          </div>

          <div className="ai-tutor-messages roleplay-messages">
            {turns.length === 0 && <div className="ai-tutor-hint">{t('roleplay.startHint')}</div>}
            {turns.map((turn, i) => (
              <div key={i}>
                <div className={`ai-tutor-msg ai-tutor-msg-${turn.role}`}>{turn.text}</div>
                {turn.feedback && <div className="roleplay-feedback">📝 {turn.feedback}</div>}
              </div>
            ))}
            {pending && <div className="ai-tutor-msg ai-tutor-msg-assistant ai-tutor-typing">{t('aiTutor.typing')}</div>}
            {error && <div className="ai-tutor-error">{error}</div>}
          </div>

          <div className="roleplay-controls">
            {supported ? (
              <button
                className={`roleplay-mic-btn${listening ? ' listening' : ''}`}
                onClick={listening ? stopListening : startListening}
                disabled={pending}
              >{listening ? `⏹ ${t('roleplay.stop')}` : `🎤 ${t('roleplay.speak')}`}</button>
            ) : (
              <form
                className="ai-tutor-form"
                onSubmit={(e) => { e.preventDefault(); void send(textInput); }}
              >
                <input
                  className="ai-tutor-input"
                  value={textInput}
                  onChange={e => setTextInput(e.target.value)}
                  placeholder={t('roleplay.noMicPlaceholder')}
                  disabled={pending}
                />
                <button type="submit" className="ai-tutor-send" disabled={pending || !textInput.trim()}>{t('aiTutor.send')}</button>
              </form>
            )}
          </div>
        </>
      )}
    </div>,
    target,
  );
}

bindOverlayDismiss('voice-roleplay-overlay', 'voice-roleplay-close');
