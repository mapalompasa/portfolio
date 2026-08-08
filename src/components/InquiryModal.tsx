import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, Send } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    industry: '',
    website: '',
    description: '',
    email: '',
    details: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      
      <div className="bg-surface border border-border-accent rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative my-8 animate-fadeIn">
        
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg bg-dark text-text-muted hover:text-text-main transition"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl font-bold text-text-main">Concept Preview Requested</h3>
            <p className="text-sm text-text-muted leading-relaxed">
              We've received your business details for <span className="text-cream-warm font-semibold">{formData.business || 'your company'}</span>. Our studio will prepare a customized interactive concept preview and send a private preview link to <span className="text-text-main font-mono">{formData.email}</span>.
            </p>
            <button
              onClick={handleResetAndClose}
              className="mt-6 w-full bg-cream-warm text-dark font-semibold py-3 rounded-lg text-sm hover:bg-cream-soft transition"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            
            {/* Modal Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-accent bg-accent/10 px-2.5 py-0.5 rounded border border-accent/20 mb-2">
                <Sparkles className="w-3 h-3" />
                <span>RISK-FREE PREVIEW</span>
              </div>
              <h2 className="font-display text-2xl font-extrabold text-text-main">
                Get Your Concept Preview
              </h2>
              <p className="text-xs text-text-muted mt-1">
                Tell us about your business so we can build a live working preview around your actual services.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-text-muted mb-1">YOUR NAME *</label>
                  <input
                    required
                    type="text"
                    placeholder="Marcus Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-dark border border-border-subtle focus:border-accent rounded-lg px-3 py-2 text-xs text-text-main placeholder-text-muted/40 focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-text-muted mb-1">BUSINESS NAME *</label>
                  <input
                    required
                    type="text"
                    placeholder="Vance Solar & Roofing"
                    value={formData.business}
                    onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                    className="w-full bg-dark border border-border-subtle focus:border-accent rounded-lg px-3 py-2 text-xs text-text-main placeholder-text-muted/40 focus:outline-none transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-text-muted mb-1">INDUSTRY / CATEGORY *</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Home Services / Trade"
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full bg-dark border border-border-subtle focus:border-accent rounded-lg px-3 py-2 text-xs text-text-main placeholder-text-muted/40 focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-text-muted mb-1">CURRENT WEBSITE</label>
                  <input
                    type="text"
                    placeholder="www.vancesolar.com"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full bg-dark border border-border-subtle focus:border-accent rounded-lg px-3 py-2 text-xs text-text-main placeholder-text-muted/40 focus:outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-text-muted mb-1">WHAT DOES YOUR BUSINESS DO? *</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Residential solar panel installations and roof replacements"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full bg-dark border border-border-subtle focus:border-accent rounded-lg px-3 py-2 text-xs text-text-main placeholder-text-muted/40 focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-text-muted mb-1">EMAIL ADDRESS *</label>
                <input
                  required
                  type="email"
                  placeholder="marcus@vancesolar.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-dark border border-border-subtle focus:border-accent rounded-lg px-3 py-2 text-xs text-text-main placeholder-text-muted/40 focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-text-muted mb-1">ADDITIONAL DETAILS (OPTIONAL)</label>
                <textarea
                  rows={3}
                  placeholder="Specific pages, key services, or style preferences..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full bg-dark border border-border-subtle focus:border-accent rounded-lg px-3 py-2 text-xs text-text-main placeholder-text-muted/40 focus:outline-none transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-cream-warm hover:bg-cream-soft text-dark font-semibold py-3 rounded-lg text-xs transition shadow-subtle mt-2"
              >
                <span>Request Concept Preview</span>
                <Send className="w-3.5 h-3.5" />
              </button>

            </form>

          </div>
        )}

      </div>

    </div>
  );
};
