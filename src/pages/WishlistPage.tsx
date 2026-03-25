import React from 'react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { Link, Navigate } from 'react-router-dom';
import { Heart, ShoppingBag, Trash2, ArrowRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const WishlistPage: React.FC = () => {
  const { wishlist, removeFromWishlist, addToCart } = useCart();
  const { user } = useAuth();

  if (!user) return <Navigate to="/" />;

  return (
    <div className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto min-h-[80vh]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
        <div>
          <h1 className="font-serif text-4xl md:text-5xl text-forest mb-4">My Wishlist</h1>
          <p className="text-forest/60 font-sans">
            {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} saved for later
          </p>
        </div>
        <Link 
          to="/search" 
          className="flex items-center gap-2 border-b border-forest pb-1 text-sm uppercase tracking-widest hover:text-moss hover:border-moss transition-all duration-300"
        >
          Continue Shopping
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {wishlist.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {wishlist.map((item) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={item.id}
                className="group bg-stone/10 rounded-3xl overflow-hidden border border-stone/30 flex flex-col"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-stone/20">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 ease-quart group-hover:scale-110"
                  />
                  <button 
                    onClick={() => removeFromWishlist(item.id)}
                    className="absolute top-4 right-4 z-20 p-2 bg-white/80 backdrop-blur-sm rounded-full text-forest hover:bg-red-500 hover:text-white transition-all duration-300 shadow-sm"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-2xl text-forest">{item.name}</h3>
                    <span className="font-sans font-bold text-forest">${item.price}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-3 h-3 ${i < Math.floor(item.rating || 0) ? 'fill-forest text-forest' : 'fill-stone text-stone'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-xs text-forest/40">({item.reviews})</span>
                  </div>

                  <button 
                    onClick={() => addToCart(item)}
                    className="w-full mt-auto bg-forest text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-moss transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-forest/10"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Move to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <div className="py-20 text-center">
          <div className="w-24 h-24 bg-stone/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <Heart className="w-10 h-10 text-forest/20" />
          </div>
          <h2 className="font-serif text-3xl text-forest mb-4">Your wishlist is empty</h2>
          <p className="text-forest/60 mb-10 max-w-md mx-auto leading-relaxed">
            Save items you love to keep track of them and easily add them to your cart later.
          </p>
          <Link 
            to="/search" 
            className="inline-block bg-forest text-white px-12 py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-moss transition-all duration-300 shadow-xl shadow-forest/20"
          >
            Explore Collection
          </Link>
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
