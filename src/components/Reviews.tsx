import { useState, FormEvent } from 'react';
import { REVIEWS } from '../data/cafeData';
import { Review } from '../types';
import { Star, ChevronLeft, ChevronRight, PenTool, Check, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Reviews() {
  const [reviewsList, setReviewsList] = useState<Review[]>(REVIEWS);
  const [activeReviewIdx, setActiveReviewIdx] = useState(0);

  // Review submission state
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState(5);
  const [showSubmitForm, setShowSubmitForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handlePrev = () => {
    setActiveReviewIdx((prev) => (prev === 0 ? reviewsList.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveReviewIdx((prev) => (prev === reviewsList.length - 1 ? 0 : prev + 1));
  };

  const handleSubmitReview = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;

    const newReview: Review = {
      id: `custom-r-${Date.now()}`,
      name: name.trim(),
      role: role.trim() || 'Aesthetic Guest',
      text: text.trim(),
      rating,
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=120&auto=format&fit=crop', // generic warm avatar
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    };

    setReviewsList([newReview, ...reviewsList]);
    setIsSubmitted(true);
    setActiveReviewIdx(0);

    // reset fields
    setName('');
    setRole('');
    setText('');
    setRating(5);

    setTimeout(() => {
      setIsSubmitted(false);
      setShowSubmitForm(false);
    }, 2500);
  };

  return (
    <section id="reviews" className="py-24 md:py-32 bg-cafe-bg dark:bg-cafe-dark transition-colors duration-700 relative overflow-hidden">
      {/* Aesthetic grid line layout similar to magazine */}
      <div className="absolute left-1/4 top-0 bottom-0 w-px bg-cafe-beige/20 dark:bg-cafe-brown/10 hidden md:block" />
      <div className="absolute right-1/4 top-0 bottom-0 w-px bg-cafe-beige/20 dark:bg-cafe-brown/10 hidden md:block" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.3em] uppercase font-mono text-cafe-gold font-medium block mb-3">
            07 / Guest Expressions
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-cafe-dark dark:text-cafe-cream font-light tracking-tight">
            Loved By <span className="italic font-normal text-cafe-brown dark:text-cafe-gold">Dreamers & Seekers</span>.
          </h2>
        </div>

        {/* Testimonial Active Display Card */}
        <div className="relative min-h-[300px] flex items-center justify-center py-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeReviewIdx}
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-center max-w-3xl"
            >
              {/* Star Ratings */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: reviewsList[activeReviewIdx].rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-cafe-gold text-cafe-gold" />
                ))}
              </div>

              {/* Review Text */}
              <p className="font-serif text-2xl md:text-3xl text-cafe-dark dark:text-cafe-cream font-light italic leading-relaxed mb-8 px-4">
                "{reviewsList[activeReviewIdx].text}"
              </p>

              {/* Customer Info with image */}
              <div className="flex items-center justify-center gap-3">
                <img
                  src={reviewsList[activeReviewIdx].image}
                  alt={reviewsList[activeReviewIdx].name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border border-cafe-gold/30 p-0.5"
                />
                <div className="text-left">
                  <span className="font-sans font-semibold text-sm text-cafe-dark dark:text-cafe-cream block">
                    {reviewsList[activeReviewIdx].name}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest font-mono text-cafe-gold block">
                    {reviewsList[activeReviewIdx].role}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel controls & Add Review Toggle */}
        <div className="flex items-center justify-between border-t border-b border-cafe-beige/40 dark:border-cafe-brown/20 py-6 mt-8">
          <button
            onClick={handlePrev}
            className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-cafe-dark/60 dark:text-cafe-cream/60 hover:text-cafe-gold transition-colors"
          >
            <ChevronLeft className="w-4 h-4 text-cafe-gold" />
            Previous
          </button>

          <button
            onClick={() => setShowSubmitForm(!showSubmitForm)}
            className="px-6 py-2 border border-cafe-gold text-cafe-gold hover:bg-cafe-gold hover:text-cafe-dark text-[10px] uppercase tracking-widest font-mono font-bold transition-all duration-300 flex items-center gap-1.5"
          >
            <PenTool className="w-3.5 h-3.5" />
            Sign Guestbook
          </button>

          <button
            onClick={handleNext}
            className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-cafe-dark/60 dark:text-cafe-cream/60 hover:text-cafe-gold transition-colors"
          >
            Next
            <ChevronRight className="w-4 h-4 text-cafe-gold" />
          </button>
        </div>

        {/* Collapsible Guestbook review form */}
        <AnimatePresence>
          {showSubmitForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-10 border border-cafe-beige/30 dark:border-cafe-brown/25 bg-cafe-cream/25 dark:bg-cafe-brown/5 p-6 md:p-8 overflow-hidden"
            >
              {isSubmitted ? (
                <div className="text-center py-6">
                  <div className="w-10 h-10 rounded-full bg-cafe-sage/10 text-cafe-sage flex items-center justify-center mx-auto mb-3 border border-cafe-sage/20">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-xl text-cafe-dark dark:text-cafe-cream font-medium">
                    Thank you for signing our Guestbook!
                  </h4>
                  <p className="text-xs text-cafe-dark/60 dark:text-cafe-cream/60 mt-1 font-sans">
                    Your words have been transcribed onto our digital mantle.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <h4 className="font-serif text-xl text-cafe-dark dark:text-cafe-cream font-light mb-4 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-cafe-gold" />
                    How was your experience?
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[9px] uppercase tracking-widest font-mono text-cafe-gold block mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Liam Hall"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2 bg-cafe-bg dark:bg-cafe-dark border border-cafe-beige/40 dark:border-cafe-brown/20 text-xs text-cafe-dark dark:text-cafe-cream focus:outline-none focus:border-cafe-gold rounded-none"
                      />
                    </div>
                    <div>
                      <label className="text-[9px] uppercase tracking-widest font-mono text-cafe-gold block mb-1">
                        Your Calling / Role
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Painter / Software Nomad"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full px-3 py-2 bg-cafe-bg dark:bg-cafe-dark border border-cafe-beige/40 dark:border-cafe-brown/20 text-xs text-cafe-dark dark:text-cafe-cream focus:outline-none focus:border-cafe-gold rounded-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[9px] uppercase tracking-widest font-mono text-cafe-gold block mb-1">
                      Your Stars
                    </label>
                    <div className="flex gap-1.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          className="p-1 focus:outline-none"
                        >
                          <Star
                            className={`w-5 h-5 transition-transform hover:scale-110 ${
                              star <= rating ? 'fill-cafe-gold text-cafe-gold' : 'text-cafe-beige dark:text-cafe-brown/50'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-[9px] uppercase tracking-widest font-mono text-cafe-gold block mb-1">
                      Your Words
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Share a sentence about the ambiance, lattes, or conversations you discovered..."
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      className="w-full px-3 py-2 bg-cafe-bg dark:bg-cafe-dark border border-cafe-beige/40 dark:border-cafe-brown/20 text-xs text-cafe-dark dark:text-cafe-cream focus:outline-none focus:border-cafe-gold rounded-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-cafe-brown dark:bg-cafe-gold text-cafe-bg dark:text-cafe-dark text-[10px] uppercase tracking-widest font-mono font-bold"
                  >
                    Submit Words
                  </button>
                </form>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
