'use client';
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const about = () => {

    const [showMenu, setShowMenu] = useState(false);
    const slides = ["/assets/images/pic1.jpg"];

    const teamMembers = [
        { name: "John Doe", role: "Founder & Choreographer", img: "/assets/team1.jpg" },
        { name: "Jane Smith", role: "Dance Instructor", img: "/assets/team2.jpg" }
    ];

    const achievements = [
        {
            title: "Best Dance Studio 2023",
            description: "Awarded the best dance studio in the city for outstanding performances and training."
        },
        {
            title: "1000+ Happy Students",
            description: "Trained over 1000 students, helping them achieve their dance dreams."
        },
        {
            title: "National Championship Winner",
            description: "Won the National Dance Championship for three consecutive years."
        },
        {
            title: "Featured in Dance Weekly",
            description: "Recognized in a top dance magazine for innovative choreography and training."
        }
    ];


    return <>
        {/* Hero Section */}
        <section className="relative w-full min-h-screen overflow-hidden flex flex-col items-center">
            {/* Background Container */}
            <div className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out" style={{ backgroundImage: `url(${slides[0]})` }}></div>
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Header */}
            <header className="absolute top-0 left-0 w-full text-white py-4 px-6 md:px-12 z-20  bg-opacity-50">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <img src="/assets/grooveLog-2.png" alt="Groove Dance Studio" className="h-16 md:h-20 w-32 md:w-40 object-contain" />

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-6 text-lg">
                        <ul className="flex space-x-6">
                            <li><a href="/" className="hover:text-yellow-500">Home</a></li>
                            <li className="relative group">
                                <a href="/home/about-us" className="hover:text-yellow-500">About Us</a>

                            </li>
                            <li className="relative group">
                                <a href="/studio" className="hover:text-yellow-500">Groove To Move Studio</a>
                                <div className="absolute left-0 mt-2 hidden group-hover:block bg-black shadow-lg rounded-md w-48">
                                    <ul className="p-2 space-y-2">
                                        <li><a href="/studio/classes" className="block px-4 py-2 hover:bg-gray-700">Classes</a></li>
                                        <li><a href="/studio/gallery" className="block px-4 py-2 hover:bg-gray-700">Gallery</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="relative group">
                                <a href="/book" className="hover:text-yellow-500">Services</a>
                            </li>
                            <li className="relative group">
                                <a href="/book" className="hover:text-yellow-500">Courses</a>
                            </li>
                            <li><a href="/contact" className="hover:text-yellow-500">Contact Us</a></li>
                        </ul>
                    </nav>

                    {/* Mobile Menu */}
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
                            <li><a href="/about" className="block py-2">About Us</a></li>
                            <li><a href="/studio" className="block py-2">Groove To Move Studio</a></li>
                            <li><a href="/book" className="block py-2">Services</a></li>
                            <li><a href="/book" className="block py-2">Courses</a></li>
                            <li><a href="/contact" className="block py-2">Contact Us</a></li>
                        </ul>
                    </div>
                )}
            </header>

            {/* Content Section */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen w-full px-4 sm:px-8 md:px-12 lg:px-24">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Meet Our Team</h2>
                <p className="text-gray-300 mt-2 text-sm sm:text-base">The passionate people behind Groove To Move</p>

                {/* Team Grid */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 w-full max-w-6xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="relative bg-gray-800 p-4 sm:p-6 rounded-lg text-center shadow-lg w-full max-w-xs mx-auto group">
                            <img src={member.img} alt={member.name} className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full object-cover border-4 border-red-600 transition-opacity duration-300 group-hover:opacity-50" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h3 className="text-lg sm:text-xl font-semibold mt-3">{member.name}</h3>
                                <p className="text-gray-400 text-sm sm:text-base">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Achievements Section */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen w-full px-4 sm:px-8 md:px-12 lg:px-24">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Our Achievements</h2>
                <p className="text-gray-300 mt-2 text-sm sm:text-base">Milestones we are proud of</p>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 w-full mx-auto">
                    {achievements.map((achievement, index) => (
                        <div key={index} className="bg-gray-800 p-4 sm:p-6 rounded-lg text-center shadow-lg w-full max-w-xs mx-auto">
                            <h3 className="text-lg sm:text-xl font-semibold mt-3">{achievement.title}</h3>
                            <p className="text-gray-400 text-sm sm:text-base">{achievement.description}</p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    </>
}

export default about;