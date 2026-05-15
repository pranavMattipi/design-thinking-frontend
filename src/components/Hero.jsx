import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: '100vh' }}>
      {/* Background with Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
        style={{
          backgroundImage: "url('/hero-bg.png')",
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark Overlay with Gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="font-script text-7xl md:text-9xl text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] animate-fade-in-up">
          Pixel Poultry
        </h1>
      </div>
    </section>
  );
};

export default Hero;
