'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "University of Florida",
      position: "Mobile Application Developer / Research Assistant",
      duration: "August 2024 – Present",
      location: "Gainesville, FL",
      description: "Developing native mobile applications with geofencing capabilities and integrating third-party APIs for enhanced functionality.",
      achievements: [
        "Developing native mobile applications with geofencing capabilities",
        "Implementing state management and component logic for efficient data flow",
        "Optimizing app performance through efficient API call management",
        "Engineered scalable backend with Express.js and RESTful APIs",
        "Optimized MySQL database schema for real-time location-based content delivery"
      ],
      technologies: ["React Native", "JavaScript", "Express.js", "MySQL", "OpenAI API", "Geolocation Services"],
      current: true
    },
    {
      company: "Reliance Jio",
      position: "Android Developer",
      duration: "June 2022 - July 2023",
      location: "Mumbai, India",
      description: "Architected and optimized video streaming infrastructure using ExoPlayer and DASH/HLS protocols.",
      achievements: [
        "Achieved 10x scalability to support 22.7M concurrent users during FIFA World Cup 2022",
        "Engineered real-time analytics pipeline handling over 2600 crore video views during IPL 2024",
        "Implemented adaptive bitrate streaming (ABR) algorithms reducing latency by 40%",
        "Built custom video player components using Jetpack Compose and Material Design 3",
        "Designed caching mechanisms reducing bandwidth consumption by 30%",
        "Collaborated with cross-functional teams in agile environment"
      ],
      technologies: ["Kotlin", "Android SDK", "ExoPlayer", "Jetpack Compose", "DASH/HLS", "Room", "Retrofit2"],
      current: false
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building scalable mobile applications and backend systems at leading organizations
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-6 top-8 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
              
              <div className="md:ml-20">
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        {experience.position}
                      </h3>
                      <div className="flex items-center gap-2 text-blue-600 font-semibold text-lg mb-2">
                        <Briefcase className="w-5 h-5" />
                        {experience.company}
                        {experience.current && (
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full ml-2">
                            Current
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex flex-col lg:items-end gap-2">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        {experience.duration}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        {experience.location}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-4">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full font-medium border border-blue-100"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;