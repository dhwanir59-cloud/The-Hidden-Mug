import { useState } from 'react';
import { CAFE_SPACES } from '../data/cafeData';
import { CafeSpace } from '../types';
import { Sparkles, ArrowRight, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Spaces() {
  const [activeSpaceIdx, setActiveSpaceIdx] = useState(0);
  const activeSpace = CAFE_SPACES[activeSpaceIdx];

  const handlePrev = () => {
    setActiveSpaceIdx((prev) => (prev === 0 ? CAFE_SPACES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSpaceIdx((prev) => (prev === CAFE_SPACES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="spaces" className="py-24 md:py-32 bg-cafe-bg dark:bg-cafe-dark transition-colors duration-700 relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.01] pointer-events-none" style={{
        backgroundImage: `radial-gradient(var(--color-cafe-dark) 1px, transparent 1px)`,
        backgroundSize: '24px 24px'
      }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs tracking-[0.3em] uppercase font-mono text-cafe-gold font-medium block mb-3">
              03 / Architectural Corners
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-cafe-dark dark:text-cafe-cream font-light tracking-tight">
              Discover Our Spaces. Designed for <span className="italic font-normal text-cafe-brown dark:text-cafe-gold">Presence</span>.
            </h2>
          </div>
          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-cafe-beige/40 dark:border-cafe-brown/20 flex items-center justify-center text-cafe-dark dark:text-cafe-cream hover:bg-cafe-cream dark:hover:bg-cafe-brown/30 hover:border-cafe-gold transition-all duration-300"
              aria-label="Previous space"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="font-mono text-xs text-cafe-gold">
              {String(activeSpaceIdx + 1).padStart(2, '0')} / {String(CAFE_SPACES.length).padStart(2, '0')}
            </span>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-cafe-beige/40 dark:border-cafe-brown/20 flex items-center justify-center text-cafe-dark dark:text-cafe-cream hover:bg-cafe-cream dark:hover:bg-cafe-brown/30 hover:border-cafe-gold transition-all duration-300"
              aria-label="Next space"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Large Image with Overlay Slider */}
          <div className="lg:col-span-7 relative">
            <div className="aspect-[16/10] overflow-hidden bg-cafe-cream relative border border-cafe-beige/30 dark:border-cafe-brown/20">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeSpace.id}
                  src={activeSpace.image}
                  alt={activeSpace.name}
                  referrerPolicy="no-referrer"
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </AnimatePresence>
              {/* Corner Ambient details */}
              <div className="absolute top-4 left-4 bg-cafe-dark/70 backdrop-blur-sm text-cafe-bg text-[10px] font-mono uppercase tracking-[0.2em] px-3 py-1.5 border border-cafe-gold/30">
                {activeSpace.vibe}
              </div>
            </div>

            {/* Absolute offset frame */}
            <div className="absolute inset-0 border border-cafe-gold/10 -translate-x-3 -translate-y-3 -z-10" />
          </div>

          {/* Right text panel */}
          <div className="lg:col-span-5 flex flex-col justify-center lg:pl-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSpace.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <span className="text-xs uppercase tracking-[0.3em] font-mono text-cafe-gold mb-2 block">
                  Featured Zone
                </span>
                <h3 className="font-serif text-3xl md:text-4xl text-cafe-dark dark:text-cafe-cream font-light mb-6">
                  {activeSpace.name}
                </h3>
                <p className="text-sm md:text-base text-cafe-dark/80 dark:text-cafe-cream/80 leading-relaxed font-sans font-light mb-8">
                  {activeSpace.description}
                </p>

                {/* Features list */}
                <div className="space-y-4">
                  <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-cafe-gold font-bold block mb-2">
                    Included Amenities
                  </span>
                  <div className="grid grid-cols-2 gap-3">
                    {activeSpace.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs text-cafe-dark/80 dark:text-cafe-cream/80 font-sans">
                        <CheckCircle2 className="w-4 h-4 text-cafe-sage flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Desktop Quick Nav Bar Thumbnails */}
        <div className="mt-16 border-t border-cafe-beige/40 dark:border-cafe-brown/20 pt-8 hidden md:grid grid-cols-5 gap-4">
          {CAFE_SPACES.map((space, index) => (
            <button
              key={space.id}
              onClick={() => setActiveSpaceIdx(index)}
              className={`text-left p-4 transition-all duration-300 border-t-2 relative ${
                activeSpaceIdx === index
                  ? 'border-cafe-gold bg-cafe-cream/40 dark:bg-cafe-brown/10'
                  : 'border-transparent hover:bg-cafe-cream/20 dark:hover:bg-cafe-brown/5'
              }`}
            >
              <span className="font-mono text-[10px] text-cafe-gold block mb-1">
                ZONE 0{index + 1}
              </span>
              <span className={`font-serif text-sm block ${
                activeSpaceIdx === index ? 'text-cafe-dark dark:text-cafe-cream font-medium' : 'text-cafe-dark/60 dark:text-cafe-cream/50'
              }`}>
                {space.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
