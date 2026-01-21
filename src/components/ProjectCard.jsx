import React from 'react';
import { motion } from 'framer-motion';
import { HiPhoto } from 'react-icons/hi2';
import { FiGithub } from 'react-icons/fi';
import { fadeInUp } from '../utils/motionVariants';

/**
 * ProjectCard component for displaying project information
 * Features: hover tilt effect, glassmorphic design, interactive buttons
 */
const ProjectCard = ({ project, index = 0 }) => {
  const { title, description, image, tags, demoUrl, githubUrl, featured } = project;

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay: index * 0.1 }}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl bg-gray-900/80 border border-gray-700/50 shadow-lg hover:shadow-emerald-500/20 transition-shadow duration-300">
        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 right-4 z-10">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-lg">
              Featured
            </span>
          </div>
        )}

        {/* Project Image */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-emerald-900/20 to-green-900/20">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <HiPhoto className="w-20 h-20 text-gray-600" />
            </div>
          )}
        </div>

        {/* Project Content */}
        <div className="p-6 space-y-4">
          {/* Title */}
          <h3 className="text-xl font-display font-bold text-white">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm line-clamp-3">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full bg-gray-800 text-gray-300 border border-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-green-500 text-white text-sm font-medium text-center hover:shadow-lg hover:shadow-emerald-500/30 hover:scale-105 transition-all duration-300"
              >
                Live Demo
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 rounded-lg border border-gray-600 text-gray-300 text-sm font-medium text-center hover:bg-gray-800 hover:border-emerald-500/50 hover:text-emerald-400 hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  <FiGithub className="w-4 h-4" />
                  Code
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
