import React, { useState } from 'react';
import { Coffee, Utensils, Clock, MapPin, CheckCircle, Calendar, Sparkles } from 'lucide-react';

export const CedarStoneCafeDemo: React.FC = () => {
  const [activeMenuTab, setActiveMenuTab] = useState<'coffee' | 'kitchen' | 'pastry'>('coffee');
  const [reserveOpen, setReserveOpen] = useState(false);
  const [reserveSuccess, setReserveSuccess] = useState(false);

  const menuItems = {
    coffee: [
      { name: 'Single-Origin Ethiopian Pour-Over', desc: 'Notes of bergamot, jasmine & sweet peach', price: '$6.50' },
      { name: 'Cedar Smoked Maple Latte', desc: 'Espresso, house cedar-infused maple syrup, oat milk', price: '$7.00' },
      { name: 'Nitro Cold Brew & Vanilla Foam', desc: 'Cold steeped for 24h, crowned with vanilla bean cloud', price: '$6.00' },
    ],
    kitchen: [
      { name: 'Heritage Grain Avocado Toast', desc: 'Poached organic egg, pickled radish, dukkah spice', price: '$16.00' },
      { name: 'Wild Mushroom & Thyme Galette', desc: 'Roasted chanterelles, gruyère, micro greens', price: '$18.50' },
      { name: 'Smoked Salmon Brioche', desc: 'Dill cream cheese, caperberry relish, shaved fennel', price: '$19.00' },
    ],
    pastry: [
      { name: 'Brown Butter Cardamom Knot', desc: 'Flaky laminated dough, warm cardamom sugar', price: '$5.50' },
      { name: 'Dark Chocolate Salted Scone', desc: 'Valrhona 70% chocolate, Maldon sea salt flake', price: '$5.00' },
      { name: 'Almond Frangipane Tart', desc: 'Seasonal poached pear, toasted almond crust', price: '$7.00' },
    ]
  };

  return (
    <div className="bg-[#231E1A] text-[#F7F4EF] font-sans min-h-full pb-12 selection:bg-[#C48B60] selection:text-black">
      {/* Navbar */}
      <nav className="sticky top-0 z-20 bg-[#1A1613]/90 backdrop-blur border-b border-[#C48B60]/20 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-[#C48B60] flex items-center justify-center text-[#231E1A] font-bold">
            <Coffee className="w-4 h-4 stroke-[2.5]" />
          </div>
          <span className="font-serif text-[#F7F4EF] text-xs sm:text-sm tracking-wider uppercase">CEDAR &amp; STONE <span className="text-[#C48B60] font-sans text-[10px] tracking-normal">CAFE</span></span>
        </div>
        <button 
          onClick={() => setReserveOpen(true)}
          className="bg-[#C48B60] hover:bg-[#b07850] text-[#231E1A] px-3 py-1.5 rounded text-xs font-bold transition"
        >
          Reserve Table
        </button>
      </nav>

      {/* Hero */}
      <section className="px-4 py-8 sm:py-10 max-w-4xl mx-auto text-center">
        <span className="text-[#C48B60] uppercase tracking-widest text-[10px] font-mono block mb-2">Artisanal Coffee &amp; Kitchen</span>
        <h1 className="font-serif text-2xl sm:text-4xl text-white mb-3">
          Thoughtfully Crafted Coffee &amp; Seasonal Small Plates
        </h1>
        <p className="text-[#B8AEA5] text-xs sm:text-sm max-w-xl mx-auto mb-6">
          Sourced from micro-lot farmers and local organic growers in an intimate sanctuary space.
        </p>
      </section>

      {/* Interactive Menu Section */}
      <section className="px-4 py-4 max-w-4xl mx-auto">
        <div className="bg-[#2D2722] border border-[#C48B60]/20 rounded-xl p-4 sm:p-6 shadow-xl">
          <div className="flex items-center justify-between border-b border-[#C48B60]/20 pb-3 mb-4">
            <div className="flex gap-2">
              {(['coffee', 'kitchen', 'pastry'] as const).map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveMenuTab(tab)}
                  className={`px-3 py-1 rounded text-xs font-bold capitalize transition ${activeMenuTab === tab ? 'bg-[#C48B60] text-[#231E1A]' : 'bg-[#1A1613] text-[#B8AEA5] hover:text-white'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <span className="text-[10px] text-[#C48B60] font-mono hidden sm:inline">Seasonal Offerings</span>
          </div>

          <div className="space-y-3">
            {menuItems[activeMenuTab].map((item, idx) => (
              <div key={idx} className="flex justify-between items-start border-b border-white/5 pb-2.5 last:border-0 last:pb-0">
                <div>
                  <h4 className="text-xs font-bold text-white">{item.name}</h4>
                  <p className="text-[11px] text-[#B8AEA5]">{item.desc}</p>
                </div>
                <span className="text-xs font-serif font-bold text-[#C48B60] ml-4">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation Modal */}
      {reserveOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#2D2722] border border-[#C48B60]/30 rounded-xl p-6 max-w-md w-full text-left">
            <h3 className="font-serif text-lg text-white mb-2">Reserve Table at Cedar &amp; Stone</h3>
            <p className="text-xs text-[#B8AEA5] mb-4">Select your party size and preferred dining time.</p>

            {reserveSuccess ? (
              <div className="bg-[#C48B60]/20 border border-[#C48B60]/40 p-4 rounded text-center text-xs text-[#F7F4EF]">
                <CheckCircle className="w-8 h-8 mx-auto mb-2 text-[#C48B60]" />
                Table reserved! We look forward to hosting you.
                <button onClick={() => { setReserveOpen(false); setReserveSuccess(false); }} className="block w-full mt-4 bg-white/10 text-white py-1.5 rounded">
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setReserveSuccess(true); }} className="space-y-3">
                <div>
                  <label className="block text-[11px] text-[#B8AEA5] mb-1">Name</label>
                  <input required type="text" placeholder="Emma Robertson" className="w-full bg-[#1A1613] border border-[#C48B60]/20 rounded px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#C48B60]" />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] text-[#B8AEA5] mb-1">Party Size</label>
                    <select className="w-full bg-[#1A1613] border border-[#C48B60]/20 rounded px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#C48B60]">
                      <option>2 Guests</option>
                      <option>4 Guests</option>
                      <option>6 Guests</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] text-[#B8AEA5] mb-1">Time</label>
                    <select className="w-full bg-[#1A1613] border border-[#C48B60]/20 rounded px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#C48B60]">
                      <option>10:00 AM</option>
                      <option>12:30 PM</option>
                      <option>6:00 PM</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-2 pt-2">
                  <button type="button" onClick={() => setReserveOpen(false)} className="w-1/2 bg-white/5 text-slate-300 py-2 rounded text-xs">
                    Cancel
                  </button>
                  <button type="submit" className="w-1/2 bg-[#C48B60] text-[#231E1A] font-bold py-2 rounded text-xs hover:bg-[#b07850]">
                    Confirm Table
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
