import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import TechStack from './sections/TechStack';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-bg-pure relative overflow-x-hidden">
      {/* Grid background pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none grid-bg bg-grid-pattern opacity-40 h-screen"></div>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
