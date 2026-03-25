import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-stone flex items-center justify-center">
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 w-full h-[120%]"
        style={{ 
          transform: `translateY(${offset * 0.4}px)`,
        }}
      >
        <img 
          src="/images/hero-bg.svg" 
          alt="Serene minimal interior with plants" 
          className={`w-full h-full object-cover transition-all duration-[2s] ease-quart ${isLoaded ? 'scale-100 opacity-90' : 'scale-110 opacity-0'}`}
        />
        <div className="absolute inset-0 bg-stone/20 mix-blend-multiply"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white/40 blur-[1px] animate-float"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${10 + i * 2}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        
        {/* Eyebrow */}
        <div className="reveal-container mb-6 overflow-hidden">
          <h2 className={`font-sans text-xs md:text-sm tracking-[0.2em] uppercase text-forest/60 reveal-text ${isLoaded ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            Est. 2024 • Inspired by Nature
          </h2>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-forest mb-8 leading-[1.1]">
          <div className="reveal-container overflow-hidden">
             <span className={`block reveal-text ${isLoaded ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>Beautiful essentials</span>
          </div>
          <div className="reveal-container overflow-hidden">
             <span className={`block italic font-light reveal-text ${isLoaded ? 'visible' : ''}`} style={{ transitionDelay: '0.5s' }}>for a kinder home.</span>
          </div>
        </h1>

        {/* Subhead */}
        <div className="reveal-container mb-12 overflow-hidden">
          <p className={`font-sans text-forest/70 text-lg md:text-xl max-w-xl mx-auto leading-relaxed reveal-text ${isLoaded ? 'visible' : ''}`} style={{ transitionDelay: '0.7s' }}>
            Everyday products crafted with intention, grounded in ancient wisdom, designed for modern living.
          </p>
        </div>
        
        {/* Buttons */}
        <div className={`flex flex-col md:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-[800ms] ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="bg-moss text-white px-8 py-4 rounded-sm hover:bg-moss/90 hover:scale-105 transition-all duration-300 ease-out text-sm tracking-wide uppercase">
            Shop Essentials
          </button>
          <button className="text-forest hover:text-moss transition-colors duration-300 border-b border-transparent hover:border-moss pb-1 text-sm tracking-wide uppercase">
            Meet the Forest Guardians
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce transition-opacity duration-1000 delay-[1200ms] ${isLoaded ? 'opacity-50' : 'opacity-0'}`}>
        <ArrowDown className="text-forest w-5 h-5" strokeWidth={1} />
      </div>
    </section>
  );
};

export default Hero;