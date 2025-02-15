import a1 from "../assets/a1.jpg";
import a2 from "../assets/a2.jpg";
import a3 from "../assets/a3.jpg";
import i1 from "../assets/i1.jpg";
import i2 from "../assets/i2.jpg";
import i3 from "../assets/i3.jpg";
import { Leaf, RecycleIcon, Globe } from "lucide-react";
import imj1 from "../assets/imj1.jpg";
import imj2 from "../assets/imj2.jpg";
import imj3 from "../assets/imj3.jpg";
export const impacts = [
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

export const values = [
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

export const initiatives = [
  {
    year: 2021,
    title: "Campus Recycling Champions",
    description:
      "Engaging students and staff in recycling programs across campuses. Together, we're building a sustainable future through education and action.",
    imgSrc: imj1,

    imgAlt: "Students and staff participating in a campus recycling event.",
    icon: RecycleIcon,
    stats: { impact: "2,500kg", participants: "1,200+", locations: "5" },
  },
  {
    year: 2022,
    title: "Pick the Plastic",
    description:
      "A community-driven initiative to reduce plastic waste in our oceans and waterways. Every piece of plastic collected is one less threat to marine life.",
    imgSrc: imj2,
    imgAlt: "Community members collecting plastic waste from a beach.",
    icon: Globe,
    stats: { impact: "3,800kg", participants: "2,000+", locations: "8" },
  },
  {
    year: 2023,
    title: "Community Recycling",
    description:
      "Collaborating with local communities to enhance recycling efforts and create sustainable waste management solutions.",
    imgSrc: imj3,
    imgAlt: "Local community members sorting recyclables.",
    icon: Leaf,
    stats: { impact: "5,200kg", participants: "3,500+", locations: "12" },
  },
];
