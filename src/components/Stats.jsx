import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Recycle, Users, Globe } from 'lucide-react';

function Stats() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const statsData = [
        {
            icon: <Recycle className="w-12 h-12 md:w-16 md:h-16 text-green-600" />,
            number: "1,000,000+",
            label: "Plastic bottles recycled",
        },
        {
            icon: <Users className="w-12 h-12 md:w-16 md:h-16 text-green-600" />,
            number: "50,000+",
            label: "Community members engaged",
        },
        {
            icon: <Globe className="w-12 h-12 md:w-16 md:h-16 text-green-600" />,
            number: "25",
            label: "Cities impacted",
        },
        {
            icon: <Leaf className="w-12 h-12 md:w-16 md:h-16 text-green-600" />,
            number: "500+",
            label: "Sustainability workshops",
        }
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white py-12 md:py-20">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-48 md:w-96 h-48 md:h-96 bg-green-50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50" />
            <div className="absolute bottom-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-green-50 rounded-full translate-x-1/2 translate-y-1/2 opacity-50" />
            
            <motion.div 
                className="container mx-auto px-4 md:px-6 relative max-w-7xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                {/* Header Section */}
                <motion.div 
                    className="text-center mb-8 md:mb-16"
                    variants={itemVariants}
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-green-800 via-green-600 to-green-400 bg-clip-text text-transparent inline-block mb-4 md:mb-6">
                        Our Sustainable Impact
                    </h2>
                    <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-green-800 via-green-600 to-green-400 mx-auto rounded-full mb-4 md:mb-8" />
                    <p className="text-lg md:text-xl text-green-700 max-w-3xl mx-auto leading-relaxed px-4">
                        Transforming communities through sustainable practices and environmental stewardship.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                    {statsData.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group relative bg-white p-6 md:p-8 rounded-lg md:rounded-xl overflow-hidden shadow-md text-center"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.div 
                                className="absolute inset-0 slide-right bg-gradient-to-r from-green-700 to-green-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                            />
                            <div className="mb-4 md:mb-6 flex justify-center">
                                {stat.icon}
                            </div>
                            <h3 className="text-2xl md:text-4xl font-bold text-green-600 mb-1 md:mb-2">
                                {stat.number}
                            </h3>
                            <p className="text-gray-600 text-base md:text-lg">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div 
                    className="mt-8 md:mt-16 text-center"
                    variants={itemVariants}
                >
                    <p className="text-lg md:text-xl text-green-700 max-w-3xl mx-auto mb-6 md:mb-8 px-4">
                        Join us in our mission to create a more sustainable future.
                    </p>
                    <motion.button
                        className="group relative px-6 md:px-8 py-3 md:py-4 bg-green-600 text-white rounded-lg md:rounded-xl overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                        <span className="relative flex items-center justify-center gap-2 text-base md:text-lg font-semibold">
                            <a href='#donate'>Get Involved</a>
                        </span>
                    </motion.button>
                </motion.div>
            </motion.div>

            {/* Floating shapes - hidden on mobile */}
            <motion.div
                className="hidden md:block absolute left-10 top-1/4 w-4 h-4 bg-green-200 rounded-full"
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
                className="hidden md:block absolute right-10 bottom-1/4 w-6 h-6 bg-green-300 rounded-full"
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
}

export default Stats;