import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FiCheckCircle } from 'react-icons/fi';
import image1 from '../images/cottonvakebag.png';
import image2 from '../images/maizebag.png';

const products = [
    {
        name: 'Maize Mix Cotton Seed Oil Cake',
        description: 'High-quality mix for enhanced cattle nutrition.',
        benefits: [
            'Improves digestion',
            'Boosts immunity',
            'Rich in protein'
        ],
        image: image1,
        rating: 5
    },
    {
        name: 'Maize Powder (Corn Powder)',
        description: 'Finely ground maize powder for optimal feed.',
        benefits: [
            'Energy-rich',
            'Easily digestible',
            'Suitable for all cattle'
        ],
        image: image2,
        rating: 5
    }
];

const Product = () => (
    <section id="product" className="min-h-auto p-8 flex flex-col items-center">
        <h2 className="text-3xl font-bold mt-12 mb-8 text-center">Cattle Feed Products</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-2 w-full max-w-6xl">
            {products.map((product, index) => (
                <div
                    key={index}
                    className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row"
                >
                    {/* Product Image */}
                    <div className="md:w-1/2 h-48 md:h-64">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-contain"
                        />
                    </div>
                    {/* Product Details */}
                    <div className="p-4 flex flex-col justify-between md:w-1/2 text-left">
                        <div>
                            <h3 className="text-xl font-semibold">{product.name}</h3>
                            <p className="mt-2 text-gray-600">{product.description}</p>

                            {/* Ratings */}
                            <div className="flex items-center mt-3">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <FaStar
                                        key={i}
                                        className={`${
                                            i < Math.floor(product.rating)
                                                ? 'text-yellow-400'
                                                : 'text-gray-300'
                                        }`}
                                    />
                                ))}
                                <span className="ml-2 text-gray-600">{product.rating}</span>
                            </div>

                            {/* Benefits */}
                            <ul className="mt-4 space-y-2">
                                {product.benefits.map((benefit, i) => (
                                    <li key={i} className="flex items-center text-gray-700">
                                        <FiCheckCircle className="text-green-500 mr-2" />
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Get Price Button */}
                        <a
                            href={`https://wa.me/919925564433?text=I%20am%20interested%20in%20getting%20the%20price%20for%20${encodeURIComponent(product.name)}.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-4 px-6 py-2 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            Get Price
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default Product;