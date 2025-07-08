'use client';

import { motion } from 'framer-motion';
import { Mail, Code, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.h1 
              className="text-4xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Ayush Mishra
              <br />
              <span className="text-yellow-300">Software Developer</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl mb-4 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Building scalable mobile applications with cutting-edge technology
            </motion.p>
            
            <motion.p 
              className="text-lg mb-8 opacity-80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Android Developer with expertise in Kotlin, React Native, and scalable backend systems. 
              Currently pursuing Masters in Computer Science at University of Florida.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <a
                href="#projects"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition-all duration-300 hover:transform hover:-translate-y-1 shadow-lg"
              >
                <Code size={20} />
                View My Work
              </a>
              
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('contact');
                  if (element) {
                    const headerOffset = 80;
                    const elementPosition = element.offsetTop;
                    const offsetPosition = elementPosition - headerOffset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                <Mail size={20} />
                Contact Me
              </a>
              
              <a
                href="/resume.pdf"
                download
                className="border-2 border-yellow-300 text-yellow-300 px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-yellow-300 hover:text-blue-600 transition-all duration-300"
              >
                <Download size={20} />
                Resume
              </a>
            </motion.div>
          </motion.div>
          
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="w-80 h-80 rounded-full bg-white/20 p-4 shadow-2xl overflow-hidden">
                <img
                  src="/images/profile.jpg"
                  alt="Ayush Mishra"
                  className="w-full h-full rounded-full object-cover"
                  style={{
                    display: 'block',
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;