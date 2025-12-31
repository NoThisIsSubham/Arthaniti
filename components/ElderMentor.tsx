
import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../types';
import { getElderResponse } from '../services/gemini';

const ElderMentor: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'এসো বাবা, কেমন আছো? তোমার মনের কোনো প্রশ্ন বা জমানো কথা থাকলে আমাকে নির্দ্বিধায় বলতে পারো।' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    const responseText = await getElderResponse(messages, input);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsTyping(false);
  };

  return (
    <section id="mentor" className="py-32 px-12 bg-stone-900 text-white flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-light mb-6 select-none">বড় কাকুর সাথে আলাপ</h2>
          <p className="text-stone-400 text-lg max-w-xl mx-auto font-light leading-relaxed">
            জীবন, টাকা-পয়সা কিংবা ভবিষ্যৎ নিয়ে কোনো দ্বিধা থাকলে আমাদের পরামর্শদাতার সাথে কথা বলুন। তিনি আপনার বড় কাকুর মতোই শান্তভাবে সব বুঝিয়ে দেবেন।
          </p>
        </div>

        <div className="bg-stone-800/50 backdrop-blur rounded-lg min-h-[500px] flex flex-col p-8 border border-stone-700">
          <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-8 pr-4 custom-scrollbar">
            {messages.map((msg, i) => (
              <div 
                key={i} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] p-6 rounded-sm text-lg leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-stone-700 text-white font-light' 
                      : 'bg-transparent border-l-2 border-stone-600 pl-8 text-stone-200 font-light italic'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="animate-pulse text-stone-500 font-light italic pl-8">কাকু ভাবছেন...</div>
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
    </section>
  );
};

export default ElderMentor;
