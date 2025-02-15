// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { initiatives } from "./constant";

// const ProjectCard = ({ initiative, isSelected, onClick }) => {
//   const Icon = initiative.icon;

//   return (
//     <motion.button
//       className={`w-full p-4 md:p-6 rounded-xl md:rounded-2xl transition-all duration-300 text-left relative overflow-hidden group
//                 ${
//                   isSelected
//                     ? "bg-gradient-to-r from-green-600 to-green-400 text-white shadow-xl scale-105"
//                     : "bg-white text-green-800 hover:bg-green-50"
//                 }`}
//       onClick={onClick}
//       whileHover={{ scale: 1.02 }}
//       whileTap={{ scale: 0.98 }}
//       id="programs"
//     >
//       <motion.div
//         className="absolute inset-0 opacity-0 group-hover:opacity-20"
//         initial={false}
//         animate={{
//           background: [
//             "radial-gradient(circle at 100% 100%, #22c55e 0%, transparent 50%)",
//             "radial-gradient(circle at 0% 0%, #22c55e 0%, transparent 50%)",
//           ],
//         }}
//         transition={{
//           duration: 2,
//           repeat: Infinity,
//           repeatType: "reverse",
//         }}
//       />
//       <div className="flex items-center gap-2 md:gap-4 mb-1 md:mb-2">
//         <Icon
//           className={`w-5 h-5 md:w-6 md:h-6 ${
//             isSelected ? "text-white" : "text-green-600"
//           }`}
//         />
//         <span className="text-xl md:text-2xl font-bold">{initiative.year}</span>
//       </div>
//       <h3
//         className={`text-base md:text-lg font-semibold ${
//           isSelected ? "text-white" : "text-green-700"
//         }`}
//       >
//         {initiative.title}
//       </h3>
//     </motion.button>
//   );
// };

// const StatBox = ({ label, value }) => (
//   <div className="bg-green-50 rounded-lg md:rounded-xl p-3 md:p-4 text-center">
//     <div className="text-lg md:text-2xl font-bold text-green-600">{value}</div>
//     <div className="text-xs md:text-sm text-green-700 mt-1">{label}</div>
//   </div>
// );

// const Project = () => {
//   const [selectedYear, setSelectedYear] = useState(2021);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.3 },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.6 },
//     },
//   };

//   const selectedInitiative = initiatives.find((i) => i.year === selectedYear);

//   return (
//     <section className="relative min-h-screen bg-gradient-to-br from-green-50 to-white py-12 md:py-20 overflow-hidden px-4 md:px-8">
//       {/* Decorative background elements */}
//       <div className="absolute top-0 left-0 w-48 md:w-96 h-48 md:h-96 bg-green-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-30" />
//       <div className="absolute bottom-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-green-100 rounded-full translate-x-1/2 translate-y-1/2 opacity-30" />

//       <motion.div
//         className="container mx-auto relative"
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//       >
//         <motion.h1
//           className="text-3xl md:text-5xl font-bold text-center bg-gradient-to-r from-green-800 via-green-600 to-green-400 bg-clip-text text-transparent mb-3 md:mb-4"
//           variants={itemVariants}
//         >
//           Our Impact Journey
//         </motion.h1>

//         <motion.div
//           className="w-16 md:w-24 h-1 bg-gradient-to-r from-green-800 via-green-600 to-green-400 mx-auto rounded-full mb-8 md:mb-16"
//           variants={itemVariants}
//         />

//         <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
//           <motion.div className="w-full lg:w-1/3" variants={itemVariants}>
//             <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-3 md:gap-4">
//               {initiatives.map((initiative) => (
//                 <ProjectCard
//                   key={initiative.year}
//                   initiative={initiative}
//                   isSelected={selectedYear === initiative.year}
//                   onClick={() => setSelectedYear(initiative.year)}
//                 />
//               ))}
//             </div>
//           </motion.div>

//           <motion.div className="w-full lg:w-2/3" variants={itemVariants}>
//             <motion.div
//               className="bg-white rounded-xl md:rounded-2xl shadow-xl p-6 md:p-8 backdrop-blur-lg bg-opacity-90"
//               layoutId="content"
//             >
//               {selectedInitiative && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5 }}
//                   key={selectedInitiative.year}
//                   className="space-y-4 md:space-y-6"
//                 >
//                   <motion.h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent">
//                     {selectedInitiative.title}
//                   </motion.h2>

//                   <motion.p className="text-base md:text-xl text-green-800 leading-relaxed">
//                     {selectedInitiative.description}
//                   </motion.p>

//                   <div className="grid grid-cols-3 gap-2 md:gap-4 my-6 md:my-8">
//                     <StatBox
//                       label="Waste Collected"
//                       value={selectedInitiative.stats.impact}
//                     />
//                     <StatBox
//                       label="Participants"
//                       value={selectedInitiative.stats.participants}
//                     />
//                     <StatBox
//                       label="Locations"
//                       value={selectedInitiative.stats.locations}
//                     />
//                   </div>

//                   <motion.div
//                     className="rounded-lg md:rounded-xl overflow-hidden shadow-xl"
//                     whileHover={{ scale: 1.02 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <img
//                       src={selectedInitiative.imgSrc}
//                       alt={selectedInitiative.imgAlt}
//                       className="w-full h-48 md:h-80 object-cover"
//                     />
//                   </motion.div>
//                 </motion.div>
//               )}
//             </motion.div>
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* Floating elements - hidden on mobile */}
//       <motion.div
//         className="hidden md:block absolute left-10 top-1/4 w-4 h-4 bg-green-200 rounded-full"
//         animate={{
//           y: [0, -20, 0],
//         }}
//         transition={{
//           duration: 3,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />
//       <motion.div
//         className="hidden md:block absolute right-10 bottom-1/4 w-6 h-6 bg-green-300 rounded-full"
//         animate={{
//           y: [0, 20, 0],
//         }}
//         transition={{
//           duration: 4,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />
//     </section>
//   );
// };

// export default Project;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { RecycleIcon, Leaf, Globe, ChevronRight } from "lucide-react";
import imj1 from "../assets/imj1.jpg";
import imj2 from "../assets/imj2.jpg";
import imj3 from "../assets/imj3.jpg";

const initiatives = [
  {
    year: 2024,
    title: "Pick the Plastic Project",
    description:
      "A comprehensive initiative focused on reducing plastic waste through community cleanup drives, education, and sustainable alternatives. We work with local communities to remove plastic waste from our environment and create awareness about sustainable alternatives.",
    imgSrc: imj1,
    imgAlt: "Pick the Plastic Project in action",
    icon: RecycleIcon,
    stats: { impact: "5,200kg", participants: "3,500+", locations: "12" },
  },
  {
    year: 2023,
    title: "Campus Recycling Champions",
    description:
      "Empowering students to become environmental leaders through campus-wide recycling programs and sustainability initiatives. Building a network of young environmental advocates across educational institutions.",
    imgSrc: imj2,
    imgAlt: "Campus Recycling Champions",
    icon: Globe,
    stats: { impact: "3,800kg", participants: "2,000+", locations: "8" },
  },
  {
    year: 2022,
    title: "Beyond Recycling",
    description:
      "An innovative program that goes beyond traditional recycling to implement circular economy principles in communities. Teaching valuable skills in waste management and sustainable practices.",
    imgSrc: imj3,
    imgAlt: "Beyond Recycling Initiative",
    icon: Leaf,
    stats: { impact: "2,500kg", participants: "1,200+", locations: "5" },
  },
  {
    year: 2021,
    title: "Youth4Nature",
    description:
      "Engaging young people in nature conservation and environmental protection through hands-on activities and leadership development. Creating the next generation of environmental stewards.",
    imgSrc: imj1,
    imgAlt: "Youth4Nature Program",
    icon: Leaf,
    stats: { impact: "1,800kg", participants: "800+", locations: "3" },
  },
];

const ProjectCard = ({ initiative, isSelected, onClick }) => {
  const Icon = initiative.icon;

  return (
    <motion.button
      className={`w-full p-6 rounded-2xl transition-all duration-500 text-left relative overflow-hidden group
                ${
                  isSelected
                    ? "bg-gradient-to-r from-emerald-600 to-emerald-400 text-white shadow-2xl scale-105"
                    : "bg-white/80 backdrop-blur-sm text-emerald-800 hover:bg-emerald-50"
                }`}
      onClick={onClick}
      whileHover={{ scale: isSelected ? 1.05 : 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="flex items-center gap-4 mb-3">
        <div
          className={`p-2 rounded-lg ${
            isSelected ? "bg-white/20" : "bg-emerald-100"
          }`}
        >
          <Icon
            className={`w-6 h-6 ${
              isSelected ? "text-white" : "text-emerald-600"
            }`}
          />
        </div>
        <span className="text-2xl font-bold">{initiative.year}</span>
        <ChevronRight
          className={`w-5 h-5 ml-auto transform transition-transform duration-300 ${
            isSelected ? "rotate-90 text-white" : "text-emerald-400"
          }`}
        />
      </div>

      <h3
        className={`text-lg font-bold mb-2 ${
          isSelected ? "text-white" : "text-emerald-700"
        }`}
      >
        {initiative.title}
      </h3>

      <p
        className={`text-sm ${
          isSelected ? "text-white/90" : "text-emerald-600"
        } line-clamp-2`}
      >
        {initiative.description.split(".")[0]}
      </p>
    </motion.button>
  );
};

const StatBox = ({ label, value, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="bg-emerald-50 rounded-xl p-4 text-center transform hover:scale-105 transition-transform duration-300"
  >
    <div className="text-2xl font-bold bg-gradient-to-r from-emerald-700 to-emerald-500 bg-clip-text text-transparent">
      {value}
    </div>
    <div className="text-sm text-emerald-700 mt-1 font-medium">{label}</div>
  </motion.div>
);

const Project = () => {
  const [selectedYear, setSelectedYear] = useState(2023);
  const selectedInitiative = initiatives.find((i) => i.year === selectedYear);

  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
        <div className="absolute w-96 h-96 -left-48 top-0 bg-emerald-200/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute w-96 h-96 -right-48 bottom-0 bg-emerald-300/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold bg-gradient-to-r from-emerald-800 via-emerald-600 to-emerald-400 bg-clip-text text-transparent mb-6">
            Our Projects
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-emerald-800 via-emerald-600 to-emerald-400 mx-auto rounded-full mb-8 max-w-md"
          />
          <p className="text-xl text-emerald-700 max-w-3xl mx-auto">
            Discover our initiatives that are making a real impact in
            environmental conservation and community development.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          <motion.div
            className="w-full lg:w-1/3 space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {initiatives.map((initiative) => (
              <ProjectCard
                key={initiative.year}
                initiative={initiative}
                isSelected={selectedYear === initiative.year}
                onClick={() => setSelectedYear(initiative.year)}
              />
            ))}
          </motion.div>

          <div className="w-full lg:w-2/3">
            <motion.div
              layoutId="project-content"
              className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl p-8"
            >
              {selectedInitiative && (
                <motion.div
                  key={selectedInitiative.year}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <motion.h2
                    className="text-4xl font-bold bg-gradient-to-r from-emerald-700 to-emerald-500 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {selectedInitiative.title}
                  </motion.h2>

                  <motion.p
                    className="text-xl text-emerald-800 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {selectedInitiative.description}
                  </motion.p>

                  <div className="grid grid-cols-3 gap-4 my-8">
                    <StatBox
                      label="Waste Collected"
                      value={selectedInitiative.stats.impact}
                      delay={0.3}
                    />
                    <StatBox
                      label="Participants"
                      value={selectedInitiative.stats.participants}
                      delay={0.4}
                    />
                    <StatBox
                      label="Locations"
                      value={selectedInitiative.stats.locations}
                      delay={0.5}
                    />
                  </div>

                  <motion.div
                    className="rounded-xl overflow-hidden shadow-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <img
                      src={selectedInitiative.imgSrc}
                      alt={selectedInitiative.imgAlt}
                      className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>

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
      `}</style>
    </section>
  );
};

export default Project;
