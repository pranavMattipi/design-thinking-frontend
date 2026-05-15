import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About us', href: '#about' },
    { name: 'Problem Discovery', href: '#problem-discovery' },
    { name: 'User Understanding', href: '#user-understanding' },
    { name: 'Problem Framing', href: '#problem-framing' },
    { name: 'Ideation', href: '#ideation' },
    { name: 'Evaluation', href: '#evaluation-shortlisting' },
    { name: 'Solution Framing', href: '#solution-framing' },
    { name: 'Reflection', href: '#reflection' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      const navbarHeight = 72;
      const top = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between transition-all duration-500 ${
      isScrolled && !isMenuOpen ? 'bg-white/70 backdrop-blur-lg border-b border-gray-200/30 py-3 shadow-lg shadow-black/5' : 'bg-transparent py-5'
    }`}>
      <div className="relative z-[120] flex items-center space-x-3 group cursor-pointer" onClick={(e) => handleNavClick(e, '#')}>
        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
          <span className="text-white text-xs font-bold">P</span>
        </div>
        <span className={`font-bold text-xl tracking-tight transition-colors duration-300 ${
          isMenuOpen ? 'text-white' : (isScrolled ? 'text-gray-900' : 'text-white')
        }`}>
          Pixel Poultry
        </span>
      </div>

      {/* Desktop Links */}
      <div className="hidden lg:flex items-center space-x-6">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className={`nav-link-ltr text-[11px] uppercase tracking-widest font-bold transition-colors duration-300 whitespace-nowrap ${
              isScrolled ? 'text-gray-500 hover:text-black' : 'text-white/80 hover:text-white'
            }`}
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Hamburger Button */}
      <div className="lg:hidden relative z-[120]">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`p-2 transition-colors duration-300 ${
            isMenuOpen ? 'text-black' : (isScrolled ? 'text-gray-900' : 'text-white')
          }`}
        >
          {isMenuOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay (Backdrop) */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] lg:hidden transition-opacity duration-500 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div className={`fixed top-0 right-0 h-full w-[80%] sm:w-[50%] bg-white z-[110] lg:hidden transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } shadow-[-20px_0_60px_-15px_rgba(0,0,0,0.3)] flex flex-col`}>
        <div className="flex-1 px-8 py-24 overflow-y-auto scrollbar-hide">
          <div className="flex flex-col space-y-0.5">
            <div className="px-4 mb-4">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Navigation</p>
            </div>
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="group py-5 px-4 border-b border-gray-50/50 flex items-center justify-between text-black transition-all active:bg-gray-100 hover:bg-gray-50"
              >
                <span className="text-base font-bold uppercase tracking-tight">{link.name}</span>
                <svg className="w-4 h-4 text-gray-300 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </div>
        
        <div className="p-12 border-t border-gray-100">
          <p className="text-[10px] text-gray-400 uppercase tracking-[0.3em] font-bold">Pixel Poultry — Design Thinking</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
