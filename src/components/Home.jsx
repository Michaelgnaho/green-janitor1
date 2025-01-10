import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CarouselHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const slides = [
    {
      image: "https://scontent.flos1-2.fna.fbcdn.net/v/t39.30808-6/447900868_776940504613400_5161249796086474427_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGLU0LnPo-dS7uF4p4q-iuT2E4GBRfvkzvYTgYFF--TO7RmjS3w2DI3oHMahB28Cd0E9RhtYme6FNfRUKCSTWgL&_nc_ohc=Gcx8IecyHVMQ7kNvgHvQOIh&_nc_zt=23&_nc_ht=scontent.flos1-2.fna&_nc_gid=Agv8wJv4QD4i7OqYVGzJjMH&oh=00_AYBqolyHMX8URb6Z_2LIC-9Qxrz4ZcrRFxvAx8Buo3owWw&oe=6786DFE8",
      title: "Sustainable Cleaning",
      description: "Eco-friendly solutions for a cleaner tomorrow"
    },
    {
      image: "https://scontent.flos1-3.fna.fbcdn.net/v/t39.30808-6/448177546_776940557946728_1140011513733229615_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHgWctNBviFBBTlWxqumqElRcGqPPPuB-BFwao88-4H4J7NR0FzFLjncSkR6Tw0NfS8BZJmUoA6oRiKdD663JPC&_nc_ohc=zAoum4y8fAAQ7kNvgHWXGIX&_nc_zt=23&_nc_ht=scontent.flos1-3.fna&_nc_gid=AeAdU_7bsHy0U16DF4KNjgZ&oh=00_AYCKmFvNppfUhBHfs66zTLZl6RP2dkgttd2zE14rshbvlA&oe=6786E6A3",
      title: "Community Impact", 
      description: "Making a difference in every space we clean"
    },
    {
      image: "https://scontent.flos1-3.fna.fbcdn.net/v/t39.30808-6/448095512_776940501280067_8655411871289647043_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGI9GUD4doaX37SQD_MscNL8TkZyFa_72_xORnIVr_vb4VRljbqchttv4X-wVyvjDPppoyP-g9s3JVRLGrjQG3u&_nc_ohc=ctektvsEHZsQ7kNvgFl9M-m&_nc_zt=23&_nc_ht=scontent.flos1-3.fna&_nc_gid=AemBmpenIM-kBIrXZuGAh3i&oh=00_AYBHPT-e4qLhRsYH6I0E9m7GcNdSC4MW-_s-LzslNaeOPQ&oe=6786D987",
      title: "Green Innovation",
      description: "Leading the way in sustainable practices"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setActiveIndex((current) => (current + 1) % slides.length);
    } else if (isRightSwipe) {
      setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div 
      className="relative h-screen w-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Carousel Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              activeIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white p-4">
        <div className="max-w-4xl text-center space-y-4 sm:space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-2 sm:mb-4 tracking-tight">
            <span className="block mb-2">Green Janitors</span>
            <span className="block text-3xl sm:text-4xl md:text-5xl text-emerald-400">
              Sustainable Initiative
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
            {slides[activeIndex].description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6 sm:mt-8">
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-emerald-600 hover:bg-emerald-500 rounded-lg font-semibold transition duration-300">
              Get Started
            </button>
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/10 hover:bg-white/20 rounded-lg font-semibold transition duration-300 backdrop-blur-sm">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Navigation */}
      <div className="absolute bottom-16 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2 sm:space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
                activeIndex === index 
                  ? 'bg-white w-6 sm:w-8' 
                  : 'bg-white/50 hover:bg-white/75 w-2 sm:w-3'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
        <div
          className="h-full bg-emerald-500 transition-all duration-500 ease-out"
          style={{
            width: `${((activeIndex + 1) / slides.length) * 100}%`
          }}
        />
      </div>
    </div>
  );
};

export default CarouselHero;