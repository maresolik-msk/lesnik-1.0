import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';
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
              <Instagram className="w-5 h-5 text-forest/60 hover:text-moss cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-forest/60 hover:text-moss cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 text-forest/60 hover:text-moss cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Column 2: Shop */}
          <div>
            <h3 className="font-sans font-bold text-xs uppercase tracking-widest text-moss mb-6">Shop</h3>
            <ul className="space-y-4 text-sm text-forest/70">
              {['New Arrivals', 'Kitchen', 'Living', 'Bath', 'Gift Cards'].map(link => (
                <li key={link}><a href="#" className="hover:text-moss transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="font-sans font-bold text-xs uppercase tracking-widest text-moss mb-6">Company</h3>
            <ul className="space-y-4 text-sm text-forest/70">
              {['Our Story', 'Sustainability', 'Journal', 'Contact Us', 'Careers'].map(link => (
                <li key={link}><a href="#" className="hover:text-moss transition-colors">{link}</a></li>
              ))}
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
            <a href="#" className="hover:text-moss">Privacy Policy</a>
            <a href="#" className="hover:text-moss">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;