import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from '@google/genai';
import Markdown from 'react-markdown';
import { useLanguage } from '../context/LanguageContext';

interface Message {
  role: 'user' | 'model';
  text: string;
}

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<any>(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (isOpen && !chatRef.current) {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
        chatRef.current = ai.chats.create({
          model: 'gemini-3-flash-preview',
          config: {
            systemInstruction: "You are a helpful customer support assistant for PT Bersama Energi Nusapersada (BEN). You answer questions about BEN's products (Gulf Oil lubricants, Shantui heavy equipment), services, and company information. Keep answers concise, professional, and helpful. If you don't know something, suggest they contact support via the Contact page.",
          }
        });
        
        // Add initial greeting
        setMessages([
          { role: 'model', text: t('chat.greeting') }
        ]);
      } catch (error) {
        console.error("Failed to initialize AI chat:", error);
      }
    }
  }, [isOpen, t]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || !chatRef.current) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await chatRef.current.sendMessage({ message: userMsg });
      setMessages(prev => [...prev, { role: 'model', text: response.text }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: t('chat.error') }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 bg-primary text-white rounded-full shadow-lg hover:bg-primary-hover hover:scale-110 transition-all z-50 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
        aria-label={t('chat.open')}
      >
        <MessageCircle size={28} />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 w-full max-w-[380px] h-[550px] max-h-[80vh] bg-white rounded-xl shadow-2xl flex flex-col z-50 overflow-hidden border border-gray-200"
          >
            {/* Header */}
            <div className="bg-dark-grey text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-heading font-bold">{t('chat.title')}</h3>
                  <p className="text-xs text-gray-300">{t('chat.subtitle')}</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white transition-colors p-1"
                aria-label={t('chat.close')}
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50 flex flex-col gap-4">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'self-end flex-row-reverse' : 'self-start'}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-gray-200 text-gray-700' : 'bg-primary text-white'}`}>
                    {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div 
                    className={`p-3 rounded-2xl text-sm ${
                      msg.role === 'user' 
                        ? 'bg-primary text-white rounded-tr-sm' 
                        : 'bg-white text-gray-800 rounded-tl-sm shadow-sm border border-gray-100'
                    }`}
                  >
                    {msg.role === 'user' ? (
                      <p className="whitespace-pre-wrap">{msg.text}</p>
                    ) : (
                      <div className="markdown-body">
                        <Markdown>{msg.text}</Markdown>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex gap-3 max-w-[85%] self-start">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                    <Bot size={16} />
                  </div>
                  <div className="p-4 bg-white rounded-2xl rounded-tl-sm shadow-sm border border-gray-100 flex items-center gap-1">
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-100">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={t('chat.inputPlaceholder')}
                  className="flex-1 px-4 py-2 bg-gray-100 border-transparent focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary rounded-full text-sm transition-all outline-none"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 hover:bg-primary-hover disabled:opacity-50 disabled:hover:bg-primary transition-colors"
                  aria-label={t('chat.send')}
                >
                  <Send size={18} className={input.trim() && !isLoading ? 'translate-x-0.5' : ''} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
