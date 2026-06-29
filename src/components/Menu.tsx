import { useState } from 'react';
import { MENU_ITEMS } from '../data/cafeData';
import { MenuItem } from '../types';
import { Sparkles, ArrowRight, ThumbsUp, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'coffee' | 'desserts' | 'special' | 'seasonal'>('all');

  const categories = [
    { key: 'all', label: 'All Offerings' },
    { key: 'coffee', label: 'Coffee' },
    { key: 'desserts', label: 'Desserts' },
    { key: 'special', label: 'Special Drinks' },
    { key: 'seasonal', label: 'Seasonal Specials' },
  ];

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 md:py-32 bg-cafe-cream/30 dark:bg-cafe-dark/50 transition-colors duration-700 relative">
      {/* Subtle organic background blobs */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-cafe-beige/10 dark:bg-cafe-brown/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-cafe-sage/10 dark:bg-cafe-brown/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="text-xs tracking-[0.3em] uppercase font-mono text-cafe-gold font-medium block mb-3">
            02 / Signature Menu
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-cafe-dark dark:text-cafe-cream font-light tracking-tight mb-6">
            Hand-Pulled, Freshly Baked,<br />
            <span className="italic font-normal text-cafe-brown dark:text-cafe-gold">Served with Heart.</span>
          </h2>
          <p className="text-sm text-cafe-dark/70 dark:text-cafe-cream/70 leading-relaxed font-sans font-light">
            Every item is constructed from scratch in our open kitchen, using raw organic sugars, stone-ground matcha, and micro-lot single-origin beans.
          </p>
        </div>

        {/* Seasonal Curations Asymmetric Panel (Editorial Aesthetic Theme Integration) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 border-b border-cafe-beige/40 dark:border-cafe-brown/20 pb-16">
          {/* Left Editorial Philosophy */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-[10px] uppercase tracking-[0.25em] text-cafe-gold font-bold block mb-4">
              Our Craft Philosophy
            </span>
            <h3 className="font-serif text-3xl md:text-4xl text-cafe-dark dark:text-cafe-cream font-light leading-tight mb-6">
              Designed for the <span className="italic font-normal text-cafe-brown dark:text-cafe-gold">Sensory Mind</span>.
            </h3>
            <p className="text-xs text-cafe-dark/70 dark:text-cafe-cream/70 leading-relaxed font-sans font-light mb-6">
              Each cup represents a dedicated study in micro-roasting, floral infusions, and hand-ground texture. Our baristas serve each curation on hand-thrown volcanic clay saucers with a single sprig of local lavender or rosemary.
            </p>
            <div className="aspect-[16/9] w-full overflow-hidden bg-cafe-cream border border-cafe-beige/30 dark:border-cafe-brown/20 p-2">
              <img 
                src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=800&auto=format&fit=crop" 
                alt="Artisanal Brewing"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              />
            </div>
          </div>

          {/* Right Dotted List (Matching Design HTML exactly) */}
          <div className="lg:col-span-7 bg-cafe-cream/40 dark:bg-[#1C1715] border border-cafe-beige/30 dark:border-cafe-brown/20 p-8 md:p-12 flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-cafe-gold font-bold block mb-8">
                Seasonal Curations
              </span>

              <div className="space-y-8">
                <div className="flex justify-between items-end border-b border-dashed border-cafe-dark/20 dark:border-cafe-cream/20 pb-4">
                  <div>
                    <h4 className="font-serif text-lg md:text-xl text-cafe-dark dark:text-cafe-cream">Lavender Oat Latte</h4>
                    <p className="text-xs text-cafe-dark/60 dark:text-cafe-cream/50 font-sans mt-1">Infused with local honey & dried botanicals</p>
                  </div>
                  <span className="font-serif font-bold text-cafe-dark dark:text-cafe-cream text-lg">$7.50</span>
                </div>

                <div className="flex justify-between items-end border-b border-dashed border-cafe-dark/20 dark:border-cafe-cream/20 pb-4">
                  <div>
                    <h4 className="font-serif text-lg md:text-xl text-cafe-dark dark:text-cafe-cream">Charcoal Mochi Brownie</h4>
                    <p className="text-xs text-cafe-dark/60 dark:text-cafe-cream/50 font-sans mt-1">Dark cocoa with a soft, chewy center</p>
                  </div>
                  <span className="font-serif font-bold text-cafe-dark dark:text-cafe-cream text-lg">$6.00</span>
                </div>

                <div className="flex justify-between items-end border-b border-dashed border-cafe-dark/20 dark:border-cafe-cream/20 pb-4">
                  <div>
                    <h4 className="font-serif text-lg md:text-xl text-cafe-dark dark:text-cafe-cream">Sakura Cloud Foam</h4>
                    <p className="text-xs text-cafe-dark/60 dark:text-cafe-cream/50 font-sans mt-1">Cold brew topped with cherry blossom cream</p>
                  </div>
                  <span className="font-serif font-bold text-cafe-dark dark:text-cafe-cream text-lg">$8.00</span>
                </div>

                <div className="flex justify-between items-end border-b border-dashed border-cafe-dark/20 dark:border-cafe-cream/20 pb-4">
                  <div>
                    <h4 className="font-serif text-lg md:text-xl text-cafe-dark dark:text-cafe-cream">Golden Turmeric Tea</h4>
                    <p className="text-xs text-cafe-dark/60 dark:text-cafe-cream/50 font-sans mt-1">Spiced with ginger and star anise</p>
                  </div>
                  <span className="font-serif font-bold text-cafe-dark dark:text-cafe-cream text-lg">$5.50</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-cafe-beige/40 dark:border-cafe-brown/15 flex items-center justify-between text-[11px] font-mono text-cafe-gold">
              <span>* AVAILABLE UNTIL SEPTEMBER 1ST</span>
              <span>LIMITED BATCH DAILY</span>
            </div>
          </div>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex justify-center mb-16 overflow-x-auto no-scrollbar max-w-full px-2">
          <div className="flex bg-cafe-cream dark:bg-cafe-dark p-1 border border-cafe-beige/30 dark:border-cafe-brown/20 rounded-none max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key as any)}
                className={`px-5 py-2.5 text-xs uppercase tracking-widest font-semibold transition-all duration-300 relative whitespace-nowrap ${
                  activeCategory === cat.key
                    ? 'text-cafe-bg dark:text-cafe-dark z-10'
                    : 'text-cafe-dark/60 dark:text-cafe-cream/60 hover:text-cafe-gold'
                }`}
              >
                {activeCategory === cat.key && (
                  <motion.div
                    layoutId="activeMenuCategoryBg"
                    className="absolute inset-0 bg-cafe-brown dark:bg-cafe-gold -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col justify-between bg-cafe-bg dark:bg-cafe-dark border border-cafe-beige/30 dark:border-cafe-brown/20 p-5 relative overflow-hidden transition-all duration-300 hover:shadow-xl dark:hover:shadow-cafe-dark/40"
              >
                <div>
                  {/* Image container with subtle parallax/zoom */}
                  <div className="aspect-[4/3] w-full overflow-hidden relative mb-5 bg-cafe-cream">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter contrast-[1.02]"
                    />
                    {/* Decorative Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-cafe-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    {/* Specific special badges */}
                    {item.tags?.includes('Signature') && (
                      <span className="absolute top-3 left-3 bg-cafe-gold text-cafe-dark text-[9px] uppercase tracking-widest font-mono font-bold px-2 py-1 shadow-sm">
                        Signature
                      </span>
                    )}
                    {item.category === 'seasonal' && (
                      <span className="absolute top-3 left-3 bg-cafe-sage text-cafe-bg text-[9px] uppercase tracking-widest font-mono font-bold px-2 py-1 shadow-sm">
                        Seasonal
                      </span>
                    )}
                  </div>

                  {/* Text Details */}
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-serif text-xl text-cafe-dark dark:text-cafe-cream group-hover:text-cafe-gold transition-colors duration-200">
                      {item.name}
                    </h3>
                    <span className="font-mono text-sm font-semibold text-cafe-brown dark:text-cafe-gold whitespace-nowrap bg-cafe-cream dark:bg-cafe-dark/50 px-2.5 py-1 border border-cafe-beige/30 dark:border-cafe-brown/25">
                      {item.price}
                    </span>
                  </div>

                  <p className="text-xs text-cafe-dark/70 dark:text-cafe-cream/70 leading-relaxed font-sans font-light mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Tags on Card Bottom */}
                <div className="pt-4 border-t border-cafe-beige/10 dark:border-cafe-brown/10 flex flex-wrap gap-1.5 items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {item.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-mono uppercase tracking-widest text-cafe-dark/55 dark:text-cafe-cream/55 bg-cafe-cream/50 dark:bg-cafe-dark/30 px-2 py-0.5 border border-cafe-beige/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* Sparkle micro-interaction indicator */}
                  <span className="text-cafe-gold/30 group-hover:text-cafe-gold transition-colors duration-300">
                    <Sparkles className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Special Menu Note */}
        <div className="mt-16 text-center">
          <p className="text-xs uppercase tracking-[0.2em] font-mono text-cafe-gold flex items-center justify-center gap-1.5">
            <Leaf className="w-3.5 h-3.5" />
            Have allergies or special requests? Our baristas are happy to adapt any drink with house oat, almond, or coconut milk.
          </p>
        </div>
      </div>
    </section>
  );
}
