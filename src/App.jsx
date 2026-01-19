import React from 'react';
import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import TechStack from './sections/TechStack';
import Projects from './sections/Projects';
import Resume from './sections/Resume';
import Contact from './sections/Contact';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content */}
      <main className="pt-24">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Resume />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
