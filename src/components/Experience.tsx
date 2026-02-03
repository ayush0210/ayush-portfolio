'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "University of Florida",
      position: "Mobile Software Engineer",
      duration: "August 2024 – Present",
      location: "Gainesville, FL",
      description: "Leading end-to-end solution design and delivery for production-ready Android applications using Kotlin and Android SDK.",
      achievements: [
        "Implemented CI/CD pipelines using GitHub Actions, reducing deployment time",
        "Built scalable backend solutions with WebSocket integration, reducing server load by 30%",
        "Created comprehensive test strategy and automation framework, improving test coverage by 25%",
        "Applied Clean Architecture principles and MVVM patterns for maintainable code structure"
      ],
      technologies: ["Android SDK", "Kotlin", "React Native", "Express.js", "MySQL", "CI/CD"],
      current: true,
      color: "from-indigo-500 to-purple-500"
    },
    {
      company: "Reliance Jio Infocomm Limited",
      position: "Android Developer",
      duration: "June 2022 - July 2023",
      location: "Mumbai, India",
      description: "Delivered complex Android features for video streaming infrastructure using ExoPlayer, successfully scaling to 22.7M concurrent users.",
      achievements: [
        "Scaled platform to support 22.7M concurrent users during FIFA World Cup 2022",
        "Led technical strategy for adaptive bitrate algorithms reducing streaming latency by 40%",
        "Architected real-time analytics pipeline using Kotlin Coroutines and State Flows",
        "Designed custom video player components using Jetpack Compose and Material Design 3"
      ],
      technologies: ["Kotlin", "Android SDK", "Jetpack Compose", "ExoPlayer", "Room", "Firebase"],
      current: false,
      color: "from-cyan-500 to-blue-500"
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

  return (
    <section id="experience" className="py-24 bg-[#08080c] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
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
            Career Journey
          </motion.span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Building scalable mobile applications and backend systems at leading organizations
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/50 to-transparent hidden md:block" />

          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative mb-12 last:mb-0 ${
                index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%] md:ml-auto'
              }`}
            >
              {/* Timeline dot */}
              <motion.div
                className={`absolute left-0 md:left-1/2 top-8 w-4 h-4 -translate-x-1/2 rounded-full hidden md:flex items-center justify-center ${
                  experience.current ? 'bg-green-500' : 'bg-indigo-500'
                }`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                viewport={{ once: true }}
              >
                {experience.current && (
                  <span className="absolute w-8 h-8 rounded-full bg-green-500/30 animate-ping" />
                )}
              </motion.div>

              <div className={`md:px-8 ${index % 2 === 0 ? '' : ''}`}>
                <motion.div
                  className="glass rounded-2xl p-6 md:p-8 hover:bg-white/[0.08] transition-all duration-500 border border-white/5 hover:border-white/10 group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Header */}
                  <div className={`flex flex-col gap-4 mb-6 ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                    <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                      {experience.current && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-medium mb-3 w-fit">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                          Current Role
                        </span>
                      )}
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                        {experience.position}
                      </h3>
                      <div className={`flex items-center gap-2 text-indigo-400 font-semibold ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <Briefcase className="w-4 h-4" />
                        {experience.company}
                      </div>
                    </div>

                    <div className={`flex flex-wrap gap-4 text-sm text-gray-400 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {experience.duration}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {experience.location}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`text-gray-400 mb-6 leading-relaxed ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    {experience.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <ul className="space-y-3">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <motion.li
                          key={achievementIndex}
                          initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * achievementIndex }}
                          viewport={{ once: true }}
                          className={`flex items-start gap-3 ${index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''}`}
                        >
                          <ChevronRight className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {experience.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.05 * techIndex }}
                        viewport={{ once: true }}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 hover:bg-indigo-500/20 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Education callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <div className="glass rounded-2xl p-6 text-center">
            <h3 className="text-lg font-semibold text-white mb-4">Education</h3>
            <div className="space-y-3">
              <div>
                <p className="text-indigo-400 font-medium">University of Florida</p>
                <p className="text-gray-400 text-sm">Masters in Computer Science | Aug 2023 - May 2025</p>
              </div>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto" />
              <div>
                <p className="text-indigo-400 font-medium">University of Mumbai</p>
                <p className="text-gray-400 text-sm">Bachelors in Computer Engineering | July 2018 - May 2022</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
