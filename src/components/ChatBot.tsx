import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Bot, ChevronDown, MessageCircle, Send, Sparkles, X } from 'lucide-react';
import chatbotKnowledge from '../data/chatbotKnowledge';
import { ChatMessage } from '../types';
import { generateAnswer } from '../lib/chatbot';

const QUICK_PROMPTS = [
  'Parle-moi du profil',
  'Quels sont les projets principaux ?',
  'Quelle est la stack technique ?',
  'Quelles certifications as-tu ?',
];

type ChatBotProps = {
  darkMode: boolean;
};

const ChatBot = ({ darkMode }: ChatBotProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content:
        'Bonjour, je suis l\'assistant du portfolio. Pose-moi une question sur le profil, les projets, la stack ou la formation.',
    },
  ]);

  const assistantHint = useMemo(
    () => ['profil', 'projets', 'stack', 'formation', 'certifications', 'contact'],
    [],
  );
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const shellClassName = darkMode
    ? 'border-white/10 bg-[#08101f]/95 text-white shadow-[0_25px_80px_rgba(0,0,0,0.45)]'
    : 'border-slate-200 bg-white/95 text-slate-900 shadow-[0_25px_80px_rgba(15,23,42,0.18)]';

  const panelTextClassName = darkMode ? 'text-white' : 'text-slate-900';
  const mutedTextClassName = darkMode ? 'text-white/55' : 'text-slate-500';
  const borderClassName = darkMode ? 'border-white/10' : 'border-slate-200';
  const inputClassName = darkMode
    ? 'border-white/10 bg-black/20 text-white placeholder:text-white/35 focus:border-cyan-400/40'
    : 'border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-cyan-500/50';
  const bubbleClassName = darkMode
    ? 'border-white/10 bg-white/5 text-white/88'
    : 'border-slate-200 bg-slate-50 text-slate-800';

  const sendMessage = (rawText: string) => {
    const text = rawText.trim();

    if (!text) {
      return;
    }

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: 'user',
      content: text,
    };

    const assistantMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: 'assistant',
      content: generateAnswer(text, chatbotKnowledge),
    };

    setMessages((current) => [...current, userMessage, assistantMessage]);
    setInput('');
    setIsOpen(true);
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [isOpen, messages]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className={`fixed bottom-5 right-5 z-50 flex h-[min(36rem,calc(100vh-2.5rem))] w-[min(92vw,24rem)] flex-col overflow-hidden rounded-3xl border backdrop-blur-xl ${shellClassName}`}
          >
            <div className={`flex items-center justify-between border-b px-4 py-3 ${borderClassName}`}>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-300">
                  <Sparkles size={18} />
                </div>
                <div>
                  <p className={`text-sm font-semibold ${panelTextClassName}`}>Portfolio Assistant</p>
                  <p className={`text-xs ${mutedTextClassName}`}>RAG local sur le profil</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className={`rounded-full p-2 transition ${darkMode ? 'text-white/60 hover:bg-white/10 hover:text-white' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'}`}
                aria-label="Fermer le chat"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      message.role === 'user'
                        ? 'bg-cyan-500 text-slate-950'
                        : bubbleClassName
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className={`border-t px-4 py-3 ${borderClassName} ${darkMode ? 'bg-transparent' : 'bg-white/80'}`}>
              <div className="mb-3 flex flex-wrap gap-2">
                {QUICK_PROMPTS.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => sendMessage(prompt)}
                    className={`rounded-full border px-3 py-1 text-xs transition ${
                      darkMode
                        ? 'border-white/10 bg-white/5 text-white/75 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-white'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-cyan-500/40 hover:bg-cyan-50 hover:text-slate-900'
                    }`}
                  >
                    {prompt}
                  </button>
                ))}
              </div>

              <form
                className="flex items-center gap-2"
                onSubmit={(event) => {
                  event.preventDefault();
                  sendMessage(input);
                }}
              >
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Demande-moi quelque chose sur le profil..."
                  className={`h-11 flex-1 rounded-2xl border px-4 text-sm outline-none ${inputClassName}`}
                />
                <button
                  type="submit"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950 transition hover:bg-cyan-300"
                  aria-label="Envoyer"
                >
                  <Send size={16} />
                </button>
              </form>

              <div className={`mt-3 flex items-center gap-2 text-[11px] ${mutedTextClassName}`}>
                <Bot size={13} />
                <span>Réponses construites à partir de la base de connaissance du portfolio.</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className={`fixed bottom-5 right-5 z-40 inline-flex items-center gap-3 rounded-full border px-4 py-3 text-sm font-medium transition hover:translate-y-[-2px] ${
          darkMode
            ? 'border-cyan-400/30 bg-[#08101f] text-white shadow-[0_20px_60px_rgba(0,0,0,0.4)] hover:border-cyan-300/60'
            : 'border-cyan-500/20 bg-white text-slate-900 shadow-[0_20px_60px_rgba(15,23,42,0.14)] hover:border-cyan-500/50'
        }`}
        aria-label="Ouvrir le chatbot"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-300">
          <MessageCircle size={18} />
        </span>
        <span className="hidden sm:inline">Chat du portfolio</span>
        <ChevronDown size={16} className={`transition ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <div
        className={`fixed bottom-24 right-7 z-40 hidden max-w-[14rem] rounded-2xl border px-3 py-2 text-[11px] backdrop-blur-xl sm:block ${
          darkMode
            ? 'border-white/10 bg-black/30 text-white/60'
            : 'border-slate-200 bg-white/90 text-slate-500'
        }`}
      >
        Pose une question sur {assistantHint.join(', ')}.
      </div>
    </>
  );
};

export default ChatBot;