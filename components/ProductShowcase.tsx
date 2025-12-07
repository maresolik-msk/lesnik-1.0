import React, { useState } from 'react';
import { ShoppingBag, Star, Plus } from 'lucide-react';
import { useFadeIn } from '../hooks/useFadeIn';

interface ProductItem {
  id: string;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  color?: string;
}

const products: ProductItem[] = [
  {
    id: 'p1',
    name: 'Forest Floor Lamp',
    price: 189,
    rating: 4.9,
    reviews: 124,
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7bab58d?q=80&w=1000&auto=format&fit=crop',
    badge: 'New Arrival',
    color: '#EAE8E4'
  },
  {
    id: 'p2',
    name: 'Clay Stone Vase',
    price: 65,
    rating: 4.8,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=1000&auto=format&fit=crop',
    color: '#F0F2EF'
  },
  {
    id: 'p3',
    name: 'Linen Lounge Chair',
    price: 450,
    rating: 5.0,
    reviews: 42,
    image: 'https://images.unsplash.com/photo-1596162955779-9c8f7f43f88c?q=80&w=1000&auto=format&fit=crop',
    badge: 'Best Seller',
    color: '#EBEBEB'
  },
  {
    id: 'p4',
    name: 'Botanical Diffuser',
    price: 85,
    rating: 4.7,
    reviews: 215,
    image: 'https://images.unsplash.com/photo-1602928321679-560bb453f190?q=80&w=1000&auto=format&fit=crop',
    color: '#F5F5F0'
  }
];

const ProductShowcase: React.FC = () => {
  const { ref, isVisible } = useFadeIn(0.1);

  return (
    <section ref={ref} className="py-32 bg-white relative z-10">
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
              className={`group relative flex flex-col transition-all duration-1000 ease-quart ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}
              style={{ transitionDelay: `${200 + idx * 100}ms` }}
            >
              {/* Image Container */}
              <div 
                className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6 cursor-pointer"
                style={{ backgroundColor: product.color || '#F5F5F0' }}
              >
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-forest shadow-sm">
                    {product.badge}
                  </div>
                )}

                {/* Main Image with Zoom Effect */}
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 ease-quart group-hover:scale-110"
                />

                {/* Quick Add Button / Overlay */}
                <div className="absolute inset-x-4 bottom-4 translate-y-[120%] group-hover:translate-y-0 transition-transform duration-500 ease-quart z-20">
                  <button className="w-full bg-forest text-white py-3 rounded-xl shadow-lg shadow-forest/20 flex items-center justify-center gap-2 hover:bg-moss transition-colors">
                    <Plus className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Add to Cart</span>
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-serif text-xl text-forest group-hover:text-moss transition-colors duration-300 cursor-pointer">
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
                        className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-forest text-forest' : 'fill-stone text-stone'}`} 
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
    </section>
  );
};

export default ProductShowcase;