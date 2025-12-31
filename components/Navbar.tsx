import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white px-12 py-6 flex justify-between items-baseline border-b border-gray-100 shadow-sm select-none">
      <style>{`
        /* nav-link underline: center-expand, limited to the exact text width */
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
          background: #000; /* black strip */
          width: 100%; /* match the width of the link text */
          transform: translateX(-50%) scaleX(0);
          transform-origin: center;
          transition: transform 260ms cubic-bezier(.2,.9,.2,1), opacity 200ms;
          opacity: 0.95;
        }
        .nav-link:hover::after {
          transform: translateX(-50%) scaleX(1); /* expand only to text width */
        }
      `}</style>

      <div className="text-2xl font-bold tracking-tighter text-stone-800 select-none">
        অর্থনীতি ™ <span className="text-sm font-light text-stone-400 ml-2 select-none">ARTHANITI</span>
      </div>
      <div className="flex gap-12 text-sm font-medium text-stone-500 uppercase tracking-widest select-none">
        <a href="#about" className="nav-link hover:text-stone-900 transition-colors">আমাদের লক্ষ্য</a>
        <a href="#lessons" className="nav-link hover:text-stone-900 transition-colors">শিক্ষা</a>
        <a href="#mentor" className="nav-link hover:text-stone-900 transition-colors">পরামর্শ</a>
        <a href="#contact" className="nav-link hover:text-stone-900 transition-colors">যোগাযোগ</a>
      </div>
    </nav>
  );
};

export default Navbar;
