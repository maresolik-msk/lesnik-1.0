import React from 'react';
import { useFadeIn } from '../hooks/useFadeIn';
import { ArrowRight } from 'lucide-react';

const FeaturedCollections: React.FC = () => {
  const { ref, isVisible } = useFadeIn(0.15);

  return (
    <section id="collections" className="py-20 bg-birch px-4 md:px-12 scroll-mt-24" ref={ref}>
      <div className={`max-w-7xl mx-auto`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 h-auto md:h-[600px]">
          
          {/* Main Collection - Large */}
          <div className="lg:col-span-7 relative group overflow-hidden h-[400px] md:h-full cursor-pointer rounded-sm image-scale-container">
            <img 
              src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop" 
              alt="Kitchen Collection" 
              className={`w-full h-full object-cover transition-transform duration-[1.5s] ease-quart group-hover:scale-110 image-scale ${isVisible ? 'visible' : ''}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/50 to-transparent opacity-80" />
            <div className="absolute bottom-8 left-8 text-white z-10">
              <span className="bg-stone/90 text-forest text-xs font-bold px-3 py-1 uppercase tracking-widest mb-3 inline-block">Kitchen</span>
              <div className="overflow-hidden">
                 <h3 className={`font-serif text-3xl md:text-4xl mb-2 transition-transform duration-1000 delay-300 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>The Heart of the Home</h3>
              </div>
              <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center gap-2 text-sm border-b border-white/50 w-max pb-1 translate-y-4 group-hover:translate-y-0 ease-quart">
                Explore Collection <ArrowRight className="w-4 h-4" />
              </p>
            </div>
          </div>

          {/* Secondary Collections - Stacked */}
          <div className="lg:col-span-5 flex flex-col gap-6 h-full">
            <div className="relative group overflow-hidden flex-1 rounded-sm h-[300px] md:h-auto cursor-pointer image-scale-container">
              <img 
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=2070&auto=format&fit=crop" 
                alt="Living Room" 
                className={`w-full h-full object-cover transition-transform duration-[1.5s] ease-quart group-hover:scale-110 image-scale ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: '0.2s' }}
              />
              <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20" />
              <div className="absolute bottom-6 left-6 text-white z-10">
                <span className="bg-stone/90 text-forest text-xs font-bold px-3 py-1 uppercase tracking-widest mb-3 inline-block">Living</span>
                <div className="overflow-hidden">
                    <h3 className={`font-serif text-2xl transition-transform duration-1000 delay-500 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>Quiet Comforts</h3>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden flex-1 rounded-sm h-[300px] md:h-auto cursor-pointer image-scale-container">
              <img 
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop" 
                alt="Bath & Body" 
                className={`w-full h-full object-cover transition-transform duration-[1.5s] ease-quart group-hover:scale-110 image-scale ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: '0.4s' }}
              />
              <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20" />
              <div className="absolute bottom-6 left-6 text-white z-10">
                <span className="bg-stone/90 text-forest text-xs font-bold px-3 py-1 uppercase tracking-widest mb-3 inline-block">Bath</span>
                <div className="overflow-hidden">
                   <h3 className={`font-serif text-2xl transition-transform duration-1000 delay-700 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>Rituals of Water</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;