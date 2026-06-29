import { useState, FormEvent } from 'react';
import { CAFE_EVENTS } from '../data/cafeData';
import { CafeEvent } from '../types';
import { Calendar, Clock, Ticket, Check, AlertCircle, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Events() {
  const [events, setEvents] = useState<CafeEvent[]>(CAFE_EVENTS);
  const [registeredEventId, setRegisteredEventId] = useState<string | null>(null);
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [activeEvent, setActiveEvent] = useState<CafeEvent | null>(null);

  const handleOpenRegistration = (event: CafeEvent) => {
    setActiveEvent(event);
    setRegisteredEventId(null);
  };

  const handleRSVP = (e: FormEvent) => {
    e.preventDefault();
    if (!activeEvent || !guestName.trim() || !guestEmail.trim()) return;

    // Decrement spots in state
    setEvents((prev) =>
      prev.map((evt) => {
        if (evt.id === activeEvent.id && evt.spotsLeft > 0) {
          return { ...evt, spotsLeft: evt.spotsLeft - 1 };
        }
        return evt;
      })
    );

    setRegisteredEventId(activeEvent.id);
  };

  return (
    <section id="events" className="py-24 md:py-32 bg-cafe-cream/10 dark:bg-cafe-dark/30 transition-colors duration-700 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="text-xs tracking-[0.3em] uppercase font-mono text-cafe-gold font-medium block mb-3">
            06 / Community Gatherings
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-cafe-dark dark:text-cafe-cream font-light tracking-tight mb-6">
            Curated Events. Shared <span className="italic font-normal text-cafe-brown dark:text-cafe-gold">Experiences</span>.
          </h2>
          <p className="text-sm text-cafe-dark/70 dark:text-cafe-cream/70 leading-relaxed font-sans font-light">
            We are more than just a café. We are an incubation hub for acoustic melodies, clay molding, poetry, and sensory coffee tasting masterclasses. Secure your ticket below.
          </p>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {events.map((event) => {
            const hasSpots = event.spotsLeft > 0;
            const isRegistered = registeredEventId === event.id;

            return (
              <div
                key={event.id}
                className="group flex flex-col sm:flex-row bg-cafe-bg dark:bg-cafe-dark border border-cafe-beige/30 dark:border-cafe-brown/20 overflow-hidden relative"
              >
                {/* Left Side: Thumbnail with tag overlay */}
                <div className="sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden relative bg-cafe-cream">
                  <img
                    src={event.image}
                    alt={event.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 bg-cafe-dark/80 backdrop-blur-sm text-cafe-gold text-[9px] font-mono uppercase tracking-[0.25em] px-2.5 py-1 border border-cafe-gold/30">
                    {event.tag}
                  </span>
                </div>

                {/* Right Side: Event details */}
                <div className="sm:w-3/5 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap gap-3 items-center text-[10px] font-mono text-cafe-gold uppercase tracking-wider mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-cafe-gold" />
                        {event.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-cafe-gold" />
                        {event.time}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl md:text-2xl text-cafe-dark dark:text-cafe-cream mb-2 group-hover:text-cafe-gold transition-colors duration-200">
                      {event.title}
                    </h3>
                    <p className="text-xs text-cafe-dark/70 dark:text-cafe-cream/70 leading-relaxed font-sans font-light mb-4">
                      {event.description}
                    </p>
                  </div>

                  {/* Actions & Ticket details */}
                  <div className="pt-4 border-t border-cafe-beige/10 dark:border-cafe-brown/10 flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase text-cafe-dark/55 dark:text-cafe-cream/50 flex items-center gap-1 font-semibold">
                      <Ticket className="w-3.5 h-3.5 text-cafe-gold" />
                      {event.spotsLeft} Spots Left
                    </span>

                    <button
                      onClick={() => handleOpenRegistration(event)}
                      className={`px-4 py-2 text-[10px] uppercase tracking-widest font-mono font-bold transition-all ${
                        !hasSpots
                          ? 'bg-transparent text-red-500 border border-red-500/20 cursor-not-allowed'
                          : 'bg-cafe-brown dark:bg-cafe-gold text-cafe-bg dark:text-cafe-dark hover:bg-cafe-dark dark:hover:bg-cafe-cream'
                      }`}
                      disabled={!hasSpots}
                    >
                      {!hasSpots ? 'Sold Out' : 'Reserve Spot'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* RSVP Modal */}
      <AnimatePresence>
        {activeEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveEvent(null)}
              className="absolute inset-0 bg-cafe-dark/80 backdrop-blur-sm"
            />

            {/* Form card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative w-full max-w-lg bg-cafe-bg dark:bg-cafe-dark border border-cafe-beige/40 dark:border-cafe-brown/25 p-6 md:p-8 overflow-hidden"
            >
              <button
                onClick={() => setActiveEvent(null)}
                className="absolute top-4 right-4 text-cafe-dark/50 dark:text-cafe-cream/50 hover:text-cafe-gold transition-colors"
              >
                ✕
              </button>

              {registeredEventId === activeEvent.id ? (
                /* Success Ticket View */
                <div className="text-center py-6">
                  <div className="w-12 h-12 rounded-full bg-cafe-sage/10 text-cafe-sage flex items-center justify-center mx-auto mb-4 border border-cafe-sage/20">
                    <Check className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-cafe-gold block mb-1">
                    RSVP Confirmed
                  </span>
                  <h3 className="font-serif text-2xl text-cafe-dark dark:text-cafe-cream font-light mb-4">
                    Your Ticket Is Locked In!
                  </h3>
                  <div className="border border-dashed border-cafe-beige/40 dark:border-cafe-brown/25 p-4 bg-cafe-cream/40 dark:bg-cafe-brown/5 text-left mb-6 font-mono text-xs text-cafe-dark/80 dark:text-cafe-cream/80 space-y-2">
                    <div><span className="text-cafe-gold">GATHERING:</span> {activeEvent.title}</div>
                    <div><span className="text-cafe-gold">DATE:</span> {activeEvent.date}</div>
                    <div><span className="text-cafe-gold">TIME:</span> {activeEvent.time}</div>
                    <div><span className="text-cafe-gold">ATTENDEE:</span> {guestName}</div>
                    <div className="text-[10px] text-cafe-sage/80 pt-2 border-t border-cafe-beige/10">* Present this digital card on arrival for entry.</div>
                  </div>
                  <button
                    onClick={() => setActiveEvent(null)}
                    className="w-full py-3 bg-cafe-brown dark:bg-cafe-gold text-cafe-bg dark:text-cafe-dark text-xs uppercase tracking-widest font-semibold"
                  >
                    Return to Gatherings
                  </button>
                </div>
              ) : (
                /* Interactive Form View */
                <div>
                  <span className="text-xs font-mono text-cafe-gold uppercase tracking-widest block mb-1">
                    Event Registration
                  </span>
                  <h3 className="font-serif text-2xl text-cafe-dark dark:text-cafe-cream font-light mb-6">
                    RSVP for {activeEvent.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs font-mono text-cafe-dark/60 dark:text-cafe-cream/60 mb-6 bg-cafe-cream/50 dark:bg-cafe-brown/5 p-3 border border-cafe-beige/20">
                    <AlertCircle className="w-4 h-4 text-cafe-gold" />
                    <span>Free entry. Limited seating of {activeEvent.spotsLeft} spots available.</span>
                  </div>

                  <form onSubmit={handleRSVP} className="space-y-4">
                    <div>
                      <label className="text-[10px] uppercase tracking-widest font-mono text-cafe-gold font-bold block mb-1">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Liam Hall"
                        value={guestName}
                        onChange={(e) => setGuestName(e.target.value)}
                        className="w-full px-4 py-3 bg-cafe-cream dark:bg-cafe-dark border border-cafe-beige/40 dark:border-cafe-brown/25 text-sm text-cafe-dark dark:text-cafe-cream focus:outline-none focus:border-cafe-gold focus:ring-1 focus:ring-cafe-gold rounded-none"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] uppercase tracking-widest font-mono text-cafe-gold font-bold block mb-1">
                        Your Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. liam@example.com"
                        value={guestEmail}
                        onChange={(e) => setGuestEmail(e.target.value)}
                        className="w-full px-4 py-3 bg-cafe-cream dark:bg-cafe-dark border border-cafe-beige/40 dark:border-cafe-brown/25 text-sm text-cafe-dark dark:text-cafe-cream focus:outline-none focus:border-cafe-gold focus:ring-1 focus:ring-cafe-gold rounded-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-cafe-brown dark:bg-cafe-gold text-cafe-bg dark:text-cafe-dark text-xs uppercase tracking-widest font-bold rounded-none hover:bg-cafe-dark dark:hover:bg-cafe-cream transition-colors duration-300 mt-6 flex items-center justify-center gap-1.5"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      Generate Free Ticket
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
