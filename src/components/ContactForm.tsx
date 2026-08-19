import { useContactForm } from '../hooks/useContactForm';

export const ContactForm = () => {
  const { data, status, sending, update, submit } = useContactForm();

  return <form className="info-card contact-form w-full max-w-none" onSubmit={submit} noValidate aria-label="Contact form">
      <label>Name<input name="name" value={data.name} onChange={update} autoComplete="name" required minLength={2}/></label>
      <label>Email<input name="email" type="email" value={data.email} onChange={update} autoComplete="email" required/></label>
      <label>Message<textarea name="message" value={data.message} onChange={update} rows={6} required minLength={10}/></label>
      <label className="honeypot" aria-hidden="true">Website<input name="website" value={data.website} onChange={update} tabIndex={-1} autoComplete="off"/></label>
      <button className="button" disabled={sending}>{sending ? 'Sending...' : 'Send Message'}</button>
      <p role="status" aria-live="polite">{status}</p>
  </form>;
};
