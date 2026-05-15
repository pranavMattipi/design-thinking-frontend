import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: '100vh' }}>
      {/* Background with Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[2s] hover:scale-110"
        style={{
          backgroundImage: "url('/hero-bg.png')",
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Complex Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="font-script text-8xl md:text-[10rem] text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] animate-fade-in-up hover:drop-shadow-[0_10px_50px_rgba(255,255,255,0.3)] transition-all duration-500 cursor-default select-none">
          Pixel Poultry
        </h1>
        <p className="text-white/70 text-sm md:text-base tracking-[0.4em] uppercase font-bold mt-4 animate-fade-in-up delay-300">
          Design Thinking Research
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center animate-float">
        <span className="text-white/50 text-[10px] uppercase tracking-[0.3em] mb-4 font-bold">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
