import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Leaf, Heart, Globe } from 'lucide-react';

const OurStoryPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 md:px-12 bg-birch min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center">
          <h1 className="font-serif text-5xl md:text-8xl text-forest mb-8">Our Story</h1>
          <p className="text-forest/60 max-w-3xl mx-auto font-sans tracking-wide text-lg md:text-xl leading-relaxed">
            Lesnik was born from a simple belief: that our homes should be as sustainable as they are beautiful. 
            We're on a mission to redefine modern living through conscious design and natural materials.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden aspect-[4/5]"
          >
            <img 
              src="/images/journal-sustainable.svg" 
              alt="Nature's Inspiration"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-forest mb-8">Rooted in Nature</h2>
            <p className="text-forest/70 font-sans tracking-wide mb-6 leading-relaxed">
              Our journey began in the heart of the forest, where we found inspiration in the quiet strength of trees and the delicate balance of the ecosystem. 
              We realized that the products we bring into our homes often disrupt this balance, and we wanted to change that.
            </p>
            <p className="text-forest/70 font-sans tracking-wide leading-relaxed">
              Today, Lesnik works with local artisans and sustainable suppliers to create home essentials that are kind to the earth and a joy to live with. 
              Every piece in our collection tells a story of craftsmanship, sustainability, and a deep respect for the natural world.
            </p>
          </motion.div>
        </section>

        <section className="bg-stone/20 rounded-[3rem] p-12 md:p-24 mb-32">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-forest mb-6">Our Core Values</h2>
            <p className="text-forest/60 max-w-2xl mx-auto font-sans tracking-wide">
              These principles guide everything we do, from the materials we source to the way we package our products.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: Leaf, title: 'Sustainability', desc: 'We prioritize renewable materials and eco-friendly production processes.' },
              { icon: ShieldCheck, title: 'Quality', desc: 'Our products are built to last, reducing waste and promoting longevity.' },
              { icon: Heart, title: 'Artisan Craft', desc: 'We support traditional craftsmanship and fair labor practices.' },
              { icon: Globe, title: 'Giving Back', desc: 'A portion of every purchase goes toward global reforestation projects.' }
            ].map((value, index) => (
              <motion.div 
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:bg-moss group-hover:text-white transition-all duration-500">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl text-forest mb-3">{value.title}</h3>
                <p className="text-forest/60 text-sm font-sans tracking-wide leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="text-center max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-6xl text-forest mb-8">Join the Movement</h2>
          <p className="text-forest/70 font-sans tracking-wide mb-12 text-lg leading-relaxed">
            Sustainability isn't just a choice; it's a way of life. We invite you to explore our collection and discover how beautiful conscious living can be.
          </p>
          <button className="bg-forest text-white hover:bg-moss px-12 py-5 text-sm tracking-widest uppercase font-bold transition-all duration-300 rounded-full shadow-xl">
            Explore the Collection
          </button>
        </section>
      </div>
    </div>
  );
};

export default OurStoryPage;
