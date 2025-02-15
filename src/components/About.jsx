// import React from "react";
// import { motion } from "framer-motion";

// import { values, impacts } from "./constant";

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.2 },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6 },
//   },
// };

// const ImageCard = ({ image, title, description, stats }) => (
//   <motion.div
//     className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500"
//     whileHover={{ y: -5 }}
//   >
//     <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-900/50 to-emerald-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//     <div className="relative aspect-[4/3] overflow-hidden">
//       <img
//         src={image}
//         alt={title}
//         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//       />
//     </div>

//     <div className="relative p-4 sm:p-6">
//       <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 to-white opacity-90" />

//       <div className="relative">
//         <h3 className="text-xl slide-right sm:text-2xl font-bold text-emerald-800 mb-2 sm:mb-3">
//           {title}
//         </h3>
//         <p className="text-sm sm:text-base text-emerald-700 mb-3 sm:mb-4">
//           {description}
//         </p>

//         {stats && (
//           <div className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-800 via-emerald-600 to-emerald-400 bg-clip-text text-transparent">
//             {stats}
//           </div>
//         )}
//       </div>
//     </div>

//     <motion.div
//       className="absolute inset-0 opacity-0 group-hover:opacity-20"
//       initial={false}
//       animate={{
//         background: [
//           "radial-gradient(circle at 100% 100%, #059669 0%, transparent 50%)",
//           "radial-gradient(circle at 0% 0%, #059669 0%, transparent 50%)",
//         ],
//       }}
//       transition={{
//         duration: 2,
//         repeat: Infinity,
//         repeatType: "reverse",
//       }}
//     />
//   </motion.div>
// );

// function About() {
//   return (
//     <section
//       className="relative min-h-screen py-12 sm:py-20 overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-emerald-50"
//       id="about"
//     >
//       {/* Decorative Elements - Hidden on mobile */}
//       <div className="hidden sm:block absolute top-0 left-0 w-96 h-96 bg-emerald-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-30" />
//       <div className="hidden sm:block absolute bottom-0 right-0 w-96 h-96 bg-emerald-100 rounded-full translate-x-1/2 translate-y-1/2 opacity-30" />

//       <motion.div
//         className="container mx-auto px-4 sm:px-6 relative"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={containerVariants}
//       >
//         {/* Header Section */}
//         <motion.div
//           className="text-center mb-12 sm:mb-20"
//           variants={itemVariants}
//         >
//           <h1 className="text-4xl slide-left  sm:text-6xl font-bold bg-gradient-to-r from-emerald-800 via-emerald-600 to-emerald-400 bg-clip-text text-transparent inline-block mb-4 sm:mb-6">
//             About us
//             {/* <span className="block text-2xl sm:text-4xl mt-2">Sustainable Initiative</span> */}
//           </h1>
//           <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-emerald-800 via-emerald-600 to-emerald-400 mx-auto rounded-full mb-6 sm:mb-8 slide-left" />
//           <p className="text-lg sm:text-xl text-emerald-700 slide-left max-w-3xl mx-auto leading-relaxed px-4">
//             Our mission is to revolutionize the cleaning industry through
//             sustainable practices and community engagement, creating a cleaner,
//             greener future for generations to come.
//           </p>
//         </motion.div>

//         {/* Values Section */}

//       </motion.div>

//       {/* Floating Elements - Adjusted for mobile */}
//       {[...Array(5)].map((_, i) => (
//         <motion.div
//           key={i}
//           className={`hidden sm:block absolute w-${i + 2} h-${
//             i + 2
//           } bg-emerald-${200 + i * 100} rounded-full`}
//           style={{
//             left: `${Math.random() * 90}%`,
//             top: `${Math.random() * 90}%`,
//           }}
//           animate={{
//             y: [0, Math.random() * 30 - 15],
//             x: [0, Math.random() * 30 - 15],
//           }}
//           transition={{
//             duration: 2 + Math.random() * 2,
//             repeat: Infinity,
//             repeatType: "reverse",
//             ease: "easeInOut",
//           }}
//         />
//       ))}
//     </section>
//   );
// }

// export default About;

import React from "react";
import { values, impacts } from "./constant";

import { motion } from "framer-motion";
import {
  ChevronDown,
  Leaf,
  Recycle,
  Users,
  Globe,
  Heart,
  Brain,
} from "lucide-react";

const ThematicArea = ({ icon: Icon, title }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
  >
    <Icon className="w-5 h-5 text-emerald-600" />
    <span className="text-emerald-800 font-medium">{title}</span>
  </motion.div>
);
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

const MissionCard = ({ title, description, icon: Icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
    className="relative group"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-300 opacity-0 group-hover:opacity-100" />
    <div className="relative bg-white p-6 rounded-2xl shadow-xl group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300 h-80 w-90">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-emerald-100 rounded-lg">
          <Icon className="w-6 h-6 text-emerald-600" />
        </div>
        <h3 className="text-2xl font-bold text-emerald-800">{title}</h3>
      </div>
      <p className="text-emerald-700 leading-relaxed ">{description}</p>
    </div>
  </motion.div>
);
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
  const thematicAreas = [
    { icon: Leaf, title: "Sustainable Environment" },
    { icon: Users, title: "Youth Empowerment" },
    { icon: Brain, title: "Innovation" },
    { icon: Recycle, title: "Circular Economy" },
    { icon: Globe, title: "Education" },
    { icon: Heart, title: "Health" },
  ];

  return (
    <section className="relative min-h-screen py-16 overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -left-48 -top-48 bg-emerald-200/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute w-96 h-96 -right-48 top-1/2 bg-emerald-300/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute w-96 h-96 left-1/2 -bottom-48 bg-emerald-400/30 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-emerald-800 via-emerald-600 to-emerald-400 bg-clip-text text-transparent inline-block mb-6">
            Green Janitors
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-emerald-800 via-emerald-600 to-emerald-400 mx-auto rounded-full mb-8 max-w-md"
          />
          <p className="text-xl md:text-2xl text-emerald-700 max-w-4xl mx-auto leading-relaxed font-light">
            Youth environmental allies standing guard for our planet's future.
            We show up wherever the environment faces danger, from protesting
            atomic testing to combating climate change and pollution.
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="mt-8"
          >
            <ChevronDown className="w-8 h-8 text-emerald-600 mx-auto" />
          </motion.div>
        </motion.div>

        {/* Mission, Vision, Objective Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <MissionCard
            title="Mission"
            description="To reduce plastic pollution, advocate for a circular economy and sustainable environment through recycling and waste up cycling."
            icon={Globe}
            delay={0.2}
          />
          <MissionCard
            title="Vision"
            description="To achieve an enabling environment that is sustainable through waste management and community engagement."
            icon={Leaf}
            delay={0.4}
          />
          <MissionCard
            title="Objective"
            description="To create an optimal business environment for sustainable growth, job creation and innovations through recycling of environmental, industrial, climate and energy waste."
            icon={Recycle}
            delay={0.6}
          />
        </div>

        {/* Thematic Areas */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-800 mb-8">
            Thematic Areas
          </h2>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {thematicAreas.map((area, index) => (
              <ThematicArea key={index} {...area} />
            ))}
          </motion.div>
        </motion.div>

        {/* Values and Impact sections remain as before */}
        {/* Your existing ImageCard grid sections here */}
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
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}

export default About;
