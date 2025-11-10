import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

const Hero3D = () => {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a] via-[#0a0f1a]/60 to-transparent pointer-events-none" />
      </div>

      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-6 sm:px-10 max-w-7xl">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-blue-500/10 text-blue-300 px-3 py-1 text-sm border border-blue-400/30 mb-4">US-Based Wellness Health Test</span>
            <h1 className="text-4xl sm:text-6xl font-semibold leading-tight tracking-tight">
              Smarter Preventive Care powered by AI
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Assess your wellness with clinical-grade insights. Built for the US healthcare landscape, designed for people.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#ai-search" className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-500 hover:bg-blue-600 transition text-white px-6 py-3">
                Start AI Health Check
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="https://novodigihealth.net/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-md border border-white/20 hover:bg-white/5 transition px-6 py-3">
                Visit Current Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
