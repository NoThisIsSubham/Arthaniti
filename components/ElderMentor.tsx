import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../types';
import { getElderResponse } from '../services/gemini';

const ElderMentor: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'এসো বাবা, কেমন আছো? তোমার মনের কোনো প্রশ্ন বা জমানো কথা থাকলে আমাকে নির্দ্বিধায় বলতে পারো।' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [responseReady, setResponseReady] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const soundPlayedRef = useRef(false);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Play subtle confirmation sound once when response is ready
  useEffect(() => {
    if (responseReady && !soundPlayedRef.current) {
      playSubtleConfirmation();
      soundPlayedRef.current = true;
    }
  }, [responseReady]);

  const playSubtleConfirmation = () => {
    // Create a soft, brief tone (sine wave at 600Hz for 150ms)
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    oscillator.frequency.value = 600;
    oscillator.type = 'sine';

    gain.gain.setValueAtTime(0.05, audioContext.currentTime); // Very low volume
    gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.15);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    setResponseReady(false);
    soundPlayedRef.current = false;

    const responseText = await getElderResponse(messages, input);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsTyping(false);
    setResponseReady(true);
  };

  return (
    <section id="mentor" className="py-32 px-12 bg-stone-900 text-white flex flex-col items-center overflow-hidden">
      <div className="max-w-4xl w-full">
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-light mb-6 select-none animate-slide-left">কাকা বাবুর সাথে আলাপ</h2>
          <p className="text-stone-400 text-lg max-w-xl mx-auto font-light leading-relaxed animate-slide-right">
            জীবন, টাকা-পয়সা কিংবা ভবিষ্যৎ নিয়ে কোনো দ্বিধা থাকলে আমাদের পরামর্শদাতার সাথে কথা বলুন। তিনি আপনার কাকুর মতোই শান্তভাবে সব বুঝিয়ে দেবেন।
          </p>
        </div>

        <div className="bg-stone-800/50 backdrop-blur rounded-lg min-h-[500px] flex flex-col p-8 border border-stone-700 animate-slide-up">
          <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-8 pr-4 custom-scrollbar">
            {messages.map((msg, i) => (
              <div 
                key={i} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] p-6 rounded-sm text-lg leading-relaxed transition-all duration-500 ${
                    msg.role === 'user' 
                      ? 'bg-stone-700 text-white font-light' 
                      : 'bg-transparent border-l-2 border-stone-600 pl-8 text-stone-200 font-light italic response-message'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="animate-pulse text-stone-500 font-light italic pl-8">কাকা বাবু ভাবছেন...</div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="mt-8 flex gap-4 pt-8 border-t border-stone-700">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="আপনার প্রশ্নটি এখানে লিখুন..."
              className="flex-1 bg-transparent border-b border-stone-700 focus:border-white outline-none py-4 text-xl font-light placeholder:text-stone-600"
            />
            <button 
              type="submit"
              disabled={isTyping}
              className="px-10 bg-white text-stone-900 text-sm font-bold uppercase tracking-widest hover:bg-stone-200 transition-colors disabled:opacity-50"
            >
              পাঠান
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .animate-slide-left {
          opacity: 0;
          animation: slideInLeft 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-slide-right {
          opacity: 0;
          animation: slideInRight 1s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.2s;
        }

        .animate-slide-up {
          opacity: 0;
          animation: slideInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.4s;
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .response-message {
          opacity: 0;
          animation: subtleAppear 0.6s ease-out forwards;
        }

        @keyframes subtleAppear {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Reduce animation on low-end devices */
        @media (prefers-reduced-motion: reduce) {
          .response-message, .animate-slide-left, .animate-slide-right, .animate-slide-up {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default ElderMentor;