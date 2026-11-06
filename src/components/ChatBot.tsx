import { AnimatePresence, motion } from 'framer-motion';
import { ChatComposer } from './chatbot/ChatComposer';
import { ChatHeader } from './chatbot/ChatHeader';
import { ChatLauncher } from './chatbot/ChatLauncher';
import { ChatMessages } from './chatbot/ChatMessages';
import { useChat } from '../hooks/useChat';

const ChatBot = () => {
  const chat = useChat();
  const shell = 'border-line bg-card/95 text-card-foreground shadow-[0_20px_60px_hsl(var(--foreground)/0.14)]';

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
          <ChatHeader onClose={() => chat.setIsOpen(false)} />

          <ChatMessages
            messages={chat.messages}
            endRef={chat.messagesEndRef}
          />

          <ChatComposer
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
      isOpen={chat.isOpen}
      onToggle={() =>
        chat.setIsOpen((current) => !current)
      }
    />
  </>
};

export default ChatBot;
