import React from 'react';
import { Layers, Zap, Eye, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

export const ValueProps: React.FC = () => {
  const values = [
    {
      icon: Layers,
      title: 'BUILT FROM SCRATCH',
      subtitle: 'Every site starts with the business.',
      desc: 'No generic off-the-shelf theme or cookie-cutter layout. We shape every line of design and code specifically around your actual services, target customers, and business goals.'
    },
    {
      icon: Zap,
      title: 'FAST DELIVERY',
      subtitle: 'AI-assisted development allows rapid production without sacrificing design refinement.',
      desc: 'We combine senior design taste with modern engineering workflows to deliver bespoke, production-grade websites in days, not months.'
    },
    {
      icon: Eye,
      title: 'PREVIEW BEFORE COMMITMENT',
      subtitle: 'Prospects can experience a working concept before deciding.',
      desc: 'We show rather than tell. Evaluate an actual live working concept tailored to your business before signing contracts or paying large upfront retainers.'
    },
    {
      icon: RefreshCw,
      title: 'LONG-TERM SUPPORT',
      subtitle: 'Maintenance, updates and campaign landing pages available after launch.',
      desc: 'Your site remains active and protected. We handle ongoing technical maintenance, small content updates, and dedicated monthly ad campaign pages.'
    }
  ];

  return (
    <section className="py-28 sm:py-36 border-b border-border-subtle bg-surface-2/60 relative overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-5 sm:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-16"
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent font-semibold block mb-3">
            / WHY QUANTRIX
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-text-main tracking-tight leading-[1.1]">
            Designed for clarity, speed, and real business results.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const IconComponent = v.icon;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3 }}
                className="bg-dark p-7 rounded-2xl border border-border-subtle hover:border-border-accent transition-all duration-300 flex flex-col justify-between shadow-subtle group"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-surface-2 border border-border-subtle flex items-center justify-center text-accent mb-6 group-hover:border-cream-warm/30 transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-accent mb-2">
                    {v.title}
                  </h3>

                  <p className="text-sm font-semibold text-text-main mb-3 leading-snug group-hover:text-cream-warm transition-colors">
                    {v.subtitle}
                  </p>

                  <p className="text-xs text-text-muted leading-relaxed font-normal">
                    {v.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
