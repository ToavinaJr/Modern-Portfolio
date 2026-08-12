import { useState } from 'react';

export const ContactForm = ({ darkMode }: { darkMode: boolean }) => {
  const [data, setData] = useState({ name: '', email: '', message: '', website: '' });
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);
  const update = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setData({ ...data, [event.target.name]: event.target.value });

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (sending || data.website) return;
    if (data.name.trim().length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) || data.message.trim().length < 10) {
      setStatus('Please provide a valid name, email address and a message of at least 10 characters.');
      return;
    }
    setSending(true);
    setStatus('Sending...');
    try {
      const response = await fetch('https://formspree.io/f/xrbeaovo', {
        method: 'POST', headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: data.name, email: data.email, message: data.message }),
      });
      if (!response.ok) throw new Error();
      setStatus('Thank you. Your message has been sent.');
      setData({ name: '', email: '', message: '', website: '' });
    } catch {
      setStatus('The message could not be sent. Please try again later.');
    } finally { setSending(false); }
  };

  return <section id="contact" className="section" data-theme-context={darkMode ? 'dark' : 'light'}>
    <div className="eyebrow">Contact</div><h2>Let&apos;s build something useful</h2>
    <p className="lead mb-4">I am open full-stack roles, C++/Qt opportunities and remote international projects.</p>
    <form className="info-card contact-form" onSubmit={submit} noValidate>
      <label>Name<input name="name" value={data.name} onChange={update} autoComplete="name" required minLength={2}/></label>
      <label>Email<input name="email" type="email" value={data.email} onChange={update} autoComplete="email" required/></label>
      <label>Message<textarea name="message" value={data.message} onChange={update} rows={6} required minLength={10}/></label>
      <label className="honeypot" aria-hidden="true">Website<input name="website" value={data.website} onChange={update} tabIndex={-1} autoComplete="off"/></label>
      <button className="button" disabled={sending}>{sending ? 'Sending...' : 'Send Message'}</button>
      <p role="status" aria-live="polite">{status}</p>
    </form>
  </section>;
};
