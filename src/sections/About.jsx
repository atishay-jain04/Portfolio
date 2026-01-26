import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi2';
import { fadeInUp, staggerContainer, staggerItem } from '../utils/motionVariants';
import { ABOUT_TEXT } from '../constants';

/**
 * About Section - Bio and description (no photo)
 */
const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative z-10 bg-bg-pure">
      <div className="px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          <motion.div variants={fadeInUp}>
            <p className="font-mono text-sm mb-4 tracking-widest uppercase border-b pb-2 inline-block" style={{ color: '#CCFF00', borderColor: 'rgba(204, 255, 0, 0.2)' }}>About Me</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white">
              {ABOUT_TEXT.greeting}
            </h2>
          </motion.div>

          <motion.p
            variants={staggerItem}
            className="text-xl text-gray-400 leading-relaxed font-light"
          >
            {ABOUT_TEXT.description}
          </motion.p>

          {/* Highlights */}
          <motion.div
            variants={staggerContainer}
            className="space-y-4 pt-4"
          >
            {ABOUT_TEXT.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="flex items-start gap-4"
              >
                <span className="flex-shrink-0 w-2 h-2 rounded-full mt-2.5" style={{ backgroundColor: '#CCFF00', boxShadow: '0 0 8px rgba(204, 255, 0, 0.6)' }}></span>
                <p className="text-gray-300 text-lg">{highlight}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={staggerItem} className="pt-8">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(204, 255, 0, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black hover:bg-accent font-medium text-lg transition-all duration-300"
            >
              Let's Connect
              <HiArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
