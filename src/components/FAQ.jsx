import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div 
            className="group relative bg-white p-6 mb-4 rounded-xl overflow-hidden shadow-md"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
        >
            <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
            />
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
            <div 
                className="flex justify-between items-center cursor-pointer relative z-10"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="text-lg font-semibold text-green-800">{question}</h3>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {isOpen ? (
                        <ChevronUp className="text-green-600" />
                    ) : (
                        <ChevronDown className="text-green-600" />
                    )}
                </motion.div>
            </div>
            {isOpen && (
                <motion.div 
                    className="mt-4 text-gray-700 relative z-10"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="w-full h-px bg-green-100 my-4" />
                    <p>{answer}</p>
                </motion.div>
            )}
        </motion.div>
    );
};

function FAQ() {
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

    const faqs = [
		{
			question: "What is the Green Janitors Sustainable Initiative?",
			answer: "The Green Janitors Sustainable Initiative is a program aimed at promoting sustainable practices among janitorial staff in various institutions."
		},
		{
			question: "How can I become a volunteer?",
			answer: "You can become a volunteer by filling out the volunteer form on our website and attending our orientation session."
		},
		{
			question: "What kind of donations do you accept?",
			answer: "We accept monetary donations, as well as donations of cleaning supplies and equipment that are eco-friendly."
		},
		{
			question: "How are donations used?",
			answer: "Donations are used to fund our training programs, purchase eco-friendly cleaning supplies, and support our outreach efforts."
		},
		{
			question: "Can I donate supplies instead of money?",
			answer: "Yes, we accept donations of eco-friendly cleaning supplies. Please contact us for more details on how to donate supplies."
		},
		{
			question: "Where can I find more information about your programs?",
			answer: "More information about our programs can be found on our website under the 'Programs' section."
		},
		{
			question: "How do I contact you for more information?",
			answer: "You can contact us via the contact form on our website or by emailing us at info@greenjanitors.org."
		},
		{
			question: "What are the benefits of joining the initiative?",
			answer: "Benefits include access to training on sustainable practices, networking opportunities, and the satisfaction of contributing to a greener planet."
		},
		{
			question: "Do you offer training for janitors?",
			answer: "Yes, we offer comprehensive training programs for janitors on sustainable cleaning practices."
		},
		{
			question: "How can businesses get involved?",
			answer: "Businesses can get involved by sponsoring our programs, donating supplies, or encouraging their janitorial staff to participate in our training sessions."
		},
		{
			question: "What is your mission?",
			answer: "Our mission is to promote sustainable cleaning practices and reduce the environmental impact of janitorial services."
		},
		{
			question: "How long has the initiative been running?",
			answer: "The initiative has been running since 2015 and has grown significantly over the years."
		},
		{
			question: "Are there any membership fees?",
			answer: "No, there are no membership fees to join the initiative."
		},
		{
			question: "How can I stay updated on your activities?",
			answer: "You can stay updated by subscribing to our newsletter and following us on social media."
		},
		{
			question: "Do you collaborate with other organizations?",
			answer: "Yes, we collaborate with various environmental and community organizations to further our mission."
		}
	];

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white py-20">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-green-50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-50 rounded-full translate-x-1/2 translate-y-1/2 opacity-50" />
            
            <motion.div 
                className="container mx-auto px-6 relative max-w-4xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                <motion.h2 
                    className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-800 via-green-600 to-green-400 bg-clip-text text-transparent inline-block mb-4 sm:mb-6"
                    variants={itemVariants}
                >
                    Frequently Asked Questions
                </motion.h2>

                <motion.div 
                    className="space-y-4"
                    variants={itemVariants}
                >
                    {faqs.map((faq, index) => (
                        <FAQItem 
                            key={index} 
                            question={faq.question} 
                            answer={faq.answer} 
                        />
                    ))}
                </motion.div>

                <motion.div 
                    className="text-center mt-12"
                    variants={itemVariants}
                >
                    <p className="text-green-700 max-w-2xl mx-auto">
                        Can't find the answer you're looking for? 
                        <a href="#contact" className="ml-2 underline text-green-800 hover:text-green-600 transition">
                            Contact Us
                        </a>
                    </p>
                </motion.div>
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
        </section>
    );
}

export default FAQ;
