'use client';
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [dropdown, setDropdown] = useState(null);
    return <>
        <header className="shadow-md text-white py-4 px-6 md:px-12 transition-all duration-700 ease-out bg-black"
            >
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <img src="/assets/grooveLogo.png"
                        alt="Groove Dance Studio"
                        className="h-20 md:h-24 w-40 object-contain" />
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6 text-lg">
                    <ul className="flex space-x-6">
                        <li><a href="/" className="hover:text-blue-500">Home</a></li>
                        <li className="relative group">
                            <a href="/classes" className="hover:text-blue-500">Classes</a>
                            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md w-48">
                                <ul className="p-2 space-y-2">
                                    <li><a href="/classes/ballet" className="block px-4 py-2 hover:bg-gray-100">Ballet</a></li>
                                    <li><a href="/classes/hiphop" className="block px-4 py-2 hover:bg-gray-100">Hip Hop</a></li>
                                    <li><a href="/classes/contemporary" className="block px-4 py-2 hover:bg-gray-100">Contemporary</a></li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="/about" className="hover:text-blue-500">About</a></li>
                        <li><a href="/contact" className="hover:text-blue-500">Contact</a></li>
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button className="text-white focus:outline-none" onClick={() => setShowMenu(!showMenu)}>
                        {showMenu ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {showMenu && (
                <div className="md:hidden bg-gray-900 text-white p-4 mt-2">
                    <ul className="space-y-3 text-center">
                        <li><a href="/" className="block py-2">Home</a></li>
                        <li><a href="/classes" className="block py-2">Classes</a></li>
                        <li><a href="/about" className="block py-2">About</a></li>
                        <li><a href="/contact" className="block py-2">Contact</a></li>
                    </ul>
                </div>
            )}
        </header>

    </>
}

export default Header;