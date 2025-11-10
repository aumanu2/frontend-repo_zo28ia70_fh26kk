import React from 'react';
import { Cpu, Gauge, ShieldCheck, Radio } from 'lucide-react';

const items = [
  {
    icon: Cpu,
    title: 'AI Engine',
    desc: 'Transformer-backed reasoning tuned for preventive care and lifestyle risk.'
  },
  {
    icon: Gauge,
    title: 'Real-time Scoring',
    desc: 'Signal fusion across inputs for fast, explainable wellness scores.'
  },
  {
    icon: ShieldCheck,
    title: 'Security First',
    desc: 'Encryption, role-based access, and audit trails—built for U.S. expectations.'
  },
  {
    icon: Radio,
    title: '3D Interactions',
    desc: 'GPU-accelerated hero with interactive Spline objects and layered gradients.'
  },
];

const TechShowcase = () => {
  return (
    <section id="features" className="py-20 bg-[#0b1220]">
      <div className="container mx-auto px-6 sm:px-10 max-w-7xl">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">Advanced Technology</h2>
            <p className="mt-3 text-white/70 max-w-2xl">Same color theme, fully 3D aesthetics, and enterprise-grade architecture terminology for discerning users.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 overflow-hidden">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl" />
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 border border-blue-400/20">
                <Icon className="w-6 h-6 text-blue-300" />
              </div>
              <h3 className="text-lg font-medium">{title}</h3>
              <p className="mt-2 text-sm text-white/75">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechShowcase;
