'use client';

import { motion } from 'framer-motion';
import { Smartphone, Code, Server, Settings } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Native Android with Kotlin & Java, React Native for cross-platform apps",
      technologies: ["Kotlin", "Java", "Android SDK", "React Native", "ExoPlayer", "Jetpack Compose"]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development", 
      description: "Modern web applications with React ecosystem and TypeScript",
      technologies: ["React.js", "TypeScript", "JavaScript", "Next.js", "Material-UI", "Tailwind CSS"]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Development",
      description: "Scalable APIs and database design for mobile applications",
      technologies: ["Express.js", "Node.js", "RESTful APIs", "MySQL", "MongoDB", "WebSocket"]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Architecture & Tools",
      description: "Clean architecture patterns and modern development workflow",
      technologies: ["MVVM", "Repository Pattern", "Git", "Firebase", "Android Studio", "Gradle"]
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about building scalable mobile applications and backend systems. 
            Here's what I bring to the table:
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
            >
              <div className="text-blue-600 mb-6 group-hover:text-blue-700 transition-colors duration-300">
                {skill.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {skill.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {skill.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full font-medium group-hover:bg-blue-100 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="p-8">
            <div className="text-4xl font-bold text-blue-600 mb-2">22.7M+</div>
            <div className="text-gray-600">Concurrent Users Supported</div>
          </div>
          <div className="p-8">
            <div className="text-4xl font-bold text-blue-600 mb-2">2600+</div>
            <div className="text-gray-600">Crore Video Views Handled</div>
          </div>
          <div className="p-8">
            <div className="text-4xl font-bold text-blue-600 mb-2">40%</div>
            <div className="text-gray-600">Latency Reduction Achieved</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;