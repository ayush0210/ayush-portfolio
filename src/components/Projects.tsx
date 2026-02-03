'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, ExternalLink, Smartphone, Globe, Cpu, ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Interactive Learning Platform",
      subtitle: "React.js Learning Application",
      description: "Architected a responsive React.js frontend with reusable UI components and custom hooks, achieving 40% faster development cycles.",
      technologies: ["React.js", "TypeScript", "Material-UI", "React Query"],
      features: [
        "40% faster development cycles",
        "98% positive feedback",
        "Real-time synchronization"
      ],
      githubUrl: "https://github.com/ayush0210/quickquizz-frontend",
      icon: <Globe className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-500",
      accentColor: "cyan"
    },
    {
      title: "UF Parenting Assistant",
      subtitle: "Geofencing & AI-Driven App",
      description: "Cross-platform React Native app with location-based tips, real-time WebSocket updates, and OpenAI-powered voice assistant.",
      technologies: ["React Native", "Express.js", "WebSocket", "OpenAI API"],
      features: [
        "AI-powered voice assistant",
        "Geofencing features",
        "Offline-first architecture"
      ],
      githubUrl: "",
      icon: <Smartphone className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-500",
      accentColor: "purple"
    },
    {
      title: "Daily News Android App",
      subtitle: "Native Android Application",
      description: "Android application with Clean Architecture and MVVM patterns, providing seamless news reading with offline capabilities.",
      technologies: ["Kotlin", "Retrofit", "Room Database", "MVVM"],
      features: [
        "Clean Architecture",
        "Offline reading",
        "Real-time updates"
      ],
      githubUrl: "https://github.com/ayush0210/-Daily-news-android",
      icon: <Cpu className="w-6 h-6" />,
      gradient: "from-indigo-500 to-purple-500",
      accentColor: "indigo"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // 3D Card Component
  const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 300, damping: 30 });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 300, damping: 30 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    return (
      <motion.div
        ref={cardRef}
        variants={itemVariants}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative group"
      >
        <div className="h-full glass rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-500">
          {/* Card Header with gradient */}
          <div className={`relative h-40 bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between`}>
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                backgroundSize: '20px 20px'
              }} />
            </div>

            <div className="relative z-10 flex justify-between items-start">
              <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                {project.icon}
              </div>
              {project.githubUrl ? (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              ) : (
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-medium">
                  Private
                </span>
              )}
            </div>

            <div className="relative z-10">
              <p className="text-white/80 text-sm font-medium mb-1">{project.subtitle}</p>
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
            </div>
          </div>

          {/* Card Content */}
          <div className="p-6">
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              {project.description}
            </p>

            {/* Features */}
            <div className="mb-5 space-y-2">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm">
                  <div className={`w-1.5 h-1.5 rounded-full bg-${project.accentColor}-500`} />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/5 text-gray-300 border border-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Button */}
            {project.githubUrl ? (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/5 text-white font-medium hover:bg-white/10 transition-colors group/btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Github className="w-4 h-4" />
                View Source
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </motion.a>
            ) : (
              <div className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/5 text-gray-500 font-medium">
                <Github className="w-4 h-4" />
                Private Repository
              </div>
            )}
          </div>

          {/* Hover glow effect */}
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none rounded-2xl`} />
        </div>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -left-32 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full glass text-indigo-400 text-sm font-medium mb-4"
          >
            My Work
          </motion.span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Showcasing scalable applications and innovative solutions I&apos;ve built
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ perspective: 1000 }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass rounded-2xl p-8 max-w-xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-3">
              Explore More Projects
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Check out my GitHub for more projects, code samples, and open source contributions.
            </p>
            <motion.a
              href="https://github.com/ayush0210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
              View GitHub Profile
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
