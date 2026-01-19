import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import { fadeInUp, scaleUp, staggerContainer, staggerItem } from '../utils/motionVariants';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';

/**
 * Contact Section - Contact details and social links
 */
const Contact = () => {
  const socialIcons = {
    github: <FiGithub className="w-6 h-6" />,
    linkedin: <FiLinkedin className="w-6 h-6" />,
    twitter: <FiTwitter className="w-6 h-6" />,
    email: <FiMail className="w-6 h-6" />,
  };

  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision
            </p>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            variants={scaleUp}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="grid md:grid-cols-2">
                {/* Left Side - Contact Info */}
                <div className="bg-gradient-to-br from-primary-500 to-accent-500 p-8 md:p-12 text-white space-y-8">
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-2">
                      Let's Talk
                    </h3>
                    <p className="text-primary-100">
                      Feel free to reach out through any of these channels
                    </p>
                  </div>

                  <div className="space-y-6">
                    {/* Email */}
                    <motion.a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      variants={staggerItem}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-colors">
                        {socialIcons.email}
                      </div>
                      <div>
                        <p className="text-sm text-primary-100">Email</p>
                        <p className="font-medium">{PERSONAL_INFO.email}</p>
                      </div>
                    </motion.a>

                    {/* GitHub */}
                    <motion.a
                      href={PERSONAL_INFO.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={staggerItem}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-colors">
                        {socialIcons.github}
                      </div>
                      <div>
                        <p className="text-sm text-primary-100">GitHub</p>
                        <p className="font-medium">{PERSONAL_INFO.github.split('/').pop()}</p>
                      </div>
                    </motion.a>
                  </div>
                </div>

                {/* Right Side - Social Links */}
                <div className="p-8 md:p-12 space-y-8">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-2">
                      Connect With Me
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Find me on these platforms
                    </p>
                  </div>

                  {/* Social Icons Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {SOCIAL_LINKS.map((social) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={staggerItem}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex flex-col items-center gap-3 p-6 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 hover:border-primary-500 dark:hover:border-primary-400 hover:shadow-lg transition-all group hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <div className="text-gray-600 dark:text-gray-400 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                          {socialIcons[social.icon]}
                        </div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {social.name}
                        </span>
                      </motion.a>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.div variants={staggerItem} className="pt-4">
                    <motion.a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="block w-full px-6 py-3 rounded-lg bg-gradient-to-r from-primary-500 to-accent-500 text-white text-center font-medium shadow-lg hover:shadow-xl transition-shadow"
                    >
                      Send Me an Email
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
