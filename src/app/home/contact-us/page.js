'use client';

import { useState } from "react";
import { FiMenu, FiX, FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";
const contact = () => {

    const [showMenu, setShowMenu] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted successfully!");
    };

    const slides = ["/assets/images/pic1.jpg"];

    return <>

        <section className="relative w-full min-h-screen overflow-hidden flex flex-col items-center">
            {/* Background Container */}
            <div className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out" style={{ backgroundImage: `url(${slides})` }}></div>
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Header */}
            <header className="absolute top-0 left-0 w-full text-white py-4 px-6 md:px-12 z-20 bg-opacity-50">
                <div className="container mx-auto flex justify-between items-center">
                    <img src="/assets/grooveLog-2.png" alt="Groove Dance Studio" className="h-16 md:h-20 w-32 md:w-40 object-contain" />
                    <nav className="hidden md:flex space-x-6 text-lg">
                        <ul className="flex space-x-6">
                            <li><a href="/" className="hover:text-yellow-500">Home</a></li>
                            <li><a href="/home/about-us" className="hover:text-yellow-500">About Us</a></li>
                            <li><a href="/studio" className="hover:text-yellow-500">Studio</a></li>
                            <li><a href="/book" className="hover:text-yellow-500">Services</a></li>
                            <li><a href="/contact" className="hover:text-yellow-500">Contact Us</a></li>
                        </ul>
                    </nav>
                    <div className="md:hidden">
                        <button className="text-white focus:outline-none" onClick={() => setShowMenu(!showMenu)}>
                            {showMenu ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>
                {showMenu && (
                    <div className="md:hidden bg-gray-900 text-white p-4 mt-2">
                        <ul className="space-y-3 text-center">
                            <li><a href="/" className="block py-2">Home</a></li>
                            <li><a href="/about" className="block py-2">About Us</a></li>
                            <li><a href="/studio" className="block py-2">Studio</a></li>
                            <li><a href="/book" className="block py-2">Services</a></li>
                            <li><a href="/contact" className="block py-2">Contact Us</a></li>
                        </ul>
                    </div>
                )}
            </header>

            {/* Contact Form Section */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen w-full px-4 sm:px-8 md:px-12 lg:px-24">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Contact Us</h2>
                <p className="text-gray-300 mt-2 text-sm sm:text-base">We'd love to hear from you!</p>
                <form className="mt-6 w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Your Name" className="w-full p-3 rounded-md bg-gray-900 text-white mb-4" onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Your Email" className="w-full p-3 rounded-md bg-gray-900 text-white mb-4" onChange={handleChange} required />
                    <textarea name="message" placeholder="Your Message" className="w-full p-3 rounded-md bg-gray-900 text-white mb-4" rows="4" onChange={handleChange} required></textarea>
                    <button type="submit" className="w-full bg-red-600 text-white py-2 rounded-md">Send Message</button>
                </form>
            </div>

            {/* Social Media Section */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-[40vh] w-full px-4 sm:px-8 md:px-12 lg:px-24">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Follow Us</h2>
                <p className="text-gray-300 mt-2 text-sm sm:text-base">Stay connected with us on social media</p>
                <div className="relative z-10 flex flex-col items-center justify-center text-center w-full px-4 py-8">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Follow Us</h2>
                    <div className="flex space-x-6 mt-4">
                        <a href="#" className="text-white text-2xl hover:text-blue-500"><FiFacebook /></a>
                        <a href="#" className="text-white text-2xl hover:text-pink-500"><FiInstagram /></a>
                        <a href="#" className="text-white text-2xl hover:text-blue-400"><FiTwitter /></a>
                        <a href="#" className="text-white text-2xl hover:text-red-600"><FiYoutube /></a>
                    </div>
                </div>
            </div>
        </section>
    </>

}

export default contact;