import React from 'react';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About us', href: '#about' },
    { name: 'Problem Discovery & Research', href: '#problem-discovery' },
    { name: 'User Understanding', href: '#user-understanding' },
    { name: 'Problem Framing', href: '#problem-framing' },
    { name: 'Ideation', href: '#ideation' },
    { name: 'Evaluation & Shortlisting', href: '#evaluation-shortlisting' },
    { name: 'Solution Framing', href: '#solution-framing' },
    { name: 'Reflection & Learning', href: '#reflection' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">P</span>
        </div>
        <span className="font-bold text-xl tracking-tight text-gray-900">Pixel Poultry</span>
      </div>

      <div className="hidden lg:flex items-center space-x-4">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="text-xs font-medium text-gray-600 hover:text-black transition-colors whitespace-nowrap"
          >
            {link.name}
          </a>
        ))}
      </div>

      <div className="lg:hidden">
        <button className="p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
