'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Award, Users, Zap, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Interactive Learning Platform",
      subtitle: "🏆 ShellHacks 2024 Hackathon Winner",
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
      githubUrl: "https://github.com/ayush-mishra/learning-platform",
      liveUrl: "https://learning-platform-demo.vercel.app",
      awards: ["Best UI/UX Design", "Most Innovative Solution"],
      stats: {
        icon: <Award className="w-5 h-5" />,
        value: "Hackathon Winner",
        label: "ShellHacks 2024"
      }
    },
    {
      title: "Video Streaming Infrastructure",
      subtitle: "Enterprise-Scale Streaming Solution",
      description: "Built scalable video streaming system supporting millions of concurrent users with adaptive bitrate streaming and advanced caching mechanisms.",
      image: "/images/projects/video-streaming.jpg",
      technologies: ["Kotlin", "ExoPlayer", "DASH/HLS", "Room Database", "WorkManager", "Kotlin Coroutines", "Material Design 3"],
      features: [
        "Support for 22.7M concurrent users during FIFA World Cup",
        "40% reduction in streaming latency",
        "30% bandwidth consumption reduction",
        "Picture-in-picture mode implementation",
        "Offline playback functionality"
      ],
      githubUrl: "https://github.com/ayush-mishra/video-streaming",
      awards: ["Production Ready", "Enterprise Scale"],
      stats: {
        icon: <Users className="w-5 h-5" />,
        value: "22.7M+",
        label: "Concurrent Users"
      }
    },
    {
      title: "Daily News Android App",
      subtitle: "Published on Google Play Store",
      description: "Android application providing seamless news reading experience with intuitive UI design, published to Google Play Store with positive user feedback.",
      image: "/images/projects/daily-news.jpg",
      technologies: ["Android", "Kotlin", "Retrofit", "Room Database", "Material Design", "MVVM Architecture"],
      features: [
        "Published on Google Play Store",
        "Efficient HTTP requests with Retrofit",
        "Offline reading capabilities",
        "Clean and intuitive user interface",
        "Real-time news updates"
      ],
      githubUrl: "https://github.com/ayush-mishra/daily-news",
      liveUrl: "https://play.google.com/store/apps/details?id=com.ayush.dailynews",
      awards: ["Play Store Published", "User Approved"],
      stats: {
        icon: <Star className="w-5 h-5" />,
        value: "Published",
        label: "Google Play Store"
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
            Showcasing scalable applications that have served millions of users and won prestigious awards
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

                {/* Awards Badge */}
                <div className="absolute bottom-4 left-4">
                  <div className="flex gap-2">
                    {project.awards.map((award, awardIndex) => (
                      <span
                        key={awardIndex}
                        className="bg-yellow-400 text-yellow-900 text-xs px-2 py-1 rounded-full font-semibold"
                      >
                        {award}
                      </span>
                    ))}
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
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-md">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300 text-sm font-medium flex-1 justify-center"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm font-medium flex-1 justify-center"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
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
              href="https://github.com/ayush-mishra"
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