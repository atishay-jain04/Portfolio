import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';
import { fadeInUp, staggerContainer } from '../utils/motionVariants';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../constants';

/**
 * Projects Section - Portfolio projects showcase
 */
const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-gray-950/50">
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
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mx-auto"></div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A collection of projects that showcase my skills and passion for development
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* View More CTA */}
          <motion.div
            variants={fadeInUp}
            className="text-center pt-8"
          >
            <motion.a
              href="https://github.com/atishay-jain04"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-gray-700 text-gray-300 font-medium hover:border-emerald-500 hover:text-emerald-400 transition-colors"
            >
              <FiGithub className="w-5 h-5" />
              View All Projects on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
