        import React from 'react';
        import { motion } from 'framer-motion';
        import { Linkedin, Mail, Twitter } from 'lucide-react';
        
        const teamMembers = [
            {
                name: "Hon. Ashade Abdulsam",
                role: "Founder & CEO",
                bio: "Ashade Abdulsam is the visionary behind the Green Janitors Sustainable Initiative. With over 20 years of experience in environmental conservation, he leads the team with passion and dedication.",
                imgSrc: "https://scontent.flos1-2.fna.fbcdn.net/v/t1.6435-9/174391410_476023213831699_3323120039732280339_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3a1ebe&_nc_eui2=AeFkgcSV12dapNOBOhJmfr-drDgTybsMejusOBPJuwx6O-fMafui0ocNTn-Ww9UDOITDf7qM49-UG3pl7qcxSyKa&_nc_ohc=fX2os_9TjUoQ7kNvgFiT-U2&_nc_zt=23&_nc_ht=scontent.flos1-2.fna&_nc_gid=AGlVSDwmNDWLueWFdfQikce&oh=00_AYDwij2tcb9fWm7pZRIJHy6D5ggFgxiDIK0Av0ZnIsqrIA&oe=67A88C1A",
                imgAlt: "Profile picture of Hon. Ashade Abdulsam"
            },
            {
                name: "Jane Babalola",
                role: "Chief Operations Officer",
                bio: "Jane oversees all operations ensuring that our initiatives run smoothly and efficiently. She has a background in logistics and a heart for sustainability.",
                imgSrc: "/api/placeholder/300/300",
                imgAlt: "Profile picture of Jane Babalola"
            },
            {
                name: "Lolade Coker",
                role: "Head of Marketing",
                bio: "Lolade is responsible for spreading the word about our mission. With a creative mind and a knack for social media, she ensures our message reaches a wide audience.",
                imgSrc: "/api/placeholder/300/300",
                imgAlt: "Profile picture of Lolade Coker"
            },
            {
                name: "Michael Ojo",
                role: "Lead Environmental Scientist",
                bio: "Michael leads our research and development team, focusing on innovative solutions for environmental challenges. He has a PhD in Environmental Science.",
                imgSrc: "/api/placeholder/300/300",
                imgAlt: "Profile picture of Michael Ojo"
            }
        ];
        
        const TeamMemberCard = ({ name, role, bio, imgSrc, imgAlt }) => {
            return (
                <motion.div 
                    className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg relative group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                        y: -10,
                        boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-4 sm:mb-6">
                        <div className="w-full h-full rounded-full overflow-hidden border-4 border-green-100">
                            <img 
                                src={imgSrc} 
                                alt={imgAlt} 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <motion.div 
                            className="absolute inset-0 border-4 border-green-300 rounded-full"
                            animate={{ 
                                scale: [1, 1.1, 1],
                                opacity: [1, 0.5, 0]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </div>
        
                    <div className="text-center">
                        <h3 className="text-xl sm:text-2xl font-bold text-green-800 mb-2">{name}</h3>
                        <p className="text-sm sm:text-base text-green-600 font-medium mb-3 sm:mb-4">{role}</p>
                        <p className="text-sm sm:text-base text-green-700 leading-relaxed mb-4 sm:mb-6">{bio}</p>
                        
                        <motion.div 
                            className="flex justify-center space-x-3 sm:space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            initial={{ y: 20 }}
                            whileInView={{ y: 0 }}
                        >
                            {[Linkedin, Twitter, Mail].map((Icon, index) => (
                                <motion.button
                                    key={index}
                                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center hover:bg-green-100 transition-colors duration-300"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Icon size={16} className="sm:w-5 sm:h-5" />
                                </motion.button>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            );
        };
        
        const Team = () => {
            return (
                <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
                    {/* Decorative background elements */}
                    <div className="absolute top-0 right-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-green-50 rounded-full translate-x-1/2 -translate-y-1/2 opacity-50" />
                    <div className="absolute bottom-0 left-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-green-50 rounded-full -translate-x-1/2 translate-y-1/2 opacity-50" />
                    
                    <div className="container mx-auto px-4 sm:px-6 relative">
                        <motion.div 
                            className="text-center mb-8 sm:mb-12 md:mb-16"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-800 via-green-600 to-green-400 bg-clip-text text-transparent inline-block mb-3 sm:mb-4">
                                Meet Our Team
                            </h2>
                            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-green-800 via-green-600 to-green-400 mx-auto rounded-full" />
                            <p className="text-base sm:text-lg text-green-700 mt-4 sm:mt-6 max-w-xl sm:max-w-2xl mx-auto px-4">
                                Our dedicated team of experts working together to create a sustainable future
                            </p>
                        </motion.div>
        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                            {teamMembers.map((member, index) => (
                                <TeamMemberCard 
                                    key={index} 
                                    {...member}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            );
        };
        
        export default Team;