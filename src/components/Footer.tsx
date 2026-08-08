import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';

interface FooterProps {
  onOpenInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry }) => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-dark py-16 sm:py-20 border-t border-border-subtle text-text-muted">
      <div className="max-w-[1340px] mx-auto px-5 sm:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between pb-12 border-b border-border-subtle">
          
          {/* Branding & Positioning */}
          <div className="md:col-span-6 space-y-2">
            <a href="#" className="inline-flex items-center gap-2 group">
              <span className="font-display font-extrabold text-xl tracking-tight text-text-main group-hover:text-cream-warm transition-colors">
                QUANTRIX
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
            </a>
            <p className="text-xs text-text-muted max-w-sm leading-relaxed">
              Custom websites for businesses that want something built around them.
            </p>
            <div className="pt-2">
              <a 
                href="mailto:quantrixstudios@gmail.com"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-cream-warm hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-accent" />
                <span>quantrixstudios@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Navigation Links & CTA */}
          <div className="md:col-span-6 flex flex-wrap items-center justify-start md:justify-end gap-6 text-xs font-mono">
            <nav className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-text-muted hover:text-text-main transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <button
              onClick={onOpenInquiry}
              className="flex items-center gap-1 bg-cream-warm/10 hover:bg-cream-warm/20 text-cream-warm border border-cream-warm/25 px-3.5 py-2 rounded text-xs font-semibold transition active:scale-95"
            >
              <span>Get Concept Preview</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-text-muted/60">
          <span>&copy; {currentYear} QUANTRIX DIGITAL STUDIO. ALL RIGHTS RESERVED.</span>
          <span>quantrixstudios@gmail.com</span>
        </div>

      </div>
    </footer>
  );
};
