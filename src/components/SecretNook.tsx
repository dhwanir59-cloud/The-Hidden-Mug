import { useState, useRef, useEffect, FormEvent } from 'react';
import { SECRET_MENU_ITEMS } from '../data/cafeData';
import { Lock, Unlock, Play, Pause, Sparkles, Check, Key, QrCode, Music, Gift, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function SecretNook() {
  const [passcode, setPasscode] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [scanning, setScanning] = useState(false);

  // Music Player Simulation
  const [playingTrackIdx, setPlayingTrackIdx] = useState<number | null>(null);
  const [trackProgress, setTrackProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const playlist = [
    { title: 'Acoustic Rain in Kyoto', artist: 'Haru Sato', duration: '3:45' },
    { title: 'Midnight Coffee Beans', artist: 'The Lofi Collective', duration: '2:58' },
    { title: 'Stonecutter Jazz Improvisation', artist: 'The Vault Quartet', duration: '4:12' },
    { title: 'Fairy Lights & Lavender Foam', artist: 'Maya Lin Ambiance', duration: '3:15' },
  ];

  useEffect(() => {
    if (playingTrackIdx !== null) {
      intervalRef.current = setInterval(() => {
        setTrackProgress((p) => {
          if (p >= 100) {
            setPlayingTrackIdx((idx) => (idx !== null && idx < playlist.length - 1 ? idx + 1 : 0));
            return 0;
          }
          return p + 4;
        });
      }, 1000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [playingTrackIdx]);

  const handleTrackPlayToggle = (idx: number) => {
    if (playingTrackIdx === idx) {
      setPlayingTrackIdx(null);
    } else {
      setPlayingTrackIdx(idx);
      setTrackProgress(0);
    }
  };

  const handleUnlockWithPasscode = (e: FormEvent) => {
    e.preventDefault();
    if (passcode.trim().toUpperCase() === 'MUGJOURNEY') {
      setIsUnlocked(true);
      setErrorMsg('');
    } else {
      setErrorMsg('Invalid code. Look for a clue nearby or scan the member card.');
    }
  };

  const simulateQRScan = () => {
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
      setIsUnlocked(true);
      setErrorMsg('');
    }, 2000);
  };

  const lockNook = () => {
    setIsUnlocked(false);
    setPasscode('');
    setPlayingTrackIdx(null);
  };

  return (
    <section id="nook" className="py-24 md:py-32 bg-cafe-dark text-cafe-bg relative overflow-hidden transition-colors duration-500">
      {/* Floating copper dust particles for cozy mood */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute w-2 h-2 rounded-full bg-cafe-gold top-10 left-10 sparkle-slow" />
        <div className="absolute w-3 h-3 rounded-full bg-cafe-gold top-40 right-20 sparkle-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute w-1.5 h-1.5 rounded-full bg-cafe-gold bottom-10 left-1/3 sparkle-slow" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatePresence mode="wait">
          {!isUnlocked ? (
            /* locked entry page */
            <motion.div
              key="locked-state"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="max-w-xl mx-auto text-center py-12 border border-cafe-brown/40 bg-[#1A1311] p-8 md:p-12 relative"
            >
              {/* Badge (Matching Design HTML exactly) */}
              <div className="absolute -top-12 right-6 md:right-12 w-24 h-24 bg-cafe-gold rounded-full flex items-center justify-center text-center text-[10px] font-sans font-bold text-white uppercase tracking-wider rotate-[-15deg] shadow-lg border border-cafe-cream/10 z-10 select-none">
                MEMBER<br />EXCLUSIVE
              </div>

              {/* Gold borders */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cafe-gold to-transparent" />

              <div className="w-14 h-14 rounded-full bg-cafe-brown text-cafe-gold flex items-center justify-center mx-auto mb-6 border border-cafe-gold/30">
                <Lock className="w-6 h-6 animate-pulse" />
              </div>

              <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-cafe-gold font-bold block mb-2">
                09 / Secret Member Nook
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-cafe-bg font-light tracking-tight mb-4">
                Unlock The Hidden Nook
              </h2>
              <p className="text-xs text-cafe-cream/70 leading-relaxed font-sans font-light mb-8 max-w-md mx-auto">
                Members unlock our secret single-origin menu items, quiet study acoustic playlists, exclusive event invites, and double-stamp loyalty rewards.
              </p>

              {/* Enter Passcode */}
              <form onSubmit={handleUnlockWithPasscode} className="space-y-4 mb-6">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter Secret Passcode..."
                    value={passcode}
                    onChange={(e) => setPasscode(e.target.value)}
                    className="flex-1 px-4 py-3 bg-[#241A18] border border-cafe-brown/40 text-sm text-cafe-bg placeholder-cafe-cream/30 focus:outline-none focus:border-cafe-gold"
                  />
                  <button
                    type="submit"
                    className="px-6 bg-cafe-gold text-cafe-dark font-mono text-xs uppercase tracking-widest font-bold hover:bg-cafe-beige transition-colors flex items-center gap-1"
                  >
                    <Key className="w-4 h-4" />
                    Unlock
                  </button>
                </div>
                {errorMsg && (
                  <p className="text-red-400 font-mono text-[10px] uppercase tracking-wide text-left">
                    {errorMsg}
                  </p>
                )}
              </form>

              {/* QR / Instant Unlock Options */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t border-cafe-brown/20 text-xs">
                <button
                  onClick={simulateQRScan}
                  disabled={scanning}
                  className="flex items-center gap-2 text-cafe-gold hover:text-cafe-cream transition-colors text-[10px] uppercase tracking-widest font-mono font-semibold"
                >
                  <QrCode className="w-4 h-4" />
                  {scanning ? 'Scanning Member Card...' : 'Simulate Member Scan'}
                </button>
                <div className="hidden sm:block h-3 w-px bg-cafe-brown/40" />
                <div className="text-cafe-cream/50">
                  Hint: Try passcode <span className="font-mono text-cafe-gold font-bold bg-[#241A18] px-1.5 py-0.5 rounded">MUGJOURNEY</span>
                </div>
              </div>

              {/* Scanning visual overlay */}
              {scanning && (
                <div className="absolute inset-0 bg-[#120B0A]/90 flex flex-col items-center justify-center gap-4">
                  <div className="w-16 h-16 border-2 border-cafe-gold relative flex items-center justify-center">
                    <div className="absolute inset-x-0 h-0.5 bg-cafe-gold/80 animate-[bounce_2s_infinite]" />
                    <QrCode className="w-10 h-10 text-cafe-gold/50" />
                  </div>
                  <span className="text-xs uppercase tracking-widest font-mono text-cafe-gold animate-pulse">
                    Reading QR Member Seal...
                  </span>
                </div>
              )}
            </motion.div>
          ) : (
            /* Unlocked Magical Nook View */
            <motion.div
              key="unlocked-state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="space-y-16"
            >
              {/* Unlocked Banner Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-cafe-brown/20 pb-8 gap-6">
                <div>
                  <div className="flex items-center gap-2 text-cafe-gold text-xs font-mono uppercase tracking-[0.25em] mb-2 font-bold">
                    <Unlock className="w-4 h-4 animate-bounce" />
                    Vault Access Unlocked
                  </div>
                  <h2 className="font-serif text-3xl md:text-5xl text-cafe-bg font-light tracking-tight">
                    Welcome to the <span className="italic font-normal text-cafe-gold">Nook Lounge</span>.
                  </h2>
                </div>
                <button
                  onClick={lockNook}
                  className="px-4 py-2 border border-cafe-brown text-cafe-cream/60 hover:text-cafe-gold hover:border-cafe-gold text-[10px] font-mono uppercase tracking-widest font-bold"
                >
                  Exit Nook
                </button>
              </div>

              {/* 2-Column Grid of Rewards */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left Column: Secret Menu */}
                <div className="lg:col-span-7">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-cafe-gold font-bold block mb-6">
                    [NOOK RECIPES] SECRET COFFEE & PASTRY MENU
                  </span>

                  <div className="space-y-6">
                    {SECRET_MENU_ITEMS.map((item) => (
                      <div
                        key={item.id}
                        className="flex gap-4 p-4 bg-[#1A1311] border border-cafe-brown/30 relative overflow-hidden group"
                      >
                        <div className="w-20 h-20 bg-cafe-cream flex-shrink-0 overflow-hidden relative border border-cafe-brown/10">
                          <img
                            src={item.image}
                            alt={item.name}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                          />
                        </div>
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-start gap-4">
                              <h4 className="font-serif text-lg text-cafe-bg group-hover:text-cafe-gold transition-colors">
                                {item.name}
                              </h4>
                              <span className="font-mono text-sm text-cafe-gold font-bold">
                                {item.price}
                              </span>
                            </div>
                            <p className="text-xs text-cafe-cream/70 leading-relaxed font-sans font-light mt-1">
                              {item.description}
                            </p>
                          </div>
                          {/* Secret code label */}
                          <div className="flex gap-1.5 items-center mt-2">
                            <span className="text-[8px] font-mono uppercase tracking-widest bg-cafe-gold/10 text-cafe-gold px-2 py-0.5 border border-cafe-gold/20">
                              MEMBER EXCLUSIVE
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column: Playlists & Perks */}
                <div className="lg:col-span-5 space-y-10">
                  {/* Playlist Board */}
                  <div className="p-6 bg-[#1A1311] border border-cafe-brown/30">
                    <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-cafe-gold font-bold block mb-4 flex items-center gap-1.5">
                      <Music className="w-4 h-4 text-cafe-gold" />
                      Hidden Lofi & Rain Playlists
                    </span>

                    <div className="space-y-3">
                      {playlist.map((track, idx) => {
                        const isThisPlaying = playingTrackIdx === idx;
                        return (
                          <div
                            key={idx}
                            className={`p-3 border transition-colors flex items-center justify-between gap-3 ${
                              isThisPlaying
                                ? 'bg-cafe-brown/20 border-cafe-gold/40'
                                : 'border-cafe-brown/10 hover:bg-[#221917]'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <button
                                onClick={() => handleTrackPlayToggle(idx)}
                                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                                  isThisPlaying ? 'bg-cafe-gold text-cafe-dark' : 'bg-cafe-brown/40 text-cafe-cream hover:bg-cafe-gold/20'
                                }`}
                              >
                                {isThisPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
                              </button>
                              <div>
                                <span className={`text-xs block font-sans ${isThisPlaying ? 'text-cafe-gold font-bold' : 'text-cafe-bg'}`}>
                                  {track.title}
                                </span>
                                <span className="text-[9px] text-cafe-cream/50 block font-mono">
                                  {track.artist}
                                </span>
                              </div>
                            </div>
                            <span className="font-mono text-[10px] text-cafe-cream/40">
                              {track.duration}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Progress slider simulation */}
                    {playingTrackIdx !== null && (
                      <div className="mt-4 pt-4 border-t border-cafe-brown/20">
                        <div className="flex justify-between font-mono text-[8px] text-cafe-cream/40 mb-1">
                          <span>NOW STREAMING</span>
                          <span>{trackProgress}% COMPLETE</span>
                        </div>
                        <div className="w-full h-1 bg-cafe-brown/40 relative">
                          <div
                            className="absolute top-0 left-0 h-full bg-cafe-gold transition-all duration-1000"
                            style={{ width: `${trackProgress}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Loyalty perks */}
                  <div className="p-6 bg-[#1A1311] border border-cafe-brown/30 relative">
                    <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-cafe-gold font-bold block mb-4 flex items-center gap-1.5">
                      <Gift className="w-4 h-4" />
                      VIP Membership Card
                    </span>

                    <div className="border border-dashed border-cafe-gold/20 p-4 bg-[#221A18] rounded-none">
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <span className="font-serif text-lg text-cafe-bg block">THE HIDDEN MUG</span>
                          <span className="text-[8px] font-mono text-cafe-gold uppercase tracking-widest block">PASSCODE MEMBER ID: #49339-HM</span>
                        </div>
                        <span className="text-[10px] font-mono text-cafe-sage font-bold uppercase tracking-widest bg-cafe-sage/10 px-2 py-0.5 border border-cafe-sage/20">
                          Active
                        </span>
                      </div>

                      {/* stamp card */}
                      <span className="text-[9px] uppercase tracking-widest font-mono text-cafe-gold/60 block mb-2 font-bold">
                        Loyalty Stamp Board
                      </span>
                      <div className="grid grid-cols-5 gap-2">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <div
                            key={index}
                            className={`aspect-square border border-cafe-brown/40 flex items-center justify-center relative ${
                              index < 3 ? 'bg-cafe-brown/20 border-cafe-gold/30 text-cafe-gold' : 'text-cafe-cream/20'
                            }`}
                          >
                            {index < 3 ? <Sparkles className="w-4 h-4 animate-spin-slow" /> : <span className="font-mono text-xs">{index + 1}</span>}
                          </div>
                        ))}
                      </div>
                      <span className="text-[8px] font-mono text-cafe-cream/50 mt-3 block leading-relaxed">
                        * Members receive double stamps on all weekend seasonal pour-overs. Redeem 5 stamps for a complimentary signature choux or coffee of your choice.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
