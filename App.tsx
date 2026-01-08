import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroSlides from './components/IntroSlides';
import LearningFlow from './components/LearningFlow';
import ElderMentor from './components/ElderMentor';
import About from './components/About';
import LearningPage from './components/LearningPage'; // ⬅️ NEW

const App: React.FC = () => {
  const [state, setState] = useState('intro');

  // Scroll to top on state change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [state]);

  return (
    <main className="relative selection:bg-stone-900 selection:text-white">
      {state === 'intro' && <IntroSlides onComplete={() => setState('hero')} />}

      {state !== 'intro' && <Navbar onNavigate={setState} activeState={state} />}

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
        </>
      )}

      {state === 'learningPage' && <LearningPage onNavigate={setState} />}
      {state === 'learning' && <LearningFlow onCourseComplete={() => setState('about')} />}
      {state === 'about' && <About />}
      {state === 'mentor' && <ElderMentor />}

      {state !== 'intro' && (
        <footer id="contact" className="py-24 px-12 bg-white border-t border-stone-100 flex justify-between items-end">
          <div>
            <div className="text-xl font-bold tracking-tighter text-stone-800 mb-8 select-none">অর্থনীতি ™</div>
            <div className="text-stone-400 text-sm font-light select-none">
              © ২০২৪ অর্থনীতি | সকল অধিকার সংরক্ষিত।
            </div>
          </div>
          <div className="text-xs font-medium tracking-[0.2em] text-stone-400 select-none flex items-baseline gap-2">
            POWERED BY <span className="text-2xl font-black text-stone-900 tracking-tighter leading-none">ByteForce</span>
          </div>
        </footer>
      )}
    </main>
  );
};

export default App;