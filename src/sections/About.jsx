import React from 'react';
import { motion } from 'framer-motion';
import { HiCheck, HiArrowRight } from 'react-icons/hi2';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '../utils/motionVariants';
import { ABOUT_TEXT, PERSONAL_INFO } from '../constants';
import profileImageLight from '../assets/images/ATISHAY1.jpg';
import profileImageDark from '../assets/images/ATISHAY.png';
import { useTheme } from '../hooks/useTheme';

/**
 * About Section - Bio and description
 */
const About = () => {
  const { isDark } = useTheme();

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left side - Image/Avatar */}
          <motion.div variants={fadeInLeft} className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-accent-400 rounded-2xl rotate-6 opacity-20"></div>

              {/* Image container */}
              <div className="relative bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 rounded-2xl p-3 backdrop-blur-sm border border-primary-200 dark:border-gray-700">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src={isDark ? profileImageDark : profileImageLight}
                  alt={PERSONAL_INFO.name}
                  key={isDark ? 'dark' : 'light'}
                  className="w-full h-auto rounded-xl object-cover shadow-xl"
                />
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div variants={fadeInRight} className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white">
                About Me
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></div>
            </div>

            <motion.h3
              variants={staggerItem}
              className="text-2xl md:text-3xl font-display font-semibold text-primary-600 dark:text-primary-400"
            >
              {ABOUT_TEXT.greeting}
            </motion.h3>

            <motion.p
              variants={staggerItem}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              {ABOUT_TEXT.description}
            </motion.p>

            {/* Highlights */}
            <motion.div
              variants={staggerContainer}
              className="space-y-3 pt-4"
            >
              {ABOUT_TEXT.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center mt-1">
                    <HiCheck className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{highlight}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={staggerItem} className="pt-6">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium shadow-lg hover:shadow-xl transition-shadow"
              >
                Let's Work Together
                <HiArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
