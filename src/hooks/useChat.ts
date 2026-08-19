import { useEffect, useRef, useState } from 'react';
import type { ChatApiResponse, ChatMessage } from '../types';
import { PENDING_RESPONSE, WELCOME_MESSAGE } from '../components/chatbot/constants';

export function useChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([{ id: 'welcome', role: 'assistant', content: WELCOME_MESSAGE }]);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const sendMessage = async (rawText: string) => {
    const text = rawText.trim();
    if (!text || isLoading) return;
    const userMessage: ChatMessage = { id: crypto.randomUUID(), role: 'user', content: text };
    const assistantMessageId = crypto.randomUUID();
    const pendingMessage: ChatMessage = { id: assistantMessageId, role: 'assistant', content: PENDING_RESPONSE };
    setMessages((current) => [...current, userMessage, pendingMessage]);
    setInput(''); setIsOpen(true); setIsLoading(true);
    const history = [...messages, userMessage].filter((message) => message.content !== PENDING_RESPONSE).slice(-10).map(({ role, content }) => ({ role, content }));
    try {
      const controller = new AbortController();
      const timeout = window.setTimeout(() => controller.abort(), 15_000);
      const response = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: text, history }), signal: controller.signal });
      window.clearTimeout(timeout);
      if (!response.ok) throw new Error(response.status === 429 ? 'The assistant is receiving too many requests. Please wait a minute and try again.' : 'The portfolio assistant is temporarily unavailable. Please try again later.');
      const data = (await response.json()) as ChatApiResponse;
      const answer = data.answer?.trim() || 'The assistant returned an empty response. Please try again.';
      setMessages((current) => current.map((message) => message.id === assistantMessageId ? { ...message, content: answer } : message));
    } catch (error) {
      const content = error instanceof Error && error.name !== 'AbortError' ? error.message : 'The request timed out. Please try again.';
      setMessages((current) => current.map((message) => message.id === assistantMessageId ? { ...message, content } : message));
    } finally { setIsLoading(false); }
  };

  useEffect(() => { if (isOpen) messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' }); }, [isOpen, messages]);
  useEffect(() => {
    if (!isOpen) return;
    inputRef.current?.focus();
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setIsOpen(false);
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [isOpen]);
  return { input, setInput, isLoading, isOpen, setIsOpen, messages, messagesEndRef, inputRef, sendMessage };
}
