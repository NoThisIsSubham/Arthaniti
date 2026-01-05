import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroSlides from './components/IntroSlides';
import LearningFlow from './components/LearningFlow';
import ElderMentor from './components/ElderMentor';
import About from './components/About';
import LearningPage from './components/LearningPage'; // ⬅️ NEW

type AppState = 'intro' | 'hero' | 'learning' | 'about' | 'mentor' | 'learningPage';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>('intro');

  // Scroll to top on state change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [state]);

  return (
    <main className="relative selection:bg-stone-900 selection:text-white">
      {state === 'intro' && <IntroSlides onComplete={() => setState('hero')} />}

      {state !== 'intro' && <Navbar onNavigate={setState} />}

      {state === 'hero' && (
        <>
          <Hero onStart={() => setState('learning')} />

          <section id="about" className="py-40 px-12 bg-stone-50 flex justify-center text-center">
            <div className="max-w-3xl">
              <h3 className="text-4xl font-light leading-snug text-stone-800">
                আমরা জটিল আর্থিক ধারণাগুলো সহজে বোঝানোর চেষ্টা করি। এখানে আপনি শিখবেন কীভাবে জীবনকে একটু সহজ ও সাবলীল করা যায়।
              </h3>
              <div className="mt-12 h-px w-20 bg-stone-300 mx-auto"></div>
            </div>
          </section>

          <ElderMentor />
        </>
      )}

      {state === 'learningPage' && <LearningPage onNavigate={setState} />}   {/* ⬅️ New page */}
      {state === 'learning' && <LearningFlow />}
      {state === 'about' && <About />}
      {state === 'mentor' && <ElderMentor />}

      {state !== 'intro' && (
        <footer id="contact" className="py-24 px-12 bg-white border-t border-stone-100 flex justify-between items-start">
          <div>
            <div className="text-xl font-bold tracking-tighter text-stone-800 mb-8 select-none">অর্থনীতি ™</div>
            <div className="text-stone-400 text-sm font-light select-none">
              © ২০২৪ অর্থনীতি | সকল অধিকার সংরক্ষিত।
            </div>
          </div>
          <div className="flex gap-20">
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-stone-900 select-none">লিঙ্ক</h4>
              <ul className="text-sm font-light text-stone-500 space-y-2">
                <li><a href="#" className="hover:text-stone-900 select-none">গোপনীয়তা নীতি</a></li>
                <li><a href="#" className="hover:text-stone-900 select-none">শর্তাবলী</a></li>
                <li><a href="#" className="hover:text-stone-900 select-none">সহযোগিতা</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-stone-900 select-none">সামাজিক</h4>
              <ul className="text-sm font-light text-stone-500 space-y-2">
                <li><a href="#" className="hover:text-stone-900 select-none">ফেসবুক</a></li>
                <li><a href="#" className="hover:text-stone-900 select-none">লিঙ্কডইন</a></li>
                <li><a href="#" className="hover:text-stone-900 select-none">ইউটিউব</a></li>
              </ul>
            </div>
          </div>
        </footer>
      )}
    </main>
  );
};

export default App;