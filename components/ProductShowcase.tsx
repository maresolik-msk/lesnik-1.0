import React, { useState } from 'react';
import { ShoppingBag, Star, Plus, X, ArrowRight, Heart } from 'lucide-react';
import { useFadeIn } from '../hooks/useFadeIn';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';
import { products } from '../src/data/products';
import { useCart } from '../src/contexts/CartContext';
import { useAuth } from '../src/contexts/AuthContext';

const ProductShowcase: React.FC = () => {
  const { ref, isVisible } = useFadeIn(0.1);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { addToCart, addToWishlist, wishlist, removeFromWishlist } = useCart();
  const { user, signIn } = useAuth();

  const isProductInWishlist = (productId: string) => {
    return wishlist.some(item => item.id === productId);
  };

  const handleWishlistToggle = async (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
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

  const handleAddToCart = async (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    if (!user) {
      signIn();
      return;
    }
    await addToCart(product);
  };

  return (
    <section id="shop" ref={ref} className="py-32 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="reveal-container">
            <h2 className={`font-serif text-4xl md:text-5xl text-forest mb-3 reveal-text ${isVisible ? 'visible' : ''}`}>
              Seasonal Essentials
            </h2>
            <div className="overflow-hidden">
                <p className={`text-forest/60 font-sans text-lg transition-transform duration-1000 delay-200 ease-quart ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
                    Handpicked favorites for the changing season.
                </p>
            </div>
          </div>
          <button className={`hidden md:flex items-center gap-2 border-b border-forest pb-1 text-sm uppercase tracking-widest hover:text-moss hover:border-moss transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
            View All Products
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <div 
              key={product.id}
              className={`group relative flex flex-col transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`}
              style={{ transitionDelay: `${300 + idx * 200}ms` }}
            >
              {/* Image Container */}
              <div 
                className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6 cursor-pointer"
                style={{ backgroundColor: product.color || '#F5F5F0' }}
                onClick={() => setSelectedProduct(product)}
              >
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-forest shadow-sm">
                    {product.badge}
                  </div>
                )}

                {/* Wishlist Button */}
                <button 
                  onClick={(e) => handleWishlistToggle(e, product)}
                  className="absolute top-4 right-4 z-20 p-2 bg-white/80 backdrop-blur-sm rounded-full text-forest hover:bg-forest hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  <Heart className={`w-4 h-4 ${isProductInWishlist(product.id) ? 'fill-red-500 text-red-500' : ''}`} />
                </button>

                {/* Main Image with Zoom Effect */}
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 ease-quart group-hover:scale-110"
                />

                {/* Quick Add Button / Overlay */}
                <div className="absolute inset-x-4 bottom-4 translate-y-[120%] group-hover:translate-y-0 transition-transform duration-500 ease-quart z-20">
                  <button 
                    className="w-full bg-forest text-white py-3 rounded-xl shadow-lg shadow-forest/20 flex items-center justify-center gap-2 hover:bg-moss transition-colors"
                    onClick={(e) => handleAddToCart(e, product)}
                  >
                    <Plus className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Add to Cart</span>
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-start">
                  <h3 
                    className="font-serif text-xl text-forest group-hover:text-moss transition-colors duration-300 cursor-pointer"
                    onClick={() => setSelectedProduct(product)}
                  >
                    {product.name}
                  </h3>
                  <span className="font-sans font-medium text-forest">${product.price}</span>
                </div>
                
                {/* Rating */}
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
            </div>
          ))}
        </div>
        
        {/* Mobile View All Button */}
        <div className={`mt-12 text-center md:hidden transition-opacity duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <button className="border-b border-forest pb-1 text-sm uppercase tracking-widest">
                View All Products
            </button>
        </div>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-forest/40 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl bg-birch rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 z-30 p-2 bg-white/80 backdrop-blur-sm rounded-full text-forest hover:bg-forest hover:text-white transition-all duration-300"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image Section */}
              <div 
                className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden"
                style={{ backgroundColor: selectedProduct.color || '#F5F5F0' }}
              >
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover mix-blend-multiply"
                />
              </div>

              {/* Details Section */}
              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto no-scrollbar">
                <div className="mb-8">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-moss mb-2 block">
                    {selectedProduct.category}
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl text-forest mb-4">
                    {selectedProduct.name}
                  </h2>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-2xl font-sans font-medium text-forest">${selectedProduct.price}</span>
                    <div className="h-4 w-[1px] bg-stone"></div>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-3.5 h-3.5 ${i < Math.floor(selectedProduct.rating || 0) ? 'fill-forest text-forest' : 'fill-stone text-stone'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-forest/60">{selectedProduct.rating} ({selectedProduct.reviews} reviews)</span>
                    </div>
                  </div>
                  <p className="text-forest/70 leading-relaxed font-sans text-lg">
                    {selectedProduct.description}
                  </p>
                </div>

                <div className="space-y-8 mb-10">
                  {/* Materials */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-forest/40 mb-3">Materials</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.materials.map((material, i) => (
                        <span key={i} className="px-3 py-1 bg-stone/30 rounded-full text-sm text-forest/80">
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Dimensions */}
                  {selectedProduct.dimensions && (
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-forest/40 mb-3">Dimensions</h4>
                      <p className="text-forest/80 font-sans">{selectedProduct.dimensions}</p>
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={(e) => handleAddToCart(e, selectedProduct)}
                    className="flex-1 bg-forest text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-moss transition-all duration-300 shadow-lg shadow-forest/10 flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Add to Cart
                  </button>
                  <button 
                    onClick={(e) => handleWishlistToggle(e, selectedProduct)}
                    className="flex-1 border border-stone text-forest py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-stone/20 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Heart className={`w-4 h-4 ${isProductInWishlist(selectedProduct.id) ? 'fill-red-500 text-red-500' : ''}`} />
                    {isProductInWishlist(selectedProduct.id) ? 'Wishlisted' : 'Wishlist'}
                  </button>
                </div>

                <div className="mt-8 pt-8 border-t border-stone/50">
                  <button className="flex items-center gap-2 text-forest/60 hover:text-forest transition-colors text-sm font-medium">
                    View Full Product Details
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProductShowcase;