import React from 'react';
import { useFadeIn } from '../hooks/useFadeIn';

const BrandStory: React.FC = () => {
  const { ref, isVisible } = useFadeIn(0.1);

  return (
    <section id="story" ref={ref} className="bg-stone relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row">
        
        {/* Sticky Image Section */}
        <div className="md:w-1/2 h-[60vh] md:h-screen md:sticky md:top-0 order-2 md:order-1 relative overflow-hidden">
            <div className={`w-full h-full transition-all duration-[1.5s] ease-quart ${isVisible ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}>
                <img 
                    src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000&auto=format&fit=crop" 
                    alt="Foggy Forest" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-stone/10 mix-blend-multiply pointer-events-none"></div>
            </div>
        </div>

        {/* Scrolling Text Content */}
        <div className="md:w-1/2 py-24 md:py-48 px-4 md:px-16 order-1 md:order-2 flex flex-col justify-center">
          <div className="reveal-container mb-6">
             <span className={`block text-moss uppercase tracking-widest text-xs font-bold reveal-text ${isVisible ? 'visible' : ''}`}>The Myth</span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-6xl text-forest mb-12 leading-tight">
            <div className="reveal-container"><span className={`block reveal-text ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>Inspired by</span></div>
            <div className="reveal-container"><span className={`block italic text-moss/80 reveal-text ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>the Lesnik.</span></div>
          </h2>
          
          <div className={`w-12 h-px bg-forest/20 mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'w-20 opacity-100' : 'w-0 opacity-0'}`}></div>
          
          <div className={`space-y-8 transition-all duration-1000 delay-500 ease-quart ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="font-sans text-forest/70 text-lg leading-relaxed">
              In ancient Slavic folklore, the Lesnik is the guardian of the forest. He protects the trees, guides the lost, and ensures the balance of nature is never broken.
            </p>
            <p className="font-serif text-forest/80 text-xl italic leading-relaxed pl-6 border-l-2 border-moss/30">
              "We take only what the earth gives willingly, and we return beauty in its place."
            </p>
            <div className="pt-4">
                <a href="#" className="inline-block border-b border-forest pb-1 text-forest hover:text-moss hover:border-moss transition-colors uppercase text-sm tracking-widest">
                Read Our Full Story
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;