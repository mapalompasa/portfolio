import React, { useState } from 'react';
import { Send, CheckCircle2, ArrowUpRight, Mail, Clock, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('Concept Preview');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    website: '',
    message: ''
  });

  const servicesOptions = [
    'New Website',
    'Website Redesign',
    'Concept Preview',
    'Landing Page',
    'Ongoing Retainer'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 sm:py-36 border-b border-border-subtle bg-dark relative overflow-hidden">
      
      {/* Background Subtle Radial Accent */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

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
          
          {/* LEFT: Contact Destination Information (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent font-semibold block mb-3">
              / START A PROJECT
            </span>
            
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-text-main tracking-tight leading-[1.1] mb-6">
              Let's build something <br />
              <span className="text-cream-warm italic font-serif font-normal">that fits.</span>
            </h2>

            <p className="text-base text-text-muted leading-relaxed mb-8">
              Tell us about your business, current website, or the concept preview you'd like us to prepare. We respond directly to every inquiry.
            </p>

            {/* Email Contact Feature Destination */}
            <div className="bg-surface p-6 rounded-2xl border border-border-subtle space-y-6 mb-8 group hover:border-border-accent transition-all">
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  DIRECT STUDIO CONTACT
                </span>
                <span className="font-mono text-[10px] text-text-muted">RESPONSE &lt; 12 HRS</span>
              </div>

              <div>
                <span className="text-xs text-text-muted font-mono block mb-1">PROJECT INQUIRIES &amp; PREVIEWS</span>
                <a 
                  href="mailto:quantrixstudios@gmail.com"
                  className="inline-flex items-center gap-2 font-mono text-base sm:text-lg font-bold text-cream-warm hover:text-white transition-colors group/link"
                >
                  <Mail className="w-4 h-4 text-accent shrink-0" />
                  <span className="relative">
                    quantrixstudios@gmail.com
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover/link:w-full" />
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-accent transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>
            </div>

            <div className="space-y-3 text-xs text-text-muted font-mono">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-accent" />
                <span>Operating Hours: Mon – Fri (9:00 AM – 6:00 PM EST)</span>
              </div>
              <p className="text-[11px] text-text-muted/60 leading-relaxed">
                Independent Digital Studio building custom websites for small &amp; mid-sized growing businesses.
              </p>
            </div>
          </motion.div>

          {/* RIGHT: Inquiry Form (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 bg-surface p-8 sm:p-10 rounded-2xl border border-border-subtle shadow-subtle"
          >
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl font-bold text-text-main">Inquiry Received</h3>
                <p className="text-sm text-text-muted max-w-md mx-auto">
                  Thank you for reaching out to Quantrix. We will review your business information and send a response to your inbox shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-mono text-accent hover:underline"
                >
                  Send another message →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name & Business */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono text-text-muted mb-2">YOUR NAME *</label>
                    <input
                      required
                      type="text"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-dark border border-border-subtle focus:border-accent rounded-lg px-4 py-3 text-sm text-text-main placeholder-text-muted/40 focus:outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-text-muted mb-2">BUSINESS NAME *</label>
                    <input
                      required
                      type="text"
                      placeholder="Apex Dental Clinic"
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      className="w-full bg-dark border border-border-subtle focus:border-accent rounded-lg px-4 py-3 text-sm text-text-main placeholder-text-muted/40 focus:outline-none transition"
                    />
                  </div>
                </div>

                {/* Email & Website */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono text-text-muted mb-2">EMAIL ADDRESS *</label>
                    <input
                      required
                      type="email"
                      placeholder="jane@apexdental.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-dark border border-border-subtle focus:border-accent rounded-lg px-4 py-3 text-sm text-text-main placeholder-text-muted/40 focus:outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-text-muted mb-2">CURRENT WEBSITE (OPTIONAL)</label>
                    <input
                      type="text"
                      placeholder="www.apexdental.com"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="w-full bg-dark border border-border-subtle focus:border-accent rounded-lg px-4 py-3 text-sm text-text-main placeholder-text-muted/40 focus:outline-none transition"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-mono text-text-muted mb-3">WHAT DO YOU NEED? *</label>
                  <div className="flex flex-wrap gap-2">
                    {servicesOptions.map((svc) => (
                      <button
                        key={svc}
                        type="button"
                        onClick={() => setSelectedService(svc)}
                        className={`px-3.5 py-2 rounded-lg text-xs font-mono transition active:scale-95 ${
                          selectedService === svc
                            ? 'bg-cream-warm text-dark border border-cream-warm font-semibold shadow-sm'
                            : 'bg-dark text-text-muted border border-border-subtle hover:border-text-muted'
                        }`}
                      >
                        {svc}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono text-text-muted mb-2">MESSAGE OR PROJECT DETAILS</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your services, goals, or current website challenges..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-dark border border-border-subtle focus:border-accent rounded-lg px-4 py-3 text-sm text-text-main placeholder-text-muted/40 focus:outline-none transition resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-cream-warm hover:bg-cream-soft text-dark font-semibold py-4 rounded-lg text-xs font-mono uppercase tracking-wider transition shadow-subtle"
                >
                  <span>Send Inquiry</span>
                  <Send className="w-4 h-4" />
                </motion.button>

              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
};
