import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Spaces from './components/Spaces';
import CreatorsHideout from './components/CreatorsHideout';
import InstagramGallery from './components/InstagramGallery';
import Events from './components/Events';
import Reviews from './components/Reviews';
import SecretNook from './components/SecretNook';
import Location from './components/Location';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ReservationModal from './components/ReservationModal';

export default function App() {
  const [cozyMode, setCozyMode] = useState<boolean>(false);
  const [bookingOpen, setBookingOpen] = useState<boolean>(false);

  // Sync Cozy Mode (Dark Mode) with the document element
  useEffect(() => {
    if (cozyMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [cozyMode]);

  return (
    <div className="min-h-screen bg-cafe-bg dark:bg-cafe-dark transition-colors duration-700 font-sans selection:bg-cafe-gold selection:text-cafe-dark">
      {/* Navigation */}
      <Navbar
        cozyMode={cozyMode}
        setCozyMode={setCozyMode}
        openBooking={() => setBookingOpen(true)}
      />

      {/* Main Content */}
      <main>
        {/* Cinematic Hero */}
        <Hero openBooking={() => setBookingOpen(true)} />

        {/* Editorial Story */}
        <About />

        {/* Filterable Signature Menu */}
        <Menu />

        {/* Dynamic Architectural Spaces Showcase */}
        <Spaces />

        {/* Creator’s Hideout Resource Spotlight */}
        <CreatorsHideout />

        {/* Interactive Social/Instagram Grid */}
        <InstagramGallery />

        {/* Workshops & Poetry RSVP Center */}
        <Events />

        {/* Guestbook Testimonial Slider & Submission */}
        <Reviews />

        {/* Unlocked Secret Member Nook */}
        <SecretNook />

        {/* Maps & Address Panel */}
        <Location />

        {/* Subscription Block */}
        <Newsletter />
      </main>

      {/* Site Footer */}
      <Footer />

      {/* Reservation Scheduler Modal */}
      <ReservationModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </div>
  );
}
