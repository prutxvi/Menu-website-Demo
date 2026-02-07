
import React, { useState, useEffect, useRef } from 'react';
import { MENU_ITEMS } from './data';
import { Category, MenuItem } from './types';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f0a07]/90 backdrop-blur-xl border-b border-[#d4af37]/20">
      <div className="max-w-md mx-auto px-6 h-16 flex items-center justify-center">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#d4af37] rounded-full flex items-center justify-center p-0.5 shadow-[0_0_20px_rgba(212,175,55,0.4)]">
            <div className="w-full h-full border border-white/20 rounded-full flex items-center justify-center bg-[#1a120b]">
              <span className="text-white font-serif text-[11px] font-bold tracking-tighter">RC</span>
            </div>
          </div>
          <h1 className="text-xl font-serif font-bold tracking-[0.25em] text-[#d4af37]">ROASTT</h1>
        </div>
      </div>
    </nav>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop"
          alt="Coffee Hero"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0a07]/80 via-[#0f0a07]/40 to-[#0f0a07]"></div>
      </div>

      <div className="relative z-10 text-center px-8 mt-16">
        <div className="flex justify-center items-center gap-4 mb-3 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
          <div className="w-10 h-px bg-[#d4af37]/40"></div>
          <span className="text-[#d4af37] tracking-[0.5em] text-[9px] font-bold uppercase">Banjara Hills, Hyderabad</span>
          <div className="w-10 h-px bg-[#d4af37]/40"></div>
        </div>
        <h2 className="text-5xl font-serif font-bold mb-6 tracking-tight text-white leading-[1.1] animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
          Purely Veg. <br /> <span className="text-[#d4af37]">Truly Divine.</span>
        </h2>
        <div className="w-12 h-[1px] bg-[#d4af37] mx-auto opacity-50 mb-6"></div>
        <p className="text-gray-400 text-xs tracking-widest uppercase font-light animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
          Crafting the perfect brew since 2023
        </p>
      </div>
    </section>
  );
};

const VegIcon = () => (
  <div className="w-3 h-3 border border-green-600 p-[1px] flex items-center justify-center bg-transparent">
    <div className="w-full h-full rounded-full bg-green-600"></div>
  </div>
);

const MenuCard: React.FC<{ item: MenuItem, index: number }> = ({ item, index }) => {
  return (
    <div className="flex items-start gap-4 mb-10 group animate-fade-in-up" style={{ animationDelay: `${index * 0.05}s` }}>
      <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-sm border border-[#d4af37]/10 bg-[#1a120b]">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover grayscale-[0.2] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
        />
        <div className="absolute bottom-1 right-1">
          <VegIcon />
        </div>
      </div>
      <div className="flex-grow pt-1">
        <div className="flex justify-between items-baseline mb-2">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-serif font-bold text-gray-100 tracking-wide uppercase leading-tight">{item.name}</h3>
          </div>
          <div className="flex-grow mx-3 border-b border-dotted border-[#d4af37]/10"></div>
          <span className="text-[#d4af37] font-serif font-bold text-sm italic">₹{item.price}</span>
        </div>
        <p className="text-gray-400 text-[11px] font-light leading-relaxed pr-4 italic opacity-70">
          {item.description}
        </p>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>(Category.HOT_COFFEE);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const scrollRef = useRef<HTMLDivElement>(null);
  const menuSectionRef = useRef<HTMLElement>(null);
  const categories = Object.values(Category);

  // Filter items by category and search query
  const filteredItems = MENU_ITEMS.filter(item => {
    const matchesCategory = item.category === activeCategory;
    const matchesSearch = searchQuery === '' ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCategoryChange = (cat: Category, e: React.MouseEvent) => {
    setActiveCategory(cat);

    const target = e.currentTarget as HTMLElement;
    target.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest'
    });

    if (menuSectionRef.current) {
      const offset = 130;
      const top = menuSectionRef.current.offsetTop - offset;
      window.scrollTo({
        top,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0a07] text-gray-200 selection:bg-[#d4af37] selection:text-[#0f0a07] max-w-md mx-auto border-x border-[#d4af37]/10 shadow-2xl relative">
      <Navbar />

      <main className="pb-24">
        <Hero />

        {/* Search Bar */}
        <div className="px-6 py-6 bg-gradient-to-b from-[#0f0a07] to-transparent">
          <div className="relative max-w-sm mx-auto animate-fade-in">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg
                className="w-4 h-4 text-[#d4af37]/50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search menu items..."
              className="w-full pl-11 pr-4 py-3.5 bg-[#1a120b]/80 border border-[#d4af37]/20 rounded-sm text-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-[#d4af37] focus:bg-[#1a120b] transition-all duration-300 focus:shadow-[0_0_20px_rgba(212,175,55,0.1)] backdrop-blur-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#d4af37]/50 hover:text-[#d4af37] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Sticky Category Selection */}
        <div className="sticky top-16 z-40 bg-[#0f0a07]/95 backdrop-blur-md py-5 border-b border-[#d4af37]/10 shadow-xl shadow-black/40">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto no-scrollbar px-6 gap-4 items-center snap-x"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={(e) => handleCategoryChange(cat, e)}
                className={`whitespace-nowrap text-[10px] tracking-[0.2em] font-black transition-all uppercase flex-shrink-0 snap-center px-5 py-2.5 rounded-full border transition-all duration-300 relative ${activeCategory === cat
                  ? "text-[#0f0a07] border-[#d4af37] bg-[#d4af37] scale-105 shadow-[0_4px_15px_rgba(212,175,55,0.3)]"
                  : "text-gray-400 border-[#d4af37]/10 bg-[#1a120b]/50 hover:text-gray-200 hover:border-[#d4af37]/30"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items List */}
        <section ref={menuSectionRef} className="px-6 py-14 min-h-[70vh]">
          <div className="mb-14 text-center animate-fade-in">
            <div className="flex justify-center items-center gap-3 mb-3">
              <div className="w-1 h-1 rounded-full bg-[#d4af37]"></div>
              <span className="text-[#d4af37]/50 text-[10px] uppercase tracking-[0.6em] font-semibold">Selection</span>
              <div className="w-1 h-1 rounded-full bg-[#d4af37]"></div>
            </div>
            <h2 className="text-3xl font-serif font-bold text-white tracking-widest uppercase italic mb-4">
              {activeCategory}
            </h2>
            <div className="mt-2 flex justify-center items-center gap-1.5">
              <div className="w-10 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]/30"></div>
              <div className="w-2 h-2 rounded-full border border-[#d4af37]/40 rotate-45"></div>
              <div className="w-10 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]/30"></div>
            </div>
          </div>

          <div className="space-y-4">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, idx) => (
                <MenuCard key={item.id} item={item} index={idx} />
              ))
            ) : (
              <div className="text-center py-16 animate-fade-in">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#1a120b] border border-[#d4af37]/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#d4af37]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-gray-400 text-sm font-serif mb-2">No items found</h3>
                <p className="text-gray-600 text-xs">Try searching with different keywords</p>
              </div>
            )}
          </div>
        </section>

        {/* Info Highlights */}
        <section className="px-6 py-16 bg-[#0c0806] border-y border-[#d4af37]/10">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-3 text-center border-r border-[#d4af37]/10 pr-3">
              <div className="text-[#d4af37] text-2xl font-serif italic">100%</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest font-black leading-tight">Authentic <br /> Vegetarian</div>
            </div>
            <div className="space-y-3 text-center">
              <div className="text-[#d4af37] text-2xl font-serif italic">Arabica</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest font-black leading-tight">Single Origin <br /> Roast</div>
            </div>
          </div>
        </section>

        {/* Footer Info */}
        <section className="px-8 py-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-[#d4af37]/5 rounded-full blur-[80px]"></div>
          <h3 className="font-serif text-2xl text-white mb-6 italic tracking-tight">Visit Roastt Café</h3>
          <p className="text-gray-400 text-[11px] font-light leading-loose uppercase tracking-[0.2em] mb-12">
            GAR, Laxmi Pinnacle, Banjara Hills<br />
            Road No. 12, Hyderabad, 500034
          </p>

          <div className="inline-flex flex-col items-center gap-4 px-10 py-6 border border-[#d4af37]/10 rounded-sm bg-[#1a120b]/30">
            <span className="text-[#d4af37] text-[10px] font-bold tracking-[0.4em] uppercase">Dining Hours</span>
            <div className="flex items-center gap-4 text-gray-300 text-xs font-medium tracking-widest">
              <span>08:00 AM</span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/40"></div>
              <span>11:00 PM</span>
            </div>
          </div>
        </section>
      </main>

      {/* Elegant Fixed Footer */}
      <footer className="py-14 bg-[#050403] border-t border-[#d4af37]/10 px-6 text-center">
        <div className="mb-8 opacity-60 flex justify-center items-center gap-4">
          <div className="w-8 h-px bg-[#d4af37]/20"></div>
          <div className="text-[#d4af37] font-serif italic text-lg">R</div>
          <div className="w-8 h-px bg-[#d4af37]/20"></div>
        </div>
        <p className="text-[9px] text-gray-600 uppercase tracking-[0.5em] font-medium mb-2">
          Roastt Café © 2024
        </p>
        <p className="text-[8px] text-gray-700 uppercase tracking-[0.3em]">
          Designed for the Coffee Purist
        </p>
      </footer>

      <style dangerouslySetInnerHTML={{
        __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; }
      `}} />
    </div>
  );
};

export default App;
