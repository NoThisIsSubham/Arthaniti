import React, { useState } from 'react';
import { CHAPTERS } from './LearningFlow';

interface LearningPageProps {
  onNavigate: (state: 'learning' | 'mentor' | 'about') => void;
}

const LearningPage: React.FC<LearningPageProps> = ({ onNavigate }) => {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const totalLearningFlow = CHAPTERS.length;
  const currentChapter = CHAPTERS[currentChapterIndex];
  const isLastChapter = currentChapterIndex === totalLearningFlow - 1;
  const isFirstChapter = currentChapterIndex === 0;

  const handleNext = () => {
    if (isLastChapter) {
      onNavigate('mentor');
    } else {
      setCurrentChapterIndex(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    if (!isFirstChapter) {
      setCurrentChapterIndex(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen py-32 px-12 bg-white flex flex-col items-center justify-center caret-transparent">
      <div className="max-w-4xl w-full">
        {/* Static heading */}
        <div className="mb-16">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-stone-400">ধাপ {currentChapterIndex + 1} / {totalLearningFlow}</span>
          <h1 className="text-5xl font-light text-stone-900 mt-4">{currentChapter.title}</h1>
        </div>

        {/* Fade-in content */}
        <div className="animate-fade-in text-lg text-stone-700 leading-relaxed">
          {currentChapter.content}
        </div>

        {/* Navigation buttons */}
        <div className="mt-20 pt-12 border-t border-stone-100 flex justify-between items-center">
          <button
            onClick={handlePrevious}
            disabled={isFirstChapter}
            className={`group flex items-center gap-4 font-medium tracking-widest uppercase text-sm transition-all select-none ${
              isFirstChapter
                ? 'text-stone-300 cursor-not-allowed'
                : 'text-stone-900 hover:text-stone-500'
            }`}
          >
            <span className={`text-2xl transition-transform ${!isFirstChapter && 'group-hover:-translate-x-2'}`}>←</span>
            <span className='text-xl'>আগের অধ্যায়</span>
          </button>

          <button
            onClick={handleNext}
            className="group flex items-center gap-4 text-stone-900 font-medium tracking-widest uppercase text-xl hover:text-stone-500 transition-all select-none"
          >
            {isLastChapter ? 'কাকা বাবুর সাথে আলাপ করুন' : 'পরের অধ্যায়'}
            <span className="text-2xl transition-transform group-hover:translate-x-2">→</span>
          </button>
        </div>
      </div>

      <style>{`
        .animate-fade-in {
          opacity: 0;
          animation: fadeInContent 0.8s ease-out forwards;
        }

        @keyframes fadeInContent {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in {
            animation: none;
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default LearningPage;