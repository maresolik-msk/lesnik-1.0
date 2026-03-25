import React from 'react';
import { products } from '../data/products';
import { ShoppingBag, Heart, Star, SlidersHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { motion } from 'motion/react';

const ShopPage: React.FC = () => {
  const { addToCart, addToWishlist, wishlist } = useCart();
  const { user, signIn } = useAuth();

  const handleAddToWishlist = (product: any) => {
    if (!user) {
      signIn();
      return;
    }
    addToWishlist(product);
  };

  const isInWishlist = (productId: string) => {
    return wishlist.some(item => item.id === productId);
  };

  return (
    <div className="pt-32 pb-20 px-6 md:px-12 bg-birch min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="font-serif text-5xl md:text-7xl text-forest mb-4">Shop All</h1>
            <p className="text-forest/60 max-w-xl font-sans tracking-wide">
              Explore our curated collection of sustainable home essentials, designed to bring nature's calm into your living space.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-6 py-3 border border-stone rounded-full text-sm font-medium text-forest hover:bg-stone/20 transition-colors">
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
            <select className="bg-transparent border border-stone rounded-full px-6 py-3 text-sm font-medium text-forest focus:outline-none focus:ring-1 focus:ring-moss">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-stone/10 mb-6">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 group-hover:translate-x-0 transition-transform duration-500">
                  <button 
                    onClick={() => handleAddToWishlist(product)}
                    className={`p-3 rounded-full shadow-lg transition-colors ${
                      isInWishlist(product.id) ? 'bg-moss text-white' : 'bg-white text-forest hover:bg-moss hover:text-white'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
                  </button>
                  <button 
                    onClick={() => addToCart(product)}
                    className="p-3 bg-white text-forest hover:bg-moss hover:text-white rounded-full shadow-lg transition-colors"
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-forest text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                    {product.badge}
                  </span>
                )}
              </div>
              
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-serif text-xl text-forest group-hover:text-moss transition-colors">
                  <Link to={`/product/${product.id}`}>{product.name}</Link>
                </h3>
                <span className="font-sans font-medium text-forest">${product.price}</span>
              </div>
              
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-3 h-3 ${i < (product.rating || 0) ? 'fill-moss text-moss' : 'text-stone'}`} 
                  />
                ))}
                <span className="text-[10px] text-forest/40 ml-1">({product.reviews || 0})</span>
              </div>
              
              <p className="text-xs text-forest/60 font-sans tracking-wide line-clamp-2">
                {product.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
