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
            className={`absolute top-1/2 ${direction === 'left' ? '-left-4' : '-right-4'} 
                       -translate-y-1/2 bg-white w-12 h-12 rounded-full shadow-lg 
                       flex items-center justify-center text-green-600 z-10
                       ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-50'}`}
            whileHover={!disabled ? { scale: 1.1 } : {}}
            whileTap={!disabled ? { scale: 0.95 } : {}}
            onClick={onClick}
            disabled={disabled}
        >
            <Icon size={24} />
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
            <div className="bg-white p-12 rounded-2xl shadow-xl relative h-full">
                <motion.div 
                    className="absolute -top-6 -right-6 text-green-600 bg-green-50 w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.5 }}
                >
                    <Quote size={32} />
                </motion.div>
                
                <div className="flex items-center mb-8">
                    <div className="relative">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-green-100">
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
                    <div className="ml-6">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-green-800 to-green-600 bg-clip-text text-transparent">
                            {testimonial.name}
                        </h3>
                        <p className="text-lg text-green-600">{testimonial.role}</p>
                    </div>
                </div>
                
                <p className="text-xl text-green-700 leading-relaxed italic">"{testimonial.text}"</p>
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
        <section className="py-24 bg-gradient-to-br from-green-50 to-white relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-green-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-30" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-100 rounded-full translate-x-1/2 translate-y-1/2 opacity-30" />
            
            <div className="container mx-auto px-6 relative">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-green-800 via-green-600 to-green-400 bg-clip-text text-transparent mb-4">
                        What People Say
                    </h2>
                    <motion.div 
                        className="w-24 h-1 bg-gradient-to-r from-green-800 via-green-600 to-green-400 mx-auto rounded-full"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                    />
                </motion.div>

                <div className="relative h-[400px] max-w-4xl mx-auto px-12"
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
                <div className="flex justify-center gap-3 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setPage([index, index > page ? 1 : -1])}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                page === index 
                                    ? 'bg-green-600 w-6' 
                                    : 'bg-green-200 hover:bg-green-300'
                            }`}
                        />
                    ))}
                </div>
            </div>

            {/* Floating elements */}
            <motion.div
                className="absolute left-10 top-1/4 w-4 h-4 bg-green-200 rounded-full"
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
                className="absolute right-10 bottom-1/4 w-6 h-6 bg-green-300 rounded-full"
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