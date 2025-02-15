import React from "react";
import { motion } from "framer-motion";
import TeamMemberCard from "../components/UI/TeamMemberCard.jsx";
import Janet from "../assets/janet.jpg";
import bello from "../assets/bello.jpg";
import daniel from "../assets/daniel.jpg";
import musodiq from "../assets/musodiq.jpg";
import fausiat from "../assets/fausiat.jpg";
import eniola from "../assets/eniola.jpg";
import ashade from "../assets/ashade.jpg";

const teamMembers = [
  {
    name: "Ashade Abdulsalam Abiodun",
    role: "Founder & CEO",
    bio: "Ashade Abdulsalam Abiodun is an Accountant, Environmental Ambassador, climate change youth advocate, and environmental sustainability consultant for corporate organizations and NGOs with pragmatic solutions to environmental issues. He is an Associate Environment and Safety Manager (AESM) and a Health, Safety and Environment 1,2 and 3 Holder. Ashade is a member of the Association of Nigeria Accountants of Nigeria (ANAN), a member of the Nigeria Institute of Management (NIM), and a Certified Solid Waste Manager (SWM). A 2024 Mandela Washington Fellow and a member of the Technical Working Group on Youth Engagement in the Ministry of Youth and Social Development, Lagos State Government. He obtained his first and second degrees (BSc and MSc) in accounting from Lagos State University, Ojo, and a certification in Leadership in Public Management from Boise State University, Idaho, USA. He is the founder and Executive Director of the Green Janitors Sustainable Initiative and serves as the Managing Director for Janirak Recyclers Global Enterprises. He is also the founder of CAMPUS RECYCLING CHAMPIONS, engaging tertiary students in advocacy for a sustainable environment, climate action, and Circular Economy. He has been a Lead Trainer for the LSETF-USADF Employability Program on Waste Economy and Recycling for Youths and a Facilitator at the Lagos Ibile Youth Academy, focusing on climate change and environmental sustainability.",
    imgSrc: ashade,
    imgAlt: "Profile picture of Ashade Abdulsalam Abiodun",
  },
  {
    name: "Janet Konko",
    role: "Executive Secretary",
    bio: "Janet Konko oversees the administrative functions and ensures smooth operations within the organization.",
    imgSrc: Janet,
    imgAlt: "Profile picture of Janet Konko",
  },
  {
    name: "Sheriff Bello",
    role: "Project Coordinator",
    bio: "Sheriff Bello coordinates various projects, ensuring they are completed on time and meet the organization's standards.",
    imgSrc: bello,
    imgAlt: "Profile picture of Sheriff Bello",
  },
  {
    name: "Daniel Padonu",
    role: "Legal Adviser",
    bio: "Daniel Padonu provides legal advice to the organization, ensuring compliance with laws and regulations.",
    imgSrc: daniel,
    imgAlt: "Profile picture of Daniel Padonu",
  },
  {
    name: "Musodiq AbdulHameed",
    role: "Creative Director",
    bio: "Musodiq AbdulHameed leads the creative team, developing innovative ideas to promote the organization's mission.",
    imgSrc: musodiq,
    imgAlt: "Profile picture of Musodiq AbdulHameed",
  },
  {
    name: "Orunsolu Fausiyat",
    role: "Lead Advocate",
    bio: "Orunsolu Fausiyat leads advocacy efforts, raising awareness about environmental sustainability and climate action.",
    imgSrc: fausiat,
    imgAlt: "Profile picture of Orunsolu Fausiyat",
  },
  {
    name: "Eniola Lawal",
    role: "Media and Communication Manager",
    bio: "Eniola Lawal manages media relations and communication strategies to effectively convey the organization's messages.",
    imgSrc: eniola,
    imgAlt: "Profile picture of Eniola Lawal",
  },
];

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
            Our dedicated team of experts working together to create a
            sustainable future
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
