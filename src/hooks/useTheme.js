import { useEffect } from 'react';

/**
 * Custom hook for managing theme state
 * Always returns dark mode
 */
export const useTheme = () => {
  // Force dark mode on mount
  useEffect(() => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  return {
    theme: 'dark',
    toggleTheme: () => {}, // No-op function since theme is fixed
    isDark: true,
  };
};
