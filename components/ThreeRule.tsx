import React from 'react';
import { Leaf, Gem, HeartHandshake } from 'lucide-react';
import { useFadeIn } from '../hooks/useFadeIn';

const ThreeRule: React.FC = () => {
  const { ref, isVisible } = useFadeIn();

  const rules = [
    {
      icon: <Leaf className="w-8 h-8 text-moss" strokeWidth={1} />,
      title: "Sustainable",
      desc: "Earth-first materials that return to the soil, not the landfill."
    },
    {
      icon: <Gem className="w-8 h-8 text-moss" strokeWidth={1} />,
      title: "Beautiful",
      desc: "Warm minimalism that brings calm and clarity to your space."
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-moss" strokeWidth={1} />,
      title: "Accessible",
      desc: "Premium design without the luxury markup. Fair for everyone."
    }
  ];

  return (
    <section ref={ref} className="py-32 bg-birch px-6 border-b border-stone/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
            <div className="reveal-container inline-block">
                <h2 className={`font-serif text-3xl md:text-4xl text-forest mb-4 reveal-text ${isVisible ? 'visible' : ''}`}>The 3× Rule</h2>
            </div>
            <div className={`h-px w-20 bg-stone mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'w-20 opacity-100' : 'w-0 opacity-0'}`}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {rules.map((rule, idx) => (
            <div 
              key={idx}
              className={`bg-white p-12 text-center rounded-sm border border-transparent hover:border-stone/50 hover:shadow-2xl hover:shadow-stone/20 transition-all duration-700 ease-quart group
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
              `}
              style={{ transitionDelay: `${idx * 200 + 300}ms` }}
            >
              <div className="flex justify-center mb-8 group-hover:-translate-y-2 transition-transform duration-500 ease-quart">
                {rule.icon}
              </div>
              <h3 className="font-serif text-xl text-forest mb-4">{rule.title}</h3>
              <p className="font-sans text-forest/60 leading-relaxed text-sm md:text-base">
                {rule.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeRule;