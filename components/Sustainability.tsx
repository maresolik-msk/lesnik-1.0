import React from 'react';
import { Recycle, Sprout, PackageCheck } from 'lucide-react';
import { useFadeIn } from '../hooks/useFadeIn';

const Sustainability: React.FC = () => {
  const { ref, isVisible } = useFadeIn();

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <div className={`mb-16 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="font-serif text-3xl md:text-4xl text-forest mb-4">Real Sustainability</h2>
          <p className="text-forest/50 font-sans">No greenwashing. Just honest impact.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-stone/50 -z-10"></div>

          {[
            {
              icon: <Sprout className="w-6 h-6 text-white" />,
              title: "Raw Materials",
              text: "Bamboo, certified organic cotton, and recycled glass. Sourced from regenerative farms."
            },
            {
              icon: <PackageCheck className="w-6 h-6 text-white" />,
              title: "Minimal Packaging",
              text: "Mushroom-based compostable packaging. Zero plastic. Soy-based inks."
            },
            {
              icon: <Recycle className="w-6 h-6 text-white" />,
              title: "End of Life",
              text: "Every product is designed to be biodegradable or indefinitely recyclable."
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center transition-all duration-700 delay-${index * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="w-24 h-24 bg-sage rounded-full flex items-center justify-center mb-6 shadow-xl shadow-sage/20 border-4 border-white z-10">
                <div className="w-12 h-12 bg-moss rounded-full flex items-center justify-center">
                   {item.icon}
                </div>
              </div>
              <h3 className="font-serif text-xl mb-3">{item.title}</h3>
              <p className="text-sm text-forest/60 max-w-xs leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
        
        <div className={`mt-16 inline-block bg-stone/30 px-6 py-2 rounded-full text-xs font-bold tracking-widest text-moss uppercase transition-opacity duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <span className="w-2 h-2 bg-moss rounded-full inline-block mr-2"></span>
          Verified Carbon Neutral Checkout
        </div>
      </div>
    </section>
  );
};

export default Sustainability;