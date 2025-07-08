'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Download, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "mishra.ayush.mscse@gmail.com",
      href: "mailto:mishra.ayush.mscse@gmail.com",
      primary: true
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "352-740-7018",
      href: "tel:352-740-7018"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Gainesville, Florida, US",
      href: null
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/ayush-mishra-a537a41a5/"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/in/ayush-mishra-a537a41a5/",
      color: "hover:bg-blue-600"
    },
    {
      name: "GitHub", 
      icon: <Github className="w-6 h-6" />,
      href: "https://github.com/ayush0210",
      color: "hover:bg-gray-800"
    },
    {
      name: "Email",
      icon: <Mail className="w-6 h-6" />,
      href: "mailto:mishra.ayush.mscse@gmail.com",
      color: "hover:bg-red-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Let&apos;s Build Something Amazing
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            I&apos;m always interested in discussing new opportunities, innovative projects, 
            and ways to create impact through technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-blue-100 leading-relaxed mb-8">
                Whether you&apos;re a recruiter looking for top talent, a startup seeking technical leadership, 
                or a fellow developer interested in collaboration, I&apos;d love to hear from you!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      className={`flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 ${
                        item.primary ? 'ring-2 ring-yellow-400' : ''
                      }`}
                    >
                      <div className="text-white group-hover:text-yellow-300 transition-colors duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-blue-100 text-sm">{item.label}</div>
                        <div className="text-white font-medium">{item.value}</div>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                      <div className="text-white">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-blue-100 text-sm">{item.label}</div>
                        <div className="text-white font-medium">{item.value}</div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Resume Download */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-3 bg-yellow-400 text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition-all duration-300 hover:transform hover:-translate-y-1 shadow-lg w-fit"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Quick Actions & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Quick Contact Options */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-white mb-6">Quick Connect</h4>
              
              <div className="space-y-4">
                <a
                  href="mailto:mishra.ayush.mscse@gmail.com?subject=Job Opportunity&body=Hi Ayush, I&apos;d like to discuss a potential opportunity with you."
                  className="flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 w-full justify-center"
                >
                  <MessageCircle className="w-5 h-5" />
                  Send Quick Message
                </a>
                
                <a
                  href="https://www.linkedin.com/in/ayush-mishra-a537a41a5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-800 transition-all duration-300 w-full justify-center"
                >
                  <Linkedin className="w-5 h-5" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-white mb-6">Follow My Work</h4>
              
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex flex-col items-center gap-2 p-4 rounded-xl bg-white/10 text-white hover:text-white transition-all duration-300 ${social.color} group`}
                  >
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                    <span className="text-sm font-medium">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-green-500/20 border border-green-400/30 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-300 font-semibold">Available for Opportunities</span>
              </div>
              <p className="text-green-100 text-sm">
                Currently seeking full-time opportunities starting May 2025. 
                Open to internships and part-time projects in the meantime.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;