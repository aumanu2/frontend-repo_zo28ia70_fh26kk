import React from 'react';

const links = {
  Product: ['AI Wellness Triage', 'Risk Stratification', 'Integrations', 'Security'],
  Solutions: ['Employers', 'Clinics', 'Digital Health', 'Researchers'],
  Resources: ['Docs', 'Guides', 'Support', 'Status'],
  Company: ['About', 'Careers', 'Press', 'Privacy'],
};

const MegaFooter = () => {
  return (
    <footer className="bg-[#0a0f1a] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-16 grid grid-cols-2 sm:grid-cols-4 gap-8">
        {Object.entries(links).map(([group, items]) => (
          <div key={group}>
            <div className="text-sm font-semibold text-white/80 mb-4">{group}</div>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/60 hover:text-white/90 transition">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 py-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50">
          <div>© {new Date().getFullYear()} WellnessAI. All rights reserved.</div>
          <div className="space-x-4">
            <a href="#" className="hover:text-white/80">Privacy</a>
            <a href="#" className="hover:text-white/80">Terms</a>
            <a href="#" className="hover:text-white/80">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MegaFooter;
