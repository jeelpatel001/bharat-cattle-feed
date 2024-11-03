import React, { useState, useEffect } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Hero = () => {
  const [sparkles, setSparkles] = useState([]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const newSparkle = {
      id: Date.now(),
      x: clientX,
      y: clientY,
    };

    setSparkles((prev) => [...prev, newSparkle]);

    setTimeout(() => {
      setSparkles((prev) => prev.filter((sparkle) => sparkle.id !== newSparkle.id));
    }, 500);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const openWhatsApp = () => {
    const phoneNumber = process.env.REACT_APP_WHATSAPP_NUMBER;
    const message = 'Hello, I would like to know the price of your cattle feed products.';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden ">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          initial={{ opacity: 1, scale: 3 }}
          animate={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute w-2 h-2 bg-yellow-400 rounded-full pointer-events-none"
          style={{ left: sparkle.x, top: sparkle.y }}
        />
      ))}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="bubble bg-blue-300 rounded-full animate-pulse absolute" style={{ width: '200px', height: '200px', top: '10%', left: '10%' }}></div>
        <div className="bubble bg-green-300 rounded-full animate-pulse absolute" style={{ width: '80px', height: '80px', top: '40%', left: '50%' }}></div>
        <div className="bubble bg-pink-300 rounded-full animate-pulse absolute" style={{ width: '120px', height: '120px', bottom: '20%', right: '20%' }}></div>
      </div>
      <div className="text-center relative z-10">
        <h1 className="text-5xl font-bold text-green-800 mb-4 md:text-9xl">Bharat Cattle Feed</h1>
        <h6 className="text-2xl text-gray-700 mb-8">Providing quality cattle feed products to enhance your livestock's nutrition</h6>
        <div className="flex justify-center">
          <button
            onClick={openWhatsApp}
            className="bg-green-500 text-white px-6 py-3 rounded-full flex items-center justify-center space-x-2 hover:bg-green-700 transition-transform transform hover:scale-105"
          >
            <span>Get Price</span>
            <FiArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;