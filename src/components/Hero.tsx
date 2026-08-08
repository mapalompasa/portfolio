import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Lock } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

interface HeroProps {
  onOpenInquiry: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry, onExploreWork }) => {
  // Staggered Container Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const lineVariants: Variants = {
    hidden: { opacity: 0, y: "100%" },
    visible: {
      opacity: 1,
      y: "0%",
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 border-b border-border-subtle overflow-hidden bg-dark">
      {/* Background Grid & Radial Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-35 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-radial-gradient pointer-events-none" />

      <div className="max-w-[1340px] mx-auto px-5 sm:px-8 relative z-10">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center"
        >
          
          {/* LEFT: Nobl-Inspired Editorial Typography & Choreographed Text Reveal (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Stage 2: Eyebrow & Status Badge */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 mb-6">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent font-semibold px-3 py-1 bg-surface-2 rounded-md border border-border-subtle">
                / DIGITAL STUDIO
              </span>
              <div className="flex items-center gap-2 bg-dark/90 px-3 py-1 rounded-full border border-border-subtle text-[11px] text-text-muted">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-text-main tracking-wider">AVAILABLE FOR Q3 / Q4 PROJECTS</span>
              </div>
            </motion.div>

            {/* Stage 3: Main Display Headline Line-by-Line Clip Reveal */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-[68px] font-extrabold text-text-main tracking-tight leading-[1.08] mb-6">
              <span className="inline-block overflow-hidden pb-1">
                <motion.span variants={lineVariants} className="inline-block">
                  We Build Websites
                </motion.span>
              </span> <br />
              <span className="inline-block overflow-hidden pb-1">
                <motion.span variants={lineVariants} className="inline-block">
                  That <span className="text-cream-warm italic font-serif font-normal">Actually Fit</span>
                </motion.span>
              </span> <br />
              <span className="inline-block overflow-hidden pb-1">
                <motion.span variants={lineVariants} className="inline-block">
                  Your Business.
                </motion.span>
              </span>
            </h1>

            {/* Stage 4: Supporting Copy */}
            <motion.p variants={itemVariants} className="text-base sm:text-xl text-text-muted max-w-2xl leading-relaxed mb-8 font-normal">
              Custom design. Fast delivery. Live concept previews. Websites that help small and mid-sized businesses grow with confidence.
            </motion.p>

            {/* Stage 5 & 6: CTAs with Tactile Hover & Tap Motion */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <motion.button
                whileHover={{ scale: 1.02, x: 2 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenInquiry}
                className="group flex items-center justify-center gap-2 bg-cream-warm hover:bg-cream-soft text-dark font-semibold px-7 py-4 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-200 shadow-subtle"
              >
                <span>Get Your Concept Preview</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.97 }}
                onClick={onExploreWork}
                className="flex items-center justify-center gap-2 bg-surface hover:bg-surface-2 text-text-main border border-border-subtle hover:border-border-accent font-mono text-xs uppercase tracking-wider px-6 py-4 rounded-lg transition-all duration-200"
              >
                <span>Explore Selected Work (02)</span>
              </motion.button>
            </motion.div>

            {/* Micro Feature Callouts */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-border-subtle w-full text-xs font-mono text-text-muted">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>Zero Generic Templates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>Preview Before Commit</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>Rapid Delivery Cycles</span>
              </div>
            </motion.div>

          </div>

          {/* Stage 7: Hero Visual — Real Live Interactive Website Window (5 cols) */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-5 w-full"
          >
            <div className="relative group">
              
              {/* Metallic backlight glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-cream-warm/10 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500" />
              
              {/* Browser Device Frame */}
              <div className="relative bg-surface border border-border-subtle rounded-xl overflow-hidden shadow-preview">
                
                {/* Browser top chrome */}
                <div className="bg-[#18191E] border-b border-border-subtle px-4 py-2.5 flex items-center justify-between select-none">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <div className="bg-dark/80 px-3 py-0.5 rounded text-[11px] font-mono text-text-muted border border-white/5 truncate max-w-[200px] flex items-center gap-1.5">
                    <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span className="truncate">https://cedarandstonecafe.com</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    LIVE
                  </span>
                </div>

                {/* Live Embedded Project Window (Cedar & Stone Cafe) */}
                <div className="h-[460px] sm:h-[500px] bg-dark relative overflow-hidden">
                  <iframe
                    src="/projects/cedar-and-stone-cafe/index.html"
                    title="Cedar & Stone Cafe Live Preview"
                    className="w-full h-full border-0 bg-dark pointer-events-auto"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </div>

                {/* Bottom Bar Label */}
                <div className="bg-surface-2 border-t border-border-subtle p-3 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 text-text-main">
                    <Sparkles className="w-3.5 h-3.5 text-accent" />
                    <span>01 — Cedar &amp; Stone Café</span>
                  </div>
                  <button 
                    onClick={onExploreWork}
                    className="text-accent hover:underline text-[11px]"
                  >
                    View Selected Work (02) ↓
                  </button>
                </div>

              </div>

            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
