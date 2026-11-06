import { Sparkles, X } from 'lucide-react';

export function ChatHeader({ onClose }: { onClose: () => void }) {
  return <div className="flex items-center justify-between border-b border-line px-4 py-3"><div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary"><Sparkles size={18} aria-hidden="true" /></div><p id="assistant-title" className="text-sm font-semibold text-card-foreground">AI Portfolio Assistant</p></div><button type="button" onClick={onClose} className="rounded-xl p-2 text-muted transition-colors hover:bg-secondary hover:text-foreground" aria-label="Close chat"><X size={18} /></button></div>;
}
