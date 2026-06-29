import { MapPin, Clock, Car, Compass, Phone, Mail, Check } from 'lucide-react';
import { motion } from 'motion/react';

export default function Location() {
  return (
    <section id="location" className="py-24 bg-cafe-cream/20 dark:bg-cafe-dark/50 transition-colors duration-700 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Visual Map Placeholder with high aesthetic styling */}
          <div className="lg:col-span-7">
            <div className="aspect-[16/10] w-full bg-cafe-cream dark:bg-cafe-dark/80 relative border border-cafe-beige/40 dark:border-cafe-brown/25 overflow-hidden p-3">
              {/* Custom Aesthetic Map graphic inside a styled frame */}
              <div className="w-full h-full border border-cafe-beige/30 dark:border-cafe-brown/15 bg-[#E6DEC9] dark:bg-[#201D19] relative flex items-center justify-center">
                {/* SVG Mock styled map */}
                <svg className="absolute inset-0 w-full h-full opacity-60 dark:opacity-30" viewBox="0 0 1000 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Styled roads */}
                  <line x1="100" y1="0" x2="100" y2="600" stroke="#CBBFA5" dark-stroke="#2E2A24" strokeWidth="12" />
                  <line x1="450" y1="0" x2="450" y2="600" stroke="#CBBFA5" dark-stroke="#2E2A24" strokeWidth="20" />
                  <line x1="850" y1="0" x2="850" y2="600" stroke="#CBBFA5" dark-stroke="#2E2A24" strokeWidth="8" />
                  <line x1="0" y1="200" x2="1000" y2="200" stroke="#CBBFA5" dark-stroke="#2E2A24" strokeWidth="16" />
                  <line x1="0" y1="480" x2="1000" y2="480" stroke="#CBBFA5" dark-stroke="#2E2A24" strokeWidth="24" />

                  {/* Styled river */}
                  <path d="M-10,100 C200,80 300,140 400,120 C500,100 700,50 1010,70" stroke="#9CA88B" strokeWidth="30" strokeOpacity="0.4" fill="none" />

                  {/* Neighborhood structures/plots */}
                  <rect x="150" y="50" width="120" height="100" fill="#7A5C4D" fillOpacity="0.1" />
                  <rect x="520" y="240" width="180" height="150" fill="#7A5C4D" fillOpacity="0.1" />
                  <rect x="520" y="50" width="150" height="100" fill="#9CA88B" fillOpacity="0.1" />
                  <rect x="150" y="240" width="220" height="180" fill="#7A5C4D" fillOpacity="0.1" />
                  <circle cx="850" cy="350" r="40" fill="#9CA88B" fillOpacity="0.2" />

                  {/* Target Beacon Ripple */}
                  <circle cx="450" cy="320" r="28" fill="#B98E6F" fillOpacity="0.2">
                    <animate attributeName="r" values="10;40;10" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="450" cy="320" r="10" fill="#7A5C4D" />
                </svg>

                {/* Pin Card overlay */}
                <div className="absolute bg-cafe-bg dark:bg-cafe-dark border border-cafe-gold/30 p-3 shadow-md max-w-[240px] text-center z-10 -translate-y-8">
                  <div className="w-8 h-8 rounded-full bg-cafe-brown text-cafe-bg flex items-center justify-center mx-auto mb-2">
                    <MapPin className="w-4 h-4 text-cafe-gold animate-bounce" />
                  </div>
                  <h4 className="font-serif text-sm text-cafe-dark dark:text-cafe-cream font-bold">
                    THE HIDDEN MUG
                  </h4>
                  <p className="text-[10px] text-cafe-dark/70 dark:text-cafe-cream/70 font-sans mt-0.5 leading-relaxed">
                    124 Stonecutter Passage,<br />
                    Lower Vaults (Door No. 3)
                  </p>
                </div>

                {/* Map style badge */}
                <span className="absolute bottom-3 right-3 text-[8px] font-mono uppercase tracking-widest text-cafe-dark/40 dark:text-cafe-cream/40 bg-cafe-bg/60 dark:bg-cafe-dark/60 px-2 py-1">
                  Interactive Cartographic Sketch
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Address, Hours, Parking detail */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-xs tracking-[0.3em] uppercase font-mono text-cafe-gold font-medium block mb-3">
              08 / Hours & Sanctuary
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-cafe-dark dark:text-cafe-cream font-light tracking-tight leading-tight mb-8">
              Where to Find the <br />
              <span className="italic font-normal text-cafe-brown dark:text-cafe-gold">Unmarked Entryway</span>.
            </h2>

            {/* Address */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-cafe-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-lg text-cafe-dark dark:text-cafe-cream mb-1">
                    The Address
                  </h4>
                  <p className="text-xs md:text-sm text-cafe-dark/70 dark:text-cafe-cream/70 leading-relaxed font-sans font-light">
                    124 Stonecutter Passage, Lower Vaults, Sector 4.<br />
                    <span className="italic font-medium text-cafe-gold">Look for the brass mug hanging above the green gate.</span>
                  </p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-cafe-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-lg text-cafe-dark dark:text-cafe-cream mb-1">
                    Opening Hours
                  </h4>
                  <div className="text-xs md:text-sm text-cafe-dark/70 dark:text-cafe-cream/70 font-sans font-light space-y-1">
                    <p><span className="font-bold">Mon - Fri:</span> 7:30 AM - 6:00 PM</p>
                    <p><span className="font-bold">Sat - Sun:</span> 8:30 AM - 8:00 PM</p>
                    <p className="text-[10px] text-cafe-sage uppercase tracking-widest font-mono font-bold pt-1">
                      * Late Night Acoustic Sessions run till 10 PM on Fridays.
                    </p>
                  </div>
                </div>
              </div>

              {/* Parking Info */}
              <div className="flex items-start gap-4">
                <Car className="w-5 h-5 text-cafe-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-lg text-cafe-dark dark:text-cafe-cream mb-1">
                    Parking & Access
                  </h4>
                  <p className="text-xs md:text-sm text-cafe-dark/70 dark:text-cafe-cream/70 leading-relaxed font-sans font-light">
                    Complimentary underground parking validations are available for up to 3 hours at the Sector 4 Vault Plaza. Bicycle racks are located inside our outer garden.
                  </p>
                </div>
              </div>

              {/* Contact Block */}
              <div className="pt-6 border-t border-cafe-beige/40 dark:border-cafe-brown/20 flex flex-wrap gap-4 text-xs font-mono text-cafe-gold">
                <a href="tel:+12345678" className="flex items-center gap-1.5 hover:text-cafe-dark dark:hover:text-cafe-cream transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                  +1 (234) 567-890
                </a>
                <a href="mailto:hello@thehiddenmug.com" className="flex items-center gap-1.5 hover:text-cafe-dark dark:hover:text-cafe-cream transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                  hello@thehiddenmug.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
