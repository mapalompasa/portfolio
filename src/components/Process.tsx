import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProcessProps {
  onOpenInquiry: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onOpenInquiry }) => {
  const steps = [
    {
      number: '01',
      title: 'RESEARCH',
      subtitle: 'Understanding your business context',
      desc: 'We analyze your business services, customer profile, local competition, and current online positioning to identify gaps and growth opportunities.'
    },
    {
      number: '02',
      title: 'CONCEPT',
      subtitle: 'Personalized interactive preview',
      desc: 'Before any financial commitment, we craft a live, working website concept built around your actual business name, imagery, and core services.'
    },
    {
      number: '03',
      title: 'BUILD',
      subtitle: 'Production-ready engineering',
      desc: 'We refine the approved concept into a lightning-fast, mobile-first website complete with lead capture flows, custom copy, and domain configuration.'
    },
    {
      number: '04',
      title: 'GROW',
      subtitle: 'Ongoing support & campaign pages',
      desc: 'Post-launch, we manage hosting performance, security updates, routine content tweaks, and produce dedicated landing pages for your ad campaigns.'
    }
  ];

  return (
    <section id="process" className="py-28 sm:py-36 border-b border-border-subtle bg-dark relative overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-8 border-b border-border-subtle gap-6"
        >
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent font-semibold block mb-3">
              / OUR PROCESS
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-text-main tracking-tight leading-[1.1]">
              A transparent 4-stage progression.
            </h2>
          </div>
          <p className="text-sm text-text-muted max-w-md leading-relaxed">
            From initial research to live concept preview and launch, our process removes uncertainty at every step.
          </p>
        </motion.div>

        {/* 4-Stage Horizontal Progression */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {steps.map((step, idx) => (
            <motion.div 
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="relative flex flex-col justify-between bg-surface p-7 rounded-2xl border border-border-subtle group hover:border-border-accent hover:shadow-subtle transition-all duration-300"
            >
              <div>
                {/* Step Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-border-subtle">
                  <span className="font-mono text-3xl font-extrabold text-accent group-hover:text-cream-warm transition-colors">
                    {step.number}
                  </span>
                  {idx < 3 && (
                    <span className="hidden lg:inline text-text-muted group-hover:text-cream-warm transition-colors">
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-display text-lg font-bold text-text-main group-hover:text-cream-warm transition-colors mb-1">
                  {step.title}
                </h3>
                <span className="font-mono text-[11px] text-accent block mb-3">
                  {step.subtitle}
                </span>

                {/* Description */}
                <p className="text-xs text-text-muted leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>

              {/* Progress Indicator */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-text-muted">
                <span>STAGE {step.number} OF 04</span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:bg-cream-warm transition-colors" />
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};
