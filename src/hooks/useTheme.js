import { useState, useEffect } from 'react';
import { initializeTheme, toggleTheme, applyTheme, saveTheme } from '../utils/theme';

/**
 * Custom hook for managing theme state
 * @returns {Object} theme state and toggle function
 */
export const useTheme = () => {
  const [theme, setTheme] = useState('light');

  // Initialize theme on mount
  useEffect(() => {
    const initialTheme = initializeTheme();
    setTheme(initialTheme);
  }, []);

  // Handle theme toggle
  const handleToggleTheme = () => {
    const newTheme = toggleTheme(theme);
    setTheme(newTheme);
    applyTheme(newTheme);
    saveTheme(newTheme);
  };

  return {
    theme,
    toggleTheme: handleToggleTheme,
    isDark: theme === 'dark',
  };
};
