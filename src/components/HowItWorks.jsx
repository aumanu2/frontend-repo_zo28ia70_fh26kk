import React from 'react';
import { Sparkles, ListChecks, HeartPulse, ClipboardCheck } from 'lucide-react';

const steps = [
  {
    icon: Sparkles,
    title: 'Tell us about you',
    desc: 'Answer a short, plain-language intake tailored for U.S. guidelines.',
  },
  {
    icon: ListChecks,
    title: 'AI pre-screens',
    desc: 'Our engine compares your inputs to risk factors and best-practice checklists.',
  },
  {
    icon: HeartPulse,
    title: 'Get your wellness score',
    desc: 'See strengths, gaps, and suggested next steps in a clear, friendly format.',
  },
  {
    icon: ClipboardCheck,
    title: 'Act with confidence',
    desc: 'Optional lab/device connections and referrals to trusted care when needed.',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-[#0b1220]">
      <div className="container mx-auto px-6 sm:px-10 max-w-6xl">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold">How it works</h2>
          <p className="mt-3 text-white/70">A simple path to better everyday health.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4 border border-indigo-400/20">
                <Icon className="w-6 h-6 text-indigo-300" />
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

export default HowItWorks;
