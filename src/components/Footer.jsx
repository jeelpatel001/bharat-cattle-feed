import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'; // Importing social media icons

const Footer = () => (
    <footer id="footer" className="bg-green-600 text-white p-8">
        <div className="container mx-auto text-center">
            <h3 className="text-xl font-bold mb-4">Stay Connected</h3>
            <div className="flex justify-center space-x-4 mb-4">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-white hover:text-gray-300 transition duration-200" size={24} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-white hover:text-gray-300 transition duration-200" size={24} />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="text-white hover:text-gray-300 transition duration-200" size={24} />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaYoutube className="text-white hover:text-gray-300 transition duration-200" size={24} />
                </a>
            </div>
            <p className="text-sm mb-2">Bharat Cattle Feed &copy; {new Date().getFullYear()}. All Rights Reserved.</p>
            <p className="text-sm">Contact us at: <span className="font-semibold">9925564433</span></p>
        </div>
    </footer>
);

export default Footer;