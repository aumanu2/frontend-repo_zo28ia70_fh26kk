import React from 'react';
import NavbarMega from './components/NavbarMega.jsx';
import Hero3D from './components/Hero3D.jsx';
import AISearch from './components/AISearch.jsx';
import TechShowcase from './components/TechShowcase.jsx';
import MegaFooter from './components/MegaFooter.jsx';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white selection:bg-blue-600/30 selection:text-white">
      <NavbarMega />
      <main>
        <Hero3D />
        <AISearch />
        <TechShowcase />
      </main>
      <MegaFooter />
    </div>
  );
}

export default App;
