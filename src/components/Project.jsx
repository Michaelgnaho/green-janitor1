import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Leaf, RecycleIcon, Globe } from 'lucide-react';

const initiatives = [
    {
        year: 2021,
        title: "Campus Recycling Champions",
        description: "Engaging students and staff in recycling programs across campuses. Together, we're building a sustainable future through education and action.",
        imgSrc: "https://scontent.flos1-3.fna.fbcdn.net/v/t39.30808-6/470170587_1310454397055239_2420451166560451134_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=3a1ebe&_nc_eui2=AeGUjQ9QnufEf6JG0-qEhhdd0QCX_qbATknRAJf-psBOSVNTiWinG6kkPcpN8H0qHaTq_PYNDuGXwdPtWpNHF64d&_nc_ohc=p7f53M2t0ssQ7kNvgFP5xbc&_nc_zt=23&_nc_ht=scontent.flos1-3.fna&_nc_gid=AJ6D_VQmcETfaZghEwLIzuk&oh=00_AYCc6GyR4mraRMSx8mAkDF2Y9CWW8T2zK_bJtu2qBP7iqQ&oe=6786CF44",
        imgAlt: "Students and staff participating in a campus recycling event.",
        icon: RecycleIcon,
        stats: { impact: "2,500kg", participants: "1,200+", locations: "5" }
    },
    {
        year: 2022,
        title: "Pick the Plastic",
        description: "A community-driven initiative to reduce plastic waste in our oceans and waterways. Every piece of plastic collected is one less threat to marine life.",
        imgSrc: "https://scontent.flos1-3.fna.fbcdn.net/v/t1.6435-9/197356349_510517290382291_2057273677281102923_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=3a1ebe&_nc_eui2=AeGNI96hS691hgbaqm99RVeSSEimzMwu8_BISKbMzC7z8Nxt6TWn3WBUcQ2Zix06n7mCg7Anw7X-ChFhzJhLGCAR&_nc_ohc=lQu8uGwwItcQ7kNvgGpJdkW&_nc_zt=23&_nc_ht=scontent.flos1-3.fna&_nc_gid=AhUQvgI76HwExocXGQUfShK&oh=00_AYD6Q23cEdT4H_4_7e6cQAnXpzhT8oceyOIn28xyZht27Q&oe=67A879D2",
        imgAlt: "Community members collecting plastic waste from a beach.",
        icon: Globe,
        stats: { impact: "3,800kg", participants: "2,000+", locations: "8" }
    },
    {
        year: 2023,
        title: "Community Recycling",
        description: "Collaborating with local communities to enhance recycling efforts and create sustainable waste management solutions.",
        imgSrc: "https://scontent.flos1-2.fna.fbcdn.net/v/t39.30808-6/379063754_626524296321689_7510548529734163189_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFJtk7fZt9XgoMjOyZecwHEobXDXX0sYe6htcNdfSxh7oS_XxFhI__0TXvYtilIm0vawd1mwZ9sdemnGIwOpRLx&_nc_ohc=y-RrmKy-uMIQ7kNvgGOD7Tm&_nc_zt=23&_nc_ht=scontent.flos1-2.fna&_nc_gid=AQjOWAd--ZZRiE397GGB-Mz&oh=00_AYBG1vcx_2QV8usmAC20I-6NKxabTciCSsfHvFAZuUIQOg&oe=6786E5DF",
        imgAlt: "Local community members sorting recyclables.",
        icon: Leaf,
        stats: { impact: "5,200kg", participants: "3,500+", locations: "12" }
    }
];

const ProjectCard = ({ initiative, isSelected, onClick }) => {
    const Icon = initiative.icon;
    
    return (
        <motion.button
            className={`w-full p-4 md:p-6 rounded-xl md:rounded-2xl transition-all duration-300 text-left relative overflow-hidden group
                ${isSelected 
                    ? 'bg-gradient-to-r from-green-600 to-green-400 text-white shadow-xl scale-105' 
                    : 'bg-white text-green-800 hover:bg-green-50'}`}
            onClick={onClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            id='programs'
        >
            <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-20"
                initial={false}
                animate={{ 
                    background: [
                        "radial-gradient(circle at 100% 100%, #22c55e 0%, transparent 50%)",
                        "radial-gradient(circle at 0% 0%, #22c55e 0%, transparent 50%)"
                    ],
                }}
                transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    repeatType: "reverse" 
                }}
            />
            <div className="flex items-center gap-2 md:gap-4 mb-1 md:mb-2">
                <Icon className={`w-5 h-5 md:w-6 md:h-6 ${isSelected ? 'text-white' : 'text-green-600'}`} />
                <span className="text-xl md:text-2xl font-bold">{initiative.year}</span>
            </div>
            <h3 className={`text-base md:text-lg font-semibold ${isSelected ? 'text-white' : 'text-green-700'}`}>
                {initiative.title}
            </h3>
        </motion.button>
    );
};

const StatBox = ({ label, value }) => (
    <div className="bg-green-50 rounded-lg md:rounded-xl p-3 md:p-4 text-center">
        <div className="text-lg md:text-2xl font-bold text-green-600">{value}</div>
        <div className="text-xs md:text-sm text-green-700 mt-1">{label}</div>
    </div>
);

const Project = () => {
    const [selectedYear, setSelectedYear] = useState(2021);
    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { staggerChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { duration: 0.6 }
        }
    };

    const selectedInitiative = initiatives.find(i => i.year === selectedYear);

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-green-50 to-white py-12 md:py-20 overflow-hidden px-4 md:px-8">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-48 md:w-96 h-48 md:h-96 bg-green-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-30" />
            <div className="absolute bottom-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-green-100 rounded-full translate-x-1/2 translate-y-1/2 opacity-30" />
            
            <motion.div 
                className="container mx-auto relative"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.h1 
                    className="text-3xl md:text-5xl font-bold text-center bg-gradient-to-r from-green-800 via-green-600 to-green-400 bg-clip-text text-transparent mb-3 md:mb-4"
                    variants={itemVariants}
                >
                    Our Impact Journey
                </motion.h1>
                
                <motion.div
                    className="w-16 md:w-24 h-1 bg-gradient-to-r from-green-800 via-green-600 to-green-400 mx-auto rounded-full mb-8 md:mb-16"
                    variants={itemVariants}
                />

                <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
                    <motion.div 
                        className="w-full lg:w-1/3"
                        variants={itemVariants}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-3 md:gap-4">
                            {initiatives.map((initiative) => (
                                <ProjectCard
                                    key={initiative.year}
                                    initiative={initiative}
                                    isSelected={selectedYear === initiative.year}
                                    onClick={() => setSelectedYear(initiative.year)}
                                />
                            ))}
                        </div>
                    </motion.div>

                    <motion.div 
                        className="w-full lg:w-2/3"
                        variants={itemVariants}
                    >
                        <motion.div
                            className="bg-white rounded-xl md:rounded-2xl shadow-xl p-6 md:p-8 backdrop-blur-lg bg-opacity-90"
                            layoutId="content"
                        >
                            {selectedInitiative && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    key={selectedInitiative.year}
                                    className="space-y-4 md:space-y-6"
                                >
                                    <motion.h2 
                                        className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent"
                                    >
                                        {selectedInitiative.title}
                                    </motion.h2>
                                    
                                    <motion.p 
                                        className="text-base md:text-xl text-green-800 leading-relaxed"
                                    >
                                        {selectedInitiative.description}
                                    </motion.p>

                                    <div className="grid grid-cols-3 gap-2 md:gap-4 my-6 md:my-8">
                                        <StatBox label="Waste Collected" value={selectedInitiative.stats.impact} />
                                        <StatBox label="Participants" value={selectedInitiative.stats.participants} />
                                        <StatBox label="Locations" value={selectedInitiative.stats.locations} />
                                    </div>
                                    
                                    <motion.div 
                                        className="rounded-lg md:rounded-xl overflow-hidden shadow-xl"
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <img 
                                            src={selectedInitiative.imgSrc} 
                                            alt={selectedInitiative.imgAlt} 
                                            className="w-full h-48 md:h-80 object-cover"
                                        />
                                    </motion.div>
                                </motion.div>
                            )}
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Floating elements - hidden on mobile */}
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
};

export default Project;