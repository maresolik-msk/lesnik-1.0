import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { AuthProvider } from './src/contexts/AuthContext';
import { CartProvider } from './src/contexts/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ThreeRule from './components/ThreeRule';
import FeaturedCollections from './components/FeaturedCollections';
import ProductShowcase from './components/ProductShowcase';
import Bestsellers from './components/Bestsellers';
import BrandStory from './components/BrandStory';
import Sustainability from './components/Sustainability';
import ForestGuardian from './components/ForestGuardian';
import Journal from './components/Journal';
import Footer from './components/Footer';
import CartPage from './src/pages/CartPage';
import SearchPage from './src/pages/SearchPage';
import WishlistPage from './src/pages/WishlistPage';
import ProfilePage from './src/pages/ProfilePage';
import CheckoutPage from './src/pages/CheckoutPage';
import OrderConfirmationPage from './src/pages/OrderConfirmationPage';
import ShopPage from './src/pages/ShopPage';
import CollectionsPage from './src/pages/CollectionsPage';
import OurStoryPage from './src/pages/OurStoryPage';
import JournalPage from './src/pages/JournalPage';
import InfoPage from './src/pages/InfoPage';
import ContactPage from './src/pages/ContactPage';

// Placeholder pages for now
const HomePage = () => (
  <>
    <Hero />
    <ThreeRule />
    <FeaturedCollections />
    <ProductShowcase />
    <Bestsellers />
    <BrandStory />
    <Sustainability />
    <ForestGuardian />
    <Journal />
    <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
       <img 
         src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop" 
         alt="Calm Living" 
         className="absolute inset-0 w-full h-full object-cover"
       />
       <div className="absolute inset-0 bg-stone/40 backdrop-blur-[1px]"></div>
       <div className="relative z-10 text-center px-4">
         <h2 className="font-serif text-4xl md:text-6xl text-forest mb-8">Bring sustainability home, beautifully.</h2>
         <button className="bg-white text-forest hover:bg-forest hover:text-white px-10 py-4 text-sm tracking-widest uppercase transition-all duration-300">
           Shop Essentials
         </button>
       </div>
    </section>
  </>
);

const App: React.FC = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="bg-birch min-h-screen overflow-x-hidden selection:bg-moss selection:text-white">
            <Toaster position="bottom-right" richColors />
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/collections" element={<CollectionsPage />} />
                <Route path="/our-story" element={<OurStoryPage />} />
                <Route path="/journal" element={<JournalPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/wishlist" element={<WishlistPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/order-confirmation/:orderId" element={<OrderConfirmationPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/privacy" element={<InfoPage title="Privacy Policy" />} />
                <Route path="/terms" element={<InfoPage title="Terms of Service" />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;