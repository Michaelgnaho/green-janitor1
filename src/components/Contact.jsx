import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, User, MessageSquare } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
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
        console.log('Form submitted:', formData);
    };

    const InputWrapper = ({ children }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );

    return (
        <section className="py-20 bg-white relative overflow-hidden" id='contact'>
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-green-50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-50 rounded-full translate-x-1/2 translate-y-1/2 opacity-50" />

            <div className="container mx-auto px-6 relative">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-green-800 via-green-600 to-green-400 bg-clip-text text-transparent inline-block mb-4">
                        Get in Touch
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-green-800 via-green-600 to-green-400 mx-auto rounded-full" />
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-green-50 p-6 rounded-2xl flex items-center gap-4">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-green-600">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-green-800">Email Us</h3>
                                <p className="text-green-600">greenjanitorslagos@gmail.com</p>
                            </div>
                        </div>
                        <div className="bg-green-50 p-6 rounded-2xl flex items-center gap-4">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-green-600">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-green-800">Call Us</h3>
                                <p className="text-green-600">0706 203 1703</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="bg-white rounded-2xl shadow-lg p-8 relative"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <InputWrapper>
                                <label className="block text-green-800 font-medium mb-2">Name</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-green-600">
                                        <User size={18} />
                                    </div>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full pl-12 pr-4 py-3 border-2 border-green-100 rounded-xl focus:ring-2 focus:ring-green-200 focus:border-green-400 outline-none transition-all duration-300"
                                        required
                                    />
                                </div>
                            </InputWrapper>

                            <InputWrapper>
                                <label className="block text-green-800 font-medium mb-2">Email</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-green-600">
                                        <Mail size={18} />
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full pl-12 pr-4 py-3 border-2  border-green-100 rounded-xl focus:ring-2 focus:ring-green-200 focus:border-green-400 outline-none transition-all duration-300"
                                        required
                                    />
                                </div>
                            </InputWrapper>

                            <InputWrapper>
                                <label className="block text-green-800 font-medium mb-2">Message</label>
                                <div className="relative">
                                    <div className="absolute top-3 left-0 pl-4 pointer-events-none text-green-600">
                                        <MessageSquare size={18} />
                                    </div>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="5"
                                        className="w-full pl-12 pr-4 py-3 border-2 border-green-100 rounded-xl focus:ring-2 focus:ring-green-200 focus:border-green-400 outline-none transition-all duration-300"
                                        required
                                    ></textarea>
                                </div>
                            </InputWrapper>

                            <InputWrapper>
                                <motion.button
                                    type="submit"
                                    className="w-full bg-green-600 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 group hover:bg-green-700 transition-all duration-300"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Send size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                                    Send Message
                                </motion.button>
                            </InputWrapper>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;