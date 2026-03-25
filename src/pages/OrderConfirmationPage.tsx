import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, Package, ArrowRight, ShoppingBag } from 'lucide-react';
import { motion } from 'motion/react';

const OrderConfirmationPage: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();

  return (
    <div className="pt-40 pb-20 px-6 min-h-[90vh] flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        className="w-24 h-24 bg-moss/10 rounded-full flex items-center justify-center mb-10"
      >
        <CheckCircle2 className="w-12 h-12 text-moss" />
      </motion.div>
      
      <h1 className="font-serif text-4xl md:text-6xl text-forest mb-6">Thank you for your order</h1>
      <p className="text-forest/60 text-lg mb-12 leading-relaxed">
        Your order <span className="font-bold text-forest">#{orderId}</span> has been placed successfully. 
        We've sent a confirmation email with all the details to your inbox.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-16">
        <div className="bg-stone/20 p-8 rounded-3xl text-left border border-stone/50">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-6">
            <Package className="w-5 h-5 text-moss" />
          </div>
          <h3 className="font-serif text-xl text-forest mb-2">Order Status</h3>
          <p className="text-sm text-forest/60 leading-relaxed">
            Your order is currently being processed. You can track its progress in your profile.
          </p>
        </div>
        <div className="bg-stone/20 p-8 rounded-3xl text-left border border-stone/50">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-6">
            <ShoppingBag className="w-5 h-5 text-moss" />
          </div>
          <h3 className="font-serif text-xl text-forest mb-2">Need Help?</h3>
          <p className="text-sm text-forest/60 leading-relaxed">
            If you have any questions, please contact our support team at support@lesnik.com
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-6">
        <Link 
          to="/profile" 
          className="bg-forest text-white px-10 py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-moss transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-forest/10"
        >
          View My Orders
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link 
          to="/" 
          className="border border-stone text-forest px-10 py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-stone/20 transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
