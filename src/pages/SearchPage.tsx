import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search as SearchIcon, SlidersHorizontal, Star, ShoppingBag, Heart } from 'lucide-react';
import { products } from '../data/products';
import { Product } from '../../types';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { motion, AnimatePresence } from 'motion/react';

const SearchPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<Product[]>([]);
  const [sortBy, setSortBy] = useState('relevance');
  const { addToCart, addToWishlist, wishlist, removeFromWishlist } = useCart();
  const { user, signIn } = useAuth();

  useEffect(() => {
    const filtered = products.filter(p => 
      p.name.toLowerCase().includes(query.toLowerCase()) || 
      p.description.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase())
    );

    let sorted = [...filtered];
    if (sortBy === 'price-low') sorted.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') sorted.sort((a, b) => b.price - a.price);
    if (sortBy === 'rating') sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));

    setResults(sorted);
  }, [query, sortBy]);

  const isProductInWishlist = (productId: string) => {
    return wishlist.some(item => item.id === productId);
  };

  const handleWishlistToggle = async (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    if (!user) {
      signIn();
      return;
    }
    if (isProductInWishlist(product.id)) {
      await removeFromWishlist(product.id);
    } else {
      await addToWishlist(product);
    }
  };

  return (
    <div className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
        <div>
          <h1 className="font-serif text-4xl md:text-5xl text-forest mb-4">
            {query ? `Results for "${query}"` : 'All Products'}
          </h1>
          <p className="text-forest/60 font-sans">
            Showing {results.length} {results.length === 1 ? 'product' : 'products'}
          </p>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-forest/40" />
            <input 
              type="text" 
              placeholder="Search products..."
              value={query}
              onChange={(e) => setSearchParams({ q: e.target.value })}
              className="w-full bg-stone/20 border-none rounded-full py-3 pl-12 pr-6 focus:ring-2 focus:ring-moss/20 text-forest placeholder:text-forest/30"
            />
          </div>
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-stone/20 border-none rounded-full py-3 px-6 text-forest text-sm font-medium focus:ring-2 focus:ring-moss/20 outline-none"
          >
            <option value="relevance">Sort by Relevance</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      {results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {results.map((product) => (
            <motion.div 
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              key={product.id}
              className="group relative flex flex-col"
            >
              <div 
                className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6 bg-stone/20"
                style={{ backgroundColor: product.color || '#F5F5F0' }}
              >
                <Link to={`/product/${product.id}`} className="block w-full h-full">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 ease-quart group-hover:scale-110"
                  />
                </Link>
                
                <button 
                  onClick={(e) => handleWishlistToggle(e, product)}
                  className="absolute top-4 right-4 z-20 p-2 bg-white/80 backdrop-blur-sm rounded-full text-forest hover:bg-forest hover:text-white transition-all duration-300"
                >
                  <Heart className={`w-4 h-4 ${isProductInWishlist(product.id) ? 'fill-red-500 text-red-500' : ''}`} />
                </button>

                <div className="absolute inset-x-4 bottom-4 translate-y-[120%] group-hover:translate-y-0 transition-transform duration-500 ease-quart z-20">
                  <button 
                    onClick={() => addToCart(product)}
                    className="w-full bg-forest text-white py-3 rounded-xl shadow-lg shadow-forest/20 flex items-center justify-center gap-2 hover:bg-moss transition-colors"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Add to Cart</span>
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-start">
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-serif text-xl text-forest group-hover:text-moss transition-colors duration-300">
                      {product.name}
                    </h3>
                  </Link>
                  <span className="font-sans font-medium text-forest">${product.price}</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-3 h-3 ${i < Math.floor(product.rating || 0) ? 'fill-forest text-forest' : 'fill-stone text-stone'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-xs text-forest/40">({product.reviews})</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <div className="w-20 h-20 bg-stone/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <SearchIcon className="w-10 h-10 text-forest/20" />
          </div>
          <h2 className="font-serif text-2xl text-forest mb-2">No products found</h2>
          <p className="text-forest/60 mb-8">Try adjusting your search or filters to find what you're looking for.</p>
          <button 
            onClick={() => setSearchParams({ q: '' })}
            className="bg-forest text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-moss transition-colors"
          >
            Clear Search
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
