import { MouseEvent } from 'react';
import { Coffee, Instagram, Facebook, Twitter, MapPin, Mail, Phone, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-cafe-dark text-cafe-bg pt-16 pb-12 border-t border-cafe-brown/20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-cafe-brown/20">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-cafe-gold flex items-center justify-center text-cafe-dark font-bold">
                <Coffee className="w-4 h-4" />
              </div>
              <span className="font-serif text-lg tracking-wider font-semibold text-cafe-bg block">
                THE HIDDEN MUG
              </span>
            </div>
            <p className="text-xs text-cafe-cream/60 leading-relaxed max-w-sm font-sans font-light">
              Tucked away from the rush. Built intentionally for thinkers, painters, coders, and social storytellers. Experience coffee through the lens of stillness.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-cafe-brown/40 text-cafe-cream/60 hover:text-cafe-gold hover:border-cafe-gold transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-cafe-brown/40 text-cafe-cream/60 hover:text-cafe-gold hover:border-cafe-gold transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-cafe-brown/40 text-cafe-cream/60 hover:text-cafe-gold hover:border-cafe-gold transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-[0.25em] text-cafe-gold font-bold">
              Navigations
            </h4>
            <div className="flex flex-col gap-2.5 text-xs text-cafe-cream/60 font-sans font-light">
              <a href="#story" onClick={(e) => handleLinkClick(e, '#story')} className="hover:text-cafe-gold transition-colors">The Story</a>
              <a href="#menu" onClick={(e) => handleLinkClick(e, '#menu')} className="hover:text-cafe-gold transition-colors">Signature Menu</a>
              <a href="#spaces" onClick={(e) => handleLinkClick(e, '#spaces')} className="hover:text-cafe-gold transition-colors">Discover Corners</a>
              <a href="#hideout" onClick={(e) => handleLinkClick(e, '#hideout')} className="hover:text-cafe-gold transition-colors">Creator Studio</a>
              <a href="#nook" onClick={(e) => handleLinkClick(e, '#nook')} className="hover:text-cafe-gold transition-colors">Secret Member Nook</a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-[0.25em] text-cafe-gold font-bold">
              The Sanctuary
            </h4>
            <div className="space-y-3 text-xs text-cafe-cream/60 font-sans font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cafe-gold flex-shrink-0 mt-0.5" />
                <span>124 Stonecutter Passage, Lower Vaults, Sector 4</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cafe-gold flex-shrink-0" />
                <span>+1 (234) 567-890</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cafe-gold flex-shrink-0" />
                <span>hello@thehiddenmug.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col gap-6 border-t border-cafe-brown/15">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-4 bg-cafe-bg/5 dark:bg-cafe-dark/40 border border-cafe-brown/15 px-6 font-mono text-[10px] uppercase tracking-[0.15em] text-cafe-cream/80">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-cafe-sage rounded-full inline-block animate-pulse" />
              <span>NO. 124, THE STONE CUTTER PASSAGE, LOWER VAULTS</span>
            </div>
            <div>INSTAGRAM @THEHIDDENMUG</div>
            <div className="text-cafe-gold">OPEN UNTIL 10:00 PM — CREATORS WELCOME</div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-cafe-cream/40">
            <p>© {currentYear} The Hidden Mug. Hidden Away. Shared Everywhere.</p>
            <p className="flex items-center gap-1">
              Made with <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" /> for the Creative Mind.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
