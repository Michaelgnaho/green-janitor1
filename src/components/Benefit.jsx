import React from 'react';
import { motion } from 'framer-motion';
import {
    Leaf,
    Users,
    Heart,
    GraduationCap,
    HandHeart,
    Globe
} from 'lucide-react';

const benefits = [
    {
        Icon: Leaf,
        title: "Environmental Impact",
        description: "Contribute to a cleaner and greener environment by reducing waste and promoting recycling.",
        color: "from-green-500 to-emerald-400"
    },
    {
        Icon: Users,
        title: "Community Engagement",
        description: "Engage with your community and work together towards a sustainable future.",
        color: "from-blue-500 to-cyan-400"
    },
    {
        Icon: Heart,
        title: "Health Benefits",
        description: "Improve your health by living in a cleaner environment and reducing exposure to pollutants.",
        color: "from-rose-500 to-pink-400"
    },
    {
        Icon: GraduationCap,
        title: "Educational Opportunities",
        description: "Learn about sustainable practices and how to implement them in your daily life.",
        color: "from-purple-500 to-violet-400"
    },
    {
        Icon: HandHeart,
        title: "Volunteer Opportunities",
        description: "Get involved in various volunteer activities and make a positive impact.",
        color: "from-amber-500 to-yellow-400"
    },
    {
        Icon: Globe,
        title: "Global Impact",
        description: "Join a global movement towards sustainability and make a difference worldwide.",
        color: "from-teal-500 to-cyan-400"
    }
];

const BenefitCard = ({ Icon, title, description, color, index }) => (
    <motion.div
        className="relative bg-white p-8 rounded-2xl shadow-lg overflow-hidden group"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        whileHover={{
            scale: 1.03,
            boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
        }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
    >
        {/* Gradient background that appears on hover */}
        <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
        />

        {/* Animated border gradient */}
        <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100"
            initial={false}
            animate={{ 
                background: [
                    `radial-gradient(circle at 100% 100%, rgb(34 197 94) 0%, transparent 50%)`,
                    `radial-gradient(circle at 0% 0%, rgb(34 197 94) 0%, transparent 50%)`
                ],
            }}
            transition={{ 
                duration: 2, 
                repeat: Infinity, 
                repeatType: "reverse" 
            }}
        />

        <div className="relative">
            <motion.div
                className={`text-green-600 mb-6 bg-gradient-to-br ${color} bg-opacity-10 w-16 h-16 rounded-2xl flex items-center justify-center`}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.8 }}
            >
                <Icon size={32} strokeWidth={2} className="text-white" />
            </motion.div>

            <motion.h3 
                className="text-xl font-bold mb-3 bg-gradient-to-r from-green-800 to-green-600 bg-clip-text text-transparent"
            >
                {title}
            </motion.h3>

            <p className="text-green-700 leading-relaxed">{description}</p>

            {/* Hover effect line */}
            <motion.div
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${color} transform origin-left scale-x-0 group-hover:scale-x-full transition-transform duration-300`}
            />
        </div>
    </motion.div>
);

const Benefit = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <section className="relative py-20 bg-gradient-to-br from-green-50 to-white overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-green-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-30" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-100 rounded-full translate-x-1/2 translate-y-1/2 opacity-30" />

            <div className="container mx-auto px-6 relative">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="relative"
                >
                    <motion.h2
                        className="text-5xl font-bold text-center bg-gradient-to-r from-green-800 via-green-600 to-green-400 bg-clip-text text-transparent mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Benefits of Participating
                    </motion.h2>

                    <motion.div
                        className="w-24 h-1 bg-gradient-to-r from-green-800 via-green-600 to-green-400 mx-auto rounded-full mb-16"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <BenefitCard
                                key={index}
                                {...benefit}
                                index={index}
                            />
                        ))}
                    </div>
                </motion.div>
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

export default Benefit;