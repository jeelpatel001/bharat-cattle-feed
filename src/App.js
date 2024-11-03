import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Product from './components/Product';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Product />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;