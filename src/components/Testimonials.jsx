import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import mag from "../assets/mag.jpg";

const testimonials = [
    {
        name: "Michael Adeyemi Gnaho",
        role: "Global Youth Ambassador",
        image: mag,
        alt: "Portrait of M.A.G",
        text: "The Green Janitors Sustainable Initiative has significantly improved our community's environment. Their programs are impactful and have made a real difference."
    },
    {
        name: "Joshua Alimi",
        role: "Supporter",
        image: "/api/placeholder/100/100",
        alt: "Portrait of Josh",
        text: "Supporting the Green Janitors Sustainable Initiative has been a rewarding experience. Their dedication to sustainability is inspiring and their results speak for themselves."
    },
    {
        name: "Nike Oyefesan",
        role: "Beneficiary",
        image: "/api/placeholder/100/100",
        alt: "Portrait of Nike",
        text: "Thanks to the Green Janitors Sustainable Initiative, our local park is cleaner and greener than ever. Their efforts are truly commendable."
    },
    {
        name: "Mike Ajibade",
        role: "Volunteer",
        image: "/api/placeholder/100/100",
        alt: "Portrait of Mike ",
        text: "Being part of this initiative has opened my eyes to the impact we can have on our environment. Every small action counts towards a sustainable future."
    }
];

const CarouselButton = ({ direction, onClick, disabled }) => {
    const Icon = direction === 'left' ? ChevronLeft : ChevronRight;
    return (
        <motion.button
            className={`absolute top-1/2 ${direction === 'left' ? '-left-1 sm:-left-2 md:-left-4' : '-right-1 sm:-right-2 md:-right-4'} 
                       -translate-y-1/2 bg-white w-8 h-8 md:w-12 md:h-12 rounded-full shadow-lg 
                       flex items-center justify-center text-green-600 z-10
                       ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-50'}`}
            whileHover={!disabled ? { scale: 1.1 } : {}}
            whileTap={!disabled ? { scale: 0.95 } : {}}
            onClick={onClick}
            disabled={disabled}
        >
            <Icon className="w-4 h-4 md:w-6 md:h-6" />
        </motion.button>
    );
};

const TestimonialCard = ({ testimonial, direction }) => {
    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    return (
        <motion.div
            className="absolute w-full h-full"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
            }}
        >
            <div className="bg-white p-4 sm:p-6 md:p-12 rounded-xl md:rounded-2xl shadow-xl relative h-full mx-auto max-w-[95%] sm:max-w-[90%] md:max-w-[85%]">
                <motion.div 
                    className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 md:-top-6 md:-right-6 text-green-600 bg-green-50 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg"
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.5 }}
                >
                    <Quote className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                </motion.div>
                
                <div className="flex flex-col items-center sm:items-center md:flex-row md:items-center gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8">
                    <div className="relative">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-4 border-green-100">
                            <img src={testimonial.image} alt={testimonial.alt} className="w-full h-full object-fill" />
                        </div>
                        <motion.div 
                            className="absolute inset-0 border-4 border-green-300 rounded-full"
                            animate={{ 
                                scale: [1, 1.2, 1],
                                opacity: [1, 0.5, 0]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </div>
                    <div className="text-center md:text-left">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-green-800 to-green-600 bg-clip-text text-transparent">
                            {testimonial.name}
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg text-green-600">{testimonial.role}</p>
                    </div>
                </div>
                
                <p className="text-sm sm:text-base md:text-xl text-green-700 leading-relaxed italic text-center md:text-left px-2 sm:px-4 md:px-0">
                    "{testimonial.text}"
                </p>
            </div>
        </motion.div>
    );
};

const Testimonials = () => {
    const [[page, direction], setPage] = useState([0, 0]);
    const [autoplay, setAutoplay] = useState(true);

    const paginate = (newDirection) => {
        const nextPage = page + newDirection;
        if (nextPage >= 0 && nextPage < testimonials.length) {
            setPage([nextPage, newDirection]);
        }
    };

    useEffect(() => {
        if (!autoplay) return;

        const timer = setInterval(() => {
            if (page === testimonials.length - 1) {
                setPage([0, -1]);
            } else {
                paginate(1);
            }
        }, 5000);

        return () => clearInterval(timer);
    }, [page, autoplay]);

    return (
        <section className="py-8 sm:py-12 md:py-24 bg-gradient-to-br from-green-50 to-white relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-32 sm:w-48 md:w-96 h-32 sm:h-48 md:h-96 bg-green-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-30" />
            <div className="absolute bottom-0 right-0 w-32 sm:w-48 md:w-96 h-32 sm:h-48 md:h-96 bg-green-100 rounded-full translate-x-1/2 translate-y-1/2 opacity-30" />
            
            <div className="container mx-auto px-2 sm:px-4 md:px-6 relative">
                <motion.div 
                    className="text-center mb-6 sm:mb-8 md:mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-green-800 via-green-600 to-green-400 bg-clip-text text-transparent mb-2 sm:mb-3 md:mb-4">
                        What People Say
                    </h2>
                    <motion.div 
                        className="w-12 sm:w-16 md:w-24 h-1 bg-gradient-to-r from-green-800 via-green-600 to-green-400 mx-auto rounded-full"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                    />
                </motion.div>

                <div className="relative h-[400px] sm:h-[425px] md:h-[400px] max-w-4xl mx-auto px-2 sm:px-6 md:px-12"
                    onMouseEnter={() => setAutoplay(false)}
                    onMouseLeave={() => setAutoplay(true)}
                >
                    <AnimatePresence initial={false} custom={direction}>
                        <TestimonialCard
                            key={page}
                            testimonial={testimonials[page]}
                            direction={direction}
                        />
                    </AnimatePresence>

                    <CarouselButton
                        direction="left"
                        onClick={() => paginate(-1)}
                        disabled={page === 0}
                    />
                    <CarouselButton
                        direction="right"
                        onClick={() => paginate(1)}
                        disabled={page === testimonials.length - 1}
                    />
                </div>

                {/* Pagination dots */}
                <div className="flex justify-center gap-1.5 sm:gap-2 md:gap-3 mt-4 sm:mt-6 md:mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setPage([index, index > page ? 1 : -1])}
                            className={`w-1.5 sm:w-2 md:w-3 h-1.5 sm:h-2 md:h-3 rounded-full transition-all duration-300 ${
                                page === index 
                                    ? 'bg-green-600 w-3 sm:w-4 md:w-6' 
                                    : 'bg-green-200 hover:bg-green-300'
                            }`}
                        />
                    ))}
                </div>
            </div>

            {/* Floating elements - visible on all screens but sized appropriately */}
            <motion.div
                className="absolute left-4 sm:left-8 md:left-10 top-1/4 w-2 sm:w-3 md:w-4 h-2 sm:h-3 md:h-4 bg-green-200 rounded-full"
                animate={{
                    y: [0, -20, 0],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute right-4 sm:right-8 md:right-10 bottom-1/4 w-3 sm:w-4 md:w-6 h-3 sm:h-4 md:h-6 bg-green-300 rounded-full"
                animate={{
                    y: [0, 20, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </section>
    );
};

export default Testimonials;