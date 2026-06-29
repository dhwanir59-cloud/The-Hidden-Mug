import { ChevronDown, Coffee, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  openBooking: () => void;
}

export default function Hero({ openBooking }: HeroProps) {
  const scrollToSection = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video Loop */}
      <div className="absolute inset-0 w-full h-full object-cover">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover filter brightness-[0.55] contrast-[1.05] scale-[1.02]"
          poster="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop"
        >
          <source
            src="https://player.vimeo.com/external/435674703.sd.mp4?s=7f35b2cc2f559286f0b4d4b7c12573f324482e98&profile_id=165&oauth2_token_id=57447761"
            type="video/mp4"
          />
          {/* Fallback back up video */}
          <source
            src="https://player.vimeo.com/external/371433846.sd.mp4?s=231da65e77099ec16685cf48eb6f499b9e078516&profile_id=165&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
        {/* Soft Ambient Overlay to blend video into the warm palette */}
        <div className="absolute inset-0 bg-gradient-to-b from-cafe-dark/40 via-cafe-dark/20 to-cafe-bg dark:to-cafe-dark transition-colors duration-700 mix-blend-multiply" />
        <div className="absolute inset-0 bg-cafe-brown/10 mix-blend-color" />
      </div>

      {/* Floating Sparkles & Dust simulation for magical/secret feel */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-2 h-2 rounded-full bg-cafe-gold/60 top-1/4 left-1/3 sparkle-slow blur-[1px]" />
        <div className="absolute w-3 h-3 rounded-full bg-cafe-gold/40 top-1/2 left-2/3 sparkle-slow blur-[2px]" style={{ animationDelay: '2s' }} />
        <div className="absolute w-1.5 h-1.5 rounded-full bg-cafe-gold/70 top-2/3 left-1/5 sparkle-slow" style={{ animationDelay: '4s' }} />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Editorial Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-2 mb-6"
        >
          <div className="h-px w-8 bg-cafe-gold" />
          <span className="text-xs tracking-[0.4em] uppercase font-mono text-cafe-gold font-medium flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-cafe-gold inline" />
            A Quiet Urban Hideaway
          </span>
          <div className="h-px w-8 bg-cafe-gold" />
        </motion.div>

        {/* Cinematic Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-cafe-bg font-light tracking-tight leading-none mb-8"
        >
          More Than Coffee.<br />
          <span className="italic font-normal text-cafe-beige">It's An Experience.</span>
        </motion.h1>

        {/* Narrative Teaser */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-cafe-cream/80 text-sm md:text-base tracking-wide max-w-xl font-light leading-relaxed mb-10 font-sans"
        >
          Tucked behind an unmarked brick entryway lies a sensory retreat. Freshly pulled single-origin roasts, botanical pastries, and slow music for deep thinkers.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => scrollToSection('#menu')}
            className="px-8 py-3.5 bg-cafe-gold hover:bg-cafe-beige text-cafe-dark font-sans text-xs uppercase tracking-widest font-semibold transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Coffee className="w-4 h-4" />
            Explore Menu
          </button>
          <button
            onClick={() => scrollToSection('#location')}
            className="px-8 py-3.5 bg-transparent hover:bg-cafe-cream/10 text-cafe-bg border border-cafe-bg/40 hover:border-cafe-bg font-sans text-xs uppercase tracking-widest font-semibold transition-all duration-300 flex items-center justify-center gap-2"
          >
            <MapPin className="w-4 h-4 text-cafe-gold" />
            Visit Us
          </button>
        </motion.div>
      </div>

      {/* Floating Scroll Down Arrow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1">
        <span className="text-[9px] uppercase tracking-[0.3em] font-mono text-cafe-cream/50">
          Scroll to discover
        </span>
        <motion.button
          onClick={() => scrollToSection('#story')}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="p-1 rounded-full text-cafe-gold hover:text-cafe-bg transition-colors"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.button>
      </div>
    </section>
  );
}
