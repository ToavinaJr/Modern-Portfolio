import { Sparkles, X } from 'lucide-react';

export function ChatHeader({ darkMode, onClose }: { darkMode: boolean; onClose: () => void }) {
  return <div className={`flex items-center justify-between border-b px-4 py-3 ${darkMode ? 'border-white/10' : 'border-slate-200'}`}><div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-300"><Sparkles size={18} /></div><p id="assistant-title" className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>AI Portfolio Assistant</p></div><button type="button" onClick={onClose} className={`rounded-full p-2 transition ${darkMode ? 'text-white/60 hover:bg-white/10 hover:text-white' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'}`} aria-label="Close chat"><X size={18} /></button></div>;
}
