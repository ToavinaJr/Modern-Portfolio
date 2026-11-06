import type { RefObject } from 'react';
import { Bot, Send } from 'lucide-react';
import { QUICK_PROMPTS } from './constants';

interface ChatComposerProps {
  input: string;
  isLoading: boolean;
  inputRef: RefObject<HTMLInputElement | null>;
  setInput: (value: string) => void;
  sendMessage: (message: string) => void;
}

export function ChatComposer({
  input,
  isLoading,
  inputRef,
  setInput,
  sendMessage,
}: ChatComposerProps) {
  return (
    <div className="border-t border-line bg-card/80 px-4 py-3">
      <div className="mb-3 flex flex-wrap gap-2">
        {QUICK_PROMPTS.map((prompt) => (
          <button
            key={prompt}
            type="button"
            onClick={() => sendMessage(prompt)}
            className="rounded-lg border border-line bg-secondary px-3 py-1 text-xs text-secondary-foreground transition-colors hover:border-primary/40 hover:bg-accent-surface"
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
          className="h-11 flex-1 rounded-xl border border-line bg-background px-4 text-sm text-foreground outline-none placeholder:text-muted focus:border-primary/50"
        />

        <button
          type="submit"
          disabled={isLoading}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
          aria-label="Send"
        >
          <Send size={16} />
        </button>
      </form>

      <div className="mt-3 flex items-center gap-2 text-[11px] text-muted">
        <Bot size={13} />

        <span>
          Bot-ko is here to answer your questions.
        </span>
      </div>
    </div>
  );
}
