import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

const emptyForm = { name: '', email: '', message: '', website: '' };

export function useContactForm() {
  const [data, setData] = useState(emptyForm);
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);
  const update = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setData((current) => ({ ...current, [event.target.name]: event.target.value }));
  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (sending || data.website) return;
    if (data.name.trim().length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) || data.message.trim().length < 10) {
      setStatus('Please provide a valid name, email address and a message of at least 10 characters.');
      return;
    }
    setSending(true);
    setStatus('Sending...');
    try {
      const response = await fetch('https://formspree.io/f/xrbeaovo', { method: 'POST', headers: { Accept: 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify({ name: data.name, email: data.email, message: data.message }) });
      if (!response.ok) throw new Error();
      setStatus('Thank you. Your message has been sent.');
      setData(emptyForm);
    } catch {
      setStatus('The message could not be sent. Please try again later.');
    } finally {
      setSending(false);
    }
  };
  return { data, status, sending, update, submit };
}
