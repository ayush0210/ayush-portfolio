'use client';

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Mail, Code, Download, ChevronDown, Sparkles } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = useRef<HTMLElement>(null);

  const roles = [
    'Android Developer',
    'Mobile Engineer',
    'Full Stack Developer',
    'Software Architect'
  ];

  // Smooth spring animation for mouse movement
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  // Parallax transforms
  const rotateX = useTransform(y, [-300, 300], [5, -5]);
  const rotateY = useTransform(x, [-300, 300], [-5, 5]);

  // Typewriter effect
  useEffect(() => {
    const currentText = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole, roles]);

  // Mouse tracking
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToContact = () => {
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
  };

  // Particle component
  const Particle = ({ delay, size, left, top }: { delay: number; size: number; left: string; top: string }) => (
    <motion.div
      className="absolute rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
      style={{ width: size, height: size, left, top }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.6, 0],
        scale: [0, 1, 0],
        y: [0, -100, -200],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeOut"
      }}
    />
  );

  return (
    <section
      ref={containerRef}
      id="home"
      className="min-h-screen relative overflow-hidden flex items-center pt-20"
      onMouseMove={handleMouseMove}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[#0a0a0f]">
        {/* Gradient orbs */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 70%)',
            left: '10%',
            top: '20%',
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)',
            right: '10%',
            bottom: '20%',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Particle
            key={i}
            delay={i * 0.3}
            size={Math.random() * 6 + 2}
            left={`${Math.random() * 100}%`}
            top={`${Math.random() * 100}%`}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-gray-300">Available for opportunities</span>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-white">Hi, I&apos;m </span>
              <span className="gradient-text">Ayush</span>
              <br />
              <span className="text-3xl lg:text-4xl text-gray-400 font-normal flex items-center gap-2 mt-4">
                <Sparkles className="w-6 h-6 text-indigo-400" />
                <span className="text-indigo-400">{displayText}</span>
                <span className="w-0.5 h-8 bg-indigo-400 cursor-blink" />
              </span>
            </motion.h1>

            <motion.p
              className="text-lg lg:text-xl text-gray-400 mb-8 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              2+ years delivering <span className="text-indigo-400">scalable solutions</span> for millions of users. Strong CS fundamentals in building <span className="text-purple-400">fault-tolerant, distributed applications</span> with end-to-end ownership.
            </motion.p>

            {/* Tech stack pills */}
            <motion.div
              className="flex flex-wrap gap-2 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {['Kotlin', 'Android SDK', 'React Native', 'TypeScript', 'Node.js'].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-full glass text-gray-300 hover:text-white hover:border-indigo-500/50 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                onClick={scrollToProjects}
                className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-semibold flex items-center justify-center gap-3 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-2 text-white">
                  <Code size={20} />
                  View My Work
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button
                onClick={scrollToContact}
                className="px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 glass text-white hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail size={20} />
                Get in Touch
              </motion.button>

              <motion.a
                href="/resume.pdf"
                download
                className="px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 border border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={20} />
                Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image with 3D effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center relative"
            style={{ perspective: 1000 }}
          >
            <motion.div
              className="relative"
              style={{ rotateX, rotateY }}
            >
              {/* Glow ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.5), rgba(168, 85, 247, 0.5))',
                  filter: 'blur(40px)',
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Profile container */}
              <motion.div
                className="relative w-72 h-72 lg:w-96 lg:h-96"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Animated border */}
                <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 animate-spin-slow" style={{ animationDuration: '8s' }}>
                  <div className="w-full h-full rounded-full bg-[#0a0a0f]" />
                </div>

                {/* Image */}
                <div className="absolute inset-2 rounded-full overflow-hidden">
                  <img
                    src="/images/profile.jpg"
                    alt="Ayush Mishra"
                    className="w-full h-full object-cover"
                    style={{
                      display: 'block',
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                  />
                </div>

                {/* Floating icons */}
                <motion.div
                  className="absolute -top-4 -right-4 p-3 rounded-xl glass"
                  animate={{ y: [-5, 5, -5], rotate: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-2xl">&#128241;</span>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 p-3 rounded-xl glass"
                  animate={{ y: [5, -5, 5], rotate: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <span className="text-2xl">&#128187;</span>
                </motion.div>

                <motion.div
                  className="absolute top-1/2 -right-8 p-3 rounded-xl glass"
                  animate={{ x: [-5, 5, -5] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <span className="text-2xl">&#9889;</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-gray-500 cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() => {
              const element = document.getElementById('about');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <span className="text-sm">Scroll to explore</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
