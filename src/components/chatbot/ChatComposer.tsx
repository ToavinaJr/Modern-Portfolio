import type { RefObject } from 'react';
import { Bot, Send } from 'lucide-react';
import { QUICK_PROMPTS } from './constants';

interface ChatComposerProps {
  darkMode: boolean;
  input: string;
  isLoading: boolean;
  inputRef: RefObject<HTMLInputElement | null>;
  setInput: (value: string) => void;
  sendMessage: (message: string) => void;
}

export function ChatComposer({
  darkMode,
  input,
  isLoading,
  inputRef,
  setInput,
  sendMessage,
}: ChatComposerProps) {
  const border = darkMode ? 'border-white/10' : 'border-slate-200';

  const inputStyle = darkMode
    ? 'border-white/10 bg-black/20 text-white placeholder:text-white/35 focus:border-cyan-400/40'
    : 'border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-cyan-500/50';

  return (
    <div
      className={`border-t px-4 py-3 ${border} ${
        darkMode ? 'bg-transparent' : 'bg-white/80'
      }`}
    >
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
          ref={inputRef}
          aria-label="Ask the portfolio assistant"
          maxLength={500}
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Ask me something about the profile..."
          className={`h-11 flex-1 rounded-2xl border px-4 text-sm outline-none ${inputStyle}`}
        />

        <button
          type="submit"
          disabled={isLoading}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
          aria-label="Send"
        >
          <Send size={16} />
        </button>
      </form>

      <div
        className={`mt-3 flex items-center gap-2 text-[11px] ${
          darkMode ? 'text-white/55' : 'text-slate-500'
        }`}
      >
        <Bot size={13} />

        <span>
          Bot-ko is here to answer your questions.
        </span>
      </div>
    </div>
  );
}