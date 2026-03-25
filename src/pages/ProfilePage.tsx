import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../../firebase';
import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore';
import { Package, Calendar, MapPin, ChevronRight, ShoppingBag, LogOut, User as UserIcon } from 'lucide-react';
import { Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const ProfilePage: React.FC = () => {
  const { user, logOut } = useAuth();
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const q = query(
      collection(db, 'orders'),
      where('userId', '==', user.uid),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const ordersData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setOrders(ordersData);
      setLoading(false);
    }, (error) => {
      console.error('Error fetching orders:', error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  if (!user) return <Navigate to="/" />;

  return (
    <div className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto min-h-[90vh]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-stone shadow-xl">
            <img src={user.photoURL || ''} alt={user.displayName || ''} className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="font-serif text-4xl text-forest mb-2">{user.displayName}</h1>
            <p className="text-forest/60 font-sans">{user.email}</p>
          </div>
        </div>
        <button 
          onClick={logOut}
          className="flex items-center gap-2 border border-stone text-forest px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-stone/20 transition-all duration-300"
        >
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-stone/10 rounded-3xl p-8 border border-stone/30">
            <h3 className="font-serif text-xl text-forest mb-6">Account Settings</h3>
            <nav className="space-y-4">
              <button className="w-full flex items-center justify-between p-4 bg-white rounded-2xl text-forest shadow-sm">
                <div className="flex items-center gap-3">
                  <UserIcon className="w-5 h-5 text-moss" />
                  <span className="font-medium">Personal Information</span>
                </div>
                <ChevronRight className="w-4 h-4 text-forest/20" />
              </button>
              <button className="w-full flex items-center justify-between p-4 hover:bg-white transition-all rounded-2xl text-forest/60">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5" />
                  <span className="font-medium">Shipping Addresses</span>
                </div>
                <ChevronRight className="w-4 h-4 text-forest/20" />
              </button>
            </nav>
          </div>
        </div>

        {/* Orders List */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-8">
            <Package className="w-6 h-6 text-moss" />
            <h2 className="font-serif text-2xl text-forest">Order History</h2>
          </div>

          {loading ? (
            <div className="space-y-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-40 bg-stone/10 rounded-3xl animate-pulse" />
              ))}
            </div>
          ) : orders.length > 0 ? (
            <div className="space-y-6">
              {orders.map((order) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={order.id}
                  className="bg-white rounded-3xl p-8 border border-stone shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-6 border-b border-stone/50">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-forest/40 mb-1">Order Number</p>
                      <p className="font-sans font-medium text-forest">#{order.id}</p>
                    </div>
                    <div className="flex items-center gap-8">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-forest/40 mb-1">Date</p>
                        <div className="flex items-center gap-2 text-forest/80">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{order.createdAt?.toDate().toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-forest/40 mb-1">Total</p>
                        <p className="font-sans font-bold text-forest text-lg">${order.total}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-8">
                    {order.items.map((item: any, i: number) => (
                      <div key={i} className="w-16 h-16 rounded-xl overflow-hidden bg-stone/20 border border-stone/50 flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply" />
                      </div>
                    ))}
                    {order.items.length > 4 && (
                      <div className="w-16 h-16 rounded-xl bg-stone/10 flex items-center justify-center text-forest/40 text-sm font-bold">
                        +{order.items.length - 4}
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-moss animate-pulse"></div>
                      <span className="text-sm font-medium text-moss uppercase tracking-widest">Processing</span>
                    </div>
                    <button className="text-forest/60 hover:text-forest transition-colors text-sm font-bold uppercase tracking-widest">
                      View Details
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="bg-stone/10 rounded-3xl p-16 text-center border border-stone/30">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="w-6 h-6 text-forest/20" />
              </div>
              <h3 className="font-serif text-xl text-forest mb-2">No orders yet</h3>
              <p className="text-forest/60 mb-8 max-w-xs mx-auto">
                When you make a purchase, your order details will appear here.
              </p>
              <Link 
                to="/search" 
                className="inline-block bg-forest text-white px-10 py-3 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-moss transition-all duration-300 shadow-lg shadow-forest/10"
              >
                Start Shopping
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
