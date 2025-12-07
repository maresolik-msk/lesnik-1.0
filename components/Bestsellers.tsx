import React, { useRef } from 'react';
import { Product } from '../types';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useFadeIn } from '../hooks/useFadeIn';

const products: Product[] = [
  {
    id: '1',
    name: 'Bamboo Weave Storage',
    description: 'Hand-woven, breathable organizer.',
    price: 45,
    category: 'Storage',
    materials: ['Bamboo'],
    image: 'https://images.unsplash.com/photo-1591129841117-3adfd313e34f?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Ceramic Pour Over',
    description: 'Matte glaze finish, clay body.',
    price: 32,
    category: 'Kitchen',
    materials: ['Ceramic'],
    image: 'https://images.unsplash.com/photo-1517080228966-41f237f3743f?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Linen Table Set',
    description: 'Organic European flax linen.',
    price: 85,
    category: 'Dining',
    materials: ['Linen'],
    image: 'https://images.unsplash.com/photo-1574636688324-b0445d07019f?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: '4',
    name: 'Moss Glass Carafe',
    description: 'Recycled blown glass.',
    price: 28,
    category: 'Kitchen',
    materials: ['Glass'],
    image: 'https://images.unsplash.com/photo-1580974511812-4b7190a424b5?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: '5',
    name: 'Teak Serving Board',
    description: 'Sustainably harvested teak.',
    price: 55,
    category: 'Dining',
    materials: ['Teak'],
    image: 'https://images.unsplash.com/photo-1622372433116-244e831737e8?q=80&w=1000&auto=format&fit=crop'
  }
];

const Bestsellers: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { ref: sectionRef, isVisible } = useFadeIn(0.1);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;

    // Get all direct children (product cards + spacer)
    const items = Array.from(container.children) as HTMLElement[];
    if (items.length === 0) return;

    const currentScroll = container.scrollLeft;
    // Buffer to handle slight offsets or rounding differences
    const buffer = 5;
    
    let targetScroll = currentScroll;

    if (direction === 'right') {
      // Find the first item that starts to the right of the current view
      // We use offsetLeft which is relative to the container (due to relative positioning)
      const nextItem = items.find(item => item.offsetLeft > currentScroll + buffer);
      
      if (nextItem) {
        targetScroll = nextItem.offsetLeft;
      }
    } else {
      // Find the first item (searching backwards) that starts to the left of the current view
      const prevItem = [...items].reverse().find(item => item.offsetLeft < currentScroll - buffer);
      
      if (prevItem) {
        targetScroll = prevItem.offsetLeft;
      } else {
        // If nothing is found to the left (e.g. at the very start), ensure we snap to 0
        targetScroll = 0;
      }
    }

    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
  };

  return (
    <section id="shop" ref={sectionRef} className="py-32 bg-birch border-b border-stone/50 overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-16">
          <div className="reveal-container">
            <h2 className={`font-serif text-3xl md:text-4xl text-forest mb-2 reveal-text ${isVisible ? 'visible' : ''}`}>Curated Favorites</h2>
            <div className={`overflow-hidden`}>
                <p className={`text-forest/60 font-sans text-sm mt-2 transition-transform duration-1000 delay-200 ease-quart ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
                    Loved by Forest Guardians everywhere.
                </p>
            </div>
          </div>
          
          <div className={`flex gap-4 transition-opacity duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <button 
                onClick={() => scroll('left')} 
                className="p-3 border border-stone rounded-full hover:bg-forest hover:text-white hover:border-forest transition-all duration-300 active:scale-95 outline-none"
                aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
                onClick={() => scroll('right')} 
                className="p-3 border border-stone rounded-full hover:bg-forest hover:text-white hover:border-forest transition-all duration-300 active:scale-95 outline-none"
                aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div 
          ref={scrollRef} 
          className="flex gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-12 relative"
          style={{ scrollBehavior: 'smooth' }}
        >
          {products.map((product, idx) => (
            <div 
              key={product.id} 
              className={`min-w-[280px] md:min-w-[320px] snap-start group cursor-pointer relative 
                transition-all duration-1000 ease-quart
                ${isVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-12 scale-95'
                }
              `}
              style={{ 
                scrollSnapAlign: 'start',
                transitionDelay: `${300 + idx * 100}ms` 
              }}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-stone/20 mb-6 rounded-sm">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-[0.8s] ease-quart group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-quart">
                    <button className="w-full bg-white/95 text-forest py-4 text-xs uppercase tracking-widest font-bold hover:bg-forest hover:text-white transition-colors">
                    Quick Add
                    </button>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-serif text-xl text-forest group-hover:text-moss transition-colors duration-300">{product.name}</h3>
                  <p className="text-forest/50 text-sm mt-1">{product.description}</p>
                </div>
                <span className="text-moss font-medium font-serif text-lg">${product.price}</span>
              </div>
            </div>
          ))}
          {/* Spacer to allow last item to be fully viewed and snapped if needed */}
          <div className="min-w-[5vw] snap-start"></div>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;