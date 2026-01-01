import React from 'react';

interface NavbarProps {
  onNavigate: (state: 'hero' | 'learningPage' | 'mentor' | 'about' | 'learning') => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white px-12 py-6 flex justify-between items-baseline border-b border-gray-100 shadow-sm select-none">
      <style>{`
        .nav-link {
          position: relative;
          display: inline-block;
          user-select: none;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: -6px;
          height: 3px;
          background: #000;
          width: 100%;
          transform: translateX(-50%) scaleX(0);
          transform-origin: center;
          transition: transform 260ms cubic-bezier(.2,.9,.2,1), opacity 200ms;
          opacity: 0.95;
        }
        .nav-link:hover::after {
          transform: translateX(-50%) scaleX(1);
        }
      `}</style>

      <div className="text-2xl font-bold tracking-tighter text-stone-800 select-none">
        অর্থনীতি ™ <span className="text-sm font-light text-stone-400 ml-2 select-none">ARTHANITI</span>
      </div>
      <div className="flex gap-12 text-sm font-medium text-stone-500 uppercase tracking-widest select-none">
        <button onClick={() => onNavigate('hero')} className="nav-link hover:text-stone-900 transition-colors">আমাদের লক্ষ্য</button>
        <button onClick={() => onNavigate('learningPage')} className="nav-link hover:text-stone-900 transition-colors">শিক্ষা</button>
        <button onClick={() => onNavigate('mentor')} className="nav-link hover:text-stone-900 transition-colors">পরামর্শ</button>
        <button onClick={() => onNavigate('about')} className="nav-link hover:text-stone-900 transition-colors">যোগাযোগ</button>
      </div>
    </nav>
  );
};

export default Navbar;