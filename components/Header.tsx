import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, User, Menu } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Shop', id: 'shop' },
    { name: 'Collections', id: 'collections' },
    { name: 'Our Story', id: 'story' },
    { name: 'Journal', id: 'journal' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out px-6 md:px-12 py-4 ${
        scrolled ? 'bg-birch/95 backdrop-blur-sm border-b border-stone py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Mobile Menu Icon */}
        <div className="md:hidden">
            <Menu strokeWidth={1.5} className="w-6 h-6 text-forest cursor-pointer" />
        </div>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((item) => (
            <a 
              key={item.name} 
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className="text-forest/80 hover:text-moss text-sm tracking-wide font-medium transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-moss transition-all duration-300 group-hover:w-full opacity-50"></span>
            </a>
          ))}
        </nav>

        {/* Logo & Brand Name */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-3 group cursor-pointer">
          <div className={`transition-all duration-500 ease-quart ${scrolled ? 'w-8 h-8' : 'w-10 h-10'}`}>
             <Logo className="w-full h-full text-moss" fill="currentColor" />
          </div>
          <h1 className={`font-serif text-2xl tracking-wider font-medium text-forest transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-90'}`}>
            LESNIK
          </h1>
        </div>

        {/* Icons */}
        <div className="flex gap-6 items-center">
          <Search strokeWidth={1.5} className="w-5 h-5 cursor-pointer text-forest hover:text-moss transition-colors" />
          <User strokeWidth={1.5} className="w-5 h-5 cursor-pointer text-forest hover:text-moss transition-colors hidden md:block" />
          <div className="relative group cursor-pointer">
            <ShoppingBag strokeWidth={1.5} className="w-5 h-5 text-forest group-hover:text-moss transition-colors" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-moss rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;