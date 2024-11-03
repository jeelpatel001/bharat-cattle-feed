import React from 'react';
import contactImage from '../images/bharatcattlefeed.jpeg';

const ContactUs = () => {

    return (
        <section id='contact-us' className="bg-white min-h-auto p-8 flex flex-col items-center">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md w-full max-w-6xl">
                <h2 className="text-3xl font-bold mt-12 mb-8 text-center text-gray-900">Contact Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
                    Have questions about our products or need assistance? Interested in knowing more about Bharat Cattle Feed? Let us know.
                </p>
                <form action="#" className="space-y-8">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                        <input
                            type="email"
                            id="email"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                            placeholder="name@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="mobile" className="block mb-2 text-sm font-medium text-gray-900">Your mobile number</label>
                        <input
                            type="tel"
                            id="mobile"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                            placeholder="123-456-7890"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Let us know how we can help you"
                            required
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                        <textarea
                            id="message"
                            rows="6"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Leave a comment..."
                        ></textarea>
                    </div>
                    <div className="flex space-x-4">
                        <button
                            type="submit"
                            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;