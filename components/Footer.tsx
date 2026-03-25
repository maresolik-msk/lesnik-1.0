import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-birch border-t border-stone pt-20 pb-10 px-6 md:px-12 relative z-0">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8">
                    <Logo className="w-full h-full text-moss" fill="currentColor" />
                </div>
                <h2 className="font-serif text-2xl tracking-widest text-forest">LESNIK</h2>
            </div>
            <p className="text-forest/60 text-sm leading-relaxed max-w-xs">
              Ancient wisdom for the modern home. Sustainable essentials rooted in nature.
            </p>
            <div className="flex gap-4">
              <Instagram className="w-5 h-5 text-forest/60 hover:text-moss hover:scale-110 cursor-pointer transition-all duration-300 ease-quart" />
              <Twitter className="w-5 h-5 text-forest/60 hover:text-moss hover:scale-110 cursor-pointer transition-all duration-300 ease-quart" />
              <Facebook className="w-5 h-5 text-forest/60 hover:text-moss hover:scale-110 cursor-pointer transition-all duration-300 ease-quart" />
            </div>
          </div>

          {/* Column 2: Shop */}
          <div>
            <h3 className="font-sans font-bold text-xs uppercase tracking-widest text-moss mb-6">Shop</h3>
            <ul className="space-y-4 text-sm text-forest/70">
              <li><Link to="/shop" className="hover:text-moss transition-colors">New Arrivals</Link></li>
              <li><Link to="/shop?category=kitchen" className="hover:text-moss transition-colors">Kitchen</Link></li>
              <li><Link to="/shop?category=living" className="hover:text-moss transition-colors">Living</Link></li>
              <li><Link to="/shop?category=bath" className="hover:text-moss transition-colors">Bath</Link></li>
              <li><Link to="/shop" className="hover:text-moss transition-colors">Gift Cards</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="font-sans font-bold text-xs uppercase tracking-widest text-moss mb-6">Company</h3>
            <ul className="space-y-4 text-sm text-forest/70">
              <li><Link to="/our-story" className="hover:text-moss transition-colors">Our Story</Link></li>
              <li><Link to="/our-story" className="hover:text-moss transition-colors">Sustainability</Link></li>
              <li><Link to="/journal" className="hover:text-moss transition-colors">Journal</Link></li>
              <li><Link to="/contact" className="hover:text-moss transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="font-sans font-bold text-xs uppercase tracking-widest text-moss mb-6">Join the Guardians</h3>
            <p className="text-forest/60 text-sm mb-4">Receive slow-living guides and early access.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white border border-stone px-4 py-3 text-sm focus:outline-none focus:border-moss transition-colors rounded-sm"
              />
              <button className="bg-forest text-white px-4 py-3 text-sm uppercase tracking-wider hover:bg-moss transition-colors rounded-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-stone/50 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-forest/40">
          <p>&copy; 2024 Lesnik Eco-Home Solutions. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-moss">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-moss">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;