import React from 'react';
import { useFadeIn } from '../hooks/useFadeIn';
import Logo from './Logo';

const ForestGuardian: React.FC = () => {
  const { ref, isVisible } = useFadeIn();

  return (
    <section className="bg-sage/20 py-24 relative overflow-hidden" ref={ref}>
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        
        {/* Floating Logo Badge */}
        <div className={`mx-auto w-16 h-16 mb-6 transition-all duration-1000 ease-quart ${isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-12'}`}>
           <Logo className="w-full h-full text-moss" fill="currentColor" />
        </div>

        <span className={`block text-moss font-bold text-xs uppercase tracking-widest mb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Community
        </span>
        <h2 className={`font-serif text-4xl md:text-5xl text-forest mb-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Become a Forest Guardian
        </h2>
        <p className={`font-sans text-forest/70 text-lg max-w-2xl mx-auto mb-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Join over 10,000 members committed to kinder living. Share your sanctuary, get exclusive sustainable tips, and help us plant trees with every purchase.
        </p>

        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <img src="https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=600&auto=format&fit=crop" className="rounded-sm shadow-md aspect-square object-cover hover:-translate-y-2 transition-transform duration-500" alt="Community member 1" />
            <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop" className="rounded-sm shadow-md aspect-square object-cover hover:-translate-y-2 transition-transform duration-500 mt-8" alt="Community member 2" />
            <img src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=600&auto=format&fit=crop" className="rounded-sm shadow-md aspect-square object-cover hover:-translate-y-2 transition-transform duration-500" alt="Community member 3" />
            <img src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=600&auto=format&fit=crop" className="rounded-sm shadow-md aspect-square object-cover hover:-translate-y-2 transition-transform duration-500 mt-8" alt="Community member 4" />
        </div>

        <button className={`bg-forest text-white px-8 py-4 text-sm tracking-widest uppercase rounded-sm hover:bg-moss transition-colors duration-300 shadow-lg shadow-forest/10 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Join The Community
        </button>
      </div>

      {/* Decorative leaf shapes background */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-moss/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-stone/40 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
};

export default ForestGuardian;