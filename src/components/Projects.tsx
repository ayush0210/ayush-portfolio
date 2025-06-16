'use client';

import { motion } from 'framer-motion';
import { Github, Award, Users, Zap, Star } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const [expandedTech, setExpandedTech] = useState<Record<number, boolean>>({});
  const projects = [
    {
      title: "Interactive Learning Platform",
      subtitle: "React.js Learning Application",
      description: "Architected a responsive React.js frontend with reusable UI components and custom hooks, achieving 40% faster development cycles and real-time content synchronization.",
      image: "/images/projects/learning-platform.jpg",
      technologies: ["React.js", "TypeScript", "Material-UI", "React Query", "Web Speech API", "CSS Modules"],
      features: [
        "40% faster development cycles through reusable components",
        "98% positive feedback on interface responsiveness", 
        "Real-time content synchronization",
        "Accessible design with ARIA attributes",
        "35% reduction in initial load time"
      ],
      githubUrl: "https://github.com/ayush0210/quickquizz-frontend",
      stats: {
        icon: <Award className="w-5 h-5" />,
        value: "React.js",
        label: "Frontend App"
      }
    },
    {
      title: "UF Parenting Assistant App",
      subtitle: "Geofencing & AI-Driven Content",
      description: "Cross-platform app built with React Native that delivers location-based parenting tips, real-time updates via WebSocket, and OpenAI-powered voice assistant.",
      image: "/images/projects/uf-parenting-app.jpg",
      technologies: ["React Native", "Express.js", "MySQL", "WebSocket", "OpenAI API", "Redux"],
      features: [
        "Real-time updates with WebSocket",
        "AI-generated tips using OpenAI API",
        "Geolocation & geofencing features",
        "Offline-first architecture with Async Storage",
        "Voice assistant with speech recognition"
      ],
      githubUrl: "",
      stats: {
        icon: <Zap className="w-5 h-5" />,
        value: "Live",
        label: "UF Research App"
      }
    },
    {
      title: "Daily News Android App",
      subtitle: "Android News Application",
      description: "Android application providing seamless news reading experience with intuitive UI design and efficient data management using modern Android development practices.",
      image: "/images/projects/daily-news.jpg",
      technologies: ["Android", "Kotlin", "Retrofit", "Room Database", "Material Design", "MVVM Architecture"],
      features: [
        "Clean and intuitive user interface",
        "Efficient HTTP requests with Retrofit",
        "Offline reading capabilities with Room Database",
        "MVVM architecture for scalable code",
        "Real-time news updates"
      ],
      githubUrl: "https://github.com/ayush0210/-Daily-news-android",
      stats: {
        icon: <Star className="w-5 h-5" />,
        value: "Android",
        label: "Mobile App"
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing scalable applications and innovative solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                {/* Placeholder for now - replace with actual project screenshots */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-6xl opacity-20">
                    {index === 0 && <Award />}
                    {index === 1 && <Users />}
                    {index === 2 && <Star />}
                  </div>
                </div>
                
                {/* Stats Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-2">
                  <span className="text-blue-600">{project.stats.icon}</span>
                  <div className="text-xs">
                    <div className="font-bold text-gray-800">{project.stats.value}</div>
                    <div className="text-gray-600">{project.stats.label}</div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-sm text-blue-600 font-semibold mb-3">
                  {project.subtitle}
                </p>
                
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 text-sm mb-2">Key Features:</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <Zap className="w-3 h-3 text-blue-600 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {(expandedTech[index] ? project.technologies : project.technologies.slice(0, 4)).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && !expandedTech[index] && (
                      <button
                        onClick={() => setExpandedTech(prev => ({...prev, [index]: true}))}
                        className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-md hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
                      >
                        +{project.technologies.length - 4} more
                      </button>
                    )}
                    {expandedTech[index] && project.technologies.length > 4 && (
                      <button
                        onClick={() => setExpandedTech(prev => ({...prev, [index]: false}))}
                        className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-md hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
                      >
                        Show less
                      </button>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300 text-sm font-medium flex-1 justify-center"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  ) : (
                    <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-500 rounded-lg text-sm font-medium flex-1 justify-center">
                      <Github className="w-4 h-4" />
                      Private Repository
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gray-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Want to see more?
            </h3>
            <p className="text-gray-600 mb-6">
              Check out my GitHub for more projects, code samples, and contributions to open source.
            </p>
            <a
              href="https://github.com/ayush0210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gray-800 text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-700 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <Github className="w-5 h-5" />
              View GitHub Profile
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;