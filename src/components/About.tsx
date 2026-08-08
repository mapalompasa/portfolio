import React from 'react';
import { ShieldCheck, Compass, Zap, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-28 sm:py-36 border-b border-border-subtle bg-dark relative overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Animated Section Divider */}
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="h-[1px] bg-border-subtle mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Eyebrow & Headline (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent font-semibold block mb-3">
              / ABOUT QUANTRIX
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-main tracking-tight leading-[1.1] mb-6">
              We Build Websites <br className="hidden sm:inline" />
              That <span className="text-cream-warm italic font-serif font-normal">Actually Fit</span> <br className="hidden sm:inline" />
              Your Business
            </h2>

            {/* Studio Identity Tag */}
            <div className="bg-surface-2 p-6 rounded-2xl border border-border-subtle text-xs text-text-muted space-y-3 shadow-subtle">
              <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
                <span className="font-mono text-accent uppercase text-[10px] tracking-widest font-semibold">STUDIO POSITIONING</span>
                <span className="font-mono text-text-main text-[11px]">INDEPENDENT STUDIO</span>
              </div>
              <p className="leading-relaxed">
                Quantrix operates as a high-velocity independent studio. We partner directly with business owners to build high-converting websites without agency overhead or templated shortcuts.
              </p>
            </div>
          </motion.div>

          {/* RIGHT: Exact Copy Content with Staggered Motion (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6 text-text-muted text-base sm:text-lg leading-relaxed"
          >
            <p className="text-text-main font-medium text-lg sm:text-xl leading-relaxed">
              Most small business websites look like they came from the same template, because they usually did. We do things differently. Every site we build starts from scratch, shaped around the business it's for, its services, its customers, and what actually makes it different from the shop down the street.
            </p>

            <p>
              We pair fast, modern development with hands-on design, so you get a fully custom site in days instead of weeks, without cutting corners on how it looks or how it works. Before you even commit, we'll often build you a live preview of your own site, so you're deciding based on something real, not a sales pitch.
            </p>

            <p>
              We work with small and mid-size businesses across industries including home services, fitness, hospitality, retail, and local trades. Whatever you run, the goal is the same: a site that looks like it was built for you, because it was.
            </p>

            <p>
              Beyond the build, we stick around. Ongoing site maintenance, updates, and dedicated landing pages for your ad campaigns keep your online presence working long after launch, not just on day one.
            </p>

            {/* Micro Pillars */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border-subtle text-xs font-mono text-text-main">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-accent" />
                <span>Zero Corporate Jargon</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-accent" />
                <span>Rapid Execution</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-accent" />
                <span>Transparent Proof</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-accent" />
                <span>Personalized Partnership</span>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
