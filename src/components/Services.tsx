import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServicesProps {
  onOpenInquiry: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenInquiry }) => {
  const servicesList = [
    {
      number: '01',
      title: 'Custom Website Design & Development',
      description: 'Fully custom, mobile-first websites built around the business\'s actual services, brand, and customer journey.',
      deliverables: ['Custom UX/UI Architecture', 'Responsive Codebase', 'SEO & Speed Optimization']
    },
    {
      number: '02',
      title: 'Personalized Concept Previews',
      description: 'A live working website concept built specifically around the prospective client\'s real business before they commit.',
      deliverables: ['Zero Risk Evaluation', 'Live Interactive Prototype', 'Custom Visual Direction']
    },
    {
      number: '03',
      title: 'Website + Growth Retainer',
      description: 'Ongoing hosting, maintenance, small content updates, plus one custom ad landing page each month.',
      deliverables: ['Continuous Site Security', 'Monthly Ad Campaign Page', 'Priority Technical Updates']
    },
    {
      number: '04',
      title: 'Ad Landing Pages',
      description: 'Standalone landing pages designed around specific advertising campaigns and conversion goals.',
      deliverables: ['High-Intent Copy Architecture', 'Conversion Funnel Hooks', 'A/B Testing Ready']
    }
  ];

  return (
    <section id="services" className="py-28 sm:py-36 border-b border-border-subtle bg-surface relative overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Animated Section Divider */}
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="h-[1px] bg-border-subtle mb-16"
        />

        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-16"
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent font-semibold block mb-3">
            / WHAT WE DO
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-text-main tracking-tight leading-[1.1]">
            Websites built around the business, <br className="hidden sm:inline" />
            <span className="text-cream-warm italic font-serif font-normal">not the template.</span>
          </h2>
        </motion.div>

        {/* Editorial Interactive Service Rows */}
        <div className="divide-y divide-border-subtle border-t border-b border-border-subtle">
          {servicesList.map((service, idx) => (
            <motion.div 
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="py-10 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start group hover:bg-surface-2/60 transition-all duration-300 px-4 -mx-4 rounded-xl border border-transparent hover:border-border-accent/40"
            >
              {/* Service Number (2 cols) */}
              <div className="lg:col-span-2 flex items-center justify-between">
                <span className="font-mono text-2xl sm:text-3xl font-extrabold text-accent group-hover:text-cream-warm transition-colors">
                  {service.number}
                </span>
                <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest lg:hidden">
                  SERVICE
                </span>
              </div>

              {/* Service Title (4 cols) */}
              <div className="lg:col-span-4">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-text-main group-hover:text-cream-warm transition-colors duration-200 group-hover:translate-x-1 transform">
                  {service.title}
                </h3>
              </div>

              {/* Description & Deliverables (6 cols) */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <p className="text-sm text-text-muted leading-relaxed mb-4 group-hover:text-text-main transition-colors">
                  {service.description}
                </p>

                <div className="flex flex-wrap items-center gap-2">
                  {service.deliverables.map((item, i) => (
                    <span 
                      key={i}
                      className="text-[11px] font-mono text-text-muted bg-dark px-2.5 py-1 rounded border border-border-subtle group-hover:border-cream-warm/25 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Interactive Callout */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-between p-6 sm:p-8 rounded-2xl bg-dark border border-border-subtle hover:border-border-accent transition-all gap-4 shadow-subtle"
        >
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-accent mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CUSTOM WORKFLOW</span>
            </div>
            <h4 className="text-base font-bold text-text-main">Ready to discuss your custom project requirements?</h4>
            <p className="text-xs text-text-muted">Get a live concept preview built around your business before committing.</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            onClick={onOpenInquiry}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-cream-warm hover:bg-cream-soft text-dark font-semibold px-6 py-3.5 rounded-lg text-xs font-mono uppercase tracking-wider transition shadow-sm"
          >
            <span>Request Concept Preview</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};
