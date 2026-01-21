import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiXMark, HiBars3 } from 'react-icons/hi2';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { NAV_LINKS, PERSONAL_INFO } from '../constants';
import { navbarVariant } from '../utils/motionVariants';
import ThemeToggle from './ThemeToggle';

/**
 * Floating glassmorphic navigation bar
 * Features: centered island-style, animated, responsive with mobile menu
 */
const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll effect & active section detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Intersection Observer for scroll spy
    const sections = NAV_LINKS.map(link => document.querySelector(link.href)).filter(Boolean);

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Trigger when section is near top of viewport
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  // Handle smooth scroll to section
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      setActiveSection(href.slice(1));
    }
  };

  return (
    <motion.nav
      variants={navbarVariant}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="container-custom px-6">
        <div
          className={`glassmorphism rounded-full shadow-lg transition-all duration-300 ${
            isScrolled ? 'shadow-xl' : ''
          }`}
        >
          <div className="flex items-center justify-between px-6 py-3">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="text-xl font-display font-bold text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              AJ
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'text-emerald-400'
                      : 'text-gray-300 hover:text-emerald-400'
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-emerald-500/20 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
              {/* Social Icons Divider */}
              <div className="w-px h-6 bg-gray-700 mx-2" />
              {/* GitHub Link */}
              <motion.a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full text-gray-300 hover:text-emerald-400 transition-colors"
                aria-label="GitHub"
              >
                <FiGithub className="w-5 h-5" />
              </motion.a>
              {/* LinkedIn Link */}
              <motion.a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full text-gray-300 hover:text-emerald-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-5 h-5" />
              </motion.a>
            </div>

            {/* Right Section: Theme Toggle + Mobile Menu */}
            <div className="flex items-center space-x-4">
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <HiXMark className="w-6 h-6 text-gray-300" />
                ) : (
                  <HiBars3 className="w-6 h-6 text-gray-300" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden border-t border-gray-700/20"
              >
                <div className="px-6 py-4 space-y-2">
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeSection === link.id
                          ? 'bg-emerald-500/20 text-emerald-400'
                          : 'text-gray-300 hover:bg-gray-800'
                      }`}
                    >
                      {link.label}
                    </a>
                  ))}
                  {/* Mobile Social Links */}
                  <div className="flex items-center gap-4 pt-2 mt-2 border-t border-gray-700/20">
                    <motion.a
                      href={PERSONAL_INFO.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors"
                    >
                      <FiGithub className="w-5 h-5" />
                      <span className="text-sm">GitHub</span>
                    </motion.a>
                    <motion.a
                      href={PERSONAL_INFO.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors"
                    >
                      <FiLinkedin className="w-5 h-5" />
                      <span className="text-sm">LinkedIn</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
