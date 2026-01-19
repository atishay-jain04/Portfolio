import React from 'react';
import { motion } from 'framer-motion';
import { hoverScale } from '../utils/motionVariants';

/**
 * TechBadge component for displaying technology/skill tags
 * Features: hover effects, glassmorphic design
 */
const TechBadge = ({ tech, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={hoverScale}
      className="px-4 py-2 rounded-full bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 border border-primary-200 dark:border-primary-700/50 backdrop-blur-sm cursor-default"
    >
      <span className="text-sm font-medium text-gray-900 dark:text-gray-200">
        {tech}
      </span>
    </motion.div>
  );
};

/**
 * TechBadgeList component for displaying a list of tech badges
 */
export const TechBadgeList = ({ techs, category }) => {
  return (
    <div className="space-y-3">
      {category && (
        <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
          {category}
        </h4>
      )}
      <div className="flex flex-wrap gap-2">
        {techs.map((tech, index) => (
          <TechBadge key={tech} tech={tech} index={index} />
        ))}
      </div>
    </div>
  );
};

export default TechBadge;
