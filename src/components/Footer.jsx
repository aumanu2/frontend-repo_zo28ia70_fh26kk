import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10 bg-[#0a0f1a] border-t border-white/10">
      <div className="container mx-auto px-6 sm:px-10 max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-white/70 text-sm">© {new Date().getFullYear()} Novo Digi Health. All rights reserved.</div>
        <div className="flex items-center gap-6 text-sm text-white/60">
          <a className="hover:text-white/90" href="https://novodigihealth.net/" target="_blank" rel="noreferrer">Company</a>
          <a className="hover:text-white/90" href="#ai-search">AI Search</a>
          <a className="hover:text-white/90" href="#">Privacy</a>
          <a className="hover:text-white/90" href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
