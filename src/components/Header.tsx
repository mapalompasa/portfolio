import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

interface HeaderProps {
  onOpenInquiry: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenInquiry }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('work');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section tracking
      const sections = ['work', 'services', 'about', 'process', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work', id: 'work' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Process', href: '#process', id: 'process' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-dark/90 backdrop-blur-md border-b border-border-subtle py-3 shadow-subtle' 
          : 'bg-transparent py-5'
      }`}
    >
      {/* Top 1.5px Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-accent origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />

      <div className="max-w-[1340px] mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* LEFT: QUANTRIX Brand logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-text-main group-hover:text-cream-warm transition-colors">
            QUANTRIX
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
        </a>

        {/* CENTER: Navigation Links with Active Section Tracking */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono font-medium tracking-wide">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`py-1 relative transition-colors ${
                  isActive ? 'text-cream-warm font-semibold' : 'text-text-muted hover:text-text-main'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span 
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-accent rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* RIGHT: CTA Button with Hover & Press Motion */}
        <div className="hidden md:flex items-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            onClick={onOpenInquiry}
            className="group flex items-center gap-1.5 bg-cream-warm/10 hover:bg-cream-warm/20 text-cream-warm border border-cream-warm/25 hover:border-cream-warm/40 text-xs font-mono font-semibold px-4 py-2 rounded-lg transition-all duration-200"
          >
            <span>Get Concept Preview</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-text-muted hover:text-text-main p-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="md:hidden fixed inset-x-0 top-[60px] bg-surface/98 backdrop-blur-xl border-b border-border-subtle p-6 flex flex-col gap-5 shadow-2xl"
        >
          <nav className="flex flex-col gap-4 border-b border-border-subtle pb-5 font-mono">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === link.id ? 'text-cream-warm font-semibold' : 'text-text-main hover:text-accent'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenInquiry();
            }}
            className="w-full flex items-center justify-center gap-2 bg-cream-warm text-dark font-semibold py-3 rounded-lg text-xs font-mono uppercase tracking-wider transition hover:bg-cream-soft"
          >
            <span>Get Concept Preview</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </header>
  );
};
