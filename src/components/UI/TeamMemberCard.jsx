import React, { useState } from "react";
import { motion } from "framer-motion";

import { Linkedin, Mail, Twitter } from "lucide-react";

function TeamMemberCard({ name, role, bio, imgSrc, imgAlt }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = () => setIsExpanded(!isExpanded);

  const truncatedBio = bio.split(" ").slice(0, 20).join(" ");

  return (
    <motion.div
      className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg relative group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        boxShadow:
          "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
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
            opacity: [1, 0.5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="text-center">
        <h3 className="text-xl sm:text-2xl font-bold text-green-800 mb-2">
          {name}
        </h3>
        <p className="text-sm sm:text-base text-green-600 font-medium mb-3 sm:mb-4">
          {role}
        </p>
        <p className="text-sm sm:text-base text-green-700 leading-relaxed mb-4 sm:mb-6">
          {isExpanded ? bio : truncatedBio}
          {bio.split(" ").length > 100 && (
            <span
              onClick={toggleReadMore}
              className="text-blue-500 cursor-pointer"
            >
              {isExpanded ? " Read less" : "... Read more"}
            </span>
          )}
        </p>

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
}

export default TeamMemberCard;
