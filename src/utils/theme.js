/**
 * Theme utility for managing light/dark mode with localStorage persistence
 */

const THEME_KEY = 'portfolio-theme';

/**
 * Get the initial theme from localStorage or system preference
 * @returns {string} 'light' or 'dark'
 */
export const getInitialTheme = () => {
  // Check localStorage first
  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme) {
    return savedTheme;
  }

  // Check system preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }

  return 'light';
};

/**
 * Save theme to localStorage
 * @param {string} theme - 'light' or 'dark'
 */
export const saveTheme = (theme) => {
  localStorage.setItem(THEME_KEY, theme);
};

/**
 * Apply theme to document
 * @param {string} theme - 'light' or 'dark'
 */
export const applyTheme = (theme) => {
  const root = document.documentElement;

  if (theme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
};

/**
 * Toggle theme between light and dark
 * @param {string} currentTheme - current theme
 * @returns {string} new theme
 */
export const toggleTheme = (currentTheme) => {
  return currentTheme === 'light' ? 'dark' : 'light';
};

/**
 * Initialize theme on app load
 * @returns {string} initial theme
 */
export const initializeTheme = () => {
  const theme = getInitialTheme();
  applyTheme(theme);
  return theme;
};
