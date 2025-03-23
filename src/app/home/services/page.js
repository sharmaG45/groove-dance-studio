'use client';

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const services = [
    { name: "Choreography", description: "Musicals Concerts, Theatrical Acts, Dance Reality Shows, Award Shows, Serials, Advertisements.", icon: "🎵" },
    { name: "Music Videos", description: "Choreography for Music videos with Celebrities, Dance Music Video Collaboration.", icon: "🎥" },
    { name: "Wedding", description: "Choreography and Training for Sangeet & Wedding.", icon: "🎁" },
    { name: "Corporate Events", description: "Performances for National & International Shows and Corporate Events.", icon: "💼" },
    { name: "Award Functions", description: "Performances in renowned award ceremonies at National & International Platforms.", icon: "🏆" },
    { name: "Celebrity Judge", description: "Vishal Vishwakarma & Team as Celebrity TV Dance Reality Shows/ Schools / Dance Events.", icon: "🎭" }
];

const Services = () => {
    const [showMenu, setShowMenu] = useState(false);

    return <>
        <section className="relative w-full min-h-screen overflow-hidden flex flex-col items-center">
            {/* Background */}
            <div className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out" style={{ backgroundImage: "url('/assets/images/pic3.jpg')" }}></div>
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Header */}
            <header className="absolute top-0 left-0 w-full text-white py-4 px-6 md:px-12 z-20">
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
                        <button className="text-white" onClick={() => setShowMenu(!showMenu)}>
                            {showMenu ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>
                {showMenu && (
                    <div className="md:hidden bg-gray-900 text-white p-4 mt-2">
                        <ul className="space-y-3 text-center">
                            <li><a href="/" className="block py-2">Home</a></li>
                            <li><a href="/homw/about-us" className="block py-2">About Us</a></li>
                            <li><a href="/home/studio" className="block py-2">Studio</a></li>
                            <li><a href="/home/services" className="block py-2">Services</a></li>
                            <li><a href="/home/contact-us" className="block py-2">Contact Us</a></li>
                        </ul>
                    </div>
                )}
            </header>

            {/* Services Section */}
            <div className="relative py-40 text-center w-full">
                <div className="relative text-white text-4xl font-bold mb-10 z-10">
                    <h2 className="uppercase tracking-wide">Our Services</h2>
                </div>

                <div className="relative container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 z-10">
                    {services.map((service, index) => (
                        <div key={index} className="bg-gray-800 bg-opacity-90 text-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-all ease-in-out duration-300">
                            <div className="text-5xl text-yellow-500">{service.icon}</div>
                            <h3 className="text-xl font-semibold mt-4">{service.name}</h3>
                            <p className="text-sm text-gray-300 mt-2">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
}

export default Services;