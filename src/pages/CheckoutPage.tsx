import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, Navigate } from 'react-router-dom';
import { CreditCard, Truck, ShieldCheck, ArrowLeft, ShoppingBag } from 'lucide-react';
import { motion } from 'motion/react';

const CheckoutPage: React.FC = () => {
  const { cart, placeOrder } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [shippingInfo, setShippingInfo] = useState({
    fullName: user?.displayName || '',
    email: user?.email || '',
    address: '',
    city: '',
    zipCode: '',
    country: 'United States'
  });

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 200 ? 0 : 15;
  const total = subtotal + shipping;

  if (!user) return <Navigate to="/" />;
  if (cart.length === 0) return <Navigate to="/cart" />;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const orderId = await placeOrder(shippingInfo);
      navigate(`/order-confirmation/${orderId}`);
    } catch (error) {
      console.error('Checkout error:', error);
      setLoading(false);
    }
  };

  return (
    <div className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <button onClick={() => navigate('/cart')} className="p-2 hover:bg-stone/20 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6 text-forest" />
        </button>
        <h1 className="font-serif text-4xl md:text-5xl text-forest">Checkout</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Shipping Form */}
        <form onSubmit={handleSubmit} className="space-y-12">
          <section>
            <div className="flex items-center gap-3 mb-8">
              <Truck className="w-6 h-6 text-moss" />
              <h2 className="font-serif text-2xl text-forest">Shipping Information</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-widest text-forest/40 mb-2">Full Name</label>
                <input 
                  required
                  type="text" 
                  value={shippingInfo.fullName}
                  onChange={(e) => setShippingInfo({...shippingInfo, fullName: e.target.value})}
                  className="w-full bg-white border border-stone rounded-xl px-4 py-3 focus:outline-none focus:border-moss transition-colors"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-widest text-forest/40 mb-2">Email Address</label>
                <input 
                  required
                  type="email" 
                  value={shippingInfo.email}
                  onChange={(e) => setShippingInfo({...shippingInfo, email: e.target.value})}
                  className="w-full bg-white border border-stone rounded-xl px-4 py-3 focus:outline-none focus:border-moss transition-colors"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-widest text-forest/40 mb-2">Street Address</label>
                <input 
                  required
                  type="text" 
                  value={shippingInfo.address}
                  onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})}
                  className="w-full bg-white border border-stone rounded-xl px-4 py-3 focus:outline-none focus:border-moss transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-forest/40 mb-2">City</label>
                <input 
                  required
                  type="text" 
                  value={shippingInfo.city}
                  onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})}
                  className="w-full bg-white border border-stone rounded-xl px-4 py-3 focus:outline-none focus:border-moss transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-forest/40 mb-2">ZIP / Postal Code</label>
                <input 
                  required
                  type="text" 
                  value={shippingInfo.zipCode}
                  onChange={(e) => setShippingInfo({...shippingInfo, zipCode: e.target.value})}
                  className="w-full bg-white border border-stone rounded-xl px-4 py-3 focus:outline-none focus:border-moss transition-colors"
                />
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-8">
              <CreditCard className="w-6 h-6 text-moss" />
              <h2 className="font-serif text-2xl text-forest">Payment Method</h2>
            </div>
            <div className="bg-stone/20 rounded-2xl p-6 border border-stone/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-8 bg-forest rounded-md flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold">VISA</span>
                </div>
                <p className="text-sm font-sans text-forest/60">Payment is simulated for this demo.</p>
              </div>
              <div className="space-y-4">
                <input 
                  disabled
                  type="text" 
                  placeholder="Card Number"
                  value="**** **** **** 4242"
                  className="w-full bg-white/50 border border-stone rounded-xl px-4 py-3 text-forest/40 cursor-not-allowed"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    disabled
                    type="text" 
                    placeholder="MM/YY"
                    value="12/28"
                    className="w-full bg-white/50 border border-stone rounded-xl px-4 py-3 text-forest/40 cursor-not-allowed"
                  />
                  <input 
                    disabled
                    type="text" 
                    placeholder="CVC"
                    value="***"
                    className="w-full bg-white/50 border border-stone rounded-xl px-4 py-3 text-forest/40 cursor-not-allowed"
                  />
                </div>
              </div>
            </div>
          </section>

          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-forest text-white py-5 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-moss transition-all duration-300 shadow-xl shadow-forest/20 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="animate-pulse">Processing...</span>
            ) : (
              <>
                <ShieldCheck className="w-5 h-5" />
                Complete Purchase — ${total}
              </>
            )}
          </button>
        </form>

        {/* Order Summary */}
        <div className="hidden lg:block">
          <div className="bg-stone/10 rounded-3xl p-10 sticky top-32 border border-stone/30">
            <h2 className="font-serif text-2xl text-forest mb-10">Order Summary</h2>
            <div className="space-y-6 mb-10 max-h-[40vh] overflow-y-auto no-scrollbar pr-4">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-stone/20 flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-serif text-forest">{item.name}</h4>
                    <p className="text-xs text-forest/40">Qty: {item.quantity}</p>
                  </div>
                  <span className="text-sm font-sans font-bold">${item.price * item.quantity}</span>
                </div>
              ))}
            </div>
            
            <div className="space-y-4 pt-8 border-t border-stone/50">
              <div className="flex justify-between text-forest/60 text-sm">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between text-forest/60 text-sm">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
              </div>
              <div className="pt-4 flex justify-between text-2xl font-bold text-forest">
                <span>Total</span>
                <span>${total}</span>
              </div>
            </div>

            <div className="mt-10 p-4 bg-moss/5 rounded-xl flex gap-4 items-start">
              <ShieldCheck className="w-5 h-5 text-moss flex-shrink-0" />
              <p className="text-xs text-forest/60 leading-relaxed">
                Your payment is secure. We use industry-standard encryption to protect your data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
