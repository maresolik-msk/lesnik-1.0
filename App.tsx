import './index.css'
import React from 'react';
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

const App = () => {
  return (
    <div className="bg-birch min-h-screen overflow-x-hidden selection:bg-moss selection:text-white">
      <Header />
      <main>
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
            <h2 className="font-serif text-4xl md:text-6xl text-forest mb-8">
              Bring sustainability home, beautifully.
            </h2>
            <button className="bg-white text-forest hover:bg-forest hover:text-white px-10 py-4 text-sm tracking-widest uppercase transition-all duration-300">
              Shop Essentials
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
