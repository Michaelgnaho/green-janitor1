import React from 'react';
import { motion } from 'framer-motion';
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
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
          <h3 className="text-xl sm:text-2xl font-bold text-emerald-800 mb-2 sm:mb-3">{title}</h3>
          <p className="text-sm sm:text-base text-emerald-700 mb-3 sm:mb-4">{description}</p>
          
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
            "radial-gradient(circle at 0% 0%, #059669 0%, transparent 50%)"
          ],
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
      />
    </motion.div>
  );
  
  function About() {
    const values = [
      {
        title: "Environmental Responsibility",
        description: "Leading the way in sustainable cleaning practices and waste reduction strategies.",
        stats: "50% Less Waste",
      image: "https://scontent.flos1-2.fna.fbcdn.net/v/t39.30808-6/353425144_575115068129279_3248530491914144461_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHM44jwlMaKRJqYND_LNrkNQ6duq58Cs1VDp26rnwKzVQ3f_LaybcGUbYq36xYZzo_utBDdAxUPhO_NdL3nyBqA&_nc_ohc=pXCTM6LjUo8Q7kNvgF6shrN&_nc_zt=23&_nc_ht=scontent.flos1-2.fna&_nc_gid=Ap57XQ1rmMtHdkYNQRptzUx&oh=00_AYCCLZKPa2HQ51ehRCb1olRnPdkrH8o0F_8TXYfufbbxTw&oe=6786E502"
  
      },
      {
        title: "Community Engagement",
        description: "Building stronger communities through education and collaborative initiatives.",
        stats: "10K+ Members",
      image: "https://scontent.flos1-2.fna.fbcdn.net/v/t39.30808-6/379063754_626524296321689_7510548529734163189_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFJtk7fZt9XgoMjOyZecwHEobXDXX0sYe6htcNdfSxh7oS_XxFhI__0TXvYtilIm0vawd1mwZ9sdemnGIwOpRLx&_nc_ohc=y-RrmKy-uMIQ7kNvgGOD7Tm&_nc_zt=23&_nc_ht=scontent.flos1-2.fna&_nc_gid=AQjOWAd--ZZRiE397GGB-Mz&oh=00_AYBG1vcx_2QV8usmAC20I-6NKxabTciCSsfHvFAZuUIQOg&oe=6786E5DF"
  
      },
      {
        title: "Innovation in Sustainability",
        description: "Pioneering new approaches to environmental conservation and green cleaning.",
        stats: "15+ Programs",
      image: "https://scontent.flos1-1.fna.fbcdn.net/v/t39.30808-6/467693317_18063994609750377_6272331288540496934_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHlXg5ULccenoo4FixtkEO74uQVEPZ7gW7i5BUQ9nuBbmC3n4muNBXTcnPscBBIr3qe_GrMXX8Qfnp7fSde4G1y&_nc_ohc=cGftY31uywkQ7kNvgHZQuyA&_nc_zt=23&_nc_ht=scontent.flos1-1.fna&_nc_gid=AzDwVm1I6SUGUkkuBtSR5hf&oh=00_AYCkmBnp0E_cHWdLS8jaG7yuuKwo6pGmowbAJBE8hhkNYA&oe=6786DB67"
  
      }
    ];
    const impacts = [
      {
        title: "Plastic Reduction",
        description: "Successfully eliminated single-use plastics from our cleaning processes.",
        stats: "1M+ Bottles Saved",
      image: "https://scontent.flos1-2.fna.fbcdn.net/v/t39.30808-6/353415485_575113104796142_684609520369874206_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEBYBPhSC1RGZMGNVDkbty5FnUPF-bMxQUWdQ8X5szFBendxJN5GfGN2bl_yJ7Q6t-eCsj0uXCnZFjVCn97e-KL&_nc_ohc=PYeM-y8udH8Q7kNvgFiDFe_&_nc_zt=23&_nc_ht=scontent.flos1-2.fna&_nc_gid=AePc5pxK-ni6PJjgqyQtCmF&oh=00_AYAEU0tpH7L6rdjyj1jeboryYru_bWfn3exFjVXuRfeI1g&oe=6786C319"
      },
      {
        title: "Community Events",
        description: "Regular workshops and training sessions for sustainable practices.",
        stats: "500+ Events",
      image: "https://scontent.flos1-2.fna.fbcdn.net/v/t39.30808-6/353802431_575114911462628_8621360281744602297_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHseXVwSwqZJz0cJMqPasf_alNpRxqd9JBqU2lHGp30kPDsTPlaiLPkdLcMldbZODEKpng7cXGZSiBqMtSCS4pv&_nc_ohc=WG-1rn7wsPcQ7kNvgGHyUyK&_nc_zt=23&_nc_ht=scontent.flos1-2.fna&_nc_gid=Aqj2w4yel07ok4QKkCvveyr&oh=00_AYDWv_y3oPtZYWE771eY9oXarCNbXxl8-28HG7oT7_GDJw&oe=6786CA62",
  
      },
      {
        title: "Education Impact",
        description: "Empowering communities with environmental knowledge and skills.",
        stats: "20K+ Educated",
      image: "https://scontent.flos1-1.fna.fbcdn.net/v/t39.30808-6/353655574_575113831462736_477134249794823788_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHK3rsDBG3U7An28a_gK4YtSiizaWe9D25KKLNpZ70PbuYrWZmwNXBJNEJiK48S6ehPld8gud21pzI4gu070Pj5&_nc_ohc=PtswqZ8ScZkQ7kNvgGg4ztS&_nc_zt=23&_nc_ht=scontent.flos1-1.fna&_nc_gid=AvbXL_5blSDMIv5jLQtujx_&oh=00_AYDmaWTCEoeoeAOngszUXTq3vQ8tw3bVT-HQi7McnfvUWg&oe=6786D959",
  
      }
    ];
  
    return (
      <section className="relative min-h-screen py-12 sm:py-20 overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-emerald-50" id='about'>
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
            <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-emerald-800 via-emerald-600 to-emerald-400 bg-clip-text text-transparent inline-block mb-4 sm:mb-6">
              About us
              {/* <span className="block text-2xl sm:text-4xl mt-2">Sustainable Initiative</span> */}
            </h1>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-emerald-800 via-emerald-600 to-emerald-400 mx-auto rounded-full mb-6 sm:mb-8" />
            <p className="text-lg sm:text-xl text-emerald-700 slide-left max-w-3xl mx-auto leading-relaxed px-4">
              Our mission is to revolutionize the cleaning industry through sustainable practices
              and community engagement, creating a cleaner, greener future for generations to come.
            </p>
          </motion.div>
  
          {/* Values Section */}
          <motion.div 
            className="mb-12 sm:mb-20"
            variants={itemVariants}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-emerald-800 mb-8 sm:mb-12">Our Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {values.map((value, index) => (
                <ImageCard key={index} {...value} />
              ))}
            </div>
          </motion.div>
  
          {/* Impact Section */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-emerald-800 mb-8 sm:mb-12">Our Impact</h2>
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
            className={`hidden sm:block absolute w-${i + 2} h-${i + 2} bg-emerald-${200 + i * 100} rounded-full`}
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
              ease: "easeInOut"
            }}
          />
        ))}
      </section>
    );
  }
  
  export default About;