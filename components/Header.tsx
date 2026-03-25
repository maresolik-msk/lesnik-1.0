import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, User, Menu, X, Heart, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../src/contexts/AuthContext';
import { useCart } from '../src/contexts/CartContext';
import Logo from './Logo';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { user, signIn, signOut } = useAuth();
  const { cart, wishlist } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/collections' },
    { name: 'Our Story', path: '/our-story' },
    { name: 'Journal', path: '/journal' },
  ];

  return (
    <>
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
              <Link 
                key={item.name} 
                to={item.path}
                className="text-forest/80 hover:text-moss text-sm tracking-wide font-medium transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-moss transition-all duration-300 group-hover:w-full opacity-50"></span>
              </Link>
            ))}
          </nav>

          {/* Logo & Brand Name */}
          <Link to="/" className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-3 group cursor-pointer">
            <div className={`transition-all duration-500 ease-quart ${scrolled ? 'w-8 h-8' : 'w-10 h-10'}`}>
               <Logo className="w-full h-full text-moss" fill="currentColor" />
            </div>
            <h1 className={`font-serif text-2xl tracking-wider font-medium text-forest transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-90'}`}>
              LESNIK
            </h1>
          </Link>

          {/* Icons */}
          <div className="flex gap-4 md:gap-6 items-center">
            <Search 
              strokeWidth={1.5} 
              className="w-5 h-5 cursor-pointer text-forest hover:text-moss transition-colors" 
              onClick={() => setIsSearchOpen(true)}
            />

            <Link to="/cart" className="relative group cursor-pointer">
              <ShoppingBag strokeWidth={1.5} className="w-5 h-5 text-forest group-hover:text-moss transition-colors" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-moss text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {cart.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </Link>
            
            <div className="hidden md:flex items-center gap-4">
              {user ? (
                <div className="flex items-center gap-4">
                  <Link to="/wishlist" className="relative group">
                    <Heart strokeWidth={1.5} className="w-5 h-5 text-forest hover:text-moss transition-colors" />
                    {wishlist.length > 0 && (
                      <span className="absolute -top-2 -right-2 bg-moss text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                        {wishlist.length}
                      </span>
                    )}
                  </Link>
                  <div className="group relative">
                    <img 
                      src={user.photoURL || 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix'} 
                      alt="Profile" 
                      className="w-8 h-8 rounded-full cursor-pointer border border-stone"
                    />
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-stone rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="p-4 border-b border-stone">
                        <p className="text-xs font-bold text-forest uppercase tracking-widest">{user.displayName}</p>
                        <p className="text-[10px] text-forest/40 truncate">{user.email}</p>
                      </div>
                      <Link to="/profile" className="block px-4 py-2 text-sm text-forest hover:bg-birch transition-colors">My Orders</Link>
                      <button 
                        onClick={() => signOut()}
                        className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50 transition-colors flex items-center gap-2"
                      >
                        <LogOut className="w-4 h-4" />
                        Sign Out
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <button 
                  onClick={() => signIn()}
                  className="text-xs font-bold uppercase tracking-widest text-forest hover:text-moss transition-colors"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[100] bg-birch/98 backdrop-blur-md flex items-center justify-center p-6">
          <button 
            onClick={() => setIsSearchOpen(false)}
            className="absolute top-8 right-8 p-2 text-forest hover:text-moss transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <form onSubmit={handleSearch} className="w-full max-w-2xl">
            <input 
              autoFocus
              type="text" 
              placeholder="Search for essentials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-b-2 border-forest py-4 text-3xl md:text-5xl font-serif text-forest placeholder:text-forest/20 focus:outline-none focus:border-moss transition-colors"
            />
            <p className="mt-6 text-forest/40 font-sans tracking-widest uppercase text-xs">Press Enter to search</p>
          </form>
        </div>
      )}
    </>
  );
};

export default Header;