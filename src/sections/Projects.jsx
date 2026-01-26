import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';
import { fadeInUp, staggerContainer } from '../utils/motionVariants';
import { PROJECTS, PERSONAL_INFO } from '../constants';

/**
 * Projects Section - List-style layout with hover images
 */
const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  // Helper to get year and category from project
  const getProjectMeta = (index) => {
    const years = ['2024', '2023', '2024'];
    const categories = ['FULL STACK', 'AI RESEARCH', 'WEB3'];
    return { year: years[index % 3], category: categories[index % 3] };
  };

  return (
    <section id="projects" className="py-20 md:py-32 bg-bg-pure relative border-t border-white/5">
      <div className="px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp}>
            <h2 className="font-mono text-sm tracking-widest uppercase text-left border-b pb-2 inline-block" style={{ color: '#CCFF00', borderColor: 'rgba(204, 255, 0, 0.2)' }}>
              Selected Projects
            </h2>
          </motion.div>

          {/* Projects List */}
          <div className="relative">
            <div className="flex flex-col">
              {PROJECTS.map((project, index) => {
                const { year, category } = getProjectMeta(index);
                const isHovered = hoveredProject === index;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={project.id}
                    variants={fadeInUp}
                    className="project-item group border-t border-white/10 py-12 relative cursor-pointer transition-all duration-300"
                    onMouseEnter={() => setHoveredProject(index)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <div className="flex justify-between items-baseline relative z-20 mix-blend-difference gap-4">
                      <h3 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-gray-400 group-hover:text-accent transition-all duration-300 project-title break-words">
                        {project.title.toUpperCase()}
                      </h3>
                      <span className="font-mono text-sm transition-colors hidden sm:block" style={{ color: '#CCFF00' }}>
                        {year} // {category}
                      </span>
                    </div>

                    <div className="flex gap-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono text-xs pl-[2rem]" style={{ color: '#CCFF00' }}>
                      {project.tags.map((tag, idx) => (
                        <span key={idx}>{tag}</span>
                      ))}
                    </div>

                    {/* Floating hover image */}
                    <div
                      className="project-image pointer-events-none fixed top-1/2 w-[400px] h-[300px] bg-gray-800 rounded-lg overflow-hidden opacity-0 transition-all duration-500 z-10 hidden lg:block border border-accent/20 shadow-[0_0_50px_rgba(204,255,0,0.1)]"
                      style={{
                        right: isEven ? '10%' : 'auto',
                        left: isEven ? 'auto' : '10%',
                        transform: isHovered ? 'scale(1) translateY(-50%) rotate(2deg)' : 'scale(0.9) translateY(-50%)',
                      }}
                    >
                      {project.image ? (
                        <>
                          <img
                            alt={project.title}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                            src={project.image}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                        </>
                      ) : (
                        <div className="w-full h-full bg-surface-highlight flex items-center justify-center border border-white/5">
                          <span className="material-symbols-outlined text-6xl text-gray-700">dataset</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* View More CTA */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 text-center"
          >
            <motion.a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 font-mono text-xs text-white hover:text-accent transition-colors border-b border-transparent hover:border-accent pb-1"
            >
              VIEW ARCHIVE <FiGithub className="text-sm" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
