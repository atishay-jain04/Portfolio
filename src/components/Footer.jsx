import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SOCIAL_LINKS, PERSONAL_INFO } from '../constants';
import { fadeInUp } from '../utils/motionVariants';

/**
 * Footer component with social links and copyright
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = {
    github: <FiGithub className="w-5 h-5" />,
    linkedin: <FiLinkedin className="w-5 h-5" />,
    email: <FiMail className="w-5 h-5" />,
  };

  return (
    <footer className="bg-gray-900/80 border-t border-gray-800">
      <div className="container-custom section-padding">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Branding */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-display font-bold text-white mb-2">
                {PERSONAL_INFO.name}
              </h3>
              <p className="text-gray-400">
                {PERSONAL_INFO.title}
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-gray-800 text-gray-300 hover:bg-emerald-500/20 hover:text-emerald-400 transition-colors border border-gray-700 hover:border-emerald-500/50"
                  aria-label={social.name}
                >
                  {socialIcons[social.icon]}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>
              © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
            </p>
            <p className="flex items-center gap-1">
              Built with
              <span className="text-emerald-500 animate-pulse">♥</span>
              using React & Tailwind CSS
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
