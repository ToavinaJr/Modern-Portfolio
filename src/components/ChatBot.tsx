import { AnimatePresence, motion } from 'framer-motion';
import { ChatComposer } from './chatbot/ChatComposer';
import { ChatHeader } from './chatbot/ChatHeader';
import { ChatLauncher } from './chatbot/ChatLauncher';
import { ChatMessages } from './chatbot/ChatMessages';
import { useChat } from '../hooks/useChat';

const ChatBot = ({ darkMode }: { darkMode: boolean }) => {
  const chat = useChat();
  const shell = darkMode
    ? 'border-white/10 bg-[#08101f]/95 text-white shadow-[0_25px_80px_rgba(0,0,0,0.45)]'
    : 'border-slate-200 bg-white/95 text-slate-900 shadow-[0_25px_80px_rgba(15,23,42,0.18)]';

  return <>
    <AnimatePresence>
      {chat.isOpen && (
        <motion.div
          initial={{
            opacity: 0,
            y: 24,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 24,
            scale: 0.96,
          }}
          transition={{
            duration: 0.22,
            ease: 'easeOut',
          }}
          role="dialog"
          aria-modal="false"
          aria-labelledby="assistant-title"
          className={`fixed right-5 bottom-24 z-50 flex h-[min(36rem,calc(100vh-7rem))] w-[min(92vw,24rem)] flex-col overflow-hidden rounded-3xl border backdrop-blur-xl ${shell}`}
        >
          <ChatHeader
            darkMode={darkMode}
            onClose={() => chat.setIsOpen(false)}
          />

          <ChatMessages
            messages={chat.messages}
            darkMode={darkMode}
            endRef={chat.messagesEndRef}
          />

          <ChatComposer
            darkMode={darkMode}
            input={chat.input}
            isLoading={chat.isLoading}
            inputRef={chat.inputRef}
            setInput={chat.setInput}
            sendMessage={chat.sendMessage}
          />
        </motion.div>
      )}
    </AnimatePresence>

    <ChatLauncher
      darkMode={darkMode}
      isOpen={chat.isOpen}
      onToggle={() =>
        chat.setIsOpen((current) => !current)
      }
    />
  </>
};

export default ChatBot;
