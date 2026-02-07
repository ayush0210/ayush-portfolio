'use client';

import { motion, useInView } from 'framer-motion';
import { Smartphone, Code, Server, Settings, TrendingUp } from 'lucide-react';
import { useRef } from 'react';

const About = () => {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true });

  const skills = [
    {
      icon: <Smartphone className="w-7 h-7" />,
      title: "Mobile Engineering",
      description: "Production Android and cross-platform apps with a focus on reliability and performance",
      technologies: ["Kotlin", "Java", "Android SDK", "React Native", "Jetpack Compose", "ExoPlayer"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Code className="w-7 h-7" />,
      title: "Frontend Engineering",
      description: "Modern, accessible web applications with strong UI performance",
      technologies: ["React.js", "TypeScript", "Next.js", "JavaScript", "Tailwind CSS", "Material-UI"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Server className="w-7 h-7" />,
      title: "Backend Engineering",
      description: "Scalable APIs and data services built for reliability and throughput",
      technologies: ["Node.js", "Express.js", "REST APIs", "WebSocket", "MySQL", "MongoDB"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: <Settings className="w-7 h-7" />,
      title: "Systems & Quality",
      description: "Clean architecture, testing, and delivery practices for maintainable systems",
      technologies: ["Clean Architecture", "MVVM", "Testing", "CI/CD", "Git", "Gradle"],
      color: "from-green-500 to-emerald-500"
    }
  ];

  const stats = [
    { value: "22.7M+", label: "Concurrent Users", suffix: "" },
    { value: "40%", label: "Latency Reduction", suffix: "" },
    { value: "2+", label: "Years Experience", suffix: "" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
    <section id="about" className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
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
            What I Do
          </motion.span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Passionate about building scalable mobile applications and backend systems
            that deliver exceptional user experiences.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="h-full glass rounded-2xl p-6 hover:bg-white/[0.08] transition-all duration-500 border border-white/5 hover:border-white/10">
                {/* Icon with gradient background */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${skill.color} mb-5`}>
                  <span className="text-white">{skill.icon}</span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-400 transition-colors duration-300">
                  {skill.title}
                </h3>

                <p className="text-gray-400 mb-5 text-sm leading-relaxed">
                  {skill.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * techIndex }}
                      viewport={{ once: true }}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/5 text-gray-300 border border-white/5 hover:border-indigo-500/30 hover:text-indigo-400 transition-all duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Hover glow effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="glass rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8 justify-center">
              <TrendingUp className="w-6 h-6 text-indigo-400" />
              <h3 className="text-xl font-semibold text-white">Impact & Achievements</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Achievement highlights */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2" />
                  <p className="text-gray-400 text-sm">
                    Led video streaming infrastructure for <span className="text-white">FIFA World Cup 2022</span> at Jio
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2" />
                  <p className="text-gray-400 text-sm">
                    Built adaptive bitrate algorithms reducing streaming latency by <span className="text-white">40%</span>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2" />
                  <p className="text-gray-400 text-sm">
                    M.S. in Computer Science, <span className="text-white">University of Florida</span> (May 2025)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                  <p className="text-gray-400 text-sm">
                    Implemented CI/CD pipelines improving deployment efficiency by <span className="text-white">30%</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
