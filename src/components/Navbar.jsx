import React, { useState, useEffect } from 'react';
import { FiMenu, FiArrowUp } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showGoToTop, setShowGoToTop] = useState(false);

    const scrollToSection = (section) => {
        document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false); // Close mobile menu after navigation
    };

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setShowGoToTop(true);
        } else {
            setShowGoToTop(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav className="backdrop-blur-md bg-white/30 p-4 text-green-800 flex justify-between items-center shadow-lg rounded-lg fixed top-0 w-full z-10">
                <div className="text-2xl font-bold">Bharat Cattle Feed</div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    <button onClick={() => scrollToSection('hero')} className="hover:underline">
                        Home
                    </button>
                    <button onClick={() => scrollToSection('product')} className="hover:underline">
                        Products
                    </button>
                    <button onClick={() => scrollToSection('contact-us')} className="hover:underline">
                        Contact
                    </button>
                </div>

                {/* Hamburger Icon for Mobile */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                        <FiMenu size={24} />
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-16 left-0 w-full bg-white backdrop-blur-md text-green-800 flex flex-col items-center md:hidden space-y-4 py-4 shadow-lg rounded-lg"
                    >
                        <button onClick={() => scrollToSection('hero')} className="hover:underline">
                            Home
                        </button>
                        <button onClick={() => scrollToSection('product')} className="hover:underline">
                            Products
                        </button>
                        <button onClick={() => scrollToSection('footer')} className="hover:underline">
                            Contact
                        </button>
                    </motion.div>
                )}
            </nav>

            {/* Go to Top Button */}
            {showGoToTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-4 right-4 p-3 rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300"
                    aria-label="Go to top"
                >
                    <FiArrowUp size={24} />
                </button>
            )}
        </>
    );
};

export default Navbar;