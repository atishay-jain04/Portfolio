import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowDownTray, HiEye } from 'react-icons/hi2';
import { FiGithub, FiMail } from 'react-icons/fi';
import { fadeInUp, scaleUp, staggerContainer } from '../utils/motionVariants';
import { PERSONAL_INFO } from '../constants';

/**
 * Resume Section - Resume preview and download
 */
const Resume = () => {
  return (
    <section id="resume" className="section-padding">
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
              Resume
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Download my resume to learn more about my experience and skills
            </p>
          </motion.div>

          {/* Resume Preview Card */}
          <motion.div
            variants={scaleUp}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              {/* Preview Area */}
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 p-12">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-2xl font-bold">
                        {PERSONAL_INFO.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white">
                          {PERSONAL_INFO.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {PERSONAL_INFO.title}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <FiMail className="w-4 h-4" />
                        <span>{PERSONAL_INFO.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiGithub className="w-4 h-4" />
                        <span>{PERSONAL_INFO.github.split('/').pop()}</span>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
                      <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                        This is a preview. Download the full resume below.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Download Section */}
              <div className="p-8 space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <motion.a
                    href={PERSONAL_INFO.resumeUrl}
                    download
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <HiArrowDownTray className="w-5 h-5" />
                    Download PDF
                  </motion.a>

                  <motion.a
                    href={PERSONAL_INFO.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium hover:border-primary-500 dark:hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <HiEye className="w-5 h-5" />
                    View Online
                  </motion.a>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
