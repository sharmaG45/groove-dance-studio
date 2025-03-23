'use client';

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const ServicesPage = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        mobileNumber: "",
        email: "",
        message: "",
        category: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };


    const slides = ["/assets/images/pic1.jpg"];

    return (
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
                            <li className="relative group">
                                <a href="/home/about-us" className="hover:text-yellow-500">About Us</a>
                            </li>
                            <li className="relative group">
                                <a href="/home/studio" className="hover:text-yellow-500">Groove To Move Studio</a>
                                <div className="absolute left-0 mt-2 hidden group-hover:block bg-black shadow-lg rounded-md w-48">
                                    <ul className="p-2 space-y-2">
                                        <li><a href="#" className="block px-4 py-2 hover:bg-gray-700">Classes</a></li>
                                        <li><a href="#" className="block px-4 py-2 hover:bg-gray-700">Gallery</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="relative group">
                                <a href="/home/services" className="hover:text-yellow-500">Services</a>
                            </li>
                            <li><a href="/home/contact-us" className="hover:text-yellow-500">Contact Us</a></li>
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
                            <li><a href="/home/about-us" className="block py-2">About Us</a></li>
                            <li><a href="/home/studio" className="block py-2">Studio</a></li>
                            <li><a href="/home/services" className="block py-2">Services</a></li>
                            <li><a href="/home/contact-us" className="block py-2">Contact Us</a></li>
                        </ul>
                    </div>
                )}
            </header>

            {/* Booking Form */}
            <div className="relative w-full max-w-lg bg-white p-6 rounded-lg shadow-lg mt-20 z-10">
                <h2 className="text-2xl font-bold text-center text-gray-800">Book Our Services</h2>
                <form className="mt-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" name="firstName" placeholder="First Name" className="p-3 border rounded-md w-full" onChange={handleChange} required />
                        <input type="text" name="middleName" placeholder="Middle Name (Optional)" className="p-3 border rounded-md w-full" onChange={handleChange} />
                        <input type="text" name="lastName" placeholder="Last Name" className="p-3 border rounded-md w-full" onChange={handleChange} required />
                        <input type="text" name="mobileNumber" placeholder="Mobile Number" className="p-3 border rounded-md w-full" onChange={handleChange} required />
                    </div>
                    <input type="email" name="email" placeholder="Email ID" className="p-3 border rounded-md w-full mt-4" onChange={handleChange} required />
                    <textarea name="message" placeholder="Your Message" className="p-3 border rounded-md w-full mt-4" rows="3" onChange={handleChange}></textarea>
                    <select name="category" className="p-3 border rounded-md w-full mt-4" onChange={handleChange} required>
                        <option value="">Choose Our Services</option>
                        <option value="dance">Dance Classes</option>
                        <option value="choreography">Choreography</option>
                        <option value="fitness">Fitness Training</option>
                        <option value="events">Event Performances</option>
                        <option value="space">Space Creator</option>
                    </select>
                    <button type="submit" className="mt-6 w-full bg-yellow-500 text-white py-3 rounded-md hover:bg-yellow-600">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default ServicesPage;
