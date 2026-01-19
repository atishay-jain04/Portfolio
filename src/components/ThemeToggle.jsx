import React from 'react';
import { motion } from 'framer-motion';
import { HiSun, HiMoon } from 'react-icons/hi2';

/**
 * Theme toggle button component
 * Switches between light and dark mode with smooth animation
 */
const ThemeToggle = ({ theme, toggleTheme }) => {
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full bg-gray-300 dark:bg-gray-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
      aria-label="Toggle theme"
    >
      <motion.div
        className="absolute top-1 left-1 w-5 h-5 rounded-full bg-white dark:bg-gray-900 shadow-md flex items-center justify-center"
        animate={{
          x: isDark ? 24 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
      >
        {isDark ? (
          <HiMoon className="w-3 h-3 text-yellow-400" />
        ) : (
          <HiSun className="w-3 h-3 text-yellow-500" />
        )}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;
