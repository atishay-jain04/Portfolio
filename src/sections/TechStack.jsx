import React from 'react';
import { motion } from 'framer-motion';
import {
  DiReact, DiJavascript1, DiHtml5, DiCss3, DiNodejs, DiPython,
  DiGit, DiJava
} from 'react-icons/di';
import {
  SiTailwindcss, SiFramer, SiExpress,
  SiVscodium, SiFigma, SiNextdotjs, SiTypescript, SiCplusplus, SiAppwrite
} from 'react-icons/si';
import { fadeInUp, staggerContainer } from '../utils/motionVariants';
import { TECH_STACK } from '../constants';

/**
 * Tech Stack Section - Icon-based grid layout
 */
const TechStack = () => {
  // Map technology names to their corresponding icons
  const getTechIcon = (techName) => {
    const iconMap = {
      // Frontend
      'React': { icon: DiReact, color: '#61DAFB', size: 60 },
      'JavaScript': { icon: DiJavascript1, color: '#F7DF1E', size: 52 },
      'TypeScript': { icon: SiTypescript, color: '#3178C6', size: 52 },
      'HTML5': { icon: DiHtml5, color: '#E34F26', size: 55 },
      'CSS3': { icon: DiCss3, color: '#1572B6', size: 55 },
      'Tailwind CSS': { icon: SiTailwindcss, color: '#06B6D4', size: 52 },
      'Framer Motion': { icon: SiFramer, color: '#FF0088', size: 48 },
      'Next.js': { icon: SiNextdotjs, color: '#000000', size: 52 },

      // Backend
      'Node.js': { icon: DiNodejs, color: '#339933', size: 60 },
      'Express': { icon: SiExpress, color: '#000000', size: 50 },
      'Python': { icon: DiPython, color: '#3776AB', size: 55 },

      // Languages
      'C++': { icon: SiCplusplus, color: '#00599C', size: 52 },
      'Java': { icon: DiJava, color: '#007396', size: 52 },

      // Tools
      'Git': { icon: DiGit, color: '#F05032', size: 55 },
      'VS Code': { icon: SiVscodium, color: '#007ACC', size: 52 },
      'Figma': { icon: SiFigma, color: '#F24E1E', size: 48 },

      // Backend Services
      'Appwrite': { icon: SiAppwrite, color: '#FD366E', size: 52 },
    };

    return iconMap[techName] || { icon: null, color: '#666', size: 48 };
  };

  // Flatten all techs into a single array
  const allTechs = [
    ...TECH_STACK.frontend,
    ...TECH_STACK.backend,
    ...TECH_STACK.languages,
    ...TECH_STACK.tools,
    ...TECH_STACK.backend_services,
  ];

  return (
    <section id="tech-stack" className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white">
              Skills
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The technologies I build with.
            </p>
          </motion.div>

          {/* Tech Icons Grid */}
          <motion.div variants={staggerContainer}>
            {/* Icons Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-8 md:gap-12 justify-items-center py-8">
              {allTechs.map((tech, index) => {
                const { icon: Icon, color, size } = getTechIcon(tech);

                return (
                  <motion.div
                    key={tech}
                    variants={fadeInUp}
                    whileHover={{
                      scale: 1.15,
                      y: -5,
                    }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col items-center gap-3 group"
                  >
                    <div
                      className="flex items-center justify-center p-4 rounded-2xl bg-white dark:bg-gray-800/50 backdrop-blur-sm shadow-lg border border-gray-200 dark:border-gray-700 group-hover:border-gray-300 dark:group-hover:border-gray-600 transition-all duration-300"
                      style={{ width: size + 32, height: size + 32 }}
                    >
                      {Icon ? (
                        <Icon
                          style={{
                            color: color,
                            fontSize: size,
                            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                          }}
                        />
                      ) : (
                        <span className="text-gray-400 dark:text-gray-600 text-sm font-medium">
                          {tech.slice(0, 3)}
                        </span>
                      )}
                    </div>
                    {/* Tech name label - shows on hover or mobile */}
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:opacity-0">
                      {tech}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
