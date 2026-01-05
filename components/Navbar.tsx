import React from 'react';

interface NavbarProps {
  onNavigate: (state: 'hero' | 'learningPage' | 'mentor' | 'about' | 'learning') => void;
  activeState: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeState }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white px-12 py-6 flex justify-between items-center border-b border-gray-100 shadow-sm select-none">
      <style>{`
        .nav-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          background: none;
          border: none;
          padding: 0;
          color: #78716c; /* stone-500 */
          transition: color 200ms;
        }

        /* 
           GRID STACKING TECHNIQUE:
           We place both the invisible bold text and the visible text in the same grid cell.
           This reserves the maximum width required for the boldest state while 
           ensuring the button's height is exactly one line of text.
        */
        .nav-link-content {
          display: grid;
          grid-template-areas: "stack";
          align-items: center;
        }

        .nav-link-spacer {
          grid-area: stack;
          visibility: hidden;
          font-weight: 700; /* Max weight to reserve width */
          pointer-events: none;
          user-select: none;
        }

        .nav-link-text {
          grid-area: stack;
          transition: font-weight 200ms;
          text-align: center;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: -8px;
          height: 3px;
          background: #000;
          width: 100%;
          transform: translateX(-50%) scaleX(0);
          transform-origin: center;
          transition: transform 260ms cubic-bezier(.2,.9,.2,1), opacity 200ms;
          opacity: 0;
        }

        /* Active State: Deepest / Most Muscular */
        .nav-link.active {
          color: #1c1917 !important;
        }
        .nav-link.active .nav-link-text {
          font-weight: 700;
        }
        .nav-link.active::after {
          transform: translateX(-50%) scaleX(1);
          opacity: 0.95;
        }

        /* Hover State: Lighter than Active, Deeper than Default */
        .nav-link:hover:not(.active) {
          color: #44403c;
        }
        .nav-link:hover:not(.active) .nav-link-text {
          font-weight: 600;
        }
        .nav-link:hover:not(.active)::after {
          transform: translateX(-50%) scaleX(0.4);
          opacity: 0.4;
        }
      `}</style>

      {/* Brand Section */}
      <div className="flex items-center">
        <div className="text-3xl font-bold tracking-tighter text-stone-800 select-none cursor-default leading-none">
          অর্থনীতি ™ <span className="text-sm font-light text-stone-400 ml-3 select-none">ARTHANITI</span>
        </div>
      </div>
      
      {/* Navigation Links */}
      <div className="flex gap-12 text-sm font-medium uppercase tracking-widest select-none">
        <button 
          onClick={() => onNavigate('hero')} 
          className={`nav-link ${activeState === 'hero' ? 'active' : ''}`}
        >
          <div className="nav-link-content">
            <span className="nav-link-spacer">আমাদের লক্ষ্য</span>
            <span className="nav-link-text">আমাদের লক্ষ্য</span>
          </div>
        </button>
        
        <button 
          onClick={() => onNavigate('learningPage')} 
          className={`nav-link ${activeState === 'learningPage' ? 'active' : ''}`}
        >
          <div className="nav-link-content">
            <span className="nav-link-spacer">শিক্ষা</span>
            <span className="nav-link-text">শিক্ষা</span>
          </div>
        </button>
        
        <button 
          onClick={() => onNavigate('mentor')} 
          className={`nav-link ${activeState === 'mentor' ? 'active' : ''}`}
        >
          <div className="nav-link-content">
            <span className="nav-link-spacer">পরামর্শ</span>
            <span className="nav-link-text">পরামর্শ</span>
          </div>
        </button>
        
        <button 
          onClick={() => onNavigate('about')} 
          className={`nav-link ${activeState === 'about' ? 'active' : ''}`}
        >
          <div className="nav-link-content">
            <span className="nav-link-spacer">যোগাযোগ</span>
            <span className="nav-link-text">যোগাযোগ</span>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;