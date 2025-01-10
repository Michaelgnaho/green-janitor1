import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, HandHeart, Copy, X } from 'lucide-react';

const DonationModal = ({ isOpen, onClose }) => {
    const [copied, setCopied] = useState(false);

    const accountDetails = {
        name: "Green Janitor",
        number: "123456789",
        bank: "Opay"
    };

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <motion.div 
                className="bg-white p-8 rounded-xl max-w-md w-full relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
            >
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                    <X className="w-6 h-6" />
                </button>
                <h2 className="text-2xl font-bold text-green-800 mb-6">Donation Details</h2>
                
                <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                        <p className="text-green-700 font-semibold">Account Name</p>
                        <div className="flex justify-between items-center">
                            <span>{accountDetails.name}</span>
                            <button 
                                onClick={() => handleCopy(accountDetails.name)}
                                className="text-green-600 hover:text-green-800"
                            >
                                <Copy className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                        <p className="text-green-700 font-semibold">Account Number</p>
                        <div className="flex justify-between items-center">
                            <span>{accountDetails.number}</span>
                            <button 
                                onClick={() => handleCopy(accountDetails.number)}
                                className="text-green-600 hover:text-green-800"
                            >
                                <Copy className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                        <p className="text-green-700 font-semibold">Bank</p>
                        <span>{accountDetails.bank}</span>
                    </div>
                </div>

                {copied && (
                    <div className="mt-4 text-green-600 text-center">
                        Copied to clipboard!
                    </div>
                )}
            </motion.div>
        </div>
    );
};

const VolunteerModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Prepare email content
        const subject = "Volunteer Application - Green Janitors";
        const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}
        `;

        // Open default email client
        window.location.href = `mailto:greenjanitorslagos@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        // Reset form and close modal
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <motion.div 
                className="bg-white p-8 rounded-xl max-w-md w-full relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
            >
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                    <X className="w-6 h-6" />
                </button>
                <h2 className="text-2xl font-bold text-green-800 mb-6">Volunteer Application</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="w-full p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                        className="w-full p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your Phone Number"
                        required
                        className="w-full p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Why do you want to volunteer?"
                        required
                        className="w-full p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        rows="4"
                    />
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                    >
                        Submit Application
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

const CTAButton = ({ children, icon: Icon, onClick }) => {
    return (
        <motion.button
            className="group relative px-8 py-4 bg-green-600 text-white rounded-xl overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
        >
            {/* ... existing button code ... */}
            <span className="relative flex items-center justify-center gap-2 text-lg font-semibold">
                <Icon className="w-5 h-5" />
                {children}
            </span>
        </motion.button>
    );
};

const CTA = () => {
    const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
    const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);

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

    return (
        <section 
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white py-20" 
            id='donate'
        >
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-green-50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-50 rounded-full translate-x-1/2 translate-y-1/2 opacity-50" />
            
            <motion.div 
                className="container mx-auto px-6 relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div 
                        className="mb-16"
                        variants={itemVariants}
                    >
                        <h2 className="text-5xl font-bold bg-gradient-to-r from-green-800 via-green-600 to-green-400 bg-clip-text text-transparent inline-block mb-6">
                            Join the Green Janitors
                            <br />
                            Sustainable Initiative
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-green-800 via-green-600 to-green-400 mx-auto rounded-full mb-8" />
                        <p className="text-xl text-green-700 leading-relaxed">
                            Help us make the world a cleaner, greener place. Your support is crucial to our mission. 
                            Whether you choose to donate or volunteer, your contribution makes a significant impact.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                        variants={itemVariants}
                    >
                        <CTAButton 
                            icon={Heart}
                            onClick={() => setIsDonationModalOpen(true)}
                            className="slide-left"
                        >
                            Donate Now
                        </CTAButton>
                        
                        <CTAButton 
                            icon={HandHeart}
                            onClick={() => setIsVolunteerModalOpen(true)}
                            className="slide-right"
                        >
                            Volunteer
                        </CTAButton>
                    </motion.div>
                </div>
            </motion.div>

            {/* Floating shapes */}
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

            {/* Modals */}
            <AnimatePresence>
                {isDonationModalOpen && (
                    <DonationModal 
                        isOpen={isDonationModalOpen}
                        onClose={() => setIsDonationModalOpen(false)}
                    />
                )}
                {isVolunteerModalOpen && (
                    <VolunteerModal 
                        isOpen={isVolunteerModalOpen}
                        onClose={() => setIsVolunteerModalOpen(false)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

export default CTA;