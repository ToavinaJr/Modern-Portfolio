import type { RefObject } from 'react';
import { Loader2 } from 'lucide-react';
import type { ChatMessage } from '../../types';
import { PENDING_RESPONSE } from './constants';

export function ChatMessages({
  messages,
  endRef,
}: {
  messages: ChatMessage[];
  endRef: RefObject<HTMLDivElement | null>;
}) {
  const bubble = 'border-line bg-secondary text-secondary-foreground';
  const pending = 'border-line bg-secondary text-muted';

  return (
    <div className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${
            message.role === 'user'
              ? 'justify-end'
              : 'justify-start'
          }`}
        >
          <div
            className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
              message.role === 'user'
                ? 'bg-primary text-primary-foreground'
                : message.content === PENDING_RESPONSE
                  ? pending
                  : bubble
            }`}
          >
            <span className="flex items-center gap-2">
              {message.content}

              {message.content === PENDING_RESPONSE && (
                <Loader2
                  size={14}
                  className="animate-spin"
                />
              )}
            </span>
          </div>
        </div>
      ))}

      <div ref={endRef} />
    </div>
  );
}
