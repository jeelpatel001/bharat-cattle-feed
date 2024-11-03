import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const ProductDetails = () => {
    const maizePowderBenefits = [
        'Energy: Corn is a high-energy feed that provides carbohydrates for cattle to gain weight quickl',
        'Protein: Corn is a good source of protein, especially when fed in large volumes.',
        'Fiber: Maize fiber is a good source of insoluble fiber, which can help with digestion and weight management. ',
        'Nutrients: Corn contains vitamins and minerals that are important for animal nutrition. ',
        'Sustainable: Using maize fiber in cattle feed is a sustainable practice. ',
        'Palatability: Cattle generally like the taste of maize fiber, so it can be easily integrated into their diet.',
    ];

    const cottonSeedBenefits = [
        'Rich in protein and essential fatty acids.',
        'Improves overall health and growth rate in cattle.',
        'Promotes better digestion and nutrient absorption.',
    ];

    return (
        <section className="min-h-screen p-20 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-8">Product Benefits</h2>

            {/* Maize Powder Section */}
            <div className="flex flex-col lg:flex-row items-center mb-12 p-4 bg-white rounded-lg shadow-md">
                <div className=" p-4">
                    <h3 className="text-2xl font-semibold text-green-800 mb-2">Maize Powder (Corn Powder)</h3>
                    <p className="text-gray-700 mb-4">
                        Maize co-feed is a highly digestible feed, which means that cattle can absorb its nutrients easily. This helps to improve their growth rate, milk production, and overall health. Maize co-feed is also a good source of energy, which can help to prevent weight loss and improve feed efficiency.
                    </p>
                    <h4 className="text-lg font-bold text-green-600 mb-2">Benefits:</h4>
                    <ul className="list-disc list-inside space-y-2">
                        {maizePowderBenefits.map((benefit, index) => (
                            <li key={index} className="flex items-center text-gray-700">
                                <FiCheckCircle className="text-green-500 mr-2" />
                                {benefit}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Cotton Seed Oil Cake Section */}
            <div className="flex flex-col lg:flex-row items-center p-4 bg-white rounded-lg shadow-md">

                <div className=" p-4">
                    <h3 className="text-2xl font-semibold text-green-800 mb-2">Maize Mix Cotton Seed Oil Cake</h3>
                    <p className="text-gray-700 mb-4">
                        A high-quality mix designed to provide enhanced nutrition and improve the health of your cattle.
                    </p>
                    <h4 className="text-lg font-bold text-green-600 mb-2">Benefits:</h4>
                    <ul className="list-disc list-inside space-y-2">
                        {cottonSeedBenefits.map((benefit, index) => (
                            <li key={index} className="flex items-center text-gray-700">
                                <FiCheckCircle className="text-green-500 mr-2" />
                                {benefit}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;