import React from "react";
import { motion } from "framer-motion";
import a1 from "../assets/a1.jpg";
import a2 from "../assets/a2.jpg";
import a3 from "../assets/a3.jpg";
import i1 from "../assets/i1.jpg";
import i2 from "../assets/i2.jpg";
import i3 from "../assets/i3.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const ImageCard = ({ image, title, description, stats }) => (
  <motion.div
    className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500"
    whileHover={{ y: -5 }}
  >
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-900/50 to-emerald-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <div className="relative aspect-[4/3] overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
    </div>

    <div className="relative p-4 sm:p-6">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 to-white opacity-90" />

      <div className="relative">
        <h3 className="text-xl slide-right sm:text-2xl font-bold text-emerald-800 mb-2 sm:mb-3">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-emerald-700 mb-3 sm:mb-4">
          {description}
        </p>

        {stats && (
          <div className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-800 via-emerald-600 to-emerald-400 bg-clip-text text-transparent">
            {stats}
          </div>
        )}
      </div>
    </div>

    <motion.div
      className="absolute inset-0 opacity-0 group-hover:opacity-20"
      initial={false}
      animate={{
        background: [
          "radial-gradient(circle at 100% 100%, #059669 0%, transparent 50%)",
          "radial-gradient(circle at 0% 0%, #059669 0%, transparent 50%)",
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
  </motion.div>
);

function About() {
  const values = [
    {
      title: "Environmental Responsibility",
      description:
        "Leading the way in sustainable cleaning practices and waste reduction strategies.",
      stats: "50% Less Waste",
      image: a1,
    },
    {
      title: "Community Engagement",
      description:
        "Building stronger communities through education and collaborative initiatives.",
      stats: "10K+ Members",
      image: a2,
    },
    {
      title: "Innovation in Sustainability",
      description:
        "Pioneering new approaches to environmental conservation and green cleaning.",
      stats: "15+ Programs",
      image: a3,
    },
  ];
  const impacts = [
    {
      title: "Plastic Reduction",
      description:
        "Successfully eliminated single-use plastics from our cleaning processes.",
      stats: "1M+ Bottles Saved",
      image: i1,
    },
    {
      title: "Community Events",
      description:
        "Regular workshops and training sessions for sustainable practices.",
      stats: "500+ Events",
      image: i2,
    },
    {
      title: "Education Impact",
      description:
        "Empowering communities with environmental knowledge and skills.",
      stats: "20K+ Educated",
      image: i3,
    },
  ];

  return (
    <section
      className="relative min-h-screen py-12 sm:py-20 overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-emerald-50"
      id="about"
    >
      {/* Decorative Elements - Hidden on mobile */}
      <div className="hidden sm:block absolute top-0 left-0 w-96 h-96 bg-emerald-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-30" />
      <div className="hidden sm:block absolute bottom-0 right-0 w-96 h-96 bg-emerald-100 rounded-full translate-x-1/2 translate-y-1/2 opacity-30" />

      <motion.div
        className="container mx-auto px-4 sm:px-6 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Header Section */}
        <motion.div
          className="text-center mb-12 sm:mb-20"
          variants={itemVariants}
        >
          <h1 className="text-4xl slide-left  sm:text-6xl font-bold bg-gradient-to-r from-emerald-800 via-emerald-600 to-emerald-400 bg-clip-text text-transparent inline-block mb-4 sm:mb-6">
            About us
            {/* <span className="block text-2xl sm:text-4xl mt-2">Sustainable Initiative</span> */}
          </h1>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-emerald-800 via-emerald-600 to-emerald-400 mx-auto rounded-full mb-6 sm:mb-8 slide-left" />
          <p className="text-lg sm:text-xl text-emerald-700 slide-left max-w-3xl mx-auto leading-relaxed px-4">
            Our mission is to revolutionize the cleaning industry through
            sustainable practices and community engagement, creating a cleaner,
            greener future for generations to come.
          </p>
        </motion.div>

        {/* Values Section */}
        <motion.div className="mb-12 sm:mb-20" variants={itemVariants}>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-emerald-800 mb-8 sm:mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <ImageCard key={index} {...value} />
            ))}
          </div>
        </motion.div>

        {/* Impact Section */}
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-emerald-800 mb-8 sm:mb-12">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {impacts.map((impact, index) => (
              <ImageCard key={index} {...impact} />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Elements - Adjusted for mobile */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className={`hidden sm:block absolute w-${i + 2} h-${
            i + 2
          } bg-emerald-${200 + i * 100} rounded-full`}
          style={{
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 90}%`,
          }}
          animate={{
            y: [0, Math.random() * 30 - 15],
            x: [0, Math.random() * 30 - 15],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </section>
  );
}

export default About;
