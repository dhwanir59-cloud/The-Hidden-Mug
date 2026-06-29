import { useState, FormEvent } from 'react';
import { Mail, Check, Sparkles, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
      setEmail('');
    }, 1200);
  };

  return (
    <section className="py-20 bg-cafe-bg dark:bg-cafe-dark border-t border-b border-cafe-beige/30 dark:border-cafe-brown/20 transition-colors duration-700">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <AnimatePresence mode="wait">
          {!subscribed ? (
            /* Standard input screen */
            <motion.div
              key="subscribe-form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-2xl mx-auto"
            >
              <span className="text-xs tracking-[0.3em] uppercase font-mono text-cafe-gold font-medium block mb-3">
                Newsletter Registration
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-cafe-dark dark:text-cafe-cream font-light tracking-tight mb-4">
                Receive Whispers from the Mug.
              </h2>
              <p className="text-xs md:text-sm text-cafe-dark/70 dark:text-cafe-cream/70 leading-relaxed font-sans font-light mb-8 max-w-lg mx-auto">
                No spam. Just periodic whispers about upcoming poetry nights, secret menu variations, and rare single-origin roasts arriving at our counter.
              </p>

              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-cafe-gold/60" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-11 pr-4 py-3.5 bg-cafe-cream/50 dark:bg-cafe-dark/80 border border-cafe-beige/40 dark:border-cafe-brown/25 text-sm text-cafe-dark dark:text-cafe-cream placeholder-cafe-dark/40 dark:placeholder-cafe-cream/30 focus:outline-none focus:border-cafe-gold rounded-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-3.5 bg-cafe-brown dark:bg-cafe-gold text-cafe-bg dark:text-cafe-dark font-mono text-xs uppercase tracking-widest font-bold hover:bg-cafe-dark dark:hover:bg-cafe-cream transition-colors duration-300 flex items-center justify-center gap-2 flex-shrink-0"
                >
                  {loading ? 'Subscribing...' : 'Subscribe'}
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </motion.div>
          ) : (
            /* Success confirmation panel */
            <motion.div
              key="subscribe-success"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', damping: 25 }}
              className="max-w-md mx-auto p-6 border border-cafe-gold/20 bg-cafe-cream/40 dark:bg-cafe-brown/10 relative"
            >
              <div className="w-10 h-10 rounded-full bg-cafe-sage/10 text-cafe-sage flex items-center justify-center mx-auto mb-4 border border-cafe-sage/20">
                <Check className="w-5 h-5" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-cafe-gold block mb-1">
                Subscription Confirmed
              </span>
              <h3 className="font-serif text-2xl text-cafe-dark dark:text-cafe-cream font-light mb-3">
                Welcome to the Sanctuary!
              </h3>
              <p className="text-xs text-cafe-dark/70 dark:text-cafe-cream/70 leading-relaxed font-sans font-light mb-6">
                Your credentials are filed. Present this secret welcoming discount code on your next visit to receive 15% off your custom signature pour-over or choux pastry.
              </p>

              {/* coupon ticket visual */}
              <div className="border border-dashed border-cafe-gold/40 p-3 bg-cafe-bg dark:bg-cafe-dark text-center font-mono text-xs font-bold text-cafe-gold tracking-widest">
                <span className="text-[9px] uppercase tracking-wider block font-light text-cafe-dark/50 dark:text-cafe-cream/40 mb-1">
                  DISCOUNT CODE
                </span>
                WELCOME_MUG
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
