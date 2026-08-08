import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles, MonitorPlay } from 'lucide-react';
import { motion } from 'framer-motion';

interface ConceptOfferProps {
  onOpenInquiry: () => void;
}

export const ConceptOffer: React.FC<ConceptOfferProps> = ({ onOpenInquiry }) => {
  const points = [
    'Built with your real business name & location',
    'Custom tailored to your specific core services',
    'High-end visual direction tailored to your market',
    'Fully interactive working concept (scroll, click, test)',
    'Zero obligation or generic template pitch'
  ];

  return (
    <section className="py-28 sm:py-36 border-b border-border-subtle bg-surface relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1340px] mx-auto px-5 sm:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="bg-dark border border-border-accent rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden"
        >
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-warm/10 border border-cream-warm/20 text-cream-warm text-xs font-mono mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>RISK-FREE EVALUATION</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-text-main tracking-tight leading-[1.1] mb-6">
                See your website <br />
                <span className="text-cream-warm italic font-serif font-normal">before you commit.</span>
              </h2>

              <p className="text-base sm:text-lg text-text-muted leading-relaxed mb-8 max-w-xl font-normal">
                Instead of asking you to imagine what your new website could look like, we'll build a working concept around your actual business.
              </p>

              <div className="space-y-3 mb-10">
                {points.map((pt, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs sm:text-sm text-text-main">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenInquiry}
                className="group flex items-center justify-center gap-2 bg-cream-warm hover:bg-cream-soft text-dark font-semibold px-8 py-4 rounded-lg text-xs font-mono uppercase tracking-wider transition shadow-subtle"
              >
                <span>Request a Concept Preview</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </motion.button>

            </div>

            {/* Right Column: Visual Box */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-surface-2 p-6 sm:p-8 rounded-2xl border border-border-subtle flex flex-col justify-between h-full space-y-6 shadow-subtle">
                
                <div className="flex items-center gap-3 border-b border-border-subtle pb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center text-accent">
                    <MonitorPlay className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-text-main">Live Proof Over Sales Pitch</h3>
                    <span className="text-[11px] font-mono text-text-muted">How prospects evaluate Quantrix</span>
                  </div>
                </div>

                <p className="text-xs text-text-muted leading-relaxed">
                  When you receive a concept proposal from Quantrix, you aren't looking at static Figma frames. You get a private link to an interactive website experience built specifically for your company.
                </p>

                <div className="bg-dark p-4 rounded-xl border border-white/5 space-y-2.5 text-xs font-mono">
                  <div className="flex justify-between text-text-muted">
                    <span>Turnaround Time:</span>
                    <span className="text-cream-warm font-semibold">48 - 72 Hours</span>
                  </div>
                  <div className="flex justify-between text-text-muted">
                    <span>Upfront Cost:</span>
                    <span className="text-emerald-400 font-bold">$0.00</span>
                  </div>
                  <div className="flex justify-between text-text-muted">
                    <span>Format:</span>
                    <span className="text-text-main">Interactive Web Preview</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
