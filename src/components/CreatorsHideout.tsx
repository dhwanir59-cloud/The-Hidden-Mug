import { useState } from 'react';
import { Camera, Wifi, BatteryCharging, Sparkles, Sun, Moon, Palette } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type CreatorVibe = 'golden' | 'moody' | 'focus';

export default function CreatorsHideout() {
  const [activeVibe, setActiveVibe] = useState<CreatorVibe>('golden');

  const vibeDetails = {
    golden: {
      title: 'Golden Hour Simulation',
      description: 'South-facing floor-to-ceiling multi-pane windows paired with pure linen linen curtains. Perfect, un-harsh diffused sunlight that makes camera skin tones radiate beautifully.',
      bgClass: 'bg-amber-500/10 border-amber-500/20',
      textClass: 'text-amber-800 dark:text-amber-200',
      image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=700&auto=format&fit=crop',
    },
    moody: {
      title: 'Cinematic Twilight',
      description: 'Low-temperature copper filament ambient bulbs, warm hanging fairy lights, and real rain condensation panels. Optimized for high-contrast, moody b-roll video sessions.',
      bgClass: 'bg-purple-500/10 border-purple-500/20',
      textClass: 'text-purple-800 dark:text-purple-200',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=700&auto=format&fit=crop',
    },
    focus: {
      title: 'High-Contrast Studio Light',
      description: 'Neutral 5000K diffused ceiling spotlights and matte concrete backdrops. Creates crisp, raw silhouettes and minimal compositions that emphasize subject depth.',
      bgClass: 'bg-emerald-500/10 border-emerald-500/20',
      textClass: 'text-emerald-800 dark:text-emerald-200',
      image: 'https://images.unsplash.com/photo-1497515114629-f71d768fd07c?q=80&w=700&auto=format&fit=crop',
    },
  };

  return (
    <section id="hideout" className="py-24 md:py-32 bg-cafe-cream/20 dark:bg-cafe-dark/40 transition-colors duration-700 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Narrative & Features */}
          <div className="lg:col-span-6">
            <span className="text-xs tracking-[0.3em] uppercase font-mono text-cafe-gold font-medium block mb-3">
              04 / Creator’s Hideout
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cafe-dark dark:text-cafe-cream font-light tracking-tight leading-tight mb-8">
              Your Next Viral Reel<br />
              <span className="italic font-normal text-cafe-brown dark:text-cafe-gold">Starts Here.</span>
            </h2>

            <p className="text-sm md:text-base text-cafe-dark/70 dark:text-cafe-cream/70 leading-relaxed font-sans font-light mb-10">
              The Hidden Mug was built specifically with creators, photographers, and laptop-warriors in mind. Every light source is soft, every brick wall is textured, and every table is finished with non-glare walnut to elevate your product shots.
            </p>

            {/* Structured Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-cafe-brown/10 dark:bg-cafe-gold/10 text-cafe-brown dark:text-cafe-gold flex items-center justify-center flex-shrink-0">
                  <Camera className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-cafe-dark dark:text-cafe-cream mb-1">
                    Photo-Ready Light
                  </h4>
                  <p className="text-xs text-cafe-dark/60 dark:text-cafe-cream/60 leading-relaxed font-sans">
                    South-facing panes with custom linen diffusion curtains.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-cafe-brown/10 dark:bg-cafe-gold/10 text-cafe-brown dark:text-cafe-gold flex items-center justify-center flex-shrink-0">
                  <Wifi className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-cafe-dark dark:text-cafe-cream mb-1">
                    Fiber-Speed Wifi
                  </h4>
                  <p className="text-xs text-cafe-dark/60 dark:text-cafe-cream/60 leading-relaxed font-sans">
                    Dedicated symmetric 500Mbps WiFi rail with zero dropouts.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-cafe-brown/10 dark:bg-cafe-gold/10 text-cafe-brown dark:text-cafe-gold flex items-center justify-center flex-shrink-0">
                  <BatteryCharging className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-cafe-dark dark:text-cafe-cream mb-1">
                    Integrated Power
                  </h4>
                  <p className="text-xs text-cafe-dark/60 dark:text-cafe-cream/60 leading-relaxed font-sans">
                    Sleek USB-C and standard outlet hubs at every desk and bar.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-cafe-brown/10 dark:bg-cafe-gold/10 text-cafe-brown dark:text-cafe-gold flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-cafe-dark dark:text-cafe-cream mb-1">
                    Props Upon Request
                  </h4>
                  <p className="text-xs text-cafe-dark/60 dark:text-cafe-cream/60 leading-relaxed font-sans">
                    Borrow hand-painted ceramics, antique spoons, and linen sheets.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive lighting-ambient simulation */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="border border-cafe-beige/30 dark:border-cafe-brown/25 bg-cafe-bg dark:bg-cafe-dark p-6 relative">
              {/* Vibe Selection Panel */}
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-cafe-beige/20 dark:border-cafe-brown/10">
                <span className="text-xs uppercase tracking-widest font-mono text-cafe-gold flex items-center gap-1.5 font-bold">
                  <Palette className="w-3.5 h-3.5" />
                  Space Studio Lighting
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveVibe('golden')}
                    className={`px-3 py-1 text-[10px] uppercase font-mono tracking-widest border transition-all ${
                      activeVibe === 'golden'
                        ? 'bg-amber-500/20 text-amber-700 dark:text-amber-300 border-amber-500/40 font-bold'
                        : 'border-cafe-beige/40 dark:border-cafe-brown/10 text-cafe-dark/60 dark:text-cafe-cream/60'
                    }`}
                  >
                    Golden Hour
                  </button>
                  <button
                    onClick={() => setActiveVibe('moody')}
                    className={`px-3 py-1 text-[10px] uppercase font-mono tracking-widest border transition-all ${
                      activeVibe === 'moody'
                        ? 'bg-purple-500/20 text-purple-700 dark:text-purple-300 border-purple-500/40 font-bold'
                        : 'border-cafe-beige/40 dark:border-cafe-brown/10 text-cafe-dark/60 dark:text-cafe-cream/60'
                    }`}
                  >
                    Moody
                  </button>
                  <button
                    onClick={() => setActiveVibe('focus')}
                    className={`px-3 py-1 text-[10px] uppercase font-mono tracking-widest border transition-all ${
                      activeVibe === 'focus'
                        ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-500/40 font-bold'
                        : 'border-cafe-beige/40 dark:border-cafe-brown/10 text-cafe-dark/60 dark:text-cafe-cream/60'
                    }`}
                  >
                    Focus
                  </button>
                </div>
              </div>

              {/* Showcase Screen */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-cafe-dark mb-4 border border-cafe-beige/20">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeVibe}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <img
                      src={vibeDetails[activeVibe].image}
                      alt={activeVibe}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-1000"
                    />
                    {/* Atmospheric color tint over the picture */}
                    <div className={`absolute inset-0 mix-blend-color transition-colors duration-500 ${
                      activeVibe === 'golden' ? 'bg-amber-400/20' : activeVibe === 'moody' ? 'bg-indigo-700/20' : 'bg-transparent'
                    }`} />
                    <div className={`absolute inset-0 mix-blend-multiply opacity-30 transition-colors duration-500 ${
                      activeVibe === 'golden' ? 'bg-amber-950/20' : activeVibe === 'moody' ? 'bg-purple-950/30' : 'bg-neutral-900/10'
                    }`} />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Vibe description box */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeVibe}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className={`p-4 border border-dashed transition-colors duration-500 ${vibeDetails[activeVibe].bgClass}`}
                >
                  <h5 className={`font-serif text-lg mb-1 ${vibeDetails[activeVibe].textClass}`}>
                    {vibeDetails[activeVibe].title}
                  </h5>
                  <p className="text-xs text-cafe-dark/80 dark:text-cafe-cream/80 font-light leading-relaxed font-sans">
                    {vibeDetails[activeVibe].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
