import React from "react";
import { motion } from "framer-motion";
import { Instagram, Twitter, Facebook, ArrowRight } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-white py-20">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-50 rounded-full translate-x-1/2 translate-y-1/2 opacity-50" />

      <motion.div
        className="container mx-auto px-6 relative max-w-6xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          variants={itemVariants}
        >
          <motion.div
            className="mb-8 md:mb-0 text-center md:text-left"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-800 via-green-600 to-green-400 bg-clip-text text-transparent mb-4">
              Green Janitors
            </h2>
            <p className="text-green-700 max-w-md">
              Empowering sustainable cleaning practices and reducing
              environmental impact, one janitor at a time.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12"
            variants={itemVariants}
          >
            <div className="flex flex-col space-y-4">
              <h3 className="text-lg font-semibold text-green-800">
                Quick Links
              </h3>
              {["About", "Programs", "Contact"].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="group flex items-center text-green-700 hover:text-green-600 transition"
                  whileHover={{ x: 5 }}
                >
                  <ArrowRight className="mr-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16 pt-8 border-t border-green-100 flex flex-col md:flex-row justify-between items-center"
          variants={itemVariants}
        >
          <div className="text-green-700 mb-4 md:mb-0">
            &copy; {currentYear} Green Janitors Sustainable Initiative. All
            rights reserved.
          </div>

          <div className="flex space-x-6">
            {[
              {
                Icon: Instagram,
                link: "https://www.instagram.com/greenjanitors/",
              },
              { Icon: Twitter, link: "https://x.com/greenjanitors" },
              {
                Icon: Facebook,
                link: "https://web.facebook.com/greenjanitors",
              },
            ].map(({ Icon, link }) => (
              <motion.a
                key={link}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 hover:text-green-600"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
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
          ease: "easeInOut",
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
          ease: "easeInOut",
        }}
      />
    </section>
  );
}

export default Footer;
