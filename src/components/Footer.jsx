import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">P</span>
          </div>
          <span className="font-bold text-gray-900 tracking-tight">Pixel Poultry</span>
        </div>
        
        <p className="text-gray-400 text-xs font-medium uppercase tracking-widest">
          © 2026 · Design Thinking Research Project
        </p>
        
        <div className="flex items-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-black transition-colors text-xs font-bold uppercase tracking-widest">Twitter</a>
          <a href="#" className="text-gray-400 hover:text-black transition-colors text-xs font-bold uppercase tracking-widest">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
