import {
  ChevronDown,
  MessageCircle,
} from 'lucide-react';
import { ASSISTANT_TOPICS } from './constants';

export function ChatLauncher({
  isOpen,
  onToggle,
}: {
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <>
      <button
        type="button"
        onClick={onToggle}
        className="fixed right-5 bottom-5 z-40 inline-flex items-center gap-3 rounded-xl border border-line bg-card px-4 py-3 text-sm font-medium text-card-foreground shadow-[0_12px_30px_hsl(var(--foreground)/0.12)] transition-colors hover:border-primary/50"
        aria-label="Open chatbot"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <MessageCircle size={18} />
        </span>

        <span className="hidden sm:inline">
          Chat
        </span>

        <ChevronDown
          size={16}
          className={`transition ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {!isOpen && (
        <p className="fixed right-5 bottom-20 z-40 hidden max-w-[14rem] rounded-xl border border-line bg-card/90 px-3 py-2 text-center text-[11px] text-muted backdrop-blur-xl sm:block">
          Ask about {ASSISTANT_TOPICS.join(', ')}.
        </p>
      )}
    </>
  );
}
