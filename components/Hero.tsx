import React, { useEffect, useState } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative w-full h-screen bg-birch overflow-hidden flex flex-col lg:flex-row">
      {/* Left Side: Typography & Content */}
      <div className="relative z-20 w-full lg:w-1/2 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-20 lg:pt-0">
        
        {/* Vertical Rail Text */}
        <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2">
          <p className="writing-vertical-rl rotate-180 text-[10px] tracking-[0.3em] uppercase text-forest/30 font-display">
            COLLECTION 2024 • SUSTAINABLE LIVING
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          {/* Eyebrow */}
          <span className="block font-display text-[10px] md:text-xs tracking-[0.4em] uppercase text-moss mb-8 font-semibold">
            Inspired by the Forest
          </span>

          {/* Headline */}
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-forest leading-[0.9] mb-10 tracking-tight">
            Beautiful <br />
            <span className="italic font-light text-moss/80">essentials</span> <br />
            for home.
          </h1>

          {/* Subhead */}
          <p className="font-sans text-forest/60 text-base md:text-lg max-w-md mb-12 leading-relaxed">
            Everyday products crafted with intention, grounded in ancient wisdom, and designed for modern, conscious living.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
            <button className="group relative flex items-center gap-4 bg-forest text-white px-10 py-5 rounded-full overflow-hidden transition-all duration-500 hover:bg-moss">
              <span className="relative z-10 font-display text-[11px] font-bold uppercase tracking-[0.2em]">
                Shop Collection
              </span>
              <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" />
              <div className="absolute inset-0 bg-moss translate-y-full transition-transform duration-500 group-hover:translate-y-0"></div>
            </button>
            
            <button className="group flex items-center gap-2 text-forest/60 hover:text-forest transition-colors duration-300">
              <span className="font-display text-[11px] font-bold uppercase tracking-[0.2em]">
                Our Story
              </span>
              <div className="w-8 h-[1px] bg-forest/20 transition-all duration-500 group-hover:w-12 group-hover:bg-forest"></div>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Right Side: Immersive Image */}
      <div className="relative w-full lg:w-1/2 h-full overflow-hidden">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={isLoaded ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=2070&auto=format&fit=crop" 
            alt="Serene minimal interior" 
            className="w-full h-full object-cover"
          />
          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-forest/5 mix-blend-multiply"></div>
        </motion.div>

        {/* Floating Detail Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isLoaded ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.5, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-12 right-12 z-30 hidden md:block"
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-2xl max-w-[240px]">
            <p className="font-serif text-white text-lg mb-4 leading-snug">
              "Nature is not a place to visit. It is home."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px] bg-white/40"></div>
              <span className="font-display text-[9px] text-white/60 uppercase tracking-widest">Gary Snyder</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : {}}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30"
      >
        <div className="flex flex-col items-center gap-4">
          <span className="font-display text-[9px] text-forest/30 uppercase tracking-[0.4em] rotate-90 mb-8">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-forest/20 to-transparent"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
