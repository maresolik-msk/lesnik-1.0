import React from 'react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const { user, signIn } = useAuth();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 200 ? 0 : 15;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="pt-40 pb-20 px-6 min-h-[80vh] flex flex-col items-center justify-center text-center">
        <div className="w-20 h-20 bg-stone/30 rounded-full flex items-center justify-center mb-8">
          <ShoppingBag className="w-10 h-10 text-forest/20" />
        </div>
        <h1 className="font-serif text-4xl text-forest mb-4">Your cart is empty</h1>
        <p className="text-forest/60 mb-10 max-w-md">Looks like you haven't added any essentials to your cart yet. Explore our collections to find something beautiful for your home.</p>
        <Link to="/" className="bg-forest text-white px-10 py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-moss transition-all duration-300">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
      <h1 className="font-serif text-4xl md:text-5xl text-forest mb-12">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-8">
          {cart.map((item) => (
            <motion.div 
              layout
              key={item.id} 
              className="flex flex-col sm:flex-row gap-6 pb-8 border-b border-stone/50"
            >
              <div className="w-full sm:w-32 aspect-square rounded-xl overflow-hidden bg-stone/20">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply" />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-xl text-forest mb-1">{item.name}</h3>
                    <p className="text-sm text-forest/40 uppercase tracking-widest">{item.category}</p>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-forest/20 hover:text-red-500 transition-colors p-2"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="flex justify-between items-end mt-4">
                  <div className="flex items-center border border-stone rounded-lg overflow-hidden">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-2 hover:bg-stone/20 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-10 text-center font-sans font-medium">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 hover:bg-stone/20 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="font-sans font-bold text-lg">${item.price * item.quantity}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="bg-stone/20 rounded-3xl p-8 sticky top-32">
            <h2 className="font-serif text-2xl text-forest mb-8">Order Summary</h2>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-forest/60">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between text-forest/60">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
              </div>
              <div className="pt-4 border-t border-stone flex justify-between text-xl font-bold text-forest">
                <span>Total</span>
                <span>${total}</span>
              </div>
            </div>
            
            {user ? (
              <Link 
                to="/checkout"
                className="w-full bg-forest text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-moss transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-forest/10"
              >
                Proceed to Checkout
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : (
              <button 
                onClick={() => signIn()}
                className="w-full bg-moss text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-forest transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-moss/10"
              >
                Sign In to Checkout
                <LogIn className="w-4 h-4" />
              </button>
            )}
            
            <p className="mt-6 text-center text-xs text-forest/40 leading-relaxed">
              Shipping and taxes calculated at checkout. Free shipping on orders over $200.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
