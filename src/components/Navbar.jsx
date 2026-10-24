import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, MailOpen } from 'lucide-react';
import { romanticAudio } from '../utils/audioSynth';

export default function Navbar({ onReopenEnvelope }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMusic = () => {
    const active = romanticAudio.toggle();
    setIsPlaying(active);
  };

  // Meniu minimalist, curat și esențial (doar 4 secțiuni cheie)
  const navLinks = [
    { label: 'Eveniment & Data', href: '#data' },
    { label: 'Programul Zilei', href: '#program' },
    { label: 'Cazare & Călătorie', href: '#ghid-calatorie' },
    { label: 'Confirmă (RSVP)', href: '#rsvp' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#3b060d]/95 backdrop-blur-md py-3 shadow-lg border-b border-[#d4af37]/30'
            : 'bg-gradient-to-b from-[#2b0409]/90 to-transparent py-4'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Monogramă Sergiu & Alina */}
            <a
              href="#invitatie"
              className="flex items-center space-x-3 text-white no-underline transition-transform hover:scale-105"
            >
              <div className="w-10 h-10 rounded-full bg-[#741120] border-2 border-[#d4af37] flex items-center justify-center shadow-md">
                <span className="text-white text-lg">♥</span>
              </div>
              <div className="flex flex-col">
                <span className="font-['Cinzel'] tracking-widest text-xs uppercase text-[#d4af37] font-semibold">
                  Alina &amp; Sergiu
                </span>
                <span className="font-['Pinyon_Script'] text-2xl leading-none text-white font-normal">
                  16 Iulie 2027
                </span>
              </div>
            </a>

            {/* Meniu Desktop Minimalist */}
            <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold tracking-wide">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/90 hover:text-[#d4af37] transition-colors text-sm uppercase tracking-wider font-medium"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Butoane Acțiune: Muzică, Plic & Confirmă */}
            <div className="flex items-center space-x-3">
              {/* Buton Revedere Plic Introductiv */}
              {onReopenEnvelope && (
                <button
                  onClick={onReopenEnvelope}
                  className="hidden sm:inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-[#FAF7F2] border border-white/20 transition-all"
                  title="Deschide din nou plicul invitației"
                >
                  <MailOpen className="w-4 h-4 text-[#d4af37]" />
                  <span>Plicul</span>
                </button>
              )}

              {/* Buton Muzică Clar & Ușor de înțeles */}
              <button
                onClick={toggleMusic}
                aria-label={isPlaying ? 'Oprește muzica' : 'Pornește muzica'}
                className={`flex items-center space-x-2 px-3.5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all border ${
                  isPlaying
                    ? 'bg-[#741120] border-[#d4af37] text-[#fbe8a6] shadow-md shadow-[#741120]/40'
                    : 'bg-black/40 border-white/25 text-white hover:border-[#d4af37]'
                }`}
              >
                {isPlaying ? (
                  <>
                    <Volume2 className="w-4 h-4 text-[#d4af37] animate-pulse" />
                    <span>Muzică: Pornită</span>
                  </>
                ) : (
                  <>
                    <VolumeX className="w-4 h-4" />
                    <span>Muzică</span>
                  </>
                )}
              </button>

              {/* Buton RSVP Desktop */}
              <a
                href="#rsvp"
                className="hidden lg:inline-flex items-center px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase bg-gradient-to-r from-[#d4af37] to-[#e8c869] text-[#2c0409] hover:brightness-110 shadow-lg transition-transform hover:scale-105"
              >
                Confirmă
              </a>

              {/* Buton Meniu Mobil */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Deschide meniul"
                className="md:hidden p-2 rounded-lg text-white hover:text-[#d4af37] focus:outline-none"
              >
                {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Dropdown Mobil Aerisit */}
        {isOpen && (
          <div className="md:hidden bg-[#2b0409]/98 border-b-2 border-[#d4af37]/40 px-6 pt-4 pb-6 shadow-2xl transition-all">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="py-2 text-white hover:text-[#d4af37] text-base uppercase tracking-wider font-semibold border-b border-white/10"
                >
                  {link.label}
                </a>
              ))}

              {onReopenEnvelope && (
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onReopenEnvelope();
                  }}
                  className="flex items-center space-x-2 py-3 text-sm font-semibold uppercase tracking-wider text-[#d4af37]"
                >
                  <MailOpen className="w-5 h-5" />
                  <span>Deschide din nou plicul de nuntă</span>
                </button>
              )}

              <a
                href="#rsvp"
                onClick={() => setIsOpen(false)}
                className="text-center py-3.5 rounded-full text-sm font-bold tracking-wider uppercase bg-gradient-to-r from-[#d4af37] to-[#e8c869] text-[#2c0409] shadow-lg mt-2"
              >
                Confirmă Prezența (RSVP)
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Bară Minimalistă de Acțiune Rapidă pentru Telefoane Mobile */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-30 flex items-center gap-3">
        <a
          href="#data"
          className="flex-1 py-3 px-4 rounded-2xl bg-[#3b060d]/95 backdrop-blur-md border border-[#d4af37]/50 text-white text-center text-xs sm:text-sm font-bold uppercase tracking-wider shadow-xl flex items-center justify-center gap-1.5"
        >
          <span>Data &amp; Locație</span>
        </a>
        <a
          href="#rsvp"
          className="flex-1 py-3 px-4 rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#e8c869] text-[#2c0409] text-center text-xs sm:text-sm font-bold uppercase tracking-wider shadow-2xl flex items-center justify-center gap-1.5"
        >
          <span>Confirmă (RSVP)</span>
        </a>
      </div>
    </>
  );
}
