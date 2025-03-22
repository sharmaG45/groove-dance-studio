import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaPaperPlane } from "react-icons/fa";
const Footer = () => {

    return <>
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-6">
                {/* Top Section - Links */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-400">
                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-3">Quick Links</h3>
                        <ul>
                            <li className="mb-2"><a href="#">About</a></li>
                            <li className="mb-2"><a href="#">Class</a></li>
                            <li className="mb-2"><a href="#">Pricing</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-3">Services</h3>
                        <ul>
                            <li className="mb-2"><a href="#">Break Dance</a></li>
                            <li className="mb-2"><a href="#">Hip-Hop Dance</a></li>
                            <li className="mb-2"><a href="#">Ballet Dance</a></li>
                            <li><a href="#">Modern Dance</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-3">Support</h3>
                        <ul>
                            <li className="mb-2"><a href="#">Contact</a></li>
                            <li className="mb-2"><a href="#">Support</a></li>
                            <li className="mb-2"><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-3">Contact Info</h3>
                        <p className="flex items-center gap-2 mb-2"><FaMapMarkerAlt /> Main Ashok Nagar Rd, East Ashok Nagar, Lohia Nagar, Patna, Bihar</p>
                        <p className="flex items-center gap-2 mb-2"><FaPhoneAlt /> +91 7979870547 / +91 8969058143</p>
                        <p className="flex items-center gap-2 mb-2"><FaEnvelope /> groovetomove.com</p>
                        <p className="flex items-center gap-2"><FaClock /> Everyday: 9:00 am - 9:00 pm</p>
                    </div>
                </div>

                {/* Separator */}
                <div className="border-t border-gray-700 my-8"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img src="/assets/grooveLogo.png"
                            alt="Groove Dance Studio"
                            className="h-20 md:h-24 w-40 object-contain" />
                    </div>

                    {/* Newsletter */}
                    <div className="mt-6 md:mt-0">
                        <h3 className="text-lg font-semibold text-white mb-2">Stay Informed With Our Newsletter</h3>
                        <div className="flex items-center bg-gray-800 p-2 rounded-full">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="bg-transparent text-gray-300 placeholder-gray-500 flex-1 px-4 py-2 outline-none"
                            />
                            <button className="bg-teal-500 p-3 rounded-full hover:bg-teal-600 transition">
                                <FaPaperPlane className="text-white" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <p className="text-center text-gray-500 text-sm mt-8">
                    Copyright © 2025 Groove to Move. All rights reserved.
                </p>
            </div>
        </footer>
    </>
}

export default Footer;