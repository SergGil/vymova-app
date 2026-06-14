// English Words App — js/features/bug-report.tsx
// Bug / feedback report form — opens mailto: with pre-filled subject + body
import { useState, type ReactElement } from 'react';
import { t } from './i18n.ts';
import { useStateVersion } from '../../src/store.ts';

const RECIPIENT = 'beizmans@gmail.com';

const SUBJECT_KEYS = [
  'settings.bugSubjectDefault',
  'settings.bugSubjectData',
  'settings.bugSubjectTech',
  'settings.bugSubjectIdea',
  'settings.bugSubjectOther',
] as const;

export function BugReportForm(): ReactElement {
  useStateVersion();
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [sent, setSent] = useState(false);

  function send(): void {
    const msg = message.trim();
    if (!msg) { setError(true); return; }
    setError(false);

    const subjectVal = subject || t('settings.bugSubjectDefault');
    const body = msg + '\n\n---\nEnglish Words App';

    window.location.href =
      `mailto:${RECIPIENT}` +
      `?subject=${encodeURIComponent(subjectVal)}` +
      `&body=${encodeURIComponent(body)}`;

    setSent(true);
    setTimeout(() => { setMessage(''); setSubject(''); setSent(false); }, 2000);
  }

  return (
    <div className="bug-form" id="bug-form">
      <select id="bug-subject" className="bug-select" value={subject} onChange={e => setSubject(e.target.value)}>
        {SUBJECT_KEYS.map(key => <option key={key} value={key === 'settings.bugSubjectDefault' ? '' : t(key)}>{t(key)}</option>)}
      </select>
      <textarea
        id="bug-message"
        className={`bug-textarea${error ? ' bug-error' : ''}`}
        rows={4}
        placeholder={t('settings.bugPlaceholder')}
        value={message}
        onChange={e => { setMessage(e.target.value); setError(false); }}
      />
      <div className="bug-row">
        <button id="bug-send-btn" className="bug-send-btn" onClick={send}>{t('settings.bugSendBtn')}</button>
        <span id="bug-sent-note" className="bug-sent-note" style={{ display: sent ? 'inline' : 'none' }}>{t('settings.bugSentNote')}</span>
      </div>
    </div>
  );
}
