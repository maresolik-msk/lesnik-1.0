import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const collections = [
  {
    id: 'living',
    title: 'Living Room',
    description: 'Natural textures and sustainable materials for a serene living space.',
    image: '/images/collection-living.svg',
    count: 24
  },
  {
    id: 'kitchen',
    title: 'Kitchen & Dining',
    description: 'Eco-friendly essentials for conscious cooking and shared meals.',
    image: '/images/collection-kitchen.svg',
    count: 18
  },
  {
    id: 'bedroom',
    title: 'Bedroom',
    description: 'Soft organic cotton and calming tones for restful nights.',
    image: '/images/collection-bedroom.svg',
    count: 12
  },
  {
    id: 'bath',
    title: 'Bath & Wellness',
    description: 'Natural self-care rituals and sustainable bathroom essentials.',
    image: '/images/collection-bath.svg',
    count: 15
  }
];

const CollectionsPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 md:px-12 bg-birch min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 text-center">
          <h1 className="font-serif text-5xl md:text-7xl text-forest mb-6">Our Collections</h1>
          <p className="text-forest/60 max-w-2xl mx-auto font-sans tracking-wide">
            Each collection is thoughtfully curated to bring harmony and sustainability to every corner of your home.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((collection, index) => (
            <motion.div 
              key={collection.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[60vh] overflow-hidden rounded-2xl cursor-pointer"
            >
              <img 
                src={collection.image} 
                alt={collection.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-forest/30 group-hover:bg-forest/40 transition-colors duration-500"></div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                <div className="relative z-10">
                  <span className="text-white/70 text-xs font-bold uppercase tracking-widest mb-2 block">
                    {collection.count} Products
                  </span>
                  <h2 className="text-white font-serif text-4xl md:text-5xl mb-4">{collection.title}</h2>
                  <p className="text-white/80 max-w-md mb-8 font-sans tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {collection.description}
                  </p>
                  <Link 
                    to={`/shop?category=${collection.id}`}
                    className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs group/btn"
                  >
                    Explore Collection
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionsPage;
