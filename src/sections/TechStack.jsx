import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/motionVariants';
import { TECH_STACK } from '../constants';

/**
 * Tech Stack Section - Terminal/code style display
 */
const TechStack = () => {
  return (
    <section id="tech-stack" className="py-20 md:py-32 relative z-10 bg-bg-pure">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-display font-bold mb-8">
              Technical <span style={{ color: '#CCFF00' }}>Arsenal</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-8 font-light">
              I specialize in building scalable, robust applications using a modern, type-safe stack. My approach combines engineering rigor with creative problem solving.
            </motion.p>

            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-mono text-sm mb-4 border-b pb-2 inline-block" style={{ color: '#CCFF00', borderColor: 'rgba(204, 255, 0, 0.2)' }}>CORE</h4>
                <ul className="space-y-2 text-gray-300 font-mono text-sm">
                  {TECH_STACK.languages?.slice(0, 4).map((tech, idx) => (
                    <li key={idx}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-mono text-sm mb-4 border-b pb-2 inline-block" style={{ color: '#CCFF00', borderColor: 'rgba(204, 255, 0, 0.2)' }}>FRAMEWORKS</h4>
                <ul className="space-y-2 text-gray-300 font-mono text-sm">
                  {TECH_STACK.frontend?.slice(0, 4).map((tech, idx) => (
                    <li key={idx}>{tech}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Terminal window */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="rounded-lg bg-surface border border-dim shadow-2xl overflow-hidden font-mono text-sm relative group"
          >
            {/* Terminal header */}
            <div className="bg-surface-highlight px-4 py-2 flex items-center gap-2 border-b border-dim">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'rgba(204, 255, 0, 0.5)' }}></div>
              <div className="ml-4 text-xs text-gray-500">bash — 80x24</div>
            </div>

            {/* Terminal content */}
            <div className="p-6 h-[400px] overflow-y-auto terminal-scroll text-gray-300">
              <div className="mb-4">
                <span style={{ color: '#CCFF00' }}>user@atishay:~$</span> npm install skills
                <br />
                <span className="text-gray-500">... extracting packages ...</span>
              </div>

              <div className="mb-4">
                <span style={{ color: '#CCFF00' }}>user@atishay:~$</span> node display-stack.js
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mb-4"
              >
                <span style={{ color: '#CCFF00' }}>{'{'}</span>
                <br />
                <span className="text-blue-400 ml-4">"frontend":</span> [
                <br />
                {TECH_STACK.frontend?.map((tech, idx) => (
                  <span key={idx} className="ml-8 text-gray-300">
                    "{tech}"{idx < (TECH_STACK.frontend?.length - 1) ? ',' : ''}
                    <br />
                  </span>
                ))}
                <span className="ml-4">],</span>
                <br />
                <span className="text-blue-400 ml-4">"backend":</span> [
                <br />
                {TECH_STACK.backend?.map((tech, idx) => (
                  <span key={idx} className="ml-8 text-gray-300">
                    "{tech}"{idx < (TECH_STACK.backend?.length - 1) ? ',' : ''}
                    <br />
                  </span>
                ))}
                <span className="ml-4">],</span>
                <br />
                <span className="text-blue-400 ml-4">"tools":</span> [
                <br />
                {TECH_STACK.tools?.slice(0, 4).map((tech, idx) => (
                  <span key={idx} className="ml-8 text-gray-300">
                    "{tech}"{idx < 3 ? ',' : ''}
                    <br />
                  </span>
                ))}
                <span className="ml-4">]</span>
                <br />
                <span style={{ color: '#CCFF00' }}>{'}'}</span>
              </motion.div>

              {/* Animated cursor */}
              <div className="animate-pulse">
                <span style={{ color: '#CCFF00' }}>user@atishay:~$</span> <span className="inline-block w-2 h-4 align-middle" style={{ backgroundColor: '#CCFF00' }}></span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
