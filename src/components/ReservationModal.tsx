import { useState, FormEvent } from 'react';
import { X, Calendar, Clock, Users, Coffee, Sparkles, Check, CheckCircle2, BookmarkCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('10:00 AM');
  const [guests, setGuests] = useState('2');
  const [zone, setZone] = useState('Reading Corner');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  const timeSlots = [
    '8:30 AM', '10:00 AM', '11:30 AM', '1:00 PM', '2:30 PM', '4:00 PM', '5:30 PM', '7:00 PM'
  ];

  const guestCounts = ['1', '2', '3', '4', '5', '6+'];

  const zones = [
    { name: 'Reading Corner', desc: 'Silence, leather armchairs, books' },
    { name: 'Creator’s Studio', desc: 'Natural light, photo backdrop' },
    { name: 'The Ivy Canopy', desc: 'Outdoor garden, stone fountain' },
    { name: 'The Rain Window', desc: 'Street view, misting glass' },
    { name: 'Deep Focus Zone', desc: 'Walnut desks, charging outlets' }
  ];

  const handleBookTable = (e: FormEvent) => {
    e.preventDefault();
    if (!date) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setConfirmed(true);
      // Generate a dynamic confirmation number e.g. HM-2623-R7
      const randomCode = `HM-${Math.floor(1000 + Math.random() * 9000)}-R${Math.floor(1 + Math.random() * 9)}`;
      setConfirmationCode(randomCode);
    }, 1500);
  };

  const resetForm = () => {
    setDate('');
    setTime('10:00 AM');
    setGuests('2');
    setZone('Reading Corner');
    setNotes('');
    setConfirmed(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetForm}
            className="absolute inset-0 bg-cafe-dark/80 backdrop-blur-sm"
          />

          {/* Form Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25 }}
            className="relative w-full max-w-xl bg-cafe-bg dark:bg-cafe-dark border border-cafe-beige/40 dark:border-cafe-brown/25 p-6 md:p-8 overflow-hidden max-h-[90vh] overflow-y-auto no-scrollbar"
          >
            {/* Close button */}
            <button
              onClick={resetForm}
              className="absolute top-4 right-4 text-cafe-dark/50 dark:text-cafe-cream/50 hover:text-cafe-gold transition-colors"
            >
              <X className="w-4.5 h-4.5" />
            </button>

            {!confirmed ? (
              /* Booking Form View */
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Coffee className="w-5 h-5 text-cafe-gold" />
                  <span className="text-xs font-mono text-cafe-gold uppercase tracking-[0.2em] font-semibold">
                    Reserve a Sanctuary Table
                  </span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-cafe-dark dark:text-cafe-cream font-light mb-6">
                  Book Your Experience
                </h3>

                <form onSubmit={handleBookTable} className="space-y-6">
                  {/* Select Date */}
                  <div>
                    <label className="text-[10px] uppercase tracking-widest font-mono text-cafe-gold font-bold block mb-2">
                      1. Preferred Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cafe-gold" />
                      <input
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full pl-11 pr-4 py-3 bg-cafe-cream/50 dark:bg-cafe-dark/80 border border-cafe-beige/40 dark:border-cafe-brown/25 text-sm text-cafe-dark dark:text-cafe-cream focus:outline-none focus:border-cafe-gold rounded-none"
                      />
                    </div>
                  </div>

                  {/* Guest Count Selector */}
                  <div>
                    <label className="text-[10px] uppercase tracking-widest font-mono text-cafe-gold font-bold block mb-2 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5" />
                      2. Guest Party Size
                    </label>
                    <div className="grid grid-cols-6 gap-2">
                      {guestCounts.map((count) => (
                        <button
                          key={count}
                          type="button"
                          onClick={() => setGuests(count)}
                          className={`py-2 text-xs font-mono border transition-all ${
                            guests === count
                              ? 'bg-cafe-brown dark:bg-cafe-gold text-cafe-bg dark:text-cafe-dark border-transparent font-bold'
                              : 'border-cafe-beige/40 dark:border-cafe-brown/20 text-cafe-dark/70 dark:text-cafe-cream/70 hover:border-cafe-gold'
                          }`}
                        >
                          {count}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time slots */}
                  <div>
                    <label className="text-[10px] uppercase tracking-widest font-mono text-cafe-gold font-bold block mb-2 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      3. Seating Session Time
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setTime(slot)}
                          className={`py-2 text-[10px] font-mono border transition-all ${
                            time === slot
                              ? 'bg-cafe-brown dark:bg-cafe-gold text-cafe-bg dark:text-cafe-dark border-transparent font-bold'
                              : 'border-cafe-beige/40 dark:border-cafe-brown/20 text-cafe-dark/70 dark:text-cafe-cream/70 hover:border-cafe-gold'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Zone Preference */}
                  <div>
                    <label className="text-[10px] uppercase tracking-widest font-mono text-cafe-gold font-bold block mb-2">
                      4. Preferred Ambiance Zone
                    </label>
                    <div className="space-y-2 max-h-[160px] overflow-y-auto no-scrollbar pr-1">
                      {zones.map((z) => (
                        <button
                          key={z.name}
                          type="button"
                          onClick={() => setZone(z.name)}
                          className={`w-full p-2.5 text-left border flex justify-between items-center transition-all ${
                            zone === z.name
                              ? 'bg-cafe-cream dark:bg-cafe-brown/10 border-cafe-gold'
                              : 'border-cafe-beige/30 dark:border-cafe-brown/15 hover:border-cafe-gold/50'
                          }`}
                        >
                          <div>
                            <span className={`text-xs block font-serif ${zone === z.name ? 'text-cafe-gold font-semibold' : 'text-cafe-dark dark:text-cafe-cream'}`}>
                              {z.name}
                            </span>
                            <span className="text-[9px] text-cafe-dark/50 dark:text-cafe-cream/40 block font-sans">
                              {z.desc}
                            </span>
                          </div>
                          {zone === z.name && <CheckCircle2 className="w-4 h-4 text-cafe-gold" />}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Notes / Requests */}
                  <div>
                    <label className="text-[10px] uppercase tracking-widest font-mono text-cafe-gold font-bold block mb-2">
                      5. Dietary / Special Requests (Optional)
                    </label>
                    <textarea
                      placeholder="e.g. Birthday celebration, gluten-free requests, quiet desk preferred..."
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full px-3 py-2 bg-cafe-cream/50 dark:bg-cafe-dark/80 border border-cafe-beige/40 dark:border-cafe-brown/25 text-xs text-cafe-dark dark:text-cafe-cream placeholder-cafe-dark/40 dark:placeholder-cafe-cream/30 focus:outline-none focus:border-cafe-gold rounded-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 bg-cafe-brown dark:bg-cafe-gold hover:bg-cafe-dark dark:hover:bg-cafe-cream text-cafe-bg dark:text-cafe-dark font-mono text-xs uppercase tracking-widest font-bold transition-all duration-300 flex items-center justify-center gap-2 rounded-none"
                  >
                    {loading ? (
                      'Consulting Ledger...'
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        Confirm Reservation
                      </>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              /* Booking Success Printable Card View */
              <div className="text-center py-4">
                <div className="w-14 h-14 rounded-full bg-cafe-sage/10 text-cafe-sage flex items-center justify-center mx-auto mb-4 border border-cafe-sage/20">
                  <BookmarkCheck className="w-7 h-7" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-cafe-gold block mb-1 font-bold">
                  Table Booked Successfully
                </span>
                <h3 className="font-serif text-3xl text-cafe-dark dark:text-cafe-cream font-light mb-4">
                  Ambiance Confirmed!
                </h3>
                <p className="text-xs text-cafe-dark/70 dark:text-cafe-cream/70 leading-relaxed font-sans font-light mb-8 max-w-sm mx-auto">
                  Your quiet table is reserved. A host will be waiting for you at the Lower Vaults unmarked entrance with fresh water and a curated book.
                </p>

                {/* Voucher design ticket */}
                <div className="border border-cafe-gold/30 p-5 bg-cafe-cream dark:bg-cafe-dark/50 relative overflow-hidden text-left font-mono text-xs max-w-sm mx-auto mb-8 shadow-sm">
                  {/* side notched holes typical of vintage ticket */}
                  <div className="absolute top-1/2 left-[-10px] -translate-y-1/2 w-4 h-4 bg-cafe-bg dark:bg-cafe-dark rounded-full border border-cafe-gold/30" />
                  <div className="absolute top-1/2 right-[-10px] -translate-y-1/2 w-4 h-4 bg-cafe-bg dark:bg-cafe-dark rounded-full border border-cafe-gold/30" />

                  <div className="text-center pb-3 border-b border-dashed border-cafe-gold/30 mb-4">
                    <span className="font-serif text-sm tracking-wider font-semibold text-cafe-dark dark:text-cafe-cream block">
                      THE HIDDEN MUG VOUCHER
                    </span>
                    <span className="text-[9px] uppercase tracking-widest text-cafe-gold">
                      Reservation Ticket
                    </span>
                  </div>

                  <div className="space-y-2.5 text-cafe-dark/80 dark:text-cafe-cream/80">
                    <div className="flex justify-between">
                      <span className="text-cafe-gold">CONFIRM ID:</span>
                      <span className="font-bold text-cafe-dark dark:text-cafe-cream">{confirmationCode}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-cafe-gold">DATE:</span>
                      <span className="font-bold text-cafe-dark dark:text-cafe-cream">{date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-cafe-gold">SESSION TIME:</span>
                      <span className="font-bold text-cafe-dark dark:text-cafe-cream">{time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-cafe-gold">GUESTS:</span>
                      <span className="font-bold text-cafe-dark dark:text-cafe-cream">{guests} Guest(s)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-cafe-gold">PREFFERED ZONE:</span>
                      <span className="font-bold text-cafe-dark dark:text-cafe-cream">{zone}</span>
                    </div>
                    {notes && (
                      <div className="pt-2 border-t border-cafe-beige/20 text-[10px] italic">
                        <span className="text-cafe-gold block not-italic font-bold">NOTES:</span>
                        {notes}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      window.print();
                    }}
                    className="flex-1 py-3 bg-transparent border border-cafe-gold text-cafe-gold text-xs uppercase tracking-widest font-semibold hover:bg-cafe-gold hover:text-cafe-dark transition-all duration-300"
                  >
                    Print Ticket
                  </button>
                  <button
                    onClick={resetForm}
                    className="flex-1 py-3 bg-cafe-brown dark:bg-cafe-gold text-cafe-bg dark:text-cafe-dark text-xs uppercase tracking-widest font-semibold"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
