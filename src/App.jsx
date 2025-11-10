import React from 'react';
import Hero3D from './components/Hero3D.jsx';
import Features from './components/Features.jsx';
import AISearch from './components/AISearch.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white">
      <Hero3D />
      <Features />
      <AISearch />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;
