'use client';
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const about = () => {

    const [showMenu, setShowMenu] = useState(false);
    const slides = ["/assets/images/pic1.jpg"];

    const teamMembers = [
        { name: "Vishal Vishwakarma", role: "Director & Choreographer", img: "/assets/team1.jpg" },
        { name: "Nidhi Giri", role: "Director & Choreographer", img: "/assets/team2.jpg" }
    ];

    const awards = [
        {
            title: "Best Dance Studio Award",
            img: "/assets/awards/best-dance.jpg",
            description: "Recognized as the best dance studio for exceptional training and performances.",
        },
        {
            title: "National Dance Championship",
            img: "/assets/awards/national-champ.jpg",
            description: "Won the prestigious National Dance Championship three years in a row.",
        },
        {
            title: "Star Performer Trophy",
            img: "/assets/awards/star-performer.jpg",
            description: "Awarded for outstanding choreography and dance excellence.",
        },
        {
            title: "Featured in Dance Weekly",
            img: "/assets/awards/dance-weekly.jpg",
            description: "Acknowledged in a top dance magazine for creativity and talent.",
        },
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
                            <li><a href="/homw/about-us" className="block py-2">About Us</a></li>
                            <li><a href="/home/studio" className="block py-2">Studio</a></li>
                            <li><a href="/home/services" className="block py-2">Services</a></li>
                            <li><a href="/home/contact-us" className="block py-2">Contact Us</a></li>
                        </ul>
                    </div>
                )}
            </header>

            <section className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen w-full px-4 sm:px-8 md:px-12 lg:px-24 py-40">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Meet Our Team</h2>
                <p className="text-gray-300 text-lg sm:text-xl">The passionate people behind <span className="text-red-500 font-semibold">Groove To Move</span></p>

                {/* Team Grid */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 w-full max-w-5xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="relative bg-gray-900 p-6 sm:p-8 rounded-lg shadow-2xl w-full mx-auto transform hover:scale-105 transition-all duration-300">
                            <div className="relative">
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-40 h-40 sm:w-48 sm:h-48 mx-auto rounded-full object-cover border-4 border-red-500 shadow-lg"
                                />
                            </div>
                            <div className="mt-6 text-center">
                                <h3 className="text-xl sm:text-2xl font-semibold text-white">{member.name}</h3>
                                <p className="text-gray-400 text-base sm:text-lg mt-2">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </section>

        {/* Achievements Section */}
        <section className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen w-full px-4 sm:px-8 md:px-12 lg:px-24 bg-gray-600">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Awards & Rewards</h2>
            <p className="text-gray-300 mt-2 text-sm sm:text-base">Recognizing our excellence in dance</p>

            {/* Swiper Slider */}
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                navigation
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="w-full max-w-5xl mt-12"
            >
                {awards.map((award, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg text-center shadow-lg w-full max-w-xs mx-auto">
                            <img
                                src={award.img}
                                alt={award.title}
                                className="w-32 h-32 sm:w-40 sm:h-40 mx-auto object-cover rounded-lg border-4 border-yellow-500 mb-4"
                            />
                            <h3 className="text-lg sm:text-xl font-semibold">{award.title}</h3>
                            <p className="text-gray-400 text-sm sm:text-base">{award.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    </>
}

export default about;