import { useState, useEffect, MouseEvent } from 'react';
import { Coffee, Menu as MenuIcon, X, Moon, Sun, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  cozyMode: boolean;
  setCozyMode: (mode: boolean) => void;
  openBooking: () => void;
}

export default function Navbar({ cozyMode, setCozyMode, openBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Story', href: '#story' },
    { name: 'Menu', href: '#menu' },
    { name: 'Spaces', href: '#spaces' },
    { name: 'Hideout', href: '#hideout' },
    { name: 'Events', href: '#events' },
    { name: 'Nook', href: '#nook' },
    { name: 'Location', href: '#location' },
  ];

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-cafe-bg/95 dark:bg-cafe-dark/95 backdrop-blur-md py-3 shadow-sm border-b border-cafe-beige/20 dark:border-cafe-brown/10'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-full bg-cafe-brown dark:bg-cafe-gold flex items-center justify-center text-cafe-bg dark:text-cafe-dark transition-transform duration-500 group-hover:rotate-12">
              <Coffee className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-xl tracking-wider font-semibold text-cafe-dark dark:text-cafe-cream block leading-tight">
                THE HIDDEN MUG
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] font-mono text-cafe-gold block -mt-1">
                Sanctuary & Brew
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs uppercase tracking-widest font-medium text-cafe-dark/80 dark:text-cafe-cream/80 hover:text-cafe-gold dark:hover:text-cafe-gold transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Items */}
          <div className="hidden md:flex items-center gap-4">
            {/* Cozy Mode Toggle */}
            <button
              onClick={() => setCozyMode(!cozyMode)}
              className="p-2 rounded-full border border-cafe-beige/30 dark:border-cafe-brown/20 text-cafe-dark dark:text-cafe-cream hover:bg-cafe-cream/50 dark:hover:bg-cafe-brown/20 transition-colors"
              title={cozyMode ? "Cozy Light Mode" : "Quiet Dark Mode"}
            >
              {cozyMode ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-cafe-gold" />}
            </button>

            {/* Book Table Button */}
            <button
              onClick={openBooking}
              className="px-5 py-2.5 bg-cafe-brown dark:bg-cafe-gold hover:bg-cafe-dark dark:hover:bg-cafe-beige text-cafe-bg dark:text-cafe-dark font-sans text-xs uppercase tracking-widest font-semibold rounded-none transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Book Table
            </button>
          </div>

          {/* Mobile Buttons */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setCozyMode(!cozyMode)}
              className="p-2 rounded-full text-cafe-dark dark:text-cafe-cream hover:bg-cafe-cream dark:hover:bg-cafe-brown/20 transition-colors"
            >
              {cozyMode ? <Sun className="w-4.5 h-4.5 text-amber-500" /> : <Moon className="w-4.5 h-4.5 text-cafe-gold" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-cafe-dark dark:text-cafe-cream hover:bg-cafe-cream dark:hover:bg-cafe-brown/20 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[64px] z-40 bg-cafe-bg dark:bg-cafe-dark border-b border-cafe-beige/40 dark:border-cafe-brown/20 shadow-xl py-6 px-6 md:hidden flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-sm font-medium tracking-widest uppercase text-cafe-dark dark:text-cafe-cream border-b border-cafe-beige/20 pb-2 hover:text-cafe-gold"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openBooking();
              }}
              className="w-full py-3 bg-cafe-brown dark:bg-cafe-gold text-cafe-bg dark:text-cafe-dark text-xs uppercase tracking-widest font-semibold rounded-none shadow-md"
            >
              Book a Table
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
