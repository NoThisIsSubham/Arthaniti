
import React, {useState} from 'react';
import { Chapter } from '../types';

const CHAPTERS: Chapter[] = [
  {
    id: 'ch1',
    title: 'প্রথম ধাপ: জমানোর অভ্যাস',
    content: (
      <div className="space-y-8 text-2xl font-light text-stone-800 leading-relaxed">
        <p>টাকা জমানো মানে কৃপণতা নয়। এটি হলো নিজের এবং নিজের পরিবারের ভবিষ্যতের প্রতি একটি দায়িত্ব।</p>
        <p className="highlight-target">টাকা যখন আয় করবেন, তখন প্রথমেই খরচের কথা না ভেবে <span className="highlight">কিছু অংশ আলাদা করে সরিয়ে রাখুন</span>। এটাই হলো সঞ্চয়ের আসল সূত্র।</p>
        <p>আমরা অনেক সময় মনে করি মাস শেষে যা বাঁচবে তাই জমাবো। কিন্তু আসলে জমানোর অভ্যাস শুরু হয় আয়ের শুরুতেই।</p>
        <p className="highlight-target">মনে রাখবেন, <span className="highlight">ছোট ছোট ফোঁটা থেকেই সমুদ্র তৈরি হয়</span>। তাই পাঁচ-দশ টাকা হলেও জমানো শুরু করা জরুরি।</p>
      </div>
    ),
    quiz: {
      id: 'q1',
      question: 'সঞ্চয় শুরু করার সবথেকে ভালো উপায় কী?',
      options: [
        { id: 'a', text: 'মাস শেষে যা বাঁচবে তা জমানো', isCorrect: false },
        { id: 'b', text: 'আয় করার সাথে সাথে কিছু অংশ সরিয়ে রাখা', isCorrect: true },
        { id: 'c', text: 'সব টাকা খরচ করে ফেলা', isCorrect: false }
      ],
      explanation: 'আয় করার সাথে সাথে কিছু অংশ সরিয়ে রাখা সবথেকে কার্যকর পদ্ধতি।'
    }
  },
  {
    id: 'ch2',
    title: 'দ্বিতীয় ধাপ: বিনিয়োগের গুরুত্ব',
    content: (
      <div className="space-y-8 text-2xl font-light text-stone-800 leading-relaxed">
        <p>শুধু ঘরে টাকা জমিয়ে রাখলে তার মূল্য সময়ের সাথে সাথে কমে যায়। তাই টাকাকে কাজে লাগানো শিখতে হবে।</p>
        <p className="highlight-target"><span className="highlight">বিনিয়োগ মানে হলো আপনার টাকাকে কাজে লাগানো</span> যাতে সেটি সময়ের সাথে বাড়ে।</p>
        <p>ব্যাঙ্ক বা অন্য নিরাপদ জায়গায় টাকা রাখলে আমরা তার ওপর কিছু অতিরিক্ত লাভ বা সুদ পাই।</p>
        <p className="highlight-target">ঝুঁকি বুঝে সঠিক জায়গায় টাকা রাখলে <span className="highlight">টাকা আপনার জন্য দিনরাত কাজ করে</span>।</p>
      </div>
    ),
    quiz: {
      id: 'q2',
      question: 'বিনিয়োগ কেন প্রয়োজন?',
      options: [
        { id: 'a', text: 'যাতে সময়ের সাথে জমানো টাকার মূল্য বাড়ে', isCorrect: true },
        { id: 'b', text: 'টাকা খরচ করে ফেলার জন্য', isCorrect: false },
        { id: 'c', text: 'কাউকে দান করার জন্য', isCorrect: false }
      ],
      explanation: 'বিনিয়োগের মূল লক্ষ্য হলো আপনার জমানো টাকার মূল্য বৃদ্ধি করা।'
    }
  }
];

const LearningFlow: React.FC = () => {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [view, setView] = useState<'chapter' | 'quiz' | 'celebration' | 'retry'>('chapter');
  const [isFailed, setIsFailed] = useState(false);

  const currentChapter = CHAPTERS[currentChapterIndex];

  const handleQuizResult = (correct: boolean) => {
    if (correct) {
      setView('celebration');
      playSuccessSound();
    } else {
      setView('retry');
    }
  };

  const playSuccessSound = () => {
    const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2013/2013-preview.mp3');
    audio.play().catch(() => {});
  };

  const nextChapter = () => {
    if (currentChapterIndex < CHAPTERS.length - 1) {
      setCurrentChapterIndex(prev => prev + 1);
      setView('chapter');
      setIsFailed(false);
    } else {
      alert("অভিনন্দন! আপনি সব শিক্ষা সম্পন্ন করেছেন।");
    }
  };

  if (view === 'celebration') {
    return (
      <div className="min-h-screen bg-stone-900 flex flex-col items-center justify-center text-white px-12 overflow-hidden">
        <div className="animate-bounce mb-8 text-8xl select-none">✨</div>
        <h2 className="text-5xl font-light mb-6 text-center select-none">চমৎকার! আপনি একদম সঠিক।</h2>
        <p className="text-stone-400 text-xl mb-12 text-center max-w-xl font-light select-none">আপনার জ্ঞান এবং ধৈর্য আপনাকে অনেক দূর নিয়ে যাবে। চলুন পরের ধাপে যাওয়া যাক।</p>
        <button 
          onClick={nextChapter}
          className="px-12 py-5 bg-white text-stone-900 text-sm font-bold uppercase tracking-widest hover:bg-stone-200 transition-all  select-none"
        >
          পরবর্তী ধাপ
        </button>
        {/* Simple CSS Confetti */}
        <div className="absolute inset-0 pointer-events-none opacity-50">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="absolute animate-ping bg-stone-500 rounded-full" 
              style={{
                width: Math.random() * 10 + 'px',
                height: Math.random() * 10 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: Math.random() * 2 + 's'
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (view === 'retry') {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-12">
        <div className="mb-8 text-6xl opacity-50 select-none">🕯️</div>
        <h2 className="text-4xl font-light mb-6 text-stone-800 text-center select-none">ভুল থেকেই আমরা শিখি।</h2>
        <p className="text-stone-500 text-xl mb-12 text-center max-w-xl font-light select-none">
          আরেকবার পাঠটি মন দিয়ে পড়ে নিন। বিশেষ করে যে অংশগুলো লাল রঙে চিহ্নিত করা আছে, সেগুলো খেয়াল করুন।
        </p>
        <button 
          onClick={() => { setView('chapter'); setIsFailed(true); }}
          className="px-12 py-5 bg-stone-900 text-white text-sm font-bold uppercase tracking-widest hover:bg-stone-700 transition-all select-none"
        >
          আবার পড়ুন
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-12 max-w-5xl mx-auto">
      <div className="mb-20">
        <span className="text-xs font-bold tracking-[0.3em] uppercase text-stone-400">ধাপ {currentChapterIndex + 1}</span>
        <h2 className="text-6xl font-light mt-4 text-stone-900">{currentChapter.title}</h2>
      </div>

      {view === 'chapter' ? (
        <div className="animate-fade-in">
          <div className={isFailed ? 'highlight-mode' : ''}>
            {currentChapter.content}
          </div>
          <div className="mt-20 pt-12 border-t border-stone-100 flex justify-end">
            <button 
              onClick={() => setView('quiz')}
              className="group flex items-center gap-4 text-stone-900 font-medium tracking-widest uppercase text-sm hover:text-stone-500 transition-all select-none"
            >
              কুইজে অংশগ্রহণ করুন
              <span className="text-2xl transition-transform group-hover:translate-x-2">→</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="animate-fade-in bg-stone-50 p-16 rounded-sm border border-stone-100">
          <h3 className="text-3xl font-light mb-12 text-stone-800">{currentChapter.quiz.question}</h3>
          <div className="space-y-4">
            {currentChapter.quiz.options.map(opt => (
              <button 
                key={opt.id}
                onClick={() => handleQuizResult(opt.isCorrect)}
                className="w-full text-left p-6 border border-stone-200 bg-white hover:border-stone-900 hover:bg-stone-900 hover:text-white transition-all text-xl font-light rounded-sm"
              >
                {opt.text}
              </button>
            ))}
          </div>
        </div>
      )}

      <style>{`
        .highlight-mode .highlight {
          color: #ef4444; /* red-500 */
          font-weight: 500;
          text-decoration: underline;
          text-decoration-style: dotted;
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default LearningFlow;
