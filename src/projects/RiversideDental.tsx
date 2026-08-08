import React, { useState } from 'react';
import { Calendar, Clock, Phone, MapPin, CheckCircle2, Shield, Award, ArrowUpRight, Sparkles, User, HeartHandshake } from 'lucide-react';

export const RiversideDentalDemo: React.FC = () => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'services' | 'cases'>('overview');

  const caseStudies = [
    {
      index: "01",
      title: "Veneers & Smile Makeover",
      treatment: "Porcelain Veneers · Teeth Whitening",
      image: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?q=80&w=800&auto=format&fit=crop",
    },
    {
      index: "02",
      title: "Invisalign Alignment",
      treatment: "Invisalign · Composite Bonding",
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=800&auto=format&fit=crop",
    },
    {
      index: "03",
      title: "Full Mouth Restoration",
      treatment: "Dental Implants · Crown Restoration",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop",
    }
  ];

  const servicesList = [
    { index: "01", title: "General Dentistry", desc: "Routine check-ups, cleanings, and preventive care for the whole family." },
    { index: "02", title: "Cosmetic Dentistry", desc: "Veneers, bonding, and custom smile makeovers to enhance your natural beauty." },
    { index: "03", title: "Teeth Whitening", desc: "Professional in-office whitening for a noticeably brighter, confident smile." },
    { index: "04", title: "Dental Implants", desc: "Permanent, natural-looking tooth replacements with long-lasting durability." },
    { index: "05", title: "Invisalign Aligners", desc: "Clear, comfortable aligners to straighten teeth discreetly and effectively." },
    { index: "06", title: "Children's Dentistry", desc: "Gentle, welcoming oral healthcare tailored specifically for young patients." }
  ];

  return (
    <div className="bg-[#F8F9FA] text-[#1E293B] font-sans min-h-full pb-12 selection:bg-[#0EA5E9] selection:text-white">
      {/* Mini Demo Top Navigation */}
      <nav className="sticky top-0 z-20 bg-white/95 backdrop-blur border-b border-slate-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#0EA5E9] flex items-center justify-center text-white font-bold shadow-sm">
            <HeartHandshake className="w-4 h-4 stroke-[2.5]" />
          </div>
          <span className="font-serif font-bold tracking-tight text-slate-900 text-sm sm:text-base">
            RIVERSIDE <span className="text-[#0EA5E9] font-sans font-normal text-xs uppercase tracking-wider">DENTAL CARE</span>
          </span>
        </div>
        
        <div className="flex items-center gap-3">
          <a href="tel:5125550198" className="hidden sm:flex items-center gap-1.5 text-xs text-slate-600 hover:text-[#0EA5E9]">
            <Phone className="w-3.5 h-3.5 text-[#0EA5E9]" />
            <span className="font-mono">(512) 555-0198</span>
          </a>
          <button 
            onClick={() => setBookingOpen(true)}
            className="bg-[#0EA5E9] hover:bg-[#0284C7] text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition shadow-sm"
          >
            Book Appointment
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 py-8 sm:py-12 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 text-[#0EA5E9] text-xs font-mono mb-4">
          <Sparkles className="w-3 h-3" />
          <span>AUSTIN, TX — FAMILY &amp; COSMETIC DENTISTRY</span>
        </div>
        
        <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
          Confident smiles start with compassionate care.
        </h1>
        
        <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto mb-6 leading-relaxed">
          Modern dentistry designed around your comfort, health, and long-term smile goals. Gentle treatment, state-of-the-art diagnostics, and transparent pricing.
        </p>

        {/* Feature Highlights Bar */}
        <div className="grid grid-cols-3 gap-2 max-w-lg mx-auto bg-white p-3 rounded-xl border border-slate-200 shadow-sm mb-8">
          <div className="text-center">
            <span className="text-xs font-bold text-slate-900 block">4.9★ Rated</span>
            <span className="text-[10px] text-slate-500 font-mono">500+ Reviews</span>
          </div>
          <div className="text-center border-x border-slate-200">
            <span className="text-xs font-bold text-slate-900 block">Same-Day</span>
            <span className="text-[10px] text-slate-500 font-mono">Emergency Care</span>
          </div>
          <div className="text-center">
            <span className="text-xs font-bold text-slate-900 block">In-House</span>
            <span className="text-[10px] text-slate-500 font-mono">Savings Plan</span>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center gap-2 border-b border-slate-200 pb-3 mb-6">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition ${activeTab === 'overview' ? 'bg-[#0EA5E9] text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('services')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition ${activeTab === 'services' ? 'bg-[#0EA5E9] text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
          >
            Services (06)
          </button>
          <button
            onClick={() => setActiveTab('cases')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition ${activeTab === 'cases' ? 'bg-[#0EA5E9] text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
          >
            Smile Transformations
          </button>
        </div>

        {/* Tab Contents */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <Shield className="w-5 h-5 text-[#0EA5E9] mb-2" />
              <h4 className="text-sm font-bold text-slate-900 mb-1">Preventive Dentistry</h4>
              <p className="text-xs text-slate-600">Gentle dental hygiene cleanings, oral cancer screenings, digital x-rays, and cavity prevention for children and adults.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <Award className="w-5 h-5 text-[#0EA5E9] mb-2" />
              <h4 className="text-sm font-bold text-slate-900 mb-1">Cosmetic Smile Design</h4>
              <p className="text-xs text-slate-600">Porcelain veneers, Invisalign clear aligners, and laser teeth whitening tailored to your facial aesthetics.</p>
            </div>
          </div>
        )}

        {activeTab === 'services' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            {servicesList.map((svc) => (
              <div key={svc.index} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-[10px] text-[#0EA5E9] font-bold">{svc.index}</span>
                  <h4 className="text-xs font-bold text-slate-900">{svc.title}</h4>
                </div>
                <p className="text-[11px] text-slate-600">{svc.desc}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'cases' && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            {caseStudies.map((cs) => (
              <div key={cs.index} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                <img src={cs.image} alt={cs.title} className="w-full h-28 object-cover" />
                <div className="p-3">
                  <span className="font-mono text-[10px] text-[#0EA5E9] font-bold block">{cs.index}</span>
                  <h4 className="text-xs font-bold text-slate-900 mb-0.5">{cs.title}</h4>
                  <p className="text-[10px] text-slate-500">{cs.treatment}</p>
                </div>
              </div>
            ))}
          </div>
        )}

      </section>

      {/* Booking Modal */}
      {bookingOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 max-w-md w-full text-left shadow-2xl">
            <h3 className="font-serif text-lg font-bold text-slate-900 mb-1">Schedule Patient Consultation</h3>
            <p className="text-xs text-slate-500 mb-4">Choose your preferred visit type and time for Riverside Dental Care.</p>

            {bookingSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-center text-xs text-emerald-800">
                <CheckCircle2 className="w-8 h-8 mx-auto mb-2 text-emerald-600" />
                Appointment requested! Our patient care coordinator will call you to confirm.
                <button 
                  onClick={() => { setBookingOpen(false); setBookingSubmitted(false); }}
                  className="block w-full mt-4 bg-slate-900 text-white py-2 rounded-lg text-xs font-semibold"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setBookingSubmitted(true); }} className="space-y-3">
                <div>
                  <label className="block text-[11px] font-mono text-slate-600 mb-1">Patient Name</label>
                  <input required type="text" placeholder="David Miller" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-[#0EA5E9]" />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-slate-600 mb-1">Service Needed</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-[#0EA5E9]">
                    <option>General Exam &amp; Cleaning</option>
                    <option>Cosmetic Smile Consultation</option>
                    <option>Invisalign Aligners Evaluation</option>
                    <option>Emergency Tooth Pain Care</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] font-mono text-slate-600 mb-1">Phone Number</label>
                    <input required type="tel" placeholder="(512) 555-0198" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-[#0EA5E9]" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono text-slate-600 mb-1">Preferred Time</label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-[#0EA5E9]">
                      <option>Morning (8am - 12pm)</option>
                      <option>Afternoon (1pm - 5pm)</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-2 pt-2">
                  <button type="button" onClick={() => setBookingOpen(false)} className="w-1/2 bg-slate-100 text-slate-600 py-2 rounded-lg text-xs font-semibold">
                    Cancel
                  </button>
                  <button type="submit" className="w-1/2 bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-semibold py-2 rounded-lg text-xs transition">
                    Confirm Request
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
