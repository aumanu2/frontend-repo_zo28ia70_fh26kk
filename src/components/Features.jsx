import React from 'react';
import { Shield, Activity, FlaskConical, Clock } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'HIPAA-Ready & Secure',
    desc: 'Your data is encrypted in transit and at rest. Built to align with U.S. privacy expectations.'
  },
  {
    icon: Activity,
    title: 'Clinical-Grade Signals',
    desc: 'Evidence-informed screening logic and risk flags that map to U.S. guidelines.'
  },
  {
    icon: FlaskConical,
    title: 'Lab & Device Friendly',
    desc: 'Integrates with common U.S. labs and wearables to enrich your wellness snapshot.'
  },
  {
    icon: Clock,
    title: 'Minutes to Insights',
    desc: 'Short, guided flow—get personalized recommendations in under 3 minutes.'
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-[#0b1220]">
      <div className="container mx-auto px-6 sm:px-10 max-w-7xl">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold">Why choose our Wellness Health Test?</h2>
          <p className="mt-3 text-white/70 max-w-2xl">Designed for U.S. users with high standards for privacy, clarity, and outcomes.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
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

export default Features;
