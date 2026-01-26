import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiXMark, HiBars3, HiArrowUpRight } from 'react-icons/hi2';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { NAV_LINKS, PERSONAL_INFO } from '../constants';
import { navbarVariant } from '../utils/motionVariants';

/**
 * Modern navigation with mix-blend-difference effect
 */
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Intersection Observer for scroll spy
  useEffect(() => {
    const sections = NAV_LINKS.map(link => document.querySelector(link.href)).filter(Boolean);

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
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

    return () => {
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
      className="fixed top-0 w-full z-50 py-6 mix-blend-difference"
    >
      <div className="px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="font-display font-bold text-xl tracking-tighter text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          AJ<span style={{ color: '#CCFF00' }}>.</span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12 font-mono text-xs tracking-widest uppercase text-gray-400">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="transition-colors"
              style={{
                color: activeSection === link.id ? '#CCFF00' : '',
                '--hover-color': '#CCFF00'
              }}
              onMouseEnter={(e) => activeSection !== link.id && (e.target.style.color = '#CCFF00')}
              onMouseLeave={(e) => activeSection !== link.id && (e.target.style.color = '')}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Contact CTA Button */}
          <motion.a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:inline-flex items-center justify-center w-8 h-8 rounded-full border border-gray-700 transition-all duration-300"
            aria-label="Contact"
            onMouseEnter={(e) => {
              e.target.style.borderColor = '#CCFF00';
              e.target.style.backgroundColor = '#CCFF00';
              e.target.style.color = 'black';
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = '';
              e.target.style.backgroundColor = '';
              e.target.style.color = '';
            }}
          >
            <HiArrowUpRight className="w-4 h-4" />
          </motion.a>

          {/* Social Links */}
          <div className="hidden md:flex items-center gap-4">
            <motion.a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -1 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-300 transition-colors font-mono text-xs uppercase"
              aria-label="GitHub"
              onMouseEnter={(e) => e.target.style.color = '#CCFF00'}
              onMouseLeave={(e) => e.target.style.color = ''}
            >
              Github
            </motion.a>
            <motion.a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -1 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-300 transition-colors font-mono text-xs uppercase"
              aria-label="LinkedIn"
              onMouseEnter={(e) => e.target.style.color = '#CCFF00'}
              onMouseLeave={(e) => e.target.style.color = ''}
            >
              LinkedIn
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white transition-colors"
            aria-label="Toggle menu"
            onMouseEnter={(e) => e.target.style.color = '#CCFF00'}
            onMouseLeave={(e) => e.target.style.color = 'white'}
          >
            {isMobileMenuOpen ? (
              <HiXMark className="w-6 h-6" />
            ) : (
              <HiBars3 className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 bg-bg-pure/95 backdrop-blur-md border-b border-white/10"
          >
            <div className="px-6 py-8 space-y-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block font-mono text-sm uppercase tracking-widest transition-colors"
                  style={{
                    color: activeSection === link.id ? '#CCFF00' : 'rgb(209 213 219)'
                  }}
                  onMouseEnter={(e) => activeSection !== link.id && (e.target.style.color = '#CCFF00')}
                  onMouseLeave={(e) => activeSection !== link.id && (e.target.style.color = '')}
                >
                  {link.label}
                </a>
              ))}
              {/* Mobile Social Links */}
              <div className="flex items-center gap-6 pt-4 mt-4 border-t border-white/10">
                <motion.a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.95 }}
                  className="font-mono text-xs uppercase tracking-widest"
                  style={{ color: 'rgb(209 213 219)' }}
                  onMouseEnter={(e) => e.target.style.color = '#CCFF00'}
                  onMouseLeave={(e) => e.target.style.color = ''}
                >
                  Github
                </motion.a>
                <motion.a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.95 }}
                  className="font-mono text-xs uppercase tracking-widest"
                  style={{ color: 'rgb(209 213 219)' }}
                  onMouseEnter={(e) => e.target.style.color = '#CCFF00'}
                  onMouseLeave={(e) => e.target.style.color = ''}
                >
                  LinkedIn
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
