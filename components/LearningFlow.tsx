import React, {useState} from 'react';
import { Chapter } from '../types';

const CHAPTERS: Chapter[] = [
  {
    id: 'ch1',
    title: 'প্রথম ধাপ: জমানোর অভ্যাস',
    content: (
      <div className="space-y-8 text-2xl font-light text-stone-800 leading-relaxed">
        <p id="ch1-line1">টাকা জমানো মানে কৃপণতা নয়। এটি হলো নিজের এবং নিজের পরিবারের ভবিষ্যতের প্রতি একটি দায়িত্ব।</p>
        <p id="ch1-line2" className="highlight-target">টাকা যখন আয় করবেন, তখন প্রথমেই খরচের কথা না ভেবে <span className="highlight">কিছু অংশ আলাদা করে সরিয়ে রাখুন</span>। এটাই হলো সঞ্চয়ের আসল সূত্র।</p>
        <p id="ch1-line3">আমরা অনেক সময় মনে করি মাস শেষে যা বাঁচবে তাই জমাবো। কিন্তু আসলে জমানোর অভ্যাস শুরু হয় আয়ের শুরুতেই।</p>
        <p id="ch1-line4" className="highlight-target">মনে রাখবেন, <span className="highlight">ছোট ছোট ফোঁটা থেকেই সমুদ্র তৈরি হয়</span>। তাই পাঁচ-দশ টাকা হলেও জমানো শুরু করা জরুরি।</p>
      </div>
    ),
    quizzes: [
      {
        id: 'q1-1',
        question: 'সঞ্চয় শুরু করার সবথেকে ভালো উপায় কী?',
        options: [
          { id: 'a', text: 'মাস শেষে যা বাঁচবে তা জমানো', isCorrect: false },
          { id: 'b', text: 'আয় করার সাথে সাথে কিছু অংশ সরিয়ে রাখা', isCorrect: true },
          { id: 'c', text: 'সব টাকা খরচ করে ফেলা', isCorrect: false }
        ],
        explanation: 'আয় করার সাথে সাথে কিছু অংশ সরিয়ে রাখা সবথেকে কার্যকর পদ্ধতি।',
        highlightLineId: 'ch1-line2'
      },
      {
        id: 'q1-2',
        question: 'টাকা জমানোর প্রকৃত অর্থ কী?',
        options: [
          { id: 'a', text: 'কৃপণতা করা', isCorrect: false },
          { id: 'b', text: 'নিজের এবং পরিবারের ভবিষ্যতের প্রতি দায়বদ্ধতা', isCorrect: true },
          { id: 'c', text: 'সব খরচ কমিয়ে দেওয়া', isCorrect: false }
        ],
        explanation: 'টাকা জমানো হলো ভবিষ্যতের প্রতি একটি দায়িত্বশীল পদক্ষেপ।',
        highlightLineId: 'ch1-line1'
      },
      {
        id: 'q1-3',
        question: 'ছোট ছোট সঞ্চয় থেকে কী তৈরি হয়?',
        options: [
          { id: 'a', text: 'সমস্যা', isCorrect: false },
          { id: 'b', text: 'সমুদ্র', isCorrect: true },
          { id: 'c', text: 'দুঃখ', isCorrect: false }
        ],
        explanation: 'ছোট ছোট ফোঁটা থেকেই সমুদ্র তৈরি হয়। তাই নিয়মিত সঞ্চয় অত্যন্ত গুরুত্বপূর্ণ।',
        highlightLineId: 'ch1-line4'
      }
    ]
  },
  {
    id: 'ch2',
    title: 'দ্বিতীয় ধাপ: বিনিয়োগের গুরুত্ব',
    content: (
      <div className="space-y-8 text-2xl font-light text-stone-800 leading-relaxed">
        <p id="ch2-line1">শুধু ঘরে টাকা জমিয়ে রাখলে তার মূল্য সময়ের সাথে সাথে কমে যায়। তাই টাকাকে কাজে লাগানো শিখতে হবে।</p>
        <p id="ch2-line2" className="highlight-target"><span className="highlight">বিনিয়োগ মানে হলো আপনার টাকাকে কাজে লাগানো</span> যাতে সেটি সময়ের সাথে বাড়ে।</p>
        <p id="ch2-line3">ব্যাঙ্ক বা অন্য নিরাপদ জায়গায় টাকা রাখলে আমরা তার ওপর কিছু অতিরিক্ত লাভ বা সুদ পাই।</p>
        <p id="ch2-line4" className="highlight-target">ঝুঁকি বুঝে সঠিক জায়গায় টাকা রাখলে <span className="highlight">টাকা আপনার জন্য দিনরাত কাজ করে</span>।</p>
      </div>
    ),
    quizzes: [
      {
        id: 'q2-1',
        question: 'বিনিয়োগ কেন প্রয়োজন?',
        options: [
          { id: 'a', text: 'যাতে সময়ের সাথে জমানো টাকার মূল্য বাড়ে', isCorrect: true },
          { id: 'b', text: 'টাকা খরচ করে ফেলার জন্য', isCorrect: false },
          { id: 'c', text: 'কাউকে দান করার জন্য', isCorrect: false }
        ],
        explanation: 'বিনিয়োগের মূল লক্ষ্য হলো আপনার জমানো টাকার মূল্য বৃদ্ধি করা।',
        highlightLineId: 'ch2-line1'
      },
      {
        id: 'q2-2',
        question: 'বিনিয়োগের প্রকৃত অর্থ কী?',
        options: [
          { id: 'a', text: 'টাকা লুকিয়ে রাখা', isCorrect: false },
          { id: 'b', text: 'টাকাকে কাজে লাগানো যাতে এটি বৃদ্ধি পায়', isCorrect: true },
          { id: 'c', text: 'সব টাকা একসাথে খরচ করা', isCorrect: false }
        ],
        explanation: 'বিনিয়োগ মানে আপনার টাকাকে কৌশলগতভাবে কাজে লাগিয়ে আয় বৃদ্ধি করা।',
        highlightLineId: 'ch2-line2'
      },
      {
        id: 'q2-3',
        question: 'নিরাপদ বিনিয়োগে আমরা কী পাই?',
        options: [
          { id: 'a', text: 'ক্ষতি', isCorrect: false },
          { id: 'b', text: 'অতিরিক্ত লাভ বা সুদ', isCorrect: true },
          { id: 'c', text: 'কোনো লাভ নেই', isCorrect: false }
        ],
        explanation: 'নিরাপদ জায়গায় টাকা রাখলে আমরা সুদ বা লাভের মাধ্যমে অতিরিক্ত আয় পাই।',
        highlightLineId: 'ch2-line3'
      }
    ]
  },
  {
    id: 'ch3',
    title: 'তৃতীয় ধাপ: ঋণ এবং সঞ্চয়',
    content: (
      <div className="space-y-8 text-2xl font-light text-stone-800 leading-relaxed">
        <p id="ch3-line1">ঋণ নেওয়া কখনো লজ্জার নয়। সঠিক উদ্দেশ্যে ঋণ নেওয়া জীবন গড়ে তোলার একটি মাধ্যম।</p>
        <p id="ch3-line2" className="highlight-target"><span className="highlight">কিন্তু অপ্রয়োজনীয় ঋণে আপনার ভবিষ্যৎ বন্ধক হয়ে যায়</span>। তাই ঋণ নেওয়ার আগে ভালো করে চিন্তা করুন।</p>
        <p id="ch3-line3">স্বল্প সুদের হার এবং দীর্ঘ মেয়াদী সুবিধা সহ ঋণ খুঁজে বের করা জরুরি।</p>
        <p id="ch3-line4" className="highlight-target">মনে রাখবেন, <span className="highlight">প্রতিটি টাকার একটি মূল্য আছে</span>। অপচয় না করে বুদ্ধিমানের মতো খরচ করুন।</p>
      </div>
    ),
    quizzes: [
      {
        id: 'q3-1',
        question: 'ঋণ নেওয়া কেন লজ্জার বিষয় নয়?',
        options: [
          { id: 'a', text: 'কারণ সবাই ঋণ নেয়', isCorrect: false },
          { id: 'b', text: 'কারণ সঠিক উদ্দেশ্যে ঋণ জীবন গড়ার মাধ্যম', isCorrect: true },
          { id: 'c', text: 'ঋণ সবসময় খারাপ', isCorrect: false }
        ],
        explanation: 'সঠিক উদ্দেশ্যে নেওয়া ঋণ জীবন উন্নয়নের একটি গুরুত্বপূর্ণ হাতিয়ার।',
        highlightLineId: 'ch3-line1'
      },
      {
        id: 'q3-2',
        question: 'অপ্রয়োজনীয় ঋণের বিপদ কী?',
        options: [
          { id: 'a', text: 'কোনো বিপদ নেই', isCorrect: false },
          { id: 'b', text: 'এটি আপনার ভবিষ্যৎ বন্ধক করে দেয়', isCorrect: true },
          { id: 'c', text: 'এটি সম্পদ বৃদ্ধি করে', isCorrect: false }
        ],
        explanation: 'অপ্রয়োজনীয় ঋণ আপনার আর্থিক স্বাধীনতা ক্ষতিগ্রস্ত করতে পারে।',
        highlightLineId: 'ch3-line2'
      },
      {
        id: 'q3-3',
        question: 'টাকার ক্ষেত্রে বুদ্ধিমানের পদক্ষেপ কী?',
        options: [
          { id: 'a', text: 'সব টাকা একবারে খরচ করা', isCorrect: false },
          { id: 'b', text: 'প্রতিটি টাকার মূল্য বুঝে অপচয় না করা', isCorrect: true },
          { id: 'c', text: 'টাকার কোনো মূল্য নেই', isCorrect: false }
        ],
        explanation: 'প্রতিটি টাকার মূল্য রয়েছে এবং দায়িত্বশীলভাবে খরচ করা উচিত।',
        highlightLineId: 'ch3-line4'
      }
    ]
  },
  {
    id: 'ch4',
    title: 'চতুর্থ ধাপ: অবসর এবং পেনশন',
    content: (
      <div className="space-y-8 text-2xl font-light text-stone-800 leading-relaxed">
        <p id="ch4-line1">আজকের যুবকদের জন্য অবসর পরিকল্পনা অত্যন্ত জরুরি হয়ে উঠেছে।</p>
        <p id="ch4-line2" className="highlight-target"><span className="highlight">বয়স বাড়লে আয় করার ক্ষমতা কমে যায়</span>, তাই আজ থেকেই ভবিষ্যতের জন্য প্রস্তুত হন।</p>
        <p id="ch4-line3">পেনশন স্কিম এবং বীমা আপনার পরিবারের নিরাপত্তা নিশ্চিত করে।</p>
        <p id="ch4-line4" className="highlight-target">একজন মানুষের জীবনের তিনটি পর্যায়ে আয় করে অর্থনৈতিকভাবে স্বাধীন হওয়ার চেষ্টা করুন - <span className="highlight">যুব বয়সে, মধ্য বয়সে, এবং বার্ধক্যের জন্য প্রস্তুতি</span>।</p>
      </div>
    ),
    quizzes: [
      {
        id: 'q4-1',
        question: 'অবসর পরিকল্পনা কেন গুরুত্বপূর্ণ?',
        options: [
          { id: 'a', text: 'কারণ এটি বাধ্যতামূলক', isCorrect: false },
          { id: 'b', text: 'কারণ বয়সে আয়ের ক্ষমতা কমে যায়', isCorrect: true },
          { id: 'c', text: 'অবসর পরিকল্পনার কোনো প্রয়োজন নেই', isCorrect: false }
        ],
        explanation: 'বয়স বাড়লে আয়ের ক্ষমতা হ্রাস পায়, তাই অগ্রিম পরিকল্পনা অপরিহার্য।',
        highlightLineId: 'ch4-line2'
      },
      {
        id: 'q4-2',
        question: 'পেনশন স্কিম কী করে?',
        options: [
          { id: 'a', text: 'দ্রুত অর্থ বৃদ্ধি করে', isCorrect: false },
          { id: 'b', text: 'পরিবারের নিরাপত্তা নিশ্চিত করে', isCorrect: true },
          { id: 'c', text: 'কোনো সুবিধা প্রদান করে না', isCorrect: false }
        ],
        explanation: 'পেনশন স্কিম অবসর গ্রহণের পর আর্থিক নিরাপত্তা প্রদান করে।',
        highlightLineId: 'ch4-line3'
      },
      {
        id: 'q4-3',
        question: 'দীর্ঘমেয়াদী আর্থিক স্বাধীনতার জন্য কী প্রয়োজন?',
        options: [
          { id: 'a', text: 'শুধু যুব বয়সে সঞ্চয় করা', isCorrect: false },
          { id: 'b', text: 'জীবনের তিনটি পর্যায়ে পরিকল্পনা এবং প্রস্তুতি', isCorrect: true },
          { id: 'c', text: 'কোনো প্রস্তুতি প্রয়োজন নেই', isCorrect: false }
        ],
        explanation: 'দীর্ঘমেয়াদী আর্থিক সুরক্ষার জন্য সমস্ত জীবন পর্যায়ে পরিকল্পনা করা উচিত।',
        highlightLineId: 'ch4-line4'
      }
    ]
  },
  {
    id: 'ch5',
    title: 'পঞ্চম ধাপ: ভবিষ্যৎ প্রজন্মের জন্য শিক্ষা',
    content: (
      <div className="space-y-8 text-2xl font-light text-stone-800 leading-relaxed">
        <p id="ch5-line1">আপনার সন্তানদের আর্থিক সাক্ষরতা শেখানো একটি উপহার যা সারাজীবন কাজ করবে।</p>
        <p id="ch5-line2" className="highlight-target">ছোট বয়স থেকেই শিশুদের <span className="highlight">টাকার মূল্য এবং সঞ্চয়ের অভ্যাস</span> শেখান।</p>
        <p id="ch5-line3">বাস্তব জীবনের উদাহরণ এবং গল্পের মাধ্যমে শেখানো সবচেয়ে কার্যকর।</p>
        <p id="ch5-line4" className="highlight-target">যখন আপনি নিজে দায়িত্বশীল আর্থিক সিদ্ধান্ত নেন, <span className="highlight">আপনার সন্তানরা স্বাভাবিকভাবেই সেই পথ অনুসরণ করবে</span>।</p>
      </div>
    ),
    quizzes: [
      {
        id: 'q5-1',
        question: 'আপনার সন্তানদের আর্থিক শিক্ষা কেন গুরুত্বপূর্ণ?',
        options: [
          { id: 'a', text: 'কারণ স্কুলে এটি শেখানো হয়', isCorrect: false },
          { id: 'b', text: 'কারণ এটি সারাজীবন কাজ করে এমন একটি উপহার', isCorrect: true },
          { id: 'c', text: 'এটি কোনো প্রয়োজন নেই', isCorrect: false }
        ],
        explanation: 'আর্থিক সাক্ষরতা আপনার সন্তানদের সম্পূর্ণ জীবন পরিবর্তন করতে পারে।',
        highlightLineId: 'ch5-line1'
      },
      {
        id: 'q5-2',
        question: 'শিশুদের কখন আর্থিক শিক্ষা দেওয়া শুরু করা উচিত?',
        options: [
          { id: 'a', text: 'শুধু কলেজে', isCorrect: false },
          { id: 'b', text: 'ছোট বয়স থেকেই', isCorrect: true },
          { id: 'c', text: 'কখনো শেখানোর দরকার নেই', isCorrect: false }
        ],
        explanation: 'ছোট বয়স থেকে শিশুরা টাকার মূল্য এবং সঞ্চয়ের গুরুত্ব শিখলে সারাজীবন উপকৃত হবে।',
        highlightLineId: 'ch5-line2'
      },
      {
        id: 'q5-3',
        question: 'আর্থিক শিক্ষা দেওয়ার সবচেয়ে কার্যকর উপায় কী?',
        options: [
          { id: 'a', text: 'শুধু বইয়ের মাধ্যমে', isCorrect: false },
          { id: 'b', text: 'বাস্তব জীবনের উদাহরণ এবং গল্পের মাধ্যমে', isCorrect: true },
          { id: 'c', text: 'শেখানোর কোনো উপায় নেই', isCorrect: false }
        ],
        explanation: 'বাস্তব জীবনের গল্প এবং অভিজ্ঞতা শেয়ার করা সবচেয়ে কার্যকর শিক্ষা পদ্ধতি।',
        highlightLineId: 'ch5-line3'
      }
    ]
  }
];

interface LearningFlowProps {
  onCourseComplete: () => void;
}

const LearningFlow: React.FC<LearningFlowProps> = ({ onCourseComplete }) => {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [view, setView] = useState<'chapter' | 'quiz' | 'celebration' | 'retry' | 'courseComplete'>('chapter');
  const [highlightLineId, setHighlightLineId] = useState<string | undefined>();

  const currentChapter = CHAPTERS[currentChapterIndex];
  const currentQuiz = currentChapter.quizzes[currentQuizIndex];
  const totalChapters = CHAPTERS.length;
  const isLastQuizOfLastChapter = currentChapterIndex === totalChapters - 1 && currentQuizIndex === currentChapter.quizzes.length - 1;

  const handleQuizResult = (correct: boolean) => {
    if (correct) {
      setView('celebration');
      playSuccessSound();
    } else {
      setHighlightLineId(currentQuiz.highlightLineId);
      setView('retry');
    }
  };

  const playSuccessSound = () => {
    const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2013/2013-preview.mp3');
    audio.play().catch(() => {});
  };

  const playCourseCompleteSound = () => {
    // Different sound for course completion
    const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
    audio.play().catch(() => {});
  };

  const handleNextQuiz = () => {
    if (currentQuizIndex < currentChapter.quizzes.length - 1) {
      // More quizzes in this chapter
      setCurrentQuizIndex(prev => prev + 1);
      setView('quiz');
      setHighlightLineId(undefined);
    } else if (currentChapterIndex < totalChapters - 1) {
      // Move to next chapter
      setCurrentChapterIndex(prev => prev + 1);
      setCurrentQuizIndex(0);
      setView('chapter');
      setHighlightLineId(undefined);
    } else {
      // Course complete
      setView('courseComplete');
      playCourseCompleteSound();
    }
  };

  const handleRetry = () => {
    setView('chapter');
  };

  if (view === 'celebration') {
    return (
      <div className="min-h-screen bg-stone-900 flex flex-col items-center justify-center text-white px-12 overflow-hidden">
        <div className="animate-bounce mb-8 text-8xl select-none">✨</div>
        <h2 className="text-5xl font-light mb-6 text-center select-none">চমৎকার! আপনি একদম সঠিক।</h2>
        <p className="text-stone-400 text-xl mb-12 text-center max-w-xl font-light select-none">
          {isLastQuizOfLastChapter 
            ? 'আপনার যাত্রা শেষ পর্যায়ে পৌঁছেছে। এর আগে চূড়ান্ত উদযাপন আছে।'
            : 'আপনার জ্ঞান এবং ধৈর্য আপনাকে অনেক দূর নিয়ে যাবে। চলুন পরবর্তী প্রশ্নে যাই।'}
        </p>
        <button 
          onClick={handleNextQuiz}
          className="px-12 py-5 bg-white text-stone-900 text-sm font-bold uppercase tracking-widest hover:bg-stone-200 transition-all select-none"
        >
          {isLastQuizOfLastChapter ? 'কোর্স সম্পন্নতা দেখুন' : 'পরবর্তী প্রশ্ন'}
        </button>
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
          আরেকবার পাঠটি মন দিয়ে পড়ে নিন। বিশেষ করে যে অংশটি লাল রঙে চিহ্নিত করা আছে, সেটি খেয়াল করুন。
        </p>
        <button 
          onClick={handleRetry}
          className="px-12 py-5 bg-stone-900 text-white text-sm font-bold uppercase tracking-widest hover:bg-stone-700 transition-all select-none"
        >
          আবার পড়ুন
        </button>
      </div>
    );
  }

  if (view === 'courseComplete') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-stone-900 to-black flex flex-col items-center justify-center text-white px-12 overflow-hidden">
        <div className="animate-bounce mb-8 text-9xl select-none">🎉</div>
        <h2 className="text-6xl font-light mb-6 text-center select-none">অভিনন্দন!</h2>
        <p className="text-stone-300 text-2xl mb-8 text-center select-none">আপনি সম্পূর্ণ কোর্স সম্পন্ন করেছেন!</p>
        <p className="text-stone-400 text-lg mb-12 text-center max-w-2xl font-light select-none">
          আপনার আর্থিক যাত্রা এখানেই শেষ নয়। এটি একটি শুরু। এখন আপনার শেখা জ্ঞান বাস্তব জীবনে প্রয়োগ করুন এবং একটি সুরক্ষিত ভবিষ্যৎ তৈরি করুন。
        </p>
        <button 
          onClick={onCourseComplete}
          className="px-16 py-6 bg-white text-stone-900 text-lg font-bold uppercase tracking-widest hover:bg-stone-200 transition-all select-none"
        >
          আমাদের সম্পর্কে জানুন
        </button>
        {/* Elaborate confetti for course completion */}
        <div className="absolute inset-0 pointer-events-none opacity-60">
          {[...Array(40)].map((_, i) => (
            <div 
              key={i} 
              className="absolute animate-bounce bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full" 
              style={{
                width: Math.random() * 15 + 'px',
                height: Math.random() * 15 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: Math.random() * 3 + 's',
                animationDuration: (Math.random() * 1 + 2) + 's'
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-12 max-w-5xl mx-auto">
      <div className="mb-20">
        <span className="text-xs font-bold tracking-[0.3em] uppercase text-stone-400">ধাপ {currentChapterIndex + 1} / {totalChapters}</span>
        <h2 className="text-6xl font-light mt-4 text-stone-900">{currentChapter.title}</h2>
        <span className="text-sm text-stone-500 mt-4 block">প্রশ্ন {currentQuizIndex + 1} / {currentChapter.quizzes.length}</span>
      </div>

      {view === 'chapter' ? (
        <div className="animate-fade-in">
          <div className={highlightLineId ? 'highlight-mode' : ''}>
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
          <h3 className="text-3xl font-light mb-12 text-stone-800">{currentQuiz.question}</h3>
          <div className="space-y-4">
            {currentQuiz.options.map(opt => (
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
        #${highlightLineId} .highlight {
          color: #ef4444;
          font-weight: 500;
          text-decoration: underline;
          text-decoration-style: dotted;
          background-color: rgba(239, 68, 68, 0.1);
          padding: 2px 4px;
        }
        .highlight-mode #${highlightLineId} {
          background-color: rgba(239, 68, 68, 0.05);
          padding: 1rem;
          margin-left: -1rem;
          margin-right: -1rem;
          border-left: 4px solid #ef4444;
          padding-left: calc(1rem - 4px);
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
