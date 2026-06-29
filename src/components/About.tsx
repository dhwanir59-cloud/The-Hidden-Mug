import { useState } from 'react';
import { BookOpen, Compass, Award, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function About() {
  const [activeTab, setActiveTab] = useState<'brand' | 'founder' | 'mission'>('brand');

  const tabs = {
    brand: {
      title: 'Our Journey',
      icon: <Compass className="w-4 h-4" />,
      subtitle: 'Born from a sunlit loft.',
      content:
        'The Hidden Mug began as an unmarked weekend pop-up in an old ironworks district. We wanted to build a sanctuary where the clock slows down, and every cup of coffee is treated as a mindful event. We believe that coffee is a bridge—not just a fuel source—designed to spark conversations, ground your creativity, and let you find peace within the urban rush.',
      extra: 'We select our beans through ethical direct-trade relationships, roasting them in micro-batches to emphasize their native geographical terroir.',
      image: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=600&auto=format&fit=crop',
    },
    founder: {
      title: 'The Founder',
      icon: <BookOpen className="w-4 h-4" />,
      subtitle: 'Maya Lin, Ceramicist & Brewer.',
      content:
        'Maya Lin founded The Hidden Mug in 2021. Drawing from her heritage in Kyoto tea ceremonies and her professional background in architectural clay ceramics, she sought to marry the mindful stillness of traditional spaces with the raw, active pulse of a modern creative workspace. She hand-throws several of the cups you drink from today.',
      extra: '"We don’t just serve coffee. We design spaces of presence where digital nomads, deep thinkers, and creators can coexist under golden light and acoustic harmony."',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop',
    },
    mission: {
      title: 'The Mission',
      icon: <Award className="w-4 h-4" />,
      subtitle: 'To cultivate presence.',
      content:
        'Our core mission is to protect quiet spaces. In an age of high-speed distractions, we deliberately craft pockets of quietness. We bake all our organic pastries in-house daily, pull single-origin espresso at exact botanical parameters, and maintain acoustic layouts that cater specifically to books, painting, and peaceful coding sessions.',
      extra: 'We dedicate 5% of our monthly earnings to local arts organizations, community workshops, and public garden initiatives.',
      image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=600&auto=format&fit=crop',
    },
  };

  return (
    <section id="story" className="py-24 md:py-32 bg-cafe-bg dark:bg-cafe-dark transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-6">
        {/* Intro header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="text-xs tracking-[0.3em] uppercase font-mono text-cafe-gold font-medium block mb-3">
            01 / Who We Are
          </span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-cafe-dark dark:text-cafe-cream font-light tracking-tight leading-tight">
            A Hidden Space For <span className="italic font-normal text-cafe-brown dark:text-cafe-gold">Conversations</span>, Creativity & Coffee.
          </h2>
        </div>

        {/* Editorial Tab Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Interactivity Toggles & Story */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Tab Toggles */}
            <div className="flex border-b border-cafe-beige/40 dark:border-cafe-brown/20 pb-4 mb-8 gap-4 md:gap-8 overflow-x-auto no-scrollbar">
              {(Object.keys(tabs) as Array<keyof typeof tabs>).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center gap-2 pb-2 text-xs md:text-sm uppercase tracking-widest font-semibold transition-all relative ${
                    activeTab === key
                      ? 'text-cafe-dark dark:text-cafe-cream font-bold'
                      : 'text-cafe-dark/40 dark:text-cafe-cream/40 hover:text-cafe-gold'
                  }`}
                >
                  {tabs[key].icon}
                  {tabs[key].title}
                  {activeTab === key && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute bottom-[-17px] left-0 right-0 h-[2px] bg-cafe-gold"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab content with transition */}
            <div className="min-h-[300px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="text-xs font-mono text-cafe-gold uppercase tracking-widest block mb-1">
                    {tabs[activeTab].subtitle}
                  </span>
                  <p className="font-serif text-2xl md:text-3xl text-cafe-dark dark:text-cafe-cream font-light leading-relaxed mb-6">
                    {tabs[activeTab].content}
                  </p>
                  <p className="text-sm text-cafe-dark/70 dark:text-cafe-cream/70 leading-relaxed font-sans font-light">
                    {tabs[activeTab].extra}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Decorative signature mark */}
              <div className="mt-10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-cafe-gold/30 flex items-center justify-center text-cafe-gold">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-cafe-gold block">
                    Certified Organic & Ethical
                  </span>
                  <span className="text-[11px] font-serif italic text-cafe-dark/60 dark:text-cafe-cream/60">
                    A genuine space of presence
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Portrait Frame */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] overflow-hidden relative border border-cafe-beige/40 dark:border-cafe-brown/20 bg-cafe-cream p-4">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeTab}
                  src={tabs[activeTab].image}
                  alt={tabs[activeTab].title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </AnimatePresence>
              {/* Gold corners */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-cafe-gold" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-cafe-gold" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-cafe-gold" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-cafe-gold" />
            </div>

            {/* Back offset frame */}
            <div className="absolute inset-0 border border-cafe-gold/20 -translate-x-4 translate-y-4 -z-10 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
