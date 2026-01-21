import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowDown, HiArrowDownTray } from 'react-icons/hi2';
import { fadeIn, fadeInUp, fadeInDown, staggerContainer, staggerItem } from '../utils/motionVariants';
import { PERSONAL_INFO } from '../constants';
import Typewriter from '../components/Typewriter';

/**
 * Hero Section - Landing section with animated intro
 */
const Hero = () => {
  const titles = ['Full-Stack Developer', 'AIML Enthusiast'];

  return (
    <section id="home" className="section-padding min-h-screen flex items-center relative overflow-hidden bg-gray-950">
      {/* Background gradient decoration with neon effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-emerald-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-green-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-lime-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container-custom w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center space-y-8"
        >
          {/* Greeting */}
          <motion.div variants={fadeInDown}>
            <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              Welcome to my portfolio
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white"
          >
            {PERSONAL_INFO.name}
          </motion.h1>

          {/* Title with Typewriter Animation */}
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl lg:text-3xl text-gray-400 font-medium min-h-[40px] md:min-h-[48px]"
          >
            <Typewriter phrases={titles} typeSpeed={100} deleteSpeed={50} delayBetween={2000} />
          </motion.p>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about building exceptional digital experiences that make a difference.
            I create modern web applications with clean code and beautiful designs.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(16, 185, 129, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 text-white font-medium text-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              View My Work
            </motion.a>
            <motion.a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 rounded-full border-2 border-gray-600 text-gray-300 font-medium text-lg hover:border-emerald-500 hover:text-emerald-400 transition-colors"
            >
              <HiArrowDownTray className="w-5 h-5" />
              Resume
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={fadeIn}
            className="pt-12"
          >
            <motion.a
              href="#about"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="inline-flex flex-col items-center text-gray-500 hover:text-emerald-400 transition-colors"
            >
              <span className="text-sm mb-2">Scroll Down</span>
              <HiArrowDown className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
