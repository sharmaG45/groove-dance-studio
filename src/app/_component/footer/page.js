import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaPaperPlane, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
const Footer = () => {

    return <>
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-6">
                {/* Top Section - Links */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-400">
                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-3">Quick Links</h3>
                        <ul>
                            <li className="mb-2"><a href="/home/about-us">About</a></li>
                            <li className="mb-2"><a href="/home/services">Services</a></li>
                            <li className="mb-2"><a href="#">Pricing</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-3">Support</h3>
                        <ul>
                            <li className="mb-2"><a href="/home/contact-us">Contact</a></li>
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
                        <p className="flex items-center gap-2 mb-2"><FaEnvelope /> groovetomove@gmail.com</p>
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

                {/* Social Media */}
                <div className="flex justify-center space-x-4 mt-6">
                    <a href="#" className="text-gray-400 hover:text-white transition"><FaFacebookF size={20} /></a>
                    <a href="#" className="text-gray-400 hover:text-white transition"><FaTwitter size={20} /></a>
                    <a href="#" className="text-gray-400 hover:text-white transition"><FaInstagram size={20} /></a>
                    <a href="#" className="text-gray-400 hover:text-white transition"><FaLinkedinIn size={20} /></a>
                    <a href="#" className="text-gray-400 hover:text-white transition"><FaYoutube size={20} /></a>
                </div>

                {/* Map Section */}
                <div className="mt-8">
                    <iframe
                        className="w-full h-64 rounded-lg"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8793266072024!2d85.150672!3d25.5886685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59897076a30f%3A0x812bc2d55ecbaeb2!2sGroove%20To%20Move%20Art%20Studio!5e0!3m2!1sen!2sin!4v1711212325678!5m2!1sen!2sin"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
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
