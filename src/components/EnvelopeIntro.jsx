import React, { useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { romanticAudio } from '../utils/audioSynth';
import { weddingDetails } from '../data/weddingDetails';

export default function EnvelopeIntro({ onOpenComplete }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleOpenEnvelope = () => {
    if (isAnimating || isOpen) return;
    setIsAnimating(true);

    // Pornim muzica ambientală caldă la interacțiunea utilizatorului
    try {
      romanticAudio.start();
    } catch (e) {
      console.warn("Audio start:", e);
    }

    // Efect de confetti auriu și roșu festiv la deschiderea sigiliului
    try {
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.55 },
        colors: ['#d4af37', '#741120', '#fbe8a6', '#b81d24', '#FAF7F2'],
      });
    } catch (e) {
      console.warn("Confetti:", e);
    }

    // Secvență de animație: deschidere clapetă, ridicare carte, tranziție
    setTimeout(() => {
      setIsOpen(true);
      setTimeout(() => {
        setIsAnimating(false);
        if (onOpenComplete) {
          onOpenComplete();
        }
      }, 1200);
    }, 800);
  };

  const handleSkip = () => {
    try {
      romanticAudio.start();
    } catch (e) {}
    setIsOpen(true);
    if (onOpenComplete) {
      onOpenComplete();
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#240306] bg-playing-card-pattern px-4 transition-all duration-1000 ${
        isOpen ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
    >
      {/* Halo de lumină caldă */}
      <div className="absolute w-[500px] h-[500px] bg-[#741120]/40 rounded-full blur-3xl pointer-events-none"></div>

      {/* Titlu Superior Introductiv */}
      <div className="text-center relative z-0 mb-6 sm:mb-8 animate-fadeIn">
        <div className="inline-flex items-center space-x-2 text-[#d4af37] text-sm font-semibold tracking-widest uppercase mb-2">
          <span className="w-8 h-px bg-[#d4af37]"></span>
          <span className="flex items-center gap-1.5 text-base">
            <Heart className="w-4 h-4 fill-[#d4af37]" /> Invitație de Nuntă
          </span>
          <span className="w-8 h-px bg-[#d4af37]"></span>
        </div>

        <h1 className="font-['Cinzel'] text-xl sm:text-2xl md:text-3xl text-[#FAF7F2] tracking-[0.2em] uppercase font-normal">
          {weddingDetails.couple.quoteHeader}
        </h1>

        <p className="font-['Pinyon_Script'] text-3xl sm:text-4xl text-[#fbe8a6] mt-1">
          {weddingDetails.couple.fullNameText}
        </p>
      </div>

      {/* ================= PLICUL REGAL DE NUNTĂ ================= */}
      <div
        onClick={handleOpenEnvelope}
        className="relative w-full max-w-[340px] sm:max-w-[420px] aspect-[4/3] cursor-pointer group z-30 select-none perspective-1000"
      >
        {/* Umbră profundă a plicului */}
        <div className="absolute inset-0 bg-black/60 rounded-2xl blur-xl transform translate-y-6"></div>

        {/* Corpul Plicului (Baza) */}
        <div className="relative w-full h-full bg-[#5a0c16] rounded-2xl border-2 border-[#d4af37]/60 shadow-2xl flex flex-col justify-between p-4 sm:p-6">
          {/* Triunghiul interior / buzunarul plicului */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#42060e] to-[#5a0c16] pointer-events-none rounded-2xl"></div>

          {/* Model geometric discret pe plic */}
          <div className="absolute inset-2 rounded-xl border border-[#d4af37]/25 pointer-events-none"></div>

          {/* Cartea din interior care se ridică la deschidere și acoperă textul de deasupra */}
          <div
            className={`absolute left-6 right-6 top-8 bottom-4 bg-[#FAF7F2] rounded-xl border border-[#d4af37] p-4 flex flex-col items-center justify-center text-center shadow-2xl transition-all duration-1000 ease-out ${
              isAnimating
                ? 'transform -translate-y-36 sm:-translate-y-44 scale-105 z-30'
                : 'transform translate-y-2 z-10'
            }`}
          >
            <span className="font-['Cinzel'] text-xs sm:text-sm tracking-widest text-[#741120] uppercase font-bold">
              Asul de Inimă Roșie
            </span>
            <div className="text-[#b81d24] text-4xl sm:text-5xl my-1 animate-pulse">
              ♥
            </div>
            <span className="font-['Pinyon_Script'] text-2xl sm:text-3xl text-[#221A1A]">
              Sergiu &amp; Alina
            </span>
            <span className="font-['Cinzel'] text-xs sm:text-sm text-[#741120] font-semibold mt-1">
              16 Iulie 2027 • Avegarden
            </span>
          </div>

          {/* Clapeta din față a plicului (triunghiul de jos / lateral) */}
          <div className="absolute inset-0 pointer-events-none z-20 flex flex-col justify-end rounded-2xl overflow-hidden">
            <svg
              viewBox="0 0 400 300"
              className="w-full h-full preserve-3d"
              style={{ filter: 'drop-shadow(0 -4px 8px rgba(0,0,0,0.3))' }}
            >
              {/* Clapeta de jos a plicului */}
              <polygon
                points="0,300 400,300 200,160"
                fill="#4a0812"
                stroke="#d4af37"
                strokeWidth="1.5"
              />
              {/* Clapeta stânga */}
              <polygon
                points="0,0 0,300 200,160"
                fill="#540a15"
                opacity="0.95"
              />
              {/* Clapeta dreapta */}
              <polygon
                points="400,0 400,300 200,160"
                fill="#540a15"
                opacity="0.95"
              />
            </svg>
          </div>

          {/* Clapeta Superioară (care se deschide în sus la click) */}
          <div
            className={`absolute top-0 left-0 right-0 h-1/2 z-30 origin-top transition-transform duration-700 ease-in-out ${
              isAnimating ? 'transform -rotate-x-180 opacity-0' : 'transform rotate-x-0'
            }`}
          >
            <svg viewBox="0 0 400 160" className="w-full h-full drop-shadow-md">
              <polygon
                points="0,0 400,0 200,160"
                fill="#6b0f1a"
                stroke="#d4af37"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          {/* ================= SIGILIUL DE CEARĂ AURIT (Butonul central) ================= */}
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 transition-all duration-500 ${
              isAnimating ? 'scale-125 opacity-0 rotate-45' : 'scale-100 hover:scale-110'
            }`}
          >
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#b81d24] via-[#8c1628] to-[#4d0812] border-2 border-[#d4af37] shadow-[0_8px_25px_rgba(0,0,0,0.6)] flex items-center justify-center text-center">
              {/* Cerc auriu canelat */}
              <div className="absolute inset-1.5 rounded-full border border-[#fbe8a6]/40 flex items-center justify-center">
                <span className="font-['Pinyon_Script'] text-2xl sm:text-3xl text-[#FAF7F2] select-none font-bold drop-shadow">
                  S&amp;A
                </span>
              </div>

              {/* Puls de atenționare */}
              <span className="absolute -inset-1 rounded-full border border-[#d4af37]/60 animate-ping opacity-75 pointer-events-none"></span>
            </div>
          </div>
        </div>

        {/* Text ghidaj mare și clar sub plic */}
        <div className="mt-5 text-center">
          <p className="font-['Cinzel'] text-sm sm:text-base tracking-[0.18em] text-[#fbe8a6] uppercase font-semibold flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-[#d4af37]" />
            <span>Atingeți sigiliul pentru a deschide invitația</span>
            <Sparkles className="w-4 h-4 text-[#d4af37]" />
          </p>
        </div>
      </div>
    </div>
  );
}
