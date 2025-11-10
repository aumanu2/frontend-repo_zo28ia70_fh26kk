import React, { useState } from 'react';
import { Menu, X, Shield, Activity, Sparkles, Layers, Cpu, Globe, ArrowRight, BookOpen, LifeBuoy, Users, Building2 } from 'lucide-react';

const nav = [
  {
    label: 'Solutions',
    panel: [
      { icon: Sparkles, title: 'AI Wellness Triage', desc: 'Natural-language intake with clinical heuristics.', href: '#ai-search' },
      { icon: Activity, title: 'Risk Stratification', desc: 'Evidence-aligned, guideline-aware scoring.', href: '#features' },
      { icon: Shield, title: 'Compliance & Privacy', desc: 'US-first data handling and security controls.', href: '#' },
      { icon: Layers, title: 'Integrations', desc: 'EHR, labs, wearables, and data connectors.', href: '#' },
    ],
  },
  {
    label: 'Industries',
    panel: [
      { icon: Building2, title: 'Employers', desc: 'Population wellness with measurable outcomes.', href: '#' },
      { icon: Users, title: 'Clinics', desc: 'Pre-visit automation and care gap closure.', href: '#' },
      { icon: Globe, title: 'Digital Health', desc: 'API-first screening for telehealth flows.', href: '#' },
      { icon: Cpu, title: 'Researchers', desc: 'De-identified cohorts and signal testing.', href: '#' },
    ],
  },
  {
    label: 'Resources',
    panel: [
      { icon: BookOpen, title: 'Guides', desc: 'Preventive care playbooks and checklists.', href: '#' },
      { icon: LifeBuoy, title: 'Support', desc: 'Docs, status, and implementation help.', href: '#' },
      { icon: Shield, title: 'Security', desc: 'Whitepapers and audit letters.', href: '#' },
      { icon: Sparkles, title: 'Product Updates', desc: 'What’s new and what’s next.', href: '#' },
    ],
  },
  {
    label: 'Company',
    panel: [
      { icon: Users, title: 'About', desc: 'Mission, principles, and leadership.', href: '#' },
      { icon: Building2, title: 'Careers', desc: 'Join us to build the future of wellness.', href: '#' },
      { icon: Globe, title: 'Press', desc: 'News, brand, and media kit.', href: '#' },
      { icon: Shield, title: 'Privacy', desc: 'Policies and commitments.', href: '#' },
    ],
  },
];

const NavbarMega = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  return (
    <header className="sticky top-0 z-50 bg-[#0a0f1a]/80 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-blue-500/20 border border-blue-400/30 grid place-items-center">
              <Sparkles className="h-4 w-4 text-blue-300" />
            </div>
            <span className="font-semibold tracking-tight">WellnessAI</span>
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            {nav.map((item) => (
              <div key={item.label} className="relative" onMouseEnter={() => setActive(item.label)} onMouseLeave={() => setActive(null)}>
                <button className="text-sm text-white/80 hover:text-white transition px-2 py-2">
                  {item.label}
                </button>
                {active === item.label && (
                  <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-[720px] rounded-2xl border border-white/10 bg-[#0a0f1a] shadow-xl">
                    <div className="grid grid-cols-2 gap-2 p-4">
                      {item.panel.map((p) => (
                        <a key={p.title} href={p.href} className="group flex items-start gap-3 rounded-xl p-3 hover:bg-white/5 transition">
                          <div className="mt-0.5 h-9 w-9 rounded-lg bg-blue-500/10 border border-blue-400/20 grid place-items-center">
                            <p.icon className="h-4 w-4 text-blue-300" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium">{p.title}</span>
                              <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition text-white/60" />
                            </div>
                            <p className="text-xs text-white/60 mt-0.5">{p.desc}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <a href="#ai-search" className="ml-2 inline-flex items-center gap-2 rounded-md bg-blue-500 hover:bg-blue-600 px-4 py-2 text-sm font-medium transition">
              Get Started
            </a>
          </nav>

          <button className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-white/10" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10">
          <div className="px-6 py-4 space-y-6">
            {nav.map((item) => (
              <div key={item.label}>
                <div className="text-xs uppercase tracking-wide text-white/50 mb-2">{item.label}</div>
                <div className="grid grid-cols-1 gap-3">
                  {item.panel.map((p) => (
                    <a key={p.title} href={p.href} className="flex items-start gap-3 rounded-xl p-3 border border-white/10 bg-white/5">
                      <div className="h-9 w-9 rounded-lg bg-blue-500/10 border border-blue-400/20 grid place-items-center">
                        <p.icon className="h-4 w-4 text-blue-300" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">{p.title}</div>
                        <p className="text-xs text-white/60 mt-0.5">{p.desc}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
            <a href="#ai-search" className="inline-flex w-full items-center justify-center rounded-md bg-blue-500 hover:bg-blue-600 px-4 py-2 text-sm font-medium transition">Get Started</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavbarMega;
