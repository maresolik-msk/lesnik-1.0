import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const articles = [
  {
    id: 'sustainable-living-tips',
    title: '5 Simple Ways to Live More Sustainably at Home',
    excerpt: 'Small changes can make a big difference. Discover how to reduce your environmental footprint with these easy tips.',
    image: '/images/journal-sustainable.svg',
    date: 'March 15, 2026',
    author: 'Elena Rossi',
    category: 'Lifestyle'
  },
  {
    id: 'art-of-slow-living',
    title: 'The Art of Slow Living: Finding Peace in a Busy World',
    excerpt: 'Explore the philosophy of slow living and learn how to create a more mindful and intentional home environment.',
    image: '/images/journal-slow-living.svg',
    date: 'March 10, 2026',
    author: 'Julian Thorne',
    category: 'Mindfulness'
  },
  {
    id: 'eco-friendly-materials',
    title: 'A Guide to Eco-Friendly Materials for Your Home',
    excerpt: 'From bamboo to recycled glass, learn about the sustainable materials that are shaping the future of interior design.',
    image: '/images/journal-materials.svg',
    date: 'March 5, 2026',
    author: 'Sarah Jenkins',
    category: 'Design'
  },
  {
    id: 'reforestation-impact',
    title: 'Our Impact: How Your Purchases Support Reforestation',
    excerpt: 'Discover the positive impact we are making together through our partnership with global reforestation projects.',
    image: '/images/journal-reforestation.svg',
    date: 'February 28, 2026',
    author: 'Mark Sterling',
    category: 'Sustainability'
  }
];

const JournalPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 md:px-12 bg-birch min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center">
          <h1 className="font-serif text-5xl md:text-8xl text-forest mb-8">The Journal</h1>
          <p className="text-forest/60 max-w-2xl mx-auto font-sans tracking-wide text-lg">
            Insights, inspiration, and stories about sustainable living, conscious design, and the natural world.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {articles.map((article, index) => (
            <motion.article 
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl mb-8">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur-sm text-forest px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-6 mb-4 text-[10px] text-forest/40 font-bold uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3 h-3" />
                  {article.date}
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-3 h-3" />
                  {article.author}
                </div>
              </div>
              
              <h2 className="font-serif text-3xl md:text-4xl text-forest mb-4 group-hover:text-moss transition-colors leading-tight">
                {article.title}
              </h2>
              
              <p className="text-forest/60 font-sans tracking-wide mb-8 leading-relaxed max-w-xl">
                {article.excerpt}
              </p>
              
              <Link 
                to={`/journal/${article.id}`}
                className="inline-flex items-center gap-2 text-forest font-bold uppercase tracking-widest text-xs group/btn"
              >
                Read Article
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-2" />
              </Link>
            </motion.article>
          ))}
        </div>

        <section className="mt-32 bg-forest rounded-[3rem] p-12 md:p-24 text-center text-white">
          <h2 className="font-serif text-4xl md:text-6xl mb-8">Stay Inspired</h2>
          <p className="text-white/70 max-w-xl mx-auto font-sans tracking-wide mb-12">
            Subscribe to our newsletter and receive our latest journal articles, product launches, and exclusive offers directly in your inbox.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your email address"
              className="flex-1 bg-white/10 border border-white/20 rounded-full px-8 py-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-moss transition-all"
            />
            <button className="bg-white text-forest hover:bg-moss hover:text-white px-10 py-4 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-xl">
              Subscribe
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default JournalPage;
