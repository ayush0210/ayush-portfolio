'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Download, Send, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "mishra.ayush.mscse@gmail.com",
      href: "mailto:mishra.ayush.mscse@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "352-740-7018",
      href: "tel:352-740-7018"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Gainesville, Florida",
      href: null
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/ayush-mishra-a537a41a5/",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/ayush0210",
      gradient: "from-gray-600 to-gray-700"
    },
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:mishra.ayush.mscse@gmail.com",
      gradient: "from-red-500 to-pink-500"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-[#08080c] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
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
            Get In Touch
          </motion.span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            I&apos;m always interested in new opportunities, innovative projects,
            and ways to create impact through technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Availability Status */}
            <div className="glass rounded-2xl p-6 border border-green-500/20">
              <div className="flex items-center gap-3 mb-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-green-400 font-semibold">Available for Opportunities</span>
              </div>
              <p className="text-gray-400 text-sm">
                Seeking full-time positions starting May 2025. Open to internships and part-time projects.
              </p>
            </div>

            {/* Contact Details */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-5">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-gray-500 text-xs">{item.label}</p>
                          <p className="text-white font-medium">{item.value}</p>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-gray-600 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-3 rounded-xl">
                        <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-gray-500 text-xs">{item.label}</p>
                          <p className="text-white font-medium">{item.value}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Resume Download */}
            <motion.a
              href="/resume.pdf"
              download
              className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Right Column - Social & Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Quick Message */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-5">Send a Message</h3>
              <div className="space-y-4">
                <motion.a
                  href="mailto:mishra.ayush.mscse@gmail.com?subject=Opportunity%20Discussion&body=Hi%20Ayush,%0A%0AI'd%20like%20to%20discuss%20a%20potential%20opportunity%20with%20you."
                  className="flex items-center justify-center gap-3 w-full py-3 rounded-xl glass text-white font-medium hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-4 h-4" />
                  Send Email
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/ayush-mishra-a537a41a5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-3 rounded-xl bg-[#0077B5] text-white font-medium hover:opacity-90 transition-opacity"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Linkedin className="w-4 h-4" />
                  Connect on LinkedIn
                </motion.a>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-5">Follow My Work</h3>
              <div className="grid grid-cols-3 gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br ${social.gradient} text-white transition-all duration-300 hover:shadow-lg`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                    <span className="text-xs font-medium">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Location Map Placeholder */}
            <div className="glass rounded-2xl p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-500/10 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-indigo-400" />
              </div>
              <p className="text-white font-medium mb-1">Based in Florida</p>
              <p className="text-gray-500 text-sm">Open to remote & relocation</p>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-white/5 text-center"
        >
          <p className="text-gray-500 text-sm">
            Designed & Built by Ayush Mishra
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
