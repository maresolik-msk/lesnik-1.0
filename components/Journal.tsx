import React from 'react';
import { useFadeIn } from '../hooks/useFadeIn';
import { Article } from '../types';

const articles: Article[] = [
  {
    id: '1',
    title: '5 Ways to Reduce Plastic in Your Kitchen Today',
    category: 'Guides',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'The Art of Slow Mornings: A Ritual Guide',
    category: 'Wellness',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'Understanding Bamboo: Why It Matters',
    category: 'Materials',
    image: 'https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?q=80&w=1000&auto=format&fit=crop'
  }
];

const Journal: React.FC = () => {
  const { ref, isVisible } = useFadeIn();

  return (
    <section id="journal" ref={ref} className="py-24 bg-birch px-6 md:px-12 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-forest">Journal</h2>
          <a href="#" className="text-sm font-sans uppercase tracking-widest text-forest/60 hover:text-moss transition-colors border-b border-transparent hover:border-moss">View All</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <div 
              key={article.id} 
              className={`group cursor-pointer transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="relative overflow-hidden mb-4 rounded-sm aspect-[3/2]">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.95] group-hover:brightness-100"
                />
                <span className="absolute top-4 left-4 bg-white/90 text-forest text-[10px] font-bold uppercase tracking-widest px-2 py-1">
                  {article.category}
                </span>
              </div>
              <h3 className="font-serif text-xl text-forest group-hover:text-moss transition-colors leading-snug mb-2">
                {article.title}
              </h3>
              <p className="text-forest/50 text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-300">
                Read Article &rarr;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;