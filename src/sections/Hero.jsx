import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi2';
import { fadeIn, fadeInUp, fadeInDown, staggerContainer } from '../utils/motionVariants';
import { PERSONAL_INFO } from '../constants';
import Typewriter from '../components/Typewriter';

/**
 * Hero Section - Landing section with large outline text effect
 */
const Hero = () => {
  const titles = ['Frontend Developer', 'Full-Stack Developer'];

  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden pt-20 pb-12 md:justify-center">
      {/* Large outline text background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none z-0 opacity-40 pointer-events-none whitespace-nowrap overflow-hidden">
        <h1 className="text-[20vw] font-display font-bold text-outline leading-none tracking-tighter text-center">
          DEVELOPER
        </h1>
      </div>

      <div className="w-full relative z-10 flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row items-end justify-between gap-12 pb-12 border-b border-white/10"
        >
          <motion.div variants={fadeInUp}>
            <p className="font-mono text-accent text-sm mb-4 tracking-widest uppercase">Portfolio 2026</p>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter text-white leading-[0.9]">
              {PERSONAL_INFO.name.split(' ')[0]}<br />
              <span className="text-gray-500">{PERSONAL_INFO.name.split(' ')[1]}</span>
            </h1>
          </motion.div>

          <motion.div variants={fadeInUp} className="max-w-md pb-2">
            <p className="text-gray-400 font-light leading-relaxed text-lg text-justify">
              Architecting digital ecosystems with precision. Full-stack engineering meets high-fidelity design. Based in the digital void, creating light.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-8 flex justify-between items-center text-xs font-mono uppercase tracking-widest"
        >
          <span className="text-accent">Scroll to explore</span>
          <span className="text-accent/60">(001)</span>
        </motion.div>

        {/* Typewriter subtitle */}
        <motion.div
          variants={fadeInUp}
          className="mt-6 md:mt-8 text-center md:text-left"
        >
          <p className="text-lg md:text-xl text-gray-400 font-medium min-h-7 md:min-h-10">
            <Typewriter phrases={titles} typeSpeed={100} deleteSpeed={50} delayBetween={2000} />
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start items-center w-full"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(204, 255, 0, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-8 py-3 sm:py-4 rounded-full bg-white text-black hover:bg-accent font-medium text-lg transition-all duration-300 text-center"
          >
            View Work
          </motion.a>
          <motion.a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 sm:py-4 rounded-full border-2 border-gray-600 text-gray-300 font-medium text-lg hover:border-accent hover:text-accent transition-colors"
          >
            <span>Resume</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        variants={fadeIn}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="inline-flex flex-col items-center text-gray-500 hover:text-accent transition-colors"
        >
          <span className="text-xs mb-2 font-mono uppercase tracking-widest" style={{ color: '#CCFF00' }}>Scroll</span>
          <HiArrowDown className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
