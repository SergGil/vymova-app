// Vymova — js/features/bug-report.tsx
// Bug / feedback report form — opens mailto: with pre-filled subject + body
import { useState, type ReactElement } from 'react';
import { t } from './i18n.ts';
import { useLangVersion } from '../../src/store.ts';

const RECIPIENT = 'beizmans@gmail.com';

const SUBJECT_KEYS = [
  'settings.bugSubjectDefault',
  'settings.bugSubjectData',
  'settings.bugSubjectTech',
  'settings.bugSubjectIdea',
  'settings.bugSubjectOther',
] as const;

export function BugReportForm(): ReactElement {
  useLangVersion();
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [sent, setSent] = useState(false);

  function send(): void {
    const msg = message.trim();
    if (!msg) {
      setError(true);
      return;
    }
    setError(false);

    const subjectVal = subject || t('settings.bugSubjectDefault');
    const body = msg + '\n\n---\nVymova';

    window.location.href =
      `mailto:${RECIPIENT}` +
      `?subject=${encodeURIComponent(subjectVal)}` +
      `&body=${encodeURIComponent(body)}`;

    setSent(true);
    setTimeout(() => {
      setMessage('');
      setSubject('');
      setSent(false);
    }, 2000);
  }

  const inputCls =
    "w-full rounded-[10px] border-[1.5px] border-[var(--border)] bg-[var(--bg)] px-3 py-2.5 font-[inherit] text-[.85rem] text-[var(--text)] outline-none transition-colors duration-150 focus:border-[var(--accent)]";

  return (
    <div className="bug-form mt-3 flex flex-col gap-2.5" id="bug-form">
      <select
        id="bug-subject"
        className={`bug-select ${inputCls}`}
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      >
        {SUBJECT_KEYS.map((key) => (
          <option key={key} value={key === 'settings.bugSubjectDefault' ? '' : t(key)}>
            {t(key)}
          </option>
        ))}
      </select>
      <textarea
        id="bug-message"
        className={`bug-textarea ${inputCls} min-h-[90px] resize-y leading-[1.5]${error ? ' bug-error border-[#e74c3c]' : ''}`}
        rows={4}
        placeholder={t('settings.bugPlaceholder')}
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
          setError(false);
        }}
      />
      <div className="bug-row flex flex-wrap items-center gap-3">
        <button
          id="bug-send-btn"
          className="bug-send-btn cursor-pointer rounded-[10px] border-[1.5px] border-[var(--accent)] bg-[var(--accent)] px-[22px] py-2.5 font-[inherit] text-[.88rem] font-semibold text-white transition-opacity duration-150 hover:opacity-85"
          onClick={send}
        >
          {t('settings.bugSendBtn')}
        </button>
        <span
          id="bug-sent-note"
          className="bug-sent-note text-[.8rem] text-[var(--text2)]"
          style={{ display: sent ? 'inline' : 'none' }}
        >
          {t('settings.bugSentNote')}
        </span>
      </div>
    </div>
  );
}
