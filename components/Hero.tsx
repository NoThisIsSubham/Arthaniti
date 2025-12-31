import React, { useState, useEffect } from 'react';

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  const typingTexts = ['আর্থনীতি ™ এনেছে', 'আপনার জন্য'];

  const [displayedText, setDisplayedText] = useState('');
  const [isTypewriterActive, setIsTypewriterActive] = useState(false);

  /* 1️⃣ Start typewriter AFTER entrance animations */
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTypewriterActive(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  /* 2️⃣ JS Typewriter Logic (UNCHANGED) */
  useEffect(() => {
    if (!isTypewriterActive) return;

    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let isErasing = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const animate = () => {
      const currentText = typingTexts[currentTextIndex];
      const typingSpeed = isErasing ? 60 : 100;
      const pause = isErasing ? 400 : 2000;

      if (!isErasing) {
        if (currentCharIndex < currentText.length) {
          setDisplayedText(currentText.slice(0, currentCharIndex + 1));
          currentCharIndex++;
          timeoutId = setTimeout(animate, typingSpeed);
        } else {
          isErasing = true;
          timeoutId = setTimeout(animate, pause);
        }
      } else {
        if (currentCharIndex > 0) {
          currentCharIndex--;
          setDisplayedText(currentText.slice(0, currentCharIndex));
          timeoutId = setTimeout(animate, typingSpeed);
        } else {
          isErasing = false;
          currentTextIndex = (currentTextIndex + 1) % typingTexts.length;
          timeoutId = setTimeout(animate, 500);
        }
      }
    };

    timeoutId = setTimeout(animate, 100);
    return () => clearTimeout(timeoutId);
  }, [isTypewriterActive]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black text-white">
      <div className="relative w-full h-screen flex items-center justify-start z-20 px-12 lg:px-24">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, black 0%, black 30%, transparent 45%)',
          }}
        />

        <div className="max-w-3xl z-10 py-20 relative">
          <h1 className="text-6xl md:text-7xl lg:text-[6rem] leading-[1.05] font-light tracking-tight headline-fade">
            লক্ষ্মীলাভের সহজ পাঠ
            <br />

            <span className="mt-7 block italic font-normal serif-font typewriter-container">
              <span className="typewriter-text">
                {displayedText}
              </span>

              {/* Layout stabilizer */}
              <span
                className="absolute left-0 top-0 opacity-0 whitespace-nowrap pointer-events-none"
                aria-hidden="true"
              >
                ভবিষ্যতের কথা ভেবে।
              </span>
            </span>
          </h1>

          <p className="mt-10 text-xl md:text-2xl text-stone-300 font-light max-w-lg description-fade">
            আপনার কষ্ট করে জমানো টাকা কীভাবে আপনার ভবিষ্যৎ সুরক্ষিত করতে পারে, তা
            নিয়ে কথা বলবো আমরা। কোনো কঠিন শব্দ নয়, বরং ঘরের মানুষের মতো শান্তভাবে
            সব বর্ণনা করা হবে।
          </p>

          <div className="mt-16 cta-fade">
            <button
              onClick={onStart}
              className="group relative px-24 py-3 bg-white text-stone-900 tracking-widest uppercase transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl"
            >
              <span className="relative z-10">শুরু করুন</span>
              <div className="absolute inset-0 bg-black -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute right-0 top-0 w-full h-screen -z-0 pointer-events-none">
        <img
          src="Assets/hero_image.png"
          className="w-full h-full object-cover grayscale opacity-90 transition-all duration-[20s] hover:scale-110 hover:grayscale-0"
        />
      </div>

      <style>{`
        .serif-font {
          font-family: 'Hind Siliguri', serif;
        }

        /* Entrance animations */
        .headline-fade {
          opacity: 0;
          animation: fadeUp 0.8s ease-out forwards;
        }

        .description-fade {
          opacity: 0;
          animation: fadeUp 0.8s ease-out forwards 0.5s;
        }

        .cta-fade {
          opacity: 0;
          animation: fadeUp 0.8s ease-out forwards 1.2s;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* 🔥 Typewriter underline caret */
        .typewriter-container {
          position: relative;
          display: inline-block;
          min-height: 1.2em;
        }

        .typewriter-text {
          position: relative;
          display: inline-block;
        }

        .typewriter-text:not(:empty)::after {
          content: '';
          position: absolute;
          right: 0;
          bottom: -0.15em;
          width: 0.65em;
          height: 2px;
          background: white;
          animation: underlineBlink 1.1s ease-in-out infinite;
        }

        @keyframes underlineBlink {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
