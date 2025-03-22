'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiMenu, FiX } from "react-icons/fi";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';
import { EffectFade, Autoplay, Navigation, Pagination } from 'swiper/modules';

const HomePage = () => {
    const [showMenu, setShowMenu] = useState(false);

    const router = useRouter();

    const handleAbout = () => {
        router.push('/home/about-us');
    }



    const slides = [
        "/assets/images/pic1.jpg",
        "/assets/images/pic2.jpg",
        "/assets/images/pic3.jpg",
        "/assets/images/pic4.jpg"
    ];

    const courses = [
        {
            title: "KINGS GOLDEN PASS - ONE YEAR UNLIMITED ACCESS",
            description: "Enjoy a year of unlimited dance training at Kings Dance Studio! Access all courses and workshops, compete in in-house events, and customize your schedule. Explore styles like Hip-hop, Ballet, Contemporary, and more.",
            image: "https://your-image-url-1.jpg",
        },
        {
            title: "PROFESSIONAL TRAINING PROGRAM",
            description: "Discover the key to unlocking your dance potential with professional training. Receive certification, stay updated with real-time knowledge, and participate in exclusive masterclasses with renowned dancers and choreographers.",
            image: "https://your-image-url-2.jpg",
        },
        {
            title: "INTENSIVE TRAINING PROGRAM",
            description: "Join our Intensive Training Program, tailored for professionals looking to master a particular dance style. Enhance your artistry and receive personalized coaching in a focused, transformative environment.",
            image: "https://your-image-url-3.jpg",
        }
    ];

    const services = [
        { name: "Choreography", description: "Musicals Concerts, Theatrical Acts, Dance Reality Shows, Award Shows, Serials, Advertisements.", icon: "🎵" },
        { name: "Music Videos", description: "Choreography for Music videos with Celebrities, Dance Music Video Collaboration.", icon: "🎥" },
        { name: "Wedding", description: "Choreography and Training for Sangeet & Wedding.", icon: "🎁" },
        { name: "Corporate Events", description: "Performances for National & International Shows and Corporate Events.", icon: "💼" },
        { name: "Award Functions", description: "Performances in renowned award ceremonies at National & International Platforms.", icon: "🏆" },
        { name: "Celebrity Judge", description: "Vishal Vishwakarma & Team as Celebrity TV Dance Reality Shows/ Schools / Dance Events.", icon: "🎭" }
    ];

    const sections = [
        {
            title: "Expert Instruction",
            icon: "https://kingsunitedindia.com/wp-content/uploads/slider4/slide1icon.png",
            description:
                "Our team of experienced dance instructors are dedicated to helping students of all levels achieve their dance goals. Whether you're a beginner looking to learn the basics or an experienced dancer aiming to refine your skills, our instructors are here to guide and support you every step of the way.",
        },
        {
            title: "Variety of Dance Styles",
            icon: "https://kingsunitedindia.com/wp-content/uploads/slider4/slide1icon.png",
            description:
                "From ballet and jazz to hip-hop and contemporary, Kings Dance Studio offers a diverse range of dance styles to cater to different interests and preferences. Explore new genres, challenge yourself creatively, and discover the joy of expression through movement.",
        },
        {
            title: "Performance Opportunities",
            icon: "https://kingsunitedindia.com/wp-content/uploads/slider4/slide1icon.png",
            description:
                "Showcase your talent and passion on stage through our annual recitals, competitions, and showcases. Gain valuable performance experience, build confidence, and celebrate your hard work and dedication alongside your peers and instructors.",
        },
        {
            title: "Community Engagement",
            icon: "https://kingsunitedindia.com/wp-content/uploads/slider4/slide1icon.png",
            description:
                "Join a vibrant community of dancers who share your enthusiasm for dance. Connect with like-minded individuals, make lasting friendships, and build a support system that encourages growth, creativity, and mutual respect.",
        },
    ];

    return <>

        <div className="w-full">
            {/* Hero Section */}
            <section className="relative w-full h-screen overflow-hidden">
                {/* Background Container */}
                <div className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out" style={{ backgroundImage: `url(${slides[0]})` }}></div>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-700"></div>

                {/* Fixed Header */}
                <header className="absolute top-0 left-0 w-full text-white py-4 px-6 md:px-12 transition-all duration-700 ease-out z-20 ">
                    <div className="container mx-auto flex justify-between items-center">
                        {/* Logo */}
                        <div className="flex items-center">
                            <img src="/assets/grooveLog-2.png" alt="Groove Dance Studio" className="h-20 md:h-24 w-40 object-contain" />
                        </div>

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
                                            <li><a href="/studio/classes" className="block px-4 py-2 hover:bg-gray-700">Classes</a></li>
                                            <li><a href="/studio/gallery" className="block px-4 py-2 hover:bg-gray-700">Gallery</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="relative group">
                                    <a href="/home/services" className="hover:text-yellow-500">Services</a>

                                </li>

                                <li><a href="/home/contact-us" className="hover:text-yellow-500">Contact Us</a></li>
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
                                <li><a href="/home/about-us" className="block py-2">About Us</a></li>
                                <li><a href="/home/studio" className="block py-2">Groove To Move Studio</a></li>
                                <li><a href="/home/services" className="block py-2">Services</a></li>

                                <li><a href="/home/contact-us" className="block py-2">Contact Us</a></li>
                            </ul>
                        </div>
                    )}
                </header>

                {/* Hero Content */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center h-full text-white px-4 sm:px-8 md:px-12 lg:px-24">
                    <h2 className="text-2xl sm:text-4xl font-semibold">Welcome to</h2>
                    <h1 className="text-4xl sm:text-6xl font-bold">The Groove to Move</h1>
                    <h2 className="text-lg sm:text-2xl">Patna's Leading Dance Academy</h2>
                    <a href="#" className="mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg text-lg transition-all duration-300">
                        Book Us Now
                    </a>
                </div>
            </section>

            {/* About Section */}
            <div className="relative w-full bg-gray-100 py-16 px-6 md:px-12 flex flex-col md:flex-row items-center gap-8 transition-all duration-700">
                <div className="w-full md:w-1/2 space-y-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold italic text-gray-800">
                        About <span className="text-gray-700">Groove to Move</span>
                    </h1>
                    <p className="text-lg sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed text-center sm:text-left px-4 sm:px-0">
                        <span className="font-semibold">Groove to Move – Patna’s Premier Dance Studio</span>
                        <br />
                        At <span className="font-semibold">Groove to Move</span>, we don’t just teach dance—we create an experience!
                        As Patna’s leading dance studio, we bring passion, energy, and excellence to every move.
                        Our lead choreographer, <span className="font-semibold">Vishal Vishwakarma</span>, has been professionally trained by
                        <span className="font-semibold"> Kings United India</span>, ensuring top-notch guidance in various dance forms.
                        <br /><br />
                        Whether you're a beginner looking to explore the joy of dance or an advanced dancer aiming to refine your skills,
                        we provide the perfect platform to grow and express yourself. Join us and step into a world where rhythm meets perfection!
                        <br /><br />
                        <span className="block text-xl sm:text-2xl font-bold text-gray-900">Dance. Express. Elevate.</span>
                    </p>

                    <button className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-all duration-300" onClick={handleAbout}>
                        Know More
                    </button>
                </div>
                <div className="w-full md:w-1/2 rounded-lg shadow-lg overflow-hidden">
                    <Swiper
                        modules={[EffectFade, Autoplay]}
                        effect="fade"
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        loop
                        className="rounded-lg"
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className="w-full h-64 md:h-80 lg:h-96 flex items-center justify-center bg-gray-200">
                                    <img
                                        src={slide}
                                        alt={`Slide ${index + 1}`}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* Studio Showcase */}
            <div className="relative w-full flex flex-col items-center justify-center py-12 md:py-16 bg-gray-900 text-white"  >
                <h2 className="text-2xl md:text-4xl font-bold text-center px-4">
                    Groove To Move: Where Passion Meets Movement!
                </h2>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    loop
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    navigation
                    pagination={{ clickable: true }}
                    className="w-full md:w-[80%] lg:w-[60%] md:h-[80%] lg:h-[60%]  mt-6"
                >
                    {sections.map((section, index) => (
                        <SwiperSlide
                            key={index}
                            className="relative flex flex-col items-center justify-center text-center md:py-16 bg-cover bg-center"
                            style={{
                                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url(${slides[index]})`,
                                backgroundSize: "contain",  // 🟢 Ensures the whole image is visible
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                minHeight: "70vh",  // 🟢 Adjust height for better visibility
                                width: "100%", // Ensures full width
                            }}
                        >
                            <div className="bg-black/50 p-6 md:p-8 rounded-lg ">
                                {section.icon && (
                                    <img
                                        src={section.icon}
                                        alt={`${section.title} Icon`}
                                        className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-4"
                                    />
                                )}
                                <h3 className="text-xl md:text-2xl font-semibold mb-3">{section.title}</h3>
                                <p className="text-sm md:text-lg">{section.description}</p>
                            </div>
                        </SwiperSlide>

                    ))}
                </Swiper>
            </div>


            {/* Studio Showcase */}
            <div className="relative w-full bg-gray-900 text-center py-12">
                <svg className="absolute top-0 left-0 w-full" viewBox="0 0 1440 320">
                    <path fill="#fff" d="M0,160L80,149.3C160,139,320,117,480,133.3C640,149,800,203,960,208C1120,213,1280,171,1360,149.3L1440,128V0H0Z"></path>
                </svg>
                <h2 className="text-3xl md:text-5xl font-bold text-black relative">Our Creator Space</h2>
                <button className="mt-4 px-6 py-3 bg-yellow-500 text-white font-semibold rounded-md">BOOK NOW</button>

                <div className="relative w-full max-w-6xl mx-auto py-12">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay, EffectFade]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop
                        autoplay={{ delay: 3000 }}
                        pagination={{ clickable: true }}
                        navigation
                        effect="fade"
                        className="w-full rounded-lg shadow-lg"
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className="w-full h-80 md:h-96 lg:h-[550px] flex items-center justify-center bg-gray-200">
                                    <img
                                        src={slide}
                                        alt={`Slide ${index + 1}`}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>

            {/* Our Courses */}

            <div className="relative py-16">
                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/assets/images/pic4.jpg')" }}
                >
                    <div className="absolute inset-0 bg-black opacity-70"></div>
                </div>

                {/* Title */}
                <div className="relative text-center text-4xl font-bold text-yellow-500 mb-12 z-10">
                    <h2 className="italic">Our Courses</h2>
                </div>

                {/* Course Cards */}
                <div className="relative container mx-auto px-6 grid md:grid-cols-3 gap-8 z-10">
                    {courses.map((course, index) => (
                        <div
                            key={index}
                            className="bg-black bg-opacity-80 text-white p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 ease-in-out duration-300"
                        >
                            <img
                                src={course.image}
                                alt={course.title}
                                className="w-full h-72 object-cover rounded-lg"
                            />

                            <h3 className="text-lg font-bold text-yellow-500 mt-4">{course.title}</h3>
                            <p className="text-sm text-gray-300 mt-2">{course.description}</p>

                            <button className="mt-4 bg-yellow-500 text-black font-semibold py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300">
                                Know More
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Our Services */}
            <div className="relative py-16 text-center">
                {/* Background Image with Opacity */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/assets/images/pic3.jpg')" }}
                >
                    <div className="absolute inset-0 bg-black opacity-70"></div>
                </div>

                {/* Title */}
                <div className="relative text-white text-4xl font-bold mb-10 z-10">
                    <h2 className="uppercase tracking-wide">Our Services</h2>
                </div>

                {/* Service Grid */}
                <div className="relative container mx-auto px-6 grid md:grid-cols-3 lg:grid-cols-3 gap-8 z-10">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-opacity-80 text-white p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 ease-in-out duration-300"
                        >
                            <div className="text-5xl text-yellow-500">{service.icon}</div>
                            <h3 className="text-xl font-semibold mt-4">{service.name}</h3>
                            <p className="text-sm text-gray-300 mt-2">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* contact us */}


        </div>

    </>
}

export default HomePage;