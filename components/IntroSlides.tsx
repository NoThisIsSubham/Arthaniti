import React, { useState, useEffect } from 'react';

interface IntroSlidesProps {
  onComplete: () => void;
}

const IntroSlides: React.FC<IntroSlidesProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 800);
    const timer2 = setTimeout(() => setStep(1.5), 2800);
    const timer3 = setTimeout(() => setStep(2), 3500);
    const timer4 = setTimeout(() => onComplete(), 6000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-stone-900 flex items-center justify-center overflow-hidden">
      <div className={`absolute transition-all duration-700 transform ${step >= 1 && step < 1.5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'}`}>
        <h2 className="text-white text-7xl text-[clamp(3rem,10vw,10rem)] font-light tracking-[0.0em] uppercase text-center">
          আমাদের লক্ষ্য <br />
          <span className="text-stone-500 text-4xl mt-4 block tracking-normal">Our Vision</span>
        </h2>
      </div>
      <div className={`absolute transition-all duration-700 transform ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'}`}>
        <h2 className="text-white text-7xl text-[clamp(3rem,10vw,10rem)] font-light tracking-[0.0em] uppercase text-center">
          সবার জন্য সঞ্চয় <br />
          <span className="text-stone-500 text-4xl mt-4 block tracking-normal">Finance for All</span>
        </h2>
      </div>
    </div>
  );
};

export default IntroSlides;
